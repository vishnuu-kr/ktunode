---
title: "Isometric Projection: Isometric scale- Isometric View and Projections of Prisms, Pyramids, Cone, Cylinder, Frustum of Pyramid, Frustum of Cone, Sphere, Hemisphere and their combinations."
subject: "ENGINEERING GRAPHICS AND COMPUTER AIDED DRAWING"
module: "Module 4: Isometric Projection: Isometric scale"
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1edffeb4799d95e83832"
status: "completed"
scrapedAt: "2026-05-20T17:43:49.144Z"
---
# Engineering Graphics and Computer Aided Drawing

## Module 4: Isometric Projection: Isometric Scale

Welcome, everyone! In this module, we’re going to dive into the fascinating world of **Pictorial Projections**, specifically focusing on **Isometric Projection**. You know, sometimes a flat drawing just doesn't give us the full picture, right? We need something that looks more like the object itself, something that shows us three dimensions. That's where pictorial projections come in, and isometric projection is one of the most popular and useful types.

This module directly helps us achieve **Course Outcome 4 (CO4): Prepare pictorial drawings using the principles of isometric projection.** As we progress, you'll see how everything we learn here is about visualizing objects in a 3D space and representing them on a 2D plane in a way that’s very intuitive.

### 1. Introduction to Pictorial Projections and the Need for Isometric Projection

Before we get into the nitty-gritty of isometric projection, let's briefly touch upon why we even need these types of drawings.

*   **Orthographic Projections:** You're already familiar with these from previous modules – front view, top view, side view. They're excellent for showing exact dimensions and shapes, but they can be a bit abstract to visualize. Imagine trying to understand a complex machine just by looking at its separate orthographic views; it takes some effort to mentally assemble it.
*   **Pictorial Projections:** These drawings show the object in a single view, giving a realistic, three-dimensional appearance. This makes it much easier for everyone, even those without extensive technical drawing training, to understand the shape, size, and relative positions of the different parts of an object.

Now, within pictorial projections, there are different types:
*   **Oblique Projections:** Where one face is parallel to the plane of projection, and the receding lines are drawn at an angle.
*   **Axonometric Projections:** Where the object is inclined to the projection plane in such a way that three of its faces are seen. Isometric projection is a special type of axonometric projection.

### 2. Understanding Isometric Projection

So, what exactly *is* isometric projection? The name itself gives us a clue: "iso" means equal, and "metric" means measure. In isometric projection, the three axes (X, Y, and Z) are equally foreshortened, and the angles between any two of these axes, as projected onto the drawing plane, are equal.

Let’s visualize this. Imagine holding a cube and tilting it so that you can see three faces – the top, the front, and one of the sides. In an isometric projection, you do exactly that. The object is oriented such that its three principal axes (like the X, Y, and Z axes in a 3D coordinate system) are equally inclined to the plane of projection.

**Key Principles of Isometric Projection:**

*   **Axes Orientation:** The three principal axes (representing length, width, and height) are typically drawn at angles of **120 degrees** to each other in the projected view.
*   **Inclination to the Projection Plane:** To achieve this, the object is usually oriented such that one of its *body diagonals* is perpendicular to the projection plane. This results in the two lines parallel to the projection plane making angles of **30 degrees** with the horizontal.

Think of it like this: if you're looking at a box from a corner, you're seeing three sides. In isometric projection, we simulate that view. The lines representing the edges of the box will appear shorter than their actual length, and the angles between these lines (when projected onto our 2D paper) won't be the true 90 degrees. Instead, the angles between the projected axes will be 120 degrees, and the angles that the axes make with the horizontal will be 30 degrees.

This understanding is crucial for **CO4**, as it lays the foundation for how we will draw objects in a 3D perspective.

### 3. The Isometric Scale: Why It's Necessary

Here's a very important point, and it’s something that often trips students up. Because the axes are equally inclined to the plane of projection, the lengths of lines parallel to these axes are foreshortened. What does that mean? It means that a 100mm line drawn parallel to an axis in an isometric projection will *not* appear as 100mm on your drawing. It will appear shorter.

This foreshortening is consistent and is governed by a specific ratio. If you were to calculate this foreshortening factor (which involves trigonometry), you'd find it to be approximately 0.815 or 1/√2.

So, if we want to draw an object accurately in isometric projection, we need to account for this foreshortening. This is where the **Isometric Scale** comes in.

**What is an Isometric Scale?**

An isometric scale is a special scale used to draw isometric projections where the foreshortened lengths are measured directly. Instead of just using your regular ruler and knowing that a 100mm real length will appear shorter, you’ll use an isometric scale to mark that shorter length directly on your drawing.

**How is an Isometric Scale Constructed?**

The construction is relatively straightforward and relies on the 30-degree inclination we talked about.

1.  **Draw a True Length Scale:** Start by drawing a line representing your true length scale (e.g., 0, 10, 20, 30, ... up to the maximum dimension you might need).
2.  **Draw Inclined Lines:** From the zero mark of this true length scale, draw a line at an angle of **30 degrees** to the horizontal. This will represent your isometric scale.
3.  **Draw Perpendicular Line:** From the zero mark, also draw a line perpendicular to the horizontal (i.e., vertically upwards). This line will represent the true lengths.
4.  **Transfer Divisions:** Now, take a division on your true length scale (say, 10mm, representing 10 actual mm). From the 10mm mark on the vertical line, draw a line parallel to the 30-degree line, until it intersects the 30-degree line. The point of intersection on the 30-degree line represents the isometric length of that 10mm true length.
5.  **Repeat:** Repeat this process for all the divisions on your true length scale. You’ve now constructed your isometric scale!

**Why is this important?** Without the isometric scale, your isometric drawing would be projected, but the *dimensions* wouldn’t be correct. They would be in the ratio of 1:1:1 for the axes, but the lengths along those axes would be foreshortened. If you use the regular scale, your object will appear about 21% larger than it should be. Using the isometric scale ensures that your drawing is dimensionally correct in the isometric projection.

This concept directly addresses the need for accurate representation in pictorial drawings, reinforcing **CO4**.

### 4. Isometric View vs. Isometric Projection

This is another subtle but important distinction.

*   **Isometric Projection:** This is the projection obtained when the object is placed such that its three principal axes are equally inclined to the plane of projection. In this projection, the lengths along the axes are foreshortened by the isometric scale.
*   **Isometric View:** This is a pictorial representation that *looks* like an isometric projection but is drawn using the regular scale, without considering the foreshortening. This means lines parallel to the isometric axes are drawn to their true lengths. The angles between the axes remain 120 degrees.

Most of the time in engineering graphics, when we say "isometric projection," we are often referring to the method of drawing where we *do* use the isometric scale. However, sometimes, for simplicity or a slightly larger appearance, an "isometric view" is used where the true lengths are marked along the isometric axes. It's good to be aware of both. For exam purposes, unless specified, using the isometric scale for an isometric projection is generally expected for accurate dimensional representation.

### 5. Projections of Standard Engineering Solids in Isometric

Now, let’s apply these principles to drawing common engineering shapes – prisms, pyramids, cones, cylinders, and their variations – in isometric projection. This is where we truly consolidate **CO4** by practicing the visualization and drawing of these objects.

When drawing any solid in isometric projection, the general approach remains the same:

1.  **Determine the Base Orientation:** Decide how the base of the solid should be positioned relative to the isometric axes.
2.  **Draw the Base:** Draw the base in isometric projection. For circular bases (like cylinders and cones), you'll typically draw an ellipse.
3.  **Draw the Vertical Axis:** Draw the height of the object along the vertical isometric axis.
4.  **Locate Key Points:** Locate the apex of pyramids/cones or the top face of prisms/cylinders.
5.  **Connect Lines:** Connect the relevant points to form the visible edges of the solid. Remember to use the isometric scale for all measurements taken along the isometric axes.

Let's look at each solid type:

#### 5.1 Prisms and Pyramids

*   **Prisms:** Have two identical bases (polygons) connected by rectangular faces.
*   **Pyramids:** Have a polygonal base and triangular faces meeting at an apex.

**General Procedure:**

1.  **Base:** Draw the polygonal base in isometric. This might involve drawing lines at 30 degrees and 120 degrees. For example, a square base will be drawn as a rhombus in isometric.
2.  **Height:** From the center of the base (or appropriate vertices), draw the height vertically (or along the Y-axis).
3.  **Top Face/Apex:** Draw the top base of the prism (which will be similar to the bottom base, just shifted up) or the apex of the pyramid at the top of the height line.
4.  **Connect:** Connect the vertices of the base to the corresponding vertices of the top face/apex. Ensure all visible lines are drawn.

**Example (Square Prism):**
Imagine a square prism with a base of 30x30mm and a height of 50mm.

*   Draw a rhombus in isometric (angles 90 degrees, but inclined to the horizontal at 30 degrees). Measure 30mm along each side of the rhombus using your isometric scale.
*   Find the center of this rhombus.
*   From the center, draw a vertical line (height) of 50mm using the isometric scale. This is the axis.
*   Draw a similar rhombus at the top of this vertical line, centered on the axis.
*   Connect the corresponding corners of the top and bottom rhombuses.

**Example (Square Pyramid):**
For a square pyramid with a base of 30x30mm and a height of 50mm:

*   Draw the rhombus base (30x30mm) as described above.
*   Find the center of the rhombus.
*   From the center, draw the vertical height of 50mm using the isometric scale. Mark the apex at the end of this line.
*   Connect the apex to each of the four corners of the rhombus base. All these connecting lines will be visible.

**What to remember for exams:** You'll often be given the orthographic views (front and top) of a prism or pyramid, and you'll need to draw its isometric projection. The key is to correctly interpret the base shape and dimensions from the top view and the height from the front view, and then apply the isometric drawing principles.

#### 5.2 Cylinders and Cones

*   **Cylinder:** A solid with two parallel circular bases connected by a curved surface.
*   **Cone:** A solid with a circular base and a curved surface tapering to a point (apex).

For circles in isometric projection, we draw **ellipses**. Since the circle is viewed at an angle, it appears compressed.

**Drawing Ellipses in Isometric:**

The most common and practical method is the **four-center method (or approximate ellipse method)**.

1.  **Draw the Rhombus:** Draw a rhombus whose diagonals correspond to the diameter of the circle. For a cylinder of diameter 40mm, you’d draw a rhombus with diagonals of 40mm. The sides of this rhombus will be at 30 degrees to the horizontal, and the diagonals will intersect at 90 degrees. The lengths of the diagonals are measured true.
2.  **Mark Centers:** Mark the midpoints of the sides of the rhombus. These are your four centers.
3.  **Draw Arcs:** From the two opposite vertices of the rhombus, draw arcs that pass through the two adjacent midpoints. These arcs will form the major portion of the ellipse.
4.  **Draw Smaller Arcs:** From the midpoints (centers), draw arcs that connect the points where the first arcs end. These will form the flatter portions of the ellipse.

**Procedure for Cylinder:**

1.  **Base Ellipse:** Draw the bottom circular base as an ellipse using the four-center method, with diagonals equal to the cylinder's diameter. Measure the lengths along the base axes (e.g., width and depth) using the isometric scale.
2.  **Height:** Draw the vertical axis of the cylinder from the center of the base ellipse. The length of this axis is the height of the cylinder, measured using the isometric scale.
3.  **Top Ellipse:** Draw the top circular base as an ellipse at the top of the height line, identical to the bottom ellipse.
4.  **Connect:** Draw vertical lines connecting the corresponding extreme points (where the vertical tangents touch the ellipses) of the top and bottom ellipses. These are the visible sides of the cylinder.

**Procedure for Cone:**

1.  **Base Ellipse:** Draw the circular base as an ellipse using the four-center method.
2.  **Height:** Draw the vertical axis from the center of the base ellipse. The length is the cone's height, measured using the isometric scale. Mark the apex at the top of this axis.
3.  **Connect:** Draw two straight lines from the apex, tangential to the base ellipse. These form the visible sloping edges of the cone.

**Relatable Example:** Think about looking at a cylindrical coffee mug or a traffic cone from a specific angle. The circular top and bottom appear squashed into ellipses, and the sides connect these ellipses. This is exactly what we're drawing.

#### 5.3 Frustum of Pyramid and Cone

*   **Frustum:** The part of a pyramid or cone left after cutting off the top portion by a plane parallel to the base.

**Frustum of Pyramid:**

1.  **Bottom Base:** Draw the bottom polygonal base in isometric.
2.  **Top Base:** Draw the top polygonal base in isometric, ensuring it's parallel and correctly positioned relative to the bottom base, accounting for any slant in the frustum. Measurements for both bases should use the isometric scale.
3.  **Connect:** Connect the corresponding vertices of the top and bottom bases with straight lines.

**Frustum of Cone:**

1.  **Bottom Base Ellipse:** Draw the bottom circular base as an ellipse.
2.  **Top Base Ellipse:** Draw the top circular base as a smaller ellipse, positioned above the bottom ellipse. The distance between the centers of the ellipses is the height of the frustum, measured using the isometric scale.
3.  **Connect:** Draw two straight lines that are tangential to both the top and bottom ellipses. These are the visible slant edges of the frustum.

**Think of it like a bucket or a truncated pyramid:** You're drawing the bottom opening, the top opening, and the slanted sides connecting them.

#### 5.4 Sphere and Hemisphere

*   **Sphere:** A perfectly round ball.
*   **Hemisphere:** Half a sphere.

**Drawing a Sphere in Isometric:**

A sphere, when projected isometrically, appears as a **circle**. This is because a sphere is symmetrical, and no matter how you orient it, its outline will always be circular.

1.  **Enclosing Box:** The easiest way to draw a sphere is to imagine it inscribed within a cube. Draw this cube in isometric projection (using the isometric scale for all its dimensions).
2.  **Draw the Circle:** Draw a circle inscribed within the front face of the isometric cube. This circle represents the sphere. Its diameter will be equal to the side length of the isometric cube, measured using the isometric scale.

Alternatively, you can draw the isometric projection of the sphere's equator, which is a circle, centered on the vertical axis of the imagined sphere, with a diameter equal to the sphere's diameter (measured using the isometric scale).

**Drawing a Hemisphere in Isometric:**

1.  **Draw the Sphere:** Draw the isometric projection of a full sphere as described above.
2.  **Cut Plane:** Imagine the hemisphere is cut by a plane passing through the center of the sphere, parallel to the ground. In the isometric view of the sphere, this cutting plane will appear as an ellipse passing through the center of the sphere's circular outline.
3.  **Draw the Ellipse:** Draw an ellipse representing the cutting plane. This ellipse will have its major axis along the vertical axis of the sphere and its minor axis horizontal, passing through the sphere's center. The size of this ellipse is determined by the projection of a circle (the equator of the hemisphere) at that level. A simpler way is to draw the ellipse that would represent the base of the hemisphere if it were cut by a horizontal plane. This ellipse will have the same diameter as the sphere, but it will be oriented such that its diagonals are at 30 degrees to the horizontal.
4.  **Visible Part:** The visible part of the hemisphere will be the top half of the sphere's circle and the newly drawn ellipse representing the base.

**Common Pitfall:** Students often try to draw a hemisphere using an ellipse for the curved part. Remember, the curved surface of the hemisphere itself appears circular in isometric projection, and the flat base is an ellipse.

#### 5.5 Combinations of Solids

Often, objects are made up of combinations of these basic solids. The key here is to:

1.  **Break Down:** Mentally break the complex object into its constituent simple solids (prisms, cylinders, cones, etc.).
2.  **Draw Each Part:** Draw the isometric projection of each simple solid individually, paying attention to their relative positions and how they connect.
3.  **Combine:** Combine these individual projections, ensuring that all visible lines and curves are correctly drawn. Hidden lines are usually omitted unless specifically asked for.

**Example:** Imagine a simple desk lamp base, which might be a cylinder topped with a frustum of a cone. You would draw the cylinder first, then draw the frustum of the cone on top of it, connecting the circular top of the cylinder to the circular base of the frustum.

This skill of deconstruction and reconstruction is vital for **CO4** and is a direct application of understanding how each solid is represented.

### 6. Key Takeaways and Exam Focus

*   **Isometric Scale:** Crucial for accurate dimensioning. Always construct and use it when asked for an *isometric projection*. If asked for an *isometric view*, you can use the regular scale, but be aware this leads to larger proportions.
*   **Angles:** Remember the 30-degree angles the axes make with the horizontal and the 120-degree angles between axes.
*   **Circles:** Circles become ellipses in isometric projection, best drawn using the four-center method within a rhombus.
*   **Visualization:** The most important skill is being able to visualize the object in 3D and then translate that into the isometric drawing. Practice with orthographic views is key.
*   **Combinations:** Deconstruct complex shapes into simpler ones. Draw each part accurately and then assemble them.

**Exam Tip:** When drawing combined solids, ensure the connection points are correct. For instance, if a cylinder is placed on top of a cube, the circular top of the cylinder must be tangent to the top face of the cube if it's centered.

By mastering these concepts, you’ll be well-equipped to tackle any problem involving isometric projections of these standard solids, directly contributing to your understanding and ability to perform **CO4**.

---

### Sample Questions and Answers

**Question 1 (Conceptual):** What is the primary purpose of using an isometric scale in isometric projection?

**Answer:** The primary purpose of using an isometric scale is to represent the true lengths of an object's edges accurately within the isometric projection. Because lines parallel to the isometric axes are foreshortened in an isometric projection, the isometric scale provides the correct, reduced lengths to be used directly on the drawing, ensuring dimensional accuracy. Without it, the drawing would be projected but not dimensionally correct.

**Question 2 (Procedural):** Briefly explain the steps to draw an isometric projection of a cylinder with a given diameter and height.

**Answer:**
1.  **Draw the Base Ellipse:** Construct a rhombus whose diagonals represent the true diameter of the cylinder. Using the four-center method, draw an ellipse inscribed within this rhombus. This represents the circular base of the cylinder. Measure the lengths of the diagonals using the true scale, and the lengths along the sides of the rhombus for positioning the ellipse using the isometric scale.
2.  **Draw the Vertical Axis:** From the center of the base ellipse, draw a vertical line equal to the height of the cylinder, measured using the isometric scale.
3.  **Draw the Top Ellipse:** At the top of the vertical axis, draw another ellipse identical to the base ellipse, representing the top circular face.
4.  **Connect:** Draw vertical lines tangent to the extreme points of both the top and bottom ellipses to represent the curved sides of the cylinder.

**Question 3 (Application/Exam-Oriented):** The front view of a square prism is a rectangle 30mm x 50mm, and its top view is a square of side 30mm. Draw the isometric projection of the prism.

**Answer:**
This question requires drawing a square prism isometrically.
*   **From the Top View:** We know the base is a square of side 30mm. In isometric projection, a square is represented by a rhombus.
*   **From the Front View:** We know the height of the prism is 50mm.

**Steps:**
1.  **Construct the Rhombus Base:** Draw two lines at 30 degrees to the horizontal, intersecting at a point. Measure 30mm along each of these lines from the intersection point using the *isometric scale*. Connect the ends of these lines to form a rhombus (which is the isometric projection of the square base).
2.  **Draw the Vertical Axis:** From the center of the rhombus, draw a vertical line (representing the prism's height) of 50mm using the *isometric scale*.
3.  **Draw the Top Rhombus:** At the top of this vertical axis, draw another rhombus identical to the base rhombus.
4.  **Connect the Vertices:** Connect the corresponding corners of the top and bottom rhombuses with straight lines. These lines represent the vertical edges of the prism. Ensure all visible edges are clearly drawn.

*(A sketch would typically accompany this answer in an exam, showing the construction with the 30-degree angles and the rhombus.)*

**Question 4 (Conceptual/Comparison):** What is the difference between an isometric projection and an isometric view?

**Answer:**
*   **Isometric Projection:** This is a type of axonometric projection where the object is oriented so that all three axes are equally foreshortened. When drawing it, the lengths along these axes must be measured using an **isometric scale** to represent the true dimensions of the object in this specific projection.
*   **Isometric View:** This is a pictorial representation that *mimics* the appearance of an isometric projection (axes at 120 degrees, receding lines at 30 degrees to the horizontal), but the dimensions are measured using the **regular scale** (true lengths). This results in an object that appears about 21% larger than its true isometric projection. In essence, an isometric view is a projection *without* foreshortening applied.

**Question 5 (Application):** Draw the isometric projection of a cone with a base diameter of 40mm and a height of 60mm.

**Answer:**
This requires drawing a cone isometrically, including the elliptical base.
1.  **Enclosing Rhombus for Base:** Draw a rhombus with diagonals of 40mm. The diagonals should be perpendicular to each other, and the sides should be inclined at 30 degrees to the horizontal. Measure the lengths of the diagonals (40mm) using the true scale.
2.  **Draw the Base Ellipse:** Using the four-center method, draw an ellipse inscribed within this rhombus. This is the base of the cone.
3.  **Draw the Vertical Axis:** From the center of the base ellipse, draw a vertical line of length 60mm using the *isometric scale*. This is the height of the cone. Mark the apex at the end of this line.
4.  **Draw the Slanting Lines:** Draw two lines from the apex that are tangent to the base ellipse. These are the visible slant edges of the cone.

*(A sketch showing the rhombus, ellipse, vertical axis, apex, and tangent lines would be required for a complete answer.)*

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
