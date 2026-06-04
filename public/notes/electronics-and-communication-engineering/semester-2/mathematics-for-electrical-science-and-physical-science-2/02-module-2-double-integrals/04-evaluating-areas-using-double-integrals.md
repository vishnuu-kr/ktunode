---
title: "Evaluating areas using Double integrals"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 2"
module: "Module 2: Double integrals"
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da1d0"
status: "completed"
scrapedAt: "2026-05-23T17:40:40.616Z"
---
# Module 2: Double Integrals - Evaluating Areas Using Double Integrals

Welcome, everyone! In this session, we're going to delve into one of the most practical applications of double integrals: calculating areas. You might recall from single-variable calculus how we used a definite integral to find the area under a curve. Well, double integrals allow us to extend this concept to two dimensions, enabling us to find the areas of regions in the $xy$-plane. This aligns beautifully with **Course Outcome 2 (CO2)**, which aims for us to "Understand theoretical idea of multiple integrals and to apply them to find areas and volumes of geometrical shapes." Specifically, we're focusing on the "areas" part today.

Think of it like this: if a single integral is a way to sum up infinitely thin rectangles under a curve, a double integral is a way to sum up infinitely small "area elements" over a region in the $xy$-plane. And when we want to find the *area* of that region, what are we essentially summing up? We're summing up tiny little pieces of area, each of which has an "area" of $dA$. So, if we integrate $1$ over the region $R$, we're effectively counting all those tiny $dA$ elements, and the sum will give us the total area of $R$.

## 1. The Fundamental Idea: Integrating '1' Over a Region

The core concept is elegantly simple. If we have a region $R$ in the $xy$-plane, its area, denoted by $A(R)$, can be computed using a double integral as:

$$ A(R) = \iint_R dA $$

Here, $dA$ represents an infinitesimal area element. In Cartesian coordinates, $dA$ is typically written as $dx \, dy$ or $dy \, dx$. The beauty of this is that we are integrating the function $f(x, y) = 1$ over the region $R$. This might seem a bit abstract at first, but it's a powerful generalization.

**Why does this work?** Imagine dividing the region $R$ into a large number of small, roughly rectangular subregions, each with a small area $\Delta A_i$. The total area of $R$ is approximately the sum of these small areas: $A(R) \approx \sum \Delta A_i$. As we refine this division, making the subregions smaller and smaller, this sum becomes a Riemann sum for our double integral. The limit of this sum is precisely $\iint_R dA$.

This is a fundamental result that you'll find discussed in standard calculus texts like Anton, Biven, and Davis's *Calculus* (12th edition) and Thomas's *Calculus* (15th edition). They emphasize how the double integral generalizes the concept of area from curves to surfaces and regions.

## 2. Setting Up the Double Integral for Area

To actually compute this area, we need to define the region $R$ and set up the limits of integration. The way we set up these limits depends on the shape of the region $R$. We can approach this in two primary ways, corresponding to the order of integration ($dy \, dx$ or $dx \, dy$).

### 2.1. Type I Regions: Integrating with Respect to $y$ First ($dy \, dx$)

A region $R$ is called a **Type I region** if it can be described as the set of all points $(x, y)$ such that $a \le x \le b$ and $g_1(x) \le y \le g_2(x)$, where $g_1$ and $g_2$ are continuous functions.

Imagine a vertical line segment sweeping across the region from left to right. For a Type I region, this line enters the region at some lower boundary curve $y = g_1(x)$ and exits at some upper boundary curve $y = g_2(x)$. The range of $x$-values for the entire region is from $a$ to $b$.

So, to find the area of a Type I region, we can set up the double integral as:

$$ A(R) = \int_a^b \int_{g_1(x)}^{g_2(x)} dy \, dx $$

Let's break down the integration process here:
1.  **Inner integral:** We first integrate with respect to $y$, treating $x$ as a constant. The limits for $y$ are from $g_1(x)$ to $g_2(x)$. The integral of $1$ with respect to $y$ is simply $y$. Evaluating this from $g_1(x)$ to $g_2(x)$ gives us $g_2(x) - g_1(x)$.
2.  **Outer integral:** The result of the inner integral, $g_2(x) - g_1(x)$, represents the "height" of the region at a given $x$. We then integrate this height with respect to $x$ from $a$ to $b$. This is exactly what we'd expect for the area under the curve $y = g_2(x)$ minus the area under the curve $y = g_1(x)$, which is the total area between the curves.

**Example:** Let's find the area of the region bounded by the curves $y = x^2$ and $y = \sqrt{x}$.

*   **Visualize:** Sketch these two curves. You'll see they intersect at $(0,0)$ and $(1,1)$. The region is enclosed between these two points. The curve $y = \sqrt{x}$ is the upper boundary, and $y = x^2$ is the lower boundary.
*   **Identify type:** We can see this as a Type I region. The $x$-values range from $0$ to $1$. For any $x$ in this range, $y$ goes from $x^2$ (lower curve) to $\sqrt{x}$ (upper curve). So, $g_1(x) = x^2$ and $g_2(x) = \sqrt{x}$, with $a=0$ and $b=1$.
*   **Set up integral:**
    $$ A = \int_0^1 \int_{x^2}^{\sqrt{x}} dy \, dx $$
*   **Evaluate:**
    *   Inner integral: $\int_{x^2}^{\sqrt{x}} dy = [y]_{x^2}^{\sqrt{x}} = \sqrt{x} - x^2$.
    *   Outer integral: $A = \int_0^1 (\sqrt{x} - x^2) dx = \int_0^1 (x^{1/2} - x^2) dx$.
    *   Now, integrate with respect to $x$:
        $$ A = \left[ \frac{x^{3/2}}{3/2} - \frac{x^3}{3} \right]_0^1 = \left[ \frac{2}{3}x^{3/2} - \frac{1}{3}x^3 \right]_0^1 $$
    *   Substitute the limits:
        $$ A = \left( \frac{2}{3}(1)^{3/2} - \frac{1}{3}(1)^3 \right) - \left( \frac{2}{3}(0)^{3/2} - \frac{1}{3}(0)^3 \right) = \frac{2}{3} - \frac{1}{3} - 0 = \frac{1}{3} $$
*   **Result:** The area of the region is $1/3$ square units.

**Relatable Example:** Imagine you're designing a park. You have a beautiful curved path (say, $y = \sqrt{x}$) and a straight road ($y = x^2$) that forms a boundary of your park. The area you want to calculate is the green space between the path and the road. By understanding the equations of the boundaries and the range over which they enclose the space, you can use this method to find the exact area of that green space. This is crucial for planning, landscaping, or even calculating how much fertilizer you might need!

### 2.2. Type II Regions: Integrating with Respect to $x$ First ($dx \, dy$)

A region $R$ is called a **Type II region** if it can be described as the set of all points $(x, y)$ such that $c \le y \le d$ and $h_1(y) \le x \le h_2(y)$, where $h_1$ and $h_2$ are continuous functions.

In this case, we think about a horizontal line segment sweeping across the region from bottom to top. This line enters the region at some left boundary curve $x = h_1(y)$ and exits at some right boundary curve $x = h_2(y)$. The range of $y$-values for the entire region is from $c$ to $d$.

The area of a Type II region is then given by:

$$ A(R) = \int_c^d \int_{h_1(y)}^{h_2(y)} dx \, dy $$

Let's look at the integration steps:
1.  **Inner integral:** We integrate with respect to $x$, treating $y$ as a constant. The limits for $x$ are from $h_1(y)$ to $h_2(y)$. The integral of $1$ with respect to $x$ is $x$. Evaluating this from $h_1(y)$ to $h_2(y)$ gives $h_2(y) - h_1(y)$.
2.  **Outer integral:** This result, $h_2(y) - h_1(y)$, represents the "width" of the region at a given $y$. We then integrate this width with respect to $y$ from $c$ to $d$. This is the equivalent of finding the area between the curves $x = h_2(y)$ and $x = h_1(y)$.

**Example:** Let's find the area of the region bounded by $x = y^2$ and $x = \sqrt{y}$.

*   **Visualize:** If you sketch these, you'll notice they are the same curves as before, but with $x$ and $y$ swapped. They intersect at $(0,0)$ and $(1,1)$. The curve $x = \sqrt{y}$ is the right boundary, and $x = y^2$ is the left boundary.
*   **Identify type:** This is a Type II region. The $y$-values range from $0$ to $1$. For any $y$ in this range, $x$ goes from $y^2$ (left curve) to $\sqrt{y}$ (right curve). So, $h_1(y) = y^2$ and $h_2(y) = \sqrt{y}$, with $c=0$ and $d=1$.
*   **Set up integral:**
    $$ A = \int_0^1 \int_{y^2}^{\sqrt{y}} dx \, dy $$
*   **Evaluate:**
    *   Inner integral: $\int_{y^2}^{\sqrt{y}} dx = [x]_{y^2}^{\sqrt{y}} = \sqrt{y} - y^2$.
    *   Outer integral: $A = \int_0^1 (\sqrt{y} - y^2) dy$.
    *   This is the *exact same integral* as before, just with the variable $y$ instead of $x$!
        $$ A = \left[ \frac{2}{3}y^{3/2} - \frac{1}{3}y^3 \right]_0^1 = \frac{2}{3} - \frac{1}{3} = \frac{1}{3} $$
*   **Result:** Again, the area is $1/3$ square units.

**Key Takeaway:** Sometimes, a region might be easier to describe as Type I, and other times as Type II. The choice of order can significantly affect the complexity of the integration. If a region can be described both ways, you can choose the order that leads to simpler integrals. This is a point often stressed in textbooks like Kreyszig's *Advanced Engineering Mathematics* and Bird's *Higher Engineering Mathematics* – the strategic choice of integration order is vital for efficient problem-solving.

### 2.3. Regions Requiring Multiple Integrals

What if your region isn't a simple Type I or Type II region? For example, if the boundaries change or if you have multiple enclosed areas? In such cases, you might need to break the region down into smaller subregions that *are* Type I or Type II, and then sum the areas of these subregions.

**Example:** Find the area of the region bounded by $y = \sin x$, $y = 0$, $x = 0$, and $x = 2\pi$.

*   **Visualize:** Sketch the sine curve from $0$ to $2\pi$. The region is between the curve and the x-axis.
*   **Observation:** From $x=0$ to $x=\pi$, the sine curve is above the x-axis ($y=\sin x$ is the upper bound, $y=0$ is the lower bound). From $x=\pi$ to $x=2\pi$, the sine curve is *below* the x-axis. When we talk about *area*, we mean a positive quantity. So, we'll integrate $|\sin x|$.
*   **Setup:** We can split this into two Type I regions.
    *   Region 1: $0 \le x \le \pi$, $0 \le y \le \sin x$. Area $A_1 = \int_0^\pi \int_0^{\sin x} dy \, dx$.
    *   Region 2: $\pi \le x \le 2\pi$, $\sin x \le y \le 0$. Area $A_2 = \int_\pi^{2\pi} \int_{\sin x}^0 dy \, dx$.
*   **Evaluation:**
    *   $A_1 = \int_0^\pi (\sin x - 0) dx = \int_0^\pi \sin x \, dx = [-\cos x]_0^\pi = (-\cos \pi) - (-\cos 0) = (-(-1)) - (-1) = 1 + 1 = 2$.
    *   $A_2 = \int_\pi^{2\pi} (0 - \sin x) dx = \int_\pi^{2\pi} -\sin x \, dx = [\cos x]_\pi^{2\pi} = \cos(2\pi) - \cos(\pi) = 1 - (-1) = 2$.
*   **Total Area:** $A = A_1 + A_2 = 2 + 2 = 4$.

Notice how the setup for $A_2$ is integrating from the lower curve ($\sin x$) to the upper curve ($0$). This ensures we get a positive area. Alternatively, we could have integrated $|\sin x|$ directly: $A = \int_0^{2\pi} |\sin x| dx$. This highlights that when calculating area, we are always integrating a positive quantity (the "height" or "width").

## 3. Connecting to Course Outcomes and Textbook Insights

*   **CO2: Understand theoretical idea of multiple integrals and to apply them to find areas and volumes of geometrical shapes.**
    This entire topic directly addresses CO2. We've seen how $\iint_R dA$ is the formal way to represent area, and we've applied it to concrete examples. The understanding comes from realizing that we're summing up infinitesimal areas. The application is in setting up and evaluating the integrals for various regions. Textbooks like Anton and Thomas provide rigorous mathematical derivations for why $\iint_R dA$ equals the area.

*   **CO1: Compute the partial and total derivatives and maxima and minima of multivariable functions and to apply in engineering problems.**
    While this specific topic focuses on area, the skills developed here are foundational for CO1. Evaluating double integrals requires you to compute antiderivatives of functions of multiple variables (which are often treated as functions of one variable during the iterated integration process). Understanding how functions behave over regions is key to finding maxima/minima, and double integrals are a powerful tool for calculating quantities related to these behaviors. For instance, in electrical science, you might calculate the total charge on a surface by integrating the charge density function over that surface.

*   **Other COs:** While less direct, concepts from CO3 (line integrals) and CO4 (surface/volume integrals) build upon the foundation of multivariable integration laid here. For example, the area enclosed by a curve (a 2D concept) is related to line integrals via Green's Theorem.

**Textbook Insights:**
*   **Anton, Biven, Davis (12th ed.):** Chapters on double integrals will detail the definition of area using Riemann sums and establish the connection to iterated integrals. They typically provide clear examples of Type I and Type II regions.
*   **Thomas' Calculus (15th ed.):** Similarly, this text will emphasize the geometric interpretation of the double integral for area and the role of iterated integrals. It's excellent for building intuition.
*   **Stewart's Essential Calculus (2nd ed.):** Stewart often provides very accessible explanations and relatable examples, making the initial understanding of double integrals for area particularly clear.
*   **Kreyszig, Bird, Ramana:** These advanced engineering mathematics texts will also cover double integrals for area but might also show how these calculations are embedded within more complex engineering problems, perhaps involving concepts like centroids or moments of inertia, where integrating functions other than '1' over areas is necessary. For example, calculating the moment of inertia of a planar object (electrical circuit board, for example) involves integrating $r^2 \cdot dm$, where $dm = \rho \, dA$ and $\rho$ is the mass density.

## 4. Common Pitfalls and Exam Tips

1.  **Incorrect Limits of Integration:** This is the most common mistake. Always sketch the region first! This will help you determine the correct range for $x$ (or $y$) and the functions defining the boundaries.
    *   *Exam Tip:* If a problem asks for the area between $y=f(x)$ and $y=g(x)$ from $x=a$ to $x=b$, and $f(x) \ge g(x)$ on $[a, b]$, the area is $\int_a^b (f(x) - g(x)) dx$. With double integrals, it's $\int_a^b \int_{g(x)}^{f(x)} dy \, dx$. The inner integral naturally calculates the "height" difference.
2.  **Incorrect Order of Integration:** Sometimes the region is easier to describe as Type II, but you try to set it up as Type I, or vice-versa. This can lead to much more complicated integrals or even incorrect results if you're not careful with the boundaries.
    *   *Exam Tip:* If you're struggling to set up the limits for one order, try sketching it for the other order. Does it simplify?
3.  **Confusing Area with Signed Area:** When integrating $f(x, y)$ for purposes other than area, the sign of $f$ matters. For *area*, we always integrate $1$ over the region, or ensure the integrand represents a positive width/height. If you're finding the area between two curves, $y_{top} - y_{bottom}$ or $x_{right} - x_{left}$ must be used.
4.  **Algebraic Errors during Integration:** Double-check your integration and substitution steps. These are standard calculus mistakes that can be amplified in double integrals.

**Quick Recall:**
*   Area $A = \iint_R dA$.
*   Type I: $A = \int_a^b \int_{g_1(x)}^{g_2(x)} dy \, dx$.
*   Type II: $A = \int_c^d \int_{h_1(y)}^{h_2(y)} dx \, dy$.
*   Always sketch the region to determine the limits.

## 5. Sample Questions and Answers

**Question 1 (Conceptual):** Explain why integrating the function $f(x, y) = 1$ over a region $R$ in the $xy$-plane gives the area of $R$.
**Answer:** The double integral $\iint_R f(x, y) \, dA$ represents the volume under the surface $z = f(x, y)$ and above the region $R$. When $f(x, y) = 1$, the surface is the horizontal plane $z = 1$. The volume under this plane and above $R$ is simply the area of the base region $R$ multiplied by the height, which is $1$. Thus, $\iint_R 1 \, dA = \text{Area}(R) \times 1 = \text{Area}(R)$. This is a direct generalization of the definite integral in single-variable calculus, where $\int_a^b f(x) \, dx$ calculates the area under $y=f(x)$, and if $f(x)=1$, it gives the length of the interval $[a, b]$.

**Question 2 (Exam-Oriented):** Find the area of the region bounded by the curves $y = x^3$ and $y = x$.
**Solution:**
1.  **Sketch the region:** Plot $y=x^3$ and $y=x$. They intersect where $x^3 = x$, which means $x^3 - x = 0$, so $x(x^2-1) = 0$. This gives $x = 0, x = 1, x = -1$.
    *   For $x \in [-1, 0]$, $x^3 \ge x$. For example, at $x=-0.5$, $x^3 = -0.125$ and $x = -0.5$. So $-0.125 > -0.5$. The upper curve is $y=x^3$, lower is $y=x$.
    *   For $x \in [0, 1]$, $x \ge x^3$. For example, at $x=0.5$, $x^3 = 0.125$. The upper curve is $y=x$, lower is $y=x^3$.
2.  **Identify as Type I:** The region can be split into two parts, symmetric about the origin.
    *   Part 1: From $x=-1$ to $x=0$. Upper curve $y=x^3$, lower curve $y=x$.
    *   Part 2: From $x=0$ to $x=1$. Upper curve $y=x$, lower curve $y=x^3$.
3.  **Set up the integrals:**
    *   Area of Part 1: $A_1 = \int_{-1}^0 \int_{x}^{x^3} dy \, dx$
    *   Area of Part 2: $A_2 = \int_{0}^1 \int_{x^3}^{x} dy \, dx$
4.  **Evaluate:**
    *   $A_1 = \int_{-1}^0 (x^3 - x) dx = \left[\frac{x^4}{4} - \frac{x^2}{2}\right]_{-1}^0 = (0 - 0) - \left(\frac{(-1)^4}{4} - \frac{(-1)^2}{2}\right) = -(\frac{1}{4} - \frac{1}{2}) = -(-\frac{1}{4}) = \frac{1}{4}$.
    *   $A_2 = \int_{0}^1 (x - x^3) dx = \left[\frac{x^2}{2} - \frac{x^4}{4}\right]_{0}^1 = (\frac{1}{2} - \frac{1}{4}) - (0 - 0) = \frac{1}{4}$.
5.  **Total Area:** $A = A_1 + A_2 = \frac{1}{4} + \frac{1}{4} = \frac{1}{2}$.

**Question 3 (Application Context):** A thin plate has the shape of the region bounded by $y=e^x$, $y=0$, $x=0$, and $x=1$. If the density of the plate varies according to $\rho(x,y) = x^2y$, what is the total mass of the plate? (Note: This is not strictly an area calculation, but it uses the same integral setup. The mass is $\iint_R \rho(x,y) dA$).
**Solution:**
1.  **Region:** The region is a Type I region. $x$ ranges from $0$ to $1$. For each $x$, $y$ ranges from $0$ (the x-axis) to $e^x$.
2.  **Setup Integral:** The mass $M$ is given by:
    $$ M = \int_0^1 \int_0^{e^x} x^2y \, dy \, dx $$
3.  **Evaluate:**
    *   Inner integral: $\int_0^{e^x} x^2y \, dy = x^2 \left[\frac{y^2}{2}\right]_0^{e^x} = x^2 \left(\frac{(e^x)^2}{2} - 0\right) = \frac{x^2 e^{2x}}{2}$.
    *   Outer integral: $M = \int_0^1 \frac{x^2 e^{2x}}{2} dx$.
    *   This integral requires integration by parts twice. Let $u = x^2$, $dv = e^{2x} dx$. Then $du = 2x \, dx$, $v = \frac{1}{2}e^{2x}$.
        $$ \int x^2 e^{2x} dx = \frac{x^2}{2}e^{2x} - \int \frac{1}{2}e^{2x} (2x) dx = \frac{x^2}{2}e^{2x} - \int x e^{2x} dx $$
    *   Now integrate $\int x e^{2x} dx$ by parts. Let $u=x$, $dv=e^{2x}dx$. Then $du=dx$, $v=\frac{1}{2}e^{2x}$.
        $$ \int x e^{2x} dx = \frac{x}{2}e^{2x} - \int \frac{1}{2}e^{2x} dx = \frac{x}{2}e^{2x} - \frac{1}{4}e^{2x} $$
    *   Substituting back:
        $$ \int x^2 e^{2x} dx = \frac{x^2}{2}e^{2x} - \left(\frac{x}{2}e^{2x} - \frac{1}{4}e^{2x}\right) = \frac{x^2}{2}e^{2x} - \frac{x}{2}e^{2x} + \frac{1}{4}e^{2x} $$
    *   Now evaluate the definite integral for $M$:
        $$ M = \frac{1}{2} \left[\frac{x^2}{2}e^{2x} - \frac{x}{2}e^{2x} + \frac{1}{4}e^{2x}\right]_0^1 $$
        $$ M = \frac{1}{2} \left[\left(\frac{1^2}{2}e^{2} - \frac{1}{2}e^{2} + \frac{1}{4}e^{2}\right) - \left(0 - 0 + \frac{1}{4}e^{0}\right)\right] $$
        $$ M = \frac{1}{2} \left[\left(\frac{1}{2}e^{2} - \frac{1}{2}e^{2} + \frac{1}{4}e^{2}\right) - \frac{1}{4}\right] = \frac{1}{2} \left[\frac{1}{4}e^{2} - \frac{1}{4}\right] = \frac{e^2 - 1}{8} $$
**Result:** The total mass of the plate is $\frac{e^2 - 1}{8}$. This example demonstrates how the double integral setup for area can be adapted to find other physical quantities by changing the integrand.

Keep practicing with different regions and boundary curves. The more you visualize and set up these integrals, the more comfortable you'll become!

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
