---
title: "Image Enhancement: Spatial domain methods: Basic Gray Level Transformations"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 3: Image Enhancement: Spatial domain methods: Basic Gray Level Transformations"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36928"
status: "completed"
scrapedAt: "2026-05-23T16:35:22.188Z"
---
# DIGITAL IMAGE PROCESSING

## Module 3: Image Enhancement: Spatial Domain Methods

### Topic: Basic Gray Level Transformations

---

### 1. Introduction to Image Enhancement

**Definition:** Image enhancement is a type of image processing that aims to improve the visual quality or interpretability of an image for a specific application. It does not add new information to the image, but rather modifies the existing pixel values to make certain features more prominent.

**Importance:**
*   Improves visual appearance for human observation.
*   Facilitates automated image analysis and interpretation.
*   Essential for tasks like medical imaging, satellite imagery analysis, and surveillance.

**CO1 Alignment:** Understanding the role of image enhancement as a component of an image processing system. (K2)

**Textbook Reference:** Gonzalez & Woods, Chapter 5: Fundamentals of Intensity Transformations and Spatial Filtering.

---

### 2. Spatial Domain Methods

**Definition:** Spatial domain methods operate directly on the pixels of an image. The value of a pixel in the output image is determined by the value of the pixel itself or its neighbors in the input image.

**Types:**
*   **Point Processing:** Operations that depend only on the individual pixel, without considering its neighbors.
*   **Neighborhood Processing:** Operations that depend on a neighborhood of pixels surrounding the pixel of interest.

**CO2 Alignment:** Understanding mathematical transformations applied to pixel values. (K2)

---

### 3. Basic Gray Level Transformations (Point Processing)

These are the simplest form of spatial domain enhancement techniques. They involve a mapping of gray level values in the input image to gray level values in the output image.

**General Form:** $s = T(z)$, where $z$ is the gray level of the input image and $s$ is the gray level of the output image. $T$ is a transformation function.

**Key Transformations:**

#### 3.1. Image Negatives

**Concept:** Reverses the contrast of an image. Dark regions become bright, and bright regions become dark. This is achieved by subtracting each pixel's gray level from the maximum possible gray level.

**Formula:**
For an 8-bit image (gray levels 0-255): $s = 255 - z$

**When to use:**
*   To reveal details in dark images.
*   Useful in medical imaging (e.g., X-rays).

**Example:**
Consider a 3x3 image with gray levels:
```
100  50  200
 20 150  70
 80 120  30
```
Applying negative transformation ($255 - z$):
```
155 205  55
235 105 185
175 135 225
```

**CO2 Alignment:** Understanding a fundamental transformation of pixel values. (K2)

**Textbook Reference:** Gonzalez & Woods, Section 5.1.1: The Negative Transformation.

#### 3.2. Logarithmic Transformations

**Concept:** Compresses the high intensity values and expands the low intensity values. This is particularly useful for images with a wide range of pixel values where details in darker regions are obscured.

**Formula:**
$s = c \log(1 + z)$
where $c$ is a constant and $z$ is the gray level of the input image. The `+1` is added to handle the case where $z=0$.

**When to use:**
*   To enhance details in the darker regions of an image.
*   Useful for images with a wide dynamic range, such as satellite imagery or images of the human retina.

**Example:**
Let $c=1$. Consider gray levels $z$: 0, 50, 100, 200, 255.
*   $z=0$: $s = \log(1+0) = \log(1) = 0$
*   $z=50$: $s = \log(1+50) = \log(51) \approx 1.707$
*   $z=100$: $s = \log(1+100) = \log(101) \approx 2.004$
*   $z=200$: $s = \log(1+200) = \log(201) \approx 2.303$
*   $z=255$: $s = \log(1+255) = \log(256) \approx 2.408$
The output values are compressed, especially for higher input values.

**Inverse Logarithmic Transformation:** $s = c \exp(\frac{z}{c}) - 1$. This expands high values and compresses low values.

**CO2 Alignment:** Understanding a non-linear transformation of pixel values. (K2)

**Textbook Reference:** Gonzalez & Woods, Section 5.1.2: The Logarithmic Transformation.

#### 3.3. Power-Law Transformations (Gamma Correction)

**Concept:** Generalizes logarithmic and negative transformations. It's a family of transformations of the form $s = c * z^\gamma$.

**Formula:** $s = c * z^\gamma$
where $c$ and $\gamma$ are positive constants.

**Behavior based on $\gamma$:**
*   **$\gamma < 1$:** The transformation expands the range of darker gray levels and compresses the range of brighter gray levels. This is similar to a logarithmic transformation. Used for brightening images.
*   **$\gamma > 1$:** The transformation compresses the range of darker gray levels and expands the range of brighter gray levels. This is useful for brightening images where the mid-tones are not the primary concern.
*   **$\gamma = 1$:** Linear transformation, $s = c * z$. If $c=1$, it's an identity transformation.

**When to use:**
*   Adjusting image contrast and brightness.
*   Commonly used in digital cameras and displays to match human perception of brightness.
*   To correct for non-linear responses of image acquisition devices.

**Example:**
Consider gray levels $z$: 0, 50, 100, 200, 255, with $c=1$.
*   **$\gamma = 0.5$ (Square root):** $s = \sqrt{z}$
    *   $z=0 \implies s=0$
    *   $z=50 \implies s \approx 7.07$
    *   $z=100 \implies s=10$
    *   $z=200 \implies s \approx 14.14$
    *   $z=255 \implies s=15.97$
    Darker values are stretched.

*   **$\gamma = 2$ (Square):** $s = z^2$
    *   $z=0 \implies s=0$
    *   $z=50 \implies s=2500$ (output clipped to 255, so 255)
    *   $z=100 \implies s=10000$ (output clipped to 255, so 255)
    *   $z=200 \implies s=40000$ (output clipped to 255, so 255)
    *   $z=255 \implies s=65025$ (output clipped to 255, so 255)
    In this case, the higher values get saturated quickly. If we consider a smaller range like $z=0, 10, 20, 30, 40$:
    *   $z=0 \implies s=0$
    *   $z=10 \implies s=100$
    *   $z=20 \implies s=400$ (clipped to 255)
    *   $z=30 \implies s=900$ (clipped to 255)
    *   $z=40 \implies s=1600$ (clipped to 255)
    This highlights the importance of selecting the correct $\gamma$ and scaling appropriately.

**CO2 Alignment:** Understanding a family of non-linear transformations. (K2)

**Textbook Reference:** Gonzalez & Woods, Section 5.1.3: The Power-Law Transformation.
**Reference Book Insight (Jayaraman et al.):** They emphasize that Gamma correction is critical for display devices, as human perception of brightness is non-linear.

#### 3.4. Piecewise Linear Transformations

**Concept:** A flexible way to perform intensity transformations. The transformation function is defined by a set of straight line segments. This allows for more specific control over different intensity ranges.

**Types:**
*   **Contrast Stretching:** Expands the range of intensity values in an image, making it easier to distinguish details.
*   **Intensity Level Slicing (Gray Level Slicing):** Highlights a specific range of gray levels. All gray levels within the range are enhanced (e.g., displayed as bright), while others are suppressed.
*   **Bit-Plane Slicing:** Decomposes an image into its constituent bit planes. Each bit plane represents a binary image of the original image, where the $k$-th bit plane contains the $k$-th bit of each pixel's gray level representation.

**3.4.1. Contrast Stretching**

**Goal:** To increase the dynamic range of the gray levels in the image.

**Process:**
1.  Define a lower threshold ($z_{min}$) and an upper threshold ($z_{max}$) in the input image.
2.  Define a lower gray level ($s_{min}$) and an upper gray level ($s_{max}$) for the output image. Typically, $s_{min}=0$ and $s_{max}=L-1$ (where $L$ is the number of gray levels, e.g., 256 for 8-bit images).
3.  The transformation function is a line that maps $[z_{min}, z_{max}]$ to $[s_{min}, s_{max}]$.
    *   If $z < z_{min}$, then $s = 0$.
    *   If $z \ge z_{max}$, then $s = L-1$.
    *   If $z_{min} \le z \le z_{max}$, then $s = \frac{s_{max} - s_{min}}{z_{max} - z_{min}} (z - z_{min}) + s_{min}$.

**When to use:** To make features in an image more visible when the contrast is poor.

**Example:**
Input image has gray levels from 80 to 180. We want to stretch this to the full range of 0 to 255.
$z_{min} = 80$, $z_{max} = 180$.
$s_{min} = 0$, $s_{max} = 255$. $L=256$.
The transformation for $80 \le z \le 180$ is:
$s = \frac{255 - 0}{180 - 80} (z - 80) + 0$
$s = \frac{255}{100} (z - 80)$
$s = 2.55 (z - 80)$

If $z=80$, $s = 2.55(0) = 0$.
If $z=130$, $s = 2.55(130 - 80) = 2.55(50) = 127.5$.
If $z=180$, $s = 2.55(180 - 80) = 2.55(100) = 255$.

**CO2 Alignment:** Understanding how piecewise linear functions can control pixel transformations. (K2)

**Textbook Reference:** Gonzalez & Woods, Section 5.1.4: Piecewise Linear . . . Contrast Stretching.

**3.4.2. Intensity Level Slicing (Gray Level Slicing)**

**Goal:** To highlight specific ranges of pixel values.

**Types:**
*   **Display in High Intensity:** Pixels within the specified range $[a, b]$ are displayed as white (or a high gray level), and pixels outside the range are displayed as black (or a low gray level).
    *   $s = 1$ if $a \le z \le b$, else $s = 0$.
*   **Display in Original Intensities:** Pixels within the range $[a, b]$ are displayed with their original intensities, while pixels outside the range are set to a constant background gray level.
    *   $s = z$ if $a \le z \le b$, else $s = k$ (background gray level).

**When to use:**
*   To emphasize features that are characterized by their gray levels, such as in medical imaging or for detecting specific objects.
*   To segment an image based on pixel intensity.

**Example:**
Consider a grayscale image. We want to highlight all pixels with gray levels between 100 and 150.
Using "Display in High Intensity" ($a=100, b=150$):
If a pixel has gray level 120, its output will be 1.
If a pixel has gray level 80, its output will be 0.
If a pixel has gray level 160, its output will be 0.

Using "Display in Original Intensities" ($a=100, b=150$, background $k=50$):
If a pixel has gray level 120, its output will be 120.
If a pixel has gray level 80, its output will be 50.
If a pixel has gray level 160, its output will be 50.

**CO2 Alignment:** Understanding transformations that select and modify specific intensity ranges. (K2)

**Textbook Reference:** Gonzalez & Woods, Section 5.1.4: Piecewise Linear . . . Gray Level Slicing.

#### 3.5. Bit-Plane Slicing

**Concept:** Images are represented by bits. For an 8-bit grayscale image, each pixel's gray level is represented by 8 bits. Bit-plane slicing decomposes the image into 8 binary images, where each image corresponds to one bit plane (from the most significant bit to the least significant bit).

**Process:** For a pixel with gray level $z$, find its binary representation. For the $k$-th bit plane, the output pixel value is 1 if the $k$-th bit of $z$ is 1, and 0 if it's 0.

**Formula:** The $k$-th bit plane can be obtained by:
$s = (z \text{ AND } 2^{k-1}) / 2^{k-1}$ for $k = 1, \dots, 8$ (where bit 1 is the LSB, bit 8 is the MSB).
Alternatively, for the $k$-th bit plane:
$s = \text{floor}(z / 2^{8-k}) \pmod 2$ for $k = 1, \dots, 8$ (where bit 1 is MSB, bit 8 is LSB).

**Example:**
Consider a pixel with gray level $z = 150$.
In 8-bit binary: $150_{10} = 10010110_2$.

*   **Bit Plane 7 (MSB):** `1`
*   **Bit Plane 6:** `0`
*   **Bit Plane 5:** `0`
*   **Bit Plane 4:** `1`
*   **Bit Plane 3:** `0`
*   **Bit Plane 2:** `1`
*   **Bit Plane 1 (LSB):** `0`

**When to use:**
*   To understand the contribution of each bit to the overall image appearance.
*   The most significant bits (MSBs) contain the most visual information. The least significant bits (LSBs) contribute primarily to fine details.
*   Useful for image compression and analysis.

**CO2 Alignment:** Understanding how image data is represented in binary and how to isolate specific bits. (K2)
**CO5 Alignment:** Bit-plane slicing can be seen as a form of very basic segmentation into binary images. (K2)

**Textbook Reference:** Gonzalez & Woods, Section 5.1.5: Bit-Plane Slicing.

---

### 4. Histogram Processing

**Concept:** A histogram is a graphical representation of the distribution of pixel intensities in an image. It plots the number of pixels for each gray level.

**Importance:** Histograms provide information about the contrast and overall brightness of an image.

**Histogram Equalization:**
**Goal:** To create an image with a more uniform histogram, thereby improving contrast. It's a non-linear stretching of the gray levels.

**Transformation Function:** The cumulative distribution function (CDF) of the pixel intensities.
$s_k = T(r_k) = \sum_{i=0}^{k} p_r(r_i)$
where $r_k$ is the $k$-th gray level, $p_r(r_i)$ is the normalized histogram of the input image.

**Steps:**
1.  Compute the probability mass function (PMF) of the input image's gray levels.
2.  Compute the cumulative distribution function (CDF) from the PMF.
3.  Apply the CDF as the transformation function to map input gray levels to output gray levels.
    *   $s_k = \text{round}\left( (L-1) \times \text{CDF}(r_k) \right)$
    where $L$ is the number of gray levels.

**When to use:** To enhance images where the gray levels are clustered in a narrow range, resulting in low contrast.

**Example:**
Consider a simple 2x2 image with gray levels:
```
50  60
50  70
```
Total pixels = 4.
Gray levels: 50, 50, 60, 70.

*   **PMF ($p_r(r_k)$):**
    *   $p_r(50) = 2/4 = 0.5$
    *   $p_r(60) = 1/4 = 0.25$
    *   $p_r(70) = 1/4 = 0.25$

*   **CDF ($s_k$ for L=256):**
    *   $s_{50} = \text{round}(255 \times p_r(50)) = \text{round}(255 \times 0.5) = \text{round}(127.5) = 128$.
    *   $s_{60} = \text{round}(255 \times (p_r(50) + p_r(60))) = \text{round}(255 \times (0.5 + 0.25)) = \text{round}(255 \times 0.75) = \text{round}(191.25) = 191$.
    *   $s_{70} = \text{round}(255 \times (p_r(50) + p_r(60) + p_r(70))) = \text{round}(255 \times (0.5 + 0.25 + 0.25)) = \text{round}(255 \times 1) = 255$.

*   **Output Image:**
    ```
    128  191
    128  255
    ```
The contrast of the image is significantly increased.

**Histogram Matching (Specification):**
**Goal:** To transform an image so that its histogram matches a specified arbitrary histogram.

**CO2 Alignment:** Understanding how the distribution of pixel intensities can be modified. (K3)

**Textbook Reference:** Gonzalez & Woods, Section 5.2: Intensity Transformations Using the Histogram.
**Reference Book Insight (Castleman):** Discusses histogram equalization as a fundamental tool for improving image contrast, especially in situations where the original image might be underexposed or overexposed.

---

### 5. Important Points to Remember

*   **Spatial Domain:** Operations directly on pixel values.
*   **Point Processing:** Transformation depends only on the individual pixel.
*   **Negative Transformation:** Reverses contrast. Useful for dark images.
*   **Logarithmic Transformation:** Enhances dark regions, compresses bright regions. $s = c \log(1+z)$.
*   **Power-Law (Gamma) Transformation:** Flexible contrast adjustment. $s = c * z^\gamma$. $\gamma < 1$ brightens, $\gamma > 1$ darkens (relatively).
*   **Piecewise Linear Transformations:** Offer precise control over specific intensity ranges.
    *   **Contrast Stretching:** Expands the range of gray levels.
    *   **Intensity Slicing:** Highlights or suppresses specific gray level ranges.
*   **Bit-Plane Slicing:** Decomposes an image into its bit planes to understand bit contribution. MSBs carry more information.
*   **Histogram:** Represents the distribution of pixel intensities.
*   **Histogram Equalization:** Aims to produce an image with a more uniform histogram, improving contrast.
*   **Image Enhancement vs. Restoration:** Enhancement is subjective (visual quality), while restoration is objective (reducing degradation).

---

### 6. Practice Questions

1.  **Which transformation is best suited for enhancing details in the dark regions of an image?**
    *   (a) Image Negative
    *   (b) Logarithmic Transformation
    *   (c) Power-Law Transformation with $\gamma > 1$
    *   (d) Contrast Stretching
    **Answer:** (b) Logarithmic Transformation. It expands the low intensity values.

2.  **If you wanted to make a dimly lit photograph appear brighter and reveal details in the shadows, which gamma value ($\gamma$) would you typically choose for a power-law transformation ($s = cz^\gamma$)?**
    *   (a) $\gamma = 2.0$
    *   (b) $\gamma = 1.0$
    *   (c) $\gamma = 0.5$
    *   (d) $\gamma = 0$
    **Answer:** (c) $\gamma = 0.5$. A $\gamma$ value less than 1 (like 0.5, which is like a square root) stretches the darker gray levels, making the image brighter.

3.  **Consider an image with gray levels ranging from 50 to 150. If you perform contrast stretching to map this range to the full 0-255 range, what will be the output gray level for an input pixel with value 100?**
    *   (a) 75
    *   (b) 127.5
    *   (c) 150
    *   (d) 200
    **Answer:** (b) 127.5.
    Using the contrast stretching formula: $s = \frac{s_{max} - s_{min}}{z_{max} - z_{min}} (z - z_{min}) + s_{min}$
    $s = \frac{255 - 0}{150 - 50} (100 - 50) + 0$
    $s = \frac{255}{100} (50)$
    $s = 2.55 \times 50 = 127.5$

4.  **What is the primary purpose of bit-plane slicing?**
    *   (a) To blur the image.
    *   (b) To reduce noise.
    *   (c) To understand the contribution of individual bits to the image's appearance.
    *   (d) To change the color of the image.
    **Answer:** (c) To understand the contribution of individual bits to the image's appearance.

5.  **Explain the difference between histogram equalization and contrast stretching.**
    **Answer:**
    *   **Contrast Stretching:** Aims to linearly expand the range of gray levels in an image to span a desired range (usually the full range of the display). It requires defining specific input and output intensity ranges.
    *   **Histogram Equalization:** Aims to produce an image with a flat histogram (uniform distribution of gray levels). It automatically transforms the gray levels based on the image's own histogram and CDF, without requiring manual specification of intensity ranges. It's a non-linear process.

---

### 7. Alignment with Course Outcomes

*   **CO1: Understand different components of image processing system (Knowledge Level: K2)**
    *   This module covers image enhancement as a crucial component of an image processing system, explaining its purpose and position within the overall workflow.
*   **CO2: Analyse the various concepts and mathematical transforms necessary for image processing (Knowledge Level: K3)**
    *   The core of this module is dedicated to understanding and applying various mathematical transformations (negative, log, power-law, piecewise linear) to pixel gray levels. The concept of histogram processing also falls under this.
*   **CO3: Illustrate the various schemes of image compression (Knowledge Level: K3)**
    *   While not directly about compression schemes, understanding bit-plane slicing provides insight into how image data is structured and how certain bits (like LSBs) can be modified or discarded for compression with minimal visual impact.
*   **CO4: Analyze the filtering and restoration of images (Knowledge Level: K3)**
    *   This module provides the foundational understanding of manipulating pixel values in the spatial domain, which is a prerequisite for understanding spatial filtering and restoration techniques discussed in later modules.
*   **CO5: Understand the basic image segmentation techniques (Knowledge Level: K2)**
    *   Intensity level slicing can be considered a very basic form of image segmentation, where pixels are grouped based on their intensity values.

---

This concludes the study notes for Basic Gray Level Transformations. Remember to practice applying these transformations and understanding their effects on different types of images.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
