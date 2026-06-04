---
title: "Work done as line integral"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 2"
module: "Module 3: Vector valued function of single variable "
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da1dc"
status: "completed"
scrapedAt: "2026-05-23T17:40:49.605Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 2

## Module 3: Vector Valued Functions of a Single Variable

### Topic: Work Done as a Line Integral

Welcome, everyone! Today, we're diving into a really fundamental concept in both physics and engineering: **Work Done**. And we're going to explore how to calculate it using a powerful mathematical tool called a **line integral**. This topic directly connects to **CO3: Compute the derivatives and line integrals of vector functions and to learn their applications**, as work done is a prime example of such an application. It also touches upon the physical sciences where work is a core concept.

Think about what "work" means in everyday language. It's about exerting effort to move something. In physics, it's more precisely defined as the energy transferred when a force causes an object to move over a distance. Now, what if that force isn't constant, or the path the object takes isn't a straight line? This is where our vector calculus tools become indispensable.

### 1. The Essence of Work: Force and Displacement

Before we jump into integrals, let's revisit the basic definition of work. In physics, when a **constant force $\vec{F}$** acts on an object, and the object undergoes a **displacement $\vec{d}$**, the work done, $W$, is given by the dot product of the force and displacement vectors:

$W = \vec{F} \cdot \vec{d}$

This formula captures the idea that only the component of the force acting *in the direction of motion* contributes to the work. If you push a box horizontally and gravity pulls it down, gravity does no work on the box as it moves horizontally.

*   **Analogy:** Imagine pushing a grocery cart. If you push it straight forward, you're doing work. If you push it forward but also slightly upwards (lifting the handle), some of your effort is going into lifting, not just forward motion, and that's reflected in the dot product.

### 2. When Force and Path Aren't Simple: Introducing the Line Integral

The real power of the line integral emerges when either the **force $\vec{F}$ is not constant** (it might vary with position) or the **path of motion is not a straight line**.

Consider a scenario where an object moves along a curved path, say, from point A to point B. And along this path, the force acting on the object changes its magnitude and direction. How do we sum up all the tiny bits of work done by this varying force over this curved path?

This is precisely what a line integral allows us to do. We break down the path into infinitesimally small segments, calculate the work done over each segment, and then sum them all up.

Let's think of our path $C$ as being traced by a position vector $\vec{r}(t)$, where $t$ is a parameter (often representing time) ranging from $t_1$ to $t_2$. So, $\vec{r}(t) = x(t)\hat{i} + y(t)\hat{j} + z(t)\hat{k}$.

At any point along this path, the force acting on the object is given by a vector field $\vec{F}(x, y, z)$. Since the object is moving along the path $\vec{r}(t)$, the force we are interested in is $\vec{F}(\vec{r}(t))$.

Now, consider a tiny displacement along the path. This infinitesimal displacement vector is given by $d\vec{r} = \vec{r}'(t) dt = \frac{d\vec{r}}{dt} dt$.

The work done ($dW$) over this infinitesimal displacement $d\vec{r}$ is the dot product of the force at that point and the displacement:

$dW = \vec{F}(\vec{r}(t)) \cdot d\vec{r}$
$dW = \vec{F}(\vec{r}(t)) \cdot \vec{r}'(t) dt$

To find the total work done ($W$) as the object moves along the entire path $C$ from $t_1$ to $t_2$, we simply integrate these infinitesimal amounts of work:

$W = \int_{C} \vec{F} \cdot d\vec{r} = \int_{t_1}^{t_2} \vec{F}(\vec{r}(t)) \cdot \vec{r}'(t) dt$

This is the fundamental formula for work done as a line integral. This aligns with what you'll find in standard texts like Anton, Biven, and Davis (12th ed.) and Thomas' Calculus (15th ed.), where the line integral is introduced as a way to "integrate" a function along a curve.

*   **Relatable Example:** Imagine you're hiking up a hill on a winding trail. The force you exert to climb depends on the steepness of the trail at each point. Gravity also acts on you, pulling you downwards. The work you do against gravity depends on the vertical component of your path. If the trail is very steep, you do more "uphill" work per horizontal meter. If the trail is gentle, you do less. The line integral sums up this varying effort over the entire trail.

### 3. Breaking Down the Calculation: Components and Parametrization

To actually compute this integral, we usually express everything in terms of the parameter $t$.

Let $\vec{F}(x, y, z) = F_1(x, y, z)\hat{i} + F_2(x, y, z)\hat{j} + F_3(x, y, z)\hat{k}$ and $\vec{r}(t) = x(t)\hat{i} + y(t)\hat{j} + z(t)\hat{k}$.

Then, $\vec{r}'(t) = x'(t)\hat{i} + y'(t)\hat{j} + z'(t)\hat{k}$.

The dot product $\vec{F}(\vec{r}(t)) \cdot \vec{r}'(t)$ becomes:

$\vec{F}(\vec{r}(t)) \cdot \vec{r}'(t) = F_1(x(t), y(t), z(t))x'(t) + F_2(x(t), y(t), z(t))y'(t) + F_3(x(t), y(t), z(t))z'(t)$

So, the work integral transforms into a standard definite integral with respect to $t$:

$W = \int_{t_1}^{t_2} [F_1(x(t), y(t), z(t))x'(t) + F_2(x(t), y(t), z(t))y'(t) + F_3(x(t), y(t), z(t))z'(t)] dt$

This form is what you'll most often use for calculations. It's a direct application of transforming a vector integral into a scalar integral using a chosen parametrization. This is a core skill emphasized in **CO3**.

### 4. Examples to Solidify Understanding

Let's work through a couple of examples.

**Example 1: Constant Force along a Straight Line**

Suppose a force $\vec{F} = 3\hat{i} + 2\hat{j}$ (constant) moves a particle from point (1, 2) to (4, 6) along a straight line.

First, let's define the path. A straight line from (1, 2) to (4, 6) can be parametrized. The displacement vector is (4-1, 6-2) = (3, 4).
We can use the parametrization:
$\vec{r}(t) = \langle 1, 2 \rangle + t \langle 3, 4 \rangle = \langle 1+3t, 2+4t \rangle$, for $0 \le t \le 1$.

At $t=0$, $\vec{r}(0) = \langle 1, 2 \rangle$. At $t=1$, $\vec{r}(1) = \langle 4, 6 \rangle$. This works.

Now, find $\vec{r}'(t)$:
$\vec{r}'(t) = \frac{d}{dt} \langle 1+3t, 2+4t \rangle = \langle 3, 4 \rangle$.

The force is constant: $\vec{F} = \langle 3, 2 \rangle$.
The dot product $\vec{F} \cdot \vec{r}'(t)$ is:
$\langle 3, 2 \rangle \cdot \langle 3, 4 \rangle = (3)(3) + (2)(4) = 9 + 8 = 17$.

Now, integrate with respect to $t$ from 0 to 1:
$W = \int_{0}^{1} 17 dt = [17t]_{0}^{1} = 17(1) - 17(0) = 17$.

*   **Alternative (and simpler) check:** Using the original formula $W = \vec{F} \cdot \vec{d}$.
    The displacement vector $\vec{d} = \langle 4-1, 6-2 \rangle = \langle 3, 4 \rangle$.
    $W = \langle 3, 2 \rangle \cdot \langle 3, 4 \rangle = 3(3) + 2(4) = 9 + 8 = 17$.
    Matches! This shows the line integral correctly reproduces the simple case.

**Example 2: Variable Force along a Curve**

Let's consider a force field $\vec{F}(x, y) = \langle y, -x \rangle$ and a particle moves along the quarter-circle $C$ given by $x^2 + y^2 = 4$ in the first quadrant, traversed from (2, 0) to (0, 2).

Here, the force depends on the position $(x, y)$. The path is a curve.

**Step 1: Parametrize the path.**
The path is a quarter-circle of radius 2. A standard parametrization for a circle is $x = r \cos t$ and $y = r \sin t$. Here, $r=2$.
So, $\vec{r}(t) = \langle 2 \cos t, 2 \sin t \rangle$.

Now, we need to determine the range of $t$.
At (2, 0): $2 \cos t = 2 \implies \cos t = 1$, and $2 \sin t = 0 \implies \sin t = 0$. This corresponds to $t=0$.
At (0, 2): $2 \cos t = 0 \implies \cos t = 0$, and $2 \sin t = 2 \implies \sin t = 1$. This corresponds to $t=\pi/2$.
So, the parameter $t$ ranges from $0$ to $\pi/2$.

**Step 2: Find $\vec{r}'(t)$.**
$\vec{r}'(t) = \frac{d}{dt} \langle 2 \cos t, 2 \sin t \rangle = \langle -2 \sin t, 2 \cos t \rangle$.

**Step 3: Express $\vec{F}$ in terms of $t$.**
Substitute $x = 2 \cos t$ and $y = 2 \sin t$ into $\vec{F}(x, y) = \langle y, -x \rangle$:
$\vec{F}(\vec{r}(t)) = \langle 2 \sin t, -(2 \cos t) \rangle = \langle 2 \sin t, -2 \cos t \rangle$.

**Step 4: Compute the dot product $\vec{F}(\vec{r}(t)) \cdot \vec{r}'(t)$.**
$\vec{F} \cdot \vec{r}'(t) = \langle 2 \sin t, -2 \cos t \rangle \cdot \langle -2 \sin t, 2 \cos t \rangle$
$= (2 \sin t)(-2 \sin t) + (-2 \cos t)(2 \cos t)$
$= -4 \sin^2 t - 4 \cos^2 t$
$= -4 (\sin^2 t + \cos^2 t)$
$= -4(1) = -4$.

**Step 5: Integrate from $t_1$ to $t_2$.**
$W = \int_{0}^{\pi/2} -4 dt$
$W = [-4t]_{0}^{\pi/2}$
$W = -4(\pi/2) - (-4(0))$
$W = -2\pi$.

*   **Interpretation:** The negative work done (-2$\pi$) means that the force field is generally acting in opposition to the direction of motion along this particular path. For instance, if this force represented friction, it would be dissipating energy.

This example shows how we handle a force that changes and a path that is curved. This is the heart of applying line integrals for work calculation, a key aspect of **CO3**.

### 5. Conservative Force Fields and Potential Energy

A very important concept arises when we consider if the work done by a force field is independent of the path taken between two points. If the work done moving an object from point A to point B is the same regardless of the path chosen, the force field is called a **conservative force field**.

Think about gravity. When you lift a book from the floor to a table, the work you do against gravity depends only on the initial and final heights, not on whether you carried it straight up or took a winding route. Gravity is a conservative force.

For a conservative force field $\vec{F}$, there exists a scalar function $\phi(x, y, z)$ called the **potential energy function** (or simply potential) such that $\vec{F} = -\nabla \phi$. (Note: some conventions use $\vec{F} = \nabla \phi$, but $\vec{F} = -\nabla \phi$ is more common in physics where $\phi$ represents potential energy and work done by the force is $-\Delta \phi$).

If $\vec{F}$ is conservative and $\vec{F} = -\nabla \phi$, then the work done along a path $C$ from point A to point B is:

$W = \int_{C} \vec{F} \cdot d\vec{r} = \int_{C} (-\nabla \phi) \cdot d\vec{r}$

Using the gradient theorem (or the fundamental theorem of calculus for line integrals), this simplifies beautifully:

$W = -\phi(B) - (-\phi(A)) = \phi(A) - \phi(B) = -(\phi(B) - \phi(A)) = -\Delta \phi$

This is a profound result! The work done by a conservative force is simply the negative of the change in potential energy. This also means that the line integral of a conservative force around any closed loop is zero.

*   **How to check if a force is conservative?**
    *   In 2D, if $\vec{F}(x, y) = P(x, y)\hat{i} + Q(x, y)\hat{j}$, it is conservative if $\frac{\partial Q}{\partial x} = \frac{\partial P}{\partial y}$.
    *   In 3D, if $\vec{F}(x, y, z) = P\hat{i} + Q\hat{j} + R\hat{k}$, it is conservative if $\nabla \times \vec{F} = \vec{0}$ (i.e., its curl is the zero vector). This condition is equivalent to $\frac{\partial R}{\partial y} = \frac{\partial Q}{\partial z}$, $\frac{\partial P}{\partial z} = \frac{\partial R}{\partial x}$, and $\frac{\partial Q}{\partial x} = \frac{\partial P}{\partial y}$.

*   **Relevance to CO3:** Understanding conservative fields and potential functions is a deeper application of line integrals and vector calculus, showing how these concepts connect to physical principles like conservation of energy.

**Example 3: Work done by a Conservative Force**

Let $\vec{F}(x, y) = \langle 2xy, x^2 + 3y^2 \rangle$. Is this force conservative? Let's find the work done along the path from (1, 1) to (2, 3).

Let $P(x, y) = 2xy$ and $Q(x, y) = x^2 + 3y^2$.
Check for conservativeness:
$\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(x^2 + 3y^2) = 2x$.
$\frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(2xy) = 2x$.
Since $\frac{\partial Q}{\partial x} = \frac{\partial P}{\partial y}$, the force field is conservative.

Now, we need to find the potential function $\phi(x, y)$ such that $-\nabla \phi = \vec{F}$, or $\nabla \phi = -\vec{F}$.
Let's use the common physics convention $\vec{F} = \nabla \phi$, so we seek $\phi$ where:
$\frac{\partial \phi}{\partial x} = 2xy$
$\frac{\partial \phi}{\partial y} = x^2 + 3y^2$

Integrate the first equation with respect to $x$:
$\phi(x, y) = \int 2xy \, dx = x^2y + g(y)$, where $g(y)$ is an arbitrary function of $y$.

Now, differentiate this result with respect to $y$ and equate it to the second component of $\vec{F}$:
$\frac{\partial \phi}{\partial y} = \frac{\partial}{\partial y}(x^2y + g(y)) = x^2 + g'(y)$.
We know $\frac{\partial \phi}{\partial y} = x^2 + 3y^2$.
So, $x^2 + g'(y) = x^2 + 3y^2$.
This means $g'(y) = 3y^2$.

Integrate $g'(y)$ to find $g(y)$:
$g(y) = \int 3y^2 dy = y^3 + C$. (We can choose $C=0$ since any constant would cancel out in the work calculation, or more formally, the potential is defined up to an additive constant).

So, the potential function is $\phi(x, y) = x^2y + y^3$.

Now, we can calculate the work done from point A=(1, 1) to point B=(2, 3) using $W = \phi(B) - \phi(A)$:
$\phi(2, 3) = (2)^2(3) + (3)^3 = 4(3) + 27 = 12 + 27 = 39$.
$\phi(1, 1) = (1)^2(1) + (1)^3 = 1(1) + 1 = 1 + 1 = 2$.

$W = \phi(2, 3) - \phi(1, 1) = 39 - 2 = 37$.

*   **Exam Tip:** If you're asked to find the work done by a force and suspect it's conservative, always check first! If it is, finding the potential function is usually much easier than direct line integration, especially for complex paths. This is a common exam strategy. Remember the conditions for conservativeness!

### 6. Connection to Electrical Science and Physical Science

This concept of work done as a line integral is foundational in many areas of electrical science and physics:

*   **Electrical Potential:** The electric potential difference between two points is defined as the work done per unit charge to move a charge from one point to the other against an electric field. If $\vec{E}$ is the electric field, then the potential difference $V_{BA}$ between point A and point B is:
    $V_{BA} = -\int_{A}^{B} \vec{E} \cdot d\vec{r}$.
    Since the electrostatic field is conservative, this integral is path-independent and can be found using the electric potential function $\phi$ (where $\vec{E} = -\nabla \phi$), giving $V_{BA} = \phi(A) - \phi(B)$. This directly uses the concept we've discussed, connecting to **CO3** and relevant electrical concepts.

*   **Force Fields in Mechanics:** As we've seen, forces like gravity and spring forces are often conservative, and their work can be calculated using potential energy. This is central to classical mechanics.

*   **Fluid Dynamics:** While fluid flow can be complex, certain aspects can involve line integrals to calculate quantities like circulation.

*   **Electromagnetism:** Work done in moving charges in magnetic fields, although magnetic force is perpendicular to velocity and does no work in itself, is related to changes in kinetic energy. The work-energy theorem is deeply intertwined.

### 7. Summary and Key Takeaways

*   **Work** in physics is the energy transferred by a force causing displacement.
*   When force is not constant or the path is not straight, we use **line integrals** to calculate work.
*   The formula is $W = \int_{C} \vec{F} \cdot d\vec{r}$.
*   To compute, **parametrize** the curve $C$ as $\vec{r}(t)$ for $t_1 \le t \le t_2$.
*   Then, the integral becomes $W = \int_{t_1}^{t_2} \vec{F}(\vec{r}(t)) \cdot \vec{r}'(t) dt$.
*   A force field is **conservative** if the work done is path-independent. For such fields, $\vec{F} = \nabla \phi$ (or $\vec{F} = -\nabla \phi$ for potential energy), and $W = \phi(B) - \phi(A)$ (or $W = -\Delta \phi$).
*   **Conservativeness checks:** $\frac{\partial Q}{\partial x} = \frac{\partial P}{\partial y}$ in 2D and $\nabla \times \vec{F} = \vec{0}$ in 3D.
*   This concept is vital for understanding **potential energy**, **electric potential**, and energy transfer in physical systems.

This topic directly supports **CO3** by demonstrating how to compute line integrals of vector functions and their practical applications, and indirectly supports **CO1** and **CO4** by providing a foundation for understanding energy and fields in more complex scenarios.

---

## Sample Questions and Answers

**Question 1 (Conceptual):** Explain in your own words why a line integral is necessary to calculate work done when the force is not constant.

**Answer:** When a force is not constant, it means the force's magnitude or direction (or both) changes as the object moves. If the path is also not a straight line, the direction of motion is constantly changing. In such cases, we cannot simply multiply a single force value by a single displacement value. Instead, we need to consider the force acting at each specific infinitesimal segment of the path and the direction of that segment. A line integral allows us to do this by summing up the contributions of the force component along the direction of motion for each tiny piece of the path, effectively integrating the "instantaneous" work done over the entire journey.

**Question 2 (Application):** A particle moves along the curve $C$ parametrized by $\vec{r}(t) = \langle t, t^2 \rangle$ for $0 \le t \le 1$. Find the work done by the force field $\vec{F}(x, y) = \langle y, x \rangle$ on the particle.

**Solution:**
1.  **Parametrization:** The path is already given by $\vec{r}(t) = \langle t, t^2 \rangle$ for $0 \le t \le 1$.
2.  **Find $\vec{r}'(t)$:**
    $\vec{r}'(t) = \frac{d}{dt}\langle t, t^2 \rangle = \langle 1, 2t \rangle$.
3.  **Express $\vec{F}$ in terms of $t$:**
    Substitute $x=t$ and $y=t^2$ into $\vec{F}(x, y) = \langle y, x \rangle$:
    $\vec{F}(\vec{r}(t)) = \langle t^2, t \rangle$.
4.  **Compute the dot product $\vec{F}(\vec{r}(t)) \cdot \vec{r}'(t)$:**
    $\vec{F} \cdot \vec{r}'(t) = \langle t^2, t \rangle \cdot \langle 1, 2t \rangle = (t^2)(1) + (t)(2t) = t^2 + 2t^2 = 3t^2$.
5.  **Integrate:**
    $W = \int_{0}^{1} 3t^2 dt = [t^3]_{0}^{1} = 1^3 - 0^3 = 1$.

    The work done is 1 unit.

**Question 3 (Conceptual/Exam Strategy):** Consider the force field $\vec{F}(x, y) = \langle 2x + y^2, 2xy + 3y^2 \rangle$.
(a) Is this force field conservative? Justify your answer.
(b) If it is conservative, find its potential function.
(c) Calculate the work done by this force field as a particle moves from (1, 1) to (3, 2) along any path.

**Solution:**
(a) **Conservativeness Check:**
Let $P(x, y) = 2x + y^2$ and $Q(x, y) = 2xy + 3y^2$.
$\frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(2x + y^2) = 2y$.
$\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(2xy + 3y^2) = 2y$.
Since $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$, the force field $\vec{F}$ is conservative.

(b) **Finding the Potential Function $\phi(x, y)$:**
We need $\nabla \phi = \vec{F}$, which means:
$\frac{\partial \phi}{\partial x} = 2x + y^2$  (1)
$\frac{\partial \phi}{\partial y} = 2xy + 3y^2$ (2)

Integrate equation (1) with respect to $x$:
$\phi(x, y) = \int (2x + y^2) dx = x^2 + xy^2 + g(y)$, where $g(y)$ is a function of $y$.

Now, differentiate this result with respect to $y$ and equate it to equation (2):
$\frac{\partial \phi}{\partial y} = \frac{\partial}{\partial y}(x^2 + xy^2 + g(y)) = 0 + 2xy + g'(y)$.
Equating this to equation (2): $2xy + g'(y) = 2xy + 3y^2$.
This implies $g'(y) = 3y^2$.

Integrate $g'(y)$ to find $g(y)$:
$g(y) = \int 3y^2 dy = y^3 + C$.
We can choose $C=0$ for simplicity.

So, the potential function is $\phi(x, y) = x^2 + xy^2 + y^3$.

(c) **Calculating Work Done:**
Since the force is conservative, the work done is independent of the path and is given by the difference in potential at the endpoints.
Let A = (1, 1) and B = (3, 2).
$W = \phi(B) - \phi(A) = \phi(3, 2) - \phi(1, 1)$.

$\phi(3, 2) = (3)^2 + (3)(2)^2 + (2)^3 = 9 + 3(4) + 8 = 9 + 12 + 8 = 29$.
$\phi(1, 1) = (1)^2 + (1)(1)^2 + (1)^3 = 1 + 1(1) + 1 = 1 + 1 + 1 = 3$.

$W = 29 - 3 = 26$.

The work done by the force field is 26 units.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
