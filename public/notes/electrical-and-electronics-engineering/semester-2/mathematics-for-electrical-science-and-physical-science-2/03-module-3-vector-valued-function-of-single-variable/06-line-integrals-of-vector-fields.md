---
title: "Line integrals of vector fields"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 2"
module: "Module 3: Vector valued function of single variable "
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f983b"
status: "completed"
scrapedAt: "2026-05-23T16:08:15.168Z"
---
## Module 3: Vector-Valued Functions of a Single Variable - Line Integrals of Vector Fields

Welcome, everyone! Today, we're diving into a topic that’s absolutely crucial for understanding how forces, flows, and fields behave in the real world, especially in electrical science and physical science. We're going to explore **Line Integrals of Vector Fields**. This concept builds directly upon our understanding of vector-valued functions and paths, and it’s the foundation for some very powerful theorems later on, like Green's Theorem and Stokes' Theorem. Remember, our aim here, as outlined in **CO3**, is to "Compute the derivatives and line integrals of vector functions and to learn their applications." This topic is precisely where we start applying those vector functions to real-world scenarios.

### 1. What is a Vector Field Anyway?

Before we talk about integrating along a line, let's get a firm grip on what a **vector field** is. Imagine a landscape, say a river. At every point in that river, there's a certain velocity of the water. This velocity has both magnitude (how fast it's flowing) and direction. If we can describe this velocity at *every* point, we've essentially created a vector field.

More formally, a vector field in two dimensions, say in the $xy$-plane, is a function that assigns a vector $\mathbf{F}(x, y) = P(x, y)\mathbf{i} + Q(x, y)\mathbf{j}$ to each point $(x, y)$ in a domain $D$. Here, $P(x, y)$ and $Q(x, y)$ are scalar functions, often called the component functions.

**Think of it like this:**

*   **Wind:** At every point on a weather map, there's a wind vector indicating speed and direction.
*   **Gravitational Field:** Around a planet, there’s a gravitational force vector pulling objects towards its center.
*   **Electric Field:** Near a charged object, there's an electric field vector showing the force on a positive test charge.
*   **Fluid Flow:** In a pipe, at each point in the fluid, there's a velocity vector describing its motion.

In our course, we're often dealing with fields like electric fields ($\mathbf{E}$) or magnetic fields ($\mathbf{B}$), which are indeed vector fields. Understanding how these fields "act" along a path is what line integrals allow us to do.

### 2. Paths and Parametrization: Our Journey

We’ve already met vector-valued functions of a single variable, $\mathbf{r}(t) = x(t)\mathbf{i} + y(t)\mathbf{j}$ (or $\mathbf{r}(t) = x(t)\mathbf{i} + y(t)\mathbf{j} + z(t)\mathbf{k}$ in 3D). These functions are perfect for describing **paths** or **curves** in space. A path is essentially a trajectory, a way to move from one point to another.

To evaluate a line integral, we need to describe our path parametrically. Let our path $C$ be represented by $\mathbf{r}(t) = x(t)\mathbf{i} + y(t)\mathbf{j}$ for $a \le t \le b$. This means as $t$ varies from $a$ to $b$, the point $(x(t), y(t))$ traces out our curve $C$.

**Key concept here:** We're not just integrating a function; we're integrating a function *along a specific curve*. The nature of the curve matters!

### 3. The Line Integral of a Vector Field: What Are We Measuring?

So, what does a line integral of a vector field actually represent? The most intuitive interpretation, especially in physics, is **work**.

Imagine you're pushing a box across a floor. The floor isn't perfectly flat; there are bumps and slopes. The force you exert might change as you move. A vector field $\mathbf{F}$ could represent the force you are applying at each point, and the path $C$ could be the floor's surface. The line integral of $\mathbf{F}$ along $C$ tells us the **total work done by the force $\mathbf{F}$ as you move along the path $C$**.

**Let's break down the idea of "work":**

Work is force applied *in the direction of motion*. If you push a box and the floor is perfectly flat, you exert a force $\mathbf{F}$, and the box moves along a displacement vector $\Delta\mathbf{r}$. The work done in that small step is approximately $\mathbf{F} \cdot \Delta\mathbf{r}$.

Now, if our path $C$ is curved and the force field $\mathbf{F}$ varies, we can't just multiply one force by one displacement. We have to break the path into tiny, straight segments. Let $\Delta\mathbf{r}$ be a small displacement vector along the curve $C$ at a point where the vector field is $\mathbf{F}$. The work done over this small segment is approximately $\mathbf{F} \cdot \Delta\mathbf{r}$. To get the total work, we sum up all these small amounts of work as we traverse the entire path. This "summing up" of infinitesimal quantities is precisely what integration does.

This is why the line integral of a vector field is defined as the integral of the dot product of the vector field and the infinitesimal displacement vector along the curve:

$$ \int_C \mathbf{F} \cdot d\mathbf{r} $$

This integral represents the total "projection" of the vector field onto the direction of the path, summed up along the entire path.

### 4. Calculating Line Integrals: The Mechanics

Now, how do we actually compute this $\int_C \mathbf{F} \cdot d\mathbf{r}$? This is where our parametric representation of the curve $C$ comes in handy, linking us back to single-variable calculus.

Let our vector field be $\mathbf{F}(x, y) = P(x, y)\mathbf{i} + Q(x, y)\mathbf{j}$ and our path $C$ be parametrized by $\mathbf{r}(t) = x(t)\mathbf{i} + y(t)\mathbf{j}$ for $a \le t \le b$.

1.  **Express $\mathbf{F}$ in terms of $t$:** Substitute $x = x(t)$ and $y = y(t)$ into the component functions $P$ and $Q$. So, $\mathbf{F}(\mathbf{r}(t)) = P(x(t), y(t))\mathbf{i} + Q(x(t), y(t))\mathbf{j}$.

2.  **Find $d\mathbf{r}$:** We know that $\mathbf{r}(t) = x(t)\mathbf{i} + y(t)\mathbf{j}$. Differentiating this with respect to $t$ gives us the tangent vector to the curve. For a small change $dt$, the displacement vector is $d\mathbf{r} = \mathbf{r}'(t)dt$.
    So, $d\mathbf{r} = \left(\frac{dx}{dt}\mathbf{i} + \frac{dy}{dt}\mathbf{j}\right)dt = x'(t)dt\,\mathbf{i} + y'(t)dt\,\mathbf{j}$.

3.  **Compute the dot product:** Now, we take the dot product:
    $$ \mathbf{F}(\mathbf{r}(t)) \cdot d\mathbf{r} = \left( P(x(t), y(t))\mathbf{i} + Q(x(t), y(t))\mathbf{j} \right) \cdot \left( x'(t)dt\,\mathbf{i} + y'(t)dt\,\mathbf{j} \right) $$
    $$ = \left( P(x(t), y(t))x'(t) + Q(x(t), y(t))y'(t) \right) dt $$

4.  **Integrate with respect to $t$:** Finally, we integrate this scalar function with respect to $t$ over the given interval $[a, b]$:
    $$ \int_C \mathbf{F} \cdot d\mathbf{r} = \int_a^b \left( P(x(t), y(t))x'(t) + Q(x(t), y(t))y'(t) \right) dt $$

This transforms our line integral of a vector field into a standard definite integral of a single-variable function, which we know how to solve! This process aligns directly with **CO3**, as we are computing the line integral of a vector function.

**Analogy Check:** Think about walking on a hilly path. The vector field represents the slope of the ground at each point (a vector pointing uphill). As you walk, your movement is described by $\mathbf{r}(t)$. The line integral $\int_C \mathbf{F} \cdot d\mathbf{r}$ measures the total "upward push" you experience as you traverse the path. If the path goes downhill, $\mathbf{F} \cdot d\mathbf{r}$ will be negative, and the integral will reflect the work done *against* your upward push.

### 5. Examples to Solidify Understanding

Let's work through a couple of examples. These are the types of calculations you'll be expected to perform.

**Example 1: Work Done by a Force Field**

Suppose a particle moves along the curve $C$ defined by $\mathbf{r}(t) = t^2\mathbf{i} + t\mathbf{j}$ for $0 \le t \le 1$. The particle is subjected to a force field $\mathbf{F}(x, y) = xy\mathbf{i} + y\mathbf{j}$. Find the work done by the force field on the particle.

**Solution:**

1.  **Parametrize $\mathbf{F}$:**
    Our path is $x(t) = t^2$ and $y(t) = t$.
    So, $\mathbf{F}(\mathbf{r}(t)) = (t^2)(t)\mathbf{i} + t\mathbf{j} = t^3\mathbf{i} + t\mathbf{j}$.

2.  **Find $d\mathbf{r}$:**
    $\mathbf{r}'(t) = \frac{d}{dt}(t^2\mathbf{i} + t\mathbf{j}) = 2t\mathbf{i} + 1\mathbf{j}$.
    So, $d\mathbf{r} = (2t\mathbf{i} + \mathbf{j})dt$.

3.  **Compute the dot product:**
    $$ \mathbf{F}(\mathbf{r}(t)) \cdot d\mathbf{r} = (t^3\mathbf{i} + t\mathbf{j}) \cdot (2t\mathbf{i} + \mathbf{j})dt $$
    $$ = (t^3 \cdot 2t + t \cdot 1) dt $$
    $$ = (2t^4 + t) dt $$

4.  **Integrate:** The interval for $t$ is $[0, 1]$.
    $$ \int_C \mathbf{F} \cdot d\mathbf{r} = \int_0^1 (2t^4 + t) dt $$
    $$ = \left[ \frac{2t^5}{5} + \frac{t^2}{2} \right]_0^1 $$
    $$ = \left( \frac{2(1)^5}{5} + \frac{(1)^2}{2} \right) - \left( \frac{2(0)^5}{5} + \frac{(0)^2}{2} \right) $$
    $$ = \frac{2}{5} + \frac{1}{2} = \frac{4+5}{10} = \frac{9}{10} $$

So, the work done is $\frac{9}{10}$ units. This connects directly to **CO3** by computing the line integral and implies a physical application.

**Example 2: Line Integral of a Vector Field Along a Line Segment**

Calculate $\int_C \mathbf{F} \cdot d\mathbf{r}$ where $\mathbf{F}(x, y) = x^2\mathbf{i} - y\mathbf{j}$ and $C$ is the line segment from $(0, 0)$ to $(2, 4)$.

**Solution:**

1.  **Parametrize the path $C$:**
    A line segment from $(x_0, y_0)$ to $(x_1, y_1)$ can be parametrized as $\mathbf{r}(t) = (x_0 + t(x_1-x_0))\mathbf{i} + (y_0 + t(y_1-y_0))\mathbf{j}$ for $0 \le t \le 1$.
    Here, $(x_0, y_0) = (0, 0)$ and $(x_1, y_1) = (2, 4)$.
    So, $\mathbf{r}(t) = (0 + t(2-0))\mathbf{i} + (0 + t(4-0))\mathbf{j} = 2t\mathbf{i} + 4t\mathbf{j}$.
    This gives us $x(t) = 2t$ and $y(t) = 4t$.

2.  **Parametrize $\mathbf{F}$:**
    $\mathbf{F}(\mathbf{r}(t)) = (2t)^2\mathbf{i} - (4t)\mathbf{j} = 4t^2\mathbf{i} - 4t\mathbf{j}$.

3.  **Find $d\mathbf{r}$:**
    $\mathbf{r}'(t) = \frac{d}{dt}(2t\mathbf{i} + 4t\mathbf{j}) = 2\mathbf{i} + 4\mathbf{j}$.
    So, $d\mathbf{r} = (2\mathbf{i} + 4\mathbf{j})dt$.

4.  **Compute the dot product:**
    $$ \mathbf{F}(\mathbf{r}(t)) \cdot d\mathbf{r} = (4t^2\mathbf{i} - 4t\mathbf{j}) \cdot (2\mathbf{i} + 4\mathbf{j})dt $$
    $$ = (4t^2 \cdot 2 + (-4t) \cdot 4) dt $$
    $$ = (8t^2 - 16t) dt $$

5.  **Integrate:** The interval for $t$ is $[0, 1]$.
    $$ \int_C \mathbf{F} \cdot d\mathbf{r} = \int_0^1 (8t^2 - 16t) dt $$
    $$ = \left[ \frac{8t^3}{3} - \frac{16t^2}{2} \right]_0^1 $$
    $$ = \left[ \frac{8t^3}{3} - 8t^2 \right]_0^1 $$
    $$ = \left( \frac{8(1)^3}{3} - 8(1)^2 \right) - \left( \frac{8(0)^3}{3} - 8(0)^2 \right) $$
    $$ = \frac{8}{3} - 8 = \frac{8 - 24}{3} = -\frac{16}{3} $$

The line integral is $-\frac{16}{3}$. The negative sign might indicate that the force field is generally opposing the direction of motion along this path.

### 6. 3D Line Integrals

The concept extends seamlessly to three dimensions. If we have a vector field $\mathbf{F}(x, y, z) = P(x, y, z)\mathbf{i} + Q(x, y, z)\mathbf{j} + R(x, y, z)\mathbf{k}$ and a path $C$ parametrized by $\mathbf{r}(t) = x(t)\mathbf{i} + y(t)\mathbf{j} + z(t)\mathbf{k}$ for $a \le t \le b$, the line integral is:

$$ \int_C \mathbf{F} \cdot d\mathbf{r} = \int_a^b \left( P(x(t), y(t), z(t))x'(t) + Q(x(t), y(t), z(t))y'(t) + R(x(t), y(t), z(t))z'(t) \right) dt $$

This is often written more compactly as:

$$ \int_C \mathbf{F} \cdot d\mathbf{r} = \int_a^b \mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) dt $$

**Applications in Electrical Science:**
*   Calculating the work done by an electric field $\mathbf{E}$ in moving a charge along a path.
*   Understanding how magnetic fields exert forces on moving charges (Lorentz force), though the calculation of work done by a magnetic field is zero because $\mathbf{F}$ is always perpendicular to velocity. However, the integral itself is still a valid mathematical concept.

**Applications in Physical Science:**
*   Work done by gravitational fields.
*   Circulation of fluids.

### 7. Connection to Course Outcomes

Let's explicitly tie this back to our course outcomes:

*   **CO3: Compute the derivatives and line integrals of vector functions and to learn their applications.**
    This entire topic is the core of CO3. We've learned to parametrize curves (using vector functions), find their derivatives ($\mathbf{r}'(t)$), evaluate vector fields along these curves, and integrate the dot product to compute the line integral. The examples show the computation, and the "work done" interpretation provides the application.

*   **CO1: Compute the partial and total derivatives and maxima and minima of multivariable functions and to apply in engineering problems.**
    While not directly about optimization, the calculation of the line integral involves evaluating component functions $P$, $Q$, and $R$ at specific points $(x(t), y(t), z(t))$. If $P$, $Q$, or $R$ were complex, we might need partial derivatives to analyze them. The integrand itself, $(P x' + Q y')$, is a function of $t$, and if we were looking to maximize or minimize the work done, we might use single-variable calculus techniques on this integrand.

*   **CO4: Apply the concepts of surface and volume integrals and to learn their inter-relations and applications.**
    Line integrals are the first step in understanding integral theorems that relate different types of integrals. The integral $\int_C \mathbf{F} \cdot d\mathbf{r}$ is a fundamental building block for theorems like Green's Theorem (which relates a line integral around a closed curve to a double integral over the enclosed region) and Stokes' Theorem (which relates a line integral around a closed curve to a surface integral of the curl of the vector field). So, while we aren't *doing* surface or volume integrals here, we are building the foundational knowledge required for them.

### 8. Important Points to Remember

*   **Parametrization is Key:** The way you parametrize your curve $C$ is crucial. Different parametrizations of the same curve should yield the same line integral result, but the intermediate steps will look different. The interval of the parameter $t$ must also be correct.
*   **Vector Field vs. Scalar Field:** We are integrating a *vector field*, which means we are dealing with dot products. Don't confuse this with the line integral of a scalar field, which is a different type of integral.
*   **Direction Matters:** The line integral $\int_C \mathbf{F} \cdot d\mathbf{r}$ is path-dependent. If you reverse the direction of the path $C$ (say, from $t=b$ to $t=a$), the sign of the integral will flip.
*   **Work Interpretation:** For many physics and engineering applications, remember that this integral represents the work done by the force field $\mathbf{F}$ along the path $C$.

This topic is all about taking a field (like wind or force) and seeing how it affects something moving along a specific path. It’s a powerful way to quantify interactions over distances and is a cornerstone of much of advanced physics and engineering.

---

## Sample Questions and Answers

**Q1. Conceptual Question:** What does the line integral of a vector field $\mathbf{F}$ along a curve $C$, denoted by $\int_C \mathbf{F} \cdot d\mathbf{r}$, physically represent in the context of mechanics?

**Answer:**
This line integral typically represents the **work done** by the force field $\mathbf{F}$ on a particle as it moves along the curve $C$. It's the sum of the dot products of the force vector and the infinitesimal displacement vector at each point along the path. If $\mathbf{F}$ is a force, the integral quantifies how much of that force acts in the direction of motion, accumulated over the entire path.

**Q2. Calculation Question:** Calculate the line integral $\int_C \mathbf{F} \cdot d\mathbf{r}$ where $\mathbf{F}(x, y) = y\mathbf{i} + x\mathbf{j}$ and $C$ is the quarter-circle in the first quadrant from $(1, 0)$ to $(0, 1)$ traversed counterclockwise.

**Solution:**
1.  **Parametrize $C$:** A quarter-circle of radius 1 in the first quadrant, starting from $(1,0)$ and going counterclockwise to $(0,1)$, can be parametrized by $\mathbf{r}(t) = \cos(t)\mathbf{i} + \sin(t)\mathbf{j}$ for $0 \le t \le \frac{\pi}{2}$.
    This gives $x(t) = \cos(t)$ and $y(t) = \sin(t)$.

2.  **Parametrize $\mathbf{F}$:**
    $\mathbf{F}(\mathbf{r}(t)) = y(t)\mathbf{i} + x(t)\mathbf{j} = \sin(t)\mathbf{i} + \cos(t)\mathbf{j}$.

3.  **Find $d\mathbf{r}$:**
    $\mathbf{r}'(t) = \frac{d}{dt}(\cos(t)\mathbf{i} + \sin(t)\mathbf{j}) = -\sin(t)\mathbf{i} + \cos(t)\mathbf{j}$.
    So, $d\mathbf{r} = (-\sin(t)\mathbf{i} + \cos(t)\mathbf{j})dt$.

4.  **Compute the dot product:**
    $$ \mathbf{F}(\mathbf{r}(t)) \cdot d\mathbf{r} = (\sin(t)\mathbf{i} + \cos(t)\mathbf{j}) \cdot (-\sin(t)\mathbf{i} + \cos(t)\mathbf{j})dt $$
    $$ = (\sin(t)(-\sin(t)) + \cos(t)(\cos(t))) dt $$
    $$ = (-\sin^2(t) + \cos^2(t)) dt $$
    Using the identity $\cos(2t) = \cos^2(t) - \sin^2(t)$:
    $$ = \cos(2t) dt $$

5.  **Integrate:** The interval for $t$ is $[0, \frac{\pi}{2}]$.
    $$ \int_C \mathbf{F} \cdot d\mathbf{r} = \int_0^{\pi/2} \cos(2t) dt $$
    $$ = \left[ \frac{\sin(2t)}{2} \right]_0^{\pi/2} $$
    $$ = \frac{\sin(2 \cdot \frac{\pi}{2})}{2} - \frac{\sin(2 \cdot 0)}{2} $$
    $$ = \frac{\sin(\pi)}{2} - \frac{\sin(0)}{2} $$
    $$ = \frac{0}{2} - \frac{0}{2} = 0 $$
    The line integral is 0.

**Q3. Conceptual and Calculation Question:** Consider a vector field $\mathbf{F}(x, y) = -y\mathbf{i} + x\mathbf{j}$. This field represents a rotation. If a particle moves along a circular path $C$ of radius $R$ centered at the origin, counterclockwise, what can you say about the line integral $\int_C \mathbf{F} \cdot d\mathbf{r}$? Calculate it for $C$ being the circle $x^2 + y^2 = R^2$.

**Solution:**
**Conceptual Part:** The vector field $\mathbf{F}(x, y) = -y\mathbf{i} + x\mathbf{j}$ has components that are related to rotation. At any point $(x, y)$, the vector $\mathbf{F}$ is perpendicular to the position vector $\mathbf{r} = x\mathbf{i} + y\mathbf{j}$ (their dot product is $x(-y) + y(x) = 0$), and it points in the counterclockwise direction. As a particle moves along a counterclockwise circular path, the force $\mathbf{F}$ is always in the *same direction* as the path's motion. Therefore, the line integral $\int_C \mathbf{F} \cdot d\mathbf{r}$ will be positive and represent some form of "circulation" or accumulated tangential force along the path.

**Calculation Part:**
1.  **Parametrize $C$:** The circle $x^2 + y^2 = R^2$ can be parametrized as $\mathbf{r}(t) = R\cos(t)\mathbf{i} + R\sin(t)\mathbf{j}$ for $0 \le t \le 2\pi$ (for one full counterclockwise revolution).
    This gives $x(t) = R\cos(t)$ and $y(t) = R\sin(t)$.

2.  **Parametrize $\mathbf{F}$:**
    $\mathbf{F}(\mathbf{r}(t)) = y(t)\mathbf{i} + x(t)\mathbf{j} = R\sin(t)\mathbf{i} + R\cos(t)\mathbf{j}$.
    *(Correction: $\mathbf{F}(x, y) = -y\mathbf{i} + x\mathbf{j}$, so $\mathbf{F}(\mathbf{r}(t)) = -(R\sin(t))\mathbf{i} + R\cos(t)\mathbf{j}$)*.

3.  **Find $d\mathbf{r}$:**
    $\mathbf{r}'(t) = \frac{d}{dt}(R\cos(t)\mathbf{i} + R\sin(t)\mathbf{j}) = -R\sin(t)\mathbf{i} + R\cos(t)\mathbf{j}$.
    So, $d\mathbf{r} = (-R\sin(t)\mathbf{i} + R\cos(t)\mathbf{j})dt$.

4.  **Compute the dot product:**
    $$ \mathbf{F}(\mathbf{r}(t)) \cdot d\mathbf{r} = (-R\sin(t)\mathbf{i} + R\cos(t)\mathbf{j}) \cdot (-R\sin(t)\mathbf{i} + R\cos(t)\mathbf{j})dt $$
    $$ = ((-R\sin(t))(-R\sin(t)) + (R\cos(t))(R\cos(t))) dt $$
    $$ = (R^2\sin^2(t) + R^2\cos^2(t)) dt $$
    $$ = R^2(\sin^2(t) + \cos^2(t)) dt $$
    $$ = R^2(1) dt = R^2 dt $$

5.  **Integrate:** The interval for $t$ is $[0, 2\pi]$.
    $$ \int_C \mathbf{F} \cdot d\mathbf{r} = \int_0^{2\pi} R^2 dt $$
    $$ = [R^2 t]_0^{2\pi} $$
    $$ = R^2 (2\pi) - R^2 (0) = 2\pi R^2 $$
    The line integral is $2\pi R^2$. This positive value confirms our intuition that the force is aligned with the motion, resulting in a net contribution along the path. This value is sometimes referred to as the "circulation" of the vector field around the curve.
