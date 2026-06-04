---
title: "Image digitization"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 1: The image, its representation and properties "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bc21"
status: "completed"
scrapedAt: "2026-05-20T16:52:35.337Z"
---
## DIGITAL IMAGE PROCESSING - Module 1: The image, its representation and properties - Image Digitization

**Introduction:**

This module introduces the fundamental concepts of digital image processing, focusing on how images are represented and their inherent properties. This topic, "Image Digitization," explains the process by which a continuous analog image is converted into a discrete digital representation suitable for computer processing.

**Learning Outcomes:**

Upon completion of this topic, you should be able to:

1.  Understand the concepts of sampling and quantization in image digitization.
2.  Explain the impact of sampling rate and quantization levels on image quality.
3.  Distinguish between spatial resolution and intensity resolution.
4.  Describe different sampling and quantization methods.
5.  Perform basic calculations related to image storage and compression.
6.  Understand the trade-offs involved in selecting appropriate sampling and quantization parameters.

**1. Key Concepts and Definitions:**

*   **Analog Image:** A continuous image, represented by continuous functions of spatial coordinates and intensity values. Examples include photographs, paintings, and the real world scene viewed by our eyes.

*   **Digital Image:** A discrete representation of an analog image, consisting of a finite number of pixels, each with a specific intensity value. Digital images are stored and processed using computers.

*   **Image Digitization:** The process of converting an analog image into a digital image. It involves two primary steps: **Sampling** and **Quantization**.

    *   **Sampling:** Discretizing the spatial coordinates of the image.  It involves dividing the image into a grid and taking intensity measurements at each grid point (pixel). The density of the grid determines the *spatial resolution*.
    *   **Quantization:** Discretizing the intensity (amplitude) values of the image. It involves representing the continuous intensity values at each sampled point with a finite number of discrete levels. The number of intensity levels determines the *intensity resolution*.

*   **Pixel:** The smallest addressable element in a digital image.  It represents a single sampled point and its quantized intensity value.

*   **Spatial Resolution:** The number of pixels used to represent an image. Higher spatial resolution means more pixels, which translates to finer detail and sharper images. It's often expressed in terms of pixels per inch (PPI) or dots per inch (DPI).

*   **Intensity Resolution:** The number of distinct intensity levels available for each pixel. Higher intensity resolution means more levels, which allows for smoother gradations and less visible contouring.  It's typically measured in bits per pixel (bpp). For example:
    *   1 bpp = 2<sup>1</sup> = 2 levels (black and white)
    *   8 bpp = 2<sup>8</sup> = 256 levels (grayscale)
    *   24 bpp = 2<sup>24</sup> = 16,777,216 levels (True color, RGB)

*   **Dynamic Range:** The ratio of the maximum measurable intensity to the minimum detectable intensity level in an image. A higher dynamic range allows for capturing a wider range of tones, from very bright to very dark.

*   **Gray Levels:** The discrete intensity values assigned to pixels in a grayscale image.

**2. Sampling Process:**

*   **Sampling Rate:** The number of samples taken per unit distance or area. A higher sampling rate leads to higher spatial resolution.

*   **Nyquist-Shannon Sampling Theorem:**  States that in order to accurately reconstruct an analog signal (or image) from its samples, the sampling rate must be at least twice the highest frequency component present in the signal/image.  Violating this theorem leads to *aliasing*.

*   **Aliasing:** An artifact that occurs when the sampling rate is too low, resulting in the misrepresentation of high-frequency components as lower frequencies.  This can manifest as jagged edges (staircasing) or moiré patterns in the digital image.

*   **Anti-Aliasing:** Techniques used to reduce the effects of aliasing, typically by blurring the image before sampling (using a low-pass filter) to remove high-frequency components that cannot be accurately represented at the chosen sampling rate.

**Example of Sampling:**

Imagine a continuous grayscale image of a sine wave. To digitize it, we sample its intensity values at regular intervals along the horizontal axis. If the sampling interval is too large (low sampling rate), we might miss the peaks and valleys of the sine wave, resulting in a distorted representation in the digital image. Increasing the sampling rate provides a more accurate digital representation.

**3. Quantization Process:**

*   **Quantization Levels:** The number of discrete intensity values used to represent the continuous intensity range of the image.

*   **Uniform Quantization:** Divides the intensity range into equal-sized intervals. Simple to implement but may not be optimal for all images.

*   **Non-Uniform Quantization:** Divides the intensity range into intervals of varying sizes, often based on the statistical distribution of intensity values in the image. This can improve image quality by allocating more levels to frequently occurring intensities.

*   **Quantization Error:** The difference between the original continuous intensity value and its quantized (discrete) value.

*   **Contouring/False Contouring:**  An artifact that occurs when the number of quantization levels is insufficient, resulting in abrupt changes in intensity between adjacent pixels, creating visible "steps" or contours in areas where the intensity should change smoothly.  Reducing the quantization interval (using more bits per pixel) will lessen contouring.

**Example of Quantization:**

Consider a continuous grayscale image where intensity values range from 0 to 255.

*   If we use only 2 quantization levels (1 bit per pixel), the digital image will have only two tones: black (0) and white (255). This will result in a heavily quantized image with significant loss of detail.
*   If we use 256 quantization levels (8 bits per pixel), the digital image will have a smoother appearance and a wider range of tones.

**4. Impact of Sampling and Quantization on Image Quality:**

*   **Spatial Resolution and Image Quality:** Higher spatial resolution (more pixels) generally leads to higher image quality, finer detail, and sharper edges. However, it also increases the amount of data that needs to be stored and processed.
*   **Intensity Resolution and Image Quality:** Higher intensity resolution (more quantization levels) generally leads to smoother gradations, reduced contouring, and more accurate representation of subtle intensity variations.  Like spatial resolution, it increases data storage.
*   **Trade-offs:**  There's a trade-off between image quality, storage requirements, and processing time. Increasing either spatial or intensity resolution increases storage requirements and processing time.

**5. Image Storage and Compression Considerations:**

*   **Image Size (in bits):** The total number of bits required to store a digital image is determined by:

    *   Number of pixels (width x height)
    *   Number of bits per pixel (bpp)

    *Image Size = width x height x bpp*

*   **Example:** An image with a resolution of 640 x 480 pixels and an intensity resolution of 8 bpp requires: 640 x 480 x 8 = 2,457,600 bits = 307,200 bytes = 300 KB (kilobytes).

*   **Compression:** Techniques used to reduce the size of digital images, making them easier to store and transmit.

    *   **Lossless Compression:** Reduces file size without losing any information (e.g., PNG, GIF). Suitable for images where detail preservation is critical.
    *   **Lossy Compression:** Reduces file size by discarding some information that is deemed less important (e.g., JPEG). Suitable for images where some quality degradation is acceptable in exchange for significant size reduction.

**6. Important Points to Remember:**

*   Image digitization is a fundamental process in digital image processing.
*   Sampling and quantization are the two key steps involved.
*   The Nyquist-Shannon sampling theorem provides a guideline for selecting an appropriate sampling rate.
*   Spatial and intensity resolution directly impact image quality and storage requirements.
*   Compression techniques are essential for managing the size of digital images.
*   Choosing appropriate sampling and quantization parameters involves balancing image quality, storage requirements, and processing time.

**7. Practice Questions/Exercises:**

1.  **What are the two main steps involved in image digitization?**
    *   **Answer:** Sampling and Quantization.

2.  **Explain the difference between spatial resolution and intensity resolution.**
    *   **Answer:** Spatial resolution refers to the number of pixels used to represent the image (detail), while intensity resolution refers to the number of distinct intensity levels available for each pixel (smoothness of tones).

3.  **What is aliasing, and how can it be minimized?**
    *   **Answer:** Aliasing is the misrepresentation of high-frequency components as lower frequencies due to insufficient sampling. It can be minimized using anti-aliasing techniques, such as blurring the image before sampling.

4.  **An image has a resolution of 512 x 512 pixels and is stored with 256 gray levels. How many bytes are required to store this image?**
    *   **Answer:** 512 x 512 x 8 bits = 2,097,152 bits = 262,144 bytes = 256 KB.

5.  **Describe the difference between lossless and lossy image compression.**
    *   **Answer:** Lossless compression reduces file size without losing any information, while lossy compression reduces file size by discarding some information.

6.  **Why is the Nyquist-Shannon sampling theorem important in image digitization?**
    *   **Answer:** It provides the minimum sampling rate required to accurately reconstruct an analog signal/image from its samples, preventing aliasing.

7.  **What visual artifact is often associated with low intensity resolution?**
    *   **Answer:** False contouring or "banding".

8.  **A digital image has dimensions of 1000x1000 pixels and uses 16 bits per pixel. How large is the image in megabytes (MB)? (Remember 1 MB = 1024 KB and 1 KB = 1024 bytes)**

    * **Answer:**
        * Total bits: 1000 x 1000 x 16 = 16,000,000 bits
        * Total bytes: 16,000,000 bits / 8 bits/byte = 2,000,000 bytes
        * Total KB: 2,000,000 bytes / 1024 bytes/KB = 1953.125 KB
        * Total MB: 1953.125 KB / 1024 KB/MB =  Approximately 1.91 MB
