---
title: "Properties of the Directional Derivative"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 1"
module: "Module 3: The Chain Rule: Functions of three Variables"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5bd7"
status: "completed"
scrapedAt: "2026-05-20T16:40:20.807Z"
---
# Mathematics for Information Science – 1

## Module 3: The Chain Rule: Functions of Three Variables

### Topic: Properties of the Directional Derivative

Welcome, everyone! In our journey through multivariable calculus, we’ve explored how functions change not just in one direction, but in many. We’ve learned about partial derivatives, which tell us how a function changes as we move along the axes, but what if we want to know how a function changes along *any* direction? That’s where the **directional derivative** comes in. Today, we're diving into its fascinating **properties**. Understanding these properties is crucial, not just for visualizing how functions behave in space, but also for practical applications in fields like data science, optimization, and even understanding physical phenomena. This topic directly ties into **Course Outcome 3 (CO3)**, where we aim to interpret the directional derivative and solve problems involving maxima and minima.

### What is the Directional Derivative Again?

Before we jump into properties, let’s quickly recap. Imagine you’re standing on a hilly terrain, and the height at any point $(x, y, z)$ is given by a function $f(x, y, z)$. The directional derivative, denoted as $D_{\mathbf{u}} f(x, y, z)$, measures the rate of change of this height as you move from a point $(x, y, z)$ in a specific direction, given by a unit vector $\mathbf{u}$.

Mathematically, it's defined as:

$D_{\mathbf{u}} f(x, y, z) = \lim_{h \to 0} \frac{f(x+hu_1, y+hu_2, z+hu_3) - f(x, y, z)}{h}$

where $\mathbf{u} = \langle u_1, u_2, u_3 \rangle$ is a unit vector.

A key insight from our previous discussions, particularly in texts like Thomas' Calculus, is that the directional derivative can be elegantly computed using the gradient vector. Remember the gradient? For a function $f(x, y, z)$, the gradient is:

$\nabla f(x, y, z) = \left\langle \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}, \frac{\partial f}{\partial z} \right\rangle$

The relationship is a beautiful dot product:

$D_{\mathbf{u}} f(x, y, z) = \nabla f(x, y, z) \cdot \mathbf{u}$

This formula is our gateway to understanding the properties. It tells us that the rate of change in a particular direction is the projection of the gradient vector onto that direction. Think of it like this: the gradient points in the direction of the *steepest ascent*. The directional derivative then tells you how much of that "steepness" you experience when moving in a direction $\mathbf{u}$.

### Key Properties of the Directional Derivative

Now, let’s explore what this dot product formula reveals about the behavior of the directional derivative.

#### Property 1: The Gradient as the Direction of Steepest Ascent

This is perhaps the most intuitive and important property. Recall the geometric interpretation of the dot product: $\mathbf{a} \cdot \mathbf{b} = |\mathbf{a}| |\mathbf{b}| \cos \theta$, where $\theta$ is the angle between vectors $\mathbf{a}$ and $\mathbf{b}$.

Applying this to our directional derivative formula, $D_{\mathbf{u}} f = \nabla f \cdot \mathbf{u}$, we have:

$D_{\mathbf{u}} f(x, y, z) = |\nabla f(x, y, z)| |\mathbf{u}| \cos \theta$

Since $\mathbf{u}$ is a unit vector, $|\mathbf{u}| = 1$. So,

$D_{\mathbf{u}} f(x, y, z) = |\nabla f(x, y, z)| \cos \theta$

Now, consider how we can maximize this value. The cosine function, $\cos \theta$, has a maximum value of 1, which occurs when $\theta = 0$. What does $\theta = 0$ mean? It means the angle between $\nabla f$ and $\mathbf{u}$ is zero, which implies that $\mathbf{u}$ points in the *exact same direction* as $\nabla f$.

**Therefore, the directional derivative is maximized when the direction vector $\mathbf{u}$ is the same as the direction of the gradient vector $\nabla f$.**

**Key Takeaway:** The gradient vector $\nabla f$ itself points in the direction of the greatest rate of increase of the function $f$ at that point. The value of this maximum rate of increase is the magnitude of the gradient, $|\nabla f|$.

**Real-world Analogy:** Imagine you’re at the base of a mountain. The gradient vector at your location points straight up the steepest path. If you start walking in that direction, you’ll gain altitude the fastest. If you walk perpendicular to the gradient, you'll be walking along a contour line, and your altitude won't change (we'll see this next!).

**Relevance to CO3:** This property is fundamental to understanding how to find maxima and minima. If you want to climb the fastest, follow the gradient. If you want to find the peak, you'll likely find yourself at a point where the gradient is zero (we'll discuss this more when we cover critical points, but the idea of gradient direction is key here).

#### Property 2: The Gradient and Zero Rate of Change (Level Surfaces)

What happens when $\theta = 90^{\circ}$ (or $\pi/2$ radians)? In this case, $\cos \theta = 0$.
From our formula, $D_{\mathbf{u}} f = |\nabla f| \cos \theta$, if $\cos \theta = 0$, then $D_{\mathbf{u}} f = 0$.

This occurs when the direction vector $\mathbf{u}$ is **orthogonal (perpendicular)** to the gradient vector $\nabla f$.

**Key Takeaway:** If you move in a direction perpendicular to the gradient vector at a point, the rate of change of the function at that point is zero.

**What does this mean conceptually?** Remember the definition of a level surface for a function of three variables, $f(x, y, z) = c$, where $c$ is a constant. The gradient vector $\nabla f$ is always **normal (perpendicular)** to the level surface $f(x, y, z) = c$ at any point $(x, y, z)$ on that surface.

**Real-world Analogy:** Back to our mountain terrain. A level surface is like a contour line on a map—a line of constant elevation. If you walk exactly along a contour line, your altitude doesn't change. The direction you're walking along the contour line is precisely perpendicular to the direction of steepest ascent (the gradient). So, moving along a level curve or surface results in a zero rate of change.

**Relevance to CO3:** This is critical for optimization. If you're trying to find the maximum or minimum of a function, and you're constrained to stay on a specific surface (like $g(x, y, z) = k$), then the directions you can move on that surface are perpendicular to the gradient of $f$. This is the basis for the method of Lagrange multipliers, which helps us find extrema under constraints.

#### Property 3: The Gradient as the Direction of Steepest Decrease

Just as the gradient points in the direction of the steepest *increase*, what about the steepest *decrease*?
Recall that $\cos \theta$ is smallest (most negative) when $\theta = 180^{\circ}$ (or $\pi$ radians). At $\theta = 180^{\circ}$, $\cos \theta = -1$.

In this case, the directional derivative is:

$D_{\mathbf{u}} f(x, y, z) = |\nabla f(x, y, z)| (-1) = -|\nabla f(x, y, z)|$

This means $\mathbf{u}$ must point in the **opposite direction** of the gradient vector $\nabla f$.

**Key Takeaway:** The direction of steepest decrease of the function $f$ at a point $(x, y, z)$ is given by the unit vector $-\frac{\nabla f}{|\nabla f|}$. The value of this minimum rate of change is $-|\nabla f|$.

**Real-world Analogy:** If the gradient on the mountain points uphill, then the negative gradient $(-\nabla f)$ points directly downhill, in the direction of the steepest descent. Walking in this direction will cause your altitude to drop the fastest.

**Relevance to CO3:** This property is the foundation for the **method of steepest descent**, which is a powerful iterative algorithm used in optimization. To find a minimum, you start at a point and take steps in the direction opposite to the gradient, gradually descending towards a local minimum. This is directly related to **Course Outcome 4 (CO4)** as well, which mentions understanding the method of Steepest Descent.

#### Property 4: The Directional Derivative as a Linear Combination

The directional derivative also exhibits linearity, which is a fundamental property in calculus and linear algebra. If $\mathbf{u}$ and $\mathbf{v}$ are unit vectors and $c$ is a scalar:

1.  $D_{\mathbf{u}+\mathbf{v}} f \neq D_{\mathbf{u}} f + D_{\mathbf{v}} f$ in general, because $\mathbf{u}+\mathbf{v}$ might not be a unit vector. However, the *rate of change* is linear with respect to the direction vector if it's normalized.
2.  More importantly, if we consider directions $\mathbf{u}$ and $\mathbf{v}$ and move along a combination of these directions, the directional derivative behaves linearly.
    Let $\mathbf{w} = a\mathbf{u} + b\mathbf{v}$, where $\mathbf{u}$ and $\mathbf{v}$ are unit vectors. If $\mathbf{w}$ is *also* a unit vector, then:
    $D_{\mathbf{w}} f = \nabla f \cdot \mathbf{w} = \nabla f \cdot (a\mathbf{u} + b\mathbf{v}) = a(\nabla f \cdot \mathbf{u}) + b(\nabla f \cdot \mathbf{v}) = a D_{\mathbf{u}} f + b D_{\mathbf{v}} f$.

This linearity is important for understanding how changes in different directions combine. It’s a direct consequence of the dot product being a linear operation.

**Relevance to CO1:** While this property might seem abstract, linearity is a core concept in calculus. Understanding that small changes in different directions combine linearly is what allows us to approximate complex functions with simpler linear ones (like tangent planes and approximating the change in $f$ as $\Delta f \approx \nabla f \cdot \Delta \mathbf{x}$), which is related to **Course Outcome 1 (CO1)** concerning linearization.

#### Property 5: Bounds on the Directional Derivative

Combining Property 1 and Property 3, we can establish bounds for the directional derivative at any point $(x, y, z)$:

The maximum value of $D_{\mathbf{u}} f$ is $|\nabla f|$ (when $\mathbf{u}$ is in the direction of $\nabla f$).
The minimum value of $D_{\mathbf{u}} f$ is $-|\nabla f|$ (when $\mathbf{u}$ is in the direction opposite to $\nabla f$).

Therefore, for any unit vector $\mathbf{u}$:

$-|\nabla f(x, y, z)| \leq D_{\mathbf{u}} f(x, y, z) \leq |\nabla f(x, y, z)|$

**Key Takeaway:** The directional derivative in any direction will always be between the negative magnitude of the gradient and the magnitude of the gradient.

**Relevance to CO3:** This gives us a clear quantitative understanding of the range of possible rates of change of a function at a given point. It helps us understand how "steep" a function can be in any direction.

### Examples to Solidify Understanding

Let's work through a couple of examples to make these properties concrete.

**Example 1: Finding the Direction of Steepest Ascent and Rate**

Suppose the temperature distribution in a room is given by $T(x, y, z) = 100 e^{-(x^2+y^2+z^2)}$, where $T$ is in degrees Celsius and $x, y, z$ are in meters. You are currently at the point $(1, 1, 1)$.

1.  **Find the gradient of $T$**:
    $\frac{\partial T}{\partial x} = 100 e^{-(x^2+y^2+z^2)} (-2x) = -200x e^{-(x^2+y^2+z^2)}$
    $\frac{\partial T}{\partial y} = 100 e^{-(x^2+y^2+z^2)} (-2y) = -200y e^{-(x^2+y^2+z^2)}$
    $\frac{\partial T}{\partial z} = 100 e^{-(x^2+y^2+z^2)} (-2z) = -200z e^{-(x^2+y^2+z^2)}$

    So, $\nabla T(x, y, z) = \langle -200x e^{-r^2}, -200y e^{-r^2}, -200z e^{-r^2} \rangle$, where $r^2 = x^2+y^2+z^2$.

2.  **Evaluate the gradient at your location $(1, 1, 1)$**:
    At $(1, 1, 1)$, $x^2+y^2+z^2 = 1^2+1^2+1^2 = 3$.
    $e^{-3}$ is a constant.
    $\nabla T(1, 1, 1) = \langle -200(1)e^{-3}, -200(1)e^{-3}, -200(1)e^{-3} \rangle = -200e^{-3} \langle 1, 1, 1 \rangle$.

3.  **Direction of Steepest Ascent:**
    According to Property 1, the direction of steepest ascent is the direction of $\nabla T(1, 1, 1)$.
    This direction is $\langle 1, 1, 1 \rangle$ (or any positive scalar multiple of it).
    To get the *unit* vector for the direction, we normalize:
    $\mathbf{u}_{\text{steepest ascent}} = \frac{\nabla T}{|\nabla T|} = \frac{-200e^{-3} \langle 1, 1, 1 \rangle}{|-200e^{-3}| |\langle 1, 1, 1 \rangle|} = \frac{-200e^{-3} \langle 1, 1, 1 \rangle}{200e^{-3} \sqrt{1^2+1^2+1^2}} = \frac{-1}{\sqrt{3}} \langle 1, 1, 1 \rangle = \left\langle -\frac{1}{\sqrt{3}}, -\frac{1}{\sqrt{3}}, -\frac{1}{\sqrt{3}} \right\rangle$.

    *Wait a minute!* The gradient vector itself was pointing inwards towards the origin, where the temperature is highest (100°C at (0,0,0)). So, if we are at (1,1,1), the temperature decreases as we move away from the origin in any direction, and increases as we move towards the origin.
    The gradient $\nabla T = \langle -200x e^{-r^2}, -200y e^{-r^2}, -200z e^{-r^2} \rangle$ points towards decreasing $x, y, z$. This means it points towards the origin.
    So, the direction of steepest *increase* of temperature is indeed towards the origin, which is the direction of $\langle -1, -1, -1 \rangle$.
    The unit vector is $\left\langle -\frac{1}{\sqrt{3}}, -\frac{1}{\sqrt{3}}, -\frac{1}{\sqrt{3}} \right\rangle$.

4.  **Rate of Steepest Ascent:**
    This is the magnitude of the gradient:
    $|\nabla T(1, 1, 1)| = |-200e^{-3} \langle 1, 1, 1 \rangle| = |-200e^{-3}| |\langle 1, 1, 1 \rangle| = 200e^{-3} \sqrt{3}$.
    The rate of temperature increase is $200\sqrt{3}e^{-3}$ degrees Celsius per meter.

5.  **Direction of Steepest Decrease:**
    This is the direction opposite to $\nabla T(1, 1, 1)$, which is $\langle 1, 1, 1 \rangle$.
    The unit vector is $\left\langle \frac{1}{\sqrt{3}}, \frac{1}{\sqrt{3}}, \frac{1}{\sqrt{3}} \right\rangle$. This direction points away from the origin.

6.  **Rate of Steepest Decrease:**
    This is $-|\nabla T(1, 1, 1)| = -200\sqrt{3}e^{-3}$ degrees Celsius per meter.

**Example 2: Directional Derivative in a Specific Direction**

Let's use the same temperature function $T(x, y, z) = 100 e^{-(x^2+y^2+z^2)}$ at $(1, 1, 1)$. Now, let's find the rate of temperature change if you move in the direction $\mathbf{v} = \langle 1, 0, 0 \rangle$ (i.e., purely in the positive x-direction).

1.  **Check if $\mathbf{v}$ is a unit vector:**
    $|\mathbf{v}| = \sqrt{1^2+0^2+0^2} = 1$. Yes, it is. So $\mathbf{u} = \mathbf{v} = \langle 1, 0, 0 \rangle$.

2.  **Calculate the directional derivative:**
    $D_{\mathbf{u}} T(1, 1, 1) = \nabla T(1, 1, 1) \cdot \mathbf{u}$
    We found $\nabla T(1, 1, 1) = -200e^{-3} \langle 1, 1, 1 \rangle$.
    $D_{\mathbf{u}} T(1, 1, 1) = \left( -200e^{-3} \langle 1, 1, 1 \rangle \right) \cdot \langle 1, 0, 0 \rangle$
    $D_{\mathbf{u}} T(1, 1, 1) = -200e^{-3} (1 \cdot 1 + 1 \cdot 0 + 1 \cdot 0)$
    $D_{\mathbf{u}} T(1, 1, 1) = -200e^{-3} (1) = -200e^{-3}$.

    **Interpretation:** If you move purely in the positive x-direction from $(1, 1, 1)$, the temperature is decreasing at a rate of $200e^{-3}$ degrees Celsius per meter. This makes sense because the gradient points towards the origin, and moving in the positive x-direction moves you away from the origin.

**Example 3: Direction Perpendicular to Gradient**

Using the same function and point, what is the rate of change if you move in a direction perpendicular to the gradient?
We know the gradient at $(1, 1, 1)$ is proportional to $\langle -1, -1, -1 \rangle$.
A vector perpendicular to $\langle -1, -1, -1 \rangle$ is, for example, $\mathbf{w} = \langle 1, -1, 0 \rangle$.
Let's check the magnitude: $|\mathbf{w}| = \sqrt{1^2+(-1)^2+0^2} = \sqrt{2}$.
So, the unit vector is $\mathbf{u} = \frac{1}{\sqrt{2}} \langle 1, -1, 0 \rangle$.

Now, calculate the directional derivative:
$D_{\mathbf{u}} T(1, 1, 1) = \nabla T(1, 1, 1) \cdot \mathbf{u}$
$D_{\mathbf{u}} T(1, 1, 1) = \left( -200e^{-3} \langle 1, 1, 1 \rangle \right) \cdot \left( \frac{1}{\sqrt{2}} \langle 1, -1, 0 \rangle \right)$
$D_{\mathbf{u}} T(1, 1, 1) = \frac{-200e^{-3}}{\sqrt{2}} (\langle 1, 1, 1 \rangle \cdot \langle 1, -1, 0 \rangle)$
$D_{\mathbf{u}} T(1, 1, 1) = \frac{-200e^{-3}}{\sqrt{2}} (1 \cdot 1 + 1 \cdot (-1) + 1 \cdot 0)$
$D_{\mathbf{u}} T(1, 1, 1) = \frac{-200e^{-3}}{\sqrt{2}} (1 - 1 + 0) = \frac{-200e^{-3}}{\sqrt{2}} (0) = 0$.

**Interpretation:** As expected from Property 2, moving in a direction perpendicular to the gradient results in a zero rate of change. If you were on the contour surface $T(x,y,z) = c$ passing through (1,1,1), moving along this surface in the direction $\langle 1, -1, 0 \rangle$ would keep you at the same temperature.

### Connecting to Course Outcomes and Exam Preparation

Let’s quickly revisit how these properties align with our course objectives:

*   **CO3: Interpret directional derivative and solve maxima and minima of multivariable functions.**
    *   Properties 1 and 3 directly explain how the gradient relates to the directions of maximum and minimum rates of change. This is crucial for identifying potential locations of maxima and minima (where the gradient might be zero) and for understanding how a function increases or decreases locally.
    *   Property 2 is essential for constrained optimization problems, hinting at how to move on a specific surface without changing the function's value.

*   **CO1: Apply various concepts in calculus to linearize functions and to analyze concavity.**
    *   While concavity is a bit further down the line, the linear nature of the directional derivative (Property 4) and its relationship to the gradient's magnitude and direction are the building blocks for linear approximations (tangent planes). Understanding $\Delta f \approx \nabla f \cdot \Delta \mathbf{x}$ relies on these fundamental properties of directional derivatives.

**Exam Tip:** When asked about the direction of greatest increase or decrease, always think of the gradient and its negative. When asked for the *rate* of greatest increase, it's the magnitude of the gradient. For questions involving a specific direction, compute the dot product of the gradient with the unit direction vector. Remember to always use a *unit* vector for the direction in the formula $D_{\mathbf{u}} f = \nabla f \cdot \mathbf{u}$. If given a non-unit vector, normalize it first!

**Common Pitfall:** Forgetting to normalize the direction vector $\mathbf{u}$ before computing $D_{\mathbf{u}} f$. The definition and the formula $D_{\mathbf{u}} f = \nabla f \cdot \mathbf{u}$ *require* $\mathbf{u}$ to be a unit vector. If you're given a direction vector $\mathbf{v}$, you must use $\mathbf{u} = \mathbf{v}/|\mathbf{v}|$.

### Summary of Key Properties

To recap, remember these core ideas about the directional derivative $D_{\mathbf{u}} f = \nabla f \cdot \mathbf{u}$:

*   **Maximum Rate of Increase:** Occurs in the direction of $\nabla f$, with value $|\nabla f|$.
*   **Maximum Rate of Decrease:** Occurs in the direction of $-\nabla f$, with value $-|\nabla f|$.
*   **Zero Rate of Change:** Occurs in any direction $\mathbf{u}$ perpendicular to $\nabla f$.
*   **Bounds:** $-|\nabla f| \leq D_{\mathbf{u}} f \leq |\nabla f|$.

These properties are not just theoretical; they are the tools we use to understand and manipulate multivariable functions in many scientific and engineering contexts.

---

### Sample Questions and Answers

**Question 1 (Conceptual):** For a differentiable function $f(x, y, z)$, what is the relationship between the gradient $\nabla f$ and the level surfaces of $f$?

**Answer:** The gradient vector $\nabla f$ at any point $(x, y, z)$ is always orthogonal (perpendicular) to the level surface $f(x, y, z) = c$ that passes through that point. This means that if you move along the level surface, the direction of motion is perpendicular to the gradient, resulting in a directional derivative of zero.

**Question 2 (Application):** Consider the function $f(x, y, z) = x^2 + y^2 - z^2$. You are at the point $(1, 2, 3)$.
    a) Find the gradient of $f$ at $(1, 2, 3)$.
    b) In which direction does $f$ increase most rapidly at $(1, 2, 3)$? What is this rate of increase?
    c) In which direction does $f$ decrease most rapidly at $(1, 2, 3)$?
    d) Find the directional derivative of $f$ at $(1, 2, 3)$ in the direction $\mathbf{v} = \langle 0, 1, 1 \rangle$.

**Answer:**
    a) First, find the partial derivatives:
       $\frac{\partial f}{\partial x} = 2x$
       $\frac{\partial f}{\partial y} = 2y$
       $\frac{\partial f}{\partial z} = -2z$
       The gradient is $\nabla f(x, y, z) = \langle 2x, 2y, -2z \rangle$.
       At $(1, 2, 3)$:
       $\nabla f(1, 2, 3) = \langle 2(1), 2(2), -2(3) \rangle = \langle 2, 4, -6 \rangle$.

    b) $f$ increases most rapidly in the direction of the gradient $\nabla f(1, 2, 3) = \langle 2, 4, -6 \rangle$.
       The rate of increase is the magnitude of the gradient:
       $|\nabla f(1, 2, 3)| = \sqrt{2^2 + 4^2 + (-6)^2} = \sqrt{4 + 16 + 36} = \sqrt{56} = 2\sqrt{14}$.
       So, the direction is $\langle 2, 4, -6 \rangle$ (or normalized: $\frac{1}{2\sqrt{14}}\langle 2, 4, -6 \rangle = \left\langle \frac{1}{\sqrt{14}}, \frac{2}{\sqrt{14}}, -\frac{3}{\sqrt{14}} \right\rangle$), and the rate is $2\sqrt{14}$.

    c) $f$ decreases most rapidly in the direction opposite to the gradient, which is $-\nabla f(1, 2, 3) = \langle -2, -4, 6 \rangle$. The rate of decrease is $-|\nabla f(1, 2, 3)| = -2\sqrt{14}$.

    d) The direction vector is $\mathbf{v} = \langle 0, 1, 1 \rangle$. We need a unit vector.
       $|\mathbf{v}| = \sqrt{0^2 + 1^2 + 1^2} = \sqrt{2}$.
       The unit vector is $\mathbf{u} = \frac{\mathbf{v}}{|\mathbf{v}|} = \frac{1}{\sqrt{2}} \langle 0, 1, 1 \rangle = \left\langle 0, \frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}} \right\rangle$.
       Now, compute the directional derivative:
       $D_{\mathbf{u}} f(1, 2, 3) = \nabla f(1, 2, 3) \cdot \mathbf{u}$
       $D_{\mathbf{u}} f(1, 2, 3) = \langle 2, 4, -6 \rangle \cdot \left\langle 0, \frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}} \right\rangle$
       $D_{\mathbf{u}} f(1, 2, 3) = 2(0) + 4\left(\frac{1}{\sqrt{2}}\right) + (-6)\left(\frac{1}{\sqrt{2}}\right)$
       $D_{\mathbf{u}} f(1, 2, 3) = 0 + \frac{4}{\sqrt{2}} - \frac{6}{\sqrt{2}} = -\frac{2}{\sqrt{2}} = -\sqrt{2}$.

**Question 3 (Exam Style - Quick Recall):** If $\nabla f(a,b,c) = \langle 3, 0, -1 \rangle$, what is the directional derivative of $f$ at $(a,b,c)$ in the direction $\mathbf{u} = \langle 1/\sqrt{2}, 1/\sqrt{2}, 0 \rangle$?

**Answer:**
    The gradient is given as $\nabla f(a,b,c) = \langle 3, 0, -1 \rangle$.
    The direction vector $\mathbf{u} = \langle 1/\sqrt{2}, 1/\sqrt{2}, 0 \rangle$ is already a unit vector since $(1/\sqrt{2})^2 + (1/\sqrt{2})^2 + 0^2 = 1/2 + 1/2 = 1$.
    The directional derivative is $D_{\mathbf{u}} f(a,b,c) = \nabla f(a,b,c) \cdot \mathbf{u}$.
    $D_{\mathbf{u}} f(a,b,c) = \langle 3, 0, -1 \rangle \cdot \langle 1/\sqrt{2}, 1/\sqrt{2}, 0 \rangle$
    $D_{\mathbf{u}} f(a,b,c) = 3(1/\sqrt{2}) + 0(1/\sqrt{2}) + (-1)(0)$
    $D_{\mathbf{u}} f(a,b,c) = \frac{3}{\sqrt{2}}$.
