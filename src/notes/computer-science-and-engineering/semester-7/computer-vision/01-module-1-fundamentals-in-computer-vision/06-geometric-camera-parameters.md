---
title: "Geometric Camera Parameters"
subject: "COMPUTER VISION"
module: "Module 1: Fundamentals in Computer Vision :"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c39a"
status: "completed"
scrapedAt: "2026-05-20T17:03:02.352Z"
---
# Computer Vision: Module 1 - Fundamentals
## Topic: Geometric Camera Parameters

---

### Learning Outcomes:

*   **Understand the pinhole camera model:** Grasp the fundamental geometric assumptions and limitations of the pinhole camera model.
*   **Distinguish between intrinsic and extrinsic camera parameters:** Clearly define and differentiate the roles of intrinsic and extrinsic parameters in describing a camera's geometry.
*   **Define and explain the intrinsic camera parameters:** Understand the meaning of focal length, principal point, and pixel aspect ratio/skew.
*   **Define and explain the extrinsic camera parameters:** Understand the meaning of rotation and translation in relating the camera's coordinate system to a world coordinate system.
*   **Understand the camera projection matrix:** Comprehend how intrinsic and extrinsic parameters combine to form the camera projection matrix and its role in projecting 3D points to 2D image points.

---

### 1. The Pinhole Camera Model

The pinhole camera model is a simplified mathematical model used in computer vision to describe how a 3D world is projected onto a 2D image plane. It forms the basis for understanding camera geometry.

*   **Core Idea:** Imagine a camera obscura – a dark box with a tiny hole (the "pinhole") at one end. Light rays from the 3D world pass through this pinhole and form an inverted image on the opposite side.

*   **Geometric Assumptions:**
    *   **Aperture is a single point:** The pinhole is assumed to be infinitesimally small, meaning all light rays converge at a single point (the optical center).
    *   **Image plane is flat:** The image is formed on a flat plane behind the pinhole.
    *   **No lens distortion:** This is an idealization; real lenses have distortions that are often corrected or modeled separately.

*   **Coordinate Systems:**
    *   **World Coordinate System:** A fixed reference frame for the 3D scene. Points in this system are represented as $(X_W, Y_W, Z_W)$.
    *   **Camera Coordinate System:** A coordinate system attached to the camera. Typically, the origin is at the optical center, the Z-axis points forward along the optical axis, and the X and Y axes are parallel to the image plane. Points are $(X_C, Y_C, Z_C)$.
    *   **Image Coordinate System:** A 2D coordinate system on the image plane, typically with the origin at the principal point and axes aligned with the pixel rows and columns. Points are $(u, v)$.

*   **Projection Process:**
    1.  A 3D point in the world $(X_W, Y_W, Z_W)$ is transformed into the camera coordinate system $(X_C, Y_C, Z_C)$ using extrinsic parameters.
    2.  This point is then projected onto the image plane using similar triangles. For a point $(X_C, Y_C, Z_C)$ with $Z_C > 0$ (in front of the camera), the projected image plane coordinates $(x', y')$ are:
        $$
        x' = f \frac{X_C}{Z_C}
        $$
        $$
        y' = f \frac{Y_C}{Z_C}
        $$
        where $f$ is the focal length (the distance from the pinhole to the image plane).

*   **Limitations:**
    *   **Resolution:** A true pinhole has infinite depth of field but very low resolution.
    *   **Light Intensity:** Only a small amount of light passes through a tiny pinhole, leading to dim images.
    *   **Lens Distortion:** Real cameras use lenses, which introduce various distortions (radial and tangential) that are not accounted for by the simple pinhole model.

---

### 2. Intrinsic vs. Extrinsic Camera Parameters

Camera parameters describe how a 3D point is mapped to a 2D pixel. They are broadly categorized into two groups:

#### 2.1. Intrinsic Camera Parameters

These parameters describe the **internal geometry and characteristics of the camera itself**, independent of its position or orientation in the world. They relate the 3D coordinates in the camera's coordinate system to pixel coordinates on the image plane.

*   **Key Intrinsic Parameters:**
    *   **Focal Length ($f$):** The distance between the optical center and the image plane. It determines the field of view and the magnification. A larger focal length means a narrower field of view (telephoto effect), and a smaller focal length means a wider field of view (wide-angle effect).
        *   Often represented as a vector $[f_x, f_y]$ where $f_x = f/s_x$ and $f_y = f/s_y$, with $s_x$ and $s_y$ being the physical size of pixels.
    *   **Principal Point ($c$):** The projection of the optical center onto the image plane. Ideally, it's the center of the image, but in practice, it's slightly offset. Represented as $(c_u, c_v)$.
    *   **Pixel Aspect Ratio:** The ratio of the width of a pixel to its height. In most modern cameras, pixels are square, so this ratio is 1. If pixels are not square, $f_x \neq f_y$.
    *   **Skew Coefficient ($s$):** This accounts for non-orthogonality of the image sensor's axes. Ideally, the sensor's x and y axes are perpendicular. If they are not, there's skew. This is often assumed to be zero in simpler models.

*   **Intrinsic Matrix (K):**
    These parameters are combined into a 3x3 matrix, often denoted by **K**, which performs the transformation from 3D camera coordinates to 2D image coordinates (in pixels).

    $$
    \mathbf{K} = \begin{bmatrix}
    f_x & s & c_u \\
    0 & f_y & c_v \\
    0 & 0 & 1
    \end{bmatrix}
    $$

    *   If pixels are square and there's no skew ($s=0$), the matrix simplifies to:
        $$
        \mathbf{K} = \begin{bmatrix}
        f & 0 & c_u \\
        0 & f & c_v \\
        0 & 0 & 1
        \end{bmatrix}
        $$

*   **Why Important?** Intrinsic parameters are crucial for tasks like 3D reconstruction, camera calibration, and understanding the scale and perspective in an image.

#### 2.2. Extrinsic Camera Parameters

These parameters describe the **position and orientation of the camera in the world coordinate system**. They transform points from the world coordinate system to the camera coordinate system.

*   **Key Extrinsic Parameters:**
    *   **Rotation ($\mathbf{R}$):** A 3x3 rotation matrix that describes the orientation of the camera's coordinate system relative to the world coordinate system. It can be represented using Euler angles, rotation vectors (axis-angle), or quaternions.
    *   **Translation ($\mathbf{t}$):** A 3x1 translation vector that describes the position of the camera's optical center in the world coordinate system.

*   **Transformation:**
    A 3D point $\mathbf{P}_W = \begin{bmatrix} X_W \\ Y_W \\ Z_W \end{bmatrix}$ in the world coordinate system is transformed to a 3D point $\mathbf{P}_C = \begin{bmatrix} X_C \\ Y_C \\ Z_C \end{bmatrix}$ in the camera coordinate system using:

    $$
    \mathbf{P}_C = \mathbf{R} \mathbf{P}_W + \mathbf{t}
    $$

    where $\mathbf{R}$ is the rotation matrix and $\mathbf{t}$ is the translation vector.

*   **Why Important?** Extrinsic parameters are essential for knowing where the camera is and how it's looking, enabling us to relate the 3D scene to the camera's view.

---

### 3. The Camera Projection Matrix

The camera projection matrix **P** is a 3x4 matrix that combines the intrinsic and extrinsic parameters to map a 3D point in homogeneous world coordinates to its 2D projection in homogeneous image coordinates.

*   **Homogeneous Coordinates:**
    To represent the projection elegantly, we use homogeneous coordinates. A 3D point $(X, Y, Z)$ is represented as $(X, Y, Z, 1)^T$. A 2D point $(u, v)$ on the image plane is represented as $(u, v, 1)^T$.

*   **Projection Equation:**
    A 3D point $\mathbf{P}_W$ in world coordinates is projected to a 2D image point $\mathbf{p} = (u, v)$ as follows:

    $$
    \lambda \begin{bmatrix} u \\ v \\ 1 \end{bmatrix} = \mathbf{P} \begin{bmatrix} X_W \\ Y_W \\ Z_W \\ 1 \end{bmatrix}
    $$

    Here, $\lambda$ is a non-zero scaling factor. The division by $\lambda$ (which is proportional to $Z_C$) implicitly handles the perspective division.

*   **Construction of P:**
    The projection matrix $\mathbf{P}$ is formed by combining the intrinsic matrix $\mathbf{K}$ and the extrinsic parameters ($\mathbf{R}$, $\mathbf{t}$):

    $$
    \mathbf{P} = \mathbf{K} [\mathbf{R} | \mathbf{t}]
    $$

    where $[\mathbf{R} | \mathbf{t}]$ is a 3x4 matrix formed by concatenating the 3x3 rotation matrix $\mathbf{R}$ and the 3x1 translation vector $\mathbf{t}$.

    $$
    \mathbf{P} = \begin{bmatrix}
    f_x & s & c_u \\
    0 & f_y & c_v \\
    0 & 0 & 1
    \end{bmatrix} \begin{bmatrix}
    r_{11} & r_{12} & r_{13} & t_x \\
    r_{21} & r_{22} & r_{23} & t_y \\
    r_{31} & r_{32} & r_{33} & t_z
    \end{bmatrix}
    $$

    $$
    \mathbf{P} = \begin{bmatrix}
    P_{11} & P_{12} & P_{13} & P_{14} \\
    P_{21} & P_{22} & P_{23} & P_{24} \\
    P_{31} & P_{32} & P_{33} & P_{34}
    \end{bmatrix}
    $$

*   **Example of Projection:**
    Let's consider a simplified scenario where the camera is at the origin, looking down the Z-axis, with a square image plane.
    *   World Coordinate System: Standard X, Y, Z.
    *   Camera Coordinate System: Aligned with World.
    *   Intrinsic Matrix $\mathbf{K}$:
        $$
        \mathbf{K} = \begin{bmatrix}
        f & 0 & 0 \\
        0 & f & 0 \\
        0 & 0 & 1
        \end{bmatrix}
        $$
        (Assuming principal point at origin and focal length $f$)
    *   Extrinsic Parameters: Identity rotation ($\mathbf{R} = \mathbf{I}$) and zero translation ($\mathbf{t} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$). This means the camera is at the world origin, aligned with the world axes.
        $$
        \mathbf{P} = \mathbf{K} [\mathbf{I} | \mathbf{0}] = \begin{bmatrix}
        f & 0 & 0 & 0 \\
        0 & f & 0 & 0 \\
        0 & 0 & 1 & 0
        \end{bmatrix}
        $$
    *   Projection of a point $\mathbf{P}_W = (X_W, Y_W, Z_W, 1)^T$:
        $$
        \lambda \begin{bmatrix} u \\ v \\ 1 \end{bmatrix} = \begin{bmatrix}
        f & 0 & 0 & 0 \\
        0 & f & 0 & 0 \\
        0 & 0 & 1 & 0
        \end{bmatrix} \begin{bmatrix} X_W \\ Y_W \\ Z_W \\ 1 \end{bmatrix} = \begin{bmatrix} f X_W \\ f Y_W \\ Z_W \end{bmatrix}
        $$
    *   This gives:
        $$
        u = f \frac{X_W}{Z_W}
        $$
        $$
        v = f \frac{Y_W}{Z_W}
        $$
        This matches the pinhole camera projection formula derived earlier.

---

### 4. Practice Questions and Exercises

**Question 1:**
Explain the difference between intrinsic and extrinsic camera parameters. Provide an example for each.

**Answer 1:**
*   **Intrinsic parameters** describe the internal properties of the camera, such as focal length and principal point, which are independent of the camera's position or orientation. For example, the **focal length** ($f$) determines how zoomed-in or zoomed-out the image appears.
*   **Extrinsic parameters** describe the camera's pose (position and orientation) in the world. They include **rotation** ($\mathbf{R}$) and **translation** ($\mathbf{t}$). For example, the translation vector $\mathbf{t}$ specifies the camera's $(x, y, z)$ coordinates in the world.

**Question 2:**
If a 3D point in the camera coordinate system is $\mathbf{P}_C = (1, 2, 5)^T$ and the intrinsic matrix is:
$$
\mathbf{K} = \begin{bmatrix}
500 & 0 & 320 \\
0 & 500 & 240 \\
0 & 0 & 1
\end{bmatrix}
$$
What are the 2D image coordinates $(u, v)$ of this point?

**Answer 2:**
We use the projection equation:
$$
\lambda \begin{bmatrix} u \\ v \\ 1 \end{bmatrix} = \mathbf{K} \begin{bmatrix} X_C \\ Y_C \\ Z_C \end{bmatrix}
$$
Here, $\mathbf{P}_C = (X_C, Y_C, Z_C)^T = (1, 2, 5)^T$.
$$
\lambda \begin{bmatrix} u \\ v \\ 1 \end{bmatrix} = \begin{bmatrix}
500 & 0 & 320 \\
0 & 500 & 240 \\
0 & 0 & 1
\end{bmatrix} \begin{bmatrix} 1 \\ 2 \\ 5 \end{bmatrix} = \begin{bmatrix}
500(1) + 0(2) + 320(5) \\
0(1) + 500(2) + 240(5) \\
0(1) + 0(2) + 1(5)
\end{bmatrix} = \begin{bmatrix}
500 + 1600 \\
1000 + 1200 \\
5
\end{bmatrix} = \begin{bmatrix}
2100 \\
2200 \\
5
\end{bmatrix}
$$
So, $\lambda = 5$.
$$
u = \frac{2100}{5} = 420
$$
$$
v = \frac{2200}{5} = 440
$$
The 2D image coordinates are $(u, v) = (420, 440)$.

**Question 3:**
What is the role of the extrinsic parameters in the camera projection matrix?

**Answer 3:**
The extrinsic parameters ($\mathbf{R}$ and $\mathbf{t}$) transform a 3D point from the **world coordinate system** to the **camera coordinate system**. This transformation is applied before the projection onto the 2D image plane. Essentially, they define the camera's "viewpoint" in the 3D world.

**Question 4:**
Consider a camera with focal length $f=600$ pixels, principal point at $(320, 240)$, and square pixels. If the camera is located at $(10, 5, 20)$ in the world coordinate system and is looking directly along the world Z-axis (no rotation), what would be the $\mathbf{P}$ matrix? (Assume world origin is at $(0,0,0)$).

**Answer 4:**
1.  **Intrinsic Matrix (K):**
    $f_x = f = 600$, $f_y = f = 600$, $c_u = 320$, $c_v = 240$, $s = 0$.
    $$
    \mathbf{K} = \begin{bmatrix}
    600 & 0 & 320 \\
    0 & 600 & 240 \\
    0 & 0 & 1
    \end{bmatrix}
    $$
2.  **Extrinsic Parameters (R, t):**
    *   Looking along the world Z-axis with no rotation means the camera's Z-axis aligns with the world's Z-axis, and its X/Y axes align with world X/Y. So, $\mathbf{R} = \mathbf{I}$ (identity matrix).
        $$
        \mathbf{R} = \begin{bmatrix}
        1 & 0 & 0 \\
        0 & 1 & 0 \\
        0 & 0 & 1
        \end{bmatrix}
        $$
    *   The camera is at $(10, 5, 20)$ in the world. This is the position of the optical center in world coordinates. However, the translation vector $\mathbf{t}$ in $\mathbf{P} = \mathbf{K}[\mathbf{R}|\mathbf{t}]$ represents the transformation **from world to camera**. If the camera is at $(10,5,20)$ and looking along $+Z$, its optical center's world coordinates are $(10,5,20)$.
        To get $\mathbf{t}$, we need to consider the transformation: $\mathbf{P}_C = \mathbf{R} \mathbf{P}_W + \mathbf{t}$.
        If the camera is at $\mathbf{C} = (10, 5, 20)$ and orientation is $\mathbf{R}$, then the origin of the camera frame in world coordinates is $\mathbf{C}$.
        The transformation from World to Camera is $\mathbf{P}_C = \mathbf{R}^T (\mathbf{P}_W - \mathbf{C})$.
        So, the $[\mathbf{R}|\mathbf{t}]$ matrix part is $[\mathbf{R}^T | -\mathbf{R}^T \mathbf{C}]$.
        In this case, $\mathbf{R} = \mathbf{I}$, so $\mathbf{R}^T = \mathbf{I}$. $\mathbf{C} = \begin{bmatrix} 10 \\ 5 \\ 20 \end{bmatrix}$.
        Thus, $\mathbf{t} = -\mathbf{I} \begin{bmatrix} 10 \\ 5 \\ 20 \end{bmatrix} = \begin{bmatrix} -10 \\ -5 \\ -20 \end{bmatrix}$.
        *(Self-correction: The $\mathbf{t}$ in the projection matrix $\mathbf{P} = \mathbf{K}[\mathbf{R}|\mathbf{t}]$ is the translation vector that describes the origin of the world frame expressed in the camera frame. If the camera is at $\mathbf{C}$ in world coordinates and $\mathbf{R}$ defines its orientation, then $\mathbf{t} = -\mathbf{R}\mathbf{C}$.)*

    Let's re-evaluate based on the standard definition:
    $\mathbf{P}_C = \mathbf{R} \mathbf{P}_W + \mathbf{t}$ (World to Camera)
    We want the matrix $[\mathbf{R}|\mathbf{t}]$ for the projection equation.
    If the camera is at $\mathbf{C}_{world} = \begin{bmatrix} 10 \\ 5 \\ 20 \end{bmatrix}$ and oriented with $\mathbf{R}_{world \to camera} = \mathbf{I}$:
    The world origin $\mathbf{P}_W = \mathbf{0}$ is at a distance $-\mathbf{C}_{world}$ relative to the camera's origin in its own frame.
    So, $\mathbf{t} = -\mathbf{R} \mathbf{C}_{world}$.
    $\mathbf{t} = -\mathbf{I} \begin{bmatrix} 10 \\ 5 \\ 20 \end{bmatrix} = \begin{bmatrix} -10 \\ -5 \\ -20 \end{bmatrix}$.

    $$
    [\mathbf{R} | \mathbf{t}] = \begin{bmatrix}
    1 & 0 & 0 & -10 \\
    0 & 1 & 0 & -5 \\
    0 & 0 & 1 & -20
    \end{bmatrix}
    $$

3.  **Projection Matrix (P):**
    $$
    \mathbf{P} = \mathbf{K} [\mathbf{R} | \mathbf{t}] = \begin{bmatrix}
    600 & 0 & 320 \\
    0 & 600 & 240 \\
    0 & 0 & 1
    \end{bmatrix} \begin{bmatrix}
    1 & 0 & 0 & -10 \\
    0 & 1 & 0 & -5 \\
    0 & 0 & 1 & -20
    \end{bmatrix}
    $$
    $$
    \mathbf{P} = \begin{bmatrix}
    600(1)+0(0)+320(0) & 600(0)+0(1)+320(0) & 600(0)+0(0)+320(1) & 600(-10)+0(-5)+320(-20) \\
    0(1)+600(0)+240(0) & 0(0)+600(1)+240(0) & 0(0)+600(0)+240(1) & 0(-10)+600(-5)+240(-20) \\
    0(1)+0(0)+1(0) & 0(0)+0(1)+1(0) & 0(0)+0(0)+1(1) & 0(-10)+0(-5)+1(-20)
    \end{bmatrix}
    $$
    $$
    \mathbf{P} = \begin{bmatrix}
    600 & 0 & 320 & -6000 - 6400 \\
    0 & 600 & 240 & -3000 - 4800 \\
    0 & 0 & 1 & -20
    \end{bmatrix}
    $$
    $$
    \mathbf{P} = \begin{bmatrix}
    600 & 0 & 320 & -12400 \\
    0 & 600 & 240 & -7800 \\
    0 & 0 & 1 & -20
    \end{bmatrix}
    $$

---

### Important Points to Remember

*   The **pinhole camera model** is a foundational concept, simplifying the complex optics of real cameras.
*   **Intrinsic parameters** (focal length, principal point, skew) define the camera's internal geometry and are captured in the $\mathbf{K}$ matrix.
*   **Extrinsic parameters** (rotation $\mathbf{R}$, translation $\mathbf{t}$) define the camera's pose in the world.
*   The **camera projection matrix $\mathbf{P}$** combines intrinsic and extrinsic parameters to map 3D world points to 2D image points using homogeneous coordinates.
*   Understanding these parameters is crucial for **camera calibration**, 3D reconstruction, and many other computer vision applications.
*   The translation vector $\mathbf{t}$ in $\mathbf{P} = \mathbf{K}[\mathbf{R}|\mathbf{t}]$ represents the origin of the world frame expressed in the camera frame, which is $\mathbf{t} = -\mathbf{R}\mathbf{C}_{world}$.
