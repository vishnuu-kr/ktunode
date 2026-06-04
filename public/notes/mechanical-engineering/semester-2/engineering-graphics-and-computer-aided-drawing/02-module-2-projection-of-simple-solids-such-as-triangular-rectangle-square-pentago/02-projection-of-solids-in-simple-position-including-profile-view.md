---
title: "Projection of solids in simple position including profile view."
subject: "ENGINEERING GRAPHICS AND COMPUTER AIDED DRAWING"
module: "Module 2: Projection of Simple solids such as Triangular, Rectangle, Square, Pentagonal and Hexagonal Prisms, Pyramids, Cone Cylinder and tetrahedron."
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1edffeb4799d95e8382d"
status: "completed"
scrapedAt: "2026-05-20T17:43:45.461Z"
---
## ENGINEERING GRAPHICS AND COMPUTER AIDED DRAWING
### Module 2: Projection of Simple Solids
#### Topic: Projection of Solids in Simple Position Including Profile View

Welcome everyone! Today, we're diving into a crucial aspect of engineering graphics: projecting solids. Think of this as learning to accurately represent three-dimensional objects on a two-dimensional piece of paper, or on your computer screen, so that anyone can understand their shape and size. This is fundamental to communicating design ideas, and it directly links to our Course Outcome **CO2: Prepare Multiview orthographic projections of objects by visualizing them in different positions.** We'll also touch upon how these concepts form the basis for **CO3: Plot sectional views and develop surfaces of a given object**, as understanding the full projection is the first step.

We're focusing today on solids in a "simple position." What does that mean? Simply put, it means the solid's axis is either perpendicular or parallel to one of the principal projection planes (the Horizontal Plane, HP, or the Vertical Plane, VP). This makes our job a bit easier to start with, as the shapes in the principal views (Front View, Top View, and Side View) will be familiar geometric shapes.

Let's begin by recapping our fundamental projection planes and views, as this is the bedrock upon which we build our understanding.

### Revisiting the Basics: Projection Planes and Views

Remember our Cartesian coordinate system? We have three mutually perpendicular planes:

*   **Horizontal Plane (HP):** This is our "ground plane." When we look from the front, we see the **Front View (FV)**, which is projected onto the Vertical Plane.
*   **Vertical Plane (VP):** This is the "wall plane" in front of us. When we look from above, we see the **Top View (TV)**, which is projected onto the Horizontal Plane.
*   **Profile Plane (PP):** This plane is perpendicular to both HP and VP. It allows us to see the object from the side, giving us the **Side View (SV)** or **Profile View**. When we look from the right side, it's the **Right Profile View (RPV)**; from the left, it's the **Left Profile View (LPV)**.

The intersection of HP and VP is called the **Reference Line (XY Line)**. The Front View is usually drawn above the XY line (in the first quadrant relative to the XY line for a standard first-angle projection setup), and the Top View is drawn below the XY line. The Side View's position depends on whether we're drawing the Right or Left Profile View. Typically, the LPV is drawn to the right of the FV, and the RPV to the left. This helps maintain a coherent layout, which is important for clarity and aligns with the visual organization principles in engineering drawings.

### Understanding Solids in Simple Position

A "simple position" for a solid generally means its axis is:

1.  **Perpendicular to HP and Parallel to VP:** In this case, the Top View will show the true shape of the base, and the Front View will show the height and the base edge.
2.  **Perpendicular to VP and Parallel to HP:** The Front View will show the true shape of the base, and the Top View will show the height and the base edge.
3.  **Parallel to both HP and VP:** Here, both the Front View and Top View will show the solid's dimensions, but the true shape of the base might not be visible directly in either.

We'll focus primarily on cases where the axis is inclined, as it's a natural progression from the simple positions. However, understanding these foundational positions is key.

### Projection of Common Simple Solids

Let's take a look at how we project some of the common solids mentioned in our syllabus. The principles are the same for all, but the base shapes differ.

#### 1. Prisms

A prism has a base that is a polygon and its sides are rectangles. It has two identical bases parallel to each other, connected by rectangular faces.

*   **Square Prism:** Imagine a shoebox. Its top and bottom are squares.
*   **Rectangular Prism:** Like a brick.
*   **Triangular Prism:** Think of a Toblerone box.
*   **Pentagonal Prism:** A prism with a pentagonal base.
*   **Hexagonal Prism:** A prism with a hexagonal base.

**Key Principle for Prisms in Simple Position:**

When the axis of a prism is perpendicular to the HP (and thus parallel to the VP), the **Top View** will show the **true shape of the base** (a square, rectangle, triangle, etc.). The **Front View** will show a **rectangle**, where the width is the diagonal of the base and the height is the height of the prism. If the axis is perpendicular to the VP, the roles are reversed.

**Example: Projection of a Square Prism**

Let's say we have a square prism with a base side of 30mm and a height of 60mm. It's resting on its base on the HP.

*   **Top View (TV):** Since it's resting on its base and the axis is perpendicular to HP, the TV will be a **30mm x 30mm square**. You'll see all four corners of the base.
*   **Front View (FV):** When you look from the front, you'll see the height of 60mm. The width you see will depend on how the square base is oriented. If one side of the square is parallel to the VP, you'll see a rectangle of 30mm width and 60mm height. If a diagonal is parallel to the VP, you'll see a rectangle whose width is the diagonal of the base (30√2 mm) and 60mm height. The projection of the edges of the base will be visible.
*   **Side View (SV) / Profile View:** Let's assume we are looking from the left (LPV). The LPV will also show a **rectangle**. Its width will be the same as the width of the base (30mm if a side is parallel to VP, or 30√2mm if a diagonal is parallel to VP), and its height will be 60mm.

**Connecting to CO2:** Here, we are visualizing the prism from different directions (top, front, side) and preparing the orthographic projections. The "simple position" makes it straightforward to recognize the shape of the base in one view.

#### 2. Pyramids

A pyramid has a base that is a polygon and triangular faces that meet at a single point called the apex.

*   **Square Pyramid:** Like the pyramids of Egypt!
*   **Rectangular Pyramid:** Base is a rectangle.
*   **Triangular Pyramid (Tetrahedron):** Base is a triangle. If all faces are equilateral triangles, it's a regular tetrahedron.
*   **Pentagonal Pyramid:** Base is a pentagon.
*   **Hexagonal Pyramid:** Base is a hexagon.

**Key Principle for Pyramids in Simple Position:**

When the axis of a pyramid is perpendicular to the HP (and thus parallel to the VP), the **Top View** will show the **true shape of the base** along with the apex at the center. The **Front View** will show a **triangle**, where the base of the triangle is an edge of the base of the pyramid, and the apex of the triangle is the apex of the pyramid.

**Example: Projection of a Square Pyramid**

Let's consider a square pyramid with a base side of 30mm and a height of 50mm, resting on its base on the HP.

*   **Top View (TV):** You'll see the **30mm x 30mm square base**. The **apex** will be exactly at the **center** of this square. You'll also see lines from the apex to the corners of the base, representing the slant edges.
*   **Front View (FV):** When you look from the front, you'll see a **triangle**. The base of this triangle will be the width of one of the base sides (30mm, assuming the base is oriented with a side parallel to the VP). The height of the triangle will be the pyramid's height, 50mm. The apex of the triangle in the FV is the apex of the pyramid. The edges of the base of the pyramid will also be projected.
*   **Side View (SV) / Profile View:** Similar to the FV, the SV (e.g., LPV) will also be a **triangle** with a base of 30mm and a height of 50mm.

**Connecting to CO2:** Again, we are visualizing the pyramid from different perspectives. The "simple position" allows us to clearly see the triangular elevation in the Front View.

#### 3. Cone

A cone has a circular base and a curved surface that tapers to a point called the apex.

**Key Principle for a Cone in Simple Position:**

When the axis of a cone is perpendicular to the HP (and parallel to VP), the **Top View** will be a **circle** (the true shape of the base) with the apex at its center. The **Front View** will be a **triangle**, with the base of the triangle being the diameter of the circular base, and the apex of the triangle being the apex of the cone.

**Example: Projection of a Cone**

Consider a cone with a base diameter of 40mm and a height of 60mm, resting on its base on the HP.

*   **Top View (TV):** You'll see a **circle** of 40mm diameter. The apex will be at the **center** of this circle.
*   **Front View (FV):** You'll see a **triangle**. The base of this triangle will be the diameter of the cone, which is 40mm. The height of the triangle will be the cone's height, 60mm. The apex of the triangle is the cone's apex.
*   **Side View (SV) / Profile View:** The Side View (e.g., LPV) will also be a **triangle** with a base of 40mm and a height of 60mm.

**Connecting to CO2:** This demonstrates how a circular base appears as a circle in one view and a triangle in another when the cone is in a simple position.

#### 4. Cylinder

A cylinder has two parallel circular bases connected by a curved surface.

**Key Principle for a Cylinder in Simple Position:**

When the axis of a cylinder is perpendicular to the HP (and parallel to VP), the **Top View** will be a **circle** (the true shape of the base). The **Front View** will be a **rectangle**, where the width is the diameter of the circular base and the height is the height of the cylinder.

**Example: Projection of a Cylinder**

Let's take a cylinder with a base diameter of 40mm and a height of 60mm, resting on its base on the HP.

*   **Top View (TV):** You'll see a **circle** of 40mm diameter.
*   **Front View (FV):** You'll see a **rectangle**. The width of this rectangle will be the diameter of the base, 40mm. The height of the rectangle will be the height of the cylinder, 60mm.
*   **Side View (SV) / Profile View:** The Side View (e.g., LPV) will also be a **rectangle** with a width of 40mm and a height of 60mm.

**Connecting to CO2:** This clearly shows how a circular base projects into a circle in one view and influences the dimensions of a rectangular projection in another.

#### 5. Tetrahedron

A tetrahedron is a pyramid with a triangular base, meaning it has four triangular faces. A *regular* tetrahedron has all four faces as equilateral triangles.

**Key Principle for a Tetrahedron in Simple Position:**

When resting on its base (an equilateral triangle) on the HP, the **Top View** will show the true shape of the equilateral triangle base. The **Front View** will show an isosceles triangle, representing one of the triangular faces, with the apex at the top.

**Example: Projection of a Regular Tetrahedron**

Consider a regular tetrahedron with an edge length of 40mm, resting on its base on the HP.

*   **Top View (TV):** You'll see an **equilateral triangle** with 40mm sides. The apex will be projected at the centroid of this triangle. The slant edges will be lines connecting the apex to the base vertices.
*   **Front View (FV):** You'll see an **isosceles triangle**. The base of this triangle will be one of the edges of the base triangle (40mm, if oriented correctly). The height of this triangle will be the slant height of the face, which is not the same as the altitude of the tetrahedron. The apex of this triangle is the apex of the tetrahedron.
*   **Side View (SV) / Profile View:** Similar to the FV, the Side View will also be an **isosceles triangle**.

**A Note on "Simple Position" and Exams:** Often, solids are presented in their simplest resting positions. For example, a prism or cylinder might rest on its base. A pyramid or cone might rest on its base. A tetrahedron typically rests on one of its triangular faces. The key is to identify which face the solid is resting on, and how the axis is oriented relative to the HP and VP.

### The Importance of the Profile View (Side View)

The profile view, or side view, is crucial for a complete understanding of the object's form. It acts as a third orthogonal projection, often showing dimensions or features that might be ambiguous in the Front and Top Views.

*   **Visualizing Depth:** While FV gives us height and width, and TV gives us width and depth, the SV provides the height and depth. Together, these three views allow us to reconstruct the object in 3D space.
*   **Completing the Picture:** For instance, in a hexagonal prism resting on its base, the FV would show a rectangle. The TV would show a hexagon. The SV would also show a rectangle, but it helps confirm the overall proportions and orientation.
*   **Assembling Components:** In more complex assemblies, the side view is vital for understanding how different parts fit together.

**How to Draw the Profile View (Left Profile View - LPV):**

1.  Draw the Front View (FV) and Top View (TV) as usual, with the XY line separating them.
2.  Draw a profile reference line (often denoted as AB or another label) perpendicular to the XY line, typically to the right of the FV.
3.  Project the points or lines from the FV horizontally to meet the profile reference line.
4.  Now, project these points from the profile reference line vertically downwards to align with the corresponding horizontal positions in the TV. To do this accurately, you often use a 45-degree line (or compass) from the intersection of the XY line and the profile reference line.
5.  Connect these projected points to form the LPV.

**Example: LPV of a Square Prism**

Let's revisit the square prism (30mm base side, 60mm height) resting on its base.

*   **FV:** Rectangle (say, 30mm wide, 60mm high).
*   **TV:** Square (30mm x 30mm).
*   **LPV:** Draw a profile line (AB) to the right of the FV. Project the top and bottom lines of the FV horizontally to intersect AB. From these intersection points on AB, project vertically downwards. Use a 45-degree line originating from the point where the profile line AB intersects the XY line. Project the sides of the square base from the TV onto this 45-degree line. Now, project these points vertically upwards from the 45-degree line to intersect the horizontal projection lines from the FV. This will form the LPV, which will be a 30mm wide and 60mm high rectangle.

**Connecting to CO2 and CO5:** Drawing the profile view requires careful visualization and projection. It's a key step in preparing complete multiview orthographic projections. For **CO5**, imagine doing this using CAD software; you'd be using commands like `LINE`, `CIRCLE`, `PROJECT`, and `MIRROR` (or `COPY` with precise positioning) to achieve the same result.

### Common Pitfalls and Exam Tips

*   **Visibility:** Always consider the visibility of lines. Lines that are closer to the observer are visible. In projections, this translates to understanding which parts of the solid are "in front" of others. For example, in the FV of a square prism resting on its base with one side parallel to VP, all visible edges are shown as solid lines. Hidden edges are shown as dashed lines.
*   **Projection of Apex:** For pyramids and cones, the apex projection is crucial. It's usually at the center of the base in the TV when the axis is perpendicular to HP.
*   **Conventions:** Stick to standard drawing conventions for line types (solid for visible, dashed for hidden).
*   **Accuracy:** Measure carefully and use your drafting tools or CAD commands precisely. Even small errors can lead to incorrect projections.
*   **Orientation:** Pay close attention to how the solid is oriented. Is it resting on its base? Is one of its edges on the HP? This dictates the initial views.

Remember, drawing projections is like looking through a window. You only see what's directly in front of that window. The challenge is to use those window views to understand the entire object.

### Linking to Course Outcomes (Recap)

*   **CO1 (Projection of Points and Lines):** Understanding the projection of points and lines is the foundation for projecting entire solids. The principles of how points and lines project onto HP and VP are directly applied here.
*   **CO2 (Multiview Orthographic Projections):** This entire topic is dedicated to preparing these multiview projections for simple solids. We're visualizing the solids and translating that visualization into FV, TV, and SV.
*   **CO3 (Sectional Views and Development of Surfaces):** To create sectional views or develop surfaces, you first need a complete and accurate projection of the solid in its un-sectioned state. Understanding how the edges and surfaces project is paramount before you can "cut" the solid or "unfold" it.
*   **CO4 (Pictorial Drawings):** While we are focusing on orthographic projections, understanding these projections helps in creating pictorial drawings (like isometric). You can often derive the dimensions needed for isometric projections from the orthographic views.
*   **CO5 (Sketching with CAD):** All the projection techniques we discuss can be implemented using CAD software. The process of constructing these views digitally involves translating geometric understanding into software commands.

This module builds a strong foundation. As you become more comfortable with solids in simple positions, we’ll move on to more complex orientations.

---

### Sample Questions with Answers

**Q1. A pentagonal prism is resting on its base on the HP. Describe the shape of its Top View and Front View.**

**Answer:**
When a pentagonal prism rests on its base on the HP, its axis is perpendicular to the HP and parallel to the VP.
*   **Top View (TV):** The TV will show the **true shape of the base**, which is a **pentagon**.
*   **Front View (FV):** The FV will show the **height** of the prism. Since the sides of the prism are rectangles, the FV will be a **rectangle**. The width of this rectangle will be the distance between the two extreme vertical edges of the prism as seen from the front, and the height will be the actual height of the prism.

**Reasoning:** This directly applies the principle that for a prism with its axis perpendicular to HP, the view parallel to HP (Top View) shows the base shape, and the view perpendicular to HP (Front View) shows the height and the projection of the side faces, which are rectangular. This relates to **CO2**.

**Q2. What is the difference in the Top View of a cone and a cylinder when both are resting on their bases on the HP and their axes are perpendicular to the HP?**

**Answer:**
When both a cone and a cylinder are resting on their circular bases on the HP with their axes perpendicular to the HP:
*   **Cone's Top View:** Will be a **circle** representing the base, with the **apex shown as a point at the center** of the circle.
*   **Cylinder's Top View:** Will be a **circle** representing the base, with **no apex** shown.

**Reasoning:** The key difference lies in the tapering nature of the cone. The apex of the cone is a single point, so in the view parallel to the base (Top View), this point is seen at the center of the circular base. The cylinder, having a uniform circular cross-section, only shows the circular base in its Top View. This question tests the understanding of the basic geometry of these solids and their projections, linking to **CO2**.

**Q3. Explain the role of the profile view in orthographic projection. How is it typically positioned relative to the Front View and Top View?**

**Answer:**
The profile view (or side view) provides a third orthogonal projection of an object, giving information about its depth and height, which complements the width and height from the Front View, and width and depth from the Top View. It is essential for a complete 3D representation on a 2D plane, aiding in understanding the object's overall form and dimensions.

Typically, the **Left Profile View (LPV)** is positioned to the **right** of the Front View. The **Right Profile View (RPV)** is positioned to the **left** of the Front View. The placement is usually achieved using projection lines and often a 45-degree line to transfer dimensions correctly between the Top View and the Profile View.

**Reasoning:** This question focuses on the purpose and placement of the side view, a core component of multiview projections. It directly addresses **CO2** and highlights the importance of spatial visualization.

**Q4. A square pyramid has a base edge of 30 mm and a height of 50 mm. If it rests on its base on the HP such that one edge of the base is inclined at 30° to the VP, what will be the shape of its Front View?**

**Answer:**
The Front View of a square pyramid resting on its base on the HP will always be a **triangle**. The base of this triangle will correspond to the width of the base as seen from the front, and its height will be the height of the pyramid. When one edge of the base is inclined at 30° to the VP, the base of the triangle in the Front View will be the projected length of the base edge onto the VP, which is effectively the width of the base edge itself (30 mm in this case), as the base is parallel to HP. So, the Front View will be an **isosceles triangle with a base of 30 mm and a height of 50 mm.**

**Reasoning:** While the inclination of the base to the VP affects the *position* of the triangle in the drawing space and potentially the width of the base in the Front View if the inclination was different (e.g., if we were projecting a *side* edge, not a base edge), for a pyramid resting on its base, the Front View is fundamentally a triangle. The base of this triangle corresponds to the apparent width of the base of the pyramid from the front. For a square base with an edge inclined at 30° to VP, the apparent width of that edge in the FV is simply its actual width (30mm). This question checks understanding of how orientations affect projections while retaining the fundamental shape, relating to **CO2**.

**Q5. Using CAD, what commands would you typically use to project a cylinder resting on its base on the HP? (Conceptual)**

**Answer:**
To project a cylinder resting on its base on the HP using CAD:
1.  **Draw the Top View:** Use the `CIRCLE` command to draw the circular base with the specified diameter.
2.  **Draw the Front View:** Use the `LINE` command to draw vertical lines representing the height of the cylinder from points on the circle's circumference, creating a rectangle. You might also use `OFFSET` from the circle's diameter and then `LINE` or `TRIM` to form the rectangle. The `PROJECT` command in some CAD systems could also be used to transfer the diameter from the circle to define the width of the rectangle.
3.  **Draw the Side View:** Similar to the Front View, use `LINE` or `OFFSET` to create a rectangle with the same dimensions as the Front View.

**Reasoning:** This question connects the geometric principles to practical application in CAD, addressing **CO5**. It requires thinking about which CAD tools correspond to the drawing actions.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
