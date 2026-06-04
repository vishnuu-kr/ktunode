---
title: "Partial derivatives of functions with more than 
two variables"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2"
module: "Module 1: Limits and continuity"
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912cc4"
status: "completed"
scrapedAt: "2026-05-20T18:36:48.211Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2

## Module 1: Limits and Continuity

### Topic: Partial Derivatives of Functions with More Than Two Variables

Welcome, everyone! Today, we're going to extend our understanding of derivatives to situations where our function doesn't just depend on one variable, but on *three* or even *more* variables. This might sound a bit abstract at first, but trust me, it's incredibly powerful for modeling real-world phenomena in electrical and physical sciences. Think about it: the temperature at a point in a room isn't just about how far east you are; it also depends on how far north you are, and crucially, how high you are from the floor. Or, the voltage in a complex circuit might depend on the values of several components, not just one. This is where partial derivatives come into play.

Our journey today is about understanding how to measure the rate of change of a function with respect to *one* of its variables, while keeping all the other variables constant. This is the core idea of a partial derivative.

### 1. Revisiting the Basics: What is a Derivative?

Before we dive into multiple variables, let's quickly recall what a single-variable derivative tells us. If we have a function $y = f(x)$, the derivative, $dy/dx$ or $f'(x)$, represents the instantaneous rate of change of $y$ with respect to $x$. It tells us how much $y$ changes for a tiny change in $x$. Geometrically, it's the slope of the tangent line to the curve of $f(x)$ at a given point.

Think of it like driving a car. If your position is a function of time, $s(t)$, then $ds/dt$ is your velocity – how fast your position is changing with respect to time.

### 2. Introducing Partial Derivatives: The Big Idea

Now, imagine a function of two variables, say $z = f(x, y)$. Here, $z$ depends on both $x$ and $y$. If we want to know how $z$ changes *specifically* as $x$ changes, while *holding $y$ completely still*, we use a **partial derivative**. Similarly, if we want to know how $z$ changes as $y$ changes, while *holding $x$ constant*, we use another partial derivative.

This concept is directly linked to **Course Outcome 1 (CO1): Compute the partial and total derivatives... of multivariable functions and to apply in engineering problems.** Understanding these rates of change is fundamental to analyzing how systems respond to changes in different input parameters. For instance, in electrical circuits, if the current is a function of voltage and resistance, we'd want to know how the current changes if we tweak the voltage (keeping resistance fixed) or how it changes if we tweak the resistance (keeping voltage fixed).

Let's formalize this.

#### 2.1 Defining Partial Derivatives

For a function $f(x, y)$, the **partial derivative of $f$ with respect to $x$** is denoted by $\frac{\partial f}{\partial x}$ or $f_x(x, y)$. To find this, we treat $y$ as a **constant** and differentiate $f$ with respect to $x$ using the standard rules of differentiation you're familiar with from single-variable calculus.

Similarly, the **partial derivative of $f$ with respect to $y$** is denoted by $\frac{\partial f}{\partial y}$ or $f_y(x, y)$. Here, we treat $x$ as a **constant** and differentiate $f$ with respect to $y$.

**Analogy:** Imagine you're in a hot air balloon (that's our function $z$). Your position can be described by your east-west coordinate ($x$) and your north-south coordinate ($y$). Now, if you want to know how the temperature changes as you drift *eastward* (increasing $x$) while staying at the same north-south latitude (keeping $y$ constant), you're looking for the partial derivative with respect to $x$. If you want to know how the temperature changes as you drift *northward* (increasing $y$) while maintaining your east-west position (keeping $x$ constant), you're looking for the partial derivative with respect to $y$.

### 3. Partial Derivatives for Functions of More Than Two Variables

The beauty of this concept is that it extends seamlessly to functions with three, four, or even more variables. Let's consider a function of three variables, say $w = f(x, y, t)$, where $w$ could represent something like the temperature in a room, $x$ the east-west position, $y$ the north-south position, and $t$ the time.

To find the partial derivative of $w$ with respect to $x$, denoted $\frac{\partial w}{\partial x}$ or $f_x(x, y, t)$, we treat **both $y$ and $t$ as constants** and differentiate with respect to $x$.

We can do this for each variable:

*   **Partial derivative with respect to $y$**: $\frac{\partial w}{\partial y}$ or $f_y(x, y, t)$. Treat $x$ and $t$ as constants.
*   **Partial derivative with respect to $t$**: $\frac{\partial w}{\partial t}$ or $f_t(x, y, t)$. Treat $x$ and $y$ as constants.

This directly contributes to **CO1** by equipping us with the tools to analyze how complex physical systems (like temperature distribution over time and space) change with respect to individual parameters.

**Generalization:** For a function $f(x_1, x_2, \dots, x_n)$, the partial derivative with respect to $x_i$, denoted $\frac{\partial f}{\partial x_i}$ or $f_{x_i}$, is found by treating all other variables ($x_j$ where $j \neq i$) as constants and differentiating $f$ with respect to $x_i$.

This is a crucial takeaway, and a common point to remember for exams: **when you take a partial derivative with respect to one variable, all other variables are treated as constants.**

### 4. How to Compute Partial Derivatives: Step-by-Step

Let's walk through some examples to solidify the process. We'll draw from the foundational principles discussed in Anton, Biven, and Davis's *Calculus*.

**Example 1:** Consider the function $f(x, y) = x^2y + 3xy^4$.

*   **To find $\frac{\partial f}{\partial x}$:**
    *   Treat $y$ as a constant.
    *   The first term is $x^2y$. Differentiating $x^2$ with respect to $x$ gives $2x$. So, the derivative of $x^2y$ (where $y$ is constant) is $(2x)y = 2xy$.
    *   The second term is $3xy^4$. Differentiating $3xy^4$ with respect to $x$ (where $3y^4$ is a constant multiplier) gives $3y^4 \cdot 1 = 3y^4$.
    *   Therefore, $\frac{\partial f}{\partial x} = 2xy + 3y^4$.

*   **To find $\frac{\partial f}{\partial y}$:**
    *   Treat $x$ as a constant.
    *   The first term is $x^2y$. Differentiating $x^2y$ with respect to $y$ (where $x^2$ is a constant multiplier) gives $x^2 \cdot 1 = x^2$.
    *   The second term is $3xy^4$. Differentiating $y^4$ with respect to $y$ gives $4y^3$. So, the derivative of $3xy^4$ (where $3x$ is a constant multiplier) is $3x \cdot (4y^3) = 12xy^3$.
    *   Therefore, $\frac{\partial f}{\partial y} = x^2 + 12xy^3$.

**Example 2:** Let's try a function with three variables: $g(x, y, z) = e^{xyz} + \sin(x+y+z)$.

*   **To find $\frac{\partial g}{\partial x}$:**
    *   Treat $y$ and $z$ as constants.
    *   For $e^{xyz}$: The derivative of $e^u$ is $e^u \cdot \frac{du}{dx}$. Here, $u = xyz$. So, $\frac{\partial}{\partial x}(xyz) = yz$ (since $y$ and $z$ are constant).
    *   Thus, $\frac{\partial}{\partial x}(e^{xyz}) = e^{xyz} \cdot (yz)$.
    *   For $\sin(x+y+z)$: The derivative of $\sin(u)$ is $\cos(u) \cdot \frac{du}{dx}$. Here, $u = x+y+z$. So, $\frac{\partial}{\partial x}(x+y+z) = 1$ (since $y$ and $z$ are constant).
    *   Thus, $\frac{\partial}{\partial x}(\sin(x+y+z)) = \cos(x+y+z) \cdot 1$.
    *   Combining these, $\frac{\partial g}{\partial x} = yz e^{xyz} + \cos(x+y+z)$.

*   **To find $\frac{\partial g}{\partial y}$:**
    *   Treat $x$ and $z$ as constants.
    *   $\frac{\partial}{\partial y}(e^{xyz}) = e^{xyz} \cdot \frac{\partial}{\partial y}(xyz) = e^{xyz} \cdot (xz)$.
    *   $\frac{\partial}{\partial y}(\sin(x+y+z)) = \cos(x+y+z) \cdot \frac{\partial}{\partial y}(x+y+z) = \cos(x+y+z) \cdot 1$.
    *   So, $\frac{\partial g}{\partial y} = xz e^{xyz} + \cos(x+y+z)$.

*   **To find $\frac{\partial g}{\partial z}$:**
    *   Treat $x$ and $y$ as constants.
    *   $\frac{\partial}{\partial z}(e^{xyz}) = e^{xyz} \cdot \frac{\partial}{\partial z}(xyz) = e^{xyz} \cdot (xy)$.
    *   $\frac{\partial}{\partial z}(\sin(x+y+z)) = \cos(x+y+z) \cdot \frac{\partial}{\partial z}(x+y+z) = \cos(x+y+z) \cdot 1$.
    *   So, $\frac{\partial g}{\partial z} = xy e^{xyz} + \cos(x+y+z)$.

**Real-World Application Snippet (CO1 Link):** Consider a thermodynamic system where the internal energy $U$ depends on temperature $T$, pressure $P$, and volume $V$. So, $U = f(T, P, V)$.
*   $\frac{\partial U}{\partial T}$ at constant $P$ and $V$ would give us information related to specific heat at constant volume.
*   $\frac{\partial U}{\partial V}$ at constant $T$ and $P$ relates to how internal energy changes with volume when temperature and pressure are held constant – a concept that appears in equations of state.
*   $\frac{\partial U}{\partial P}$ at constant $T$ and $V$ tells us how internal energy changes with pressure under those specific conditions.

These partial derivatives are the building blocks for understanding more complex relationships in thermodynamics, fluid dynamics, and many other areas of physical science.

### 5. Higher-Order Partial Derivatives

Just like in single-variable calculus, we can differentiate again. If we've found a partial derivative, say $\frac{\partial f}{\partial x}$, we can then take the partial derivative of *that* result with respect to another variable, or even with respect to $x$ again.

Let $f(x, y)$ be a function. The **second-order partial derivatives** are:

*   $\frac{\partial^2 f}{\partial x^2} = \frac{\partial}{\partial x}\left(\frac{\partial f}{\partial x}\right) = f_{xx}(x, y)$
*   $\frac{\partial^2 f}{\partial y^2} = \frac{\partial}{\partial y}\left(\frac{\partial f}{\partial y}\right) = f_{yy}(x, y)$
*   $\frac{\partial^2 f}{\partial y \partial x} = \frac{\partial}{\partial y}\left(\frac{\partial f}{\partial x}\right) = f_{xy}(x, y)$ (Notice the order of differentiation here: first $x$, then $y$)
*   $\frac{\partial^2 f}{\partial x \partial y} = \frac{\partial}{\partial x}\left(\frac{\partial f}{\partial y}\right) = f_{yx}(x, y)$ (Here: first $y$, then $x$)

**Clairaut's Theorem (or Schwarz's Theorem):** A very important result, often discussed in texts like Thomas' Calculus, states that if the second-order partial derivatives $f_{xy}$ and $f_{yx}$ are continuous in an open disk, then at every point in that disk, $f_{xy}(x, y) = f_{yx}(x, y)$.

**What does this mean for us?** For most of the functions you'll encounter in introductory courses, especially those arising from physical models, the order in which you compute mixed partial derivatives doesn't matter. This is a huge simplification! You can choose the order that makes the computation easier.

**Example 3 (Illustrating Clairaut's Theorem):** Let $f(x, y) = x^3y^2 + 5x$.

*   First, find the first partial derivatives:
    *   $\frac{\partial f}{\partial x} = 3x^2y^2 + 5$
    *   $\frac{\partial f}{\partial y} = 2x^3y$

*   Now, find the second partial derivatives:
    *   $f_{xx} = \frac{\partial}{\partial x}(3x^2y^2 + 5) = 6xy^2$ (treating $y$ as constant)
    *   $f_{yy} = \frac{\partial}{\partial y}(2x^3y) = 2x^3$ (treating $x$ as constant)
    *   $f_{xy} = \frac{\partial}{\partial y}(3x^2y^2 + 5) = 6x^2y$ (treating $x$ as constant)
    *   $f_{yx} = \frac{\partial}{\partial x}(2x^3y) = 6x^2y$ (treating $y$ as constant)

As you can see, $f_{xy} = f_{yx} = 6x^2y$. This equality holds because $f_{xy}$ and $f_{yx}$ are continuous everywhere.

**Application to CO1:** Higher-order derivatives are essential for understanding concepts like curvature, optimization (finding maxima and minima), and analyzing the stability of physical systems. For instance, in partial differential equations (PDEs) that model phenomena like heat diffusion or wave propagation, second-order partial derivatives are the core components. For example, the heat equation is often written as $\frac{\partial u}{\partial t} = \alpha \frac{\partial^2 u}{\partial x^2}$, where $u$ is temperature and $x$ is position. Understanding how to compute these derivatives is fundamental.

### 6. Partial Derivatives in a Physical Context

Let's tie this back to the physical sciences and engineering.

**Example: Heat Distribution in a Rod (CO1 Application)**
Imagine a metal rod lying along the x-axis. The temperature at any point $x$ along the rod at time $t$ can be described by a function $T(x, t)$.
*   $\frac{\partial T}{\partial t}$ represents the rate of change of temperature at a fixed point $x$ as time progresses. If it's positive, the point is heating up; if negative, it's cooling down.
*   $\frac{\partial T}{\partial x}$ represents how the temperature changes along the length of the rod at a fixed time $t$. If it's positive, temperature increases as you move along the rod in the positive x-direction. This is related to the heat flux.

If we consider a 2D object, say a heated plate, the temperature $T$ might depend on both position $(x, y)$ and time $t$: $T(x, y, t)$.
*   $\frac{\partial T}{\partial x}$: How temperature changes with movement in the x-direction at a fixed y and t.
*   $\frac{\partial T}{\partial y}$: How temperature changes with movement in the y-direction at a fixed x and t.
*   $\frac{\partial T}{\partial t}$: How temperature changes over time at a fixed point $(x, y)$.

These partial derivatives are the fundamental building blocks for deriving and solving the heat equation in two dimensions: $\frac{\partial T}{\partial t} = \alpha \left(\frac{\partial^2 T}{\partial x^2} + \frac{\partial^2 T}{\partial y^2}\right)$. The term in the parenthesis is called the **Laplacian** of $T$, and it essentially measures how the temperature at a point deviates from the average temperature of its immediate surroundings. This is deeply connected to **CO1** and the analysis of physical phenomena.

**Example: Voltage in an Electrical Circuit (CO1 Application)**
Consider the voltage $V$ in a complex circuit that depends on multiple component values, say resistance $R_1$, capacitance $C$, and inductance $L$. So, $V = f(R_1, C, L)$.
*   $\frac{\partial V}{\partial R_1}$: How sensitive is the voltage to changes in $R_1$, assuming $C$ and $L$ are held constant? This is crucial for understanding how to tune a circuit.
*   $\frac{\partial V}{\partial C}$: How sensitive is the voltage to changes in $C$, assuming $R_1$ and $L$ are held constant?

These sensitivities, represented by partial derivatives, are vital for system design, troubleshooting, and optimization in electrical engineering.

### 7. Key Takeaways and Exam Focus

*   **The Core Rule:** When calculating a partial derivative with respect to one variable, treat *all other variables as constants*. This is the golden rule.
*   **Notation:** Be comfortable with $\frac{\partial f}{\partial x}$, $f_x$, and $f_x(x, y, \dots)$.
*   **Function of More Than Two Variables:** The principle remains the same. If you have $f(x_1, x_2, \dots, x_n)$, then $\frac{\partial f}{\partial x_i}$ means you differentiate with respect to $x_i$ while keeping $x_1, \dots, x_{i-1}, x_{i+1}, \dots, x_n$ constant.
*   **Higher-Order Derivatives:** Pay attention to the order of differentiation. While $f_{xy} = f_{yx}$ often holds (Clairaut's Theorem), it's good practice to be aware of the definition and to check if the condition for equality is met, especially in more advanced contexts. For exams, if the question doesn't specify, assume $f_{xy} = f_{yx}$ unless there's a clear indication otherwise.
*   **Connection to Physics/Engineering:** Always think about what these rates of change physically represent. This understanding is key for applying the concepts, which is a major part of **CO1**. For instance, $\frac{\partial f}{\partial x}$ tells you the rate of change of $f$ along the x-axis, *independent of how $f$ changes along the y-axis*.

Remember, these tools are extensions of what you already know. The 'partial' aspect is simply about isolating the effect of one variable's change on the function's output.

### 8. Sample Questions and Answers

Here are a few questions to test your understanding, covering both conceptual and computational aspects.

**Q1. Conceptual Understanding:**
If the temperature $T$ in a room is a function of your position $(x, y)$ and time $t$, i.e., $T(x, y, t)$, what does the partial derivative $\frac{\partial T}{\partial y}$ represent physically?

**Answer:**
$\frac{\partial T}{\partial y}$ represents the rate at which the temperature is changing at a specific point $(x, y)$ and time $t$, purely due to your movement in the **north-south direction (y-direction)**, assuming you are keeping your east-west position ($x$) and the time ($t$) constant. If $\frac{\partial T}{\partial y}$ is positive, the temperature increases as you move north; if it's negative, the temperature decreases as you move north.

**Q2. Calculation:**
Find all second-order partial derivatives for the function $f(x, y, z) = x^2y - yz^3 + \sin(x)e^y$.

**Answer:**
First, let's find the first-order partial derivatives:
*   $\frac{\partial f}{\partial x} = 2xy + \cos(x)e^y$ (treating $y, z$ as constants)
*   $\frac{\partial f}{\partial y} = x^2 - z^3 + \sin(x)e^y$ (treating $x, z$ as constants)
*   $\frac{\partial f}{\partial z} = -3yz^2$ (treating $x, y$ as constants)

Now, let's find the second-order partial derivatives:

*   **Second derivatives with respect to the same variable:**
    *   $\frac{\partial^2 f}{\partial x^2} = \frac{\partial}{\partial x}(2xy + \cos(x)e^y) = 2y - \sin(x)e^y$
    *   $\frac{\partial^2 f}{\partial y^2} = \frac{\partial}{\partial y}(x^2 - z^3 + \sin(x)e^y) = \sin(x)e^y$
    *   $\frac{\partial^2 f}{\partial z^2} = \frac{\partial}{\partial z}(-3yz^2) = -6yz$

*   **Mixed second derivatives:**
    *   $\frac{\partial^2 f}{\partial y \partial x} = \frac{\partial}{\partial y}(2xy + \cos(x)e^y) = 2x + \cos(x)e^y$
    *   $\frac{\partial^2 f}{\partial x \partial y} = \frac{\partial}{\partial x}(x^2 - z^3 + \sin(x)e^y) = 2x + \cos(x)e^y$
        *   (Note: $\frac{\partial^2 f}{\partial y \partial x} = \frac{\partial^2 f}{\partial x \partial y}$, as expected.)

    *   $\frac{\partial^2 f}{\partial z \partial x} = \frac{\partial}{\partial z}(2xy + \cos(x)e^y) = 0$ (since $y$ and $z$ were already treated as constants for $\frac{\partial f}{\partial x}$)
    *   $\frac{\partial^2 f}{\partial x \partial z} = \frac{\partial}{\partial x}(-3yz^2) = 0$ (since $x$ and $y$ were already treated as constants for $\frac{\partial f}{\partial z}$)
        *   (Note: $\frac{\partial^2 f}{\partial z \partial x} = \frac{\partial^2 f}{\partial x \partial z}$.)

    *   $\frac{\partial^2 f}{\partial z \partial y} = \frac{\partial}{\partial z}(x^2 - z^3 + \sin(x)e^y) = -3z^2$
    *   $\frac{\partial^2 f}{\partial y \partial z} = \frac{\partial}{\partial y}(-3yz^2) = -3z^2$
        *   (Note: $\frac{\partial^2 f}{\partial z \partial y} = \frac{\partial^2 f}{\partial y \partial z}$.)

**Q3. Application Context (Exam-style):**
The power $P$ dissipated in a component depends on the voltage $V$ across it and the current $I$ through it, given by $P(V, I) = VI$. Suppose in a specific circuit, the voltage is controlled by a variable $x$ as $V(x) = 2x^2 + 1$, and the current is controlled by $x$ as $I(x) = 3x - 2$. Find the rate of change of power with respect to $x$, i.e., $\frac{dP}{dx}$, using partial derivatives and the chain rule.

**Answer:**
We have $P = f(V, I)$, where $V = g(x)$ and $I = h(x)$. The power can be seen as a function of $x$ alone: $P(x) = V(x)I(x) = (2x^2+1)(3x-2)$.

We can also use the chain rule for multivariable functions. The chain rule states that:
$\frac{dP}{dx} = \frac{\partial P}{\partial V} \frac{dV}{dx} + \frac{\partial P}{\partial I} \frac{dI}{dx}$

Let's compute each part:
1.  **Partial derivatives of $P$ with respect to $V$ and $I$**:
    *   $P = VI$.
    *   $\frac{\partial P}{\partial V} = I$ (treating $I$ as a constant).
    *   $\frac{\partial P}{\partial I} = V$ (treating $V$ as a constant).

2.  **Ordinary derivatives of $V$ and $I$ with respect to $x$**:
    *   $V(x) = 2x^2 + 1 \implies \frac{dV}{dx} = 4x$.
    *   $I(x) = 3x - 2 \implies \frac{dI}{dx} = 3$.

3.  **Substitute into the chain rule:**
    *   $\frac{dP}{dx} = (I)(4x) + (V)(3)$
    *   $\frac{dP}{dx} = 4xI + 3V$

4.  **Express in terms of $x$**: Now substitute the expressions for $V$ and $I$ back in:
    *   $\frac{dP}{dx} = 4x(3x - 2) + 3(2x^2 + 1)$
    *   $\frac{dP}{dx} = (12x^2 - 8x) + (6x^2 + 3)$
    *   $\frac{dP}{dx} = 18x^2 - 8x + 3$

**Alternative (Direct Calculation):**
We can also find $P(x)$ directly and then differentiate:
$P(x) = (2x^2 + 1)(3x - 2)$
$P(x) = 6x^3 - 4x^2 + 3x - 2$
Now, differentiate with respect to $x$:
$\frac{dP}{dx} = \frac{d}{dx}(6x^3 - 4x^2 + 3x - 2) = 18x^2 - 8x + 3$.
Both methods yield the same result, demonstrating the power and applicability of the chain rule for multivariable functions. This type of problem directly assesses **CO1**.

Keep practicing these calculations, and always remember the fundamental principle of treating other variables as constants! That's the key to mastering partial derivatives.
