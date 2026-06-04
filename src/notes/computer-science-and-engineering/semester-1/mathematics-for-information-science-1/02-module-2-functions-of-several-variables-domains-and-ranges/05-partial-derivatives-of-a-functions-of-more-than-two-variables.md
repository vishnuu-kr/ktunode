---
title: "Partial derivatives of a functions of more than two variables"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 1"
module: "Module 2: Functions of Several Variables: Domains and Ranges"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5bcd"
status: "completed"
scrapedAt: "2026-05-20T16:40:05.754Z"
---
Ah, hello everyone! Welcome back to Mathematics for Information Science – 1. Today, we're diving into a really fascinating and crucial part of our journey with functions: understanding how they behave when they depend on *more than two* variables. We've already touched upon functions of two variables, and now we're expanding our horizons. This is where things start to get really interesting, especially for us in Information Science, where data often comes in many dimensions.

Remember our last session? We explored functions like $f(x, y)$, where the output depends on the choices of two inputs, $x$ and $y$. Think about something like predicting the price of a house, which might depend on its size ($x$) and its location ($y$). But what if we want to be more precise? What if the price also depends on the number of bedrooms ($z$), the age of the house ($a$), and even the local interest rates ($i$)? Suddenly, our function looks more like $f(x, y, z, a, i)$. This is precisely what we'll be dealing with today: **Partial Derivatives of Functions of More Than Two Variables**.

### Module 2: Functions of Several Variables: Domains and Ranges
#### Topic: Partial Derivatives of Functions of More Than Two Variables

This topic directly addresses **Course Outcome 2 (CO2)**: "Calculate the limits for functions of two variables and partial derivatives of multivariable functions." While we're extending this to more than two variables, the fundamental concept of partial differentiation remains the same. It's about isolating the impact of *one* variable on the function's output while holding *all others* constant. This is incredibly useful for understanding sensitivity and marginal changes in complex systems, which is directly relevant to information science applications like modeling, optimization, and data analysis.

**Connecting to Learning Outcomes:**
Our primary goal today is to build a solid understanding of partial derivatives for functions with three or more variables. This skill is foundational for many subsequent topics, including calculating directional derivatives and solving optimization problems (CO3 and CO4). When you need to understand how changing just one specific parameter in a large, complex model affects the outcome, partial derivatives are your go-to tool.

#### The Core Idea: Isolating the Effect of One Variable

Let's start by reiterating what a partial derivative *is*. Imagine you have a function, say $f(x, y, z)$. This means the output of $f$ depends on the values you choose for $x$, $y$, and $z$. Now, what happens if we *only* change $x$, and keep $y$ and $z$ perfectly still? That's where partial differentiation comes in.

The **partial derivative of $f$ with respect to $x$**, denoted as $\frac{\partial f}{\partial x}$ (read as "del f del x" or "partial f with respect to x"), tells us the *rate of change* of the function $f$ as $x$ changes, *assuming that $y$ and $z$ are held constant*.

This is a crucial distinction from regular derivatives (what we call ordinary derivatives). In ordinary derivatives, like $\frac{dy}{dx}$ for a function $y = g(x)$, the function $y$ depends *only* on $x$. There are no other variables to worry about. But with functions of several variables, we have to be very specific about which variable's influence we are measuring.

**Analogy Time:**
Think about a chef preparing a complex dish with multiple ingredients and cooking steps. Let the deliciousness of the dish be $D$. The deliciousness might depend on the amount of salt ($s$), the cooking time ($t$), and the type of spice used ($p$). So, $D = f(s, t, p)$.

Now, the chef wants to know: "If I add just a little more salt, how much will the deliciousness improve, assuming I don't change the cooking time or the spice?" This is precisely what $\frac{\partial D}{\partial s}$ tells us. It's the sensitivity of deliciousness to changes in salt, *keeping time and spice fixed*. Similarly, $\frac{\partial D}{\partial t}$ tells us the impact of changing cooking time while keeping salt and spice constant.

This is so important, it's worth emphasizing. When calculating a partial derivative with respect to a particular variable, you treat *all other variables as constants*. This is the golden rule!

#### Notation and Definitions

Let's formalize this. If we have a function $f(x_1, x_2, x_3, \dots, x_n)$, where $n$ can be any integer greater than or equal to 2, the partial derivative of $f$ with respect to $x_i$ is denoted as:

*   $\frac{\partial f}{\partial x_i}$
*   $f_{x_i}$ (This is a shorthand notation, meaning the partial derivative of $f$ with respect to $x_i$)
*   $f'(x_i)$ (Sometimes used, but $\frac{\partial f}{\partial x_i}$ is more standard for multivariable functions)

Using the definition of a derivative, the partial derivative of $f$ with respect to $x_1$ is defined as:

$$
\frac{\partial f}{\partial x_1}(x_1, x_2, \dots, x_n) = \lim_{h \to 0} \frac{f(x_1 + h, x_2, \dots, x_n) - f(x_1, x_2, \dots, x_n)}{h}
$$

Notice what's happening here: only the first variable, $x_1$, is changing by $h$. All other variables ($x_2, \dots, x_n$) remain exactly the same in both terms of the numerator. This is exactly the "holding others constant" idea we discussed.

The same logic applies for any other variable. For instance, the partial derivative with respect to $x_2$ is:

$$
\frac{\partial f}{\partial x_2}(x_1, x_2, \dots, x_n) = \lim_{k \to 0} \frac{f(x_1, x_2 + k, \dots, x_n) - f(x_1, x_2, \dots, x_n)}{k}
$$
Here, we use $k$ (a different symbol for the increment, though it doesn't strictly matter) to change only $x_2$, keeping $x_1, x_3, \dots, x_n$ constant.

**From Textbooks:**
This concept is beautifully laid out in **Thomas' Calculus** (15th ed.) and **Advanced Engineering Mathematics** by Kreyszig (10th ed.). They both emphasize that when you compute $\frac{\partial f}{\partial x_i}$, you treat $f$ as a function of *only* $x_i$, and all other variables are simply constants during the differentiation process. This is the key takeaway for actually *doing* the calculations.

#### How to Compute Partial Derivatives: The Practical Approach

In practice, we don't always use the limit definition to compute partial derivatives. We use the standard differentiation rules you learned in single-variable calculus, but with the crucial understanding that other variables are treated as constants.

Let's consider a function of three variables: $f(x, y, z)$.

1.  **To find $\frac{\partial f}{\partial x}$:**
    *   Treat $y$ and $z$ as constants.
    *   Differentiate $f$ with respect to $x$ using your usual rules (power rule, product rule, chain rule, etc.).

2.  **To find $\frac{\partial f}{\partial y}$:**
    *   Treat $x$ and $z$ as constants.
    *   Differentiate $f$ with respect to $y$.

3.  **To find $\frac{\partial f}{\partial z}$:**
    *   Treat $x$ and $y$ as constants.
    *   Differentiate $f$ with respect to $z$.

This is a straightforward procedure, but it's the *mindset* of treating variables as constants that's paramount.

**Example 1: A Simple Polynomial Function**

Let's take a function that might model, say, the performance of a system based on CPU usage ($x$), memory allocation ($y$), and network speed ($z$).
Suppose the performance is given by:
$P(x, y, z) = 3x^2y + yz^3 - 5x + 7$

Let's find the partial derivatives:

*   **Find $\frac{\partial P}{\partial x}$:**
    *   Treat $y$ and $z$ as constants.
    *   $P(x, y, z) = (3y)x^2 + (yz^3) - 5x + 7$
    *   When differentiating with respect to $x$:
        *   $3y$ is a constant coefficient for $x^2$. The derivative of $x^2$ is $2x$. So, $(3y)(2x) = 6xy$.
        *   $yz^3$ is a constant term with respect to $x$. Its derivative is 0.
        *   $-5x$. The derivative of $-5x$ with respect to $x$ is $-5$.
        *   $+7$ is a constant. Its derivative is 0.
    *   So, $\frac{\partial P}{\partial x} = 6xy - 5$.

*   **Find $\frac{\partial P}{\partial y}$:**
    *   Treat $x$ and $z$ as constants.
    *   $P(x, y, z) = (3x^2)y + (xz^3) - 5x + 7$
    *   When differentiating with respect to $y$:
        *   $3x^2$ is a constant coefficient for $y$. The derivative of $y$ is 1. So, $(3x^2)(1) = 3x^2$.
        *   $xz^3$ is a constant term with respect to $y$. Its derivative is 0.
        *   $-5x$ is a constant term with respect to $y$. Its derivative is 0.
        *   $+7$ is a constant. Its derivative is 0.
    *   So, $\frac{\partial P}{\partial y} = 3x^2$.

*   **Find $\frac{\partial P}{\partial z}$:**
    *   Treat $x$ and $y$ as constants.
    *   $P(x, y, z) = 3x^2y + yz^3 - 5x + 7$
    *   When differentiating with respect to $z$:
        *   $3x^2y$ is a constant term with respect to $z$. Its derivative is 0.
        *   $yz^3$. $y$ is a constant coefficient for $z^3$. The derivative of $z^3$ is $3z^2$. So, $(y)(3z^2) = 3yz^2$.
        *   $-5x$ is a constant term with respect to $z$. Its derivative is 0.
        *   $+7$ is a constant. Its derivative is 0.
    *   So, $\frac{\partial P}{\partial z} = 3yz^2$.

**Exam Tip:** A common mistake is forgetting which variables to treat as constants. Always write down which variables you are holding constant before you start differentiating. This helps prevent errors.

#### Functions with More Than Three Variables

The process doesn't change no matter how many variables you have. If you have $f(x_1, x_2, x_3, x_4, x_5)$, to find $\frac{\partial f}{\partial x_3}$, you'd simply treat $x_1, x_2, x_4, x_5$ as constants and differentiate with respect to $x_3$.

**Example 2: A Function with Four Variables**

Let's imagine a function representing the profit of a company, $Profit(m, c, e, p)$, where $m$ is manufacturing cost, $c$ is advertising cost, $e$ is employee salaries, and $p$ is selling price.
Suppose $Profit(m, c, e, p) = 1000p - 500m - 200c - 800e - 20000$.

Let's find the partial derivative of profit with respect to the selling price, $p$. This will tell us how much profit changes for each unit increase in selling price.

*   **Find $\frac{\partial Profit}{\partial p}$:**
    *   Treat $m, c, e$ as constants.
    *   $Profit(m, c, e, p) = 1000p - (500m + 200c + 800e + 20000)$
    *   When differentiating with respect to $p$:
        *   $1000p$. The derivative of $1000p$ with respect to $p$ is $1000$.
        *   The term in the parenthesis $(500m + 200c + 800e + 20000)$ is treated entirely as a constant with respect to $p$. Its derivative is 0.
    *   So, $\frac{\partial Profit}{\partial p} = 1000$.
    *   This means that for every unit increase in the selling price, the profit increases by $1000, assuming all other factors remain constant. This is a crucial insight for pricing strategies!

Now, let's find the partial derivative with respect to manufacturing cost, $m$. This will show us how profit changes for each unit increase in manufacturing cost.

*   **Find $\frac{\partial Profit}{\partial m}$:**
    *   Treat $p, c, e$ as constants.
    *   $Profit(m, c, e, p) = -500m + (1000p - 200c - 800e - 20000)$
    *   When differentiating with respect to $m$:
        *   $-500m$. The derivative of $-500m$ with respect to $m$ is $-500$.
        *   The term in the parenthesis $(1000p - 200c - 800e - 20000)$ is treated entirely as a constant with respect to $m$. Its derivative is 0.
    *   So, $\frac{\partial Profit}{\partial m} = -500$.
    *   This tells us that for every unit increase in manufacturing cost, the profit *decreases* by $500. This is the flip side of the coin – understanding cost sensitivity.

**Reference Point:**
In **Multivariable Calculus** by Larson and Edwards (10th ed.), they also present this concept by treating the other variables as constants. They might use examples from physics or economics, where a quantity depends on several physical parameters or economic factors. The core principle remains the same: isolate and differentiate.

#### Second-Order Partial Derivatives and Mixed Partial Derivatives

Just like in single-variable calculus, we can differentiate partially multiple times. This gives us second-order partial derivatives, third-order, and so on.

For $f(x, y, z)$:

*   $\frac{\partial^2 f}{\partial x^2} = \frac{\partial}{\partial x}\left(\frac{\partial f}{\partial x}\right)$ (Differentiate twice with respect to $x$)
*   $\frac{\partial^2 f}{\partial y^2} = \frac{\partial}{\partial y}\left(\frac{\partial f}{\partial y}\right)$ (Differentiate twice with respect to $y$)
*   $\frac{\partial^2 f}{\partial z^2} = \frac{\partial}{\partial z}\left(\frac{\partial f}{\partial z}\right)$ (Differentiate twice with respect to $z$)

And then there are the **mixed partial derivatives**, where you differentiate with respect to different variables in sequence:

*   $\frac{\partial^2 f}{\partial y \partial x} = \frac{\partial}{\partial y}\left(\frac{\partial f}{\partial x}\right)$ (First differentiate with respect to $x$, then differentiate the result with respect to $y$)
*   $\frac{\partial^2 f}{\partial x \partial y} = \frac{\partial}{\partial x}\left(\frac{\partial f}{\partial y}\right)$ (First differentiate with respect to $y$, then differentiate the result with respect to $x$)

And similarly for other combinations like $\frac{\partial^2 f}{\partial z \partial x}$, $\frac{\partial^2 f}{\partial x \partial z}$, $\frac{\partial^2 f}{\partial z \partial y}$, $\frac{\partial^2 f}{\partial y \partial z}$.

**Clairaut's Theorem (or Schwarz's Theorem): A Really Important Result!**
This is a key result that simplifies a lot of work. Clairaut's Theorem states that if the second partial derivatives of a function $f$ are continuous in an open disk containing a point $(a, b, c)$ (or any point in the domain), then the mixed partial derivatives are equal at that point:

$$
\frac{\partial^2 f}{\partial y \partial x} = \frac{\partial^2 f}{\partial x \partial y} \quad \text{(and similar equalities for other pairs of variables)}
$$

This means the order in which you take mixed partial derivatives *doesn't matter*, as long as the derivatives are continuous. This is a huge relief because it means you can choose the order that is easiest to compute!

**Example 3: Computing Mixed Partial Derivatives**

Let's go back to our performance function $P(x, y, z) = 3x^2y + yz^3 - 5x + 7$.
We found:
$\frac{\partial P}{\partial x} = 6xy - 5$
$\frac{\partial P}{\partial y} = 3x^2$

Now, let's compute mixed partial derivatives:

*   **$\frac{\partial^2 P}{\partial y \partial x}$:** We take $\frac{\partial P}{\partial x} = 6xy - 5$ and differentiate it with respect to $y$.
    *   Treat $x$ and the constant $-5$ as constants.
    *   The derivative of $6xy$ with respect to $y$ is $6x$.
    *   The derivative of $-5$ is $0$.
    *   So, $\frac{\partial^2 P}{\partial y \partial x} = 6x$.

*   **$\frac{\partial^2 P}{\partial x \partial y}$:** We take $\frac{\partial P}{\partial y} = 3x^2$ and differentiate it with respect to $x$.
    *   Treat the constant $3$ and $x^2$ as coefficients. Treat $y$ (which is implicitly constant here, as we are differentiating the function $3x^2$ with respect to $x$) as a constant. Wait, this phrasing is tricky. When we take $\frac{\partial P}{\partial y}$, we treat $x$ and $z$ as constants. The resulting function $\frac{\partial P}{\partial y} = 3x^2$ is a function of $x$ only. So, when we differentiate this *with respect to $x$*, we are back to single-variable calculus rules.
    *   The derivative of $3x^2$ with respect to $x$ is $3(2x) = 6x$.
    *   So, $\frac{\partial^2 P}{\partial x \partial y} = 6x$.

See? They are equal: $\frac{\partial^2 P}{\partial y \partial x} = \frac{\partial^2 P}{\partial x \partial y} = 6x$. This is consistent with Clairaut's Theorem because $P(x, y, z)$ is a polynomial, and all its partial derivatives are continuous everywhere.

**Why are these important for Information Science?**
Understanding second-order and mixed partial derivatives is crucial for **Course Outcome 1 (CO1)**: "Apply various concepts in calculus to linearize functions and to analyze concavity." These higher-order derivatives are the building blocks for Taylor expansions of multivariable functions, which we use for local approximation and linearization. They also play a role in understanding the curvature of surfaces, which is related to concavity and is fundamental for optimization. For instance, in machine learning, the Hessian matrix (which contains second-order partial derivatives) is used in algorithms like Newton's method for optimization.

#### Sample Questions and Answers

Let's test your understanding with a few questions.

**Question 1 (Conceptual):**
If a function $f(a, b, c, d)$ represents the efficiency of a data processing algorithm, what does $\frac{\partial f}{\partial c}$ represent?

**Answer 1:**
$\frac{\partial f}{\partial c}$ represents the *rate of change* of the algorithm's efficiency ($f$) with respect to a change in parameter $c$, assuming all other parameters ($a, b, d$) are held constant. It tells you how sensitive the efficiency is to changes in parameter $c$ alone.

**Question 2 (Calculation):**
Find the partial derivatives $\frac{\partial f}{\partial x}$, $\frac{\partial f}{\partial y}$, and $\frac{\partial f}{\partial z}$ for the function:
$f(x, y, z) = x e^{yz} + y \sin(x) - z^2 \cos(y)$

**Answer 2:**

*   **To find $\frac{\partial f}{\partial x}$:** Treat $y$ and $z$ as constants.
    *   Term 1: $x e^{yz}$. Treating $e^{yz}$ as a constant, its derivative with respect to $x$ is $e^{yz}$. So, we have $1 \cdot e^{yz} = e^{yz}$.
    *   Term 2: $y \sin(x)$. Treating $y$ as a constant, the derivative of $\sin(x)$ is $\cos(x)$. So, we have $y \cos(x)$.
    *   Term 3: $-z^2 \cos(y)$. This entire term is a constant with respect to $x$. Its derivative is 0.
    *   Therefore, $\frac{\partial f}{\partial x} = e^{yz} + y \cos(x)$.

*   **To find $\frac{\partial f}{\partial y}$:** Treat $x$ and $z$ as constants.
    *   Term 1: $x e^{yz}$. Treat $x$ as a constant. To differentiate $e^{yz}$ with respect to $y$, we use the chain rule: the derivative of $e^u$ is $e^u \cdot \frac{du}{dy}$. Here $u=yz$, so $\frac{du}{dy} = z$. The derivative of $e^{yz}$ with respect to $y$ is $e^{yz} \cdot z = z e^{yz}$. Thus, the derivative of $x e^{yz}$ is $x (z e^{yz}) = xz e^{yz}$.
    *   Term 2: $y \sin(x)$. Treat $\sin(x)$ as a constant. The derivative of $y$ with respect to $y$ is 1. So, we have $1 \cdot \sin(x) = \sin(x)$.
    *   Term 3: $-z^2 \cos(y)$. Treat $-z^2$ as a constant. The derivative of $\cos(y)$ with respect to $y$ is $-\sin(y)$. So, we have $-z^2 (-\sin(y)) = z^2 \sin(y)$.
    *   Therefore, $\frac{\partial f}{\partial y} = xz e^{yz} + \sin(x) + z^2 \sin(y)$.

*   **To find $\frac{\partial f}{\partial z}$:** Treat $x$ and $y$ as constants.
    *   Term 1: $x e^{yz}$. Treat $x$ as a constant. To differentiate $e^{yz}$ with respect to $z$, we use the chain rule: $\frac{d}{dz}(e^{yz}) = e^{yz} \cdot \frac{d}{dz}(yz) = e^{yz} \cdot y = y e^{yz}$. Thus, the derivative of $x e^{yz}$ is $x (y e^{yz}) = xy e^{yz}$.
    *   Term 2: $y \sin(x)$. This entire term is a constant with respect to $z$. Its derivative is 0.
    *   Term 3: $-z^2 \cos(y)$. Treat $-\cos(y)$ as a constant. The derivative of $z^2$ with respect to $z$ is $2z$. So, we have $(2z) (-\cos(y)) = -2z \cos(y)$.
    *   Therefore, $\frac{\partial f}{\partial z} = xy e^{yz} - 2z \cos(y)$.

**Question 3 (Mixed Derivatives):**
For the function $f(x, y) = x^3 y^2 + \frac{x}{y}$, calculate $\frac{\partial^2 f}{\partial y \partial x}$ and $\frac{\partial^2 f}{\partial x \partial y}$. Do they match?

**Answer 3:**
First, find the first partial derivatives:
*   $\frac{\partial f}{\partial x} = 3x^2 y^2 + \frac{1}{y}$ (Treat $y$ as constant)
*   $\frac{\partial f}{\partial y} = x^3 (2y) + x (-\frac{1}{y^2}) = 2x^3 y - \frac{x}{y^2}$ (Treat $x$ as constant)

Now, for the second partial derivatives:

*   **$\frac{\partial^2 f}{\partial y \partial x}$:** Take $\frac{\partial f}{\partial x} = 3x^2 y^2 + \frac{1}{y}$ and differentiate with respect to $y$.
    *   Treat $x$ as constant.
    *   Derivative of $3x^2 y^2$ with respect to $y$ is $3x^2 (2y) = 6x^2 y$.
    *   Derivative of $\frac{1}{y}$ with respect to $y$ is $-\frac{1}{y^2}$.
    *   So, $\frac{\partial^2 f}{\partial y \partial x} = 6x^2 y - \frac{1}{y^2}$.

*   **$\frac{\partial^2 f}{\partial x \partial y}$:** Take $\frac{\partial f}{\partial y} = 2x^3 y - \frac{x}{y^2}$ and differentiate with respect to $x$.
    *   Treat $y$ as constant.
    *   Derivative of $2x^3 y$ with respect to $x$ is $(2y) (3x^2) = 6x^2 y$.
    *   Derivative of $-\frac{x}{y^2}$ with respect to $x$ is $-\frac{1}{y^2} (1) = -\frac{1}{y^2}$.
    *   So, $\frac{\partial^2 f}{\partial x \partial y} = 6x^2 y - \frac{1}{y^2}$.

Yes, they match! $6x^2 y - \frac{1}{y^2} = 6x^2 y - \frac{1}{y^2}$. This is expected, as this is a polynomial in $x$ and $y$ and its partial derivatives are continuous.

**Key takeaway for exams:** Always double-check which variable you are differentiating with respect to and consistently treat all others as constants. For mixed partial derivatives, if you're confident the function is "nice" (like polynomials, exponentials, sines/cosines in their arguments), you can often assume the mixed derivatives will be equal, which can save you time. However, if asked to prove it, you must compute both.

That brings us to the end of our discussion on partial derivatives for functions of more than two variables. Remember the core principle: isolate one variable, treat others as constants, and apply your familiar differentiation rules. This skill is foundational for so much of what we'll cover next, including optimization and understanding complex system behaviors. Keep practicing, and don't hesitate to ask questions!
