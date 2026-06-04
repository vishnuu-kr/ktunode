---
title: "Rates of Change: Derivative at a Point"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 1"
module: "Module 1: Limits of Function Values"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5bbf"
status: "completed"
scrapedAt: "2026-05-20T16:39:45.574Z"
---
# MATHEMATICS FOR INFORMATION SCIENCE – 1

## Module 1: Limits of Function Values

### Topic: Rates of Change: Derivative at a Point

Welcome, everyone! In our journey through Mathematics for Information Science, we've been laying the groundwork by understanding limits. Now, we're about to unlock a powerful concept that builds directly on that foundation: the **derivative at a point**. This is where we move from understanding what happens *near* a point to understanding what happens *at* that very point, specifically concerning how things are changing. Think of it as zooming in so close that you can see the instantaneous speed of something.

### 1. The Intuitive Idea: How Fast is Something Changing?

Imagine you're driving a car. Your speed isn't constant, is it? It changes as you accelerate, brake, or navigate turns. If you want to know your speed at a *specific moment*, say, exactly when you pass a particular landmark, you're looking for an "instantaneous rate of change." This is precisely what the derivative at a point captures.

This relates directly to **Course Outcome 1 (CO1): Apply various concepts in calculus to linearize functions and to analyze concavity.** The derivative is our primary tool for linearization. It tells us the slope of the tangent line at a point, which is the best linear approximation of the function at that point. Understanding this rate of change is crucial for predicting behavior and simplifying complex functions, which is a core skill in data analysis and modeling in information science.

#### Analogy: The Speedometer

Think of your car's speedometer. It doesn't tell you your average speed over the last hour; it tells you your speed *right now*. That needle points to your instantaneous velocity. The derivative is the mathematical equivalent of that speedometer.

### 2. From Average to Instantaneous: The Secant Line

Before we can talk about instantaneous change, let's revisit the idea of *average* change. If you travel 100 miles in 2 hours, your average speed is 50 miles per hour. This is simple: $\frac{\text{Total Distance}}{\text{Total Time}}$.

In calculus, for a function $f(x)$, the average rate of change between two points $(x_1, f(x_1))$ and $(x_2, f(x_2))$ on its graph is the slope of the line connecting these two points. This line is called a **secant line**. The formula for the slope of this secant line is:

$$
\text{Average Rate of Change} = \frac{\Delta y}{\Delta x} = \frac{f(x_2) - f(x_1)}{x_2 - x_1}
$$

Let's make this more concrete. Suppose we have a function $f(x) = x^2$, representing, say, the distance covered by an object after $x$ seconds. If we want to know the average speed between $x=1$ second and $x=3$ seconds:

*   At $x=1$, $f(1) = 1^2 = 1$.
*   At $x=3$, $f(3) = 3^2 = 9$.

The average rate of change (average speed) is $\frac{f(3) - f(1)}{3 - 1} = \frac{9 - 1}{2} = \frac{8}{2} = 4$. So, on average, the object moved 4 units of distance per unit of time during that interval.

This is all well and good for an interval, but what if we want the speed *exactly* at $x=2$?

### 3. The Limit Approach: The Tangent Line

To get the instantaneous rate of change, we need to make the interval over which we're calculating the average rate of change shrink to zero. This is where our understanding of limits comes in, as described in Thomas' Calculus and Kreyszig's Advanced Engineering Mathematics.

Let's consider the interval between $x$ and $x+h$. The two points on the graph of $f(x)$ are $(x, f(x))$ and $(x+h, f(x+h))$. The slope of the secant line connecting these points is:

$$
\text{Slope of Secant Line} = \frac{f(x+h) - f(x)}{(x+h) - x} = \frac{f(x+h) - f(x)}{h}
$$

This expression, $\frac{f(x+h) - f(x)}{h}$, is incredibly important. It's called the **difference quotient**.

Now, to find the instantaneous rate of change at $x$, we want to see what happens to this slope as the second point gets infinitely close to the first. In other words, we want to see what happens as the "step" $h$ approaches zero. This is the core idea of a limit:

$$
\text{Instantaneous Rate of Change at } x = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}
$$

As $h$ approaches zero, the secant line pivots and becomes the **tangent line** to the curve at the point $(x, f(x))$. The slope of this tangent line represents the instantaneous rate of change of the function at that specific point $x$.

**Remember this:** The derivative of a function $f$ at a point $x$ is the limit of the difference quotient as $h$ approaches zero.

#### Example: Finding the Derivative of $f(x) = x^2$ at $x=2$

Let's use our $f(x) = x^2$ example. We want the instantaneous speed at $x=2$.
Using the limit definition:

$$
f'(2) = \lim_{h \to 0} \frac{f(2+h) - f(2)}{h}
$$

First, let's find $f(2+h)$ and $f(2)$:
$f(2+h) = (2+h)^2 = 4 + 4h + h^2$
$f(2) = 2^2 = 4$

Now substitute these into the difference quotient:
$$
\frac{f(2+h) - f(2)}{h} = \frac{(4 + 4h + h^2) - 4}{h} = \frac{4h + h^2}{h}
$$

We can factor out an $h$ from the numerator:
$$
\frac{h(4 + h)}{h}
$$

As long as $h \neq 0$, we can cancel the $h$:
$$
4 + h
$$

Now, we take the limit as $h \to 0$:
$$
\lim_{h \to 0} (4 + h) = 4 + 0 = 4
$$

So, the instantaneous rate of change of $f(x) = x^2$ at $x=2$ is 4. This means at the exact moment $x=2$, the function is increasing at a rate of 4 units per unit of $x$.

#### Relatable Example: Growth of a Bacterial Colony

Imagine you're monitoring a bacterial colony whose size is given by a function $N(t)$, where $t$ is time in hours. You've measured the size at various times. If you want to know how fast the colony is growing *right now*, at $t=5$ hours, you'd use the derivative. The difference quotient $\frac{N(5+h) - N(5)}{h}$ tells you the average growth rate over a short interval $h$. Taking the limit as $h \to 0$ gives you the instantaneous growth rate at $t=5$. This is vital in understanding disease spread or optimizing growth conditions, areas relevant to information science applications in biology and medicine.

### 4. The Derivative Function: Generalizing the Rate of Change

We just calculated the derivative *at a specific point* ($x=2$). However, we can generalize this entire process to find a formula for the derivative at *any* point $x$. This is called the **derivative of $f$**, denoted by $f'(x)$ or $\frac{df}{dx}$.

The process remains the same:

1.  Write down the difference quotient: $\frac{f(x+h) - f(x)}{h}$.
2.  Simplify the expression algebraically.
3.  Take the limit as $h \to 0$.

Let's find the derivative function for $f(x) = x^2$:
We already simplified the difference quotient to $4+h$ for $x=2$. Let's do it for a general $x$:

$$
\frac{f(x+h) - f(x)}{h} = \frac{(x+h)^2 - x^2}{h}
$$
$$
= \frac{(x^2 + 2xh + h^2) - x^2}{h}
$$
$$
= \frac{2xh + h^2}{h}
$$
$$
= \frac{h(2x + h)}{h}
$$
For $h \neq 0$:
$$
= 2x + h
$$

Now, take the limit as $h \to 0$:
$$
f'(x) = \lim_{h \to 0} (2x + h) = 2x + 0 = 2x
$$

So, the derivative function for $f(x) = x^2$ is $f'(x) = 2x$. This formula tells us the instantaneous rate of change of $f(x)$ at *any* value of $x$. For example, at $x=2$, $f'(2) = 2(2) = 4$, which matches our earlier calculation. At $x=5$, the instantaneous rate of change is $f'(5) = 2(5) = 10$.

This ability to find a function that describes the rate of change is fundamental for **CO1**, as it allows us to analyze how a function behaves across its domain. This is key for understanding trends, optimizing parameters, and building predictive models.

### 5. Geometric Interpretation: The Tangent Line Slope

The derivative $f'(a)$ at a point $x=a$ has a crucial geometric meaning: it is the **slope of the tangent line** to the graph of $y=f(x)$ at the point $(a, f(a))$.

Think about it: as we bring the second point $(x+h, f(x+h))$ closer and closer to the first point $(x, f(x))$ by letting $h \to 0$, the secant line connecting them pivots. In the limit, it settles down to become the tangent line – the line that "just touches" the curve at that point and has the same direction as the curve at that point.

The equation of a line can be written in point-slope form: $y - y_1 = m(x - x_1)$.
For the tangent line at $x=a$, the point is $(a, f(a))$ and the slope $m$ is $f'(a)$. So, the equation of the tangent line is:

$$
y - f(a) = f'(a)(x - a)
$$

This equation is vital. It gives us the best linear approximation of the function $f(x)$ near $x=a$. If we can calculate $f(a)$ and $f'(a)$, we can approximate $f(a+h)$ for small $h$ as $f(a+h) \approx f(a) + f'(a)h$. This is the essence of **linearization**, directly linking to **CO1**.

#### Example: Tangent Line for $f(x) = x^2$ at $x=3$

We know $f(x) = x^2$ and $f'(x) = 2x$.
At $x=3$:
*   $f(3) = 3^2 = 9$. The point is $(3, 9)$.
*   $f'(3) = 2(3) = 6$. The slope of the tangent line is 6.

Using the point-slope form:
$y - 9 = 6(x - 3)$
$y - 9 = 6x - 18$
$y = 6x - 9$

This line $y = 6x - 9$ is the tangent line to $y=x^2$ at the point $(3, 9)$. It tells us that near $x=3$, the parabola $y=x^2$ behaves very much like the straight line $y = 6x - 9$.

#### Real-world use: Approximating Function Values

Suppose you have a complex calculation for a function, but you need a quick estimate for a value very close to a point where you know the function and its derivative. For instance, if $f(x)$ represents the output of a sensor and you know $f(10) = 50$ and $f'(10) = 2$, you can estimate $f(10.01)$ without recalculating the whole function:
$f(10.01) \approx f(10) + f'(10)(0.01) = 50 + 2(0.01) = 50.02$. This approximation is extremely useful in simulations and real-time data processing.

### 6. Physical Interpretation: Velocity and Acceleration

The concept of the derivative is foundational in physics and engineering, and these ideas are very relevant to how we model systems in information science.

*   **Velocity:** If $s(t)$ represents the position of an object at time $t$, then its instantaneous velocity is the derivative of the position function with respect to time: $v(t) = s'(t) = \frac{ds}{dt}$. This is the rate of change of position.
*   **Acceleration:** Acceleration is the rate of change of velocity. So, if $v(t)$ is the velocity, the acceleration $a(t)$ is its derivative: $a(t) = v'(t) = s''(t) = \frac{dv}{dt} = \frac{d^2s}{dt^2}$.

**Example:** A particle moves along a line such that its position is given by $s(t) = t^3 - 6t^2 + 5$ (meters, where $t$ is in seconds).

*   **Velocity:** $v(t) = s'(t) = \frac{d}{dt}(t^3 - 6t^2 + 5) = 3t^2 - 12t$.
    At $t=2$ seconds, the velocity is $v(2) = 3(2)^2 - 12(2) = 12 - 24 = -12$ m/s. The negative sign means it's moving in the negative direction.
*   **Acceleration:** $a(t) = v'(t) = \frac{d}{dt}(3t^2 - 12t) = 6t - 12$.
    At $t=2$ seconds, the acceleration is $a(2) = 6(2) - 12 = 12 - 12 = 0$ m/s².

Understanding rates of change like velocity and acceleration helps us analyze dynamic systems, which is crucial for fields like robotics, control systems, and even network traffic analysis where we might model data flow as a dynamic process.

### 7. Notation for Derivatives

You'll encounter various ways mathematicians and scientists write derivatives. It's important to be familiar with them.

*   **Lagrange Notation:** $f'(x)$, $f''(x)$, $f'''(x)$, ..., $f^{(n)}(x)$. This is concise and common.
*   **Leibniz Notation:** $\frac{dy}{dx}$, $\frac{d^2y}{dx^2}$, $\frac{d^n y}{dx^n}$. This notation emphasizes the "change in $y$ over change in $x$" idea and is particularly useful when dealing with related rates or implicit differentiation. For instance, if $y$ is a function of $u$, and $u$ is a function of $x$, the chain rule is nicely expressed as $\frac{dy}{dx} = \frac{dy}{du} \frac{du}{dx}$.
*   **Newton Notation (Dot Notation):** $\dot{y}$ or $\ddot{y}$. This is most commonly used in physics for time derivatives, e.g., velocity is $\dot{x}$ and acceleration is $\ddot{x}$, where $x$ is position.

### 8. Existence of the Derivative

A function $f$ is **differentiable** at a point $a$ if its derivative $f'(a)$ exists. For the derivative to exist, the limit of the difference quotient must exist. This means the limit must be a finite real number.

What can go wrong?

*   **Corners or Cusps:** Functions with sharp turns or points on their graphs often are not differentiable at that point. The slopes of the secant lines approaching from the left and right will be different. Think of the function $f(x) = |x|$ at $x=0$.
    *   For $x > 0$, $f(x) = x$, so $\lim_{h \to 0^+} \frac{(0+h) - 0}{h} = \lim_{h \to 0^+} \frac{h}{h} = 1$.
    *   For $x < 0$, $f(x) = -x$, so $\lim_{h \to 0^-} \frac{-(0+h) - 0}{h} = \lim_{h \to 0^-} \frac{-h}{h} = -1$.
    Since the left and right limits are different (1 vs. -1), the derivative does not exist at $x=0$. This is a common exam topic – recognizing points of non-differentiability.
*   **Vertical Tangents:** If the secant lines approach a vertical line, the slope becomes infinite. For example, $f(x) = x^{1/3}$ at $x=0$.
    $\lim_{h \to 0} \frac{(0+h)^{1/3} - 0}{h} = \lim_{h \to 0} \frac{h^{1/3}}{h} = \lim_{h \to 0} \frac{1}{h^{2/3}}$. As $h \to 0$, $h^{2/3} \to 0$ through positive values, so the limit is $+\infty$. Since the limit is not finite, the derivative does not exist. The graph has a vertical tangent at $x=0$.
*   **Discontinuities:** If a function is not continuous at a point, it cannot be differentiable at that point. This is a very important theorem: **Differentiability implies Continuity.** However, the converse is not true (as shown by $|x|$ at $x=0$, which is continuous but not differentiable).

**Key Takeaway:** If a function is differentiable at a point, it must be continuous there. But continuity does not guarantee differentiability.

This understanding of where derivatives exist is critical for applying calculus to real-world problems. In information science, if a model's behavior depends on a derivative, we must ensure that derivative exists at the points of interest.

### 9. Connecting to Course Outcomes: A Summary

Let's explicitly link this topic back to our Course Outcomes:

*   **CO1: Apply various concepts in calculus to linearize functions and to analyze concavity.**
    *   **Linearization:** The derivative $f'(a)$ is the slope of the tangent line at $x=a$. The tangent line $y = f(a) + f'(a)(x-a)$ is the linear approximation (linearization) of $f(x)$ near $a$. We use it to approximate function values and understand local behavior.
    *   **Analyzing Concavity:** While concavity itself is related to the *second* derivative, understanding the *first* derivative (the slope) is the prerequisite. The derivative tells us where a function is increasing or decreasing, which is the first step in analyzing its shape and curvature.

*   **CO2: Calculate the limits for functions of two variables and partial derivatives of multivariable functions.**
    *   Although this specific topic focuses on single-variable functions, the *method* of using limits to define rates of change is directly transferable. When we move to multivariable calculus, we'll see how these ideas extend to partial derivatives, where we examine the rate of change with respect to one variable while holding others constant – still built on the foundation of the limit definition of the derivative.

*   **CO3: Interpret directional derivative and solve maxima and minima of multivariable functions.**
    *   Again, the core idea of a derivative as a rate of change is fundamental. For single-variable functions, the derivative tells us the rate of change along the x-axis. For multivariable functions, the directional derivative tells us the rate of change in any given direction. Understanding the instantaneous rate of change at a point is the bedrock for finding where a function reaches its highest or lowest values (extrema).

*   **CO4: Solve constrained maxima and minima, LPP and understand the method of Steepest Descent.**
    *   Methods like Steepest Descent rely heavily on understanding the gradient, which is a vector of partial derivatives. The gradient points in the direction of the steepest *increase* of a function. To find the steepest *descent*, we move in the opposite direction. This entire concept is an extension of the idea of instantaneous rate of change.

### 10. Exam Focus and Pitfalls

When studying for exams, pay attention to:

*   **The Limit Definition:** Be prepared to use the limit definition $\lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$ to find the derivative of a function. This is a direct test of your understanding of the core concept.
*   **Evaluating Derivatives at a Point:** Calculate $f'(a)$ for given functions and values of $a$.
*   **Geometric Interpretation:** Sketching graphs and identifying the tangent line slope. Problems might ask you to find the equation of a tangent line.
*   **Physical Interpretation:** Solving problems involving velocity and acceleration from position functions.
*   **Non-differentiability:** Identifying points where a function might not be differentiable (corners, cusps, vertical tangents, discontinuities). Be ready to justify why the derivative doesn't exist.
*   **Differentiability implies Continuity:** Remember this relationship. If a function isn't continuous, it's definitely not differentiable.

**Common Pitfall:** Algebra errors when simplifying the difference quotient. Carefully expand $(x+h)^2$ or $(x+h)^3$, and ensure you correctly cancel terms. Also, remember to *only* cancel $h$ after factoring it out from the numerator, and only if $h \neq 0$.

### Sample Questions and Answers

Here are a few practice questions to test your understanding:

**Question 1 (Conceptual):**
Explain why differentiability at a point implies continuity at that point. Is the converse true? Provide an example.

**Answer:**
If a function $f$ is differentiable at $x=a$, its derivative $f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}$ exists and is finite.
We can write $f(a+h) - f(a) = \frac{f(a+h) - f(a)}{h} \cdot h$.
Taking the limit as $h \to 0$:
$\lim_{h \to 0} (f(a+h) - f(a)) = \lim_{h \to 0} \left(\frac{f(a+h) - f(a)}{h}\right) \cdot \lim_{h \to 0} h$
$= f'(a) \cdot 0 = 0$.
So, $\lim_{h \to 0} (f(a+h) - f(a)) = 0$, which means $\lim_{h \to 0} f(a+h) = f(a)$.
This is precisely the definition of continuity at $x=a$.

The converse is **not** true. The function $f(x) = |x|$ is continuous at $x=0$ (since $\lim_{x \to 0} |x| = |0| = 0$), but it is not differentiable at $x=0$, as we showed earlier the left and right derivatives are different (-1 and 1).

**Question 2 (Calculation):**
Use the limit definition to find the derivative of $f(x) = 3x^2 + 2x$ at $x=1$.

**Answer:**
We need to calculate $f'(1) = \lim_{h \to 0} \frac{f(1+h) - f(1)}{h}$.

First, find $f(1+h)$ and $f(1)$:
$f(1+h) = 3(1+h)^2 + 2(1+h)$
$= 3(1 + 2h + h^2) + 2 + 2h$
$= 3 + 6h + 3h^2 + 2 + 2h$
$= 5 + 8h + 3h^2$

$f(1) = 3(1)^2 + 2(1) = 3 + 2 = 5$.

Now, plug into the difference quotient:
$\frac{f(1+h) - f(1)}{h} = \frac{(5 + 8h + 3h^2) - 5}{h}$
$= \frac{8h + 3h^2}{h}$
$= \frac{h(8 + 3h)}{h}$

For $h \neq 0$, this simplifies to $8 + 3h$.

Finally, take the limit as $h \to 0$:
$f'(1) = \lim_{h \to 0} (8 + 3h) = 8 + 3(0) = 8$.

So, the derivative of $f(x) = 3x^2 + 2x$ at $x=1$ is 8.

**Question 3 (Application):**
The position of a particle is given by $s(t) = t^3 - 9t^2 + 24t$, where $s$ is in meters and $t$ is in seconds. Find the velocity and acceleration of the particle when $t=3$ seconds.

**Answer:**
The velocity is the derivative of position with respect to time:
$v(t) = s'(t) = \frac{d}{dt}(t^3 - 9t^2 + 24t)$
Using the power rule (which we'll learn more about, but intuitively it's derived from the limit definition):
$v(t) = 3t^2 - 18t + 24$.

To find the velocity at $t=3$ seconds:
$v(3) = 3(3)^2 - 18(3) + 24$
$v(3) = 3(9) - 54 + 24$
$v(3) = 27 - 54 + 24 = -3$ m/s.

The acceleration is the derivative of velocity with respect to time:
$a(t) = v'(t) = \frac{d}{dt}(3t^2 - 18t + 24)$
$a(t) = 6t - 18$.

To find the acceleration at $t=3$ seconds:
$a(3) = 6(3) - 18$
$a(3) = 18 - 18 = 0$ m/s².

So, at $t=3$ seconds, the particle's velocity is -3 m/s, and its acceleration is 0 m/s².

This concludes our deep dive into the derivative at a point. Remember, this concept is the bedrock for understanding rates of change, analyzing function behavior, and building sophisticated models in information science. Keep practicing the limit definition, and you'll master this crucial idea!
