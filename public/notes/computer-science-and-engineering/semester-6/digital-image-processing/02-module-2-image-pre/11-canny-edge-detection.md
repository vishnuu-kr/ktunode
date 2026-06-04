---
title: "Canny Edge Detection"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 2: Image pre"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bc42"
status: "completed"
scrapedAt: "2026-05-20T16:52:58.217Z"
---
# DIGITAL IMAGE PROCESSING: Module 2 - Image Pre-processing: Canny Edge Detection

These notes cover the Canny Edge Detection algorithm, a crucial technique in image pre-processing.

**Learning Outcomes:**

*   Understand the underlying principles of edge detection.
*   Explain the Canny Edge Detection algorithm step-by-step.
*   Describe the purpose of each stage in the algorithm.
*   Implement Canny Edge Detection using software libraries (e.g., OpenCV).
*   Analyze the effects of different parameter choices on the output.
*   Compare Canny Edge Detection with other edge detection methods (e.g., Sobel, Prewitt).

**1. Introduction to Edge Detection**

*   **Definition:** Edge detection is a fundamental image processing technique used to identify boundaries in an image where the image brightness changes sharply. These changes often correspond to significant events and changes in the image's properties.
*   **Importance:**
    *   Feature extraction for object recognition.
    *   Image segmentation.
    *   Image analysis.
    *   Noise reduction prior to analysis.
*   **Types of Edges:**
    *   **Step Edge:** A sharp change in intensity from one level to another.
    *   **Ramp Edge:** A gradual change in intensity over a short distance.
    *   **Roof Edge:** Two ramp edges that meet at a peak.
    *   **Ridge Edge:** A bright line on a dark background, or vice-versa.
*   **Challenges:**
    *   Noise can create false edges.
    *   Blurred images make edge localization difficult.
    *   Choosing appropriate thresholds to distinguish real edges from noise.

**2. The Canny Edge Detection Algorithm**

The Canny edge detector is widely regarded as one of the most effective edge detection algorithms. It aims to satisfy the following criteria:

*   **Low error rate:** All edges in the image should be found, and there should be no spurious responses.
*   **Good localization:** The detected edges should be as close as possible to the true edges.
*   **Minimal response:** Each edge should only be marked once.

Here's a detailed breakdown of the algorithm's steps:

**2.1 Step 1: Noise Reduction (Gaussian Filtering)**

*   **Purpose:** Reduce noise and unwanted detail in the image. Noise can be amplified by the edge detection process, so it's crucial to filter it out beforehand.
*   **Method:** Convolve the image with a Gaussian kernel (a weighted average). The kernel size determines the extent of the blurring. Larger kernels result in more blurring.
*   **Gaussian Kernel:**  A Gaussian kernel is defined by the following equation:

    G(x, y) =  (1 / (2πσ<sup>2</sup>)) * e<sup>-(x<sup>2</sup> + y<sup>2</sup>) / (2σ<sup>2</sup>)</sup>

    Where:
        *   (x, y) are the coordinates of a point in the kernel.
        *   σ (sigma) is the standard deviation, which controls the degree of smoothing. Larger sigma values result in greater smoothing.
*   **Example:** A 5x5 Gaussian kernel with σ = 1.0 might look like this:

    ```
    [ 0.0030  0.0133  0.0219  0.0133  0.0030]
    [ 0.0133  0.0596  0.0983  0.0596  0.0133]
    [ 0.0219  0.0983  0.1621  0.0983  0.0219]
    [ 0.0133  0.0596  0.0983  0.0596  0.0133]
    [ 0.0030  0.0133  0.0219  0.0133  0.0030]
    ```
*   **Important Point:** The choice of kernel size and sigma value depends on the amount of noise in the image. Higher noise levels require stronger smoothing (larger sigma).

**2.2 Step 2: Finding the Intensity Gradient**

*   **Purpose:** Determine the edge strength and direction at each pixel.  This step identifies areas where the image intensity is changing rapidly.
*   **Method:** Calculate the gradient of the image using derivatives.  The Sobel operator is commonly used for this purpose.
*   **Sobel Operator:**  Approximates the gradient in the x and y directions using two 3x3 kernels:

    *   **G<sub>x</sub>:**  [-1 0 1; -2 0 2; -1 0 1]
    *   **G<sub>y</sub>:**  [-1 -2 -1; 0 0 0; 1 2 1]
*   **Gradient Calculation:**
    *   Convolve the image with G<sub>x</sub> to get the gradient in the x-direction (I<sub>x</sub>).
    *   Convolve the image with G<sub>y</sub> to get the gradient in the y-direction (I<sub>y</sub>).
    *   **Edge Strength (Magnitude):** G = √(I<sub>x</sub><sup>2</sup> + I<sub>y</sub><sup>2</sup>)
    *   **Edge Direction (Angle):** θ = arctan(I<sub>y</sub> / I<sub>x</sub>) (typically converted to degrees, range 0-180).
*   **Important Point:** The arctangent function needs to be handled carefully to avoid division by zero and to ensure the correct quadrant for the angle.

**2.3 Step 3: Non-Maximum Suppression (NMS)**

*   **Purpose:** Thin out the detected edges. The gradient magnitude at each pixel represents the edge strength, but many pixels around the "true" edge will also have high magnitudes. NMS suppresses non-maximum pixels, leaving only the sharpest edge response.
*   **Method:**
    1.  **Quantize the Edge Direction:** Divide the edge direction (θ) into discrete intervals, typically 4 directions (0, 45, 90, 135 degrees).
    2.  **Compare the Gradient Magnitude:**  For each pixel, compare its gradient magnitude (G) with the gradient magnitudes of its two neighbors along the direction of the edge.
    3.  **Suppress Non-Maximum Pixels:** If the pixel's gradient magnitude is *not* a local maximum (i.e., it's smaller than one or both of its neighbors), set its gradient magnitude to zero.
*   **Example:** If a pixel has an edge direction of 45 degrees, compare its magnitude with the magnitudes of its top-right and bottom-left neighbors.
*   **Important Point:** NMS helps to ensure that the detected edges are thin and well-defined.

**2.4 Step 4: Double Thresholding**

*   **Purpose:** Classify edge pixels based on their gradient magnitude and two thresholds: a high threshold (T<sub>high</sub>) and a low threshold (T<sub>low</sub>).
*   **Classification:**
    *   **Strong Edges:** Pixels with gradient magnitude greater than T<sub>high</sub> are considered strong edge pixels. These are likely to be true edges.
    *   **Weak Edges:** Pixels with gradient magnitude between T<sub>low</sub> and T<sub>high</sub> are considered weak edge pixels. These may be true edges or noise.
    *   **Non-Edges:** Pixels with gradient magnitude less than T<sub>low</sub> are considered non-edge pixels and are discarded.
*   **Important Point:** The choice of T<sub>high</sub> and T<sub>low</sub> is crucial.  A high T<sub>high</sub> will result in fewer edges but more reliable ones. A low T<sub>low</sub> will detect more edges, but may also include more false positives.  A common heuristic is to choose T<sub>low</sub> as 0.4*T<sub>high</sub>.

**2.5 Step 5: Edge Tracking by Hysteresis**

*   **Purpose:**  Resolve the ambiguity of weak edge pixels by linking them to strong edge pixels.
*   **Method:**
    1.  Start with a strong edge pixel.
    2.  Examine its 8-connected neighbors (pixels directly adjacent to it).
    3.  If a neighbor is a weak edge pixel, include it in the edge chain and recursively apply this process to the neighbor.
    4.  Continue until no more weak edge pixels can be connected to the edge chain.
*   **Important Point:** Hysteresis helps to connect broken edges and to remove isolated weak edges that are likely due to noise. This significantly improves the quality of the final edge map.

**3. Canny Edge Detection in OpenCV (Python Example)**

```python
import cv2
import numpy as np

# Load the image
image = cv2.imread('your_image.jpg', cv2.IMREAD_GRAYSCALE) # Load as grayscale

# Check if the image was loaded successfully
if image is None:
    print("Error: Could not load image.  Check the file path.")
    exit()

# Apply Canny edge detection
edges = cv2.Canny(image, threshold1=100, threshold2=200)

# Display the original and edge-detected images
cv2.imshow('Original Image', image)
cv2.imshow('Canny Edges', edges)
cv2.waitKey(0)  # Wait for a key press
cv2.destroyAllWindows()
```

**Explanation:**

*   `cv2.imread()`: Loads the image. `cv2.IMREAD_GRAYSCALE` converts the image to grayscale.
*   `cv2.Canny()`:  Performs the Canny edge detection.
    *   `image`: The input image.
    *   `threshold1`: The low threshold (T<sub>low</sub>).
    *   `threshold2`: The high threshold (T<sub>high</sub>).
    *   `apertureSize` (optional): The size of the Sobel kernel (default is 3).  Should be an odd number.
    *   `L2gradient` (optional):  A boolean flag indicating whether to use a more accurate L2 norm (Euclidean distance) for the gradient magnitude calculation.  `True` is generally preferred for better accuracy, but is slightly slower.  The default is `False`.

**4. Effects of Parameter Choices**

*   **Gaussian Kernel Size (σ):**
    *   **Small σ:** Less blurring, more sensitive to noise, may detect spurious edges.
    *   **Large σ:** More blurring, less sensitive to noise, may miss fine details.
*   **High Threshold (T<sub>high</sub>):**
    *   **High T<sub>high</sub>:** Fewer edges, but more reliable.  May miss some true edges.
    *   **Low T<sub>high</sub>:** More edges, but more likely to include false positives.
*   **Low Threshold (T<sub>low</sub>):**
    *   **High T<sub>low</sub>:** Fewer edges, but less likely to include false positives.
    *   **Low T<sub>low</sub>:** More edges, but more likely to include false positives.

**5. Comparison with Other Edge Detection Methods**

| Feature          | Canny Edge Detection                                     | Sobel Operator                                         | Prewitt Operator                                        | Laplacian of Gaussian (LoG)                             |
| ---------------- | -------------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------- | ------------------------------------------------------- |
| Noise Sensitivity | Reduced by Gaussian filtering                          | More sensitive                                           | More sensitive                                          | Reduced by Gaussian filtering                          |
| Edge Thinning    | Non-Maximum Suppression                                  | Requires additional thinning steps                        | Requires additional thinning steps                       | Zero-crossings used for edge detection                  |
| Thresholding     | Double thresholding with hysteresis                     | Single thresholding                                     | Single thresholding                                     | Single thresholding                                     |
| Performance      | Generally considered the most accurate edge detector      | Faster computation                                       | Faster computation                                      | Computationally intensive                               |
| Complexity       | More complex (multiple steps)                           | Simpler implementation                                  | Simpler implementation                                  | More complex (combines Gaussian and Laplacian)           |
| Characteristics  | Good localization, low error rate, single edge response  | Simple to implement, sensitive to noise                 | Simple to implement, sensitive to noise                 | Isotropic, sensitive to scale                            |

**6. Important Points to Remember**

*   Canny edge detection is a multi-stage algorithm, each stage contributing to the overall performance.
*   Parameter tuning is crucial for optimal results. The best parameters depend on the specific image and the desired application.
*   The Gaussian filter reduces noise but also blurs the image, which can affect edge localization. A balance must be struck.
*   Non-maximum suppression is essential for thinning the edges.
*   Double thresholding and hysteresis linking help to connect broken edges and reduce false positives.
*   OpenCV provides a convenient function for implementing Canny edge detection.

**7. Practice Questions/Exercises**

1.  **Question:** Explain the purpose of Gaussian filtering in Canny edge detection and how the standard deviation (σ) affects the results.
    *   **Answer:** Gaussian filtering reduces noise in the image before edge detection. A larger σ results in more blurring and better noise reduction, but it can also blur edges and reduce localization accuracy. A smaller σ results in less blurring but is more sensitive to noise.

2.  **Question:** What is non-maximum suppression and why is it necessary?
    *   **Answer:** Non-maximum suppression (NMS) is a process of thinning the detected edges. It compares the gradient magnitude of each pixel with its neighbors along the edge direction. If the pixel's magnitude is not a local maximum, it is suppressed (set to zero). NMS is necessary because the gradient magnitude around the "true" edge is often high for multiple pixels, resulting in thick edges without NMS.

3.  **Question:** Explain the purpose of double thresholding and hysteresis in Canny edge detection.
    *   **Answer:** Double thresholding classifies edge pixels into strong, weak, and non-edge pixels based on two thresholds (T<sub>high</sub> and T<sub>low</sub>).  Strong edges are definitely edges, and non-edges are definitely not. Weak edges are potential edges. Hysteresis connects weak edge pixels to strong edge pixels, effectively extending edge chains and reducing the number of false positives.

4.  **Question:**  Using OpenCV, write a Python code snippet to apply Canny edge detection to an image named 'building.jpg' with a low threshold of 50 and a high threshold of 150. Display the original and edge-detected images.

    *   **Answer:**

    ```python
    import cv2
    import numpy as np

    # Load the image
    image = cv2.imread('building.jpg', cv2.IMREAD_GRAYSCALE)

    # Check if the image was loaded successfully
    if image is None:
        print("Error: Could not load image.  Check the file path.")
        exit()


    # Apply Canny edge detection
    edges = cv2.Canny(image, threshold1=50, threshold2=150)

    # Display the original and edge-detected images
    cv2.imshow('Original Image', image)
    cv2.imshow('Canny Edges', edges)
    cv2.waitKey(0)
    cv2.destroyAllWindows()
    ```

5.  **Question:** How does Canny Edge detection compare to the Sobel operator in terms of noise sensitivity, edge thinning, and complexity?

    *   **Answer:** Canny is less sensitive to noise due to the initial Gaussian filtering. Canny performs Non-Maximum Suppression for edge thinning as a core part of the algorithm. Sobel is more sensitive to noise and requires additional thinning steps. Canny is more complex than Sobel because of the multi-stage processing and parameter tuning.

These notes provide a comprehensive overview of the Canny Edge Detection algorithm, including its principles, steps, implementation, parameter effects, and comparison with other methods. They should serve as a solid foundation for understanding and applying this important image processing technique.
