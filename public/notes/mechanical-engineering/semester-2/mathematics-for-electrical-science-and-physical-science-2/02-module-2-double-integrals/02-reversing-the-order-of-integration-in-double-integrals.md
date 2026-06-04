---
title: "Reversing the order of integration in double 
integrals"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2"
module: "Module 2: Double integrals"
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1edffeb4799d95e839a3"
status: "completed"
scrapedAt: "2026-05-20T17:45:46.986Z"
---
# Mathematics for Electrical Science and Physical Science – 2

## Module 2: Double Integrals

### Topic: Reversing the Order of Integration in Double Integrals

Welcome, everyone! In this section of our journey through double integrals, we're going to tackle a really powerful technique: **reversing the order of integration**. You might think, "Why would we want to change something that already works?" Well, sometimes, the way a problem is set up makes the integration incredibly difficult, or even impossible, with the original order. By cleverly switching the order, we can often simplify the problem dramatically, making it solvable and yielding that beautiful answer we're looking for. This technique is a cornerstone for applying double integrals, especially when we're calculating areas and volumes, which directly links to **Course Outcome 2 (CO2)**.

#### Why Reverse the Order? The Story of Our Integration Path

Imagine you're trying to calculate the volume of a complex-shaped object. You've set up a double integral to do this, perhaps integrating with respect to $y$ first, then $x$. Let's say your integral looks something like this:

$$ \int_{a}^{b} \left( \int_{g_1(x)}^{g_2(x)} f(x,y) \, dy \right) \, dx $$

Here, for each fixed value of $x$, $y$ varies from a lower curve $y = g_1(x)$ to an upper curve $y = g_2(x)$. After we've integrated with respect to $y$, we then integrate the resulting function of $x$ from $x=a$ to $x=b$. This is like slicing our object into thin vertical strips, calculating the area of each strip, and then summing them up.

Now, what if those curves $y = g_1(x)$ and $y = g_2(x)$ are very complicated? What if integrating $f(x,y)$ with respect to $y$ leads to a function that's extremely hard to integrate further with respect to $x$? This is where reversing the order comes in. We might want to try integrating with respect to $x$ first, then $y$. This would look like:

$$ \int_{c}^{d} \left( \int_{h_1(y)}^{h_2(y)} f(x,y) \, dx \right) \, dy $$

This is equivalent to slicing our object into thin horizontal strips instead of vertical ones. The key is that the **region of integration** remains exactly the same. We're just describing that region and the integration process from a different perspective.

Think of it like navigating a city. You could plan a route by going east to west first, then north to south. But if the east-west roads are jammed, you might reconsider your plan and go north to south first, then east to west. The destination (the total volume or area) is the same; only the path (the order of integration) changes.

This skill of changing perspective is vital. It helps us understand the geometry of our integration region more deeply, a concept touched upon in **CO2** when we aim to "find areas and volumes of geometrical shapes." It also relates to **CO1** as understanding how to manipulate these integrals is crucial for solving engineering problems involving optimization or analysis where the integral setup can be critical.

#### The Crucial Step: Describing the Region of Integration

The entire process hinges on correctly describing the region of integration $R$. When we reverse the order, we're not changing the region; we're just changing how we define its boundaries.

**Initial Setup (Type I Region):**
When we integrate $dy \, dx$, we typically have a **Type I region**. This means $x$ is bounded by constants ($a \le x \le b$), and for each $x$, $y$ is bounded by functions of $x$ ($g_1(x) \le y \le g_2(x)$). We're thinking of vertical strips.

**Reversed Setup (Type II Region):**
To reverse the order to $dx \, dy$, we need to describe the same region $R$ as a **Type II region**. This means $y$ is bounded by constants ($c \le y \le d$), and for each $y$, $x$ is bounded by functions of $y$ ($h_1(y) \le x \le h_2(y)$). We're now thinking of horizontal strips.

The most important skill here is **sketching the region of integration**. Seriously, this is where most students stumble. A good sketch will visually guide you on how to rewrite the limits.

**Key Steps to Reverse the Order:**

1.  **Sketch the Region of Integration:** This is non-negotiable! Plot the boundary curves defined by the limits of the given integral.
2.  **Identify the Limits:** Note the range of $x$ and the range of $y$ as functions of $x$ (or vice versa, depending on the original setup).
3.  **Redefine the Region for the New Order:** Look at your sketch. Imagine sweeping a horizontal line across the region. What are the minimum and maximum $y$ values (these will be your new outer limits, $c$ and $d$)? For a fixed $y$ in this range, what are the leftmost and rightmost $x$ values (these will be your new inner limits, $h_1(y)$ and $h_2(y)$))?
4.  **Rewrite the Integral:** Construct the new integral with the reversed order of integration and the newly determined limits.

Let's look at an example to solidify this.

#### Example 1: A Simple Region

Suppose we have the integral:

$$ \int_{0}^{1} \left( \int_{x^2}^{x} y \, dy \right) \, dx $$

This is a Type I integral. Let's break it down.

*   **Original Limits:**
    *   $x$ ranges from $0$ to $1$.
    *   For a fixed $x$, $y$ ranges from $y = x^2$ (a parabola) to $y = x$ (a line).

*   **Step 1: Sketch the Region:**
    *   Draw the lines $x=0$ and $x=1$.
    *   Draw the parabola $y = x^2$.
    *   Draw the line $y = x$.
    *   The region $R$ is bounded by $y=x^2$ from below and $y=x$ from above, between $x=0$ and $x=1$. Notice these two curves intersect at $(0,0)$ and $(1,1)$.

    *(Imagine sketching this on a whiteboard. You'd see a sliver of area between the line $y=x$ and the parabola $y=x^2$, pinched at the origin and widening slightly before closing at $x=1$.)*

*   **Step 2: Identify Limits:** Already done from the integral statement.

*   **Step 3: Redefine for $dx \, dy$:** Now, we need to think of horizontal strips.
    *   What's the minimum $y$ value in our region? It's $0$ (at the origin).
    *   What's the maximum $y$ value? It's $1$ (at the point (1,1)).
    *   So, $y$ ranges from $0$ to $1$. ($0 \le y \le 1$).
    *   Now, for a fixed $y$ between $0$ and $1$, we need to find the $x$ bounds. We need to express our boundary curves as $x$ in terms of $y$.
        *   The line $y = x$ becomes $x = y$. This is the right boundary for a horizontal strip in our region.
        *   The parabola $y = x^2$ becomes $x = \sqrt{y}$ (since we are in the first quadrant where $x \ge 0$). This is the left boundary for a horizontal strip.
    *   So, for a fixed $y$, $x$ ranges from $\sqrt{y}$ to $y$? Wait, let's recheck the sketch. Ah, for a fixed $y$, the line $x=y$ is *to the left* of the parabola $x=\sqrt{y}$ in the range of interest. Let me correct that. The line $y=x$ is $x=y$. The parabola $y=x^2$ is $x=\sqrt{y}$. Looking at the sketch, for a given $y$, the $x$ values go from the *left boundary curve* to the *right boundary curve*. The line $x=y$ is on the left, and $x=\sqrt{y}$ is on the right. No, that's still not quite right based on the sketch. Let's re-evaluate.

    Okay, let's draw it very carefully.
    *   Region bounded by $y=x$ (line) and $y=x^2$ (parabola).
    *   For $x$ from 0 to 1, $y$ goes from $x^2$ to $x$.
    *   Consider $x=0.5$. $y$ goes from $(0.5)^2 = 0.25$ to $0.5$. The point is $(0.5, 0.25)$ to $(0.5, 0.5)$.
    *   Now, let's fix $y$. Say $y=0.5$.
        *   The line $y=x$ means $x=0.5$.
        *   The parabola $y=x^2$ means $x=\sqrt{y} = \sqrt{0.5} \approx 0.707$.
        *   So, for $y=0.5$, $x$ goes from $0.5$ (on the line) to $\sqrt{0.5}$ (on the parabola).
    *   This means the bounds for $x$ are $y \le x \le \sqrt{y}$.

    My apologies for the confusion, sketching is key! Let's ensure the boundary curves are correctly identified for the horizontal sweep. For a given $y$, $x$ starts at the curve that defines the left edge and ends at the curve that defines the right edge. In our region, the line $y=x$ means $x=y$. The parabola $y=x^2$ means $x=\sqrt{y}$ (for $x \ge 0$). When we look at our sketch, for any $y$ between 0 and 1, the $x$ value on the line $y=x$ is *less than* the $x$ value on the parabola $y=x^2$. For instance, at $y=0.25$, $x=0.25$ on the line, and $x=\sqrt{0.25}=0.5$ on the parabola. So, for a fixed $y$, $x$ goes from $y$ to $\sqrt{y}$.

    *   Therefore, the new limits are $y$ from $0$ to $1$, and for each $y$, $x$ from $y$ to $\sqrt{y}$.

*   **Step 4: Rewrite the Integral:**
    $$ \int_{0}^{1} \left( \int_{y}^{\sqrt{y}} y \, dx \right) \, dy $$

Now, let's actually evaluate both integrals to see if they match.

**Original Integral Evaluation:**

$$ \int_{0}^{1} \left[ \frac{y^2}{2} \right]_{y=x^2}^{y=x} \, dx = \int_{0}^{1} \left( \frac{x^2}{2} - \frac{(x^2)^2}{2} \right) \, dx $$
$$ = \int_{0}^{1} \left( \frac{x^2}{2} - \frac{x^4}{2} \right) \, dx = \frac{1}{2} \left[ \frac{x^3}{3} - \frac{x^5}{5} \right]_{0}^{1} $$
$$ = \frac{1}{2} \left( \frac{1}{3} - \frac{1}{5} \right) = \frac{1}{2} \left( \frac{5-3}{15} \right) = \frac{1}{2} \left( \frac{2}{15} \right) = \frac{1}{15} $$

**Reversed Integral Evaluation:**

$$ \int_{0}^{1} \left[ xy \right]_{x=y}^{x=\sqrt{y}} \, dy = \int_{0}^{1} ( (\sqrt{y})y - (y)y ) \, dy $$
$$ = \int_{0}^{1} ( y^{3/2} - y^2 ) \, dy = \left[ \frac{y^{5/2}}{5/2} - \frac{y^3}{3} \right]_{0}^{1} $$
$$ = \left[ \frac{2}{5} y^{5/2} - \frac{1}{3} y^3 \right]_{0}^{1} = \frac{2}{5}(1)^{5/2} - \frac{1}{3}(1)^3 - (0 - 0) $$
$$ = \frac{2}{5} - \frac{1}{3} = \frac{6 - 5}{15} = \frac{1}{15} $$

The results match! This confirms our understanding of how to describe the region. The power of this technique is evident when the integrand itself is simple ($y$ in this case), but the limits make one order of integration significantly harder than the other.

This process of redefining the region of integration is fundamental. It's about truly understanding the geometric domain over which we are integrating. It directly supports **CO2** by allowing us to calculate areas and volumes, and even indirectly aids **CO1** by providing flexibility in solving complex engineering problems where the integral setup is key.

#### When is Reversing the Order Particularly Useful?

1.  **When the original integrand is difficult to integrate with respect to the inner variable.**
2.  **When the limits of integration are complicated functions, making the reversed order simpler.**
3.  **When dealing with regions that are more naturally described as Type II than Type I (or vice-versa).**
4.  **When we need to use certain theorems or properties that might be easier to apply with a reversed order.**

Let's consider another example where the integrand itself might suggest a reversal.

#### Example 2: A Challenging Integrand

Consider the integral:

$$ \int_{0}^{1} \left( \int_{0}^{\sqrt{1-y^2}} \sin(x^2 + y^2) \, dx \right) \, dy $$

This is a Type II integral (integrated $dx \, dy$).
*   $y$ ranges from $0$ to $1$.
*   For a fixed $y$, $x$ ranges from $0$ to $\sqrt{1-y^2}$.

Let's analyze the region of integration first.
*   $x = \sqrt{1-y^2}$ implies $x^2 = 1-y^2$, which means $x^2 + y^2 = 1$. This is the equation of a circle centered at the origin with radius 1.
*   Since $x \ge 0$ and $y$ is from $0$ to $1$, this region is the **quarter-circle** in the first quadrant of the $xy$-plane.

Now, let's try to integrate $\sin(x^2 + y^2)$ with respect to $x$. This requires a $u$-substitution like $u = x^2 + y^2$, so $du = 2x \, dx$. We have an $x$ in the differential $dx$, but our integrand is $\sin(x^2+y^2)$, not $x \sin(x^2+y^2)$. This integral looks very, very difficult to solve in this form.

This is a perfect scenario for:
1.  **Reversing the order of integration.**
2.  **Switching to polar coordinates!** (This is a related topic we'll cover, but reversing the order is the first step we're focusing on here).

Let's reverse the order to $dy \, dx$.

*   **Step 1: Sketch the Region:** We've identified it as the quarter-circle in the first quadrant bounded by $x=0$, $y=0$, and $x^2+y^2=1$.

*   **Step 2: Identify Limits (original):**
    *   $y$ from $0$ to $1$.
    *   $x$ from $0$ to $\sqrt{1-y^2}$.

*   **Step 3: Redefine for $dy \, dx$:**
    *   Now we look at vertical strips. What's the range of $x$? From $0$ to $1$. ($0 \le x \le 1$).
    *   For a fixed $x$ between $0$ and $1$, what are the bounds for $y$? The lower bound is $y=0$ (the x-axis). The upper bound is the circle $x^2 + y^2 = 1$, which we rewrite as $y = \sqrt{1-x^2}$ (since $y \ge 0$).
    *   So, for a fixed $x$, $y$ ranges from $0$ to $\sqrt{1-x^2}$.

*   **Step 4: Rewrite the Integral:**
    $$ \int_{0}^{1} \left( \int_{0}^{\sqrt{1-x^2}} \sin(x^2 + y^2) \, dy \right) \, dx $$

Now, let's look at this new integral. The inner integral is $\int_{0}^{\sqrt{1-x^2}} \sin(x^2 + y^2) \, dy$. Integrating $\sin(x^2 + y^2)$ with respect to $y$ is still problematic without more advanced techniques.

This is where the idea of switching to **polar coordinates** becomes incredibly powerful, and it often goes hand-in-hand with reversing the order of integration.

In polar coordinates, $x = r \cos \theta$ and $y = r \sin \theta$, so $x^2 + y^2 = r^2$.
The differential area element $dA$ becomes $r \, dr \, d\theta$.

Let's describe our quarter-circle region in polar coordinates:
*   The radius $r$ goes from $0$ to $1$.
*   The angle $\theta$ covers the first quadrant, so from $0$ to $\pi/2$.

The integrand $\sin(x^2 + y^2)$ becomes $\sin(r^2)$.
The integral becomes:

$$ \int_{0}^{\pi/2} \left( \int_{0}^{1} \sin(r^2) \cdot r \, dr \right) \, d\theta $$

This is much more manageable! Let's evaluate the inner integral:
Let $u = r^2$, so $du = 2r \, dr$. This means $r \, dr = \frac{1}{2} du$.
When $r=0$, $u=0$. When $r=1$, $u=1$.
$$ \int_{0}^{1} \sin(r^2) \cdot r \, dr = \int_{0}^{1} \sin(u) \cdot \frac{1}{2} \, du = \frac{1}{2} \left[ -\cos(u) \right]_{0}^{1} $$
$$ = \frac{1}{2} (-\cos(1) - (-\cos(0))) = \frac{1}{2} (1 - \cos(1)) $$

Now, substitute this back into the outer integral:

$$ \int_{0}^{\pi/2} \frac{1}{2} (1 - \cos(1)) \, d\theta $$
Since $\frac{1}{2} (1 - \cos(1))$ is a constant with respect to $\theta$:
$$ = \frac{1}{2} (1 - \cos(1)) \left[ \theta \right]_{0}^{\pi/2} = \frac{1}{2} (1 - \cos(1)) (\frac{\pi}{2} - 0) $$
$$ = \frac{\pi}{4} (1 - \cos(1)) $$

This is a beautiful result that would have been nearly impossible to obtain directly by integrating with respect to $x$ and then $y$, or even $y$ and then $x$ in Cartesian coordinates without the polar transformation. The ability to reverse the order of integration was the crucial first step that opened the door to using polar coordinates. This directly relates to **CO2** as we've calculated the "volume" under the surface $z=\sin(x^2+y^2)$ over a quarter-circular region.

Remember, the decision to reverse the order often depends on the form of the integrand and the shape of the region. Always sketch!

#### Connecting to Course Outcomes

*   **CO1: Compute the partial and total derivatives and maxima and minima of multivariable functions and to apply in engineering problems.** While this topic doesn't directly involve derivatives, the flexibility in integral setup gained by reversing the order of integration is a foundational skill for many applied calculus problems in engineering. If an optimization problem (finding max/min) involves calculating a quantity via integration, the ease of that calculation can depend heavily on the integration order.
*   **CO2: Understand theoretical idea of multiple integrals and to apply them to find areas and volumes of geometrical shapes.** This is the most direct link. Reversing the order of integration is a technique specifically used to calculate areas and volumes. By changing the perspective (from vertical slices to horizontal slices, or vice versa), we can find methods to evaluate these integrals that might otherwise be intractable. The examples we worked through, calculating the area between curves or the volume under a surface, are direct applications of **CO2**. Understanding how to describe regions for both Type I and Type II integration is key here.
*   **CO3: Compute the derivatives and line integrals of vector functions and to learn their applications.** This topic is about double integrals, not line integrals or vector functions, so the connection is indirect. However, many physical phenomena modeled by vector calculus (like fluid flow or electromagnetic fields) might involve calculating flux or work, which can lead to double integrals. The ability to manipulate double integrals is a prerequisite for these more advanced topics.
*   **CO4: Apply the concepts of surface and volume integrals and to learn their inter-relations and applications.** Similar to CO3, this topic is a building block. Surface and volume integrals often arise from physical quantities, and their evaluation can sometimes be simplified by changing coordinate systems or, in the case of double integrals, by changing the order of integration. A good grasp of double integrals is essential for understanding these higher-order integrals.

#### Common Pitfalls and Exam Tips

*   **Not Sketching the Region:** I cannot stress this enough. If you don't sketch it, you're guessing. And guessing with integration limits is a recipe for disaster.
*   **Incorrectly Rewriting Limits:** When you switch to horizontal strips (integrating $dx \, dy$), make sure you express the boundary curves as $x = g(y)$ and correctly identify which function gives the *left* boundary and which gives the *right* boundary for a given $y$. The same applies when switching from Type II to Type I.
*   **Confusing Variable Bounds:** Be very careful about whether your limits are constants or functions of a variable. When switching, constant limits for $x$ might become functional limits for $y$, and vice-versa.
*   **Integrand Complexity:** Remember that reversing the order doesn't always simplify the *integrand* itself in Cartesian coordinates. Sometimes, it's the *limits* that are the main problem. If both are hard, consider other techniques like polar coordinates (as seen in Example 2).

**Exam Focus:** On exams, you'll often be given an integral in one order and asked to reverse it, or given a region and asked to set up the integral in both orders, or asked to evaluate the integral by reversing the order. Understanding the process and being able to sketch accurately will be your best tools.

#### Recap of Key Concepts

*   **Type I Region:** $a \le x \le b$, $g_1(x) \le y \le g_2(x)$. (Vertical strips, $dy \, dx$)
*   **Type II Region:** $c \le y \le d$, $h_1(y) \le x \le h_2(y)$. (Horizontal strips, $dx \, dy$)
*   **Reversing Order:** Transforming a Type I description of a region into a Type II description (or vice versa) of the *same region*.
*   **Crucial Tool:** Accurate sketching of the region of integration.

Remember, mastering the art of reversing the order of integration is like gaining a superpower in calculus. It unlocks solutions to problems that might otherwise seem impossible. Keep practicing the sketching and limit transformation!

---

### Sample Questions with Answers

**Question 1 (Conceptual):**
Explain why reversing the order of integration can be beneficial when evaluating double integrals.

**Answer:**
Reversing the order of integration can be beneficial for several reasons. Primarily, it can simplify the evaluation of the integral if the integrand is difficult to integrate with respect to the original inner variable. By switching the order, the new inner integral might become tractable. Additionally, the limits of integration might be expressed in a simpler form for the reversed order, or the geometry of the region might be more naturally described by swapping the roles of $x$ and $y$. This flexibility is crucial for solving many problems in areas and volumes, aligning with **CO2**.

**Question 2 (Application - Setting up the integral):**
Set up the double integral $\int_{0}^{2} \int_{0}^{x} f(x,y) \, dy \, dx$ with the order of integration reversed. Sketch the region of integration.

**Answer:**
*   **Original Limits:** $0 \le x \le 2$ and $0 \le y \le x$.
*   **Sketch:** The region is bounded by $x=0$ (y-axis), $y=0$ (x-axis), and $y=x$ (a line through the origin). This forms a triangle with vertices at (0,0), (2,0), and (2,2).
*   **Reversed Limits:**
    *   We need to describe this triangle using horizontal strips ($dx \, dy$).
    *   The minimum $y$ value is $0$, and the maximum $y$ value is $2$. So, $0 \le y \le 2$.
    *   For a fixed $y$, $x$ goes from the left boundary to the right boundary.
        *   The left boundary is the line $y=x$, which means $x=y$.
        *   The right boundary is the line $x=2$.
    *   So, for a fixed $y$, $x$ ranges from $y$ to $2$.

*   **Reversed Integral:**
    $$ \int_{0}^{2} \int_{y}^{2} f(x,y) \, dx \, dy $$

**Question 3 (Application - Evaluation):**
Evaluate the integral $\int_{0}^{1} \int_{0}^{\sqrt{y}} x \, dx \, dy$ by reversing the order of integration.

**Answer:**
*   **Original Integral:** $\int_{0}^{1} \int_{0}^{\sqrt{y}} x \, dx \, dy$.
*   **Original Limits:** $0 \le y \le 1$ and $0 \le x \le \sqrt{y}$.
*   **Sketch the Region:**
    *   $x = \sqrt{y} \implies x^2 = y$ (parabola opening upwards).
    *   $y=1$ (horizontal line).
    *   $x=0$ (y-axis).
    *   The region is bounded by $x=0$ on the left, $y=1$ on top, and $y=x^2$ on the bottom. The intersection of $y=x^2$ and $y=1$ is at $x=1$ (since $x \ge 0$). So the vertices are (0,0), (0,1), and (1,1). This is a region where $x$ varies from $0$ to $1$, and for each $x$, $y$ goes from $x^2$ to $1$.

*   **Reversing the Order ($dy \, dx$):**
    *   $x$ ranges from $0$ to $1$.
    *   For a fixed $x$, $y$ goes from the lower boundary $y=x^2$ to the upper boundary $y=1$.
    *   New limits: $0 \le x \le 1$ and $x^2 \le y \le 1$.

*   **Reversed Integral:**
    $$ \int_{0}^{1} \int_{x^2}^{1} x \, dy \, dx $$

*   **Evaluation of Reversed Integral:**
    $$ \int_{0}^{1} \left[ xy \right]_{y=x^2}^{y=1} \, dx = \int_{0}^{1} (x(1) - x(x^2)) \, dx $$
    $$ = \int_{0}^{1} (x - x^3) \, dx = \left[ \frac{x^2}{2} - \frac{x^4}{4} \right]_{0}^{1} $$
    $$ = \left( \frac{1^2}{2} - \frac{1^4}{4} \right) - (0 - 0) = \frac{1}{2} - \frac{1}{4} = \frac{2-1}{4} = \frac{1}{4} $$

Let's also evaluate the original integral to confirm:
$$ \int_{0}^{1} \left[ \frac{x^2}{2} \right]_{x=0}^{x=\sqrt{y}} \, dy = \int_{0}^{1} \frac{(\sqrt{y})^2}{2} \, dy = \int_{0}^{1} \frac{y}{2} \, dy $$
$$ = \left[ \frac{y^2}{4} \right]_{0}^{1} = \frac{1^2}{4} - 0 = \frac{1}{4} $$
The results match!

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
