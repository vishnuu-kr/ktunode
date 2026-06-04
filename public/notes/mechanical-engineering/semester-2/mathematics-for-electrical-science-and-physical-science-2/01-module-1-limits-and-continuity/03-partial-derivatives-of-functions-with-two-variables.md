---
title: "Partial derivatives of 
functions with two variables"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2"
module: "Module 1: Limits and continuity"
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1edffeb4799d95e8399a"
status: "completed"
scrapedAt: "2026-05-20T17:45:40.294Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2

## Module 1: Limits and Continuity

### Topic: Partial Derivatives of Functions with Two Variables

Welcome, everyone! Today, we're diving into a fundamental concept in multivariable calculus: **partial derivatives**. This is a crucial stepping stone, especially for our electrical and physical science applications, as many real-world phenomena depend on more than one variable. Think about the voltage across a resistor; it might depend on the current flowing through it *and* its temperature. Or consider the pressure in a gas; that depends on the volume *and* the temperature. These are functions of two (or more!) variables, and partial derivatives are our tools for understanding how these functions change when we tweak *one* variable at a time, while keeping the others fixed.

This topic directly ties into **Course Outcome 1 (CO1)**: "Compute the partial and total derivatives and maxima and minima of multivariable functions and to apply in engineering problems." Understanding partial derivatives is the first step to calculating total derivatives and finding optimization points (maxima/minima) in these multi-variable scenarios, which are constantly popping up in engineering.

#### The Intuition: What Exactly is a Partial Derivative?

Imagine you're hiking on a mountain. The altitude at any point you stand on can be described by a function of your east-west position (let's call it $x$) and your north-south position (let's call it $y$). So, the altitude $z$ can be represented as $z = f(x, y)$.

Now, suppose you're interested in how the altitude changes *as you walk directly east*. This means your north-south position ($y$) stays constant. You're essentially moving along a line where $y$ is fixed. The rate of change of altitude with respect to your east-west movement is the **partial derivative of $f$ with respect to $x$**.

Similarly, if you were to walk directly north, keeping your east-west position ($x$) constant, the rate of change of altitude with respect to your north-south movement would be the **partial derivative of $f$ with respect to $y$**.

This is the core idea: when we take a partial derivative, we're isolating the effect of one variable by treating all other variables as constants.

### Formal Definition and Notation

Let $z = f(x, y)$ be a function of two independent variables $x$ and $y$.

*   **The Partial Derivative with Respect to $x$**: This is the rate of change of $f$ with respect to $x$, *assuming $y$ is held constant*.
    We denote it using several notations:
    *   $\frac{\partial f}{\partial x}$
    *   $f_x(x, y)$
    *   $f_x$

    Mathematically, it's defined using a limit, much like single-variable derivatives:
    $$ \frac{\partial f}{\partial x} = \lim_{h \to 0} \frac{f(x+h, y) - f(x, y)}{h} $$
    See Chapter 10 in Anton, Biven, & Davis (12th ed.) for a thorough treatment of these limit definitions.

*   **The Partial Derivative with Respect to $y$**: This is the rate of change of $f$ with respect to $y$, *assuming $x$ is held constant*.
    We denote it using:
    *   $\frac{\partial f}{\partial y}$
    *   $f_y(x, y)$
    *   $f_y$

    Its mathematical definition is:
    $$ \frac{\partial f}{\partial y} = \lim_{k \to 0} \frac{f(x, y+k) - f(x, y)}{k} $$
    Again, these definitions are beautifully laid out in standard calculus texts like Anton and Thomas' Calculus (15th ed.).

**Crucial Point to Remember:** When computing $\frac{\partial f}{\partial x}$, you treat $y$ as if it were a number, a constant. Similarly, when computing $\frac{\partial f}{\partial y}$, you treat $x$ as a constant. This is the key to actually *calculating* these derivatives.

#### How to Calculate Partial Derivatives: The Practical Approach

The limit definitions are fundamental for understanding, but for calculation, we use our familiar differentiation rules from single-variable calculus.

**To find $\frac{\partial f}{\partial x}$:**
1.  Treat every occurrence of $y$ in the function $f(x, y)$ as a constant.
2.  Differentiate the function with respect to $x$ using the standard rules (power rule, product rule, chain rule, etc.).

**To find $\frac{\partial f}{\partial y}$:**
1.  Treat every occurrence of $x$ in the function $f(x, y)$ as a constant.
2.  Differentiate the function with respect to $y$ using the standard rules.

Let's try some examples. These will feel very similar to what you've done before, but with that crucial difference of holding one variable constant.

**Example 1: A Simple Polynomial**

Let $f(x, y) = x^3y^2 + 5x^2y + 3y^4$.

*   **Finding $\frac{\partial f}{\partial x}$:**
    Here, we treat $y$ as a constant.
    *   The term $x^3y^2$: $y^2$ is a constant multiplier. The derivative of $x^3$ with respect to $x$ is $3x^2$. So, the derivative of $x^3y^2$ is $3x^2y^2$.
    *   The term $5x^2y$: $5y$ is a constant multiplier. The derivative of $x^2$ with respect to $x$ is $2x$. So, the derivative of $5x^2y$ is $5y(2x) = 10xy$.
    *   The term $3y^4$: Since $y$ is treated as a constant, $3y^4$ is simply a constant. The derivative of any constant is 0.

    Therefore, $\frac{\partial f}{\partial x} = 3x^2y^2 + 10xy + 0 = 3x^2y^2 + 10xy$.

*   **Finding $\frac{\partial f}{\partial y}$:**
    Now, we treat $x$ as a constant.
    *   The term $x^3y^2$: $x^3$ is a constant multiplier. The derivative of $y^2$ with respect to $y$ is $2y$. So, the derivative of $x^3y^2$ is $x^3(2y) = 2x^3y$.
    *   The term $5x^2y$: $5x^2$ is a constant multiplier. The derivative of $y$ with respect to $y$ is 1. So, the derivative of $5x^2y$ is $5x^2(1) = 5x^2$.
    *   The term $3y^4$: The derivative of $3y^4$ with respect to $y$ is $3(4y^3) = 12y^3$.

    Therefore, $\frac{\partial f}{\partial y} = 2x^3y + 5x^2 + 12y^3$.

See how straightforward it is once you adopt the right mindset for each derivative? This is a skill you'll practice repeatedly.

**Example 2: A More Complex Function (Incorporating Trigonometry and Exponentials)**

Let $g(x, y) = e^{xy} \sin(x) + x^2y^3$.

*   **Finding $\frac{\partial g}{\partial x}$:**
    Treat $y$ as a constant. We'll need the product rule for the first term ($e^{xy} \sin(x)$).
    *   Derivative of $e^{xy}$ with respect to $x$: This requires the chain rule. The derivative of $e^u$ is $e^u \frac{du}{dx}$. Here $u = xy$. So, $\frac{du}{dx} = y$. Thus, the derivative of $e^{xy}$ is $e^{xy} \cdot y = ye^{xy}$.
    *   Applying the product rule to $e^{xy} \sin(x)$:
        $(\text{derivative of } e^{xy}) \cdot \sin(x) + e^{xy} \cdot (\text{derivative of } \sin(x))$
        $= (ye^{xy}) \sin(x) + e^{xy} (\cos(x))$
        $= ye^{xy}\sin(x) + e^{xy}\cos(x)$

    *   Derivative of $x^2y^3$ with respect to $x$: Treat $y^3$ as a constant multiplier. Derivative of $x^2$ is $2x$. So, we get $2xy^3$.

    Putting it together: $\frac{\partial g}{\partial x} = ye^{xy}\sin(x) + e^{xy}\cos(x) + 2xy^3$.

*   **Finding $\frac{\partial g}{\partial y}$:**
    Treat $x$ as a constant.
    *   Derivative of $e^{xy}$ with respect to $y$: Again, chain rule with $u=xy$. This time, $\frac{du}{dy} = x$. So, the derivative of $e^{xy}$ is $e^{xy} \cdot x = xe^{xy}$.
    *   The term $\sin(x)$: Since $x$ is constant, $\sin(x)$ is also a constant. The derivative of a constant is 0.
    *   So, the derivative of $e^{xy} \sin(x)$ with respect to $y$ is $(xe^{xy}) \sin(x) + e^{xy} \cdot 0 = xe^{xy}\sin(x)$.

    *   Derivative of $x^2y^3$ with respect to $y$: Treat $x^2$ as a constant multiplier. Derivative of $y^3$ is $3y^2$. So, we get $x^2(3y^2) = 3x^2y^2$.

    Putting it together: $\frac{\partial g}{\partial y} = xe^{xy}\sin(x) + 3x^2y^2$.

These examples illustrate the core computational technique. The key is consistent application of the rules while remembering which variable is being treated as a constant. This aligns with **CO1**'s requirement to *compute* derivatives.

#### Geometrical Interpretation: What Do These Derivatives Tell Us?

Remember our mountain analogy?
*   $\frac{\partial f}{\partial x}$ at a point $(x_0, y_0)$ represents the *slope of the tangent line* to the surface $z = f(x, y)$ at that point, in the direction parallel to the x-axis. Imagine slicing the mountain surface with a vertical plane where $y = y_0$ (a constant). The curve of intersection is like a path going east-west. $\frac{\partial f}{\partial x}(x_0, y_0)$ is the slope of that path at $(x_0, y_0)$.
*   $\frac{\partial f}{\partial y}$ at a point $(x_0, y_0)$ represents the *slope of the tangent line* to the surface $z = f(x, y)$ at that point, in the direction parallel to the y-axis. Similarly, slice the surface with a vertical plane where $x = x_0$ (a constant). This path goes north-south. $\frac{\partial f}{\partial y}(x_0, y_0)$ is the slope of that north-south path.

This geometric view is important. It’s how we start to understand the "shape" of a multivariable function. If $\frac{\partial f}{\partial x}$ is large and positive, the surface is steeply rising as you move in the positive x-direction. If it's negative, it’s steeply falling. If it's zero, the surface is locally flat in the x-direction at that point.

This understanding of how functions change locally is fundamental for applications, which is what **CO1** is all about. For example, in heat transfer, partial derivatives relate to temperature gradients. If $T(x, y, z)$ is the temperature at point $(x, y, z)$, then $\frac{\partial T}{\partial x}$ tells you how fast the temperature changes as you move in the x-direction, holding y and z constant. This is crucial for understanding heat flow.

#### Second-Order Partial Derivatives

Just like in single-variable calculus, we can differentiate again! This gives us second-order partial derivatives. For $z = f(x, y)$, there are four possibilities:

1.  **$\frac{\partial^2 f}{\partial x^2}$**: First differentiate with respect to $x$, then differentiate the result again with respect to $x$.
    *   Notation: $f_{xx}(x, y)$ or $f_{xx}$
2.  **$\frac{\partial^2 f}{\partial y^2}$**: First differentiate with respect to $y$, then differentiate the result again with respect to $y$.
    *   Notation: $f_{yy}(x, y)$ or $f_{yy}$
3.  **$\frac{\partial^2 f}{\partial y \partial x}$**: First differentiate with respect to $x$, then differentiate the result with respect to $y$.
    *   Notation: $f_{xy}(x, y)$ or $f_{xy}$
4.  **$\frac{\partial^2 f}{\partial x \partial y}$**: First differentiate with respect to $y$, then differentiate the result with respect to $x$.
    *   Notation: $f_{yx}(x, y)$ or $f_{yx}$

**A Remarkable Result: Clairaut's Theorem (or Schwarz's Theorem)**

There's a very important theorem in multivariable calculus, often covered around this topic. **Clairaut's Theorem** states that if the second partial derivatives $f_{xy}$ and $f_{yx}$ are continuous in an open disk containing $(a, b)$, then $f_{xy}(a, b) = f_{yx}(a, b)$.

What does this mean in practice? For most functions you'll encounter in electrical and physical sciences (smooth, well-behaved ones!), the order in which you take the partial derivatives doesn't matter. So, $\frac{\partial^2 f}{\partial y \partial x}$ will be the same as $\frac{\partial^2 f}{\partial x \partial y}$. This is a huge simplification! Kreyszig's "Advanced Engineering Mathematics" and Bird's "Higher Engineering Mathematics" both emphasize the practical utility of this theorem.

Let's try an example with second-order derivatives.

**Example 3: Second-Order Partial Derivatives**

Let $f(x, y) = x^4y^3 + 2x^2y^5$.

First, let's find the first-order derivatives (we did this in Example 1, slightly modified):
$\frac{\partial f}{\partial x} = 4x^3y^3 + 4xy^5$
$\frac{\partial f}{\partial y} = 3x^4y^2 + 10x^2y^4$

Now, let's find the second-order ones:

*   **$f_{xx} = \frac{\partial}{\partial x} \left( \frac{\partial f}{\partial x} \right) = \frac{\partial}{\partial x} (4x^3y^3 + 4xy^5)$**
    Treat $y$ as constant:
    $\frac{\partial}{\partial x} (4x^3y^3) = 4y^3 \cdot 3x^2 = 12x^2y^3$
    $\frac{\partial}{\partial x} (4xy^5) = 4y^5 \cdot 1 = 4y^5$
    So, $f_{xx} = 12x^2y^3 + 4y^5$.

*   **$f_{yy} = \frac{\partial}{\partial y} \left( \frac{\partial f}{\partial y} \right) = \frac{\partial}{\partial y} (3x^4y^2 + 10x^2y^4)$**
    Treat $x$ as constant:
    $\frac{\partial}{\partial y} (3x^4y^2) = 3x^4 \cdot 2y = 6x^4y$
    $\frac{\partial}{\partial y} (10x^2y^4) = 10x^2 \cdot 4y^3 = 40x^2y^3$
    So, $f_{yy} = 6x^4y + 40x^2y^3$.

*   **$f_{xy} = \frac{\partial}{\partial y} \left( \frac{\partial f}{\partial x} \right) = \frac{\partial}{\partial y} (4x^3y^3 + 4xy^5)$**
    Treat $x$ as constant:
    $\frac{\partial}{\partial y} (4x^3y^3) = 4x^3 \cdot 3y^2 = 12x^3y^2$
    $\frac{\partial}{\partial y} (4xy^5) = 4x \cdot 5y^4 = 20xy^4$
    So, $f_{xy} = 12x^3y^2 + 20xy^4$.

*   **$f_{yx} = \frac{\partial}{\partial x} \left( \frac{\partial f}{\partial y} \right) = \frac{\partial}{\partial x} (3x^4y^2 + 10x^2y^4)$**
    Treat $y$ as constant:
    $\frac{\partial}{\partial x} (3x^4y^2) = 3y^2 \cdot 4x^3 = 12x^3y^2$
    $\frac{\partial}{\partial x} (10x^2y^4) = 10y^4 \cdot 2x = 20xy^4$
    So, $f_{yx} = 12x^3y^2 + 20xy^4$.

Notice that $f_{xy} = f_{yx}$. This is consistent with Clairaut's Theorem, as these derivatives are continuous everywhere for this polynomial. This is usually good news for computations!

**Why are second-order derivatives important?**
They tell us about the *concavity* or *curvature* of the function's surface. For instance, $f_{xx}$ relates to how the slope changes as you move in the x-direction. If $f_{xx} > 0$, the slope is increasing (like the bottom of a U-shape). If $f_{xx} < 0$, the slope is decreasing (like the top of an inverted U-shape). These concepts are critical for identifying local maxima and minima, which is a direct application for **CO1**.

#### Applications in Engineering and Physical Science

Partial derivatives are ubiquitous. Let's touch upon a few areas where you'll see them immediately:

*   **Electrical Circuits:** Consider a circuit component where its resistance $R$ depends on temperature $T$ and current $I$. We can write $R = f(T, I)$. Then $\frac{\partial R}{\partial T}$ tells us how much the resistance changes per degree Celsius change in temperature, while $\frac{\partial R}{\partial I}$ tells us how much resistance changes per unit of current. This is vital for analyzing non-linear components or temperature-dependent behavior.
*   **Thermodynamics:** For an ideal gas, the pressure $P$, volume $V$, and temperature $T$ are related by the ideal gas law, $PV = nRT$. If we consider $P$ as a function of $V$ and $T$, $P(V, T) = \frac{nRT}{V}$.
    *   $\frac{\partial P}{\partial V}$ (at constant $T$) represents how pressure changes with volume, which is related to compressibility.
    *   $\frac{\partial P}{\partial T}$ (at constant $V$) represents how pressure changes with temperature, related to thermal expansion.
    This is fundamental to understanding gas behavior. Bird's "Higher Engineering Mathematics" and Ramana's "Higher Engineering Mathematics" provide many such thermodynamic examples.
*   **Signal Processing:** The output of a system might depend on input amplitude and frequency. Partial derivatives help analyze sensitivity to these parameters.
*   **Heat Conduction:** The rate of heat flow is related to temperature gradients. If $T(x,y,z,t)$ is the temperature, $\frac{\partial T}{\partial x}$ is a component of the heat flux vector. The heat equation itself is a partial differential equation (PDE).
*   **Fluid Dynamics:** Velocity fields often depend on spatial coordinates and time, leading to PDEs.

In essence, whenever a physical quantity is influenced by multiple factors that can change independently, partial derivatives are the mathematical tools to understand their individual contributions to the overall change. This is the heart of **CO1** – applying these derivatives to real-world engineering problems.

#### Common Pitfalls and Quick Tips

*   **Confusing Constants:** The most common mistake is accidentally treating the "other" variable as changing when you're supposed to hold it constant. Always ask yourself: "Am I differentiating with respect to $x$, or $y$?"
*   **Chain Rule Errors:** When variables are functions of other variables (e.g., $f(x(t), y(t))$), the chain rule becomes more complex (leading to total derivatives, a topic for later). But for *partial* derivatives of $f(x, y)$, just remember that $x$ and $y$ are independent variables.
*   **Order of Differentiation:** While usually $f_{xy} = f_{yx}$, it's good practice to check if the function is "nice" (continuous second derivatives). If you're unsure or facing a tricky function, compute both and see if they match to catch potential errors.
*   **Notation:** Be comfortable with $\frac{\partial f}{\partial x}$, $f_x$, and $f_{xx}$. They all mean the same thing.

Remember this: partial derivatives allow us to dissect the behavior of multivariable functions by focusing on the impact of each independent variable in isolation. This is a fundamental skill for analyzing complex systems in any scientific or engineering discipline.

### Sample Questions and Answers

Here are some practice questions to solidify your understanding.

---

**Question 1 (Conceptual):**
If $z = f(x, y)$, what does $\frac{\partial z}{\partial x}$ represent geometrically?

**Answer:**
$\frac{\partial z}{\partial x}$ represents the slope of the tangent line to the surface $z = f(x, y)$ at a given point, measured in the direction parallel to the x-axis (i.e., where $y$ is held constant).

---

**Question 2 (Computational - First Order):**
Find the first-order partial derivatives of the function $f(x, y) = \ln(x^2 + y^2)$.

**Solution:**
We need to find $\frac{\partial f}{\partial x}$ and $\frac{\partial f}{\partial y}$.

*   **To find $\frac{\partial f}{\partial x}$:** Treat $y$ as a constant. We use the chain rule. Let $u = x^2 + y^2$. Then $f = \ln(u)$.
    $\frac{\partial f}{\partial x} = \frac{df}{du} \cdot \frac{\partial u}{\partial x}$
    $\frac{df}{du} = \frac{1}{u} = \frac{1}{x^2 + y^2}$
    $\frac{\partial u}{\partial x} = \frac{\partial}{\partial x}(x^2 + y^2) = 2x$ (since $y^2$ is treated as constant)
    So, $\frac{\partial f}{\partial x} = \frac{1}{x^2 + y^2} \cdot (2x) = \frac{2x}{x^2 + y^2}$.

*   **To find $\frac{\partial f}{\partial y}$:** Treat $x$ as a constant. Again, use the chain rule with $u = x^2 + y^2$.
    $\frac{\partial f}{\partial y} = \frac{df}{du} \cdot \frac{\partial u}{\partial y}$
    $\frac{df}{du} = \frac{1}{u} = \frac{1}{x^2 + y^2}$
    $\frac{\partial u}{\partial y} = \frac{\partial}{\partial y}(x^2 + y^2) = 2y$ (since $x^2$ is treated as constant)
    So, $\frac{\partial f}{\partial y} = \frac{1}{x^2 + y^2} \cdot (2y) = \frac{2y}{x^2 + y^2}$.

**Answer:** $\frac{\partial f}{\partial x} = \frac{2x}{x^2 + y^2}$, $\frac{\partial f}{\partial y} = \frac{2y}{x^2 + y^2}$.

---

**Question 3 (Computational - Second Order):**
For the function $g(x, y) = e^{2x} \cos(3y)$, find $g_{xx}$, $g_{yy}$, and $g_{xy}$. Verify if $g_{xy} = g_{yx}$.

**Solution:**
First, let's find the first-order partial derivatives.

*   **$g_x = \frac{\partial g}{\partial x}$:** Treat $y$ as constant.
    $g_x = \frac{\partial}{\partial x}(e^{2x} \cos(3y)) = \cos(3y) \cdot \frac{\partial}{\partial x}(e^{2x})$
    Using chain rule for $e^{2x}$: $\frac{\partial}{\partial x}(e^{2x}) = e^{2x} \cdot 2 = 2e^{2x}$.
    So, $g_x = \cos(3y) \cdot (2e^{2x}) = 2e^{2x}\cos(3y)$.

*   **$g_y = \frac{\partial g}{\partial y}$:** Treat $x$ as constant.
    $g_y = \frac{\partial}{\partial y}(e^{2x} \cos(3y)) = e^{2x} \cdot \frac{\partial}{\partial y}(\cos(3y))$
    Using chain rule for $\cos(3y)$: $\frac{\partial}{\partial y}(\cos(3y)) = -\sin(3y) \cdot 3 = -3\sin(3y)$.
    So, $g_y = e^{2x} \cdot (-3\sin(3y)) = -3e^{2x}\sin(3y)$.

Now, for the second-order partial derivatives:

*   **$g_{xx} = \frac{\partial}{\partial x}(g_x) = \frac{\partial}{\partial x}(2e^{2x}\cos(3y))$**
    Treat $y$ as constant.
    $g_{xx} = 2\cos(3y) \cdot \frac{\partial}{\partial x}(e^{2x}) = 2\cos(3y) \cdot (2e^{2x}) = 4e^{2x}\cos(3y)$.

*   **$g_{yy} = \frac{\partial}{\partial y}(g_y) = \frac{\partial}{\partial y}(-3e^{2x}\sin(3y))$**
    Treat $x$ as constant.
    $g_{yy} = -3e^{2x} \cdot \frac{\partial}{\partial y}(\sin(3y)) = -3e^{2x} \cdot (\cos(3y) \cdot 3) = -9e^{2x}\cos(3y)$.

*   **$g_{xy} = \frac{\partial}{\partial y}(g_x) = \frac{\partial}{\partial y}(2e^{2x}\cos(3y))$**
    Treat $x$ as constant.
    $g_{xy} = 2e^{2x} \cdot \frac{\partial}{\partial y}(\cos(3y)) = 2e^{2x} \cdot (-3\sin(3y)) = -6e^{2x}\sin(3y)$.

Now, let's find $g_{yx}$ to verify Clairaut's Theorem.

*   **$g_{yx} = \frac{\partial}{\partial x}(g_y) = \frac{\partial}{\partial x}(-3e^{2x}\sin(3y))$**
    Treat $y$ as constant.
    $g_{yx} = -3\sin(3y) \cdot \frac{\partial}{\partial x}(e^{2x}) = -3\sin(3y) \cdot (2e^{2x}) = -6e^{2x}\sin(3y)$.

**Verification:** We see that $g_{xy} = -6e^{2x}\sin(3y)$ and $g_{yx} = -6e^{2x}\sin(3y)$. Therefore, $g_{xy} = g_{yx}$, as expected since the second partial derivatives are continuous for this exponential/trigonometric function.

**Answer:** $g_{xx} = 4e^{2x}\cos(3y)$, $g_{yy} = -9e^{2x}\cos(3y)$, $g_{xy} = -6e^{2x}\sin(3y)$. And yes, $g_{xy} = g_{yx}$.

---

**Question 4 (Application Context):**
A heat sensor's voltage output $V$ depends on temperature $T$ and humidity $H$, given by $V(T, H) = 0.5T + 0.02T^2 - 0.1H + 0.001H^2$.
(a) What is the rate of change of voltage with respect to temperature when $T=25^\circ C$ and $H=60\%$?
(b) What is the rate of change of voltage with respect to humidity when $T=25^\circ C$ and $H=60\%$?

**Solution:**
This question directly uses our understanding of partial derivatives to analyze the sensitivity of the sensor's output.

(a) We need to find $\frac{\partial V}{\partial T}$ and evaluate it at $(T, H) = (25, 60)$.
$\frac{\partial V}{\partial T} = \frac{\partial}{\partial T}(0.5T + 0.02T^2 - 0.1H + 0.001H^2)$
Treating $H$ as constant:
$\frac{\partial V}{\partial T} = 0.5 + 0.02(2T) - 0 + 0 = 0.5 + 0.04T$.
Now, substitute $T=25$:
$\frac{\partial V}{\partial T}\Big|_{(25, 60)} = 0.5 + 0.04(25) = 0.5 + 1 = 1.5$ V/$^\circ$C.
This means that at $25^\circ C$ and $60\%$ humidity, the voltage output increases by 1.5 Volts for every degree Celsius increase in temperature.

(b) We need to find $\frac{\partial V}{\partial H}$ and evaluate it at $(T, H) = (25, 60)$.
$\frac{\partial V}{\partial H} = \frac{\partial}{\partial H}(0.5T + 0.02T^2 - 0.1H + 0.001H^2)$
Treating $T$ as constant:
$\frac{\partial V}{\partial H} = 0 + 0 - 0.1 + 0.001(2H) = -0.1 + 0.002H$.
Now, substitute $H=60$:
$\frac{\partial V}{\partial H}\Big|_{(25, 60)} = -0.1 + 0.002(60) = -0.1 + 0.12 = 0.02$ V/%.
This means that at $25^\circ C$ and $60\%$ humidity, the voltage output increases by 0.02 Volts for every 1% increase in humidity.

**Answer:**
(a) The rate of change of voltage with respect to temperature is 1.5 V/$^\circ$C.
(b) The rate of change of voltage with respect to humidity is 0.02 V/%.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
