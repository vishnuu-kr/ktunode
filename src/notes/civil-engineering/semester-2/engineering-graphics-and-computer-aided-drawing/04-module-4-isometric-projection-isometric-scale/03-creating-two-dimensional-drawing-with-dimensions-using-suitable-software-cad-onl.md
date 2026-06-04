---
title: "Creating two-dimensional drawing with dimensions using suitable software. (CAD, only internal evaluation)"
subject: "ENGINEERING GRAPHICS AND COMPUTER AIDED DRAWING"
module: "Module 4: Isometric Projection: Isometric scale"
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912dd0"
status: "completed"
scrapedAt: "2026-05-20T18:35:02.893Z"
---
# Engineering Graphics and Computer-Aided Drawing

## Module 4: Isometric Projection: Isometric Scale

### Topic: Creating Two-Dimensional Drawings with Dimensions using Suitable Software (CAD)

Welcome, everyone! In this module, we're going to delve into the fascinating world of pictorial projections, specifically focusing on isometric projection. You've already learned how to create these projections manually in previous modules, understanding the principles and drawing them with pencil and paper. Now, we're going to bridge that knowledge with the power of modern technology. Today, we'll explore how to translate those isometric principles into practical, dimensioned two-dimensional (2D) drawings using Computer-Aided Design (CAD) software. This is a crucial skill, not only for this course but for your entire engineering career.

This particular topic, "Creating Two-Dimensional Drawings with Dimensions using Suitable Software," directly ties into **Course Outcome 5 (CO5): Sketch simple drawings using CAD tools (Knowledge Level: K3)**. While we'll be focusing on isometric principles within CAD, the core idea is to get you comfortable with using CAD software to create accurate, dimensioned drawings, which is the foundation of CO5. Remember, CAD isn't just about drawing lines; it's about creating intelligent models that can be easily modified, analyzed, and used for manufacturing.

Let's start by refreshing what we know about isometric projection and then see how CAD helps us do it efficiently.

### Understanding Isometric Projection – A Quick Recap

Before we jump into CAD, let's quickly revisit what makes isometric projection unique. Unlike orthographic projections (like front view, top view, side view) that show an object from one direction at a time, pictorial projections like isometric views show the object in a single, 3D-like representation.

In **isometric projection**, all three axes (length, width, height) are equally foreshortened. The key characteristic is that the angle between any two of these axes is 120 degrees in the projection. This gives it that characteristic "balanced" look. Imagine looking at a cube from a corner – that's essentially what an isometric view captures.

Now, the "scale" part, the **isometric scale**, is important. Because the axes are foreshortened by a factor of $\sqrt{2}/\sqrt{3} \approx 0.815$, when we draw an isometric view manually, we often use an isometric scale to show the true lengths. However, when using CAD, we can often work with the actual dimensions of the object and let the software handle the isometric transformation. This is one of the major advantages of CAD – it ensures accuracy and saves us the tedious work of constructing an isometric scale every time.

### Why CAD for Isometric Drawings?

Think about the manual process of drawing an isometric view. You'd construct an isometric scale, draw the axes, lay out the object's dimensions along these axes, and then connect the points. If you need to change a dimension, you'd have to redraw quite a bit.

CAD changes all of that. Here's why it's so powerful for this task:

*   **Accuracy and Precision:** CAD software uses mathematical definitions for every line, curve, and object. This means your drawings are precisely to scale and free from human drafting errors.
*   **Efficiency:** Once you've set up your drawing environment, commands like "Line," "Circle," "Rectangle," and "Offset" allow you to create geometry much faster than with a pencil.
*   **Dimensioning:** Adding dimensions is a built-in function. You simply pick the entities you want to dimension, and the software adds the correct text and leaders, often automatically snapping to the correct isometric direction if you're in an isometric drafting mode.
*   **Modification:** Need to change a length? You can simply select the object, use a "Scale" or "Stretch" command, and the software updates the geometry and dimensions accordingly. This is a dream compared to manual drafting!
*   **Parametric Capabilities:** Advanced CAD allows you to define relationships between dimensions. If you change one dimension, others can update automatically based on these rules, leading to truly intelligent models.
*   **Visualization:** While we are creating 2D drawings *of* an isometric view, many CAD packages also allow you to create true 3D models and then generate isometric views from them, offering a richer visualization experience.

This directly relates to **CO5: Sketch simple drawings using CAD tools.** We're using CAD tools to create a specific type of sketch – an isometric representation with dimensions.

### Creating Isometric Drawings in CAD: The Process

The exact commands and workflow can vary slightly between different CAD software (like AutoCAD, SolidWorks, Inventor, Fusion 360, etc.), but the underlying principles are the same. We'll discuss a general approach.

**1. Setting Up Your Drawing Environment:**

*   **Units:** Always start by setting the correct drawing units. Are you working in millimeters (mm), inches, or something else? This is usually found in the "Drawing Settings" or "Units" command. Think of it like choosing your ruler before you start drawing.
*   **Grid and Snap:** While not always used for isometric, understanding grids and snap can help you place objects precisely. However, for isometric work, we'll often rely more on direct input and specific isometric drafting tools.
*   **Layers:** Good practice dictates using layers. You might have a layer for visible lines, hidden lines, dimensions, text, etc. This helps organize your drawing and control what is displayed.

**2. Enabling Isometric Drafting (If Available):**

Many CAD programs have a dedicated **"Isoplane"** or **"Isometric Drafting"** mode. When activated, this feature makes your cursor and input align with the isometric axes.

*   **How it works:** Instead of drawing horizontally and vertically (along the X and Y axes), the software allows you to draw along the three isometric directions. You'll typically see your cursor move along these 30-degree inclined lines.
*   **Key Isoplane Settings:** You'll usually be able to switch between the "Left Iso Plane," "Top Iso Plane," and "Right Iso Plane." This determines the orientation of your drawing axes for commands like "Line" and "Circle."
    *   Imagine a cube. The "Top Iso Plane" might be for drawing lines that represent the top face's edges, the "Left Iso Plane" for edges going up and to the left, and the "Right Iso Plane" for edges going up and to the right.
    *   You can often cycle through these planes using a function key (like F5) or by clicking an icon.

**3. Drawing Basic Geometric Shapes (Circles, Rectangles):**

*   **Lines:** Use the "Line" command. If isometric drafting is on, your lines will follow the isometric axes as you move the cursor or input coordinates.
*   **Circles in Isometric:** Circles in isometric projection appear as ellipses. Most CAD software has a specific command for drawing "Isocircles" or "Ellipses" on an isometric plane. You'll select the center and then specify the diameter, and the software will draw the ellipse correctly oriented for the current isoplane. If you don't have a dedicated command, you'd typically draw a circle and then use transformation tools, but the dedicated command is much easier.
*   **Rectangles/Boxes:** You'll often draw these by constructing the edges along the isometric axes using the "Line" command or by drawing a regular rectangle and then using transformation tools (like "Skew" or "Shear" with appropriate angles) if the software doesn't have a direct "Isometric Box" command. However, many CAD programs do have ways to directly create isometric boxes or extrude 2D shapes into isometric forms.

**4. Constructing the Isometric View of an Object:**

This is where we apply the principles we learned earlier. Let's take a simple example: a cube with a hole through it.

*   **Start with the Base:** Draw the base of your object. If it's a square base, you'll draw it using isometric lines. You'll select an isoplane (e.g., Top Iso Plane) and draw two lines of the required length at 120 degrees (which the software handles when isometric drafting is on). Then, use the "Line" command to close the square on the isometric plane.
*   **Add Height:** To add height, you'll switch to a different isoplane (e.g., Left Iso Plane or Right Iso Plane) and draw vertical lines (which are actually 30 degrees to the horizontal in isometric projection). The length of these lines will be the actual height of the object.
*   **Completing the Box:** Use the "Line" command again on the appropriate isoplanes to connect the tops of the vertical lines and complete the isometric view of the box.
*   **Drawing the Hole:** If you're adding a hole, you'd typically draw an isocircle (ellipse) on the face where the hole begins. The diameter of this isocircle will be the diameter of the hole. Then, you'll draw lines from the extremities of this ellipse down the height of the hole, again using the appropriate isoplane.

**Example Scenario:** Imagine drawing an isometric view of a simple rectangular block, say 50mm long, 30mm wide, and 40mm high.

1.  **Select Units:** Set to millimeters.
2.  **Activate Isometric Drafting:** Turn on the Isoplane mode.
3.  **Draw the Base:**
    *   Start a "Line" command.
    *   Select the "Top Iso Plane" (or similar for your software).
    *   Draw a line of 50mm (length).
    *   Draw another line of 30mm (width) from the same starting point. The software automatically makes the angle between them 120 degrees.
    *   Use "Line" to connect the endpoints to form the base rectangle on the isometric plane.
4.  **Add Height:**
    *   Switch to "Left Iso Plane" (or similar).
    *   From each of the four corners of the base, draw a vertical line of 40mm.
5.  **Close the Top:**
    *   Switch back to "Top Iso Plane."
    *   Connect the tops of the vertical lines using lines of 50mm and 30mm to complete the top face.

You’ve just drawn the isometric outline of the block! This relates to **CO4: Prepare pictorial drawings using the principles of isometric projection**, but now we're doing it in CAD.

**5. Adding Dimensions:**

This is where the "dimensioning" part of the topic comes in, directly contributing to **CO5**.

*   **Dimensioning Commands:** CAD software provides various dimensioning tools, such as "Linear Dimension," "Aligned Dimension," "Angular Dimension," and "Diameter/Radius Dimension."
*   **Isometric Dimensioning:** For isometric views, you'll primarily use **"Aligned"** or **"Linear"** dimensions. The key is that these dimensions should be drawn to appear parallel to the isometric axes.
    *   When you use an "Aligned" dimension command, you often have to select two points. The dimension line will then be drawn parallel to the line connecting these two points. For isometric objects, you'll pick points that define an edge.
    *   Some advanced CAD software might even have specific "Isometric Dimension" styles that automatically orient the dimension text and lines to match the isometric axes.
*   **Text and Arrowheads:** The software handles the text size and arrowhead appearance, ensuring clarity and consistency. You can usually control these through dimension styles.
*   **Placement:** Place dimensions clearly so they don't clutter the drawing or overlap with object lines. Avoid dimensioning hidden lines unless absolutely necessary.

**Example of Dimensioning the Block:**

Let's dimension our 50x30x40 block.

1.  **Dimension Length:** Use the "Aligned" dimension command. Select the start and end points of the 50mm edge. The dimension text "50" will appear, aligned with that edge.
2.  **Dimension Width:** Similarly, dimension the 30mm edge.
3.  **Dimension Height:** Dimension one of the 40mm vertical edges.
4.  **Optional Dimensions:** You could also dimension edges on the top face if needed.

**Important Note on Isometric Scale in CAD:** When using the "Isoplane" and drawing with actual lengths, the resulting view *is* an isometric projection. You don't need to construct a separate isometric scale and reduce your lengths. The software handles the projection's inherent foreshortening implicitly by allowing you to draw along the isometric axes. If a question asks you to create an "isometric drawing with isometric scale," and you're using CAD, it usually implies drawing with the actual object dimensions, and the CAD software's isometric mode naturally represents this. If you were to measure the lengths of the lines on your screen, they wouldn't be the "true" lengths (they'd be foreshortened), but the *relationship* between these lines and the dimensions you input is correct.

**6. Refining and Outputting the Drawing:**

*   **Hidden Lines:** If you need to show hidden lines, you can use different linetypes (dashed lines) and layers.
*   **Centerlines:** For circular features (isocircles), add centerlines.
*   **Annotation:** Add any necessary notes, titles, or labels.
*   **Plotting/Exporting:** Once complete, you can plot the drawing to a printer or save it as a PDF or image file.

### Connecting to Course Outcomes and Textbooks

This entire process directly supports **CO5: Sketch simple drawings using CAD tools (Knowledge Level: K3)**. You are applying your understanding of geometric shapes and pictorial representation within a CAD environment to create functional drawings.

**CO4: Prepare pictorial drawings using the principles of isometric projection (Knowledge Level: K3)** is also heavily involved. The CAD tools are simply a more efficient way to execute the principles you learned for manual drawing.

Let's weave in some of our textbooks:

*   **Varghese, P. I. (V I P Publishers, 1st Edition 2012):** This text likely covers the fundamental principles of isometric projection, including the construction of the isometric scale and drawing techniques. When using CAD, you're essentially automating these manual construction steps.
*   **Benjamin, J. (Pentex Publishers, 5th Edition 2017) & John, K. C. (Prentice Hall India Publishers, Published in 2011):** These books often provide detailed examples of isometric projections of various objects. You can use these examples as your target drawings to recreate in CAD. The CAD approach provides a faster and more accurate way to achieve the same visual output.
*   **Anilkumar, K. N. (Adhyuth Narayan Publishers, 10th Edition 2016):** Similar to others, this book will reinforce the theoretical underpinnings of isometric projection, which are crucial for understanding *why* the CAD commands work the way they do.
*   **Kulkarni, D. M., Rastogi, A. P. and Sarkar, A. K. (Prentice Hall India Publishers, 2009) - Engineering Graphics with AutoCAD:** This is a highly relevant reference for our current task. It will specifically detail the AutoCAD commands and workflows for creating various types of drawings, including isometric views and dimensioning.
*   **Venugopal, K. (New Age International Publishers, 4th edition 2007) & Parthasarathy, N. S., and Murali, V. (Oxford University Press, 2015):** These general engineering drawing texts will provide a solid base of drafting conventions, which are also applied in CAD.

Remember, the goal isn't to forget manual drafting, but to leverage CAD for speed, accuracy, and editability. The understanding of *how* to create an isometric view manually is what enables you to use the CAD tools effectively.

### Common Pitfalls and Tips

*   **Incorrect Isoplane:** Make sure you're on the correct isoplane for the segment you're drawing. Drawing a vertical line on the "Top Iso Plane" will result in a line that's 30 degrees to the horizontal, which is correct for an isometric vertical.
*   **Dimensioning:** Always use the "Aligned" dimension command for isometric lines, and ensure the dimension text is readable and doesn't obscure the object.
*   **Circles as Ellipses:** Don't forget that circles in isometric views are ellipses. Use the dedicated "Isocircle" or "Ellipse" command.
*   **Scale:** As discussed, when using CAD's isometric mode, you draw with real-world dimensions. The foreshortening is implicit in the isometric projection itself, not achieved by reducing scale unless specifically instructed.

### Summary and Key Takeaways

To sum up, creating 2D drawings with dimensions using CAD software for isometric projections involves:

1.  Setting up your drawing environment correctly.
2.  Utilizing the isometric drafting (Isoplane) features of the software.
3.  Drawing lines and isocircles along the correct isometric axes.
4.  Using the appropriate dimensioning commands to add accurate measurements, ensuring they are aligned with the isometric axes.

This process is a direct application of **CO5**, demonstrating your ability to use CAD tools for sketching and **CO4**, reinforcing your understanding of isometric projection principles. The efficiency and accuracy gained through CAD are invaluable for any engineering discipline.

---

## Sample Questions with Answers

Here are some questions to test your understanding, covering both concepts and exam-oriented aspects:

**Q1. In isometric projection, the angle between any two principal axes is:**
    a) 90 degrees
    b) 120 degrees
    c) 60 degrees
    d) 109.5 degrees

**Answer: b) 120 degrees**

**Reasoning:** This is a fundamental definition of isometric projection. In an isometric view, all three axes are shown at equal angles to each other and to the plane of projection. These angles are 120 degrees between any pair of axes. This ensures a visually balanced representation.

**Q2. When creating an isometric drawing in CAD software like AutoCAD, what is the primary tool or setting used to ensure lines are drawn along the correct isometric axes?**
    a) Grid Snap
    b) Polar Tracking
    c) Isoplane Mode (or Isometric Drafting)
    d) Ortho Mode

**Answer: c) Isoplane Mode (or Isometric Drafting)**

**Reasoning:** Ortho mode restricts drawing to horizontal and vertical lines (0 and 90 degrees). Polar Tracking helps snap to specific angles, but Isoplane Mode specifically configures the drawing environment to align with the three isometric axes (typically at 30 degrees to the horizontal), making it the correct tool for drawing isometric geometry directly.

**Q3. How does CAD software typically handle circles in an isometric projection?**
    a) They are drawn as true circles, automatically foreshortened by the software.
    b) They are drawn as ellipses using a dedicated "Isocircle" or "Ellipse" command on the isometric plane.
    c) They are drawn as circles, and the user must manually apply an isometric scale to them.
    d) They cannot be drawn accurately in isometric projection in CAD.

**Answer: b) They are drawn as ellipses using a dedicated "Isocircle" or "Ellipse" command on the isometric plane.**

**Reasoning:** Circles viewed in isometric projection appear as ellipses. CAD software has specific commands (often called "Isocircle" or a specialized mode of the "Ellipse" command) that allow the user to draw these ellipses correctly oriented on the isometric planes. This is crucial for representing holes or rounded features accurately.

**Q4. Imagine you are drawing a cube with sides of 100mm in isometric view using CAD. You draw one side of length 100mm using the Line command in isometric mode. If you measure this line on your screen, will it be exactly 100mm? Explain why or why not, and how this relates to the isometric scale.**

**Answer:** No, the line measured on the screen will **not** be exactly 100mm.

**Explanation:** When you draw a line of 100mm using CAD's isometric mode, you are inputting the object's *actual* length. The isometric projection itself inherently foreshortens all lines parallel to the principal axes by a factor of $\frac{\sqrt{2}}{\sqrt{3}} \approx 0.815$. So, on the screen, the visible line representing the 100mm edge will appear approximately 81.5mm long.

This is precisely why CAD's isometric drafting mode is so convenient. It implicitly handles the isometric scale. You work with the true dimensions (like 100mm), and the software displays them foreshortened correctly according to isometric projection rules. You don't need to construct a separate isometric scale and reduce your lengths manually; the software does it for you by drawing along the isometric axes.

**Q5. You are tasked with dimensioning a 60mm long edge in an isometric drawing created in CAD. Which dimensioning command should you primarily use, and why?**
    a) Linear Dimension, because it draws parallel to the screen's X and Y axes.
    b) Radial Dimension, because the object is viewed isometrically.
    c) Aligned Dimension, because it draws parallel to the object's feature being dimensioned.
    d) Angular Dimension, to show the 120-degree angle between axes.

**Answer: c) Aligned Dimension, because it draws parallel to the object's feature being dimensioned.**

**Reasoning:** For isometric drawings, dimensions should appear parallel to the isometric axes they represent. The "Aligned Dimension" command in CAD is designed to measure the true distance between two points and draw the dimension line parallel to the line connecting those two points. When you select the start and end points of an isometric edge, the Aligned Dimension command will correctly place the dimension line parallel to that isometric edge, achieving the desired visual effect for isometric dimensioning. "Linear Dimension" typically forces alignment with the screen's X and Y axes, which isn't appropriate for isometric features.
