---
title: "Understanding Basics of Assembly Drawings using 2D drafting software and creating a 2D Assembled Drawing with required Sectional Views and prepare BOM (Stuffing Box)."
subject: "COMPUTER AIDED MACHINE DRAWING & 
MODELLING"
module: "Module 1: Understand the basics of machine drawing, including BIS code of practice, types of lines, dimensioning, scales of drawing, sectional views, geometric tolerances, and the importance of GD&T."
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1351d0cf4804462e5b"
status: "completed"
scrapedAt: "2026-05-20T17:47:59.762Z"
---
# Computer-Aided Machine Drawing & Modelling - Module 1: Basics of Machine Drawing

## Topic: Understanding Basics of Assembly Drawings using 2D Drafting Software and Creating a 2D Assembled Drawing with Required Sectional Views and Prepare BOM (Stuffing Box).

This module introduces the fundamental concepts of machine drawing, focusing on assembly drawings, their creation using 2D drafting software, and the importance of supporting documentation like Bills of Materials (BOMs). We will also touch upon the foundational principles of BIS codes, line types, dimensioning, scales, sectional views, geometric tolerances, and the significance of GD&T, as these are integral to creating accurate and understandable machine drawings.

---

### 1. Fundamentals of Machine Drawing

Machine drawing is the language of mechanical engineering, used to communicate design intent from engineers to manufacturing personnel. It provides a graphical representation of machine parts and assemblies.

#### 1.1 BIS Code of Practice for Engineering Drawings

*   **Definition:** The Bureau of Indian Standards (BIS) sets guidelines and standards for engineering drawings in India to ensure uniformity, clarity, and consistency. Adherence to these codes is crucial for interoperability and ease of understanding.
*   **Key Areas Covered by BIS:**
    *   **Drawing Sheets:** Sizes, layouts, and title blocks.
    *   **Line Types and Thicknesses:** Standardizing the appearance of different drawing elements.
    *   **Lettering and Numerals:** Ensuring legibility.
    *   **Dimensioning:** Methods for specifying sizes and locations.
    *   **Projections:** Methods for representing 3D objects in 2D (e.g., First Angle, Third Angle).
    *   **Scales:** Specifying the ratio between drawing size and object size.
    *   **Sectional Views:** Revealing internal features.
    *   **Threads and Fasteners:** Standard representations.
    *   **Welding Symbols:** Indicating weld types and locations.
*   **Importance:** Ensures that drawings are universally understood and can be accurately interpreted by anyone familiar with engineering drawing conventions, regardless of their origin.

#### 1.2 Types of Lines

Different line types convey specific information about an object. Consistent use of line types is vital for a clear drawing.

*   **Visible/Object Lines:** Thick, solid lines used to show the visible outlines of an object.
    *   **BIS Standard:** Typically drawn with a thickness of 0.5-0.7 mm.
*   **Hidden Lines:** Dashed lines used to represent features that are not visible in the current view.
    *   **BIS Standard:** Typically drawn with a thickness of 0.2-0.35 mm.
*   **Center Lines:** Thin, long-short dashed lines used to indicate the center of holes, shafts, cylinders, and axes of symmetry. They extend slightly beyond the object.
    *   **BIS Standard:** Typically drawn with a thickness of 0.2-0.35 mm.
*   **Dimension Lines:** Thin, solid lines with arrowheads or stops at the ends, used to indicate the extent of a dimension.
    *   **BIS Standard:** Typically drawn with a thickness of 0.2-0.35 mm.
*   **Extension Lines:** Thin, solid lines that extend from a point on an object to a dimension line.
    *   **BIS Standard:** Typically drawn with a thickness of 0.2-0.35 mm.
*   **Cutting Plane Lines:** Thick, long-short dashed lines with arrows at the ends, indicating the location and direction of a cut for a sectional view.
    *   **BIS Standard:** Typically drawn with a thickness of 0.5-0.7 mm.
*   **Section Lines (Hatching Lines):** Thin, solid lines drawn at an angle (usually 45 degrees) to indicate the cut surfaces in a sectional view.
    *   **BIS Standard:** Typically drawn with a thickness of 0.2-0.35 mm.
*   **Leader Lines:** Thin, solid lines with an arrowhead at one end, pointing to a feature and terminating in text, to indicate a dimension or note.
    *   **BIS Standard:** Typically drawn with a thickness of 0.2-0.35 mm.

#### 1.3 Dimensioning

Dimensioning is the process of specifying the size, location, and other features of an object on a drawing.

*   **Purpose:** To provide precise information for manufacturing and inspection.
*   **Methods of Dimensioning:**
    *   **Chain Dimensioning:** Dimensions are placed in a continuous line, forming a chain.
    *   **Baseline Dimensioning:** All dimensions originate from a common baseline or datum.
    *   **Coordinate Dimensioning:** Dimensions are given with respect to a coordinate system.
*   **Dimensioning Rules:**
    *   Dimensions should be placed outside the object whenever possible.
    *   Avoid crossing extension lines.
    *   Use clear and legible numerals.
    *   Follow BIS standards for line types, arrowheads, and placement.
*   **Reference from Textbooks:**
    *   *Geometric Dimensioning and Tolerancing* by James D. Medows: Provides comprehensive coverage of dimensioning practices, including GD&T principles.
    *   *Fundamentals of Geometric Dimensioning and Tolerancing* by Alex Krulikowski: Focuses on GD&T, which builds upon traditional dimensioning.

#### 1.4 Scales of Drawing

*   **Definition:** The ratio of the size of the drawing to the size of the actual object.
*   **Purpose:** To represent objects of various sizes clearly on standard drawing sheets.
*   **Types of Scales:**
    *   **Full Scale (1:1):** Drawing size equals object size.
    *   **Enlarging Scale (e.g., 2:1, 5:1):** Drawing is larger than the object (used for small details).
    *   **Reducing Scale (e.g., 1:2, 1:5, 1:10):** Drawing is smaller than the object (used for large objects like machines).
*   **BIS Recommendations:** Specific scale ranges are recommended for different situations.
*   **Displaying Scale:** The scale used must be clearly indicated in the title block.

#### 1.5 Sectional Views

*   **Purpose:** To reveal internal features of an object that cannot be shown in exterior views.
*   **How they are created:** An imaginary cutting plane is passed through the object, and the part of the object between the cutting plane and the viewer is removed. The cut surface is then shown hatched.
*   **Types of Sections:**
    *   **Full Section:** The cutting plane passes entirely through the object.
    *   **Half Section:** The cutting plane passes through half of the object, allowing both exterior and interior views to be shown.
    *   **Offset Section:** The cutting plane is bent to pass through features that are not in a straight line.
    *   **Broken-out Section:** Only a portion of the object is cut away to reveal internal features.
    *   **Revolved Section:** A section is revolved 90 degrees and placed within the outline of the object.
    *   **Removed Section:** A section view is removed from its original location and placed elsewhere on the drawing.
*   **Hatching:** The cut surface is hatched using thin, parallel lines (section lines). The direction and spacing of these lines are standardized. Hatching for adjacent parts in an assembly should be in opposite directions.

#### 1.6 Geometric Tolerances (GT) and GD&T

*   **Definition:** Geometric Dimensioning and Tolerancing (GD&T) is a symbolic language used on engineering drawings to specify the allowable variations in form, orientation, location, and runout of part features. It goes beyond simple dimensional tolerances to control the *shape* and *relationship* of features.
*   **Importance of GD&T:**
    *   **Clearer Communication:** Eliminates ambiguity in design intent.
    *   **Improved Interchangeability:** Ensures parts from different batches or manufacturers fit together correctly.
    *   **Reduced Inspection Costs:** Facilitates more efficient and effective inspection.
    *   **Manufacturing Efficiency:** Guides manufacturing processes to achieve desired results.
    *   **Functional Specification:** Ensures that parts function as intended in an assembly.
*   **Key Concepts in GD&T (Brief Introduction):**
    *   **Datums:** Theoretically exact planes, axes, or points of reference used to establish a coordinate system for tolerancing.
    *   **Feature Control Frames:** Rectangular frames containing symbols, tolerances, and datum references that specify the GD&T requirements for a feature.
    *   **Symbols:** Graphical symbols representing different types of geometric controls (e.g., Straightness, Flatness, Circularity, Position, Profile, Runout).
    *   **Material Condition Modifiers:** Symbols indicating how the tolerance applies at different material conditions (e.g., MMC - Maximum Material Condition, LMC - Least Material Condition).
*   **Reference from Textbooks:**
    *   *Geometric Dimensioning and Tolerancing* by James D. Medows
    *   *Fundamentals of Geometric Dimensioning and Tolerancing* by Alex Krulikowski
    *   These books are essential for in-depth understanding of GD&T.

---

### 2. Understanding Basics of Assembly Drawings Using 2D Drafting Software

Assembly drawings show how individual parts fit together to form a complete machine or sub-assembly. 2D drafting software (like AutoCAD, SolidWorks 2D, or other CAD platforms with 2D capabilities) is used to create these drawings efficiently.

#### 2.1 Purpose of Assembly Drawings

*   **Illustrate Function:** Show how components interact and the overall mechanism.
*   **Ease of Maintenance:** Help in disassembling and reassembling machinery.
*   **Bill of Materials (BOM):** List all parts and their quantities.
*   **Dimensioning for Assembly:** Provide critical assembly dimensions.
*   **Identification of Parts:** Each part is typically numbered and referenced to its part number in the BOM.

#### 2.2 Creating a 2D Assembled Drawing

This involves bringing together individual part drawings (or their representations) into a unified view.

*   **Steps:**
    1.  **Start a New Drawing:** Open your 2D CAD software and start a new drawing file.
    2.  **Import or Insert Parts:**
        *   **WBLOCK/XREF:** If individual parts are saved as separate drawing files (WBLOCKs), you can insert or xref them into your assembly drawing. XREFing is often preferred as it links the parts, so any changes to the original part file are reflected in the assembly.
        *   **Copy/Paste:** For simpler assemblies or if parts are drawn within the same project, you can copy and paste entities from one drawing to another.
    3.  **Position and Align Parts:** Carefully place each part in its correct functional position relative to other parts. Use alignment tools (e.g., "Align" command, "Move" with snap points) to ensure precise placement.
    4.  **Create Views:**
        *   **Orthographic Views:** Typically, front, top, and side views are presented.
        *   **Isometric View:** An isometric or other pictorial view is often included to give a better understanding of the 3D nature of the assembly.
    5.  **Add Sectional Views:**
        *   **Identify Critical Areas:** Determine which internal features need to be revealed for clarity (e.g., mating surfaces, clearances, internal mechanisms).
        *   **Define Cutting Planes:** Draw cutting plane lines (thick, long-short dashed) indicating where the imaginary cut is made. Use arrows to show the direction of view.
        *   **Generate Section View:** Create the sectional view based on the cutting plane. Hatch the cut surfaces. Ensure consistent hatching direction within the assembly, using opposite directions for adjacent parts.
    6.  **Add Dimensions:**
        *   **Assembly Dimensions:** Dimension critical overall dimensions, critical clearances, and overall sizes.
        *   **Hole Alignment:** Dimension the location of holes for fastening.
        *   **Avoid Over-Dimensioning:** Only dimension what is necessary for assembly and verification.
    7.  **Add Notes and Labels:**
        *   **Part Numbers (Balloons):** Use leader lines with circles (balloons) to label each distinct part and reference its number in the BOM.
        *   **Assembly Notes:** Add any special instructions or requirements for assembly.
    8.  **Create Bill of Materials (BOM):** This is a crucial part of the assembly drawing.

---

### 3. Preparing a Bill of Materials (BOM) - Example: Stuffing Box

A Bill of Materials (BOM), also known as an assembly list or parts list, is a comprehensive list of all the components and materials required to manufacture a product.

#### 3.1 Structure of a BOM

A typical BOM includes:

*   **Item Number:** Sequential number for each part.
*   **Part Number/Drawing Number:** Unique identifier for each part.
*   **Part Name/Description:** Clear name of the component.
*   **Quantity:** Number of units of that part required for one assembly.
*   **Material:** The material from which the part is made.
*   **Remarks/Specifications:** Additional notes (e.g., surface finish, heat treatment, specific vendor).

#### 3.2 Creating a BOM for a Stuffing Box Assembly

Let's consider a simple stuffing box assembly which typically includes:

1.  **Stuffing Box Body:** The main housing.
2.  **Gland Follower:** Compresses the packing.
3.  **Packing Rings:** Seal the shaft.
4.  **Gland Nut:** Secures the gland follower.
5.  **Stud Bolts:** Fasten the gland nut to the body.
6.  **Nuts:** For stud bolts.

**Example BOM for a Stuffing Box Assembly:**

| Item No. | Part Number/ Drawing No. | Part Name/Description | Quantity | Material      | Remarks          |
| :------- | :----------------------- | :-------------------- | :------- | :------------ | :--------------- |
| 1        | SB-001                   | Stuffing Box Body     | 1        | Cast Iron     | IS:210 FG 200    |
| 2        | SB-002                   | Gland Follower        | 1        | Bronze        | CuSn8            |
| 3        | SB-003                   | Packing Ring          | 3        | Graphite Yarn | As per spec.     |
| 4        | SB-004                   | Gland Nut             | 1        | Cast Iron     | IS:210 FG 200    |
| 5        | SB-005                   | Stud Bolt M16 x 60    | 2        | Mild Steel    | EN 19            |
| 6        | SB-006                   | Nut M16               | 4        | Mild Steel    | IS:1367 Class 8  |
| 7        | SB-007                   | Stud Bolt M20 x 75    | 2        | Mild Steel    | EN 19            |
| 8        | SB-008                   | Nut M20               | 4        | Mild Steel    | IS:1367 Class 8  |

**How to create a BOM in 2D CAD software:**

*   **Tables Feature:** Most 2D CAD software has a dedicated "Table" feature that allows you to create and format BOMs directly on the drawing sheet.
*   **Automated BOM Generation:** Some advanced CAD packages can automatically generate BOMs by extracting information from the drawing entities or associated metadata, especially when working with 3D models that are then used to create 2D drawings. However, for manual 2D assembly drawings, creating a table manually is common.

#### 3.3 Important Points for BOM Creation

*   **Accuracy:** Ensure all quantities and descriptions are correct.
*   **Clarity:** Use clear and concise language for part names.
*   **Completeness:** Include all necessary parts and hardware.
*   **Consistency:** Maintain a consistent format throughout the BOM.
*   **Referencing:** Clearly link items in the BOM to their respective parts on the drawing using balloons.

---

### 4. Connecting to Course Outcomes

This topic directly supports several course outcomes:

*   **CO1: Apply the knowledge of engineering drawings to interpret 2D drawings and model them using software (K3).**
    *   Understanding line types, dimensioning, scales, and sectional views is crucial for interpreting existing 2D drawings. Using 2D CAD software to create assembly drawings applies this knowledge practically.
*   **CO2: Prepare standard assembly models and drawings of machine components using part drawings (K1).**
    *   The core of this topic is preparing assembly drawings. We learn to integrate individual part drawings into a cohesive assembly and create associated documentation like BOMs.
*   **CO3: Practice GD & T in models as well as drawings (K2).**
    *   While this topic focuses on the basics, understanding the role of GD&T in ensuring proper fit and function in assemblies is introduced. Future modules will delve deeper into its practical application in drawings.
*   **CO4: Apply parameterisation for the quick modeling of standard parts (K3).**
    *   While this topic primarily deals with 2D assembly, the principle of using standard parts (like nuts and bolts) which are often parametrically modeled in 3D, and then representing them in 2D assemblies is relevant.
*   **CO5: Model external surfaces of common objects (K3).**
    *   Creating sectional views to reveal internal features, and representing the overall form of an assembly, involves understanding and accurately depicting external and internal surfaces.

---

### 5. Practice Questions & Exercises

**Question 1:**
What is the primary purpose of using different line types in an engineering drawing? Name three types of lines and their respective uses.

**Answer:**
The primary purpose of using different line types is to convey specific information about the object being represented, ensuring clarity and unambiguous interpretation.
1.  **Visible Lines (Thick, Solid):** Show the visible outlines of an object.
2.  **Hidden Lines (Dashed):** Represent features that are not visible in the current view.
3.  **Center Lines (Long-Short Dashed):** Indicate the center of holes, shafts, cylinders, and axes of symmetry.

**Question 2:**
Why are sectional views important in assembly drawings?

**Answer:**
Sectional views are important in assembly drawings to reveal internal features of components that are hidden from external views. This clarity is essential for understanding how parts interface, checking clearances, identifying internal mechanisms, and ensuring proper assembly. It helps to make complex assemblies more understandable.

**Question 3:**
You are given a task to create an assembly drawing for a simple two-part assembly (e.g., a shaft fitting into a bearing). What are the key steps you would follow using a 2D drafting software? Also, what would be the minimum required components of the BOM for this assembly?

**Answer:**
**Key Steps for 2D Assembly Drawing:**
1.  **Start New Drawing:** Open the 2D CAD software.
2.  **Import Parts:** Insert or XREF the individual part drawings (shaft and bearing).
3.  **Positioning:** Align the shaft correctly within the bearing bore, ensuring coaxial alignment and proper engagement.
4.  **Create Views:** Generate required orthographic views (e.g., front, top) showing the assembled state. Add an isometric view for better visualization.
5.  **Dimensioning:** Add critical assembly dimensions like the depth of insertion, overall length, and bore diameter if necessary for verification.
6.  **Labeling:** Use balloons to label the shaft and bearing, linking them to the BOM.
7.  **Create BOM:** Prepare the Bill of Materials.

**Minimum BOM Components:**
*   Item No.
*   Part Number/Drawing No.
*   Part Name/Description
*   Quantity

For a two-part assembly, a simple BOM might look like:

| Item No. | Part Number/ Drawing No. | Part Name/Description | Quantity |
| :------- | :----------------------- | :-------------------- | :------- |
| 1        | SHAFT-101                | Shaft                 | 1        |
| 2        | BRG-202                  | Bearing               | 1        |

**Question 4:**
What is the difference between baseline dimensioning and chain dimensioning?

**Answer:**
*   **Baseline Dimensioning:** All dimensions are referred to a common datum or baseline, ensuring that all features are located relative to a single reference point. This minimizes accumulated error.
*   **Chain Dimensioning:** Dimensions are placed in a continuous line from one feature to the next, creating a "chain" of dimensions. The total length of the chain is usually also dimensioned. This can lead to accumulated error if tolerances are not managed carefully.

**Question 5:**
Briefly explain the role of a "Gland Follower" in a Stuffing Box assembly.

**Answer:**
The Gland Follower in a Stuffing Box is a component that is pressed down onto the packing rings by the Gland Nut. Its function is to compress the packing evenly around the shaft, creating a seal and preventing leakage of fluid or pressure from the stuffing box. It ensures that the packing material conforms to the shaft and the stuffing box bore.

---

### 6. Important Points to Remember

*   **Adhere to Standards:** Always follow BIS codes (or relevant national/international standards) for clarity and consistency.
*   **Line Type Importance:** Correctly using line types is fundamental to readable drawings.
*   **Dimensioning for Manufacturing:** Dimensions should be clear, complete, and positioned logically for manufacturing and inspection.
*   **Sectional Views:** Use them judiciously to reveal hidden internal features; choose the most appropriate type of section.
*   **GD&T:** While introduced here, its principles are critical for functional designs and will be explored in greater detail.
*   **BOM Accuracy:** The BOM is a critical document for procurement and assembly; ensure its accuracy and completeness.
*   **Software Proficiency:** Familiarity with 2D drafting software is essential for creating modern engineering drawings.

---
This comprehensive set of notes covers the foundational aspects of assembly drawings, their creation in 2D CAD, and the importance of supporting documentation like the BOM, all within the context of the specified learning outcomes and course objectives.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
