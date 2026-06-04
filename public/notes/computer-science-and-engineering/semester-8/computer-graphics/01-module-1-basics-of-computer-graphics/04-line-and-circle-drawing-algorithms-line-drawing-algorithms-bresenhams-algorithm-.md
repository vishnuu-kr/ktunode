---
title: "Line and Circle drawing Algorithms - Line drawing algorithms- Bresenham’s algorithm, Liang-Barsky Algorithm"
subject: "COMPUTER GRAPHICS"
module: "Module 1: Basics of Computer graphics "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cd50"
status: "completed"
scrapedAt: "2026-05-20T17:24:27.267Z"
---
# Computer Graphics: Module 1 - Basics of Computer Graphics

## Topic: Line and Circle Drawing Algorithms - Line Drawing Algorithms

### Learning Outcomes:

By the end of this section, you should be able to:

*   Understand the fundamental concepts behind rasterizing lines.
*   Explain the working principles of Bresenham's Line Drawing Algorithm.
*   Apply Bresenham's algorithm to draw lines on a raster display.
*   Explain the working principles of the Liang-Barsky Line Clipping Algorithm.
*   Apply the Liang-Barsky algorithm for clipping lines against rectangular windows.

---

### 1. Introduction to Line Drawing

**What is Line Drawing?**

In computer graphics, drawing a line on a raster display (a grid of pixels) involves determining which pixels should be illuminated to best approximate the ideal mathematical line. This process is called **rasterization**.

**Challenges in Line Drawing:**

*   **Discreteness:** Pixels are discrete units, while mathematical lines are continuous. We need to select the "closest" pixels to the ideal line.
*   **Efficiency:** Algorithms need to be computationally efficient, especially when drawing many lines or complex scenes.
*   **Accuracy:** The algorithm should produce lines that appear smooth and free of undesirable artifacts like jaggedness or gaps.

**Key Concepts:**

*   **Pixel:** The smallest addressable element on a display screen.
*   **Raster Display:** A display device that represents an image as a grid of pixels.
*   **Line Equation:** A mathematical representation of a line, typically $y = mx + c$ or $Ax + By + C = 0$.
*   **Slope (m):** The ratio of the change in y to the change in x.
*   **Intercept (c):** The y-value where the line crosses the y-axis.

---

### 2. Bresenham's Line Drawing Algorithm

**Overview:**

Bresenham's Line Drawing Algorithm is an efficient, integer-only algorithm for rasterizing lines. It's widely used because it avoids floating-point arithmetic, making it faster and simpler to implement. The algorithm works by making a decision at each step whether to move to the next pixel horizontally, vertically, or diagonally, based on an error term.

**Core Idea:**

The algorithm starts at one endpoint of the line and iteratively decides which pixel to plot next. At each step, it considers two candidate pixels and chooses the one that is closest to the ideal mathematical line. This decision is made using a simple error calculation that only involves integer operations.

**Algorithm Steps (for a line from $(x_1, y_1)$ to $(x_2, y_2)$ where $0 \le \Delta y \le \Delta x$):**

Let $\Delta x = x_2 - x_1$ and $\Delta y = y_2 - y_1$.
The algorithm iterates from $x_1$ to $x_2$.

1.  **Initialization:**
    *   Set $x = x_1$, $y = y_1$.
    *   Initialize the decision parameter $P = 2 \Delta y - \Delta x$.
    *   Plot the starting pixel $(x, y)$.

2.  **Iteration:** For $x$ from $x_1 + 1$ to $x_2$:
    *   **If $P < 0$:**
        *   The next pixel is $(x+1, y)$.
        *   Increment $x$ by 1.
        *   Update $P = P + 2 \Delta y$.
    *   **If $P \ge 0$:**
        *   The next pixel is $(x+1, y+1)$.
        *   Increment $x$ by 1.
        *   Increment $y$ by 1.
        *   Update $P = P + 2 \Delta y - 2 \Delta x$.
    *   Plot the chosen pixel $(x, y)$.

**Generalizing Bresenham's Algorithm for All Octants:**

The above steps are for lines in the first octant (where $0 \le \Delta y \le \Delta x$). To handle all octants, we can use a more general form or rely on symmetry:

*   **Calculate $\Delta x = x_2 - x_1$ and $\Delta y = y_2 - y_1$.**
*   **Determine the slope:** If $|\Delta y| > |\Delta x|$, swap $(\Delta x, \Delta y)$ and $(x_1, y_1), (x_2, y_2)$, and also swap the roles of $x$ and $y$ in the iteration and plotting. This ensures that the algorithm always iterates along the axis with the larger difference.
*   **Handle negative slopes:** If $x_2 < x_1$, swap $(x_1, x_2)$ and $(y_1, y_2)$. If $y_2 < y_1$ (after potential swap), set $y = y_1 - 1$ and $\Delta y = -\Delta y$.
*   **Initialization:**
    *   Set $x = x_1$, $y = y_1$.
    *   Initialize decision parameter:
        *   If $\Delta y \ge 0$: $P = 2 \Delta y - \Delta x$.
        *   If $\Delta y < 0$: $P = 2 \Delta y + \Delta x$. (This is often simplified by just taking the absolute value of $\Delta y$ in the formulas and adjusting the increment/decrement of $y$ based on the sign.)
    *   Plot $(x, y)$.

*   **Iteration:** For $x$ from $x_1+1$ to $x_2$ (or along the axis with larger difference):
    *   **If $P < 0$:**
        *   $x = x + 1$
        *   $P = P + 2 \Delta y$
    *   **If $P \ge 0$:**
        *   $x = x + 1$
        *   $y = y + \text{sign}(\Delta y)$ (Increment $y$ if $\Delta y > 0$, decrement if $\Delta y < 0$)
        *   $P = P + 2 \Delta y - 2 \Delta x \times \text{sign}(\Delta y)$ (Adjust error term based on $y$ movement)
    *   Plot $(x, y)$.

**Example:** Draw a line from (2, 3) to (7, 5).

*   $(x_1, y_1) = (2, 3)$, $(x_2, y_2) = (7, 5)$
*   $\Delta x = 7 - 2 = 5$
*   $\Delta y = 5 - 3 = 2$
*   Since $\Delta x > \Delta y$ and both are positive, we iterate along $x$.
*   $x_1=2, y_1=3$. Plot (2, 3).
*   Initial $P = 2 \Delta y - \Delta x = 2(2) - 5 = 4 - 5 = -1$.

| x   | P     | Decision          | Plot       | New P          |
| :-- | :---- | :---------------- | :--------- | :------------- |
| 3   | -1    | $P < 0$, $y$ stays | (3, 3)     | $-1 + 2(2) = 3$ |
| 4   | 3     | $P \ge 0$, $y$ inc | (4, 4)     | $3 + 2(2) - 2(5) = 3 + 4 - 10 = -3$ |
| 5   | -3    | $P < 0$, $y$ stays | (5, 4)     | $-3 + 2(2) = 1$ |
| 6   | 1     | $P \ge 0$, $y$ inc | (6, 5)     | $1 + 2(2) - 2(5) = 1 + 4 - 10 = -5$ |
| 7   | -5    | $P < 0$, $y$ stays | (7, 5)     | $-5 + 2(2) = -1$ |

**Output Pixels:** (2, 3), (3, 3), (4, 4), (5, 4), (6, 5), (7, 5).

**Important Points to Remember about Bresenham's:**

*   **Integer arithmetic:** Highly efficient.
*   **Handles all octants:** With appropriate modifications or by utilizing symmetry.
*   **No floating-point calculations:** Crucial for speed.
*   **Error term:** Predicts which pixel is closer to the ideal line.

---

### 3. Liang-Barsky Line Clipping Algorithm

**Overview:**

Line clipping is the process of removing portions of a line that lie outside a specified clipping window. The Liang-Barsky algorithm is an efficient algorithm for clipping lines against rectangular windows. It's an improvement over the Cohen-Sutherland algorithm because it requires fewer line segment intersection calculations.

**Key Concepts:**

*   **Clipping Window:** A rectangular region on the screen against which lines are clipped. It is defined by its minimum and maximum x and y coordinates (xmin, ymin) and (xmax, ymax).
*   **Clipping:** The process of determining which parts of a line (or other geometric primitive) are inside the clipping window and discarding the parts that are outside.
*   **Parametric Form of a Line:** A line segment from $(x_1, y_1)$ to $(x_2, y_2)$ can be represented parametrically as:
    *   $x(t) = x_1 + t(x_2 - x_1)$
    *   $y(t) = y_1 + t(y_2 - y_1)$
    where $0 \le t \le 1$.

**Algorithm Steps:**

The Liang-Barsky algorithm considers the line in its parametric form and determines the range of parameter $t$ for which the line segment lies inside the clipping window.

Let the clipping window be defined by $x_{min}, x_{min}, y_{min}, y_{max}$.
The line segment is defined by $(x_1, y_1)$ and $(x_2, y_2)$.
Let $\Delta x = x_2 - x_1$ and $\Delta y = y_2 - y_1$.

The parametric equations are:
$x = x_1 + t \Delta x$
$y = y_1 + t \Delta y$

The conditions for a point $(x, y)$ to be inside the window are:
$x_{min} \le x \le x_{max}$
$y_{min} \le y \le y_{max}$

Substituting the parametric equations:
$x_{min} \le x_1 + t \Delta x \le x_{max}$
$y_{min} \le y_1 + t \Delta y \le y_{max}$

These inequalities can be rewritten in the form $t \cdot p_k \le q_k$ for $k=1, 2, 3, 4$:

1.  $t \Delta x \ge x_{min} - x_1 \implies t(-\Delta x) \le x_1 - x_{min}$  ($p_1 = -\Delta x$, $q_1 = x_1 - x_{min}$)
2.  $t \Delta x \le x_{max} - x_1 \implies t(\Delta x) \le x_{max} - x_1$  ($p_2 = \Delta x$, $q_2 = x_{max} - x_1$)
3.  $t \Delta y \ge y_{min} - y_1 \implies t(-\Delta y) \le y_1 - y_{min}$  ($p_3 = -\Delta y$, $q_3 = y_1 - y_{min}$)
4.  $t \Delta y \le y_{max} - y_1 \implies t(\Delta y) \le y_{max} - y_1$  ($p_4 = \Delta y$, $q_4 = y_{max} - y_1$)

**Algorithm:**

Initialize $t_{enter} = 0$ and $t_{exit} = 1$.

For $k = 1$ to 4:
    Calculate $p_k$ and $q_k$.

    *   **If $p_k = 0$ (line is parallel to the clipping boundary):**
        *   If $q_k < 0$, the line is entirely outside the window. The line should be rejected.
        *   If $q_k \ge 0$, the line is parallel to the boundary and inside or on the boundary. Continue to the next boundary.

    *   **If $p_k \ne 0$:**
        *   Calculate $r = q_k / p_k$.
        *   **If $p_k < 0$ (entering the window):**
            *   If $r > t_{enter}$, update $t_{enter} = r$.
        *   **If $p_k > 0$ (exiting the window):**
            *   If $r < t_{exit}$, update $t_{exit} = r$.

**After checking all four boundaries:**

*   If $t_{enter} > t_{exit}$, the line is entirely outside the window. Reject the line.
*   Otherwise, the line segment inside the window is from $t_{enter}$ to $t_{exit}$.
    *   Calculate the new endpoints:
        *   $x_{clip\_start} = x_1 + t_{enter} \Delta x$
        *   $y_{clip\_start} = y_1 + t_{enter} \Delta y$
        *   $x_{clip\_end} = x_1 + t_{exit} \Delta x$
        *   $y_{clip\_end} = y_1 + t_{exit} \Delta y$
    *   Draw the line from $(x_{clip\_start}, y_{clip\_start})$ to $(x_{clip\_end}, y_{clip\_end})$.

**Example:** Clip a line from (2, 2) to (8, 8) against a window with $x_{min}=3, x_{max}=7, y_{min}=3, y_{max}=7$.

*   $(x_1, y_1) = (2, 2)$, $(x_2, y_2) = (8, 8)$
*   $\Delta x = 8 - 2 = 6$
*   $\Delta y = 8 - 2 = 6$
*   $x_{min}=3, x_{max}=7, y_{min}=3, y_{max}=7$.
*   Initialize $t_{enter} = 0$, $t_{exit} = 1$.

**Boundary 1 (Left):** $x \ge x_{min} \implies x_1 + t \Delta x \ge x_{min}$
$2 + t(6) \ge 3 \implies 6t \ge 1 \implies t \ge 1/6$
$p_1 = -\Delta x = -6$, $q_1 = x_1 - x_{min} = 2 - 3 = -1$.
$r = q_1 / p_1 = -1 / -6 = 1/6$.
$p_1 < 0$, so this is an entering boundary.
$t_{enter} = \max(0, 1/6) = 1/6$.

**Boundary 2 (Right):** $x \le x_{max} \implies x_1 + t \Delta x \le x_{max}$
$2 + t(6) \le 7 \implies 6t \le 5 \implies t \le 5/6$
$p_2 = \Delta x = 6$, $q_2 = x_{max} - x_1 = 7 - 2 = 5$.
$r = q_2 / p_2 = 5 / 6$.
$p_2 > 0$, so this is an exiting boundary.
$t_{exit} = \min(1, 5/6) = 5/6$.

**Boundary 3 (Bottom):** $y \ge y_{min} \implies y_1 + t \Delta y \ge y_{min}$
$2 + t(6) \ge 3 \implies 6t \ge 1 \implies t \ge 1/6$
$p_3 = -\Delta y = -6$, $q_3 = y_1 - y_{min} = 2 - 3 = -1$.
$r = q_3 / p_3 = -1 / -6 = 1/6$.
$p_3 < 0$, so this is an entering boundary.
$t_{enter} = \max(1/6, 1/6) = 1/6$.

**Boundary 4 (Top):** $y \le y_{max} \implies y_1 + t \Delta y \le y_{max}$
$2 + t(6) \le 7 \implies 6t \le 5 \implies t \le 5/6$
$p_4 = \Delta y = 6$, $q_4 = y_{max} - y_1 = 7 - 2 = 5$.
$r = q_4 / p_4 = 5 / 6$.
$p_4 > 0$, so this is an exiting boundary.
$t_{exit} = \min(5/6, 5/6) = 5/6$.

**Result:**
$t_{enter} = 1/6$, $t_{exit} = 5/6$.
Since $t_{enter} \le t_{exit}$, the line is clipped.

New endpoints:
$x_{clip\_start} = 2 + (1/6) * 6 = 2 + 1 = 3$
$y_{clip\_start} = 2 + (1/6) * 6 = 2 + 1 = 3$
$x_{clip\_end} = 2 + (5/6) * 6 = 2 + 5 = 7$
$y_{clip\_end} = 2 + (5/6) * 6 = 2 + 5 = 7$

The clipped line is from (3, 3) to (7, 7).

**Important Points to Remember about Liang-Barsky:**

*   **Parametric form:** Utilizes the parametric representation of the line.
*   **Efficient for rectangular windows:** Requires fewer calculations than Cohen-Sutherland in many cases.
*   **Handles all cases:** Including horizontal, vertical, and parallel lines.
*   **Reduces number of intersection calculations:** Directly calculates the range of $t$.

---

### Practice Questions

**Bresenham's Algorithm:**

1.  Trace Bresenham's algorithm to draw a line from (1, 1) to (7, 4).
2.  Draw a line from (2, 5) to (6, 2) using Bresenham's algorithm. Consider all octants.

**Liang-Barsky Algorithm:**

3.  Clip a line segment from (1, 2) to (6, 7) against a clipping window with $x_{min}=2, x_{max}=5, y_{min}=3, y_{max}=6$.
4.  Determine if the line segment from (0, 0) to (10, 10) is clipped by the window $x_{min}=2, x_{max}=8, y_{min}=2, y_{max}=8$ using the Liang-Barsky algorithm. If it is clipped, find the new endpoints.

---

### Answers

**Bresenham's Algorithm Answers:**

1.  **Line from (1, 1) to (7, 4):**
    *   $(x_1, y_1) = (1, 1)$, $(x_2, y_2) = (7, 4)$
    *   $\Delta x = 6$, $\Delta y = 3$
    *   $P_{initial} = 2 \Delta y - \Delta x = 2(3) - 6 = 6 - 6 = 0$.
    *   Plot (1, 1).

    | x   | P     | Decision          | Plot       | New P          |
    | :-- | :---- | :---------------- | :--------- | :------------- |
    | 2   | 0     | $P \ge 0$, $y$ inc | (2, 2)     | $0 + 2(3) - 2(6) = 0 + 6 - 12 = -6$ |
    | 3   | -6    | $P < 0$, $y$ stays | (3, 2)     | $-6 + 2(3) = 0$ |
    | 4   | 0     | $P \ge 0$, $y$ inc | (4, 3)     | $0 + 2(3) - 2(6) = -6$ |
    | 5   | -6    | $P < 0$, $y$ stays | (5, 3)     | $-6 + 2(3) = 0$ |
    | 6   | 0     | $P \ge 0$, $y$ inc | (6, 4)     | $0 + 2(3) - 2(6) = -6$ |
    | 7   | -6    | $P < 0$, $y$ stays | (7, 4)     | $-6 + 2(3) = 0$ |

    **Output Pixels:** (1, 1), (2, 2), (3, 2), (4, 3), (5, 3), (6, 4), (7, 4).

2.  **Line from (2, 5) to (6, 2):**
    *   $(x_1, y_1) = (2, 5)$, $(x_2, y_2) = (6, 2)$
    *   $\Delta x = 4$, $\Delta y = -3$
    *   Since $|\Delta y| < |\Delta x|$, we iterate along $x$.
    *   $\Delta y$ is negative, so we'll decrement $y$.
    *   Plot (2, 5).
    *   $P_{initial} = 2 \Delta y - \Delta x = 2(-3) - 4 = -6 - 4 = -10$.

    | x   | P     | Decision          | Plot       | New P          |
    | :-- | :---- | :---------------- | :--------- | :------------- |
    | 3   | -10   | $P < 0$, $y$ stays | (3, 5)     | $-10 + 2(-3) = -16$ |
    | 4   | -16   | $P < 0$, $y$ stays | (4, 5)     | $-16 + 2(-3) = -22$ |
    | 5   | -22   | $P < 0$, $y$ stays | (5, 5)     | $-22 + 2(-3) = -28$ |
    | 6   | -28   | $P < 0$, $y$ stays | (6, 5)     | $-28 + 2(-3) = -34$ |

    *Wait, this doesn't look right. The line should go down. Let's re-evaluate the decision for negative slopes. The original simplified algorithm is for $0 \le \Delta y \le \Delta x$. For other octants, we need to adjust. A common way is to use absolute values and adjust the $y$ increment.*

    **Revised approach for negative slope:**
    We can think of it as iterating along $x$ from $x_1$ to $x_2$ and deciding whether to increment or decrement $y$. The general decision parameter can be framed as:
    $P = 2 \Delta y - \Delta x$.
    If $P < 0$, increment $x$ only.
    If $P \ge 0$, increment $x$ and adjust $y$ based on the sign of $\Delta y$.

    Let's retrace with a proper general approach. For a line from $(x_1, y_1)$ to $(x_2, y_2)$:
    $\Delta x = x_2 - x_1$
    $\Delta y = y_2 - y_1$

    If $|\Delta y| > |\Delta x|$, we swap roles of $x$ and $y$. In this case, $|\Delta y|=3 < |\Delta x|=4$, so we iterate along $x$.

    The error term should guide the $y$ movement. The ideal $y$ at step $x$ is $y_{ideal} = y_1 + (\Delta y/\Delta x) \cdot (x - x_1)$.
    At each step $x_{x+1}$, the two candidate $y$ values are $y$ and $y - 1$ (since $\Delta y$ is negative).
    The decision parameter is typically $P = 2 \Delta y - \Delta x$.

    *   $(x_1, y_1) = (2, 5)$, $(x_2, y_2) = (6, 2)$
    *   $\Delta x = 4$, $\Delta y = -3$
    *   $P_{initial} = 2 \Delta y - \Delta x = 2(-3) - 4 = -10$.
    *   Plot (2, 5).

    | x   | P     | Decision (for $\Delta y < 0$) | Plot       | New P ($P + 2 \Delta y$ or $P + 2 \Delta y - 2 \Delta x$) |
    | :-- | :---- | :--------------------------- | :--------- | :------------------------------------------------------ |
    | 3   | -10   | $P < 0$, $y$ stays 5          | (3, 5)     | $-10 + 2(-3) = -16$                                     |
    | 4   | -16   | $P < 0$, $y$ stays 5          | (4, 5)     | $-16 + 2(-3) = -22$                                     |
    | 5   | -22   | $P < 0$, $y$ stays 5          | (5, 5)     | $-22 + 2(-3) = -28$                                     |
    | 6   | -28   | $P < 0$, $y$ stays 5          | (6, 5)     | $-28 + 2(-3) = -34$                                     |

    *This is still wrong. The core issue is how the error term is derived and applied for negative slopes.*

    **Correct Bresenham's for all octants (simplified):**
    Let $dx = x_2 - x_1$, $dy = y_2 - y_1$.
    Let $sx = \text{sign}(dx)$, $sy = \text{sign}(dy)$.
    Let $|dx| = \text{abs}(dx)$, $|dy| = \text{abs}(dy)$.
    Let $x = x_1$, $y = y_1$.

    If $|dy| > |dx|$: Swap $x$ and $y$ for iteration, and swap $dx, dy$.
    *Now we have the condition where the loop iterates along the axis with the larger delta, and we decide on the step for the other axis.*

    In our case: $(x_1, y_1) = (2, 5)$, $(x_2, y_2) = (6, 2)$.
    $dx = 4$, $dy = -3$.
    $sx = 1$, $sy = -1$.
    $|dx| = 4$, $|dy| = 3$.
    Since $|dy| \le |dx|$, we iterate along $x$.
    $x=2, y=5$. Plot (2, 5).
    Decision parameter: $P = 2|dy| - |dx| = 2(3) - 4 = 6 - 4 = 2$.

    For $x$ from $x_1 + sx$ to $x_2$ (step by $sx$):
    *   If $P < 0$:
        *   $P = P + 2|dy|$
    *   If $P \ge 0$:
        *   $y = y + sy$
        *   $P = P + 2|dy| - 2|dx|$
    *   Plot $(x, y)$.

    Let's retrace with this:
    $(x_1, y_1) = (2, 5)$, $(x_2, y_2) = (6, 2)$.
    $dx=4, dy=-3, sx=1, sy=-1, |dx|=4, |dy|=3$. Iterate along $x$.
    $x=2, y=5$. Plot (2, 5). $P = 2(3) - 4 = 2$.

    | x   | P     | Decision ($P \ge 0$) | New $y$ | Plot       | New P ($P + 2|dy| - 2|dx|$) |
    | :-- | :---- | :------------------- | :------ | :--------- | :------------------------ |
    | 3   | 2     | $P \ge 0$, $y = 5 + (-1) = 4$ | 4       | (3, 4)     | $2 + 2(3) - 2(4) = 2 + 6 - 8 = 0$ |
    | 4   | 0     | $P \ge 0$, $y = 4 + (-1) = 3$ | 3       | (4, 3)     | $0 + 2(3) - 2(4) = -2$  |
    | 5   | -2    | $P < 0$, $y$ stays 3  | 3       | (5, 3)     | $-2 + 2(3) = 4$           |
    | 6   | 4     | $P \ge 0$, $y = 3 + (-1) = 2$ | 2       | (6, 2)     | $4 + 2(3) - 2(4) = 2$   |

    **Output Pixels:** (2, 5), (3, 4), (4, 3), (5, 3), (6, 2).

**Liang-Barsky Algorithm Answers:**

3.  **Line from (1, 2) to (6, 7) against window [2, 5] x [3, 6]:**
    *   $(x_1, y_1) = (1, 2)$, $(x_2, y_2) = (6, 7)$
    *   $\Delta x = 5$, $\Delta y = 5$
    *   $x_{min}=2, x_{max}=5, y_{min}=3, y_{max}=6$.
    *   $t_{enter} = 0, t_{exit} = 1$.

    *   **Boundary 1 (Left):** $x \ge x_{min} \implies 1 + t(5) \ge 2 \implies 5t \ge 1 \implies t \ge 1/5$.
        $p_1 = -\Delta x = -5$, $q_1 = x_1 - x_{min} = 1 - 2 = -1$. $r = -1/-5 = 1/5$.
        $p_1 < 0$, $t_{enter} = \max(0, 1/5) = 1/5$.

    *   **Boundary 2 (Right):** $x \le x_{max} \implies 1 + t(5) \le 5 \implies 5t \le 4 \implies t \le 4/5$.
        $p_2 = \Delta x = 5$, $q_2 = x_{max} - x_1 = 5 - 1 = 4$. $r = 4/5$.
        $p_2 > 0$, $t_{exit} = \min(1, 4/5) = 4/5$.

    *   **Boundary 3 (Bottom):** $y \ge y_{min} \implies 2 + t(5) \ge 3 \implies 5t \ge 1 \implies t \ge 1/5$.
        $p_3 = -\Delta y = -5$, $q_3 = y_1 - y_{min} = 2 - 3 = -1$. $r = -1/-5 = 1/5$.
        $p_3 < 0$, $t_{enter} = \max(1/5, 1/5) = 1/5$.

    *   **Boundary 4 (Top):** $y \le y_{max} \implies 2 + t(5) \le 6 \implies 5t \le 4 \implies t \le 4/5$.
        $p_4 = \Delta y = 5$, $q_4 = y_{max} - y_1 = 6 - 2 = 4$. $r = 4/5$.
        $p_4 > 0$, $t_{exit} = \min(4/5, 4/5) = 4/5$.

    *   **Result:** $t_{enter} = 1/5$, $t_{exit} = 4/5$. Since $t_{enter} \le t_{exit}$, the line is clipped.
        *   $x_{clip\_start} = 1 + (1/5) * 5 = 1 + 1 = 2$
        *   $y_{clip\_start} = 2 + (1/5) * 5 = 2 + 1 = 3$
        *   $x_{clip\_end} = 1 + (4/5) * 5 = 1 + 4 = 5$
        *   $y_{clip\_end} = 2 + (4/5) * 5 = 2 + 4 = 6$
        The clipped line is from (2, 3) to (5, 6).

4.  **Line from (0, 0) to (10, 10) against window [2, 8] x [2, 8]:**
    *   $(x_1, y_1) = (0, 0)$, $(x_2, y_2) = (10, 10)$
    *   $\Delta x = 10$, $\Delta y = 10$
    *   $x_{min}=2, x_{max}=8, y_{min}=2, y_{max}=8$.
    *   $t_{enter} = 0, t_{exit} = 1$.

    *   **Boundary 1 (Left):** $x \ge x_{min} \implies 0 + t(10) \ge 2 \implies 10t \ge 2 \implies t \ge 2/10 = 1/5$.
        $p_1 = -\Delta x = -10$, $q_1 = x_1 - x_{min} = 0 - 2 = -2$. $r = -2/-10 = 1/5$.
        $p_1 < 0$, $t_{enter} = \max(0, 1/5) = 1/5$.

    *   **Boundary 2 (Right):** $x \le x_{max} \implies 0 + t(10) \le 8 \implies 10t \le 8 \implies t \le 8/10 = 4/5$.
        $p_2 = \Delta x = 10$, $q_2 = x_{max} - x_1 = 8 - 0 = 8$. $r = 8/10 = 4/5$.
        $p_2 > 0$, $t_{exit} = \min(1, 4/5) = 4/5$.

    *   **Boundary 3 (Bottom):** $y \ge y_{min} \implies 0 + t(10) \ge 2 \implies 10t \ge 2 \implies t \ge 1/5$.
        $p_3 = -\Delta y = -10$, $q_3 = y_1 - y_{min} = 0 - 2 = -2$. $r = -2/-10 = 1/5$.
        $p_3 < 0$, $t_{enter} = \max(1/5, 1/5) = 1/5$.

    *   **Boundary 4 (Top):** $y \le y_{max} \implies 0 + t(10) \le 8 \implies 10t \le 8 \implies t \le 4/5$.
        $p_4 = \Delta y = 10$, $q_4 = y_{max} - y_1 = 8 - 0 = 8$. $r = 8/10 = 4/5$.
        $p_4 > 0$, $t_{exit} = \min(4/5, 4/5) = 4/5$.

    *   **Result:** $t_{enter} = 1/5$, $t_{exit} = 4/5$. Since $t_{enter} \le t_{exit}$, the line is clipped.
        *   $x_{clip\_start} = 0 + (1/5) * 10 = 2$
        *   $y_{clip\_start} = 0 + (1/5) * 10 = 2$
        *   $x_{clip\_end} = 0 + (4/5) * 10 = 8$
        *   $y_{clip\_end} = 0 + (4/5) * 10 = 8$
        The clipped line is from (2, 2) to (8, 8).
