---
title: "Flux integrals over surfaces of the form z = g(x, y)"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 2"
module: "Module 4: Green’s theorem (for simply connected domains, without proof) and applications to evaluating line integrals"
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f9843"
status: "completed"
scrapedAt: "2026-05-23T16:08:21.283Z"
---
# Mathematics for Electrical Science and Physical Science - 2
## Module 4: Green’s Theorem and Applications to Line Integrals
### Topic: Flux Integrals Over Surfaces of the Form $z = g(x, y)$

Welcome everyone! In this module, we're diving deep into the world of vector calculus, specifically focusing on how we can understand the "flow" of a vector field across a surface. We've already touched upon line integrals and how they help us understand quantities like work done along a curve. Now, we're moving from curves to surfaces, and the concept we'll be exploring is **flux**.

Think about a river. If you wanted to measure how much water is flowing through a particular section of the river per second, you'd be interested in the **flux** of the water's velocity field across that section. Similarly, in electrical science, we might want to know how much electric field is "flowing" through a surface, or in fluid dynamics, how much fluid is moving across a boundary. This is exactly what flux integrals help us quantify.

Our focus today is on a specific, yet very common, type of surface: those defined by an equation of the form $z = g(x, y)$. This means our surface is essentially a "hill" or a "valley" over the $xy$-plane. We'll be using our understanding of partial derivatives and line integrals to calculate this flux. This ties directly into **CO3: Compute the derivatives and line integrals of vector functions and to learn their applications**, as we’ll be using derivatives extensively and building upon our line integral knowledge. Furthermore, understanding flux across surfaces is a foundational step towards **CO4: Apply the concepts of surface and volume integrals and to learn their inter-relations and applications**.

### 1. Understanding Flux: The "Flow" Across a Surface

Before we get into the specifics of $z = g(x, y)$ surfaces, let's clarify what flux *is*. Imagine you have a vector field, say $\mathbf{F}(x, y, z)$, which could represent velocity, electric field, magnetic field, or any quantity that has both magnitude and direction at every point in space. Now, consider a surface $S$ in this space.

The **flux** of $\mathbf{F}$ across $S$, denoted by $\iint_S \mathbf{F} \cdot d\mathbf{S}$, is essentially the net "amount" of the vector field $\mathbf{F}$ that is passing through the surface $S$. The dot product $\mathbf{F} \cdot d\mathbf{S}$ is crucial here. $d\mathbf{S}$ is a vector representing a tiny piece of the surface, pointing outward and perpendicular to the surface (this is the **outward normal vector**). The dot product $\mathbf{F} \cdot d\mathbf{S}$ tells us how much of the vector field $\mathbf{F}$ is pointing in the same direction as the surface's outward normal. If $\mathbf{F}$ is perpendicular to the surface, the dot product is zero, meaning no flux in that direction. If $\mathbf{F}$ is parallel to the outward normal, the flux is maximized.

This concept is fundamental to many physical laws, like Gauss's Law in electromagnetism, which relates the electric flux through a closed surface to the enclosed charge. So, understanding flux is vital for our physical science applications.

### 2. Parameterizing Surfaces and the Normal Vector

To actually *calculate* a flux integral, we need a way to represent the surface mathematically. For surfaces of the form $z = g(x, y)$, we can naturally parameterize them using $x$ and $y$ as parameters. Let's define a vector function $\mathbf{r}(x, y)$ that traces out points on the surface:

$\mathbf{r}(x, y) = \langle x, y, g(x, y) \rangle$

Here, as we vary $x$ and $y$ over a region $D$ in the $xy$-plane, the vector $\mathbf{r}(x, y)$ sweeps out our surface $S$. This is a common technique discussed in textbooks like Anton, Biven, and Davis, and Thomas' Calculus, where parameterization is key to evaluating integrals over curves and surfaces.

Now, to compute the flux integral $\iint_S \mathbf{F} \cdot d\mathbf{S}$, we need to understand the differential surface element $d\mathbf{S}$. For a parameterized surface $\mathbf{r}(u, v)$, we know that $d\mathbf{S} = (\mathbf{r}_u \times \mathbf{r}_v) \, du \, dv$, where $\mathbf{r}_u$ and $\mathbf{r}_v$ are partial derivatives of $\mathbf{r}$ with respect to $u$ and $v$.

In our case, the parameters are $x$ and $y$. So, we need to compute $\mathbf{r}_x$ and $\mathbf{r}_y$:

$\mathbf{r}_x = \frac{\partial \mathbf{r}}{\partial x} = \left\langle \frac{\partial x}{\partial x}, \frac{\partial y}{\partial x}, \frac{\partial g}{\partial x} \right\rangle = \left\langle 1, 0, \frac{\partial g}{\partial x} \right\rangle$

$\mathbf{r}_y = \frac{\partial \mathbf{r}}{\partial y} = \left\langle \frac{\partial x}{\partial y}, \frac{\partial y}{\partial y}, \frac{\partial g}{\partial y} \right\rangle = \left\langle 0, 1, \frac{\partial g}{\partial y} \right\rangle$

Next, we compute the cross product $\mathbf{r}_x \times \mathbf{r}_y$:

$\mathbf{r}_x \times \mathbf{r}_y = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 1 & 0 & \frac{\partial g}{\partial x} \\ 0 & 1 & \frac{\partial g}{\partial y} \end{vmatrix} = \mathbf{i} \left( 0 \cdot \frac{\partial g}{\partial y} - \frac{\partial g}{\partial x} \cdot 1 \right) - \mathbf{j} \left( 1 \cdot \frac{\partial g}{\partial y} - \frac{\partial g}{\partial x} \cdot 0 \right) + \mathbf{k} (1 \cdot 1 - 0 \cdot 0)$

$\mathbf{r}_x \times \mathbf{r}_y = -\frac{\partial g}{\partial x} \mathbf{i} - \frac{\partial g}{\partial y} \mathbf{j} + 1 \mathbf{k} = \left\langle -\frac{\partial g}{\partial x}, -\frac{\partial g}{\partial y}, 1 \right\rangle$

This vector, $\left\langle -\frac{\partial g}{\partial x}, -\frac{\partial g}{\partial y}, 1 \right\rangle$, is normal to the surface $S$. It points upwards (in the positive $z$ direction) because its $z$-component is positive. If we wanted the *downward* normal, we would use the negative of this vector. The choice of normal depends on the problem statement, often specifying whether it's "upward-pointing" or "downward-pointing."

Now, let our vector field be $\mathbf{F}(x, y, z) = \langle P(x, y, z), Q(x, y, z), R(x, y, z) \rangle$. To evaluate the flux, we need to express $\mathbf{F}$ in terms of our parameters $x$ and $y$. Since $z = g(x, y)$, we substitute this into $\mathbf{F}$:

$\mathbf{F}(x, y, g(x, y)) = \langle P(x, y, g(x, y)), Q(x, y, g(x, y)), R(x, y, g(x, y)) \rangle$

Then, we compute the dot product:

$\mathbf{F} \cdot (\mathbf{r}_x \times \mathbf{r}_y) = \langle P, Q, R \rangle \cdot \left\langle -\frac{\partial g}{\partial x}, -\frac{\partial g}{\partial y}, 1 \right\rangle$
$= -P \frac{\partial g}{\partial x} - Q \frac{\partial g}{\partial y} + R$

The differential surface element $d\mathbf{S}$ is then $(\mathbf{r}_x \times \mathbf{r}_y) \, dx \, dy$. So, the flux integral becomes:

$\iint_S \mathbf{F} \cdot d\mathbf{S} = \iint_D \left( -P \frac{\partial g}{\partial x} - Q \frac{\partial g}{\partial y} + R \right) \, dA$

where $D$ is the region in the $xy$-plane that projects onto the surface $S$. This integral is a standard double integral over region $D$, which we know how to evaluate. This is where **CO1: Compute the partial and total derivatives... and apply in engineering problems** comes into play, as we heavily rely on partial derivatives of $g(x, y)$ and the components of $\mathbf{F}$.

**Important Note:** The sign of the flux depends on the direction of the normal vector. If the problem implicitly assumes an upward normal (which is common when $z=g(x,y)$ defines the surface) and your cross product yields an upward normal, you use it directly. If the problem specifies a downward normal, you'd either reverse the sign of your cross product or the final result.

### 3. A Real-World Analogy: Measuring Rainfall on a Curved Roof

Let's imagine a slightly sloped, curved roof of a building, described by $z = g(x, y)$. We want to measure the total amount of rain falling on this roof per hour. The "rain" can be thought of as a vector field, say $\mathbf{F}(x, y, z)$, where $\mathbf{F}$ represents the velocity of raindrops. We're interested in the flux of this rain field *downward* onto the roof.

If we consider a small patch of the roof, $dS$, and the velocity of rain hitting it is $\mathbf{F}$, the amount of rain hitting that patch is related to $\mathbf{F} \cdot \mathbf{n} \, dS$, where $\mathbf{n}$ is the outward normal to the roof. If the roof is curved, this calculation can be tricky.

Using our formula, we parameterize the roof as $\mathbf{r}(x, y) = \langle x, y, g(x, y) \rangle$. The vector field $\mathbf{F}$ might be constant, like $\mathbf{F} = \langle 0, 0, -k \rangle$ (representing rain falling straight down, where $k$ is a positive constant), or it could be more complex. If $\mathbf{F} = \langle P, Q, R \rangle$, and we want the flux *downward*, we'd be interested in the normal pointing into the building. For a roof curving upwards, the outward normal naturally points upwards. If we want the flux *of rain hitting the roof*, we are interested in the component of the rain velocity *opposite* to the upward normal.

Let's say our vector field $\mathbf{F} = \langle P, Q, R \rangle$ represents the wind velocity. If the roof $z = g(x, y)$ is above the $xy$-plane, the natural outward normal vector is $\left\langle -\frac{\partial g}{\partial x}, -\frac{\partial g}{\partial y}, 1 \right\rangle$. If we want to measure how much wind is "pushing" the roof upwards, we calculate $\iint_S \mathbf{F} \cdot d\mathbf{S}$ with this upward normal. If we want to measure how much wind is flowing *over* the roof, the direction of interest might be different.

For our rain example, if rain is falling straight down, $\mathbf{F} = \langle 0, 0, -k \rangle$, and the roof is $z = g(x, y)$ with the upward normal $\mathbf{N} = \left\langle -\frac{\partial g}{\partial x}, -\frac{\partial g}{\partial y}, 1 \right\rangle$. The flux of rain *into* the roof (i.e., downward) would involve the normal pointing downwards, $-\mathbf{N} = \left\langle \frac{\partial g}{\partial x}, \frac{\partial g}{\partial y}, -1 \right\rangle$. The flux integral would then be:

$\iint_S \mathbf{F} \cdot d\mathbf{S} = \iint_D \mathbf{F} \cdot (-\mathbf{N}) \, dA$
$= \iint_D \langle 0, 0, -k \rangle \cdot \left\langle \frac{\partial g}{\partial x}, \frac{\partial g}{\partial y}, -1 \right\rangle \, dA$
$= \iint_D (-k)(-1) \, dA = \iint_D k \, dA = k \cdot (\text{Area of } D)$

This makes intuitive sense! If rain falls at a constant rate $k$ (volume per unit area per unit time), the total volume of rain hitting the roof per unit time is just $k$ times the area of the roof projected onto the ground. This is a beautiful confirmation of the formula. This application directly relates to **CO4: Apply the concepts of surface and volume integrals and to learn their inter-relations and applications**.

### 4. Step-by-Step Evaluation

Let's break down the process of calculating the flux integral for a surface $z = g(x, y)$ with a given vector field $\mathbf{F} = \langle P, Q, R \rangle$, assuming we want the flux through the surface where the normal vector has a positive $z$-component (i.e., points "upward").

**Step 1: Identify the Surface and the Region of Integration.**
The surface is given by $z = g(x, y)$. The region $D$ is the projection of this surface onto the $xy$-plane. This region $D$ will be defined by the limits of $x$ and $y$ over which you are considering the surface.

**Step 2: Determine the Partial Derivatives of g(x, y).**
Calculate $\frac{\partial g}{\partial x}$ and $\frac{\partial g}{\partial y}$.

**Step 3: Express the Vector Field F in Terms of x and y.**
Substitute $z = g(x, y)$ into the components of $\mathbf{F} = \langle P(x, y, z), Q(x, y, z), R(x, y, z) \rangle$ to get $\mathbf{F}(x, y, g(x, y))$. Let the new components be $P^*(x, y)$, $Q^*(x, y)$, and $R^*(x, y)$.

**Step 4: Set up the Integrand.**
The integrand for the flux integral is $\left( -P^* \frac{\partial g}{\partial x} - Q^* \frac{\partial g}{\partial y} + R^* \right)$. This is derived from $\mathbf{F} \cdot (\mathbf{r}_x \times \mathbf{r}_y)$ with the upward normal.

**Step 5: Evaluate the Double Integral.**
Calculate $\iint_D \left( -P^* \frac{\partial g}{\partial x} - Q^* \frac{\partial g}{\partial y} + R^* \right) \, dA$. This is a standard double integral over the region $D$ in the $xy$-plane.

**Quick Tip for Exams:** Always double-check the *direction* of the normal vector required by the problem. If it's the upward normal for $z=g(x,y)$, the formula is $\iint_D (-P \frac{\partial g}{\partial x} - Q \frac{\partial g}{\partial y} + R) \, dA$. If it's the downward normal, you simply flip the sign: $\iint_D (P \frac{\partial g}{\partial x} + Q \frac{\partial g}{\partial y} - R) \, dA$. This is a very common place for students to lose marks.

### 5. Example Walkthrough

Let's try a concrete example. Suppose we want to find the flux of the vector field $\mathbf{F}(x, y, z) = \langle xz, yz, z \rangle$ across the surface $S$ given by $z = x^2 + y^2$ for $0 \le z \le 1$, where the normal vector points upward.

**Step 1: Identify the Surface and the Region of Integration.**
The surface is $z = g(x, y) = x^2 + y^2$.
The condition $0 \le z \le 1$ means $0 \le x^2 + y^2 \le 1$. This is a disk of radius 1 centered at the origin in the $xy$-plane. So, our region of integration $D$ is the disk $x^2 + y^2 \le 1$.

**Step 2: Determine the Partial Derivatives of g(x, y).**
$g(x, y) = x^2 + y^2$
$\frac{\partial g}{\partial x} = 2x$
$\frac{\partial g}{\partial y} = 2y$

**Step 3: Express the Vector Field F in Terms of x and y.**
$\mathbf{F}(x, y, z) = \langle xz, yz, z \rangle$.
Substitute $z = x^2 + y^2$:
$\mathbf{F}(x, y, g(x, y)) = \langle x(x^2 + y^2), y(x^2 + y^2), (x^2 + y^2) \rangle$
So, $P^*(x, y) = x(x^2 + y^2)$, $Q^*(x, y) = y(x^2 + y^2)$, and $R^*(x, y) = x^2 + y^2$.

**Step 4: Set up the Integrand.**
The integrand for the flux with upward normal is:
$-P^* \frac{\partial g}{\partial x} - Q^* \frac{\partial g}{\partial y} + R^*$
$= -[x(x^2 + y^2)](2x) - [y(x^2 + y^2)](2y) + (x^2 + y^2)$
$= -2x^2(x^2 + y^2) - 2y^2(x^2 + y^2) + (x^2 + y^2)$
$= (x^2 + y^2) [-2x^2 - 2y^2 + 1]$
$= (x^2 + y^2) [1 - 2(x^2 + y^2)]$

**Step 5: Evaluate the Double Integral.**
We need to calculate $\iint_D (x^2 + y^2) [1 - 2(x^2 + y^2)] \, dA$ over the disk $D: x^2 + y^2 \le 1$.
This integral is much easier to evaluate using polar coordinates.
Let $x = r \cos \theta$ and $y = r \sin \theta$. Then $x^2 + y^2 = r^2$, and $dA = r \, dr \, d\theta$.
The region $D$ in polar coordinates is $0 \le r \le 1$ and $0 \le \theta \le 2\pi$.

The integral becomes:
$\int_0^{2\pi} \int_0^1 (r^2) [1 - 2r^2] r \, dr \, d\theta$
$= \int_0^{2\pi} \int_0^1 (r^3 - 2r^5) \, dr \, d\theta$

First, integrate with respect to $r$:
$\int_0^1 (r^3 - 2r^5) \, dr = \left[ \frac{r^4}{4} - \frac{2r^6}{6} \right]_0^1 = \left[ \frac{r^4}{4} - \frac{r^6}{3} \right]_0^1$
$= \left( \frac{1^4}{4} - \frac{1^6}{3} \right) - (0 - 0) = \frac{1}{4} - \frac{1}{3} = \frac{3 - 4}{12} = -\frac{1}{12}$

Now, integrate with respect to $\theta$:
$\int_0^{2\pi} \left(-\frac{1}{12}\right) \, d\theta = -\frac{1}{12} [\theta]_0^{2\pi} = -\frac{1}{12} (2\pi - 0) = -\frac{2\pi}{12} = -\frac{\pi}{6}$

So, the flux of $\mathbf{F}$ across the given surface with an upward normal is $-\frac{\pi}{6}$.

What does this negative flux mean? It implies that, on average, more of the vector field $\mathbf{F}$ is flowing *outward* through the surface (in the direction of the upward normal) than is flowing *inward*. For example, if $\mathbf{F}$ represented a force field, this would indicate a net outward push.

This example highlights the application of partial derivatives (CO1) and integration techniques, moving towards surface integrals (CO4).

### 6. Connection to Green's Theorem (Conceptual)

You might be wondering about the mention of Green's Theorem in the module title. Green's Theorem relates a line integral around a simple closed curve $C$ to a double integral over the region $D$ enclosed by $C$. Specifically, $\oint_C P \, dx + Q \, dy = \iint_D \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right) \, dA$.

While Green's Theorem itself is for planar regions and line integrals, the *philosophy* of relating an integral over a boundary to an integral over the region itself is shared by the Divergence Theorem (for volumes and surfaces) and Stokes' Theorem (for surfaces and curves). The formula we derived for flux, $\iint_D \left( -P \frac{\partial g}{\partial x} - Q \frac{\partial g}{\partial y} + R \right) \, dA$, converts a surface integral into a double integral over a planar region. This transformation is a core idea in multivariable calculus, showing how concepts generalize. For surfaces of the form $z = g(x, y)$, this transformation is direct and avoids the need for explicit parameterizations of a boundary curve.

In essence, we are using the machinery of double integrals to evaluate an integral that represents a flow across a surface, leveraging our understanding of how the surface's shape (through its partial derivatives) affects this flow.

### Summary and Key Takeaways

*   **Flux** measures the net flow of a vector field across a surface.
*   For surfaces $z = g(x, y)$, we can parameterize them as $\mathbf{r}(x, y) = \langle x, y, g(x, y) \rangle$.
*   The upward normal vector to such a surface is given by $\mathbf{N} = \left\langle -\frac{\partial g}{\partial x}, -\frac{\partial g}{\partial y}, 1 \right\rangle$.
*   The flux integral $\iint_S \mathbf{F} \cdot d\mathbf{S}$ for an upward normal is evaluated as $\iint_D \left( -P \frac{\partial g}{\partial x} - Q \frac{\partial g}{\partial y} + R \right) \, dA$, where $\mathbf{F} = \langle P, Q, R \rangle$ and $D$ is the projection of $S$ onto the $xy$-plane.
*   Remember to substitute $z = g(x, y)$ into $\mathbf{F}$ before computing the dot product.
*   Polar coordinates are often very useful for evaluating the final double integral when the region $D$ is circular.
*   The sign of the flux indicates the net direction of flow relative to the chosen normal vector.

This topic builds a strong foundation for understanding how vector fields interact with geometric objects, a concept crucial in physics and engineering for analyzing phenomena like fields, fluid motion, and heat transfer.

---

### Sample Questions and Answers

**Question 1 (Conceptual):**
Explain what flux represents in the context of vector fields and surfaces. What does a positive flux value typically signify?

**Answer:**
Flux represents the net "flow" or "rate of passage" of a vector field through a surface. It quantifies how much of the vector field is moving across the surface, considering both the magnitude of the field and its orientation relative to the surface. A positive flux value generally signifies that, on average, the vector field is directed outward through the surface, aligned with the direction of the chosen outward normal vector. For example, if $\mathbf{F}$ represents fluid velocity and the normal vector points outward from a pipe, positive flux means fluid is flowing out of the pipe.

**Question 2 (Calculation-Oriented):**
Find the flux of the vector field $\mathbf{F}(x, y, z) = \langle x, y, z \rangle$ across the surface $S$ defined by $z = 4 - x^2 - y^2$ for $z \ge 0$, with the normal vector pointing upward.

**Solution:**
1.  **Surface and Region:** $z = g(x, y) = 4 - x^2 - y^2$. The condition $z \ge 0$ means $4 - x^2 - y^2 \ge 0$, or $x^2 + y^2 \le 4$. So, $D$ is the disk $x^2 + y^2 \le 4$.
2.  **Partial Derivatives:**
    $\frac{\partial g}{\partial x} = -2x$
    $\frac{\partial g}{\partial y} = -2y$
3.  **Vector Field in Terms of x, y:**
    $\mathbf{F}(x, y, z) = \langle x, y, z \rangle$. Substitute $z = 4 - x^2 - y^2$:
    $\mathbf{F}(x, y, g(x, y)) = \langle x, y, 4 - x^2 - y^2 \rangle$.
    So, $P^*(x, y) = x$, $Q^*(x, y) = y$, $R^*(x, y) = 4 - x^2 - y^2$.
4.  **Integrand:**
    Flux $= \iint_D \left( -P^* \frac{\partial g}{\partial x} - Q^* \frac{\partial g}{\partial y} + R^* \right) \, dA$
    $= \iint_D \left( -(x)(-2x) - (y)(-2y) + (4 - x^2 - y^2) \right) \, dA$
    $= \iint_D (2x^2 + 2y^2 + 4 - x^2 - y^2) \, dA$
    $= \iint_D (x^2 + y^2 + 4) \, dA$
5.  **Evaluate Integral:** Use polar coordinates for the disk $D: x^2 + y^2 \le 4$.
    $x^2 + y^2 = r^2$, $dA = r \, dr \, d\theta$. Limits: $0 \le r \le 2$, $0 \le \theta \le 2\pi$.
    $\int_0^{2\pi} \int_0^2 (r^2 + 4) r \, dr \, d\theta$
    $= \int_0^{2\pi} \int_0^2 (r^3 + 4r) \, dr \, d\theta$
    Inner integral: $\left[ \frac{r^4}{4} + 2r^2 \right]_0^2 = \left( \frac{16}{4} + 2(4) \right) - 0 = 4 + 8 = 12$.
    Outer integral: $\int_0^{2\pi} 12 \, d\theta = 12 [\theta]_0^{2\pi} = 12(2\pi) = 24\pi$.

The flux is $24\pi$.

**Question 3 (Understanding Normal Vector Direction):**
Consider the surface $z = x^2$ over the region $D: 0 \le x \le 1, 0 \le y \le 1$. If the vector field is $\mathbf{F} = \langle 0, 0, 1 \rangle$, what is the flux across this surface if the normal vector points downward?

**Solution:**
1.  **Surface and Region:** $z = g(x, y) = x^2$. Region $D$ is the unit square $[0, 1] \times [0, 1]$.
2.  **Partial Derivatives:**
    $\frac{\partial g}{\partial x} = 2x$
    $\frac{\partial g}{\partial y} = 0$
3.  **Vector Field in Terms of x, y:**
    $\mathbf{F} = \langle 0, 0, 1 \rangle$. $P^* = 0, Q^* = 0, R^* = 1$.
4.  **Integrand for Downward Normal:**
    The formula for downward normal is $\iint_D (P^* \frac{\partial g}{\partial x} + Q^* \frac{\partial g}{\partial y} - R^*) \, dA$.
    Integrand $= (0)(2x) + (0)(0) - 1 = -1$.
5.  **Evaluate Integral:**
    $\iint_D (-1) \, dA = -1 \times (\text{Area of } D)$
    Since $D$ is the unit square, its area is $1 \times 1 = 1$.
    Flux $= -1 \times 1 = -1$.

This indicates that the vector field $\mathbf{F} = \langle 0, 0, 1 \rangle$ (pointing upward) is flowing, on average, in the opposite direction to the downward normal, which is consistent.
