---
title: "Circle drawing algorithms - Midpoint Circle generation algorithm, Bresenham’s Circle drawing algorithm."
subject: "COMPUTER GRAPHICS & MULTIMEDIA"
module: "Module 1: Basics of Computer graphics "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b81d"
status: "completed"
scrapedAt: "2026-05-20T16:43:17.004Z"
---
# COMPUTER GRAPHICS & MULTIMEDIA - Module 1: Basics of Computer Graphics

## Topic: Circle Drawing Algorithms - Midpoint Circle Generation Algorithm & Bresenham's Circle Drawing Algorithm

**Learning Outcomes:**

*   Understand the basic concepts of circle drawing in computer graphics.
*   Explain the principles behind the Midpoint Circle Generation Algorithm.
*   Explain the principles behind Bresenham's Circle Drawing Algorithm.
*   Implement both the Midpoint Circle Generation Algorithm and Bresenham's Circle Drawing Algorithm.
*   Compare and contrast the two algorithms, noting their advantages and disadvantages.
*   Apply the octant symmetry property of a circle for efficient drawing.

### 1. Introduction to Circle Drawing in Computer Graphics

*   **Challenge:** Directly plotting points based on the circle equation (x² + y² = r²) is computationally expensive (due to square root operations) and can result in uneven spacing between pixels (especially noticeable with integer pixel coordinates).
*   **Goal:** Develop efficient algorithms that approximate a circle using only integer arithmetic, minimizing computations and producing smooth, aesthetically pleasing circles.
*   **Key Concept: Octant Symmetry:** A circle exhibits symmetry across its x-axis, y-axis, and the lines x = y and x = -y. This allows us to calculate points for only one octant (e.g., the octant from 0 to 45 degrees) and then use symmetry to derive the coordinates for the other seven octants.

    *   **Octant Mapping:**  Given a point (x, y) in the first octant (0 to 45 degrees):
        *   (x, y)
        *   (y, x)
        *   (-x, y)
        *   (-y, x)
        *   (x, -y)
        *   (y, -x)
        *   (-x, -y)
        *   (-y, -x)

### 2. Midpoint Circle Generation Algorithm

*   **Principle:** Uses the *implicit* form of the circle equation (F(x, y) = x² + y² - r² = 0) to determine which pixel is closer to the true circle boundary.
*   **Midpoint:** The algorithm considers the midpoint between two candidate pixels. If the midpoint lies *inside* the circle (F(x, y) < 0), the pixel above it is closer. If the midpoint lies *outside* the circle (F(x, y) > 0), the pixel below it is closer.  If the midpoint lies *on* the circle (F(x, y) = 0), either pixel can be chosen.
*   **Algorithm Steps (Focusing on the first octant - 0 to 45 degrees):**

    1.  **Input:** Circle radius `r`.
    2.  **Initialization:**
        *   (x, y) = (0, r)  (Starting point)
        *   Decision parameter: `p = 1 - r` (Initial midpoint value)
    3.  **Loop until x >= y:** (Stop when we reach the 45-degree line)
        *   **Plot:**  Plot the 8 symmetrical points derived from (x, y).
        *   **Decision:**
            *   If `p < 0`: The midpoint is inside the circle. Choose the pixel directly to the right (East).
                *   `x = x + 1`
                *   `y = y` (y remains the same)
                *   `p = p + 2x + 1` (Update the decision parameter)
            *   Else `p >= 0`: The midpoint is outside or on the circle. Choose the pixel diagonally down and to the right (South-East).
                *   `x = x + 1`
                *   `y = y - 1`
                *   `p = p + 2x - 2y + 1` (Update the decision parameter)
    4.  **End Loop**

*   **Explanation of Decision Parameter Update:** The updates to 'p' are derived from analyzing the difference between the squared distances to the center from two possible candidate pixels. By using incremental updates, the algorithm avoids costly multiplications and square roots.

*   **Example:**  Draw a circle with radius `r = 10`.

    | Iteration | x   | y   | p     | Decision | New (x, y) |
    | --------- | --- | --- | ----- | -------- | ---------- |
    | 0         | 0   | 10  | -9    | p < 0    | (1, 10)    |
    | 1         | 1   | 10  | -7    | p < 0    | (2, 10)    |
    | 2         | 2   | 10  | -3    | p < 0    | (3, 10)    |
    | 3         | 3   | 10  | 3     | p >= 0   | (4, 9)     |
    | 4         | 4   | 9   | -3    | p < 0    | (5, 9)     |
    | 5         | 5   | 9   | 5     | p >= 0   | (6, 8)     |
    | 6         | 6   | 8   | -3    | p < 0    | (7, 8)     |
    | 7         | 7   | 8   | 9     | p >= 0   | (8, 7)     |
    | 8         | 8   | 7   | 5     | p >= 0   | (9, 6)     |
    | 9         | 9   | 6   | 5     | p >= 0   | (10, 5)    |
    | 10        | 10  | 5   | 19    | p >= 0   | (11, 4)    |  (Algorithm stops here because x > y in previous step)
    Plot the 8 symmetric points for each (x,y) calculated.

### 3. Bresenham's Circle Drawing Algorithm

*   **Principle:** Similar to the Midpoint Algorithm, it utilizes an *error term* or *decision parameter* to determine the closest pixel to the true circle, but it is generally considered more efficient due to simpler calculations.  It also avoids floating-point arithmetic (using only integers).
*   **Algorithm Steps (Focusing on the first octant - 0 to 45 degrees):**

    1.  **Input:** Circle radius `r`.
    2.  **Initialization:**
        *   (x, y) = (0, r)
        *   Decision parameter: `p = 3 - 2r`
    3.  **Loop until x >= y:**
        *   **Plot:** Plot the 8 symmetrical points derived from (x, y).
        *   **Decision:**
            *   If `p < 0`: Choose the pixel directly to the right (East).
                *   `x = x + 1`
                *   `y = y`
                *   `p = p + 4x + 6`
            *   Else `p >= 0`: Choose the pixel diagonally down and to the right (South-East).
                *   `x = x + 1`
                *   `y = y - 1`
                *   `p = p + 4(x - y) + 10`
    4.  **End Loop**

*   **Explanation of Decision Parameter Update:** Again, the updates to 'p' are carefully derived to only involve integer additions and subtractions, making the algorithm highly efficient.

*   **Example:** Draw a circle with radius `r = 10`.

    | Iteration | x   | y   | p      | Decision | New (x, y) |
    | --------- | --- | --- | ------ | -------- | ---------- |
    | 0         | 0   | 10  | -17    | p < 0    | (1, 10)    |
    | 1         | 1   | 10  | -11    | p < 0    | (2, 10)    |
    | 2         | 2   | 10  | -1     | p < 0    | (3, 10)    |
    | 3         | 3   | 10  | 11     | p >= 0   | (4, 9)     |
    | 4         | 4   | 9   | -5     | p < 0    | (5, 9)     |
    | 5         | 5   | 9   | 15     | p >= 0   | (6, 8)     |
    | 6         | 6   | 8   | 1      | p < 0    | (7, 8)     |
    | 7         | 7   | 8   | 25     | p >= 0   | (8, 7)     |
    | 8         | 8   | 7   | 15     | p >= 0   | (9, 6)     |
    | 9         | 9   | 6   | 11     | p >= 0   | (10, 5)    |
    | 10        | 10  | 5   | 11     | p >= 0   | (11, 4)    |  (Algorithm stops here because x > y in previous step)

    Plot the 8 symmetric points for each (x,y) calculated.

### 4. Comparison of Midpoint Circle Generation and Bresenham's Circle Drawing Algorithms

| Feature           | Midpoint Circle Algorithm                         | Bresenham's Circle Algorithm                         |
| ----------------- | ----------------------------------------------- | ---------------------------------------------------- |
| **Principle**     | Midpoint evaluation of circle function.          | Error accumulation based on integer arithmetic.    |
| **Decision Parameter** | F(x, y) = x² + y² - r²                        | Derived from integer distances to circle boundary. |
| **Computational Cost** | Slightly more computationally intensive due to more complex update equations for 'p'. |  Generally slightly faster due to simpler update equations for 'p'.  |
| **Arithmetic**      | Integer arithmetic only                          | Integer arithmetic only                              |
| **Implementation**| Straightforward to implement.                 | Straightforward to implement.                 |
| **Accuracy**      | Produces visually similar results.                  | Produces visually similar results.                   |
| **Overall**      | Well-suited for educational purposes.            | Favored for performance-critical applications.      |

### 5. Implementation (Pseudo-Code)

**Midpoint Circle Algorithm (Pseudo-Code):**

```
function midpointCircle(radius):
  x = 0
  y = radius
  p = 1 - radius

  while x <= y:
    plotCirclePoints(x, y) // Plot the 8 symmetric points

    if p < 0:
      x = x + 1
      p = p + 2*x + 1
    else:
      x = x + 1
      y = y - 1
      p = p + 2*x - 2*y + 1
```

**Bresenham's Circle Algorithm (Pseudo-Code):**

```
function bresenhamCircle(radius):
  x = 0
  y = radius
  p = 3 - 2*radius

  while x <= y:
    plotCirclePoints(x, y) // Plot the 8 symmetric points

    if p < 0:
      x = x + 1
      p = p + 4*x + 6
    else:
      x = x + 1
      y = y - 1
      p = p + 4*(x - y) + 10
```

**Plotting the Circle Points (Symmetry Function):**

```
function plotCirclePoints(x, y):
  // Assuming (0, 0) is the circle center
  plotPixel(x, y)
  plotPixel(y, x)
  plotPixel(-x, y)
  plotPixel(-y, x)
  plotPixel(x, -y)
  plotPixel(y, -x)
  plotPixel(-x, -y)
  plotPixel(-y, -x)
```

### 6. Practice Questions/Exercises

1.  **Derivation:**  Explain in your own words the rationale behind the decision parameter update equations in both the Midpoint and Bresenham algorithms. Why do they avoid square root calculations?
    *   **Answer:**  The update equations are derived from analyzing the difference in squared distances between the center of the circle and the potential next pixels. This analysis, along with clever algebraic manipulation, allows for incremental updates using only additions and subtractions, avoiding the need for computationally expensive square root calculations.

2.  **Implementation:**  Write a code snippet (in your preferred language) implementing either the Midpoint or Bresenham's circle drawing algorithm.  Include the `plotCirclePoints` function.
    *   **(Example in Python)**:
        ```python
        import matplotlib.pyplot as plt

        def plot_circle_points(x, y, xc, yc): #xc and yc are center coordinates.
            plt.plot(xc + x, yc + y, 'ro')
            plt.plot(xc - x, yc + y, 'ro')
            plt.plot(xc + x, yc - y, 'ro')
            plt.plot(xc - x, yc - y, 'ro')
            plt.plot(xc + y, yc + x, 'ro')
            plt.plot(xc - y, yc + x, 'ro')
            plt.plot(xc + y, yc - x, 'ro')
            plt.plot(xc - y, yc - x, 'ro')


        def bresenham_circle(radius, xc=0, yc=0):  # added center coordinates for better usage
            x = 0
            y = radius
            p = 3 - 2 * radius

            plt.figure(figsize=(6, 6))  # Adjust figure size as needed
            plt.xlim(xc - radius - 1, xc + radius + 1)  # Set x limits
            plt.ylim(yc - radius - 1, yc + radius + 1)  # Set y limits
            plt.gca().set_aspect('equal', adjustable='box') # Ensure circle looks like circle

            while x <= y:
                plot_circle_points(x, y, xc, yc)

                if p < 0:
                    x += 1
                    p += 4 * x + 6
                else:
                    x += 1
                    y -= 1
                    p += 4 * (x - y) + 10

            plt.title(f"Bresenham's Circle (Radius = {radius})")
            plt.grid(True)  # Add a grid for easier visualization
            plt.show()


        # Example usage
        bresenham_circle(radius=50, xc=100, yc=100)  # Example with a bigger radius and offset

        ```

3.  **Symmetry:** Why is the octant symmetry property crucial for efficient circle drawing?
    *   **Answer:**  Octant symmetry reduces the computational effort by a factor of 8. Instead of calculating points for the entire circle, we only need to compute points for a single octant and then use symmetry to determine the coordinates for the remaining seven.

4.  **Advantages/Disadvantages:** Discuss the advantages and disadvantages of each algorithm (Midpoint and Bresenham).
    *   **(See Comparison Table above)**

5.  **Trace:** Trace the execution of either the Midpoint or Bresenham's algorithm for drawing a circle of radius 5, listing the (x, y) coordinates generated in each iteration.  Show the value of the decision parameter at each step.

### 7. Important Points to Remember

*   **Integer Arithmetic:** Both algorithms rely solely on integer arithmetic, making them efficient.
*   **Decision Parameter:** The key to both algorithms is the carefully calculated decision parameter that determines which pixel is closer to the true circle.
*   **Octant Symmetry:**  Always leverage octant symmetry to minimize calculations.
*   **Algorithm Choice:** While both algorithms achieve similar results, Bresenham's algorithm is often preferred for performance-critical applications due to its slightly simpler calculations.
*   **Center Coordinates:** When implementing these algorithms in a program, remember to add the center coordinates to each calculated (x, y) point to correctly position the circle on the screen.
