---
title: "Fused Deposition Modelling (FDM)"
subject: "ADDITIVE MANUFACTURING"
module: "Module 2: Common AM technologies: Principle, materials, process parameters, advantages and applications of: Stereo Lithography (SLA)"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463b64"
status: "completed"
scrapedAt: "2026-05-20T18:02:38.559Z"
---
# ADDITIVE MANUFACTURING: MODULE 2 - COMMON AM TECHNOLOGIES: FUSED DEPOSITION MODELLING (FDM)

---

## 1. Introduction to Fused Deposition Modelling (FDM)

Fused Deposition Modelling (FDM), also known as Fused Filament Fabrication (FFF), is a widely used additive manufacturing technology that builds objects layer by layer by extruding thermoplastic filament through a heated nozzle. It is a cost-effective and accessible technology, making it popular for prototyping, tooling, and even end-use part production.

### 1.1. Key Concepts and Definitions

*   **Thermoplastic Filament:** A flexible plastic material, typically supplied in spools, that can be melted, extruded, and solidified.
*   **Heated Nozzle (Extruder):** The component that melts the thermoplastic filament and precisely deposits it onto the build platform.
*   **Build Platform:** The surface on which the object is built, layer by layer.
*   **Layer-by-Layer Deposition:** The fundamental principle of FDM, where material is added in thin, successive layers to create the final part.
*   **Path Planning (Toolpath Generation):** The process of translating the digital 3D model into a series of movements for the extruder nozzle.

### 1.2. Principles of FDM (Learning Outcome 3, CO3)

FDM operates on the principle of **material extrusion**. The process can be broken down into the following steps:

1.  **Slicing:** A 3D digital model (e.g., STL file) is processed by slicing software, which divides it into thin horizontal layers.
2.  **Path Generation:** For each layer, the software generates toolpaths, defining the precise movements of the extruder nozzle.
3.  **Material Heating and Extrusion:** Thermoplastic filament is fed into the heated nozzle, where it melts.
4.  **Deposition:** The molten plastic is extruded through the nozzle and deposited onto the build platform or the previous layer, following the generated toolpath.
5.  **Layer Solidification:** As the extruded material cools, it solidifies, adhering to the layer below.
6.  **Layer Advancement:** The build platform moves down (or the extruder moves up) by a predefined layer height, and the process repeats for the next layer.
7.  **Support Structures:** For overhanging features or complex geometries, temporary support structures are often printed using the same or a different material. These are removed after the print is complete.

**Reference:** This principle is elaborated upon in *Gibson, Rosen, & Stucker (2015)*, specifically in chapters discussing material extrusion processes.

### 1.3. Materials Used in FDM (Learning Outcome 3, CO3)

FDM utilizes a wide range of thermoplastic materials, each offering unique properties. Common materials include:

*   **Acrylonitrile Butadiene Styrene (ABS):**
    *   **Properties:** Strong, durable, impact-resistant, good temperature resistance.
    *   **Applications:** Functional prototypes, enclosures, mechanical parts.
    *   **Considerations:** Prone to warping, requires a heated build platform and often an enclosed build chamber.
*   **Polylactic Acid (PLA):**
    *   **Properties:** Biodegradable, easy to print, low melting point, good stiffness.
    *   **Applications:** Visual prototypes, educational models, decorative items.
    *   **Considerations:** Lower temperature resistance and impact strength compared to ABS.
*   **Thermoplastic Polyurethane (TPU):**
    *   **Properties:** Flexible, elastic, abrasion-resistant.
    *   **Applications:** Gaskets, seals, phone cases, wearable components.
*   **Nylon (Polyamide):**
    *   **Properties:** Strong, durable, flexible, good chemical resistance.
    *   **Applications:** Living hinges, snap-fit components, high-strength functional parts.
    *   **Considerations:** Can be hygroscopic (absorbs moisture), requiring proper storage and drying.
*   **Polycarbonate (PC):**
    *   **Properties:** Very strong, high impact resistance, good temperature resistance.
    *   **Applications:** High-performance functional parts, jigs, fixtures.
    *   **Considerations:** Requires high printing temperatures and often an enclosed heated chamber.
*   **Composites (e.g., Carbon Fiber Filled PLA/Nylon):**
    *   **Properties:** Increased stiffness, strength, and dimensional stability.
    *   **Applications:** High-strength structural components, tooling.
    *   **Considerations:** Can be abrasive to standard nozzles, requiring hardened steel nozzles.

**Reference:** *Chua, Leong, & Lim (2010)* provides an overview of various materials used in rapid prototyping, including thermoplastics suitable for FDM. *Pham & Dimov (2011)* also touches upon material selection for rapid manufacturing processes.

### 1.4. Process Parameters in FDM (Learning Outcome 3, CO3)

Optimizing process parameters is crucial for achieving desired part quality, strength, and print time. Key parameters include:

*   **Layer Height:**
    *   **Definition:** The thickness of each deposited layer.
    *   **Impact:** Thinner layers result in higher resolution and smoother surfaces but increase print time. Thicker layers reduce print time but lead to coarser surfaces and visible layer lines.
    *   **Typical Range:** 0.05 mm to 0.3 mm.
*   **Nozzle Diameter:**
    *   **Definition:** The diameter of the opening through which the molten plastic is extruded.
    *   **Impact:** Influences the achievable resolution and the speed of deposition. Smaller nozzles offer higher detail, while larger nozzles enable faster printing of larger features.
    *   **Typical Range:** 0.2 mm to 1.0 mm.
*   **Extrusion Temperature (Nozzle Temperature):**
    *   **Definition:** The temperature of the heated nozzle.
    *   **Impact:** Needs to be set within the material's printing temperature range for proper melting and adhesion. Too low a temperature can lead to under-extrusion, while too high can cause oozing and stringing.
*   **Build Platform Temperature:**
    *   **Definition:** The temperature of the build platform.
    *   **Impact:** Crucial for good first-layer adhesion and reducing warping, especially for materials like ABS and Nylon.
*   **Print Speed:**
    *   **Definition:** The speed at which the extruder nozzle moves during deposition.
    *   **Impact:** Affects print time and part quality. Slower speeds generally improve adhesion and surface finish but increase print time.
*   **Infill Density and Pattern:**
    *   **Definition:** The percentage of material used to fill the internal volume of the part and the geometric arrangement of that infill.
    *   **Impact:** Affects part strength, weight, material consumption, and print time. Higher infill density results in stronger parts but uses more material and takes longer to print. Common patterns include grid, honeycomb, and gyroid.
*   **Retraction Settings:**
    *   **Definition:** The movement of the filament backward into the nozzle when the nozzle is not extruding.
    *   **Impact:** Reduces stringing and oozing during non-print moves.
*   **Cooling Fan Speed:**
    *   **Definition:** The speed of the fan that cools the deposited material.
    *   **Impact:** Helps the extruded plastic solidify quickly for better layer adhesion and sharper details, especially for PLA. Can be detrimental for materials like ABS if too much is used, leading to poor layer adhesion.

**Reference:** *Gibson, Rosen, & Stucker (2015)* and *Chua, Leong, & Lim (2010)* provide detailed discussions on the influence of these parameters on part quality and performance. *Paul & Jinoop (2021)* and *Srivastava, Rathee, & Maheshwari (2019)* also cover parameter optimization for AM processes.

### 1.5. Advantages of FDM (Learning Outcome 1, CO1 & CO4)

FDM offers several advantages over traditional manufacturing methods and other AM technologies:

*   **Cost-Effectiveness:** Generally the most affordable AM technology for both machines and materials.
*   **Material Versatility:** A wide range of thermoplastic materials with diverse properties can be used.
*   **Ease of Use:** Relatively simple to operate and maintain, making it accessible to hobbyists and educational institutions.
*   **Accessibility:** Many desktop FDM printers are available at relatively low price points.
*   **Good Mechanical Properties:** Can produce functional parts with decent strength and durability, especially with engineering-grade filaments.
*   **Scalability:** Can produce parts from small prototypes to larger functional components.
*   **Rapid Prototyping:** Excellent for quickly iterating designs and validating form, fit, and function.
*   **Customization:** Enables on-demand manufacturing of highly customized parts.

**Reference:** *Gibson, Rosen, & Stucker (2015)* and *Chua, Leong, & Lim (2010)* highlight the advantages of FDM in the context of rapid prototyping and manufacturing. *Pham & Dimov (2011)* discuss its role in rapid manufacturing.

### 1.6. Applications of FDM (Learning Outcome 1, CO1 & CO4)

FDM finds applications across various industries due to its versatility and cost-effectiveness:

*   **Prototyping:**
    *   **Concept Models:** Visualizing and evaluating new product designs.
    *   **Functional Prototypes:** Testing the performance and ergonomics of a design.
    *   **Fit and Form Testing:** Ensuring components assemble correctly.
*   **Tooling and Fixturing:**
    *   **Jigs and Fixtures:** Creating custom tools for manufacturing processes.
    *   **Molds and Patterns:** Producing patterns for casting or direct use in low-volume production.
*   **Manufacturing Aids:**
    *   **Custom Grippers:** For robotic end-effectors.
    *   **Assembly Aids:** Tools to simplify complex assembly tasks.
*   **End-Use Parts:**
    *   **Consumer Goods:** Custom phone cases, eyewear frames, decorative items.
    *   **Aerospace and Automotive:** Lightweight components, interior parts, ducting.
    *   **Medical:** Custom splints, anatomical models for surgical planning.
*   **Education and Research:**
    *   **STEM Education:** Teaching design, engineering, and manufacturing principles.
    *   **Research:** Developing new materials and printing techniques.

**Example:** A company designing a new ergonomic mouse can use FDM to print several prototypes with different grip designs, allowing designers and engineers to test the comfort and usability before committing to expensive injection molding tooling.

**Reference:** All listed textbooks and reference books provide examples of FDM applications. *Gibson, Rosen, & Stucker (2015)* and *Chua, Leong, & Lim (2010)* are particularly strong on prototyping applications, while *Pham & Dimov (2011)* and *Paul & Jinoop (2021)* cover broader manufacturing and industrial use cases.

## 2. Comparison with SLA (Briefly, as per topic context)

While the focus is on FDM, it's useful to briefly contrast it with SLA (StereoLithography), the other technology mentioned in the module title:

| Feature          | Fused Deposition Modelling (FDM)                     | StereoLithography (SLA)                                    |
| :--------------- | :--------------------------------------------------- | :--------------------------------------------------------- |
| **Principle**    | Material Extrusion (Thermoplastic Filament)          | Photopolymerization (UV Curing of Liquid Resin)            |
| **Materials**    | Thermoplastics (ABS, PLA, Nylon, TPU, PC, etc.)      | Photopolymer Resins (Standard, Tough, Flexible, Castable) |
| **Resolution**   | Moderate (layer lines often visible)                 | High (smoother surfaces, finer details)                    |
| **Speed**        | Moderate to Fast (depends on complexity and fill)    | Generally Slower (especially for complex parts)            |
| **Strength**     | Good (anisotropic, depends on print orientation)     | Good (isotropic, though resin properties vary)             |
| **Cost**         | Lower (machines and materials)                       | Higher (machines and materials)                            |
| **Post-Processing** | Support removal, sanding, painting                 | Support removal, washing, UV curing, sanding, painting     |
| **Applications** | Prototyping, tooling, functional parts, custom tools | High-fidelity prototypes, detailed models, investment casting patterns |

**Important Point to Remember:** FDM excels in producing functional, durable parts at a lower cost with a wider range of material properties, making it ideal for rapid prototyping and end-use parts. SLA, on the other hand, is favored for applications requiring high accuracy, intricate details, and smooth surface finishes.

## 3. Connecting to Course Outcomes

*   **CO1: Understand the concept of AM from conventional manufacturing systems.**
    *   FDM exemplifies the additive approach, building objects layer by layer, which contrasts with subtractive (e.g., CNC machining) or formative (e.g., injection molding) conventional methods. This notes section explains how FDM achieves this through material extrusion. (Knowledge Level: K2)

*   **CO2: Understand the data processing techniques in AM process.**
    *   The slicing and path planning steps discussed under FDM principles directly relate to data processing. The transformation of a 3D CAD model into layer-by-layer instructions for the printer involves significant data manipulation. (Knowledge Level: K2)

*   **CO3: Understand the principles of AM processes.**
    *   This entire document is dedicated to explaining the principle of FDM, including its step-by-step process, the role of key components (nozzle, filament), and the underlying physics of melting and solidification. (Knowledge Level: K2)

*   **CO4: Understand the application of AM in industries.**
    *   The "Applications of FDM" section clearly illustrates how FDM is used in various sectors like automotive, aerospace, consumer goods, and education, showcasing its industrial relevance. (Knowledge Level: K2)

## 4. Practice Questions and Exercises

**Question 1 (Knowledge Level: K2):**
Describe the fundamental principle of Fused Deposition Modelling (FDM).

**Answer:** FDM builds objects by depositing molten thermoplastic filament layer by layer through a heated nozzle onto a build platform. The filament is melted, extruded along a programmed path, and solidifies to form the part.

**Question 2 (Knowledge Level: K2):**
List three common materials used in FDM and briefly describe one advantage of each.

**Answer:**
1.  **ABS:** Advantage: High impact resistance and durability.
2.  **PLA:** Advantage: Easy to print and biodegradable.
3.  **TPU:** Advantage: Flexibility and elasticity.

**Question 3 (Knowledge Level: K2):**
Explain the importance of layer height as a process parameter in FDM.

**Answer:** Layer height determines the resolution and surface finish of the printed part. Thinner layers result in smoother surfaces and finer details but increase print time. Thicker layers reduce print time but lead to more visible layer lines and potentially lower resolution.

**Question 4 (Application-based, Knowledge Level: K2):**
A product designer needs to create a functional prototype of a snap-fit enclosure for a new electronic device. Which AM technology from your knowledge (considering SLA and FDM) would be more suitable, and why?

**Answer:** FDM would likely be more suitable. Snap-fit features require some flexibility and strength, which can be achieved with FDM materials like ABS or Nylon. While SLA can produce intricate details, the inherent brittleness of some standard SLA resins might not be ideal for snap-fit applications without using specialized flexible or tough resins, which can be more expensive. FDM's cost-effectiveness also makes it ideal for rapid prototyping of functional components.

**Question 5 (Synthesis, Knowledge Level: K2):**
How does the "layer-by-layer" approach of FDM differentiate it from traditional subtractive manufacturing processes like CNC machining?

**Answer:** Traditional subtractive manufacturing starts with a block of material and removes excess material to form the desired shape (e.g., by cutting, drilling, milling). FDM, conversely, starts with nothing and adds material only where it is needed, layer by layer, to build up the final part. This additive approach allows for complex internal geometries and features that are difficult or impossible to achieve with subtractive methods.

## 5. Important Points to Remember

*   **Material Extrusion:** The core principle of FDM is melting and extruding thermoplastic filament.
*   **Layer Resolution:** Primarily influenced by layer height and nozzle diameter.
*   **Warping:** A common issue with FDM, especially for materials like ABS, often mitigated by a heated build platform and enclosure.
*   **Anisotropy:** FDM parts can exhibit directional strength properties due to the layer-by-layer bonding.
*   **Support Structures:** Essential for overhangs and complex geometries, and must be removable.
*   **Cost-Effectiveness:** FDM is a highly accessible and economical AM technology.
*   **Versatility:** Its wide range of materials makes it suitable for various applications from visual prototypes to functional parts.

---
This concludes the study notes for Fused Deposition Modelling (FDM) within Module 2. Remember to refer back to your textbooks for more in-depth coverage and detailed explanations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
