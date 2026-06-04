---
title: "Sections of Solids:  Sections of Prisms, Pyramids, Cone and Cylinder only, with axis in vertical position and cut by different section planes."
subject: "ENGINEERING GRAPHICS AND COMPUTER AIDED DRAWING"
module: "Module 3: Sections of Solids:  Sections of Prisms, Pyramids, Cone and Cylinder only, with axis in vertical position and cut by different section planes."
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213e9ece2bdd875f9442"
status: "completed"
scrapedAt: "2026-05-23T16:02:01.060Z"
---
# Engineering Graphics and Computer Aided Drawing

## Module 3: Sections of Solids

### Topic: Sections of Prisms, Pyramids, Cone and Cylinder

Welcome back, everyone! In Module 3, we're diving into a really crucial aspect of engineering drawings: **Sections of Solids**. Understanding how solids are cut by various planes is fundamental for visualizing internal features, designing components, and manufacturing them accurately. This module directly builds upon your ability to project objects (CO2) and is essential for plotting sectional views (CO3).

Today, we'll focus specifically on the *sections of prisms, pyramids, cones, and cylinders*. A key simplification here is that we'll assume the *axis of these solids is in the vertical position*. This makes our initial understanding much more straightforward. We'll explore how different *section planes* interact with these basic shapes to produce distinct *section profiles*.

### 1. What is a Section of a Solid?

Before we get into the specifics, let's clarify what we mean by a "section of a solid." Imagine you have a solid object, like a wooden block or a metal pipe. If you were to cut through this object with a sharp, thin blade – that's essentially what a section plane does in a drawing. The **section profile** is the shape you would see on the flat surface created by this cut.

In engineering drawings, we don't actually cut the object. Instead, we use a **section plane** – an imaginary plane that passes through the solid. We then project the resulting shape onto a plane of projection, usually the plane of projection that shows the true shape of the section. This "section view" reveals the internal structure.

**Why do we do this?**

*   **To reveal internal details:** Think of a machine part. You might want to see if there are holes inside, or the shape of a cavity. A section view does exactly that. (This relates to CO3 – plotting sectional views).
*   **To show the true shape of the cut:** Sometimes, the shape of the cut isn't obvious from the exterior views. Sectioning helps us understand the geometry at the point of the cut.
*   **For manufacturing:** Many manufacturing processes, like machining, involve removing material. Sectional views are vital for planning these operations.

### 2. Key Concepts: Section Plane and Section Profile

*   **Section Plane:** This is the imaginary plane that cuts through the solid. The orientation of the section plane is crucial. It can be perpendicular to the axis, parallel to the base, inclined to the axis, or perpendicular to the axis and inclined to the base. For this topic, we'll mainly deal with planes that are inclined to the vertical axis.
*   **Section Profile:** This is the shape formed by the intersection of the section plane and the solid. This is what we need to draw. The section profile will always be a polygon or a curve, depending on the solid and the orientation of the section plane.

### 3. Types of Section Planes

Since we are considering solids with their axis in the vertical position, the common section planes we'll encounter are:

*   **Perpendicular to the Axis (Horizontal Section):** If the section plane is horizontal and cuts a solid whose axis is vertical, the section profile will typically be the same shape as the base of the solid (e.g., a square for a square prism, a circle for a cylinder or cone). This is the simplest case.
*   **Inclined to the Axis:** This is where things get more interesting and are very common in exams. The plane is tilted.
    *   **Inclined at an angle to the vertical axis and intersecting it:** The shape of the section will vary.
    *   **Perpendicular to the vertical axis and inclined to the base:** This is a common scenario, especially when the plane is described by its inclination to the horizontal plane.
*   **Parallel to the Base:** This is similar to being perpendicular to the vertical axis.

In our current scope, we are primarily concerned with planes that are **inclined to the vertical axis**. The way we determine the section profile is by considering where the section plane intersects the *edges* or *generators* of the solid.

### 4. Sections of Prisms

Let's start with prisms. Remember, a prism has two parallel, identical bases connected by rectangular faces.

#### 4.1 Square Prism

Imagine a square prism standing upright on its square base. Its axis is vertical.

*   **Scenario:** A section plane inclined at, say, 45 degrees to the horizontal plane cuts through the prism.
*   **How to find the section profile:**
    1.  **Draw the Orthographic Views:** You'll typically have the Front View (FV) and Top View (TV). For a square prism in the vertical position, the FV will be a rectangle, and the TV will be a square.
    2.  **Represent the Section Plane:** The section plane is usually shown as a line in one of the views. Often, it's shown in the Front View as an inclined line. Let's say this line intersects the vertical axis of the prism.
    3.  **Locate Intersection Points:** The section plane line will intersect the vertical edges of the prism in the Front View. Let's call these intersection points P, Q, R, S.
    4.  **Transfer to Top View:** Now, we need to find where these points P, Q, R, S lie in the Top View. Since the section plane is cutting through the prism, these points will lie on the edges of the square base in the Top View. We transfer these points horizontally from the Front View to the corresponding edges in the Top View.
    5.  **Draw the Section Profile:** Connect these transferred points in the Top View. The resulting shape will be the section profile. For a square prism cut by a plane inclined to its axis, the section profile will be a **parallelogram**. If the plane is perpendicular to the axis, it will be a square.

*   **Relating to COs:** This directly helps in CO3 (plotting sectional views) by applying the principles of orthographic projection.

#### 4.2 Pentagonal/Hexagonal Prism

The process is identical to the square prism, but the base shape changes. If you cut a hexagonal prism with an inclined plane, the section profile in the Top View will be a **hexagon**, but it will be distorted if the plane is inclined to the axis. The section profile formed by connecting the intersection points will be a **parallelogram** (or a hexagon with two opposite sides parallel and equal, and the other four sides equal and parallel in pairs if the plane cuts through all side faces symmetrically). *Remember: for a prism, the section profile will always have parallel sides if the plane is inclined at an angle to the axis, and the number of sides will correspond to the number of faces the plane cuts.*

#### **Common Pitfall:** Forgetting to project the intersection points from the FV to the TV. Always visualize where the cutting plane hits the *edges* of the solid.

### 5. Sections of Pyramids

Pyramids have a base and triangular faces that meet at an apex. The axis connects the apex to the center of the base.

#### 5.1 Square Pyramid

Imagine a square pyramid with its apex up and its square base on the HP. The axis is vertical.

*   **Scenario:** A section plane inclined at an angle to the horizontal plane cuts the pyramid.
*   **How to find the section profile:**
    1.  **Draw Orthographic Views:** Front View (a triangle) and Top View (a square). The apex is a point at the top in the FV and the center of the square in the TV. The base edges are lines in the TV and points in the FV (at the base). The slant edges are lines in both views.
    2.  **Represent the Section Plane:** Shown as a line in the FV, cutting across the triangular Front View.
    3.  **Locate Intersection Points:** The section plane line will cut the slant edges of the pyramid in the Front View. Let's call these points P, Q, R, S on the respective slant edges.
    4.  **Transfer to Top View:** Now, we transfer these points to the Top View. Each point P, Q, R, S lies on a corresponding slant edge in the TV. We use horizontal projectors from P, Q, R, S in the FV to the respective slant edges in the TV.
    5.  **Draw the Section Profile:** Connect the transferred points P', Q', R', S' in the Top View. The resulting shape will be the section profile. For a pyramid cut by a plane inclined to its axis, the section profile will be a **quadrilateral** (specifically, a trapezoid if the plane cuts two pairs of opposite slant edges). If the plane is parallel to the base (and thus perpendicular to the axis), the section profile will be the same shape as the base (a square in this case).

*   **Example:** Think of slicing a carrot. If you slice it horizontally, you get a circle. If you slice it diagonally, you get a more complex shape. This is similar.

*   **Connection to COs:** Again, this is a direct application of CO3. Understanding how the section plane intersects the lines forming the solid is key.

#### 5.2 Pentagonal/Hexagonal Pyramid

The principle remains the same. The section profile will be a polygon. If the cutting plane is inclined to the axis, the section will be a **trapezoid** if it cuts two pairs of edges and the base, or a **pentagon/hexagon** (but not similar to the base) if it cuts all the edges of the base and the slant edges above the base. If the plane is parallel to the base, the section profile will be a pentagon or hexagon, similar to the base.

### 6. Sections of Cylinders

A cylinder has two parallel circular bases connected by a curved surface.

#### 6.1 Vertical Cylinder

Imagine a cylinder standing on its circular base. Its axis is vertical.

*   **Scenario:** A section plane inclined to the horizontal plane cuts through the cylinder.
*   **How to find the section profile:**
    1.  **Draw Orthographic Views:** Front View (a rectangle) and Top View (a circle).
    2.  **Represent the Section Plane:** Shown as a line in the FV, cutting across the rectangle. This line will intersect the vertical sides of the rectangle.
    3.  **Locate Intersection Points:** These intersection points represent where the plane cuts the "side" of the cylinder.
    4.  **Transfer to Top View:** The "side" of the cylinder in the Front View is actually the curved surface, which appears as vertical lines in the FV. In the Top View, this curved surface is represented by the circle. The section plane intersects the cylinder's surface. The points of intersection in the FV need to be transferred to the corresponding *vertical generators* of the cylinder in the TV. Since the TV is a circle, these points will lie on the circumference. We transfer the heights from the FV to the TV.
    5.  **Draw the Section Profile:** Connect the transferred points. The shape of the section profile depends on the inclination of the plane.
        *   If the plane is **horizontal** (perpendicular to the axis), the section is a **circle**.
        *   If the plane is **vertical** (parallel to the axis), the section is a **rectangle**.
        *   If the plane is **inclined to the axis** (and not vertical or horizontal), the section is an **ellipse**.

*   **Analogy:** Think of slicing a can of soup. A straight cut across the top gives a circle. A cut that goes straight down the side gives a rectangle. A slanted cut gives an oval shape – that's an ellipse!

### 7. Sections of Cones

A cone has a circular base and a curved surface that tapers to an apex.

#### 7.1 Vertical Cone

Imagine a cone standing on its circular base. Its axis is vertical.

*   **Scenario:** A section plane inclined to the horizontal plane cuts through the cone.
*   **How to find the section profile:**
    1.  **Draw Orthographic Views:** Front View (a triangle) and Top View (a circle). The apex is a point at the top in the FV and the center of the circle in the TV. The base edge is a circle in the TV and a line in the FV (at the base). The slant edges are lines in both views.
    2.  **Represent the Section Plane:** Shown as a line in the FV, cutting across the triangle. This line intersects the slant edges of the triangle.
    3.  **Locate Intersection Points:** Let the intersection points on the slant edges in the FV be P, Q, R.
    4.  **Transfer to Top View:** These points P, Q, R lie on the respective slant edges of the cone in the TV. We transfer these points horizontally from the FV to the corresponding slant lines in the TV.
    5.  **Draw the Section Profile:** Connect the transferred points in the TV. The shape of the section profile depends on the inclination of the plane:
        *   If the plane is **horizontal** (perpendicular to the axis), the section is a **circle**.
        *   If the plane is **vertical** (parallel to the axis and passing through the apex), the section is a **triangle**.
        *   If the plane is **inclined to the axis** and passes through the apex, the section is a **triangle**.
        *   If the plane is **inclined to the axis** and does not pass through the apex, the section is a **parabola**.
        *   If the plane is **inclined to the axis** and cuts both the base and the slant surface, the section is a **hyperbola**.
        *   If the plane is **inclined to the axis** and cuts the slant surface but is **parallel to a slant edge** in the Front View, the section is a **parabola**. (This is a critical one to remember).
        *   If the plane is **inclined to the axis** and cuts the slant surface such that it is **not parallel to a slant edge**, it's a **hyperbola**.

*   **Visualizing:** For a cone, the different shapes you get are called **conic sections**. Think of shining a flashlight beam onto a wall. If you aim it straight at the wall, you get a circle. If you tilt the flashlight slightly, you get an ellipse. If you tilt it more, you get a parabola. If you tilt it even more, so the beam is almost parallel to the cone shape of the flashlight itself, you get a hyperbola.

### 8. Development of Surfaces (Brief Mention related to Sections)

While this topic focuses on the section profile, remember that understanding sections is often a precursor to developing the surfaces of solids. For example, if you cut a prism with an inclined plane, the section profile needs to be drawn, and then this profile might be used to determine the shape of the material after cutting. (CO3 covers developing surfaces, and sections are a stepping stone).

### 9. CAD Implementation

Using CAD software like AutoCAD significantly simplifies drawing sections.

*   **Commands:** You'll typically use commands like `REVOLVE` or `EXTRUDE` to create the initial solids, `SLICE` or `SECTION` to cut them, and then `HATCH` to fill the sectional area.
*   **Process:**
    1.  Draw the solid using 2D profiles and revolution/extrusion.
    2.  Create a cutting plane line (as a polyline or line).
    3.  Use the `SLICE` command, selecting the solid and the cutting plane. This generates the sectional solid.
    4.  Alternatively, you can extract the boundary of the section using the `SECTION` command (which creates a surface) and then `BOUNDARY` to get a closed profile.
    5.  Use the `HATCH` command with an appropriate pattern (like ANSI31) to show the section.
*   **Benefits:** CAD ensures accuracy, allows for easy modification, and generates clean, professional drawings. This directly supports CO5 (Sketch simple drawing using CAD tools).

### 10. Exam Focus and Key Takeaways

*   **Most Common Solids:** Prisms, Pyramids, Cylinders, and Cones.
*   **Most Common Section Planes:** Inclined to the axis. Horizontal planes are simpler but still important. Vertical planes are also common.
*   **Key Shapes of Sections:**
    *   Prism: Parallelogram (if inclined), Rectangle/Square (if perpendicular to axis).
    *   Pyramid: Quadrilateral (trapezoid if inclined), Square/Triangle (if perpendicular to axis).
    *   Cylinder: Circle (horizontal), Rectangle (vertical), Ellipse (inclined).
    *   Cone: Circle (horizontal), Triangle (vertical or through apex inclined), Parabola (inclined, parallel to slant edge), Hyperbola (inclined, not parallel to slant edge).
*   **Methodology:** Always draw the orthographic views first. Represent the section plane. Find intersection points on the *edges* of the solid. Transfer these points to the other view using projectors. Connect the transferred points to get the section profile. Hatch the section area.
*   **True Shape of Section:** Sometimes, the question asks for the *true shape* of the section. This happens when the section plane is parallel to the plane of projection. For solids with a vertical axis, if the section plane is horizontal, its shape in the Top View will be the true shape. If the section plane is inclined, you might need to draw an auxiliary view to get the true shape.
*   **Relating to COs:**
    *   CO2: Visualize solids and their projections to understand where the plane cuts.
    *   CO3: This entire topic is about plotting sectional views.
    *   CO5: Practice these sections in CAD.

**Remember this:** The accuracy of your section view depends entirely on correctly locating the intersection points on the edges of the solid and projecting them accurately.

---

### Sample Questions and Answers

**Q1. When a cylinder is cut by a plane inclined to its axis, what is the shape of the section produced?**

*   **Answer:** An ellipse.
*   **Reasoning:** A cylinder's surface can be thought of as lines parallel to its axis. When a plane inclined to the axis cuts this surface, the intersection creates an elliptical profile. This is a fundamental geometric property, similar to how slicing an oval object at an angle produces an oval. (Relates to CO2, CO3)

**Q2. A square pyramid is cut by a plane parallel to its base. What is the shape of the section?**

*   **Answer:** A square.
*   **Reasoning:** A plane parallel to the base of any pyramid (or cone) will produce a section that is geometrically similar to the base. Since the base is a square, the section will also be a square. This plane is also perpendicular to the pyramid's vertical axis. (Relates to CO2, CO3)

**Q3. A cone is cut by a plane that is perpendicular to its axis. What is the shape of the section?**

*   **Answer:** A circle.
*   **Reasoning:** When a plane perpendicular to the axis of a cone intersects the cone, it cuts through the circular base at a constant distance from the apex, resulting in a circular section. This is analogous to slicing a carrot horizontally. (Relates to CO2, CO3)

**Q4. How would you obtain the "true shape" of a section when the section plane is inclined to the axis of a cylinder?**

*   **Answer:** You would typically draw an auxiliary view. The auxiliary plane of projection is placed parallel to the cutting section plane. Projecting the intersection points onto this auxiliary plane will reveal the true shape of the section, which is an ellipse.
*   **Reasoning:** In orthographic views, inclined planes are foreshortened. The auxiliary view is specifically designed to show features in their true shape by aligning the viewing direction parallel to the feature of interest (in this case, the section plane). This demonstrates an application of projection principles beyond basic orthographic views. (Relates to CO2, CO3)

**Q5. Briefly explain the role of the `SLICE` command in AutoCAD for sectioning solids.**

*   **Answer:** The `SLICE` command in AutoCAD allows you to cut a 3D solid object using a plane. You select the solid, define the cutting plane (using points, a plane normal, or an existing object), and then choose which part of the solid to keep (positive or negative side of the plane). This effectively creates the sectional solid. You can then use the `HATCH` command to shade the newly exposed surface.
*   **Reasoning:** This directly addresses the practical implementation of sectioning using CAD tools, fulfilling CO5. It's a core command for generating sectional views in a digital environment.
