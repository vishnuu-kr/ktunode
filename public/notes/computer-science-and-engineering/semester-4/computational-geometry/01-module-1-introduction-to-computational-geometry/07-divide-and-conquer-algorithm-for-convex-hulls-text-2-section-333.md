---
title: "Divide and conquer algorithm for convex hulls (Text 2, Section 33.3)"
subject: "COMPUTATIONAL GEOMETRY"
module: "Module 1: Introduction to Computational Geometry:"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b22c"
status: "completed"
scrapedAt: "2026-05-20T16:10:39.899Z"
---
# Computational Geometry: Module 1 - Divide and Conquer Algorithm for Convex Hulls

## Introduction

This module explores the Divide and Conquer algorithm for computing the convex hull of a set of points.  We'll focus on Text 2, Section 33.3, which likely outlines a specific implementation or perspective on this algorithm.

**Text 2, Section 33.3 Assumed Content:** While the exact content of Section 33.3 isn't provided, we will assume it covers a standard Divide and Conquer Convex Hull algorithm, similar to Graham's Scan or Chan's Algorithm but implemented using a Divide and Conquer strategy.  This usually involves recursively dividing the point set, computing convex hulls of the subsets, and then merging them.

**Learning Outcomes:**

1.  Understand the general Divide and Conquer paradigm.
2.  Describe the steps of a Divide and Conquer algorithm for computing the convex hull of a set of points.
3.  Analyze the time complexity of the Divide and Conquer convex hull algorithm.
4.  Implement the Divide and Conquer convex hull algorithm.
5.  Understand the merging step in detail and identify potential edge cases.

## 1. Understanding the Divide and Conquer Paradigm

*   **Definition:** Divide and Conquer is an algorithmic paradigm that works by recursively breaking down a problem into two or more sub-problems of the same or related type, until these become simple enough to be solved directly. The solutions to the sub-problems are then combined to give a solution to the original problem.
*   **Key Steps:**
    *   **Divide:** Break the problem into smaller subproblems.
    *   **Conquer:** Solve the subproblems recursively. If the subproblem is small enough, solve it directly.
    *   **Combine:** Merge the solutions to the subproblems into the solution for the original problem.
*   **Advantages:**  Can lead to efficient algorithms (often O(n log n)).  Suited for parallel processing.
*   **Disadvantages:**  Can be complex to implement correctly, particularly the combining step.  Overhead from recursive calls.

## 2. Divide and Conquer Algorithm for Convex Hulls

This section outlines the general steps of a Divide and Conquer algorithm for computing the convex hull. The specific implementation details might vary slightly based on the textbook/resource being used.

*   **Algorithm Outline:**

    1.  **Divide:**
        *   Sort the points by their x-coordinate (or another suitable coordinate like y-coordinate). This typically takes O(n log n) time.
        *   Divide the sorted points into two (or more) roughly equal-sized subsets, `L` (left) and `R` (right).
    2.  **Conquer:**
        *   Recursively compute the convex hull of `L`, denoted `CH(L)`.
        *   Recursively compute the convex hull of `R`, denoted `CH(R)`.
        *   Base Case: If the number of points is small (e.g., 2 or 3), compute the convex hull directly (a line segment or triangle).
    3.  **Combine (Merge):**
        *   Merge the two convex hulls `CH(L)` and `CH(R)` into a single convex hull `CH(S)`, where `S` is the original set of points.  This is the most complex step. This typically uses the *tangent finding* method.

*   **Detailed Explanation of the Merge Step (Crucial):**

    *   **Goal:**  To find the *upper* and *lower* common tangents between `CH(L)` and `CH(R)`. These tangents define the edges that link the two hulls together, forming the final convex hull.  The portions of the original convex hulls *inside* the new hull are discarded.
    *   **Upper Tangent:**  A line segment that is tangent to both `CH(L)` and `CH(R)` and above both hulls.
    *   **Lower Tangent:** A line segment that is tangent to both `CH(L)` and `CH(R)` and below both hulls.
    *   **Finding the Tangents:**
        1.  **Initialization:** Start with a point on the rightmost point of `CH(L)` (call it `a`) and the leftmost point of `CH(R)` (call it `b`).
        2.  **Iteration (Upper Tangent):**
            *   While the line `ab` is *not* an upper tangent:
                *   If rotating `ab` clockwise around `a` makes the line more tangent to both hulls, move `a` to the next clockwise point on `CH(L)`.
                *   Otherwise, rotate `ab` counter-clockwise around `b`, and move `b` to the next counter-clockwise point on `CH(R)`.
        3.  **Iteration (Lower Tangent):**  Repeat a similar process as above, but find the lower tangent by checking for the opposite rotation.
        4.  **Update the Convex Hull:**  Once the upper and lower tangents are found, create new edges connecting the tangent points. Remove the portions of `CH(L)` and `CH(R)` that are inside the newly formed hull (the parts between the tangent points).
    *   **Important Considerations for the Merge Step:**
        *   The correctness of the merge step hinges on the fact that `CH(L)` and `CH(R)` are already convex.
        *   Efficiently finding the tangents is critical for achieving the O(n log n) time complexity.

*   **Pseudo-code for Merge (Upper Tangent):**

    ```
    function find_upper_tangent(CH_L, CH_R):
        a = rightmost_point(CH_L)
        b = leftmost_point(CH_R)

        while True:
            a_prev = a  # Keep track of previous positions
            b_prev = b

            # Rotate a clockwise on CH_L
            while is_below(CH_L.next_clockwise(a), a, b):
                a = CH_L.next_clockwise(a)

            # Rotate b counter-clockwise on CH_R
            while is_below(CH_R.next_counterclockwise(b), a, b):
                b = CH_R.next_counterclockwise(b)

            if a == a_prev and b == b_prev:  # No movement, tangent found
                return (a, b)
    ```

    *   `rightmost_point(CH_L)`:  Returns the point with the maximum x-coordinate in CH(L).
    *   `leftmost_point(CH_R)`: Returns the point with the minimum x-coordinate in CH(R).
    *   `CH_L.next_clockwise(a)`: Returns the next point on CH_L in the clockwise direction from point `a`.
    *   `CH_R.next_counterclockwise(b)`: Returns the next point on CH_R in the counter-clockwise direction from point `b`.
    *   `is_below(p, a, b)`:  Returns true if point `p` is below the line defined by points `a` and `b`.  This can be determined using the orientation test (cross product).

## 3. Time Complexity Analysis

*   **Sorting:** O(n log n) (using efficient sorting algorithms like Merge Sort or Quick Sort).
*   **Divide:** O(1) (simply finding the middle index).
*   **Conquer:** 2 * T(n/2) (two recursive calls on subsets of size n/2).
*   **Combine (Merge):** O(n). Finding the upper and lower tangents can be done in linear time, as you iterate through the points on the convex hulls at most once.
*   **Recurrence Relation:** T(n) = 2T(n/2) + O(n) + O(n log n)
*   **Solving the Recurrence:** Since the sorting dominates (O(n log n)), the overall time complexity is **O(n log n)**. The Master Theorem can also be used to verify this.

## 4. Implementation Considerations

*   **Data Structures:**  Represent convex hulls as circular doubly-linked lists of points.  This allows for efficient traversal and insertion/deletion of points during the merging step.
*   **Orientation Test (Cross Product):**  A fundamental operation in computational geometry. Used to determine the orientation of three points and to check if a point is above or below a line.  Given points `p1 = (x1, y1)`, `p2 = (x2, y2)`, and `p3 = (x3, y3)`, the cross product is:  `(x2 - x1) * (y3 - y1) - (y2 - y1) * (x3 - x1)`
    *   > 0: `p3` is to the left of the directed line `p1 -> p2`.
    *   < 0: `p3` is to the right of the directed line `p1 -> p2`.
    *   = 0: `p3` is collinear with `p1` and `p2`.
*   **Degenerate Cases:**  Handle cases where points are collinear or coincident. These cases can cause issues with the orientation test. Consider adding small epsilon values for comparison.
*   **Choosing a Sorting Algorithm:** While Quick Sort *can* be O(n log n) on average, Merge Sort guarantees O(n log n) in the worst case, making it a safer choice for this application.

## 5. Examples

Let's say we have the following points:

`(1, 1), (2, 4), (3, 1), (4, 2), (5, 3), (6, 1), (7, 3)`

1. **Sort:**  Sort the points by x-coordinate (already sorted in this example).
2. **Divide:**
   * `L = [(1, 1), (2, 4), (3, 1), (4, 2)]`
   * `R = [(5, 3), (6, 1), (7, 3)]`
3. **Conquer:**  Recursively compute `CH(L)` and `CH(R)`. Let's assume we've recursively computed them:
   * `CH(L) = [(1, 1), (2, 4), (4, 2)]`
   * `CH(R) = [(5, 3), (6, 1), (7, 3)]`
4. **Combine (Merge):**
   * Find the upper tangent between `CH(L)` and `CH(R)`. This will be the line connecting `(2, 4)` and `(5, 3)`.
   * Find the lower tangent between `CH(L)` and `CH(R)`. This will be the line connecting `(4, 2)` and `(6, 1)`.
   * The resulting convex hull is: `[(1, 1), (2, 4), (5, 3), (7, 3), (6, 1), (4, 2)]`.

## 6. Practice Questions/Exercises

1.  **Implement the `is_below(p, a, b)` function using the orientation test.**

    ```python
    def is_below(p, a, b):
        """
        Determines if point p is below the directed line segment ab.

        Args:
          p: A tuple representing point p (x, y).
          a: A tuple representing point a (x, y).
          b: A tuple representing point b (x, y).

        Returns:
          True if p is below the line, False otherwise.
        """
        cross_product = (b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0])
        return cross_product > 0 # Corrected to > 0
    ```

    **Explanation:** A positive cross product indicates that `p` is to the *left* of the directed line `a -> b`.  From the perspective of `a -> b`, "below" means to the *left* in a standard coordinate system.

2.  **Given two convex hulls, CH1 = [(0,0), (1,2), (3,1)] and CH2 = [(4,3), (5,0), (6,2)], manually find the upper and lower tangents.**  You should be able to draw this and visually determine the tangents.

    *   Upper Tangent: The line connecting (1, 2) and (4, 3)
    *   Lower Tangent: The line connecting (3, 1) and (5, 0)

3.  **Trace the execution of the Divide and Conquer convex hull algorithm on the following points: (1, 0), (2, 2), (3, 3), (4, 1).**  Show the divisions, recursive calls, and the merge steps.

    1. **Initial Points:** [(1, 0), (2, 2), (3, 3), (4, 1)] (already sorted)

    2. **Divide:**
       * L = [(1, 0), (2, 2)]
       * R = [(3, 3), (4, 1)]

    3. **Conquer (Recursive Calls):**
       * **CH(L):** [(1, 0), (2, 2)] (A line segment since only 2 points)
       * **CH(R):** [(3, 3), (4, 1)] (A line segment since only 2 points)

    4. **Combine (Merge):**
       * **Upper Tangent:** The line connecting (2, 2) and (3, 3)
       * **Lower Tangent:** The line connecting (1, 0) and (4, 1)
       * **Final Convex Hull:** [(1, 0), (2, 2), (3, 3), (4, 1)]

4.  **What are the advantages and disadvantages of using Divide and Conquer for Convex Hull computation compared to other algorithms like Graham's Scan?**

    *   **Divide and Conquer:**
        *   **Advantage:**  Good for parallelization.  Can sometimes be more efficient in practice depending on the specific implementation.
        *   **Disadvantage:** More complex to implement, especially the merge step. More overhead due to recursion.

    *   **Graham's Scan:**
        *   **Advantage:**  Generally simpler to implement than Divide and Conquer.
        *   **Disadvantage:** Less amenable to parallelization.  The initial sorting step can be a bottleneck.

5.  **How would you handle cases where many points are collinear? What issues might arise, and how could you mitigate them?**

    *   **Issues:** Collinear points can cause issues with the orientation test, potentially leading to incorrect tangent identification during the merge step. Rounding errors become more significant.
    *   **Mitigation:**
        *   **Epsilon Comparison:**  Use a small epsilon value for comparing floating-point numbers in the orientation test. If the cross product is within the range [-epsilon, epsilon], treat the points as collinear.
        *   **Collinearity Removal:** During the initial sort and divide steps, remove collinear points that are not endpoints of the overall convex hull.  This can simplify the problem and improve robustness.
        *  **Stable Sorting:** Use a stable sorting algorithm for the x-coordinate sort in the beginning. This will ensure the original relative order of collinear points is maintained.

## 7. Important Points to Remember

*   **Sorting is Key:** The initial sorting step is crucial for the algorithm's efficiency and correctness.
*   **The Merge Step is Critical:**  The merge step, particularly finding the tangents, is the most complex part of the algorithm and must be implemented carefully.
*   **Orientation Test:**  Understanding and correctly implementing the orientation test is fundamental to computational geometry algorithms.
*   **Handle Degenerate Cases:**  Consider collinear and coincident points to ensure the robustness of your implementation.
*   **Divide and Conquer Paradigm:** Remember the core steps: Divide, Conquer, and Combine.
*   **Time Complexity:** The Divide and Conquer convex hull algorithm achieves O(n log n) time complexity.
