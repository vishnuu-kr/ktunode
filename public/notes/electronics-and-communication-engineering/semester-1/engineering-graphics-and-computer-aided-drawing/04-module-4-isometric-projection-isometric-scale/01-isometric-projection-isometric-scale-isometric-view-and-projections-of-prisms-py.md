---
title: "Isometric Projection:  Isometric scale- Isometric View and Projections of Prisms, Pyramids, Cone, Cylinder, Sphere, Hemisphere and their combinations."
subject: "ENGINEERING GRAPHICS AND COMPUTER AIDED DRAWING"
module: "Module 4: Isometric Projection:  Isometric scale"
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc8f20463779487da0b1"
status: "completed"
scrapedAt: "2026-05-23T17:33:56.905Z"
---
## Engineering Graphics and Computer Aided Drawing

### Module 4: Isometric Projection - Isometric Scale

Welcome, everyone, to Module 4! Today, we're diving into the fascinating world of **Isometric Projection**. You know how when you look at an object, you can see multiple sides of it at once? That's kind of what isometric projection aims to replicate on a flat piece of paper or a screen. It's a way to show an object in three dimensions, giving us a more realistic view than simple orthographic projections (which, remember, show us only one face at a time – top, front, or side).

This module is all about creating these 3D-like views, and a key part of that is understanding the **Isometric Scale**. We'll be exploring how to draw the isometric projections and views of various common shapes – prisms, pyramids, cylinders, cones, spheres, hemispheres, and even combinations of these. This will directly help us achieve **Course Outcome CO4: Prepare pictorial drawings using the principles of isometric projection**. And as we progress, you'll see how this knowledge is foundational for using CAD tools effectively in **CO5: Sketch simple drawings using CAD tools**.

#### What is Isometric Projection?

Before we get into the "how," let's understand the "what." An isometric projection is a type of **pictorial projection** where the projection lines are **parallel** to each other and **inclined** to the picture plane. Think of it like this: imagine a camera positioned so that it's looking at an object from a corner, with the three axes (X, Y, Z) appearing equally foreshortened and equally spaced.

In an isometric projection, the three axes (representing length, width, and height) are typically drawn at 120 degrees to each other. The **vertical axis** (usually representing height) is drawn vertically. The other two axes (representing length and width) are drawn at an angle of **30 degrees** to the horizontal. This creates that characteristic "tilted" look where you can see three faces of the object.

#### The Crucial Concept: The Isometric Scale

Now, here's where the "scale" part comes in, and it's super important. In true isometric projection, all three axes (X, Y, Z) are foreshortened by the same factor. This factor is approximately 0.8154, or more precisely, $1/\sqrt{3}$.

However, when we draw things by hand, it's often easier to work with simpler ratios. This leads us to the **Isometric Scale**. Instead of using the true foreshortening factor, we use a scale where the length along the isometric axes are reduced to 81.5% of their actual size, but we draw them using a simpler ratio, usually **10:12** or **9:10** (though 10:12 is very common).

Let's clarify this. Imagine you have a line that is 100 mm long in reality.
*   In a **true isometric projection**, its isometric length would be $100 \times 0.8154 \approx 81.54$ mm.
*   In an **isometric drawing using an isometric scale (e.g., 10:12 ratio)**, for every 12 mm on your normal scale, you'd draw 10 mm on the isometric drawing. So, for a 100 mm real length, you'd calculate the isometric length as $100 \times (10/12) \approx 83.33$ mm.

Why do we do this? It makes constructing the drawing much simpler. We can use a standard scale (like a 1:1 scale ruler) and mark lengths that are proportionally shorter.

**How to Construct an Isometric Scale:**

Let's say we want to construct an isometric scale where the ratio is 10:12.
1.  Draw a horizontal line.
2.  From one end of this line (say, the left end), draw a vertical line upwards. Mark a reference point, say, at 100 mm.
3.  From the same end (the left end), draw a line inclined at 30 degrees to the horizontal line. This will be our isometric line.
4.  Now, on the vertical line, mark divisions representing 10 mm, 20 mm, 30 mm, and so on, up to 100 mm.
5.  From the 100 mm mark on the vertical line, draw a line parallel to the horizontal line until it meets the 30-degree inclined line.
6.  From this intersection point, draw lines parallel to the vertical line, connecting to the divisions on the horizontal line. These points on the 30-degree inclined line now represent the isometric lengths for 10 mm, 20 mm, 30 mm, etc., of the actual lengths.

Remember this: **The isometric scale is used to measure lengths along the isometric axes (the lines inclined at 30 degrees to the horizontal). Vertical lines remain vertical and are not scaled.**

The construction of the isometric scale helps us directly with **CO4**, as it's a fundamental tool for creating accurate pictorial drawings.

#### Isometric View vs. Isometric Projection

It's important to distinguish between these two:
*   **Isometric Projection:** This is the projection obtained when the rays are perpendicular to the picture plane. In this case, the axes are at 120 degrees, and all three are equally foreshortened by a factor of $1/\sqrt{3}$. The scale used here is the *true* isometric scale.
*   **Isometric View:** This is what we commonly draw. It's a view obtained by orienting the object so that the three axes appear at 120 degrees to each other, with the vertical axis vertical and the other two at 30 degrees to the horizontal. We use the *constructed isometric scale* to measure lengths along these axes. This is the more practical approach for drawing.

In most contexts, when we talk about drawing an "isometric projection," we are actually referring to creating an **isometric view** using the isometric scale.

#### Projections of Basic Solids

Now, let's apply this to the shapes mentioned. We'll think about how their isometric views would look. When drawing these, always remember to establish your isometric axes first.

##### 1. Prisms

A prism has two identical bases and rectangular sides connecting them.
*   **Square Prism (or Cube):** A cube is a prism with square bases and square sides. Imagine a die.
    *   **Isometric View:** You'll see three faces meeting at a corner. The top and bottom bases will appear as rhombuses (diamond shapes), and the side faces will appear as parallelograms. All edges will be drawn using the isometric scale, except the vertical edges which are drawn as their actual height (but since the base edges are scaled, the height will also appear scaled relative to the real world, but we use the isometric scale for consistency).
    *   **Drawing Steps:**
        1.  Draw an isometric axis.
        2.  On the base axes, mark the length and width using the isometric scale.
        3.  Connect these points to form the base rhombus.
        4.  Draw vertical lines (representing height) from the corners of the base using the isometric scale.
        5.  Connect the tops of these vertical lines to complete the isometric view.

*   **Triangular Prism:** Imagine a Toblerone box.
    *   **Isometric View:** You'll see a triangular base and a rectangular face. Or, if viewed from a corner, you might see portions of three faces. The triangular bases will appear distorted (not as true triangles), and the rectangular sides will appear as parallelograms.
    *   **Drawing Steps:** Similar to the square prism, but the base will be constructed based on the dimensions of a triangle. You’ll need to determine the lengths of the sides of the triangle and the angles, and then project them isometrically.

*   **General Prism:** The principle remains the same. Whatever the shape of the base (pentagon, hexagon, etc.), you draw its isometric view first, then erect vertical lines representing the height, and connect the tops.

**(Relatable Example):** Imagine an old-fashioned wooden block toy, like a block shaped like a house (a prism with a triangular top). To draw its isometric view, you'd first draw the square base isometrically, then the vertical walls up to the roof base, and then the triangular gable isometrically.

##### 2. Pyramids

A pyramid has a base and triangular faces that meet at a single point called the apex.
*   **Square Pyramid:** Think of the pyramids of Giza.
    *   **Isometric View:** You'll see the square base (as a rhombus) and the triangular sides converging to an apex. The apex will be positioned above the center of the base rhombus.
    *   **Drawing Steps:**
        1.  Draw the isometric view of the square base (a rhombus).
        2.  Find the center of the rhombus. This is where the apex will be projected.
        3.  Draw a vertical line from this center point, representing the height of the pyramid, using the isometric scale. Mark the apex at the top.
        4.  Connect the apex to the four corners of the base rhombus.

*   **Triangular Pyramid (Tetrahedron):** A simple pyramid with a triangular base.
    *   **Isometric View:** Similar to the square pyramid, but the base is a triangle's isometric representation.
    *   **Drawing Steps:** Draw the isometric view of the triangular base. Find its centroid (not the geometric center unless it's equilateral). Draw the height vertically from the centroid to the apex. Connect the apex to the base vertices.

*   **General Pyramid:** For any base shape, draw its isometric view, find the centroid of that base, draw the height vertically from the centroid to the apex, and connect the apex to the base vertices.

**(Relatable Example):** Imagine a party hat. It's essentially a cone, but if it had a square base and then tapered to a point, it would be a square pyramid. To draw its isometric view, you'd draw the square base, then draw a line going straight up from the middle of the base to the point of the hat, and connect the point to the corners of the base.

##### 3. Cone

A cone has a circular base and a curved surface that tapers to a point (apex).
*   **Isometric View:** The circular base will appear as an **ellipse**. The curved surface will look like a parabolic arc connecting the apex to the extremes of the ellipse.
*   **Drawing Steps:**
    1.  Since the circular base appears as an ellipse in isometric projection, we draw a **rectangular box** whose sides are in proportion to the diameter of the circle. This box will be drawn using the isometric scale for its width and length.
    2.  Inside this box, draw the **isometric ellipse**. The easiest way to do this is by constructing an **auxiliary rhombus** within the box. The diagonals of this rhombus will be the major and minor axes of the ellipse. For an isometric ellipse, the major axis is generally along the center line of the rhombus, and the minor axis is perpendicular to it. You can approximate the ellipse by drawing arcs using a compass, often with the help of four centers.
    3.  Find the center of the isometric ellipse (which represents the center of the circular base).
    4.  Draw the height of the cone vertically from this center, using the isometric scale, to mark the apex.
    5.  Connect the apex to the points on the ellipse where the tangents from the apex touch the ellipse.

**(Relatable Example):** Think of an ice cream cone. The opening of the cone is a circle. When you draw it isometrically, that circle appears as an oval shape (an ellipse). The cone itself tapers to a point. You'd draw the oval base and then draw lines from the tip of the cone down to the widest points of the oval.

##### 4. Cylinder

A cylinder has two parallel circular bases connected by a curved surface.
*   **Isometric View:** The circular bases will appear as **ellipses**. The curved surface will appear as two parallel curves connecting the ellipses.
*   **Drawing Steps:**
    1.  Similar to the cone, draw the isometric ellipses for the top and bottom bases.
    2.  Construct the rectangular boxes first, then the ellipses within them. Ensure the boxes are positioned correctly relative to each other to represent the cylinder's height.
    3.  Draw vertical lines connecting the corresponding "extreme" points of the top and bottom ellipses. These lines are the generators of the cylinder and appear straight in isometric view.

**(Relatable Example):** Imagine a can of soup. It has two circular ends. In an isometric view, both ends will look like ovals, and the sides will be straight vertical lines connecting the sides of these ovals.

##### 5. Sphere

A sphere is a perfectly round ball.
*   **Isometric View:** A sphere appears as a **circle** in isometric projection, regardless of its orientation. The diameter of this circle will be the diameter of the sphere drawn using the isometric scale.
*   **Drawing Steps:**
    1.  Determine the diameter of the sphere.
    2.  Construct a square whose sides represent this diameter on the isometric scale.
    3.  Draw an isometric ellipse within this square. This ellipse will be the outline of the sphere.
    4.  To make it look more like a sphere, you can add some shading or draw a curve of light and shadow, but the fundamental isometric representation is the circle (drawn as an ellipse within a square in isometric projection).

**(Relatable Example):** A tennis ball. No matter how you look at a tennis ball, it always looks like a circle. In isometric projection, it's represented by a circle, which we draw as an ellipse within an isometric square.

##### 6. Hemisphere

A hemisphere is half a sphere.
*   **Isometric View:** It consists of a **semicircle** (for the curved part) and a **semicircular base** (which appears as a semicircle, or half an ellipse).
*   **Drawing Steps:**
    1.  Draw the isometric ellipse representing the full sphere's outline.
    2.  Locate the center of this ellipse.
    3.  Draw a line through the center, parallel to one of the isometric axes, dividing the ellipse into two halves. This line represents the diameter of the base.
    4.  The upper half of the ellipse (or the lower half, depending on orientation) represents the curved surface of the hemisphere. The dividing line represents the base. You might draw a faint line for the base arc as well.

**(Relatable Example):** Think of a half-orange. The cut surface is flat, and the rounded part is the curved surface. You'd draw the oval outline, and then a straight line across the middle of the oval to represent the flat cut surface.

##### 7. Combinations of Solids

This is where things get interesting and practical! You might be asked to draw an object that's made up of several basic shapes.
*   **How to Approach:**
    1.  **Break it Down:** Analyze the object and identify the individual basic solids (prisms, cylinders, cones, spheres, etc.) that make it up.
    2.  **Draw Each Component:** Draw the isometric view of each component separately, using the principles we've discussed. Pay close attention to how the objects are connected or positioned relative to each other. For example, if a cylinder is placed on top of a cube, draw the cube first, then draw the base of the cylinder on the top face of the cube.
    3.  **Combine and Refine:** Combine the individual drawings. Erase any hidden lines that are no longer needed. Ensure the overall proportions are correct.

**(Relatable Example):** Imagine a simple desk lamp. It might have a cylindrical base, a slender conical or cylindrical neck, and a hemispherical or conical lampshade. To draw its isometric view, you would first draw the isometric view of the base, then the neck attached to it, and then the lampshade attached to the neck. You'd carefully position each part. This directly relates to **CO4** by applying the principles to more complex forms.

#### Connecting to Course Outcomes

*   **CO1 (Projection of points and lines):** Understanding how lines and points are represented in 3D space, even though not explicitly focused on here, is fundamental to building up the projections of solids. The angles and distances are based on these fundamental concepts.
*   **CO2 (Multiview orthographic projections):** While we're focusing on pictorial views, understanding how different views relate to each other is crucial. Isometric drawings provide a holistic view that complements orthographic projections.
*   **CO3 (Sectional views and developed surfaces):** Although not directly covered in this specific topic, the ability to visualize solids in 3D space, which isometric projection provides, is a prerequisite for understanding how to slice (section) them or unfold them.
*   **CO4 (Pictorial drawings using isometric projection):** This is the core outcome for this topic. We are learning the techniques to prepare these drawings.
*   **CO5 (Sketching simple drawings using CAD tools):** The principles of isometric projection are directly translated into CAD software. When you create an isometric view in AutoCAD or other CAD software, you are applying these same geometric rules. Understanding the theory makes using the software much more intuitive.

#### Key Takeaways and Exam Tips

*   **Isometric Scale is Crucial:** Always remember to use the isometric scale for all lengths measured along the isometric axes (the 30-degree lines). Vertical lines are drawn to their actual height, but effectively scaled as per the isometric scale applied to the base.
*   **Circles become Ellipses:** Any circle in 3D space will appear as an ellipse in isometric projection.
*   **Boxes for Curves:** For cylinders, cones, and spheres, it's helpful to first enclose them in isometric boxes or rhombuses to guide your drawing.
*   **Practice, Practice, Practice:** The best way to master this is by drawing many examples. Start with simple objects and gradually move to combinations.
*   **Orientation Matters:** The way you orient the object relative to the isometric axes will change the appearance of the drawing, but the underlying principles remain the same.
*   **Hidden Lines:** Be mindful of hidden lines. In many isometric drawings, they are often omitted for clarity, especially when drawing simple objects. However, for complex assemblies or when specified, they might be shown as dashed lines.

Remember, the goal is to create a drawing that gives a good three-dimensional impression of the object. It’s a skill that combines understanding geometry with a bit of artistic rendering.

---

### Sample Questions with Answers

**1. Conceptual Question:** Explain why an isometric scale is used in isometric projection.
    *   **Answer:** An isometric scale is used to create a practical and relatively accurate representation of an object in three dimensions. In true isometric projection, all axes are foreshortened by a factor of $1/\sqrt{3}$ (approximately 0.8154). Using a constructed isometric scale (often with a ratio like 10:12 or 9:10) simplifies the process of measuring lengths along the isometric axes. This allows draftsmen to use standard rulers and scales more conveniently, while still maintaining the correct proportions and the characteristic 120-degree angles between axes, making the drawing appear more realistic and easier to construct. It's a method that balances accuracy with practical drafting.

**2. Practical Question:** Draw the isometric view of a cube of side 30 mm.
    *   **Solution:**
        1.  **Draw Axes:** Draw the three isometric axes: one vertical, and two at 30 degrees to the horizontal, all 120 degrees apart.
        2.  **Draw Base:** From the origin of the axes, mark 30 mm along the horizontal axis and 30 mm along the 30-degree axis using the isometric scale (or simply a 1:1 scale if you understand it represents the scaled length). Connect these points with a line parallel to the other axis. This forms the base rhombus of the cube.
        3.  **Draw Height:** From each corner of the base rhombus, draw vertical lines of length 30 mm (using the isometric scale).
        4.  **Complete Top:** Connect the top ends of these vertical lines to form the top rhombus, completing the isometric view of the cube.

        *(Visual Aid: Imagine a perfectly tilted box. All edges are equal in length on the isometric scale, and all visible faces are identical rhombuses.)*

**3. Application Question:** A cylinder has a base diameter of 40 mm and a height of 60 mm. Draw its isometric view.
    *   **Solution:**
        1.  **Draw Base Ellipse:**
            *   Construct an isometric box for the base. The length and width will be 40 mm, measured using the isometric scale. Since it's a square base projection, both sides of the bounding box will be 40mm on the isometric scale.
            *   Draw the isometric ellipse within this 40x40 mm isometric box. This can be done by constructing an auxiliary rhombus (a square aligned with the isometric axes) and then drawing four arcs using the four-center method, or by freehand sketching if precision is not paramount for a conceptual sketch.
        2.  **Determine Height:** From the center of the base ellipse, draw a vertical line representing the height of 60 mm, measured using the isometric scale. Mark the apex of the cylinder.
        3.  **Draw Top Ellipse:** Draw a second isometric ellipse (of the same dimensions as the base ellipse) at the top of the vertical height line.
        4.  **Connect:** Draw smooth curves connecting the corresponding "sides" of the top and bottom ellipses. These curves represent the curved surface of the cylinder.

        *(Visual Aid: Think of a can of soup tilted. Both the top and bottom openings look like ovals, and the sides are smooth, curved lines connecting them.)*

**4. Conceptual and Exam-Oriented:** What is the relationship between the true isometric projection scale and the common isometric scale used in drawing?
    *   **Answer:** The true isometric projection uses a foreshortening factor of $1/\sqrt{3}$ (approx. 0.8154) for all three axes. This means a 100 mm line would be represented as approximately 81.54 mm in a true isometric projection. However, this is cumbersome to measure. The commonly used isometric scale is a derived scale, often based on a ratio like 10:12 (or 9:10). This ratio simplifies measurement: for every 12 units of actual length, we represent 10 units isometrically. So, a 100 mm actual length would be drawn as $100 \times (10/12) \approx 83.33$ mm. While not as mathematically pure as the true projection, the isometric scale provides a practical and visually consistent way to create isometric drawings that are easier to construct and interpret. This practical application is what's generally tested.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
