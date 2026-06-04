---
title: "Line 
integrals of vector fields"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2"
module: "Module 3: Vector valued function of single variable "
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912cd9"
status: "completed"
scrapedAt: "2026-05-20T18:37:01.552Z"
---
## Module 3: Vector-Valued Functions of a Single Variable

### Topic: Line Integrals of Vector Fields

Welcome, everyone, to Module 3, where we're diving into the fascinating world of vector-valued functions of a single variable. Today, we're going to build upon our understanding of curves and their properties to explore something really powerful: **Line Integrals of Vector Fields**. This topic is absolutely crucial for understanding many physical phenomena in electrical science and physical science, from the work done by a force to the flow of fluids or heat.

As we progress, keep in mind our Course Outcomes, especially **CO3: Compute the derivatives and line integrals of vector functions and to learn their applications.** This is exactly what we’ll be doing. We're not just calculating; we're learning how these calculations describe real-world processes.

---

### 1. What Exactly is a Vector Field?

Before we can integrate, we need to understand what we're integrating *over* and *with*. You've all encountered vector-valued functions of a single variable, like $\mathbf{r}(t) = \langle x(t), y(t), z(t) \rangle$, which describe curves in space. A **vector field**, on the other hand, is a function that assigns a **vector** to **every point** in a region of space.

Think of it like this:

*   **Curve ($\mathbf{r}(t)$):** Imagine a tiny ant crawling along a specific path. The ant's position at any time 't' is given by $\mathbf{r}(t)$.
*   **Vector Field ($\mathbf{F}(x, y, z)$):** Now, imagine the entire landscape is filled with little arrows. At *every single point* $(x, y, z)$ in the landscape, there's an arrow pointing in a certain direction with a certain magnitude. This collection of arrows is your vector field.

For example, in two dimensions, a vector field might be $\mathbf{F}(x, y) = \langle P(x,y), Q(x,y) \rangle$. At every point $(x, y)$ in the xy-plane, this formula gives us a vector.

**Real-World Analogies:**

*   **Wind:** At every point in the atmosphere, there's a wind velocity vector. The wind field describes this.
*   **Gravitational Force:** Around a massive object (like Earth), there's a gravitational force vector at every point, pointing towards the Earth's center.
*   **Electric Field:** Around a charged particle or distribution of charges, there's an electric field vector at every point, indicating the direction and strength of the force a test charge would experience.
*   **Fluid Flow:** If you have water flowing in a river, at every point in the water, there's a velocity vector describing how the water is moving.

In electrical science, you'll often see fields like the electric field ($\mathbf{E}$) or magnetic field ($\mathbf{B}$). In physical science, you might deal with force fields or velocity fields.

---

### 2. The Concept of a Line Integral

So, we have this landscape of vectors (the vector field $\mathbf{F}$) and an ant crawling along a path (the curve $C$ parameterized by $\mathbf{r}(t)$). What does it mean to integrate a vector field along a curve?

At its heart, a line integral of a vector field along a curve measures how much the vector field "aligns" with the direction of the curve at each point, and then sums up these contributions along the entire curve.

Let's consider the ant again. Suppose the vector field represents the force acting on the ant at every point. As the ant moves along its path, it experiences this force. The **work done by the force** on the ant as it moves along a small segment of the path is a key physical concept that leads us to the line integral.

If the ant moves a tiny displacement vector $d\mathbf{r}$, and at that point the force is $\mathbf{F}$, the work done by the force over this tiny displacement is given by the dot product: $d W = \mathbf{F} \cdot d\mathbf{r}$. This dot product essentially tells us how much the force vector is in the *same direction* as the displacement vector. If they are perpendicular, the dot product is zero, meaning no work is done in that direction. If they are in the same direction, the dot product is maximal.

The total work done is the sum (or integral) of these tiny amounts of work along the entire path: $W = \int_C \mathbf{F} \cdot d\mathbf{r}$. This is the fundamental idea behind the line integral of a vector field.

---

### 3. Setting Up the Calculation: Parametrization is Key!

To actually compute this, we need to translate the abstract idea into a concrete calculation. This is where the parameterization of our curve $C$ becomes essential.

Let our curve $C$ be parameterized by $\mathbf{r}(t) = \langle x(t), y(t), z(t) \rangle$ for $a \le t \le b$.

1.  **The Vector Field along the Curve:** The vector field is given by $\mathbf{F}(x, y, z)$. To evaluate it along our curve, we substitute the components of $\mathbf{r}(t)$ into $\mathbf{F}$:
    $\mathbf{F}(\mathbf{r}(t)) = \mathbf{F}(x(t), y(t), z(t)) = \langle P(x(t), y(t), z(t)), Q(x(t), y(t), z(t)), R(x(t), y(t), z(t)) \rangle$.

2.  **The Differential Displacement Vector $d\mathbf{r}$:** The differential displacement vector $d\mathbf{r}$ along the curve is related to the derivative of the position vector $\mathbf{r}(t)$:
    $d\mathbf{r} = \mathbf{r}'(t) \, dt = \langle x'(t), y'(t), z'(t) \rangle \, dt$.
    This $d\mathbf{r}$ is a vector representing a tiny step along the curve.

3.  **The Dot Product:** Now, we compute the dot product $\mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t)$:
    $\mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) = P(x(t), y(t), z(t)) x'(t) + Q(x(t), y(t), z(t)) y'(t) + R(x(t), y(t), z(t)) z'(t)$.

4.  **The Integral:** Finally, we integrate this scalar-valued function of $t$ from $a$ to $b$:
    $$ \int_C \mathbf{F} \cdot d\mathbf{r} = \int_a^b \left[ \mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) \right] \, dt $$
    $$ \int_C \mathbf{F} \cdot d\mathbf{r} = \int_a^b \left( P(x(t), y(t), z(t)) x'(t) + Q(x(t), y(t), z(t)) y'(t) + R(x(t), y(t), z(t)) z'(t) \right) \, dt $$

This formula is the workhorse for computing line integrals of vector fields. It transforms a vector integral over a curve into a standard definite integral of a scalar function over an interval of $t$.

---

### 4. Understanding the 'Why': Applications and Interpretations

Why do we do this? The interpretation of this integral is key.

*   **Work Done by a Force:** As we've seen, if $\mathbf{F}$ is a force field, the line integral $\int_C \mathbf{F} \cdot d\mathbf{r}$ represents the total work done by the force $\mathbf{F}$ as an object moves along the curve $C$. This is a fundamental concept in physics. (See Anton, Biven, Davis, Chapter 15 for detailed examples on work).

*   **Flow Along a Curve (Circulation):** If $\mathbf{F}$ represents a velocity field of a fluid, the line integral is related to the "circulation" of the fluid around the curve. It tells us how much the fluid tends to flow "along" the curve.

*   **Flux Across a Curve (in 2D):** While the dot product $\mathbf{F} \cdot d\mathbf{r}$ measures how much $\mathbf{F}$ is *tangent* to the curve, we can also be interested in how much $\mathbf{F}$ is *normal* (perpendicular) to the curve. This is related to the concept of **flux**. For a 2D curve $C$ parameterized by $\mathbf{r}(t) = \langle x(t), y(t) \rangle$, a normal vector is $\mathbf{n} = \langle -y'(t), x'(t) \rangle$. The integral $\int_C \mathbf{F} \cdot \mathbf{n} \, dt$ would represent the flux across the curve. We'll touch upon this more when we discuss Green's Theorem and surface integrals, but it’s good to know the distinction:
    *   $\int_C \mathbf{F} \cdot d\mathbf{r}$: Integral of $\mathbf{F}$ along $C$ (tangential component). Often called **circulation**.
    *   $\int_C \mathbf{F} \cdot \mathbf{n} \, dt$: Integral of $\mathbf{F}$ across $C$ (normal component). Often called **flux**.

---

### 5. Let's Work Through Some Examples!

Theory is great, but let's see how this works in practice.

**Example 1: Finding Work Done**

Let the vector field be $\mathbf{F}(x, y) = \langle x^2, y^2 \rangle$ and let $C$ be the curve parameterized by $\mathbf{r}(t) = \langle t, t^2 \rangle$ for $0 \le t \le 1$. We want to compute $\int_C \mathbf{F} \cdot d\mathbf{r}$.

*   **Step 1: Parameterize $\mathbf{F}$:**
    Our curve is $x=t$ and $y=t^2$.
    So, $\mathbf{F}(\mathbf{r}(t)) = \mathbf{F}(t, t^2) = \langle t^2, (t^2)^2 \rangle = \langle t^2, t^4 \rangle$.

*   **Step 2: Find $d\mathbf{r}$:**
    $\mathbf{r}(t) = \langle t, t^2 \rangle$
    $\mathbf{r}'(t) = \langle \frac{d}{dt}(t), \frac{d}{dt}(t^2) \rangle = \langle 1, 2t \rangle$.
    So, $d\mathbf{r} = \mathbf{r}'(t) \, dt = \langle 1, 2t \rangle \, dt$.

*   **Step 3: Compute the Dot Product:**
    $\mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) = \langle t^2, t^4 \rangle \cdot \langle 1, 2t \rangle = (t^2)(1) + (t^4)(2t) = t^2 + 2t^5$.

*   **Step 4: Integrate:**
    The parameter $t$ goes from $0$ to $1$.
    $$ \int_C \mathbf{F} \cdot d\mathbf{r} = \int_0^1 (t^2 + 2t^5) \, dt $$
    Now, this is a standard integral:
    $$ \int_0^1 (t^2 + 2t^5) \, dt = \left[ \frac{t^3}{3} + \frac{2t^6}{6} \right]_0^1 = \left[ \frac{t^3}{3} + \frac{t^6}{3} \right]_0^1 $$
    $$ = \left( \frac{1^3}{3} + \frac{1^6}{3} \right) - \left( \frac{0^3}{3} + \frac{0^6}{3} \right) = \frac{1}{3} + \frac{1}{3} - 0 = \frac{2}{3} $$
    So, the work done by the field $\mathbf{F}$ along the curve $C$ is $\frac{2}{3}$.

**Remember this:** The power of parametrization is that it converts a complicated path integral into a simple single-variable integral.

**Example 2: A Path in 3D**

Let $\mathbf{F}(x, y, z) = \langle y, z, x \rangle$ and $C$ be the helix parameterized by $\mathbf{r}(t) = \langle \cos t, \sin t, t \rangle$ for $0 \le t \le 2\pi$.

*   **Step 1: Parameterize $\mathbf{F}$:**
    $x = \cos t$, $y = \sin t$, $z = t$.
    $\mathbf{F}(\mathbf{r}(t)) = \mathbf{F}(\cos t, \sin t, t) = \langle \sin t, t, \cos t \rangle$.

*   **Step 2: Find $d\mathbf{r}$:**
    $\mathbf{r}'(t) = \langle -\sin t, \cos t, 1 \rangle$.
    $d\mathbf{r} = \langle -\sin t, \cos t, 1 \rangle \, dt$.

*   **Step 3: Compute the Dot Product:**
    $\mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) = \langle \sin t, t, \cos t \rangle \cdot \langle -\sin t, \cos t, 1 \rangle$
    $= (\sin t)(-\sin t) + (t)(\cos t) + (\cos t)(1)$
    $= -\sin^2 t + t \cos t + \cos t$.

*   **Step 4: Integrate:**
    $t$ goes from $0$ to $2\pi$.
    $$ \int_C \mathbf{F} \cdot d\mathbf{r} = \int_0^{2\pi} (-\sin^2 t + t \cos t + \cos t) \, dt $$
    Let's break down the integral:
    *   $\int_0^{2\pi} -\sin^2 t \, dt$: Recall $\sin^2 t = \frac{1 - \cos(2t)}{2}$.
        $\int_0^{2\pi} -\frac{1 - \cos(2t)}{2} \, dt = -\frac{1}{2} \int_0^{2\pi} (1 - \cos(2t)) \, dt = -\frac{1}{2} \left[ t - \frac{\sin(2t)}{2} \right]_0^{2\pi}$
        $= -\frac{1}{2} \left( (2\pi - 0) - (0 - 0) \right) = -\frac{1}{2}(2\pi) = -\pi$.

    *   $\int_0^{2\pi} t \cos t \, dt$: This requires integration by parts. Let $u = t$, $dv = \cos t \, dt$. Then $du = dt$, $v = \sin t$.
        $\int_0^{2\pi} t \cos t \, dt = [t \sin t]_0^{2\pi} - \int_0^{2\pi} \sin t \, dt = (2\pi \sin(2\pi) - 0 \sin(0)) - [-\cos t]_0^{2\pi}$
        $= (0 - 0) - (-\cos(2\pi) - (-\cos(0))) = -(-1 - (-1)) = -(-1+1) = 0$.

    *   $\int_0^{2\pi} \cos t \, dt$:
        $\int_0^{2\pi} \cos t \, dt = [\sin t]_0^{2\pi} = \sin(2\pi) - \sin(0) = 0 - 0 = 0$.

    *   **Combining the parts:**
        $\int_C \mathbf{F} \cdot d\mathbf{r} = -\pi + 0 + 0 = -\pi$.

This example shows how to handle trigonometric functions and integration by parts within the line integral.

---

### 6. A Special Case: Conservative Vector Fields

Now, let's talk about a very important property of some vector fields. A vector field $\mathbf{F}$ is called **conservative** if it can be expressed as the gradient of a scalar function, called the **potential function**, say $\phi$.
That is, $\mathbf{F} = \nabla \phi$.

If $\mathbf{F} = \nabla \phi$, then a remarkable thing happens to the line integral:

$$ \int_C \mathbf{F} \cdot d\mathbf{r} = \int_C \nabla \phi \cdot d\mathbf{r} = \phi(\mathbf{r}(b)) - \phi(\mathbf{r}(a)) $$

This is the **Fundamental Theorem for Line Integrals**. It says that if a vector field is conservative, the line integral along a curve depends *only* on the starting and ending points of the curve, not on the path taken between them! This is analogous to how the change in potential energy only depends on the initial and final positions, not the path taken.

**How to check if a field is conservative (and find $\phi$)?**

In 2D, if $\mathbf{F}(x, y) = \langle P(x,y), Q(x,y) \rangle$, then $\mathbf{F}$ is conservative if and only if $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$.
If this condition holds, we can find $\phi$ by integrating:
1.  $\int P(x,y) \, dx = \phi(x,y) + g(y)$
2.  $\int Q(x,y) \, dy = \phi(x,y) + h(x)$
By comparing the two expressions for $\phi$, we can determine $g(y)$ and $h(x)$ and thus find $\phi$.

In 3D, if $\mathbf{F}(x, y, z) = \langle P, Q, R \rangle$, then $\mathbf{F}$ is conservative if and only if its **curl** is zero: $\nabla \times \mathbf{F} = \mathbf{0}$.
The curl is given by:
$$ \nabla \times \mathbf{F} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ P & Q & R \end{vmatrix} = \left\langle \frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z}, \frac{\partial P}{\partial z} - \frac{\partial R}{\partial x}, \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right\rangle $$
If $\nabla \times \mathbf{F} = \mathbf{0}$, then we can find $\phi$ by integrating:
1.  $\int P \, dx = \phi(x,y,z) + g(y,z)$
2.  $\frac{\partial}{\partial y} \left( \int P \, dx \right) = \frac{\partial \phi}{\partial y} + \frac{\partial g}{\partial y} = Q$. This helps us find $\frac{\partial g}{\partial y}$. Then integrate to find $g(y,z)$.
3.  $\frac{\partial}{\partial z} \left( \int P \, dx + g(y,z) \right) = \frac{\partial \phi}{\partial z} + \frac{\partial g}{\partial z} = R$. This helps us find $\frac{\partial g}{\partial z}$ and then integrate to find the remaining part.

**Example 3: Using the Fundamental Theorem**

Let $\mathbf{F}(x, y) = \langle 2xy, x^2 + \cos y \rangle$. Is this field conservative? If so, compute the line integral from $(1,0)$ to $(2, \pi)$ along *any* path.

*   **Check for Conservatism:**
    $P(x,y) = 2xy$, $Q(x,y) = x^2 + \cos y$.
    $\frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(2xy) = 2x$.
    $\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(x^2 + \cos y) = 2x$.
    Since $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$, the field $\mathbf{F}$ is conservative.

*   **Find the Potential Function $\phi$:**
    $\int P \, dx = \int 2xy \, dx = x^2y + g(y)$. (Treating $y$ as constant during integration w.r.t $x$).
    Now, we use the second component: $\frac{\partial \phi}{\partial y} = Q$.
    $\frac{\partial}{\partial y}(x^2y + g(y)) = x^2 + g'(y)$.
    We need this to equal $Q(x,y) = x^2 + \cos y$.
    So, $x^2 + g'(y) = x^2 + \cos y$.
    This implies $g'(y) = \cos y$.
    Integrating $g'(y)$ with respect to $y$: $g(y) = \int \cos y \, dy = \sin y + C$.
    We can take $C=0$ for simplicity.
    So, the potential function is $\phi(x,y) = x^2y + \sin y$.

*   **Apply the Fundamental Theorem:**
    The starting point is $(1,0)$, and the ending point is $(2, \pi)$.
    The line integral is $\phi(\text{end point}) - \phi(\text{start point})$.
    $$ \int_C \mathbf{F} \cdot d\mathbf{r} = \phi(2, \pi) - \phi(1, 0) $$
    $$ \phi(2, \pi) = (2)^2(\pi) + \sin(\pi) = 4\pi + 0 = 4\pi $$
    $$ \phi(1, 0) = (1)^2(0) + \sin(0) = 0 + 0 = 0 $$
    Therefore, $\int_C \mathbf{F} \cdot d\mathbf{r} = 4\pi - 0 = 4\pi$.

Notice how we didn't need to know the specific path! This is incredibly powerful. (See Thomas' Calculus, Chapter 16 for more on conservative fields).

---

### 7. Common Pitfalls and Exam Tips

*   **Confusing $\mathbf{F}(\mathbf{r}(t))$ and $\mathbf{r}'(t)$:** Make sure you substitute the parameterized curve into the vector field correctly and differentiate the parameterization correctly. They are distinct steps.
*   **Forgetting the Dot Product:** The integral is $\int \mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) \, dt$, not $\int \mathbf{F}(\mathbf{r}(t)) \, dt$ or $\int \mathbf{r}'(t) \, dt$. The dot product is crucial.
*   **Algebraic Errors:** Especially when dealing with powers, sines, and cosines, simple algebra mistakes can derail your answer. Double-check your work.
*   **Conservative Fields:** When a problem involves a path integral between two points, *always* consider checking if the field is conservative. It can save you a lot of calculation! Remember the conditions $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$ (2D) or $\nabla \times \mathbf{F} = \mathbf{0}$ (3D).
*   **Integral Evaluation:** The final step is a standard calculus integral. Be proficient with integration techniques, including substitution, integration by parts, and trigonometric identities.
*   **Domain of Integration:** Ensure the limits of integration for $t$ correctly cover the entire curve $C$.

---

### Summary of Key Takeaways

*   A **vector field** assigns a vector to each point in space.
*   A **line integral of a vector field** ($\int_C \mathbf{F} \cdot d\mathbf{r}$) measures the tangential component of the vector field along a curve, often interpreted as work done or circulation.
*   To compute it, we **parameterize the curve** $C$ by $\mathbf{r}(t)$ for $a \le t \le b$, then calculate $\int_a^b \mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) \, dt$.
*   **Conservative vector fields** are those that are gradients of a scalar potential function ($\mathbf{F} = \nabla \phi$).
*   For conservative fields, the line integral is path-independent and given by the **Fundamental Theorem for Line Integrals**: $\int_C \mathbf{F} \cdot d\mathbf{r} = \phi(\text{end point}) - \phi(\text{start point})$.

This topic is a cornerstone for many advanced concepts in physics and engineering. Understanding it deeply will greatly benefit your comprehension of electromagnetism, fluid dynamics, and other areas.

---

### Sample Questions with Answers

**Question 1 (Conceptual):** What is the physical interpretation of a line integral of a vector field $\mathbf{F}$ along a curve $C$?
**Answer:** If $\mathbf{F}$ represents a force field, the line integral $\int_C \mathbf{F} \cdot d\mathbf{r}$ represents the **work done by the force** as an object moves along the curve $C$. If $\mathbf{F}$ represents a velocity field of a fluid, it relates to the **circulation** of the fluid along the curve.

**Question 2 (Computational):** Evaluate the line integral $\int_C \mathbf{F} \cdot d\mathbf{r}$ where $\mathbf{F}(x,y) = \langle x+y, x-y \rangle$ and $C$ is the line segment from $(0,0)$ to $(1,1)$.

**Solution:**
*   **Parameterize C:** The line segment from $(0,0)$ to $(1,1)$ can be parameterized by $\mathbf{r}(t) = \langle t, t \rangle$ for $0 \le t \le 1$.
*   **$\mathbf{F}(\mathbf{r}(t))$:** Substitute $x=t, y=t$ into $\mathbf{F}$.
    $\mathbf{F}(\mathbf{r}(t)) = \langle t+t, t-t \rangle = \langle 2t, 0 \rangle$.
*   **$\mathbf{r}'(t)$:** Differentiate $\mathbf{r}(t)$.
    $\mathbf{r}'(t) = \langle \frac{d}{dt}(t), \frac{d}{dt}(t) \rangle = \langle 1, 1 \rangle$.
*   **Dot Product:** $\mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) = \langle 2t, 0 \rangle \cdot \langle 1, 1 \rangle = (2t)(1) + (0)(1) = 2t$.
*   **Integrate:**
    $\int_C \mathbf{F} \cdot d\mathbf{r} = \int_0^1 2t \, dt = \left[ t^2 \right]_0^1 = 1^2 - 0^2 = 1$.

**Question 3 (Conservative Field):** Let $\mathbf{F}(x,y,z) = \langle y^2z, 2xyz, x y^2 \rangle$. Show that $\mathbf{F}$ is conservative and find its potential function $\phi(x,y,z)$. Then, evaluate $\int_C \mathbf{F} \cdot d\mathbf{r}$ where $C$ is any smooth curve from $(1,1,1)$ to $(2,3,4)$.

**Solution:**
*   **Check for Conservatism (Curl):**
    $P = y^2z$, $Q = 2xyz$, $R = xy^2$.
    $\frac{\partial R}{\partial y} = \frac{\partial}{\partial y}(xy^2) = 2xy$.
    $\frac{\partial Q}{\partial z} = \frac{\partial}{\partial z}(2xyz) = 2xy$.
    So, $\frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z} = 2xy - 2xy = 0$. (Component 1 of curl is 0)

    $\frac{\partial P}{\partial z} = \frac{\partial}{\partial z}(y^2z) = y^2$.
    $\frac{\partial R}{\partial x} = \frac{\partial}{\partial x}(xy^2) = y^2$.
    So, $\frac{\partial P}{\partial z} - \frac{\partial R}{\partial x} = y^2 - y^2 = 0$. (Component 2 of curl is 0)

    $\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(2xyz) = 2yz$.
    $\frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(y^2z) = 2yz$.
    So, $\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = 2yz - 2yz = 0$. (Component 3 of curl is 0)

    Since $\nabla \times \mathbf{F} = \langle 0, 0, 0 \rangle = \mathbf{0}$, $\mathbf{F}$ is conservative.

*   **Find Potential Function $\phi$:**
    1.  $\int P \, dx = \int y^2z \, dx = xy^2z + g(y,z)$.
    2.  Equate to $Q$: $\frac{\partial}{\partial y}(xy^2z + g(y,z)) = 2xyz + \frac{\partial g}{\partial y} = Q = 2xyz$.
        This implies $\frac{\partial g}{\partial y} = 0$, so $g$ does not depend on $y$. Let $g(y,z) = h(z)$.
        So, $\phi(x,y,z) = xy^2z + h(z)$.
    3.  Equate to $R$: $\frac{\partial}{\partial z}(xy^2z + h(z)) = xy^2 + h'(z) = R = xy^2$.
        This implies $h'(z) = 0$. Integrating gives $h(z) = C$. Let $C=0$.
    The potential function is $\phi(x,y,z) = xy^2z$.

*   **Evaluate the Integral:** Using the Fundamental Theorem for Line Integrals:
    $\int_C \mathbf{F} \cdot d\mathbf{r} = \phi(\text{end point}) - \phi(\text{start point})$.
    Start point: $(1,1,1)$. End point: $(2,3,4)$.
    $\phi(2,3,4) = (2)(3^2)(4) = 2 \times 9 \times 4 = 72$.
    $\phi(1,1,1) = (1)(1^2)(1) = 1 \times 1 \times 1 = 1$.
    $\int_C \mathbf{F} \cdot d\mathbf{r} = 72 - 1 = 71$.
