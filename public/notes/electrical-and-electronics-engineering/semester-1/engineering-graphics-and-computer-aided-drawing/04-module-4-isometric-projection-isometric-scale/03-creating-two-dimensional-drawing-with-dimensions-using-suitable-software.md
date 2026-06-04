---
title: "Creating two-dimensional drawing with dimensions using suitable software."
subject: "ENGINEERING GRAPHICS AND COMPUTER AIDED DRAWING"
module: "Module 4: Isometric Projection:  Isometric scale"
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213e9ece2bdd875f9447"
status: "completed"
scrapedAt: "2026-05-23T16:02:04.979Z"
---
# ENGINEERING GRAPHICS AND COMPUTER AIDED DRAWING

## Module 4: Isometric Projection: Isometric Scale

### Topic: Creating Two-Dimensional Drawings with Dimensions Using Suitable Software

Welcome, everyone! Today, we're diving into a crucial part of our Engineering Graphics journey: taking the principles of isometric projection, especially that fascinating isometric scale we've been discussing, and translating them into practical, dimensioned 2D drawings using modern software. This isn't just about drawing lines; it's about communicating design intent accurately and efficiently. As we move through this topic, keep our Course Outcomes (COs) in mind, especially **CO4: Prepare pictorial drawings using the principles of isometric projection** and **CO5: Sketch simple drawings using CAD tools**. We're bridging the gap between visualizing in 3D and documenting it precisely in 2D.

Think about it: when an engineer designs a component, they need to create a drawing that tells someone else exactly how to make it, how big it should be, and what its features are. That's where dimensioning comes in. And when we talk about pictorial drawings, like isometrics, software tools become our best friends.

### Understanding the "Why": From Isometric Principles to Software Application

We've learned about isometric projection – the method of representing three-dimensional objects in two dimensions, where the angles between the isometric axes are 120 degrees. Remember, in true isometric projection, all three axes (length, width, height) are foreshortened by the same factor. However, in **visual isometric drawing**, which is what we commonly use for practical representation, we don't foreshorten the axes. Instead, we use the *true lengths* of lines parallel to the axes.

This brings us to the **isometric scale**. As discussed in our previous sessions, if we were to use a true isometric scale (where every dimension is multiplied by approximately 0.815), our drawings would appear quite small and difficult to read, especially with fine details. So, what do we typically do? We use the **full scale** for dimensions parallel to the isometric axes, but we *represent* these full-scale lengths at the correct isometric angles. This is a crucial convention to remember. The isometric scale itself is a special ruler, typically constructed by taking a regular scale and marking the lengths along the isometric axes. For instance, if you want to represent 100mm, you'd mark it on the isometric axis, but its actual projected length would be roughly 81.5mm on a true isometric drawing. However, for ease of drafting and interpretation, especially in computer-aided drafting, we often draw isometrics using full-scale dimensions along the isometric axes, making them **visual isometrics**. This topic focuses on applying these principles using CAD.

#### Key Concepts to Revisit:

*   **Isometric Axes:** Three axes, mutually inclined at 120 degrees to each other. One is vertical, and the other two are at 30 degrees to the horizontal.
*   **Isometric Lines:** Lines parallel to any of the isometric axes.
*   **Isometric Plane:** Planes parallel to the planes formed by any two isometric axes.
*   **Non-Isometric Lines:** Lines not parallel to any of the isometric axes. These are not drawn to scale in an isometric projection.
*   **Visual Isometric:** An isometric drawing where dimensions parallel to the axes are represented at their full, true lengths, but at the correct isometric angles. This is the common practice.

### Introduction to CAD Software for Drawing

Computer-Aided Design (CAD) software has revolutionized technical drawing. Instead of rulers, compasses, and T-squares, we use digital tools. Think of it like switching from sketching with a pencil to using a sophisticated digital pen and canvas. Some popular CAD software includes AutoCAD, SolidWorks, CATIA, Fusion 360, and even simpler 2D CAD programs. For this topic, we'll focus on the general principles applicable to most 2D CAD packages, often using AutoCAD as a reference, as it's widely used in the industry and covered in our reference books like Kulkarni, Rastogi, and Sarkar's "Engineering Graphics with AutoCAD."

The goal is to create a 2D representation of a 3D object in isometric view and then add precise dimensions so that the object can be manufactured. This directly relates to **CO5: Sketch simple drawings using CAD tools** and demonstrates the application of **CO4: Prepare pictorial drawings using the principles of isometric projection**.

### Step-by-Step Process: Creating an Isometric Drawing with Dimensions in CAD

Let's walk through how we would typically create an isometric drawing of a simple object, say, a cube or a block with some features, and then add dimensions. Imagine we're designing a simple wooden block with a hole drilled through it.

#### 1. Setting Up the Drawing Environment

*   **Units:** First, always set your drawing units. Whether it's millimeters, inches, or meters, consistency is key. Most CAD software will prompt you for this. Let's assume we're working in millimeters.
*   **Orthographic vs. Isometric Modes:** CAD software typically operates in an orthographic view by default. We need to switch to an isometric drafting mode. This is often accessible through a toolbar or a command. In AutoCAD, this is typically controlled by the "Isodraft" command or by setting the cursor to display in isometric planes. The key is to make your drawing cursor follow the isometric axes.

#### 2. Drawing the Basic Isometric Form (Using Full Scale)

Let's take a simple example: a block of dimensions 50mm (length) x 30mm (width) x 40mm (height).

*   **Starting Point:** Choose an origin point on your screen.
*   **Drawing the Base:**
    *   Use the `LINE` command.
    *   Draw a line representing the length. Since it's an isometric view, this line will be drawn along one of the isometric axes. In "visual isometric," we draw this at full scale, so it's 50mm long. Typically, one isometric axis is vertical, and the other two are at 30 degrees to the horizontal. The isometric cursor will guide you.
    *   From the end of the first line, draw the line representing the width. Again, use the isometric cursor to align it correctly and specify a length of 30mm.
    *   Complete the rectangular base by drawing the third line to connect the ends, representing the back edge of the base.
*   **Extending Upwards (Height):**
    *   From the corners of the base, draw lines representing the height. These lines are vertical in isometric projection. Specify a height of 40mm.
    *   Connect the top points to form the isometric representation of the block.

**Remember this:** When using visual isometrics in CAD, you're drawing the object as if it were a 3D object viewed isometrically, but you're using its true dimensions (e.g., 50mm, 30mm, 40mm) for lengths parallel to the axes. The software handles the angular representation.

#### 3. Adding Features: Circles and Other Shapes

Suppose our block has a circular hole of diameter 20mm drilled through the center of one of the 30mm x 40mm faces, running parallel to the 50mm length.

*   **Isometric Circles:** Circles in isometric projection appear as ellipses. CAD software has specific commands for drawing isometric ellipses.
    *   You'll typically use an "ISOCIRCLE" or "ELLIPSE" command with an isometric option.
    *   You need to specify the plane in which the circle lies. For a hole passing through a face, the ellipse will lie on a plane parallel to the face.
    *   You'll then specify the center of the ellipse and its diameter (or radius). The software automatically draws the ellipse with the correct elliptical shape and orientation for the isometric view.

*   **Creating the Hole:**
    *   You would draw the isometric ellipse on the face where the hole starts.
    *   Then, you would use an "EXTRUDE" or "PATH" command (if using a 3D-modeling CAD, but for 2D, you might draw a second ellipse at the other end and connect them, or simply indicate the hole). In a pure 2D isometric drawing, we often show the hole as an ellipse on the entry face and a smaller ellipse on the exit face (if visible), or we might simply indicate its presence and size using dimensioning. For simplicity in 2D sketching, drawing the ellipse and perhaps a faint line showing its depth is common.

#### 4. Dimensioning the Isometric Drawing

This is where **CO5: Sketch simple drawings using CAD tools** truly shines. Dimensions are critical for manufacturing and convey the *true* size and shape of the object.

*   **Dimensioning Tools:** CAD software provides a suite of dimensioning tools. For isometric drawings, we typically use **aligned dimensions**.
    *   **Aligned Dimension:** This tool allows you to draw a dimension line that is parallel to the object line or feature you are dimensioning, even if that feature is not horizontal or vertical in the standard orthographic sense.
    *   **Linear Dimension:** While a standard linear dimension (horizontal or vertical) can be used for edges that *are* aligned with the isometric axes and represent true lengths, the aligned dimension is more versatile for isometric drawings.
*   **Dimensioning Conventions:**
    *   **Placement:** Dimensions should be placed outside the object lines whenever possible. Avoid crossing dimension lines with object lines.
    *   **Clarity:** Use clear arrowheads and legible text. The text height and arrowhead size should be standardized for readability.
    *   **Isometric Dimensioning:** When dimensioning lines parallel to the isometric axes, the dimension text should ideally be aligned with the axis it represents, or placed so it's clearly readable. Most CAD systems allow you to rotate dimension text to follow the isometric axes. For example, a dimension along the length axis might be slightly tilted to match the visual angle of that axis.
    *   **Dimensioning Circles:** For isometric circles (ellipses), you dimension their actual diameter or radius, usually with a leader line pointing to the center or circumference. The diameter symbol (Ø) is crucial.

**Example Dimensioning:**

*   Select the `DIMLINEAR` or `DIMALIGNED` command.
*   For the length of 50mm: Click the start point of the 50mm edge, then the end point. Drag the dimension line away from the object. The text "50" will appear. You might then use a command to rotate this text to align with the isometric axis.
*   Similarly, dimension the width (30mm) and height (40mm) using the appropriate dimensioning tool.
*   For the hole: Use a leader line (`DIMLEADER`) to point to the center of the isometric ellipse representing the hole, and then use a linear dimension with the diameter symbol (Ø20) to indicate its size.

**Why is this important?** The dimensions we add are *true* dimensions, not the foreshortened isometric scale values. So, we dimension the 50mm edge as "50", even though its visual length on the screen might appear shorter due to projection. This is the essence of visual isometrics and how we use CAD for practical documentation. The software ensures the graphical representation matches the stated dimensions by drawing the lines at the correct isometric angles.

#### 5. Adding Annotations and Final Touches

*   **Text:** Add notes, labels, or titles using the `TEXT` command.
*   **Hatching:** If you have sectional views (though this topic focuses on isometric), hatching would be applied using isometric hatching patterns if needed for clarity in an isometric context.
*   **Layers:** Organize your drawing by using layers. Object lines, hidden lines (if shown), dimensions, and text should ideally be on different layers for better control.

### Relating to Course Outcomes and Textbooks

*   **CO4: Prepare pictorial drawings using the principles of isometric projection:** This entire process is a direct application of **CO4**. We are using the fundamental understanding of isometric projection – the 120-degree angles, the parallel lines – and applying it within the CAD environment. The software essentially automates the geometric constructions that we might perform manually with instruments, ensuring accuracy.
*   **CO5: Sketch simple drawings using CAD tools:** This topic is also the practical realization of **CO5**. We're using commands like `LINE`, `CIRCLE` (or `ELLIPSE` for isometric), and `DIMENSION` to create a functional drawing. The reference book, "Engineering Graphics with AutoCAD" by Kulkarni, Rastogi, and Sarkar, is invaluable here, detailing specific commands and workflows within AutoCAD to achieve these tasks. Books like Bhatt's "Engineering Drawing" provide the foundational theory of dimensioning and projection that we are now implementing digitally.

### Common Pitfalls and Exam Tips

*   **Incorrect Isometric Angles:** Ensure your CAD software is set to draw in isometric mode correctly. Mistaking orthographic lines for isometric ones is a common error.
*   **Dimensioning:**
    *   **Using True Scale vs. Visual Isometrics:** Remember the convention for practical drawings is usually visual isometrics where we dimension true lengths. Misunderstanding this can lead to confusion about whether to apply the 0.815 factor (which is generally not done for dimensions in visual isometrics).
    *   **Dimensioning Non-Isometric Lines:** Never dimension lines that are not parallel to the isometric axes. These lines do not represent true lengths in isometric projection.
    *   **Clarity:** Ensure dimensions don't overlap object lines and are easy to read.
*   **Isometric Circles:** Always use the specific isometric ellipse command for circles in isometric views. Drawing a regular ellipse or a circle will look incorrect.
*   **Units:** Double-check your units before starting and ensure all dimensions are consistent.

**Exam Tip:** You might be asked to draw a simple object in isometric view and then add specific dimensions. The key is to correctly represent the object's shape using isometric principles in CAD and then accurately apply the dimensioning tools as per standard practice. Always show the *true* dimensions, not scaled ones, unless specifically asked to use a true isometric scale for representation.

### Summary

Creating dimensioned 2D drawings in CAD from isometric principles is a blend of understanding theoretical projection, mastering software tools, and adhering to industry standards for clarity and accuracy. We start by setting up our isometric environment, draw the object using true lengths parallel to the isometric axes, add features like isometric ellipses, and critically, dimension these features using aligned dimensions to convey the object's exact size. This process bridges the gap between visualizing a 3D object and documenting it for manufacturing, directly fulfilling the learning objectives of our module and course outcomes.

---

## Sample Questions and Answers

Here are a few questions to test your understanding, covering both conceptual and application-oriented aspects.

**Q1. In a visual isometric drawing created using CAD software, should the dimensions placed along the isometric axes be scaled down by the isometric projection factor (approx. 0.815)?**

**Answer:** No. In a visual isometric drawing, which is the common practice in CAD for practical representation, dimensions parallel to the isometric axes represent the **true lengths** of the object. The software automatically draws these lines at the correct isometric angles, so we dimension them using their actual, full-scale values (e.g., 50mm, not 50mm * 0.815). This convention is crucial for clear communication of design intent.

**Q2. When drawing a circle on a face of an object in an isometric view using CAD, what geometric shape would you typically create, and what command would be used?**

**Answer:** In an isometric view, a circle drawn on a plane parallel to one of the isometric planes appears as an **ellipse**. CAD software usually provides a specific command, often called "ISOCIRCLE" or an "ELLIPSE" command with an isometric option, to draw these isometric ellipses correctly. You would need to specify the plane on which the ellipse lies (e.g., the front, top, or side face plane) and its diameter or radius.

**Q3. A student is asked to dimension a 100mm long edge of a block that is aligned with one of the isometric axes in a visual isometric drawing. They use a standard horizontal dimension command in AutoCAD and place the dimension text horizontally. Is this the correct approach, and why?**

**Answer:** This is partially correct but could be improved for clarity. Using a dimension command is appropriate. However, simply placing the dimension text horizontally might not align it well with the isometric axis if the axis itself is not horizontal (which it isn't in a standard isometric view where one axis is vertical). The **aligned dimension** command (`DIMALIGNED`) is often preferred as it can create a dimension line parallel to the object's edge. Furthermore, the dimension text itself can often be rotated to better align with the direction of the isometric axis it represents, enhancing readability. So, while the numerical value is correct, the presentation could be more refined using `DIMALIGNED` and text rotation.

**Q4. Explain the primary difference between using a true isometric scale and the visual isometric approach when creating drawings in CAD, as it pertains to dimensioning.**

**Answer:**
*   **True Isometric Scale:** In this method, all linear dimensions are reduced by a constant factor (approximately 0.815) before being drawn. This results in a drawing where the lengths shown on the drawing are already scaled down. If you dimension such a drawing, you would dimension the *drawn lengths*, which are already the foreshortened values.
*   **Visual Isometric Approach:** This is the more common practical method. Here, you use the **true, full-scale lengths** for lines parallel to the isometric axes. The software then draws these lines at the correct isometric angles. When dimensioning, you label these lines with their **actual, full-scale values**. The visual appearance is isometric, but the dimensions are not foreshortened. The software's graphical representation of the line at the isometric angle visually matches the true dimension value provided.

This distinction is vital for understanding how information is communicated in technical drawings. Visual isometrics are generally preferred because they maintain readability by showing true dimensions.
