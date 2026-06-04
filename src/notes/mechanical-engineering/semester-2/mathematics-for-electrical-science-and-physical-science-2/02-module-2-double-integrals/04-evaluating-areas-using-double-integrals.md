---
title: "Evaluating areas using Double integrals"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2"
module: "Module 2: Double integrals"
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1edffeb4799d95e839a5"
status: "completed"
scrapedAt: "2026-05-20T17:45:48.440Z"
---
## Module 2: Double Integrals - Evaluating Areas Using Double Integrals

Welcome, everyone! In this session, we're going to delve into one of the most powerful applications of double integrals: **finding the area of a region**. You might be thinking, "Isn't area something we've been doing since basic calculus with single integrals?" And you'd be right, for simple curves. But what happens when we need to find the area of a region bounded by *multiple* curves, or a region that's not easily described by a single function $y = f(x)$ over an interval? That's where our trusty double integrals come to the rescue, and it's a concept that directly links to our **Course Outcome 2 (CO2)**: "Understand theoretical idea of multiple integrals and to apply them to find areas and volumes of geometrical shapes." This is a key application, demonstrating our ability to translate geometric problems into the language of integration.

### Revisiting Area with Single Integrals: A Quick Recap

Before we leap into double integrals, let's quickly remember what we did with single integrals. To find the area between two curves, say $y = f(x)$ and $y = g(x)$, from $x=a$ to $x=b$, where $f(x) \ge g(x)$ on $[a, b]$, we used:

$$ \text{Area} = \int_{a}^{b} [f(x) - g(x)] \, dx $$

This is essentially summing up infinitesimally thin vertical strips of height $f(x) - g(x)$ and width $dx$.

### The Leap to Double Integrals: What's Different?

Now, imagine a region $R$ in the $xy$-plane. Instead of thinking about thin strips, let's think about infinitesimally small rectangular "patches" within this region. Each patch has an area of $dA = dx \, dy$ (or $dy \, dx$). If we want to find the total area of the region $R$, we can imagine "adding up" the areas of all these tiny patches. This "adding up" is precisely what integration does, and when we're adding up quantities over a two-dimensional region, we use a **double integral**.

So, the area of a region $R$ in the $xy$-plane can be computed as:

$$ \text{Area}(R) = \iint_{R} dA $$

This might seem a bit abstract at first. Think of it like this: imagine you have a map of a park, and you want to measure its total area. You could overlay a grid of tiny squares onto the map. The total area is the sum of the areas of all the tiny squares that fall within the park's boundaries. The double integral $ \iint_{R} dA $ is doing exactly that, but with infinitesimally small squares (or rectangles).

### Setting Up the Double Integral for Area: The Crucial Step

The real work in evaluating areas using double integrals lies in **setting up the limits of integration**. The region $R$ will define these limits. We have two primary ways to set up our double integral, depending on the shape of $R$ and which variable we choose to integrate with respect to first:

#### Type I Region: Integrating with respect to $y$ first, then $x$

A region $R$ is called a **Type I region** if it can be described as:

$$ R = \{ (x, y) \mid a \le x \le b, \ g_1(x) \le y \le g_2(x) \} $$

Here, $x$ varies between two constants, $a$ and $b$, and for each $x$, $y$ varies between two functions of $x$, $g_1(x)$ (the lower boundary) and $g_2(x)$ (the upper boundary).

The double integral for the area then becomes:

$$ \text{Area}(R) = \int_{a}^{b} \int_{g_1(x)}^{g_2(x)} \, dy \, dx $$

Let's break this down:
1.  **Inner integral ($\int_{g_1(x)}^{g_2(x)} \, dy$):** For a fixed value of $x$, this integral calculates the "length" of a vertical line segment within the region $R$ at that $x$. Think of it as summing up infinitesimal $dy$ segments from the bottom curve $y = g_1(x)$ to the top curve $y = g_2(x)$. The result of this inner integral will be a function of $x$.
2.  **Outer integral ($\int_{a}^{b} [\dots] \, dx$):** This integral then sums up these "lengths" (which are essentially the heights of our original single-variable area strips) as $x$ varies from $a$ to $b$. This is precisely what we did in single-variable calculus!

**Example 1: Area of a Parabolic Segment**

Let's find the area of the region bounded by the parabola $y = x^2$ and the line $y = 4$.

*   **Visualize:** Sketch these two curves. You'll see the parabola opening upwards and the horizontal line cutting across it. The region is enclosed between them.
*   **Find Intersection Points:** To determine our limits for $x$, we find where $x^2 = 4$. This gives us $x = -2$ and $x = 2$. So, our $x$ limits are $a = -2$ and $b = 2$.
*   **Identify Boundaries:** For any given $x$ between -2 and 2, the lower boundary is the parabola $y = x^2$ (so $g_1(x) = x^2$) and the upper boundary is the line $y = 4$ (so $g_2(x) = 4$).
*   **Set up the Integral:** This fits the Type I region description.
    $$ \text{Area} = \int_{-2}^{2} \int_{x^2}^{4} \, dy \, dx $$
*   **Evaluate:**
    *   Inner integral: $\int_{x^2}^{4} \, dy = [y]_{x^2}^{4} = 4 - x^2$
    *   Outer integral: $\int_{-2}^{2} (4 - x^2) \, dx = \left[ 4x - \frac{x^3}{3} \right]_{-2}^{2}$
    *   $= \left( 4(2) - \frac{2^3}{3} \right) - \left( 4(-2) - \frac{(-2)^3}{3} \right)$
    *   $= \left( 8 - \frac{8}{3} \right) - \left( -8 - \frac{-8}{3} \right)$
    *   $= \left( 8 - \frac{8}{3} \right) - \left( -8 + \frac{8}{3} \right)$
    *   $= 8 - \frac{8}{3} + 8 - \frac{8}{3} = 16 - \frac{16}{3} = \frac{48 - 16}{3} = \frac{32}{3}$

So, the area of this region is $\frac{32}{3}$ square units. This method confirms the single-variable calculus result but shows how the double integral framework handles it.

#### Type II Region: Integrating with respect to $x$ first, then $y$

A region $R$ is called a **Type II region** if it can be described as:

$$ R = \{ (x, y) \mid c \le y \le d, \ h_1(y) \le x \le h_2(y) \} $$

Here, $y$ varies between two constants, $c$ and $d$, and for each $y$, $x$ varies between two functions of $y$, $h_1(y)$ (the left boundary) and $h_2(y)$ (the right boundary).

The double integral for the area then becomes:

$$ \text{Area}(R) = \int_{c}^{d} \int_{h_1(y)}^{h_2(y)} \, dx \, dy $$

Let's break this down:
1.  **Inner integral ($\int_{h_1(y)}^{h_2(y)} \, dx$):** For a fixed value of $y$, this integral calculates the "length" of a horizontal line segment within the region $R$ at that $y$. Think of it as summing up infinitesimal $dx$ segments from the left curve $x = h_1(y)$ to the right curve $x = h_2(y)$. The result of this inner integral will be a function of $y$.
2.  **Outer integral ($\int_{c}^{d} [\dots] \, dy$):** This integral then sums up these "lengths" as $y$ varies from $c$ to $d$.

**Example 2: Area of a Region Bounded by Curves in Terms of $y$**

Let's find the area of the region bounded by the curves $x = y^2$ and $x = y + 2$.

*   **Visualize:** Sketch these curves. $x = y^2$ is a parabola opening to the right. $x = y + 2$ is a straight line.
*   **Find Intersection Points:** To determine our limits for $y$, we find where $y^2 = y + 2$. This means $y^2 - y - 2 = 0$, which factors as $(y-2)(y+1) = 0$. So, $y = 2$ and $y = -1$. Our $y$ limits are $c = -1$ and $d = 2$.
*   **Identify Boundaries:** For any given $y$ between -1 and 2, which curve is on the right and which is on the left? Let's test $y=0$: $x=0^2=0$ for the parabola, and $x=0+2=2$ for the line. So, the line $x=y+2$ is to the right, and the parabola $x=y^2$ is to the left. Therefore, $h_1(y) = y^2$ and $h_2(y) = y+2$.
*   **Set up the Integral:** This fits the Type II region description.
    $$ \text{Area} = \int_{-1}^{2} \int_{y^2}^{y+2} \, dx \, dy $$
*   **Evaluate:**
    *   Inner integral: $\int_{y^2}^{y+2} \, dx = [x]_{y^2}^{y+2} = (y+2) - y^2 = y+2-y^2$
    *   Outer integral: $\int_{-1}^{2} (y+2-y^2) \, dy = \left[ \frac{y^2}{2} + 2y - \frac{y^3}{3} \right]_{-1}^{2}$
    *   $= \left( \frac{2^2}{2} + 2(2) - \frac{2^3}{3} \right) - \left( \frac{(-1)^2}{2} + 2(-1) - \frac{(-1)^3}{3} \right)$
    *   $= \left( \frac{4}{2} + 4 - \frac{8}{3} \right) - \left( \frac{1}{2} - 2 + \frac{1}{3} \right)$
    *   $= \left( 2 + 4 - \frac{8}{3} \right) - \left( \frac{1}{2} - 2 + \frac{1}{3} \right)$
    *   $= \left( 6 - \frac{8}{3} \right) - \left( \frac{3 - 12 + 2}{6} \right)$
    *   $= \left( \frac{18-8}{3} \right) - \left( \frac{-7}{6} \right)$
    *   $= \frac{10}{3} + \frac{7}{6} = \frac{20+7}{6} = \frac{27}{6} = \frac{9}{2}$

The area of this region is $\frac{9}{2}$ square units.

### Regions Requiring Splitting or Change of Order

Sometimes, a region might not be a simple Type I or Type II region over its entire extent. For example, the upper or lower boundary curve might change, or the left/right boundary curves might switch roles. In such cases, we might need to **split the region into sub-regions** that are of Type I or Type II, calculate the area of each sub-region, and then add them up.

Alternatively, we can sometimes **change the order of integration**. If a region is difficult to describe as Type I, it might be easier to describe as Type II, and vice-versa. This is a critical skill, and it directly relates to **CO2** – understanding how to manipulate multiple integrals for different geometric descriptions.

**Example 3: A Region Requiring Choice of Integration Order**

Consider the region bounded by $y = x^2$ and $y = \sqrt{x}$.

*   **Visualize:** Both are curves starting at the origin. $y = \sqrt{x}$ is the top half of a parabola opening to the right, and $y = x^2$ is a standard parabola opening upwards.
*   **Intersection Points:** $x^2 = \sqrt{x}$. Squaring both sides (carefully, as this might introduce extraneous solutions, but here it's fine for $x \ge 0$): $x^4 = x$. So, $x^4 - x = 0$, or $x(x^3 - 1) = 0$. This gives $x=0$ and $x=1$. The corresponding $y$ values are $y=0$ and $y=1$.
*   **As Type I Region:** For $0 \le x \le 1$, the upper curve is $y = \sqrt{x}$ and the lower curve is $y = x^2$.
    $$ \text{Area} = \int_{0}^{1} \int_{x^2}^{\sqrt{x}} \, dy \, dx $$
    *   Inner integral: $\int_{x^2}^{\sqrt{x}} \, dy = [\underline{y}]_{x^2}^{\sqrt{x}} = \sqrt{x} - x^2$
    *   Outer integral: $\int_{0}^{1} (\sqrt{x} - x^2) \, dx = \int_{0}^{1} (x^{1/2} - x^2) \, dx = \left[ \frac{x^{3/2}}{3/2} - \frac{x^3}{3} \right]_{0}^{1}$
    *   $= \left[ \frac{2}{3}x^{3/2} - \frac{x^3}{3} \right]_{0}^{1} = \left( \frac{2}{3}(1)^{3/2} - \frac{1^3}{3} \right) - (0) = \frac{2}{3} - \frac{1}{3} = \frac{1}{3}$

*   **As Type II Region:** For $0 \le y \le 1$, which function gives the right boundary for $x$? We need to rewrite the curves as $x = g(y)$.
    *   $y = x^2 \implies x = \sqrt{y}$ (since $x \ge 0$ in this region) - this is the right boundary.
    *   $y = \sqrt{x} \implies x = y^2$ - this is the left boundary.
    $$ \text{Area} = \int_{0}^{1} \int_{y^2}^{\sqrt{y}} \, dx \, dy $$
    *   Inner integral: $\int_{y^2}^{\sqrt{y}} \, dx = [x]_{y^2}^{\sqrt{y}} = \sqrt{y} - y^2$
    *   Outer integral: $\int_{0}^{1} (\sqrt{y} - y^2) \, dy = \int_{0}^{1} (y^{1/2} - y^2) \, dy = \left[ \frac{2}{3}y^{3/2} - \frac{y^3}{3} \right]_{0}^{1}$
    *   $= \left( \frac{2}{3}(1)^{3/2} - \frac{1^3}{3} \right) - (0) = \frac{2}{3} - \frac{1}{3} = \frac{1}{3}$

Both orders yield the same result, $\frac{1}{3}$. This example illustrates how choosing the right order can simplify calculations, or at least provide a consistent answer. It reinforces the flexibility of double integrals.

### Relating to Electrical Science and Physical Science

You might be wondering how this connects to your fields. In electrical science, areas under curves often represent important quantities. For example:
*   **Energy Stored:** The area under a power-time graph represents total energy consumed or delivered. If you're dealing with signals that vary in two dimensions or have a more complex dependency, double integrals can calculate accumulated effects.
*   **Charge Distribution:** In systems with charge density varying over a surface, the integral of the charge density function over that surface gives the total charge. The 'dA' in our area calculation is the surface element. If we were calculating charge, it would be $\iint_R \sigma(x,y) \, dA$, where $\sigma(x,y)$ is the charge density. The area calculation is a special case where $\sigma(x,y) = 1$.

In physical science:
*   **Mass Calculation:** If you have a thin plate with a non-uniform density $\rho(x, y)$ over a region $R$, the total mass would be $\iint_R \rho(x, y) \, dA$. Again, finding the area is a simpler case where density is uniform and equal to 1.
*   **Probability:** In probability and statistics, if $f(x, y)$ is a joint probability density function over a region $R$, the probability that $(X, Y)$ falls into a sub-region $A \subseteq R$ is given by $\iint_A f(x, y) \, dA$. The total probability is 1, which means the integral of the PDF over its entire domain must be 1. Calculating the area of the domain is a foundational step.

These examples highlight **CO2**'s relevance – understanding the theoretical idea of multiple integrals and applying them to practical scenarios. We're essentially developing tools to measure "quantities" distributed over regions.

### Key Takeaways for Area Calculation

Remember this:
*   The area of a region $R$ is found by $\iint_R dA$.
*   The core challenge is setting up the correct limits of integration, which defines the region $R$.
*   Regions can be described as Type I ($y$ bounds are functions of $x$) or Type II ($x$ bounds are functions of $y$).
*   Always visualize the region to help determine the bounds and whether to use Type I, Type II, or possibly split the region.
*   Changing the order of integration can sometimes simplify the calculation.
*   These techniques are fundamental for many applications in engineering and science where you need to accumulate quantities over a spatial domain.

Let's solidify this with some practice.

---

### Sample Questions and Answers

**Question 1 (Conceptual):**
Explain, in your own words, why the double integral $\iint_R dA$ represents the area of region $R$. What does $dA$ signify in this context?

**Answer:**
The double integral $\iint_R dA$ represents the area of region $R$ because it's a method of summing up infinitely many infinitesimally small "pieces" of area that completely cover the region $R$. Think of $dA$ as the area of a tiny rectangle within the region. If we integrate $dA$ (which is effectively integrating the function $f(x,y)=1$) over the entire region $R$, we are essentially adding up the areas of all these tiny rectangles, thereby calculating the total area of $R$. It's an extension of the single integral idea of summing thin strips, but here we're summing over a two-dimensional space.

**Question 2 (Application - Type I):**
Find the area of the region bounded by the curves $y = x$ and $y = x^2$.

**Solution:**
1.  **Visualize and Find Intersections:** Sketch $y=x$ (a straight line through the origin) and $y=x^2$ (a parabola through the origin). They intersect when $x = x^2$, which means $x^2 - x = 0$, or $x(x-1)=0$. So, the intersections are at $x=0$ and $x=1$.
2.  **Determine Region Type and Bounds:** For $0 \le x \le 1$, the line $y=x$ is above the parabola $y=x^2$. This is a Type I region.
    *   $x$ varies from $0$ to $1$ ($a=0, b=1$).
    *   $y$ varies from $x^2$ to $x$ ($g_1(x)=x^2, g_2(x)=x$).
3.  **Set up the Double Integral:**
    $$ \text{Area} = \int_{0}^{1} \int_{x^2}^{x} \, dy \, dx $$
4.  **Evaluate:**
    *   Inner integral: $\int_{x^2}^{x} \, dy = [y]_{x^2}^{x} = x - x^2$
    *   Outer integral: $\int_{0}^{1} (x - x^2) \, dx = \left[ \frac{x^2}{2} - \frac{x^3}{3} \right]_{0}^{1} = \left( \frac{1^2}{2} - \frac{1^3}{3} \right) - (0) = \frac{1}{2} - \frac{1}{3} = \frac{3-2}{6} = \frac{1}{6}$

The area of the region is $\frac{1}{6}$.

**Question 3 (Application - Type II or Change of Order):**
Calculate the area of the region enclosed by the curves $x = 1-y^2$ and $x = y-1$.

**Solution:**
1.  **Visualize and Find Intersections:** Sketch $x = 1-y^2$ (a parabola opening left, vertex at (1,0)) and $x = y-1$ (a line). They intersect when $1-y^2 = y-1$, which means $y^2 + y - 2 = 0$. Factoring gives $(y+2)(y-1)=0$, so the intersections occur at $y=-2$ and $y=1$.
2.  **Determine Region Type and Bounds (Type II is more natural here):**
    *   $y$ varies from $-2$ to $1$ ($c=-2, d=1$).
    *   For a given $y$, which curve is on the right ($x_{right}$) and which is on the left ($x_{left}$)? Test $y=0$: $x = 1-0^2 = 1$ and $x=0-1=-1$. So, $x=1-y^2$ is on the right and $x=y-1$ is on the left.
    *   $h_1(y) = y-1$, $h_2(y) = 1-y^2$.
3.  **Set up the Double Integral (as Type II):**
    $$ \text{Area} = \int_{-2}^{1} \int_{y-1}^{1-y^2} \, dx \, dy $$
4.  **Evaluate:**
    *   Inner integral: $\int_{y-1}^{1-y^2} \, dx = [x]_{y-1}^{1-y^2} = (1-y^2) - (y-1) = 1 - y^2 - y + 1 = 2 - y - y^2$
    *   Outer integral: $\int_{-2}^{1} (2 - y - y^2) \, dy = \left[ 2y - \frac{y^2}{2} - \frac{y^3}{3} \right]_{-2}^{1}$
    *   $= \left( 2(1) - \frac{1^2}{2} - \frac{1^3}{3} \right) - \left( 2(-2) - \frac{(-2)^2}{2} - \frac{(-2)^3}{3} \right)$
    *   $= \left( 2 - \frac{1}{2} - \frac{1}{3} \right) - \left( -4 - \frac{4}{2} - \frac{-8}{3} \right)$
    *   $= \left( \frac{12 - 3 - 2}{6} \right) - \left( -4 - 2 + \frac{8}{3} \right)$
    *   $= \frac{7}{6} - \left( -6 + \frac{8}{3} \right) = \frac{7}{6} - \left( \frac{-18+8}{3} \right) = \frac{7}{6} - \left( \frac{-10}{3} \right)$
    *   $= \frac{7}{6} + \frac{10}{3} = \frac{7 + 20}{6} = \frac{27}{6} = \frac{9}{2}$

The area of the region is $\frac{9}{2}$.

**(Self-Check/Alternative: Try setting this up as Type I. You'll find that $y=\sqrt{1-x}$ and $y=-\sqrt{1-x}$ for the parabola, and $y=x+1$ for the line. The region would need to be split to handle $y=\sqrt{1-x}$ and $y=-\sqrt{1-x}$ as upper/lower bounds for different $x$ intervals, making Type II integration much more straightforward here.)**

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
