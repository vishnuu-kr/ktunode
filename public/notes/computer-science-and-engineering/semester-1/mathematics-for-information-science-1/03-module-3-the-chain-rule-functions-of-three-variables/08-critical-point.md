---
title: "Critical point"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 1"
module: "Module 3: The Chain Rule: Functions of three Variables"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5bda"
status: "completed"
scrapedAt: "2026-05-20T16:40:24.761Z"
---
## Mathematics for Information Science – 1

### Module 3: The Chain Rule: Functions of Three Variables

#### Topic: Critical Points – Locating the Peaks and Valleys

Welcome back, everyone! In our journey through multivariable calculus, we’ve already seen how functions of more than one variable can behave in fascinating ways. We’ve explored how to move along these functions using concepts like directional derivatives. Today, we're going to zoom in on a very important aspect: identifying the *special points* of these functions. These are the points where the function might be at its highest, its lowest, or perhaps neither. These special points are called **critical points**.

This topic directly ties into **Course Outcome 3 (CO3)**: "Interpret directional derivative and solve maxima and minima of multivariable functions." Understanding critical points is the *first crucial step* in finding these maxima and minima, which are so vital in many information science applications – think about optimizing the performance of a machine learning model, minimizing errors in a system, or finding the most efficient configuration for data processing.

Let's think about what happens when we're climbing a mountain. The direction of steepest ascent is given by the gradient. At the very peak of the mountain, or at the bottom of a valley, what can we say about the slope? It's essentially flat in all directions, isn't it? This intuition is what leads us to the formal definition of a critical point.

### Defining Critical Points

For a function of a single variable, $f(x)$, we found critical points where the derivative $f'(x)$ was either zero or undefined. This was our signal that the tangent line was horizontal, or that the function had a sharp corner or a vertical tangent.

Now, for functions of **three variables**, say $f(x, y, z)$, we need to extend this idea. Instead of a single derivative, we have partial derivatives. The gradient vector, $\nabla f(x, y, z)$, points in the direction of the steepest ascent. At a peak or a valley, the slope is flat in *every* direction. This means the gradient vector must be zero.

So, a **critical point** $(x_0, y_0, z_0)$ of a function $f(x, y, z)$ is a point where:

1.  The gradient vector is the zero vector: $\nabla f(x_0, y_0, z_0) = \mathbf{0}$.
    This translates to all of its partial derivatives being zero at that point:
    $\frac{\partial f}{\partial x}(x_0, y_0, z_0) = 0$
    $\frac{\partial f}{\partial y}(x_0, y_0, z_0) = 0$
    $\frac{\partial f}{\partial z}(x_0, y_0, z_0) = 0$

    **OR**

2.  At least one of the partial derivatives does not exist at $(x_0, y_0, z_0)$.

Think of this second condition like a pointy peak on a mountain range – the slope might be zero on either side, but at the very sharp point itself, the derivative (or in our case, the gradient) might not be well-defined. While this can happen, for most smooth functions we deal with in practice, the first condition is the one we'll be focusing on.

### Why are Critical Points Important? (Connecting to CO3)

This is where **CO3** really comes into play. The critical points are our prime candidates for **local maxima and local minima**. If a function has a local maximum or a local minimum at an interior point $(x_0, y_0, z_0)$ of its domain, and if the partial derivatives exist at that point, then $(x_0, y_0, z_0)$ *must* be a critical point.

Why is this? Imagine you're at a local peak. If you move even a tiny bit in any direction, you're going downhill. This implies that the rate of change of the function in *every* direction is zero or negative. For the steepest ascent direction (the gradient), this rate of change is specifically the magnitude of the gradient. If the gradient were non-zero, it would point in a direction of increase, meaning you weren't at a peak. So, at a true smooth peak or valley, the gradient *must* be zero.

**Remember this:** Critical points are the *only* places where local maxima or minima can occur, provided the function is differentiable. So, to find the extreme values of a function, our strategy is always:
1.  Find all the critical points.
2.  Test these points to see if they are indeed maxima, minima, or neither.

This is a fundamental strategy for optimization problems, which are ubiquitous in information science.

### Finding Critical Points: A Practical Approach

Let's look at how we actually find these points. We'll be working with functions that are "nice" – meaning their partial derivatives exist everywhere.

**Example 1: A smooth, rounded hill**

Consider the function $f(x, y, z) = x^2 + y^2 + z^2$. This represents the squared distance from the origin. Where is the minimum value? Intuitively, it's at the origin $(0, 0, 0)$. Let's see if our critical point definition holds.

First, we need to calculate the partial derivatives:
$\frac{\partial f}{\partial x} = 2x$
$\frac{\partial f}{\partial y} = 2y$
$\frac{\partial f}{\partial z} = 2z$

Now, we set each of these equal to zero to find the critical points:
$2x = 0 \implies x = 0$
$2y = 0 \implies y = 0$
$2z = 0 \implies z = 0$

So, the only critical point is $(0, 0, 0)$. At this point, the function value is $f(0,0,0) = 0^2 + 0^2 + 0^2 = 0$. Since $x^2, y^2, z^2$ are always non-negative, this value 0 is indeed the absolute minimum. This aligns with our intuition.

This process of finding partial derivatives and setting them to zero is a core technique. It's the analytical way of finding where the "ground is level" in all directions.

**Example 2: A more complex landscape**

Let's consider a function where the landscape is a bit more varied:
$f(x, y, z) = x^3 + y^3 + z^3 - 3xyz$

This is a classic example. Let's find its critical points.

Step 1: Compute the partial derivatives.
$\frac{\partial f}{\partial x} = 3x^2 - 3yz$
$\frac{\partial f}{\partial y} = 3y^2 - 3xz$
$\frac{\partial f}{\partial z} = 3z^2 - 3xy$

Step 2: Set all partial derivatives to zero.
1.  $3x^2 - 3yz = 0 \implies x^2 = yz$
2.  $3y^2 - 3xz = 0 \implies y^2 = xz$
3.  $3z^2 - 3xy = 0 \implies z^2 = xy$

Now we have a system of equations to solve. This is often the trickiest part. Let's try to manipulate these equations.

From (1), $x^2 = yz$.
From (2), $y^2 = xz$.
From (3), $z^2 = xy$.

Let's multiply these three equations together:
$x^2 y^2 z^2 = (yz)(xz)(xy) = x^2 y^2 z^2$
This doesn't help much; it just confirms consistency.

What if we divide?
Divide (1) by (2): $\frac{x^2}{y^2} = \frac{yz}{xz} = \frac{y}{x}$ (assuming $y, x \neq 0$)
$x^3 = y^3 \implies x = y$ (since we're dealing with real numbers)

If $x=y$, let's substitute this into the original equations:
1.  $x^2 = xz \implies x^2 - xz = 0 \implies x(x-z) = 0$. This means either $x=0$ or $x=z$.
2.  $x^2 = xz$ (same as above)
3.  $z^2 = x^2$

Case 1: $x=0$.
If $x=0$, then from $x=y$, we get $y=0$.
From $x^2 = yz$, we have $0^2 = 0 \cdot z$, which is $0=0$.
From $y^2 = xz$, we have $0^2 = 0 \cdot z$, which is $0=0$.
From $z^2 = xy$, we have $z^2 = 0 \cdot 0$, so $z^2 = 0$, which means $z=0$.
This gives us the critical point $(0, 0, 0)$.

Case 2: $x=z$.
If $x=z$, and we already know $x=y$, then $x=y=z$.
Let's check this in our original partial derivative equations:
1.  $x^2 = x \cdot x \implies x^2 = x^2$ (True)
2.  $x^2 = x \cdot x \implies x^2 = x^2$ (True)
3.  $x^2 = x \cdot x \implies x^2 = x^2$ (True)

So, any point where $x=y=z$ is a critical point. Examples include $(1, 1, 1)$, $(2, 2, 2)$, $(-1, -1, -1)$, etc.

So, the critical points for this function are all points of the form $(c, c, c)$ for any real number $c$.

This example highlights that sometimes finding critical points can involve solving a system of non-linear equations, which can be challenging. Be prepared for algebraic manipulation!

### The Second Derivative Test (Brief Mention)

Once we have our critical points, how do we classify them? Are they local maxima, local minima, or something else? For functions of a single variable, we used the second derivative test. For multivariable functions, there's a similar, but more complex, test involving the **Hessian matrix**.

The Hessian matrix contains all the second-order partial derivatives. For a function of three variables $f(x, y, z)$, the Hessian is:

$H(x,y,z) = \begin{pmatrix}
\frac{\partial^2 f}{\partial x^2} & \frac{\partial^2 f}{\partial x \partial y} & \frac{\partial^2 f}{\partial x \partial z} \\
\frac{\partial^2 f}{\partial y \partial x} & \frac{\partial^2 f}{\partial y^2} & \frac{\partial^2 f}{\partial y \partial z} \\
\frac{\partial^2 f}{\partial z \partial x} & \frac{\partial^2 f}{\partial z \partial y} & \frac{\partial^2 f}{\partial z^2}
\end{pmatrix}$

By Clairaut's Theorem (which you might recall from earlier modules, or will see in **Thomas' Calculus**), if the second partial derivatives are continuous in a region, then the mixed partials are equal ($\frac{\partial^2 f}{\partial x \partial y} = \frac{\partial^2 f}{\partial y \partial x}$, etc.). This means the Hessian matrix is symmetric.

The **Second Derivative Test for Functions of Three Variables** involves evaluating the Hessian at a critical point $(x_0, y_0, z_0)$ and analyzing its eigenvalues or leading principal minors.

*   If all eigenvalues are positive, it's a local minimum.
*   If all eigenvalues are negative, it's a local maximum.
*   If there are both positive and negative eigenvalues, it's a saddle point.
*   If any eigenvalue is zero, the test is inconclusive.

This is a more advanced topic, and the details are thoroughly covered in textbooks like **Kreyszig's Advanced Engineering Mathematics** and **Thomas' Calculus**. For our purposes today, the key takeaway is that critical points are the *starting point* for this classification.

**Connection to CO3:** While the calculation of the Hessian and its eigenvalues might seem daunting, the *concept* that critical points are where extrema might occur and that we need a way to classify them is central to **CO3**. Understanding critical points is the gateway to solving the maxima and minima problems.

### What if Partial Derivatives Don't Exist?

We briefly touched upon this. Think of a function like $f(x, y, z) = \sqrt{x^2 + y^2 + z^2}$ (the distance from the origin).

$\frac{\partial f}{\partial x} = \frac{x}{\sqrt{x^2 + y^2 + z^2}}$
$\frac{\partial f}{\partial y} = \frac{y}{\sqrt{x^2 + y^2 + z^2}}$
$\frac{\partial f}{\partial z} = \frac{z}{\sqrt{x^2 + y^2 + z^2}}$

At the point $(0, 0, 0)$, all these denominators become zero. So, the partial derivatives do not exist at $(0, 0, 0)$. This means $(0, 0, 0)$ is a critical point for this function according to our second definition. And indeed, this point corresponds to the minimum value of 0.

This scenario is less common in the smooth, well-behaved functions you'll often encounter in optimization, but it's important to remember this possibility as stated in the definition.

### Everyday Analogy: Finding the Highest Point on a Hilly Terrain Map

Imagine you have a topographical map of a park with many hills and valleys. You're a hiker looking for the highest point in a specific section.

*   **Local Maxima:** These are the peaks of the small hills.
*   **Local Minima:** These are the bottoms of the small valleys.
*   **Saddle Points:** These are tricky spots – like a mountain pass where you can go up in one direction but down in another.
*   **Critical Points:** These are the spots where the ground is perfectly level in all directions (the exact top of a smooth hill, the very bottom of a smooth valley). They are also the places where the map might be torn or undefined, leading to a sharp peak or cliff edge.

To find the highest point on your map, you wouldn't just randomly search. You'd look for all the places that *could* be the highest. These are the peaks of the small hills (local maxima) and potentially any flat areas.

In our mathematical context, the critical points are like those potential summit locations. You need to identify all of them first. Then, you'd use additional information (like the terrain's curvature, which relates to the second derivatives) to figure out which ones are actual peaks, which are valleys, and which are just flat spots.

This process of identifying critical points is a fundamental step in many algorithms for optimization, from finding the best parameters for a predictive model in machine learning to managing resources efficiently.

### Key Takeaways for Exams

*   **Definition is crucial:** Be able to state the definition of a critical point accurately: where the gradient is zero OR where at least one partial derivative doesn't exist.
*   **Calculation is key:** Most exam problems will involve calculating partial derivatives and setting them to zero to find the critical points. Practice solving systems of equations.
*   **Recognize candidates:** Critical points are your *only* candidates for local extrema in the interior of the domain.
*   **Hessian for classification:** While you might not always be asked to calculate the full classification, understand that the Hessian matrix and its properties are used to determine if a critical point is a max, min, or saddle.

### Connecting to Textbooks

*   **Thomas' Calculus:** Chapter 14, particularly sections on gradients and optimization, will offer detailed explanations and examples of finding critical points and using the second derivative test. The examples often involve functions related to physical phenomena.
*   **Kreyszig's Advanced Engineering Mathematics:** Kreyszig delves deeply into the mathematical rigor, including the properties of the Hessian matrix and the classification of critical points using eigenvalues. If you want a more in-depth understanding of the 'why,' this is a great resource.
*   **Larson & Edwards Multivariable Calculus:** This book also provides a clear breakdown of finding critical points with numerous worked examples, similar to the step-by-step approach we've taken today.

### Summary

Today, we've laid the groundwork for finding the "turning points" of functions of three variables. Critical points are those special locations where the function's "slope" is zero in all directions, or where the function's behavior is a bit irregular (derivatives undefined). These are the indispensable starting points for identifying whether a function reaches a local peak (maximum) or a local valley (minimum). Mastering the technique of finding these points is your first major step towards solving optimization problems, a core skill in Information Science.

---

### Sample Questions and Answers

**Question 1 (Conceptual):**
What are the two conditions for a point $(x_0, y_0, z_0)$ to be a critical point of a function $f(x, y, z)$?

**Answer:**
A point $(x_0, y_0, z_0)$ is a critical point of $f(x, y, z)$ if either:
1.  The gradient of $f$ at $(x_0, y_0, z_0)$ is the zero vector, meaning $\nabla f(x_0, y_0, z_0) = \mathbf{0}$, which implies $\frac{\partial f}{\partial x}(x_0, y_0, z_0) = 0$, $\frac{\partial f}{\partial y}(x_0, y_0, z_0) = 0$, and $\frac{\partial f}{\partial z}(x_0, y_0, z_0) = 0$.
2.  At least one of the partial derivatives $\frac{\partial f}{\partial x}$, $\frac{\partial f}{\partial y}$, or $\frac{\partial f}{\partial z}$ does not exist at $(x_0, y_0, z_0)$.

**Question 2 (Calculational):**
Find the critical points of the function $f(x, y, z) = x^2 + y^2 - z^2$.

**Answer:**
To find the critical points, we first compute the partial derivatives:
$\frac{\partial f}{\partial x} = 2x$
$\frac{\partial f}{\partial y} = 2y$
$\frac{\partial f}{\partial z} = -2z$

Now, we set each partial derivative to zero:
$2x = 0 \implies x = 0$
$2y = 0 \implies y = 0$
$-2z = 0 \implies z = 0$

All partial derivatives exist everywhere. Therefore, the only critical point is where all of them are zero, which is $(0, 0, 0)$.

**Reasoning:** This question tests the basic ability to calculate partial derivatives and solve the resulting system of linear equations. It's a straightforward application of the first condition for critical points.

**Question 3 (Application/Analysis):**
Explain why critical points are important for finding local maxima and minima of a function $f(x, y, z)$, referring to **Course Outcome 3 (CO3)**.

**Answer:**
Critical points are crucial for finding local maxima and minima because **CO3** states we need to "solve maxima and minima of multivariable functions." The fundamental theorem in this area is that if a function $f(x, y, z)$ has a local maximum or a local minimum at an interior point $(x_0, y_0, z_0)$ of its domain, and if the partial derivatives of $f$ exist at $(x_0, y_0, z_0)$, then $(x_0, y_0, z_0)$ *must* be a critical point. This means that all local extrema of a differentiable function occur at critical points. Therefore, to locate potential maxima and minima, we first identify all critical points. Subsequently, we use other methods (like the second derivative test) to classify these critical points.

**Reasoning:** This question probes understanding of the theoretical significance of critical points and their direct link to optimization problems, aligning with the course outcome. It requires explaining the relationship between critical points and extrema.
