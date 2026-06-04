---
title: "Partial derivatives of functions with more than two variables"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 2"
module: "Module 1: Limits and continuity"
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f9828"
status: "completed"
scrapedAt: "2026-05-23T16:08:00.796Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 2

## Module 1: Limits and Continuity

### Topic: Partial Derivatives of Functions with More Than Two Variables

Welcome, everyone! Today, we're diving into a fascinating extension of the derivative concept that's absolutely crucial for understanding how complex systems in electrical science and physical science change. We've already become familiar with ordinary derivatives for functions of a single variable, which tell us the rate of change with respect to that one variable. But in our field, many quantities depend on *multiple* factors simultaneously. Think about the temperature of a room, which depends on its position (x, y, z coordinates) *and* time (t). Or the voltage across a component, which might depend on current, temperature, and even humidity. For these situations, we need **partial derivatives**.

Our journey today will focus on extending this idea to functions with *more than two* variables. This is directly related to our **Course Outcome 1 (CO1)**, which aims to equip you to "Compute the partial and total derivatives and maxima and minima of multivariable functions and to apply in engineering problems." Understanding partial derivatives is the foundational step for tackling those more complex computations and applications.

Let's start by recapping what we know.

### 1. A Quick Refresher: Partial Derivatives for Functions of Two Variables

Imagine you're hiking on a mountain. Your altitude, let's call it $z$, depends on your position on the map, say your east-west position $x$ and your north-south position $y$. So, we have a function $z = f(x, y)$.

When we talk about the "rate of change" of altitude, it's a bit ambiguous. Are we interested in how the altitude changes as we move purely east, keeping our north-south position constant? Or are we interested in how it changes as we move purely north, keeping our east-west position constant?

This is precisely where partial derivatives come in.

*   The **partial derivative of $f$ with respect to $x$**, denoted as $\frac{\partial f}{\partial x}$ or $f_x(x, y)$, tells us the rate of change of $f$ *only* as $x$ changes, while holding $y$ *constant*. In our mountain analogy, this is like asking, "If I walk directly east, how steep is the slope at my current location?"

*   Similarly, the **partial derivative of $f$ with respect to $y$**, denoted as $\frac{\partial f}{\partial y}$ or $f_y(x, y)$, tells us the rate of change of $f$ *only* as $y$ changes, while holding $x$ *constant*. This is like asking, "If I walk directly north, how steep is the slope?"

**The key trick for calculating partial derivatives is simple: Treat all other variables as constants.**

For example, if $f(x, y) = x^2y + \sin(xy)$,
To find $\frac{\partial f}{\partial x}$, we treat $y$ as a constant:
$\frac{\partial f}{\partial x} = \frac{\partial}{\partial x}(x^2y) + \frac{\partial}{\partial x}(\sin(xy))$
$\frac{\partial f}{\partial x} = y \cdot (2x) + \cos(xy) \cdot y$ (using the chain rule for $\sin(xy)$ where $y$ is treated as a constant multiplier inside the sine function)
$\frac{\partial f}{\partial x} = 2xy + y\cos(xy)$

To find $\frac{\partial f}{\partial y}$, we treat $x$ as a constant:
$\frac{\partial f}{\partial y} = \frac{\partial}{\partial y}(x^2y) + \frac{\partial}{\partial y}(\sin(xy))$
$\frac{\partial f}{\partial y} = x^2 \cdot (1) + \cos(xy) \cdot x$ (using the chain rule for $\sin(xy)$ where $x$ is treated as a constant multiplier)
$\frac{\partial f}{\partial y} = x^2 + x\cos(xy)$

This fundamental principle—**treating other variables as constants**—is the cornerstone as we move to more variables.

### 2. Extending to Functions with More Than Two Variables

Now, let's say our system is even more complex. We might have a function that depends on three variables, say $w = f(x, y, z)$. Or perhaps even four, five, or more variables. For instance, consider the power dissipated in a circuit, $P$, which could depend on voltage $V$, current $I$, and temperature $T$. So, $P = f(V, I, T)$.

If we want to understand how the power changes *only* when we adjust the voltage, keeping the current and temperature fixed, we need the partial derivative of $P$ with respect to $V$.

The definition remains beautifully consistent:

*   The **partial derivative of $f$ with respect to $x$** ($\frac{\partial f}{\partial x}$ or $f_x$) is the rate of change of $f$ as $x$ changes, with all other independent variables ($y, z, \dots$) held constant.

*   The **partial derivative of $f$ with respect to $y$** ($\frac{\partial f}{\partial y}$ or $f_y$) is the rate of change of $f$ as $y$ changes, with all other independent variables ($x, z, \dots$) held constant.

*   And so on for every independent variable.

Let's solidify this with an example.

**Example 1: A Function of Three Variables**

Consider the function $f(x, y, z) = x^3y^2z + e^{xyz}$.

We want to find the partial derivatives with respect to each variable: $\frac{\partial f}{\partial x}$, $\frac{\partial f}{\partial y}$, and $\frac{\partial f}{\partial z}$.

**Finding $\frac{\partial f}{\partial x}$:**
Here, we treat $y$ and $z$ as constants.
$\frac{\partial f}{\partial x} = \frac{\partial}{\partial x}(x^3y^2z) + \frac{\partial}{\partial x}(e^{xyz})$

For the first term, $y^2z$ is a constant multiplier:
$\frac{\partial}{\partial x}(x^3y^2z) = y^2z \cdot \frac{\partial}{\partial x}(x^3) = y^2z \cdot (3x^2) = 3x^2y^2z$.

For the second term, $e^{xyz}$, we use the chain rule. Let $u = xyz$. Since we're differentiating with respect to $x$, we treat $y$ and $z$ as constants, so $\frac{\partial u}{\partial x} = yz$.
$\frac{\partial}{\partial x}(e^{xyz}) = e^{xyz} \cdot \frac{\partial}{\partial x}(xyz) = e^{xyz} \cdot (yz)$.

Combining these, we get:
$\frac{\partial f}{\partial x} = 3x^2y^2z + yze^{xyz}$.

**Finding $\frac{\partial f}{\partial y}$:**
Now, we treat $x$ and $z$ as constants.
$\frac{\partial f}{\partial y} = \frac{\partial}{\partial y}(x^3y^2z) + \frac{\partial}{\partial y}(e^{xyz})$

For the first term, $x^3z$ is a constant multiplier:
$\frac{\partial}{\partial y}(x^3y^2z) = x^3z \cdot \frac{\partial}{\partial y}(y^2) = x^3z \cdot (2y) = 2x^3yz$.

For the second term, $e^{xyz}$, let $u = xyz$. Since we're differentiating with respect to $y$, we treat $x$ and $z$ as constants, so $\frac{\partial u}{\partial y} = xz$.
$\frac{\partial}{\partial y}(e^{xyz}) = e^{xyz} \cdot \frac{\partial}{\partial y}(xyz) = e^{xyz} \cdot (xz)$.

Combining these, we get:
$\frac{\partial f}{\partial y} = 2x^3yz + xze^{xyz}$.

**Finding $\frac{\partial f}{\partial z}$:**
Finally, we treat $x$ and $y$ as constants.
$\frac{\partial f}{\partial z} = \frac{\partial}{\partial z}(x^3y^2z) + \frac{\partial}{\partial z}(e^{xyz})$

For the first term, $x^3y^2$ is a constant multiplier:
$\frac{\partial}{\partial z}(x^3y^2z) = x^3y^2 \cdot \frac{\partial}{\partial z}(z) = x^3y^2 \cdot (1) = x^3y^2$.

For the second term, $e^{xyz}$, let $u = xyz$. Since we're differentiating with respect to $z$, we treat $x$ and $y$ as constants, so $\frac{\partial u}{\partial z} = xy$.
$\frac{\partial}{\partial z}(e^{xyz}) = e^{xyz} \cdot \frac{\partial}{\partial z}(xyz) = e^{xyz} \cdot (xy)$.

Combining these, we get:
$\frac{\partial f}{\partial z} = x^3y^2 + xye^{xyz}$.

See? The underlying principle is the same. You just have more "constants" to keep track of. This aligns directly with **CO1**, as calculating these partial derivatives is the first step in understanding how a quantity changes with respect to each input parameter, which is vital for engineering applications.

### 3. Notation and Common Practices

The notation $\frac{\partial f}{\partial x}$ is standard and clear. Sometimes you'll see it written with subscripts, like $f_x$. For functions of multiple variables, you might also see notation like $\frac{\partial}{\partial x} f(x, y, z)$ or $D_x f(x, y, z)$.

For a function $w = f(x_1, x_2, \dots, x_n)$, the partial derivative with respect to $x_i$ is denoted by $\frac{\partial f}{\partial x_i}$ or $f_{x_i}$.

**Remember this:** When you see $\frac{\partial}{\partial x_i}$, your brain should immediately switch to "hold all other variables ($x_j$ where $j \neq i$) constant." This is the golden rule.

### 4. Higher-Order Partial Derivatives

Just as we had second-order derivatives ($f''(x)$) for functions of a single variable, we can also compute higher-order partial derivatives for functions of multiple variables. These tell us about the *rate of change of the rate of change*.

For a function $f(x, y, z)$:

*   **Second-order partial derivatives** include:
    *   $\frac{\partial^2 f}{\partial x^2} = \frac{\partial}{\partial x}\left(\frac{\partial f}{\partial x}\right) = f_{xx}$
    *   $\frac{\partial^2 f}{\partial y^2} = \frac{\partial}{\partial y}\left(\frac{\partial f}{\partial y}\right) = f_{yy}$
    *   $\frac{\partial^2 f}{\partial z^2} = \frac{\partial}{\partial z}\left(\frac{\partial f}{\partial z}\right) = f_{zz}$

*   And the **mixed partial derivatives**:
    *   $\frac{\partial^2 f}{\partial y \partial x} = \frac{\partial}{\partial y}\left(\frac{\partial f}{\partial x}\right) = f_{xy}$
    *   $\frac{\partial^2 f}{\partial x \partial y} = \frac{\partial}{\partial x}\left(\frac{\partial f}{\partial y}\right) = f_{yx}$
    *   $\frac{\partial^2 f}{\partial z \partial x} = \frac{\partial}{\partial z}\left(\frac{\partial f}{\partial x}\right) = f_{xz}$
    *   $\frac{\partial^2 f}{\partial x \partial z} = \frac{\partial}{\partial x}\left(\frac{\partial f}{\partial z}\right) = f_{zx}$
    *   $\frac{\partial^2 f}{\partial z \partial y} = \frac{\partial}{\partial z}\left(\frac{\partial f}{\partial y}\right) = f_{yz}$
    *   $\frac{\partial^2 f}{\partial y \partial z} = \frac{\partial}{\partial y}\left(\frac{\partial f}{\partial z}\right) = f_{zy}$

**A Crucial Theorem: Clairaut's Theorem (or Schwarz's Theorem)**

This is a very important result, particularly relevant to **CO1** and many advanced applications. Clairaut's Theorem states that if the second partial derivatives ($f_{xy}$ and $f_{yx}$) are continuous in an open disk containing $(a,b)$, then $f_{xy}(a,b) = f_{yx}(a,b)$.

In simpler terms, for "nice" functions (and most functions you'll encounter in physics and engineering are nice!), the order in which you take the mixed partial derivatives doesn't matter. So, $\frac{\partial^2 f}{\partial y \partial x}$ will be the same as $\frac{\partial^2 f}{\partial x \partial y}$. This is incredibly convenient because it means we only need to compute one of them.

**Example 2: Computing Second-Order Partial Derivatives**

Let's take our previous function $f(x, y, z) = x^3y^2z + e^{xyz}$.
We found:
$\frac{\partial f}{\partial x} = 3x^2y^2z + yze^{xyz}$
$\frac{\partial f}{\partial y} = 2x^3yz + xze^{xyz}$
$\frac{\partial f}{\partial z} = x^3y^2 + xye^{xyz}$

Let's compute $f_{xy} = \frac{\partial^2 f}{\partial y \partial x}$ and $f_{yx} = \frac{\partial^2 f}{\partial x \partial y}$.

**Computing $f_{xy} = \frac{\partial}{\partial y}\left(\frac{\partial f}{\partial x}\right)$:**
We take the derivative of $\frac{\partial f}{\partial x} = 3x^2y^2z + yze^{xyz}$ with respect to $y$, treating $x$ and $z$ as constants.

$\frac{\partial}{\partial y}(3x^2y^2z) = 3x^2z \cdot \frac{\partial}{\partial y}(y^2) = 3x^2z \cdot (2y) = 6x^2yz$.

For the second term, $yze^{xyz}$, we need to use the product rule because both $y$ and $e^{xyz}$ contain $y$. Remember $x$ and $z$ are constants.
$\frac{\partial}{\partial y}(y \cdot ze^{xyz}) = \left(\frac{\partial}{\partial y}y\right) \cdot (ze^{xyz}) + y \cdot \left(\frac{\partial}{\partial y}(ze^{xyz})\right)$
$= (1) \cdot (ze^{xyz}) + y \cdot (z \cdot \frac{\partial}{\partial y}(e^{xyz}))$
$= ze^{xyz} + yz \cdot (e^{xyz} \cdot \frac{\partial}{\partial y}(xyz))$
$= ze^{xyz} + yz \cdot (e^{xyz} \cdot xz)$
$= ze^{xyz} + xz^2yz e^{xyz}$

So, $f_{xy} = 6x^2yz + ze^{xyz} + xz^2yz e^{xyz}$.

**Computing $f_{yx} = \frac{\partial}{\partial x}\left(\frac{\partial f}{\partial y}\right)$:**
Now we take the derivative of $\frac{\partial f}{\partial y} = 2x^3yz + xze^{xyz}$ with respect to $x$, treating $y$ and $z$ as constants.

$\frac{\partial}{\partial x}(2x^3yz) = 2yz \cdot \frac{\partial}{\partial x}(x^3) = 2yz \cdot (3x^2) = 6x^2yz$.

For the second term, $xze^{xyz}$, we use the product rule again. Remember $y$ and $z$ are constants.
$\frac{\partial}{\partial x}(x \cdot ze^{xyz}) = \left(\frac{\partial}{\partial x}x\right) \cdot (ze^{xyz}) + x \cdot \left(\frac{\partial}{\partial x}(ze^{xyz})\right)$
$= (1) \cdot (ze^{xyz}) + x \cdot (z \cdot \frac{\partial}{\partial x}(e^{xyz}))$
$= ze^{xyz} + xz \cdot (e^{xyz} \cdot \frac{\partial}{\partial x}(xyz))$
$= ze^{xyz} + xz \cdot (e^{xyz} \cdot yz)$
$= ze^{xyz} + xyz^2e^{xyz}$

Wait, I made a mistake in the previous calculation of $f_{xy}$ for the second term. Let's re-evaluate $f_{xy}$ carefully.

**Re-calculating $f_{xy}$:**
$\frac{\partial f}{\partial x} = 3x^2y^2z + yze^{xyz}$ (treat $x,z$ as constants for $y$)
$f_{xy} = \frac{\partial}{\partial y}(3x^2y^2z) + \frac{\partial}{\partial y}(yze^{xyz})$
$= 3x^2z(2y) + \left[ \frac{\partial}{\partial y}(yz) \cdot e^{xyz} + yz \cdot \frac{\partial}{\partial y}(e^{xyz}) \right]$ (Product rule on $yz$ and $e^{xyz}$)
$= 6x^2yz + \left[ (z) \cdot e^{xyz} + yz \cdot (e^{xyz} \cdot \frac{\partial}{\partial y}(xyz)) \right]$
$= 6x^2yz + ze^{xyz} + yz \cdot (e^{xyz} \cdot xz)$
$= 6x^2yz + ze^{xyz} + xyz^2e^{xyz}$

Okay, my first calculation of $f_{xy}$ had a typo with $yz$ instead of $z$ as the coefficient of the second term.

**Re-calculating $f_{yx}$:**
$\frac{\partial f}{\partial y} = 2x^3yz + xze^{xyz}$ (treat $y,z$ as constants for $x$)
$f_{yx} = \frac{\partial}{\partial x}(2x^3yz) + \frac{\partial}{\partial x}(xze^{xyz})$
$= 2yz(3x^2) + \left[ \frac{\partial}{\partial x}(xz) \cdot e^{xyz} + xz \cdot \frac{\partial}{\partial x}(e^{xyz}) \right]$ (Product rule on $xz$ and $e^{xyz}$)
$= 6x^2yz + \left[ (z) \cdot e^{xyz} + xz \cdot (e^{xyz} \cdot \frac{\partial}{\partial x}(xyz)) \right]$
$= 6x^2yz + ze^{xyz} + xz \cdot (e^{xyz} \cdot yz)$
$= 6x^2yz + ze^{xyz} + xyz^2e^{xyz}$

Indeed, $f_{xy} = f_{yx} = 6x^2yz + ze^{xyz} + xyz^2e^{xyz}$. This confirms Clairaut's Theorem for this function. This is a really important concept for **CO1** because it simplifies calculations when finding maxima/minima or analyzing sensitivities, as you don't have to worry about the order of differentiation.

We can also compute third-order derivatives, like $f_{xyz} = \frac{\partial^3 f}{\partial z \partial y \partial x}$, and so on. If all third-order partial derivatives are continuous, then $f_{xyz} = f_{xzy} = f_{yxz} = f_{yzx} = f_{zxy} = f_{zyx}$.

### 5. Applications in Electrical and Physical Science

Why do we care about partial derivatives? Because they are the language for describing how physical quantities change in response to multiple factors.

*   **Thermodynamics:** The state of a gas can be described by pressure $P$, volume $V$, and temperature $T$. These are related by an equation of state, e.g., $f(P, V, T) = 0$. Partial derivatives like $\left(\frac{\partial P}{\partial T}\right)_V$ tell us how pressure changes with temperature when volume is held constant, a crucial concept in understanding gas behavior. This directly relates to **CO1** as we're applying math to physical systems.
*   **Electromagnetism:** Electric potential $V$ in space is a function of position $(x, y, z)$, $V(x, y, z)$. The electric field $\mathbf{E}$ is related to the potential by $\mathbf{E} = -\nabla V$. The gradient operator $\nabla$ involves partial derivatives: $\nabla V = \left\langle \frac{\partial V}{\partial x}, \frac{\partial V}{\partial y}, \frac{\partial V}{\partial z} \right\rangle$. So, the components of the electric field are partial derivatives of the electric potential. This is a direct application of **CO1** and hints at **CO3** (derivatives of vector functions).
*   **Heat Transfer:** The temperature distribution $T(x, y, z, t)$ in a material over time is governed by the heat equation, which is a partial differential equation (PDE): $\frac{\partial T}{\partial t} = \alpha \nabla^2 T$. Here, $\nabla^2 T$ (the Laplacian of $T$) involves second partial derivatives like $\frac{\partial^2 T}{\partial x^2} + \frac{\partial^2 T}{\partial y^2} + \frac{\partial^2 T}{\partial z^2}$. Understanding these PDEs requires a solid grasp of partial derivatives. This illustrates how partial derivatives are fundamental to solving complex physical problems.
*   **Signal Processing:** In systems where a signal might depend on frequency, time, and amplitude, understanding how changes in one parameter affect the signal when others are fixed uses partial derivatives.

The ability to compute these derivatives (as per **CO1**) is essential for analyzing the sensitivity of a system to changes in its input parameters, finding optimal operating points (maxima/minima), and understanding the fundamental laws governing these systems.

### 6. Summary and Key Takeaways

*   **Partial derivatives** extend the concept of the derivative to functions of multiple independent variables.
*   To find the partial derivative of $f$ with respect to a variable (say $x$), you treat *all other independent variables* ($y, z, \dots$) as *constants*.
*   This principle applies regardless of how many variables the function has.
*   Notation includes $\frac{\partial f}{\partial x}$, $f_x$, $f_{x_i}$, etc.
*   **Clairaut's Theorem** states that for "nice" functions, the order of mixed partial differentiation doesn't matter ($\frac{\partial^2 f}{\partial y \partial x} = \frac{\partial^2 f}{\partial x \partial y}$). This is a huge computational shortcut.
*   These concepts are foundational for understanding physical phenomena and for solving engineering problems involving complex systems, directly supporting **CO1**.

Mastering partial derivatives is like learning to isolate the effect of one influence on a complex outcome. This skill is indispensable as you move forward in your studies and careers in electrical and physical science.

---

### Sample Questions with Answers

**1. Conceptual Question:**
What is the fundamental principle used to calculate the partial derivative of a function with respect to one of its variables, when the function depends on several variables?

**Answer:**
The fundamental principle is to treat all other independent variables as constants. You effectively reduce the problem to finding the derivative of a function of a single variable, where that variable is the one with respect to which you are differentiating.

**2. Exam-Oriented Question:**
Let $f(x, y, z) = \sqrt{x^2 + y^2 + z^2}$. Compute $\frac{\partial f}{\partial x}$ and $\frac{\partial^2 f}{\partial y \partial x}$.

**Answer:**

**Step 1: Compute $\frac{\partial f}{\partial x}$**
We treat $y$ and $z$ as constants.
Let $u = x^2 + y^2 + z^2$. Then $f = \sqrt{u} = u^{1/2}$.
Using the chain rule, $\frac{\partial f}{\partial x} = \frac{df}{du} \cdot \frac{\partial u}{\partial x}$.
$\frac{df}{du} = \frac{1}{2} u^{-1/2} = \frac{1}{2\sqrt{u}} = \frac{1}{2\sqrt{x^2 + y^2 + z^2}}$.
$\frac{\partial u}{\partial x} = \frac{\partial}{\partial x}(x^2 + y^2 + z^2) = 2x$ (since $y$ and $z$ are treated as constants).

So, $\frac{\partial f}{\partial x} = \frac{1}{2\sqrt{x^2 + y^2 + z^2}} \cdot (2x) = \frac{x}{\sqrt{x^2 + y^2 + z^2}}$.

**Step 2: Compute $\frac{\partial^2 f}{\partial y \partial x}$**
This means we need to differentiate $\frac{\partial f}{\partial x}$ with respect to $y$, treating $x$ and $z$ as constants.
We have $\frac{\partial f}{\partial x} = \frac{x}{\sqrt{x^2 + y^2 + z^2}} = x(x^2 + y^2 + z^2)^{-1/2}$.

Now, we differentiate this expression with respect to $y$:
$\frac{\partial^2 f}{\partial y \partial x} = \frac{\partial}{\partial y} \left( x(x^2 + y^2 + z^2)^{-1/2} \right)$.
Since $x$ is treated as a constant with respect to $y$, it acts as a constant multiplier:
$\frac{\partial^2 f}{\partial y \partial x} = x \cdot \frac{\partial}{\partial y} \left( (x^2 + y^2 + z^2)^{-1/2} \right)$.

Let $v = x^2 + y^2 + z^2$. Then we have $\frac{\partial}{\partial y}(v^{-1/2})$.
Using the chain rule again: $\frac{\partial}{\partial y}(v^{-1/2}) = \frac{d}{dv}(v^{-1/2}) \cdot \frac{\partial v}{\partial y}$.
$\frac{d}{dv}(v^{-1/2}) = -\frac{1}{2} v^{-3/2} = -\frac{1}{2(x^2 + y^2 + z^2)^{3/2}}$.
$\frac{\partial v}{\partial y} = \frac{\partial}{\partial y}(x^2 + y^2 + z^2) = 2y$ (since $x$ and $z$ are constants).

So, $\frac{\partial}{\partial y} \left( (x^2 + y^2 + z^2)^{-1/2} \right) = -\frac{1}{2(x^2 + y^2 + z^2)^{3/2}} \cdot (2y) = -\frac{y}{(x^2 + y^2 + z^2)^{3/2}}$.

Putting it all together:
$\frac{\partial^2 f}{\partial y \partial x} = x \cdot \left( -\frac{y}{(x^2 + y^2 + z^2)^{3/2}} \right) = -\frac{xy}{(x^2 + y^2 + z^2)^{3/2}}$.

*(Self-check: If you were asked for $\frac{\partial^2 f}{\partial x \partial y}$, you would start by finding $\frac{\partial f}{\partial y}$ first, which would be $\frac{y}{\sqrt{x^2+y^2+z^2}}$, and then differentiate with respect to $x$. You should arrive at the same result, $-\frac{xy}{(x^2 + y^2 + z^2)^{3/2}}$, confirming Clairaut's Theorem.)*

**3. Application-Focused Question:**
In a simple DC circuit, the power dissipated by a resistor $R$ might depend on the voltage $V$ across it and its temperature $T$, which in turn affects its resistance. Suppose power $P$ is related to voltage $V$ and resistance $R$ by $P = V^2/R$. If the resistance $R$ itself is a function of temperature $T$, say $R(T) = R_0(1 + \alpha T)$, where $R_0$ and $\alpha$ are constants. Treat $V$ as an independent variable for now, and $R$ as a function of $T$. We want to know how the power $P$ changes with temperature $T$ when the voltage $V$ is held constant. Which mathematical concept helps us find this rate of change, and how would you denote it?

**Answer:**
The concept that helps us find the rate of change of power $P$ with respect to temperature $T$, while holding voltage $V$ constant, is the **partial derivative**.

We have $P = V^2/R$, and $R = R_0(1 + \alpha T)$.
We can substitute $R$ into the expression for $P$:
$P(V, T) = \frac{V^2}{R_0(1 + \alpha T)}$.

To find how $P$ changes as $T$ changes, with $V$ constant, we compute the partial derivative of $P$ with respect to $T$. The notation for this is:
$\frac{\partial P}{\partial T}$.

To calculate it:
Treat $V$ and $R_0$ as constants.
$P(V, T) = \frac{V^2}{R_0} \cdot (1 + \alpha T)^{-1}$.
$\frac{\partial P}{\partial T} = \frac{V^2}{R_0} \cdot \frac{\partial}{\partial T} \left( (1 + \alpha T)^{-1} \right)$.
Using the chain rule, $\frac{\partial}{\partial T} \left( (1 + \alpha T)^{-1} \right) = -1 (1 + \alpha T)^{-2} \cdot \alpha$.
So, $\frac{\partial P}{\partial T} = \frac{V^2}{R_0} \cdot \left( -\alpha (1 + \alpha T)^{-2} \right) = -\frac{\alpha V^2}{R_0(1 + \alpha T)^2}$.

This result tells us how sensitive the power dissipation is to temperature changes when the voltage is fixed, which is crucial for understanding device performance. This demonstrates the direct application of **CO1**.
