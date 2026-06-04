---
title: "Simple image formation model"
subject: "IMAGE PROCESSING APPLICATIONS"
module: "Module 1: Digital Image Fundamentals: Image representation"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780fef57"
status: "completed"
scrapedAt: "2026-05-23T18:01:06.430Z"
---
# IMAGE PROCESSING APPLICATIONS: Module 1: Digital Image Fundamentals: Image Representation

## Topic: Simple Image Formation Model

### 1. Introduction to Image Formation

This topic delves into the fundamental process of how an image is captured and represented digitally. Understanding the image formation model is crucial for comprehending various image processing techniques that follow.

**Core Idea:** An image is essentially a 2D light intensity function, $f(x, y)$, where $x$ and $y$ are spatial coordinates and $f(x, y)$ represents the intensity (or brightness) of the image at that point.

### 2. Components of the Image Formation Model

The formation of a digital image can be modeled as a two-component process:

*   **Illumination:** This refers to the light source that illuminates the scene.
*   **Reflection/Absorption:** This describes how the surface of an object interacts with the incident light. Some light is reflected, and some is absorbed.

Mathematically, the intensity of the reflected light, $f(x, y)$, can be expressed as the product of the illumination component, $i(x, y)$, and the reflectance component, $r(x, y)$:

$$f(x, y) = i(x, y) \cdot r(x, y)$$

*   **$i(x, y)$ (Illumination Component):** Represents the intensity of the light source at spatial coordinates $(x, y)$.
    *   **Uniform Illumination:** In an ideal scenario, the illumination is uniform across the entire scene, meaning $i(x, y) = k$ (a constant). This simplifies the equation to $f(x, y) = k \cdot r(x, y)$.
    *   **Non-uniform Illumination:** In real-world scenarios, illumination is rarely uniform. It can vary due to factors like shadows, uneven lighting, or the object's shape casting shadows on itself.
*   **$r(x, y)$ (Reflectance Component):** Represents the property of the object's surface at spatial coordinates $(x, y)$ that determines how much light it reflects.
    *   Reflectance is typically bounded between 0 and 1, where:
        *   $r(x, y) = 0$: The surface absorbs all incident light (perfectly black).
        *   $r(x, y) = 1$: The surface reflects all incident light (perfectly white or mirror-like).
    *   The reflectance properties of a surface are intrinsic to the object and do not change with the illumination.

### 3. Digital Image Representation

The continuous function $f(x, y)$ needs to be converted into a digital format for processing by computers. This involves two key steps:

*   **Sampling:** The continuous spatial coordinates $(x, y)$ are converted into discrete values. This means dividing the image into a grid of small cells, each called a **pixel**.
    *   If the continuous image is represented by coordinates $(x, y)$, then sampling discretizes these into integer values $(x_k, y_l)$.
*   **Quantization:** The continuous intensity values $f(x, y)$ at each sampled point are converted into discrete intensity levels.
    *   This typically involves mapping the range of continuous intensity values to a finite set of integer levels, often powers of 2 (e.g., 256 levels for an 8-bit image, ranging from 0 to 255).

**Digital Image Representation:** A digital image is then represented as a matrix (or a 2D array) of pixel values. For an image sampled and quantized to create $M$ rows and $N$ columns, the digital image can be represented as:

$$
F(k, l) = \begin{bmatrix}
F(0,0) & F(0,1) & \cdots & F(0,N-1) \\
F(1,0) & F(1,1) & \cdots & F(1,N-1) \\
\vdots & \vdots & \ddots & \vdots \\
F(M-1,0) & F(M-1,1) & \cdots & F(M-1,N-1)
\end{bmatrix}
$$

Where $F(k, l)$ is the discrete intensity value of the pixel at row $k$ and column $l$.

### 4. Types of Digital Images Based on Intensity Representation

The way intensity is represented leads to different types of digital images:

*   **Binary Images:**
    *   Pixels have only two possible intensity values (typically 0 for black and 1 for white, or vice-versa).
    *   $f(x, y) = \{0, 1\}$
    *   Used for simple black and white graphics, text, or after thresholding.
    *   **Example:** A scanned document before OCR, a simple logo.
*   **Grayscale Images:**
    *   Pixels have intensity values that represent shades of gray, from black to white.
    *   Typically represented by 8 bits per pixel, resulting in 256 gray levels (0 = black, 255 = white).
    *   **Example:** Black and white photographs, medical X-rays.
*   **Color Images:**
    *   Pixels have intensity values that represent color.
    *   Most commonly represented using **Additive Color Models**, where colors are created by mixing primary colors of light (Red, Green, Blue - RGB).
    *   A color image is essentially three grayscale images (one for each primary color channel) stacked together.
    *   **Example:** Photographs, digital video frames.

**Alignment with Course Outcomes:**

*   **CO1 (Compare different colour model representations):** This section introduces the foundational concept of color images, paving the way for understanding and comparing various color models (like RGB, HSV, CMYK) in later modules.
*   **CO2 (Analyse concepts and mathematical transforms):** The mathematical representation $f(x, y) = i(x, y) \cdot r(x, y)$ and the digital representation as a matrix are fundamental concepts that underpin many mathematical transforms and analysis techniques.

### 5. Important Points to Remember

*   An image is a 2D function of spatial coordinates and intensity.
*   The image formation model is based on illumination and reflectance.
*   Digital images are created by sampling and quantization.
*   The output of sampling and quantization is a matrix of pixel values.
*   The number of bits per pixel determines the number of possible intensity levels.

### 6. Practice Questions and Exercises

**Question 1:**
Describe the two main components of the simple image formation model and explain their mathematical relationship.
**Answer:** The two main components are illumination ($i(x, y)$) and reflectance ($r(x, y)$). The intensity of the reflected light $f(x, y)$ is given by their product: $f(x, y) = i(x, y) \cdot r(x, y)$.

**Question 2:**
What are the two processes involved in converting a continuous image into a digital image?
**Answer:** Sampling (discretizing spatial coordinates) and Quantization (discretizing intensity values).

**Question 3:**
If an image is represented by $M$ rows and $N$ columns, how many pixels does it contain?
**Answer:** $M \times N$ pixels.

**Question 4:**
An 8-bit grayscale image has 256 levels of intensity. If a pixel has a value of 0, what does it represent? If it has a value of 255, what does it represent?
**Answer:** A value of 0 represents black, and a value of 255 represents white.

**Question 5:**
Consider a simple image where the illumination is uniform and constant ($i(x, y) = 100$) and the object has a uniform reflectance of 0.5. What would be the intensity value of the image at any point?
**Answer:** $f(x, y) = i(x, y) \cdot r(x, y) = 100 \cdot 0.5 = 50$.

**Question 6 (Conceptual - Knowledge Level K4 for CO1):**
Explain how the image formation model relates to the basic representation of color images. (Hint: Think about how different colors might be formed by variations in the components).
**Answer:** While the fundamental model is $f(x, y) = i(x, y) \cdot r(x, y)$, for color images, this relationship holds true for each color channel independently. For instance, in an RGB image, the Red channel's intensity would be $R(x, y) = I_R(x, y) \cdot R_{ref}(x, y)$, and similarly for Green and Blue. The perceived color at a point is a combination of the intensity values across these channels, which are influenced by the spectral properties of both the illumination source and the object's surface.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 7. Textbook and Reference Integration

*   **Gonzalez & Woods (2009):** Chapter 2, "Digital Image Fundamentals," particularly the section on "Image Formation," provides a detailed explanation of the illumination and reflectance model, and the process of sampling and quantization.
*   **Jayaraman, Esakkirajan & Veerakumar (2015):** Chapter 1, "Introduction," will cover the basics of image representation and the physical process of image formation, likely with similar mathematical formulations.
*   **Castleman (2003):** Chapter 1, "Introduction to Digital Image Processing," would also cover the foundational aspects of image formation and digital representation.
*   **Jain (1988):** Chapter 1, "Introduction," is a classic source for these fundamental concepts.
*   **Pratt (2007):** Chapter 1, "Introduction," will offer another perspective on the early stages of image processing.

**Key takeaway from references:** The core model $f(x, y) = i(x, y) \cdot r(x, y)$ and the digital conversion through sampling and quantization are universally accepted fundamental principles in digital image processing literature. The nuances might lie in the specific examples used and the depth of mathematical treatment.

---