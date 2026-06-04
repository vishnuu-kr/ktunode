---
title: "Segmentation based on thresholding"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 4: Image Restoration: Degradation model"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff51e"
status: "completed"
scrapedAt: "2026-05-23T18:06:56.166Z"
---
# DIGITAL IMAGE PROCESSING: Module 4 - Image Restoration: Segmentation based on Thresholding

This module focuses on image segmentation techniques, specifically those based on thresholding. Segmentation is a crucial step in image analysis, dividing an image into meaningful regions or objects. Thresholding is a fundamental and widely used technique for achieving this.

---

## Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the fundamental principle of thresholding for image segmentation.
*   Differentiate between global, local, and adaptive thresholding methods.
*   Explain the Otsu's method for automatic threshold determination.
*   Discuss the limitations of thresholding and when it is most effective.
*   Apply thresholding techniques to segment images.

---

## 1. Introduction to Image Segmentation

**Definition:** Image segmentation is the process of partitioning a digital image into multiple segments (sets of pixels, also known as image objects). The goal is to simplify or change the representation of an image into something that is more meaningful and easier to analyze.

**Importance in Image Processing:**
*   **Object Recognition:** Isolating objects of interest.
*   **Scene Analysis:** Understanding the content of an image.
*   **Medical Imaging:** Delineating tumors or anatomical structures.
*   **Remote Sensing:** Identifying different land cover types.

**(Gonzalez & Woods, 4th Ed., Chapter 7: Image Segmentation)**

---

## 2. Segmentation by Thresholding

**Core Concept:** Thresholding is one of the simplest and most intuitive methods for image segmentation. It is based on the idea that pixels belonging to different objects or regions in an image often have different intensity values.

**The Basic Idea:** A pixel is classified as belonging to one of two classes (e.g., foreground or background) based on its intensity value relative to a threshold value, $T$.

**Mathematical Formulation:**
For a pixel with intensity $I(x,y)$, the thresholding operation can be expressed as:

*   If $I(x,y) > T$, then the pixel is assigned to one class (e.g., foreground, $g_1$).
*   If $I(x,y) \leq T$, then the pixel is assigned to the other class (e.g., background, $g_2$).

This can be represented as:

$g(x,y) = \begin{cases} g_1 & \text{if } I(x,y) > T \\ g_2 & \text{if } I(x,y) \leq T \end{cases}$

**(Gonzalez & Woods, 4th Ed., Section 7.2: Thresholding)**

**Types of Thresholding:**

---

### 2.1 Global Thresholding

**Concept:** A single threshold value ($T$) is used for the entire image. This is suitable when the object and background have distinct and uniform intensity distributions across the image.

**Process:**
1.  Choose a single threshold value $T$.
2.  Apply the thresholding function to every pixel in the image.

**Limitations:**
*   Fails when illumination varies across the image (e.g., shadows, uneven lighting).
*   Requires prior knowledge of the intensity distributions or manual selection of $T$.

**Example:** Segmenting a black object on a white background under uniform lighting.

**(Jayaraman et al., 1st Ed., Chapter 6: Image Segmentation, Section 6.1.1: Thresholding)**

---

### 2.2 Local (Adaptive) Thresholding

**Concept:** The threshold value ($T$) is allowed to vary across the image. This is more robust to variations in illumination. Instead of a single global threshold, local thresholds are computed for different regions of the image.

**How it works:**
*   The image is divided into smaller sub-images (blocks).
*   A threshold is computed for each sub-image based on the local intensity statistics of that sub-image.
*   The threshold is then applied only to the pixels within that sub-image.

**Advantages:**
*   Handles varying illumination conditions much better than global thresholding.

**Disadvantages:**
*   Can introduce artifacts if the block size is too small or if there is significant noise.
*   More computationally intensive.

**Common Methods for Local Thresholding:**

*   **Using Local Mean:** The threshold for a block is the mean intensity of the pixels in that block.
*   **Using Local Median:** The threshold for a block is the median intensity of the pixels in that block.
*   **Using Local Maximum/Minimum:** Threshold based on local extrema.

**(Gonzalez & Woods, 4th Ed., Section 7.2.3: Adaptive Thresholding)**

---

### 2.3 Otsu's Method (Automatic Global Thresholding)

**Concept:** Otsu's method is a powerful technique for automatically finding the optimal global threshold value from an image's histogram. It assumes that the image contains two classes of pixels (e.g., foreground and background) and that the gray-level histograms of these classes are approximately Gaussian.

**Objective:** To find a threshold $T$ that minimizes the intra-class variance or, equivalently, maximizes the inter-class variance.

**Mathematical Basis:**
Let the image histogram be represented by $p(k)$, where $k$ is the gray-level.
Assume a threshold $T$ divides the pixels into two classes: Class 0 (background) and Class 1 (foreground).

*   **Class Probabilities:**
    *   $w_0(T) = \sum_{k=0}^{T} p(k)$ (Probability of class 0)
    *   $w_1(T) = \sum_{k=T+1}^{L-1} p(k) = 1 - w_0(T)$ (Probability of class 1, where L is the number of gray levels)

*   **Class Means:**
    *   $\mu_0(T) = \frac{\sum_{k=0}^{T} k p(k)}{w_0(T)}$ (Mean gray level of class 0)
    *   $\mu_1(T) = \frac{\sum_{k=T+1}^{L-1} k p(k)}{w_1(T)}$ (Mean gray level of class 1)

*   **Inter-Class Variance:**
    $\sigma_B^2(T) = w_0(T)[\mu_0(T) - \mu_T]^2 + w_1(T)[\mu_1(T) - \mu_T]^2$
    where $\mu_T = T$ is the mean of the entire image if the threshold is T.
    A simpler and equivalent form for inter-class variance is:
    $\sigma_B^2(T) = w_0(T)w_1(T)[\mu_1(T) - \mu_0(T)]^2$

*   **Intra-Class Variance:**
    $\sigma_W^2(T) = w_0(T)\sigma_0^2(T) + w_1(T)\sigma_1^2(T)$
    where $\sigma_0^2(T)$ and $\sigma_1^2(T)$ are the variances of class 0 and class 1 respectively.

**Otsu's criterion is to find $T$ that maximizes $\sigma_B^2(T)$ or minimizes $\sigma_W^2(T)$.**

**Algorithm:**
1.  Compute the image histogram $p(k)$ for $k = 0, 1, \dots, L-1$.
2.  Calculate the total mean of the image $\mu_T$.
3.  Iterate through all possible threshold values $T = 0, 1, \dots, L-1$.
4.  For each $T$, calculate $w_0(T)$, $w_1(T)$, $\mu_0(T)$, and $\mu_1(T)$.
5.  Compute $\sigma_B^2(T)$ using the formula.
6.  The optimal threshold $T^*$ is the value of $T$ that maximizes $\sigma_B^2(T)$.

**(Gonzalez & Woods, 4th Ed., Section 7.2.2: Basic global thresholding, Subsection on automatic thresholding using discriminant criteria - Otsu's method)**
**(Jayaraman et al., 1st Ed., Chapter 6: Image Segmentation, Section 6.1.2: Automatic Thresholding: Otsu's Method)**

**When is Otsu's Method effective?**
*   When the histogram is bimodal (two distinct peaks representing foreground and background).
*   When illumination is relatively uniform.

---

## 3. Other Thresholding Techniques

While Otsu's method is popular, other approaches exist:

*   **Iterative Thresholding:** Start with an initial threshold, segment the image, calculate the means of the foreground and background, and use these means to refine the threshold. Repeat until convergence.
*   **Valley Emphasis:** If the histogram has a deep valley between two peaks, the threshold is often chosen in this valley.

**(Castleman, 2/e, Chapter 7: Segmentation)**

---

## 4. Thresholding Performance and Limitations

**Advantages of Thresholding:**
*   Simple and computationally efficient (especially global thresholding).
*   Effective for images with clear intensity separation between objects and background.

**Limitations:**
*   **Sensitivity to Noise:** Noise can create spurious small regions or distort the histogram, leading to incorrect threshold selection.
*   **Varying Illumination:** Global thresholding performs poorly under uneven lighting.
*   **Overlapping Intensity Distributions:** If the intensity distributions of the object and background overlap significantly, thresholding might not be able to separate them effectively.
*   **Complex Textures:** Thresholding struggles with images containing complex textures where intensity variations are significant within regions.

**Improving Thresholding:**
*   **Preprocessing:** Applying smoothing filters (e.g., Gaussian, median) before thresholding can reduce noise and improve performance.
*   **Combining with other Segmentation Methods:** Thresholding can be a first step, followed by more sophisticated techniques.

**(Jain, 1988, Chapter 5: Image Segmentation)**

---

## 5. Course Outcome Alignment

This topic directly addresses the following course outcomes:

*   **CO5: Describe the basic image segmentation techniques (Knowledge Level: K2)**
    *   This topic introduces and explains the fundamental principles of thresholding, a core segmentation technique.
*   **CO2: Analyse the various concepts and mathematical transforms necessary for image processing (Knowledge Level: K3)**
    *   Otsu's method involves analyzing the histogram and calculating statistical measures (variance, mean), demonstrating the analytical aspect of thresholding.

---

## Practice Questions

**Question 1:**
What is the fundamental principle behind image segmentation by thresholding?
**Answer:** Thresholding segments an image by classifying pixels based on their intensity values relative to a chosen threshold. Pixels with intensities above the threshold are assigned to one class, and those below are assigned to another.

**Question 2:**
When would you prefer local (adaptive) thresholding over global thresholding? Explain why.
**Answer:** You would prefer local thresholding when the image has significant variations in illumination. This is because local thresholding calculates thresholds based on the local intensity statistics of image regions, making it more robust to uneven lighting conditions than global thresholding, which uses a single threshold for the entire image.

**Question 3:**
Explain the objective of Otsu's method. What metric does it optimize?
**Answer:** The objective of Otsu's method is to automatically find an optimal global threshold value for an image. It optimizes the **inter-class variance** (or equivalently, minimizes the **intra-class variance**) between the foreground and background classes.

**Question 4:**
Consider an image with a bimodal histogram where the background intensity is concentrated around gray level 50 and the object intensity is around gray level 150. If Otsu's method is applied, what would be a likely outcome for the selected threshold $T$?
**Answer:** A likely outcome would be a threshold value somewhere between 50 and 150, ideally placed in the valley between the two peaks of the histogram to maximize the separation between the two classes. For example, a threshold around 100 might be selected.

**Question 5:**
Which of the following is a limitation of global thresholding?
(a) It is computationally expensive.
(b) It is sensitive to noise.
(c) It performs poorly under varying illumination.
(d) It requires a bimodal histogram.

**Answer:** (c) It performs poorly under varying illumination.
*(Explanation: While noise can affect it, and a bimodal histogram is ideal for Otsu's method, the primary weakness of *global* thresholding is its inability to handle illumination variations.)*

**Question 6 (Exercise):**
Imagine you have a small image block of size 3x3 with the following pixel intensities:
```
50  55  60
180 190 200
40  45  50
```
Calculate the mean intensity of this block. If you were to use local mean thresholding with this block, what would be the threshold value? How would you segment this block if the threshold is 100?

**Answer:**
1.  **Sum of intensities:** 50 + 55 + 60 + 180 + 190 + 200 + 40 + 45 + 50 = 870
2.  **Number of pixels:** 3 x 3 = 9
3.  **Mean intensity:** 870 / 9 = 96.67 (approximately)
4.  **Local Mean Threshold:** The threshold value for this block would be approximately 96.67.
5.  **Segmentation with Threshold = 100:**
    *   Pixels with intensity > 100 will be classified as one type (e.g., foreground, assigned value 255).
    *   Pixels with intensity <= 100 will be classified as another type (e.g., background, assigned value 0).

    The segmented block would look like:
    ```
    0   0   0
    255 255 255
    0   0   0
    ```
    (Assuming 100 is the threshold, 190, 180, 200 are above it and become foreground, others are background).

---

## Important Points to Remember

*   **Thresholding is a pixel-wise operation.**
*   The effectiveness of thresholding depends heavily on the **intensity separation** between the objects and the background.
*   **Preprocessing (smoothing) is often beneficial** before applying thresholding to reduce noise.
*   **Otsu's method is an automatic global thresholding technique** that works best with bimodal histograms.
*   **Adaptive thresholding is essential for images with non-uniform illumination.**
*   Thresholding is a foundational segmentation technique, and understanding its strengths and weaknesses is crucial for more advanced segmentation methods.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
