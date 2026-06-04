---
title: "Partial derivatives of functions with two variables"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 2"
module: "Module 1: Limits and continuity"
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da1c4"
status: "completed"
scrapedAt: "2026-05-23T17:40:31.214Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 2

## Module 1: Limits and Continuity

### Topic: Partial Derivatives of Functions with Two Variables

Welcome, everyone! Today, we're diving into a really fundamental concept in multivariable calculus: **partial derivatives**. If you've mastered single-variable calculus, you know how derivatives tell us about the rate of change of a function. Well, when we have functions that depend on *more than one* variable, like the temperature on a metal plate that can change with position (x, y) or the voltage in a circuit that might depend on time (t) and position (x), we need a way to understand how the function changes with respect to *each individual variable* while holding the others constant. That's precisely what partial derivatives are all about.

This topic is a direct gateway to **Course Outcome 1 (CO1)**: "Compute the partial and total derivatives and maxima and minima of multivariable functions and to apply in engineering problems." Understanding partial derivatives is the bedrock upon which we build concepts like directional derivatives, gradients, and ultimately, finding maximum and minimum values of functions in multiple dimensions. These are crucial for optimizing designs, analyzing system behavior, and understanding physical phenomena in electrical and physical sciences. Think about tuning a radio – you're adjusting two knobs (variables) to find the strongest signal (maximum output). Partial derivatives help us understand how sensitive that signal is to changes in each knob individually.

### The Intuitive Idea: Isolating Change

Imagine you're standing on a hill. Your altitude (let's call it $z$) depends on your east-west position ($x$) and your north-south position ($y$). So, we can represent your altitude as a function $z = f(x, y)$.

Now, if you want to know how your altitude changes as you take a step directly east, you're only changing your $x$-coordinate, and your $y$-coordinate is staying fixed. This rate of change, with respect to $x$ only, is the **partial derivative of $f$ with respect to $x$**.

Similarly, if you were to take a step directly north, only changing your $y$-coordinate while keeping $x$ constant, you'd be looking at the **partial derivative of $f$ with respect to $y$**.

So, the core idea is: **When we calculate a partial derivative, we treat all variables except the one we're differentiating with respect to as constants.** This is a key takeaway, so remember this!

### Formalizing the Concept: Definitions

Let's put this into more formal mathematical language, drawing from the foundational definitions found in texts like Anton, Biven, and Davis's *Calculus*.

Consider a function $f(x, y)$.

#### Partial Derivative with Respect to $x$

The partial derivative of $f$ with respect to $x$, denoted by $\frac{\partial f}{\partial x}$ or $f_x(x, y)$, is defined as the limit:

$$ \frac{\partial f}{\partial x} = \lim_{h \to 0} \frac{f(x+h, y) - f(x, y)}{h} $$

What does this mean? We're looking at the change in $f$ as $x$ changes by a small amount $h$, while $y$ remains fixed. It's essentially the slope of the tangent line to the curve formed by intersecting the surface $z = f(x, y)$ with the plane $y = c$ (where $c$ is some constant $y$-value).

#### Partial Derivative with Respect to $y$

Similarly, the partial derivative of $f$ with respect to $y$, denoted by $\frac{\partial f}{\partial y}$ or $f_y(x, y)$, is defined as the limit:

$$ \frac{\partial f}{\partial y} = \lim_{k \to 0} \frac{f(x, y+k) - f(x, y)}{k} $$

Here, we're looking at the change in $f$ as $y$ changes by a small amount $k$, while $x$ remains fixed. This represents the slope of the tangent line to the curve formed by intersecting the surface $z = f(x, y)$ with the plane $x = c$ (where $c$ is some constant $x$-value).

### How to Calculate Partial Derivatives: The Practical Approach

While the limit definitions are crucial for understanding the foundation, in practice, we use a much simpler method. We can differentiate with respect to one variable while treating all other variables as constants, just like we'd treat any numerical constant in single-variable calculus.

Let's look at some examples. These examples will help us connect to **CO1** by showing how we compute derivatives, which is the first step in applying them to engineering problems.

**Example 1: A Simple Polynomial**

Let $f(x, y) = x^3 + 2x^2y + 5y^4$.

To find $\frac{\partial f}{\partial x}$:
We treat $y$ as a constant.
* The derivative of $x^3$ with respect to $x$ is $3x^2$.
* The derivative of $2x^2y$ with respect to $x$ is $2y \cdot (2x) = 4xy$ (since $2y$ is treated as a constant multiplier).
* The derivative of $5y^4$ with respect to $x$ is $0$ (since $5y^4$ is treated as a constant).

So, $\frac{\partial f}{\partial x} = 3x^2 + 4xy$.

To find $\frac{\partial f}{\partial y}$:
We treat $x$ as a constant.
* The derivative of $x^3$ with respect to $y$ is $0$ (since $x^3$ is treated as a constant).
* The derivative of $2x^2y$ with respect to $y$ is $2x^2 \cdot (1) = 2x^2$ (since $2x^2$ is treated as a constant multiplier).
* The derivative of $5y^4$ with respect to $y$ is $5 \cdot (4y^3) = 20y^3$.

So, $\frac{\partial f}{\partial y} = 2x^2 + 20y^3$.

See how straightforward it becomes when we adopt the "treat others as constants" rule? This is a fundamental technique you'll use constantly.

**Example 2: Functions Involving Trigonometric or Exponential Terms**

Let $g(x, y) = e^{xy} \sin(x)$.

To find $\frac{\partial g}{\partial x}$:
Here, we have a product of two functions involving $x$. We'll need the product rule. Treat $y$ as a constant.
* Derivative of $e^{xy}$ with respect to $x$: Using the chain rule, the derivative of $e^u$ is $e^u \frac{du}{dx}$. Here $u = xy$. So, $\frac{du}{dx} = y$. Thus, the derivative is $e^{xy} \cdot y$.
* Derivative of $\sin(x)$ with respect to $x$ is $\cos(x)$.

Applying the product rule (derivative of first times second plus first times derivative of second):
$\frac{\partial g}{\partial x} = (y e^{xy}) \sin(x) + e^{xy} (\cos(x))$
$\frac{\partial g}{\partial x} = y e^{xy} \sin(x) + e^{xy} \cos(x)$

To find $\frac{\partial g}{\partial y}$:
Treat $x$ as a constant.
* The term $e^{xy}$ needs differentiation with respect to $y$. Using the chain rule again, with $u=xy$, $\frac{du}{dy} = x$. So, the derivative is $e^{xy} \cdot x$.
* The term $\sin(x)$ is treated as a constant because it does not depend on $y$.

So, $\frac{\partial g}{\partial y} = (x e^{xy}) \sin(x)$.

These examples illustrate the mechanical process, which is essential for **CO1**. You'll encounter similar problems in your coursework and exams.

### Geometric Interpretation: Tangent Planes

Remember how in single-variable calculus, the derivative gives the slope of the tangent line? For a function of two variables, $z = f(x, y)$, the "tangent" is actually a **tangent plane**.

When we calculate $\frac{\partial f}{\partial x}$ at a point $(x_0, y_0)$, the value represents the slope of the tangent line to the curve formed by slicing the surface $z = f(x, y)$ with the plane $y = y_0$. This tangent line lies within the tangent plane at $(x_0, y_0, f(x_0, y_0))$.

Similarly, $\frac{\partial f}{\partial y}$ at $(x_0, y_0)$ represents the slope of the tangent line to the curve formed by slicing the surface with the plane $x = x_0$. This line also lies in the tangent plane.

Think of it like this: The tangent plane at a point on your hilly surface approximates the surface very closely near that point. The partial derivatives tell you the "steepness" of this plane in the east-west direction and the north-south direction, respectively. This geometric understanding is vital for visualizing the behavior of multivariable functions and is a stepping stone to understanding **CO1** more deeply.

### Second-Order Partial Derivatives

Just as we could take second derivatives in single-variable calculus (e.g., $f''(x)$), we can also take second-order partial derivatives for functions of two variables. This involves differentiating a partial derivative again.

If $f(x, y)$ is our function, we can compute:

*   $\frac{\partial^2 f}{\partial x^2} = \frac{\partial}{\partial x} \left(\frac{\partial f}{\partial x}\right) = f_{xx}(x, y)$
*   $\frac{\partial^2 f}{\partial y^2} = \frac{\partial}{\partial y} \left(\frac{\partial f}{\partial y}\right) = f_{yy}(x, y)$
*   $\frac{\partial^2 f}{\partial y \partial x} = \frac{\partial}{\partial y} \left(\frac{\partial f}{\partial x}\right) = f_{xy}(x, y)$
*   $\frac{\partial^2 f}{\partial x \partial y} = \frac{\partial}{\partial x} \left(\frac{\partial f}{\partial y}\right) = f_{yx}(x, y)$

The last two are called **mixed partial derivatives**. A very important result, often stated in textbooks like Thomas' Calculus or Kreyszig's Advanced Engineering Mathematics, is **Clairaut's Theorem** (or the Schwarz's Theorem):

**Clairaut's Theorem:** If the mixed partial derivatives $f_{xy}$ and $f_{yx}$ are continuous in an open disk containing $(a, b)$, then
$$ f_{xy}(a, b) = f_{yx}(a, b) $$

This means that if the "smoother" conditions are met (which they often are in practical engineering problems), the order in which you take the mixed partial derivatives doesn't matter! This is a huge convenience.

**Example 3: Computing Second-Order Partial Derivatives**

Let's go back to $f(x, y) = x^3 + 2x^2y + 5y^4$.
We found:
$\frac{\partial f}{\partial x} = 3x^2 + 4xy$
$\frac{\partial f}{\partial y} = 2x^2 + 20y^3$

Now, let's compute the second derivatives:

*   $\frac{\partial^2 f}{\partial x^2} = \frac{\partial}{\partial x}(3x^2 + 4xy) = 6x + 4y$
*   $\frac{\partial^2 f}{\partial y^2} = \frac{\partial}{\partial y}(2x^2 + 20y^3) = 60y^2$
*   $\frac{\partial^2 f}{\partial y \partial x} = \frac{\partial}{\partial y}(3x^2 + 4xy) = 4x$
*   $\frac{\partial^2 f}{\partial x \partial y} = \frac{\partial}{\partial x}(2x^2 + 20y^3) = 4x$

Notice that $\frac{\partial^2 f}{\partial y \partial x} = \frac{\partial^2 f}{\partial x \partial y} = 4x$. This is consistent with Clairaut's Theorem because these mixed partial derivatives are continuous everywhere.

Second-order partial derivatives are crucial for many applications, including identifying local maxima and minima (using the second derivative test, which we'll likely cover in subsequent modules) and in solving partial differential equations (PDEs) that are ubiquitous in physics and engineering, relating to wave propagation, heat transfer, and electromagnetism. This directly ties into **CO1**.

### Connection to Course Outcomes and Applications

Let's explicitly link what we've learned to the course objectives:

*   **CO1: Compute the partial and total derivatives and maxima and minima of multivariable functions and to apply in engineering problems.**
    *   We've learned to *compute* partial derivatives. This is the foundation.
    *   The concept of partial derivatives allows us to understand how a function changes along specific directions. For example, if $f(x, y)$ represents the temperature distribution on a surface, $\frac{\partial f}{\partial x}$ tells us how fast the temperature is changing as we move purely in the $x$-direction at a given point. This is essential for understanding heat flow.
    *   In electrical engineering, if $V(x, y, z)$ represents the electric potential, then $-\frac{\partial V}{\partial x}$ gives the $x$-component of the electric field, and similarly for $y$ and $z$. The gradient, which is formed using partial derivatives ($\nabla V = \frac{\partial V}{\partial x}\hat{i} + \frac{\partial V}{\partial y}\hat{j} + \frac{\partial V}{\partial z}\hat{k}$), points in the direction of the steepest increase in potential and its magnitude is the rate of that increase. This is fundamental to understanding electric fields and forces.
    *   For finding maxima and minima, we'll later set these partial derivatives to zero. This is a core technique in optimization problems, like finding the most efficient operating point for a device or the minimum stress in a structural component.

*   **CO2: Understand theoretical idea of multiple integrals and to apply them to find areas and volumes of geometrical shapes.**
    *   While this module focuses on derivatives, understanding the behavior of functions through their derivatives is often a prerequisite for setting up and evaluating integrals. For instance, understanding the shape of a surface (using derivatives to find slopes and curvatures) helps in visualizing the region of integration for volumes.

*   **CO3: Compute the derivatives and line integrals of vector functions and to learn their applications.**
    *   Partial derivatives are building blocks for vector calculus. The gradient, divergence, and curl, which are operations on vector fields, are all defined using partial derivatives. For example, the divergence of a vector field $\mathbf{F} = P(x,y,z)\mathbf{i} + Q(x,y,z)\mathbf{j} + R(x,y,z)\mathbf{k}$ is $\nabla \cdot \mathbf{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}$. Line integrals themselves are computed by parameterizing a curve and then integrating a scalar function or a dot product of a vector field with the differential displacement along that curve, which often involves functions whose derivatives we've learned to compute.

*   **CO4: Apply the concepts of surface and volume integrals and to learn their inter-relations and applications.**
    *   Similar to CO2, the understanding of how functions change (via partial derivatives) is crucial for setting up integrals over surfaces and volumes. For example, when calculating the flux of a vector field through a surface (a surface integral), we often need the normal vector to the surface, which can be derived from functions whose partial derivatives we can compute.

### Common Pitfalls and Exam Tips

*   **Confusing variables:** The most common mistake is accidentally differentiating with respect to a variable that should be held constant. Always double-check which variable you're working with and which ones you're treating as constants.
*   **Chain rule errors:** Especially with composite functions (like $e^{xy}$ or $\sin(x^2+y^2)$), ensure you apply the chain rule correctly for *each* variable.
*   **Forgetting the constant of integration:** This isn't directly applicable here as we're not performing indefinite integration. However, be mindful that when you treat a variable as constant, you treat terms solely dependent on that variable as constants.
*   **Second derivative notation:** Make sure you understand the different notations ($\frac{\partial^2 f}{\partial x \partial y}$ vs. $\frac{\partial^2 f}{\partial y \partial x}$) and what they mean.

**Exam Tip:** Many exam questions will directly ask you to compute the first and second-order partial derivatives of given functions. Practice with a variety of function types (polynomials, exponentials, logarithms, trigonometric functions, and combinations thereof). Also, be prepared for questions that test your understanding of the geometric interpretation or the application of partial derivatives in simple physical scenarios (e.g., rate of change of temperature or pressure).

### Example of a Real-World Application Scenario

Let's consider the efficiency of a solar panel. The power output ($P$) might depend on the angle of incidence of sunlight ($\theta$) and the temperature of the panel ($T$). So, $P(\theta, T)$.

*   $\frac{\partial P}{\partial \theta}$: This tells us how much the power output changes for a small change in the angle of the panel, assuming the temperature stays the same. If this value is positive, tilting the panel slightly towards the sun increases power.
*   $\frac{\partial P}{\partial T}$: This tells us how much the power output changes for a small change in temperature, assuming the angle remains fixed. Typically, this value would be negative, as higher temperatures can decrease solar panel efficiency.

Understanding these rates of change is crucial for designing solar tracking systems (to maximize $\frac{\partial P}{\partial \theta}$'s effect) and for understanding how environmental factors like heat affect performance. This is a direct application related to **CO1**.

### Summary and Takeaway

Partial derivatives extend the concept of instantaneous rate of change to functions of multiple variables. By holding all but one variable constant, we can isolate and measure the rate of change with respect to each independent variable. This technique is fundamental to understanding how complex systems behave and is the first step in many advanced mathematical and scientific analyses, directly supporting **CO1** and laying groundwork for other course outcomes. Remember the core rule: **treat other variables as constants when differentiating with respect to one variable.** And don't forget the power of Clairaut's Theorem for mixed partials!

***

## Sample Questions with Answers

Here are a few questions to test your understanding:

**Question 1 (Conceptual):**
What is the fundamental difference in the process of finding $\frac{\partial f}{\partial x}$ compared to finding $\frac{d f}{d x}$ for a function $f(x)$?

**Answer:**
The fundamental difference lies in how other variables are treated. For $f(x)$, there are no other variables. For $\frac{\partial f}{\partial x}$ of a function $f(x, y)$, we treat the variable $y$ as if it were a constant number throughout the differentiation process. This isolation of change with respect to one variable at a time is the essence of partial differentiation.

**Question 2 (Calculation - First Order):**
Find the first partial derivatives $\frac{\partial z}{\partial x}$ and $\frac{\partial z}{\partial y}$ for the function $z = x^2 e^{-y} + y \ln(x)$.

**Answer:**
To find $\frac{\partial z}{\partial x}$, treat $y$ as a constant:
* $\frac{\partial}{\partial x}(x^2 e^{-y}) = 2x e^{-y}$ (since $e^{-y}$ is treated as a constant factor)
* $\frac{\partial}{\partial x}(y \ln(x)) = y \cdot \frac{1}{x} = \frac{y}{x}$ (since $y$ is treated as a constant factor)
So, $\frac{\partial z}{\partial x} = 2x e^{-y} + \frac{y}{x}$.

To find $\frac{\partial z}{\partial y}$, treat $x$ as a constant:
* $\frac{\partial}{\partial y}(x^2 e^{-y}) = x^2 \cdot (-e^{-y}) = -x^2 e^{-y}$ (using chain rule, derivative of $e^{-y}$ is $-e^{-y}$)
* $\frac{\partial}{\partial y}(y \ln(x)) = \ln(x) \cdot 1 = \ln(x)$ (since $\ln(x)$ is treated as a constant factor)
So, $\frac{\partial z}{\partial y} = -x^2 e^{-y} + \ln(x)$.

**Question 3 (Calculation - Second Order & Clairaut's Theorem):**
Let $f(x, y) = \cos(x^2y)$. Calculate $f_{xy}(x, y)$ and $f_{yx}(x, y)$. Do they agree?

**Answer:**
First, let's find $f_x(x, y)$:
$f_x(x, y) = \frac{\partial}{\partial x}(\cos(x^2y))$
Using the chain rule: derivative of $\cos(u)$ is $-\sin(u) \frac{du}{dx}$, where $u = x^2y$.
$\frac{du}{dx} = 2xy$.
So, $f_x(x, y) = -\sin(x^2y) \cdot (2xy) = -2xy \sin(x^2y)$.

Now, let's find $f_{xy}(x, y) = \frac{\partial}{\partial y}(f_x(x, y))$:
$f_{xy}(x, y) = \frac{\partial}{\partial y}(-2xy \sin(x^2y))$
We need the product rule here, treating $x$ as a constant.
* Derivative of $(-2xy)$ with respect to $y$ is $-2x$.
* Derivative of $\sin(x^2y)$ with respect to $y$ is $\cos(x^2y) \cdot (2xy)$ (chain rule).

Using product rule: $(-2x) \sin(x^2y) + (-2xy) [\cos(x^2y) \cdot (2xy)]$
$f_{xy}(x, y) = -2x \sin(x^2y) - 4x^2y^2 \cos(x^2y)$.

Next, let's find $f_y(x, y)$:
$f_y(x, y) = \frac{\partial}{\partial y}(\cos(x^2y))$
Using the chain rule: derivative of $\cos(u)$ is $-\sin(u) \frac{du}{dy}$, where $u = x^2y$.
$\frac{du}{dy} = x^2$.
So, $f_y(x, y) = -\sin(x^2y) \cdot (x^2) = -x^2 \sin(x^2y)$.

Now, let's find $f_{yx}(x, y) = \frac{\partial}{\partial x}(f_y(x, y))$:
$f_{yx}(x, y) = \frac{\partial}{\partial x}(-x^2 \sin(x^2y))$
We need the product rule here, treating $y$ as a constant.
* Derivative of $(-x^2)$ with respect to $x$ is $-2x$.
* Derivative of $\sin(x^2y)$ with respect to $x$ is $\cos(x^2y) \cdot (2xy)$ (chain rule).

Using product rule: $(-2x) \sin(x^2y) + (-x^2) [\cos(x^2y) \cdot (2xy)]$
$f_{yx}(x, y) = -2x \sin(x^2y) - 2x^3y \cos(x^2y)$.

**Conclusion:** The mixed partial derivatives $f_{xy}(x, y) = -2x \sin(x^2y) - 4x^2y^2 \cos(x^2y)$ and $f_{yx}(x, y) = -2x \sin(x^2y) - 2x^3y \cos(x^2y)$ do **not** agree in this case. This demonstrates that Clairaut's Theorem requires the mixed partial derivatives to be continuous. In this specific function, the mixed partials are not continuous everywhere, hence the discrepancy. It's a good illustration of the conditions for Clairaut's Theorem. (Self-correction: Upon re-evaluation, the calculation for $f_{yx}$ had an error. Let's correct that.)

**Corrected Answer for Question 3:**

Let $f(x, y) = \cos(x^2y)$.

$f_x(x, y) = \frac{\partial}{\partial x}(\cos(x^2y)) = -\sin(x^2y) \cdot (2xy) = -2xy \sin(x^2y)$.

$f_{xy}(x, y) = \frac{\partial}{\partial y}(f_x(x, y)) = \frac{\partial}{\partial y}(-2xy \sin(x^2y))$
Using product rule (treating $x$ as constant):
$\frac{\partial}{\partial y}(-2xy) = -2x$.
$\frac{\partial}{\partial y}(\sin(x^2y)) = \cos(x^2y) \cdot x^2$.
$f_{xy}(x, y) = (-2x)\sin(x^2y) + (-2xy)(x^2 \cos(x^2y)) = -2x\sin(x^2y) - 2x^3y\cos(x^2y)$.

$f_y(x, y) = \frac{\partial}{\partial y}(\cos(x^2y)) = -\sin(x^2y) \cdot x^2 = -x^2 \sin(x^2y)$.

$f_{yx}(x, y) = \frac{\partial}{\partial x}(f_y(x, y)) = \frac{\partial}{\partial x}(-x^2 \sin(x^2y))$
Using product rule (treating $y$ as constant):
$\frac{\partial}{\partial x}(-x^2) = -2x$.
$\frac{\partial}{\partial x}(\sin(x^2y)) = \cos(x^2y) \cdot (2xy)$.
$f_{yx}(x, y) = (-2x)\sin(x^2y) + (-x^2)(2xy \cos(x^2y)) = -2x\sin(x^2y) - 2x^3y\cos(x^2y)$.

**Conclusion (Corrected):**
Yes, $f_{xy}(x, y) = -2x\sin(x^2y) - 2x^3y\cos(x^2y)$ and $f_{yx}(x, y) = -2x\sin(x^2y) - 2x^3y\cos(x^2y)$ **do agree**. This is because the first partial derivatives $f_x$ and $f_y$ are differentiable, and their mixed partials are continuous everywhere. This example aligns with Clairaut's Theorem.

**Question 4 (Application - Simple):**
The temperature $T$ in degrees Celsius on a metal plate is given by $T(x, y) = 100 - x^2 - 2y^2$, where $x$ and $y$ are distances in meters from a central point.
(a) Calculate the rate of change of temperature with respect to $x$ at the point (1, 2).
(b) Calculate the rate of change of temperature with respect to $y$ at the point (1, 2).
(c) Interpret these results physically.

**Answer:**
(a) We need $\frac{\partial T}{\partial x}$.
$\frac{\partial T}{\partial x} = \frac{\partial}{\partial x}(100 - x^2 - 2y^2) = 0 - 2x - 0 = -2x$.
At the point (1, 2), $\frac{\partial T}{\partial x} = -2(1) = -2$.
The rate of change of temperature with respect to $x$ at (1, 2) is -2 °C/m.

(b) We need $\frac{\partial T}{\partial y}$.
$\frac{\partial T}{\partial y} = \frac{\partial}{\partial y}(100 - x^2 - 2y^2) = 0 - 0 - 4y = -4y$.
At the point (1, 2), $\frac{\partial T}{\partial y} = -4(2) = -8$.
The rate of change of temperature with respect to $y$ at (1, 2) is -8 °C/m.

(c) Physical Interpretation:
*   $\frac{\partial T}{\partial x} = -2$ °C/m means that at the point (1, 2), if you move 1 meter purely in the positive x-direction (east, for example), the temperature will decrease by approximately 2 degrees Celsius, assuming you don't change your y-position.
*   $\frac{\partial T}{\partial y} = -8$ °C/m means that at the point (1, 2), if you move 1 meter purely in the positive y-direction (north, for example), the temperature will decrease by approximately 8 degrees Celsius, assuming you don't change your x-position.
These values tell us about the local temperature gradient in specific directions, indicating that the metal plate is hottest at the origin (0,0) and cools down as you move away from it, with cooling being more rapid in the y-direction at the point (1,2). This is directly related to **CO1**.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
