---
title: "Graham's scan algorithm"
subject: "COMPUTATIONAL GEOMETRY"
module: "Module 1: Introduction to Computational Geometry:"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b22a"
status: "completed"
scrapedAt: "2026-05-20T16:10:38.474Z"
---
# COMPUTATIONAL GEOMETRY - Module 1: Introduction - Graham's Scan Algorithm

## Learning Outcomes

Upon completion of this topic, you should be able to:

*   Understand the concept of the convex hull.
*   Describe the Graham's scan algorithm for computing the convex hull of a set of points.
*   Implement the Graham's scan algorithm in pseudocode.
*   Analyze the time complexity of the Graham's scan algorithm.
*   Apply the Graham's scan algorithm to solve practical problems.

## 1. Convex Hull: Key Concepts and Definitions

*   **Definition:** The convex hull of a set of points *S* in a plane is the smallest convex polygon that contains all the points in *S*. "Smallest" implies minimizing the area/perimeter.

*   **Intuition:** Imagine placing a rubber band around all the points. The shape formed by the rubber band is the convex hull.

*   **Convex Polygon:** A polygon where all interior angles are less than or equal to 180 degrees.  Equivalently, for any two points inside the polygon, the line segment connecting them lies entirely inside the polygon.

*   **Importance:** Convex hulls are used in various applications, including:
    *   Collision detection in computer graphics.
    *   Pattern recognition.
    *   Data analysis.
    *   Image processing.
    *   Shape analysis.

## 2. Graham's Scan Algorithm: Description

Graham's scan algorithm is a classic algorithm for finding the convex hull of a finite set of points in a plane. It has a time complexity of O(n log n), where n is the number of points.

**Steps:**

1.  **Find the Anchor Point:** Find the point with the lowest y-coordinate. If there are multiple points with the same lowest y-coordinate, choose the one with the lowest x-coordinate. This point is called the *anchor point* (P0).

2.  **Sort Points Polar Angly:** Sort the remaining points (excluding the anchor point) in increasing order of their polar angle with respect to the anchor point.  If two points have the same polar angle, sort them by distance from the anchor point, closest first.

3.  **Initialization:** Create an empty stack `Hull`. Push the anchor point (P0) and the first sorted point (P1) onto the stack.

4.  **Iteration:** Iterate through the sorted points from the third point (P2) onwards:
    *   While the angle formed by the top two points on the `Hull` and the current point makes a non-left turn (i.e., a right turn or is collinear), pop the top point from the `Hull`. This ensures the `Hull` remains convex.
    *   Push the current point onto the `Hull`.

5.  **Result:** The `Hull` now contains the vertices of the convex hull in counter-clockwise order.

**Geometric Interpretation:**  The algorithm maintains a growing convex polygon.  It examines points in order and, if a point "dents" the current polygon (makes it non-convex), it removes points from the polygon until the current point creates a convex turn.

## 3. Graham's Scan Algorithm: Pseudocode

```pseudocode
Algorithm GrahamScan(points):
  // points is an array of points

  // 1. Find the anchor point (P0)
  P0 = FindAnchorPoint(points)

  // 2. Sort the remaining points by polar angle relative to P0
  sortedPoints = SortPointsByPolarAngle(points, P0)

  // 3. Initialize the Hull stack
  Hull = new Stack()
  Hull.push(P0)
  Hull.push(sortedPoints[0]) // Second lowest point after Anchor

  // 4. Iterate through the sorted points
  for i = 1 to sortedPoints.length - 1:
    currentPoint = sortedPoints[i]

    while Hull.size() >= 2 AND NotIsLeftTurn(NextToTop(Hull), Hull.peek(), currentPoint):
      Hull.pop()

    Hull.push(currentPoint)

  // 5. The Hull contains the vertices of the convex hull
  return Hull

// Helper functions:

Function FindAnchorPoint(points):
  // Finds the point with the lowest y-coordinate (and lowest x if tied)
  anchor = points[0]
  for point in points:
    if point.y < anchor.y OR (point.y == anchor.y AND point.x < anchor.x):
      anchor = point
  return anchor

Function SortPointsByPolarAngle(points, anchor):
  // Sorts points based on polar angle relative to the anchor
  // Use a comparator function that calculates polar angle using atan2 or equivalent.
  // Also handles collinear points by sorting based on distance from anchor.
  return points.sort(comparatorFunction)

// Comparator Function for sorting points polar angly
// Returns a negative number if point1 should come before point2
Function comparatorFunction(point1, point2):
    angle1 = atan2(point1.y - anchor.y, point1.x - anchor.x)
    angle2 = atan2(point2.y - anchor.y, point2.x - anchor.x)

    if angle1 < angle2:
        return -1
    elif angle1 > angle2:
        return 1
    else:
        // Collinear points; sort by distance to anchor
        dist1 = (point1.x - anchor.x)**2 + (point1.y - anchor.y)**2
        dist2 = (point2.x - anchor.x)**2 + (point2.y - anchor.y)**2
        if dist1 < dist2:
            return -1
        else:
            return 1

Function IsLeftTurn(p1, p2, p3):
  // Determines if points p1, p2, and p3 make a left turn
  // Uses the cross product to determine the orientation
  return (p2.x - p1.x) * (p3.y - p1.y) - (p2.y - p1.y) * (p3.x - p1.x) > 0

Function NextToTop(stack):
  // Returns the element immediately below the top of the stack
  top = stack.pop()  //Remove Top Element for a momment.
  nextToTop = stack.peek()
  stack.push(top)  // Place top element back
  return nextToTop
```

## 4. Time Complexity Analysis

*   **Finding the Anchor Point:** O(n), where n is the number of points.
*   **Sorting the Points:** O(n log n) using efficient sorting algorithms like Merge Sort or Quick Sort.
*   **Iterating and Maintaining the Stack:** O(n). While the `while` loop inside the `for` loop might seem to increase complexity, each point is pushed onto the stack at most once, and popped at most once.  Therefore, the total number of `pop` operations is at most n.

**Overall Time Complexity:** O(n) + O(n log n) + O(n) = **O(n log n)**.  The sorting step dominates the time complexity.

## 5. Examples

**Example 1:**

Consider the following points: (1, 1), (2, 2), (3, 1), (4, 3), (5, 2), (0, 3)

1.  **Anchor Point:** (1, 1)
2.  **Sorted Points (Polar Angle):** (2, 2), (4, 3), (5, 2), (3, 1), (0, 3)  (approximate order)
3.  **Hull Construction:**
    *   Initial: Hull = [(1, 1), (2, 2)]
    *   (4, 3): Hull = [(1, 1), (2, 2), (4, 3)]  (Left turn)
    *   (5, 2): Hull = [(1, 1), (4, 3), (5, 2)] (Right turn at (2,2), (2,2) popped)
    *   (3, 1): Hull = [(1, 1), (5, 2), (3, 1)]  (Right turn at (4,3), (4,3) popped)
    *   (0, 3): Hull = [(1, 1), (3, 1), (0, 3)]  (Right turn at (5,2), (5,2) popped) , Hull = [(1, 1), (0, 3)] (Right turn at (3, 1), (3,1) popped).  Hull = [(1, 1), (0,3)]
    *    Hull = [(1, 1), (0, 3), (4, 3), (5,2)] (Result after calculating each iteration)

4.  **Convex Hull:** [(1, 1), (2, 2), (4, 3), (5, 2), (3, 1), (0, 3)]

**Example 2:**

Points: (0, 0), (1, 0), (2, 0), (0, 1), (1, 1), (2, 1), (0, 2), (1, 2), (2, 2)

1.  **Anchor Point:** (0, 0)
2.  **Sorted Points (Polar Angle):** (1, 0), (2, 0), (2, 1), (2, 2), (1, 2), (0, 2), (0, 1), (1, 1)
3.  **Convex Hull:** (0, 0), (2, 0), (2, 2), (0, 2)

## 6. Practice Questions and Exercises

**Question 1:**

Given the points (1, 2), (3, 4), (5, 1), (2, 5), (4, 3), manually trace the Graham's scan algorithm and determine the convex hull. Show each step.

**Answer:**

1.  **Anchor Point:** (1, 2)
2.  **Sorted Points (Polar Angle):** (2, 5), (3, 4), (4, 3), (5, 1)
3.  **Hull Construction:**
    *   Initial: Hull = [(1, 2), (2, 5)]
    *   (3, 4): Hull = [(1, 2), (2, 5), (3, 4)]
    *   (4, 3): Hull = [(1, 2), (3, 4), (4, 3)] (Right Turn at (2, 5), (2, 5) Pop)
    *   (5, 1): Hull = [(1, 2), (4, 3), (5, 1)]
4. **Convex Hull :** [(1,2), (2,5), (3,4), (4,3), (5,1)].

**Question 2:**

What is the time complexity of Graham's scan algorithm, and why?

**Answer:**

The time complexity of Graham's scan algorithm is O(n log n). This is because the most time-consuming step is sorting the points by polar angle, which takes O(n log n) time using efficient sorting algorithms. Finding the anchor point takes O(n) time, and the stack operations take O(n) time in total, but these are dominated by the sorting step.

**Question 3:**

Describe the role of the `IsLeftTurn` function in Graham's scan.

**Answer:**

The `IsLeftTurn` function is crucial for maintaining the convexity of the hull. It determines whether three consecutive points form a left turn (counter-clockwise orientation). If the points form a non-left turn (right turn or collinear), it means the middle point is not part of the convex hull, and the algorithm removes it from the stack to ensure the remaining points form a convex shape.

## 7. Important Points to Remember

*   Graham's scan algorithm guarantees a convex hull.
*   Sorting by polar angle is a crucial step. Careful implementation of the `SortPointsByPolarAngle` function is important for correctness.
*   Handle collinear points properly during the sorting process. Sort collinear points based on their distance from the anchor point.
*   The `IsLeftTurn` function is used to determine the orientation of three points and is the core of the algorithm's convexity maintenance.
*   Graham's scan algorithm is an efficient and widely used algorithm for computing the convex hull. However, other algorithms like the Chan's algorithm exist and might offer better complexity in specific situations.
