---
title: "Colour image fundamentals-RGB"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 1: Digital Image Fundamentals: Image representation"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fee0c"
status: "completed"
scrapedAt: "2026-05-23T18:00:26.095Z"
---
# DIGITAL IMAGE PROCESSING - Module 1: Digital Image Fundamentals: Image Representation

## Topic: Colour Image Fundamentals - RGB

This topic delves into the foundational concepts of representing and understanding colour in digital images, specifically focusing on the Red, Green, and Blue (RGB) colour model.

---

### **1. Introduction to Colour Images**

*   **Definition:** A colour image is a digital image that captures information about the intensity of light at different wavelengths across the visible spectrum. Unlike grayscale images which represent intensity using a single value per pixel, colour images use multiple values to represent colour.
*   **Human Perception of Colour:** Our perception of colour is a complex phenomenon involving the interaction of light with the photoreceptor cells (cones) in our eyes. Humans typically have three types of cone cells, each sensitive to different ranges of wavelengths (roughly corresponding to red, green, and blue light). By combining the signals from these cones, our brain perceives a vast spectrum of colours.
*   **Digital Representation:** Digital images represent colour by quantizing and sampling the light intensity at specific locations and wavelengths.

---

### **2. The RGB Colour Model**

The RGB colour model is a **subtractive colour model** that is widely used in digital displays and imaging devices. It is based on the principle that by combining different intensities of red, green, and blue light, almost all perceivable colours can be created.

*   **Core Components:**
    *   **Red (R):** Represents the intensity of red light.
    *   **Green (G):** Represents the intensity of green light.
    *   **Blue (B):** Represents the intensity of blue light.

*   **How it Works:**
    *   Each pixel in an RGB image is represented by a triplet of values (R, G, B), where each value corresponds to the intensity of that colour component.
    *   When these primary colours are mixed in different proportions, secondary colours are formed:
        *   Red + Green = Yellow
        *   Red + Blue = Magenta
        *   Green + Blue = Cyan
        *   Red + Green + Blue = White (at maximum intensity)
        *   Zero Red + Zero Green + Zero Blue = Black

*   **Colour Depth (Bit Depth):**
    *   **Definition:** The number of bits used to represent the colour of a single pixel.
    *   **Common RGB Implementations:**
        *   **24-bit RGB (True Colour):**
            *   Each colour channel (R, G, B) is allocated 8 bits.
            *   Each channel can have $2^8 = 256$ intensity levels, ranging from 0 (no intensity) to 255 (maximum intensity).
            *   Total number of colours: $256 \times 256 \times 256 = 16,777,216$ colours.
            *   **Format:** $(R, G, B)$, where $R, G, B \in [0, 255]$.
            *   **Example:** (255, 0, 0) represents pure red, (0, 255, 0) represents pure green, (0, 0, 255) represents pure blue, (255, 255, 255) represents white, and (0, 0, 0) represents black.
        *   **30-bit or 36-bit RGB (Deep Colour):** Allocates more bits per channel (e.g., 10 or 12 bits) for a wider range of colours and smoother gradients.
        *   **15-bit RGB (High Colour):** Often uses 5 bits for each channel and 1 bit for alpha (transparency), or variations like 5-5-5.

*   **Advantages of RGB:**
    *   **Intuitive:** Closely matches how we perceive colour and how colour displays work.
    *   **Widely Supported:** Standard for digital cameras, monitors, scanners, and web graphics.
    *   **Hardware Implementation:** Relatively straightforward to implement in hardware.

*   **Disadvantages of RGB:**
    *   **Redundancy:** Luminance (brightness) and chrominance (colour information) are intertwined, making it less efficient for certain image processing tasks like compression or colour manipulation.
    *   **Device Dependent:** The exact appearance of an RGB colour can vary slightly between different devices due to differences in their phosphors or LEDs.

---

### **3. Colour Image Representation in Digital Systems**

*   **Pixel Structure:** An RGB colour image is typically stored as a 3D array (or a stack of 2D arrays).
    *   Let the image dimensions be $M$ rows and $N$ columns.
    *   The image can be represented as $I(x, y) = [R(x, y), G(x, y), B(x, y)]$, where $(x, y)$ are the pixel coordinates.
    *   Alternatively, it can be seen as three separate 2D arrays: $I_R$, $I_G$, and $I_B$, each of the same dimensions $M \times N$.

*   **File Formats:** Common image file formats store RGB information in various ways.
    *   **BMP (Bitmap):** Can store uncompressed RGB data.
    *   **JPEG (Joint Photographic Experts Group):** Typically uses colour subsampling and compression. It often converts RGB to a YCbCr colour space before compression, which is more perceptually uniform.
    *   **PNG (Portable Network Graphics):** Supports true colour RGB and lossless compression.

---

### **4. Relating RGB to Human Perception (Brief Mention)**

While RGB is a device-centric model, other colour models like **HSV (Hue, Saturation, Value)** or **YIQ/YUV** are more perceptually uniform and separate colour information from brightness. This separation is beneficial for many image processing operations.

---

### **5. Important Points to Remember**

*   **RGB is an additive colour model:** Colours are created by adding light of different primary colours.
*   **Each channel has a specific bit depth:** 8 bits per channel is common for 24-bit RGB.
*   **RGB separates colour information into three channels:** Red, Green, and Blue.
*   **It is a device-dependent model.**
*   **Higher bit depth leads to more colours and smoother transitions.**

---

### **6. Practice Questions and Exercises**

**Question 1:**
Explain the fundamental principle behind the RGB colour model. What are the primary colours in this model, and how do they combine to form secondary colours and white? (CO1 - K2)

**Answer:**
The RGB colour model is based on the principle that by combining different intensities of red, green, and blue light, a wide range of colours can be produced. The primary colours are Red, Green, and Blue. When these primary colours are mixed additively:
*   Red + Green = Yellow
*   Red + Blue = Magenta
*   Green + Blue = Cyan
*   Red + Green + Blue (at maximum intensity) = White
*   Absence of all colours (zero intensity) = Black

**Question 2:**
A 24-bit RGB colour image has a resolution of 100 pixels by 150 pixels.
a) How many bits are used to represent a single pixel?
b) How many different colours can be represented by this image?
c) How much storage space (in bytes) would this image require if it were uncompressed? (CO2 - K3)

**Answer:**
a) In a 24-bit RGB image, each pixel is represented by 3 colour channels (R, G, B), with each channel using 8 bits. Therefore, a single pixel uses $8 \text{ bits/channel} \times 3 \text{ channels} = 24 \text{ bits}$.
b) With 8 bits per channel, each channel can represent $2^8 = 256$ intensity levels. The total number of colours is $256 \times 256 \times 256 = 16,777,216$ colours.
c) Total number of pixels = $100 \text{ pixels} \times 150 \text{ pixels} = 15,000 \text{ pixels}$.
   Total bits for the image = $15,000 \text{ pixels} \times 24 \text{ bits/pixel} = 360,000 \text{ bits}$.
   Storage space in bytes = $360,000 \text{ bits} / 8 \text{ bits/byte} = 45,000 \text{ bytes}$.

**Question 3:**
Why is RGB considered a device-dependent colour model? Give an example of a device that uses the RGB colour model. (CO1 - K2)

**Answer:**
RGB is considered device-dependent because the exact appearance of a colour represented by an RGB triplet can vary slightly from one display device to another. This is due to differences in the phosphors or LEDs used in monitors, the calibration of the display, and the specific way the device interprets the RGB values. For example, a specific shade of red on one computer monitor might appear slightly different on another computer monitor or a projector, even if both use the RGB model.
**Example Device:** Computer monitors, televisions, smartphones, and digital cameras are common devices that utilize the RGB colour model for displaying or capturing images.

**Question 4:**
Consider a pixel with RGB values (128, 200, 50). Describe what this pixel would look like. What would be the RGB values for pure cyan? (CO2 - K3)

**Answer:**
A pixel with RGB values (128, 200, 50) would appear as a shade of **greenish-yellow**. The green component (200) is the strongest, followed by the red component (128), and the blue component (50) is the weakest. This combination results in a colour closer to yellow but with a distinct green bias.

Pure cyan is a secondary colour formed by mixing green and blue light at their maximum intensity, with no red light. Therefore, the RGB values for pure cyan are **(0, 255, 255)**.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### **7. References and Further Reading**

*   **Gonzalez & Woods, "Digital Image Processing" (4th Ed.):** Chapter 5 (Colour Image Processing) will provide a more in-depth discussion on colour models, including RGB, and their properties.
*   **Jayaraman, Esakkirajan, Veerakumar, "Digital Image Processing":** Refer to chapters discussing colour image representation and colour models.
*   **Castleman, "Digital Image Processing":** Provides foundational concepts on colour representation.
*   **Anil K Jain, "Fundamentals of Digital Image Processing":** Covers early work and fundamental principles of colour imaging.
*   **Pratt, "Digital Image Processing":** Offers advanced perspectives on colour spaces and their applications.

---

### **8. Alignment with Course Outcomes**

*   **CO1 (Explain components of image processing system):** Understanding the RGB model is fundamental to understanding how colour information is captured and represented within an image processing system (e.g., how a digital camera sensor captures RGB data or how a monitor displays it). (K2)
*   **CO2 (Analyse various concepts and mathematical transforms):** This topic lays the groundwork for understanding mathematical operations on colour images. We begin to see how pixel data is structured (triplets or multiple channels), which is essential for subsequent analysis and transformation. (K3)

---
This concludes the notes for Colour Image Fundamentals - RGB. Remember that understanding colour representation is a critical first step in mastering digital image processing.