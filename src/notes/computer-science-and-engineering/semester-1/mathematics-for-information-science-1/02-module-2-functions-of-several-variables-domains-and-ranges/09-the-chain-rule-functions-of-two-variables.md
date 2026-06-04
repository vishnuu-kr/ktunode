---
title: "The Chain Rule: Functions of two variables"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 1"
module: "Module 2: Functions of Several Variables: Domains and Ranges"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5bd1"
status: "completed"
scrapedAt: "2026-05-20T16:40:12.848Z"
---
Okay, class! Welcome back to Mathematics for Information Science – 1. Today, we're diving into a really powerful tool in calculus that helps us understand how rates of change cascade through interconnected systems. We're talking about **The Chain Rule for Functions of Two Variables**.

You might remember the chain rule from single-variable calculus, where if you had a function of a function, say $y = f(u)$ and $u = g(x)$, then the rate of change of $y$ with respect to $x$ was given by $\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$. It was all about composing functions and understanding how a change in the innermost variable affects the outermost one, step by step.

Now, in information science, our problems often involve more than just one independent variable. Think about a complex system where a performance metric (like system efficiency) depends on several factors, and those factors themselves might be influenced by other changing inputs. This is where functions of two variables and their rates of change become crucial. Our topic today, the Chain Rule for Functions of Two Variables, directly addresses this by allowing us to calculate how a dependent variable changes when *multiple* independent variables are changing, and those independent variables are themselves dependent on *other* underlying variables. This is fundamental for tasks like analyzing how changes in data input (our underlying variables) affect system parameters, which in turn affect the overall performance metric. This directly ties into **CO2: Calculate ... partial derivatives of multivariable functions** and even lays the groundwork for **CO3: Interpret directional derivative and solve maxima and minima of multivariable functions**, as we'll see how rates of change are central to optimization.

Let's get started!

### Understanding the Scenario: When Variables Depend on Others

Imagine you're analyzing the profit, $P$, of a company. This profit might depend on the quantity of two products sold, say $x$ and $y$. So, we have $P(x, y)$. This is our first function.

Now, the quantities $x$ and $y$ that are sold don't just appear out of thin air. They likely depend on certain controllable factors, like advertising spending on product A, let's call it $t$, and advertising spending on product B, also $t$. Wait, that's not quite right. Let's say $x$ depends on advertising spending on product A, $u$, and $y$ depends on advertising spending on product B, $v$. So, $x = x(u)$ and $y = y(v)$.

But what if both $u$ and $v$ are influenced by a single overarching factor, say, the overall marketing budget, which we'll call $t$? So, we have $u = u(t)$ and $v = v(t)$.

Now, we have a situation where the profit $P$ depends on $x$ and $y$, which in turn depend on $u$ and $v$, which finally depend on $t$.
$P \rightarrow (x, y) \rightarrow (u, v) \rightarrow t$

The question we want to answer is: **How does the profit $P$ change with respect to the marketing budget $t$?** In other words, we want to find $\frac{dP}{dt}$.

This is precisely where the Chain Rule comes in handy. We can't just plug $x(u(t))$ and $y(v(t))$ directly into $P(x, y)$ and then differentiate with respect to $t$ if the expressions become too complicated. The Chain Rule gives us a systematic way to find this rate of change.

### The Chain Rule: The Core Idea

Let's formalize this. We have a function $z = f(x, y)$, where $x$ and $y$ are themselves functions of a single variable $t$. So, $x = g(t)$ and $y = h(t)$.
This means $z$ is ultimately a function of $t$, which we can write as $z(t) = f(g(t), h(t))$.

The Chain Rule tells us how to find the derivative of $z$ with respect to $t$, which is $\frac{dz}{dt}$. It states:

$\frac{dz}{dt} = \frac{\partial z}{\partial x} \frac{dx}{dt} + \frac{\partial z}{\partial y} \frac{dy}{dt}$

Let's break this down.

*   $\frac{\partial z}{\partial x}$: This is the **partial derivative of $z$ with respect to $x$**. It tells us how $z$ changes when only $x$ changes, keeping $y$ constant. In our profit example, this would be how profit changes with respect to the quantity of product A sold, keeping the quantity of product B sold fixed.
*   $\frac{dx}{dt}$: This is the **ordinary derivative of $x$ with respect to $t$**. It tells us how the quantity of product A sold changes as the advertising spending on product A ($u$) changes. (Correction: $x$ depends on $u$, and $u$ depends on $t$. So it's $\frac{dx}{du}\frac{du}{dt}$. Let's refine our example setup for clarity first).

**Let's adjust our example slightly to match the formal statement more directly:**

Suppose the profit $P$ of a company depends on the price of raw material A, $x$, and the price of raw material B, $y$. So, $P(x, y)$.
Now, the prices $x$ and $y$ are not constant; they fluctuate based on market demand, which is influenced by a single economic indicator, say, the interest rate, $t$.
So, we have $x = x(t)$ and $y = y(t)$.

We want to know: **How does the profit $P$ change with respect to the interest rate $t$?**

Here, $P$ is a function of $x$ and $y$, and both $x$ and $y$ are functions of $t$.
The Chain Rule states:
$\frac{dP}{dt} = \frac{\partial P}{\partial x} \frac{dx}{dt} + \frac{\partial P}{\partial y} \frac{dy}{dt}$

*   $\frac{\partial P}{\partial x}$: How does profit change when raw material A's price changes (keeping B's price constant)?
*   $\frac{dx}{dt}$: How does the price of raw material A change when the interest rate changes?
*   $\frac{\partial P}{\partial y}$: How does profit change when raw material B's price changes (keeping A's price constant)?
*   $\frac{dy}{dt}$: How does the price of raw material B change when the interest rate changes?

The Chain Rule tells us that the total change in profit with respect to the interest rate is the sum of two effects:
1.  The effect of the interest rate changing the price of raw material A, which in turn affects profit.
2.  The effect of the interest rate changing the price of raw material B, which in turn affects profit.

This makes intuitive sense, doesn't it? It's like tracing the impact through a chain of dependencies. This is a core concept that helps us analyze system behavior when multiple factors interact, very relevant for **CO1: Apply various concepts in calculus to linearize functions and to analyze concavity**, as understanding rates of change is the first step in linearization.

### Visualizing the Chain Rule: A Tree Diagram

Sometimes, a visual aid can be incredibly helpful, especially when dealing with multiple variables. We can represent the dependencies using a "tree diagram" (also called a dependency graph).

For our $P(x, y)$, $x(t)$, $y(t)$ scenario:

```
      P
     / \
    x   y
    |   |
    t   t
```

*   The top node is $P$, our ultimate dependent variable.
*   The next level down shows the variables $P$ directly depends on: $x$ and $y$.
*   The bottom level shows the variable $t$ that all other variables ultimately depend on.

To find $\frac{dP}{dt}$, we follow all paths from $P$ down to $t$:

*   **Path 1:** $P \rightarrow x \rightarrow t$. The rate of change along this path is $\frac{\partial P}{\partial x} \cdot \frac{dx}{dt}$. We use $\frac{\partial P}{\partial x}$ because $P$ depends on $x$ and $y$, and we're initially looking at the change with respect to $x$ while treating $y$ as constant. We use $\frac{dx}{dt}$ because $x$ directly depends on $t$.
*   **Path 2:** $P \rightarrow y \rightarrow t$. The rate of change along this path is $\frac{\partial P}{\partial y} \cdot \frac{dy}{dt}$. Similarly, we use $\frac{\partial P}{\partial y}$ and $\frac{dy}{dt}$.

The Chain Rule says we sum these path contributions:
$\frac{dP}{dt} = (\text{Rate along Path 1}) + (\text{Rate along Path 2})$
$\frac{dP}{dt} = \frac{\partial P}{\partial x} \frac{dx}{dt} + \frac{\partial P}{\partial y} \frac{dy}{dt}$

This diagrammatic approach is often taught in many texts, including "Thomas' Calculus" and "Advanced Engineering Mathematics," and it's a fantastic way to keep track of complex dependencies. It's particularly useful when we extend this to more than two variables or more than one independent variable for the intermediate functions.

### Example 1: A Simple Calculation

Let's try a concrete example.
Suppose $z = x^2y + y^3$, where $x = \sin(t)$ and $y = \cos(t)$.
We want to find $\frac{dz}{dt}$.

Here, $z$ is a function of $x$ and $y$, and $x$ and $y$ are functions of $t$.

**Step 1: Identify the partial derivatives of $z$ with respect to $x$ and $y$.**
$z = x^2y + y^3$
Treat $y$ as a constant when differentiating with respect to $x$:
$\frac{\partial z}{\partial x} = \frac{\partial}{\partial x}(x^2y) + \frac{\partial}{\partial x}(y^3) = 2xy + 0 = 2xy$

Treat $x$ as a constant when differentiating with respect to $y$:
$\frac{\partial z}{\partial y} = \frac{\partial}{\partial y}(x^2y) + \frac{\partial}{\partial y}(y^3) = x^2(1) + 3y^2 = x^2 + 3y^2$

**Step 2: Identify the ordinary derivatives of $x$ and $y$ with respect to $t$.**
$x = \sin(t)$
$\frac{dx}{dt} = \frac{d}{dt}(\sin(t)) = \cos(t)$

$y = \cos(t)$
$\frac{dy}{dt} = \frac{d}{dt}(\cos(t)) = -\sin(t)$

**Step 3: Apply the Chain Rule formula.**
$\frac{dz}{dt} = \frac{\partial z}{\partial x} \frac{dx}{dt} + \frac{\partial z}{\partial y} \frac{dy}{dt}$
$\frac{dz}{dt} = (2xy)(\cos(t)) + (x^2 + 3y^2)(-\sin(t))$

**Step 4: Substitute $x$ and $y$ in terms of $t$ to get the final answer.**
This is a crucial step. The question usually implies finding the derivative as a function of the ultimate independent variable, $t$.
Substitute $x = \sin(t)$ and $y = \cos(t)$ into the expression:
$\frac{dz}{dt} = 2(\sin(t))(\cos(t))(\cos(t)) + ((\sin(t))^2 + 3(\cos(t))^2)(-\sin(t))$
$\frac{dz}{dt} = 2\sin(t)\cos^2(t) - \sin^3(t) - 3\sin(t)\cos^2(t)$

Now, let's simplify this expression:
$\frac{dz}{dt} = -\sin(t)\cos^2(t) - \sin^3(t)$

We can factor out $-\sin(t)$:
$\frac{dz}{dt} = -\sin(t)(\cos^2(t) + \sin^2(t))$

And since $\cos^2(t) + \sin^2(t) = 1$:
$\frac{dz}{dt} = -\sin(t)(1) = -\sin(t)$

**Alternative Check:** We could have first substituted $x$ and $y$ into $z$ to get $z$ as a function of $t$ directly, and then differentiated.
$z = (\sin(t))^2(\cos(t)) + (\cos(t))^3$
$z = \sin^2(t)\cos(t) + \cos^3(t)$

Now, differentiate with respect to $t$:
$\frac{dz}{dt} = \frac{d}{dt}(\sin^2(t)\cos(t)) + \frac{d}{dt}(\cos^3(t))$

For the first term, use the product rule: $(uv)' = u'v + uv'$.
Let $u = \sin^2(t)$ and $v = \cos(t)$.
$u' = \frac{d}{dt}(\sin^2(t)) = 2\sin(t)\cos(t)$ (using the chain rule again for $\sin^2(t)$)
$v' = -\sin(t)$

So, $\frac{d}{dt}(\sin^2(t)\cos(t)) = (2\sin(t)\cos(t))(\cos(t)) + (\sin^2(t))(-\sin(t))$
$= 2\sin(t)\cos^2(t) - \sin^3(t)$

For the second term, $\frac{d}{dt}(\cos^3(t))$:
Let $w = \cos(t)$, so we have $w^3$. Derivative is $3w^2 \frac{dw}{dt}$.
$\frac{d}{dt}(\cos^3(t)) = 3\cos^2(t)(-\sin(t)) = -3\cos^2(t)\sin(t)$

Combining these:
$\frac{dz}{dt} = (2\sin(t)\cos^2(t) - \sin^3(t)) + (-3\cos^2(t)\sin(t))$
$\frac{dz}{dt} = 2\sin(t)\cos^2(t) - \sin^3(t) - 3\sin(t)\cos^2(t)$
$\frac{dz}{dt} = -\sin(t)\cos^2(t) - \sin^3(t)$
$\frac{dz}{dt} = -\sin(t)(\cos^2(t) + \sin^2(t))$
$\frac{dz}{dt} = -\sin(t)$

The results match! This confirms our application of the Chain Rule.

**Key Takeaway for Exams:** Notice how the Chain Rule formula $(\frac{\partial z}{\partial x} \frac{dx}{dt} + \frac{\partial z}{\partial y} \frac{dy}{dt})$ directly breaks down the complex differentiation into simpler, manageable parts: partial derivatives and ordinary derivatives. This is often less error-prone than direct substitution, especially for more complex functions. It also directly relates to **CO2** as it involves calculating partial derivatives.

### Scenario 2: Functions of Two Variables Depending on Two Independent Variables

What if our intermediate variables $x$ and $y$ depend on *two* underlying variables, say $s$ and $t$?

Let $z = f(x, y)$, where $x = g(s, t)$ and $y = h(s, t)$.
Now, $z$ is a function of both $s$ and $t$. So, we need to find $\frac{\partial z}{\partial s}$ and $\frac{\partial z}{\partial t}$.

The Chain Rule extends naturally.

**To find $\frac{\partial z}{\partial s}$:**
We look at how $z$ changes due to changes in $x$ and $y$, and then how $x$ and $y$ change due to changes in $s$.
$\frac{\partial z}{\partial s} = \frac{\partial z}{\partial x} \frac{\partial x}{\partial s} + \frac{\partial z}{\partial y} \frac{\partial y}{\partial s}$

*   $\frac{\partial z}{\partial x}$: How $z$ changes with $x$ (keeping $y$ constant).
*   $\frac{\partial x}{\partial s}$: How $x$ changes with $s$ (keeping $t$ constant).
*   $\frac{\partial z}{\partial y}$: How $z$ changes with $y$ (keeping $x$ constant).
*   $\frac{\partial y}{\partial s}$: How $y$ changes with $s$ (keeping $t$ constant).

Again, visualize the tree diagram:

```
      z
     / \
    x   y
   / \ / \
  s   t s   t
```

To find $\frac{\partial z}{\partial s}$, trace paths from $z$ down to $s$:

*   **Path 1:** $z \rightarrow x \rightarrow s$. Rate: $\frac{\partial z}{\partial x} \cdot \frac{\partial x}{\partial s}$
*   **Path 2:** $z \rightarrow y \rightarrow s$. Rate: $\frac{\partial z}{\partial y} \cdot \frac{\partial y}{\partial s}$

Summing them gives: $\frac{\partial z}{\partial s} = \frac{\partial z}{\partial x} \frac{\partial x}{\partial s} + \frac{\partial z}{\partial y} \frac{\partial y}{\partial s}$.

**Similarly, to find $\frac{\partial z}{\partial t}$:**
We trace paths from $z$ down to $t$:

*   **Path 1:** $z \rightarrow x \rightarrow t$. Rate: $\frac{\partial z}{\partial x} \cdot \frac{\partial x}{\partial t}$
*   **Path 2:** $z \rightarrow y \rightarrow t$. Rate: $\frac{\partial z}{\partial y} \cdot \frac{\partial y}{\partial t}$

Summing them gives: $\frac{\partial z}{\partial t} = \frac{\partial z}{\partial x} \frac{\partial x}{\partial t} + \frac{\partial z}{\partial y} \frac{\partial y}{\partial t}$.

This is the general form of the Chain Rule for a function $z = f(x, y)$ where $x$ and $y$ are functions of $s$ and $t$. It's a direct application of partial derivatives, linking back to **CO2**.

### Example 2: More Complex Dependencies

Let $z = e^{x+y}$, where $x = s^2t$ and $y = st^2$.
We need to find $\frac{\partial z}{\partial s}$ and $\frac{\partial z}{\partial t}$.

**First, find the partial derivatives of $z$:**
$z = e^{x+y}$
$\frac{\partial z}{\partial x} = e^{x+y} \cdot \frac{\partial}{\partial x}(x+y) = e^{x+y} \cdot 1 = e^{x+y}$
$\frac{\partial z}{\partial y} = e^{x+y} \cdot \frac{\partial}{\partial y}(x+y) = e^{x+y} \cdot 1 = e^{x+y}$

**Next, find the partial derivatives of $x$ and $y$ with respect to $s$ and $t$.**
$x = s^2t$
$\frac{\partial x}{\partial s} = \frac{\partial}{\partial s}(s^2t) = 2st$ (treat $t$ as constant)
$\frac{\partial x}{\partial t} = \frac{\partial}{\partial t}(s^2t) = s^2$ (treat $s$ as constant)

$y = st^2$
$\frac{\partial y}{\partial s} = \frac{\partial}{\partial s}(st^2) = t^2$ (treat $t$ as constant)
$\frac{\partial y}{\partial t} = \frac{\partial}{\partial t}(st^2) = s(2t) = 2st$ (treat $s$ as constant)

**Now, apply the Chain Rule for $\frac{\partial z}{\partial s}$:**
$\frac{\partial z}{\partial s} = \frac{\partial z}{\partial x} \frac{\partial x}{\partial s} + \frac{\partial z}{\partial y} \frac{\partial y}{\partial s}$
$\frac{\partial z}{\partial s} = (e^{x+y})(2st) + (e^{x+y})(t^2)$
$\frac{\partial z}{\partial s} = e^{x+y}(2st + t^2)$

**Finally, substitute $x$ and $y$ back in terms of $s$ and $t$.**
$x+y = s^2t + st^2$
$\frac{\partial z}{\partial s} = e^{s^2t + st^2}(2st + t^2)$

**Apply the Chain Rule for $\frac{\partial z}{\partial t}$:**
$\frac{\partial z}{\partial t} = \frac{\partial z}{\partial x} \frac{\partial x}{\partial t} + \frac{\partial z}{\partial y} \frac{\partial y}{\partial t}$
$\frac{\partial z}{\partial t} = (e^{x+y})(s^2) + (e^{x+y})(2st)$
$\frac{\partial z}{\partial t} = e^{x+y}(s^2 + 2st)$

**Substitute $x$ and $y$ back in terms of $s$ and $t$.**
$x+y = s^2t + st^2$
$\frac{\partial z}{\partial t} = e^{s^2t + st^2}(s^2 + 2st)$

So, we've successfully computed both partial derivatives of $z$ with respect to $s$ and $t$. This is fundamental for understanding how changes in the underlying variables ($s, t$) propagate through intermediate variables ($x, y$) to affect the final outcome ($z$). This skill is directly applicable to **CO2**.

### Relation to Other Course Outcomes

You might be wondering how this ties into other course outcomes.

*   **CO1: Apply various concepts in calculus to linearize functions and to analyze concavity.**
    The Chain Rule is a stepping stone to linearization. When we linearize a function $f(x, y)$ around a point $(x_0, y_0)$, we use partial derivatives: $f(x, y) \approx f(x_0, y_0) + \frac{\partial f}{\partial x}(x_0, y_0)(x-x_0) + \frac{\partial f}{\partial y}(x_0, y_0)(y-y_0)$. If $x$ and $y$ themselves are functions of $t$, say $x(t)$ and $y(t)$, we can linearize $f(x(t), y(t))$ by applying the chain rule to the linearized form, or by applying the chain rule first and then linearizing the resulting expression. Understanding $\frac{dz}{dt}$ tells us the local rate of change, a key aspect of linearization. Analyzing concavity uses second derivatives. When $z$ depends on $x$ and $y$, and $x, y$ depend on $t$, calculating the second derivative $\frac{d^2z}{dt^2}$ involves applying the chain rule *again* within product rules and sum rules, demonstrating the cascading nature of these rules.

*   **CO3: Interpret directional derivative and solve maxima and minima of multivariable functions.**
    The Chain Rule is intrinsically linked to directional derivatives. If we consider a function $f(\mathbf{r})$ where $\mathbf{r}(t)$ is a path, the rate of change of $f$ along the path is $\frac{df}{dt} = \nabla f(\mathbf{r}(t)) \cdot \mathbf{r}'(t)$. This is a direct application of the chain rule! If $\mathbf{r}(t) = (x(t), y(t))$, then $\nabla f = (\frac{\partial f}{\partial x}, \frac{\partial f}{\partial y})$ and $\mathbf{r}'(t) = (x'(t), y'(t))$, and the dot product expands to $\frac{\partial f}{\partial x} x'(t) + \frac{\partial f}{\partial y} y'(t)$, exactly our chain rule formula. For optimization (finding maxima and minima), we set gradients to zero. If our variables are subject to parametric constraints, the chain rule helps us understand how the function behaves along those constraints.

*   **CO4: Solve constrained maxima and minima, LPP and understand the method of Steepest Descent.**
    While the Chain Rule itself isn't directly solving constrained optimization or LPPs, it provides the fundamental calculus tools for understanding gradients. The gradient vector, essential for optimization methods like Steepest Descent, is built from partial derivatives. When dealing with functions of functions in optimization, the chain rule becomes indispensable for computing derivatives needed for those algorithms. For example, in parameter estimation, if your cost function depends on model parameters, and those parameters are influenced by other variables, the chain rule helps compute the gradient of the cost function with respect to the underlying variables.

### Common Pitfalls and Tips

1.  **Confusing Partial and Ordinary Derivatives:** Remember, when you see $\frac{\partial z}{\partial x}$, you're treating other independent variables of $z$ as constants. When you see $\frac{dx}{dt}$, you're differentiating a function of a single variable $t$. In the chain rule formula, we mix these.
2.  **Forgetting to Substitute Back:** The final answer for $\frac{dz}{dt}$ (or $\frac{\partial z}{\partial s}$, etc.) should ideally be expressed in terms of the original independent variable(s), $t$ (or $s, t$). Always remember to substitute $x$ and $y$ back.
3.  **Tree Diagram Errors:** If you have a complex system, draw the tree diagram carefully. Ensure every variable dependency is correctly mapped.
4.  **Sign Errors:** Be extra careful with signs, especially when differentiating trigonometric functions or powers of negative terms.
5.  **Chain Rule within Product/Quotient Rule:** When calculating higher-order derivatives (like $\frac{d^2z}{dt^2}$), you'll be differentiating expressions involving products of terms derived from the chain rule. This means applying the product rule and, within those terms, applying the chain rule again. This can get messy, so organize your work!

### Summary

The Chain Rule for functions of two variables is a cornerstone of multivariable calculus. It allows us to calculate the rate of change of a dependent variable when it depends on intermediate variables, which in turn depend on one or more other variables. The core formulas are:

*   If $z = f(x, y)$, $x = g(t)$, $y = h(t)$:
    $\frac{dz}{dt} = \frac{\partial z}{\partial x} \frac{dx}{dt} + \frac{\partial z}{\partial y} \frac{dy}{dt}$

*   If $z = f(x, y)$, $x = g(s, t)$, $y = h(s, t)$:
    $\frac{\partial z}{\partial s} = \frac{\partial z}{\partial x} \frac{\partial x}{\partial s} + \frac{\partial z}{\partial y} \frac{\partial y}{\partial s}$
    $\frac{\partial z}{\partial t} = \frac{\partial z}{\partial x} \frac{\partial x}{\partial t} + \frac{\partial z}{\partial y} \frac{\partial y}{\partial t}$

Remember to always identify your dependent, intermediate, and independent variables, and use tree diagrams to visualize the dependencies. This rule is a fundamental building block for many concepts in mathematics for information science, from analyzing system dynamics to performing optimization.

---

### Sample Questions and Answers

**Question 1 (Conceptual):**
Explain, in your own words, why the Chain Rule for functions of two variables involves a sum of products of derivatives.

**Answer:**
The Chain Rule for functions of two variables is about understanding the total rate of change of an outcome variable when it's indirectly affected by changes in one or more basic input variables. If our outcome variable $z$ depends on intermediate variables $x$ and $y$, and these intermediate variables depend on a single input variable $t$, then a change in $t$ affects $z$ in two ways: first, by changing $x$, and second, by changing $y$. The Chain Rule sums these two contributions. The contribution from changing $x$ is the rate at which $z$ changes with respect to $x$ (i.e., $\frac{\partial z}{\partial x}$) multiplied by the rate at which $x$ changes with respect to $t$ (i.e., $\frac{dx}{dt}$). Similarly, the contribution from changing $y$ is $\frac{\partial z}{\partial y} \cdot \frac{dy}{dt}$. Summing these two "paths" gives the total rate of change of $z$ with respect to $t$. This mirrors how changes propagate through connected systems.

**Question 2 (Calculational):**
Let $w = u^2v - uv^3$, where $u = 2t$ and $v = t^3$. Find $\frac{dw}{dt}$.

**Answer:**
Here, $w$ is a function of $u$ and $v$, and $u$ and $v$ are functions of $t$. We will use the Chain Rule: $\frac{dw}{dt} = \frac{\partial w}{\partial u} \frac{du}{dt} + \frac{\partial w}{\partial v} \frac{dv}{dt}$.

**Step 1: Find partial derivatives of $w$.**
$w = u^2v - uv^3$
$\frac{\partial w}{\partial u} = \frac{\partial}{\partial u}(u^2v) - \frac{\partial}{\partial u}(uv^3) = 2uv - v^3$
$\frac{\partial w}{\partial v} = \frac{\partial}{\partial v}(u^2v) - \frac{\partial}{\partial v}(uv^3) = u^2(1) - u(3v^2) = u^2 - 3uv^2$

**Step 2: Find ordinary derivatives of $u$ and $v$ with respect to $t$.**
$u = 2t \implies \frac{du}{dt} = 2$
$v = t^3 \implies \frac{dv}{dt} = 3t^2$

**Step 3: Apply the Chain Rule formula.**
$\frac{dw}{dt} = (2uv - v^3)(2) + (u^2 - 3uv^2)(3t^2)$
$\frac{dw}{dt} = 4uv - 2v^3 + 3t^2u^2 - 9t^2uv^2$

**Step 4: Substitute $u$ and $v$ in terms of $t$.**
$u = 2t$, $v = t^3$
$\frac{dw}{dt} = 4(2t)(t^3) - 2(t^3)^3 + 3t^2(2t)^2 - 9t^2(2t)(t^3)^2$
$\frac{dw}{dt} = 8t^4 - 2t^9 + 3t^2(4t^2) - 18t^3(t^6)$
$\frac{dw}{dt} = 8t^4 - 2t^9 + 12t^4 - 18t^9$

**Step 5: Simplify.**
$\frac{dw}{dt} = (8t^4 + 12t^4) + (-2t^9 - 18t^9)$
$\frac{dw}{dt} = 20t^4 - 20t^9$

Thus, $\frac{dw}{dt} = 20t^4 - 20t^9$.

**Question 3 (Calculational - Multiple Independent Variables):**
Let $z = x \ln(y)$, where $x = \frac{s}{t}$ and $y = s e^t$. Find $\frac{\partial z}{\partial s}$ and $\frac{\partial z}{\partial t}$.

**Answer:**
Here, $z$ is a function of $x$ and $y$, and $x$ and $y$ are functions of $s$ and $t$.

**Step 1: Find partial derivatives of $z$.**
$z = x \ln(y)$
$\frac{\partial z}{\partial x} = \frac{\partial}{\partial x}(x \ln(y)) = \ln(y)$ (treat $y$ as constant)
$\frac{\partial z}{\partial y} = \frac{\partial}{\partial y}(x \ln(y)) = x \cdot \frac{1}{y} = \frac{x}{y}$ (treat $x$ as constant)

**Step 2: Find partial derivatives of $x$ and $y$ with respect to $s$ and $t$.**
$x = \frac{s}{t}$
$\frac{\partial x}{\partial s} = \frac{\partial}{\partial s}(\frac{s}{t}) = \frac{1}{t}$ (treat $t$ as constant)
$\frac{\partial x}{\partial t} = \frac{\partial}{\partial t}(\frac{s}{t}) = s \cdot (-\frac{1}{t^2}) = -\frac{s}{t^2}$ (treat $s$ as constant)

$y = s e^t$
$\frac{\partial y}{\partial s} = \frac{\partial}{\partial s}(s e^t) = e^t$ (treat $e^t$ as constant)
$\frac{\partial y}{\partial t} = \frac{\partial}{\partial t}(s e^t) = s e^t$ (treat $s$ as constant)

**Step 3: Apply Chain Rule for $\frac{\partial z}{\partial s}$.**
$\frac{\partial z}{\partial s} = \frac{\partial z}{\partial x} \frac{\partial x}{\partial s} + \frac{\partial z}{\partial y} \frac{\partial y}{\partial s}$
$\frac{\partial z}{\partial s} = (\ln(y))(\frac{1}{t}) + (\frac{x}{y})(e^t)$

**Step 4: Substitute $x$ and $y$ in terms of $s$ and $t$.**
$x = \frac{s}{t}$
$y = s e^t$
$\ln(y) = \ln(s e^t) = \ln(s) + \ln(e^t) = \ln(s) + t$
$\frac{x}{y} = \frac{s/t}{s e^t} = \frac{s}{t s e^t} = \frac{1}{t e^t}$

$\frac{\partial z}{\partial s} = (\ln(s) + t)(\frac{1}{t}) + (\frac{1}{t e^t})(e^t)$
$\frac{\partial z}{\partial s} = \frac{\ln(s)}{t} + \frac{t}{t} + \frac{e^t}{t e^t}$
$\frac{\partial z}{\partial s} = \frac{\ln(s)}{t} + 1 + \frac{1}{t}$

So, $\frac{\partial z}{\partial s} = \frac{\ln(s) + t + 1}{t}$.

**Step 5: Apply Chain Rule for $\frac{\partial z}{\partial t}$.**
$\frac{\partial z}{\partial t} = \frac{\partial z}{\partial x} \frac{\partial x}{\partial t} + \frac{\partial z}{\partial y} \frac{\partial y}{\partial t}$
$\frac{\partial z}{\partial t} = (\ln(y))(-\frac{s}{t^2}) + (\frac{x}{y})(s e^t)$

**Step 6: Substitute $x$ and $y$ in terms of $s$ and $t$.**
Using the substitutions from Step 4:
$\frac{\partial z}{\partial t} = (\ln(s) + t)(-\frac{s}{t^2}) + (\frac{1}{t e^t})(s e^t)$
$\frac{\partial z}{\partial t} = -\frac{s(\ln(s) + t)}{t^2} + \frac{s e^t}{t e^t}$
$\frac{\partial z}{\partial t} = -\frac{s\ln(s)}{t^2} - \frac{st}{t^2} + \frac{s}{t}$
$\frac{\partial z}{\partial t} = -\frac{s\ln(s)}{t^2} - \frac{s}{t} + \frac{s}{t}$
$\frac{\partial z}{\partial t} = -\frac{s\ln(s)}{t^2}$

So, $\frac{\partial z}{\partial t} = -\frac{s\ln(s)}{t^2}$.

Keep practicing these, and you'll master the flow of rates of change!
