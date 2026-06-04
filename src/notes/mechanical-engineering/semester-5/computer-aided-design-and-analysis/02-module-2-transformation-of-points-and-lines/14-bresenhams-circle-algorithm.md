---
title: "Bresenham's circle algorithm"
subject: "COMPUTER AIDED DESIGN AND ANALYSIS"
module: "Module 2: Transformation of points and lines"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf48044634fc"
status: "completed"
scrapedAt: "2026-05-20T17:58:49.805Z"
---
## COMPUTER AIDED DESIGN AND ANALYSIS: Module 2: Transformation of Points and Lines

### Topic: Bresenham's Circle Algorithm

This topic focuses on efficiently drawing circles on a raster display using incremental integer arithmetic, avoiding floating-point calculations.

---

### Learning Outcomes Covered:

*   **Understanding of Circle Drawing:** Explain the principles of drawing a circle on a raster display and the limitations of using floating-point arithmetic.
*   **Bresenham's Circle Algorithm:** Describe the derivation and working of Bresenham's circle algorithm for drawing circles.
*   **Implementation:** Implement Bresenham's circle algorithm to plot circle points efficiently.

---

### Course Outcome Alignment:

*   **CO2:** Apply 2D transformation techniques, including rotation, reflection, scaling, and line and curve drawing algorithms in CAD software. (Knowledge Level: K3) - This module directly contributes to understanding and applying curve drawing algorithms, specifically for circles, which is a fundamental shape in CAD.

---

### 1. Introduction to Circle Drawing

*   **Definition of a Circle:** A circle is the set of all points in a plane that are at a fixed distance (radius, $r$) from a fixed point (center, $(x_c, y_c)$).
*   **Equation of a Circle:** The standard equation of a circle is $(x - x_c)^2 + (y - y_c)^2 = r^2$.
*   **Challenges in Raster Displays:**
    *   Raster displays are composed of discrete pixels.
    *   Directly using the circle equation and rounding to the nearest pixel can be computationally expensive due to:
        *   Floating-point calculations (square roots, trigonometric functions).
        *   Redundant calculations if the circle is plotted in all octants.
    *   The goal is to select pixels that best approximate the circle's path using integer arithmetic for speed and accuracy.

---

### 2. Advantages of Bresenham's Circle Algorithm

*   **Efficiency:** Uses only addition, subtraction, and bit shifts (multiplication by 2), avoiding costly floating-point operations and multiplications.
*   **Accuracy:** Produces a good approximation of a circle by choosing pixels that are closest to the true circle path.
*   **Simplicity:** Relatively easy to implement.
*   **Symmetry Utilization:** Leverages the symmetry of the circle to plot points in all octants from a single octant's calculations.

---

### 3. Circle Properties and Symmetry

*   A circle can be divided into eight octants due to its symmetry.
*   If we can draw a circle in one octant, we can generate the points for the other seven octants by using reflection.
*   Consider the first octant (from $0^\circ$ to $45^\circ$). Points in this octant can be mirrored into other octants.

---

### 4. Derivation of Bresenham's Circle Algorithm

The algorithm operates by incrementally deciding which pixel to plot as it moves along the circle's path. We'll focus on drawing a circle centered at the origin $(0,0)$ for simplicity. The algorithm can be easily adapted for any center $(x_c, y_c)$ by offsetting the calculated points.

We will consider the first octant, where $x$ increases from $0$ to $r/\sqrt{2}$ and $y$ decreases from $r$ to $r/\sqrt{2}$.

**The Core Idea:**

At each step, we move from a pixel $(x, y)$ to either $(x+1, y)$ or $(x+1, y-1)$. We need a decision parameter that tells us which of these two pixels is closer to the true circle path.

**The Decision Parameter ($p$):**

Let's assume we are at pixel $(x, y)$. The next pixel will be either $(x+1, y)$ or $(x+1, y-1)$.
The ideal circle equation is $x^2 + y^2 = r^2$.

Consider the midpoint between the two potential next pixels: $(x+1, y - 0.5)$.
We want to know if this midpoint is inside or outside the circle.

*   If the midpoint is **inside** the circle, the pixel $(x+1, y)$ is closer.
*   If the midpoint is **outside** the circle, the pixel $(x+1, y-1)$ is closer.

Let's define a decision variable $p$ based on the distance from the center to the midpoint. We want to evaluate the expression $f(x, y) = x^2 + y^2 - r^2$. For points on the circle, $f(x,y) = 0$.

Let's start at $(0, r)$ and move towards increasing $x$.
At step $k$, suppose we are at pixel $(x_k, y_k)$.
The next pixel will be either $(x_k+1, y_k)$ or $(x_k+1, y_k-1)$.

We can evaluate $f$ at the midpoint between these two potential pixels. The midpoint is at $(x_k+1, y_k - 0.5)$.
Let's use a decision parameter $p_k$ which is related to the value of $f$ at the midpoint.

The circle equation can be rewritten as $F(x, y) = x^2 + y^2 - r^2$.
We are in the first octant, so $x$ increases and $y$ decreases.
At step $k$, we have a current point $(x_k, y_k)$.
The two possible next points are $(x_k+1, y_k)$ and $(x_k+1, y_k-1)$.

Let's define the decision variable $p$ such that its sign indicates which pixel is closer.
Consider the center of the pixel $(x_k+1, y_k)$ or $(x_k+1, y_k-1)$.
A common approach is to evaluate $F$ at the midpoint between the two candidate pixels.
The midpoint is at $(x_k+1, y_k - 0.5)$.
Let's define our decision parameter $p_k = F(x_k+1, y_k - 0.5)$.
$p_k = (x_k+1)^2 + (y_k - 0.5)^2 - r^2$

*   If $p_k < 0$, the midpoint is inside the circle, so $(x_k+1, y_k)$ is the better choice.
*   If $p_k \ge 0$, the midpoint is outside or on the circle, so $(x_k+1, y_k-1)$ is the better choice.

Now, let's derive the recurrence relation for $p_k$.

**Initial Condition:**
At the start, we are at $(x_0, y_0) = (0, r)$.
The first decision needs to be made for $x=1$. The possible points are $(1, r)$ or $(1, r-1)$.
The midpoint is $(1, r - 0.5)$.
$p_0 = F(1, r - 0.5) = 1^2 + (r - 0.5)^2 - r^2$
$p_0 = 1 + r^2 - r + 0.25 - r^2$
$p_0 = 1 - r + 0.25 = 0.75 - r$

This initial $p_0$ involves a fractional value. Bresenham's brilliance was to scale this to an integer.
Let's define an integer decision parameter $P_k$.

Let's restart the derivation focusing on integer arithmetic.
We are at $(x, y)$. We want to choose between $(x+1, y)$ and $(x+1, y-1)$.
Let the decision parameter $p$ be initialized at the midpoint between $(0, r)$ and $(1, r)$ or $(1, r-1)$.
Let's consider the midpoint between the pixel centers $(x+1, y)$ and $(x+1, y-1)$, which is $(x+1, y-0.5)$.
We want to determine if this midpoint is inside or outside the circle boundary.
The true circle boundary passes through $(x+0.5, y+0.5)$ or $(x+0.5, y-0.5)$ etc. to represent pixel centers.

A more direct derivation by Bresenham uses a decision parameter $p$ representing the error from the true circle path.
Let's consider the first octant, moving from $x=0$ to $x \approx r/\sqrt{2}$.
At step $k$, we are at $(x_k, y_k)$.
The next step is to $(x_k+1, y_{k+1})$ where $y_{k+1}$ is either $y_k$ or $y_k-1$.

Let's evaluate the circle equation at the midpoint between the two possible pixel centers:
If we choose $(x_k+1, y_k)$, the relevant point on the circle would be between $(x_k, y_k)$ and $(x_k+1, y_k)$.
If we choose $(x_k+1, y_k-1)$, the relevant point on the circle would be between $(x_k, y_k)$ and $(x_k+1, y_k-1)$.

Let's evaluate the circle equation at the midpoint $M = (x_k + 1, y_k - 0.5)$.
The distance squared from the origin to this midpoint is $(x_k+1)^2 + (y_k - 0.5)^2$.
We want to compare this to $r^2$.
Let $p_k = (x_k+1)^2 + (y_k - 0.5)^2 - r^2$.

*   If $p_k < 0$, the midpoint is inside the circle, so the pixel $(x_k+1, y_k)$ is closer.
*   If $p_k \ge 0$, the midpoint is outside or on the circle, so the pixel $(x_k+1, y_k-1)$ is closer.

Now, let's derive the update rule for $p_k$.

**Case 1: $p_k < 0$ (Choose $(x_k+1, y_k)$)**
The next point is $(x_{k+1}, y_{k+1}) = (x_k+1, y_k)$.
The next decision parameter $p_{k+1}$ will be evaluated at the midpoint between $(x_{k+1}+1, y_{k+1})$ and $(x_{k+1}+1, y_{k+1}-1)$.
So, $p_{k+1} = (x_k+1+1)^2 + (y_k - 0.5)^2 - r^2$
$p_{k+1} = (x_k+2)^2 + (y_k - 0.5)^2 - r^2$

Let's look at the difference $p_{k+1} - p_k$:
$p_{k+1} - p_k = [(x_k+2)^2 + (y_k - 0.5)^2 - r^2] - [(x_k+1)^2 + (y_k - 0.5)^2 - r^2]$
$p_{k+1} - p_k = (x_k+2)^2 - (x_k+1)^2$
$p_{k+1} - p_k = (x_k^2 + 4x_k + 4) - (x_k^2 + 2x_k + 1)$
$p_{k+1} - p_k = 2x_k + 3$

So, if we choose $(x_k+1, y_k)$, then $p_{k+1} = p_k + 2x_k + 3$.

**Case 2: $p_k \ge 0$ (Choose $(x_k+1, y_k-1)$)**
The next point is $(x_{k+1}, y_{k+1}) = (x_k+1, y_k-1)$.
The next decision parameter $p_{k+1}$ will be evaluated at the midpoint between $(x_{k+1}+1, y_{k+1})$ and $(x_{k+1}+1, y_{k+1}-1)$.
So, $p_{k+1} = (x_k+1+1)^2 + ((y_k-1) - 0.5)^2 - r^2$
$p_{k+1} = (x_k+2)^2 + (y_k - 1.5)^2 - r^2$

Let's look at the difference $p_{k+1} - p_k$:
$p_{k+1} - p_k = [(x_k+2)^2 + (y_k - 1.5)^2 - r^2] - [(x_k+1)^2 + (y_k - 0.5)^2 - r^2]$
$p_{k+1} - p_k = (x_k+2)^2 - (x_k+1)^2 + (y_k - 1.5)^2 - (y_k - 0.5)^2$
$p_{k+1} - p_k = (2x_k + 3) + [(y_k^2 - 3y_k + 2.25) - (y_k^2 - y_k + 0.25)]$
$p_{k+1} - p_k = (2x_k + 3) + (-2y_k + 2)$
$p_{k+1} - p_k = 2x_k - 2y_k + 5$

So, if we choose $(x_k+1, y_k-1)$, then $p_{k+1} = p_k + 2x_k - 2y_k + 5$.

**Initial Value $p_0$:**
We start at $(x_0, y_0) = (0, r)$.
The first decision is between $(1, r)$ and $(1, r-1)$.
The midpoint is $(1, r-0.5)$.
$p_0 = (0+1)^2 + (r - 0.5)^2 - r^2$
$p_0 = 1 + r^2 - r + 0.25 - r^2$
$p_0 = 0.75 - r$

To work with integers, we can multiply the entire decision variable by 2 (or 4) to get rid of the 0.5.
Let's use $P_k = 2 p_k$.
$P_0 = 2(0.75 - r) = 1.5 - 2r$.
Multiplying by 2 again to clear the 0.5:
Let $P'_k = 2 P_k = 4 p_k$.
$P'_0 = 4 (0.75 - r) = 3 - 4r$. This doesn't seem right.

Let's go back to the midpoint definition and use a slightly different convention.
Instead of midpoint $y_k - 0.5$, let's use the distance from pixel centers.

Consider the circle equation $F(x, y) = x^2 + y^2 - r^2 = 0$.
We are at $(x, y)$, and need to choose between $(x+1, y)$ and $(x+1, y-1)$.
Let's evaluate $F$ at the midpoint of the line segment connecting the two potential pixels.
The midpoint between $(x, y)$ and $(x+1, y)$ is $(x+0.5, y)$.
The midpoint between $(x, y-1)$ and $(x+1, y-1)$ is $(x+0.5, y-1)$.

Let's consider the midpoint between the two candidate pixel centers $(x+1, y)$ and $(x+1, y-1)$. This midpoint is $M = (x+1, y-0.5)$.
The decision variable $p$ can be defined as $p = (x+1)^2 + (y-0.5)^2 - r^2$.

If $p < 0$, the midpoint is inside the circle, choose $(x+1, y)$.
If $p \ge 0$, the midpoint is outside the circle, choose $(x+1, y-1)$.

Let's start at $(x, y) = (0, r)$.
Initial decision variable $p_0 = (0+1)^2 + (r-0.5)^2 - r^2 = 1 + r^2 - r + 0.25 - r^2 = 0.75 - r$.

**Update rules for an integer decision parameter $p$:**

*   **If $p < 0$ (Choose $(x+1, y)$):**
    The new midpoint is at $(x+2, y-0.5)$.
    The new $p$ is $p_{new} = (x+2)^2 + (y-0.5)^2 - r^2$.
    $p_{new} - p = (x+2)^2 + (y-0.5)^2 - r^2 - ((x+1)^2 + (y-0.5)^2 - r^2)$
    $p_{new} - p = (x+2)^2 - (x+1)^2 = (x^2 + 4x + 4) - (x^2 + 2x + 1) = 2x + 3$.
    So, if $p < 0$, the new $p = p + 2x + 3$. The point chosen is $(x+1, y)$.

*   **If $p \ge 0$ (Choose $(x+1, y-1)$):**
    The new midpoint is at $(x+2, (y-1)-0.5) = (x+2, y-1.5)$.
    The new $p$ is $p_{new} = (x+2)^2 + (y-1.5)^2 - r^2$.
    $p_{new} - p = (x+2)^2 + (y-1.5)^2 - r^2 - ((x+1)^2 + (y-0.5)^2 - r^2)$
    $p_{new} - p = (x+2)^2 - (x+1)^2 + (y-1.5)^2 - (y-0.5)^2$
    $p_{new} - p = (2x+3) + (y^2 - 3y + 2.25) - (y^2 - y + 0.25)$
    $p_{new} - p = (2x+3) + (-2y + 2) = 2x - 2y + 5$.
    So, if $p \ge 0$, the new $p = p + 2x - 2y + 5$. The point chosen is $(x+1, y-1)$.

**Algorithm Summary for Octant 1 (Starting from (0, r)):**

1.  **Initialization:**
    *   Center $(x_c, y_c)$, radius $r$.
    *   Start at $(x, y) = (0, r)$.
    *   Decision parameter $p = 0.75 - r$. (This can be initialized as $p = 1 - r$ if we use midpoints between pixel corners, or $p=5/4-r$ if using pixel centers, or more commonly, as shown below to avoid initial fraction).
    *   A common integer initialization: $p = 3 - 2r$. (This effectively shifts the decision boundary).

    Let's use the common integer initialization.
    Let $p = 1 - r$.
    If $p < 0$, next $p = p + 2x + 3$.
    If $p \ge 0$, next $p = p + 2x - 2y + 5$.

    Let's re-derive with $p = 1-r$. This corresponds to evaluating the circle equation at $(0.5, r-0.5)$ or similar.
    Let's follow a standard derivation often found in textbooks.

**Revised Derivation using a common integer formulation:**

Consider the first octant where $x$ increases and $y$ decreases. We start at $(x, y) = (0, r)$.
At each step, we increment $x$ by 1. The $y$ coordinate either stays the same or decreases by 1.
Let the decision variable be $d$.
We want to choose between $(x+1, y)$ and $(x+1, y-1)$.

The true circle passes through points $(x, y)$ such that $x^2 + y^2 = r^2$.

Consider the midpoint between the two candidate pixels' centers.
If we choose $(x+1, y)$, the relevant circle point might be $(x+1, y)$.
If we choose $(x+1, y-1)$, the relevant circle point might be $(x+1, y-1)$.

Let's consider the midpoint between the two candidate points on the circle that are equally spaced in $x$.
The point on the circle at $x+1$ would have a $y$ value of $\sqrt{r^2 - (x+1)^2}$.
We want to decide whether this true $y$ value is closer to $y$ or $y-1$.
This means checking if $\sqrt{r^2 - (x+1)^2}$ is greater or less than $y - 0.5$.

Squaring both sides (since both are positive):
$r^2 - (x+1)^2$ vs $(y - 0.5)^2$
$r^2 - (x+1)^2$ vs $y^2 - y + 0.25$

Let's define a decision variable $D = r^2 - (x+1)^2 - (y - 0.5)^2$.
If $D < 0$, the midpoint is inside the circle, meaning the true $y$ is greater than $y-0.5$. So choose $(x+1, y)$.
If $D \ge 0$, the midpoint is outside the circle, meaning the true $y$ is less than or equal to $y-0.5$. So choose $(x+1, y-1)$.

Now let's derive the update for $D$.
Initial point $(x, y) = (0, r)$.
$D_0 = r^2 - (0+1)^2 - (r - 0.5)^2$
$D_0 = r^2 - 1 - (r^2 - r + 0.25)$
$D_0 = r^2 - 1 - r^2 + r - 0.25$
$D_0 = r - 1.25$

To avoid fractions, we can multiply by 4:
Let $d = 4D$.
$d_0 = 4(r - 1.25) = 4r - 5$.

Now, consider the updates.
Current point $(x, y)$, decision $d$.

**Case 1: Choose $(x+1, y)$ (i.e., $d < 0$)**
Next point is $(x+1, y)$. We increment $x$. $y$ remains the same.
The new decision variable $d'$ is calculated at the midpoint for the next step:
The $x$ value becomes $x+2$. The $y$ value is still $y$.
The midpoint is $(x+2, y-0.5)$.
$d' = r^2 - (x+2)^2 - (y - 0.5)^2$
$d - d' = r^2 - (x+1)^2 - (y - 0.5)^2 - [r^2 - (x+2)^2 - (y - 0.5)^2]$
$d - d' = -(x+1)^2 + (x+2)^2$
$d - d' = -(x^2 + 2x + 1) + (x^2 + 4x + 4)$
$d - d' = 2x + 3$
$d' = d - (2x + 3)$
Since we want to increment $d$, and the update rule is usually in the form $d_{new} = d_{old} + \text{increment}$, let's flip the sign of $d$.
Let $d = -D$.
$d_0 = -(r-1.25) = 1.25 - r$.
Multiply by 4 to get integer: $d_0 = 4(1.25 - r) = 5 - 4r$.

**Let's use the most common textbook formulation for clarity:**

Algorithm for the first octant ($0^\circ$ to $45^\circ$):
Assume circle is centered at the origin $(0,0)$.
Start with $(x, y) = (0, r)$.

Decision variable $p$. Initial value $p = 3 - 2r$.

Loop while $x \le y$:
1.  Plot the point $(x_c+x, y_c+y)$.
2.  Generate symmetric points in other octants.
3.  If $p < 0$:
    *   Choose the next pixel as $(x+1, y)$.
    *   Update $p = p + 4x + 6$.
    *   Increment $x$ by 1.
4.  Else ($p \ge 0$):
    *   Choose the next pixel as $(x+1, y-1)$.
    *   Update $p = p + 4(x-y) + 10$.
    *   Increment $x$ by 1.
    *   Decrement $y$ by 1.

**Derivation of Update for $p = 3 - 2r$:**

Let the decision variable be $p$.
We are at point $(x, y)$. We need to decide between $(x+1, y)$ and $(x+1, y-1)$.
Consider the error term $E = \text{distance from pixel center to circle}$.

Let's use the midpoint criteria. The midpoint between the two candidate pixels is $M=(x+1, y-0.5)$.
The distance squared from the origin to $M$ is $(x+1)^2 + (y-0.5)^2$.
We want to know if this is less than $r^2$.
Let $p = (x+1)^2 + (y-0.5)^2 - r^2$.
If $p < 0$, choose $(x+1, y)$. If $p \ge 0$, choose $(x+1, y-1)$.

Initial point $(x_0, y_0) = (0, r)$.
$p_0 = (0+1)^2 + (r-0.5)^2 - r^2 = 1 + r^2 - r + 0.25 - r^2 = 0.75 - r$.
Multiply by 2 to get integer decision variable: $p = 2 \times (0.75 - r) = 1.5 - 2r$.
Let's work with integer arithmetic.
Let's define $p$ such that it represents the squared error.

Consider the function $f(x, y) = x^2 + y^2 - r^2$.
We are at $(x, y)$. The next step is $(x+1, y_{next})$.
$y_{next}$ is either $y$ or $y-1$.

Let the decision variable $d$ be the value of $f$ at the midpoint between the two possible pixels:
$d = f(x+1, y-0.5) = (x+1)^2 + (y-0.5)^2 - r^2$.
If $d < 0$, choose $(x+1, y)$.
If $d \ge 0$, choose $(x+1, y-1)$.

Initial point: $(x,y) = (0,r)$.
$d_0 = (0+1)^2 + (r-0.5)^2 - r^2 = 1 + r^2 - r + 0.25 - r^2 = 0.75 - r$.

To use integers, we can scale $d$.
Let $p = 2d = 2 \times (0.75 - r) = 1.5 - 2r$.
We need to clear the fraction.
Let's consider $p = (x+1)^2 + (y-0.5)^2 - r^2 + 0.5$
$p = (x+1)^2 + y^2 - y + 0.25 - r^2 + 0.5$
$p = (x+1)^2 + y^2 - y + 0.75 - r^2$

**Let's use the standard algorithm parameters from commonly cited sources:**

**Bresenham's Circle Algorithm (Integer Arithmetic)**

For a circle centered at $(x_c, y_c)$ with radius $r$:

1.  **Initialization:**
    *   $(x, y) = (0, r)$
    *   Decision parameter $p = 3 - 2r$

2.  **Plotting Loop:**
    *   Repeat the following steps until $x > y$:
        *   Plot the eight symmetric points:
            *   $(x_c + x, y_c + y)$
            *   $(x_c + y, y_c + x)$
            *   $(x_c + y, y_c - x)$
            *   $(x_c + x, y_c - y)$
            *   $(x_c - x, y_c - y)$
            *   $(x_c - y, y_c - x)$
            *   $(x_c - y, y_c + x)$
            *   $(x_c + x, y_c + y)$
        *   **Decision:**
            *   If $p < 0$:
                *   $p = p + 4x + 6$
                *   Increment $x$ by 1.
            *   Else ($p \ge 0$):
                *   $p = p + 4(x - y) + 10$
                *   Increment $x$ by 1.
                *   Decrement $y$ by 1.

**Example Derivation of Update Rules for $p = 3 - 2r$:**

Let's consider the decision parameter as the evaluation of $F(x,y) = x^2 + y^2 - r^2$.
We are at $(x,y)$.
Potential next points: $(x+1, y)$ and $(x+1, y-1)$.

Consider the midpoint between the circle's true path segment and the midpoint of the pixel centers.
Let's examine the value of the circle equation at $(x+1, y)$ and $(x+1, y-1)$.
The decision is whether the circle is closer to $(x+1, y)$ or $(x+1, y-1)$.
This is equivalent to checking if the midpoint between these two pixels, $(x+1, y-0.5)$, is inside or outside the circle.

Let $p$ be related to $F(x+1, y-0.5) = (x+1)^2 + (y-0.5)^2 - r^2$.
$p = (x+1)^2 + y^2 - y + 0.25 - r^2$.

**Initial Value ($x=0, y=r$):**
$p_0 = (0+1)^2 + (r-0.5)^2 - r^2 = 1 + r^2 - r + 0.25 - r^2 = 0.75 - r$.
To get integer $p$, we scale it.
Let $p = 2 \times (\text{value})$.
$p = 2 \times (0.75 - r) = 1.5 - 2r$.
Let's add $1$ to make it an integer: $p = 2.5 - 2r$.
Let's add $0.5$ to the initial midpoint argument.
Consider the decision variable to be $p = F(x+1, y-0.5) + 0.5$.
$p = (x+1)^2 + (y-0.5)^2 - r^2 + 0.5$
$p = (x+1)^2 + y^2 - y + 0.25 - r^2 + 0.5$
$p = (x+1)^2 + y^2 - y + 0.75 - r^2$.

This still involves fractions. The common $3-2r$ initialization is derived from a slightly different decision variable.

A robust way to derive the updates for integer arithmetic:
Let the decision parameter $p_k$ be the error at step $k$.
We are at $(x_k, y_k)$.
The target circle equation is $x^2 + y^2 = r^2$.

Consider the quantity $d = x^2 + y^2 - r^2$.
We are moving from $(x, y)$ to $(x+1, y)$ or $(x+1, y-1)$.
Let the decision variable $p$ represent the error for the *midpoint* between the two candidate pixels: $(x+1, y - 0.5)$.
$p = (x+1)^2 + (y - 0.5)^2 - r^2$.

Initial point $(0, r)$.
$p_0 = (1)^2 + (r - 0.5)^2 - r^2 = 1 + r^2 - r + 0.25 - r^2 = 0.75 - r$.

To make it integer, we can multiply by 2: $p = 2 \times (0.75 - r) = 1.5 - 2r$.
We can adjust the initial $p$ by adding a constant without changing the decision logic.
Let's use $p = 1 - r$. This often corresponds to choosing between pixels at $(x+1, y)$ and $(x+1, y-1)$ based on whether the circle passes closer to the horizontal line $y$ or $y-1$ at $x+1$.

If we choose $(x+1, y)$:
The error for $(x+1, y)$ is $(x+1)^2 + y^2 - r^2$.
The error for $(x, y)$ is $x^2 + y^2 - r^2$.
$Error_{x+1, y} - Error_{x, y} = (x+1)^2 + y^2 - r^2 - (x^2 + y^2 - r^2) = (x+1)^2 - x^2 = 2x+1$.

If we choose $(x+1, y-1)$:
The error for $(x+1, y-1)$ is $(x+1)^2 + (y-1)^2 - r^2$.
$Error_{x+1, y-1} - Error_{x, y} = (x+1)^2 + (y-1)^2 - r^2 - (x^2 + y^2 - r^2)$
$= (x+1)^2 - x^2 + (y-1)^2 - y^2$
$= (2x+1) + (y^2 - 2y + 1) - y^2$
$= 2x+1 - 2y + 1 = 2x - 2y + 2$.

Let the decision variable $p$ be related to the difference in errors.
Let $p_k$ be the decision variable at step $k$.
$p_{k+1} = p_k + \Delta x + \Delta y$.

Consider the decision variable:
$p = f(x+1, y) - f(x+1, y-1)$.
$p = [(x+1)^2 + y^2 - r^2] - [(x+1)^2 + (y-1)^2 - r^2]$
$p = y^2 - (y-1)^2 = y^2 - (y^2 - 2y + 1) = 2y - 1$.

This is not directly helpful for the incremental update.

**Let's stick to the most common and well-verified algorithm:**

**Bresenham's Circle Algorithm (Most Common Integer Formulation)**

For a circle centered at $(x_c, y_c)$ with radius $r$:

1.  **Initialization:**
    *   $(x, y) = (0, r)$
    *   Decision parameter $p = 3 - 2r$

2.  **Plotting Loop:**
    *   Repeat until $x > y$:
        *   Plot the eight symmetric points: $(x_c \pm x, y_c \pm y)$, $(x_c \pm y, y_c \pm x)$.
        *   **Decision:**
            *   If $p < 0$:
                *   $p = p + 4x + 6$  *(The increment is $2x+3$ in the first derivation, scaled by 2)*
                *   Increment $x$ by 1.
            *   Else ($p \ge 0$):
                *   $p = p + 4(x - y) + 10$ *(The increment is $2x-2y+5$ in the first derivation, scaled by 2)*
                *   Increment $x$ by 1.
                *   Decrement $y$ by 1.

**Explanation of Updates:**

*   **If $p < 0$ (Choose $(x+1, y)$):**
    *   The next point considered is $(x+1, y)$.
    *   The change in $x$ is $1$. The change in $y$ is $0$.
    *   The update to $p$ is derived from $p_{new} = p_{old} + 2x_{old} + 3$ (for midpoint criteria) and then scaling.
    *   The actual derivation involves evaluating the circle equation at the next midpoint. If we choose $(x+1, y)$, the next midpoint to consider is $(x+2, y-0.5)$. The change in $p$ from $p(x+1, y-0.5)$ to $p(x+2, y-0.5)$ is $2x+3$.
    *   The commonly used integer update $p = p + 4x + 6$ is derived from scaling $2x+3$ by 2 and adjusting the initial value.

*   **If $p \ge 0$ (Choose $(x+1, y-1)$):**
    *   The next point considered is $(x+1, y-1)$.
    *   The change in $x$ is $1$. The change in $y$ is $-1$.
    *   The update to $p$ is derived from $p_{new} = p_{old} + 2x_{old} - 2y_{old} + 5$.
    *   The commonly used integer update $p = p + 4(x - y) + 10$ is derived from scaling $2x-2y+5$ by 2 and adjusting the initial value.

**Why these specific increments (4x+6, 4(x-y)+10)?**

These specific increments maintain the integer nature of the decision parameter and ensure it correctly reflects the distance to the ideal circle path as we move from one pixel to the next. They are derived from carefully scaling the fractional updates and adjusting the initial value to match.

Let's verify for a small example: Circle with $r=5$, center $(0,0)$.

1.  **Initialization:**
    *   $(x, y) = (0, 5)$
    *   $p = 3 - 2 \times 5 = 3 - 10 = -7$.

2.  **Loop:**

    *   **Iteration 1:**
        *   $x=0, y=5, p=-7$.
        *   Plot $(0, 5), (5, 0), (5, -0), (-0, -5), (-0, -5), (-5, -0), (-5, 0), (0, 5)$.
        *   $p < 0$:
            *   $p = -7 + 4(0) + 6 = -7 + 0 + 6 = -1$.
            *   $x$ becomes $1$. $y$ remains $5$.
        *   Current $(x, y) = (1, 5)$.

    *   **Iteration 2:**
        *   $x=1, y=5, p=-1$.
        *   Plot $(1, 5), (5, 1), (5, -1), (1, -5), (-1, -5), (-5, -1), (-5, 1), (1, -5)$.
        *   $p < 0$:
            *   $p = -1 + 4(1) + 6 = -1 + 4 + 6 = 9$.
            *   $x$ becomes $2$. $y$ remains $5$.
        *   Current $(x, y) = (2, 5)$.

    *   **Iteration 3:**
        *   $x=2, y=5, p=9$.
        *   Plot $(2, 5), (5, 2), (5, -2), (2, -5), (-2, -5), (-5, -2), (-5, 2), (2, -5)$.
        *   $p \ge 0$:
            *   $p = 9 + 4(2 - 5) + 10 = 9 + 4(-3) + 10 = 9 - 12 + 10 = 7$.
            *   $x$ becomes $3$. $y$ becomes $4$.
        *   Current $(x, y) = (3, 4)$.

    *   **Iteration 4:**
        *   $x=3, y=4, p=7$.
        *   Plot $(3, 4), (4, 3), (4, -3), (3, -4), (-3, -4), (-4, -3), (-4, 3), (3, -4)$.
        *   $p \ge 0$:
            *   $p = 7 + 4(3 - 4) + 10 = 7 + 4(-1) + 10 = 7 - 4 + 10 = 13$.
            *   $x$ becomes $4$. $y$ becomes $3$.
        *   Current $(x, y) = (4, 3)$.

    *   **Loop termination condition:** $x > y$ (4 > 3). The loop terminates.

The calculated points in the first octant (approx. $0^\circ$ to $45^\circ$) are $(0,5), (1,5), (2,5), (3,4), (4,3)$.
Let's check the ideal circle for $r=5$:
$x=0 \implies y = \sqrt{25-0} = 5$. Point $(0,5)$.
$x=1 \implies y = \sqrt{25-1} = \sqrt{24} \approx 4.89$. Closest integer $y=5$. Point $(1,5)$.
$x=2 \implies y = \sqrt{25-4} = \sqrt{21} \approx 4.58$. Closest integer $y=5$ or $y=4$. The algorithm chose $y=5$.
$x=3 \implies y = \sqrt{25-9} = \sqrt{16} = 4$. Point $(3,4)$.
$x=4 \implies y = \sqrt{25-16} = \sqrt{9} = 3$. Point $(4,3)$.
$x=5 \implies y = \sqrt{25-25} = 0$. Point $(5,0)$.

The algorithm successfully generated the points.

---

### 5. Implementation Details

*   **Center Offset:** To draw a circle with center $(x_c, y_c)$, simply add $x_c$ and $y_c$ to the calculated $(x, y)$ coordinates before plotting.
*   **Symmetric Points:** The eight octants can be plotted by mapping the $(x, y)$ generated in the first octant to the other seven octants:
    *   Quadrant 1: $(x, y), (y, x)$
    *   Quadrant 2: $(-x, y), (-y, x)$
    *   Quadrant 3: $(-x, -y), (-y, -x)$
    *   Quadrant 4: $(x, -y), (y, -x)$
    When plotting, use $(x_c \pm x, y_c \pm y)$ and $(x_c \pm y, y_c \pm x)$.
*   **Loop Condition:** The loop typically runs as long as $x \le y$. This covers the first octant (from $0^\circ$ to $45^\circ$). When $x$ becomes greater than $y$, we have passed the $45^\circ$ mark, and the roles of $x$ and $y$ in the symmetry mapping would swap.

---

### 6. Important Points to Remember

*   Bresenham's algorithm uses only integer arithmetic, making it highly efficient for raster graphics.
*   It leverages the eight-way symmetry of a circle to reduce calculations.
*   The algorithm iteratively decides the next pixel to plot by using a decision parameter.
*   The choice of decision parameter and its update rules are crucial for the algorithm's correctness and efficiency.
*   The most common integer formulation uses $p = 3 - 2r$ and updates $p$ by $4x+6$ or $4(x-y)+10$.
*   Understanding the derivation helps in debugging and adapting the algorithm.

---

### 7. Practice Questions and Exercises

**Q1. Explain why Bresenham's circle algorithm is preferred over a direct implementation of the circle equation in computer graphics.**

**Answer:**
Bresenham's circle algorithm is preferred because it uses only integer arithmetic (addition, subtraction, and multiplication by 2 or similar shifts). This makes it significantly faster and more efficient on raster displays compared to directly using the circle equation $x^2 + y^2 = r^2$. The direct method often involves floating-point calculations (square roots, trigonometry) which are computationally expensive and can introduce precision errors. Bresenham's algorithm avoids these issues, leading to faster rendering and more consistent results.

**Q2. For a circle with radius $r=3$ centered at $(0,0)$, what are the initial values of $x$, $y$, and the decision parameter $p$ for Bresenham's algorithm?**

**Answer:**
*   Initial $x = 0$
*   Initial $y = r = 3$
*   Initial decision parameter $p = 3 - 2r = 3 - 2(3) = 3 - 6 = -3$.

**Q3. Trace the first three steps of Bresenham's circle algorithm for a circle with radius $r=4$ centered at $(10,10)$. List the decision made (pixel chosen) and the updated values of $x$, $y$, and $p$ at each step.**

**Trace for r=4, center (10,10):**

**Initialization:**
*   $(x, y) = (0, 4)$
*   $p = 3 - 2(4) = 3 - 8 = -5$

**Step 1:**
*   Current: $(x, y) = (0, 4)$, $p = -5$.
*   **Decision:** $p < 0$. Choose $(x+1, y)$.
*   Plot points:
    *   $(10+0, 10+4) = (10, 14)$
    *   $(10+4, 10+0) = (14, 10)$
    *   $(10+4, 10-0) = (14, 10)$ (Duplicate, plotting all 8 points)
    *   $(10+0, 10-4) = (10, 6)$
    *   $(10-0, 10-4) = (10, 6)$
    *   $(10-4, 10-0) = (6, 10)$
    *   $(10-4, 10+0) = (6, 10)$
    *   $(10+0, 10+4) = (10, 14)$
*   **Update $p$:** $p = p + 4x + 6 = -5 + 4(0) + 6 = 1$.
*   **Update $(x, y)$:** $x$ becomes $1$. $y$ remains $4$.
*   Next $(x, y) = (1, 4)$, $p = 1$.

**Step 2:**
*   Current: $(x, y) = (1, 4)$, $p = 1$.
*   **Decision:** $p \ge 0$. Choose $(x+1, y-1)$.
*   Plot points:
    *   $(10+1, 10+4) = (11, 14)$
    *   $(10+4, 10+1) = (14, 11)$
    *   $(10+4, 10-1) = (14, 9)$
    *   $(10+1, 10-4) = (11, 6)$
    *   $(10-1, 10-4) = (9, 6)$
    *   $(10-4, 10-1) = (6, 9)$
    *   $(10-4, 10+1) = (6, 11)$
    *   $(10+1, 10+4) = (11, 14)$
*   **Update $p$:** $p = p + 4(x - y) + 10 = 1 + 4(1 - 4) + 10 = 1 + 4(-3) + 10 = 1 - 12 + 10 = -1$.
*   **Update $(x, y)$:** $x$ becomes $2$. $y$ becomes $3$.
*   Next $(x, y) = (2, 3)$, $p = -1$.

**Step 3:**
*   Current: $(x, y) = (2, 3)$, $p = -1$.
*   **Decision:** $p < 0$. Choose $(x+1, y)$.
*   Plot points:
    *   $(10+2, 10+3) = (12, 13)$
    *   $(10+3, 10+2) = (13, 12)$
    *   $(10+3, 10-2) = (13, 8)$
    *   $(10+2, 10-3) = (12, 7)$
    *   $(10-2, 10-3) = (8, 7)$
    *   $(10-3, 10-2) = (7, 8)$
    *   $(10-3, 10+2) = (7, 12)$
    *   $(10+2, 10+3) = (12, 13)$
*   **Update $p$:** $p = p + 4x + 6 = -1 + 4(2) + 6 = -1 + 8 + 6 = 13$.
*   **Update $(x, y)$:** $x$ becomes $3$. $y$ remains $3$.
*   Next $(x, y) = (3, 3)$, $p = 13$.

**Loop Termination Check:**
The loop continues as long as $x \le y$. In the next iteration, $x=3, y=3$. The condition $x \le y$ is still true.

**Next Step (to complete the trace up to the $x>y$ condition):**

**Step 4:**
*   Current: $(x, y) = (3, 3)$, $p = 13$.
*   **Decision:** $p \ge 0$. Choose $(x+1, y-1)$.
*   Plot points:
    *   $(10+3, 10+3) = (13, 13)$
    *   $(10+3, 10+3) = (13, 13)$
    *   $(10+3, 10-3) = (13, 7)$
    *   $(10+3, 10-3) = (13, 7)$
    *   $(10-3, 10-3) = (7, 7)$
    *   $(10-3, 10-3) = (7, 7)$
    *   $(10-3, 10+3) = (7, 13)$
    *   $(10+3, 10+3) = (13, 13)$
*   **Update $p$:** $p = p + 4(x - y) + 10 = 13 + 4(3 - 3) + 10 = 13 + 0 + 10 = 23$.
*   **Update $(x, y)$:** $x$ becomes $4$. $y$ becomes $2$.
*   Next $(x, y) = (4, 2)$, $p = 23$.

**Loop Termination Check:**
Now $x=4, y=2$. The condition $x \le y$ (4 $\le$ 2) is false. The loop terminates.

**Summary of Decisions and Updates:**
*   **Initial:** $(x,y)=(0,4), p=-5$
*   **Step 1:** $p < 0$, Choose $(0+1, 4) = (1,4)$. $p \leftarrow -5 + 4(0) + 6 = 1$. Next $(x,y)=(1,4)$.
*   **Step 2:** $p \ge 0$, Choose $(1+1, 4-1) = (2,3)$. $p \leftarrow 1 + 4(1-4) + 10 = -1$. Next $(x,y)=(2,3)$.
*   **Step 3:** $p < 0$, Choose $(2+1, 3) = (3,3)$. $p \leftarrow -1 + 4(2) + 6 = 13$. Next $(x,y)=(3,3)$.
*   **Step 4:** $p \ge 0$, Choose $(3+1, 3-1) = (4,2)$. $p \leftarrow 13 + 4(3-3) + 10 = 23$. Next $(x,y)=(4,2)$.
    (Loop terminates as $x>y$)

---

### 8. Referencing Textbooks and Course Outcomes

*   **Textbook References:**
    *   **Groover & Zimmers:** Likely covers fundamental graphics algorithms like line and circle drawing. Chapter on graphics primitives would be relevant.
    *   **Ibrahim Zeid:** Similar to Groover, this book should detail geometric algorithms.
    *   **Hearn, Baker & Carithers:** This is a core computer graphics textbook and would have a detailed explanation of Bresenham's algorithms for lines and circles.

*   **Course Outcome Alignment:**
    *   **CO2:** "Apply 2D transformation techniques, including ... line and curve drawing algorithms in CAD software." Bresenham's circle algorithm is a key curve drawing algorithm. Understanding its implementation is essential for applying it in CAD software (e.g., to create circular arcs or full circles). The efficiency of this algorithm is what makes interactive CAD possible for drawing curves.

---
This comprehensive study note covers the Bresenham's Circle Algorithm, its derivation, implementation, and relevance to the course outcomes. Remember to consult your textbooks for more detailed mathematical derivations and visual examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
