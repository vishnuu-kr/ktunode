---
title: "independence of path"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 2"
module: "Module 3: Vector valued function of single variable "
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f983e"
status: "completed"
scrapedAt: "2026-05-23T16:08:17.475Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 2
## Module 3: Vector-Valued Functions of a Single Variable
### Topic: Independence of Path

Welcome, everyone! Today, we're diving into a really fascinating concept within vector calculus: **Independence of Path**. This idea is crucial because it helps us understand when the "work done" or the "change in a quantity" along a curve only depends on where we start and where we end, not on the specific route we take to get there. This has direct applications in many areas of electrical and physical science, which we'll touch upon as we go.

Think about it: if you're climbing a mountain, the change in your altitude between the base and the summit is the same regardless of whether you take a direct, steep path or a winding, scenic route. The overall change in height is dictated solely by the starting and ending points. Independence of path in vector calculus captures this very intuition.

This topic is closely linked to **Course Outcome 3 (CO3): Compute the derivatives and line integrals of vector functions and to learn their applications.** Understanding independence of path is key to simplifying line integral calculations and recognizing specific types of vector fields that are fundamental in physics and engineering.

### What is a Vector Field and Why Path Matters?

Before we talk about independence of path, let's quickly recap what we mean by a **vector field**. A vector field, essentially, assigns a vector to every point in a space. Think of wind patterns over a map – at each location, there's a wind vector indicating speed and direction. Or imagine the gravitational force field around a planet – at every point in space, there's a force vector pointing towards the planet.

Now, a **line integral** is used to integrate a vector field along a curve (or path) in that space. For instance, the work done by a force field on a particle moving along a path is calculated using a line integral.

The question we're exploring is: If we have two different paths connecting the same start and end points, will the line integral of a given vector field be the same for both paths? Sometimes, yes! And that's what we call **independence of path**.

### Introducing the Concept of Independence of Path

A vector field $\mathbf{F}$ is said to be **independent of path** if the line integral of $\mathbf{F}$ between any two points $A$ and $B$ is the same, regardless of the path chosen to connect $A$ and $B$.

Mathematically, if $C_1$ and $C_2$ are any two piecewise smooth curves connecting points $A$ and $B$, and $\mathbf{F}$ is a vector field defined on a region containing these curves, then $\mathbf{F}$ is independent of path if:

$$ \int_{C_1} \mathbf{F} \cdot d\mathbf{r} = \int_{C_2} \mathbf{F} \cdot d\mathbf{r} $$

where $\int_C \mathbf{F} \cdot d\mathbf{r}$ denotes the line integral of $\mathbf{F}$ along curve $C$.

**Why is this so important?** If a vector field is independent of path, we can often simplify calculations dramatically. Instead of evaluating a line integral along a complicated curve, we can pick a simpler curve connecting the same endpoints, or better yet, use a shortcut that relies on the potential function, which we'll discuss shortly.

This relates directly to **CO3** where we compute line integrals and learn their applications. Independence of path provides a powerful method to simplify these computations.

### Conservative Vector Fields and Potential Functions

The magic behind independence of path lies in a special class of vector fields called **conservative vector fields**. A vector field $\mathbf{F}$ is conservative if it can be expressed as the gradient of a scalar function $\phi$. This scalar function $\phi$ is called a **potential function** or **scalar potential**.

So, if $\mathbf{F}$ is conservative, then there exists a scalar function $\phi(x, y, z)$ such that:

$$ \mathbf{F}(x, y, z) = \nabla \phi(x, y, z) $$

where $\nabla \phi$ is the gradient of $\phi$. If $\mathbf{F}$ is a vector field in 2D, say $\mathbf{F}(x, y) = P(x, y)\mathbf{i} + Q(x, y)\mathbf{j}$, then $\mathbf{F} = \nabla \phi$ means:

$$ P(x, y) = \frac{\partial \phi}{\partial x} \quad \text{and} \quad Q(x, y) = \frac{\partial \phi}{\partial y} $$

If $\mathbf{F}$ is in 3D, $\mathbf{F}(x, y, z) = P(x, y, z)\mathbf{i} + Q(x, y, z)\mathbf{j} + R(x, y, z)\mathbf{k}$, then $\mathbf{F} = \nabla \phi$ implies:

$$ P = \frac{\partial \phi}{\partial x}, \quad Q = \frac{\partial \phi}{\partial y}, \quad R = \frac{\partial \phi}{\partial z} $$

The remarkable property of conservative vector fields is that they are *always* independent of path. This is a direct consequence of the **Fundamental Theorem of Line Integrals**.

#### The Fundamental Theorem of Line Integrals

Just like the fundamental theorem of calculus simplifies integration of scalar functions by relating it to the values of antiderivatives at endpoints, the Fundamental Theorem of Line Integrals does something similar for line integrals of conservative vector fields.

It states that if $\mathbf{F} = \nabla \phi$ is a conservative vector field, and $C$ is a piecewise smooth curve from point $A$ to point $B$, then:

$$ \int_C \mathbf{F} \cdot d\mathbf{r} = \int_C \nabla \phi \cdot d\mathbf{r} = \phi(B) - \phi(A) $$

This is a game-changer! It tells us that the line integral of a conservative vector field depends *only* on the values of the potential function at the endpoints of the curve. The path itself becomes irrelevant. This is the heart of independence of path.

**Example (Relatable):** Imagine calculating the total change in potential energy when moving an object from point A to point B. If the force acting on the object is conservative (like gravity), the change in potential energy is simply the difference in potential energy between point B and point A. You don't need to know the exact trajectory; only the starting and ending positions matter.

This theorem directly supports **CO3** by providing a method to compute line integrals of conservative fields, thereby understanding their applications.

### Tests for Conservative Vector Fields

So, how do we know if a given vector field is conservative? We need a test!

#### In Two Dimensions (2D)

Let $\mathbf{F}(x, y) = P(x, y)\mathbf{i} + Q(x, y)\mathbf{j}$ be a vector field. If $P$, $Q$, and their first partial derivatives are continuous on an open connected domain, then $\mathbf{F}$ is conservative **if and only if**:

$$ \frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x} $$

**Explanation:** If $\mathbf{F} = \nabla \phi$, then $P = \frac{\partial \phi}{\partial x}$ and $Q = \frac{\partial \phi}{\partial y}$. If we assume that the second partial derivatives of $\phi$ are continuous (which is usually true in our applications), then by Clairaut's Theorem (also known as Schwarz's Theorem), we have $\frac{\partial^2 \phi}{\partial y \partial x} = \frac{\partial^2 \phi}{\partial x \partial y}$. Substituting our expressions for $P$ and $Q$, we get $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$. This condition is therefore necessary. It also turns out to be sufficient under the continuity conditions.

**Example:** Consider $\mathbf{F}(x, y) = (2xy)\mathbf{i} + (x^2 + 3y^2)\mathbf{j}$.
Here, $P(x, y) = 2xy$ and $Q(x, y) = x^2 + 3y^2$.
Let's compute the partial derivatives:
$\frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(2xy) = 2x$
$\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(x^2 + 3y^2) = 2x$
Since $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$, this vector field is conservative. This means it's independent of path.

**Common Pitfall:** Forgetting to check the continuity conditions or only checking one of the partial derivatives. Always check both!

#### In Three Dimensions (3D)

Let $\mathbf{F}(x, y, z) = P(x, y, z)\mathbf{i} + Q(x, y, z)\mathbf{j} + R(x, y, z)\mathbf{k}$ be a vector field. If $P, Q, R$ and their first partial derivatives are continuous on an open connected domain, then $\mathbf{F}$ is conservative **if and only if**:

$$ \nabla \times \mathbf{F} = \mathbf{0} $$

where $\nabla \times \mathbf{F}$ is the **curl** of $\mathbf{F}$. The curl is calculated as:

$$ \nabla \times \mathbf{F} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ P & Q & R \end{vmatrix} = \left(\frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z}\right)\mathbf{i} - \left(\frac{\partial R}{\partial x} - \frac{\partial P}{\partial z}\right)\mathbf{j} + \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right)\mathbf{k} $$

So, for $\mathbf{F}$ to be conservative, all three components of its curl must be zero:
1. $\frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z} = 0 \implies \frac{\partial R}{\partial y} = \frac{\partial Q}{\partial z}$
2. $\frac{\partial R}{\partial x} - \frac{\partial P}{\partial z} = 0 \implies \frac{\partial R}{\partial x} = \frac{\partial P}{\partial z}$ (Note the sign change due to the $\mathbf{j}$ component of the curl)
3. $\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = 0 \implies \frac{\partial Q}{\partial x} = \frac{\partial P}{\partial y}$

**Explanation:** The curl of a gradient vector field ($\nabla \phi$) is always zero. This is a fundamental identity in vector calculus. So, if $\mathbf{F}$ is conservative (meaning $\mathbf{F} = \nabla \phi$), its curl must be zero. The converse is also true for simply connected domains (domains with no holes).

**Example:** Consider $\mathbf{F}(x, y, z) = (yz)\mathbf{i} + (xz)\mathbf{j} + (xy)\mathbf{k}$.
Here, $P = yz$, $Q = xz$, $R = xy$.
Let's compute the partial derivatives needed for the curl:
$\frac{\partial R}{\partial y} = \frac{\partial}{\partial y}(xy) = x$
$\frac{\partial Q}{\partial z} = \frac{\partial}{\partial z}(xz) = x$
So, $\frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z} = x - x = 0$.

$\frac{\partial R}{\partial x} = \frac{\partial}{\partial x}(xy) = y$
$\frac{\partial P}{\partial z} = \frac{\partial}{\partial z}(yz) = y$
So, $\frac{\partial R}{\partial x} - \frac{\partial P}{\partial z} = y - y = 0$.

$\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(xz) = z$
$\frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(yz) = z$
So, $\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = z - z = 0$.

Since all components of the curl are zero, $\mathbf{F}$ is conservative. This vector field is independent of path.

**Analogy:** Imagine stirring water with a paddle. If the water is flowing smoothly, you can trace the path of a small particle of water. If the flow is "curl-free," it means the water isn't rotating locally. This "curl-free" property is what's being tested.

This understanding of the curl is essential for **CO3** and also touches upon **CO4** if we consider curl in the context of surface integrals (Stokes' Theorem, which relates surface integrals of curl to line integrals).

### Finding the Potential Function $\phi$

If we've determined that a vector field $\mathbf{F}$ is conservative, the next logical step is to find its potential function $\phi$. This is where we "reverse" the gradient process.

#### Method for Finding $\phi$

Let's assume $\mathbf{F}(x, y) = P(x, y)\mathbf{i} + Q(x, y)\mathbf{j}$ is conservative. We know $\mathbf{F} = \nabla \phi$, so:
1. $P(x, y) = \frac{\partial \phi}{\partial x}$
2. $Q(x, y) = \frac{\partial \phi}{\partial y}$

We can integrate the first equation with respect to $x$:
$$ \phi(x, y) = \int P(x, y) \, dx $$
When we integrate with respect to $x$, we must remember that the "constant of integration" can be any function of $y$, because the derivative of any function of $y$ with respect to $x$ is zero. So, we write:
$$ \phi(x, y) = G(y) + \int P(x, y) \, dx $$
where $G(y)$ is an arbitrary function of $y$.

Now, we differentiate this expression for $\phi(x, y)$ with respect to $y$ and set it equal to $Q(x, y)$:
$$ \frac{\partial \phi}{\partial y} = \frac{\partial}{\partial y} \left( G(y) + \int P(x, y) \, dx \right) = G'(y) + \frac{\partial}{\partial y} \left( \int P(x, y) \, dx \right) $$
This must equal $Q(x, y)$:
$$ G'(y) + \frac{\partial}{\partial y} \left( \int P(x, y) \, dx \right) = Q(x, y) $$
From this, we can solve for $G'(y)$:
$$ G'(y) = Q(x, y) - \frac{\partial}{\partial y} \left( \int P(x, y) \, dx \right) $$
The crucial point here is that the right-hand side should *only* depend on $y$. If it depends on $x$, it indicates a mistake or that the field wasn't conservative. Once we find $G'(y)$, we integrate it with respect to $y$ to find $G(y)$:
$$ G(y) = \int G'(y) \, dy $$
Finally, substitute $G(y)$ back into the expression for $\phi(x, y)$:
$$ \phi(x, y) = G(y) + \int P(x, y) \, dx $$
Remember, the additive constant of integration for $G(y)$ can be absorbed into the potential function, so we usually just take it as $\phi(x,y) = G(y) + \int P(x,y) dx$.

The process is similar for 3D fields, but we'll use all three components $P, Q, R$.

**Example:** Let's find the potential function for $\mathbf{F}(x, y) = (2xy)\mathbf{i} + (x^2 + 3y^2)\mathbf{j}$. We already established it's conservative.
Here, $P(x, y) = 2xy$ and $Q(x, y) = x^2 + 3y^2$.

**Step 1:** Integrate $P(x, y)$ with respect to $x$:
$$ \phi(x, y) = \int 2xy \, dx = x^2y + G(y) $$

**Step 2:** Differentiate this $\phi$ with respect to $y$ and set it equal to $Q(x, y)$:
$$ \frac{\partial \phi}{\partial y} = \frac{\partial}{\partial y}(x^2y + G(y)) = x^2 + G'(y) $$
We set this equal to $Q(x, y) = x^2 + 3y^2$:
$$ x^2 + G'(y) = x^2 + 3y^2 $$
$$ G'(y) = 3y^2 $$

**Step 3:** Integrate $G'(y)$ with respect to $y$ to find $G(y)$:
$$ G(y) = \int 3y^2 \, dy = y^3 $$
(We can omit the integration constant here as it gets absorbed).

**Step 4:** Substitute $G(y)$ back into the expression for $\phi(x, y)$:
$$ \phi(x, y) = x^2y + y^3 $$
This is our potential function.

Now, if we want to compute the line integral of $\mathbf{F}$ along some path from $A=(x_1, y_1)$ to $B=(x_2, y_2)$, we can simply do:
$$ \int_C \mathbf{F} \cdot d\mathbf{r} = \phi(x_2, y_2) - \phi(x_1, y_1) $$
For example, if the path is from $(1, 1)$ to $(2, 3)$:
$$ \int_C \mathbf{F} \cdot d\mathbf{r} = \phi(2, 3) - \phi(1, 1) = (2^2 \cdot 3 + 3^3) - (1^2 \cdot 1 + 1^3) = (12 + 27) - (1 + 1) = 39 - 2 = 37 $$
See how much easier that was than parameterizing a curve and doing the integral directly? This is the power of independence of path!

This process directly demonstrates the application aspect of **CO3**.

### Domains and Connectivity

A crucial condition for the tests of conservative fields and the fundamental theorem to hold is that the domain on which the vector field is defined must be **open and connected**.

*   **Open Set:** A set where every point has a neighborhood entirely contained within the set.
*   **Connected Set:** A set that cannot be split into two disjoint non-empty open sets.
*   **Simply Connected Set:** An open connected set where every closed curve within the set encloses only points of the set. Think of a disk or a region without holes.

**Why does this matter?** Consider a vector field defined on the entire plane except for the origin. This domain is not simply connected because you can draw a closed curve around the origin, and the origin is not in the domain. In such cases, a field might satisfy the partial derivative conditions ($\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$) but still *not* be conservative (and therefore not independent of path). The classic example is $\mathbf{F}(x, y) = \frac{-y\mathbf{i} + x\mathbf{j}}{x^2 + y^2}$, which represents circular motion. Its curl is zero, but it's not conservative on $\mathbb{R}^2 \setminus \{(0,0)\}$, and its line integral around the origin is $2\pi$, not zero.

**Textbook Insight:** Books like "Calculus" by Anton, Biven, and Davis, and "Thomas' Calculus" by Weir, Hass, and Heil emphasize these domain requirements. For most engineering and physics problems you'll encounter at this level, the domains are usually simple (like simply connected open regions), so these conditions are met. But it's good to be aware of them.

This touches on the theoretical aspects underpinning the calculations we perform, relevant for a deeper understanding for **CO3**.

### Applications in Physics and Electrical Science

The concept of independence of path and conservative vector fields is fundamental in many areas:

*   **Physics:**
    *   **Work done by Force Fields:** If a force field (like gravity or electrostatic force) is conservative, the work done by the force in moving an object between two points is independent of the path taken. This leads to the concept of potential energy. For example, the gravitational force $\mathbf{F}_g = -\frac{GMm}{r^2}\hat{\mathbf{r}}$ is conservative, and its potential energy is $U_g = -\frac{GMm}{r}$.
    *   **Conservation Laws:** In mechanics, if the net force acting on a system is conservative, then mechanical energy (kinetic + potential) is conserved.

*   **Electrical Science:**
    *   **Electrostatics:** The electrostatic force exerted by stationary charges is conservative. This means the work done by the electric field in moving a charge between two points is path-independent. This allows us to define an **electric potential** (voltage) as the potential function associated with the electric field. If $\mathbf{E}$ is the electric field, then $\mathbf{E} = -\nabla V$, where $V$ is the electric potential. The potential difference between two points is precisely the line integral of $-\mathbf{E}$ along any path connecting them. This is a cornerstone of circuit analysis and electromagnetism.
    *   **Magnetic Fields:** While magnetic forces (Lorentz force) on moving charges are not conservative in the same way (they do no work as they are always perpendicular to velocity), the concept of potential is still used for magnetic vector potentials. However, the path independence is more directly applicable to the *electric* potential.

**Connecting to Course Outcomes:**
*   **CO1 (Maxima/Minima of Multivariable Functions):** Finding potential functions $\phi$ involves partial derivatives. Identifying critical points of $\phi$ can relate to equilibrium points in physical systems where forces derived from $\phi$ are zero.
*   **CO3 (Derivatives and Line Integrals):** This entire topic is about understanding the properties of line integrals and how derivatives (gradients and curls) determine path independence. The applications in electrostatics are a direct demonstration of **CO3**.

**Summary of Key Takeaways for Exams:**

1.  **Definition:** Independence of path means the line integral between two points is the same for all paths connecting them.
2.  **Conservative Fields:** Path independence is equivalent to a vector field being conservative, meaning $\mathbf{F} = \nabla \phi$ for some scalar potential function $\phi$.
3.  **Fundamental Theorem:** $\int_C \mathbf{F} \cdot d\mathbf{r} = \phi(B) - \phi(A)$ for conservative $\mathbf{F}$.
4.  **2D Test:** $\mathbf{F} = P\mathbf{i} + Q\mathbf{j}$ is conservative if $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$ on a simply connected domain.
5.  **3D Test:** $\mathbf{F} = P\mathbf{i} + Q\mathbf{j} + R\mathbf{k}$ is conservative if $\nabla \times \mathbf{F} = \mathbf{0}$ on a simply connected domain.
6.  **Finding $\phi$:** Integrate components systematically and equate derivatives.
7.  **Applications:** Crucial in defining potential energy (gravity, electrostatics) and electric potential (voltage).

Remember this: If you can find a potential function, the field is conservative, and the line integral is just the difference in potential at the endpoints. This shortcut saves immense effort!

---

### Sample Questions and Answers

**Question 1 (Conceptual):**
Explain why a conservative vector field guarantees independence of path for line integrals.
**Answer:**
A vector field $\mathbf{F}$ is conservative if it can be expressed as the gradient of a scalar potential function, $\mathbf{F} = \nabla \phi$. The Fundamental Theorem of Line Integrals states that for a curve $C$ from point $A$ to point $B$, the line integral of a conservative vector field is $\int_C \mathbf{F} \cdot d\mathbf{r} = \phi(B) - \phi(A)$. This result depends *only* on the values of the potential function at the endpoints $A$ and $B$. Therefore, regardless of the specific path taken between $A$ and $B$, the integral will yield the same value, demonstrating independence of path.

**Question 2 (Exam-Oriented - 2D Test):**
Determine if the vector field $\mathbf{F}(x, y) = (3x^2 + 2y)\mathbf{i} + (2x - 4y^3)\mathbf{j}$ is conservative. If it is, find its potential function.
**Answer:**
Let $P(x, y) = 3x^2 + 2y$ and $Q(x, y) = 2x - 4y^3$.
We check the condition $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$.
$\frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(3x^2 + 2y) = 2$.
$\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(2x - 4y^3) = 2$.
Since $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$, the vector field $\mathbf{F}$ is conservative (assuming continuity on a simply connected domain, which is true for this polynomial field).

Now, we find the potential function $\phi(x, y)$.
We integrate $P(x, y)$ with respect to $x$:
$\phi(x, y) = \int P(x, y) \, dx = \int (3x^2 + 2y) \, dx = x^3 + 2xy + G(y)$.

Next, we differentiate this with respect to $y$ and set it equal to $Q(x, y)$:
$\frac{\partial \phi}{\partial y} = \frac{\partial}{\partial y}(x^3 + 2xy + G(y)) = 0 + 2x + G'(y)$.
Set this equal to $Q(x, y) = 2x - 4y^3$:
$2x + G'(y) = 2x - 4y^3$.
$G'(y) = -4y^3$.

Integrate $G'(y)$ with respect to $y$ to find $G(y)$:
$G(y) = \int -4y^3 \, dy = -y^4$.

Substitute $G(y)$ back into the expression for $\phi(x, y)$:
$\phi(x, y) = x^3 + 2xy - y^4$.
Thus, the potential function is $\phi(x, y) = x^3 + 2xy - y^4$.

**Question 3 (Exam-Oriented - Application):**
A particle moves from point $A(1, 0)$ to point $B(2, \pi)$ along the curve $C$ defined by $\mathbf{r}(t) = (1+t)\mathbf{i} + (t\pi)\mathbf{j}$, $0 \le t \le 1$. The force field acting on the particle is given by $\mathbf{F}(x, y) = (\cos(y))\mathbf{i} + (-x\sin(y))\mathbf{j}$. Calculate the work done by the force field on the particle.
**Answer:**
First, we must check if the force field $\mathbf{F}$ is conservative.
Let $P(x, y) = \cos(y)$ and $Q(x, y) = -x\sin(y)$.
$\frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(\cos(y)) = -\sin(y)$.
$\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(-x\sin(y)) = -\sin(y)$.
Since $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$, the field is conservative.

Because the field is conservative, the work done is independent of the path and can be found using the potential function. We find the potential function $\phi(x, y)$.
Integrate $P(x, y)$ with respect to $x$:
$\phi(x, y) = \int P(x, y) \, dx = \int \cos(y) \, dx = x\cos(y) + G(y)$.

Differentiate with respect to $y$ and set equal to $Q(x, y)$:
$\frac{\partial \phi}{\partial y} = \frac{\partial}{\partial y}(x\cos(y) + G(y)) = -x\sin(y) + G'(y)$.
Set this equal to $Q(x, y) = -x\sin(y)$:
$-x\sin(y) + G'(y) = -x\sin(y)$.
$G'(y) = 0$.

Integrate $G'(y)$ with respect to $y$:
$G(y) = \int 0 \, dy = C$ (a constant).

So, the potential function is $\phi(x, y) = x\cos(y) + C$. We can take $C=0$ for simplicity, $\phi(x, y) = x\cos(y)$.

The work done is $\phi(B) - \phi(A)$.
Point $A$ is $(1, 0)$ and point $B$ is $(2, \pi)$.
Work $= \phi(2, \pi) - \phi(1, 0) = (2\cos(\pi)) - (1\cos(0))$.
Work $= (2 \times -1) - (1 \times 1) = -2 - 1 = -3$.

The work done by the force field is -3 units. Notice we didn't need to use the specific path $\mathbf{r}(t)$ at all!

This illustrates the application of **CO3** and the power of independence of path.
