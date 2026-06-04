---
title: "Filled Area Primitives - Scan line polygon filling, Boundary filling and flood filling."
subject: "COMPUTER GRAPHICS"
module: "Module 2: Geometric transformations "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cd54"
status: "completed"
scrapedAt: "2026-05-20T17:24:29.373Z"
---
# Computer Graphics: Module 2 - Geometric Transformations

## Topic: Filled Area Primitives - Scan Line Polygon Filling, Boundary Filling, and Flood Filling

---

### Introduction to Filled Area Primitives

In computer graphics, after defining the boundaries of shapes (lines, curves), we often need to fill these enclosed areas with a specific color or pattern. Filled area primitives are algorithms designed to achieve this. They are fundamental for rendering solid objects, applying textures, and creating visual effects.

---

### 1. Scan Line Polygon Filling

**Concept:**
The scan line polygon filling algorithm works by processing the polygon line by line, considering horizontal lines (scan lines) that intersect the polygon. It determines which segments of the scan line lie inside the polygon and fills them with the specified color.

**Key Concepts & Definitions:**

*   **Scan Line:** A horizontal line at a specific y-coordinate across the display surface.
*   **Polygon Edge:** A line segment forming the boundary of a polygon.
*   **Intersection Points:** Points where a scan line intersects the edges of the polygon.
*   **Inside/Outside Test:** Determining whether a point or segment lies within the polygon's boundaries.
*   **Active Edge List:** A data structure that stores edges currently intersected by the scan line.

**Algorithm Steps:**

1.  **Edge Table Creation:**
    *   For each edge of the polygon, calculate its inverse slope (dx/dy).
    *   Store each edge in an edge table indexed by its *minimum* y-coordinate.
    *   The edge table entry should contain:
        *   Inverse slope (dx/dy)
        *   Maximum y-coordinate of the edge
        *   x-coordinate of the starting vertex (which has the minimum y)

2.  **Active Edge List Initialization:**
    *   Initialize an empty active edge list.
    *   Start scanning from the minimum y-coordinate of the polygon.

3.  **Scan Line Processing (Iterative):**
    *   For each scan line from the minimum y to the maximum y of the polygon:
        *   **Update Active Edge List:**
            *   Add edges from the edge table whose minimum y-coordinate equals the current scan line's y-coordinate.
            *   Remove edges from the active edge list whose maximum y-coordinate is less than the current scan line's y-coordinate (the edge has "ended").
        *   **Calculate Intersection Points:**
            *   For each edge in the active edge list, calculate its x-intersection with the current scan line using the formula:
                `x_intersection = x_start + (current_y - y_start) * inverse_slope`
        *   **Sort Intersections:**
            *   Sort the calculated x-intersection points in ascending order.
        *   **Fill Scan Line Segments:**
            *   Iterate through the sorted intersection points.
            *   For pairs of intersection points `(x1, x2)`, fill the pixels from `x1` to `x2` with the desired color.
        *   **Update Active Edge List for Next Scan Line:**
            *   For each edge remaining in the active edge list, update its x-intersection for the next scan line by adding its inverse slope to the current x-intersection.

**Example:**
Consider a simple triangle with vertices (50, 50), (150, 100), and (100, 150).

*   **Edges:**
    *   E1: (50, 50) to (150, 100) -> inverse slope = (150-50)/(100-50) = 100/50 = 2
    *   E2: (150, 100) to (100, 150) -> inverse slope = (100-150)/(150-100) = -50/50 = -1
    *   E3: (100, 150) to (50, 50) -> inverse slope = (50-100)/(50-150) = -50/-100 = 0.5

*   **Scan Line Processing (Simplified):**
    *   **y=50:** E3 starts. Active edges: {E3}.
    *   **y=51...99:** E3 continues. Active edges: {E3}.
    *   **y=100:** E1 starts. E2 ends. Active edges: {E3, E1}.
        *   Intersection E3 at y=100: `x = 50 + (100-50)*0.5 = 50 + 25 = 75`
        *   Intersection E1 at y=100: `x = 50 + (100-50)*2 = 50 + 100 = 150` (Vertex)
        *   Sorted intersections: 75, 150. Fill pixels from 75 to 150.
    *   **y=101...149:** E3 and E1 continue. Active edges: {E3, E1}. Update their x-intersections.
    *   **y=150:** E1 ends. E2 starts. E3 continues. Active edges: {E3, E2}.
        *   Intersection E3 at y=150: `x = 50 + (150-50)*0.5 = 50 + 50 = 100` (Vertex)
        *   Intersection E2 at y=150: `x = 150 + (150-100)*(-1) = 150 - 50 = 100` (Vertex)
        *   Sorted intersections: 100, 100. No fill.
    *   **y=151...:** E2 continues. E3 ends. Active edges: {E2}.
    *   **y=150:** E2 ends. Active edges: {}.

**Important Points to Remember:**

*   Handles concavities and holes correctly.
*   Can be computationally intensive for complex polygons.
*   Floating-point precision issues can arise with inverse slopes.
*   Needs careful handling of horizontal edges and vertices that lie on scan lines.

---

### 2. Boundary Filling

**Concept:**
The boundary fill algorithm is a recursive or iterative method used to fill an area with a specified color, starting from a seed point within the area. It colors pixels until it encounters a boundary color or a previously filled pixel.

**Key Concepts & Definitions:**

*   **Seed Point (x, y):** A starting pixel located *inside* the area to be filled.
*   **Boundary Color:** The color of the edges of the region to be filled.
*   **New Color:** The color to fill the region with.
*   **4-Connectivity:** Considers pixels immediately adjacent horizontally and vertically (up, down, left, right).
*   **8-Connectivity:** Considers pixels immediately adjacent horizontally, vertically, and diagonally.

**Algorithm Steps (Recursive - 4-Connectivity):**

1.  **Check Current Pixel:**
    *   Get the color of the current pixel `(x, y)`.
2.  **Fill Condition:**
    *   If the current pixel's color is *not* the boundary color AND *not* the new color, then:
        *   Set the current pixel's color to the `new_color`.
        *   **Recursively call the boundary fill function for its neighbors:**
            *   `boundary_fill(x + 1, y, boundary_color, new_color)` (Right)
            *   `boundary_fill(x - 1, y, boundary_color, new_color)` (Left)
            *   `boundary_fill(x, y + 1, boundary_color, new_color)` (Down)
            *   `boundary_fill(x, y - 1, boundary_color, new_color)` (Up)

**Algorithm Steps (Iterative using a Stack - 4-Connectivity):**

1.  **Initialization:**
    *   Create an empty stack.
    *   Push the seed point `(x, y)` onto the stack.
2.  **Processing Loop:**
    *   While the stack is not empty:
        *   Pop a pixel `(x, y)` from the stack.
        *   Get the color of pixel `(x, y)`.
        *   **Fill Condition:**
            *   If the pixel's color is *not* the boundary color AND *not* the new color:
                *   Set the pixel's color to `new_color`.
                *   **Push neighbors onto the stack:**
                    *   Push `(x + 1, y)`
                    *   Push `(x - 1, y)`
                    *   Push `(x, y + 1)`
                    *   Push `(x, y - 1)`

**Example:**
Imagine a square outline in black (boundary color) on a white background. You want to fill it with red (new color), starting from a seed point inside.

*   **Seed:** (5, 5)
*   **Boundary Color:** Black
*   **New Color:** Red

The algorithm would start at (5, 5), color it red. Then it would explore its neighbors. If a neighbor is not black and not red, it colors it red and adds its neighbors to the stack (or calls itself recursively). This process continues until all reachable pixels within the black boundary are colored red.

**Important Points to Remember:**

*   Requires the boundary color to be known.
*   If the seed point is outside the region or on the boundary, it won't work as expected.
*   Recursive version can lead to stack overflow for large regions.
*   Iterative version using a stack is generally preferred for efficiency and avoiding stack overflow.
*   4-connectivity fills a "square" shape, while 8-connectivity fills a "round" shape.

---

### 3. Flood Fill

**Concept:**
The flood fill algorithm is similar to boundary fill, but instead of filling based on a boundary color, it fills based on a target color. It starts from a seed point and fills all connected pixels that have the *same* color as the seed point with a new color.

**Key Concepts & Definitions:**

*   **Seed Point (x, y):** A starting pixel.
*   **Target Color (Old Color):** The color of the region to be replaced. This is the color of the seed point.
*   **New Color:** The color to fill the region with.
*   **Connectivity:** Typically 4-connected or 8-connected.

**Algorithm Steps (Recursive - 4-Connectivity):**

1.  **Check Current Pixel:**
    *   Get the color of the current pixel `(x, y)`.
2.  **Fill Condition:**
    *   If the current pixel's color is equal to the `target_color` AND *not* equal to the `new_color`:
        *   Set the current pixel's color to the `new_color`.
        *   **Recursively call the flood fill function for its neighbors:**
            *   `flood_fill(x + 1, y, target_color, new_color)` (Right)
            *   `flood_fill(x - 1, y, target_color, new_color)` (Left)
            *   `flood_fill(x, y + 1, target_color, new_color)` (Down)
            *   `flood_fill(x, y - 1, target_color, new_color)` (Up)

**Algorithm Steps (Iterative using a Stack - 4-Connectivity):**

1.  **Initialization:**
    *   Get the `target_color` from the seed point `(x, y)`.
    *   Create an empty stack.
    *   Push the seed point `(x, y)` onto the stack.
2.  **Processing Loop:**
    *   While the stack is not empty:
        *   Pop a pixel `(x, y)` from the stack.
        *   Get the color of pixel `(x, y)`.
        *   **Fill Condition:**
            *   If the pixel's color is equal to the `target_color` AND *not* equal to the `new_color`:
                *   Set the pixel's color to `new_color`.
                *   **Push neighbors onto the stack:**
                    *   Push `(x + 1, y)`
                    *   Push `(x - 1, y)`
                    *   Push `(x, y + 1)`
                    *   Push `(x, y - 1)`

**Example:**
Imagine a drawing where a large area is filled with blue. You want to change a specific connected region of blue to green, starting from a blue pixel.

*   **Seed:** (10, 10)
*   **Target Color (Old Color):** Blue (color of pixel at (10, 10))
*   **New Color:** Green

The algorithm finds that (10, 10) is blue. It colors it green. Then it checks its neighbors. If a neighbor is blue, it colors it green and adds its neighbors to the stack. This continues until all connected blue pixels reachable from the seed are colored green.

**Important Points to Remember:**

*   Fills based on the color of the seed point.
*   Useful for replacing colors within a connected region.
*   Recursive version can lead to stack overflow.
*   Iterative version using a stack is generally preferred.
*   If the `new_color` is the same as the `target_color`, the algorithm effectively does nothing.

---

### Comparison of Boundary Fill and Flood Fill

| Feature          | Boundary Fill                                     | Flood Fill                                      |
| :--------------- | :------------------------------------------------ | :---------------------------------------------- |
| **Fill Basis**   | Boundary Color                                    | Target Color (of seed point)                    |
| **Condition**    | Fill if pixel is *not* boundary color and *not* new color. | Fill if pixel *is* target color and *not* new color. |
| **Use Case**     | Filling regions with a defined border.            | Changing the color of a connected region.       |
| **Requirements** | Knows the boundary color.                         | Knows the target color (implicitly from seed).  |

---

### Practice Questions & Exercises

1.  **Scan Line Filling:**
    *   Consider a square with vertices (10, 10), (50, 10), (50, 50), (10, 50). Describe how the scan line algorithm would fill this square. What would be the key intersection points for scan lines at y=15, y=30, and y=45?
    *   **Answer:** For a square, scan lines from y=10 to y=50 will intersect two vertical edges. For y=15, intersections would be at x=10 and x=50. For y=30, x=10 and x=50. For y=45, x=10 and x=50. The segments (10,50) would be filled for each scan line.

2.  **Boundary Fill vs. Flood Fill:**
    *   You have a circular shape drawn with a red outline on a green background. You want to fill the circle with blue. Which algorithm (Boundary Fill or Flood Fill) would you use and why? What would be the parameters for the chosen algorithm?
    *   **Answer:** Boundary Fill would be used. The boundary color is red, and the new color is blue. The seed point must be inside the circle. Flood fill would be used if you wanted to change all connected green pixels to another color.

3.  **Connectivity:**
    *   If you use 8-connectivity in a boundary fill algorithm for a diagonal line, how would it differ in filling compared to 4-connectivity?
    *   **Answer:** 8-connectivity would include diagonal pixels as neighbors. This would result in a more "rounded" or "filled-in" diagonal line compared to 4-connectivity, which would only fill pixels directly horizontal or vertical to the current pixel, potentially leaving gaps if the diagonal is not perfectly aligned with the grid.

4.  **Algorithm Choice:**
    *   You are given an image with a large contiguous area of a specific color that needs to be replaced with a new color. The area has no distinct boundary color. Which algorithm is more suitable?
    *   **Answer:** Flood Fill is more suitable. It directly targets and replaces connected pixels of a specific color, which is ideal when there isn't a clear boundary color to differentiate the region.

5.  **Boundary Fill Iterative:**
    *   Trace the execution of an iterative boundary fill (using a stack and 4-connectivity) for a 2x2 square region with boundary color black, new color white, starting at seed (1,1) in a 3x3 grid where the square is defined by (1,1), (2,1), (2,2), (1,2).
    *   Grid:
        ```
        B B B
        B W B
        B B B
        ```
        (Assume B is Boundary, W is the pixel to be filled)
        Let's say the square boundary is at (0,0) to (2,2) and the seed is at (1,1). The boundary color is Black, new color is White.

    *   **Initial State:** Grid has a Black border. Seed (1,1) is inside.
    *   **Stack:** `[(1,1)]`
    *   **Pop (1,1):** Color of (1,1) is the background color (let's assume it's not black). Set (1,1) to White. Push neighbors (0,1), (2,1), (1,0), (1,2).
    *   **Stack:** `[(0,1), (2,1), (1,0), (1,2)]`
    *   **Pop (1,2):** Color of (1,2) is Black (boundary). Do nothing.
    *   **Stack:** `[(0,1), (2,1), (1,0)]`
    *   **Pop (1,0):** Color of (1,0) is Black (boundary). Do nothing.
    *   **Stack:** `[(0,1), (2,1)]`
    *   **Pop (2,1):** Color of (2,1) is Black (boundary). Do nothing.
    *   **Stack:** `[(0,1)]`
    *   **Pop (0,1):** Color of (0,1) is Black (boundary). Do nothing.
    *   **Stack:** `[]` (Empty)

    *This example is a bit simplified as it assumes the seed itself is not the boundary or already filled. A more accurate scenario would involve a larger area.*

---

### Important Takeaways

*   **Scan Line Filling:** Excellent for polygons, handles concavities. Requires careful edge and intersection management.
*   **Boundary Fill:** Fills based on touching a boundary color. Requires a seed point inside the region.
*   **Flood Fill:** Fills based on replacing a target color with a new color. Requires a seed point within the target color region.
*   Both Boundary and Flood Fill can be implemented recursively or iteratively (using stacks/queues) to avoid stack overflow for large areas.
*   The choice between 4-connectivity and 8-connectivity affects the "shape" of the fill.

---
