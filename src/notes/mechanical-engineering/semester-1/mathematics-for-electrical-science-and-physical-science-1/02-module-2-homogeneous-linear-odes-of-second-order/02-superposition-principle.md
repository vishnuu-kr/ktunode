---
title: "Superposition principle"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND 
PHYSICAL  SCIENCE - 1"
module: "Module 2: Homogeneous linear ODEs of second order"
branch: "Mechanical Engineering"
semester: 1
topicId: "68bd1edefeb4799d95e83548"
status: "completed"
scrapedAt: "2026-05-20T17:39:18.662Z"
---
# Mathematics for Electrical Science and Physical Science - 1

## Module 2: Homogeneous Linear ODEs of Second Order

### Topic: The Superposition Principle

Welcome, everyone! Today, we're diving into a fundamental concept that will unlock our ability to solve many problems involving second-order linear homogeneous ordinary differential equations (ODEs). This principle, known as the **Superposition Principle**, is not just a mathematical curiosity; it's a cornerstone that directly helps us achieve **Course Outcome 2 (CO2)** – solving homogeneous linear differential equations with constant coefficients. We'll also see how it subtly relates to the idea of linear systems, which touches upon **Course Outcome 1 (CO1)** as we start to think about how different solutions combine.

So, let's get started!

### What is a Homogeneous Linear ODE of Second Order?

Before we talk about superposition, let's quickly recap what we're dealing with. A homogeneous linear ODE of second order looks like this:

$a y'' + b y' + c y = 0$

Here, $y''$ is the second derivative of $y$ with respect to some variable (often time, $t$, or position, $x$), $y'$ is the first derivative, and $a$, $b$, and $c$ are constants. The "homogeneous" part is key – the right-hand side is zero. And "linear" means $y$ and its derivatives appear only to the first power, and there are no products of $y$ or its derivatives.

Think of this equation as describing systems where the rate of change of something is proportional to its current state and its rate of change, but without any external forcing or driving influence. Examples abound: the motion of a simple pendulum (under small angle approximation), the current in a simple RLC circuit without a voltage source, or the decay of a radioactive substance.

### The Heart of the Matter: What is the Superposition Principle?

Now, imagine we have found *one* solution to our homogeneous ODE, let's call it $y_1(x)$. And then, we discover *another* solution, $y_2(x)$. What happens if we add these two solutions together? Or what if we multiply one of them by a constant, say $k$? The Superposition Principle tells us precisely what to expect.

**The Superposition Principle states that if $y_1(x)$ and $y_2(x)$ are solutions to a homogeneous linear ODE, then any linear combination of these solutions, $c_1 y_1(x) + c_2 y_2(x)$ (where $c_1$ and $c_2$ are arbitrary constants), is also a solution to the same ODE.**

This is a truly powerful idea! It means that the set of all solutions to a homogeneous linear ODE forms a *vector space* (this connects to **CO1**). The operations of addition and scalar multiplication, which are fundamental to vector spaces, preserve the property of being a solution.

### Why Does This Work? Let's See the Proof!

The proof is quite elegant and shows exactly *why* this principle holds. Let's assume we have our ODE:

$a y'' + b y' + c y = 0$

We are given that $y_1$ is a solution, so it satisfies:

$a y_1'' + b y_1' + c y_1 = 0 \quad (*)$

And similarly, $y_2$ is a solution, so:

$a y_2'' + b y_2' + c y_2 = 0 \quad (**)$

Now, let's consider a linear combination of these solutions, say $y(x) = c_1 y_1(x) + c_2 y_2(x)$. We need to check if this new function $y(x)$ also satisfies the ODE. To do this, we need its first and second derivatives:

$y'(x) = c_1 y_1'(x) + c_2 y_2'(x)$
$y''(x) = c_1 y_1''(x) + c_2 y_2''(x)$

(Remember, differentiation is a linear operation – a key concept from calculus!)

Now, let's substitute $y$, $y'$, and $y''$ into the ODE:

$a y'' + b y' + c y = a (c_1 y_1'' + c_2 y_2'') + b (c_1 y_1' + c_2 y_2') + c (c_1 y_1 + c_2 y_2)$

Let's rearrange this expression by grouping terms involving $c_1$ and $c_2$:

$= (a c_1 y_1'' + b c_1 y_1' + c c_1 y_1) + (a c_2 y_2'' + b c_2 y_2' + c c_2 y_2)$

Now, we can factor out $c_1$ from the first parenthesis and $c_2$ from the second:

$= c_1 (a y_1'' + b y_1' + c y_1) + c_2 (a y_2'' + b y_2' + c y_2)$

Look what we have here! The terms in the parentheses are exactly the left-hand sides of equations $(*)$ and $(**)$. Since $y_1$ and $y_2$ are solutions, we know these expressions are equal to zero:

$= c_1 (0) + c_2 (0)$
$= 0 + 0$
$= 0$

Aha! So, our linear combination $y(x) = c_1 y_1(x) + c_2 y_2(x)$ also satisfies the ODE $a y'' + b y' + c y = 0$.

**This is the Superposition Principle in action!** Any weighted sum of solutions is itself a solution. This is why it's so central to solving these types of ODEs.

### A Practical Analogy: Traffic Flow

Let's try to make this relatable. Imagine a system where things are happening in a "linear" fashion, and there's no external "push."

Consider a simple traffic intersection. Let's say we are modeling the number of cars passing through. If you have two independent traffic light patterns, Pattern A, which results in a certain flow of cars over time, and Pattern B, which results in a different flow. If the system (the intersection and its governing rules) is linear and homogeneous (meaning, no outside interference like a sudden parade), then if Pattern A leads to a valid traffic flow, and Pattern B leads to a valid traffic flow, any combination of these patterns will also lead to a valid traffic flow. For instance, if Pattern A lets 100 cars through in an hour and Pattern B lets 150 cars through, a "mix" of 50% of Pattern A and 50% of Pattern B might let $0.5 \times 100 + 0.5 \times 150 = 50 + 75 = 125$ cars through. This analogy isn't perfect, as traffic can get complicated, but the core idea is that if individual behaviors are valid solutions, their combined, scaled behaviors are also valid.

For ODEs, the "behavior" is the function $y(x)$ and how it changes.

### The Importance of the "Linear" and "Homogeneous" Conditions

It's crucial to remember that the Superposition Principle *only* applies to **linear homogeneous** ODEs.

*   **Linearity:** If our ODE had terms like $y^2$, $y y'$, or $\sin(y)$, the principle would break down. For example, if $y_1$ and $y_2$ were solutions to $y'' + y^2 = 0$, their sum $y_1 + y_2$ might not be a solution because $(y_1+y_2)'' + (y_1+y_2)^2$ would involve cross-terms like $2y_1 y_2$ and $y_1^2+y_2^2$, which wouldn't necessarily sum to zero.
*   **Homogeneity:** If the ODE was $a y'' + b y' + c y = f(x)$, where $f(x)$ is not zero, then superposition would also not hold for $c_1 y_1 + c_2 y_2$ with respect to the *original* ODE. However, it *does* hold for the *homogeneous part* of the equation. This is a key idea when we move to non-homogeneous equations (which is a topic for later in this module and the course).

### General Solutions and Basis Solutions

The Superposition Principle allows us to build the *general solution* of a homogeneous linear ODE. For a second-order ODE, the general solution can be expressed as a linear combination of two *linearly independent* solutions. Let's call these $y_1(x)$ and $y_2(x)$.

So, the general solution is:

$y(x) = c_1 y_1(x) + c_2 y_2(x)$

where $c_1$ and $c_2$ are arbitrary constants. These two linearly independent solutions, $y_1$ and $y_2$, essentially form a "basis" for the solution space, much like basis vectors in linear algebra form a basis for a vector space (again, connecting to **CO1**). Any solution can be "represented" as a combination of these basis solutions.

**How do we find these basis solutions?** That's where techniques like finding the characteristic equation come in, which we'll cover in the next section. The Superposition Principle guarantees that once we find *any* two linearly independent solutions, we can construct the general solution.

### Examples

Let's look at a simple example to solidify this.

Consider the ODE: $y'' - y = 0$.

We can verify that $y_1(x) = e^x$ is a solution:
$y_1'(x) = e^x$, $y_1''(x) = e^x$.
Substituting into the ODE: $e^x - e^x = 0$. Yes, it works!

Also, $y_2(x) = e^{-x}$ is a solution:
$y_2'(x) = -e^{-x}$, $y_2''(x) = e^{-x}$.
Substituting into the ODE: $e^{-x} - e^{-x} = 0$. This also works!

Now, according to the Superposition Principle, any linear combination of $y_1$ and $y_2$ must also be a solution. So, $y(x) = c_1 e^x + c_2 e^{-x}$ must be a solution for any constants $c_1$ and $c_2$.

Let's test a specific combination, say $y_3(x) = 2y_1(x) + 3y_2(x) = 2e^x + 3e^{-x}$.
$y_3'(x) = 2e^x - 3e^{-x}$
$y_3''(x) = 2e^x + 3e^{-x}$

Substituting into $y'' - y = 0$:
$(2e^x + 3e^{-x}) - (2e^x + 3e^{-x}) = 0$. It holds!

What if we choose $c_1=1$ and $c_2=0$? We get $y(x)=e^x$, which is $y_1$.
What if we choose $c_1=0$ and $c_2=1$? We get $y(x)=e^{-x}$, which is $y_2$.
What if we choose $c_1=1$ and $c_2=1$? We get $y(x)=e^x + e^{-x}$. This is $2\cosh(x)$, which is also a valid solution.

The general solution to $y'' - y = 0$ is indeed $y(x) = c_1 e^x + c_2 e^{-x}$. The functions $e^x$ and $e^{-x}$ are linearly independent, and they form a basis for the solution space.

**Remember this:** Once you find *two* linearly independent solutions to a homogeneous linear ODE of second order, you have found *all* possible solutions by forming their linear combination.

### Connecting to Course Outcomes

*   **CO2: Solve homogeneous and non-homogeneous linear differential equation with constant coefficients.**
    The Superposition Principle is absolutely fundamental to achieving this outcome. It's the tool that allows us to combine basic building blocks (linearly independent solutions) to construct the complete set of solutions for homogeneous ODEs. Later, understanding superposition for homogeneous parts will be crucial for solving non-homogeneous ones.

*   **CO1: Solve systems of linear equations and diagonalize matrices.**
    While this topic directly addresses ODEs, the underlying structure it reveals is very "linear algebra-like." The set of solutions forms a vector space. The linearly independent solutions are like basis vectors. This connection helps build a deeper understanding of how linear algebra principles permeate various areas of mathematics and science, including differential equations.

### Common Pitfalls and Exam Tips

*   **Don't forget "homogeneous":** The principle applies to $ay'' + by' + cy = 0$. If there's a non-zero function on the right side, you can't directly apply superposition to the entire equation.
*   **Linear independence is crucial:** You need *two* solutions that are not just multiples of each other. If $y_1$ and $y_2$ are linearly dependent (e.g., $y_2 = 5 y_1$), then $c_1 y_1 + c_2 y_2 = c_1 y_1 + c_2 (5 y_1) = (c_1 + 5c_2) y_1$. This is just a multiple of $y_1$, and you only have one fundamental solution. We'll learn how to check for linear independence using the Wronskian later.
*   **The constants $c_1, c_2$ are arbitrary:** Until you are given initial conditions (like $y(0)=y_0$ and $y'(0)=v_0$), these constants can be anything. They are determined by the specific physical or electrical scenario the ODE is modeling.

### Summary

The Superposition Principle for homogeneous linear ODEs of second order is a testament to the elegance and power of linearity. It tells us that if individual components are solutions, then their scaled and summed combinations are also solutions. This principle is our gateway to understanding the general solution structure, which is built from a set of linearly independent "basis" solutions.

This is a concept that you will use constantly as we move forward. Make sure you grasp the "why" behind it through the proof, and the "what" through the examples.

***

## Sample Questions with Answers

**Question 1 (Conceptual):**
State the Superposition Principle for homogeneous linear ODEs of second order. Does it apply to the non-homogeneous ODE $y'' + y = \sin(x)$? Explain why or why not.

**Answer:**
The Superposition Principle states that if $y_1(x)$ and $y_2(x)$ are solutions to a homogeneous linear ODE, then any linear combination $c_1 y_1(x) + c_2 y_2(x)$ is also a solution.

The Superposition Principle does *not* directly apply to the non-homogeneous ODE $y'' + y = \sin(x)$ because the right-hand side is not zero. If $y_1$ and $y_2$ are solutions to $y'' + y = \sin(x)$, meaning $y_1'' + y_1 = \sin(x)$ and $y_2'' + y_2 = \sin(x)$, then for their linear combination $y(x) = c_1 y_1(x) + c_2 y_2(x)$:
$y'' + y = (c_1 y_1'' + c_2 y_2'') + (c_1 y_1 + c_2 y_2)$
$= c_1(y_1'' + y_1) + c_2(y_2'' + y_2)$
$= c_1 \sin(x) + c_2 \sin(x) = (c_1 + c_2) \sin(x)$
This result is not generally equal to $\sin(x)$ for arbitrary $c_1$ and $c_2$, unless $c_1+c_2=1$. Therefore, the principle does not hold for the entire non-homogeneous equation. (Note: Superposition *does* hold for the homogeneous part, $y''+y=0$).

**Question 2 (Application/Exam-Oriented):**
Given that $y_1(x) = \cos(2x)$ and $y_2(x) = \sin(2x)$ are solutions to the ODE $y'' + 4y = 0$.
(a) Verify that $y_1(x)$ and $y_2(x)$ are indeed solutions.
(b) Use the Superposition Principle to write the general solution to this ODE.
(c) Is $y_3(x) = 3\cos(2x) - 2\sin(2x)$ also a solution? Justify your answer.

**Answer:**
(a) **Verification for $y_1(x) = \cos(2x)$:**
$y_1'(x) = -2\sin(2x)$
$y_1''(x) = -4\cos(2x)$
Substituting into $y'' + 4y = 0$:
$(-4\cos(2x)) + 4(\cos(2x)) = -4\cos(2x) + 4\cos(2x) = 0$.
So, $y_1(x) = \cos(2x)$ is a solution.

**Verification for $y_2(x) = \sin(2x)$:**
$y_2'(x) = 2\cos(2x)$
$y_2''(x) = -4\sin(2x)$
Substituting into $y'' + 4y = 0$:
$(-4\sin(2x)) + 4(\sin(2x)) = -4\sin(2x) + 4\sin(2x) = 0$.
So, $y_2(x) = \sin(2x)$ is a solution.

(b) According to the Superposition Principle, if $y_1(x)$ and $y_2(x)$ are solutions to a homogeneous linear ODE, then their linear combination $y(x) = c_1 y_1(x) + c_2 y_2(x)$ is also a solution.
Therefore, the general solution to $y'' + 4y = 0$ is $y(x) = c_1 \cos(2x) + c_2 \sin(2x)$, where $c_1$ and $c_2$ are arbitrary constants.

(c) Yes, $y_3(x) = 3\cos(2x) - 2\sin(2x)$ is also a solution.
Justification: $y_3(x)$ is a linear combination of $y_1(x)$ and $y_2(x)$. Specifically, it is of the form $c_1 y_1(x) + c_2 y_2(x)$ where $c_1 = 3$ and $c_2 = -2$. Since $y_1(x)$ and $y_2(x)$ are solutions to the homogeneous linear ODE $y'' + 4y = 0$, the Superposition Principle guarantees that any linear combination of them, such as $y_3(x)$, is also a solution.

**Question 3 (Conceptual - linking to linearity):**
Briefly explain how the Superposition Principle demonstrates that the set of solutions to a homogeneous linear ODE forms a vector space.

**Answer:**
The Superposition Principle shows that if $y_1$ and $y_2$ are solutions, then $c_1 y_1 + c_2 y_2$ is also a solution for any scalars $c_1, c_2$. This directly demonstrates the two fundamental properties that define a vector space:
1.  **Closure under addition:** If $y_1$ and $y_2$ are solutions (elements of the solution set), their sum $y_1+y_2$ (a linear combination with $c_1=1, c_2=1$) is also a solution.
2.  **Closure under scalar multiplication:** If $y_1$ is a solution (an element of the solution set), then $c_1 y_1$ for any scalar $c_1$ is also a solution.
These two properties are the closure axioms for vector spaces, confirming that the solution set behaves like a vector space, with the solutions acting as vectors.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
