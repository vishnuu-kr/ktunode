---
title: "Work done as line integral"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2"
module: "Module 3: Vector valued function of single variable "
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1edffeb4799d95e839b0"
status: "completed"
scrapedAt: "2026-05-20T17:45:57.845Z"
---
## Module 3: Vector-Valued Functions of a Single Variable - Work Done as a Line Integral

Welcome, everyone! In this module, we're diving into a really fundamental concept in both physics and engineering: **work done**. And we're going to explore how to calculate it using the powerful tool of **line integrals**. This ties directly into our course outcomes, specifically **CO3: Compute the derivatives and line integrals of vector functions and to learn their applications**, as work is a prime example of such an application. We'll see how the abstract ideas of vector calculus translate into tangible physical quantities.

### 1. What is Work? A Physics Refresher

Before we get into the mathematical machinery, let's recall what "work" means in physics. You've likely encountered this before: **Work is done when a force causes an object to move through a displacement.**

Think about pushing a box across a floor. If you push with a certain force and the box moves a certain distance in the *direction* of your push, you've done work. If you push with more force, or the box moves further, you've done more work. If you push, but the box doesn't budge, no work is done, no matter how hard you push.

The simplest case is a **constant force** acting in the **same direction** as the displacement. In this scenario, Work (W) is simply:

$W = \text{Force} \times \text{Distance}$

Or, using our symbols: $W = F \cdot d$. This is a scalar quantity – it just tells us *how much* work.

### 2. When Forces Aren't Constant or in the Same Direction: The Need for Line Integrals

Now, what happens in the real world? Forces are rarely constant. Think about gravity: the force of gravity on an object changes as its distance from Earth changes. Or consider a spring: the force it exerts increases as you stretch or compress it.

Furthermore, the force might not always be applied in the exact direction of motion. Imagine pushing a lawnmower. You apply a force, but part of that force is downwards, and only the horizontal component actually moves the mower forward.

In these more complex situations, where the force might vary along the path of motion, or the path itself is not a straight line, the simple $W = F \cdot d$ formula breaks down. We need a more sophisticated way to "sum up" the contributions to work along the entire path. This is where **line integrals** come in, and they are a direct application of vector-valued functions of a single variable (specifically, the parameter of the path).

This is where our learning outcome **CO3** really shines. We're going to use vector functions to describe both the path and the force, and then integrate these vector quantities along that path.

### 3. Introducing the Force Vector and Path Vector

Let's formalize this. Suppose an object moves along a path $C$. At any point along this path, there is a force $\mathbf{F}$ acting on it. This force can change from point to point, so it's a **force field**. We can represent the force as a vector-valued function of position, $\mathbf{F}(x, y, z)$.

The path $C$ itself can be described by a vector-valued function of a single parameter, say $t$, which often represents time or simply a parameter that traces out the curve. Let this path be $\mathbf{r}(t) = x(t)\mathbf{i} + y(t)\mathbf{j} + z(t)\mathbf{k}$, for $t$ ranging from $a$ to $b$.

Now, let's think about a very small segment of this path, $d\mathbf{r}$. This $d\mathbf{r}$ is an infinitesimal displacement vector along the curve. If the force $\mathbf{F}$ is constant over this tiny segment, the small amount of work $dW$ done by the force over this displacement is given by the dot product:

$dW = \mathbf{F} \cdot d\mathbf{r}$

Why the dot product? Because only the component of the force *parallel* to the displacement contributes to the work. The dot product elegantly captures this by multiplying the magnitudes and the cosine of the angle between them.

### 4. The Line Integral Definition of Work

To find the total work done as the object moves from the start of the path to the end, we need to sum up all these infinitesimal contributions $dW$ along the entire path $C$. This summing up is exactly what an integral does. Since we are integrating along a path (a curve), we call this a **line integral**.

The total work $W$ done by the force $\mathbf{F}$ along the curve $C$ is given by the line integral:

$W = \int_C \mathbf{F} \cdot d\mathbf{r}$

This equation is absolutely central to our understanding of work in physics and engineering. It's the generalization of $W=Fd$.

### 5. Evaluating the Line Integral: Bringing in the Parameterization

To actually *calculate* this line integral, we need to express everything in terms of our path parameter, $t$.

We have $\mathbf{F}$ as a function of position $(x, y, z)$, and our path $\mathbf{r}(t) = x(t)\mathbf{i} + y(t)\mathbf{j} + z(t)\mathbf{k}$.
The infinitesimal displacement vector $d\mathbf{r}$ is related to the velocity vector $\mathbf{r}'(t)$ by $d\mathbf{r} = \mathbf{r}'(t) dt$.

So, we can rewrite the force $\mathbf{F}$ as a function of $t$ by substituting $x(t), y(t), z(t)$ into $\mathbf{F}(x, y, z)$. Let's call this $\mathbf{F}(\mathbf{r}(t))$.

Then, the line integral becomes a standard definite integral with respect to $t$:

$W = \int_a^b \mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) dt$

This is the form we will most commonly use for calculations. This process of converting a line integral into a definite integral using a parameterization is a key skill we'll develop, directly addressing **CO3**.

Let's break down the components needed for the calculation:
*   **Parameterize the path $C$**: Find $\mathbf{r}(t) = x(t)\mathbf{i} + y(t)\mathbf{j} + z(t)\mathbf{k}$ and the range of $t$, say from $a$ to $b$.
*   **Find the derivative of the path**: Calculate $\mathbf{r}'(t) = x'(t)\mathbf{i} + y'(t)\mathbf{j} + z'(t)\mathbf{k}$.
*   **Express the force along the path**: Substitute $x(t), y(t), z(t)$ into $\mathbf{F}(x, y, z)$ to get $\mathbf{F}(\mathbf{r}(t))$.
*   **Compute the dot product**: Calculate $\mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t)$. This will be a scalar function of $t$.
*   **Integrate**: Evaluate the definite integral $\int_a^b [\mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t)] dt$.

### 6. Examples to Build Intuition

Let's try some examples. These will solidify your understanding and prepare you for exam-style questions.

**Example 1: Simple Straight Line Path**

Suppose a constant force $\mathbf{F} = 3\mathbf{i} + 2\mathbf{j}$ moves a particle along the line segment $C$ from $(1, 1)$ to $(3, 4)$.

*   **Step 1: Parameterize the path $C$**.
    A line segment can be parameterized as $\mathbf{r}(t) = \mathbf{r}_0 + t\mathbf{v}$, where $\mathbf{r}_0$ is the starting point and $\mathbf{v}$ is the direction vector.
    Here, $\mathbf{r}_0 = \langle 1, 1 \rangle$. The displacement vector is $\langle 3-1, 4-1 \rangle = \langle 2, 3 \rangle$.
    So, $\mathbf{r}(t) = \langle 1, 1 \rangle + t\langle 2, 3 \rangle = \langle 1+2t, 1+3t \rangle$.
    For $t=0$, we are at $(1,1)$. For $t=1$, we are at $(3,4)$. So, $t$ ranges from 0 to 1.

*   **Step 2: Find $\mathbf{r}'(t)$**.
    $\mathbf{r}'(t) = \frac{d}{dt}\langle 1+2t, 1+3t \rangle = \langle 2, 3 \rangle$.

*   **Step 3: Express $\mathbf{F}$ along the path**.
    Since $\mathbf{F}$ is constant, $\mathbf{F}(\mathbf{r}(t)) = \mathbf{F} = \langle 3, 2 \rangle$.

*   **Step 4: Compute the dot product**.
    $\mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) = \langle 3, 2 \rangle \cdot \langle 2, 3 \rangle = (3)(2) + (2)(3) = 6 + 6 = 12$.

*   **Step 5: Integrate**.
    $W = \int_0^1 12 dt = [12t]_0^1 = 12(1) - 12(0) = 12$.

The work done is 12 units. Notice how the dot product in Step 4 simplified to a constant, making the integration trivial. This often happens with constant forces.

*   **Relatable Analogy**: Imagine pushing a toy car with a constant force along a straight track. If the force and direction of push are constant, the work is simply force times distance. Our line integral correctly reproduces this.

**Example 2: Force Varies, Path is a Curve**

Calculate the work done by the force field $\mathbf{F}(x, y) = \langle y, -x \rangle$ along the curve $C$ parameterized by $\mathbf{r}(t) = \langle \cos t, \sin t \rangle$ for $0 \le t \le \pi/2$.

*   **Step 1: Parameterization is given!**
    $C$ is a quarter circle in the first quadrant. $\mathbf{r}(t) = \langle \cos t, \sin t \rangle$ for $0 \le t \le \pi/2$.
    So, $x(t) = \cos t$ and $y(t) = \sin t$.

*   **Step 2: Find $\mathbf{r}'(t)$**.
    $\mathbf{r}'(t) = \frac{d}{dt}\langle \cos t, \sin t \rangle = \langle -\sin t, \cos t \rangle$.

*   **Step 3: Express $\mathbf{F}$ along the path**.
    Substitute $x(t)$ and $y(t)$ into $\mathbf{F}(x, y) = \langle y, -x \rangle$:
    $\mathbf{F}(\mathbf{r}(t)) = \langle \sin t, -\cos t \rangle$.

*   **Step 4: Compute the dot product**.
    $\mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) = \langle \sin t, -\cos t \rangle \cdot \langle -\sin t, \cos t \rangle$
    $= (\sin t)(-\sin t) + (-\cos t)(\cos t)$
    $= -\sin^2 t - \cos^2 t$
    $= -(\sin^2 t + \cos^2 t)$
    Using the identity $\sin^2 t + \cos^2 t = 1$, we get:
    $= -1$.

*   **Step 5: Integrate**.
    $W = \int_0^{\pi/2} (-1) dt = [-t]_0^{\pi/2} = -\frac{\pi}{2} - 0 = -\frac{\pi}{2}$.

The work done is $-\frac{\pi}{2}$. The negative sign indicates that, on average, the force is acting in a direction *opposite* to the motion along the curve.

*   **Relatable Analogy**: Imagine you're pushing a merry-go-round. The force you apply might have a component that tries to slow it down as it spins in a particular direction. If the force field represents something like friction or air resistance acting against the motion, you'd expect negative work.

**Example 3: Path not along the axes**

Let $\mathbf{F}(x, y, z) = \langle xy, y^2, z \rangle$ and let $C$ be the helix $\mathbf{r}(t) = \langle \cos t, \sin t, t \rangle$ for $0 \le t \le 2\pi$.

*   **Step 1: Parameterization is given**.
    $x(t) = \cos t$, $y(t) = \sin t$, $z(t) = t$. Range of $t$ is $0$ to $2\pi$.

*   **Step 2: Find $\mathbf{r}'(t)$**.
    $\mathbf{r}'(t) = \frac{d}{dt}\langle \cos t, \sin t, t \rangle = \langle -\sin t, \cos t, 1 \rangle$.

*   **Step 3: Express $\mathbf{F}$ along the path**.
    Substitute $x(t), y(t), z(t)$ into $\mathbf{F}(x, y, z) = \langle xy, y^2, z \rangle$:
    $\mathbf{F}(\mathbf{r}(t)) = \langle (\cos t)(\sin t), (\sin t)^2, t \rangle = \langle \sin t \cos t, \sin^2 t, t \rangle$.

*   **Step 4: Compute the dot product**.
    $\mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) = \langle \sin t \cos t, \sin^2 t, t \rangle \cdot \langle -\sin t, \cos t, 1 \rangle$
    $= (\sin t \cos t)(-\sin t) + (\sin^2 t)(\cos t) + (t)(1)$
    $= -\sin^2 t \cos t + \sin^2 t \cos t + t$
    $= t$.

*   **Step 5: Integrate**.
    $W = \int_0^{2\pi} t dt = \left[\frac{t^2}{2}\right]_0^{2\pi} = \frac{(2\pi)^2}{2} - \frac{0^2}{2} = \frac{4\pi^2}{2} = 2\pi^2$.

The work done is $2\pi^2$.

*   **Relatable Analogy**: Imagine you're a drone flying in a spiral pattern (like a helix). The force field could represent something like wind or an electric field. As the drone moves, the force at its location changes, and it's also moving in a direction that might be at an angle to the force. The line integral sums up the effect of this varying force over the entire spiral path.

### 7. Connection to Conservative Force Fields and Potential Energy

This topic also naturally leads to discussions about **conservative force fields** and **potential energy**, which are crucial in many areas of physics and electrical science. A force field $\mathbf{F}$ is called **conservative** if the work done by it in moving an object between any two points is independent of the path taken.

If a force field is conservative, it can be expressed as the gradient of a scalar function called the **potential function** or **potential energy function**, denoted by $\phi$. That is, $\mathbf{F} = \nabla \phi$.

In such cases, the line integral $\int_C \mathbf{F} \cdot d\mathbf{r}$ can be evaluated simply by finding the difference in the potential function at the endpoints of the path:

$W = \int_C \mathbf{F} \cdot d\mathbf{r} = \int_C \nabla \phi \cdot d\mathbf{r} = \phi(\mathbf{r}(b)) - \phi(\mathbf{r}(a))$

This is a very powerful result, often called the **Fundamental Theorem for Line Integrals**. It significantly simplifies calculations for conservative forces.

*   **Relevance to CO3**: Understanding conservative fields and potential functions is a key application of line integrals, directly enhancing our grasp of **CO3**. For instance, in electrostatics, the electric force is conservative, and the potential difference between two points is directly related to the work done by the electric field. In mechanics, gravitational force is conservative.

*   **Textbook Links**: The concepts of conservative fields and potential functions are thoroughly discussed in chapters related to vector calculus in all the reference books, particularly in Anton & Bivens (12th ed.) and Thomas' Calculus (15th ed.). They explain how to test for a conservative field (using curl, for example) and how to find the potential function.

### 8. Key Takeaways and Exam Tips

*   **The Definition is Key**: Always remember $W = \int_C \mathbf{F} \cdot d\mathbf{r}$. The core task is to evaluate this.
*   **Parameterization is Everything**: Most problems will require you to find a parameterization for the curve $C$. Think about common shapes: lines, circles, parabolas, helices.
*   **Dot Product Calculation**: Be careful with vector dot products, especially when the force or path involves trigonometric functions or polynomials.
*   **Integration Techniques**: You'll need to recall various integration techniques (substitution, integration by parts, trigonometric identities) to evaluate the final definite integral.
*   **Units**: Pay attention to the units of force and displacement to determine the units of work. In physics, it's usually Joules. In electrical science, it might relate to electron-volts or similar energy units.
*   **Conservative Fields**: If you suspect a field is conservative, look for ways to simplify the calculation using potential functions. This is a common exam shortcut. You can test if $\nabla \times \mathbf{F} = \mathbf{0}$ for $\mathbf{F}$ in 3D, or check specific conditions in 2D.

### Sample Questions with Answers

**Question 1 (Conceptual):**
Explain why the dot product is used in the definition of work done by a force along a path.

**Answer:**
The dot product $\mathbf{F} \cdot d\mathbf{r}$ is used because work is done only by the component of the force that is parallel to the infinitesimal displacement $d\mathbf{r}$. The dot product $\mathbf{a} \cdot \mathbf{b} = |\mathbf{a}| |\mathbf{b}| \cos \theta$ inherently calculates this parallel component, as $\cos \theta$ is maximal when $\theta=0$ (force and displacement in the same direction) and zero when $\theta=\pi/2$ (force perpendicular to displacement). Thus, it correctly accounts for the contribution of the force along the direction of motion. This aligns with **CO3** as it demonstrates the application of vector operations.

**Question 2 (Calculation):**
Calculate the work done by the force field $\mathbf{F}(x, y) = \langle 2x, 3y \rangle$ along the curve $C$ given by the line segment from $(0, 0)$ to $(1, 1)$.

**Answer:**
1.  **Parameterize $C$**: A line segment from $(0,0)$ to $(1,1)$ can be parameterized as $\mathbf{r}(t) = \langle t, t \rangle$ for $0 \le t \le 1$.
2.  **Find $\mathbf{r}'(t)$**: $\mathbf{r}'(t) = \langle 1, 1 \rangle$.
3.  **Express $\mathbf{F}$ along $C$**: Substitute $x=t, y=t$ into $\mathbf{F}(x, y) = \langle 2x, 3y \rangle$. So, $\mathbf{F}(\mathbf{r}(t)) = \langle 2t, 3t \rangle$.
4.  **Compute dot product**: $\mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) = \langle 2t, 3t \rangle \cdot \langle 1, 1 \rangle = (2t)(1) + (3t)(1) = 2t + 3t = 5t$.
5.  **Integrate**: $W = \int_0^1 5t dt = \left[\frac{5t^2}{2}\right]_0^1 = \frac{5(1)^2}{2} - \frac{5(0)^2}{2} = \frac{5}{2}$.

The work done is $5/2$. This is a direct application of the calculation steps for line integrals, showcasing **CO3**.

**Question 3 (Conceptual/Application):**
Is the force field $\mathbf{F}(x, y) = \langle y, x \rangle$ conservative? If yes, find its potential function.

**Answer:**
To check if $\mathbf{F} = \langle P, Q \rangle = \langle y, x \rangle$ is conservative, we check if $\frac{\partial Q}{\partial x} = \frac{\partial P}{\partial y}$.
Here, $P = y$ and $Q = x$.
$\frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(y) = 1$.
$\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(x) = 1$.
Since $\frac{\partial Q}{\partial x} = \frac{\partial P}{\partial y}$, the force field is conservative.

To find the potential function $\phi(x, y)$ such that $\nabla \phi = \mathbf{F}$, we have:
1.  $\frac{\partial \phi}{\partial x} = P = y$
2.  $\frac{\partial \phi}{\partial y} = Q = x$

Integrate (1) with respect to $x$:
$\phi(x, y) = \int y \, dx = xy + g(y)$, where $g(y)$ is an arbitrary function of $y$.

Now, differentiate this expression for $\phi$ with respect to $y$ and set it equal to $Q$:
$\frac{\partial \phi}{\partial y} = \frac{\partial}{\partial y}(xy + g(y)) = x + g'(y)$.
We know $\frac{\partial \phi}{\partial y} = x$.
So, $x + g'(y) = x$, which implies $g'(y) = 0$.
Integrating $g'(y)=0$ with respect to $y$ gives $g(y) = C$, where $C$ is a constant.

Therefore, the potential function is $\phi(x, y) = xy + C$. This understanding of potential functions is key to applying line integrals in physics and electrical science, linking to **CO3**.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
