---
title: "Chain Rule"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 1"
module: "Module 1: Limits of Function Values"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5bc3"
status: "completed"
scrapedAt: "2026-05-20T16:39:51.829Z"
---
# Mathematics for Information Science – 1: Module 1 - Limits of Function Values

## Topic: The Chain Rule – Unraveling Composite Functions

Welcome, everyone! Today, we're diving into a really fundamental and incredibly useful tool in calculus: **The Chain Rule**. We've been exploring the behavior of functions, and often, the functions we encounter in information science aren't simple, direct relationships. They are frequently *composed* of other functions, like Russian nesting dolls. The Chain Rule is our key to understanding how changing one part of this nested structure affects the overall outcome. It's a cornerstone for many applications, and you'll see its power as we connect it to our course outcomes.

### Why Do We Need the Chain Rule? The "Function of a Function" Problem

Think about it: in many real-world scenarios, especially in information science, a variable you're interested in depends on another variable, which in turn depends on a third.

**Analogy Time:** Imagine you're tracking the popularity of a new AI algorithm.
*   The popularity (let's call it $P$) depends on how many users are actively using it ($U$). So, $P = f(U)$.
*   But the number of users ($U$) itself depends on the day of the week ($t$) and perhaps some promotional activities. For simplicity, let's say $U$ depends on the day of the week, so $U = g(t)$.

Now, if you want to know how the popularity ($P$) is changing *with respect to the day of the week* ($t$), you can't just directly differentiate $P$ with respect to $t$ if you only know $P$ in terms of $U$ and $U$ in terms of $t$. You need a way to connect these rates of change. This is exactly what the Chain Rule helps us do. We want to find $\frac{dP}{dt}$, given $\frac{dP}{dU}$ and $\frac{dU}{dt}$.

This concept of a "function of a function" is what we call a **composite function**. If $y = f(u)$ and $u = g(x)$, then $y$ is a composite function of $x$, often written as $y = f(g(x))$. The Chain Rule tells us how to find the derivative of this composite function.

### The Chain Rule: The Core Idea

The Chain Rule states that if $y$ is a differentiable function of $u$, and $u$ is a differentiable function of $x$, then the composite function $y = f(g(x))$ is differentiable with respect to $x$, and its derivative is given by:

$$ \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} $$

This is a beautiful and powerful formula. It essentially says that the rate of change of $y$ with respect to $x$ is the product of the rate of change of $y$ with respect to $u$, and the rate of change of $u$ with respect to $x$. You're "chaining" the derivatives together.

**Think of it this way:** If $y$ changes by $\frac{dy}{du}$ for every unit change in $u$, and $u$ changes by $\frac{du}{dx}$ for every unit change in $x$, then for a unit change in $x$, $y$ changes by the product of these two rates.

**Reference Check:** This is a fundamental theorem in differential calculus, thoroughly covered in standard texts like *Thomas' Calculus* (Chapter 3, Section 3.4) and *Kreyszig's Advanced Engineering Mathematics* (Chapter 1).

### Formal Definition and Notation

Let $y = f(u)$ and $u = g(x)$. If $g$ is differentiable at $x$ and $f$ is differentiable at $u = g(x)$, then the composite function $f \circ g$ is differentiable at $x$, and:

$$ (f \circ g)'(x) = f'(g(x)) \cdot g'(x) $$

This is the same formula, just written using function notation and prime notation for derivatives. Here, $f'(g(x))$ means we find the derivative of $f$ with respect to its input (which is $u$), and then we evaluate that derivative at the specific value $u = g(x)$.

### Example 1: A Simple Composition

Let's try our first example. Suppose we have:

$y = u^2$
$u = x + 1$

We want to find $\frac{dy}{dx}$.

1.  **Find $\frac{dy}{du}$**:
    The derivative of $y = u^2$ with respect to $u$ is $\frac{dy}{du} = 2u$.

2.  **Find $\frac{du}{dx}$**:
    The derivative of $u = x + 1$ with respect to $x$ is $\frac{du}{dx} = 1$.

3.  **Apply the Chain Rule**:
    $$ \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} = (2u) \cdot (1) = 2u $$

4.  **Substitute back**:
    The result is currently in terms of $u$. Since we want the derivative with respect to $x$, we need to substitute $u = x + 1$ back into our result:
    $$ \frac{dy}{dx} = 2(x + 1) $$

**Verification:** We can also solve this by first substituting $u$ into $y$:
$y = (x + 1)^2$
$y = x^2 + 2x + 1$
Now, differentiate directly with respect to $x$:
$\frac{dy}{dx} = 2x + 2$
This matches our result from the Chain Rule! See? It works!

### Example 2: A More Realistic Scenario (Relating to Course Outcomes)

Let's consider something that might connect to our course outcomes, particularly how functions change. Suppose the profit $P$ from selling a certain number of software licenses depends on the number of licenses sold, $N$. Let's say the profit function is $P(N) = 100N - 0.01N^2$ (in thousands of dollars).

Now, the number of licenses sold, $N$, might depend on the price per license, $x$. Let's assume a demand function where the number of licenses sold decreases as the price increases, say $N(x) = 5000 - 100x$.

We want to understand how the **profit $P$ changes with respect to the price $x$**. This is a classic application of the Chain Rule and is relevant to **Course Outcome CO3: Interpret directional derivative and solve maxima and minima of multivariable functions** because understanding how one variable affects profit through another variable is foundational for optimization.

Here, our "outer" function is the profit $P$ in terms of the number of licenses $N$, so $P = f(N) = 100N - 0.01N^2$.
Our "inner" function is the number of licenses $N$ in terms of the price $x$, so $N = g(x) = 5000 - 100x$.

We want to find $\frac{dP}{dx}$.

1.  **Find $\frac{dP}{dN}$**:
    The derivative of $P(N)$ with respect to $N$ is:
    $$ \frac{dP}{dN} = \frac{d}{dN}(100N - 0.01N^2) = 100 - 0.02N $$
    This tells us how profit changes as the number of licenses changes.

2.  **Find $\frac{dN}{dx}$**:
    The derivative of $N(x)$ with respect to $x$ is:
    $$ \frac{dN}{dx} = \frac{d}{dx}(5000 - 100x) = -100 $$
    This tells us how the number of licenses sold changes as the price changes. As expected, it's negative, meaning more licenses are sold at lower prices.

3.  **Apply the Chain Rule**:
    $$ \frac{dP}{dx} = \frac{dP}{dN} \cdot \frac{dN}{dx} = (100 - 0.02N) \cdot (-100) $$

4.  **Substitute back for $N$**:
    We need the final answer in terms of $x$. Substitute $N = 5000 - 100x$:
    $$ \frac{dP}{dx} = (100 - 0.02(5000 - 100x)) \cdot (-100) $$
    $$ \frac{dP}{dx} = (100 - 100 + 2x) \cdot (-100) $$
    $$ \frac{dP}{dx} = (2x) \cdot (-100) $$
    $$ \frac{dP}{dx} = -200x $$

**Interpretation:** This result, $\frac{dP}{dx} = -200x$, tells us how the profit changes with respect to the price. For example, if the price $x$ is $20, then $\frac{dP}{dx} = -200(20) = -4000$. This means that at a price of $20 per license, increasing the price by a small amount (say, $1) would decrease the total profit by approximately $4000 thousand dollars, or $4 million dollars. This is a crucial insight for pricing strategies!

**Connection to CO3:** To find the optimal price (where profit is maximized), we would set $\frac{dP}{dx} = 0$. In this simplified model, $-200x = 0$, which gives $x=0$. This might seem counterintuitive, but remember our demand function $N(x) = 5000 - 100x$ is linear and might not be realistic for all price ranges. In a real-world optimization problem, you might have a more complex relationship, and the Chain Rule would still be essential for finding these derivatives.

### The Chain Rule for More Than Two Functions (The Extended Chain Rule)

What if we have a "chain" of three or more functions? For example, $y$ depends on $u$, $u$ depends on $v$, and $v$ depends on $x$. That is, $y = f(u)$, $u = g(v)$, and $v = h(x)$. Then, the composite function is $y = f(g(h(x)))$.

The Chain Rule extends naturally:

$$ \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dv} \cdot \frac{dv}{dx} $$

**Analogy:** Think of a series of gears. The speed of the last gear depends on the speed of the intermediate gear, which depends on the speed of the first gear. Each gear's "rate of change" (speed) is multiplied.

**Example 3: A Three-Layered Function**

Let:
$y = \sin(u)$
$u = v^3$
$v = x^2 + 1$

We want to find $\frac{dy}{dx}$.

1.  **Find $\frac{dy}{du}$**:
    $\frac{dy}{du} = \frac{d}{du}(\sin(u)) = \cos(u)$

2.  **Find $\frac{du}{dv}$**:
    $\frac{du}{dv} = \frac{d}{dv}(v^3) = 3v^2$

3.  **Find $\frac{dv}{dx}$**:
    $\frac{dv}{dx} = \frac{d}{dx}(x^2 + 1) = 2x$

4.  **Apply the Extended Chain Rule**:
    $$ \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dv} \cdot \frac{dv}{dx} = (\cos(u)) \cdot (3v^2) \cdot (2x) $$

5.  **Substitute back, step-by-step**:
    First, substitute $v$ in terms of $x$:
    $$ \frac{dy}{dx} = (\cos(u)) \cdot (3(x^2 + 1)^2) \cdot (2x) $$
    Now, substitute $u$ in terms of $v$, and then $v$ in terms of $x$. Since $u = v^3$ and $v = x^2 + 1$, we have $u = (x^2 + 1)^3$.
    $$ \frac{dy}{dx} = (\cos((x^2 + 1)^3)) \cdot (3(x^2 + 1)^2) \cdot (2x) $$
    Let's simplify and rearrange:
    $$ \frac{dy}{dx} = 6x (x^2 + 1)^2 \cos((x^2 + 1)^3) $$

**Common Pitfall:** The most common mistake here is forgetting to substitute back all the intermediate variables to get the final answer in terms of the original independent variable ($x$ in this case).

### Connecting to Course Outcomes: Deeper Dive

Let's explicitly link the Chain Rule to our Course Outcomes.

*   **CO1: Apply various concepts in calculus to linearize functions and to analyze concavity.**
    The Chain Rule is fundamental for linearization. When we linearize a function $f(x)$ around a point $a$, we use the tangent line: $L(x) = f(a) + f'(a)(x-a)$. If $f(x)$ is itself a composite function, $f(g(x))$, then to find $f'(a)$, we *must* use the Chain Rule. Understanding how rates of change propagate through composite functions (via the Chain Rule) is key to understanding local behavior, which is what linearization captures. For concavity, we often need second derivatives. Differentiating a function involving the Chain Rule again often requires the product rule and the Chain Rule itself, showing its pervasive nature.

*   **CO2: Calculate the limits for functions of two variables and partial derivatives of multivariable functions.**
    While this module focuses on single-variable calculus, the Chain Rule is a direct precursor to the *multivariable Chain Rule*. In information science, you'll often deal with systems where many variables influence an outcome. For instance, the performance of a machine learning model might depend on several hyperparameters (learning rate, regularization strength, etc.). If you want to see how performance changes with respect to one hyperparameter, but that hyperparameter's value is itself dependent on another factor (e.g., available computational power), the multivariable Chain Rule becomes essential. The single-variable Chain Rule is the building block for understanding these more complex relationships.

*   **CO3: Interpret directional derivative and solve maxima and minima of multivariable functions.**
    This is where the Chain Rule really shines. To find where a function is at a maximum or minimum (in single variable calculus), we set its derivative to zero. For multivariable functions, we find where the gradient is zero. But often, we're interested in how a function's value changes *along a specific path* or *in a specific direction*. The directional derivative is precisely this. The calculation of directional derivatives often involves applying the Chain Rule. For example, if you have a function $f(x, y)$ and you move along a curve $x=x(t), y=y(t)$, then to find how $f$ changes with $t$, you'd use the Chain Rule: $\frac{df}{dt} = \frac{\partial f}{\partial x} \frac{dx}{dt} + \frac{\partial f}{\partial y} \frac{dy}{dt}$. This is the multivariable Chain Rule in action.

*   **CO4: Solve constrained maxima and minima, LPP and understand the method of Steepest Descent.**
    Constrained optimization problems, like Lagrange multipliers, involve finding maxima/minima of a function subject to certain conditions. The machinery developed for these often relies on derivatives, and the Chain Rule plays a role in manipulating the equations involved. For Steepest Descent, which is an iterative method for finding minima, each step involves calculating a direction and a step size. Understanding how the function value changes in that direction (which again relates to derivatives and the Chain Rule) is crucial for determining an appropriate step size.

### Summary and Key Takeaways

*   The Chain Rule is your essential tool for differentiating **composite functions** – functions within functions.
*   The fundamental rule is: If $y = f(u)$ and $u = g(x)$, then $\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$.
*   Remember to substitute back the inner function ($u$) in terms of the outer variable ($x$) in your final answer.
*   This rule extends to chains of more than two functions: $\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dv} \cdot \frac{dv}{dx}$ and so on.
*   The Chain Rule is a foundational concept that underpins more advanced topics in calculus, especially those related to rates of change, optimization, and multivariable analysis, all of which are critical in Information Science.

**Crucial Reminder:** Don't get lost in the intermediate variables! Always ensure your final derivative is expressed in terms of the original independent variable.

---

### Sample Questions with Answers

**Question 1 (Conceptual):**
Explain in your own words why the Chain Rule works. Use an analogy if it helps.

**Answer:**
The Chain Rule works because it breaks down the problem of finding the rate of change of a composite function into a sequence of simpler rate-of-change calculations. Imagine you're trying to figure out how fast a train is moving relative to the ground ($v_{ground}$), but you know its speed relative to the air ($v_{air}$) and the air's speed relative to the ground ($v_{air/ground}$). The train's speed relative to the ground is approximately the sum (or in calculus, the product of derivatives) of its speed relative to the air and the air's speed relative to the ground. The Chain Rule applies this principle to functions: the rate of change of the outer function (with respect to its input) is multiplied by the rate of change of the inner function (with respect to the final variable). It's like multiplying the "magnification" of each step in a sequence.

**Question 2 (Application):**
Find the derivative of $y = \sqrt{3x^2 + 5}$ with respect to $x$.

**Answer:**
Let $y = u^{1/2}$ and $u = 3x^2 + 5$.
1.  Find $\frac{dy}{du}$: $\frac{dy}{du} = \frac{1}{2}u^{-1/2} = \frac{1}{2\sqrt{u}}$
2.  Find $\frac{du}{dx}$: $\frac{du}{dx} = 6x$
3.  Apply the Chain Rule: $\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} = \left(\frac{1}{2\sqrt{u}}\right) \cdot (6x)$
4.  Substitute back $u = 3x^2 + 5$:
    $\frac{dy}{dx} = \frac{1}{2\sqrt{3x^2 + 5}} \cdot 6x = \frac{6x}{2\sqrt{3x^2 + 5}} = \frac{3x}{\sqrt{3x^2 + 5}}$

**Question 3 (Exam-Oriented - Common Pitfall):**
Given $f(x) = \sin(x^3)$. A common mistake is to write the derivative as $3x^2 \sin(x)$. What is the correct derivative of $f(x)$?

**Answer:**
Let $f(x) = \sin(u)$ and $u = x^3$.
1.  Find $f'(u)$: $f'(u) = \cos(u)$.
2.  Find $u'(x)$: $u'(x) = 3x^2$.
3.  Apply the Chain Rule: $f'(x) = f'(u) \cdot u'(x) = \cos(u) \cdot 3x^2$.
4.  Substitute back $u = x^3$: $f'(x) = \cos(x^3) \cdot 3x^2$.
    The correct derivative is $3x^2 \cos(x^3)$. The common mistake is evaluating the derivative of the outer function $\sin(x)$ as $\cos(x)$ instead of $\cos(u)$ and not substituting $x^3$ back into the cosine.

**Question 4 (Relating to CO3):**
Suppose the temperature $T$ at a point $(x, y)$ on a metal plate is given by $T(x, y) = x^2 y + y^2$. A particle moves along a path such that its position at time $t$ is given by $x(t) = t$ and $y(t) = t^2$. Find the rate of change of temperature with respect to time as the particle moves along this path.

**Answer:**
We want to find $\frac{dT}{dt}$. We have $T$ as a function of $x$ and $y$, and $x, y$ are functions of $t$. This is a direct application of the multivariable Chain Rule (which is an extension of what we learned today).
Using the Chain Rule: $\frac{dT}{dt} = \frac{\partial T}{\partial x} \frac{dx}{dt} + \frac{\partial T}{\partial y} \frac{dy}{dt}$.

1.  Calculate partial derivatives of $T$:
    $\frac{\partial T}{\partial x} = \frac{\partial}{\partial x}(x^2 y + y^2) = 2xy$
    $\frac{\partial T}{\partial y} = \frac{\partial}{\partial y}(x^2 y + y^2) = x^2 + 2y$

2.  Calculate derivatives of $x$ and $y$ with respect to $t$:
    $\frac{dx}{dt} = \frac{d}{dt}(t) = 1$
    $\frac{dy}{dt} = \frac{d}{dt}(t^2) = 2t$

3.  Substitute into the Chain Rule formula:
    $\frac{dT}{dt} = (2xy)(1) + (x^2 + 2y)(2t)$

4.  Substitute $x=t$ and $y=t^2$ into the expression:
    $\frac{dT}{dt} = (2(t)(t^2))(1) + ((t)^2 + 2(t^2))(2t)$
    $\frac{dT}{dt} = 2t^3 + (t^2 + 2t^2)(2t)$
    $\frac{dT}{dt} = 2t^3 + (3t^2)(2t)$
    $\frac{dT}{dt} = 2t^3 + 6t^3$
    $\frac{dT}{dt} = 8t^3$

This means the temperature experienced by the particle is increasing at a rate of $8t^3$ units of temperature per unit of time. This problem demonstrates how the Chain Rule extends to multiple variables, a common scenario in information science where system outputs depend on multiple inputs that might themselves vary.
