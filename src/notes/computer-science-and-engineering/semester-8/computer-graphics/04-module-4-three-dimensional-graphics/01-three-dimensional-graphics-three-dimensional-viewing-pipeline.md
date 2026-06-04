---
title: "Three dimensional graphics - Three dimensional viewing pipeline."
subject: "COMPUTER GRAPHICS"
module: "Module 4: Three dimensional graphics "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cd59"
status: "completed"
scrapedAt: "2026-05-20T17:24:31.519Z"
---
# Computer Graphics: Module 4 - Three-Dimensional Graphics

## Topic: Three-Dimensional Viewing Pipeline

This module delves into the process of transforming 3D world coordinates into 2D screen coordinates, enabling us to visualize three-dimensional scenes on a two-dimensional display.

---

### Learning Outcomes:

Upon completion of this topic, you will be able to:

*   Understand the purpose and stages of the 3D viewing pipeline.
*   Explain the role of the **world-to-view** transformation.
*   Define and describe the **viewing volume** (frustum).
*   Explain the **projection transformation** (perspective and parallel).
*   Understand the **viewing transformation** (camera setup).
*   Describe the transformation from **Normalized Device Coordinates (NDC)** to **Screen Coordinates**.
*   Explain the concepts of clipping and the benefits of clipping in NDC space.

---

### 1. Introduction to the 3D Viewing Pipeline

The 3D viewing pipeline is a series of transformations that convert objects defined in a 3D world coordinate system into pixels on a 2D display. It's analogous to how a camera works in the real world, capturing a 3D scene and projecting it onto a flat film or sensor.

**Key Idea:** We start with 3D points in world space and end up with 2D screen coordinates.

---

### 2. Stages of the 3D Viewing Pipeline

The pipeline can be broadly divided into the following stages:

*   **World Transformation:** (Already covered in previous modules - models are positioned and oriented in the world).
*   **View Transformation (World-to-View):** Positions and orients the "camera" in the world.
*   **Projection Transformation:** Maps the 3D scene onto a 2D projection plane.
*   **Clipping:** Removes parts of the scene that are outside the viewing volume.
*   **Viewport Transformation (View-to-Screen):** Maps the projected 2D scene onto the display window.

---

### 3. The View Transformation (World-to-View)

This stage transforms coordinates from the **world coordinate system** to the **view coordinate system** (also known as camera coordinates or eye coordinates).

*   **Purpose:** To define the position, orientation, and direction of the "viewer" or "camera" in the 3D world.
*   **View Coordinate System:**
    *   **Origin:** Located at the camera's position.
    *   **Z-axis:** Points in the direction the camera is looking (viewing direction).
    *   **Y-axis:** Typically points upwards relative to the camera.
    *   **X-axis:** Perpendicular to both Z and Y, typically pointing to the right.
*   **Transformation:** This is achieved by an **extrinsic camera matrix**. It's essentially the *inverse* of the transformation that would place the camera at a specific location and orientation in world space.
    *   **Translation:** Move the world so the camera is at the origin.
    *   **Rotation:** Rotate the world so the camera's axes align with the world axes.

**Example:** Imagine placing a camera at (10, 5, 20) in the world, looking towards the origin (0, 0, 0), with an "up" direction of (0, 1, 0). The world-to-view transformation will move and rotate all world objects relative to this camera.

**Key Concept:** The world-to-view transformation defines the **viewing reference frame**.

---

### 4. The Viewing Volume (Frustum)

Once we're in view coordinates, we define what part of the 3D scene will be visible. This defines the **viewing volume** or **frustum**.

*   **Frustum:** A pyramid-like shape with its top cut off by a plane.
*   **Components of a Frustum:**
    *   **Near Clipping Plane (Front Clipping Plane):** The closest plane to the camera that is rendered. Objects closer than this plane are clipped.
    *   **Far Clipping Plane (Back Clipping Plane):** The furthest plane from the camera that is rendered. Objects further than this plane are clipped.
    *   **Left, Right, Top, Bottom Clipping Planes:** Define the horizontal and vertical boundaries of the view.
*   **Types of Frustums:**
    *   **Perspective Frustum:** Creates a realistic view where objects further away appear smaller. The sides of the frustum converge towards the camera.
    *   **Parallel (Orthographic) Frustum:** Objects appear the same size regardless of their distance. The sides of the frustum are parallel.

**Visual Representation:** Imagine looking through a rectangular window. The frustum defines the boundaries of what you can see through that window.

---

### 5. The Projection Transformation

This stage projects the 3D points within the viewing volume onto a 2D projection plane.

#### 5.1. Perspective Projection

*   **Concept:** Simulates how the human eye or a camera sees. Objects closer to the viewer appear larger than objects further away.
*   **Mechanism:** Lines from the 3D points are projected towards a single point (the camera's eye point) and intersect the projection plane.
*   **Frustum Shape:** Truncated pyramid.
*   **Transformation Matrix:** A 4x4 matrix that squashes the Z-coordinates and scales X and Y based on their Z-position, creating the depth perception. This matrix typically maps the view volume to a **Normalized Device Coordinates (NDC)** cube.

**Example:** Imagine a cube that is far away and a cube that is close. In a perspective projection, the distant cube will appear smaller on the screen, even if they are the same size in 3D space.

#### 5.2. Parallel (Orthographic) Projection

*   **Concept:** Objects are projected onto the projection plane along parallel lines. Distance does not affect the perceived size of objects.
*   **Mechanism:** Lines from the 3D points are projected parallel to a specific direction (the projection direction) onto the projection plane.
*   **Frustum Shape:** Rectangular prism (or cuboid).
*   **Transformation Matrix:** A simpler matrix that typically maps the view volume to an NDC cube. It essentially discards the depth information (Z-coordinate) after clipping.

**Example:** Used in technical drawings, architectural plans, and some video games where consistent object size is desired, regardless of distance (e.g., a blueprint of a building).

**Key Concept:** Both perspective and parallel projections transform 3D coordinates into a new coordinate system, often **Normalized Device Coordinates (NDC)**.

---

### 6. Normalized Device Coordinates (NDC)

After the projection transformation, coordinates are typically converted into a standardized, device-independent space.

*   **Range:** Typically `[-1, 1]` for X, Y, and Z.
    *   X: Leftmost visible point is -1, rightmost is 1.
    *   Y: Bottommost visible point is -1, topmost is 1.
    *   Z: Closest visible point is -1, furthest is 1 (or sometimes 0 to 1).
*   **Purpose:**
    *   **Simplifies Clipping:** Clipping to the NDC cube `[-1, 1]` is uniform regardless of the original viewing volume.
    *   **Device Independence:** Allows the rendering system to map these normalized coordinates to any specific screen resolution or output device.

**Key Point:** NDC space is a cube where everything within it is potentially visible and has been projected.

---

### 7. Clipping

This stage removes parts of the scene that fall outside the viewing volume.

*   **When it happens:** Typically after projection, in NDC space, but can also be performed earlier in the pipeline for efficiency.
*   **Clipping Against:** The boundaries of the viewing volume (near plane, far plane, left, right, top, bottom).
*   **Why clip in NDC space?** Clipping against the unit cube `[-1, 1]` is simpler and more efficient than clipping against arbitrary frustums.
*   **Sutherland-Hodgman Algorithm:** A common algorithm for polygon clipping. It processes each edge of a polygon against each clipping plane.
*   **Result:** Only the geometric primitives (vertices, lines, polygons) that are entirely or partially inside the viewing volume remain. If a primitive is cut by a plane, new vertices are generated.

**Example:** If a sphere is partially outside the far clipping plane, the portion of the sphere beyond the far plane is removed.

**Important Consideration:** For perspective projection, clipping needs to be done carefully to avoid division by zero or incorrect interpolation of attributes (like color or texture coordinates) when points are projected onto the Z=0 plane. This often involves using a **w-coordinate** (homogeneous coordinates) for correct interpolation.

---

### 8. Viewport Transformation (View-to-Screen)

The final stage maps the 2D coordinates from NDC space to the specific pixel coordinates of the display window or viewport.

*   **Viewport:** The rectangular area on the display screen where the image will be rendered.
*   **Transformation:** A simple linear scaling and translation.
    *   **Scaling:** Maps the `[-1, 1]` NDC range to the pixel dimensions of the viewport (e.g., `[0, width]` and `[0, height]`).
    *   **Translation:** Shifts the origin of the NDC space to the bottom-left (or top-left, depending on the coordinate system) of the viewport.
*   **Screen Coordinates:** The final 2D coordinates (typically integer pixel coordinates) that specify where each pixel of the projected scene should be drawn.

**Example:**
If NDC X is 1.0, it maps to `viewport_width - 1`.
If NDC X is -1.0, it maps to `0`.
If NDC Y is 1.0, it maps to `viewport_height - 1`.
If NDC Y is -1.0, it maps to `0`.

**Formula (simplified):**
`screen_x = ((ndc_x + 1) / 2) * viewport_width`
`screen_y = ((ndc_y + 1) / 2) * viewport_height`
(Note: Y-axis direction might need adjustment based on the screen's coordinate system.)

---

### 9. Summary of the 3D Viewing Pipeline

```
World Coordinates
      |
      V
View Coordinates (Camera Space)
      | (World-to-View Transform)
      V
Projected Coordinates (e.g., Clip Space)
      | (Projection Transform)
      V
Normalized Device Coordinates (NDC)
      | (Clipping)
      V
Viewport Coordinates (Screen Space)
      | (Viewport Transform)
      V
Pixels on Display
```

---

### Important Points to Remember:

*   The 3D viewing pipeline is a sequence of transformations.
*   The **world-to-view** transformation defines the camera's position and orientation.
*   The **projection** transformation determines whether the view is **perspective** or **parallel**.
*   The **viewing volume** (frustum) defines what is visible.
*   **Clipping** removes geometry outside the viewing volume, often performed in NDC space.
*   **Normalized Device Coordinates (NDC)** provide a standardized, device-independent space.
*   The **viewport transformation** maps NDC to screen pixels.

---

### Practice Questions/Exercises:

**Question 1:**
What is the primary purpose of the **view transformation** in the 3D graphics pipeline?
a) To project 3D objects onto a 2D plane.
b) To define the position and orientation of the camera in the 3D world.
c) To remove objects outside the visible area.
d) To map 3D coordinates to pixel coordinates.

**Question 2:**
Describe the difference between a **perspective projection** and a **parallel projection**. Give an example of where each might be used.

**Question 3:**
What is **Normalized Device Coordinates (NDC)**, and why is it useful in the 3D viewing pipeline?

**Question 4:**
If a point has NDC coordinates (0.5, 0.0, -0.5), and the viewport is 800 pixels wide and 600 pixels high, what would its approximate screen coordinates be (assuming a standard bottom-left origin for screen coordinates)?

**Question 5:**
At which stage of the 3D viewing pipeline is geometric data typically discarded if it falls outside the viewing boundaries?
a) Projection Transformation
b) Viewport Transformation
c) Clipping
d) World Transformation

---

### Answers:

**Answer 1:**
b) To define the position and orientation of the camera in the 3D world.

**Answer 2:**
*   **Perspective Projection:** Simulates natural vision where objects closer appear larger and objects further appear smaller. Lines of sight converge at a single point (the camera's eye).
    *   **Use Case:** Realistic rendering of scenes in games, architectural visualizations, and movies.
*   **Parallel (Orthographic) Projection:** Objects appear the same size regardless of their distance. Lines of sight are parallel.
    *   **Use Case:** Technical drawings, CAD applications, blueprints, and isometric views in some games.

**Answer 3:**
Normalized Device Coordinates (NDC) are a standardized, device-independent coordinate system, typically ranging from `[-1, 1]` for X, Y, and Z. It's useful because:
*   It simplifies **clipping**: Clipping against the unit cube `[-1, 1]` is uniform.
*   It makes the pipeline more **device-independent**: The output from NDC can be easily mapped to any screen resolution or output device via the viewport transformation.

**Answer 4:**
Let's calculate the screen coordinates:
NDC X = 0.5, NDC Y = 0.0

*   **Screen X:**
    `screen_x = ((ndc_x + 1) / 2) * viewport_width`
    `screen_x = ((0.5 + 1) / 2) * 800`
    `screen_x = (1.5 / 2) * 800`
    `screen_x = 0.75 * 800`
    `screen_x = 600`

*   **Screen Y:**
    `screen_y = ((ndc_y + 1) / 2) * viewport_height`
    `screen_y = ((0.0 + 1) / 2) * 600`
    `screen_y = (1.0 / 2) * 600`
    `screen_y = 0.5 * 600`
    `screen_y = 300`

    (Assuming Y increases upwards in NDC, and downwards from the top in screen coordinates, we might need to adjust Y. If screen Y starts from the top and goes down, a common adjustment is `screen_y = viewport_height - 1 - (((ndc_y + 1) / 2) * viewport_height)`. However, for simplicity and common interpretation of "bottom-left origin", we'll use the direct mapping.)

    Approximate screen coordinates: **(600, 300)**.

**Answer 5:**
c) Clipping

---
