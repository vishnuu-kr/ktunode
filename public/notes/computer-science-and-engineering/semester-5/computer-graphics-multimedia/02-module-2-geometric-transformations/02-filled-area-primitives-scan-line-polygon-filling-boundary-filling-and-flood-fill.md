---
title: "Filled Area Primitives - Scan line polygon filling, Boundary filling and flood filling."
subject: "COMPUTER GRAPHICS & MULTIMEDIA"
module: "Module 2: Geometric transformations "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b820"
status: "completed"
scrapedAt: "2026-05-20T16:43:18.414Z"
---
## COMPUTER GRAPHICS & MULTIMEDIA - Module 2: Geometric Transformations - Filled Area Primitives

### Topic: Filled Area Primitives - Scan Line Polygon Filling, Boundary Filling, and Flood Filling

**Learning Outcomes:**

*   Understand the concept of filled area primitives.
*   Explain and implement the scan line polygon filling algorithm.
*   Describe and implement the boundary filling algorithm.
*   Explain and implement the flood filling algorithm.
*   Compare and contrast the different area filling algorithms.
*   Identify the advantages and disadvantages of each algorithm.

**1. Introduction to Filled Area Primitives**

*   **Definition:** Filled area primitives are techniques used to fill the interior of a defined area (e.g., polygon, closed region) with a specified color or pattern.
*   **Importance:** Essential for creating realistic and visually appealing images.  They allow us to represent solid objects and regions in a scene.
*   **Types of Filled Area Primitives discussed:**
    *   Scan Line Polygon Filling
    *   Boundary Filling
    *   Flood Filling

**2. Scan Line Polygon Filling**

*   **Concept:**  The scan line algorithm determines which pixels lie inside a polygon by intersecting each scan line (horizontal line corresponding to a row of pixels) with the edges of the polygon.  It then fills the pixels between the intersection points.
*   **Algorithm Steps:**

    1.  **Find Ymin and Ymax:** Determine the minimum and maximum y-coordinates of the polygon vertices. These define the range of scan lines that need to be processed.
    2.  **Edge Table Creation:** Create an edge table, which is a list of all edges of the polygon. Each entry in the edge table contains the following information:
        *   `Ymax`: The maximum y-coordinate of the edge.
        *   `X`: The x-coordinate of the intersection of the edge with the current scan line.
        *   `1/m`: The inverse slope of the edge (deltaX / deltaY).
    3.  **Active Edge List (AEL) Initialization:**  Initialize an active edge list, which is a subset of the edge table. The AEL contains all edges that intersect the current scan line.
    4.  **Scan Line Processing (Loop from Ymin to Ymax):**
        *   **Update AEL:**
            *   Move edges from the edge table to the AEL when their `Ymin` equals the current scan line.
            *   Remove edges from the AEL when their `Ymax` is less than the current scan line.
        *   **Sort AEL:** Sort the AEL by increasing x-coordinate of the intersection points.
        *   **Fill Pixels:** Fill the pixels between pairs of intersection points in the AEL.  Typically, the first two x values are paired, then the next two, and so on.
        *   **Update X values in AEL:** For each edge in the AEL, update the x-coordinate of the intersection point by adding `1/m` (the inverse slope) to it. This calculates the new x-coordinate where the edge intersects the next scan line.

*   **Handling Special Cases:**
    *   **Horizontal Edges:**  Horizontal edges are typically ignored because they do not contribute to the intersection points.
    *   **Vertices Shared by Multiple Edges:**  Handle vertices shared by multiple edges carefully. If a vertex represents a local minimum or maximum, its edges will typically be added and removed appropriately.  For vertices that form a plateau (both edges move in the same x direction away from the vertex), the y-coordinate must be handled so that it is counted correctly (usually only once). This can be done by shortening one of the edges by one pixel in the y direction.

*   **Example:**

    Consider a triangle with vertices (1, 1), (5, 1), and (3, 4).

    1.  **Ymin = 1, Ymax = 4**
    2.  **Edge Table:**
        *   Edge 1: (1,1) to (5,1) - *Horizontal edge - Ignore*
        *   Edge 2: (5,1) to (3,4) - `Ymax = 4`, `X = 5`, `1/m = (3-5)/(4-1) = -2/3`
        *   Edge 3: (3,4) to (1,1) - `Ymax = 4`, `X = 3`, `1/m = (1-3)/(1-4) = 2/3`
    3.  **Scan Line Processing:**
        *   **Y = 1:** AEL = empty (Horizontal Edge Ignored)
        *   **Y = 2:** AEL = { (4, 4, -2/3), (3.67, 4, 2/3) } - Fill between X=4.33 and X=3.33 (approximately)
        *   **Y = 3:** AEL = { (3.67, 4, -2/3), (4.33, 4, 2/3) } - Fill between X=3.67 and X=4.33 (approximately)
        *   **Y = 4:** Remove both edges from AEL as Ymax == 4, AEL = { }

*   **Advantages:**
    *   Relatively efficient.
    *   Handles complex polygons well.
*   **Disadvantages:**
    *   Can be more complex to implement than other filling algorithms.
    *   Special cases require careful handling.

**3. Boundary Filling**

*   **Concept:**  Starts at a point *inside* the region to be filled and recursively paints the surrounding pixels with the fill color until it encounters a boundary color.
*   **Algorithm:**

    1.  **Input:** (x, y) - Seed pixel (inside the region), `fill_color`, `boundary_color`
    2.  **Check Condition:** If the current pixel (x, y) is not the `boundary_color` and not the `fill_color`:
        *   Set the pixel (x, y) to `fill_color`.
        *   Recursively call the boundary fill algorithm for the adjacent pixels:
            *   `boundary_fill(x+1, y, fill_color, boundary_color)`
            *   `boundary_fill(x-1, y, fill_color, boundary_color)`
            *   `boundary_fill(x, y+1, fill_color, boundary_color)`
            *   `boundary_fill(x, y-1, fill_color, boundary_color)` (4-connected)
            *   *Alternatively, for 8-connected:*
                *   `boundary_fill(x+1, y+1, fill_color, boundary_color)`
                *   `boundary_fill(x+1, y-1, fill_color, boundary_color)`
                *   `boundary_fill(x-1, y+1, fill_color, boundary_color)`
                *   `boundary_fill(x-1, y-1, fill_color, boundary_color)`
    3.  **Base Case:** The recursion stops when the current pixel is the `boundary_color` or the `fill_color`.

*   **Connectivity:**
    *   **4-connected:**  Considers only the four adjacent pixels (North, South, East, West).  Suitable for boundaries defined with 4-connected pixels.
    *   **8-connected:** Considers the eight adjacent pixels (North, South, East, West, and the four diagonals).  Suitable for boundaries defined with 8-connected pixels. Using 4-connected fill on a 8-connected boundary, or vice versa, can lead to gaps in the fill.

*   **Example:**

    Imagine a circle defined by a black boundary.  Start with a seed pixel inside the circle.  The algorithm will paint the area inside the circle with the fill color (e.g., red) until it encounters the black boundary.

*   **Advantages:**
    *   Simple to understand and implement.
*   **Disadvantages:**
    *   Inefficient for large areas due to the recursive nature.  Stack overflow can occur with deeply nested recursion.
    *   Requires a seed point inside the region.
    *   Can be slow due to repeated checks.

**4. Flood Filling**

*   **Concept:** Similar to boundary filling, but instead of filling until a *specific* boundary color is encountered, it replaces a *given* interior color with a fill color until it encounters a different color.
*   **Algorithm:**

    1.  **Input:** (x, y) - Seed pixel (inside the region), `fill_color`, `old_color` (color of the area to be filled)
    2.  **Check Condition:** If the current pixel (x, y) is the `old_color`:
        *   Set the pixel (x, y) to `fill_color`.
        *   Recursively call the flood fill algorithm for the adjacent pixels:
            *   `flood_fill(x+1, y, fill_color, old_color)`
            *   `flood_fill(x-1, y, fill_color, old_color)`
            *   `flood_fill(x, y+1, fill_color, old_color)`
            *   `flood_fill(x, y-1, fill_color, old_color)` (4-connected)
            *   *Alternatively, for 8-connected:*
                *   `flood_fill(x+1, y+1, fill_color, old_color)`
                *   `flood_fill(x+1, y-1, fill_color, old_color)`
                *   `flood_fill(x-1, y+1, fill_color, old_color)`
                *   `flood_fill(x-1, y-1, fill_color, old_color)`
    3.  **Base Case:** The recursion stops when the current pixel is *not* the `old_color`.

*   **Example:**

    Imagine an image where a region of blue needs to be changed to red.  Start with a seed pixel inside the blue region. The algorithm will change all connected blue pixels to red until it encounters a pixel that is *not* blue.

*   **Advantages:**
    *   Simple to understand and implement.
*   **Disadvantages:**
    *   Inefficient for large areas due to the recursive nature. Stack overflow is a concern.
    *   Requires a seed point inside the region.
    *   Can be slow due to repeated checks.

**5. Comparison of Filling Algorithms**

| Feature          | Scan Line Polygon Filling | Boundary Filling | Flood Filling |
|-------------------|--------------------------|-------------------|----------------|
| **Basic Principle** | Intersects scan lines with polygon edges | Fills until a boundary color is encountered | Replaces an interior color with a fill color |
| **Requires Seed Point?** | No                         | Yes                | Yes              |
| **Recursion?**      | No                         | Yes                | Yes              |
| **Efficiency**      | Relatively efficient         | Less efficient     | Less efficient |
| **Complexity**      | More complex               | Simpler            | Simpler          |
| **Suitable For**    | Filling polygons        | Filling regions with well-defined boundaries | Changing the color of connected regions |
| **Stack Overflow Risk?** | Low                       | High               | High             |

**6. Important Points to Remember**

*   **Connectivity:**  Pay attention to 4-connected and 8-connected implementations of boundary and flood fill algorithms. Mismatched connectivity can result in incomplete fills.
*   **Stack Overflow:**  For boundary and flood fill, avoid stack overflow errors by:
    *   Limiting the recursion depth.
    *   Using iterative (non-recursive) approaches (using stacks or queues explicitly).
*   **Seed Point Placement:**  For boundary and flood fill, ensure that the seed point is *inside* the region to be filled and not on the boundary.
*   **Optimization:**  For scan line filling, efficiency can be improved by using incremental calculations for x-coordinates and by optimizing the edge table and AEL structures.

**7. Practice Questions/Exercises**

1.  **Scan Line Filling:** Manually trace the scan line polygon filling algorithm for a rectangle defined by vertices (2, 2), (6, 2), (6, 5), and (2, 5). Show the AEL at each scan line.  Fill with color value of 10.
    *   **Answer:**
        *   Ymin = 2, Ymax = 5
        *   Edge Table:
            *   Edge 1: (2,2) to (6,2) - Horizontal - Ignore
            *   Edge 2: (6,2) to (6,5) - Vertical - `Ymax=5`, `X=6`, `1/m=0`
            *   Edge 3: (6,5) to (2,5) - Horizontal - Ignore
            *   Edge 4: (2,5) to (2,2) - Vertical - `Ymax=5`, `X=2`, `1/m=0`
        *   Scan Line Processing:
            *   Y = 2: AEL = {(6, 5, 0), (2, 5, 0)}. Fill from x = 2 to x = 6.
            *   Y = 3: AEL = {(6, 5, 0), (2, 5, 0)}. Fill from x = 2 to x = 6.
            *   Y = 4: AEL = {(6, 5, 0), (2, 5, 0)}. Fill from x = 2 to x = 6.
            *   Y = 5: AEL = {}.
2.  **Boundary Filling:** Explain why 4-connected boundary filling might fail to completely fill a region defined by an 8-connected boundary.
    *   **Answer:** A 4-connected boundary filling algorithm only checks the four cardinal neighbors (N, S, E, W) of a pixel.  If the boundary is 8-connected, there may be diagonal gaps in the boundary that the 4-connected algorithm will not detect, leading to 'leakage' and incomplete filling.
3.  **Flood Filling:** Write a pseudo-code function for the 4-connected flood fill algorithm.
    *   **Answer:**

        ```
        function flood_fill(x, y, fill_color, old_color):
            if pixel(x, y) == old_color:
                pixel(x, y) = fill_color
                flood_fill(x + 1, y, fill_color, old_color)
                flood_fill(x - 1, y, fill_color, old_color)
                flood_fill(x, y + 1, fill_color, old_color)
                flood_fill(x, y - 1, fill_color, old_color)
        ```
4.  **Algorithm Selection:** Which algorithm would be most appropriate for filling a complex polygon with many vertices? Why?
    *   **Answer:** Scan Line Polygon Filling. It's designed to handle complex polygons efficiently and doesn't rely on recursion, thus avoiding stack overflow issues.
5. **Iterative Boundary Fill:** Briefly outline how you could implement Boundary Fill iteratively (using a stack or queue) instead of recursively.
    *   **Answer:**
        1.  Push the initial seed pixel onto a stack or enqueue it into a queue.
        2.  While the stack/queue is not empty:
            *   Pop a pixel from the stack/dequeue a pixel from the queue.  Let the coordinates be (x, y).
            *   If the pixel (x, y) is not the boundary color and not the fill color:
                *   Set the pixel (x, y) to the fill color.
                *   Push/enqueue the four (or eight) adjacent pixels onto the stack/queue.

This approach avoids recursion and the associated risk of stack overflow.
