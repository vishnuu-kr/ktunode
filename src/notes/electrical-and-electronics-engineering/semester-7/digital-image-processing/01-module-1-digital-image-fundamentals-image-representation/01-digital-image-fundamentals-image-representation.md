---
title: "Digital Image Fundamentals: Image representation"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 1: Digital Image Fundamentals: Image representation"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f3690c"
status: "completed"
scrapedAt: "2026-05-23T16:34:42.557Z"
---
# Digital Image Processing: Module 1 - Digital Image Fundamentals: Image Representation

## Introduction to Digital Image Processing (DIP)

**Course Outcomes (CO) addressed in this module:**
*   **CO1:** Understand different components of an image processing system. (Knowledge Level: K2)

### What is Digital Image Processing?

Digital Image Processing (DIP) is a technique to process digital images by means of algorithms, especially computer algorithms, to do image processing on the computer. It is a subset of digital signal processing. In DIP, a digital image is considered as a two-dimensional signal.

**Key Concepts:**
*   **Digital Image:** An image represented as a discrete grid of picture elements (pixels).
*   **Image Processing:** Manipulation of a digital image using computer algorithms to enhance its quality, extract useful information, or prepare it for other applications.

### Components of an Image Processing System

An image processing system typically comprises the following key components:

*   **Image Acquisition:** Capturing an image using a sensor (e.g., camera, scanner). This involves converting analog image data into digital form.
    *   **Considerations:** Illumination, sensor type, spatial resolution.
    *   *(Gonzalez & Woods, 4th ed., Chapter 1)*
*   **Image Preprocessing:** Applying basic operations to clean up the image and prepare it for further processing. This can include noise reduction, contrast enhancement, etc.
    *   **Purpose:** To improve image quality, remove unwanted distortions, and make the image more suitable for subsequent analysis.
    *   *(Gonzalez & Woods, 4th ed., Chapter 3)*
*   **Segmentation:** Dividing an image into meaningful regions or objects. This is a crucial step for feature extraction and object recognition.
    *   **Examples:** Separating foreground from background, identifying different objects.
    *   *(Gonzalez & Woods, 4th ed., Chapter 7)*
*   **Feature Extraction:** Extracting relevant features from the segmented regions to describe them. These features can be used for recognition or classification.
    *   **Examples:** Texture, shape, color, edges.
    *   *(Gonzalez & Woods, 4th ed., Chapter 8)*
*   **Object Recognition/Classification:** Identifying and labeling objects in an image based on their extracted features.
    *   **Examples:** Facial recognition, medical image diagnosis.
    *   *(Gonzalez & Woods, 4th ed., Chapter 9)*
*   **Postprocessing:** Applying operations to the processed image to improve its visual appearance or to prepare it for transmission or storage.
    *   **Examples:** Smoothing, sharpening, color adjustments.
    *   *(Gonzalez & Woods, 4th ed., Chapter 3)*
*   **Display:** Presenting the processed image to a user or for further analysis.

**Important Note for CO1:** Understanding these components helps in comprehending how an image is handled from its raw form to a meaningful output.

## Digital Image Representation

**Course Outcomes (CO) addressed in this module:**
*   **CO2:** Analyze the various concepts and mathematical transforms necessary for image processing. (Knowledge Level: K3)

### What is a Digital Image?

A digital image is a representation of a two-dimensional (2D) physical reality. It is essentially a grid of cells, called **picture elements** or **pixels**. Each pixel has a specific location and a specific intensity value.

**Key Concepts:**
*   **Pixel (Picture Element):** The smallest controllable element of a picture, represented by a single point in a grid.
*   **Spatial Coordinates:** Each pixel is identified by its horizontal ($x$) and vertical ($y$) coordinates within the image grid. The origin (0,0) is typically at the top-left corner.
*   **Intensity Value:** The numerical value assigned to a pixel, representing its brightness or color.

### Types of Digital Images

The way an image is represented digitally depends on the type of information it conveys.

#### 1. Continuous vs. Digital Image

*   **Continuous Image:** An image that has continuous values for spatial coordinates and intensity. In theory, it can have infinite resolution.
    *   *(Gonzalez & Woods, 4th ed., Chapter 2)*
*   **Digital Image:** A sampled version of a continuous image. Both spatial coordinates and intensity values are discrete.
    *   **Sampling:** The process of converting continuous spatial coordinates into discrete values. This determines the spatial resolution.
    *   **Quantization:** The process of converting continuous intensity values into discrete levels. This determines the radiometric resolution or number of gray levels.

#### 2. Image Sampling and Quantization

*   **Sampling:** The image is divided into a grid of pixels. If the image is represented by $M$ rows and $N$ columns, it is said to have a spatial resolution of $M \times N$.
    *   **Example:** A $256 \times 256$ image has 256 pixels in the horizontal direction and 256 pixels in the vertical direction.
*   **Quantization:** Each pixel's intensity is assigned a discrete numerical value from a predefined range. For grayscale images, this is typically represented by gray levels.
    *   **Number of Gray Levels:** Commonly expressed as $2^k$, where $k$ is the number of bits used to represent each pixel's intensity.
        *   **8-bit grayscale image:** $2^8 = 256$ gray levels, ranging from 0 (black) to 255 (white).
        *   **1-bit image (binary):** 2 levels (0 and 1, typically black and white).
    *   *(Gonzalez & Woods, 4th ed., Chapter 2)*
    *   *(Jayaraman, Esakkirajan, & Veerakumar, 1st ed., Chapter 2)*

#### 3. Representation of Digital Images

Digital images can be represented mathematically as a 2D array (or matrix) of pixel values.

*   **Grayscale Image:** A 2D array $f(x, y)$, where $x$ and $y$ are the spatial coordinates and $f(x, y)$ is the intensity at that coordinate.
    *   **Example:**
        ```
        f(x, y) = [ [ 100, 120, 150 ],
                    [ 110, 130, 160 ],
                    [ 120, 140, 170 ] ]
        ```
        This represents a small $3 \times 3$ grayscale image.

*   **Color Image:** A color image is typically represented as a stack of multiple 2D arrays, each representing a different color channel.
    *   **Common Color Models:**
        *   **RGB (Red, Green, Blue):** The most common model for display devices. A color image is represented by three matrices: $R(x, y)$, $G(x, y)$, and $B(x, y)$.
            *   *(Gonzalez & Woods, 4th ed., Chapter 6)*
            *   **Example:** A pixel with (R=255, G=0, B=0) would be pure red.
        *   **CMYK (Cyan, Magenta, Yellow, Key/Black):** Used in printing.
        *   **HSV (Hue, Saturation, Value) / HSL (Hue, Saturation, Lightness):** More intuitive for human perception of color.
    *   **Representation:** A color image can be thought of as a 3D array, $f(x, y, c)$, where $c$ indicates the color channel.

*   **Binary Image:** A special case of a grayscale image where each pixel has only two possible intensity values (typically 0 for black and 1 for white). Represented by a 2D array of 0s and 1s.
    *   **Applications:** Image segmentation, pattern recognition.
    *   *(Gonzalez & Woods, 4th ed., Chapter 7)*

*   **Color Depth:** The number of bits used to represent the color of a single pixel.
    *   **Truecolor:** 24 bits per pixel (8 bits for R, 8 for G, 8 for B), allowing for 16.7 million colors.

#### 4. Relationship between Image Properties and Representation

*   **Spatial Resolution:** Number of pixels in each dimension ($M \times N$). Higher resolution means more detail.
*   **Radiometric Resolution:** Number of gray levels or intensity levels. Higher resolution means finer intensity discrimination.
*   **Bit Depth:** Total number of bits used to store the image. For an $M \times N$ grayscale image with $L$ gray levels, the storage required is $M \times N \times \log_2(L)$ bits. For an RGB image, it's $M \times N \times \text{bits per pixel}$.

#### 5. Image File Formats

Digital images are stored in various file formats, each with its own characteristics for compression, color depth, and metadata. Common examples include:
*   **BMP (Bitmap):** Uncompressed, simple format.
*   **JPEG (Joint Photographic Experts Group):** Lossy compression, widely used for photographs.
*   **PNG (Portable Network Graphics):** Lossless compression, good for graphics and images with sharp lines.
*   **TIFF (Tagged Image File Format):** Versatile, supports lossless and lossy compression, often used in professional photography and printing.
*   **GIF (Graphics Interchange Format):** Supports animation and transparency, uses lossless compression, limited to 256 colors.

*(Gonzalez & Woods, 4th ed., Chapter 6 discusses image file formats in the context of color models.)*

### Practice Questions

1.  **What is the fundamental difference between a continuous image and a digital image?**
    *   **Answer:** A continuous image has continuous spatial coordinates and intensity values, while a digital image has discrete spatial coordinates (pixels) and discrete intensity values (quantized levels).

2.  **If an image has a spatial resolution of $1024 \times 768$ pixels and uses 256 gray levels, how many bits are required to store this image?**
    *   **Answer:**
        *   Number of pixels = $1024 \times 768 = 786,432$ pixels.
        *   Number of gray levels = 256.
        *   Bits per pixel = $\log_2(256) = 8$ bits.
        *   Total bits = $786,432 \text{ pixels} \times 8 \text{ bits/pixel} = 6,291,456$ bits.

3.  **Explain the role of sampling and quantization in creating a digital image.**
    *   **Answer:** Sampling discretizes the spatial coordinates of a continuous image, dividing it into a grid of pixels. Quantization discretizes the intensity values of each pixel into a finite set of levels. Together, these processes convert a continuous image into a digital representation.

4.  **Describe how a color image is typically represented in a digital image processing system.**
    *   **Answer:** A color image is usually represented by multiple 2D arrays, one for each color channel. The most common model is RGB, where three matrices represent the Red, Green, and Blue components of each pixel.

5.  **What are the advantages of using lossless compression (like PNG) over lossy compression (like JPEG) for certain types of images?**
    *   **Answer:** Lossless compression preserves all the original image data, ensuring no degradation in quality. This is crucial for images where fine details or exact pixel values are important, such as medical images, line drawings, or graphics with sharp edges. Lossy compression discards some information to achieve higher compression ratios, which can lead to visible artifacts in such images.

### Important Points to Remember

*   A digital image is a grid of pixels, each with a spatial location and an intensity value.
*   **Sampling** determines the spatial resolution ($M \times N$).
*   **Quantization** determines the number of intensity levels (bit depth).
*   Grayscale images are represented by 2D matrices.
*   Color images are typically represented by multiple matrices (e.g., R, G, B channels).
*   Understanding the representation is fundamental to all subsequent image processing operations.

---

This module introduces the foundational concepts of how images are represented digitally. This understanding is critical for all further topics in digital image processing, as all operations are performed on these digital representations.

**References used:**
*   Gonzalez, R. C., & Woods, R. E. (2018). *Digital Image Processing* (4th ed.). Pearson. (Primarily Chapters 1 and 2)
*   Jayaraman, S., Esakkirajan, S., & Veerakumar, T. (2011). *Digital Image Processing* (1st ed.). McGraw Hill. (Chapter 2 for basics)

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
