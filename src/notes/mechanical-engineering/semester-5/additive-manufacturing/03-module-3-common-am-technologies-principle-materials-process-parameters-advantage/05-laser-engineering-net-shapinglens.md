---
title: "Laser Engineering Net Shaping(LENS)."
subject: "ADDITIVE MANUFACTURING"
module: "Module 3: Common AM technologies:  Principle, materials, process parameters, advantages and applications of: Selective Laser Sintering (SLS)"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf480446357a"
status: "completed"
scrapedAt: "2026-05-20T17:57:45.401Z"
---
## Study Notes: Laser Engineering Net Shaping (LENS)

**Subject:** ADDITIVE MANUFACTURING
**Module:** Module 3: Common AM technologies: Principle, materials, process parameters, advantages and applications of: Selective Laser Sintering (SLS)
**Topic:** Laser Engineering Net Shaping (LENS)
**Description:** This topic will delve into the Laser Engineering Net Shaping (LENS) technology, a prominent metal additive manufacturing process, exploring its principles, materials, process parameters, advantages, and applications, within the context of common AM technologies.

---

### **Module 3: Common AM Technologies**

**Focus Topic: Laser Engineering Net Shaping (LENS)**

---

### **1. Introduction to Laser Engineering Net Shaping (LENS)**

*   **Definition:** Laser Engineering Net Shaping (LENS) is a powder-bed fusion additive manufacturing process that uses a focused laser beam to melt and fuse metallic powder, deposited layer by layer, to create a three-dimensional object. It is a directed energy deposition (DED) process, specifically a variant of laser-based DED.
*   **Key Concept:** LENS builds parts directly from CAD data by selectively melting and fusing fine metal powders, allowing for complex geometries and material deposition onto existing substrates.
*   **Relationship to other AM Technologies:** While the module focuses on Selective Laser Sintering (SLS), LENS shares the principle of using a laser to fuse materials. However, SLS typically uses powder beds and sinters powders (without full melting), whereas LENS uses a focused stream of powder directed into the melt pool created by the laser, resulting in fully dense parts. (Gibson et al., 2015)

---

### **2. Principle of LENS**

*   **Core Mechanism:**
    *   A focused laser beam scans across a substrate or previously deposited layer.
    *   Simultaneously, fine metallic powder (typically in the range of 15-45 µm) is injected into the laser's focal point via a powder delivery nozzle.
    *   The laser melts the powder and a small amount of the substrate or previous layer.
    *   As the laser moves, the molten material solidifies, forming a new layer.
    *   The build platform or nozzle moves incrementally in the Z-axis, allowing for layer-by-layer construction of the component.
*   **Process Steps:**
    1.  **Powder Feeding:** Metallic powder is delivered from a reservoir to the nozzle.
    2.  **Laser Melting:** A high-power laser beam melts the powder as it enters the focal zone.
    3.  **Deposition & Fusion:** The molten powder fuses with the underlying material (substrate or previous layer).
    4.  **Solidification:** The molten pool rapidly cools and solidifies, forming a metallurgical bond.
    5.  **Layer Progression:** The laser head and/or build platform move to deposit the next layer, repeating the process until the desired part is complete.
*   **Crucial Aspect:** The precise control of the laser power, powder feed rate, and gas flow is critical for achieving a stable melt pool and creating dense, high-quality parts. (Chua et al., 2010)

---

### **3. Materials Used in LENS**

LENS is primarily used for metallic materials, allowing for a wide range of alloys to be processed.

*   **Commonly Used Materials:**
    *   **Stainless Steels:** (e.g., 316L, 17-4PH) - Excellent corrosion resistance and mechanical properties.
    *   **Tool Steels:** (e.g., H13, D2) - High hardness, wear resistance, and strength for tooling applications.
    *   **Nickel Alloys:** (e.g., Inconel 625, 718) - High-temperature strength, corrosion resistance, and creep resistance.
    *   **Titanium Alloys:** (e.g., Ti-6Al-4V) - Lightweight, high strength-to-weight ratio, excellent biocompatibility.
    *   **Aluminum Alloys:** (e.g., AlSi10Mg) - Lightweight, good thermal conductivity.
    *   **Cobalt-Chrome Alloys:** Biocompatibility and wear resistance for medical implants.
*   **Material Forms:** LENS exclusively uses **metal powders**. The particle size and morphology are critical for efficient powder delivery and melting. Spherical powders with a controlled size distribution (typically 15-45 µm) are preferred for optimal flowability and melting. (Gibson et al., 2015)
*   **Bi-metallic Capabilities:** LENS can also be used to create functionally graded materials (FGMs) or multi-material components by switching between different powder feeders during the build process, allowing for tailored material properties across the part. (Pham & Dimov, 2011)

---

### **4. Process Parameters for LENS**

Precise control of these parameters is essential for successful LENS processing.

*   **Laser Parameters:**
    *   **Laser Power:** The energy input per unit time. Higher power generally leads to deeper penetration and faster melting, but excessive power can cause overheating and porosity.
    *   **Scan Speed:** The speed at which the laser beam moves across the surface. A balance is needed; too fast may lead to incomplete melting, too slow can cause excessive heat buildup and part distortion.
    *   **Spot Size/Beam Diameter:** The diameter of the laser beam at the focal point. Affects the melt pool geometry and feature resolution.
    *   **Hatch Spacing:** The distance between adjacent scan lines within a layer. Determines the overlap and density of deposited material.
*   **Powder Feed Parameters:**
    *   **Powder Feed Rate:** The mass of powder delivered per unit time. Directly influences the amount of material available for melting and dictates build speed and part density.
    *   **Powder Delivery Angle:** The angle at which the powder is injected into the melt pool. Affects powder capture efficiency and melt pool stability.
*   **Gas Flow Parameters:**
    *   **Shielding Gas Flow Rate & Type:** Typically Argon or Helium. Shields the molten pool from atmospheric contamination (oxidation) and can influence melt pool dynamics and cooling rates. Proper flow is crucial to prevent porosity.
    *   **Carrier Gas Flow Rate:** The gas used to transport the powder from the feeder to the nozzle.
*   **Build Parameters:**
    *   **Layer Thickness:** The increment of build in the Z-axis. Smaller layers generally yield better surface finish and accuracy but increase build time.
    *   **Inert Gas Atmosphere:** The build chamber is usually filled with an inert gas (e.g., Argon) to prevent oxidation of the molten metal.

*   **Important Note:** There is a complex interplay between these parameters. Optimization is often required to achieve desired material properties, dimensional accuracy, and surface finish. (Srivastava et al., 2019)

---

### **5. Advantages of LENS**

LENS offers significant benefits over traditional manufacturing methods and other AM processes.

*   **High Material Density:** LENS typically produces fully dense parts with excellent mechanical properties, comparable to wrought materials, due to the complete melting of the powder. (Shiva & Shukla, 2024)
*   **Wide Range of Materials:** Capable of processing a broad spectrum of metallic alloys, including advanced and exotic materials.
*   **High Deposition Rate:** Generally faster than powder-bed fusion (like SLM/DMLS) for building larger parts or adding features.
*   **Repair and Remanufacturing:** LENS is excellent for repairing worn or damaged high-value components (e.g., turbine blades, tooling) by selectively adding material to the damaged areas.
*   **On-Substrate Building:** Parts can be built directly onto existing components or substrates, facilitating repair, modification, or the creation of complex integrated systems.
*   **Functionally Graded Materials (FGMs):** Ability to create parts with gradual transitions in material properties by mixing or sequentially depositing different powders.
*   **Tailored Microstructures:** The rapid cooling rates inherent in the process can lead to fine microstructures and enhanced mechanical properties.
*   **Complex Geometries:** Can produce intricate internal and external geometries that are difficult or impossible with subtractive methods.
*   **Reduced Material Waste:** Builds parts close to net shape, minimizing post-processing and material waste compared to subtractive manufacturing.

---

### **6. Applications of LENS**

LENS finds application in various demanding industries.

*   **Aerospace:**
    *   Repair of turbine engine components (blades, vanes).
    *   Fabrication of lightweight, complex aerospace structures.
    *   Prototyping of advanced aerospace parts.
*   **Defense:**
    *   Repair of critical military equipment.
    *   Manufacturing of specialized components.
*   **Energy:**
    *   Repair of power plant components (e.g., boiler tubes, turbine parts).
    *   Fabrication of specialized tooling for energy exploration.
*   **Medical:**
    *   Production of custom surgical instruments.
    *   Repair or modification of implants.
    *   Creation of patient-specific anatomical models or scaffolds.
*   **Tooling:**
    *   Manufacturing of conformal cooling channels in injection molds and dies for improved efficiency and part quality.
    *   Repair or enhancement of existing tooling.
*   **Research & Development:**
    *   Rapid prototyping of metallic components.
    *   Development of new alloys and material systems.

---

### **7. Learning Outcome Alignment**

*   **CO1: Understand the concept of AM from conventional manufacturing systems. (K2)**
    *   LENS demonstrates a fundamental shift from subtractive (removing material) to additive (adding material) manufacturing, highlighting the core concept of building layer by layer.
*   **CO2: Understand the data processing techniques in AM process (K2)**
    *   LENS relies on CAD data to define the toolpath and deposition strategy, illustrating the importance of digital design and slicing in AM.
*   **CO3: Understand the principles of AM processes. (K2)**
    *   This section extensively covers the principle of laser melting and powder deposition characteristic of LENS.
*   **CO4: Create components using AM process. (K6)**
    *   While this note provides information, practical application and hands-on experience (or simulation) would be required to fulfill this outcome by actually creating a part using LENS.
*   **CO5: Understand the key aspects in design a product using AM. (K2)**
    *   The ability to create complex geometries, FGMs, and the suitability for repair are key design considerations informed by LENS capabilities.
*   **CO6: Understand the application of AM in industries (K2)**
    *   The applications section directly addresses the use of LENS in aerospace, defense, medical, and other industrial sectors.

---

### **8. Important Points to Remember**

*   **LENS is a Directed Energy Deposition (DED) process**, specifically laser-based DED.
*   It builds parts by **melting injected metal powder** with a laser beam.
*   **Fully dense parts** with excellent mechanical properties are a key advantage.
*   **Repair and remanufacturing** are significant applications.
*   Precise control of **laser power, powder feed rate, and gas flow** is critical.
*   LENS excels at creating **complex geometries and functionally graded materials**.
*   **Inert gas atmosphere** is crucial to prevent oxidation.

---

### **9. Practice Questions & Exercises**

**Question 1:**
Describe the fundamental principle of Laser Engineering Net Shaping (LENS) and contrast it with Selective Laser Sintering (SLS) in terms of material processing and final part density.

**Answer 1:**
LENS builds parts by injecting metal powder into a laser-generated melt pool, where it is fully melted and fused with the substrate or previous layer. This process typically results in fully dense metal parts. In contrast, SLS uses a laser to selectively sinter (fuse particles without full melting) a bed of polymer or metal powder. While SLS can create dense parts, the process is often described as sintering or partial melting, and sometimes requires post-processing like infiltration for full density, especially with metals. LENS directly melts the powder, leading to inherent full density.

**Question 2:**
List at least three key process parameters that must be carefully controlled in LENS and explain why controlling each is important.

**Answer 2:**
1.  **Laser Power:** Important for ensuring complete melting of the powder and achieving proper fusion with the underlying layer. Insufficient power leads to lack of fusion or porosity, while excessive power can cause overheating, degradation of material properties, and excessive melt pool instability.
2.  **Powder Feed Rate:** Controls the amount of material deposited per unit time. It affects the build speed and the density of the deposited material. An incorrect rate can lead to either lack of material for fusion or excessive material accumulation, causing defects.
3.  **Shielding Gas Flow Rate:** Crucial for preventing oxidation of the molten metal pool by creating an inert atmosphere. Proper flow also helps in managing the melt pool dynamics and directing the powder efficiently into the melt. Insufficient shielding leads to porosity and embrittlement due to oxygen contamination.

**Question 3:**
Identify one significant advantage of LENS technology and provide a specific industrial application that leverages this advantage.

**Answer 3:**
**Advantage:** Repair and Remanufacturing Capabilities.
**Application:** Repairing worn turbine blades in the aerospace industry. Turbine blades are often subjected to high temperatures and stresses, leading to wear or damage. LENS can precisely deposit new metal onto the damaged areas, restoring the blade's geometry and functionality, which is often more cost-effective than replacing the entire component.

**Exercise 1:**
Imagine you are tasked with designing a component for a high-temperature aerospace application using LENS. What material would you likely choose, and why? What are two key design considerations you would keep in mind given LENS's capabilities?

**Solution to Exercise 1:**
*   **Material Choice:** A Nickel-based superalloy like Inconel 718 would be a suitable choice due to its excellent high-temperature strength, creep resistance, and corrosion resistance, all critical for aerospace applications.
*   **Design Considerations:**
    1.  **Internal Channels:** LENS allows for the creation of complex internal cooling channels (conformal cooling) that can significantly improve thermal management in high-temperature components. Design these channels to optimize heat dissipation.
    2.  **Part Consolidation:** LENS can build assemblies as a single, integrated part. Consider consolidating multiple smaller components into one LENS-built part to reduce assembly time, potential failure points, and weight.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### **References**

*   Gibson, l D. W. Rosen l, and B. Stucker. *Additive Manufacturing Technologies-3D Printing, Rapid Prototyping, and Direct Digital Manufacturing*. Springer, Second Edition, 2015.
*   Chua, C.K., Leong K.F., and Lim C.S. *Rapid prototyping: Principles and applications*. World Scientific Publishers, Third edition, 2010.
*   Pham, D.T., and Dimov, S.S. *Rapid Manufacturing The Technologies and Applications of Rapid Prototyping and Rapid Tooling*. Springer London Ltd, Softcover reprint of the original 1st ed. 2001, 2011.
*   Paul, C.P., and Jinoop, A.N. *Additive Manufacturing: Principles, technologies and Application*. McGraw Hill, First Edition, 2021.
*   Shiva, S., and Shukla, A.K. *Additive Manufacturing Technologies*. Wiley, First Edition, 2024.
*   Srivastava, M., Rathee, S., and Maheshwari, S. *Additive Manufacturing: Fundamentals and Advancements*. CRC Press, First Edition, 2019.