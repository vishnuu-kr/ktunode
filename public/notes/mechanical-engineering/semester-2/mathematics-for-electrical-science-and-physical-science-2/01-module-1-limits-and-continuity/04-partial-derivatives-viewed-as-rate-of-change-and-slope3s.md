---
title: "Partial derivatives viewed as rate of 
change and slope3s"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2"
module: "Module 1: Limits and continuity"
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1edffeb4799d95e8399b"
status: "completed"
scrapedAt: "2026-05-20T17:45:41.024Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2

## Module 1: Limits and Continuity

### Topic: Partial Derivatives: Rate of Change and Slopes

Welcome, everyone! Today, we're diving into a really exciting and fundamental concept in multivariable calculus: **partial derivatives**. We've spent time understanding how functions change when their single input changes – that’s ordinary differentiation. But in electrical science and physical science, we often deal with situations where the outcome depends on *multiple* factors. Think about the temperature of an object, which might depend on its position (x, y, z) and time (t), or the electrical resistance of a wire, which could depend on its length, cross-sectional area, and temperature.

This is where partial derivatives come in. They are our tools to dissect these complex relationships and understand how a function changes when *only one* of its many input variables is allowed to vary, while all others are held constant. It’s like being a detective, isolating one clue at a time to understand the whole picture.

### 1.1 Understanding Functions of Several Variables

Before we jump into derivatives, let's quickly recap what we mean by a function of several variables. Instead of $f(x)$, we might have $f(x, y)$ or $f(x, y, z, t)$.

*   **Example:** Consider a function describing the altitude of a mountainous terrain: $A(x, y)$, where $x$ and $y$ are horizontal coordinates. At any point $(x, y)$, the function gives us the altitude $A$.

Our goal with partial derivatives is to understand the *rate of change* of $A$ as we move purely in the $x$-direction, or purely in the $y$-direction.

### 1.2 The Intuitive Idea: Rate of Change

Imagine you’re standing on that mountain at a specific point $(x_0, y_0)$. You want to know how the altitude changes if you take a small step *only* towards the east (say, in the positive $x$-direction). This is precisely what a partial derivative tells us. It’s the instantaneous rate of change of the function with respect to one specific variable.

This connects directly to **Course Outcome 1 (CO1)**: "Compute the partial and total derivatives and maxima and minima of multivariable functions and to apply in engineering problems." Understanding these rates of change is the first step towards finding how these functions behave overall, including where they reach their peaks or valleys, which is crucial for optimization in engineering.

#### 1.2.1 Partial Derivative with Respect to $x$

Let's define the partial derivative of a function $f(x, y)$ with respect to $x$. We denote this as $\frac{\partial f}{\partial x}$ or $f_x(x, y)$.

The core idea is to treat $y$ as a **constant** and then differentiate $f(x, y)$ with respect to $x$ using our familiar single-variable differentiation rules.

Think about our mountain example $A(x, y)$. If we are interested in the rate of change of altitude as we move horizontally along a line where $y$ is fixed (say, we walk along a constant latitude line), we are calculating $\frac{\partial A}{\partial x}$. This tells us the slope of the mountain *in the $x$-direction*.

**Formal Definition (from Anton, Biven, Davis):**
The partial derivative of $f(x, y)$ with respect to $x$ is defined as:
$$ \frac{\partial f}{\partial x} = \lim_{\Delta x \to 0} \frac{f(x + \Delta x, y) - f(x, y)}{\Delta x} $$
provided this limit exists.

Similarly, for the partial derivative with respect to $y$, denoted $\frac{\partial f}{\partial y}$ or $f_y(x, y)$:
$$ \frac{\partial f}{\partial y} = \lim_{\Delta y \to 0} \frac{f(x, y + \Delta y) - f(x, y)}{\Delta y} $$
provided this limit exists.

**Key Strategy:** When calculating $\frac{\partial f}{\partial x}$, treat all occurrences of $y$ as constants. When calculating $\frac{\partial f}{\partial y}$, treat all occurrences of $x$ as constants.

### 1.3 Partial Derivatives as Slopes

This is a very intuitive way to visualize partial derivatives, especially in the context of multivariable functions.

Imagine a surface defined by $z = f(x, y)$. This surface exists in three-dimensional space $(x, y, z)$.

*   **Slope in the $x$-direction:** If we fix a value of $y$, say $y = y_0$, then $z = f(x, y_0)$ becomes a function of a single variable $x$. This equation, $z = f(x, y_0)$, represents a curve that lies on the surface $z = f(x, y)$ and is parallel to the $xz$-plane. The derivative of this function with respect to $x$, $\frac{df}{dx}|_{y=y_0}$, gives us the slope of this curve at a particular point $(x_0, y_0)$. This slope is precisely $\frac{\partial f}{\partial x}(x_0, y_0)$. So, $\frac{\partial f}{\partial x}$ at a point $(x_0, y_0)$ is the slope of the tangent line to the curve formed by intersecting the surface $z = f(x, y)$ with the plane $y = y_0$.

*   **Slope in the $y$-direction:** Similarly, if we fix $x = x_0$, then $z = f(x_0, y)$ is a function of $y$. This equation represents a curve on the surface parallel to the $yz$-plane. The derivative $\frac{df}{dy}|_{x=x_0}$ gives the slope of this curve at $(x_0, y_0)$, which is $\frac{\partial f}{\partial y}(x_0, y_0)$. Thus, $\frac{\partial f}{\partial y}$ at $(x_0, y_0)$ is the slope of the tangent line to the curve formed by intersecting the surface $z = f(x, y)$ with the plane $x = x_0$.

This geometric interpretation is crucial for understanding **CO1** and its application. It shows how partial derivatives measure the local inclination of a surface in specific directions.

**Analogy:** Imagine you are skiing on a slope. $\frac{\partial f}{\partial x}$ tells you how steep it is if you ski purely east, and $\frac{\partial f}{\partial y}$ tells you how steep it is if you ski purely north. Both these values together describe the "steepness" of the mountain in a way that leads to the concept of the gradient and directional derivatives, which we’ll touch upon later.

### 1.4 Examples: Calculating Partial Derivatives

Let's work through some examples to solidify these ideas.

**Example 1: A Simple Polynomial**
Suppose $f(x, y) = x^2 y^3 + 5x - 2y + 7$.

*   **To find $\frac{\partial f}{\partial x}$:** Treat $y$ as a constant.
    *   The derivative of $x^2 y^3$ with respect to $x$ is $2xy^3$ (since $y^3$ is a constant multiplier).
    *   The derivative of $5x$ with respect to $x$ is $5$.
    *   The derivative of $-2y$ (which is a constant with respect to $x$) is $0$.
    *   The derivative of $7$ (a constant) is $0$.
    So, $\frac{\partial f}{\partial x} = 2xy^3 + 5$.

*   **To find $\frac{\partial f}{\partial y}$:** Treat $x$ as a constant.
    *   The derivative of $x^2 y^3$ with respect to $y$ is $x^2(3y^2) = 3x^2y^2$ (since $x^2$ is a constant multiplier).
    *   The derivative of $5x$ (a constant with respect to $y$) is $0$.
    *   The derivative of $-2y$ with respect to $y$ is $-2$.
    *   The derivative of $7$ (a constant) is $0$.
    So, $\frac{\partial f}{\partial y} = 3x^2y^2 - 2$.

**Example 2: Function with Trigonometric and Exponential Terms**
Let $g(x, y) = e^{xy} \sin(x)$.

*   **To find $\frac{\partial g}{\partial x}$:** Here, we need the product rule, treating $y$ as constant. Let $u = e^{xy}$ and $v = \sin(x)$.
    *   $\frac{\partial u}{\partial x} = \frac{\partial}{\partial x}(e^{xy}) = e^{xy} \cdot y = ye^{xy}$ (using the chain rule, where the derivative of $xy$ with respect to $x$ is $y$).
    *   $\frac{\partial v}{\partial x} = \frac{\partial}{\partial x}(\sin(x)) = \cos(x)$.
    Using the product rule $(\text{uv})' = u'v + uv'$:
    $\frac{\partial g}{\partial x} = (ye^{xy})\sin(x) + e^{xy}(\cos(x)) = ye^{xy}\sin(x) + e^{xy}\cos(x)$.

*   **To find $\frac{\partial g}{\partial y}$:** Here, we only differentiate with respect to $y$. The term $\sin(x)$ is treated as a constant.
    *   $\frac{\partial g}{\partial y} = \frac{\partial}{\partial y}(e^{xy} \sin(x)) = \sin(x) \cdot \frac{\partial}{\partial y}(e^{xy})$
    *   $\frac{\partial}{\partial y}(e^{xy}) = e^{xy} \cdot x = xe^{xy}$ (chain rule, derivative of $xy$ with respect to $y$ is $x$).
    So, $\frac{\partial g}{\partial y} = \sin(x) \cdot (xe^{xy}) = xe^{xy}\sin(x)$.

These calculations are fundamental for **CO1**. If you're asked to find the rate of change of something with respect to one variable, you're likely being asked for a partial derivative.

**Exam Tip:** The most common mistake students make is not consistently treating the other variables as constants. Always be mindful of which variable you are differentiating with respect to.

### 1.5 Higher-Order Partial Derivatives

Just as with single-variable calculus, we can differentiate partial derivatives. These are called higher-order partial derivatives.

For a function $f(x, y)$:
*   $\frac{\partial^2 f}{\partial x^2} = \frac{\partial}{\partial x}\left(\frac{\partial f}{\partial x}\right) = f_{xx}(x, y)$
*   $\frac{\partial^2 f}{\partial y^2} = \frac{\partial}{\partial y}\left(\frac{\partial f}{\partial y}\right) = f_{yy}(x, y)$
*   $\frac{\partial^2 f}{\partial y \partial x} = \frac{\partial}{\partial y}\left(\frac{\partial f}{\partial x}\right) = f_{xy}(x, y)$
*   $\frac{\partial^2 f}{\partial x \partial y} = \frac{\partial}{\partial x}\left(\frac{\partial f}{\partial y}\right) = f_{yx}(x, y)$

These are called **mixed partial derivatives** when the variables are different.

**Clairaut's Theorem (or Schwarz's Theorem):** A very important result, often found in texts like "Thomas' Calculus" or "Kreyszig's Advanced Engineering Mathematics," states that if the mixed partial derivatives $f_{xy}$ and $f_{yx}$ are **continuous** in an open disk, then they are equal in that disk:
$$ \frac{\partial^2 f}{\partial y \partial x} = \frac{\partial^2 f}{\partial x \partial y} $$
In most of the functions you'll encounter in this course, this condition will be met, so you can expect the mixed partials to be equal. This is a significant time-saver in calculations.

**Example 3: Calculating Second-Order Partial Derivatives**
Let $f(x, y) = x^3 y^2 + x^4 + y^5$.

First, find the first partial derivatives:
*   $\frac{\partial f}{\partial x} = 3x^2 y^2 + 4x^3$
*   $\frac{\partial f}{\partial y} = 2x^3 y + 5y^4$

Now, let's find the second-order derivatives:

*   **$f_{xx} = \frac{\partial}{\partial x}\left(\frac{\partial f}{\partial x}\right) = \frac{\partial}{\partial x}(3x^2 y^2 + 4x^3)$**
    Treat $y$ as constant: $6xy^2 + 12x^2$.
    So, $\frac{\partial^2 f}{\partial x^2} = 6xy^2 + 12x^2$.

*   **$f_{yy} = \frac{\partial}{\partial y}\left(\frac{\partial f}{\partial y}\right) = \frac{\partial}{\partial y}(2x^3 y + 5y^4)$**
    Treat $x$ as constant: $2x^3 + 20y^3$.
    So, $\frac{\partial^2 f}{\partial y^2} = 2x^3 + 20y^3$.

*   **$f_{xy} = \frac{\partial}{\partial y}\left(\frac{\partial f}{\partial x}\right) = \frac{\partial}{\partial y}(3x^2 y^2 + 4x^3)$**
    Treat $x$ as constant: $3x^2(2y) + 0 = 6x^2y$.
    So, $\frac{\partial^2 f}{\partial y \partial x} = 6x^2y$.

*   **$f_{yx} = \frac{\partial}{\partial x}\left(\frac{\partial f}{\partial y}\right) = \frac{\partial}{\partial x}(2x^3 y + 5y^4)$**
    Treat $y$ as constant: $2(3x^2)y + 0 = 6x^2y$.
    So, $\frac{\partial^2 f}{\partial x \partial y} = 6x^2y$.

As expected, $f_{xy} = f_{yx}$. This is a good check of our work! These higher-order derivatives are important for understanding curvature and are also used in the classification of critical points (maxima/minima), which falls under **CO1**.

### 1.6 Applications in Science and Engineering

The concept of partial derivatives as rates of change is absolutely fundamental across many fields.

*   **Electrical Engineering:**
    *   Consider the voltage $V$ in a circuit that depends on the current $I$ and the resistance $R$, $V(I, R)$. $\frac{\partial V}{\partial I}$ is related to Ohm's law, representing the change in voltage for a change in current at constant resistance. $\frac{\partial V}{\partial R}$ represents the change in voltage for a change in resistance at constant current.
    *   In electromagnetism, fields like electric potential or magnetic flux can depend on multiple spatial coordinates and time. Partial derivatives help us understand how these fields change as you move in space or as time progresses. For instance, Maxwell's equations heavily rely on partial derivatives.
    *   The behavior of semiconductor devices often involves functions dependent on voltage, temperature, and doping concentrations. Partial derivatives help analyze how these parameters influence device characteristics.

*   **Physical Science (Physics, Chemistry):**
    *   **Thermodynamics:** State variables like pressure ($P$), volume ($V$), and temperature ($T$) are often related. For a gas, $P$ might be a function of $V$ and $T$, $P(V, T)$. The partial derivative $\left(\frac{\partial P}{\partial T}\right)_V$ tells us how pressure changes with temperature at constant volume – this is related to the concept of the coefficient of thermal expansion. Similarly, $\left(\frac{\partial P}{\partial V}\right)_T$ relates to compressibility.
    *   **Heat Transfer:** The temperature distribution $T(x, y, z, t)$ in an object often follows the heat equation, which is a partial differential equation involving second partial derivatives. Understanding these helps predict how heat flows and temperature changes over time and space.
    *   **Mechanics:** Forces or potentials can depend on positions in multiple dimensions. For example, the gravitational potential of the Earth at a point depends on its latitude and longitude (and altitude). Partial derivatives help calculate the gravitational force components in different directions.

*   **Connecting to Course Outcomes:**
    *   **CO1:** As mentioned, calculating partial derivatives is the direct pathway to understanding the "rate of change" aspect of **CO1**. Applying them to find maxima and minima of multivariable functions (like finding the optimal operating point for an electrical component or the minimum stress in a material) directly uses these derivatives.
    *   **CO3:** Partial derivatives are the building blocks for understanding vector calculus and line integrals. The components of a gradient vector, which dictates the direction of steepest ascent for a function, are its partial derivatives. This directly links to **CO3** as we move into vector functions.

**Practical Example - Power Consumption:**
Let's say the power consumed by a device $P$ is a function of the voltage $V$ and current $I$, given by $P(V, I) = V \cdot I$. (This is a simplification, but illustrates the point).
Suppose $V$ and $I$ are not constant but are related to some external parameters, say time $t$ and temperature $T$. So, effectively, $V = V(t, T)$ and $I = I(t, T)$. Then the power $P$ becomes a function of $t$ and $T$: $P(t, T) = V(t, T) \cdot I(t, T)$.

If we want to know how the power changes *only* due to a change in temperature, holding time constant, we'd be looking at $\frac{\partial P}{\partial T}$. Using the product rule for partial derivatives:
$$ \frac{\partial P}{\partial T} = \frac{\partial}{\partial T}(V(t, T) \cdot I(t, T)) = \frac{\partial V}{\partial T} \cdot I + V \cdot \frac{\partial I}{\partial T} $$
Here, $\frac{\partial V}{\partial T}$ is the rate of change of voltage with temperature (at constant time), and $\frac{\partial I}{\partial T}$ is the rate of change of current with temperature (at constant time). This shows how the overall rate of change of power with temperature is composed of the individual sensitivities of voltage and current to temperature. This is a direct application of partial derivatives in analyzing system behavior.

### 1.7 Summary of Key Concepts

*   **Partial Derivative:** The rate of change of a multivariable function with respect to one of its variables, keeping all other variables constant.
*   **Notation:** $\frac{\partial f}{\partial x}$, $f_x$, $\frac{\partial f}{\partial y}$, $f_y$.
*   **Calculation Rule:** Treat the other variables as constants.
*   **Geometric Interpretation:** $\frac{\partial f}{\partial x}$ is the slope of the surface $z = f(x, y)$ in the $x$-direction (along a curve parallel to the $xz$-plane). $\frac{\partial f}{\partial y}$ is the slope in the $y$-direction (along a curve parallel to the $yz$-plane).
*   **Higher-Order Derivatives:** Differentiating partial derivatives again.
*   **Mixed Partial Derivatives:** $\frac{\partial^2 f}{\partial y \partial x}$ and $\frac{\partial^2 f}{\partial x \partial y}$.
*   **Clairaut's Theorem:** If mixed partials are continuous, they are equal. This is a very common property to rely on.

Remember, mastering partial derivatives is your gateway to understanding how complex systems respond to changes in individual factors, a skill you'll constantly use in your engineering and science studies.

---

## Sample Questions with Answers

**1. Conceptual Question:**
Explain in your own words the difference between an ordinary derivative $\frac{dy}{dx}$ and a partial derivative $\frac{\partial z}{\partial x}$.

**Answer:**
An ordinary derivative, $\frac{dy}{dx}$, measures the rate of change of a function $y$ which depends on a *single* independent variable $x$. It tells us how much $y$ changes for a unit change in $x$.
A partial derivative, $\frac{\partial z}{\partial x}$, measures the rate of change of a function $z$ which depends on *multiple* independent variables (say, $x$, $y$, and possibly others). It specifically tells us how much $z$ changes for a unit change in $x$, *while all other independent variables are held constant*. It isolates the effect of one variable on the function.

**2. Calculation Question (Exam-Oriented):**
Let the function $f(x, y) = \frac{x^2}{y} + \sin(xy)$ represent some physical quantity. Calculate the first partial derivatives $\frac{\partial f}{\partial x}$ and $\frac{\partial f}{\partial y}$.

**Solution:**
We need to calculate $\frac{\partial f}{\partial x}$ and $\frac{\partial f}{\partial y}$.

*   **For $\frac{\partial f}{\partial x}$:** Treat $y$ as a constant.
    $$ \frac{\partial f}{\partial x} = \frac{\partial}{\partial x}\left(\frac{x^2}{y}\right) + \frac{\partial}{\partial x}(\sin(xy)) $$
    The derivative of $\frac{x^2}{y}$ with respect to $x$ is $\frac{1}{y} \cdot \frac{\partial}{\partial x}(x^2) = \frac{1}{y} \cdot (2x) = \frac{2x}{y}$.
    For $\sin(xy)$, we use the chain rule: $\frac{\partial}{\partial x}(\sin(xy)) = \cos(xy) \cdot \frac{\partial}{\partial x}(xy)$.
    The derivative of $xy$ with respect to $x$ (treating $y$ as constant) is $y$.
    So, $\frac{\partial}{\partial x}(\sin(xy)) = \cos(xy) \cdot y = y\cos(xy)$.
    Combining these:
    $$ \frac{\partial f}{\partial x} = \frac{2x}{y} + y\cos(xy) $$

*   **For $\frac{\partial f}{\partial y}$:** Treat $x$ as a constant.
    $$ \frac{\partial f}{\partial y} = \frac{\partial}{\partial y}\left(\frac{x^2}{y}\right) + \frac{\partial}{\partial y}(\sin(xy)) $$
    The derivative of $\frac{x^2}{y} = x^2 y^{-1}$ with respect to $y$ is $x^2 \cdot (-1)y^{-2} = -\frac{x^2}{y^2}$.
    For $\sin(xy)$, we use the chain rule: $\frac{\partial}{\partial y}(\sin(xy)) = \cos(xy) \cdot \frac{\partial}{\partial y}(xy)$.
    The derivative of $xy$ with respect to $y$ (treating $x$ as constant) is $x$.
    So, $\frac{\partial}{\partial y}(\sin(xy)) = \cos(xy) \cdot x = x\cos(xy)$.
    Combining these:
    $$ \frac{\partial f}{\partial y} = -\frac{x^2}{y^2} + x\cos(xy) $$

**3. Second-Order Derivative Question (Concept & Calculation):**
Given $f(x, y) = e^{2x} \cos(3y)$.
a) Find the second partial derivatives $f_{xx}$, $f_{yy}$, $f_{xy}$, and $f_{yx}$.
b) Verify Clairaut's Theorem for this function.

**Solution:**
First, find the first partial derivatives:
*   $\frac{\partial f}{\partial x} = \frac{\partial}{\partial x}(e^{2x} \cos(3y)) = \cos(3y) \cdot \frac{\partial}{\partial x}(e^{2x}) = \cos(3y) \cdot (e^{2x} \cdot 2) = 2e^{2x}\cos(3y)$.
*   $\frac{\partial f}{\partial y} = \frac{\partial}{\partial y}(e^{2x} \cos(3y)) = e^{2x} \cdot \frac{\partial}{\partial y}(\cos(3y)) = e^{2x} \cdot (-\sin(3y) \cdot 3) = -3e^{2x}\sin(3y)$.

Now, the second partial derivatives:
a)
*   **$f_{xx} = \frac{\partial}{\partial x}\left(\frac{\partial f}{\partial x}\right) = \frac{\partial}{\partial x}(2e^{2x}\cos(3y))$**
    Treat $y$ as constant: $2\cos(3y) \cdot \frac{\partial}{\partial x}(e^{2x}) = 2\cos(3y) \cdot (e^{2x} \cdot 2) = 4e^{2x}\cos(3y)$.

*   **$f_{yy} = \frac{\partial}{\partial y}\left(\frac{\partial f}{\partial y}\right) = \frac{\partial}{\partial y}(-3e^{2x}\sin(3y))$**
    Treat $x$ as constant: $-3e^{2x} \cdot \frac{\partial}{\partial y}(\sin(3y)) = -3e^{2x} \cdot (\cos(3y) \cdot 3) = -9e^{2x}\cos(3y)$.

*   **$f_{xy} = \frac{\partial}{\partial y}\left(\frac{\partial f}{\partial x}\right) = \frac{\partial}{\partial y}(2e^{2x}\cos(3y))$**
    Treat $x$ as constant: $2e^{2x} \cdot \frac{\partial}{\partial y}(\cos(3y)) = 2e^{2x} \cdot (-\sin(3y) \cdot 3) = -6e^{2x}\sin(3y)$.

*   **$f_{yx} = \frac{\partial}{\partial x}\left(\frac{\partial f}{\partial y}\right) = \frac{\partial}{\partial x}(-3e^{2x}\sin(3y))$**
    Treat $y$ as constant: $-3\sin(3y) \cdot \frac{\partial}{\partial x}(e^{2x}) = -3\sin(3y) \cdot (e^{2x} \cdot 2) = -6e^{2x}\sin(3y)$.

b)
**Verification of Clairaut's Theorem:**
We found $f_{xy} = -6e^{2x}\sin(3y)$ and $f_{yx} = -6e^{2x}\sin(3y)$.
Since $f_{xy} = f_{yx}$, Clairaut's Theorem is verified for this function. The components $e^{2x}$ and $\cos(3y)$ and $\sin(3y)$ are continuous everywhere, so their mixed partial derivatives are also continuous.

**Why this is important for exams:** Recognizing which functions satisfy Clairaut's theorem allows you to compute only one of the mixed partials and immediately know the other, saving valuable time. For instance, if you were asked to compute $f_{yx}$ and found $f_{xy}$ first, you could write down $f_{yx} = f_{xy}$ based on the theorem, if you're confident the conditions are met.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
