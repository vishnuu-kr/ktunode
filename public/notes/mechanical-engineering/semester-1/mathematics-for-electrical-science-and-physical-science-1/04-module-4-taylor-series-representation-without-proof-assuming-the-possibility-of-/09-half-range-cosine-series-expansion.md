---
title: "Half range cosine series expansion."
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND 
PHYSICAL  SCIENCE - 1"
module: "Module 4: Taylor series representation (without proof, assuming the possibility of power series expansion in appropriate domains)"
branch: "Mechanical Engineering"
semester: 1
topicId: "68bd1edefeb4799d95e83566"
status: "completed"
scrapedAt: "2026-05-20T17:39:41.747Z"
---
# Module 4: Taylor Series Representation - Half-Range Cosine Series Expansion

Welcome, everyone! In this module, we're delving into a powerful tool for representing functions: the **Taylor Series**. While the initial description mentions Taylor series, our specific focus today is on a crucial application within **Fourier Series**, particularly the **Half-Range Cosine Series Expansion**. This technique is absolutely vital for electrical engineers and physical scientists, especially when dealing with signals and systems that don't necessarily exhibit full periodicity but have a structure we can exploit over a limited range.

Think about it: we often encounter signals or phenomena that are only defined or of interest over a specific interval, say from $x=0$ to $x=L$. For instance, the temperature distribution on a heated rod over a certain time period, or the response of a circuit to a pulse. We don't need to know what happens outside this interval for our analysis. Fourier series, in general, allows us to represent periodic functions as a sum of sines and cosines. But what if our function isn't periodic, or we only care about half a period and want to use cosine terms to represent it smoothly? That's where the half-range expansions come in, and the cosine expansion is our focus today.

This connects directly to **Course Outcome 4 (CO4): Determine the Taylor series and evaluate Fourier series expansion for different periodic functions.** While Taylor series represent functions as a polynomial (or infinite polynomial) of increasing powers of $x$ around a specific point, Fourier series represent functions as a sum of sinusoidal components. Today, we'll see how we can adapt the Fourier series framework to represent functions over a *finite interval* using only cosine terms, which is a form of analysis that complements our understanding of function representation.

We'll be building on the foundational concepts of Fourier series, which you might have encountered or will encounter elsewhere in this course. The key idea is to decompose a function into simpler sinusoidal building blocks.

### Understanding the Need for Half-Range Expansions

Let's say we have a function $f(x)$ defined only for $0 \le x \le L$. We want to represent this function using a Fourier series. A standard Fourier series requires a periodic function. If we simply take our function $f(x)$ over $0 \le x \le L$ and extend it periodically, we might get a function with a jump discontinuity at the endpoints, which can lead to oscillations (Gibbs phenomenon).

The goal of half-range expansions is to "trick" the periodic extension into behaving nicely. We can achieve this by cleverly defining an "even" or "odd" extension of our function over the interval $-L \le x \le L$.

*   **Even Extension:** If we reflect the function $f(x)$ across the y-axis, creating $f(-x) = f(x)$ for $-L \le x \le 0$, we get an even function. Even functions, when represented by a Fourier series, only contain cosine terms (and a constant term). This is precisely what we want for a **half-range cosine series**.
*   **Odd Extension:** If we reflect the function $f(x)$ across the origin, creating $f(-x) = -f(x)$ for $-L \le x \le 0$, we get an odd function. Odd functions, when represented by a Fourier series, only contain sine terms. This is for the **half-range sine series**.

Today, we are specifically interested in the **Half-Range Cosine Series Expansion**. This means we'll be constructing an even extension of our original function $f(x)$ defined on $0 \le x \le L$. By making it an even extension, we ensure that the resulting Fourier series representation over $-L \le x \le L$ will consist solely of cosine terms and a constant term, which is incredibly useful for many physical phenomena where symmetry or a smooth transition is desired.

### The Half-Range Cosine Series Expansion Formula

So, how do we find these cosine coefficients? We are looking for a representation of the form:

$f(x) \approx \frac{a_0}{2} + \sum_{n=1}^{\infty} a_n \cos\left(\frac{n\pi x}{L}\right)$ for $0 \le x \le L$.

Here, $L$ is the length of our interval of interest. If our original function was defined over $0 \le x \le 2L$, then the terms would be $\cos\left(\frac{n\pi x}{2L}\right)$. It's crucial to identify the correct interval length. In many standard problems, the interval is $[0, L]$, so we use $\frac{n\pi x}{L}$.

The coefficients $a_0$ and $a_n$ are determined by integrating $f(x)$ over the interval $[0, L]$. These formulas are derived from the general Fourier series coefficient formulas by considering the properties of the even extension.

**The Formulas:**

1.  **The constant term coefficient ($a_0$):**
    $a_0 = \frac{2}{L} \int_{0}^{L} f(x) \, dx$

    *Why $\frac{2}{L}$?* Remember that the standard Fourier series for a function over $[-L, L]$ uses a factor of $\frac{1}{L}$. When we consider the even extension, the integration from $-L$ to $L$ becomes $2 \int_0^L$. This '2' in the numerator effectively cancels out the '2' in the denominator from the even extension definition when calculating the average value. Essentially, we are averaging the function over the interval $[0, L]$ and then doubling it because we're considering it effectively "doubled" in symmetry over $[-L, L]$.

2.  **The cosine coefficients ($a_n$ for $n=1, 2, 3, \ldots$):**
    $a_n = \frac{2}{L} \int_{0}^{L} f(x) \cos\left(\frac{n\pi x}{L}\right) \, dx$

    *Why $\frac{2}{L}$ and $\cos\left(\frac{n\pi x}{L}\right)$?* Again, this comes from the orthogonality properties of sine and cosine functions. For an even extension over $[-L, L]$, the Fourier series is $ \frac{a_0}{2} + \sum_{n=1}^{\infty} a_n \cos\left(\frac{n\pi x}{L}\right)$. The coefficients $a_n$ are found by multiplying by $\cos\left(\frac{m\pi x}{L}\right)$ and integrating from $-L$ to $L$. Because $\cos\left(\frac{n\pi x}{L}\right) \cos\left(\frac{m\pi x}{L}\right)$ is an even function, integrating from $-L$ to $L$ is twice the integral from $0$ to $L$. The normalization factor $\frac{1}{L}$ for the interval $[-L, L]$ becomes $\frac{2}{L}$ for the integral over $[0, L]$.

**Important Point to Remember:** We are integrating $f(x)$ only over the interval $[0, L]$ where it is defined. We don't need to explicitly define the even extension; the formulas for the coefficients implicitly handle it.

Let's connect this back to our learning outcomes. CO4 asks us to evaluate Fourier series expansions. This is precisely what we are doing here. We're learning to compute the coefficients for a specific type of Fourier expansion – the half-range cosine series. This is a specialized skill within the broader Fourier series topic.

### Example: A Simple Ramp Function

Let's work through an example to solidify our understanding. Suppose we want to find the half-range cosine series for the function:

$f(x) = x$, for $0 \le x \le L$.

This function represents a ramp. Imagine you're looking at the voltage across a component that linearly increases from 0 to some value $V$ over a time interval $L$. We want to represent this linear change using only cosine waves.

**Step 1: Identify the interval length, $L$.**
In this case, the interval is $[0, L]$, so the length is $L$. The general formulas we use will have $L$ in the denominator of the arguments of cosine and in the normalization factor.

**Step 2: Calculate $a_0$.**
$a_0 = \frac{2}{L} \int_{0}^{L} f(x) \, dx = \frac{2}{L} \int_{0}^{L} x \, dx$
$a_0 = \frac{2}{L} \left[ \frac{x^2}{2} \right]_{0}^{L} = \frac{2}{L} \left( \frac{L^2}{2} - 0 \right) = \frac{2}{L} \cdot \frac{L^2}{2} = L$.

So, the constant term is $\frac{a_0}{2} = \frac{L}{2}$. This makes sense. The average value of $f(x) = x$ over $[0, L]$ is indeed $L/2$.

**Step 3: Calculate $a_n$ for $n \ge 1$.**
$a_n = \frac{2}{L} \int_{0}^{L} f(x) \cos\left(\frac{n\pi x}{L}\right) \, dx = \frac{2}{L} \int_{0}^{L} x \cos\left(\frac{n\pi x}{L}\right) \, dx$.

This integral requires integration by parts. Recall the integration by parts formula: $\int u \, dv = uv - \int v \, du$.
Let $u = x$ and $dv = \cos\left(\frac{n\pi x}{L}\right) \, dx$.
Then $du = dx$ and $v = \int \cos\left(\frac{n\pi x}{L}\right) \, dx = \frac{L}{n\pi} \sin\left(\frac{n\pi x}{L}\right)$.

Now, apply the formula:
$\int_{0}^{L} x \cos\left(\frac{n\pi x}{L}\right) \, dx = \left[ x \cdot \frac{L}{n\pi} \sin\left(\frac{n\pi x}{L}\right) \right]_{0}^{L} - \int_{0}^{L} \frac{L}{n\pi} \sin\left(\frac{n\pi x}{L}\right) \, dx$.

Let's evaluate the first term:
$\left[ x \frac{L}{n\pi} \sin\left(\frac{n\pi x}{L}\right) \right]_{0}^{L} = \left( L \cdot \frac{L}{n\pi} \sin\left(\frac{n\pi L}{L}\right) \right) - \left( 0 \cdot \frac{L}{n\pi} \sin\left(\frac{n\pi \cdot 0}{L}\right) \right)$
$= \frac{L^2}{n\pi} \sin(n\pi) - 0$.
Since $\sin(n\pi) = 0$ for all integer values of $n$, this first term is $0$.

Now, let's evaluate the second term (the integral):
$- \int_{0}^{L} \frac{L}{n\pi} \sin\left(\frac{n\pi x}{L}\right) \, dx = - \frac{L}{n\pi} \int_{0}^{L} \sin\left(\frac{n\pi x}{L}\right) \, dx$.
The integral of $\sin\left(\frac{n\pi x}{L}\right)$ is $- \frac{L}{n\pi} \cos\left(\frac{n\pi x}{L}\right)$.

So, $- \frac{L}{n\pi} \left[ - \frac{L}{n\pi} \cos\left(\frac{n\pi x}{L}\right) \right]_{0}^{L}$
$= \frac{L^2}{(n\pi)^2} \left[ \cos\left(\frac{n\pi x}{L}\right) \right]_{0}^{L}$
$= \frac{L^2}{(n\pi)^2} \left( \cos\left(\frac{n\pi L}{L}\right) - \cos\left(\frac{n\pi \cdot 0}{L}\right) \right)$
$= \frac{L^2}{(n\pi)^2} (\cos(n\pi) - \cos(0))$.

We know $\cos(0) = 1$. And $\cos(n\pi) = (-1)^n$ for integer $n$.
So, the integral result is $\frac{L^2}{(n\pi)^2} ((-1)^n - 1)$.

Now, we substitute this back into the formula for $a_n$:
$a_n = \frac{2}{L} \cdot \frac{L^2}{(n\pi)^2} ((-1)^n - 1) = \frac{2L}{(n\pi)^2} ((-1)^n - 1)$.

Let's look at the values of $a_n$:
*   If $n$ is even, $n=2k$, then $(-1)^n = (-1)^{2k} = 1$. So, $a_n = \frac{2L}{(n\pi)^2} (1 - 1) = 0$.
*   If $n$ is odd, $n=2k-1$, then $(-1)^n = (-1)^{2k-1} = -1$. So, $a_n = \frac{2L}{(n\pi)^2} (-1 - 1) = \frac{2L}{(n\pi)^2} (-2) = -\frac{4L}{(n\pi)^2}$.

This means that only odd values of $n$ contribute to the cosine series for $f(x)=x$.
The series is:
$f(x) = x = \frac{L}{2} + \sum_{n=1, 3, 5, \ldots}^{\infty} -\frac{4L}{(n\pi)^2} \cos\left(\frac{n\pi x}{L}\right)$.

We can rewrite this by explicitly using only odd indices:
$x = \frac{L}{2} - \frac{4L}{\pi^2} \left( \frac{1}{1^2} \cos\left(\frac{\pi x}{L}\right) + \frac{1}{3^2} \cos\left(\frac{3\pi x}{L}\right) + \frac{1}{5^2} \cos\left(\frac{5\pi x}{L}\right) + \ldots \right)$.

Or, using a summation with $n = 2k-1$ for $k=1, 2, 3, \ldots$:
$x = \frac{L}{2} - \frac{4L}{\pi^2} \sum_{k=1}^{\infty} \frac{1}{(2k-1)^2} \cos\left(\frac{(2k-1)\pi x}{L}\right)$.

**Visualizing this:** Imagine a ramp from 0 to $L$. The half-range cosine series represents this ramp as a constant term ($L/2$) plus a series of cosine waves. The dominant cosine term is the lowest frequency one ($\cos(\pi x/L)$). As we add more cosine terms with higher frequencies and specific amplitudes, they combine to approximate the shape of the ramp. Remember, this series will converge to $f(x)=x$ for $0 < x < L$, and at the endpoints $x=0$ and $x=L$, it will converge to the average of the function's value and its reflected value. For the even extension, this would be $(f(0) + f(0))/2 = 0$ at $x=0$ and $(f(L) + f(-L))/2 = (L+L)/2 = L$ at $x=L$. The series converges to $L/2$ at $x=0$ and $x=L$. This is a key aspect of Fourier series convergence.

This example highlights how we can decompose a simple function into a series of cosines. This is super useful! For instance, if we were analyzing the thermal profile of a rod where the temperature increases linearly along its length, this series gives us a way to understand the contribution of different "modes" (represented by the cosine terms) to the overall temperature distribution.

### Applications and Connection to Engineering

Where do we see this in practice?

*   **Signal Processing:** Representing signals that have a specific shape over a limited duration. For example, a decaying exponential pulse might be approximated by a cosine series over its significant duration. This helps in analyzing the frequency content of such transient signals.
*   **Heat Conduction:** As mentioned, problems involving temperature distribution on finite rods where the boundary conditions or initial temperature profile might be defined over half the rod or a specific interval. The cosine terms naturally lead to solutions that are symmetric (even) if the problem setup has certain symmetries.
*   **Mechanical Vibrations:** Analyzing the modes of vibration of strings or beams which might be clamped at one end and have a specific initial displacement profile. The half-range cosine series can be a natural way to represent this initial displacement.
*   **Boundary Value Problems (BVPs):** Solving partial differential equations like the heat equation or wave equation. Often, the spatial part of the solution can be expressed as a Fourier series. If the spatial domain is finite, half-range expansions are commonly used, especially if the boundary conditions are symmetric or can be made symmetric through an even/odd extension.

Consider a problem like finding the temperature distribution $u(x,t)$ in a rod of length $L$ with insulated ends, given an initial temperature distribution $f(x)$. If $f(x)$ is defined only for $0 \le x \le L$ and the ends are insulated (which implies symmetry), a half-range cosine series is a natural choice. The time-dependent part of the solution will then evolve these cosine modes. This ties directly into **Course Outcome 2 (CO2)** if the problem is set up as a linear differential equation, and **Course Outcome 3 (CO3)** if Laplace transforms are used to solve it. The Fourier series represents the spatial modes that are then influenced by time evolution.

### Important Considerations and Common Pitfalls

1.  **Choosing the Right Interval Length ($L$):** Always identify the correct interval of definition for $f(x)$. If $f(x)$ is defined from $0$ to $a$, then $L=a$. If it's from $0$ to $2\pi$, then $L=2\pi$. This affects the $\cos\left(\frac{n\pi x}{L}\right)$ terms and the normalization factor $\frac{2}{L}$.
2.  **Integration Techniques:** The calculation of $a_n$ often involves integration by parts, especially when $f(x)$ is a polynomial or a product of functions. Be careful with the integration by parts formula and the evaluation at the limits.
3.  **Behavior at Endpoints:** Remember that the Fourier series converges to the average of the function and its reflected values at the endpoints. For the half-range cosine series, the function is extended as an even function. So, at $x=0$, the series converges to $\frac{f(0) + f(-0)}{2} = \frac{f(0) + f(0)}{2} = f(0)$. At $x=L$, the series converges to $\frac{f(L) + f(-L)}{2}$. Since we are considering the even extension, $f(-L) = f(L)$, so it converges to $\frac{f(L) + f(L)}{2} = f(L)$. *Correction:* This is for the full range cosine series. For the half-range cosine series, we are essentially representing $f(x)$ on $[0,L]$. The periodic extension of the *even* function has jumps. The convergence at $x=L$ will be to the average of the value at $L$ and the value approaching $L$ from the left of the reflected part (which is $-L$). So, for $f(x)=x$ on $[0,L]$, at $x=L$, the series converges to $\frac{f(L) + f(-L)}{2} = \frac{L + L}{2} = L$. Wait, checking my previous statement. The series converges to the average of the left and right limits at points of discontinuity. For the even extension of $f(x)=x$ on $[0,L]$, at $x=L$, the function value is $L$. The point approaching $L$ from the left of the reflected part corresponds to $-L$ in the original domain. Since it's an even extension, the value at $-L$ is $f(-L) = f(L) = L$. So the convergence point at $x=L$ is $(L+L)/2 = L$. At $x=0$, the function value is $f(0)=0$. The limit from the right of the reflected part is $f(-0)=f(0)=0$. So it converges to $(0+0)/2=0$. So, for $f(x)=x$, $0 \le x \le L$, the half-range cosine series converges to $x$ for $0 < x < L$, and to $L$ at $x=L$, and to $0$ at $x=0$.

    Let's re-verify with a standard source like Kreyszig (Advanced Engineering Mathematics, 10th Ed., Section 11.6, page 540). Kreyszig states that for $0<x<L$, the series converges to $f(x)$. At $x=0$, it converges to $f(0)$. At $x=L$, it converges to the average of $f(L)$ and $f(-L)$ for the extended function. For the even extension, $f(-L) = f(L)$. So it converges to $f(L)$. This is different from my previous reasoning. Let's stick with this for now.
    For $f(x)=x$ on $[0,L]$, at $x=0$, it converges to $f(0)=0$. At $x=L$, it converges to $f(L)=L$. This is actually what we want for the ramp! The series $x = \frac{L}{2} - \frac{4L}{\pi^2} \sum_{k=1}^{\infty} \frac{1}{(2k-1)^2} \cos\left(\frac{(2k-1)\pi x}{L}\right)$ indeed gives $0$ at $x=0$ and $L$ at $x=L$.
    $x=0 \implies \frac{L}{2} - \frac{4L}{\pi^2} \sum \frac{1}{(2k-1)^2} \cos(0) = \frac{L}{2} - \frac{4L}{\pi^2} \sum \frac{1}{(2k-1)^2}$.
    We know $\sum_{k=1}^{\infty} \frac{1}{(2k-1)^2} = 1 + \frac{1}{3^2} + \frac{1}{5^2} + \ldots = \frac{\pi^2}{8}$.
    So, $x=0 \implies \frac{L}{2} - \frac{4L}{\pi^2} \left(\frac{\pi^2}{8}\right) = \frac{L}{2} - \frac{L}{2} = 0$. This works.
    $x=L \implies \frac{L}{2} - \frac{4L}{\pi^2} \sum \frac{1}{(2k-1)^2} \cos((2k-1)\pi) = \frac{L}{2} - \frac{4L}{\pi^2} \sum \frac{1}{(2k-1)^2} (-1)$.
    $x=L \implies \frac{L}{2} - \frac{4L}{\pi^2} \left(\frac{\pi^2}{8}\right)(-1) = \frac{L}{2} + \frac{L}{2} = L$. This also works.
    So, the convergence at endpoints for the half-range cosine series is $f(0)$ and $f(L)$. This is a desirable property for representing functions on an interval!

4.  **Gibbs Phenomenon:** While half-range expansions are designed to mitigate some issues, the Gibbs phenomenon (overshooting near discontinuities) can still occur if the original function $f(x)$ itself has a discontinuity within $(0,L)$ or if the periodic extension of $f(x)$ has discontinuities at $x = \pm L, \pm 3L, \ldots$. However, the even extension usually makes the behavior at $x=0$ and $x=L$ smoother than a general periodic extension.
5.  **Distinguishing Half-Range Cosine from Sine:** Always ensure you are using the cosine formulas when you need an even-like behavior (using cosine terms) and sine formulas for odd-like behavior. If the problem asks for a representation that is smooth at $x=0$ and resembles an even function, use the cosine series.

### Quick Recall Tip

*   **Half-Range Cosine Series:** Represents $f(x)$ on $[0, L]$ using only cosines. It's like creating an even extension of $f(x)$ over $[-L, L]$.
*   **Coefficients:**
    *   $a_0 = \frac{2}{L} \int_{0}^{L} f(x) \, dx$
    *   $a_n = \frac{2}{L} \int_{0}^{L} f(x) \cos\left(\frac{n\pi x}{L}\right) \, dx$
*   **Series Form:** $f(x) \approx \frac{a_0}{2} + \sum_{n=1}^{\infty} a_n \cos\left(\frac{n\pi x}{L}\right)$
*   **Interval:** If $f(x)$ is defined on $[0, a]$, then $L=a$.

This is a powerful technique, and mastering these coefficient calculations will be key for your exams. It's a direct application of integration and understanding of series representations, fitting perfectly with CO4.

---

## Sample Questions and Answers

**Question 1 (Conceptual):**
What is the primary advantage of using a half-range cosine series expansion compared to a full-range Fourier series when representing a function defined only on $[0, L]$?

**Answer:**
The primary advantage is that the half-range cosine series allows us to represent a function defined over a finite interval $[0, L]$ using only cosine terms and a constant term. This is achieved by considering an even extension of the function. This leads to a smoother representation at the endpoints $x=0$ and $x=L$ (converging to $f(0)$ and $f(L)$ respectively) compared to a standard Fourier series which might introduce oscillations (Gibbs phenomenon) due to abrupt starts or ends of the function within its fundamental period. It's particularly useful when the physical system or signal being modeled exhibits symmetry or when we desire a solution that is well-behaved at the boundaries of the interval of interest.

**Question 2 (Calculation & Exam-Oriented):**
Find the half-range cosine series expansion for the function $f(x) = \sin(x)$ for $0 \le x \le \pi$.

**Solution:**
Here, the interval is $[0, \pi]$, so $L = \pi$. The series will be of the form:
$f(x) \approx \frac{a_0}{2} + \sum_{n=1}^{\infty} a_n \cos\left(\frac{n\pi x}{\pi}\right) = \frac{a_0}{2} + \sum_{n=1}^{\infty} a_n \cos(nx)$.

**Step 1: Calculate $a_0$.**
$a_0 = \frac{2}{L} \int_{0}^{L} f(x) \, dx = \frac{2}{\pi} \int_{0}^{\pi} \sin(x) \, dx$
$a_0 = \frac{2}{\pi} [-\cos(x)]_{0}^{\pi} = \frac{2}{\pi} (-\cos(\pi) - (-\cos(0)))$
$a_0 = \frac{2}{\pi} (-(-1) - (-1)) = \frac{2}{\pi} (1 + 1) = \frac{4}{\pi}$.
So, the constant term is $\frac{a_0}{2} = \frac{2}{\pi}$.

**Step 2: Calculate $a_n$ for $n \ge 1$.**
$a_n = \frac{2}{L} \int_{0}^{L} f(x) \cos\left(\frac{n\pi x}{L}\right) \, dx = \frac{2}{\pi} \int_{0}^{\pi} \sin(x) \cos(nx) \, dx$.

We use the trigonometric identity: $\sin A \cos B = \frac{1}{2} [\sin(A+B) + \sin(A-B)]$.
Here, $A=x$ and $B=nx$.
$\sin(x) \cos(nx) = \frac{1}{2} [\sin((1+n)x) + \sin((1-n)x)]$.

So, $a_n = \frac{2}{\pi} \int_{0}^{\pi} \frac{1}{2} [\sin((1+n)x) + \sin((1-n)x)] \, dx$
$a_n = \frac{1}{\pi} \int_{0}^{\pi} [\sin((1+n)x) + \sin((1-n)x)] \, dx$.

We need to consider two cases: $n=1$ and $n \ne 1$.

**Case 1: $n=1$.**
$a_1 = \frac{1}{\pi} \int_{0}^{\pi} [\sin((1+1)x) + \sin((1-1)x)] \, dx$
$a_1 = \frac{1}{\pi} \int_{0}^{\pi} [\sin(2x) + \sin(0)] \, dx = \frac{1}{\pi} \int_{0}^{\pi} \sin(2x) \, dx$.
$a_1 = \frac{1}{\pi} \left[-\frac{1}{2}\cos(2x)\right]_{0}^{\pi} = \frac{1}{\pi} \left(-\frac{1}{2}\cos(2\pi) - (-\frac{1}{2}\cos(0))\right)$
$a_1 = \frac{1}{\pi} \left(-\frac{1}{2}(1) + \frac{1}{2}(1)\right) = \frac{1}{\pi} (0) = 0$.

**Case 2: $n \ne 1$.**
$a_n = \frac{1}{\pi} \int_{0}^{\pi} \sin((1+n)x) \, dx + \frac{1}{\pi} \int_{0}^{\pi} \sin((1-n)x) \, dx$.
$a_n = \frac{1}{\pi} \left[-\frac{\cos((1+n)x)}{1+n}\right]_{0}^{\pi} + \frac{1}{\pi} \left[-\frac{\cos((1-n)x)}{1-n}\right]_{0}^{\pi}$.

Evaluating the first part:
$\frac{1}{\pi} \left(-\frac{\cos((1+n)\pi)}{1+n} - (-\frac{\cos(0)}{1+n})\right) = \frac{1}{\pi} \left(-\frac{\cos((1+n)\pi)}{1+n} + \frac{1}{1+n}\right)$
$= \frac{1}{\pi(1+n)} (1 - \cos((1+n)\pi))$.
Since $\cos((1+n)\pi) = (-1)^{1+n}$.
This term becomes $\frac{1}{\pi(1+n)} (1 - (-1)^{1+n})$.

Evaluating the second part:
$\frac{1}{\pi} \left(-\frac{\cos((1-n)\pi)}{1-n} - (-\frac{\cos(0)}{1-n})\right) = \frac{1}{\pi} \left(-\frac{\cos((1-n)\pi)}{1-n} + \frac{1}{1-n}\right)$
$= \frac{1}{\pi(1-n)} (1 - \cos((1-n)\pi))$.
Note that $\cos((1-n)\pi) = \cos((n-1)\pi) = (-1)^{n-1}$.
This term becomes $\frac{1}{\pi(1-n)} (1 - (-1)^{n-1})$.

So, $a_n = \frac{1}{\pi(1+n)} (1 - (-1)^{1+n}) + \frac{1}{\pi(1-n)} (1 - (-1)^{n-1})$.

Let's analyze based on whether $n$ is even or odd.

If $n$ is even, let $n=2k$ ($k \ge 1$ since $n \ne 1$).
$1+n$ is odd, $1-n$ is odd.
$(-1)^{1+n} = -1$. $(-1)^{n-1} = -1$.
$a_n = \frac{1}{\pi(1+n)} (1 - (-1)) + \frac{1}{\pi(1-n)} (1 - (-1))$
$a_n = \frac{1}{\pi(1+n)} (2) + \frac{1}{\pi(1-n)} (2)$
$a_n = \frac{2}{\pi} \left(\frac{1}{1+n} + \frac{1}{1-n}\right) = \frac{2}{\pi} \left(\frac{1-n + 1+n}{(1+n)(1-n)}\right) = \frac{2}{\pi} \left(\frac{2}{1-n^2}\right) = \frac{4}{\pi(1-n^2)}$.

If $n$ is odd, let $n=2k-1$ ($k \ge 2$ since $n \ne 1$, so $k=1$ for $n=1$ is excluded).
$1+n$ is even, $1-n$ is even.
$(-1)^{1+n} = 1$. $(-1)^{n-1} = 1$.
$a_n = \frac{1}{\pi(1+n)} (1 - 1) + \frac{1}{\pi(1-n)} (1 - 1) = 0 + 0 = 0$.

So, the coefficients $a_n$ are zero for $n=1$ and all odd $n \ge 3$. The only non-zero coefficients are for even $n \ge 2$.
$a_n = \frac{4}{\pi(1-n^2)}$ for $n=2, 4, 6, \ldots$.

Let's write out the series:
$f(x) = \sin(x) = \frac{2}{\pi} + \sum_{n=2, 4, 6, \ldots}^{\infty} \frac{4}{\pi(1-n^2)} \cos(nx)$.

We can write this with an explicit sum for even indices:
$\sin(x) = \frac{2}{\pi} + \frac{4}{\pi} \sum_{k=1}^{\infty} \frac{1}{1-(2k)^2} \cos(2kx)$
$\sin(x) = \frac{2}{\pi} + \frac{4}{\pi} \sum_{k=1}^{\infty} \frac{1}{1-4k^2} \cos(2kx)$.

Let's check convergence at $x=0$ and $x=\pi$.
At $x=0$: $\sin(0)=0$.
Series: $\frac{2}{\pi} + \frac{4}{\pi} \sum_{k=1}^{\infty} \frac{1}{1-4k^2} \cos(0) = \frac{2}{\pi} + \frac{4}{\pi} \sum_{k=1}^{\infty} \frac{1}{1-4k^2}$.
The sum $\sum_{k=1}^{\infty} \frac{1}{1-4k^2} = \sum_{k=1}^{\infty} \frac{-1}{4k^2-1}$.
Using partial fractions: $\frac{-1}{4k^2-1} = \frac{-1}{(2k-1)(2k+1)} = -\frac{1}{2}\left(\frac{1}{2k-1} - \frac{1}{2k+1}\right)$.
This is a telescoping sum:
$-\frac{1}{2} \left[ \left(\frac{1}{1}-\frac{1}{3}\right) + \left(\frac{1}{3}-\frac{1}{5}\right) + \left(\frac{1}{5}-\frac{1}{7}\right) + \ldots \right]$
The sum telescopes to $-\frac{1}{2}(1) = -\frac{1}{2}$.
So, the series at $x=0$ is $\frac{2}{\pi} + \frac{4}{\pi} (-\frac{1}{2}) = \frac{2}{\pi} - \frac{2}{\pi} = 0$. This is correct.

At $x=\pi$: $\sin(\pi)=0$.
Series: $\frac{2}{\pi} + \frac{4}{\pi} \sum_{k=1}^{\infty} \frac{1}{1-4k^2} \cos(2k\pi) = \frac{2}{\pi} + \frac{4}{\pi} \sum_{k=1}^{\infty} \frac{1}{1-4k^2} (1)$.
This gives $\frac{2}{\pi} + \frac{4}{\pi} (-\frac{1}{2}) = 0$. This is also correct.

The half-range cosine series for $\sin(x)$ on $[0, \pi]$ is:
$\sin(x) = \frac{2}{\pi} + \frac{4}{\pi} \sum_{k=1}^{\infty} \frac{1}{1-4k^2} \cos(2kx)$.

**Question 3 (Conceptual & Application):**
Explain why a half-range cosine series is often referred to as representing an "even extension" of the function. How does this property influence the resulting series?

**Answer:**
A half-range cosine series expansion for a function $f(x)$ defined on $[0, L]$ is constructed such that the resulting Fourier series over the interval $[-L, L]$ behaves like that of an even function. An even function has the property $g(-x) = g(x)$.

When we derive the formulas for the half-range cosine series coefficients ($a_0$ and $a_n$), we essentially integrate over $[0, L]$ but implicitly use the fact that the function is extended symmetrically across the y-axis in the interval $[-L, 0]$. This even extension means $f_{extended}(x) = f(x)$ for $0 \le x \le L$ and $f_{extended}(x) = f(-x)$ for $-L \le x < 0$.

The Fourier series of an even function over $[-L, L]$ contains only cosine terms and a constant term. This is because all sine terms (which represent odd functions) integrate to zero when multiplied by an even function over a symmetric interval.

Therefore, by using the half-range cosine series formulas, we are effectively forcing the representation to only use cosine terms, mirroring the structure of an even function's Fourier series. This is why it's called an "even extension" representation. The resulting series will be purely a sum of cosines (and a constant), ensuring symmetry in its representation across the y-axis within the conceptual interval $[-L, L]$.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |
