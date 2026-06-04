---
title: "Partial derivatives"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 2"
module: "Module 1: Limits and continuity"
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f9825"
status: "completed"
scrapedAt: "2026-05-23T16:07:58.539Z"
---
# Mathematics for Electrical Science and Physical Science - 2

## Module 1: Limits and Continuity

### Topic: Partial Derivatives

Welcome, everyone! Today, we're diving into a crucial concept in multivariable calculus: **partial derivatives**. You've all become quite comfortable with derivatives of single-variable functions, right? We learned how they tell us about the rate of change, the slope of a tangent line, and how functions behave locally. Well, in electrical science and physical science, we often deal with situations where a quantity depends not just on one variable, but on *several* variables simultaneously. Think about the temperature of a metal plate – it depends on its position (x and y coordinates) and perhaps even time. Or the voltage in a circuit – it might depend on the position along a wire and the current flowing. That's where partial derivatives come to the rescue!

This topic directly supports **Course Outcome 1 (CO1)**: "Compute the partial and total derivatives and maxima and minima of multivariable functions and to apply in engineering problems." Understanding partial derivatives is the bedrock for calculating total derivatives and then, crucially, for optimization problems like finding maximum or minimum values of these multivariable functions, which are abundant in engineering design and analysis.

### What are Partial Derivatives, Really?

Imagine you're standing on a mountain. Your altitude (let's call it $z$) depends on your position, which you can describe by your east-west position ($x$) and your north-south position ($y$). So, your altitude is a function of two variables: $z = f(x, y)$.

Now, if you want to know how steep the mountain is *right now*, you need to consider which direction you're facing.
*   If you only move **east** (keeping your north-south position $y$ constant), how does your altitude change with respect to your east-west position $x$? This is what a partial derivative with respect to $x$ tells us.
*   If you only move **north** (keeping your east-west position $x$ constant), how does your altitude change with respect to your north-south position $y$? This is the partial derivative with respect to $y$.

So, a partial derivative is essentially the rate of change of a multivariable function with respect to *one* of its variables, while treating all other variables as **constants**. It’s like taking a slice through our mountain and looking at the slope of that slice.

Let's make this more formal. If we have a function $z = f(x, y)$, the **partial derivative of $f$ with respect to $x$** is denoted by:

$\frac{\partial z}{\partial x}$ or $f_x(x, y)$

To calculate this, we treat $y$ as a constant and differentiate $f(x, y)$ with respect to $x$.

Similarly, the **partial derivative of $f$ with respect to $y$** is denoted by:

$\frac{\partial z}{\partial y}$ or $f_y(x, y)$

To calculate this, we treat $x$ as a constant and differentiate $f(x, y)$ with respect to $y$.

**Key Idea to Remember:** When finding a partial derivative with respect to one variable, **pretend the other variables are just numbers**.

### Calculating Partial Derivatives: Let's Work Through Some Examples

Let's take a look at some functions. These examples will help solidify the concept, drawing from the principles discussed in texts like Anton, Biven, and Davis's "Calculus" (12th ed.).

**Example 1: A Simple Polynomial**

Suppose we have the function $f(x, y) = x^2y + 3xy^2$.

*   **To find $\frac{\partial f}{\partial x}$:**
    We treat $y$ as a constant.
    $\frac{\partial}{\partial x} (x^2y + 3xy^2) = \frac{\partial}{\partial x} (x^2y) + \frac{\partial}{\partial x} (3xy^2)$
    Remember the power rule for differentiation: $\frac{d}{dx}(x^n) = nx^{n-1}$.
    Here, $y$ is like a coefficient. So, $\frac{\partial}{\partial x}(x^2y) = y \cdot \frac{\partial}{\partial x}(x^2) = y \cdot (2x) = 2xy$.
    For the second term, $3y^2$ is our constant coefficient. So, $\frac{\partial}{\partial x}(3xy^2) = 3y^2 \cdot \frac{\partial}{\partial x}(x) = 3y^2 \cdot 1 = 3y^2$.
    Therefore, $\frac{\partial f}{\partial x} = 2xy + 3y^2$.

*   **To find $\frac{\partial f}{\partial y}$:**
    Now, we treat $x$ as a constant.
    $\frac{\partial}{\partial y} (x^2y + 3xy^2) = \frac{\partial}{\partial y} (x^2y) + \frac{\partial}{\partial y} (3xy^2)$
    Here, $x^2$ is our constant coefficient. So, $\frac{\partial}{\partial y}(x^2y) = x^2 \cdot \frac{\partial}{\partial y}(y) = x^2 \cdot 1 = x^2$.
    For the second term, $3x$ is our constant coefficient. So, $\frac{\partial}{\partial y}(3xy^2) = 3x \cdot \frac{\partial}{\partial y}(y^2) = 3x \cdot (2y) = 6xy$.
    Therefore, $\frac{\partial f}{\partial y} = x^2 + 6xy$.

See how straightforward it is once you adopt the mindset of treating other variables as constants? This is a foundational skill for **CO1**.

**Example 2: A Function with Exponentials and Trigonometry**

Let's consider $g(x, y) = e^{xy} \sin(x)$.

*   **To find $\frac{\partial g}{\partial x}$:**
    Here, we treat $y$ as a constant. This means $xy$ is still a function of $x$ that depends on $y$. We'll need the product rule and the chain rule.
    Let $u = e^{xy}$ and $v = \sin(x)$.
    $\frac{\partial u}{\partial x} = \frac{\partial}{\partial x}(e^{xy})$. Using the chain rule, this is $e^{xy} \cdot \frac{\partial}{\partial x}(xy)$. Since $y$ is constant, $\frac{\partial}{\partial x}(xy) = y$. So, $\frac{\partial u}{\partial x} = y e^{xy}$.
    $\frac{\partial v}{\partial x} = \frac{\partial}{\partial x}(\sin(x)) = \cos(x)$.
    Now, applying the product rule $(uv)' = u'v + uv'$:
    $\frac{\partial g}{\partial x} = (y e^{xy}) \sin(x) + e^{xy} (\cos(x)) = y e^{xy} \sin(x) + e^{xy} \cos(x)$.
    We can factor out $e^{xy}$: $\frac{\partial g}{\partial x} = e^{xy} (y \sin(x) + \cos(x))$.

*   **To find $\frac{\partial g}{\partial y}$:**
    Now, we treat $x$ as a constant. This means $e^{xy}$ is still a function of $y$ that depends on $x$. However, $\sin(x)$ is treated purely as a constant factor!
    $\frac{\partial}{\partial y} (e^{xy} \sin(x)) = \sin(x) \cdot \frac{\partial}{\partial y}(e^{xy})$.
    Using the chain rule again: $\frac{\partial}{\partial y}(e^{xy}) = e^{xy} \cdot \frac{\partial}{\partial y}(xy)$. Since $x$ is constant, $\frac{\partial}{\partial y}(xy) = x$. So, $\frac{\partial}{\partial y}(e^{xy}) = x e^{xy}$.
    Therefore, $\frac{\partial g}{\partial y} = \sin(x) \cdot (x e^{xy}) = x e^{xy} \sin(x)$.

**A Quick Note on Notation:** Sometimes, you might see expressions like $\frac{\partial^2 f}{\partial x^2}$, $\frac{\partial^2 f}{\partial y^2}$, or $\frac{\partial^2 f}{\partial x \partial y}$. These are called **second-order partial derivatives**.
*   $\frac{\partial^2 f}{\partial x^2}$ means finding the partial derivative with respect to $x$, and then finding the partial derivative of *that result* with respect to $x$ again. It's $f_{xx}$.
*   $\frac{\partial^2 f}{\partial y^2}$ means finding the partial derivative with respect to $y$, and then finding the partial derivative of *that result* with respect to $y$ again. It's $f_{yy}$.
*   $\frac{\partial^2 f}{\partial x \partial y}$ means finding the partial derivative with respect to $y$ first, and then finding the partial derivative of *that result* with respect to $x$. It's $f_{yx}$.
*   $\frac{\partial^2 f}{\partial y \partial x}$ means finding the partial derivative with respect to $x$ first, and then finding the partial derivative of *that result* with respect to $y$. It's $f_{xy}$.

A very important theorem, known as **Clairaut's Theorem** or the **Theorem of Equality of Mixed Partials**, states that if the second partial derivatives $f_{xy}$ and $f_{yx}$ are continuous in a region, then $f_{xy}(x, y) = f_{yx}(x, y)$ in that region. This is incredibly useful because it means the order in which you take mixed partial derivatives doesn't matter, provided the conditions are met. This is often assumed in many physics and engineering problems. This relates to the understanding aspect of **CO1**.

Let's quickly compute a mixed partial derivative for Example 1: $f(x, y) = x^2y + 3xy^2$.
We found $\frac{\partial f}{\partial x} = 2xy + 3y^2$.
Now, let's find $\frac{\partial}{\partial y} \left(\frac{\partial f}{\partial x}\right) = \frac{\partial}{\partial y} (2xy + 3y^2)$:
Treating $x$ as a constant: $\frac{\partial}{\partial y}(2xy) = 2x \cdot 1 = 2x$.
$\frac{\partial}{\partial y}(3y^2) = 3 \cdot (2y) = 6y$.
So, $\frac{\partial^2 f}{\partial y \partial x} = 2x + 6y$.

Now, let's find $\frac{\partial f}{\partial y}$ first: $\frac{\partial f}{\partial y} = x^2 + 6xy$.
Then, $\frac{\partial}{\partial x} \left(\frac{\partial f}{\partial y}\right) = \frac{\partial}{\partial x} (x^2 + 6xy)$:
Treating $y$ as a constant: $\frac{\partial}{\partial x}(x^2) = 2x$.
$\frac{\partial}{\partial x}(6xy) = 6y \cdot 1 = 6y$.
So, $\frac{\partial^2 f}{\partial x \partial y} = 2x + 6y$.
As expected, $\frac{\partial^2 f}{\partial y \partial x} = \frac{\partial^2 f}{\partial x \partial y}$. This consistency is very powerful.

### Geometric Interpretation: The Gradient Vector

So far, we've looked at how a function changes in a single direction (along the x-axis or y-axis). But what if we want to know the direction of the *steepest ascent* on our mountain? This is where the concept of the **gradient** comes in, which is built upon partial derivatives.

For a function $f(x, y)$, the **gradient of $f$** is a vector, denoted by $\nabla f$ (read as "nabla f" or "grad f"), defined as:

$\nabla f(x, y) = \frac{\partial f}{\partial x} \mathbf{i} + \frac{\partial f}{\partial y} \mathbf{j}$

where $\mathbf{i}$ and $\mathbf{j}$ are the standard unit vectors in the x and y directions, respectively.

If we have a function of three variables, $f(x, y, z)$, then:

$\nabla f(x, y, z) = \frac{\partial f}{\partial x} \mathbf{i} + \frac{\partial f}{\partial y} \mathbf{j} + \frac{\partial f}{\partial z} \mathbf{k}$

The gradient vector $\nabla f$ at a point $(x_0, y_0)$ points in the direction of the greatest rate of increase of the function $f$ at that point. The magnitude of the gradient, $|\nabla f|$, gives the value of this greatest rate of increase. This is a beautiful piece of geometry that directly relates to **CO1**, as understanding the gradient is key to analyzing the behavior of multivariable functions and their optimization.

**Analogy Time:** Think about a weather map showing temperature. The partial derivative $\frac{\partial T}{\partial x}$ tells you how temperature changes as you move east, and $\frac{\partial T}{\partial y}$ tells you how it changes as you move north. The gradient vector $\nabla T = \frac{\partial T}{\partial x} \mathbf{i} + \frac{\partial T}{\partial y} \mathbf{j}$ would point in the direction where the temperature is increasing most rapidly. If you were trying to find the hottest spot, you'd want to move in the direction of the gradient!

### Applications in Science and Engineering

Partial derivatives are not just abstract mathematical concepts; they are essential tools for modeling and understanding the physical world. This directly relates to how we apply these concepts as per **CO1**.

1.  **Heat Transfer:** The **heat equation**, a fundamental equation in physics, describes how temperature ($u$) distributes over time ($t$) in a material. In one dimension, it's often written as:
    $\frac{\partial u}{\partial t} = k \frac{\partial^2 u}{\partial x^2}$
    Here, $\frac{\partial u}{\partial t}$ is the rate of temperature change with time, and $\frac{\partial^2 u}{\partial x^2}$ is the second partial derivative representing the curvature of the temperature profile. The constant $k$ is the thermal diffusivity. Understanding how to compute and interpret these partial derivatives allows engineers to predict how heat will flow and spread in objects.

2.  **Fluid Dynamics:** Equations like the **Navier-Stokes equations**, which describe the motion of viscous fluid substances, involve numerous partial derivatives. For instance, velocity components of the fluid will depend on spatial coordinates $(x, y, z)$ and time $(t)$, leading to terms like $\frac{\partial u}{\partial x}$, $\frac{\partial u}{\partial t}$, etc., where $u$ is a velocity component.

3.  **Electromagnetism:** Maxwell's equations, which form the foundation of classical electromagnetism, are a system of partial differential equations. For example, Faraday's Law of Induction can be written in differential form using the curl and divergence operators, which are defined using partial derivatives. The electric and magnetic fields $\mathbf{E}$ and $\mathbf{B}$ are functions of position and time, so their changes are described by partial derivatives. A simple example might be how the electric potential $V(x,y,z)$ relates to the electric field $\mathbf{E}$: $\mathbf{E} = -\nabla V = -\left(\frac{\partial V}{\partial x}\mathbf{i} + \frac{\partial V}{\partial y}\mathbf{j} + \frac{\partial V}{\partial z}\mathbf{k}\right)$. This shows a direct link between partial derivatives and fundamental physical quantities in electrical science.

4.  **Optimization in Engineering:** When designing a component, say a beam in a bridge, engineers might want to minimize the material used while ensuring it can withstand a certain load. The cost function or the stress function might be a multivariable function of design parameters. Finding the minimum cost or stress often involves finding the critical points of this function, which is done by setting its partial derivatives to zero. This is a direct application of **CO1** for finding maxima and minima.

**Common Pitfall Alert:** When computing partial derivatives, students sometimes forget to treat the other variables as constants or incorrectly apply differentiation rules. Always double-check which variable you are differentiating with respect to and keep the others fixed!

### Summary of Key Concepts

*   **Partial Derivative:** The rate of change of a multivariable function with respect to one variable, treating others as constants.
*   **Notation:** $\frac{\partial f}{\partial x}$, $f_x(x, y)$ for the partial derivative with respect to $x$; $\frac{\partial f}{\partial y}$, $f_y(x, y)$ for the partial derivative with respect to $y$.
*   **Calculation Method:** Treat all variables except the one you're differentiating with respect to as constants. Apply standard differentiation rules.
*   **Second-Order Partial Derivatives:** Derivatives of partial derivatives, like $\frac{\partial^2 f}{\partial x^2}$, $\frac{\partial^2 f}{\partial y \partial x}$.
*   **Clairaut's Theorem:** If $f_{xy}$ and $f_{yx}$ are continuous, then $f_{xy} = f_{yx}$.
*   **Gradient Vector:** $\nabla f = f_x \mathbf{i} + f_y \mathbf{j}$. Points in the direction of the steepest ascent.

Remember these core ideas, and you'll be well-equipped to tackle problems involving partial derivatives. They are the building blocks for understanding more complex concepts in multivariable calculus and their applications in your fields.

---

## Sample Questions with Answers

Here are a few questions to test your understanding, ranging from conceptual checks to exam-style problems:

**Question 1 (Conceptual):**
What is the fundamental difference between a partial derivative and an ordinary derivative? Explain in your own words.

**Answer:**
An ordinary derivative measures the rate of change of a function of a single variable. A partial derivative, on the other hand, measures the rate of change of a function of *multiple* variables with respect to *one* of those variables, while keeping all other variables constant. It's like looking at the slope of a curve on a 2D slice of a higher-dimensional surface.

**Question 2 (Computational):**
Find the first partial derivatives ($\frac{\partial z}{\partial x}$ and $\frac{\partial z}{\partial y}$) for the function $z = x^3 \sin(y) - y^2 e^x$.

**Answer:**
To find $\frac{\partial z}{\partial x}$, we treat $y$ as a constant:
$\frac{\partial z}{\partial x} = \frac{\partial}{\partial x}(x^3 \sin(y)) - \frac{\partial}{\partial x}(y^2 e^x)$
$\frac{\partial z}{\partial x} = \sin(y) \cdot \frac{\partial}{\partial x}(x^3) - y^2 \cdot \frac{\partial}{\partial x}(e^x)$
$\frac{\partial z}{\partial x} = \sin(y) \cdot (3x^2) - y^2 \cdot (e^x)$
$\frac{\partial z}{\partial x} = 3x^2 \sin(y) - y^2 e^x$

To find $\frac{\partial z}{\partial y}$, we treat $x$ as a constant:
$\frac{\partial z}{\partial y} = \frac{\partial}{\partial y}(x^3 \sin(y)) - \frac{\partial}{\partial y}(y^2 e^x)$
$\frac{\partial z}{\partial y} = x^3 \cdot \frac{\partial}{\partial y}(\sin(y)) - e^x \cdot \frac{\partial}{\partial y}(y^2)$
$\frac{\partial z}{\partial y} = x^3 \cdot (\cos(y)) - e^x \cdot (2y)$
$\frac{\partial z}{\partial y} = x^3 \cos(y) - 2y e^x$

**Question 3 (Second-Order Derivatives & Clairaut's Theorem):**
Given $f(x, y) = \ln(x^2 + y^2)$, verify that $\frac{\partial^2 f}{\partial x \partial y} = \frac{\partial^2 f}{\partial y \partial x}$.

**Answer:**
First, find $\frac{\partial f}{\partial y}$:
Using the chain rule, let $u = x^2 + y^2$. Then $\frac{\partial u}{\partial y} = 2y$.
$\frac{\partial f}{\partial y} = \frac{d}{du}(\ln u) \cdot \frac{\partial u}{\partial y} = \frac{1}{u} \cdot (2y) = \frac{2y}{x^2 + y^2}$.

Now, find $\frac{\partial^2 f}{\partial x \partial y}$ by differentiating $\frac{\partial f}{\partial y}$ with respect to $x$:
$\frac{\partial}{\partial x}\left(\frac{2y}{x^2 + y^2}\right)$. Here, $y$ is treated as a constant. We'll use the quotient rule. Let $p = 2y$ (constant) and $q = x^2 + y^2$. Then $\frac{\partial p}{\partial x} = 0$ and $\frac{\partial q}{\partial x} = 2x$.
The quotient rule is $\left(\frac{p}{q}\right)' = \frac{p'q - pq'}{q^2}$.
$\frac{\partial^2 f}{\partial x \partial y} = \frac{(0)(x^2 + y^2) - (2y)(2x)}{(x^2 + y^2)^2} = \frac{-4xy}{(x^2 + y^2)^2}$.

Next, find $\frac{\partial f}{\partial x}$:
Using the chain rule, let $u = x^2 + y^2$. Then $\frac{\partial u}{\partial x} = 2x$.
$\frac{\partial f}{\partial x} = \frac{d}{du}(\ln u) \cdot \frac{\partial u}{\partial x} = \frac{1}{u} \cdot (2x) = \frac{2x}{x^2 + y^2}$.

Now, find $\frac{\partial^2 f}{\partial y \partial x}$ by differentiating $\frac{\partial f}{\partial x}$ with respect to $y$:
$\frac{\partial}{\partial y}\left(\frac{2x}{x^2 + y^2}\right)$. Here, $x$ is treated as a constant. We'll use the quotient rule again. Let $p = 2x$ (constant) and $q = x^2 + y^2$. Then $\frac{\partial p}{\partial y} = 0$ and $\frac{\partial q}{\partial y} = 2y$.
$\frac{\partial^2 f}{\partial y \partial x} = \frac{(0)(x^2 + y^2) - (2x)(2y)}{(x^2 + y^2)^2} = \frac{-4xy}{(x^2 + y^2)^2}$.

Since $\frac{\partial^2 f}{\partial x \partial y} = \frac{-4xy}{(x^2 + y^2)^2}$ and $\frac{\partial^2 f}{\partial y \partial x} = \frac{-4xy}{(x^2 + y^2)^2}$, we have verified that $\frac{\partial^2 f}{\partial x \partial y} = \frac{\partial^2 f}{\partial y \partial x}$. The function's second partial derivatives are continuous everywhere except at the origin $(0,0)$, so Clairaut's Theorem holds.

**Question 4 (Gradient Vector Application):**
Find the gradient vector of the function $f(x, y) = x^2 y^3 - 5x + 2y$ at the point $(1, -1)$.

**Answer:**
First, we need to compute the partial derivatives:
$\frac{\partial f}{\partial x} = \frac{\partial}{\partial x}(x^2 y^3 - 5x + 2y)$
Treat $y$ as constant: $\frac{\partial f}{\partial x} = 2xy^3 - 5$.

$\frac{\partial f}{\partial y} = \frac{\partial}{\partial y}(x^2 y^3 - 5x + 2y)$
Treat $x$ as constant: $\frac{\partial f}{\partial y} = 3x^2 y^2 + 2$.

Now, we evaluate these partial derivatives at the point $(1, -1)$:
$\frac{\partial f}{\partial x}(1, -1) = 2(1)(-1)^3 - 5 = 2(1)(-1) - 5 = -2 - 5 = -7$.
$\frac{\partial f}{\partial y}(1, -1) = 3(1)^2 (-1)^2 + 2 = 3(1)(1) + 2 = 3 + 2 = 5$.

The gradient vector is $\nabla f(x, y) = \frac{\partial f}{\partial x} \mathbf{i} + \frac{\partial f}{\partial y} \mathbf{j}$.
So, at the point $(1, -1)$:
$\nabla f(1, -1) = -7 \mathbf{i} + 5 \mathbf{j}$.

This vector indicates the direction of the steepest increase of the function $f$ at the point $(1,-1)$, and its magnitude is the rate of that increase. This is a direct application of **CO1**.
