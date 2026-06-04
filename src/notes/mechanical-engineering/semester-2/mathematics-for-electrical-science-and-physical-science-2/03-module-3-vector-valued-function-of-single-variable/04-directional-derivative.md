---
title: "Directional derivative"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2"
module: "Module 3: Vector valued function of single variable "
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1edffeb4799d95e839ad"
status: "completed"
scrapedAt: "2026-05-20T17:45:55.301Z"
---
## Module 3: Vector Valued Functions of a Single Variable - Directional Derivative

Welcome, everyone! Today, we're diving into a really fascinating and practical concept in multivariable calculus: the **Directional Derivative**. This topic is crucial for understanding how quantities change in different directions, which is fundamental in many areas of electrical science and physical science. Think about it: if you're measuring temperature, voltage, or magnetic field strength across a space, you'll want to know how these values change *as you move* in a specific direction. That's precisely what the directional derivative helps us quantify.

This topic directly builds upon our understanding of partial derivatives, which you've already encountered. Remember how partial derivatives tell us the rate of change of a function with respect to one variable while holding others constant? The directional derivative takes this a step further by considering the rate of change along *any arbitrary direction*. This is where we start bridging the gap to multivariable concepts and their applications, aligning with our Course Outcome 1 (CO1): *Compute the partial and total derivatives and maxima and minima of multivariable functions and to apply in engineering problems.*

### 1. What is a Directional Derivative? The Intuitive Idea

Imagine you're standing on a hillside. The height of the hill at any point $(x, y)$ can be represented by a function, say $f(x, y)$. If you want to know how quickly the altitude is changing as you move straight north (along the y-axis), you'd calculate the partial derivative with respect to $y$, $\frac{\partial f}{\partial y}$. If you moved straight east (along the x-axis), you'd use $\frac{\partial f}{\partial x}$.

But what if you want to move in a direction that's neither purely east nor purely north? What if you decide to walk diagonally, say, in the northeast direction? This is where the directional derivative comes in! It measures the instantaneous rate of change of the function $f(x, y)$ at a specific point, in a specific direction.

Think of it as asking: "If I take a tiny step in *this particular direction* from *this specific spot*, how much will the value of the function (like temperature, pressure, or altitude) change per unit distance I travel?"

### 2. Formalizing the Concept: The Math Behind the Movement

Let's say we have a scalar-valued function of two variables, $f(x, y)$. We want to find its rate of change at a point $(x_0, y_0)$ in the direction of a unit vector $\mathbf{u} = \langle a, b \rangle$. Here, $\mathbf{u}$ is a *unit* vector because we're interested in the rate of change *per unit distance* traveled in that direction. If it wasn't a unit vector, the rate of change would depend on the magnitude of the step, not just the direction.

Consider a point $(x, y)$ that is a small displacement from $(x_0, y_0)$ in the direction of $\mathbf{u}$. This new point can be written as $(x_0 + ta, y_0 + tb)$, where $t$ is the distance traveled. We are interested in how $f(x, y)$ changes as $t$ changes, specifically at $t=0$.

The directional derivative of $f$ at $(x_0, y_0)$ in the direction of $\mathbf{u}$ is defined as:

$D_{\mathbf{u}}f(x_0, y_0) = \lim_{h \to 0} \frac{f(x_0 + ha, y_0 + hb) - f(x_0, y_0)}{h}$

This looks a lot like the definition of a regular derivative, doesn't it? We're essentially looking at the change in the function's value over a small change in "distance" along the specified direction.

Now, this limit definition is fundamental, but it's not always the easiest way to compute the directional derivative. This is where the gradient vector comes in, and it's a vital concept from our textbooks, particularly stressed in chapters discussing multivariable calculus. Both Anton, Biven, and Davis (12th ed.) and Weir, Hass, et al. (15th ed.) dedicate significant sections to this.

### 3. The Gradient: Our Shortcut to Directional Change

The **gradient** of a function $f(x, y)$, denoted by $\nabla f(x, y)$ or $\text{grad } f(x, y)$, is a vector that points in the direction of the greatest rate of increase of the function. It's defined as:

$\nabla f(x, y) = \left\langle \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y} \right\rangle$

For a function of three variables, $f(x, y, z)$, the gradient is:

$\nabla f(x, y, z) = \left\langle \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}, \frac{\partial f}{\partial z} \right\rangle$

The key insight, and a very important result you'll see in all standard calculus texts (like Kreyszig and Stewart), is that the directional derivative can be computed much more easily using the gradient:

$D_{\mathbf{u}}f(x_0, y_0) = \nabla f(x_0, y_0) \cdot \mathbf{u}$

where $\cdot$ denotes the dot product, and $\mathbf{u}$ is the *unit* vector in the direction of interest.

This is such a powerful result! It tells us that the rate of change in any direction $\mathbf{u}$ is simply the projection of the gradient vector onto that direction. If $\mathbf{u}$ points in the same direction as $\nabla f$, the directional derivative is maximized. If it points in the opposite direction, the directional derivative is minimized (i.e., the greatest rate of decrease). If $\mathbf{u}$ is orthogonal to $\nabla f$, the directional derivative is zero, meaning the function is not changing in that direction at that point.

This connection between the gradient and directional derivatives is central to CO1, as it allows us to analyze the behavior of multivariable functions and find where they increase or decrease most rapidly.

### 4. Examples to Make it Click

Let's work through an example. Suppose the temperature on a metal plate is given by the function $T(x, y) = 20 + x^2 - y^2$ degrees Celsius, where $x$ and $y$ are in meters. We are at the point $(1, 2)$.

**a) What is the rate of change of temperature if we move directly East?**

East corresponds to the positive x-direction. The unit vector in this direction is $\mathbf{u} = \langle 1, 0 \rangle$.

First, let's find the gradient of $T(x, y)$:
$\nabla T(x, y) = \left\langle \frac{\partial T}{\partial x}, \frac{\partial T}{\partial y} \right\rangle$
$\frac{\partial T}{\partial x} = 2x$
$\frac{\partial T}{\partial y} = -2y$
So, $\nabla T(x, y) = \langle 2x, -2y \rangle$.

Now, evaluate the gradient at our point $(1, 2)$:
$\nabla T(1, 2) = \langle 2(1), -2(2) \rangle = \langle 2, -4 \rangle$.

The directional derivative in the East direction is:
$D_{\mathbf{u}}T(1, 2) = \nabla T(1, 2) \cdot \mathbf{u} = \langle 2, -4 \rangle \cdot \langle 1, 0 \rangle = (2)(1) + (-4)(0) = 2$.

So, if we move East from $(1, 2)$, the temperature increases at a rate of 2 degrees Celsius per meter.

**b) What is the rate of change of temperature if we move Northeast?**

Northeast means we are moving equally in the x and y directions. The direction vector is $\langle 1, 1 \rangle$. To make it a unit vector, we divide by its magnitude:
Magnitude of $\langle 1, 1 \rangle$ is $\sqrt{1^2 + 1^2} = \sqrt{2}$.
So, the unit vector is $\mathbf{u} = \left\langle \frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}} \right\rangle$.

Now, calculate the directional derivative:
$D_{\mathbf{u}}T(1, 2) = \nabla T(1, 2) \cdot \mathbf{u} = \langle 2, -4 \rangle \cdot \left\langle \frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}} \right\rangle$
$D_{\mathbf{u}}T(1, 2) = (2) \left(\frac{1}{\sqrt{2}}\right) + (-4) \left(\frac{1}{\sqrt{2}}\right) = \frac{2}{\sqrt{2}} - \frac{4}{\sqrt{2}} = -\frac{2}{\sqrt{2}} = -\sqrt{2}$.

This means if we move Northeast from $(1, 2)$, the temperature *decreases* at a rate of $\sqrt{2}$ degrees Celsius per meter. Interesting, right? Even though the temperature is increasing to the East, it's decreasing to the Northeast. This highlights how the direction matters greatly.

**c) In which direction is the temperature increasing most rapidly?**

This is where the gradient really shines! The temperature increases most rapidly in the direction of the gradient vector itself. We found $\nabla T(1, 2) = \langle 2, -4 \rangle$.
So, the direction of maximum increase is in the direction of the vector $\langle 2, -4 \rangle$.
To represent this as a unit vector, we normalize it:
Magnitude is $\sqrt{2^2 + (-4)^2} = \sqrt{4 + 16} = \sqrt{20} = 2\sqrt{5}$.
The unit vector is $\mathbf{u}_{max} = \left\langle \frac{2}{2\sqrt{5}}, \frac{-4}{2\sqrt{5}} \right\rangle = \left\langle \frac{1}{\sqrt{5}}, \frac{-2}{\sqrt{5}} \right\rangle$.

The rate of increase in this direction is the magnitude of the gradient:
$||\nabla T(1, 2)|| = ||\langle 2, -4 \rangle|| = 2\sqrt{5}$.
So, the maximum rate of temperature increase is $2\sqrt{5}$ degrees Celsius per meter, occurring in the direction $\left\langle \frac{1}{\sqrt{5}}, \frac{-2}{\sqrt{5}} \right\rangle$.

This concept directly links to CO1 by helping us identify maximum rates of change, a common requirement in optimization problems.

### 5. Beyond Two Dimensions: Extending the Idea

The concept of the directional derivative and gradient extends naturally to functions of three or more variables, which is very common in physical sciences and engineering.

Consider a function of three variables, $f(x, y, z)$. This could represent, for instance, the electric potential at a point in space, or the density of a material.
The gradient is $\nabla f(x, y, z) = \left\langle \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}, \frac{\partial f}{\partial z} \right\rangle$.

If we want to know the rate of change of $f$ at $(x_0, y_0, z_0)$ in the direction of a *unit* vector $\mathbf{u} = \langle a, b, c \rangle$, the formula remains the same:

$D_{\mathbf{u}}f(x_0, y_0, z_0) = \nabla f(x_0, y_0, z_0) \cdot \mathbf{u}$

**Real-world connection:** In electromagnetism, the electric field $\mathbf{E}$ is related to the electric potential $V$ by $\mathbf{E} = -\nabla V$. This tells us that the electric field points in the direction of the steepest *decrease* in electric potential. The directional derivative of $V$ in the direction of $\mathbf{E}$ would be related to the magnitude of the electric field. This is a direct application touching upon electrical science principles.

### 6. Key Takeaways and Exam Tips

*   **What is a directional derivative?** It's the rate of change of a multivariable function at a point in a specific direction.
*   **How to calculate it?** The easiest way is using the gradient: $D_{\mathbf{u}}f = \nabla f \cdot \mathbf{u}$.
*   **What is the gradient?** $\nabla f = \left\langle \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}, \dots \right\rangle$. It points in the direction of the greatest rate of increase.
*   **Maximum rate of increase:** This occurs in the direction of $\nabla f$, and the rate is $||\nabla f||$.
*   **Minimum rate of increase (maximum rate of decrease):** This occurs in the direction of $-\nabla f$, and the rate is $-||\nabla f||$.
*   **Zero rate of change:** This occurs in any direction orthogonal to $\nabla f$.

**Common Pitfalls:**
    *   Forgetting to make the direction vector a *unit* vector. The formula $\nabla f \cdot \mathbf{u}$ assumes $\mathbf{u}$ is a unit vector. If you are given a direction vector $\mathbf{v}$, you must normalize it: $\mathbf{u} = \frac{\mathbf{v}}{||\mathbf{v}||}$.
    *   Confusing the direction of maximum increase with the rate of maximum increase. The direction is the unit vector $\mathbf{u}$, while the rate is $||\nabla f||$.
    *   Mistakes in calculating partial derivatives. Always double-check these!

This topic is heavily tested, especially in exams, as it consolidates your understanding of partial derivatives and introduces vector calculus concepts. Questions often involve finding the rate of change in a given direction, the direction of maximum/minimum change, or the maximum/minimum rate itself.

### 7. Connecting to Course Outcomes

*   **CO1 (Derivatives, Maxima/Minima, Applications):** This entire topic is a direct application of CO1. We compute partial derivatives to find the gradient, and the gradient helps us determine the directions and magnitudes of maximum and minimum rates of change, which are essentially local extrema of the function along specific paths. The examples we discussed (temperature distribution, electric potential) are typical engineering applications.
*   **CO3 (Derivatives of Vector Functions, Line Integrals):** While this module focuses on scalar functions, the directional derivative is a stepping stone towards understanding how vector functions themselves change, and it's foundational for line integrals, which measure how a vector field behaves along a curve. The gradient of a scalar function is a vector field, and its properties are crucial in later topics.

This completes our introduction to the directional derivative. Remember the power of the gradient, and practice those calculations!

---

## Sample Questions and Answers

**Question 1 (Conceptual):** If $\nabla f(x_0, y_0) = \langle 3, 4 \rangle$, what is the rate of change of $f$ at $(x_0, y_0)$ in the direction of the vector $\mathbf{v} = \langle -4, 3 \rangle$?

**Answer 1:**
First, we need to find the unit vector $\mathbf{u}$ in the direction of $\mathbf{v} = \langle -4, 3 \rangle$.
The magnitude of $\mathbf{v}$ is $||\mathbf{v}|| = \sqrt{(-4)^2 + 3^2} = \sqrt{16 + 9} = \sqrt{25} = 5$.
So, the unit vector is $\mathbf{u} = \frac{\mathbf{v}}{||\mathbf{v}||} = \left\langle -\frac{4}{5}, \frac{3}{5} \right\rangle$.

The directional derivative is given by $D_{\mathbf{u}}f(x_0, y_0) = \nabla f(x_0, y_0) \cdot \mathbf{u}$.
$D_{\mathbf{u}}f(x_0, y_0) = \langle 3, 4 \rangle \cdot \left\langle -\frac{4}{5}, \frac{3}{5} \right\rangle$
$D_{\mathbf{u}}f(x_0, y_0) = (3)\left(-\frac{4}{5}\right) + (4)\left(\frac{3}{5}\right) = -\frac{12}{5} + \frac{12}{5} = 0$.

**Reasoning:** The dot product is zero, which means the gradient vector $\nabla f$ is orthogonal to the direction vector $\mathbf{v}$. This indicates that the function $f$ is not changing at $(x_0, y_0)$ in the direction of $\mathbf{v}$. This is an important outcome to recognize!

---

**Question 2 (Application Oriented):** The temperature $T$ in degrees Celsius at any point $(x, y)$ in a metal plate is given by $T(x, y) = 100e^{-x^2 - y^2}$. An ant is at the point $(1, 1)$. In what direction should the ant move to cool down most rapidly? What is the rate of cooling in that direction?

**Answer 2:**
To cool down most rapidly, the ant needs to move in the direction opposite to the gradient of the temperature function.

First, let's find the gradient of $T(x, y)$:
$\nabla T(x, y) = \left\langle \frac{\partial T}{\partial x}, \frac{\partial T}{\partial y} \right\rangle$

$\frac{\partial T}{\partial x} = \frac{\partial}{\partial x}(100e^{-x^2 - y^2}) = 100e^{-x^2 - y^2} (-2x) = -200xe^{-x^2 - y^2}$
$\frac{\partial T}{\partial y} = \frac{\partial}{\partial y}(100e^{-x^2 - y^2}) = 100e^{-x^2 - y^2} (-2y) = -200ye^{-x^2 - y^2}$

So, $\nabla T(x, y) = \langle -200xe^{-x^2 - y^2}, -200ye^{-x^2 - y^2} \rangle$.

Now, evaluate the gradient at the ant's position $(1, 1)$:
$\nabla T(1, 1) = \langle -200(1)e^{-1^2 - 1^2}, -200(1)e^{-1^2 - 1^2} \rangle$
$\nabla T(1, 1) = \langle -200e^{-2}, -200e^{-2} \rangle$.

This gradient vector points in the direction of the most rapid *increase* in temperature. To cool down most rapidly, the ant must move in the direction opposite to the gradient, which is $-\nabla T(1, 1)$.

Direction of most rapid cooling: $-\nabla T(1, 1) = \langle 200e^{-2}, 200e^{-2} \rangle$.
To express this as a unit vector, we find the magnitude of $\nabla T(1, 1)$:
$||\nabla T(1, 1)|| = \sqrt{(-200e^{-2})^2 + (-200e^{-2})^2}$
$||\nabla T(1, 1)|| = \sqrt{40000e^{-4} + 40000e^{-4}} = \sqrt{80000e^{-4}}$
$||\nabla T(1, 1)|| = \sqrt{40000 \cdot 2 \cdot e^{-4}} = 200e^{-2}\sqrt{2}$.

The unit vector in the direction of most rapid cooling is:
$\mathbf{u}_{cool} = \frac{-\nabla T(1, 1)}{||\nabla T(1, 1)||} = \frac{\langle 200e^{-2}, 200e^{-2} \rangle}{200e^{-2}\sqrt{2}} = \left\langle \frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}} \right\rangle$.

So, the ant should move in the direction $\left\langle \frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}} \right\rangle$, which is Northeast.

The rate of cooling in that direction is the magnitude of the gradient, but taken with a negative sign (since cooling is a decrease).
Rate of cooling = $-||\nabla T(1, 1)|| = -200e^{-2}\sqrt{2}$ degrees Celsius per meter.

**Reasoning:** The question asks for the direction of most rapid cooling, which is the opposite direction of the greatest temperature increase. The magnitude of the gradient tells us the rate of this change. Calculations involve finding partial derivatives, evaluating the gradient, and then normalizing a vector. Recognizing that "cooling most rapidly" means moving against the gradient is key.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
