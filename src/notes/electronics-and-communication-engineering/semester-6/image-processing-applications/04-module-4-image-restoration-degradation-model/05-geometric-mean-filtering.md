---
title: "geometric mean filtering"
subject: "IMAGE PROCESSING APPLICATIONS"
module: "Module 4: Image Restoration: Degradation model"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780fef7a"
status: "completed"
scrapedAt: "2026-05-23T18:01:29.298Z"
---
# Image Processing Applications: Module 4 - Image Restoration: Degradation Model

## Topic: Geometric Mean Filtering

### 1. Introduction to Image Restoration and Degradation Models

**Course Outcome Alignment:** CO4 (Determine the techniques for restoration of images - Knowledge Level: K5)

Image restoration aims to recover an image that has been degraded. This degradation can occur due to various factors such as noise, blur, or geometric distortions. To restore an image, it's crucial to understand the nature of the degradation. This is achieved by modeling the degradation process.

**Degradation Model:**

A common model for image degradation can be represented as:

$g(x, y) = H(f(x, y)) + \eta(x, y)$

Where:
*   $g(x, y)$: The degraded image.
*   $f(x, y)$: The original, un-degraded image.
*   $H$: An operator representing the degradation process (e.g., blurring).
*   $\eta(x, y)$: Additive noise.

In many practical scenarios, the degradation is a combination of blurring and noise.

### 2. Geometric Mean Filtering

**Course Outcome Alignment:** CO3 (Illustrate the various schemes of image filtering - Knowledge Level: K5), CO4 (Determine the techniques for restoration of images - Knowledge Level: K5)

Geometric mean filtering is a non-linear digital filter used for image smoothing, particularly effective at reducing **Gaussian noise** while preserving edges better than simple averaging filters.

**Key Concept:**

The geometric mean filter is a type of **average filter** that uses the geometric mean of the pixel values within a neighborhood.

**Mathematical Definition:**

For a neighborhood of size $m \times n$ centered at $(x, y)$, the output of the geometric mean filter $G(x, y)$ is calculated as:

$G(x, y) = \left( \prod_{i=1}^{m} \prod_{j=1}^{n} v_{ij} \right)^{\frac{1}{mn}}$

Where:
*   $v_{ij}$: The intensity value of the pixel at position $(i, j)$ within the neighborhood.
*   $m \times n$: The size of the neighborhood.
*   $mn$: The total number of pixels in the neighborhood.

**Important Note:** The geometric mean is only defined for non-negative values. Image intensities are typically non-negative, so this filter is applicable.

**How it works:**

The geometric mean filter calculates the $mn$-th root of the product of all pixel values in the neighborhood. This operation is less sensitive to extreme outlier values (like salt and pepper noise) compared to the arithmetic mean, as it "moderates" the effect of very high or very low values.

### 3. Advantages and Disadvantages of Geometric Mean Filtering

**Advantages:**

*   **Noise Reduction:** Effective in reducing Gaussian noise.
*   **Edge Preservation:** Generally preserves edges better than arithmetic mean filters, as it tends to "pull" pixel values towards the mean without as much blurring.
*   **Reduces Salt-and-Pepper Noise:** While not its primary strength, it can also have some effect on reducing salt-and-pepper noise, although median filtering is usually preferred for this.

**Disadvantages:**

*   **Computational Complexity:** Calculating the product of many pixels and then taking the $mn$-th root can be computationally more intensive than simpler arithmetic operations.
*   **Not Optimal for All Noise Types:** While good for Gaussian noise, it might not be the best choice for other types of noise.
*   **Can Blur Fine Details:** Like all smoothing filters, it can still lead to some blurring of fine details if the neighborhood size is too large.

### 4. Comparison with Other Filters (Relevant to CO3 and CO4)

**a) Arithmetic Mean Filter:**

*   **Calculation:** Calculates the average (arithmetic mean) of pixel values in the neighborhood.
*   **Effect on Noise:** Reduces Gaussian noise effectively.
*   **Effect on Edges:** Tends to blur edges significantly.
*   **Formula:** $A(x, y) = \frac{1}{mn} \sum_{i=1}^{m} \sum_{j=1}^{n} v_{ij}$

**b) Harmonic Mean Filter:**

*   **Calculation:** Calculates the harmonic mean of pixel values in the neighborhood.
*   **Effect on Noise:** Very effective at removing **salt-and-pepper noise**.
*   **Effect on Edges:** Tends to preserve edges better than arithmetic mean but can still cause blurring.
*   **Formula:** $H(x, y) = \frac{mn}{\sum_{i=1}^{m} \sum_{j=1}^{n} \frac{1}{v_{ij}}}$
*   **Important:** Requires pixel values to be non-zero.

**c) Contraharmonic Mean Filter:**

*   **Calculation:** A generalization that allows for the adjustment of the power of the pixel values in the calculation.
*   **Effect on Noise:** Can be used to remove salt-and-pepper noise by setting the order parameter $Q > 0$. If $Q < 0$, it can enhance edges but is more sensitive to impulse noise.
*   **Formula:** $CH(x, y) = \frac{\sum_{i=1}^{m} \sum_{j=1}^{n} v_{ij}^{Q+1}}{\sum_{i=1}^{m} \sum_{j=1}^{n} v_{ij}^{Q}}$
*   **Relationship to Geometric Mean:** When $Q=0$, the Contraharmonic Mean filter becomes the Geometric Mean filter.
*   **Important:** Sensitive to zero values in the denominator if $Q \le 0$.

**d) Median Filter:**

*   **Calculation:** Replaces each pixel with the median value of its neighborhood.
*   **Effect on Noise:** Excellent at removing **salt-and-pepper noise** and other impulse noise.
*   **Effect on Edges:** Preserves edges very well.
*   **Advantage:** Does not introduce new pixel values that were not present in the original neighborhood.

**Summary Table (Illustrative):**

| Filter Type          | Primary Noise Reduction Strength | Edge Preservation | Common Use Case                                 |
| :------------------- | :------------------------------- | :---------------- | :---------------------------------------------- |
| Arithmetic Mean      | Gaussian Noise                   | Poor              | General smoothing, but significant blur         |
| **Geometric Mean**   | Gaussian Noise                   | Moderate          | Smoothing with some edge preservation           |
| Harmonic Mean        | Salt-and-Pepper Noise            | Moderate          | Removing salt-and-pepper noise                  |
| Contraharmonic Mean  | Impulse Noise (with $Q>0$)       | Varies with $Q$   | Noise removal, edge enhancement (with $Q<0$) |
| Median Filter        | Salt-and-Pepper Noise, Impulse   | Excellent         | Removing impulse noise, preserving fine details |

**Textbook References:**

*   **Gonzalez & Woods (2009):** Chapter 5.2 (Order-Statistics Filters) will cover median filtering and other non-linear filters. Chapter 5.3 (Spatially Varying Degradation) and Chapter 7 (Image Restoration) are relevant to the broader context of degradation models and restoration techniques.
*   **Jayaraman, Esakkirajan, Veerakumar (2015):** Chapter 4 (Image Restoration) will detail various restoration techniques and their mathematical formulations.

### 5. Examples

Let's consider a small 3x3 neighborhood of pixel values:

```
[ 10,  20,  30 ]
[ 40,  50,  60 ]
[ 70,  80,  90 ]
```

Let the center pixel be 50.

**a) Arithmetic Mean:**
Sum = 10 + 20 + 30 + 40 + 50 + 60 + 70 + 80 + 90 = 450
Arithmetic Mean = 450 / 9 = 50

**b) Geometric Mean:**
Product = 10 * 20 * 30 * 40 * 50 * 60 * 70 * 80 * 90 = 1.1664e+15
Geometric Mean = (1.1664e+15)^(1/9) $\approx$ 49.99

Notice how close the geometric mean is to the arithmetic mean for these values. The difference becomes more pronounced with a wider spread of values.

**Example with Outlier (Salt-and-Pepper Noise):**

Consider a neighborhood with a single high-intensity outlier (salt noise):

```
[ 10,  20,  30 ]
[ 40, 200,  60 ]  <-- 200 is the outlier
[ 70,  80,  90 ]
```

Center pixel is 200.

**a) Arithmetic Mean:**
Sum = 10 + 20 + 30 + 40 + 200 + 60 + 70 + 80 + 90 = 500
Arithmetic Mean = 500 / 9 $\approx$ 55.56

The arithmetic mean is pulled significantly down by the presence of the outlier, distorting the intended value.

**b) Geometric Mean:**
Product = 10 * 20 * 30 * 40 * 200 * 60 * 70 * 80 * 90 = 2.3328e+16
Geometric Mean = (2.3328e+16)^(1/9) $\approx$ 64.76

The geometric mean is less affected by the outlier than the arithmetic mean, but it's still pulled up.

**c) Median Filter:**
Sorted values: 10, 20, 30, 40, 60, 70, 80, 90, 200
Median = 60

The median filter effectively removes the outlier and replaces the center pixel with a value that was actually present in the neighborhood.

### 6. Practice Questions and Answers

**Question 1:**
What is the primary advantage of using a geometric mean filter over an arithmetic mean filter, particularly in the context of image noise reduction?

**Answer 1:**
The geometric mean filter is generally better at preserving edges and finer details while reducing noise compared to the arithmetic mean filter. This is because the geometric mean is less sensitive to extreme values (outliers) within the neighborhood.

**Question 2:**
Calculate the geometric mean of the following 2x2 neighborhood:
```
[ 16,  4 ]
[  9,  1 ]
```

**Answer 2:**
The neighborhood has 4 pixels.
Product = 16 * 4 * 9 * 1 = 576
Geometric Mean = $(576)^{\frac{1}{4}}$

To calculate this:
$4^4 = 256$
$5^4 = 625$
So, the answer is between 4 and 5.
$4.88^4 \approx 576$
Therefore, the geometric mean is approximately **4.88**.

**Question 3:**
When would you choose a median filter over a geometric mean filter for image restoration?

**Answer 3:**
You would choose a median filter over a geometric mean filter when the primary type of noise present in the image is **salt-and-pepper noise** (impulse noise). Median filters are highly effective at removing such impulsive noise while preserving edges very well. Geometric mean filters are more suited for reducing Gaussian noise.

**Question 4:**
Consider a pixel neighborhood where the values are [2, 2, 2, 2, 100]. Calculate the arithmetic mean and the geometric mean. Which filter would be more affected by the '100' value?

**Answer 4:**
*   **Arithmetic Mean:** (2 + 2 + 2 + 2 + 100) / 5 = 108 / 5 = **21.6**
*   **Geometric Mean:** (2 * 2 * 2 * 2 * 100)^(1/5) = (1600)^(1/5) $\approx$ **5.24**

The **arithmetic mean filter** would be more affected by the '100' value, as it significantly pulls the average upwards. The geometric mean is less affected.

### 7. Important Points to Remember

*   **Geometric Mean Filter:** Computes the geometric mean of pixels in a neighborhood.
*   **Formula:** $G(x, y) = \left( \prod v_{ij} \right)^{\frac{1}{mn}}$
*   **Best for:** Reducing **Gaussian noise** and offers some edge preservation.
*   **Constraint:** Requires non-negative pixel values.
*   **Comparison:** Less sensitive to outliers than arithmetic mean, but more sensitive than median filters for impulse noise.
*   **Contraharmonic Mean:** Geometric mean is a special case of the contraharmonic mean when the order parameter $Q = 0$.
*   **Degradation Model:** Understanding the degradation model is crucial for selecting the appropriate restoration filter. Geometric mean filtering is one such technique to address a specific type of degradation (blur and Gaussian noise).

### 8. Conclusion

Geometric mean filtering is a valuable tool in image restoration, offering a balance between noise reduction and edge preservation, particularly for Gaussian noise. Its mathematical foundation lies in the geometric mean, which makes it less susceptible to extreme pixel values compared to arithmetic averaging. However, for impulse noise, median filtering remains the superior choice. Understanding the characteristics of different filters and the nature of image degradation is key to effectively restoring images.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
