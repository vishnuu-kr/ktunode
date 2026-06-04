---
title: "Sections of Solids: Sections of Prisms, Pyramids, Cone and Cylinder only, with axis in vertical position and cut by different section planes."
subject: "ENGINEERING GRAPHICS AND COMPUTER AIDED DRAWING"
module: "Module 3: Sections of Solids: Sections of Prisms, Pyramids, Cone and Cylinder only, with axis in vertical position and cut by different section planes."
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5c45"
status: "completed"
scrapedAt: "2026-05-20T16:37:55.647Z"
---
## ENGINEERING GRAPHICS AND COMPUTER AIDED DRAWING: MODULE 3 - SECTIONS OF SOLIDS

**(Focus: Sections of Prisms, Pyramids, Cone and Cylinder with Axis Vertical and Cut by Different Section Planes)**

Welcome, everyone, to Module 3! Today, we're diving into a really crucial and, I think, quite fascinating part of Engineering Graphics: **Sections of Solids**. This is where we learn how to visualize the internal structure of objects – think about cutting through a building to see its rooms, or slicing an engine part to understand its components. It's fundamental to understanding how things are made and how they work.

Our main goal in this module is to understand how to represent the **true shape and size of the intersection** created when a solid object is cut by a plane. We'll be focusing specifically on **prisms, pyramids, cones, and cylinders**, with their axes always in the **vertical position**. This simplification makes it easier to grasp the core principles before we move on to more complex scenarios. And we'll explore what happens when these objects are cut by **different types of section planes**.

Now, how does this connect to our broader Course Outcomes?

*   **CO1: Understand the projection of points and lines located in different quadrants.** While this module is about solids, the very foundation of drawing any section is understanding how points and lines project onto different planes. We'll be applying those foundational projection principles here, but at a more complex level. (Knowledge Level: K2)
*   **CO2: Prepare multiview orthographic projections of objects by visualizing them in different positions.** To draw a section, we first need to have the object’s standard orthographic views (Front View and Top View). We’ll be using these views as our starting point, so this module directly builds on your ability to visualize and project objects. (Knowledge Level: K3)
*   **CO3: Plot sectional views and develop surfaces of a given object.** This is where we directly hit the mark for CO3! Plotting sectional views is precisely what this module is all about. We're not just looking at the outline of an object; we're showing what you'd see if you actually cut through it. We'll learn to draw the **section** itself, and the **true shape of the section**. (Knowledge Level: K3)
*   **CO4: Prepare pictorial drawings using the principles of isometric projection.** Understanding sections is also vital for creating realistic pictorial views that show internal details. Imagine drawing an isometric view of a pipe with a cut-out section – you need to know how that cut affects the 3D representation. (Knowledge Level: K3)
*   **CO5: Sketch simple drawing using CAD tools.** The principles we learn today are directly transferable to CAD software. When you use commands like `CIRCLE`, `RECTANGLE`, `EXTRUDE`, or `SECTION` in AutoCAD or similar programs, you're applying these fundamental geometric concepts. (Knowledge Level: K3)

So, as you can see, this module is a cornerstone. It’s about translating 2D representations into understanding 3D internal forms, a skill essential for engineers across disciplines.

### What is a Section of a Solid?

Let's start with the basics. Imagine you have a solid object – like a wooden block, a metal pipe, or a pyramid-shaped stone. If you were to cut this object with a flat plane, the surface where the cut occurs is called the **section**. Engineering graphics allows us to draw this "inside" view, showing the shape and size of this cut surface.

Why do we do this?

*   **To reveal internal features:** Think of a complex machine part. You need to see the internal channels, cavities, or reinforcements.
*   **To understand material usage:** If you're designing something, you need to know how much material is actually present inside.
*   **For manufacturing:** Many manufacturing processes require knowledge of internal cross-sections.

#### The Section Plane

The **section plane** is the imaginary flat surface that cuts through the solid. The *way* this plane is oriented relative to the solid determines the shape of the section. This is where the "different section planes" come into play. We’ll be looking at planes that are:

1.  **Perpendicular to the axis:** These cuts are often straight across.
2.  **Parallel to the base:** Similar to perpendicular to the axis for prisms and pyramids, but this term is more common for cones and cylinders.
3.  **Inclined to the axis:** These cuts produce more complex, curved shapes.

Remember, for this module, the **axis of the solid is always vertical**. This means our standard Front View will typically show the true height of the object, and our Top View will show the base in its true shape. This makes things much simpler to start with.

### How to Draw a Sectional View

The process generally involves two key steps:

1.  **Finding the True Shape of the Section:** This is the most important part. You'll determine the actual shape of the cut surface.
2.  **Showing the Section in the Orthographic Views:** This involves "cutting" the existing Front View and Top View and indicating the hatched section lines.

Let’s break down how we do this for each type of solid.

#### 1. Sections of Prisms

A prism is a solid with two identical bases, connected by rectangular faces. Think of a rectangular box (a cuboid) or a hexagonal prism.

**Key Concept:** When a section plane cuts a prism, the section shape will be a polygon. Its shape depends on the orientation of the section plane.

**Scenario 1: Section Plane Perpendicular to the Axis (Parallel to the Bases)**

*   **Visualization:** Imagine slicing a loaf of bread parallel to its ends.
*   **In Drawing:** If the section plane is parallel to the bases of a prism (and thus perpendicular to its vertical axis), the section obtained will have the **same shape as the base** of the prism.
*   **How to Draw:**
    *   **Front View (FV) & Top View (TV):** Draw the standard orthographic views of the prism.
    *   **Section Plane:** Draw the section plane line (typically an 'X-Y' line or a line from a specific direction) in the **Top View**, parallel to the base (which is the shape shown in the Top View).
    *   **True Shape of Section:** To get the true shape, you project the points where the section plane cuts the vertical edges of the prism from the Top View to the Front View. Since the plane is parallel to the base, these projected lines in the Front View will represent the height of the cut. You then draw a **new view** parallel to the section plane (usually on the right or left of the FV), projecting these points onto it. This new view will show the **true shape of the section**, which is identical to the prism's base shape.
    *   **Hatching:** In the Front View, the area of the prism that is "cut" by the plane (below the section line in the FV) is hatched.
*   **Exam Tip:** This is often the simplest case. Remember, if the plane is parallel to the base, the section *is* the base shape.

**Scenario 2: Section Plane Inclined to the Axis (Perpendicular to the Front View, Inclined to the Top View)**

*   **Visualization:** Imagine cutting a tall building at an angle with a plane that slants from one side to the other.
*   **In Drawing:** The section will be a polygon, but its shape will be different from the base.
*   **How to Draw:**
    *   **FV & TV:** Draw the standard views.
    *   **Section Plane:** Draw the section plane line in the **Front View**, inclined to the vertical axis.
    *   **True Shape of Section:** This is where it gets interesting. The section plane intersects the vertical edges of the prism. You need to find the **true lengths** of these intersections.
        *   **Method:** Take the heights of intersection points from the **Front View** where the inclined section plane cuts the vertical lines (edges of the prism) in the FV. Transfer these heights onto **lines parallel to the Top View's base**, drawn in a new view. These new lines in the new view correspond to the inclined section plane.
        *   Alternatively, and often more directly: Project the points where the section plane intersects the edges in the **Top View** onto the corresponding vertical edges in the **Front View**. Then, transfer these intersection points from the Front View to a **new plane parallel to the section plane**. This new plane will reveal the true shape of the section.
        *   Let's be clearer: Draw a line parallel to the **inclined section plane in the FV**. Project the intersection points from the FV onto this line. Then, from the **TV**, project lines upwards towards this new line. Where these projected lines intersect, you get the points of the section. Connect these points. The resulting shape is the true shape of the section.
    *   **Hatching:** In the Front View, hatch the area below the section plane line.
*   **Key Point:** The number of sides of the section polygon will be the same as the number of sides of the prism's base. For example, a hexagonal prism cut by an inclined plane will yield a hexagonal section (though not necessarily a regular hexagon).

**Scenario 3: Section Plane Perpendicular to the Front View and Perpendicular to the Top View (usually through the axis)**

*   **Visualization:** Imagine cutting a rectangular block straight through its center, from top to bottom.
*   **In Drawing:** If the plane is perpendicular to the axis, the section will be a rectangle.
*   **How to Draw:**
    *   **FV & TV:** Draw the standard views.
    *   **Section Plane:** In both views, the section plane line will be perpendicular to the axis. In the FV, it's a vertical line. In the TV, it's a horizontal line (or vice versa, depending on which view shows the axis vertically).
    *   **True Shape of Section:** The true shape is obtained by projecting the intersection points. If the plane cuts the width of the prism in the FV, you transfer those widths from the TV to a new view parallel to the section plane.

**Relatable Example:** Think of a stacked set of square plates.
*   Slicing parallel to the plates (Scenario 1) gives you another square.
*   Slicing at an angle across the stack (Scenario 2) would give you a more complex shape – if you cut a square prism, you'd get a rectangle.
*   Slicing vertically straight through the center (Scenario 3) gives you a rectangle.

#### 2. Sections of Pyramids

A pyramid has a base and triangular faces that meet at an apex. Examples: square pyramid, hexagonal pyramid.

**Key Concept:** The section shape will be a polygon. If the section plane cuts through all the triangular faces, the number of sides of the section will match the number of sides of the pyramid's base.

**Scenario 1: Section Plane Perpendicular to the Axis (Parallel to the Base)**

*   **Visualization:** Imagine slicing the top off a pyramid-shaped cake parallel to its base.
*   **In Drawing:** The section obtained will be **similar in shape to the base** of the pyramid. For a square pyramid, the section will be a square. For a hexagonal pyramid, it will be a hexagon. It will be smaller than the base.
*   **How to Draw:**
    *   **FV & TV:** Draw the standard views. The FV will be a triangle (Apex to Base), and the TV will be the shape of the base.
    *   **Section Plane:** Draw the section plane line in the **Top View**, parallel to the base.
    *   **True Shape of Section:** Project the intersection points from the Top View (where the plane cuts the lines representing the pyramid's edges) to the corresponding edges in the Front View. Then, transfer these points to a **new view** parallel to the section plane. This new view will show the **true shape of the section**, which is similar to the base shape but smaller.
    *   **Hatching:** In the Front View, hatch the area below the section plane line.
*   **Important Note:** To get the correct size of the section in the new view, you use the principle of **similar triangles**. The ratio of the section's dimensions to the base's dimensions will be proportional to the ratio of the distance from the apex to the section plane (in the FV) to the total height of the pyramid. Textbooks like Bhatt, N. D. often use a "reduction method" or scale factor derived from the heights in the FV.

**Scenario 2: Section Plane Inclined to the Axis**

*   **Visualization:** Imagine slicing a pyramid with a plane that slants downwards.
*   **In Drawing:** The section shape will be a polygon, but not necessarily similar to the base.
*   **How to Draw:**
    *   **FV & TV:** Draw the standard views.
    *   **Section Plane:** Draw the section plane line in the **Front View**, inclined to the axis.
    *   **True Shape of Section:**
        *   **Method:** Project the points where the section plane intersects the edges of the pyramid in the **Front View**. Transfer these intersection points to a **new plane parallel to the section plane**. To get the correct distances along these lines in the new plane, you use the **Top View**. From the points where the section plane cuts the pyramid edges in the **Top View**, draw projectors to the corresponding edges in the Front View. Then, transfer these intersection points from the FV onto the new plane, at distances dictated by the projectors from the TV. Connect the points in the new plane to get the true shape.
    *   **Hatching:** In the Front View, hatch the portion of the pyramid that is below the section plane.
*   **Exam Tip:** Be careful with projections. Ensure you are transferring distances correctly from the TV to get the true shape in the new view.

**Relatable Example:** Think of a party hat or an ice cream cone (which is a cone, but the principle is similar).
*   Slicing parallel to the base (Scenario 1) gives you a smaller circle (for a cone) or a smaller square/hexagon (for a pyramid).
*   Slicing at an angle (Scenario 2) can give you ellipses or parabolas for a cone, and various polygons for a pyramid.

#### 3. Sections of Cylinders

A cylinder has two identical circular bases connected by a curved surface.

**Key Concept:** When a section plane cuts a cylinder, the section shape can be a circle, ellipse, rectangle, or even a parabola, depending on the plane's orientation.

**Scenario 1: Section Plane Perpendicular to the Axis (Parallel to the Bases)**

*   **Visualization:** Imagine slicing a can of soup parallel to its top or bottom.
*   **In Drawing:** The section obtained will be a **circle**, identical to the shape of the cylinder's bases.
*   **How to Draw:**
    *   **FV & TV:** Draw the standard views. The FV is a rectangle, and the TV is a circle.
    *   **Section Plane:** Draw the section plane line in the **Top View**, parallel to the base (the circle).
    *   **True Shape of Section:** Since the plane is parallel to the base, the true shape of the section is a **circle**. You can obtain this by projecting the points where the section plane cuts the cylinder's sides in the Top View (which are two points on the circle's diameter) up to the Front View. Then, draw a **new view** parallel to the section plane, and project these intersection points onto it. This new view will show a circle.
    *   **Hatching:** In the Front View, hatch the portion of the cylinder below the section plane line.
*   **Exam Tip:** This is straightforward. Parallel to the base means a circular section.

**Scenario 2: Section Plane Parallel to the Axis (Perpendicular to the Bases, but not necessarily through the center)**

*   **Visualization:** Imagine slicing a can of soup vertically, but not through the very center.
*   **In Drawing:** The section obtained will be a **rectangle**. The height of the rectangle will be the height of the cylinder, and the width will be the distance the plane cuts across the circular base.
*   **How to Draw:**
    *   **FV & TV:** Draw the standard views.
    *   **Section Plane:** Draw the section plane line in the **Front View**, parallel to the axis (a vertical line).
    *   **True Shape of Section:** The section plane cuts two vertical lines on the cylinder's side in the Front View. The true shape is a **rectangle**. To get its dimensions, the height is directly from the FV. The width is obtained by projecting the points where the section plane intersects the circle in the **Top View**. Transfer these two points onto a line parallel to the section plane in a new view. The distance between these points gives the width of the rectangle.
    *   **Hatching:** In the Front View, hatch the area to one side of the section plane line.

**Scenario 3: Section Plane Inclined to the Axis**

*   **Visualization:** Imagine slicing a can of soup at an angle, from top to bottom.
*   **In Drawing:** The section obtained will be an **ellipse**.
*   **How to Draw:**
    *   **FV & TV:** Draw the standard views.
    *   **Section Plane:** Draw the section plane line in the **Front View**, inclined to the axis.
    *   **True Shape of Section:** This is a classic case for constructing an **ellipse**.
        *   **Method:** Project the points where the section plane intersects the cylinder's sides in the **Front View**. Transfer these intersection points onto lines parallel to the section plane in a **new view**. To get the correct widths, you need to consider the circle in the **Top View**. From the points where the section plane cuts the circle in the TV, draw projectors to the corresponding side lines in the FV. Transfer these points from the FV to the new view. You will get a series of points that, when joined, form an ellipse. You can construct this ellipse using methods like the **oblique projection method** or by finding the major and minor axes.
    *   **Hatching:** In the Front View, hatch the portion below the section plane.
*   **Exam Tip:** Constructing an ellipse accurately is key here. You'll often be asked to find the "true shape of the section" which is an ellipse.

**Relatable Example:** Imagine a glass of water.
*   Filling it parallel to the top (Scenario 1) gives you a perfect circle of water surface.
*   If you tilt the glass slightly without spilling (Scenario 3), the water surface forms an ellipse.
*   If you cut the glass vertically from top to bottom (Scenario 2), you'd get a rectangle.

#### 4. Sections of Cones

A cone has a circular base and a curved surface that tapers to an apex.

**Key Concept:** When a section plane cuts a cone, the section shape can be a circle, ellipse, parabola, or hyperbola (though we focus on the first three in this module, typically circle, ellipse, and parabola).

**Scenario 1: Section Plane Perpendicular to the Axis (Parallel to the Base)**

*   **Visualization:** Similar to a pyramid, slicing the top off a cone parallel to its base.
*   **In Drawing:** The section obtained will be a **circle**, similar in shape to the base, but smaller.
*   **How to Draw:**
    *   **FV & TV:** Draw the standard views. FV is a triangle, TV is a circle.
    *   **Section Plane:** Draw the section plane line in the **Top View**, parallel to the base (the circle).
    *   **True Shape of Section:** Similar to the pyramid, the section is a **circle**. You project the intersection points from the TV to the FV, and then transfer them to a **new view** parallel to the section plane. This will reveal a smaller circle. The principle of similar triangles is used to find its correct diameter, based on the ratio of heights from the apex.
    *   **Hatching:** In the Front View, hatch the portion below the section plane.

**Scenario 2: Section Plane Parallel to the Base (but this is the same as Scenario 1 for cones!)**

*   This is usually worded as "perpendicular to the axis" for cones.

**Scenario 3: Section Plane Parallel to the Axis (Perpendicular to the Base)**

*   **Visualization:** Imagine slicing a cone vertically through its apex and base.
*   **In Drawing:** The section obtained will be a **triangle**. Specifically, an isosceles triangle if the plane passes through the axis.
*   **How to Draw:**
    *   **FV & TV:** Draw the standard views.
    *   **Section Plane:** Draw the section plane line in the **Front View**, parallel to the axis (a vertical line).
    *   **True Shape of Section:** The section plane cuts through the slant height of the cone. In the Front View, it cuts two lines (the slant edges). Project these points up to the **Top View** where the section plane intersects the base circle. Then, transfer these intersection points onto a new plane parallel to the section plane. The resulting shape is a **triangle**.
    *   **Hatching:** In the Front View, hatch the portion to one side of the section plane.

**Scenario 4: Section Plane Inclined to the Axis**

This is where cones get really interesting, and we get conic sections!
*   **a) Section Plane is Inclined and cuts through one slant edge.**
    *   **Visualization:** A slanted cut that starts at one point on the base and goes up to a point on the opposite side of the cone's surface.
    *   **In Drawing:** The section shape is an **ellipse**.
    *   **How to Draw:** Similar to the cylinder, project intersection points from the FV to the new plane, and use the TV to get the correct distances.
*   **b) Section Plane is Inclined and Parallel to a slant edge.**
    *   **Visualization:** A cut made parallel to the slanted side of the cone.
    *   **In Drawing:** The section shape is a **parabola**.
    *   **How to Draw:** This requires specific construction methods for parabolas. You'll project intersection points from the FV to the new plane and use the TV to define the parabolic curve.
*   **c) Section Plane is Inclined and cuts through both slant edges, not parallel to the axis.**
    *   **Visualization:** A slanted cut that goes from one side of the base to the other, passing through the cone's body.
    *   **In Drawing:** If the plane is *not* parallel to a slant edge, it's generally an **ellipse**.

**Relatable Example:** Think of shining a flashlight on a wall.
*   If the flashlight beam is perpendicular to the wall, you see a circle.
*   If you tilt the flashlight slightly, the beam on the wall becomes an ellipse.
*   If you tilt the flashlight even more, so the beam is parallel to the slanted side of the cone of light, you see a parabola.
*   If you tilt it even further, you might see a hyperbola (though we're not focusing on this here).

#### Hatching the Sectional View

This is a very important detail! Whenever a solid is cut by a section plane, the **cut surface** (the area revealed by the section plane) must be **hatched**.

*   **Hatching Lines:** These are thin, equally spaced parallel lines drawn at a 45-degree angle to the object’s outline or the axis of the section.
*   **Spacing:** The spacing depends on the size of the section, but they should be clearly visible and consistent. Typically, 2-3 mm apart.
*   **Direction:** Usually drawn at 45 degrees. If the object's outline already has lines at 45 degrees, use 30 degrees or 60 degrees instead.
*   **Purpose:** Hatching clearly distinguishes the part of the object that has been "cut" from the part that remains. It indicates that you are looking at a sectional view.
*   **Important:** You only hatch the *cut surface*. Any other visible lines within the sectioned part of the object are usually omitted or shown as thin dashed lines, depending on the convention.

### General Procedure for Sections of Solids (Vertical Axis)

Let's summarize the overall approach, which you'll apply to all the solids we've discussed:

1.  **Draw the Standard Orthographic Views:** Start with the Front View (FV) and Top View (TV) of the solid, assuming the axis is vertical.
2.  **Locate the Section Plane:** Draw the section plane in one of the views according to the problem statement.
    *   If the plane is inclined to the axis, it's usually shown in the Front View.
    *   If the plane is parallel to the base, it's usually shown in the Top View.
3.  **Project Intersection Points:**
    *   Identify the points where the section plane cuts the edges or lines of the solid in the view where it's drawn.
    *   Project these intersection points onto the corresponding edges in the other standard view (FV or TV).
4.  **Determine the True Shape of the Section:**
    *   Construct a **new auxiliary plane** parallel to the section plane.
    *   Project the intersection points from the standard views onto this auxiliary plane.
    *   To get the correct distances for these projections:
        *   If the section plane was shown in the FV, transfer distances from the TV (horizontally from the object's centerlines, or from projected points in the TV).
        *   If the section plane was shown in the TV, transfer distances from the FV (vertically from the object's centerlines, or from projected points in the FV).
        *   Remember to use principles of similar triangles when the section plane is inclined to the axis and the resulting shape is similar to the base (like a smaller circle or square in cones and pyramids).
5.  **Draw the Sectional Views:**
    *   In the standard orthographic views (usually FV), hatch the area of the solid that lies on the "cut" side of the section plane.
    *   The auxiliary view drawn in step 4 shows the **true shape of the section**, and this area is also hatched.
6.  **Show Visible and Hidden Lines:** Ensure all visible lines are drawn as solid thick lines and hidden lines as dashed thin lines, except in the sectional views where hidden lines behind the section are usually omitted.

**Connecting to Textbooks:** You'll find detailed examples and diagrams for each of these scenarios in standard texts like **Bhatt, N. D. "Engineering Drawing"** and **Varghese, P. I. "Engineering Graphics."** They are excellent resources for understanding the projection methods and the geometric constructions for conic sections. Benjamin J.'s book also provides solid coverage.

**CAD Considerations:** When using CAD (as per CO5), these steps translate into commands. Drawing the base views, then using construction lines or projection commands to find intersection points, and finally using commands to draw the true shape of the section and apply hatching (like the `HATCH` command).

### Sample Questions and Answers

Let's test your understanding with a few questions.

**Q1. A square prism is cut by a section plane parallel to its base. What will be the shape of the true section?**

*   **Answer:** The shape of the true section will be a **square**, identical to the shape of the prism's base. This is because the section plane is parallel to the base, meaning it cuts across the prism at a uniform cross-section. (Refer to Scenario 1 for Prisms).

**Q2. When a cone is cut by a section plane inclined to its axis and parallel to one of its slant edges, what is the true shape of the section?**

*   **Answer:** The true shape of the section will be a **parabola**. This is a characteristic conic section formed when the plane is oriented in this specific way relative to the cone. (Refer to Scenario 4b for Cones).

**Q3. For a cylinder cut by a section plane inclined to its axis, which standard orthographic view is typically used to draw the inclined section plane?**

*   **Answer:** The **Front View** is typically used to draw the inclined section plane. This is because the axis of the cylinder is vertical, and an inclined plane cutting it will appear as an inclined line in the Front View (which shows the height), while in the Top View it would appear as a chord if it cuts the circular base, or a specific profile if it cuts the curved surface. (Refer to Scenario 3 for Cylinders).

**Q4. Explain why hatching is important in sectional views.**

*   **Answer:** Hatching is crucial in sectional views to **clearly indicate the area that has been cut** by the section plane. It visually differentiates the solid material that has been sectioned from the rest of the object or the empty space. This convention helps in unambiguously representing the internal structure of the object and is a fundamental aspect of engineering drawing standards.

**Q5. A square pyramid rests with its base on the Horizontal Plane (HP). Its axis is vertical. It is cut by a plane passing through the apex and perpendicular to the HP. Describe the true shape of the section.**

*   **Given:** Square pyramid, vertical axis, cut by a plane through apex and perpendicular to HP.
*   **Analysis:**
    *   A plane perpendicular to HP means it's a vertical plane.
    *   If it passes through the apex and is vertical, it will cut through the pyramid from the apex down to the base.
    *   In the Front View, the plane appears as a line passing through the apex and cutting the base at a specific point (or two points if it cuts across the base width).
    *   In the Top View, the plane appears as a line passing through the center of the square base.
    *   The plane cuts two slant edges of the pyramid.
    *   The true shape of the section will be a triangle. The base of this triangle will be the line segment where the vertical plane intersects the base of the pyramid (as seen in the TV), and the apex of the triangle will be the apex of the pyramid.
*   **Answer:** The true shape of the section will be a **triangle**.

---

This covers the core concepts of sections of prisms, pyramids, cones, and cylinders with vertical axes. Remember to practice drawing these by hand and then consider how these principles apply in CAD. The key is to systematically project points and then construct the true shape of the section using appropriate views and geometrical principles. Keep practicing, and don't hesitate to refer back to your textbooks for specific examples and detailed constructions. Good luck!
