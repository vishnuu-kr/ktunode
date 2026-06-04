---
title: "Understand the basics of machine drawing, including BIS code of practice, types of lines, dimensioning, scales of drawing, sectional views, geometric tolerances, and the importance of GD&T."
subject: "COMPUTER AIDED MACHINE DRAWING & 
MODELLING"
module: "Module 1: Understand the basics of machine drawing, including BIS code of practice, types of lines, dimensioning, scales of drawing, sectional views, geometric tolerances, and the importance of GD&T."
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1351d0cf4804462e57"
status: "completed"
scrapedAt: "2026-05-20T17:47:56.797Z"
---
# Computer Aided Machine Drawing & Modelling - Module 1: Basics of Machine Drawing

This module introduces the fundamental principles of machine drawing, which form the bedrock of Computer-Aided Design (CAD) and Modelling. Understanding these basics is crucial for effectively communicating design intent, ensuring manufacturability, and maintaining quality in engineering products.

## 1. Importance of Machine Drawing and BIS Code of Practice

Machine drawing is the universal language of engineering. It translates abstract design concepts into tangible representations that can be understood by designers, manufacturers, quality control personnel, and assembly technicians.

**Key Concepts:**

*   **Communication Tool:** Machine drawings convey precise information about size, shape, material, and manufacturing processes.
*   **Design Intent:** They clearly communicate the designer's vision and requirements for a component or assembly.
*   **Manufacturability:** Drawings guide the manufacturing process, ensuring parts can be produced accurately and efficiently.
*   **Quality Control:** They provide the basis for inspecting manufactured parts to ensure they meet specifications.
*   **Assembly Guidance:** Drawings illustrate how individual components fit together to form a functional assembly.

**BIS Code of Practice:**

*   **Bureau of Indian Standards (BIS):** BIS sets standards for various aspects of Indian industry, including technical drawings. These codes ensure uniformity, consistency, and clarity in engineering drawings used in India.
*   **Relevance:** Adherence to BIS codes (e.g., IS 10713 for technical drawings) is essential for interoperability and clear communication within the Indian manufacturing sector. These codes often align with international standards like ISO.
*   **Key Aspects Covered by BIS Codes:**
    *   Layout of drawings
    *   Line types and thicknesses
    *   Dimensioning practices
    *   Lettering and typography
    *   Projection methods
    *   Surface texture indications
    *   Welding symbols
    *   Geometric tolerancing

**Textbook/Reference Incorporation:**

*   While specific BIS codes might not be detailed in "Geometric Dimensioning and Tolerancing" or "Fundamentals of Geometric Dimensioning and Tolerancing," these books implicitly rely on standardized drawing practices that BIS codes aim to enforce.
*   "CAD, 3D Modeling, Engineering Analysis, and Prototype Experimentation" will likely discuss the importance of adhering to industry standards for CAD data exchange and manufacturing, which directly relates to BIS codes.

**Important Points to Remember:**

*   Machine drawings are not just pictures; they are precise technical documents.
*   Following established standards (like BIS) is crucial for effective communication.

**Course Outcomes Alignment:**

*   **CO1 (K3):** Understanding the fundamentals of engineering drawings and their role in interpreting and modelling is the first step. BIS codes provide the framework for this interpretation.
*   **CO2 (K1):** Preparing standard assembly models and drawings requires knowledge of these foundational drawing principles.

---

## 2. Types of Lines in Machine Drawing

Different types of lines are used in machine drawings to convey specific information about the object being represented. The thickness and style of the lines are standardized.

**Key Concepts & Definitions:**

*   **Visible/Continuous Thick Line:** Used to represent visible edges and outlines of an object.
    *   **Thickness:** Typically 0.5 mm to 1.0 mm (depending on the scale and drawing complexity).
    *   **Example:** The outer boundary of a shaft or a visible flange.
*   **Hidden/Dashed Thick Line:** Used to represent edges or outlines that are not visible in the current view.
    *   **Thickness:** Typically 0.3 mm to 0.5 mm.
    *   **Construction:** Composed of short, equal dashes separated by small gaps.
    *   **Example:** The diameter of a hidden hole or the outline of a recessed feature.
*   **Center Line:** Used to indicate the center of circles, arcs, cylindrical features, and axes of symmetry.
    *   **Thickness:** Typically 0.2 mm to 0.3 mm.
    *   **Construction:** Alternating long and short dashes, with the short dash at the center of the circle or arc.
    *   **Example:** The axis of a shaft, the center of a bolt hole circle.
*   **Dimension Line:** Used to indicate the size or location of a feature.
    *   **Thickness:** Typically 0.2 mm to 0.3 mm.
    *   **Construction:** A continuous line with arrowheads at both ends, showing the extent of the dimension.
    *   **Example:** A line indicating the length of a block or the diameter of a cylinder.
*   **Extension Line:** Used to extend dimension lines beyond the object outline to show the limits of the dimension.
    *   **Thickness:** Typically 0.2 mm to 0.3 mm.
    *   **Construction:** A continuous line, usually starting slightly away from the object to avoid touching.
    *   **Example:** Lines extending from the edges of a shaft to terminate the diameter dimension line.
*   **Section Line/Hatching Line:** Used to indicate the surface of a section that has been cut by a cutting plane.
    *   **Thickness:** Typically 0.2 mm to 0.3 mm.
    *   **Construction:** Thin, parallel lines drawn at an angle (usually 45 degrees) to the outline of the section. Spacing is uniform.
    *   **Example:** Filling the area of a part that has been cut in a sectional view.
*   **Leader Line:** Used to point to a feature and provide information such as notes, dimensions, or surface finish symbols.
    *   **Thickness:** Typically 0.2 mm to 0.3 mm.
    *   **Construction:** A continuous line with an arrowhead at the feature it points to.
    *   **Example:** Pointing to a hole to specify its diameter and depth.
*   **Phantom Line:** Used to indicate alternate positions of moving parts or to show related features.
    *   **Thickness:** Typically 0.2 mm to 0.3 mm.
    *   **Construction:** Alternating long and short dashes with a double dash at the ends.
    *   **Example:** Showing the extreme positions of a connecting rod.
*   **Cutting Plane Line:** Used to indicate the location and direction of a cut for a sectional view.
    *   **Thickness:** Typically 0.5 mm to 0.7 mm (thicker than visible lines).
    *   **Construction:** A long dash followed by two short dashes, with arrowheads indicating the direction of view.
    *   **Example:** A line drawn across a cylinder to show a cross-section.

**Textbook/Reference Incorporation:**

*   Both "Geometric Dimensioning and Tolerancing" by Medows and "Fundamentals of Geometric Dimensioning and Tolerancing" by Krulikowski will extensively use and explain these line types as they are fundamental to GD&T representation.
*   "CAD, 3D Modeling, Engineering Analysis, and Prototype Experimentation" will discuss how these line types are implemented in CAD software and their importance in generating professional drawings.

**Important Points to Remember:**

*   The choice of line type conveys critical information. Incorrect line usage can lead to misinterpretation.
*   Line thicknesses are important for visual hierarchy on a drawing.

**Practice Question:**

1.  Which line type is used to represent the edges of a hole that is not visible in a particular orthographic view?
2.  What is the purpose of a center line?
3.  How is a cutting plane line distinguished from other lines?

**Answers:**

1.  Hidden/Dashed Thick Line.
2.  To indicate the center of circles, arcs, and axes of symmetry.
3.  A cutting plane line is thicker than visible lines and is constructed with alternating long and short dashes, typically ending with arrowheads indicating the direction of view.

**Course Outcomes Alignment:**

*   **CO1 (K3):** Correctly identifying and using line types is essential for interpreting 2D drawings and modelling them.

---

## 3. Dimensioning in Machine Drawing

Dimensioning is the process of adding numerical values (dimensions) to a drawing to specify the size, location, and orientation of features. Accurate dimensioning is critical for manufacturability.

**Key Concepts & Definitions:**

*   **Dimensioning:** The process of adding specific measurements to a drawing.
*   **Overall Dimensions:** Dimensions that define the total size of an object.
*   **Feature Dimensions:** Dimensions that define the size and location of individual features (e.g., holes, slots, chamfers).
*   **Dimension Line:** A continuous line with arrowheads showing the extent of the dimension.
*   **Extension Line:** Lines that extend from the object to show the limits of the dimension.
*   **Leader Line:** Used to point to a feature and provide a dimension or note.
*   **Arrowheads:** Indicate the ends of a dimension line or the point to which a leader line is directed. They can be closed (filled) or open.
*   **Dimension Text:** The numerical value of the dimension.
*   **Tolerance:** The permissible variation in a dimension.

**Dimensioning Methods:**

*   **Chain Dimensioning:** Dimensions are placed sequentially, end-to-end, along a common baseline.
    *   **Pros:** Easy to read.
    *   **Cons:** Errors can accumulate; if one dimension is changed, subsequent dimensions might need recalculation.
    *   **Example:** Dimensioning a block as 10, then 20, then 30 from one end.
*   **Baseline Dimensioning:** All dimensions originate from a common baseline or datum feature.
    *   **Pros:** Reduces error accumulation; clearly shows location relative to a reference.
    *   **Cons:** Can sometimes clutter the drawing if not carefully placed.
    *   **Example:** Dimensioning features on a long part from one end.
*   **Coordinate Dimensioning:** Uses X, Y, and Z coordinates to locate features relative to an origin.
    *   **Pros:** Suitable for CNC machining and CAD modeling.
    *   **Cons:** Less intuitive for manual interpretation than chain or baseline dimensioning.
    *   **Example:** Specifying hole locations as (X10, Y5), (X25, Y5), etc.

**General Dimensioning Rules (aligned with BIS/ISO):**

*   **Clarity:** Dimensions should be clear and unambiguous.
*   **Placement:** Place dimensions outside the object outline whenever possible. Avoid crossing dimension lines with extension lines.
*   **Readability:** Numbers should be legible and placed to avoid obstruction by lines.
*   **Completeness:** All necessary dimensions should be provided.
*   **Redundancy:** Avoid unnecessary or redundant dimensions.
*   **Tolerance:** Tolerances should be specified for all dimensions that require them. (This will be further elaborated in Geometric Tolerances).

**Textbook/Reference Incorporation:**

*   **Medows & Krulikowski:** These books are heavily focused on dimensioning and tolerancing, with extensive examples of various dimensioning methods and the principles of applying tolerances to dimensions. They emphasize the importance of dimensioning for GD&T.
*   **Zhang Li:** Discusses how CAD systems handle dimensioning and how to create properly dimensioned drawings in a CAD environment.

**Important Points to Remember:**

*   Dimensioning is not just about adding numbers; it's about communicating design intent for manufacturing.
*   The goal is to provide enough information to produce the part correctly without ambiguity.
*   Tolerance is a critical part of dimensioning.

**Practice Question:**

1.  What is the main disadvantage of chain dimensioning?
2.  When would baseline dimensioning be preferred over chain dimensioning?
3.  What is the role of extension lines in dimensioning?

**Answers:**

1.  The main disadvantage of chain dimensioning is that errors can accumulate, and changing one dimension might require recalculating subsequent dimensions.
2.  Baseline dimensioning is preferred when it's important to define the location of features relative to a common reference point, reducing error accumulation and providing clarity for manufacturing.
3.  Extension lines extend from the object to indicate the limits of the dimension being applied, allowing dimension lines to be placed clear of the object.

**Course Outcomes Alignment:**

*   **CO1 (K3):** Mastering dimensioning is crucial for interpreting 2D drawings and accurately modelling them in CAD.
*   **CO2 (K1):** Understanding dimensioning is a prerequisite for preparing part drawings that can be used for assemblies.

---

## 4. Scales of Drawing

A scale is the ratio between the size of an object as represented on a drawing and its actual size. Drawings are made to scale to represent objects that are too large or too small to be drawn at their actual size.

**Key Concepts & Definitions:**

*   **Scale:** The ratio of linear dimensions on the drawing to the corresponding linear dimensions on the actual object.
*   **Full Scale:** The drawing represents the object at its actual size (e.g., 1:1).
*   **Enlarged Scale:** The drawing represents the object larger than its actual size (e.g., 2:1, 5:1, 10:1). Used for small or detailed features.
*   **Reduced Scale:** The drawing represents the object smaller than its actual size (e.g., 1:2, 1:5, 1:10). Used for large objects like buildings or machinery.

**Scale Notation:**

*   Scales are typically expressed as a ratio, e.g., 1:1, 2:1, 1:2.
*   The notation indicates: Drawing Size : Actual Size.
*   **Example:**
    *   **1:1:** Full Scale (drawing size is equal to actual size).
    *   **2:1:** Enlarged Scale (drawing size is twice the actual size).
    *   **1:2:** Reduced Scale (drawing size is half the actual size).

**BIS/ISO Recommendations for Scales:**

*   **Preferred Scales:**
    *   **Enlarged:** 50:1, 20:1, 10:1, 5:1, 2:1
    *   **Full:** 1:1
    *   **Reduced:** 1:2, 1:5, 1:10, 1:20, 1:50, 1:100, 1:200, 1:500, 1:1000
*   **Consistency:** For a given drawing, a single scale should be used as much as possible. If a larger scale is needed for a detail, it should be clearly indicated.
*   **Scale Notation on Drawing:** The scale used should be clearly indicated in the title block of the drawing.

**When to Use Different Scales:**

*   **Small Objects:** Use enlarged scales (e.g., for watch parts, micro-electronics).
*   **Medium Objects:** Use full scale (1:1) when possible for accuracy and ease of manufacturing.
*   **Large Objects:** Use reduced scales (e.g., for engines, vehicles, buildings).

**Important Points to Remember:**

*   **Always indicate the scale on the drawing.**
*   Do not dimension features based solely on the drawing's visual size; dimensions are king.
*   The scale helps in understanding the relative proportions of the object.

**Textbook/Reference Incorporation:**

*   All textbooks will touch upon scales as a fundamental aspect of technical drawing. "CAD, 3D Modeling, Engineering Analysis, and Prototype Experimentation" will specifically discuss how to set and manage scales within CAD software.

**Practice Question:**

1.  If a drawing shows a dimension of 50 mm and the scale is 1:2, what is the actual size of the feature?
2.  When would you choose an enlarged scale over a reduced scale?
3.  Where is the scale of a drawing typically indicated?

**Answers:**

1.  If the scale is 1:2 (Drawing : Actual), then 50 mm on the drawing represents 50 mm * 2 = 100 mm in reality.
2.  You would choose an enlarged scale when drawing very small objects or to show intricate details of a larger object more clearly.
3.  The scale of a drawing is typically indicated in the title block.

**Course Outcomes Alignment:**

*   **CO1 (K3):** Understanding scales is vital for interpreting the size of features on a 2D drawing and for setting up models in CAD.

---

## 5. Sectional Views

Sectional views are used to reveal internal features of an object that are not visible in the regular views. This is achieved by cutting through the object with an imaginary cutting plane and then showing the internal shape.

**Key Concepts & Definitions:**

*   **Sectional View:** A view that shows the internal structure of an object as if it were cut by a cutting plane.
*   **Cutting Plane:** An imaginary plane that cuts through the object to reveal internal details.
*   **Cutting Plane Line:** A thick line shown on the external view, indicating the location and direction of the cutting plane. Arrowheads show the direction of sight into the section.
*   **Section Lines (Hatching):** Thin, parallel lines used to fill the area of the object that has been cut by the cutting plane. The angle and spacing of section lines are standardized.
*   **Removed Section:** A section view that is not projected onto a main view but is shown separately.
*   **Revolved Section:** A section view that is revolved 90 degrees and placed directly within the outline of the object.

**Types of Sectional Views:**

*   **Full Section:** The cutting plane cuts completely through the object.
*   **Half Section:** The cutting plane cuts through half of the object, revealing both external and internal features. Typically used for symmetrical objects.
*   **Offset Section:** The cutting plane is offset at angles to pass through features that are not in line.
*   **Broken-Out Section:** Only a portion of the object is removed to expose internal details, often used when only a small internal feature needs to be shown.
*   **Dotted Section:** Used for thin sections like sheet metal parts, where solid section lines can obscure detail.

**Section Line Hatching:**

*   **General Hatching:** Thin parallel lines at 45 degrees to the main axes of the object.
*   **Direction:** The direction of hatching is reversed for adjacent parts in an assembly to distinguish them.
*   **Spacing:** Uniform spacing between lines, dependent on the size of the section.

**When to Use Sectional Views:**

*   To show the internal construction of complex parts.
*   To clarify the shape of holes, cavities, ribs, and webs.
*   To reveal the relationship between mating internal parts in an assembly.

**Textbook/Reference Incorporation:**

*   **Medows & Krulikowski:** These books provide in-depth coverage of sectional views and how they are used in conjunction with dimensioning and tolerancing to fully define a part.
*   **Zhang Li:** Discusses how to create and represent sectional views within CAD software, often enabling automatic generation of section views from 3D models.

**Important Points to Remember:**

*   Sectional views are essential for understanding the internal geometry of a part.
*   The cutting plane line and arrowheads are crucial for indicating the location and direction of the section.
*   The method of hatching can distinguish between different parts in an assembly.

**Practice Question:**

1.  What is the purpose of a sectional view?
2.  If a cutting plane passes through the center of a symmetrical shaft and the section is projected, what is it called?
3.  How can you distinguish between two adjacent parts in a sectional view using section lines?

**Answers:**

1.  The purpose of a sectional view is to reveal the internal structure and features of an object that are not visible in the regular orthographic views.
2.  If the cutting plane passes through the center of a symmetrical shaft and the section is projected, it's a full section (or a half section if only half is shown).
3.  You can distinguish between two adjacent parts in a sectional view by reversing the direction of the section lines for each part.

**Course Outcomes Alignment:**

*   **CO1 (K3):** Understanding sectional views is critical for interpreting complex 2D drawings and for creating accurate representations in CAD.
*   **CO2 (K1):** Sectional views are often required in part drawings to facilitate assembly by showing internal features.

---

## 6. Geometric Tolerances (GT) and the Importance of GD&T

Geometric Dimensioning and Tolerancing (GD&T) is a symbolic language used on engineering drawings to define and communicate engineering tolerances and design intent. It goes beyond simple dimensional tolerances to control the form, orientation, location, and profile of features.

**Key Concepts & Definitions:**

*   **Tolerance:** The permissible variation in a dimension or geometric characteristic.
*   **Geometric Tolerance:** A tolerance that controls the form, orientation, location, or profile of features.
*   **GD&T:** The system of tolerancing that uses symbols, datums, and feature control frames to specify allowable variations.
*   **Feature Control Frame:** A rectangular box containing the GD&T symbol, the tolerance value, and any applicable datums.
    *   Example: `[ Ø 0.1 | A | B | C ]` (where Ø 0.1 is the tolerance, A, B, C are datums).
*   **Datum:** A theoretically exact point, line, plane, or axis used as a reference for geometric tolerancing. Datums are established by Datum Feature Symbols.
*   **Datum Feature Symbol:** A symbol attached to a feature (e.g., a surface or hole) that designates it as a datum feature.

**Types of Geometric Tolerances (Symbols):**

GD&T is categorized into:

*   **Form Tolerances:** Control the straightness, flatness, circularity, and cylindricity of individual features.
    *   **Straightness:** Controls the deviation from a straight line.
    *   **Flatness:** Controls the deviation from a perfectly flat plane.
    *   **Circularity (Roundness):** Controls the deviation from a perfect circle.
    *   **Cylindricity:** Controls the deviation from a perfect cylinder (combines circularity and straightness).
*   **Orientation Tolerances:** Control the angular relationship or direction of features relative to datums.
    *   **Angularity:** Controls the angle between a feature and a datum.
    *   **Perpendicularity:** Controls the 90-degree relationship between a feature and a datum.
    *   **Parallelism:** Controls the relationship where two features are parallel to each other or a feature is parallel to a datum.
*   **Location Tolerances:** Control the position of features relative to datums.
    *   **Position:** Controls the location of features (like holes) within a tolerance zone.
    *   **Concentricity:** Controls the alignment of the axes of circular features.
    *   **Symmetry:** Controls the symmetry of a feature relative to a datum axis or center plane.
*   **Profile Tolerances:** Control the shape and size of complex or irregular surfaces.
    *   **Profile of a Line:** Controls the uniformity of a line.
    *   **Profile of a Surface:** Controls the uniformity of a surface.

**Why GD&T is Important:**

*   **Enhanced Interchangeability:** Ensures that parts manufactured to GD&T specifications will assemble and function correctly regardless of minor variations in manufacturing.
*   **Improved Design Clarity:** Communicates design intent more precisely than traditional +/- tolerancing.
*   **Reduced Manufacturing Costs:** By optimizing tolerances, GD&T can prevent over-tolerancing (leading to higher costs) and under-tolerancing (leading to functional failures).
*   **Clearer Functional Requirements:** Directly relates tolerances to the functional requirements of the part.
*   **Facilitates Automated Inspection:** GD&T symbols are easily interpreted by Coordinate Measuring Machines (CMMs) and other automated inspection equipment.
*   **Compliance with International Standards:** GD&T is an international standard (ISO) and is widely adopted.

**Textbook/Reference Incorporation:**

*   **Medows & Krulikowski:** These are the core texts for GD&T. They explain each symbol, its application, how to read feature control frames, datum establishment, and the underlying principles of controlling form, orientation, location, and profile.
*   **Zhang Li:** Likely discusses how GD&T can be applied and visualized in CAD models, and how it impacts engineering analysis and simulation.

**Important Points to Remember:**

*   GD&T is about controlling **form, orientation, location, and profile**, not just size.
*   **Datums are critical** for establishing a consistent reference system.
*   GD&T leads to **more functional and interchangeable parts**.

**Practice Question:**

1.  What is the main difference between traditional +/- tolerancing and GD&T?
2.  What does the symbol `Ø` before a tolerance value in a feature control frame indicate?
3.  Give an example of a location tolerance and a form tolerance.

**Answers:**

1.  Traditional +/- tolerancing only controls the size of a feature, while GD&T controls form, orientation, location, and profile in addition to size, relating these to functional requirements and datum references.
2.  The symbol `Ø` before a tolerance value indicates that the tolerance zone is circular or cylindrical in shape.
3.  **Location Tolerance Example:** Position tolerance (controlling the location of a hole). **Form Tolerance Example:** Flatness tolerance (controlling the flatness of a surface).

**Course Outcomes Alignment:**

*   **CO3 (K2):** This module directly addresses the learning outcome of practicing GD&T in models and drawings.
*   **CO1 (K3):** Understanding GD&T is essential for interpreting advanced engineering drawings and for accurately modelling them with proper tolerances.
*   **CO2 (K1):** Knowledge of GD&T is necessary for creating part drawings that define critical functional aspects for assembly.

---

## Summary of Module 1

This module has laid the groundwork for understanding computer-aided machine drawing and modelling by covering:

*   **The fundamental role of machine drawings** and the importance of adhering to standards like **BIS codes**.
*   **Various types of lines** and their specific meanings in conveying information.
*   The principles of **dimensioning**, ensuring clarity and accuracy for manufacturing.
*   The use of **scales** to represent objects of different sizes on paper or screen.
*   **Sectional views** for revealing internal features.
*   The critical concept of **Geometric Tolerances (GD&T)**, which ensures functional interchangeability and precision in engineering designs.

These concepts are intertwined and form the basis for all subsequent learning in Computer-Aided Machine Drawing & Modelling. Mastering them will enable you to effectively interpret existing drawings and create new, precise, and manufacturable designs using CAD software.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
