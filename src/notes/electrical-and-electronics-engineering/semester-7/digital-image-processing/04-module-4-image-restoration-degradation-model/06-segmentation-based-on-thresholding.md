---
title: "Segmentation based on thresholding"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 4: Image Restoration: Degradation model"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36937"
status: "completed"
scrapedAt: "2026-05-23T16:35:41.099Z"
---
# Digital Image Processing: Module 4 - Image Restoration: Segmentation based on Thresholding

## Introduction

This module delves into the crucial area of **Image Restoration**, focusing on techniques to recover degraded images. While Module 4 primarily deals with degradation models, this specific topic bridges into **Image Segmentation**, which is about partitioning an image into meaningful regions. Thresholding is a fundamental and widely used technique in segmentation, particularly effective when there's a significant difference in intensity values between the object and the background.

**Relevance to Course Outcomes:**

*   **CO4: Analyze the filtering and restoration of images (Knowledge Level: K3)** - Understanding thresholding is essential for restoring images, as it's often used in conjunction with restoration techniques to isolate relevant features or remove noise.
*   **CO5: Understand the basic image segmentation techniques (Knowledge Level: K2)** - Thresholding is one of the most foundational segmentation techniques, directly addressing this outcome.

**Textbook References:**

*   **Gonzalez & Woods, 4th Ed. (G&W):** Chapter 6 (Image Segmentation), Section 6.1 (Segmentation by Thresholding).
*   **Jayaraman, Esakkirajan, Veerakumar (JEV):** Chapter 7 (Image Segmentation), Section 7.1 (Thresholding).

## 1. Fundamentals of Thresholding

Thresholding is a process of **simplifying an image** by classifying pixels into two or more groups based on their intensity values. The most basic form is **binary thresholding**, where pixels above a certain threshold are assigned one value (e.g., white) and pixels below are assigned another (e.g., black).

### 1.1. The Thresholding Model

Given an input image $f(x, y)$ and a threshold value $T$, the output image $g(x, y)$ after thresholding can be defined as:

$g(x, y) = \begin{cases}
\text{value}_1 & \text{if } f(x, y) > T \\
\text{value}_2 & \text{if } f(x, y) \le T
\end{cases}$

*   **`value_1` and `value_2`**: These are typically the maximum and minimum intensity values in the image (e.g., 255 and 0 for an 8-bit grayscale image) or other desired values.
*   **`T`**: The **threshold value**. The core challenge in thresholding is selecting an appropriate value for $T$.

**Key Concept:** The effectiveness of thresholding relies on the assumption that the object(s) of interest have significantly different intensity levels from the background.

### 1.2. Types of Thresholding

Based on how the threshold `T` is chosen, thresholding can be classified into:

#### 1.2.1. Global Thresholding

A single threshold value `T` is used for the entire image. This is simple and efficient but can fail in images with varying illumination conditions.

*   **Selection of `T`:**
    *   **Manual Selection:** The user manually inspects the image and chooses a suitable threshold. This is subjective and not ideal for automated processes.
    *   **Automatic Selection (Otsu's Method):** A popular and robust method that automatically determines an optimal global threshold by minimizing the intra-class variance (variance within the foreground and background classes) or maximizing the inter-class variance (variance between the foreground and background classes).

        *   **Otsu's Method Principle (G&W Section 6.1.1, JEV Section 7.1.1):**
            1.  Calculate the image histogram.
            2.  Assume a threshold `T`.
            3.  Divide the pixels into two classes (foreground and background).
            4.  Calculate the probability distribution for each class.
            5.  Calculate the mean and variance for each class.
            6.  Calculate the **inter-class variance** $\sigma_B^2(T)$.
            7.  Find the `T` that maximizes $\sigma_B^2(T)$.

        *   **Mathematical Formulation of Otsu's Method:**
            Let $p(i)$ be the normalized histogram for intensity level $i$.
            The probability of the background class (pixels $\le T$) is $P_1(T) = \sum_{i=0}^{T} p(i)$.
            The probability of the foreground class (pixels $> T$) is $P_2(T) = \sum_{i=T+1}^{L-1} p(i) = 1 - P_1(T)$, where $L$ is the number of intensity levels.
            The mean of the background class is $\mu_1(T) = \frac{\sum_{i=0}^{T} i \cdot p(i)}{P_1(T)}$.
            The mean of the foreground class is $\mu_2(T) = \frac{\sum_{i=T+1}^{L-1} i \cdot p(i)}{P_2(T)}$.
            The **inter-class variance** is $\sigma_B^2(T) = P_1(T)P_2(T)[\mu_2(T) - \mu_1(T)]^2$.
            Otsu's method seeks to find $T$ that maximizes $\sigma_B^2(T)$.

#### 1.2.2. Adaptive Thresholding (Local Thresholding)

The threshold value `T` is varied across the image based on local neighborhood characteristics. This is particularly useful for images with varying illumination, where a single global threshold would not be effective.

*   **Methods:**
    *   **Mean Thresholding:** The threshold for a pixel is the mean of the neighborhood pixels.
    *   **Gaussian Thresholding:** The threshold is based on a weighted mean of the neighborhood pixels, with weights determined by a Gaussian function.
    *   **Local Median Thresholding:** The threshold is based on the median of the neighborhood pixels.

*   **Procedure (General Adaptive Thresholding):**
    1.  Define a neighborhood size (e.g., a $k \times k$ window).
    2.  For each pixel, calculate a local threshold based on the pixels within its neighborhood.
    3.  Apply this local threshold to classify the pixel.

**Example:** Consider an image of a document with uneven lighting. A global threshold might make text in darker areas invisible or introduce noise in brighter areas. Adaptive thresholding would use a local threshold, adjusting to the varying illumination, thus preserving text quality.

**G&W Section 6.1.2** discusses adaptive thresholding in detail.

### 1.3. Color Image Thresholding

Thresholding can also be applied to color images by operating on individual color channels (e.g., R, G, B) or by transforming the image into a different color space (e.g., HSV, HSI) and thresholding on one or more channels.

*   **HSV/HSI Color Space:** In these spaces, the Hue component often represents the color, while Saturation and Value/Intensity represent color purity and brightness, respectively. Thresholding on the Hue channel can effectively isolate objects of a specific color, while thresholding on the Value/Intensity channel can be similar to grayscale thresholding.

**JEV Section 7.1.3** covers thresholding in color images.

## 2. Thresholding for Image Restoration Context

While thresholding is primarily a segmentation technique, it plays a role in image restoration by:

*   **Noise Reduction:** After applying a restoration filter, thresholding can be used to separate the restored object from residual noise or background elements. For instance, if a restoration filter enhances edges, thresholding can then isolate these edges.
*   **Segmenting Degraded Regions:** In cases of localized degradation (e.g., scratches, sensor defects), thresholding can be used to identify and potentially mask these regions for inpainting or other restoration techniques.
*   **Simplification for Analysis:** In some restoration workflows, an intermediate step might involve simplifying the image to facilitate further processing or analysis. Thresholding provides a simple way to achieve this.

**Example:** Suppose you've restored a blurry image using a deblurring filter. The restored image might still have some remaining artifacts or an uneven background. Applying a global threshold (e.g., Otsu's method) can help to cleanly segment the foreground object from this less desirable background, yielding a more visually appealing and analyzable result.

## 3. Advanced Thresholding Techniques (Brief Mention)

While the core concepts are global and adaptive thresholding, it's worth noting that more sophisticated methods exist, often tailored for specific image types or degradation patterns. These might involve:

*   **Multi-level Thresholding:** Using multiple thresholds to segment an image into more than two classes.
*   **Fuzzy Thresholding:** Allowing pixels to belong to multiple classes with degrees of membership, providing smoother transitions than hard thresholding.

**G&W Section 6.1.3** briefly touches upon these advanced methods.

## 4. Practice Questions and Exercises

**Question 1:**
Explain the fundamental principle behind thresholding in image segmentation.

**Answer:**
Thresholding is a segmentation technique that classifies pixels into different groups based on their intensity values relative to a predefined threshold. Pixels with intensity values above the threshold are assigned to one class, while those below or equal to the threshold are assigned to another. This technique is effective when there is a significant difference in intensity between the object of interest and the background.

**Question 2:**
What is the primary advantage of adaptive thresholding over global thresholding?

**Answer:**
The primary advantage of adaptive thresholding over global thresholding is its ability to handle images with **varying illumination conditions**. Global thresholding uses a single threshold for the entire image, which can fail when lighting is uneven. Adaptive thresholding computes local thresholds for different regions of the image, allowing it to adapt to local variations in illumination and produce better segmentation results in such cases.

**Question 3:**
Describe the objective of Otsu's method for global thresholding.

**Answer:**
Otsu's method aims to automatically find an optimal global threshold value that minimizes the **intra-class variance** (the variance within the foreground and background pixel groups) or equivalently, maximizes the **inter-class variance** (the variance between the foreground and background pixel groups). This leads to the best possible separation of the two pixel classes.

**Question 4:**
Consider an image with a simple histogram as shown below:

```
Intensity Level | Number of Pixels
----------------|-----------------
0               | 100
10              | 200
20              | 500
30              | 800
40              | 1500
50              | 1200
60              | 700
70              | 300
80              | 150
90              | 50
100             | 20
```

If you were to apply global thresholding, what might be a reasonable manual threshold value to separate a bright object from a dark background? Justify your answer.

**Answer:**
Looking at the histogram, there's a clear peak around intensity levels 40-50. The number of pixels drops significantly after intensity level 60 and before intensity level 30. A reasonable manual threshold would likely be somewhere between these two dips, perhaps around **35-40**.

*   **Justification:** If we set the threshold at 40, pixels with intensity > 40 (levels 50-100) would be considered foreground, and pixels with intensity <= 40 (levels 0-40) would be background. This split seems to divide the histogram into two reasonably distinct clusters, with the larger cluster of higher intensities likely representing the object. A value much lower would incorrectly classify many background pixels as foreground, and a value much higher would exclude parts of the object.

**Question 5 (Conceptual):**
How can thresholding be useful in the context of image restoration, even though it's primarily a segmentation technique?

**Answer:**
Thresholding can be used in image restoration for:
1.  **Noise Removal:** After applying a restoration filter (e.g., deblurring, denoising), thresholding can help to isolate the restored object from residual noise or background artifacts, yielding a cleaner result.
2.  **Feature Isolation:** To simplify the image for further analysis or processing, thresholding can segment specific regions of interest (e.g., edges, specific intensity blobs) that might have been enhanced by restoration.
3.  **Defect Masking:** In cases of localized degradation like scratches or sensor noise, thresholding can identify these problematic areas, allowing them to be masked for inpainting or removal.

## 5. Important Points to Remember

*   **Thresholding is a segmentation technique** that classifies pixels based on intensity.
*   The success of thresholding heavily depends on the **intensity contrast** between the object and background.
*   **Global thresholding** uses a single threshold for the entire image.
*   **Otsu's method** is a popular automatic technique for finding an optimal global threshold by maximizing inter-class variance.
*   **Adaptive thresholding** is crucial for images with uneven illumination, as it uses locally varying thresholds.
*   Thresholding can be applied to **color images** by operating on individual channels or transformed color spaces (e.g., HSV).
*   In restoration, thresholding can aid in **noise reduction, feature isolation, and defect masking**.
*   Choosing the right threshold is critical for effective segmentation and restoration.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


## 6. References

*   **Gonzalez, R. C., & Woods, R. E. (2018). *Digital Image Processing* (4th ed.). Pearson.** (Especially Chapter 6, Section 6.1)
*   **Jayaraman, S., Esakkirajan, S., & Veerakumar, T. (2018). *Digital Image Processing*. McGraw Hill.** (Especially Chapter 7, Section 7.1)
*   **Castleman, K. R. (2003). *Digital Image Processing* (2nd ed.). Pearson Education.**
*   **Jain, A. K. (1988). *Fundamentals of Digital Image Processing*. PHI.**
*   **Pratt, W. K. (2007). *Digital Image Processing* (4th ed.). John Wiley.**

This study material provides a comprehensive overview of segmentation based on thresholding, its principles, methods, and relevance within the broader context of image restoration, directly addressing the learning outcomes and course objectives.