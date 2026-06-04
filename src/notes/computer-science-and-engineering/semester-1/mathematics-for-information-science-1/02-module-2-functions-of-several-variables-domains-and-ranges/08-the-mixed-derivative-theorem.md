---
title: "The mixed derivative theorem"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 1"
module: "Module 2: Functions of Several Variables: Domains and Ranges"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5bd0"
status: "completed"
scrapedAt: "2026-05-20T16:40:10.309Z"
---
## Mathematics for Information Science – 1

### Module 2: Functions of Several Variables: Domains and Ranges

#### Topic: The Mixed Derivative Theorem (Clairaut's Theorem)

Welcome back, everyone! Today, we're diving into a really elegant and powerful result in multivariable calculus that helps us understand the relationship between different partial derivatives. We've been exploring functions of several variables, and you've learned how to compute partial derivatives – think of them as controlling the rate of change along specific axes, like looking at how a temperature changes as you move north or east in a room.

Now, what happens if we take a partial derivative, and then take another partial derivative with respect to a *different* variable? For instance, if we have a function $f(x, y)$, we can compute $\frac{\partial f}{\partial x}$ and then $\frac{\partial}{\partial y}\left(\frac{\partial f}{\partial x}\right)$. This second derivative is called a **mixed partial derivative**. Or, we could compute $\frac{\partial f}{\partial y}$ first and then $\frac{\partial}{\partial x}\left(\frac{\partial f}{\partial y}\right)$.

The big question is: are these two mixed partial derivatives always the same? If I first consider the rate of change of temperature with respect to easting, and then see how *that* rate of change varies as I move north, is that the same as first seeing how temperature changes with respect to northing, and then observing how *that* rate of change varies with respect to easting?

This is precisely what the **Mixed Derivative Theorem**, also famously known as **Clairaut's Theorem** or the **Schwarz Theorem**, addresses. It tells us under what conditions these mixed partial derivatives are equal. Understanding this theorem is crucial for several reasons, and it directly connects to our course outcomes, particularly **CO2: Calculate the limits for functions of two variables and partial derivatives of multivariable functions**, and indirectly to **CO3: Interpret directional derivative and solve maxima and minima of multivariable functions**, because these mixed derivatives often appear in the calculations for these higher-level concepts.

### Understanding Mixed Partial Derivatives

Let's set the stage properly. We're working with functions of at least two variables, say $f(x, y)$.

*   The **first partial derivatives** are $\frac{\partial f}{\partial x}$ (or $f_x$) and $\frac{\partial f}{\partial y}$ (or $f_y$). These tell us the instantaneous rate of change of $f$ as we move only in the $x$ direction or only in the $y$ direction, respectively, keeping the other variable constant.

*   The **second partial derivatives** arise when we differentiate again.
    *   **Pure second partial derivatives**:
        *   $\frac{\partial^2 f}{\partial x^2} = \frac{\partial}{\partial x}\left(\frac{\partial f}{\partial x}\right) = f_{xx}$ (Differentiate twice with respect to $x$)
        *   $\frac{\partial^2 f}{\partial y^2} = \frac{\partial}{\partial y}\left(\frac{\partial f}{\partial y}\right) = f_{yy}$ (Differentiate twice with respect to $y$)
    *   **Mixed second partial derivatives**:
        *   $\frac{\partial^2 f}{\partial y \partial x} = \frac{\partial}{\partial y}\left(\frac{\partial f}{\partial x}\right) = f_{xy}$ (Differentiate with respect to $x$ first, then $y$)
        *   $\frac{\partial^2 f}{\partial x \partial y} = \frac{\partial}{\partial x}\left(\frac{\partial f}{\partial y}\right) = f_{yx}$ (Differentiate with respect to $y$ first, then $x$)

Think of $f_{xy}$ as: "Start with $f$. See how it changes as $x$ changes ($f_x$). Now, see how *that rate of change* changes as $y$ changes."
And $f_{yx}$ as: "Start with $f$. See how it changes as $y$ changes ($f_y$). Now, see how *that rate of change* changes as $x$ changes."

#### An Analogy: The Temperature on a Map

Imagine you're a meteorologist analyzing the temperature distribution over a region, represented by a function $T(x, y)$, where $x$ is the east-west coordinate and $y$ is the north-south coordinate.

*   $\frac{\partial T}{\partial x}$ tells you how quickly the temperature is changing as you move east (holding your north-south position fixed).
*   $\frac{\partial T}{\partial y}$ tells you how quickly the temperature is changing as you move north (holding your east-west position fixed).

Now, consider the mixed derivative $T_{xy} = \frac{\partial}{\partial y}\left(\frac{\partial T}{\partial x}\right)$. This means:
1.  Find the rate of temperature change as you move east ($\frac{\partial T}{\partial x}$).
2.  Then, see how *that rate of change* itself changes as you move north.

For example, if $\frac{\partial T}{\partial x}$ is positive and increasing as you move north ($T_{xy} > 0$), it means that moving east is becoming "more positive" (warmer) as you go north. If $\frac{\partial T}{\partial x}$ is positive but decreasing as you move north ($T_{xy} < 0$), it means that moving east is still causing warming, but the warming effect is diminishing as you head north.

Similarly, $T_{yx} = \frac{\partial}{\partial x}\left(\frac{\partial T}{\partial y}\right)$:
1.  Find the rate of temperature change as you move north ($\frac{\partial T}{\partial y}$).
2.  Then, see how *that rate of change* itself changes as you move east.

Clairaut's Theorem is essentially asking if the "change in the east-west temperature gradient as you move north" is the same as the "change in the north-south temperature gradient as you move east."

### The Statement of the Mixed Derivative Theorem

So, what are the conditions for $f_{xy} = f_{yx}$? This isn't always true, but it is true under very common and practical conditions.

**The Mixed Derivative Theorem (Clairaut's Theorem):**
Let $f(x, y)$ be a function defined on an open disk $D$ in the $xy$-plane. If the mixed partial derivatives $f_{xy}$ and $f_{yx}$ are both continuous on $D$, then
$$f_{xy}(x, y) = f_{yx}(x, y) \quad \text{for all } (x, y) \text{ in } D.$$

**What does this mean in practice?**
*   **Open disk $D$**: This means the theorem applies to regions that don't include their boundaries. Think of a circular area on a map, but not the edge of the map itself.
*   **Both $f_{xy}$ and $f_{yx}$ are continuous**: This is the key condition! If the "mixed rates of change" themselves don't have any "jumps" or "singularities" in our region of interest, then the order of differentiation doesn't matter.

Most of the functions you encounter in typical calculus problems, especially those involving polynomials, exponentials, trigonometric functions, and their combinations, will satisfy this continuity condition. So, for a vast majority of cases, you can confidently assume that $f_{xy} = f_{yx}$. This is a huge simplification!

**Why is this important? (Connecting to CO2 & CO3)**
This theorem is extremely useful because:
1.  **Simplifies Calculation**: If you need to compute both $f_{xy}$ and $f_{yx}$, and you know the theorem applies, you only need to calculate one of them. You can choose the one that looks easier to compute!
2.  **Verification**: If you *do* compute both and they turn out to be different, it's a strong signal that either your calculations are wrong, or the condition of continuity of the mixed derivatives is *not* met in that specific region. This can help you debug your work.
3.  **Foundation for Higher Concepts**: As mentioned, these second-order derivatives are vital. For instance, when we analyze the nature of critical points (maxima, minima, saddle points) using the **second derivative test** for functions of two variables (related to **CO3**), we use the quantities $f_{xx}$, $f_{yy}$, and $f_{xy}$ (or $f_{yx}$). If $f_{xy} = f_{yx}$, the calculation of the discriminant $D = f_{xx}f_{yy} - (f_{xy})^2$ is straightforward.

**Textbook Link:** Thomas' Calculus (15th ed.) and Kreyszig's Advanced Engineering Mathematics (10th ed.) both cover this theorem thoroughly. They often provide proofs based on the definition of the derivative and the mean value theorem, emphasizing the continuity requirement.

### Examples to Illustrate

Let's look at some examples.

**Example 1: A Well-Behaved Function**

Let $f(x, y) = x^2y^3$.
Let's find the mixed partial derivatives.

First, find $f_x$:
$f_x = \frac{\partial}{\partial x}(x^2y^3) = 2xy^3$ (treating $y$ as a constant).

Now, find $f_{xy}$:
$f_{xy} = \frac{\partial}{\partial y}(f_x) = \frac{\partial}{\partial y}(2xy^3) = 2x \cdot 3y^2 = 6xy^2$ (treating $x$ as a constant).

Now, let's go the other way around.
First, find $f_y$:
$f_y = \frac{\partial}{\partial y}(x^2y^3) = x^2 \cdot 3y^2 = 3x^2y^2$ (treating $x$ as a constant).

Now, find $f_{yx}$:
$f_{yx} = \frac{\partial}{\partial x}(f_y) = \frac{\partial}{\partial x}(3x^2y^2) = 3y^2 \cdot 2x = 6xy^2$ (treating $y$ as a constant).

Observe: $f_{xy} = 6xy^2$ and $f_{yx} = 6xy^2$. They are equal!
And importantly, $f_{xy}$ and $f_{yx}$ are both continuous functions for all $(x, y)$. So, the theorem holds.

**Example 2: Another Polynomial**

Let $g(x, y) = e^x \sin(y) + x^3y$.

Find $g_x$:
$g_x = \frac{\partial}{\partial x}(e^x \sin(y) + x^3y) = e^x \sin(y) + 3x^2y$.

Find $g_{xy}$:
$g_{xy} = \frac{\partial}{\partial y}(e^x \sin(y) + 3x^2y) = e^x \cos(y) + 3x^2$.

Now, let's compute $g_y$:
$g_y = \frac{\partial}{\partial y}(e^x \sin(y) + x^3y) = e^x \cos(y) + x^3$.

Find $g_{yx}$:
$g_{yx} = \frac{\partial}{\partial x}(e^x \cos(y) + x^3) = e^x \cos(y) + 3x^2$.

Again, $g_{xy} = g_{yx}$. And both are continuous everywhere. So, the theorem applies.

**Example 3: Where the Theorem Might Not Apply (Hypothetically)**

Consider a function like this (this is a constructed example, not something you'd typically derive naturally):
Let $h(x, y) = \frac{xy^2}{x^2+y^2}$ for $(x, y) \neq (0,0)$, and $h(0,0) = 0$.

Let's try to compute the mixed partials at $(0,0)$.

First, we need $h_x(x,y)$. We can compute this for $(x,y) \neq (0,0)$ using quotient rule:
$h_x(x,y) = \frac{(y^2)(x^2+y^2) - (xy^2)(2x)}{(x^2+y^2)^2} = \frac{x^2y^2 + y^4 - 2x^2y^2}{(x^2+y^2)^2} = \frac{y^4 - x^2y^2}{(x^2+y^2)^2}$.

Now, let's compute $h_{xy}$ using this formula (this is $h_{xy}$ for $(x,y) \neq (0,0)$). This will be a bit messy, but imagine we get some complicated expression. Let's call it $A(x,y)$.

Now, let's consider $h_y(x,y)$ for $(x,y) \neq (0,0)$:
$h_y(x,y) = \frac{(2xy)(x^2+y^2) - (xy^2)(2y)}{(x^2+y^2)^2} = \frac{2x^3y + 2xy^3 - 2xy^3}{(x^2+y^2)^2} = \frac{2x^3y}{(x^2+y^2)^2}$.

Let's compute $h_{yx}$ using this formula (this is $h_{yx}$ for $(x,y) \neq (0,0)$). Let's call it $B(x,y)$.

It turns out, after a lot of algebra, that for $(x,y) \neq (0,0)$, $A(x,y) = B(x,y)$. So, the theorem holds *off* the origin.

Now, for the tricky part: what happens *at* the origin $(0,0)$?
To find $h_{xy}(0,0)$, we must use the definition of the partial derivative:
$h_{xy}(0,0) = \lim_{k \to 0} \frac{h_x(0, k) - h_x(0, 0)}{k}$.

Let's find $h_x(0, k)$: From the formula $h_x(x,y) = \frac{y^4 - x^2y^2}{(x^2+y^2)^2}$, substitute $x=0$:
$h_x(0, k) = \frac{k^4 - (0)^2k^2}{(0^2+k^2)^2} = \frac{k^4}{k^4} = 1$, for $k \neq 0$.
And $h_x(0,0)$: We need $h_x$ at $(0,0)$. Let's find $h_x(0,0)$ from the definition:
$h_x(0,0) = \lim_{h \to 0} \frac{h(h, 0) - h(0, 0)}{h} = \lim_{h \to 0} \frac{0 - 0}{h} = 0$.
So, $h_x(0,0) = 0$.

Now, back to $h_{xy}(0,0)$:
$h_{xy}(0,0) = \lim_{k \to 0} \frac{h_x(0, k) - h_x(0, 0)}{k} = \lim_{k \to 0} \frac{1 - 0}{k} = \lim_{k \to 0} \frac{1}{k}$.
This limit **does not exist**!

Now let's compute $h_{yx}(0,0)$.
$h_{yx}(0,0) = \lim_{h \to 0} \frac{h_y(h, 0) - h_y(0, 0)}{h}$.

Let's find $h_y(h, 0)$: From the formula $h_y(x,y) = \frac{2x^3y}{(x^2+y^2)^2}$, substitute $y=0$:
$h_y(h, 0) = \frac{2h^3(0)}{(h^2+0^2)^2} = \frac{0}{h^4} = 0$, for $h \neq 0$.
And $h_y(0,0)$: Let's find $h_y(0,0)$ from the definition:
$h_y(0,0) = \lim_{k \to 0} \frac{h(0, k) - h(0, 0)}{k} = \lim_{k \to 0} \frac{0 - 0}{k} = 0$.
So, $h_y(0,0) = 0$.

Now, back to $h_{yx}(0,0)$:
$h_{yx}(0,0) = \lim_{h \to 0} \frac{h_y(h, 0) - h_y(0, 0)}{h} = \lim_{h \to 0} \frac{0 - 0}{h} = \lim_{h \to 0} 0 = 0$.

So, in this case:
$h_{xy}(0,0)$ does not exist.
$h_{yx}(0,0) = 0$.

They are not equal, and in fact, $h_{xy}$ isn't even continuous at the origin because it doesn't exist there! This example highlights that the continuity of the mixed partial derivatives is crucial. The theorem does not apply at the origin for this function.

**Common Pitfall:** Students sometimes assume $f_{xy} = f_{yx}$ without checking if the continuity condition holds. While it's true for most common functions, be aware of functions with singularities or piecewise definitions, especially around the point of evaluation.

### Connecting to Information Science

How does this relate to Information Science?
*   **Modeling Complex Systems**: Many systems we model in information science, from network traffic to biological processes or financial markets, can be described by functions of multiple variables. Understanding the second-order mixed derivatives helps us grasp how changes in one parameter affect the rate of change of another parameter's influence. For example, in analyzing the performance of a machine learning algorithm, you might have parameters like learning rate and regularization strength. The mixed derivative might tell you how the rate of improvement with respect to learning rate changes as you adjust regularization.
*   **Optimization (CO3 & CO4)**: As noted, the second derivative test for optimization relies on these mixed derivatives. Finding the optimal settings for a system (e.g., tuning parameters for a database query to minimize response time) often involves finding minima or maxima of objective functions. Clairaut's Theorem simplifies the calculations needed to apply these tests.
*   **Error Analysis and Sensitivity**: If your model has parameters, you might want to know how sensitive the output is to small changes in pairs of parameters. Mixed partial derivatives capture this joint sensitivity.

### Summary and Key Takeaways

*   **Mixed partial derivatives** are obtained by differentiating a function of several variables twice, with each differentiation being with respect to a *different* variable. Notationally, $f_{xy} = \frac{\partial^2 f}{\partial y \partial x}$ and $f_{yx} = \frac{\partial^2 f}{\partial x \partial y}$.
*   **Clairaut's Theorem (Mixed Derivative Theorem)** states that if the mixed partial derivatives $f_{xy}$ and $f_{yx}$ are **continuous** on an open disk $D$, then $f_{xy} = f_{yx}$ on $D$.
*   **Why it matters**: It simplifies calculations by allowing you to compute only one of the mixed partials if the condition is met. It also serves as a diagnostic tool – unequal or non-existent mixed partials suggest a breakdown of the continuity condition.
*   **Applicability**: For most standard functions encountered in science and engineering (polynomials, exponentials, trig functions, etc.), the mixed partial derivatives are continuous everywhere, and thus, they are equal.
*   **Caution**: Be mindful of functions with singularities or piecewise definitions where the continuity condition might fail. Always verify if unsure.

Remember this: most of the time, you can trust that $f_{xy} = f_{yx}$. But understanding *why* and *when* this is true is what elevates your mathematical understanding. This is a fundamental tool for understanding the geometry and behavior of surfaces and for solving more advanced problems in optimization and analysis.

### Sample Questions and Answers

**Question 1 (Conceptual - CO2):**
State the condition under which the mixed partial derivatives $f_{xy}$ and $f_{yx}$ of a function $f(x,y)$ are equal. Explain why this theorem is important.

**Answer:**
The Mixed Derivative Theorem (Clairaut's Theorem) states that if the mixed partial derivatives $f_{xy}$ and $f_{yx}$ are both continuous on an open disk $D$, then $f_{xy}(x, y) = f_{yx}(x, y)$ for all $(x, y)$ in $D$.

This theorem is important because it significantly simplifies the calculation of second-order partial derivatives. If the continuity condition is met, we only need to compute one of the mixed partial derivatives, as the other will be identical. This saves time and reduces the chance of calculation errors. It's also a crucial tool in understanding the behavior of multivariable functions, particularly in optimization problems where second-order information is vital.

**Question 2 (Calculation & Application - CO2):**
Let the function $f(x, y) = \ln(x^2 + y^2)$. Calculate both $f_{xy}$ and $f_{yx}$ and verify that they are equal.

**Answer:**
First, we find $f_x$:
$f_x = \frac{\partial}{\partial x} (\ln(x^2 + y^2)) = \frac{1}{x^2 + y^2} \cdot \frac{\partial}{\partial x}(x^2 + y^2) = \frac{2x}{x^2 + y^2}$.

Now, we compute $f_{xy}$ by differentiating $f_x$ with respect to $y$:
$f_{xy} = \frac{\partial}{\partial y} \left(\frac{2x}{x^2 + y^2}\right)$.
Using the quotient rule, $\frac{d}{dy}\left(\frac{u}{v}\right) = \frac{v \frac{du}{dy} - u \frac{dv}{dy}}{v^2}$:
Here, $u = 2x$ (constant with respect to $y$) and $v = x^2 + y^2$.
$\frac{du}{dy} = 0$.
$\frac{dv}{dy} = 2y$.
So, $f_{xy} = \frac{(x^2 + y^2)(0) - (2x)(2y)}{(x^2 + y^2)^2} = \frac{-4xy}{(x^2 + y^2)^2}$.

Next, we find $f_y$:
$f_y = \frac{\partial}{\partial y} (\ln(x^2 + y^2)) = \frac{1}{x^2 + y^2} \cdot \frac{\partial}{\partial y}(x^2 + y^2) = \frac{2y}{x^2 + y^2}$.

Now, we compute $f_{yx}$ by differentiating $f_y$ with respect to $x$:
$f_{yx} = \frac{\partial}{\partial x} \left(\frac{2y}{x^2 + y^2}\right)$.
Using the quotient rule again, with $u = 2y$ (constant with respect to $x$) and $v = x^2 + y^2$.
$\frac{du}{dx} = 0$.
$\frac{dv}{dx} = 2x$.
So, $f_{yx} = \frac{(x^2 + y^2)(0) - (2y)(2x)}{(x^2 + y^2)^2} = \frac{-4xy}{(x^2 + y^2)^2}$.

**Verification:** We found $f_{xy} = \frac{-4xy}{(x^2 + y^2)^2}$ and $f_{yx} = \frac{-4xy}{(x^2 + y^2)^2}$. Therefore, $f_{xy} = f_{yx}$.
The function $f(x,y) = \ln(x^2+y^2)$ is defined and differentiable everywhere except at the origin $(0,0)$. The derived mixed partials $f_{xy}$ and $f_{yx}$ are rational functions whose denominators are zero only at $(0,0)$. For any open disk not containing the origin, these derivatives are continuous. Thus, the theorem holds in these regions.

**Question 3 (Conceptual - CO2 & CO3):**
Consider the second derivative test for local extrema of a function $f(x,y)$. The test involves evaluating $D = f_{xx}f_{yy} - (f_{xy})^2$ at a critical point $(a,b)$. How does Clairaut's Theorem simplify the computation of $D$?

**Answer:**
Clairaut's Theorem, by stating that $f_{xy} = f_{yx}$ under conditions of continuity, means that the term $(f_{xy})^2$ in the discriminant $D$ can be computed using either $f_{xy}$ or $f_{yx}$. This is a significant simplification because it allows us to choose whichever of the two mixed partial derivatives is easier to compute. Without this theorem, we would have to compute both and verify they are equal before proceeding, or risk an incorrect discriminant calculation if they were indeed different (indicating the continuity condition was violated). Essentially, the theorem guarantees symmetry in the second partial derivatives, allowing us to pick the most convenient path for calculation.
