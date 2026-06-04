---
title: "characterizing the surface micromachining process, isolation layer, sacrificial layer, structural material, selective etching – properties, stress, stress measurement, friction"
subject: "MICRO AND NANO MANUFACTURING"
module: "Module 4: Introduction to Nanofabrication"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf48044644df"
status: "completed"
scrapedAt: "2026-05-20T18:22:17.123Z"
---
# Module 4: Introduction to Nanofabrication - Surface Micromachining Process

This module introduces the fundamental concepts of surface micromachining, a key technique in micro and nano fabrication. We will delve into its core components, material properties, and critical process aspects.

## 4.1 Characterizing the Surface Micromachining Process

Surface micromachining is a fabrication technique used to create micro-scale structures by depositing and patterning layers of material on a substrate. Unlike bulk micromachining, which carves structures from a substrate, surface micromachining builds structures *on* the surface.

**Key Concepts:**

*   **Layer-by-layer fabrication:** Structures are built up sequentially through deposition and patterning of multiple thin films.
*   **Sacrificial layers:** These layers are intentionally deposited and later selectively removed to free the structural components.
*   **Structural layers:** These layers form the final functional components of the micro-device.
*   **Masks and lithography:** Photolithography is typically used to define the patterns for each layer.
*   **Etching:** Both wet and dry etching techniques are employed for material removal.

**Relationship to Course Outcomes:**

*   **CO1 (Explain techniques):** This section directly explains the surface micromachining technique. (K2)
*   **CO4 (Explain fabrication basics):** Surface micromachining is a core micro-fabrication technique. (K2)

**Textbook References:**

*   **Jackson (2006):** Chapters on thin film deposition, patterning, and etching processes.
*   **Jain (2012):** Sections detailing the step-by-step procedures of surface micromachining.
*   **Hsu (2008):** Discussions on the advantages and limitations of surface micromachining compared to bulk micromachining.

## 4.2 Isolation Layer

The isolation layer serves as a barrier between the substrate and the subsequent layers, preventing unwanted adhesion or electrical/mechanical coupling.

**Key Concepts:**

*   **Purpose:** To prevent stiction (undesired adhesion) between the structural layer and the substrate, and to electrically insulate the device if necessary.
*   **Material Properties:** Should be easily deposited, adhere well to the substrate, and be selectively etchable without damaging the structural layer or substrate.
*   **Common Materials:** Silicon dioxide (SiO2), silicon nitride (Si3N4).

**Examples:**

*   In MEMS accelerometers, an isolation layer of SiO2 is often deposited on the silicon wafer before depositing the sacrificial layer and structural material. This prevents the structural components from bonding to the substrate during processing or operation.

**Relationship to Course Outcomes:**

*   **CO4 (Explain fabrication basics):** The isolation layer is a crucial initial step in many micro-fabrication processes. (K2)

**Textbook References:**

*   **Jackson (2006):** Discusses the role of dielectric layers in micro-device fabrication.
*   **Jain (2012):** Provides specific examples of isolation layers used in different MEMS applications.

## 4.3 Sacrificial Layer

The sacrificial layer is the cornerstone of surface micromachining. It is selectively removed after the structural layers are formed, releasing the movable parts of the micro-device.

**Key Concepts:**

*   **Definition:** A temporary layer that is selectively removed to create free-standing structures.
*   **Material Properties:**
    *   **Selectivity:** Must be etchable by a process that does not affect the structural material or the substrate. This is the most critical property.
    *   **Deposition:** Should be depositable uniformly and without excessive stress.
    *   **Adhesion:** Good adhesion to the substrate or isolation layer.
    *   **Mechanical Strength:** Sufficient mechanical integrity to support the structural layers during fabrication.
*   **Common Materials:**
    *   **Silicon Dioxide (SiO2):** Commonly etched with hydrofluoric acid (HF).
    *   **Polysilicon:** Can be etched using specific chemistries that don't attack the structural polysilicon (e.g., using anisotropic etching).
    *   **Aluminum:** Can be used as a sacrificial layer and etched with acids.
    *   **Waxes and Polymers:** Used in specific applications where their solubility properties are advantageous.

**Examples:**

*   **Polysilicon Micromachining:** Polysilicon is deposited over a SiO2 sacrificial layer. After patterning and etching the polysilicon structural layer, the SiO2 is removed using HF, releasing the polysilicon structures.
*   **Trench Isolation:** In some semiconductor processes, trenches are etched and filled with SiO2. This SiO2 can act as a sacrificial layer to release structures above it.

**Relationship to Course Outcomes:**

*   **CO1 (Explain techniques):** The sacrificial layer is integral to the surface micromachining technique. (K2)
*   **CO4 (Explain fabrication basics):** Understanding sacrificial layers is fundamental to micro-fabrication. (K2)

**Textbook References:**

*   **Jackson (2006):** Detailed discussion on sacrificial layer materials and etching selectivity.
*   **Jain (2012):** Provides a comprehensive overview of various sacrificial layer materials and their applications.
*   **Hsu (2008):** Compares different sacrificial layer strategies and their impact on device performance.

## 4.4 Structural Material

The structural material forms the functional components of the micro-device. Its properties are critical for the performance and reliability of the fabricated structures.

**Key Concepts:**

*   **Purpose:** To provide mechanical strength, electrical conductivity (if needed), and desired functional characteristics.
*   **Material Properties:**
    *   **Mechanical Strength:** High tensile strength, Young's modulus, and fatigue resistance are often required.
    *   **Stress:** Intrinsic stress within the deposited film can cause deformation or failure.
    *   **Adhesion:** Good adhesion to the sacrificial layer or underlying layers.
    *   **Process Compatibility:** Must withstand subsequent processing steps.
    *   **Electrical/Optical Properties:** Depending on the application.
*   **Common Materials:**
    *   **Polysilicon:** Widely used due to its excellent mechanical properties and process compatibility. It can be doped to be conductive.
    *   **Silicon Nitride (Si3N4):** Good electrical insulator and mechanical strength, often used for membranes.
    *   **Metals (e.g., Aluminum, Gold, Platinum):** Used for conductive elements, contacts, and reflective surfaces. Can also be used as structural materials in some cases.
    *   **Polymers (e.g., SU-8, Polyimide):** Offer flexibility, lower Young's modulus, and ease of processing, suitable for microfluidics and flexible electronics.

**Examples:**

*   **MEMS Resonators:** Polysilicon is a common structural material for the vibrating beams in MEMS resonators due to its high quality factor and good mechanical stability.
*   **Micro-Mirrors:** Aluminum or polysilicon can be used as the structural material for the reflective surface and actuation mechanisms in micro-mirror arrays.

**Relationship to Course Outcomes:**

*   **CO1 (Explain techniques):** The structural material is a core component of surface micromachining. (K2)
*   **CO4 (Explain fabrication basics):** Understanding structural materials is essential for micro-fabrication. (K2)
*   **CO5 (Select Metrology):** The properties of the structural material dictate the appropriate metrology for characterization. (K2)

**Textbook References:**

*   **Jackson (2006):** In-depth analysis of various thin film deposition techniques for structural materials and their properties.
*   **Jain (2012):** Chapters dedicated to the mechanical and electrical properties of commonly used structural materials in micromachining.
*   **Bandyopadhyay (2008):** Provides an overview of nanomaterial properties which can be relevant for advanced nano-fabrication using similar principles.
*   **Hsu (2008):** Discusses material selection criteria for different MEMS applications.

## 4.5 Selective Etching

Selective etching is the process of removing specific materials while leaving others intact. This is critical for freeing the structural components in surface micromachining.

**Key Concepts:**

*   **Selectivity Ratio:** The ratio of the etch rate of the sacrificial material to the etch rate of the structural material (or substrate). A high selectivity ratio is essential.
*   **Etching Mechanisms:**
    *   **Wet Etching:** Uses liquid etchants (e.g., HF for SiO2, KOH for Si). Often isotropic, meaning it etches equally in all directions.
    *   **Dry Etching (Plasma Etching):** Uses plasma to chemically or physically remove material. Can be isotropic or anisotropic (directional). Examples include Reactive Ion Etching (RIE).
*   **Process Control:** Etch time, etchant concentration, temperature, and pressure are critical parameters.
*   **Undercutting:** In isotropic etching, the etchant can etch sideways under the masking layer or the structural layer, which needs to be accounted for in design.

**Examples:**

*   **SiO2 Sacrificial Layer Etching:** Using a dilute solution of Hydrofluoric Acid (HF) to etch SiO2 without significantly attacking polysilicon structural layers.
*   **Anisotropic Etching of Silicon:** Using potassium hydroxide (KOH) to etch single-crystal silicon at different rates depending on the crystallographic orientation. This is more common in bulk micromachining but can be applied selectively.

**Relationship to Course Outcomes:**

*   **CO1 (Explain techniques):** Selective etching is a fundamental technique in surface micromachining. (K2)
*   **CO4 (Explain fabrication basics):** Understanding etching processes is vital for micro-fabrication. (K2)
*   **CO5 (Select Metrology):** The success of selective etching can be verified using metrology techniques. (K2)

**Textbook References:**

*   **Jackson (2006):** Detailed explanation of wet and dry etching processes, including selectivity.
*   **Jain (2012):** Provides comparative analysis of different etching techniques and their selectivity for various material pairs.
*   **Hsu (2008):** Discusses the impact of etching processes on device functionality and reliability.

## 4.6 Stress in Thin Films

Intrinsic stress within thin films is a significant factor in surface micromachining, as it can cause deformation, cracking, or delamination of the fabricated structures.

**Key Concepts:**

*   **Definition:** Stress present within a deposited thin film, independent of external forces.
*   **Origins of Stress:**
    *   **Growth Stress:** Arises during the deposition process due to the energy of atoms/molecules arriving at the substrate and bonding.
    *   **Thermal Stress:** Occurs due to differences in the coefficient of thermal expansion (CTE) between the thin film and the substrate, and temperature changes during processing.
    *   **Intrinsic Stress:** Can be tensile (pulling apart) or compressive (pushing together).
*   **Effects of Stress:**
    *   **Curling/Buckling:** Films can curl upwards (tensile) or buckle downwards (compressive).
    *   **Cracking:** High tensile stress can lead to film cracking.
    *   **Delamination:** Compressive stress can cause films to peel off from the substrate.
    *   **Device Performance:** Can affect the resonant frequency of MEMS devices, the flatness of membranes, and the reliability of electrical contacts.

**Examples:**

*   **Polysilicon Stress:** Undoped polysilicon often has intrinsic tensile stress, which can cause released polysilicon beams to curl upwards. Doping polysilicon (e.g., with phosphorus) can reduce or even reverse this stress to compressive.
*   **Silicon Nitride Stress:** Stoichiometric Si3N4 often has tensile stress, while silicon-rich Si3N4 can have compressive stress.

**Relationship to Course Outcomes:**

*   **CO4 (Explain fabrication basics):** Stress management is a crucial aspect of micro-fabrication. (K2)
*   **CO5 (Select Metrology):** Stress measurement is essential for characterizing fabricated components. (K2)

**Textbook References:**

*   **Jackson (2006):** Chapters discussing the origins and effects of stress in thin films.
*   **Jain (2012):** Provides detailed explanations of stress mechanisms and their impact on MEMS devices.
*   **Hsu (2008):** Discusses stress mitigation techniques and their importance for device reliability.

## 4.7 Stress Measurement

Accurate measurement of thin film stress is vital for process control and device design.

**Key Concepts:**

*   **Stoney's Formula:** A fundamental formula used to calculate the stress in a thin film based on the curvature of a substrate before and after deposition.
    *   $\sigma = \frac{E_s}{6(1-\nu_s)} \frac{t_s^2}{R} \frac{1}{t_f}$
        *   $\sigma$: Stress in the thin film
        *   $E_s$: Young's modulus of the substrate
        *   $\nu_s$: Poisson's ratio of the substrate
        *   $t_s$: Thickness of the substrate
        *   $R$: Radius of curvature of the substrate
        *   $t_f$: Thickness of the thin film
*   **Methods of Stress Measurement:**
    *   **Curvature Measurement (Fowler-Flinch Method):** Measuring the change in substrate curvature using interferometry or laser deflection after film deposition.
    *   **Beam Bending Method:** Depositing a film on a freestanding micro-cantilever or beam and measuring its deflection.
    *   **X-ray Diffraction (XRD):** Can be used to measure strain in crystalline films, which can be related to stress.
    *   **Surface Profilometry:** Measuring the deformation of patterned structures.

**Examples:**

*   **Measuring Polysilicon Stress:** Depositing a thin film of polysilicon on a silicon wafer. Measuring the wafer's curvature before and after deposition using a profilometer or interferometer. Applying Stoney's formula to calculate the film stress.
*   **Micro-cantilever Deflection:** Fabricating a micro-cantilever with no initial stress and then depositing a thin film on it. The deflection of the cantilever tip provides a measure of the film's stress.

**Relationship to Course Outcomes:**

*   **CO5 (Select Metrology):** This section directly addresses metrology techniques for stress measurement. (K2)

**Textbook References:**

*   **Jackson (2006):** Detailed description of Stoney's formula and experimental techniques for stress measurement.
*   **Jain (2012):** Presents various methods for in-situ and ex-situ stress measurement.
*   **Hsu (2008):** Discusses the importance of stress metrology for reliable MEMS fabrication.

## 4.8 Friction

Friction is a critical consideration in the design and operation of micro-scale devices, especially those with moving parts.

**Key Concepts:**

*   **Definition:** The force resisting the relative motion of surfaces in contact.
*   **Types of Friction:**
    *   **Static Friction:** The force required to initiate motion between stationary surfaces.
    *   **Kinetic Friction:** The force resisting motion between moving surfaces.
    *   **Stiction:** A significant issue at the micro-scale, where static friction forces can be very high relative to inertial forces, leading to parts getting stuck. This is often exacerbated by surface forces like van der Waals forces and capillary forces (if moisture is present).
*   **Factors Affecting Micro-Friction:**
    *   **Surface Roughness:** Even at the micro-scale, surface topography plays a role.
    *   **Contact Area:** Apparent vs. real contact area is important.
    *   **Surface Forces:** Adhesion, van der Waals forces, capillary forces.
    *   **Environment:** Presence of lubricants, humidity, temperature.
    *   **Material Properties:** Surface energy, hardness.
    *   **Normal Load:** The force pressing the surfaces together.
*   **Wear:** The gradual removal or damage of material from a surface due to friction.

**Examples:**

*   **MEMS Gears:** Friction between the teeth of micro-gears can lead to increased power consumption, reduced efficiency, and eventual seizure.
*   **Micro-actuators with Sliding Parts:** Stiction between a slider and a track can prevent the actuator from moving or returning to its original position.
*   **Resonators:** Friction at contact points in a resonant structure can dampen its motion and reduce its quality factor (Q-factor).

**Relationship to Course Outcomes:**

*   **CO3 (Outline working principle/applications):** Friction directly impacts the working principles and applications of micro-devices. (K2)
*   **CO4 (Explain fabrication basics):** Understanding friction is part of the overall fabrication knowledge. (K2)
*   **CO5 (Select Metrology):** Characterizing friction often involves specific metrology. (K2)

**Textbook References:**

*   **Jackson (2006):** Discusses the phenomenon of stiction and methods to mitigate it.
*   **Jain (2012):** Chapters dedicated to friction, wear, and stiction in MEMS devices.
*   **Hsu (2008):** Provides in-depth analysis of friction and wear mechanisms at the micro- and nanoscale, and strategies for lubrication and friction reduction.

---

## Practice Questions & Answers

**Question 1:** What is the primary role of a sacrificial layer in surface micromachining?
**Answer:** The primary role of a sacrificial layer is to be selectively removed after the structural layers are fabricated, thereby releasing the movable components of the micro-device.

**Question 2:** Name two common materials used as sacrificial layers in surface micromachining and their typical etchants.
**Answer:**
1.  **Silicon Dioxide (SiO2):** Typically etched with Hydrofluoric Acid (HF).
2.  **Polysilicon:** Can be etched using specific chemistries that do not attack structural polysilicon, or using isotropic etchants that can be controlled for selectivity.

**Question 3:** Explain the phenomenon of "stiction" in the context of micro-fabrication.
**Answer:** Stiction refers to the undesirable adhesion of micro-scale surfaces, often due to surface forces like van der Waals and capillary forces. It's a significant problem that can prevent micro-devices with moving parts from functioning correctly, causing them to get stuck.

**Question 4:** Briefly describe Stoney's formula and its application in thin film stress measurement.
**Answer:** Stoney's formula relates the stress in a thin film to the curvature induced in the substrate after film deposition. It's used to calculate the average stress in a thin film by measuring the substrate's radius of curvature before and after deposition, along with substrate and film thicknesses.

**Question 5:** What are the potential consequences of high tensile stress in a structural thin film used in surface micromachining?
**Answer:** High tensile stress can lead to:
*   Curling or warping of the film.
*   Cracking of the film.
*   Delamination from the substrate.
*   Changes in the mechanical resonant frequency of micro-devices.

---

## Important Points to Remember

*   **Surface micromachining builds up structures layer by layer.**
*   **Sacrificial layers are key to releasing movable parts.**
*   **High selectivity of the etching process is paramount.**
*   **Stress in thin films can significantly impact device performance and reliability.**
*   **Stiction is a critical challenge in micro-device fabrication with moving parts.**
*   **Metrology is essential for characterizing film properties and process success.**

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
