---
title: "Exercises on 3-D printing"
subject: "MECHANICAL ENGINEERING LAB"
module: "Module 2: Experiment on Whirling of shaft"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463718"
status: "completed"
scrapedAt: "2026-05-20T18:01:40.499Z"
---
# Mechanical Engineering Lab - Module 2: Experiment on Whirling of Shaft

## Topic: Exercises on 3-D Printing

### Introduction

This section of the Mechanical Engineering Lab module focuses on the practical application of 3D printing technology, a crucial aspect of modern manufacturing and prototyping. While the module's primary experiment might be on the whirling of shafts, this exercise delves into the capabilities and processes involved in additive manufacturing, a skill increasingly vital for mechanical engineers. We will explore the fundamental principles, common technologies, materials, design considerations, and practical exercises related to 3D printing, directly contributing to Course Outcome CO5.

### Learning Outcomes

Upon completion of these exercises, you will be able to:

*   **Understand the fundamental principles of 3D printing.**
*   **Identify and differentiate between various 3D printing technologies.**
*   **Recognize common materials used in 3D printing and their properties.**
*   **Understand the basic workflow of preparing a design for 3D printing.**
*   **Perform basic operation and troubleshooting of a 3D printer.**
*   **Evaluate the quality and suitability of a 3D printed part.**

### 1. Fundamental Principles of 3D Printing (Additive Manufacturing)

3D printing, also known as additive manufacturing, is a process of creating three-dimensional objects by building them layer by layer from a digital model. This contrasts with traditional subtractive manufacturing methods (like machining) where material is removed from a larger block.

*   **Layer-by-Layer Deposition:** The core principle involves depositing or fusing material in successive layers, guided by a digital design file.
*   **Digital Model:** A 3D CAD model serves as the blueprint for the printing process.
*   **Slicing Software:** This software converts the 3D model into thin, horizontal layers (slices) and generates instructions (G-code) for the 3D printer.
*   **Material Extrusion/Solidification:** The printer's head or system manipulates the material according to the G-code to build each layer.

**Reference:** While direct mention of 3D printing might not be prevalent in the provided Metrology textbooks, the concept of precision and dimensional accuracy, central to metrology (Shotbolt & Gayler, Sharp & Hume), is directly applicable to evaluating the quality of 3D printed parts.

### 2. Common 3D Printing Technologies

Several technologies exist for 3D printing, each with its own advantages and applications. We will focus on the most common ones encountered in educational and prototyping environments.

#### 2.1 Fused Deposition Modeling (FDM) / Fused Filament Fabrication (FFF)

*   **Principle:** Thermoplastic filament is heated and extruded through a nozzle, depositing molten material layer by layer onto a build platform.
*   **Process:** Filament is fed from a spool, melted, and precisely deposited by a moving print head. Layers fuse together as they cool.
*   **Key Components:** Extruder (nozzle, heater, motor), build platform, filament spool, control system.
*   **Materials:** PLA, ABS, PETG, Nylon, TPU (flexible).
*   **Applications:** Prototyping, functional parts, custom jigs and fixtures, educational models.
*   **Textbook Relevance:** The precision of movement and material deposition in FDM printers relates to concepts of motion control and kinematics discussed in **Kinematics and Dynamics of Machinery (Wilson & Sadler)**.

#### 2.2 Stereolithography (SLA)

*   **Principle:** A UV laser cures liquid photopolymer resin layer by layer in a vat.
*   **Process:** A build platform is submerged in a vat of liquid resin. A UV laser selectively solidifies the resin at the surface, forming a layer. The platform then moves up or down to allow for the next layer.
*   **Key Components:** UV laser, build platform, vat of photopolymer resin, mirrors (galvanometers) for laser guidance.
*   **Materials:** Photopolymer resins (various properties – rigid, flexible, high-temperature).
*   **Applications:** High-detail prototypes, intricate designs, molds, dental applications.
*   **Textbook Relevance:** The precision in laser positioning and control relates to the accuracy requirements in metrology and measurement systems, as discussed in **Metrology for Engineers (Shotbolt & Gayler)**.

#### 2.3 Digital Light Processing (DLP)

*   **Principle:** Similar to SLA, but uses a digital light projector to flash an image of the entire layer at once, curing a larger area of resin.
*   **Process:** A projector displays the image of a layer onto the resin surface, solidifying it. The platform then moves for the next layer.
*   **Key Components:** Digital light projector, build platform, vat of photopolymer resin.
*   **Materials:** Photopolymer resins.
*   **Applications:** Faster than SLA for larger parts, high-detail applications.

#### 2.4 Selective Laser Sintering (SLS)

*   **Principle:** A high-power laser fuses powdered material (typically polymers or metals) layer by layer.
*   **Process:** A thin layer of powder is spread across the build area. A laser selectively sinters (fuses) the powder particles together according to the digital model. The platform lowers, and a new layer of powder is spread.
*   **Key Components:** High-power laser, build chamber with powder bed, roller for powder spreading.
*   **Materials:** Nylon (PA12), TPU, metals (steel, aluminum, titanium - for metal 3D printing).
*   **Applications:** Functional prototypes, end-use parts, complex geometries without support structures.
*   **Textbook Relevance:** The control over laser power and material properties is crucial, linking to material science principles and the understanding of material behavior in functional components, as might be touched upon in mechatronics contexts (**Mechatronics by Bolton**, **Mechatronics: Integrated Mechanical Electronic Systems by Ramachandran et al.**).

### 3. Materials for 3D Printing

The choice of material is critical and depends on the application.

#### 3.1 Common FDM Filaments:

*   **PLA (Polylactic Acid):**
    *   **Properties:** Biodegradable, easy to print, low warping, brittle.
    *   **Applications:** Prototypes, decorative items, educational models.
    *   **Notes:** Good for beginners. Can degrade at higher temperatures.
*   **ABS (Acrylonitrile Butadiene Styrene):**
    *   **Properties:** Strong, durable, impact-resistant, higher printing temperature, prone to warping, emits fumes.
    *   **Applications:** Functional parts, enclosures, snap-fit components.
    *   **Notes:** Requires an enclosed printer and good ventilation.
*   **PETG (Polyethylene Terephthalate Glycol-modified):**
    *   **Properties:** Combines ease of printing (like PLA) with strength and temperature resistance (like ABS), good layer adhesion, low warping.
    *   **Applications:** Functional parts, containers, mechanical components.
    *   **Notes:** A good all-rounder.
*   **TPU (Thermoplastic Polyurethane):**
    *   **Properties:** Flexible, elastic, durable, good abrasion resistance.
    *   **Applications:** Phone cases, seals, flexible joints, damping elements.
    *   **Notes:** Requires slower printing speeds and specific extruder setups.

#### 3.2 Photopolymer Resins (SLA/DLP):

*   **Standard Resins:** General-purpose, good detail and surface finish.
*   **Tough Resins:** Mimic ABS properties, higher impact resistance.
*   **Flexible Resins:** Similar to TPU, for flexible parts.
*   **High-Temperature Resins:** Withstand higher operating temperatures.
*   **Castable Resins:** Designed to be burned out cleanly for investment casting.

#### 3.3 Powders (SLS):

*   **Nylon (PA11, PA12):**
    *   **Properties:** Strong, flexible, good chemical resistance, suitable for complex geometries.
    *   **Applications:** Functional prototypes, end-use parts, snap-fits.
*   **TPU:** For flexible SLS parts.

**Reference:** Understanding the mechanical properties and behavior of these materials aligns with the knowledge of material science and its application in machinery design and analysis, as found in **Kinematics and Dynamics of Machinery (Wilson & Sadler)** and **Mechatronics by Bolton**.

### 4. The 3D Printing Workflow

A typical 3D printing project involves several key steps:

#### 4.1 Design & Modeling

*   **Create a 3D Model:** Use CAD software (e.g., SolidWorks, Fusion 360, Tinkercad) to design the object.
*   **Design Considerations for 3D Printing:**
    *   **Overhangs and Supports:** Parts with steep overhangs may require support structures. Design to minimize these where possible (e.g., chamfers instead of sharp overhangs).
    *   **Wall Thickness:** Ensure walls are thick enough to print reliably and have sufficient strength.
    *   **Tolerances:** 3D printing has inherent tolerances. Design with realistic expectations for feature size and accuracy.
    *   **Orientation:** The orientation of the part on the build platform affects print quality, strength, and support material usage.
    *   **Hollowing:** For resin printers, hollow designs can save material and print time.

#### 4.2 Slicing

*   **Software:** Use slicing software (e.g., Cura, PrusaSlicer, Simplify3D) to prepare the 3D model for printing.
*   **Process:**
    *   **Import Model:** Load the `.STL` or `.3MF` file.
    *   **Configure Printer Settings:** Select the correct printer profile and material.
    *   **Set Print Parameters:**
        *   **Layer Height:** Determines resolution and print time (e.g., 0.1mm for high detail, 0.3mm for faster prints).
        *   **Infill Density & Pattern:** The internal structure that provides strength (e.g., 20% honeycomb for strength and speed).
        *   **Print Speed:** Affects quality and time.
        *   **Temperature:** Nozzle and bed temperatures are crucial for material adhesion.
        *   **Supports:** Generate support structures for overhangs.
        *   **Raft/Brim/Skirt:** Build adhesion aids.
    *   **Slice:** The software generates G-code (or similar machine instructions).

**Reference:** The slicing process and parameter selection directly impact the dimensional accuracy and surface finish of the printed part, aligning with the principles of measurement and accuracy discussed in **Metrology for Engineers (Shotbolt & Gayler)** and **Practical Engineering Metrology (Sharp & Hume)**.

#### 4.3 Printing

*   **Prepare the Printer:**
    *   Ensure the build platform is clean and level.
    *   Load the correct filament or resin.
    *   Preheat the nozzle and bed.
*   **Start the Print:** Load the G-code file and initiate the print.
*   **Monitor the Print:** Observe the first layer closely to ensure good adhesion. Periodically check the print progress.

#### 4.4 Post-Processing

*   **Remove Part:** Carefully detach the printed object from the build platform.
*   **Remove Supports:** Break away or cut support structures.
*   **Clean:** Remove excess material, resin residue, or powder.
*   **Curing (for SLA/DLP):** Post-cure resin prints under UV light to achieve full material properties.
*   **Finishing:** Sanding, painting, or assembling parts as needed.

**Reference:** The quality of the final part and the need for finishing processes highlight the importance of understanding material properties and surface finishing techniques, which are indirectly related to metrology and quality control.

### 5. Practical Exercises

These exercises are designed to give you hands-on experience with 3D printing.

#### Exercise 1: Printing a Calibration Cube

*   **Objective:** To test the accuracy and calibration of the 3D printer and familiarize yourself with the printing process.
*   **Procedure:**
    1.  Download a standard calibration cube STL file (often available from printer manufacturers or online repositories).
    2.  Slice the cube using appropriate settings for your printer and filament (e.g., 0.2mm layer height, 20% infill).
    3.  Prepare the 3D printer: level the bed, load filament, preheat.
    4.  Start the print and monitor the first layer.
    5.  Once printed, carefully remove the cube.
*   **Metrology Check (CO2):**
    *   Use calipers or a digital micrometer to measure the dimensions of the cube (X, Y, Z axes).
    *   Compare the measured dimensions to the intended dimensions.
    *   Calculate the percentage error for each dimension.
    *   Assess the surface finish and corner sharpness.
*   **Questions:**
    1.  What is the intended dimension of the calibration cube?
    2.  What are your measured dimensions?
    3.  Calculate the dimensional accuracy (percentage error) for each axis.
    4.  Are there any visible printing defects? (e.g., stringing, layer shifting, poor adhesion).
    5.  Based on the results, what adjustments might be needed for the printer's calibration?

#### Exercise 2: Printing a Functional Part with Overhangs

*   **Objective:** To understand the impact of overhangs and the necessity of support structures.
*   **Procedure:**
    1.  Design or download a model that includes significant overhangs (e.g., a bridge, a model with angled features, or a bracket with a cantilevered section).
    2.  Slice the model:
        *   **Option A:** With support structures enabled.
        *   **Option B:** Without support structures.
    3.  Print both versions (if time and resources allow) or choose one based on instructor guidance.
    4.  Remove supports and clean the parts.
*   **Evaluation (CO1, CO5):**
    *   Compare the quality of the part printed with supports versus without.
    *   Assess the effectiveness of the support structures. Were they easy to remove? Did they leave marks?
    *   Evaluate the surface finish on the overhangs.
*   **Questions:**
    1.  Describe the challenges encountered when printing parts with overhangs without supports.
    2.  How did the support structures affect the print quality and post-processing time?
    3.  Could you have modified the design to reduce or eliminate the need for supports? If so, how?

#### Exercise 3: Printing with Different Materials (Optional, if available)

*   **Objective:** To compare the printing characteristics and properties of different filaments.
*   **Procedure:**
    1.  Print identical small objects (e.g., a small gear, a clip) using PLA and PETG or ABS.
    2.  Pay attention to the printing temperatures, speeds, and any specific requirements for each material.
    3.  Observe the differences in layer adhesion, flexibility, and overall strength after printing.
*   **Evaluation (CO1, CO5):**
    *   How did the printing process differ between the materials?
    *   Which material was easier to print? Why?
    *   Test the mechanical properties (e.g., bending strength, impact resistance) of the printed objects.
*   **Questions:**
    1.  What are the key differences in the properties of the materials you tested?
    2.  Which material would you choose for a functional part requiring durability, and why?
    3.  What are the advantages and disadvantages of each material for prototyping?

### 6. Key Points to Remember

*   **Layer Height:** Controls print resolution and time. Smaller layer heights yield finer details but take longer.
*   **Infill:** Affects part strength, weight, and print time. Higher infill means a stronger, heavier, and longer print.
*   **Supports:** Essential for overhangs and bridges but can impact surface finish and require post-processing.
*   **Bed Adhesion:** Crucial for successful prints. Ensure the build plate is clean and level, and use adhesion aids (brim, raft) if necessary.
*   **Material Properties:** Understand the characteristics of each filament or resin to select the appropriate material for your application.
*   **Design for Additive Manufacturing (DfAM):** Optimize your designs to leverage the strengths of 3D printing and minimize its limitations.
*   **Safety:** Always ensure good ventilation when printing materials like ABS, and be cautious of hot components.

### 7. Alignment with Course Outcomes

*   **CO1: Choose the appropriate instruments for different measurements (K3):** This is addressed in Exercise 1, where calipers/micrometers are used to measure the calibration cube. Understanding printer accuracy requires precise measurement tools.
*   **CO2: Determine dimensional and form accuracies of various components (K3):** Directly addressed in Exercise 1 (calibration cube measurement) and can be extended to evaluating the accuracy of overhangs or other features in Exercise 2.
*   **CO3: Develop knowledge of designing and analyzing mechanisms in machinery (K3):** While not directly designing a mechanism here, understanding how geometric features, tolerances, and material properties (influenced by printing) affect the function of printed components provides foundational knowledge for mechanism design. For example, printing gears would require careful consideration of tooth profiles and tolerances.
*   **CO4: Demonstrate the functions and control of various devices used for industrial automation (K3):** 3D printing itself is a form of automated manufacturing. Understanding its process, parameters, and how they affect the output is a demonstration of understanding a key automated production technology.
*   **CO5: Demonstrate 3D printing technique (K3):** This is the primary focus of all practical exercises. Students will gain hands-on experience in preparing, printing, and evaluating 3D printed parts.

### Practice Questions

1.  **Explain the fundamental difference between additive and subtractive manufacturing.**
2.  **Describe the working principle of FDM 3D printing and list at least three common materials used.**
3.  **What is the purpose of slicing software in the 3D printing workflow? Name two popular slicing software packages.**
4.  **When printing a part with a 45-degree overhang, are support structures always necessary? Explain why or why not.**
5.  **You are designing a functional bracket that needs to be strong and resistant to moderate heat. Which filament would you most likely choose and why?**
6.  **What metrology tool would you use to check if a printed cube has accurate dimensions? (Relates to CO1 & CO2).**
7.  **How does the layer height setting affect the print time and surface finish of a 3D printed object?**

---

### Answers to Practice Questions

1.  **Additive manufacturing** builds objects layer by layer, adding material. **Subtractive manufacturing** removes material from a larger block to create the desired shape (e.g., machining, milling).
2.  **FDM (Fused Deposition Modeling):** Thermoplastic filament is melted and extruded through a nozzle, depositing the molten material layer by layer onto a build platform. Common materials include PLA, ABS, and PETG.
3.  **Slicing software** converts a 3D CAD model (e.g., STL file) into a series of thin horizontal layers and generates machine-readable instructions (G-code) that the 3D printer follows to build the object. Popular software includes Cura, PrusaSlicer, and Simplify3D.
4.  **Not always.** Most FDM printers can typically handle overhangs up to around 45-60 degrees without significant issues or the need for supports, as the molten plastic can bridge across the gap. However, for steeper overhangs or complex geometries, supports are crucial to prevent sagging and ensure print success.
5.  For a strong bracket resistant to moderate heat, **PETG** or **ABS** would be good choices. PETG offers a balance of strength, temperature resistance (higher than PLA), and ease of printing. ABS is generally stronger and more heat resistant but can be more challenging to print due to warping and fumes.
6.  You would use **calipers** or a **digital micrometer** to check the dimensions of the printed cube. (Relates to CO1 & CO2).
7.  **Layer height** directly influences the surface finish: smaller layer heights result in smoother surfaces and finer details but increase print time. Larger layer heights produce a more visible layer texture and take less time to print.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
