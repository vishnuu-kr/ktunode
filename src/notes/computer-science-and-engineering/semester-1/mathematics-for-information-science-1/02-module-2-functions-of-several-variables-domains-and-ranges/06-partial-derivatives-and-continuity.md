---
title: "Partial derivatives and continuity"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 1"
module: "Module 2: Functions of Several Variables: Domains and Ranges"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5bce"
status: "completed"
scrapedAt: "2026-05-20T16:40:07.322Z"
---
## Mathematics for Information Science – 1: Module 2 - Functions of Several Variables: Domains and Ranges

### Topic: Partial Derivatives and Continuity

Welcome, everyone! Today, we're diving into a really exciting part of multivariable calculus: **Partial Derivatives and Continuity**. This is where we start to understand how functions of *multiple* variables behave, which is absolutely fundamental for many areas in Information Science, from analyzing complex data sets to building sophisticated models.

Remember our journey with single-variable calculus? We looked at how a function changes as its single input variable changes. Now, imagine you have a function that depends on *several* inputs – like the performance of a machine learning algorithm depending on the learning rate, the batch size, and the number of epochs. How does the performance change if we *only* tweak the learning rate, keeping everything else constant? This is precisely what partial derivatives help us understand.

Our goal today is to get a firm grasp on:

*   **Partial Derivatives:** How to calculate and interpret them.
*   **Continuity of Functions of Several Variables:** What it means for a function to be "smooth" when it has multiple inputs, and how to check for it.

These concepts directly build towards our Course Outcomes. Specifically, we'll be addressing **CO2: Calculate the limits for functions of two variables and partial derivatives of multivariable functions** and laying the groundwork for understanding **CO3: Interpret directional derivative and solve maxima and minima of multivariable functions**.

Let's get started!

---

### 1. Partial Derivatives: Isolating the Impact of One Variable

Imagine you're a data scientist tuning a recommendation system. The accuracy of your recommendations ($A$) might depend on the number of users ($U$) and the number of items ($I$) in your database. So, we can express accuracy as a function: $A(U, I)$.

Now, you want to know: "If I add 1000 more users, how much will the accuracy likely change, *assuming the number of items stays the same*?" Or, "If I add 500 more items, how will accuracy change, *keeping the user base constant*?"

This is where the idea of a **partial derivative** comes in. It's like taking a slice of the function's behavior, focusing on the change caused by *one* input variable while treating all other input variables as constants.

#### 1.1 Definition of Partial Derivatives

Let's consider a function of two variables, $f(x, y)$.

*   The **partial derivative of $f$ with respect to $x$**, denoted as $\frac{\partial f}{\partial x}$ or $f_x(x, y)$, is the rate of change of $f$ as $x$ changes, *while $y$ is held constant*.
*   The **partial derivative of $f$ with respect to $y$**, denoted as $\frac{\partial f}{\partial y}$ or $f_y(x, y)$, is the rate of change of $f$ as $y$ changes, *while $x$ is held constant*.

Think of it like this: To find $\frac{\partial f}{\partial x}$, you pretend $y$ is just a number (like 5, or $\pi$, or any constant). Then, you differentiate $f(x, y)$ with respect to $x$ using your familiar single-variable differentiation rules. Similarly, for $\frac{\partial f}{\partial y}$, you treat $x$ as a constant.

This concept extends to functions of more variables. For a function $f(x, y, z)$, we can find $\frac{\partial f}{\partial x}$, $\frac{\partial f}{\partial y}$, and $\frac{\partial f}{\partial z}$.

**Example 1: A simple polynomial function**

Let $f(x, y) = x^2y + 3x - 5y^2$.

To find $\frac{\partial f}{\partial x}$:
Treat $y$ as a constant.
$\frac{\partial f}{\partial x} = \frac{\partial}{\partial x}(x^2y) + \frac{\partial}{\partial x}(3x) - \frac{\partial}{\partial x}(5y^2)$
Here, $y$ is a constant multiplier for $x^2$, so $\frac{\partial}{\partial x}(x^2y) = y \cdot \frac{\partial}{\partial x}(x^2) = y \cdot 2x = 2xy$.
The derivative of $3x$ with respect to $x$ is $3$.
And $5y^2$ is just a constant with respect to $x$, so its derivative is $0$.
Therefore, $\frac{\partial f}{\partial x} = 2xy + 3$.

To find $\frac{\partial f}{\partial y}$:
Treat $x$ as a constant.
$\frac{\partial f}{\partial y} = \frac{\partial}{\partial y}(x^2y) + \frac{\partial}{\partial y}(3x) - \frac{\partial}{\partial y}(5y^2)$
Here, $x^2$ is a constant multiplier for $y$, so $\frac{\partial}{\partial y}(x^2y) = x^2 \cdot \frac{\partial}{\partial y}(y) = x^2 \cdot 1 = x^2$.
The derivative of $3x$ with respect to $y$ is $0$, since $x$ is treated as a constant.
The derivative of $5y^2$ with respect to $y$ is $5 \cdot 2y = 10y$.
Therefore, $\frac{\partial f}{\partial y} = x^2 - 10y$.

**Relatable Analogy:** Imagine you're baking a cake, and the quality of the cake ($Q$) depends on the amount of flour ($F$) and the amount of sugar ($S$). So, $Q(F, S)$.
If you want to know how changing *only* the flour by a tiny bit affects the quality, you'd calculate the partial derivative with respect to flour, keeping sugar constant. This tells you the impact of flour on its own. Similarly, the partial derivative with respect to sugar tells you the impact of sugar alone.

**Example 2: A more realistic scenario (Information Science context)**

Suppose the accuracy of a sentiment analysis model ($A$) depends on the size of the training dataset ($N$) and the complexity of the model ($C$). Let's say, for simplicity, $A(N, C) = \frac{N}{N+100} \cdot \frac{C}{C+5}$.

*   **Finding $\frac{\partial A}{\partial N}$ (How accuracy changes with dataset size, keeping model complexity fixed):**
    Treat $C$ as a constant. We'll use the quotient rule for the first fraction and note that $\frac{C}{C+5}$ is just a constant multiplier.
    $\frac{\partial A}{\partial N} = \left( \frac{\partial}{\partial N} \left( \frac{N}{N+100} \right) \right) \cdot \left( \frac{C}{C+5} \right)$
    Using the quotient rule $\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$ where $u=N$ and $v=N+100$:
    $u' = 1$, $v' = 1$.
    So, $\frac{\partial}{\partial N} \left( \frac{N}{N+100} \right) = \frac{1 \cdot (N+100) - N \cdot 1}{(N+100)^2} = \frac{N+100 - N}{(N+100)^2} = \frac{100}{(N+100)^2}$.
    Thus, $\frac{\partial A}{\partial N} = \frac{100}{(N+100)^2} \cdot \frac{C}{C+5}$.
    This tells us how much the accuracy increases if we add a small amount to $N$, given a fixed $C$.

*   **Finding $\frac{\partial A}{\partial C}$ (How accuracy changes with model complexity, keeping dataset size fixed):**
    Treat $N$ as a constant. The term $\frac{N}{N+100}$ is a constant multiplier.
    $\frac{\partial A}{\partial C} = \left( \frac{N}{N+100} \right) \cdot \left( \frac{\partial}{\partial C} \left( \frac{C}{C+5} \right) \right)$
    Using the quotient rule again for $\frac{C}{C+5}$ with $u=C$ and $v=C+5$:
    $u' = 1$, $v' = 1$.
    So, $\frac{\partial}{\partial C} \left( \frac{C}{C+5} \right) = \frac{1 \cdot (C+5) - C \cdot 1}{(C+5)^2} = \frac{C+5 - C}{(C+5)^2} = \frac{5}{(C+5)^2}$.
    Thus, $\frac{\partial A}{\partial C} = \frac{N}{N+100} \cdot \frac{5}{(C+5)^2}$.
    This tells us how accuracy changes as we slightly adjust the model complexity $C$, given a fixed dataset size $N$.

**Key Takeaway for CO2:** Calculating partial derivatives is a direct application of single-variable differentiation rules, with the crucial step of treating other variables as constants. This is a core skill for analyzing multivariable functions.

#### 1.2 Higher-Order Partial Derivatives

Just like with single-variable calculus where we could find the second derivative ($f''(x)$) or third derivative, we can do the same for partial derivatives.

If $f(x, y)$ is a function, we can find:
*   $\frac{\partial^2 f}{\partial x^2} = \frac{\partial}{\partial x} \left( \frac{\partial f}{\partial x} \right) = f_{xx}(x, y)$ (Second partial derivative with respect to $x$)
*   $\frac{\partial^2 f}{\partial y^2} = \frac{\partial}{\partial y} \left( \frac{\partial f}{\partial y} \right) = f_{yy}(x, y)$ (Second partial derivative with respect to $y$)
*   $\frac{\partial^2 f}{\partial y \partial x} = \frac{\partial}{\partial y} \left( \frac{\partial f}{\partial x} \right) = f_{xy}(x, y)$ (First with respect to $x$, then with respect to $y$)
*   $\frac{\partial^2 f}{\partial x \partial y} = \frac{\partial}{\partial x} \left( \frac{\partial f}{\partial y} \right) = f_{yx}(x, y)$ (First with respect to $y$, then with respect to $x$)

**The Clairaut's Theorem (or Equality of Mixed Partials):**
A very important result from Thomas' Calculus (and other texts like Kreyszig) is that if the second partial derivatives $f_{xy}$ and $f_{yx}$ are continuous in an open disk around $(a, b)$, then they are equal at $(a, b)$:
$f_{xy}(a, b) = f_{yx}(a, b)$

This means, for many "nice" functions we encounter, the order in which we take the partial derivatives doesn't matter for the second derivatives. This is a big simplification!

**Example 3: Checking mixed partial derivatives**

Let $f(x, y) = x^3y^2 + x^2y$.

First, find the first partial derivatives:
$\frac{\partial f}{\partial x} = 3x^2y^2 + 2xy$
$\frac{\partial f}{\partial y} = 2x^3y + x^2$

Now, let's find the mixed second partial derivatives:
$\frac{\partial^2 f}{\partial y \partial x} = \frac{\partial}{\partial y} \left( \frac{\partial f}{\partial x} \right) = \frac{\partial}{\partial y}(3x^2y^2 + 2xy) = 6x^2y + 2x$.
$\frac{\partial^2 f}{\partial x \partial y} = \frac{\partial}{\partial x} \left( \frac{\partial f}{\partial y} \right) = \frac{\partial}{\partial x}(2x^3y + x^2) = 6x^2y + 2x$.

Indeed, $f_{xy} = f_{yx}$. This holds true for this polynomial because all its partial derivatives are continuous everywhere.

**Why is this important?** It allows us to choose the "easier" path when calculating second partial derivatives. If computing $f_{xy}$ seems more complicated than $f_{yx}$, and we know the conditions for Clairaut's Theorem are met, we can compute $f_{yx}$ instead.

**Remember this:** For most functions you’ll deal with in this course, especially those built from polynomials, exponentials, sines, and cosines, the mixed partial derivatives will be equal. This is a huge time-saver!

---

### 2. Continuity of Functions of Several Variables

In single-variable calculus, a function $f(x)$ is continuous at a point $a$ if:
1.  $f(a)$ is defined.
2.  $\lim_{x \to a} f(x)$ exists.
3.  $\lim_{x \to a} f(x) = f(a)$.

Intuitively, this means you can draw the graph of the function without lifting your pen. There are no jumps, holes, or breaks.

Now, for functions of two variables, $f(x, y)$, continuity at a point $(a, b)$ means something similar:

A function $f(x, y)$ is continuous at $(a, b)$ if:
1.  $f(a, b)$ is defined.
2.  $\lim_{(x,y) \to (a,b)} f(x, y)$ exists.
3.  $\lim_{(x,y) \to (a,b)} f(x, y) = f(a, b)$.

The tricky part here is the **limit** $\lim_{(x,y) \to (a,b)} f(x, y)$. For a single variable, we only approach $a$ from the left or the right. But for two variables, $(x, y)$ can approach $(a, b)$ from *infinitely many directions* – along lines, curves, spirals, you name it! For the limit to exist, the function must approach the same value no matter *how* $(x, y)$ approaches $(a, b)$.

**Analogy:** Imagine a topographic map representing the altitude of a mountain ($z = f(x, y)$). A continuous function means the terrain is smooth; there are no sudden cliffs, holes, or floating islands. You can walk across the mountain without encountering abrupt changes in elevation. A discontinuity would be like a sudden drop-off or a missing patch of ground.

#### 2.1 Checking for Continuity

**How do we check if a limit exists when there are infinite paths of approach?**

The most common strategy, especially for introductory courses and exam questions, is to **try approaching the point along different paths**.

*   **Path 1: Along lines parallel to the axes.**
    *   Approach along $y = b$ (i.e., treat $y$ as constant $b$ and let $x \to a$). The limit becomes $\lim_{x \to a} f(x, b)$.
    *   Approach along $x = a$ (i.e., treat $x$ as constant $a$ and let $y \to b$). The limit becomes $\lim_{y \to b} f(a, y)$.
    If these two limits are different, the overall limit does not exist, and the function is discontinuous. If they are the same, it *doesn't* guarantee continuity, but it's a good start.

*   **Path 2: Along lines through the origin (or the point of interest).**
    *   Consider lines of the form $y = mx$. Let $x \to a$ (and thus $y \to ma$). The limit becomes $\lim_{x \to a} f(x, mx)$.
    *   If the point of interest is $(a, b) \neq (0, 0)$, we can consider lines $y - b = m(x - a)$, or $y = b + m(x - a)$. The limit becomes $\lim_{x \to a} f(x, b + m(x - a))$.

*   **Path 3: Along other specific curves.**
    *   Consider parabolic paths like $y = kx^2$ or $x = ky^2$.

**The strategy:** If you find two different paths that give different limiting values, you've proven the function is **discontinuous** at that point. If all paths you try yield the same limit, and that limit equals $f(a, b)$, you've *suggested* continuity. For many functions constructed from basic operations (addition, subtraction, multiplication, division, composition of continuous functions), if the denominator is non-zero at the point, the function is continuous. Discontinuities typically arise where the denominator is zero or in piecewise-defined functions.

**Example 4: Testing for continuity**

Let $f(x, y) = \frac{x^2 - y^2}{x^2 + y^2}$ at $(0, 0)$.
First, check if $f(0, 0)$ is defined.
$f(0, 0) = \frac{0^2 - 0^2}{0^2 + 0^2} = \frac{0}{0}$, which is undefined.
Since $f(0, 0)$ is not defined, the function is **discontinuous** at $(0, 0)$.

**What if the function was defined piecewise?**

Let $g(x, y) = \begin{cases} \frac{x^2 - y^2}{x^2 + y^2} & \text{if } (x, y) \neq (0, 0) \\ 0 & \text{if } (x, y) = (0, 0) \end{cases}$

Now, $g(0, 0)$ is defined (it's 0). We need to check if $\lim_{(x,y) \to (0,0)} g(x, y)$ exists and equals $g(0, 0)$.

Let's try some paths approaching $(0, 0)$:

*   **Path 1a: Along the x-axis ($y=0$).**
    $\lim_{x \to 0} g(x, 0) = \lim_{x \to 0} \frac{x^2 - 0^2}{x^2 + 0^2} = \lim_{x \to 0} \frac{x^2}{x^2} = \lim_{x \to 0} 1 = 1$.

*   **Path 1b: Along the y-axis ($x=0$).**
    $\lim_{y \to 0} g(0, y) = \lim_{y \to 0} \frac{0^2 - y^2}{0^2 + y^2} = \lim_{y \to 0} \frac{-y^2}{y^2} = \lim_{y \to 0} (-1) = -1$.

Since the limit along the x-axis (1) is different from the limit along the y-axis (-1), the overall limit $\lim_{(x,y) \to (0,0)} g(x, y)$ **does not exist**. Therefore, the function $g(x, y)$ is **discontinuous** at $(0, 0)$.

**Example 5: A function that might be continuous**

Let $h(x, y) = \begin{cases} \frac{xy}{x^2 + y^2} & \text{if } (x, y) \neq (0, 0) \\ 0 & \text{if } (x, y) = (0, 0) \end{cases}$

Check $h(0, 0) = 0$. Now, let's test the limit.

*   **Path 1a: Along the x-axis ($y=0$).**
    $\lim_{x \to 0} h(x, 0) = \lim_{x \to 0} \frac{x \cdot 0}{x^2 + 0^2} = \lim_{x \to 0} \frac{0}{x^2} = 0$.

*   **Path 1b: Along the y-axis ($x=0$).**
    $\lim_{y \to 0} h(0, y) = \lim_{y \to 0} \frac{0 \cdot y}{0^2 + y^2} = \lim_{y \to 0} \frac{0}{y^2} = 0$.

The limits along the axes match. What about a line $y = mx$ (for $m \neq 0$)?
$\lim_{x \to 0} h(x, mx) = \lim_{x \to 0} \frac{x(mx)}{x^2 + (mx)^2} = \lim_{x \to 0} \frac{mx^2}{x^2 + m^2x^2} = \lim_{x \to 0} \frac{mx^2}{x^2(1 + m^2)} = \lim_{x \to 0} \frac{m}{1 + m^2} = \frac{m}{1 + m^2}$.

Now, this limit, $\frac{m}{1 + m^2}$, depends on the slope $m$ of the line.
For example:
If $m=1$ (line $y=x$), the limit is $\frac{1}{1+1^2} = \frac{1}{2}$.
If $m=2$ (line $y=2x$), the limit is $\frac{2}{1+2^2} = \frac{2}{5}$.

Since the limit depends on the path (specifically, the slope $m$), the overall limit $\lim_{(x,y) \to (0,0)} h(x, y)$ **does not exist**. Therefore, $h(x, y)$ is **discontinuous** at $(0, 0)$.

**Crucial Point for Exam Success:** When asked to prove discontinuity, find two paths yielding different limits. When asked to prove continuity, it's often enough to argue that the function is a composition or combination of continuous functions (polynomials, rationals where denominator is non-zero, etc.), as stated in theorems in Thomas' Calculus or Kreyszig. For piecewise functions, the path-testing method is key.

**General Rules for Continuity (like in Anton's Calculus):**
If $f$ and $g$ are continuous at $(a, b)$, then so are:
*   $f+g$
*   $f-g$
*   $fg$
*   $kf$ (for any constant $k$)
*   $\frac{f}{g}$ (provided $g(a, b) \neq 0$)
*   Composition of continuous functions: If $g$ is continuous at $(a, b)$ and $f$ is continuous at $g(a, b)$, then $f \circ g$ is continuous at $(a, b)$.

**Example 6: Continuity of a rational function**

Consider $f(x, y) = \frac{x^2 + y^2 + 1}{x - y}$.
The numerator $x^2 + y^2 + 1$ is a polynomial, hence continuous everywhere.
The denominator $x - y$ is also a polynomial, hence continuous everywhere.
The function $f(x, y)$ is a ratio of two continuous functions. By the rules of continuity, it is continuous everywhere *except* where the denominator is zero.
The denominator is zero when $x - y = 0$, which means $y = x$.
So, $f(x, y)$ is continuous on its domain, which is the set of all points $(x, y)$ such that $y \neq x$. For any point $(a, b)$ where $b \neq a$, the function is continuous.

**Connecting to CO2 and beyond:** Understanding limits of functions of two variables is the prerequisite for calculating partial derivatives. If you can't find the limit $\lim_{h \to 0} \frac{f(x+h, y) - f(x, y)}{h}$, you can't find $\frac{\partial f}{\partial x}$. Furthermore, continuity is a fundamental property that ensures the nice behavior needed for topics like Taylor expansions and optimization, which are critical for CO3 and CO4. A function must be continuous (and often differentiable) for its partial derivatives to behave predictably.

---

### Sample Questions and Answers

Here are some practice questions to solidify your understanding:

**Question 1 (Conceptual):** What is the fundamental difference between a partial derivative and an ordinary derivative?
**Answer:** An ordinary derivative measures the rate of change of a function of a single variable with respect to that variable. A partial derivative measures the rate of change of a function of multiple variables with respect to one of its variables, while treating all other variables as constants. It isolates the impact of a single input.

**Question 2 (Calculation):** Find the first partial derivatives of $f(x, y) = e^{x^2y} \sin(y) + \frac{x}{y}$.
**Answer:**
To find $\frac{\partial f}{\partial x}$: Treat $y$ as a constant.
$\frac{\partial f}{\partial x} = \frac{\partial}{\partial x}(e^{x^2y} \sin(y)) + \frac{\partial}{\partial x}(\frac{x}{y})$
For the first term, $\sin(y)$ is a constant multiplier. Use the chain rule for $e^{x^2y}$: $\frac{\partial}{\partial x}(e^{x^2y}) = e^{x^2y} \cdot \frac{\partial}{\partial x}(x^2y) = e^{x^2y} \cdot (2xy)$.
So, $\frac{\partial}{\partial x}(e^{x^2y} \sin(y)) = 2xy \cdot e^{x^2y} \sin(y)$.
For the second term, $\frac{1}{y}$ is a constant multiplier. $\frac{\partial}{\partial x}(\frac{x}{y}) = \frac{1}{y} \cdot \frac{\partial}{\partial x}(x) = \frac{1}{y} \cdot 1 = \frac{1}{y}$.
Therefore, $\frac{\partial f}{\partial x} = 2xy e^{x^2y} \sin(y) + \frac{1}{y}$.

To find $\frac{\partial f}{\partial y}$: Treat $x$ as a constant.
$\frac{\partial f}{\partial y} = \frac{\partial}{\partial y}(e^{x^2y} \sin(y)) + \frac{\partial}{\partial y}(\frac{x}{y})$
For the first term, use the product rule: $(uv)' = u'v + uv'$. Let $u = e^{x^2y}$ and $v = \sin(y)$.
$u = e^{x^2y}$: $\frac{\partial u}{\partial y} = e^{x^2y} \cdot \frac{\partial}{\partial y}(x^2y) = e^{x^2y} \cdot x^2$.
$v = \sin(y)$: $\frac{\partial v}{\partial y} = \cos(y)$.
So, $\frac{\partial}{\partial y}(e^{x^2y} \sin(y)) = (x^2 e^{x^2y}) \sin(y) + e^{x^2y} (\cos(y))$.
For the second term, $x$ is a constant multiplier. $\frac{\partial}{\partial y}(\frac{x}{y}) = x \cdot \frac{\partial}{\partial y}(y^{-1}) = x \cdot (-1)y^{-2} = -\frac{x}{y^2}$.
Therefore, $\frac{\partial f}{\partial y} = x^2y e^{x^2y} \sin(y) + e^{x^2y} \cos(y) - \frac{x}{y^2}$.

**Question 3 (Continuity):** Determine if the function $f(x, y) = \begin{cases} \frac{x^2y}{x^4 + y^2} & \text{if } (x, y) \neq (0, 0) \\ 0 & \text{if } (x, y) = (0, 0) \end{cases}$ is continuous at $(0, 0)$. Explain your reasoning.
**Answer:**
We need to check if $\lim_{(x,y) \to (0,0)} f(x, y) = f(0, 0)$. We know $f(0, 0) = 0$.
Let's test paths:
1.  **Along the x-axis ($y=0$):**
    $\lim_{x \to 0} f(x, 0) = \lim_{x \to 0} \frac{x^2 \cdot 0}{x^4 + 0^2} = \lim_{x \to 0} \frac{0}{x^4} = 0$. This matches $f(0,0)$.

2.  **Along the y-axis ($x=0$):**
    $\lim_{y \to 0} f(0, y) = \lim_{y \to 0} \frac{0^2 \cdot y}{0^4 + y^2} = \lim_{y \to 0} \frac{0}{y^2} = 0$. This also matches $f(0,0)$.

3.  **Along the line $y = mx$:**
    $\lim_{x \to 0} f(x, mx) = \lim_{x \to 0} \frac{x^2(mx)}{x^4 + (mx)^2} = \lim_{x \to 0} \frac{mx^3}{x^4 + m^2x^2} = \lim_{x \to 0} \frac{mx^3}{x^2(x^2 + m^2)} = \lim_{x \to 0} \frac{mx}{x^2 + m^2}$.
    As $x \to 0$, the numerator $mx \to 0$, and the denominator $x^2 + m^2 \to m^2$.
    So, $\lim_{x \to 0} \frac{mx}{x^2 + m^2} = \frac{0}{m^2} = 0$, provided $m \neq 0$. This also matches $f(0,0)$.

    What if $m=0$? That's the x-axis, which we already covered.

4.  **Along the parabola $y = x^2$:**
    $\lim_{x \to 0} f(x, x^2) = \lim_{x \to 0} \frac{x^2 \cdot (x^2)}{x^4 + (x^2)^2} = \lim_{x \to 0} \frac{x^4}{x^4 + x^4} = \lim_{x \to 0} \frac{x^4}{2x^4} = \lim_{x \to 0} \frac{1}{2} = \frac{1}{2}$.

Since the limit along the path $y=x^2$ (which is $1/2$) is different from the limit along the x-axis or y-axis (which is $0$), the overall limit $\lim_{(x,y) \to (0,0)} f(x, y)$ does **not** exist.
Therefore, the function $f(x, y)$ is **discontinuous** at $(0, 0)$.

This is a classic example of a function where paths along lines yield the same limit, but a parabolic path reveals the discontinuity. It’s a good one to remember for tests!

---

That's a wrap for our introduction to partial derivatives and continuity! These are building blocks for understanding how multivariable functions behave, which is essential for the optimization problems we'll tackle later. Keep practicing these calculations and conceptual checks, and you'll be well-prepared for what's next.
