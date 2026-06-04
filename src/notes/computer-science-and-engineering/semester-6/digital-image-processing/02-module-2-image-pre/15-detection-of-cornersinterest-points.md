---
title: "Detection of corners(interest points)"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 2: Image pre"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bc46"
status: "completed"
scrapedAt: "2026-05-20T16:53:01.170Z"
---
# DIGITAL IMAGE PROCESSING - MODULE 2: IMAGE PRE-PROCESSING - DETECTION OF CORNERS (INTEREST POINTS)

**Learning Outcomes:**

*   Understand the need for corner detection in image processing.
*   Define corners and interest points and differentiate them from other image features.
*   Explain the Harris corner detector algorithm.
*   Implement the Harris corner detector algorithm (conceptually).
*   Understand the properties of corner detectors such as invariance and covariance.
*   Identify the advantages and disadvantages of corner detection techniques.
*   Apply corner detection for image matching and object recognition.

## 1. Introduction: The Need for Corner Detection

*   **Why Corner Detection?** Corner detection is a crucial step in many image processing tasks, serving as a building block for higher-level operations.  It helps in:

    *   **Image Matching:** Finding correspondences between images (e.g., stereo vision, image stitching).
    *   **Object Recognition:**  Identifying objects within an image by matching their features to a database.
    *   **3D Reconstruction:**  Reconstructing 3D scenes from multiple 2D images.
    *   **Motion Tracking:**  Tracking objects as they move in a video sequence.
    *   **Image Registration:**  Aligning images taken from different viewpoints or at different times.

*   **The Challenge:**  Raw image data (pixels) is often too complex to directly work with.  Feature detection, including corner detection, aims to extract meaningful and robust features that are less sensitive to changes in viewpoint, illumination, and other variations.

## 2. Defining Corners and Interest Points

*   **What is a Corner?** Intuitively, a corner is a point in an image where there are significant changes in intensity in multiple directions.  More formally:

    *   A corner is a point whose local neighborhood has two dominant and different edge directions.
    *   Corners are often characterized by high curvature in the image intensity surface.

*   **What are Interest Points?** A broader term encompassing corners, blobs, and other distinctive features.  Interest points are points in an image that are:

    *   **Distinctive:** Easily distinguishable from their surroundings.
    *   **Repeatable:** Detectable under different viewing conditions (e.g., rotation, scale change, illumination variation).
    *   **Localizable:** Their precise location can be determined accurately.

*   **Difference between Corners and Edges:**

    | Feature | Description | Characteristics |
    |---|---|---|
    | **Edge** | Boundary between two regions with different intensity levels | One dominant direction of intensity change |
    | **Corner** | Intersection of two or more edges | Two or more dominant directions of intensity change |

*   **Difference between Corners and Uniform Regions:**

    *   **Uniform Region:** Little to no intensity change in any direction.  Not useful for feature detection.
    *   **Corner:** Significant intensity change in multiple directions.  Highly informative.

**Example:**  Consider a chessboard. The corners of the squares are excellent corner points because moving in any direction from those points will result in a significant change in intensity (from black to white or vice versa). The straight lines between the squares are edges.  A uniform gray area would be a uniform region.

## 3. The Harris Corner Detector Algorithm

*   **Key Idea:** The Harris corner detector analyzes the change in image intensity as a window is shifted in different directions. Corners are characterized by large intensity changes in all directions.

*   **Algorithm Steps:**

    1.  **Image Derivatives:** Calculate the image derivatives, I<sub>x</sub> and I<sub>y</sub>, representing the rate of change of intensity in the x and y directions, respectively.  Commonly achieved using Sobel operators or other gradient filters.

    2.  **Compute Products of Derivatives:** Calculate the following products:
        *   I<sub>x</sub><sup>2</sup>
        *   I<sub>y</sub><sup>2</sup>
        *   I<sub>x</sub>I<sub>y</sub>

    3.  **Gaussian Smoothing:** Apply a Gaussian filter to the products of derivatives. This step averages the derivatives in a neighborhood, making the detector less sensitive to noise and small variations. Let G be the Gaussian kernel.  We compute:
        *   A = G * I<sub>x</sub><sup>2</sup>
        *   B = G * I<sub>y</sub><sup>2</sup>
        *   C = G * I<sub>x</sub>I<sub>y</sub>

    4.  **Calculate the Harris Response:** Compute the Harris response (R) for each pixel using the following formula:

        R = det(M) - k * (trace(M))<sup>2</sup>

        Where:
        *   `M` is the second-moment matrix (also called the structure tensor):

            M =  [A  C]
                [C  B]

        *   `det(M)` is the determinant of M: `det(M) = A*B - C*C`
        *   `trace(M)` is the trace of M: `trace(M) = A + B`
        *   `k` is an empirically determined constant (typically between 0.04 and 0.06).

    5.  **Non-Maximum Suppression (NMS):**  Find local maxima in the Harris response image (R).  This step eliminates multiple detections around the same corner.  A pixel is considered a corner if its R value is a local maximum and above a certain threshold.

    6.  **Thresholding:**  Apply a threshold to the Harris response values.  Only points with a response above the threshold are considered corners.  This eliminates weak responses that are likely due to noise.

*   **Interpreting the Harris Response (R):**

    *   **R > 0:**  A corner. Intensity changes significantly in all directions.
    *   **R ≈ 0:**  A flat region.  Little to no intensity change in any direction.
    *   **R < 0:**  An edge.  Intensity changes significantly in one direction.

## 4. Implementing the Harris Corner Detector (Conceptually)

While full code implementation is beyond the scope of these notes, understand the general flow:

```python
# Conceptual Python-like code (using numpy)
import numpy as np
import scipy.ndimage

def harris_corner_detector(image, k=0.04, sigma=1, threshold=1000):
    """
    Detects corners in an image using the Harris corner detector.

    Args:
        image: Input grayscale image (numpy array).
        k: Harris detector constant (typically 0.04-0.06).
        sigma: Standard deviation for the Gaussian filter.
        threshold: Threshold for corner response.

    Returns:
        A list of (x, y) coordinates of detected corners.
    """

    # 1. Image Derivatives
    Ix = scipy.ndimage.sobel(image, axis=0) # Approximation, more robust implementations may be used
    Iy = scipy.ndimage.sobel(image, axis=1)

    # 2. Compute Products of Derivatives
    Ixx = Ix * Ix
    Iyy = Iy * Iy
    Ixy = Ix * Iy

    # 3. Gaussian Smoothing
    G = scipy.ndimage.gaussian_filter  # For cleaner code
    Sxx = G(Ixx, sigma=sigma)
    Syy = G(Iyy, sigma=sigma)
    Sxy = G(Ixy, sigma=sigma)

    # 4. Calculate Harris Response
    det = (Sxx * Syy) - (Sxy * Sxy)
    trace = Sxx + Syy
    R = det - k * (trace * trace)

    # 5. Non-Maximum Suppression (Conceptual)
    # ... (Implementation of NMS is more complex, typically involves iterating through pixels
    # and comparing to neighbors)

    # 6. Thresholding
    corners = []
    for y in range(image.shape[0]):
        for x in range(image.shape[1]):
            if R[y, x] > threshold:  #Simplified: NMS would typically filter before thresholding
                corners.append((x, y))  # x,y order

    return corners

# Example usage (assuming you have an image loaded)
# image = cv2.imread('image.png', cv2.IMREAD_GRAYSCALE)
# corners = harris_corner_detector(image)
# print(f"Found {len(corners)} corners")
```

**Important Notes on Implementation:**

*   The `scipy.ndimage.sobel` function is a simplified example for derivative calculation.  More robust implementations often use separate x and y Sobel kernels and convolution.
*   Non-Maximum Suppression (NMS) is a crucial step for accurate corner detection.  The conceptual code skips this for brevity.  A proper implementation involves iterating through the Harris response map and suppressing responses that are not local maxima within a defined neighborhood.
*   The `cv2` library (OpenCV) provides optimized implementations of corner detection algorithms (e.g., `cv2.cornerHarris`).

## 5. Properties of Corner Detectors: Invariance and Covariance

*   **Invariance:** A corner detector is invariant to a transformation if it detects the same corner, regardless of the transformation applied to the image.  Ideally, a corner detector should be *invariant* to:

    *   **Illumination Changes:** Changes in brightness or contrast.
    *   **Translation:** Shifting the image.
    *   **Rotation:** Rotating the image.

*   **Covariance:**  A corner detector is covariant to a transformation if, when the image is transformed, the detected corners are also transformed in the same way. Ideally, a corner detector should be *covariant* to:

    *   **Rotation:**  If the image is rotated, the detected corners should also rotate by the same amount.  The Harris corner detector *is* covariant to rotation.
    *   **Scaling (Size):** If the image is scaled (resized), the detected corners should be at the corresponding scaled positions. The Harris corner detector is *not* scale-invariant.

*   **The Harris corner detector *is not* scale-invariant.** This is a significant limitation.  If an object appears smaller or larger in an image, the Harris detector may fail to detect the same corners.

## 6. Advantages and Disadvantages of Corner Detection Techniques

*   **Harris Corner Detector**

    *   **Advantages:**
        *   Computationally efficient.
        *   Rotationally covariant.
        *   Relatively robust to noise.

    *   **Disadvantages:**
        *   **Not scale-invariant.**
        *   Sensitive to thresholding parameters (k and the threshold).
        *   Can be sensitive to significant illumination changes.

## 7. Applications of Corner Detection

*   **Image Stitching/Panorama Creation:** Corner detection is used to find corresponding points between overlapping images, allowing them to be aligned and stitched together to create a panorama.
*   **Object Tracking:**  Corners can be tracked from frame to frame in a video sequence to estimate the motion of an object.
*   **Image Matching:** Corner features can be extracted from two images and matched to find corresponding regions. This is used in image retrieval, object recognition, and stereo vision.
*   **3D Reconstruction:** By finding corresponding corners in multiple images taken from different viewpoints, the 3D structure of a scene can be reconstructed.
*   **Robotics Navigation:** Robots use corner detection for visual odometry (estimating their position and orientation based on visual information).

## 8. Practice Questions and Exercises

1.  **Define a corner in image processing. How does it differ from an edge and a uniform region?**
    *   *Answer:* A corner is a point in an image where there are significant changes in intensity in multiple directions. An edge has significant intensity change in one direction, while a uniform region has little to no intensity change in any direction.

2.  **Describe the steps involved in the Harris corner detector algorithm.**
    *   *Answer:*  (See Section 3 above: Image Derivatives, Compute Products of Derivatives, Gaussian Smoothing, Calculate the Harris Response, Non-Maximum Suppression, Thresholding).

3.  **What is the significance of the Harris response (R) value? How does it help distinguish between corners, edges, and flat regions?**
    *   *Answer:* R > 0 indicates a corner, R ≈ 0 indicates a flat region, and R < 0 indicates an edge.

4.  **Explain the concepts of invariance and covariance in the context of corner detection. Is the Harris corner detector invariant or covariant to rotation and scaling?**
    *   *Answer:* Invariance means a detector finds the same feature regardless of certain transformations. Covariance means the detected features transform in the same way as the image. Harris is covariant to rotation but NOT invariant to scaling.

5.  **What are the limitations of the Harris corner detector? How can these limitations be addressed?**
    *   *Answer:*  The main limitation is lack of scale invariance. This can be partially addressed by using a scale-space representation (e.g., repeatedly smoothing and downsampling the image and running the detector at different scales) or by using a scale-invariant feature detector like SIFT or SURF.  It's also sensitive to thresholding, requiring careful parameter tuning.

6.  **Explain why Non-Maximum Suppression (NMS) is an important step in corner detection.**
    *   *Answer:* NMS eliminates multiple detections around the same corner, resulting in a more precise and accurate set of corner points.  Without NMS, a single corner might be detected as multiple closely located points.

7.  **Suppose you are given an image of a building.  Outline the steps you would take to identify corners in the image using the Harris corner detector (briefly describe each step).**
    *   *Answer:*
        1.  Convert the image to grayscale.
        2.  Compute the image gradients I<sub>x</sub> and I<sub>y</sub> using Sobel operators.
        3.  Calculate I<sub>x</sub><sup>2</sup>, I<sub>y</sub><sup>2</sup>, and I<sub>x</sub>I<sub>y</sub>.
        4.  Apply Gaussian smoothing to the products of gradients (I<sub>x</sub><sup>2</sup>, I<sub>y</sub><sup>2</sup>, I<sub>x</sub>I<sub>y</sub>).
        5.  Compute the Harris response (R) using the formula R = det(M) - k * (trace(M))<sup>2</sup>.
        6.  Apply Non-Maximum Suppression to identify local maxima in the R map.
        7.  Threshold the R values, selecting points above a certain threshold as corners.

## 9. Important Points to Remember

*   Corner detection is a foundational step in many computer vision tasks.
*   The Harris corner detector is a classic and widely used algorithm.
*   Scale invariance is a critical property for many applications.  The Harris detector is *not* scale-invariant.
*   Careful parameter tuning (k, Gaussian filter sigma, threshold) is often necessary to achieve good results.
*   Non-Maximum Suppression (NMS) is essential for accurate corner localization.
