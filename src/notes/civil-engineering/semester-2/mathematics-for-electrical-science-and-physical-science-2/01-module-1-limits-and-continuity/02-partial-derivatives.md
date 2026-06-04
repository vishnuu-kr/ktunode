---
title: "Partial derivatives"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2"
module: "Module 1: Limits and continuity"
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912cc1"
status: "completed"
scrapedAt: "2026-05-20T18:36:46.113Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2

## Module 1: Limits and Continuity

### Topic: Partial Derivatives

Welcome to our exploration of partial derivatives! In this section, we’ll be diving into the fascinating world of functions that depend on *more than one* variable. Think of it as moving beyond a simple graph on a 2D plane to understanding landscapes, temperatures across a region, or electrical potentials in space – all things that can change in multiple directions simultaneously. This is a fundamental concept for Electrical and Physical Science students, and understanding it will directly help us achieve **Course Outcome 1 (CO1): Compute the partial and total derivatives and maxima and minima of multivariable functions and to apply in engineering problems.** We'll see how partial derivatives allow us to isolate the effect of changing just *one* variable at a time, which is incredibly powerful for analysis.

#### 1. What are Multivariable Functions?

Before we talk about derivatives, let's clarify what we mean by a multivariable function. In your previous studies, you're likely very familiar with functions like $y = f(x)$, where the output $y$ depends on a single input $x$. For example, the distance traveled by a car ($d$) at a constant speed ($v$) after time ($t$) is $d = vt$. Here, distance depends on two variables, speed and time.

Now, imagine a function $z = f(x, y)$. This means the output $z$ depends on the values of *two* independent variables, $x$ and $y$. For instance:

*   **Temperature on a Plate:** Let $T(x, y)$ represent the temperature at a point $(x, y)$ on a metal plate. The temperature can change as you move horizontally (changing $x$) or vertically (changing $y$).
*   **Height of a Landscape:** Let $h(x, y)$ be the height of a mountain at coordinates $(x, y)$ on a map. The altitude changes as you move east-west (along $x$) or north-south (along $y$).
*   **Electrical Potential:** In electrostatics, the electric potential $V(x, y, z)$ at a point in space is a function of three variables.

These functions are not graphed on a simple 2D plane anymore. Their graphs live in three dimensions (for $z=f(x,y)$) or even higher dimensions, making them surfaces or hypersurfaces.

#### 2. The Intuition Behind Partial Derivatives: Isolating Change

So, if our function depends on multiple variables, how do we talk about its "rate of change"? We can't just take "the" derivative in the singular sense anymore. This is where partial derivatives come in. The core idea of a partial derivative is to consider the rate of change of the multivariable function with respect to *one specific variable*, while treating *all other independent variables as constants*.

Think back to our temperature example, $T(x, y)$.
*   If we want to know how the temperature changes as we move *only horizontally* (along the $x$-axis), we are essentially asking about the rate of change of $T$ with respect to $x$. During this process, we are keeping our position along the $y$-axis fixed.
*   Similarly, if we want to know how the temperature changes as we move *only vertically* (along the $y$-axis), we are asking about the rate of change of $T$ with respect to $y$. Here, our position along the $x$-axis is kept constant.

This concept of holding other variables constant is precisely what defines a partial derivative. It allows us to "slice" our multivariable function and examine its behavior along a single axis, much like how a single-variable derivative describes the slope of a curve.

#### 3. Defining Partial Derivatives

Let's formalize this. If we have a function $z = f(x, y)$, the **partial derivative of $f$ with respect to $x$** at the point $(x, y)$ is denoted by $\frac{\partial z}{\partial x}$ or $f_x(x, y)$. It is defined using a limit, analogous to the single-variable derivative:

$$ \frac{\partial f}{\partial x} = \lim_{h \to 0} \frac{f(x+h, y) - f(x, y)}{h} $$

Notice that in the expression $f(x+h, y)$, we only change the $x$-coordinate. The $y$-coordinate remains unchanged. This is the key!

Similarly, the **partial derivative of $f$ with respect to $y$** at the point $(x, y)$ is denoted by $\frac{\partial z}{\partial y}$ or $f_y(x, y)$:

$$ \frac{\partial f}{\partial y} = \lim_{k \to 0} \frac{f(x, y+k) - f(x, y)}{k} $$

Here, we only change the $y$-coordinate, keeping $x$ constant.

These definitions, found in texts like *Calculus by Anton, Biven, Davis* and *Thomas' Calculus*, are the formal bedrock. But how do we *calculate* them without always resorting to the limit definition?

#### 4. How to Compute Partial Derivatives (The Practical Approach)

The beauty of the limit definition is that it allows us to develop a simple computational rule. To find the partial derivative of $f(x, y)$ with respect to $x$, you simply **treat $y$ as a constant and differentiate $f$ with respect to $x$ as usual**. All terms involving $y$ are treated like any other constant (like 5, or $\pi$).

Conversely, to find the partial derivative of $f(x, y)$ with respect to $y$, you **treat $x$ as a constant and differentiate $f$ with respect to $y$ as usual**.

Let's try some examples to solidify this.

**Example 1: A Simple Polynomial**

Suppose $f(x, y) = x^2y^3 + 5x - 2y + 7$.

To find $\frac{\partial f}{\partial x}$:
We treat $y$ as a constant.
The term $x^2y^3$: $y^3$ is a constant, so we differentiate $x^2$ with respect to $x$, getting $2x$. Multiply by the constant $y^3$: $2xy^3$.
The term $5x$: Differentiating $5x$ with respect to $x$ gives $5$.
The term $-2y$: This is a constant with respect to $x$, so its derivative is $0$.
The term $7$: This is also a constant, so its derivative is $0$.

Therefore, $\frac{\partial f}{\partial x} = 2xy^3 + 5$.

To find $\frac{\partial f}{\partial y}$:
We treat $x$ as a constant.
The term $x^2y^3$: $x^2$ is a constant, so we differentiate $y^3$ with respect to $y$, getting $3y^2$. Multiply by the constant $x^2$: $3x^2y^2$.
The term $5x$: This is a constant with respect to $y$, so its derivative is $0$.
The term $-2y$: Differentiating $-2y$ with respect to $y$ gives $-2$.
The term $7$: This is a constant, so its derivative is $0$.

Therefore, $\frac{\partial f}{\partial y} = 3x^2y^2 - 2$.

**Example 2: A Function with Trigonometric and Exponential Terms**

Let $g(x, y) = e^{xy} \sin(x)$.

To find $\frac{\partial g}{\partial x}$:
Here we have a product of two functions of $x$, $e^{xy}$ and $\sin(x)$, but we must remember that $y$ is treated as a constant within $e^{xy}$.
We use the product rule: $(uv)' = u'v + uv'$.
Let $u = e^{xy}$ and $v = \sin(x)$.
To find $u'$, we need the chain rule. The derivative of $e^{ax}$ is $ae^{ax}$. Here, our "exponent" is $xy$. When differentiating with respect to $x$, $y$ is a constant. So, $\frac{\partial}{\partial x}(e^{xy}) = y e^{xy}$.
The derivative of $v = \sin(x)$ with respect to $x$ is $\cos(x)$.

Applying the product rule:
$\frac{\partial g}{\partial x} = \left(y e^{xy}\right) \sin(x) + \left(e^{xy}\right) \cos(x)$
$\frac{\partial g}{\partial x} = ye^{xy}\sin(x) + e^{xy}\cos(x)$

To find $\frac{\partial g}{\partial y}$:
Now, we treat $x$ as a constant.
The term $e^{xy}$: When differentiating with respect to $y$, $x$ is a constant. So, $\frac{\partial}{\partial y}(e^{xy}) = x e^{xy}$.
The term $\sin(x)$: This is a constant with respect to $y$, so its derivative is $0$.

Therefore, $\frac{\partial g}{\partial y} = x e^{xy} \cdot 0 = 0$. Wait, that's not quite right. The $\sin(x)$ term *is* part of the function. Let's re-evaluate:

$g(x, y) = e^{xy} \sin(x)$.
When differentiating with respect to $y$, $x$ is constant. So, $\sin(x)$ is effectively a constant multiplier. The part that depends on $y$ is $e^{xy}$.
We already found $\frac{\partial}{\partial y}(e^{xy}) = x e^{xy}$.
So, $\frac{\partial g}{\partial y} = \left(x e^{xy}\right) \sin(x)$. This is the correct approach!

**Remember this:** The key is to identify which variable you are differentiating with respect to and treat all other variables as constants during that specific differentiation process. This is crucial for all our calculations.

#### 5. Higher-Order Partial Derivatives

Just like with single-variable calculus, we can take partial derivatives multiple times. These are called higher-order partial derivatives.

For a function $z = f(x, y)$, we can find:
*   Second partial derivatives:
    *   $\frac{\partial^2 z}{\partial x^2} = \frac{\partial}{\partial x}\left(\frac{\partial z}{\partial x}\right) = f_{xx}(x, y)$
    *   $\frac{\partial^2 z}{\partial y^2} = \frac{\partial}{\partial y}\left(\frac{\partial z}{\partial y}\right) = f_{yy}(x, y)$
    *   $\frac{\partial^2 z}{\partial y \partial x} = \frac{\partial}{\partial y}\left(\frac{\partial z}{\partial x}\right) = f_{xy}(x, y)$
    *   $\frac{\partial^2 z}{\partial x \partial y} = \frac{\partial}{\partial x}\left(\frac{\partial z}{\partial y}\right) = f_{yx}(x, y)$

The last two are called **mixed partial derivatives**. A very important theorem in multivariable calculus, **Clairaut's Theorem** (also known as Schwarz's Theorem), states that if the mixed partial derivatives $f_{xy}$ and $f_{yx}$ are continuous in an open disk, then they are equal within that disk: $f_{xy} = f_{yx}$. This is a powerful simplification, especially in applied problems where continuity is usually assumed. Most functions you'll encounter in engineering and physics will satisfy this condition.

Let's compute these for our first example: $f(x, y) = x^2y^3 + 5x - 2y + 7$.
We found:
$\frac{\partial f}{\partial x} = 2xy^3 + 5$
$\frac{\partial f}{\partial y} = 3x^2y^2 - 2$

Now, let's find the second derivatives:
*   $f_{xx} = \frac{\partial}{\partial x}(2xy^3 + 5) = 2y^3$ (treating $y$ as constant)
*   $f_{yy} = \frac{\partial}{\partial y}(3x^2y^2 - 2) = 6x^2y$ (treating $x$ as constant)
*   $f_{xy} = \frac{\partial}{\partial y}(2xy^3 + 5) = 6xy^2$ (treating $x$ as constant)
*   $f_{yx} = \frac{\partial}{\partial x}(3x^2y^2 - 2) = 6xy^2$ (treating $y$ as constant)

As expected by Clairaut's Theorem, $f_{xy} = f_{yx} = 6xy^2$. This is a good check for your calculations!

We can also have third, fourth, and so on, order partial derivatives. For instance, $f_{xxx} = \frac{\partial^3 f}{\partial x^3}$.

#### 6. Applications in Science and Engineering (Connecting to CO1)

This is where partial derivatives truly shine and directly link to **Course Outcome 1**. They are fundamental tools for modeling and understanding phenomena where multiple factors influence an outcome.

*   **Rate of Change in Physical Systems:**
    *   **Heat Transfer:** The rate of heat flow through a material is often described by the heat equation, which involves partial derivatives. For example, in one dimension, $\frac{\partial T}{\partial t} = \alpha \frac{\partial^2 T}{\partial x^2}$, where $T$ is temperature, $t$ is time, $x$ is position, and $\alpha$ is thermal diffusivity. $\frac{\partial T}{\partial t}$ represents how quickly temperature changes over time at a fixed point, while $\frac{\partial^2 T}{\partial x^2}$ describes how the rate of temperature change varies across space.
    *   **Fluid Dynamics:** Equations like the Navier-Stokes equations, which describe fluid motion, are heavily reliant on partial derivatives. They capture how velocity, pressure, and density change with position and time.
    *   **Electromagnetism:** Maxwell's equations, the foundation of classical electromagnetism, are a system of partial differential equations that describe how electric and magnetic fields propagate. For example, Faraday's Law of Induction in its differential form is $\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}$, showing the relationship between the curl of the electric field and the rate of change of the magnetic field.

*   **Optimization Problems (Maxima and Minima):**
    *   To find the maximum or minimum values of a function $z = f(x, y)$, we look for critical points. These are points where the "slope" in all directions is zero. In multivariable calculus, this means finding points where *both* $\frac{\partial f}{\partial x} = 0$ *and* $\frac{\partial f}{\partial y} = 0$. This is a direct application of partial derivatives to solving optimization problems, a key part of **CO1**. Once we find these critical points, we use the second derivative test (which involves second-order partial derivatives like $f_{xx}$, $f_{yy}$, and $f_{xy}$) to classify them as local maxima, minima, or saddle points.

*   **Sensitivity Analysis:**
    *   Imagine you're designing an electronic circuit. The output voltage might depend on several input parameters (resistance, voltage source, etc.). Partial derivatives tell you how sensitive the output is to small changes in each individual input parameter. For instance, $\frac{\partial V_{out}}{\partial R}$ tells you how much the output voltage changes for a unit change in resistance, assuming other parameters are held constant. This is vital for understanding component tolerances and circuit performance.

**Analogy:** Consider a chef trying to perfect a recipe for a complex dish. The taste of the dish might depend on the amount of salt ($s$) and the cooking time ($t$).
*   The partial derivative with respect to salt, $\frac{\partial Taste}{\partial s}$, tells the chef how the taste changes if they add a pinch more salt while keeping the cooking time the same.
*   The partial derivative with respect to time, $\frac{\partial Taste}{\partial t}$, tells the chef how the taste changes if they cook it for an extra minute, keeping the salt amount the same.
By understanding these individual effects, the chef can adjust the recipe more effectively to achieve the perfect balance of flavors and texture.

#### 7. Partial Derivatives for Functions of More Than Two Variables

The concept extends seamlessly to functions with three or more independent variables, such as $f(x, y, w)$.

If $f(x, y, w)$, then:
*   $\frac{\partial f}{\partial x}$ is found by treating $y$ and $w$ as constants.
*   $\frac{\partial f}{\partial y}$ is found by treating $x$ and $w$ as constants.
*   $\frac{\partial f}{\partial w}$ is found by treating $x$ and $y$ as constants.

The number of partial derivatives corresponds to the number of independent variables. For $f(x, y, w)$, we have three first-order partial derivatives.

**Example 3: A Function of Three Variables**

Let $P(V, T, n) = \frac{nRT}{V}$ (the ideal gas law, where $P$ is pressure, $V$ is volume, $T$ is temperature, $n$ is the number of moles, and $R$ is the gas constant).
Let's treat $R$ as a constant for now.
We can find the partial derivative of pressure with respect to each of these variables:

*   $\frac{\partial P}{\partial V}$ (Isothermal compressibility): Treat $n, R, T$ as constants.
    $P = nRT \cdot V^{-1}$
    $\frac{\partial P}{\partial V} = nRT \cdot (-1)V^{-2} = -\frac{nRT}{V^2}$
    This tells us how pressure changes if we change the volume, keeping temperature and the amount of gas constant.

*   $\frac{\partial P}{\partial T}$ (Thermal expansion): Treat $n, R, V$ as constants.
    $P = \frac{nR}{V} \cdot T$
    $\frac{\partial P}{\partial T} = \frac{nR}{V}$
    This tells us how pressure changes if we increase the temperature, keeping volume and amount of gas constant.

*   $\frac{\partial P}{\partial n}$ (Dependence on amount of gas): Treat $R, V, T$ as constants.
    $P = \frac{RT}{V} \cdot n$
    $\frac{\partial P}{\partial n} = \frac{RT}{V}$
    This tells us how pressure changes if we add more gas molecules, keeping volume and temperature constant.

These partial derivatives are crucial for understanding the thermodynamic behavior of gases.

#### 8. Common Pitfalls and Exam Tips

*   **Confusing variables:** Always be absolutely clear about which variable you are differentiating with respect to. A common mistake is to accidentally differentiate with respect to a variable you meant to hold constant.
*   **Forgetting the chain rule:** When differentiating composite functions within a multivariable context (like $e^{xy}$ with respect to $x$), remember the chain rule applies to the "inner" function's derivative with respect to the chosen variable.
*   **Applying Clairaut's Theorem without justification:** While usually true in practice, technically, Clairaut's Theorem requires the mixed partials to be continuous. For exams, unless a function is explicitly pathological, you can assume this holds. However, understanding the condition is good.
*   **Optimization problems:** When asked to find maxima/minima, remember the first step is always to find critical points by setting *all* first partial derivatives to zero. Don't just set one to zero.

**Exam Focus:** Expect questions that require you to compute first and second partial derivatives for various function types (polynomials, trigonometric, exponential, logarithmic, combinations). You will likely be asked to evaluate these derivatives at specific points. Optimization problems requiring the identification of critical points are also very common. Applying these concepts to simple physical scenarios (like rates of change of quantities) will also be tested, directly hitting **CO1**.

#### 9. Summary of Key Concepts

*   **Multivariable Function:** A function whose output depends on two or more independent input variables.
*   **Partial Derivative:** The rate of change of a multivariable function with respect to one specific variable, while holding all other independent variables constant.
*   **Notation:** $\frac{\partial f}{\partial x}$, $f_x$, $\frac{\partial^2 f}{\partial y \partial x}$, $f_{xy}$.
*   **Computation:** Treat all variables *other than* the differentiation variable as constants.
*   **Clairaut's Theorem:** For continuous mixed partial derivatives, $f_{xy} = f_{yx}$.
*   **Applications:** Essential for understanding rates of change, optimization, and modeling in physical sciences and engineering.

### Sample Questions and Answers

**Q1. Conceptual Understanding:**
Explain the fundamental difference between a total derivative and a partial derivative in the context of a function $z = f(x, y)$, where both $x$ and $y$ might also depend on another variable, say $t$.

**Answer:**
A **partial derivative**, like $\frac{\partial z}{\partial x}$, measures the rate of change of $z$ with respect to $x$ *only*, assuming $y$ is held constant. It tells us about the change along a specific direction in the input space (the $x$-direction, for instance) on the surface $z=f(x,y)$.
A **total derivative**, on the other hand, accounts for changes in $z$ that occur both directly due to changes in $x$ and *indirectly* through changes in $y$ (if $y$ itself depends on $x$). For example, if $z=f(x,y)$ and $y=g(x)$, the total derivative $\frac{dz}{dx}$ would include both $\frac{\partial z}{\partial x}\frac{dx}{dx}$ and $\frac{\partial z}{\partial y}\frac{dy}{dx}$. In essence, partial derivatives isolate the effect of one variable, while the total derivative considers the combined effect when variables are interdependent. This distinction is key for understanding rates of change in dynamic systems.

**Q2. Computation and Evaluation:**
Find the first-order partial derivatives of the function $f(x, y) = \ln(x^2 + y^2) + \arctan(y/x)$. Evaluate these at the point $(1, 1)$.

**Solution:**
Let $f(x, y) = \ln(x^2 + y^2) + \arctan(y/x)$.

To find $\frac{\partial f}{\partial x}$:
Treat $y$ as a constant.
For $\ln(x^2 + y^2)$: Derivative is $\frac{1}{x^2 + y^2} \cdot \frac{\partial}{\partial x}(x^2 + y^2) = \frac{2x}{x^2 + y^2}$.
For $\arctan(y/x)$: Derivative is $\frac{1}{1 + (y/x)^2} \cdot \frac{\partial}{\partial x}(y/x)$.
$\frac{\partial}{\partial x}(y/x) = \frac{\partial}{\partial x}(yx^{-1}) = y(-1)x^{-2} = -\frac{y}{x^2}$.
So, the derivative of $\arctan(y/x)$ is $\frac{1}{1 + y^2/x^2} \cdot (-\frac{y}{x^2}) = \frac{x^2}{x^2 + y^2} \cdot (-\frac{y}{x^2}) = -\frac{y}{x^2 + y^2}$.

Combining these:
$\frac{\partial f}{\partial x} = \frac{2x}{x^2 + y^2} - \frac{y}{x^2 + y^2} = \frac{2x - y}{x^2 + y^2}$.

Now evaluate at $(1, 1)$:
$\frac{\partial f}{\partial x}\Big|_{(1,1)} = \frac{2(1) - 1}{1^2 + 1^2} = \frac{1}{2}$.

To find $\frac{\partial f}{\partial y}$:
Treat $x$ as a constant.
For $\ln(x^2 + y^2)$: Derivative is $\frac{1}{x^2 + y^2} \cdot \frac{\partial}{\partial y}(x^2 + y^2) = \frac{2y}{x^2 + y^2}$.
For $\arctan(y/x)$: Derivative is $\frac{1}{1 + (y/x)^2} \cdot \frac{\partial}{\partial y}(y/x)$.
$\frac{\partial}{\partial y}(y/x) = \frac{1}{x}$.
So, the derivative of $\arctan(y/x)$ is $\frac{1}{1 + y^2/x^2} \cdot (\frac{1}{x}) = \frac{x^2}{x^2 + y^2} \cdot (\frac{1}{x}) = \frac{x}{x^2 + y^2}$.

Combining these:
$\frac{\partial f}{\partial y} = \frac{2y}{x^2 + y^2} + \frac{x}{x^2 + y^2} = \frac{2y + x}{x^2 + y^2}$.

Now evaluate at $(1, 1)$:
$\frac{\partial f}{\partial y}\Big|_{(1,1)} = \frac{2(1) + 1}{1^2 + 1^2} = \frac{3}{2}$.

**Q3. Second-Order Partial Derivatives and Clairaut's Theorem:**
For the function $g(x, y) = x^3y^2 + \cos(xy)$, compute $g_{xy}$ and $g_{yx}$ and verify Clairaut's Theorem.

**Solution:**
Let $g(x, y) = x^3y^2 + \cos(xy)$.

First, find the first partial derivatives:
*   $g_x = \frac{\partial}{\partial x}(x^3y^2 + \cos(xy))$
    Treat $y$ as constant.
    $\frac{\partial}{\partial x}(x^3y^2) = 3x^2y^2$.
    $\frac{\partial}{\partial x}(\cos(xy)) = -\sin(xy) \cdot y = -y\sin(xy)$ (using chain rule, derivative of $xy$ w.r.t. $x$ is $y$).
    So, $g_x = 3x^2y^2 - y\sin(xy)$.

*   $g_y = \frac{\partial}{\partial y}(x^3y^2 + \cos(xy))$
    Treat $x$ as constant.
    $\frac{\partial}{\partial y}(x^3y^2) = x^3(2y) = 2x^3y$.
    $\frac{\partial}{\partial y}(\cos(xy)) = -\sin(xy) \cdot x = -x\sin(xy)$ (using chain rule, derivative of $xy$ w.r.t. $y$ is $x$).
    So, $g_y = 2x^3y - x\sin(xy)$.

Now, compute the second partial derivatives:
*   $g_{xy} = \frac{\partial}{\partial y}(g_x) = \frac{\partial}{\partial y}(3x^2y^2 - y\sin(xy))$
    Treat $x$ as constant.
    $\frac{\partial}{\partial y}(3x^2y^2) = 3x^2(2y) = 6x^2y$.
    $\frac{\partial}{\partial y}(-y\sin(xy))$: Use product rule. Derivative of $-y$ is $-1$, derivative of $\sin(xy)$ is $\cos(xy) \cdot x = x\cos(xy)$.
    So, $\frac{\partial}{\partial y}(-y\sin(xy)) = (-1)\sin(xy) + (-y)(x\cos(xy)) = -\sin(xy) - xy\cos(xy)$.
    Therefore, $g_{xy} = 6x^2y - \sin(xy) - xy\cos(xy)$.

*   $g_{yx} = \frac{\partial}{\partial x}(g_y) = \frac{\partial}{\partial x}(2x^3y - x\sin(xy))$
    Treat $y$ as constant.
    $\frac{\partial}{\partial x}(2x^3y) = 2(3x^2)y = 6x^2y$.
    $\frac{\partial}{\partial x}(-x\sin(xy))$: Use product rule. Derivative of $-x$ is $-1$, derivative of $\sin(xy)$ is $\cos(xy) \cdot y = y\cos(xy)$.
    So, $\frac{\partial}{\partial x}(-x\sin(xy)) = (-1)\sin(xy) + (-x)(y\cos(xy)) = -\sin(xy) - xy\cos(xy)$.
    Therefore, $g_{yx} = 6x^2y - \sin(xy) - xy\cos(xy)$.

**Verification of Clairaut's Theorem:**
We found $g_{xy} = 6x^2y - \sin(xy) - xy\cos(xy)$ and $g_{yx} = 6x^2y - \sin(xy) - xy\cos(xy)$.
Since $g_{xy} = g_{yx}$, Clairaut's Theorem is verified for this function. The mixed partial derivatives are continuous for all $(x,y)$ since $g(x,y)$ is composed of continuous functions and their derivatives are also continuous.

**Q4. Application in a Physical Scenario:**
The temperature $T$ on a metal plate is given by $T(x, y) = 100 e^{-x^2 - y^2}$, where $x$ and $y$ are distances in meters.
a) Find the rate of change of temperature with respect to distance $x$ at the point $(1, 1)$.
b) Find the rate of change of temperature with respect to distance $y$ at the point $(1, 1)$.
c) Interpret these results in terms of heat flow.

**Solution:**
$T(x, y) = 100 e^{-x^2 - y^2}$

a) To find the rate of change of temperature with respect to $x$, we compute $\frac{\partial T}{\partial x}$:
Treat $y$ as a constant.
$\frac{\partial T}{\partial x} = 100 \cdot e^{-x^2 - y^2} \cdot \frac{\partial}{\partial x}(-x^2 - y^2)$
$\frac{\partial T}{\partial x} = 100 e^{-x^2 - y^2} \cdot (-2x)$
$\frac{\partial T}{\partial x} = -200x e^{-x^2 - y^2}$.

Evaluate at $(1, 1)$:
$\frac{\partial T}{\partial x}\Big|_{(1,1)} = -200(1) e^{-(1)^2 - (1)^2} = -200 e^{-2}$.
The rate of change of temperature with respect to $x$ at $(1,1)$ is $-200 e^{-2}$ degrees Celsius per meter (assuming Celsius and meters). The negative sign indicates that as $x$ increases at $(1,1)$, the temperature decreases.

b) To find the rate of change of temperature with respect to $y$, we compute $\frac{\partial T}{\partial y}$:
Treat $x$ as a constant.
$\frac{\partial T}{\partial y} = 100 \cdot e^{-x^2 - y^2} \cdot \frac{\partial}{\partial y}(-x^2 - y^2)$
$\frac{\partial T}{\partial y} = 100 e^{-x^2 - y^2} \cdot (-2y)$
$\frac{\partial T}{\partial y} = -200y e^{-x^2 - y^2}$.

Evaluate at $(1, 1)$:
$\frac{\partial T}{\partial y}\Big|_{(1,1)} = -200(1) e^{-(1)^2 - (1)^2} = -200 e^{-2}$.
The rate of change of temperature with respect to $y$ at $(1,1)$ is $-200 e^{-2}$ degrees Celsius per meter. The negative sign indicates that as $y$ increases at $(1,1)$, the temperature also decreases.

c) **Interpretation:**
These partial derivatives represent the **local temperature gradient** along the $x$ and $y$ directions at the point $(1,1)$.
The value $-200 e^{-2}$ in both cases indicates that at the point $(1,1)$, the temperature is decreasing at the same rate as you move horizontally along the $x$-axis or vertically along the $y$-axis. This suggests that the hottest part of the plate is likely near the origin $(0,0)$, and the temperature drops off symmetrically as you move away in any direction. In terms of heat flow, heat naturally flows from regions of higher temperature to regions of lower temperature. Therefore, at point $(1,1)$, there is a net flow of heat *away* from this point in both the positive $x$ and positive $y$ directions (because the temperature is decreasing in those directions).
