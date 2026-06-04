---
title: "Understanding Basics of Assembly Drawings using 2D drafting software and creating a 2D Assembled Drawing with required Sectional Views (Universal coupling or Knuckle joint)."
subject: "COMPUTER AIDED MACHINE DRAWING & 
MODELLING"
module: "Module 1: Understand the basics of machine drawing, including BIS code of practice, types of lines, dimensioning, scales of drawing, sectional views, geometric tolerances, and the importance of GD&T."
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1351d0cf4804462e5a"
status: "completed"
scrapedAt: "2026-05-20T17:47:59.029Z"
---
# COMPUTER AIDED MACHINE DRAWING & MODELLING - Module 1: Basics of Machine Drawing & Assembly Drawings

## Topic: Understanding Basics of Assembly Drawings using 2D Drafting Software and Creating a 2D Assembled Drawing with Required Sectional Views (Universal Coupling or Knuckle Joint)

---

This module introduces the fundamental principles of machine drawing, focusing on the creation and interpretation of assembly drawings. We will explore how 2D drafting software is utilized to represent the complete functionality of a machine by depicting the relationship between its various components.

---

### 1. Fundamentals of Machine Drawing (Recap and Application)

This section revisits key concepts from basic machine drawing that are crucial for understanding assembly drawings.

*   **BIS Code of Practice:**
    *   **Definition:** The Bureau of Indian Standards (BIS) provides codes of practice for technical drawings, ensuring uniformity, clarity, and standardization in engineering representations. These codes cover aspects like paper sizes, title blocks, line types, lettering, dimensioning, and projection methods.
    *   **Importance in Assembly Drawings:** Adherence to BIS codes ensures that assembly drawings are universally understood and interpreted correctly, facilitating manufacturing and assembly processes across different organizations.
    *   **Key BIS Standards (Relevant to this topic):**
        *   **IS 10714:** General principles of dimensioning.
        *   **IS 919:** Projection methods (First angle and Third angle).
        *   **IS 696:** Rules for preparation of technical drawings.
        *   **IS 3325:** General principles for dimensioning and tolerancing of diameters.
        *   **IS 2771 (Part 1 & 2):** General principles of dimensioning.
    *   **Reference:** **BIS Standards (various)** - While not a textbook, understanding the role of BIS codes is fundamental. Refer to specific IS standards for detailed information.

*   **Types of Lines:**
    *   **Definition:** Different types of lines are used in technical drawings to convey specific information about the object being represented.
    *   **Key Line Types and Their Usage in Assembly Drawings:**
        *   **Visible Lines (Continuous Thick):** Used to represent visible edges and outlines of components. In an assembly, these show the outer boundaries of the assembled parts.
        *   **Hidden Lines (Dashed Medium):** Used to represent edges and outlines that are not visible in the given view. Essential for showing internal features of components within an assembly.
        *   **Center Lines (Long and Short Dashes):** Used to indicate the center of holes, cylindrical parts, and axes of symmetry. Crucial for locating and aligning components in an assembly.
        *   **Dimension Lines (Continuous Thin):** Used to indicate the size and location of features.
        *   **Extension Lines (Continuous Thin):** Extend from the feature to the dimension line.
        *   **Leader Lines (Continuous Thin with Arrowhead):** Point to a feature and are used for annotations, notes, or dimensions.
        *   **Cutting Lines (Heavy Dashed with Alternating Long Dashes):** Indicate the location of a section view.
    *   **Importance:** Correct use of line types ensures clarity and prevents misinterpretation of the assembly.
    *   **Reference:** **Meadows, Chapter 2: Line Types and Styles.**

*   **Dimensioning:**
    *   **Definition:** The process of adding numerical values and graphical symbols to a drawing to define the size and location of features.
    *   **Key Principles in Assembly Drawings:**
        *   **Clarity and Completeness:** All necessary dimensions for manufacturing and assembly must be provided.
        *   **Avoidance of Redundancy:** Dimensions should not be repeated unnecessarily.
        *   **Placement:** Dimensions should be placed to avoid crossing other lines as much as possible.
        *   **Chain Dimensioning, Baseline Dimensioning, Coordinate Dimensioning:** Understanding these methods helps in clearly defining the relationship between parts.
        *   **Assembly Specific Dimensions:** Focus on overall assembly dimensions, critical interface dimensions between parts, and general clearances.
    *   **Reference:** **Meadows, Chapter 3: Dimensioning.** **Krulikowski, Chapter 2: Dimensioning Fundamentals.**

*   **Scales of Drawing:**
    *   **Definition:** The ratio of the size of the object on the drawing to its actual size in reality.
    *   **Types of Scales:**
        *   **Full Size (1:1):** The drawing represents the actual size.
        *   **Enlarged Scales (e.g., 2:1, 5:1):** Used for small details.
        *   **Reduced Scales (e.g., 1:2, 1:5, 1:10):** Used for large objects.
    *   **Importance in Assemblies:** Scales are chosen to fit the drawing on the standard paper size while maintaining clarity and readability of all components and their relationships. Often, multiple scales might be used for different views or detail insets within an assembly drawing.
    *   **Reference:** **Meadows, Chapter 1: Engineering Drawing Basics.**

*   **Sectional Views:**
    *   **Definition:** A view used to reveal internal features of an object that are hidden in the regular orthographic views. This is achieved by "cutting" through the object with an imaginary cutting plane.
    *   **Purpose in Assembly Drawings:** Essential for showing how components fit together internally, revealing mating surfaces, internal mechanisms, and hidden features. This aids in understanding the assembly process and internal workings.
    *   **Types of Sections:** Full Section, Half Section, Offset Section, Broken-out Section, Revolved Section, Removed Section.
    *   **Hatching:** Lines used to indicate the surface exposed by the cutting plane. Hatching patterns can also indicate different materials.
    *   **Reference:** **Meadows, Chapter 5: Sectional Views.** **Krulikowski, Chapter 6: Sectioning.**

*   **Geometric Tolerances (GT) and Dimensioning and Tolerancing (GD&T):**
    *   **Definition:** GD&T is a symbolic language used on engineering drawings to specify tolerances for features of a part. It defines the permissible variation in form, orientation, location, and profile of individual features and the datums to which they are related.
    *   **Importance in Assembly Drawings:** GD&T is critical in assemblies to ensure that mating parts fit together correctly and function as intended. It specifies how much variation is acceptable for critical dimensions and relationships between components, guaranteeing interchangeability and proper assembly.
    *   **Key Concepts:**
        *   **Form Tolerances:** Straightness, Flatness, Roundness, Cylindricity.
        *   **Orientation Tolerances:** Parallelism, Perpendicularity, Angularity.
        *   **Location Tolerances:** Position, Concentricity, Symmetry.
        *   **Profile Tolerances:** Profile of a line, Profile of a surface.
        *   **Runout Tolerances:** Circular Runout, Total Runout.
        *   **Datums:** Features of a part used as a reference for establishing tolerances.
    *   **Reference:** **Meadows, Chapters 10-20: GD&T Concepts.** **Krulikowski, Chapters 3-11: GD&T.** **Zhang Li, Chapter 3: Tolerances and Fit.**
    *   **Connection to Course Outcomes:** **CO3: Practice GD & T in models as well as drawings (Knowledge Level: K2)** - This module directly supports practicing GD&T.

---

### 2. Understanding Basics of Assembly Drawings using 2D Drafting Software

An assembly drawing shows how multiple individual parts are put together to form a complete machine or sub-assembly.

*   **Purpose of Assembly Drawings:**
    *   **Illustrate Functionality:** Show how parts interact and operate together.
    *   **Facilitate Assembly:** Provide a guide for mechanics during the assembly process.
    *   **Aid in Maintenance:** Help identify components for repair or replacement.
    *   **Enable Design Analysis:** Understand the spatial relationships and clearances between parts.
    *   **Bill of Materials (BOM):** Often include a list of all parts and their quantities.

*   **Types of Assembly Drawings:**
    *   **Complete Assembly:** Shows all parts of a machine in their assembled state.
    *   **Sub-Assembly:** Shows a group of parts that function as a unit within a larger assembly.
    *   **Installation Drawing:** Shows how a machine or sub-assembly is installed in its final location.
    *   **Exploded Assembly Drawing:** Shows individual parts separated from each other in their relative positions, making it easier to visualize how they fit together.

*   **Key Elements of an Assembly Drawing:**
    *   **Multiple Views:** Typically includes at least a main assembly view (often an isometric or orthographic projection showing the overall assembly) and necessary sectional views.
    *   **Part Identification:** Each part is usually identified with a **balloon** or bubble containing a **part number** or **item number**.
    *   **Bill of Materials (BOM):** A table that lists all components, their quantities, material, and often their source or part number.
    *   **Dimensions:** Critical overall dimensions and interface dimensions between parts. General dimensions for individual parts are usually omitted to avoid clutter; these are found on individual part drawings.
    *   **Sectioning:** Used to clarify internal relationships and hidden features.
    *   **Reference to Part Drawings:** The assembly drawing relies on individual part drawings for detailed dimensions and tolerances of each component.
    *   **Reference:** **Meadows, Chapter 6: Assembly Drawings.** **Krulikowski, Chapter 11: Assembly Drawings.**

*   **Using 2D Drafting Software for Assembly Drawings:**
    *   **Importing Part Drawings:** Individual part drawings, created in separate files, are imported or referenced into the assembly drawing file.
    *   **Placement and Alignment:** Parts are precisely positioned and aligned with respect to each other using commands like `MOVE`, `ROTATE`, `MIRROR`, and constraint tools.
    *   **Layer Management:** Different layers can be used for different types of lines, components, or annotations to improve drawing organization and control visibility.
    *   **Component Library:** Many CAD software packages allow for the creation of a library of standard or frequently used parts, which can be easily inserted into assemblies.
    *   **Annotation Tools:** Text, balloons, leader lines, and dimensions are added to convey information.
    *   **View Creation:** Orthographic views and sectional views of the entire assembly are generated from the positioned components.
    *   **Reference:** **Zhang Li, Chapter 2: CAD Fundamentals.**

---

### 3. Creating a 2D Assembled Drawing with Required Sectional Views (Universal Coupling or Knuckle Joint)

We will now focus on the practical application of creating an assembly drawing using a common example.

#### Example: Universal Coupling (or Knuckle Joint)

A universal coupling (also known as a Cardan joint or U-joint) is a mechanical joint that transmits rotational motion between two shafts that are not in alignment. A knuckle joint is used to connect two rods or shafts that need to be disconnected or connected frequently and to allow for angular movement. Both are excellent examples for practicing assembly drawing.

**Components of a Universal Coupling (Typical):**

1.  **Yoke (Two):** Forks at the end of the shafts.
2.  **Cross/Spider:** A central piece with four trunnions that connects the two yokes.
3.  **Bearing/Bush/Gland (Optional, depending on design):** To allow smooth rotation of trunnions.

**Components of a Knuckle Joint (Typical):**

1.  **Eye End (Two):** Forked ends of the rods.
2.  **Knuckle Pin/Bolt:** Connects the two eye ends.
3.  **Washer/Cotter Pin (Optional):** For securing the pin.

**Steps for Creating a 2D Assembly Drawing:**

1.  **Obtain Individual Part Drawings:** Ensure you have the 2D orthographic views (front, top, side) and any necessary sectional views for each component of the chosen mechanism. These drawings should be dimensioned and toleranced according to BIS standards.
2.  **Start a New Assembly Drawing File:** Open your 2D drafting software and create a new drawing file for the assembly.
3.  **Set Up Drawing Borders and Title Block:** Configure the drawing sheet size, borders, and title block according to BIS standards.
4.  **Import or Insert Component Drawings:**
    *   Bring in the individual part drawings (or their pre-created blocks) into the assembly drawing environment.
    *   **Example:** For a universal coupling, insert one yoke, the cross, and the second yoke.
5.  **Position and Align Components:**
    *   **Main Assembly View:** Start by placing the main components in their assembled positions. For a universal coupling, place the cross and then align the yokes with the trunnions of the cross.
    *   **Use Coincident or Concentric Constraints:** Utilize software features that allow aligning centerlines or surfaces to ensure accurate placement.
    *   **Reference:** **Zhang Li, Chapter 4: Assemblies.**
6.  **Create Necessary Orthographic Views:**
    *   Generate standard views (e.g., Front View, Top View) of the assembled components.
    *   **Example:** A front view might show the yokes in the same plane, while a top view might show them at an angle if the coupling is not perfectly aligned in the front view.
7.  **Create Required Sectional Views:**
    *   **Identify Key Areas:** Determine where internal features or relationships need to be clarified.
    *   **Draw Cutting Planes:** Use cutting line symbols (e.g., heavy dashed lines with alternating long dashes and arrows indicating viewing direction) on one of the main views to define the section.
    *   **Generate Section View:** Use the software's sectioning tools to create the sectional view.
    *   **Example:** For a universal coupling, a sectional view cut through the center of the cross and one yoke would clearly show how the trunnion fits into the yoke's bore and the bearing (if present). A section cut through the pin in a knuckle joint would show its engagement with the eye ends.
    *   **Hatching:** Apply appropriate hatching patterns to the cut surfaces. Ensure different materials have distinct hatching if multiple materials are present in the section.
    *   **Reference:** **Meadows, Chapter 5: Sectional Views.** **Krulikowski, Chapter 6: Sectioning.**
8.  **Add Balloons and Part Identification:**
    *   Place balloons pointing to each distinct part in the assembly drawing.
    *   Number these balloons sequentially (e.g., 1, 2, 3...).
9.  **Create a Bill of Materials (BOM):**
    *   Create a table in a designated area of the drawing sheet (often below the title block).
    *   Populate the BOM with:
        *   Item No. (corresponding to balloons)
        *   Part Name/Description
        *   Quantity
        *   Material (optional)
        *   Part Number (optional, references individual part drawings)
    *   **Reference:** **Meadows, Chapter 6: Assembly Drawings.**
10. **Add Necessary Dimensions:**
    *   Include overall dimensions of the assembly.
    *   Add critical dimensions that define the relationship between mating parts (e.g., clearance between trunnion and yoke bore, length of the pin).
    *   Avoid over-dimensioning individual parts; this information should be on the part drawings.
11. **Add Notes and Annotations:**
    *   Include any specific assembly instructions or remarks.
    *   Specify any required finishing operations.
12. **Review and Finalize:**
    *   Check for clarity, accuracy, and completeness.
    *   Ensure all components are correctly represented and positioned.
    *   Verify that all required views and sections are present.
    *   Confirm adherence to BIS standards.

---

### 4. Alignment with Course Outcomes

This module directly supports the following course outcomes:

*   **CO1: Apply the knowledge of engineering drawings to interpret 2D drawings and model them using software (Knowledge Level: K3).**
    *   You will interpret individual part drawings to understand how they fit together and use 2D CAD software to assemble them.
*   **CO2: Prepare standard assembly models and drawings of machine components using part drawings (Knowledge Level: K1).**
    *   You will learn the foundational principles and steps to create an assembly drawing from individual part drawings.
*   **CO3: Practice GD & T in models as well as drawings (Knowledge Level: K2).**
    *   While this module focuses on assembly *drawing*, understanding how GD&T on individual parts influences assembly fit is crucial. You'll see how dimensions and potential tolerances affect the assembly's function.
*   **CO4: Apply parameterization for the quick modeling of standard parts (Knowledge Level: K3).**
    *   When using CAD, you'll be placing and aligning existing part drawings. Understanding how these parts were parameterized in their creation can speed up this process.
*   **CO5: Model external surfaces of common objects (Knowledge Level: K3).**
    *   By assembling the individual parts, you are effectively creating a model of the external surfaces of the complete mechanism.

---

### 5. Important Points to Remember

*   **Clarity is paramount:** An assembly drawing must be easy to understand.
*   **BOM and Balloons are essential:** They link the visual representation to the actual parts.
*   **Sectional views are crucial:** They reveal internal workings and mating features.
*   **Dimensioning is specific:** Focus on overall assembly dimensions and critical interface dimensions.
*   **Adherence to standards (BIS):** Ensures consistency and global understanding.
*   **Reference individual part drawings:** The assembly drawing complements, not replaces, detailed part drawings.
*   **CAD software streamlines the process:** Use its tools for precise placement, alignment, and view generation.

---

### 6. Practice Questions & Exercises

**Question 1:**
Explain the purpose of a sectional view in an assembly drawing, and describe one specific type of sectional view that would be beneficial for understanding the assembly of a universal coupling.

**Answer:**
The purpose of a sectional view in an assembly drawing is to reveal internal features, hidden details, and how components fit together internally. For a universal coupling, a **half-section** or **full-section** cut through the center of the cross and one yoke would be highly beneficial. This would clearly show the cylindrical trunnion of the cross fitting into the bore of the yoke, illustrating the interface and any clearances or fits between these critical mating parts. It also helps visualize the bearing (if present) within the yoke.

**Question 2:**
What are the essential components typically found in the title block of a 2D assembly drawing, and what is the function of a Bill of Materials (BOM)?

**Answer:**
Essential components in the title block of a 2D assembly drawing include:
*   Drawing Title (e.g., "Universal Coupling Assembly")
*   Drawing Number
*   Revision Number/Letter
*   Date of Drawing
*   Drawn By / Checked By / Approved By
*   Material (of the overall assembly, if applicable)
*   Scale
*   Projection Method (First Angle/Third Angle)

The function of a Bill of Materials (BOM) is to list all individual components that make up the assembly. It typically includes an item number (corresponding to balloons on the drawing), the name or description of the part, the quantity of each part required for the assembly, and often the material and part number of each component. The BOM is crucial for procurement, inventory management, and ensuring all necessary parts are available for assembly.

**Question 3:**
List at least four types of lines used in technical drawings and briefly explain their significance in an assembly drawing.

**Answer:**
1.  **Visible Lines (Continuous Thick):** Represent the visible outlines and edges of the assembled parts. They define the external shape of the mechanism.
2.  **Hidden Lines (Dashed Medium):** Show internal features that are not visible in a particular view, such as the internal bore of a yoke or the engagement of a pin within an eye end. They are crucial for understanding the internal configuration.
3.  **Center Lines (Long and Short Dashes):** Indicate the axes of rotation, centers of circular features (like bores and shafts), and lines of symmetry. They are vital for correctly positioning and aligning components in the assembly.
4.  **Cutting Lines (Heavy Dashed with Alternating Long Dashes and Arrows):** These lines define the location and direction of the cutting plane used to create a sectional view, allowing the viewer to understand internal details.

**Exercise:**
Imagine you are creating a 2D assembly drawing for a simple knuckle joint. You have the individual part drawings for two eye ends and a knuckle pin.
1.  What main orthographic view would you primarily use to represent the assembled knuckle joint?
2.  What would be the primary purpose of a sectional view in this context?
3.  Describe the elements you would include in your Bill of Materials.

**Exercise Answer:**
1.  **Main Orthographic View:** A **Front View** would be the primary orthographic view. It would typically show the two eye ends aligned with the knuckle pin passing through them, illustrating the overall length and how the two components connect. An optional Top View might be included for further clarification.
2.  **Purpose of a Sectional View:** A sectional view, for instance, a **half-section** cut through the center of the eye ends and the knuckle pin, would be crucial. Its purpose is to clearly show the diameter of the knuckle pin and the corresponding bore in the eye ends, revealing the fit and clearance between these parts. It can also show any washers or cotter pins used for securing the knuckle pin.
3.  **Bill of Materials Elements:**
    *   **Item No.:** 1, 2, 3
    *   **Part Name/Description:** Eye End, Eye End, Knuckle Pin (or similar)
    *   **Quantity:** 2, 1
    *   **Material:** (e.g., Steel, Mild Steel, etc., as specified on part drawings)
    *   **Part Number:** (Referencing the individual part drawing numbers)

---
This module provides a foundational understanding of how individual parts come together to form a functional machine, emphasizing the role of clear and standardized representation through 2D assembly drawings and the power of sectional views. The practical application with examples like the universal coupling or knuckle joint reinforces these principles.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
