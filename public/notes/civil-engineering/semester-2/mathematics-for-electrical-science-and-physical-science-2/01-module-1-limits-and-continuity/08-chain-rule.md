---
title: "Chain rule"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2"
module: "Module 1: Limits and continuity"
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912cc7"
status: "completed"
scrapedAt: "2026-05-20T18:36:50.310Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2

## Module 1: Limits and Continuity

### Topic: The Chain Rule

Welcome, everyone! Today, we're diving into one of the most fundamental and powerful tools in calculus: **the Chain Rule**. You might think, "What's so special about this rule?" Well, imagine you're trying to understand how one quantity changes with respect to another, but that other quantity itself is changing with respect to a third, and so on. The Chain Rule is our way of unraveling these nested relationships and finding the overall rate of change. It's absolutely crucial for understanding how rates of change propagate through systems, which is precisely what we deal with constantly in Electrical Science and Physical Science.

Think about it: in physics, the velocity of an object might depend on its position, and its position might depend on time. In electrical engineering, the current in a circuit might depend on the voltage across a component, and that voltage might be changing due to some external signal. The Chain Rule allows us to connect these dependencies and figure out how the current changes with respect to that external signal, even if they aren't directly related. This is deeply connected to our course objectives, particularly **CO1: Compute the partial and total derivatives... and to apply in engineering problems**. The Chain Rule is a cornerstone for calculating these derivatives when our functions are composed.

### 1. What is Function Composition? A Quick Recap

Before we get to the rule itself, let's make sure we're on the same page about function composition. Remember when you learned about combining functions? If you have a function $y = f(x)$ and another function $x = g(t)$, then the composite function is $y = f(g(t))$. It's like a set of Russian nesting dolls: one function is inside another.

**Analogy Time:** Imagine you're baking a cake.
*   The **amount of frosting** you need ($F$) depends on the **surface area of the cake** ($A$). So, $F = f(A)$.
*   The **surface area of the cake** ($A$) depends on the **radius of the cake** ($r$), assuming a cylindrical cake. So, $A = g(r)$.
*   And finally, the **radius of the cake** ($r$) depends on **how much batter** you put in the pan ($b$). So, $r = h(b)$.

Now, how does the amount of frosting ($F$) change if you change the amount of batter ($b$)? We've got a chain of dependencies: $F$ depends on $A$, $A$ depends on $r$, and $r$ depends on $b$. The Chain Rule will help us find the relationship between $F$ and $b$, i.e., $\frac{dF}{db}$, by going through these intermediate steps. This is a direct application of **CO1**, as we're looking at how one variable changes with respect to another through a series of transformations.

### 2. The Chain Rule: The Core Idea

The Chain Rule tells us how the rate of change of a composite function is related to the rates of change of its individual components.

**The Fundamental Statement:** If $y$ is a differentiable function of $u$, and $u$ is a differentiable function of $x$, then the composite function $y = f(g(x))$ (where $y = f(u)$ and $u = g(x)$) is differentiable with respect to $x$, and its derivative is given by:

$$ \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} $$

This is often written in Leibniz notation, which is incredibly intuitive. It looks like we're "canceling out" the $du$'s, but remember, this is a shorthand for a rigorous limit-based definition.

**Let's revisit our cake analogy:**
We want to find $\frac{dF}{db}$.
We have $F = f(A)$ and $A = g(r)$ and $r = h(b)$.
To find $\frac{dF}{db}$, we can use the Chain Rule twice:

1.  First, relate $F$ to $r$: $F$ depends on $A$, and $A$ depends on $r$.
    So, $\frac{dF}{dr} = \frac{dF}{dA} \cdot \frac{dA}{dr}$.
2.  Then, relate $F$ (via $r$) to $b$: We just found $\frac{dF}{dr}$, and we know $r$ depends on $b$, i.e., $\frac{dr}{db}$.
    So, $\frac{dF}{db} = \frac{dF}{dr} \cdot \frac{dr}{db}$.

Substituting the first result into the second, we get the full chain:

$$ \frac{dF}{db} = \left( \frac{dF}{dA} \cdot \frac{dA}{dr} \right) \cdot \frac{dr}{db} $$

This shows how the rate of change of the frosting with respect to batter is a product of the rates of change at each step in the dependency chain. This concept of propagating rates of change is vital in understanding dynamic systems in physics and engineering.

**Textbook Connection:** This core idea is thoroughly explained in Chapter 4 of Anton, Biven, and Davis (12th edition) under "Derivatives," specifically focusing on the Chain Rule. They provide the formal proof using the limit definition, which is important for a deep understanding.

### 3. Examples to Make it Click

Let's work through some examples, starting with simpler ones and then moving to more applied scenarios.

**Example 1: Basic Composition**

Suppose $y = u^3$ and $u = x^2 + 1$. Find $\frac{dy}{dx}$.

*   **Step 1: Identify the functions.** We have $y$ as a function of $u$, and $u$ as a function of $x$.
*   **Step 2: Find the individual derivatives.**
    *   $\frac{dy}{du} = \frac{d}{du}(u^3) = 3u^2$.
    *   $\frac{du}{dx} = \frac{d}{dx}(x^2 + 1) = 2x$.
*   **Step 3: Apply the Chain Rule.**
    $$ \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} = (3u^2) \cdot (2x) $$
*   **Step 4: Substitute back to express in terms of x.** Since $u = x^2 + 1$, we replace $u$ in our result:
    $$ \frac{dy}{dx} = 3(x^2 + 1)^2 \cdot (2x) = 6x(x^2 + 1)^2 $$

**Verification (by direct substitution):**
We could first find $y$ in terms of $x$:
$y = u^3 = (x^2 + 1)^3$.
Now, differentiate $y$ directly with respect to $x$:
$\frac{dy}{dx} = \frac{d}{dx}((x^2 + 1)^3)$.
Using the power rule and the chain rule (applied implicitly here), we get:
$\frac{dy}{dx} = 3(x^2 + 1)^2 \cdot \frac{d}{dx}(x^2 + 1) = 3(x^2 + 1)^2 \cdot (2x) = 6x(x^2 + 1)^2$.
The results match! This is a good sign.

**Example 2: A More "Physical Science" Feel**

Imagine the temperature $T$ at a point $(x, y)$ in a metal plate is given by $T(x, y) = x^2 + y^2$. Now, suppose a particle is moving along a path such that its position $(x, y)$ at time $t$ is given by $x(t) = \cos(t)$ and $y(t) = \sin(t)$. We want to find the rate at which the temperature experienced by the particle is changing with respect to time, i.e., $\frac{dT}{dt}$.

This is a perfect scenario for the Chain Rule, and it directly relates to **CO1** when dealing with multivariable functions and their rates of change.

*   **Step 1: Define the functions.**
    *   Temperature $T$ depends on position $(x, y)$: $T(x, y) = x^2 + y^2$.
    *   Position $(x, y)$ depends on time $t$: $x(t) = \cos(t)$ and $y(t) = \sin(t)$.
*   **Step 2: Identify the "chain."** We have $T$ as a function of $x$ and $y$, and both $x$ and $y$ are functions of $t$. This is a multivariable chain rule situation. The rule here is:
    $$ \frac{dT}{dt} = \frac{\partial T}{\partial x} \cdot \frac{dx}{dt} + \frac{\partial T}{\partial y} \cdot \frac{dy}{dt} $$
    Notice the partial derivatives $\frac{\partial T}{\partial x}$ and $\frac{\partial T}{\partial y}$ because $T$ is a function of *two* variables ($x$ and $y$).
*   **Step 3: Calculate the partial and ordinary derivatives.**
    *   $\frac{\partial T}{\partial x} = \frac{\partial}{\partial x}(x^2 + y^2) = 2x$.
    *   $\frac{\partial T}{\partial y} = \frac{\partial}{\partial y}(x^2 + y^2) = 2y$.
    *   $\frac{dx}{dt} = \frac{d}{dt}(\cos(t)) = -\sin(t)$.
    *   $\frac{dy}{dt} = \frac{d}{dt}(\sin(t)) = \cos(t)$.
*   **Step 4: Substitute into the Chain Rule formula.**
    $$ \frac{dT}{dt} = (2x)(-\sin(t)) + (2y)(\cos(t)) $$
*   **Step 5: Substitute the expressions for x and y in terms of t.**
    $$ \frac{dT}{dt} = (2\cos(t))(-\sin(t)) + (2\sin(t))(\cos(t)) $$
    $$ \frac{dT}{dt} = -2\cos(t)\sin(t) + 2\sin(t)\cos(t) = 0 $$

**Interpretation:** What does this result of 0 mean? It means that as the particle moves along this specific circular path ($x^2 + y^2 = \cos^2(t) + \sin^2(t) = 1$, a circle of radius 1), the temperature it experiences remains constant. This makes sense if the temperature contours $T(x,y) = x^2+y^2 = \text{constant}$ are circles centered at the origin, and the particle is moving along one of these circles!

**Common Pitfall:** Forgetting to use *partial* derivatives when the intermediate variable is itself a function of multiple variables, or forgetting to substitute back the original variables.

**Exam Tip:** Questions involving rates of change in physical systems (like temperature, pressure, volume depending on position and time) are very common. They directly test your ability to apply the Chain Rule in a practical context, aligning with **CO1**.

### 4. The Generalized Chain Rule (for multiple intermediate variables)

As we saw in Example 2, if $z$ is a function of $x$ and $y$, and both $x$ and $y$ are functions of $t$, then:

$$ \frac{dz}{dt} = \frac{\partial z}{\partial x} \frac{dx}{dt} + \frac{\partial z}{\partial y} \frac{dy}{dt} $$

What if $x$ and $y$ are themselves functions of *more than one* variable, say $s$ and $t$? For instance, $z = f(x, y)$ where $x = g(s, t)$ and $y = h(s, t)$. Now we can ask how $z$ changes with respect to $s$, or with respect to $t$.

*   To find $\frac{\partial z}{\partial s}$:
    $$ \frac{\partial z}{\partial s} = \frac{\partial z}{\partial x} \frac{\partial x}{\partial s} + \frac{\partial z}{\partial y} \frac{\partial y}{\partial s} $$
*   To find $\frac{\partial z}{\partial t}$:
    $$ \frac{\partial z}{\partial t} = \frac{\partial z}{\partial x} \frac{\partial x}{\partial t} + \frac{\partial z}{\partial y} \frac{\partial y}{\partial t} $$

This is the **Generalized Chain Rule**. Think of it as summing up the contributions to the change in $z$ from each path through the intermediate variables. This is a direct extension of the idea and crucial for understanding how quantities change when influenced by multiple factors, a core aspect of **CO1**.

**Analogy:** Imagine you're trying to find the total change in your happiness ($H$). Your happiness depends on your financial status ($F$) and your health ($L$). So, $H = f(F, L)$.
Now, your financial status ($F$) depends on your job performance ($J$) and the stock market ($M$), so $F = g(J, M)$.
Your health ($L$) also depends on your job performance ($J$) and the weather ($W$), so $L = h(J, W)$.

How does your happiness ($H$) change if your job performance ($J$) improves?
You'd use the Chain Rule:
$$ \frac{\partial H}{\partial J} = \frac{\partial H}{\partial F} \frac{\partial F}{\partial J} + \frac{\partial H}{\partial L} \frac{\partial L}{\partial J} $$
Here, $\frac{\partial H}{\partial F}$ is how happiness changes with money, $\frac{\partial F}{\partial J}$ is how money changes with job performance, and $\frac{\partial H}{\partial L} \frac{\partial L}{\partial J}$ is the path through health. This is precisely what the generalized chain rule captures.

**Textbook Reference:** Thomas' Calculus (Weir, Hass, Heil, Bogacki) is excellent for detailing these generalized rules for multivariable functions. You'll find sections on the Chain Rule for functions of several variables that systematically build up to these formulas. Kreyszig's Advanced Engineering Mathematics also covers this extensively, often with an emphasis on applications in physics and engineering.

### 5. Applications and Why It Matters

The Chain Rule isn't just an abstract mathematical concept; it's a workhorse in applied mathematics and science.

*   **Rate of Change in Physical Systems:** As we saw with the temperature example, it's fundamental to understanding how quantities evolve over time or space when their relationships are indirect. Think about how the pressure in a gas changes with temperature and volume, and how temperature and volume might change over time in a chemical reaction or a thermodynamic process. That's the Chain Rule at play. This directly supports **CO1**.
*   **Related Rates Problems:** Many problems in introductory calculus involve "related rates" where you're given the rate of change of one quantity and asked to find the rate of change of another related quantity. The Chain Rule is the engine that drives the solution to these problems.
*   **Implicit Differentiation:** The technique of implicit differentiation, used to find the derivative of a relation that isn't explicitly solved for $y$, relies heavily on the Chain Rule. For example, when differentiating $y^2$ with respect to $x$, we treat $y$ as a function of $x$ and apply the Chain Rule: $\frac{d}{dx}(y^2) = 2y \frac{dy}{dx}$.
*   **Vector Calculus:** In **CO3**, you'll deal with derivatives of vector functions. The Chain Rule extends to vector-valued functions as well, allowing us to analyze how vector quantities change. For example, if a particle's position $\mathbf{r}(t)$ is a function of time, and another quantity $f$ depends on the particle's position, the rate of change of $f$ with respect to time is $\frac{df}{dt} = \nabla f \cdot \mathbf{r}'(t)$, which is a direct application of the Chain Rule in vector form.
*   **Multivariable Optimization:** When finding maxima and minima of functions of multiple variables (as per **CO1**), the Chain Rule is often used in conjunction with the gradient and Jacobian matrix.

**Exam Focus:** Expect questions that require you to:
1.  Apply the basic Chain Rule to composite functions.
2.  Apply the Chain Rule for multivariable functions (like $z=f(x,y)$ where $x=g(t), y=h(t)$).
3.  Solve "related rates" problems that mimic real-world physical or engineering scenarios.
4.  Use the Chain Rule within the context of implicit differentiation.

**Remember this:** The Chain Rule is about understanding how rates of change are "chained" together through a sequence of dependent variables. Always identify your functions and their dependencies clearly.

### 6. Common Mistakes to Avoid

*   **Confusing $dy/dx$ and $d/dx$ of $y$:** When using the Chain Rule $dy/dx = dy/du \cdot du/dx$, remember that $dy/du$ and $du/dx$ are evaluated at the appropriate points.
*   **Forgetting to substitute back:** After applying the rule, ensure your final answer is expressed in terms of the original independent variable (e.g., $x$ in $dy/dx$).
*   **Mistakes with partial vs. total derivatives:** In multivariable cases, $\frac{\partial z}{\partial x}$ and $\frac{\partial z}{\partial y}$ are partial derivatives. If $x$ and $y$ depend on a single variable $t$, then $\frac{dx}{dt}$ and $\frac{dy}{dt}$ are ordinary derivatives. If $x$ and $y$ depend on multiple variables ($s, t$), then $\frac{\partial x}{\partial s}$ and $\frac{\partial x}{\partial t}$ are partial derivatives. Always use the correct notation.
*   **Algebraic errors:** The calculus part might be straightforward, but the algebra in substituting and simplifying can lead to errors. Double-check your work!

### 7. Practice Problems

Let's solidify our understanding with a few practice problems.

---

## Sample Questions with Answers

**Question 1 (Conceptual Understanding):**
Explain, in your own words, why the Chain Rule is necessary when dealing with composite functions. Use an analogy to illustrate its importance.

**Answer:** The Chain Rule is necessary because it allows us to find the rate of change of a dependent variable ($y$) with respect to an independent variable ($x$), even when $y$ depends on another variable ($u$), which in turn depends on $x$. It’s like trying to figure out how the final outcome of a relay race changes with the speed of the first runner. The outcome depends on the second runner, who depends on the first. The Chain Rule breaks down this complex relationship into manageable steps: how the final outcome changes with the second runner's speed, and how the second runner's speed changes with the first runner's speed. By multiplying these rates, we get the overall rate of change. This is fundamental to understanding how changes propagate through interconnected systems in science and engineering, as required by **CO1**.

**Question 2 (Basic Application):**
If $y = (2x^3 + 5)^4$, find $\frac{dy}{dx}$ using the Chain Rule.

**Answer:**
Let $u = 2x^3 + 5$. Then $y = u^4$.
We find the derivatives:
$\frac{dy}{du} = 4u^3$
$\frac{du}{dx} = \frac{d}{dx}(2x^3 + 5) = 6x^2$

Using the Chain Rule, $\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$:
$\frac{dy}{dx} = (4u^3)(6x^2)$

Now, substitute back $u = 2x^3 + 5$:
$\frac{dy}{dx} = 4(2x^3 + 5)^3 (6x^2)$
$\frac{dy}{dx} = 24x^2 (2x^3 + 5)^3$

**Question 3 (Multivariable Application):**
Suppose the brightness $B$ of a star is related to its radius $R$ and its surface temperature $T$ by $B = k R^2 T^4$ (where $k$ is a constant). If the radius $R$ is changing with time $t$ at a rate of $\frac{dR}{dt} = 0.1 \text{ km/s}$ and the temperature $T$ is changing with time $t$ at a rate of $\frac{dT}{dt} = -2 \text{ K/s}$, find the rate at which the brightness of the star is changing, $\frac{dB}{dt}$, when $R = 7 \times 10^5$ km and $T = 5800$ K.

**Answer:**
Here, $B$ is a function of $R$ and $T$, and both $R$ and $T$ are functions of $t$. We use the Chain Rule for multivariable functions:
$$ \frac{dB}{dt} = \frac{\partial B}{\partial R} \frac{dR}{dt} + \frac{\partial B}{\partial T} \frac{dT}{dt} $$

First, calculate the partial derivatives of $B$:
$\frac{\partial B}{\partial R} = \frac{\partial}{\partial R}(k R^2 T^4) = 2k R T^4$
$\frac{\partial B}{\partial T} = \frac{\partial}{\partial T}(k R^2 T^4) = 4k R^2 T^3$

Now, substitute these and the given rates into the Chain Rule formula:
$\frac{dB}{dt} = (2k R T^4) \left(\frac{dR}{dt}\right) + (4k R^2 T^3) \left(\frac{dT}{dt}\right)$

Substitute the given values: $R = 7 \times 10^5$ km, $T = 5800$ K, $\frac{dR}{dt} = 0.1$ km/s, $\frac{dT}{dt} = -2$ K/s.

$\frac{dB}{dt} = 2k (7 \times 10^5 \text{ km}) (5800 \text{ K})^4 (0.1 \text{ km/s}) + 4k (7 \times 10^5 \text{ km})^2 (5800 \text{ K})^3 (-2 \text{ K/s})$

Let's simplify the terms:
Term 1: $2k (7 \times 10^5)(0.1) (5800)^4 = 1.4 \times 10^5 k (5800)^4$
Term 2: $4k (49 \times 10^{10}) (-2) (5800)^3 = -392 \times 10^{10} k (5800)^3$

This calculation would involve very large numbers, but the structure of the answer is what's important for understanding the application of the Chain Rule. The question tests the setup and application of the rule for **CO1**. The final numerical answer would be expressed in terms of $k$ and the calculated powers.

**Question 4 (Related Rates - Conceptual Link):**
Consider a spherical balloon being inflated. Let $V$ be its volume and $r$ be its radius. How is the rate of change of volume related to the rate of change of the radius? Which calculus rule is fundamental to this relationship?

**Answer:**
The volume of a sphere is given by $V = \frac{4}{3}\pi r^3$.
Both $V$ and $r$ are functions of time, say $t$. We want to find how $\frac{dV}{dt}$ relates to $\frac{dr}{dt}$.
Using the Chain Rule, we differentiate $V$ with respect to $t$:
$\frac{dV}{dt} = \frac{dV}{dr} \cdot \frac{dr}{dt}$
$\frac{dV}{dr} = \frac{d}{dr}\left(\frac{4}{3}\pi r^3\right) = 4\pi r^2$ (which is the surface area of the sphere).
So, $\frac{dV}{dt} = 4\pi r^2 \frac{dr}{dt}$.

The fundamental rule used here is the **Chain Rule**. This problem is a classic example of a "related rates" problem, directly showcasing how rates of change are linked through the Chain Rule, a key aspect of **CO1**. It shows that the rate at which the volume increases is the surface area of the balloon multiplied by the rate at which the radius is increasing.
