---
title: "Typical characteristics of injection moulded parts"
subject: "DESIGN FOR MANUFACTURE AND ASSEMBLY"
module: "Module 4: Sand casting: Introduction to sand casting"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf480446349b"
status: "completed"
scrapedAt: "2026-05-20T17:59:43.650Z"
---
# Module 4: Sand Casting: Introduction to Sand Casting

## Topic: Typical Characteristics of Injection Moulded Parts

**Module Context:** This module introduces sand casting as a manufacturing process. While sand casting is the primary focus, understanding the characteristics of parts produced by other common processes, like injection molding, provides valuable context for Design for Manufacture and Assembly (DFMA). It helps in appreciating the trade-offs and capabilities of different manufacturing methods.

**Course Outcomes Addressed:**
*   **CO4:** Design and improve parts for better casting and injection moulding. (Knowledge Level: K3) - Understanding the characteristics of injection molded parts directly informs how we design for this process.

**Learning Outcomes:**
*   Identify and describe the typical characteristics of parts produced by injection molding.
*   Discuss how these characteristics influence part design for manufacturability and assembly.
*   Relate the capabilities and limitations of injection molding to design decisions.

---

### 1. Introduction to Injection Moulding

Injection moulding is a widely used manufacturing process for producing high-volume plastic parts. It involves injecting molten plastic material into a mould cavity under high pressure. Once the plastic cools and solidifies, the mould opens, and the part is ejected.

**Key Concepts:**
*   **Thermoplastics:** Plastics that can be repeatedly softened by heating and hardened by cooling. These are the primary materials used in injection moulding.
*   **Mould Cavity:** The shape of the part is defined by the void within the mould.
*   **Injection Pressure:** The force used to push the molten plastic into the mould.
*   **Cooling Time:** The duration required for the plastic to solidify and reach ejection temperature.
*   **Cycle Time:** The total time taken to produce one part, including injection, cooling, and ejection.

---

### 2. Typical Characteristics of Injection Moulded Parts

Injection moulding offers significant advantages in terms of part complexity, surface finish, and dimensional accuracy. However, certain characteristics are inherent to the process and must be considered during the design phase.

**2.1. Part Geometry and Features:**

*   **High Complexity:** Injection moulding can produce parts with intricate shapes, undercuts, and internal features that are difficult or impossible with other processes like sand casting.
    *   **Example:** A complex housing for an electronic device with snap-fits, ribs, and bosses.
*   **Draft Angles:** To facilitate easy ejection of the part from the mould, draft angles (tapered walls) are typically required on all vertical surfaces. The amount of draft needed depends on the material, part geometry, and mould design.
    *   **Typical Draft:** 0.5 to 2 degrees is common, but more may be needed for deep draws or textured surfaces. (Refer to Boothroyd, Dewhurst, & Knight, 2010 for detailed guidelines).
*   **Ribs and Gussets:** Used to increase stiffness and strength without adding significant wall thickness. They are crucial for preventing warping and improving structural integrity.
    *   **Design Rule:** Rib thickness should typically be 40-60% of the base wall thickness.
*   **Bosses:** Protrusions used for mounting or fastening. They require careful design to avoid sink marks.
    *   **Design Rule:** Boss wall thickness should be similar to the adjacent wall thickness (e.g., 50-60% of the nominal wall thickness).
*   **Holes:** Can be moulded directly. Through-holes are easier than blind holes. The diameter of the hole relative to its depth is important for mould design.
    *   **Example:** Moulding a hole for a screw or a conduit.
*   **Undercuts:** Features that prevent direct ejection from the mould. They require special mould actions like slides or lifters, which increase mould cost and complexity.
    *   **DFMA Consideration:** Minimize or eliminate undercuts where possible to simplify tooling and reduce costs. If unavoidable, design them to be easily actuated.

**2.2. Material Properties and Behaviour:**

*   **Wide Range of Materials:** A vast array of thermoplastics (e.g., ABS, Polycarbonate, Nylon, Polypropylene) can be processed, offering diverse properties like strength, flexibility, heat resistance, and chemical resistance. (Refer to Chitale & Gupta, 2011 for material selection guidelines).
*   **Anisotropic Properties:** Due to the flow of plastic during injection, molecular orientation occurs, leading to different mechanical properties (strength, stiffness) in different directions. Parts are generally stronger and stiffer in the direction of flow.
    *   **DFMA Implication:** Orient critical features to align with the direction of material flow for optimal performance.
*   **Shrinkage:** Plastics shrink as they cool from the molten state to ambient temperature. This shrinkage is material-dependent and also influenced by mould temperature, injection pressure, and cooling rate.
    *   **Design Consideration:** Moulds are designed with slight oversizing to compensate for shrinkage, ensuring the final part meets dimensional requirements.

**2.3. Surface Finish and Aesthetics:**

*   **Good Surface Finish:** Injection moulding can produce parts with smooth, aesthetically pleasing surfaces, often requiring minimal post-processing.
    *   **Example:** Consumer electronics casings, automotive interior components.
*   **Surface Textures:** Mould surfaces can be textured to impart specific finishes to the part, such as matte or patterned surfaces.
*   **Gate Marks:** The point where the molten plastic enters the mould cavity (the gate) will leave a visible mark on the part. Gate location and type are important design considerations for aesthetics.
    *   **DFMA Consideration:** Place gates in less visible areas of the part or use designs that minimize their impact.
*   **Weld Lines:** Occur when two or more melt fronts meet in the mould cavity. These can be weaker areas in the part and may affect surface finish.
    *   **Design Consideration:** Strategically place gates to minimize the formation of weld lines in critical stress areas.

**2.4. Dimensional Accuracy and Tolerances:**

*   **High Dimensional Accuracy:** When properly controlled, injection moulding can achieve tight tolerances, making it suitable for precision components.
    *   **Example:** Gears, lenses, precise housings.
*   **Consistency:** The process is highly repeatable, ensuring consistent part dimensions from one shot to the next, which is crucial for mass production and assembly.
*   **Warpage:** Can occur due to uneven cooling, internal stresses, or differential shrinkage. Proper part design and process control are essential to minimize warpage.
    *   **DFMA Implication:** Uniform wall thickness, judicious use of ribs, and controlled cooling can mitigate warpage.

**2.5. Part Thickness Considerations:**

*   **Uniform Wall Thickness:** Maintaining a consistent wall thickness throughout the part is crucial. Significant variations can lead to:
    *   **Sink Marks:** Depressions on the surface opposite thicker sections, caused by shrinkage.
    *   **Warping:** Due to differential shrinkage rates between thick and thin sections.
    *   **Increased Cycle Time:** Thicker sections take longer to cool.
*   **Design Rule:** Aim for a nominal wall thickness and keep variations within a reasonable range (e.g., +/- 10-15% of the nominal thickness). (Refer to Boothroyd, Dewhurst, & Knight, 2010).

---

### 3. Design for Injection Moulding (DFM for Injection Moulding)

Applying DFMA principles to injection moulded parts focuses on simplifying tooling, reducing cycle times, minimizing defects, and facilitating downstream assembly.

**Key DFM Considerations:**
*   **Minimize Undercuts:** To avoid complex and expensive tooling (slides, lifters).
*   **Optimize Wall Thickness:** Maintain uniform thickness to prevent sink marks, warping, and reduce cycle time.
*   **Incorporate Draft Angles:** For easy part ejection.
*   **Use Ribs and Gussets:** For structural integrity without excessive thickness.
*   **Strategic Gate Placement:** To ensure proper filling, minimize weld lines, and improve aesthetics.
*   **Consider Parting Line Location:** The line where the mould halves meet. Placing it strategically can hide visible gate marks and prevent flash (material squeezed out between mould halves).
*   **Avoid Sharp Corners:** Use generous radii to reduce stress concentrations and improve material flow.
*   **Design for Assembly:** Incorporate features like snap-fits, locating pins, and self-aligning features to simplify assembly processes.

---

### 4. Comparison with Sand Casting (Contextualization)

While this module focuses on sand casting, understanding the characteristics of injection moulded parts highlights the distinct capabilities and design considerations of different processes.

| Characteristic         | Sand Casting                                   | Injection Moulding                                | Design Implications                                                                      |
| :--------------------- | :--------------------------------------------- | :------------------------------------------------ | :--------------------------------------------------------------------------------------- |
| **Material**           | Metals (iron, steel, aluminum, brass, etc.)    | Thermoplastics, some thermosets, some elastomers  | Material selection dictates properties, cost, and processing constraints.                |
| **Part Complexity**    | Moderate to High (within mould limits)         | Very High (intricate shapes, undercuts)           | Injection moulding offers greater design freedom for complex geometries.                 |
| **Tolerances**         | Moderate to Good (depends on casting process)  | Good to Excellent (highly repeatable)             | Injection moulding is preferred for parts requiring tight tolerances.                    |
| **Surface Finish**     | Rough to Moderate (depends on sand/mould)      | Smooth to Excellent                               | Injection moulding generally provides superior surface finish.                         |
| **Draft Angles**       | Generally required for metal parts             | Typically required for plastic parts              | Both processes require draft for ejection, but the magnitude and reason may differ.      |
| **Wall Thickness**     | Can be thicker; significant variation possible | Uniformity is critical; thinner sections feasible | Injection moulding emphasizes thinner, uniform walls; sand casting can accommodate thicker sections. |
| **Tooling Cost**       | Lower for simple patterns, higher for complex | High for moulds                                  | High initial tooling cost for injection moulding is offset by high-volume production. |
| **Production Volume**  | Low to High                                    | High to Very High                                 | Injection moulding is ideal for mass production.                                       |
| **Post-Processing**    | Often requires machining, finishing            | Often requires minimal post-processing            | Injection moulded parts often require less post-processing.                             |

---

### 5. Practice Questions and Exercises

**Question 1:**
Explain why uniform wall thickness is crucial for injection moulded parts. What defects can arise from significant variations in wall thickness?
**Answer:** Uniform wall thickness ensures even cooling and shrinkage, preventing defects such as sink marks (depressions opposite thicker sections) and warpage. Differential shrinkage between thick and thin sections causes internal stresses that lead to distortion.

**Question 2:**
A designer needs to create a plastic enclosure for a small electronic device. The enclosure has several mounting bosses and some integral snap-fit features. What are two key DFMA considerations for designing these features in an injection moulding context?
**Answer:**
1.  **Bosses:** The wall thickness of the bosses should be approximately 50-60% of the nominal wall thickness of the enclosure to avoid sink marks. Generous fillets should be used where the boss meets the main wall.
2.  **Snap-fits:** The length and flexibility of the snap-fit arms need to be designed carefully to ensure they can flex during assembly without breaking. Draft angles should be incorporated on the locking features of the snap-fits to facilitate moulding.

**Question 3:**
What is a "weld line" in injection moulding, and how can designers minimize their impact on part performance?
**Answer:** A weld line forms when two or more streams of molten plastic meet within the mould cavity. This meeting point can be a weak area, potentially reducing the mechanical strength and affecting the surface finish of the part. Designers can minimize their impact by:
    *   Strategically placing gates to control melt flow and prevent meeting in critical areas.
    *   Optimizing parting line location.
    *   Using higher injection pressures or temperatures to improve molecular bonding at the weld line.

---

### 6. Important Points to Remember

*   **Injection moulding is for high-volume production of plastic parts.**
*   **Uniform wall thickness is paramount.**
*   **Draft angles are essential for part ejection.**
*   **Ribs and bosses improve strength without adding bulk.**
*   **Minimize undercuts to simplify tooling.**
*   **Consider gate location for aesthetics and weld line formation.**
*   **Material properties (anisotropy, shrinkage) dictate design choices.**
*   **Understand the trade-offs between part complexity, tooling cost, and production volume.**

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 7. References from Specified Textbooks

*   **Boothroyd, Dewhurst, & Knight (2010):** This textbook provides fundamental principles of DFMA, including detailed guidelines for designing plastic parts for manufacturing processes like injection moulding. Their work on simplifying designs for assembly and reducing part counts is highly relevant. Chapter 8 "Design for Plastic Molding" would be particularly useful.
*   **Chitale & Gupta (2011):** Offers a comprehensive overview of manufacturing processes, including injection moulding. It covers material properties and selection, which are critical for designing successful injection moulded parts.
*   **Dieter (2000):** While broader in scope covering materials and processing, it provides foundational knowledge on material behaviour, stresses, and failure modes that apply to plastic part design.
*   **Molloy, Tilley, & Warman (1998):** This book likely contains practical advice on designing for manufacturability, including considerations specific to injection moulding, focusing on ease of production and assembly.

---

### 8. Alignment with Course Outcomes

*   **CO4 (Design and improve parts for better casting and injection moulding):** This topic directly addresses the injection moulding aspect of CO4. By understanding the typical characteristics of injection moulded parts, designers can make informed decisions to optimize part geometry, material usage, and feature design for improved manufacturability through injection moulding. This includes designing parts to avoid defects, simplify tooling, and enhance performance, all key elements of improving parts for a specific manufacturing process.