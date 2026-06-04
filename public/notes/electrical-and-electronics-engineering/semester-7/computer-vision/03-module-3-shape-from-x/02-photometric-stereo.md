---
title: "Photometric stereo"
subject: "COMPUTER VISION"
module: "Module 3: Shape from X "
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36a40"
status: "completed"
scrapedAt: "2026-05-23T16:32:56.302Z"
---
# Computer Vision: Module 3: Shape from X - Photometric Stereo

## 1. Introduction to Shape from X

**Concept:** Shape from X refers to a family of techniques in computer vision that aim to recover the 3D shape of an object from one or more 2D images. This module focuses on methods that infer shape based on variations in image intensity, which are influenced by lighting, surface properties, and geometry.

**Why it's important:** Understanding the 3D structure of objects is fundamental for many computer vision tasks, including:
*   Robotics (navigation, manipulation)
*   Medical imaging (analysis, diagnosis)
*   Augmented and Virtual Reality
*   3D reconstruction
*   Object recognition and tracking

**Types of Shape from X:**
*   Shape from Shading
*   Shape from Texture
*   Shape from Defocus
*   Shape from Occlusion
*   **Shape from Lighting (Photometric Stereo)** - Our focus in this topic.

## 2. Photometric Stereo: The Core Idea

**Concept:** Photometric stereo is a technique that recovers the surface normal at each pixel of an object by analyzing how its appearance changes under different illumination conditions. It assumes that the camera's viewpoint is fixed, but the light source direction is varied.

**Key Principle:** The intensity of a pixel in an image is a function of the surface normal at that point, the light source direction, and the surface reflectance properties. By observing the same point on the object under multiple known lighting conditions, we can solve for the unknown surface normal.

**Analogy:** Imagine you're looking at a white ball in a dark room. If you shine a flashlight from the left, one side will be bright, and the other will be in shadow. If you then shine the flashlight from the right, the lighting pattern reverses. By observing these changes, you can infer the curvature of the ball.

## 3. The Photometric Stereo Model

**Assumptions:**
1.  **Lambertian Reflectance:** The surface reflects light equally in all directions. This means the brightness of a surface patch depends only on the angle between the surface normal and the light source direction, not on the viewing direction.
2.  **Single Light Source:** In the basic form, it's assumed there is one dominant light source at a time, and its direction is known.
3.  **Fixed Camera Viewpoint:** The camera's position and orientation are constant.
4.  **Known Light Source Directions:** The direction of the incoming light rays for each image is known.
5.  **Uniform Albedo:** The intrinsic surface color (albedo) is constant across the visible surface.
6.  **No Shadows or Interreflections:** The object is not casting shadows on itself, and light is not reflecting between different parts of the object.

**The Lambertian Reflectance Model:**
The intensity ($I$) of a surface point is given by:

$I = \rho \cdot \mathbf{L} \cdot \mathbf{N}$

Where:
*   $I$: Observed pixel intensity.
*   $\rho$ (rho): Albedo (surface reflectance), assumed to be constant and known (or can be estimated).
*   $\mathbf{L}$: Unit vector representing the direction of the light source.
*   $\mathbf{N}$: Unit vector representing the surface normal at that point.
*   $\cdot$: Dot product.

This model is also known as the **Cosine Law** of illumination.

**Recovering Surface Normals:**

Let $\mathbf{N} = [n_x, n_y, n_z]^T$ be the surface normal vector, where $n_x^2 + n_y^2 + n_z^2 = 1$.
Let $\mathbf{L} = [l_x, l_y, l_z]^T$ be the light source direction vector.

The Lambertian model becomes:
$I = \rho \cdot (l_x \cdot n_x + l_y \cdot n_y + l_z \cdot n_z)$

If we have *k* different images of the same object under *k* different light source directions, we get a system of *k* linear equations:

$I_1 = \rho (\mathbf{L}_1 \cdot \mathbf{N})$
$I_2 = \rho (\mathbf{L}_2 \cdot \mathbf{N})$
...
$I_k = \rho (\mathbf{L}_k \cdot \mathbf{N})$

In matrix form:

$\begin{bmatrix} I_1 \\ I_2 \\ \vdots \\ I_k \end{bmatrix} = \rho \begin{bmatrix} \mathbf{L}_1 \\ \mathbf{L}_2 \\ \vdots \\ \mathbf{L}_k \end{bmatrix} \begin{bmatrix} \mathbf{N} \end{bmatrix}$

Let $\mathbf{I} = [I_1, I_2, \dots, I_k]^T$ be the vector of intensities and $\mathbf{L}_{\text{matrix}}$ be the matrix where each row is a light source vector.

$\mathbf{I} = \rho \mathbf{L}_{\text{matrix}} \mathbf{N}$

**Solving for N:**

If we have at least **three** light sources (i.e., $k \ge 3$), and the light source directions are linearly independent, we can solve for $\mathbf{N}$.

Consider the case with 3 light sources ($k=3$):

$\begin{bmatrix} I_1 \\ I_2 \\ I_3 \end{bmatrix} = \rho \begin{bmatrix} l_{1x} & l_{1y} & l_{1z} \\ l_{2x} & l_{2y} & l_{2z} \\ l_{3x} & l_{3y} & l_{3z} \end{bmatrix} \begin{bmatrix} n_x \\ n_y \\ n_z \end{bmatrix}$

Let $\mathbf{L}_{\text{matrix}3 \times 3}$ be the $3 \times 3$ matrix of light source directions.

$\mathbf{I}_3 = \rho \mathbf{L}_{\text{matrix}3 \times 3} \mathbf{N}$

If $\mathbf{L}_{\text{matrix}3 \times 3}$ is invertible, we can write:

$\mathbf{N} = \frac{1}{\rho} (\mathbf{L}_{\text{matrix}3 \times 3}^{-1}) \mathbf{I}_3$

This allows us to solve for $\mathbf{N}$ up to a scaling factor ($1/\rho$).

**Estimating Albedo ($\rho$) and Normals (N):**

A common approach is to use at least three images. We can write the equations as:

$I_j = \rho \mathbf{L}_j \cdot \mathbf{N}$

Let's consider the magnitudes:
$I_j^2 = \rho^2 (\mathbf{L}_j \cdot \mathbf{N})^2$

If we have more than three light sources (e.g., $k$ sources), we can write:

$\mathbf{I} = \rho \mathbf{L}_{\text{matrix}} \mathbf{N}$

We can solve for the direction vector $[\rho n_x, \rho n_y, \rho n_z]$ by solving the linear system:

$\begin{bmatrix} I_1 \\ I_2 \\ \vdots \\ I_k \end{bmatrix} = \begin{bmatrix} l_{1x} & l_{1y} & l_{1z} \\ l_{2x} & l_{2y} & l_{2z} \\ \vdots & \vdots & \vdots \\ l_{kx} & l_{ky} & l_{kz} \end{bmatrix} \begin{bmatrix} \rho n_x \\ \rho n_y \\ \rho n_z \end{bmatrix}$

Let $\mathbf{X} = [\rho n_x, \rho n_y, \rho n_z]^T$.
Then $\mathbf{I} = \mathbf{L}_{\text{matrix}} \mathbf{X}$.

If $k > 3$, this is an overdetermined system. We can solve for $\mathbf{X}$ using the least squares method:

$\mathbf{X} = (\mathbf{L}_{\text{matrix}}^T \mathbf{L}_{\text{matrix}})^{-1} \mathbf{L}_{\text{matrix}}^T \mathbf{I}$

Once $\mathbf{X} = [\rho n_x, \rho n_y, \rho n_z]^T$ is found, we can recover the surface normal $\mathbf{N}$ and the albedo $\rho$:

$\mathbf{N} = \frac{\mathbf{X}}{||\mathbf{X}||_2}$
$\rho = ||\mathbf{X}||_2$

Where $||\mathbf{X}||_2 = \sqrt{(\rho n_x)^2 + (\rho n_y)^2 + (\rho n_z)^2} = \sqrt{\rho^2 (n_x^2 + n_y^2 + n_z^2)} = \rho$.

**Important Point:** The magnitude of the vector $\mathbf{X}$ gives us the albedo $\rho$, and the normalized vector $\mathbf{X} / ||\mathbf{X}||_2$ gives us the surface normal $\mathbf{N}$.

## 4. Practical Considerations and Extensions

**a) Estimating Light Source Directions:**
*   This is a critical step. Light directions can be determined experimentally by placing a calibrated sphere in the scene and observing its highlight under each light source. The highlight's position reveals the direction from which the light is coming. (Davies, 2012, Chapter 7)
*   Alternatively, if the light source is a point source at infinity, its direction can be estimated from its position and the camera's intrinsic parameters.

**b) Handling Non-Lambertian Surfaces:**
*   Real-world surfaces are often not perfectly Lambertian. They might have specular highlights (like polished metal) or complex Bidirectional Reflectance Distribution Functions (BRDFs).
*   Photometric stereo is less accurate for surfaces with strong specular components because the intensity now also depends on the viewing direction.
*   Advanced techniques extend photometric stereo to handle more complex reflectance models (e.g., using more images or incorporating BRDF models). (Szeliski, 2011, Chapter 6)

**c) Dealing with Shadows and Interreflections:**
*   Shadows occur when a surface normal is not facing the light source. This will lead to a zero or low intensity, which can be misinterpreted.
*   Interreflections occur when light bounces between surfaces. This violates the assumption of a single light source illuminating the surface.
*   These effects can be mitigated by using more sophisticated models or by selecting imaging conditions where they are minimized.

**d) Albedo Estimation:**
*   In many applications, the albedo (surface color) is not uniform. If the albedo varies, the estimation of normals can be biased.
*   If albedo is unknown and variable, we need more than three images to simultaneously solve for normals and albedo, or we need to assume a specific albedo distribution.

**e) Recovering Depth:**
*   Photometric stereo directly recovers **surface normals**, not depth maps.
*   To obtain a 3D shape (depth map), we need to integrate the surface normals. This process is called **depth integration**.
*   **Depth Integration:**
    *   Let the surface be represented by $z(x, y)$. The surface normal $\mathbf{N} = [n_x, n_y, n_z]$ can be related to the gradients of $z$ as:
        $\mathbf{N} \propto [-\frac{\partial z}{\partial x}, -\frac{\partial z}{\partial y}, 1]$
    *   We have the components of the normal vector ($n_x, n_y, n_z$) from photometric stereo.
    *   The partial derivatives of $z$ can be approximated by $\frac{\partial z}{\partial x} \approx \frac{n_x}{n_z}$ and $\frac{\partial z}{\partial y} \approx \frac{n_y}{n_z}$.
    *   We need to integrate these gradients: $z(x, y) = \iint \frac{\partial z}{\partial x} dx dy$ and $z(x, y) = \iint \frac{\partial z}{\partial y} dy dx$.
    *   **Challenges in Integration:**
        *   **Noise:** Small errors in the estimated normals can accumulate significantly during integration.
        *   **Boundary Conditions:** The integration process requires an initial depth value (e.g., at the boundary of the object), which is often unknown.
        *   **Poisson Equation:** Depth integration can be formulated as solving a Poisson equation. Various numerical methods (e.g., finite differences) are used. (Forsyth & Ponce, 2002, Chapter 12)

**f) Improving Accuracy:**
*   **More Light Sources:** Using more than three light sources improves the robustness of the solution to noise and allows for better albedo estimation.
*   **Calibrated Lighting:** Precise knowledge of light source directions is crucial.
*   **Known Albedo:** If the albedo of the material is known beforehand, it simplifies the problem.

## 5. Applications of Photometric Stereo

*   **Surface Inspection:** Detecting defects and anomalies on manufactured parts.
*   **Material Characterization:** Analyzing the reflective properties of surfaces.
*   **3D Measurement:** Reconstructing the shape of objects for quality control or cultural heritage preservation.
*   **Medical Imaging:** Analyzing tissue surfaces.

## 6. Relation to Course Outcomes

*   **CO1 (Digital Filtering):** While not directly filtering, the image acquisition process in photometric stereo involves capturing intensity values, which are inherently digital. Noise reduction techniques (a form of filtering) can be applied to the input images.
*   **CO2 (Morphological/Boundary Operators):** After recovering the shape, morphological operations might be used for smoothing the reconstructed surface or cleaning up boundary artifacts. Boundary detection could be used to segment the object from the background before applying photometric stereo.
*   **CO3 (Edge/Corner Detection):** Not directly used in the core photometric stereo calculation, but edge detection could be used to segment the object of interest from the background to isolate the region for shape analysis.
*   **CO4 (Optical Flow):** Not directly related to photometric stereo, as photometric stereo assumes a static scene with varying illumination, not moving objects.
*   **CO5 (Analyze a given scene):** Photometric stereo is a key algorithm for analyzing a scene to understand the 3D geometry of objects within it. It allows for detailed shape analysis based on illumination variations.

## 7. Key Concepts and Definitions Summary

*   **Photometric Stereo:** Recovering surface normals from multiple images under varying known lighting.
*   **Lambertian Surface:** A surface that reflects light equally in all directions.
*   **Surface Normal:** A vector perpendicular to the surface at a given point.
*   **Albedo:** The intrinsic reflectance of a surface (its color and how brightly it reflects light uniformly).
*   **Light Source Direction:** The vector pointing from the surface point towards the light source.
*   **Depth Integration:** The process of calculating a 3D depth map from surface normals.
*   **BRDF (Bidirectional Reflectance Distribution Function):** A function describing how light is reflected from a surface, considering both incoming and outgoing directions.

## 8. Important Points to Remember

*   Photometric stereo recovers **surface normals**, not depth directly.
*   At least **three** images with known, linearly independent light source directions are required.
*   The **Lambertian reflectance model** is the fundamental assumption.
*   **Albedo** is assumed constant for the basic method.
*   Accurate **light source direction estimation** is crucial.
*   **Depth integration** is a separate step with its own challenges (noise, boundary conditions).
*   Real-world surfaces often deviate from Lambertian behavior, impacting accuracy.

## 9. Practice Questions and Exercises

**Question 1:**
What are the core assumptions of the basic photometric stereo method? Explain why each assumption is important.

**Answer:**
1.  **Lambertian Reflectance:** Assumes surface reflects light equally in all directions. This simplifies the intensity model to $I = \rho \cdot \mathbf{L} \cdot \mathbf{N}$, allowing us to establish a linear relationship between intensity and surface normals.
2.  **Single Light Source:** Assumes only one dominant light source is active at a time. This ensures that the intensity measured is solely due to that specific light source, simplifying the system of equations.
3.  **Fixed Camera Viewpoint:** Assumes the camera's position and orientation remain constant. This means the projection of the 3D surface onto the 2D image plane is consistent across all images, allowing us to analyze the same physical points.
4.  **Known Light Source Directions:** Assumes the direction vectors of all light sources used are precisely known. This is essential for setting up the linear system of equations $\mathbf{I} = \rho \mathbf{L}_{\text{matrix}} \mathbf{N}$ correctly.
5.  **Uniform Albedo:** Assumes the surface's intrinsic reflectivity (color) is constant across the observed area. If albedo varies, the estimated normals will be biased, as the intensity change might be due to albedo variation rather than normal change.
6.  **No Shadows or Interreflections:** Assumes surfaces are fully illuminated and light does not bounce between surfaces. Shadows lead to incorrect intensity readings (appearing darker than they should), and interreflections violate the single-source assumption, both distorting the recovered normals.

**Question 2:**
If you have a surface with a known Lambertian reflectance and you capture it under 4 different light source directions, how would you go about estimating the surface normal at a pixel?

**Answer:**
1.  **Data Acquisition:** Capture 4 images ($I_1, I_2, I_3, I_4$) of the object from the same viewpoint, each under a different, known light source direction ($\mathbf{L}_1, \mathbf{L}_2, \mathbf{L}_3, \mathbf{L}_4$).
2.  **Formulate the System:** For each pixel $(x, y)$, let its intensity in image $j$ be $I_j(x, y)$. The Lambertian model for this pixel is $I_j(x, y) = \rho(x, y) \cdot (\mathbf{L}_j \cdot \mathbf{N}(x, y))$.
3.  **Set up the Matrix Equation:** We can rewrite this for all 4 lights as a system of linear equations:
    $$
    \begin{bmatrix} I_1(x, y) \\ I_2(x, y) \\ I_3(x, y) \\ I_4(x, y) \end{bmatrix}
    =
    \begin{bmatrix} \mathbf{L}_1 \\ \mathbf{L}_2 \\ \mathbf{L}_3 \\ \mathbf{L}_4 \end{bmatrix}
    \begin{bmatrix} \rho(x, y) n_x(x, y) \\ \rho(x, y) n_y(x, y) \\ \rho(x, y) n_z(x, y) \end{bmatrix}
    $$
    Let $\mathbf{I} = [I_1, I_2, I_3, I_4]^T$ and $\mathbf{L}_{\text{matrix}}$ be the $4 \times 3$ matrix of light directions. Let $\mathbf{X} = [\rho n_x, \rho n_y, \rho n_z]^T$. The equation becomes $\mathbf{I} = \mathbf{L}_{\text{matrix}} \mathbf{X}$.
4.  **Solve using Least Squares:** Since we have more equations than unknowns (4 equations, 3 unknowns in $\mathbf{X}$), this is an overdetermined system. We solve for $\mathbf{X}$ using the pseudo-inverse via the normal equations:
    $$
    \mathbf{X} = (\mathbf{L}_{\text{matrix}}^T \mathbf{L}_{\text{matrix}})^{-1} \mathbf{L}_{\text{matrix}}^T \mathbf{I}
    $$
5.  **Recover Albedo and Normal:** Once $\mathbf{X} = [\rho n_x, \rho n_y, \rho n_z]^T$ is computed for the pixel:
    *   The albedo is $\rho(x, y) = ||\mathbf{X}||_2 = \sqrt{(\rho n_x)^2 + (\rho n_y)^2 + (\rho n_z)^2}$.
    *   The surface normal is $\mathbf{N}(x, y) = \frac{\mathbf{X}}{||\mathbf{X}||_2}$.
    This process is repeated for every pixel to obtain the normal map and albedo map.

**Question 3 (Conceptual):**
What would happen to the recovered surface normals if the surface was highly specular (like polished metal) instead of Lambertian?

**Answer:**
If the surface is highly specular, the **Helmholtz reciprocity** (for diffuse reflection) and the **specular reflection law** (angle of incidence equals angle of reflection) come into play. The intensity of reflection would not only depend on the surface normal and light direction but also strongly on the **viewing direction**. The basic Lambertian model $I = \rho \cdot \mathbf{L} \cdot \mathbf{N}$ would no longer be accurate. As a result, the photometric stereo method based on this model would likely produce incorrect and unreliable surface normal estimates. The assumption of intensity being independent of the viewing direction would be violated, making it difficult to isolate the effect of surface orientation changes. Advanced models or more images might be needed to handle specular surfaces. (Szeliski, 2011, Chapter 6, discusses reflectance models).

---
This concludes the study notes for Photometric Stereo. Ensure you understand the mathematical formulation and the practical challenges involved.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
