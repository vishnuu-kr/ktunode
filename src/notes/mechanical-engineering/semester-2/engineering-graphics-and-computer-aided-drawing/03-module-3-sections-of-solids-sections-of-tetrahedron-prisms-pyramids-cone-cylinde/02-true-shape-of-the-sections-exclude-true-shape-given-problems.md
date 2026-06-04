---
title: "True shape of the sections. (Exclude true shape given problems)"
subject: "ENGINEERING GRAPHICS AND COMPUTER AIDED DRAWING"
module: "Module 3: Sections of Solids: Sections of tetrahedron, Prisms, Pyramids, Cone, Cylinder with axis in vertical position and cut by different section planes."
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1edffeb4799d95e83830"
status: "completed"
scrapedAt: "2026-05-20T17:43:47.670Z"
---
# Module 3: Sections of Solids: True Shape of Sections

Welcome, everyone! Today, we're diving into a crucial aspect of engineering graphics: understanding the **True Shape of Sections**. This topic is all about what a solid *really* looks like when you slice through it with a plane. Think of it like slicing a cake – you want to know the exact shape of that slice, not just its projection onto a plate. This is fundamental for visualizing internal features of objects, which is directly related to our **Course Outcome 3: Plot sectional views and develop surfaces of a given object**. When we cut a solid and reveal its interior, the shape we see is what we call a "section." And to truly understand it, we need to find its "true shape."

## What is a Sectional View and Why is its True Shape Important?

In engineering drawings, we often need to show internal details that aren't visible from the outside. Imagine a complex machine part, like the casing of a gearbox. You can't see the gears inside from the outside, can you? That's where **sectional views** come in. We imagine cutting the object with an imaginary "cutting plane" and then removing the part that's between us and the cutting plane. The view we get of the cut surface is the sectional view.

Now, the projection of this cut surface onto the standard projection planes (like the Horizontal Plane or the Vertical Plane) might look distorted. Why? Because the cutting plane itself might be inclined to these projection planes. It's like looking at a circular plate from an angle – it appears as an ellipse, not a true circle.

Therefore, to accurately represent the actual shape of the cut, we need to find the **True Shape of the Section**. This true shape is the actual geometric shape of the surface created by the cutting plane. It's essential for:

*   **Understanding the geometry of the internal features:** Knowing the true shape allows designers and engineers to assess the strength, material usage, and functionality of internal components.
*   **Manufacturing:** Machining or casting processes often rely on accurate sectional views to define the shape of internal cavities or features.
*   **Analysis:** For structural analysis or fluid dynamics, knowing the true cross-sectional area is vital.

This directly supports our learning objective of understanding and plotting sectional views, and it underpins many practical applications in engineering.

## Finding the True Shape: The Principle of Revolution

So, how do we get this "true shape"? The fundamental principle we use is **Revolution**. We want to bring the cutting plane into parallelism with one of the principal projection planes.

Think about it this way: if the cutting plane is inclined, its projection on the HP or VP will be foreshortened. To see its true shape, we need to "unfold" or "rotate" the object (or rather, the projection) until the cutting plane becomes parallel to the plane of projection.

Let's break down the process:

### Step 1: Determine the Intersection Points

First, we need to know *where* the cutting plane intersects the edges or elements of the solid. These intersection points are crucial. We find these points by:

*   **Projecting the solid:** We have the Front View (FV) and Top View (TV) of the solid.
*   **Drawing the cutting plane:** The cutting plane is represented by its trace on the projection planes (a line on the HP, a line on the VP, or both if it's inclined to both).
*   **Locating intersection points:** On the FV, the cutting plane's trace will intersect the visible edges of the solid. These intersection points, let's call them 'a', 'b', 'c', etc., are located on the respective edges in the FV. Similarly, we find their corresponding points on the TV.

This step is fundamental for all sectional view problems, whether it's a tetrahedron, prism, pyramid, cone, or cylinder. You're essentially marking out the boundary of the cut.

### Step 2: Projecting the Intersection Points onto the True Shape Plane

Once we have the intersection points in the FV and TV, we need to transfer these to a new plane where we can see the true shape. This new plane is set up such that the cutting plane is parallel to it.

The most common method is to take a **reference line** (often $X_1Y_1$) parallel to the *trace of the cutting plane on the Horizontal Plane (HP)*. This $X_1Y_1$ line represents the edge view of the cutting plane.

Here's how we transfer the points:

*   **From the Top View (TV) to the auxiliary plane:**
    *   Consider the intersection points in the TV (e.g., $a'$, $b'$, $c'$).
    *   From these points in the TV, draw projectors perpendicular to the TV's reference line (XY).
    *   Now, on the new auxiliary plane (with the $X_1Y_1$ line), we need to establish distances from this line. These distances represent the *heights* of the intersection points above the HP.
    *   Where do we get these heights? From the **Front View (FV)**!
    *   Take a point in the FV (say, point 'a' at a certain height above XY). Draw a projector from 'a' onto the $X_1Y_1$ line. The distance from the $X_1Y_1$ line to this intersection point (let's call it $a_1$) is the true height.
    *   We do this for *all* intersection points. From the projected points on the projectors drawn from the TV, we measure the heights from the FV and mark them on the auxiliary plane.

*   **From the Front View (FV) to the auxiliary plane:**
    *   If the cutting plane's trace is parallel to the *Vertical Plane (VP)*, then we would draw a reference line $X_1Y_1$ parallel to the VP trace.
    *   We'd take the intersection points from the FV, draw projectors perpendicular to the VP trace.
    *   We'd then use the distances from the *Top View (TV)* to mark the corresponding points on the auxiliary plane.

**Analogy Time:** Imagine you have a stack of circular plates, and you're cutting through them with a slanted knife.

*   The **top view** shows you the projection of the stack as circles, and your knife's trace on this view might be a slanted line.
*   The **front view** shows you the side view of the stack, and the knife's trace here would be a slanted line representing its angle.
*   The **intersection points** are where your knife actually hits the edges of each plate.
*   To see the **true shape** of the cut, you need to imagine taking that entire stack and rotating it so that the knife is perfectly horizontal. The shape of the cut surface then is what we're after. The auxiliary plane is like that horizontal plane. The heights we measure from the front view are like the vertical positions of the plates.

Remember this: **The heights for plotting the true shape on the auxiliary plane are always taken from the view that is perpendicular to the reference line of the cutting plane.** If your $X_1Y_1$ is parallel to the HP trace (XY), you take heights from the FV. If $X_1Y_1$ is parallel to the VP trace (XY), you take distances from the TV. This is a crucial point, often tested!

### Step 3: Connect the Points and Identify the True Shape

Once all the intersection points ($a_1, b_1, c_1, ...$) are located on the auxiliary plane, we connect them in the correct sequence. The resulting closed figure is the **True Shape of the Section**.

The nature of this shape will depend on the solid and the orientation of the cutting plane. For example, cutting a cylinder with a plane inclined to the axis might give you an ellipse. Cutting a pyramid with a plane parallel to the base will give you a shape similar to the base (a square for a square pyramid, a triangle for a triangular pyramid).

## Specific Solids and Their Sectional Shapes

While the principle of revolution is universal, the shapes formed by cutting different solids with different planes are important to recognize. Let's briefly touch upon common scenarios (we're focusing on the *method* of finding the true shape, not solving specific problems here, but understanding the potential shapes helps visualize).

### Tetrahedrons, Prisms, and Pyramids

These solids have straight edges.
*   **Cutting plane parallel to the base:** The section will be similar in shape to the base. A square pyramid cut parallel to its base will yield a square section.
*   **Cutting plane inclined to the base:** The section can be a triangle, trapezoid, or quadrilateral, depending on the angle and where it cuts.
*   **Cutting plane perpendicular to the base and passing through the apex (for pyramids):** The section will be a triangle.
*   **Cutting plane perpendicular to the base and parallel to two opposite sides (for square prisms):** The section will be a rectangle.

The true shape is always found by the revolution method as described. The intersection points will lie on the projected edges of the solid.

### Cone and Cylinder

These solids have curved surfaces (or a curved surface and bases for a cone).
*   **Cutting plane parallel to the base:** For both cone and cylinder, the section is a circle.
*   **Cutting plane perpendicular to the base and passing through the center:** For both, the section is a rectangle.
*   **Cutting plane inclined to the base:**
    *   **Cone:**
        *   If the plane is inclined and cuts through both the base and the conical surface, the section is an **ellipse**.
        *   If it's inclined and cuts only the conical surface, it can be a **parabola** or a **hyperbola** (depending on the angle of the plane relative to the cone's slant height and base angle). For introductory graphics, we usually deal with planes that produce ellipses, parabolas, or hyperbolas.
    *   **Cylinder:**
        *   If the plane is inclined and cuts through the cylinder, the section is an **ellipse**.

When finding the true shape of these curved sections, the intersection points are located on the projected curves. When transferring these to the auxiliary plane, the heights are taken from the front view. Then, you connect these points with a smooth curve, remembering that the shape will be either circular, elliptical, parabolic, or hyperbolic, as per the intersection.

## Connecting to Course Outcomes

Let's revisit how this topic aligns with our Course Outcomes (COs):

*   **CO1: Understand and plot the projection of points and lines located in different quadrants (Knowledge Level: K3)**
    While not directly about points and lines in quadrants, the fundamental skill of accurately projecting points and understanding spatial relationships between them is directly applied when locating the intersection points of the cutting plane with the solid's edges. Every intersection point is a projected point.

*   **CO2: Prepare Multiview orthographic projections of objects by visualizing them in different positions (Knowledge Level: K3)**
    Understanding how a solid is represented in its Front View and Top View (orthographic projections) is the prerequisite for any sectioning problem. We need to visualize the solid in these standard views to even begin to understand how a cutting plane interacts with it.

*   **CO3: Plot sectional views and develop surfaces of a given object (Knowledge Level: K3)**
    This is the **core** of our topic today! Finding the "True Shape of the Section" is the essential step *after* determining the sectional view. Without finding the true shape, the sectional view is incomplete. This knowledge directly enables us to plot accurate sectional views, which is a key part of CO3. Developing surfaces is a related but distinct topic, but understanding sections helps appreciate the geometry of solids.

*   **CO4: Prepare pictorial drawings using the principles of isometric projection (Knowledge Level: K3)**
    While we are focusing on orthographic projections and sectional views, the spatial reasoning developed here is transferable to pictorial drawing. Understanding how shapes change with different viewing angles and how to represent them accurately in 2D (orthographic) is a foundational skill that enhances the ability to visualize and draw in 3D (pictorial).

*   **CO5: Sketch simple drawing using cad tools. (Knowledge Level: K3)**
    The methods we learn here – identifying intersection points, transferring distances, and constructing geometric shapes – are precisely the operations you would perform using CAD software. AutoCAD, as mentioned in the reference books, is excellent for this. Understanding the manual process ensures you can effectively use CAD tools to achieve the same results, often with greater precision and speed.

So, you see, every step we take in finding the true shape of a section is building on foundational projection skills and directly contributing to our ability to create complete and informative engineering drawings, especially sectional views.

## Important Takeaways and Exam Focus

*   **The 'Why':** Always remember *why* we find the true shape – to accurately represent the internal geometry.
*   **The 'How':** The **Revolution** method using an auxiliary plane is the key.
*   **The 'What':** The shape of the section depends on the solid and the cutting plane's orientation. Familiarize yourself with common shapes (circle, ellipse, square, rectangle, triangle, trapezoid).
*   **The Pitfall:** The most common mistake is taking heights from the wrong view. **Double-check where you are getting your dimension from!** If $X_1Y_1$ is parallel to XY (the HP trace), use heights from the Front View. If $X_1Y_1$ is parallel to the VP trace, use distances from the Top View.
*   **Exam Tip:** Be prepared to draw the true shape of a section for various solids (prisms, pyramids, cones, cylinders) cut by planes that are perpendicular or inclined to the axis. Sometimes, the question might specify a cutting plane by its inclination angle and a point it passes through, or by its traces on the HP and VP.

This understanding of true shape is a cornerstone of engineering graphics. Master this, and you'll be able to communicate complex internal designs clearly and accurately.

---

## Sample Questions with Answers

Here are a few sample questions to test your understanding, covering both conceptual and exam-oriented aspects:

**Q1: What is the primary purpose of determining the true shape of a section in engineering drawings?**

**Answer:** The primary purpose is to accurately represent the actual geometric form of the surface created when a solid is cut by a plane. This is crucial for understanding internal features, dimensions, and for manufacturing purposes, as the projected shape in orthographic views might be foreshortened due to the inclination of the cutting plane.

**Q2: When finding the true shape of a section using an auxiliary projection plane parallel to the trace of the cutting plane on the HP, from which view are the distances for plotting the intersection points measured?**

**Answer:** The distances (heights) for plotting the intersection points on the auxiliary plane are measured from the **Front View (FV)**. This is because the FV shows the vertical heights above the HP, and these heights are transferred to the auxiliary plane which is set up parallel to the cutting plane's HP trace.

**Q3: A square prism is cut by a plane inclined to the base. If the plane is perpendicular to the axis of the prism, what will be the true shape of the section?**

**Answer:** If the plane is perpendicular to the axis of the prism and cuts through it, the true shape of the section will be a **rectangle**. This is because the prism's sides are perpendicular to the base, and a plane perpendicular to the axis will reveal a cross-section parallel to the base and hence rectangular in shape.

**Q4: A cone with its axis vertical is cut by a plane inclined to the axis. Describe the possible true shapes of the section.**

**Answer:** When a cone with a vertical axis is cut by a plane inclined to the axis:
*   If the plane cuts through the base and the conical surface, the true shape of the section is an **ellipse**.
*   If the plane is inclined such that it is parallel to a generator of the cone, the true shape is a **parabola**.
*   If the plane is inclined at a steeper angle than the generator (cutting through both bases of a double cone, or just the conical surface of a single cone with a steeper angle), the true shape is a **hyperbola**.
    In typical engineering graphics problems concerning a single cone, ellipses and parabolas are the most common inclined sections encountered.

**Q5: Explain the principle used to determine the true shape of a section.**

**Answer:** The principle used is **Revolution**, achieved through **Auxiliary Projection**. The cutting plane is imagined to be rotated about its intersection with a principal projection plane until it becomes parallel to that principal projection plane. This is practically done by drawing an auxiliary projection plane parallel to the trace of the cutting plane on either HP or VP. The distances from the other principal projection plane are then transferred to this auxiliary plane to plot the true shape of the section. This method eliminates the foreshortening caused by the inclined cutting plane.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
