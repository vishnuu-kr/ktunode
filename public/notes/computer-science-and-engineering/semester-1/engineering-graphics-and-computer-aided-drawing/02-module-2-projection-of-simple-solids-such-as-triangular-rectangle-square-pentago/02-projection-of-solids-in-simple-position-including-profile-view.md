---
title: "Projection of solids in simple position including profile view."
subject: "ENGINEERING GRAPHICS AND COMPUTER AIDED DRAWING"
module: "Module 2: Projection of Simple solids such as Triangular, Rectangle, Square, Pentagonal and Hexagonal Prisms, Pyramids, Cone and Cylinder only."
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5c42"
status: "completed"
scrapedAt: "2026-05-20T16:37:51.709Z"
---
Alright everyone, settle in! Welcome back to our journey through Engineering Graphics and Computer-Aided Drawing. Today, we're diving into something absolutely fundamental, something that forms the bedrock for so much of what we do in design and engineering: **Projection of Solids in Simple Position, including the Profile View.**

Now, you might be thinking, "Solids? We've already done points and lines, what's so different now?" Well, imagine you're trying to explain to someone what a house looks like, or a car engine, or even just a simple chair. You can't just give them a 2D sketch; it wouldn't capture the depth, the volume, the *three-dimensionality* of it all. That's where understanding how to represent solids on a 2D plane, using projection techniques, becomes critically important.

This topic directly ties into **Course Outcome 2 (CO2): Prepare multiview orthographic projections of objects by visualizing them in different positions.** By the end of this session, you'll be able to take a 3D solid – like a cube, a cylinder, or a pyramid – and show its true shape and size from different viewpoints on paper. This is the essence of multiview projection.

### Understanding Solids and Their Projections

Before we jump into the "how," let's quickly recap what we mean by solids and projections.

**What is a Solid?**
In the context of engineering graphics, a solid is a three-dimensional object with length, width, and height. We're focusing on **simple solids** today, which are the fundamental shapes you'll encounter most often. These include:

*   **Prisms:** These are solids with two identical bases that are parallel polygons, and rectangular faces connecting corresponding sides of the bases. Think of a triangular prism (like a Toblerone box), a square prism (which is essentially a cuboid or rectangular block), or a hexagonal prism (like some types of nuts and bolts).
*   **Pyramids:** These have a polygonal base and triangular faces that meet at a common point called the **apex**. Examples are a square pyramid (like the pyramids of Giza, albeit simplified!), a pentagonal pyramid, or a triangular pyramid (also known as a tetrahedron).
*   **Cylinder:** A solid with two identical circular bases connected by a curved surface. Think of a can of soup or a pipe.
*   **Cone:** A solid with a circular base and a curved surface that tapers to a point called the apex. Imagine an ice-cream cone or a traffic cone.

**What is Projection?**
Projection is the process of transferring a 3D object onto a 2D plane (like your drawing paper or a computer screen). We've already touched upon points and lines, and solids are just collections of these. The key is that when we project a solid, we are essentially projecting its edges and its visible surfaces.

### The "Simple Position" – What Does It Mean?

When we talk about solids in a "simple position," it means their **axis is either perpendicular or parallel to one of the principal planes of projection** (the Horizontal Plane (HP) and the Vertical Plane (VP)). This simplifies things greatly because the true shape and size of the base (or top) and one of the main faces will be visible in either the Top View (TV) or the Front View (FV).

*   **Axis Perpendicular to a Plane:** If the axis of a cylinder or prism is perpendicular to the HP, its FV will show the true shape of the base (a rectangle for a prism, a circle for a cylinder), and its TV will show the true shape of the base (a polygon or circle).
*   **Axis Parallel to a Plane:** If the axis of a cylinder or prism is parallel to the HP (and thus perpendicular to the VP), its FV will show a rectangular projection, and its TV will show the true shape of the base.

This "simple position" is crucial because it allows us to clearly see the fundamental geometry of the solid. It's like starting with a perfectly upright box before you start tilting it.

### Multiview Orthographic Projections: The Core Idea

Remember our discussion about **CO2**? This is where it all comes into play. Multiview orthographic projection is the technique of projecting an object onto several 2D planes from different directions, typically perpendicular to the planes. The most common views are:

1.  **Front View (FV):** Seen from the front. This is usually the primary view, showing the height and width.
2.  **Top View (TV):** Seen from directly above. This shows the width and depth.
3.  **Side View (SV) / Profile View:** Seen from the side (usually the right or left). This shows the height and depth.

These views are arranged in a standard manner, forming what we call an orthographic projection. The horizontal plane (HP) is typically the plane you see in the Top View, and the vertical plane (VP) is the plane you see in the Front View.

**Analogy Time:** Imagine you're standing in front of a building.
*   The **Front View** is what you see directly in front of you – the facade, the windows, the doors.
*   The **Top View** is like looking down from a helicopter – you see the roof, the footprint of the building.
*   The **Side View** (or profile view) is what you'd see if you walked to the side of the building and looked at it – the height and perhaps the depth of wings or alcoves.

### Projecting Simple Solids: Step-by-Step

Let's break down how we actually draw these projections for some common solids. We'll start with a prism and then move to a pyramid and a cylinder/cone, as these cover the core principles.

**1. Projection of a Square Prism in Simple Position**

Imagine a square prism, like a small building block. Let's say its base is a square of side 30 mm and its height is 50 mm.

**Scenario 1: Axis Perpendicular to HP, Parallel to VP (Base on HP)**

*   **Front View (FV):** When you look at the prism from the front, assuming it's standing upright on the HP, you'll see a rectangle. The width of this rectangle will be the side length of the base (30 mm), and the height will be the height of the prism (50 mm).
*   **Top View (TV):** Looking from above, you'll see the square base. So, the TV will be a square of 30 mm x 30 mm.
*   **Profile View (Side View):** Let's assume we're looking from the right. The side view will also be a rectangle. The width of this rectangle will be the depth of the prism, which is equal to the side of the base (30 mm), and the height will be the height of the prism (50 mm).

**How to Draw (Traditional Method):**

*   Draw the **Front View** first: A rectangle 30 mm wide and 50 mm high.
*   Draw the **Top View** below the FV: A square of 30 mm x 30 mm.
*   To get the **Side View** (let's say from the right), we need a reference line, often called a **profile line** or **axis of projection**, drawn at 45 degrees to the XY line.
    *   Project the height from the FV onto this profile line.
    *   Project the width from the TV onto this profile line.
    *   From the intersection point on the profile line, draw a line parallel to the HP (horizontal) to get the width of the side view. The height will be the same as in the FV. So, you'll get a 30 mm x 50 mm rectangle for the side view.

**Remember this:** In the simple position where the axis is perpendicular to HP, the FV and SV will often look similar (rectangles in this case), but their dimensions will reflect the dimensions seen from that direction. The TV shows the true shape of the base.

**Scenario 2: Axis Parallel to HP, Perpendicular to VP (Base on VP)**

*   **Front View (FV):** Now, the prism is lying on its side, with one of its rectangular faces on the VP. When you look from the front, you'll see the true shape of one of the rectangular faces. This will be a rectangle of size 30 mm (base side) x 50 mm (height).
*   **Top View (TV):** Looking from above, you'll see the prism from the side. You'll see a rectangle. One dimension will be the height of the prism (50 mm), and the other will be the depth, which is the side of the base (30 mm). So, a 50 mm x 30 mm rectangle.
*   **Profile View (Side View):** Looking from the right, you'll see a square of 30 mm x 30 mm, which is the true shape of the base.

**Key Insight for CO2:** You're mentally rotating the object and projecting it onto the planes. You need to visualize how the object's dimensions align with the FV, TV, and SV depending on its orientation.

**2. Projection of a Square Pyramid in Simple Position**

Let's take a square pyramid with a base side of 30 mm and a height of 50 mm.

**Scenario 1: Axis Perpendicular to HP, Parallel to VP (Base on HP)**

*   **Front View (FV):** The base of the pyramid is a square. When viewed from the front, the base edges will appear as lines. The apex will be directly above the center of the base. So, the FV will be an **isosceles triangle**. The base of this triangle will be the width of the pyramid (30 mm), and its height will be the pyramid's height (50 mm).
*   **Top View (TV):** When viewed from above, you will see the true shape of the square base. So, the TV will be a **square** of 30 mm x 30 mm. You'll also see two diagonals connecting the corners of the square to the center, which usually represent the slant edges of the pyramid.
*   **Profile View (Side View):** Similar to the FV, the side view (from the right) will also be an **isosceles triangle** with a base of 30 mm and a height of 50 mm.

**Remember this:** For pyramids and cones in simple position (axis perpendicular to HP), the Front View and Side View are often triangles showing the height, while the Top View shows the true shape of the base (square, circle, polygon).

**Scenario 2: Axis Parallel to HP, Perpendicular to VP (Apex on VP)**

This orientation is a bit trickier to visualize initially but follows the same principles.

*   **Front View (FV):** The pyramid is tilted such that its axis is horizontal. The apex is pointing towards the VP. The FV will show a **triangle**. The base of this triangle will be the height of the pyramid (50 mm), and its apex will be on the VP (the right edge of your drawing). The width of the triangle at its base will be the diagonal of the square base, since that's the widest part seen from the front.
*   **Top View (TV):** Looking from above, you'll see the square base. The apex will be at one end of the square. So, the TV will be a **square** with the apex point marked at one corner.

**3. Projection of a Cylinder and Cone**

These are quite common and follow similar logic to prisms and pyramids.

**Cylinder (e.g., Base Diameter 40 mm, Height 60 mm)**

*   **Axis Perpendicular to HP (Base on HP):**
    *   **FV:** A **rectangle** of width equal to the diameter (40 mm) and height equal to the cylinder's height (60 mm). You might also show the circular outline of the top and bottom bases as hidden lines if they are obscured.
    *   **TV:** A **circle** with a diameter of 40 mm, representing the true shape of the base.
    *   **SV:** A **rectangle** similar to the FV, 40 mm wide and 60 mm high.

*   **Axis Parallel to HP (Axis Horizontal):**
    *   **FV:** A **rectangle** of width equal to the cylinder's height (60 mm) and height equal to the diameter (40 mm).
    *   **TV:** A **circle** of diameter 40 mm.

**Cone (e.g., Base Diameter 40 mm, Height 60 mm)**

*   **Axis Perpendicular to HP (Base on HP):**
    *   **FV:** An **isosceles triangle** with a base equal to the diameter (40 mm) and a height of 60 mm. The apex is the apex of the cone.
    *   **TV:** A **circle** with a diameter of 40 mm, representing the true shape of the base. You'll also see two lines from the center to the circumference, representing the slant height.
    *   **SV:** An **isosceles triangle** similar to the FV.

*   **Axis Parallel to HP (Axis Horizontal):**
    *   **FV:** An **isosceles triangle** with a base equal to the cone's height (60 mm) and its apex on the VP. The width of the base will be the diameter of the cone's base (40 mm).
    *   **TV:** A **circle** of diameter 40 mm.

### The Profile View Explained

The **Profile View**, as we've seen, is simply the **Side View**. Its importance lies in providing the third dimension (depth) that might not be immediately apparent in the Front and Top views alone.

*   **Why do we need it?** While FV and TV give you width and height, and width and depth respectively, the SV gives you height and depth. Together, these three views provide a complete understanding of the object's shape and dimensions.
*   **How is it constructed?** The standard method, as shown in textbooks like Bhatt (60th Ed.) and Varghese (2018), involves using a **45-degree line** (often called the profile line or auxiliary reference line) extending from the intersection of the HP and VP (the XY line). We project heights from the FV onto this line and widths from the TV onto this line. Then, we draw horizontal lines from these projected points to get the dimensions for the SV.

**Connecting to CO2:** Visualizing how the object's dimensions translate into the FV, TV, and SV is the essence of orthographic projection. The profile view helps you complete this visualization. If you can imagine looking at the object from the side and sketching what you see, you're on the right track.

### Types of Lines Used in Projections

It’s good practice to remember the standard line types as used in engineering drawings, as per norms:

*   **Continuous Visible Line:** For visible edges and outlines. (Thick)
*   **Dashed Line:** For hidden edges and outlines. (Thin)
*   **Continuous Thin Line:** For construction lines, dimension lines, extension lines.
*   **Dashed-dotted Line:** For center lines or axes. (Thin)

In our projections of solids, you'll often see:
*   Visible edges as continuous thick lines.
*   Hidden edges (like the base edges of a pyramid seen from the front, or the back edges of a prism) as dashed thin lines.
*   Center lines (axes of cylinders, cones, prisms) as dashed-dotted thin lines.

### Importance in Computer-Aided Drawing (CAD)

While we've discussed the manual drawing process, these concepts are equally vital when using CAD software like AutoCAD (as covered in reference books like Kulkarni et al., 2020).

*   **3D Modeling:** In CAD, you'll often start by sketching a 2D profile and then extruding it to create a 3D solid. Understanding the orthographic views helps you define that initial 2D sketch correctly.
*   **Generating Views:** Once you have a 3D model, CAD software can automatically generate the FV, TV, and SV for you. However, you need to understand *why* these views look the way they do to interpret them and to ensure the model is correct.
*   **Annotations:** Adding dimensions, labels, and other annotations requires you to understand which dimension corresponds to which view.

This topic lays the groundwork for **CO5: Sketch simple drawing using CAD tools**, as a strong understanding of projections makes using CAD much more intuitive and effective.

### Common Pitfalls and Exam Tips

*   **Confusing Base and Height:** Always double-check the given dimensions for the base (diameter or side length) and the height of the solid.
*   **Orientation:** Carefully read how the solid is positioned. Is the axis perpendicular or parallel to HP/VP? Is the base on HP? These details dictate the shape of the projections.
*   **Hidden Lines:** Don't forget to use dashed lines for edges that are not visible from the viewing direction. This is crucial for accurately representing the solid's structure.
*   **Drawing Conventions:** Ensure your lines (visible, hidden, center) are drawn correctly.
*   **Labeling:** Clearly label the views (FV, TV, SV) and the XY line.

**Exam Focus:** You'll typically be asked to draw the orthographic projections (FV, TV, and usually one Side View) of simple solids in these basic positions. Pay close attention to the shape of the base and how the apex/top base aligns with the base. For solids like pyramids and cones, remember to show the internal edges (slant edges, slant height) correctly, often as hidden lines or by projecting the apex.

### Summary and Takeaway

So, to recap:
We've learned about the basic simple solids – prisms, pyramids, cylinders, and cones.
We've understood what "simple position" means for these solids (axis parallel or perpendicular to principal planes).
We've seen how to derive the Front View, Top View, and crucially, the Profile (Side) View for these solids when they are in these simple positions.
This process is fundamental to **multiview orthographic projection (CO2)** and essential for both manual drawing and understanding CAD modeling (**CO5**).

The key is to **visualize** the solid from different directions and then project its outline and key features onto the 2D planes, using the correct line types and conventions. It’s about translating 3D reality into 2D representation accurately.

Any questions on this so far? This is a foundational concept, so make sure it's crystal clear!

---

### Sample Questions and Answers

**Question 1 (Conceptual):** When a square prism is resting on its square base on the Horizontal Plane (HP), what is the shape of its Front View and Top View?

**Answer:**
*   **Front View:** A rectangle. The width of the rectangle will be equal to the side of the square base, and the height of the rectangle will be equal to the height of the prism.
*   **Top View:** A square. This shows the true shape of the base on which the prism is resting.

**Reasoning:** When the axis is perpendicular to HP and the base is on HP, the FV shows the rectangular face perpendicular to the viewing direction (height and width of the base), and the TV shows the base itself in its true shape. This aligns with the principles of orthographic projection.

---

**Question 2 (Exam-Oriented):** Draw the Front View, Top View, and Right Side View of a cylinder with a base diameter of 50 mm and a height of 70 mm, resting on its circular base on the HP.

**Answer:**

*   **Front View (FV):**
    *   Draw a horizontal line (XY) at the bottom.
    *   Draw a rectangle above the XY line.
    *   The width of the rectangle will be equal to the diameter of the base (50 mm).
    *   The height of the rectangle will be equal to the height of the cylinder (70 mm).
    *   The top and bottom edges are continuous visible lines.

*   **Top View (TV):**
    *   Draw this directly below the FV.
    *   Draw a circle with a diameter of 50 mm, centered horizontally below the FV.
    *   Draw a vertical dashed-dotted line through the center of the circle to represent the axis.
    *   The top and bottom edges of the circle are continuous visible lines.

*   **Right Side View (SV):**
    *   Draw a reference line (profile line) at 45 degrees to the XY line, usually to the right of the FV and TV.
    *   Project the height (70 mm) from the FV vertically onto the 45-degree line.
    *   Project the width (50 mm) from the TV horizontally onto the 45-degree line.
    *   From the point on the 45-degree line where the height projection intersected, draw a horizontal line. This line's length will be equal to the height of the cylinder (70 mm).
    *   From the point on the 45-degree line where the width projection intersected, draw a vertical line. This line's length will be equal to the diameter of the cylinder (50 mm).
    *   The SV will be a rectangle, 50 mm wide and 70 mm high.

**Reasoning:** This question tests the understanding of a cylinder in its simplest orientation (axis perpendicular to HP). The FV and SV will be identical rectangles reflecting the height and diameter, while the TV shows the circular base. The construction of the SV using the 45-degree line is a standard procedure.

---

**Question 3 (Application):** A square pyramid has a base side of 40 mm and a height of 60 mm. Its base is on the HP and one side of the base is parallel to the VP. Describe how you would draw its Front View and Top View.

**Answer:**
*   **Top View (TV):**
    *   Draw a square of 40 mm x 40 mm. Since one side of the base is parallel to the VP, two sides of the square in the TV will be parallel to the XY line (which represents the VP), and the other two will be perpendicular to it.
    *   Locate the center of the square.
    *   Draw the two diagonals of the square, connecting opposite corners. These represent the slant edges of the pyramid.
    *   The outline of the square is drawn with visible lines.

*   **Front View (FV):**
    *   Draw this directly below the TV.
    *   The base of the FV will be the width of the pyramid as seen from the front, which is the side of the square base (40 mm). This base line of the FV will lie on the XY line.
    *   The apex of the pyramid will be directly above the center of the base in the TV. Project this apex position vertically down to the XY line for the TV's reference, and then vertically upwards from the center of the FV's base for the FV's apex.
    *   The height of the FV will be the height of the pyramid (60 mm).
    *   So, the FV will be an isosceles triangle with a base of 40 mm and a height of 60 mm.
    *   The base of the triangle is a visible line. The two slant edges connecting the base corners to the apex are also visible lines.

**Reasoning:** This question checks the ability to place the solid in relation to the planes (base on HP, side parallel to VP) and then project it. The FV of a pyramid with its base on HP is always a triangle, and the TV is the shape of its base with diagonals. The orientation of the base in the TV affects how the base appears in the FV.

---

Remember to practice drawing these by hand and perhaps by using simple CAD tools as well. The more you visualize, the easier it becomes!
