---
title: "Structure from motion"
subject: "COMPUTER VISION"
module: "Module 3: Shape from X "
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36a47"
status: "completed"
scrapedAt: "2026-05-23T16:33:06.564Z"
---
# Computer Vision: Module 3 - Shape from X: Structure from Motion

## 1. Introduction to Structure from Motion (SfM)

Structure from Motion (SfM) is a fundamental technique in computer vision that aims to simultaneously recover the 3D structure of a scene and the camera poses (position and orientation) from a sequence of 2D images. It's a powerful tool for understanding the geometry of the world and is the basis for many 3D reconstruction and augmented reality applications.

**Key Concepts:**

*   **Reconstruction:** The process of inferring the 3D geometry of a scene.
*   **Camera Pose:** The 6-DoF (Degrees of Freedom) transformation representing the camera's position and orientation in 3D space.
*   **3D Structure:** The arrangement of points or surfaces in 3D space.
*   **Epipolar Geometry:** The geometric relationship between two images of the same scene taken from different viewpoints.
*   **Triangulation:** The process of determining the 3D location of a point given its 2D projections in two or more images.

**Learning Outcomes Covered:**

*   This section introduces the core problem addressed by SfM, which is fundamental to understanding shape from X techniques.

**References:**

*   **Computer Vision: Algorithms and Applications by Richard Szeliski (Chapter 9):** Provides a comprehensive overview of SfM principles, including epipolar geometry and triangulation.
*   **Computer Vision: A Modern Approach by David Forsyth and Jean Ponce (Chapter 15):** Discusses the geometric foundations of SfM.

## 2. Fundamental Concepts for SfM

Before diving into SfM algorithms, it's crucial to understand the underlying geometric principles.

### 2.1. Camera Model

We typically use a **pinhole camera model** to represent the imaging process.

**Key Concepts:**

*   **Intrinsic Parameters:** Properties of the camera itself, such as focal length ($f_x, f_y$), principal point ($c_x, c_y$), and skew. These define how 3D points are projected onto the image plane.
    *   Represented by the **intrinsic matrix K**:
        $$
        K = \begin{bmatrix} f_x & 0 & c_x \\ 0 & f_y & c_y \\ 0 & 0 & 1 \end{bmatrix}
        $$
*   **Extrinsic Parameters:** Properties of the camera's pose in the world, including its rotation (R) and translation (t). These transform a point from world coordinates to camera coordinates.
    *   The transformation is given by $P_{camera} = [R|t] P_{world}$.

**Important Points to Remember:**

*   The projection of a 3D point $X_{world}$ onto the image plane $x_{image}$ can be expressed as:
    $x_{image} \propto K [R|t] X_{world}$
    where $x_{image}$ is a homogeneous point in the image.

**References:**

*   **Computer and Machine Vision by E. R. Davies (Chapter 4):** Explains camera models and projection.
*   **Computer Vision: Algorithms and Applications by Richard Szeliski (Chapter 2):** Details intrinsic and extrinsic camera parameters.

### 2.2. Epipolar Geometry

Epipolar geometry describes the geometric relationship between two views of a 3D scene.

**Key Concepts:**

*   **Epipole:** The projection of the optical center of one camera onto the image plane of the other camera.
*   **Epipolar Line:** For a point in one image, its corresponding point in the other image must lie on a specific line, called the epipolar line.
*   **Fundamental Matrix (F):** A 3x3 matrix that relates corresponding points in two uncalibrated images. It captures the epipolar geometry.
    *   For two corresponding points $x_1$ and $x_2$ in two images, the following constraint holds:
        $x_2^T F x_1 = 0$
*   **Essential Matrix (E):** A 3x3 matrix that relates corresponding points in two calibrated images (intrinsics are known). It is related to the Fundamental Matrix by $E = K_2^T F K_1$.
    *   The Essential Matrix decomposes into rotation (R) and translation (t) between the cameras.

**Important Points to Remember:**

*   The Fundamental Matrix is invariant to affine transformations and camera calibration.
*   The Essential Matrix is invariant to Euclidean transformations (rotation and translation) and depends on known camera intrinsics.

**References:**

*   **Computer Vision: Algorithms and Applications by Richard Szeliski (Chapter 6):** Deep dive into epipolar geometry and the Fundamental/Essential matrices.
*   **Computer and Machine Vision by E. R. Davies (Chapter 11):** Covers stereo vision and epipolar constraints.

### 2.3. Feature Detection and Matching

SfM relies on finding corresponding points (features) in different images.

**Key Concepts:**

*   **Feature Detectors:** Algorithms that identify salient points or regions in an image, such as corners, edges, or blobs. Examples include:
    *   **Harris Corner Detector:** Detects corners by looking for points where intensity changes significantly in all directions. (Connects to CO3)
    *   **SIFT (Scale-Invariant Feature Transform):** Detects and describes local features that are invariant to scale, rotation, and illumination changes.
    *   **SURF (Speeded Up Robust Features):** A faster approximation of SIFT.
    *   **ORB (Oriented FAST and Rotated BRIEF):** A fast binary descriptor suitable for real-time applications.
*   **Feature Descriptors:** Algorithms that create a distinctive vector representation for a detected feature, allowing for matching across different images.
*   **Feature Matching:** The process of finding corresponding features between two images based on their descriptors. Common methods include:
    *   **Brute-Force Matching:** Compares every descriptor in one image to every descriptor in the other image.
    *   **FLANN (Fast Library for Approximate Nearest Neighbors):** An optimized library for fast approximate nearest neighbor searches.

**Important Points to Remember:**

*   The quality of feature detection and matching significantly impacts the accuracy of SfM.
*   Robust feature descriptors are crucial for handling variations in viewpoint, illumination, and scale.

**References:**

*   **Computer Vision: Algorithms and Applications by Richard Szeliski (Chapter 4):** Covers feature detection and matching in detail.
*   **Mastering OpenCV with Practical Computer Vision Projects by Daniel Lelis Baggio, et al:** Practical implementation of feature detectors and matchers using OpenCV.
*   **Programming Computer Vision with Python: Tools and algorithms for analyzing images by Jan Erik Solem (Chapter 7):** Provides Python examples for feature detection and matching.

## 3. SfM Pipeline

A typical SfM pipeline involves several stages:

### 3.1. Feature Detection and Matching

As discussed above, this is the initial step where salient features are found and paired across consecutive images.

### 3.2. Estimating Camera Motion (Relative Pose)

Given a set of matched features, we need to estimate the relative rotation (R) and translation (t) between two camera views.

**Key Concepts:**

*   **Two-View Geometry:** Using matched points to estimate the Fundamental or Essential matrix.
*   **RANSAC (RANdom SAmple Consensus):** A robust estimation technique used to find the best model (e.g., F or E) in the presence of outliers (incorrect matches).
*   **Eight-Point Algorithm:** A classic algorithm to estimate the Fundamental Matrix from at least 8 point correspondences.
*   **Five-Point Algorithm:** A more robust algorithm for estimating the Essential Matrix, requiring only 5 point correspondences, and can handle cases where the translation is unknown.
*   **Decomposition of Essential Matrix:** Once the Essential Matrix (E) is estimated and camera intrinsics are known, E can be decomposed into a rotation matrix (R) and a translation vector (t). There are typically four possible solutions for (R, t), and geometric constraints (e.g., points lying in front of the cameras) are used to disambiguate them.

**Important Points to Remember:**

*   The absolute scale of the translation is ambiguous from two uncalibrated views. This scale can only be recovered with additional information (e.g., known object size, stereo rig calibration).

**References:**

*   **Computer Vision: Algorithms and Applications by Richard Szeliski (Chapter 6):** Detailed explanation of estimating relative pose.
*   **Computer and Machine Vision by E. R. Davies (Chapter 11):** Covers the mathematical derivation of pose estimation.

### 3.3. Triangulation

Once the relative pose between two cameras is known, we can reconstruct the 3D positions of the matched features.

**Key Concepts:**

*   **Triangulation:** Given a 3D point $X$ and its projections $x_1$ and $x_2$ in two images with known camera poses, we can find the 3D location of $X$.
*   The projection equations are:
    $x_1 \propto P_1 X$
    $x_2 \propto P_2 X$
    where $P_1$ and $P_2$ are the projection matrices of the two cameras ($P = K[R|t]$).
*   This forms a system of linear equations that can be solved using methods like the **Direct Linear Transformation (DLT)**.
*   **Non-linear Optimization (Bundle Adjustment):** Minimizing reprojection errors (the difference between the projected 3D point and its actual 2D measurement) to refine both 3D point locations and camera poses.

**Important Points to Remember:**

*   Triangulation is more accurate when the baseline (distance between camera centers) is larger.
*   The accuracy of triangulation depends on the accuracy of feature matches and camera pose estimation.

**References:**

*   **Computer Vision: Algorithms and Applications by Richard Szeliski (Chapter 6):** Covers triangulation methods.
*   **Computer Vision: A Modern Approach by David Forsyth and Jean Ponce (Chapter 15):** Discusses the geometry of triangulation.

### 3.4. Bundle Adjustment

Bundle Adjustment is a non-linear optimization process that refines the estimated 3D structure and camera poses simultaneously.

**Key Concepts:**

*   **Reprojection Error:** The difference between the observed 2D location of a feature point in an image and the projected 3D location of that point onto the same image using the current camera pose and estimated 3D structure.
*   **Objective Function:** The sum of squared reprojection errors over all observed feature points and all images.
*   **Levenberg-Marquardt Algorithm:** A common optimization algorithm used for bundle adjustment.

**Important Points to Remember:**

*   Bundle Adjustment is crucial for achieving accurate and globally consistent 3D reconstructions.
*   It is computationally intensive, especially for large datasets.

**References:**

*   **Computer Vision: Algorithms and Applications by Richard Szeliski (Chapter 9):** Explains the principles and implementation of Bundle Adjustment.
*   **Computer Vision: Models, Learning, and Inference by Simon J D Prince (Chapter 14):** Provides a theoretical perspective on optimization in computer vision.

## 4. Incremental SfM vs. Global SfM

SfM can be implemented in two main ways:

### 4.1. Incremental SfM (Sequential SfM)

This approach builds the 3D reconstruction incrementally, starting with two images and progressively adding new images.

**Pipeline:**

1.  **Initialization:** Estimate relative pose and triangulate features from the first two images.
2.  **Image Registration:** For each new image, find correspondences with existing 3D points.
3.  **Pose Estimation:** Estimate the new camera's pose using the matched features.
4.  **Triangulation:** Triangulate new 3D points using the new camera pose and existing images.
5.  **Bundle Adjustment:** Periodically perform bundle adjustment to refine the entire structure and poses.

**Pros:**

*   Conceptually simpler.
*   Can handle large datasets by processing them sequentially.

**Cons:**

*   Errors can accumulate over time if not managed well.
*   Can be sensitive to initialization.

### 4.2. Global SfM

This approach attempts to estimate all camera poses and 3D structure simultaneously from the entire set of images.

**Pipeline:**

1.  **Two-View Geometry:** Estimate relative poses between all pairs of images.
2.  **Pose Graph Construction:** Create a graph where nodes represent cameras and edges represent relative poses.
3.  **Global Optimization:** Solve for all camera poses by minimizing errors in the pose graph (often using techniques like.");
    *   **Pose-graph SLAM:** Similar concepts apply here.
4.  **Triangulation:** Once poses are fixed, triangulate all points.
5.  **Bundle Adjustment:** Refine the entire structure and poses.

**Pros:**

*   Potentially more accurate as it optimizes globally.
*   Less prone to error accumulation.

**Cons:**

*   Computationally more expensive.
*   Requires all images to be processed together.

**Important Points to Remember:**

*   The choice between incremental and global SfM depends on the application and dataset characteristics.

**References:**

*   **Computer Vision: Algorithms and Applications by Richard Szeliski (Chapter 9):** Discusses the trade-offs between incremental and global approaches.

## 5. Applications of Structure from Motion

SfM has a wide range of applications in computer vision:

*   **3D Reconstruction:** Creating detailed 3D models of objects, scenes, and environments.
*   **Augmented Reality (AR):** Overlaying virtual content onto real-world scenes by understanding the camera's pose and the scene's geometry. (Connects to CO5)
*   **Robotics and Navigation:** Enabling robots to perceive their environment and navigate autonomously. (Connects to CO5)
*   **Visual Odometry:** Estimating the camera's motion by tracking features in a video stream. (Connects to CO4, as optical flow is a related concept for motion estimation)
*   **Camera Calibration:** Estimating intrinsic and extrinsic parameters of cameras.
*   **Mapping and Surveying:** Creating 3D maps of large areas.

**Examples:**

*   **Google Street View:** SfM is used to build 3D representations of streets from vast collections of images.
*   **Photogrammetry Software:** Tools like Agisoft Metashape or RealityCapture use SfM to create detailed 3D models from photographs.

**References:**

*   **Mastering OpenCV with Practical Computer Vision Projects by Daniel Lelis Baggio, et al:** Demonstrates practical applications of SfM with OpenCV.
*   **Computer Vision: Algorithms and Applications by Richard Szeliski (Chapter 9):** Briefly touches upon various applications.

## 6. Practice Questions and Exercises

Here are some questions to test your understanding:

**Question 1:**

What are the two main components that Structure from Motion aims to recover from a sequence of images?

**Answer:**
Structure from Motion aims to recover the **3D structure of the scene** and the **camera poses (position and orientation)**.

---

**Question 2:**

Explain the role of the Fundamental Matrix (F) and the Essential Matrix (E) in SfM. What is the key difference between them?

**Answer:**
*   **Fundamental Matrix (F):** Relates corresponding points in two **uncalibrated** images. It captures the epipolar geometry between the two views and is invariant to affine transformations.
*   **Essential Matrix (E):** Relates corresponding points in two **calibrated** images. It captures the Euclidean transformation (rotation and translation) between the two views and depends on known camera intrinsics.

The key difference is that E requires calibrated cameras (known intrinsics), while F works with uncalibrated cameras. $E = K_2^T F K_1$.

---

**Question 3:**

Describe the purpose of Bundle Adjustment in the SfM pipeline.

**Answer:**
Bundle Adjustment is a non-linear optimization technique that refines both the estimated 3D point locations and the camera poses simultaneously. It minimizes the reprojection errors, leading to a more accurate and globally consistent 3D reconstruction.

---

**Question 4:**

Which feature detection algorithm is known for its scale and rotation invariance?

**Answer:**
SIFT (Scale-Invariant Feature Transform) is known for its scale and rotation invariance.

---

**Question 5 (Conceptual):**

Imagine you are building an SfM system for a mobile robot. You have a monocular camera. What is a major challenge you might face when estimating the 3D structure, and how might you address it?

**Answer:**
A major challenge with a monocular camera is the **ambiguity of scale**. Without knowing the intrinsic parameters (especially focal length) and having only one camera, you can estimate the relative rotation and the direction of translation, but not the absolute magnitude of the translation.

**Possible ways to address this:**
1.  **Camera Calibration:** Accurately calibrate the camera to obtain its intrinsic parameters, including focal length.
2.  **Known Object Size:** If there's an object of known size in the scene, its real-world size can be used to resolve the scale ambiguity.
3.  **Stereo Vision:** Use a stereo camera rig, where the baseline between the cameras provides a scale reference.
4.  **Structure Initialization:** Initialize the structure from the first two views, and if you have an estimate of the baseline or focal length, you can set an initial scale.

---

**Question 6 (CO Alignment):**

How does the concept of SfM relate to **CO4: Apply optical flow algorithms to detect moving objects in a video.**?

**Answer:**
Both SfM and optical flow deal with estimating motion from image sequences.
*   **SfM** focuses on recovering the 3D structure and the camera's ego-motion (its own movement). It typically uses sparse feature correspondences over longer time intervals.
*   **Optical Flow** estimates the apparent motion of pixels or feature points between consecutive frames, often for dense motion fields. It can be used to detect moving objects or to estimate camera motion (visual odometry), which is a component of SfM.

While SfM reconstructs the camera's path and scene structure, optical flow can provide pixel-level motion information that, when aggregated or filtered, can also contribute to estimating camera motion or detecting independent object motion, thus complementing SfM. For example, dense optical flow can be used in visual odometry, which is a form of SfM.

---

**Question 7 (CO Alignment):**

How does SfM contribute to **CO5: Analyse a given scene using appropriate computer vision algorithms to detect/recognize objects and to implement it in real time practical applications.**?

**Answer:**
SfM is crucial for scene analysis in several ways:
1.  **3D Scene Understanding:** By reconstructing the 3D geometry of a scene, SfM provides a richer understanding than 2D images alone. This 3D context can help in object detection and recognition by considering depth information, occlusion, and object pose.
2.  **Camera Pose for Object Recognition:** Knowing the camera's pose in the scene (recovered by SfM) is essential for accurate object recognition and tracking in augmented reality or robotics. It allows for correct placement of virtual objects or for understanding an object's orientation relative to the camera.
3.  **Real-time Applications:** When implemented efficiently (e.g., visual odometry), SfM techniques can provide real-time pose estimation and sparse 3D reconstructions, which are vital for applications like AR, autonomous navigation, and robotic manipulation. These reconstructed scenes or camera trajectories can then be used by other algorithms for object detection or recognition within that 3D context.

## 7. Important Points to Remember

*   **Scale Ambiguity:** Monocular SfM suffers from scale ambiguity.
*   **Robustness:** RANSAC is vital for handling noisy data and outliers in feature matches.
*   **Optimization:** Bundle Adjustment is the gold standard for refining SfM results.
*   **Feature Quality:** The accuracy of SfM heavily relies on good feature detection and matching.
*   **Epipolar Geometry:** Understanding the geometric constraints between views is fundamental.
*   **Applications:** SfM is a cornerstone for 3D reconstruction, AR, and robotics.

This comprehensive set of notes covers the core concepts of Structure from Motion, its pipeline, different approaches, applications, and links them to the provided course outcomes. Remember to refer to the suggested textbooks for deeper theoretical understanding and practical examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
