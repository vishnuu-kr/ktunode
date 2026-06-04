---
title: "Vector valued function of single variable - derivative of vector valued function"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 2"
module: "Module 3: Vector valued function of single variable "
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f9836"
status: "completed"
scrapedAt: "2026-05-23T16:08:11.385Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 2

## Module 3: Vector Valued Functions of a Single Variable

### Topic: The Derivative of a Vector Valued Function

Welcome back, everyone! Today, we're diving into a really exciting part of our journey with vector-valued functions: understanding how they *change*. Just like how the derivative of a regular scalar function tells us the rate of change of a quantity (like velocity from position), the derivative of a vector-valued function tells us how a *vector* is changing over time or with respect to some parameter. This is absolutely crucial in many areas of electrical and physical science – think about the trajectory of a charged particle in an electromagnetic field, or the way an antenna's radiation pattern changes with frequency.

Our main goal today is to understand what this "derivative of a vector" means, how to calculate it, and how it directly links to our Course Outcomes. Specifically, this topic is fundamental to **CO3: Compute the derivatives and line integrals of vector functions and to learn their applications.** (Knowledge Level: K3). We'll see how understanding the rate of change of a vector is the first step towards calculating things like velocity and acceleration, and eventually, line integrals which are essential for understanding work done by forces or current flow along a path.

Let's start by building on what we already know about functions.

### 1. What is a Vector Valued Function? A Quick Recap

Remember, a vector-valued function of a single variable, let's say $\mathbf{r}(t)$, takes a single scalar input (like time, $t$) and outputs a vector. This vector can exist in 2D, 3D, or even higher dimensions.

We can write $\mathbf{r}(t)$ in component form as:

$\mathbf{r}(t) = \langle f(t), g(t), h(t) \rangle$

where $f(t)$, $g(t)$, and $h(t)$ are themselves scalar-valued functions of $t$. These are often called the component functions.

Think of $\mathbf{r}(t)$ as describing the position of a particle moving through space. As time $t$ changes, the vector $\mathbf{r}(t)$ sweeps out a path or a curve. For instance, if $\mathbf{r}(t) = \langle \cos(t), \sin(t), t \rangle$, this describes a helix – a spiral staircase in 3D!

### 2. Defining the Derivative: The Limit Approach

So, how do we define the rate of change of $\mathbf{r}(t)$? We borrow the fundamental definition of the derivative from single-variable calculus, but apply it to our vector components.

The derivative of a vector-valued function $\mathbf{r}(t)$ is defined as the limit:

$\mathbf{r}'(t) = \frac{d\mathbf{r}}{dt} = \lim_{\Delta t \to 0} \frac{\mathbf{r}(t + \Delta t) - \mathbf{r}(t)}{\Delta t}$

This looks very familiar, doesn't it? It's the same limit definition for the derivative of a scalar function. What does this mean intuitively?

Imagine our particle at position $\mathbf{r}(t)$. After a small time interval $\Delta t$, its position changes to $\mathbf{r}(t + \Delta t)$. The vector representing this change in position is $\Delta \mathbf{r} = \mathbf{r}(t + \Delta t) - \mathbf{r}(t)$.

Now, we divide this displacement vector by the time interval $\Delta t$ to get the average rate of change of position with respect to time: $\frac{\Delta \mathbf{r}}{\Delta t}$. As $\Delta t$ gets smaller and smaller, approaching zero, this average rate of change becomes the *instantaneous* rate of change. And that instantaneous rate of change is precisely the derivative vector, $\mathbf{r}'(t)$.

**Think of it like this:** If $\mathbf{r}(t)$ is the position of a car on a winding road, $\mathbf{r}'(t)$ represents its velocity vector at time $t$. The direction of $\mathbf{r}'(t)$ tells you the direction the car is moving at that instant, and its magnitude tells you the speed. This is a core concept in physics and engineering – relating position to velocity!

### 3. Calculating the Derivative: The Component Rule

The good news is that calculating the derivative of a vector-valued function is straightforward, thanks to a very convenient rule. If we can differentiate the component functions, we can differentiate the vector function.

**The Component Rule for Differentiation:**

If $\mathbf{r}(t) = \langle f(t), g(t), h(t) \rangle$, then its derivative is:

$\mathbf{r}'(t) = \left\langle \frac{df}{dt}, \frac{dg}{dt}, \frac{dh}{dt} \right\rangle = \langle f'(t), g'(t), h'(t) \rangle$

This rule comes directly from the limit definition. When we subtract $\mathbf{r}(t)$ from $\mathbf{r}(t + \Delta t)$, we're essentially subtracting the components. Then, dividing by $\Delta t$ and taking the limit, we apply the limit definition of the derivative to each component function independently.

This is a powerful result! It means we can treat vector differentiation as simply differentiating each component function separately. This is a common theme in many vector calculus operations – breaking down vector problems into scalar problems for each component.

**Example:**

Let's find the derivative of $\mathbf{r}(t) = \langle \sin(t), e^{2t}, t^2 + 1 \rangle$.

Here, our component functions are $f(t) = \sin(t)$, $g(t) = e^{2t}$, and $h(t) = t^2 + 1$.

We need to find the derivatives of each component:
*   $f'(t) = \frac{d}{dt}(\sin(t)) = \cos(t)$
*   $g'(t) = \frac{d}{dt}(e^{2t}) = 2e^{2t}$ (using the chain rule here, remember that?)
*   $h'(t) = \frac{d}{dt}(t^2 + 1) = 2t$

So, applying the component rule, the derivative is:

$\mathbf{r}'(t) = \langle \cos(t), 2e^{2t}, 2t \rangle$

**Relatable Example:** Imagine you're designing a robot arm. The position of the gripper might be described by a vector-valued function $\mathbf{p}(t)$. The derivative, $\mathbf{p}'(t)$, would then tell you the velocity of the gripper, which is crucial for controlling its movement smoothly and accurately. If you want the gripper to move along a specific path, you need to know its velocity vector at every point.

### 4. Geometric Interpretation: The Tangent Vector

What does $\mathbf{r}'(t)$ actually *mean* geometrically? When $\mathbf{r}(t)$ describes the path of a moving particle, $\mathbf{r}'(t)$ is the **tangent vector** to the curve at the point $\mathbf{r}(t)$.

Why tangent? Think back to the limit definition. The vector $\mathbf{r}(t + \Delta t) - \mathbf{r}(t)$ is a secant vector, connecting two points on the curve. As $\Delta t \to 0$, these two points get closer and closer, and the secant vector rotates to become tangent to the curve at $\mathbf{r}(t)$.

**Key Point:** The derivative vector $\mathbf{r}'(t)$ is always tangent to the curve traced by $\mathbf{r}(t)$ at the point $\mathbf{r}(t)$, provided $\mathbf{r}'(t) \neq \mathbf{0}$.

This concept is vital for understanding motion. The velocity vector is always tangent to the trajectory. For example, if you throw a ball, its velocity vector at any instant points in the direction it's currently moving.

**Connection to CO3:** This geometric interpretation is a direct link to **CO3**. Understanding $\mathbf{r}'(t)$ as the tangent vector is the first step in analyzing the motion of objects or the flow along paths, which are fundamental to line integrals and their applications in physics (like work done by a force along a path).

**What if $\mathbf{r}'(t) = \mathbf{0}$?** If the derivative vector is the zero vector, it means the particle has momentarily stopped, or the curve has a cusp or corner at that point. For example, if $\mathbf{r}(t) = \langle t^2, t^3 \rangle$, then $\mathbf{r}'(t) = \langle 2t, 3t^2 \rangle$. At $t=0$, $\mathbf{r}'(0) = \langle 0, 0 \rangle$, and indeed, the curve has a cusp at the origin.

### 5. Differentiation Rules for Vector Valued Functions

Just like with scalar functions, there are rules that simplify differentiation when dealing with sums, differences, scalar multiples, and products of vector-valued functions. These rules are derived directly from the rules for scalar functions and the component rule. We can find these rules detailed in standard texts like **Calculus by Anton, Biven, Davis** or **Thomas' Calculus**.

Let $\mathbf{r}(t)$ and $\mathbf{u}(t)$ be differentiable vector-valued functions of $t$, and let $k(t)$ be a differentiable scalar-valued function of $t$.

*   **Constant Multiple Rule:**
    $\frac{d}{dt}[k(t)\mathbf{r}(t)] = k'(t)\mathbf{r}(t) + k(t)\mathbf{r}'(t)$
    *(This is the product rule for a scalar multiplying a vector function).*

*   **Sum/Difference Rule:**
    $\frac{d}{dt}[\mathbf{r}(t) \pm \mathbf{u}(t)] = \mathbf{r}'(t) \pm \mathbf{u}'(t)$
    *(Simple enough, differentiate each term separately).*

*   **Dot Product Rule:**
    $\frac{d}{dt}[\mathbf{r}(t) \cdot \mathbf{u}(t)] = \mathbf{r}'(t) \cdot \mathbf{u}(t) + \mathbf{r}(t) \cdot \mathbf{u}'(t)$
    *(This is the product rule applied to the dot product. It's like the product rule for scalars, but with dot products).*

*   **Cross Product Rule:**
    $\frac{d}{dt}[\mathbf{r}(t) \times \mathbf{u}(t)] = \mathbf{r}'(t) \times \mathbf{u}(t) + \mathbf{r}(t) \times \mathbf{u}'(t)$
    *(Similar to the dot product rule, but using the cross product. Remember the order matters in cross products!)*

**Example applying rules:**

Let $\mathbf{r}(t) = \langle t, t^2 \rangle$ and $\mathbf{u}(t) = \langle 1, t \rangle$. Let's find $\frac{d}{dt}[\mathbf{r}(t) \cdot \mathbf{u}(t)]$.

First, calculate the dot product:
$\mathbf{r}(t) \cdot \mathbf{u}(t) = \langle t, t^2 \rangle \cdot \langle 1, t \rangle = t(1) + t^2(t) = t + t^3$.

Now, differentiate this scalar result:
$\frac{d}{dt}[t + t^3] = 1 + 3t^2$.

Alternatively, using the dot product rule:
First, find the derivatives of $\mathbf{r}(t)$ and $\mathbf{u}(t)$:
$\mathbf{r}'(t) = \langle 1, 2t \rangle$
$\mathbf{u}'(t) = \langle 0, 1 \rangle$

Now apply the rule:
$\frac{d}{dt}[\mathbf{r}(t) \cdot \mathbf{u}(t)] = \mathbf{r}'(t) \cdot \mathbf{u}(t) + \mathbf{r}(t) \cdot \mathbf{u}'(t)$
$= \langle 1, 2t \rangle \cdot \langle 1, t \rangle + \langle t, t^2 \rangle \cdot \langle 0, 1 \rangle$
$= (1 \cdot 1 + 2t \cdot t) + (t \cdot 0 + t^2 \cdot 1)$
$= (1 + 2t^2) + (t^2)$
$= 1 + 3t^2$.

As you can see, both methods yield the same result. Using the rules can be more efficient, especially when the component functions are complex.

**Important for Exams:** These differentiation rules are frequently tested. Make sure you are comfortable applying the product rule for both dot and cross products. A common pitfall is mixing up the order in the cross product rule, or forgetting the derivative of the scalar function in the constant multiple rule.

### 6. Higher-Order Derivatives

Just like with scalar functions, we can take the derivative of the derivative, and so on. The second derivative, $\mathbf{r}''(t)$, is simply the derivative of $\mathbf{r}'(t)$.

$\mathbf{r}''(t) = \frac{d}{dt}[\mathbf{r}'(t)] = \frac{d^2\mathbf{r}}{dt^2}$

If $\mathbf{r}'(t) = \langle f'(t), g'(t), h'(t) \rangle$, then:

$\mathbf{r}''(t) = \langle f''(t), g''(t), h''(t) \rangle$

**Physical Significance:** In mechanics, if $\mathbf{r}(t)$ represents position, then $\mathbf{r}'(t)$ is velocity, and $\mathbf{r}''(t)$ is **acceleration**. This is incredibly important for analyzing motion! If you're studying the motion of a satellite, its position vector $\mathbf{r}(t)$ is governed by gravitational forces. The second derivative of this position vector, $\mathbf{r}''(t)$, will be directly proportional to the gravitational force (by Newton's second law, $\mathbf{F} = m\mathbf{a}$), telling us about its acceleration and how its velocity changes.

**Example:**

Let $\mathbf{r}(t) = \langle \cos(t), \sin(t), t^2 \rangle$.

*   **First derivative (Velocity):**
    $\mathbf{r}'(t) = \langle -\sin(t), \cos(t), 2t \rangle$

*   **Second derivative (Acceleration):**
    $\mathbf{r}''(t) = \frac{d}{dt}\langle -\sin(t), \cos(t), 2t \rangle = \langle -\cos(t), -\sin(t), 2 \rangle$

This tells us that the particle moving along this path has an acceleration vector that has a constant component in the z-direction and a component in the xy-plane that rotates with time.

### 7. Relevance to Course Outcomes

Let's explicitly tie this back to our Course Outcomes:

*   **CO3: Compute the derivatives and line integrals of vector functions and to learn their applications. (Knowledge Level: K3)**
    *   We’ve covered the "Compute the derivatives" part thoroughly. You now know *how* to find $\mathbf{r}'(t)$ and $\mathbf{r}''(t)$.
    *   The understanding of $\mathbf{r}'(t)$ as a tangent vector is fundamental to grasping the concept of a path, which is what line integrals are all about. When we discuss line integrals of vector fields, we'll be looking at how a vector field behaves along a curve, and the properties of that curve (like its direction and curvature, related to its derivatives) are critical.
    *   For example, in physics, if $\mathbf{r}(t)$ describes the path of a particle and $\mathbf{F}$ is a force acting on it, the work done by the force is given by $\int \mathbf{F} \cdot d\mathbf{r}$. To evaluate this, we parameterize the path using $\mathbf{r}(t)$, and $d\mathbf{r} = \mathbf{r}'(t) dt$. So, understanding $\mathbf{r}'(t)$ is the essential first step to applying derivatives to compute line integrals.

**Exam Tip:** Expect questions that ask you to find the velocity and acceleration vectors for a given path, and to interpret their meaning. Also, problems might ask you to differentiate a vector function involving dot or cross products, testing your knowledge of those rules.

### Summary of Key Takeaways

*   The derivative of a vector-valued function $\mathbf{r}(t)$ is found by differentiating each component function separately: $\mathbf{r}'(t) = \langle f'(t), g'(t), h'(t) \rangle$.
*   Geometrically, $\mathbf{r}'(t)$ is the tangent vector to the curve traced by $\mathbf{r}(t)$ at the point $\mathbf{r}(t)$.
*   If $\mathbf{r}(t)$ is position, $\mathbf{r}'(t)$ is velocity and $\mathbf{r}''(t)$ is acceleration.
*   The standard differentiation rules (sum, difference, constant multiple, dot product, cross product) apply to vector-valued functions.
*   Understanding derivatives of vector functions is foundational for many applications, including motion analysis and the computation of line integrals.

---

### Sample Questions with Answers

**Question 1 (Conceptual):**
If $\mathbf{r}(t)$ represents the position vector of a particle, what does $\mathbf{r}'(t)$ represent, and what is its geometric significance?

**Answer:**
$\mathbf{r}'(t)$ represents the **velocity vector** of the particle at time $t$. Geometrically, it is the **tangent vector** to the path traced by the particle at the position $\mathbf{r}(t)$. The direction of $\mathbf{r}'(t)$ indicates the direction of motion, and its magnitude represents the speed of the particle.

**Question 2 (Calculational):**
Find the derivative of the vector-valued function $\mathbf{r}(t) = \langle \ln(t), 3t^4, \cos(t) \rangle$.

**Answer:**
To find the derivative, we differentiate each component function:
*   $\frac{d}{dt}(\ln(t)) = \frac{1}{t}$
*   $\frac{d}{dt}(3t^4) = 12t^3$
*   $\frac{d}{dt}(\cos(t)) = -\sin(t)$

Therefore, the derivative is:
$\mathbf{r}'(t) = \left\langle \frac{1}{t}, 12t^3, -\sin(t) \right\rangle$.

**Question 3 (Application of Rules):**
Given $\mathbf{r}(t) = \langle t, t^2 \rangle$ and $\mathbf{u}(t) = \langle \cos(t), \sin(t) \rangle$, find the derivative of $\mathbf{r}(t) \cdot \mathbf{u}(t)$ using the dot product rule.

**Answer:**
First, we find the derivatives of $\mathbf{r}(t)$ and $\mathbf{u}(t)$:
$\mathbf{r}'(t) = \frac{d}{dt}\langle t, t^2 \rangle = \langle 1, 2t \rangle$
$\mathbf{u}'(t) = \frac{d}{dt}\langle \cos(t), \sin(t) \rangle = \langle -\sin(t), \cos(t) \rangle$

Now, we apply the dot product rule for differentiation:
$\frac{d}{dt}[\mathbf{r}(t) \cdot \mathbf{u}(t)] = \mathbf{r}'(t) \cdot \mathbf{u}(t) + \mathbf{r}(t) \cdot \mathbf{u}'(t)$
$= \langle 1, 2t \rangle \cdot \langle \cos(t), \sin(t) \rangle + \langle t, t^2 \rangle \cdot \langle -\sin(t), \cos(t) \rangle$
$= (1 \cdot \cos(t) + 2t \cdot \sin(t)) + (t \cdot (-\sin(t)) + t^2 \cdot \cos(t))$
$= (\cos(t) + 2t \sin(t)) + (-\sin(t)t + t^2 \cos(t))$
$= \cos(t) + 2t \sin(t) - t \sin(t) + t^2 \cos(t)$
$= (1+t^2)\cos(t) + t \sin(t)$

**Question 4 (Second Derivative):**
Find the second derivative of the vector-valued function $\mathbf{r}(t) = \langle e^t, t^3, \sin(2t) \rangle$.

**Answer:**
First, find the first derivative:
$\mathbf{r}'(t) = \frac{d}{dt}\langle e^t, t^3, \sin(2t) \rangle$
$\mathbf{r}'(t) = \langle e^t, 3t^2, 2\cos(2t) \rangle$ (remembering the chain rule for $\sin(2t)$)

Now, find the second derivative by differentiating $\mathbf{r}'(t)$:
$\mathbf{r}''(t) = \frac{d}{dt}\langle e^t, 3t^2, 2\cos(2t) \rangle$
$\mathbf{r}''(t) = \langle e^t, 6t, -4\sin(2t) \rangle$ (remembering the chain rule for $\cos(2t)$)
