---
title: "Limits for functions of two variables"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 1"
module: "Module 2: Functions of Several Variables: Domains and Ranges"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5bcb"
status: "completed"
scrapedAt: "2026-05-20T16:40:03.054Z"
---
Absolutely! Let's dive into the fascinating world of limits for functions of two variables. This topic is fundamental in understanding how functions behave in a multi-dimensional space, which is incredibly relevant for many areas of Information Science. Think about how complex systems in data science or AI operate – their behavior often depends on multiple interacting factors. Understanding limits is our first step to analyzing that behavior.

---

## MATHEMATICS FOR INFORMATION SCIENCE – 1
### Module 2: Functions of Several Variables: Domains and Ranges
### Topic: Limits for Functions of Two Variables

**(Aligned with CO1: Apply various concepts in calculus to linearize functions and to analyze concavity. (K3) and CO2: Calculate the limits for functions of two variables and partial derivatives of multivariable functions. (K3))**

Welcome, everyone! Today, we're going to build upon our understanding of functions by venturing into the realm of functions with *two* variables. You're all familiar with functions like $y = f(x)$ where a single input $x$ gives you a single output $y$. Now, imagine scenarios where the output depends on *two* inputs, say $z = f(x, y)$. This is where things get really interesting and applicable to real-world problems in information science.

Think about it: the performance of a machine learning model might depend on two hyperparameters (say, learning rate and regularization strength). The cost of a cloud service might depend on the amount of storage used and the CPU time consumed. In these cases, we have a function of two variables, and we want to understand what happens to the output as the inputs get close to a certain point. This is precisely what limits help us with.

### 1. What Does it Mean for Inputs to Get "Close"?

In single-variable calculus, we talked about approaching a value $c$ along the x-axis. For functions of two variables, $f(x, y)$, we're now in a 2D plane (the $xy$-plane). So, when we say the point $(x, y)$ approaches a specific point $(a, b)$, it can do so from *any direction*. This is the key difference and the source of much of the subtlety!

Imagine you're trying to find the minimum temperature in a room, and the temperature $T$ depends on your position $(x, y)$ in the room. You want to know the temperature at a specific spot $(a, b)$. You can walk towards $(a, b)$ from the north, from the east, diagonally, or any other way. If the temperature is consistently a certain value no matter how you approach that spot, then the limit exists. If the temperature varies wildly depending on how you approach, then the limit might not exist.

**Formalizing "Closeness": The Distance**

In mathematics, "closeness" is measured by distance. For two points $(x, y)$ and $(a, b)$ in the $xy$-plane, the distance between them is given by the distance formula, which is a direct extension of the Pythagorean theorem:

$$ \text{Distance} = \sqrt{(x-a)^2 + (y-b)^2} $$

So, when we say $(x, y)$ approaches $(a, b)$, we mean this distance is getting arbitrarily close to zero. We write this as:

$$ (x, y) \to (a, b) $$

### 2. The Limit of a Function of Two Variables: Definition

Now, let's define what we mean by the limit of $f(x, y)$ as $(x, y)$ approaches $(a, b)$.

**Definition:** We say that the limit of $f(x, y)$ as $(x, y)$ approaches $(a, b)$ is $L$, written as:

$$ \lim_{(x, y) \to (a, b)} f(x, y) = L $$

if, for every $\epsilon > 0$, there exists a $\delta > 0$ such that if $0 < \sqrt{(x-a)^2 + (y-b)^2} < \delta$, then $|f(x, y) - L| < \epsilon$.

*(Don't panic if this looks a bit intimidating! This is the formal $\epsilon-\delta$ definition, very similar to the one you saw for single-variable calculus. It simply states that as the input point $(x, y)$ gets arbitrarily close to $(a, b)$ (within a distance $\delta$), the output value $f(x, y)$ gets arbitrarily close to $L$ (within a distance $\epsilon$).)*

**Think of it like this:** You're aiming for a target temperature $L$ at a specific location $(a, b)$. The $\epsilon$ is how close you want the *actual temperature* to be to your target $L$. The $\delta$ is how close you need to be to the *location* $(a, b)$ to guarantee that temperature. The definition says that no matter how strict your requirement for temperature accuracy ($\epsilon$) is, you can always find a small enough zone around your target location ($\delta$) that guarantees it.

This definition is crucial for understanding continuity and for defining derivatives in higher dimensions (which we'll touch upon later as it relates to CO1 and CO2).

### 3. Evaluating Limits: The Intuitive Approach

While the $\epsilon-\delta$ definition is the bedrock, in practice, we use a more intuitive approach based on the properties of limits. Many of the limit laws you learned for functions of a single variable extend to functions of two variables.

**Key Idea: Direct Substitution**

Just like with $f(x)$, if the function $f(x, y)$ is "well-behaved" at $(a, b)$ – meaning it's defined and doesn't lead to any indeterminate forms like $0/0$ or $\infty/\infty$ – we can often find the limit by directly substituting $x=a$ and $y=b$ into the function.

**Example 1: Direct Substitution Works!**

Let's find the limit:

$$ \lim_{(x, y) \to (2, 3)} (x^2 + 3xy - 5) $$

Here, our function is $f(x, y) = x^2 + 3xy - 5$. This is a polynomial in $x$ and $y$, and polynomials are well-behaved everywhere. So, we can directly substitute $(x, y) = (2, 3)$:

$$ \text{Limit} = (2)^2 + 3(2)(3) - 5 = 4 + 18 - 5 = 17 $$

So, as $(x, y)$ gets close to $(2, 3)$, the value of the function gets close to 17.

**(This relates to CO2. If the function is a polynomial or rational function where the denominator is non-zero at the limit point, direct substitution is your go-to. It's a direct application of understanding how function values behave.)**

### 4. The Challenge: When Direct Substitution Fails

The real work begins when direct substitution leads to an indeterminate form, most commonly $\frac{0}{0}$. This is where we need to be clever. In the single-variable case, we used algebraic manipulation, factoring, or L'Hôpital's Rule. For two variables, we use similar algebraic techniques, but we also have to consider the *paths* of approach.

**The Path-Dependence Principle**

This is perhaps the most crucial concept for determining if a limit *does not* exist.

**Principle:** If we can find *two different paths* of approach to the point $(a, b)$ that yield *different limit values*, then the overall limit does not exist.

Why is this true? Because for the limit to exist, the function's value must approach a *single, unique value* $L$ regardless of the path taken. If different paths give different values, there's no single $L$ that the function is approaching.

**How do we choose paths?**

*   **Straight Lines:** Lines passing through $(a, b)$ are often the easiest. We can parameterize these lines. A common strategy is to substitute $y - b = m(x - a)$, which represents all lines through $(a, b)$ except the vertical line $x=a$.
*   **Parabolas:** Sometimes, straight lines aren't enough. Parabolas like $y - b = c(x - a)^2$ or $x - a = c(y - b)^2$ can reveal a non-existent limit.
*   **Coordinate Axes:** Approaching along the x-axis means $y=b$ and $x \to a$. Approaching along the y-axis means $x=a$ and $y \to b$.

**Example 2: Limit Does Not Exist (Using Paths)**

Let's find the limit:

$$ \lim_{(x, y) \to (0, 0)} \frac{xy}{x^2 + y^2} $$

If we try direct substitution, we get $\frac{0 \cdot 0}{0^2 + 0^2} = \frac{0}{0}$, which is indeterminate. So, we need to test paths.

*   **Path 1: Approaching along the x-axis.**
    On the x-axis, $y=0$. So, we set $y=0$ in the function:
    $$ \frac{x \cdot 0}{x^2 + 0^2} = \frac{0}{x^2} $$
    As $(x, y) \to (0, 0)$ along the x-axis, $x \to 0$ (and $x \neq 0$ since we are approaching).
    $$ \lim_{x \to 0} \frac{0}{x^2} = 0 $$
    So, along the x-axis, the limit is 0.

*   **Path 2: Approaching along the y-axis.**
    On the y-axis, $x=0$. So, we set $x=0$ in the function:
    $$ \frac{0 \cdot y}{0^2 + y^2} = \frac{0}{y^2} $$
    As $(x, y) \to (0, 0)$ along the y-axis, $y \to 0$ (and $y \neq 0$).
    $$ \lim_{y \to 0} \frac{0}{y^2} = 0 $$
    Again, along the y-axis, the limit is 0.

So far, both paths give 0. This *doesn't* mean the limit *is* 0. We need to try other paths.

*   **Path 3: Approaching along the line $y = x$.**
    Substitute $y=x$ into the function:
    $$ \frac{x \cdot x}{x^2 + x^2} = \frac{x^2}{2x^2} $$
    As $(x, y) \to (0, 0)$ along $y=x$, we have $x \to 0$ (and $x \neq 0$).
    $$ \lim_{x \to 0} \frac{x^2}{2x^2} = \lim_{x \to 0} \frac{1}{2} = \frac{1}{2} $$

Aha! We found two paths ($y=0$ and $y=x$) that give different limit values (0 and 1/2). Therefore, the overall limit:

$$ \lim_{(x, y) \to (0, 0)} \frac{xy}{x^2 + y^2} \quad \text{does not exist.} $$

**(This is a classic example that demonstrates the core idea of path dependence, crucial for CO2. Recognizing when a limit *doesn't* exist is as important as finding it.)**

**Example 3: Another "Does Not Exist" Case**

Let's consider:

$$ \lim_{(x, y) \to (0, 0)} \frac{x^2 - y^2}{x^2 + y^2} $$

Again, direct substitution gives $\frac{0}{0}$.

*   **Path 1: Along the x-axis ($y=0$).**
    $$ \lim_{x \to 0} \frac{x^2 - 0^2}{x^2 + 0^2} = \lim_{x \to 0} \frac{x^2}{x^2} = 1 $$

*   **Path 2: Along the y-axis ($x=0$).**
    $$ \lim_{y \to 0} \frac{0^2 - y^2}{0^2 + y^2} = \lim_{y \to 0} \frac{-y^2}{y^2} = -1 $$

Since we get different values (1 and -1) along different paths, the limit does not exist.

**What if all simple paths give the same limit?**

Sometimes, you might try several straight lines and even a parabola, and they all yield the same limit. This *suggests* the limit might exist, but it doesn't *prove* it. For a rigorous proof, you'd typically need to use the $\epsilon-\delta$ definition or employ a change of variables (like polar coordinates).

### 5. Proving a Limit Exists: The Struggle and the Tools

Proving a limit *does* exist when direct substitution fails is harder. You have to show that *every* path leads to the same value.

**Tool 1: Squeeze Theorem (Sandwich Theorem)**

This is a powerful tool, analogous to the single-variable case. If you can find two functions, $g(x, y)$ and $h(x, y)$, such that:
1.  $g(x, y) \le f(x, y) \le h(x, y)$ for all $(x, y)$ in a neighborhood of $(a, b)$ (except possibly at $(a, b)$ itself).
2.  $\lim_{(x, y) \to (a, b)} g(x, y) = L$
3.  $\lim_{(x, y) \to (a, b)} h(x, y) = L$

Then, $\lim_{(x, y) \to (a, b)} f(x, y) = L$.

**Example 4: Proving a Limit Exists Using Squeeze Theorem**

Let's find the limit:

$$ \lim_{(x, y) \to (0, 0)} \frac{x^2 y}{x^2 + y^2} $$

Direct substitution gives $\frac{0}{0}$. Let's try to bound the function.
We know that $x^2 \ge 0$ and $y^2 \ge 0$.
Consider the term $\frac{x^2}{x^2 + y^2}$. Since $y^2 \ge 0$, the denominator $x^2 + y^2 \ge x^2$.
If $x \neq 0$, then $\frac{x^2}{x^2 + y^2} \le \frac{x^2}{x^2} = 1$.
Also, since $x^2 \ge 0$, we have $x^2 + y^2 \ge 0$. If $(x, y) \neq (0, 0)$, then $x^2+y^2 > 0$.
So, $0 \le \frac{x^2}{x^2 + y^2} \le 1$ for $(x, y) \neq (0, 0)$.

Now, multiply by $y$:
If $y > 0$, then $0 \cdot y \le \frac{x^2 y}{x^2 + y^2} \le 1 \cdot y$, which means $0 \le \frac{x^2 y}{x^2 + y^2} \le y$.
If $y < 0$, then $0 \cdot y \ge \frac{x^2 y}{x^2 + y^2} \ge 1 \cdot y$, which means $y \le \frac{x^2 y}{x^2 + y^2} \le 0$.

To avoid dealing with the sign of $y$, let's use absolute values.
We know $0 \le \frac{x^2}{x^2 + y^2} \le 1$.
So, $\left|\frac{x^2 y}{x^2 + y^2}\right| = \frac{x^2}{x^2 + y^2} |y|$.
Since $0 \le \frac{x^2}{x^2 + y^2} \le 1$, we have:
$$ \frac{x^2}{x^2 + y^2} |y| \le 1 \cdot |y| = |y| $$
Thus, we have established:
$$ 0 \le \left|\frac{x^2 y}{x^2 + y^2}\right| \le |y| $$

Now, let's apply the Squeeze Theorem to this inequality.
Let $g(x, y) = 0$ and $h(x, y) = |y|$.
We know:
*   $\lim_{(x, y) \to (0, 0)} g(x, y) = \lim_{(x, y) \to (0, 0)} 0 = 0$.
*   $\lim_{(x, y) \to (0, 0)} h(x, y) = \lim_{(x, y) \to (0, 0)} |y| = 0$ (by direct substitution).

Since $0 \le \left|\frac{x^2 y}{x^2 + y^2}\right| \le |y|$, and both the lower and upper bounds approach 0 as $(x, y) \to (0, 0)$, by the Squeeze Theorem:

$$ \lim_{(x, y) \to (0, 0)} \left|\frac{x^2 y}{x^2 + y^2}\right| = 0 $$

And if the limit of the absolute value is 0, then the limit of the function itself is also 0.

$$ \lim_{(x, y) \to (0, 0)} \frac{x^2 y}{x^2 + y^2} = 0 $$

**(This example is vital for CO2. It shows how to rigorously prove a limit exists, often using inequalities derived from fundamental properties of the variables.)**

**Tool 2: Polar Coordinates**

This is a game-changer for limits at $(0, 0)$ in the $xy$-plane. We can convert Cartesian coordinates $(x, y)$ to polar coordinates $(r, \theta)$ using:
*   $x = r \cos \theta$
*   $y = r \sin \theta$
*   $x^2 + y^2 = r^2$

As $(x, y) \to (0, 0)$, the distance from the origin $r = \sqrt{x^2 + y^2}$ approaches 0. Importantly, as $r \to 0$, the angle $\theta$ becomes irrelevant. If the limit exists, it must be the same for all $\theta$.

**How to use it:**
1.  Substitute $x=r\cos\theta$ and $y=r\sin\theta$ into the function.
2.  Simplify the expression in terms of $r$ and $\theta$.
3.  Examine the limit as $r \to 0$. If the resulting expression no longer depends on $\theta$ and approaches a single value, then the original limit exists and is that value. If the expression *still depends on $\theta$* as $r \to 0$ (e.g., $\cos \theta$), then the limit does not exist.

**Example 5: Proving Limit Existence with Polar Coordinates**

Let's re-evaluate the first example using polar coordinates:

$$ \lim_{(x, y) \to (0, 0)} \frac{xy}{x^2 + y^2} $$

Substitute $x = r \cos \theta$ and $y = r \sin \theta$:
$$ \frac{(r \cos \theta)(r \sin \theta)}{(r \cos \theta)^2 + (r \sin \theta)^2} = \frac{r^2 \cos \theta \sin \theta}{r^2 \cos^2 \theta + r^2 \sin^2 \theta} $$
$$ = \frac{r^2 \cos \theta \sin \theta}{r^2 (\cos^2 \theta + \sin^2 \theta)} $$
Using the identity $\cos^2 \theta + \sin^2 \theta = 1$:
$$ = \frac{r^2 \cos \theta \sin \theta}{r^2 (1)} = \cos \theta \sin \theta $$
We can also write this as $\frac{1}{2} \sin(2\theta)$.

Now, we take the limit as $r \to 0$:
$$ \lim_{r \to 0} \frac{1}{2} \sin(2\theta) $$
Notice that this expression, $\frac{1}{2} \sin(2\theta)$, still depends on $\theta$. For instance:
*   If $\theta = \pi/4$, the value is $\frac{1}{2} \sin(\pi/2) = \frac{1}{2}$.
*   If $\theta = 0$, the value is $\frac{1}{2} \sin(0) = 0$.

Since the value depends on $\theta$ even as $r \to 0$, the limit does not exist. This confirms our earlier finding using straight-line paths.

**(This is a powerful technique for CO2, especially for limits at the origin. It can simplify complex expressions and clearly reveal path dependence.)**

**Example 6: Limit Exists Using Polar Coordinates**

Let's try the one we proved with the Squeeze Theorem:

$$ \lim_{(x, y) \to (0, 0)} \frac{x^2 y}{x^2 + y^2} $$

Substitute $x = r \cos \theta$ and $y = r \sin \theta$:
$$ \frac{(r \cos \theta)^2 (r \sin \theta)}{(r \cos \theta)^2 + (r \sin \theta)^2} = \frac{r^2 \cos^2 \theta \cdot r \sin \theta}{r^2 (\cos^2 \theta + \sin^2 \theta)} $$
$$ = \frac{r^3 \cos^2 \theta \sin \theta}{r^2 (1)} = r \cos^2 \theta \sin \theta $$

Now, take the limit as $r \to 0$:
$$ \lim_{r \to 0} r \cos^2 \theta \sin \theta $$
We know that $\cos^2 \theta \le 1$ and $\sin \theta$ is bounded between -1 and 1. Therefore, $|\cos^2 \theta \sin \theta| \le 1$.
So, we have:
$$ \left| r \cos^2 \theta \sin \theta \right| = |r| |\cos^2 \theta \sin \theta| \le |r| \cdot 1 = |r| $$
This gives us the inequality:
$$ 0 \le \left| r \cos^2 \theta \sin \theta \right| \le |r| $$
As $r \to 0$, both $0$ and $|r|$ approach $0$. By the Squeeze Theorem (applied to the polar form), the limit is 0.

$$ \lim_{r \to 0} r \cos^2 \theta \sin \theta = 0 $$
This confirms that the original limit is 0.

**(This again reinforces CO2. Polar coordinates are excellent for confirming limits at the origin when algebraic manipulation gets tricky.)**

### 6. Limits and Continuity

The concept of limits is directly linked to the concept of continuity for functions of two variables. A function $f(x, y)$ is continuous at a point $(a, b)$ if:

1.  $f(a, b)$ is defined.
2.  $\lim_{(x, y) \to (a, b)} f(x, y)$ exists.
3.  $\lim_{(x, y) \to (a, b)} f(x, y) = f(a, b)$.

Essentially, for a function to be continuous at a point, the limit must exist, the function must be defined at that point, and these two values must be equal. This means there are no "jumps," "holes," or "gaps" in the graph of the function at that point.

**Connection to CO1 (Linearization and Concavity):**
While this topic focuses on limits (CO2), understanding limits is a prerequisite for calculus operations like derivatives. Derivatives are what we use for linearization (approximating a function with a tangent line) and analyzing concavity. For example, the partial derivatives, which are based on limits, are used to find critical points where linearization might occur or where concavity might change. So, although we aren't calculating derivatives *here*, this is the foundational step.

### 7. Summary and Key Takeaways

Let's wrap up with some important points to remember for your exams and your understanding:

*   **The "Approach" Matters:** In functions of two variables, $(x, y)$ can approach $(a, b)$ from infinitely many directions. This is the core difference from single-variable calculus.
*   **Paths are Key for Non-Existence:** If you can find *two different paths* to $(a, b)$ that give *different limit values*, the limit *does not exist*. This is the most common way to prove a limit doesn't exist.
*   **Direct Substitution is Your First Try:** If $f(x, y)$ is a polynomial, rational function (where the denominator isn't zero), or composed of such functions, try plugging in the values first.
*   **Polar Coordinates for (0,0):** For limits as $(x, y) \to (0, 0)$, converting to polar coordinates ($x=r\cos\theta, y=r\sin\theta$) is often very effective. If the limit as $r \to 0$ depends on $\theta$, the original limit doesn't exist. If it's independent of $\theta$ and approaches a value, the limit exists and is that value.
*   **Squeeze Theorem for Existence Proof:** When direct substitution fails and paths yield the same (suspected) limit, the Squeeze Theorem is your best friend for a rigorous proof. You need to bound your function between two others whose limits are known and equal.
*   **Continuity:** The limit is the foundation for continuity. If the limit doesn't exist, the function cannot be continuous at that point.

Remember, mastering limits for functions of two variables is like learning the rules of navigation in a complex landscape. It allows us to predict how systems behave as their input parameters change, a vital skill in data analysis, machine learning, and understanding complex information systems.

---

### Sample Questions with Answers

**Question 1 (Conceptual):**
Why is it more challenging to determine the existence of a limit for a function of two variables compared to a function of a single variable?

**Answer:**
For a function of a single variable, $f(x)$, approaching a point $c$ means approaching from only two directions: from the left ($x \to c^-$) and from the right ($x \to c^+$). For a function of two variables, $f(x, y)$, approaching a point $(a, b)$ means approaching from infinitely many directions in the $xy$-plane. If the function yields different values along different paths of approach, the limit does not exist. This path dependence is the key difference and adds complexity.

**Question 2 (Exam-Oriented - Limit Does Not Exist):**
Evaluate the following limit, or state that it does not exist:
$$ \lim_{(x, y) \to (0, 0)} \frac{x^3 - y^3}{x^2 + y^2} $$

**Answer:**
We attempt direct substitution: $\frac{0^3 - 0^3}{0^2 + 0^2} = \frac{0}{0}$, which is indeterminate.
Let's test paths:

*   **Path 1: Along the x-axis ($y=0$).**
    $$ \lim_{x \to 0} \frac{x^3 - 0^3}{x^2 + 0^2} = \lim_{x \to 0} \frac{x^3}{x^2} = \lim_{x \to 0} x = 0 $$
    The limit along the x-axis is 0.

*   **Path 2: Along the line $y=x$.**
    $$ \lim_{x \to 0} \frac{x^3 - x^3}{x^2 + x^2} = \lim_{x \to 0} \frac{0}{2x^2} = 0 $$
    The limit along $y=x$ is also 0.

Since both paths give 0, let's try another path, or use polar coordinates to be more certain.

*   **Using Polar Coordinates:**
    Let $x = r \cos \theta$ and $y = r \sin \theta$.
    $$ \frac{x^3 - y^3}{x^2 + y^2} = \frac{(r \cos \theta)^3 - (r \sin \theta)^3}{(r \cos \theta)^2 + (r \sin \theta)^2} = \frac{r^3 (\cos^3 \theta - \sin^3 \theta)}{r^2 (\cos^2 \theta + \sin^2 \theta)} $$
    $$ = \frac{r^3 (\cos^3 \theta - \sin^3 \theta)}{r^2 (1)} = r (\cos^3 \theta - \sin^3 \theta) $$
    Now, take the limit as $r \to 0$:
    $$ \lim_{r \to 0} r (\cos^3 \theta - \sin^3 \theta) $$
    Since $\cos^3 \theta - \sin^3 \theta$ is bounded (it's between $-2$ and $2$, as $\cos^3\theta$ is between -1 and 1, and $-\sin^3\theta$ is between -1 and 1), the expression behaves like $r \times (\text{bounded term})$.
    $$ \left| r (\cos^3 \theta - \sin^3 \theta) \right| = |r| |\cos^3 \theta - \sin^3 \theta| $$
    Let $M$ be the maximum value of $|\cos^3 \theta - \sin^3 \theta|$. Then $|r| |\cos^3 \theta - \sin^3 \theta| \le M|r|$.
    As $r \to 0$, $M|r| \to 0$. By the Squeeze Theorem, the limit is 0.

Therefore, the limit exists and is equal to 0.

**Question 3 (Exam-Oriented - Limit Exists):**
Evaluate the limit:
$$ \lim_{(x, y) \to (0, 0)} \frac{\sin(x^2 + y^2)}{x^2 + y^2} $$

**Answer:**
This limit is of the form $\frac{0}{0}$ by direct substitution.
Let $u = x^2 + y^2$. As $(x, y) \to (0, 0)$, we have $u = x^2 + y^2 \to 0$.
The limit can be rewritten as:
$$ \lim_{u \to 0} \frac{\sin(u)}{u} $$
This is a standard single-variable limit that we know equals 1.
So, the limit exists and is 1.

**Reasoning:** This problem tests the ability to recognize a transformation to a known single-variable limit. It's a common pattern in multivariable calculus limits.

---
