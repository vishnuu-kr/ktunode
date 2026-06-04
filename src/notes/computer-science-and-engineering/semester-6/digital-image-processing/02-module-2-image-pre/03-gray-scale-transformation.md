---
title: "Gray-scale transformation"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 2: Image pre"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bc3a"
status: "completed"
scrapedAt: "2026-05-20T16:52:52.497Z"
---
# DIGITAL IMAGE PROCESSING - Module 2: Image Pre-processing - Gray-scale Transformation

## Introduction

This module focuses on gray-scale transformations, a critical aspect of image pre-processing.  These transformations are used to modify the gray levels of an image to enhance its visual appearance, correct for non-uniform illumination, or prepare the image for further processing like segmentation or feature extraction.

## Learning Outcomes

Upon completion of this module, you should be able to:

1.  **Understand the purpose and applications of gray-scale transformations.**
2.  **Explain the difference between linear and non-linear gray-scale transformations.**
3.  **Describe and implement common gray-scale transformations: identity, negative, logarithmic, power-law (gamma), contrast stretching, and gray-level slicing.**
4.  **Apply gray-scale transformations to improve image contrast and brightness.**
5.  **Analyze the histogram of an image and use it to select appropriate gray-scale transformations.**

## 1. Purpose and Applications of Gray-scale Transformations

*   **Purpose:** Gray-scale transformations (also known as intensity transformations or point processing) map input gray levels to output gray levels. The transformation function (T) determines how each pixel's gray level is changed.  Mathematically, it's represented as:

    s = T(r)

    where:
        *   `r` is the gray level of the pixel in the input image.
        *   `s` is the gray level of the pixel in the output image.
        *   `T` is the transformation function.

*   **Applications:**

    *   **Contrast Enhancement:** Expanding the range of gray levels to make subtle details more visible.
    *   **Brightness Adjustment:** Shifting the gray levels up or down to make the image brighter or darker.
    *   **Noise Reduction:** Some transformations can reduce the impact of certain types of noise.  (Although filtering techniques are generally preferred).
    *   **Image Segmentation Preparation:** By enhancing specific gray-level ranges, transformations can make it easier to segment an image into regions of interest.
    *   **Dynamic Range Compression:**  Useful for images with a very large range of intensities, compressing the range to better fit the display capabilities.
    *   **Histogram Equalization Pre-processing:**  Transforms the gray levels to approximate a uniform distribution, often improving contrast.

## 2. Linear vs. Non-Linear Gray-scale Transformations

*   **Linear Transformations:**

    *   The transformation function is a straight line.
    *   Simplest form: `s = ar + b`, where `a` and `b` are constants.
        *   `a` controls the contrast: `a > 1` increases contrast, `a < 1` decreases contrast.
        *   `b` controls the brightness: `b > 0` increases brightness, `b < 0` decreases brightness.
    *   Examples:
        *   **Identity Transformation:** `s = r` (leaves the image unchanged, acts as a baseline).  `a = 1, b = 0`.
        *   **Negative Transformation:** `s = L - 1 - r`, where `L` is the maximum gray level (e.g., 256 for an 8-bit image). `a = -1, b = L-1`.  Inverts the gray levels of the image (dark becomes bright, bright becomes dark). Useful for enhancing white or gray details embedded in dark regions.

*   **Non-Linear Transformations:**

    *   The transformation function is a curve, *not* a straight line.
    *   These transformations can enhance specific gray-level ranges more selectively than linear transformations.
    *   Examples:
        *   **Logarithmic Transformation:** `s = c * log(1 + r)`, where `c` is a constant. Compresses the dynamic range of images with large variations in pixel values.  Useful for enhancing details in darker regions.
        *   **Power-Law (Gamma) Transformation:** `s = c * r^γ`, where `c` and `γ` (gamma) are positive constants.  Used for contrast adjustment and gamma correction (correcting for non-linearities in image acquisition or display systems).  Values of `γ < 1` brighten the image and expand dark levels, while values of `γ > 1` darken the image and compress bright levels.

## 3. Common Gray-scale Transformations

*   **Identity Transformation (s = r):**

    *   **Description:**  The output gray level is the same as the input gray level.
    *   **Function:** No change to the image. Serves as a baseline for comparison.
    *   **Example:** Useful for verifying your processing pipeline.  If the input and output are different, there's an issue in your code.

*   **Negative Transformation (s = L - 1 - r):**

    *   **Description:** Inverts the gray levels of the image.
    *   **Function:** Dark areas become bright, and bright areas become dark.
    *   **Example:** Useful for enhancing white or gray details embedded in dark regions (e.g., medical images like mammograms).
    *   **Implementation:** For an 8-bit image (L = 256), the formula is s = 255 - r.

*   **Logarithmic Transformation (s = c * log(1 + r)):**

    *   **Description:** Compresses a wide range of input gray-level values into a narrower range of output values.
    *   **Function:**  Enhances details in darker regions while compressing the brighter regions.
    *   **Example:**  Useful for images with a wide dynamic range, like images captured under non-uniform lighting conditions.
    *   **Implementation:**  The constant `c` is often used to scale the output to the desired range (e.g., [0, L-1]).  Ensure the logarithm base is consistent (e.g., base 10 or natural logarithm).

*   **Power-Law (Gamma) Transformation (s = c * r^γ):**

    *   **Description:**  A flexible transformation that can be used for contrast enhancement and gamma correction.
    *   **Function:** Adjusts the overall brightness and contrast of an image.
    *   **Example:** Used to correct for non-linearities in display devices or to enhance images captured under different lighting conditions.  Different values of gamma emphasize different gray level ranges.
        *   `γ < 1`:  Brightens the image and expands dark gray levels.
        *   `γ > 1`:  Darkens the image and compresses bright gray levels.
        *   `γ = 1`: Identity transformation.
    *   **Implementation:** `c` is a scaling constant, often set to 1.  The exponent `γ` is the key parameter.  Ensure that input and output values are normalized between 0 and 1, or appropriately scaled after the transformation.

*   **Contrast Stretching:**

    *   **Description:** Expands the range of gray levels in an image to utilize the full dynamic range available.  This can significantly improve the visual appearance of images with poor contrast.
    *   **Function:**  Maps a range of input gray levels `[r1, r2]` to a wider range `[s1, s2]`. Pixels with gray levels below `r1` are mapped to `s1`, and pixels with gray levels above `r2` are mapped to `s2`. The gray levels between `r1` and `r2` are stretched linearly.
    *   **Example:**  Enhancing images with a narrow range of gray levels, making details more discernible.
    *   **Implementation:** Requires identifying the minimum and maximum gray levels (`r1` and `r2`) in the image and mapping them to the desired minimum and maximum output levels (`s1` and `s2`, often 0 and L-1).  The transformation function is piecewise linear.
    *   **Formula:**
        ```
        s = 0                  if r < r1
        s = ((s2 - s1) / (r2 - r1)) * (r - r1) + s1  if r1 <= r <= r2
        s = L - 1              if r > r2
        ```

*   **Gray-Level Slicing:**

    *   **Description:** Highlights a specific range of gray levels in an image while suppressing the rest.
    *   **Function:**  Makes a particular range of gray levels more prominent.
    *   **Example:**  Identifying specific features or objects in an image based on their gray-level range (e.g., highlighting tumors in medical images).
    *   **Types:**
        *   **With Background Preservation:**  Gray levels within the specified range are set to a high value (e.g., white), while the others are preserved.
        *   **Without Background Preservation:**  Gray levels within the specified range are set to a high value, while the others are set to a low value (e.g., black).
    *   **Implementation:**  Requires defining the range of gray levels to be highlighted.
    *   **Formulas:**
        *   **With Background Preservation:**
            ```
            s = L - 1  if r1 <= r <= r2
            s = r      otherwise
            ```
        *   **Without Background Preservation:**
            ```
            s = L - 1  if r1 <= r <= r2
            s = 0      otherwise
            ```

## 4. Improving Image Contrast and Brightness

*   **Contrast Enhancement:**

    *   **Low Contrast Images:** Characterized by a narrow range of gray levels clustered around a central value. This makes it difficult to distinguish details.
    *   **Techniques:**
        *   **Contrast Stretching:**  Expands the range of gray levels.
        *   **Histogram Equalization:**  Redistributes the gray levels to approximate a uniform distribution, often leading to significant contrast improvement. This is generally *not* a gray-scale transformation in the strictest sense, but it influences the gray levels.
        *   **Power-Law Transformation (Gamma Correction):**  Appropriate gamma values can enhance contrast depending on the image.

*   **Brightness Adjustment:**

    *   **Dark Images:**  Gray levels are concentrated towards the lower end of the range.
    *   **Bright Images:**  Gray levels are concentrated towards the upper end of the range.
    *   **Techniques:**
        *   **Linear Transformation (s = r + b):** Adding a constant `b` to each pixel's gray level shifts the entire range.  A positive `b` increases brightness, and a negative `b` decreases it.
        *   **Power-Law Transformation (Gamma Correction):**  `γ < 1` brightens the image, and `γ > 1` darkens the image.

## 5. Analyzing Histograms for Transformation Selection

*   **Histogram:** A graph that shows the frequency of each gray level in an image.  The x-axis represents gray levels (0 to L-1), and the y-axis represents the number of pixels at each gray level.
*   **Using Histograms for Transformation Selection:**

    *   **Low Contrast Image:** Histogram is narrow and concentrated around a central value.  Contrast stretching or histogram equalization is suitable.
    *   **Dark Image:** Histogram is skewed towards the lower gray levels. Applying a power-law transformation with `γ < 1` or adding a positive constant to the gray levels can improve brightness.
    *   **Bright Image:** Histogram is skewed towards the higher gray levels. Applying a power-law transformation with `γ > 1` or subtracting a constant from the gray levels can reduce brightness.
    *   **Image with Washed-Out Appearance:** The gray level distribution is concentrated toward a narrow high range (light image with little contrast)
    *   **Bimodal Histogram:**  Indicates two dominant gray level regions, potentially suggesting a foreground and background. Gray-level slicing or thresholding could be effective.
    *   **For Logarithmic Transformations**: When you have images with detail concentrated in low gray level range then this is a great option.

## Important Points to Remember

*   Gray-scale transformations are point operations – they operate on individual pixels independent of their neighbors.
*   The choice of transformation depends on the specific image and the desired outcome.
*   Histograms are invaluable for understanding the gray-level distribution of an image and guiding the selection of appropriate transformations.
*   Normalization of pixel values to the range [0, 1] before applying transformations like power-law transformation can often simplify implementation and improve results.
*   Clipping: After performing any gray scale transformation, it's essential to ensure that the output gray levels are within the valid range (e.g., 0-255 for an 8-bit image).  This is often done by clamping values that fall outside this range.

## Practice Questions/Exercises

1.  **Question:**  An image has a narrow histogram clustered around the gray level 100. Which gray-scale transformation is most suitable for enhancing its contrast? Why?

    **Answer:** Contrast Stretching. Because the histogram is narrow, contrast stretching will expand this narrow band to make detail clearer.

2.  **Question:**  Explain the effect of applying a negative transformation to a digital radiograph (X-ray) of a bone.

    **Answer:**  Radiographs typically show bones as lighter (higher gray levels) against a darker background. A negative transformation would invert this, making the bones appear darker and the background lighter. This might make subtle fractures or irregularities in the bone more visible.

3.  **Question:**  Describe a scenario where a logarithmic transformation would be more appropriate than a linear transformation.

    **Answer:** When dealing with an image that has a very large dynamic range with most of the details in a lower gray level range (example, low illuminated scene with very bright elements)

4.  **Question:** An image has a gamma value of 2.2. Is it a bright or dark image? What transformation can be applied to correct the effect of this gamma?
    **Answer:** The gamma value of 2.2 will darken the image. To correct this a gamma transform with value of 1/2.2 can be applied.

5.  **Question:**  Implement a simple contrast stretching algorithm in Python using NumPy.  Assume the input image is an 8-bit grayscale image.

    **Answer:**

    ```python
    import numpy as np

    def contrast_stretch(image, min_in, max_in, min_out=0, max_out=255):
        """
        Performs contrast stretching on an image.

        Args:
            image: Input grayscale image (NumPy array).
            min_in: Minimum gray level in the input image to map.
            max_in: Maximum gray level in the input image to map.
            min_out: Minimum gray level in the output image (default: 0).
            max_out: Maximum gray level in the output image (default: 255).

        Returns:
            The contrast-stretched image (NumPy array).
        """

        stretched_image = np.copy(image).astype(np.float64) #make sure image is copied and floating for transformation

        # Clip values outside the input range
        stretched_image[stretched_image < min_in] = min_in
        stretched_image[stretched_image > max_in] = max_in

        # Perform the linear transformation
        stretched_image = ((stretched_image - min_in) / (max_in - min_in)) * (max_out - min_out) + min_out

        # Convert back to uint8 and return
        return np.uint8(stretched_image)


    # Example Usage:
    # Assuming 'img' is your input image (a NumPy array)
    # Assuming the min and max gray levels are found by looking at an image's histogram
    # Assuming min_in is 50 and max_in is 200.
    # stretched_img = contrast_stretch(img, 50, 200)
    ```
This complete module offers a comprehensive understanding of gray-scale transformations, including their purpose, types, and practical applications, as well as how to select them.
