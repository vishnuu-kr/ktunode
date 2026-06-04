---
title: "Derivative as a Function"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 1"
module: "Module 1: Limits of Function Values"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5bc0"
status: "completed"
scrapedAt: "2026-05-20T16:39:46.912Z"
---
# MATHEMATICS FOR INFORMATION SCIENCE – 1

## Module 1: Limits of Function Values

### Topic: The Derivative as a Function

Hello everyone, and welcome back to our journey into the fascinating world of calculus! In this module, we've been exploring the fundamental concept of limits and how they help us understand the behavior of functions. Today, we're going to take a giant leap forward and see how these limit ideas lead us to one of the most powerful tools in mathematics: **the derivative**.

You've probably encountered the idea of "rate of change" before. Think about driving a car: your speed is how quickly your position changes over time. Or consider a business: how quickly are profits growing? These are all examples of rates of change. The derivative is calculus's way of precisely defining and calculating this instantaneous rate of change for *any* function.

Our main goal today is to understand that the derivative isn't just a single value at a point; it's actually a **new function** derived from our original function. This new function, the derivative function, will tell us the slope of the tangent line to the original function at *any* point where it's defined. This is crucial for understanding how functions behave globally, not just at isolated points.

This topic directly connects to **Course Outcome 1 (CO1)**: "Apply various concepts in calculus to linearize functions and to analyze concavity." Understanding the derivative as a function is the *foundation* for linearization. We'll see that the derivative gives us the best linear approximation of a function near a point, which is a cornerstone of many techniques in information science, from modeling to optimization. We'll also touch upon how the *second* derivative, which we'll explore later, relates to concavity.

Let's dive in!

### 1. Revisiting the Tangent Line and Instantaneous Rate of Change

Before we formally define the derivative as a function, let's quickly recap what we learned about the tangent line. Remember, the slope of a secant line passing through two points on a curve gives us an *average* rate of change.

Imagine you're tracking the temperature in a city over a day. The average temperature change between noon and 2 PM is easy to calculate: (Temperature at 2 PM - Temperature at Noon) / (2 PM - Noon). This is like the slope of a secant line.

But what if you want to know the temperature change *exactly at 1 PM*? That's the **instantaneous rate of change**. To find this, we bring the two points on our secant line closer and closer together. As the second point approaches the first, the secant line's slope approaches the slope of the tangent line at that first point.

This limiting process is precisely what defines the derivative.

### 2. The Definition of the Derivative as a Function

So, how do we turn this idea of a limiting slope into a *function*? We use the limit definition of the derivative.

Let $f(x)$ be a function. We define the **derivative of $f$ at a point $x$**, denoted by $f'(x)$ (read as "f prime of x"), as:

$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$

provided this limit exists.

This formula might look familiar. The term $\frac{f(x+h) - f(x)}{h}$ is the slope of the secant line between the points $(x, f(x))$ and $(x+h, f(x+h))$. As $h$ approaches 0, the point $(x+h, f(x+h))$ slides along the curve towards $(x, f(x))$. The limit, if it exists, gives us the slope of the tangent line at $(x, f(x))$.

Crucially, notice that this definition is for a *general* $x$. We are not fixing $x$ to a specific value like $x=a$ (which would give us a number, the slope at $a$). Instead, we are keeping $x$ as a variable. This means that $f'(x)$ itself is a function of $x$.

**Think of it this way:** If $f(x)$ represents the position of a car at time $x$, then $f'(x)$ represents the *velocity* of the car at any time $x$. The velocity is not constant; it changes as the car speeds up or slows down. So, velocity is a function of time. Similarly, the derivative function $f'(x)$ tells us the slope of the tangent line at *any* point $x$ where the derivative is defined.

**What does it mean for the derivative to exist?** For the limit to exist, the function must be "smooth" at that point. It cannot have sharp corners (like $|x|$ at $x=0$) or vertical tangent lines. We'll explore these "non-differentiable" points more later.

### 3. Alternative Definition of the Derivative

There's another way to write the same definition, which some find more intuitive when doing calculations. If we let $x$ be our starting point and $x+h$ be the second point, we can define $x+h = z$. Then $h = z-x$. As $h \to 0$, it means $z$ is approaching $x$. So, we can also write:

$f'(x) = \lim_{z \to x} \frac{f(z) - f(x)}{z-x}$

This form directly highlights the idea of the difference in function values divided by the difference in input values, as the points get infinitely close. It emphasizes the instantaneous rate of change of $f$ with respect to $x$.

Both definitions are equivalent and yield the same derivative function.

### 4. Notation for Derivatives

Besides $f'(x)$, mathematicians use several other notations to represent the derivative of a function. It's important to be comfortable with all of them, as you'll see them in textbooks and papers.

*   **Leibniz Notation:** $\frac{dy}{dx}$ (if $y = f(x)$). This notation, introduced by Gottfried Wilhelm Leibniz, is very descriptive. It reads as "the derivative of $y$ with respect to $x$." The $\frac{d}{dx}$ acts like an operator, meaning "take the derivative of what follows with respect to $x$." So, $f'(x)$ can also be written as $\frac{d}{dx} f(x)$.
*   **Prime Notation:** $f'(x)$, $g'(x)$, etc., as we've seen. This is concise and common.
*   **Subscript Notation:** $f_x$ or $f_x(x)$ (read as "f sub x"). This is particularly useful when dealing with functions of multiple variables, which we will see later in the course.

**Remember this:** $\frac{dy}{dx}$ is *not* a fraction in the usual sense. It represents a limit of a fraction. However, we can often treat it like one in algebraic manipulations, which is one of its strengths.

### 5. Examples: Finding the Derivative as a Function

Let's work through some examples to see how this works in practice. These examples will solidify your understanding and prepare you for exam-style questions.

**Example 1: A Simple Polynomial**

Let $f(x) = x^2$. We want to find $f'(x)$.

Using the definition:
$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$

First, find $f(x+h)$:
$f(x+h) = (x+h)^2 = x^2 + 2xh + h^2$

Now substitute into the limit formula:
$f'(x) = \lim_{h \to 0} \frac{(x^2 + 2xh + h^2) - x^2}{h}$

Simplify the numerator:
$f'(x) = \lim_{h \to 0} \frac{2xh + h^2}{h}$

Factor out $h$ from the numerator:
$f'(x) = \lim_{h \to 0} \frac{h(2x + h)}{h}$

Cancel out the $h$ (since $h \to 0$, $h \neq 0$):
$f'(x) = \lim_{h \to 0} (2x + h)$

Now, take the limit as $h \to 0$:
$f'(x) = 2x + 0 = 2x$

So, the derivative of $f(x) = x^2$ is $f'(x) = 2x$.

**What does this mean?**
*   At $x=1$, the slope of the tangent line to $y=x^2$ is $f'(1) = 2(1) = 2$.
*   At $x=-3$, the slope is $f'(-3) = 2(-3) = -6$.
*   At $x=0$, the slope is $f'(0) = 2(0) = 0$. This makes sense, as the parabola $y=x^2$ has a horizontal tangent at its vertex $(0,0)$.

This derivative function $f'(x)=2x$ *tells us the slope at any x*. This is the power of viewing the derivative as a function! This is directly related to **CO1** as it provides the linear approximation of $f(x)=x^2$ around any point $x$.

**Example 2: A Linear Function**

Let $f(x) = 3x + 5$. What is its derivative?

$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$
$f(x+h) = 3(x+h) + 5 = 3x + 3h + 5$

$f'(x) = \lim_{h \to 0} \frac{(3x + 3h + 5) - (3x + 5)}{h}$
$f'(x) = \lim_{h \to 0} \frac{3x + 3h + 5 - 3x - 5}{h}$
$f'(x) = \lim_{h \to 0} \frac{3h}{h}$
$f'(x) = \lim_{h \to 0} 3$
$f'(x) = 3$

The derivative of $f(x) = 3x + 5$ is $f'(x) = 3$. This is consistent with our understanding of linear functions. The slope of a line $y = mx+b$ is always $m$. Here, the slope is 3, so the derivative is 3 everywhere. This shows that the derivative of a linear function is a constant, representing its constant slope.

**Example 3: A Function with a Square Root**

Let $f(x) = \sqrt{x}$. We want to find $f'(x)$. This requires a bit more algebraic manipulation.

$f'(x) = \lim_{h \to 0} \frac{\sqrt{x+h} - \sqrt{x}}{h}$

When you see a difference of square roots in a limit problem, a common technique is to multiply by the conjugate. The conjugate of $\sqrt{x+h} - \sqrt{x}$ is $\sqrt{x+h} + \sqrt{x}$.

$f'(x) = \lim_{h \to 0} \frac{(\sqrt{x+h} - \sqrt{x})}{h} \times \frac{(\sqrt{x+h} + \sqrt{x})}{(\sqrt{x+h} + \sqrt{x})}$

Multiply the numerators: $(\sqrt{x+h})^2 - (\sqrt{x})^2 = (x+h) - x = h$.

$f'(x) = \lim_{h \to 0} \frac{h}{h(\sqrt{x+h} + \sqrt{x})}$

Cancel out the $h$:
$f'(x) = \lim_{h \to 0} \frac{1}{\sqrt{x+h} + \sqrt{x}}$

Now, take the limit as $h \to 0$:
$f'(x) = \frac{1}{\sqrt{x+0} + \sqrt{x}} = \frac{1}{\sqrt{x} + \sqrt{x}} = \frac{1}{2\sqrt{x}}$

So, the derivative of $f(x) = \sqrt{x}$ is $f'(x) = \frac{1}{2\sqrt{x}}$.

**Important point:** Notice that this derivative $f'(x) = \frac{1}{2\sqrt{x}}$ is not defined at $x=0$. If we plug in $x=0$, we get division by zero. This means that the function $f(x) = \sqrt{x}$ does not have a derivative (and thus no tangent line with a finite slope) at $x=0$. Graphically, the curve $y=\sqrt{x}$ has a vertical tangent at $(0,0)$. This is an example of a point where the function is continuous but not differentiable.

This example, particularly the domain of the derivative, connects to **CO1** as understanding where a derivative exists is key to analyzing function behavior.

### 6. Domain of the Derivative Function

It's very important to consider the domain of the derivative function, $f'(x)$. The derivative $f'(x)$ exists only at points $x$ where the limit definition yields a finite number.

*   If $f(x)$ is defined on an interval, its derivative $f'(x)$ might be defined on a smaller interval.
*   As seen in the $\sqrt{x}$ example, functions can be continuous at a point but not differentiable there. Common culprits for non-differentiability include:
    *   **Corners or Cusps:** Like $|x|$ at $x=0$. The slope approaches different values from the left and right.
    *   **Vertical Tangents:** Like $\sqrt[3]{x}$ at $x=0$. The slope tends towards infinity.
    *   **Discontinuities:** If a function isn't even continuous at a point, it certainly can't be differentiable there.

**Example: Absolute Value Function**
Let $f(x) = |x|$.
For $x > 0$, $f(x) = x$, so $f'(x) = 1$.
For $x < 0$, $f(x) = -x$, so $f'(x) = -1$.

What about at $x=0$?
$\lim_{h \to 0^+} \frac{|0+h| - |0|}{h} = \lim_{h \to 0^+} \frac{h}{h} = 1$
$\lim_{h \to 0^-} \frac{|0+h| - |0|}{h} = \lim_{h \to 0^-} \frac{-h}{h} = -1$

Since the limit from the left (-1) does not equal the limit from the right (1), the overall limit does not exist at $x=0$. Therefore, $f(x)=|x|$ is not differentiable at $x=0$. The derivative function is:
$f'(x) = \begin{cases} 1 & \text{if } x > 0 \\ -1 & \text{if } x < 0 \end{cases}$
The domain of $f'(x)$ is $(-\infty, 0) \cup (0, \infty)$.

Understanding the domain of the derivative is crucial for analysis, as it tells us where the function is "smooth enough" for linear approximation or other calculus operations. This ties into **CO1**.

### 7. The Derivative as a Tool for Understanding Functions

So, we have a new function, $f'(x)$, that gives us the slope of the original function $f(x)$ at any point $x$. How is this useful?

1.  **Rate of Change:** As we discussed, $f'(x)$ tells us how fast $f(x)$ is changing with respect to $x$.
    *   If $f'(x) > 0$, then $f(x)$ is increasing.
    *   If $f'(x) < 0$, then $f(x)$ is decreasing.
    *   If $f'(x) = 0$, then $f(x)$ has a horizontal tangent line. These are critical points, which often correspond to local maximums or minimums.

2.  **Linearization:** Near a point $x=a$, the tangent line $y = f(a) + f'(a)(x-a)$ provides a good linear approximation of $f(x)$. This is incredibly powerful!
    Imagine you have a complex function that's hard to work with directly. If you want to understand its behavior *locally* around a specific point, you can approximate it with a simple line using the derivative. This is fundamental in many algorithms, especially in optimization and numerical methods. This is a direct link to **CO1**'s emphasis on linearizing functions.

3.  **Shape of the Graph:** The derivative helps us understand the shape of the graph.
    *   Where $f'(x)$ is positive, the graph of $f(x)$ is going uphill (increasing).
    *   Where $f'(x)$ is negative, the graph of $f(x)$ is going downhill (decreasing).
    *   Where $f'(x)=0$, there might be a peak or a valley.

**Exam Tip:** Many questions will ask you to find the derivative of a function. Always use the limit definition correctly, showing your algebraic steps. Pay attention to the domain of the resulting derivative function. When asked about increasing/decreasing intervals, you'll be analyzing the sign of $f'(x)$.

### 8. Relationship to Course Outcomes

Let's explicitly link this topic back to our course outcomes:

*   **CO1: Apply various concepts in calculus to linearize functions and to analyze concavity.**
    *   **Linearization:** The derivative $f'(x)$ is the slope of the tangent line $L(x) = f(a) + f'(a)(x-a)$, which is the best linear approximation of $f(x)$ near $x=a$. This topic provides the essential tool ($f'(a)$) for linearization.
    *   **Analyzing Concavity:** While concavity is primarily determined by the *second* derivative (the derivative of $f'(x)$), understanding $f'(x)$ itself is the prerequisite for finding $f''(x)$. We'll build on this in future lessons.

*   **CO2: Calculate the limits for functions of two variables and partial derivatives of multivariable functions.**
    *   This topic focuses on functions of a single variable. However, the *concept* of the derivative as a limit of a difference quotient is foundational. When we move to multivariable calculus, we'll see how this idea extends to partial derivatives, which are essentially derivatives of a multivariable function with respect to one variable, holding others constant. The limit definition for single variables provides the intuition.

*   **CO3: Interpret directional derivative and solve maxima and minima of multivariable functions.**
    *   Similar to CO2, understanding the derivative of a single-variable function as a measure of instantaneous rate of change is the bedrock. For multivariable functions, the gradient vector (composed of partial derivatives) plays a similar role, pointing in the direction of the steepest ascent. The concept of finding where the derivative is zero for critical points in single-variable calculus is a direct precursor to finding maxima/minima using partial derivatives and the gradient.

*   **CO4: Solve constrained maxima and minima, LPP and understand the method of Steepest Descent.**
    *   Again, the core idea of using derivatives to find stationary points (where the derivative is zero) is fundamental. In optimization problems (like Steepest Descent), we're essentially trying to find the "bottom" of a function. The gradient (which is built from derivatives) tells us which way is downhill. This topic is the essential first step in that analytical process.

### 9. Recap and Key Takeaways

*   The **derivative of a function $f(x)$**, denoted $f'(x)$, is defined as the limit: $f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$.
*   This limit represents the **instantaneous rate of change** of $f(x)$ with respect to $x$.
*   Geometrically, $f'(x)$ is the **slope of the tangent line** to the graph of $f(x)$ at the point $(x, f(x))$.
*   The derivative $f'(x)$ is itself a **function** of $x$. Its domain may be smaller than the domain of $f(x)$.
*   Functions must be **continuous and smooth** (no sharp corners or vertical tangents) at a point to be differentiable there.
*   The derivative is a crucial tool for analyzing function behavior: identifying where a function is **increasing or decreasing**, and finding **critical points** (where $f'(x)=0$ or is undefined).
*   It's the foundation for **linear approximation**, a vital technique for simplifying complex functions locally.

### Sample Questions and Answers

**1. Conceptual Question:** Explain why the derivative $f'(x)$ is called a "function" and what it represents.

**Answer:** The derivative $f'(x)$ is called a function because it is defined by a limit process that takes an input $x$ and produces an output, the instantaneous rate of change (or slope of the tangent line) of the original function $f(x)$ at that input $x$. For every value of $x$ in the domain of $f'(x)$, we get a specific value for the rate of change of $f(x)$. For example, if $f(x)$ represents the distance traveled by a car at time $x$, then $f'(x)$ represents the velocity of the car at time $x$. Since velocity can change over time, it's a function of time.

**2. Calculation Question:** Find the derivative of $f(x) = 2x^2 - 5x + 1$ using the limit definition.

**Answer:**
Let $f(x) = 2x^2 - 5x + 1$.
We need to find $f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$.

First, $f(x+h) = 2(x+h)^2 - 5(x+h) + 1$
$f(x+h) = 2(x^2 + 2xh + h^2) - 5x - 5h + 1$
$f(x+h) = 2x^2 + 4xh + 2h^2 - 5x - 5h + 1$

Now, $f(x+h) - f(x) = (2x^2 + 4xh + 2h^2 - 5x - 5h + 1) - (2x^2 - 5x + 1)$
$f(x+h) - f(x) = 2x^2 + 4xh + 2h^2 - 5x - 5h + 1 - 2x^2 + 5x - 1$
$f(x+h) - f(x) = 4xh + 2h^2 - 5h$

Now, substitute this into the limit formula:
$f'(x) = \lim_{h \to 0} \frac{4xh + 2h^2 - 5h}{h}$

Factor out $h$ from the numerator:
$f'(x) = \lim_{h \to 0} \frac{h(4x + 2h - 5)}{h}$

Cancel $h$:
$f'(x) = \lim_{h \to 0} (4x + 2h - 5)$

Take the limit as $h \to 0$:
$f'(x) = 4x + 2(0) - 5$
$f'(x) = 4x - 5$

So, the derivative of $f(x) = 2x^2 - 5x + 1$ is $f'(x) = 4x - 5$.

**3. Conceptual/Application Question:** Consider a function $g(t)$ that describes the number of active users on a social media platform at time $t$ (in days). What does $g'(5)$ represent, assuming $g'(5)$ exists?

**Answer:** If $g'(5)$ exists, it represents the instantaneous rate of change of the number of active users on the platform on day 5. In practical terms, it tells us how quickly the number of users is increasing or decreasing on that specific day. If $g'(5) = 1000$, it means that on day 5, the number of active users is increasing at a rate of 1000 users per day. If $g'(5) = -500$, it means the number of users is decreasing at a rate of 500 users per day. This relates to **CO1** by showing how the derivative quantifies change.

**4. Domain Question:** Find the derivative of $f(x) = x^{1/3}$ (the cube root of x) using the limit definition, and state the domain of $f'(x)$.

**Answer:**
Let $f(x) = x^{1/3}$.
$f'(x) = \lim_{h \to 0} \frac{(x+h)^{1/3} - x^{1/3}}{h}$.

This limit is a bit trickier to evaluate directly with the conjugate method used for square roots. A more advanced method (or recall from formulas) shows that for $f(x) = x^n$, $f'(x) = nx^{n-1}$. For $f(x) = x^{1/3}$, this would suggest $f'(x) = \frac{1}{3}x^{1/3 - 1} = \frac{1}{3}x^{-2/3} = \frac{1}{3x^{2/3}}$.

Let's verify the domain. The formula $\frac{1}{3x^{2/3}}$ is undefined when $x=0$ because of division by zero. This indicates that $f(x) = x^{1/3}$ is not differentiable at $x=0$.

To show this using the limit definition (which is more complex here, often involving a substitution $u = (x+h)^{1/3}$ and $v = x^{1/3}$ and the identity $u^3-v^3 = (u-v)(u^2+uv+v^2)$):
Let $u = (x+h)^{1/3}$ and $v = x^{1/3}$.
$f'(x) = \lim_{h \to 0} \frac{u - v}{h}$
We know $u^3 = x+h$ and $v^3 = x$, so $u^3 - v^3 = h$.
Thus, $h = (u-v)(u^2+uv+v^2)$.

$f'(x) = \lim_{h \to 0} \frac{u-v}{(u-v)(u^2+uv+v^2)} = \lim_{h \to 0} \frac{1}{u^2+uv+v^2}$

As $h \to 0$, $u \to x^{1/3}$ and $v \to x^{1/3}$.
So, $f'(x) = \frac{1}{(x^{1/3})^2 + (x^{1/3})(x^{1/3}) + (x^{1/3})^2} = \frac{1}{x^{2/3} + x^{2/3} + x^{2/3}} = \frac{1}{3x^{2/3}}$.

The domain of $f'(x) = \frac{1}{3x^{2/3}}$ is all real numbers except $x=0$.
Domain of $f'(x)$ is $(-\infty, 0) \cup (0, \infty)$.

This example reinforces the idea that a function can be continuous (like $x^{1/3}$ at $x=0$) but not differentiable. This connects to **CO1** by highlighting analysis of function behavior.

Keep practicing these limit calculations, and you'll find that the derivative becomes a very natural and powerful tool!
