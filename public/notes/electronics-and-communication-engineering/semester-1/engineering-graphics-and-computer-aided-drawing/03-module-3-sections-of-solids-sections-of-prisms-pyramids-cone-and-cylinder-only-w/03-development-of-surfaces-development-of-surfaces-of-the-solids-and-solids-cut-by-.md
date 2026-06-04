---
title: "Development of Surfaces:  Development of surfaces of the solids and solids cut by different section planes."
subject: "ENGINEERING GRAPHICS AND COMPUTER AIDED DRAWING"
module: "Module 3: Sections of Solids:  Sections of Prisms, Pyramids, Cone and Cylinder only, with axis in vertical position and cut by different section planes."
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc8f20463779487da0af"
status: "completed"
scrapedAt: "2026-05-23T17:33:56.188Z"
---
# ENGINEERING GRAPHICS AND COMPUTER AIDED DRAWING

## Module 3: Sections of Solids

### Topic: Development of Surfaces

Welcome, everyone! In our previous sessions, we've explored how to represent solids in orthographic views and how to understand their shapes when cut by various planes. Today, we're moving into a fascinating area: **Development of Surfaces**. This is where we take a 3D object, "unfold" it like a cardboard box, and lay it flat on a 2D plane. Why do we do this? Think about sheet metal work, packaging, or even tailoring – we need to know the actual shape and size of the material required to make these objects. That's precisely what development of surfaces helps us with.

This topic directly connects to **Course Outcome 3 (CO3): Plot sectional views and develop surfaces of a given object**. Understanding how to develop surfaces is crucial for visualizing and creating real-world objects from flat materials. It's an application of our knowledge of projections and sectional views, allowing us to translate those 2D representations into a practical form.

This module specifically focuses on prisms, pyramids, cones, and cylinders with their axes in a vertical position, and how their developments change when they are cut by different section planes. So, let's dive in!

---

### 1. Introduction to Development of Surfaces

Imagine you have a cardboard box, a hexagonal prism for instance. If you were to cut along some edges and unfold it, you'd get a flat pattern. This flat pattern is the "development" of the prism's lateral surface. Similarly, for a pyramid or a cone, we unfold the slanted surfaces.

**Definition:** The development of a solid is the process of unfolding its surfaces onto a plane, such that the resulting 2D shape represents the true surface area of the original solid. This 2D shape is often called the "true shape" or "pattern" of the surface.

**Key Principles:**

*   **True Lengths:** The development must preserve the true lengths of all lines on the surface. This is where our understanding of projections, especially true lengths of lines in various orientations, comes into play.
*   **Connectivity:** The unfolded surfaces must be connected in the correct sequence, mimicking how they were joined in the 3D object.
*   **No Overlapping or Gaps:** The flat pattern should ideally have no overlapping areas and no gaps; it should perfectly represent the material needed.

This concept is vital for practical engineering applications like sheet metal fabrication, designing packaging (think of cereal boxes or pizza boxes), and even in fields like architecture and textile design.

---

### 2. Development of Uncut Solids

Before we tackle solids cut by section planes, let's refresh how we develop the surfaces of simple, uncut prisms, pyramids, cones, and cylinders.

#### 2.1. Development of Prisms

Prisms have rectangular lateral faces and two identical polygonal bases.

*   **Understanding the Shape:** A prism with an n-sided base will have n rectangular lateral faces.
*   **Development Process:**
    1.  Identify the shape of the base (e.g., square, pentagon, hexagon).
    2.  In the orthographic views (Front View and Top View), you can see the dimensions. The Top View shows the true shape of the base, and the Front View typically shows the height and the widths of the base edges (which are true lengths if viewed from the front and the prism is not tilted).
    3.  To develop the lateral surface, imagine "unrolling" the rectangular faces. If we lay them side-by-side, the total width of the development will be the perimeter of the base, and the height will be the height of the prism.
    4.  **How to draw it:** Start with the true length of one base edge in the Top View. Project this length upwards to represent the width of a rectangular face. Then, project the height of the prism. Continue this process for all the base edges, placing the rectangles adjacent to each other. The sum of their widths will equal the perimeter of the base. Finally, add the two base shapes at the appropriate positions.

*   **Example:** Consider a **Pentagonal Prism**. Its development will consist of five adjacent rectangles, each with a width equal to the side length of the pentagon and a height equal to the prism's height. You'll also need to attach the pentagonal bases at the top and bottom of this rectangular strip.

#### 2.2. Development of Pyramids

Pyramids have triangular lateral faces meeting at an apex and a polygonal base.

*   **Understanding the Shape:** The lateral faces are triangles. The base is a polygon.
*   **Development Process:**
    1.  The key challenge here is that the lateral edges of the pyramid are not necessarily true lengths in the orthographic views.
    2.  **Using True Lengths:** We need to find the true length of the slant edges. This is typically done by rotating the pyramid in the Top View or Front View until the slant edge is parallel to the reference line (or by using auxiliary views). Alternatively, you can use the Pythagorean theorem if you can get the true horizontal distance and the height.
    3.  **How to draw it:**
        *   Start with the apex as the center of an arc.
        *   Take the true length of a slant edge as the radius of this arc.
        *   On this arc, mark off segments equal to the true lengths of the base edges (obtained from the Top View). These marks will define the positions of the vertices of the base on the development.
        *   Connect these points on the arc to form the base.
        *   The area enclosed by these lines and the arc is the development of the lateral surface. Add the base polygon.

*   **Example:** For a **Square Pyramid**, you'd draw an arc with the apex as the center and the true slant edge length as the radius. On this arc, mark four segments, each equal to the side length of the square base. Connect these points to form the base of the development.

#### 2.3. Development of Cylinders

A cylinder has a circular base and a curved lateral surface.

*   **Understanding the Shape:** The lateral surface, when unrolled, becomes a rectangle.
*   **Development Process:**
    1.  The height of the cylinder is one dimension of the rectangle.
    2.  The other dimension of the rectangle is the circumference of the circular base ($C = \pi D$ or $C = 2\pi R$).
    3.  **How to draw it:**
        *   Draw a rectangle. One side will be the height of the cylinder.
        *   The other side will be the circumference of the base. To represent this accurately on the flat development, we usually divide the circumference into equal segments (e.g., 12 parts if it's a circle).
        *   Draw lines parallel to the height, spaced according to these divisions of the circumference. These lines represent generators (lines on the surface parallel to the axis) on the cylinder.
        *   Finally, add the circular bases at the top and bottom.

*   **Example:** A **Cylinder of diameter 50mm and height 80mm**. The development of its lateral surface will be a rectangle of 80mm height and a width equal to the circumference of a 50mm diameter circle ($C = \pi \times 50 \approx 157$ mm). We would divide this width into, say, 12 equal segments to mark the positions of the generators.

#### 2.4. Development of Cones

A cone has a circular base and a curved lateral surface tapering to an apex.

*   **Understanding the Shape:** The lateral surface, when unrolled, forms a sector of a circle.
*   **Development Process:**
    1.  Similar to a pyramid, we need the true length of the slant generator ($L$) of the cone. This can be found using the radius of the base ($R$) and the height ($H$) with the Pythagorean theorem: $L = \sqrt{R^2 + H^2}$.
    2.  The slant generator becomes the radius of the sector.
    3.  The arc length of the sector corresponds to the circumference of the cone's base ($C = 2\pi R$).
    4.  **How to draw it:**
        *   Draw a sector of a circle with radius $L$ (the true slant generator length).
        *   The arc length of this sector should be equal to the circumference of the cone's base.
        *   To find the angle of the sector ($\theta$), we can use the relationship: Arc Length = Radius × Angle (in radians). So, $2\pi R = L \times \theta$. Therefore, $\theta = \frac{2\pi R}{L}$ radians, or $\theta = \frac{2\pi R}{L} \times \frac{180}{\pi} = \frac{360R}{L}$ degrees.
        *   Alternatively, you can mark off segments on the arc equal to the base arc length divided into equal parts.
        *   Finally, add the circular base.

*   **Example:** A **Cone of base radius 30mm and height 60mm**.
    *   First, calculate the slant generator length: $L = \sqrt{30^2 + 60^2} = \sqrt{900 + 3600} = \sqrt{4500} \approx 67.08$ mm.
    *   Then, calculate the angle of the sector: $\theta = \frac{360 \times 30}{67.08} \approx 161.0$ degrees.
    *   Draw a sector of a circle with radius 67.08mm and a central angle of 161.0 degrees.

---

### 3. Development of Solids Cut by Section Planes

Now, this is where it gets really interesting and practical! When a solid is cut by a section plane, the development of the *remaining* portion of the solid (or the shape of the cut surface itself) becomes more complex but follows the same fundamental principles.

The section plane cuts the solid, creating a new outline or a line on the surface. When we develop the surface, this cut line will appear in its true length and shape relative to the developed surface.

**General Approach for Development of Solids Cut by Section Planes:**

1.  **Identify the Intersection Points:** In the orthographic views (typically Front View and Top View), carefully locate where the section plane intersects the edges, generators, or slant edges of the solid. Let's call these points P, Q, R, etc.
2.  **Find True Lengths of Intersection Points:** The crucial step is to find the true length of these intersection points from the object's edges to the apex (for pyramids/cones) or along the generators (for prisms/cylinders). This is done using methods we've already learned:
    *   **For Pyramids/Prisms:** The intersection points lie on the slant edges or the vertical edges. We need to find the true lengths of these edges or use a rotating line method to find the true distance of the intersection point along that edge from the base.
    *   **For Cones/Cylinders:** The intersection points lie on the generators. We need to find the true length of the generator at that point. This is often found by drawing an auxiliary view or rotating the point in the Top View until it lies on a slant edge whose true length is known.
3.  **Transfer True Lengths to the Development:**
    *   **For Pyramids/Cones:**
        *   Draw the development of the lateral surface as described earlier (using arc and slant edge length for cones, or sector for cones).
        *   On the development, measure the true distances of the intersection points along the corresponding slant edges (or generators in the case of a cone). Mark these points (P', Q', R', etc.) on the developed surface.
        *   Connect these points P', Q', R' in order. This curve or line represents the intersection of the section plane with the lateral surface, in its true shape and position relative to the unfolded surface.
    *   **For Prisms/Cylinders:**
        *   Draw the development of the lateral surface (rectangles for prisms, rectangle for cylinders).
        *   On the development, transfer the distances of the intersection points from the base along the respective edges or generators. For a prism, it's along the vertical edges. For a cylinder, it's along the lines representing generators.
        *   Connect these points to form the pattern of the cut surface.

---

#### 3.1. Development of Cut Prisms

*   **Scenario:** Imagine a hexagonal prism cut by a plane that is, say, inclined and passes through some of its vertical edges.
*   **Process:**
    1.  Develop the lateral surface of the prism as five adjacent rectangles, each having a width equal to the side length of the hexagon and a height equal to the prism's height.
    2.  The section plane will intersect the vertical edges of the prism. Locate these intersection points in the Front View and Top View.
    3.  In the Top View, these intersection points lie on the base edges. Project these points onto the respective base edges.
    4.  In the development (the strip of rectangles), mark the heights of these intersection points along the corresponding vertical edges of the rectangles.
    5.  Connect these marked points in sequence to show the developed profile of the cut surface. You would also attach the development of the bases, ensuring the cut line is correctly positioned on them.

#### 3.2. Development of Cut Pyramids

*   **Scenario:** Consider a square pyramid cut by a plane that is horizontal, or inclined, or parallel to one of its base sides.
*   **Process:**
    1.  Draw the development of the lateral surface of the pyramid (as a sector-like shape with base edges marked along the arc). This involves finding the true length of the slant edge.
    2.  The section plane intersects the slant edges of the pyramid at different heights. Locate these intersection points on the slant edges in the Front View or Top View.
    3.  On the development, measure the true distance of each intersection point from the apex along the respective slant edges. Mark these points on the development.
    4.  Connect these marked points to show the development of the cut surface. You will also need to develop the base.

*   **Relatable Example:** Think of a party hat (a cone) or a small pyramid-shaped paperweight. If you cut it with scissors, the cut edge, when you unfold the hat or paperweight, will be a curve or a series of straight lines on the flat paper.

#### 3.3. Development of Cut Cylinders

*   **Scenario:** A cylinder cut by a plane, perhaps a simple horizontal cut, or an inclined cut passing through the top and bottom bases at different points.
*   **Process:**
    1.  Develop the lateral surface of the cylinder as a rectangle. Divide the bottom edge of the rectangle into equal segments representing divisions of the base circumference, and draw vertical lines (generators) upwards.
    2.  The section plane intersects the cylinder. The intersection points are usually found on the generators.
    3.  Locate the intersection points on the generators in the orthographic views. For example, if the plane is inclined, it might cut one side of the cylinder at the base and the opposite side at the top.
    4.  Transfer the heights of these intersection points from the Front View onto the corresponding vertical lines (generators) in the developed rectangle.
    5.  Connect these points with a smooth curve or straight lines, as appropriate, to represent the developed cut surface. You will also need to develop the top and bottom bases.

*   **Analogy:** Imagine a tin can. If you slice it at an angle, the cut edge on the can's label, when you peel and flatten it, will be an ellipse or a more complex curve depending on the cut.

#### 3.4. Development of Cut Cones

*   **Scenario:** A cone cut by a plane, perhaps a horizontal plane (resulting in a frustum), or an inclined plane.
*   **Process:**
    1.  Draw the development of the lateral surface of the cone as a sector of a circle with radius equal to the slant generator length ($L$). The arc length of the sector equals the base circumference.
    2.  The section plane intersects the slant generators of the cone. Find these intersection points in the orthographic views.
    3.  On the development, transfer the distances of these intersection points from the apex along the corresponding slant generators (which are radial lines from the center of the sector).
    4.  Connect these marked points on the development. For a single inclined plane cut, this will result in a curve. For a horizontal cut, it will be a circular arc.
    5.  Add the base circle to complete the development.

*   **Key Point for Cones:** When a cone is cut by an inclined plane, the developed curve of intersection on the lateral surface is a sinusoidal-like curve. It's crucial to accurately transfer the heights of the intersection points onto the radial lines of the sector development.

---

### 4. Practical Considerations and Exam Tips

*   **Accuracy is Key:** Development of surfaces requires precision in drawing. Use a sharp pencil and a good ruler. Pay close attention to transferring true lengths and angles.
*   **Choosing the Starting Line:** For prisms, the choice of starting edge can affect the layout, but the overall shape remains the same. For pyramids and cones, starting with a slant edge that is in true length (if possible) can simplify the process.
*   **Re-entrant Curves:** Be mindful when developing surfaces cut by planes that create re-entrant curves (curves that "bend back" on themselves) in the development. This often happens with complex section planes.
*   **Showing the Cut Surface:** Often, exams will ask for the development of the *entire* solid, including the developed bases and the developed cut surface. Ensure you complete all parts.
*   **Common Pitfalls:**
    *   Not finding the true length of slant edges for pyramids and cones.
    *   Incorrectly transferring distances on the developed surfaces.
    *   Forgetting to add the base(s) to the development.
    *   Making errors in calculating the sector angle for cones.

**Remember this:** The development of a surface is essentially creating a "net" of the 3D object. All lengths and angles on the surface must be preserved in their true form when laid flat. This is a direct application of projection principles to create practical patterns. This topic is a strong test of your ability to visualize in 3D and apply 2D projection techniques accurately. It's often asked in exams to assess your understanding of practical drafting applications.

---

### 5. Sample Questions and Answers

**Question 1 (Conceptual):** Why is it important to find the true length of slant edges or generators when developing the surfaces of pyramids and cones?

**Answer:** When developing the surfaces of pyramids and cones, the lateral faces are triangular or form sectors of circles. The "sloping" nature of these surfaces means that edges or generators are often foreshortened in the standard orthographic views (Front and Top Views). To create a flat pattern that accurately represents the material needed, we must use the *true* lengths of these slant edges or generators. These true lengths are used as radii or fixed lengths for constructing the development on a 2D plane, ensuring the final shape can be accurately formed. Without true lengths, the developed pattern would be distorted, leading to incorrect material estimations or manufacturing defects. This aligns with the fundamental principle of development: preserving true surface geometry.

**Question 2 (Exam-Oriented):** A square prism of side of base 30mm and height 60mm rests on its base. It is cut by a plane inclined at 45 degrees to the horizontal plane and passing through the center of the top face. Develop the surface of the remaining solid.

**Solution Approach:**

1.  **Develop the Uncut Prism:** The lateral surface is a rectangle with width = perimeter of the square base = $4 \times 30$ mm = 120 mm, and height = 60 mm. Draw this rectangle.
2.  **Locate the Cut:**
    *   **Top View:** The top face is a square. The center of the top face is the midpoint of the diagonals.
    *   **Front View:** The prism is a rectangle of 30mm (width) x 60mm (height). The top face is a line at 60mm height. The center of the top face will be at the midpoint of this line.
    *   **Section Plane:** The plane is inclined at 45 degrees and passes through the center of the top face.
3.  **Find Intersection Points:**
    *   The plane intersects the vertical edges of the prism. In the Front View, the plane cuts the vertical edges at varying heights. Since it passes through the center of the top face (at 60mm height) and is inclined at 45 degrees, it will cut the vertical edges.
    *   Let's assume the Front View shows the width of the prism (30mm). The center of the top face is at height 60mm. If the plane is inclined at 45 degrees, it cuts one side at the top (height 60mm) and slopes down. To find where it cuts the other vertical edges, we can project from the Top View or use auxiliary projection. A simpler way is to recognize that the plane creates a line in the Front View. Let's say the plane cuts one vertical edge at height $h_1$ and another vertical edge at height $h_2$. The horizontal distance between these edges in the Front View is 30mm. If the plane's angle is 45 degrees, the difference in height ($h_1 - h_2$) would be related to this horizontal distance. *Correction for clarity:* A plane passing through the center of the top face and inclined at 45 degrees would typically cut the vertical edges at different heights. For a square prism, it would cut two opposite vertical edges. Let's say the center of the top face is at (0, 60) in the Front View coordinate system. If it cuts the top edge (at 60mm) and slopes down at 45 degrees, it will intersect the vertical edge on the opposite side at a height of $60 - (30 \times \tan 45^\circ) = 60 - 30 = 30$ mm. So, the plane cuts two vertical edges at 60mm and 30mm height respectively.
4.  **Transfer to Development:**
    *   The developed rectangle has a height of 60mm. Its width (120mm) represents the perimeter.
    *   The vertical edges of the prism correspond to the vertical sides of the rectangle and the lines dividing the width into segments of 30mm (each representing a side of the base).
    *   Mark the heights 60mm and 30mm on the corresponding vertical edges in the developed rectangle.
    *   Connect these points with a straight line (as the section plane is a straight line in the development of a prism). This line represents the cut.
5.  **Show Remaining Solid:** The development of the *remaining* solid will include the developed bases and the developed lateral surface *above* the cut line.

**Question 3 (Conceptual):** What is a "development" in the context of Engineering Graphics?

**Answer:** A development, in Engineering Graphics, is the process of unfolding the surfaces of a 3D solid object onto a 2D plane to create a flat pattern. This pattern accurately represents the true shape and size of the object's surfaces, as if they were made from a flexible material that could be flattened without stretching or tearing. It's essentially the "net" of the solid. This technique is fundamental for applications like sheet metal fabrication, packaging design, and pattern making, where materials need to be cut from flat sheets to form 3D shapes. It directly supports CO3 by enabling the plotting of surfaces of given objects.

**Question 4 (Exam-Oriented):** A cone with a base diameter of 60mm and a height of 80mm is cut by a horizontal plane at a distance of 30mm from the base. Develop the surface of the frustum.

**Solution Approach:**

1.  **Find Slant Lengths:**
    *   Total slant height ($L$) of the original cone: $R = 30$ mm, $H = 80$ mm. $L = \sqrt{R^2 + H^2} = \sqrt{30^2 + 80^2} = \sqrt{900 + 6400} = \sqrt{7300} \approx 85.44$ mm.
    *   The cut is at 30mm from the base, meaning the height of the frustum is 30mm. The height of the smaller cone removed is $80 - 30 = 50$ mm.
    *   Slant height of the smaller cone removed ($l$): Radius of the smaller cone ($r$) can be found using similar triangles: $\frac{r}{R} = \frac{h_{small}}{H} \implies \frac{r}{30} = \frac{50}{80} \implies r = 30 \times \frac{50}{80} = 18.75$ mm.
    *   Now find the slant height of the smaller cone: $l = \sqrt{r^2 + h_{small}^2} = \sqrt{18.75^2 + 50^2} = \sqrt{351.56 + 2500} = \sqrt{2851.56} \approx 53.40$ mm.
    *   The slant height of the frustum is $L_{frustum} = L - l = 85.44 - 53.40 = 32.04$ mm. (Alternatively, $L_{frustum} = \sqrt{(R-r)^2 + (H-h_{small})^2} = \sqrt{(30-18.75)^2 + 30^2} = \sqrt{11.25^2 + 30^2} = \sqrt{126.56 + 900} = \sqrt{1026.56} \approx 32.04$ mm).
2.  **Develop the Lateral Surface of the Frustum:**
    *   This is a part of a sector of a circle.
    *   We need the angle of the sector for the *original* cone. Angle $\theta = \frac{360R}{L} = \frac{360 \times 30}{85.44} \approx 126.4^\circ$.
    *   Draw a sector of a circle with radius $L = 85.44$ mm and angle $126.4^\circ$. This is the development of the original cone's lateral surface.
    *   On this sector, mark the arc for the smaller cone using its slant height $l = 53.40$ mm from the apex (center of the sector). The radial lines connecting the inner and outer arcs represent the slant height of the frustum.
    *   The area between these two arcs is the development of the lateral surface of the frustum.
3.  **Develop the Bases:** Add the bottom base circle (radius $R=30$ mm) and the top base circle (radius $r=18.75$ mm) to the ends of the frustum's development. The bottom base will be attached to the arc of the large sector, and the top base will be attached to the arc of the smaller sector.

---
This concludes our exploration of the development of surfaces. Remember to practice these procedures with different solids and section planes. The key is understanding how to find true lengths and transfer them accurately onto the flat pattern. Happy drafting!

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
