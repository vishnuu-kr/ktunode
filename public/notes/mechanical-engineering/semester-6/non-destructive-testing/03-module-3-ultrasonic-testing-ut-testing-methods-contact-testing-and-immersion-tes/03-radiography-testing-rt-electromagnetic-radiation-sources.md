---
title: "Radiography Testing (RT):  Electromagnetic radiation sources."
subject: "NON – DESTRUCTIVE TESTING"
module: "Module 3: Ultrasonic Testing:  UT testing methods, contact testing and immersion testing, normal beam and straight beam testing, angle beam testing, dual crystal probe, ultrasonic testing techniques, resonance testing, through transmission technique, pulse echo testing technique, instruments used UT, accessories such as transducers, types, frequencies, and sizes commonly used."
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463894"
status: "completed"
scrapedAt: "2026-05-20T18:06:15.849Z"
---
# Non-Destructive Testing (NDT) - Study Notes

## Module 3: Ultrasonic Testing (UT) & Radiography Testing (RT)

This module provides a comprehensive overview of two fundamental Non-Destructive Testing (NDT) methods: Ultrasonic Testing (UT) and Radiography Testing (RT). We will explore the various techniques, instruments, and accessories used in UT, and delve into the electromagnetic radiation sources critical for RT.

**Course Outcomes Addressed:**

*   **CO1 (K2):** Have a basic knowledge of NDT Techniques which enables to carry out various inspections in accordance with the established procedures.
*   **CO2 (K2):** Familiarize with basic principles of electromagnetic NDT methods.
*   **CO3 (K3):** Apply the principles of signal processing of ultrasonic signals and image processing of radiographic images.
*   **CO4 (K2):** Have a better knowledge in the field of advanced techniques in NDT.

---

## Section 1: Ultrasonic Testing (UT)

Ultrasonic Testing (UT) is a non-destructive testing method that uses high-frequency sound waves to detect internal flaws and measure material thickness. The sound waves travel through the material, and when they encounter a discontinuity or boundary, they are reflected back to a receiver. The time it takes for the sound wave to travel and return, along with the amplitude of the reflected signal, provides information about the location and severity of the flaw.

**Key Concepts & Definitions:**

*   **Ultrasonic Waves:** Sound waves with frequencies above the upper limit of human hearing, typically in the range of 0.5 to 25 MHz.
*   **Transducer:** A device that converts electrical energy into ultrasonic sound waves and vice versa.
*   **Acoustic Impedance:** The product of the material's density and the speed of sound in that material. A significant difference in acoustic impedance at a material boundary causes reflection of the ultrasonic wave.
*   **Attenuation:** The loss of energy of the ultrasonic wave as it travels through the material due to absorption and scattering.
*   **Echo:** A reflected ultrasonic wave.
*   **Flaw:** An unintended discontinuity in a material, such as a crack, void, or inclusion.

---

### UT Testing Methods

UT employs various methods based on how the sound waves interact with the material and how the transducer is positioned.

#### 1. Contact Testing

*   **Description:** In contact testing, the transducer is placed directly on the surface of the material under inspection. A coupling medium (e.g., water, gel, glycerin) is used to eliminate air gaps between the transducer and the surface, ensuring efficient transmission of sound waves.
*   **Principle:** Sound waves are transmitted into the material, and reflections from internal flaws or the back wall are received by the same transducer (pulse-echo) or a separate transducer (through-transmission).
*   **Advantages:** Simple setup, portable, suitable for most surface conditions.
*   **Disadvantages:** Surface preparation is crucial, can be time-consuming for large areas.
*   **Reference:** Baldev Raj, "Practical Non-destructive Testing," Chapter 4 discusses contact testing principles.

#### 2. Immersion Testing

*   **Description:** The material and the transducer are fully submerged in a liquid bath (usually water). The water acts as both a coupling medium and a means to position the transducer at a precise distance from the material.
*   **Principle:** Similar to contact testing, but the constant distance and controlled environment allow for more precise measurements and scanning of complex shapes.
*   **Advantages:** Excellent coupling, suitable for inspecting components with irregular shapes or rough surfaces, allows for automated scanning.
*   **Disadvantages:** Requires a tank and a significant amount of couplant, not portable.
*   **Reference:** Hull V and V John, "Non-destructive Testing," Chapter 7 covers immersion testing techniques and their applications.

---

### UT Beam Types

The orientation of the ultrasonic beam relative to the material surface dictates the type of UT testing performed.

#### 1. Normal Beam (Straight Beam) Testing

*   **Description:** The ultrasonic beam is directed perpendicular (90 degrees) to the surface of the material.
*   **Principle:** Sound waves travel directly into the material and reflect off defects or the back wall. This method is primarily used for detecting internal flaws that are parallel to the surface or for thickness measurements.
*   **Applications:** Detection of laminar flaws (e.g., delaminations), voids, and measurement of material thickness.
*   **Transducer:** Typically a single element, normal incidence transducer.

#### 2. Angle Beam Testing

*   **Description:** The ultrasonic beam is directed into the material at an angle (other than 90 degrees) using a wedge or angled transducer. This creates longitudinal waves that are refracted into transverse (shear) waves within the material.
*   **Principle:** The angled beam allows for the detection of flaws that are oriented perpendicular to the surface, such as cracks. The sound waves are transmitted at an angle, reflecting off discontinuities at various angles.
*   **Applications:** Detection of surface-breaking cracks, weld inspection, and flaws in piping and forgings.
*   **Transducer:** Typically a single element transducer mounted on an angled wedge. The angle of the wedge determines the angle of the refracted beam.

---

### UT Transducer Components and Types

Transducers are the heart of UT systems, responsible for generating and receiving ultrasonic waves.

*   **Piezoelectric Crystal:** The core element of a transducer, typically made of a piezoelectric ceramic material (e.g., PZT - Lead Zirconate Titanate). When an electrical voltage is applied, it deforms, generating a sound wave. Conversely, when a sound wave strikes it, it generates an electrical voltage.
*   **Damping Material:** Used to control the ringing of the crystal after it has been excited, resulting in a shorter pulse and better resolution.
*   **Case:** Protects the internal components and provides a mounting for the cable.
*   **Wedge (for Angle Beam):** A plastic or metal block shaped to refract the ultrasonic beam at a specific angle.

#### Types of Transducers:

*   **Single Element Transducers:**
    *   **Normal Beam (Straight Beam):** As described above, for perpendicular transmission.
    *   **Angle Beam:** As described above, with an angled wedge.
*   **Dual Element Transducers (Commonly used for corrosion/erosion monitoring):**
    *   **Description:** Consist of two separate piezoelectric elements housed in a single casing. One element acts as a transmitter, and the other acts as a receiver. They are often mounted side-by-side at a slight angle.
    *   **Principle:** The transmitter element sends a sound wave into the material. The receiver element detects the reflected echoes. The two elements are angled such that the sound waves are directed into the material at a specific angle, typically to detect surface-breaking flaws or for thickness measurements where back-wall echoes can be weak due to attenuation.
    *   **Advantages:** Reduces the "dead zone" near the surface (the area where the transmitted pulse is still ringing and can mask near-surface flaws), improved sensitivity for detecting surface flaws.
    *   **Applications:** Corrosion inspection, detection of near-surface defects.
    *   **Reference:** Ravi Prakash, "Non Destructive testing Techniques," Chapter 5 details various transducer designs and their functions.

#### Frequencies and Sizes Commonly Used:

*   **Frequencies:**
    *   **Low Frequencies (0.5 - 2.5 MHz):** Used for inspecting thick materials, materials with high attenuation, and for through-transmission applications. They provide better penetration but lower resolution.
    *   **Medium Frequencies (2.5 - 10 MHz):** A good balance of penetration and resolution, suitable for general-purpose inspection of most metallic and non-metallic materials.
    *   **High Frequencies (10 - 25 MHz):** Used for inspecting thin materials, detecting small surface flaws, and for applications requiring high resolution. Penetration is limited.
*   **Sizes (Diameter of the Piezoelectric Element):**
    *   **Small diameters (e.g., 1/4" or 6 mm):** Provide good focusing for detecting small flaws and high resolution.
    *   **Larger diameters (e.g., 1" or 25 mm):** Provide a more collimated beam for better penetration and improved signal-to-noise ratio, especially in thicker materials.

**Important Point to Remember:** The choice of transducer frequency and size depends on the material being inspected, the expected defect size, and the material thickness.

---

### Ultrasonic Testing Techniques

Beyond the basic beam types, specific techniques are employed to optimize flaw detection.

#### 1. Pulse Echo Testing Technique

*   **Description:** This is the most common UT technique. A single transducer is used to both transmit the ultrasonic pulse and receive the reflected echoes.
*   **Principle:** The transducer sends a pulse into the material. Any discontinuities or the back wall of the material reflect a portion of this pulse back to the transducer. The instrument measures the time of flight and the amplitude of these echoes.
*   **Information Obtained:**
    *   **Depth of Flaw:** Calculated from the time of flight of the echo.
    *   **Size/Severity of Flaw:** Indicated by the amplitude of the echo.
    *   **Location of Flaw:** Determined by the scanning position of the transducer.
*   **Applications:** General flaw detection, thickness gauging.
*   **Reference:** Baldev Raj, "Practical Non-destructive Testing," Chapter 4 details the pulse-echo technique and its signal interpretation.

#### 2. Through Transmission Technique

*   **Description:** Requires two transducers: one transmitter and one receiver, placed on opposite sides of the material being inspected.
*   **Principle:** The transmitter sends an ultrasonic pulse through the material. The receiver detects the sound that has passed through. The presence of a flaw in the sound path will reduce the amplitude of the received signal or completely block it.
*   **Information Obtained:** Primarily used to detect flaws that significantly attenuate or block the sound beam. It is good for assessing the overall integrity of a component rather than precisely locating small flaws.
*   **Applications:** Inspection of materials with high attenuation, detection of large internal voids or discontinuities.
*   **Advantages:** Can be effective for highly attenuating materials where pulse-echo might struggle.
*   **Disadvantages:** Requires access to both sides of the component, less precise for flaw localization.

#### 3. Resonance Testing

*   **Description:** This technique involves inducing vibrations in a material at its natural resonant frequencies.
*   **Principle:** A continuous wave ultrasonic transducer is used to sweep through a range of frequencies. When the applied frequency matches a natural resonant frequency of the material (or a portion of it), resonance occurs, and the amplitude of the received signal increases significantly. The resonant frequencies are dependent on the material's thickness, acoustic properties, and boundary conditions.
*   **Applications:** Primarily used for thickness gauging of relatively thin materials or for checking uniformity.
*   **Advantages:** Can be highly sensitive for thickness measurements.
*   **Disadvantages:** Limited to materials with clear resonant characteristics and requires good surface finish.

---

### Instruments Used in UT

Ultrasonic testing requires specialized electronic instruments to generate, receive, and display ultrasonic signals.

*   **Ultrasonic Flaw Detector (UFD):** The most common instrument. It comprises:
    *   **Pulsed Oscillator:** Generates electrical pulses to drive the transducer.
    *   **Receiver:** Amplifies and processes the received electrical signals from the transducer.
    *   **Display:** Typically an A-scan display (Amplitude vs. Time) that shows the received echoes. Modern UFDs may also offer B-scan (Cross-sectional view) and C-scan (Plan view) capabilities.
    *   **Time-Gain Control (TGC) / Depth-Gain Control (DGC):** Allows the operator to compensate for signal attenuation by increasing the receiver gain at greater depths.
    *   **Calibration Controls:** For setting range, gain, velocity, and zero offset.
*   **Ultrasonic Testing System (UTS):** More advanced systems that can incorporate digital signal processing, data storage, and automated scanning capabilities.
*   **Thickness Gauge:** A specialized UT instrument designed solely for measuring material thickness.

#### Accessories Used in UT:

*   **Transducer Cables:** Connect the transducer to the UFD. They are typically coaxial cables designed to minimize signal loss and interference.
*   **Couplants:** Essential for ensuring efficient ultrasonic wave transmission between the transducer and the material surface. Common couplants include:
    *   **Glycerin:** Good viscosity, suitable for a wide range of temperatures.
    *   **Water-based gels:** Easy to clean, widely used.
    *   **Oils:** Can be used, but may leave residues.
    *   **Water:** Used in immersion testing and sometimes for rough surfaces.
*   **Calibration Blocks (e.g., Step Wedges, DAC Blocks):** Made of known materials with specific geometric features (e.g., holes, notches) used to calibrate the UT instrument for sensitivity and depth measurements.

---

## Section 2: Radiography Testing (RT)

Radiography Testing (RT) is a non-destructive method that uses electromagnetic radiation (X-rays or gamma rays) to inspect materials and detect internal flaws. The radiation passes through the material, and the amount that is absorbed or transmitted depends on the material's density, thickness, and the presence of discontinuities.

**Course Outcomes Addressed:**

*   **CO2 (K2):** Familiarize with basic principles of electromagnetic NDT methods.
*   **CO3 (K3):** Apply the principles of signal processing of ultrasonic signals and image processing of radiographic images.

**Key Concepts & Definitions:**

*   **Electromagnetic Radiation:** Energy that travels in the form of waves or packets of particles (photons). This includes radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, and gamma rays.
*   **X-rays:** Electromagnetic radiation produced by the sudden deceleration of high-speed electrons when they strike a target material (usually tungsten) in an X-ray tube.
*   **Gamma Rays:** Electromagnetic radiation emitted from the nucleus of radioactive isotopes.
*   **Radiograph:** The image produced on a film or digital detector by the differential absorption of radiation passing through an object.
*   **Attenuation:** The reduction in intensity of radiation as it passes through a material. Denser materials and thicker sections absorb more radiation.
*   **Sensitivity:** The ability of the RT method to detect small flaws.
*   **Image Quality Indicator (IQI) / Penetrameter:** A small piece of metal, typically with holes of varying diameters, placed on the object being inspected to assess the sensitivity of the radiograph.

---

### Electromagnetic Radiation Sources in RT

The effectiveness of RT relies on the appropriate source of electromagnetic radiation. The two primary sources are X-rays and gamma rays.

#### 1. X-ray Sources

*   **Description:** X-rays are generated in an X-ray tube. The process involves:
    1.  **Electron Emission:** A filament (cathode) is heated, causing it to emit electrons (thermionic emission).
    2.  **Acceleration:** A high voltage is applied between the cathode and a target anode (typically made of tungsten). This high voltage accelerates the electrons towards the anode at very high speeds.
    3.  **X-ray Production:** When the high-speed electrons strike the anode target, they undergo rapid deceleration, and a portion of their kinetic energy is converted into X-ray photons. This process is called Bremsstrahlung (braking radiation). Some characteristic X-rays are also produced when electrons knock out inner shell electrons from the target atoms, and the resulting vacancy is filled by an outer shell electron.
*   **X-ray Tube Components:**
    *   **Cathode:** Contains a filament that emits electrons.
    *   **Anode (Target):** A metal target where the electrons strike.
    *   **Vacuum Envelope:** The X-ray tube is enclosed in a vacuum-sealed glass or metal envelope to prevent scattering of electrons by air molecules.
    *   **Cooling System:** X-ray tubes generate significant heat, requiring oil cooling or water cooling.
*   **Characteristics of X-rays:**
    *   **Penetrating Power:** Can be controlled by adjusting the accelerating voltage (kVp - kilovoltage peak). Higher kVp means higher energy X-rays with greater penetrating power.
    *   **Intensity:** Can be controlled by adjusting the filament current (mA - milliamperes), which determines the number of electrons produced.
    *   **Continuous Spectrum:** X-rays produced by Bremsstrahlung have a continuous energy spectrum.
*   **Applications:** Widely used in industrial radiography due to their controllability. They are suitable for inspecting a wide range of materials and thicknesses.
*   **Reference:** Huang & Wang, "New Technologies in Electromagnetic Non-destructive Testing," Chapter 3 discusses X-ray generation and applications in NDT.

#### 2. Gamma Ray Sources

*   **Description:** Gamma rays are emitted from the nuclei of radioactive isotopes. These isotopes are often produced artificially in nuclear reactors. Common gamma ray sources used in RT include:
    *   **Iridium-192 (Ir-192):** A commonly used source for inspecting steel up to about 3 inches thick. It has a half-life of approximately 74 days and emits gamma rays with energies ranging from 300 to 1200 keV.
    *   **Cobalt-60 (Co-60):** Used for inspecting thicker materials (e.g., steel up to 5-6 inches thick). It has a longer half-life (5.27 years) and emits gamma rays with energies of 1173 and 1332 keV.
    *   **Selenium-75 (Se-75):** Used for inspecting thinner materials and magnesium alloys.
    *   **Ytterbium-169 (Yb-169):** Used for inspecting thin sections and aluminum.
*   **Characteristics of Gamma Rays:**
    *   **Fixed Energy Spectrum:** The energy of gamma rays from a specific isotope is characteristic of that isotope and cannot be changed, unlike X-rays.
    *   **High Penetrating Power:** Gamma rays are generally more penetrating than X-rays of comparable energy.
    *   **Portability:** Gamma ray sources are compact and portable, requiring no external power supply (apart from the handling equipment).
*   **Applications:** Preferred for field inspections where portability is essential, or for inspecting very thick sections of material.
*   **Safety Considerations:** Gamma ray sources are radioactive and require strict safety precautions, including shielding, personnel monitoring, and authorized handling.
*   **Reference:** Lysenko, Rogachev, & Stary, "Recent Developments in the Field of Non-Destructive Testing, Safety and Material Science," Section 4 discusses the safety aspects and applications of radioactive sources in NDT.

**Comparison of X-ray and Gamma Ray Sources:**

| Feature             | X-ray Source                                  | Gamma Ray Source                                 |
| :------------------ | :-------------------------------------------- | :----------------------------------------------- |
| **Generation**      | X-ray tube (electron bombardment)             | Radioactive decay of isotopes                    |
| **Energy Control**  | Variable (kVp, mA)                            | Fixed (characteristic of the isotope)            |
| **Penetration**     | Controllable, generally lower than gamma rays | High, generally higher than X-rays               |
| **Intensity Control**| Controllable (mA)                             | Not controllable (depends on source activity)    |
| **Portability**     | Less portable (requires power supply)         | Highly portable (self-contained)                 |
| **Cost**            | Higher initial equipment cost                 | Lower initial equipment cost, ongoing source costs |
| **Radiation Hazard**| Lower (can be switched off)                   | Higher (requires continuous safety measures)     |
| **Image Quality**   | Can achieve very fine detail                  | Generally less fine detail than X-rays           |

**Important Point to Remember:** The choice between X-rays and gamma rays depends on factors such as material type, thickness, defect sensitivity required, portability needs, and safety regulations.

---

## Practice Questions and Answers

**Section 1: Ultrasonic Testing (UT)**

1.  **Question:** What is the primary function of a couplant in ultrasonic testing?
    **Answer:** The primary function of a couplant is to eliminate air gaps between the transducer and the material surface, ensuring efficient transmission of ultrasonic waves into and out of the material.

2.  **Question:** Differentiate between normal beam and angle beam testing in UT, and state a typical application for each.
    **Answer:**
    *   **Normal Beam (Straight Beam):** The ultrasonic beam is perpendicular to the surface. Used for detecting flaws parallel to the surface (e.g., laminations) and for thickness measurements.
    *   **Angle Beam:** The ultrasonic beam is directed at an angle using a wedge, converting the longitudinal wave into a transverse (shear) wave. Used for detecting flaws perpendicular to the surface (e.g., cracks in welds).

3.  **Question:** What are the advantages of using a dual element transducer compared to a single element transducer?
    **Answer:** Dual element transducers reduce the "dead zone" near the surface, allowing for better detection of near-surface defects. They are particularly useful for corrosion inspection.

4.  **Question:** Explain the principle of the Pulse Echo testing technique.
    **Answer:** In pulse echo testing, a single transducer transmits an ultrasonic pulse and also receives the reflected echoes from flaws or the back wall of the material. The time of flight and amplitude of these echoes provide information about the depth and size of the defect.

**Section 2: Radiography Testing (RT)**

5.  **Question:** What are the two primary sources of electromagnetic radiation used in Radiography Testing?
    **Answer:** The two primary sources are X-rays and gamma rays.

6.  **Question:** How are X-rays produced in an X-ray tube?
    **Answer:** X-rays are produced when high-speed electrons, accelerated by a high voltage, strike a metal target (anode). The sudden deceleration of these electrons converts their kinetic energy into X-ray photons.

7.  **Question:** Name three common radioactive isotopes used as gamma ray sources in industrial radiography and their typical applications.
    **Answer:**
    *   **Iridium-192 (Ir-192):** For inspecting steel up to approximately 3 inches.
    *   **Cobalt-60 (Co-60):** For inspecting thicker steel sections (up to 5-6 inches).
    *   **Selenium-75 (Se-75):** For inspecting thinner materials and magnesium alloys.

8.  **Question:** What is the main advantage of using X-ray sources over gamma ray sources in terms of controlling the inspection process?
    **Answer:** The main advantage is that X-ray energy and intensity can be controlled by adjusting the kVp and mA settings, allowing for optimization of the inspection parameters for different materials and thicknesses. Gamma ray sources have a fixed energy output.

---

## Summary and Important Points to Remember:

*   **UT:** Utilizes high-frequency sound waves for internal flaw detection and thickness measurement. Key methods include contact and immersion testing. Beam types (normal and angle) are crucial for targeting different flaw orientations. Transducer selection (frequency, size, type) is critical for effective testing. Pulse-echo is the most common technique.
*   **RT:** Employs X-rays or gamma rays to reveal internal flaws based on differential absorption. X-rays are generated in tubes with controllable energy, while gamma rays come from radioactive isotopes with fixed energy. Safety is paramount for gamma sources. The choice of source depends on material, thickness, and inspection requirements.

---

This comprehensive set of notes covers the essential aspects of Ultrasonic Testing and the sources of electromagnetic radiation used in Radiography Testing as outlined in the module's learning outcomes and referenced textbooks. Remember to consult the provided textbooks for more in-depth explanations and specific examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
