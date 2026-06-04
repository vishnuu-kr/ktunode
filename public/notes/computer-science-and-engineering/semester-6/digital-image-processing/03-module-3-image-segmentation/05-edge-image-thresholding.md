---
title: "Edge Image Thresholding"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 3: Image Segmentation "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bc4f"
status: "completed"
scrapedAt: "2026-05-20T16:53:07.055Z"
---
## DIGITAL IMAGE PROCESSING - Module 3: Image Segmentation - Edge Image Thresholding

**Learning Outcomes:**

*   Understand the concept of edge image thresholding and its role in image segmentation.
*   Explain different thresholding techniques applied to edge images (e.g., global thresholding, adaptive thresholding, Otsu's method).
*   Analyze the advantages and disadvantages of each thresholding technique.
*   Apply edge image thresholding to segment images and evaluate the results.
*   Identify factors affecting the performance of edge image thresholding.

**1. Introduction to Edge Image Thresholding**

*   **Definition:** Edge image thresholding is a segmentation technique that converts an edge-detected image (obtained after edge detection algorithms like Sobel, Canny, etc.) into a binary image by setting pixels above a certain threshold value to one level (e.g., white) and pixels below the threshold to another level (e.g., black).  This binary image represents the segmented edges.
*   **Role in Image Segmentation:** Edge image thresholding helps in identifying and isolating object boundaries or regions of interest by binarizing the edge-detected image, making it easier to distinguish edges from background.
*   **Process Overview:**
    1.  **Edge Detection:** Apply an edge detection algorithm (e.g., Canny, Sobel, Prewitt, Laplacian of Gaussian) to the input image.  This produces an edge magnitude image, where pixel values represent the edge strength.
    2.  **Thresholding:**  Apply a thresholding technique to the edge magnitude image.
    3.  **Binary Image:** The result is a binary image where pixels above the threshold are considered part of an edge (e.g., assigned a value of 255) and pixels below the threshold are considered background (e.g., assigned a value of 0).

**2. Thresholding Techniques for Edge Images**

*   **2.1 Global Thresholding (Fixed Thresholding)**

    *   **Concept:** A single threshold value is applied to the entire edge image.  If a pixel's intensity is greater than the threshold, it is set to a foreground value; otherwise, it is set to a background value.

    *   **Equation:**

        ```
        g(x,y) = {
          255  if f(x,y) > T
          0    if f(x,y) <= T
        }
        ```

        Where:
        *   `f(x, y)` is the intensity value of the pixel at coordinates (x, y) in the edge magnitude image.
        *   `g(x, y)` is the intensity value of the pixel at coordinates (x, y) in the output binary image.
        *   `T` is the globally defined threshold value.

    *   **Advantages:**
        *   Simple and computationally inexpensive.
        *   Easy to implement.

    *   **Disadvantages:**
        *   Sensitive to variations in illumination and noise.
        *   May not perform well when the image has non-uniform illumination or complex backgrounds.
        *   Requires manual selection of an appropriate threshold value, which can be subjective and time-consuming.

    *   **Example:**  Consider an edge image with edge intensities ranging from 0 to 200. If we choose a global threshold of T = 100, any pixel with an intensity greater than 100 will be set to 255 (white), representing an edge, and any pixel with an intensity less than or equal to 100 will be set to 0 (black), representing the background.

*   **2.2 Adaptive Thresholding (Local Thresholding)**

    *   **Concept:** The threshold value is calculated dynamically for each pixel or a small region around each pixel, based on the local image characteristics. This accounts for variations in illumination and contrast across the image.

    *   **Techniques:**
        *   **Mean Thresholding:** The threshold is the average intensity value within a neighborhood around the pixel.
        *   **Median Thresholding:** The threshold is the median intensity value within a neighborhood around the pixel.
        *   **Gaussian Thresholding:** The threshold is a weighted average of the pixel intensities in the neighborhood, using a Gaussian distribution as the weighting function.

    *   **Equation (Mean Thresholding):**

        ```
        T(x,y) = (1 / N) * Σ f(i,j)  for all (i,j) in neighborhood of (x,y)
        g(x,y) = {
          255  if f(x,y) > T(x,y)
          0    if f(x,y) <= T(x,y)
        }
        ```

        Where:
        *   `N` is the number of pixels in the neighborhood.
        *   `f(i, j)` is the intensity of the pixel at (i, j) within the neighborhood of (x, y).
        *   `T(x, y)` is the dynamically calculated threshold for the pixel at (x, y).

    *   **Advantages:**
        *   More robust to non-uniform illumination and contrast variations compared to global thresholding.
        *   Can effectively segment images with complex backgrounds.

    *   **Disadvantages:**
        *   More computationally expensive than global thresholding due to the dynamic calculation of thresholds.
        *   Performance depends on the size of the neighborhood.  Too small, and it's susceptible to noise. Too large, and it loses its adaptivity.
        *   May require careful selection of parameters (e.g., neighborhood size) to achieve optimal results.

    *   **Example:**  Imagine a shadowy image.  With global thresholding, the darker regions might not show any edges.  Adaptive thresholding, by calculating the threshold locally, can compensate for the shadow and detect edges even in the darker areas.

*   **2.3 Otsu's Method (Automatic Thresholding)**

    *   **Concept:** Otsu's method is a statistical approach that automatically determines the optimal global threshold by maximizing the between-class variance of the foreground and background pixels. It aims to find a threshold that best separates the image pixels into two classes.

    *   **Algorithm:**
        1.  Calculate the image histogram.
        2.  Iterate through all possible threshold values.
        3.  For each threshold value, divide the image into two classes: foreground (pixels above the threshold) and background (pixels below the threshold).
        4.  Calculate the between-class variance, which is a measure of the separation between the two classes.
        5.  Select the threshold that maximizes the between-class variance.

    *   **Advantages:**
        *   Automatic threshold selection, eliminating the need for manual parameter tuning.
        *   Relatively simple and computationally efficient.
        *   Effective for images with a bimodal (two distinct peaks) histogram.

    *   **Disadvantages:**
        *   May not perform well for images with unimodal or multimodal histograms.
        *   Assumes a clear separation between foreground and background pixels.

    *   **Example:**  Consider an image with a clear distinction between the edge pixels and the background. Otsu's method will analyze the histogram and automatically select a threshold that effectively separates these two classes, resulting in a clean binary edge image.

**3. Applying Edge Image Thresholding**

*   **Steps:**
    1.  **Load the image:** Read the image into a suitable environment (e.g., Python with OpenCV, MATLAB).
    2.  **Apply Edge Detection:** Choose an edge detection algorithm (e.g., Canny, Sobel) and apply it to the image.
    3.  **Select a Thresholding Technique:** Choose an appropriate thresholding technique (global, adaptive, or Otsu's) based on the image characteristics.
    4.  **Apply Thresholding:** Apply the chosen thresholding technique to the edge magnitude image.
    5.  **Display the Result:** Display the resulting binary image.

*   **Code Example (Python with OpenCV):**

    ```python
    import cv2

    # Load the image
    image = cv2.imread('image.jpg', cv2.IMREAD_GRAYSCALE)

    # Apply Canny edge detection
    edges = cv2.Canny(image, 100, 200) # Thresholds can be adjusted

    # Apply global thresholding
    ret, thresh1 = cv2.threshold(edges, 127, 255, cv2.THRESH_BINARY)

    # Apply adaptive thresholding
    thresh2 = cv2.adaptiveThreshold(edges, 255, cv2.ADAPTIVE_THRESH_MEAN_C, cv2.THRESH_BINARY, 11, 2)

    # Apply Otsu's thresholding
    ret3, thresh3 = cv2.threshold(edges, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)

    # Display the results
    cv2.imshow('Original Image', image)
    cv2.imshow('Canny Edges', edges)
    cv2.imshow('Global Thresholding', thresh1)
    cv2.imshow('Adaptive Thresholding', thresh2)
    cv2.imshow('Otsu Thresholding', thresh3)

    cv2.waitKey(0)
    cv2.destroyAllWindows()
    ```

**4. Evaluating the Results**

*   **Visual Inspection:** Examine the segmented image visually to assess the quality of the segmentation. Look for:
    *   **Completeness:**  Are all the important edges detected and preserved?
    *   **Accuracy:**  Are there any spurious edges or noise in the segmented image?
    *   **Continuity:**  Are the edges continuous and well-defined?

*   **Quantitative Evaluation:**  Use metrics to quantitatively evaluate the performance of the segmentation algorithm. Some common metrics include:
    *   **Precision:** The proportion of detected edges that are actually true edges.
    *   **Recall:** The proportion of true edges that are detected.
    *   **F1-score:** The harmonic mean of precision and recall.
    *   **Accuracy:** The proportion of pixels correctly classified as edge or background.

**5. Factors Affecting Performance**

*   **Noise:** Noise in the image can lead to spurious edges and affect the accuracy of the segmentation.
*   **Illumination Variations:** Non-uniform illumination can cause variations in edge intensities, making it difficult to choose an appropriate global threshold.
*   **Contrast:** Low contrast can make it difficult to distinguish edges from the background.
*   **Blurring:** Blurring can reduce the sharpness of edges and make them difficult to detect.
*   **Edge Detection Algorithm:** The choice of edge detection algorithm can significantly affect the quality of the edge image and the performance of thresholding.
*   **Threshold Value:** The choice of threshold value is critical for achieving good segmentation results.
*   **Neighborhood Size (for Adaptive Thresholding):** The size of the neighborhood used in adaptive thresholding can affect the algorithm's sensitivity to noise and variations in image characteristics.

**6. Important Points to Remember**

*   Edge image thresholding is a fundamental technique for image segmentation.
*   The choice of thresholding technique depends on the image characteristics and the specific application.
*   Adaptive thresholding is generally more robust to illumination variations than global thresholding.
*   Otsu's method provides an automatic way to select the optimal global threshold.
*   Careful consideration of factors such as noise, illumination, and contrast is necessary to achieve good segmentation results.
*   Evaluation of the segmentation results is crucial to assess the quality of the segmentation and identify areas for improvement.

**Practice Questions/Exercises**

1.  **Question:**  Explain the difference between global and adaptive thresholding.  Give an example of when you would choose adaptive thresholding over global thresholding.

    **Answer:** Global thresholding uses a single threshold value for the entire image, while adaptive thresholding calculates a threshold value dynamically for each pixel or region based on local image characteristics. Adaptive thresholding is preferred when the image has non-uniform illumination or complex backgrounds, as it can adjust the threshold value to account for these variations.  For example, when segmenting a document scanned under uneven lighting, adaptive thresholding would perform better than global thresholding.

2.  **Question:** What are the advantages and disadvantages of Otsu's method?

    **Answer:**
    *   **Advantages:** Automatic threshold selection, eliminating manual tuning; relatively simple and computationally efficient; effective for images with a bimodal histogram.
    *   **Disadvantages:** May not perform well for images with unimodal or multimodal histograms; assumes a clear separation between foreground and background pixels.

3.  **Question:**  Describe three factors that can affect the performance of edge image thresholding.  For each factor, explain how it affects performance.

    **Answer:**
    *   **Noise:** Noise in the image can lead to spurious edges, making it difficult to distinguish true edges from noise and affecting the accuracy of segmentation.
    *   **Illumination Variations:** Non-uniform illumination can cause variations in edge intensities, making it challenging to choose an appropriate global threshold and leading to under- or over-segmentation in different regions of the image.
    *   **Blurring:** Blurring can reduce the sharpness of edges, making them difficult to detect, and requiring a lower threshold value that may also pick up noise.

4.  **Exercise:**  You are given an image of a circuit board with varying lighting conditions. Design a complete image segmentation pipeline using edge image thresholding to identify the components. Describe each step in detail, including the choice of edge detection algorithm, thresholding technique, and any pre- or post-processing steps you might consider. Justify your choices.

    **Answer:**

    1.  **Preprocessing (Noise Reduction):** Apply a Gaussian blur to the image to reduce noise while preserving edges.  `cv2.GaussianBlur(image, (5,5), 0)` is a good starting point. A larger kernel (e.g., (7,7)) might be necessary for higher noise levels.  Justification: Noise can lead to spurious edges, complicating the thresholding process.

    2.  **Edge Detection:** Use the Canny edge detector. `edges = cv2.Canny(blurred_image, threshold1, threshold2)`. Justification:  Canny is known for its superior edge detection compared to simpler methods like Sobel, providing thin and well-defined edges. Experiment with `threshold1` and `threshold2` parameters to find optimal results before proceeding to thresholding. A lower `threshold1` will detect more edges (including weaker ones), while a higher `threshold2` will ensure only the strongest edges are retained.

    3.  **Thresholding:** Use adaptive thresholding (e.g., mean or Gaussian) due to the varying lighting conditions. `thresholded = cv2.adaptiveThreshold(edges, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY, block_size, C)`. Justification:  Adaptive thresholding adjusts to local variations in image intensity, which is crucial for handling the non-uniform lighting. Experiment with `block_size` (the size of the neighborhood) and `C` (a constant subtracted from the mean/Gaussian) to find the optimal parameters. Larger `block_size` values are less sensitive to small details but can blur the edges slightly.

    4.  **Post-processing (Morphological Operations):**  Apply morphological operations like dilation and erosion to refine the segmented image.
        *   **Dilation:**  `cv2.dilate(thresholded, kernel, iterations=1)`.  Use a small kernel (e.g., a 3x3 square kernel) to connect broken edges.
        *   **Erosion:** `cv2.erode(dilated_image, kernel, iterations=1)`. Use a small kernel (e.g., a 3x3 square kernel) to remove small noise regions introduced by dilation. Justification: Dilation can fill gaps in the detected edges, making the components more contiguous. Erosion can remove small, isolated noise pixels.

    5.  **Component Labeling (Optional):** If needed, apply connected component labeling to identify and isolate individual components. `cv2.connectedComponents(eroded_image)`  Justification:  This step is necessary if you need to analyze or count the components individually.

By following these steps and tuning the parameters based on the specific image, a robust and effective image segmentation pipeline can be built for identifying components on the circuit board.  It is crucial to visually inspect the results at each stage and adjust the parameters accordingly.
