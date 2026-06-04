---
title: "Laminated Object Manufacturing (LOM)"
subject: "ADDITIVE MANUFACTURING"
module: "Module 2: Common AM technologies: Principle, materials, process parameters, advantages and applications of: Stereo Lithography (SLA)"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463b5f"
status: "completed"
scrapedAt: "2026-05-20T18:02:35.070Z"
---
# Additive Manufacturing: Module 2 - Common AM Technologies

## Topic: Laminated Object Manufacturing (LOM)

**Module:** Module 2: Common AM technologies: Principle, materials, process parameters, advantages and applications of: Stereo Lithography (SLA)
**Subject:** Additive Manufacturing
**Course Outcomes Addressed:** CO1, CO3, CO4
**Knowledge Level:** K2 (Understand)

---

### 1. Introduction to Laminated Object Manufacturing (LOM)

Laminated Object Manufacturing (LOM) is a subtractive-additive hybrid additive manufacturing (AM) process that builds a 3D object by sequentially bonding and cutting thin layers of sheet material. Unlike most AM processes that build objects layer by layer from the bottom up, LOM builds objects from the top down.

*   **Key Concept:** LOM combines layering with material removal, making it a unique category within AM.
*   **Historical Context:** Developed by Michael Feygin in the 1980s and commercialized by Helisys Inc., LOM was one of the earlier rapid prototyping technologies. (Refer to Gibson, Rosen, & Stucker, 2015 for early AM technologies).

---

### 2. Principle of LOM

The LOM process involves the following fundamental steps:

1.  **Slicing:** The 3D CAD model of the object is computationally sliced into thin, horizontal cross-sections. These slices form the individual layers of the final object. (Relates to CO2: Understand the data processing techniques in AM process).
2.  **Layer Feeding:** Sheets of material, typically paper, plastic, or metal, are fed onto the build platform.
3.  **Adhesive Application:** An adhesive, usually in the form of a thin film or applied by a roller, is spread uniformly over the surface of the sheet material.
4.  **Bonding:** The coated sheet is then bonded to the previously formed layer using heat and pressure. A roller or heated platen is used to ensure good adhesion.
5.  **Patterning/Cutting:** A laser or a plotter knife is used to cut the outline of the current layer's cross-section into the bonded sheet. This is a critical step that defines the geometry of the object.
6.  **Material Removal:** Unbonded material surrounding the desired part (often referred to as "webbing") is either removed manually or by subsequent machining processes.
7.  **Layer Repetition:** Steps 2-6 are repeated for each subsequent layer, building the object from the top down.
8.  **Core Removal:** Once all layers are bonded and patterned, the laminated block is often inverted. The core material that was cut out (the "cross-hatching" or "island" material) needs to be removed. This is typically done manually or with machining tools, leaving the finished part.

*   **Visualisation:** Imagine building a model by cutting out shapes from paper and then gluing them one on top of another, with the laser cutting the shape for each layer.

---

### 3. Materials Used in LOM

LOM is versatile in its material choices, primarily relying on sheet forms.

*   **Paper:**
    *   **Description:** Paper-based LOM is the most common and cost-effective. High-strength, coated papers are typically used to ensure good bonding and laser cutting quality.
    *   **Advantages:** Low cost, ease of cutting, good dimensional accuracy for prototypes.
    *   **Applications:** Visual prototypes, form and fit studies, concept models.
    *   **Textbook Reference:** Chua, Leong, & Lim (2010) often discuss early rapid prototyping technologies like LOM and their material choices.
*   **Plastics:**
    *   **Description:** Various plastic films, such as ABS, polycarbonate, or acetal, can be used. These require higher laser power and precise control of temperature and pressure for bonding.
    *   **Advantages:** Improved mechanical properties compared to paper, can produce more functional prototypes.
    *   **Applications:** Functional prototypes, tooling components, enclosures.
*   **Metals:**
    *   **Description:** Thin metal foils or sheets, like aluminum or stainless steel, can be used. This is a more advanced application of LOM, often requiring specialized equipment for laser welding or brazing instead of adhesive bonding.
    *   **Advantages:** High strength, durability, can produce end-use parts.
    *   **Applications:** Metal prototypes, functional metal components, aerospace parts.
    *   **Textbook Reference:** Gibson, Rosen, & Stucker (2015) covers advanced AM processes, including those that use sheet metal.
*   **Composites:**
    *   **Description:** Materials like fiberglass or carbon fiber composites in sheet form can also be laminated.
    *   **Advantages:** High strength-to-weight ratio, excellent mechanical properties.
    *   **Applications:** Aerospace components, high-performance automotive parts.

---

### 4. Process Parameters in LOM

The quality and accuracy of LOM parts are influenced by several critical process parameters:

*   **Layer Thickness:**
    *   **Definition:** The thickness of each individual sheet of material used.
    *   **Impact:** Thinner layers generally result in higher resolution and smoother surfaces, but increase build time and cost. Typical values range from 0.05 mm to 0.5 mm.
    *   **Textbook Reference:** The concept of layer thickness is fundamental to all AM processes. Gibson, Rosen, & Stucker (2015) would detail this for various technologies.
*   **Laser Power and Speed:**
    *   **Definition:** The intensity of the laser beam and the speed at which it moves across the material.
    *   **Impact:** Affects the depth and precision of the cut. Too much power can burn the material or penetrate too deeply; too little can result in incomplete cuts. Speed affects the throughput and the thermal effects on the material.
    *   **Textbook Reference:** Shiva & Shukla (2024) and Paul & Jinoop (2021) would likely discuss laser-material interaction in AM.
*   **Adhesive Type and Application:**
    *   **Definition:** The type of adhesive used (e.g., thermal adhesive film, glue) and how it is applied.
    *   **Impact:** Ensures proper bonding between layers. Inconsistent application can lead to delamination or weak joints.
*   **Lamination Pressure and Temperature:**
    *   **Definition:** The force and heat applied during the bonding of layers.
    *   **Impact:** Crucial for achieving strong interlayer adhesion. Incorrect parameters can lead to warping or poor bonding.
*   **Cutting Resolution/Kerf:**
    *   **Definition:** The width of the cut made by the laser or knife.
    *   **Impact:** Directly influences the accuracy and detail of the final part geometry. A narrower kerf allows for finer features.

---

### 5. Advantages of LOM

LOM offers several distinct benefits for prototyping and manufacturing:

*   **Cost-Effectiveness:** Paper-based LOM is generally one of the most economical AM technologies, especially for producing large, solid prototypes. (Relates to CO1: Understand the concept of AM from conventional manufacturing systems, highlighting cost advantages).
*   **Speed:** Can be relatively fast for producing large, solid parts compared to some other AM technologies.
*   **Material Versatility:** Ability to process a wide range of sheet materials, from paper to plastics and metals.
*   **No Support Structures Required:** Because the object is built within a block of material, internal cavities and overhangs are inherently supported by the surrounding material. This simplifies post-processing compared to processes that require extensive support removal.
*   **Good Dimensional Accuracy (for some materials):** Paper-based LOM can achieve good dimensional accuracy for non-functional prototypes.
*   **Large Part Production:** LOM systems can often accommodate larger build volumes compared to some other AM technologies.
*   **Potential for Functional Parts:** With plastic and metal sheets, LOM can produce more robust and potentially functional prototypes or end-use parts. (Relates to CO4: Understand the application of AM in industries).
*   **No Curing or Chemical Reactions:** Unlike photopolymer-based processes (like SLA), LOM does not involve curing resins, which can simplify the process and material handling.

---

### 6. Disadvantages of LOM

Despite its advantages, LOM also has certain limitations:

*   **Surface Finish:** The surface finish can be rough due to the layered nature of the material and the cutting process. Post-processing is often required to achieve a smooth surface.
*   **Material Waste:** A significant amount of material is wasted as the "webbing" and "core" material needs to be removed.
*   **Post-Processing Intensity:** Removing the excess material (core) can be labor-intensive and time-consuming, especially for complex geometries.
*   **Brittleness (Paper-based):** Paper-based parts are typically brittle and not suitable for applications requiring high mechanical strength or durability.
*   **Limited Geometric Complexity:** While overhangs are supported, very intricate internal features can be difficult to achieve due to the cutting process and core removal challenges.
*   **Moisture Sensitivity (Paper-based):** Paper parts can absorb moisture, leading to dimensional changes and degradation.
*   **Heat Affected Zone (HAZ):** Laser cutting can create a Heat Affected Zone, which might alter the material properties around the cut. (Refer to Shiva & Shukla, 2024 on thermal effects in AM).

---

### 7. Applications of LOM

LOM has found applications in various industries, primarily for prototyping and concept modeling:

*   **Rapid Prototyping:**
    *   **Visual Prototypes:** Creating realistic models for design review, marketing, and client presentations.
    *   **Form and Fit Studies:** Checking how different components fit together.
    *   **Ergonomic Studies:** Evaluating the usability and feel of a product design.
*   **Architectural Models:** LOM is excellent for creating detailed physical models of buildings and urban planning projects due to its ability to produce large, solid forms relatively quickly and cost-effectively. (Relates to CO4: Understand the application of AM in industries).
*   **Tooling Components:** With plastic or composite sheets, LOM can be used to create jigs, fixtures, and molds for low-volume production.
*   **Medical Models:** Creating anatomical models for surgical planning or patient education.
*   **Educational Tools:** Used in universities and training centers to teach AM principles and design concepts.

---

### 8. Comparison with Stereo Lithography (SLA) - As per Module Context

While this topic focuses on LOM, it's important to note its placement within Module 2 alongside SLA.

| Feature             | Laminated Object Manufacturing (LOM)                       | Stereo Lithography (SLA)                                   |
| :------------------ | :--------------------------------------------------------- | :--------------------------------------------------------- |
| **Principle**       | Bonding and cutting thin sheets of material layer by layer. | Curing liquid photopolymer resin with a UV laser or projector. |
| **Material Form**   | Sheets (paper, plastic, metal foil)                        | Liquid photopolymer resin                                  |
| **Build Direction** | Top-down (generally)                                       | Bottom-up                                                  |
| **Support Structure** | Unbonded material acts as support; no separate structures needed. | Requires dedicated support structures.                     |
| **Primary Materials** | Paper, plastics, metals                                    | Photopolymer resins (ABS-like, tough, flexible, castable)  |
| **Surface Finish**  | Can be rough, requires post-processing.                    | Generally smooth, high detail.                             |
| **Mechanical Strength** | Varies with material; paper is brittle.                    | Can be good, but depends on resin and post-curing.       |
| **Cost**            | Often cost-effective for large, solid parts (paper).       | Can be more expensive due to material and equipment.       |
| **Post-Processing** | Core removal, surface finishing.                           | Support removal, cleaning, UV post-curing.                 |
| **Typical Application** | Visual prototypes, architectural models, concept models.   | Highly detailed prototypes, functional parts, molds.       |

*   **Key Takeaway:** LOM and SLA represent different approaches to layer-based manufacturing, each with its own strengths and weaknesses suitable for different applications.

---

### 9. Important Points to Remember

*   **Top-Down Build:** LOM builds from the top down, unlike most bottom-up AM processes.
*   **Sheet-Based:** Relies on thin sheets of material.
*   **Hybrid Process:** Combines layering with subtractive techniques (laser/knife cutting).
*   **Self-Supporting:** Internal features are inherently supported by the surrounding material.
*   **Material Waste:** A significant drawback due to core removal.
*   **Paper is Key:** Paper-based LOM is the most prevalent and cost-effective form.
*   **Post-Processing:** Core removal is a critical and often labor-intensive step.

---

### 10. Practice Questions and Answers

**Question 1:** Describe the fundamental principle of Laminated Object Manufacturing (LOM). (CO3)

**Answer:** LOM builds 3D objects by sequentially bonding and cutting thin layers of sheet material. The CAD model is sliced into layers, and each layer's shape is cut from a sheet, which is then bonded to the previous layer. This process continues until the object is complete, with the excess material being removed.

**Question 2:** What are the main advantages of using paper as a material in LOM compared to other AM materials like photopolymer resins used in SLA? (CO1, CO4)

**Answer:** Paper is significantly more cost-effective than photopolymer resins. Paper-based LOM also requires no support structures, simplifying post-processing for complex internal geometries, and it doesn't involve liquid handling or chemical curing, making it easier to operate and safer.

**Question 3:** Explain why LOM is considered a hybrid AM technology. (CO3)

**Answer:** LOM is considered a hybrid AM technology because it combines additive (layering and bonding) with subtractive (laser or knife cutting) processes. It adds material by bonding layers but also removes material to define the geometry of each layer.

**Question 4:** Identify two significant disadvantages of LOM. (CO3)

**Answer:** Two significant disadvantages of LOM are:
1.  **Material Waste:** A large amount of sheet material is wasted during the core removal process.
2.  **Post-Processing Intensity:** Removing the excess material (core) can be labor-intensive and time-consuming.

**Question 5:** For which type of prototype would LOM be a particularly suitable choice and why? (CO4)

**Answer:** LOM is particularly suitable for creating **visual prototypes, concept models, and architectural models**. This is due to its cost-effectiveness, especially with paper, and its ability to quickly produce large, solid objects with reasonable accuracy for form and fit studies, and aesthetic evaluation. The inherent self-supporting nature also aids in creating complex architectural structures.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 11. References Incorporated

*   **Gibson, L. D. W., Rosen, D. W., & Stucker, B. (2015).** *Additive Manufacturing Technologies-3D Printing, Rapid Prototyping, and Direct Digital Manufacturing* (2nd ed.). Springer. (Provides foundational knowledge on AM, including historical context and material considerations).
*   **Chua, C. K., Leong, K. F., & Lim, C. S. (2010).** *Rapid Prototyping: Principles and Applications* (3rd ed.). World Scientific Publishers. (Covers principles and applications of early RP technologies like LOM).
*   **Pham, D. T., & Dimov, S. S. (2011).** *Rapid Manufacturing: The Technologies and Applications of Rapid Prototyping and Rapid Tooling*. Springer London Ltd. (Offers insights into manufacturing applications and material choices).
*   **Paul, C. P., & Jinoop, A. N. (2021).** *Additive Manufacturing: Principles, technologies and Application*. McGraw Hill. (Provides contemporary perspectives on AM principles and their industrial use).
*   **Shiva, S., & Shukla, A. K. (2024).** *Additive Manufacturing Technologies*. Wiley. (Discusses technological aspects, including laser-material interactions and process parameters).
*   **Srivastava, M., Rathee, S., & Maheshwari, S. (2019).** *Additive Manufacturing: Fundamentals and Advancements*. CRC Press. (Covers fundamental aspects and advancements in AM technologies).

---
**(End of Study Notes)**