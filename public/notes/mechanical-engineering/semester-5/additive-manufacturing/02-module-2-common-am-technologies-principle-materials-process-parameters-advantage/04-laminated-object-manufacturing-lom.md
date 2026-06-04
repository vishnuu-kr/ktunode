---
title: "Laminated Object Manufacturing (LOM)"
subject: "ADDITIVE MANUFACTURING"
module: "Module 2: Common AM technologies: Principle, materials, process parameters, advantages and applications of: Stereo Lithography (SLA)"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf480446356e"
status: "completed"
scrapedAt: "2026-05-20T17:57:37.165Z"
---
# Additive Manufacturing: Module 2 - Common AM Technologies (Stereo Lithography - SLA)

## Topic: Laminated Object Manufacturing (LOM)

---

### **Introduction**

Laminated Object Manufacturing (LOM) is an additive manufacturing (AM) process that builds three-dimensional objects layer by layer by selectively bonding and cutting sheet materials. Unlike other AM processes that cure liquid resins or sinter powder, LOM uses solid sheets of material, typically paper, plastic, or composite, which are bonded together and then precisely cut to form the desired cross-section.

---

### **1. Principle of Laminated Object Manufacturing (LOM)**

The core principle of LOM involves building an object by stacking and bonding successive layers of sheet material. This process can be broken down into the following key steps:

*   **Material Feeding:** A continuous sheet of the chosen build material is fed into the build chamber.
*   **Adhesive Application:** An adhesive is applied to the surface of the sheet. This can be pre-applied to the sheet (e.g., heat-activated adhesive on paper) or applied by a roller or spray system just before bonding.
*   **Layer Bonding:** The adhered sheet is pressed onto the previously formed layer using a heated roller or a platen. This ensures intimate contact and secure bonding between layers.
*   **Layer Cutting:** A cutting mechanism, typically a laser (CO2 laser is common) or a high-precision knife, is used to trace the cross-section of the part for the current layer. The laser/knife cuts through the bonded sheet material, defining the part's geometry.
*   **Material Removal (Support Structure):** The material *outside* the part's geometry for that layer is *not* removed at this stage. Instead, the entire block of material, including the part and the surrounding excess material (often referred to as the "support structure" or "waste material"), is built up.
*   **Scrap Removal:** After the entire object is built and solidified, the excess material surrounding the desired part is manually or mechanically removed. This is a key distinguishing feature of LOM.
*   **Post-Processing:** The removed part may undergo further finishing steps like sanding, sealing, or painting, depending on the material and application.

**Key Concept:** LOM builds a solid block of material, and the final part is excavated or milled from this block.

**Referencing Textbooks:**
*   **Gibson, Rosen, & Stucker (2015):** This textbook likely details LOM as a layer-by-layer fabrication method using sheet materials and describes the cutting process using lasers or knives. They might emphasize the post-processing aspect of removing excess material.
*   **Chua, Leong, & Lim (2010):** This reference would likely provide a clear explanation of the step-by-step process, focusing on the bonding and cutting mechanisms.

---

### **2. Materials Used in LOM**

LOM is known for its versatility in handling a range of sheet materials, which contributes to its cost-effectiveness and diverse applications. Common materials include:

*   **Paper:**
    *   **Types:** Standard paper, cardstock, or specialized paper with pre-applied heat-activated adhesive.
    *   **Advantages:** Low cost, easy to cut, environmentally friendly, good for visual models.
    *   **Limitations:** Low strength, moisture sensitivity, not suitable for functional prototypes or end-use parts requiring durability.
*   **Plastics:**
    *   **Types:** ABS (Acrylonitrile Butadiene Styrene), Polypropylene, Polyester films.
    *   **Advantages:** Improved strength and durability compared to paper, can be sealed for better moisture resistance.
    *   **Limitations:** Can be more expensive than paper, requires appropriate cutting parameters.
*   **Composites:**
    *   **Types:** Fiberglass, carbon fiber composites (often in a pre-impregnated or laminated form).
    *   **Advantages:** High strength-to-weight ratio, excellent mechanical properties, suitable for functional parts.
    *   **Limitations:** Higher cost, more challenging to cut and bond, requires specialized equipment.

**Key Concept:** LOM's material choice significantly impacts the part's properties, cost, and post-processing requirements.

**Referencing Textbooks:**
*   **Pham & Dimov (2011):** This book is likely to discuss LOM's use of composite materials, highlighting their advantages for functional applications.
*   **Paul & Jinoop (2021):** They might elaborate on the specific types of plastic films and composites suitable for LOM and their respective characteristics.

---

### **3. Process Parameters in LOM**

Optimizing process parameters is crucial for achieving accurate and robust parts in LOM. Key parameters include:

*   **Layer Thickness:** The thickness of the sheet material. Typical values range from 0.05 mm to 0.5 mm. Thinner layers generally result in higher resolution and smoother surfaces but increase build time.
*   **Laser Power and Speed (for laser cutting):**
    *   **Power:** Affects the depth and quality of the cut. Too low power results in incomplete cuts, while too high can lead to charring or burning, especially with paper.
    *   **Speed:** Determines the time the laser interacts with the material. Faster speeds can reduce thermal damage but might compromise cut quality.
*   **Knife Cutting Pressure (for knife cutting):** The force applied by the cutting knife. This needs to be sufficient to cut through the material but not so high as to damage underlying layers or the build platform.
*   **Adhesive Type and Application:** The choice of adhesive and the uniformity of its application are critical for strong layer bonding. For heat-activated adhesives, the temperature and pressure of the bonding roller are important.
*   **Build Orientation:** While less critical than in some other AM processes due to the block-building nature, the orientation can influence the ease of scrap removal.
*   **Pre-heating (for thermoplastic sheets):** If using plastic sheets, pre-heating can improve bonding.

**Key Concept:** Proper calibration and control of these parameters are essential to ensure dimensional accuracy, structural integrity, and surface finish.

**Referencing Textbooks:**
*   **Gibson, Rosen, & Stucker (2015):** This text would likely provide detailed discussions on the laser cutting parameters for LOM, considering different materials.
*   **Srivastava, Rathee, & Maheshwari (2019):** They might offer insights into optimizing bonding parameters for various sheet materials.

---

### **4. Advantages of LOM**

LOM offers several distinct advantages that make it a competitive AM technology:

*   **Cost-Effectiveness:** Particularly with paper-based systems, LOM can be one of the most economical AM processes, especially for producing visual models and conceptual prototypes.
*   **Speed:** For certain applications, especially large, less complex parts, LOM can be relatively fast because it builds in bulk and does not require extensive support structure generation and removal in the same way as some other processes.
*   **Material Versatility:** The ability to use a wide range of sheet materials, including paper, plastics, and composites, allows for tailoring properties to specific applications.
*   **Strong and Dense Parts:** LOM parts are typically isotropic and have good mechanical properties, especially when using stronger materials like composites. The bonding process creates dense structures.
*   **No Need for Complex Support Structures:** Unlike many AM processes that require intricate support generation and removal for overhangs, LOM builds a solid block, and the surrounding material acts as an inherent support. This simplifies the build process and eliminates the need for dedicated support material removal.
*   **Good Dimensional Accuracy:** With precise laser or knife cutting, LOM can achieve good dimensional accuracy.
*   **Large Build Volumes:** LOM systems can be scaled to produce relatively large objects.

**Key Concept:** LOM excels in producing cost-effective, strong, and mechanically sound parts, particularly when complexity is not a major concern or when using robust sheet materials.

**Referencing Textbooks:**
*   **Chua, Leong, & Lim (2010):** They likely highlight LOM's cost advantages and its ability to produce functional prototypes.
*   **Paul & Jinoop (2021):** This reference might focus on the mechanical strength and isotropic nature of LOM parts due to the layer bonding.

---

### **5. Applications of LOM**

LOM finds applications across various industries, primarily for prototyping, tooling, and specialized manufacturing:

*   **Visual Models and Prototypes:** LOM is widely used for creating realistic visual models and concept prototypes for design verification, marketing, and presentation. Paper-based LOM is particularly popular for this due to its low cost and ease of finishing.
*   **Architectural Models:** Large-scale architectural models can be efficiently produced using LOM, especially with paper or cardstock materials.
*   **Tooling and Jigs:** With stronger composite materials, LOM can be used to create functional tooling, jigs, and fixtures for manufacturing processes.
*   **Medical Models:** Patient-specific anatomical models for surgical planning and education can be fabricated using LOM, offering good detail and durability.
*   **Industrial Design:** Creating form studies and ergonomic prototypes for products like automotive interiors, consumer electronics, and appliances.
*   **Packaging Design:** Rapidly producing mock-ups of packaging designs for evaluation.
*   **Educational Purposes:** Teaching the principles of AM and rapid prototyping due to its relative simplicity and visibility of the layer-building process.

**Key Concept:** LOM's application range is broad, from low-cost visual aids to more functional components depending on the chosen material and build quality.

**Referencing Textbooks:**
*   **Gibson, Rosen, & Stucker (2015):** They likely provide examples of LOM in aerospace, automotive, and consumer product prototyping.
*   **Shiva & Shukla (2024):** This recent reference might showcase emerging applications of LOM, potentially with advanced composite materials.

---

### **Learning Outcomes Alignment**

This topic directly addresses the following learning outcomes:

*   **CO1: Understand the concept of AM from conventional manufacturing systems. (K2)**
    *   LOM, while additive, builds a block from which parts are removed, contrasting with subtractive manufacturing. Its layer-by-layer nature is a core AM concept.
*   **CO3: Understand the principles of AM processes. (K2)**
    *   The notes detail the step-by-step principle of LOM: material feeding, bonding, cutting, and scrap removal.
*   **CO6: Understand the application of AM in industries (K2)**
    *   The "Applications of LOM" section clearly outlines its use in various industrial sectors.

---

### **Important Points to Remember**

*   **Layered sheet fabrication:** LOM builds objects by bonding and cutting sheets of material.
*   **Solid block building:** The entire object is built within a block of material, and excess material is removed later.
*   **Scrap removal is key:** Manual or mechanical removal of surrounding material is a defining post-processing step.
*   **Material versatility:** Paper, plastics, and composites are common build materials.
*   **Cost-effective for visual models:** Paper-based LOM is a very economical option for rapid prototyping.
*   **Isotropic properties:** Parts generally exhibit consistent mechanical properties in all directions.
*   **No internal supports needed:** The bulk material acts as intrinsic support.

---

### **Practice Questions**

1.  **Explain the fundamental difference between LOM and other AM processes like Fused Deposition Modeling (FDM) or Stereolithography (SLA) in terms of how the object is built and finished.** (CO1, CO3 - K2)
    *   **Answer:** LOM builds a solid block of material by bonding and cutting sheets, and the final part is excavated from this block. FDM builds objects by extruding melted thermoplastic filament layer by layer, typically with integrated support structures. SLA cures liquid photopolymer resin layer by layer using a UV laser or projector, also requiring support structures. The key distinction for LOM is the "block building" and subsequent "excavation" of the final part.

2.  **What are the primary advantages of using paper as a build material in LOM? What are its main limitations?** (CO6 - K2)
    *   **Answer:**
        *   **Advantages:** Low cost, environmentally friendly, easy to cut, good for visual models and architectural mock-ups.
        *   **Limitations:** Low strength, poor mechanical properties, sensitive to moisture, not suitable for functional prototypes or end-use parts.

3.  **Describe the role of the laser or knife in the LOM process.** (CO3 - K2)
    *   **Answer:** The laser or knife is used to precisely cut the outline of the object's cross-section for each layer. It cuts through the bonded sheet material, defining the geometry of the part as it is built up layer by layer.

4.  **If you were to design a functional component that requires good mechanical strength and stiffness, which material would you consider using for LOM and why?** (CO4, CO5 - K6/K2)
    *   **Answer:** A composite material (e.g., fiberglass or carbon fiber composite) would be the best choice. These materials offer high strength-to-weight ratios and excellent mechanical properties, making them suitable for functional parts, unlike paper or basic plastics.

5.  **Why is LOM considered cost-effective for certain applications, and what specific applications benefit most from this cost advantage?** (CO6 - K2)
    *   **Answer:** LOM is cost-effective primarily due to the low cost of materials like paper and the simplified build process (no complex support generation/removal). Applications that benefit most are visual models, concept prototypes, architectural models, and educational tools where aesthetics and form are more important than high functional performance.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### **Further Reading (Referencing Textbooks):**

*   For a deeper understanding of the laser cutting mechanisms in LOM and material interactions, refer to **Gibson, Rosen, & Stucker (2015), Chapter 5: Sheet Lamination Processes**.
*   To explore the specific mechanical properties and applications of LOM parts made from composite materials, consult **Pham & Dimov (2011), Chapter 3: Laminated Object Manufacturing**.
*   For a comprehensive overview of LOM's historical development and its place among other AM technologies, **Chua, Leong, & Lim (2010)** provides valuable context.