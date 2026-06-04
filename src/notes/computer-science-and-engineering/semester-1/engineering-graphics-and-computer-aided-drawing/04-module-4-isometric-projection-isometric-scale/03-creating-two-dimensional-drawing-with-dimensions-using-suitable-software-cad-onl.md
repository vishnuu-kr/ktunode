---
title: "Creating two-dimensional drawing with dimensions using suitable software. (CAD, only internal evaluation)"
subject: "ENGINEERING GRAPHICS AND COMPUTER AIDED DRAWING"
module: "Module 4: Isometric Projection: Isometric scale"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5c4b"
status: "completed"
scrapedAt: "2026-05-20T16:38:03.818Z"
---
Absolutely! Let's dive into the fascinating world of creating 2D drawings with dimensions using CAD software, directly linking it to our understanding of isometric projection. Think of this as a practical extension of what we've been learning – how to translate those 3D concepts we visualize into precise, digital representations.

---

## Engineering Graphics and Computer-Aided Drawing

### Module 4: Isometric Projection: Isometric Scale

#### Topic: Creating Two-Dimensional Drawings with Dimensions using Suitable Software (CAD)

Welcome, everyone! In this session, we’re going to bridge the gap between the theoretical understanding of isometric projection and its practical application using Computer-Aided Design (CAD) software. We've spent time understanding how to visualize objects from different viewpoints, project lines and points, and even create isometric views manually. Now, we'll leverage the power of CAD to bring those skills to life, creating accurate 2D drawings with essential dimensions. This is crucial for communicating design intent clearly and efficiently.

This topic directly supports **Course Outcome 5: Sketch simple drawing using CAD tools (Knowledge Level: K3)**. We're not just sketching; we're creating technically accurate drawings that can be used for manufacturing or further design. It also reinforces **Course Outcome 4: Prepare pictorial drawings using the principles of isometric projection (Knowledge Level: K3)**, as the precision offered by CAD allows us to create perfect isometric representations, which is something we'll touch upon as we discuss dimensioning.

Think of it this way: when we create an isometric drawing, we’re trying to give a realistic 3D feel on a 2D surface. CAD tools allow us to do this with unparalleled accuracy and the ability to add crucial information like dimensions.

### The Essence of 2D Drawings with Dimensions in CAD

Before we jump into the "how," let's quickly recap why this is so important. A technical drawing, especially one used in engineering, isn't just a pretty picture. It's a language. And like any language, it needs clarity, precision, and the right vocabulary. Dimensions are that vocabulary, telling us *exactly* how big and how far apart features are.

When we talk about 2D drawings in CAD for this topic, we're often referring to the *orthographic views* – the front view, top view, and side view. These are the bedrock of engineering communication. But we can also create *isometric views* directly within CAD and then dimension them, which is where our Module 4 knowledge truly shines!

The objective here is to use CAD software to create drawings that are:

1.  **Accurate:** Every line, circle, and curve is placed precisely.
2.  **Complete:** All necessary information for understanding and manufacturing is present.
3.  **Clear:** Easy to read and interpret by anyone familiar with engineering drawings.
4.  **Dimensioned:** All critical sizes and locations are specified.

This process aligns perfectly with what the textbooks like Varghese and Benjamin emphasize: the importance of clear, unambiguous communication in technical drawings.

### Key Concepts and Tools in CAD for 2D Drawing and Dimensioning

When you open a CAD software like AutoCAD, you're presented with a digital canvas. Our goal is to transform this blank space into a meaningful technical drawing. Let’s explore the core tools and concepts we’ll be using:

#### 1. Setting Up Your Drawing Environment

Just like preparing a physical drawing board, the digital environment needs to be set up correctly.

*   **Units:** First and foremost, we need to define the units of our drawing (e.g., millimeters, inches). This is usually done in the `UNITS` command. Imagine trying to build a chair if you didn't know whether the measurements were in feet or inches – chaos! The same applies here.
*   **Limits:** Setting drawing limits defines the boundaries of your drawing space. While modern CAD is virtually limitless, it’s good practice to set sensible limits to keep your work organized, especially when printing or plotting later.
*   **Layers:** This is a powerful organizational tool. Think of layers like transparent sheets stacked on top of each other. You can put construction lines on one layer, visible lines on another, hidden lines on yet another, and dimensions on their own layer. This makes it easy to control what you see, print, or modify. For instance, if you want to hide all dimensions temporarily, you just turn off the dimension layer. This concept is fundamental to efficient CAD work, as discussed in reference books like Kulkarni, Rastogi, and Sarkar.

#### 2. Drawing Commands: The Building Blocks

These are the fundamental commands to create geometric entities. We've encountered these concepts in manual drawing, but CAD makes them precise.

*   **Line (`LINE`):** Creates straight line segments. You specify a start point and an end point. We can also use polar tracking (e.g., `@10<45`) for precise angles and lengths, reminiscent of using a protractor and ruler, but with digital accuracy.
*   **Circle (`CIRCLE`):** Creates circles. Common methods include specifying the center point and radius, or center point and diameter. We can also define circles by three points or by two points (as the diameter).
*   **Arc (`ARC`):** Creates segments of a circle. You can define an arc by its start point, end point, and center, or by start point, direction, and end point, among other methods.
*   **Rectangle (`RECTANG`):** Draws rectangles. You can specify two opposite corner points, or a corner point and dimensions (length and width).
*   **Polygon (`POLYGON`):** Draws regular polygons (triangles, squares, hexagons, etc.) by specifying the number of sides and either the center and radius of an inscribed or circumscribed circle, or the length of a side.
*   **Trim (`TRIM`) and Extend (`EXTEND`):** These are incredibly useful commands for cleaning up drawings. `TRIM` cuts away parts of objects that overlap with others, and `EXTEND` lengthens objects to meet a boundary. Imagine refining a hand-drawn line by erasing or extending it; `TRIM` and `EXTEND` do this digitally and instantly.

#### 3. Modification Commands: Refining Your Design

Once you've drawn something, you'll often need to adjust it.

*   **Move (`MOVE`):** Relocates objects from one position to another.
*   **Copy (`COPY`):** Creates duplicates of existing objects.
*   **Rotate (`ROTATE`):** Rotates objects around a specified base point.
*   **Scale (`SCALE`):** Resizes objects uniformly or non-uniformly.
*   **Offset (`OFFSET`):** Creates a copy of an object at a specified distance, parallel to the original. This is invaluable for creating parallel lines, wall thicknesses, or offsetting a profile. It’s like using a parallel bar for consistent spacing.
*   **Mirror (`MIRROR`):** Creates a mirrored copy of objects across a specified axis. Very useful for symmetrical parts.

#### 4. Dimensioning: Adding the "What Size" Information

This is where we add the critical numerical data that defines the size and position of features. This directly relates to our learning outcomes by providing the necessary information that complements the pictorial representation we might have developed from isometric principles.

*   **Linear Dimension (`DIMLINEAR`):** Used for horizontal, vertical, and rotated linear dimensions. You select two points, and the dimension line is placed accordingly. This is the most common dimension type.
*   **Aligned Dimension (`DIMALIGNED`):** Creates dimensions parallel to the object's features, regardless of their orientation. This is especially useful for inclined lines.
*   **Angular Dimension (`DIMANGULAR`):** Measures the angle between two lines or three points.
*   **Radius and Diameter Dimensions (`DIMRADIUS`, `DIMDIAMETER`):** Used to dimension circles and arcs.
*   **Dimension Styles (`DIMSTYLE`):** This is a crucial concept. Dimension styles control the appearance of your dimensions – text height, arrowhead size, extension line color, units, precision, etc. Setting up a good dimension style ensures consistency and readability across your entire drawing. Many textbooks, including Bhatt's "Engineering Drawing," stress the importance of standard practices for dimensioning, and CAD dimension styles are the digital embodiment of these standards.

**Important Note on Isometric Dimensioning in CAD:** While we can create perfect 2D orthographic projections and dimension them, when we create *isometric views* in CAD, traditional linear dimensions (aligned with the axes of the object in the isometric view) are often *not* directly placed at their true length. This is because isometric projection uses an isometric scale where lengths are reduced by a factor of approximately 0.815 (or 0.707 for the vertical lines if you use true isometric drawing, which is less common in CAD).

However, for practical CAD work, we often use the following approaches for dimensioning isometric drawings:

*   **Annotative Dimensions:** These dimensions can be set to display correctly regardless of the view's scale.
*   **Using Text:** In some contexts, especially for general visualization, dimensions might be added as text that *looks* aligned with the isometric axes, even if not technically scaled.
*   **Focus on Orthographic Views for Precise Dimensioning:** Often, the most precise way to communicate dimensions for manufacturing is through the accompanying orthographic views, where dimensions are placed parallel to the actual object edges and represent true lengths.

The key takeaway for this topic is that CAD software provides the tools to accurately represent geometry and add dimensions, and understanding how to use these tools effectively is a core skill.

#### 5. Text and Annotations (`TEXT`, `MTEXT`)

Adding notes, titles, revision information, and other textual annotations is vital. `MTEXT` (Multiline Text) is particularly useful for creating blocks of text.

### Practical Workflow: Creating a 2D Drawing with Dimensions in CAD

Let's walk through a typical process. Imagine we have a simple object, perhaps a cuboid with a cylindrical hole through its center.

**Step 1: Project Setup**
*   Open your CAD software.
*   Set units to millimeters.
*   Start a new drawing using a standard template.

**Step 2: Drawing the Orthographic Views**
*   **Front View:** Draw the outline of the object as seen from the front. If it's a cuboid with a hole, this might be a rectangle with a circle representing the hole’s projection. Use `RECTANG` and `CIRCLE` commands.
*   **Top View:** Project lines from the front view to create the top view. This might be another rectangle, with a rectangle representing the hole's projection. Use `LINE` to project and `RECTANG` for the hole.
*   **Side View:** Project lines from both front and top views to create the side view. This might be a rectangle, with a circle representing the hole’s projection.
*   **Accuracy:** Ensure all projections are aligned correctly using projection lines. You can use `OFFSET` to create equidistant projection lines.

**Step 3: Adding Dimensions**
*   **Select Dimension Style:** Choose or create a suitable dimension style.
*   **Dimensioning the Front View:**
    *   Use `DIMLINEAR` to dimension the overall width and height.
    *   Use `DIMDIAMETER` to dimension the diameter of the hole.
    *   Use `DIMLINEAR` again to dimension the location of the hole’s center from an edge.
*   **Dimensioning the Top View:**
    *   Dimension the overall depth (length).
    *   Dimension the location of the hole.
*   **Dimensioning the Side View:**
    *   Dimension the overall height and depth.
    *   Dimension the location of the hole.
*   **Cleanliness:** Ensure dimensions don't overlap with object lines unnecessarily and are clearly readable. Use the `DIMEDIT` command to adjust dimension text or lines if needed.

**Step 4: Adding Text and Title Block**
*   Use `MTEXT` to add a title, drawing number, material, scale, etc., in a title block.
*   Add any necessary notes using `MTEXT`.

**Step 5: Creating an Isometric View (Optional but relevant to Module 4)**
*   You can often use commands like `ISOPLANE` to switch to an isometric drafting mode or use a dedicated `ISOMETRIC` command if available in your software.
*   Draw the isometric projection of the object using isometric ellipses for circular features if needed.
*   Dimensioning this view requires care. As mentioned, directly applying linear dimensions might not reflect true lengths if you are strictly adhering to the isometric scale. Often, dimensions are added to the orthographic views for manufacturing clarity. However, for visual representation, one might add dimensions that appear aligned with the isometric axes.

**Example Analogy:** Imagine you're a chef preparing a recipe. The orthographic views are like the step-by-step instructions with ingredient quantities (dimensions). The isometric view is like a beautiful photograph of the finished dish. You need the accurate recipe (dimensions on orthographic views) to make the dish correctly, and the photo (isometric view) helps you appreciate its final appearance.

This process directly addresses **CO5 (Sketch simple drawing using CAD tools)** by outlining the practical steps. The dimensioning part also reinforces the understanding of object properties we'd need to represent accurately, even in pictorial drawings as per **CO4**.

### Why This Matters for Exams and Your Career

In exams, you'll be tested on your ability to use CAD commands to create accurate orthographic projections and add dimensions correctly. Common questions might involve:
*   Identifying the correct dimensioning command for a specific feature.
*   Understanding the importance of dimension styles for clarity.
*   Interpreting drawings with given dimensions.
*   Sometimes, demonstrating basic isometric drawing within CAD, though often the focus for dimensioning is on orthographic views.

In your professional life, being proficient in CAD for creating dimensioned drawings is non-negotiable. It's the primary way you'll communicate your designs to manufacturers, colleagues, and clients. It's the foundation of your ability to translate ideas into tangible products.

**Remember this:** Precision in CAD isn't just about drawing lines; it's about conveying information effectively through accurate geometry and, crucially, correct dimensions.

---

### Sample Questions with Answers

Here are a few questions to test your understanding, blending conceptual knowledge with practical application in CAD:

**Q1. When creating a 2D drawing in CAD, what is the primary purpose of adding dimensions?**

**Answer:** The primary purpose of adding dimensions is to specify the exact size, location, and orientation of geometric features on an object. This information is crucial for manufacturing, assembly, and quality control, ensuring that the final product conforms to the design intent. Without dimensions, a drawing is merely a shape; with dimensions, it becomes a precise specification.

**Q2. You are drawing a circle in CAD and need to represent its size accurately. Which dimensioning command would be most appropriate to use?**

**Answer:** The most appropriate commands are `DIMDIAMETER` to show the overall diameter or `DIMRADIUS` to show the radius. `DIMDIAMETER` is often preferred when the circle is a through-hole or a primary feature in an orthographic view.

**Q3. Explain the importance of using `Layers` in CAD for creating dimensioned drawings.**

**Answer:** Layers are crucial for organizing and managing different types of drawing elements. For dimensioned drawings, using layers allows you to:
*   **Control Visibility:** Easily turn dimension layers on or off to declutter the view or focus on geometry.
*   **Manage Plotting:** Ensure dimensions are plotted with specific line weights or colors, or exclude them from certain plot outputs if needed.
*   **Easier Modification:** Select all dimensions at once by selecting their layer for batch editing (e.g., changing dimension style globally).
*   **Organization:** Keep the drawing clean and prevent accidental modification of dimensions when working on the object’s geometry. This aligns with good drafting practices emphasized in all foundational engineering graphics texts.

**Q4. Consider an object whose front view is a square with a hole in the center. If the square is 50mm x 50mm and the hole has a diameter of 20mm, how would you dimension this in the front view using CAD commands?**

**Answer:**
1.  **Draw the Square:** Use the `RECTANG` command, specifying corner points to create a 50x50mm square.
2.  **Draw the Hole:** Use the `CIRCLE` command. You'd typically need to know the location of the hole's center. Assuming it's centered, you would find the midpoint of the square's sides. For a 50mm square, the center would be at 25mm from each side. Draw the circle with a radius of 10mm (diameter 20mm) at this center point.
3.  **Dimension the Square:** Use `DIMLINEAR` to dimension the overall width (50mm) and the overall height (50mm). Place these dimensions outside the object boundary for clarity.
4.  **Dimension the Hole:** Use `DIMDIAMETER` to dimension the diameter of the circle, placing the dimension near the circle.
5.  **Dimension the Hole's Location:** Use `DIMLINEAR` to dimension the distance from an edge of the square to the center of the circle. This would be 25mm from the left edge to the center, and 25mm from the bottom edge to the center.

This question tests the understanding of basic geometric creation and the application of linear and diameter dimensioning commands in CAD, directly relating to CO5.

---

I hope this comprehensive overview helps you feel confident in using CAD software to create accurate, dimensioned 2D drawings. It’s a skill that will serve you well throughout your engineering journey! Let’s practice these commands.
