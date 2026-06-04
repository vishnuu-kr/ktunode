---
title: "independence of path"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2"
module: "Module 3: Vector valued function of single variable "
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912cdc"
status: "completed"
scrapedAt: "2026-05-20T18:37:03.729Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2
## Module 3: Vector-Valued Functions of a Single Variable
### Topic: Independence of Path

Welcome back, everyone! In this section of our journey through vector-valued functions, we're going to tackle a concept that's truly fundamental when we start thinking about how forces work, how energy is transferred, or even how much work is done. We're going to explore **Independence of Path**.

Now, what do we mean by "independence of path"? Imagine you're walking from your home to a coffee shop. You could take the direct route, or you could take a scenic detour through the park. If the "effort" or "cost" of your journey only depends on where you *start* and where you *end*, and not the specific route you take, then we say the journey is **path-independent**. This is the core idea we'll be exploring with vector fields and line integrals.

**Why is this important for us?**

Let's connect this to our course outcomes.

*   **CO3: Compute the derivatives and line integrals of vector functions and to learn their applications.** Understanding path independence is crucial for computing line integrals efficiently. If a line integral is path independent, it simplifies our calculations considerably. Think about physics: in conservative force fields (like gravity or the electrostatic force), the work done to move an object between two points is the same regardless of the path taken. This is a direct application of path independence.
*   **CO1: Compute the partial and total derivatives and maxima and minima of multivariable functions and to apply in engineering problems.** Path independence is deeply linked to the concept of conservative vector fields, which are often gradients of scalar potential functions. Being able to identify and work with these potentials is key to solving many engineering problems, especially those involving energy conservation.

### What is a Vector Field?

Before we dive into path independence, let's quickly refresh what a **vector field** is. A vector field, denoted by $\mathbf{F}(x, y)$ or $\mathbf{F}(x, y, z)$, assigns a vector to each point in space. Think of it as an arrow attached to every point, indicating a direction and magnitude.

*   **Analogy:** Imagine a map showing wind currents. At each point on the map, there's an arrow representing the wind's speed and direction at that location. This entire map of arrows is a vector field.
*   **In Physics:** Gravitational fields, electric fields, magnetic fields, and fluid flow are all examples of vector fields.

### Line Integrals: The Workhorse of Path Dependence

We've learned about line integrals. A line integral of a vector field $\mathbf{F}$ along a curve $C$ essentially measures the "work done" by the field on a particle moving along that curve. Mathematically, it's often expressed as:

$\int_C \mathbf{F} \cdot d\mathbf{r}$

where $\mathbf{r}(t)$ is a parameterization of the curve $C$, and $d\mathbf{r} = \mathbf{r}'(t) dt$.

Now, the question arises: If we have two different curves, $C_1$ and $C_2$, connecting the same two points, say point A to point B, will the line integral $\int_{C_1} \mathbf{F} \cdot d\mathbf{r}$ always be equal to $\int_{C_2} \mathbf{F} \cdot d\mathbf{r}$?

The answer is: **not always**. It depends on the nature of the vector field $\mathbf{F}$.

### Introducing Path Independence: When the Route Doesn't Matter

A vector field $\mathbf{F}$ is said to be **path-independent** over a region $D$ if, for any two points A and B in $D$, the line integral of $\mathbf{F}$ from A to B is the same for all smooth curves $C$ in $D$ connecting A and B.

**Key Idea:** If $\mathbf{F}$ is path-independent, then the line integral of $\mathbf{F}$ around any closed loop is zero.

$\oint_C \mathbf{F} \cdot d\mathbf{r} = 0$ for any closed curve $C$.

### The Crucial Link: Conservative Vector Fields and Potential Functions

This is where the magic happens and where we connect to our potential functions. A vector field $\mathbf{F}$ is called **conservative** if there exists a scalar function $\phi(x, y, z)$ (or $\phi(x, y)$ in 2D) such that $\mathbf{F}$ is the **gradient** of $\phi$. That is:

$\mathbf{F} = \nabla \phi$

The scalar function $\phi$ is called the **potential function** or **antiderivative** of $\mathbf{F}$.

**Here's the fundamental theorem that ties everything together:**

***Theorem (Fundamental Theorem of Line Integrals):*** If $\mathbf{F}$ is a conservative vector field on a simply connected domain, and $\mathbf{F} = \nabla \phi$, then for any piecewise smooth curve $C$ from point A to point B,

$\int_C \mathbf{F} \cdot d\mathbf{r} = \phi(B) - \phi(A)$

**What does this theorem tell us?**

1.  **Path Independence:** The value of the line integral depends *only* on the endpoints A and B, not the path taken between them. This is the very definition of path independence!
2.  **Efficiency:** If we know the potential function $\phi$, computing the line integral becomes as simple as evaluating $\phi$ at the endpoint and subtracting its value at the starting point. This is a massive simplification compared to parameterizing and integrating along the curve.

**How do we recognize if a vector field is conservative (and thus path-independent)?**

Let's consider a 2D vector field $\mathbf{F}(x, y) = P(x, y) \mathbf{i} + Q(x, y) \mathbf{j}$. If $\mathbf{F}$ is conservative, it must be the gradient of some scalar function $\phi(x, y)$. This means:

$P(x, y) = \frac{\partial \phi}{\partial x}$ and $Q(x, y) = \frac{\partial \phi}{\partial y}$

Now, let's take the partial derivatives of these:

$\frac{\partial P}{\partial y} = \frac{\partial}{\partial y}\left(\frac{\partial \phi}{\partial x}\right) = \frac{\partial^2 \phi}{\partial y \partial x}$

$\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}\left(\frac{\partial \phi}{\partial y}\right) = \frac{\partial^2 \phi}{\partial x \partial y}$

By Clairaut's Theorem (or the theorem of equality of mixed partial derivatives), if the second partial derivatives are continuous in a region, then $\frac{\partial^2 \phi}{\partial y \partial x} = \frac{\partial^2 \phi}{\partial x \partial y}$.

Therefore, if $\mathbf{F}$ is conservative and has continuous second partial derivatives, we must have:

$\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$

This gives us a powerful test!

***Test for Conservative Fields (2D):*** A vector field $\mathbf{F}(x, y) = P(x, y) \mathbf{i} + Q(x, y) \mathbf{j}$ is conservative on a simply connected domain if and only if $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$ and $P, Q$ have continuous first partial derivatives.

For a 3D vector field $\mathbf{F}(x, y, z) = P(x, y, z) \mathbf{i} + Q(x, y, z) \mathbf{j} + R(x, y, z) \mathbf{k}$:

$\mathbf{F}$ is conservative if and only if its **curl** is the zero vector, i.e., $\text{curl } \mathbf{F} = \mathbf{0}$.

Recall that $\text{curl } \mathbf{F} = \nabla \times \mathbf{F} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ P & Q & R \end{vmatrix} = \left(\frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z}\right)\mathbf{i} - \left(\frac{\partial R}{\partial x} - \frac{\partial P}{\partial z}\right)\mathbf{j} + \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right)\mathbf{k}$.

So, for 3D, the condition for being conservative (and thus path-independent) is:

$\frac{\partial R}{\partial y} = \frac{\partial Q}{\partial z}$, $\frac{\partial R}{\partial x} = \frac{\partial P}{\partial z}$, and $\frac{\partial Q}{\partial x} = \frac{\partial P}{\partial y}$.

**Important Note:** The condition $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$ (or $\text{curl } \mathbf{F} = \mathbf{0}$) is a necessary condition for conservativeness. However, it is **sufficient** only if the domain of the vector field is **simply connected**. A simply connected domain is one without any "holes" or "tunnels." For example, the entire plane $\mathbb{R}^2$ is simply connected, but an annulus (a ring shape) is not. If the domain isn't simply connected, you might have a field where $\text{curl } \mathbf{F} = \mathbf{0}$, but the field isn't conservative and line integrals might not be path-independent. This is a subtle but important point, as noted in texts like Anton, Biven, Davis (12th ed.) and Thomas' Calculus (15th ed.).

### Finding the Potential Function $\phi$

If we've determined that a field is conservative, how do we find its potential function $\phi$? We use the definitions:

For $\mathbf{F}(x, y) = P(x, y) \mathbf{i} + Q(x, y) \mathbf{j}$:
1.  We know $P = \frac{\partial \phi}{\partial x}$. Integrate $P$ with respect to $x$:
    $\phi(x, y) = \int P(x, y) \, dx + g(y)$
    Here, $g(y)$ is an arbitrary function of $y$ because the integral of $P$ with respect to $x$ only accounts for the $x$ dependence; any $y$ dependence could be carried by a function of $y$ alone.
2.  Now, we know $Q = \frac{\partial \phi}{\partial y}$. Differentiate the expression for $\phi(x, y)$ from step 1 with respect to $y$:
    $\frac{\partial \phi}{\partial y} = \frac{\partial}{\partial y}\left(\int P(x, y) \, dx\right) + g'(y)$
3.  Set this equal to $Q(x, y)$ and solve for $g'(y)$.
4.  Integrate $g'(y)$ with respect to $y$ to find $g(y)$ (don't forget the constant of integration, although it's absorbed into the arbitrary constant for $\phi$).
5.  Substitute $g(y)$ back into the expression for $\phi(x, y)$.

The same logic applies in 3D, just with more partial derivatives to match.

### Examples to Illuminate the Concept

Let's work through some examples.

**Example 1: A Clearly Conservative Field**

Let $\mathbf{F}(x, y) = 2x \mathbf{i} + 2y \mathbf{j}$.
Is this field conservative?
Let $P(x, y) = 2x$ and $Q(x, y) = 2y$.
$\frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(2x) = 0$
$\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(2y) = 0$
Since $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$ and the domain is $\mathbb{R}^2$ (simply connected), $\mathbf{F}$ is conservative.

Now, let's find the potential function $\phi(x, y)$.
1.  Integrate $P$ with respect to $x$:
    $\phi(x, y) = \int 2x \, dx + g(y) = x^2 + g(y)$
2.  Differentiate with respect to $y$:
    $\frac{\partial \phi}{\partial y} = \frac{\partial}{\partial y}(x^2 + g(y)) = g'(y)$
3.  Set this equal to $Q$: $g'(y) = 2y$
4.  Integrate $g'(y)$ to find $g(y)$:
    $g(y) = \int 2y \, dy = y^2 + C_1$. We can take $C_1 = 0$ for simplicity as it's an arbitrary constant.
5.  So, the potential function is $\phi(x, y) = x^2 + y^2$.

Now, let's compute the line integral from point A=(1,1) to point B=(2,3) along *any* path.
Using the Fundamental Theorem of Line Integrals:
$\int_C \mathbf{F} \cdot d\mathbf{r} = \phi(B) - \phi(A) = \phi(2,3) - \phi(1,1)$
$\phi(2,3) = 2^2 + 3^2 = 4 + 9 = 13$
$\phi(1,1) = 1^2 + 1^2 = 1 + 1 = 2$
So, $\int_C \mathbf{F} \cdot d\mathbf{r} = 13 - 2 = 11$.

**Intuition Check:** This vector field $\mathbf{F}(x,y) = 2x\mathbf{i} + 2y\mathbf{j}$ points radially outwards from the origin, and its magnitude increases with distance. The potential function $\phi(x,y) = x^2 + y^2$ is the square of the distance from the origin. This makes sense in terms of energy: moving further away from the origin requires more "work" or energy. The work done only depends on the change in your squared distance from the origin.

**Example 2: A Field That Might NOT Be Conservative**

Let $\mathbf{F}(x, y) = y \mathbf{i} + x \mathbf{j}$.
$P(x, y) = y$, $Q(x, y) = x$.
$\frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(y) = 1$
$\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(x) = 1$
Since $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$, this field is conservative (and path-independent) on $\mathbb{R}^2$.

Let's find the potential function.
1.  Integrate $P$ with respect to $x$:
    $\phi(x, y) = \int y \, dx + g(y) = xy + g(y)$
2.  Differentiate with respect to $y$:
    $\frac{\partial \phi}{\partial y} = \frac{\partial}{\partial y}(xy + g(y)) = x + g'(y)$
3.  Set this equal to $Q$: $x + g'(y) = x \implies g'(y) = 0$
4.  Integrate $g'(y)$: $g(y) = \int 0 \, dy = C_2$. We can take $C_2 = 0$.
5.  So, the potential function is $\phi(x, y) = xy$.

Let's compute the line integral from A=(0,0) to B=(2,1).
$\int_C \mathbf{F} \cdot d\mathbf{r} = \phi(2,1) - \phi(0,0) = (2)(1) - (0)(0) = 2$.

**Let's verify this with a specific path (as a check).**
Path 1: $C_1$ is the line segment from (0,0) to (2,1).
Parametrization: $\mathbf{r}(t) = \langle 2t, t \rangle$, for $0 \le t \le 1$.
$d\mathbf{r} = \langle 2, 1 \rangle \, dt$.
$\mathbf{F}(\mathbf{r}(t)) = \langle t, 2t \rangle$.
$\mathbf{F} \cdot d\mathbf{r} = \langle t, 2t \rangle \cdot \langle 2, 1 \rangle \, dt = (2t + 2t) \, dt = 4t \, dt$.
$\int_{C_1} \mathbf{F} \cdot d\mathbf{r} = \int_0^1 4t \, dt = \left[2t^2\right]_0^1 = 2(1)^2 - 0 = 2$. Matches!

Path 2: $C_2$ is the path from (0,0) to (2,0) then to (2,1).
Segment 1: (0,0) to (2,0). $\mathbf{r}(t) = \langle t, 0 \rangle$, $0 \le t \le 2$.
$\mathbf{F}(\mathbf{r}(t)) = \langle 0, t \rangle$. $d\mathbf{r} = \langle 1, 0 \rangle \, dt$.
$\mathbf{F} \cdot d\mathbf{r} = \langle 0, t \rangle \cdot \langle 1, 0 \rangle \, dt = 0 \, dt$. Integral is 0.
Segment 2: (2,0) to (2,1). $\mathbf{r}(t) = \langle 2, t \rangle$, $0 \le t \le 1$.
$\mathbf{F}(\mathbf{r}(t)) = \langle t, 2 \rangle$. $d\mathbf{r} = \langle 0, 1 \rangle \, dt$.
$\mathbf{F} \cdot d\mathbf{r} = \langle t, 2 \rangle \cdot \langle 0, 1 \rangle \, dt = 2 \, dt$. Integral is $\int_0^1 2 \, dt = [2t]_0^1 = 2$.
Total integral for Path 2 = 0 + 2 = 2. Matches again! This is the power of path independence.

**Example 3: A Field and a "Hole" in the Domain**

Consider $\mathbf{F}(x, y) = \left\langle -\frac{y}{x^2+y^2}, \frac{x}{x^2+y^2} \right\rangle$.
This field is related to the circulation around the origin. The domain is $\mathbb{R}^2$ minus the origin (0,0).

Let $P(x, y) = -\frac{y}{x^2+y^2}$ and $Q(x, y) = \frac{x}{x^2+y^2}$.
Let's check the curl condition:
$\frac{\partial P}{\partial y} = \frac{\partial}{\partial y}\left(-\frac{y}{x^2+y^2}\right) = -\frac{(x^2+y^2)(1) - y(2y)}{(x^2+y^2)^2} = -\frac{x^2+y^2-2y^2}{(x^2+y^2)^2} = -\frac{x^2-y^2}{(x^2+y^2)^2} = \frac{y^2-x^2}{(x^2+y^2)^2}$.
$\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}\left(\frac{x}{x^2+y^2}\right) = \frac{(x^2+y^2)(1) - x(2x)}{(x^2+y^2)^2} = \frac{x^2+y^2-2x^2}{(x^2+y^2)^2} = \frac{y^2-x^2}{(x^2+y^2)^2}$.

Here, $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$. The condition holds! However, the domain is *not* simply connected because it has a hole at the origin.

What happens if we try to compute the line integral around the unit circle $C: x^2+y^2=1$?
Let's parameterize $C$ as $\mathbf{r}(t) = \langle \cos t, \sin t \rangle$, for $0 \le t \le 2\pi$.
$d\mathbf{r} = \langle -\sin t, \cos t \rangle \, dt$.
On the unit circle, $x^2+y^2 = 1$, so $P = -\sin t$ and $Q = \cos t$.
$\mathbf{F}(\mathbf{r}(t)) = \langle -\sin t, \cos t \rangle$.
$\mathbf{F} \cdot d\mathbf{r} = \langle -\sin t, \cos t \rangle \cdot \langle -\sin t, \cos t \rangle \, dt = (\sin^2 t + \cos^2 t) \, dt = 1 \, dt$.
$\int_C \mathbf{F} \cdot d\mathbf{r} = \int_0^{2\pi} 1 \, dt = [t]_0^{2\pi} = 2\pi$.

The line integral around the closed loop is $2\pi$, *not* zero. This means the field is **not conservative**, and line integrals are **not path-independent** over regions that include paths around the origin. Why? Because this field does not have a potential function defined everywhere on its domain. If it did, the integral around a closed loop would have to be zero.

This highlights the importance of the "simply connected" condition. While the $\text{curl } \mathbf{F} = \mathbf{0}$ test is powerful, always consider the domain of your vector field. This is a common pitfall in exams.

### Applications and Relevance to Your Studies

*   **Electrical Science:** In electrostatics, the electric field $\mathbf{E}$ is conservative. The work done by the electric field in moving a charge between two points is independent of the path. This allows us to define electric potential $V$ such that $\mathbf{E} = -\nabla V$. This is a direct application of path independence and potential functions, simplifying many circuit and field analysis problems.
*   **Physical Science (Mechanics):** In mechanics, conservative forces (like gravity, spring forces) lead to energy conservation. The work done by these forces depends only on the initial and final positions. This is why we can define potential energy functions (gravitational potential energy, elastic potential energy). If a force field is conservative, the total mechanical energy (kinetic + potential) remains constant. If the force is *not* conservative (like friction or air resistance), then work done by these forces changes the total mechanical energy.

Remember this: **Path independence is a hallmark of conservative systems.** When you encounter a problem where forces or fields are described in ways that suggest they are gradients of some potential, look for path independence. It will drastically simplify your calculations.

### Summary - Key Takeaways for Exams

1.  **Definition:** A vector field $\mathbf{F}$ is path-independent if the line integral $\int_C \mathbf{F} \cdot d\mathbf{r}$ depends only on the endpoints of the curve $C$, not the path itself.
2.  **Conservative Fields:** Path independence is equivalent to the vector field being **conservative**.
3.  **Potential Function:** A vector field $\mathbf{F}$ is conservative if $\mathbf{F} = \nabla \phi$ for some scalar function $\phi$, called the potential function.
4.  **The Fundamental Theorem of Line Integrals:** $\int_C \mathbf{F} \cdot d\mathbf{r} = \phi(B) - \phi(A)$ for a conservative field $\mathbf{F} = \nabla \phi$. This is the key to simplified integration.
5.  **Test for Conservativeness:**
    *   **2D:** $\mathbf{F} = P\mathbf{i} + Q\mathbf{j}$ is conservative if $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$ (on a simply connected domain).
    *   **3D:** $\mathbf{F} = P\mathbf{i} + Q\mathbf{j} + R\mathbf{k}$ is conservative if $\text{curl } \mathbf{F} = \nabla \times \mathbf{F} = \mathbf{0}$ (on a simply connected domain).
6.  **The "Simply Connected" Caveat:** The test for conservativeness is sufficient *only* if the domain is simply connected. Fields like $\left\langle -\frac{y}{x^2+y^2}, \frac{x}{x^2+y^2} \right\rangle$ have zero curl but are not conservative over domains with holes.
7.  **Finding $\phi$:** Integrate the components of $\mathbf{F}$ sequentially, using partial derivatives to determine the unknown functions of integration.

Mastering these points will give you a solid grasp of path independence and its applications in your field.

---

### Sample Questions with Answers

**Question 1 (Conceptual Understanding):**
If a vector field $\mathbf{F}$ is conservative, what can you say about the line integral of $\mathbf{F}$ around a closed loop? Explain why.

**Answer:**
If a vector field $\mathbf{F}$ is conservative, the line integral of $\mathbf{F}$ around any closed loop is zero. This is a direct consequence of the Fundamental Theorem of Line Integrals. If $\mathbf{F} = \nabla \phi$, then for a closed loop $C$ from point A back to point A, the integral is $\int_C \mathbf{F} \cdot d\mathbf{r} = \phi(A) - \phi(A) = 0$. This property is crucial for identifying conservative fields and understanding path independence.

**Question 2 (Application/Calculation):**
Determine if the vector field $\mathbf{F}(x, y) = (2x - y) \mathbf{i} + (x + 3y) \mathbf{j}$ is conservative. If it is, find its potential function $\phi(x, y)$.

**Answer:**
Let $P(x, y) = 2x - y$ and $Q(x, y) = x + 3y$.
We check the condition $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$:
$\frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(2x - y) = -1$.
$\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(x + 3y) = 1$.
Since $\frac{\partial P}{\partial y} \neq \frac{\partial Q}{\partial x}$ ($-1 \neq 1$), the vector field $\mathbf{F}$ is **not conservative**. Therefore, line integrals of this field are generally *not* path-independent. We cannot find a potential function for it.

**Question 3 (Exam-Oriented - Identifying pitfalls):**
Consider the vector field $\mathbf{F}(x, y) = \left\langle \frac{x}{x^2+y^2}, \frac{y}{x^2+y^2} \right\rangle$.
(a) Compute $\frac{\partial P}{\partial y}$ and $\frac{\partial Q}{\partial x}$ for this field.
(b) Is this field conservative on its entire domain? Justify your answer.
(c) Calculate the line integral $\int_C \mathbf{F} \cdot d\mathbf{r}$ where $C$ is the unit circle $x^2+y^2=1$ oriented counterclockwise.

**Answer:**
(a) Let $P(x, y) = \frac{x}{x^2+y^2}$ and $Q(x, y) = \frac{y}{x^2+y^2}$.
$\frac{\partial P}{\partial y} = \frac{\partial}{\partial y}\left(\frac{x}{x^2+y^2}\right) = x \cdot \frac{-2y}{(x^2+y^2)^2} = \frac{-2xy}{(x^2+y^2)^2}$.
$\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}\left(\frac{y}{x^2+y^2}\right) = y \cdot \frac{-2x}{(x^2+y^2)^2} = \frac{-2xy}{(x^2+y^2)^2}$.
So, $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$.

(b) The domain of $\mathbf{F}$ is $\mathbb{R}^2 \setminus \{(0,0)\}$, which is *not* simply connected because it has a hole at the origin. Although the condition $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$ holds, this does not guarantee conservativeness on a non-simply connected domain. In fact, this field is *not* conservative. The potential function $\phi(x,y) = \frac{1}{2}\ln(x^2+y^2)$ gives $\nabla \phi = \left\langle \frac{x}{x^2+y^2}, \frac{y}{x^2+y^2} \right\rangle$, but this function is not defined at the origin, and the presence of the origin as a hole prevents path independence for curves that might encircle it.

(c) Parameterize the unit circle $C$ as $\mathbf{r}(t) = \langle \cos t, \sin t \rangle$ for $0 \le t \le 2\pi$.
$d\mathbf{r} = \langle -\sin t, \cos t \rangle \, dt$.
On the unit circle, $x^2+y^2=1$. So, $\mathbf{F}(\mathbf{r}(t)) = \left\langle \frac{\cos t}{1}, \frac{\sin t}{1} \right\rangle = \langle \cos t, \sin t \rangle$.
$\mathbf{F} \cdot d\mathbf{r} = \langle \cos t, \sin t \rangle \cdot \langle -\sin t, \cos t \rangle \, dt = (-\cos t \sin t + \sin t \cos t) \, dt = 0 \, dt$.
$\int_C \mathbf{F} \cdot d\mathbf{r} = \int_0^{2\pi} 0 \, dt = 0$.

*Self-correction/Refinement on (c):* Wait, something is wrong. If the field is not conservative, the integral around a closed loop might not be zero, as seen in Example 3 in the notes. Let's re-evaluate.
Ah, I made a mistake in evaluating F.
$\mathbf{F}(\mathbf{r}(t)) = \left\langle \frac{\cos t}{\cos^2 t + \sin^2 t}, \frac{\sin t}{\cos^2 t + \sin^2 t} \right\rangle = \langle \cos t, \sin t \rangle$. This part was correct.
$d\mathbf{r} = \langle -\sin t, \cos t \rangle \, dt$. This is also correct.
$\mathbf{F} \cdot d\mathbf{r} = \langle \cos t, \sin t \rangle \cdot \langle -\sin t, \cos t \rangle \, dt = (\cos t (-\sin t) + \sin t (\cos t)) \, dt = (-\sin t \cos t + \sin t \cos t) \, dt = 0 \, dt$.

My previous example 3 was: $\mathbf{F}(x, y) = \left\langle -\frac{y}{x^2+y^2}, \frac{x}{x^2+y^2} \right\rangle$. Let's re-check the integral for *that* field for comparison.
For $\mathbf{F}(x, y) = \left\langle -\frac{y}{x^2+y^2}, \frac{x}{x^2+y^2} \right\rangle$:
$\mathbf{F}(\mathbf{r}(t)) = \left\langle -\frac{\sin t}{1}, \frac{\cos t}{1} \right\rangle = \langle -\sin t, \cos t \rangle$.
$\mathbf{F} \cdot d\mathbf{r} = \langle -\sin t, \cos t \rangle \cdot \langle -\sin t, \cos t \rangle \, dt = (\sin^2 t + \cos^2 t) \, dt = 1 \, dt$.
$\int_C \mathbf{F} \cdot d\mathbf{r} = \int_0^{2\pi} 1 \, dt = 2\pi$.

So, for the field $\mathbf{F}(x, y) = \left\langle \frac{x}{x^2+y^2}, \frac{y}{x^2+y^2} \right\rangle$ given in *this* question (which is the gradient of $\frac{1}{2}\ln(x^2+y^2)$), the line integral around the unit circle is indeed 0. This means that for this *specific* field, even though the domain is not simply connected, the line integral around the unit circle is zero. This highlights that not *all* fields with zero curl on non-simply connected domains will have non-zero loop integrals. It depends on the *actual* field. The potential function $\phi(x,y) = \frac{1}{2}\ln(x^2+y^2)$ works, and the Fundamental Theorem of Line Integrals applies here to give $\phi(B) - \phi(A) = 0$ for a closed loop. The key is that the potential function *is* well-defined for curves not passing through the origin. So, the answer for (c) is 0. The critical distinction is whether a potential function exists *over the path taken*.

This is a subtle point often tested: the existence of a potential function on *some* subset of the domain that includes the path of integration is sufficient for the Fundamental Theorem to apply for that specific path. The field $\left\langle \frac{x}{x^2+y^2}, \frac{y}{x^2+y^2} \right\rangle$ is conservative because it *is* the gradient of $\frac{1}{2}\ln(x^2+y^2)$ which is well-behaved on the unit circle. The field $\left\langle -\frac{y}{x^2+y^2}, \frac{x}{x^2+y^2} \right\rangle$ is not conservative because it has no potential function defined on any region containing the origin.
