---
title: "Digital Image Fundamentals: Image representation"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 1: Digital Image Fundamentals: Image representation"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fee01"
status: "completed"
scrapedAt: "2026-05-23T18:00:18.603Z"
---
# DIGITAL IMAGE PROCESSING

## Module 1: Digital Image Fundamentals: Image Representation

---

### Introduction to Digital Image Representation

This module lays the foundation for understanding how images are represented and manipulated in a digital format. It's crucial for all subsequent image processing techniques.

**Key Concept:** A digital image is a two-dimensional array of numbers, called pixels, that represent the intensity or color of the image at specific locations.

**Relevance to Course Outcomes:**
*   **CO1 (K2):** Understanding image representation is fundamental to explaining the components of an image processing system (e.g., how the input image is structured).
*   **CO2 (K3):** This module introduces the basic mathematical representation of images, which is a prerequisite for analyzing various concepts and mathematical transforms.

---

### 1.1 What is a Digital Image?

A digital image is a numerical representation of a real-world scene or a graphic element, sampled and quantized into a discrete grid of picture elements (pixels).

*   **Sampling:** The process of converting a continuous spatial function (representing an image) into a discrete set of points. Imagine dividing the image into a grid.
*   **Quantization:** The process of converting the continuous amplitude (intensity or color value) of each sampled point into a discrete set of values.

**Textbook Reference:**
*   **Gonzalez & Woods (4th Ed.):** Chapter 1, Section 1.1 (Introduction) and Chapter 2, Section 2.1 (Sampling and Quantization). They emphasize that sampling and quantization are the core processes that transform an analog image into a digital one.

---

### 1.2 Elements of Visual Perception

Understanding how humans perceive images is important for appreciating the design and limitations of digital image processing.

*   **The Eye and the Visual Cortex:** The human eye captures light, and the visual cortex in the brain processes these signals to form an image.
*   **Light and Electromagnetic Spectrum:** Visible light is a small portion of the electromagnetic spectrum. Images are formed by the light that objects reflect or emit.
*   **Basic Elements of an Image:**
    *   **Elements:** Points, lines, curves, shapes, textures.
    *   **Intensity:** The brightness of a point.
    *   **Color:** The visual perception of hue and saturation.

**Important Point to Remember:** Human visual perception is not perfect and can be influenced by factors like contrast, surrounding colors, and adaptation.

**Textbook Reference:**
*   **Gonzalez & Woods (4th Ed.):** Chapter 1, Section 1.2 (Some Basic Elements of a Digital Image).

---

### 1.3 Relationship Between Pixels

Pixels are not isolated entities; their spatial relationships are fundamental to image processing.

*   **Neighbors of a Pixel:**
    *   **4-Neighbors:** Pixels directly adjacent horizontally and vertically.
    *   **8-Neighbors:** Pixels adjacent horizontally, vertically, and diagonally.
    *   **Diagonal Neighbors:** Pixels adjacent only diagonally.

    Let `p` be a pixel at coordinates `(x, y)`.
    *   **4-Neighbors:** `(x+1, y)`, `(x-1, y)`, `(x, y+1)`, `(x, y-1)`
    *   **8-Neighbors:** `(x+1, y)`, `(x-1, y)`, `(x, y+1)`, `(x, y-1)`, `(x+1, y+1)`, `(x-1, y-1)`, `(x+1, y-1)`, `(x-1, y+1)`

*   **Adjacency, Connectivity, and Region:**
    *   **Adjacency:** Two pixels are adjacent if they share a common border or corner.
    *   **Connectivity:**
        *   **4-connectivity:** Two pixels are 4-connected if they are adjacent and their intensity values are in a specified set `V` (e.g., both are white pixels).
        *   **8-connectivity:** Two pixels are 8-connected if they are 8-adjacent and their intensity values are in `V`.
        *   **m-connectivity:** A mix of 4- and diagonal connectivity. Pixels are m-connected if they are 4-connected or if they are diagonally adjacent AND the intervening diagonal neighbor's value is also in `V`.
    *   **Region:** A set of pixels that are connected to each other.
    *   **Background:** The set of pixels that are not part of any foreground region.

*   **Distance Measures:** Used to quantify the "distance" between pixels. For pixels `p` at `(x1, y1)` and `q` at `(x2, y2)`:
    *   **Euclidean Distance:** `D_e = sqrt((x1 - x2)^2 + (y1 - y2)^2)`
    *   **City Block Distance (4-distance):** `D_4 = |x1 - x2| + |y1 - y2|` (Corresponds to the shortest path using 4-neighbors).
    *   **Chessboard Distance (8-distance):** `D_8 = max(|x1 - x2|, |y1 - y2|)` (Corresponds to the shortest path using 8-neighbors).

**Example:** Consider a pixel at (2,2) and its neighbors.
*   4-Neighbors: (1,2), (3,2), (2,1), (2,3)
*   8-Neighbors: Includes the 4-neighbors plus (1,1), (1,3), (3,1), (3,3)

**Relevance to Course Outcomes:**
*   **CO2 (K3):** Understanding pixel relationships is fundamental for spatial filtering and many mathematical transformations that operate on local neighborhoods.
*   **CO5 (K2):** Connectivity concepts are essential for basic image segmentation techniques like region growing.

**Textbook Reference:**
*   **Gonzalez & Woods (4th Ed.):** Chapter 2, Section 2.1.3 (Relationship between Pixels).
*   **Jayaraman, Esakkirajan, Veerakumar (McGraw Hill):** Chapter 2, Section 2.3 (Pixel Connectivity and Adjacency).

---

### 1.4 Image Representation: Types of Digital Images

Digital images can be categorized based on their pixel values and how they represent information.

*   **Binary Images:**
    *   Each pixel has only two possible intensity values, typically 0 (black) and 1 (white).
    *   Used for black and white images or for representing masks and shapes.
    *   Minimum bits per pixel required: 1 bit.

*   **Grayscale Images:**
    *   Each pixel has a range of intensity values, usually from 0 (black) to 255 (white).
    *   Represented by a single channel.
    *   Typically 8 bits per pixel (2^8 = 256 intensity levels).
    *   Higher bit depths (e.g., 10, 12, 16 bits) provide finer intensity resolution.

*   **Color Images:**
    *   Represented by multiple channels, typically three for Red, Green, and Blue (RGB).
    *   Each pixel is defined by a triplet of values (R, G, B), where each value represents the intensity of that color component.
    *   **Truecolor (24-bit color):** 8 bits per channel (R, G, B), resulting in 2^24 = 16,777,216 possible colors.
    *   **Other Color Models:** HSV, HSL, CMYK, YCbCr, etc., are used for different applications.

*   **Indexed Color Images:**
    *   A compromise between grayscale and full-color images.
    *   Uses a limited color palette, where each pixel's value is an index into a color look-up table (CLUT).
    *   More efficient storage than full RGB if the number of unique colors is less than 256.

**Example:**
*   **Binary:** A simple black and white shape drawn on a white background.
*   **Grayscale:** A photograph in black and white.
*   **Color:** A standard digital photograph.

**Relevance to Course Outcomes:**
*   **CO1 (K2):** Understanding different image types is crucial for explaining the input and output of various image processing operations.
*   **CO2 (K3):** Different image representations require different mathematical approaches for analysis.

**Textbook Reference:**
*   **Gonzalez & Woods (4th Ed.):** Chapter 2, Section 2.2 (Image Representation).
*   **Jayaraman, Esakkirajan, Veerakumar (McGraw Hill):** Chapter 2, Section 2.2 (Image Representation).
*   **Castleman (Pearson Education):** Chapter 1, Section 1.2 (Digital Image Basics) covers different image types.

---

### 1.5 Digital Image Representation in Memory

How are these digital images stored and accessed in a computer system?

*   **Image Matrix:** A 2D array (or 3D for color) representing the image.
    *   `f(x, y)` denotes the intensity of the pixel at spatial coordinates `(x, y)`.
    *   `x` represents the column index (horizontal position), and `y` represents the row index (vertical position).
    *   The origin `(0,0)` is usually at the top-left corner.

*   **Image Size (Resolution):**
    *   The number of rows and columns in the image matrix.
    *   Typically represented as `M x N`, where `M` is the number of rows and `N` is the number of columns.
    *   Total number of pixels = `M * N`.

*   **Bit Depth:**
    *   The number of bits used to represent the intensity value of a single pixel.
    *   **Binary:** 1 bit/pixel
    *   **Grayscale (8-bit):** 8 bits/pixel
    *   **Truecolor (24-bit RGB):** 24 bits/pixel (8 bits per channel).

*   **Storage Requirements:**
    *   **Grayscale (M x N, 8-bit):** `M * N * 1` bytes.
    *   **Color (M x N, 24-bit RGB):** `M * N * 3` bytes.

**Example:** A 640x480 grayscale image requires `640 * 480 * 1` byte = 307,200 bytes = 300 KB of storage. A 640x480 color image requires `640 * 480 * 3` bytes = 921,600 bytes = 900 KB of storage.

**Important Point to Remember:** The choice of bit depth and color representation significantly impacts storage requirements and the visual quality of the image.

**Textbook Reference:**
*   **Gonzalez & Woods (4th Ed.):** Chapter 2, Section 2.1.1 (A Simple Gray-Level Image Model).
*   **Jain (PHI):** Chapter 1, Section 1.2 (Digital Image Representation).

---

### 1.6 Key Concepts and Definitions Summary

*   **Digital Image:** A 2D array of pixels.
*   **Pixel:** The smallest element of a digital image, representing a single point.
*   **Sampling:** Discretizing spatial coordinates.
*   **Quantization:** Discretizing intensity/color values.
*   **Resolution:** The number of rows and columns (M x N).
*   **Bit Depth:** The number of bits per pixel.
*   **Neighbors:** Adjacent pixels (4, 8, or m-connectivity).
*   **Adjacency:** Sharing a border or corner.
*   **Connectivity:** A path of connected pixels.
*   **Binary Image:** Two intensity levels (0, 1).
*   **Grayscale Image:** Intensity levels from black to white.
*   **Color Image:** Multiple channels representing color components (e.g., RGB).

---

### Practice Questions and Exercises

**Question 1:**
Define the terms "sampling" and "quantization" in the context of digital image processing. (CO1 - K2)

**Answer:**
*   **Sampling:** The process of converting a continuous spatial function into a discrete set of points by dividing the image into a grid. It determines the spatial resolution of the image.
*   **Quantization:** The process of converting the continuous amplitude (intensity or color value) of each sampled point into a discrete set of values. It determines the number of intensity or color levels.

---

**Question 2:**
Consider a pixel at coordinates `(x, y)`. List the coordinates of its:
a) 4-neighbors
b) 8-neighbors (CO2 - K3)

**Answer:**
a) **4-neighbors:** `(x+1, y)`, `(x-1, y)`, `(x, y+1)`, `(x, y-1)`
b) **8-neighbors:** `(x+1, y)`, `(x-1, y)`, `(x, y+1)`, `(x, y-1)`, `(x+1, y+1)`, `(x-1, y-1)`, `(x+1, y-1)`, `(x-1, y+1)`

---

**Question 3:**
Calculate the storage space (in bytes) required for a color image of resolution 1024x768 pixels, assuming each pixel is represented using 24 bits (Truecolor RGB). (CO1 - K2)

**Answer:**
Number of pixels = 1024 * 768
Bits per pixel = 24 bits
Bytes per pixel = 24 bits / 8 bits/byte = 3 bytes

Total storage = (1024 * 768) * 3 bytes
Total storage = 786,432 * 3 bytes
Total storage = 2,359,296 bytes

---

**Question 4:**
Explain the difference between 4-connectivity and 8-connectivity, providing a scenario where one might be preferred over the other. (CO5 - K2)

**Answer:**
*   **4-connectivity:** Pixels are connected if they share an edge (horizontally or vertically).
*   **8-connectivity:** Pixels are connected if they share an edge or a corner (horizontally, vertically, or diagonally).

**Scenario Preference:**
*   **4-connectivity:** Might be preferred when strictly adhering to axial movements or when diagonal connections could introduce undesirable artifacts in certain segmentation tasks (e.g., separating objects that are very close diagonally).
*   **8-connectivity:** Often preferred for a more natural connectivity in segmentation tasks, as it accounts for diagonal relationships which are often present in real-world image features. For example, in tracing a curved object, 8-connectivity might provide a smoother path.

---

**Question 5:**
If a digital image has a resolution of 512x512 pixels and each pixel is represented by 8 bits for grayscale intensity, what is the total number of pixels and the total storage required in KB? (CO1 - K2)

**Answer:**
Total number of pixels = 512 * 512 = 262,144 pixels

Storage per pixel = 8 bits = 1 byte

Total storage in bytes = 262,144 pixels * 1 byte/pixel = 262,144 bytes

To convert to KB:
Total storage in KB = 262,144 bytes / 1024 bytes/KB = 256 KB

---

### Important Points to Remember

*   A digital image is fundamentally a grid of numbers (pixels).
*   Sampling determines spatial resolution, while quantization determines intensity/color resolution.
*   Pixel neighborhoods and connectivity are crucial for spatial operations.
*   The type of image (binary, grayscale, color) dictates its representation and processing needs.
*   Storage requirements are directly proportional to resolution and bit depth.

---

### Alignment with Course Outcomes

*   **CO1 (K2):** This module directly addresses explaining components like pixel structure, image types, and their representation in memory.
*   **CO2 (K3):** The concepts of pixel relationships and different image representations lay the groundwork for analyzing mathematical transforms and operations in subsequent modules.

---

This concludes Module 1: Digital Image Fundamentals: Image Representation. The understanding gained here is essential for all subsequent topics in digital image processing.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
