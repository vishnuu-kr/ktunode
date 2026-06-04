---
title: "Geometric Transformations - Pixel coordinate transformations"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 2: Image pre"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bc3b"
status: "completed"
scrapedAt: "2026-05-20T16:52:53.205Z"
---
# DIGITAL IMAGE PROCESSING - Module 2: Image Preprocessing - Geometric Transformations: Pixel Coordinate Transformations

## Overview

This module explores geometric transformations, specifically focusing on pixel coordinate transformations. Geometric transformations alter the spatial relationship between pixels in an image. Pixel coordinate transformations map the coordinates of pixels in the input image to new coordinates in the output image. This is a fundamental pre-processing step used for image registration, rectification, distortion correction, and creating artistic effects.

## Learning Outcomes

By the end of this section, you will be able to:

1.  **Define geometric transformations and their purpose in image processing.**
2.  **Explain pixel coordinate transformations and how they relate input and output image coordinates.**
3.  **Identify and describe common pixel coordinate transformations (e.g., translation, rotation, scaling, shearing).**
4.  **Represent pixel coordinate transformations using transformation matrices.**
5.  **Apply pixel coordinate transformations to images.**
6.  **Understand the concepts of forward and inverse mapping and when to use each.**
7.  **Describe common interpolation techniques (nearest neighbor, bilinear) used during coordinate transformations.**

## 1. Geometric Transformations: Definition and Purpose

*   **Definition:** Geometric transformations alter the spatial relationships between pixels in an image. They map the location of pixels from one coordinate system (input image) to another (output image).  These transformations can be rigid (preserving shape and size) or non-rigid (altering shape and size).

*   **Purpose:**
    *   **Image Registration:** Aligning multiple images of the same scene taken at different times, viewpoints, or with different sensors.
    *   **Image Rectification:** Correcting geometric distortions in an image to create a geometrically accurate representation. For example, removing perspective distortions in aerial photographs.
    *   **Distortion Correction:** Removing lens distortions (e.g., barrel or pincushion distortion) introduced by camera optics.
    *   **Viewpoint Correction:** Changing the viewpoint of an image.
    *   **Creating Special Effects:** Generating warped or distorted images for artistic purposes.

## 2. Pixel Coordinate Transformations: Input and Output Relationships

*   **Concept:** Pixel coordinate transformations define a mapping function that relates the coordinates of a pixel in the *input image (x, y)* to its corresponding coordinates in the *output image (x', y')*. This is represented mathematically as:

    ```
    x' = f(x, y)
    y' = g(x, y)
    ```

    where *f* and *g* are transformation functions.

*   **Coordinate Systems:**
    *   **Image Coordinate System:** Origin is typically at the top-left corner of the image, with x increasing to the right and y increasing downwards. Pixel coordinates are integers.
    *   **Continuous Coordinate System:** Represents pixel locations as real numbers, allowing for sub-pixel accuracy. Often used internally during the transformation process.

*   **Example:** A simple translation transformation can be expressed as:
    ```
    x' = x + tx
    y' = y + ty
    ```
    Where *tx* and *ty* are the translation amounts in the x and y directions, respectively.

## 3. Common Pixel Coordinate Transformations

*   **Translation:** Shifting the image by a specified amount in the x and y directions.  As seen above: `x' = x + tx,  y' = y + ty`

*   **Scaling:** Changing the size of the image.  Can be uniform (same scaling factor in both directions) or non-uniform (different scaling factors).
    ```
    x' = sx * x
    y' = sy * y
    ```
    Where *sx* and *sy* are the scaling factors in the x and y directions, respectively. *sx* > 1 enlarges, *sx* < 1 shrinks.

*   **Rotation:** Rotating the image around a specified point (typically the origin or the image center) by a given angle.
    ```
    x' = x * cos(θ) - y * sin(θ)
    y' = x * sin(θ) + y * cos(θ)
    ```
    Where *θ* is the rotation angle in radians.

*   **Shearing:**  Distorting the image by skewing it along one or both axes.
    *   **Horizontal Shear:**
        ```
        x' = x + shx * y
        y' = y
        ```
        Where *shx* is the horizontal shearing factor.
    *   **Vertical Shear:**
        ```
        x' = x
        y' = y + shy * x
        ```
        Where *shy* is the vertical shearing factor.

*   **Affine Transformation:** A combination of translation, rotation, scaling, and shearing. Affine transformations preserve straight lines and parallelism.

*   **Perspective (Projective) Transformation:**  A more general transformation that allows for perspective distortions. Preserves straight lines but not necessarily parallelism. Commonly used for correcting perspective distortions in images.

## 4. Transformation Matrices

*   **Homogeneous Coordinates:**  A way to represent geometric transformations using matrix multiplication.  A 2D point (x, y) is represented as a 3D vector (x, y, 1).

*   **Transformation Matrix:** A matrix that encapsulates the parameters of a geometric transformation.  It allows us to apply multiple transformations by simply multiplying the corresponding matrices.

*   **Translation Matrix:**

    ```
    T = | 1  0  tx |
        | 0  1  ty |
        | 0  0  1  |
    ```

*   **Scaling Matrix:**

    ```
    S = | sx  0  0 |
        | 0  sy  0 |
        | 0  0  1  |
    ```

*   **Rotation Matrix (around the origin):**

    ```
    R = | cos(θ)  -sin(θ)  0 |
        | sin(θ)   cos(θ)  0 |
        | 0        0       1 |
    ```

*   **Shearing Matrix (Horizontal):**

    ```
    Shx = | 1  shx  0 |
          | 0  1    0 |
          | 0  0    1 |
    ```

*   **Applying a Transformation:** To apply a transformation, multiply the transformation matrix by the homogeneous coordinate vector of the point:

    ```
    [x', y', 1] = T * [x, y, 1]
    ```

*   **Concatenating Transformations:** To apply multiple transformations in sequence, multiply their corresponding matrices together. For example, to rotate an image around a point (cx, cy) that is not the origin, you would:
    1.  Translate the image so that (cx, cy) is at the origin.
    2.  Rotate the image around the origin.
    3.  Translate the image back to its original position.

    The overall transformation matrix would be: `T = T_back * R * T_forward`

## 5. Applying Pixel Coordinate Transformations

*   **Forward Mapping (Pixel-to-Pixel):**  For each pixel in the input image, calculate its corresponding location in the output image using the transformation function.  This can lead to gaps or holes in the output image if multiple input pixels map to the same output pixel or if no input pixel maps to a particular output pixel.

*   **Inverse Mapping (Pixel-to-Pixel):** For each pixel in the *output image*, calculate its corresponding location in the *input image* using the *inverse transformation function*.  If the input coordinate is not an integer, *interpolation* is used to determine the pixel value in the output image.  This is the most common method because it avoids gaps and holes in the output image.

## 6. Forward vs. Inverse Mapping

| Feature          | Forward Mapping                                       | Inverse Mapping                                        |
|-------------------|-------------------------------------------------------|--------------------------------------------------------|
| Direction        | Input Image -> Output Image                          | Output Image -> Input Image                           |
| Output Holes     | Possible                                             | Avoided                                                |
| Complexity       | Simpler for simple transformations                 | Requires inverting the transformation (can be complex) |
| Common Use Cases | Creating visual effects where gaps are acceptable   | Most practical applications (image registration, etc.)  |

## 7. Interpolation Techniques

When using inverse mapping, the calculated input coordinates (x, y) for an output pixel (x', y') may not be integers. Interpolation is used to estimate the pixel value at these non-integer coordinates.

*   **Nearest Neighbor Interpolation:**  Assigns the value of the nearest pixel in the input image to the output pixel.  Simple and fast but can result in blocky artifacts, especially when scaling or rotating images.

*   **Bilinear Interpolation:**  Calculates a weighted average of the four nearest pixels in the input image to determine the output pixel value.  Produces smoother results than nearest neighbor but requires more computation.
    *   The value of the output pixel at (x', y') is calculated as:

        ```
        f(x', y') ≈ A(1-a)(1-b) + B(a)(1-b) + C(a)(b) + D(1-a)(b)
        ```

        where:
        *   (x', y') is the coordinate in the input image.
        *   A, B, C, and D are the pixel values of the four nearest neighbors to (x', y').
        *   a and b are the fractional distances from (x', y') to A (in the x and y directions, respectively).

*   **Bicubic Interpolation:** Uses a weighted average of the 16 nearest pixels.  Produces even smoother results than bilinear interpolation but is computationally more expensive.

## Important Points to Remember

*   Transformation matrices provide a compact and efficient way to represent and apply geometric transformations.
*   Inverse mapping is generally preferred over forward mapping because it avoids gaps and holes in the output image.
*   Interpolation is crucial for obtaining good quality results when using inverse mapping.
*   The choice of interpolation technique depends on the desired trade-off between image quality and computational cost.

## Practice Questions/Exercises

1.  **Question:** An image is translated by 5 pixels to the right and 3 pixels down. Write down the translation matrix.
    *   **Answer:**
        ```
        T = | 1  0  5 |
            | 0  1  3 |
            | 0  0  1 |
        ```

2.  **Question:** An image is scaled by a factor of 2 in the x-direction and 0.5 in the y-direction.  Write down the scaling matrix.
    *   **Answer:**
        ```
        S = | 2  0  0 |
            | 0  0.5 0 |
            | 0  0  1 |
        ```

3.  **Question:**  Describe the advantages and disadvantages of nearest neighbor interpolation compared to bilinear interpolation.
    *   **Answer:**
        *   **Nearest Neighbor:**
            *   **Advantage:** Simple and computationally fast.
            *   **Disadvantage:**  Produces blocky artifacts, especially with scaling and rotation.
        *   **Bilinear: **
            *   **Advantage:** Produces smoother results than nearest neighbor.
            *   **Disadvantage:** More computationally expensive than nearest neighbor.

4.  **Question:**  Why is inverse mapping preferred over forward mapping in most image processing applications involving geometric transformations?
    *   **Answer:** Inverse mapping avoids gaps and holes in the output image, which can occur with forward mapping when multiple input pixels map to the same output pixel or when no input pixel maps to a particular output pixel.

5. **Question:** Write the matrix for a rotation of 45 degrees counter-clockwise.
    * **Answer:**
        ```
        R = | cos(45)  -sin(45)  0 |
            | sin(45)   cos(45)  0 |
            | 0        0       1 |
        ```
        Which is approximately:
        ```
        R = | 0.707  -0.707  0 |
            | 0.707   0.707  0 |
            | 0        0       1 |
