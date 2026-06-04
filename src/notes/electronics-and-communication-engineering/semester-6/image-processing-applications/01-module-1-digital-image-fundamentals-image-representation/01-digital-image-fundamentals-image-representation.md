---
title: "Digital Image Fundamentals: Image representation"
subject: "IMAGE PROCESSING APPLICATIONS"
module: "Module 1: Digital Image Fundamentals: Image representation"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780fef52"
status: "completed"
scrapedAt: "2026-05-23T18:01:02.956Z"
---
# Module 1: Digital Image Fundamentals: Image Representation

## 1. Introduction to Digital Image Processing

**Definition:** Digital Image Processing (DIP) is the process of manipulating digital images with the aid of computer algorithms to enhance their quality or extract useful information from them.

**Core Idea:** DIP transforms an input image into an output image by applying a set of algorithms. The output image can be of higher quality, or it can be of a different type, or it can contain specific information extracted from the input image.

**Applications:** DIP has a vast range of applications, including:
*   **Medical Imaging:** MRI, CT scans, X-rays
*   **Remote Sensing:** Satellite imagery analysis
*   **Computer Vision:** Object recognition, scene understanding
*   **Robotics:** Navigation, manipulation
*   **Entertainment:** Special effects, image editing
*   **Security:** Facial recognition, fingerprint analysis
*   **Manufacturing:** Quality control, defect detection

**Textbook Reference:**
*   Gonzalez & Woods, Chapter 1: "Introduction"
*   Jayaraman et al., Chapter 1: "Introduction to Image Processing"

---

## 2. Components of a Digital Image Processing System

A typical DIP system consists of the following components:

*   **Image Acquisition:** Capturing a digital image from a real-world scene. This involves sensors like cameras, scanners, etc.
*   **Image Enhancement:** Improving the visual appearance of an image or highlighting certain features. This is often subjective.
*   **Image Restoration:** Reducing or removing known degradations (e.g., blur, noise) from an image. This is more objective than enhancement.
*   **Color Image Processing:** Dealing with color images, including color models, segmentation, and enhancement.
*   **Wavelets and Multiresolution Processing:** Representing an image at different scales or resolutions.
*   **Image Compression:** Reducing the amount of data required to represent an image while minimizing loss of information.
*   **Morphological Processing:** Analyzing and manipulating the shape and structure of objects in an image.
*   **Image Segmentation:** Partitioning an image into its constituent regions or objects.
*   **Representation and Description:** Representing an image in a form suitable for further processing, and describing its features (e.g., shape, texture).
*   **Object Recognition:** Identifying and classifying objects in an image.

**Textbook Reference:**
*   Gonzalez & Woods, Chapter 1: "Introduction"

---

## 3. What is a Digital Image?

**Definition:** A digital image is a two-dimensional (2D) function, $f(x, y)$, where $x$ and $y$ are spatial coordinates, and the value of $f$ at any point $(x, y)$ is called the intensity or gray-level of the image at that point.

**Key Concepts:**

*   **Spatial Coordinates ($x, y$):** These represent the horizontal and vertical positions within the image.
*   **Intensity/Gray-level:** The value of the function at a particular point, representing the brightness or color information.

**Example:**
Imagine a grayscale image. At each pixel location $(x, y)$, the value $f(x, y)$ could be an integer representing a shade of gray, typically ranging from 0 (black) to 255 (white) for an 8-bit image.

**Textbook Reference:**
*   Gonzalez & Woods, Chapter 2: "Digital Image Fundamentals" (Section: "What is a Digital Image?")
*   Jayaraman et al., Chapter 2: "Digital Image Fundamentals" (Section: "Digital Image")

---

## 4. Elements of Digital Image Representation

Digital images are fundamentally represented as **arrays of pixels**.

**Key Concepts:**

*   **Pixel (Picture Element):** The smallest controllable element of a picture represented on the screen. In a digital image, it's a point at a specific spatial location $(x, y)$ with a corresponding intensity value.
*   **Image Resolution:** The number of pixels in an image. It's typically specified as width $\times$ height (e.g., 1920 $\times$ 1080 pixels).
*   **Spatial Resolution:** The degree of detail that can be distinguished in an image. It relates to the physical size of the image and the number of pixels it contains.
*   **Intensity Resolution:** The number of distinct gray levels or color values an image can represent. For an 8-bit grayscale image, the intensity resolution is 256 levels.

**Textbook Reference:**
*   Gonzalez & Woods, Chapter 2: "Digital Image Fundamentals"
*   Jayaraman et al., Chapter 2: "Digital Image Fundamentals"

---

## 5. Image Sampling and Quantization

To convert a continuous image into a digital image, two fundamental processes are involved:

### 5.1. Image Sampling

**Definition:** The process of converting a continuous spatial domain into a discrete set of points. This is done by taking samples of the image at discrete coordinates.

**Process:** Imagine overlaying a grid onto the continuous image. Each cell in the grid corresponds to a pixel in the digital image. The value assigned to a pixel is typically determined by the intensity of the continuous image within that cell.

**Parameters:**
*   **Sampling Rate:** The number of samples taken per unit length.
*   **Sampling Period:** The distance between adjacent samples.

**Effect:**
*   **Higher sampling rate:** More pixels, finer detail, larger file size.
*   **Lower sampling rate:** Fewer pixels, less detail, potential for aliasing artifacts if sampling is too coarse.

**Example:** If we sample an image at a rate of 2 samples per millimeter horizontally and vertically, the resulting digital image will have a resolution of 2 $\times$ 2 pixels per square millimeter.

### 5.2. Image Quantization

**Definition:** The process of converting the continuous range of intensity values into a finite set of discrete levels.

**Process:** Each sampled pixel's intensity value is mapped to one of the predefined discrete levels.

**Parameters:**
*   **Number of Gray Levels:** The total number of discrete intensity values.
*   **Quantization Levels:** The specific discrete values.

**Effect:**
*   **Higher intensity resolution (more levels):** Smoother transitions, more realistic representation, larger file size.
*   **Lower intensity resolution (fewer levels):** Coarser representation, potential for contouring or banding artifacts.

**Example:** For an 8-bit grayscale image, the intensity values are quantized into 256 levels, typically from 0 to 255.

**Relationship to Image Quality:**
*   **Spatial resolution** determines the level of geometric detail.
*   **Intensity resolution** determines the level of photometric detail.

**Textbook Reference:**
*   Gonzalez & Woods, Chapter 2: "Digital Image Fundamentals" (Section: "Sampling and Quantization")
*   Jayaraman et al., Chapter 2: "Digital Image Fundamentals" (Section: "Sampling and Quantization")
*   Jain, Chapter 2: "Image Representation" (Sections on sampling and quantization)

---

## 6. Digital Image Representation (Types of Digital Images)

Digital images can be represented in various ways based on their content and purpose.

### 6.1. Grayscale Images

**Definition:** Images where the intensity of each pixel is a single value, representing a shade of gray.

**Representation:** A 2D array of intensity values.

**Example:** Black and white photographs, medical scans (X-rays).

**Intensity Range:** Typically 0 (black) to 255 (white) for 8-bit images.

### 6.2. Binary Images

**Definition:** Images where each pixel can only have one of two values, typically representing black or white.

**Representation:** A 2D array of 0s and 1s.

**Example:** Scanned documents, simple line drawings, masks.

**Use:** Often used in morphological operations and feature extraction.

### 6.3. Color Images

**Definition:** Images where each pixel has a color represented by multiple intensity values.

**Representation:** Typically represented as three 2D arrays, one for each color channel.

**Common Color Models (CO1 Alignment):**

*   **RGB (Red, Green, Blue):**
    *   **Description:** The additive color model where colors are created by combining different intensities of red, green, and blue light. Each pixel is represented by a triplet $(R, G, B)$, where each component is an intensity value.
    *   **Example:** Most computer displays, digital cameras.
    *   **Storage:** Often requires 24 bits per pixel (8 bits for each channel).
*   **CMY(K) (Cyan, Magenta, Yellow, Key/Black):**
    *   **Description:** The subtractive color model used in printing. Colors are created by absorbing certain wavelengths of light. CMY are the primary colors, and K (black) is often added for better contrast and deeper blacks.
    *   **Example:** Printers.
    *   **Relationship to RGB:** $C = 1 - R$, $M = 1 - G$, $Y = 1 - B$ (assuming normalized intensity values from 0 to 1).
*   **HSV/HSB (Hue, Saturation, Value/Brightness):**
    *   **Description:** A color model that separates color information into intuitive components:
        *   **Hue (H):** The dominant wavelength of light (e.g., red, green, blue).
        *   **Saturation (S):** The purity or intensity of the color (e.g., vivid vs. washed out).
        *   **Value/Brightness (V/B):** The overall lightness or darkness of the color.
    *   **Example:** Image editing software, color manipulation.
    *   **Advantage:** Easier for humans to understand and manipulate color.
*   **YIQ:**
    *   **Description:** Used in analog television broadcasting (NTSC). It separates luminance (Y) from chrominance (IQ).
        *   **Y:** Luminance (brightness).
        *   **I, Q:** Chrominance (color information).
    *   **Advantage:** Allows for transmission of color information with minimal bandwidth while maintaining compatibility with black and white displays (which only use the Y component).

**Textbook Reference:**
*   Gonzalez & Woods, Chapter 2: "Digital Image Fundamentals" (Section: "Color Models")
*   Jayaraman et al., Chapter 2: "Digital Image Fundamentals" (Section: "Colour Images")
*   Castleman, Chapter 3: "Color Images"

---

## 7. Image Acquisition

**Definition:** The process of capturing a digital image from the real world.

**Components:**
*   **Sensor:** A device that captures light and converts it into an electrical signal (e.g., CCD, CMOS sensors in cameras).
*   **Digitizer:** Converts the analog electrical signal from the sensor into a digital format. This involves sampling and quantization.

**Types of Imaging Sensors:**
*   **Single Sensor:** Acquires one color at a time, requiring motion or filters to capture a full-color image (e.g., older scanners).
*   **Strip Sensors:** Acquire a line of data at a time, requiring motion perpendicular to the strip (e.g., scanners, some satellite imaging).
*   **Array Sensors:** Acquire a full image at once (e.g., digital cameras).

**Lighting:** The quality and type of lighting significantly impact image acquisition.

**Textbook Reference:**
*   Gonzalez & Woods, Chapter 2: "Digital Image Fundamentals" (Section: "A Simple Image Formation Model")
*   Jayaraman et al., Chapter 2: "Digital Image Fundamentals" (Section: "Image Acquisition")

---

## 8. Pixel Relationships

Understanding pixel relationships is crucial for image processing operations.

**Neighborhoods:**
*   **4-neighbors:** Pixels directly adjacent horizontally or vertically to a given pixel $(x, y)$, i.e., $(x+1, y), (x-1, y), (x, y+1), (x, y-1)$.
*   **Diagonal neighbors:** Pixels adjacent diagonally to $(x, y)$, i.e., $(x+1, y+1), (x+1, y-1), (x-1, y+1), (x-1, y-1)$.
*   **8-neighbors:** The 4-neighbors plus the diagonal neighbors.

**Connectivity:**
*   **4-connectivity:** Two pixels are connected if they are 4-neighbors and have the same property (e.g., same intensity value).
*   **8-connectivity:** Two pixels are connected if they are 8-neighbors and have the same property.
*   **m-connectivity:** Combines 4- and diagonal connectivity. Two pixels are connected if they are 4-neighbors or if they are diagonal neighbors *and* their shared neighbors have the same property.

**Adjacency, Connectivity, and Region:**
*   **Adjacency:** Refers to the spatial proximity of pixels.
*   **Connectivity:** A property that defines how pixels can be grouped together.
*   **Region:** A set of connected pixels that share a common property (e.g., intensity, color).

**Distance Measures:**
*   **Euclidean Distance ($D_e$):** The standard straight-line distance between two points $(x_1, y_1)$ and $(x_2, y_2)$.
    $D_e = \sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2}$
*   **City-block Distance ($D_4$):** The distance between two points measured along paths parallel to the coordinate axes.
    $D_4 = |x_1 - x_2| + |y_1 - y_2|$
*   **Chessboard Distance ($D_8$):** The distance between two points measured by the minimum number of diagonal moves.
    $D_8 = \max(|x_1 - x_2|, |y_1 - y_2|)$

**Textbook Reference:**
*   Gonzalez & Woods, Chapter 2: "Digital Image Fundamentals" (Section: "Pixel Relationships")
*   Jayaraman et al., Chapter 2: "Digital Image Fundamentals" (Section: "Pixel Relationship")

---

## 9. Image Representation and Display

**Storage:** Images are stored as arrays of pixel values. The size of the array and the number of bits per pixel determine the storage requirement.

*   **Grayscale Image:** Width $\times$ Height $\times$ bits\_per\_pixel (e.g., 512 $\times$ 512 $\times$ 8 bits)
*   **Color Image (RGB):** Width $\times$ Height $\times$ 3 channels $\times$ bits\_per\_channel (e.g., 512 $\times$ 512 $\times$ 3 $\times$ 8 bits)

**Display:**
*   Digital images are displayed on screens by illuminating individual pixels with appropriate intensity and color values.
*   The display resolution and color depth influence how the image is perceived.

**Important Note:** The way an image is *represented* in memory or storage is distinct from how it is *displayed* on a screen.

**Textbook Reference:**
*   Gonzalez & Woods, Chapter 2: "Digital Image Fundamentals"

---

## Summary of Key Concepts and Learning Outcomes Addressed

**Learning Outcome 1: Compare different colour model representations of image processing system (Knowledge Level: K4)**
*   Covered in Section 6.3 (Color Images), detailing RGB, CMY(K), HSV, and YIQ models, their descriptions, applications, and advantages. This requires analytical comparison (K4).

**Learning Outcome 2: Analyse the various concepts and mathematical transforms and compression schemes necessary for image processing (Knowledge Level: K4)**
*   **Concepts:** Image definition, pixel relationships, sampling, quantization, resolution are covered as fundamental concepts.
*   **Mathematical Transforms:** While not explicitly detailed in this module's topic, this learning outcome anticipates future modules. However, the foundation for them (sampling, quantization) is laid here.
*   **Compression Schemes:** Not covered in this specific topic but a core concept in DIP. This module provides the foundational understanding of image data representation that is essential for compression.

**Learning Outcome 3: Illustrate the various schemes of image filtering (Knowledge Level: K5)**
*   This learning outcome is typically addressed in later modules focusing on image enhancement and restoration. This module provides the fundamental image representation (pixel values, neighborhoods) upon which filtering operations (like convolution) are applied.

**Learning Outcome 4: Determine the techniques for restoration of images (Knowledge Level: K5)**
*   Similar to filtering, image restoration techniques rely on the underlying digital representation of images. This module establishes the core understanding of how images are digitized and represented, which is a prerequisite for developing and understanding restoration algorithms.

---

## Practice Questions and Answers

**Question 1:** What are the two fundamental processes involved in converting a continuous image into a digital image?
**Answer:** Image sampling and image quantization.

**Question 2:** Explain the difference between 4-neighbors and 8-neighbors of a pixel $(x, y)$.
**Answer:**
*   **4-neighbors:** Pixels at $(x+1, y), (x-1, y), (x, y+1), (x, y-1)$. These are pixels directly adjacent horizontally or vertically.
*   **8-neighbors:** Includes the 4-neighbors plus the diagonal neighbors: $(x+1, y+1), (x+1, y-1), (x-1, y+1), (x-1, y-1)$.

**Question 3:** If an image has a resolution of 640x480 pixels and each pixel stores 24 bits of color information (8 bits for R, G, B), how much storage space would this image require in bytes?
**Answer:**
Total bits = 640 $\times$ 480 $\times$ 24 bits
Total bytes = (640 $\times$ 480 $\times$ 24) / 8 bytes
Total bytes = 640 $\times$ 480 $\times$ 3 bytes
Total bytes = 921,600 bytes $\approx$ 0.92 MB

**Question 4:** Briefly describe the purpose of the Hue, Saturation, and Value (HSV) color model.
**Answer:** The HSV color model separates color information into intuitive components: Hue (the pure color), Saturation (the intensity or purity of the color), and Value/Brightness (the overall lightness or darkness). This model is often preferred for color manipulation and human interaction because it is more perceptually uniform than RGB.

**Question 5:** Define image resolution and intensity resolution.
**Answer:**
*   **Image Resolution:** The total number of pixels in an image, typically expressed as width $\times$ height. It dictates the level of spatial detail.
*   **Intensity Resolution:** The number of distinct gray levels or color values that a pixel can represent. It dictates the level of photometric detail.

---

## Important Points to Remember

*   A digital image is a discrete representation of a continuous scene.
*   Sampling controls the spatial resolution, while quantization controls the intensity resolution.
*   Aliasing can occur if sampling is too coarse.
*   Contering/banding can occur if intensity resolution is too low.
*   Color images can be represented using various color models like RGB, CMY(K), and HSV, each with specific advantages for different applications.
*   Understanding pixel relationships (neighbors, connectivity, distance) is fundamental for many image processing operations.
*   The storage size of an image depends on its dimensions and the number of bits used per pixel.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
