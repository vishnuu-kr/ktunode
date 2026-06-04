---
title: "Design recommendations."
subject: "DESIGN FOR MANUFACTURE AND ASSEMBLY"
module: "Module 4: Sand casting: Introduction to sand casting"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf480446349e"
status: "completed"
scrapedAt: "2026-05-20T17:59:45.719Z"
---
# Module 4: Sand Casting - Introduction to Sand Casting
## Topic: Design Recommendations

This module focuses on the design considerations for sand casting to ensure manufacturability and ease of assembly, aligning with Course Outcomes CO1, CO2, and CO4.

---

### 1. Introduction to Sand Casting and its Design Implications

Sand casting is a widely used metal casting process that uses a sand mold to shape molten metal. The molten metal is poured into the mold cavity, solidifies, and then the sand mold is broken away to reveal the cast part.

**Key Concepts:**

*   **Mold Cavity:** The void within the sand mold that defines the shape of the final casting.
*   **Core:** A removable insert used to create internal cavities or passages within a casting.
*   **Gating System:** Channels that guide molten metal into the mold cavity.
*   **Riser:** A reservoir of molten metal that feeds the casting as it solidifies to compensate for shrinkage.
*   **Shrinkage:** The reduction in volume of metal as it cools and solidifies, which can lead to defects if not managed.

**Design Considerations:**

The inherent nature of sand casting, with its relatively low tooling costs and ability to produce complex shapes, also comes with specific design limitations and recommendations to avoid defects and ensure efficient production.

**Textbook Reference:**

*   **Boothroyd, Dewhurst, Knight (2010):** Likely discusses casting processes in the context of part design for manufacturability.
*   **Chitale & Gupta (2011):** Provides a detailed understanding of various casting processes, including sand casting, and their implications for design.
*   **Dieter (2000):** Offers insights into materials and processing, which are crucial for understanding the behavior of metals during casting.

---

### 2. Design Recommendations for Sand Casting

The primary goal of these recommendations is to minimize casting defects, reduce machining requirements, and simplify the overall manufacturing process.

#### 2.1. General Shape and Form

*   **Simplicity is Key:** Design parts with the simplest possible geometry that meets functional requirements. Complex shapes often require more intricate mold designs, increasing costs and the potential for defects.
*   **Avoid Sharp Corners:** Sharp internal corners can create stress concentrations, leading to hot spots and potential cracking during solidification. Generous fillets and radii are recommended.
    *   **Recommendation:** Use a minimum internal corner radius of **2-3 times the wall thickness** (Chitale & Gupta, 2011).
*   **Uniform Wall Thickness:** Variations in wall thickness can lead to differential cooling rates, causing internal stresses, shrinkage, and warping.
    *   **Recommendation:** Aim for uniform wall thickness throughout the part. If variations are unavoidable, ensure gradual transitions between thick and thin sections.
    *   **Example:** Instead of abrupt changes, taper the thicker section to the thinner section.
*   **Draft Angles:** To facilitate the removal of the casting from the sand mold, draft angles are essential.
    *   **Definition:** Draft angle is the slight taper given to vertical surfaces of a casting or mold to allow for easy removal.
    *   **Recommendation:** A minimum draft angle of **1-2 degrees** is generally recommended for most surfaces. Vertical surfaces that are very tall may require a larger draft angle (Boothroyd, Dewhurst, Knight, 2010).
*   **Avoid Undercuts:** Undercuts are features that prevent the direct removal of the casting from the mold without special tooling (like side cores). These increase complexity and cost.
    *   **Recommendation:** Design parts to minimize or eliminate undercuts. If undercuts are essential, consider designing them in a way that can be achieved with simpler core arrangements.
*   **Consider Parting Line Location:** The parting line is where the two halves of the mold meet. The location of the parting line can significantly affect the casting's surface finish and the ease of mold making.
    *   **Recommendation:** Position the parting line on a flat surface or a less critical surface to minimize visible mold marks on important functional areas.

#### 2.2. Features and Details

*   **Ribs and Gussets:** These can be used to increase stiffness and strength in thin-walled sections.
    *   **Recommendation:** Ribs and gussets should have a thickness approximately **50-75% of the adjacent wall thickness** to avoid hot spots and shrinkage issues (Chitale & Gupta, 2011). They should also be well-filleted at their junctions with the main wall.
*   **Bosses and Protrusions:**
    *   **Recommendation:** Similar to ribs, bosses should have a thickness related to the wall thickness to prevent shrinkage. Consider adding draft to bosses as well.
*   **Holes:**
    *   **Blind vs. Through Holes:** Through holes are generally easier to cast than blind holes, as they do not require cores.
    *   **Cored Holes:** If cores are required for holes, ensure they are adequately supported and have sufficient draft.
    *   **Recommendation:** For cast-in-place holes, consider the diameter-to-depth ratio. Very deep and narrow holes are difficult to core accurately.
*   **Raised Letters and Numbers:**
    *   **Recommendation:** Avoid raised lettering on critical functional surfaces. Recessed lettering is often preferred as it can be achieved with less risk of metal fill issues and is less prone to wear.

#### 2.3. Material Considerations and Shrinkage

*   **Metal Selection:** The choice of casting alloy significantly impacts shrinkage and other casting characteristics. Different metals have different solidification ranges and shrinkage allowances.
*   **Shrinkage Allowance:** Designers must account for the volumetric shrinkage that occurs during solidification. Patterns used to create sand molds are made slightly larger than the final casting to compensate for this.
    *   **Definition:** Shrinkage allowance is the percentage increase in pattern dimension to compensate for metal shrinkage during solidification and cooling.
    *   **Example:** Aluminum alloys typically have a higher shrinkage allowance than cast iron. (Refer to material property data sheets for specific allowances).
*   **Feeding Distance:** Design features that ensure adequate feeding from risers. Thicker sections or isolated masses require more careful consideration for feeding to prevent shrinkage porosity.

#### 2.4. Tolerances and Surface Finish

*   **Dimensional Tolerances:** Sand casting typically has lower dimensional accuracy compared to other processes like machining or die casting.
    *   **Recommendation:** Specify wider tolerances for sand cast parts, especially for critical dimensions. Machining allowances should be included for dimensions requiring high precision.
*   **Surface Finish:** The surface finish of sand castings is generally rough due to the sand mold.
    *   **Recommendation:** For smoother surfaces, consider secondary machining operations or the use of finer molding sands.

---

### 3. Design for Machining Allowance

Even with optimized casting design, machining is often required to achieve final dimensions, surface finish, and functional features.

**Key Concepts:**

*   **Machining Allowance:** The amount of material that needs to be removed by machining to achieve the final desired dimensions and surface finish.

**Design Recommendations:**

*   **Provide Adequate Machining Allowance:** Ensure that all surfaces requiring machining have sufficient material removed.
    *   **Recommendation:** The amount of machining allowance depends on the casting process, material, casting quality, and the required precision. Generally, it ranges from **0.5 mm to 5 mm** or more for large castings (Chitale & Gupta, 2011).
*   **Avoid Machining on Difficult-to-Access Surfaces:** Design parts so that critical machined surfaces are accessible for machining tools.
*   **Consider Tool Access:** Ensure that machining tools have clear access to the surfaces that need to be machined. Avoid designing features that would block tool access.

**Course Outcome Alignment:**

*   **CO3: Design and improve parts for better machinability.** This topic directly addresses the need to incorporate machining allowances and consider tool access in the design of sand cast parts.

---

### 4. Design for Assembly (Connecting Sand Castings)

While this module focuses on the casting process itself, the design of sand cast parts must also consider how they will be assembled into a larger product.

**Key Concepts:**

*   **Ease of Handling and Orientation:** How easily can the part be grasped and oriented during assembly?
*   **Fastener Integration:** Designing features for bolts, screws, or other fasteners.

**Design Recommendations:**

*   **Integral Features for Assembly:** Design bosses, mounting holes, and locating features directly into the sand casting where possible.
*   **Minimize Assembly Operations:** Aim to reduce the number of assembly steps required.
*   **Consider Grip Points:** If the casting is to be manually assembled, consider features that facilitate gripping and handling.

**Course Outcome Alignment:**

*   **CO1: Apply the knowledge of Design Guidelines for Manual Assembly.** While the core focus is on casting, the ultimate goal of DFMA is efficient assembly. Designing sand castings with assembly in mind is crucial.
*   **CO4: Design and improve parts for better casting and injection moulding.** This recommendation links the casting process with the broader goal of product assembly.

---

### 5. Important Points to Remember

*   **Uniformity is Crucial:** Aim for uniform wall thickness and gradual transitions.
*   **Draft Angles are Mandatory:** Ensure easy mold removal.
*   **Fillets and Radii Reduce Stress:** Avoid sharp internal corners.
*   **Understand Shrinkage:** Account for material shrinkage in pattern design and consider its impact on solidifying sections.
*   **Balance Complexity with Cost:** Simpler designs are generally more cost-effective and less prone to defects.
*   **Machining Allowance is Essential:** Always provide for post-casting machining.
*   **Consider Assembly from the Outset:** Design for how the part will integrate into the final product.

---

### 6. Practice Questions and Exercises

**Question 1:**

A designer is creating a sand cast bracket with a uniform wall thickness of 10 mm. The bracket has a sharp internal corner where two walls meet. What is the recommended design modification to prevent potential casting defects, and why?

**Answer:**
The recommended modification is to add a generous fillet radius to the internal corner. The minimum recommended radius is typically 2-3 times the wall thickness, so a radius of 20-30 mm would be appropriate. This is to avoid stress concentrations and potential hot spots at sharp corners, which can lead to cracking during solidification.

**Question 2:**

Explain the concept of draft angle in sand casting and provide a typical recommended value. Why is it important for the design?

**Answer:**
A draft angle is the slight taper given to vertical surfaces of a casting or mold. It is essential for facilitating the easy removal of the casting from the sand mold after solidification. Without sufficient draft, the mold might break or the casting could be damaged during extraction. A typical recommended draft angle is 1-2 degrees for most surfaces.

**Question 3:**

You are designing a sand cast component that requires a through-hole for a bolt. What are some design considerations to ensure this feature is castable and easy to assemble?

**Answer:**
Considerations include:
*   **Hole Diameter and Depth:** Ensure the diameter-to-depth ratio is manageable for core insertion and removal if a core is needed.
*   **Draft Angle:** If the hole is cored, ensure the core has a draft angle.
*   **Machining Allowance:** If high precision is needed, provide a machining allowance to ream or drill the hole to final size.
*   **Bosses:** If the hole is to be threaded or used for mounting, design an integral boss with appropriate thickness and draft.
*   **Parting Line:** Position the parting line to minimize mold marks around the hole if it's a critical feature.

**Question 4:**

What is shrinkage allowance, and how does it affect the pattern design for a sand casting?

**Answer:**
Shrinkage allowance is the percentage increase in pattern dimension to compensate for the reduction in volume that occurs as the molten metal solidifies and cools. It's crucial because without it, the final casting would be smaller than intended and potentially out of tolerance. The pattern maker uses shrinkage allowance data specific to the casting alloy to build patterns that are slightly larger than the final desired part dimensions.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 7. Further Reading and References

*   **Boothroyd, Dewhurst, Knight (2010):** Chapter on casting processes and their design implications.
*   **Chitale & Gupta (2011):** Chapters covering sand casting principles, defects, and design recommendations.
*   **Bralla (1998):** Sections on casting design guidelines and manufacturability of cast parts.
*   **Dieter (2000):** Chapters discussing material behavior during solidification and casting processes.

---