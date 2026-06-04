---
title: "Directional derivative"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 2"
module: "Module 3: Vector valued function of single variable "
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f9839"
status: "completed"
scrapedAt: "2026-05-23T16:08:13.661Z"
---
# Mathematics for Electrical Science and Physical Science - 2

## Module 3: Vector-Valued Functions of a Single Variable

### Topic: Directional Derivative

Hello everyone! Welcome back to our journey into the fascinating world of multivariable calculus. In our previous sessions, we've explored vector-valued functions and how they describe curves in space, which is incredibly useful for modeling trajectories of particles or the path of a wire. Today, we're going to delve into a concept that allows us to understand how a *scalar* field changes as we move in a *specific direction*. This is the **Directional Derivative**.

Think about this: if you're standing on a mountainside, the altitude at your location is a scalar value. But the ground isn't flat everywhere, is it? If you want to know how steep the slope is *right now*, you need to specify a direction. Are you walking uphill directly, or are you heading off at an angle? The steepness will be different depending on that direction. The directional derivative is precisely this measure of rate of change in a particular direction.

This topic is fundamental for our **Course Outcome 3 (CO3)**: "Compute the derivatives and line integrals of vector functions and to learn their applications." Understanding how a scalar function changes along a curve (which is described by a vector function) is a direct application of derivatives in a directional context. We'll see how this connects to concepts like gradient, which we'll touch upon.

### What is a Scalar Field?

Before we define the directional derivative, let's be clear about what kind of function we're dealing with. We're not talking about a vector-valued function of a single variable like $\mathbf{r}(t) = \langle x(t), y(t), z(t) \rangle$ that describes a curve. Instead, we're interested in **scalar fields**. A scalar field assigns a single number (a scalar) to each point in space.

For example:
*   **Temperature:** In a room, the temperature at any point $(x, y, z)$ can be represented by a scalar function $T(x, y, z)$.
*   **Pressure:** The atmospheric pressure at different locations on Earth can be described by a scalar field $P(x, y)$.
*   **Altitude:** As we mentioned, the height of a mountain above sea level can be a scalar field $h(x, y)$.

We'll primarily be working with functions of two variables, $f(x, y)$, representing a surface or a scalar field in a 2D plane, and then generalize to three variables, $f(x, y, z)$.

### The Intuitive Idea: Rate of Change in a Direction

Imagine you're on a surface defined by $z = f(x, y)$. You're at a specific point $(x_0, y_0)$. You want to know how the height $z$ changes if you start moving in a direction specified by a vector.

Let's visualize this. Suppose you're at the origin $(0,0)$ on the surface $f(x, y) = x^2 + y^2$ (a paraboloid). If you move along the positive x-axis (direction $\langle 1, 0 \rangle$), the height changes according to $f(x, 0) = x^2$. The rate of change with respect to $x$ is $2x$. At $(0,0)$, this rate is 0.

If you move along the positive y-axis (direction $\langle 0, 1 \rangle$), the height changes according to $f(0, y) = y^2$. The rate of change with respect to $y$ is $2y$. At $(0,0)$, this rate is also 0.

But what if you move in a direction that's *not* along the axes? For instance, what if you move along the line $y=x$? The direction vector here could be $\mathbf{u} = \langle \frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}} \rangle$. How does the height change as you move along this line?

This is where the directional derivative comes in. It quantifies the instantaneous rate of change of the scalar function $f$ at a point $(x_0, y_0)$ in the direction of a unit vector $\mathbf{u}$.

### Formal Definition of the Directional Derivative

Let $f(x, y)$ be a scalar function. Let $(x_0, y_0)$ be a point in its domain, and let $\mathbf{u} = \langle a, b \rangle$ be a **unit vector** (meaning $\|\mathbf{u}\| = \sqrt{a^2 + b^2} = 1$). The directional derivative of $f$ at $(x_0, y_0)$ in the direction of $\mathbf{u}$, denoted by $D_{\mathbf{u}}f(x_0, y_0)$, is defined as:

$$ D_{\mathbf{u}}f(x_0, y_0) = \lim_{h \to 0} \frac{f(x_0 + ha, y_0 + hb) - f(x_0, y_0)}{h} $$

This definition might look familiar! It's exactly the definition of the derivative, but instead of moving along the x or y axis, we're moving in the direction specified by $\mathbf{u}$. The term $(x_0 + ha, y_0 + hb)$ represents a point along the line passing through $(x_0, y_0)$ with direction vector $\mathbf{u}$. As $h$ approaches 0, this point gets infinitesimally close to $(x_0, y_0)$ along that specific direction.

**Important Note:** The direction vector $\mathbf{u}$ **must be a unit vector**. If you are given a direction vector that is not a unit vector, you must normalize it first by dividing it by its magnitude.

### Connecting with Partial Derivatives: The Gradient

Calculating the directional derivative directly from the limit definition can be cumbersome. Thankfully, there's a much more elegant and efficient way, especially when $f$ is differentiable.

If $f(x, y)$ has continuous first partial derivatives in an open region containing $(x_0, y_0)$, then the directional derivative can be computed using the **gradient** of $f$:

The **gradient of $f$**, denoted by $\nabla f$ (read as "nabla f" or "grad f"), is a vector-valued function defined as:

$$ \nabla f(x, y) = \left\langle \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y} \right\rangle $$

For a function of three variables, $f(x, y, z)$, the gradient is:

$$ \nabla f(x, y, z) = \left\langle \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}, \frac{\partial f}{\partial z} \right\rangle $$

Now, here's the crucial connection. If $\mathbf{u} = \langle a, b \rangle$ is a unit vector, then the directional derivative is simply the dot product of the gradient of $f$ at $(x_0, y_0)$ and the unit vector $\mathbf{u}$:

$$ D_{\mathbf{u}}f(x_0, y_0) = \nabla f(x_0, y_0) \cdot \mathbf{u} $$

For $f(x, y, z)$ and a unit vector $\mathbf{u} = \langle a, b, c \rangle$:

$$ D_{\mathbf{u}}f(x_0, y_0, z_0) = \nabla f(x_0, y_0, z_0) \cdot \mathbf{u} $$

This formula is incredibly powerful! It transforms a limit calculation into a straightforward calculation of partial derivatives and a dot product. This is a key takeaway for your exams and for understanding the physical implications.

**Why does this work?** Let's see.
$f(x_0 + ha, y_0 + hb) - f(x_0, y_0)$
Using the Linear Approximation (or Taylor expansion to first order):
$f(x_0 + \Delta x, y_0 + \Delta y) \approx f(x_0, y_0) + \frac{\partial f}{\partial x}(x_0, y_0)\Delta x + \frac{\partial f}{\partial y}(x_0, y_0)\Delta y$
Here, $\Delta x = ha$ and $\Delta y = hb$.
So, $f(x_0 + ha, y_0 + hb) - f(x_0, y_0) \approx \frac{\partial f}{\partial x}(x_0, y_0)(ha) + \frac{\partial f}{\partial y}(x_0, y_0)(hb)$
Divide by $h$:
$\frac{f(x_0 + ha, y_0 + hb) - f(x_0, y_0)}{h} \approx \frac{\partial f}{\partial x}(x_0, y_0)a + \frac{\partial f}{\partial y}(x_0, y_0)b$
Taking the limit as $h \to 0$, this approximation becomes exact:
$D_{\mathbf{u}}f(x_0, y_0) = \frac{\partial f}{\partial x}(x_0, y_0)a + \frac{\partial f}{\partial y}(x_0, y_0)b$
And this is precisely $\nabla f(x_0, y_0) \cdot \mathbf{u}$.

### Example 1: Temperature on a Metal Plate

Let's say the temperature distribution on a thin metal plate is given by $T(x, y) = 20 + 0.5x^2 + 0.5y^2$ degrees Celsius. We are standing at the point $(2, 1)$. We want to know how the temperature changes if we start walking directly east.

1.  **Identify the function and the point:**
    $T(x, y) = 20 + 0.5x^2 + 0.5y^2$
    Point: $(x_0, y_0) = (2, 1)$

2.  **Determine the direction vector:**
    Walking directly east means moving along the positive x-axis. The direction vector is $\langle 1, 0 \rangle$.
    Is it a unit vector? Yes, $\|\langle 1, 0 \rangle\| = \sqrt{1^2 + 0^2} = 1$. So, $\mathbf{u} = \langle 1, 0 \rangle$.

3.  **Calculate the gradient of $T(x, y)$:**
    $\frac{\partial T}{\partial x} = \frac{\partial}{\partial x}(20 + 0.5x^2 + 0.5y^2) = 0 + 0.5(2x) + 0 = x$
    $\frac{\partial T}{\partial y} = \frac{\partial}{\partial y}(20 + 0.5x^2 + 0.5y^2) = 0 + 0 + 0.5(2y) = y$
    So, $\nabla T(x, y) = \langle x, y \rangle$.

4.  **Evaluate the gradient at the point $(2, 1)$:**
    $\nabla T(2, 1) = \langle 2, 1 \rangle$.

5.  **Compute the dot product:**
    $D_{\mathbf{u}}T(2, 1) = \nabla T(2, 1) \cdot \mathbf{u} = \langle 2, 1 \rangle \cdot \langle 1, 0 \rangle = (2)(1) + (1)(0) = 2$.

**Interpretation:** At the point $(2, 1)$, if you start walking directly east, the temperature is increasing at a rate of 2 degrees Celsius per unit distance. This makes sense intuitively: since the temperature increases with $x^2$ and $y^2$, and we are away from the origin where the temperature is lowest ($T(0,0)=20$), moving away from the origin in any direction will increase the temperature. Moving east is moving in a direction with a positive x-component, which contributes to the increase.

This calculation is much simpler than using the limit definition! This highlights the importance of the gradient and connects to **CO3** by showing how we compute derivatives along specific paths.

### Example 2: Hiking on a Mountain

Let the altitude of a mountain be given by $h(x, y) = 1000 - 0.1x^2 - 0.2y^2$ (in meters), where $x$ is the distance east and $y$ is the distance north from a base camp. Suppose you are at a location corresponding to the point $(30, 40)$ meters from the base camp.

You want to know how the altitude changes if you start walking in the direction of the town, which is located at $(-50, -10)$ meters relative to the base camp.

1.  **Function and Point:**
    $h(x, y) = 1000 - 0.1x^2 - 0.2y^2$
    Current location: $(x_0, y_0) = (30, 40)$.

2.  **Direction Vector:**
    The town is at $(-50, -10)$. To find the direction from $(30, 40)$ to $(-50, -10)$, we subtract the coordinates of our current position from the coordinates of the destination:
    Direction vector $\mathbf{v} = \langle -50 - 30, -10 - 40 \rangle = \langle -80, -50 \rangle$.

    **Crucial step:** This is not a unit vector. We need to normalize it.
    Magnitude of $\mathbf{v}$: $\|\mathbf{v}\| = \sqrt{(-80)^2 + (-50)^2} = \sqrt{6400 + 2500} = \sqrt{8900} = 10\sqrt{89}$.
    The unit vector in this direction is:
    $\mathbf{u} = \frac{\mathbf{v}}{\|\mathbf{v}\|} = \frac{\langle -80, -50 \rangle}{10\sqrt{89}} = \left\langle \frac{-80}{10\sqrt{89}}, \frac{-50}{10\sqrt{89}} \right\rangle = \left\langle \frac{-8}{\sqrt{89}}, \frac{-5}{\sqrt{89}} \right\rangle$.

3.  **Calculate the gradient of $h(x, y)$:**
    $\frac{\partial h}{\partial x} = \frac{\partial}{\partial x}(1000 - 0.1x^2 - 0.2y^2) = -0.2x$
    $\frac{\partial h}{\partial y} = \frac{\partial}{\partial y}(1000 - 0.1x^2 - 0.2y^2) = -0.4y$
    $\nabla h(x, y) = \langle -0.2x, -0.4y \rangle$.

4.  **Evaluate the gradient at $(30, 40)$:**
    $\nabla h(30, 40) = \langle -0.2(30), -0.4(40) \rangle = \langle -6, -16 \rangle$.

5.  **Compute the dot product:**
    $D_{\mathbf{u}}h(30, 40) = \nabla h(30, 40) \cdot \mathbf{u} = \langle -6, -16 \rangle \cdot \left\langle \frac{-8}{\sqrt{89}}, \frac{-5}{\sqrt{89}} \right\rangle$
    $D_{\mathbf{u}}h(30, 40) = (-6) \left(\frac{-8}{\sqrt{89}}\right) + (-16) \left(\frac{-5}{\sqrt{89}}\right)$
    $D_{\mathbf{u}}h(30, 40) = \frac{48}{\sqrt{89}} + \frac{80}{\sqrt{89}} = \frac{128}{\sqrt{89}}$.

    Let's approximate this value: $\sqrt{89} \approx 9.43$.
    $D_{\mathbf{u}}h(30, 40) \approx \frac{128}{9.43} \approx 13.57$.

**Interpretation:** At the location $(30, 40)$, if you start walking towards the town, your altitude is increasing at approximately 13.57 meters per meter. So, you're going uphill! This is a direct application of the directional derivative, showing how a scalar quantity (altitude) changes along a specified path (towards the town). This is highly relevant for **CO1** which talks about applying derivatives to engineering problems. Imagine designing a ski slope or a hiking trail – you'd definitely want to know the rate of ascent or descent!

### Properties and Interpretations of the Directional Derivative

The directional derivative, $D_{\mathbf{u}}f = \nabla f \cdot \mathbf{u}$, has some beautiful properties and interpretations, especially relating to the gradient vector.

1.  **Maximum Rate of Increase:** The directional derivative is maximized when $\mathbf{u}$ points in the same direction as $\nabla f$. Since $\|\mathbf{u}\| = 1$, the maximum value of $\nabla f \cdot \mathbf{u}$ is $\|\nabla f\|$.
    This means the gradient vector $\nabla f$ points in the direction of the steepest ascent of the function $f$. The magnitude of the gradient, $\|\nabla f\|$, is the rate of change in that steepest direction.

2.  **Minimum Rate of Increase (Maximum Rate of Decrease):** The directional derivative is minimized when $\mathbf{u}$ points in the opposite direction of $\nabla f$. The minimum value is $-\|\nabla f\|$. This indicates the direction of steepest descent.

3.  **Zero Rate of Change:** The directional derivative is zero when $\mathbf{u}$ is orthogonal to $\nabla f$ (i.e., $\nabla f \cdot \mathbf{u} = 0$). This means that if you move in a direction perpendicular to the gradient, the function's value doesn't change instantaneously.

    *   **Connection to Level Curves/Surfaces:** For a function $f(x, y)$, the level curves are defined by $f(x, y) = c$ for various constants $c$. The gradient vector $\nabla f$ is always orthogonal (perpendicular) to the level curve passing through that point. If you walk along a level curve, your altitude (or whatever $f$ represents) doesn't change. The directional derivative is zero along the level curve. This is a profound geometric interpretation, as discussed in textbooks like Anton, Biven, Davis and Thomas' Calculus.

### Example 3: Steepest Ascent/Descent

Let's go back to our mountain altitude function $h(x, y) = 1000 - 0.1x^2 - 0.2y^2$. Suppose we are at the point $(10, 20)$.

1.  **Gradient at $(10, 20)$:**
    $\nabla h(x, y) = \langle -0.2x, -0.4y \rangle$
    $\nabla h(10, 20) = \langle -0.2(10), -0.4(20) \rangle = \langle -2, -8 \rangle$.

2.  **Direction of Steepest Ascent:**
    The direction of steepest ascent is the direction of $\nabla h(10, 20) = \langle -2, -8 \rangle$.
    To get a unit vector, we normalize:
    $\|\nabla h(10, 20)\| = \sqrt{(-2)^2 + (-8)^2} = \sqrt{4 + 64} = \sqrt{68} = 2\sqrt{17}$.
    The unit vector for steepest ascent is $\mathbf{u}_{up} = \frac{\langle -2, -8 \rangle}{2\sqrt{17}} = \left\langle \frac{-1}{\sqrt{17}}, \frac{-4}{\sqrt{17}} \right\rangle$.

3.  **Rate of Steepest Ascent:**
    This is the magnitude of the gradient:
    $D_{\mathbf{u}_{up}}h(10, 20) = \|\nabla h(10, 20)\| = 2\sqrt{17}$.
    So, at $(10, 20)$, the altitude increases fastest in the direction $\left\langle \frac{-1}{\sqrt{17}}, \frac{-4}{\sqrt{17}} \right\rangle$, and the rate of increase is $2\sqrt{17}$ meters per meter.

4.  **Direction of Steepest Descent:**
    This is the opposite direction of the gradient:
    $\mathbf{u}_{down} = -\mathbf{u}_{up} = \left\langle \frac{1}{\sqrt{17}}, \frac{4}{\sqrt{17}} \right\rangle$.

5.  **Rate of Steepest Descent:**
    This is the negative of the magnitude of the gradient:
    $D_{\mathbf{u}_{down}}h(10, 20) = -\|\nabla h(10, 20)\| = -2\sqrt{17}$.
    The altitude decreases fastest in the direction $\left\langle \frac{1}{\sqrt{17}}, \frac{4}{\sqrt{17}} \right\rangle$, with a rate of $-2\sqrt{17}$ meters per meter.

6.  **Direction of No Change in Altitude:**
    These are directions perpendicular to $\nabla h(10, 20) = \langle -2, -8 \rangle$. Any vector $\langle a, b \rangle$ such that $\langle -2, -8 \rangle \cdot \langle a, b \rangle = 0$ will have a directional derivative of 0.
    $-2a - 8b = 0 \implies a = -4b$.
    So, any unit vector of the form $\left\langle \frac{-4b}{\sqrt{16b^2+b^2}}, \frac{b}{\sqrt{16b^2+b^2}} \right\rangle = \left\langle \frac{-4b}{|b|\sqrt{17}}, \frac{b}{|b|\sqrt{17}} \right\rangle$.
    For example, if $b=1$, $\mathbf{u} = \left\langle \frac{-4}{\sqrt{17}}, \frac{1}{\sqrt{17}} \right\rangle$.
    Check: $\langle -2, -8 \rangle \cdot \left\langle \frac{-4}{\sqrt{17}}, \frac{1}{\sqrt{17}} \right\rangle = \frac{8}{\sqrt{17}} - \frac{8}{\sqrt{17}} = 0$.
    If you walk in this direction, your altitude does not change. This direction is tangent to the level curve of $h(x, y)$ at $(10, 20)$.

This example beautifully encapsulates the geometric meaning of the gradient and its relation to directional derivatives, directly linking to **CO1** and **CO3**.

### Generalization to Three Dimensions

The concepts extend seamlessly to functions of three variables, $f(x, y, z)$.
The gradient is $\nabla f(x, y, z) = \left\langle \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}, \frac{\partial f}{\partial z} \right\rangle$.
If $\mathbf{u} = \langle a, b, c \rangle$ is a unit vector, then the directional derivative is:

$$ D_{\mathbf{u}}f(x, y, z) = \nabla f(x, y, z) \cdot \mathbf{u} = \frac{\partial f}{\partial x}a + \frac{\partial f}{\partial y}b + \frac{\partial f}{\partial z}c $$

The interpretations of steepest ascent/descent also hold. The level sets now become **level surfaces** (e.g., equipotential surfaces in electrostatics, isotherms in thermodynamics). The gradient $\nabla f$ is orthogonal to the level surface $f(x, y, z) = c$ at any point on that surface.

### Example 4: Electric Potential

The electric potential in a region of space is given by $V(x, y, z) = \frac{10}{\sqrt{x^2+y^2+z^2}}$ volts. Consider a point $P$ at $(3, 4, 0)$. We want to find the rate of change of potential if we move from $P$ in the direction of the point $Q$ at $(6, 8, 0)$.

1.  **Function and Point:**
    $V(x, y, z) = 10(x^2+y^2+z^2)^{-1/2}$
    Current point $P$: $(x_0, y_0, z_0) = (3, 4, 0)$.

2.  **Direction Vector:**
    Destination point $Q$: $(6, 8, 0)$.
    Vector from $P$ to $Q$: $\mathbf{v} = \langle 6-3, 8-4, 0-0 \rangle = \langle 3, 4, 0 \rangle$.
    Normalize $\mathbf{v}$:
    $\|\mathbf{v}\| = \sqrt{3^2 + 4^2 + 0^2} = \sqrt{9+16} = \sqrt{25} = 5$.
    Unit vector $\mathbf{u} = \frac{\mathbf{v}}{\|\mathbf{v}\|} = \frac{\langle 3, 4, 0 \rangle}{5} = \left\langle \frac{3}{5}, \frac{4}{5}, 0 \right\rangle$.

3.  **Gradient of $V(x, y, z)$:**
    Let $r = \sqrt{x^2+y^2+z^2} = (x^2+y^2+z^2)^{1/2}$. Then $V = 10r^{-1}$.
    $\frac{\partial V}{\partial x} = 10 \cdot (-\frac{1}{2}) r^{-3/2} \cdot \frac{\partial r}{\partial x} = -5 r^{-3/2} \cdot \frac{1}{2}(x^2+y^2+z^2)^{-1/2} \cdot 2x = -5 \frac{x}{(x^2+y^2+z^2)^{3/2}} = -5 \frac{x}{r^3}$.
    Similarly, $\frac{\partial V}{\partial y} = -5 \frac{y}{r^3}$ and $\frac{\partial V}{\partial z} = -5 \frac{z}{r^3}$.
    So, $\nabla V(x, y, z) = \left\langle \frac{-5x}{r^3}, \frac{-5y}{r^3}, \frac{-5z}{r^3} \right\rangle = -\frac{5}{r^3} \langle x, y, z \rangle$.

4.  **Evaluate the gradient at $P(3, 4, 0)$:**
    At $P$, $r = \sqrt{3^2+4^2+0^2} = 5$.
    $\nabla V(3, 4, 0) = -\frac{5}{5^3} \langle 3, 4, 0 \rangle = -\frac{5}{125} \langle 3, 4, 0 \rangle = -\frac{1}{25} \langle 3, 4, 0 \rangle = \left\langle -\frac{3}{25}, -\frac{4}{25}, 0 \right\rangle$.

5.  **Compute the dot product:**
    $D_{\mathbf{u}}V(3, 4, 0) = \nabla V(3, 4, 0) \cdot \mathbf{u}$
    $D_{\mathbf{u}}V(3, 4, 0) = \left\langle -\frac{3}{25}, -\frac{4}{25}, 0 \right\rangle \cdot \left\langle \frac{3}{5}, \frac{4}{5}, 0 \right\rangle$
    $D_{\mathbf{u}}V(3, 4, 0) = \left(-\frac{3}{25}\right)\left(\frac{3}{5}\right) + \left(-\frac{4}{25}\right)\left(\frac{4}{5}\right) + (0)(0)$
    $D_{\mathbf{u}}V(3, 4, 0) = -\frac{9}{125} - \frac{16}{125} = -\frac{25}{125} = -\frac{1}{5}$.

**Interpretation:** Moving from point $P(3, 4, 0)$ towards point $Q(6, 8, 0)$, the electric potential is decreasing at a rate of $1/5$ volts per unit distance. In physics, the electric field $\mathbf{E}$ is related to the potential $V$ by $\mathbf{E} = -\nabla V$. The direction of the electric field is the direction of the negative gradient, which is the direction of the steepest decrease in potential. This is where directional derivatives become crucial in understanding physical phenomena like force fields and heat flow. This example connects strongly to **CO1** and **CO3**.

### Common Pitfalls and Exam Tips

*   **Forgetting to normalize the direction vector:** This is the most common mistake. Always ensure your direction vector $\mathbf{u}$ has a magnitude of 1. If it doesn't, divide it by its magnitude.
*   **Confusing scalar fields with vector-valued functions:** Remember, the directional derivative tells you how a scalar quantity changes.
*   **Gradient calculation errors:** Be very careful with your partial derivative calculations. A small error here will lead to an incorrect final answer.
*   **Understanding the question:** Make sure you understand whether the question asks for the directional derivative in a specific direction, or the direction of steepest ascent/descent, or the value of steepest ascent/descent.
*   **Context matters:** Always try to interpret your result in the context of the problem (temperature, altitude, potential, etc.). Does the sign and magnitude make sense?

### Summary of Key Concepts

*   **Scalar Field:** A function that assigns a scalar value to each point in space (e.g., $f(x, y)$ or $f(x, y, z)$).
*   **Directional Derivative:** The instantaneous rate of change of a scalar field $f$ at a point in a specific direction $\mathbf{u}$.
*   **Gradient:** $\nabla f = \left\langle \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y} \right\rangle$ (for 2D) or $\left\langle \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}, \frac{\partial f}{\partial z} \right\rangle$ (for 3D).
*   **Formula:** $D_{\mathbf{u}}f = \nabla f \cdot \mathbf{u}$, where $\mathbf{u}$ is a **unit vector**.
*   **Geometric Interpretation:** $\nabla f$ points in the direction of the greatest rate of increase of $f$, and $\|\nabla f\|$ is that maximum rate. $\nabla f$ is perpendicular to level curves/surfaces.

This covers the core of the directional derivative. It's a powerful tool that bridges the gap between simple derivatives and the more complex behaviors of functions in higher dimensions. Keep practicing these calculations, and you'll find it becomes quite natural!

---

### Sample Questions and Answers

**Question 1 (Conceptual):**
What is the geometric meaning of the gradient vector $\nabla f$ at a point $P$?
**Answer:** The gradient vector $\nabla f$ at a point $P$ points in the direction of the steepest ascent of the function $f$ at $P$. Its magnitude, $\|\nabla f\|$, represents the maximum rate of increase of $f$ at $P$. Furthermore, $\nabla f$ is orthogonal to the level curve (or level surface) of $f$ that passes through $P$.

**Question 2 (Calculation):**
Find the directional derivative of $f(x, y) = x^2y - xy^3$ at the point $(2, 1)$ in the direction of the vector $\mathbf{v} = \langle 3, -4 \rangle$.
**Answer:**
1.  **Find the gradient:**
    $\frac{\partial f}{\partial x} = 2xy - y^3$
    $\frac{\partial f}{\partial y} = x^2 - 3xy^2$
    $\nabla f(x, y) = \langle 2xy - y^3, x^2 - 3xy^2 \rangle$.

2.  **Evaluate the gradient at $(2, 1)$:**
    $\nabla f(2, 1) = \langle 2(2)(1) - (1)^3, (2)^2 - 3(2)(1)^2 \rangle = \langle 4 - 1, 4 - 6 \rangle = \langle 3, -2 \rangle$.

3.  **Normalize the direction vector:**
    $\mathbf{v} = \langle 3, -4 \rangle$.
    $\|\mathbf{v}\| = \sqrt{3^2 + (-4)^2} = \sqrt{9 + 16} = \sqrt{25} = 5$.
    The unit vector is $\mathbf{u} = \frac{\mathbf{v}}{\|\mathbf{v}\|} = \left\langle \frac{3}{5}, -\frac{4}{5} \right\rangle$.

4.  **Compute the dot product:**
    $D_{\mathbf{u}}f(2, 1) = \nabla f(2, 1) \cdot \mathbf{u} = \langle 3, -2 \rangle \cdot \left\langle \frac{3}{5}, -\frac{4}{5} \right\rangle$
    $D_{\mathbf{u}}f(2, 1) = (3)\left(\frac{3}{5}\right) + (-2)\left(-\frac{4}{5}\right) = \frac{9}{5} + \frac{8}{5} = \frac{17}{5}$.

**Question 3 (Application/Interpretation):**
For the function $f(x, y) = e^{xy} + y^2$, find the direction in which $f$ increases most rapidly at the point $(1, 2)$. Also, find the rate of this maximum increase.
**Answer:**
1.  **Find the gradient:**
    $\frac{\partial f}{\partial x} = ye^{xy}$
    $\frac{\partial f}{\partial y} = xe^{xy} + 2y$
    $\nabla f(x, y) = \langle ye^{xy}, xe^{xy} + 2y \rangle$.

2.  **Evaluate the gradient at $(1, 2)$:**
    $\nabla f(1, 2) = \langle 2e^{(1)(2)}, 1e^{(1)(2)} + 2(2) \rangle = \langle 2e^2, e^2 + 4 \rangle$.

3.  **Direction of most rapid increase:** This is the direction of the gradient vector itself. The unit vector in this direction is:
    $\mathbf{u}_{max} = \frac{\nabla f(1, 2)}{\|\nabla f(1, 2)\|}$.
    The direction is given by the vector $\langle 2e^2, e^2 + 4 \rangle$.

4.  **Rate of most rapid increase:** This is the magnitude of the gradient vector at $(1, 2)$.
    $\|\nabla f(1, 2)\| = \sqrt{(2e^2)^2 + (e^2 + 4)^2}$
    $\|\nabla f(1, 2)\| = \sqrt{4e^4 + (e^4 + 8e^2 + 16)}$
    $\|\nabla f(1, 2)\| = \sqrt{5e^4 + 8e^2 + 16}$.
    So, the maximum rate of increase is $\sqrt{5e^4 + 8e^2 + 16}$.

**Question 4 (Three Dimensions):**
Find the directional derivative of $f(x, y, z) = x^2 + y^2 - z^2$ at $(1, 1, 1)$ in the direction $\langle 2, -1, 2 \rangle$.
**Answer:**
1.  **Find the gradient:**
    $\frac{\partial f}{\partial x} = 2x$, $\frac{\partial f}{\partial y} = 2y$, $\frac{\partial f}{\partial z} = -2z$.
    $\nabla f(x, y, z) = \langle 2x, 2y, -2z \rangle$.

2.  **Evaluate the gradient at $(1, 1, 1)$:**
    $\nabla f(1, 1, 1) = \langle 2(1), 2(1), -2(1) \rangle = \langle 2, 2, -2 \rangle$.

3.  **Normalize the direction vector:**
    $\mathbf{v} = \langle 2, -1, 2 \rangle$.
    $\|\mathbf{v}\| = \sqrt{2^2 + (-1)^2 + 2^2} = \sqrt{4 + 1 + 4} = \sqrt{9} = 3$.
    The unit vector is $\mathbf{u} = \left\langle \frac{2}{3}, -\frac{1}{3}, \frac{2}{3} \right\rangle$.

4.  **Compute the dot product:**
    $D_{\mathbf{u}}f(1, 1, 1) = \nabla f(1, 1, 1) \cdot \mathbf{u} = \langle 2, 2, -2 \rangle \cdot \left\langle \frac{2}{3}, -\frac{1}{3}, \frac{2}{3} \right\rangle$
    $D_{\mathbf{u}}f(1, 1, 1) = (2)\left(\frac{2}{3}\right) + (2)\left(-\frac{1}{3}\right) + (-2)\left(\frac{2}{3}\right)$
    $D_{\mathbf{u}}f(1, 1, 1) = \frac{4}{3} - \frac{2}{3} - \frac{4}{3} = -\frac{2}{3}$.
