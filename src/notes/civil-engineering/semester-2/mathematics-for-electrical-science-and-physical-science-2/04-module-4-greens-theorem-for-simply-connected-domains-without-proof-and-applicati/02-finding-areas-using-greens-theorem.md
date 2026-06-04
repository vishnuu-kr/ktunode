---
title: "finding areas using 
Greens theorem"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2"
module: "Module 4: Green’s theorem (for simply connected domains, without proof) 
and applications to evaluating line integrals"
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912ce0"
status: "completed"
scrapedAt: "2026-05-20T18:37:05.838Z"
---
## Module 4: Green's Theorem and Applications to Line Integrals

### Topic: Finding Areas Using Green's Theorem

Welcome everyone! In this session, we're going to delve into a really powerful application of Green's Theorem: calculating the **area of a region** using line integrals. You've already seen how Green's Theorem relates a line integral around a closed curve to a double integral over the region enclosed by that curve. Now, we'll exploit this connection to simplify the calculation of areas.

**Connecting to Course Outcomes:**

Before we dive in, let's quickly see how this topic ties into what we're learning in this course.

*   **CO2 (Understand theoretical idea of multiple integrals and to apply them to find areas and volumes of geometrical shapes):** This is the heart of what we're doing. We're using a concept from vector calculus (line integrals) to achieve a goal traditionally tackled by double integrals (finding areas). It’s a beautiful bridge between these ideas.
*   **CO3 (Compute the derivatives and line integrals of vector functions and to learn their applications):** We’ll be heavily relying on our understanding of line integrals, specifically those involving vector fields.

Think of it this way: Sometimes, calculating an area directly using a double integral can be tricky, especially if the boundary curve is complex. Green's Theorem offers an alternative approach that might be much easier.

### Revisiting Green's Theorem (A Gentle Reminder)

Let's refresh our memory on Green's Theorem itself. For a **simply connected domain** $D$ in the $xy$-plane whose boundary $C$ is a **simple, closed, positively oriented curve**, and if $L(x,y)$ and $M(x,y)$ are continuous functions with continuous partial derivatives on an open region containing $D$, then:

$$ \oint_C (L \, dx + M \, dy) = \iint_D \left( \frac{\partial M}{\partial x} - \frac{\partial L}{\partial y} \right) dA $$

The key here is that the curve $C$ must be traversed counterclockwise (positively oriented). If it's clockwise, the sign flips.

### The Eureka Moment: Area as a Line Integral

So, how do we use this to find an area? Well, we know the area of the region $D$ is given by the double integral:

$$ \text{Area}(D) = \iint_D dA $$

Our goal is to find a pair of functions, $L(x,y)$ and $M(x,y)$, such that the integrand $\left( \frac{\partial M}{\partial x} - \frac{\partial L}{\partial y} \right)$ is exactly equal to 1. If we can do that, then Green's Theorem transforms our area integral into a line integral!

$$ \iint_D 1 \, dA = \oint_C (L \, dx + M \, dy) $$

This means, if we can find $L$ and $M$ such that $\frac{\partial M}{\partial x} - \frac{\partial L}{\frac{\partial y}{}} = 1$, then the area of the region $D$ is simply the line integral of $L \, dx + M \, dy$ around its boundary $C$.

### Finding Our Magic $L$ and $M$ Functions

There isn't just one unique pair of $L$ and $M$ that satisfies $\frac{\partial M}{\partial x} - \frac{\partial L}{\partial y} = 1$. This is where the flexibility and beauty of Green's Theorem come into play. Let's explore some common and very useful choices for $L$ and $M$.

**1. The "Standard" Area Formula:**

This is the most frequently used formula, and it's derived by setting $L = 0$ and $M = x$.
Let's check:
$L = 0 \implies \frac{\partial L}{\partial y} = 0$
$M = x \implies \frac{\partial M}{\partial x} = 1$

So, $\frac{\partial M}{\partial x} - \frac{\partial L}{\partial y} = 1 - 0 = 1$. This works perfectly!

Therefore, the area of region $D$ is:

$$ \text{Area}(D) = \oint_C x \, dy $$

**Analogy:** Imagine you're using a planimeter, a mechanical device to measure the area of a shape drawn on paper. As you trace the boundary of the shape with the device, it essentially converts the motion of tracing into a reading of the area. This line integral formula is a mathematical equivalent – we're tracing the boundary (the curve $C$) and accumulating something ($x \, dy$) that gives us the total area.

**2. Another Common Choice:**

What if we choose $L = -y$ and $M = 0$?
Let's check:
$L = -y \implies \frac{\partial L}{\partial y} = -1$
$M = 0 \implies \frac{\partial M}{\partial x} = 0$

So, $\frac{\partial M}{\partial x} - \frac{\partial L}{\partial y} = 0 - (-1) = 1$. This also works!

This leads to the area formula:

$$ \text{Area}(D) = \oint_C -y \, dx $$

**3. The "Symmetric" Formula:**

We can also take a combination of the above. If we let $L = -\frac{1}{2}y$ and $M = \frac{1}{2}x$:
$L = -\frac{1}{2}y \implies \frac{\partial L}{\partial y} = -\frac{1}{2}$
$M = \frac{1}{2}x \implies \frac{\partial M}{\partial x} = \frac{1}{2}$

So, $\frac{\partial M}{\partial x} - \frac{\partial L}{\partial y} = \frac{1}{2} - (-\frac{1}{2}) = \frac{1}{2} + \frac{1}{2} = 1$. This works too, and it's often preferred because it's symmetric.

This gives us the very popular area formula:

$$ \text{Area}(D) = \frac{1}{2} \oint_C (x \, dy - y \, dx) $$

This formula is particularly neat because it often simplifies calculations, especially when dealing with parametric curves. Think of it as averaging the first two methods, which can lead to a more balanced and sometimes simpler integral.

**Important Note on Orientation:** Remember, Green's Theorem requires the curve $C$ to be **positively oriented** (counterclockwise). If you're given a curve traversed clockwise, you'll need to reverse the sign of your result.

### How to Apply This: Step-by-Step

Finding the area using Green's Theorem generally involves these steps:

1.  **Identify the Region $D$ and its Boundary $C$:** Clearly understand what region you're trying to find the area of and what its closed boundary curve $C$ is.
2.  **Ensure $C$ is Simple, Closed, and Positively Oriented:** Green's Theorem applies to simply connected domains. Make sure your curve doesn't intersect itself and is traversed counterclockwise. If it's not, you might need to break it into pieces or adjust the sign.
3.  **Choose an Area Formula:** Select one of the area formulas derived from Green's Theorem:
    *   $A = \oint_C x \, dy$
    *   $A = \oint_C -y \, dx$
    *   $A = \frac{1}{2} \oint_C (x \, dy - y \, dx)$
    The best choice often depends on how the boundary curve $C$ is described (e.g., explicit function $y=f(x)$, parametric equations, or polar coordinates).
4.  **Parameterize the Boundary Curve $C$:** If $C$ isn't easily described as $y=f(x)$ or $x=g(y)$ over the entire curve, you'll need to parameterize it. This means finding functions $x(t)$ and $y(t)$ such that as $t$ varies from $a$ to $b$, the point $(x(t), y(t))$ traces out the curve $C$.
5.  **Convert the Line Integral:** Substitute your parameterizations $x(t)$, $y(t)$, and $dx = x'(t) \, dt$, $dy = y'(t) \, dt$ into the chosen line integral formula.
6.  **Evaluate the Definite Integral:** Compute the resulting definite integral with respect to $t$ from $a$ to $b$.

### Example Time! Let's Get Our Hands Dirty

Let's find the area of the **ellipse** given by $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$.

We know the area of an ellipse should be $\pi ab$. Let's see if Green's Theorem can give us this result.

**Step 1 & 2: Identify Region and Boundary.**
The region $D$ is the area enclosed by the ellipse. The boundary $C$ is the ellipse itself, traversed counterclockwise.

**Step 3: Choose an Area Formula.**
The parametric form of an ellipse is quite standard, so the symmetric formula $A = \frac{1}{2} \oint_C (x \, dy - y \, dx)$ often works well here.

**Step 4: Parameterize the Boundary Curve $C$.**
The standard parametric equations for an ellipse $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ are:
$x(t) = a \cos(t)$
$y(t) = b \sin(t)$
where $t$ varies from $0$ to $2\pi$. This parameterization traces the ellipse counterclockwise, which is exactly what we need.

Now, we need $dx$ and $dy$:
$dx = x'(t) \, dt = -a \sin(t) \, dt$
$dy = y'(t) \, dt = b \cos(t) \, dt$

**Step 5: Convert the Line Integral.**
Let's plug these into our chosen formula:
$A = \frac{1}{2} \oint_C (x \, dy - y \, dx)$

Substitute:
$A = \frac{1}{2} \int_0^{2\pi} [ (a \cos(t))(b \cos(t) \, dt) - (b \sin(t))(-a \sin(t) \, dt) ]$

Simplify the expression inside the integral:
$A = \frac{1}{2} \int_0^{2\pi} [ ab \cos^2(t) \, dt + ab \sin^2(t) \, dt ]$
$A = \frac{1}{2} \int_0^{2\pi} ab (\cos^2(t) + \sin^2(t)) \, dt$

Using the fundamental trigonometric identity $\cos^2(t) + \sin^2(t) = 1$:
$A = \frac{1}{2} \int_0^{2\pi} ab (1) \, dt$
$A = \frac{1}{2} ab \int_0^{2\pi} dt$

**Step 6: Evaluate the Definite Integral.**
$A = \frac{1}{2} ab [t]_0^{2\pi}$
$A = \frac{1}{2} ab (2\pi - 0)$
$A = \frac{1}{2} ab (2\pi)$
$A = \pi ab$

Voilà! We've successfully derived the area of an ellipse using Green's Theorem. Isn't that satisfying?

### Another Example: Area of a Region Bounded by Curves

Let's find the area of the region $D$ bounded by the parabola $y = x^2$ and the line $y = \sqrt{x}$.
*(Self-correction: Wait, $y=\sqrt{x}$ means $x=y^2$. The region bounded by $y=x^2$ and $x=y^2$ is a classic shape. Let's stick to that for a cleaner example, as it forms a closed loop. The region bounded by $y=x^2$ and $y=\sqrt{x}$ is implicitly the region between them. To use Green's theorem directly for area, we need a *single closed curve* bounding the region.)*

Okay, let's consider the region $D$ bounded by the curve $C_1$ given by $y=x^2$ for $0 \le x \le 1$, and the curve $C_2$ given by $x=y^2$ for $0 \le y \le 1$. These two curves intersect at $(0,0)$ and $(1,1)$. Together, they form a closed boundary $C$.

**Step 1 & 2: Identify Region and Boundary.**
The region $D$ is enclosed by $y=x^2$ (lower part) and $x=y^2$ (upper part, when viewed as $y=\sqrt{x}$). The combined boundary $C$ is $C_1$ followed by $C_2$.

**Step 3: Choose an Area Formula.**
The boundary is defined by functions. Let's try the formula $A = \oint_C x \, dy$. This looks promising because $C_1$ is $y=x^2$ ($x$ is the independent variable) and $C_2$ is $x=y^2$ ($y$ is the independent variable).

**Step 4: Parameterize the Boundary Curve $C$.**
The boundary $C$ consists of two parts:
*   $C_1$: From $(0,0)$ to $(1,1)$ along $y = x^2$. We can parameterize this as $x = t$, $y = t^2$, where $t$ goes from $0$ to $1$.
    Then $dy = 2t \, dt$.
*   $C_2$: From $(1,1)$ back to $(0,0)$ along $x = y^2$. To maintain a counterclockwise traversal, we need to go from $(1,1)$ to $(0,0)$ along this curve. Let's parameterize it as $y = t$, $x = t^2$, where $t$ goes from $1$ to $0$.
    Then $dy = 1 \, dt$.

**Step 5: Convert the Line Integral.**
$A = \oint_C x \, dy = \int_{C_1} x \, dy + \int_{C_2} x \, dy$

For $C_1$: $x=t$, $y=t^2$, $dy=2t \, dt$. As $t$ goes from $0$ to $1$.
$\int_{C_1} x \, dy = \int_0^1 (t)(2t \, dt) = \int_0^1 2t^2 \, dt$

For $C_2$: $x=t^2$, $y=t$, $dy=1 \, dt$. As $t$ goes from $1$ to $0$.
$\int_{C_2} x \, dy = \int_1^0 (t^2)(1 \, dt) = \int_1^0 t^2 \, dt$

**Step 6: Evaluate the Definite Integral.**
$A = \int_0^1 2t^2 \, dt + \int_1^0 t^2 \, dt$

Evaluate the first integral:
$\int_0^1 2t^2 \, dt = \left[ \frac{2t^3}{3} \right]_0^1 = \frac{2(1)^3}{3} - \frac{2(0)^3}{3} = \frac{2}{3}$

Evaluate the second integral:
$\int_1^0 t^2 \, dt = \left[ \frac{t^3}{3} \right]_1^0 = \frac{0^3}{3} - \frac{1^3}{3} = -\frac{1}{3}$

Combine the results:
$A = \frac{2}{3} + (-\frac{1}{3}) = \frac{2}{3} - \frac{1}{3} = \frac{1}{3}$

So, the area of the region bounded by $y=x^2$ and $x=y^2$ is $1/3$.

**A Quick Check:** You might recall from earlier calculus courses that the area between $y=f(x)$ and $y=g(x)$ from $x=a$ to $x=b$ (where $f(x) \ge g(x)$) is $\int_a^b (f(x) - g(x)) \, dx$.
In our case, the upper curve is $y=\sqrt{x}$ (or $x=y^2$) and the lower curve is $y=x^2$. The intersection points are $x=0$ and $x=1$.
So, the area is $\int_0^1 (\sqrt{x} - x^2) \, dx = \int_0^1 (x^{1/2} - x^2) \, dx$.
$\int_0^1 (x^{1/2} - x^2) \, dx = \left[ \frac{x^{3/2}}{3/2} - \frac{x^3}{3} \right]_0^1 = \left[ \frac{2}{3}x^{3/2} - \frac{x^3}{3} \right]_0^1$
$= (\frac{2}{3}(1)^{3/2} - \frac{1^3}{3}) - (0 - 0) = \frac{2}{3} - \frac{1}{3} = \frac{1}{3}$.
The results match! This gives us confidence in our Green's Theorem application.

### Why is this useful, especially for Electrical and Physical Sciences?

You might be thinking, "Why bother with line integrals for areas when double integrals or even basic integration work?" The power of Green's Theorem for area calculation often shines in more complex scenarios, especially in physics and engineering.

*   **Complex Boundaries:** When dealing with systems described by intricate curves or paths, parameterizing the boundary for a line integral might be more straightforward than setting up a double integral with complicated limits.
*   **Physical Quantities:** In physics, quantities like flux or circulation are calculated using line integrals. When these relate to the area of a region, Green's Theorem provides a direct link. For instance, if a force field is related to a physical process, the work done (a line integral) might be proportional to an area.
*   **Electromagnetism:** Concepts like magnetic flux through a loop or circulation of an electric field are naturally expressed as line integrals. If you need to relate this to the area of the loop, Green's Theorem is invaluable. For example, if you're analyzing the magnetic field produced by a current loop, the magnetic flux might be expressed as a line integral, and relating it to the area of the loop uses Green's Theorem.
*   **Fluid Dynamics:** Calculating the circulation of a fluid around a closed path (like a vortex) or the flux across a boundary can be done with line integrals. Green's Theorem helps in relating these quantities to properties of the region enclosed by the path, such as average velocity or vorticity.

Essentially, Green's Theorem allows us to switch perspectives. If integrating along the boundary is easier than integrating over the area, we use Green's Theorem. This is a core theme in multivariable calculus and vector analysis—finding the most efficient way to solve a problem.

### Key Takeaways for Exams

*   **Know the three main area formulas:** $A = \oint_C x \, dy$, $A = \oint_C -y \, dx$, and $A = \frac{1}{2} \oint_C (x \, dy - y \, dx)$. The symmetric one is often the most versatile.
*   **Master parameterization:** The ability to correctly parameterize curves, especially closed ones, is crucial for evaluating line integrals.
*   **Check the orientation:** Always ensure the curve is counterclockwise. If it's clockwise, remember to flip the sign of your result.
*   **Recognize when it's useful:** Think about problems where the boundary is simple to describe parametrically, but the region itself might have complicated limits for a double integral.

### Summary

Green's Theorem provides a remarkable tool for calculating the area of a simply connected region $D$ by evaluating a line integral around its positively oriented boundary $C$. By choosing specific forms for the vector field $(L, M)$ such that $\frac{\partial M}{\partial x} - \frac{\partial L}{\partial y} = 1$, we can transform the double integral $\iint_D dA$ into a line integral $\oint_C (L \, dx + M \, dy)$. The most common formulas are $A = \oint_C x \, dy$, $A = \oint_C -y \, dx$, and the symmetric $A = \frac{1}{2} \oint_C (x \, dy - y \, dx)$. This technique is powerful, especially in physics and engineering, for dealing with complex boundaries and relating line integrals to enclosed areas.

---

### Sample Questions and Answers

**1. Conceptual Question:**
State and explain the purpose of Green's Theorem in finding the area of a planar region. Mention at least two different line integral formulas that can be used for this purpose.

**Answer:**
Green's Theorem relates a line integral around a simple, closed, positively oriented curve $C$ in the $xy$-plane to a double integral over the region $D$ enclosed by $C$. Its purpose in finding the area of a planar region $D$ is to transform the double integral of $1$ over $D$ (which represents the area, $\iint_D 1 \, dA$) into a line integral over the boundary $C$ of $D$. This is achieved by finding functions $L(x,y)$ and $M(x,y)$ such that $\frac{\partial M}{\partial x} - \frac{\partial L}{\partial y} = 1$.

Two common line integral formulas for the area of region $D$ with boundary $C$ are:
a) $A = \oint_C x \, dy$ (Here, $L=0$ and $M=x$)
b) $A = \frac{1}{2} \oint_C (x \, dy - y \, dx)$ (Here, $L = -\frac{1}{2}y$ and $M = \frac{1}{2}x$)

**2. Application Question:**
Find the area of the region enclosed by the circle $x^2 + y^2 = R^2$ using Green's Theorem.

**Answer:**
The region $D$ is a disk of radius $R$, and its boundary $C$ is the circle $x^2 + y^2 = R^2$. We need to parameterize the circle.
Let's use the formula $A = \frac{1}{2} \oint_C (x \, dy - y \, dx)$.

**Parameterization of the circle:**
$x(t) = R \cos(t)$
$y(t) = R \sin(t)$
for $t \in [0, 2\pi]$. This is a counterclockwise traversal.

**Derivatives:**
$dx = x'(t) \, dt = -R \sin(t) \, dt$
$dy = y'(t) \, dt = R \cos(t) \, dt$

**Substitute into the formula:**
$A = \frac{1}{2} \int_0^{2\pi} [ (R \cos(t))(R \cos(t) \, dt) - (R \sin(t))(-R \sin(t) \, dt) ]$
$A = \frac{1}{2} \int_0^{2\pi} [ R^2 \cos^2(t) \, dt + R^2 \sin^2(t) \, dt ]$
$A = \frac{1}{2} \int_0^{2\pi} R^2 (\cos^2(t) + \sin^2(t)) \, dt$
$A = \frac{1}{2} \int_0^{2\pi} R^2 \, dt$

**Evaluate the integral:**
$A = \frac{1}{2} R^2 [t]_0^{2\pi}$
$A = \frac{1}{2} R^2 (2\pi - 0)$
$A = \pi R^2$

This matches the well-known formula for the area of a circle.

**3. Practicality/Pitfall Question:**
A student tries to find the area of a region bounded by a curve $C$ using Green's Theorem and gets a negative value for the area. What is the most likely reason for this error, and how should they correct it?

**Answer:**
The most likely reason for obtaining a negative area is that the boundary curve $C$ was traversed in the **clockwise direction** instead of the required counterclockwise (positively oriented) direction.

Green's Theorem, as stated for area calculation, requires $C$ to be positively oriented for the area to be positive. If $C$ is traversed clockwise, the line integral will result in the negative of the actual area.

**Correction:**
The student should simply **reverse the sign** of their calculated result. If they obtained $-A_{calculated}$, the actual area is $-(-A_{calculated}) = A_{calculated}$. Alternatively, they could re-parameterize the curve to ensure counterclockwise traversal or swap the roles of $L$ and $M$ appropriately if using a different formula, but reversing the sign of the final answer is the most direct fix if the magnitude is correct.
