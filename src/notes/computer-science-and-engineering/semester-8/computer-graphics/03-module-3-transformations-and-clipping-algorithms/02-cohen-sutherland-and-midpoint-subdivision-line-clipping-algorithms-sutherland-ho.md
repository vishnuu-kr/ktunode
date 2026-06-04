---
title: "Cohen Sutherland and Midpoint subdivision line clipping algorithms, Sutherland Hodgeman and Weiler Atherton Polygon clipping algorithms."
subject: "COMPUTER GRAPHICS"
module: "Module 3: Transformations and Clipping Algorithms "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cd57"
status: "completed"
scrapedAt: "2026-05-20T17:24:30.781Z"
---
# Computer Graphics: Module 3 - Transformations and Clipping Algorithms

## Topic: Clipping Algorithms

This module focuses on techniques for clipping lines and polygons against a viewing window. Clipping is essential for displaying only the relevant parts of an image that fall within the defined boundaries.

### Learning Outcomes:

*   Understand the need for clipping in computer graphics.
*   Explain the Cohen-Sutherland line clipping algorithm.
*   Implement or describe the Midpoint Subdivision line clipping algorithm.
*   Explain the Sutherland-Hodgman polygon clipping algorithm.
*   Explain the Weiler-Atherton polygon clipping algorithm.

---

### 1. Introduction to Clipping

**What is Clipping?**

Clipping is the process of removing parts of a graphics primitive (like a line or polygon) that lie outside a specified clipping window or region. This is crucial for:

*   **Efficiency:** Only drawing what is visible reduces computational overhead.
*   **Correctness:** Ensuring that objects are displayed only within the defined viewing area.
*   **View Frustum:** In 3D graphics, clipping is used to define the view frustum – the region of space that is visible to the camera.

**The Clipping Window:**

*   Typically a rectangular region defined by its minimum and maximum x and y coordinates (e.g., `xmin`, `ymin`, `xmax`, `ymax`).
*   The clipping window is often aligned with the coordinate axes (an **axis-aligned rectangular window**).

---

### 2. Line Clipping Algorithms

These algorithms determine which portions of a line segment lie inside the clipping window.

#### 2.1 Cohen-Sutherland Line Clipping Algorithm

This is a well-known and efficient algorithm for clipping lines against a rectangular window. It uses a region-coding technique.

**Key Concepts:**

*   **Region Codes (Outcodes):** Each endpoint of a line is assigned a 4-bit code (outcode) indicating its position relative to the clipping window's boundaries.

    | Bit  | Region                  | Description                               |
    | :--- | :---------------------- | :---------------------------------------- |
    | 1    | **LEFT** (0001)         | Endpoint is to the left of `xmin`.        |
    | 2    | **RIGHT** (0010)        | Endpoint is to the right of `xmax`.       |
    | 3    | **BOTTOM** (0100)       | Endpoint is below `ymin`.                 |
    | 4    | **TOP** (1000)          | Endpoint is above `ymax`.                 |

    *   The bits are typically assigned from left to right (e.g., TOP, BOTTOM, RIGHT, LEFT).
    *   An outcode of `0000` (or `00000000` for 8 bits) means the point is inside the clipping window.

*   **Algorithm Steps:**

    1.  **Compute Outcodes:** For each endpoint (x1, y1) and (x2, y2) of the line segment, calculate their respective outcodes.
    2.  **Trivial Accept/Reject:**
        *   **Trivial Accept:** If both outcodes are `0000` (both endpoints are inside), the entire line segment is visible. Accept and draw the line.
        *   **Trivial Reject:** If the bitwise AND of the two outcodes is *not* `0000` (i.e., `outcode1 & outcode2 != 0`), then both endpoints lie on the same "outside" side of at least one clipping boundary. The entire line segment is outside. Reject and discard the line.
    3.  **Clipping (Partial Visibility):** If neither trivial accept nor trivial reject occurs, the line might be partially visible.
        *   Choose an endpoint that is *outside* the window. Let this be (x, y).
        *   **Find Intersection:** Determine which clipping boundary this outside point lies on (e.g., LEFT, RIGHT, TOP, BOTTOM). Calculate the intersection point of the line segment with this boundary.
            *   **Intersection with Vertical Boundary (x = x_boundary):**
                `y = y1 + (y2 - y1) * (x_boundary - x1) / (x2 - x1)`
            *   **Intersection with Horizontal Boundary (y = y_boundary):**
                `x = x1 + (x1 - x2) * (y_boundary - y1) / (y2 - y1)`
        *   **Replace Endpoint:** Replace the outside endpoint (x, y) with the calculated intersection point.
        *   **Recompute Outcode:** Calculate the outcode for the new endpoint.
        *   **Repeat:** Go back to step 2 with the modified line segment.

**Example:**

Consider a clipping window with `xmin=10`, `ymin=10`, `xmax=50`, `ymax=50`.
Line segment from P1(0, 0) to P2(60, 60).

*   **P1(0, 0):**
    *   LEFT: 0 < 10 (Yes) -> Bit 1 = 1
    *   RIGHT: 0 < 50 (No) -> Bit 2 = 0
    *   BOTTOM: 0 < 10 (Yes) -> Bit 3 = 1
    *   TOP: 0 < 50 (No) -> Bit 4 = 0
    *   Outcode for P1: `1001` (Binary) = 9 (Decimal)

*   **P2(60, 60):**
    *   LEFT: 60 < 10 (No) -> Bit 1 = 0
    *   RIGHT: 60 > 50 (Yes) -> Bit 2 = 1
    *   BOTTOM: 60 < 10 (No) -> Bit 3 = 0
    *   TOP: 60 > 50 (Yes) -> Bit 4 = 1
    *   Outcode for P2: `0110` (Binary) = 6 (Decimal)

*   **Trivial Reject?** `9 & 6` (Binary `1001 & 0110`) = `0000`. Not a trivial reject.
*   **Trivial Accept?** Neither outcode is `0000`. Not a trivial accept.

*   **Clipping:**
    *   Choose P1(0, 0) as the outside point (outcode `1001`).
    *   It's LEFT and BOTTOM. Let's clip against the LEFT boundary (`x = 10`).
        *   `y = 0 + (60 - 0) * (10 - 0) / (60 - 0) = 0 + 60 * 10 / 60 = 10`
        *   Intersection point: (10, 10).
        *   Replace P1 with (10, 10). New segment: (10, 10) to (60, 60).
    *   **Recompute Outcode for (10, 10):**
        *   LEFT: 10 < 10 (No) -> 0
        *   RIGHT: 10 > 50 (No) -> 0
        *   BOTTOM: 10 < 10 (No) -> 0
        *   TOP: 10 > 50 (No) -> 0
        *   Outcode for (10, 10): `0000`.
    *   **New Check:**
        *   Outcode for (10, 10): `0000`
        *   Outcode for (60, 60): `0110`
        *   `0000 & 0110 = 0000`. Not a trivial reject.
        *   `0000` is inside. Trivial accept for (10, 10).
    *   Now we have a line from (10, 10) to (60, 60). We know (10, 10) is inside. We need to clip (60, 60).
    *   Choose P2(60, 60) as the outside point (outcode `0110`).
    *   It's RIGHT and TOP. Let's clip against the TOP boundary (`y = 50`).
        *   `x = 10 + (10 - 60) * (50 - 10) / (60 - 10) = 10 + (-50) * 40 / 50 = 10 - 40 = -30`
        *   Wait, I used the wrong endpoint's x for the formula. Let's recalculate with P1=(10,10) and P2=(60,60)
        *   Using P1=(10,10), P2=(60,60)
        *   Clip against TOP boundary (y=50):
            *   `x = x1 + (x2 - x1) * (y_boundary - y1) / (y2 - y1)`
            *   `x = 10 + (60 - 10) * (50 - 10) / (60 - 10)`
            *   `x = 10 + 50 * 40 / 50 = 10 + 40 = 50`
        *   Intersection point: (50, 50).
        *   Replace P2 with (50, 50). New segment: (10, 10) to (50, 50).
    *   **Recompute Outcode for (50, 50):**
        *   LEFT: 50 < 10 (No) -> 0
        *   RIGHT: 50 > 50 (No) -> 0
        *   BOTTOM: 50 < 10 (No) -> 0
        *   TOP: 50 > 50 (No) -> 0
        *   Outcode for (50, 50): `0000`.
    *   **New Check:**
        *   Outcode for (10, 10): `0000`
        *   Outcode for (50, 50): `0000`
        *   `0000 & 0000 = 0000`. Not a trivial reject.
        *   Both are `0000`. Trivial accept.
    *   The clipped line segment is from (10, 10) to (50, 50).

**Important Points for Cohen-Sutherland:**

*   Prioritize clipping against the correct boundaries. If a point is in multiple outside regions, clip against one boundary at a time. A common strategy is LEFT, RIGHT, BOTTOM, TOP.
*   Efficient for lines that are mostly inside or mostly outside the window.
*   Can be slow if the line segment needs many clipping steps.

#### 2.2 Midpoint Subdivision Line Clipping Algorithm

This algorithm is based on a divide-and-conquer approach. It recursively subdivides the line segment until portions fall entirely inside or outside the window.

**Key Concepts:**

*   **Recursion:** The algorithm divides the line segment into two halves.
*   **Bounding Box:** It checks if the bounding box of the current line segment (or subdivision) is completely inside or completely outside the clipping window.
*   **Bounding Box Check:**
    *   Let the current line segment be from (x1, y1) to (x2, y2).
    *   Find `minX = min(x1, x2)`, `maxX = max(x1, x2)`, `minY = min(y1, y2)`, `maxY = max(y1, y2)`.
    *   **Trivial Accept:** If `minX >= xmin` AND `maxX <= xmax` AND `minY >= ymin` AND `maxY <= ymax`, the entire segment is inside.
    *   **Trivial Reject:** If `maxX < xmin` OR `minX > xmax` OR `maxY < ymin` OR `minY > ymax`, the entire segment is outside.
*   **Recursive Step:** If neither trivial accept nor reject occurs, subdivide the line segment into two halves at its midpoint `((x1+x2)/2, (y1+y2)/2)`. Recursively apply the algorithm to both halves.

**Algorithm Steps:**

1.  **Check Trivial Accept/Reject:** For the current line segment (or sub-segment), perform the bounding box check.
    *   If trivial accept, draw the segment.
    *   If trivial reject, discard the segment.
2.  **Subdivide:** If neither accept nor reject, calculate the midpoint `(midX, midY)`.
3.  **Recurse:** Call the clipping function recursively for the two new line segments:
    *   Segment 1: `(x1, y1)` to `(midX, midY)`
    *   Segment 2: `(midX, midY)` to `(x2, y2)`

**Example:**

Consider a clipping window with `xmin=10`, `ymin=10`, `xmax=50`, `ymax=50`.
Line segment from P1(0, 0) to P2(60, 70).

*   **Call Clip( (0,0), (60,70) ):**
    *   Bounding box: minX=0, maxX=60, minY=0, maxY=70.
    *   Trivial Reject? `maxX (60) > xmax (50)` (True). Not a full reject yet.
    *   Trivial Accept? `minX (0) < xmin (10)` (True). Not a full accept.
    *   Subdivide. Midpoint: `( (0+60)/2, (0+70)/2 ) = (30, 35)`.
    *   Recursive calls:
        *   `Clip( (0,0), (30,35) )`
        *   `Clip( (30,35), (60,70) )`

*   **Call Clip( (0,0), (30,35) ):**
    *   Bounding box: minX=0, maxX=30, minY=0, maxY=35.
    *   Trivial Reject? `maxX (30) < xmin (10)` (False). `minX (0) > xmax (50)` (False). `maxY (35) < ymin (10)` (False). `minY (0) > ymax (50)` (False). None of these are true, so it's not a trivial reject.
    *   Trivial Accept? `minX (0) >= xmin (10)` (False). Not a full accept.
    *   Subdivide. Midpoint: `( (0+30)/2, (0+35)/2 ) = (15, 17.5)`.
    *   Recursive calls:
        *   `Clip( (0,0), (15,17.5) )`
        *   `Clip( (15,17.5), (30,35) )`

*   **Call Clip( (0,0), (15,17.5) ):**
    *   Bounding box: minX=0, maxX=15, minY=0, maxY=17.5.
    *   Trivial Reject? `minX (0) > xmax (50)` (False). `maxX (15) < xmin (10)` (False). `minY (0) > ymax (50)` (False). `maxY (17.5) < ymin (10)` (False). Not a reject.
    *   Trivial Accept? `minX (0) >= xmin (10)` (False). Not an accept.
    *   Subdivide. Midpoint: `(7.5, 8.75)`.
    *   Recursive calls:
        *   `Clip( (0,0), (7.5,8.75) )`
        *   `Clip( (7.5,8.75), (15,17.5) )`

*   **Call Clip( (0,0), (7.5,8.75) ):**
    *   Bounding box: minX=0, maxX=7.5, minY=0, maxY=8.75.
    *   Trivial Reject? `maxX (7.5) < xmin (10)` (True). Trivial Reject. Discard this segment.

*   **Call Clip( (7.5,8.75), (15,17.5) ):**
    *   Bounding box: minX=7.5, maxX=15, minY=8.75, maxY=17.5.
    *   Trivial Reject? `maxX (15) < xmin (10)` (False). `minX (7.5) > xmax (50)` (False). `maxY (17.5) < ymin (10)` (False). `minY (8.75) > ymax (50)` (False). Not a reject.
    *   Trivial Accept? `minX (7.5) >= xmin (10)` (False). Not an accept.
    *   Subdivide. Midpoint: `(11.25, 13.125)`.
    *   Recursive calls:
        *   `Clip( (7.5,8.75), (11.25,13.125) )`
        *   `Clip( (11.25,13.125), (15,17.5) )`

*   **Call Clip( (7.5,8.75), (11.25,13.125) ):**
    *   Bounding box: minX=7.5, maxX=11.25, minY=8.75, maxY=13.125.
    *   Trivial Reject? No.
    *   Trivial Accept? `minX (7.5) >= xmin (10)` (False). Not an accept.
    *   Subdivide... (This continues until the segments are small enough or clearly inside/outside).

*   Eventually, we will get segments that are fully inside. For example, a segment like `(15, 17.5)` to `(30, 35)` would have a bounding box fully inside the `[10, 50]` x `[10, 50]` window.

**Important Points for Midpoint Subdivision:**

*   Recursively efficient, good for lines that cross the window diagonally or in complex ways.
*   Can generate many small line segments if not carefully implemented (potential for over-subdivision).
*   Each recursive call involves a bounding box check.

---

### 3. Polygon Clipping Algorithms

These algorithms clip an entire polygon against a clipping window. They are more complex than line clipping because they need to handle multiple intersecting edges and maintain the polygon's structure.

#### 3.1 Sutherland-Hodgman Polygon Clipping Algorithm

This algorithm clips a polygon against a single, convex clipping window (usually rectangular) by processing the polygon against each edge of the window sequentially.

**Key Concepts:**

*   **Convex Window:** The clipping window must be convex. Rectangular windows are convex.
*   **Edge-by-Edge Clipping:** The algorithm iterates through each edge of the clipping window. For each edge, it takes the output polygon from the previous clipping stage and produces a new output polygon clipped against the current window edge.
*   **Clipping Against a Single Edge:** For a given window edge (defined by an infinite line), the algorithm processes the input polygon's edges one by one. For each input edge `S -> P` (start point S, end point P):
    *   **Case 1: Both S and P inside:** Output P.
    *   **Case 2: S inside, P outside:** Output the intersection point of S-P with the clipping edge.
    *   **Case 3: Both S and P outside:** Output nothing.
    *   **Case 4: S outside, P inside:** Output the intersection point of S-P with the clipping edge, then output P.

    *   "Inside" and "outside" are determined by which side of the clipping edge the polygon is supposed to be on. For a convex polygon and a convex clipping window, this is straightforward.

*   **Processing Order:** The order of clipping against window edges matters if the polygon is not convex. However, for a rectangular window, clipping against the four edges in a consistent order (e.g., Left, Right, Bottom, Top) works correctly.

**Algorithm Steps:**

1.  Initialize the output polygon to be the input polygon.
2.  For each edge of the clipping window (e.g., left edge, right edge, bottom edge, top edge):
    a.  Take the current output polygon as the input polygon for this stage.
    b.  Create an empty list for the new output polygon.
    c.  Iterate through each edge of the input polygon (from vertex `Vi` to `Vi+1`, wrapping around). Let `S = Vi` and `P = Vi+1`.
    d.  Apply the four cases described above to determine what to add to the new output polygon based on whether S and P are inside or outside the current window edge.
    e.  Replace the current output polygon with the new output polygon.
3.  After clipping against all window edges, the final output polygon is the result.

**Example:**

Clip a triangle (0,0), (5,10), (10,0) against a window xmin=2, ymin=2, xmax=8, ymax=8.

*   **Input Polygon:** (0,0), (5,10), (10,0)

*   **Clip against Left Edge (x=2, line is x >= 2):**
    *   Edge (0,0) -> (5,10): S(0,0) is OUT, P(5,10) is IN.
        *   Intersection with x=2: `y = 0 + (10-0)*(2-0)/(5-0) = 0 + 10*2/5 = 4`. Point: (2,4).
        *   Output: (2,4), (5,10).
    *   Edge (5,10) -> (10,0): S(5,10) is IN, P(10,0) is IN.
        *   Output: (10,0).
    *   Edge (10,0) -> (0,0): S(10,0) is IN, P(0,0) is OUT.
        *   Intersection with x=2: `y = 0 + (0-0)*(2-10)/(0-10) = 0`. Point: (2,0).
        *   Output: (2,0), (0,0) -> Wait, P(0,0) is OUT of x=2, so we should output the intersection (2,0) and then check P. P(0,0) is outside the window. So only (2,0) is output for this segment.
        *   Let's retrace:
            *   (0,0) -> (5,10): S(0,0) OUT, P(5,10) IN. Intersection (2,4). Output: (2,4), (5,10).
            *   (5,10) -> (10,0): S(5,10) IN, P(10,0) IN. Output: (10,0).
            *   (10,0) -> (0,0): S(10,0) IN, P(0,0) OUT. Intersection (2,0). Output: (2,0).
    *   **Output Polygon after Left Clip:** (2,4), (5,10), (10,0), (2,0). (This forms a trapezoid)

*   **Clip against Top Edge (y=8, line is y <= 8):**
    *   Input: (2,4), (5,10), (10,0), (2,0)
    *   Edge (2,4) -> (5,10): S(2,4) IN, P(5,10) OUT.
        *   Intersection with y=8: `x = 2 + (5-2)*(8-4)/(10-4) = 2 + 3*4/6 = 2 + 2 = 4`. Point: (4,8).
        *   Output: (4,8).
    *   Edge (5,10) -> (10,0): S(5,10) OUT, P(10,0) IN.
        *   Intersection with y=8: `x = 5 + (10-5)*(8-10)/(0-10) = 5 + 5*(-2)/(-10) = 5 + 1 = 6`. Point: (6,8).
        *   Output: (6,8), (10,0).
    *   Edge (10,0) -> (2,0): S(10,0) IN, P(2,0) IN.
        *   Output: (2,0).
    *   Edge (2,0) -> (2,4): S(2,0) IN, P(2,4) IN.
        *   Output: (2,4).
    *   **Output Polygon after Top Clip:** (4,8), (6,8), (10,0), (2,0), (2,4). (This now has a flat top)

*   **Clip against Right Edge (x=8, line is x <= 8):**
    *   Input: (4,8), (6,8), (10,0), (2,0), (2,4)
    *   Edge (4,8) -> (6,8): S(4,8) IN, P(6,8) IN. Output: (6,8).
    *   Edge (6,8) -> (10,0): S(6,8) IN, P(10,0) OUT.
        *   Intersection with x=8: `y = 8 + (0-8)*(8-6)/(10-6) = 8 + (-8)*2/4 = 8 - 4 = 4`. Point: (8,4).
        *   Output: (8,4).
    *   Edge (10,0) -> (2,0): S(10,0) OUT, P(2,0) IN.
        *   Intersection with x=8: `y = 0 + (0-0)*(8-10)/(2-10) = 0`. Point: (8,0).
        *   Output: (8,0), (2,0).
    *   Edge (2,0) -> (2,4): S(2,0) IN, P(2,4) IN. Output: (2,4).
    *   Edge (2,4) -> (4,8): S(2,4) IN, P(4,8) IN. Output: (4,8).
    *   **Output Polygon after Right Clip:** (6,8), (8,4), (8,0), (2,0), (2,4), (4,8).

*   **Clip against Bottom Edge (y=2, line is y >= 2):**
    *   Input: (6,8), (8,4), (8,0), (2,0), (2,4), (4,8)
    *   Edge (6,8) -> (8,4): S(6,8) IN, P(8,4) IN. Output: (8,4).
    *   Edge (8,4) -> (8,0): S(8,4) IN, P(8,0) OUT.
        *   Intersection with y=2: `x = 8 + (8-8)*(2-4)/(0-4) = 8`. Point: (8,2).
        *   Output: (8,2).
    *   Edge (8,0) -> (2,0): S(8,0) OUT, P(2,0) OUT. Output: Nothing.
    *   Edge (2,0) -> (2,4): S(2,0) OUT, P(2,4) IN.
        *   Intersection with y=2: `x = 2 + (2-2)*(2-0)/(4-0) = 2`. Point: (2,2).
        *   Output: (2,2), (2,4).
    *   Edge (2,4) -> (4,8): S(2,4) IN, P(4,8) IN. Output: (4,8).
    *   Edge (4,8) -> (6,8): S(4,8) IN, P(6,8) IN. Output: (6,8).
    *   **Final Output Polygon:** (8,4), (8,2), (2,2), (2,4), (4,8), (6,8).

**Important Points for Sutherland-Hodgman:**

*   Works well for clipping against convex windows.
*   Can produce "slivers" or degenerate polygons if not handled carefully.
*   Does *not* work directly for clipping against concave windows.
*   The output polygon is always convex.

#### 3.2 Weiler-Atherton Polygon Clipping Algorithm

This algorithm is more general and can clip concave polygons against arbitrary (convex or concave) clipping windows. It's more complex to implement.

**Key Concepts:**

*   **General Polygon Clipping:** Handles both convex and concave polygons, as well as concave clipping regions.
*   **Intersection Points:** Finds all intersection points between the polygon's edges and the clipping window's edges.
*   **Following Paths:** The algorithm traverses both the polygon's boundary and the clipping window's boundary, switching between them at intersection points.
*   **Classifying Vertices:** Vertices are classified as either 'entering' or 'exiting' the clipping region.
*   **Two Types of Paths:**
    1.  **Polygon-Inside Paths:** Traces segments of the subject polygon that lie inside the clipping region.
    2.  **Window-Inside Paths:** Traces segments of the clipping window's boundary that lie inside the subject polygon.

**Algorithm Steps (Simplified):**

1.  **Find All Intersections:** Identify all points where edges of the subject polygon intersect edges of the clipping window.
2.  **Create New Vertex Lists:** Augment the vertex lists of both the subject polygon and the clipping window by inserting the intersection points in order along their respective edges.
3.  **Classify Intersection Points:** For each intersection point, determine if it's an "entering" or "exiting" point relative to the clipping window (or subject polygon if clipping the window).
4.  **Trace Clipped Polygon(s):**
    *   Start at an unvisited intersection point classified as "entering" the clipping window.
    *   Follow the subject polygon's boundary until another intersection point is reached.
    *   If this intersection point is "exiting" the clipping window, switch to following the clipping window's boundary.
    *   Continue following the clipping window's boundary until an "entering" intersection point is reached.
    *   Switch back to following the subject polygon's boundary.
    *   Repeat this process, keeping track of visited intersection points, until a complete clipped polygon is formed.
    *   This process might need to be repeated if the clipping window itself is fragmented by the subject polygon, or if the subject polygon has holes.

**Example Scenario:**

Imagine clipping a star-shaped polygon against a rectangular window. The star has inward-pointing vertices.

*   Sutherland-Hodgman would struggle because it assumes the output of one stage is a simple polygon that can be clipped by the next edge. A star might produce complex shapes after clipping an edge, potentially becoming self-intersecting or creating multiple disconnected pieces.
*   Weiler-Atherton would:
    1.  Find where the star's lines cross the rectangle's lines.
    2.  Identify which segments of the star are inside the rectangle and which are outside.
    3.  Trace the boundary, switching from the star's edge to the rectangle's edge at intersection points, to form the new, clipped polygon(s).

**Important Points for Weiler-Atherton:**

*   **Generality:** Can clip any polygon against any other polygon (concave or convex).
*   **Complexity:** Significantly more complex to implement due to managing multiple intersection points and traversal rules.
*   **Holes:** Can handle polygons with holes.
*   **Output:** Can produce multiple disjointed polygons or polygons with holes.

---

### 4. Practice Questions

1.  **Cohen-Sutherland:**
    Given a clipping window with `xmin=0`, `ymin=0`, `xmax=100`, `ymax=100`, clip the line segment from P1(50, 150) to P2(150, 50). Show all steps, including outcode calculations and intersection points.
    **Answer:**
    *   P1(50, 150): Outcode = `1000` (TOP)
    *   P2(150, 50): Outcode = `0010` (RIGHT)
    *   `1000 & 0010` = `0000`. Not a trivial reject.
    *   Clip P1 against TOP (y=100):
        *   `x = 50 + (150-50)*(100-150)/(50-150) = 50 + 100*(-50)/(-100) = 50 + 50 = 100`.
        *   New P1: (100, 100). Outcode: `0000`.
    *   New segment: (100, 100) to (150, 50).
    *   Clip P2(150, 50) against RIGHT (x=100):
        *   `y = 100 + (50-100)*(100-100)/(150-100) = 100 + (-50)*0/50 = 100`.
        *   Wait, this calculation is wrong. Re-calculating for P2(150,50) against RIGHT boundary x=100.
        *   `y = y1 + (y2 - y1) * (x_boundary - x1) / (x2 - x1)`
        *   `y = 100 + (50 - 100) * (100 - 100) / (150 - 100)`
        *   `y = 100 + (-50) * 0 / 50 = 100`. This is incorrect. I'm using the clipped P1.

    Let's retry the second clipping step with the correct segment (100, 100) to (150, 50).
    *   Current segment: P1'(100, 100) [OUTCODE 0000] to P2(150, 50) [OUTCODE 0010].
    *   P1' is inside (trivial accept of this endpoint). We need to clip P2(150, 50) against the window boundaries it's outside of.
    *   P2(150, 50) is RIGHT (x=150 > 100) and INSIDE TOP/BOTTOM (50 is between 0 and 100).
    *   Clip against RIGHT boundary (x=100):
        *   `y = 100 + (50 - 100) * (100 - 100) / (150 - 100)`
        *   `y = 100 + (-50) * 0 / 50 = 100`. This is still wrong. The error is in using the wrong formula for x_boundary.

    Let's use the correct line equation parameters. Line from (100,100) to (150,50).
    `m = (50-100)/(150-100) = -50/50 = -1`.
    Equation: `y - 100 = -1 * (x - 100)` => `y = -x + 100 + 100` => `y = -x + 200`.

    *   Clip P2(150, 50) against RIGHT boundary (x=100):
        *   Substitute x=100 into `y = -x + 200`
        *   `y = -100 + 200 = 100`.
        *   Intersection point: (100, 100).
        *   Replace P2 with (100, 100).
    *   New segment: (100, 100) to (100, 100). This is a point.
    *   Outcode for (100,100) is `0000`.
    *   Trivial accept.
    *   The clipped line is the point (100, 100).

    Let's re-check the first intersection:
    *   Original line P1(50, 150) to P2(150, 50).
    *   Line equation: `m = (50-150)/(150-50) = -100/100 = -1`.
    *   `y - 150 = -1 * (x - 50)` => `y = -x + 50 + 150` => `y = -x + 200`.

    *   Clip P1(50, 150) against TOP boundary (y=100):
        *   `100 = -x + 200` => `x = 100`.
        *   Intersection: (100, 100).
        *   New segment P1'(100, 100) to P2(150, 50).

    *   Now, consider P2(150, 50) from the original segment. It's outside (RIGHT).
    *   Clip P2(150, 50) against RIGHT boundary (x=100).
        *   `y = -100 + 200 = 100`.
        *   Intersection: (100, 100).
    *   The clipped line segment is from (100, 100) to (100, 100). This is a single point.

    My manual calculation of the second intersection was flawed initially. The point (100, 100) is indeed the intersection for both endpoints when clipping against the respective outside boundaries.

2.  **Midpoint Subdivision:**
    Given a clipping window with `xmin=20`, `ymin=20`, `xmax=80`, `ymax=80`, would the line segment from P1(0, 0) to P2(100, 100) be trivially rejected or trivially accepted based on its bounding box? If not, what would be the first subdivision step?
    **Answer:**
    *   Bounding box of P1(0,0) to P2(100,100) is `minX=0, maxX=100, minY=0, maxY=100`.
    *   Trivial Accept? `minX (0) >= xmin (20)` is False. Not accepted.
    *   Trivial Reject? `maxX (100) < xmin (20)` is False. `minX (0) > xmax (80)` is False. `maxY (100) < ymin (20)` is False. `minY (0) > ymax (80)` is False. None are true, so it's not trivially rejected either.
    *   Subdivision: The midpoint is `((0+100)/2, (0+100)/2) = (50, 50)`.
    *   The first subdivision step will recursively call the algorithm on segments (0,0) to (50,50) and (50,50) to (100,100).

3.  **Sutherland-Hodgman:**
    Consider a square polygon with vertices A(1,1), B(1,5), C(5,5), D(5,1). Clip this against a clipping window with `xmin=2`, `ymin=2`, `xmax=4`, `ymax=4`. Briefly describe the expected shape of the output polygon.
    **Answer:**
    The clipping window is a 2x2 square in the center of the larger 4x4 square.
    *   Clipping against Left (x=2): Vertices A and D will be moved to x=2, forming a trapezoid.
    *   Clipping against Top (y=4): The top edges will be cut off.
    *   Clipping against Right (x=4): The right edges will be cut off.
    *   Clipping against Bottom (y=2): The bottom edges will be cut off.
    The final output will be a square, specifically the region of the original square that lies within the clipping window. The vertices will be (2,2), (2,4), (4,4), (4,2).

---

### 5. Important Points to Remember

*   **Clipping Window:** Most algorithms assume a rectangular, axis-aligned clipping window for simplicity.
*   **Cohen-Sutherland:** Relies on region codes, efficient for lines mostly inside or outside, uses line-boundary intersection.
*   **Midpoint Subdivision:** Recursive, divide-and-conquer approach, good for diagonal lines, checks bounding boxes.
*   **Sutherland-Hodgman:** Edge-by-edge clipping, suitable for convex clipping windows, produces convex output polygons.
*   **Weiler-Atherton:** General purpose, handles concave polygons and concave windows, more complex implementation.
*   **Intersection Calculations:** Accurate calculation of intersection points is crucial for all line clipping algorithms.
*   **Polygon Clipping:** Polygon clipping algorithms must maintain the connectivity and order of vertices to form a valid output polygon.
