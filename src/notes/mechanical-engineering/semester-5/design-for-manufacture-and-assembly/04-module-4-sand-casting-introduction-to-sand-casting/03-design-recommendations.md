---
title: "Design recommendations."
subject: "DESIGN FOR MANUFACTURE AND ASSEMBLY"
module: "Module 4: Sand casting: Introduction to sand casting"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf4804463495"
status: "completed"
scrapedAt: "2026-05-20T17:59:39.400Z"
---
# DESIGN FOR MANUFACTURE AND ASSEMBLY (DFMA)

## Module 4: Sand Casting: Introduction to Sand Casting

### Topic: Design Recommendations

---

### **Introduction to Sand Casting**

Sand casting is a versatile and widely used metal casting process. It involves creating a mold from compacted sand around a pattern (a replica of the desired part). Molten metal is then poured into the mold cavity, solidifies, and is subsequently removed. DFMA principles are crucial for optimizing the design of parts to be sand cast, leading to improved manufacturability, reduced costs, and enhanced product quality.

---

### **Learning Outcomes Covered:**

*   **Applying Design Guidelines for Manual Assembly:** While this topic focuses on manufacturing, efficient sand casting directly impacts ease of assembly. Simpler, more consistently cast parts reduce post-casting operations, leading to faster and easier assembly.
*   **Applying General Design Principles for Manufacturability:** This is the core of the topic, as we'll explore how design choices affect the sand casting process.
*   **Designing and Improving Parts for Better Casting:** This is directly addressed by the design recommendations for sand casting.
*   **Designing and Improving Parts for Better Machining:** Post-casting machining is often required. Design recommendations will consider how to minimize or simplify these operations.
*   **Designing and Improving Parts for Better Welded Joints:** While not directly related to sand casting, if a cast part is to be welded, design considerations for weldability are important. We'll touch on this as a downstream consideration.

---

### **Course Outcomes Alignment:**

*   **CO1: Apply the knowledge of Design Guidelines for Manual Assembly.** (K3 - Application) - By understanding how sand casting design affects part complexity and tolerance, we can design for easier assembly.
*   **CO2: Apply the knowledge of General design principles for manufacturability.** (K3 - Application) - This module directly addresses these principles in the context of sand casting.
*   **CO3: Design and improve parts for better machinability.** (K3 - Application) - Design recommendations will focus on minimizing machining needs.
*   **CO4: Design and improve parts for better casting and injection moulding.** (K3 - Application) - This module specifically covers casting design.
*   **CO5: Design and improve parts for better welded joints.** (K3 - Application) - We'll briefly consider how casting design might impact subsequent welding operations.

---

### **Key Concepts and Definitions:**

*   **Sand Casting:** A metal casting process where a mold is created using sand, and molten metal is poured into it.
*   **Pattern:** A replica of the desired part, used to create the mold cavity.
*   **Mold:** A cavity formed in sand that defines the shape of the cast part.
*   **Core:** A sand or ceramic insert used to create internal cavities or passages within the casting.
*   **Gate:** The channel through which molten metal enters the mold cavity.
*   **Riser:** A reservoir of molten metal that feeds the casting as it solidifies, compensating for shrinkage.
*   **Draft:** The slight taper on surfaces perpendicular to the parting line, facilitating mold removal.
*   **Parting Line:** The surface where the two halves of the mold meet.
*   **Runner:** A channel that carries molten metal from the gate to the mold cavity.
*   **Shrinkage:** The reduction in volume of a metal as it solidifies and cools.
*   **Porosity:** Small voids or holes within a casting caused by trapped gas or shrinkage.
*   **Distortion:** Warping or deformation of the casting during solidification or cooling.

---

### **Design Recommendations for Sand Casting**

The goal of these recommendations is to produce parts that are easier and more cost-effective to sand cast, with fewer defects and reduced downstream processing.

#### **1. Uniform Wall Thickness**

*   **Concept:** Avoid abrupt changes in wall thickness.
*   **Rationale:** Variations in wall thickness lead to uneven cooling and solidification, causing:
    *   **Shrinkage:** Thicker sections cool last and shrink more, potentially creating voids or depressions on the surface.
    *   **Stress Concentrations:** Uneven cooling can induce internal stresses, leading to distortion or cracking.
    *   **Difficulty in Filling:** Very thin sections may not fill properly with molten metal.
*   **Recommendations:**
    *   Aim for a consistent wall thickness throughout the part as much as possible.
    *   If variations are unavoidable, transition gradually from thicker to thinner sections (e.g., using a fillet or radius).
    *   **Boothroyd, Dewhurst, Knight (2010):** Emphasize gradual transitions to minimize stress concentrations and improve casting integrity.
*   **Example:** Instead of a sharp corner between a thick boss and a thin web, incorporate a generous fillet.

#### **2. Avoid Sharp Corners and Re-entrant Angles**

*   **Concept:** Use radii and fillets at all internal and external corners.
*   **Rationale:**
    *   **Stress Concentration:** Sharp internal corners act as stress risers, making the part susceptible to cracking during solidification, cooling, or in service.
    *   **Mold Cavity Filling:** Sharp corners can be difficult for molten metal to fill completely, leading to incomplete sections or defects.
    *   **Mold Removal:** Sharp corners can snag on the pattern during mold removal, damaging the mold.
*   **Recommendations:**
    *   Specify generous radii for all internal and external corners.
    *   The minimum radius should be at least the wall thickness for internal corners and half the wall thickness for external corners (general guideline).
*   **Example:** A square hole should be designed with rounded corners.

#### **3. Draft Angles**

*   **Concept:** Provide a taper on all surfaces that are perpendicular to the parting line of the mold.
*   **Rationale:** Draft is essential for easily separating the pattern from the sand mold and for removing the solidified casting from the mold. Without adequate draft, the mold or casting can be damaged.
*   **Recommendations:**
    *   **External surfaces:** Generally require less draft than internal surfaces.
    *   **Internal surfaces:** Require more draft due to potential friction with the pattern or core.
    *   **Typical draft angles:** 1-3 degrees for external surfaces, 2-5 degrees for internal surfaces. Consult specific material and process guidelines.
    *   **Chitale & Gupta (2011):** Discuss the importance of draft for mold and core removal.
*   **Example:** A cylindrical boss extending from a flat surface should have a slight taper on its outer diameter.

#### **4. Minimize Undercuts and Complex Geometries**

*   **Concept:** Design parts to be easily formed by a two-part sand mold.
*   **Rationale:** Undercuts (features that prevent a mold from being withdrawn directly) require the use of cores or more complex mold-making techniques, increasing cost and potential for defects.
*   **Recommendations:**
    *   Avoid undercuts wherever possible.
    *   If undercuts are essential, design them to be formed by cores or by splitting the mold into more than two pieces.
    *   **Boothroyd (2005):** Highlights the cost implications of complex tooling and molds.
*   **Example:** A part with a groove that extends inward and then sideways would likely require a core. Re-designing to have a through-slot or an external recess would be preferable.

#### **5. Location and Design of Gates and Risers**

*   **Concept:** Plan the gating and riser system during the design phase.
*   **Rationale:** Proper gating ensures the mold cavity fills completely and without turbulence. Risers are critical for feeding shrinkage.
*   **Recommendations:**
    *   Place gates to ensure smooth, non-turbulent metal flow into the mold. Avoid gating directly onto thin sections or fragile features.
    *   Locate risers to feed the last areas to solidify, typically the thickest sections.
    *   Design risers to be easily removed during post-casting operations.
    *   **Dieter (2000):** Discusses the metallurgical aspects of casting, including shrinkage and feed metal requirements.
*   **Example:** A large, solid boss on a thinner plate should be fed by a riser located adjacent to the boss.

#### **6. Machining Allowances**

*   **Concept:** Include extra material on surfaces that will be machined after casting.
*   **Rationale:** Sand casting surfaces are typically rougher and less precise than machined surfaces. Machining removes this outer layer to achieve desired dimensions and surface finish.
*   **Recommendations:**
    *   Specify machining allowance based on the casting process, desired surface finish, and material.
    *   **Bralla (1998):** Provides guidelines for machining allowances for various casting processes.
    *   Keep machining allowances to a minimum to reduce material waste and machining time.
    *   Design to minimize the number of surfaces requiring machining.
*   **Example:** A bore for a bearing might require a 2-4 mm machining allowance, depending on the required tolerance.

#### **7. Tolerances and Surface Finish**

*   **Concept:** Understand the inherent limitations of sand casting regarding dimensional accuracy and surface finish.
*   **Rationale:** Sand casting generally produces parts with lower dimensional accuracy and rougher surfaces compared to processes like investment casting or precision machining.
*   **Recommendations:**
    *   Specify tolerances appropriate for the sand casting process. Avoid overly tight tolerances unless absolutely necessary and acknowledged as costly.
    *   Design critical features to be achieved through subsequent machining operations if high accuracy is required.
    *   **Molloy, Tilley, & Warman (1998):** Discuss the trade-offs between casting cost and achievable tolerances.
*   **Example:** Instead of specifying a ±0.1 mm tolerance on a dimension that is cast directly, consider a ±0.5 mm tolerance and specify that a critical mating surface will be machined.

#### **8. Core Design**

*   **Concept:** Design cores to be robust and easily supported within the mold.
*   **Rationale:** Cores create internal features but can be prone to shifting or breaking during mold filling if not properly designed.
*   **Recommendations:**
    *   Provide adequate support for cores using chaplets (metal inserts that anchor the core) or by designing the core to be self-supporting.
    *   Minimize overhanging sections of cores.
    *   Ensure core prints (projections on the pattern that form seats for the cores) are dimensioned accurately.
*   **Example:** For a long, unsupported core, design it with a slight taper and provide support from both sides of the mold.

#### **9. Design for Weldability (Downstream Consideration)**

*   **Concept:** If the cast part is to be welded, consider the weldability of the material and the design of the joint.
*   **Rationale:** The material chosen for sand casting and the design of the joint can significantly impact the success of a subsequent welding operation.
*   **Recommendations:**
    *   Select casting alloys known for good weldability.
    *   Avoid casting complex geometries near weld joints that could lead to distortion or cracking during welding.
    *   Ensure adequate access for welding equipment.
    *   **Whitney (2004):** Discusses mechanical assemblies and the integration of different manufacturing processes.
*   **Example:** If a cast flange is to be welded to a fabricated steel plate, consider the compatibility of the materials and design the weld preparation accordingly.

---

### **Important Points to Remember:**

*   **Trade-offs:** Design decisions often involve trade-offs between manufacturability, cost, performance, and aesthetics.
*   **Early Consideration:** Incorporate DFMA principles for sand casting early in the design process.
*   **Collaboration:** Work closely with foundry engineers to understand their capabilities and limitations.
*   **Iterative Process:** Design optimization is often an iterative process.

---

### **Practice Questions and Exercises**

**Question 1:**
A component has a thick section of 20 mm connected to a thin section of 5 mm.
a) What casting defect is likely to occur due to this variation in wall thickness?
b) How would you redesign this feature to improve its manufacturability by sand casting?
c) Explain the principle behind your redesign.

**Answer 1:**
a) The likely casting defect is **shrinkage porosity** or **hot spots** in the thicker section, which cools last. There might also be stress concentrations leading to distortion.
b) Redesign the feature to have a more uniform wall thickness. This could involve:
    *   Gradually tapering the thicker section down to the thinner section.
    *   Adding ribs to the thinner section to equalize the cooling rate.
    *   Using a riser to feed the thicker section.
c) The principle is to promote **uniform solidification**. By reducing abrupt changes in wall thickness, the entire part cools more evenly, minimizing shrinkage and internal stresses. Gradual transitions (fillets) prevent stress concentration, and ribs distribute heat. Risers provide a reservoir of molten metal to compensate for volumetric shrinkage in thicker areas.

**Question 2:**
Consider a part that requires a hole passing through a casting.
a) If the hole is deep and narrow, what casting consideration is paramount for its formation?
b) What are the advantages of using a sand core for this hole compared to a feature that allows for simpler mold opening?
c) What are the disadvantages and how can they be mitigated?

**Answer 2:**
a) The paramount consideration is the **ease of removal of the pattern or mold feature**. If the hole is deep and narrow, it can be difficult to withdraw the pattern from the sand without damaging the mold.
b) Advantages of using a sand core for a deep, narrow hole:
    *   **Ability to create internal features:** Cores are specifically designed to form internal cavities and passages that cannot be formed by the mold itself.
    *   **Potentially simpler pattern:** The pattern may not need complex coring mechanisms if a sand core is used.
c) Disadvantages of using sand cores:
    *   **Increased mold complexity:** Requires creating and placing cores accurately.
    *   **Potential for core shift:** Cores can move during mold filling if not properly supported, leading to inaccurate hole positioning or wall thickness.
    *   **Core-related defects:** Sand inclusions or rough surfaces can occur if the core is not properly made or bonded.
    *   **Increased cost:** Due to additional steps and materials.
    Mitigation strategies:
    *   **Proper core support:** Use chaplets or design the core to be self-supporting and provide adequate seating in the mold.
    *   **Minimize overhang:** Design the core with a slight taper and avoid excessively long, unsupported sections.
    *   **Core reinforcement:** Use binders and reinforcements in the core sand.
    *   **Accurate core placement:** Use robust core prints on the pattern and ensure precise positioning of cores before pouring.
    *   **Consider alternative designs:** If possible, redesign the part to eliminate the need for a deep, narrow hole or use a through-slot that can be formed directly by the mold.

**Question 3:**
You are designing a bracket that will be sand cast and then bolted to another assembly.
a) What are the key design recommendations for the bolt hole bosses on this bracket to facilitate both casting and subsequent assembly?
b) How does the choice of material affect the design allowances for sand casting and subsequent machining?

**Answer 3:**
a) Key design recommendations for bolt hole bosses:
    *   **Draft Angle:** Ensure the outer diameter of the boss has sufficient draft for easy mold removal.
    *   **Fillets:** Apply generous fillets at the base of the boss where it joins the main body of the bracket to reduce stress concentrations and improve casting.
    *   **Uniform Thickness:** If the boss is significantly thicker than the main bracket body, consider adding a reinforcing rib or gradually tapering the boss thickness.
    *   **Machining Allowance:** Provide adequate machining allowance on the surface where the bolt will sit and for the bore of the hole if tight tolerances are required for accurate assembly.
    *   **Avoid Undercuts:** Ensure the boss shape doesn't create undercuts that would complicate mold making.
    *   **Boss Height:** Design the boss height to be sufficient for the bolt length but avoid excessively tall bosses that might be prone to distortion or core-related issues.
b) Choice of material and its effect on design allowances:
    *   **Cast Iron vs. Aluminum vs. Steel:**
        *   **Aluminum alloys:** Generally have lower melting points and shrink less than ferrous alloys. They can be cast with slightly lower draft angles and sometimes tighter tolerances than cast iron. Machining is generally easier.
        *   **Cast Iron:** Higher melting point, more prone to shrinkage. Requires larger risers and often more generous draft angles. Machining can be more challenging depending on the grade.
        *   **Steel Castings:** Highest melting point, significant shrinkage. Require careful gating and riser design. Machining can be the most difficult and may require specialized tools.
    *   **Machining Allowance:**
        *   Materials that are harder to machine (e.g., some steels) may require slightly larger machining allowances to account for tool wear and cutting forces, ensuring a good surface finish is achieved without excessive effort.
        *   Materials that are softer and easier to machine (e.g., aluminum) might allow for smaller machining allowances, reducing material waste and machining time.
    *   **Tolerances:** The inherent difficulty in controlling solidification and mold interaction for different materials will influence the achievable "as-cast" tolerances. More challenging materials might necessitate larger allowances and reliance on machining for precision.

---

This comprehensive set of notes covers the design recommendations for sand casting within the context of DFMA, aligning with the specified learning and course outcomes. The inclusion of concepts, rationale, recommendations, examples, and practice questions provides a solid foundation for understanding this critical aspect of product design.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
