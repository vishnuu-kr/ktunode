---
title: "Gradient and its properties"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 2"
module: "Module 3: Vector valued function of single variable "
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f9838"
status: "completed"
scrapedAt: "2026-05-23T16:08:12.899Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 2

## Module 3: Vector Valued Functions of a Single Variable

### Topic: The Gradient and Its Properties

Welcome back, everyone! In this session, we're going to dive into a concept that's absolutely fundamental when we start dealing with functions of multiple variables, especially in fields like electrical science and physical science. We're talking about the **gradient**. You've already built a solid foundation with single-variable calculus, and now we're extending those ideas to more complex scenarios. The gradient is our key tool for understanding how functions change in space, and it directly connects to several of our course outcomes, particularly CO1: computing partial and total derivatives and understanding maxima/minima. Think of it as the multidimensional equivalent of the derivative.

Before we jump into the gradient itself, let's briefly recap where we are. We've been exploring functions that take multiple inputs (like $x$, $y$, and $z$) and give us a single output. For instance, in physics, the temperature distribution in a room, or in electrical engineering, the electric potential across a circuit board, can be thought of as functions of position ($x, y, z$). The gradient will tell us *in which direction* the temperature or potential is increasing most rapidly, and *how quickly* it's increasing in that direction. This is crucial for understanding phenomena like heat flow or current distribution.

### 3.1 Introduction to the Gradient: What is it?

Imagine you're standing on a hillside. The ground elevation at your location can be described by a function of your east-west position ($x$) and your north-south position ($y$). Let's call this function $f(x, y)$. If you want to know which way is "uphill" – the direction of steepest ascent – you need more than just the slope in the $x$ direction or the $y$ direction individually. You need a way to combine these. This is precisely what the gradient does.

Mathematically, for a scalar function of two variables, $f(x, y)$, the gradient is a **vector** field. It's denoted by $\nabla f$ (read as "nabla f" or "del f"). This vector at a point $(x, y)$ points in the direction of the greatest rate of increase of $f$ at that point, and its magnitude is that greatest rate of increase.

For a function $f(x, y)$, the gradient is defined as:

$$ \nabla f(x, y) = \frac{\partial f}{\partial x} \mathbf{i} + \frac{\partial f}{\partial y} \mathbf{j} $$

Here, $\frac{\partial f}{\partial x}$ is the **partial derivative of $f$ with respect to $x$**, meaning we treat $y$ as a constant and differentiate with respect to $x$. Similarly, $\frac{\partial f}{\partial y}$ is the partial derivative of $f$ with respect to $y$, treating $x$ as a constant. The $\mathbf{i}$ and $\mathbf{j}$ are the standard unit vectors in the $x$ and $y$ directions, respectively.

If our function is in three dimensions, say $f(x, y, z)$, the gradient is a vector in 3D space:

$$ \nabla f(x, y, z) = \frac{\partial f}{\partial x} \mathbf{i} + \frac{\partial f}{\partial y} \mathbf{j} + \frac{\partial f}{\partial z} \mathbf{k} $$

Where $\mathbf{k}$ is the unit vector in the $z$ direction.

**Remember this:** The gradient is always a vector, and it tells you about the *rate and direction* of the fastest change of a scalar function. This is a core concept, and you'll see it pop up repeatedly. Our textbook, Anton, Biven, and Davis (12th edition), covers this early in their multivariable calculus sections, laying the groundwork for later applications.

### 3.2 Calculating the Gradient: Let's Get Practical!

Let's work through an example to make this concrete. Suppose the temperature $T$ in a metal plate is given by the function $T(x, y) = x^2y + 3y^3$, where $x$ and $y$ are in meters and $T$ is in degrees Celsius. We want to find the gradient of the temperature at the point $(1, 2)$.

First, we need to find the partial derivatives:

*   **Partial derivative with respect to $x$:** Treat $y$ as a constant.
    $$ \frac{\partial T}{\partial x} = \frac{\partial}{\partial x}(x^2y + 3y^3) = 2xy $$
*   **Partial derivative with respect to $y$:** Treat $x$ as a constant.
    $$ \frac{\partial T}{\partial y} = \frac{\partial}{\partial y}(x^2y + 3y^3) = x^2 + 9y^2 $$

Now, we can write down the gradient vector function:

$$ \nabla T(x, y) = 2xy \mathbf{i} + (x^2 + 9y^2) \mathbf{j} $$

To find the gradient at the specific point $(1, 2)$, we substitute $x=1$ and $y=2$ into the gradient vector:

$$ \nabla T(1, 2) = 2(1)(2) \mathbf{i} + ((1)^2 + 9(2)^2) \mathbf{j} $$
$$ \nabla T(1, 2) = 4 \mathbf{i} + (1 + 9(4)) \mathbf{j} $$
$$ \nabla T(1, 2) = 4 \mathbf{i} + (1 + 36) \mathbf{j} $$
$$ \nabla T(1, 2) = 4 \mathbf{i} + 37 \mathbf{j} $$

So, at the point $(1, 2)$ on the metal plate, the temperature is increasing most rapidly in the direction of the vector $4\mathbf{i} + 37\mathbf{j}$. The magnitude of this vector, $||\nabla T(1, 2)|| = \sqrt{4^2 + 37^2} = \sqrt{16 + 1369} = \sqrt{1385}$, tells us the rate of that increase.

This example directly relates to CO1 – we're computing partial derivatives to understand how the function changes. In an exam, you might be asked to find the gradient at a point, or the direction of maximum increase.

### 3.3 Properties of the Gradient

The gradient is not just a calculation; it has some incredibly useful properties that unlock deeper understanding and allow us to solve more complex problems. These properties are key to our CO1 learning outcome, specifically concerning maxima and minima.

#### 3.3.1 Direction of Maximum Rate of Increase

We've already touched on this, but it's worth stating formally. For a differentiable scalar function $f$, the gradient vector $\nabla f$ at a point $P$ points in the direction of the **maximum rate of increase** of $f$ at $P$. The magnitude of the gradient, $||\nabla f||$, is this maximum rate.

Think about our hillside analogy. If $\nabla f$ at your location points towards the north-east, then going north-east will get you to higher ground faster than going purely north or purely east.

#### 3.3.2 Direction of Maximum Rate of Decrease

This is a direct consequence of the previous property. The direction of the **maximum rate of decrease** of $f$ at $P$ is in the direction opposite to the gradient, i.e., $-\nabla f$. The rate of decrease is $|-\nabla f| = ||\nabla f||$.

#### 3.3.3 Direction of No Change (Level Curves/Surfaces)

This is a particularly important property. The gradient vector $\nabla f$ at a point $P$ is **orthogonal (perpendicular)** to the level curve (in 2D) or level surface (in 3D) of $f$ that passes through $P$.

What does this mean? A level curve (or surface) is a set of points where the function $f$ has a constant value. For example, on our hillside, a level curve is a contour line, where the elevation is the same all along the line. If you walk along a contour line, your elevation isn't changing.

The fact that the gradient is perpendicular to the level curve means that the gradient vector points directly "across" the contour lines, in the direction where the elevation changes most steeply. This is visually intuitive and incredibly powerful. This property is vital for optimization problems – if you're looking for a peak or a valley (maxima or minima), you're essentially looking for points where the "slope" is zero in all directions.

Mathematically, if $C$ is a level curve of $f$, then any tangent vector to $C$ at a point $P$ is orthogonal to $\nabla f$ at $P$. This links directly to CO3, where we discuss derivatives of vector functions and their applications, as tangent vectors are essentially derivatives of parametric curves.

**To understand this better, consider a parametric curve $\mathbf{r}(t)$ that lies on a level curve of $f$.** So, $f(\mathbf{r}(t)) = k$ (a constant) for all $t$.
Using the chain rule for vector functions (a concept we'll explore further, but you're familiar with from single-variable calculus extended to multiple variables), the derivative of $f(\mathbf{r}(t))$ with respect to $t$ is:

$$ \frac{d}{dt} f(\mathbf{r}(t)) = \nabla f(\mathbf{r}(t)) \cdot \mathbf{r}'(t) $$

Since $f(\mathbf{r}(t))$ is constant, its derivative with respect to $t$ is 0:

$$ \nabla f(\mathbf{r}(t)) \cdot \mathbf{r}'(t) = 0 $$

Here, $\mathbf{r}'(t)$ is the tangent vector to the curve at $\mathbf{r}(t)$. The dot product being zero means that $\nabla f(\mathbf{r}(t))$ is orthogonal to $\mathbf{r}'(t)$. This holds for *any* curve on the level set, so $\nabla f$ must be orthogonal to the level set itself.

**Example for Level Curves:**
Let's take our temperature function $T(x, y) = x^2y + 3y^3$. Consider a level curve where $T(x, y) = 10$.
At the point $(1, 2)$, we found $\nabla T(1, 2) = 4\mathbf{i} + 37\mathbf{j}$.
The value of the temperature at $(1, 2)$ is $T(1, 2) = (1)^2(2) + 3(2)^3 = 2 + 3(8) = 2 + 24 = 26$.
So, we are on the level curve $x^2y + 3y^3 = 26$. The gradient $4\mathbf{i} + 37\mathbf{j}$ is perpendicular to this curve at $(1, 2)$.

#### 3.3.4 The Directional Derivative

This is a direct application of the gradient, and it's extremely important for CO1. The directional derivative of $f$ at $P$ in the direction of a unit vector $\mathbf{u}$ is given by:

$$ D_{\mathbf{u}}f(P) = \nabla f(P) \cdot \mathbf{u} $$

This tells us the rate of change of $f$ at $P$ as we move in the specific direction of $\mathbf{u}$.

Why is this true? Let $\mathbf{u}$ be a unit vector representing a direction. We can define a parametric curve $\mathbf{r}(t) = P + t\mathbf{u}$. As $t$ increases, we move away from $P$ in the direction of $\mathbf{u}$.
The rate of change of $f$ along this path is $\frac{d}{dt} f(\mathbf{r}(t))$.
Using the chain rule:
$$ \frac{d}{dt} f(\mathbf{r}(t)) = \nabla f(\mathbf{r}(t)) \cdot \mathbf{r}'(t) $$
At $t=0$, $\mathbf{r}(0) = P$ and $\mathbf{r}'(0) = \mathbf{u}$. So, the rate of change at $P$ in the direction $\mathbf{u}$ is:
$$ D_{\mathbf{u}}f(P) = \nabla f(P) \cdot \mathbf{u} $$

**To maximize this directional derivative**, we recall the properties of the dot product: $\mathbf{a} \cdot \mathbf{b} = ||\mathbf{a}|| ||\mathbf{b}|| \cos \theta$, where $\theta$ is the angle between $\mathbf{a}$ and $\mathbf{b}$.
Here, $D_{\mathbf{u}}f(P) = ||\nabla f(P)|| ||\mathbf{u}|| \cos \theta$. Since $\mathbf{u}$ is a unit vector, $||\mathbf{u}|| = 1$.
$$ D_{\mathbf{u}}f(P) = ||\nabla f(P)|| \cos \theta $$
This is maximized when $\cos \theta = 1$, which means $\theta = 0$. This occurs when $\mathbf{u}$ is in the same direction as $\nabla f(P)$. In this case, $D_{\mathbf{u}}f(P) = ||\nabla f(P)||$, which confirms our earlier statement about the direction of maximum increase.

**Example of Directional Derivative:**
Using our temperature function $T(x, y) = x^2y + 3y^3$ at point $(1, 2)$, where $\nabla T(1, 2) = 4\mathbf{i} + 37\mathbf{j}$.
Let's find the rate of temperature change at $(1, 2)$ in the direction of the vector $\mathbf{v} = \mathbf{i} + \mathbf{j}$.
First, we need a unit vector $\mathbf{u}$ in this direction.
$||\mathbf{v}|| = \sqrt{1^2 + 1^2} = \sqrt{2}$.
So, $\mathbf{u} = \frac{\mathbf{v}}{||\mathbf{v}||} = \frac{1}{\sqrt{2}}\mathbf{i} + \frac{1}{\sqrt{2}}\mathbf{j}$.

Now, we compute the directional derivative:
$$ D_{\mathbf{u}}T(1, 2) = \nabla T(1, 2) \cdot \mathbf{u} $$
$$ D_{\mathbf{u}}T(1, 2) = (4\mathbf{i} + 37\mathbf{j}) \cdot \left(\frac{1}{\sqrt{2}}\mathbf{i} + \frac{1}{\sqrt{2}}\mathbf{j}\right) $$
$$ D_{\mathbf{u}}T(1, 2) = 4\left(\frac{1}{\sqrt{2}}\right) + 37\left(\frac{1}{\sqrt{2}}\right) $$
$$ D_{\mathbf{u}}T(1, 2) = \frac{41}{\sqrt{2}} = \frac{41\sqrt{2}}{2} $$
The rate of temperature increase at $(1, 2)$ in the direction of $\mathbf{i} + \mathbf{j}$ is $\frac{41\sqrt{2}}{2}$ degrees Celsius per meter. This is a direct application of CO1.

#### 3.3.5 Gradient and Extrema (Maxima/Minima)

This is where the gradient shines for CO1.
**Critical Points:** A point $P$ in the domain of $f$ is called a **critical point** if either $\nabla f(P) = \mathbf{0}$ (the zero vector) or $\nabla f(P)$ is undefined.

Why are these important?
If $f$ has a local maximum or a local minimum at a point $P$ that is not on the boundary of the domain, and if the partial derivatives of $f$ exist at $P$, then $P$ must be a critical point. This is the multidimensional analogue of Fermat's Theorem for finding extrema.

Think about it: if you're at a peak or a valley on a smooth surface, the ground is perfectly flat horizontally – meaning the slope in every direction is zero. The gradient is the vector that points in the direction of the steepest slope. If the slope is zero in every direction, the gradient vector must be the zero vector.

So, to find local maxima and minima of a function $f$, we first find all critical points by setting $\nabla f = \mathbf{0}$ and solving for $(x, y)$ (or $(x, y, z)$). We also check points where the gradient is undefined. These critical points are *candidates* for local maxima, minima, or saddle points. Further tests, like the second derivative test (which we might touch upon later or in a subsequent module), are needed to classify these points.

**Example:** Find the critical points of $f(x, y) = x^2 + y^2 - 2x - 4y + 10$.
1.  **Find the gradient:**
    $$ \frac{\partial f}{\partial x} = 2x - 2 $$
    $$ \frac{\partial f}{\partial y} = 2y - 4 $$
    $$ \nabla f(x, y) = (2x - 2)\mathbf{i} + (2y - 4)\mathbf{j} $$
2.  **Set the gradient to zero:**
    $$ \nabla f(x, y) = \mathbf{0} \implies (2x - 2)\mathbf{i} + (2y - 4)\mathbf{j} = 0\mathbf{i} + 0\mathbf{j} $$
    This gives us two equations:
    $$ 2x - 2 = 0 \implies x = 1 $$
    $$ 2y - 4 = 0 \implies y = 2 $$
3.  **The critical point is (1, 2).**
    Since the gradient is defined everywhere, this is our only critical point.
    What is the value of $f$ at $(1, 2)$?
    $f(1, 2) = (1)^2 + (2)^2 - 2(1) - 4(2) + 10 = 1 + 4 - 2 - 8 + 10 = 5$.
    Geometrically, $f(x, y) = (x-1)^2 + (y-2)^2 + 5$. This is a paraboloid opening upwards, and its minimum value is indeed 5 at $(1, 2)$. This confirms our critical point analysis. This is a direct application of CO1.

#### 3.3.6 Properties of the Gradient Operator ($\nabla$)

The $\nabla$ operator itself has some useful algebraic properties, similar to how derivatives follow linearity rules. These are often found in comprehensive texts like Kreyszig or Ramana.

*   **Scalar Multiplication:** For a scalar function $g$ and a constant $c$:
    $$ \nabla (cg) = c \nabla g $$
*   **Sum Rule:** For two scalar functions $f$ and $g$:
    $$ \nabla (f+g) = \nabla f + \nabla g $$
*   **Product Rule:** For two scalar functions $f$ and $g$:
    $$ \nabla (fg) = f \nabla g + g \nabla f $$
    This is very similar to the product rule in single-variable calculus.
*   **Quotient Rule:** For two scalar functions $f$ and $g$, where $g \neq 0$:
    $$ \nabla \left(\frac{f}{g}\right) = \frac{g \nabla f - f \nabla g}{g^2} $$

These rules are crucial if you're dealing with more complex functions and need to compute their gradients without losing track of the underlying structure. For example, finding the gradient of $h(x, y) = x^2y + \sin(xy)$ involves using the sum and product rules.

#### 3.3.7 Gradient and Vector Fields (Brief Mention)

While this module focuses on vector-valued functions of a *single* variable, it's worth noting that the gradient is the building block for more advanced concepts involving vector fields, which are functions that map each point in space to a vector. For example, $\mathbf{F}(x, y, z) = P(x, y, z)\mathbf{i} + Q(x, y, z)\mathbf{j} + R(x, y, z)\mathbf{k}$ is a vector field.

The gradient of a scalar function $\phi(x, y, z)$ is a special type of vector field, called a **conservative vector field**. If a vector field $\mathbf{F}$ can be expressed as $\mathbf{F} = \nabla \phi$ for some scalar function $\phi$, then $\mathbf{F}$ is called a **gradient field**, and $\phi$ is called its **potential function**. This concept is absolutely vital in electromagnetism (electric potential and electric field) and mechanics (gravitational potential and gravitational field). This connects to CO3's application aspect, as we often relate vector fields to scalar potentials via gradients.

### Summary and Key Takeaways

Let's crystallize the most important points about the gradient:

*   **Definition:** The gradient of a scalar function $f(x, y, \dots)$ is a vector: $\nabla f = \frac{\partial f}{\partial x}\mathbf{i} + \frac{\partial f}{\partial y}\mathbf{j} + \dots$.
*   **Direction of Steepest Ascent:** $\nabla f$ at a point points in the direction where $f$ increases most rapidly.
*   **Magnitude of Steepest Ascent:** $||\nabla f||$ is the rate of that maximum increase.
*   **Direction of Steepest Descent:** $-\nabla f$ points in the direction of maximum decrease.
*   **Orthogonal to Level Sets:** $\nabla f$ is always perpendicular to the level curves (2D) or level surfaces (3D) of $f$.
*   **Directional Derivative:** $D_{\mathbf{u}}f = \nabla f \cdot \mathbf{u}$ gives the rate of change of $f$ in the direction of the unit vector $\mathbf{u}$.
*   **Critical Points:** For smooth functions, local maxima and minima occur at points where $\nabla f = \mathbf{0}$ or is undefined.

The gradient is your primary tool for understanding how scalar quantities vary in space. Mastering its calculation and properties will unlock many doors in your study of electrical and physical sciences. Make sure you are comfortable with partial differentiation, as that's the bedrock of gradient computation.

### Sample Questions and Answers

Here are a few questions to test your understanding, ranging from conceptual to application-based, as you might see them in an exam.

**Question 1 (Conceptual - CO1):**
What does the gradient vector $\nabla f$ at a point $P$ represent geometrically with respect to the level curves (or surfaces) of $f$? Explain why.

**Answer 1:**
The gradient vector $\nabla f$ at a point $P$ is orthogonal (perpendicular) to the level curve (or level surface) of $f$ that passes through $P$.
**Reasoning:** A level curve (or surface) is defined by $f(x, y) = k$ for some constant $k$. If we consider a smooth path $\mathbf{r}(t)$ lying on this level curve, then $f(\mathbf{r}(t)) = k$ for all $t$. By the chain rule, $\frac{d}{dt}f(\mathbf{r}(t)) = \nabla f(\mathbf{r}(t)) \cdot \mathbf{r}'(t)$. Since the left side is the derivative of a constant, it's zero. Thus, $\nabla f(\mathbf{r}(t)) \cdot \mathbf{r}'(t) = 0$. This means the gradient vector $\nabla f$ is orthogonal to the tangent vector $\mathbf{r}'(t)$ of any curve on the level set. Since this holds for all such tangent vectors at $P$, $\nabla f$ must be orthogonal to the level set itself.

**Question 2 (Calculation/Application - CO1):**
Let the electric potential in a region of space be given by $\phi(x, y, z) = x^2yz + y^2z^2$. Find the gradient of $\phi$ at the point $(1, -1, 2)$. What is the direction of the steepest increase in potential at this point?

**Answer 2:**
First, we find the partial derivatives of $\phi(x, y, z)$:
*   $\frac{\partial \phi}{\partial x} = 2xyz$
*   $\frac{\partial \phi}{\partial y} = x^2z + 2yz^2$
*   $\frac{\partial \phi}{\partial z} = x^2y + 2y^2z$

The gradient vector is:
$$ \nabla \phi(x, y, z) = (2xyz)\mathbf{i} + (x^2z + 2yz^2)\mathbf{j} + (x^2y + 2y^2z)\mathbf{k} $$

Now, we evaluate the gradient at the point $(1, -1, 2)$:
*   $\frac{\partial \phi}{\partial x}\Big|_{(1,-1,2)} = 2(1)(-1)(2) = -4$
*   $\frac{\partial \phi}{\partial y}\Big|_{(1,-1,2)} = (1)^2(2) + 2(-1)(2)^2 = 2 + 2(-1)(4) = 2 - 8 = -6$
*   $\frac{\partial \phi}{\partial z}\Big|_{(1,-1,2)} = (1)^2(-1) + 2(-1)^2(2) = -1 + 2(1)(2) = -1 + 4 = 3$

So, the gradient at $(1, -1, 2)$ is:
$$ \nabla \phi(1, -1, 2) = -4\mathbf{i} - 6\mathbf{j} + 3\mathbf{k} $$

**Direction of steepest increase:** The gradient vector itself points in the direction of the steepest increase in potential. Therefore, the direction of steepest increase is given by the vector $-4\mathbf{i} - 6\mathbf{j} + 3\mathbf{k}$.

**Question 3 (Directional Derivative - CO1):**
Consider the function $f(x, y) = e^{x+y}$. Find the directional derivative of $f$ at $(0, 0)$ in the direction of the vector $\mathbf{v} = 3\mathbf{i} + 4\mathbf{j}$.

**Answer 3:**
First, find the gradient of $f(x, y) = e^{x+y}$:
*   $\frac{\partial f}{\partial x} = \frac{\partial}{\partial x}(e^{x+y}) = e^{x+y}$
*   $\frac{\partial f}{\partial y} = \frac{\partial}{\partial y}(e^{x+y}) = e^{x+y}$

So, $\nabla f(x, y) = e^{x+y}\mathbf{i} + e^{x+y}\mathbf{j}$.

Now, evaluate the gradient at $(0, 0)$:
$$ \nabla f(0, 0) = e^{0+0}\mathbf{i} + e^{0+0}\mathbf{j} = e^0\mathbf{i} + e^0\mathbf{j} = 1\mathbf{i} + 1\mathbf{j} = \mathbf{i} + \mathbf{j} $$

Next, we need a unit vector $\mathbf{u}$ in the direction of $\mathbf{v} = 3\mathbf{i} + 4\mathbf{j}$.
The magnitude of $\mathbf{v}$ is $||\mathbf{v}|| = \sqrt{3^2 + 4^2} = \sqrt{9+16} = \sqrt{25} = 5$.
The unit vector is $\mathbf{u} = \frac{\mathbf{v}}{||\mathbf{v}||} = \frac{3\mathbf{i} + 4\mathbf{j}}{5} = \frac{3}{5}\mathbf{i} + \frac{4}{5}\mathbf{j}$.

Finally, calculate the directional derivative using the dot product:
$$ D_{\mathbf{u}}f(0, 0) = \nabla f(0, 0) \cdot \mathbf{u} $$
$$ D_{\mathbf{u}}f(0, 0) = (\mathbf{i} + \mathbf{j}) \cdot \left(\frac{3}{5}\mathbf{i} + \frac{4}{5}\mathbf{j}\right) $$
$$ D_{\mathbf{u}}f(0, 0) = (1)\left(\frac{3}{5}\right) + (1)\left(\frac{4}{5}\right) $$
$$ D_{\mathbf{u}}f(0, 0) = \frac{3}{5} + \frac{4}{5} = \frac{7}{5} $$

The directional derivative is $\frac{7}{5}$. This means that at $(0,0)$, the function $f$ is increasing at a rate of $\frac{7}{5}$ per unit distance when moving in the direction of $\mathbf{v}$.

---
