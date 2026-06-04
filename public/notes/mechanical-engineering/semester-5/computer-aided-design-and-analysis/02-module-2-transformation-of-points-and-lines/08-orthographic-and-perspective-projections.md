---
title: "orthographic and perspective projections"
subject: "COMPUTER AIDED DESIGN AND ANALYSIS"
module: "Module 2: Transformation of points and lines"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf48044634f6"
status: "completed"
scrapedAt: "2026-05-20T17:58:45.538Z"
---
# COMPUTER AIDED DESIGN AND ANALYSIS - Study Notes

## Module 2: Transformation of Points and Lines

### Topic: Orthographic and Perspective Projections

---

### 1. Introduction to Projections in CAD

**Definition:** A projection is a method of representing a 3D object on a 2D surface (like a screen or paper). In CAD, projections are crucial for visualizing and manipulating geometric models. They allow us to "see" the 3D world on our 2D displays.

**Importance:**
*   Enables designers to communicate their ideas effectively.
*   Essential for manufacturing processes that require 2D drawings from 3D models.
*   Forms the basis for viewing and interacting with 3D models in CAD software.

**Relationship to Course Outcomes:**
*   **CO2:** Understanding projections is foundational for applying 2D transformations in CAD software. While this topic primarily deals with 3D to 2D conversion, the underlying principles of coordinate transformations are directly related.
*   **CO3:** Projections are the visual interface for 3D graphics and solid modeling, allowing us to interpret the complex geometric forms created.

**Key Concepts:**
*   **Projection Plane (Picture Plane):** The 2D surface onto which the 3D object is projected.
*   **Center of Projection (Viewpoint/Eye):** The point from which the object is viewed.
*   **Projectors (Visual Rays):** Lines extending from the center of projection through points on the object to the projection plane.

---

### 2. Orthographic Projections

**Definition:** Orthographic projections are created by parallel projectors that are perpendicular to the projection plane. This means that the projectors are parallel to each other, and they strike the projection plane at a 90-degree angle.

**Characteristics:**
*   **Parallel Projectors:** Projectors are parallel.
*   **No Foreshortening:** The size of an object is not distorted due to distance from the viewer. All parallel lines in the object remain parallel in the projection.
*   **Preserves True Lengths and Angles:** Lines and angles parallel to the projection plane are shown in their true size and shape.
*   **Multiple Views:** Typically, multiple orthographic views are used to represent an object completely (e.g., front view, top view, side view).

**Types of Orthographic Projections:**

#### 2.1. Multiview Orthographic Projections

**Description:** This is the most common type of orthographic projection used in engineering drawings. It involves projecting the object onto a series of planes that are mutually perpendicular to each other. Each view shows the object from a specific direction.

**Key Views:**
*   **Front View (Elevation):** Shows the object as seen from the front.
*   **Top View (Plan):** Shows the object as seen from directly above.
*   **Side View (Profile):** Shows the object as seen from the side (usually left or right).

**Arrangement (First-Angle vs. Third-Angle Projection):**
*   **First-Angle Projection:** The object is placed in the first quadrant, and the projection planes are between the object and the observer.
    *   Top view is above the front view.
    *   Right side view is to the left of the front view.
    *   Used primarily in Europe and Asia.
*   **Third-Angle Projection:** The object is placed in the third quadrant, and the observer is between the object and the projection planes.
    *   Top view is below the front view.
    *   Right side view is to the right of the front view.
    *   Used primarily in North America.

**Example (from Groover & Zimmers, Chapter on Graphics):**
Imagine a simple cube.
*   **Front View:** A square.
*   **Top View:** A square.
*   **Side View:** A square.

If the cube has a hole through it from front to back:
*   **Front View:** A square with dashed lines indicating the hole.
*   **Top View:** A square with dashed lines indicating the hole.
*   **Side View:** A square with dashed lines indicating the hole.

**Important Point:** Orthographic projections are excellent for showing precise dimensions and geometric relationships, making them ideal for manufacturing blueprints.

#### 2.2. Axonometric Projections

**Description:** Axonometric projections are a type of orthographic projection where the object is rotated with respect to the projection plane so that three faces are visible. The projectors are still parallel and perpendicular to the projection plane, but the object is viewed at an angle.

**Types of Axonometric Projections (based on the angles between the principal axes of the object and the projection plane):**

*   **Isometric Projection:**
    *   All three axes (X, Y, Z) are equally foreshortened, and the angles between any two projected axes are 120 degrees.
    *   The foreshortening factor for each axis is the same (approximately 0.816).
    *   Often, a convention is used where the projected axes are scaled down by a factor of 0.816 to restore true length.
    *   **Example:** A cube will appear as a rhombus with the top face seen.

*   **Dimetric Projection:**
    *   Two of the three axes are equally foreshortened, and the angles between the projected axes are not equal.
    *   **Example:** A cylinder might appear with its circular base foreshortened, and the height axis showing true length.

*   **Trimetric Projection:**
    *   All three axes are foreshortened differently, and the angles between the projected axes are all different.
    *   Offers the most flexibility in viewing the object from a unique angle.

**Important Point:** Axonometric projections provide a single 3D-like view that is useful for visualization, but they do not preserve true lengths or angles unless specific scaling is applied (as in isometric).

**Reference:** Groover & Zimmers, Chapter on Graphics and Descriptive Geometry, discusses these projection types.

---

### 3. Perspective Projections

**Definition:** Perspective projections are created by projectors that converge at a single point, the center of projection (or viewpoint). This simulates how the human eye sees the world, where objects appear smaller as they recede into the distance.

**Characteristics:**
*   **Converging Projectors:** Projectors meet at a single point (viewpoint).
*   **Foreshortening:** Objects appear smaller when they are further away from the viewpoint.
*   **Parallel Lines:** Parallel lines in the object that are not parallel to the projection plane converge at vanishing points on the horizon line.
*   **More Realistic:** Provides a more natural and realistic representation of 3D scenes.

**Types of Perspective Projections (based on the number of vanishing points):**

#### 3.1. One-Point Perspective

**Description:** Used when one face of the object is parallel to the projection plane.
*   **One Vanishing Point:** All lines perpendicular to the projection plane converge at a single vanishing point on the horizon line.
*   **Lines parallel to the horizontal edges of the projection plane remain parallel.**

**Example (from Rogers & Adams, Chapter on Projections):**
Imagine viewing a long straight road. The edges of the road (which are parallel) appear to meet at a vanishing point in the distance.

#### 3.2. Two-Point Perspective

**Description:** Used when the object is positioned such that two principal axes are neither parallel nor perpendicular to the projection plane.
*   **Two Vanishing Points:** Lines parallel to one principal axis converge at one vanishing point, and lines parallel to another principal axis converge at a second vanishing point. Both vanishing points are on the horizon line.
*   **Vertical lines remain vertical.**

**Example:** Viewing a building from a corner. The lines receding to the left converge at one vanishing point, and the lines receding to the right converge at another.

#### 3.3. Three-Point Perspective

**Description:** Used when the object is positioned such that all three principal axes are neither parallel nor perpendicular to the projection plane (e.g., looking up at a tall building or down from a high vantage point).
*   **Three Vanishing Points:** Lines parallel to each of the three principal axes converge at three distinct vanishing points. Two vanishing points are typically on the horizon line, and the third is either above or below the horizon line.

**Example:** Looking up at the spire of a tall cathedral. The vertical lines appear to converge upwards.

**Important Point:** Perspective projections are crucial for realistic visualization in CAD, especially in architectural and product design where the user needs to understand the spatial relationships and aesthetic appeal of an object.

**Reference:** Zeid & Sivasubramanian, Chapter on 3D Graphics, discusses perspective projection transformations.

---

### 4. Transformations for Projections

**Underlying Principle:** Both orthographic and perspective projections can be achieved through matrix transformations in computer graphics.

#### 4.1. Orthographic Projection Transformation

**Concept:** In orthographic projection, the Z-coordinate is simply discarded or projected onto the XY plane.

**Matrix Representation (Simplified for projection onto XY plane):**
Consider a point P = (x, y, z). The orthographic projection onto the XY plane results in P' = (x, y, 0).

This can be represented by a transformation matrix:

```
[ x' ]   [ 1  0  0  0 ] [ x ]
[ y' ] = [ 0  1  0  0 ] [ y ]
[ z' ]   [ 0  0  0  0 ] [ z ]
[ 1  ]   [ 0  0  0  1 ] [ 1 ]
```

Or more simply, if we are only interested in the XY coordinates after projection:

```
[ x' ]   [ 1  0  0 ] [ x ]
[ y' ] = [ 0  1  0 ] [ y ]
[ 1  ]   [ 0  0  1 ] [ 1 ]   (z coordinate is ignored/dropped)
```

**General Orthographic Projection:**
More generally, orthographic projections can be defined by specifying a projection plane and the direction of projection (which is parallel to a given vector). This involves transforming the coordinate system so that the projection plane becomes the XY plane, then projecting (discarding the Z-coordinate).

#### 4.2. Perspective Projection Transformation

**Concept:** Perspective projection involves a division by a depth coordinate, which creates the foreshortening effect.

**Matrix Representation (Simplified for a specific perspective transformation):**
Consider a point P = (x, y, z). A common perspective projection involves dividing x and y by the z-coordinate (or a related value like z-dz where dz is the distance to the projection plane).

A typical perspective transformation matrix for projecting onto the z=d plane from the origin (0,0,0) would transform P(x, y, z) to P'(x', y', z') where:

*   x' = x * (d/z)
*   y' = y * (d/z)
*   z' = d

The transformation can be represented using homogeneous coordinates:

```
[ x' ]   [ d  0  0  0 ] [ x ]
[ y' ]   [ 0  d  0  0 ] [ y ]
[ z' ] = [ 0  0  d  0 ] [ z ]
[ w' ]   [ 0  0  1  0 ] [ 1 ]
```

After this multiplication, the projected coordinates (x_proj, y_proj) are obtained by dividing the first two components by the fourth component (w'):
*   x_proj = x' / w' = (x * d) / z
*   y_proj = y' / w' = (y * d) / z

This division by `w'` (which is related to `z`) is what causes the foreshortening.

**Important Note:** The actual perspective transformation in graphics pipelines is more complex, involving clipping planes, view volumes (frustums), and projection matrices that map these to normalized device coordinates.

**Reference:** Zeid & Sivasubramanian, Chapter on 3D Graphics, provides detailed matrix transformations for perspective projection. Rogers & Adams also covers these mathematical aspects.

---

### 5. Comparison: Orthographic vs. Perspective Projections

| Feature             | Orthographic Projection                                     | Perspective Projection                                   |
| :------------------ | :---------------------------------------------------------- | :------------------------------------------------------- |
| **Projectors**      | Parallel                                                    | Converge at a point (Center of Projection)               |
| **Foreshortening**  | No (parallel lines remain parallel)                         | Yes (objects appear smaller with distance)               |
| **Realism**         | Less realistic, technical                                   | More realistic, simulates human vision                   |
| **Dimension Preservation** | Preserves true lengths/angles for views parallel to projection plane. | Distorts lengths and angles based on distance.           |
| **Applications**    | Engineering drawings, blueprints, technical documentation, CAD modeling (e.g., top, front views). | Visualization, rendering, architectural walkthroughs, gaming. |
| **Vanishing Points** | None                                                        | One, two, or three depending on object orientation.        |

---

### 6. Learning Outcome Coverage

*   **LO1: Understand the principles of orthographic and perspective projections.**
    *   Covered in sections 2 and 3.
*   **LO2: Differentiate between orthographic and perspective projections.**
    *   Covered in section 5.
*   **LO3: Explain the types and characteristics of orthographic projections (multiview, axonometric).**
    *   Covered in section 2.
*   **LO4: Explain the types and characteristics of perspective projections (one-point, two-point, three-point).**
    *   Covered in section 3.
*   **LO5: Understand the application of projections in CAD.**
    *   Mentioned throughout the notes, particularly in importance and applications sections.

---

### 7. Key Points to Remember

*   **Orthographic:** Parallel projectors, no foreshortening, used for technical drawings.
*   **Perspective:** Converging projectors, foreshortening, realistic views, vanishing points.
*   **Multiview Orthographic:** Front, Top, Side views (First/Third Angle).
*   **Axonometric Orthographic:** Isometric, Dimetric, Trimetric (3D-like views).
*   **Perspective Types:** 1-point (one vanishing point), 2-point (two vanishing points), 3-point (three vanishing points).
*   **Transformations:** Both projection types can be mathematically represented using matrices, with perspective projection involving division by depth.

---

### 8. Practice Questions and Exercises

**Question 1:**
What is the fundamental difference between orthographic and perspective projections in terms of their projectors?
**(Knowledge Level: K2)**

**Answer:** Orthographic projections use parallel projectors, while perspective projections use projectors that converge at a single point (the center of projection or viewpoint).

---

**Question 2:**
An engineering blueprint of a machine part would most likely use which type of projection? Justify your answer.
**(Knowledge Level: K3 - Application)**

**Answer:** An engineering blueprint would most likely use **Multiview Orthographic Projections**. This is because orthographic projections preserve true lengths and angles for views parallel to the projection plane, which is essential for accurate dimensioning and manufacturing. Perspective projections introduce foreshortening and distortion, making them unsuitable for precise technical drawings.

---

**Question 3:**
Describe a scenario where a three-point perspective projection would be most appropriate for visualization in CAD.
**(Knowledge Level: K2)**

**Answer:** A three-point perspective projection would be most appropriate when visualizing a very tall object from either directly below (looking up) or directly above (looking down). For example, in architectural CAD, viewing a skyscraper from ground level looking upwards would require a three-point perspective to accurately show the convergence of vertical lines at a vanishing point above the horizon.

---

**Question 4:**
If you are modeling a simple cube and want to show it in a single view that looks somewhat 3D, which type of projection would you use, and why?
**(Knowledge Level: K3)**

**Answer:** You would use an **Axonometric Orthographic Projection**, specifically an **Isometric Projection**. This type of projection provides a single view of the object where all three axes are presented in a balanced way, giving a 3D appearance without the complex vanishing point convergence of perspective projections. It's commonly used for quick visualization of 3D models before detailed orthographic views are generated.

---

**Question 5 (Conceptual Matrix Transformation):**
A point $(4, 3, 6)$ is to be orthographically projected onto the XY plane. What are the resulting coordinates in 2D?
**(Knowledge Level: K3)**

**Answer:**
In orthographic projection onto the XY plane, the Z-coordinate is discarded.
Original point: $(4, 3, 6)$
Projected point: $(4, 3)$

---

**Question 6 (Conceptual Matrix Transformation):**
Consider a simplified perspective projection where points $(x, y, z)$ are projected to $(x \cdot (10/z), y \cdot (10/z))$. Project the point $(5, 8, 2)$ using this rule.
**(Knowledge Level: K3)**

**Answer:**
Using the projection rule:
$x' = x \cdot (10/z) = 5 \cdot (10/2) = 5 \cdot 5 = 25$
$y' = y \cdot (10/z) = 8 \cdot (10/2) = 8 \cdot 5 = 40$
The projected point is $(25, 40)$.

---

This comprehensive set of notes covers the key aspects of orthographic and perspective projections, their distinctions, types, and relevance within the context of Computer-Aided Design and Analysis, aligning with the provided learning and course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
