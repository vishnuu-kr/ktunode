---
title: "Stereopsis - Binocular Camera Geometry"
subject: "COMPUTER VISION"
module: "Module 1: Fundamentals in Computer Vision :"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c39b"
status: "completed"
scrapedAt: "2026-05-20T17:03:03.064Z"
---
# Computer Vision: Module 1 - Fundamentals in Computer Vision
## Topic: Stereopsis - Binocular Camera Geometry

---

### Learning Outcomes:

*   Understand the basic principles of stereopsis and its importance in achieving depth perception.
*   Explain the geometric relationship between two calibrated cameras (stereo rig).
*   Define and explain key concepts such as epipolar geometry, epipolar line, disparity, and triangulation.
*   Derive the fundamental geometric constraints for stereo vision.
*   Understand the process of finding corresponding points between two images.

---

### 1. Introduction to Stereopsis

Stereopsis is the perceptual experience of depth and three-dimensional spatial relationships derived from viewing an object with two eyes. In computer vision, this translates to using two or more cameras to infer depth information about a scene.

*   **Analogy to Human Vision:** Our two eyes are separated by a small distance (interpupillary distance). Each eye captures a slightly different view of the world. The brain then compares these two views to determine the relative positions and distances of objects.
*   **Importance in Computer Vision:**
    *   **Depth Estimation:** The primary goal of stereopsis in computer vision is to estimate the depth of objects in a scene.
    *   **3D Reconstruction:** Accurate depth maps can be used to reconstruct 3D models of objects and environments.
    *   **Robot Navigation:** Essential for robots to understand their surroundings and navigate safely.
    *   **Autonomous Driving:** Crucial for detecting obstacles and estimating their distances.

---

### 2. Binocular Camera Geometry

A stereo vision system typically consists of two calibrated cameras. Calibration is essential to understand the spatial relationship between these cameras.

#### 2.1. Stereo Camera Setup

*   **Stereo Rig:** Two cameras mounted on a rigid frame, ensuring their relative pose remains constant.
*   **Camera Calibration:** The process of determining the intrinsic and extrinsic parameters of each camera.
    *   **Intrinsic Parameters:** Focal length, principal point, lens distortion coefficients. These describe the internal characteristics of a single camera.
    *   **Extrinsic Parameters:** Rotation (R) and Translation (t) vectors that describe the pose (position and orientation) of one camera relative to another.

#### 2.2. Coordinate Systems

*   **World Coordinate System:** A fixed reference frame for the 3D scene.
*   **Camera Coordinate System:** Each camera has its own coordinate system. The origin is typically at the optical center, with the Z-axis pointing along the optical axis.
*   **Image Coordinate System:** A 2D coordinate system on the image plane, usually with the origin at the top-left corner of the image.

#### 2.3. Epipolar Geometry

Epipolar geometry describes the geometric relationship between two images of the same scene taken from different viewpoints. It constrains the search for corresponding points between the two images.

*   **Epipolar Plane:** A plane that contains the optical centers of both cameras and a 3D point in the scene.
*   **Epipolar Line:** The intersection of the epipolar plane with an image plane. For a point $p$ in the left image, its corresponding point $p'$ in the right image must lie on the epipolar line corresponding to $p$.

    *   **Illustration:** Imagine a point $P$ in 3D space. The line connecting $P$ to the optical center of the left camera ($C_1$) intersects the left image plane at point $p$. The line connecting $P$ to the optical center of the right camera ($C_2$) intersects the right image plane at point $p'$. The epipolar plane is defined by $C_1$, $C_2$, and $P$. The epipolar line in the right image is the intersection of this plane with the right image plane. Similarly, the epipolar line in the left image is the intersection of this plane with the left image plane.

#### 2.4. The Fundamental Matrix ($F$)

The Fundamental Matrix relates corresponding points in two uncalibrated stereo images. It encodes the epipolar geometry.

*   **Equation:** For a point $p = [u, v, 1]^T$ in the left image and its corresponding point $p' = [u', v', 1]^T$ in the right image, the following relationship holds:
    $$ p'^T F p = 0 $$
*   **Properties:**
    *   It's a $3 \times 3$ matrix.
    *   It has a rank of 2.
    *   It's invariant to 3D projective transformations.
*   **Calculation:** The Fundamental Matrix can be estimated from at least 7 pairs of corresponding points (using the eight-point algorithm, but 7 are needed for uniqueness due to the rank constraint).

#### 2.5. The Essential Matrix ($E$)

The Essential Matrix relates corresponding points in two calibrated stereo images. It's derived from the Fundamental Matrix and the intrinsic camera matrices.

*   **Relationship with Fundamental Matrix:**
    $$ E = K_2^T F K_1 $$
    where $K_1$ and $K_2$ are the intrinsic matrices of the left and right cameras, respectively.
*   **Equation:** For corresponding points $p_1$ and $p_2$ (in normalized image coordinates, meaning after removing distortion and scaling by focal length), the relationship is:
    $$ p_2^T E p_1 = 0 $$
*   **Properties:**
    *   It's a $3 \times 3$ matrix.
    *   It has a rank of 2.
    *   It encodes the relative rotation (R) and translation (t) between the two cameras.
*   **Decomposition:** The Essential Matrix can be decomposed to recover the relative pose (R and t) between the cameras.

#### 2.6. Stereo Calibration and Relative Pose

*   **Goal of Stereo Calibration:** To determine the extrinsic parameters (R, t) of one camera with respect to the other, and the intrinsic parameters of both cameras.
*   **Common Calibration Setup:** Often, one camera is considered the "reference" camera, and the extrinsic parameters describe the transformation from the reference camera's coordinate system to the other camera's coordinate system.
*   **Recovering R and t:** Once the Essential Matrix is computed and the intrinsic parameters are known, the relative rotation $R$ and translation $t$ can be recovered. There are typically four possible solutions for $R$ and $t$, but physical constraints (e.g., points must be in front of both cameras) help disambiguate the correct solution.

#### 2.7. The Epipolar Constraint

The epipolar constraint is the fundamental geometric constraint for stereo vision. It states that for any point $P$ in the 3D world, its projection $p_1$ in the left image and its projection $p_2$ in the right image must satisfy the epipolar geometry relationship.

*   **With Essential Matrix (calibrated cameras):**
    $$ p_2^T E p_1 = 0 $$
    where $p_1$ and $p_2$ are points in normalized image coordinates.
*   **With Fundamental Matrix (uncalibrated cameras):**
    $$ p_2'^T F p_1' = 0 $$
    where $p_1'$ and $p_2'$ are points in homogeneous pixel coordinates.

---

### 3. Disparity

Disparity is the difference in the observed position of a point in two images. It is directly related to the depth of the point.

*   **Definition:** For a point $P$ in the 3D scene, let its projections in the left and right images be $p_1$ and $p_2$, respectively. The disparity $d$ is often defined as the difference in the horizontal (or vertical) coordinates of $p_1$ and $p_2$.
*   **Horizontal Disparity:**
    $$ d = u_1 - u_2 $$
    where $u_1$ is the horizontal coordinate of $p_1$ and $u_2$ is the horizontal coordinate of $p_2$.
*   **Relationship to Depth:**
    *   **Closer objects have larger disparity.**
    *   **Farther objects have smaller disparity.**
    *   This relationship can be quantified with the stereo camera parameters (baseline and focal length).

#### 3.1. Disparity Map

A disparity map is an image where each pixel's value represents the disparity of the corresponding 3D point.

*   **Generation:** Disparity maps are typically generated by finding corresponding points between stereo images and calculating their disparity.
*   **Usefulness:** Similar to depth maps, disparity maps provide crucial information about the 3D structure of the scene.

---

### 4. Triangulation

Triangulation is the process of determining the 3D coordinates of a point given its projections in two or more calibrated cameras.

*   **The Problem:** We have two cameras with known relative pose ($R$, $t$) and intrinsic parameters ($K_1$, $K_2$). We have found a corresponding point $p_1$ in the left image and $p_2$ in the right image. We want to find the 3D point $P$ that projected to these image points.
*   **Geometric Intuition:** The 3D point $P$ lies on the ray from the optical center of the left camera ($C_1$) through $p_1$. It also lies on the ray from the optical center of the right camera ($C_2$) through $p_2$. In an ideal scenario (with perfect calibration and no noise), these two rays intersect at the 3D point $P$. In practice, due to noise, they might not intersect perfectly, so we find the point in 3D space that is closest to both rays.
*   **Mathematical Formulation:**
    Let $P$ be a 3D point in world coordinates.
    The projection into the left camera is given by:
    $$ s_1 \begin{bmatrix} u_1 \\ v_1 \\ 1 \end{bmatrix} = K_1 [I | 0] P $$
    The projection into the right camera is given by:
    $$ s_2 \begin{bmatrix} u_2 \\ v_2 \\ 1 \end{bmatrix} = K_2 [R | t] P $$
    where $s_1$ and $s_2$ are scale factors.

    We can rewrite these as:
    $$ p_1 \sim K_1 P \quad \text{and} \quad p_2 \sim K_2 [R | t] P $$
    where $p_1$ and $p_2$ are homogeneous image coordinates.

    The triangulation process involves solving these projection equations for $P$, often using techniques like the Direct Linear Transform (DLT) or linear least-squares methods to minimize the reprojection error.

*   **Example:**
    Consider two cameras. Camera 1 is at the origin: $C_1 = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$, $R_1 = I$, $t_1 = 0$.
    Camera 2 is displaced along the x-axis by distance $b$ (baseline): $C_2 = \begin{bmatrix} -b \\ 0 \\ 0 \end{bmatrix}$, $R_2 = I$, $t_2 = \begin{bmatrix} b \\ 0 \\ 0 \end{bmatrix}$.
    Let the intrinsic matrix be $K = \begin{bmatrix} f & 0 & c_x \\ 0 & f & c_y \\ 0 & 0 & 1 \end{bmatrix}$.
    A point $P = [X, Y, Z]^T$ projects to:
    $p_1 = [u_1, v_1]^T$ and $p_2 = [u_2, v_2]^T$.
    In normalized coordinates:
    $p'_1 = K_1^{-1} p_1 = [x_1, y_1, 1]^T$
    $p'_2 = K_2^{-1} p_2 = [x_2, y_2, 1]^T$

    The epipolar constraint $p_2'^T E p_1' = 0$ can be used. For a simplified case with a rectified stereo setup (cameras aligned horizontally, $R=I$, $t=[b, 0, 0]^T$, and normalized coordinates):
    $E = K_2^T \begin{bmatrix} 0 & -t_z & t_y \\ t_z & 0 & -t_x \\ -t_y & t_x & 0 \end{bmatrix} K_1 = \begin{bmatrix} 0 & -b & 0 \\ b & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix}$
    (Assuming $K_1=K_2=K$ and $t=[b,0,0]^T$, $R=I$).
    If we use normalized coordinates directly, and assuming rectified stereo:
    $x_1 = f \frac{X}{Z} + c_x$
    $y_1 = f \frac{Y}{Z} + c_y$
    $x_2 = f \frac{X-b}{Z} + c_x$
    $y_2 = f \frac{Y}{Z} + c_y$

    Using the epipolar constraint directly with these simplified forms:
    $u_1 - u_2 = \frac{fb}{Z}$
    $Z = \frac{fb}{u_1 - u_2} = \frac{fb}{d}$
    This shows that depth is inversely proportional to disparity.

---

### 5. Finding Corresponding Points

This is a crucial step in stereo vision. The goal is to identify the same 3D point in both images.

*   **Matching Strategies:**
    *   **Feature-Based Matching:**
        1.  Detect salient features (e.g., corners using Harris or FAST, keypoints using SIFT, SURF, ORB) in both images.
        2.  Describe these features using descriptors.
        3.  Match features based on descriptor similarity.
        4.  Use geometric constraints (epipolar geometry, epipolar lines) to refine matches and filter outliers (e.g., using RANSAC).
    *   **Area-Based (Dense) Matching:**
        1.  Define a small window (e.g., $3 \times 3$, $5 \times 5$) around a pixel in the left image.
        2.  Search for the best matching window in the right image along the epipolar line.
        3.  Matching criteria include: Sum of Squared Differences (SSD), Sum of Absolute Differences (SAD), Normalized Cross-Correlation (NCC).
        4.  This is computationally more expensive but provides dense disparity information.

*   **Challenges:**
    *   **Occlusions:** Points visible in one image but hidden in the other.
    *   **Lack of Texture:** Uniformly colored regions make matching difficult.
    *   **Lighting Variations:** Changes in illumination can affect descriptor similarity.
    *   **Repetitive Textures:** Ambiguity in matching.

*   **Rectification:** A common preprocessing step for stereo vision.
    *   **Goal:** To transform the images so that epipolar lines become horizontal and collinear with the image rows. This simplifies matching as we only need to search horizontally.
    *   **Process:** Achieved by rotating and shifting the images using the extrinsic calibration parameters. After rectification, corresponding points for a given point $P$ will lie on the same scanline in both images, and the disparity is simply the horizontal difference in their pixel coordinates.

---

### Key Concepts and Definitions Summary:

*   **Stereopsis:** Depth perception from two viewpoints.
*   **Stereo Rig:** Two calibrated cameras with a fixed relative pose.
*   **Epipolar Geometry:** Geometric relationship between two images, defining epipolar lines and planes.
*   **Epipolar Line:** The projection of the epipolar line from the other image onto the current image. A point's correspondence must lie on its epipolar line.
*   **Fundamental Matrix ($F$):** Relates corresponding points in uncalibrated images ($p_2'^T F p_1' = 0$).
*   **Essential Matrix ($E$):** Relates corresponding points in calibrated images ($p_2^T E p_1 = 0$), encodes relative pose.
*   **Disparity:** Difference in the observed position of a point in two images, inversely related to depth.
*   **Disparity Map:** An image representing disparity for each pixel.
*   **Triangulation:** Recovering 3D point coordinates from 2D image correspondences and camera geometry.
*   **Rectification:** Image transformation to simplify stereo matching by aligning epipolar lines horizontally.

---

### Important Points to Remember:

*   **Calibration is Key:** Accurate camera intrinsic and extrinsic parameters are fundamental for reliable stereo vision.
*   **Epipolar Constraint:** Always holds for corresponding points and is the basis for matching and depth estimation.
*   **Disparity-Depth Relationship:** Disparity is inversely proportional to depth.
*   **Matching is the Bottleneck:** Finding accurate correspondences between images is often the most challenging part.
*   **Rectification Simplifies:** Rectified stereo simplifies the matching process significantly.
*   **Noise and Uncertainty:** Real-world data is noisy. Robust algorithms (like RANSAC) and careful handling of uncertainty are important.

---

### Practice Questions and Exercises:

**Question 1:**
Explain the relationship between disparity and depth in a stereo vision system. What happens to the disparity as an object moves further away?

**Question 2:**
Define the Fundamental Matrix ($F$) and the Essential Matrix ($E$). How are they related, and when is each used?

**Question 3:**
Describe the concept of an epipolar line. Why is it important for stereo matching?

**Question 4:**
What is the primary goal of stereo camera rectification? Briefly describe how it simplifies the stereo matching process.

**Question 5 (Conceptual):**
Imagine you have a stereo pair of images of a static scene. You have successfully calibrated the cameras and computed the Fundamental Matrix. You select a point in the left image.
a) Where must the corresponding point for this selected point be located in the right image, according to epipolar geometry?
b) If the selected point is very close to the camera, will its disparity be large or small?

---

### Answers to Practice Questions:

**Answer 1:**
Disparity is the difference in the projected location of a 3D point in two stereo images. It is inversely proportional to depth. As an object moves further away from the stereo camera system, its disparity decreases. This means the difference in its position between the left and right images becomes smaller.

**Answer 2:**
*   **Fundamental Matrix ($F$):** A $3 \times 3$ matrix that relates corresponding points in two uncalibrated images. It encodes the epipolar geometry between the two camera views and is expressed by the equation $p_2'^T F p_1' = 0$, where $p_1'$ and $p_2'$ are homogeneous coordinates of corresponding points.
*   **Essential Matrix ($E$):** A $3 \times 3$ matrix that relates corresponding points in two calibrated images. It encodes the relative rotation ($R$) and translation ($t$) between the two cameras, along with the intrinsic parameters. It is expressed by the equation $p_2^T E p_1 = 0$, where $p_1$ and $p_2$ are corresponding points in normalized image coordinates.
*   **Relationship:** $E = K_2^T F K_1$, where $K_1$ and $K_2$ are the intrinsic matrices of the left and right cameras, respectively. $F$ is used when camera intrinsics are unknown, while $E$ is used when intrinsics are known, allowing for the recovery of relative pose.

**Answer 3:**
An epipolar line is the intersection of the epipolar plane (the plane containing the 3D point and the two camera optical centers) with an image plane. For a point $p$ in one image, its corresponding point $p'$ in the other image must lie on the epipolar line associated with $p$. This constraint significantly reduces the search space for corresponding points, making the matching process more efficient and robust.

**Answer 4:**
The primary goal of stereo camera rectification is to transform the images such that the epipolar lines become horizontal and collinear with the image rows. This simplification means that for any point $P$ in the scene, its corresponding points $p_1$ and $p_2$ in the rectified left and right images will have the same vertical image coordinate ($v_1 = v_2$). The disparity can then be simply calculated as the horizontal difference in their coordinates ($d = u_1 - u_2$). This eliminates the need to search along arbitrary epipolar lines and allows for efficient matching algorithms.

**Answer 5:**
a) The corresponding point in the right image must lie on the epipolar line of the selected point in the left image. This epipolar line is determined by the Fundamental Matrix ($F$) and the coordinates of the selected point.

b) If the selected point is very close to the camera, its disparity will be **large**. As the point gets closer, the difference in its viewing angle from the two cameras increases, leading to a larger shift in its projected position between the two images.
