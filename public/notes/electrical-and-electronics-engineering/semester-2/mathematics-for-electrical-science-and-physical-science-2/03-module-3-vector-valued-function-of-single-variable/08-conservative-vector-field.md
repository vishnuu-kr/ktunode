---
title: "Conservative vector field"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 2"
module: "Module 3: Vector valued function of single variable "
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f983d"
status: "completed"
scrapedAt: "2026-05-23T16:08:16.707Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 2

## Module 3: Vector Valued Functions of a Single Variable

### Topic: Conservative Vector Fields

Welcome, everyone, to Module 3! Today, we're diving into a particularly elegant concept in vector calculus: **conservative vector fields**. This topic is crucial because it connects directly to some of the most fundamental ideas in physics and electrical science, allowing us to simplify calculations involving work done by forces, potential energy, and much more. As you'll see, understanding conservative fields is key to unlocking the power of line integrals, which we'll be exploring further, and it aligns perfectly with **Course Outcome 3 (CO3)** – computing derivatives and line integrals of vector functions and learning their applications.

#### What is a Vector Field? Let's Refresh Our Memory.

Before we talk about "conservative," let's quickly recap what a vector field is. Imagine you're in a room, and at every single point in that room, there's an arrow representing a force, a velocity, or some other vector quantity. That's a vector field! For a vector-valued function of a single variable, we're typically dealing with vector fields in 2D or 3D space. So, a vector field $\mathbf{F}$ in two dimensions might be represented as $\mathbf{F}(x, y) = P(x, y) \mathbf{i} + Q(x, y) \mathbf{j}$, where $P$ and $Q$ are scalar functions of $x$ and $y$. In three dimensions, it's $\mathbf{F}(x, y, z) = P(x, y, z) \mathbf{i} + Q(x, y, z) \mathbf{j} + R(x, y, z) \mathbf{k}$.

Think of the wind patterns on a map. At each location $(x, y)$, there's a wind velocity vector. Or, consider the gravitational field around the Earth – at every point in space, there's a force vector pulling objects towards the Earth's center. These are everyday examples of vector fields.

#### The Heart of the Matter: What Makes a Vector Field "Conservative"?

So, what does "conservative" mean in this context? A vector field is called **conservative** if the work done by that field in moving an object along a path between two points depends *only* on the starting and ending points, and *not* on the specific path taken.

Let's use an analogy. Imagine you're hiking. Your starting point is the base of a mountain, and your endpoint is the summit.
*   **Scenario 1 (Conservative):** If you're hiking up a mountain and the only force acting on you is gravity, the change in your potential energy (and the work done by gravity) depends only on your starting elevation and your final elevation. It doesn't matter if you took a steep, direct path or a long, winding trail. The net work done by gravity will be the same. This is like a conservative field!
*   **Scenario 2 (Not Conservative):** Now, imagine there's a strong wind pushing you sideways as you climb. If you take a path that fights the wind for a long time, you'll do more "work" against the wind than if you took a path that had you moving mostly with the wind. In this case, the total work done depends on the path. This is *not* like a conservative field.

In physics, forces like gravity and electrostatic forces are conservative. Forces like friction or air resistance are generally *not* conservative, because they dissipate energy as heat, and the work done against them clearly depends on the path.

#### The Potential Function: The Key to Conservatism

The defining characteristic of a conservative vector field $\mathbf{F}$ is that it can be expressed as the gradient of a scalar function, often called the **potential function** or **scalar potential**, denoted by $\phi$.

If $\mathbf{F}$ is a conservative vector field, then there exists a scalar function $\phi(x, y)$ (in 2D) or $\phi(x, y, z)$ (in 3D) such that:

$\mathbf{F} = \nabla \phi$

Let's break down what $\nabla \phi$ means:
*   In two dimensions: $\nabla \phi = \frac{\partial \phi}{\partial x} \mathbf{i} + \frac{\partial \phi}{\partial y} \mathbf{j}$.
*   In three dimensions: $\nabla \phi = \frac{\partial \phi}{\partial x} \mathbf{i} + \frac{\partial \phi}{\partial y} \mathbf{j} + \frac{\partial \phi}{\partial z} \mathbf{k}$.

So, if $\mathbf{F}(x, y) = P(x, y) \mathbf{i} + Q(x, y) \mathbf{j}$, and $\mathbf{F}$ is conservative, then $P(x, y) = \frac{\partial \phi}{\partial x}$ and $Q(x, y) = \frac{\partial \phi}{\partial y}$ for some scalar function $\phi$. Similarly, in 3D, if $\mathbf{F}(x, y, z) = P(x, y, z) \mathbf{i} + Q(x, y, z) \mathbf{j} + R(x, y, z) \mathbf{k}$, and $\mathbf{F}$ is conservative, then $P = \frac{\partial \phi}{\partial x}$, $Q = \frac{\partial \phi}{\partial y}$, and $R = \frac{\partial \phi}{\partial z}$.

This relationship is incredibly powerful! It means that if we can find this potential function $\phi$, we can easily calculate the work done by $\mathbf{F}$ along any path.

#### The Fundamental Theorem for Line Integrals

This is where our understanding of conservative fields really shines. The **Fundamental Theorem for Line Integrals** states that if $\mathbf{F}$ is a conservative vector field on a domain $D$, and $\mathbf{F} = \nabla \phi$ for some scalar function $\phi$, then for any piecewise smooth curve $C$ from point $A$ to point $B$ within $D$:

$\int_C \mathbf{F} \cdot d\mathbf{r} = \phi(B) - \phi(A)$

Remember **CO3**? This theorem is the direct application of that! It says the line integral of a conservative vector field is simply the difference in the potential function evaluated at the endpoint and the starting point. This bypasses the need to parameterize the curve and perform the actual integration, which can be very tedious.

Let's revisit the mountain analogy. If $\mathbf{F}$ represents the force of gravity, and $\phi$ is the gravitational potential energy, then the work done by gravity as you move from point $A$ (base) to point $B$ (summit) is $\phi(B) - \phi(A)$. This is a constant value, regardless of the path.

#### How to Check if a Vector Field is Conservative?

Now, the practical question: how do we *know* if a given vector field is conservative? We don't always have the potential function handy. Fortunately, there's a test!

**In Two Dimensions:**

For a vector field $\mathbf{F}(x, y) = P(x, y) \mathbf{i} + Q(x, y) \mathbf{j}$, if $P$ and $Q$ have continuous partial derivatives in a simply connected region (like a disk, or the entire plane, where there are no "holes"), then $\mathbf{F}$ is conservative *if and only if*:

$\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$

Why is this the case? Let's see. If $\mathbf{F} = \nabla \phi$, then $P = \frac{\partial \phi}{\partial x}$ and $Q = \frac{\partial \phi}{\partial y}$. Now, consider the mixed partial derivatives of $\phi$:
*   $\frac{\partial P}{\partial y} = \frac{\partial}{\partial y} \left(\frac{\partial \phi}{\partial x}\right) = \frac{\partial^2 \phi}{\partial y \partial x}$
*   $\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x} \left(\frac{\partial \phi}{\partial y}\right) = \frac{\partial^2 \phi}{\partial x \partial y}$

By Clairaut's Theorem (or the Theorem of Equality of Mixed Partials), if these second partial derivatives are continuous, then $\frac{\partial^2 \phi}{\partial y \partial x} = \frac{\partial^2 \phi}{\partial x \partial y}$. Hence, $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$.

This condition ($\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$) is often called the **curl condition** in 2D (though the formal curl is a bit more involved in 3D). If this condition is met, the field *might* be conservative. If it's not met, the field is *definitely not* conservative.

*Important Note on Simply Connected Regions:* This condition is sufficient for conservativeness *only* in a simply connected region. If the region is not simply connected (e.g., a disk with a hole in the center), then $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$ might hold, but the field might still not be conservative (the line integral around the hole might not be zero). However, for most problems in introductory courses, we deal with regions that are simply connected.

**In Three Dimensions:**

For a vector field $\mathbf{F}(x, y, z) = P(x, y, z) \mathbf{i} + Q(x, y, z) \mathbf{j} + R(x, y, z) \mathbf{k}$, if $P$, $Q$, and $R$ have continuous partial derivatives, then $\mathbf{F}$ is conservative *if and only if* its curl is zero:

$\text{curl } \mathbf{F} = \nabla \times \mathbf{F} = \mathbf{0}$

Recall the definition of the curl:
$\nabla \times \mathbf{F} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ P & Q & R \end{vmatrix} = \left(\frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z}\right) \mathbf{i} - \left(\frac{\partial R}{\partial x} - \frac{\partial P}{\partial z}\right) \mathbf{j} + \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right) \mathbf{k}$

So, for $\mathbf{F}$ to be conservative, all three components of its curl must be zero:
1.  $\frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z} = 0 \implies \frac{\partial R}{\partial y} = \frac{\partial Q}{\partial z}$
2.  $\frac{\partial P}{\partial z} - \frac{\partial R}{\partial x} = 0 \implies \frac{\partial P}{\partial z} = \frac{\partial R}{\partial x}$
3.  $\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = 0 \implies \frac{\partial Q}{\partial x} = \frac{\partial P}{\partial y}$

These are the three conditions we need to check in 3D. If all three hold, and the domain is simply connected, then $\mathbf{F}$ is conservative. This directly ties into **CO3** as well, as the curl is a derivative of the vector field.

#### Finding the Potential Function ($\phi$)

If we've confirmed a field is conservative, how do we actually *find* the potential function $\phi$? This is where we use the fact that $P = \frac{\partial \phi}{\partial x}$, $Q = \frac{\partial \phi}{\partial y}$ (and $R = \frac{\partial \phi}{\partial z}$ in 3D). We essentially "undifferentiate" or integrate.

**Steps to find $\phi$:**

1.  **Start with one component:** Choose either $P$ or $Q$. Let's say we start with $P$. We know $P(x, y) = \frac{\partial \phi}{\partial x}$.
2.  **Integrate with respect to $x$:** Integrate $P(x, y)$ with respect to $x$, treating $y$ as a constant. This gives you an expression for $\phi(x, y)$ that will include an arbitrary function of $y$, say $g(y)$, instead of a constant of integration.
    $\phi(x, y) = \int P(x, y) \, dx + g(y)$
3.  **Differentiate with respect to $y$:** Now, differentiate the expression for $\phi(x, y)$ that you just found with respect to $y$.
    $\frac{\partial \phi}{\partial y} = \frac{\partial}{\partial y} \left( \int P(x, y) \, dx \right) + g'(y)$
4.  **Equate to the other component:** We know that $Q(x, y) = \frac{\partial \phi}{\partial y}$. So, set the result from step 3 equal to $Q(x, y)$.
    $Q(x, y) = \frac{\partial}{\partial y} \left( \int P(x, y) \, dx \right) + g'(y)$
5.  **Solve for $g'(y)$ and then $g(y)$:** Rearrange the equation to solve for $g'(y)$.
    $g'(y) = Q(x, y) - \frac{\partial}{\partial y} \left( \int P(x, y) \, dx \right)$
    Integrate $g'(y)$ with respect to $y$ to find $g(y)$.
6.  **Substitute back:** Substitute the found $g(y)$ back into the expression for $\phi(x, y)$ from step 2.

**In 3D:** The process is similar, but you'll have two arbitrary functions of integration initially, which you'll then use the other partial derivative conditions to constrain.

Let's try an example. This directly addresses **CO3** where you need to compute derivatives and line integrals.

---

### Example 1: Is it Conservative? And if so, find the Potential.

Consider the vector field $\mathbf{F}(x, y) = (2xy) \mathbf{i} + (x^2 + e^y) \mathbf{j}$.

**Step 1: Check for Conservatism**
Here, $P(x, y) = 2xy$ and $Q(x, y) = x^2 + e^y$. The domain is the entire $xy$-plane, which is simply connected. Let's calculate the partial derivatives:
*   $\frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(2xy) = 2x$
*   $\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(x^2 + e^y) = 2x$

Since $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$, the vector field $\mathbf{F}$ is conservative. Great! This means we can use the Fundamental Theorem for Line Integrals.

**Step 2: Find the Potential Function $\phi(x, y)$**
We know $\mathbf{F} = \nabla \phi$, so $P = \frac{\partial \phi}{\partial x}$ and $Q = \frac{\partial \phi}{\partial y}$.

Let's start with $P$:
$\frac{\partial \phi}{\partial x} = 2xy$

Integrate with respect to $x$:
$\phi(x, y) = \int (2xy) \, dx = x^2y + g(y)$
Here, $g(y)$ is our arbitrary function of $y$.

Now, differentiate this expression for $\phi$ with respect to $y$:
$\frac{\partial \phi}{\partial y} = \frac{\partial}{\partial y}(x^2y + g(y)) = x^2 + g'(y)$

We know that $\frac{\partial \phi}{\partial y}$ must equal $Q(x, y)$:
$x^2 + g'(y) = x^2 + e^y$

Solving for $g'(y)$:
$g'(y) = e^y$

Now, integrate $g'(y)$ with respect to $y$ to find $g(y)$:
$g(y) = \int e^y \, dy = e^y + C$
We can absorb this constant $C$ into the potential function, or simply set it to 0 for simplicity, as we only need *one* potential function. Let's take $g(y) = e^y$.

Substitute $g(y)$ back into our expression for $\phi(x, y)$:
$\phi(x, y) = x^2y + e^y$

So, the potential function for $\mathbf{F}$ is $\phi(x, y) = x^2y + e^y$.

**Step 3: Calculate the Work Done (Illustrative Example)**
Suppose we want to find the work done by this field $\mathbf{F}$ in moving a particle from point $A = (1, 0)$ to point $B = (2, 1)$ along any path.
Using the Fundamental Theorem for Line Integrals:
Work = $\int_C \mathbf{F} \cdot d\mathbf{r} = \phi(B) - \phi(A)$
Work = $\phi(2, 1) - \phi(1, 0)$
Work = $[(2)^2(1) + e^1] - [(1)^2(0) + e^0]$
Work = $[4 + e] - [0 + 1]$
Work = $3 + e$

See how much easier this is than parameterizing a path and doing the integration directly? This is the power of conservative fields. This illustrates **CO3** perfectly – we've computed a line integral using the gradient.

---

### Example 2: A Non-Conservative Field

Let $\mathbf{F}(x, y) = (2x) \mathbf{i} + (3y) \mathbf{j}$.
*   $P(x, y) = 2x$, $Q(x, y) = 3y$.
*   $\frac{\partial P}{\partial y} = 0$
*   $\frac{\partial Q}{\partial x} = 0$

Since $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$, this field is conservative.
Let's find $\phi$.
$\frac{\partial \phi}{\partial x} = 2x \implies \phi(x, y) = x^2 + g(y)$.
$\frac{\partial \phi}{\partial y} = g'(y)$.
We need $\frac{\partial \phi}{\partial y} = Q = 3y$.
So, $g'(y) = 3y \implies g(y) = \frac{3}{2}y^2$.
Thus, $\phi(x, y) = x^2 + \frac{3}{2}y^2$.

---

### Example 3: A Field that's NOT Conservative

Consider the vector field $\mathbf{F}(x, y) = (xy^2) \mathbf{i} + (x^2y) \mathbf{j}$.
*   $P(x, y) = xy^2$, $Q(x, y) = x^2y$.
*   $\frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(xy^2) = 2xy$.
*   $\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(x^2y) = 2xy$.

Wait a minute! These are equal! This field *is* conservative. My apologies, I need to be careful in constructing examples. Let's try again.

Consider the vector field $\mathbf{F}(x, y) = (y) \mathbf{i} + (-x) \mathbf{j}$.
*   $P(x, y) = y$, $Q(x, y) = -x$.
*   $\frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(y) = 1$.
*   $\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(-x) = -1$.

Since $\frac{\partial P}{\partial y} \neq \frac{\partial Q}{\partial x}$ ($1 \neq -1$), this field is *not* conservative. You cannot find a single scalar function $\phi$ such that $\mathbf{F} = \nabla \phi$. This vector field describes a circulation, like a whirlpool, where the work done depends heavily on the path.

---

#### Connection to Potential Energy in Physics and Engineering

The concept of conservative fields is foundational in many areas of physical science and electrical science.

*   **Mechanics:** In physics, forces like gravity and the elastic force of a spring are conservative. The potential energy associated with these forces is $\phi$. The work done by a conservative force is equal to the *negative* of the change in potential energy: $W = -\Delta \phi$. This is a crucial link that you'll see repeatedly. For instance, the work done by gravity when you lift an object is $-\Delta U_g$, where $U_g$ is the gravitational potential energy. This aligns with **CO3**.

*   **Electrostatics:** The electrostatic force between charges is conservative. The electric potential $V$ is the scalar potential function (often with a negative sign convention depending on definition, but the gradient relationship holds). The work done by the electric field in moving a charge from point A to point B is $q(V(A) - V(B))$. This is a direct application of the Fundamental Theorem for Line Integrals and is highly relevant to electrical engineering. This is also covered under **CO3**.

*   **Fluid Dynamics:** While not all fluid flows are conservative, understanding when they *are* or how to analyze the non-conservative parts (like vorticity) is important.

**Important point:** The property that the line integral of a conservative field is path-independent is equivalent to the line integral around any closed loop being zero.
$\oint_C \mathbf{F} \cdot d\mathbf{r} = 0$ for any closed curve $C$. This is another way to define or test for conservativeness.

---

#### What to Watch Out For in Exams

1.  **Confusing Conservatism and Path Independence:** While they are related, the definition of conservativeness is the existence of a potential function $\mathbf{F} = \nabla \phi$. Path independence is a consequence of this.
2.  **The "Simply Connected" Condition:** Always remember that $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$ is only a guarantee of conservativeness in a simply connected region. If you have a region with a hole, and the field satisfies the partial derivative condition, you still need to check if the line integral around the hole is zero. For example, $\mathbf{F}(x, y) = \frac{-y \mathbf{i} + x \mathbf{j}}{x^2 + y^2}$ has $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$ everywhere except at $(0,0)$, but it's not conservative in $\mathbb{R}^2 \setminus \{(0,0)\}$ because the integral around the origin is $2\pi$.
3.  **Sign Errors when Finding $\phi$:** When integrating and differentiating, small errors can creep in. Double-check your work carefully.
4.  **3D Curl Calculations:** The determinant calculation for curl can be tricky. Make sure you get the signs and the order of differentiation correct.

---

### Summarizing the Key Takeaways:

*   A vector field $\mathbf{F}$ is **conservative** if it can be expressed as the gradient of a scalar potential function: $\mathbf{F} = \nabla \phi$.
*   The primary consequence of conservativeness is that the work done by $\mathbf{F}$ (or the line integral $\int_C \mathbf{F} \cdot d\mathbf{r}$) depends only on the endpoints of the path $C$, not the path itself. This is quantified by the **Fundamental Theorem for Line Integrals**: $\int_C \mathbf{F} \cdot d\mathbf{r} = \phi(B) - \phi(A)$. This directly supports **CO3**.
*   **Test for Conservatism (in a simply connected region):**
    *   2D: $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$
    *   3D: $\nabla \times \mathbf{F} = \mathbf{0}$ (i.e., all three components of the curl are zero).
*   If a field is conservative, we can find the potential function $\phi$ by integrating the components of $\mathbf{F}$ and carefully using the other components to determine the arbitrary functions of integration. This is also a key aspect of **CO3**.
*   Conservative fields are fundamental to understanding concepts like potential energy in mechanics and electric potential in electrostatics.

---

### Sample Questions with Answers

**Question 1 (Conceptual - CO3):**
Explain why the concept of a conservative vector field is important in physics and electrical science, and how it simplifies calculations involving work.

**Answer:**
A vector field is conservative if it can be expressed as the gradient of a scalar potential function ($\mathbf{F} = \nabla \phi$). This property is crucial because it implies that the work done by the field in moving an object between two points is independent of the path taken, depending only on the initial and final positions. This is formally stated by the Fundamental Theorem for Line Integrals: $\int_C \mathbf{F} \cdot d\mathbf{r} = \phi(B) - \phi(A)$.

In physics, forces like gravity and elastic forces are conservative. The potential energy is the scalar function $\phi$. The work done by these forces is simply the negative change in potential energy ($W = -\Delta \phi$), which is much easier to calculate than integrating along a specific path.

In electrical science, the electrostatic force is conservative. The electric potential is the scalar potential function. The work done by the electric field when moving a charge $q$ from point A to point B is $q(\phi(A) - \phi(B))$. This significantly simplifies calculations in circuits and electromagnetism, allowing engineers to analyze energy transformations and voltage differences without needing to perform complex path integrations. It directly supports **CO3** by showing a practical application of line integrals and derivatives of vector fields.

---

**Question 2 (Application - CO3):**
Determine if the vector field $\mathbf{F}(x, y) = (y \cos x) \mathbf{i} + (\sin x) \mathbf{j}$ is conservative. If it is, find its potential function $\phi(x, y)$.

**Answer:**
Let $P(x, y) = y \cos x$ and $Q(x, y) = \sin x$.
We check for conservatism by comparing the mixed partial derivatives:
$\frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(y \cos x) = \cos x$
$\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(\sin x) = \cos x$

Since $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$ and the domain (the entire $xy$-plane) is simply connected, the vector field $\mathbf{F}$ is conservative.

Now, we find the potential function $\phi(x, y)$.
We know that $\frac{\partial \phi}{\partial x} = P(x, y) = y \cos x$.
Integrating with respect to $x$:
$\phi(x, y) = \int (y \cos x) \, dx = y \sin x + g(y)$

Next, we differentiate this expression for $\phi$ with respect to $y$:
$\frac{\partial \phi}{\partial y} = \frac{\partial}{\partial y}(y \sin x + g(y)) = \sin x + g'(y)$

We set this equal to $Q(x, y)$:
$\sin x + g'(y) = \sin x$

Solving for $g'(y)$:
$g'(y) = 0$

Integrating $g'(y)$ with respect to $y$:
$g(y) = \int 0 \, dy = C$

We can take $C=0$ for simplicity. So, $g(y) = 0$.

Substituting $g(y)$ back into our expression for $\phi(x, y)$:
$\phi(x, y) = y \sin x$

Thus, the potential function is $\phi(x, y) = y \sin x$.

---

**Question 3 (Analysis/Application - CO3):**
Consider the vector field $\mathbf{F}(x, y, z) = (2x+y) \mathbf{i} + (x+z) \mathbf{j} + (y+z) \mathbf{k}$.
(a) Is $\mathbf{F}$ conservative? Justify your answer.
(b) If $\mathbf{F}$ is conservative, calculate the line integral $\int_C \mathbf{F} \cdot d\mathbf{r}$ where $C$ is a curve starting at $(0, 0, 0)$ and ending at $(1, 1, 1)$.

**Answer:**
Let $P(x, y, z) = 2x+y$, $Q(x, y, z) = x+z$, and $R(x, y, z) = y+z$.

(a) To check for conservatism, we compute the curl of $\mathbf{F}$:
$\nabla \times \mathbf{F} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ 2x+y & x+z & y+z \end{vmatrix}$

Let's compute the components:
*   $\mathbf{i}$-component: $\frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z} = \frac{\partial}{\partial y}(y+z) - \frac{\partial}{\partial z}(x+z) = (1) - (1) = 0$.
*   $\mathbf{j}$-component: $\frac{\partial P}{\partial z} - \frac{\partial R}{\partial x} = \frac{\partial}{\partial z}(2x+y) - \frac{\partial}{\partial x}(y+z) = (0) - (0) = 0$.
*   $\mathbf{k}$-component: $\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = \frac{\partial}{\partial x}(x+z) - \frac{\partial}{\partial y}(2x+y) = (1) - (1) = 0$.

Since all components of the curl are zero, and the domain (all of $\mathbb{R}^3$) is simply connected, the vector field $\mathbf{F}$ is conservative. This demonstrates **CO3** by computing the curl.

(b) Since $\mathbf{F}$ is conservative, we can find a potential function $\phi(x, y, z)$ such that $\mathbf{F} = \nabla \phi$.
We have:
1.  $\frac{\partial \phi}{\partial x} = P = 2x+y$
2.  $\frac{\partial \phi}{\partial y} = Q = x+z$
3.  $\frac{\partial \phi}{\partial z} = R = y+z$

From (1), integrate with respect to $x$:
$\phi(x, y, z) = \int (2x+y) \, dx = x^2 + xy + g(y, z)$

Now, differentiate this with respect to $y$ and equate to $Q$:
$\frac{\partial \phi}{\partial y} = \frac{\partial}{\partial y}(x^2 + xy + g(y, z)) = x + \frac{\partial g}{\partial y}(y, z)$
We need this to equal $Q = x+z$.
$x + \frac{\partial g}{\partial y}(y, z) = x+z \implies \frac{\partial g}{\partial y}(y, z) = z$

Integrate this with respect to $y$ to find $g(y, z)$:
$g(y, z) = \int z \, dy = yz + h(z)$

Substitute $g(y, z)$ back into our expression for $\phi$:
$\phi(x, y, z) = x^2 + xy + yz + h(z)$

Finally, differentiate this with respect to $z$ and equate to $R$:
$\frac{\partial \phi}{\partial z} = \frac{\partial}{\partial z}(x^2 + xy + yz + h(z)) = y + h'(z)$
We need this to equal $R = y+z$.
$y + h'(z) = y+z \implies h'(z) = z$

Integrate $h'(z)$ with respect to $z$ to find $h(z)$:
$h(z) = \int z \, dz = \frac{1}{2}z^2 + K$
We can take $K=0$. So $h(z) = \frac{1}{2}z^2$.

Substituting $h(z)$ back, we get the potential function:
$\phi(x, y, z) = x^2 + xy + yz + \frac{1}{2}z^2$

Now, using the Fundamental Theorem for Line Integrals, the line integral from $A=(0, 0, 0)$ to $B=(1, 1, 1)$ is:
$\int_C \mathbf{F} \cdot d\mathbf{r} = \phi(1, 1, 1) - \phi(0, 0, 0)$
$\phi(1, 1, 1) = (1)^2 + (1)(1) + (1)(1) + \frac{1}{2}(1)^2 = 1 + 1 + 1 + \frac{1}{2} = 3.5 = \frac{7}{2}$
$\phi(0, 0, 0) = (0)^2 + (0)(0) + (0)(0) + \frac{1}{2}(0)^2 = 0$

Therefore, $\int_C \mathbf{F} \cdot d\mathbf{r} = \frac{7}{2} - 0 = \frac{7}{2}$.
This clearly shows the power of conservative fields in simplifying line integral calculations, fulfilling **CO3**.
