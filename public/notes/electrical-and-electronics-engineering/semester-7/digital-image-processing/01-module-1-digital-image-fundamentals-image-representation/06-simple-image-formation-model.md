---
title: "Simple image formation model"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 1: Digital Image Fundamentals: Image representation"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36911"
status: "completed"
scrapedAt: "2026-05-23T16:34:51.009Z"
---
# Digital Image Processing: Module 1 - Digital Image Fundamentals: Image Representation

## Topic: Simple Image Formation Model

---

### 1. Introduction to Image Formation

*   **Goal:** To understand the fundamental process by which a physical scene is captured and represented as a digital image.
*   This model is crucial for understanding the raw data we work with in digital image processing.
*   **Reference:** Gonzalez & Woods, Chapter 2 (Digital Image Fundamentals) provides a foundational understanding of image acquisition.

---

### 2. The Basic Imaging Model

The formation of an image can be modeled as a process that maps a 3D scene to a 2D image. This process involves several key components:

#### 2.1. The Scene

*   Represents the real-world objects and their properties (e.g., color, texture, shape).
*   The scene is illuminated by a light source.

#### 2.2. Illumination

*   The light source provides the energy that interacts with the scene.
*   The *intensity* of illumination varies across the scene.
*   **Example:** A spotlight on a stage versus ambient room light.

#### 2.3. The Sensor

*   The device that captures the light reflected or emitted by the scene.
*   Common sensors include cameras (digital cameras, video cameras), scanners, and specialized imaging devices.
*   The sensor converts light energy into an electrical signal.

#### 2.4. The Lens System

*   Focuses the light from the scene onto the sensor.
*   It determines factors like field of view, depth of field, and image sharpness.
*   **Key Concept:** The lens system projects the 3D scene onto the 2D sensor plane.

#### 2.5. Image Representation

*   The electrical signal from the sensor is processed and converted into a digital image.
*   A digital image is essentially a matrix of numbers, where each number represents the intensity or color of a pixel.

---

### 3. Mathematical Formulation of Image Formation

The intensity at a point $(x, y)$ in the image plane can be described by the following relationship:

$f(x, y) = i(x, y) \cdot s(x, y)$

Where:

*   $f(x, y)$: The **intensity** of the image at spatial coordinates $(x, y)$. This is what we ultimately observe.
*   $i(x, y)$: The **illumination** component. It represents the intensity of the light source illuminating the scene at $(x, y)$.
*   $s(x, y)$: The **reflectance** (or transmissivity) of the object's surface at $(x, y)$. This property determines how much light is reflected (or transmitted) by the object.

**Explanation of Components:**

*   **Illumination ($i(x, y)$):** This term accounts for variations in light intensity across the scene. For example, a darker corner of a room will have a lower $i(x, y)$ value.
*   **Reflectance ($s(x, y)$):** This term describes the intrinsic properties of the object's surface. A bright white object will have a high $s(x, y)$ value, reflecting more light, while a dark object will have a low $s(x, y)$ value.

**Example:**

Imagine a red apple on a white table under a bright overhead light.

*   **Scene:** Red apple, white table.
*   **Illumination ($i(x, y)$):** High and relatively uniform from the overhead light.
*   **Reflectance ($s(x, y)$):**
    *   High for the white table, reflecting most of the incident light.
    *   Lower for the red apple, reflecting primarily red wavelengths of light and absorbing others.
*   **Image Intensity ($f(x, y)$):**
    *   On the table, $f(x, y)$ will be high (bright).
    *   On the apple, $f(x, y)$ will be lower than the table, and specifically will have a high intensity in the red color channel.

---

### 4. Types of Illumination

The nature of $i(x, y)$ significantly impacts the resulting image.

*   **Uniform Illumination:** If the illumination is constant across the entire scene, $i(x, y) = C$ (a constant).
    *   In this ideal case, $f(x, y) = C \cdot s(x, y)$. The image intensity is directly proportional to the object's reflectance.
*   **Non-uniform Illumination:** Real-world lighting is often non-uniform, leading to shadows and variations in brightness.
    *   This can make it difficult to distinguish variations in object reflectance from variations in illumination.
    *   **Example:** A photograph taken with a flash where one side of an object is brightly lit and the other is in shadow.

---

### 5. Types of Reflectance/Transmissivity

The nature of $s(x, y)$ determines how objects appear in the image.

*   **Opaque Objects:** Reflect light. The term used is **reflectance**.
    *   A perfectly **specular** surface reflects light in a single direction (like a mirror). This leads to highlights.
    *   A perfectly **diffuse** surface reflects light equally in all directions. The perceived intensity depends only on the illumination.
    *   Most real-world surfaces are a combination of specular and diffuse.
*   **Transparent Objects:** Transmit light. The term used is **transmissivity**.
    *   **Example:** A glass pane allows light to pass through.

**Note:** In the simplified model, we often treat $s(x, y)$ as a single value. In color imaging, $s(x, y)$ becomes a vector, with each component representing the reflectance in a specific color band (e.g., Red, Green, Blue).

---

### 6. Digital Image Representation (Brief Introduction)

*   The continuous image $f(x, y)$ is sampled and quantized to create a digital image.
*   **Sampling:** Discretizing the spatial coordinates $(x, y)$ into a grid of points. Each point is a **pixel**.
*   **Quantization:** Discretizing the intensity values into a finite number of discrete levels.

This process transforms the continuous image into a discrete, numerical representation: a 2D array of numbers.

---

### 7. Important Points to Remember

*   **Image Formation Model:** $f(x, y) = i(x, y) \cdot s(x, y)$ is a fundamental concept.
*   **Illumination ($i(x, y)$):** Represents the light source's intensity.
*   **Reflectance ($s(x, y)$):** Represents the object's surface property.
*   **Separation:** A key challenge in image processing is often separating the illumination and reflectance components to analyze the true properties of objects. Techniques like illumination normalization or homomorphic filtering are used for this.
*   **Real-world vs. Model:** The simple model is an idealization. Real-world image formation involves more complex factors like noise, atmospheric conditions, and sensor characteristics.
*   **Color Images:** The model extends to color images by considering intensity in different color bands.

---

### 8. Relating to Course Outcomes

*   **CO1 (Understand components of image processing system):** This topic directly addresses the initial stage of an image processing system – image acquisition and the factors influencing it (illumination, optics, sensors).
*   **CO2 (Analyze concepts and mathematical transforms):** The mathematical model $f(x, y) = i(x, y) \cdot s(x, y)$ is a core concept for understanding image data. Analyzing the impact of different types of illumination and reflectance falls under this outcome.

---

### 9. Practice Questions and Answers

**Question 1:**
In the simple image formation model, what does the term $i(x, y)$ represent?

**Answer:**
$i(x, y)$ represents the illumination component, which signifies the intensity of the light source illuminating the scene at spatial coordinates $(x, y)$.

**Question 2:**
If a scene is illuminated with a perfectly uniform light source, how does the illumination component $i(x, y)$ change with spatial coordinates?

**Answer:**
If the illumination is perfectly uniform, $i(x, y)$ is a constant value, denoted as $C$, meaning it does not change with spatial coordinates $(x, y)$.

**Question 3:**
Consider a black matte object and a white matte object placed side-by-side under the same uniform illumination. Which object would have a higher value for its $s(x, y)$ component and why?

**Answer:**
The white matte object would have a higher value for its $s(x, y)$ component. This is because the $s(x, y)$ term represents the reflectance of the object's surface. Matte white surfaces reflect a larger proportion of incident light compared to matte black surfaces, which absorb most of the incident light.

**Question 4:**
A significant challenge in analyzing an image is to understand the object's intrinsic properties (reflectance) independent of the lighting conditions. How does the image formation equation $f(x, y) = i(x, y) \cdot s(x, y)$ highlight this challenge?

**Answer:**
The equation shows that the observed image intensity $f(x, y)$ is a product of both illumination $i(x, y)$ and reflectance $s(x, y)$. To isolate or analyze the reflectance $s(x, y)$, one would ideally need to know or estimate the illumination $i(x, y)$, which is often difficult in practice due to its variability across the scene.

**Question 5:**
True or False: In the context of image formation, the lens system is primarily responsible for determining the color of the object.

**Answer:**
False. The lens system is responsible for focusing light onto the sensor. The color of the object is determined by its surface reflectance ($s(x, y)$) and the spectral content of the illumination ($i(x, y)$).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 10. Textbook/Reference Book Content Incorporation

*   **Gonzalez & Woods (4th Ed.):** Chapter 2 extensively covers the basics of image formation, including the light interaction with objects and the sensor's role. The concept of $i(x, y)$ and $s(x, y)$ is fundamental to their discussion of image sensing and acquisition.
*   **Jayaraman, Esakkirajan, Veerakumar (1st Ed.):** Their text also lays the groundwork in early chapters, explaining how images are formed by the interaction of light with scene elements and captured by imaging sensors, often using similar mathematical notations for illumination and reflectance.
*   **Castleman (2nd Ed.):** Emphasizes the physical aspects of image acquisition, discussing optics and sensor technologies, which are integral to understanding the formation model and its limitations.
*   **Jain (1988):** Provides a historical perspective and solid mathematical grounding for image formation principles, likely covering the illumination-reflectance model.
*   **Pratt (4th Ed.):** Likely delves into more advanced aspects of image formation, including color, and how different optical systems and sensor characteristics influence the final digital image representation.

---