---
title: "Projection of solids in simple position including profile view."
subject: "ENGINEERING GRAPHICS AND COMPUTER AIDED DRAWING"
module: "Module 2: Projection of Simple solids such as Triangular, Rectangle, Square, Pentagonal and Hexagonal Prisms, Pyramids, Cone and Cylinder only."
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc8f20463779487da0aa"
status: "completed"
scrapedAt: "2026-05-23T17:33:53.346Z"
---
# Engineering Graphics and Computer Aided Drawing - Module 2: Projection of Simple Solids in Simple Position

Welcome back, everyone! In this module, we're diving into the fascinating world of projecting solids. We've already mastered points and lines, and now we're going to build upon that foundation to represent three-dimensional objects on a two-dimensional plane. This is crucial for anyone involved in design, manufacturing, or even just understanding technical drawings. Think about it – how does an architect communicate their vision for a building to a contractor? Through projections! How does an engineer explain a complex machine part to a machinist? Again, projections!

This particular topic, **"Projection of solids in simple position including profile view,"** is where we start seeing how these basic principles apply to more complex forms. We’ll focus on solids like prisms, pyramids, cones, and cylinders when they're resting in a straightforward, uncomplicated manner.

## Connecting with Our Course Outcomes

Before we get our hands dirty with drawing, let’s quickly see how this topic directly helps us achieve our course objectives:

*   **CO1: Understand the projection of points and lines located in different quadrants (Knowledge Level: K2)** - Remember all those exercises with points and lines? That’s our building block. Everything we do with solids relies on correctly projecting their constituent points (like vertices) and edges (lines connecting vertices). If our points and lines are off, our solid projections will be too!
*   **CO2: Prepare Multiview orthographic projections of objects by visualizing them in different positions (Knowledge Level: K3)** - This is the core of what we're doing. We’re visualizing a 3D solid and creating its 2D representations in the Front View (Elevation) and Top View (Plan). We’ll also introduce the **Profile View** (Side View), which gives us another crucial perspective, helping us to fully define the object. This directly addresses the "visualizing them in different positions" part, even though here the position is "simple."
*   **CO3: Plot sectional views and develop surfaces of a given object (Knowledge Level: K3)** - While we're not covering sections or developments *yet*, understanding how to project a solid in its basic orientation is a prerequisite for these more advanced topics. Imagine trying to cut a shape if you don't know what the original shape looks like!
*   **CO4: Prepare pictorial drawings using the principles of isometric projection (Knowledge Level: K3)** - Similar to CO3, knowing the orthographic views of a solid helps immensely when you move on to creating pictorial views like isometric drawings. You can verify your 3D representation against your 2D projections.
*   **CO5: Sketch simple drawing using CAD tools. (Knowledge Level: K3)** - The principles we learn here are directly transferable to CAD. When you use commands like `LINE`, `CIRCLE`, `EXTRUDE`, or `REVOLVE` in software like AutoCAD, you're applying these projection concepts. Knowing *why* you’re drawing what you’re drawing makes you a much more effective CAD user.

So, you see, this isn't just about drawing shapes; it's about understanding spatial relationships and communicating them accurately.

## What is a "Simple Position"?

When we talk about solids in a "simple position," we mean they are resting in a very stable and straightforward manner relative to the projection planes (Horizontal Plane - HP and Vertical Plane - VP). Typically, this means:

*   **One of its bases is parallel to one of the principal planes (either HP or VP).**
*   **The axis of the solid is perpendicular to the other principal plane.**

Think of it like this:
*   A cylinder standing upright on a table (which we can imagine as the HP). Its circular base is parallel to the table, and its axis (the line running through the center from base to base) is perpendicular to the table.
*   A square prism lying flat on its rectangular face. This face is parallel to the HP, and its axis is parallel to the HP.

For this topic, the most common "simple position" we'll deal with is when **the solid rests on one of its bases, and that base is parallel to the Horizontal Plane (HP)**. This means the solid is standing upright.

## Understanding the Solids: A Quick Refresher

Let's quickly recap the solids we'll be dealing with. Knowing their fundamental structure is key to projecting them correctly.

### Prisms

A prism is a solid that has two identical bases that are parallel polygons, and its sides are rectangles. The name of the prism is derived from the shape of its base.

*   **Triangular Prism:** Bases are triangles.
*   **Rectangular Prism (or Cuboid):** Bases are rectangles. If all sides are equal, it's a cube.
*   **Square Prism:** Bases are squares.
*   **Pentagonal Prism:** Bases are pentagons.
*   **Hexagonal Prism:** Bases are hexagons.

Imagine a stack of identical shape cutouts – that's essentially a prism. The "height" of the prism is the distance between its two bases.

### Pyramids

A pyramid is a solid that has a polygon as its base and triangular faces that meet at a single point called the **apex**. Like prisms, they are named after their base shape.

*   **Triangular Pyramid (or Tetrahedron):** Base is a triangle.
*   **Square Pyramid:** Base is a square.
*   **Pentagonal Pyramid:** Base is a pentagon.
*   **Hexagonal Pyramid:** Base is a hexagon.

Think of the Egyptian pyramids – they have a square base and triangular sides meeting at an apex. The **axis** of a pyramid is the line connecting the apex to the center of the base. For a "right pyramid" (which is what we'll assume unless stated otherwise), the axis is perpendicular to the base.

### Cone

A cone is a solid that has a circular base and tapers smoothly to a point called the **apex**. Think of an ice cream cone (the edible kind!). The **axis** of a cone is the line connecting the apex to the center of the circular base.

### Cylinder

A cylinder is a solid that has two identical circular bases that are parallel, connected by a curved surface. Think of a can of soup. The **axis** of a cylinder is the line connecting the centers of the two circular bases.

## Projection Principles for Solids in Simple Position

Now, let's get to the drawing part. We'll follow the standard orthographic projection method. Remember our X-Y line, which represents the intersection of the HP and VP.

### Case 1: Solid Resting on its Base, Parallel to HP

This is the most common "simple position." The solid is standing upright.

**Key Idea:** When a solid rests on its base parallel to the HP, the **Top View (Plan)** will show the true shape of the base. The **Front View (Elevation)** will show the true shape of one of the rectangular or triangular faces (for prisms) or a triangle (for pyramids, cone) and the height of the solid.

Let’s take an example: **A Square Prism**

Imagine a square prism with a base side of 30mm and a height of 50mm. It’s resting on its square base on the HP.

**Step-by-Step Projection:**

1.  **Draw the X-Y Line:** This is our reference line.
2.  **Front View (Elevation):**
    *   Since the prism is resting on its base (parallel to HP) and we are looking from the front, we will see a rectangle.
    *   The width of this rectangle will be the side of the square base (30mm).
    *   The height of this rectangle will be the height of the prism (50mm).
    *   So, draw a rectangle of 30mm width and 50mm height.
    *   Now, we need to mark the vertices. Let's label the bottom base vertices as 1, 2, 3, 4 and the top base vertices as 5, 6, 7, 8, such that 5 is above 1, 6 above 2, etc.
    *   In the Front View, we see the faces which are perpendicular to the VP. If the square base is oriented such that its sides are parallel to the VP and HP, then we'll see the front face directly.
    *   Let's assume the square base is positioned such that its sides are inclined at 45 degrees to the VP. This is common to see the base vertices in the FV. In this orientation, we'd see two vertical edges and two rectangular faces. The outline would still be a 30x50 rectangle.
    *   **Important:** For prisms and cylinders, the *top* and *bottom* bases are visible as lines in the Front View if they are perpendicular to the VP. If the base is parallel to the HP, the top base line is the upper edge and the bottom base line is the lower edge. We will represent the edges.
    *   Let's simplify for now and assume the square base is positioned such that we see two edges in the FV. We'll draw the rectangle 30x50. We can mark the corners. Let the bottom corners be A and B (30mm apart) and the top corners be C and D (directly above A and B, 50mm away). So, ABCD is the Front View.
    *   **Visibility:** All lines in the Front View are generally visible in this simple position.
3.  **Top View (Plan):**
    *   Since the square base is parallel to the HP, the Top View will show the true shape of the square base.
    *   Project the points A, B, C, D from the Front View down onto the HP using projectors (lines perpendicular to the XY line).
    *   We will see a square of 30mm x 30mm.
    *   Let's label the corners of the square in the Top View. If A and B were the front corners, and C and D were the back corners in 3D (or vice-versa depending on orientation), in the Top View, we'll see the projection of all four corners.
    *   Let's assume the square base is placed such that in the Front View we see two vertical edges. This means the front face and back face are visible. In the Top View, we will see the square. Let's label the bottom corners in 3D as 1, 2, 3, 4 and the top as 5, 6, 7, 8. If 1-2-3-4 is the base on HP, then in FV we see the outline of the face 1-2-6-5 (assuming 1 is front-left, 2 is front-right). In TV, we see the square 1-2-3-4.
    *   Let's refine this. Consider a square prism with base vertices labelled 1, 2, 3, 4 in clockwise order from top-left, and top vertices 5, 6, 7, 8 corresponding to 1, 2, 3, 4. Base 1-2-3-4 is on HP. Height is 50mm.
        *   **Front View:** We see a rectangle. Let's assume the base is oriented such that two sides are parallel to VP. Then, in FV, we'd see two vertical lines (edges 1-5 and 2-6) and two horizontal lines (top and bottom base lines, or rather the projection of the front face 1-2-6-5). The width would be 30mm and height 50mm. We see edges 1-5 and 2-6 as outer lines. The top base line 5-6 and bottom base line 1-2 are also visible. So, FV is a 30x50 rectangle.
        *   **Top View:** We see the true shape of the base, which is a square. We project 1, 2, 3, 4, 5, 6, 7, 8 onto HP. In the TV, we will see the square 1-2-3-4. The edges 1-4, 2-3 are the side edges. Edges 1-2 and 3-4 are the bottom base edges projected. Edges 5-8 and 6-7 are the top base edges projected.
        *   **Visibility in Top View:** The bottom base (1-2-3-4) is on HP, so all its edges (1-2, 2-3, 3-4, 4-1) are visible. The top base edges (5-6, 6-7, 7-8, 8-5) are also visible because the prism is not very tall compared to its width and the edges connecting them are also visible. So, we draw the square.
4.  **Profile View (Side View):**
    *   This view gives us a look from the side. It's typically projected either from the Front View or the Top View onto a plane perpendicular to both HP and VP.
    *   We usually draw a 45-degree line (miter line) extending from the corner where the XY line meets the reference line for the side view.
    *   Let's project from the Front View. Draw projectors from the Front View vertically upwards and then turn them 90 degrees towards the right (or left) using the 45-degree line.
    *   We'll also project from the Top View horizontally towards the 45-degree line.
    *   The Profile View (let's say, Right Profile View) will show a rectangle of height equal to the height of the prism (50mm) and width equal to the side of the base (30mm).
    *   Essentially, the side view of a prism is also a rectangle. Its dimensions will be (height of prism) x (width/depth of the base as seen from the side). For a square prism, it's a 50x30 rectangle.

**Let's consider another example: A Hexagonal Prism**

Imagine a hexagonal prism resting on its hexagonal base on HP. Side of hexagon = 25mm, Height = 60mm.

*   **Front View:** Since it's resting on its base parallel to HP, the Front View will show a rectangle. The height of the rectangle is the height of the prism (60mm). The width of the rectangle will be the maximum width of the hexagonal base when viewed from the front. For a regular hexagon, the distance between two parallel sides is $2 \times (\text{side} \times \cos(30^\circ)) = 2 \times 25 \times \frac{\sqrt{3}}{2} = 25\sqrt{3} \approx 43.3$mm. This is the width. So, the Front View is a rectangle of 60mm height and approximately 43.3mm width. We'll need to mark the vertices appropriately. Let the hexagon be oriented such that two sides are horizontal. Then in FV, we see the height of the prism and the width between the two extreme vertical edges.
*   **Top View:** This will show the true shape of the hexagonal base, which is a regular hexagon with 25mm sides. We draw a hexagon.
*   **Profile View (Right Side View):** Project from the Front and Top views. This will also be a rectangle. Its height will be 60mm. Its width will be the distance between the two vertical edges of the hexagon as seen from the side. For a hexagon oriented with two sides horizontal, the distance between the two extreme vertical edges is the distance between opposite vertices, which is $2 \times \text{side} = 2 \times 25 = 50$mm. So, the Profile View is a 60x50 rectangle.

**Key Takeaway for Prisms/Cylinders in Simple Position (Base on HP):**

*   **Top View:** True shape of the base.
*   **Front View:** Rectangle (height = prism/cylinder height, width = width of base as seen from front).
*   **Profile View:** Rectangle (height = prism/cylinder height, width = width of base as seen from side).

### Case 2: Solid Resting on its Base, Perpendicular to VP (and thus Parallel to HP)

This is the situation we just discussed. The base is parallel to HP, and the axis is perpendicular to HP. This is the most common "simple position."

### Case 3: Solid Resting on one of its Rectangular/Triangular Faces, Parallel to VP

Let's consider a **Square Prism** again, this time lying on one of its rectangular faces on the HP.

*   **Front View:** Since it's lying on the HP, the front face (which is a rectangle) will be visible. The height of this rectangle in the Front View will be the height of the prism (50mm). The width will be the side of the square base (30mm). So, the Front View is a 30x50 rectangle.
*   **Top View:** Since it's resting on a face, the Top View will show the shape of the base (a square) and the corresponding top face. The width of the Top View will be the side of the square base (30mm). The length will be the height of the prism (50mm). So, the Top View is a rectangle of 30mm x 50mm.
*   **Profile View:** This will also be a rectangle, showing the side view of the prism. It would be a 50mm x 30mm rectangle (height x width).

**Key Takeaway for Prisms/Cylinders Lying on a Face (on HP):**

*   **Front View:** Rectangle (width = base side, height = prism height).
*   **Top View:** Rectangle (width = base side, length = prism height).
*   **Profile View:** Rectangle (height = prism height, width = base side).

The orientation of the base in the Top View and Front View depends on how the prism is lying.

### Pyramids and Cone in Simple Position (Base on HP)

Now let's look at pyramids and the cone. They behave slightly differently due to their tapering nature.

**Key Idea:** When a pyramid or cone rests on its base parallel to the HP, the **Top View** shows the true shape of the base. The **Front View** and **Profile View** will show a triangle, with the apex of the triangle coinciding with the projection of the apex of the solid, and the base of the triangle representing the base of the solid.

Let's take an example: **A Square Pyramid**

Square base side = 30mm, Height = 50mm. Resting on its square base on HP.

**Step-by-Step Projection:**

1.  **Draw the X-Y Line.**
2.  **Front View (Elevation):**
    *   The base is on HP, so we see the base as a line in the Front View. This line will have a length corresponding to the width of the base as seen from the front.
    *   If the square base is oriented such that two sides are parallel to VP, then in the FV, we see the base as a line of 30mm.
    *   The apex (let's call it O) will be directly above the center of the base. The height is 50mm.
    *   So, the Front View is an isosceles triangle. The base of the triangle is 30mm (representing the square base). The height of the triangle is 50mm (the height of the pyramid). The apex O is at the top.
    *   We need to mark the vertices of the base. Let the base vertices be 1, 2, 3, 4. Let 1-2 be the front edge, 3-4 the back edge. In FV, we'll see a line representing 1-2 and another line representing 3-4 (which will be behind 1-2). So, the base line in FV would be 30mm wide.
    *   **Visibility in FV:** The front edge of the base (1-2) is visible. The edges connecting the apex to the base corners (O-1 and O-2) are visible. The edges O-3 and O-4 are hidden behind O-1 and O-2 respectively. So, we draw the triangle O-1-2, and a hidden line from O to 3 and O to 4 (or rather, the base corners 1 and 2 are at the ends of the 30mm line, and we draw O-1 and O-2 as visible lines. The base line is 1-2. The apex is O. The remaining base vertices 3 and 4 are projected behind 1 and 2. The edges O-3 and O-4 would be hidden).
    *   Let's simplify: For a pyramid on its base, the FV shows a triangle. Base width is the width of the base seen from front. Height is the pyramid's height.
3.  **Top View (Plan):**
    *   This view shows the true shape of the base, which is a square of 30mm x 30mm.
    *   Project the apex O and the base vertices (1, 2, 3, 4) from the Front View down to the HP.
    *   The apex O will be at the center of the square. The base vertices 1, 2, 3, 4 will form the square.
    *   **Visibility in TV:** The entire base square (1-2-3-4) is visible. The edges connecting the apex to the base vertices (O-1, O-2, O-3, O-4) are all visible because they are not obscured by anything. So, we draw the square, mark its center as O, and draw lines from O to each corner.
4.  **Profile View (Right Side View):**
    *   Project from Front View and Top View.
    *   The Profile View will show the true shape of the side face, which is a triangle.
    *   Its base will be the width of the base as seen from the side (30mm for a square).
    *   Its height will be the pyramid's height (50mm).
    *   **Visibility in Profile View:** Similar to the Front View, one edge of the base and two slant edges will be visible. The other two slant edges will be hidden. So, it will be a triangle with a hidden line.

**Let's consider a Cone**

Diameter of base = 40mm (Radius = 20mm), Height = 60mm. Resting on its circular base on HP.

*   **Front View:** We see the true height (60mm) and the diameter of the base (40mm). The view is an isosceles triangle. The base of the triangle is 40mm, and the height is 60mm. The apex of the triangle is the cone's apex. The base line is the diameter of the circular base. The two slant edges are the generators of the cone.
    *   **Visibility in FV:** The base diameter is visible. The two extreme generators are visible. The intermediate generators are hidden. So, we draw the triangle, and draw hidden lines for the intermediate generators from the apex to points on the base diameter.
*   **Top View:** This shows the true shape of the base, which is a circle of 40mm diameter. The apex O is at the center of the circle.
    *   **Visibility in TV:** The entire circle is visible. The apex O is visible at the center. We also draw hidden lines representing the generators connecting the apex to the circumference of the base, as these are not visible from the top.
*   **Profile View (Right Side View):** Similar to the Front View, this will be an isosceles triangle of 40mm base and 60mm height, with hidden lines for the intermediate generators.

**Key Takeaway for Pyramids/Cone in Simple Position (Base on HP):**

*   **Top View:** True shape of the base.
*   **Front View & Profile View:** Isosceles triangle (height = solid height, base = width of base as seen from that direction). Visibility requires drawing hidden lines for the edges/generators that are not visible.

## What About Visibility? The "Hidden Lines"

This is a crucial aspect that differentiates projections of solids from points and lines.

*   **Prisms and Cylinders:** In their simple positions, edges are generally visible unless they are directly behind another part of the solid. For example, in the Front View of a prism resting on its base, the edges of the back face might be hidden if the prism is viewed from the front. However, in the most basic "resting on base" scenario, the outline is usually solid. We must be careful about projecting hidden lines.
*   **Pyramids and Cones:** These inherently have edges (slant edges or generators) that connect to the apex. In the Front and Profile views, the edges on the "back side" will be hidden. In the Top View, all edges forming the base are visible, and all slant edges are visible unless they are obscured by the base itself (which doesn't happen in this simple position).

**How to represent hidden lines?** They are drawn as **dashed lines**. This is a convention in technical drawing to show that an edge exists but is not directly visible from that viewpoint.

## Putting It All Together: A Hexagonal Pyramid Example

Let's try a Hexagonal Pyramid: Side of base = 20mm, Height = 60mm. Resting on its hexagonal base on HP.

1.  **Draw X-Y Line.**
2.  **Top View (Plan):**
    *   Draw a regular hexagon with side 20mm.
    *   Mark the center of the hexagon as O (the apex).
    *   Draw lines from O to each vertex of the hexagon (these are the slant edges). All these lines are visible.
3.  **Front View (Elevation):**
    *   Project the apex O and the vertices of the hexagon from the Top View onto the HP.
    *   The base will appear as a line. The width of this line depends on how the hexagon is oriented. Let's orient it so two sides are parallel to the VP. In this case, the width of the base as seen from the front is the distance between the two extreme vertical edges, which is $2 \times \text{side} = 2 \times 20 = 40$mm.
    *   Draw an isosceles triangle with base 40mm and height 60mm. Let the base vertices be 1, 2 (front) and 6, 5 (back), corresponding to the hexagon's vertices projected. The apex is O.
    *   **Visibility:** The base edge 1-2 is visible. The slant edges O-1 and O-2 are visible. The slant edges O-5 and O-6 are hidden. So, draw O-1 and O-2 as solid lines, and O-5 and O-6 as dashed lines. The base line 1-2 is also visible.
4.  **Profile View (Right Side View):**
    *   Project the points from the Front and Top views.
    *   Draw a 45-degree miter line.
    *   The profile view will be an isosceles triangle. Its base will be the distance between the two horizontal sides of the hexagon in the top view (which is $2 \times \text{side} \times \cos(30^\circ) = 2 \times 20 \times \frac{\sqrt{3}}{2} = 20\sqrt{3} \approx 34.64$mm). Wait, this is incorrect for this orientation.
    *   Let's re-evaluate the orientation for the Front View. If two sides of the hexagon are parallel to the VP, then in the Top View, the hexagon has two horizontal sides. The extreme points are the vertices. The distance between the two extreme vertices is $2 \times \text{side} = 40$mm. So the FV base is 40mm.
    *   For the Profile View, we need the width of the hexagon as seen from the side. If we view from the right, we are looking at the hexagon from a direction perpendicular to the plane containing the two horizontal sides. We will see the distance between the two sides that are furthest apart in this view. This distance is the distance between the two sides parallel to the VP in the FV, which is $2 \times \text{side} \times \cos(30^\circ) = 20\sqrt{3} \approx 34.64$mm.
    *   So, the Profile View is an isosceles triangle with base 34.64mm and height 60mm.
    *   **Visibility:** Similar to the Front View, the edges visible from the side will be solid, and those on the far side will be dashed.

**Common Pitfall:** Getting the orientation and the resulting widths/lengths in the Front and Profile views correct for pyramids and cones. Always relate it back to the true shape in the Top View.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


## Textbooks and Reference Materials

As you work through these problems, remember to refer to your textbooks.
*   **Bhatt, N. D.** is a classic and provides very clear explanations. Look at chapters on "Projection of Solids."
*   **Varghese, P. I.** and **Benjamin, J.** also offer excellent coverage with plenty of solved examples.
*   For CAD integration, **Kulkarni, D. M., Rastogi, A. P. and Sarkar, A. K.** is invaluable. The principles learned here are directly applied when you use commands in AutoCAD to create these projections.

## Summary of Key Concepts for Exam Preparation

*   **Understand the distinction between prisms, pyramids, cones, and cylinders.** Their geometric construction dictates their projections.
*   **"Simple Position" means resting on a base parallel to HP, with the axis perpendicular to HP.** Or resting on a face parallel to HP.
*   **Top View shows the true shape of the base when resting on it.**
*   **Front View and Profile View show the object from the side and front respectively.** For pyramids/cones, these are triangles. For prisms/cylinders, these are rectangles (or the shape of the face they rest on).
*   **Visibility is crucial.** Use dashed lines for hidden edges.
*   **Practice is key.** Work through examples for each type of solid. Pay attention to how the orientation of the base affects the views.

## Sample Questions with Answers

Here are a few questions to test your understanding.

**Question 1 (Conceptual):** When a cylinder rests on its circular base on the Horizontal Plane, what is the shape of its Top View?
**Answer:** The Top View will be a circle, representing the true shape of the circular base. This is because the base is parallel to the Horizontal Plane.

**Question 2 (Application):** A pentagonal prism has a base side of 25mm and a height of 70mm. It rests on its pentagonal base on the HP. Draw the Front View and Top View.
**Answer:**
*   **Top View:** A regular pentagon with sides of 25mm.
*   **Front View:** A rectangle. The height of the rectangle will be 70mm (the height of the prism). The width of the rectangle will be the maximum width of the pentagon as seen from the front. For a regular pentagon with two sides parallel to the VP, the width between the two extreme vertical edges is $2 \times \text{side} \times \cos(36^\circ) = 2 \times 25 \times \cos(36^\circ) \approx 2 \times 25 \times 0.809 \approx 40.45$mm. So, the Front View is a rectangle of 70mm height and approximately 40.45mm width. (Note: For exam purposes, you might be asked to orient it such that two vertices are on the vertical centerline, leading to a different width in the Front View).

**Question 3 (Analysis & Visibility):** A cone with base diameter 50mm and height 70mm rests on its circular base on the HP. Draw its Front View and Top View, showing hidden lines correctly.
**Answer:**
*   **Top View:** A circle of 50mm diameter. The center of the circle is the apex. All lines from the apex to the circumference (generators) are visible.
*   **Front View:** An isosceles triangle with base 50mm and height 70mm. The apex is at the top. The base line is the diameter. The two extreme edges (generators) are visible. The intermediate generators are hidden. So, you'll draw the triangle with solid lines for the base and the two outer slant edges. You will draw two dashed lines from the apex to points on the base, representing the hidden generators. The points for these hidden generators are usually found by dividing the base into an even number of parts (e.g., 8 or 12) in the top view and projecting them to the front view.

**Question 4 (Comparison):** What is the main difference in the Front View of a prism and a pyramid when both are resting on their bases on the HP?
**Answer:** The Front View of a prism resting on its base will be a rectangle (assuming the base is oriented to show a rectangular face in FV). The Front View of a pyramid resting on its base will be a triangle, with the apex at the top. The pyramid tapers to a point, while the prism has parallel bases connected by rectangular faces.