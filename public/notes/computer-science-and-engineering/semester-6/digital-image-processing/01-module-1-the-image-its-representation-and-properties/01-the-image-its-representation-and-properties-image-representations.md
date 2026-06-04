---
title: "The image, its representation and properties - Image representations"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 1: The image, its representation and properties "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bc20"
status: "completed"
scrapedAt: "2026-05-20T16:52:34.631Z"
---
## DIGITAL IMAGE PROCESSING - Module 1: Image Representation

**Learning Outcomes:**

*   Understand different digital image representations.
*   Describe the properties of different image representations.
*   Convert between different image representations.
*   Identify appropriate image representations for specific applications.

**1. Introduction to Image Representation**

*   **Definition:** Image representation refers to how an image is digitally stored and interpreted by a computer.  It's the underlying structure that determines how we can process and manipulate the image.
*   **Why it Matters:**  The choice of representation heavily influences storage requirements, computational efficiency, and the types of processing operations that can be easily performed.

**2. Image Representation Types**

Here are the primary image representation methods:

*   **2.1 Binary Images:**

    *   **Description:** The simplest representation. Each pixel is represented by a single bit: 0 (typically black) or 1 (typically white).
    *   **Applications:** Document scanning, optical character recognition (OCR), thresholding operations, and simple shape analysis.
    *   **Properties:**
        *   **Storage:** Very efficient (1 bit per pixel).
        *   **Color Information:** Limited to black and white.
        *   **Mathematical Operations:** Limited to binary logic operations (AND, OR, XOR, NOT).
    *   **Example:** A scanned document represented as black text on a white background.
    *   **Formula:** Pixel value ∈ {0, 1}

*   **2.2 Grayscale Images:**

    *   **Description:** Each pixel represents the intensity of light at that point, typically ranging from 0 (black) to 255 (white) for an 8-bit grayscale image.  Other bit depths are possible (e.g., 10-bit, 12-bit, 16-bit), allowing for more subtle gradations.
    *   **Applications:** Medical imaging (X-rays, CT scans), photography, and any application where color is not essential but intensity variations are important.
    *   **Properties:**
        *   **Storage:** Usually 8 bits per pixel (1 byte), but can be more.
        *   **Color Information:** Represents intensity levels.
        *   **Mathematical Operations:** Supports a wider range of operations like addition, subtraction, multiplication, division, filtering, and edge detection.
    *   **Example:** A black and white photograph.
    *   **Formula:** Pixel value ∈ [0, 255] (for 8-bit)

*   **2.3 Color Images (RGB):**

    *   **Description:** Represents each pixel as a combination of red, green, and blue light intensities.  Each color component is typically represented by 8 bits (0-255), resulting in 24 bits per pixel (True Color).  Other color spaces exist (e.g., CMYK, HSV).
    *   **Applications:** Most general-purpose image applications, including digital photography, video, web design, and computer graphics.
    *   **Properties:**
        *   **Storage:** Usually 24 bits per pixel (3 bytes). Can be higher with alpha channels (RGBA - for transparency).
        *   **Color Information:** Full color information.
        *   **Mathematical Operations:** Allows for color manipulation, color balancing, and color-based segmentation.
    *   **Example:** A photograph taken with a digital camera.
    *   **Formula:**  Pixel value = (R, G, B), where R, G, B ∈ [0, 255] (for 8-bit per channel)

*   **2.4 Indexed Images:**

    *   **Description:** Uses a colormap (also called a lookup table or palette) to store a limited number of colors.  Each pixel value is an *index* into the colormap, which then specifies the RGB color for that pixel.
    *   **Applications:** Situations where a limited number of colors are sufficient, such as older computer graphics systems, GIF images, and scientific visualization.
    *   **Properties:**
        *   **Storage:** Can be very efficient, especially if the number of colors is small.  Requires storage for both the indices and the colormap.
        *   **Color Information:** Limited to the colors in the colormap.
        *   **Mathematical Operations:** Operations can be performed on the indices or on the colormap itself.
    *   **Example:** A GIF image with 256 colors.
    *   **Formula:** Pixel value = Index to Colormap. Colormap[Index] = (R, G, B)

*   **2.5 Multispectral Images:**

    *   **Description:** Capture information from multiple bands of the electromagnetic spectrum, beyond the visible range (e.g., infrared, ultraviolet). Each pixel has a value for *each* band.
    *   **Applications:** Remote sensing (satellite imagery), agriculture, environmental monitoring, and medical imaging.
    *   **Properties:**
        *   **Storage:** Can be very large, as each pixel has multiple values.
        *   **Color Information:** Extends beyond visible colors, providing information about material properties and other characteristics.
        *   **Mathematical Operations:** Requires specialized techniques for analyzing multi-dimensional data.
    *   **Example:** Satellite images used to monitor deforestation or crop health.
    *   **Formula:** Pixel value = (Band1, Band2, ..., BandN), where N is the number of spectral bands.

**3. Converting Between Image Representations**

*   **Grayscale to Binary:**  Thresholding.  Pixels above a certain threshold become 1 (white), and those below become 0 (black).
    *   **Example:** If you have a grayscale image and a threshold of 128, any pixel with a value greater than 128 becomes white in the binary image.
*   **RGB to Grayscale:** Averaging the RGB components or using a weighted sum.  A common formula is:  `Gray = 0.299 * R + 0.587 * G + 0.114 * B`
*   **Grayscale to RGB:**  Assign the same value to all three RGB components: R = G = B = Gray. This creates a grayscale image that can be displayed as a color image.
*   **RGB to Indexed:**  Color quantization.  Reduce the number of colors in the RGB image and create a corresponding colormap.

**4. Choosing the Right Image Representation**

*   **Application Requirements:** What type of information is needed? Color? Intensity? Specific spectral bands?
*   **Storage Constraints:** How much storage space is available?
*   **Computational Resources:** How much processing power is available?
*   **Desired Image Quality:** How much detail and color accuracy is required?

**5. Practice Questions and Exercises**

*   **Question 1:** What are the main differences between grayscale and RGB images in terms of storage and information content?
    *   **Answer:** Grayscale images use 1 byte (typically) per pixel to store intensity values, while RGB images use 3 bytes per pixel (one byte for each color channel: Red, Green, Blue). RGB images contain color information, while grayscale images represent only intensity.

*   **Question 2:** Describe a scenario where an indexed image representation would be more suitable than an RGB representation.
    *   **Answer:** Indexed images are suitable when the image contains a limited number of distinct colors.  This can significantly reduce storage space compared to RGB.  For example, a simple logo with only a few colors would be well-suited for indexed representation.

*   **Question 3:** Explain how a grayscale image can be converted into a binary image.
    *   **Answer:** A grayscale image is converted to a binary image using a process called thresholding. A threshold value is chosen, and pixels with intensity values above the threshold are set to 1 (white), while pixels with values below the threshold are set to 0 (black).

*   **Exercise 1:** Implement a function (in any programming language) to convert an RGB image to a grayscale image using the weighted averaging method (Gray = 0.299 * R + 0.587 * G + 0.114 * B).

```python
import numpy as np

def rgb_to_grayscale(rgb_image):
  """Converts an RGB image to grayscale using weighted averaging.

  Args:
    rgb_image: A NumPy array representing the RGB image (height x width x 3).

  Returns:
    A NumPy array representing the grayscale image (height x width).
  """
  r, g, b = rgb_image[:,:,0], rgb_image[:,:,1], rgb_image[:,:,2]
  gray = 0.299 * r + 0.587 * g + 0.114 * b
  return gray.astype(np.uint8)  # Ensure values are in 0-255 range

# Example usage (assuming you have an RGB image stored in a variable called 'image')
# gray_image = rgb_to_grayscale(image)
```

*   **Exercise 2:**  Consider an image of size 256x256. Calculate the storage space required for this image in the following formats:
    *   a) Binary image
    *   b) 8-bit Grayscale image
    *   c) 24-bit RGB image

    *   **Answer:**
        *   a) Binary: 256 x 256 pixels x 1 bit/pixel = 65536 bits = 8192 bytes = 8 KB
        *   b) Grayscale: 256 x 256 pixels x 8 bits/pixel = 524288 bits = 65536 bytes = 64 KB
        *   c) RGB: 256 x 256 pixels x 24 bits/pixel = 1572864 bits = 196608 bytes = 192 KB

**6. Important Points to Remember**

*   The choice of image representation significantly impacts storage, processing speed, and the types of analysis that can be performed.
*   Understanding the properties of each representation is crucial for selecting the most appropriate one for a given application.
*   Conversion between different image representations is a common task in image processing.
*   Pay attention to bit depth and the range of pixel values, as these affect image quality and the precision of calculations.
