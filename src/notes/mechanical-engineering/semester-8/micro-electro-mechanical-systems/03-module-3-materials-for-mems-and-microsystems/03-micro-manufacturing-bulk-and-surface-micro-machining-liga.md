---
title: "Micro manufacturing – Bulk and surface micro machining – LIGA"
subject: "MICRO ELECTRO MECHANICAL SYSTEMS"
module: "Module 3: Materials for MEMS and Microsystems."
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1a51d0cf4804464789"
status: "completed"
scrapedAt: "2026-05-20T18:22:27.583Z"
---
# MICRO ELECTRO MECHANICAL SYSTEMS (MEMS) - Module 3: Materials for MEMS and Microsystems

## Topic: Micro Manufacturing – Bulk and Surface Micro-machining – LIGA

---

### Introduction to Micro-manufacturing in MEMS

Micro-manufacturing is the cornerstone of MEMS fabrication, enabling the creation of microscopic devices with intricate functionalities. This module delves into the fundamental techniques used to sculpt and pattern materials at the micro-scale. Understanding these processes is crucial for appreciating how MEMS devices are brought into existence, directly impacting our ability to design and build functional microsystems.

**Key Concepts:**

*   **Micro-manufacturing:** The set of processes used to fabricate structures and devices with characteristic dimensions in the micrometer range (1-1000 µm).
*   **Microsystem:** A device that integrates sensing, actuation, and/or signal processing at the micro-scale.

**Alignment with Course Outcomes:**

*   **CO2 (K2):** Understand the engineering and physics of MEMS Fabrication Process. This topic directly addresses the core fabrication processes.
*   **CO3 (K2):** Understand the various processes in MEMS Fabrication. This topic details specific micro-machining techniques.

**Reference:** Hsu, Chapter 3: "Micro-machining." Madou, Chapter 4: "Silicon Micromachining." Gad-el-Hak, Chapter 5: "Micromachining."

---

### 1. Bulk Micro-machining

Bulk micro-machining is a subtractive fabrication technique that selectively removes material from the bulk of a substrate, typically silicon, to create 3D microstructures. It's characterized by its ability to produce thicker structures.

**Key Concepts:**

*   **Subtractive Process:** Material is removed from a bulk substrate.
*   **Isotropic Etching:** Etching proceeds at the same rate in all crystallographic directions. Results in rounded features.
*   **Anisotropic Etching:** Etching proceeds at different rates in different crystallographic directions. Results in faceted and well-defined features.
*   **Etchants:** Chemical solutions used to remove material.
*   **Masking:** Using an inert material (e.g., silicon nitride, silicon dioxide) to protect certain areas of the substrate from etching.

**Processes Involved:**

*   **Photolithography:** Defining the pattern on the substrate using light and photoresist.
    *   **Photoresist:** A light-sensitive polymer that can be patterned.
    *   **Mask:** A transparent plate with an opaque pattern, used to transfer the design to the photoresist.
    *   **Exposure:** Shining UV light through the mask onto the photoresist.
    *   **Development:** Removing either the exposed (positive photoresist) or unexposed (negative photoresist) photoresist.
*   **Etching:** Removing the unprotected substrate material.

**Types of Etching:**

*   **Wet Etching:** Using liquid etchants.
    *   **Isotropic Wet Etching:**
        *   **HF/HNO3/H2O (Hydrofluoric, Nitric, Water):** Common etchant for silicon. Causes undercutting.
        *   **Example:** Creating rounded trenches or cavities.
    *   **Anisotropic Wet Etching:**
        *   **KOH (Potassium Hydroxide):** A common anisotropic etchant for silicon. Etches faster in directions other than <100> and <111>.
        *   **EDP (Ethylene Diamine Pyrocatechol):** Another anisotropic etchant, often preferred for its selectivity to silicon dioxide.
        *   **Mask Orientation is Crucial:** For <100> silicon wafers, etching with KOH typically exposes {111} planes, which etch much slower. This creates V-grooves or pyramidal cavities.
        *   **Example:** Creating V-grooves for aligning optical fibers, or smooth-walled cavities for pressure sensors (e.g., diaphragms for pressure sensors).
*   **Dry Etching:** Using gaseous etchants, often in a plasma.
    *   **Plasma Etching:** Utilizes reactive ions generated in a plasma to etch the substrate.
        *   **Isotropic Plasma Etching:** Similar to isotropic wet etching, often using CF4-based plasmas.
        *   **Anisotropic Plasma Etching (Reactive Ion Etching - RIE):** A directional etching process. Ions are accelerated towards the substrate, leading to vertical sidewalls.
        *   **Deep Reactive Ion Etching (DRIE):** A highly anisotropic etching technique that can create high-aspect-ratio structures. Often uses a Bosch process (alternating passivation and etching steps).
        *   **Example:** Creating high-aspect-ratio trenches for vertical actuators or micro-gears.

**Advantages of Bulk Micro-machining:**

*   Can create relatively thick structures.
*   Well-established and mature processes.
*   Can be cost-effective for simpler 3D structures.

**Disadvantages of Bulk Micro-machining:**

*   Limited by the crystallographic planes of the substrate for anisotropic etching.
*   Undercutting in isotropic etching can be a problem for precise feature definition.
*   Can be slow for deep etching.

**Important Points to Remember:**

*   The choice of etchant and mask orientation is critical for achieving desired feature shapes in anisotropic etching.
*   Undercutting is a key consideration in isotropic etching.
*   DRIE is essential for high-aspect-ratio features.

**Reference:** Hsu, Chapter 3. Madou, Chapter 4. Gad-el-Hak, Chapter 5.

---

### 2. Surface Micro-machining

Surface micro-machining is a technique that fabricates microstructures by selectively depositing and patterning thin films on the surface of a substrate. Sacrificial layers are used to create movable parts.

**Key Concepts:**

*   **Additive and Subtractive Process:** Involves deposition of materials and then etching away sacrificial layers.
*   **Thin Films:** Layers of material deposited on the substrate, typically ranging from a few nanometers to a few micrometers in thickness.
*   **Sacrificial Layer:** A layer that is selectively removed after the structural layers are formed, releasing the microstructures.
*   **Structural Layer:** The layer that forms the functional part of the microstructure.
*   **High Aspect Ratio:** Surface micro-machining generally produces thinner structures compared to bulk micro-machining.

**Processes Involved:**

*   **Thin Film Deposition:** Depositing structural and sacrificial materials.
    *   **Chemical Vapor Deposition (CVD):** Depositing thin films from gaseous precursors.
        *   **Low-Pressure CVD (LPCVD):** Uniform deposition over large areas.
        *   **Plasma-Enhanced CVD (PECVD):** Allows deposition at lower temperatures, compatible with a wider range of substrates.
    *   **Physical Vapor Deposition (PVD):** Depositing films by physical processes.
        *   **Sputtering:** Bombarding a target material with ions to eject atoms, which then deposit on the substrate.
        *   **Evaporation:** Heating a material until it vaporizes, then condenses on the substrate.
*   **Photolithography:** Patterning the deposited thin films.
*   **Etching:** Removing unwanted portions of the structural layers (using dry or wet etching).
*   **Sacrificial Layer Removal (Release Etch):** Selectively removing the sacrificial layer to free the microstructures.
    *   **HF (Hydrofluoric Acid):** Commonly used to etch silicon dioxide (SiO2), a popular sacrificial layer.
    *   **Challenges:** Stiction (parts sticking to each other or the substrate after release), particularly with movable parts. Techniques like stiction reduction are employed.

**Common Materials Used:**

*   **Sacrificial Layers:** Silicon dioxide (SiO2), silicon nitride (Si3N4), polycrystalline silicon (polysilicon).
*   **Structural Layers:** Polysilicon, silicon nitride, silicon dioxide, metals (e.g., aluminum, gold), polymers.

**Examples of Structures Fabricated:**

*   **Micro-mirrors:** Used in optical switches and displays.
*   **Accelerometers:** Detecting acceleration.
*   **Micro-resonators:** Used in timing circuits and sensors.
*   **Micro-grippers:** For manipulating micro-objects.

**Advantages of Surface Micro-machining:**

*   Can create intricate 3D microstructures with moving parts.
*   Offers greater design flexibility for complex geometries.
*   Compatible with a wider range of materials beyond silicon.

**Disadvantages of Surface Micro-machining:**

*   Structures are typically thinner.
*   Can be more complex and involve more process steps.
*   Stiction is a major fabrication challenge.
*   Yield can be lower due to the multiple processing steps.

**Important Points to Remember:**

*   The release etch is a critical step that can significantly impact the yield.
*   Stiction is a primary concern for movable MEMS devices fabricated using surface micro-machining.
*   The choice of sacrificial and structural layers depends on their etch selectivity.

**Reference:** Hsu, Chapter 3. Madou, Chapter 5. Gad-el-Hak, Chapter 5.

---

### 3. LIGA (Lithographie, Galvanoformung, Abformung)

LIGA is a high-aspect-ratio micro-fabrication process that utilizes X-ray lithography, electroforming, and molding to create robust, high-precision microstructures, often made from metals, ceramics, or polymers. It is particularly well-suited for producing components with significant height and fine lateral features.

**Key Concepts:**

*   **High Aspect Ratio:** Structures with a large height-to-width ratio.
*   **X-ray Lithography:** A lithographic technique using high-energy X-rays for patterning. Offers excellent resolution and depth of focus.
*   **Electroforming:** A process of depositing a metal layer onto a patterned mold to create the final microstructures.
*   **Molding (Abformung):** Using the electroformed metal structures as molds to replicate the microstructures in other materials (polymers, ceramics).

**Processes Involved:**

1.  **X-ray Lithography:**
    *   **Mask:** A mask made of a high-Z material (e.g., gold) on a low-Z substrate (e.g., silicon or polymer membrane) is used. The pattern is defined by the absorber material.
    *   **Radiation Sensitive Material:** A resist material (typically PMMA - Poly(methyl methacrylate)) that is highly sensitive to X-rays is used.
    *   **Exposure:** The wafer with PMMA resist is exposed to synchrotron-generated X-rays through the mask. X-rays have high penetration power, allowing for thick resist layers to be patterned with vertical sidewalls.
    *   **Development:** The exposed (or unexposed, depending on the resist type) PMMA is dissolved in a developer, leaving a mold with high-aspect-ratio features.

2.  **Electroforming (Galvanoformung):**
    *   **Plating:** A conductive layer (e.g., chromium or gold) is deposited onto the patterned resist mold.
    *   **Electrodeposition:** The mold with the conductive layer is immersed in an electroplating bath (e.g., nickel, copper, gold). Metal ions from the bath are deposited onto the conductive areas, filling the cavities and forming the microstructures.
    *   **Stripping:** After electrodeposition, the original resist mold is removed, leaving the freestanding metal microstructures.

3.  **Molding (Abformung):**
    *   **Master Mold Creation:** The electroformed metal structures serve as the negative of the desired microstructures.
    *   **Replication:** These metal molds are then used in injection molding, transfer molding, or casting processes to replicate the microstructures in polymers, ceramics, or other materials. This step allows for mass production of the microstructures.

**Advantages of LIGA:**

*   **High Aspect Ratio:** Capable of producing structures with aspect ratios up to 100:1 or more.
*   **High Precision:** Excellent lateral resolution and very straight sidewalls.
*   **Material Versatility:** Can fabricate microstructures from metals, polymers, and ceramics.
*   **Robustness:** Often produces strong and durable structures due to the materials used (metals, ceramics).

**Disadvantages of LIGA:**

*   **High Cost:** Requires access to synchrotron radiation sources for X-ray lithography, which is expensive and complex.
*   **Limited Flexibility:** The process is more rigid and less adaptable to rapid design changes.
*   **Limited Thickness Variation:** Difficult to achieve large variations in structure height within a single process.
*   **Stiction Issues:** Similar to other micro-machining processes, stiction can be a problem for very fine, movable parts.

**Examples of Applications:**

*   **Micro-actuators:** High-force actuators.
*   **Micro-gears and transmissions:** Robust mechanical components.
*   **Micro-connectors:** For high-density electronic packaging.
*   **Medical devices:** Catheters, micro-needles.
*   **High-frequency devices:** Micro-wave components.

**Important Points to Remember:**

*   LIGA is a three-step process: X-ray lithography, electroforming, and molding.
*   Synchrotron radiation is essential for the X-ray lithography step.
*   The process is excellent for creating high-aspect-ratio and robust micro-mechanical components.

**Reference:** Hsu, Chapter 3. Madou, Chapter 7: "LIGA and Related Processes." Gad-el-Hak, Chapter 5.

---

### Practice Questions and Answers

**Question 1:** Compare and contrast bulk micro-machining and surface micro-machining. What are the primary advantages and disadvantages of each approach?

**Answer:**

**Bulk Micro-machining:**
*   **Process:** Subtractive, material removed from the bulk of the substrate.
*   **Structure Thickness:** Can create thicker structures.
*   **Features:** Can produce 3D structures, but shape is often limited by crystallographic planes (anisotropic) or undercut (isotropic).
*   **Example Etchants:** KOH (anisotropic), HF/HNO3 (isotropic).
*   **Advantages:** Mature, cost-effective for simpler 3D shapes, can produce thicker structures.
*   **Disadvantages:** Limited by crystallographic planes, undercutting issues, slower for deep features.

**Surface Micro-machining:**
*   **Process:** Additive and subtractive, involves deposition of thin films and removal of sacrificial layers.
*   **Structure Thickness:** Structures are typically thinner.
*   **Features:** Can create intricate 3D microstructures with moving parts and higher design flexibility.
*   **Common Materials:** Polysilicon, metals, polymers.
*   **Advantages:** Greater design freedom, creation of movable parts, compatibility with a wider range of materials.
*   **Disadvantages:** Thinner structures, more complex, susceptible to stiction, potentially lower yield.

**Question 2:** What are the key steps in the LIGA process, and what makes it suitable for fabricating high-aspect-ratio microstructures?

**Answer:**
The key steps in the LIGA process are:
1.  **X-ray Lithography:** Patterning a thick layer of radiation-sensitive resist (e.g., PMMA) using synchrotron X-rays. The high penetration of X-rays allows for patterning of thick resist layers with vertical sidewalls.
2.  **Electroforming (Galvanoformung):** Depositing metal onto the patterned resist mold to create the microstructures. This step allows for the replication of the high-aspect-ratio features defined by the lithography.
3.  **Molding (Abformung):** Using the electroformed metal structures as molds to replicate the microstructures in polymers, ceramics, or other materials for mass production.

LIGA is suitable for high-aspect-ratio microstructures because:
*   **X-ray lithography** can pattern very thick resist layers (hundreds of micrometers) with excellent vertical sidewall definition.
*   **Electroforming** allows for the precise filling of these high-aspect-ratio trenches with robust materials like nickel or copper.

**Question 3:** You are designing a MEMS accelerometer with a suspended proof mass. Which micro-machining technique would you most likely consider, and why? What is a major fabrication challenge you might face with this technique?

**Answer:**
For a MEMS accelerometer with a suspended proof mass, **surface micro-machining** would be the most suitable technique.

**Reasoning:**
Surface micro-machining excels at creating microstructures with movable parts, such as the suspended proof mass. It allows for the selective deposition and etching of thin films to build up complex geometries layer by layer, releasing the suspended components after fabrication.

**Major Fabrication Challenge:**
The major fabrication challenge you would likely face is **stiction**. After the sacrificial layer is removed to release the suspended proof mass, the proof mass might adhere to the substrate or other parts of the device due to surface tension forces during the drying process or electrostatic forces. This would prevent the proof mass from moving freely, rendering the accelerometer non-functional.

---

### Conclusion

Understanding bulk micro-machining, surface micro-machining, and LIGA is fundamental to MEMS fabrication. Each technique offers distinct capabilities and limitations, making them suitable for different types of microstructures and applications. The choice of micro-manufacturing process directly influences the design possibilities, material selection, and ultimate performance of a MEMS device. These techniques, alongside advances in materials, continue to drive innovation in the field of microsystems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
