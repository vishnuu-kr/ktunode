---
title: "Simple image formation model"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 1: Digital Image Fundamentals: Image representation"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff4f7"
status: "completed"
scrapedAt: "2026-05-23T18:06:25.720Z"
---
# DIGITAL IMAGE PROCESSING

## Module 1: Digital Image Fundamentals: Image Representation

### Topic: Simple Image Formation Model

---

**Learning Outcome:** Understand the basic principles of how images are formed and represented digitally.

**Course Outcomes Alignment:**

*   **CO1: Explain different components of image processing system (Knowledge Level: K2)**
    *   This topic is fundamental to understanding the input stage of an image processing system.
*   **CO2: Analyse the various concepts and mathematical transforms necessary for image processing (Knowledge Level: K3)**
    *   While not directly about transforms, understanding image formation lays the groundwork for how images are mathematically described.

---

### 1. Introduction to Image Formation

An image is a visual representation of something, typically a scene or an object. In digital image processing, we deal with **digital images**, which are discrete representations of these visual phenomena. The process of creating a digital image from a physical scene is what we refer to as **image formation**.

**Key Concept:** An image is essentially a 2D function, $f(x, y)$, where $(x, y)$ are spatial coordinates and the value of $f$ at $(x, y)$ represents the intensity or color of the image at that point.

*   **In the physical world:** Light interacts with objects in a scene. This light can be emitted by a source (like a lamp) or reflected by the object.
*   **The imaging system:** A sensor (like a camera lens and sensor) captures this light. The sensor converts the light intensity into an electrical signal.
*   **Digital representation:** This electrical signal is then digitized, meaning it's converted into a numerical representation that a computer can process.

---

### 2. The Simple Image Formation Model

The simplest model of image formation can be described by considering the interaction of light with a scene and its subsequent capture by a sensor. We can express this mathematically as:

$f(x, y) = i(x, y) \cdot r(x, y)$

Where:

*   $f(x, y)$: The image observed at spatial coordinates $(x, y)$.
*   $i(x, y)$: The **illumination** component at $(x, y)$. This represents the light source illuminating the scene.
*   $r(x, y)$: The **reflectance** component at $(x, y)$. This represents the inherent properties of the object's surface, i.e., how much light it reflects at that point.

**Explanation of Components:**

*   **Illumination ($i(x, y)$):**
    *   This term accounts for the intensity and distribution of light illuminating the scene.
    *   **Uniform Illumination:** In an ideal scenario, the illumination is constant across the entire scene, meaning $i(x, y) = I$ (a constant value). This simplifies the model to $f(x, y) = I \cdot r(x, y)$.
    *   **Non-uniform Illumination:** In real-world scenarios, illumination is often non-uniform due to the light source's position, intensity variations, and shadows. For example, a spotlight will create a bright central region with decreasing intensity towards the edges.
    *   **Example:** Imagine photographing a white wall under a single, direct spotlight. The wall area directly under the spotlight will be brighter (higher illumination) than the areas towards the edges of the spotlight's reach.

*   **Reflectance ($r(x, y)$):**
    *   This term represents the inherent properties of the object's surface. It describes how much of the incident light is reflected back towards the sensor.
    *   **Reflectance values typically range from 0 to 1:**
        *   A value of 0 indicates perfect absorption (no reflection).
        *   A value of 1 indicates perfect reflection (all light is reflected).
    *   **Factors affecting reflectance:** Surface material, texture, color, and surface finish (e.g., matte vs. glossy).
    *   **Example:** A black object absorbs most of the incident light and reflects very little (low reflectance), appearing dark in the image. A white object reflects most of the light (high reflectance), appearing bright. A colored object reflects specific wavelengths of light, giving it its color.

**Important Note:** The model $f(x, y) = i(x, y) \cdot r(x, y)$ assumes that the interaction between illumination and reflectance is multiplicative. This is a common and useful simplification, although more complex models exist for specific situations.

---

### 3. Digital Image Representation

For a computer to process an image, it needs to be converted into a digital format. This involves two key processes: **sampling** and **quantization**.

*   **Sampling:**
    *   The continuous spatial coordinates $(x, y)$ of the image are converted into discrete values. This is done by dividing the image into a grid of small, square regions called **picture elements** or **pixels**.
    *   Each pixel represents a specific location in the image.
    *   The number of pixels along the horizontal and vertical axes determines the **spatial resolution** of the digital image.
    *   **Example:** An image sampled at $M$ rows and $N$ columns will have $M \times N$ pixels. A higher $M$ and $N$ generally leads to a sharper image.

*   **Quantization:**
    *   The intensity (or color) value of each pixel, which is originally a continuous range of values, is converted into a discrete set of intensity levels.
    *   Each pixel is assigned an integer value representing its intensity.
    *   The number of bits used to represent each pixel's intensity determines the **gray-scale resolution** or **color depth**.
    *   **Example:**
        *   An 8-bit grayscale image can represent 256 different intensity levels (from 0 to 255), where 0 typically represents black and 255 represents white.
        *   A 24-bit color image typically uses 8 bits for each of the Red, Green, and Blue (RGB) color channels, allowing for a vast number of colors.

**Digital Image Structure:**

A digital image is essentially a matrix (or a 3D array for color images) where each element represents a pixel.

*   **Grayscale Image:** Represented as a 2D matrix $F$, where $F(i, j)$ is the intensity of the pixel at row $i$ and column $j$.
    $F = \begin{bmatrix}
    F(1,1) & F(1,2) & \dots & F(1,N) \\
    F(2,1) & F(2,2) & \dots & F(2,N) \\
    \vdots & \vdots & \ddots & \vdots \\
    F(M,1) & F(M,2) & \dots & F(M,N)
    \end{bmatrix}$

*   **Color Image:** Often represented as three separate 2D matrices (for Red, Green, and Blue channels) or as a 3D array. For an RGB image, it can be represented as $F(i, j, k)$, where $k=1$ for red, $k=2$ for green, and $k=3$ for blue.

---

### 4. Relationship to Textbooks and Course Outcomes

*   **Gonzalez & Woods (4th Ed.):** Chapter 1, "Digital Image Fundamentals," covers the basics of image formation, sampling, and quantization in detail. This is a primary reference for this topic.
*   **Jayaraman, Esakkirajan, & Veerakumar:** Chapter 1, "Digital Image Fundamentals," also introduces the concepts of image formation and digitization.

**Alignment with Course Outcomes:**

*   **CO1 (K2):** Understanding the simple image formation model directly contributes to explaining how images are captured and become the input to an image processing system. We learn about the "components" (illumination, reflectance, sensor) involved.
*   **CO2 (K3):** While this topic is foundational, it sets the stage for understanding how continuous physical phenomena are transformed into discrete mathematical representations, which is crucial for subsequent analysis using mathematical transforms. The concept of the image as a 2D function $f(x,y)$ is a mathematical abstraction.

---

### 5. Important Points to Remember

*   An image is a 2D function $f(x, y)$ representing intensity.
*   The simple image formation model is $f(x, y) = i(x, y) \cdot r(x, y)$, where $i$ is illumination and $r$ is reflectance.
*   **Illumination** is about the light source.
*   **Reflectance** is about the object's surface properties.
*   Digital images are created through **sampling** (spatial discretization) and **quantization** (intensity discretization).
*   **Pixels** are the basic elements of a digital image.
*   Spatial resolution relates to the number of pixels, and gray-scale/color resolution relates to the number of intensity levels.

---

### 6. Practice Questions and Exercises

**Question 1:**
Explain the simple image formation model and define its components. What is the typical range of values for the reflectance component?

**Answer 1:**
The simple image formation model is described by the equation $f(x, y) = i(x, y) \cdot r(x, y)$.
*   $f(x, y)$ represents the observed image at spatial coordinates $(x, y)$.
*   $i(x, y)$ represents the illumination component, which describes the intensity and distribution of light illuminating the scene at $(x, y)$.
*   $r(x, y)$ represents the reflectance component, which describes the inherent property of the object's surface at $(x, y) that determines how much light it reflects.
The reflectance component typically ranges from 0 (perfect absorption) to 1 (perfect reflection).

**Question 2:**
What are the two fundamental processes involved in converting a continuous image into a digital image? Briefly describe each.

**Answer 2:**
The two fundamental processes are:
1.  **Sampling:** This process discretizes the spatial coordinates $(x, y)$ of the image by dividing it into a grid of pixels. Each pixel corresponds to a specific location in the original continuous image.
2.  **Quantization:** This process discretizes the intensity or color values of each pixel. The continuous range of intensity values is mapped to a finite set of discrete levels, typically represented by integers.

**Question 3:**
Consider a scene with uniform illumination ($i(x, y) = 100$) and an object with varying reflectance where $r(x, y) = 0.5$ for most of the object and $r(x, y) = 0.1$ for a darker patch. Calculate the resulting image intensity $f(x, y)$ for both areas.

**Answer 3:**
Using the model $f(x, y) = i(x, y) \cdot r(x, y)$:
*   For the area with $r(x, y) = 0.5$: $f(x, y) = 100 \cdot 0.5 = 50$.
*   For the darker patch with $r(x, y) = 0.1$: $f(x, y) = 100 \cdot 0.1 = 10$.
This shows how the object's reflectance affects the observed image intensity under uniform illumination.

**Question 4:**
If an image is sampled into a grid of 512 rows and 512 columns, and each pixel's intensity is represented using 8 bits, what are the spatial resolution and gray-scale resolution of this digital image?

**Answer 4:**
*   **Spatial Resolution:** The image is sampled into a grid of 512 rows and 512 columns, meaning it has a spatial resolution of $512 \times 512$ pixels.
*   **Gray-scale Resolution:** Each pixel's intensity is represented using 8 bits, which allows for $2^8 = 256$ distinct gray levels.

---

This concludes the study notes for the "Simple Image Formation Model." Understanding these fundamentals is crucial for proceeding to more advanced topics in digital image processing.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
