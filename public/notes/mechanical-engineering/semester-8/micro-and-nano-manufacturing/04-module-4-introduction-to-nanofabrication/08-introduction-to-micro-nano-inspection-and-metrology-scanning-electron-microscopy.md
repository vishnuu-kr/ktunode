---
title: "Introduction to micro-nano inspection and metrology - Scanning electron microscopy- principle and description, Scanning white light interferometry- principle and description. Optical microscopy- principle and description. Scanning probe microscopy, Scanning tunnelling microscopy- principle, description and applications. Confocal microscopy, Atomic force microscopy- principle and description. Introduction to On-machine metrology."
subject: "MICRO AND NANO MANUFACTURING"
module: "Module 4: Introduction to Nanofabrication"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf48044644e2"
status: "completed"
scrapedAt: "2026-05-20T18:22:19.224Z"
---
# Module 4: Introduction to Nanofabrication - Topic: Introduction to Micro-Nano Inspection and Metrology

## 1. Introduction to Micro-Nano Inspection and Metrology

Metrology is the science of measurement, and in the context of micro- and nano-manufacturing, it is crucial for ensuring the accuracy, quality, and functionality of fabricated structures. Inspection involves examining these structures to identify defects or verify specifications. Micro-nano inspection and metrology are specialized fields that utilize advanced techniques to measure and characterize features at the micro- and nanoscale.

**Why is Metrology Critical in Micro-Nano Manufacturing?**

*   **Dimensional Accuracy:** Components at these scales have extremely tight tolerances. Even minor deviations can lead to device failure.
*   **Surface Finish:** Surface roughness and topography significantly impact performance (e.g., friction, adhesion, optical properties).
*   **Feature Verification:** Ensuring that specific features (e.g., nanoscale patterns, MEMS components) are fabricated as designed.
*   **Defect Detection:** Identifying microscopic flaws that can compromise device reliability.
*   **Process Control:** Providing feedback for optimizing manufacturing processes.

**Key Concepts:**

*   **Resolution:** The smallest feature that can be distinguished.
*   **Accuracy:** The degree of closeness of measurements to the true value.
*   **Precision:** The degree to which repeated measurements show the same results.
*   **Magnification:** The factor by which an object is enlarged.

**(CO1: Explain different techniques used in micro and nano manufacturing - K2)**
**(CO5: Select a suitable Metrology for measurement of dimensional, form, and surface integrity of components manufacturing using micro and nano Manufacturing - K2)**

---

## 2. Optical Microscopy

Optical microscopy is a fundamental technique that uses visible light and a system of lenses to magnify and observe specimens. It's a versatile and relatively inexpensive method for visualizing micro-scale features.

### 2.1. Principle of Optical Microscopy

The principle relies on the diffraction and refraction of light. A light source illuminates the specimen, and lenses are used to magnify the image.

1.  **Illumination:** Light from a source (e.g., incandescent bulb, LED) passes through the specimen.
2.  **Objective Lens:** This lens, closest to the specimen, forms a magnified, real image. The magnification of the objective lens is a critical parameter.
3.  **Eyepiece Lens (Ocular):** This lens further magnifies the real image formed by the objective, producing a virtual, magnified image that the observer sees.

**Formula:**
Total Magnification = Magnification of Objective Lens × Magnification of Eyepiece Lens

### 2.2. Description of Optical Microscopy

*   **Types:**
    *   **Bright-field Microscopy:** The most common type. The specimen is illuminated from below, and it appears dark against a bright background. Suitable for transparent or translucent specimens.
    *   **Dark-field Microscopy:** The specimen is illuminated from the side at an angle. Only light scattered by the specimen enters the objective, making it appear bright against a dark background. Excellent for viewing unstained, transparent specimens.
    *   **Phase Contrast Microscopy:** Converts differences in refractive index within the specimen into brightness variations in the image. Useful for viewing living cells or unstained biological samples.
    *   **Differential Interference Contrast (DIC) Microscopy:** Similar to phase contrast but provides a pseudo-3D appearance, enhancing the visualization of surface topography and internal structures.

*   **Components:**
    *   Light Source
    *   Condenser (focuses light onto the specimen)
    *   Stage (holds the specimen)
    *   Objective Lenses (various magnifications)
    *   Eyepiece Lenses
    *   Focusing Knobs (coarse and fine)

*   **Limitations:**
    *   **Resolution Limit:** Limited by the wavelength of visible light (typically around 200 nm). Cannot resolve features smaller than this.
    *   **Depth of Field:** The range of distances that are in acceptable focus. It's often shallow at high magnifications.
    *   **Contrast:** May require staining for some specimens.

**(CO1: Explain different techniques used in micro and nano manufacturing - K2)**
**(CO5: Select a suitable Metrology for measurement of dimensional, form, and surface integrity of components manufacturing using micro and nano Manufacturing - K2)**

---

## 3. Scanning Electron Microscopy (SEM)

Scanning Electron Microscopy (SEM) is a powerful imaging technique that uses a focused beam of electrons to scan the surface of a sample, producing a high-resolution, magnified image. It overcomes the resolution limitations of optical microscopy.

### 3.1. Principle of Scanning Electron Microscopy

The fundamental principle is the interaction of a focused electron beam with the sample's surface.

1.  **Electron Gun:** Generates a beam of electrons (typically from a heated filament, like Tungsten or LaB6, or a field emission source).
2.  **Electron Optics:** A series of electromagnetic lenses (condenser and objective lenses) focus the electron beam to a very small spot (down to a few nanometers).
3.  **Scanning Coils:** Deflect the electron beam, causing it to scan across the sample's surface in a raster pattern (line by line).
4.  **Electron-Sample Interaction:** As the electron beam strikes the sample, various signals are generated:
    *   **Secondary Electrons (SE):** Low-energy electrons emitted from the sample surface due to inelastic collisions with the primary beam. These are highly sensitive to surface topography and are the primary signal for obtaining high-resolution images.
    *   **Backscattered Electrons (BSE):** High-energy electrons from the primary beam that are elastically scattered back out of the sample. The yield of BSE depends on the atomic number (Z) of the elements in the sample. Areas with higher atomic numbers appear brighter.
    *   **X-rays:** Characteristic X-rays are emitted when primary electrons knock out inner-shell electrons, and outer-shell electrons fall to fill the vacancy. The energy of these X-rays is specific to the elements present, enabling elemental analysis (Energy Dispersive X-ray Spectroscopy - EDS).
    *   **Auger Electrons:** Surface-sensitive electrons characteristic of the elements present.
    *   **Cathodoluminescence (CL):** Light emitted from the sample due to electron beam excitation.

5.  **Detectors:** Detectors are positioned to collect these generated signals.
    *   **Secondary Electron Detector (Everhart-Thornley Detector):** Collects SE and provides topographical information.
    *   **Backscattered Electron Detector:** Collects BSE and provides compositional (atomic number) contrast.
    *   **EDS Detector:** Collects X-rays for elemental analysis.

6.  **Image Formation:** The intensity of the detected signal at each point of the raster scan is used to modulate the brightness of a corresponding pixel on a display screen, building up the image.

### 3.2. Description of Scanning Electron Microscopy

*   **Key Features:**
    *   **High Resolution:** Typically in the range of 1-10 nm, allowing visualization of nanoscale features.
    *   **Large Depth of Field:** Produces images with a significant range in focus, giving a good 3D appearance.
    *   **Surface Sensitivity:** Primarily images the surface topography.
    *   **Vacuum Environment:** Samples must be placed in a high vacuum to prevent electron scattering by air molecules. This means samples must be stable in vacuum and dry.
    *   **Sample Preparation:** Often requires coating with a conductive layer (e.g., gold, carbon) for non-conductive samples to prevent charging effects.

*   **Applications:**
    *   Surface characterization of materials.
    *   Imaging of micro- and nanostructured devices (MEMS, NEMS).
    *   Failure analysis.
    *   Biological sample imaging (after appropriate preparation).
    *   Elemental analysis (with EDS).

**(CO1: Explain different techniques used in micro and nano manufacturing - K2)**
**(CO5: Select a suitable Metrology for measurement of dimensional, form, and surface integrity of components manufacturing using micro and nano Manufacturing - K2)**

---

## 4. Scanning Probe Microscopy (SPM)

Scanning Probe Microscopy (SPM) is a family of techniques that uses a physical probe to scan the surface of a sample, measuring its properties at the atomic or molecular level. They are non-optical techniques that can achieve extremely high resolution.

---

### 4.1. Scanning Tunneling Microscopy (STM)

Scanning Tunneling Microscopy (STM) is a type of SPM that can image surfaces at the atomic level by measuring the quantum mechanical tunneling current between a sharp conducting probe tip and the conducting sample surface.

#### 4.1.1. Principle of Scanning Tunneling Microscopy

The principle is based on **quantum mechanical tunneling**.

1.  **Sharp Conducting Tip:** A very sharp, electrically conductive tip (ideally with a single atom at its apex) is brought very close to a conductive sample surface (within a few angstroms, ~0.1-1 nm).
2.  **Bias Voltage:** A small bias voltage is applied between the tip and the sample.
3.  **Tunneling Current:** When the tip is close enough, electrons can "tunnel" across the vacuum gap between the tip and the sample. This tunneling probability is extremely sensitive to the distance between the tip and the surface. The tunneling current ($I_t$) is approximately described by:
    $I_t \propto V e^{-2kd}$
    where $V$ is the bias voltage, $k$ is a constant related to the work function of the material, and $d$ is the tip-sample separation.

4.  **Scanning:** The tip is scanned across the sample surface in a raster pattern. The tunneling current is detected.
5.  **Feedback Loop:** A feedback loop is used to maintain a constant tunneling current (or constant height).
    *   **Constant Current Mode:** The feedback system adjusts the vertical position of the tip using a piezoelectric scanner to keep the tunneling current constant. The recorded vertical movement of the tip directly represents the surface topography. This is the most common mode for topographic imaging.
    *   **Constant Height Mode:** The tip is scanned at a fixed height above the surface. Variations in the tunneling current are recorded, which also reflect surface topography and electronic properties. This mode is faster but only suitable for very flat surfaces to avoid tip crashes.

#### 4.1.2. Description of Scanning Tunneling Microscopy

*   **Key Features:**
    *   **Atomic Resolution:** Capable of imaging individual atoms on conductive surfaces.
    *   **Surface Topography and Electronic Properties:** Can map both the physical height and the local electronic density of states.
    *   **Conductive Samples Only:** Requires the sample to be electrically conductive (or coated with a conductive layer).
    *   **Vacuum or Controlled Atmosphere:** Typically operated in ultra-high vacuum (UHV) to ensure cleanliness and prevent oxidation. Can also operate in air or liquids under specific conditions.
    *   **Tip Sharpness is Critical:** The resolution is highly dependent on the sharpness of the probe tip.

*   **Applications:**
    *   Imaging atomic structures of surfaces.
    *   Studying surface reconstruction and atomic arrangements.
    *   Measuring electronic properties of surfaces and nanostructures.
    *   Manipulating atoms and molecules on surfaces.
    *   Fabrication of atomic-scale patterns.

**(CO1: Explain different techniques used in micro and nano manufacturing - K2)**
**(CO5: Select a suitable Metrology for measurement of dimensional, form, and surface integrity of components manufacturing using micro and nano Manufacturing - K2)**

---

### 4.2. Atomic Force Microscopy (AFM)

Atomic Force Microscopy (AFM) is another type of SPM that measures the forces between a sharp probe tip and the sample surface to create a topographic map. Unlike STM, AFM can image non-conductive surfaces.

#### 4.2.1. Principle of Atomic Force Microscopy

The principle is based on measuring the **interatomic forces** between the tip and the sample surface.

1.  **Sharp Probe Tip:** A sharp tip, typically made of silicon or silicon nitride, is mounted on a flexible cantilever.
2.  **Forces:** As the tip approaches the surface, it experiences various forces:
    *   **Van der Waals forces:** Attractive forces dominant at slightly larger distances.
    *   **Electrostatic forces:** Can be attractive or repulsive depending on surface charges.
    *   **Repulsive (Pauli Exclusion) forces:** Strong repulsive forces dominant when the tip is very close to the surface (at atomic contact).

3.  **Cantilever Deflection:** The forces between the tip and the sample cause the cantilever to deflect. This deflection is monitored.
4.  **Detection System:** A common detection method is the **optical lever system**:
    *   A laser beam is reflected off the back of the cantilever onto a position-sensitive photodiode (PSPD).
    *   As the cantilever deflects due to tip-sample forces, the reflected laser spot moves on the PSPD, generating a signal proportional to the deflection.

5.  **Scanning Modes:**
    *   **Contact Mode:** The tip is in constant physical contact with the surface. The cantilever is pressed against the surface, and the feedback loop adjusts the vertical position to maintain a constant cantilever deflection (constant force). This mode can be used for soft samples but can potentially damage the surface or the tip.
    *   **Tapping Mode (Intermittent Contact Mode):** The cantilever is oscillated at or near its resonant frequency. The tip intermittently "taps" the surface. The feedback loop maintains a constant oscillation amplitude or phase shift, which is related to the tip-sample interaction forces. This mode is less damaging to the surface and is widely used for imaging delicate samples.
    *   **Non-Contact Mode:** The cantilever is oscillated at a distance above the surface where only attractive forces are dominant. The feedback loop maintains a constant oscillation frequency shift or amplitude. This mode is the least damaging but typically has lower lateral resolution compared to tapping mode.

#### 4.2.2. Description of Atomic Force Microscopy

*   **Key Features:**
    *   **Atomic Resolution:** Can achieve atomic resolution, especially in specific crystallographic arrangements.
    *   **Non-Conductive Samples:** Can image insulating, semiconducting, and conductive surfaces.
    *   **Versatile:** Can operate in air, liquids, and vacuum.
    *   **Topography and Force Mapping:** Can map surface topography and also measure local mechanical properties (e.g., friction, adhesion, elasticity) and electrical properties (e.g., conductivity, surface potential) using specialized tips.
    *   **Depth of Field:** Very large depth of field, allowing imaging of rough surfaces.

*   **Applications:**
    *   Surface topography measurement of a wide range of materials.
    *   Characterization of nanostructures, nanoparticles, and thin films.
    *   Imaging biological samples (cells, DNA) in their native environment (liquid).
    *   Measuring surface roughness.
    *   Nanofabrication and nanolithography (by modifying the surface with the tip).

**(CO1: Explain different techniques used in micro and nano manufacturing - K2)**
**(CO5: Select a suitable Metrology for measurement of dimensional, form, and surface integrity of components manufacturing using micro and nano Manufacturing - K2)**

---

## 5. Confocal Microscopy

Confocal microscopy is an optical microscopy technique that improves the optical resolution and contrast of a micrograph by means of a spatial filtering technique, which expels out-of-focus light.

### 5.1. Principle of Confocal Microscopy

The core principle involves using **pinholes** at conjugate focal planes to block out-of-focus light.

1.  **Point Illumination:** A focused beam of light (often a laser) illuminates a single point on the specimen.
2.  **Confocal Pinholes:**
    *   **Excitation Pinhole:** Located in front of the light source, allowing only light from a specific focal plane to reach the sample.
    *   **Detection Pinhole:** Placed in front of the detector, positioned conjugate to the excitation pinhole. Only light originating from the illuminated point within the focal plane can pass through this pinhole to reach the detector. Light from out-of-focus regions is largely blocked.
3.  **Scanning:** The laser beam is scanned across the sample point by point, and the image is built up electronically by recording the intensity of light passing through the detection pinhole at each scanned point.
4.  **Optical Sectioning:** By moving the focal plane up or down, "optical sections" of the specimen can be acquired. These sections can be digitally stacked to reconstruct a 3D image.

### 5.2. Description of Confocal Microscopy

*   **Key Features:**
    *   **Optical Sectioning Capability:** Ability to reject out-of-focus light, creating sharp images of thin slices of thick specimens.
    *   **3D Reconstruction:** Allows for the creation of 3D images from a series of optical sections.
    *   **Improved Resolution and Contrast:** Significantly higher resolution and contrast compared to conventional wide-field microscopy, especially for thick or scattering samples.
    *   **Point Illumination and Detection:** Essential for its operation.

*   **Applications:**
    *   Imaging thick biological samples, cells, and tissues.
    *   Surface metrology and 3D profiling of micro-objects.
    *   Material science applications requiring imaging of subsurface features.
    *   Quality control of microfabricated components where 3D information is needed.

**(CO1: Explain different techniques used in micro and nano manufacturing - K2)**
**(CO5: Select a suitable Metrology for measurement of dimensional, form, and surface integrity of components manufacturing using micro and nano Manufacturing - K2)**

---

## 6. Scanning White Light Interferometry (SWLI)

Scanning White Light Interferometry (also known as Optical Profilometry or White Light Interferometry - WLI) is a non-contact optical technique used for high-accuracy 3D surface measurement, particularly for micro-scale features and surface roughness.

### 6.1. Principle of Scanning White Light Interferometry

The principle is based on **interferometry** using **broadband (white) light**.

1.  **Interferometer Setup:** SWLI typically uses a Michelson or Mirau interferometer.
    *   **Light Source:** Broadband white light source.
    *   **Beam Splitter:** Splits the light into two paths: a reference path and a sample path.
    *   **Reference Mirror:** Reflects light from the reference path.
    *   **Sample:** The surface being measured reflects light from the sample path.

2.  **Interference:** When the optical path difference between the reference and sample beams is small (within the coherence length of white light), interference fringes are formed. White light has a very short coherence length, meaning interference only occurs when the path lengths are nearly equal.

3.  **Scanning:** The scanner moves either the reference mirror or the objective lens relative to the sample vertically. As this scan occurs, the system records the intensity of light at each vertical position.

4.  **Fringe Detection and Analysis:** For each pixel in the imaging sensor (e.g., CCD camera), the system detects a point where the interference fringe pattern is maximized. This occurs when the path difference is zero (or an integer multiple of the wavelength for monochromatic light, but here it's about the peak overlap of white light).
    *   The software analyzes the recorded intensity profile for each pixel to determine the exact vertical position corresponding to the maximum fringe contrast. This point represents the surface height at that pixel's lateral position.

5.  **3D Surface Reconstruction:** By performing this analysis for all pixels, a 3D height map of the sample surface is generated.

### 6.2. Description of Scanning White Light Interferometry

*   **Key Features:**
    *   **High Vertical Resolution:** Can achieve nanometer-level vertical resolution.
    *   **Non-Contact Measurement:** No physical contact with the sample, avoiding damage.
    *   **Fast Measurement:** Capable of rapid surface scanning compared to stylus profilometry.
    *   **Large Vertical Range:** Can measure surfaces with significant height variations.
    *   **Measures Surface Roughness and Topography:** Excellent for characterizing surface finish, micro-features, and overall form.

*   **Applications:**
    *   Surface roughness measurements of machined parts, optical components, and microelectronic devices.
    *   3D profiling of micro-electromechanical systems (MEMS).
    *   Inspection of semiconductor wafers and patterned surfaces.
    *   Characterization of thin films.

**(CO1: Explain different techniques used in micro and nano manufacturing - K2)**
**(CO5: Select a suitable Metrology for measurement of dimensional, form, and surface integrity of components manufacturing using micro and nano Manufacturing - K2)**

---

## 7. Introduction to On-Machine Metrology

On-machine metrology refers to the practice of performing measurement and inspection directly on the manufacturing machine during or immediately after a fabrication step, without removing the workpiece.

### 7.1. Principle of On-Machine Metrology

The principle is to integrate sensing and measurement capabilities directly into the manufacturing machinery (e.g., CNC machines, lithography tools, additive manufacturing systems).

1.  **Integrated Sensors:** Probes, vision systems, or other metrology devices are mounted on or near the machine's tool head or spindle.
2.  **In-Situ Measurement:** Measurements are taken while the workpiece is still fixtured on the machine.
3.  **Real-time Feedback:** The collected measurement data is used to provide immediate feedback to the manufacturing process.

### 7.2. Description of On-Machine Metrology

*   **Key Benefits:**
    *   **Reduced Setup Time:** Eliminates the need to remove, re-fixture, and re-align the workpiece for separate inspection steps.
    *   **Improved Accuracy:** Minimizes errors associated with repositioning the workpiece between manufacturing and inspection.
    *   **Process Control and Compensation:** Allows for real-time adjustments to the manufacturing process based on measured dimensions or surface characteristics (e.g., tool wear compensation, adaptive machining).
    *   **Reduced Scrap:** Early detection of deviations leads to prompt correction, preventing the production of faulty parts.
    *   **Increased Throughput:** Faster overall production cycle times.

*   **Types of On-Machine Measurement:**
    *   **Probe-based:** Using touch-trigger probes or scanning probes to measure critical dimensions or features.
    *   **Vision-based:** Employing cameras and image processing to inspect surface quality, identify defects, or measure features.
    *   **Laser-based:** Using laser scanners or triangulation systems for non-contact profiling.

*   **Challenges:**
    *   **Environmental Factors:** Machine vibrations, thermal expansion, and coolant can affect measurement accuracy.
    *   **Sensor Integration:** Designing robust and reliable sensors that can withstand the harsh manufacturing environment.
    *   **Calibration:** Ensuring accurate calibration of integrated metrology systems.
    *   **Software Integration:** Developing software for seamless data acquisition, analysis, and feedback to the machine control system.

*   **Applications in Micro-Nano Manufacturing:**
    *   Verifying dimensions of micro-machined features immediately after milling or turning.
    *   Checking alignment and feature placement in MEMS fabrication.
    *   Monitoring surface finish in precision grinding or polishing operations.
    *   Quality control in additive manufacturing of micro-parts.

**(CO2: Describe conventional techniques and non-conventional micro-nano manufacturing approaches - K2)** (Understanding on-machine metrology helps in appreciating the integration of metrology within manufacturing processes, which is a key aspect of modern manufacturing approaches.)
**(CO5: Select a suitable Metrology for measurement of dimensional, form, and surface integrity of components manufacturing using micro and nano Manufacturing - K2)**

---

## Practice Questions

**Multiple Choice Questions (MCQ):**

1.  Which microscopy technique is limited by the wavelength of visible light, typically around 200 nm?
    a) Scanning Electron Microscopy (SEM)
    b) Atomic Force Microscopy (AFM)
    c) Optical Microscopy
    d) Scanning Tunneling Microscopy (STM)

2.  In SEM, which type of electrons are primarily used for imaging surface topography?
    a) Backscattered Electrons (BSE)
    b) Secondary Electrons (SE)
    c) Characteristic X-rays
    d) Auger Electrons

3.  Which SPM technique requires the sample to be electrically conductive?
    a) Atomic Force Microscopy (AFM)
    b) Confocal Microscopy
    c) Scanning White Light Interferometry (SWLI)
    d) Scanning Tunneling Microscopy (STM)

4.  The ability of confocal microscopy to reject out-of-focus light is known as:
    a) Magnification
    b) Optical sectioning
    c) Quantum tunneling
    d) Interferometry

5.  On-machine metrology is beneficial because it:
    a) Requires removing the workpiece for inspection
    b) Reduces setup time and allows for real-time process adjustments
    c) Is limited to macro-scale features
    d) Does not provide feedback to the manufacturing process

**Short Answer Questions:**

6.  Briefly explain the primary advantage of SEM over optical microscopy.
7.  Describe the role of the feedback loop in a Constant Current mode STM.
8.  What is the fundamental principle behind Scanning White Light Interferometry?
9.  Name two advantages of using Atomic Force Microscopy over Scanning Tunneling Microscopy.
10. What is the main purpose of the pinholes in confocal microscopy?

---

## Answers to Practice Questions

**MCQ Answers:**

1.  **c) Optical Microscopy** (The resolution limit of optical microscopy is dictated by the wavelength of visible light.)
2.  **b) Secondary Electrons (SE)** (Secondary electrons are low-energy electrons emitted from the surface, making them highly sensitive to surface topography.)
3.  **d) Scanning Tunneling Microscopy (STM)** (STM relies on electron tunneling, which only occurs between conductive materials.)
4.  **b) Optical sectioning** (Confocal microscopy uses pinholes to isolate light from a specific focal plane, effectively creating optical slices.)
5.  **b) Reduces setup time and allows for real-time process adjustments** (This is a key benefit of integrating metrology directly onto the manufacturing machine.)

**Short Answer Answers:**

6.  **Advantage of SEM over Optical Microscopy:** SEM offers significantly higher resolution (down to nanometers) and a larger depth of field, allowing for the visualization of much finer details and a more 3D appearance of the sample surface compared to optical microscopy, which is limited by the wavelength of visible light.
7.  **Role of Feedback Loop in Constant Current STM:** In Constant Current mode STM, the feedback loop monitors the tunneling current. If the current deviates from a setpoint, the loop adjusts the vertical position of the piezoelectric scanner to move the tip closer to or further from the surface, thereby maintaining a constant tunneling current. This vertical movement of the tip directly maps the surface topography.
8.  **Fundamental Principle of SWLI:** SWLI relies on the interference of broadband (white) light. Interference fringes are generated when light beams reflected from a sample surface and a reference surface travel nearly identical path lengths. By scanning the vertical position and analyzing the fringe patterns for each pixel, a 3D surface height map is constructed.
9.  **Advantages of AFM over STM:**
    *   **Non-Conductive Samples:** AFM can image non-conductive (insulating) surfaces, whereas STM requires conductive samples.
    *   **Versatility:** AFM can operate in air, liquids, and vacuum, offering more flexibility in sample environments.
10. **Purpose of Pinholes in Confocal Microscopy:** The pinholes (one at the illumination source and one at the detector) are crucial for rejecting out-of-focus light. The excitation pinhole ensures only light from a specific focal plane illuminates the sample, and the detection pinhole allows only light originating from that same focal plane to reach the detector. This process is called optical sectioning and improves image contrast and resolution.

---

## Important Points to Remember

*   **Resolution is Key:** At the micro- and nanoscale, the ability to resolve fine features is paramount. Different techniques offer vastly different resolutions.
*   **Sample Properties Matter:** Whether a sample is conductive, its surface roughness, and its stability in vacuum are critical factors in selecting the appropriate metrology technique.
*   **Topography vs. Composition:** SEM provides both topographical (SE) and compositional (BSE, EDS) information, while AFM primarily provides topography and force mapping.
*   **Contact vs. Non-Contact:** Techniques like AFM can be either contact or non-contact, influencing the potential for sample damage. Optical microscopy, SWLI, and SEM are generally non-contact (though SEM involves electron beam interaction).
*   **In-Situ vs. Ex-Situ:** On-machine metrology emphasizes in-situ measurement for improved efficiency and process control.
*   **Trade-offs Exist:** Each technique has its strengths and weaknesses in terms of resolution, speed, cost, sample preparation, and the type of information obtained.
*   **Textbook Cross-Reference:**
    *   Jackson (2006 & 2007): Likely covers SEM, AFM, and optical microscopy principles and applications in detail, especially in the context of micro- and nano-manufacturing processes.
    *   Jain (2012 & 2017): May focus on precision measurement techniques, including optical methods and possibly SPM, in relation to micro-machining.
    *   Bandyopadhyay (2008): Could provide insights into nanostructure characterization using techniques like SPM.
    *   Hsu (2008): Will likely detail metrology relevant to MEMS and microsystems design and fabrication.

This comprehensive set of notes covers the introduction to micro-nano inspection and metrology, detailing the principles, descriptions, and applications of key techniques like optical microscopy, SEM, STM, AFM, confocal microscopy, and SWLI. It also introduces the concept of on-machine metrology, aligning with the provided course and learning outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
