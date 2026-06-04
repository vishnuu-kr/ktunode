---
title: "Colour image fundamentals-RGB, CMY, HIS models"
subject: "IMAGE PROCESSING APPLICATIONS"
module: "Module 1: Digital Image Fundamentals: Image representation"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780fef5d"
status: "completed"
scrapedAt: "2026-05-23T18:01:10.647Z"
---
# Module 1: Digital Image Fundamentals: Image Representation - Colour Image Fundamentals

## Topic: Colour Image Fundamentals - RGB, CMY, HIS Models

### Introduction to Colour Images

Colour images provide a richer representation of visual information compared to grayscale images, enabling us to perceive and process details like hue, saturation, and intensity. This module explores the fundamental models used to represent colour images in digital image processing.

### Learning Outcomes:

By the end of this topic, you will be able to:

*   **Understand the concept of colour representation in digital images.**
*   **Explain the fundamental principles behind RGB, CMY, and HIS colour models.**
*   **Describe the applications and use cases of each colour model.**
*   **Relate colour model transformations to image processing tasks.**
*   **Compare and contrast the characteristics of RGB, CMY, and HIS models.**

### Course Outcomes Alignment:

This topic directly contributes to:

*   **CO1 (K4): Compare different colour model representations of image processing systems.** This topic provides the foundation for comparing RGB, CMY, and HIS models based on their characteristics and applications.

### 1. Colour Representation in Digital Images

In digital image processing, colour is typically represented by combining multiple primary colours in different proportions. The way these primary colours are defined and combined forms the basis of different colour models.

*   **Colour Models:** A colour model is a systematic way of organizing and defining colours. It essentially provides a framework for representing colour as a set of numerical values.
*   **Primary Colours:** These are basic colours that, when mixed in various proportions, can create a wide spectrum of other colours.
*   **Additive vs. Subtractive Colour Mixing:**
    *   **Additive Mixing:** Starts with black and adds light of primary colours to create other colours. White is the result of mixing all primary colours. (e.g., RGB)
    *   **Subtractive Mixing:** Starts with white and subtracts light wavelengths using pigments or inks. Black is the result of mixing all primary colours (ideally, but in practice, often a dark, muddy colour). (e.g., CMY)

---

## 2. The RGB Colour Model

The **RGB (Red, Green, Blue)** colour model is an **additive** colour model widely used in electronic devices that emit light, such as computer monitors, televisions, and scanners.

### Key Concepts and Definitions:

*   **Primary Colours:** Red, Green, and Blue.
*   **Representation:** A colour is represented by a triplet of values $(R, G, B)$, where each value corresponds to the intensity of red, green, and blue, respectively.
*   **Intensity Range:** Typically, each component $(R, G, B)$ is represented by an 8-bit integer, ranging from 0 (no intensity) to 255 (full intensity). This gives $256 \times 256 \times 256 = 16,777,216$ possible colours.
*   **Mixing:**
    *   $(0, 0, 0)$ = Black (no light)
    *   $(255, 255, 255)$ = White (all lights at full intensity)
    *   $(255, 0, 0)$ = Red
    *   $(0, 255, 0)$ = Green
    *   $(0, 0, 255)$ = Blue
    *   $(255, 255, 0)$ = Yellow (Red + Green)
    *   $(0, 255, 255)$ = Cyan (Green + Blue)
    *   $(255, 0, 255)$ = Magenta (Red + Blue)

### How it Works (Visualisation):

Imagine three spotlights of red, green, and blue light. Where they overlap, you get secondary colours (yellow, cyan, magenta). Where all three overlap at full intensity, you get white.

### Applications:

*   **Display Devices:** Computer monitors, television screens, mobile phone displays.
*   **Scanners:** Capture images as RGB data.
*   **Digital Cameras:** Image sensors typically capture colour information in an RGB-like format.
*   **Web Design and Graphics:** The standard for displaying colours on the internet.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### Textbooks/Reference Incorporation:

*   **Gonzalez & Rafel C:** Discusses RGB as the most common colour model for digital imaging, emphasizing its additive nature and representation in digital systems. (Chapter 6)
*   **Jayaraman, Esakkirajan, Veerakumar:** Explains RGB in the context of image acquisition and display, detailing the bit depth and the resulting colour spectrum. (Chapter 6)

### Important Points to Remember:

*   RGB is an **additive** model.
*   It's suitable for **emissive** displays (devices that emit light).
*   Each pixel is defined by three intensity values (R, G, B).

---

## 3. The CMY Colour Model

The **CMY (Cyan, Magenta, Yellow)** colour model is a **subtractive** colour model primarily used in printing and hard copy output.

### Key Concepts and Definitions:

*   **Primary Colours:** Cyan, Magenta, and Yellow.
*   **Representation:** A colour is represented by a triplet of values $(C, M, Y)$, where each value corresponds to the amount of cyan, magenta, and yellow ink or pigment used.
*   **Mixing (Subtractive):**
    *   Starts with white paper.
    *   Cyan ink absorbs red light.
    *   Magenta ink absorbs green light.
    *   Yellow ink absorbs blue light.
*   **Mixing:**
    *   $(0, 0, 0)$ = White (no ink)
    *   $(1, 0, 0)$ = Cyan (absorbs red)
    *   $(0, 1, 0)$ = Magenta (absorbs green)
    *   $(0, 0, 1)$ = Yellow (absorbs blue)
    *   $(1, 1, 0)$ = Blue (Cyan + Magenta absorb red & green, reflecting blue)
    *   $(0, 1, 1)$ = Red (Magenta + Yellow absorb green & blue, reflecting red)
    *   $(1, 0, 1)$ = Green (Cyan + Yellow absorb red & blue, reflecting green)
    *   $(1, 1, 1)$ = Black (ideally, absorbs all colours)

### The CMYK Model (Expanded):

In practice, pure black is difficult to achieve by mixing CMY inks due to impurities. Therefore, a **Key** (Black) colour is often added, leading to the **CMYK** model.

*   **K (Black):** Used for true black and to improve contrast and detail in dark areas.
*   **Representation:** $(C, M, Y, K)$.
*   **Why K?**
    *   **Cost-effectiveness:** Using black ink is cheaper than using large amounts of CMY inks to create black.
    *   **Sharpness:** Black text and lines are sharper when printed with black ink.
    *   **Neutral Grays:** Black ink contributes to more accurate neutral gray tones.

### Applications:

*   **Printing:** Inkjet printers, laser printers, offset printing.
*   **Graphic Design:** Creating print layouts and brochures.

### Textbooks/Reference Incorporation:

*   **Gonzalez & Rafel C:** Explains CMY as a subtractive model essential for printing, detailing how ink pigments absorb light wavelengths. (Chapter 6)
*   **Jayaraman, Esakkirajan, Veerakumar:** Introduces CMYK as the practical printing model, highlighting the role of black ink and the underlying subtractive principles. (Chapter 6)
*   **Castleman:** Discusses colour reproduction and the limitations of CMY, leading to the necessity of CMYK for professional printing. (Chapter 7)

### Important Points to Remember:

*   CMY is a **subtractive** model.
*   It's suitable for **reflective** media (paper).
*   CMYK is the practical extension for printing, adding black ink.

---

## 4. The HIS Colour Model

The **HIS (Hue, Saturation, Intensity)** colour model, also known as **HSL (Hue, Saturation, Lightness)** or **HSV (Hue, Saturation, Value)**, is a perceptually oriented colour model that separates colour information into components that are more intuitive to human perception.

### Key Concepts and Definitions:

*   **Hue (H):** Represents the dominant wavelength of colour. It's what we typically refer to as "colour" (e.g., red, green, blue, yellow). On a colour wheel, hue is the angle.
*   **Saturation (S):** Represents the purity or vividness of the colour. A highly saturated colour is pure, while a desaturated colour is closer to gray.
*   **Intensity/Lightness/Value (I/L/V):** Represents the brightness or darkness of the colour.

### Variations of HIS:

*   **HSI (Hue, Saturation, Intensity):** Often used in image processing. Intensity (I) is typically an average of the R, G, and B components.
*   **HSL (Hue, Saturation, Lightness):** Lightness (L) is the average of the maximum and minimum of R, G, B.
*   **HSV (Hue, Saturation, Value):** Value (V) is the maximum of R, G, B.

For this module, we will focus on the **HSI** model as it's commonly used in image processing.

### How it Works (HSI Model):

*   **Hue:** Often represented as an angle from 0 to 360 degrees (e.g., 0° for red, 120° for green, 240° for blue).
*   **Saturation:** Typically ranges from 0 (grayscale) to 1 (pure colour).
*   **Intensity:** Typically ranges from 0 (black) to 1 (white), or 0 to 255.

### Transformation from RGB to HSI (Conceptual):

The transformation from RGB to HSI involves mathematical operations to isolate these perceptual components. A common geometric interpretation is that the RGB colour cube is transformed into a cone or cylinder.

**Geometric Interpretation:**

*   The central axis of the cone/cylinder represents Intensity (from black at the apex to white at the base).
*   The distance from the axis represents Saturation (from 0 at the axis to maximum at the periphery).
*   The angle around the axis represents Hue.

### Applications:

*   **Image Analysis and Segmentation:**
    *   **Colour-based Segmentation:** Often easier to segment images based on Hue and Saturation, as Intensity can vary significantly due to lighting. For example, identifying red objects can be done by thresholding the Hue component.
*   **Colour Correction and Enhancement:** Adjusting Hue, Saturation, or Intensity independently allows for precise colour manipulation.
*   **Colour Image Filtering:** Applying filters to specific colour components (e.g., smoothing Hue to reduce colour noise).
*   **Face Detection:** Hue is often used as a feature for detecting skin tones.

### Textbooks/Reference Incorporation:

*   **Gonzalez & Rafel C:** Provides a detailed explanation of the HSI colour model, including its derivation from RGB and its advantages for colour image analysis. It also covers the mathematical transformations. (Chapter 6)
*   **Jayaraman, Esakkirajan, Veerakumar:** Introduces HSI as a human-perceptual colour model, explaining Hue, Saturation, and Intensity and their uses in image processing tasks like segmentation. (Chapter 6)
*   **Jain:** Discusses colour spaces and their relevance in pattern recognition and image analysis, touching upon models like HSI for feature extraction. (Chapter 8)

### Important Points to Remember:

*   HSI separates colour into perceptual attributes: Hue, Saturation, and Intensity.
*   It is highly beneficial for **colour image analysis, segmentation, and manipulation**.
*   Hue represents the "colour" itself, Saturation the "purity," and Intensity the "brightness."

---

## 5. Comparing Colour Models (CO1 Alignment)

This section directly addresses **CO1: Compare different colour model representations of image processing systems**.

| Feature        | RGB (Red, Green, Blue) | CMY (Cyan, Magenta, Yellow) | HSI (Hue, Saturation, Intensity) |
| :------------- | :--------------------- | :-------------------------- | :------------------------------- |
| **Colour Mixing** | Additive               | Subtractive                 | Perceptual                       |
| **Primary Colours** | Red, Green, Blue       | Cyan, Magenta, Yellow       | Hue, Saturation, Intensity       |
| **Application Domain** | Displays (monitors, TVs), Scanners, Cameras | Printing, Graphic Design (hard copy) | Image Analysis, Segmentation, Manipulation, Colour Correction |
| **Intuition**  | Machine-oriented (how displays work) | Machine-oriented (how printers work) | Human-perception oriented        |
| **Data Separation** | Intertwined colour components | Intertwined colour components | Separates colour into perceptual attributes |
| **Usefulness for Segmentation** | Less effective; colour information is coupled | Less effective; colour information is coupled | Highly effective; colours can be isolated by thresholding H and S |
| **Sensitivity to Lighting** | High (changes in light affect all components) | Less directly affected in the model itself, but the reproduction does | Intensity component is sensitive; Hue and Saturation are more robust to uniform lighting changes |
| **Transformation** | Base model for many digital images | Derived from RGB for printing; often involves CMYK | Transforms from RGB, separating perceptual attributes |

---

## 6. Examples and Applications

### Example 1: Image Segmentation using HSI

*   **Problem:** Segmenting an image to isolate all red objects.
*   **Approach:**
    1.  Convert the RGB image to the HSI colour space.
    2.  Examine the Hue component. Red colours typically fall within a specific range of Hue values (e.g., close to 0° or 360°).
    3.  Apply a threshold to the Hue channel to create a binary mask that highlights pixels with red Hue values.
    4.  The Intensity and Saturation channels can be used to refine the segmentation (e.g., by removing very dark or very desaturated pixels that might erroneously fall within the Hue range).
*   **Benefit:** This is much easier than trying to segment based on RGB values, where red might be represented by high R, low G, and low B values, which can vary with lighting.

### Example 2: Colour Correction in Photoshop (Conceptual)

*   When you adjust the "Hue/Saturation" sliders in image editing software like Photoshop, you are implicitly working with an HSI-like colour model.
*   **Adjusting Hue:** Shifts all colours along the color wheel (e.g., making greens look more yellow or blue).
*   **Adjusting Saturation:** Makes colours more vivid or more muted (grayscale).
*   **Adjusting Brightness/Lightness/Value:** Makes the overall image darker or lighter.
*   **Benefit:** This allows for intuitive and targeted colour adjustments without drastically altering the overall luminance information in a coupled way (as might happen if you just changed RGB values).

### Example 3: Printing a Photograph

*   A digital photograph is usually stored in RGB.
*   When you send this image to a printer, the printer driver converts the RGB data to CMYK data.
*   The printer then uses Cyan, Magenta, Yellow, and Black inks to reproduce the colours on paper, based on the subtractive colour mixing principle.

---

## 7. Practice Questions and Exercises

**Question 1:**
Which colour model is additive and primarily used for displaying images on electronic devices?
(a) CMYK
(b) HSI
(c) RGB
(d) HSV

**Answer:** (c) RGB

**Question 2:**
In the CMYK colour model, what does the 'K' stand for and why is it necessary?

**Answer:** 'K' stands for Key (Black). It is necessary for achieving true black, improving contrast, and reducing the amount of CMY inks used for dark tones and black text.

**Question 3:**
Explain the difference between Hue, Saturation, and Intensity in the HSI colour model.

**Answer:**
*   **Hue:** The dominant wavelength of colour, perceived as "colour" (e.g., red, green).
*   **Saturation:** The purity or vividness of the colour, ranging from grayscale (0) to pure colour (1).
*   **Intensity:** The brightness or darkness of the colour, ranging from black (0) to white (1).

**Question 4:**
A colour image processing task requires isolating specific colours based on their spectral properties, independent of lighting variations. Which colour model would be most suitable for this task and why?

**Answer:** The HSI colour model would be most suitable. Hue represents the spectral property of the colour, and Saturation represents its purity. These components are generally more robust to variations in illumination than the raw RGB values, making colour-based segmentation and analysis more effective.

**Question 5 (Conceptual):**
Consider an image of a red apple captured by a digital camera.
(a) How would this apple be represented in the RGB colour model? (Describe the relative intensities of R, G, and B).
(b) How would this apple be represented in the HSI colour model? (Describe the typical values for H, S, and I).

**Answer:**
(a) In RGB, the red apple would have a high Red (R) component, and relatively low Green (G) and Blue (B) components. For example, a pure red might be (255, 0, 0), while a slightly less saturated or shaded red might be (200, 50, 50).

(b) In HSI, the red apple would have:
    *   **Hue (H):** A value corresponding to red (typically around 0° or 360° in a 0-360° scale).
    *   **Saturation (S):** A high value, indicating the colour is vivid and not desaturated.
    *   **Intensity (I):** A moderate to high value, depending on the brightness of the apple and the lighting conditions.

---

## 8. Important Points to Remember

*   **Colour Models are Crucial:** They dictate how colour information is stored, interpreted, and manipulated.
*   **RGB vs. CMY:** Understand the additive (RGB) and subtractive (CMY) nature and their primary applications (displays vs. printing).
*   **HSI for Analysis:** The HSI model is invaluable for tasks where understanding perceptual colour attributes is key, such as segmentation and colour correction.
*   **Transformations are Key:** Converting between colour models (e.g., RGB to HSI) is a fundamental operation in image processing.
*   **CMYK is Practical Printing:** Remember the addition of Black (K) in CMYK for efficient and high-quality printing.

---

This concludes Module 1, Topic 1 on Colour Image Fundamentals. The knowledge gained here will be foundational for understanding subsequent image processing techniques.