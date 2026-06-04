---
title: "True shape of the sections. (Exclude true shape given problems)"
subject: "ENGINEERING GRAPHICS AND COMPUTER AIDED DRAWING"
module: "Module 3: Sections of Solids: Sections of Prisms, Pyramids, Cone and Cylinder only, with axis in vertical position and cut by different section planes."
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5c46"
status: "completed"
scrapedAt: "2026-05-20T16:37:57.010Z"
---
This is a great topic, and understanding the "true shape of the sections" is absolutely fundamental to what we do in Engineering Graphics. It’s like being able to see the real profile of something after you’ve sliced it, not just how it looks from the side. This topic directly supports **CO3: Plot sectional views and develop surfaces of a given object**, as the true shape is the actual form of that cut surface.

Let’s dive into Module 3: Sections of Solids, specifically focusing on how we determine and represent the *true shape* of the section when the solid is cut by different planes. We'll be looking at prisms, pyramids, cones, and cylinders, with their axes in the vertical position.

***

## Module 3: Sections of Solids - The True Shape of the Section

Imagine you have a perfectly shaped loaf of bread (that could be our prism or cylinder). When you slice it with a knife, what you see on the cut surface is the "section." Now, in engineering drawings, we need to show the *actual* shape of that cut, not just how it appears in the front view or top view. This is where the "true shape of the section" comes in.

### 1. Why Do We Need the True Shape of the Section?

Think about it. If you cut a cylindrical pipe diagonally, in your front view, it might look like an ellipse. But is it *really* an ellipse? Or is it something more? The true shape tells us the precise geometry of that cut. This is crucial for:

*   **Manufacturing:** If you need to machine a specific profile after a cut, you need to know its exact dimensions and form.
*   **Analysis:** Understanding the strength or flow characteristics through a cut often requires knowing its true shape.
*   **Design:** Sometimes, the shape of the cut itself is an integral part of the overall design.

This directly relates to **CO3** because plotting sectional views accurately requires understanding these true shapes. It's about visualizing the object beyond its standard orthographic projections.

### 2. Understanding Section Planes and Their Effects

We’ve established that solids can be cut by various planes. The nature of the cut—and therefore the resulting shape—depends entirely on the orientation of the section plane relative to the solid. Since we’re focusing on solids with the axis in the vertical position, our common section planes will be:

*   **Perpendicular to the Axis:** These cuts are straightforward.
*   **Parallel to the Base:** Again, these result in familiar shapes.
*   **Inclined to the Axis:** These are where things get interesting and where the concept of true shape becomes most critical.

Let’s consider the basic solids and how different cuts affect the section shape:

#### 2.1 Sections of Prisms and Cylinders

*   **Prisms:** Think of a square prism (like a square block of cheese) or a hexagonal prism (like a fancy nut).
    *   **Cut Perpendicular to the Axis:** The section will be a square or a hexagon, identical to the shape of the prism’s base.
    *   **Cut Parallel to the Base:** Same as above, the section shape matches the base.
    *   **Cut by an Inclined Plane:** This is where we see variations. If the plane cuts through two parallel faces, you’ll likely get a rectangle or a parallelogram. If it cuts through multiple faces at angles, you might get more complex quadrilaterals.

*   **Cylinders:** Imagine a round pipe or a solid metal rod.
    *   **Cut Perpendicular to the Axis:** A perfect circle. Easy peasy!
    *   **Cut Parallel to the Base:** Also a perfect circle.
    *   **Cut by an Inclined Plane:** This is a classic example. An inclined plane cutting a cylinder will produce an **ellipse**. If the plane is parallel to the slant height (a generator line), it will produce a **parabola**. If it cuts at a steeper angle, intersecting two generators, it will produce a **hyperbola**. (While parabolas and hyperbolas are possible, ellipses are most common when the axis is vertical).

#### 2.2 Sections of Pyramids and Cones

*   **Pyramids:** Think of the pyramids of Egypt (square base) or a triangular pyramid.
    *   **Cut Perpendicular to the Axis:** The section will be similar to the shape of the base, but scaled down. A square pyramid cut by a plane parallel to the base will yield a smaller square.
    *   **Cut Parallel to the Base:** Same as above.
    *   **Cut by an Inclined Plane:** This is where we see different conic sections. An inclined plane cutting a pyramid can produce a **triangle**, **trapezoid**, or **quadrilateral**. The shape depends on how many base edges the plane intersects.

*   **Cones:** Like an ice cream cone.
    *   **Cut Perpendicular to the Axis:** A circle.
    *   **Cut Parallel to the Base:** Also a circle.
    *   **Cut by an Inclined Plane:** This is the classic demonstration of conic sections.
        *   If the plane is **parallel to the base**, you get a **circle**.
        *   If the plane is **inclined but not parallel to the slant height**, you get an **ellipse**.
        *   If the plane is **parallel to the slant height** (or a generator), you get a **parabola**.
        *   If the plane is **steep enough to cut both the base and the slant height**, you get a **hyperbola**.

**Key Takeaway:** The shape of the section *as seen in the orthographic views* is not necessarily its *true shape*. The true shape is the actual geometric form of the cut surface itself.

### 3. Determining the True Shape: The Auxiliary View Method

So, how do we get this "true shape"? The most common and reliable method is by using an **auxiliary projection**. Specifically, we create an **auxiliary view** that is perpendicular to the cutting plane.

Let's break down the process. It’s like shifting your viewpoint so that you’re looking directly at the cut surface.

#### 3.1 The Principle

The fundamental idea is to project the points of intersection of the section plane with the solid onto a new plane that is parallel to the section plane. When a projection plane is parallel to a plane surface (which our section plane effectively is, or we make our auxiliary plane parallel to it), the projected shape will be the true shape.

**Connection to Course Outcomes:** This is a direct application of **CO2**, as we are creating a multiview orthographic projection (the auxiliary view) by visualizing the object in a different position relative to the section plane.

#### 3.2 Step-by-Step Procedure (Conceptual)

Let’s imagine we have the front view and top view of a solid, and we know where the section plane cuts it.

1.  **Locate the Section Plane:** You'll usually have an inclination given, or it might be defined by a specific angle or a point it passes through. In the front and top views, the section plane is typically represented by a line (or pair of lines).
2.  **Identify Intersection Points:** Mark the points where the section plane line intersects the visible edges or contours of the solid in both the front and top views. These are critical points.
3.  **Draw the Auxiliary Plane:** This is the crucial step. We need to draw a new projection plane that is parallel to the section plane. A good way to visualize this is to pick a line that represents the section plane in one of the views (say, the top view) and draw a new reference line (X1-Y1) parallel to it.
4.  **Project Intersection Points to the Auxiliary Plane:** For each intersection point you identified in step 2, you need to transfer its true distance from the reference line (XY) to the new auxiliary reference line (X1-Y1).
    *   **How to measure distance?** You’ll use the *other* view. For example, if you used the front view to establish the section plane's location, you'll use the top view to get the distances.
    *   Let's say you have a point 'P' where the section plane cuts an edge. In the front view, this point 'P' is on the section line. In the top view, this point 'P' is on the corresponding edge. You measure the *perpendicular distance* of this point 'P' from the original XY line (which is usually the projector from the front view to the top view).
    *   This measured distance is then transferred onto the new auxiliary view, starting from the new reference line (X1-Y1), perpendicular to X1-Y1.
5.  **Connect the Points:** Once you have projected all the intersection points onto the auxiliary plane, connect them in the correct order. The resulting shape is the true shape of the section.

**Example Analogy:** Imagine you have a slanted piece of paper (your section plane) cutting through a cylinder.
*   In the front view, the cut looks like a squashed circle (ellipse).
*   In the top view, the cut shows the circular base.
*   To see the *real* elliptical shape, you'd have to tilt your head or tilt the cylinder so you are looking *directly* at the cut surface. That’s what the auxiliary view does for us – it “tilts” our viewing direction to be perpendicular to the cut.

#### 3.3 What Type of View is This?

The auxiliary view we draw to get the true shape of the section is typically an **Auxiliary Front View** or an **Auxiliary Top View**, depending on which view the section plane line is most clearly defined. If the section plane is inclined to the Horizontal Plane (HP) and we want to see its true shape, we project onto a Plane parallel to the Section Plane, which is usually placed parallel to the Section Plane in the Front View. This is essentially a **Sectional Front View**. Conversely, if the section plane is inclined to the Vertical Plane (VP), we project onto a plane parallel to the Section Plane in the Top View, resulting in a **Sectional Top View**.

**A word on the reference lines (XY, X1Y1, etc.):** These lines are crucial for transferring distances. They are always parallel to the direction of sight. For a primary auxiliary view, the new reference line (X1Y1) is parallel to the line representing the section plane in the adjacent view.

#### 3.4 Practical Considerations and Common Pitfalls

*   **Accurate Measuring:** This is paramount. Even a slight error in transferring distances can distort the true shape.
*   **Correct Projection:** Ensure you are projecting points correctly from the adjacent view. Remember, distances are transferred perpendicular to the reference lines.
*   **Order of Points:** Connecting the projected points in the correct sequence is vital to form the shape.
*   **Visibility:** In the auxiliary view, we are only interested in the sectioned profile. We don't usually need to show the rest of the object in detail unless specifically asked.

**Exam Tip:** Questions asking for the "true shape of the section" almost always require you to draw an auxiliary view. Make sure you understand which view to use for transferring distances. If the section plane is inclined to the HP, you’ll use the Top View to get distances for your auxiliary front view. If it’s inclined to the VP, you’ll use the Front View for distances for your auxiliary top view.

### 4. True Shape of Sections for Different Planes

Let's revisit the shapes for common section planes and how we'd find their true shape.

*   **Plane Perpendicular to Axis:**
    *   **Prism/Cylinder:** True shape is the same as the base (square, hexagon, circle). No special auxiliary view is needed if the section plane is parallel to the base or the prism/cylinder is viewed from the top. If it's perpendicular to the axis, the section is directly visible in the front view.
    *   **Pyramid/Cone:** True shape is a scaled version of the base. Again, directly visible.

*   **Plane Inclined to Axis:** This is where the auxiliary view method is essential.
    *   **Prisms:** The true shape will be a rectangle, parallelogram, or a quadrilateral. We project the intersection points onto a plane parallel to the inclined section plane to get the true shape.
    *   **Cylinders:** The true shape will be an ellipse. We use the auxiliary view method to project the intersection points to get the true elliptical shape. The apparent shape in the front view might be a more elongated ellipse or a rectangle if the cut is very oblique.
    *   **Pyramids:** The true shape can be a trapezoid or a quadrilateral. The auxiliary view will reveal its precise dimensions.
    *   **Cones:** The true shape can be an ellipse, parabola, or hyperbola. For ellipses resulting from cuts inclined to the axis (but not parallel to the generators), the auxiliary view is the way to get its true shape.

**Connection to CO3:** This entire section is about understanding and plotting these sectional views accurately, which is the core of CO3.

### 5. Relating to Textbooks and Learning Outcomes

Our study of the true shape of sections directly supports **CO3: Plot sectional views and develop surfaces of a given object**. Understanding the true shape is a prerequisite for accurately plotting sectional views.

*   **Varghese, P. I. / Benjamin, J. / John, K. C. / Bhatt, N. D. / Anilkumar, K. N.:** These textbooks will provide detailed examples of how to draw the orthographic views and then construct the auxiliary views to find the true shape for various solids and section plane orientations. Pay close attention to their diagrams and step-by-step illustrations. They emphasize the projection techniques that we've discussed.
*   **Kulkarni, D. M., Rastogi, A. P. and Sarkar, A. K. (AutoCAD):** When you move to Computer-Aided Drawing, these concepts are implemented using commands. For instance, you'll define the section plane, and the software can often generate the sectional view and, with appropriate projection settings, the true shape. However, understanding the manual method is crucial for setting up the problem correctly in CAD.
*   **Venugopal, K. / Parthasarathy, N. S., and Murali, V.:** These references will reinforce the fundamental principles of projection and the geometry of conic sections, which are often the resulting true shapes when cutting cones and cylinders with inclined planes.

**Remember this:** The true shape of the section is always obtained on a plane parallel to the cutting plane. The auxiliary view is simply our graphical tool to achieve this.

***

## Sample Questions and Answers

Let’s test your understanding with a couple of questions, focusing on the concept.

**Q1. When a solid is cut by a plane, why is it often necessary to draw an auxiliary view to show the true shape of the section?**

**Answer:** The orthographic views (front, top, side) show the solid from specific directions, projected onto planes perpendicular to those directions. A section plane can be oriented at any angle. The apparent shape of the section in an orthographic view is a projection onto a plane that is *not* parallel to the actual cut surface. Therefore, it doesn't represent the true dimensions or shape of that surface. An auxiliary view is created by projecting onto a plane that is parallel to the section plane. This "straight-on" view reveals the true geometric shape and size of the section. This is crucial for accurate representation and for manufacturing purposes.

**Q2. If a cone with its axis vertical is cut by a plane that is inclined to the axis but not parallel to the slant height, what shape is expected for the true shape of the section? If this plane also intersects the base, what shape will it be in the orthographic front view?**

**Answer:**
*   **True Shape:** When a cone is cut by a plane inclined to the axis, but not parallel to the slant height, and the plane intersects only the *conical surface* (not the base), the true shape of the section is an **ellipse**.
*   **Orthographic Front View:** If this same plane also intersects the base of the cone (meaning it's tilted sufficiently), the apparent shape of the section in the front view will also be an **ellipse**, though it might be a more elongated one compared to the true shape. The key here is that an inclined plane cutting a cone (without being parallel to generators or base) always results in a conic section. When the axis is vertical and the cut is inclined, the conic section is typically an ellipse, unless the inclination matches the slope of the generator (parabola) or is steeper (hyperbola).

**Q3. Explain the relationship between the Sectional View and the True Shape of the Section, particularly concerning Course Outcome 3 (CO3).**

**Answer:** **CO3** aims for students to plot sectional views and develop surfaces. The **sectional view** is the drawing of the object *after* it has been cut, typically showing the cut surface with hatching lines. The **true shape of the section** is the actual geometric form of that cut surface, displayed on a plane parallel to the cut.

To plot a sectional view accurately, one often first needs to determine the true shape of the section. This might involve constructing an auxiliary view, as discussed. The true shape provides the definitive geometry (e.g., specific dimensions of an ellipse or trapezoid) that is then correctly represented within the sectional view. So, understanding and determining the true shape is a critical intermediate step in successfully plotting a complete and accurate sectional view, fulfilling a key aspect of CO3.

***

This topic is all about precision in drawing and understanding the three-dimensional nature of objects, even when they are sliced. Keep practicing the projection methods, and you’ll master it!
