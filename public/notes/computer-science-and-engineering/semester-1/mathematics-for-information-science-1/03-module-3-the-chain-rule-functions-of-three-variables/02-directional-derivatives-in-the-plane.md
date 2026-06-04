---
title: "Directional Derivatives in the Plane"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 1"
module: "Module 3: The Chain Rule: Functions of three Variables"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5bd4"
status: "completed"
scrapedAt: "2026-05-20T16:40:15.628Z"
---
# MATHEMATICS FOR INFORMATION SCIENCE – 1

## Module 3: The Chain Rule: Functions of Three Variables

### Topic: Directional Derivatives in the Plane

Welcome, everyone! Today, we're diving into a fascinating topic that allows us to understand how a function changes not just in specific directions (like along the x or y axes), but in *any* direction we choose. This is the essence of **Directional Derivatives**. While our module title mentions functions of three variables, this particular topic, "Directional Derivatives in the Plane," focuses on functions of *two* variables, which is a beautiful stepping stone. Think of it as getting a very precise feel for the landscape of a 2D surface before we tackle more complex terrains. This will directly help us achieve **CO3: Interpret directional derivative and solve maxima and minima of multivariable functions.** Understanding how a function changes in any direction is crucial for optimization problems.

### 1. Revisiting Partial Derivatives: The "Axis-Aligned" Changes

Before we talk about *any* direction, let's remember what we've already learned about changes along specific directions. We've encountered **partial derivatives**.

Remember, if we have a function of two variables, say $f(x, y)$, the partial derivative with respect to $x$, denoted as $\frac{\partial f}{\partial x}$ or $f_x(x, y)$, tells us the rate of change of $f$ as we move *only* along the x-axis, keeping $y$ constant. Similarly, $\frac{\partial f}{\partial y}$ or $f_y(x, y)$ tells us the rate of change of $f$ as we move *only* along the y-axis, keeping $x$ constant.

Think of $f(x, y)$ as the temperature at a point $(x, y)$ on a flat metal plate. $\frac{\partial f}{\partial x}$ tells you how the temperature changes if you walk purely east (increasing $x$), and $\frac{\partial f}{\partial y}$ tells you how it changes if you walk purely north (increasing $y$). These are like your compass directions: East and North.

But what if you want to walk northeast? Or any other direction? That's where directional derivatives come in.

### 2. The Gradient Vector: The "Direction of Steepest Ascent"

To understand directional derivatives, we first need to introduce a very important concept: the **gradient vector**.

Let's say we have a differentiable function $f(x, y)$. The gradient of $f$ at a point $(x_0, y_0)$ is a vector that points in the direction of the *greatest rate of increase* of the function at that point. It's defined as:

$\nabla f(x_0, y_0) = \frac{\partial f}{\partial x}(x_0, y_0) \mathbf{i} + \frac{\partial f}{\partial y}(x_0, y_0) \mathbf{j}$

Or, more compactly, using vector notation:

$\nabla f(x, y) = \langle f_x(x, y), f_y(x, y) \rangle$

Think of the gradient as your "slope indicator." If you're standing on a hill (represented by $f(x, y)$), and you want to know which way is uphill the fastest, the gradient vector at your current position points precisely in that direction. The magnitude of the gradient vector tells you *how steep* that steepest ascent is.

*   **From Thomas' Calculus (15th ed.):** The gradient vector $\nabla f$ at a point $(x, y)$ is the vector $\langle f_x(x, y), f_y(x, y) \rangle$. It's often called the **gradient of $f$**.
*   **From Kreyszig's Advanced Engineering Mathematics (10th ed.):** Kreyszig also emphasizes the gradient as a vector containing the partial derivatives, $\nabla f = (\frac{\partial f}{\partial x}, \frac{\partial f}{\partial y})$.

**Why is this important?** The gradient vector encapsulates all the directional information about how a function changes at a given point. The partial derivatives are just special cases of movement along the coordinate axes, whereas the gradient is the master directional tool.

### 3. Defining the Directional Derivative

Now, let's formalize the idea of change in *any* direction.

Suppose we want to find the rate of change of $f(x, y)$ at a point $(x_0, y_0)$ in the direction of a unit vector $\mathbf{u} = \langle u_1, u_2 \rangle$.

The **directional derivative** of $f$ at $(x_0, y_0)$ in the direction of $\mathbf{u}$ is denoted by $D_{\mathbf{u}}f(x_0, y_0)$. It's defined as the limit:

$D_{\mathbf{u}}f(x_0, y_0) = \lim_{h \to 0} \frac{f(x_0 + hu_1, y_0 + hu_2) - f(x_0, y_0)}{h}$

This definition is very similar to the definition of a regular derivative. We're moving from $(x_0, y_0)$ a small distance $h$ in the direction of $\mathbf{u}$, and seeing how much $f$ changes per unit distance traveled.

**But how do we calculate this without using the limit definition every time?** That's where the gradient vector comes to the rescue!

### 4. The Geometric Interpretation and Calculation of Directional Derivatives

This is a crucial point, so let's really understand it. The key insight comes from the Chain Rule (which is the theme of our module!).

If we consider a path parameterized by $t$ that starts at $(x_0, y_0)$ and moves in the direction of $\mathbf{u}$, we can write our position as $(x(t), y(t)) = (x_0 + tu_1, y_0 + tu_2)$. Then, $f$ becomes a function of $t$ alone: $g(t) = f(x(t), y(t))$.

The directional derivative is simply the derivative of $g(t)$ with respect to $t$ evaluated at $t=0$: $D_{\mathbf{u}}f(x_0, y_0) = g'(0)$.

By the Chain Rule for functions of two variables:

$g'(t) = \frac{\partial f}{\partial x} \frac{dx}{dt} + \frac{\partial f}{\partial y} \frac{dy}{dt}$

Here, $\frac{dx}{dt} = u_1$ and $\frac{dy}{dt} = u_2$. So,

$g'(t) = \frac{\partial f}{\partial x} u_1 + \frac{\partial f}{\partial y} u_2$

Evaluating this at $t=0$ (which corresponds to the point $(x_0, y_0)$):

$D_{\mathbf{u}}f(x_0, y_0) = \frac{\partial f}{\partial x}(x_0, y_0) u_1 + \frac{\partial f}{\partial y}(x_0, y_0) u_2$

Look at this result! The right-hand side is precisely the **dot product** of the gradient vector $\nabla f(x_0, y_0)$ and the unit direction vector $\mathbf{u}$:

$D_{\mathbf{u}}f(x_0, y_0) = \nabla f(x_0, y_0) \cdot \mathbf{u}$

This is the **fundamental formula for directional derivatives**. It's incredibly powerful because it converts a limit definition into a simple calculation using partial derivatives and a dot product.

*   **Remember this:** The directional derivative of $f$ at a point $(x_0, y_0)$ in the direction of a unit vector $\mathbf{u}$ is given by the dot product of the gradient of $f$ at that point and the unit vector $\mathbf{u}$.

**Connecting to CO3:** This formula directly allows us to *interpret* the directional derivative. It's the projection of the gradient vector onto the direction vector. The magnitude of the directional derivative tells us how fast $f$ changes in direction $\mathbf{u}$, and its sign tells us if it's increasing or decreasing.

**Analogy:** Imagine you're sailing on a lake. The surface of the lake represents your function $f(x, y)$. The gradient vector at your location points in the direction of the steepest upward current. The directional derivative in a particular direction tells you how fast the water level is rising or falling as you row in that specific direction.

**Important Note on Direction Vectors:** The formula $\nabla f \cdot \mathbf{u}$ *requires* $\mathbf{u}$ to be a **unit vector**. If you are given a direction vector $\mathbf{v}$ that is not a unit vector, you must first normalize it: $\mathbf{u} = \frac{\mathbf{v}}{\|\mathbf{v}\|}$.

### 5. Properties and Interpretations of Directional Derivatives

The formula $D_{\mathbf{u}}f = \nabla f \cdot \mathbf{u}$ leads to some very insightful properties:

*   **Maximum Rate of Increase:** The directional derivative is maximized when $\mathbf{u}$ points in the same direction as the gradient vector $\nabla f$. In this case, $\mathbf{u} = \frac{\nabla f}{\|\nabla f\|}$, and the maximum rate of increase is $D_{\mathbf{u}}f = \nabla f \cdot \frac{\nabla f}{\|\nabla f\|} = \frac{\|\nabla f\|^2}{\|\nabla f\|} = \|\nabla f\|$. This confirms that the magnitude of the gradient is indeed the maximum rate of change.
*   **Minimum Rate of Increase (Maximum Rate of Decrease):** The directional derivative is minimized (i.e., the function decreases most rapidly) when $\mathbf{u}$ points in the opposite direction of $\nabla f$. In this case, $\mathbf{u} = -\frac{\nabla f}{\|\nabla f\|}$, and the minimum rate of increase is $D_{\mathbf{u}}f = \nabla f \cdot (-\frac{\nabla f}{\|\nabla f\|}) = -\frac{\|\nabla f\|^2}{\|\nabla f\|} = -\|\nabla f\|$.
*   **Zero Rate of Change:** The directional derivative is zero when $\mathbf{u}$ is orthogonal to $\nabla f$. This means if you move in a direction perpendicular to the gradient, the function's value doesn't change *at that instant*. This is a critical concept when we talk about level curves (or contours).

*   **Level Curves:** For a function $f(x, y)$, a level curve is a curve where $f(x, y) = c$ for some constant $c$. The gradient vector $\nabla f$ at a point $(x_0, y_0)$ is always **orthogonal (perpendicular)** to the level curve of $f$ passing through $(x_0, y_0)$. Why? Because if you move along the level curve, $f$ doesn't change, so the directional derivative along the tangent to the level curve must be zero. Since $D_{\mathbf{u}}f = \nabla f \cdot \mathbf{u}$, and this is zero when $\mathbf{u}$ is tangent to the level curve, $\nabla f$ must be perpendicular to that tangent. This is a beautiful geometric relationship!

**Connecting to CO3:** This directly helps us interpret directional derivatives and is the foundation for solving optimization problems. If we want to find the maximum or minimum of a function, we often look for points where the gradient is zero. If we're on a path where the function value is constant (like a contour line on a map), the gradient is perpendicular to our path.

### 6. Examples

Let's work through some examples to solidify these ideas.

**Example 1: Finding a Directional Derivative**

Suppose $f(x, y) = x^2y + 3xy^3$ at the point $(1, 2)$. Find the directional derivative in the direction of the vector $\mathbf{v} = \langle 3, 4 \rangle$.

**Step 1: Find the partial derivatives.**
$f_x(x, y) = \frac{\partial}{\partial x}(x^2y + 3xy^3) = 2xy + 3y^3$
$f_y(x, y) = \frac{\partial}{\partial y}(x^2y + 3xy^3) = x^2 + 9xy^2$

**Step 2: Evaluate the partial derivatives at the given point (1, 2).**
$f_x(1, 2) = 2(1)(2) + 3(2)^3 = 4 + 3(8) = 4 + 24 = 28$
$f_y(1, 2) = (1)^2 + 9(1)(2)^2 = 1 + 9(4) = 1 + 36 = 37$

**Step 3: Form the gradient vector at (1, 2).**
$\nabla f(1, 2) = \langle f_x(1, 2), f_y(1, 2) \rangle = \langle 28, 37 \rangle$

**Step 4: Find the unit vector in the direction of $\mathbf{v}$.**
First, find the magnitude of $\mathbf{v}$:
$\|\mathbf{v}\| = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5$
The unit vector is $\mathbf{u} = \frac{\mathbf{v}}{\|\mathbf{v}\|} = \frac{1}{5} \langle 3, 4 \rangle = \langle \frac{3}{5}, \frac{4}{5} \rangle$.

**Step 5: Calculate the directional derivative using the dot product.**
$D_{\mathbf{u}}f(1, 2) = \nabla f(1, 2) \cdot \mathbf{u} = \langle 28, 37 \rangle \cdot \langle \frac{3}{5}, \frac{4}{5} \rangle$
$D_{\mathbf{u}}f(1, 2) = (28)\left(\frac{3}{5}\right) + (37)\left(\frac{4}{5}\right)$
$D_{\mathbf{u}}f(1, 2) = \frac{84}{5} + \frac{148}{5} = \frac{232}{5}$

So, at the point (1, 2), the function $f(x, y)$ is increasing at a rate of $\frac{232}{5}$ units per unit distance moved in the direction of $\langle 3, 4 \rangle$.

**Example 2: Direction of Steepest Ascent**

For the same function $f(x, y) = x^2y + 3xy^3$ at $(1, 2)$:

*   **In which direction is the function increasing most rapidly?**
    This is the direction of the gradient vector.
    Direction of steepest ascent = $\nabla f(1, 2) = \langle 28, 37 \rangle$.

*   **What is the maximum rate of increase?**
    This is the magnitude of the gradient vector.
    Maximum rate of increase = $\|\nabla f(1, 2)\| = \sqrt{28^2 + 37^2} = \sqrt{784 + 1369} = \sqrt{2153}$.

*   **In which direction is the function decreasing most rapidly?**
    This is the direction opposite to the gradient vector.
    Direction of steepest descent = $-\nabla f(1, 2) = \langle -28, -37 \rangle$.

*   **What is the maximum rate of decrease?**
    This is the negative of the magnitude of the gradient vector.
    Maximum rate of decrease = $-\|\nabla f(1, 2)\| = -\sqrt{2153}$.

**Example 3: Direction of Zero Change**

At the point $(1, 2)$, find a direction in which the function $f(x, y) = x^2y + 3xy^3$ is neither increasing nor decreasing.

We need a direction vector $\mathbf{u}$ such that $D_{\mathbf{u}}f(1, 2) = \nabla f(1, 2) \cdot \mathbf{u} = 0$. This means $\mathbf{u}$ must be orthogonal to $\nabla f(1, 2) = \langle 28, 37 \rangle$.

A vector orthogonal to $\langle a, b \rangle$ is $\langle -b, a \rangle$ or $\langle b, -a \rangle$.
So, an orthogonal vector is $\langle -37, 28 \rangle$.
To get a unit vector, we normalize it:
$\|\langle -37, 28 \rangle\| = \sqrt{(-37)^2 + 28^2} = \sqrt{1369 + 784} = \sqrt{2153}$.
So, a unit vector in a direction of zero change is $\mathbf{u} = \frac{1}{\sqrt{2153}} \langle -37, 28 \rangle$.

**Relatable Example: Navigating a Mountain Trail**

Imagine you are a hiker on a mountain. The elevation of the mountain is given by a function $f(x, y)$.

*   **Partial Derivatives:** If you walk purely east (along the x-axis), $\frac{\partial f}{\partial x}$ tells you how your elevation changes per step east. If you walk purely north (along the y-axis), $\frac{\partial f}{\partial y}$ tells you how your elevation changes per step north.
*   **Gradient:** At your current location, the gradient vector $\nabla f$ points in the direction that would give you the biggest immediate increase in elevation. The steeper the slope in that direction, the larger the magnitude of the gradient.
*   **Directional Derivative:** If you decide to hike in a specific direction (say, towards a particular viewpoint or along a marked trail), the directional derivative in that direction tells you how quickly your elevation is changing as you follow that specific trail.
*   **Steepest Ascent/Descent:** The gradient vector shows the direction to hike for the most rapid climb. The opposite direction shows the path for the quickest descent.
*   **Level Curves (Contour Lines):** If you walk along a contour line on your map, your elevation doesn't change. The gradient vector at any point on a contour line is perpendicular to that contour line, pointing "uphill" relative to that path.

### 7. Connection to Information Science

While these notes are focused on the mathematical concepts, it's useful to briefly consider how this relates to Information Science.

*   **Optimization:** Many problems in information science, such as finding optimal parameters in machine learning models (e.g., neural networks), minimizing errors, or maximizing performance, are optimization problems. Directional derivatives and the gradient are the fundamental tools for iterative optimization algorithms like Gradient Descent. Understanding these concepts is key to grasping how these algorithms work and why they converge.
*   **Data Analysis:** When analyzing multidimensional data, we might want to understand how certain properties (represented by a function) change as we move through the data space in specific directions. For instance, analyzing the sensitivity of a model's output to changes in input features.
*   **Image Processing:** In image processing, functions can represent pixel intensities or other image properties. Understanding how these properties change in different directions can be useful for edge detection or feature extraction.

This topic directly supports **CO3** by providing the tools to interpret how a function behaves in any direction, which is essential for understanding optimization and for solving problems involving maxima and minima.

### Sample Questions and Answers

Here are some questions to test your understanding.

**Question 1 (Conceptual):**
What does the gradient vector $\nabla f(x_0, y_0)$ represent for a function $f(x, y)$?
**(a)** The direction of the steepest *decrease* of $f$.
**(b)** The rate of change of $f$ along the x-axis.
**(c)** The direction of the steepest *increase* of $f$, and its magnitude is the maximum rate of increase.
**(d)** The rate of change of $f$ along the y-axis.

**Answer:** (c)
**Reasoning:** The gradient vector $\nabla f = \langle f_x, f_y \rangle$ points in the direction of the greatest rate of increase of $f$ at a point, and its magnitude $\|\nabla f\|$ is equal to this maximum rate of increase. Options (b) and (d) describe partial derivatives, and (a) describes the negative gradient.

**Question 2 (Calculation-Oriented):**
Let $f(x, y) = e^{xy} + y^2$. Find the directional derivative of $f$ at $(1, 1)$ in the direction of the vector $\mathbf{v} = \langle -1, 2 \rangle$.

**Answer:**
**Step 1: Find partial derivatives.**
$f_x(x, y) = y e^{xy}$
$f_y(x, y) = x e^{xy} + 2y$

**Step 2: Evaluate partial derivatives at (1, 1).**
$f_x(1, 1) = 1 \cdot e^{1 \cdot 1} = e$
$f_y(1, 1) = 1 \cdot e^{1 \cdot 1} + 2(1) = e + 2$

**Step 3: Form the gradient vector at (1, 1).**
$\nabla f(1, 1) = \langle e, e+2 \rangle$

**Step 4: Normalize the direction vector $\mathbf{v}$.**
$\|\mathbf{v}\| = \sqrt{(-1)^2 + 2^2} = \sqrt{1 + 4} = \sqrt{5}$
$\mathbf{u} = \frac{\mathbf{v}}{\|\mathbf{v}\|} = \frac{1}{\sqrt{5}} \langle -1, 2 \rangle = \langle -\frac{1}{\sqrt{5}}, \frac{2}{\sqrt{5}} \rangle$

**Step 5: Compute the directional derivative.**
$D_{\mathbf{u}}f(1, 1) = \nabla f(1, 1) \cdot \mathbf{u} = \langle e, e+2 \rangle \cdot \langle -\frac{1}{\sqrt{5}}, \frac{2}{\sqrt{5}} \rangle$
$D_{\mathbf{u}}f(1, 1) = e(-\frac{1}{\sqrt{5}}) + (e+2)(\frac{2}{\sqrt{5}})$
$D_{\mathbf{u}}f(1, 1) = \frac{-e + 2e + 4}{\sqrt{5}} = \frac{e+4}{\sqrt{5}}$

The directional derivative is $\frac{e+4}{\sqrt{5}}$.

**Question 3 (Interpretation/Application):**
A farmer is standing on a hillside represented by the function $h(x, y) = 1000 - 0.1x^2 - 0.2y^2$, where $x$ is the distance east and $y$ is the distance north. The farmer is currently at the point $(10, 20)$.
(a) In which direction is the farmer climbing most steeply?
(b) What is the rate of climb in that direction?
(c) If the farmer walks directly north, what is the rate of change of their elevation?

**Answer:**
**Step 1: Find partial derivatives.**
$h_x(x, y) = -0.2x$
$h_y(x, y) = -0.4y$

**Step 2: Evaluate partial derivatives at (10, 20).**
$h_x(10, 20) = -0.2(10) = -2$
$h_y(10, 20) = -0.4(20) = -8$

**Step 3: Form the gradient vector at (10, 20).**
$\nabla h(10, 20) = \langle -2, -8 \rangle$

**(a) Direction of steepest climb:**
The direction of steepest climb is the direction of the gradient vector. So, the direction is $\langle -2, -8 \rangle$.
To express this as a unit vector: $\|\nabla h(10, 20)\| = \sqrt{(-2)^2 + (-8)^2} = \sqrt{4 + 64} = \sqrt{68} = 2\sqrt{17}$.
Unit direction vector: $\mathbf{u} = \frac{1}{2\sqrt{17}} \langle -2, -8 \rangle = \langle -\frac{1}{\sqrt{17}}, -\frac{4}{\sqrt{17}} \rangle$.
So, the farmer is climbing most steeply in the direction west-southwest.

**(b) Rate of climb in that direction:**
This is the magnitude of the gradient vector.
Rate of climb = $\|\nabla h(10, 20)\| = 2\sqrt{17}$.

**(c) Rate of change of elevation walking directly north:**
Walking directly north means moving along the y-axis, so the direction vector is $\mathbf{u} = \langle 0, 1 \rangle$. This is equivalent to finding the partial derivative with respect to $y$ at $(10, 20)$.
$D_{\mathbf{u}}h(10, 20) = \nabla h(10, 20) \cdot \mathbf{u} = \langle -2, -8 \rangle \cdot \langle 0, 1 \rangle = (-2)(0) + (-8)(1) = -8$.
Alternatively, $h_y(10, 20) = -8$.
So, when walking directly north, the farmer's elevation is *decreasing* at a rate of 8 units per unit distance.

This concludes our exploration of directional derivatives in the plane. Remember the power of the gradient and its dot product with a unit direction vector – it’s your key to unlocking how functions change in any direction!
