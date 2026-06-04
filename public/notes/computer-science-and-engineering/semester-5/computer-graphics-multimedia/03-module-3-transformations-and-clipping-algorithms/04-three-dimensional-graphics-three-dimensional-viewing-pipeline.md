---
title: "Three dimensional graphics - Three dimensional viewing pipeline."
subject: "COMPUTER GRAPHICS & MULTIMEDIA"
module: "Module 3: Transformations and Clipping Algorithms "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b825"
status: "completed"
scrapedAt: "2026-05-20T16:43:21.258Z"
---
# COMPUTER GRAPHICS & MULTIMEDIA: Module 3 - Transformations and Clipping Algorithms
## Topic: Three Dimensional Graphics - Three Dimensional Viewing Pipeline

**Module:** 3
**Topic:** Three Dimensional Graphics - Three Dimensional Viewing Pipeline
**Description:** Understanding the process of projecting a 3D scene onto a 2D display screen, including transformations, projections, and clipping in 3D space.

**Learning Outcomes:**
*   Understand the overall architecture of the 3D viewing pipeline.
*   Explain the role of each stage in the pipeline (Modeling, Viewing, Projection, Clipping, Rasterization).
*   Describe the different types of 3D projections (Perspective and Parallel).
*   Apply appropriate transformations to manipulate objects in 3D space.
*   Understand the concept of 3D clipping and its importance.

---

### 1. Introduction to the 3D Viewing Pipeline

The 3D viewing pipeline is the conceptual process of transforming a 3D scene description into a 2D image that can be displayed on a screen. It’s a sequence of transformations and operations that simulate the process of a camera capturing a real-world scene.  This pipeline can be broadly broken down into the following stages:

*   **Modeling Transformation:**  Transforms object descriptions from their local coordinate systems into a common world coordinate system.
*   **Viewing Transformation (or Camera Transformation):**  Defines the position and orientation of the "camera" in the world coordinate system.  It transforms the world coordinate system into the "eye" or "camera" coordinate system.
*   **Projection Transformation:**  Projects the 3D scene onto a 2D projection plane. This transformation determines how the 3D objects appear in the 2D image (e.g., perspective or parallel projection).
*   **Clipping:**  Removes objects or parts of objects that lie outside the viewing volume (also known as the view frustum). This optimizes performance by preventing unnecessary processing of invisible objects.
*   **Rasterization:**  Converts the transformed and clipped 2D primitives (e.g., lines, triangles) into pixels that can be displayed on the screen.  This stage also handles tasks like hidden surface removal, shading, and texturing.

### 2. Detailed Breakdown of the Viewing Pipeline Stages

#### 2.1 Modeling Transformation

*   **Purpose:** Transforms objects from their own local coordinate system into a shared *world coordinate system*.
*   **Key Concepts:**
    *   **Local Coordinate System (Object Space):** Each object is defined relative to its own origin and axes, making it easier to model.
    *   **World Coordinate System:** A common reference frame in which all objects in the scene are positioned and oriented.
    *   **Modeling Matrix (Model Matrix):**  A transformation matrix (typically a combination of translation, rotation, and scaling) that maps vertices from the object's local coordinate system to the world coordinate system.
*   **Transformations Involved:**
    *   **Translation:** Moves the object.
    *   **Rotation:** Rotates the object around a specified axis.
    *   **Scaling:** Changes the size of the object.
*   **Example:**  Imagine modeling a car.  Each wheel might be modeled in its own local coordinate system centered on the wheel. The modeling transformation positions each wheel correctly relative to the car's body in the world coordinate system.
*   **Mathematical Representation:** Let `V_local` be a vertex in local coordinates, and `V_world` be the corresponding vertex in world coordinates. Then, `V_world = M_model * V_local`, where `M_model` is the model matrix.

#### 2.2 Viewing Transformation (Camera Transformation)

*   **Purpose:** Transforms the scene from the world coordinate system into the *camera (or eye) coordinate system*. Simulates the placement and orientation of a camera in the scene.
*   **Key Concepts:**
    *   **Camera Position (Eye Point):** The location of the camera in the world coordinate system.
    *   **Look-At Point:** The point in the world that the camera is looking at.
    *   **Up Vector:**  A vector that specifies the "up" direction for the camera (to prevent it from tilting).
    *   **Camera Coordinate System:** A coordinate system where the camera is at the origin, looking down the negative Z-axis, and the Y-axis points "up".
    *   **Viewing Matrix (View Matrix):** A transformation matrix that maps vertices from the world coordinate system to the camera coordinate system.
*   **Process:**  The viewing transformation essentially inverts the transformations that would move the world so that the camera is at the origin, pointing in the negative z-direction.
*   **Example:**  Suppose you want to view the car from above and slightly to the side.  The viewing transformation sets the camera's position above and to the side of the car, makes the camera "look at" the car, and sets the "up" direction to be generally upward.
*   **Mathematical Representation:** Let `V_world` be a vertex in world coordinates, and `V_camera` be the corresponding vertex in camera coordinates. Then, `V_camera = M_view * V_world`, where `M_view` is the view matrix.

#### 2.3 Projection Transformation

*   **Purpose:** Projects the 3D scene onto a 2D projection plane. This transformation determines how depth is represented in the final image.
*   **Key Concepts:**
    *   **Projection Plane:**  The 2D surface onto which the 3D scene is projected.
    *   **View Frustum:** The 3D volume visible to the camera.  It's shaped like a truncated pyramid (perspective projection) or a rectangular box (parallel projection).
    *   **Perspective Projection:**  Objects appear smaller as they get farther away, simulating how human vision works. Parallel lines converge to a vanishing point.
    *   **Parallel Projection:**  Objects maintain the same size regardless of their distance. Parallel lines remain parallel.
    *   **Orthographic Projection:** A type of parallel projection where the projection direction is perpendicular to the projection plane.
    *   **Oblique Projection:** A type of parallel projection where the projection direction is not perpendicular to the projection plane.
*   **Types of Projection:**
    *   **Perspective Projection:**
        *   Uses a projection matrix to map 3D points to 2D points, creating the illusion of depth.
        *   Requires specifying the field of view (FOV), aspect ratio, near clipping plane, and far clipping plane.
        *   More realistic but can cause distortion if the FOV is too wide.
    *   **Parallel Projection:**
        *   Simpler than perspective projection; used for technical drawings, CAD, etc.
        *   No foreshortening effect.
        *   Requires specifying the size of the viewing volume (left, right, bottom, top, near, far).
*   **Example:** A photograph uses perspective projection.  A blueprint of a building typically uses orthographic projection.
*   **Mathematical Representation:** Let `V_camera` be a vertex in camera coordinates, and `V_clip` be the corresponding vertex in clip coordinates. Then, `V_clip = M_projection * V_camera`, where `M_projection` is the projection matrix.

#### 2.4 Clipping

*   **Purpose:**  Removes objects or parts of objects that are outside the *view frustum* (the visible volume defined by the camera and projection parameters).
*   **Key Concepts:**
    *   **View Frustum:**  The 3D volume visible to the camera after the projection transformation.
    *   **Clipping Planes:**  The planes that define the boundaries of the view frustum (left, right, top, bottom, near, far).
    *   **Clipping Algorithms:** Algorithms used to determine which parts of objects are inside or outside the view frustum.
*   **Importance:**  Reduces the amount of data that needs to be processed in subsequent stages (especially rasterization), improving performance. Prevents artifacts from drawing objects that are partially or fully behind the camera or outside the viewing area.
*   **Common Clipping Algorithms:**
    *   **Cohen-Sutherland Algorithm (for line clipping):** Efficient for trivial acceptance and rejection cases.
    *   **Liang-Barsky Algorithm (for line clipping):** More efficient than Cohen-Sutherland in many cases.
    *   **Weiler-Atherton Algorithm (for polygon clipping):** Can clip complex polygons against concave clip regions.
*   **Example:** Imagine drawing a long line that extends far beyond the edges of the screen. Clipping would remove the portions of the line that are off-screen, so only the visible segment is drawn.

#### 2.5 Rasterization

*   **Purpose:** Converts the transformed and clipped 2D primitives (points, lines, triangles) into pixels on the screen.
*   **Key Concepts:**
    *   **Pixels:** The individual picture elements that make up the screen image.
    *   **Scan Conversion:** The process of determining which pixels should be turned on to represent a primitive.
    *   **Hidden Surface Removal (Z-Buffering):**  Determining which surfaces are visible and which are hidden behind other surfaces.
    *   **Shading:**  Calculating the color of each pixel based on lighting and material properties.
    *   **Texturing:**  Applying images (textures) to the surfaces of objects.
*   **Algorithms:**
    *   **Bresenham's Line Algorithm:** Efficiently draws lines by calculating the closest pixels to the ideal line.
    *   **Triangle Rasterization Algorithms:**  Iterate over the pixels within a triangle and determine their color and depth.
    *   **Z-Buffer Algorithm:** Stores the depth (Z-value) of each pixel in a buffer. During rasterization, only pixels with a smaller Z-value than the current Z-buffer value are drawn, ensuring that closer objects occlude further objects.
*   **Example:**  Drawing a triangle involves determining which pixels fall within the triangle's boundaries and then assigning them a color. Z-buffering ensures that triangles closer to the camera are drawn on top of triangles further away.

### 3. Types of 3D Projections

#### 3.1 Perspective Projection

*   **Characteristics:**
    *   Objects appear smaller as their distance from the viewer increases.
    *   Parallel lines converge to a vanishing point.
    *   Simulates human vision more realistically.
    *   Requires a *center of projection* (the camera's position).
*   **Uses:**  Realistic rendering, games, simulations.
*   **Parameters:**
    *   **Field of View (FOV):** The angle of view of the camera.  A larger FOV creates a wider perspective.
    *   **Aspect Ratio:**  The ratio of the width to the height of the viewport.
    *   **Near Clipping Plane:**  The distance from the camera to the closest objects that will be rendered.
    *   **Far Clipping Plane:** The distance from the camera to the furthest objects that will be rendered.

#### 3.2 Parallel Projection

*   **Characteristics:**
    *   Objects maintain the same size regardless of their distance from the viewer.
    *   Parallel lines remain parallel.
    *   The projection direction is a single vector.
*   **Uses:**  Technical drawings, CAD, architectural renderings where accurate measurements are important.
*   **Types:**
    *   **Orthographic Projection:** The projection direction is perpendicular to the projection plane.
    *   **Oblique Projection:** The projection direction is not perpendicular to the projection plane.
*   **Parameters:**
    *   Left, Right, Top, Bottom: Defines the boundaries of the viewing volume in the X and Y directions.
    *   Near, Far: Defines the boundaries of the viewing volume in the Z direction.

### 4. Transformations in 3D Space

Transformations are fundamental to manipulating objects within the 3D viewing pipeline.  They are represented by 4x4 matrices, allowing for combinations of translation, rotation, and scaling.

*   **Translation:**
    *   Moves an object along the X, Y, and Z axes.
    *   Translation Matrix:
        ```
        | 1  0  0  Tx |
        | 0  1  0  Ty |
        | 0  0  1  Tz |
        | 0  0  0  1  |
        ```
        where Tx, Ty, and Tz are the translation amounts along the X, Y, and Z axes, respectively.
*   **Rotation:**
    *   Rotates an object around the X, Y, or Z axis.
    *   Rotation matrices are more complex and depend on the angle of rotation.
    *   **Rotation around X-axis:**
        ```
        | 1  0       0        0 |
        | 0  cos(θ)  -sin(θ)  0 |
        | 0  sin(θ)  cos(θ)   0 |
        | 0  0       0        1 |
        ```
    *   **Rotation around Y-axis:**
        ```
        | cos(θ)  0  sin(θ)  0 |
        | 0       1  0       0 |
        | -sin(θ) 0  cos(θ)  0 |
        | 0       0  0       1 |
        ```
    *   **Rotation around Z-axis:**
        ```
        | cos(θ)  -sin(θ)  0  0 |
        | sin(θ)  cos(θ)   0  0 |
        | 0       0        1  0 |
        | 0       0        0  1 |
        ```
        where θ is the angle of rotation in radians.
*   **Scaling:**
    *   Changes the size of an object along the X, Y, and Z axes.
    *   Scaling Matrix:
        ```
        | Sx  0  0  0 |
        | 0  Sy  0  0 |
        | 0  0  Sz  0 |
        | 0  0  0  1 |
        ```
        where Sx, Sy, and Sz are the scaling factors along the X, Y, and Z axes, respectively.
*   **Homogeneous Coordinates:**
    *   A 4D coordinate system used to represent 3D points and vectors.
    *   Allows all transformations (translation, rotation, scaling) to be represented as matrix multiplications.
    *   A 3D point (x, y, z) is represented as (x, y, z, 1) in homogeneous coordinates.
    *   A 3D vector (x, y, z) is represented as (x, y, z, 0) in homogeneous coordinates.

### 5. 3D Clipping

*   **Purpose:** To discard primitives (or portions of primitives) that lie outside the view frustum.  This improves performance and prevents rendering artifacts.
*   **View Frustum in Clipping Space:**  After the projection transformation, the view frustum is transformed into a canonical view volume (a cube extending from -1 to 1 in each dimension).  This simplifies clipping.
*   **Clipping Planes:**  The six clipping planes in canonical view volume are:
    *   x = -w
    *   x = w
    *   y = -w
    *   y = w
    *   z = -w
    *   z = w  (or z = 0, depending on the API and projection type)
*   **Clipping Against Planes:** Primitives are tested against each clipping plane individually. If a primitive is completely outside a plane, it is discarded. If it intersects a plane, it is clipped, and the resulting primitives are passed on to the next stage.
*   **Point Clipping:** A point (x, y, z, w) is inside the view volume if `-w <= x <= w`, `-w <= y <= w`, and `-w <= z <= w`.  This is equivalent to dividing by `w` and checking if `-1 <= x/w <= 1`, `-1 <= y/w <= 1`, and `-1 <= z/w <= 1`.
*   **Line Clipping:** More complex than point clipping. Common algorithms include Cohen-Sutherland and Liang-Barsky.
*   **Polygon Clipping:** Most complex.  Algorithms like Weiler-Atherton can handle concave polygons and clip regions.

---

### 6. Practice Questions and Exercises

**Question 1:**  Describe the purpose of the modeling transformation.

**Answer:**  The modeling transformation transforms object descriptions from their local coordinate systems into a common world coordinate system, allowing you to position and orient objects relative to each other in the scene.

**Question 2:** What are the three parameters required to define the camera position and orientation during viewing transformation?

**Answer:** The camera position (eye point), the look-at point (the point the camera is looking at), and the up vector (which specifies the camera's "up" direction).

**Question 3:**  Explain the difference between perspective and parallel projection. Give an example of when each might be used.

**Answer:**  Perspective projection simulates depth by making objects appear smaller as they get farther away, with parallel lines converging to a vanishing point (used for realistic rendering like games). Parallel projection maintains object size regardless of distance and keeps parallel lines parallel (used for technical drawings like blueprints).

**Question 4:** Why is clipping necessary in the 3D viewing pipeline?

**Answer:** Clipping is necessary to remove objects or parts of objects that are outside the view frustum, reducing the amount of data processed during rasterization and preventing rendering artifacts caused by drawing invisible objects.

**Question 5:** Given a vertex in world coordinates V_world = (2, 3, 1, 1) and a view matrix M_view such that the camera is looking along the negative z-axis with no rotation applied, what is the rough expected sign of the z-coordinate of V_camera?

**Answer:** The rough expected sign of the z-coordinate of V_camera should be negative since typically the default viewing configuration is looking down the negative z-axis. The specific value will depend on the camera's position and orientation relative to the origin of the world coordinate system. However, if the camera is simply translating the origin such that the world is "behind" it, we would expect a negative z value.

**Question 6:** Create a sequence of transformations to perform the following: Scale an object by 2 along the x-axis, then rotate it 90 degrees around the z-axis, and finally translate it by (5,0,0).

**Answer:** Let S, R, and T represent the scale, rotation, and translation matrices respectively.  The final transformation matrix M is given by:

M = T * R * S

```
//Scaling by 2 along x-axis
S =  | 2  0  0  0 |
     | 0  1  0  0 |
     | 0  0  1  0 |
     | 0  0  0  1 |

//Rotation 90 degrees around the z-axis
R = | cos(90) -sin(90)  0  0 |
    | sin(90)  cos(90)  0  0 |
    |    0         0     1  0 |
    |    0         0     0  1 |

R = | 0 -1 0 0 |
    | 1  0 0 0 |
    | 0  0 1 0 |
    | 0  0 0 1 |


//Translate by (5, 0, 0)
T = | 1 0 0 5 |
    | 0 1 0 0 |
    | 0 0 1 0 |
    | 0 0 0 1 |


M = T * R * S = | 0 -1 0 5 |
                | 2  0 0 0 |
                | 0  0 1 0 |
                | 0  0 0 1 |

```

---

### 7. Important Points to Remember

*   The 3D viewing pipeline is a sequence of transformations and operations that converts a 3D scene description into a 2D image.
*   Each stage in the pipeline has a specific purpose, and the order of the stages is crucial.
*   Transformations are represented by 4x4 matrices in homogeneous coordinates.
*   Perspective projection creates a more realistic image, while parallel projection is used for technical drawings.
*   Clipping removes objects or parts of objects that are outside the view frustum, improving performance.
*   Rasterization converts the transformed and clipped primitives into pixels on the screen.
