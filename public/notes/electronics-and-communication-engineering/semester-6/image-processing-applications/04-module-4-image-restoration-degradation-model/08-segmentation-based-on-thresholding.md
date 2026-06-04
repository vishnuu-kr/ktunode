---
title: "Segmentation based on thresholding"
subject: "IMAGE PROCESSING APPLICATIONS"
module: "Module 4: Image Restoration: Degradation model"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780fef7d"
status: "completed"
scrapedAt: "2026-05-23T18:01:31.387Z"
---
# IMAGE PROCESSING APPLICATIONS: Module 4: Image Restoration: Degradation Model - Segmentation based on Thresholding

This module delves into image restoration techniques, specifically focusing on how thresholding can be utilized for segmentation. We will explore the fundamental concepts of image degradation and restoration, and then zero in on thresholding as a powerful tool for separating objects from the background.

---

## Module Introduction: Image Restoration and Degradation

Before we dive into thresholding for segmentation, it's crucial to understand the context of image restoration.

**Key Concept:** **Image Degradation** refers to the process that leads to a loss of detail or information in an image. This can be caused by various factors during image acquisition, transmission, or processing.

**Key Concept:** **Image Restoration** aims to reconstruct the original, undegraded image from a degraded version. It's an inverse problem, often requiring knowledge or assumptions about the degradation process.

**Textbook Reference:** Gonzalez & Woods (2009) dedicate significant portions of Chapter 5 to Image Restoration, detailing various degradation models and restoration techniques. Jayaraman et al. (2015) also cover these topics in their chapters on image restoration.

### The Degradation Model

A fundamental aspect of image restoration is understanding the mathematical model that describes the degradation process.

**General Degradation Model:**

$$ g(x, y) = h(x, y) * f(x, y) + \eta(x, y) $$

Where:
*   $g(x, y)$: The degraded image.
*   $f(x, y)$: The original, undegraded image.
*   $h(x, y)$: The degradation function (also known as the Point Spread Function - PSF). This represents the blurring or distortion introduced.
*   $*$ : The convolution operator.
*   $\eta(x, y)$: The noise component, representing random errors introduced during the process.

**Important Note:** The convolution operation ($*$) implies that the degradation affects the image spatially.

**Common Degradation Sources:**

*   **Blurring:** Caused by motion, optical defocus, atmospheric turbulence, etc.
*   **Noise:** Introduced by the sensor, transmission channel, or electronic components. Common noise types include:
    *   Gaussian Noise
    *   Salt-and-Pepper Noise
    *   Rayleigh Noise
    *   Exponential Noise
    *   Uniform Noise

**Textbook Reference:** Gonzalez & Woods (2009), Chapter 5, provides detailed explanations and mathematical formulations for various degradation models and noise types.

---

## Topic Focus: Segmentation based on Thresholding

**Key Concept:** **Image Segmentation** is the process of partitioning a digital image into multiple segments (sets of pixels). The goal is to simplify or change the representation of an image into something more meaningful and easier to analyze. Segmentation is a crucial preprocessing step for many image analysis tasks, including object recognition and feature extraction.

**Key Concept:** **Thresholding** is a region-based segmentation method that uses a specific intensity value (the threshold) to classify pixels into two or more groups. Pixels with intensity values above the threshold are assigned to one class, and those below are assigned to another.

**Relevance to Image Restoration:** While thresholding is primarily a segmentation technique, it can be considered in the context of restoration when the degradation process has resulted in distinct intensity differences between objects and the background, making thresholding an effective way to "restore" the segmented information. For instance, if blurring has occurred but has maintained a clear intensity separation, thresholding can isolate the objects.

**Course Outcome Alignment:**
*   **CO4 (Determine the techniques for restoration of images):** Thresholding, when applied to a degraded image where intensity differences are preserved, can be seen as a method to recover the segmented object information, indirectly contributing to a form of "restoration" of the object's boundaries.
*   **CO2 (Analyse the various concepts and mathematical transforms... for image processing):** Understanding how intensity values are manipulated by thresholding relates to the analysis of image pixel values.

---

### Types of Thresholding

Thresholding methods can be broadly classified based on how the threshold value is determined.

#### 1. Global Thresholding

In global thresholding, a single threshold value is applied to the entire image.

**Procedure:**
Let $T$ be the threshold value. For each pixel $(x, y)$ in the image with intensity $f(x, y)$:

$$ g(x, y) = \begin{cases} \text{foreground value} & \text{if } f(x, y) > T \\ \text{background value} & \text{if } f(x, y) \leq T \end{cases} $$

Commonly, the foreground value is set to 1 (or 255) and the background value to 0.

**Determining the Global Threshold (T):**

*   **Manual Selection:** The user visually inspects the image and chooses a threshold that appears to best separate the foreground from the background. This is subjective and can be time-consuming.
*   **Automatic Thresholding (Otsu's Method):** This is a popular and effective method for automatically finding an optimal global threshold.

    **Otsu's Method:**
    Otsu's method aims to minimize the intra-class variance (variance within each class, foreground and background) or, equivalently, maximize the inter-class variance (variance between the two classes).

    Let $L$ be the number of gray levels in the image (e.g., 256 for an 8-bit image).
    Let $p(i)$ be the normalized histogram of the image for gray level $i$.
    The goal is to find a threshold $T$ that separates the pixels into two classes: Class 0 (background, gray levels $0$ to $T$) and Class 1 (foreground, gray levels $T+1$ to $L-1$).

    The method calculates the probability of each class ($P_0(T)$, $P_1(T)$) and the mean intensity of each class ($\mu_0(T)$, $\mu_1(T)$).

    *   $P_0(T) = \sum_{i=0}^{T} p(i)$
    *   $P_1(T) = \sum_{i=T+1}^{L-1} p(i) = 1 - P_0(T)$

    *   $\mu_0(T) = \sum_{i=0}^{T} i \cdot p(i) / P_0(T)$
    *   $\mu_1(T) = \sum_{i=T+1}^{L-1} i \cdot p(i) / P_1(T)$

    Otsu's method maximizes the **inter-class variance**, $\sigma_B^2(T)$:

    $$ \sigma_B^2(T) = P_0(T)P_1(T)[\mu_1(T) - \mu_0(T)]^2 $$

    The threshold $T$ that maximizes $\sigma_B^2(T)$ is chosen as the optimal global threshold.

    **Textbook Reference:** Gonzalez & Woods (2009) provide a detailed derivation and explanation of Otsu's method in Chapter 6, focusing on segmentation. Jayaraman et al. (2015) also cover this.

**Example of Global Thresholding:**

Consider a grayscale image where the background is dark (intensity 0-50) and an object is bright (intensity 100-200).
If we choose a global threshold $T = 75$:
*   Pixels with intensity $\leq 75$ are classified as background (e.g., set to 0).
*   Pixels with intensity $> 75$ are classified as foreground (e.g., set to 255).

This would effectively isolate the brighter object from the darker background.

#### 2. Adaptive Thresholding

Global thresholding works well when the illumination across the image is uniform. However, in images with varying illumination conditions (e.g., shadows), a single global threshold might not effectively segment the entire image. Adaptive thresholding addresses this by using different thresholds for different regions of the image.

**Procedure:**
The image is divided into smaller sub-regions, and a threshold is calculated for each sub-region. This threshold is then applied to the pixels within that sub-region.

**Methods for Adaptive Thresholding:**

*   **Local Thresholding based on Neighborhood Statistics:** The threshold for a pixel is determined by the local neighborhood around it.
    *   **Mean Method:** The threshold for a pixel is the average intensity of its neighborhood.
    *   **Gaussian Method:** The threshold for a pixel is a weighted average of its neighborhood, with weights determined by a Gaussian function (giving more weight to pixels closer to the center).

    **Formula for Local Thresholding (using mean):**
    For a pixel at $(x, y)$, the threshold $T(x, y)$ is the mean intensity of its local neighborhood $N_{xy}$.

    $$ T(x, y) = \frac{1}{\text{number of pixels in } N_{xy}} \sum_{(u, v) \in N_{xy}} g(u, v) $$

    Then, the segmented pixel value is determined by comparing $g(x, y)$ with $T(x, y)$.

    **Formula for Local Thresholding (using Gaussian):**
    $$ T(x, y) = \sum_{(u, v) \in N_{xy}} w(u, v) g(u, v) $$
    where $w(u, v)$ are the Gaussian weights.

*   **Thresholding based on Local Extrema:** This method involves finding local maxima and minima within a region to determine thresholds.

**Advantages of Adaptive Thresholding:**
*   Handles variations in illumination more effectively.
*   Can segment images with complex backgrounds.

**Disadvantages of Adaptive Thresholding:**
*   Can be computationally more expensive than global thresholding.
*   The choice of neighborhood size and type of statistics can affect the results.
*   May introduce artifacts if neighborhoods are too small or too large.

**Textbook Reference:** Gonzalez & Woods (2009) discuss adaptive thresholding in Chapter 6, highlighting its advantages for non-uniform illumination.

---

### Thresholding for Segmentation in Image Restoration Context

Consider an image degraded by uniform blurring and additive Gaussian noise. If the original image had a clear intensity separation between an object and the background, the blurred and noisy image might still retain this separation to some extent.

**Scenario:**
Original Image: Object (high intensity) on a Background (low intensity).
Degradation: Blurring and noise.
Result: Blurred object with noisy edges, but still generally brighter than the background.

In this scenario, thresholding can be used to:
1.  **Isolate the object:** A suitable threshold can effectively separate the brighter object pixels from the darker background pixels.
2.  **"Restore" the object boundary:** By setting pixels above the threshold to a foreground value and below to a background value, we are essentially trying to recover the shape of the object that was obscured by degradation.

**Example:**
Imagine a medical scan where a tumor appears as a bright region against a darker background, but blurring and noise have softened the edges. Thresholding can be used to segment the tumor region, effectively "restoring" its perceived shape and location, even if the internal texture is smoothed.

**Textbook Reference:** While not explicitly a restoration technique in the same vein as Wiener or inverse filtering, applying segmentation as a post-processing step to recover object information from a degraded image aligns with the broader goals of image processing. Castleman (2003) and Jain (1988) provide foundational concepts of image segmentation that are applicable here.

---

## Key Concepts and Definitions Recap

*   **Image Segmentation:** Partitioning an image into meaningful regions.
*   **Thresholding:** A segmentation technique based on pixel intensity values.
*   **Global Thresholding:** A single threshold applied to the entire image.
*   **Otsu's Method:** An automatic algorithm to find the optimal global threshold by maximizing inter-class variance.
*   **Adaptive Thresholding:** Thresholds are computed locally, adapting to variations in illumination.
*   **Degradation Model:** Mathematical representation of how an image is corrupted.
*   **Point Spread Function (PSF):** The impulse response of the degradation process, representing blurring.

---

## Practice Questions and Exercises

1.  **Question:** Explain the basic principle of thresholding for image segmentation. What is the general formula used?
    **Answer:** Thresholding segments an image by classifying pixels into two or more classes based on their intensity values relative to a threshold. Pixels with intensity above the threshold are assigned to one class (e.g., foreground), and pixels with intensity below or equal to the threshold are assigned to another (e.g., background). The general formula is:
    $g(x, y) = \begin{cases} \text{foreground value} & \text{if } f(x, y) > T \\ \text{background value} & \text{if } f(x, y) \leq T \end{cases}$

2.  **Question:** What is the main advantage of adaptive thresholding over global thresholding?
    **Answer:** Adaptive thresholding's main advantage is its ability to handle images with non-uniform illumination. It computes thresholds locally, allowing it to adapt to variations in lighting conditions across different regions of the image, which global thresholding, using a single threshold, cannot do effectively.

3.  **Question:** Briefly describe the objective of Otsu's method in thresholding.
    **Answer:** Otsu's method aims to automatically find an optimal global threshold value that minimizes the within-class variance (variance within the foreground and background classes) or, equivalently, maximizes the between-class variance. This leads to the best separation between the two classes in terms of their intensity distributions.

4.  **Question:** Consider a simple 3x3 grayscale image with the following intensity values:
    ```
    150  160  170
    100  120  130
    40   50   60
    ```
    If you choose a global threshold $T = 110$, what would be the segmented image (assuming foreground = 255, background = 0)?
    **Answer:**
    Applying the threshold $T=110$:
    *   Pixels with intensity > 110 become 255.
    *   Pixels with intensity $\leq 110$ become 0.

    The segmented image would be:
    ```
    255  255  255
    0    255  255
    0    0    0
    ```

5.  **Question:** How can thresholding be considered a rudimentary form of "restoration" in the context of image processing, especially when dealing with degraded images?
    **Answer:** In a degraded image, if the primary degradation (like blurring or noise) has not completely obscured the intensity differences between objects and background, thresholding can be used to isolate these objects. By classifying pixels based on intensity, it helps in recovering the spatial extent or shape of the object that was present in the original image, thus restoring the information about the object's presence and boundaries. It doesn't restore the lost detail within the object but restores its separability from the background.

---

## Important Points to Remember

*   Thresholding is a powerful and widely used segmentation technique.
*   The effectiveness of thresholding heavily depends on the intensity distribution of the image and the chosen threshold value.
*   Otsu's method is a robust automatic technique for global thresholding.
*   Adaptive thresholding is essential for images with spatially varying illumination.
*   While primarily a segmentation tool, thresholding can contribute to "restoring" object information in degraded images by separating them based on intensity.
*   Always consider the nature of the degradation and the image content when deciding on the thresholding strategy.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


## Further Reading and References

*   **Gonzalez, R. C., & Woods, R. E. (2009).** *Digital Image Processing* (3rd ed.). Pearson Education. (Chapters 5 and 6 are highly relevant).
*   **Jayaraman, S., Esakkirajan, S., & Veerakumar, T. (2015).** *Digital Image Processing*. Tata McGraw Hill Education.
*   **Castleman, K. R. (2003).** *Digital Image Processing* (2nd ed.). Pearson Education.
*   **Jain, A. K. (1988).** *Fundamentals of Digital Image Processing*. Prentice Hall.
*   **Pratt, W. K. (2007).** *Digital Image Processing* (4th ed.). John Wiley & Sons.

---