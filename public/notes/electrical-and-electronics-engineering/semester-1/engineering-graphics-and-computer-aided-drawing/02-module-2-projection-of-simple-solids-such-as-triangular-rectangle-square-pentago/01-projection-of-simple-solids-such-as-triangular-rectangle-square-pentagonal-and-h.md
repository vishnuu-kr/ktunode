---
title: "Projection of Simple solids such as Triangular, Rectangle, Square, Pentagonal and Hexagonal Prisms, Pyramids, Cone and Cylinder only."
subject: "ENGINEERING GRAPHICS AND COMPUTER AIDED DRAWING"
module: "Module 2: Projection of Simple solids such as Triangular, Rectangle, Square, Pentagonal and Hexagonal Prisms, Pyramids, Cone and Cylinder only."
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213e9ece2bdd875f943f"
status: "completed"
scrapedAt: "2026-05-23T16:01:58.527Z"
---
# ENGINEERING GRAPHICS AND COMPUTER AIDED DRAWING

## Module 2: Projection of Simple Solids

Welcome, everyone, to our journey into the fascinating world of orthographic projection, specifically focusing on how we represent simple 3D solids on a 2D plane. In this module, we'll be dealing with prisms, pyramids, cones, and cylinders. Think of it as learning the language of engineering drawings – the way we communicate shapes and forms accurately. This is crucial for everything we do in engineering, from designing a bridge to sketching a simple machine part. Our goal here is to master the skill of visualizing these solids from different viewpoints and accurately translating that into standard projection methods. This directly links to our Course Outcomes, particularly CO2, where we learn to prepare multiview orthographic projections, and CO5, where we'll eventually use CAD tools to achieve the same.

### Understanding Solids: The Building Blocks

Before we start projecting, let's quickly recap what these "simple solids" are.

*   **Prisms:** A prism is a solid with two identical parallel bases (polygons) connected by rectangular faces. The name of the prism is usually derived from the shape of its base. So, we have:
    *   **Triangular Prism:** Bases are triangles.
    *   **Rectangular Prism (or Cuboid):** Bases are rectangles.
    *   **Square Prism:** Bases are squares.
    *   **Pentagonal Prism:** Bases are pentagons.
    *   **Hexagonal Prism:** Bases are hexagons.

    Think of a Toblerone box – that's a triangular prism! Or a brick – a rectangular prism. A typical building block is often a square prism.

*   **Pyramids:** A pyramid is a solid with a polygonal base and triangular faces that meet at a single point called the apex. Again, the name comes from the base shape:
    *   **Triangular Pyramid (or Tetrahedron):** Base is a triangle.
    *   **Square Pyramid:** Base is a square.
    *   **Pentagonal Pyramid:** Base is a pentagon.
    *   **Hexagonal Pyramid:** Base is a hexagon.

    The pyramids of Egypt are classic examples of square pyramids. Imagine a party hat – that's a cone, which is a special case of a pyramid with a circular base.

*   **Cone:** A cone has a circular base and a single vertex (apex) connected to the circumference of the base by a curved surface. Think of an ice cream cone or a traffic cone.

*   **Cylinder:** A cylinder has two identical parallel circular bases connected by a curved surface. Think of a can of soup, a pipe, or a rolling pin.

### The Principle of Orthographic Projection: Seeing in 2D

Orthographic projection is our primary tool for representing 3D objects in 2D drawings. It's like taking multiple "snapshots" of the object from specific directions (front, top, side) and laying them out in a standardized way. The key idea is that projectors (lines of sight) are parallel to each other and perpendicular to the plane of projection.

**Analogy:** Imagine you're standing in front of a building. The view you see is the **Front View** (or Elevation). If you were to look down from directly above, you'd see the **Top View** (or Plan). And if you looked from the side, you'd get the **Side View**. Orthographic projection aims to capture these views with absolute precision.

This directly relates to **CO2: Prepare Multiview orthographic projections of objects by visualizing them in different positions.** We need to be able to visualize the solid and then project it correctly.

The standard arrangement we use is based on the **First Angle Projection** and **Third Angle Projection** systems. In most engineering contexts, especially those influenced by Indian standards and many international practices, **First Angle Projection** is prevalent.

#### First Angle Projection: The "Object Between Observer and Plane" Method

In first angle projection, the object is assumed to be placed in the first quadrant. The planes of projection (Horizontal Plane and Vertical Plane) are used to define this.

*   **Front View (Elevation):** Placed *below* the XY line.
*   **Top View (Plan):** Placed *above* the XY line.
*   **Left-Hand Side View (LHS):** Placed to the *right* of the Front View.
*   **Right-Hand Side View (RHS):** Placed to the *left* of the Front View.

**Remember this:** In First Angle, the Left-Hand Side View is on the Right, and the Right-Hand Side View is on the Left. It's a bit counter-intuitive at first, but it's a convention we must follow. (Refer to Bhatt, N. D., Engineering Drawing for a thorough explanation of these conventions.)

#### Third Angle Projection: The "Plane Between Observer and Object" Method

In third angle projection, the object is assumed to be placed in the third quadrant.

*   **Front View (Elevation):** Placed *above* the XY line.
*   **Top View (Plan):** Placed *below* the XY line.
*   **Left-Hand Side View (LHS):** Placed to the *left* of the Front View.
*   **Right-Hand Side View (RHS):** Placed to the *right* of the Front View.

**Important Note for this Module:** Unless specified otherwise, we will generally work with **First Angle Projection** for our examples, as it's widely adopted.

### Projecting Simple Solids: Step-by-Step

The core idea for projecting any solid is to understand its shape and how its edges and surfaces will appear when viewed from different directions. We'll focus on projecting the **Front View**, **Top View**, and often a **Side View**.

Let's break down the projection of each type of solid.

#### 1. Projection of Prisms

Prisms have rectangular side faces and polygonal bases.

**General Approach:**

1.  **Determine the Base:** Identify the shape of the base (triangle, square, pentagon, hexagon).
2.  **Determine the Orientation:** How is the prism resting? On its base? On a rectangular face? On an edge of its base? This is crucial.
3.  **Project the Base and Top:**
    *   **Top View:** The base (or top) will appear as its true polygonal shape if viewed from directly above or below.
    *   **Front View:** The front view will show the height of the prism and a rectangle. The width of this rectangle depends on the orientation of the base. If the prism is resting on its base, you'll see the height and the true width of one of the rectangular faces.

**Example: Square Prism**

Let's say we have a square prism with a base side of 30mm and an axis (height) of 60mm.

*   **Scenario A: Resting on its square base on the HP.**
    *   **Top View:** You'll see a square of 30mm x 30mm. Its vertices will be labeled (say, A, B, C, D). The edges connecting to the top base will be drawn as visible lines.
    *   **Front View:** You'll see a rectangle of 30mm (width) x 60mm (height). The bottom side represents the base edges (say, A and B, D and C). The top side represents the top base edges. The vertical lines represent the edges connecting the base to the top (e.g., AA', BB'). The visible edges are usually drawn with thick continuous lines.

*   **Scenario B: Resting on one of its rectangular faces on the HP.**
    *   **Front View:** Now, the base edges might be oriented differently. If a rectangular face is on the ground, you'll see the height (60mm) and the base side length (30mm) of the prism in the front view as a rectangle. However, if the base is tilted, the front view might show the true height and a different projected width.
    *   **Top View:** When resting on a rectangular face, the top view will show the square base of 30mm x 30mm, but potentially viewed from an angle due to the prism's tilt. The edges that are hidden from the top view will be drawn as dashed lines.

**Key takeaway for Prisms:** The rectangular faces are always straight lines in the views, and the polygonal bases will show their respective shapes (or foreshortened versions depending on the viewing angle).

**(Refer to Varghese, P. I., Engineering Graphics for detailed step-by-step constructions of prisms.)**

#### 2. Projection of Pyramids

Pyramids have triangular side faces meeting at an apex.

**General Approach:**

1.  **Determine the Base:** Identify the shape of the base (triangle, square, etc.).
2.  **Determine the Orientation:** How is the pyramid resting? On its base? On one of its triangular faces? On one of its base edges?
3.  **Project the Base and Apex:**
    *   **Top View:** The base will appear as its true shape if viewed from above. The apex will be a point at the center of the base (for a right pyramid).
    *   **Front View:** The front view will show the height of the pyramid and a triangle. The base of this triangle will be the projected width of the pyramid's base, and the apex of the triangle will be the projected apex of the pyramid.

**Example: Square Pyramid**

Let's take a square pyramid with a base side of 30mm and a height of 50mm.

*   **Scenario A: Resting on its square base on the HP.**
    *   **Top View:** You'll see the square base (30mm x 30mm), and the apex will be a point at the center of this square. Let's label the base vertices A, B, C, D and the apex O. In the top view, you'll see the square ABCD and the point O within it. The lines OA, OB, OC, OD represent the slant edges and will be visible.
    *   **Front View:** You'll see a triangle. The base of this triangle will be 30mm (representing the width of the square base). The height of the triangle will be 50mm (the pyramid's height). The apex of the triangle will be the projected apex (O'). The base vertices A' and B' (or C' and D') will lie on the base line. The slant edges OA and OB will appear as lines connecting the apex to the base corners. The edges OC and OD will be hidden and drawn as dashed lines.

*   **Scenario B: Resting on one of its triangular faces on the HP.**
    *   This is where it gets interesting! When a pyramid rests on a triangular face, the base is no longer parallel to the HP.
    *   **Front View:** The triangular face on which it rests will appear as a line (if it's on the ground). The apex will be at its true height. The base will be foreshortened.
    *   **Top View:** The top view will show the square base, with the apex in the center. However, the orientation of the square will be such that one of its edges (the one on which the pyramid rests) is aligned with the XY line in the front view.

**Key takeaway for Pyramids:** The slant edges are crucial. They will appear as lines from the apex to the base vertices. In views where they are not visible, they are shown as dashed lines. The appearance of the base depends on its orientation.

**(Check Benjamin, J., Engineering Graphics for good diagrams and examples of pyramids.)**

#### 3. Projection of Cone

A cone has a circular base and a curved lateral surface tapering to an apex.

**General Approach:**

1.  **Identify the Base and Apex:** The base is a circle, and the apex is a single point.
2.  **Determine the Orientation:** Resting on its base? On its slant height?
3.  **Project the Circle and Apex:**
    *   **Top View:** If viewed from directly above, the base appears as a circle. The apex will be at the center of this circle.
    *   **Front View:** The front view of a right cone resting on its base will be a triangle. The base of the triangle represents the diameter of the circular base, and the apex of the triangle represents the apex of the cone. The slant height will appear as the two sloping sides of the triangle.

**Example: Cone**

Consider a cone with a base diameter of 40mm and a height of 60mm.

*   **Scenario A: Resting on its circular base on the HP.**
    *   **Top View:** A circle of 40mm diameter. The apex O will be at the center.
    *   **Front View:** A triangle with a base of 40mm and a height of 60mm. The apex O' will be at the top. The two sides of the triangle represent the slant generators of the cone.

*   **Scenario B: Resting on its slant height on the HP.**
    *   This is similar to a pyramid resting on a triangular face. The cone will be tilted.
    *   **Front View:** The slant height on which it rests will appear as a line. The apex will be at its true height. The base will be a foreshortened ellipse.
    *   **Top View:** The top view will show the circle of the base, but its orientation will be dictated by the tilt. The apex will be at the center of this circle.

**Key takeaway for Cones:** The front view is a triangle, and the top view is a circle (when resting on its base). The slant generators are important features that appear as the sides of the triangle in the front view.

**(Anilkumar, K. N., Engineering Graphics provides excellent visual explanations for cones.)**

#### 4. Projection of Cylinder

A cylinder has two parallel circular bases.

**General Approach:**

1.  **Identify the Bases:** Two identical circles.
2.  **Determine the Orientation:** Resting on its base? On its curved surface? On a point?
3.  **Project the Circles and Rectangular Surface:**
    *   **Top View:** If viewed from above (resting on its base), you'll see a circle (the base).
    *   **Front View:** If viewed from the front (resting on its base), you'll see a rectangle. The height of the rectangle is the height of the cylinder, and the width of the rectangle is the diameter of the base.

**Example: Cylinder**

Let's take a cylinder with a base diameter of 40mm and a height of 60mm.

*   **Scenario A: Resting on its circular base on the HP.**
    *   **Top View:** A circle of 40mm diameter.
    *   **Front View:** A rectangle of 40mm (width, representing the diameter) x 60mm (height). The top and bottom lines represent the circular bases, and the vertical lines represent the surface of the cylinder.

*   **Scenario B: Resting on its curved surface on the HP (lying on its side).**
    *   **Front View:** Now, the cylinder is lying down. The front view will show a rectangle, but its dimensions will be the height of the cylinder (60mm) as the width, and the diameter of the base (40mm) as the height. So, a 60mm x 40mm rectangle.
    *   **Top View:** When lying on its side, the top view will show the circular base as a foreshortened ellipse. The two circular bases will appear as ellipses on either side. The length (which is the height of the cylinder) will be the major axis of these ellipses.

**Key takeaway for Cylinders:** The key views are a circle and a rectangle when resting on its base. When lying down, the views are rectangles and ellipses.

**(John, K. C., Engineering Graphics provides a good range of examples for cylinders in various positions.)**

### Visible and Hidden Lines: A Crucial Convention

Throughout these projections, we use different types of lines to convey information:

*   **Visible Lines (Continuous Thick):** For edges and outlines that are visible to the observer.
*   **Hidden Lines (Dashed Medium):** For edges and outlines that are hidden behind visible parts of the object. This is very important for prisms and pyramids where slant edges or base edges might be obscured.
*   **Construction Lines (Thin):** Used for projecting points and lines, and are removed in the final drawing.

This understanding of line types is fundamental to **CO2** and also helps in visualizing the object as intended, aiding in **CO1**.

### Connecting to Course Outcomes

Let's explicitly tie this module's content back to our course outcomes:

*   **CO1: Understand the projection of points and lines located in different quadrants (Knowledge Level: K2).** While this module focuses on solids, the principles of projecting points and lines are the foundational building blocks. When we project the vertices of a prism or the apex of a pyramid, we are essentially projecting points. Understanding how lines (like slant edges) are projected in different views is also crucial.
*   **CO2: Prepare Multiview orthographic projections of objects by visualizing them in different positions (Knowledge Level: K3).** This is the *core* of Module 2. We are learning to take 3D solids, visualize them, and accurately draw their Front, Top, and Side Views using orthographic projection principles. The "different positions" refer to how the solid is oriented relative to the planes of projection.
*   **CO3: Plot sectional views and develop surfaces of a given object (Knowledge Level: K3).** While sectioning and developments are covered in later modules, the ability to accurately project the *unsectioned* solid is a prerequisite. We need to know where the hidden lines are before we can cut through and reveal internal details or unfold the surfaces.
*   **CO4: Prepare pictorial drawings using the principles of isometric projection (Knowledge Level: K3).** Understanding orthographic views is essential for isometric projection. An isometric drawing is essentially a way of combining the information from the three principal views into a single 3D-like representation. You need to know what the object looks like from the front, top, and side to draw it isometrically.
*   **CO5: Sketch simple drawing using CAD tools. (Knowledge Level: K3).** Modern engineering relies heavily on CAD. The principles of orthographic projection we learn here are directly implemented in CAD software. When you create a view in AutoCAD or SolidWorks, you are applying these projection principles. The accuracy we strive for in manual drawing translates into efficient and precise digital modeling.

### Common Pitfalls and Exam Tips

*   **Orientation is King:** Always pay close attention to how the solid is oriented. Is it resting on its base? On an edge? On a face? This dictates the shape of the views.
*   **Hidden Lines:** Don't forget hidden lines! They are critical for showing the complete form of the object. A solid drawing without correct hidden lines is incomplete.
*   **Labeling:** Label your views (Front View, Top View, etc.) and important points (vertices, apex). This makes your drawing clear and understandable.
*   **XY Line and Reference Lines:** Ensure correct placement relative to the XY line for the projection system you are using (likely First Angle).
*   **True Shape vs. Foreshortened:** Understand when a shape (like the base of a prism or pyramid) will appear in its true shape (e.g., top view of a prism on its base) versus when it will be foreshortened (e.g., base of a pyramid resting on an edge).
*   **Practice, Practice, Practice:** These concepts solidify with practice. Work through as many examples as you can from the textbooks.
