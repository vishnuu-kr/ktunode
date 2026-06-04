---
title: "Projections- Parallel and Perspective projections."
subject: "COMPUTER GRAPHICS & MULTIMEDIA"
module: "Module 3: Transformations and Clipping Algorithms "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b826"
status: "completed"
scrapedAt: "2026-05-20T16:43:21.963Z"
---
# COMPUTER GRAPHICS & MULTIMEDIA - Module 3: Transformations and Clipping Algorithms - Projections

## Topic: Projections - Parallel and Perspective Projections

**Learning Outcomes:**

*   Understand the concept of projection in computer graphics.
*   Differentiate between parallel and perspective projections.
*   Explain the different types of parallel projections (orthographic, oblique).
*   Describe the characteristics of perspective projections (vanishing points).
*   Be able to apply projection transformations to 3D objects.
*   Understand the applications of different projection types.

---

### 1. Introduction to Projections

*   **Definition:** Projection is the process of transforming 3D objects in a world coordinate system onto a 2D projection plane (view plane) to create a 2D image for display. This is fundamental to rendering 3D scenes on 2D screens.

*   **Importance:** Projections allow us to represent 3D objects realistically (or stylistically) on 2D display devices. They are a crucial part of the rendering pipeline.

*   **Types of Projections:**
    *   **Parallel Projection:** Projects objects using parallel lines, maintaining relative size.
    *   **Perspective Projection:** Projects objects using converging lines, creating a more realistic representation of depth and distance.
        *   Objects appear smaller as they are further away.

---

### 2. Parallel Projections

*   **Definition:** Parallel projection projects points from a 3D object onto the 2D view plane along parallel lines.  The length of the projection lines is not a factor.

*   **Characteristics:**
    *   Parallel lines in the object remain parallel in the projected image.
    *   Relative sizes of objects remain constant, regardless of their distance from the view plane.
    *   Suitable for technical drawings, blueprints, and architectural plans where accurate measurements are crucial.

*   **Types of Parallel Projections:**
    *   **Orthographic Projection:** Projection direction is perpendicular to the view plane.
        *   **Advantages:** Preserves true shapes and sizes of objects in the plane parallel to the view plane. Good for precise drawings.
        *   **Types:**
            *   **Front/Elevation View:** View plane is parallel to the front of the object.
            *   **Side/Profile View:** View plane is parallel to the side of the object.
            *   **Top/Plan View:** View plane is parallel to the top of the object.
            *   **Axonometric Projections:** These projections show multiple sides of an object, including isometric, dimetric, and trimetric projections. The projection plane is not parallel to any of the main axes.
    *   **Oblique Projection:** Projection direction is not perpendicular to the view plane.
        *   **Advantages:** Allows showing more than one side of an object without distortion in the direction parallel to the view plane.
        *   **Types:**
            *   **Cavalier Projection:** The projection direction makes a 45-degree angle with the view plane. All lines parallel to the view plane are projected at their true length.
            *   **Cabinet Projection:**  The projection direction is such that lines perpendicular to the view plane are projected at half their length, often making a 45-degree angle. This provides a better depth impression than Cavalier projection.

*   **Mathematical Representation (Orthographic):**
    *   Assuming the view plane is the XY-plane (z=0), the transformation matrix for an orthographic projection is:

    ```
    | 1  0  0  0 |
    | 0  1  0  0 |
    | 0  0  0  0 |
    | 0  0  0  1 |
    ```
    This matrix simply maps the Z coordinate to 0, effectively projecting the 3D point (x, y, z) to (x, y, 0) on the XY-plane.

*   **Mathematical Representation (Oblique):**
    * The oblique projection transformation matrix can be represented as:

     ```
     | 1  0  l*cos(alpha) 0 |
     | 0  1  l*sin(alpha) 0 |
     | 0  0        0         0 |
     | 0  0        0         1 |
     ```
     Where `l` is the length of the foreshortening factor, and `alpha` is the angle the projection line makes with the view plane.

*   **Example:** Imagine a cube placed in front of you. In an orthographic projection (front view), you would see only the front face as a square, with no information about the depth of the cube. In an oblique projection, you might see the front face as a square and the top face as a parallelogram, giving some indication of the cube's depth.

---

### 3. Perspective Projections

*   **Definition:** Perspective projection projects points from a 3D object onto the 2D view plane along lines that converge at a single point, called the *center of projection* (or viewpoint).

*   **Characteristics:**
    *   Objects appear smaller as they are farther away from the viewpoint. This gives the illusion of depth.
    *   Parallel lines in the object converge to a point in the projected image, called a *vanishing point*.
    *   More realistic than parallel projections.
    *   Used extensively in computer games, virtual reality, and architectural visualization.

*   **Types of Perspective Projections:**
    *   **One-Point Perspective:** One vanishing point. Usually, the object has one face parallel to the view plane. Often used to represent roads or hallways stretching into the distance.
    *   **Two-Point Perspective:** Two vanishing points. No faces of the object are parallel to the view plane. Common for visualizing buildings at an angle.
    *   **Three-Point Perspective:** Three vanishing points. No principal axes are parallel to the view plane. Used for extreme perspectives, like looking up at a tall building.

*   **Vanishing Points:** The points where parallel lines appear to converge in a perspective projection.  Each set of parallel lines has its own vanishing point. The number of vanishing points depends on the orientation of the object with respect to the view plane.

*   **Mathematical Representation:**
    *   Assume the viewpoint is at (0, 0, d) and the view plane is at z = 0. The perspective projection transformation can be represented as:

    ```
    x' = (d * x) / (d + z)
    y' = (d * y) / (d + z)
    z' = 0
    ```

    The corresponding homogeneous transformation matrix is:

    ```
    | 1  0  0  0 |
    | 0  1  0  0 |
    | 0  0  0  d |
    | 0  0 -1/d 1 |
    ```
    This matrix performs the perspective division (dividing x and y by (1 + z/d)), which is essential for creating the foreshortening effect.

*   **Example:** Imagine standing on a railway track. The parallel rails appear to converge in the distance to a single point on the horizon. This is a one-point perspective.

---

### 4. Applications of Different Projection Types

*   **Parallel Projections:**
    *   **Technical Drawings:** Orthographic projections are fundamental for creating accurate technical drawings, blueprints, and CAD designs.
    *   **Architectural Plans:**  Plan views (top-down orthographic projections) are used extensively in architecture.
    *   **3D Modeling Software:** Often used as a mode for precise manipulation and editing of models.
*   **Perspective Projections:**
    *   **Computer Games:** Used to create realistic 3D environments and immersive gaming experiences.
    *   **Virtual Reality (VR):**  Essential for creating a sense of depth and presence in virtual environments.
    *   **Architectural Visualization:** Used to render photorealistic images and videos of buildings and interiors.
    *   **Film and Animation:** Used to create realistic and visually appealing scenes.

---

### 5. Important Points to Remember

*   **Parallel projections preserve relative sizes and parallelism but lack depth cues.**
*   **Perspective projections create realistic depth but distort sizes and parallelism.**
*   **Orthographic projections are used for technical drawings, while perspective projections are used for realistic rendering.**
*   **Vanishing points are a key characteristic of perspective projections.**
*   **The choice of projection depends on the specific application and desired visual effect.**

---

### 6. Practice Questions/Exercises

1.  **Question:** Differentiate between orthographic and oblique projections. Give one real-world application for each.
    *   **Answer:** Orthographic projections have projection lines perpendicular to the view plane, preserving true shapes and sizes. Application: technical drawings. Oblique projections have non-perpendicular projection lines, allowing multiple sides to be seen with some distortion. Application: simple architectural sketches where you need to see the facade and a little of the side simultaneously.

2.  **Question:** Explain the concept of vanishing points in perspective projection. How does the number of vanishing points affect the perceived perspective?
    *   **Answer:** Vanishing points are points where parallel lines appear to converge in a perspective projection. One-point perspective has one vanishing point, two-point has two, and three-point has three. More vanishing points generally create a more dramatic and realistic sense of depth, especially for large scenes or unusual viewpoints.

3.  **Question:** Consider a cube with vertices at (0,0,0), (1,0,0), (1,1,0), (0,1,0), (0,0,1), (1,0,1), (1,1,1), and (0,1,1).  Assume that your view plane is the XY plane and the center of projection is at (0,0,5). What are the projected coordinates of the vertex (1,1,1) using a perspective projection?
    *   **Answer:**  Using the perspective projection formulas x' = (d * x) / (d + z) and y' = (d * y) / (d + z), where d = 5, x = 1, y = 1, and z = 1, we get:

        *   x' = (5 * 1) / (5 + 1) = 5/6 ≈ 0.833
        *   y' = (5 * 1) / (5 + 1) = 5/6 ≈ 0.833

        Therefore, the projected coordinates of the vertex (1,1,1) are approximately (0.833, 0.833, 0).

4.  **Question:** Which projection type is most suitable for creating photorealistic images? Why?
    *   **Answer:** Perspective projection. Because it mimics how our eyes perceive the world by creating depth using foreshortening and vanishing points.

5. **Question:** If an object has one of its principal axes directly aligned with the viewing direction, which type of projection would make all other axes appear to converge on a single vanishing point?
     * **Answer:** One-point perspective projection.

6. **Question:** What is the primary difference in the projection lines between parallel and perspective projections?
    * **Answer:** Parallel projection utilizes parallel projection lines, whereas perspective projections use projection lines that converge at a single point, called the center of projection.

7. **Question:** Explain why CAD programs and technical drawing often use orthographic projections, instead of perspective projections?
    * **Answer:** CAD programs use orthographic projections because of their ability to preserve accurate measurements and shapes. This makes them essential for designing, documenting, and manufacturing parts where dimensional accuracy is crucial. Perspective projections, while realistic, would distort the dimensions of the object.

---
These notes should provide a comprehensive overview of parallel and perspective projections for computer graphics and multimedia. Remember to review additional resources and examples to solidify your understanding. Good luck!
