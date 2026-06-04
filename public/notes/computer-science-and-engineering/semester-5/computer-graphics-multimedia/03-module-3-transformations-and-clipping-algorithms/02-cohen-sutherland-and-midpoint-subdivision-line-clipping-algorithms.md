---
title: "Cohen Sutherland and Midpoint subdivision line clipping algorithms"
subject: "COMPUTER GRAPHICS & MULTIMEDIA"
module: "Module 3: Transformations and Clipping Algorithms "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b823"
status: "completed"
scrapedAt: "2026-05-20T16:43:19.837Z"
---
# COMPUTER GRAPHICS & MULTIMEDIA - Module 3: Transformations and Clipping Algorithms

## Topic: Cohen-Sutherland and Midpoint Subdivision Line Clipping Algorithms

### Learning Outcomes:

*   Understand the concept of clipping and its importance in computer graphics.
*   Explain the Cohen-Sutherland line clipping algorithm and its advantages and disadvantages.
*   Describe the Midpoint Subdivision line clipping algorithm and its advantages and disadvantages.
*   Implement both algorithms to clip lines against a rectangular window.
*   Compare and contrast the two algorithms based on performance and complexity.
*   Solve problems related to line clipping using both algorithms.

### 1. Introduction to Clipping

*   **Definition:** Clipping is the process of removing portions of a graphics primitive (line, polygon, curve, text) that lie outside a specified region, called the *clipping window* or *viewport*.
*   **Importance:**
    *   **Display Management:** Ensures that only the visible parts of an image are rendered, saving processing time and memory.
    *   **View Transformation:** Allows focusing on specific areas of a larger scene.
    *   **Hidden Surface Removal:** Helps in identifying and removing hidden surfaces in 3D graphics.
*   **Clipping Window:**  Typically, a rectangle defined by minimum and maximum coordinates (xmin, ymin) and (xmax, ymax).

### 2. Cohen-Sutherland Line Clipping Algorithm

*   **Concept:** A fast and efficient algorithm for clipping lines against a rectangular clipping window.  It uses a region code approach to quickly identify and discard lines that are entirely outside the clipping window.
*   **Region Codes:** A 4-bit code assigned to each endpoint of the line based on its position relative to the clipping window.

    *   Bit 1 (Left): 1 if x < xmin, 0 otherwise
    *   Bit 2 (Right): 1 if x > xmax, 0 otherwise
    *   Bit 3 (Bottom): 1 if y < ymin, 0 otherwise
    *   Bit 4 (Top): 1 if y > ymax, 0 otherwise

    *Example:*
    *   (xmin, ymin) = (100, 100), (xmax, ymax) = (300, 300)
    *   Point P(50, 150): Region Code = 1000 (Left)
    *   Point Q(200, 50): Region Code = 0010 (Bottom)
    *   Point R(200, 200): Region Code = 0000 (Inside)
*   **Algorithm Steps:**

    1.  Assign region codes to both endpoints (P1 and P2) of the line.
    2.  **Case 1: Both endpoints have a region code of 0000:** The entire line lies inside the window. Accept the line.
    3.  **Case 2: Bitwise AND of the region codes is NOT 0:** The line lies entirely outside the window. Reject the line.  No intersection calculation needed.
    4.  **Case 3: Neither of the above conditions is true:** The line partially intersects the window.
        *   Choose an endpoint outside the window (code != 0000).
        *   Determine which edge the endpoint is outside of (left, right, bottom, top) based on the set bit in the region code.
        *   Calculate the intersection point with that edge using the line equation:  y = mx + b (where m is the slope and b is the y-intercept).  Use similar triangle properties for efficient calculation.
        *   Replace the chosen endpoint with the intersection point and update its region code.
        *   Repeat from step 2.

*   **Line Equation (for Intersection Calculation):**

    *   Slope (m) = (y2 - y1) / (x2 - x1)
    *   Equation: y = y1 + m * (x - x1)  or  x = x1 + (1/m) * (y - y1)

*   **Example:**

    Clipping Window: (xmin, ymin) = (50, 50), (xmax, ymax) = (200, 150)
    Line: P1(30, 180), P2(150, 20)

    1.  Region Codes:
        *   P1: 1001 (Left, Top)
        *   P2: 0010 (Bottom)
    2.  AND (1001, 0010) = 0000. Line is not entirely outside.
    3.  P1 is outside. Check bits: Left and Top are set.
        *   Clip against Top edge (y = 150): x = 30 + (1/m) * (150 - 180). Calculate 'm' using P1 and P2: m = (20 - 180) / (150 - 30) = -160 / 120 = -4/3.  x = 30 + (-3/4) * (-30) = 30 + 22.5 = 52.5.  New point: P1'(52.5, 150). Region Code: 0000
    4.  P2 is still outside. Check bits: Bottom is set.
        *   Clip against Bottom edge (y = 50): x = 150 + (-3/4) * (50 - 20) = 150 + (-3/4) * 30 = 150 - 22.5 = 127.5. New point: P2'(127.5, 50). Region Code: 0000
    5.  Now both P1' and P2' are inside the window. The clipped line is the line segment between P1'(52.5, 150) and P2'(127.5, 50).

*   **Advantages:**

    *   Simple to implement.
    *   Fast for trivial accept and reject cases.
    *   Effective for large areas outside the clipping window.

*   **Disadvantages:**

    *   Inefficient for lines that are mostly inside the window but still require multiple clipping steps.
    *   Requires multiple intersection calculations for some lines.
    *   Doesn't work well for complex or curved clipping boundaries.

### 3. Midpoint Subdivision Line Clipping Algorithm

*   **Concept:**  Divides a line segment repeatedly at its midpoint until the portion of the line that lies inside the clipping window is found, or the line is determined to be completely outside.
*   **Algorithm Steps:**

    1.  Assign region codes to both endpoints (P1 and P2) of the line.
    2.  **Case 1: Both endpoints have a region code of 0000:** The entire line lies inside the window. Accept the line.
    3.  **Case 2: Bitwise AND of the region codes is NOT 0:** The line lies entirely outside the window. Reject the line.
    4.  **Case 3: Neither of the above conditions is true:** The line partially intersects the window.
        *   Calculate the midpoint M of the line segment P1P2:  M = ((x1 + x2)/2, (y1 + y2)/2)
        *   Assign the region code to the midpoint M.
        *   **If M lies inside the window (region code 0000):**
            *   Subdivide the line into two segments: P1M and MP2.
            *   Recursively apply the algorithm to each segment (P1M and MP2).
        *   **If M lies outside the window (region code != 0000):**
            *   **If P1 is inside and M is outside:** Clip segment P1M. Replace P2 with M.
            *   **If P2 is inside and M is outside:** Clip segment MP2. Replace P1 with M.
            *   **If both P1 and M are outside, and their region codes share a common bit (AND != 0):** Reject this portion of the line as being entirely outside. Replace P2 with M.
            *   **If both P2 and M are outside, and their region codes share a common bit (AND != 0):** Reject this portion of the line as being entirely outside. Replace P1 with M.
            *   **Otherwise (both P1 and M or P2 and M are outside, but AND ==0):** Subdivide further: P1M or MP2.
        *   Repeat the process until the lines are clipped against the clipping window, or the sub-lines are too small.

*   **Example:**

    Clipping Window: (xmin, ymin) = (50, 50), (xmax, ymax) = (200, 150)
    Line: P1(30, 180), P2(150, 20)

    1.  Region Codes:
        *   P1: 1001
        *   P2: 0010
    2.  AND (1001, 0010) = 0000. Line is not entirely outside.
    3.  Midpoint: M = ((30 + 150)/2, (180 + 20)/2) = (90, 100). Region Code of M: 0000 (Inside)
    4.  Subdivide into P1M and MP2.
    5.  Process P1M: P1(30, 180), M(90, 100).  AND (1001, 0000) = 0000.  Midpoint M1 = ((30+90)/2,(180+100)/2) = (60,140). Code 0000. Subdivide.
    6.  Repeat with finer and finer subdivisions until the line is acceptably close to being on the edge or trivially accepted.  The clipping would remove segment from (30, 180) up until a coordinate falls within the clipping window.

*   **Advantages:**

    *   More efficient than Cohen-Sutherland for lines that are significantly clipped.
    *   Avoids explicit intersection calculations.  Only midpoint calculations are required.
    *   Can handle complex clipping windows more easily than Cohen-Sutherland (by extending the algorithm to polygon clipping).

*   **Disadvantages:**

    *   Can be slower for trivial accept and reject cases because of repeated midpoint calculations.
    *   Requires recursive calls, which can add overhead.
    *   Stopping criteria need to be defined to avoid infinite recursion if the line is nearly coincident with an edge.

### 4. Comparison of Cohen-Sutherland and Midpoint Subdivision

| Feature              | Cohen-Sutherland                                  | Midpoint Subdivision                                |
| -------------------- | ------------------------------------------------- | --------------------------------------------------- |
| Intersection Calculation | Explicit intersection calculation required.          | Only midpoint calculation, no explicit intersection. |
| Complexity           | Simpler to implement.                               | More complex, recursive implementation.             |
| Efficiency           | Fast for trivial accept and reject cases.           | More efficient for significantly clipped lines.     |
| Recursion            | No recursion involved.                             | Recursive calls are used.                           |
| Clipping Window       | Primarily suited for rectangular clipping windows. | Can be extended for more complex windows.          |
| Handling Coincidence | Can lead to multiple unnecessary calculations.    | More stable when the line is close to an edge.      |

### 5. Practice Questions/Exercises

1.  **Question:**  Given a clipping window defined by (xmin, ymin) = (20, 20) and (xmax, ymax) = (80, 60), use the Cohen-Sutherland algorithm to clip the line segment defined by P1(10, 10) and P2(50, 70).  Show all steps, including region code assignments and intersection calculations.

    **Answer:**

    1.  Region Codes:
        *   P1(10, 10): 1010 (Left, Bottom)
        *   P2(50, 70): 0001 (Top)
    2.  AND (1010, 0001) = 0000.  Line is not entirely outside.
    3.  P1 is outside. Clip against Left (x = 20): y = 10 + m * (20 - 10). m = (70 - 10) / (50 - 10) = 60/40 = 3/2. y = 10 + (3/2) * 10 = 10 + 15 = 25. New Point P1'(20, 25). Code 0000.
    4.  P2 is outside. Clip against Top (y = 60): x = 50 + (2/3) * (60 - 70) = 50 - 20/3 = 50 - 6.67 = 43.33.  New Point P2'(43.33, 60). Code 0000.
    5.  The clipped line segment is defined by P1'(20, 25) and P2'(43.33, 60).

2.  **Question:** Explain the primary difference between the Cohen-Sutherland and Midpoint Subdivision line clipping algorithms in terms of how they handle lines that partially intersect the clipping window.

    **Answer:** Cohen-Sutherland explicitly calculates the intersection points between the line and the clipping window edges. Midpoint Subdivision recursively divides the line into smaller segments until the portions inside the window are isolated, avoiding direct intersection calculations.

3.  **Question:** Under what circumstances would the Midpoint Subdivision algorithm be more efficient than the Cohen-Sutherland algorithm?

    **Answer:** Midpoint Subdivision is generally more efficient when the line is significantly clipped, meaning a large portion of the line lies outside the clipping window. In this case, the subdivision approach can quickly eliminate large segments of the line without performing explicit intersection calculations.

4. **Question:** A line has endpoints P1(10,80) and P2(120,20). The window has corners (xmin,ymin) = (30,30) and (xmax, ymax) = (100,70). Write the region codes for P1 and P2.

   **Answer:**
   * P1(10, 80): 1001 (Left, Top)
   * P2(120, 20): 0110 (Right, Bottom)

5. **Question:** Explain what happens to the midpoint if both endpoints of a section of a line in the midpoint subdivision algorithm have the *same* region code that is *not* all zeros.
    **Answer:** If both endpoints have the same region code and it's not all zeros, the midpoint will have the *same* region code. This means the entire segment lies on the same side of at least one window edge. If the region code ANDed gives a non-zero value, the section is rejected. Otherwise, further subdivision will occur.

### 6. Important Points to Remember

*   **Region Codes:** Understand how region codes are assigned and used for quick rejection in Cohen-Sutherland.
*   **Line Equation:** Be able to calculate the slope and use the point-slope form of the line equation to find intersection points.
*   **Midpoint Calculation:**  Remember how to calculate the midpoint of a line segment.
*   **Recursive Nature:**  Recognize the recursive nature of the Midpoint Subdivision algorithm.
*   **Advantages/Disadvantages:** Know the pros and cons of each algorithm to choose the most appropriate one for a given scenario.
*   **Stopping Criteria:** For Midpoint Subdivision, defining appropriate stopping criteria is crucial to prevent infinite recursion. Consider using a minimum line length.
