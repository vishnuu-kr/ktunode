---
title: "Procedure of product development in AM process chain."
subject: "ADDITIVE MANUFACTURING"
module: "Module 1: Introduction to Additive Manufacturing (AM)  –Basic principle of AM"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf480446355f"
status: "completed"
scrapedAt: "2026-05-20T17:57:26.962Z"
---
# Additive Manufacturing: Module 1 - Introduction to AM - Basic Principle of AM
## Topic: Procedure of Product Development in the AM Process Chain

---

### **1. Introduction to Additive Manufacturing (AM)**

Additive Manufacturing (AM), also known as 3D Printing, is a revolutionary manufacturing paradigm that builds objects layer by layer from digital models. Unlike traditional *subtractive* manufacturing (e.g., machining) or *formative* manufacturing (e.g., injection molding), AM adds material precisely where it is needed, leading to greater design freedom, reduced waste, and faster prototyping.

*   **Key Concept:** AM builds objects by adding material, layer upon layer, based on a digital design.
*   **Contrast with Traditional Manufacturing:**
    *   **Subtractive:** Starts with a block of material and removes excess (e.g., CNC milling).
    *   **Formative:** Shapes material using molds or dies (e.g., injection molding, casting).
    *   **Additive:** Builds up material layer by layer.

---

### **2. The AM Process Chain: A Holistic View**

The development of a product using AM is not just about the printing itself. It involves a series of interconnected steps, forming a "process chain." Each step is critical for successful and high-quality output. This chain can be broadly categorized into **pre-processing**, **processing** (the actual printing), and **post-processing**.

---

### **3. Pre-Processing Steps**

These steps involve preparing the digital design and configuring the AM process to translate the design into physical form.

#### **3.1. Conceptualization and Design**

*   **Concept Generation:** The initial idea for the product.
*   **Design for AM (DFAM):** This is a crucial shift from traditional design methodologies. Designers must consider the capabilities and limitations of AM processes to leverage its benefits (e.g., lattice structures, internal channels, complex geometries).
    *   **Key Concept:** Designing specifically for the additive manufacturing process to maximize its advantages.
    *   **Example:** Designing a lightweight aerospace bracket with internal lattice structures that would be impossible or prohibitively expensive to manufacture conventionally.
    *   **(Reference Textbooks):** Gibson et al. (2015) emphasizes the importance of redesigning parts for AM to achieve optimal performance and material usage. Chua et al. (2010) discusses how AM enables novel geometric forms.
    *   **Relevant CO:** CO5 (Understand the key aspects in design a product using AM).

#### **3.2. CAD Modeling**

*   **Computer-Aided Design (CAD):** Creating a 3D digital model of the product using CAD software. This model defines the exact geometry of the object.
*   **File Formats:** Common CAD file formats include .STL (STereoLithography) and .3MF (3D Manufacturing Format).
    *   **.STL:** Represents a 3D object as a collection of triangular facets. It's widely compatible but can have limitations in representing complex features and color.
    *   **.3MF:** A more modern format designed to overcome STL's limitations, supporting richer data like color, materials, and metadata.
    *   **Key Concept:** The digital blueprint of the product.

#### **3.3. File Preparation (Slicing and Support Generation)**

*   **Slicing Software:** This software takes the 3D CAD model and "slices" it into thin, horizontal layers. It also generates machine instructions (e.g., G-code) that tell the AM machine how to deposit or fuse material for each layer.
    *   **Key Concept:** Converting a solid 3D model into a series of 2D cross-sections.
    *   **Example:** Slicing a complex organic shape into 100-micron thick layers.
    *   **(Reference Textbooks):** Gibson et al. (2015) details the slicing process and its importance for controlling layer thickness and build trajectory.
    *   **Relevant CO:** CO2 (Understand the data processing techniques in AM process).
*   **Support Structures:** Overhanging features or complex geometries often require temporary support structures to prevent collapse during the build process. These supports are printed along with the part and removed later.
    *   **Key Concept:** Temporary scaffolding to support un-built sections of the model.
    *   **Considerations:** Support placement, density, and material impact build time, material consumption, and post-processing effort.
    *   **Example:** A cantilever beam feature in a design will likely need support from below.

#### **3.4. Build Orientation and Nesting**

*   **Build Orientation:** Determining the optimal way to orient the part on the build platform. This can significantly affect:
    *   **Surface Finish:** Different orientations can lead to varying surface quality.
    *   **Mechanical Properties:** Layer adhesion and anisotropy can be influenced by build direction.
    *   **Support Requirements:** Minimizing supports often requires careful orientation.
    *   **Build Time:** Shorter build heights can reduce overall build time.
*   **Nesting:** Arranging multiple parts on the build platform to maximize build volume utilization and efficiency.
    *   **Key Concept:** Strategic placement of parts to optimize the build process.
    *   **Example:** Arranging several small components in an efficient pattern on the build plate to run a single, consolidated build.
    *   **(Reference Textbooks):** Pham & Dimov (2011) discusses build orientation strategies for different AM processes.

---

### **4. Processing (The Additive Manufacturing Operation)**

This is the core step where the physical object is built layer by layer. The specific method depends on the AM technology used.

#### **4.1. Material Selection**

*   Choosing the appropriate material (e.g., polymers, metals, ceramics, composites) based on the application requirements (strength, flexibility, temperature resistance, biocompatibility, etc.).
    *   **Key Concept:** The foundation of the part's performance.
    *   **Example:** Using a high-strength polymer like ABS for functional prototypes or a biocompatible titanium alloy for medical implants.
    *   **(Reference Textbooks):** Gibson et al. (2015) provides extensive details on various AM materials and their properties. Paul & Jinoop (2021) also covers material considerations across different AM processes.
    *   **Relevant CO:** CO3 (Understand the principles of AM processes), CO6 (Understand the application of AM in industries).

#### **4.2. Machine Setup and Calibration**

*   Preparing the AM machine, including loading materials, setting parameters (e.g., layer thickness, print speed, temperature), and ensuring proper calibration for accuracy.
    *   **Key Concept:** Ensuring the machine is ready and configured correctly for the specific build.
    *   **Example:** Calibrating the laser power and scan speed for a metal powder bed fusion machine.

#### **4.3. Layer-by-Layer Fabrication**

*   The AM machine follows the instructions from the sliced file to deposit, fuse, or cure material in a sequential, layer-by-layer manner.
    *   **Key Concepts:**
        *   **Deposition:** Extruding material (e.g., FDM).
        *   **Fusion:** Melting and bonding material particles (e.g., SLS, SLM).
        *   **Curing:** Solidifying liquid resin (e.g., SLA, DLP).
    *   **Examples:**
        *   **Fused Deposition Modeling (FDM):** An extruder deposits molten thermoplastic filament.
        *   **Selective Laser Sintering (SLS):** A laser fuses powder particles together.
        *   **Stereolithography (SLA):** A UV laser cures liquid photopolymer resin.
    *   **(Reference Textbooks):** Gibson et al. (2015) and Chua et al. (2010) provide detailed explanations of the principles behind various AM technologies (e.g., powder bed fusion, material extrusion, vat photopolymerization). Shiva & Shukla (2024) and Srivastava et al. (2019) also offer comprehensive overviews of these technologies.
    *   **Relevant CO:** CO3 (Understand the principles of AM processes).

---

### **5. Post-Processing Steps**

Once the object is printed, additional steps are often required to achieve the final desired form, function, and appearance.

#### **5.1. Part Removal and Cleaning**

*   Carefully removing the printed part from the build platform.
*   Removing any loose powder or uncured resin from the part.
    *   **Key Concept:** Safely extracting the fabricated object.
    *   **Example:** Using compressed air to blow away excess powder from an SLS part or washing an SLA part in isopropyl alcohol.

#### **5.2. Support Removal**

*   Detaching and removing the temporary support structures. This can involve manual breaking, cutting, or dissolving, depending on the support material.
    *   **Key Concept:** Eliminating temporary structures used during printing.
    *   **Example:** Manually snapping off supports from an FDM print or dissolving soluble supports.

#### **5.3. Curing/Annealing/Sintering**

*   **Post-Curing (for Photopolymerization):** Exposing SLA or DLP parts to UV light or heat to further solidify and improve mechanical properties.
*   **Annealing (for Metals):** Heat treatment to relieve internal stresses and improve material microstructure and mechanical properties.
*   **Sintering (for Ceramics/Powders):** Further heating to bond particles and densify the part.
    *   **Key Concept:** Enhancing material properties and part integrity.
    *   **Example:** Post-curing an SLA resin print to achieve its full strength.
    *   **(Reference Textbooks):** Gibson et al. (2015) dedicates sections to post-processing techniques for various AM materials.

#### **5.4. Surface Finishing**

*   Improving the surface quality, which can be rough or exhibit layer lines depending on the AM process.
*   Techniques include sanding, polishing, tumbling, painting, vapor smoothing, or coating.
    *   **Key Concept:** Achieving desired aesthetics and functionality.
    *   **Example:** Sanding and polishing a 3D printed object for a smooth, glossy finish.

#### **5.5. Machining and Assembly**

*   For parts requiring high dimensional accuracy or specific features not achievable by AM alone, secondary machining operations (e.g., drilling, tapping, milling) may be performed.
*   If the final product consists of multiple 3D printed components, assembly is required.
    *   **Key Concept:** Integrating AM parts with other components or achieving final precision.
    *   **Example:** Machining precise holes in a 3D printed metal bracket for bolt insertion.

#### **5.6. Quality Inspection and Testing**

*   Verifying that the part meets design specifications and functional requirements through dimensional checks, material property testing, and performance evaluation.
    *   **Key Concept:** Ensuring the product's quality and compliance.
    *   **Example:** Using a caliper to measure critical dimensions of a 3D printed part.
    *   **Relevant CO:** This step ensures that the created component (CO4) meets the intended design (CO5) and application requirements (CO6).

---

### **6. The AM Process Chain: An Integrated Flow**

The entire procedure can be visualized as a flow:

**Digital Design (CAD) -> File Preparation (Slicing, Supports) -> Machine Setup -> Additive Manufacturing (Build) -> Post-Processing (Removal, Finishing, Testing) -> Final Product**

This integrated approach is crucial for successful product development in AM.

*   **Important Point to Remember:** Each stage of the AM process chain influences the final outcome. Ignoring or poorly executing any step can compromise the part's quality, performance, or manufacturability.

---

### **7. Alignment with Course Outcomes**

*   **CO1: Understand the concept of AM from conventional manufacturing systems.** (Addressed in the introduction by contrasting AM with subtractive/formative methods).
*   **CO2: Understand the data processing techniques in AM process.** (Addressed in Section 3.3 - File Preparation, focusing on slicing and support generation).
*   **CO3: Understand the principles of AM processes.** (Addressed in Section 4.3 - Layer-by-Layer Fabrication, detailing material deposition/fusion/curing across technologies).
*   **CO4: Create components using AM process.** (The entire process chain leads to this outcome).
*   **CO5: Understand the key aspects in design a product using AM.** (Addressed in Section 3.1 - Design for AM).
*   **CO6: Understand the application of AM in industries.** (Implied throughout, as material selection and finishing depend on application needs).

---

### **8. Practice Questions and Answers**

**Question 1:** What is the primary difference between additive manufacturing and subtractive manufacturing?
**Answer:** Additive manufacturing builds objects layer by layer, while subtractive manufacturing removes material from a larger block.

**Question 2:** Why are support structures often necessary in AM?
**Answer:** Support structures are needed to prevent overhanging or unsupported sections of a part from collapsing or deforming during the build process.

**Question 3:** Name two common file formats used in AM and briefly describe their characteristics.
**Answer:**
*   **.STL (STereoLithography):** Represents objects as a mesh of triangles, widely compatible but can lack detail for color/materials.
*   **.3MF (3D Manufacturing Format):** A more advanced format supporting richer data like color, materials, and metadata, overcoming STL limitations.

**Question 4:** What are the main stages of the AM process chain?
**Answer:** The main stages are Pre-processing, Processing (the actual build), and Post-processing.

**Question 5:** Explain the importance of "Design for AM" (DFAM).
**Answer:** DFAM is crucial because it involves designing products specifically considering the capabilities and limitations of AM processes. This allows designers to leverage AM's advantages like complex geometries, integrated parts, and material efficiency, which might not be possible with traditional manufacturing.

---

### **9. Important Points to Remember**

*   **Layer-by-layer:** This is the defining characteristic of AM.
*   **Digital to Physical:** AM directly translates digital designs into physical objects.
*   **Process Chain Integration:** Success relies on the seamless execution of all pre-processing, processing, and post-processing steps.
*   **Design Freedom:** AM enables complex geometries and internal structures previously impossible.
*   **Material Versatility:** A wide range of materials can be used in AM.
*   **Post-Processing is Key:** Rarely is a part "finished" straight off the build platform; post-processing is often essential.

---
This concludes Module 1, Topic: Procedure of product development in AM process chain.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
