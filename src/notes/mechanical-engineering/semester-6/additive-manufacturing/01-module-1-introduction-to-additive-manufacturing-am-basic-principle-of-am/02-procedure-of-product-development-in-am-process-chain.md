---
title: "Procedure of product development in AM process chain."
subject: "ADDITIVE MANUFACTURING"
module: "Module 1: Introduction to Additive Manufacturing (AM)  –Basic principle of AM"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463b50"
status: "completed"
scrapedAt: "2026-05-20T18:02:25.284Z"
---
# ADDITIVE MANUFACTURING: Module 1 - Introduction to Additive Manufacturing (AM)
## Topic: Procedure of Product Development in the AM Process Chain

---

### **1. Introduction to Additive Manufacturing (AM)**

Additive Manufacturing (AM), often referred to as 3D printing, is a revolutionary manufacturing paradigm that builds objects layer by layer from digital data. This contrasts with traditional subtractive manufacturing methods (like machining) or formative methods (like molding). AM allows for the creation of complex geometries, customized parts, and on-demand production, opening up new possibilities across various industries.

**Key Concept:** **Layer-by-Layer Fabrication** - The fundamental principle of AM is the sequential deposition or fusion of material, guided by digital design data, to construct a three-dimensional object from the bottom up.

**Comparison with Conventional Manufacturing (CO1: Understand the concept of AM from conventional manufacturing systems. - K2):**

| Feature             | Conventional Manufacturing (Subtractive/Formative)                                  | Additive Manufacturing                                                         |
| :------------------ | :-------------------------------------------------------------------------------- | :----------------------------------------------------------------------------- |
| **Material Handling** | Starts with a block of material and removes excess (subtractive) or shapes molten material (formative). | Starts with raw material (powder, filament, resin) and adds it layer by layer. |
| **Design Freedom**  | Limited by tooling, fixtures, and the need for manufacturability (e.g., draft angles, undercuts). | High design freedom; can create complex internal structures, lattices, and organic shapes. |
| **Waste**           | Generates significant waste (chips, scrap) in subtractive processes.             | Generates less material waste, especially with optimized designs.               |
| **Prototyping**     | Often requires tooling for each iteration, making rapid prototyping expensive and time-consuming. | Ideal for rapid prototyping, allowing quick iterations of designs.             |
| **Customization**   | Mass production is efficient, but customization is costly.                        | Highly suited for mass customization and personalized products.                |
| **Tooling**         | Often requires expensive tooling (molds, dies, cutting tools).                     | Largely tool-less; digital data directly drives the process.                   |

**Example:** Imagine creating a complex internal cooling channel within a turbine blade.
*   **Conventional:** Would require drilling and milling, which is difficult, time-consuming, and may not achieve the desired intricate geometry.
*   **AM:** Can directly build the internal channel as part of the blade's structure, leading to improved performance and efficiency.

---

### **2. The AM Process Chain: A Step-by-Step Procedure for Product Development**

The development of a product using AM involves a series of well-defined stages, collectively known as the AM process chain. Each stage is critical for the successful realization of the final product.

**Gibson et al. (2015) describe the AM process chain as follows:**

#### **2.1. Design and Data Preparation**

This initial phase involves translating a conceptual idea or a functional requirement into a digital model suitable for AM.

*   **2.1.1. Conceptualization and Design:**
    *   **Definition:** The process of generating or refining a product concept and translating it into a functional design. This can involve CAD (Computer-Aided Design) software.
    *   **Key Considerations:** Functionality, aesthetics, material properties, and manufacturability via AM. Designers must leverage AM's design freedom (e.g., topology optimization, lattice structures) for performance enhancement.
    *   **Example:** Designing a lightweight bracket for an aircraft using topology optimization software to remove material where it's not structurally needed, resulting in an organic-looking, highly efficient part.

*   **2.1.2. CAD Model Creation/Modification:**
    *   **Definition:** Creating or modifying a 3D digital model of the part using CAD software (e.g., SolidWorks, CATIA, Fusion 360).
    *   **Key Considerations:** Ensuring watertight geometry, appropriate wall thickness, and incorporating features suitable for the chosen AM process (e.g., minimum feature size, support structures).

*   **2.1.3. File Conversion and Export:**
    *   **Definition:** Converting the CAD model into a standardized file format compatible with AM software.
    *   **Common Format:** STL (STereoLithography) is the most widely used format. It represents a 3D surface as a collection of triangular facets.
    *   **Other Formats:** 3MF (3D Manufacturing Format) is a newer format that offers richer data about color, materials, and build parameters.
    *   **Important Point:** The quality of the STL file (triangulation density, accuracy) directly impacts the final part quality.

*   **2.1.4. Slicing (or Segmentation):**
    *   **Definition:** The process of dividing the 3D digital model into numerous thin, horizontal layers. This is performed by specialized software called a "slicer."
    *   **Key Considerations:**
        *   **Layer Thickness:** Determines resolution and build time. Thinner layers generally lead to higher resolution but longer build times.
        *   **Build Orientation:** Crucial for managing support structures, surface finish, and mechanical properties.
        *   **Infill Density and Pattern:** Affects part strength, weight, and material consumption.
        *   **Support Structures:** Generated automatically to support overhangs and bridges, preventing distortion or collapse during the build.
    *   **Output:** The slicer generates machine-specific instructions, typically in a G-code format or a proprietary machine language, which tells the AM machine how to build each layer.
    *   **CO2: Understand the data processing techniques in AM process (K2):** Slicing is a core data processing technique.

*   **2.1.5. Nesting and Orientation:**
    *   **Definition:** Arranging multiple parts within the build volume of the AM machine to maximize build efficiency and minimize waste.
    *   **Key Considerations:** Orientation of each part to minimize support material, reduce build time, and optimize surface finish or mechanical properties.

#### **2.2. Machine Setup and Material Handling**

This stage involves preparing the AM machine and the chosen material for the printing process.

*   **2.2.1. Machine Preparation:**
    *   **Definition:** Ensuring the AM machine is clean, calibrated, and set up according to the specific process requirements.
    *   **Key Considerations:** Bed leveling, nozzle/laser calibration, checking consumables (e.g., resin vat, powder bed).

*   **2.2.2. Material Loading and Handling:**
    *   **Definition:** Loading the appropriate material (e.g., polymer filament, metal powder, photopolymer resin) into the machine and ensuring its quality.
    *   **Key Considerations:**
        *   **Material Properties:** Understanding the mechanical, thermal, and chemical properties of the material.
        *   **Moisture Content (for powders):** Metal powders are often sensitive to moisture and require controlled storage.
        *   **Powder Bed Management:** Ensuring uniform powder distribution and quality.
    *   **Reference:** **Pham and Dimov (2001)** emphasize the importance of material characteristics and proper handling for successful AM.

#### **2.3. Build Process**

This is the core stage where the physical object is constructed layer by layer. The specifics vary significantly depending on the AM technology.

*   **2.3.1. Layer Deposition/Fusion:**
    *   **Definition:** The process of applying or fusing material according to the sliced data for each layer.
    *   **Examples of Technologies (CO3: Understand the principles of AM processes. - K2):**
        *   **Material Extrusion (e.g., FDM/FFF):** Thermoplastic filament is melted and extruded through a nozzle onto the build platform. (e.g., Ultimaker, MakerBot)
        *   **Vat Photopolymerization (e.g., SLA, DLP):** Liquid photopolymer resin in a vat is selectively cured by a UV light source (laser or projector) layer by layer. (e.g., Formlabs, Anycubic)
        *   **Powder Bed Fusion (e.g., SLS, SLM, EBM):** A powder bed is selectively fused by a laser (SLS/SLM) or electron beam (EBM). (e.g., EOS, Arcam)
        *   **Material Jetting:** Droplets of photopolymer are jetted and cured by UV light. (e.g., Stratasys PolyJet)
        *   **Binder Jetting:** A liquid binding agent is selectively deposited onto a powder bed to bond particles together. (e.g., ExOne)
    *   **Important Point:** The build process can be time-consuming, depending on part size, complexity, and layer thickness.

*   **2.3.2. Monitoring and Control:**
    *   **Definition:** Observing and managing the build process to ensure quality and prevent failures.
    *   **Key Considerations:** Temperature control, print head movement, material flow, and potential issues like warping or delamination. Advanced machines may incorporate in-situ monitoring systems.

#### **2.4. Post-Processing**

Once the build is complete, the object typically requires several post-processing steps to achieve its final form and properties.

*   **2.4.1. Part Removal:**
    *   **Definition:** Carefully detaching the finished part(s) from the build platform or removing them from the powder bed.
    *   **Key Considerations:** Handling delicate parts, especially those made from brittle materials or with complex geometries.

*   **2.4.2. Support Structure Removal:**
    *   **Definition:** Removing the generated support structures, which are often necessary during printing.
    *   **Methods:** Can involve manual removal (breaking, cutting), dissolving supports (soluble materials), or breaking away brittle supports.
    *   **Impact:** Can affect surface finish where supports were attached.

*   **2.4.3. Cleaning:**
    *   **Definition:** Removing excess unfused powder, uncured resin, or residual support material from the part.
    *   **Methods:** Brushing, compressed air, washing with solvents (e.g., IPA for resin prints), or sandblasting.

*   **2.4.4. Curing (for photopolymerization processes):**
    *   **Definition:** Further curing of parts made from photopolymer resins to achieve optimal mechanical properties and stability.
    *   **Methods:** UV curing chambers or post-curing ovens.

*   **2.4.5. Surface Finishing:**
    *   **Definition:** Improving the surface quality of the printed part.
    *   **Methods:** Sanding, polishing, tumbling, bead blasting, vapor smoothing, painting, coating. The need for this depends on the application and the desired aesthetic/functional requirements.

*   **2.4.6. Heat Treatment (for metal parts):**
    *   **Definition:** Annealing or stress relieving metal parts to improve mechanical properties, reduce internal stresses, and prevent distortion.
    *   **Reference:** **Shiva and Shukla (2024)** highlight the importance of post-processing, particularly heat treatment for metal AM parts, to achieve desired material performance.

*   **2.4.7. Machining (Optional but often necessary):**
    *   **Definition:** Performing secondary machining operations to achieve tight tolerances, critical features, or specific surface finishes that cannot be met by the AM process alone.
    *   **Example:** Machining bearing surfaces, threads, or mating interfaces.

#### **2.5. Quality Assurance and Testing**

Ensuring the final product meets the required specifications and performance standards.

*   **2.5.1. Inspection:**
    *   **Definition:** Visually inspecting the part for defects (e.g., surface anomalies, incomplete fusion, warping) and performing dimensional checks.
    *   **Tools:** Calipers, micrometers, CMMs (Coordinate Measuring Machines), 3D scanners.

*   **2.5.2. Material Testing:**
    *   **Definition:** Conducting mechanical tests (tensile, flexural, impact), thermal analysis, or other material characterization tests to verify properties.
    *   **Reference:** **Chua et al. (2010)** discuss the importance of testing to validate the performance of rapid prototyped parts.

*   **2.5.3. Functional Testing:**
    *   **Definition:** Testing the part in its intended application to ensure it performs as designed.

---

### **3. Applications of AM in Industries (CO4: Understand the application of AM in industries - K2)**

AM is transforming various sectors due to its ability to produce complex, customized, and on-demand parts.

*   **Aerospace:** Lightweight components, complex internal cooling channels, rapid prototyping of aircraft parts.
    *   **Example:** GE Aviation's LEAP engine fuel nozzle printed with complex internal geometry for improved fuel efficiency.
*   **Automotive:** Prototyping of vehicle components, custom tooling, personalized interior parts, lightweight structural components.
    *   **Example:** BMW uses AM for tooling jigs and fixtures, as well as for producing customized interior trim components.
*   **Healthcare:** Patient-specific implants (e.g., hip, knee, dental), surgical guides, anatomical models for pre-surgical planning, prosthetics.
    *   **Example:** Custom-fit titanium hip implants printed using SLM for better osseointegration.
*   **Consumer Goods:** Customized footwear (e.g., Adidas 3D printed midsoles), personalized jewelry, intricate lighting fixtures.
    *   **Example:** Nike Flyprint technology for custom-fit running shoe uppers.
*   **Industrial Manufacturing:** Tooling, jigs, fixtures, end-use parts, spare parts on demand.
    *   **Example:** Siemens uses AM to produce complex internal cooling channels in gas turbine blades.
*   **Education and Research:** Rapid prototyping of models, developing new materials and processes.

---

### **4. Key Points to Remember**

*   AM builds parts layer by layer from digital data.
*   The AM process chain involves Design, Machine Setup, Build, Post-Processing, and Quality Assurance.
*   STL is a common file format, but 3MF is emerging.
*   Slicing software is crucial for converting 3D models into machine instructions and defining build parameters.
*   Orientation, support structures, and infill are critical considerations during slicing.
*   Post-processing steps are often essential to achieve the final desired part properties and finish.
*   AM enables significant design freedom, customization, and on-demand manufacturing.
*   Understanding the specific AM technology and its associated materials is crucial for successful product development.

---

### **5. Practice Questions**

**Question 1:**
Which of the following is the most common file format for representing 3D models in Additive Manufacturing?
a) .obj
b) .stl
c) .step
d) .dwg

**Answer:** b) .stl

**Question 2:**
The process of dividing a 3D digital model into thin horizontal layers is known as:
a) CAD Modeling
b) Slicing
c) Post-Processing
d) Nesting

**Answer:** b) Slicing

**Question 3:**
True or False: Additive Manufacturing typically generates more material waste compared to subtractive manufacturing processes.

**Answer:** False. AM generally generates less material waste as it only adds material where needed.

**Question 4:**
Describe the role of support structures in Additive Manufacturing and why they are sometimes necessary.

**Answer:** Support structures are temporary geometric elements printed along with the main part to provide a foundation for overhanging features or bridges during the build process. They prevent the part from collapsing or deforming due to gravity or material sag during layer deposition, especially in processes like FDM or Vat Photopolymerization.

**Question 5:**
List at least three key post-processing steps commonly performed on AM parts.

**Answer:** Any three of the following: Part removal, support structure removal, cleaning, curing, surface finishing, heat treatment, secondary machining.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### **6. References**

*   **Gibson, I., Rosen, D. W., & Stucker, B. (2015).** *Additive Manufacturing Technologies: 3D Printing, Rapid Prototyping, and Direct Digital Manufacturing* (2nd ed.). Springer.
*   **Chua, C. K., Leong, K. F., & Lim, C. S. (2010).** *Rapid Prototyping: Principles and Applications* (3rd ed.). World Scientific Publishers.
*   **Pham, D. T., & Dimov, S. S. (2001).** *Rapid Manufacturing: The Technologies and Applications of Rapid Prototyping and Rapid Tooling*. Springer London Ltd.
*   **Paul, C. P., & Jinoop, A. N. (2021).** *Additive Manufacturing: Principles, Technologies and Application*. McGraw Hill.
*   **Shiva, S., & Shukla, A. K. (2024).** *Additive Manufacturing Technologies*. Wiley.
*   **Srivastava, M., Rathee, S., & Maheshwari, S. (2019).** *Additive Manufacturing: Fundamentals and Advancements*. CRC Press.

---