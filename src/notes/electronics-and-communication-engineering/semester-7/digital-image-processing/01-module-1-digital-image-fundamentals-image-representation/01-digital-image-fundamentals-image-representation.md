---
title: "Digital Image Fundamentals: Image representation"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 1: Digital Image Fundamentals: Image representation"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff4f2"
status: "completed"
scrapedAt: "2026-05-23T18:06:22.058Z"
---
# DIGITAL IMAGE PROCESSING: Module 1 - Digital Image Fundamentals: Image Representation

## 1.1 Introduction to Digital Image Representation

This module lays the foundation for understanding how digital images are created, stored, and manipulated. A digital image is essentially a numerical representation of a real-world image, which can be captured by various sensors (like cameras, scanners, or medical imaging devices).

**Key Concept:** A digital image is a 2D array of numbers, where each number represents the intensity or color of a particular point in the image.

### 1.1.1 What is a Digital Image?

*   A digital image is a representation of a 2D picture in a digital form.
*   It's composed of a finite set of digital values, called picture elements or pixels.
*   Each pixel has a specific location and intensity value.

### 1.1.2 How are Digital Images Captured?

Digital images are typically captured through a process involving:

1.  **Illumination:** A light source illuminates the scene.
2.  **Reflection:** The scene reflects the light.
3.  **Sensing:** A sensor (e.g., CCD or CMOS in a camera) captures the reflected light.
4.  **Sampling:** The continuous analog signal from the sensor is sampled at discrete locations to create a grid of pixels.
5.  **Quantization:** The intensity value of each sampled pixel is quantized into a finite number of discrete levels.

**(Refer to Gonzalez & Woods, 4th Ed., Chapter 2: Digital Image Fundamentals for detailed explanation on image sensing and acquisition.)**

### 1.1.3 Relation to Course Outcomes

*   **CO1 (K2):** Understanding how images are represented is fundamental to explaining the components of an image processing system, such as the sensor and the display.
*   **CO2 (K3):** The representation of an image as a matrix is the basis for applying mathematical transforms.

## 1.2 Key Concepts in Digital Image Representation

### 1.2.1 Pixels (Picture Elements)

*   **Definition:** The smallest controllable element of a picture, represented by a single point or square in a raster image.
*   **Location:** Each pixel is identified by its coordinates (x, y) within the image grid.
*   **Value:** The value of a pixel represents its intensity or color.

### 1.2.2 Image Sampling and Quantization

*   **Sampling:** The process of converting a continuous image into a discrete grid of pixels.
    *   Think of it like dividing the image into small squares. The resolution of the image depends on how many samples (pixels) are taken per unit length.
    *   **Resolution:** The number of pixels in an image, often expressed as width × height (e.g., 1920x1080 pixels). Higher resolution means more detail.
*   **Quantization:** The process of assigning a discrete intensity value to each pixel.
    *   For grayscale images, this typically involves mapping the continuous range of light intensities to a finite set of integer values.
    *   **Bit Depth:** The number of bits used to represent the intensity of a single pixel.
        *   **1-bit image:** Binary image (black and white only, 2 intensity levels: 0 and 1).
        *   **8-bit grayscale image:** 256 intensity levels (values from 0 to 255). 0 is typically black, 255 is white.
        *   **24-bit color image (True Color):** Each pixel is represented by three 8-bit values (Red, Green, Blue), totaling 24 bits per pixel, allowing for 16.7 million colors.

**(Refer to Gonzalez & Woods, 4th Ed., Chapter 2 for detailed mathematical formulations of sampling and quantization.)**

### 1.2.3 Image Representation in Memory

*   **2D Array (Matrix):** The most common way to represent a grayscale image.
    *   An image of size M x N pixels would be represented by an M x N matrix.
    *   `I(x, y)` denotes the intensity of the pixel at coordinates (x, y).
    *   Example: A 3x3 grayscale image:
        ```
        [ 50  75 100 ]
        [ 120 150 180 ]
        [ 200 220 250 ]
        ```
*   **3D Array (Tensor):** Used to represent color images.
    *   For an RGB image of size M x N, it's typically represented as an M x N x 3 array.
    *   The third dimension represents the color channels: Red, Green, and Blue.
    *   `C(x, y, k)` denotes the intensity of the pixel at coordinates (x, y) in channel k (where k=1 for Red, k=2 for Green, k=3 for Blue).
    *   Example: A 2x2 RGB image:
        ```
        Pixel (0,0): [ R: 255, G: 0, B: 0 ] (Red)
        Pixel (0,1): [ R: 0, G: 255, B: 0 ] (Green)
        Pixel (1,0): [ R: 0, G: 0, B: 255 ] (Blue)
        Pixel (1,1): [ R: 100, G: 100, B: 100 ] (Gray)
        ```

### 1.2.4 Image Types Based on Pixel Values

*   **Binary Images:**
    *   Pixels have only two possible values (0 or 1).
    *   Represented as a 2D array of 0s and 1s.
    *   Useful for tasks like object detection and segmentation where only foreground/background distinction is needed.
    *   Example:
        ```
        [ 0  0  1  1 ]
        [ 0  0  1  1 ]
        [ 1  1  0  0 ]
        [ 1  1  0  0 ]
        ```
*   **Grayscale Images:**
    *   Pixels represent intensity levels from black to white.
    *   Typically 8-bit, with values from 0 (black) to 255 (white).
    *   Represented as a 2D array of intensity values.
*   **Color Images:**
    *   Pixels represent color information.
    *   Common representations:
        *   **RGB (Red, Green, Blue):** Most common, with three channels.
        *   **CMYK (Cyan, Magenta, Yellow, Black):** Used in printing.
        *   **HSV/HSL (Hue, Saturation, Value/Lightness):** Useful for color manipulation.
    *   Represented as 3D arrays (M x N x 3).

**(Refer to Jayaraman et al., Chapter 1: Introduction to Image Processing for a good overview of image types and representations.)**

## 1.3 Coordinate Systems

*   **Image Coordinate System:**
    *   Typically, the origin (0,0) is at the **top-left corner**.
    *   The 'x' axis goes from left to right (increasing column index).
    *   The 'y' axis goes from top to bottom (increasing row index).
    *   This is often the convention used in computer vision and image processing libraries.
*   **Cartesian Coordinate System:**
    *   Used in mathematics, with the origin (0,0) at the **bottom-left corner**.
    *   The 'x' axis goes from left to right.
    *   The 'y' axis goes from bottom to top.
    *   Sometimes used when discussing geometric transformations or theoretical aspects.

**Important Point:** Be mindful of the coordinate system being used, as it can affect how you interpret pixel locations and perform operations.

## 1.4 Image Resolution and its Impact

*   **Definition:** The number of pixels along the horizontal and vertical dimensions of an image.
*   **Impact:**
    *   **Detail:** Higher resolution images contain more detail and appear sharper.
    *   **File Size:** Higher resolution means more pixels, leading to larger file sizes.
    *   **Processing Time:** Operations on higher resolution images generally take longer.
    *   **Storage:** Requires more storage space.

**Example:** An image with resolution 640x480 has 307,200 pixels, while an image with 1920x1080 has 2,073,600 pixels. The latter contains significantly more information.

**(Refer to Castleman, 2/e, Chapter 2 for discussions on digital image properties and sampling.)**

## 1.5 Practice Questions and Exercises

**Question 1:**
What is a pixel, and what information does it hold?
**Answer:** A pixel (picture element) is the smallest individual element of a digital image. It holds information about the intensity or color at a specific location (x, y) within the image.

**Question 2:**
Differentiate between image sampling and image quantization.
**Answer:**
*   **Sampling** is the process of converting a continuous image into a discrete grid of pixels by selecting specific points from the continuous image. It determines the spatial resolution.
*   **Quantization** is the process of assigning a discrete intensity value to each sampled pixel. It determines the radiometric resolution (i.e., the number of gray levels or colors).

**Question 3:**
An 8-bit grayscale image has a resolution of 512x512 pixels.
a) How many bits are used to represent a single pixel?
b) What is the total number of pixels in the image?
c) What is the total number of bits required to store this image?
**Answer:**
a) 8 bits per pixel.
b) Total pixels = 512 * 512 = 262,144 pixels.
c) Total bits = (Number of pixels) * (Bits per pixel) = 262,144 * 8 = 2,097,152 bits.

**Question 4:**
Describe how an RGB color image is typically represented in digital memory.
**Answer:** An RGB color image is typically represented as a 3D array (or tensor) of size M x N x 3, where M is the height, N is the width, and the third dimension (size 3) represents the Red, Green, and Blue color channels, respectively. Each channel for a pixel contains an intensity value.

**Question 5:**
What is the standard coordinate system origin in most image processing applications?
**Answer:** The standard coordinate system origin in most image processing applications is at the **top-left corner** of the image.

## 1.6 Important Points to Remember

*   A digital image is a grid of pixels.
*   Each pixel has a location (x, y) and a value (intensity/color).
*   Sampling determines spatial resolution; Quantization determines radiometric resolution.
*   Grayscale images are typically represented as 2D arrays; Color images as 3D arrays.
*   Bit depth dictates the number of intensity levels.
*   The top-left origin is the common convention for image coordinates.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
