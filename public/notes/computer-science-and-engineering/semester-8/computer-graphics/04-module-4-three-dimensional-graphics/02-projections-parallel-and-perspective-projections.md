---
title: "Projections- Parallel and Perspective projections."
subject: "COMPUTER GRAPHICS"
module: "Module 4: Three dimensional graphics "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cd5a"
status: "completed"
scrapedAt: "2026-05-20T17:24:32.229Z"
---
# Computer Graphics: Module 4 - Three Dimensional Graphics

## Topic: Projections - Parallel and Perspective Projections

---

### 1. Introduction to Projections

**Learning Outcome:** Understand the fundamental concept of projecting 3D objects onto a 2D viewing plane.

*   **Definition:** A projection is a process of transforming a 3D object or scene into a 2D representation on a display surface (like a computer screen). This is essential for visualizing and interacting with 3D data.

*   **Key Idea:** Imagine shining a light source onto a 3D object and casting its shadow onto a flat wall. The shape and size of the shadow depend on the position of the light source and the object. Projections in computer graphics work similarly.

*   **Viewing Plane (Projection Plane/Image Plane):** The 2D surface onto which the 3D object is projected.

*   **Projection Lines (Projectors/Rays):** Imaginary lines connecting points on the 3D object to their corresponding points on the viewing plane. These lines are typically straight.

*   **Viewer/Eye Point:** The conceptual location from where the projection is observed.

---

### 2. Types of Projections

**Learning Outcome:** Differentiate between parallel and perspective projections and understand their underlying principles.

There are two primary categories of projections:

1.  **Parallel Projections:**
    *   **Principle:** Projection lines are parallel to each other.
    *   **Characteristics:** Objects retain their relative proportions and parallelism of lines. Parallel lines in 3D remain parallel in the 2D projection.
    *   **Advantages:** Good for conveying accurate measurements, dimensions, and structural details.
    *   **Disadvantages:** Lacks the sense of depth and realism. Objects appear smaller when farther away.

2.  **Perspective Projections:**
    *   **Principle:** Projection lines converge at a single point called the **center of projection (COP)** or **viewpoint**.
    *   **Characteristics:** Objects farther from the viewer appear smaller than objects closer to the viewer. Parallel lines in 3D may converge to a vanishing point in the 2D projection.
    *   **Advantages:** Creates a more realistic and natural-looking representation of 3D scenes, mimicking how the human eye perceives depth.
    *   **Disadvantages:** Can distort the actual dimensions and proportions of objects.

---

### 3. Parallel Projections in Detail

**Learning Outcome:** Explain the different types of parallel projections and their characteristics.

In parallel projections, the direction of projection is constant for all points. We can further classify parallel projections based on the angle of the projection lines relative to the viewing plane.

#### 3.1 Orthographic Projection

*   **Principle:** Projection lines are **perpendicular** to the viewing plane.
*   **Characteristics:**
    *   Projection lines are parallel and normal (perpendicular) to the projection plane.
    *   Preserves true size and shape of objects when viewed from the principal directions.
    *   Widely used in engineering, architecture, and technical drawings.
*   **Sub-types:**
    *   **Multiview Orthographic Projections:**
        *   **Front View:** Shows the object from the front.
        *   **Top View (Plan View):** Shows the object from above.
        *   **Side View (Elevation):** Shows the object from the side.
        *   These views are projected onto planes perpendicular to the main axes (X, Y, Z).
    *   **Axonometric Projection:** A type of orthographic projection where the object is rotated so that all three axes are visible.
        *   **Isometric Projection:** The angles between any two of the projected axes are equal (120 degrees). The foreshortening factor is the same along all three axes.
        *   **Dimetric Projection:** Two of the three axes have equal angles to the viewing plane, and the third has a different angle.
        *   **Trimetric Projection:** All three axes have different angles to the viewing plane.

*   **Example:** Imagine a blueprint of a house. The front elevation, top view, and side view are all orthographic projections. An isometric drawing of a cube shows all its faces and edges with consistent foreshortening.

#### 3.2 Oblique Projection

*   **Principle:** Projection lines are **parallel** to each other but **not perpendicular** to the viewing plane.
*   **Characteristics:**
    *   Projection lines make an angle other than 90 degrees with the projection plane.
    *   One face of the object is often projected parallel to the viewing plane, preserving its true shape.
    *   Other faces are projected at an angle, giving a sense of depth.
*   **Sub-types:**
    *   **Cavalier Projection:** The receding lines (lines projecting away from the front face) are drawn at their true length (an angle of 45 degrees is common). This can make objects appear thicker than they are.
    *   **Cabinet Projection:** The receding lines are drawn at half their true length. This provides a more realistic appearance by reducing the foreshortening effect.

*   **Example:** A simple sketch of a box where the front face is drawn as a rectangle, and then lines are drawn at an angle (e.g., 30 or 45 degrees) from the corners to represent depth. The lengths of these depth lines might be full (cavalier) or half (cabinet).

---

### 4. Perspective Projections in Detail

**Learning Outcome:** Explain the different types of perspective projections and their characteristics.

Perspective projections simulate human vision by making distant objects appear smaller. The key element is the **center of projection (COP)**.

#### 4.1 One-Point Perspective

*   **Principle:** One set of parallel lines in the 3D scene converges to a single **vanishing point** on the **horizon line**.
*   **Characteristics:**
    *   Typically used when the viewer is looking directly at a face or a wall.
    *   One axis of the object appears parallel to the viewing plane.
    *   The other two axes are foreshortened and converge to a single vanishing point.
*   **Components:**
    *   **Horizon Line:** Represents the eye level of the viewer.
    *   **Vanishing Point (VP):** The point on the horizon line where parallel lines appear to converge.
*   **Example:** Looking down a long, straight road directly ahead. The edges of the road, fences, or power lines on either side will appear to meet at a point in the distance.

#### 4.2 Two-Point Perspective

*   **Principle:** Two sets of parallel lines converge to two separate **vanishing points** on the **horizon line**.
*   **Characteristics:**
    *   Used when the viewer is looking at an object (like a building or a cube) at an angle, so neither the front nor a side face is directly parallel to the viewing plane.
    *   Two axes of the object are foreshortened and converge to distinct vanishing points.
    *   The third axis (usually vertical) remains parallel to the viewing plane and its lines are vertical in the projection.
*   **Example:** Looking at the corner of a building from a street. The lines of the building that recede to the left will converge to one vanishing point, and the lines receding to the right will converge to another vanishing point on the horizon.

#### 4.3 Three-Point Perspective

*   **Principle:** Three sets of parallel lines converge to three separate **vanishing points**. Two vanishing points are on the horizon line, and the third is either above or below the horizon line.
*   **Characteristics:**
    *   Used when the viewer is looking at an object from a very high or very low angle (e.g., looking up at a tall skyscraper or down from a high vantage point).
    *   All three axes of the object are foreshortened.
    *   Creates a strong sense of height or depth.
*   **Example:** Looking up at the very top of a very tall building from street level. The vertical lines of the building will appear to converge upwards towards a vanishing point above the horizon. Conversely, looking down from a very high place, vertical lines might converge downwards.

---

### 5. Projection Matrix

**Learning Outcome:** Understand the mathematical basis for performing projections using transformation matrices.

Projections, like other 3D transformations (translation, rotation, scaling), can be represented and performed using **homogeneous coordinate matrices**.

*   **Orthographic Projection Matrix:**
    *   The goal is to map points within a "view volume" (often a box) onto a canonical view volume (e.g., a cube from -1 to 1).
    *   This involves scaling and translation to fit the desired view.
    *   For a simple orthographic projection onto the XY plane, we essentially discard the Z coordinate.
    *   A simplified transformation might involve projecting $(x, y, z)$ to $(x, y)$. In matrix form, this could be:
        ```
        [ x' ]   [ 1  0  0  0 ] [ x ]
        [ y' ] = [ 0  1  0  0 ] [ y ]
        [ z' ]   [ 0  0  0  0 ] [ z ]
        [ w' ]   [ 0  0  0  1 ] [ 1 ]
        ```
        Note: In a typical pipeline, the Z value is used for depth buffering, so it's not completely discarded but is mapped to a depth range.

*   **Perspective Projection Matrix:**
    *   This is more complex as it involves scaling based on the distance from the viewer.
    *   The key idea is to map points from a **view frustum** (a truncated pyramid) to a **canonical view volume** (usually a cube).
    *   A central part of the perspective projection matrix involves dividing the X, Y, and Z coordinates by the W coordinate (which is related to the Z coordinate in homogeneous coordinates after some transformations). This division by W is what creates the perspective effect.
    *   A simplified conceptual view:
        *   Points closer to the COP (smaller 'z' in the viewing coordinate system) are scaled up.
        *   Points farther from the COP (larger 'z') are scaled down.
    *   The actual perspective projection matrix in homogeneous coordinates is more involved and depends on the parameters of the view frustum (near plane, far plane, field of view, aspect ratio).

*   **Homogeneous Coordinates:**
    *   Adding a fourth coordinate (w) to 3D vectors $(x, y, z)$ becomes $(x, y, z, 1)$.
    *   This allows us to represent translation as a matrix multiplication and combine various transformations (scale, rotate, translate, project) into a single matrix.
    *   For perspective projection, the 'w' component plays a crucial role in the division step.

---

### 6. Key Concepts and Definitions to Remember

*   **Projection:** Transforming a 3D object to a 2D plane.
*   **Viewing Plane (Image Plane):** The 2D surface for the projection.
*   **Projection Lines (Projectors):** Lines from 3D points to the viewing plane.
*   **Parallel Projection:** Projection lines are parallel.
    *   **Orthographic:** Projection lines perpendicular to the viewing plane. Preserves size and shape.
    *   **Oblique:** Projection lines not perpendicular to the viewing plane.
        *   **Cavalier:** Receding lines at full length.
        *   **Cabinet:** Receding lines at half length.
*   **Perspective Projection:** Projection lines converge to a Center of Projection (COP) or viewpoint. Objects farther away appear smaller.
    *   **One-Point:** One vanishing point.
    *   **Two-Point:** Two vanishing points.
    *   **Three-Point:** Three vanishing points.
*   **Vanishing Point:** A point where parallel lines appear to converge in perspective projection.
*   **Horizon Line:** The apparent line where the sky meets the earth; at eye level.
*   **View Frustum:** The volume of space visible to the camera in perspective projection, shaped like a truncated pyramid.
*   **Homogeneous Coordinates:** A system to represent 3D transformations (including translation) as matrix multiplications.

---

### 7. Practice Questions

**Question 1:**
Which type of projection is best suited for technical drawings and blueprints where accurate dimensions are crucial? Explain why.

**Question 2:**
Describe the key difference between orthographic and oblique projections.

**Question 3:**
What happens to parallel lines in a scene when viewed with a one-point perspective projection? Where do they converge?

**Question 4:**
You are looking up at a tall building from directly in front of its base. Which type of perspective projection would most accurately represent this view? Briefly explain your reasoning.

**Question 5:**
If a projection line is perpendicular to the projection plane, what type of projection is it?
    a) Oblique Projection
    b) Perspective Projection
    c) Orthographic Projection
    d) Cavalier Projection

---

### 8. Answers to Practice Questions

**Answer 1:**
Orthographic projection is best suited for technical drawings and blueprints. This is because orthographic projections preserve the true size and shape of objects, as the projection lines are perpendicular to the viewing plane. This allows for accurate measurements and representations of dimensions, which are essential for engineering and architectural designs.

**Answer 2:**
The key difference lies in the angle of the projection lines relative to the projection plane. In **orthographic projection**, the projection lines are **perpendicular** to the projection plane. In **oblique projection**, the projection lines are **parallel** to each other but **not perpendicular** to the projection plane.

**Answer 3:**
In a one-point perspective projection, parallel lines in the scene that are parallel to the direction of view converge to a single **vanishing point** on the horizon line. Lines parallel to the viewing plane remain parallel in the projection.

**Answer 4:**
A three-point perspective projection would most accurately represent this view. When looking up at a tall building, the vertical lines of the building (which are parallel in reality) appear to converge upwards towards a vanishing point above the horizon. This is characteristic of three-point perspective, where all three sets of parallel lines in the scene converge.

**Answer 5:**
c) Orthographic Projection

---

### 9. Important Points to Remember

*   **Purpose of Projection:** To convert 3D information into a 2D format for display.
*   **Parallel vs. Perspective:** Parallel projections maintain parallelism and true proportions but lack depth. Perspective projections create depth and realism but can distort proportions.
*   **Orthographic:** Perpendicular projection lines. Good for technical views.
*   **Oblique:** Angled projection lines. Cavalier (full length), Cabinet (half length).
*   **Perspective:** Converging projection lines. Mimics human vision.
    *   1-point: Straight ahead view.
    *   2-point: View of a corner.
    *   3-point: High or low angle view.
*   **Vanishing Points & Horizon Line:** Key elements for understanding perspective.
*   **Mathematical Representation:** Projections are implemented using transformation matrices, often involving homogeneous coordinates and division by a W component for perspective.

---
