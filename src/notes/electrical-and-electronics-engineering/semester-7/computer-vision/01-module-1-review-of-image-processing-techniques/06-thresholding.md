---
title: "thresholding"
subject: "COMPUTER VISION"
module: "Module 1: Review of image processing techniques"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36a23"
status: "completed"
scrapedAt: "2026-05-23T16:32:14.922Z"
---
## Computer Vision: Module 1 - Review of Image Processing Techniques

### Topic: Thresholding

**Learning Outcomes:**

*   Understand the fundamental concept of thresholding in image processing.
*   Differentiate between global and local thresholding methods.
*   Analyze the impact of different thresholding techniques on image segmentation.
*   Select appropriate thresholding methods for specific computer vision applications.

**Course Outcomes Alignment:**

*   **CO1 (K2): Understand digital filtering operations for CV applications.** Thresholding can be viewed as a simple form of non-linear filtering, partitioning pixels based on their intensity.
*   **CO5 (K4): Analyze a given scene using appropriate computer vision algorithms to detect/recognize objects and to implement it in real time practical applications.** Thresholding is a foundational step for many object detection and recognition tasks, enabling the isolation of foreground from background.

---

### 1. Introduction to Thresholding

Thresholding is a fundamental image segmentation technique that partitions an image into two or more regions based on pixel intensity values. It's a simple yet powerful method for separating objects from the background, especially in images with good contrast.

*   **Core Idea:** Assign each pixel a label (e.g., 0 for background, 1 for foreground) based on whether its intensity value is above or below a chosen **threshold** value (T).

*   **Mathematical Representation:** For a grayscale image $I(x, y)$ and a threshold $T$, the thresholded image $I_{out}(x, y)$ is often defined as:

    $$
    I_{out}(x, y) =
    \begin{cases}
        \text{Foreground Value} & \text{if } I(x, y) > T \\
        \text{Background Value} & \text{if } I(x, y) \leq T
    \end{cases}
    $$

    (Note: The direction of the inequality might be reversed depending on whether you want to highlight brighter or darker regions).

*   **Applications in Computer Vision:**
    *   **Object Isolation:** Separating objects from a uniform background.
    *   **Text Recognition (OCR):** Converting scanned documents into machine-readable text.
    *   **Medical Imaging:** Segmenting tumors or specific tissues.
    *   **Machine Part Inspection:** Identifying defects or anomalies.
    *   **Preprocessing for other algorithms:** Simplifying image data for edge detection, contour finding, etc.

---

### 2. Types of Thresholding

Thresholding methods can be broadly categorized into global and local (adaptive) techniques.

#### 2.1. Global Thresholding

In global thresholding, a single threshold value (T) is applied to the entire image. This is suitable for images where the foreground and background intensities are well-separated and relatively uniform.

**Key Concepts:**

*   **Single Threshold Value:** One T for the whole image.
*   **Simplicity:** Easy to implement and computationally efficient.
*   **Limitations:** Fails when illumination varies significantly across the image or when foreground and background intensity distributions overlap.

**Methods for Selecting Global Threshold (T):**

*   **Manual Selection:** An experienced user chooses the threshold based on visual inspection. (Often impractical for automated systems).

*   **Otsu's Method:** A widely used automatic thresholding method that aims to minimize the intra-class variance of the black and white pixels. It assumes a bimodal histogram.

    *   **Concept:** Finds the threshold that best separates the two classes of pixels (foreground and background) by maximizing the between-class variance (or equivalently, minimizing the within-class variance).
    *   **Algorithm Overview:**
        1.  Calculate the probability distribution of pixel intensities (histogram).
        2.  Iterate through all possible threshold values (from minimum to maximum intensity).
        3.  For each threshold, divide the pixels into two classes (background and foreground).
        4.  Calculate the probabilities of each class, their means, and variances.
        5.  Calculate the within-class variance (weighted sum of variances of each class).
        6.  The threshold that minimizes the within-class variance is selected.
    *   **Reference:** **Davies, E. R.** discusses Otsu's method in detail as a method for image segmentation. It's a key algorithm for achieving CO1 (understanding filtering) and is a prerequisite for CO5.

*   **Isodata Thresholding (Minimum Error Thresholding):** Another automatic method that aims to minimize the classification error based on Gaussian models for foreground and background intensities.

    *   **Algorithm Overview:**
        1.  Initialize T with the mean intensity of the image.
        2.  Separate pixels into two groups based on T.
        3.  Calculate the mean intensity of each group.
        4.  Calculate a new threshold T as the mean of the two group means.
        5.  Repeat steps 2-4 until T converges.
    *   **Reference:** While not explicitly named "Isodata" in Szeliski, the concept of iterative refinement of a threshold based on class means is a common theme in adaptive and automatic thresholding techniques.

**Example (Global Thresholding):**

Imagine an image of a dark object on a bright white background.

*   If you set T = 128 (mid-gray), pixels with intensity > 128 become white (background), and pixels <= 128 become black (object).
*   Otsu's method would automatically find the optimal T that best separates the dark object pixels from the bright background pixels.

---

#### 2.2. Local (Adaptive) Thresholding

Local thresholding calculates different threshold values for different regions of the image. This is crucial for images with varying illumination conditions, shadows, or gradients.

**Key Concepts:**

*   **Region-Specific Thresholds:** T varies across the image.
*   **Handles Illumination Changes:** More robust to uneven lighting.
*   **Computational Cost:** Generally more computationally intensive than global thresholding.

**Methods for Local Thresholding:**

*   **Moving Window Thresholding:**
    *   **Concept:** A small window (neighborhood) is slid across the image. The threshold for the center pixel of the window is calculated based on the statistics (e.g., mean, median, Gaussian-weighted average) of the pixels within that window.
    *   **Algorithm:**
        1.  Define a window size (e.g., 15x15 pixels).
        2.  For each pixel (x, y):
            *   Calculate a local threshold $T(x, y)$ based on the pixels within the window centered at (x, y). Common calculations for $T(x, y)$ include:
                *   **Mean of the local neighborhood:** $T(x, y) = \text{mean}(N(x, y))$
                *   **Median of the local neighborhood:** $T(x, y) = \text{median}(N(x, y))$ (More robust to outliers than the mean).
                *   **Gaussian-weighted average:** $T(x, y) = \sum_{i, j \in N(x,y)} G(i, j) I(x+i, y+j) / \sum_{i, j \in N(x,y)} G(i, j)$, where G is a Gaussian kernel.
            *   Apply the threshold:
                $$
                I_{out}(x, y) =
                \begin{cases}
                    \text{Foreground Value} & \text{if } I(x, y) > T(x, y) + \text{offset} \\
                    \text{Background Value} & \text{if } I(x, y) \leq T(x, y) + \text{offset}
                \end{cases}
                $$
                (An `offset` is often used to fine-tune the threshold).
    *   **Reference:** **Szeliski, R.** describes these local neighborhood-based methods for adaptive thresholding. This is directly related to CO1 and is a practical technique for CO5. **Baggio et al.** in Mastering OpenCV also provides practical implementations of adaptive thresholding.

*   **Binarization with adaptive thresholding (OpenCV):** OpenCV provides specific functions like `cv2.adaptiveThreshold` that implement these moving window techniques.

    *   **Parameters:**
        *   `adaptiveMethod`: `cv2.ADAPTIVE_THRESH_MEAN_C` or `cv2.ADAPTIVE_THRESH_GAUSSIAN_C`.
        *   `blockSize`: Size of the neighborhood (must be odd).
        *   `C`: A constant subtracted from the mean or weighted mean.

**Example (Local Thresholding):**

Consider an image of text on a parchment paper where the paper has shading due to uneven lighting.

*   **Global thresholding** would likely fail, either making the text too faint or the background noisy.
*   **Local thresholding** would compute a threshold for each small region of the parchment. The threshold for a dark area would be lower than for a bright area, effectively creating a locally flat background, thus segmenting the text accurately.

---

### 3. Thresholding for Computer Vision Applications (CO5 Alignment)

Thresholding is often a preprocessing step for more complex CV tasks.

*   **Object Detection:** After thresholding, connected component analysis can be used to identify distinct objects as blobs.
*   **Edge Detection:** Thresholding can be applied to the gradient magnitude image to extract edges.
*   **Shape Analysis:** Thresholding helps in isolating shapes for contour tracing and feature extraction.
*   **Document Analysis:** Crucial for binarizing pages before OCR.
*   **Medical Image Segmentation:** Isolating regions of interest (e.g., organs, lesions).

**Important Consideration:** The "Foreground Value" and "Background Value" are often set to 255 (white) and 0 (black) respectively for a binary (black and white) image.

---

### 4. Key Concepts and Definitions Summary

*   **Thresholding:** A segmentation technique that assigns pixels to foreground or background based on intensity.
*   **Threshold (T):** The critical intensity value used for partitioning.
*   **Global Thresholding:** A single T for the entire image.
*   **Local/Adaptive Thresholding:** T varies across the image based on local pixel neighborhoods.
*   **Otsu's Method:** An automatic global thresholding technique minimizing intra-class variance.
*   **Connected Component Analysis:** A post-thresholding technique to identify distinct objects.

---

### 5. Important Points to Remember

*   **Histogram Analysis:** Understanding the image histogram is vital for choosing or evaluating thresholding methods. A bimodal histogram is ideal for global thresholding.
*   **Illumination:** Variations in lighting are the primary reason to use local thresholding.
*   **Noise:** Noise can affect thresholding. Pre-smoothing (e.g., Gaussian blur) can sometimes improve results.
*   **Parameter Tuning:** For adaptive thresholding, the window size and the constant `C` are important parameters to tune.
*   **No One-Size-Fits-All:** The best thresholding method depends heavily on the specific image characteristics and the application.

---

### 6. Practice Questions and Exercises

**Question 1:**

Explain the fundamental difference between global and local thresholding. Under what conditions would you prefer one over the other?

**Answer 1:**

*   **Global Thresholding:** Uses a single threshold value (T) for the entire image. It's suitable for images with uniform illumination and a clear distinction between foreground and background intensities.
*   **Local (Adaptive) Thresholding:** Calculates thresholds for different regions of the image based on local pixel statistics. It's preferred for images with non-uniform illumination, shadows, or varying background intensity.

**Question 2:**

Briefly describe the principle behind Otsu's method for automatic global thresholding.

**Answer 2:**

Otsu's method aims to find the optimal global threshold by minimizing the within-class variance of pixel intensities. It assumes the image histogram is bimodal and calculates the threshold that best separates the two classes (foreground and background) by maximizing the between-class variance.

**Question 3:**

You are given an image of text printed on a piece of paper that has a strong, non-uniform shadow cast across it. Which type of thresholding would you likely choose and why? If you chose adaptive thresholding, what parameters would you need to consider?

**Answer 3:**

I would choose **Local (Adaptive) Thresholding**.
**Reasoning:** The non-uniform shadow indicates varying illumination across the image. Global thresholding would struggle to segment the text accurately across both the shadowed and unshadowed regions.
**Parameters to Consider for Adaptive Thresholding:**
*   **Block Size:** The size of the neighborhood to consider for calculating local thresholds. A larger block size captures a wider context but might average out local variations too much. A smaller block size is more sensitive to local details but can be more susceptible to noise.
*   **Constant (C):** A value subtracted from the calculated local mean/weighted mean. This acts as a fine-tuning parameter to adjust how aggressively pixels are classified.

**Question 4 (Conceptual):**

Consider an image with a histogram like the one shown below (imagine a bell curve shifted to the right, with a smaller, separate peak at much lower intensities).

```
      ^
      |      /----\
      |     /      \
      |    /        \
      |   /----------\  <-- Main background intensity
      |  /
      | / ------------ <-- Object intensity peaks
      |/
      +----------------> Intensity
```

Would Otsu's method likely perform well on this image? Why or why not?

**Answer 4:**

Otsu's method is designed for **bimodal histograms**, meaning histograms with two distinct peaks that represent the foreground and background classes. The described histogram has a broad peak for the background and a smaller, potentially less distinct peak for the object. While Otsu's method might find *a* threshold, it's less likely to be optimal because the two classes have significant overlap in their intensity distributions, and the object's intensity distribution might not be well-represented by a single peak. In such cases, adaptive thresholding might be a better choice.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 7. References

*   **Computer and Machine Vision - Theory Algorithm and Practicalities by E. R .Davies (Academic Press, 2012.)**: Chapter on Image Segmentation, specifically discusses thresholding techniques and their principles.
*   **Computer Vision: Algorithms and Applications by Richard Szeliski (Springer, 2011)**: Chapter 2 covers image filtering and segmentation, including detailed explanations of various thresholding methods and their applications.
*   **Computer Vision: A Modern Approach by David Forsyth and Jean Ponce (Pearson India, 2002)**: Provides foundational concepts of image processing relevant to segmentation.
*   **Mastering OpenCV with Practical Computer Vision Projects by Daniel Lelis Baggio, et al (Packt Publishing Limited, 2012)**: Offers practical implementations of adaptive thresholding techniques using OpenCV, crucial for hands-on understanding and CO5.
*   **Digital Image Processing and Computer Vision, by R. J. Schalkoff (John Wiley, 2004)**: Discusses thresholding as a core segmentation technique with mathematical formulations.

---