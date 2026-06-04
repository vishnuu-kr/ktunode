---
title: "Fourier series of 2 l periodic functions"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL 
SCIENCE - 1"
module: "Module 4: Taylor series representation (without proof, assuming the possibility of power series expansion in appropriate domains)"
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc8f20463779487d9fd5"
status: "completed"
scrapedAt: "2026-05-23T17:35:14.366Z"
---
# Module 4: Taylor Series Representation and Fourier Series of Periodic Functions

Welcome, everyone! Today, we're diving into a crucial topic that bridges the gap between representing functions and understanding their behavior over intervals: **Fourier Series of $2l$-Periodic Functions**. Now, you might be thinking, "Professor, we've just been talking about Taylor series, which represent functions as infinite sums of polynomials. How does that relate to Fourier series?" That's a fantastic question, and the connection is deeper than you might initially expect. Both techniques aim to represent complex functions, but they do so using different building blocks. Taylor series use powers of $(x-a)$, creating a local approximation, while Fourier series use sines and cosines, providing a global representation over a periodic interval. This module, especially this part on Fourier series, directly supports our **Course Outcome 4: Determine the Taylor series and evaluate Fourier series expansion for different periodic functions (Knowledge Level: K3)**. We'll be focusing on understanding *how* to find these expansions and what they tell us about the function.

### 1. The Need for Fourier Series: Beyond Polynomials

We've seen how Taylor series can approximate functions near a specific point. Think of a complex curve on a graph. A Taylor series gives us a really good "zooming-in" view around that point, like a sophisticated tangent line that gets better and better the higher the powers of $(x-a)$ we include. However, what if we're interested in how a function behaves over a repeating pattern, an entire cycle? For example, consider an electrical signal that repeats every millisecond, like an AC voltage from a power outlet, or the sound wave of a musical note. These are *periodic* functions. Taylor series, by themselves, aren't designed to capture this periodic nature across an extended interval.

This is where Fourier series come in. They allow us to decompose any "well-behaved" periodic function into an infinite sum of simple sine and cosine waves of different frequencies and amplitudes. It's like taking a complex sound and breaking it down into its fundamental musical notes and their overtones. This decomposition is incredibly powerful in many areas of electrical science and physical science, from analyzing circuits and understanding wave phenomena to processing signals and solving differential equations.

### 2. What is a $2l$-Periodic Function?

Before we jump into the series, let's be precise about what we mean by a periodic function. A function $f(x)$ is said to be **periodic** if there exists a positive number $P$ such that $f(x+P) = f(x)$ for all $x$ in the domain of $f$. The smallest such positive $P$ is called the **period** of the function.

In this module, we'll be focusing on functions with a period of $2l$. This means that $f(x + 2l) = f(x)$ for all $x$. The interval over which we consider one complete cycle is then of length $2l$. For instance, if $l=1$, the period is 2. If $l=\pi$, the period is $2\pi$. This $2l$ is our fundamental interval. Many trigonometric functions, like $\sin(x)$ and $\cos(x)$, have a period of $2\pi$. When we talk about $2l$-periodic functions, we're essentially generalizing this concept to any repeating interval of length $2l$.

### 3. The Fourier Series Expansion

Now, the core idea of Fourier series is to represent a $2l$-periodic function $f(x)$ over an interval, say $[-l, l]$ (or any interval of length $2l$), as a sum of sines and cosines. The general form of a Fourier series for a function $f(x)$ with period $2l$ is given by:

$$ f(x) \sim a_0 + \sum_{n=1}^{\infty} \left( a_n \cos\left(\frac{n\pi x}{l}\right) + b_n \sin\left(\frac{n\pi x}{l}\right) \right) $$

Let's break down what each part means:

*   **$a_0$**: This is the **constant term**, often called the **DC component** in electrical engineering. It represents the average value of the function over one period. If you think about a signal fluctuating around zero, $a_0$ tells you the baseline level.
*   **$a_n \cos\left(\frac{n\pi x}{l}\right)$**: These are the **cosine terms**. They represent components of the function that oscillate with frequencies that are multiples of the fundamental frequency. The term $\cos\left(\frac{n\pi x}{l}\right)$ has a "frequency" related to $n/l$. When $n=1$, we have the fundamental cosine wave; when $n=2$, it's a cosine wave oscillating twice as fast, and so on.
*   **$b_n \sin\left(\frac{n\pi x}{l}\right)$**: These are the **sine terms**. Similar to the cosine terms, they capture oscillating components of the function.
*   **$a_n$ and $b_n$**: These are the **Fourier coefficients**. They are constants that determine the *amplitude* of each cosine and sine term. Finding these coefficients is the heart of the Fourier series calculation.

The "$\sim$" symbol is used because, technically, the series might not converge to $f(x)$ everywhere, especially at points of discontinuity. However, under reasonable conditions (which we'll assume for this module, often referred to as Dirichlet conditions), the series will converge to $f(x)$ where $f$ is continuous, and to the average of the left and right limits where $f$ has a jump discontinuity. This is a very useful property for analyzing signals.

### 4. Calculating the Fourier Coefficients

So, how do we find these mysterious $a_n$ and $b_n$ coefficients? This is where some elegant integration formulas come into play. The key is the **orthogonality** of sines and cosines over the interval $[-l, l]$. This property, which you can find detailed explanations of in Kreyszig's *Advanced Engineering Mathematics* or Anton's *Calculus*, essentially means that the integral of the product of two different sine or cosine functions (or a sine and a cosine) over a period is zero.

Let's define the coefficients:

**a) The constant term $a_0$:**

The average value of $f(x)$ over the interval $[-l, l]$ is given by:

$$ a_0 = \frac{1}{2l} \int_{-l}^{l} f(x) \, dx $$

Think of this as taking the total "area under the curve" for one period and dividing it by the length of the period. This gives you the average height.

**b) The cosine coefficients $a_n$ (for $n=1, 2, 3, \dots$):**

$$ a_n = \frac{1}{l} \int_{-l}^{l} f(x) \cos\left(\frac{n\pi x}{l}\right) \, dx $$

To get $a_n$, we multiply $f(x)$ by the corresponding cosine wave $\cos\left(\frac{n\pi x}{l}\right)$ and integrate over the period. The orthogonality property ensures that when we integrate $f(x) \cos\left(\frac{m\pi x}{l}\right)$ with $m \neq n$, the result is zero. Only the term where the frequencies match contributes significantly.

**c) The sine coefficients $b_n$ (for $n=1, 2, 3, \dots$):**

$$ b_n = \frac{1}{l} \int_{-l}^{l} f(x) \sin\left(\frac{n\pi x}{l}\right) \, dx $$

Similarly, for the sine coefficients, we multiply $f(x)$ by $\sin\left(\frac{n\pi x}{l}\right)$ and integrate.

**Important Note on Integration Intervals:** While we usually use $[-l, l]$, any interval of length $2l$ will work. For example, $[0, 2l]$. The formulas remain the same.

### 5. Handling Even and Odd Functions: A Shortcut!

Recognizing whether a function is even or odd can save us a lot of calculation. This is a key insight, often highlighted in your calculus texts like Anton's *Calculus*.

*   **Even Function**: A function $f(x)$ is **even** if $f(-x) = f(x)$ for all $x$. The graph of an even function is symmetric about the y-axis. Examples: $\cos(x)$, $x^2$.
*   **Odd Function**: A function $f(x)$ is **odd** if $f(-x) = -f(x)$ for all $x$. The graph of an odd function is symmetric about the origin. Examples: $\sin(x)$, $x^3$.

Now, how does this help with Fourier coefficients? Consider the properties of the integrands over the symmetric interval $[-l, l]$:

*   The product of an **even function** and an **odd function** is **odd**.
*   The product of two **even functions** is **even**.
*   The product of two **odd functions** is **even**.

The integral of an **odd function** over a symmetric interval like $[-l, l]$ is **zero**.

Let's apply this to our Fourier coefficients:

*   **If $f(x)$ is an EVEN function:**
    *   $f(x) \sin\left(\frac{n\pi x}{l}\right)$ is (even $\times$ odd) = odd. So, $b_n = \frac{1}{l} \int_{-l}^{l} (\text{odd function}) \, dx = 0$ for all $n$.
    *   $f(x) \cos\left(\frac{n\pi x}{l}\right)$ is (even $\times$ even) = even. So, $a_n = \frac{1}{l} \int_{-l}^{l} (\text{even function}) \, dx = \frac{2}{l} \int_{0}^{l} f(x) \cos\left(\frac{n\pi x}{l}\right) \, dx$.
    *   $f(x)$ is even, so $a_0 = \frac{1}{2l} \int_{-l}^{l} (\text{even function}) \, dx = \frac{1}{l} \int_{0}^{l} f(x) \, dx$.

    **Key Takeaway for Even Functions:** If $f(x)$ is even, its Fourier series contains only **cosine terms** ($b_n = 0$).

*   **If $f(x)$ is an ODD function:**
    *   $f(x) \cos\left(\frac{n\pi x}{l}\right)$ is (odd $\times$ even) = odd. So, $a_n = \frac{1}{l} \int_{-l}^{l} (\text{odd function}) \, dx = 0$ for all $n$ (including $a_0$).
    *   $f(x) \sin\left(\frac{n\pi x}{l}\right)$ is (odd $\times$ odd) = even. So, $b_n = \frac{1}{l} \int_{-l}^{l} (\text{even function}) \, dx = \frac{2}{l} \int_{0}^{l} f(x) \sin\left(\frac{n\pi x}{l}\right) \, dx$.

    **Key Takeaway for Odd Functions:** If $f(x)$ is odd, its Fourier series contains only **sine terms** ($a_n = 0$ for all $n$).

This is a huge simplification! Most problems you'll encounter in exams will involve piecewise constant, or simple polynomial functions that you can easily classify as even or odd.

### 6. Example Walkthrough: A Simple Square Wave

Let's apply these ideas to a concrete example. This is the kind of problem that is very common in exams and really helps solidify your understanding.

**Problem:** Find the Fourier series expansion of the $2\pi$-periodic function defined as:
$$ f(x) = \begin{cases} 1 & \text{if } 0 < x < \pi \\ -1 & \text{if } -\pi < x < 0 \end{cases} $$
and $f(x+2\pi) = f(x)$.

**Step 1: Identify the period.**
The problem states it's $2\pi$-periodic. This means $2l = 2\pi$, so $l = \pi$. Our interval is typically taken as $[-\pi, \pi]$.

**Step 2: Check for symmetry (Even/Odd).**
Let's test $f(-x)$:
If $0 < x < \pi$, then $-\pi < -x < 0$, and $f(-x) = -1$. Also, $f(x) = 1$.
So, $f(-x) = -f(x)$ for $0 < x < \pi$.
If $-\pi < x < 0$, then $0 < -x < \pi$, and $f(-x) = 1$. Also, $f(x) = -1$.
So, $f(-x) = -f(x)$ for $-\pi < x < 0$.
The function $f(x)$ is **odd**. This is a great shortcut!

**Step 3: Apply the odd function rules.**
Since $f(x)$ is odd, we know that $a_n = 0$ for all $n \ge 0$. This includes $a_0$ and all $a_n$. We only need to calculate $b_n$.

**Step 4: Calculate $b_n$.**
The formula for $b_n$ for an odd function is:
$$ b_n = \frac{2}{l} \int_{0}^{l} f(x) \sin\left(\frac{n\pi x}{l}\right) \, dx $$
With $l=\pi$:
$$ b_n = \frac{2}{\pi} \int_{0}^{\pi} f(x) \sin\left(\frac{n\pi x}{\pi}\right) \, dx $$
$$ b_n = \frac{2}{\pi} \int_{0}^{\pi} f(x) \sin(nx) \, dx $$
In the interval $(0, \pi)$, our function is $f(x) = 1$. So:
$$ b_n = \frac{2}{\pi} \int_{0}^{\pi} (1) \sin(nx) \, dx $$
Now, we integrate $\sin(nx)$:
$$ \int \sin(nx) \, dx = -\frac{\cos(nx)}{n} $$
So, evaluating from $0$ to $\pi$:
$$ b_n = \frac{2}{\pi} \left[ -\frac{\cos(nx)}{n} \right]_0^{\pi} $$
$$ b_n = \frac{2}{\pi} \left( -\frac{\cos(n\pi)}{n} - \left(-\frac{\cos(0)}{n}\right) \right) $$
$$ b_n = \frac{2}{\pi} \left( -\frac{\cos(n\pi)}{n} + \frac{1}{n} \right) $$
$$ b_n = \frac{2}{n\pi} (1 - \cos(n\pi)) $$

Now, what is $\cos(n\pi)$?
If $n$ is even (2, 4, 6, ...), $\cos(n\pi) = 1$.
If $n$ is odd (1, 3, 5, ...), $\cos(n\pi) = -1$.

Let's substitute this:
*   If $n$ is even, $n=2k$: $b_n = \frac{2}{n\pi} (1 - 1) = 0$.
*   If $n$ is odd, $n=2k-1$: $b_n = \frac{2}{n\pi} (1 - (-1)) = \frac{2}{n\pi} (2) = \frac{4}{n\pi}$.

So, $b_n$ is non-zero only for odd values of $n$. We can write this more compactly. If we consider $n$ to be odd, we can say $n=1, 3, 5, \ldots$.
The coefficients are:
$b_1 = \frac{4}{\pi}$
$b_2 = 0$
$b_3 = \frac{4}{3\pi}$
$b_4 = 0$
$b_5 = \frac{4}{5\pi}$
...

**Step 5: Write the Fourier Series.**
Since $a_n = 0$ for all $n$, and $b_n$ is zero for even $n$, the Fourier series is:
$$ f(x) \sim \sum_{n \text{ odd}, n \ge 1}^{\infty} b_n \sin(nx) $$
$$ f(x) \sim \frac{4}{\pi} \sin(x) + \frac{4}{3\pi} \sin(3x) + \frac{4}{5\pi} \sin(5x) + \dots $$
$$ f(x) \sim \frac{4}{\pi} \left( \sin(x) + \frac{\sin(3x)}{3} + \frac{\sin(5x)}{5} + \dots \right) $$

**What does this mean?** This infinite series of sine waves, when added together, perfectly reconstructs the square wave. The first term, $\frac{4}{\pi}\sin(x)$, gives the main shape. Adding $\frac{4}{3\pi}\sin(3x)$ refines the sharp corners. Each successive term adds more detail, making the approximation closer and closer to the actual square wave. This is a beautiful illustration of how complex periodic phenomena can be built from simple sinusoidal components, a concept central to understanding signals in electrical engineering.

### 7. Conditions for Convergence

While we're not proving the convergence rigorously (as per the module description), it's good to know what kinds of functions have Fourier series that work nicely. These are often called "piecewise smooth" functions.

A function $f(x)$ is typically guaranteed to have a convergent Fourier series if it satisfies the **Dirichlet conditions** over the interval $[-l, l]$:
1.  $f(x)$ is bounded.
2.  $f(x)$ has a finite number of maxima and minima.
3.  $f(x)$ has a finite number of discontinuities.

Most functions you'll encounter in your studies – piecewise constant, linear, quadratic, exponential, trigonometric, and even functions with jump discontinuities – will satisfy these conditions. For such functions, the Fourier series converges to $f(x)$ at points of continuity and to the average of the left and right limits at points of discontinuity. This is precisely what makes Fourier series so useful for analyzing signals that might have sudden changes.

### 8. Connection to Taylor Series and Power Series

You might recall from our earlier discussions that Taylor series represent functions as infinite sums of powers of $(x-a)$. For example, $e^x = \sum_{n=0}^\infty \frac{x^n}{n!}$ is a Taylor series centered at $a=0$. These are excellent for local approximations.

Fourier series, on the other hand, represent functions using sines and cosines of *integer multiples of a fundamental frequency*. They are inherently suited for periodic behavior over an interval.

Where's the link? Well, both are forms of **orthogonal series expansions**. The basis functions for Taylor series are $\{1, (x-a), (x-a)^2, \dots\}$, which are orthogonal with respect to a certain weight function (often just 1) over an interval. The basis functions for Fourier series are $\{1, \cos(\frac{\pi x}{l}), \sin(\frac{\pi x}{l}), \cos(\frac{2\pi x}{l}), \sin(\frac{2\pi x}{l}), \dots\}$, which are orthogonal over $[-l, l]$.

In some advanced contexts, you can even relate series expansions. For instance, functions analytic in a disk can be represented by Taylor series. Functions that are periodic and "smooth" can be represented by Fourier series. The core idea remains: approximating a function by a weighted sum of known basis functions. Understanding these different ways of representing functions (Taylor vs. Fourier) is key to selecting the right tool for the right problem. For signals and systems analysis, Fourier series are indispensable.

### 9. Summary of Key Formulas and Concepts

Let's recap the crucial points:

*   **Fourier Series for $2l$-periodic $f(x)$**:
    $$ f(x) \sim a_0 + \sum_{n=1}^{\infty} \left( a_n \cos\left(\frac{n\pi x}{l}\right) + b_n \sin\left(\frac{n\pi x}{l}\right) \right) $$
*   **Coefficients**:
    $$ a_0 = \frac{1}{2l} \int_{-l}^{l} f(x) \, dx $$
    $$ a_n = \frac{1}{l} \int_{-l}^{l} f(x) \cos\left(\frac{n\pi x}{l}\right) \, dx \quad (n=1, 2, \dots) $$
    $$ b_n = \frac{1}{l} \int_{-l}^{l} f(x) \sin\left(\frac{n\pi x}{l}\right) \, dx \quad (n=1, 2, \dots) $$
*   **Symmetry Simplifications (over $[-l, l]$)**:
    *   **If $f(x)$ is Even**: $b_n = 0$.
        $$ a_0 = \frac{1}{l} \int_{0}^{l} f(x) \, dx $$
        $$ a_n = \frac{2}{l} \int_{0}^{l} f(x) \cos\left(\frac{n\pi x}{l}\right) \, dx $$
    *   **If $f(x)$ is Odd**: $a_n = 0$ for all $n$.
        $$ b_n = \frac{2}{l} \int_{0}^{l} f(x) \sin\left(\frac{n\pi x}{l}\right) \, dx $$

Remember these formulas and the symmetry properties; they are your best friends for tackling Fourier series problems in exams. The integration might require techniques from your calculus course (integration by parts, trigonometric identities), so make sure those are sharp!

---

### Sample Questions and Answers

**Question 1 (Conceptual):**
What is the primary difference in the *purpose* of a Taylor series expansion versus a Fourier series expansion for a function?

**Answer:**
A Taylor series expansion is primarily used for **local approximation** of a function around a specific point. It represents the function as an infinite sum of polynomial terms. A Fourier series expansion, on the other hand, is used for **global representation** of a *periodic* function over a specific interval. It decomposes the function into a sum of sine and cosine waves of various frequencies. In essence, Taylor series give you a "magnifying glass" view at one point, while Fourier series break down the function into its constituent "notes" over its entire repeating cycle. This directly relates to **CO4**.

**Question 2 (Application):**
Find the Fourier series for the function $f(x) = |x|$ for $x \in [-\pi, \pi]$ and extended periodically with period $2\pi$.

**Solution:**
1.  **Period:** The function is defined on $[-\pi, \pi]$ and is stated to be $2\pi$-periodic. Thus, $2l = 2\pi$, so $l = \pi$.
2.  **Symmetry:** Let's check if $f(x) = |x|$ is even or odd.
    $f(-x) = |-x| = |x| = f(x)$.
    Since $f(-x) = f(x)$, the function is **even**.
3.  **Coefficients:** Because $f(x)$ is even, we know $b_n = 0$ for all $n \ge 1$. We only need to calculate $a_0$ and $a_n$.
    *   For $a_0$:
        $$ a_0 = \frac{1}{l} \int_{0}^{l} f(x) \, dx = \frac{1}{\pi} \int_{0}^{\pi} x \, dx $$
        $$ a_0 = \frac{1}{\pi} \left[ \frac{x^2}{2} \right]_0^{\pi} = \frac{1}{\pi} \left( \frac{\pi^2}{2} - 0 \right) = \frac{\pi}{2} $$
    *   For $a_n$:
        $$ a_n = \frac{2}{l} \int_{0}^{l} f(x) \cos\left(\frac{n\pi x}{l}\right) \, dx = \frac{2}{\pi} \int_{0}^{\pi} x \cos(nx) \, dx $$
        We use integration by parts: $\int u \, dv = uv - \int v \, du$.
        Let $u = x$ and $dv = \cos(nx) \, dx$.
        Then $du = dx$ and $v = \frac{1}{n} \sin(nx)$.
        $$ a_n = \frac{2}{\pi} \left[ x \left(\frac{1}{n} \sin(nx)\right) \right]_0^{\pi} - \frac{2}{\pi} \int_{0}^{\pi} \frac{1}{n} \sin(nx) \, dx $$
        The first term is $\frac{2}{\pi} \left[ \frac{\pi}{n} \sin(n\pi) - 0 \cdot \sin(0) \right] = \frac{2}{\pi} [0 - 0] = 0$.
        So,
        $$ a_n = -\frac{2}{n\pi} \int_{0}^{\pi} \sin(nx) \, dx $$
        $$ a_n = -\frac{2}{n\pi} \left[ -\frac{\cos(nx)}{n} \right]_0^{\pi} $$
        $$ a_n = \frac{2}{n^2\pi} [\cos(nx)]_0^{\pi} $$
        $$ a_n = \frac{2}{n^2\pi} (\cos(n\pi) - \cos(0)) $$
        $$ a_n = \frac{2}{n^2\pi} (\cos(n\pi) - 1) $$
    Now, recall $\cos(n\pi) = 1$ if $n$ is even, and $\cos(n\pi) = -1$ if $n$ is odd.
    *   If $n$ is even ($n=2k$), $\cos(n\pi) - 1 = 1 - 1 = 0$. So $a_n = 0$ for even $n$.
    *   If $n$ is odd ($n=2k-1$), $\cos(n\pi) - 1 = -1 - 1 = -2$. So $a_n = \frac{2}{n^2\pi} (-2) = -\frac{4}{n^2\pi}$ for odd $n$.
4.  **Fourier Series:**
    The Fourier series is $f(x) \sim a_0 + \sum_{n=1}^{\infty} a_n \cos(nx)$ since $b_n=0$.
    $$ f(x) \sim \frac{\pi}{2} + \sum_{n \text{ odd}, n \ge 1} \left(-\frac{4}{n^2\pi}\right) \cos(nx) $$
    $$ f(x) \sim \frac{\pi}{2} - \frac{4}{\pi} \sum_{n \text{ odd}, n \ge 1} \frac{1}{n^2} \cos(nx) $$
    Expanding the sum for odd $n$:
    $$ f(x) \sim \frac{\pi}{2} - \frac{4}{\pi} \left( \frac{\cos(x)}{1^2} + \frac{\cos(3x)}{3^2} + \frac{\cos(5x)}{5^2} + \dots \right) $$
    This result tells us that the triangular wave formed by $|x|$ over $[-\pi, \pi]$ can be represented by a constant term (the average value) and a series of cosine terms with decreasing amplitudes proportional to $1/n^2$. This shows good convergence. This also supports **CO4**.

**Question 3 (Exam Pitfall):**
A student is asked to find the Fourier series of a function defined on $[0, 2\pi]$ as $f(x) = x$. They correctly calculate $a_0 = \pi$, $a_n=0$, and $b_n = -\frac{2}{n}$. They then write the series as $\pi + \sum_{n=1}^\infty (-\frac{2}{n})\sin(nx)$. What is the mistake?

**Answer:**
The student has correctly calculated coefficients for a function defined on $[-\pi, \pi]$ or using the $2l$-periodicity with $l=\pi$. However, the question specifies the function is defined on $[0, 2\pi]$. The typical Fourier series formulas are derived for an interval symmetric about the origin, like $[-l, l]$, to exploit orthogonality properties and symmetry.

If the function is defined over $[0, 2l]$, we use the same formulas for coefficients:
$a_0 = \frac{1}{2l} \int_{0}^{2l} f(x) \, dx$
$a_n = \frac{1}{l} \int_{0}^{2l} f(x) \cos\left(\frac{n\pi x}{l}\right) \, dx$
$b_n = \frac{1}{l} \int_{0}^{2l} f(x) \sin\left(\frac{n\pi x}{l}\right) \, dx$

For $f(x)=x$ on $[0, 2\pi]$, $l=\pi$:
$a_0 = \frac{1}{2\pi} \int_0^{2\pi} x \, dx = \frac{1}{2\pi} [\frac{x^2}{2}]_0^{2\pi} = \frac{1}{2\pi} \frac{4\pi^2}{2} = \pi$. (Correct)
$a_n = \frac{1}{\pi} \int_0^{2\pi} x \cos(nx) \, dx$. This integral evaluates to 0 for all $n$. (Correct)
$b_n = \frac{1}{\pi} \int_0^{2\pi} x \sin(nx) \, dx$. Integration by parts yields $[-\frac{x}{n}\cos(nx)]_0^{2\pi} - \int_0^{2\pi} -\frac{1}{n}\cos(nx) dx = -\frac{2\pi}{n}\cos(2n\pi) - 0 + \frac{1}{n}[\frac{\sin(nx)}{n}]_0^{2\pi} = -\frac{2\pi}{n}(1) + 0 = -\frac{2\pi}{n}$.
The coefficients would be $a_0 = \pi$, $a_n = 0$, and $b_n = -\frac{2\pi}{n}$ if calculated for the interval $[0, 2\pi]$.
The student's $b_n = -2/n$ suggests they might have used $l=\pi$ in the denominator of the $\sin$ and $\cos$ arguments but integrated over $[0, 2\pi]$ for the coefficients $a_0, a_n, b_n$, which is a mismatch in formula application. The correct $b_n$ for $f(x)=x$ on $[0, 2\pi]$ should be $-\frac{2\pi}{n}$.

The correct Fourier series for $f(x)=x$ on $[0, 2\pi]$ is $\pi + \sum_{n=1}^{\infty} (-\frac{2\pi}{n}) \sin(nx)$.

This question highlights the importance of carefully checking the integration interval and ensuring it matches the definition of the period $2l$ and the function's domain. This is crucial for **CO4**.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
