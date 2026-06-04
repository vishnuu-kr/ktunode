---
title: "Jarvis's march (gift wrapping) algorithm"
subject: "COMPUTATIONAL GEOMETRY"
module: "Module 1: Introduction to Computational Geometry:"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b22b"
status: "completed"
scrapedAt: "2026-05-20T16:10:39.184Z"
---
## Computational Geometry: Module 1 - Jarvis's March (Gift Wrapping) Algorithm

These notes cover Jarvis's March algorithm (also known as the Gift Wrapping algorithm) within the context of Module 1: Introduction to Computational Geometry.

**Learning Outcomes:**

*   Understand the concept of a convex hull.
*   Explain the working principle of Jarvis's March algorithm.
*   Implement Jarvis's March algorithm.
*   Analyze the time complexity of Jarvis's March algorithm.
*   Identify the advantages and disadvantages of Jarvis's March algorithm.

**1. Introduction to Convex Hulls**

*   **Definition:** The convex hull of a set of points *S* in a plane (or higher dimensions) is the smallest convex polygon (or polyhedron) that contains all the points in *S*.  Intuitively, it's like stretching a rubber band around the points; the rubber band forms the convex hull.
*   **Convexity:**  A region is convex if, for any two points within the region, the straight line segment connecting those points is entirely contained within the region.
*   **Applications:**
    *   **Pattern Recognition:**  Identifying shapes and features.
    *   **Image Processing:** Object detection and representation.
    *   **Collision Detection:**  Simplifying shapes for faster collision checks in games and simulations.
    *   **Data Analysis:** Outlier detection and data summarization.
*   **Key Concepts:**
    *   **Boundary Points:** The points that lie on the perimeter of the convex hull. These are a subset of the original point set.
    *   **Interior Points:** The points that lie inside the convex hull.
    *   **Extreme Points:** Points that cannot be written as a convex combination of other points in the set.  In the 2D case, these are vertices of the convex hull.

**2. Jarvis's March Algorithm (Gift Wrapping)**

*   **Principle:**  The algorithm works like wrapping a gift.  It starts with an extreme point (e.g., the leftmost point) and iteratively finds the next point that creates a "right turn" relative to the current edge of the hull.
*   **Steps:**

    1.  **Initialization:**
        *   Find the leftmost point (the point with the smallest x-coordinate). This point is guaranteed to be on the convex hull.  Call it `p0`. Add `p0` to the convex hull.

    2.  **Iteration (Gift Wrapping):**
        *   Let `p1` be an arbitrary point in the set *S* (initially, it can be any point other than `p0`).
        *   For each remaining point `p` in *S*, check if `p` makes a "right turn" (or is co-linear) compared to the line formed by the last point added to the hull (`p0` in the first iteration) and `p1`.

        *   **Right Turn Test:**  Use the orientation test (or cross-product) to determine if three points `a`, `b`, and `c` form a left turn, right turn, or are collinear. The orientation test involves calculating the determinant:

            ```
            det = (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x)
            ```

            *   If `det > 0`:  Left turn (counter-clockwise)
            *   If `det < 0`:  Right turn (clockwise)
            *   If `det == 0`: Collinear

        *   If point `p` makes a right turn compared to `p1`, then update `p1` to be `p`.  Essentially, `p1` is maintained as the "most right" point seen so far.

        *   After iterating through all points, `p1` will be the next vertex on the convex hull.  Add `p1` to the convex hull.
        *   Set `p0` to `p1` and repeat the iteration.

    3.  **Termination:**  Continue the iteration until the algorithm returns to the initial point `p0`. This indicates the completion of the convex hull.

*   **Pseudocode:**

    ```
    function jarvisMarch(points):
        // Find the leftmost point
        p0 = leftmostPoint(points)
        hull = [p0]
        p1 = points[0] // initially any point

        while True:
            for p in points:
                if orientation(hull[-1], p1, p) == "right":
                    p1 = p

            if p1 == hull[0]: // Back to the start
                break

            hull.append(p1)
            p0 = p1
            p1 = points[0] // reset for next iteration

        return hull
    ```

**3. Implementation Example (Python)**

```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

def orientation(p, q, r):
    """
    Determines the orientation of three points (p, q, r).
    Returns:
        1: Clockwise (Right turn)
        -1: Counterclockwise (Left turn)
        0: Collinear
    """
    val = (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y)
    if val == 0:
        return 0  # Collinear
    return 1 if val > 0 else -1  # Clockwise or Counterclockwise

def leftmostPoint(points):
    """Finds the leftmost point (minimum x-coordinate)."""
    leftmost = points[0]
    for p in points:
        if p.x < leftmost.x:
            leftmost = p
        elif p.x == leftmost.x and p.y < leftmost.y: #Handle tie breaks with lowest y
            leftmost = p
    return leftmost

def jarvisMarch(points):
    """Computes the convex hull using Jarvis's March."""
    n = len(points)
    if n < 3:
        return points  # Need at least 3 points to form a hull

    hull = []

    # Find the leftmost point
    l = leftmostPoint(points)
    hull.append(l)

    q = points[0] #Start with any point
    while True:
        next_hull_pt = points[0]
        for p in points:
            # If p is more counterclockwise than current q, then
            # update q
            if orientation(hull[-1], next_hull_pt, p) == -1:
                next_hull_pt = p
            elif orientation(hull[-1], next_hull_pt, p) == 0: #Handle Collinear case
                #If collinear, take the furthest point
                if(distSq(hull[-1], p) > distSq(hull[-1], next_hull_pt)):
                     next_hull_pt = p
        # Add the most counterclockwise point to hull
        hull.append(next_hull_pt)

        q = next_hull_pt
        if q == l:
            break

    return hull

def distSq(p1, p2):
    """Calculates squared distance between two points."""
    return (p1.x - p2.x)**2 + (p1.y - p2.y)**2


# Example Usage:
points = [Point(0, 3), Point(1, 1), Point(2, 2), Point(4, 4), Point(0, 0),
          Point(1, 2), Point(3, 1), Point(3, 0)]

hull_points = jarvisMarch(points)

print("Convex Hull Points:")
for p in hull_points:
    print(f"({p.x}, {p.y})")

```

**4. Time Complexity Analysis**

*   Let *n* be the total number of points in the input set.
*   Let *h* be the number of vertices on the convex hull.
*   The algorithm iterates *h* times (once for each hull vertex).
*   In each iteration, the algorithm examines all *n* points to find the next hull vertex.
*   Therefore, the time complexity of Jarvis's March is **O(n * h)**.
*   **Worst-case:**  When all points lie on the convex hull (i.e., *h* = *n*), the time complexity becomes O(n<sup>2</sup>).
*   **Best-case:** When *h* is small compared to *n*, the algorithm can be relatively efficient.

**5. Advantages and Disadvantages**

*   **Advantages:**
    *   Simple to understand and implement.
    *   Efficient when the number of vertices on the convex hull is small (i.e., *h* is small).
    *   Can be more efficient than some other algorithms (e.g., Graham's scan) when dealing with datasets where only a few points lie on the convex hull.
*   **Disadvantages:**
    *   Inefficient in the worst-case scenario where all or most points are on the convex hull. In such cases, its O(n<sup>2</sup>) complexity becomes a bottleneck.
    *   Sensitive to the distribution of points. Its performance degrades when many points are near the convex hull.

**6. Important Points to Remember**

*   Jarvis's March relies on the "right turn" orientation test.
*   The algorithm "wraps" around the points, hence the name "Gift Wrapping."
*   The time complexity is heavily influenced by the number of vertices on the convex hull (*h*).
*   Collinear points require special handling in the implementation (see collinear handling in the python implementation).

**7. Practice Questions/Exercises**

1.  **Question:** Given the following set of points: (1, 1), (2, 4), (3, 1), (4, 2), (5, 5), (6, 1), (7, 3).  Manually trace the execution of Jarvis's March and list the vertices of the resulting convex hull in the order they are discovered by the algorithm.

    **Answer:**  The leftmost point is (1, 1). The algorithm proceeds as follows:
    *   (1, 1)
    *   (6, 1)
    *   (5, 5)
    *   (2, 4)
    Therefore, the convex hull vertices are (1, 1), (6, 1), (5, 5), (2, 4).

2.  **Question:**  What is the time complexity of Jarvis's March in the best-case scenario, and what kind of data distribution leads to this best-case performance?

    **Answer:** The best-case time complexity is O(n), which occurs when h = O(1) (a constant number of vertices on the hull).  This happens when almost all points are clustered inside, far from the convex hull.
3.  **Question:** How does the choice of initial point affect the execution of Jarvis's March, and can any point be chosen as the starting point?

    **Answer:** While the algorithm *can* start from any point on the convex hull, starting from the leftmost (or rightmost, or highest, or lowest) point guarantees that the algorithm will eventually find all the correct vertices. Starting from a point *inside* the convex hull would lead to an infinite loop or an incorrect hull. It is crucial to start from an *extreme point*. Choosing an arbitrary point might require an additional step to find an extreme point first.

4. **Question:** In the implementation example, collinear points are handled by taking the farthest point. Why is this approach used, and what issue would arise if the closest point was taken instead?

    **Answer:** Collinear points can lie on the edge of the convex hull.  If we *always* choose the closest collinear point, we might exclude points that *should* be part of the hull (specifically, the extreme collinear points). Taking the *farthest* collinear point ensures that the edge of the hull extends to its maximum extent along that line segment, including all points that contribute to the hull's boundary. Taking the closest point can lead to a hull that is smaller than it should be.
