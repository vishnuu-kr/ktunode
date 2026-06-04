---
title: "Segmentation based on thresholding"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 4: Image Restoration: Degradation model"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fee2e"
status: "completed"
scrapedAt: "2026-05-23T18:00:48.627Z"
---
# DIGITAL IMAGE PROCESSING - Module 4: Image Restoration

## Topic: Segmentation based on Thresholding

This topic explores a fundamental image segmentation technique that aims to partition an image into regions of interest based on pixel intensity values. While primarily discussed within the context of image restoration (identifying foreground from background after degradation), thresholding is a versatile segmentation method applicable to many scenarios.

### Learning Outcomes Covered:

*   **CO5: Describe the basic image segmentation techniques (Knowledge Level: K2)** - This topic directly addresses the core principles of a fundamental image segmentation technique.

### 1. Introduction to Image Segmentation

**Definition:** Image segmentation is the process of partitioning a digital image into multiple segments (sets of pixels, also known as image objects or regions). The goal is to simplify or change the representation of an image into something that is more meaningful and easier to analyze. Segmentation is a crucial step in most image analysis tasks, as it is typically the first step in extracting useful information from an image.

**Importance in Image Processing:**
*   Simplifies complex images by grouping pixels with similar properties.
*   Enables the isolation of objects of interest for further analysis (e.g., measurement, recognition).
*   A prerequisite for higher-level image processing tasks like object recognition and scene understanding.

**Relevance to Image Restoration:**
In image restoration, segmentation can be used to separate the degraded object from its background, allowing for more targeted restoration efforts. For instance, if a document image is scanned with noise, thresholding can help separate the text (foreground) from the paper (background).

### 2. Thresholding: The Core Concept

**Definition:** Thresholding is an image segmentation technique based on classifying pixels into two or more groups based on their intensity values. A threshold value (or a set of threshold values) is used to separate pixels into different segments.

**Basic Idea:** If the intensity of a pixel $f(x, y)$ is greater than a threshold $T$, it is classified into one class (e.g., foreground); otherwise, it is classified into another class (e.g., background).

This can be expressed mathematically as:

$g(x, y) = \begin{cases}
\text{value}_1 & \text{if } f(x, y) > T \\
\text{value}_2 & \text{if } f(x, y) \le T
\end{cases}$

Where:
*   $f(x, y)$ is the intensity of the pixel at coordinates $(x, y)$.
*   $T$ is the threshold value.
*   $g(x, y)$ is the output segmented image.
*   $\text{value}_1$ and $\text{value}_2$ are the values assigned to the resulting segments.

**(Referenced from: Gonzalez & Woods, 4th Ed., Chapter 6: Segmentation)**

### 3. Types of Thresholding

Thresholding techniques can be broadly categorized based on the threshold value used.

#### 3.1. Global Thresholding

In global thresholding, a single threshold value $T$ is used for the entire image.

**Advantages:**
*   Simple to implement.
*   Effective when the object and background intensities are well-separated and consistent across the image.

**Disadvantages:**
*   Fails when illumination varies across the image (e.g., shadows, non-uniform lighting).
*   May not perform well on images with complex textures or overlapping intensity distributions.

**Choosing a Global Threshold:**
Several methods exist for automatically determining an optimal global threshold:

*   **Otsu's Method:** This is a popular and widely used automatic thresholding method that aims to minimize the intra-class variance of the black and white pixels. It assumes that the image histogram is bimodal (two distinct peaks representing foreground and background).
    *   **Concept:** Otsu's method treats thresholding as a two-class clustering problem. It seeks a threshold that maximizes the between-class variance (or equivalently, minimizes the within-class variance).
    *   **Mathematical Basis:** For a given threshold $T$, the method calculates the probabilities of pixels belonging to the foreground and background classes, and their respective means. It then computes the variance within each class and the variance between the classes. The threshold that maximizes the between-class variance is selected.
    *   **(Referenced from: Gonzalez & Woods, 4th Ed., Section 6.2.1; Jayaraman et al., Chapter 8)**

*   **Mean Thresholding:** The threshold is set to the mean intensity of the entire image. This is a very simple but often not very effective method.

*   **Isodata (Iterative Selection) Method:** This is an iterative process.
    1.  An initial threshold is chosen (e.g., the mean of the image).
    2.  The image is segmented using this threshold.
    3.  The mean of the "object" pixels and the mean of the "background" pixels are calculated.
    4.  A new threshold is computed as the average of these two means.
    5.  Steps 2-4 are repeated until the threshold converges (i.e., the change in the threshold between iterations is below a certain small value).
    *   **(Referenced from: Gonzalez & Woods, 4th Ed., Section 6.2.1)**

**Example of Global Thresholding:**
Consider an image of a black text on a white paper. If the lighting is uniform, a single threshold can effectively separate the text from the paper.

#### 3.2. Local (Adaptive) Thresholding

In local thresholding, the threshold value varies across the image, being calculated for different regions of the image. This is particularly useful when the illumination is not uniform.

**Advantages:**
*   Handles variations in illumination much better than global thresholding.
*   Can segment objects in images with varying backgrounds.

**Disadvantages:**
*   More computationally intensive than global thresholding.
*   Can be sensitive to the size of the local neighborhood chosen.

**Methods:**

*   **Region-based Thresholding:** The image is divided into sub-regions, and a threshold is computed for each sub-region. The threshold for a sub-region can be its mean, median, or a value determined by Otsu's method applied to that sub-region.

*   **Pixel-based Adaptive Thresholding:** The threshold for a pixel $(x, y)$ is determined based on a neighborhood of pixels around $(x, y)$. For example, the threshold can be the mean of the pixels in a local window centered at $(x, y)$.

    $T(x, y) = \text{mean}(N_{xy})$

    Where $N_{xy}$ is the neighborhood of pixels around $(x, y)$.

    **(Referenced from: Gonzalez & Woods, 4th Ed., Section 6.2.2; Jayaraman et al., Chapter 8)**

**Example of Local Thresholding:**
Imagine a scanned historical document where the paper has aged unevenly, with some parts darker than others. Local thresholding can adapt to these variations, ensuring that text is segmented correctly even in dimly lit or shadowed areas.

### 4. Thresholding Variations and Related Concepts

While the core concept is binary thresholding (two classes), it can be extended.

#### 4.1. Multi-level Thresholding (Color Thresholding)

Instead of a single threshold, multiple thresholds can be used to create more than two segments. This is particularly useful for segmenting images with multiple distinct intensity levels.

$g(x, y) = \begin{cases}
\text{value}_1 & \text{if } T_1 < f(x, y) \le T_2 \\
\text{value}_2 & \text{if } T_2 < f(x, y) \le T_3 \\
\dots & \dots \\
\text{value}_n & \text{if } f(x, y) > T_n \text{ or } f(x, y) \le T_1
\end{cases}$

**(Referenced from: Gonzalez & Woods, 4th Ed., Section 6.1)**

**Example:** Segmenting a medical image where different tissues have distinct intensity ranges.

#### 4.2. Color Thresholding

For color images, thresholding can be applied to individual color channels (e.g., Red, Green, Blue) or to color spaces like HSV (Hue, Saturation, Value).

**Example:** Isolating a red object in an image by setting thresholds for the red channel and potentially constraints on the green and blue channels.

#### 4.3. Thresholding in the Context of Image Restoration (Revisiting)

As mentioned earlier, thresholding is a valuable tool in image restoration:

*   **Noise Reduction:** After applying a denoising filter, thresholding can be used to separate the restored object from any remaining background noise or artifacts.
*   **Degraded Image Analysis:** In severely degraded images, the intensity distribution might be shifted or spread. Thresholding can help recover the underlying structure by identifying pixels belonging to the object of interest. For example, in a scanned document with heavy noise and blurring, thresholding can be used to extract the text characters.

**(Referenced from: Castleman, Chapter 6; Jain, Chapter 7)**

### 5. Key Concepts to Remember

*   **Segmentation:** Partitioning an image into meaningful regions.
*   **Thresholding:** Segmentation based on pixel intensity values.
*   **Global Thresholding:** A single threshold for the entire image.
*   **Local (Adaptive) Thresholding:** Threshold varies across the image.
*   **Otsu's Method:** Automatic global thresholding by minimizing intra-class variance.
*   **Isodata Method:** Iterative adaptive thresholding.
*   **Multi-level Thresholding:** Using multiple thresholds for more than two segments.
*   **Color Thresholding:** Applying thresholding to color images.

### 6. Practice Questions & Exercises

**Question 1:**
Explain the fundamental difference between global and local thresholding. When would you prefer local thresholding over global thresholding?

**Answer:**
Global thresholding uses a single threshold value for the entire image, assuming uniform illumination and well-separated intensity distributions. Local thresholding computes thresholds for different regions or pixels based on their local neighborhoods, making it suitable for images with non-uniform illumination. Local thresholding is preferred when illumination varies across the image, as it can adapt to these changes to accurately segment objects.

**Question 2:**
Describe the basic principle behind Otsu's method for automatic threshold selection.

**Answer:**
Otsu's method assumes that the image histogram is bimodal. It aims to find a threshold value that minimizes the weighted sum of the intra-class variances of the pixels (or equivalently, maximizes the inter-class variance). This is achieved by iterating through all possible threshold values and calculating the variance within the foreground and background classes for each threshold. The threshold that yields the minimum intra-class variance is selected as the optimal threshold.

**Question 3:**
Consider an image with a histogram as shown below (imagine a bimodal histogram with peaks at intensity 50 and 180, with a valley in between). If you were to choose a global threshold, which method would be most appropriate, and why?

**(Imagine a sketch of a bimodal histogram here)**

**Answer:**
For a bimodal histogram, Otsu's method would be the most appropriate method for choosing a global threshold. This is because Otsu's method is designed to work best on images with two distinct classes of pixels (foreground and background) that have relatively clear intensity separation, which is characteristic of a bimodal histogram. The method will find the valley between the two peaks to separate the classes.

**Question 4 (Conceptual):**
You are trying to segment an image of a handwritten document where the paper has aged and has yellowed patches, making the background uneven. Which type of thresholding would you likely employ? Briefly explain why.

**Answer:**
Local (adaptive) thresholding would likely be employed. This is because the yellowed patches indicate non-uniform illumination across the image. Local thresholding allows the threshold to adjust based on the local intensity values, enabling better separation of the handwritten ink (foreground) from the uneven background in different parts of the document.

**Question 5 (True/False):**
Global thresholding is always superior to local thresholding for image segmentation.

**Answer:**
False. Global thresholding is simpler but can fail in non-uniform illumination. Local thresholding is more robust to illumination variations and is often preferred in such scenarios.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 7. References

*   **Gonzalez, R. C., & Woods, R. E. (2018). *Digital Image Processing* (4th ed.). Pearson.** (Chapter 6: Segmentation) - This is a foundational text providing detailed explanations of segmentation techniques, including thresholding, Otsu's method, and adaptive thresholding.
*   **Jayaraman, S., Esakkirajan, S., & Veerakumar, T. (n.d.). *Digital Image Processing*. McGraw Hill.** (Chapter 8: Image Segmentation) - Offers a complementary perspective and practical coverage of segmentation methods.
*   **Castleman, K. R. (2003). *Digital Image Processing* (2nd ed.). Pearson Education.** (Chapter 6: Image Segmentation) - Provides insights into segmentation strategies and their applications.
*   **Jain, A. K. (1988). *Fundamentals of Digital Image Processing*. Prentice Hall of India.** (Chapter 7: Image Segmentation) - Offers a theoretical foundation for segmentation.

### 8. Alignment with Course Outcomes

This topic directly contributes to:

*   **CO5: Describe the basic image segmentation techniques (Knowledge Level: K2)** - By covering the fundamental principles, types, and methods of thresholding, students gain a K2 understanding of a basic segmentation technique. The practice questions reinforce this descriptive knowledge.

This concludes the study notes for Segmentation based on Thresholding.