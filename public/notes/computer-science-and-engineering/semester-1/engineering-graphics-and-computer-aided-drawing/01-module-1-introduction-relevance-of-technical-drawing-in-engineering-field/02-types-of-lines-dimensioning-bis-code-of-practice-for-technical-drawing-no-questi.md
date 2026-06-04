---
title: "Types of lines, Dimensioning, BIS code of practice for technical drawing. (No questions for the end semester examination)"
subject: "ENGINEERING GRAPHICS AND COMPUTER AIDED DRAWING"
module: "Module 1: Introduction: Relevance of technical drawing in engineering field."
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5c3a"
status: "completed"
scrapedAt: "2026-05-20T16:37:39.982Z"
---
# Engineering Graphics and Computer-Aided Drawing

## Module 1: Introduction - Relevance of Technical Drawing in Engineering Field

### Topic: Types of Lines, Dimensioning, and BIS Code of Practice for Technical Drawing

Welcome, everyone! In this introductory module, we're laying the foundation for everything we'll be doing in Engineering Graphics. We'll start by understanding the fundamental language of engineering drawings: **lines**. Then, we'll delve into how we communicate the size and placement of features on these drawings, which is called **dimensioning**. Finally, we'll touch upon the established rules and standards that govern technical drawings, specifically focusing on the **Bureau of Indian Standards (BIS) code of practice**.

Think of engineering drawings as the universal language that engineers speak. Just like we use words to communicate ideas, engineers use lines, symbols, and dimensions to communicate the design of a product, a machine, or even a building. Without this clear and standardized communication, it would be impossible to manufacture anything reliably. Imagine trying to build a bridge or assemble a car if every blueprint was drawn differently, with different line styles and unclear measurements! That's where our topic today becomes incredibly important.

---

### 1. Types of Lines: The Visual Vocabulary of Engineering Drawings

Lines are not just lines in engineering graphics; they are carriers of specific information. Each type of line has a distinct purpose and meaning, telling us what we're looking at and how to interpret it. Understanding these line types is crucial for correctly reading and creating technical drawings. Let's explore the common ones:

*   **Continuous Visible Line (or Object Line):** This is our primary line. It's a thick, dark, continuous line used to represent the visible edges and contours of an object. Think of the outer boundary of a chair you're looking at directly. These lines define the shape and form of the object. When you're sketching a part, these are the lines you'll be using most frequently to outline the visible features. It's the "main character" of the drawing.

*   **Hidden Line (or Dashed Line):** These are thin, dashed lines. They are used to represent edges or contours that are not visible to the observer in a particular view. Imagine looking at a solid block from the front. You see the front face clearly. But what about the edges at the back of the block that are hidden from your view? That's where hidden lines come in. They "hint" at what's behind the visible surfaces. For example, if you have a hole drilled through a block, the edges of the hole on the hidden side would be shown with dashed lines. This is a key concept that helps us understand the 3D form of an object from 2D views, directly relating to **CO1** (projection of points and lines) and **CO2** (multiview orthographic projections).

*   **Center Line:** These are thin, long-dashed dotted lines. They are used to indicate the center of circles, arcs, cylinders, and the axes of symmetry. You'll often see them passing through the center of a round hole or the shaft of a bolt. They are incredibly important for correctly locating circular features and defining axes of symmetry, which is vital for understanding the geometry of the object. Think of them as "navigational markers" for circular elements.

*   **Dimension Line:** These are thin, continuous lines with arrowheads at both ends. They are used to indicate the size or extent of a feature on the drawing. The arrowheads point to the feature being measured, and a dimension value is placed parallel to the line, usually in the middle. This is fundamental to our topic on dimensioning and directly supports **CO2** as we'll be adding these to our multiview projections.

*   **Extension Line:** These are thin, continuous lines that extend outwards from the object lines. They are used in conjunction with dimension lines to indicate the extent of the dimension. They start from the object line and go a short distance beyond the arrowhead of the dimension line. They provide a clear boundary for where the measurement begins and ends.

*   **Leader Line:** These are thin, continuous lines with an arrowhead at one end and text (like a dimension or a note) at the other. They are used to point to specific features or areas on the drawing for clarification or annotation. You might see a leader line pointing to a specific surface with a note about its finish or to a hole indicating its diameter and depth.

*   **Construction Line (or Light Construction Line):** These are very light, thin lines used as guides during the drawing process. They are erased after the drawing is completed. Think of them as your "sketching aids" – lines you might draw to help you position other lines or curves accurately, especially when dealing with complex projections.

*   **Cutting Plane Line:** These are thick, long-dashed dotted lines with arrowheads at the ends. They indicate the path of a cutting plane used in sectional views. The arrowheads show the direction in which the section is viewed. This is directly related to **CO3** (sectional views), as these lines tell us where the object has been conceptually "cut" to reveal internal details.

*   **Section Line (or Hatching Line):** These are thin, continuous lines, usually drawn at a 45-degree angle, used to fill the area of an object that has been cut by a cutting plane. They indicate that the area is solid material and not hollow. The spacing and direction of these lines can vary depending on the type of section and the material, providing valuable visual cues.

**Remember this:** The thickness and style of lines are not arbitrary. They follow specific rules to ensure clarity and avoid confusion. A thick visible line should always be thicker than a hidden line or a dimension line. Using the correct line type is like using the correct punctuation in a sentence – it ensures your meaning is understood precisely.

---

### 2. Dimensioning: Communicating Size and Location

Now that we understand the "building blocks" of an engineering drawing (the lines), let's talk about how we convey the actual size, shape, and location of features. This is the essence of **dimensioning**. A drawing without proper dimensions is like a map without distances – it shows you where things are, but not how big they are or how far apart.

The goal of dimensioning is to provide all the necessary information for manufacturing or constructing the object as intended. This means specifying sizes (like length, width, diameter, radius), locations (like the distance between centers of holes), and other geometric characteristics.

Let's look at the key elements of dimensioning:

*   **Dimension Value:** This is the numerical value indicating the size or location of a feature. It's typically placed above or near the dimension line, or in a break within the dimension line, and is read in a consistent direction (usually horizontal or vertical).

*   **Arrowheads:** As mentioned with dimension lines, these are placed at the ends of the dimension line and point to the feature being dimensioned. Their size and shape are standardized.

*   **Extension Lines:** These extend from the object to show the limits of the dimension, as we discussed earlier.

*   **Leaders:** Used for dimensions that cannot be placed easily along a dimension line.

**Types of Dimensions:**

We can broadly categorize dimensions based on what they are measuring:

*   **Size Dimensions:** These specify the physical size of an object or its features, such as overall length, width, height, diameter of a hole, or radius of a fillet.
*   **Location Dimensions:** These indicate the position of a feature relative to another feature or a datum (a reference point or line). For instance, the distance between the centers of two holes.

**Principles of Good Dimensioning:**

To ensure clarity and prevent misinterpretation, there are several fundamental principles we follow. These are well-covered in textbooks like **Bhatt's Engineering Drawing** and **Varghese's Engineering Graphics**.

1.  **Clarity and Legibility:** Dimensions should be clear, easily readable, and unambiguous. The numbers should be of a good size, and there should be sufficient space between dimension lines.
2.  **Completeness:** Every feature that needs to be manufactured must be dimensioned. No dimension should be omitted.
3.  **No Redundancy:** A dimension should be given only once. Repeating a dimension can lead to confusion or errors if the values are not identical.
4.  **Placement:** Dimensions should be placed outside the object outlines as much as possible, avoiding crossing extension lines. When placed within the object, care must be taken not to obscure important lines.
5.  **Arrowhead Style:** Arrowheads should be of a uniform size and style throughout the drawing.
6.  **Units:** While units (like mm or inches) are usually not shown on every dimension line (the overall unit for the drawing is often specified in the title block), it's critical to know what unit is being used.

**An Everyday Analogy for Dimensioning:** Think about assembling a piece of flat-pack furniture. The instruction manual will have diagrams showing each piece, and next to them, numbers indicating lengths, widths, and the distance between pre-drilled holes. Without these dimensions, you wouldn't know which screw goes where, or if you have the right size panels. Engineering drawings are the same, but for much more complex structures.

**Connecting to Course Outcomes:** Dimensioning is directly linked to **CO2** as it's an integral part of creating multiview orthographic projections. You need to dimension the length, width, and height of an object in its various views. It also touches upon **CO5** when we move to CAD, as dimensioning is a tool within the software.

---

### 3. BIS Code of Practice for Technical Drawing: The Rulebook

Just like there are rules for playing a sport or conducting a scientific experiment, there are established standards for creating technical drawings. In India, these standards are primarily set by the **Bureau of Indian Standards (BIS)**. Adhering to these codes ensures consistency, accuracy, and interoperability across different organizations and industries. If an Indian company is designing a part that will be manufactured in another country that follows ISO (International Organization for Standardization) standards, and both standards have similar principles for lines and dimensioning, the transition is much smoother.

The BIS standards for technical drawings, often referred to as IS codes, cover a wide range of aspects, including:

*   **Line Types and Thicknesses:** Specifying which lines to use for what purpose and their relative thicknesses. For example, IS 10714:1983 deals with lines in technical drawings.
*   **Lettering:** Standardized styles and sizes for text on drawings.
*   **Dimensioning Methods:** How dimensions should be presented, including the styles for dimension lines, arrowheads, and placement of dimension values. IS 1360:1977 is a relevant code here.
*   **Proportions:** Standardized proportions for arrowheads, symbols, and lettering.
*   **Projection Methods:** While not strictly a "drawing" aspect, the conventions for orthographic and pictorial projections are also standardized.
*   **Types of Drawings:** Standards for various types of drawings like mechanical, architectural, electrical, etc.

**Why is following BIS important?**

*   **Uniformity:** Everyone understands the drawings the same way.
*   **Accuracy:** Reduces errors in manufacturing and construction.
*   **Interchangeability:** Parts designed and manufactured according to standards can be easily interchanged.
*   **Legal Compliance:** In many cases, adherence to BIS codes is a legal requirement.
*   **Global Standards:** BIS often harmonizes with international standards like ISO, facilitating international trade and collaboration.

**Think of it this way:** If you were building a model airplane from a kit, the instructions and diagrams would follow a standard format. You wouldn't expect to find instructions written in shorthand or with unclear measurements. BIS codes are the equivalent of those clear, standardized instructions for all of engineering.

**Referencing the Books:** Our recommended textbooks, such as **Bhatt's Engineering Drawing** and **Varghese's Engineering Graphics**, are excellent resources that explain these BIS conventions in detail, providing examples of correct dimensioning and line usage as per the Indian standards. You'll find that the principles discussed in these books are directly derived from these codes.

**Connecting to Course Outcomes:** Understanding the BIS code helps us to correctly execute **CO1** through **CO4**. When we are projecting lines, drawing orthographic views, creating sections, or drawing isometric views, we are doing so according to established conventions that are largely dictated by standards like BIS.

---

### Quick Recap and Key Takeaways:

*   **Lines are the language:** Each line type (visible, hidden, center, dimension, etc.) has a specific meaning. Always use the correct line for the information you want to convey.
*   **Dimensioning is crucial:** It tells us the size and location of every feature. Good dimensioning is clear, complete, and unambiguous.
*   **Standards are essential:** BIS codes (and other international standards) ensure consistency and accuracy in technical drawings. They are the rules that make the language universally understood.

Mastering these foundational elements – line types, dimensioning, and understanding the importance of standards – will allow you to effectively communicate your engineering designs, whether you're sketching by hand or using sophisticated CAD software. This is the bedrock upon which all your future engineering graphics work will be built.

---

### Sample Questions with Answers

Here are a few sample questions to test your understanding, covering the concepts we've discussed:

**1. Conceptual Question:**
*   **Question:** Why are hidden lines used in engineering drawings? Explain with an example.
*   **Answer:** Hidden lines (thin, dashed lines) are used to represent edges or contours of an object that are not visible in a particular view. They help to convey the three-dimensional form of the object by indicating features that are behind visible surfaces.
    *   **Example:** Imagine drawing the front view of a cube with a hole drilled straight through its center, from front face to back face. The edges of the hole on the back face, which are not visible from the front, would be shown using hidden lines. This tells the viewer that there is a cylindrical void within the solid cube.

**2. Application-Oriented Question:**
*   **Question:** A manufacturer needs to produce a cylindrical shaft. What line type would be most appropriate for indicating the axis of this shaft, and why?
*   **Answer:** A **center line** (thin, long-dashed dotted line) would be most appropriate for indicating the axis of the cylindrical shaft. This is because center lines are specifically used to denote the center of circles, arcs, cylinders, and axes of symmetry. This helps in correctly locating the shaft and understanding its geometric properties.

**3. Exam-Oriented Question (Focus on Standards):**
*   **Question:** Briefly explain the importance of adhering to BIS codes of practice in technical drawing.
*   **Answer:** Adhering to BIS codes of practice is crucial in technical drawing for several reasons:
    *   **Uniformity and Consistency:** Ensures that drawings are interpreted consistently by everyone, regardless of their background or location.
    *   **Accuracy and Reliability:** Reduces the likelihood of errors during manufacturing or construction by providing clear, standardized guidelines.
    *   **Interchangeability:** Facilitates the interchangeability of parts and components, which is vital for mass production and assembly.
    *   **Communication:** Acts as a universal language, enabling effective communication of design intent between designers, manufacturers, and clients, both domestically and internationally (especially when harmonized with ISO standards).
    *   **Legal and Quality Assurance:** Often a requirement for quality assurance and compliance with industry regulations.

**4. Conceptual Question (Dimensioning):**
*   **Question:** If you are dimensioning the diameter of a hole on a drawing, and the hole is visible in the view you are dimensioning, what type of line would you use for the dimension line, and what would its extension lines connect to?
*   **Answer:** You would use a **dimension line** (thin, continuous line with arrowheads). The extension lines would extend outwards from the object line at the edges of the hole, and the dimension line with arrowheads would be placed between these extension lines, indicating the diameter. The dimension value would be written above or on the dimension line.

---

This concludes our foundational discussion on lines, dimensioning, and standards. Remember to practice identifying these lines and understanding how dimensions are applied. This will be invaluable as we move on to more complex drawing techniques. Keep these notes handy as you refer to your textbooks!
