---
title: "Linearity property"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND 
PHYSICAL  SCIENCE - 1"
module: "Module 3: Laplace Transform"
branch: "Civil Engineering"
semester: 1
topicId: "68b54565d74ec52cc09129e2"
status: "completed"
scrapedAt: "2026-05-20T18:31:02.357Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 1

## Module 3: Laplace Transform

### Topic: The Linearity Property

Welcome, everyone! Today, we're going to dive into one of the most fundamental and incredibly useful properties of the Laplace transform: its **linearity**. Understanding this property is crucial because it unlocks the ability to transform complex functions by breaking them down into simpler parts. It's like having a superpower that lets you simplify complicated engineering problems.

As you know from our previous discussions and your readings in Kreyszig's *Advanced Engineering Mathematics* and Anton's *Calculus*, the Laplace transform is a powerful tool for solving linear differential equations. This linearity property is precisely what makes it so effective in that context, directly linking to **Course Outcome 3 (CO3)**: "Compute Laplace transform and apply it to solve ODEs arising in engineering." When we can break down a complicated input signal or system into simpler components, apply the transform to each component, and then combine the results, we're effectively leveraging linearity.

### What is Linearity?

Let's start with the core idea. In mathematics, a transformation $T$ is called *linear* if it satisfies two key conditions:

1.  **Additivity:** $T(f(t) + g(t)) = T(f(t)) + T(g(t))$
2.  **Homogeneity (or Scaling):** $T(c \cdot f(t)) = c \cdot T(f(t))$, where $c$ is a constant.

Combining these two, we get the general linearity property:
$T(a \cdot f(t) + b \cdot g(t)) = a \cdot T(f(t)) + b \cdot T(g(t))$
for any constants $a$ and $b$, and any functions $f(t)$ and $g(t)$ for which the transformation is defined.

Think of it this way: if you have a machine that processes inputs and gives outputs, and this machine is "linear," it means that if you feed it the sum of two signals, it behaves the same as if you fed it each signal separately and then added their outputs. Similarly, if you scale the input signal by a factor, the output signal is also scaled by the same factor.

#### The Laplace Transform as a Linear Operator

The Laplace transform, denoted by $\mathcal{L}\{\cdot\}$, is indeed a linear operator. This means it acts on functions and produces new functions (in the $s$-domain), and it perfectly upholds the additivity and homogeneity properties.

So, for two functions, say $f(t)$ and $g(t)$, and any constants $a$ and $b$, we have:

$\mathcal{L}\{a f(t) + b g(t)\} = a \mathcal{L}\{f(t)\} + b \mathcal{L}\{g(t)\}$

This is the **linearity property of the Laplace Transform**. It's remarkably simple in statement but profound in its implications.

### Why is Linearity So Important in Engineering?

Consider a typical electrical circuit or a physical system. Often, the input to the system isn't just a single, simple signal like a unit step or an exponential. It might be a combination of several signals. For instance, an audio amplifier might receive a musical signal mixed with some background noise. Or a control system might be subjected to a desired command signal plus a disturbance.

The linearity property allows us to:

*   **Decompose Complex Inputs:** We can break down a complex input signal into a sum of simpler, known functions (like exponentials, sines, cosines, or impulses) for which we already know the Laplace transform.
*   **Transform Individual Components:** We then apply the Laplace transform to each of these simpler components individually. This is usually much easier.
*   **Combine Results:** Finally, we use the linearity property to combine the transformed components, scaled by their respective coefficients, to get the Laplace transform of the entire complex input.

This process is fundamental to solving **Course Outcome 3 (CO3)**. When solving differential equations using Laplace transforms, the left-hand side of the equation often involves derivatives of the unknown function, multiplied by constants, and added together. The linearity property allows us to transform each term separately and then form an algebraic equation in the $s$-domain.

### Illustrative Examples

Let's make this concrete with some examples, moving from basic arithmetic to a slightly more applied scenario.

#### Example 1: Simple Linear Combination

Suppose we want to find the Laplace transform of $5e^{-2t} + 3\sin(4t)$.

Using the linearity property, we can write:

$\mathcal{L}\{5e^{-2t} + 3\sin(4t)\} = 5 \mathcal{L}\{e^{-2t}\} + 3 \mathcal{L}\{\sin(4t)\}$

Now, we need the basic Laplace transforms we've learned:
*   $\mathcal{L}\{e^{at}\} = \frac{1}{s-a}$
*   $\mathcal{L}\{\sin(bt)\} = \frac{b}{s^2 + b^2}$

Applying these:
*   $\mathcal{L}\{e^{-2t}\} = \frac{1}{s - (-2)} = \frac{1}{s+2}$
*   $\mathcal{L}\{\sin(4t)\} = \frac{4}{s^2 + 4^2} = \frac{4}{s^2 + 16}$

Substituting these back into our expression:

$\mathcal{L}\{5e^{-2t} + 3\sin(4t)\} = 5 \left(\frac{1}{s+2}\right) + 3 \left(\frac{4}{s^2 + 16}\right)$
$= \frac{5}{s+2} + \frac{12}{s^2 + 16}$

See how straightforward that was? We took a sum of two functions, multiplied by constants, and transformed each part as if it were alone, then just recombined them with the same coefficients. This is the power of linearity.

#### Example 2: A More Complex Function

Let's try something a bit more involved: finding $\mathcal{L}\{t^2 - 4e^{3t} + \cos(2t)\}$.

Here, we have three terms. The linearity property extends to any finite number of terms:
$\mathcal{L}\{a f(t) + b g(t) + c h(t)\} = a \mathcal{L}\{f(t)\} + b \mathcal{L}\{g(t)\} + c \mathcal{L}\{h(t)\}$

We need the following standard Laplace transforms (from Kreyszig or other calculus texts like Anton, Biven, Davis):
*   $\mathcal{L}\{t^n\} = \frac{n!}{s^{n+1}}$ for integer $n \ge 0$. So, $\mathcal{L}\{t^2\} = \frac{2!}{s^{2+1}} = \frac{2}{s^3}$.
*   $\mathcal{L}\{e^{at}\} = \frac{1}{s-a}$. So, $\mathcal{L}\{e^{3t}\} = \frac{1}{s-3}$.
*   $\mathcal{L}\{\cos(bt)\} = \frac{s}{s^2 + b^2}$. So, $\mathcal{L}\{\cos(2t)\} = \frac{s}{s^2 + 2^2} = \frac{s}{s^2 + 4}$.

Applying the linearity property:

$\mathcal{L}\{t^2 - 4e^{3t} + \cos(2t)\} = \mathcal{L}\{t^2\} - 4 \mathcal{L}\{e^{3t}\} + \mathcal{L}\{\cos(2t)\}$
$= \frac{2}{s^3} - 4 \left(\frac{1}{s-3}\right) + \frac{s}{s^2 + 4}$
$= \frac{2}{s^3} - \frac{4}{s-3} + \frac{s}{s^2 + 4}$

Remember this: common pitfalls here include sign errors (like forgetting the minus sign for the $e^{3t}$ term) or mistakes in the basic transform formulas. Always double-check your standard transforms!

#### Example 3: Relating to Course Outcomes - Solving ODEs

Now, let's see how this connects directly to solving differential equations, our **CO3**.
Suppose we have the second-order ODE:
$y''(t) + 2y'(t) + y(t) = 3e^{-t}$
with initial conditions $y(0) = 1$ and $y'(0) = 0$.

Our strategy is to transform the entire equation. We use the linearity property and the known transforms for derivatives:
*   $\mathcal{L}\{y''(t)\} = s^2 Y(s) - s y(0) - y'(0)$
*   $\mathcal{L}\{y'(t)\} = s Y(s) - y(0)$
*   $\mathcal{L}\{y(t)\} = Y(s)$

And the transform of the right-hand side:
*   $\mathcal{L}\{3e^{-t}\} = 3 \mathcal{L}\{e^{-t}\} = 3 \left(\frac{1}{s - (-1)}\right) = \frac{3}{s+1}$

Applying these to the ODE:

$\mathcal{L}\{y''(t)\} + \mathcal{L}\{2y'(t)\} + \mathcal{L}\{y(t)\} = \mathcal{L}\{3e^{-t}\}$

Now, here's where linearity is vital. We can pull the constants out:
$\mathcal{L}\{y''(t)\} + 2\mathcal{L}\{y'(t)\} + \mathcal{L}\{y(t)\} = \mathcal{L}\{3e^{-t}\}$

Substitute the transforms of derivatives and the forcing function:
$[s^2 Y(s) - s y(0) - y'(0)] + 2[s Y(s) - y(0)] + Y(s) = \frac{3}{s+1}$

Now, substitute the initial conditions $y(0)=1$ and $y'(0)=0$:
$[s^2 Y(s) - s(1) - 0] + 2[s Y(s) - 1] + Y(s) = \frac{3}{s+1}$

$s^2 Y(s) - s + 2s Y(s) - 2 + Y(s) = \frac{3}{s+1}$

This is a crucial step. We've transformed a differential equation into an algebraic equation in $Y(s)$. Now, we group terms involving $Y(s)$:

$Y(s) (s^2 + 2s + 1) - s - 2 = \frac{3}{s+1}$

Notice how the coefficients (1, 2, 1) from the original ODE are preserved as coefficients for $Y(s)$ and its "derivatives" in the $s$-domain. This is a direct consequence of linearity.

To solve for $Y(s)$:
$Y(s) (s+1)^2 = \frac{3}{s+1} + s + 2$

This algebraic manipulation is where other mathematical tools, like partial fraction decomposition, come into play. The ability to combine terms and isolate $Y(s)$ relies entirely on the linearity of the Laplace transform.

### Analogy: The Sound Mixer

Think of a sound mixer in a recording studio. If you have a vocalist, a guitarist, and a drummer, each with their own microphone and signal, the mixer allows you to blend them.

*   **Additivity:** If you send the vocalist's signal and the guitarist's signal through separate channels and then combine them, the output is the sum of their individual signals. The mixer treats each input independently and then sums them.
*   **Homogeneity:** If you want to make the guitarist's signal twice as loud, you just turn up their channel's gain knob by a factor of 2. The entire signal is scaled uniformly.

The Laplace transform is like a sophisticated mixer for functions. It can take "inputs" (functions $f(t), g(t)$) and produce "outputs" ($F(s), G(s)$). The linearity property means:

*   If you feed a mix of two signals $a f(t) + b g(t)$ into the Laplace transform "mixer," you get the same result as mixing their individual transformed outputs: $a F(s) + b G(s)$.

This analogy helps visualize how the transform handles combinations of signals.

### Connection to Other Course Outcomes

The linearity property is foundational for several course outcomes:

*   **CO1: Solve systems of linear equations and diagonalize matrices.** While this topic focuses on functions, the concept of linearity is fundamental to linear algebra. Systems of linear equations are themselves linear. Transformations in linear algebra (like matrix multiplication) are also linear. Understanding linearity here reinforces the broader theme of linearity in mathematics.
*   **CO2: Solve homogeneous and non-homogeneous linear differential equations with constant coefficients.** The Laplace transform method, powered by linearity, is a primary way to tackle these equations. Linearity allows us to transform the entire equation, including the forcing function, and then systematically solve for the unknown function in the $s$-domain.
*   **CO3: Compute Laplace transform and apply it to solve ODEs arising in engineering.** This is the most direct link. As demonstrated in Example 3, every step in transforming an ODE, from dealing with derivatives to combining terms, relies on the linearity property.
*   **CO4: Determine the Taylor series and evaluate Fourier series expansion for different periodic functions.** While Taylor and Fourier series deal with different mathematical transformations, the underlying idea of representing a complex function as a sum (or series) of simpler functions is present. Understanding how the Laplace transform handles sums of functions through linearity builds a parallel intuition for how series expansions work.

### In Summary: The Takeaway Message

The **linearity property of the Laplace transform** is a cornerstone:
$\mathcal{L}\{a f(t) + b g(t)\} = a \mathcal{L}\{f(t)\} + b \mathcal{L}\{g(t)\}$

**Why it's essential:**
*   It allows us to break down complex functions or inputs into simpler, manageable parts.
*   It simplifies the process of transforming sums and scaled versions of functions.
*   It is the key that unlocks the use of Laplace transforms for solving linear differential equations, making them algebraic problems.

**Key applications:**
*   Transforming linear combinations of standard functions (exponentials, sines, cosines, powers of $t$).
*   Transforming entire linear differential equations by applying the transform to each term individually.

Remember this property. It's not just a mathematical curiosity; it's a powerful workhorse that makes the Laplace transform indispensable in analyzing and solving problems in electrical and physical sciences. Keep it in mind as we move on to other properties, as many of them build upon this fundamental understanding.

---

### Sample Questions and Answers

Here are a few questions to test your understanding of the linearity property.

**Question 1 (Conceptual):**
What does it mean for the Laplace transform to be a "linear operator"? Explain in your own words and state the mathematical conditions it must satisfy.

**Answer:**
A linear operator is a transformation that preserves addition and scalar multiplication. This means that if you transform a sum of functions, it's the same as transforming each function individually and then adding the results. Similarly, if you transform a scaled function, it's the same as transforming the original function and then scaling the result.
Mathematically, a transformation $T$ is linear if for any functions $f(t)$ and $g(t)$ and any constants $a$ and $b$, the following holds:
$T(a f(t) + b g(t)) = a T(f(t)) + b T(g(t))$.
For the Laplace transform $\mathcal{L}\{\cdot\}$, this translates to:
$\mathcal{L}\{a f(t) + b g(t)\} = a \mathcal{L}\{f(t)\} + b \mathcal{L}\{g(t)\}$.

**Question 2 (Application - Basic):**
Find the Laplace transform of the function $f(t) = 2\cos(3t) - 5e^{4t}$.

**Answer:**
We will use the linearity property and known Laplace transforms:
$\mathcal{L}\{\cos(bt)\} = \frac{s}{s^2 + b^2}$ and $\mathcal{L}\{e^{at}\} = \frac{1}{s-a}$.

Applying the linearity property:
$\mathcal{L}\{f(t)\} = \mathcal{L}\{2\cos(3t) - 5e^{4t}\} = 2 \mathcal{L}\{\cos(3t)\} - 5 \mathcal{L}\{e^{4t}\}$

Now, substitute the standard transforms:
For $\cos(3t)$, $b=3$, so $\mathcal{L}\{\cos(3t)\} = \frac{s}{s^2 + 3^2} = \frac{s}{s^2 + 9}$.
For $e^{4t}$, $a=4$, so $\mathcal{L}\{e^{4t}\} = \frac{1}{s-4}$.

Therefore,
$\mathcal{L}\{f(t)\} = 2 \left(\frac{s}{s^2 + 9}\right) - 5 \left(\frac{1}{s-4}\right)$
$\mathcal{L}\{f(t)\} = \frac{2s}{s^2 + 9} - \frac{5}{s-4}$

**Question 3 (Exam-Oriented - ODE Setup):**
Consider the differential equation: $3y''(t) - y'(t) + 2y(t) = e^{-t} + 4\sin(t)$.
Write down the equation obtained after applying the Laplace transform to both sides, assuming $y(0)$ and $y'(0)$ are given initial conditions. You don't need to solve for $Y(s)$.

**Answer:**
Let $Y(s) = \mathcal{L}\{y(t)\}$. We use the transforms of derivatives:
$\mathcal{L}\{y''(t)\} = s^2 Y(s) - s y(0) - y'(0)$
$\mathcal{L}\{y'(t)\} = s Y(s) - y(0)$

And the linearity property for the right-hand side:
$\mathcal{L}\{e^{-t} + 4\sin(t)\} = \mathcal{L}\{e^{-t}\} + \mathcal{L}\{4\sin(t)\}$
$= \mathcal{L}\{e^{-t}\} + 4\mathcal{L}\{\sin(t)\}$
$= \frac{1}{s-(-1)} + 4 \left(\frac{1}{s^2 + 1^2}\right)$
$= \frac{1}{s+1} + \frac{4}{s^2+1}$

Now, applying the Laplace transform to the entire ODE, using linearity on the left side as well:
$\mathcal{L}\{3y''(t) - y'(t) + 2y(t)\} = \mathcal{L}\{e^{-t} + 4\sin(t)\}$
$3\mathcal{L}\{y''(t)\} - \mathcal{L}\{y'(t)\} + 2\mathcal{L}\{y(t)\} = \frac{1}{s+1} + \frac{4}{s^2+1}$

Substituting the transforms of the derivatives and $Y(s)$:
$3[s^2 Y(s) - s y(0) - y'(0)] - [s Y(s) - y(0)] + 2[Y(s)] = \frac{1}{s+1} + \frac{4}{s^2+1}$

This is the transformed equation. The crucial part is that the coefficients 3, -1, and 2 from the original ODE appear as coefficients for the transformed terms involving $Y(s)$ and the initial conditions, all thanks to linearity.
