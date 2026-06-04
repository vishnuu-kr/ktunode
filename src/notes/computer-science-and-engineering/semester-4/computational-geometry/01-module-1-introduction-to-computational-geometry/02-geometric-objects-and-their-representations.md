---
title: "Geometric objects, and their representations"
subject: "COMPUTATIONAL GEOMETRY"
module: "Module 1: Introduction to Computational Geometry:"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b227"
status: "completed"
scrapedAt: "2026-05-20T16:10:36.337Z"
---
## Computational Geometry: Module 1 - Geometric Objects and Their Representations

### Introduction

This module introduces fundamental geometric objects and their representations, forming the bedrock for further exploration in computational geometry. Understanding these representations is crucial for designing and implementing efficient algorithms.

### Learning Outcomes

Upon completion of this topic, you should be able to:

1.  Define and differentiate between various fundamental geometric objects (points, lines, line segments, polygons, circles, planes).
2.  Represent geometric objects mathematically using different coordinate systems.
3.  Understand the advantages and disadvantages of different representation methods.
4.  Convert between different representations of geometric objects.
5.  Apply these representations to solve basic geometric problems.

### 1. Fundamental Geometric Objects and Definitions

*   **Point:** A location in space with no dimension.
    *   **Representation:** Defined by its coordinates (x, y) in 2D, (x, y, z) in 3D, and (x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>n</sub>) in n-dimensional space.
    *   **Example:** P = (3, 5) in 2D.

*   **Line:** A straight, infinitely long path extending in two directions.
    *   **Representation:**
        *   **Slope-Intercept Form (2D):** y = mx + c, where m is the slope and c is the y-intercept.
        *   **General Form (2D):** ax + by + c = 0, where a, b, and c are constants.
        *   **Parametric Form (2D & 3D):** A point *P* on the line and a direction vector *v*. A point *Q* on the line can be represented as Q = P + t*v, where t is a parameter.  Example:  P = (1, 2), v = (3, 4) => Q = (1+3t, 2+4t)
    *   **Example:** y = 2x + 1 (Slope-intercept), 3x + 4y - 5 = 0 (General),  (1,1) + t(2,3) (Parametric).

*   **Line Segment:** A part of a line that is bounded by two distinct endpoints.
    *   **Representation:** Defined by its two endpoints.
    *   **Example:** Line segment with endpoints A = (1, 2) and B = (4, 6).

*   **Polygon:** A closed 2D shape formed by straight line segments called edges.
    *   **Representation:**  An ordered list of vertices (points) representing the corners of the polygon. The order defines the edges.
    *   **Types:**
        *   **Convex:** All interior angles are less than 180 degrees.  A line segment joining any two points inside or on the boundary of the polygon lies entirely within the polygon.
        *   **Concave:**  At least one interior angle is greater than 180 degrees. There exists a line segment joining two points inside the polygon that lies partially outside the polygon.
        *   **Simple:** Edges only intersect at vertices.
        *   **Complex (Self-intersecting):** Edges intersect at points other than vertices.
    *   **Example:** A triangle with vertices (0, 0), (1, 0), and (0, 1).

*   **Circle:** A set of points equidistant from a central point.
    *   **Representation:** Defined by its center (x, y) and radius r.
    *   **Equation:** (x - h)<sup>2</sup> + (y - k)<sup>2</sup> = r<sup>2</sup>, where (h, k) is the center.
    *   **Example:** A circle with center (2, 3) and radius 5. Equation: (x - 2)<sup>2</sup> + (y - 3)<sup>2</sup> = 25

*   **Plane:** A flat, two-dimensional surface extending infinitely far.
    *   **Representation:**
        *   **General Form (3D):** ax + by + cz + d = 0, where a, b, c, and d are constants.  (a,b,c) is the normal vector to the plane.
        *   **Point-Normal Form (3D):** Defined by a point *P* on the plane and a normal vector *n* perpendicular to the plane.  A point *Q* is on the plane if (Q - P) . n = 0 (dot product).
        *   **Parametric Form (3D):** Defined by a point *P* on the plane and two non-parallel vectors *u* and *v* lying in the plane. A point *Q* on the plane can be represented as Q = P + s*u + t*v, where s and t are parameters.
    *   **Example:** 2x + 3y - z + 5 = 0 (General),  (1,1,1) with normal vector (2,3,-1) (Point-Normal), (1,1,1) + s(1,0,0) + t(0,1,0) (Parametric).

### 2. Mathematical Representation Using Coordinate Systems

*   **Cartesian Coordinates:** The most common coordinate system.  Points are located using perpendicular axes (x, y in 2D; x, y, z in 3D).

*   **Polar Coordinates (2D):** Defined by the distance *r* from the origin and the angle *θ* from the x-axis.
    *   **Conversion:**
        *   x = r * cos(θ)
        *   y = r * sin(θ)
        *   r = sqrt(x<sup>2</sup> + y<sup>2</sup>)
        *   θ = atan2(y, x)  (Note: use atan2 to handle quadrant correctly)

*   **Cylindrical Coordinates (3D):** Extension of polar coordinates to 3D.  Defined by (r, θ, z).

*   **Spherical Coordinates (3D):** Defined by the distance *ρ* from the origin, the azimuthal angle *θ* from the x-axis, and the polar angle *φ* from the z-axis.

### 3. Advantages and Disadvantages of Different Representations

| Object      | Representation                     | Advantages                                                | Disadvantages                                                               |
|-------------|--------------------------------------|-----------------------------------------------------------|----------------------------------------------------------------------------|
| Point       | Cartesian                           | Simple, intuitive                                         | Not suitable for all coordinate systems                                      |
| Line        | Slope-Intercept                     | Easy to understand slope and y-intercept                | Cannot represent vertical lines (slope is undefined)                     |
|             | General Form                       | Can represent any line, including vertical lines       | Less intuitive for slope and y-intercept                                  |
|             | Parametric Form                     | Useful for distance calculations and defining line segments| Less intuitive for simple visualization                                     |
| Line Segment| Endpoints                            | Straightforward, easy to calculate length               | Not suitable for infinite lines                                             |
| Polygon     | Ordered Vertices                  | Represents shape accurately                              | Can be complex for concave polygons                                       |
| Circle      | Center and Radius                     | Simple and efficient for many calculations                  | Not suitable for representing ellipses or other non-circular curves          |
| Plane       | General Form                       | Compact representation                                    | Not easy to visualize the orientation directly                             |
|             | Point-Normal Form                  | Easy to determine if a point is on the plane               | Requires a normal vector, which may need to be calculated                    |
|             | Parametric Form                     | Useful for generating points on the plane                 | Less intuitive for visualizing the plane's orientation                    |

### 4. Converting Between Representations

*   **Cartesian to Polar (2D):** As described above.

*   **Polar to Cartesian (2D):** As described above.

*   **Slope-Intercept to General Form (Line):** Given y = mx + c, then -mx + y - c = 0.  a = -m, b = 1, c = -c.

*   **General Form to Slope-Intercept Form (Line):** Given ax + by + c = 0, then y = (-a/b)x - (c/b), provided b != 0.  m = -a/b, c = -c/b.

*   **Parametric to General Form (Line, 2D):** Given point P=(x0, y0) and direction vector v=(vx, vy), we can find a point Q = (x, y) such that (x-x0)/vx = (y-y0)/vy, assuming vx and vy are non-zero.  Rearranging gives vy(x-x0) - vx(y-y0) = 0, or vy*x - vx*y + (vx*y0 - vy*x0) = 0.  So, a=vy, b=-vx, c = vx*y0 - vy*x0.  If vx or vy are zero, handle the special cases (vertical or horizontal lines) separately.

*   **Converting between plane representations (3D) involves vector algebra and solving systems of equations. A detailed explanation is outside the scope of this introductory module but involves finding normal vectors, solving for coefficients, and using dot products.**

### 5. Applying Representations to Solve Basic Geometric Problems

*   **Distance between two points:** Use the distance formula based on the coordinates.
    *   2D:  sqrt((x2 - x1)<sup>2</sup> + (y2 - y1)<sup>2</sup>)
    *   3D:  sqrt((x2 - x1)<sup>2</sup> + (y2 - y1)<sup>2</sup> + (z2 - z1)<sup>2</sup>)

*   **Checking if a point lies on a line:** Substitute the point's coordinates into the line's equation.

*   **Calculating the length of a line segment:**  Same as the distance between its endpoints.

*   **Determining if a point is inside a circle:**  Calculate the distance from the point to the center.  If the distance is less than or equal to the radius, the point is inside (or on) the circle.

### Important Points to Remember

*   The choice of representation depends on the specific problem you are trying to solve.
*   Understanding the advantages and disadvantages of each representation is crucial.
*   Be mindful of edge cases, such as vertical lines or division by zero.
*   Visualization aids understanding. Draw diagrams whenever possible.

### Practice Questions/Exercises

1.  **What are the coordinates of the point (5, π/3) in polar coordinates when converted to Cartesian coordinates?**
    *   Answer: x = 5 * cos(π/3) = 5 * (1/2) = 2.5; y = 5 * sin(π/3) = 5 * (sqrt(3)/2) ≈ 4.33.  Therefore, the Cartesian coordinates are approximately (2.5, 4.33).

2.  **Write the equation of the line passing through points A(1, 2) and B(4, 6) in slope-intercept form.**
    *   Answer:  Slope m = (6-2)/(4-1) = 4/3. Using point-slope form: y - 2 = (4/3)(x - 1). Converting to slope-intercept form: y = (4/3)x + 2/3.

3.  **Determine if the point (2, 4) lies inside the circle with center (1, 3) and radius 2.**
    *   Answer:  Distance between (2, 4) and (1, 3) is sqrt((2-1)<sup>2</sup> + (4-3)<sup>2</sup>) = sqrt(2) ≈ 1.41.  Since 1.41 < 2, the point lies inside the circle.

4.  **Represent the line 2x - 3y + 5 = 0 in parametric form.**
    *   Answer: Let x = t. Then 2t - 3y + 5 = 0. So 3y = 2t + 5, and y = (2/3)t + 5/3. Therefore, the parametric representation is (x, y) = (0, 5/3) + t(1, 2/3), or equivalently, (x, y) = (0, 5/3) + t(3, 2) [multiplying the direction vector by 3].

5.  **What is the normal vector to the plane defined by the equation 5x - 2y + z - 3 = 0?**
    *   Answer: The normal vector is (5, -2, 1).  The coefficients of x, y, and z in the general form of the plane equation directly give the components of the normal vector.
