---
title: "Reversing the order of integration in double integrals"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 2"
module: "Module 2: Double integrals"
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f982f"
status: "completed"
scrapedAt: "2026-05-23T16:08:06.135Z"
---
# Mathematics for Electrical Science and Physical Science - 2

## Module 2: Double Integrals

### Topic: Reversing the Order of Integration in Double Integrals

Welcome back, everyone! In our journey through the fascinating world of multivariable calculus, we've already established the power of double integrals to calculate areas, volumes, and even quantities like mass and center of gravity. Today, we're going to tackle a technique that can often simplify these calculations significantly: **reversing the order of integration**.

Think about it this way: sometimes a problem might be much easier to solve if you approach it from a different angle, right? This is exactly what reversing the order of integration allows us to do with double integrals. It's not just a neat trick; it's a fundamental understanding of how the region of integration and the integrand interact.

#### Why Reverse the Order of Integration?

You might be asking, "Why would I ever want to change the order of integration? Isn't it already set up for a reason?" Absolutely! The initial order of integration, say $\int_a^b \int_{g_1(x)}^{g_2(x)} f(x, y) \, dy \, dx$, is often determined by how we've described our region of integration $R$. However, there are several compelling reasons why we might want to switch to $\int_c^d \int_{h_1(y)}^{h_2(y)} f(x, y) \, dx \, dy$:

1.  **Simplifying the Integrand:** The function $f(x, y)$ itself might be much easier to integrate with respect to $x$ first, or with respect to $y$ first. For instance, if you have something like $e^{y^2}$, integrating with respect to $y$ directly is notoriously difficult (it involves the error function, which isn't elementary). However, if you can reverse the order, you might find $x e^{y^2}$, which is a breeze to integrate with respect to $x$.
2.  **Simplifying the Limits of Integration:** The boundaries of the region $R$ might be defined in a way that makes one order of integration lead to complicated, perhaps transcendental, limits. Switching the order can sometimes transform these complex limits into simpler constants or polynomials.
3.  **Evaluating the Integral:** Sometimes, even if the integrand and limits are manageable in both orders, one order might simply lead to a more straightforward evaluation.

This technique is especially crucial when dealing with areas and volumes of regions defined by curves, as highlighted in **Course Outcome 2 (CO2)**: "Understand theoretical idea of multiple integrals and to apply them to find areas and volumes of geometrical shapes." By mastering this, we gain flexibility in our approach to these geometric calculations.

#### The Core Idea: Understanding the Region of Integration

The absolute key to reversing the order of integration lies in understanding the region $R$ over which we are integrating. A double integral $\iint_R f(x, y) \, dA$ represents the "volume" under the surface $z = f(x, y)$ and above the region $R$ in the $xy$-plane. The order of integration ($dy \, dx$ or $dx \, dy$) tells us how we're "sweeping" across this region $R$.

*   **Integration order $dy \, dx$:** We integrate with respect to $y$ first, treating $x$ as a constant. This means we're drawing vertical strips within the region $R$. For a fixed $x$, $y$ goes from some lower boundary $y = g_1(x)$ to an upper boundary $y = g_2(x)$. Then, we sum up the results of these vertical strips as $x$ varies from a constant $a$ to a constant $b$.
*   **Integration order $dx \, dy$:** We integrate with respect to $x$ first, treating $y$ as a constant. This means we're drawing horizontal strips within the region $R$. For a fixed $y$, $x$ goes from some left boundary $x = h_1(y)$ to a right boundary $x = h_2(y)$. Then, we sum up the results of these horizontal strips as $y$ varies from a constant $c$ to a constant $d$.

Remember **Fubini's Theorem**? It states that if $f(x, y)$ is continuous on a rectangle $R = [a, b] \times [c, d]$, then $\iint_R f(x, y) \, dA = \int_a^b \int_c^d f(x, y) \, dy \, dx = \int_c^d \int_a^b f(x, y) \, dx \, dy$. For more general regions, the theorem also holds, but the limits of integration become functions of the other variable. The crucial takeaway is that the *value* of the double integral is independent of the order of integration, as long as the region $R$ is correctly described for each order.

#### Steps to Reverse the Order of Integration

Let's outline a systematic approach. This is where paying close attention to the geometry of the region is paramount.

**Step 1: Sketch the Region of Integration ($R$)**
This is arguably the most important step. You need to visualize the region $R$ described by the given limits.
*   If the limits are of the form $\int_a^b \int_{g_1(x)}^{g_2(x)} f(x, y) \, dy \, dx$, the region is bounded by the vertical lines $x=a$ and $x=b$, and the curves $y=g_1(x)$ and $y=g_2(x)$.
*   If the limits are of the form $\int_c^d \int_{h_1(y)}^{h_2(y)} f(x, y) \, dx \, dy$, the region is bounded by the horizontal lines $y=c$ and $y=d$, and the curves $x=h_1(y)$ and $x=h_2(y)$.

**Step 2: Identify the Bounds for the New Order**
Once you have a clear sketch of $R$:
*   If you're switching from $dy \, dx$ to $dx \, dy$:
    *   Determine the range of $y$ values that cover the entire region $R$. These will be your new constant limits for $y$, say from $c$ to $d$.
    *   For a *fixed* value of $y$ within this range $[c, d]$, determine the leftmost and rightmost boundaries of $R$ in terms of $x$. These will be your new limits for $x$, say $x = h_1(y)$ (left) and $x = h_2(y)$ (right).
*   If you're switching from $dx \, dy$ to $dy \, dx$:
    *   Determine the range of $x$ values that cover the entire region $R$. These will be your new constant limits for $x$, say from $a$ to $b$.
    *   For a *fixed* value of $x$ within this range $[a, b]$, determine the bottommost and topmost boundaries of $R$ in terms of $y$. These will be your new limits for $y$, say $y = g_1(x)$ (bottom) and $y = g_2(x)$ (top).

**Step 3: Rewrite the Integral**
With the new limits identified, rewrite the double integral in the desired order.

**Step 4: Evaluate the New Integral**
Proceed to evaluate the integral with the new order and limits.

#### Example 1: A Simple Area Calculation

Let's find the area of the region $R$ bounded by $y = x^2$ and $y = \sqrt{x}$.
We can set this up as an integral in the order $dy \, dx$.
First, let's find the intersection points of $y = x^2$ and $y = \sqrt{x}$.
$x^2 = \sqrt{x} \implies x^4 = x \implies x^4 - x = 0 \implies x(x^3 - 1) = 0$.
So, $x=0$ or $x=1$.
When $x=0$, $y=0$. When $x=1$, $y=1$. The intersection points are $(0,0)$ and $(1,1)$.

Now, let's sketch the region. Between $x=0$ and $x=1$, the curve $y = \sqrt{x}$ is above $y = x^2$.
So, the area can be calculated as:
$A = \int_0^1 \int_{x^2}^{\sqrt{x}} dy \, dx$

Let's evaluate this first, as a check:
$A = \int_0^1 [y]_{x^2}^{\sqrt{x}} \, dx = \int_0^1 (\sqrt{x} - x^2) \, dx$
$A = \int_0^1 (x^{1/2} - x^2) \, dx = \left[\frac{2}{3}x^{3/2} - \frac{1}{3}x^3\right]_0^1$
$A = \left(\frac{2}{3}(1)^{3/2} - \frac{1}{3}(1)^3\right) - (0 - 0) = \frac{2}{3} - \frac{1}{3} = \frac{1}{3}$.

Now, let's reverse the order of integration to $dx \, dy$.
**Step 1: Sketch the Region.** We already did this! It's the region between $y=x^2$ and $y=\sqrt{x}$ from $x=0$ to $x=1$.

**Step 2: Identify Bounds for $dx \, dy$.**
To do this, we need to express our boundary curves as $x$ in terms of $y$.
The curve $y = x^2$ becomes $x = \sqrt{y}$ (since $x \ge 0$ in our region).
The curve $y = \sqrt{x}$ becomes $x = y^2$.
Now, consider horizontal strips. What is the range of $y$ values for the entire region? Looking at our sketch, $y$ varies from $0$ to $1$. So, our new constant limits for $y$ are $0$ and $1$.
For a fixed $y$ between $0$ and $1$, what is the left boundary and the right boundary for $x$? The curve $x = y^2$ is to the left, and $x = \sqrt{y}$ is to the right.
So, the new limits are $y^2 \le x \le \sqrt{y}$.

**Step 3: Rewrite the Integral.**
$A = \int_0^1 \int_{y^2}^{\sqrt{y}} dx \, dy$

**Step 4: Evaluate the New Integral.**
$A = \int_0^1 [x]_{y^2}^{\sqrt{y}} \, dy = \int_0^1 (\sqrt{y} - y^2) \, dy$
$A = \int_0^1 (y^{1/2} - y^2) \, dy = \left[\frac{2}{3}y^{3/2} - \frac{1}{3}y^3\right]_0^1$
$A = \left(\frac{2}{3}(1)^{3/2} - \frac{1}{3}(1)^3\right) - (0 - 0) = \frac{2}{3} - \frac{1}{3} = \frac{1}{3}$.

See? We got the same result! This is a perfect illustration of **CO2**, where we're using double integrals to find the area. The ability to switch the order gives us more options, especially if one of the forms proves difficult. This problem aligns with the understanding aspect of **K3** knowledge level.

#### Example 2: Making an Intractable Integral Tractable

Consider the integral $I = \int_0^2 \int_{\sqrt{x}}^2 e^{y^3} \, dy \, dx$.
If we try to integrate $e^{y^3}$ with respect to $y$ first, we run into trouble. As mentioned earlier, the antiderivative of $e^{y^3}$ is not an elementary function. This is a strong signal that we should try reversing the order of integration.

**Step 1: Sketch the Region.**
The limits are $0 \le x \le 2$ and $\sqrt{x} \le y \le 2$.
The boundaries are:
*   $x = 0$ (the $y$-axis)
*   $x = 2$ (a vertical line)
*   $y = \sqrt{x}$ (which is $y^2 = x$, or $x=y^2$, for $y \ge 0$)
*   $y = 2$ (a horizontal line)

Let's sketch this.
The region is bounded by the $y$-axis on the left, the line $x=2$ on the right. The lower boundary for $y$ is $y=\sqrt{x}$, and the upper boundary is $y=2$.
When $x=0$, $y$ goes from $\sqrt{0}=0$ to $2$.
When $x=2$, $y$ goes from $\sqrt{2}$ to $2$.
The intersection of $y=\sqrt{x}$ and $y=2$ is when $2=\sqrt{x}$, so $x=4$. But our region is only up to $x=2$.
The intersection of $x=2$ and $y=\sqrt{x}$ is $(2, \sqrt{2})$.
The intersection of $x=0$ and $y=\sqrt{x}$ is $(0, 0)$.
The intersection of $x=0$ and $y=2$ is $(0, 2)$.
The intersection of $x=2$ and $y=2$ is $(2, 2)$.
So, the region is bounded by $x=0$, $y=2$, and $x=y^2$ (since $y=\sqrt{x}$ means $x=y^2$ for $y \ge 0$).
Crucially, the upper limit for $y$ is $y=2$, and the lower limit is $y=\sqrt{x}$. This means $y$ starts from $\sqrt{x}$ and goes *up* to $2$. The $x$ limits are $0$ to $2$.

Let's draw it: It's a region enclosed by the $y$-axis ($x=0$), the horizontal line $y=2$, and the curve $x=y^2$ (parabola opening to the right).
Wait, is $x=y^2$ the upper or lower bound in the original integral? The integral is $\int_0^2 \int_{\sqrt{x}}^2 e^{y^3} \, dy \, dx$.
This means for a fixed $x$ between $0$ and $2$, $y$ goes from $\sqrt{x}$ up to $2$.
The sketch should show vertical strips. For $x=0$, $y$ is from $0$ to $2$. For $x=2$, $y$ is from $\sqrt{2}$ to $2$.
The region is bounded by $x=0$, $y=2$, and $y=\sqrt{x}$ (or $x=y^2$).
The point $(2, \sqrt{2})$ is on $y=\sqrt{x}$ and $x=2$.
The region is actually bounded by $x=0$, $y=2$, and the curve $x=y^2$. Let's be precise.
The outer limits are $x=0$ to $x=2$. The inner limits are $y=\sqrt{x}$ to $y=2$.
This means $y$ is always greater than or equal to $\sqrt{x}$.
When $x=0$, $y$ starts at $0$. When $x=2$, $y$ starts at $\sqrt{2}$.
The region looks like a curvilinear triangle with vertices $(0,0)$, $(0,2)$, and $(2,2)$. The curve $y=\sqrt{x}$ or $x=y^2$ forms the lower-left boundary.

Let's reconsider the description for $dx \, dy$:
We need to find the range of $y$ first. Looking at our sketch, $y$ goes from $0$ to $2$. So, the outer limits for $y$ are $c=0$ and $d=2$.
Now, for a fixed $y$, we need to find the range of $x$.
The left boundary is always $x=0$.
The right boundary is defined by $y=\sqrt{x}$, which we rewrite as $x=y^2$.
So, for a fixed $y$, $x$ goes from $0$ to $y^2$.

**Step 2: Identify Bounds for $dx \, dy$.**
*   Range of $y$: $0 \le y \le 2$.
*   Range of $x$: For a fixed $y$, $0 \le x \le y^2$.

**Step 3: Rewrite the Integral.**
$I = \int_0^2 \int_0^{y^2} e^{y^3} \, dx \, dy$

**Step 4: Evaluate the New Integral.**
First, integrate with respect to $x$. Since $e^{y^3}$ is treated as a constant with respect to $x$:
$\int_0^{y^2} e^{y^3} \, dx = [x e^{y^3}]_0^{y^2} = (y^2 \cdot e^{y^3}) - (0 \cdot e^{y^3}) = y^2 e^{y^3}$.

Now, integrate this result with respect to $y$:
$I = \int_0^2 y^2 e^{y^3} \, dy$.
This looks like a substitution problem. Let $u = y^3$. Then $du = 3y^2 \, dy$, which means $y^2 \, dy = \frac{1}{3} \, du$.
We also need to change the limits of integration:
When $y=0$, $u = 0^3 = 0$.
When $y=2$, $u = 2^3 = 8$.

So, the integral becomes:
$I = \int_0^8 e^u \left(\frac{1}{3} \, du\right) = \frac{1}{3} \int_0^8 e^u \, du$
$I = \frac{1}{3} [e^u]_0^8 = \frac{1}{3} (e^8 - e^0) = \frac{1}{3} (e^8 - 1)$.

And there you have it! We transformed an integral that was practically impossible to solve in its original form into one that yields a neat result using a standard substitution. This demonstrates the power of choosing the right integration order, which is essential for **CO2** and **CO1** (applying calculus in problems). This is a typical exam question scenario where recognizing the need to reverse order is key.

#### Example 3: Region with More Complex Boundaries

Let's consider the integral $\iint_R x y \, dA$ where $R$ is the region bounded by $y=x$ and $y=x^2$.
We already found the intersection points to be $(0,0)$ and $(1,1)$.

**Case 1: Order $dy \, dx$**
For $0 \le x \le 1$, $y$ goes from $x^2$ (lower) to $x$ (upper).
$\int_0^1 \int_{x^2}^x xy \, dy \, dx$
$\int_0^1 \left[ \frac{1}{2} xy^2 \right]_{x^2}^x \, dx = \int_0^1 \frac{1}{2} x(x^2 - (x^2)^2) \, dx$
$= \int_0^1 \frac{1}{2} x(x^2 - x^4) \, dx = \int_0^1 \frac{1}{2} (x^3 - x^5) \, dx$
$= \frac{1}{2} \left[ \frac{1}{4}x^4 - \frac{1}{6}x^6 \right]_0^1 = \frac{1}{2} \left( \frac{1}{4} - \frac{1}{6} \right) = \frac{1}{2} \left( \frac{3-2}{12} \right) = \frac{1}{24}$.

**Case 2: Order $dx \, dy$**
We need to rewrite the boundaries: $x = y$ and $x = \sqrt{y}$.
For $0 \le y \le 1$, $x$ goes from $y$ (left) to $\sqrt{y}$ (right).
$\int_0^1 \int_y^{\sqrt{y}} xy \, dx \, dy$
$\int_0^1 \left[ \frac{1}{2} x^2 y \right]_y^{\sqrt{y}} \, dy = \int_0^1 \frac{1}{2} y ((\sqrt{y})^2 - y^2) \, dy$
$= \int_0^1 \frac{1}{2} y (y - y^2) \, dy = \int_0^1 \frac{1}{2} (y^2 - y^3) \, dy$
$= \frac{1}{2} \left[ \frac{1}{3}y^3 - \frac{1}{4}y^4 \right]_0^1 = \frac{1}{2} \left( \frac{1}{3} - \frac{1}{4} \right) = \frac{1}{2} \left( \frac{4-3}{12} \right) = \frac{1}{24}$.

Again, the same answer. This kind of problem, involving finding the area or a related quantity of a region defined by simple curves, is very common. It tests your ability to sketch and correctly set up the limits for both integration orders. This is core to **CO2** and understanding **K3**.

#### Dealing with Regions Requiring Multiple Integrals

Sometimes, the region $R$ is such that if you try to describe it with horizontal strips (for $dx \, dy$), you need to split the region into two parts. Or, similarly, vertical strips (for $dy \, dx$) might require splitting. This happens when the "top" or "bottom" boundary (or "left" or "right" boundary) changes its definition within the range of the outer variable.

For instance, if $y$ goes from $0$ to $2$, but for $0 \le y \le 1$, $x$ goes from $0$ to $y$, and for $1 \le y \le 2$, $x$ goes from $0$ to $2-y$. In such cases, you'll need to split your single double integral into two double integrals, one for each part of the region, and then sum the results.

Let's say you're given an integral in the form $\int_0^2 \int_{f_1(x)}^{f_2(x)} g(x,y) \, dy \, dx$, and when you sketch the region, you realize that to describe it with $dx \, dy$, you need to split it.

1.  **Sketch the region $R$**.
2.  **Identify the range of $y$ values**. Let's say $y$ spans from $c$ to $d$.
3.  **Examine the boundaries for $x$ as functions of $y$**. You'll find that for some range of $y$, say $c \le y \le y_0$, the left boundary is $x=h_1(y)$ and the right is $x=h_2(y)$. For another range, $y_0 \le y \le d$, the left boundary might be $x=h_3(y)$ and the right $x=h_4(y)$.
4.  **Split the integral**. The original integral will be rewritten as:
    $\int_c^{y_0} \int_{h_1(y)}^{h_2(y)} g(x,y) \, dx \, dy + \int_{y_0}^d \int_{h_3(y)}^{h_4(y)} g(x,y) \, dx \, dy$.

This is essential for accurately representing the region and correctly applying the reversal of integration. It also connects to **CO1** and **CO4** when these integrals are used in applications involving physical quantities or vector fields.

#### Common Pitfalls and Tips

*   **Sketching is Crucial:** I cannot emphasize this enough. A good sketch saves you from making many errors.
*   **Check your Boundary Expressions:** When rewriting curves like $y = \sqrt{x}$ as $x = y^2$, remember the domain and range of the original function. For $y=\sqrt{x}$, we implicitly assume $y \ge 0$.
*   **Range of Outer Variable:** When reversing from $dy \, dx$ to $dx \, dy$, the $y$ limits will typically be constants derived from the minimum and maximum $y$ values in the region. Similarly, for $dx \, dy$ to $dy \, dx$, the $x$ limits will be constants from the region's $x$ extent.
*   **Inner Limits as Functions:** The inner limits of integration *must* be functions of the *other* variable.
*   **Don't Forget the Integrand:** When you switch orders, the integrand $f(x, y)$ stays the same.
*   **Relating to Textbook Concepts:** The approaches described here are thoroughly covered in sections dealing with double integrals and their applications in Anton, Biven, & Davis (Chapter 16), Weir, Hass, & Heil (Chapter 15), and Stewart (Chapters 14 and 15), depending on the specific edition. Kreyszig and Bird's books also provide excellent foundational and applied examples.

#### Connection to Course Outcomes

Let's explicitly link this topic back to our course objectives:

*   **CO1: Compute the partial and total derivatives and maxima and minima of multivariable functions and to apply in engineering problems.** While this topic is primarily about integration, the ability to correctly describe and manipulate regions is fundamental to applying multivariable calculus. For example, finding the center of mass of an object (which involves integrals) requires a good understanding of the region of integration. The problem-solving skills used here are transferable.
*   **CO2: Understand theoretical idea of multiple integrals and to apply them to find areas and volumes of geometrical shapes.** This is the most direct link. Reversing the order of integration is a powerful technique specifically for calculating areas and volumes. It gives us flexibility in how we set up these calculations and allows us to solve problems that might otherwise be intractable. The examples we worked through are perfect illustrations.
*   **CO3: Compute the derivatives and line integrals of vector functions and to learn their applications.** This might seem less directly related at first glance. However, many applications in physics and engineering that involve line integrals or vector fields will also require setting up and evaluating integrals over regions. Understanding how to manipulate integration orders is a general mathematical tool that supports these advanced topics.
*   **CO4: Apply the concepts of surface and volume integrals and to learn their inter-relations and applications.** Similar to CO3, the foundational skill of setting up and evaluating double integrals over regions, including the flexibility gained by reversing the order, is a building block for understanding triple integrals and surface integrals, which are crucial for volumetric calculations and field theories in physics and electrical science.

Remember, mastering the reversal of integration order isn't just about getting the right answer; it's about developing a deep intuition for how double integrals represent geometric and physical quantities and how different perspectives can simplify problem-solving.

---

### Sample Questions with Answers

**Question 1 (Conceptual):**
Explain why reversing the order of integration can be beneficial in evaluating double integrals. Provide at least two reasons.

**Answer:**
Reversing the order of integration can be beneficial for several reasons:
1.  **Simplifying the Integrand:** The function $f(x, y)$ might be easier to integrate with respect to $x$ first than with respect to $y$, or vice-versa. For example, an integrand like $e^{y^2}$ is difficult to integrate with respect to $y$, but if the region allows, reversing the order might lead to an integrand like $x e^{y^2}$ which is easily integrated with respect to $x$.
2.  **Simplifying the Limits of Integration:** The given limits of integration might be complicated (e.g., involving transcendental functions), making the evaluation difficult. By sketching the region and reversing the order, the new limits might be simpler constants or polynomials, leading to a more straightforward calculation.

**Question 2 (Exam-Oriented - Calculation):**
Evaluate the integral $\int_0^1 \int_y^1 \cos(x^2) \, dx \, dy$ by reversing the order of integration.

**Answer:**
The given integral is $I = \int_0^1 \int_y^1 \cos(x^2) \, dx \, dy$.
The integrand $\cos(x^2)$ is difficult to integrate with respect to $x$. Let's reverse the order.

**Step 1: Sketch the Region.**
The limits are $0 \le y \le 1$ and $y \le x \le 1$.
This describes a region bounded by the horizontal line $y=0$, the horizontal line $y=1$, the line $x=1$, and the line $y=x$.
Plotting these, we see the region is a triangle with vertices at $(0,0)$, $(1,1)$, and $(1,0)$.

**Step 2: Identify Bounds for $dy \, dx$.**
To reverse the order to $dy \, dx$, we need to consider vertical strips.
The range of $x$ values covering the region is $0 \le x \le 1$.
For a fixed $x$ between $0$ and $1$, $y$ goes from the lower boundary $y=0$ up to the upper boundary $y=x$.

**Step 3: Rewrite the Integral.**
So, the integral in the order $dy \, dx$ is:
$I = \int_0^1 \int_0^x \cos(x^2) \, dy \, dx$

**Step 4: Evaluate the New Integral.**
First, integrate with respect to $y$:
$\int_0^x \cos(x^2) \, dy = [\cos(x^2) \cdot y]_0^x = \cos(x^2) \cdot x - \cos(x^2) \cdot 0 = x \cos(x^2)$.

Now, integrate with respect to $x$:
$I = \int_0^1 x \cos(x^2) \, dx$.
This can be solved using substitution. Let $u = x^2$. Then $du = 2x \, dx$, so $x \, dx = \frac{1}{2} \, du$.
When $x=0$, $u = 0^2 = 0$.
When $x=1$, $u = 1^2 = 1$.

The integral becomes:
$I = \int_0^1 \cos(u) \left(\frac{1}{2} \, du\right) = \frac{1}{2} \int_0^1 \cos(u) \, du$
$I = \frac{1}{2} [\sin(u)]_0^1 = \frac{1}{2} (\sin(1) - \sin(0)) = \frac{1}{2} \sin(1)$.

Therefore, the value of the integral is $\frac{1}{2} \sin(1)$.

**Question 3 (Conceptual & Calculation):**
Consider the integral $\iint_R e^{-x^2} \, dA$ where $R$ is the region bounded by $y=0$, $y=x$, and $x=1$. Evaluate this integral by reversing the order of integration.

**Answer:**
The integral is $\iint_R e^{-x^2} \, dA$. The integrand $e^{-x^2}$ is difficult to integrate directly with respect to $x$ without using the error function. Let's try reversing the order.

**Step 1: Sketch the Region.**
The region $R$ is bounded by $y=0$ (the x-axis), $y=x$ (a line through the origin with slope 1), and $x=1$ (a vertical line).
This forms a right-angled triangle with vertices at $(0,0)$, $(1,0)$, and $(1,1)$.

**Step 2: Identify Bounds for $dx \, dy$.**
To reverse the order to $dx \, dy$, we need horizontal strips.
The range of $y$ values covering the region is $0 \le y \le 1$.
For a fixed $y$ between $0$ and $1$:
The left boundary is $y=x$, which we rewrite as $x=y$.
The right boundary is $x=1$.
So, for a fixed $y$, $x$ ranges from $y$ to $1$.

**Step 3: Rewrite the Integral.**
The integral in the order $dx \, dy$ is:
$I = \int_0^1 \int_y^1 e^{-x^2} \, dx \, dy$

**Step 4: Evaluate the New Integral.**
First, integrate with respect to $x$. This is where we might think we're stuck again because $e^{-x^2}$ is not elementary. However, let's be careful. The integral is with respect to $x$, and our integrand involves $x$.
Let's re-examine the original setup. The original integral *was* $\int_0^1 \int_y^1 e^{-x^2} dx dy$. The limits $y \le x \le 1$ mean we are integrating with respect to $x$ first, and $y$ limits are $0 \le y \le 1$.
The problem statement asks to evaluate $\iint_R e^{-x^2} \, dA$ by reversing the order. So, if the original integral was, say, in the $dy \, dx$ form, we would reverse it.

Let's assume the original setup, if given, was perhaps from a slightly different problem or that we are asked to *find* the integral that *can* be evaluated this way. If the problem meant to give it in $dy \, dx$ form, it would be:
If the region is defined by $0 \le x \le 1$ and $0 \le y \le x$, the integral would be $\int_0^1 \int_0^x e^{-x^2} \, dy \, dx$.

Let's evaluate *that* one by reversing the order:
Original: $I = \int_0^1 \int_0^x e^{-x^2} \, dy \, dx$.
To reverse the order:
Sketch: Vertices $(0,0)$, $(1,0)$, $(1,1)$.
Bounds for $dx \, dy$: $0 \le y \le 1$. For fixed $y$, $x$ goes from $y$ to $1$.
Reversed integral: $I = \int_0^1 \int_y^1 e^{-x^2} \, dx \, dy$.

Now, this form $\int_0^1 \int_y^1 e^{-x^2} \, dx \, dy$ is where we might get confused if we expect the $e^{-x^2}$ to become easy. It doesn't.

Let's consider a related problem where reversal *does* help with $e^{-x^2}$.
Suppose the integral was $I = \int_0^1 \int_x^1 e^{-y^2} \, dy \, dx$.
Region: $0 \le x \le 1$, $x \le y \le 1$. Triangle with vertices $(0,0), (0,1), (1,1)$.
To reverse order:
Bounds for $dx \, dy$: $0 \le y \le 1$. For fixed $y$, $x$ goes from $0$ to $y$.
Reversed integral: $I = \int_0^1 \int_0^y e^{-y^2} \, dx \, dy$.
Evaluate: $\int_0^y e^{-y^2} \, dx = [x e^{-y^2}]_0^y = y e^{-y^2}$.
Now integrate: $\int_0^1 y e^{-y^2} \, dy$. Let $u = -y^2$, $du = -2y \, dy$.
$y \, dy = -\frac{1}{2} \, du$.
When $y=0, u=0$. When $y=1, u=-1$.
$I = \int_0^{-1} e^u (-\frac{1}{2} \, du) = -\frac{1}{2} \int_0^{-1} e^u \, du = -\frac{1}{2} [e^u]_0^{-1} = -\frac{1}{2} (e^{-1} - e^0) = -\frac{1}{2} (e^{-1} - 1) = \frac{1}{2} (1 - e^{-1})$.

This last example highlights how the integrand might change structure depending on which variable is 'inside' the exponential. The question as posed initially (with $e^{-x^2}$ and the triangle $(0,0), (1,0), (1,1)$) is a bit of a trick if it expects an elementary solution after reversal. However, if the question implied the integral was originally $\int_0^1 \int_0^x e^{-y^2} \, dy \, dx$, then reversal would indeed help. For the question as written (with $e^{-x^2}$ and region $0 \le y \le x, 0 \le x \le 1$), reversing order gives $\int_0^1 \int_y^1 e^{-x^2} \, dx \, dy$, which still has $e^{-x^2}$ and is not easily evaluated.

A more typical problem for $e^{-x^2}$ would be:
Evaluate $\int_0^1 \int_x^1 e^{-y^2} \, dy \, dx$. (This is the one solved above).
**Answer for the typical $e^{-y^2}$ problem:** $\frac{1}{2}(1 - e^{-1})$.

The key takeaway from this is to always check if the reversed integral is actually *simpler* to evaluate. Sometimes, the specific arrangement of the integrand and region dictates whether reversing order provides a simplification. For $\iint_R e^{-x^2} \, dA$ with $R$ being the triangle $(0,0),(1,0),(1,1)$, if the integral was set up as $\int_0^1 \int_0^x e^{-x^2} \, dy \, dx$, reversing gives $\int_0^1 \int_y^1 e^{-x^2} \, dx \, dy$. Neither is straightforward. But if it was $\int_0^1 \int_x^1 e^{-y^2} \, dy \, dx$, reversing yields $\int_0^1 \int_0^y e^{-y^2} \, dx \, dy$, which *is* solvable. This illustrates **CO2** and highlights the importance of the integrand's form.
