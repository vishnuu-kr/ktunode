---
title: "Introduction to beam energy based micro machining processes - Ultrasonic micro machining, Focused Ion Beam machining, Laser Beam micro machining."
subject: "MICRO AND NANO MANUFACTURING"
module: "Module 1: Introduction to Precision engineering"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf48044644c9"
status: "completed"
scrapedAt: "2026-05-20T18:22:03.753Z"
---
# MICRO AND NANO MANUFACTURING

## Module 1: Introduction to Precision Engineering

### Topic: Introduction to Beam Energy Based Micro Machining Processes

This topic introduces three non-conventional micro-machining techniques that utilize directed energy sources to remove material at the micro-scale. These processes are crucial for creating intricate features and achieving high precision in micro-manufacturing applications.

---

### 1. Ultrasonic Micro Machining (USM)

**Definition:**
Ultrasonic Micro Machining (USM) is a non-conventional machining process that utilizes high-frequency mechanical vibrations (ultrasonic frequencies, typically 20-40 kHz) of a tool to erode material from a workpiece. This erosion is facilitated by the abrasive slurry that circulates between the tool and the workpiece.

**(Relates to CO2: Describe conventional techniques and non-conventional micro-nano manufacturing approaches)**

**Working Principle:**

1.  **Tool Vibration:** A transducer (usually piezoelectric or magnetostrictive) converts electrical energy into high-frequency mechanical vibrations.
2.  **Slurry:** An abrasive slurry, typically a mixture of abrasive particles (e.g., aluminum oxide, silicon carbide, diamond) and a carrier fluid (e.g., water, kerosene), is introduced into the gap between the tool and the workpiece.
3.  **Impact and Erosion:** The vibrating tool, with its tip oscillating at ultrasonic frequencies, strikes the abrasive particles. These energized particles then impact the workpiece surface with high kinetic energy, causing localized plastic deformation and brittle fracture, leading to material removal.
4.  **Flushing:** The circulating slurry also helps to flush away the removed material particles and keeps the tool and workpiece cool.

**(Relates to CO4: Explain the basics of micro and nano fabrication techniques)**

**Key Components:**

*   **Transducer:** Converts electrical energy to mechanical vibrations (e.g., piezoelectric stack).
*   **Booster/Horn:** Amplifies the amplitude of vibration from the transducer.
*   **Tool/Mandrel:** The tool holder that transmits vibrations to the cutting tool and carries the abrasive slurry. The shape of the tool determines the shape of the cavity produced.
*   **Abrasive Slurry:** A mixture of abrasive particles and carrier fluid.
*   **Workpiece:** The material to be machined.
*   **Power Supply:** Provides electrical energy to the transducer.

**Types of USM:**

*   **Single-Point Machining:** A single tool is used to create a desired shape, often requiring tool path control.
*   **Multi-Point Machining (Ram-type/Die Sinking):** A tool with a specific shape is used to replicate that shape in the workpiece.

**Advantages:**

*   Can machine very hard and brittle materials (ceramics, glass, carbides, hardened steels).
*   Little to no thermal damage to the workpiece as it's a "cold" process.
*   Low workpiece stress, suitable for delicate and thin-walled structures.
*   Good surface finish can be achieved.
*   Can create complex shapes and internal profiles.
*   High dimensional accuracy.

**Disadvantages:**

*   Low material removal rate (MRR) compared to conventional methods.
*   Tool wear can be significant, especially with harder abrasives.
*   Slurry management and filtration are critical.
*   Limited machining depth for certain materials.
*   Difficult to machine very soft and ductile materials.

**Applications:**

*   Machining of micro-holes and complex micro-cavities in ceramics and glass for MEMS devices.
*   Creating micro-channels and patterns in silicon wafers.
*   Drilling of sapphire and diamond.
*   Machining of medical implants and instruments.

**From Textbooks/References:**

*   **Jain V.K. (2012), "Micro manufacturing Processes"** discusses USM as a key abrasive machining technique capable of achieving micro-scale features in difficult-to-machine materials. It highlights the importance of slurry concentration, particle size, and tool vibration amplitude for MRR and surface finish.
*   **Hsu, T. R. (2008), "MEMS and microsystems: design, manufacture, and nanoscale engineering"** often mentions USM as a viable method for fabricating microstructures in MEMS applications, especially for materials like quartz and silicon.

**Important Points to Remember:**

*   It's an abrasive process driven by ultrasonic vibrations.
*   Slurry is essential for material removal and cooling.
*   Effective for hard, brittle materials.
*   Low thermal and mechanical stress on the workpiece.

---

### 2. Focused Ion Beam (FIB) Machining

**Definition:**
Focused Ion Beam (FIB) machining is a high-resolution micro-machining technique that uses a focused beam of ions (typically Gallium, Ga+) to sputter material from a surface. It's a subtractive fabrication process, often used for direct writing, milling, and surface modification at the nanometer scale.

**(Relates to CO2: Describe conventional techniques and non-conventional micro-nano manufacturing approaches)**
**(Relates to CO4: Explain the basics of micro and nano fabrication techniques)**

**Working Principle:**

1.  **Ion Source:** A liquid metal ion source (LMIS) generates ions (e.g., Ga+) which are then accelerated by an electric field.
2.  **Beam Formation:** The ion beam passes through a series of lenses (electrostatic and magnetic) to focus it to a very small spot size (down to a few nanometers).
3.  **Beam Steering:** Deflection plates guide the focused ion beam across the workpiece surface.
4.  **Sputtering:** When the energetic ions strike the workpiece, they transfer momentum to the surface atoms, causing them to be ejected or "sputtered" from the material. This is the primary mechanism of material removal.
5.  **Secondary Electron/Ion Emission:** The impact also generates secondary electrons and ions, which can be detected by a sensor for imaging and surface analysis.

**(Relates to CO3: Outline the working principle and applications of micro and nano finishing processes)**

**Key Components:**

*   **Ion Source:** Generates the ion beam (e.g., Liquid Metal Ion Source - LMIS).
*   **Accelerator and Focusing Column:** Accelerates and focuses the ion beam using electrostatic lenses.
*   **Stigmator and Deflector:** Corrects beam aberrations and steers the beam.
*   **Sample Stage:** Holds and manipulates the workpiece.
*   **Detector:** Collects secondary electrons or ions for imaging.
*   **Vacuum System:** Maintains a high vacuum to allow ion beam propagation and prevent scattering.

**Process Modes:**

*   **Milling/Patterning:** Direct removal of material to create 2D or 3D structures by rastering the focused ion beam.
*   **Deposition:** Using precursor gases that react with the ion beam to deposit material (e.g., Pt, W). This is often used for circuit repair or creating contacts.
*   **Imaging:** Using the emitted secondary electrons or ions to create high-resolution images of the surface (similar to Scanning Electron Microscopy - SEM, but often with higher resolution).

**Advantages:**

*   Extremely high resolution (nanometer scale).
*   Can machine very small features and intricate patterns.
*   Versatile: capable of milling, deposition, and imaging.
*   Direct writing capability, no need for masks.
*   Can be used for failure analysis and circuit editing on integrated circuits.

**Disadvantages:**

*   Low material removal rate.
*   Causes significant surface damage (ion implantation, amorphization, swelling) due to the high energy ions.
*   Gallium contamination can be an issue.
*   High capital cost and operating expenses.
*   Requires a high vacuum environment.
*   The workpiece must be conductive or made conductive.

**Applications:**

*   Nanofabrication of nanoscale devices and structures.
*   Circuit edit and failure analysis of semiconductors.
*   Cross-sectioning and imaging of materials at high resolution.
*   Creating micro/nano-cantilevers and probes for AFM.
*   Fabrication of optical components.

**From Textbooks/References:**

*   **Jackson, M. J. (2006), "Microfabrication and Nano manufacturing"** extensively covers FIB as a primary tool for direct-write nanofabrication and circuit modification, emphasizing its high resolution and the challenges of ion-induced damage.
*   **Jackson, M. J. (2007), "Micro and Nano manufacturing"** further elaborates on FIB's capabilities for 3D nanostructuring and its role in nanotechnology research and development.

**Important Points to Remember:**

*   Uses a focused beam of ions (typically Ga+).
*   Material removal by sputtering.
*   Achieves nanometer-scale resolution.
*   Can perform milling, deposition, and imaging.
*   Known for ion-induced surface damage and gallium contamination.

---

### 3. Laser Beam Micro Machining (LBMM)

**Definition:**
Laser Beam Micro Machining (LBMM) is a non-conventional machining process that uses a focused laser beam as a thermal energy source to remove material through melting, vaporization, or ablation. It is widely used for precision machining of a variety of materials.

**(Relates to CO2: Describe conventional techniques and non-conventional micro-nano manufacturing approaches)**
**(Relates to CO4: Explain the basics of micro and nano fabrication techniques)**

**Working Principle:**

1.  **Laser Generation:** A laser source (e.g., Nd:YAG, CO2, Excimer, Femtosecond) generates a coherent, monochromatic, and highly directional beam of light.
2.  **Focusing and Delivery:** The laser beam is focused by optical elements (lenses, mirrors) to a small spot size on the workpiece surface, increasing the power density significantly.
3.  **Material Interaction:** When the focused laser beam strikes the workpiece, the absorbed energy causes rapid heating. Depending on the laser parameters and material properties, this leads to:
    *   **Melting and Vaporization:** Material is heated to its melting and boiling points and removed as liquid or vapor.
    *   **Ablation:** Material is directly converted from solid to gas phase without passing through the liquid phase, typically achieved with high-power pulsed lasers (e.g., excimer, femtosecond).
4.  **Beam Scanning/Movement:** The laser beam is scanned across the workpiece surface or the workpiece is moved relative to the beam to create the desired pattern or feature.
5.  **Assist Gas (Optional):** An assist gas (e.g., oxygen, nitrogen, argon) can be used to enhance the cutting process by promoting chemical reactions (like oxidation) or by blowing away molten material.

**(Relates to CO3: Outline the working principle and applications of micro and nano finishing processes)**

**Key Components:**

*   **Laser Source:** Generates the laser beam (e.g., diode laser, CO2 laser, fiber laser, femtosecond laser).
*   **Optical System:** Lenses, mirrors, beam splitters, and beam expanders to focus, shape, and deliver the beam.
*   **Beam Delivery System:** Fiber optics or articulated arms.
*   **Workpiece Manipulation System:** CNC table, robotic arm, or galvanometer mirrors for precise positioning and scanning.
*   **Control System:** Manages laser parameters (power, pulse duration, frequency) and motion control.
*   **Assist Gas System (Optional):** Controls the flow and type of assist gas.
*   **Exhaust System:** Removes fumes and debris.

**Types of Lasers Used:**

*   **Continuous Wave (CW) Lasers (e.g., CO2, Fiber Lasers):** Used for continuous melting/vaporization.
*   **Pulsed Lasers (e.g., Nd:YAG, Excimer, Femtosecond Lasers):** Deliver energy in short pulses, leading to more controlled material removal, reduced heat-affected zone (HAZ), and enabling ablation.
    *   **Pulsed Lasers:** High peak power, short pulse duration.
    *   **Femtosecond Lasers:** Ultra-short pulses (<1 picosecond), leading to "cold" ablation with minimal thermal damage.

**Advantages:**

*   Contactless process, no tool wear.
*   Can machine a wide range of materials, including hard, brittle, and heat-sensitive ones.
*   High precision and resolution.
*   Good control over material removal.
*   Can create complex shapes and fine features.
*   Non-contact nature reduces contamination.
*   Femtosecond lasers offer very low HAZ and minimal thermal damage.

**Disadvantages:**

*   Can induce thermal damage (HAZ, micro-cracks) depending on the laser type and parameters.
*   Reflectivity of the material can affect efficiency.
*   Requires precise control of laser parameters and motion.
*   Can be costly due to laser source and optics.
*   Fumes and debris generation require proper ventilation.

**Applications:**

*   Micro-drilling of holes in PCBs, medical devices, and aerospace components.
*   Micromachining of molds and dies.
*   Laser cutting of thin films and micro-electrodes.
*   Surface texturing and engraving.
*   Fabrication of microfluidic devices.
*   Medical implants and prosthetics.
*   Wire stripping and marking.

**From Textbooks/References:**

*   **Jackson, M. J. (2006), "Microfabrication and Nano manufacturing"** provides a detailed overview of various laser types (e.g., excimer, Nd:YAG) and their application in micro-machining, discussing the principles of ablation and melting.
*   **Jain V.K. (2012), "Micro manufacturing Processes"** covers laser machining extensively, differentiating between melting-evaporation and ablation mechanisms and discussing the importance of laser parameters for achieving desired micro-features.
*   **Hsu, T. R. (2008), "MEMS and microsystems: design, manufacture, and nanoscale engineering"** might touch upon laser-based techniques for micromachining specific materials used in MEMS, like silicon or polymers.

**Important Points to Remember:**

*   Uses a focused laser beam as a thermal energy source.
*   Material removal via melting, vaporization, or ablation.
*   Contactless process with no tool wear.
*   Wide range of materials can be machined.
*   Femtosecond lasers offer "cold" ablation with minimal thermal damage.

---

### Comparison of Beam Energy Based Micro Machining Processes

| Feature           | Ultrasonic Micro Machining (USM)                                  | Focused Ion Beam (FIB) Machining                                     | Laser Beam Micro Machining (LBMM)                                     |
| :---------------- | :---------------------------------------------------------------- | :------------------------------------------------------------------- | :-------------------------------------------------------------------- |
| **Energy Source** | Mechanical vibrations (ultrasonic) + abrasive slurry              | Focused beam of ions (e.g., Ga+)                                     | Focused beam of light (laser)                                         |
| **Mechanism**     | Erosion by abrasive particles                                     | Sputtering by ion bombardment                                        | Melting, vaporization, ablation                                       |
| **Resolution**    | Micrometer to sub-micrometer                                      | Nanometer scale                                                      | Micrometer to sub-micrometer (can approach nanometer with advanced lasers) |
| **Workpiece Stress** | Low mechanical stress                                             | Minimal mechanical stress (but ion implantation can cause stress)    | Low mechanical stress (but thermal stress is present)                 |
| **Thermal Damage**| Negligible                                                        | Minimal (but ion implantation causes structural damage)            | Varies (low with femtosecond, higher with pulsed/CW)                  |
| **Material Removal Rate (MRR)** | Low                                                               | Very Low                                                             | Moderate to High (depending on laser type and parameters)             |
| **Key Advantages**| Hard, brittle materials; no thermal damage; low stress            | Extreme resolution; versatile (milling, deposition, imaging)         | Contactless; no tool wear; wide material range; fast machining possible |
| **Key Disadvantages**| Low MRR; tool wear; slurry management                             | Low MRR; ion damage; Ga contamination; high cost                     | Thermal damage; material reflectivity issues; cost                      |
| **Typical Materials** | Ceramics, glass, hardened steel, carbides, sapphire             | Conductive materials (metals, semiconductors), some insulators       | Metals, polymers, ceramics, semiconductors, composites                |
| **Applications**  | MEMS components, micro-holes, complex cavities in hard materials | Nanofabrication, circuit edit, failure analysis, nanostructuring | Micro-drilling, cutting, welding, marking, surface texturing        |

**(Relates to CO1: Explain different techniques used in micro and nano manufacturing)**

---

### Practice Questions and Answers

**Question 1:** Which of the following micro-machining processes uses an abrasive slurry as a key component for material removal?
a) Focused Ion Beam Machining
b) Laser Beam Micro Machining
c) Ultrasonic Micro Machining
d) Chemical Mechanical Polishing

**Answer:** c) Ultrasonic Micro Machining
**Explanation:** USM relies on the impact of abrasive particles suspended in a slurry to erode the workpiece material. FIB uses ion sputtering, and LBMM uses thermal energy from the laser.

---

**Question 2:** What is the primary mechanism of material removal in Focused Ion Beam (FIB) machining?
a) Melting and vaporization
b) Mechanical erosion by abrasive particles
c) Chemical etching
d) Sputtering by ion bombardment

**Answer:** d) Sputtering by ion bombardment
**Explanation:** In FIB, energetic ions strike the surface and eject surface atoms, a process known as sputtering.

---

**Question 3:** What is a major advantage of using femtosecond lasers in Laser Beam Micro Machining compared to other laser types?
a) Higher material removal rate
b) Lower cost of operation
c) Minimal heat-affected zone (HAZ) and thermal damage
d) Ability to machine very soft materials only

**Answer:** c) Minimal heat-affected zone (HAZ) and thermal damage
**Explanation:** The extremely short pulse duration of femtosecond lasers minimizes the time for heat diffusion into the surrounding material, resulting in "cold" ablation and significantly reduced thermal effects.

---

**Question 4:** Discuss the trade-offs between Ultrasonic Micro Machining (USM) and Laser Beam Micro Machining (LBMM) when fabricating micro-holes in a ceramic material.

**Answer:**
*   **USM:**
    *   **Pros:** Excellent for hard and brittle ceramics, minimal thermal damage, low mechanical stress, good surface finish.
    *   **Cons:** Lower material removal rate, potential for tool wear, slurry management complexity.
*   **LBMM:**
    *   **Pros:** Contactless (no tool wear), potentially faster MRR depending on the laser and ceramic, can create precise hole geometries.
    *   **Cons:** Risk of thermal damage (cracking, HAZ) if not carefully controlled, material reflectivity can be an issue, higher initial cost.

The choice would depend on the specific requirements for dimensional accuracy, surface quality, aspect ratio of the hole, and acceptable thermal effects. For extremely high precision and minimal thermal impact, USM might be preferred. For potentially faster processing and contactless operation, LBMM (especially with advanced lasers like femtosecond) would be considered.

---

**Question 5:** You need to perform failure analysis on a nanoscale semiconductor device and require high-resolution imaging and localized material removal for circuit modification. Which beam energy-based process would be most suitable, and why?

**Answer:** Focused Ion Beam (FIB) machining would be the most suitable process.
**Reasoning:** FIB offers unparalleled resolution (nanometer scale) for imaging and direct-write modifications. Its ability to mill precise features and perform localized deposition makes it ideal for circuit editing, failure analysis, and cross-sectioning of complex semiconductor devices at the nanoscale. While lasers can achieve high resolution, FIB is generally superior for direct-write nanoscale modifications and imaging of such delicate structures.

---

### Learning Outcomes Addressed:

*   **CO1: Explain different techniques used in micro and nano manufacturing.**
    *   This topic explains three distinct techniques: USM, FIB, and LBMM.
*   **CO2: Describe conventional techniques and non-conventional micro-nano manufacturing approaches.**
    *   This topic focuses on non-conventional approaches that use beam energy.
*   **CO3: Outline the working principle and applications of micro and nano finishing processes.**
    *   While primarily micro-machining, FIB's imaging and LBMM's surface texturing aspects touch upon finishing. The material removal mechanisms are detailed.
*   **CO4: Explain the basics of micro and nano fabrication techniques.**
    *   The working principles and key components of USM, FIB, and LBMM are explained as fundamental fabrication techniques.
*   **CO5: Select a suitable Metrology for measurement of dimensional, form, and surface integrity of components manufacturing using micro and nano Manufacturing.**
    *   While metrology is not the focus, understanding the processes highlights the need for advanced metrology (e.g., SEM/TEM for FIB, optical microscopy for USM/LBMM) to verify the achieved dimensions and surface integrity, which are critical outcomes of these processes.

---

### Important Points to Remember Summary:

*   **USM:** Ultrasonic vibration + abrasive slurry = erosion. Best for hard/brittle materials, low thermal/mechanical stress.
*   **FIB:** Focused ion beam = sputtering. Ultimate resolution (nm), direct-write capability, but causes ion damage and is slow.
*   **LBMM:** Focused laser beam = melting/vaporization/ablation. Contactless, no tool wear, versatile, but thermal effects must be managed. Femtosecond lasers offer minimal thermal damage.
*   Each process has unique advantages and disadvantages making them suitable for different applications and materials.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
