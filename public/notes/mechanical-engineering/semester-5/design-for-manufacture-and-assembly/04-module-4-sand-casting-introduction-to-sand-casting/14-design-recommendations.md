---
title: "Design recommendations."
subject: "DESIGN FOR MANUFACTURE AND ASSEMBLY"
module: "Module 4: Sand casting: Introduction to sand casting"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf48044634a0"
status: "completed"
scrapedAt: "2026-05-20T17:59:47.148Z"
---
# Module 4: Sand Casting: Introduction to Sand Casting - Design Recommendations

This module focuses on understanding sand casting and how design choices significantly impact its manufacturability and overall product quality. This section specifically delves into design recommendations to optimize parts for sand casting.

---

## 1. Introduction to Sand Casting

Sand casting is a widely used metal casting process characterized by its versatility, ability to produce complex shapes, and relatively low tooling costs. It involves creating a mold cavity from sand, which is then filled with molten metal. Upon solidification, the casting is removed, and the sand mold is destroyed.

**Key Concepts:**

*   **Mold Cavity:** The shape within the sand mold that defines the final casting.
*   **Pattern:** A replica of the final casting, slightly oversized to account for shrinkage, used to create the mold cavity.
*   **Core:** A shaped insert used to create internal cavities or passages within the casting.
*   **Riser:** A reservoir of molten metal that feeds the casting as it solidifies, compensating for shrinkage.
*   **Gate:** The channel through which molten metal enters the mold cavity.
*   **Sprue:** The vertical channel that connects the pouring basin to the runner.
*   **Runner:** A horizontal channel that distributes molten metal to the gates.
*   **Pouring Basin:** A funnel-shaped depression at the top of the sprue where molten metal is poured.
*   **Venting:** Small channels or holes to allow gases to escape the mold cavity during pouring.

---

## 2. Design Recommendations for Sand Casting

Effective design for sand casting aims to simplify the molding process, minimize defects, reduce costs, and ensure the integrity of the final product. These recommendations align with **Course Outcome 4 (CO4): Design and improve parts for better casting and injection moulding.**

### 2.1. General Design Principles

*   **Simplify Geometry:**
    *   **Avoid intricate features:** Minimize undercuts, sharp corners, and complex internal geometries that are difficult to create with sand cores.
    *   **Favor simple shapes:** Cylindrical, rectangular, and conical features are generally easier to cast.
    *   **Break down complex parts:** If a complex part is unavoidable, consider if it can be cast in sections and assembled later. (Ref: Boothroyd, Dewhurst, Knight, *Product Design for Manufacture and Assembly*)

*   **Consider Draft Angles:**
    *   **Purpose:** Draft angles are essential for easy removal of the pattern from the sand mold and for removing the casting from the mold.
    *   **Recommendation:** Apply a draft angle to all vertical surfaces. A minimum draft of 0.5 to 1 degree is often recommended, but larger angles (2-3 degrees) are preferable for deeper sections.
    *   **Example:** A cylindrical boss should have slightly tapered sides to facilitate pattern removal.

*   **Wall Thickness Uniformity:**
    *   **Importance:** Uniform wall thickness promotes even cooling and solidification, preventing uneven shrinkage, warpage, and potential cracking.
    *   **Recommendation:** Aim for consistent wall thickness throughout the casting.
    *   **Handling variations:** If significant variations are necessary, transition gradually between thick and thin sections. Avoid abrupt changes. (Ref: Chitale & Gupta, *Product Design and Manufacturing*)
    *   **Example:** A flange that is much thicker than the main body of a part can lead to solidification issues. Consider gradually increasing the thickness of the main body near the flange.

*   **Minimize Undercuts:**
    *   **Definition:** Undercuts are features that prevent the pattern from being withdrawn from the mold without damaging it or require complex coring.
    *   **Recommendation:** Redesign parts to eliminate or minimize undercuts. If unavoidable, consider using cores or designing the mold in multiple parts.
    *   **Example:** A hole that passes through a casting at an angle to the mold parting line would require a core. If possible, orient the hole perpendicular to the parting line.

*   **Corner Radii:**
    *   **Importance:** Generous corner radii improve metal flow, reduce stress concentrations, and prevent hot spots that can lead to defects.
    *   **Recommendation:** Use generous fillet radii at all external and internal corners. Avoid sharp internal corners.
    *   **Example:** A sharp 90-degree internal corner can lead to poor metal flow and act as a stress riser. Apply a fillet radius to ease the transition.

### 2.2. Features Specific to Sand Casting Design

*   **Riser Design:**
    *   **Purpose:** Risers are crucial for feeding shrinkage during solidification. The design of the casting should facilitate the placement of effective risers.
    *   **Recommendation:** Ensure that risers are placed where they can effectively feed the last areas to solidify. The volume and shape of the riser should be adequate to compensate for shrinkage.
    *   **Key Principle:** A properly designed riser should solidify *after* the main casting. This is often achieved by making the riser geometry such that it has a lower surface-area-to-volume ratio than the casting section it feeds. (Ref: Dieter, *Engineering Design: A Materials and Processing Approach*)

*   **Gating and Runner Design:**
    *   **Purpose:** Proper gating ensures the mold cavity is filled quickly and evenly with molten metal without turbulence.
    *   **Recommendation:** Design gates and runners to promote laminar flow of molten metal. Avoid abrupt changes in direction or cross-section.
    *   **Placement:** Gates should be placed to fill the mold cavity from the lowest point upwards to minimize air entrapment.
    *   **Avoid:** Directly gating into thin sections, as this can lead to erosion of the sand mold.

*   **Core Design:**
    *   **Purpose:** Cores are used to create internal cavities and complex features.
    *   **Recommendation:** Minimize the number and complexity of cores. Cores add cost and potential for defects (e.g., poor surface finish, incomplete filling, core shift).
    *   **Core placement:** Design parts so that cores can be easily supported and anchored within the mold. Avoid long, slender cores that are prone to breakage.
    *   **Example:** Instead of casting a hollow cylinder, consider casting it solid and machining the bore if feasible and cost-effective.

*   **Parting Line Location:**
    *   **Definition:** The parting line is the surface where the two halves of the mold separate.
    *   **Recommendation:** Locate the parting line on a flat surface if possible, and where it minimizes the need for cores and draft. Avoid placing it on complex contours or in areas that require high precision.
    *   **Impact:** The location of the parting line influences the complexity of the mold and the likelihood of flash (excess metal that seeps between mold halves).

*   **Bosses and Ribs:**
    *   **Purpose:** Bosses (raised bosses) and ribs are used to provide mounting points or increase stiffness.
    *   **Recommendation:**
        *   **Bosses:** Design bosses with ample fillet radii where they join the main casting. Their wall thickness should ideally be no more than 1.5 times the surrounding wall thickness to avoid shrinkage.
        *   **Ribs:** Ribs should have a thickness that is about 50-70% of the main wall thickness they are reinforcing. This helps prevent differential cooling and shrinkage. Radii should be used where ribs join the main casting.

*   **Tolerances and Surface Finish:**
    *   **Expectations:** Sand casting generally has lower dimensional accuracy and poorer surface finish compared to other processes like machining or die casting.
    *   **Recommendation:**
        *   **Tolerances:** Design parts with realistic tolerances for sand casting. If tight tolerances are required for specific features, consider machining them after casting.
        *   **Surface Finish:** Account for a rougher surface finish. Avoid designing parts where a smooth, polished surface is critical without planning for post-casting finishing operations. (Ref: Bralla, *Design for Manufacturability Handbook*)

### 2.3. Material Considerations

*   **Shrinkage:** Different casting alloys have varying shrinkage rates. This must be accounted for in pattern design. (Ref: Molloy, Tilley, Warman, *Design for Manufacturing and assembly*)
*   **Fluidity:** The ability of molten metal to flow into the mold cavity is crucial. Materials with good fluidity can fill thinner sections and more complex geometries.
*   **Hot Tears:** Susceptibility to hot tearing (cracks formed during solidification due to thermal stresses) should be considered when designing complex shapes with varying cooling rates.

---

## 3. Design for Assembly Considerations in Sand Casting

While this module focuses on casting, it's crucial to remember the overall product assembly.

*   **CO1: Apply the knowledge of Design Guidelines for Manual Assembly.**
*   **CO2: Apply the knowledge of General design principles for manufacturability.**

When designing a sand-cast part, consider:

*   **Ease of Handling:** Design parts with features that facilitate gripping and manipulation during assembly.
*   **Fastening Features:** Integrate bosses for threaded inserts or holes for fasteners directly into the casting design where appropriate, considering draft and wall thickness.
*   **Modular Design:** If the sand-cast component is part of a larger assembly, design it to be easily joined with other components.

---

## 4. Important Points to Remember

*   **Uniformity is key:** Uniform wall thickness, gradual transitions, and generous radii are crucial for successful sand casting.
*   **Draft is mandatory:** Always include draft angles on surfaces that will be withdrawn from the mold.
*   **Minimize complexity:** The simpler the shape, the easier, cheaper, and more reliable the sand casting process will be.
*   **Consider post-casting operations:** Design with the understanding that machining might be necessary to achieve desired tolerances or surface finishes.
*   **Understand material properties:** Shrinkage, fluidity, and hot-tear resistance of the chosen alloy will influence design decisions.

---

## 5. Practice Questions & Exercises

**Question 1:**
Explain the importance of draft angles in sand casting and suggest typical values for them. (Relates to CO4)

**Answer 1:**
Draft angles are essential to facilitate the easy removal of the pattern from the sand mold and subsequently the casting from the mold without damaging either. Without adequate draft, the pattern could stick to the sand, leading to mold breakage or defects in the casting. Typical draft values range from 0.5 to 1 degree for shallow features, and 2 to 3 degrees or more for deeper sections.

**Question 2:**
Why is uniform wall thickness important in sand casting? Describe a design modification to address a section with significantly thicker walls than the rest of the part. (Relates to CO4)

**Answer 2:**
Uniform wall thickness is important to ensure even cooling and solidification of the molten metal. Variations in wall thickness can lead to differential cooling rates, causing localized stresses, shrinkage cavities, warpage, and potential cracking in the casting.

**Design Modification Example:** If a part has a thick flange attached to a thinner main body, a design modification could involve gradually increasing the thickness of the main body leading up to the flange, rather than having an abrupt change. Alternatively, a reinforcing rib could be designed on the underside of the flange to help it solidify more evenly with the main body.

**Question 3:**
What is an undercut in the context of sand casting, and how can a designer mitigate its presence? Provide an example. (Relates to CO4)

**Answer 3:**
An undercut is a feature in a casting design that prevents the pattern from being withdrawn from the sand mold in a single piece without damage, or requires the use of a core.

**Mitigation Strategies:**
1.  **Redesign the part:** Modify the geometry to eliminate the undercut.
2.  **Use a core:** Incorporate a separate sand core to form the undercut feature.
3.  **Design the mold in sections:** If the undercut is significant, the mold itself might need to be designed in multiple parts to allow for pattern withdrawal.

**Example:** A hole drilled perpendicular to the main parting line of a mold would create an undercut. To mitigate this, the hole could be oriented parallel to the parting line, or a core could be used to form the hole.

**Question 4:**
A designer is creating a mounting bracket that will be sand cast. They have decided to add bosses for screw mounting. What design considerations should they keep in mind for these bosses to ensure good castability? (Relates to CO4)

**Answer 4:**
For bosses in sand casting:
*   **Fillet Radii:** Generous fillet radii should be applied where the boss joins the main body of the casting to reduce stress concentration and improve metal flow.
*   **Wall Thickness:** The wall thickness of the boss should ideally not be more than 1.5 times the thickness of the main casting wall it attaches to. This helps prevent shrinkage defects at the junction.
*   **Internal Threads:** If internal threads are required, they are typically machined after casting. The boss should be designed with sufficient material thickness to accommodate the tapped hole.

**Question 5:**
Compare and contrast the general design principles for sand casting with those for die casting, focusing on one key difference relevant to design recommendations. (Relates to CO4)

**Answer 5:**
While both are casting processes, a key difference in design recommendations lies in **tooling cost and complexity**.

*   **Sand Casting:** Characterized by lower tooling costs (primarily for patterns) and the mold is destroyed with each casting. This allows for more design freedom to accommodate features that might be difficult or expensive to achieve in die casting. Design recommendations focus on simplifying the *molding process* itself, but there's more tolerance for complexity due to the disposable nature of the mold. Draft angles are critical for pattern withdrawal.
*   **Die Casting:** Involves high tooling costs (complex metal dies) and the dies are reused thousands of times. Therefore, design recommendations heavily emphasize minimizing undercuts and features that would necessitate complex die mechanisms (like side cores), as these significantly increase tooling cost and cycle time. Draft angles are also important but often can be smaller due to the harder mold material.

**Key Difference in Design Recommendations:** The economic viability of incorporating complex features like undercuts is much higher in sand casting (using cores) than in die casting, where such features can drastically increase the cost of the reusable die.

---

This concludes the study notes for Design Recommendations in Sand Casting. Remember to consult the provided textbooks for a more in-depth understanding and further examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
