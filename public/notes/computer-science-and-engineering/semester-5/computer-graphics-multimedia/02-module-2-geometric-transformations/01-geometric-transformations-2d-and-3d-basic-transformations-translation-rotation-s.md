---
title: "Geometric transformations - 2D and 3D basic transformations - Translation, Rotation, Scaling, Reflection and Shearing, Matrix representations and homogeneous coordinates."
subject: "COMPUTER GRAPHICS & MULTIMEDIA"
module: "Module 2: Geometric transformations "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b81f"
status: "completed"
scrapedAt: "2026-05-20T16:43:17.711Z"
---
# COMPUTER GRAPHICS & MULTIMEDIA - Module 2: Geometric Transformations

## Topic: Geometric Transformations - 2D and 3D Basic Transformations

### Learning Outcomes:

*   Understand the concept of geometric transformations in computer graphics.
*   Identify and apply basic 2D transformations: Translation, Rotation, Scaling, Reflection, and Shearing.
*   Identify and apply basic 3D transformations: Translation, Rotation, Scaling, Reflection, and Shearing.
*   Represent transformations using matrices.
*   Understand the concept and advantages of homogeneous coordinates.
*   Combine multiple transformations using matrix multiplication.

### 1. Introduction to Geometric Transformations

*   **Definition:** Geometric transformations are operations that change the position, orientation, size, or shape of objects.  They are fundamental to computer graphics for tasks like:
    *   Modeling objects
    *   Positioning objects in a scene
    *   Creating animations
    *   Viewing scenes from different perspectives.

*   **Types of Transformations:** We'll focus on the following basic transformations:
    *   Translation
    *   Rotation
    *   Scaling
    *   Reflection
    *   Shearing

### 2. 2D Transformations

#### 2.1 Translation

*   **Definition:** Translation moves an object in a straight line from one position to another.

*   **Equations:**
    *   x' = x + tx
    *   y' = y + ty
    *   Where:
        *   (x, y) is the original point
        *   (x', y') is the transformed point
        *   (tx, ty) is the translation vector (distance to move in x and y).

*   **Matrix Representation (using Homogeneous Coordinates):**

    ```
    | 1  0  tx |
    | 0  1  ty |
    | 0  0  1  |
    ```

    Applied to a point (x, y, 1):

    ```
    | 1  0  tx |   | x |   | x + tx |
    | 0  1  ty | * | y | = | y + ty |
    | 0  0  1  |   | 1 |   |   1   |
    ```

*   **Example:** Translate the point (2, 3) by (5, -1).
    *   x' = 2 + 5 = 7
    *   y' = 3 + (-1) = 2
    *   The transformed point is (7, 2).

#### 2.2 Rotation

*   **Definition:** Rotation turns an object about a specified pivot point. Usually, the origin (0, 0) is the pivot point.

*   **Equations (Rotation about the origin):**
    *   x' = x * cos(θ) - y * sin(θ)
    *   y' = x * sin(θ) + y * cos(θ)
    *   Where:
        *   (x, y) is the original point
        *   (x', y') is the transformed point
        *   θ is the angle of rotation (counter-clockwise, in radians or degrees).

*   **Matrix Representation (Rotation about the origin, using Homogeneous Coordinates):**

    ```
    | cos(θ)  -sin(θ)  0 |
    | sin(θ)   cos(θ)  0 |
    |   0        0      1 |
    ```

*   **Example:** Rotate the point (1, 0) by 90 degrees (π/2 radians) counter-clockwise about the origin.
    *   x' = 1 * cos(π/2) - 0 * sin(π/2) = 1 * 0 - 0 * 1 = 0
    *   y' = 1 * sin(π/2) + 0 * cos(π/2) = 1 * 1 + 0 * 0 = 1
    *   The transformed point is (0, 1).

*   **Rotation about an arbitrary point (xp, yp):**
    1.  Translate the object so that (xp, yp) is at the origin.
    2.  Rotate about the origin.
    3.  Translate the object back to its original position.
    *   This is achieved by concatenating transformation matrices (see Section 5).

#### 2.3 Scaling

*   **Definition:** Scaling changes the size of an object.

*   **Equations:**
    *   x' = x * sx
    *   y' = y * sy
    *   Where:
        *   (x, y) is the original point
        *   (x', y') is the transformed point
        *   sx is the scaling factor in the x-direction
        *   sy is the scaling factor in the y-direction
    *   If sx = sy, it's uniform scaling.  If sx != sy, it's differential scaling.

*   **Matrix Representation (using Homogeneous Coordinates):**

    ```
    | sx  0   0 |
    | 0   sy  0 |
    | 0   0   1 |
    ```

*   **Example:** Scale the point (2, 4) by sx = 2 and sy = 0.5.
    *   x' = 2 * 2 = 4
    *   y' = 4 * 0.5 = 2
    *   The transformed point is (4, 2).

*   **Scaling about a fixed point (xf, yf):** Similar to rotation, a sequence of translate-scale-translate is required.

#### 2.4 Reflection

*   **Definition:** Reflection creates a mirror image of an object.

*   **Reflection about the x-axis:**
    *   x' = x
    *   y' = -y
    *   Matrix:
        ```
        | 1  0  0 |
        | 0 -1  0 |
        | 0  0  1 |
        ```

*   **Reflection about the y-axis:**
    *   x' = -x
    *   y' = y
    *   Matrix:
        ```
        | -1  0  0 |
        |  0  1  0 |
        |  0  0  1 |
        ```

*   **Reflection about the origin:**
    *   x' = -x
    *   y' = -y
    *   Matrix:
        ```
        | -1  0  0 |
        |  0 -1  0 |
        |  0  0  1 |
        ```

*   **Reflection about the line y = x:**
    *   x' = y
    *   y' = x
    *   Matrix:
        ```
        | 0  1  0 |
        | 1  0  0 |
        | 0  0  1 |
        ```

*   **Reflection about an arbitrary line:** Requires a sequence of translate-rotate-reflect-rotate-translate.

#### 2.5 Shearing

*   **Definition:** Shearing distorts the shape of an object by shifting points along a specified direction proportional to their distance from a reference line.

*   **Shear in the x-direction:**
    *   x' = x + shx * y
    *   y' = y
    *   Matrix:
        ```
        | 1  shx  0 |
        | 0   1   0 |
        | 0   0   1 |
        ```
        *shx* is the x-shear factor

*   **Shear in the y-direction:**
    *   x' = x
    *   y' = shy * x + y
    *   Matrix:
        ```
        | 1   0  0 |
        | shy 1  0 |
        | 0   0  1 |
        ```
       *shy* is the y-shear factor

*   **Example:** Shear the point (2, 3) in the x-direction with shx = 1.
    *   x' = 2 + 1 * 3 = 5
    *   y' = 3
    *   The transformed point is (5, 3).

### 3. 3D Transformations

The same principles apply to 3D transformations, but with an added dimension (z).  Matrices become 4x4 instead of 3x3.

#### 3.1 Translation (3D)

*   **Equations:**
    *   x' = x + tx
    *   y' = y + ty
    *   z' = z + tz

*   **Matrix Representation:**

    ```
    | 1  0  0  tx |
    | 0  1  0  ty |
    | 0  0  1  tz |
    | 0  0  0  1  |
    ```

#### 3.2 Rotation (3D)

*   **Definition:** Rotation in 3D requires specifying an axis of rotation.  Common rotation axes are the x, y, and z axes.

*   **Rotation about the x-axis:**
    *   x' = x
    *   y' = y * cos(θ) - z * sin(θ)
    *   z' = y * sin(θ) + z * cos(θ)
    *   Matrix:
        ```
        | 1   0        0       0 |
        | 0  cos(θ) -sin(θ)   0 |
        | 0  sin(θ)  cos(θ)   0 |
        | 0   0        0       1 |
        ```

*   **Rotation about the y-axis:**
    *   x' = x * cos(θ) + z * sin(θ)
    *   y' = y
    *   z' = -x * sin(θ) + z * cos(θ)
    *   Matrix:
        ```
        | cos(θ)  0  sin(θ)  0 |
        |   0     1    0     0 |
        | -sin(θ) 0  cos(θ)  0 |
        |   0     0    0     1 |
        ```

*   **Rotation about the z-axis:**
    *   x' = x * cos(θ) - y * sin(θ)
    *   y' = x * sin(θ) + y * cos(θ)
    *   z' = z
    *   Matrix:
        ```
        | cos(θ) -sin(θ)  0  0 |
        | sin(θ)  cos(θ)  0  0 |
        |   0       0      1  0 |
        |   0       0      0  1 |
        ```

*   **Rotation about an arbitrary axis:** More complex, typically involves decomposing the rotation into rotations about the principal axes.

#### 3.3 Scaling (3D)

*   **Equations:**
    *   x' = x * sx
    *   y' = y * sy
    *   z' = z * sz

*   **Matrix Representation:**

    ```
    | sx  0   0   0 |
    | 0   sy  0   0 |
    | 0   0   sz  0 |
    | 0   0   0   1 |
    ```

#### 3.4 Reflection (3D)

*   Reflection can occur across any of the principal planes (xy, yz, xz).

*   **Reflection about the xy-plane:**
    * x' = x
    * y' = y
    * z' = -z
    * Matrix:
      ```
      | 1  0  0  0 |
      | 0  1  0  0 |
      | 0  0 -1  0 |
      | 0  0  0  1 |
      ```
*   **Reflection about the yz-plane:**
    * x' = -x
    * y' = y
    * z' = z
    * Matrix:
      ```
      | -1  0  0  0 |
      | 0  1  0  0 |
      | 0  0  1  0 |
      | 0  0  0  1 |
      ```
*   **Reflection about the xz-plane:**
    * x' = x
    * y' = -y
    * z' = z
    * Matrix:
      ```
      | 1  0  0  0 |
      | 0 -1  0  0 |
      | 0  0  1  0 |
      | 0  0  0  1 |
      ```
#### 3.5 Shearing (3D)

*   Similar to 2D shearing, but with more possibilities for specifying the direction of shear relative to the principal axes. For example, shear along the x-axis depending on the y and z coordinates:

*   x' = x + shy * y + shz * z
*   y' = y
*   z' = z

    ```
    | 1   shy  shz  0 |
    | 0   1    0    0 |
    | 0   0    1    0 |
    | 0   0    0    1 |
    ```

### 4. Homogeneous Coordinates

*   **Definition:** Homogeneous coordinates represent a point (x, y) in 2D as (x, y, 1) or (x, y, w), where w ≠ 0.  In 3D, (x, y, z) becomes (x, y, z, 1) or (x, y, z, w).  The actual 2D point is then (x/w, y/w).  If w=0, it represents a point at infinity, useful for representing directions or vectors.

*   **Advantages of Homogeneous Coordinates:**
    *   **Unified Representation:** Allows all transformations (translation, rotation, scaling, etc.) to be represented as matrix multiplications.
    *   **Concatenation:**  Multiple transformations can be combined into a single matrix by multiplying their individual matrices. This improves efficiency.
    *   **Perspective Projection:** Essential for perspective projections in 3D graphics (not covered in this module).
    *   **Allows translation to be represented as a matrix multiplication.** Without homogeneous coordinates, translation is an addition operation, not a multiplication.

*   **Converting back to Cartesian Coordinates:**  Divide the homogeneous coordinates by the last coordinate (w).
    *   (x, y, w) -> (x/w, y/w) in 2D
    *   (x, y, z, w) -> (x/w, y/w, z/w) in 3D

### 5. Combining Transformations (Concatenation)

*   **Principle:**  Multiple transformations can be combined into a single composite transformation by multiplying their corresponding matrices.

*   **Order Matters:** Matrix multiplication is not commutative (A * B ≠ B * A).  The order in which transformations are applied is crucial.

*   **Example:**  To rotate an object about an arbitrary point (xp, yp), we need to:
    1.  Translate the object so that (xp, yp) is at the origin (T).
    2.  Rotate the object about the origin (R).
    3.  Translate the object back to its original position (T⁻¹).

    The composite transformation matrix M is:  **M = T⁻¹ * R * T**

    Where T⁻¹ is the inverse of the translation matrix T.

*   **General Form:** If you have transformations T1, T2, and T3 to be applied in that order, the combined transformation matrix is M = T3 * T2 * T1.  This combined matrix is then applied to the points of the object.

### 6. Important Points to Remember:

*   Transformation matrices are applied to *column vectors* representing points.
*   The order of transformations matters significantly.
*   Homogeneous coordinates are essential for representing all transformations as matrix multiplications and enabling concatenation.
*   Understand the matrix representations for each basic transformation in both 2D and 3D.
*   The last row of a 2D transformation matrix (using homogeneous coordinates) is always (0, 0, 1).
*   The last row of a 3D transformation matrix (using homogeneous coordinates) is always (0, 0, 0, 1).

### 7. Practice Questions/Exercises:

1.  **2D Translation:** Translate the point (4, 2) by (-1, 3).  Write the transformation matrix and apply it to the point.

    *   **Answer:**
        *   Translation Matrix: `| 1  0  -1 |`
                                 `| 0  1   3 |`
                                 `| 0  0   1 |`
        *   (4,2) in homogeneous coordinates is (4, 2, 1).
        *   `| 1  0  -1 |   | 4 |   | 3 |`
            `| 0  1   3 | * | 2 | = | 5 |`
            `| 0  0   1 |   | 1 |   | 1 |`
        *   Transformed point: (3, 5)

2.  **2D Rotation:** Rotate the point (1, 1) by 45 degrees (π/4 radians) counter-clockwise about the origin.  Write the transformation matrix and apply it to the point.  (Use approximations for cos(π/4) and sin(π/4) as 0.707).

    *   **Answer:**
        *   Rotation Matrix:  `| 0.707  -0.707  0 |`
                                 `| 0.707   0.707  0 |`
                                 `|   0       0      1 |`
        *   (1, 1) in homogeneous coordinates is (1, 1, 1).
        *   `| 0.707  -0.707  0 |   | 1 |   | 0      |`
            `| 0.707   0.707  0 | * | 1 | = | 1.414  |`
            `|   0       0      1 |   | 1 |   | 1      |`
        *   Transformed point: approximately (0, 1.414)

3.  **2D Scaling:** Scale the point (3, 5) by sx = 2 and sy = 0.5.  Write the transformation matrix and apply it to the point.

    *   **Answer:**
        *   Scaling Matrix:  `| 2  0  0 |`
                               `| 0  0.5 0 |`
                               `| 0  0  1 |`
        *   (3, 5) in homogeneous coordinates is (3, 5, 1).
        *   `| 2  0  0 |   | 3 |   | 6  |`
            `| 0  0.5 0 | * | 5 | = | 2.5|`
            `| 0  0  1 |   | 1 |   | 1  |`
        *   Transformed point: (6, 2.5)

4.  **2D Combined Transformation:**  Translate the point (1, 2) by (3, 1) and then rotate it by 90 degrees (π/2 radians) counter-clockwise about the origin. Find the combined transformation matrix.

    *   **Answer:**
        * Translation Matrix T:
          `| 1  0  3 |`
          `| 0  1  1 |`
          `| 0  0  1 |`
        * Rotation Matrix R:
          `| 0  -1  0 |`
          `| 1  0   0 |`
          `| 0  0   1 |`

        *Combined Matrix M = R * T:*
        `| 0  -1  0 |   | 1  0  3 |   | 0  -1  -1 |`
        `| 1  0   0 | * | 0  1  1 | = | 1  0   3 |`
        `| 0  0   1 |   | 0  0  1 |   | 0  0   1 |`
        * Transformed point:
          `| 0  -1  -1 |   | 1 |   | -3  |`
          `| 1  0   3 | * | 2 | = |  4  |`
          `| 0  0   1 |   | 1 |   |  1  |`
        * Transformed Point is (-3, 4)
5.  **3D Translation:** Translate the point (1, 2, 3) by (4, -1, 2). Write down the transformation matrix and the resultant point.

    *   **Answer:**
        *   Translation Matrix:
            ```
            | 1  0  0  4 |
            | 0  1  0 -1 |
            | 0  0  1  2 |
            | 0  0  0  1 |
            ```

        *   Transformed point: (5, 1, 5)

6.  **3D Scaling:** Scale the point (2, 3, 4) by sx = 0.5, sy = 2, and sz = 1.5.  Write down the transformation matrix and the resultant point.

    *   **Answer:**
        *   Scaling Matrix:
            ```
            | 0.5  0   0   0 |
            | 0   2   0   0 |
            | 0   0   1.5  0 |
            | 0   0   0   1 |
            ```

        *   Transformed point: (1, 6, 6)

7.  **3D Rotation:** Rotate the point (1, 0, 0) by 90 degrees about the Y-axis. Write down the transformation matrix and the resultant point.

      *   **Answer:**
            * Rotation Matrix (about Y-axis, θ = 90 degrees):
              ```
              | cos(θ)  0  sin(θ)  0 |
              |   0     1    0     0 |
              | -sin(θ) 0  cos(θ)  0 |
              |   0     0    0     1 |
              ```
              Since cos(90) = 0 and sin(90) = 1, the matrix becomes:
              ```
              |  0  0  1  0 |
              |  0  1  0  0 |
              | -1  0  0  0 |
              |  0  0  0  1 |
              ```
            * Transformed Point:
               (0, 0, -1)

### 8. Further Exploration

*   Investigate composite transformations for rotation about arbitrary axes in 3D.
*   Explore the use of transformation matrices in graphics libraries such as OpenGL or DirectX.
*   Research different interpolation techniques used in animation to create smooth transitions between transformations.
