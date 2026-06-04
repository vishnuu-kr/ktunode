---
title: "Sutherland Hodgeman and Weiler Atherton Polygon clipping algorithms."
subject: "COMPUTER GRAPHICS & MULTIMEDIA"
module: "Module 3: Transformations and Clipping Algorithms "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b824"
status: "completed"
scrapedAt: "2026-05-20T16:43:20.550Z"
---
# COMPUTER GRAPHICS & MULTIMEDIA: Module 3 - Transformations and Clipping Algorithms

## Topic: Sutherland Hodgeman and Weiler Atherton Polygon Clipping Algorithms

**Learning Outcomes:**

*   Understand the fundamental principles of polygon clipping.
*   Explain the Sutherland Hodgeman polygon clipping algorithm.
*   Explain the Weiler Atherton polygon clipping algorithm.
*   Compare and contrast the Sutherland Hodgeman and Weiler Atherton algorithms.
*   Apply these algorithms to solve polygon clipping problems.
*   Understand the limitations of each algorithm.

### 1. Introduction to Polygon Clipping

*   **Definition:** Polygon clipping is the process of determining the region of a polygon that lies inside a specified clipping window (a rectangular or arbitrary area).  The portion of the polygon outside the window is discarded.
*   **Importance:** Clipping is crucial in computer graphics for:
    *   **Rendering:**  Ensuring that only objects visible within the viewport are rendered, improving performance.
    *   **Object Selection:** Identifying objects that are selected within a specific region.
    *   **Hidden Surface Removal:** Clipping helps in removing occluded surfaces.
*   **Basic Idea:** A polygon is defined by a series of vertices. Clipping algorithms examine each edge of the polygon in relation to the clipping window.  New vertices may be created at the intersection of edges with the window boundaries.

### 2. Sutherland Hodgeman Polygon Clipping Algorithm

*   **Core Principle:** Clips a polygon against each edge of the clipping window sequentially. It processes the polygon one edge of the window at a time, potentially generating intermediate polygons.
*   **Clipping Window:** Usually a rectangle with edges at *x<sub>min</sub>*, *x<sub>max</sub>*, *y<sub>min</sub>*, and *y<sub>max</sub>*.
*   **Process:**  The algorithm iterates through the clipping window's edges (e.g., left, right, bottom, top).  For each edge, it applies one of four possible cases to each vertex pair (edge) of the polygon being clipped:

    *   **Case 1: Both vertices inside:**  Output the second vertex.
    *   **Case 2: First vertex inside, second vertex outside:** Output the intersection point.
    *   **Case 3: First vertex outside, second vertex inside:** Output the intersection point and the second vertex.
    *   **Case 4: Both vertices outside:** Output nothing.
*   **Intersection Calculation:**  The intersection point between the polygon edge and the clipping window edge needs to be calculated.  This is typically done using the parametric equation of a line.

    *   Let *P<sub>1</sub>(x<sub>1</sub>, y<sub>1</sub>)* and *P<sub>2</sub>(x<sub>2</sub>, y<sub>2</sub>)* be the two vertices.
    *   The parametric equation of the line is:
        *   *x = x<sub>1</sub> + u(x<sub>2</sub> - x<sub>1</sub>)*
        *   *y = y<sub>1</sub> + u(y<sub>2</sub> - y<sub>1</sub>)*
        *   Where *0 ≤ u ≤ 1*

    *   To find the intersection with a window edge (e.g., *x = x<sub>min</sub>*), substitute *x<sub>min</sub>* for *x* and solve for *u*:

        *   *x<sub>min</sub> = x<sub>1</sub> + u(x<sub>2</sub> - x<sub>1</sub>)*
        *   *u = (x<sub>min</sub> - x<sub>1</sub>) / (x<sub>2</sub> - x<sub>1</sub>)*

    *   Substitute the calculated value of *u* back into the equation for *y* to find the y-coordinate of the intersection. Similarly, this process is repeated for *x<sub>max</sub>*, *y<sub>min</sub>*, and *y<sub>max</sub>*.
*   **Pseudocode:**

    ```
    function SutherlandHodgeman(polygon, clipping_window):
        clipped_polygon = polygon
        for each edge of clipping_window:
            new_polygon = empty list
            for each edge of clipped_polygon:
                P1 = first vertex of current edge
                P2 = second vertex of current edge

                inside1 = is_inside(P1, current clipping window edge)
                inside2 = is_inside(P2, current clipping window edge)

                if inside1 AND inside2:
                    append P2 to new_polygon
                else if inside1 AND NOT inside2:
                    intersection = calculate_intersection(P1, P2, current clipping window edge)
                    append intersection to new_polygon
                else if NOT inside1 AND inside2:
                    intersection = calculate_intersection(P1, P2, current clipping window edge)
                    append intersection to new_polygon
                    append P2 to new_polygon
                else:
                    //Do nothing
            clipped_polygon = new_polygon
        return clipped_polygon
    ```

*   **Example:**

    Let's say we have a simple triangle with vertices A(50, 50), B(200, 50), C(125, 150), and a rectangular clipping window defined by x<sub>min</sub> = 100, x<sub>max</sub> = 150, y<sub>min</sub> = 75, y<sub>max</sub> = 125.

    1.  **Clip against x<sub>min</sub> = 100:** The polygon edges AB, BC, and CA are processed.  AB is partially clipped, BC is partially clipped, and CA is partially clipped. New vertices will be created on the x<sub>min</sub> boundary.

    2.  **Clip against x<sub>max</sub> = 150:**  The resulting polygon from step 1 is now clipped against the x<sub>max</sub> boundary.

    3.  **Clip against y<sub>min</sub> = 75:** The resulting polygon from step 2 is now clipped against the y<sub>min</sub> boundary.

    4.  **Clip against y<sub>max</sub> = 125:** The resulting polygon from step 3 is now clipped against the y<sub>max</sub> boundary.

    The final polygon will be the portion of the triangle ABC that lies within the clipping window. (This requires manual calculation to find intersections and resulting vertices. This is just a high level overview to help you understand the example)

*   **Advantages:**
    *   Relatively simple to understand and implement.
    *   Works for convex polygons.

*   **Disadvantages:**
    *   Can only handle convex clipping windows. It fails when the clipping window is concave because it can create disconnected polygons.
    *   May introduce extraneous edges.

### 3. Weiler Atherton Polygon Clipping Algorithm

*   **Core Principle:**  Addresses the limitations of Sutherland Hodgeman by correctly clipping polygons against concave clipping windows. It uses the concept of "entering" and "exiting" the clipping region to trace the clipped polygon's boundaries.
*   **Distinguishing Entering and Exiting Intersections:**  The key idea is to distinguish between intersections where the polygon is entering the clipping region and intersections where it is exiting.  This is determined by the orientation of the polygon edge relative to the clipping window edge.
*   **Polygon Orientation:**  Weiler Atherton relies on the concept of polygon orientation (clockwise or counter-clockwise).  The orientation must be consistent for the entire polygon.
*   **Traversal Rules:**

    *   **Entering Intersection:** Follow the polygon's edge until the next intersection or vertex.
    *   **Exiting Intersection:** Follow the clipping window's edge until the next intersection.

*   **Process:**

    1.  **Find Intersections:** Determine all intersection points between the polygon's edges and the clipping window's edges.
    2.  **Classify Intersections:** Classify each intersection point as either "entering" or "exiting."
    3.  **Build Linked Lists:** Create linked lists for both the polygon vertices and the clipping window vertices. Insert the intersection points into both lists.
    4.  **Traverse:** Starting at an entering intersection, traverse the linked lists using the rules defined above (follow polygon edges for entering intersections, follow clipping window edges for exiting intersections).

*   **Pseudocode (Simplified):**

    ```
    function WeilerAtherton(polygon, clipping_window):
        intersections = find_intersections(polygon, clipping_window)
        classify_intersections(intersections) // as entering or exiting
        build_linked_lists(polygon, clipping_window, intersections)
        clipped_polygons = []
        for each entering intersection:
            current_polygon = []
            current_vertex = entering intersection
            do:
                current_polygon.append(current_vertex)
                if current_vertex is an entering intersection:
                    current_vertex = next_vertex_on_polygon(current_vertex)
                else if current_vertex is an exiting intersection:
                    current_vertex = next_vertex_on_clipping_window(current_vertex)
                else:
                    current_vertex = next_vertex_on_polygon(current_vertex)
            while current_vertex != starting entering intersection
            clipped_polygons.append(current_polygon)
        return clipped_polygons
    ```

*   **Example:**

    Consider a concave clipping window and a polygon intersecting it. The algorithm would first identify all intersection points. Then, it would classify them as "entering" or "exiting". Starting at an "entering" point, it would follow the polygon's edge. Upon reaching an "exiting" point, it would switch to following the clipping window's edge. It would continue until returning to the starting "entering" point, thus defining one clipped polygon. This process would be repeated for each "entering" intersection to identify all resulting clipped polygons.

*   **Advantages:**
    *   Handles both convex and concave polygons.
    *   Handles convex and concave clipping windows.
    *   Produces correct results for complex clipping scenarios.

*   **Disadvantages:**
    *   More complex to implement than Sutherland Hodgeman.
    *   Requires the maintenance of linked lists.
    *   Computationally more expensive.

### 4. Comparison of Sutherland Hodgeman and Weiler Atherton

| Feature            | Sutherland Hodgeman        | Weiler Atherton              |
| ------------------ | ------------------------- | ----------------------------- |
| Clipping Window    | Convex Only               | Convex and Concave            |
| Polygon Type       | Convex Only (generally)     | Convex and Concave             |
| Complexity          | Simpler                    | More Complex                  |
| Implementation     | Easier                    | More Difficult                 |
| Handling of Holes  | Difficult                 | Easier (handles well)           |
| Performance        | Faster for simple cases   | Slower for simple cases      |
| Disconnected Polygons | Does not handle well    | Handles well                  |

### 5. Practice Questions & Exercises

1.  **Question:** Explain the four possible cases when clipping a polygon edge against a clipping window edge using the Sutherland Hodgeman algorithm.

    **Answer:**
    *   **Case 1: Both vertices inside:** Output the second vertex.
    *   **Case 2: First vertex inside, second vertex outside:** Output the intersection point.
    *   **Case 3: First vertex outside, second vertex inside:** Output the intersection point and the second vertex.
    *   **Case 4: Both vertices outside:** Output nothing.

2.  **Question:** What are the advantages and disadvantages of the Sutherland Hodgeman polygon clipping algorithm?

    **Answer:**
    *   **Advantages:** Relatively simple to understand and implement, works for convex polygons.
    *   **Disadvantages:** Can only handle convex clipping windows, may introduce extraneous edges.

3.  **Question:** Explain the key difference between Sutherland Hodgeman and Weiler Atherton algorithms in terms of the type of clipping windows they can handle.

    **Answer:** Sutherland Hodgeman can only handle convex clipping windows, while Weiler Atherton can handle both convex and concave clipping windows.

4.  **Question:** Describe the traversal rules in the Weiler Atherton algorithm for "entering" and "exiting" intersections.

    **Answer:**
    *   **Entering Intersection:** Follow the polygon's edge until the next intersection or vertex.
    *   **Exiting Intersection:** Follow the clipping window's edge until the next intersection.

5.  **Exercise:** Given a triangle with vertices A(20, 30), B(80, 30), and C(50, 70), and a rectangular clipping window defined by x<sub>min</sub> = 40, x<sub>max</sub> = 70, y<sub>min</sub> = 40, y<sub>max</sub> = 60, manually apply the first step (clipping against x<sub>min</sub>) of the Sutherland Hodgeman algorithm. Show the calculations for the intersection points (if any) and the resulting vertices after clipping against x<sub>min</sub>.

    **Answer:**
    1.  **Edge AB:** Both A(20, 30) and B(80, 30) are outside x<sub>min</sub> = 40. No output.
    2.  **Edge BC:** B(80, 30) is outside, C(50, 70) is outside.  No output at first clipping stage.
    3. **Edge CA:** C(50,70) is outside range. A (20,30) is outside the range.

     *NOTE*: The edges will need to clipped individually on each edge of the polygon. the final answer after all clipping windows are applied would contain several intersecting vertices. This solution does not fully render the object for the exercise

### 6. Important Points to Remember

*   **Clipping Window:**  Understanding the geometry of the clipping window is crucial.
*   **Intersection Calculation:**  Accuracy in calculating intersection points is essential for correct results.
*   **Entering/Exiting:** The concepts of entering and exiting the clipping region are fundamental to Weiler Atherton.
*   **Polygon Orientation:**  Maintaining consistent polygon orientation is vital for the Weiler Atherton algorithm to work correctly.
*   **Trade-offs:**  Choose the appropriate clipping algorithm based on the complexity of the polygons and clipping windows involved. Sutherland Hodgeman is simpler but limited, while Weiler Atherton is more powerful but more complex.
