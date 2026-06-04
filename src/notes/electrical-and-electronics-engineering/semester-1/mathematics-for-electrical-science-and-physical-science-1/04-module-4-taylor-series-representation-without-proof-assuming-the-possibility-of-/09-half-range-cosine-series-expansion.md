---
title: "Half range cosine series expansion."
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL 
SCIENCE - 1"
module: "Module 4: Taylor series representation (without proof, assuming the possibility of power series expansion in appropriate domains)"
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213e9ece2bdd875f9517"
status: "completed"
scrapedAt: "2026-05-23T16:03:33.389Z"
---
# Module 4: Taylor Series Representation - Half-Range Cosine Series Expansion

Welcome, everyone! In this session, we're going to dive into a fascinating topic that bridges the gap between approximating functions and understanding periodic phenomena, particularly in electrical science and physical science. We've been exploring how functions can be represented by infinite series, and today, we're focusing on a specific type of series expansion: the **Half-Range Cosine Series Expansion**.

This is directly related to our **Course Outcome 4 (CO4)**, which aims for us to "Determine the Taylor series and evaluate Fourier series expansion for different periodic functions." While Taylor series represent functions around a single point, Fourier series, and by extension, these half-range series, represent functions over an interval, breaking them down into a sum of sines and cosines. Think of it like decomposing a complex musical chord into its individual, simpler notes.

## Why Half-Range? The Need for Special Expansions

We're all familiar with the idea of Fourier series, which represent a function over a full period, say from $-L$ to $L$. But what happens when we're only interested in the behavior of a function over a *half-interval*, typically from $0$ to $L$? This often arises in practical scenarios. For instance, imagine analyzing a signal that's only "active" or meaningful for a positive duration, like the voltage pulse from a device. Or consider a physical phenomenon that's observed only over a certain range, and we want to model its characteristics using simple, fundamental components.

The challenge is, if we try to directly apply the standard Fourier series formulas to a function defined only on $0$ to $L$, we might not get the "nicest" or most useful representation. This is where the concept of "half-range" expansions comes in. We essentially "trick" the standard Fourier series machinery by creating a related function over a full interval that incorporates our original half-interval function.

Our textbook, Kreyszig's *Advanced Engineering Mathematics*, often presents Fourier series in the context of periodic functions. For half-range expansions, we're essentially creating an *even* or *odd* extension of our function over a larger interval to simplify the coefficients. This is a key technique in signal processing and analysis, and it aligns with the practical applications you'll encounter in electrical and physical sciences.

## The Core Idea: Even and Odd Extensions

The magic of half-range series lies in how we extend our function $f(x)$ defined on $[0, L]$ to a full interval, say $[-L, L]$, in a way that makes the resulting series have specific properties.

### 1. Half-Range Cosine Series Expansion

The goal here is to represent our function $f(x)$ on $[0, L]$ using *only cosine terms*. Why only cosines? Because cosine functions are **even** functions. An even function, remember, is one where $f(-x) = f(x)$. If we can make our extended function on $[-L, L]$ an even function, then its Fourier series will naturally consist only of cosine terms (and a constant term).

How do we achieve this? We take our function $f(x)$ defined on $[0, L]$ and create its **even extension**, let's call it $f_e(x)$, on the interval $[-L, L]$. This even extension is defined as:

*   $f_e(x) = f(x)$ for $0 \le x \le L$
*   $f_e(x) = f(-x)$ for $-L \le x < 0$

Think of it like mirroring the function across the y-axis. If you have a graph of $f(x)$ for $x \ge 0$, you just copy that shape for $x < 0$ but flipped.

Now, when we compute the Fourier series for this *even* function $f_e(x)$ over the interval $[-L, L]$, the coefficients for the sine terms (the $b_n$ coefficients) will automatically be zero. This is a fundamental property of Fourier series for even functions.

The Fourier series for $f_e(x)$ on $[-L, L]$ will be:

$f_e(x) \sim a_0 + \sum_{n=1}^{\infty} a_n \cos\left(\frac{n\pi x}{L}\right)$

where the coefficients $a_0$ and $a_n$ are calculated using the standard Fourier coefficient formulas, but taking advantage of the even symmetry to simplify them. Since $f_e(x)$ is even, we can compute the integrals over half the range and multiply by 2:

**Coefficient $a_0$:**

$a_0 = \frac{1}{2L} \int_{-L}^{L} f_e(x) dx$

Because $f_e(x)$ is even, $\int_{-L}^{L} f_e(x) dx = 2 \int_{0}^{L} f_e(x) dx$. Since $f_e(x) = f(x)$ on $[0, L]$, this simplifies to:

$a_0 = \frac{1}{L} \int_{0}^{L} f(x) dx$

This constant term represents the average value of the function over the interval $[0, L]$.

**Coefficient $a_n$ (for $n \ge 1$):**

$a_n = \frac{1}{L} \int_{-L}^{L} f_e(x) \cos\left(\frac{n\pi x}{L}\right) dx$

Again, since $f_e(x)$ is even and $\cos\left(\frac{n\pi x}{L}\right)$ is also even, their product $f_e(x) \cos\left(\frac{n\pi x}{L}\right)$ is even. So, we can simplify the integral:

$a_n = \frac{2}{L} \int_{0}^{L} f_e(x) \cos\left(\frac{n\pi x}{L}\right) dx$

And since $f_e(x) = f(x)$ on $[0, L]$:

$a_n = \frac{2}{L} \int_{0}^{L} f(x) \cos\left(\frac{n\pi x}{L}\right) dx$

**The Half-Range Cosine Series for $f(x)$ on $[0, L]$ is:**

$f(x) \sim \frac{a_0}{2} + \sum_{n=1}^{\infty} a_n \cos\left(\frac{n\pi x}{L}\right)$

Notice the $\frac{a_0}{2}$ instead of $a_0$. This is a convention in Fourier series where the constant term is $a_0/2$. The $a_0$ we calculated is actually $2 \times (\text{the constant term})$. So, let's be precise and define the coefficients as used in the final series.

Let's refine the definitions to match the final series form:

The **Half-Range Cosine Series** for $f(x)$ on $[0, L]$ is given by:

$f(x) \sim \frac{A_0}{2} + \sum_{n=1}^{\infty} A_n \cos\left(\frac{n\pi x}{L}\right)$

where:

*   **$A_0$**: This is the constant term. It is calculated as:
    $A_0 = \frac{2}{L} \int_{0}^{L} f(x) dx$
    (This is equivalent to twice our previously calculated $a_0$).

*   **$A_n$ (for $n \ge 1$)**: These are the cosine coefficients. They are calculated as:
    $A_n = \frac{2}{L} \int_{0}^{L} f(x) \cos\left(\frac{n\pi x}{L}\right) dx$
    (This is the same as our previously calculated $a_n$).

**Key Takeaway:** To get a half-range cosine series for $f(x)$ on $[0, L]$, we effectively assume $f(x)$ is part of an *even* function defined on $[-L, L]$, and then compute the Fourier series coefficients for that even function, noting that only the cosine terms will survive. The formulas we use for $A_0$ and $A_n$ directly incorporate this even extension.

This directly addresses **CO4** by providing a method to obtain a Fourier series expansion for functions over a specific interval. The "power series expansion in appropriate domains" mentioned in the module description implicitly relates to the fact that these series expansions are themselves forms of representing functions as infinite sums of simpler functions, similar in spirit to Taylor series.

### Example 1: $f(x) = x$ on $[0, \pi]$

Let's find the half-range cosine series for $f(x) = x$ on the interval $[0, \pi]$. Here, $L = \pi$.

We need to calculate $A_0$ and $A_n$.

**Calculating $A_0$:**

$A_0 = \frac{2}{L} \int_{0}^{L} f(x) dx = \frac{2}{\pi} \int_{0}^{\pi} x \, dx$
$A_0 = \frac{2}{\pi} \left[ \frac{x^2}{2} \right]_{0}^{\pi} = \frac{2}{\pi} \left( \frac{\pi^2}{2} - 0 \right) = \pi$

So, the constant term is $\frac{A_0}{2} = \frac{\pi}{2}$.

**Calculating $A_n$:**

$A_n = \frac{2}{L} \int_{0}^{L} f(x) \cos\left(\frac{n\pi x}{L}\right) dx = \frac{2}{\pi} \int_{0}^{\pi} x \cos(nx) \, dx$

This integral requires integration by parts. Recall the formula: $\int u \, dv = uv - \int v \, du$.
Let $u = x$ and $dv = \cos(nx) \, dx$.
Then $du = dx$ and $v = \frac{1}{n} \sin(nx)$.

$\int x \cos(nx) \, dx = x \left(\frac{1}{n} \sin(nx)\right) - \int \frac{1}{n} \sin(nx) \, dx$
$= \frac{x}{n} \sin(nx) - \frac{1}{n} \int \sin(nx) \, dx$
$= \frac{x}{n} \sin(nx) - \frac{1}{n} \left(-\frac{1}{n} \cos(nx)\right)$
$= \frac{x}{n} \sin(nx) + \frac{1}{n^2} \cos(nx)$

Now, let's evaluate this from $0$ to $\pi$:

$A_n = \frac{2}{\pi} \left[ \frac{x}{n} \sin(nx) + \frac{1}{n^2} \cos(nx) \right]_{0}^{\pi}$
$A_n = \frac{2}{\pi} \left[ \left(\frac{\pi}{n} \sin(n\pi) + \frac{1}{n^2} \cos(n\pi)\right) - \left(\frac{0}{n} \sin(0) + \frac{1}{n^2} \cos(0)\right) \right]$

Let's analyze the terms:
*   $\sin(n\pi) = 0$ for any integer $n$.
*   $\cos(n\pi) = (-1)^n$ for any integer $n$.
*   $\sin(0) = 0$.
*   $\cos(0) = 1$.

So, the expression becomes:

$A_n = \frac{2}{\pi} \left[ \left(\frac{\pi}{n} \cdot 0 + \frac{1}{n^2} (-1)^n\right) - \left(0 + \frac{1}{n^2} \cdot 1\right) \right]$
$A_n = \frac{2}{\pi} \left[ \frac{(-1)^n}{n^2} - \frac{1}{n^2} \right]$
$A_n = \frac{2}{\pi n^2} \left( (-1)^n - 1 \right)$

Now, let's look at the values of $A_n$:
*   If $n$ is **even**, say $n = 2k$, then $(-1)^n = (-1)^{2k} = 1$. So, $A_n = \frac{2}{\pi n^2} (1 - 1) = 0$.
*   If $n$ is **odd**, say $n = 2k-1$, then $(-1)^n = (-1)^{2k-1} = -1$. So, $A_n = \frac{2}{\pi n^2} (-1 - 1) = \frac{-4}{\pi n^2}$.

Therefore, the non-zero coefficients are for odd $n$.

**The Half-Range Cosine Series:**

Substituting the coefficients back into the series formula:

$f(x) \sim \frac{\pi}{2} + \sum_{n=1, 3, 5, ...}^{\infty} \frac{-4}{\pi n^2} \cos(nx)$

We can write this more explicitly for odd $n$:

$f(x) \sim \frac{\pi}{2} - \frac{4}{\pi} \left( \frac{\cos(x)}{1^2} + \frac{\cos(3x)}{3^2} + \frac{\cos(5x)}{5^2} + \dots \right)$

$f(x) \sim \frac{\pi}{2} - \frac{4}{\pi} \sum_{k=1}^{\infty} \frac{\cos((2k-1)x)}{(2k-1)^2}$

**Visualization and Intuition:** Imagine the function $f(x)=x$ on $[0, \pi]$. It's a straight line from $(0,0)$ to $(\pi, \pi)$. When we create its even extension, we mirror this line from $(\pi, \pi)$ down to $(0,0)$ and then continuing to $(-\pi, -\pi)$. The resulting function on $[-\pi, \pi]$ is a "sawtooth-like" wave, but with a sharp corner at $x=0$ and flat sections at $x=\pm \pi$. This even extension has a certain symmetry that is captured by cosine terms. The constant term $\pi/2$ tells us the average height of this extended function. The subsequent cosine terms refine the shape, smoothing out the corners.

This example demonstrates how we combine calculus (integration by parts) with Fourier series theory to achieve the desired expansion, directly impacting **CO4**.

### 2. Half-Range Sine Series Expansion (Brief Mention for Contrast)

Although our focus is on cosine series, it's important to know the counterpart. For a half-range sine series, we would extend $f(x)$ on $[0, L]$ to an **odd extension**, $f_o(x)$, on $[-L, L]$. An odd function satisfies $f_o(-x) = -f_o(x)$. This means it's symmetric about the origin.

For an odd extension, the Fourier series on $[-L, L]$ will consist only of sine terms (and no constant term). The coefficients would be:

*   **$b_n$**:
    $b_n = \frac{2}{L} \int_{0}^{L} f(x) \sin\left(\frac{n\pi x}{L}\right) dx$

The series would then be:
$f(x) \sim \sum_{n=1}^{\infty} b_n \sin\left(\frac{n\pi x}{L}\right)$

We choose cosine series when we want our representation to be smooth at $x=0$ (because cosines are even and their derivative is zero at 0) or when the original function's behavior suggests even symmetry. We choose sine series when the function's behavior suggests odd symmetry or a jump at $x=0$.

## Connecting to Taylor Series and Power Series Domains

The module title mentions "Taylor series representation (without proof, assuming the possibility of power series expansion in appropriate domains)". How does this relate to Fourier series, specifically half-range cosine series?

*   **Approximation:** Both Taylor and Fourier series are methods of approximating a function using simpler components (polynomials for Taylor, sinusoids for Fourier).
*   **Domain of Validity:** Taylor series converge to the function in a neighborhood around a point. Fourier series converge to the function over an interval, or at points of continuity within that interval. The "appropriate domains" for power series expansion can be seen as the intervals where our functions are well-behaved enough for these expansions to exist and converge.
*   **Building Blocks:** Taylor series use powers of $x$ ($1, x, x^2, x^3, \dots$). Fourier series use fundamental frequencies (sines and cosines). Both are fundamental building blocks.
*   **Function Representation:** The ability to represent a function as an infinite sum of simpler terms is a core concept, whether it's a polynomial sum or a trigonometric sum.

When we talk about "power series expansion" in the context of Fourier series, it's more about the **analytical representation** they provide over an interval. The coefficients we derive for the cosine series, for instance, are specific values derived from the function's integral properties, much like how Taylor coefficients are derived from derivatives. The existence of these series relies on the function satisfying certain conditions (like being piecewise continuous and having a finite number of discontinuities, as discussed in most Fourier series texts like Kreyszig or Haykin's *Signals and Systems*).

## Practical Applications and Examples

Think about signals in engineering. A pulse that starts at time $t=0$ and has a duration $T$ can be considered a function $f(t)$ on $[0, T]$. If we want to decompose this pulse into its fundamental frequencies, a half-range cosine series (if it's an even pulse shape) or a half-range sine series (if it's an odd pulse shape) might be very useful.

Consider an electrical circuit where a voltage source is applied for a finite time. The resulting current or voltage in other parts of the circuit might exhibit behaviors that can be elegantly described by these series.

**Example 2: $f(x) = 1$ on $[0, 2]$**

Let's find the half-range cosine series for the constant function $f(x) = 1$ on $[0, 2]$. Here, $L=2$.

**Calculating $A_0$:**

$A_0 = \frac{2}{L} \int_{0}^{L} f(x) dx = \frac{2}{2} \int_{0}^{2} 1 \, dx$
$A_0 = 1 \cdot [x]_{0}^{2} = 2 - 0 = 2$

The constant term is $\frac{A_0}{2} = \frac{2}{2} = 1$. This makes perfect sense; the average value of a constant function is the constant itself.

**Calculating $A_n$:**

$A_n = \frac{2}{L} \int_{0}^{L} f(x) \cos\left(\frac{n\pi x}{L}\right) dx = \frac{2}{2} \int_{0}^{2} 1 \cdot \cos\left(\frac{n\pi x}{2}\right) dx$
$A_n = \int_{0}^{2} \cos\left(\frac{n\pi x}{2}\right) dx$

Now, we integrate:
$A_n = \left[ \frac{\sin\left(\frac{n\pi x}{2}\right)}{\frac{n\pi}{2}} \right]_{0}^{2} = \left[ \frac{2}{n\pi} \sin\left(\frac{n\pi x}{2}\right) \right]_{0}^{2}$
$A_n = \frac{2}{n\pi} \left( \sin\left(\frac{n\pi \cdot 2}{2}\right) - \sin\left(\frac{n\pi \cdot 0}{2}\right) \right)$
$A_n = \frac{2}{n\pi} (\sin(n\pi) - \sin(0))$

Since $\sin(n\pi) = 0$ and $\sin(0) = 0$ for all integers $n$, we get:

$A_n = \frac{2}{n\pi} (0 - 0) = 0$ for all $n \ge 1$.

**The Half-Range Cosine Series:**

$f(x) \sim \frac{A_0}{2} + \sum_{n=1}^{\infty} A_n \cos\left(\frac{n\pi x}{L}\right)$
$f(x) \sim 1 + \sum_{n=1}^{\infty} 0 \cdot \cos\left(\frac{n\pi x}{2}\right)$
$f(x) \sim 1$

This is a trivial result, but an important one. The half-range cosine series of a constant function is just the constant itself. This confirms our understanding. The even extension of $f(x)=1$ on $[0,2]$ to $[-2,2]$ is still $f_e(x)=1$, which is an even function, and its Fourier series is simply 1.

**Common Pitfalls:**
*   Forgetting to multiply by 2 when simplifying integrals due to symmetry.
*   Mistakes in integration by parts.
*   Incorrectly evaluating $\sin(n\pi)$ or $\cos(n\pi)$.
*   Confusing the definition of $a_0$ and $A_0$. Remember, the final series has $\frac{A_0}{2}$, and $A_0$ is the integral over the *full* interval $[-L,L]$ scaled by $1/(2L)$, which becomes $\frac{2}{L}$ when integrating over $[0,L]$ for even functions.

**Exam Tip:** Be very careful with the limits of integration and the values of trigonometric functions at these limits. Also, pay close attention to whether the question asks for a half-range *cosine* or *sine* series, as this dictates the type of extension you should consider.

## Summary and Key Points to Remember

*   **Purpose:** Half-range series represent a function defined on $[0, L]$ using only cosine terms (half-range cosine series) or only sine terms (half-range sine series).
*   **Half-Range Cosine Series:**
    *   Achieved by creating an **even extension** of $f(x)$ on $[-L, L]$.
    *   Series form: $f(x) \sim \frac{A_0}{2} + \sum_{n=1}^{\infty} A_n \cos\left(\frac{n\pi x}{L}\right)$
    *   Coefficients:
        *   $A_0 = \frac{2}{L} \int_{0}^{L} f(x) dx$
        *   $A_n = \frac{2}{L} \int_{0}^{L} f(x) \cos\left(\frac{n\pi x}{L}\right) dx$
    *   Useful when the original function has even symmetry or you want a smooth representation at $x=0$.
*   **Half-Range Sine Series:**
    *   Achieved by creating an **odd extension** of $f(x)$ on $[-L, L]$.
    *   Series form: $f(x) \sim \sum_{n=1}^{\infty} B_n \sin\left(\frac{n\pi x}{L}\right)$
    *   Coefficients:
        *   $B_n = \frac{2}{L} \int_{0}^{L} f(x) \sin\left(\frac{n\pi x}{L}\right) dx$
    *   Useful when the original function has odd symmetry or a jump at $x=0$.
*   **Connection to CO4:** This topic is a direct application of Fourier series, allowing us to analyze functions over specific intervals relevant to physical systems. The process of finding coefficients involves integration, a core calculus skill.

This understanding is crucial for many areas in electrical engineering and physics where periodic or semi-periodic phenomena are analyzed. By breaking down complex signals into simpler sinusoidal components, we gain insights into their behavior and can design systems that interact with them effectively.

---

## Sample Questions with Answers

**Question 1 (Conceptual):**
What is the fundamental idea behind constructing a half-range cosine series for a function $f(x)$ defined on $[0, L]$? Explain why only cosine terms appear in the expansion.

**Answer:**
The fundamental idea behind a half-range cosine series is to extend the function $f(x)$ defined on $[0, L]$ to the interval $[-L, L]$ in such a way that the extended function is **even**. An even function is one where $f_e(-x) = f_e(x)$. This is achieved by setting $f_e(x) = f(x)$ for $0 \le x \le L$ and $f_e(x) = f(-x)$ for $-L \le x < 0$.

The standard Fourier series for an even function on $[-L, L]$ inherently contains only cosine terms (and a constant term) because the sine terms in a Fourier series are associated with the odd part of a function, and an even function has no odd part. The integral for the sine coefficients ($b_n$) will evaluate to zero for an even function. Thus, the resulting expansion for $f(x)$ on $[0, L]$ is composed entirely of cosine terms, including the constant term $\frac{A_0}{2}$.

**Question 2 (Problem-Solving):**
Find the half-range cosine series expansion for the function $f(x) = x^2$ on the interval $[0, \pi]$.

**Answer:**
Here, $L = \pi$. The series will be of the form:
$f(x) \sim \frac{A_0}{2} + \sum_{n=1}^{\infty} A_n \cos\left(\frac{n\pi x}{\pi}\right) = \frac{A_0}{2} + \sum_{n=1}^{\infty} A_n \cos(nx)$

**1. Calculate $A_0$:**
$A_0 = \frac{2}{L} \int_{0}^{L} f(x) dx = \frac{2}{\pi} \int_{0}^{\pi} x^2 dx$
$A_0 = \frac{2}{\pi} \left[ \frac{x^3}{3} \right]_{0}^{\pi} = \frac{2}{\pi} \left( \frac{\pi^3}{3} - 0 \right) = \frac{2\pi^2}{3}$
The constant term is $\frac{A_0}{2} = \frac{\pi^2}{3}$.

**2. Calculate $A_n$ for $n \ge 1$:**
$A_n = \frac{2}{L} \int_{0}^{L} f(x) \cos(nx) dx = \frac{2}{\pi} \int_{0}^{\pi} x^2 \cos(nx) dx$

We need to use integration by parts twice.
Let $I = \int x^2 \cos(nx) dx$.
First integration by parts: $u = x^2, dv = \cos(nx) dx \implies du = 2x dx, v = \frac{1}{n}\sin(nx)$.
$I = x^2 \left(\frac{1}{n}\sin(nx)\right) - \int \frac{1}{n}\sin(nx) (2x dx)$
$I = \frac{x^2}{n}\sin(nx) - \frac{2}{n} \int x \sin(nx) dx$

Second integration by parts for $\int x \sin(nx) dx$: $u = x, dv = \sin(nx) dx \implies du = dx, v = -\frac{1}{n}\cos(nx)$.
$\int x \sin(nx) dx = x \left(-\frac{1}{n}\cos(nx)\right) - \int \left(-\frac{1}{n}\cos(nx)\right) dx$
$= -\frac{x}{n}\cos(nx) + \frac{1}{n} \int \cos(nx) dx$
$= -\frac{x}{n}\cos(nx) + \frac{1}{n} \left(\frac{1}{n}\sin(nx)\right)$
$= -\frac{x}{n}\cos(nx) + \frac{1}{n^2}\sin(nx)$

Substitute this back into $I$:
$I = \frac{x^2}{n}\sin(nx) - \frac{2}{n} \left(-\frac{x}{n}\cos(nx) + \frac{1}{n^2}\sin(nx)\right)$
$I = \frac{x^2}{n}\sin(nx) + \frac{2x}{n^2}\cos(nx) - \frac{2}{n^3}\sin(nx)$

Now evaluate $A_n = \frac{2}{\pi} [I]_{0}^{\pi}$:
$A_n = \frac{2}{\pi} \left[ \frac{x^2}{n}\sin(nx) + \frac{2x}{n^2}\cos(nx) - \frac{2}{n^3}\sin(nx) \right]_{0}^{\pi}$

Evaluate at the limits:
At $x=\pi$: $\frac{\pi^2}{n}\sin(n\pi) + \frac{2\pi}{n^2}\cos(n\pi) - \frac{2}{n^3}\sin(n\pi)$
Using $\sin(n\pi) = 0$ and $\cos(n\pi) = (-1)^n$:
$0 + \frac{2\pi}{n^2}(-1)^n - 0 = \frac{2\pi}{n^2}(-1)^n$

At $x=0$: $\frac{0^2}{n}\sin(0) + \frac{2(0)}{n^2}\cos(0) - \frac{2}{n^3}\sin(0)$
$= 0 + 0 - 0 = 0$

So, $A_n = \frac{2}{\pi} \left[ \frac{2\pi}{n^2}(-1)^n - 0 \right] = \frac{2}{\pi} \cdot \frac{2\pi}{n^2}(-1)^n = \frac{4}{n^2}(-1)^n$.

**The Half-Range Cosine Series:**
$f(x) \sim \frac{\pi^2}{3} + \sum_{n=1}^{\infty} \frac{4(-1)^n}{n^2} \cos(nx)$

This series represents $x^2$ on $[0, \pi]$. It's an even function that oscillates and approximates the parabolic shape of $x^2$ on the given interval. This is a good example of how Fourier series can represent functions that are not necessarily periodic themselves but are analyzed over a finite interval.

**Question 3 (Conceptual/Application):**
Suppose you are analyzing a sensor that produces a positive voltage pulse from $t=0$ to $t=T$, and zero voltage elsewhere. If the pulse shape is symmetric about $t=T/2$ (an even function within the interval $[0, T]$), which type of half-range Fourier series (cosine or sine) would be more natural to use for its analysis, and why?

**Answer:**
A symmetric pulse shape about $t=T/2$ within the interval $[0, T]$ suggests an **even symmetry** relative to the center of the interval. When we consider extending this function to a full interval $[-T, T]$ for analysis, creating an even extension of this function would result in a function that is symmetric about the y-axis (if we consider $t$ as the x-axis).

For such an even extension, its Fourier series will naturally consist only of cosine terms and a constant term. Therefore, a **half-range cosine series** would be the more natural and convenient choice for analysis. It directly captures the inherent even symmetry of the pulse shape, simplifying the calculation of coefficients as the sine coefficients ($B_n$) would all be zero.
