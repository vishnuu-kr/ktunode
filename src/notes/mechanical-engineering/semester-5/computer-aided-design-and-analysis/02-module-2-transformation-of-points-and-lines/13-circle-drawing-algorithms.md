---
title: "circle drawing algorithms"
subject: "COMPUTER AIDED DESIGN AND ANALYSIS"
module: "Module 2: Transformation of points and lines"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf48044634fb"
status: "completed"
scrapedAt: "2026-05-20T17:58:49.096Z"
---
# Computer Aided Design and Analysis - Module 2: Transformation of Points and Lines

## Topic: Circle Drawing Algorithms

This module focuses on the fundamental techniques used to represent and manipulate geometric entities in Computer Aided Design (CAD). Specifically, this topic delves into the algorithms employed for drawing circles efficiently on raster display devices.

---

### Learning Outcomes Addressed:

*   **CO2: Apply 2D transformation techniques, including rotation, reflection, scaling, and line and curve drawing algorithms in CAD software.** (Knowledge Level: K3) - This topic directly contributes to understanding and applying curve drawing algorithms, a crucial aspect of 2D transformations in CAD.

---

### 1. Introduction to Circle Drawing

*   **Definition of a Circle:** A circle is a set of all points in a plane that are equidistant from a fixed point called the center. The constant distance is called the radius.
    *   Equation of a circle with center $(h, k)$ and radius $r$: $(x - h)^2 + (y - k)^2 = r^2$
*   **Challenges in Raster Displays:**
    *   **Discreteness:** Raster displays consist of a grid of pixels. We need to select the "best" pixel to approximate the continuous curve of a circle.
    *   **Efficiency:** Algorithms should minimize computations and pixel operations for faster rendering.
    *   **Symmetry:** Circles exhibit high symmetry, which can be exploited to reduce the number of calculations needed.

---

### 2. Key Concepts and Definitions

*   **Pixel:** The smallest addressable element on a raster display.
*   **Rasterization:** The process of converting a geometric primitive (like a line or circle) into a set of pixels that best represents it on the display.
*   **Midpoint Circle Algorithm (or Bresenham's Circle Algorithm):** An efficient incremental algorithm that uses only integer arithmetic and tests the midpoint between pixels to determine which pixel to illuminate next. This minimizes the need for floating-point calculations and multiplication, making it very fast.
*   **Circle Quadrants:** Due to symmetry, we can draw one octant (1/8th) of a circle and then use symmetry to generate the other seven octants. This significantly reduces the computational load. An octant covers an angle of 45 degrees ($360/8 = 45$).

---

### 3. Circle Drawing Algorithms

The core idea behind most circle drawing algorithms is to determine which pixel is closest to the ideal circle path in each step.

#### 3.1 Midpoint Circle Algorithm (Bresenham's Circle Algorithm)

This is the most commonly used and efficient algorithm for drawing circles. It operates on one octant and uses symmetry to draw the entire circle.

**Assumptions:**

*   Drawing a circle in the first octant, starting from the point $(0, r)$ and moving towards $(r/\sqrt{2}, r/\sqrt{2})$.
*   The center of the circle is at $(0, 0)$ for simplicity. Later, this can be translated to any center $(h, k)$.

**Algorithm Steps (for the first octant, from (0, r) to (r/\sqrt{2}, r/\sqrt{2})):**

1.  **Initialization:**
    *   Set the center $(h, k)$ and radius $r$.
    *   Start at point $(x, y) = (0, r)$.
    *   Initialize a decision parameter $p$:
        *   $p = 5/4 - r$ (for midpoint criterion) or $p = 1 - r$ (simplified, often used). Let's use the simplified $p = 1 - r$.

2.  **Iterative Drawing:**
    *   While $x \le y$:
        *   Plot the current pixel $(x + h, y + k)$.
        *   **Decision:** Based on the decision parameter $p$:
            *   If $p < 0$ (midpoint is inside the circle):
                *   Choose the pixel to the **east**: $x = x + 1$.
                *   Update $p$: $p = p + 2x + 1$.
            *   If $p \ge 0$ (midpoint is outside or on the circle):
                *   Choose the pixel to the **southeast**: $x = x + 1$, $y = y - 1$.
                *   Update $p$: $p = p + 2x + 1 - 2y$.

        *   Increment $x$ in each step.

3.  **Exploiting Symmetry:**
    *   For each point $(x, y)$ calculated in the first octant, plot the corresponding points in all eight octants by changing signs and swapping $x$ and $y$:
        *   $(x, y)$
        *   $(-x, y)$
        *   $(x, -y)$
        *   $(-x, -y)$
        *   $(y, x)$
        *   $(-y, x)$
        *   $(y, -x)$
        *   $(-y, -x)$

**Derivation of the Decision Parameter:**

Consider a pixel at $(x+1, y)$ and $(x+1, y-1)$. The midpoint between these two potential pixels is $(x+1, y - 1/2)$. We need to determine if this midpoint is inside or outside the circle.

The ideal circle equation is $f(x, y) = x^2 + y^2 - r^2 = 0$.

For the midpoint $M = (x+1, y - 1/2)$:
$f(M) = (x+1)^2 + (y - 1/2)^2 - r^2$
$f(M) = (x^2 + 2x + 1) + (y^2 - y + 1/4) - r^2$

Let $p_k$ be the decision parameter at step $k$. We start with $x_0 = 0$, $y_0 = r$.

*   If $p_k < 0$, the midpoint is inside the circle, meaning the pixel $(x+1, y)$ is closer. We move east. New $x = x+1$, new $y = y$.
    *   The next midpoint will be $(x+2, y - 1/2)$.
    *   The change in the function $f$ from $(x+1, y-1/2)$ to $(x+2, y-1/2)$ is $f(x+2, y-1/2) - f(x+1, y-1/2) = (x+2)^2 + (y-1/2)^2 - r^2 - [(x+1)^2 + (y-1/2)^2 - r^2] = (x+2)^2 - (x+1)^2 = x^2 + 4x + 4 - (x^2 + 2x + 1) = 2x + 3$.
    *   So, $p_{k+1} = p_k + 2(x+1) + 1$.

*   If $p_k \ge 0$, the midpoint is outside or on the circle, meaning the pixel $(x+1, y-1)$ is closer. We move southeast. New $x = x+1$, new $y = y-1$.
    *   The next midpoint will be $(x+2, (y-1) - 1/2) = (x+2, y - 3/2)$.
    *   The change in the function $f$ from $(x+1, y-1/2)$ to $(x+2, y-3/2)$ is $f(x+2, y-3/2) - f(x+1, y-1/2) = [(x+2)^2 + (y-3/2)^2 - r^2] - [(x+1)^2 + (y-1/2)^2 - r^2]$
    *   $= (x+2)^2 - (x+1)^2 + (y-3/2)^2 - (y-1/2)^2$
    *   $= (2x+3) + (y^2 - 3y + 9/4) - (y^2 - y + 1/4)$
    *   $= (2x+3) + (-2y + 8/4)$
    *   $= 2x + 3 - 2y + 2$.
    *   So, $p_{k+1} = p_k + 2(x+1) + 1 - 2(y-1)$.

**Initial Decision Parameter:**

For the first step, we choose between $(1, r)$ and $(1, r-1)$. The midpoint is $(1, r - 1/2)$.
We need to evaluate $f(1, r-1/2) = 1^2 + (r-1/2)^2 - r^2 = 1 + r^2 - r + 1/4 - r^2 = 5/4 - r$.
So, the initial $p = 5/4 - r$.

Since we prefer integer arithmetic, we can multiply the decision parameter by 4:
$p' = 4p = 5 - 4r$.
*   If $p' < 0$: East move. $p'_{k+1} = p'_k + 2(x+1) + 1$. This can be rewritten as $p'_{k+1} = p'_k + 2x + 3$.
*   If $p' \ge 0$: Southeast move. $p'_{k+1} = p'_k + 2(x+1) + 1 - 2(y-1)$. This can be rewritten as $p'_{k+1} = p'_k + 2x - 2y + 5$.

This simplified form using only integer additions and subtractions is the essence of Bresenham's algorithm.

**Example: Draw a circle with center (0, 0) and radius 5.**

1.  **Initialization:** $h=0, k=0, r=5$.
    *   Start point: $(x, y) = (0, 5)$.
    *   Initial decision parameter $p = 1 - r = 1 - 5 = -4$.

2.  **Iteration 1:**
    *   Plot $(0+0, 5+0) = (0, 5)$.
    *   $p = -4 < 0$ (East move).
    *   $x = 0 + 1 = 1$.
    *   $y = 5$.
    *   Update $p = p + 2x + 1 = -4 + 2(1) + 1 = -1$.

3.  **Iteration 2:**
    *   Plot $(1+0, 5+0) = (1, 5)$.
    *   $p = -1 < 0$ (East move).
    *   $x = 1 + 1 = 2$.
    *   $y = 5$.
    *   Update $p = p + 2x + 1 = -1 + 2(2) + 1 = 4$.

4.  **Iteration 3:**
    *   Plot $(2+0, 5+0) = (2, 5)$.
    *   $p = 4 \ge 0$ (Southeast move).
    *   $x = 2 + 1 = 3$.
    *   $y = 5 - 1 = 4$.
    *   Update $p = p + 2x + 1 - 2y = 4 + 2(3) + 1 - 2(4) = 4 + 6 + 1 - 8 = 3$.

5.  **Iteration 4:**
    *   Plot $(3+0, 4+0) = (3, 4)$.
    *   $p = 3 \ge 0$ (Southeast move).
    *   $x = 3 + 1 = 4$.
    *   $y = 4 - 1 = 3$.
    *   Update $p = p + 2x + 1 - 2y = 3 + 2(4) + 1 - 2(3) = 3 + 8 + 1 - 6 = 6$.

6.  **Stop Condition:** The loop continues as long as $x \le y$.
    *   At this point, $x = 4$ and $y = 3$. Since $x > y$, the loop for the first octant terminates.

**Points in the first octant (x, y) for r=5:**
(0, 5), (1, 5), (2, 5), (3, 4)

**Symmetric points:**
*   (0, 5) -> (0, -5), (5, 0), (-5, 0), (5, 0), (0, -5), (-5, 0), (0, 5) - (Note: some are duplicates due to axis symmetry)
*   (1, 5) -> (1, -5), (5, 1), (-5, 1), (5, -1), (-1, 5), (-1, -5), (-5, -1)
*   (2, 5) -> (2, -5), (5, 2), (-5, 2), (5, -2), (-2, 5), (-2, -5), (-5, -2)
*   (3, 4) -> (3, -4), (4, 3), (-4, 3), (4, -3), (-3, 4), (-3, -4), (-4, -3)

These points, when plotted and connected, form the circle.

**Offsetting for Non-Zero Center $(h, k)$:**
If the center is $(h, k)$, simply plot $(x+h, y+k)$ instead of $(x, y)$.

#### 3.2 Using Polar Coordinates

While polar coordinates are conceptually simple for circles ($r$ is constant, $\theta$ varies), they are less efficient for raster displays because calculating trigonometric functions (sine and cosine) for each point is computationally expensive. Also, the distance between points on the circle varies with $\theta$, requiring different step sizes for $\theta$ to maintain a consistent pixel density.

*   $x = h + r \cos(\theta)$
*   $y = k + r \sin(\theta)$

**Drawbacks:**
*   Floating-point arithmetic.
*   Trigonometric function calculations.
*   Potentially uneven pixel spacing.

#### 3.3 Other Algorithms (Brief Mention)

*   **Circumference Midpoint Algorithm:** Similar to the Midpoint Circle Algorithm but uses the circumference as the decision boundary.
*   **Incremental Approach:** Using Taylor series expansion for $y$ in terms of $x$ from the circle equation. This involves calculating derivatives and can lead to floating-point inaccuracies and performance issues.

---

### 4. Application in CAD Software

*   **Primitive Drawing:** CAD software uses optimized circle drawing algorithms (like Bresenham's) as a fundamental building block for drawing various circular features such as holes, fillets, arcs, and full circles.
*   **Geometric Modeling:** When users define a circle or arc, the CAD system internally uses these algorithms to represent and render the geometry accurately and efficiently.
*   **Transformations:** Circle drawing algorithms are also integrated with transformation matrices. When a circle is scaled, rotated, or translated, the new center and radius (or a new set of points approximating the circle) are calculated, and then the drawing algorithm is applied to the transformed geometry.
    *   **Scaling:** Affects the radius and potentially the center.
    *   **Rotation:** Requires recalculating points on the circle, or transforming the center and then recalculating the circumference using the algorithm, potentially with a rotated starting point.
    *   **Translation:** Only affects the center $(h, k)$.

---

### 5. Important Points to Remember

*   **Efficiency:** Bresenham's Midpoint Circle Algorithm is preferred due to its use of only integer arithmetic, minimizing computation time and avoiding floating-point errors.
*   **Symmetry:** Exploiting the 8-fold symmetry of a circle significantly reduces the number of calculations needed, making rendering much faster.
*   **Rasterization:** The goal is to find the closest pixel to the true circle path.
*   **Center Offset:** The algorithms are usually derived for a circle centered at the origin and then translated by offsetting the plotted points.
*   **Continuous Improvement:** Modern graphics hardware often has dedicated circuitry for drawing primitives like circles and lines, further accelerating rendering. However, understanding the underlying algorithms is crucial for CAD principles.

---

### 6. Practice Questions and Exercises

**Question 1:**
Explain why Bresenham's Midpoint Circle Algorithm is more efficient than using trigonometric functions to draw a circle on a raster display.

**Answer 1:**
Bresenham's algorithm uses only integer arithmetic (additions and subtractions) and a decision parameter. This avoids the computationally expensive floating-point operations and the overhead of calculating trigonometric functions (sine and cosine) for each point. Integer operations are significantly faster for the processor, leading to quicker rendering times.

**Question 2:**
A circle with center (50, 70) and radius 10 is to be drawn. If the algorithm starts at the point (50, 80) for the first octant calculation, what are the coordinates of the next pixel to be plotted if the decision parameter is negative? Assume the algorithm is for the first octant, moving from top to bottom and left to right.

**Answer 2:**
In the context of the first octant, moving with a negative decision parameter typically means choosing the "east" pixel. If the current point relative to the center is $(x, y)$, the next point relative to the center would be $(x+1, y)$. Since the center is (50, 70), and the current point is (50, 80) which corresponds to a relative point of $(0, 10)$ from the center, the next pixel's coordinates will be $(50 + (0+1), 70 + 10) = (51, 80)$.

*   Let's clarify the reference point. If the algorithm is drawing starting from $(0, r)$ relative to the center $(h, k)$, the current point is $(h, k+r)$.
*   The algorithm steps relative to origin are $(x, y)$.
*   The first point plotted is $(h+x, k+y)$.
*   Initial point $(x,y) = (0, r)$. So first plotted point is $(h, k+r)$.
*   If the decision parameter is negative (East move), the next relative point is $(x+1, y)$.
*   So the next plotted point is $(h + (x+1), k+y)$.
*   Given center $(50, 70)$ and radius $10$. The starting point relative to origin is $(0, 10)$. The actual pixel plotted is $(50+0, 70+10) = (50, 80)$.
*   If the decision parameter is negative, the next relative point is $(x+1, y) = (0+1, 10) = (1, 10)$.
*   The next pixel to be plotted is $(h + (x+1), k+y) = (50 + 1, 70 + 10) = (51, 80)$.

**Question 3:**
For a circle with radius $r=3$ centered at the origin, what are the first three points calculated in the first octant using the Midpoint Circle Algorithm (starting from $(0, r)$)?

**Answer 3:**
1.  **Initialization:** $h=0, k=0, r=3$.
    *   Start point: $(x, y) = (0, 3)$.
    *   Initial decision parameter $p = 1 - r = 1 - 3 = -2$.

2.  **Iteration 1:**
    *   Plot $(0, 3)$.
    *   $p = -2 < 0$ (East move).
    *   $x = 0 + 1 = 1$.
    *   $y = 3$.
    *   Update $p = p + 2x + 1 = -2 + 2(1) + 1 = 1$.

3.  **Iteration 2:**
    *   Plot $(1, 3)$.
    *   $p = 1 \ge 0$ (Southeast move).
    *   $x = 1 + 1 = 2$.
    *   $y = 3 - 1 = 2$.
    *   Update $p = p + 2x + 1 - 2y = 1 + 2(2) + 1 - 2(2) = 1 + 4 + 1 - 4 = 2$.

4.  **Iteration 3:**
    *   Plot $(2, 2)$.
    *   $p = 2 \ge 0$ (Southeast move).
    *   $x = 2 + 1 = 3$.
    *   $y = 2 - 1 = 1$.
    *   Update $p = p + 2x + 1 - 2y = 2 + 2(3) + 1 - 2(2) = 2 + 6 + 1 - 4 = 5$.

The first three points calculated in the first octant are **(0, 3), (1, 3), and (2, 2)**.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 7. References and Incorporating Content

*   **Groover & Zimmers, CAD/CAM Computer Aided Design and Manufacturing (2014):** This textbook would likely cover the fundamental principles of geometric primitives and the algorithms used to represent them in CAD systems. It would emphasize the practical aspects of CAD software and how these algorithms are implemented. (CO2, K3)
*   **Zeid & Sivasubramanian, CAD/CAM: Theory and Practice (2009):** This book is a strong candidate for detailing various curve drawing algorithms, including their mathematical derivations and computational aspects. It would likely explain the efficiency gains of Bresenham's algorithm and its role in CAD. (CO2, K3)
*   **Rogers & Adams, Mathematical Elements in Computer Graphics (1990):** This reference book is highly relevant for the mathematical underpinnings of computer graphics algorithms. It would provide a rigorous explanation of the geometry and calculus involved in deriving circle drawing algorithms like Bresenham's. (CO2, K3)
*   **Hearn, Baker & Carithers, Computer Graphics with OpenGL (2001):** This book would offer a practical approach to implementing graphics algorithms using OpenGL. It would demonstrate how circle drawing primitives are used and potentially how transformations affect them in a modern graphics pipeline. (CO2, K3)

These sources would be consulted to ensure the accurate description of the Midpoint Circle Algorithm, its derivation, and its application within the broader context of CAD systems and 2D transformations. The emphasis on efficiency and integer arithmetic would be a key takeaway from these references.