---
title: "Chain rule"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 2"
module: "Module 1: Limits and continuity"
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f982b"
status: "completed"
scrapedAt: "2026-05-23T16:08:03.101Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 2
## Module 1: Limits and Continuity
### Topic: The Chain Rule

Welcome, everyone! Today, we're diving into a truly fundamental concept in differentiation: the **Chain Rule**. You've already mastered basic differentiation rules – the power rule, product rule, quotient rule – and these are fantastic for differentiating functions of a single variable directly. But in electrical science and physical science, we often encounter situations where a function's output depends on a variable, which in turn depends on *another* variable, or even several. Think about it: the voltage across a resistor might depend on the current flowing through it, and that current might be controlled by a voltage source that's changing over time. Or, the temperature of a system might depend on its position, and that position might be changing with time. This nested dependency is where the chain rule becomes our indispensable tool.

This topic is crucial because it directly supports **Course Outcome 1 (CO1): Compute the partial and total derivatives and maxima and minima of multivariable functions and to apply in engineering problems.** The chain rule is the very foundation for calculating how changes propagate through these nested systems, enabling us to understand rates of change in complex scenarios. We'll see how it helps us find derivatives of composite functions, which are rampant in our fields.

### Understanding Composite Functions: The Foundation of the Chain Rule

Before we state the rule itself, let's make sure we're crystal clear on what a **composite function** is. Imagine you have a function, let's call it $g$, that takes an input, say $x$, and gives an output $g(x)$. Now, imagine you have another function, $f$, that takes $g(x)$ as its input and gives you an output $f(g(x))$. This is a composite function, often written as $(f \circ g)(x)$, meaning $f$ of $g$ of $x$.

Think of it like a production line. Raw material $x$ goes into Machine A (function $g$), which produces an intermediate product $g(x)$. This intermediate product then becomes the input for Machine B (function $f$), which produces the final product $f(g(x))$.

**Example:**
Let $g(x) = x^2$ and $f(u) = \sin(u)$.
Then the composite function $(f \circ g)(x)$ is $f(g(x)) = f(x^2) = \sin(x^2)$.
Here, $u = g(x) = x^2$ is the "inner" function, and $f(u) = \sin(u)$ is the "outer" function.

### The Chain Rule: How Does Change Propagate?

So, the big question is: if $y$ depends on $u$, and $u$ depends on $x$, how does $y$ change with respect to $x$? The chain rule tells us exactly this. It states that the derivative of a composite function $y = f(u)$ where $u = g(x)$ is the product of the derivative of the outer function with respect to its variable ( $f'(u)$ ) and the derivative of the inner function with respect to its variable ( $g'(x)$ ).

In Leibniz notation, which is particularly intuitive for understanding the propagation of change, this is written as:

$$ \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} $$

Let's break this down.
*   $\frac{dy}{du}$: This is how much $y$ changes when $u$ changes, holding $x$ constant (implicitly, as $u$ is a function of $x$). This is the rate of change of the "outer" function with respect to its input.
*   $\frac{du}{dx}$: This is how much $u$ changes when $x$ changes. This is the rate of change of the "inner" function with respect to its input.

The chain rule tells us that the overall rate of change of $y$ with respect to $x$ is the product of these two rates. It's like saying: "To find out how quickly the final product changes when the raw material changes, multiply how quickly the second machine transforms its input (the intermediate product) by how quickly the first machine transforms the raw material into that intermediate product."

**Analogy:** Imagine you're on a train (your position $y$) whose speed depends on how fast the engine is running ($u$). The engine's speed, in turn, depends on how much fuel is being pumped into it ($x$).
*   $\frac{dy}{du}$: How fast the train moves for a given change in engine speed.
*   $\frac{du}{dx}$: How fast the engine speed changes for a given change in fuel flow.
*   $\frac{dy}{dx}$: How fast the train moves when you change the fuel flow. The chain rule says it's the product of the two speeds. A faster engine makes the train go faster, and pumping more fuel makes the engine go faster, so changing the fuel flow has a compounded effect on the train's speed.

**Formal Statement (using prime notation):**
If $y = f(u)$ and $u = g(x)$, then the composite function $y = (f \circ g)(x) = f(g(x))$ has a derivative given by:

$$ \frac{dy}{dx} = f'(g(x)) \cdot g'(x) $$

Notice that $f'(u)$ is evaluated at $u=g(x)$, which is why we write $f'(g(x))$. This is a crucial detail often missed!

### Example 1: A Straightforward Application

Let's differentiate $y = \sin(x^2)$ using the chain rule.

Here, we can identify:
*   Outer function: $f(u) = \sin(u)$
*   Inner function: $u = g(x) = x^2$

Now we find the derivatives:
*   $f'(u) = \frac{d}{du}(\sin(u)) = \cos(u)$
*   $g'(x) = \frac{d}{dx}(x^2) = 2x$

According to the chain rule, $\frac{dy}{dx} = f'(g(x)) \cdot g'(x)$.
Substituting our findings:
*   $f'(g(x)) = \cos(g(x)) = \cos(x^2)$
*   $g'(x) = 2x$

So, $\frac{dy}{dx} = \cos(x^2) \cdot 2x = 2x \cos(x^2)$.

This matches what we'd expect from a direct application of differentiation rules, but the chain rule provides a systematic way to build up to it. This is particularly important when dealing with more complex nested functions.

### Example 2: More Layers of Nesting (The Generalized Chain Rule)

What if we have more than one level of composition? For instance, $y = \sin(e^{x^2})$.
We can think of this as $y$ depends on $u$, $u$ depends on $v$, and $v$ depends on $x$.
*   Let $y = f(u) = \sin(u)$
*   Let $u = g(v) = e^v$
*   Let $v = h(x) = x^2$

The chain rule can be extended for this:

$$ \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dv} \cdot \frac{dv}{dx} $$

Let's find the individual derivatives:
*   $\frac{dy}{du} = \frac{d}{du}(\sin(u)) = \cos(u)$
*   $\frac{du}{dv} = \frac{d}{dv}(e^v) = e^v$
*   $\frac{dv}{dx} = \frac{d}{dx}(x^2) = 2x$

Now, substitute back. Remember to express everything in terms of $x$.
*   $u = e^v = e^{x^2}$
*   $\frac{dy}{du} = \cos(u) = \cos(e^{x^2})$
*   $\frac{du}{dv} = e^v = e^{x^2}$
*   $\frac{dv}{dx} = 2x$

Putting it all together:
$$ \frac{dy}{dx} = \cos(e^{x^2}) \cdot e^{x^2} \cdot 2x = 2x e^{x^2} \cos(e^{x^2}) $$

**Remember this:** When you have multiple nested functions, peel them off one by one, differentiating the outermost function first, then multiplying by the derivative of the next inner function, and so on. Always ensure your final answer is in terms of the original independent variable ($x$ in this case).

This generalized chain rule directly addresses the need for **CO1** where we deal with multivariable functions. Often, a variable might depend on time, and another variable might depend on that first variable. The chain rule allows us to find the rate of change with respect to time, which is fundamental in dynamic systems.

### The Chain Rule for Functions of Multiple Variables (Multivariable Calculus)

This is where the chain rule truly shines in our fields and directly links to **CO1**. What if $y$ is a function of several variables, say $u$ and $v$, and both $u$ and $v$ are themselves functions of a single variable $t$ (like time)? Or what if $y$ is a function of $u$ and $v$, and $u$ and $v$ are functions of $x$ and $y$?

Let's start with the simpler case: $y$ is a function of $u$ and $v$, and both $u$ and $v$ are functions of $t$.
So, $y = f(u, v)$, where $u = g(t)$ and $v = h(t)$. We want to find $\frac{dy}{dt}$.

The key idea is that the total change in $y$ with respect to $t$ is the sum of the changes in $y$ caused by the change in $u$ and the change in $y$ caused by the change in $v$.

*   The change in $y$ due to $u$ changing is $\frac{\partial y}{\partial u} \cdot \frac{du}{dt}$. (We use partial derivative $\frac{\partial y}{\partial u}$ because $y$ depends on more than just $u$).
*   The change in $y$ due to $v$ changing is $\frac{\partial y}{\partial v} \cdot \frac{dv}{dt}$.

Adding these contributions gives us the total derivative of $y$ with respect to $t$:

$$ \frac{dy}{dt} = \frac{\partial y}{\partial u} \frac{du}{dt} + \frac{\partial y}{\partial v} \frac{dv}{dt} $$

This is the **Chain Rule for functions of several variables, with each variable depending on a single independent variable**.

**Analogy:** Imagine the temperature $T$ of a metal rod at a certain point. This temperature might depend on the material's density $\rho$ and its specific heat capacity $c$, so $T = f(\rho, c)$. Now, suppose the density $\rho$ is changing over time $t$ due to thermal expansion, say $\rho = g(t)$, and the specific heat capacity $c$ is also changing with temperature itself, $c = h(T)$ (this is a slightly circular dependency but illustrates the point, or let's make it simpler: $c=k(t)$ for some other time-dependent factor). A more realistic scenario for physics might be the speed of sound $v_s$ in a gas, which depends on temperature $T$ and pressure $P$, so $v_s = f(T, P)$. If both $T$ and $P$ are changing with time $t$, then $v_s$ is also changing with time.

Let's use a physics example: Consider a particle's kinetic energy $K$.
$K = \frac{1}{2}mv^2$, where $m$ is mass and $v$ is velocity.
Suppose the mass $m$ is changing with time $t$ (e.g., a rocket shedding fuel), $m = m(t)$.
And the velocity $v$ is also changing with time $t$, $v = v(t)$.
We want to find $\frac{dK}{dt}$.

Here, $K$ is a function of $m$ and $v$, and both $m$ and $v$ are functions of $t$.
$K = f(m, v) = \frac{1}{2}mv^2$
$m = g(t)$
$v = h(t)$

Applying the chain rule:
$$ \frac{dK}{dt} = \frac{\partial K}{\partial m} \frac{dm}{dt} + \frac{\partial K}{\partial v} \frac{dv}{dt} $$

Let's compute the derivatives:
*   $\frac{\partial K}{\partial m} = \frac{\partial}{\partial m} (\frac{1}{2}mv^2) = \frac{1}{2}v^2$
*   $\frac{\partial K}{\partial v} = \frac{\partial}{\partial v} (\frac{1}{2}mv^2) = \frac{1}{2}m(2v) = mv$
*   $\frac{dm}{dt}$ is the rate of change of mass with respect to time.
*   $\frac{dv}{dt}$ is the acceleration, $a$.

So, $\frac{dK}{dt} = (\frac{1}{2}v^2) \frac{dm}{dt} + (mv) a$.
This equation tells us how the kinetic energy changes over time. It's not just due to acceleration ($mv \cdot a$, which is the standard $F \cdot v$ if $F=ma$ and we ignore mass change), but also due to the change in mass itself $(\frac{1}{2}v^2) \frac{dm}{dt}$. This latter term is important for rockets, for instance! This is a perfect example of applying the chain rule for **CO1**.

### Example 3: Differentiating Implicitly with the Chain Rule

Sometimes, we are given an equation relating variables where it's hard to isolate one variable explicitly. The chain rule helps us find derivatives in such cases.

Consider the equation of a circle: $x^2 + y^2 = 25$. We want to find $\frac{dy}{dx}$.
We can treat $y$ as an implicit function of $x$, so $y=y(x)$.
Differentiate both sides of the equation with respect to $x$:

$$ \frac{d}{dx}(x^2 + y^2) = \frac{d}{dx}(25) $$

The derivative of a sum is the sum of derivatives:
$$ \frac{d}{dx}(x^2) + \frac{d}{dx}(y^2) = 0 $$

We know $\frac{d}{dx}(x^2) = 2x$.
For $\frac{d}{dx}(y^2)$, we have a composite function: $y^2$ is the outer function, and $y=y(x)$ is the inner function. Using the chain rule:
$$ \frac{d}{dx}(y^2) = \frac{d}{dy}(y^2) \cdot \frac{dy}{dx} = 2y \frac{dy}{dx} $$

Substituting back into our differentiated equation:
$$ 2x + 2y \frac{dy}{dx} = 0 $$

Now, we solve for $\frac{dy}{dx}$:
$$ 2y \frac{dy}{dx} = -2x $$
$$ \frac{dy}{dx} = -\frac{2x}{2y} = -\frac{x}{y} $$

This is the derivative of $y$ with respect to $x$ for the circle. It's important to note that the derivative is expressed in terms of both $x$ and $y$, which is common with implicit differentiation. This concept is fundamental for understanding how rates of change behave in systems described by implicit equations, often seen in circuit analysis or physical constraints.

### Chain Rule for Functions of Several Variables (Multivariable, Multiple Independent Variables)

Now, let's consider a more general scenario that is extremely common in physics and engineering. Suppose $z$ is a function of $x$ and $y$, and both $x$ and $y$ are themselves functions of other variables, say $s$ and $t$.
So, $z = f(x, y)$, where $x = g(s, t)$ and $y = h(s, t)$.
We want to find how $z$ changes with respect to $s$ (i.e., $\frac{\partial z}{\partial s}$) and how $z$ changes with respect to $t$ (i.e., $\frac{\partial z}{\partial t}$).

The logic is an extension of the previous case. To find $\frac{\partial z}{\partial s}$, we sum up the contributions from the change in $x$ due to $s$, and the change in $y$ due to $s$.

*   Change in $z$ due to $x$ changing with $s$: $\frac{\partial z}{\partial x} \cdot \frac{\partial x}{\partial s}$
*   Change in $z$ due to $y$ changing with $s$: $\frac{\partial z}{\partial y} \cdot \frac{\partial y}{\partial s}$

Summing these gives us the partial derivative of $z$ with respect to $s$:

$$ \frac{\partial z}{\partial s} = \frac{\partial z}{\partial x} \frac{\partial x}{\partial s} + \frac{\partial z}{\partial y} \frac{\partial y}{\partial s} $$

Similarly, for the partial derivative of $z$ with respect to $t$:

$$ \frac{\partial z}{\partial t} = \frac{\partial z}{\partial x} \frac{\partial x}{\partial t} + \frac{\partial z}{\partial y} \frac{\partial y}{\partial t} $$

These formulas are crucial for **CO1**. They allow us to analyze how a system's output ($z$) changes when multiple input parameters ($s$ and $t$) are varied, even when the relationships are complex and indirect.

**Example 4: A Practical Physics Scenario**
Consider the pressure $P$ in a gas. According to the ideal gas law, $P = \frac{nRT}{V}$, where $n$ is the number of moles, $R$ is the ideal gas constant, $T$ is temperature, and $V$ is volume.
Let's say we're interested in how the pressure changes in a container where the temperature $T$ and volume $V$ are changing over time $t$. Suppose the temperature is controlled by an external heater that varies sinusoidally with time, and the volume is changing due to thermal expansion.
We can write $T = T(t)$ and $V = V(t)$. We want to find $\frac{dP}{dt}$.

Here, $P$ is a function of $T$ and $V$, and both $T$ and $V$ are functions of $t$.
$P = f(T, V) = \frac{nRT}{V}$ (assuming $n$ and $R$ are constant).
$T = g(t)$
$V = h(t)$

Applying the chain rule:
$$ \frac{dP}{dt} = \frac{\partial P}{\partial T} \frac{dT}{dt} + \frac{\partial P}{\partial V} \frac{dV}{dt} $$

Let's compute the derivatives:
*   $\frac{\partial P}{\partial T} = \frac{\partial}{\partial T} (\frac{nRT}{V}) = \frac{nR}{V}$
*   $\frac{\partial P}{\partial V} = \frac{\partial}{\partial V} (\frac{nRT}{V}) = nRT (-\frac{1}{V^2}) = -\frac{nRT}{V^2}$
*   $\frac{dT}{dt}$ is the rate of change of temperature with respect to time.
*   $\frac{dV}{dt}$ is the rate of change of volume with respect to time.

Substituting these into the chain rule formula:
$$ \frac{dP}{dt} = \left(\frac{nR}{V}\right) \frac{dT}{dt} + \left(-\frac{nRT}{V^2}\right) \frac{dV}{dt} $$

This formula elegantly captures how pressure changes in this dynamic system. The first term shows how pressure increases with temperature (and thus with $\frac{dT}{dt}$), and the second term shows how pressure decreases as volume increases (and thus with $\frac{dV}{dt}$). This is exactly the kind of analysis we perform in thermodynamics and fluid mechanics, directly supporting **CO1**.

**Textbook References:**
*   **Anton, Biven, Davis (12th Ed.)**: Chapter 4, Section 4.10 (The Chain Rule) for single-variable calculus and Chapter 14, Section 14.4 (The Chain Rule) for multivariable calculus. They provide rigorous proofs and a good range of examples.
*   **Thomas' Calculus (15th Ed.)**: Chapter 3, Section 3.5 (The Chain Rule) and Chapter 12, Section 12.4 (The Chain Rule) for multivariable calculus. Their explanations are very clear and build intuition well.
*   **Stewart (Essential Calculus, 2nd Ed.)**: Chapter 4, Section 4.2 (The Chain Rule) and Chapter 15, Section 15.4 (The Chain Rule) for multivariable calculus. Stewart is known for his relatable examples and clear explanations.
*   **Kreyszig (10th Ed.)**: Chapter 1, Section 1.7 (The Chain Rule) and Chapter 12, Section 12.5 (The Chain Rule) for multivariable calculus. Kreyszig is thorough and excellent for engineering applications.
*   **Bird (Higher Engineering Mathematics, 9th Ed.)**: Chapter 12, Section 12.2 (Chain Rule) and Chapter 14, Section 14.3 (Chain Rule for Partial Derivatives). Bird's books are gold for practical engineering math.
*   **Ramana (39th Ed.)**: Chapter 8, Section 8.7 (Chain Rule) and Chapter 14, Section 14.4 (Chain Rule for Partial Derivatives). Ramana's book is comprehensive and often covers topics from multiple angles.

All these references will offer more detailed explanations and a wealth of practice problems. The core idea, however, remains consistent: the chain rule is about the propagation of rates of change through composite functions.

### Summary of Key Concepts:

*   **Composite Function:** A function within another function, like $f(g(x))$.
*   **Chain Rule (Single Variable):** If $y=f(u)$ and $u=g(x)$, then $\frac{dy}{dx} = f'(g(x)) \cdot g'(x)$ or $\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$.
*   **Chain Rule (Multivariable, Single Independent Variable):** If $y = f(u, v)$ with $u=g(t)$ and $v=h(t)$, then $\frac{dy}{dt} = \frac{\partial y}{\partial u} \frac{du}{dt} + \frac{\partial y}{\partial v} \frac{dv}{dt}$.
*   **Chain Rule (Multivariable, Multiple Independent Variables):** If $z = f(x, y)$ with $x=g(s, t)$ and $y=h(s, t)$, then $\frac{\partial z}{\partial s} = \frac{\partial z}{\partial x} \frac{\partial x}{\partial s} + \frac{\partial z}{\partial y} \frac{\partial y}{\partial s}$ and $\frac{\partial z}{\partial t} = \frac{\partial z}{\partial x} \frac{\partial x}{\partial t} + \frac{\partial z}{\partial y} \frac{\partial y}{\partial t}$.
*   **Implicit Differentiation:** A direct application of the chain rule where we treat dependent variables as functions of independent variables without explicitly solving for them.

Mastering the chain rule is a significant step in your journey. It's the gateway to understanding rates of change in dynamic systems, optimization problems, and many other areas within electrical and physical sciences. Keep practicing, and don't hesitate to visualize the nested dependencies!

---

### Sample Questions with Answers

**Conceptual Question 1:**
Explain the intuition behind the chain rule using a simple analogy. Why is it called the "chain" rule?

**Answer:**
The intuition behind the chain rule is about how changes "chain" together. Imagine a series of connected gears. The speed of the last gear depends on the speed of the first gear, but it also depends on the number of teeth on each intermediate gear. The chain rule tells us how the rate of change of the final output (last gear's speed) is affected by the rate of change of the initial input (first gear's speed), through all the intermediate steps. It's called the "chain" rule because the overall rate of change is a product of the rates of change of each link (or function) in the chain of dependency. For example, if $y$ depends on $u$, and $u$ depends on $x$, the way $y$ changes with $x$ is found by multiplying how $y$ changes with $u$ by how $u$ changes with $x$. This multiplication links the two rates, forming a chain.

**Conceptual Question 2:**
In the multivariable chain rule $\frac{\partial z}{\partial s} = \frac{\partial z}{\partial x} \frac{\partial x}{\partial s} + \frac{\partial z}{\partial y} \frac{\partial y}{\partial s}$, why do we use partial derivatives ($\frac{\partial z}{\partial x}$, $\frac{\partial x}{\partial s}$) instead of total derivatives?

**Answer:**
We use partial derivatives because, in the context of multivariable functions, we are considering how one variable changes while *holding other variables constant*. For instance, $\frac{\partial z}{\partial x}$ means we are looking at the rate of change of $z$ with respect to $x$ while keeping $y$ constant. Similarly, $\frac{\partial x}{\partial s}$ signifies the rate of change of $x$ with respect to $s$ while keeping $y$ (if $x$ depends on both $s$ and $t$) or any other independent variables constant. These rates are then multiplied by the corresponding rates of change of the intermediate variables with respect to the target independent variable ($s$ in this case), summing up all the contributions to the total change in $z$ due to the change in $s$.

**Application/Exam-Oriented Question 1:**
Find the derivative of $f(x) = \cos(e^{3x^2})$ with respect to $x$.

**Solution:**
This is a composite function of the form $f(x) = F(G(H(x)))$, where:
*   Outer function: $F(u) = \cos(u)$
*   Middle function: $u = G(v) = e^v$
*   Inner function: $v = H(x) = 3x^2$

We apply the chain rule iteratively: $f'(x) = F'(G(H(x))) \cdot G'(H(x)) \cdot H'(x)$.

1.  Find the derivatives of each component:
    *   $F'(u) = \frac{d}{du}(\cos(u)) = -\sin(u)$
    *   $G'(v) = \frac{d}{dv}(e^v) = e^v$
    *   $H'(x) = \frac{d}{dx}(3x^2) = 6x$

2.  Substitute back:
    *   $F'(G(H(x))) = -\sin(e^{3x^2})$
    *   $G'(H(x)) = e^{3x^2}$
    *   $H'(x) = 6x$

3.  Multiply them together:
    $f'(x) = -\sin(e^{3x^2}) \cdot e^{3x^2} \cdot 6x$
    $f'(x) = -6x e^{3x^2} \sin(e^{3x^2})$

**Exam Tip:** When differentiating nested functions, break them down carefully. Identify the innermost function first and work your way outwards, multiplying derivatives at each step. Always ensure the argument of the derivative of the outer function is the *entire* inner function.

**Application/Exam-Oriented Question 2:**
Suppose the temperature $T$ at a point $(x, y)$ in a metal plate is given by $T(x, y) = 100e^{-(x^2+y^2)/2}$. An ant is crawling along a path described by $x = 2t$ and $y = 3t$. Find the rate at which the temperature is changing with respect to time $t$ along the ant's path.

**Solution:**
We are given $T = T(x, y)$, where $x = x(t)$ and $y = y(t)$. We need to find $\frac{dT}{dt}$.
This is a case of the multivariable chain rule where $T$ is a function of two variables ($x, y$), and both $x$ and $y$ are functions of a single variable ($t$). The formula is:
$$ \frac{dT}{dt} = \frac{\partial T}{\partial x} \frac{dx}{dt} + \frac{\partial T}{\partial y} \frac{dy}{dt} $$

1.  Calculate the partial derivatives of $T$ with respect to $x$ and $y$:
    $T(x, y) = 100e^{-(x^2+y^2)/2}$
    *   $\frac{\partial T}{\partial x} = 100 \cdot e^{-(x^2+y^2)/2} \cdot \frac{d}{dx}\left(-\frac{x^2+y^2}{2}\right)$
        $\frac{\partial T}{\partial x} = 100 e^{-(x^2+y^2)/2} \cdot \left(-\frac{2x}{2}\right) = -100x e^{-(x^2+y^2)/2}$
    *   $\frac{\partial T}{\partial y} = 100 \cdot e^{-(x^2+y^2)/2} \cdot \frac{d}{dy}\left(-\frac{x^2+y^2}{2}\right)$
        $\frac{\partial T}{\partial y} = 100 e^{-(x^2+y^2)/2} \cdot \left(-\frac{2y}{2}\right) = -100y e^{-(x^2+y^2)/2}$

2.  Calculate the derivatives of $x$ and $y$ with respect to $t$:
    $x(t) = 2t \implies \frac{dx}{dt} = 2$
    $y(t) = 3t \implies \frac{dy}{dt} = 3$

3.  Substitute these into the chain rule formula:
    $\frac{dT}{dt} = \left(-100x e^{-(x^2+y^2)/2}\right) (2) + \left(-100y e^{-(x^2+y^2)/2}\right) (3)$
    $\frac{dT}{dt} = -200x e^{-(x^2+y^2)/2} - 300y e^{-(x^2+y^2)/2}$

4.  We need to express the result in terms of $t$. Substitute $x=2t$ and $y=3t$:
    $x^2 + y^2 = (2t)^2 + (3t)^2 = 4t^2 + 9t^2 = 13t^2$
    $\frac{dT}{dt} = -200(2t) e^{-13t^2/2} - 300(3t) e^{-13t^2/2}$
    $\frac{dT}{dt} = -400t e^{-13t^2/2} - 900t e^{-13t^2/2}$
    $\frac{dT}{dt} = (-400t - 900t) e^{-13t^2/2}$
    $\frac{dT}{dt} = -1300t e^{-13t^2/2}$

**Exam Tip:** For problems involving paths or rates of change in physical systems, always identify the primary function and how its variables depend on the parameter of interest (often time). Setting up the correct chain rule formula is the first critical step. Then, carefully compute all necessary partial and ordinary derivatives. Finally, ensure the answer is expressed in terms of the correct variable.

**Application/Exam-Oriented Question 3:**
Use implicit differentiation to find $\frac{dy}{dx}$ for the equation $x^3 + y^3 = 6xy$.

**Solution:**
We are given an equation where $y$ is implicitly defined as a function of $x$. We differentiate both sides of the equation with respect to $x$, treating $y$ as $y(x)$ and using the chain rule where necessary.

Differentiate: $\frac{d}{dx}(x^3 + y^3) = \frac{d}{dx}(6xy)$

Left side:
*   $\frac{d}{dx}(x^3) = 3x^2$
*   For $\frac{d}{dx}(y^3)$, we use the chain rule: $\frac{d}{dy}(y^3) \cdot \frac{dy}{dx} = 3y^2 \frac{dy}{dx}$
So, the left side derivative is $3x^2 + 3y^2 \frac{dy}{dx}$.

Right side:
*   We need to use the product rule for $6xy$: $\frac{d}{dx}(6xy) = 6 \left( \frac{d}{dx}(x) \cdot y + x \cdot \frac{d}{dx}(y) \right)$
    $= 6 \left( 1 \cdot y + x \cdot \frac{dy}{dx} \right)$
    $= 6y + 6x \frac{dy}{dx}$

Now, equate the derivatives of both sides:
$3x^2 + 3y^2 \frac{dy}{dx} = 6y + 6x \frac{dy}{dx}$

Now, rearrange to solve for $\frac{dy}{dx}$:
Group terms with $\frac{dy}{dx}$ on one side and other terms on the other:
$3y^2 \frac{dy}{dx} - 6x \frac{dy}{dx} = 6y - 3x^2$

Factor out $\frac{dy}{dx}$:
$(3y^2 - 6x) \frac{dy}{dx} = 6y - 3x^2$

Finally, isolate $\frac{dy}{dx}$:
$\frac{dy}{dx} = \frac{6y - 3x^2}{3y^2 - 6x}$

We can simplify this by dividing the numerator and denominator by 3:
$\frac{dy}{dx} = \frac{2y - x^2}{y^2 - 2x}$

**Exam Tip:** Implicit differentiation is a direct application of the chain rule. Always remember to apply the chain rule to terms involving the dependent variable ($y$). The product and quotient rules may also be needed, as seen here. The final step is always algebraic manipulation to isolate $\frac{dy}{dx}$. Common errors include forgetting the chain rule on $y$ terms or misapplying product/quotient rules.
