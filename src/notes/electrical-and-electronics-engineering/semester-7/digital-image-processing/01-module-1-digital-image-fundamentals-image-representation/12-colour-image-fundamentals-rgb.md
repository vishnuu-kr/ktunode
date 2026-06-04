---
title: "Colour image fundamentals-RGB"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 1: Digital Image Fundamentals: Image representation"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36917"
status: "completed"
scrapedAt: "2026-05-23T16:34:59.755Z"
---
# Digital Image Processing: Module 1 - Digital Image Fundamentals: Image Representation - Colour Image Fundamentals: RGB

## 1. Introduction to Colour Images

Colour images provide a richer and more intuitive representation of the real world compared to grayscale images. They capture information about the hue, saturation, and brightness of objects, enabling better understanding and analysis. This module focuses on the fundamental principles of representing and manipulating colour images, with a special emphasis on the **RGB colour model**.

**Course Outcome Alignment:**
*   **CO1: Understand different components of image processing system (K2):** Understanding colour representation is a foundational component of any image processing system that deals with colour images.

**Textbook References:**
*   Gonzalez & Woods (4th Ed): Chapter 6: Colour Image Processing (Introduction and colour models)
*   Jayaraman, Esakkirajan, Veerakumar: Chapter 5: Colour Image Processing (Colour Models)

---

## 2. The Nature of Colour

Colour perception is a complex phenomenon involving the interaction of light, the human eye, and the brain.

*   **Light:** Light is electromagnetic radiation that travels in waves. Different wavelengths of visible light correspond to different colours.
*   **Human Eye:** The human eye contains specialized photoreceptor cells called **cones** that are sensitive to different ranges of wavelengths.
    *   **L-cones:** Sensitive to longer wavelengths (reddish light).
    *   **M-cones:** Sensitive to medium wavelengths (greenish light).
    *   **S-cones:** Sensitive to shorter wavelengths (bluish light).
*   **Brain Interpretation:** The brain interprets the signals from these cones to perceive colour.

**Key Concept:** **Trichromatic Theory of Colour Vision** states that our colour perception is based on the relative stimulation of three types of cone cells in the retina, each sensitive to different ranges of wavelengths.

---

## 3. Colour Models: Representing Colour

A **colour model** is a system that defines how colours are represented numerically. It's essentially a coordinate system where colours are specified by their components.

**Why different colour models?**
*   **Display Technologies:** Different display devices (monitors, printers) utilize different colour reproduction methods.
*   **Perceptual Properties:** Some models align better with human perception of colour attributes like brightness, hue, and saturation.
*   **Image Processing Tasks:** Certain colour models are more suitable for specific image processing operations (e.g., segmentation, enhancement).

---

## 4. The RGB Colour Model

The **RGB (Red, Green, Blue)** colour model is one of the most widely used colour models, especially for electronic displays.

**Core Idea:** RGB is an **additive colour model**. This means that colours are created by adding different intensities of red, green, and blue light. Starting with black (no light), adding red, green, and blue light in varying proportions generates all other colours.

**Representation:**
*   A colour in RGB is represented by a triplet of values: (R, G, B).
*   Each value represents the intensity of the corresponding primary colour (Red, Green, Blue).
*   The range of values for each component depends on the bit depth of the image.

**Common RGB Representations:**

*   **8-bit per channel (24-bit colour):**
    *   Each colour component (R, G, B) is represented by 8 bits.
    *   This allows for 2⁸ = 256 different intensity levels for each component.
    *   The total number of possible colours is 256 × 256 × 256 = 16,777,216 (approximately 16.7 million colours).
    *   Values typically range from 0 to 255.
    *   `(0, 0, 0)` represents black.
    *   `(255, 255, 255)` represents white.
    *   `(255, 0, 0)` represents pure red.
    *   `(0, 255, 0)` represents pure green.
    *   `(0, 0, 255)` represents pure blue.
    *   `(255, 255, 0)` represents yellow (red + green).
    *   `(255, 0, 255)` represents magenta (red + blue).
    *   `(0, 255, 255)` represents cyan (green + blue).

    **Example:**
    *   A pixel with RGB value (128, 64, 0) would represent a shade of orange.

*   **16-bit per channel (48-bit colour):**
    *   Each component is represented by 16 bits, allowing for 2¹⁶ = 65,536 intensity levels per component.
    *   This results in a much wider range of colours and finer gradations.
    *   Values typically range from 0 to 65,535.

**Digital Image Representation in RGB:**
*   A colour image in RGB is typically represented as a 3D array (or matrix).
*   The dimensions are: **height × width × number of colour channels**.
*   For an RGB image, this would be **height × width × 3**.
*   The three channels correspond to the Red, Green, and Blue components, respectively.

    **Example:** An image of size 100x150 pixels would have a data structure of 100 x 150 x 3.
    *   `Image[row][column][0]` would store the Red value for that pixel.
    *   `Image[row][column][1]` would store the Green value.
    *   `Image[row][column][2]` would store the Blue value.

**Course Outcome Alignment:**
*   **CO1: Understand different components of image processing system (K2):** Understanding how RGB colours are represented numerically and in data structures is crucial for designing image processing systems.

**Textbook References:**
*   Gonzalez & Woods (4th Ed): Chapter 6: Colour Image Processing (RGB Colour Model)
*   Jayaraman, Esakkirajan, Veerakumar: Chapter 5: Colour Image Processing (RGB Model)

---

## 5. RGB Image Processing Operations

The RGB model is the native format for many image sensors and display devices. Therefore, many basic image processing operations are performed directly in the RGB space.

**Common Operations:**

*   **Colour Image Display:** Most monitors display images by emitting Red, Green, and Blue light.
*   **Colour Filtering:**
    *   **Red Channel Extraction:** Simply taking the Red component of each pixel. This results in a grayscale image where brighter areas correspond to regions with high red intensity.
    *   **Green Channel Extraction:** Similar to red channel extraction, but for green.
    *   **Blue Channel Extraction:** Similar to red channel extraction, but for blue.
*   **Colour Blending/Mixing:** Combining images by averaging or weighted averaging their RGB components.
*   **Colour Manipulation:** Adjusting the intensity of R, G, or B channels to alter the colour balance or saturation. For example, increasing the G channel can make an image appear greener.

**Example:**
To create a grayscale image from an RGB image by averaging the colour components:
For each pixel `(R, G, B)`, the grayscale value `Y` would be calculated as `Y = (R + G + B) / 3`. This can be seen as projecting the colour vector onto a single intensity axis.

**Important Point to Remember:**
When performing operations on individual colour channels, ensure you are manipulating the correct channel to avoid unintended colour shifts.

**Course Outcome Alignment:**
*   **CO2: Analyse the various concepts and mathematical transforms necessary for image processing (K3):** Understanding how to manipulate individual RGB channels involves basic arithmetic operations, which are precursors to more complex transforms.

**Textbook References:**
*   Gonzalez & Woods (4th Ed): Chapter 6: Colour Image Processing (Applications and conversions)
*   Jayaraman, Esakkirajan, Veerakumar: Chapter 5: Colour Image Processing (RGB applications)

---

## 6. Colour Image Representation in Practice

*   **File Formats:** Colour images are stored in various file formats like JPEG, PNG, BMP, TIFF, etc. These formats often use RGB as their internal representation or provide ways to convert to/from RGB.
*   **Image Sensors:** Digital cameras and scanners capture colour information using sensors that are sensitive to different colours, often employing Bayer filters to capture R, G, and B data separately before processing into a full RGB image.

---

## 7. Practice Questions & Exercises

**Question 1:**
An RGB image has a resolution of 640x480 pixels. If each colour channel is represented using 8 bits, how much memory (in bytes) is required to store this image?

**Answer:**
*   Number of pixels = 640 × 480 = 307,200 pixels.
*   Number of colour channels = 3 (R, G, B).
*   Bits per pixel per channel = 8 bits.
*   Total bits = 307,200 pixels × 3 channels × 8 bits/channel = 7,372,800 bits.
*   Total bytes = 7,372,800 bits / 8 bits/byte = 921,600 bytes.

**Question 2:**
Consider a single pixel with RGB values (200, 50, 150).
a) What colour is this pixel likely to be?
b) If you wanted to make this pixel appear "more red," what operation would you perform on its RGB values?

**Answer:**
a) The pixel has a high red component (200), a moderate blue component (150), and a low green component (50). This combination would result in a shade of **magenta** or **purple**.
b) To make the pixel appear "more red," you would **increase the Red component** (200) or **decrease the Green and Blue components** (50 and 150 respectively). For example, changing the values to (255, 40, 120) would enhance its redness.

**Question 3:**
Explain why the RGB model is called an "additive" colour model. Provide an example of mixing colours in this model.

**Answer:**
The RGB model is called additive because colours are created by **adding** varying intensities of red, green, and blue light. Starting from black (no light), adding these primary colours in different proportions produces a wide spectrum of colours.

**Example:**
*   Red (255, 0, 0) + Green (0, 255, 0) = Yellow (255, 255, 0)
*   Red (255, 0, 0) + Blue (0, 0, 255) = Magenta (255, 0, 255)
*   Green (0, 255, 0) + Blue (0, 0, 255) = Cyan (0, 255, 255)
*   Red (255, 0, 0) + Green (0, 255, 0) + Blue (0, 0, 255) = White (255, 255, 255)

**Course Outcome Alignment:**
*   **CO1 (K2):** These questions test basic understanding of RGB representation.
*   **CO2 (K3):** Question 1 involves calculation, while Question 2 involves analyzing colour properties and potential manipulations.

---

## 8. Important Points to Remember

*   **RGB is additive:** Colours are formed by adding light.
*   **Digital representation:** RGB images are typically 3D arrays (height x width x 3).
*   **Bit depth matters:** 8-bit per channel (24-bit colour) is common, allowing 16.7 million colours.
*   **Primary colours:** Red, Green, and Blue.
*   **Black:** (0, 0, 0) in RGB.
*   **White:** (255, 255, 255) in 8-bit RGB.
*   Individual channel manipulation is a basic image processing technique.

---

## 9. Glossary

*   **Colour Model:** A system for defining and representing colours numerically.
*   **RGB:** Red, Green, Blue colour model.
*   **Additive Colour Model:** Colours are created by adding varying intensities of primary colours of light.
*   **Hue:** The pure colour property, like red, green, or blue.
*   **Saturation:** The purity of a colour, ranging from vivid to dull.
*   **Brightness (or Value):** The intensity or lightness of a colour.
*   **Bit Depth:** The number of bits used to represent the intensity of each colour component.

---

This concludes the introductory section on RGB colour fundamentals. Subsequent modules will build upon this foundation to explore other colour models and advanced image processing techniques.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
