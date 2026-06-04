---
title: "Image Enhancement: Spatial domain methods: Basic Gray Level Transformations"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 3: Image Enhancement: Spatial domain methods: Basic Gray Level Transformations"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff50f"
status: "completed"
scrapedAt: "2026-05-23T18:06:43.648Z"
---
# DIGITAL IMAGE PROCESSING: Module 3: Image Enhancement: Spatial Domain Methods: Basic Gray Level Transformations

## Introduction to Image Enhancement

Image enhancement is a fundamental task in digital image processing. It aims to improve the visual appearance of an image or to highlight certain features for analysis. Enhancement techniques do not add information to the image; they alter or modify existing information to suit a specific purpose.

**Goal:** To process an image to make it more suitable for a particular application.

**Applications:**
*   Medical imaging (e.g., enhancing X-rays for better visibility of fractures)
*   Remote sensing (e.g., improving satellite imagery for land-use analysis)
*   Facial recognition
*   Night vision

**Two main categories of Image Enhancement techniques:**
1.  **Spatial Domain Methods:** These methods directly operate on the pixels of an image. They are based on the direct manipulation of pixels.
2.  **Frequency Domain Methods:** These methods operate on the Fourier transform of an image. They are based on modifying the frequency components of an image.

This module focuses on **Spatial Domain Methods**, specifically **Basic Gray Level Transformations**.

---

## Module 3: Image Enhancement: Spatial Domain Methods: Basic Gray Level Transformations

### 3.1 Spatial Domain Concepts

**Spatial Domain:** The set of all pixels in an image. Operations in the spatial domain are performed directly on the pixel values.

**Pixel Neighborhood:** A set of pixels surrounding a central pixel. This neighborhood is often used in spatial filtering.

**Gray Level Transformations:** These are the simplest spatial domain techniques. They involve mapping the gray level of each pixel in an image to a new gray level. The transformation function $T$ is applied to the input image $f(x, y)$ to produce an output image $g(x, y)$.

Mathematically, a gray level transformation is expressed as:
$g(x, y) = T[f(x, y)]$

Where:
*   $f(x, y)$ is the gray level of the input image at spatial coordinates $(x, y)$.
*   $g(x, y)$ is the gray level of the output image at spatial coordinates $(x, y)$.
*   $T$ is the transformation function.

**Important Note (Gonzalez & Woods, 4th Ed., Chapter 3):** The value of $T$ for a given gray level in $f(x, y)$ is independent of the spatial coordinates $(x, y)$. This means that the same transformation is applied to all pixels with the same gray level.

**Types of Gray Level Transformations:**
*   Image Negatives
*   Log Transformations
*   Power-Law Transformations (Gamma Correction)
*   Piecewise Linear Transformations (Contrast Stretching, Binarization, Thresholding)

---

### 3.2 Image Negatives

**Concept:** Image negatives are used to enhance white or gray details in an image that might be subtle when displayed in their original form. This is particularly useful for images where the darkest details are of primary interest.

**Transformation Function:** For an 8-bit image with gray levels from 0 to $L-1$ (where $L=256$), the negative of an image is obtained by:
$g(x, y) = (L-1) - f(x, y)$

Where:
*   $f(x, y)$ is the gray level of the input image at $(x, y)$.
*   $g(x, y)$ is the gray level of the output (negative) image at $(x, y)$.
*   $L$ is the number of gray levels in the image.

**How it works:** Dark pixels become bright, and bright pixels become dark.
*   A pixel with gray level 0 (black) becomes $L-1$ (white).
*   A pixel with gray level $L-1$ (white) becomes 0 (black).

**Example:** Consider a simple 3-bit image with $L=8$ (gray levels 0-7).
If a pixel has gray level $f(x, y) = 2$, its negative will have gray level $g(x, y) = (8-1) - 2 = 7 - 2 = 5$.

**Applications:**
*   Enhancing medical images (e.g., X-rays) where dark structures are of interest.
*   Digitizing film negatives.

**Reference:** Gonzalez & Woods, 4th Ed., Section 3.2.1.

---

### 3.3 Log Transformations

**Concept:** Log transformations are used to expand the range of dark pixels and compress the range of bright pixels in an image. This is useful for images that have a wide range of gray levels, where the brighter regions might be washed out or less detailed.

**Transformation Function:**
$g(x, y) = c \cdot \log(1 + f(x, y))$

Where:
*   $f(x, y)$ is the gray level of the input image at $(x, y)$.
*   $g(x, y)$ is the gray level of the output image at $(x, y)$.
*   $c$ is a constant that scales the output gray level range.
*   The '+1' is added to avoid taking the logarithm of zero, as $\log(0)$ is undefined.

**How it works:**
*   Small values of $f(x, y)$ (dark pixels) are amplified.
*   Large values of $f(x, y)$ (bright pixels) are compressed.

**Example:** Consider an image with gray levels 0 to 255.
*   If $f(x, y) = 10$ (dark), $\log(1+10) = \log(11) \approx 1.04$.
*   If $f(x, y) = 100$ (mid-gray), $\log(1+100) = \log(101) \approx 2.00$.
*   If $f(x, y) = 250$ (bright), $\log(1+250) = \log(251) \approx 2.40$.
The increase in output for darker pixels is larger than the increase for brighter pixels.

**Inverse Log Transformation:**
$g(x, y) = c \cdot (e^{f(x,y)} - 1)$
Used to expand bright regions and compress dark regions.

**Applications:**
*   Enhancing images with low contrast, especially in the dark regions.
*   Images containing a very bright background and dark foreground.

**Reference:** Gonzalez & Woods, 4th Ed., Section 3.2.2.
**Reference:** Jayaraman, Esakkirajan, Veerakumar, 1st Ed., Chapter 3.

---

### 3.4 Gamma Correction (Power-Law Transformations)

**Concept:** Gamma correction is a nonlinear transformation that adjusts the overall brightness of an image and is particularly useful for correcting the non-linear response of imaging systems. It can brighten dark images or darken bright images.

**Transformation Function:**
$g(x, y) = c \cdot [f(x, y)]^{\gamma}$

Where:
*   $f(x, y)$ is the gray level of the input image at $(x, y)$.
*   $g(x, y)$ is the gray level of the output image at $(x, y)$.
*   $c$ is a constant, typically chosen so that the maximum output gray level is within the valid range.
*   $\gamma$ is the exponent.

**How it works based on $\gamma$ value:**
*   **$\gamma > 1$ (e.g., $\gamma = 2.2$):** This is called **gamma correction**. It compresses the range of bright gray levels and expands the range of dark gray levels. It effectively brightens the image, making darker areas more visible. This is common for displaying images on a CRT monitor which has a non-linear response.
*   **$\gamma < 1$ (e.g., $\gamma = 0.5$):** This expands the range of bright gray levels and compresses the range of dark gray levels. It effectively darkens the image, making brighter areas less prominent.
*   **$\gamma = 1$:** This results in a linear transformation, leaving the image unchanged (assuming $c=1$).

**Important Point (Gonzalez & Woods):** The value of $\gamma$ is typically between 0.3 and 2.5, but can be outside this range.

**Example:** Consider an input gray level of 50 (on a scale of 0-255).
*   If $\gamma = 0.5$, $g(x, y) = c \cdot (50)^{0.5} = c \cdot \sqrt{50} \approx c \cdot 7.07$. The output is relatively low.
*   If $\gamma = 2.0$, $g(x, y) = c \cdot (50)^{2.0} = c \cdot 2500$. The output is significantly higher.

**Applications:**
*   Adjusting the brightness and contrast of digital photos.
*   Compensating for the non-linear response of display devices.
*   Enhancing images captured in low-light conditions.

**Reference:** Gonzalez & Woods, 4th Ed., Section 3.2.3.
**Reference:** Jayaraman, Esakkirajan, Veerakumar, 1st Ed., Chapter 3.

---

### 3.5 Piecewise Linear Transformations

**Concept:** Piecewise linear transformations are defined by a set of straight line segments connecting specified points in the gray level space. They offer more flexibility than global transformations and can be tailored to specific image characteristics.

**Types of Piecewise Linear Transformations:**

#### 3.5.1 Contrast Stretching

**Concept:** Increases the contrast of an image by expanding the range of its gray levels. This is useful when the useful information in an image is concentrated in a narrow range of gray levels, causing the image to appear "washed out."

**Transformation Function:** Usually defined by two end points $(r_1, s_1)$ and $(r_2, s_2)$, where $r$ is the input gray level and $s$ is the output gray level.
*   **Linear Piecewise:**
    *   For $0 \le r < r_1$: $s = \frac{s_1}{r_1} \cdot r$ (expands dark values)
    *   For $r_1 \le r \le r_2$: $s = \frac{s_2 - s_1}{r_2 - r_1} \cdot (r - r_1) + s_1$ (stretches contrast in the middle range)
    *   For $r_2 < r \le L-1$: $s = \frac{(L-1) - s_2}{(L-1) - r_2} \cdot (r - r_2) + s_2$ (expands bright values)

**Key Points for Contrast Stretching:**
*   $r_1$ and $r_2$ are the gray level values that define the lower and upper bounds of the gray level range of interest.
*   $s_1$ and $s_2$ are the desired corresponding output gray level values.
*   To achieve maximum contrast stretch, $r_1$ and $r_2$ are chosen close to the minimum and maximum gray levels present in the image, and $s_1=0$, $s_2=L-1$.

**Example:** Suppose an image has gray levels concentrated between 80 and 150. We want to stretch this range to cover the full range of 0 to 255.
Let $r_1 = 80$, $r_2 = 150$. We want to map this to $s_1 = 0$, $s_2 = 255$.
*   For $r < 80$: $s = \frac{0}{80} \cdot r = 0$. (Pixels darker than 80 become black).
*   For $80 \le r \le 150$: $s = \frac{255 - 0}{150 - 80} \cdot (r - 80) + 0 = \frac{255}{70} \cdot (r - 80)$. (This segment stretches the 80-150 range to 0-255).
*   For $r > 150$: $s = \frac{255 - 255}{255 - 150} \cdot (r - 150) + 255 = 0 \cdot (r - 150) + 255 = 255$. (Pixels brighter than 150 become white).

**Reference:** Gonzalez & Woods, 4th Ed., Section 3.2.4.
**Reference:** Jayaraman, Esakkirajan, Veerakumar, 1st Ed., Chapter 3.

#### 3.5.2 Histogram Equalization (Implicitly related to Piecewise Linear)

**Concept:** Although not strictly a piecewise linear transformation defined by manually selected points, histogram equalization is a powerful gray level transformation that redistributes the gray levels of an image to achieve a more uniform distribution. This often results in increased global contrast, especially in images with very skewed histograms.

**Transformation Function:** The output gray level $s$ is obtained from the input gray level $r$ using the cumulative distribution function (CDF) of the image's histogram.
$s = T(r) = (L-1) \sum_{i=0}^{r} p_r(i)$

Where:
*   $r$ is the input gray level.
*   $s$ is the output gray level.
*   $L$ is the number of gray levels.
*   $p_r(r)$ is the probability density function (PDF) of the input image's gray levels.

**How it works:**
1.  Calculate the histogram of the input image.
2.  Normalize the histogram to obtain the PDF $p_r(r)$.
3.  Calculate the cumulative distribution function (CDF): $P(r) = \sum_{i=0}^{r} p_r(i)$.
4.  Map each gray level $r$ to a new gray level $s$ using the CDF: $s = \text{round}((L-1) P(r))$.

**Key Point:** The output image will have a more uniform histogram than the input image.

**Example:** Consider a simple image with 4 gray levels (0, 1, 2, 3) and the following counts:
*   Gray level 0: 10 pixels
*   Gray level 1: 20 pixels
*   Gray level 2: 50 pixels
*   Gray level 3: 20 pixels
Total pixels = 100. $L=4$.

1.  **Histogram:** Counts: {0:10, 1:20, 2:50, 3:20}
2.  **PDF:** $p_r(0)=0.1, p_r(1)=0.2, p_r(2)=0.5, p_r(3)=0.2$
3.  **CDF:**
    *   $P(0) = 0.1$
    *   $P(1) = 0.1 + 0.2 = 0.3$
    *   $P(2) = 0.1 + 0.2 + 0.5 = 0.8$
    *   $P(3) = 0.1 + 0.2 + 0.5 + 0.2 = 1.0$
4.  **Transformation:** $s = \text{round}((4-1) P(r)) = \text{round}(3 \cdot P(r))$
    *   For $r=0$: $s = \text{round}(3 \cdot 0.1) = \text{round}(0.3) = 0$.
    *   For $r=1$: $s = \text{round}(3 \cdot 0.3) = \text{round}(0.9) = 1$.
    *   For $r=2$: $s = \text{round}(3 \cdot 0.8) = \text{round}(2.4) = 2$.
    *   For $r=3$: $s = \text{round}(3 \cdot 1.0) = \text{round}(3.0) = 3$.

In this specific example, the transformation didn't change the gray levels, indicating the initial histogram was already quite spread out. However, for images with clustered gray levels, significant changes occur.

**Reference:** Gonzalez & Woods, 4th Ed., Section 3.2.5.
**Reference:** Jayaraman, Esakkirajan, Veerakumar, 1st Ed., Chapter 3.

#### 3.5.3 Binarization (Thresholding)

**Concept:** A simple form of piecewise linear transformation that converts a grayscale image into a binary image (black and white only). Pixels are classified into two groups based on their gray level relative to a threshold value.

**Transformation Function:**
$g(x, y) = \begin{cases} \text{max\_gray\_value} & \text{if } f(x, y) > T \\ \text{min\_gray\_value} & \text{if } f(x, y) \le T \end{cases}$

Or, if using binary values (0 and 1):
$g(x, y) = \begin{cases} 1 & \text{if } f(x, y) > T \\ 0 & \text{if } f(x, y) \le T \end{cases}$

Where:
*   $f(x, y)$ is the input gray level at $(x, y)$.
*   $g(x, y)$ is the output binary value.
*   $T$ is the threshold value.
*   `max_gray_value` and `min_gray_value` are typically $L-1$ and 0, respectively.

**Types of Thresholding:**
*   **Global Thresholding:** A single threshold value $T$ is used for the entire image. Simple to implement but sensitive to illumination variations.
*   **Local (Adaptive) Thresholding:** The threshold value $T$ is varied across the image, based on local neighborhood characteristics. This handles illumination variations better.

**Example:** An image with gray levels from 0 to 255.
If $T = 128$:
*   Pixels with gray level $> 128$ will be set to 255 (white).
*   Pixels with gray level $\le 128$ will be set to 0 (black).

**Applications:**
*   Document scanning.
*   Object detection.
*   Simplifying images for further processing.

**Reference:** Gonzalez & Woods, 4th Ed., Section 3.2.6.
**Reference:** Jayaraman, Esakkirajan, Veerakumar, 1st Ed., Chapter 3.

---

### 3.6 Important Points to Remember

*   **Spatial Domain:** Operations are directly on pixels.
*   **Gray Level Transformations:** Map input gray level $r$ to output gray level $s$ using $s = T(r)$. The transformation is independent of pixel location.
*   **Image Negatives:** Good for enhancing dark details. $g = (L-1) - f$.
*   **Log Transformations:** Expand dark regions, compress bright regions. $g = c \log(1+f)$. Useful for low contrast images.
*   **Gamma Correction (Power-Law):** Versatile for brightness adjustment. $\gamma > 1$ brightens, $\gamma < 1$ darkens. $g = c \cdot f^\gamma$.
*   **Piecewise Linear Transformations:** Offer control over specific gray level ranges.
    *   **Contrast Stretching:** Expands the range of gray levels.
    *   **Histogram Equalization:** Redistributes gray levels to create a more uniform histogram and often enhance global contrast.
    *   **Binarization:** Converts an image to black and white using a threshold.
*   The choice of transformation depends heavily on the specific image and the desired outcome.
*   Understanding the image histogram is crucial for selecting appropriate enhancement techniques.

---

### 3.7 Practice Questions and Answers

**Question 1:** An image has gray levels ranging from 0 to 255. You want to create a negative image. What would be the resulting gray level for a pixel with an original gray level of 50?
**Answer:** Using the negative transformation $g = (L-1) - f$, where $L=256$ and $f=50$:
$g = (256-1) - 50 = 255 - 50 = 205$.

**Question 2:** Explain the effect of a log transformation $g = c \log(1+f)$ on an image. What types of images benefit most from this transformation?
**Answer:** A log transformation compresses the range of brighter gray levels and expands the range of darker gray levels. This is beneficial for images that have a wide range of gray values, where the details in the darker regions are obscured due to low contrast.

**Question 3:** Consider a gamma correction with $\gamma = 2.5$ and another with $\gamma = 0.4$. Which one would you use to brighten a dark image, and why?
**Answer:** You would use the gamma correction with $\gamma = 0.4$ to brighten a dark image. A $\gamma$ value less than 1 expands the range of dark gray levels and compresses the range of bright gray levels, effectively making the image appear brighter. A $\gamma$ value greater than 1 does the opposite.

**Question 4:** What is the primary goal of contrast stretching? If an image has its gray levels concentrated between 100 and 180, and you want to stretch this range to span the entire 0-255 range, what would be your chosen values for $r_1$, $r_2$, $s_1$, and $s_2$?
**Answer:** The primary goal of contrast stretching is to increase the contrast of an image by expanding the range of its gray levels.
To stretch the range [100, 180] to [0, 255], you would choose:
*   $r_1 = 100$ (the lower bound of the input range)
*   $r_2 = 180$ (the upper bound of the input range)
*   $s_1 = 0$ (the lower bound of the desired output range)
*   $s_2 = 255$ (the upper bound of the desired output range)

**Question 5:** Describe the core principle behind histogram equalization. Does it guarantee an increase in image contrast in all cases?
**Answer:** The core principle of histogram equalization is to redistribute the gray levels of an image so that the resulting histogram is more uniform. This is achieved by mapping the input gray levels to output gray levels based on the cumulative distribution function (CDF) of the original histogram.
No, histogram equalization does not guarantee an increase in image contrast in all cases. For images that already have a relatively uniform histogram, histogram equalization may result in little or no change, and in some very specific cases, it might even reduce perceived contrast slightly if the remapping creates large uniform regions.

---

### 3.8 Alignment with Course Outcomes (COs)

This module's content directly supports the following course outcomes:

*   **CO1 (K2): Explain different components of image processing system.**
    *   Understanding enhancement as a key component of an image processing pipeline.
*   **CO2 (K3): Analyse the various concepts and mathematical transforms necessary for image processing.**
    *   This module covers fundamental mathematical transformations (linear, logarithmic, power-law, piecewise linear) and their application to image pixel values. Analyzing how these transformations affect image properties (contrast, brightness) is central.
*   **CO4 (K3): Analyze the filtering and restoration of images.**
    *   While this module focuses on enhancement, understanding basic gray-level transformations lays the groundwork for more complex spatial filtering and restoration techniques. These methods also manipulate pixel values based on spatial relationships or degradation models.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 3.9 Key References

*   **Gonzalez, R. C., & Woods, R. E. (2018). *Digital Image Processing* (4th ed.). Pearson.** (Primary reference for detailed explanations and examples).
*   **Jayaraman, S., Esakkirajan, S., & Veerakumar, T. (2011). *Digital Image Processing*. McGraw Hill.** (Provides complementary explanations and coverage of the topics).
*   **Castleman, K. R. (2003). *Digital Image Processing* (2nd ed.). Pearson Education.** (Offers alternative perspectives and additional details on transformation techniques).
*   **Jain, A. K. (1988). *Fundamentals of Digital Image Processing*. Prentice Hall of India.** (A foundational text for understanding image processing concepts).
*   **Pratt, W. K. (2007). *Digital Image Processing* (4th ed.). John Wiley & Sons.** (Another authoritative source for in-depth understanding).