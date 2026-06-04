---
title: "Introduction to Manufacturing Process: Classification of manufacturing process"
subject: "DESIGN FOR MANUFACTURE AND ASSEMBLY"
module: "Module 1: Introduction to DFMA: History of DFMA"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf480446346e"
status: "completed"
scrapedAt: "2026-05-20T17:59:13.792Z"
---
# DESIGN FOR MANUFACTURE AND ASSEMBLY (DFMA)
## Module 1: Introduction to DFMA
### Topic: Introduction to Manufacturing Process: Classification of Manufacturing Process

---

### **1.1 Introduction to Manufacturing Processes**

Manufacturing processes are the fundamental steps involved in transforming raw materials into finished products. The choice of manufacturing process significantly impacts product cost, quality, performance, and manufacturability. Understanding these processes is crucial for effective Design for Manufacture and Assembly (DFMA), as design decisions directly influence the feasibility, efficiency, and cost of production.

**Key Concept:** The goal of manufacturing is to create tangible goods that meet specific functional requirements and market demands.

**Reference:**
*   **Boothroyd, Dewhurst, & Knight, Chapter 1:** Likely introduces the broad context of manufacturing and its relation to design.
*   **Chitale & Gupta, Chapter 1:** Often provides a foundational overview of manufacturing systems and processes.

---

### **1.2 Classification of Manufacturing Processes**

Manufacturing processes can be broadly classified based on the fundamental way in which material is shaped or modified. This classification helps in understanding the capabilities and limitations of different manufacturing approaches.

**Key Concept:** The classification aims to categorize processes by their core material transformation mechanism.

**Primary Classification Categories:**

1.  **Forming Processes:** These processes involve shaping or deforming a material without significant removal or addition of material. The inherent shape of the material is altered.
2.  **Subtractive Processes:** These processes involve removing unwanted material from a workpiece to achieve the desired shape.
3.  **Additive Processes:** These processes involve adding material layer by layer to build up a complex shape from raw material.
4.  **Joining Processes:** These processes involve permanently or semi-permanently bonding two or more components together.

---

### **1.3 Detailed Classification and Examples**

Let's delve deeper into each classification with examples and relate them to DFMA principles.

#### **1.3.1 Forming Processes**

These processes manipulate the material's shape through plastic deformation, often at elevated temperatures (hot working) or room temperature (cold working).

**Sub-categories and Examples:**

*   **Casting:** Molten material is poured into a mold cavity and solidifies to take the shape of the mold.
    *   **Examples:** Sand casting (engines, machine bases), die casting (automotive parts, appliance casings), investment casting (turbine blades, jewelry).
    *   **DFMA Relevance (CO4):** Designing for castability involves considerations like draft angles, uniform wall thickness, avoiding sharp corners, and minimizing undercuts. This directly impacts the ease of mold removal and the quality of the cast part.
    *   **Textbook Reference:** *Chitale & Gupta* and *Dieter* extensively cover casting processes. *Boothroyd, Dewhurst, & Knight* will discuss design guidelines for parts produced by casting.

*   **Forging:** Material is shaped by localized compressive forces, typically between dies.
    *   **Examples:** Connecting rods, crankshafts, hand tools, aircraft components.
    *   **DFMA Relevance:** Forging can produce parts with excellent mechanical properties and intricate shapes. Design considerations include draft angles, avoiding deep impressions, and managing parting lines.
    *   **Textbook Reference:** *Chitale & Gupta* and *Dieter* discuss forging techniques.

*   **Metal Forming (Bulk Deformation):** Processes that significantly change the cross-section of a material.
    *   **Rolling:** Reducing the thickness of a material by passing it between rollers (e.g., sheets, structural beams).
    *   **Extrusion:** Pushing material through a die to create a desired cross-sectional shape (e.g., aluminum profiles for windows, conduits).
    *   **Drawing:** Pulling material through a die to reduce its cross-section and increase its length (e.g., wires, seamless tubes).
    *   **DFMA Relevance:** These processes are efficient for producing standard shapes or continuous lengths. Design should leverage these standard profiles where possible.

*   **Sheet Metal Forming:** Shaping thin sheets of metal.
    *   **Stamping/Pressing:** Cutting, bending, and drawing sheet metal into desired shapes using dies and presses.
    *   **Examples:** Car body panels, appliance housings, ductwork.
    *   **DFMA Relevance:** Designing for sheet metal involves minimizing the number of operations, avoiding complex bends, and considering material springback.
    *   **Textbook Reference:** *Chitale & Gupta* and *Bralla* provide significant detail on sheet metal design.

#### **1.3.2 Subtractive Processes**

These processes remove material to achieve the final shape. Machining is the most common type.

**Sub-categories and Examples:**

*   **Machining:** Using cutting tools to remove material.
    *   **Turning:** Rotating a workpiece against a stationary cutting tool (e.g., shafts, cylindrical parts).
    *   **Milling:** Using a rotating cutting tool to remove material from a workpiece (e.g., flat surfaces, slots, complex contours).
    *   **Drilling:** Creating holes.
    *   **Grinding:** Abrasive process for achieving high surface finish and dimensional accuracy.
    *   **Examples:** Engine blocks, gears, precision components, molds.
    *   **DFMA Relevance (CO3):** Designing for machinability is paramount. This includes minimizing the number of features requiring complex machining, avoiding deep and narrow slots, specifying appropriate tolerances, and considering tool access. Reducing the need for secondary machining operations is a key DFMA goal.
    *   **Textbook Reference:** *Chitale & Gupta* and *Dieter* offer comprehensive coverage of machining. *Boothroyd, Dewhurst, & Knight* and *Bralla* focus heavily on design guidelines for machinable parts.

*   **Cutting:** Processes that separate material.
    *   **Sawing:** Using a toothed blade.
    *   **Shearing:** Cutting sheet metal with opposing blades.
    *   **Laser Cutting, Plasma Cutting, Waterjet Cutting:** High-energy beam or jet processes.
    *   **DFMA Relevance:** Efficient cutting is important for blank preparation and material separation.

#### **1.3.3 Additive Processes (Additive Manufacturing/3D Printing)**

These processes build objects layer by layer from digital models.

**Sub-categories and Examples:**

*   **Fused Deposition Modeling (FDM):** Extruding thermoplastic filament layer by layer.
*   **Stereolithography (SLA):** Curing liquid photopolymer with a UV laser.
*   **Selective Laser Sintering (SLS):** Fusing powder material with a laser.
*   **Material Jetting:** Depositing droplets of build material.
*   **Examples:** Prototypes, customized medical implants, complex geometries not feasible by other methods.
*   **DFMA Relevance:** Additive manufacturing offers design freedom for highly complex shapes, often integrating multiple functions into a single part. However, design for manufacturability in this context involves considering build orientation, support structures, surface finish, and post-processing requirements.
*   **Textbook Reference:** While not as dominant in older editions, newer editions of textbooks or supplementary materials might cover AM. *Molloy, Tilley, & Warman* (1998) might not extensively cover modern AM but could touch upon precursor concepts.

#### **1.3.4 Joining Processes**

These processes combine multiple parts to create a larger assembly.

**Sub-categories and Examples:**

*   **Welding:** Fusing materials using heat, pressure, or both.
    *   **Fusion Welding:** Melting base materials and often adding filler material (e.g., arc welding, gas welding).
    *   **Solid-State Welding:** Joining materials without melting, using pressure and/or deformation (e.g., friction welding, ultrasonic welding).
    *   **Resistance Welding:** Using electrical resistance and pressure (e.g., spot welding car bodies).
    *   **Examples:** Automotive chassis, pipelines, pressure vessels, electronic components.
    *   **DFMA Relevance (CO5):** Designing for welded joints involves specifying appropriate joint types (e.g., butt, fillet), ensuring accessibility for the welding process, controlling heat input, and minimizing distortion.
    *   **Textbook Reference:** *Chitale & Gupta* and *Dieter* cover welding. *Boothroyd, Dewhurst, & Knight* and *Bralla* offer design guidelines for welded assemblies.

*   **Brazing and Soldering:** Joining metals using a filler metal that melts below the melting point of the base metals.
    *   **Examples:** Joining pipes, electrical connections, heat exchangers.
    *   **DFMA Relevance:** Designing for these processes requires ensuring proper joint clearance for filler metal flow and accessibility for heating.

*   **Adhesive Bonding:** Using adhesives to join materials.
    *   **Examples:** Bonding composite materials, joining dissimilar materials.
    *   **DFMA Relevance:** Design for bonding involves ensuring adequate surface area for adhesion, proper surface preparation, and minimizing stress concentrations at bond lines.

*   **Mechanical Fastening:** Using mechanical elements to join parts.
    *   **Bolts, Screws, Rivets, Pins, Clips:**
    *   **Examples:** Assembling furniture, machinery, electronics.
    *   **DFMA Relevance (CO1, CO2):** This is a core area of DFMA. Designing for manual assembly involves minimizing the number of fasteners, using self-tapping screws or snap-fits, standardizing fastener types, ensuring easy access for tools, and designing for self-location and self-fastening features.
    *   **Textbook Reference:** *Boothroyd, Dewhurst, & Knight* is foundational for manual assembly design. *Molloy, Tilley, & Warman* also addresses assembly aspects. *Whitney* provides insights into mechanical assemblies.

---

### **1.4 Importance of Manufacturing Process Selection in DFMA**

The choice of manufacturing process is not independent of design; it is intrinsically linked. Early consideration of manufacturing capabilities during the design phase leads to:

*   **Reduced Costs:** Optimizing for specific processes can minimize material waste, reduce processing time, and lower tooling costs.
*   **Improved Quality:** Selecting processes well-suited to the desired part geometry and material properties leads to better dimensional accuracy and surface finish.
*   **Enhanced Manufacturability:** Designs that are easy to produce with minimal special tooling or complex operations are inherently more manufacturable.
*   **Faster Time-to-Market:** Streamlined production processes shorten manufacturing lead times.
*   **Reduced Assembly Effort:** Designing parts that are easy to handle, orient, and fasten directly contributes to efficient assembly.

**Key Concept:** DFMA advocates for designing *with* the manufacturing process in mind, not as an afterthought.

**Important Point to Remember:** The best manufacturing process for a part depends on factors like desired quantity, material, complexity, cost targets, and required performance.

---

### **1.5 Alignment with Course Outcomes (COs)**

*   **CO1: Apply the knowledge of Design Guidelines for Manual Assembly.**
    *   This topic lays the groundwork by introducing the broad range of processes that create parts. Understanding how parts are made (e.g., casting, machining, stamping) informs how they will behave during manual assembly (e.g., ease of handling, chamfers for insertion, self-locating features). Mechanical fastening, a key joining process, is central to manual assembly design.
*   **CO2: Apply the knowledge of General design principles for manufacturability.**
    *   The entire classification of manufacturing processes directly addresses manufacturability. Designing to suit forming, subtractive, additive, and joining processes (e.g., uniform wall thickness in casting, avoiding deep pockets in machining, accessible joints for welding) is the essence of general design for manufacturability.
*   **CO3: Design and improve parts for better machinability.**
    *   This topic introduces machining as a major subtractive process. Understanding its capabilities (e.g., cutting, milling, turning) allows designers to make conscious choices to simplify machining operations, reduce machining time, and minimize errors by designing features that are easily accessible to cutting tools.
*   **CO4: Design and improve parts for better casting and injection moulding.**
    *   Casting is a key forming process discussed. Understanding its principles (mold filling, solidification, draft angles) directly enables the design of parts that are easier to cast, resulting in fewer defects and lower production costs. Injection moulding, a closely related process for plastics, shares many similar design considerations.
*   **CO5: Design and improve parts for better welded joints.**
    *   Welding is a critical joining process. This topic introduces different welding methods and highlights the importance of designing joints that are accessible, efficient to weld, and minimize distortion, thereby improving the quality and cost-effectiveness of welded assemblies.

---

### **1.6 Practice Questions and Exercises**

**Question 1:**
Describe the fundamental difference between forming processes and subtractive processes, providing one example for each.

**Answer 1:**
*   **Forming Processes:** Shape material by plastic deformation without significant material removal or addition. Example: **Casting** (molten metal poured into a mold).
*   **Subtractive Processes:** Remove material from a workpiece to achieve the desired shape. Example: **Machining** (using a cutting tool to shape a metal block).

**Question 2:**
A product requires precise internal features and high surface finish. Which manufacturing process classification would be most suitable for creating these features, and what are two key DFMA considerations for parts made this way?
**(Aligns with CO3)**

**Answer 2:**
*   **Suitable Classification:** Subtractive processes, specifically **Machining** (e.g., milling, grinding).
*   **DFMA Considerations for Machining:**
    1.  **Tool Access:** Ensure cutting tools can reach all surfaces to be machined. Avoid deep, narrow pockets or complex internal geometries that are difficult or impossible to machine.
    2.  **Tolerances and Surface Finish:** Specify realistic and achievable tolerances and surface finishes. Overly tight specifications increase machining time and cost. Design features that inherently have good surface finish or can be achieved with less demanding machining operations.

**Question 3:**
You are designing a new housing for an electronic device that will be mass-produced. The housing is a relatively complex shape. Which forming process classification would you consider, and what are two design guidelines to improve its manufacturability through that process?
**(Aligns with CO4)**

**Answer 3:**
*   **Considered Classification:** Forming Processes, likely **Casting** (if metal) or **Injection Moulding** (if plastic).
*   **Design Guidelines for Casting/Injection Moulding:**
    1.  **Uniform Wall Thickness:** Maintain consistent wall thickness throughout the part to prevent warping and ensure uniform cooling/solidification, reducing stress.
    2.  **Draft Angles:** Incorporate appropriate draft angles on all vertical surfaces to facilitate easy removal of the part from the mold cavity.
    3.  **Minimize Undercuts:** Avoid undercuts (features that would prevent easy mold opening) unless necessary and designed with complex mold actions.

**Question 4:**
What is the primary advantage of designing parts for additive manufacturing compared to traditional subtractive or forming processes, and what is one challenge associated with DFMA in this context?

**Answer 4:**
*   **Primary Advantage:** Design freedom to create highly complex geometries, integrated features, and customized parts that are often impossible or prohibitively expensive with traditional methods.
*   **DFMA Challenge:** Consideration of build orientation, the need for support structures, potential surface finish issues, and post-processing requirements, which can add complexity and cost.

---

### **1.7 Important Points to Remember**

*   Manufacturing processes are the backbone of product realization; understanding them is fundamental to DFMA.
*   The four main categories of manufacturing processes are Forming, Subtractive, Additive, and Joining.
*   Each process category has specific strengths, weaknesses, and associated design considerations.
*   Early selection and consideration of manufacturing processes during the design phase are critical for cost reduction, quality improvement, and overall product success.
*   DFMA principles aim to make designs compatible with and optimized for the chosen manufacturing processes.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
