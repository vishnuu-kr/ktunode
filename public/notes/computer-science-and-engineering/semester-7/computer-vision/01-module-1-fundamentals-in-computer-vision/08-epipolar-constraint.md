---
title: "Epipolar Constraint"
subject: "COMPUTER VISION"
module: "Module 1: Fundamentals in Computer Vision :"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c39c"
status: "completed"
scrapedAt: "2026-05-20T17:03:03.761Z"
---
# Computer Vision: Module 1 - Fundamentals

## Topic: Epipolar Constraint

### Learning Outcomes:

*   Understand the geometric relationships between two views of a 3D scene.
*   Define and explain the concepts of epipole, epipolar line, and epipolar plane.
*   Derive and explain the epipolar constraint equation.
*   Understand the significance of the epipolar constraint in various computer vision tasks.
*   Relate the epipolar constraint to the fundamental matrix and essential matrix.

---

### 1. Introduction to Two-View Geometry

Computer vision often involves analyzing a scene from multiple viewpoints. Understanding the geometric relationship between these different views is crucial for tasks like 3D reconstruction, motion estimation, and object tracking. The epipolar constraint provides a fundamental geometric principle that governs this relationship.

**Key Concept:** When we move our viewpoint, the projection of a 3D point onto the image plane changes. The epipolar constraint describes how the projection of a 3D point in one image relates to its projection in another image.

---

### 2. Essential Geometric Concepts

#### 2.1 Epipole

*   **Definition:** The epipole ($e$) is the projection of the optical center of the second camera onto the image plane of the first camera, and vice-versa. In simpler terms, it's the point where the line connecting the two camera centers intersects the image plane of each camera.

*   **Visual Analogy:** Imagine holding two cameras and looking at the same object. If you move one camera, the point where the line connecting the centers of both cameras goes through the image plane of the *other* camera is the epipole.

*   **Properties:**
    *   The epipole is a single point in each image.
    *   It's the "vanishing point" for lines connecting corresponding points in the two images if the cameras are uncalibrated.

#### 2.2 Epipolar Line

*   **Definition:** For a given point $p$ in the first image, its corresponding point $p'$ in the second image *must* lie on a specific line in the second image. This line is called the epipolar line corresponding to $p$.

*   **Geometric Intuition:**
    1.  Consider a 3D point $X$.
    2.  This 3D point is projected to $p$ in the first image and $p'$ in the second image.
    3.  The line connecting the two camera centers ($C_1$ and $C_2$) is the **baseline**.
    4.  The **epipolar plane** is the plane formed by the 3D point $X$, the first camera center $C_1$, and the second camera center $C_2$.
    5.  The epipolar line in the second image is the intersection of the epipolar plane with the second image plane.
    6.  Therefore, if you pick a point $p$ in the first image, its corresponding point $p'$ in the second image *must* lie on the intersection of the epipolar plane (defined by $p$, $C_1$, and $C_2$) and the second image plane.

*   **Properties:**
    *   Every point in one image has a corresponding epipolar line in the other image.
    *   The epipolar line of a point $p$ passes through the epipole of that image. This is because the line connecting $C_1$ and $C_2$ passes through the epipole.

#### 2.3 Epipolar Plane

*   **Definition:** The epipolar plane is the plane that contains the two camera centers ($C_1$, $C_2$) and a 3D point ($X$).

*   **Relationship:** The intersection of the epipolar plane with the image plane of a camera defines the epipolar line for that specific 3D point.

---

### 3. The Epipolar Constraint

The epipolar constraint is a fundamental geometric constraint that relates corresponding points in two different camera views. It states that for any 3D point $X$, its projections $p$ and $p'$ in the two image planes lie on corresponding epipolar lines.

**Derivation (Simplified):**

Let:
*   $C_1$ and $C_2$ be the optical centers of the first and second cameras, respectively.
*   $X$ be a 3D point.
*   $p = (u, v, 1)^T$ be the homogeneous image coordinates of $X$ in the first camera.
*   $p' = (u', v', 1)^T$ be the homogeneous image coordinates of $X$ in the second camera.
*   $P_1$ and $P_2$ be the projection matrices of the first and second cameras, respectively.
    *   $p = P_1 X$
    *   $p' = P_2 X$

The epipolar constraint can be expressed in various ways, most notably using the **Essential Matrix** ($E$) and the **Fundamental Matrix** ($F$).

#### 3.1 The Essential Matrix ($E$)

The Essential Matrix ($E$) relates corresponding points in *calibrated* camera views. It captures the rigid transformation (rotation and translation) between the two camera coordinate systems.

*   **Definition:** If the two cameras are calibrated (intrinsic parameters are known), then the epipolar constraint can be written as:

    $p'^T E p = 0$

    where:
    *   $p$ and $p'$ are the normalized image coordinates (after removing distortion and scaling by focal length).
    *   $E$ is the Essential Matrix.

*   **Properties of the Essential Matrix:**
    *   $E$ is a $3 \times 3$ matrix.
    *   It has rank 2 (due to the constraint that one camera's optical center projected into the other's view must lie on the image plane).
    *   $E$ is the cross-product matrix of the translation vector $t$ between the two cameras, multiplied by the rotation matrix $R$ between them: $E = [t]_\times R$.
        *   $[t]_\times$ is the skew-symmetric matrix of the translation vector $t$:
            $$[t]_\times = \begin{pmatrix} 0 & -t_z & t_y \\ t_z & 0 & -t_x \\ -t_y & t_x & 0 \end{pmatrix}$$
    *   The equation $p'^T E p = 0$ can be rewritten as $p'^T [t]_\times R p = 0$.
    *   Using the property $[a]_\times b = -[b]_\times a$, we can see that $p'^T [t]_\times R p = (Rp')^T [t]_\times p$. This means that $Rp'$ and $p$ are related by the translation $t$, such that $(Rp')^T t = 0$. Geometrically, this means that the vector $Rp'$ is orthogonal to the translation vector $t$. This implies that the transformed point $p'$ in the second camera's frame, when rotated back to the first camera's frame ($Rp'$), lies in the plane defined by the first camera center and the direction of translation, which is indeed the epipolar plane.

*   **Example:** If camera 1 is at the origin ($C_1 = [0,0,0]^T$) and camera 2 is translated along the x-axis by $t_x$ ($C_2 = [t_x, 0, 0]^T$), and there's no rotation ($R=I$), then $t = C_2 - C_1 = [t_x, 0, 0]^T$.
    $$E = [t]_\times R = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & -t_x \\ 0 & t_x & 0 \end{pmatrix} \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix} = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & -t_x \\ 0 & t_x & 0 \end{pmatrix}$$
    The epipolar constraint becomes:
    $p'^T E p = (u', v', 1) \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & -t_x \\ 0 & t_x & 0 \end{pmatrix} (u, v, 1)^T = (u', v', 1) \begin{pmatrix} 0 \\ -t_x v \\ t_x u \end{pmatrix} = -v't_x v + u't_x u = t_x (u'u - v'v) = 0$.
    Assuming $t_x \neq 0$, this simplifies to $u'u - v'v = 0$, or $u'u = v'v$. If $v \neq 0$ and $v' \neq 0$, then $u'/v' = u/v$. This means the ratio of horizontal to vertical image coordinates is the same, implying the points lie on a line passing through the origin in both images.

#### 3.2 The Fundamental Matrix ($F$)

The Fundamental Matrix ($F$) relates corresponding points in *uncalibrated* camera views. It captures the epipolar geometry without requiring knowledge of the camera's intrinsic parameters.

*   **Definition:** For any two corresponding points $p$ and $p'$ in the two image planes, the epipolar constraint can be written as:

    $p'^T F p = 0$

    where:
    *   $p = (u, v, 1)^T$ and $p' = (u', v', 1)^T$ are the pixel coordinates in the image planes.
    *   $F$ is the Fundamental Matrix.

*   **Relationship between $F$ and $E$:**
    If the intrinsic matrices of the cameras are $K_1$ and $K_2$, then:

    $F = K_2^{-T} E K_1^{-1}$

    where $K_1^{-T}$ is the inverse transpose of $K_1$.

*   **Properties of the Fundamental Matrix:**
    *   $F$ is a $3 \times 3$ matrix.
    *   It has rank 2.
    *   The epipolar lines in the second image can be computed as $l' = F p$, where $l'$ is the homogeneous representation of the epipolar line. Similarly, epipolar lines in the first image are $l = F^T p'$.
    *   The epipoles can be found from $F$:
        *   The epipole $e'$ in the second image is the null vector of $F^T$ ($F^T e' = 0$).
        *   The epipole $e$ in the first image is the null vector of $F$ ($F e = 0$).

*   **Example:** Consider two uncalibrated cameras. If we know their pixel correspondence for many points, we can estimate the Fundamental Matrix $F$. Once $F$ is known, for any new point $p$ in the first image, we can find its epipolar line $l'$ in the second image by computing $l' = F p$. The corresponding point $p'$ must lie on this line $l'$.

---

### 4. Significance of the Epipolar Constraint

The epipolar constraint is fundamental to many computer vision tasks:

*   **3D Reconstruction (Stereo Vision):** By finding correspondences between points in two images and using the epipolar constraint, we can triangulate the 3D position of points. The epipolar constraint helps to reduce the search space for correspondences.
*   **Motion Estimation (Structure from Motion):** The epipolar constraint relates the motion of a camera to the structure of the scene. The Essential Matrix directly encodes the relative rotation and translation between camera poses.
*   **Object Tracking:** The epipolar constraint can be used to predict the location of an object in a subsequent frame based on its location in the current frame.
*   **Image Retrieval and Matching:** The epipolar geometry can be used to filter out incorrect matches between features in different images.

---

### 5. Practice Questions and Exercises

**Question 1:**
What is the definition of an epipole?
**Answer:** An epipole is the projection of the optical center of one camera onto the image plane of the other camera.

**Question 2:**
If you have a point $p$ in the first image of a stereo pair, where must its corresponding point $p'$ lie in the second image?
**Answer:** The corresponding point $p'$ must lie on the epipolar line of $p$ in the second image.

**Question 3:**
The epipolar constraint can be expressed as $p'^T E p = 0$. What does the Essential Matrix ($E$) represent?
**Answer:** The Essential Matrix ($E$) represents the rigid transformation (rotation and translation) between two calibrated camera coordinate systems.

**Question 4:**
What is the main difference between the Essential Matrix ($E$) and the Fundamental Matrix ($F$)?
**Answer:** The Essential Matrix ($E$) is used for calibrated cameras (intrinsic parameters known), while the Fundamental Matrix ($F$) is used for uncalibrated cameras (intrinsic parameters unknown).

**Question 5:**
If you know the Fundamental Matrix $F$ and a point $p = (u, v, 1)^T$ in the first image, how would you find the equation of the epipolar line in the second image?
**Answer:** The equation of the epipolar line in the second image is given by $l' = F p$. If $F = \begin{pmatrix} f_{11} & f_{12} & f_{13} \\ f_{21} & f_{22} & f_{23} \\ f_{31} & f_{32} & f_{33} \end{pmatrix}$ and $p = \begin{pmatrix} u \\ v \\ 1 \end{pmatrix}$, then $l' = \begin{pmatrix} f_{11}u + f_{12}v + f_{13} \\ f_{21}u + f_{22}v + f_{23} \\ f_{31}u + f_{32}v + f_{33} \end{pmatrix} = \begin{pmatrix} a \\ b \\ c \end{pmatrix}$. The equation of the epipolar line is $ax' + by' + c = 0$.

**Question 6 (Conceptual):**
Imagine you have two cameras looking at a scene. If you only move the cameras sideways (pure translation along the x-axis) with no rotation, what would be the approximate structure of the epipolar lines and epipoles?
**Answer:**
*   **Epipoles:** The epipole in the first image would be the vanishing point for lines going towards the second camera's position (i.e., the projection of $C_2$ onto image plane 1). Similarly, the epipole in the second image would be the projection of $C_1$ onto image plane 2. If the cameras are aligned along the x-axis and centered, these epipoles would lie on the principal axis.
*   **Epipolar Lines:** For a point $p$ in the first image, its epipolar line $l'$ in the second image will be a horizontal line (assuming the cameras are not tilted and are at the same height). This is because the epipolar plane is defined by the two camera centers and the 3D point, and with pure horizontal translation, this plane is vertical, intersecting the image planes in lines parallel to the y-axis (horizontal lines in image coordinates). The epipolar lines will pass through the epipole of the second image.

---

### 6. Important Points to Remember

*   **Epipolar Constraint:** $p'^T F p = 0$ for uncalibrated cameras, and $p'^T E p = 0$ for calibrated cameras.
*   **$F$ vs. $E$:** $F$ for uncalibrated, $E$ for calibrated. $F = K_2^{-T} E K_1^{-1}$.
*   **Epipole:** Projection of one camera's center onto the other's image plane. It's the vanishing point for rays connecting corresponding points.
*   **Epipolar Line:** The locus of possible corresponding points in the second image for a given point in the first image. It's the intersection of the epipolar plane and the image plane.
*   **Epipolar Plane:** Formed by the two camera centers and the 3D point.
*   **Applications:** Essential for stereo vision, motion estimation, structure from motion, and object tracking.

---
