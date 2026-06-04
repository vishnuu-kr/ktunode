---
title: "The Chain Rule: Functions of three Variables"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 1"
module: "Module 3: The Chain Rule: Functions of three Variables"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5bd3"
status: "completed"
scrapedAt: "2026-05-20T16:40:14.236Z"
---
# Mathematics for Information Science – 1: Module 3 – The Chain Rule: Functions of Three Variables

Welcome, everyone! Today, we're diving into a truly fundamental concept in multivariable calculus: **The Chain Rule for Functions of Three Variables**. This is a powerful tool that allows us to understand how changes in independent variables propagate through a chain of functions to affect a final outcome. Think of it as understanding the ripple effect in a complex system.

This topic is absolutely crucial for our understanding of how information changes and flows within systems, directly connecting to several of our Course Outcomes. Specifically, when we talk about how one variable affects another, and then how that affects a third, we're laying the groundwork for understanding **rates of change** and how to analyze them. This is key for **CO1 (linearize functions and analyze concavity)** and definitely for **CO2 (calculate limits for functions of two variables and partial derivatives)**, as the Chain Rule is built upon these partial derivatives. Later, as we explore optimization, understanding these rate-of-change relationships becomes even more vital for **CO3 (directional derivative and maxima/minima)** and **CO4 (constrained maxima/minima)**.

Let's imagine a scenario to get us started. Suppose you're building a new AI model. The accuracy of your model, let's call it $A$, might depend on several factors. Let's say these factors are the learning rate, $\ell$, and the number of training epochs, $e$. So, $A = A(\ell, e)$. Now, the learning rate itself might not be a fixed number; it could be adjusted based on the current time of day, $t$, and the processor load, $p$. So, $\ell = \ell(t, p)$. Similarly, the number of epochs might be determined by the available computational resources, $r$, and the complexity of the dataset, $c$. So, $e = e(r, c)$.

Now, if you want to know how a change in, say, time ($t$) ultimately affects the model's accuracy ($A$), you can see we have a chain: $t \rightarrow \ell \rightarrow A$ and $t \rightarrow p \rightarrow \ell \rightarrow A$. This is where the Chain Rule comes in. It gives us a systematic way to calculate the **total rate of change** of $A$ with respect to $t$, considering all these intermediate dependencies.

Our goal today is to understand how to break down these complex relationships into manageable parts using partial derivatives. We’ll be referencing some excellent texts like **Thomas' Calculus** and **Kreyszig's Advanced Engineering Mathematics**, which provide rigorous foundations for these concepts.

---

### The Core Idea: Breaking Down Complexity

At its heart, the Chain Rule for functions of three variables (or more, for that matter!) is an extension of the single-variable chain rule you learned in introductory calculus. Remember how if $y = f(u)$ and $u = g(x)$, then $\frac{dy}{dx} = \frac{dy}{du} \frac{du}{dx}$? We're doing something similar, but with multiple variables involved.

Let's set up our general scenario. We have a function $f$ that depends on three variables, say $x$, $y$, and $z$. So, $f = f(x, y, z)$. Now, suppose each of these variables, $x$, $y$, and $z$, is not an independent variable in itself, but rather depends on another set of independent variables. For simplicity in this module, we'll focus on the case where $x, y, z$ all depend on a **single** independent variable, say $t$.

So, we have:
*   $x = x(t)$
*   $y = y(t)$
*   $z = z(t)$

And our main function is:
*   $f = f(x(t), y(t), z(t))$

This notation might look a bit daunting, but it just means that $f$ is ultimately a function of $t$. We want to find out how $f$ changes as $t$ changes, i.e., we want to calculate $\frac{df}{dt}$.

---

### Constructing the Chain Rule Formula

To figure out $\frac{df}{dt}$, we need to consider how a small change in $t$ affects $x$, $y$, and $z$, and then how those changes in $x$, $y$, and $z$ affect $f$.

Think back to the definition of a derivative: it's about the ratio of small changes. A small change in $t$, let's call it $\Delta t$, will cause small changes in $x$, $y$, and $z$, which we can denote as $\Delta x$, $\Delta y$, and $\Delta z$. These changes in $x, y, z$ will, in turn, cause a change in $f$, denoted as $\Delta f$.

The Chain Rule tells us that the total change in $f$ due to changes in $x$, $y$, and $z$ (which are themselves driven by $t$) can be expressed as the sum of the contributions from each intermediate variable.

The contribution of $x$ to the change in $f$ is related to how $f$ changes with respect to $x$ (which is $\frac{\partial f}{\partial x}$) and how $x$ changes with respect to $t$ (which is $\frac{dx}{dt}$). Similarly for $y$ and $z$.

So, the Chain Rule for this scenario is:

$$ \frac{df}{dt} = \frac{\partial f}{\partial x} \frac{dx}{dt} + \frac{\partial f}{\partial y} \frac{dy}{dt} + \frac{\partial f}{\partial z} \frac{dz}{dt} $$

This formula is absolutely fundamental! It states that the total derivative of $f$ with respect to $t$ is the sum of the partial derivatives of $f$ with respect to each of its immediate variables ($x, y, z$), each multiplied by the derivative of that immediate variable with respect to $t$.

Let's break down what each term means:

*   $\frac{\partial f}{\partial x}$: This is the **partial derivative of $f$ with respect to $x$**. It tells us how $f$ changes when only $x$ changes, while $y$ and $z$ are held constant. This is a core concept from our earlier work on partial derivatives.
*   $\frac{dx}{dt}$: This is the **ordinary derivative of $x$ with respect to $t$**. It tells us how $x$ changes as $t$ changes.
*   And so on for $\frac{\partial f}{\partial y}$, $\frac{dy}{dt}$, $\frac{\partial f}{\partial z}$, and $\frac{dz}{dt}$.

**Remember this:** When you have a composite function where the outer function ($f$) has multiple variables, and each of those variables depends on a single, common parameter ($t$), you sum up the "paths" of influence. Each path is a product of an outer partial derivative and an inner ordinary derivative.

---

### Applying the Chain Rule: An Example

Let's make this concrete with an example. Suppose we have a function representing the temperature at a point $(x, y, z)$ in space, given by:

$f(x, y, z) = x^2 y + yz^3$

Now, let's say the position of a particle moving through this space is described by parametric equations:

$x(t) = \cos(t)$
$y(t) = \sin(t)$
$z(t) = 2t$

We want to find the rate at which the temperature changes as the particle moves through space, which means we want to find $\frac{df}{dt}$ at any given time $t$.

**Step 1: Calculate the partial derivatives of $f$.**

*   Treat $y$ and $z$ as constants to find $\frac{\partial f}{\partial x}$:
    $\frac{\partial f}{\partial x} = \frac{\partial}{\partial x}(x^2 y + yz^3) = 2xy$

*   Treat $x$ and $z$ as constants to find $\frac{\partial f}{\partial y}$:
    $\frac{\partial f}{\partial y} = \frac{\partial}{\partial y}(x^2 y + yz^3) = x^2 + z^3$

*   Treat $x$ and $y$ as constants to find $\frac{\partial f}{\partial z}$:
    $\frac{\partial f}{\partial z} = \frac{\partial}{\partial z}(x^2 y + yz^3) = y(3z^2) = 3yz^2$

**Step 2: Calculate the ordinary derivatives of $x, y, z$ with respect to $t$.**

*   $\frac{dx}{dt} = \frac{d}{dt}(\cos(t)) = -\sin(t)$
*   $\frac{dy}{dt} = \frac{d}{dt}(\sin(t)) = \cos(t)$
*   $\frac{dz}{dt} = \frac{d}{dt}(2t) = 2$

**Step 3: Substitute these into the Chain Rule formula.**

$$ \frac{df}{dt} = \frac{\partial f}{\partial x} \frac{dx}{dt} + \frac{\partial f}{\partial y} \frac{dy}{dt} + \frac{\partial f}{\partial z} \frac{dz}{dt} $$

$$ \frac{df}{dt} = (2xy)(-\sin(t)) + (x^2 + z^3)(\cos(t)) + (3yz^2)(2) $$

**Step 4: Express the result in terms of $t$ by substituting $x(t), y(t), z(t)$.**

This is a crucial step to get the final answer as a function of the single independent variable.

Substitute $x = \cos(t)$, $y = \sin(t)$, and $z = 2t$:

$$ \frac{df}{dt} = (2(\cos(t))(\sin(t)))(-\sin(t)) + ((\cos(t))^2 + (2t)^3)(\cos(t)) + (3(\sin(t))(2t)^2)(2) $$

Let's simplify this expression:

$$ \frac{df}{dt} = -2\cos(t)\sin^2(t) + (\cos^2(t) + 8t^3)\cos(t) + 12t^2\sin(t) $$

$$ \frac{df}{dt} = -2\cos(t)\sin^2(t) + \cos^3(t) + 8t^3\cos(t) + 12t^2\sin(t) $$

And there you have it! This expression tells you the rate of change of temperature experienced by the particle at any time $t$. This is a direct application of the Chain Rule, and it's something you'll see tested in exams: given $f$ and the parametric forms of $x, y, z$, find $\frac{df}{dt}$.

**A common pitfall:** Students sometimes forget to substitute the original variables ($x, y, z$) back in terms of $t$ at the end. Make sure your final answer is solely in terms of the independent variable $t$ (or whatever it may be).

---

### Generalizing the Chain Rule: Functions of Multiple Variables

What if our intermediate variables depend on more than one variable? For instance, suppose $x, y, z$ themselves are functions of two independent variables, say $u$ and $v$.

Let:
*   $x = x(u, v)$
*   $y = y(u, v)$
*   $z = z(u, v)$

And our main function is still $f = f(x, y, z)$. Now, $f$ is implicitly a function of $u$ and $v$, so $f(u, v) = f(x(u, v), y(u, v), z(u, v))$.

In this case, we'll be interested in the **partial derivatives** of $f$ with respect to $u$ and $v$, i.e., $\frac{\partial f}{\partial u}$ and $\frac{\partial f}{\partial v}$.

The Chain Rule extends naturally. To find $\frac{\partial f}{\partial u}$, we consider how a change in $u$ (holding $v$ constant) affects $x$, $y$, and $z$, and then how those changes affect $f$.

The Chain Rule for $\frac{\partial f}{\partial u}$ is:

$$ \frac{\partial f}{\partial u} = \frac{\partial f}{\partial x} \frac{\partial x}{\partial u} + \frac{\partial f}{\partial y} \frac{\partial y}{\partial u} + \frac{\partial f}{\partial z} \frac{\partial z}{\partial u} $$

Notice the pattern:
*   We use partial derivatives for the outer function ($f$).
*   We use partial derivatives for the intermediate functions ($x, y, z$) with respect to the independent variable ($u$).

And similarly for $\frac{\partial f}{\partial v}$:

$$ \frac{\partial f}{\partial v} = \frac{\partial f}{\partial x} \frac{\partial x}{\partial v} + \frac{\partial f}{\partial y} \frac{\partial y}{\partial v} + \frac{\partial f}{\partial z} \frac{\partial z}{\partial v} $$

**Key takeaway:** When the intermediate variables are functions of multiple independent variables, you sum up the contributions from *each* independent variable, using partial derivatives throughout.

---

### A Real-World Analogy for the Multi-Variable Case

Imagine you're a food critic. The "deliciousness" of a dish, let's call it $D$, might depend on its sweetness ($s$), saltiness ($l$), and texture ($t$). So, $D = D(s, l, t)$.

Now, the sweetness of the dish might depend on the amount of sugar added ($u$) and the cooking temperature ($v$). So, $s = s(u, v)$.
The saltiness might depend on the amount of salt added ($u$) and the cooking time ($v$). So, $l = l(u, v)$.
And the texture might depend on the cooking temperature ($v$) and the ingredient mixing speed ($u$). So, $t = t(u, v)$.

If you want to understand how changing the amount of sugar ($u$) or the cooking temperature ($v$) affects the overall deliciousness ($D$), you'd use the Chain Rule for functions of two variables.

To find $\frac{\partial D}{\partial u}$ (how deliciousness changes with sugar), you'd consider:
*   How deliciousness changes with sweetness ($\frac{\partial D}{\partial s}$), and how sweetness changes with sugar ($\frac{\partial s}{\partial u}$).
*   How deliciousness changes with saltiness ($\frac{\partial D}{\partial l}$), and how saltiness changes with sugar ($\frac{\partial l}{\partial u}$).
*   How deliciousness changes with texture ($\frac{\partial D}{\partial t}$), and how texture changes with sugar ($\frac{\partial t}{\partial u}$).

And you'd sum these up:

$$ \frac{\partial D}{\partial u} = \frac{\partial D}{\partial s} \frac{\partial s}{\partial u} + \frac{\partial D}{\partial l} \frac{\partial l}{\partial u} + \frac{\partial D}{\partial t} \frac{\partial t}{\partial u} $$

Similarly for $\frac{\partial D}{\partial v}$. This is precisely how the formulas for $\frac{\partial f}{\partial u}$ and $\frac{\partial f}{\partial v}$ work. It's about tracing all possible paths from the independent variable to the dependent variable.

---

### Connection to Course Outcomes and Learning Levels

Let's explicitly tie this back to our learning objectives:

*   **CO1: Apply various concepts in calculus to linearize functions and to analyze concavity.**
    The Chain Rule is a direct application of derivatives. The partial derivatives ($\frac{\partial f}{\partial x}$, $\frac{\partial f}{\partial y}$, etc.) represent the linear approximation of the function $f$ in the direction of each variable. Understanding these rates of change is the first step in linearization. While this topic primarily focuses on first-order changes (derivatives), the understanding of how variables interact is foundational for analyzing second-order changes (like concavity) in later modules.

*   **CO2: Calculate the limits for functions of two variables and partial derivatives of multivariable functions.**
    This entire topic *relies* on your ability to calculate partial derivatives. The Chain Rule is a method for finding the derivative of a *composite* function, and it's constructed by combining the partial derivatives of the outer function with the derivatives (or partial derivatives) of the inner functions. Without solid partial differentiation skills, the Chain Rule is impossible to apply.

*   **CO3: Interpret directional derivative and solve maxima and minima of multivariable functions.**
    This is where the Chain Rule starts to show its practical power. When we talk about optimization (finding maxima and minima), we're often dealing with situations where quantities depend on multiple factors, and those factors might themselves depend on other variables. For instance, if you're optimizing a profit function that depends on production levels, and production levels depend on machine speed and labor hours, the Chain Rule helps you understand how changing machine speed affects profit through production levels. Later, the concept of the gradient, which is composed of partial derivatives, is central to finding maxima/minima and understanding directional derivatives. The Chain Rule provides the mechanism to compute how a change in a *parameter* of the system (like time or an external control) impacts the function we're optimizing.

*   **CO4: Solve constrained maxima and minima, LPP and understand the method of Steepest Descent.**
    Constrained optimization problems, like those solved using Lagrange multipliers, inherently involve relationships between variables. While the Chain Rule might not be directly used in the Lagrange multiplier formula itself, the underlying understanding of how changes in variables propagate is crucial. Steepest Descent, for example, relies heavily on gradients, which are built from partial derivatives, and the Chain Rule helps us understand the derivatives of more complex objective functions.

---

### Vector Notation and the Jacobian Matrix (Briefly)

For those who like a more abstract or compact view, especially as you progress in your studies, this can be expressed using vector notation.

If we have $f(x, y, z)$ and $\mathbf{r}(t) = \langle x(t), y(t), z(t) \rangle$, then $f$ as a function of $t$ is $f(\mathbf{r}(t))$. The Chain Rule becomes:

$$ \frac{df}{dt} = \nabla f \cdot \mathbf{r}'(t) $$

where $\nabla f = \langle \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}, \frac{\partial f}{\partial z} \rangle$ is the gradient of $f$, and $\mathbf{r}'(t) = \langle \frac{dx}{dt}, \frac{dy}{dt}, \frac{dz}{dt} \rangle$ is the derivative of the position vector. The dot product naturally sums the products of corresponding components, yielding the same formula.

When $x, y, z$ are functions of $u, v$, we can use the Jacobian matrix. Let $\mathbf{w} = \langle x, y, z \rangle$ and $\mathbf{p} = \langle u, v \rangle$. Then $\mathbf{w} = \mathbf{w}(\mathbf{p})$. The Jacobian of $\mathbf{w}$ with respect to $\mathbf{p}$ is:

$$ J_{\mathbf{w}/\mathbf{p}} = \begin{bmatrix} \frac{\partial x}{\partial u} & \frac{\partial x}{\partial v} \\ \frac{\partial y}{\partial u} & \frac{\partial y}{\partial v} \\ \frac{\partial z}{\partial u} & \frac{\partial z}{\partial v} \end{bmatrix} $$

And the Jacobian of $f$ with respect to $\mathbf{p}$ is:

$$ J_{f/\mathbf{p}} = \begin{bmatrix} \frac{\partial f}{\partial u} & \frac{\partial f}{\partial v} \end{bmatrix} $$

The Chain Rule in matrix form is:

$$ J_{f/\mathbf{p}} = J_{f/\mathbf{w}} J_{\mathbf{w}/\mathbf{p}} $$

where $J_{f/\mathbf{w}} = \begin{bmatrix} \frac{\partial f}{\partial x} & \frac{\partial f}{\partial y} & \frac{\partial f}{\partial z} \end{bmatrix}$.
Multiplying these matrices out will recover the partial derivative formulas we discussed earlier. This is a more advanced perspective, but it shows the universality of the Chain Rule concept.

---

### Summary and Key Reminders

*   The Chain Rule is your essential tool for finding the rate of change of a composite function.
*   For $f(x, y, z)$ where $x=x(t), y=y(t), z=z(t)$, the total derivative is:
    $$ \frac{df}{dt} = \frac{\partial f}{\partial x} \frac{dx}{dt} + \frac{\partial f}{\partial y} \frac{dy}{dt} + \frac{\partial f}{\partial z} \frac{dz}{dt} $$
*   For $f(x, y, z)$ where $x=x(u, v), y=y(u, v), z=z(u, v)$, the partial derivatives are:
    $$ \frac{\partial f}{\partial u} = \frac{\partial f}{\partial x} \frac{\partial x}{\partial u} + \frac{\partial f}{\partial y} \frac{\partial y}{\partial u} + \frac{\partial f}{\partial z} \frac{\partial z}{\partial u} $$
    $$ \frac{\partial f}{\partial v} = \frac{\partial f}{\partial x} \frac{\partial x}{\partial v} + \frac{\partial f}{\partial y} \frac{\partial y}{\partial v} + \frac{\partial f}{\partial z} \frac{\partial z}{\partial v} $$
*   **Always identify your outer function and your inner functions correctly.**
*   **Calculate all necessary partial derivatives and ordinary derivatives.**
*   **Substitute carefully** to express the final answer in terms of the independent variable(s).
*   This concept is foundational for understanding rates of change in complex systems, which is vital for analysis and optimization in information science.

---

### Sample Questions with Answers

**Question 1 (Conceptual):**
In your own words, explain why the Chain Rule involves summing multiple terms when the intermediate variables depend on more than one independent variable.

**Answer:**
When an outer function ($f$) depends on several intermediate variables ($x, y, z$), and each of these intermediate variables, in turn, depends on a single parameter ($t$), a change in $t$ affects $f$ through $x$, through $y$, and through $z$. The Chain Rule accounts for each of these "paths" of influence. The term $\frac{\partial f}{\partial x} \frac{dx}{dt}$ represents the rate of change of $f$ mediated by $x$. Similarly, $\frac{\partial f}{\partial y} \frac{dy}{dt}$ is the contribution via $y$, and $\frac{\partial f}{\partial z} \frac{dz}{dt}$ is the contribution via $z$. Since these are all additive effects on $f$, we sum them to get the total rate of change $\frac{df}{dt}$. This is analogous to how different tributaries contribute to the flow of a main river.

**Question 2 (Exam-Oriented - Calculation):**
Let $f(x, y) = x^2 e^y$ and suppose $x(t) = t^3$ and $y(t) = \sin(t)$. Find $\frac{df}{dt}$.

**Solution:**
This is a function of two variables $f(x, y)$, where $x$ and $y$ depend on a single variable $t$. We use the Chain Rule for this scenario:
$$ \frac{df}{dt} = \frac{\partial f}{\partial x} \frac{dx}{dt} + \frac{\partial f}{\partial y} \frac{dy}{dt} $$

**Step 1: Find partial derivatives of $f$.**
$\frac{\partial f}{\partial x} = \frac{\partial}{\partial x}(x^2 e^y) = 2x e^y$
$\frac{\partial f}{\partial y} = \frac{\partial}{\partial y}(x^2 e^y) = x^2 e^y$

**Step 2: Find derivatives of $x$ and $y$ with respect to $t$.**
$\frac{dx}{dt} = \frac{d}{dt}(t^3) = 3t^2$
$\frac{dy}{dt} = \frac{d}{dt}(\sin(t)) = \cos(t)$

**Step 3: Substitute into the Chain Rule formula.**
$$ \frac{df}{dt} = (2x e^y)(3t^2) + (x^2 e^y)(\cos(t)) $$

**Step 4: Substitute $x(t)$ and $y(t)$ to express the answer in terms of $t$.**
Substitute $x = t^3$ and $y = \sin(t)$:
$$ \frac{df}{dt} = (2(t^3) e^{\sin(t)})(3t^2) + ((t^3)^2 e^{\sin(t)})(\cos(t)) $$
$$ \frac{df}{dt} = 6t^5 e^{\sin(t)} + t^6 e^{\sin(t)} \cos(t) $$

You can optionally factor out $t^5 e^{\sin(t)}$:
$$ \frac{df}{dt} = t^5 e^{\sin(t)} (6 + t \cos(t)) $$

**Question 3 (Exam-Oriented - Calculation with Multiple Independent Variables):**
Suppose $z = u^2 + v$, where $u = x + y$ and $v = x - y$. Find $\frac{\partial z}{\partial x}$ and $\frac{\partial z}{\partial y}$.

**Solution:**
Here, $z$ is a function of $u$ and $v$, and $u$ and $v$ are functions of $x$ and $y$. We need to find the partial derivatives of $z$ with respect to $x$ and $y$.

**For $\frac{\partial z}{\partial x}$:**
We use the Chain Rule:
$$ \frac{\partial z}{\partial x} = \frac{\partial z}{\partial u} \frac{\partial u}{\partial x} + \frac{\partial z}{\partial v} \frac{\partial v}{\partial x} $$

**Step 1: Find partial derivatives of $z$.**
$\frac{\partial z}{\partial u} = \frac{\partial}{\partial u}(u^2 + v) = 2u$
$\frac{\partial z}{\partial v} = \frac{\partial}{\partial v}(u^2 + v) = 1$

**Step 2: Find partial derivatives of $u$ and $v$ with respect to $x$.**
$\frac{\partial u}{\partial x} = \frac{\partial}{\partial x}(x + y) = 1$
$\frac{\partial v}{\partial x} = \frac{\partial}{\partial x}(x - y) = 1$

**Step 3: Substitute into the Chain Rule formula.**
$$ \frac{\partial z}{\partial x} = (2u)(1) + (1)(1) = 2u + 1 $$

**Step 4: Substitute $u$ in terms of $x$ and $y$.**
Since $u = x + y$:
$$ \frac{\partial z}{\partial x} = 2(x + y) + 1 = 2x + 2y + 1 $$

**For $\frac{\partial z}{\partial y}$:**
We use the Chain Rule:
$$ \frac{\partial z}{\partial y} = \frac{\partial z}{\partial u} \frac{\partial u}{\partial y} + \frac{\partial z}{\partial v} \frac{\partial v}{\partial y} $$

**Step 1: We already have $\frac{\partial z}{\partial u} = 2u$ and $\frac{\partial z}{\partial v} = 1$.**

**Step 2: Find partial derivatives of $u$ and $v$ with respect to $y$.**
$\frac{\partial u}{\partial y} = \frac{\partial}{\partial y}(x + y) = 1$
$\frac{\partial v}{\partial y} = \frac{\partial}{\partial y}(x - y) = -1$

**Step 3: Substitute into the Chain Rule formula.**
$$ \frac{\partial z}{\partial y} = (2u)(1) + (1)(-1) = 2u - 1 $$

**Step 4: Substitute $u$ in terms of $x$ and $y$.**
Since $u = x + y$:
$$ \frac{\partial z}{\partial y} = 2(x + y) - 1 = 2x + 2y - 1 $$

This concludes our exploration of the Chain Rule for functions of three variables. Keep practicing these, as they are the building blocks for much more advanced calculus and its applications in information science!
