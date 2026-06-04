---
title: "Half range sine series expansion"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL 
SCIENCE - 1"
module: "Module 4: Taylor series representation (without proof, assuming the possibility of power series expansion in appropriate domains)"
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213e9ece2bdd875f9516"
status: "completed"
scrapedAt: "2026-05-23T16:03:32.615Z"
---
# Module 4: Taylor Series Representation - Half-Range Sine Series Expansion

Welcome, everyone! Today, we're diving into a fascinating part of our journey through mathematics for electrical and physical sciences: **Half-Range Sine Series Expansion**. This topic, while seemingly specific, is a powerful tool that connects deeply with our broader understanding of representing functions, particularly in electrical engineering and signal processing. You'll see how it relates to our course outcomes, especially **CO4: Determine the Taylor series and evaluate Fourier series expansion for different periodic functions.** We'll explore how these series help us break down complex signals into simpler, manageable components.

Now, you might be thinking, "Professor, we're talking about Taylor series, but then we jump to Fourier series?" That's a great observation! While Taylor series are fantastic for approximating functions around a *single point* using polynomials, Fourier series, and specifically these "half-range" expansions, are about representing functions over an *interval* using trigonometric functions. The underlying principle of breaking down a complex entity into simpler building blocks is common to both, and understanding the power of infinite series representation is key. Think of it like this: Taylor series are like getting a very detailed close-up of a painting, focusing on a tiny area, while Fourier series are like describing the entire painting using basic color palettes and shapes. Both give you information, just different kinds.

## Understanding the "Half-Range" Concept

Let's start by demystifying the "half-range" aspect. When we talk about Fourier series in general, we're usually concerned with functions defined over a symmetric interval, say from $-L$ to $L$. However, in many practical scenarios, especially in physics and engineering, we often deal with phenomena that are inherently defined only for $x \ge 0$. For example, consider a signal that starts at time $t=0$ and continues. Or a physical phenomenon that only occurs on one side of an origin.

So, what if we have a function $f(x)$ that's defined only on the interval $0 < x < L$? How can we represent it using a series? We can't directly apply the standard full Fourier series formulas that expect a function defined over $[-L, L]$. This is where the "half-range" idea comes in. We essentially create a suitable "partner" for our function on the "missing" half of the interval (i.e., $-L < x < 0$) to make it either even or odd. This "completion" allows us to use Fourier series.

Why would we do this? Because representing a function as a sum of sines and cosines is incredibly useful. Sines and cosines are the "pure tones" of the function world. In electrical science, this translates to understanding how circuits respond to different frequencies, or how signals are composed of various harmonic frequencies.

We have two main strategies for this "completion":

1.  **Half-Range Sine Series:** We extend $f(x)$ on $(0, L)$ to an **odd function** on $(-L, L)$.
2.  **Half-Range Cosine Series:** We extend $f(x)$ on $(0, L)$ to an **even function** on $(-L, L)$.

Today, our focus is squarely on the **Half-Range Sine Series Expansion**.

## Constructing the Half-Range Sine Series

Imagine you have a function $f(x)$ defined for $0 < x < L$. To make it an odd function on $(-L, L)$, we essentially reflect its graph across the origin. If $f(x)$ is defined for $x > 0$, its odd extension $f_{odd}(x)$ would be defined as:

$f_{odd}(x) = \begin{cases} f(x) & \text{if } 0 < x < L \\ 0 & \text{if } x = 0, \pm L \\ -f(-x) & \text{if } -L < x < 0 \end{cases}$

An odd function has the property that $f_{odd}(-x) = -f_{odd}(x)$ for all $x$ in its domain. Geometrically, its graph is symmetric with respect to the origin.

Now, when we perform a Fourier series expansion of an odd function over the interval $[-L, L]$, some special things happen. Recall the general Fourier series for a function $F(x)$ on $[-L, L]$:

$F(x) = a_0 + \sum_{n=1}^{\infty} \left( a_n \cos\left(\frac{n\pi x}{L}\right) + b_n \sin\left(\frac{n\pi x}{L}\right) \right)$

where the coefficients are given by:
$a_0 = \frac{1}{2L} \int_{-L}^{L} F(x) dx$
$a_n = \frac{1}{L} \int_{-L}^{L} F(x) \cos\left(\frac{n\pi x}{L}\right) dx$
$b_n = \frac{1}{L} \int_{-L}^{L} F(x) \sin\left(\frac{n\pi x}{L}\right) dx$

If $F(x)$ is an odd function:
*   The integral of an odd function over a symmetric interval $[-L, L]$ is always zero. This means $a_0 = 0$ and $a_n = 0$ for all $n \ge 1$, because both $\cos(n\pi x/L)$ and $\sin(n\pi x/L)$ are odd or even, and the product of an odd function with an odd function is even, and the product of an odd function with an even function is odd. Specifically, $F(x) \cos(n\pi x/L)$ is odd $\times$ even = odd, and $F(x) \sin(n\pi x/L)$ is odd $\times$ odd = even.
*   So, the Fourier series of an odd function on $[-L, L]$ simplifies to a series of **only sine terms**:

$F(x) = \sum_{n=1}^{\infty} b_n \sin\left(\frac{n\pi x}{L}\right)$

This is precisely what we want for our half-range sine series!

Now, let's calculate the $b_n$ coefficients for our odd extension $f_{odd}(x)$. Since $f_{odd}(x) \sin(n\pi x/L)$ is an even function (odd $\times$ odd), we can simplify the integral:

$b_n = \frac{1}{L} \int_{-L}^{L} f_{odd}(x) \sin\left(\frac{n\pi x}{L}\right) dx = \frac{2}{L} \int_{0}^{L} f_{odd}(x) \sin\left(\frac{n\pi x}{L}\right) dx$

And since $f_{odd}(x) = f(x)$ for $0 < x < L$, the formula for the $b_n$ coefficients becomes:

$b_n = \frac{2}{L} \int_{0}^{L} f(x) \sin\left(\frac{n\pi x}{L}\right) dx$

So, the **Half-Range Sine Series Expansion** of a function $f(x)$ defined on $0 < x < L$ is given by:

$f(x) = \sum_{n=1}^{\infty} b_n \sin\left(\frac{n\pi x}{L}\right)$

where $b_n = \frac{2}{L} \int_{0}^{L} f(x) \sin\left(\frac{n\pi x}{L}\right) dx$.

This is a very compact and useful form! Notice how we've effectively represented our function on $(0, L)$ using only sine terms. This is great for problems where boundary conditions suggest a sine-based solution, like certain types of wave phenomena or heat distribution problems. This directly supports **CO4** by showing how to evaluate a specific type of Fourier series expansion.

### Connecting to Course Outcomes

*   **CO4 (Determine the Taylor series and evaluate Fourier series expansion for different periodic functions):** This topic is a direct application of evaluating Fourier series. We're taking a function defined on a finite interval and representing it using an infinite sum of sine functions. The process of calculating the $b_n$ coefficients is central to this outcome. While Taylor series focus on polynomial approximations around a point, Fourier series, like this half-range sine series, provide global representations using trigonometric building blocks.
*   **Relatability:** Think about sound waves. A complex sound can be broken down into a sum of pure sine waves of different frequencies and amplitudes – that's the essence of Fourier analysis. A half-range sine series allows us to do this for signals that start at a specific point in time and are only relevant for a certain duration. For instance, the sound of a plucked string that vibrates for a limited time.

## Calculating the Coefficients: The Heart of the Matter

The real work in any Fourier series expansion, including the half-range sine series, lies in calculating those coefficients. For the half-range sine series, we only need to compute $b_n$.

The formula we derived is:
$b_n = \frac{2}{L} \int_{0}^{L} f(x) \sin\left(\frac{n\pi x}{L}\right) dx$

Here, $L$ is the length of the interval over which $f(x)$ is defined. The $\frac{n\pi x}{L}$ part tells us about the fundamental frequency and its harmonics.

**Let's walk through an example, as this is crucial for exam preparation.**

**Example 1: A Simple Ramp Function**

Suppose we want to find the half-range sine series expansion of $f(x) = x$ for $0 < x < 2$.
Here, $L=2$.

The series will be of the form: $f(x) = \sum_{n=1}^{\infty} b_n \sin\left(\frac{n\pi x}{2}\right)$.

We need to calculate $b_n$:
$b_n = \frac{2}{L} \int_{0}^{L} f(x) \sin\left(\frac{n\pi x}{L}\right) dx$
$b_n = \frac{2}{2} \int_{0}^{2} x \sin\left(\frac{n\pi x}{2}\right) dx$
$b_n = \int_{0}^{2} x \sin\left(\frac{n\pi x}{2}\right) dx$

This integral requires integration by parts. Remember the LIATE rule (Logarithmic, Inverse trigonometric, Algebraic, Trigonometric, Exponential) for choosing $u$? Here, we choose $u=x$ (Algebraic) and $dv = \sin\left(\frac{n\pi x}{2}\right) dx$ (Trigonometric).

Let $u = x$, then $du = dx$.
Let $dv = \sin\left(\frac{n\pi x}{2}\right) dx$. To find $v$, we integrate $dv$:
$v = \int \sin\left(\frac{n\pi x}{2}\right) dx = -\frac{\cos\left(\frac{n\pi x}{2}\right)}{\frac{n\pi}{2}} = -\frac{2}{n\pi} \cos\left(\frac{n\pi x}{2}\right)$.

Now, apply the integration by parts formula: $\int u \, dv = uv - \int v \, du$.

$b_n = \left[ x \left(-\frac{2}{n\pi} \cos\left(\frac{n\pi x}{2}\right)\right) \right]_0^2 - \int_{0}^{2} \left(-\frac{2}{n\pi} \cos\left(\frac{n\pi x}{2}\right)\right) dx$

Let's evaluate the first term:
$\left[ -\frac{2x}{n\pi} \cos\left(\frac{n\pi x}{2}\right) \right]_0^2 = \left(-\frac{2(2)}{n\pi} \cos\left(\frac{n\pi (2)}{2}\right)\right) - \left(-\frac{2(0)}{n\pi} \cos\left(\frac{n\pi (0)}{2}\right)\right)$
$= -\frac{4}{n\pi} \cos(n\pi) - 0$
$= -\frac{4}{n\pi} (-1)^n$ (since $\cos(n\pi) = (-1)^n$).

Now for the second term:
$- \int_{0}^{2} \left(-\frac{2}{n\pi} \cos\left(\frac{n\pi x}{2}\right)\right) dx = \frac{2}{n\pi} \int_{0}^{2} \cos\left(\frac{n\pi x}{2}\right) dx$
$= \frac{2}{n\pi} \left[ \frac{\sin\left(\frac{n\pi x}{2}\right)}{\frac{n\pi}{2}} \right]_0^2$
$= \frac{2}{n\pi} \left[ \frac{2}{n\pi} \sin\left(\frac{n\pi x}{2}\right) \right]_0^2$
$= \frac{4}{(n\pi)^2} \left[ \sin\left(\frac{n\pi (2)}{2}\right) - \sin\left(\frac{n\pi (0)}{2}\right) \right]$
$= \frac{4}{(n\pi)^2} (\sin(n\pi) - \sin(0))$
$= \frac{4}{(n\pi)^2} (0 - 0) = 0$.

So, combining the two parts for $b_n$:
$b_n = -\frac{4}{n\pi} (-1)^n + 0 = \frac{4(-1)^{n+1}}{n\pi}$.

Therefore, the half-range sine series expansion for $f(x)=x$ on $(0, 2)$ is:
$f(x) = \sum_{n=1}^{\infty} \frac{4(-1)^{n+1}}{n\pi} \sin\left(\frac{n\pi x}{2}\right)$

$f(x) = \frac{4}{\pi} \left( \frac{\sin(\frac{\pi x}{2})}{1} - \frac{\sin(\frac{2\pi x}{2})}{2} + \frac{\sin(\frac{3\pi x}{2})}{3} - \dots \right)$

**Remember this:** The integration by parts step is critical. Make sure you get the signs and the constants correct. Common mistakes happen here. Also, recalling $\cos(n\pi) = (-1)^n$ is a lifesaver. This example demonstrates the practical application of **CO4**—the calculation of Fourier series coefficients.

**Example 2: A Constant Function**

Let's find the half-range sine series for $f(x) = c$ (a constant) on $0 < x < L$.
Here, $L$ is our interval length.

$b_n = \frac{2}{L} \int_{0}^{L} c \sin\left(\frac{n\pi x}{L}\right) dx$
$b_n = \frac{2c}{L} \int_{0}^{L} \sin\left(\frac{n\pi x}{L}\right) dx$
$b_n = \frac{2c}{L} \left[ -\frac{\cos\left(\frac{n\pi x}{L}\right)}{\frac{n\pi}{L}} \right]_0^L$
$b_n = \frac{2c}{L} \left[ -\frac{L}{n\pi} \cos\left(\frac{n\pi x}{L}\right) \right]_0^L$
$b_n = -\frac{2c}{n\pi} \left[ \cos\left(\frac{n\pi L}{L}\right) - \cos\left(\frac{n\pi (0)}{L}\right) \right]$
$b_n = -\frac{2c}{n\pi} (\cos(n\pi) - \cos(0))$
$b_n = -\frac{2c}{n\pi} ((-1)^n - 1)$

Now, let's analyze $b_n$:
*   If $n$ is even, $n=2k$: $b_{2k} = -\frac{2c}{2k\pi} ((-1)^{2k} - 1) = -\frac{c}{k\pi} (1 - 1) = 0$.
*   If $n$ is odd, $n=2k-1$: $b_{2k-1} = -\frac{2c}{(2k-1)\pi} ((-1)^{2k-1} - 1) = -\frac{2c}{(2k-1)\pi} (-1 - 1) = -\frac{2c}{(2k-1)\pi} (-2) = \frac{4c}{(2k-1)\pi}$.

So, the half-range sine series for $f(x) = c$ on $(0, L)$ is:
$f(x) = \sum_{k=1}^{\infty} b_{2k-1} \sin\left(\frac{(2k-1)\pi x}{L}\right)$
$f(x) = \sum_{k=1}^{\infty} \frac{4c}{(2k-1)\pi} \sin\left(\frac{(2k-1)\pi x}{L}\right)$

$f(x) = \frac{4c}{\pi} \left( \frac{\sin(\frac{\pi x}{L})}{1} + \frac{\sin(\frac{3\pi x}{L})}{3} + \frac{\sin(\frac{5\pi x}{L})}{5} + \dots \right)$

This is a beautiful result! It shows that a constant function can be represented as an infinite sum of odd-frequency sine waves. It’s like saying a steady "hum" can be built up from specific musical notes. This again emphasizes **CO4**.

### What if $f(x)$ is not defined on $(0, L)$ but on $(0, L/2)$?

Sometimes, problems are framed such that $f(x)$ is given on $(0, L/2)$ and you need to find its half-range sine series on $(0, L)$. In such cases, you simply use $L/2$ as the interval length.

For example, if $f(x) = x$ for $0 < x < \pi/2$, and we want its half-range sine series over $(0, \pi)$.
Then $L=\pi$.
$b_n = \frac{2}{\pi} \int_{0}^{\pi} f(x) \sin\left(\frac{n\pi x}{\pi}\right) dx = \frac{2}{\pi} \int_{0}^{\pi} x \sin(nx) dx$.
This integral would be calculated using integration by parts with $L=\pi$, and the result would be for the interval $(0, \pi)$.

## Properties and Applications

The half-range sine series is particularly useful in solving certain types of partial differential equations (PDEs) that arise in physics and engineering.

**Think about the heat equation or the wave equation.** Often, when we discretize these problems or consider specific boundary conditions (like zero displacement or zero temperature gradient at the boundaries), the solutions naturally decompose into sine functions.

For example, consider a vibrating string fixed at both ends, $x=0$ and $x=L$. If you pluck the string at some point, its initial shape is $f(x)$. The subsequent motion of the string is described by the wave equation. The solutions that satisfy the boundary conditions of being fixed at both ends are of the form $\sin(n\pi x/L)$. Therefore, representing the initial shape $f(x)$ as a half-range sine series allows us to analyze the vibration of the string in terms of these fundamental modes of vibration. Each term in the sine series corresponds to a specific mode, with its own frequency and amplitude. This is a direct link to understanding signals and systems, as outlined in **CO4** and also indirectly touches upon **CO2** when solving differential equations that lead to these representations.

*   **Even/Odd Symmetry:** The key insight is that by extending $f(x)$ to be an odd function, we guarantee that the resulting series contains only sine terms. This is powerful because sine functions inherently satisfy zero boundary conditions at $x=0$ and $x=L$ (for integer multiples of $\pi x/L$).
*   **Convergence:** Similar to full Fourier series, the half-range sine series converges to the function $f(x)$ at points of continuity, and to the average of the left and right limits at points of discontinuity. For the odd extension, the series will converge to $f(x)$ for $0 < x < L$, and at $x=0$ and $x=L$, it will converge to 0 (since the extended function is 0 there).

**Crucial Point for Exams:** Be very clear about the interval $(0, L)$ given for $f(x)$ and use the correct $L$ in your formulas for $b_n$ and the sine terms. Also, be precise with integration by parts.

## Summary of Key Formulas

For a function $f(x)$ defined on the interval $0 < x < L$:

The **Half-Range Sine Series Expansion** is given by:
$f(x) = \sum_{n=1}^{\infty} b_n \sin\left(\frac{n\pi x}{L}\right)$

where the coefficients $b_n$ are calculated as:
$b_n = \frac{2}{L} \int_{0}^{L} f(x) \sin\left(\frac{n\pi x}{L}\right) dx$

Remember this: This form represents $f(x)$ on $(0, L)$ as a sum of pure sine waves. It's the Fourier series of an odd extension of $f(x)$ over $[-L, L]$.

## Sample Questions with Answers

Here are a few questions to solidify your understanding and prepare for exams.

**Question 1 (Conceptual):**
Why is the half-range sine series expansion of a function $f(x)$ on $(0, L)$ essentially the Fourier series of its odd extension on $(-L, L)$?

**Answer:**
When we extend $f(x)$ from $(0, L)$ to an odd function $f_{odd}(x)$ on $(-L, L)$, we ensure that $f_{odd}(-x) = -f_{odd}(x)$. The Fourier series of any odd function over a symmetric interval $[-L, L]$ consists solely of sine terms because the cosine terms ($a_0$ and $a_n \cos(n\pi x/L)$) integrate to zero over $[-L, L]$ when multiplied by an odd function. The $b_n \sin(n\pi x/L)$ terms, however, are products of two odd functions, resulting in even functions, whose integrals over $[-L, L]$ are non-zero and give us the coefficients. The formula for $b_n$ for the odd extension, $\frac{1}{L} \int_{-L}^{L} f_{odd}(x) \sin(\frac{n\pi x}{L}) dx$, simplifies to $\frac{2}{L} \int_{0}^{L} f(x) \sin(\frac{n\pi x}{L}) dx$, which is the standard formula for the half-range sine series. This connection is vital for understanding the behavior and properties of these series, relating to **CO4**.

**Question 2 (Calculation):**
Find the half-range sine series expansion for $f(x) = \pi - x$ for $0 < x < \pi$.

**Answer:**
Here, $L = \pi$. The series will be of the form $f(x) = \sum_{n=1}^{\infty} b_n \sin\left(\frac{n\pi x}{\pi}\right) = \sum_{n=1}^{\infty} b_n \sin(nx)$.

We calculate $b_n$:
$b_n = \frac{2}{L} \int_{0}^{L} f(x) \sin\left(\frac{n\pi x}{L}\right) dx$
$b_n = \frac{2}{\pi} \int_{0}^{\pi} (\pi - x) \sin(nx) dx$

We need to use integration by parts: $\int u \, dv = uv - \int v \, du$.
Let $u = \pi - x$, so $du = -dx$.
Let $dv = \sin(nx) dx$, so $v = -\frac{1}{n}\cos(nx)$.

$b_n = \frac{2}{\pi} \left[ (\pi - x) \left(-\frac{1}{n}\cos(nx)\right) \right]_0^{\pi} - \frac{2}{\pi} \int_{0}^{\pi} \left(-\frac{1}{n}\cos(nx)\right) (-dx)$

Evaluate the first term:
$\left[ -\frac{\pi - x}{n}\cos(nx) \right]_0^{\pi} = \left(-\frac{\pi - \pi}{n}\cos(n\pi)\right) - \left(-\frac{\pi - 0}{n}\cos(0)\right)$
$= (0) - \left(-\frac{\pi}{n}(1)\right) = \frac{\pi}{n}$.

Evaluate the integral part:
$\frac{2}{\pi} \int_{0}^{\pi} \frac{1}{n}\cos(nx) dx = \frac{2}{n\pi} \int_{0}^{\pi} \cos(nx) dx$
$= \frac{2}{n\pi} \left[ \frac{1}{n}\sin(nx) \right]_0^{\pi}$
$= \frac{2}{n^2\pi} [\sin(n\pi) - \sin(0)]$
$= \frac{2}{n^2\pi} [0 - 0] = 0$.

So, $b_n = \frac{\pi}{n} + 0 = \frac{\pi}{n}$.

The half-range sine series expansion is:
$f(x) = \sum_{n=1}^{\infty} \frac{\pi}{n} \sin(nx)$
$f(x) = \pi \left( \frac{\sin x}{1} + \frac{\sin 2x}{2} + \frac{\sin 3x}{3} + \dots \right)$

This question directly tests the calculation skills for **CO4**.

**Question 3 (Application/Conceptual):**
A common application of half-range sine series is in solving the one-dimensional heat equation, $\frac{\partial u}{\partial t} = \alpha^2 \frac{\partial^2 u}{\partial x^2}$, with boundary conditions $u(0,t) = 0$ and $u(L,t) = 0$ for $t \ge 0$, and an initial temperature distribution $u(x,0) = f(x)$ for $0 < x < L$. Explain why a half-range sine series expansion of $f(x)$ is a suitable approach here.

**Answer:**
The boundary conditions $u(0,t) = 0$ and $u(L,t) = 0$ are homogeneous Dirichlet boundary conditions. When we use the method of separation of variables, we assume a solution of the form $u(x,t) = X(x)T(t)$. The spatial part, $X(x)$, must satisfy the ordinary differential equation $X''(x) + \lambda X(x) = 0$ and the boundary conditions $X(0) = 0$ and $X(L) = 0$. The solutions to this boundary value problem are of the form $X_n(x) = \sin\left(\frac{n\pi x}{L}\right)$, where $\lambda_n = \left(\frac{n\pi}{L}\right)^2$. The corresponding time-dependent parts $T_n(t)$ are of the form $e^{-\alpha^2 (n\pi/L)^2 t}$.

The general solution is then a superposition of these individual solutions: $u(x,t) = \sum_{n=1}^{\infty} B_n \sin\left(\frac{n\pi x}{L}\right) e^{-\alpha^2 (n\pi/L)^2 t}$.
To find the coefficients $B_n$, we use the initial condition $u(x,0) = f(x)$:
$f(x) = \sum_{n=1}^{\infty} B_n \sin\left(\frac{n\pi x}{L}\right)$.
This is exactly the form of a half-range sine series expansion. Thus, the coefficients $B_n$ are precisely the $b_n$ coefficients of the half-range sine series of $f(x)$:
$B_n = b_n = \frac{2}{L} \int_{0}^{L} f(x) \sin\left(\frac{n\pi x}{L}\right) dx$.
This shows how the half-range sine series is a natural tool for solving physical problems governed by PDEs with specific boundary conditions, directly linking to **CO4** and providing context for applications in physical science. It also relates to **CO2** as it's a step in solving a type of differential equation.

Keep practicing these calculations and understanding the rationale behind using half-range expansions. It's a fundamental technique that opens doors to solving many real-world problems.
