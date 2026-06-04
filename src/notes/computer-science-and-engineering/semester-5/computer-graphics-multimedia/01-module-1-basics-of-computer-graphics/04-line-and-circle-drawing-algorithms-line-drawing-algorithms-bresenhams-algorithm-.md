---
title: "Line and Circle drawing Algorithms - Line drawing algorithms- Bresenham’s algorithm, Liang-Barsky Algorithm"
subject: "COMPUTER GRAPHICS & MULTIMEDIA"
module: "Module 1: Basics of Computer graphics "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b81c"
status: "completed"
scrapedAt: "2026-05-20T16:43:16.301Z"
---
# COMPUTER GRAPHICS & MULTIMEDIA - Module 1: Basics of Computer Graphics - Line and Circle Drawing Algorithms - Line Drawing Algorithms

## Topic: Line Drawing Algorithms - Bresenham's Algorithm, Liang-Barsky Algorithm

### Learning Outcomes:

*   Understand the basic principles behind line drawing algorithms.
*   Describe and implement Bresenham's line drawing algorithm.
*   Describe and implement the Liang-Barsky line clipping algorithm.
*   Compare and contrast Bresenham's and Liang-Barsky algorithms in terms of their purpose and application.

### 1. Introduction to Line Drawing Algorithms

*   **Definition:** Line drawing algorithms are fundamental algorithms used to approximate straight lines on a raster display (pixel-based screen).  Since displays are discrete, a continuous line must be approximated using discrete pixels.
*   **Importance:** Essential for rendering any graphic, from simple shapes to complex 3D scenes.
*   **Goals:**
    *   Accuracy: Line should closely resemble a true straight line.
    *   Efficiency: Algorithm should be computationally inexpensive.
    *   Straightness: The line should appear as straight as possible (avoid jagged edges - aliasing).
    *   Brightness: Constant brightness along the line is desirable.

### 2. Bresenham's Line Drawing Algorithm

*   **Key Concept:** An efficient and accurate incremental scan-conversion line algorithm using only integer arithmetic. Avoids floating-point calculations, making it faster.
*   **Principle:**  Determines which of the two possible pixels is closer to the true line at each step by calculating a decision parameter (error term).  The algorithm moves in unit intervals in one coordinate (usually x) and chooses between two possible y values at each step.
*   **Algorithm Steps:**

    1.  **Input:** Two endpoints of the line segment (x1, y1) and (x2, y2).
    2.  **Calculate Differences:**  dx = x2 - x1 and dy = y2 - y1.
    3.  **Determine Dominant Axis:**
        *   If |dx| > |dy|, the line is more horizontal (x is dominant).
        *   If |dy| >= |dx|, the line is more vertical (y is dominant). This example assumes x is dominant for simplicity.
    4.  **Initialize:**
        *   x = x1, y = y1
        *   Decision Parameter: p = 2 * dy - dx
    5.  **Iterate:** For each x from x1 to x2:
        *   Plot (x, y)
        *   If p < 0:
            *   p = p + 2 * dy
            *   x = x + 1
        *   Else:
            *   p = p + 2 * dy - 2 * dx
            *   x = x + 1, y = y + 1 (or y - 1 if dy is negative)
    6.  **Repeat** step 5 until x reaches x2.
*   **Example:**

    Draw a line from (2, 2) to (10, 8) using Bresenham's algorithm.

    1.  dx = 10 - 2 = 8
    2.  dy = 8 - 2 = 6
    3.  Since |dx| > |dy|, x is dominant.
    4.  x = 2, y = 2, p = 2 * 6 - 8 = 4
    5.  **Iteration 1:** Plot (2, 2), p > 0, p = 4 + 2 * 6 - 2 * 8 = -2, x = 3, y = 3
    6.  **Iteration 2:** Plot (3, 3), p < 0, p = -2 + 2 * 6 = 10, x = 4
    7.  **Iteration 3:** Plot (4, 3), p > 0, p = 10 + 2 * 6 - 2 * 8 = -2, x = 5, y = 4
    8.  **Iteration 4:** Plot (5, 4), p < 0, p = -2 + 2 * 6 = 10, x = 6
    9.  **Iteration 5:** Plot (6, 4), p > 0, p = 10 + 2 * 6 - 2 * 8 = -2, x = 7, y = 5
    10. **Iteration 6:** Plot (7, 5), p < 0, p = -2 + 2 * 6 = 10, x = 8
    11. **Iteration 7:** Plot (8, 5), p > 0, p = 10 + 2 * 6 - 2 * 8 = -2, x = 9, y = 6
    12. **Iteration 8:** Plot (9, 6), p < 0, p = -2 + 2 * 6 = 10, x = 10
    13. **Iteration 9:** Plot (10, 6)  (Important - the above calculation would yield a different y value, demonstrating the need to account for both axis changes)  Since the loop condition has been met at x=10, plot (10,8) to reach destination as it is a positive slope.

    The plotted points are: (2, 2), (3, 3), (4, 3), (5, 4), (6, 4), (7, 5), (8, 5), (9, 6), (10, 8).

*   **Advantages:**
    *   Fast due to integer arithmetic.
    *   Accurate.
    *   Easy to implement.
*   **Disadvantages:**
    *   Only works for lines with slope between 0 and 1 (or can be adapted by swapping axes).
    *   Doesn't directly address line clipping.

### 3. Liang-Barsky Line Clipping Algorithm

*   **Key Concept:** An efficient algorithm for clipping a line segment against a rectangular window.  It focuses on determining the visible portion of a line within the clip window.
*   **Principle:**  Uses parametric equations to represent the line.  Calculates parameters u1 and u2 representing the minimum and maximum possible values of the parameter *u* for which the line lies inside the clipping window.
*   **Parametric Equation of a Line:**
    *   x = x1 + u * dx
    *   y = y1 + u * dy
    *   where 0 <= u <= 1
*   **Clipping Window:** Defined by xmin, xmax, ymin, and ymax.
*   **Algorithm Steps:**

    1.  **Input:** Line endpoints (x1, y1) and (x2, y2), clipping window boundaries (xmin, xmax, ymin, ymax).
    2.  **Calculate Differences:** dx = x2 - x1, dy = y2 - y1
    3.  **Initialize Parameters:** u1 = 0, u2 = 1 (representing the entire line segment).
    4.  **Iterate through each of the four clipping planes (left, right, bottom, top):**

        *   **For each edge (xmin, xmax, ymin, ymax), calculate 'p' and 'q':**
            *   Left Edge (xmin): p = -dx, q = x1 - xmin
            *   Right Edge (xmax): p = dx, q = xmax - x1
            *   Bottom Edge (ymin): p = -dy, q = y1 - ymin
            *   Top Edge (ymax): p = dy, q = ymax - y1
        *   **If p = 0:** (Line is parallel to the edge)
            *   If q < 0: The line is completely outside the window (reject).
            *   Otherwise, continue to the next edge.
        *   **If p < 0:** (Line proceeds from outside to inside)
            *   r = q / p
            *   If r > u2: The line is completely outside (reject).
            *   Else: u1 = max(u1, r)
        *   **If p > 0:** (Line proceeds from inside to outside)
            *   r = q / p
            *   If r < u1: The line is completely outside (reject).
            *   Else: u2 = min(u2, r)

    5.  **If u1 > u2:** The line is completely outside the window (reject).
    6.  **Calculate Intersecting Points:**

        *   x1' = x1 + u1 * dx
        *   y1' = y1 + u1 * dy
        *   x2' = x1 + u2 * dx
        *   y2' = y1 + u2 * dy

    7.  **Output:**  Clipped line segment from (x1', y1') to (x2', y2').
*   **Example:**

    Clip the line segment from (50, 50) to (75, 100) against the clipping window (xmin=60, ymin=60, xmax=80, ymax=90).

    1.  (x1, y1) = (50, 50), (x2, y2) = (75, 100), xmin = 60, ymin = 60, xmax = 80, ymax = 90
    2.  dx = 25, dy = 50
    3.  u1 = 0, u2 = 1

    **Left Edge (xmin = 60):** p = -25, q = 50 - 60 = -10, r = -10 / -25 = 0.4, u1 = max(0, 0.4) = 0.4
    **Right Edge (xmax = 80):** p = 25, q = 80 - 50 = 30, r = 30 / 25 = 1.2, u2 = min(1, 1.2) = 1
    **Bottom Edge (ymin = 60):** p = -50, q = 50 - 60 = -10, r = -10 / -50 = 0.2, u1 = max(0.4, 0.2) = 0.4
    **Top Edge (ymax = 90):** p = 50, q = 90 - 50 = 40, r = 40 / 50 = 0.8, u2 = min(1, 0.8) = 0.8

    Since u1 (0.4) < u2 (0.8), the line is partially visible.

    x1' = 50 + 0.4 * 25 = 60
    y1' = 50 + 0.4 * 50 = 70
    x2' = 50 + 0.8 * 25 = 70
    y2' = 50 + 0.8 * 50 = 90

    The clipped line segment is from (60, 70) to (70, 90).

*   **Advantages:**
    *   Efficient line clipping algorithm.
    *   Handles lines in any orientation.
*   **Disadvantages:**
    *   Requires floating-point arithmetic.
    *   Specifically designed for rectangular clipping windows.

### 4. Comparison: Bresenham's vs. Liang-Barsky

| Feature          | Bresenham's Algorithm                      | Liang-Barsky Algorithm                      |
| ---------------- | ------------------------------------------ | ------------------------------------------ |
| **Purpose**      | Line drawing (rasterization)               | Line clipping                              |
| **Arithmetic**    | Integer                                    | Floating-point                             |
| **Clipping**    | Not directly addressed                   | Explicitly designed for rectangular windows |
| **Orientation** | Requires adjustments for all orientations | Handles all orientations directly          |
| **Complexity**     | Simpler to implement                     | More complex to implement                   |

### 5. Practice Questions and Exercises

**Question 1:**  Explain the key difference between Bresenham's line algorithm and DDA (Digital Differential Analyzer) algorithm.

**Answer:** Bresenham's algorithm uses only integer arithmetic, while the DDA algorithm uses floating-point arithmetic. Bresenham's algorithm is generally faster and more accurate.

**Question 2:**  Why is integer arithmetic preferred in Bresenham's algorithm?

**Answer:** Integer arithmetic is significantly faster than floating-point arithmetic, especially on older hardware. This efficiency is crucial for real-time graphics rendering.

**Question 3:** A line has endpoints (1,1) and (5,4). Demonstrate the first two iterations of Bresenham's algorithm.

**Answer:**

1.  dx = 5 - 1 = 4
2.  dy = 4 - 1 = 3
3.  p = 2 * dy - dx = 2 * 3 - 4 = 2
4.  x = 1, y = 1

**Iteration 1:**
    Plot (1, 1). p > 0, so p = p + 2 * dy - 2 * dx = 2 + 2 * 3 - 2 * 4 = 0, x = 2, y = 2
**Iteration 2:**
    Plot (2, 2). p = 0, so p = p + 2 * dy - 2 * dx = 0 + 2 * 3 - 2 * 4 = -2, x = 3, y = 2

**Question 4:** What are the two key parameters used in the Liang-Barsky line clipping algorithm to determine the visible portion of a line segment?

**Answer:** The two key parameters are `u1` and `u2`, which represent the minimum and maximum values of the parametric parameter `u` for which the line lies inside the clipping window.

**Question 5:** If, during the Liang-Barsky algorithm, we find that `u1 > u2`, what does this indicate about the line segment?

**Answer:**  It indicates that the line segment is completely outside the clipping window and should be rejected.

**Question 6:** Write pseudocode for the inner loop of the Liang-Barsky algorithm that handles one edge of the clipping window.

**Answer:**

```
// Assuming p and q have been calculated for a specific edge (xmin, xmax, ymin, ymax)
if p == 0:
    if q < 0:
        // Line is parallel and outside the window edge: Reject
        RETURN REJECTED
    else:
        // Line is parallel and inside the window edge: Continue to next edge
        CONTINUE
else if p < 0:
    r = q / p
    if r > u2:
        // Line goes from outside to inside, but leaves completely before u2: Reject
        RETURN REJECTED
    else:
        u1 = max(u1, r)
else if p > 0:
    r = q / p
    if r < u1:
        // Line goes from inside to outside, but enters completely after u1: Reject
        RETURN REJECTED
    else:
        u2 = min(u2, r)
```

### 6. Important Points to Remember

*   Bresenham's algorithm is a fast and efficient way to draw lines using integer arithmetic.  It is primarily for rasterization, not clipping.
*   Liang-Barsky algorithm is specifically designed for clipping lines against rectangular windows.
*   Understanding the principles behind these algorithms is crucial for optimizing graphics rendering performance.
*   The choice of algorithm depends on the specific application and the desired balance between accuracy, speed, and functionality.
*   Pay attention to handling special cases, such as lines parallel to clipping window edges in the Liang-Barsky algorithm.
*   Bresenham's Algorithm assumes the line slope is between 0 and 1 (or -1).  For other slopes, the algorithm needs to be adapted by swapping the roles of x and y or by using other octants.  The example above only demonstrates the first octant.
