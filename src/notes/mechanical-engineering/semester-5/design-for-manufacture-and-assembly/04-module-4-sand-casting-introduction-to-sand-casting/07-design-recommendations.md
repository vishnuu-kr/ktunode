---
title: "Design recommendations."
subject: "DESIGN FOR MANUFACTURE AND ASSEMBLY"
module: "Module 4: Sand casting: Introduction to sand casting"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf4804463499"
status: "completed"
scrapedAt: "2026-05-20T17:59:42.236Z"
---
# Module 4: Sand Casting: Introduction to Sand Casting - Design Recommendations

## 1. Introduction to Sand Casting Design Recommendations

Sand casting is a versatile and widely used metal casting process. However, to optimize the casting process for manufacturability and assembly, specific design considerations are crucial. This module focuses on providing design recommendations for sand-cast parts to ensure efficient production, reduce defects, and facilitate subsequent assembly operations.

### Key Concepts and Definitions

*   **Sand Casting:** A metal casting process characterized by the use of sand as the mold material. Molten metal is poured into a sand mold cavity and allowed to solidify.
*   **Draft:** A slight taper on vertical surfaces of a casting that allows for easy removal of the pattern from the sand mold.
*   **Risers:** Reservoirs of molten metal attached to the casting that feed molten metal to the casting as it solidifies, compensating for shrinkage and preventing voids.
*   **Gating System:** The channels through which molten metal flows from the pouring basin to the mold cavity. This includes the sprue, runners, and gates.
*   **Parting Line:** The line on the casting where the cope (top half of the mold) and drag (bottom half of the mold) meet.
*   **Porosity:** Small voids or holes within the casting, often caused by gas entrapment or shrinkage.
*   **Shrinkage:** The reduction in volume of metal as it solidifies and cools. This is a critical factor in casting design.
*   **Distortion:** Warping or bending of the casting during cooling, often due to uneven cooling rates or residual stresses.

### Design Goals in Sand Casting

The primary goals of design recommendations for sand casting are:

*   **Minimize defects:** Reduce the likelihood of shrinkage, porosity, warping, and other casting imperfections.
*   **Simplify mold making:** Facilitate easier pattern removal and mold assembly.
*   **Improve casting quality:** Achieve desired dimensional accuracy and surface finish.
*   **Reduce machining allowances:** Minimize the amount of material that needs to be removed by subsequent machining operations.
*   **Facilitate assembly:** Ensure the casting can be easily assembled with other components.

## 2. Design Recommendations for Sand Castings

This section details specific design recommendations, drawing upon principles from the recommended textbooks.

### 2.1. Shape and Complexity

*   **Simplify the Part Geometry:**
    *   **Avoid sharp internal corners:** Sharp corners concentrate stress and are prone to hot tears during solidification. They also make it difficult for molten metal to flow smoothly. **(Boothroyd, Dewhurst, & Knight, 2010)** recommends using generous radii at all internal corners.
    *   **Use rounded external corners:** Rounded external corners improve metal flow and reduce stress concentrations.
    *   **Minimize undercuts:** Undercuts create difficulties in pattern removal and mold assembly, often requiring complex core arrangements or multiple mold pieces. If undercuts are unavoidable, they should be designed to be as shallow as possible.
    *   **Avoid intricate details:** Highly detailed features are difficult to achieve with sand casting and may lead to defects.

*   **Example:** Instead of a sharp 90-degree internal corner, use a fillet radius of at least 3-5 mm (or scaled to the part size).

### 2.2. Wall Thickness

*   **Maintain Uniform Wall Thickness:**
    *   Varying wall thicknesses lead to differential cooling rates, resulting in internal stresses, warping, and shrinkage defects.
    *   **Chitale & Gupta (2011)** emphasize the importance of uniform wall thickness for consistent solidification.
    *   If variations are unavoidable, transition gradually between thicker and thinner sections using generous radii.
    *   **Target Thickness:** Aim for a wall thickness that is appropriate for the material being cast and the casting size. Typically, this can range from 3mm to 25mm or more, depending on the application.

*   **Example:** A boss (a raised cylindrical feature) should blend smoothly into the surrounding thinner wall using a fillet.

### 2.3. Ribs and Fillets

*   **Use Ribs for Strength and Stiffness:**
    *   Ribs can be used to reinforce thin sections, increasing rigidity without significantly increasing overall weight.
    *   **Boothroyd (2005)** highlights the use of ribs in improving mechanical properties.
    *   **Rib Design:** Ribs should have a thickness generally no more than 50-75% of the main wall thickness to prevent hot spots and shrinkage.
    *   Connect ribs to the main casting using generous fillets.

*   **Fillets are Crucial:**
    *   **Dieter (2000)** stresses the role of fillets in reducing stress concentration and improving material flow.
    *   Fillets should be used at all internal corners and at the junction of ribs with the main casting.
    *   The radius of the fillet should be at least 3-5 times the wall thickness it connects, or as large as practical.

*   **Example:** A flat plate casting can be strengthened with strategically placed ribs. The junction of each rib to the plate should have a fillet.

### 2.4. Draft Angles

*   **Incorporate Draft:**
    *   Draft is essential for easy pattern withdrawal from the sand mold. Insufficient draft can lead to mold damage and poor casting quality.
    *   **Molloy, Tilley, & Warman (1998)** recommend draft angles of 1-2 degrees for most vertical surfaces.
    *   Vertical surfaces that are very deep or have a rough surface finish might require slightly larger draft angles (up to 3 degrees).
    *   Internal surfaces that are to be cast may also require draft, depending on the core design and material.

*   **Example:** The sides of a boss or a raised feature on the casting should be tapered slightly outwards.

### 2.5. Machining Allowances

*   **Minimize Machining:**
    *   Design the casting to require as little machining as possible. This reduces manufacturing costs and time.
    *   **Bralla (1998)** advises that machining allowances are often necessary for achieving tight dimensional tolerances or smooth surface finishes.
    *   **Allowance Size:** The amount of allowance depends on the casting process, material, dimensional accuracy required, and surface finish specifications. For sand castings, typical machining allowances can range from 1 mm to 6 mm or more.
    *   **Even Allowance:** Ensure that machining allowances are applied uniformly to surfaces that require machining.

*   **Example:** If a bore needs to be machined, design the casting with a slightly oversized diameter to allow for drilling and reaming.

### 2.6. Features and Tolerances

*   **Dimensional Tolerances:**
    *   Sand casting generally has lower dimensional accuracy compared to processes like die casting. Understand the typical tolerances achievable for the chosen material and sand casting method.
    *   **Chitale & Gupta (2011)** provide typical tolerance ranges for sand castings, which can be in the order of ±0.5 mm to ±3 mm depending on the casting size and complexity.
    *   Design critical features to accommodate these inherent tolerances. Avoid placing critical features on the parting line.

*   **Surface Finish:**
    *   The surface finish of sand castings is typically rougher than other processes. If a smooth surface is required, consider machining or secondary finishing operations.
    *   **Lesko (1999)** suggests that surface roughness for sand castings can range from 50 to 250 microinches or more.

*   **Parting Line Location:**
    *   Locate the parting line on surfaces that are less critical for dimensional accuracy and surface finish.
    *   Minimize the number of parting lines if possible, as they can lead to flash (excess metal) and affect dimensional accuracy.

### 2.7. Gating and Risering Considerations in Design

While the detailed design of gating and risering systems is typically done by foundry engineers, designers can influence their effectiveness by considering the following:

*   **Avoid Blind Pockets:** Blind pockets can trap air and molten metal, leading to casting defects.
*   **Consider Metal Flow:** Design the part to facilitate smooth flow of molten metal. Avoid sharp turns or obstructions in the intended flow path.
*   **Solidification Strategy:** While not directly designing the risers, understand where thicker sections will solidify last. These areas are more prone to shrinkage and will likely require risering. Design the part to minimize these large, isolated heavy sections if possible.

### 2.8. Core Design Considerations

*   **Minimize Core Usage:** Cores are used to create internal cavities and complex features. Cores add complexity and cost to the casting process.
    *   **Whitney (2004)** notes that complex core assemblies increase manufacturing difficulty.
    *   Design the part to eliminate or minimize the need for cores wherever possible.

*   **Core Support:** If cores are necessary, ensure they are adequately supported within the mold to prevent sagging or displacement during pouring. This might involve designing core prints (extensions of the core that rest in the mold) or chaplets (metal supports).

## 3. Design Recommendations for Manufacturability and Assembly (Related to Sand Casting)

This section links the sand casting design recommendations to broader Design for Manufacture and Assembly (DFMA) principles, as discussed by **Boothroyd & Dewhurst (2010)**.

### 3.1. Part Simplification and Cost Reduction

*   **Reduce Part Count:** Can the sand-cast component be designed to integrate features of multiple parts? This reduces assembly time and complexity.
*   **Eliminate Operations:** Can features be designed to be cast to near-net shape, reducing the need for machining?
*   **Material Optimization:** Choose materials that are suitable for sand casting and meet the performance requirements, while considering cost.

### 3.2. Assembly Considerations for Sand Cast Parts

*   **Mounting Features:** Design mounting features (e.g., bosses for threaded fasteners, mounting flanges) directly into the sand casting. Ensure these features are positioned to facilitate easy access for assembly tools.
*   **Location Features:** Incorporate features like locating pins or slots to aid in the precise alignment of the casting during assembly.
*   **Fastener Integration:** If threaded fasteners are to be used, consider designing the casting with tapped holes (which require machining) or designing the casting to accommodate nuts in integrated pockets or slots.

## 4. Alignment with Course Outcomes

*   **CO1: Apply the knowledge of Design Guidelines for Manual Assembly (K3):** The recommendations on mounting features, location features, and part integration directly support this outcome.
*   **CO2: Apply the knowledge of General design principles for manufacturability (K3):** Uniform wall thickness, draft angles, fillet usage, and part simplification are core manufacturability principles applied here.
*   **CO3: Design and improve parts for better machinability (K3):** Minimizing machining allowances, ensuring uniform surfaces for machining, and avoiding difficult-to-machine features are covered.
*   **CO4: Design and improve parts for better casting and injection moulding (K3):** The entire module is dedicated to improving sand casting. Many principles, such as draft, uniform thickness, and avoiding undercuts, are also transferable to injection molding.
*   **CO5: Design and improve parts for better welded joints (K3):** While not directly covered in this specific topic, the design of casting features for weldability (e.g., providing flat surfaces for welding, avoiding features that could lead to weld defects) is an important consideration in the broader context of DFMA.

## 5. Practice Questions and Exercises

**Question 1:** Explain why maintaining uniform wall thickness is critical in sand casting and what design modifications can be made to achieve this.

**Answer:** Uniform wall thickness is critical because variations lead to differential cooling rates. Thicker sections cool slower and are more prone to shrinkage defects (voids) and internal stresses. Thinner sections cool faster. These differential cooling rates can also cause warping and distortion.
**Design Modifications:**
*   **Gradual Transitions:** Use generous fillets and radii to smoothly blend thicker sections with thinner ones.
*   **Ribs:** Reinforce thin sections with ribs, ensuring the rib thickness is a fraction (e.g., 50-75%) of the main wall thickness.
*   **Part Redesign:** If a feature is significantly thicker, consider redesigning the part to distribute the mass more evenly.

**Question 2:** What is a draft angle, and why is it important in sand casting? What are typical draft angle recommendations?

**Answer:** A draft angle is a slight taper applied to vertical surfaces of a pattern that allows for its easy removal from the sand mold after it has been formed. It is crucial to prevent the sand from sticking to the pattern and to avoid damage to the mold cavity, which would result in a poor-quality casting. Typical recommendations are 1-2 degrees for most surfaces, with potentially larger angles (up to 3 degrees) for deeper features or rougher surface finishes.

**Question 3:** A part has a sharp internal corner with a radius of 1 mm connecting two walls of 10 mm thickness. Based on design recommendations for sand casting, what modification would you suggest?

**Answer:** Sharp internal corners are problematic because they concentrate stress and hinder molten metal flow, increasing the risk of defects. The recommended modification is to increase the radius of the internal corner. A fillet radius of at least 3-5 times the wall thickness is generally recommended. In this case, a fillet radius of at least 30-50 mm (or as large as practically possible without compromising functionality) should be applied.

**Question 4:** You are designing a flange for a sand-cast housing. The flange needs to be bolted to another component. What design considerations should you make for the flange to facilitate assembly?

**Answer:**
*   **Bolt Holes:** Design the flange with accurately positioned bolt holes. If precise alignment is critical, consider designing the casting to include pilot diameters or locating features adjacent to the bolt holes.
*   **Surface Finish:** If the mating surface of the flange needs to be flat for sealing or proper bolting, consider if machining allowance is required.
*   **Thickness:** Ensure the flange has adequate thickness to provide sufficient support for the bolts and to resist bending or distortion when tightened.
*   **Access:** Ensure there is sufficient clearance around the bolt holes to allow for easy insertion and tightening of fasteners.

**Question 5:** How does minimizing the number of cores in a sand casting design contribute to its manufacturability?

**Answer:**
*   **Reduced Complexity:** Cores are separate pieces that need to be made, handled, and positioned within the mold. Minimizing their number simplifies the overall mold assembly.
*   **Lower Cost:** Core making and handling add significant costs to the casting process.
*   **Improved Accuracy:** The positioning of cores can be a source of dimensional inaccuracy. Fewer cores mean fewer potential sources of error.
*   **Easier Mold Handling:** Complex core assemblies can be fragile and difficult to manage during mold production and pouring.

## 6. Important Points to Remember

*   **Fillets and Radii:** Always use generous fillets at internal corners and at the junction of features (like ribs to main walls) to prevent stress concentrations and improve metal flow.
*   **Uniformity is Key:** Strive for uniform wall thickness throughout the casting to ensure even cooling and minimize defects.
*   **Draft is Essential:** Always incorporate draft angles on vertical surfaces for easy pattern removal.
*   **Minimize Machining:** Design for near-net shape to reduce subsequent machining operations and costs.
*   **Understand Limitations:** Be aware of the inherent dimensional tolerances and surface finish limitations of sand casting.
*   **Consider the Foundry:** Collaborate with foundry engineers to understand their capabilities and limitations, especially regarding complex geometries, gating, and risering.

This comprehensive set of notes covers the essential design recommendations for sand casting, aligning with the learning outcomes and course objectives. Remember to consult the provided textbooks for more in-depth information and specific examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
