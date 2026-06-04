---
title: "Convex Hulls  - Definition and properties of convex hulls"
subject: "COMPUTATIONAL GEOMETRY"
module: "Module 1: Introduction to Computational Geometry:"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b229"
status: "completed"
scrapedAt: "2026-05-20T16:10:37.765Z"
---
## Computational Geometry: Module 1 - Convex Hulls

**Topic:** Convex Hulls - Definition and Properties

**Learning Outcomes:**

*   Understand the definition of a convex hull.
*   Be able to identify whether a set is convex.
*   Know key properties of convex hulls, including its uniqueness and the fact that it's the intersection of all half-spaces containing the set.
*   Be familiar with applications of convex hulls.
*   Understand the relationship between convex hulls and extreme points.

**1. Definition of Convexity and Convex Sets**

*   **Definition (Convex Set):** A set *S* in Euclidean space is said to be *convex* if for any two points *p*, *q* in *S*, the line segment connecting *p* and *q* is entirely contained in *S*.  Mathematically: For all *p*, *q* ∈ *S*, and for all λ ∈ [0, 1],  λ*p* + (1 - λ)*q* ∈ *S*.

    *   Think of it like this: If you pick any two points inside the set and draw a straight line between them, that line should also be inside the set.
*   **Examples of Convex Sets:**
    *   A point.
    *   A line.
    *   A line segment.
    *   A circle.
    *   A disk (circle with its interior).
    *   A polygon (only if it's a convex polygon).
    *   A half-plane.
    *   The intersection of convex sets.
*   **Examples of Non-Convex Sets:**
    *   A star shape.
    *   A crescent shape.
    *   A figure eight.
    *   A polygon that is not convex.
    *   The union of disjoint convex sets.

**2. Definition of Convex Hull**

*   **Definition (Convex Hull):** The *convex hull* of a set *P* of points in Euclidean space is the smallest convex set that contains *P*.  "Smallest" means that if *C* is any other convex set containing *P*, then the convex hull of *P* is a subset of *C*.

*   **Intuition:**  Imagine you have a set of nails hammered into a board. Stretch a rubber band around all the nails. The region enclosed by the rubber band is the convex hull of the nails.

*   **Formal Definitions (Equivalent):**
    *   **Intersection Definition:** The convex hull of *P* is the intersection of all convex sets containing *P*.
    *   **Convex Combination Definition:**  The convex hull of *P* is the set of all convex combinations of points in *P*. A *convex combination* of points *p<sub>1</sub>, p<sub>2</sub>, ..., p<sub>n</sub>* is a linear combination λ<sub>1</sub>*p<sub>1</sub> + λ<sub>2</sub>*p<sub>2</sub> + ... + λ<sub>n</sub>*p<sub>n</sub>, where λ<sub>i</sub> ≥ 0 for all *i*, and Σλ<sub>i</sub> = 1.

*   **Notation:** The convex hull of a set *P* is often denoted as *CH(P)*.

**3. Properties of Convex Hulls**

*   **Uniqueness:** The convex hull of a set *P* is unique. There is only one smallest convex set containing *P*.

*   **Intersection of Half-Spaces:** The convex hull of a set *P* can be expressed as the intersection of all half-spaces that contain *P*. This is a fundamental property often used in proving other properties and designing algorithms.

*   **Convex Hull of a Finite Set:**  For a finite set of points in the plane, the convex hull is a convex polygon.  In 3D, it's a convex polyhedron.

*   **Points on the Boundary:**  All points on the boundary of the convex hull of a set *P* must be points from the set *P*.  Points that lie strictly inside the convex hull are not on the boundary.

*   **Extreme Points:** Convex hulls are defined by their extreme points.

**4. Extreme Points**

*   **Definition (Extreme Point):** A point *p* in a convex set *S* is an *extreme point* if it cannot be expressed as a convex combination of two distinct points in *S*.  In other words, there are no points *q*, *r* in *S* (with *q* ≠ *r*) such that *p* = λ*q* + (1 - λ)*r* for some λ ∈ (0, 1).

    *   Extreme points are essentially the "corners" or vertices of a convex set.

*   **Relationship to Convex Hulls:**  The convex hull of a set *P* is determined by its extreme points. For a finite set of points *P*, the vertices of *CH(P)* are extreme points of *P*.  However, not all points in *P* are necessarily vertices of *CH(P)*.  Some points may lie strictly inside the convex hull.

*   **Example:** Consider the set of points *P* = {(0,0), (1,0), (0,1), (1,1), (0.5, 0.5)}.  The vertices of *CH(P)* are (0,0), (1,0), (0,1), and (1,1). The point (0.5, 0.5) is not an extreme point and lies inside the convex hull.

**5. Applications of Convex Hulls**

*   **Collision Avoidance:**  Approximating objects with their convex hulls simplifies collision detection algorithms.

*   **Pattern Recognition:** Convex hulls can be used to represent the shape of an object in image analysis.

*   **Statistics:**  Used in robust estimation techniques.

*   **Computer Graphics:**  Used in visibility calculations and simplification of complex shapes.

*   **Data Mining:** Finding outliers or extreme values in datasets.

**6. Importance Points to Remember**

*   Convexity is a fundamental concept in computational geometry.
*   The convex hull is the "tightest fitting" convex shape around a set of points.
*   The convex hull is uniquely defined.
*   Understanding extreme points is crucial for understanding the boundary of convex hulls.
*   Convex hulls have widespread applications across various fields.

**7. Practice Questions/Exercises**

1.  **Question:** Which of the following sets are convex?
    a)  A line segment
    b)  A circle
    c)  A star-shaped polygon
    d)  A set of three distinct, collinear points.

    **Answer:** a), b), and d).  A star-shaped polygon is generally *not* convex.

2.  **Question:**  Given the points P = {(1, 1), (2, 3), (4, 1), (3, 4)}, which points are likely to be vertices of the convex hull? (Without actually computing the convex hull).

    **Answer:**  All of these points are likely to be vertices of the convex hull.  Visualizing them helps to understand this.  None appear to be inside the area that the other points define.

3.  **Question:**  Why is the convex hull often used for collision detection?

    **Answer:**  Using the convex hull simplifies the shape representation, making collision detection calculations much faster.  While it's an approximation (the convex hull is larger than the original object), it provides a conservative estimate, ensuring no collisions are missed.

4. **Question:** If you have a set of 100 points and one of them is located strictly inside the triangle formed by the other three, can that point be a vertex of the convex hull? Explain.

    **Answer:** No, that point cannot be a vertex of the convex hull.  Since it lies inside the triangle formed by other points in the set, it can be expressed as a convex combination of those three points.  Therefore, it is not an extreme point and cannot be a vertex of the convex hull.

5. **Question:** True or False: The union of two convex sets is always convex.

    **Answer:** False.  Consider two disjoint disks.  Their union is clearly not convex.

6. **Question:** Describe in your own words the key difference between the "intersection definition" and the "convex combination definition" of a convex hull.

    **Answer:** The intersection definition describes the convex hull as the result of intersecting all possible convex sets that contain the original point set. It emphasizes the "smallest containing" aspect. The convex combination definition builds the convex hull by explicitly combining points from the original set, highlighting how any point within the convex hull can be formed from a weighted average of the original points.  Both definitions are equivalent, but they offer different perspectives.

This comprehensive set of notes should provide a solid foundation for understanding convex hulls and their properties. Good luck with your studies!
