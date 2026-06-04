---
title: "Simple image formation model"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 1: Digital Image Fundamentals: Image representation"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fee06"
status: "completed"
scrapedAt: "2026-05-23T18:00:22.036Z"
---
# DIGITAL IMAGE PROCESSING

## Module 1: Digital Image Fundamentals: Image Representation

### Topic: Simple Image Formation Model

---

### Learning Outcomes:

*   **LO1:** Understand the basic principles of how an image is formed.
*   **LO2:** Differentiate between the concepts of illumination and reflectance.
*   **LO3:** Explain the role of the sensor in image acquisition.
*   **LO4:** Comprehend the digital representation of an image.

---

### 1. Introduction to Image Formation

An image is a visual representation of an object or scene. In digital image processing, we deal with digital images, which are discrete representations of these visual representations. Understanding how an image is formed is fundamental to processing it effectively.

**(Referenced from: Gonzalez & Woods, 4th Ed., Chapter 2: Digital Image Fundamentals)**

---

### 2. The Basic Image Formation Model

The formation of a 2D image can be modeled as a process involving **illumination** and the **reflectance** properties of the objects in a scene. Essentially, an image is formed when light from an illumination source interacts with objects in a scene and is then captured by a sensor.

The intensity at any point (x, y) in a digital image, denoted by $f(x, y)$, can be modeled as the product of illumination and reflectance:

$f(x, y) = i(x, y) \cdot r(x, y)$

Where:
*   $f(x, y)$: The intensity of the image at spatial coordinates $(x, y)$.
*   $i(x, y)$: The illumination component at $(x, y)$. This represents the intensity of the light source illuminating the scene.
*   $r(x, y)$: The reflectance component at $(x, y)$. This represents the proportion of illumination that is reflected by the object at $(x, y)$.

**(Referenced from: Gonzalez & Woods, 4th Ed., Chapter 2)**

---

### 3. Components of the Image Formation Model

#### 3.1. Illumination ($i(x, y)$)

*   **Definition:** Illumination refers to the light source that illuminates a scene. It is the "light" part of the equation.
*   **Characteristics:**
    *   **Spatial Variation:** Illumination can vary across the image. For example, in a room, the lighting might be brighter near a lamp and dimmer in corners.
    *   **Spectral Distribution:** The color of the illumination source affects the colors of the objects in the scene.
*   **Examples:**
    *   **Uniform Illumination:** In an ideal scenario, the illumination is constant across the entire scene. This simplifies the model, making $i(x, y) = C$ (a constant).
    *   **Non-uniform Illumination:** In real-world scenarios, illumination is often non-uniform, for instance, due to shadows or variations in light intensity from a source.

#### 3.2. Reflectance ($r(x, y)$)

*   **Definition:** Reflectance refers to the property of an object's surface that determines how much of the incident illumination it reflects. It is the "object" part of the equation.
*   **Characteristics:**
    *   **Surface Properties:** Reflectance is determined by the material, texture, and color of the object's surface.
    *   **Wavelength Dependent:** Reflectance can vary with the wavelength of light, which is why objects have different colors under white light.
*   **Examples:**
    *   **Bright Surfaces:** Surfaces with high reflectance reflect a larger portion of the incident light, appearing bright in the image.
    *   **Dark Surfaces:** Surfaces with low reflectance absorb more light and reflect less, appearing dark.
    *   **Specular Reflection:** Occurs from smooth, shiny surfaces, where light is reflected in a single direction, creating highlights.
    *   **Diffuse Reflection:** Occurs from rough surfaces, where light is scattered in many directions, resulting in uniform brightness regardless of the viewing angle.

#### 3.3. Sensor

*   **Definition:** A sensor is a device that converts the light reflected from objects into an electrical signal. This signal is then typically digitized to form a digital image.
*   **Role in Image Formation:** The sensor is the "eye" that captures the light distribution. Its characteristics influence the quality and properties of the acquired image.
*   **Types of Sensors:**
    *   **Photodiodes:** Solid-state devices that convert light into an electrical current.
    *   **CMOS and CCD:** Integrated circuits that contain millions of photodiodes, commonly used in digital cameras.
*   **Quantization:** The process by which the continuous range of light intensity captured by the sensor is mapped to a finite set of discrete intensity levels. This is crucial for digital representation.

**(Referenced from: Gonzalez & Woods, 4th Ed., Chapter 2; Jayaraman et al., 1st Ed., Chapter 1)**

---

### 4. Digital Representation of an Image

Once the light is captured and converted into an electrical signal, it needs to be converted into a digital format. This involves two main steps:

#### 4.1. Sampling

*   **Definition:** Sampling is the process of discretizing the spatial coordinates of a continuous image. In essence, it's dividing the image into a grid of small cells called **pixels**.
*   **Process:** A continuous image is scanned, and the intensity value is measured at discrete spatial locations.
*   **Result:** A grid of values where each value corresponds to the intensity at a specific spatial location. The number of samples determines the spatial resolution of the image.

#### 4.2. Quantization

*   **Definition:** Quantization is the process of discretizing the continuous range of intensity values. Each pixel's intensity is assigned one of a finite number of discrete levels.
*   **Process:** The range of intensity values (e.g., 0 to 255 for 8-bit grayscale) is divided into a specified number of levels.
*   **Result:** Each pixel has an intensity value represented by a finite number of bits. The number of quantization levels determines the **gray-scale resolution** or **bit depth**.

**Digital Image Representation:** A digital image is an array of numbers, where each number represents the intensity of a pixel at a specific spatial location. For a 2D grayscale image, it can be represented as:

$f(x, y) = \begin{bmatrix}
f(0,0) & f(0,1) & \cdots & f(0,N-1) \\
f(1,0) & f(1,1) & \cdots & f(1,N-1) \\
\vdots & \vdots & \ddots & \vdots \\
f(M-1,0) & f(M-1,1) & \cdots & f(M-1,N-1)
\end{bmatrix}$

Where:
*   $M$ is the number of rows (height).
*   $N$ is the number of columns (width).
*   $f(x, y)$ is the intensity value of the pixel at row $x$ and column $y$.

**(Referenced from: Gonzalez & Woods, 4th Ed., Chapter 2; Jain, 1988, Chapter 1)**

---

### 5. Important Points to Remember

*   The fundamental model of image formation is $f(x, y) = i(x, y) \cdot r(x, y)$.
*   **Illumination** is the light source, while **reflectance** is the property of the object.
*   Understanding the characteristics of illumination and reflectance is crucial for image enhancement and analysis.
*   **Sensors** convert light into electrical signals, which are then digitized.
*   **Sampling** discretizes spatial coordinates, and **quantization** discretizes intensity levels.
*   A digital image is a matrix of pixel values.

---

### 6. Alignment with Course Outcomes

*   **CO1: Explain different components of image processing system (Knowledge Level: K2)**
    *   This topic directly addresses the fundamental components involved in image formation, which is the initial step of any image processing system (light source, object, sensor).
*   **CO2: Analyse the various concepts and mathematical transforms necessary for image processing (Knowledge Level: K3)**
    *   Understanding the mathematical model $f(x, y) = i(x, y) \cdot r(x, y)$ and the concepts of sampling and quantization are foundational mathematical concepts for further analysis.
*   **CO3: Illustrate the various schemes of image compression (Knowledge Level: K3)**
    *   While not directly covering compression schemes, understanding the digital representation (pixel matrix, bit depth) lays the groundwork for understanding how data can be compressed.
*   **CO4: Analyze the filtering and restoration of images (Knowledge Level: K3)**
    *   The image formation model provides the basis for understanding degradations (e.g., non-uniform illumination) that might require filtering or restoration techniques.
*   **CO5: Describe the basic image segmentation techniques (Knowledge Level: K2)**
    *   The concept of pixels and their intensity values is fundamental to all segmentation techniques.

---

### 7. Practice Questions and Exercises

**Question 1:**
State the basic mathematical model for image formation and define each term.

**Answer:**
The basic mathematical model for image formation is $f(x, y) = i(x, y) \cdot r(x, y)$.
*   $f(x, y)$: The intensity of the image at spatial coordinates $(x, y)$.
*   $i(x, y)$: The illumination component at $(x, y)$.
*   $r(x, y)$: The reflectance component at $(x, y)$.

---

**Question 2:**
Differentiate between illumination and reflectance. Provide a real-world example for each.

**Answer:**
*   **Illumination:** Refers to the light source illuminating a scene. It determines the amount of light available to be reflected.
    *   **Example:** The light bulb in a room.
*   **Reflectance:** Refers to the property of an object's surface that determines how much of the incident illumination it reflects.
    *   **Example:** A red car's paint reflects red wavelengths of light more than others.

---

**Question 3:**
Explain the processes of sampling and quantization in the context of digital image formation.

**Answer:**
*   **Sampling:** Discretizes the continuous spatial domain of an image into a grid of pixels. It's like taking measurements of intensity at specific points.
*   **Quantization:** Discretizes the continuous range of intensity values into a finite set of levels. It's like rounding off the measured intensity to the nearest available discrete value.

---

**Question 4:**
If a camera captures an image with uniform illumination, how does the image formation model simplify?

**Answer:**
If the illumination is uniform, $i(x, y) = C$ (a constant value). The model simplifies to $f(x, y) = C \cdot r(x, y)$. This means the image intensity at any point is directly proportional to the object's reflectance at that point, with the constant $C$ acting as a scaling factor.

---

**Question 5:**
A digital image is represented as a matrix. What do the dimensions of the matrix and the values within the matrix represent?

**Answer:**
*   The **dimensions** of the matrix ($M \times N$) represent the spatial resolution of the image (height $M$ and width $N$ in pixels).
*   The **values** within the matrix represent the intensity of each pixel at its corresponding spatial location.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### References:

*   Gonzalez Rafael C, Woods Richard E. *Digital Image Processing*. 4th ed. Pearson; 2017.
*   Jayaraman S, Esakkirajan S, Veerakumar T. *Digital Image Processing*. 1st ed. McGraw Hill; 2011.
*   Jain Anil K. *Fundamentals of digital image processing*. Prentice Hall India; 1989.