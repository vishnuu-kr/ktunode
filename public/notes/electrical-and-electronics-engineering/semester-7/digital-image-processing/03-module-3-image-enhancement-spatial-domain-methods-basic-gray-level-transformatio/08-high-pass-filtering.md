---
title: "high pass filtering"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 3: Image Enhancement: Spatial domain methods: Basic Gray Level Transformations"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f3692f"
status: "completed"
scrapedAt: "2026-05-23T16:35:31.960Z"
---
## Digital Image Processing: Study Notes

**Subject:** Digital Image Processing
**Module:** Module 3: Image Enhancement: Spatial Domain Methods
**Topic:** High-Pass Filtering

---

### **1. Introduction to High-Pass Filtering**

High-pass filtering is a technique used in the spatial domain of Digital Image Processing to **enhance edges and fine details** in an image. Unlike low-pass filters that smooth an image by attenuating high frequencies (representing rapid changes like edges), high-pass filters **attenuate low frequencies** (representing gradual changes like smooth regions) and **amplify high frequencies**. This process results in an image where edges and fine details are more prominent.

**Key Concept:** Spatial domain methods operate directly on the pixel values of an image.

**How it works:** High-pass filters are typically implemented using convolution with a kernel (or mask). The kernel's design is crucial, and it often involves differences between neighboring pixels.

---

### **2. Relationship to Other Enhancement Techniques**

*   **Sharpening:** High-pass filtering is a fundamental technique for image sharpening. Sharpening aims to make edges and fine details crisper, which is precisely what high-pass filtering achieves.
*   **Low-Pass Filtering:** High-pass filtering is the inverse operation of low-pass filtering. While low-pass filters blur an image, high-pass filters sharpen it.

---

### **3. Types of High-Pass Filters**

High-pass filters in the spatial domain can be broadly categorized into:

#### **3.1. Ideal High-Pass Filters**

*   **Concept:** In the frequency domain, an ideal high-pass filter passes all frequencies above a certain cutoff frequency and completely blocks frequencies below it.
*   **Spatial Domain Implementation:** Translating ideal filters directly to the spatial domain often results in ringing artifacts due to the sharp transition in the frequency domain. They are usually discussed in the context of frequency domain filtering.

#### **3.2. Butterworth High-Pass Filters**

*   **Concept:** A smoother transition compared to ideal filters, reducing ringing artifacts.
*   **Spatial Domain Implementation:** Similar to ideal filters, their direct spatial domain implementation is less common for basic gray-level transformations compared to kernel-based methods.

#### **3.3. Gaussian High-Pass Filters**

*   **Concept:** Based on the Gaussian function, offering a very smooth transition.
*   **Spatial Domain Implementation:** Again, more directly implemented in the frequency domain.

#### **3.4. Spatial Domain High-Pass Filters (Kernel-Based)**

These are the primary focus of this topic within spatial domain methods. They achieve high-pass filtering by designing convolution kernels that highlight differences between a central pixel and its neighbors.

---

### **4. Kernel-Based High-Pass Filtering**

This is the core of our topic. These filters work by approximating the second derivative of an image. The second derivative is sensitive to rapid changes in intensity, which correspond to edges and details.

#### **4.1. The Laplacian Operator**

*   **Concept:** The Laplacian is a second-order derivative operator. In 2D, it's defined as:
    $\nabla^2 f = \frac{\partial^2 f}{\partial x^2} + \frac{\partial^2 f}{\partial y^2}$
    where $f(x, y)$ is the image intensity function.
*   **Why it's relevant:** The Laplacian highlights regions of rapid intensity change. Where the intensity changes abruptly (e.g., at an edge), the Laplacian will have a significant value. In flat regions, the second derivative is zero.
*   **Digital Approximation:** The continuous Laplacian can be approximated using finite differences.

#### **4.2. Digital Approximations of the Laplacian**

Several kernels can approximate the Laplacian. The sum of the elements in a Laplacian kernel is always zero.

**Kernel 1 (Simple Difference):**
This kernel approximates the Laplacian by looking at differences along the horizontal and vertical directions.

```
[ 0  1  0 ]
[ 1 -4  1 ]
[ 0  1  0 ]
```

*   **Explanation:**
    *   The central `-4` is the negative of the sum of its neighbors.
    *   When this kernel is convolved with an image, the output at a pixel is roughly: `(pixel_above + pixel_below + pixel_left + pixel_right) - 4 * current_pixel`.
    *   In smooth regions, `pixel_above + pixel_below + pixel_left + pixel_right` will be approximately `4 * current_pixel`, resulting in a value close to zero.
    *   At an edge, the sum of neighbors will be significantly different from `4 * current_pixel`, producing a non-zero value.

**Kernel 2 (Includes Diagonals):**
This kernel considers diagonal neighbors as well.

```
[ 1  1  1 ]
[ 1 -8  1 ]
[ 1  1  1 ]
```

*   **Explanation:** This kernel is similar but incorporates diagonal intensity changes. The central value is `-8`.

**Kernel 3 (More Complex Finite Difference Approximations):**
More sophisticated kernels can be derived from various finite difference schemes, but the core principle remains approximating the second derivative.

#### **4.3. High-Pass Filtering using the Laplacian**

Once the Laplacian of an image ($∇^2f$) is computed, it can be used to create a sharpened image using the following relationship:

$g(x, y) = f(x, y) - c \nabla^2 f(x, y)$

where:
*   $g(x, y)$ is the sharpened output image.
*   $f(x, y)$ is the original input image.
*   $\nabla^2 f(x, y)$ is the Laplacian of the image.
*   $c$ is a constant that controls the amount of sharpening.

**How this equation works:**
*   The Laplacian ($\nabla^2 f$) highlights the edges.
*   Subtracting a scaled version of the Laplacian from the original image effectively *adds* the high-frequency components (edges) back to the image.
*   If the Laplacian has a positive value at an edge, subtracting $c \nabla^2 f$ will reduce the intensity in that region.
*   If the Laplacian has a negative value (e.g., the other side of an edge), subtracting $c \nabla^2 f$ will increase the intensity. This accentuates the difference.

**Example:**
Suppose we use the first Laplacian kernel:
```
[ 0  1  0 ]
[ 1 -4  1 ]
[ 0  1  0 ]
```
And apply it to a simple 3x3 image patch:

```
[ 10  20  30 ]
[ 40  50  60 ]
[ 70  80  90 ]
```

Let's compute the Laplacian at the center pixel (value 50):
Laplacian at (50) = (20 + 40 + 60 + 80) - 4 * 50
Laplacian at (50) = 200 - 200 = 0

This indicates a smooth region.

Now, consider an edge:
```
[ 10  10  10 ]
[ 10  50  90 ]
[ 90  90  90 ]
```

Laplacian at (50) = (10 + 10 + 90 + 90) - 4 * 50
Laplacian at (50) = 200 - 200 = 0

This simple kernel might not be very sensitive to simple straight edges. Let's use a more representative kernel:

```
[ 1  1  1 ]
[ 1 -8  1 ]
[ 1  1  1 ]
```

Image patch:
```
[ 10  10  10 ]
[ 10  50  90 ]
[ 90  90  90 ]
```

Laplacian at (50) = (10 + 10 + 10 + 10 + 90 + 90 + 90 + 90) - 8 * 50
Laplacian at (50) = 400 - 400 = 0

Still zero, which might be counter-intuitive. The Laplacian is zero along a linear edge. It is non-zero at the *end* of an edge or at a corner.

Let's try a corner:
```
[ 10  10  10 ]
[ 10  50  10 ]
[ 10  10  90 ]
```

Using kernel 1:
Laplacian at (50) = (10 + 10 + 10 + 10) - 4 * 50
Laplacian at (50) = 40 - 200 = -160

Using kernel 2:
Laplacian at (50) = (10 + 10 + 10 + 10 + 10 + 10 + 10 + 10) - 8 * 50
Laplacian at (50) = 80 - 400 = -320

The negative values indicate a "dip" in intensity relative to the surrounding pixels. When we subtract $c \times (-320)$, the intensity at that pixel will increase, making the corner sharper.

#### **4.4. Non-Laplacian High-Pass Filters (Prewitt/Sobel based)**

While Laplacian-based filters are common for sharpening, high-pass filtering can also be achieved by creating kernels that are essentially high-pass frequency responses.

**Concept:** A general approach to high-pass filtering in the spatial domain is to use kernels where the sum of coefficients is zero. This ensures that constant regions (low frequencies) are attenuated.

**Example of a High-Pass Kernel (not directly Laplacian):**

```
[ -1 -1 -1 ]
[ -1  8 -1 ]
[ -1 -1 -1 ]
```

*   **Explanation:** This kernel is derived from the idea of subtracting the average of the neighborhood from the central pixel. The sum of coefficients is -1 -1 -1 -1 + 8 -1 -1 -1 -1 = 0.
*   **Effect:**
    *   In a flat region, all pixels have similar values, so `8 * central_pixel - sum_of_neighbors` will be close to zero.
    *   At an edge, the neighbors will have different values, leading to a larger non-zero output.
*   **Sharpening:** Similar to the Laplacian approach, you can add this result back to the original image to sharpen: $g(x, y) = f(x, y) + c \times Kernel \times f$.

**Relationship to Gradient:**
High-pass filtering is closely related to gradient calculation. Gradient operators like Prewitt and Sobel compute the first derivative. By combining the horizontal and vertical gradients, we can enhance edges. However, direct high-pass filtering using Laplacian-like kernels is often simpler to implement for direct sharpening.

**Reference:**
*   **Gonzalez & Woods (4th Ed.):** Chapter 3 discusses spatial filtering and introduces the Laplacian operator and its approximations. They show how to use the Laplacian for sharpening.
*   **Jayaraman et al.:** Likely covers similar concepts of spatial filtering and derivative approximations.

---

### **5. Implementation Details and Considerations**

*   **Padding:** When convolving a kernel with an image, special handling is needed for pixels at the image borders. Common padding techniques include:
    *   **Zero Padding:** Adding a border of zeros around the image.
    *   **Replication Padding:** Replicating the border pixel values.
    *   **Reflection Padding:** Reflecting the image content across the border.
    The choice of padding can affect the output at the borders.

*   **Scaling:** The output of the convolution might have a different range of pixel values than the original image. It's often necessary to scale or clip the results to fit within the valid image intensity range (e.g., 0-255 for 8-bit grayscale).

*   **Parameter `c`:** The constant $c$ in $g(x, y) = f(x, y) - c \nabla^2 f(x, y)$ controls the degree of sharpening.
    *   A small $c$ results in mild sharpening.
    *   A large $c$ can lead to over-sharpening, producing artifacts and amplifying noise.

*   **Noise Amplification:** A significant drawback of high-pass filtering is its tendency to amplify noise, as noise often manifests as high-frequency components. If the original image is noisy, it's often beneficial to apply noise reduction (e.g., using a low-pass filter or median filter) *before* high-pass filtering, or to combine high-pass filtering with some form of noise suppression.

*   **Laplacian Mask Properties:**
    *   Sum of elements is zero.
    *   Sensitivity to edges and fine details.

---

### **6. High-Boost Filtering**

*   **Concept:** High-boost filtering is a variation of high-pass filtering that aims to retain more of the original image's low-frequency components while still amplifying high-frequency details. This helps to avoid the loss of overall image brightness that can occur with pure high-pass filtering.
*   **Formula:**
    $g(x, y) = \alpha f(x, y) + \beta \nabla^2 f(x, y)$
    Alternatively, a more common form is:
    $g(x, y) = f(x, y) - c \nabla^2 f(x, y)$
    where $c$ can be negative. If $c$ is negative, it becomes $f(x, y) + |c| \nabla^2 f(x, y)$, which is similar to adding the Laplacian.
    A more explicit high-boost formulation is:
    $g(x, y) = f(x, y) + A \cdot \text{HighPassFiltered}(f(x, y))$
    where $A > 1$. This essentially adds a weighted version of the high-pass filtered image back to the original.

*   **Implementation:**
    1.  Compute the Laplacian of the image.
    2.  Multiply the Laplacian by a constant $A > 1$.
    3.  Add this result to the original image.
    $g(x, y) = f(x, y) + A \cdot \nabla^2 f(x, y)$ (Note: the sign of the Laplacian kernel often leads to subtraction in the sharpening formula. If the kernel is designed to produce positive values for edges, addition is used).

    More precisely, to achieve high-boost:
    $g(x, y) = f(x, y) + c \cdot \text{Laplacian}(f(x, y))$ where $c > 0$. This emphasizes the addition of the edge details.
    (This form is equivalent to $g(x, y) = (1-c)f(x,y) + c \cdot (f(x,y) - \nabla^2 f(x,y))$ if we consider the sharpening formula where the Laplacian is subtracted. A simpler view is $g(x,y) = f(x,y) + \text{sharpened part}$).

    **Better Explanation for High-Boost:**
    Consider the sharpening formula: $g(x, y) = f(x, y) - c \nabla^2 f(x, y)$.
    If we want to retain more of the original image, we can think of it as amplifying the original image and adding the sharpened details.
    A common way to express high-boost is:
    $g(x, y) = A \cdot f(x, y) - B \cdot \text{LowPassFiltered}(f(x, y))$
    Or, using the Laplacian:
    $g(x, y) = f(x, y) - c \cdot \nabla^2 f(x, y)$
    Here, if $c$ is chosen appropriately, it is a form of high-boost. If $c$ is small, you get mild sharpening. If you want to explicitly keep more of the original image, you can think of it as $g(x, y) = w_1 f(x,y) + w_2 \text{sharpened}(f(x,y))$.

    A simpler formulation for high-boost filtering:
    1.  Calculate a low-pass filtered version of the image, say $f_{LP}(x, y)$, using a Gaussian or averaging filter.
    2.  Calculate the details by subtracting the low-pass version from the original: $Details(x, y) = f(x, y) - f_{LP}(x, y)$.
    3.  Amplify the details: $AmplifiedDetails(x, y) = A \cdot Details(x, y)$, where $A > 1$.
    4.  Add the amplified details back to the original image: $g(x, y) = f(x, y) + AmplifiedDetails(x, y)$.
    This is equivalent to: $g(x, y) = f(x, y) + A \cdot (f(x, y) - f_{LP}(x, y))$
    $g(x, y) = (1+A)f(x, y) - A \cdot f_{LP}(x, y)$.

    The Laplacian approach can achieve similar results. If we use the sharpening formula $g(x, y) = f(x, y) - c \nabla^2 f(x, y)$ and choose $c$ to be small, it acts like a high-boost filter.

*   **Purpose:** To reduce the impact of noise and retain more of the original image's appearance while still enhancing edges.

---

### **7. Alignment with Course Outcomes**

*   **CO1 (Understand components):** High-pass filtering involves understanding pixels, kernels, and the overall image enhancement system. (K2)
*   **CO2 (Analyze concepts/transforms):** Understanding the spatial derivatives (Laplacian) and convolution is crucial. Analyzing the effect of different kernels and parameters ($c$) falls under this outcome. (K3)
*   **CO4 (Analyze filtering/restoration):** High-pass filtering is a direct application of spatial domain filtering for enhancement. Its relation to sharpening and potential noise amplification ties into restoration concepts. (K3)

---

### **8. Practice Questions and Answers**

**Question 1:** What is the primary purpose of high-pass filtering in image enhancement?
**Answer:** To enhance edges, fine details, and regions of abrupt intensity change.

**Question 2:** Which operator is commonly used to approximate the second derivative in spatial domain high-pass filtering?
**Answer:** The Laplacian operator.

**Question 3:** Given the following Laplacian kernel:
```
[ 0  1  0 ]
[ 1 -4  1 ]
[ 0  1  0 ]
```
What would be the output of convolving this kernel with the center pixel value of 50 in the image patch:
```
[ 20  30  20 ]
[ 30  50  30 ]
[ 20  30  20 ]
```
**Answer:**
Laplacian = (30 + 30 + 30 + 30) - 4 * 50
Laplacian = 120 - 200 = -80
The output of the convolution at this pixel is -80.

**Question 4:** If the sharpened image is obtained by $g(x, y) = f(x, y) - c \nabla^2 f(x, y)$, and we compute $\nabla^2 f(x, y)$ as -80 at a pixel, with $c = 0.5$ and the original pixel value $f(x, y) = 50$. What is the sharpened pixel value $g(x, y)$?
**Answer:**
$g(x, y) = 50 - 0.5 \times (-80)$
$g(x, y) = 50 + 40$
$g(x, y) = 90$
The sharpened pixel value is 90.

**Question 5:** What is a major drawback of using high-pass filters on noisy images?
**Answer:** High-pass filters tend to amplify noise because noise often manifests as high-frequency components.

---

### **9. Important Points to Remember**

*   High-pass filters **sharpen** images by emphasizing **high frequencies**.
*   They are often implemented using kernels that approximate the **Laplacian (second derivative)**.
*   The core sharpening process involves **adding the highlighted details back** to the original image: $g(x, y) = f(x, y) - c \nabla^2 f(x, y)$.
*   **Noise amplification** is a significant issue.
*   **High-boost filtering** retains more of the original image by using a larger factor for the original image or a smaller factor for the Laplacian subtraction.
*   Laplacian kernels have a **sum of coefficients equal to zero**.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### **10. Further Reading and References**

*   **Gonzalez & Woods (4th Ed.):** Chapter 3 - Spatial Filtering, Section 3.3 - Sharpening Filters (specifically, Laplacian and Gradient-based sharpening).
*   **Jayaraman et al.:** Chapter 5 - Image Enhancement, Section on Spatial Filtering and Sharpening.
*   **Castleman:** Chapter 6 - Spatial Filtering.
*   **Jain:** Chapter 4 - Image Enhancements in Spatial Domain, Section on High-frequency enhancement.

---