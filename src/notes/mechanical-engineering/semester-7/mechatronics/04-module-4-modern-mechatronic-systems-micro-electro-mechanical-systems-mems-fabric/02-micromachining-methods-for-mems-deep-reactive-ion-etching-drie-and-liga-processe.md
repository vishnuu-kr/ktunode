---
title: "Micromachining methods for MEMS, Deep Reactive Ion Etching (DRIE) and LIGA processes."
subject: "MECHATRONICS"
module: "Module 4: Modern mechatronic systems: Micro Electro Mechanical Systems (MEMS): Fabrication: Deposition, Lithography,"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463f20"
status: "completed"
scrapedAt: "2026-05-20T18:14:53.266Z"
---
# MECHATRONICS: Module 4 - Modern Mechatronic Systems: MEMS Fabrication

## Topic: Micromachining Methods for MEMS, Deep Reactive Ion Etching (DRIE) and LIGA Processes

**Module Focus:** This module introduces the foundational fabrication techniques for Micro Electro Mechanical Systems (MEMS), crucial components in modern mechatronic systems. Understanding these processes is essential for designing and integrating MEMS devices into various applications.

**Relevant Course Outcomes (COs):**

*   **CO6:** Understand the characteristics of MEMS devices and incorporate them in mechatronic applications (Knowledge Level: K2) - *This entire topic directly addresses the fabrication of MEMS devices, which are the core of CO6.*
*   **CO7:** Understand the use of mechatronic concepts in modern applications. (Knowledge Level: K2) - *By understanding how MEMS are made, we can better appreciate their role in diverse mechatronic applications.*

---

### 1. Introduction to MEMS Micromachining

**Key Concept:** Micromachining refers to the techniques used to create microscopic structures and devices with dimensions typically ranging from microns to millimeters. These processes are the backbone of MEMS fabrication.

**Definition:** MEMS devices are miniaturized mechanical and electro-mechanical devices (conceptually, even though they are electrical in actuation) whose feature sizes range from 1 to 1000 micrometers (1 µm to 1 mm).

**Importance in Mechatronics (CO6, CO7):**
*   MEMS enable the integration of sensing, processing, and actuating functionalities at the micro-scale.
*   This miniaturization leads to smaller, lighter, more power-efficient, and cost-effective mechatronic systems.
*   Examples include micro-sensors (pressure, acceleration, inertial), micro-actuators (micromirrors, micro-pumps), and micro-fluidic devices used in automotive, medical, and consumer electronics.

**Types of Micromachining:**

Micromachining processes can be broadly categorized into two main types:

*   **Subtractive Micromachining:** Material is selectively removed from a substrate to create the desired structure.
*   **Additive Micromachining:** Material is selectively deposited onto a substrate to build up the desired structure.

---

### 2. Subtractive Micromachining Methods

This section focuses on removing material.

#### 2.1. Bulk Micromachining

**Key Concept:** Bulk micromachining involves etching away significant portions of the substrate material to define the 3D geometry of MEMS devices.

**Process:**
1.  **Wafer Preparation:** Starting with a bulk substrate, typically silicon.
2.  **Masking:** A protective layer (mask, usually silicon dioxide or silicon nitride) is deposited and patterned using photolithography to define the areas to be etched.
3.  **Etching:** The exposed substrate material is removed using either:
    *   **Wet Etching:** Using chemical etchants (liquids) that react with the substrate.
        *   **Isotropic Etching:** Etches equally in all directions, leading to rounded profiles and undercutting. Examples: KOH (Potassium Hydroxide), TMAH (Tetramethylammonium Hydroxide).
        *   **Anisotropic Etching:** Etches at different rates depending on the crystal plane of the substrate. Silicon has different etch rates for different crystallographic planes. This allows for highly directional etching and the formation of precise shapes like V-grooves and pyramidal pits. Examples: KOH etches (100) silicon much faster than (111) silicon.
    *   **Dry Etching:** Using plasma-based etching processes.
        *   **Plasma Etching:** Uses reactive gases in a plasma to chemically etch the material.
        *   **Ion Beam Etching (RIBE):** Uses a directed ion beam to physically sputter away material, often combined with chemical etching for enhanced rates.

**Advantages of Bulk Micromachining:**
*   Can create relatively deep structures.
*   Well-established processes for silicon.
*   Can achieve good control over vertical sidewalls with anisotropic etching.

**Disadvantages of Bulk Micromachining:**
*   Can be slow for deep etching.
*   Undercutting can be a problem with isotropic etchants.
*   Requires careful mask design for complex 3D structures.

**Example (CO6):**
*   **Silicon accelerometers:** Bulk micromachining can create a suspended proof mass and flexures etched into a silicon wafer.
*   **Micromachined nozzles:** For inkjet printers.

---

#### 2.2. Surface Micromachining

**Key Concept:** Surface micromachining involves building up microstructures layer by layer on the surface of a substrate, usually by depositing and patterning thin films. Sacrificial layers are often used and then etched away to release the structural layers.

**Process:**
1.  **Substrate Preparation:** Typically a silicon wafer.
2.  **Sacrificial Layer Deposition:** A material that can be easily etched away later is deposited. Common sacrificial materials include silicon dioxide ($SiO_2$), silicon nitride ($Si_3N_4$), or polysilicon.
3.  **Structural Layer Deposition:** The material for the actual MEMS structure is deposited. Common structural materials include polysilicon, silicon nitride, silicon carbide, and metals.
4.  **Patterning:** Photolithography and etching are used to define the shape of the structural layer. This process can be repeated for multiple layers.
5.  **Sacrificial Layer Etching (Release Step):** The sacrificial layer is etched away, freeing the structural layers to form the micro-device. This step is crucial and requires etchants that selectively remove the sacrificial material without damaging the structural material.

**Advantages of Surface Micromachining:**
*   Can create complex 3D structures with multiple layers.
*   Suitable for creating suspended micro-mechanical components.
*   Can be combined with integrated circuit fabrication.

**Disadvantages of Surface Micromachining:**
*   Limited by the thickness of deposited films, making it difficult to create very thick structures.
*   Stress in deposited films can cause warping or buckling.
*   The release step can be challenging, with potential for stiction (parts sticking together due to surface forces).

**Example (CO6):**
*   **Micro-mirrors (e.g., DLP technology):** Surface micromachining is used to create the hinged mirrors that tilt to reflect light.
*   **Micro-resonators:** Used in timing applications and sensors.

---

### 3. Deep Reactive Ion Etching (DRIE)

**Key Concept:** DRIE is a specialized form of dry etching that allows for the creation of high-aspect-ratio (deep and narrow) structures with near-vertical sidewalls in silicon. It is crucial for many advanced MEMS devices.

**Process (Bosch Process is a common example):**

The Bosch process is a cyclic process alternating between passivation and etching steps:

1.  **Plasma Generation:** A plasma of reactive gases (e.g., $SF_6$ for etching, $C_4F_8$ for passivation) is created in an etching chamber.
2.  **Etching Step:**
    *   The plasma is rich in fluorine radicals ($F^{\bullet}$) which etch silicon.
    *   The wafer is exposed to the plasma, etching the exposed silicon.
3.  **Passivation Step:**
    *   The $SF_6$ plasma is turned off, and a passivation gas (e.g., $C_4F_8$) is introduced.
    *   This gas decomposes in the plasma to form a protective polymer film (e.g., a fluorocarbon polymer) on all exposed surfaces, including the sidewalls of the etched trenches.
4.  **Anisotropic Etching (Ion Directionality):**
    *   The plasma is switched back to the etching gas ($SF_6$).
    *   Crucially, in DRIE (especially using inductive coupled plasma - ICP sources), a bias voltage is applied to the wafer. This attracts positively charged ions from the plasma towards the wafer.
    *   These ions bombard the wafer surface, preferentially removing the polymer film from the *bottom* of the etched features.
    *   The fluorine radicals can then etch the exposed silicon at the bottom.
    *   The polymer remains on the sidewalls, protecting them from lateral etching.
5.  **Repetition:** Steps 2-4 are repeated many times to achieve the desired etch depth.

**Key Features of DRIE:**
*   **High Aspect Ratio:** Can create structures with a depth much greater than their width (e.g., ratios of 10:1 to 50:1 or more).
*   **Vertical Sidewalls:** Achieves highly anisotropic etching, resulting in smooth, vertical sidewalls.
*   **Selectivity:** Good selectivity between etching the substrate and the masking material.
*   **Mask Compatibility:** Compatible with standard photolithography masks.

**Advantages of DRIE:**
*   Enables fabrication of deep, intricate 3D structures not possible with conventional etching.
*   High precision and control over etch profiles.
*   Faster etching rates compared to some wet anisotropic etching for deep structures.

**Disadvantages of DRIE:**
*   Complex equipment and process control.
*   Can be expensive.
*   Potential for "scalloping" on sidewalls due to the cyclic nature.
*   Requires careful optimization of gas flows, plasma power, and bias voltage.

**Example (CO6):**
*   **Micro-optical components:** Deep gratings, lenses.
*   **Micro-engines and micro-turbines:** Requires robust, thick structural components.
*   **Advanced accelerometers and gyroscopes:** Need deep, precise structures for optimal performance.
*   **Micro-connectors and micro-switches.**

---

### 4. LIGA Process

**Key Concept:** LIGA is a German acronym for **Li**thographie (Lithography), **I**ntegration (Galvanoformung - Electroplating/Forming), and **A**bformung (Abformung - Molding). It is a process for fabricating microstructures with high aspect ratios and often made from metals, plastics, or ceramics.

**Process Steps:**

1.  **Lithography (X-ray Lithography):**
    *   Uses high-energy X-rays to pattern a resist material (typically a thick polymer, like PMMA - Poly(methyl methacrylate)).
    *   A mask containing absorber patterns is used. X-rays penetrate the mask's clear areas and expose the resist, while the absorber areas block the X-rays.
    *   **Why X-rays?** X-rays have short wavelengths, enabling high-resolution patterning, and they penetrate thick resists, allowing for the creation of deep resist profiles.
2.  **Developing:** The exposed resist is developed, removing the exposed areas (or unexposed areas, depending on the resist type) to create a mold cavity with the desired micro-structure geometry. This resist structure can be tens to hundreds of micrometers high.
3.  **Electroplating (Galvanoformung):**
    *   The substrate with the patterned resist mold is placed in an electroplating bath.
    *   A conductive seed layer is often applied to the substrate.
    *   Metal is electroplated into the resist mold cavities, filling them to form the desired micro-component. Common metals include nickel, copper, gold, and alloys.
4.  **Mold Removal (Abformung):**
    *   After electroplating, the resist mold is removed, typically by dissolving it in a solvent (e.g., acetone for PMMA). This leaves behind the freestanding metallic microstructures.
    *   Alternatively, the LIGA process can be used to create a master mold, which is then used for replication processes like injection molding or hot embossing for polymer structures.

**Key Features of LIGA:**
*   **High Aspect Ratios:** Can create structures with aspect ratios of 100:1 or more.
*   **Material Versatility:** Can fabricate structures from a wide range of metals, plastics, and ceramics (by using ceramic precursors or molding).
*   **High Precision and Resolution:** Excellent dimensional accuracy.
*   **Mass Production Potential:** Once the master mold is created, it can be used for replication.

**Advantages of LIGA:**
*   Enables fabrication of micro-parts with complex geometries and high aspect ratios.
*   Allows for fabrication of parts from a variety of materials, especially metals, which are not easily micromachined by etching.
*   Suitable for mass production through replication.

**Disadvantages of LIGA:**
*   **Expensive and Complex:** Requires expensive X-ray synchrotron radiation sources, which are not widely available.
*   **Thick Resist Handling:** Handling and processing very thick resists can be challenging.
*   **Mask Fabrication:** Creating X-ray masks is complex and costly.
*   **Potential for Undercutting:** Careful control of electroplating is needed to avoid issues.

**Example (CO6):**
*   **Micro-gears and micro-bearings:** Durable metallic components for micro-mechanical systems.
*   **Micro-connectors and switches.**
*   **Micro-pumps and micro-valves** for fluid handling.
*   **Optical components and gratings.**

---

### 5. Comparison of Micromachining Techniques

| Feature              | Bulk Micromachining (Wet)                               | Surface Micromachining                                 | DRIE                                            | LIGA                                                              |
| :------------------- | :------------------------------------------------------ | :----------------------------------------------------- | :---------------------------------------------- | :---------------------------------------------------------------- |
| **Primary Method**   | Subtractive (etching bulk material)                     | Additive (layer deposition) & Subtractive (etching sacrificial layers) | Subtractive (plasma etching)                    | Lithography, Electroplating, Molding                              |
| **Aspect Ratio**     | Moderate (anisotropic) to Low (isotropic)             | Low to Moderate                                        | High                                            | Very High                                                         |
| **Structure Depth**  | Deep                                                    | Shallow to Moderate                                    | Deep                                            | Deep                                                              |
| **Material Type**    | Primarily substrate material (e.g., Silicon)            | Thin films (Polysilicon, Nitride, Metals)              | Primarily substrate material (e.g., Silicon)    | Metals, Plastics, Ceramics                                        |
| **Complexity**       | Moderate                                                | Moderate to High                                       | High                                            | Very High                                                         |
| **Cost**             | Moderate                                                | Moderate                                               | High                                            | Very High (due to X-ray source)                                   |
| **Key Strengths**    | Simple structures, deep etching (anisotropic)           | Multi-layer structures, suspended components           | High aspect ratios, vertical sidewalls          | High aspect ratios, various materials, replication potential      |
| **Key Weaknesses**   | Undercutting (isotropic), limited 3D complexity         | Limited thickness, stiction risks                      | Scalloping, process complexity                  | High cost, specialized equipment                                  |
| **Example Devices**  | Pressure sensors, nozzles                               | Micro-mirrors, resonators                              | Deep gratings, micro-engines, accelerometers    | Micro-gears, bearings, connectors, micro-molds                    |

---

### 6. Important Points to Remember (Key Takeaways)

*   **MEMS Fabrication is Diverse:** No single technique is best for all MEMS. The choice depends on the required geometry, material, performance, and cost.
*   **Bulk vs. Surface:** Bulk micromachining removes material from the substrate, while surface micromachining builds structures on the surface using thin films.
*   **DRIE is for High Aspect Ratios:** DRIE is essential for creating deep and narrow structures with vertical sidewalls, particularly in silicon.
*   **LIGA for Versatility and High Aspect Ratios:** LIGA offers excellent aspect ratios and the ability to create MEMS from a wider range of materials, but at a significant cost.
*   **Understanding Fabrication Enables Design (CO6):** Knowing how MEMS are made allows engineers to design devices that are manufacturable and to select the appropriate fabrication process for a given application.
*   **MEMS in Mechatronics (CO6, CO7):** These fabrication methods are fundamental to realizing the miniaturization, integration, and advanced capabilities of modern mechatronic systems.

---

### 7. Practice Questions and Answers

**Question 1:** Briefly explain the difference between bulk micromachining and surface micromachining.

**Answer 1:**
*   **Bulk micromachining** involves selectively removing material from the bulk of a substrate (e.g., silicon) using etching techniques to define the microstructures.
*   **Surface micromachining** involves building microstructures on the surface of a substrate using deposited thin films. Sacrificial layers are often used and then removed to release the final structures.

**Question 2:** What is the primary advantage of DRIE compared to conventional wet etching for creating microstructures?

**Answer 2:** The primary advantage of DRIE is its ability to create microstructures with very high aspect ratios (deep and narrow) and near-vertical sidewalls, which is often difficult or impossible to achieve with conventional wet etching.

**Question 3:** List the three main steps involved in the LIGA process.

**Answer 3:** The three main steps in the LIGA process are:
1.  **Lithography** (typically X-ray lithography)
2.  **Electroplating** (Galvanoformung)
3.  **Molding** (Abformung, or mold removal)

**Question 4:** Consider a MEMS pressure sensor that requires a deep, precisely defined cavity in a silicon wafer. Which micromachining technique would be most suitable for fabricating this cavity, and why?

**Answer 4:** DRIE (Deep Reactive Ion Etching) would be the most suitable technique. This is because it excels at creating deep structures with high aspect ratios and very vertical sidewalls, ensuring the precision and depth required for the sensor cavity. Bulk micromachining with anisotropic etchants could also be used, but DRIE often offers better control over deep profiles and faster etch rates for such features.

**Question 5:** A micro-gear made of nickel with an aspect ratio of 50:1 needs to be fabricated. Which micromachining process is best suited for this, and what are the key steps involved?

**Answer 5:** The LIGA process is best suited for fabricating a micro-gear with a high aspect ratio (50:1) and made of metal like nickel. The key steps would involve:
1.  **X-ray Lithography:** Patterning a thick resist layer using X-rays and a mask to define the gear shape and depth.
2.  **Electroplating:** Electroplating nickel into the resist mold to form the gear.
3.  **Mold Removal:** Dissolving the resist to release the nickel micro-gear.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 8. References and Further Reading

*   **Bolton, W. (7th).** *Mechatronics: Electronic Control Systems in Mechanical and Electrical Engineering.* Pearson. (While Bolton's book provides a broad overview of mechatronics, it might touch upon MEMS as sensors/actuators without going into deep fabrication details. Refer to chapters discussing sensors and actuators for context.)
*   **Onwubolu, G. C.** *Mechatronics: Principles and Applications.* Elsevier. (This text is likely to provide more in-depth coverage of MEMS, including fabrication processes. Look for dedicated chapters or sections on MEMS.)
*   **Shetty, D., & Kolk, R.** *Mechatronics System Design.* PWS Pub. (Similar to Onwubolu, this book could offer valuable insights into MEMS as components in mechatronic systems and their fabrication.)
*   **Rajput, R. K.** *A Text Book of Mechatronics.* S. Chanth, First edition 2007. (This reference book is a good starting point for understanding the fundamentals of mechatronics and may include sections on MEMS and their fabrication.)

**Note:** Specific page numbers for detailed fabrication processes like DRIE and LIGA are best found within dedicated MEMS or microfabrication textbooks if the provided mechatronics books lack sufficient depth on these specific topics. However, the principles of how these devices are integrated into mechatronic systems will be covered in the cited mechatronics books.