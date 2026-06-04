---
title: "2D sampling and quantization"
subject: "IMAGE PROCESSING APPLICATIONS"
module: "Module 1: Digital Image Fundamentals: Image representation"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780fef5e"
status: "completed"
scrapedAt: "2026-05-23T18:01:11.361Z"
---
# IMAGE PROCESSING APPLICATIONS - Module 1: Digital Image Fundamentals: Image Representation

## Topic: 2D Sampling and Quantization

---

### Learning Outcomes:

*   Understand the fundamental concepts of sampling and quantization in the context of digital image processing.
*   Explain the process of converting a continuous analog image into a digital image.
*   Define and differentiate between sampling and quantization.
*   Discuss the impact of sampling rate and quantization levels on image quality.
*   Understand the relationship between sampling and quantization and their role in image representation.

---

### Introduction:

A digital image is an approximation of a real-world scene. To convert a continuous, real-world scene into a digital format that can be processed by computers, we need to discretize it in both spatial and intensity domains. This process involves two fundamental steps: **sampling** and **quantization**.

*   **Sampling** deals with the spatial discretization of an image, transforming a continuous 2D function into a discrete grid of points.
*   **Quantization** deals with the intensity discretization, assigning a finite number of intensity levels to each sampled point.

---

### 1. Sampling: Discretizing Space

Sampling is the process of converting a continuous spatial function, representing an image, into a discrete set of values. In a 2D image, this means taking measurements at specific points across the image plane.

#### 1.1 Continuous Image Representation

A continuous image can be represented mathematically as a function of two spatial variables, $f(x, y)$, where:
*   $x$ and $y$ are continuous spatial coordinates.
*   $f(x, y)$ represents the intensity (or color) of the image at coordinates $(x, y)$.

**Reference:** Gonzalez & Woods, Chapter 2.1.1

#### 1.2 The Sampling Process

We sample the continuous image $f(x, y)$ at discrete points. In a 2D image, we can think of this as superimposing a grid of points on the continuous image and taking a measurement at each grid intersection.

*   **Sampling Interval:** The distance between adjacent sample points. Let's denote these by $x_s$ and $y_s$ in the horizontal and vertical directions, respectively.
*   **Sampling Rate:** The number of samples per unit distance (e.g., samples per millimeter or samples per inch). This is the reciprocal of the sampling interval.
*   **Digital Image Representation:** The result of sampling is a matrix (or a 2D array) of values. Each element in this matrix corresponds to a sampled point in the continuous image.

The sampled image can be represented as $f(m \Delta x, n \Delta y)$, where:
*   $m$ and $n$ are integers representing the discrete spatial coordinates in the sampled grid.
*   $\Delta x$ and $\Delta y$ are the sampling intervals in the x and y directions, respectively.

#### 1.3 Discrete Image Representation

The sampled continuous function is often approximated by a discrete function $f[m, n]$, where:
*   $m$ represents the row index.
*   $n$ represents the column index.
*   $f[m, n]$ is the value of the sampled point at spatial coordinates $(m \Delta x, n \Delta y)$.

The number of samples in the horizontal direction ($M$) and vertical direction ($N$) determines the **spatial resolution** of the digital image. An image with $M$ columns and $N$ rows is an $M \times N$ image.

**Example:**
Imagine a continuous black and white image. If we sample it at intervals of 1mm horizontally and 1mm vertically, we are essentially creating a grid of points. Each point in this grid will have an intensity value (e.g., grayscale value) assigned to it. This collection of intensity values forms the digital image.

#### 1.4 Relationship to Sampling Theory (Nyquist-Shannon Sampling Theorem)

The Nyquist-Shannon Sampling Theorem is crucial for understanding how to sample a signal without losing information. It states that to perfectly reconstruct a continuous signal from its samples, the sampling frequency must be at least twice the highest frequency present in the signal.

In the context of images:
*   The "signal" is the intensity variation across space.
*   High spatial frequencies correspond to rapid changes in intensity (edges, fine details).
*   Low spatial frequencies correspond to smooth areas of the image.

If we sample below the Nyquist rate (i.e., with a sampling interval that is too large), we can encounter **aliasing**. Aliasing causes high-frequency details to be misrepresented as lower frequencies, leading to visual distortions like jagged edges or moiré patterns.

**Important Point:** The choice of sampling interval (or rate) is critical for capturing fine details in an image. Too coarse sampling will result in loss of detail and aliasing, while too fine sampling might be computationally expensive and may not significantly improve perceived quality if the original scene detail is limited.

#### 1.5 Sampling in Color Images

For color images, we typically sample each color channel (e.g., Red, Green, Blue) independently using the same spatial sampling grid.

---

### 2. Quantization: Discretizing Intensity

Quantization is the process of assigning a finite number of intensity levels to each sampled point. Real-world images have a continuous range of intensity values, but digital systems can only represent a finite set of these values.

#### 2.1 Continuous Intensity Levels

The intensity of a continuous image $f(x, y)$ can theoretically take any real value within a certain range, e.g., $[0, L_{max}]$.

#### 2.2 The Quantization Process

Quantization maps the continuous range of intensity values to a finite set of discrete levels.

*   **Quantization Levels:** The discrete intensity values that can be represented by the digital image.
*   **Number of Quantization Levels (L):** This determines the bit depth of the image. An image with $L$ quantization levels typically requires $\log_2(L)$ bits per pixel.
*   **Quantization Interval:** The range of continuous intensity values that are mapped to a single discrete level.

The process can be described as follows:
1.  Divide the continuous intensity range $[0, L_{max}]$ into $L$ intervals.
2.  Assign a unique discrete level to each interval.
3.  For each sampled point $f[m, n]$, determine which interval its intensity value falls into and assign the corresponding discrete level.

#### 2.3 Quantization Schemes

*   **Uniform Quantization:** The quantization intervals are of equal width.
    *   If the intensity range is $[0, 1]$, and we use $L$ levels, each level represents an interval of width $1/L$.
    *   For example, with 8-bit images ($L=256$), the intensity range $[0, 255]$ is divided into 256 levels, with each level representing an interval of width 1. The value $4.3$ might be quantized to $4$, $127.8$ to $128$, etc.

*   **Non-uniform Quantization:** The quantization intervals are of unequal width. This is often used when the distribution of intensity values is not uniform. For example, human vision is more sensitive to small changes in dark regions than in bright regions. Therefore, non-uniform quantization can assign more levels to darker regions and fewer to brighter regions to achieve a perceptually better representation. A common example is the $\mu$-law or A-law companding used in audio signals, which can also be applied to images.

**Example:**
Consider a simplified grayscale image with intensity values ranging from 0 (black) to 10 (white).
*   **2-level quantization:** We could map intensities $[0, 5]$ to level 0 (black) and $[5, 10]$ to level 1 (white). This results in a binary image.
*   **4-level quantization:** We could map $[0, 2.5]$ to level 0, $[2.5, 5]$ to level 1, $[5, 7.5]$ to level 2, and $[7.5, 10]$ to level 3.

#### 2.4 Impact of Quantization Levels

The number of quantization levels significantly affects the quality of the digital image.

*   **Too few levels:** Leads to **contouring** or **false contouring**, where smooth gradations in intensity appear as discrete steps. This can make images look "posterized" or blocky.
*   **More levels:** Provide a more accurate representation of the original intensities, resulting in smoother gradations and finer detail.

**Standard Bit Depths:**
*   **8-bit grayscale:** $2^8 = 256$ levels. Commonly used.
*   **24-bit color (8 bits per channel):** $256 \times 256 \times 256$ possible colors.
*   **Higher bit depths (10-bit, 12-bit, 16-bit):** Used in professional photography and medical imaging for greater dynamic range and more subtle tonal gradations.

**Reference:** Gonzalez & Woods, Chapter 2.1.2; Jayaraman et al., Chapter 2.2

#### 2.5 Quantization Error

The difference between the original continuous intensity value and the quantized discrete value is called **quantization error**. This error is inherent in the quantization process.
$$e[m, n] = f_q[m, n] - f[m \Delta x, n \Delta y]$$
where $f_q[m, n]$ is the quantized value.

The goal of quantization is to minimize this error while using a manageable number of bits.

---

### 3. Relationship between Sampling and Quantization

Sampling and quantization are two distinct but complementary processes that work together to create a digital image.

*   **Sampling:** Converts a continuous spatial representation into a discrete grid of points. It determines the spatial resolution.
*   **Quantization:** Converts the continuous intensity values at each sampled point into discrete levels. It determines the tonal resolution or bit depth.

**Important Point:** Both processes affect the quality and information content of the digital image.
*   **Under-sampling** leads to aliasing and loss of spatial detail.
*   **Under-quantization** leads to contouring and loss of tonal detail.

#### 3.1 Combined Process: Digitization

The overall process of converting a continuous analog image to a digital image is called **digitization**.

1.  **Continuous Image:** $f(x, y)$
2.  **Sampling:** Convert to $f(x_m, y_n)$ where $x_m = m \Delta x$ and $y_n = n \Delta y$.
3.  **Quantization:** Convert to $f_q(x_m, y_n)$ which is a discrete set of values.
4.  **Digital Image:** The array of quantized values $f[m, n]$, where $f[m, n] = f_q(m \Delta x, n \Delta y)$.

**Example:** A high-resolution digital camera captures an image. The camera's sensor samples the light intensity at millions of discrete points (pixels) across the scene. Then, for each pixel, the analog electrical signal representing the intensity is quantized into a digital value (e.g., an 8-bit integer between 0 and 255).

---

### 4. Key Concepts and Definitions

*   **Continuous Image:** An image represented by a continuous function of two spatial variables, $f(x, y)$, where $x, y$ are continuous coordinates and $f$ represents intensity.
*   **Sampling:** The process of discretizing the spatial domain of an image by taking measurements at regular intervals.
*   **Sampling Interval ($\Delta x, \Delta y$):** The distance between adjacent sample points.
*   **Sampling Rate:** The number of samples per unit distance.
*   **Spatial Resolution:** The number of samples in the horizontal and vertical directions ($M \times N$).
*   **Aliasing:** Distortion caused by undersampling, where high-frequency components are misrepresented as lower frequencies.
*   **Quantization:** The process of discretizing the intensity (or amplitude) domain of an image by mapping continuous intensity values to a finite set of discrete levels.
*   **Quantization Levels (L):** The number of discrete intensity values available to represent the image.
*   **Bit Depth:** The number of bits used to represent each pixel's intensity level ($\log_2 L$).
*   **Uniform Quantization:** Quantization where all intervals have the same width.
*   **Non-uniform Quantization:** Quantization where interval widths vary.
*   **Contouring (False Contouring):** Visual artifact caused by insufficient quantization levels, resulting in abrupt transitions instead of smooth gradations.
*   **Quantization Error:** The difference between the original continuous intensity and its quantized discrete value.
*   **Digitization:** The overall process of converting a continuous analog image into a digital image through sampling and quantization.

---

### 5. Aligning with Course Outcomes

*   **CO1: Compare different colour model representations of image processing system (Knowledge Level: K4)**
    *   While this topic doesn't directly cover color models, the sampling process applies to each color channel independently. Understanding how spatial and intensity information is digitized is fundamental to how color information is ultimately represented and processed in various color spaces.
*   **CO2: Analyse the various concepts and mathematical transforms and compression schemes necessary for image processing (Knowledge Level: K4)**
    *   The concepts of sampling (and its theoretical underpinnings like Nyquist theorem) and quantization are foundational mathematical concepts necessary for image processing. The bit depth determined by quantization directly impacts compression efficiency. Understanding sampling is crucial for operations like resizing (scaling) which involve interpolation (a form of reconstruction).
*   **CO3: Illustrate the various schemes of image filtering (Knowledge Level: K5)**
    *   Filtering operates on the sampled and quantized digital image. The effectiveness and nature of filtering depend heavily on the spatial resolution (sampling) and the available intensity levels (quantization). For example, noise reduction filtering might be more effective with higher bit depths.
*   **CO4: Determine the techniques for restoration of images (Knowledge Level: K5)**
    *   Image restoration techniques often aim to reverse degradation that might have occurred during image acquisition, which includes noise introduced by quantization or loss of detail due to undersampling. Understanding the digitization process helps in understanding the sources of degradation and designing appropriate restoration methods.

---

### 6. Important Points to Remember

*   Digital images are approximations of continuous real-world scenes.
*   **Sampling** discretizes spatial locations.
*   **Quantization** discretizes intensity values.
*   The **sampling interval/rate** determines spatial resolution and the ability to capture fine details.
*   The **number of quantization levels** (bit depth) determines tonal resolution and the presence of contouring artifacts.
*   **Aliasing** is a problem of undersampling, while **contouring** is a problem of undersampling in the intensity domain.
*   Both sampling and quantization introduce errors, and the goal is to balance information capture with the efficiency of digital representation.

---

### 7. Practice Questions and Exercises

**Question 1:**
What are the two fundamental processes required to convert a continuous analog image into a digital image? Briefly describe each.

**Answer:**
The two fundamental processes are:
1.  **Sampling:** This process discretizes the spatial domain of the image. It involves taking measurements of the continuous image intensity at regular intervals across the image plane, creating a grid of points.
2.  **Quantization:** This process discretizes the intensity (or amplitude) domain. It involves mapping the continuous range of intensity values at each sampled point to a finite set of discrete intensity levels.

---

**Question 2:**
Explain the concept of **aliasing** in the context of 2D image sampling. What causes it, and what are its visual consequences?

**Answer:**
Aliasing is a distortion that occurs when an image is sampled at a rate lower than twice the highest spatial frequency present in the image (i.e., undersampling). It is caused by the inability of the sampling grid to capture rapid spatial variations in intensity. Visually, it manifests as spurious patterns, jagged edges (staircase effect), moiré patterns, or loss of fine details that were present in the original continuous image.

---

**Question 3:**
An image has a continuous intensity range from 0 to 255. If we perform uniform quantization using only 4 levels, what would be the quantization interval? If a pixel has a true intensity of 155, what would its quantized value likely be using uniform quantization into 4 levels (0-3 representing the levels)?

**Answer:**
*   **Quantization Interval:** The continuous range is 0 to 255. With 4 levels, the range is divided into 4 equal intervals.
    The width of each interval = (Maximum Intensity - Minimum Intensity) / Number of Levels
    Interval Width = $(255 - 0) / 4 = 255 / 4 = 63.75$.
    Assuming levels represent intensity ranges:
    *   Level 0: $[0, 63.75)$
    *   Level 1: $[63.75, 127.5)$
    *   Level 2: $[127.5, 191.25)$
    *   Level 3: $[191.25, 255]$
*   **Quantized Value:** A pixel with an intensity of 155 falls into the range $[127.5, 191.25)$. Therefore, its quantized value would be the representative value for Level 2. If we consider the mid-point of the interval, or simply assign a discrete value like 2, the quantized value would represent Level 2. If the levels are directly mapped (e.g., Level 0=0, Level 1=1, Level 2=2, Level 3=3), then the pixel would be assigned the value **2**.

---

**Question 4:**
What is the difference between spatial resolution and tonal resolution in a digital image? How are they related to sampling and quantization, respectively?

**Answer:**
*   **Spatial Resolution:** Refers to the detail in an image that is due to the sampling process. It is determined by the number of samples taken per unit area (or the sampling interval). Higher spatial resolution means more samples per unit area, allowing for the capture of finer spatial details. It's determined by the **sampling rate**.
*   **Tonal Resolution:** Refers to the detail in an image that is due to the quantization process. It is determined by the number of discrete intensity levels used to represent each pixel. Higher tonal resolution means more quantization levels, allowing for finer gradations of brightness or color and reducing the appearance of contouring. It's determined by the **number of quantization levels (bit depth)**.

---

**Question 5:**
Discuss the trade-off between spatial resolution and file size/computational cost in image sampling.

**Answer:**
Increasing the spatial resolution (by decreasing the sampling interval or increasing the sampling rate) means taking more samples per unit area. This leads to a digital image with a larger number of pixels ($M \times N$).
*   **File Size:** A larger number of pixels directly increases the file size of the image, as each pixel stores an intensity value.
*   **Computational Cost:** Processing larger images (with more pixels) requires more memory and more computational power for operations like filtering, transformations, or analysis.

Therefore, there is a trade-off: higher spatial resolution allows for the capture of more detail but at the cost of increased file size and computational complexity. The optimal sampling rate is determined by the desired level of detail versus available resources and the requirements of the application.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### References

*   **Gonzalez & Woods (2009):** Chapter 2: Digital Image Fundamentals, Section 2.1 Image Sampling and Quantization.
*   **Jayaraman, Esakkirajan & Veerakumar (2015):** Chapter 2: Digital Image Fundamentals, Section 2.1 Image Digitization, Section 2.2 Sampling and Quantization.
*   **Castleman (2003):** Chapter 2: Image Digitization.
*   **Jain (1988):** Chapter 2: Digital Image Fundamentals, Section 2.1 Sampling and Quantization.
*   **Pratt (2007):** Chapter 2: Digital Image Representation.

---