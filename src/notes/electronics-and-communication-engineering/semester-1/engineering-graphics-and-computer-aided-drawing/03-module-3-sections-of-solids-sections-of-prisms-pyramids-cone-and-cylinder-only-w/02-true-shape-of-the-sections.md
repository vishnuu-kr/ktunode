---
title: "True shape of the sections."
subject: "ENGINEERING GRAPHICS AND COMPUTER AIDED DRAWING"
module: "Module 3: Sections of Solids:  Sections of Prisms, Pyramids, Cone and Cylinder only, with axis in vertical position and cut by different section planes."
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc8f20463779487da0ae"
status: "completed"
scrapedAt: "2026-05-23T17:33:55.475Z"
---
# Engineering Graphics and Computer Aided Drawing

## Module 3: Sections of Solids

### Topic: True Shape of Sections

Welcome back, everyone! In our previous sessions, we've explored how to represent solids in orthographic views and how to visualize their shapes when cut by various planes. Today, we delve into a crucial aspect of sectional views: determining the **true shape of the section**. This is where we go beyond just seeing the outline of the cut and actually understand the real geometry of the surface created by the cutting plane.

This topic directly addresses **Course Outcome 3 (CO3): Plot sectional views and develop surfaces of a given object**. Understanding the true shape of a section is fundamental to accurately plotting sectional views. Without it, a sectional view is incomplete and can even be misleading. We'll be building on our understanding of projections, directly relating to **CO1** and **CO2**, as we'll be using the information from the front view and top view to construct the true shape.

---

### What is a Sectional View?

Before we jump into the "true shape," let's quickly recap what a sectional view is. Imagine you have a solid object – say, a cube or a cylinder – and you slice it with an imaginary cutting plane. A sectional view shows the shape revealed by this cut, as if you were looking directly at the cut surface. This is incredibly useful for understanding the internal structure of objects, especially when hidden lines would otherwise obscure important details. Think of cutting a cake; the sectional view is what you see on the surface of the cut itself.

### Why Do We Need the "True Shape"?

When we show a sectional view in orthographic projection, the shape we see in the view (like the front view or top view) is often the *projection* of the cut surface, not its actual shape. Just like a sphere looks like a circle in any orthographic view, the shape of the cut surface can be distorted due to foreshortening when projected onto a plane that is not parallel to it.

The **true shape of the section** is the actual geometric form of the surface exposed by the cutting plane. It's what you would see if you could hold the cut surface up and look at it directly, perpendicular to its plane. This is essential for design and manufacturing, as it provides the real dimensions and form of the internal features.

Consider this: if you cut a circular pipe with a plane that is not perpendicular to its axis, the projection of the cut in a standard orthographic view might look like an ellipse. But the true shape of the cut surface itself is still a circle, assuming the pipe has a circular cross-section. We need a way to "unfold" or project this cut surface onto a plane parallel to it to get its true shape.

---

### Methods to Obtain the True Shape of a Section

The core principle behind finding the true shape is to project the intersection points of the cutting plane with the solid's edges onto a new plane that is parallel to the cutting plane. Since we are dealing with solids whose axes are in the vertical position and cut by various planes, we have a few common scenarios for the cutting plane:

1.  **Perpendicular to the Axis:** When the cutting plane is perpendicular to the axis of rotation of the solid (like prisms, pyramids, cones, cylinders), the true shape of the section is directly visible in one of the principal orthographic views.
    *   For **prisms and cylinders** cut by a plane perpendicular to the axis, the true shape is a rectangle (or square, if the base is a square and the cut is through the side faces).
    *   For **pyramids and cones** cut by a plane perpendicular to the axis, the true shape is a circle (if the cut passes through the cone base and is parallel to it) or a scaled-down version of the base shape (if the base is a polygon).
    *   *Example:* Imagine slicing a cylinder horizontally. The top view shows the circular base, and the front view shows a rectangle. The true shape of the cut is that rectangle, and it's directly visible in the front view.

2.  **Parallel to the Axis:** When the cutting plane is parallel to the axis of the solid.
    *   For **prisms and cylinders**, the true shape will be a rectangle.
    *   For **pyramids and cones**, the true shape will be a triangle.
    *   *Example:* If you slice a cylinder vertically through its center, parallel to the axis, the true shape of the section visible in the front view is a rectangle, and its dimensions are the diameter of the cylinder and the height of the cut. This is also directly visible.

3.  **Inclined to the Axis:** This is where it gets more interesting and requires a dedicated projection. When the cutting plane is inclined to the axis, the true shape will not be seen directly in the standard orthographic views (front, top, side). We need to construct an auxiliary view.

#### The Auxiliary Projection Method

This is the most common and important method for finding the true shape when the cutting plane is inclined. The fundamental idea is to create a new projection plane that is parallel to the inclined cutting plane.

**Let's break down the steps, thinking of it like unwrapping a present:**

**Step 1: Draw the Orthographic Views**
First, you'll have your standard front view and top view of the solid. The cutting plane will be shown in these views, usually as a line of sight with an arrow indicating the direction of view. This line represents the *trace* of the cutting plane on that particular view.

**Step 2: Identify the Intersection Points**
The cutting plane intersects the solid's edges or surfaces at various points. In the front view, you'll see some of these points as points on the visible lines of the solid. In the top view, you'll see others.

**Step 3: Draw a Reference Line for the Auxiliary View**
We need to establish a new projection plane. This plane will be parallel to the cutting plane. How do we draw it?
*   If the cutting plane is shown in the **front view** as an inclined line, we draw a new reference line (let's call it X1Y1) parallel to this inclined line. This new reference line will be the intersection of our auxiliary plane and the horizontal plane.
*   If the cutting plane is shown in the **top view** as an inclined line, we draw a new reference line (X1Y1) parallel to this inclined line. This X1Y1 line will represent the intersection of our auxiliary plane and the vertical plane.

**Step 4: Project the Intersection Points**
Now, we transfer the distances of the intersection points from the existing reference line (XY for top view, or X'Y' for front view) to the new reference line (X1Y1).

*   **The Key Principle:** The distance of any point from a reference line in orthographic projection is its distance from the plane represented by that reference line. If we create a new plane parallel to the cutting plane, the distance of a point from the cutting plane needs to be transferred. This distance is usually the perpendicular distance from the intersection point on the solid's edges to the trace of the cutting plane in that view.

Let's make this more concrete, referencing common textbook approaches like those in Bhatt or Benjamin:

*   **Scenario 1: Cutting plane given in Front View (as an inclined line X'Y')**
    *   Draw a new reference line X1Y1 parallel to X'Y'.
    *   The distance of each intersection point (let's call them P, Q, R, S, etc.) from the X'Y' line in the front view represents its distance from the cutting plane (in the direction perpendicular to the cutting plane's trace).
    *   From the top view, project these points onto the new X1Y1 line. The distances of these projected points on X1Y1 are measured perpendicularly from the *original* XY line in the top view. This seems confusing, so let's clarify.
    *   **A simpler way to visualize the transfer:** Take the *perpendicular distance* of each intersection point on the solid's edges *from the cutting plane line (X'Y') in the front view*. Transfer these distances as offsets, perpendicular to the new X1Y1 line. Where do these offsets go? They are projected from the corresponding points in the **top view**.
    *   Think of it like this: the front view tells you "how far along" the cut is the point relative to the cutting plane, and the top view tells you where that point is in plan. We project the top view points onto the new plane, and use the front view distances as offsets.

*   **Scenario 2: Cutting plane given in Top View (as an inclined line XY)**
    *   Draw a new reference line X1Y1 parallel to XY.
    *   Take the *perpendicular distance* of each intersection point from the cutting plane line (XY) in the top view.
    *   Transfer these distances as offsets, perpendicular to the new X1Y1 line, from the projection of the corresponding points in the **front view**.

**Analogy for Step 4:** Imagine you have a tilted piece of paper (the cutting plane). You also have a flat map (top view) and a flat elevation drawing (front view) of something on that paper. To find the true shape of a feature on the paper, you'd take points from the map and then use measurements from the elevation drawing to tell you how "high" or "far" each point is from your tilted paper's surface, and then you'd plot that on a new sheet that's parallel to the tilted paper.

**Step 5: Connect the Points**
Once you have plotted all the intersection points on your auxiliary plane, connect them in order. The resulting shape is the true shape of the section.

---

### Examples and Visualization

Let's consider a few solids and cutting planes.

#### 1. Square Prism

*   **Solid:** A square prism with a base side of 40mm and an axis of 60mm, resting on its base.
*   **Cutting Plane:** Inclined at 45 degrees to the horizontal and passing through the axis at a certain height. Let's say it cuts through the front face.

    *   **Front View:** A rectangle representing the prism's height, with the cutting plane shown as a diagonal line (45 degrees) cutting across it. This diagonal line is the trace of the cutting plane in the front view.
    *   **Top View:** A square representing the base. The cutting plane trace will appear as a line parallel to one of the square's sides, since the plane is parallel to the axis (which is vertical, so parallel to the front view plane). This means the cutting plane is vertical and inclined. Oh wait, if it's inclined at 45 degrees to the horizontal, it's *not* parallel to the axis. It's inclined to the axis.

    Let's rephrase the cutting plane description for clarity, following typical problem statements:

    *   **Cutting Plane:** Inclined at 45 degrees to the horizontal, passing through the front face. This implies the cutting plane itself is inclined relative to the axis.

    *   **Front View:** The cutting plane is shown as a line inclined at 45 degrees to the horizontal reference line (X'Y'), cutting the rectangular front face. Let's say it starts from the midpoint of the bottom edge and goes up to the top edge.
    *   **Top View:** The cutting plane will appear as a line parallel to the front view's reference line X'Y', because the cutting plane is perpendicular to the horizontal plane in this case. Wait, no. If the cutting plane is inclined at 45 degrees to the horizontal, its trace on the horizontal plane (top view) would be a line perpendicular to the projection of the plane onto the horizontal plane. This is getting confusing.

    Let's use a standard problem definition where the cutting plane is defined by its *trace* in one of the views or by its inclination to the base/axis.

    **Revised Example: Square Prism**
    *   **Solid:** Square prism, base 40mm x 40mm, height 60mm, axis vertical.
    *   **Cutting Plane:** Inclined at 45 degrees to the horizontal plane and passes through the front face. Let's say it cuts from the midpoint of the top front edge to the midpoint of the bottom back edge.

    *   **Front View:** A rectangle (40mm wide, 60mm high). The cutting plane is a line inclined at 45 degrees, starting from the center of the top edge down to the center of the bottom edge. This line marks the intersection with the front face.
    *   **Top View:** A square (40mm x 40mm). The trace of the cutting plane on the top view is a line parallel to the front view's reference line (since the plane is inclined *upwards*). Let's say this trace passes through the center of the square.

    *   **Finding True Shape:**
        1.  Draw the front view with the cutting plane line. Mark the points where this line intersects the edges of the prism in the front view. Let's call them P, Q.
        2.  Draw the top view. The cutting plane's trace in the top view is a line parallel to the front view's reference line, passing through the center of the square.
        3.  From the intersection points P and Q in the front view, draw lines parallel to the reference line (X'Y').
        4.  Now, project the corresponding edges of the prism from the top view onto the new auxiliary plane. The points on these projected lines, at the distances determined by the offsets from the cutting plane line in the front view, will give us the true shape.
        5.  **Alternative approach (often easier):** Draw a line X1Y1 parallel to the inclined cutting plane in the front view. This X1Y1 line represents the auxiliary projection plane. Now, take the distances of the intersection points (P, Q) from the *top view* reference line (XY). Project these distances from the corresponding points in the front view, perpendicular to X1Y1. Connect these points to get the true shape. *This is the method often taught and is crucial for understanding.*

    The true shape will be a rectangle. Its width will be determined by the extent of the cut across the prism's width, and its height will be the length of the inclined cutting plane segment as seen in the front view projected onto a plane parallel to it.

#### 2. Cylinder

*   **Solid:** A cylinder with a diameter of 40mm and a height of 60mm, axis vertical.
*   **Cutting Plane:** Inclined at 60 degrees to the horizontal plane, passing through the base circle.

    *   **Front View:** A rectangle (40mm wide, 60mm high). The cutting plane is a line inclined at 60 degrees to the horizontal, cutting across the rectangle.
    *   **Top View:** A circle (diameter 40mm). The trace of the cutting plane on the top view will be a line, likely passing through the center of the circle.

    *   **Finding True Shape:**
        1.  In the front view, mark points where the inclined cutting plane intersects the rectangle's edges (e.g., points on the front and back corners of the cylinder's outline). Let's say these points are P1, P2, Q1, Q2.
        2.  Draw a reference line X1Y1 parallel to the inclined cutting plane in the front view.
        3.  From the top view, project the center of the circle and points on the circumference. Now, we need to transfer the distances. The critical aspect here is that the cylinder's surface is a curve.
        4.  We need to select several points on the *circle* in the top view. For each point in the top view, find its corresponding position on the rectangle in the front view (which is essentially the outline of the cylinder).
        5.  Let's say you pick points on the circle in the top view. For each such point, find its corresponding height on the front view outline. Then, measure the perpendicular distance of this point from the cutting plane line in the front view.
        6.  Transfer this distance as an offset from X1Y1, starting from the projection of the point from the top view.
        7.  Connecting these points will give you an ellipse, which is the true shape of the section.

    *   **Key Takeaway:** When the cutting plane is inclined to the axis of a cylinder or cone, the true shape of the section is an **ellipse**.

#### 3. Cone

*   **Solid:** A cone with base diameter 40mm and height 60mm, axis vertical.
*   **Cutting Plane:** Inclined at 60 degrees to the horizontal, passing through the cone's slant height.

    *   **Front View:** A triangle (base 40mm, height 60mm). The cutting plane is a line inclined at 60 degrees, intersecting the slant edges of the triangle.
    *   **Top View:** A circle (diameter 40mm). The cutting plane trace is a line passing through the center.

    *   **Finding True Shape:**
        1.  Select points on the circumference of the circle in the top view.
        2.  For each point, find its corresponding position on the slant edge in the front view.
        3.  Measure the perpendicular distance of this point from the cutting plane line in the front view.
        4.  Draw a reference line X1Y1 parallel to the cutting plane in the front view.
        5.  Project the points from the top view onto the auxiliary plane, and use the distances measured in step 3 as offsets from X1Y1.
        6.  Connecting these points will result in an **ellipse**.

#### 4. Pyramid

*   **Solid:** A square pyramid with base side 40mm and height 60mm, axis vertical.
*   **Cutting Plane:** Inclined at 45 degrees to the horizontal, passing through the apex and one of the base edges.

    *   **Front View:** A triangle (base 40mm, height 60mm). The cutting plane is a line inclined at 45 degrees, starting from the apex and ending at the midpoint of the base.
    *   **Top View:** A square (40mm x 40mm). The cutting plane trace is a line connecting the center of the square to the midpoint of one of its sides.

    *   **Finding True Shape:**
        1.  In the front view, mark the points where the cutting plane intersects the slant edges of the pyramid. Let's call these P1, P2.
        2.  Draw a reference line X1Y1 parallel to the cutting plane in the front view.
        3.  In the top view, find the corresponding points where the cutting plane trace intersects the edges of the square base. Let's call these Q1, Q2.
        4.  Project Q1 and Q2 onto the auxiliary plane (X1Y1).
        5.  The distance of P1 from the cutting plane in the front view is needed. This is tricky because the cutting plane is inclined. The distance is measured *perpendicular* to the inclined line.
        6.  A more reliable method for pyramids: Take the distances of the intersection points in the top view *from the center of the square base*. Project these distances onto the auxiliary plane. This is getting complex.

    Let's simplify the pyramid case, as it's often about getting the shape of the cut surface itself.

    **Simplified Pyramid Example:**
    *   **Cutting Plane:** Inclined at 45 degrees to the base, passing through the pyramid such that it cuts all four slant edges.

    *   **Front View:** Triangle with the inclined cutting plane.
    *   **Top View:** Square with the cutting plane trace as a line.

    *   **Finding True Shape:**
        1.  Mark points (1, 2, 3, 4) on the inclined cutting plane line in the front view where it intersects the slant edges.
        2.  Draw a reference line X1Y1 parallel to the cutting plane in the front view.
        3.  Now, for each point 1, 2, 3, 4 in the front view, determine its distance from the center of the base in the top view.
        4.  Project these points from the top view onto the X1Y1 line.
        5.  Transfer the heights (distances from the reference line in the front view) of points 1, 2, 3, 4 as offsets perpendicular to the X1Y1 line, starting from the projected top-view points.
        6.  Connect these points. The true shape will be a **trapezoid** (or a similar quadrilateral, depending on the exact cut). If the plane cuts parallel to the base, it would be a square. If it's inclined, it can be a trapezoid or a pentagon if it cuts multiple faces. For a square pyramid cut by a plane inclined to the base and cutting all four slant edges, the true shape is typically a **trapezoid**.

---

### Key Considerations and Pitfalls

*   **Accuracy of Projection:** The accuracy of your true shape depends entirely on the accuracy of your orthographic views and the precise transfer of distances.
*   **Perpendicular Distances:** Always remember you are transferring *perpendicular distances* from the cutting plane line in the view where it's visible, to the new auxiliary plane.
*   **Selecting the New Plane:** The new auxiliary projection plane must be *parallel* to the cutting plane. This is the fundamental rule.
*   **Reference Lines:** Use clear and distinct reference lines (XY, X'Y', X1Y1, X2Y2, etc.) to avoid confusion.
*   **Order of Points:** Ensure you connect the points in the correct sequence to reveal the shape of the section.
*   **CAD Implementation:** In Computer-Aided Drawing (CAD), this process is significantly simplified. You typically draw the solid, use a "Section" command with a specified cutting plane (defined by points, direction, or angle), and the software automatically generates the section line and the true shape in a specified view or plane. However, understanding the manual drafting principles is crucial for visualizing and verifying the results, and for situations where you might not have direct CAD access or need to understand the underlying geometry.

---

### Connection to Course Outcomes

Let's revisit how this topic ties into our course outcomes:

*   **CO1: Understand the projection of points and lines located in different quadrants (Knowledge Level: K2)**
    While this topic deals with solids, the underlying principle of projecting points and lines onto different planes to find their true positions is essential. We are essentially applying the principles of first-angle or third-angle projection to transfer points from one set of planes to another.

*   **CO2: Prepare Multiview orthographic projections of objects by visualizing them in different positions (Knowledge Level: K3)**
    To find the true shape, you *must* first be able to correctly visualize and draw the standard orthographic views (front, top) of the solid and the cutting plane. The understanding of how the cutting plane appears in different views is crucial.

*   **CO3: Plot sectional views and develop surfaces of a given object (Knowledge Level: K3)**
    This is the most direct connection. The "true shape of the section" is precisely what you plot to complete a sectional view accurately. It's the visual representation of the cut surface itself, allowing for precise dimensioning and understanding of internal features.

*   **CO4: Prepare pictorial drawings using the principles of isometric projection (Knowledge Level: K3)**
    While not directly about pictorial drawing, understanding the 3D form of the section helps in visualizing the object in pictorial views. If you were asked to show the object with its section cut in an isometric view, this knowledge would be vital.

*   **CO5: Sketch simple drawing using CAD tools. (Knowledge Level: K3)**
    As mentioned, CAD tools automate this. However, knowing *why* the tool works and the geometric principles behind it allows you to use the tool more effectively, troubleshoot errors, and interpret the results correctly. You understand *what* the "Section" command is achieving.

---

### Summary and What to Remember

The true shape of a section is the actual geometric form of the surface revealed by a cutting plane. When the cutting plane is inclined to the axis of solids like cylinders and cones, the true shape is often an ellipse. For prisms and pyramids, the true shape can be a rectangle, trapezoid, or other polygon depending on the solid and the plane.

The fundamental technique to find the true shape is **auxiliary projection**: creating a new projection plane parallel to the cutting plane and transferring the intersection points from the orthographic views. Always remember to transfer the *perpendicular distance* of points from the cutting plane.

This is a cornerstone of engineering graphics, directly impacting your ability to create accurate and informative technical drawings. Practice is key here – work through as many examples as you can from your textbooks (like Varghese, Benjamin, or Bhatt) to solidify your understanding.

---

## Sample Questions and Answers

**Q1: What is the significance of finding the "true shape" of a section in engineering drawings?**

**Answer:** The true shape of a section represents the actual geometrical form of the surface created by a cutting plane. Standard orthographic views might show a foreshortened projection of this surface. Knowing the true shape is critical for accurately dimensioning internal features, understanding the exact geometry of a cut component, and ensuring correct manufacturing or assembly. It allows designers and engineers to visualize and communicate the internal structure of an object without ambiguity. (Relates to CO3, understanding the purpose of sectional views).

**Q2: When a cylinder is cut by a plane inclined to its axis, what is the true shape of the section?**

**Answer:** When a cylinder is cut by a plane inclined to its axis, the true shape of the section is an **ellipse**. This is a direct application of how inclined planes intersect curved surfaces. The specific dimensions and eccentricity of the ellipse depend on the diameter of the cylinder and the angle of the cutting plane. (Relates to CO3, recognizing specific section shapes).

**Q3: Describe the primary method used to obtain the true shape of a section when the cutting plane is inclined to the axis of the solid.**

**Answer:** The primary method used is **auxiliary projection**. This involves drawing a new projection plane that is parallel to the inclined cutting plane. The intersection points of the cutting plane with the solid's edges, as seen in the orthographic views (front and top), are then projected onto this auxiliary plane. The distances of these points from the cutting plane in the original views are transferred as offsets to the auxiliary plane, relative to the projection of the solid's features onto it. Connecting these projected points in order reveals the true shape of the section. (Relates to CO3, explaining the process).

**Q4: Explain why the cutting plane line in the front view is used to determine the offsets for the auxiliary view when the cutting plane is given in the front view.**

**Answer:** When the cutting plane is inclined and given in the front view as an inclined line, that line represents the trace of the cutting plane on the vertical plane. The perpendicular distance of any point from this trace line in the front view represents its distance from the cutting plane itself. This distance is crucial for reconstructing the true shape because it tells us how "deep" or "far" each point is from the cutting plane in a direction perpendicular to it. When we project from the top view onto the auxiliary plane parallel to the cutting plane, we use these front-view distances as offsets to position the points correctly in their true relationship to the cutting plane. (Relates to CO2 and CO3, understanding projection principles and transfer of information).

**Q5: A square pyramid is cut by a plane inclined at 45 degrees to its base and passing through its slant edges. What is the true shape of the section? If the cutting plane passes through the apex and cuts one base edge, what is the true shape?**

**Answer:**
*   When a square pyramid is cut by a plane inclined at 45 degrees to its base and passing through its slant edges (cutting all four slant edges), the true shape of the section is typically a **trapezoid**. The parallel sides of the trapezoid are determined by the extent of the cut across the pyramid's width, and the height is related to the inclined plane.
*   If the cutting plane passes through the apex and cuts one base edge, the true shape of the section is a **triangle**. This triangle will have one vertex at the apex and its base will be along the cut base edge. The shape of this triangle is determined by the pyramid's dimensions and the position of the cut base edge. (Relates to CO3, identifying specific section shapes for pyramids).

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
