---
title: "2D sampling and quantization"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 1: Digital Image Fundamentals: Image representation"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f3691a"
status: "completed"
scrapedAt: "2026-05-23T16:35:04.171Z"
---
# Digital Image Processing: Module 1 - Digital Image Fundamentals: Image Representation

## Topic 2: 2D Sampling and Quantization

### 1. Introduction to Digital Images

A digital image is a representation of a 2D image in a digital format. It is essentially a matrix of pixel values, where each pixel represents the intensity or color at a specific spatial location. The process of converting a continuous analog image into a digital image involves two fundamental steps: **sampling** and **quantization**.

*   **Digital Image:** A 2D array of numbers (pixels) representing the intensity or color of a scene at discrete spatial locations.
*   **Pixel:** The smallest element of a digital image. Each pixel has a specific location (x, y) and an intensity or color value.

**Textbook Reference:** Gonzalez & Woods, 4th Ed., Chapter 2.1

### 2. Sampling

Sampling is the process of converting a continuous spatial function (the analog image) into a discrete set of values. In 2D, this means taking measurements of the image intensity at discrete points in the spatial domain.

#### 2.1 The Sampling Process

Imagine an analog image as a continuous function $f(x, y)$, where $x$ and $y$ are continuous spatial coordinates. Sampling involves selecting discrete points from this continuous domain to represent the image.

*   **Sampling Grid:** The discrete points are arranged in a grid. For a 2D image, we typically use a rectangular grid.
*   **Sampling Interval:** The distance between adjacent sampling points along the $x$ and $y$ directions. Let these be $\Delta x$ and $\Delta y$.
*   **Sampling Frequencies:** The reciprocal of the sampling intervals, $f_x = 1/\Delta x$ and $f_y = 1/\Delta y$. These represent the number of samples taken per unit distance along the $x$ and $y$ axes, respectively.

**Mathematical Representation:**

The sampled image can be represented as $f(x, y) = f(m\Delta x, n\Delta y)$, where $m$ and $n$ are integers representing the discrete sample indices.

A more precise way to model the sampling process is by multiplying the continuous image function $f(x, y)$ with a 2D impulse train (or Dirac comb):

$f_s(x, y) = f(x, y) \cdot \sum_{m=-\infty}^{\infty} \sum_{n=-\infty}^{\infty} \delta(x - m\Delta x, y - n\Delta y)$

where $\delta(x, y)$ is the 2D Dirac delta function.

**Textbook Reference:** Gonzalez & Woods, 4th Ed., Chapter 2.1.1

#### 2.2 Why Sampling is Necessary

*   **Digital Representation:** Computers can only process discrete data. To store and manipulate an image digitally, it must be converted into a finite set of numbers.
*   **Bandwidth Reduction:** While sampling creates discrete data, it's the first step in representing the image with a manageable amount of data.

#### 2.3 The Nyquist-Shannon Sampling Theorem

This fundamental theorem dictates the conditions under which a continuous signal can be perfectly reconstructed from its samples.

**Statement:** If a continuous function $f(x)$ contains no frequencies higher than $W$ Hz, then it is completely determined by its samples taken at the rate $2W$ samples per second.

**Extension to 2D:** For a 2D image, if the function $f(x, y)$ contains no frequencies higher than $W_x$ cycles/unit distance in the $x$-direction and $W_y$ cycles/unit distance in the $y$-direction, then it is completely determined by samples taken at intervals of $\Delta x \le 1/(2W_x)$ and $\Delta y \le 1/(2W_y)$.

*   **Nyquist Rate:** The minimum sampling rate required for perfect reconstruction, which is $2W$.
*   **Nyquist Interval:** The maximum sampling interval allowed for perfect reconstruction, which is $1/(2W)$.

**Consequences of Under-sampling (Aliasing):**

If the sampling rate is less than the Nyquist rate, high-frequency components in the original image will be misinterpreted as lower frequencies, leading to visual distortions called **aliasing**. In images, aliasing often appears as jagged edges, moiré patterns, or loss of detail.

**Example:** Imagine sampling a finely detailed fabric pattern. If your sampling points are too far apart, you might miss the fine details and get a blurred or misleading representation of the pattern.

**Textbook Reference:** Gonzalez & Woods, 4th Ed., Chapter 2.1.1, Anil K. Jain, Chapter 3.2.1

#### 2.4 Sampling Rate Determination

The choice of sampling rate depends on the desired resolution and the characteristics of the original scene.

*   **High Sampling Rate:** Captures more detail but results in a larger file size.
*   **Low Sampling Rate:** Results in a smaller file size but can lead to loss of detail and aliasing.

**Practical Considerations:**

*   **Sensor Resolution:** The physical size of the pixels in an image sensor dictates the sampling rate.
*   **Intended Use:** Images for close inspection require higher sampling rates than those for distant viewing.

### 3. Quantization

Quantization is the process of approximating the sampled continuous amplitude values with discrete levels. After sampling, the intensity value at each pixel is still continuous (e.g., a real number). Quantization maps these continuous values to a finite set of discrete amplitude levels.

#### 3.1 The Quantization Process

*   **Amplitude Levels:** A set of discrete intensity values.
*   **Quantization Levels/Bins:** The range of continuous values that are mapped to a single discrete level.
*   **Quantization Interval:** The range of amplitude values that map to a particular quantization level.

**Mathematical Representation:**

The quantized image $f_q(x, y)$ is obtained by applying a quantization function $Q[\cdot]$ to the sampled image $f_s(x, y)$:

$f_q(x, y) = Q[f_s(x, y)]$

The function $Q[\cdot]$ maps a continuous value from a range $[a, b)$ to a single discrete value $y_k$.

**Example:** Consider an image where pixel intensity can range from 0 to 255. If we decide to use 8 bits for quantization, we have $2^8 = 256$ possible discrete levels. Each of these levels will correspond to a specific range of analog intensity values.

**Textbook Reference:** Gonzalez & Woods, 4th Ed., Chapter 2.1.2, S. Jayaraman et al., Chapter 2.2

#### 3.2 Bits per Pixel (bpp)

The number of bits used to represent the intensity of each pixel determines the number of quantization levels.

*   **bpp:** The number of bits allocated to each pixel.
*   **Number of Quantization Levels:** $L = 2^{bpp}$.

**Common bpp values:**

*   **1-bit:** Binary images (black and white only, 2 levels).
*   **8-bit:** Grayscale images (256 levels, typically 0-255).
*   **24-bit:** True color images (8 bits per color channel for Red, Green, Blue; $256 \times 256 \times 256$ colors).

#### 3.3 Quantization Error (Noise)

Quantization inherently introduces an error because continuous values are mapped to discrete levels. This error is often called **quantization error** or **quantization noise**.

*   **Quantization Error:** The difference between the original sampled value and its quantized value. $e(x, y) = f_s(x, y) - f_q(x, y)$.
*   **Uniform Quantization:** The quantization intervals are of equal width. The error is typically bounded by $\pm \Delta q / 2$, where $\Delta q$ is the quantization interval.
*   **Non-uniform Quantization:** The quantization intervals are not of equal width. This is often used to better represent the distribution of intensity values in typical images, where low-intensity values are more frequent.

**Impact of Quantization:**

*   **Finer Quantization (more bits):** Reduces quantization error, leading to smoother tonal transitions and better image quality, but increases file size.
*   **Coarser Quantization (fewer bits):** Increases quantization error, which can manifest as **contouring** or **false contouring** (banding) in areas with smooth intensity gradients.

**Example:** In an 8-bit grayscale image, a continuous intensity value of 123.4 might be quantized to 123. The quantization error would be 0.4. If the range of intensity values is 0-255, and we use 256 levels, each level represents a range of $255 / 255 \approx 1$ unit of intensity (if perfectly scaled). If we have 16 levels (4 bits), the range for each level is much larger, leading to more significant quantization error.

**Textbook Reference:** Gonzalez & Woods, 4th Ed., Chapter 2.1.2, Anil K. Jain, Chapter 3.2.2

### 4. Digital Image Acquisition and Representation

The combined processes of sampling and quantization are fundamental to digital image acquisition.

*   **Image Acquisition:** The process of capturing an image using a sensor (like a CCD or CMOS sensor in a camera) and converting it into a digital format through sampling and quantization.
*   **Digital Image Representation:** Once acquired, an image is represented as a 2D array of pixels, each with a specific intensity value.

**Example:** A typical digital camera performs sampling at the sensor level (based on pixel pitch) and then quantizes the analog signal from each photosensor to produce a digital image (e.g., an 8-bit grayscale value or an RGB color triplet).

**Course Outcome Alignment:**

*   **CO1 (Understand different components of image processing system):** Sampling and quantization are key components in the image acquisition and digitization stages of an image processing system.
*   **CO2 (Analyze the various concepts and mathematical transforms necessary for image processing):** Understanding the Nyquist-Shannon theorem and the principles of sampling and quantization is crucial for analyzing image data and its quality.

### 5. Key Concepts and Definitions to Remember

*   **Digital Image:** A 2D array of pixels.
*   **Pixel:** The smallest element of a digital image, representing intensity/color at a specific location.
*   **Sampling:** Converting a continuous spatial function into discrete points.
*   **Sampling Interval ($\Delta x, \Delta y$):** The distance between sampling points.
*   **Sampling Frequency ($f_x, f_y$):** The number of samples per unit distance.
*   **Nyquist-Shannon Sampling Theorem:** A continuous signal can be perfectly reconstructed from its samples if the sampling rate is at least twice the maximum frequency component (Nyquist rate).
*   **Aliasing:** Distortion caused by under-sampling, where high frequencies are misrepresented as lower frequencies.
*   **Quantization:** Mapping continuous amplitude values to discrete levels.
*   **Number of Quantization Levels ($L$):** Determined by the bits per pixel ($L = 2^{bpp}$).
*   **Bits per Pixel (bpp):** The number of bits used to represent each pixel's intensity.
*   **Quantization Error/Noise:** The difference between the original sampled value and its quantized value.
*   **Contouring/False Contouring:** Artifacts caused by coarse quantization in areas of smooth intensity gradients.

### 6. Important Points to Remember

*   Sampling discretizes the **spatial** information, while quantization discretizes the **amplitude** (intensity/color) information.
*   Both sampling and quantization are lossy processes if not performed according to specific criteria (Nyquist for sampling, sufficient levels for quantization).
*   The quality of a digital image is directly related to the sampling rate and the number of quantization levels.
*   Higher sampling rates and more quantization levels generally result in higher fidelity but larger file sizes.
*   Understanding the Nyquist-Shannon theorem is critical for avoiding aliasing.

### 7. Practice Questions and Exercises

**Question 1:**
What are the two fundamental processes involved in converting a continuous analog image into a digital image? Explain each process briefly.

**Answer:**
The two fundamental processes are:
1.  **Sampling:** This process discretizes the spatial information of the analog image by taking measurements at specific points in the spatial domain. It converts the continuous spatial coordinates $(x, y)$ into discrete indices $(m, n)$.
2.  **Quantization:** This process discretizes the amplitude (intensity or color) of the sampled image. It maps the continuous range of intensity values at each sample point to a finite set of discrete amplitude levels.

**Question 2:**
A continuous image has a maximum spatial frequency of 50 cycles/mm in both the x and y directions. What is the minimum sampling rate (in samples/mm) required to avoid aliasing?

**Answer:**
According to the Nyquist-Shannon Sampling Theorem, the sampling rate must be at least twice the maximum spatial frequency.
Maximum spatial frequency ($W_x, W_y$) = 50 cycles/mm.
Minimum sampling rate = $2 \times W_x$ and $2 \times W_y$.
Therefore, the minimum sampling rate required is $2 \times 50 = 100$ samples/mm in both x and y directions.

**Question 3:**
If an image is quantized using 8 bits per pixel, how many distinct gray levels can it represent? What is the likely effect of reducing this to 4 bits per pixel?

**Answer:**
With 8 bits per pixel, the number of distinct gray levels is $2^8 = 256$.
Reducing to 4 bits per pixel means there are only $2^4 = 16$ distinct gray levels. The likely effect of this reduction is an increase in quantization error. In areas with smooth intensity gradients, this can lead to **contouring** or **false contouring**, where distinct bands of color or intensity appear instead of smooth transitions.

**Question 4:**
Explain the concept of aliasing in the context of image sampling and provide an example of how it might appear in a digital image.

**Answer:**
Aliasing occurs when the sampling rate is below the Nyquist rate for a given signal. In image processing, it means that fine details or high-frequency patterns in the original scene are not adequately captured by the sampling grid. These high-frequency components are then incorrectly interpreted as lower frequencies, leading to visual artifacts.
An example of aliasing is **moiré patterns** that can appear when photographing a fine-mesh fabric or a tiled pattern. The grid of the sensor's pixels interacts with the pattern in the scene, and if the sampling is insufficient, the two grids create an interfering pattern that doesn't exist in the original scene. Another example is jagged edges on diagonal lines.

**Question 5:**
Consider an image sensor with a pixel pitch of 5 micrometers ($\mu$m). If this sensor is used to capture an image, what is the effective sampling interval ($\Delta x, \Delta y$) in millimeters?

**Answer:**
Pixel pitch is the distance between the centers of adjacent pixels. This directly corresponds to the sampling interval.
Given pixel pitch = 5 $\mu$m.
To convert to millimeters: 1 mm = 1000 $\mu$m.
So, $\Delta x = \Delta y = 5 \ \mu m = \frac{5}{1000} \ mm = 0.005 \ mm$.

**Exercise 1:**
You are given two grayscale images. Image A is stored with 8 bits per pixel, and Image B is stored with 4 bits per pixel. Both images are sampled at the same rate. Describe the potential differences you would expect to see between Image A and Image B, and explain why.

**Solution to Exercise 1:**
Image A, with 8 bits per pixel, has 256 possible gray levels. This allows for a finer representation of intensity variations and smoother tonal transitions.
Image B, with 4 bits per pixel, has only 16 possible gray levels. This means that the range of continuous intensity values is mapped to fewer discrete levels, leading to a coarser representation.
You would expect Image A to have better visual quality, especially in areas with subtle intensity gradients (like skies or smooth surfaces). Image B would likely exhibit **contouring** or **banding** in these areas due to the limited number of gray levels. Image B would also have a smaller file size than Image A, as each pixel requires fewer bits to store.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 8. References

*   **Gonzalez, R. C., & Woods, R. E. (2018). *Digital Image Processing* (4th ed.). Pearson.** (Chapters related to digital image fundamentals, sampling, and quantization)
*   **Jayaraman, S., Esakkirajan, S., & Veerakumar, T. (2017). *Digital Image Processing*. McGraw Hill.** (Relevant chapters covering image representation, sampling, and quantization)
*   **Castleman, K. R. (2003). *Digital Image Processing* (2nd ed.). Pearson Education.**
*   **Jain, A. K. (1989). *Fundamentals of Digital Image Processing*. Prentice Hall.**
*   **Pratt, W. K. (2007). *Digital Image Processing* (4th ed.). John Wiley & Sons.**

This concludes the notes for 2D Sampling and Quantization. These fundamental concepts are crucial for understanding how real-world images are converted into the digital format that image processing algorithms operate on.