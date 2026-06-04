---
title: "Chains"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 1: The image, its representation and properties "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bc31"
status: "completed"
scrapedAt: "2026-05-20T16:52:46.801Z"
---
## Digital Image Processing: Module 1 - Chains

**Topic: Chains (from The image, its representation and properties)**

**Learning Outcomes:**

*   Understand the concept of a chain code for representing boundaries.
*   Be able to generate a chain code for a given digital boundary.
*   Understand the different types of chain codes (4-connectivity, 8-connectivity).
*   Understand the advantages and disadvantages of using chain codes.
*   Be able to calculate the length and other properties of a boundary from its chain code.
*   Understand normalization techniques for chain codes (rotation invariance).

---

### 1. Introduction to Chains

*   **Definition:** A chain code is a way to represent a boundary or contour of an object in a digital image. It is a sequence of directional numbers that specify the path of the boundary between adjacent pixels. It provides a compact and efficient way to store boundary information.
*   **Purpose:** Chain codes are primarily used for:
    *   Boundary representation
    *   Shape analysis
    *   Object recognition
    *   Image compression
    *   Feature extraction

### 2. Types of Chain Codes: Connectivity

*   The type of chain code depends on the type of connectivity considered for adjacent pixels.

    *   **2.1. 4-Connectivity Chain Code:**
        *   Considers only horizontal and vertical neighbors.
        *   Each pixel has 4 possible neighbors (N, E, S, W).
        *   Chain code directions are typically numbered:
            *   0: East (E)
            *   1: North (N)
            *   2: West (W)
            *   3: South (S)

        *   **Example:**
            *   Imagine a small square object.  A possible 4-connected chain code would be `000333222111`. This describes traversing the edges of the square.

    *   **2.2. 8-Connectivity Chain Code:**
        *   Considers horizontal, vertical, and diagonal neighbors.
        *   Each pixel has 8 possible neighbors.
        *   Chain code directions are typically numbered:
            *   0: East (E)
            *   1: Northeast (NE)
            *   2: North (N)
            *   3: Northwest (NW)
            *   4: West (W)
            *   5: Southwest (SW)
            *   6: South (S)
            *   7: Southeast (SE)

        *   **Example:**
            *   A diagonal line could be represented more accurately with an 8-connected chain code, e.g., `11111111` (for a line going from SW to NE).

*   **Key Difference:** 8-connectivity provides a more accurate representation of diagonal lines and curved boundaries compared to 4-connectivity.

### 3. Generating a Chain Code

*   **Steps:**

    1.  **Identify a Starting Point:** Choose an arbitrary starting pixel on the boundary. The choice of starting point does not affect the shape of the boundary, but will rotate the chain code.

    2.  **Find the Next Boundary Pixel:** From the current pixel, search its neighbors (based on the chosen connectivity - 4 or 8) for the next boundary pixel.

    3.  **Determine the Direction:**  Record the direction number corresponding to the neighbor found in step 2. This is the chain code element.

    4.  **Move to the Next Pixel:**  Set the found neighbor as the current pixel.

    5.  **Repeat:** Repeat steps 2-4 until you return to the starting pixel.  This completes the chain.

*   **Example (4-Connectivity):**

    *   Consider a simple shape represented by the following binary image fragment (1 represents the object, 0 represents background):

        ```
        0 0 0 0
        0 1 1 0
        0 1 1 0
        0 0 0 0
        ```

    *   Let's choose the top-left '1' as the starting point (coordinates (1,1) - assuming 0-based indexing).

    *   **Chain Code Generation:**

        1.  Start at (1,1).  Move East (direction 0) to (1,2).  Chain: `0`
        2.  Move South (direction 3) to (2,2).  Chain: `03`
        3.  Move West (direction 2) to (2,1).  Chain: `032`
        4.  Move North (direction 1) to (1,1).  Chain: `0321`

    *   Therefore, the 4-connected chain code is `0321`.

### 4. Advantages and Disadvantages of Chain Codes

*   **Advantages:**

    *   **Compact Representation:**  Chain codes are more compact than storing all boundary pixel coordinates, especially for long, smooth boundaries.
    *   **Easy Computation of Properties:** Boundary length, perimeter, and other shape descriptors can be easily calculated from the chain code.
    *   **Rotation Invariance (with Normalization):** Can be made rotation invariant by a suitable normalization technique.

*   **Disadvantages:**

    *   **Sensitive to Noise:**  Small changes in the boundary due to noise can significantly alter the chain code.
    *   **Resolution Dependent:** The chain code depends on the resolution of the image.
    *   **Quantization Errors:** The digitization process introduces quantization errors, leading to an approximation of the true boundary.

### 5. Calculating Boundary Properties from Chain Codes

*   **5.1. Boundary Length/Perimeter:**

    *   **4-Connectivity:**
        *   Each horizontal or vertical link (directions 0, 1, 2, 3) has a length of 1.
        *   Length = Number of links in the chain code.

    *   **8-Connectivity:**
        *   Each horizontal or vertical link (directions 0, 2, 4, 6) has a length of 1.
        *   Each diagonal link (directions 1, 3, 5, 7) has a length of √2 (approximately 1.414).
        *   Length = (Number of horizontal/vertical links) + (√2 * Number of diagonal links)

*   **Example:**

    *   Consider the 8-connected chain code: `01234567`
    *   Number of horizontal/vertical links: 4 (0, 2, 4, 6)
    *   Number of diagonal links: 4 (1, 3, 5, 7)
    *   Length = 4 + (√2 * 4) ≈ 4 + (1.414 * 4) ≈ 9.656

*   **5.2. Area:**  Area enclosed by the contour can be estimated using Green's theorem, which can be adapted to chain codes.  The formula involves summing contributions from each link in the chain.  (The exact formula is more complex and beyond the scope of a brief introduction).

### 6. Normalization of Chain Codes for Rotation Invariance

*   **Problem:** Rotating an object in an image will produce a different chain code even though the shape remains the same.
*   **Solution: Chain Code Normalization**
*   **Method:**  Represent the chain code as the *first difference* of the original chain code.  The first difference calculates the difference between adjacent code elements (modulo the number of directions - 4 or 8).

*   **Algorithm:**

    1.  **Original Chain Code:** `c1 c2 c3 ... cn`
    2.  **First Difference:** `d1 d2 d3 ... dn`
        *   `d1 = (c2 - c1) mod N`  (where N is the number of directions, 4 or 8)
        *   `d2 = (c3 - c2) mod N`
        *   `...`
        *   `dn = (c1 - cn) mod N`  (wrap around to the beginning)

    3.  **Choose a Canonical Starting Point:** Rotate the difference chain `d1 d2 d3 ... dn` cyclically until the smallest element appears first in the sequence.

*   **Example (4-Connectivity):**

    1.  Original Chain Code: `0321`
    2.  First Difference:
        *   `d1 = (3 - 0) mod 4 = 3`
        *   `d2 = (2 - 3) mod 4 = -1 mod 4 = 3`
        *   `d3 = (1 - 2) mod 4 = -1 mod 4 = 3`
        *   `d4 = (0 - 1) mod 4 = -1 mod 4 = 3`
        *   Difference Chain: `3333`

        In this simple example, the first difference is the same regardless of the rotation. In other, more complex examples, this rotation invariance will be evident.

    3.  Canonical Starting Point: All elements are the same, so no cyclic rotation is needed.

*   **Benefits of Normalization:** The normalized chain code remains the same regardless of the object's rotation. However, be aware that the starting point of the original chain can still affect the *absolute* value of the normalized chain code. It's invariant in the sense that it will still generate the same *shape* regardless of rotation.

### 7. Practice Questions/Exercises

1.  **Generate the 4-connected chain code for the following boundary, starting at the top-left '1':**

    ```
    0 0 0
    0 1 1
    0 1 0
    ```

2.  **Generate the 8-connected chain code for the same boundary (starting at the same point).**

3.  **Calculate the length of the boundary represented by the 4-connected chain code `00321` and the 8-connected chain code `0127`.**

4.  **Normalize the 4-connected chain code `1032` for rotation using the first difference method.**

### 8. Answers to Practice Questions

1.  **4-connected chain code:** `0321`

2.  **8-connected chain code:** `0642`

3.  **Length Calculation:**

    *   4-connected chain code `00321`:  Length = 5
    *   8-connected chain code `0127`: Length = 2 (horizontal/vertical) + 2√2 (diagonal) ≈ 2 + 2 * 1.414 ≈ 4.828

4.  **Normalization of `1032`:**

    *   First Difference:
        *   `d1 = (0 - 1) mod 4 = 3`
        *   `d2 = (3 - 0) mod 4 = 3`
        *   `d3 = (2 - 3) mod 4 = 3`
        *   `d4 = (1 - 2) mod 4 = 3`
        *   Difference Chain: `3333`

    *   Cyclic Rotation (Canonical Starting Point): Since all elements are the same, no cyclic rotation is necessary. Normalized Chain Code: `3333`

### 9. Important Points to Remember

*   Chain codes are a compact way to represent boundaries.
*   4-connectivity and 8-connectivity offer different levels of accuracy.
*   8-connectivity is generally preferred for curved boundaries but increases complexity.
*   Boundary length can be easily computed from chain codes.
*   Normalization makes chain codes rotation invariant.
*   Chain codes are sensitive to noise and quantization.
