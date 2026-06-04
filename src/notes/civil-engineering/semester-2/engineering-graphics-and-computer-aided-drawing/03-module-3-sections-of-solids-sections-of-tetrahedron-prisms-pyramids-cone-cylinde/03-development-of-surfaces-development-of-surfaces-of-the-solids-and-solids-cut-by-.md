---
title: "Development of Surfaces: Development of surfaces of the solids and solids cut by different section planes. (Exclude problems with through holes)"
subject: "ENGINEERING GRAPHICS AND COMPUTER AIDED DRAWING"
module: "Module 3: Sections of Solids: Sections of tetrahedron, Prisms, Pyramids, Cone, Cylinder with axis in vertical position and cut by different section planes."
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912dcc"
status: "completed"
scrapedAt: "2026-05-20T18:35:00.715Z"
---
# Engineering Graphics and Computer Aided Drawing

## Module 3: Sections of Solids and Development of Surfaces

### Topic: Development of Surfaces

Welcome, everyone! Today, we're going to delve into a fascinating aspect of Engineering Graphics: **Development of Surfaces**. This topic is crucial because it allows us to understand how a 3D object can be unfolded into a 2D plane, much like flattening out a cardboard box or a paper cone. This understanding is vital for manufacturing, packaging, and even designing intricate shapes.

Remember, our goal in this module, specifically as stated in **Course Outcome 3 (CO3)**, is to "Plot sectional views and develop surfaces of a given object." This means we'll be learning how to draw these "unfolded" views accurately.

#### What is Development of Surfaces?

Simply put, the **development of a surface** is the process of unfolding the surfaces of a solid, usually a prism, pyramid, cone, or cylinder, onto a single plane, without stretching or tearing any part of the surface. Think of it as creating a "net" for the solid. This net can then be used to cut out the shape from a flat material (like sheet metal or paper) and fold it up to form the original 3D object.

Imagine you have a soup can (a cylinder). If you were to peel off the label, that label is the development of the cylindrical surface. Or think about a cardboard box – when you cut it along certain edges and lay it flat, you get its development.

This concept is fundamental when you're working with sheet metal fabrication, where you need to cut patterns from flat sheets that will be bent into 3D shapes. Or consider packaging design – you need to figure out the flat pattern for a box or a bottle label.

#### Why is it Important?

*   **Manufacturing:** Essential for cutting patterns for sheet metal work, fabric, etc.
*   **Design:** Helps visualize how a 3D object can be constructed from flat materials.
*   **Understanding 3D Shapes:** Provides a different perspective on the geometry of solids.

#### Key Principles of Development

Before we start developing specific solids, let's touch upon some core principles that guide us:

1.  **True Length of Lines:** When developing surfaces, it’s critical to represent the true lengths of all lines that form the edges or elements of the solid. This is why we often use the true length lines from the orthographic projections (like the front view and top view).
2.  **No Distortion:** The development should be a true representation of the surface. No stretching or compressing is allowed. This means the distances and angles on the development must accurately reflect the actual distances and angles on the surface of the solid.
3.  **Continuity:** The development should be a single, continuous piece if possible, unless the solid is naturally constructed from separate pieces.

This connects directly to **CO3** – we are applying our understanding of projections (from earlier modules) to accurately plot these developments. We need to extract true lengths and angles from our projected views.

### Development of Surfaces of Basic Solids

Let's start with the simpler solids and then move to those cut by section planes.

#### 1. Development of Prisms

A prism has two identical bases and rectangular sides connecting them. The lateral surfaces are rectangles.

*   **How to Develop:**
    *   Imagine the prism standing on its base. The lateral surfaces form a continuous rectangle when unfolded.
    *   The length of this rectangle will be the perimeter of the base.
    *   The height of the rectangle will be the height of the prism (the length of the lateral edges).
    *   The development of the prism will consist of this unfolded rectangle and the two base shapes attached to it.

    *   **Example:** Consider a **square prism**. If the base is a square of side 30mm and the height is 50mm, the development of the lateral surface is a rectangle of 4 x 30mm (perimeter) by 50mm (height). We would then attach two square bases at opposite ends of this rectangle.

    *   **Textbook Connection:** Authors like Varghese and Benjamin often show how to construct these developments by first drawing the front view and top view, identifying the true heights and lateral edge lengths, and then transferring these onto a single plane.

#### 2. Development of Pyramids

A pyramid has one base and triangular faces that meet at an apex.

*   **How to Develop:**
    *   The lateral faces of a pyramid are triangles. When unfolded, these triangles will form a sector of a circle (or a series of triangles arranged around a point).
    *   The apex of the pyramid remains a single point in the development.
    *   The slant edge lengths are crucial here. We use the true length of the slant edge to draw arcs from the apex.
    *   The base edges are then marked along these arcs to define the individual triangular faces.

    *   **Example:** Think of a **square pyramid**. We need the true length of the slant edge. This is usually found in the front view (if the pyramid is tilted such that a slant edge is in the true length in the front view) or by using the true length of the line from the apex to the center of the base and half the diagonal of the base in the top view. Once we have the true slant edge length, we swing arcs from the apex. We then mark the true length of the base edge along these arcs, repeating it four times for a square base. Connecting these points to the apex gives the development.

    *   **Important Note:** For pyramids, the slant edge length is the **generatrix** (or generator) length. This is what we use to swing the arcs.

#### 3. Development of Cylinders

A cylinder has two parallel circular bases and a curved lateral surface.

*   **How to Develop:**
    *   The lateral surface of a cylinder develops into a rectangle.
    *   The height of the rectangle is the height of the cylinder.
    *   The length of the rectangle is equal to the circumference of the circular base (πD or 2πr).
    *   To mark points on this rectangle, we usually divide the base circle in the top view into a number of equal parts (e.g., 8 or 12). The projections of these points onto the front view (which shows the true height) are then transferred to the development.

    *   **Example:** A cylinder with a diameter of 40mm and a height of 60mm. The circumference is π * 40mm = 125.66mm. So, the development of the lateral surface is a rectangle 125.66mm long and 60mm high. If we divide the base into 8 equal parts, we'd mark 8 points along the circumference and transfer their heights from the front view onto the development rectangle.

#### 4. Development of Cones

A cone has a circular base and a curved surface that tapers to an apex.

*   **How to Develop:**
    *   The lateral surface of a cone develops into a sector of a circle.
    *   The radius of this sector is the **slant height** (generatrix) of the cone.
    *   The arc length of the sector is equal to the circumference of the cone's base.
    *   Similar to the cylinder, we divide the base circle in the top view into equal parts. Project these points onto the front view to get their heights. Transfer these lengths along the slant edge lines (which are also swung as arcs).

    *   **Example:** A cone with base diameter 50mm and height 60mm. First, we need to find the slant height (L). Using Pythagoras theorem: L = sqrt(r² + h²) = sqrt((25mm)² + (60mm)²) = sqrt(625 + 3600) = sqrt(4225) = 65mm.
    *   The arc length of the sector is the circumference of the base: π * 50mm = 157.08mm.
    *   We draw an arc of radius 65mm. The angle (θ) subtended by the arc at the center can be calculated using the formula: θ/360° = Circumference / (2πR), where R is the slant height. So, θ/360° = (π * 50) / (2 * π * 65) => θ = (50/130) * 360° ≈ 138.46°.
    *   Alternatively, and often simpler, divide the base circle into, say, 12 equal parts. Measure the true length of the line connecting the apex to each division point on the base. Swing arcs of these lengths from the apex. Mark the base edge lengths along these arcs. Connect the points to form the sector.

    *   **Textbook Reference:** John K.C. and Anilkumar K.N. provide detailed step-by-step methods for calculating these angles or transferring distances for cone developments, which are essential for accurate plotting.

### Development of Surfaces of Solids Cut by Section Planes

This is where things get a bit more interesting and directly apply the concept of sections from the earlier part of this module. When a solid is cut by a section plane, its surface is divided into parts. The development now needs to account for these divisions.

The process involves:

1.  **Obtaining the True Shape of the Section:** First, you must determine the true shape of the section created by the plane. This is typically done by projecting the intersection points onto a true shape plane.
2.  **Developing the "Uncut" Surfaces:** Develop the surfaces of the solid as if there were no cut, as we learned above.
3.  **Transferring the Sectional Intersections:** The points where the section plane intersects the edges or generators of the solid need to be transferred to their corresponding positions on the developed surface. These points mark the boundaries of the cut.

Let's consider examples:

#### 1. Development of a Prism Cut by a Section Plane

*   **Scenario:** Imagine a **pentagonal prism** cut by a plane that is neither parallel nor perpendicular to the axis.
*   **Process:**
    *   Develop the lateral surface of the prism as a rectangle (perimeter of the pentagon x height).
    *   Identify the points where the section plane cuts the vertical edges of the prism in the front and top views.
    *   Transfer the true heights of these intersection points from the front view onto the corresponding vertical edges of the developed rectangle.
    *   Connect these transferred points to show the shape of the section on the development.

#### 2. Development of a Pyramid Cut by a Section Plane

*   **Scenario:** A **square pyramid** cut by a plane that cuts through its triangular faces.
*   **Process:**
    *   Develop the lateral surface of the pyramid by swinging arcs with the true slant edge length from the apex. Mark the base edges along these arcs.
    *   In the front and top views, identify the points where the section plane intersects the slant edges of the pyramid.
    *   Measure the true distance of these intersection points from the apex along the slant edges.
    *   Transfer these true distances from the apex to the corresponding slant edges in the developed surface.
    *   Connect these transferred points to show the true shape of the section on the development.

    *   **Common Pitfall:** Students often incorrectly transfer distances from the base or heights instead of the true lengths along the slant edges. Remember, the development is formed by swinging the slant edges from the apex.

#### 3. Development of a Cylinder Cut by a Section Plane

*   **Scenario:** A **cylinder** cut by an **inclined plane**.
*   **Process:**
    *   Develop the lateral surface of the cylinder into a rectangle. Divide the base circle in the top view into equal segments (say, 12). Project these onto the front view to get the true heights of points on the cylinder's circumference.
    *   In the front view, locate the points where the inclined section plane intersects the vertical lines representing the cylinder's height (or generators).
    *   Transfer these heights from the front view onto the corresponding vertical lines (which represent the generators after unfolding) on the development rectangle.
    *   Connecting these points will show the sectional shape on the development.

#### 4. Development of a Cone Cut by a Section Plane

*   **Scenario:** A **cone** cut by a plane that cuts through the base and the lateral surface.
*   **Process:**
    *   Develop the lateral surface of the cone into a sector of a circle using the true slant height.
    *   Identify the points where the section plane intersects the slant generators in the front and top views.
    *   Measure the true length of each intersecting generator from the apex.
    *   On the development, swing arcs of these measured lengths from the apex onto the corresponding unfolded generators.
    *   Connect these points to form the true shape of the section on the development. If the plane cuts the base, the intersection with the base will be a straight line or an arc on the development, depending on how the base is handled in the development.

#### Handling Special Cases: Planes Parallel to the Axis

When a plane is parallel to the axis of a prism or cylinder, its intersection with the lateral surface results in straight lines.

*   **Prisms:** The development of the lateral surface is a rectangle. The intersection points will be transferred as vertical lines on this rectangle.
*   **Cylinders:** The development is also a rectangle. The intersection points will be transferred as vertical lines on this rectangle, representing the straight line cut.

#### Why is this Different from Sectional Views?

Sectional views show the *inside* of the object after it's cut. Development shows what the *surface* would look like if laid flat, *including* the cut line. It's about representing the material's surface, not a cross-section.

Think of it this way: if you were making a lampshade (a frustum of a cone), the development would be the flat pattern you cut from the fabric. If the lampshade had a decorative cut-out pattern, the development would show where those cut-outs should be placed on the flat fabric.

#### Computer-Aided Drawing (CAD) and Development of Surfaces

In CAD, developing surfaces is often automated or made significantly easier. Software can directly unroll surfaces, especially for complex shapes or those generated by extruding or revolving paths. Commands like "Unroll Surface" or "Flatten" are common.

*   **Reference Book Mention:** Books like Kulkarni, Rastogi, and Sarkar's "Engineering Graphics with AutoCAD" are excellent resources to see how these manual development techniques translate into CAD commands. They show how to model a solid, then use specific tools to get the flat pattern. This is extremely useful for practical applications.

### Recap and Exam Focus

When tackling these problems in exams:

1.  **Read Carefully:** Understand which solid is involved and the orientation of the section plane.
2.  **Orthographic Views are Key:** Ensure your front and top views are correctly drawn. This is the foundation.
3.  **True Lengths:** Always use the true lengths of slant edges, generators, or heights as required for the specific development.
4.  **Transferring Points:** Be meticulous when transferring intersection points from the orthographic views to the development.
5.  **Labeling:** Clearly label all important points, lines, and views.
6.  **Developments of solids cut by planes** are commonly asked and require you to combine the skills of sections and developments.

Remember, the development of a surface is a true-size 2D representation of the outer or sectional surface of a 3D object. It’s like giving the object a paper-doll version of itself!

---

### Sample Questions and Answers

**Q1. What is the lateral surface development of a cylinder?**

**Answer:** The lateral surface development of a cylinder is a rectangle. The height of the rectangle is equal to the height of the cylinder, and the length of the rectangle is equal to the circumference of the cylinder's base. This is a fundamental concept for understanding how curved surfaces can be represented in 2D for manufacturing.

**Q2. How do you find the true length of the slant edge of a pyramid for its development?**

**Answer:** The true length of the slant edge of a pyramid is determined from its orthographic projections. If the slant edge is shown in true length in the front view, you can directly use that length. Otherwise, you might need to use the top view: swing an arc from the apex through the center of the base until it intersects the top view of the slant edge. The length of this line in the top view is not always the true length. Often, you'll need to construct a view or use the true length of the altitude and half the diagonal of the base in the top view to calculate the slant edge length using Pythagoras theorem. The true length is then used as the radius to swing arcs for the development.

**Q3. Explain the process of developing the lateral surface of a cone cut by a plane parallel to the base.**

**Answer:**
1.  **Develop the full cone:** Draw the front and top views of the cone. Find the slant height (L). Develop the lateral surface as a sector of a circle with radius L and arc length equal to the base circumference (πD).
2.  **Locate intersection points:** In the front view, identify the point where the plane parallel to the base cuts the cone's slant height.
3.  **Transfer to development:** Measure the true distance of this intersection point from the apex along the slant height in the front view.
4.  **Draw the section:** Swing an arc of this measured distance from the apex onto the development sector. This arc represents the intersection of the plane with the lateral surface. The portion of the cone between the base and this arc is the frustum. The development will show a frustum of a circle (a ring segment).

**Q4. Why is it important to show the true length of generators when developing a cone or cylinder cut by a plane?**

**Answer:** The development process relies on unfolding the surface accurately without distortion. Generators (lines from apex to base circumference on a cone, or lines on the cylinder surface parallel to the axis) represent the "edges" that define the curved surface. When a plane cuts these generators, the intersection points define the shape of the cut. To accurately place these intersection points on the flat development, we must transfer their true distances from the apex (for a cone) or their true heights (for a cylinder) along the unfolded generator lines. If these lengths are not true lengths, the development will be distorted, leading to an incorrect pattern for manufacturing. This directly relates to **CO3** by requiring accurate projection and plotting.

**Q5. A square prism is cut by a plane. How would its development differ from that of an uncut square prism?**

**Answer:**
*   **Uncut Square Prism Development:** The development of the lateral surface is a rectangle. The top and bottom bases are attached to this rectangle.
*   **Cut Square Prism Development:** The development of the lateral surface is still a rectangle, but now it will have points marked on its sides (or on the internal lines representing the prism's edges). These points represent where the cutting plane intersected the prism's vertical edges. When these points are connected by lines (parallel to the rectangle's sides, as the cutting plane is usually depicted as a straight line on the lateral surface development), it shows the sectional cut on the unfolded surface. The bases might also be shown with corresponding cut portions if the plane also intersects them.

**Q6. (Exam Scenario Type) A pentagonal prism with base side 30mm and axis length 70mm is resting on its base. It is cut by a section plane inclined at 45° to the horizontal, passing through a point on the axis at a distance of 40mm from the base. Draw the development of the lateral surface of the prism showing the section.**

**Solution Breakdown:**
1.  **Draw Orthographic Views:** Draw the front view (a rectangle 70mm high) and top view (a pentagon with 30mm sides).
2.  **Locate Section:** In the front view, mark a point on the axis 40mm from the base. From this point, draw a line at 45° to the horizontal. This line represents the section plane.
3.  **Find Intersection Points:** This inclined line will intersect the vertical edges of the prism in the front view. Mark these intersection points (say, P1, P2, P3, P4, P5 on the 5 vertical edges).
4.  **Develop Lateral Surface:** Unfold the lateral surface of the pentagonal prism into a rectangle. The width of this rectangle will be 5 * 30mm = 150mm (perimeter of the pentagon), and the height will be 70mm (axis length).
5.  **Transfer Points:** From the front view, transfer the heights of the intersection points (P1, P2, etc.) onto the corresponding vertical edges of the developed rectangle.
6.  **Draw Section on Development:** Connect these transferred points with straight lines. This will show the shape of the section on the developed lateral surface.

This type of question directly tests the ability to combine sectioning principles with surface development, fulfilling **CO3**.
