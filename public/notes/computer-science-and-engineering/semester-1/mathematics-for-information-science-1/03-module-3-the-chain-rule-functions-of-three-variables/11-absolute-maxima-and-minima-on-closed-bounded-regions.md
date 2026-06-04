---
title: "Absolute Maxima and Minima on Closed Bounded Regions"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 1"
module: "Module 3: The Chain Rule: Functions of three Variables"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5bdd"
status: "completed"
scrapedAt: "2026-05-20T16:40:29.720Z"
---
Absolutely! Let's dive into the fascinating world of finding the absolute maximum and minimum values of functions on closed, bounded regions. This is a cornerstone concept in multivariable calculus, and understanding it will be crucial for many applications in Information Science.

---

## Module 3: The Chain Rule: Functions of Three Variables

### Topic: Absolute Maxima and Minima on Closed, Bounded Regions

**(Connecting to Course Outcomes: CO3, CO4)**

Welcome, everyone! Today, we're going to tackle a really important problem: how do we find the absolute highest and lowest points of a function, not just anywhere, but specifically within a defined, confined area? Think of it like trying to find the peak of a mountain range and its deepest valley, but you're only allowed to explore within a specific national park that has clear boundaries. This is exactly what "absolute maxima and minima on closed, bounded regions" is all about.

This topic directly ties into **Course Outcome 3 (CO3)**, which is about solving maxima and minima of multivariable functions. We’re building on our understanding of partial derivatives and will soon see how this knowledge helps us pinpoint these extreme values. It also lays the groundwork for **Course Outcome 4 (CO4)**, which deals with constrained optimization.

### 1. The Big Picture: Why This Matters

Imagine you're designing a new data storage system. You have a function that represents the cost of storing data, and this cost depends on two main factors: the number of processors used and the amount of memory allocated. You can't just use an infinite number of processors or memory – there are practical limitations. These limitations define your "closed, bounded region." Your goal is to find the combination of processors and memory that minimizes the cost (absolute minimum) or perhaps maximizes the efficiency (absolute maximum) within these practical constraints. This is where our topic comes in!

In essence, we're looking for the absolute highest or lowest "output" (the value of the function, $f(x, y)$) that occurs *somewhere* within a specific region of the input space (our domain).

### 2. The Extreme Value Theorem: Our Guiding Principle

Before we get our hands dirty with calculations, let's talk about a fundamental theorem that gives us confidence that a solution actually exists. This is the **Extreme Value Theorem** for functions of two variables (and it extends to three, four, or any finite number of variables).

**Theorem (Extreme Value Theorem for Functions of Two Variables):** If a function $f(x, y)$ is **continuous** on a **closed, bounded region** $R$, then $f$ attains an **absolute maximum** value and an **absolute minimum** value on $R$.

Let's break down those key terms:

*   **Continuous:** This is a bit like saying the function's graph doesn't have any sudden jumps, holes, or breaks. For most polynomial or rational functions (where the denominator isn't zero) in practical scenarios, this is often satisfied. Think of a smooth, unbroken landscape.
*   **Closed Region:** This means the region *includes* its boundary. If our region is a circle, it includes the edge of the circle itself. If it's a square, it includes the four sides.
*   **Bounded Region:** This means the region doesn't extend infinitely in any direction. It's confined. Like our national park example, it has defined edges.

**Why is this theorem so important?** It tells us that if our function is well-behaved (continuous) and our region is properly defined (closed and bounded), then an absolute maximum and an absolute minimum *must* exist somewhere within that region. We don't have to worry about the function just getting larger and larger forever without reaching a peak.

### 3. Finding the Extremes: The Strategy

So, how do we actually *find* these absolute maximum and minimum values? The strategy is quite systematic and relies on the fact that extreme values can occur in two places:

1.  **Inside the region:** At **critical points** of the function.
2.  **On the boundary** of the region.

This leads to a four-step process, which is often how exam questions are structured.

---

#### Step 1: Find Critical Points Inside the Region

Remember from earlier discussions about optimization? Critical points are where the "action" might happen – where the function could potentially have a peak or a valley. For a function $f(x, y)$, critical points are points $(x_0, y_0)$ in the *interior* of our region $R$ where either:

*   Both partial derivatives are zero: $f_x(x_0, y_0) = 0$ and $f_y(x_0, y_0) = 0$.
*   Or, at least one of the partial derivatives does not exist at $(x_0, y_0)$.

**How to do it:**
*   Calculate the partial derivatives $f_x(x, y)$ and $f_y(x, y)$.
*   Set both equal to zero and solve the resulting system of equations for $x$ and $y$. These are your candidates for local maxima/minima.
*   Also, check if there are any points where $f_x$ or $f_y$ are undefined.
*   Crucially, you must then check if these critical points actually lie *inside* (not on the boundary) of your given closed, bounded region. If a critical point falls outside the region, you disregard it for the purpose of finding absolute extrema *on that specific region*.

**Think of it this way:** You're looking for flat spots on the landscape *within* the park boundaries. These are the places where a hiker might reach a plateau or the bottom of a small dip.

---

#### Step 2: Find the Extreme Values on the Boundary

This is often the trickiest part. The boundary of our region $R$ is usually a curve or a collection of curves. We need to find the absolute maximum and minimum of $f(x, y)$ *as it is restricted to the boundary curve(s)*.

**How to do it:**
*   **Parameterize the boundary:** Describe the boundary curve(s) using a parameter, say $t$. This means expressing $x$ and $y$ as functions of $t$, i.e., $x = g(t)$ and $y = h(t)$. For example, if the boundary is a circle $x^2 + y^2 = r^2$, we can parameterize it using $x = r \cos t$ and $y = r \sin t$, where $t$ ranges from $0$ to $2\pi$.
*   **Substitute into the function:** Substitute these parameterized expressions for $x$ and $y$ back into the original function $f(x, y)$. This will give you a new function of a single variable, say $F(t) = f(g(t), h(t))$.
*   **Find extrema of $F(t)$:** Now, you have a function of *one* variable, $F(t)$, defined on a specific interval of $t$ that corresponds to traversing the entire boundary exactly once. You can use the techniques from single-variable calculus to find the absolute maximum and minimum values of $F(t)$ on that interval. This involves finding critical points of $F(t)$ (where $F'(t) = 0$ or $F'(t)$ is undefined) and evaluating $F(t)$ at these critical points and at the endpoints of the interval.
*   **Repeat for all boundary pieces:** If the boundary consists of multiple segments (e.g., the sides of a square), you must repeat this process for each segment.

**Think of it this way:** Now you're walking along the *edge* of the national park. As you walk, you're observing the altitude (the function's value). You need to find the highest and lowest points you reach *while walking along the perimeter*.

**Example:** Let's say the boundary is a line segment from $(0,0)$ to $(2,2)$. We can parameterize this segment by $x = t$ and $y = t$, for $0 \le t \le 2$. If our function is $f(x, y) = x^2 + y^2$, then on this boundary segment, $F(t) = f(t, t) = t^2 + t^2 = 2t^2$. For $0 \le t \le 2$, the minimum of $F(t)$ is at $t=0$ (value 0), and the maximum is at $t=2$ (value 8).

---

#### Step 3: List All Candidate Points and Evaluate the Function

Once you've done steps 1 and 2, you'll have a collection of "candidate" points:

*   The critical points found in Step 1 that lie *inside* $R$.
*   All the points on the boundary where $f$ attained its maximum or minimum values when restricted to the boundary (found in Step 2).

Now, the final act is simple:

*   Evaluate the original function $f(x, y)$ at each of these candidate points.

**Think of it this way:** You've identified all the potential highest and lowest points: the flat spots inside the park and the highest/lowest points you reached along the perimeter. Now, you just measure the altitude at each of these specific spots.

---

#### Step 4: Identify the Absolute Maxima and Minima

Compare the values of $f(x, y)$ you calculated in Step 3.

*   The **largest** value among these is the **absolute maximum** value of $f$ on $R$. The point(s) where this value occurs are the locations of the absolute maximum.
*   The **smallest** value among these is the **absolute minimum** value of $f$ on $R$. The point(s) where this value occurs are the locations of the absolute minimum.

**Remember this:** The Extreme Value Theorem guarantees that the absolute max and min will be among the values you found. You don't need to look anywhere else.

---

### 4. Putting It All Together: A Worked Example

Let's try an example to solidify these steps. We want to find the absolute maximum and minimum values of the function $f(x, y) = x^2 + y^2 - 2x - 4y + 10$ on the closed, bounded region $R$ which is the triangle with vertices $(0,0)$, $(3,0)$, and $(0,3)$.

This region is a triangle, which is indeed closed (includes the sides and vertices) and bounded (it's finite). The function $f(x, y)$ is a polynomial, so it's continuous everywhere, satisfying the conditions of the Extreme Value Theorem.

#### Step 1: Find Critical Points Inside $R$

*   Calculate partial derivatives:
    $f_x(x, y) = 2x - 2$
    $f_y(x, y) = 2y - 4$

*   Set them to zero:
    $2x - 2 = 0 \implies x = 1$
    $2y - 4 = 0 \implies y = 2$

*   So, the only critical point is $(1, 2)$.

*   Check if $(1, 2)$ is inside $R$:
    The region $R$ is defined by $x \ge 0$, $y \ge 0$, and $x + y \le 3$.
    For $(1, 2)$: $1 \ge 0$ (true), $2 \ge 0$ (true), and $1 + 2 = 3 \le 3$ (true).
    So, the critical point $(1, 2)$ lies *on the boundary* of $R$. It's not strictly *inside* the interior of $R$. However, for finding absolute extrema, points on the boundary are also candidates. When we analyze the boundary in Step 2, we will naturally include this point if it falls on a boundary segment. For now, we don't have any critical points strictly *inside* the region. This means our absolute extrema must occur on the boundary.

*(Self-correction/Refinement):* While $(1,2)$ is on the boundary $x+y=3$, our analysis of the boundary (Step 2) will naturally pick it up. If it had been, say, $(1,1)$, which satisfies $1 \ge 0, 1 \ge 0,$ and $1+1 = 2 \le 3$, then it would be strictly inside and we would definitely include $f(1,1)$ in our list of candidates from Step 3. Since $(1,2)$ is on the boundary, we will consider it during the boundary analysis. If there were *no* critical points on the boundary and $(1,2)$ was strictly interior, *then* we'd evaluate $f(1,2)$ here.

#### Step 2: Find Extreme Values on the Boundary

The boundary of the triangle consists of three line segments:

*   **Segment 1: The x-axis from (0,0) to (3,0)**
    *   Parameterization: $y = 0$, $0 \le x \le 3$. Let $x=t$. So, $x=t$, $y=0$ for $0 \le t \le 3$.
    *   Substitute into $f$: $f(t, 0) = t^2 + 0^2 - 2t - 4(0) + 10 = t^2 - 2t + 10$. Let this be $g(t)$.
    *   Find extrema of $g(t)$ for $0 \le t \le 3$:
        *   $g'(t) = 2t - 2$. Set $g'(t) = 0 \implies 2t - 2 = 0 \implies t = 1$. This is in our interval $[0,3]$.
        *   Critical point: $t=1$.
        *   Evaluate $g(t)$ at critical points and endpoints:
            *   $g(0) = 0^2 - 2(0) + 10 = 10$. Corresponds to point $(0,0)$.
            *   $g(1) = 1^2 - 2(1) + 10 = 1 - 2 + 10 = 9$. Corresponds to point $(1,0)$.
            *   $g(3) = 3^2 - 2(3) + 10 = 9 - 6 + 10 = 13$. Corresponds to point $(3,0)$.

*   **Segment 2: The y-axis from (0,0) to (0,3)**
    *   Parameterization: $x = 0$, $0 \le y \le 3$. Let $y=t$. So, $x=0$, $y=t$ for $0 \le t \le 3$.
    *   Substitute into $f$: $f(0, t) = 0^2 + t^2 - 2(0) - 4t + 10 = t^2 - 4t + 10$. Let this be $h(t)$.
    *   Find extrema of $h(t)$ for $0 \le t \le 3$:
        *   $h'(t) = 2t - 4$. Set $h'(t) = 0 \implies 2t - 4 = 0 \implies t = 2$. This is in our interval $[0,3]$.
        *   Critical point: $t=2$.
        *   Evaluate $h(t)$ at critical points and endpoints:
            *   $h(0) = 0^2 - 4(0) + 10 = 10$. Corresponds to point $(0,0)$. (Already found)
            *   $h(2) = 2^2 - 4(2) + 10 = 4 - 8 + 10 = 6$. Corresponds to point $(0,2)$.
            *   $h(3) = 3^2 - 4(3) + 10 = 9 - 12 + 10 = 7$. Corresponds to point $(0,3)$.

*   **Segment 3: The line segment from (3,0) to (0,3)**
    *   The equation of this line is $x + y = 3$, or $y = 3 - x$. The x-values range from 0 to 3.
    *   Parameterization: Let $x=t$, then $y = 3-t$, for $0 \le t \le 3$.
    *   Substitute into $f$: $f(t, 3-t) = t^2 + (3-t)^2 - 2t - 4(3-t) + 10$
        $= t^2 + (9 - 6t + t^2) - 2t - (12 - 4t) + 10$
        $= t^2 + 9 - 6t + t^2 - 2t - 12 + 4t + 10$
        $= 2t^2 - 4t + 7$. Let this be $k(t)$.
    *   Find extrema of $k(t)$ for $0 \le t \le 3$:
        *   $k'(t) = 4t - 4$. Set $k'(t) = 0 \implies 4t - 4 = 0 \implies t = 1$. This is in our interval $[0,3]$.
        *   Critical point: $t=1$.
        *   Evaluate $k(t)$ at critical points and endpoints:
            *   $k(0) = 2(0)^2 - 4(0) + 7 = 7$. Corresponds to point $(0,3)$. (Already found)
            *   $k(1) = 2(1)^2 - 4(1) + 7 = 2 - 4 + 7 = 5$. Corresponds to point $(1, 3-1) = (1,2)$. Ah, this is our critical point from Step 1!
            *   $k(3) = 2(3)^2 - 4(3) + 7 = 2(9) - 12 + 7 = 18 - 12 + 7 = 13$. Corresponds to point $(3,0)$. (Already found)

#### Step 3: List All Candidate Points and Evaluate the Function

Let's collect all the points we found where the function might have extrema:

From Step 1 (interior critical points): None.
From Step 2 (boundary analysis):
*   Vertices of the triangle: $(0,0)$, $(3,0)$, $(0,3)$.
*   Critical points on boundary segments: $(1,0)$, $(0,2)$, $(1,2)$.

Now, let's evaluate $f(x, y)$ at each of these unique points:

*   $f(0,0) = 0^2 + 0^2 - 2(0) - 4(0) + 10 = 10$
*   $f(3,0) = 3^2 + 0^2 - 2(3) - 4(0) + 10 = 9 - 6 + 10 = 13$
*   $f(0,3) = 0^2 + 3^2 - 2(0) - 4(3) + 10 = 9 - 12 + 10 = 7$
*   $f(1,0) = 1^2 + 0^2 - 2(1) - 4(0) + 10 = 1 - 2 + 10 = 9$
*   $f(0,2) = 0^2 + 2^2 - 2(0) - 4(2) + 10 = 4 - 8 + 10 = 6$
*   $f(1,2) = 1^2 + 2^2 - 2(1) - 4(2) + 10 = 1 + 4 - 2 - 8 + 10 = 5$

*(Observation: Notice how we systematically found the values. The values from the endpoints of segments are already included when considering the vertices. We just need to be careful not to duplicate points.)*

#### Step 4: Identify the Absolute Maxima and Minima

Compare the function values: $\{10, 13, 7, 9, 6, 5\}$.

*   The largest value is 13. This occurs at the point $(3,0)$.
    So, the **absolute maximum value** of $f(x, y)$ on the region $R$ is 13, occurring at $(3,0)$.

*   The smallest value is 5. This occurs at the point $(1,2)$.
    So, the **absolute minimum value** of $f(x, y)$ on the region $R$ is 5, occurring at $(1,2)$.

**Key Takeaway from this example:** The absolute extrema can occur at the vertices of the region, at critical points found in the interior, or at critical points found on the boundary curves. Our method systematically checks all these possibilities.

---

### 5. Functions of Three Variables

The process extends directly to functions of three variables, $f(x, y, z)$, over closed, bounded regions in 3D space.

*   **Region $R$**: A 3D object that is closed (includes its surface) and bounded (finite extent). Think of a solid ball, a cube, or a region enclosed by specific surfaces.
*   **Critical Points**: Points $(x_0, y_0, z_0)$ in the interior of $R$ where $\nabla f = \mathbf{0}$ (i.e., $f_x=f_y=f_z=0$) or where at least one partial derivative doesn't exist.
*   **Boundary**: The surface(s) enclosing the region $R$. This is where it gets more complex, as the boundary itself can be described parametrically using two parameters or by finding extrema of $f$ subject to the constraint defined by the boundary surface (which is a topic we'll delve deeper into with Lagrange multipliers, related to CO4).

**The general strategy remains the same:**

1.  Find critical points of $f(x, y, z)$ that lie in the *interior* of $R$.
2.  Find the absolute maximum and minimum values of $f$ on the *boundary* of $R$. This often involves parameterizing the boundary surfaces and finding extrema of the resulting functions of two variables, or using techniques for constrained optimization.
3.  Evaluate $f$ at all candidate points found in steps 1 and 2.
4.  Identify the largest and smallest of these values as the absolute maximum and minimum.

The complexity lies in the description and analysis of the 3D boundary. For instance, if $R$ is the solid ball $x^2 + y^2 + z^2 \le r^2$, the boundary is the sphere $x^2 + y^2 + z^2 = r^2$. Analyzing $f$ on this sphere can be done using spherical coordinates or Lagrange multipliers.

**Connection to Information Science:** Consider optimizing resource allocation in a distributed system. The "region" might be the feasible set of allocations for CPU, memory, and network bandwidth, and the function $f$ could represent system performance or cost. Finding the absolute best allocation within these constraints is a direct application of this topic.

---

### 6. Common Pitfalls and Exam Tips

*   **Forgetting to check if critical points are *inside* the region:** This is a classic mistake. A critical point outside your region is irrelevant for finding extrema *on that region*.
*   **Underestimating the boundary analysis:** The boundary is often where the true extrema lie. Make sure you parameterize correctly and find the extrema of the resulting single-variable function over the correct interval.
*   **Missing parts of the boundary:** If your region has multiple boundary curves or surfaces, you must analyze each one.
*   **Confusing local and absolute extrema:** Critical points inside a region can be local maxima, local minima, or saddle points. The absolute extrema are the highest/lowest values across the *entire* region.
*   **Algebraic errors:** These calculations can get messy. Double-check your differentiation and substitution.

**Exam Strategy:**
*   Clearly state the region $R$ and the function $f(x, y)$.
*   Show your work for finding partial derivatives.
*   Explicitly check if interior critical points are within $R$.
*   For boundary analysis, clearly define your parameterization for each segment and the corresponding interval.
*   List all candidate points and the function value at each.
*   Conclude by clearly stating the absolute maximum value, minimum value, and the points where they occur.

---

### 7. Sample Questions with Answers

**Question 1 (Conceptual):**
Why is it important for the region $R$ to be **closed** and **bounded** for the Extreme Value Theorem to guarantee the existence of absolute maxima and minima?

**Answer:**
*   **Boundedness:** If the region is not bounded, the function might increase or decrease indefinitely without reaching a maximum or minimum. For example, if $f(x, y) = x^2 + y^2$ on an unbounded region like the entire plane, there is no maximum value.
*   **Closedness:** If the region is not closed, it might not include its boundary points. The absolute maximum or minimum could occur on the boundary, and if that boundary point is excluded, the function might approach a certain value but never reach it. For example, if we considered the open disk $x^2 + y^2 < 1$, the function $f(x, y) = x^2 + y^2$ approaches 1 as $(x,y)$ approaches the boundary circle, but it never *reaches* 1 within the open disk. The minimum value is 0 at $(0,0)$, but if the region excluded $(0,0)$, there would be no minimum.

**Question 2 (Application):**
Find the absolute maximum and minimum values of the function $f(x, y) = 3xy - x^2 - y^2 + 1$ on the closed triangular region $R$ with vertices $(0,0)$, $(0,1)$, and $(1,0)$.

**Answer:**
The region $R$ is defined by $x \ge 0$, $y \ge 0$, and $x+y \le 1$.

**Step 1: Interior Critical Points**
*   $f_x = 3y - 2x$
*   $f_y = 3x - 2y$
*   Set $f_x = 0 \implies 3y = 2x$
*   Set $f_y = 0 \implies 3x = 2y$
*   From $3y=2x$, we get $y = \frac{2}{3}x$. Substitute into the second equation: $3x = 2(\frac{2}{3}x) = \frac{4}{3}x$.
*   $3x - \frac{4}{3}x = 0 \implies \frac{5}{3}x = 0 \implies x = 0$.
*   If $x=0$, then $y = \frac{2}{3}(0) = 0$.
*   The only critical point is $(0,0)$. This point is a vertex of the triangle, so it lies on the boundary, not strictly in the interior. Thus, there are no critical points in the interior of $R$. All extrema must occur on the boundary.

**Step 2: Boundary Analysis**

*   **Segment 1: (0,0) to (1,0)** (on the x-axis)
    *   Parameterize: $x=t, y=0$, for $0 \le t \le 1$.
    *   $f(t,0) = 3t(0) - t^2 - 0^2 + 1 = -t^2 + 1$. Let this be $g(t)$.
    *   $g'(t) = -2t$. Setting $g'(t)=0$ gives $t=0$.
    *   Evaluate at critical point ($t=0$) and endpoint ($t=1$):
        *   $g(0) = -0^2 + 1 = 1$. Corresponds to point $(0,0)$.
        *   $g(1) = -1^2 + 1 = 0$. Corresponds to point $(1,0)$.

*   **Segment 2: (0,0) to (0,1)** (on the y-axis)
    *   Parameterize: $x=0, y=t$, for $0 \le t \le 1$.
    *   $f(0,t) = 3(0)t - 0^2 - t^2 + 1 = -t^2 + 1$. Let this be $h(t)$.
    *   $h'(t) = -2t$. Setting $h'(t)=0$ gives $t=0$.
    *   Evaluate at critical point ($t=0$) and endpoint ($t=1$):
        *   $h(0) = -0^2 + 1 = 1$. Corresponds to point $(0,0)$.
        *   $h(1) = -1^2 + 1 = 0$. Corresponds to point $(0,1)$.

*   **Segment 3: (1,0) to (0,1)** (line $x+y=1$, or $y=1-x$)
    *   Parameterize: $x=t, y=1-t$, for $0 \le t \le 1$.
    *   $f(t, 1-t) = 3t(1-t) - t^2 - (1-t)^2 + 1$
        $= 3t - 3t^2 - t^2 - (1 - 2t + t^2) + 1$
        $= 3t - 4t^2 - 1 + 2t - t^2 + 1$
        $= -5t^2 + 5t$. Let this be $k(t)$.
    *   $k'(t) = -10t + 5$. Setting $k'(t)=0$ gives $-10t + 5 = 0 \implies t = \frac{1}{2}$. This is in $[0,1]$.
    *   Evaluate at critical point ($t=1/2$) and endpoints ($t=0, t=1$):
        *   $k(0) = -5(0)^2 + 5(0) = 0$. Corresponds to point $(0,1)$.
        *   $k(\frac{1}{2}) = -5(\frac{1}{2})^2 + 5(\frac{1}{2}) = -5(\frac{1}{4}) + \frac{5}{2} = -\frac{5}{4} + \frac{10}{4} = \frac{5}{4}$. Corresponds to point $(\frac{1}{2}, 1-\frac{1}{2}) = (\frac{1}{2}, \frac{1}{2})$.
        *   $k(1) = -5(1)^2 + 5(1) = 0$. Corresponds to point $(1,0)$.

**Step 3: Candidate Points and Values**
The candidate points are the vertices and any critical points found on the boundary segments:
*   $(0,0)$: $f(0,0) = 1$
*   $(1,0)$: $f(1,0) = 0$
*   $(0,1)$: $f(0,1) = 0$
*   $(\frac{1}{2}, \frac{1}{2})$: $f(\frac{1}{2}, \frac{1}{2}) = \frac{5}{4}$

**Step 4: Identify Extrema**
Comparing the values $\{1, 0, 0, \frac{5}{4}\}$:
*   The **absolute maximum value** is $\frac{5}{4}$, occurring at $(\frac{1}{2}, \frac{1}{2})$.
*   The **absolute minimum value** is $0$, occurring at $(1,0)$ and $(0,1)$.

---

This covers the core ideas for finding absolute maxima and minima on closed, bounded regions. It’s a systematic process that combines finding critical points in the interior with a thorough analysis of the function's behavior along the boundary. Keep practicing, and don't hesitate to ask questions!
