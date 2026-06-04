---
title: "Half range sine series expansion"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND 
PHYSICAL  SCIENCE - 1"
module: "Module 4: Taylor series representation (without proof, assuming the possibility of power series expansion in appropriate domains)"
branch: "Civil Engineering"
semester: 1
topicId: "68b54565d74ec52cc09129f2"
status: "completed"
scrapedAt: "2026-05-20T18:31:12.943Z"
---
## Module 4: Taylor Series Representation – Half-Range Sine Series Expansion

Welcome, everyone, to Module 4! We've been building a strong foundation in the language of mathematics that underpins electrical science and physical science. Last time, we touched upon the power of representing functions using series, specifically looking at how Taylor series can give us local polynomial approximations. Today, we're going to shift gears slightly and explore a different, yet equally powerful, way to represent functions: **Fourier Series**. More specifically, we'll focus on a crucial variation – the **Half-Range Sine Series Expansion**.

Now, you might be wondering, "What does Taylor series have to do with Fourier series or sine series?" That's a great question! While Taylor series are fantastic for approximating functions around a *single point*, Fourier series allow us to represent functions over an *entire interval*. Think of it like this: Taylor series are like a magnifying glass, giving you incredible detail of a tiny region. Fourier series are like a wide-angle lens, capturing the overall behavior of a phenomenon across a broader scope. Both are essential tools in our mathematical toolkit.

This topic directly relates to **Course Outcome 4: Determine the Taylor series and evaluate Fourier series expansion for different periodic functions.** Our focus today is on the "Fourier series expansion" part, and specifically, how we adapt it for functions defined on a restricted interval.

### 1. The Essence of Fourier Series: Representing Periodic Functions

Before diving into the "half-range" aspect, let's quickly recap the core idea of Fourier series. Many phenomena in electrical engineering and physics are periodic – think of AC current, oscillating circuits, or even simple harmonic motion. Fourier's brilliant insight was that almost any "well-behaved" periodic function can be expressed as an infinite sum of sines and cosines of different frequencies.

The standard Fourier series for a function $f(x)$ that is periodic with period $2L$ (often defined on the interval $[-L, L]$ or $[0, 2L]$) looks something like this:

$f(x) = a_0 + \sum_{n=1}^{\infty} \left( a_n \cos\left(\frac{n\pi x}{L}\right) + b_n \sin\left(\frac{n\pi x}{L}\right) \right)$

Here, $a_0$, $a_n$, and $b_n$ are called the **Fourier coefficients**. They are calculated using integrals that essentially measure how much of each sine and cosine component is present in the function $f(x)$ over its period.

*   $a_0 = \frac{1}{2L} \int_{-L}^{L} f(x) dx$ (This is the average value of the function over the interval.)
*   $a_n = \frac{1}{L} \int_{-L}^{L} f(x) \cos\left(\frac{n\pi x}{L}\right) dx$ (Measures the "cosine content".)
*   $b_n = \frac{1}{L} \int_{-L}^{L} f(x) \sin\left(\frac{n\pi x}{L}\right) dx$ (Measures the "sine content".)

*(Remember this general form. It’s the bedrock upon which we build the half-range series.)*

### 2. The "Half-Range" Problem: Dealing with Functions on $[0, L]$

Now, what happens when we're not given a function over its full period $[-L, L]$ or $[0, 2L]$, but rather only over *half* a period, say, from $x=0$ to $x=L$? This is a very common scenario in physical sciences. Imagine a signal that's only active or defined for a specific duration, or a physical system whose behavior we're observing only in a particular phase.

We *could* just take the function as given and try to extend it to the whole line to make it periodic. But this often leads to functions that are not continuous or have other "nasty" properties that make Fourier analysis complicated. The beauty of the half-range expansion is that it provides a clever way around this by creating a periodic extension with specific symmetry properties.

We have two primary choices when dealing with a function $f(x)$ defined on $[0, L]$:

*   **Half-Range Sine Series:** Extend $f(x)$ to be an **odd function** over $[-L, L]$.
*   **Half-Range Cosine Series:** Extend $f(x)$ to be an **even function** over $[-L, L]$.

Today, we're focusing on the **Half-Range Sine Series Expansion**.

### 3. Constructing the Half-Range Sine Series: The Odd Extension

So, how do we make a function defined on $[0, L]$ into an odd function over $[-L, L]$? An odd function has the property that $f(-x) = -f(x)$. If we have $f(x)$ for $x \in [0, L]$, we can define its "partner" for $x \in [-L, 0]$ by simply flipping the sign.

Let's visualize this. Suppose $f(x)$ is a function on $[0, L]$, like a ramp starting at 0 and ending at some value.
*   **Original $f(x)$ on $[0, L]$:** Looks like a ramp.
*   **Odd Extension $f_{odd}(x)$ on $[-L, L]$:**
    *   For $x \in [0, L]$, $f_{odd}(x) = f(x)$.
    *   For $x \in [-L, 0)$, $f_{odd}(x) = -f(-x)$. This means if $f(x)$ was a ramp up, the odd extension will be a ramp *down* in the corresponding negative interval. It creates a 180-degree rotational symmetry about the origin.

Now, when we apply the Fourier series formulas to this *odd extension* over the interval $[-L, L]$, something very interesting happens.

Recall the standard Fourier coefficients:
$a_0 = \frac{1}{2L} \int_{-L}^{L} f_{odd}(x) dx$
$a_n = \frac{1}{L} \int_{-L}^{L} f_{odd}(x) \cos\left(\frac{n\pi x}{L}\right) dx$
$b_n = \frac{1}{L} \int_{-L}^{L} f_{odd}(x) \sin\left(\frac{n\pi x}{L}\right) dx$

Let's analyze the integrals for $a_0$ and $a_n$:

*   **Integral for $a_0$:** $f_{odd}(x)$ is an odd function. The integral of an odd function over a symmetric interval $[-L, L]$ is *always zero*. So, $a_0 = 0$. This is a key observation!
*   **Integral for $a_n$:** We are integrating $f_{odd}(x) \cos\left(\frac{n\pi x}{L}\right)$.
    *   $f_{odd}(x)$ is odd.
    *   $\cos\left(\frac{n\pi x}{L}\right)$ is an even function (since $\cos(-y) = \cos(y)$).
    *   The product of an odd function and an even function is always an **odd function**.
    *   Therefore, the integral $\int_{-L}^{L} f_{odd}(x) \cos\left(\frac{n\pi x}{L}\right) dx$ over the symmetric interval $[-L, L]$ is also **zero**. So, all $a_n = 0$ for $n \ge 1$.

This means that the Fourier series of an odd function (our extended function) contains *only sine terms*. This is precisely what a Half-Range Sine Series is!

**Key Takeaway:** By constructing an odd extension of $f(x)$ from $[0, L]$ to $[-L, L]$, the Fourier series naturally simplifies to only sine terms.

### 4. The Formulas for Half-Range Sine Series

Since all $a_0$ and $a_n$ coefficients are zero, the Fourier series for our odd extension $f_{odd}(x)$ becomes:

$f_{odd}(x) = \sum_{n=1}^{\infty} b_n \sin\left(\frac{n\pi x}{L}\right)$

Now we only need to calculate the $b_n$ coefficients. We can use the original integral formula for $b_n$, but since $f_{odd}(x)$ is odd and $\sin\left(\frac{n\pi x}{L}\right)$ is also odd, their product $f_{odd}(x) \sin\left(\frac{n\pi x}{L}\right)$ is an **even function**.

The integral of an even function over $[-L, L]$ is twice the integral over $[0, L]$. So:

$b_n = \frac{1}{L} \int_{-L}^{L} f_{odd}(x) \sin\left(\frac{n\pi x}{L}\right) dx = \frac{2}{L} \int_{0}^{L} f_{odd}(x) \sin\left(\frac{n\pi x}{L}\right) dx$

And since $f_{odd}(x) = f(x)$ on $[0, L]$, the formula simplifies beautifully to:

**Half-Range Sine Series Formula (for $f(x)$ defined on $[0, L]$):**

$f(x) = \sum_{n=1}^{\infty} b_n \sin\left(\frac{n\pi x}{L}\right)$

where
$b_n = \frac{2}{L} \int_{0}^{L} f(x) \sin\left(\frac{n\pi x}{L}\right) dx$

This is a very elegant result. We are representing a function $f(x)$ defined on $[0, L]$ using only sine terms, which implicitly means we're considering its odd extension.

*(This is your most important formula for this topic. Memorize it and understand its origin!)*

### 5. Practical Application: Examples

Let's work through some examples to solidify our understanding. These are the kinds of problems you'll encounter in exams.

**Example 1: A simple ramp function**

Find the half-range sine series expansion of $f(x) = x$ for $0 < x < L$.

Here, our interval is $[0, L]$, so $L$ in the formulas is indeed $L$.

First, let's calculate $b_n$:

$b_n = \frac{2}{L} \int_{0}^{L} x \sin\left(\frac{n\pi x}{L}\right) dx$

This integral requires integration by parts. Let $u = x$ and $dv = \sin\left(\frac{n\pi x}{L}\right) dx$.
Then $du = dx$ and $v = \int \sin\left(\frac{n\pi x}{L}\right) dx = -\frac{L}{n\pi} \cos\left(\frac{n\pi x}{L}\right)$.

Using the integration by parts formula $\int u \, dv = uv - \int v \, du$:

$\int_{0}^{L} x \sin\left(\frac{n\pi x}{L}\right) dx = \left[ x \left(-\frac{L}{n\pi} \cos\left(\frac{n\pi x}{L}\right)\right) \right]_{0}^{L} - \int_{0}^{L} \left(-\frac{L}{n\pi} \cos\left(\frac{n\pi x}{L}\right)\right) dx$

Let's evaluate the first term:
$\left[ -\frac{Lx}{n\pi} \cos\left(\frac{n\pi x}{L}\right) \right]_{0}^{L} = \left(-\frac{L^2}{n\pi} \cos(n\pi)\right) - \left(0\right)$
$= -\frac{L^2}{n\pi} (-1)^n = \frac{L^2}{n\pi} (-1)^{n+1}$

Now, the second term (the integral):
$- \int_{0}^{L} \left(-\frac{L}{n\pi} \cos\left(\frac{n\pi x}{L}\right)\right) dx = \frac{L}{n\pi} \int_{0}^{L} \cos\left(\frac{n\pi x}{L}\right) dx$
$= \frac{L}{n\pi} \left[ \frac{L}{n\pi} \sin\left(\frac{n\pi x}{L}\right) \right]_{0}^{L}$
$= \frac{L^2}{n^2\pi^2} \left[ \sin(n\pi) - \sin(0) \right] = \frac{L^2}{n^2\pi^2} [0 - 0] = 0$

So, the integral part is 0.
Putting it all together for $b_n$:
$b_n = \frac{2}{L} \left( \frac{L^2}{n\pi} (-1)^{n+1} \right) = \frac{2L}{n\pi} (-1)^{n+1}$

The half-range sine series for $f(x) = x$ on $[0, L]$ is:

$f(x) = \sum_{n=1}^{\infty} \frac{2L}{n\pi} (-1)^{n+1} \sin\left(\frac{n\pi x}{L}\right)$
$f(x) = \frac{2L}{\pi} \left( \frac{\sin(\pi x/L)}{1} - \frac{\sin(2\pi x/L)}{2} + \frac{\sin(3\pi x/L)}{3} - \dots \right)$

*(Visualizing this is helpful. The function $y=x$ on $[0, L]$ is a straight line. Its odd extension is a zig-zag pattern. The sine series is trying to "build" this zig-zag pattern using only upward-sloping sine waves.)*

**Example 2: A square wave pulse**

Find the half-range sine series expansion of $f(x) = k$ (a constant) for $0 < x < L/2$, and $f(x) = 0$ for $L/2 < x < L$.

This function is like a pulse of height $k$ over the first half of the interval, and then nothing.

$b_n = \frac{2}{L} \int_{0}^{L} f(x) \sin\left(\frac{n\pi x}{L}\right) dx$

Since $f(x)$ is zero for $x \in (L/2, L)$, the integral only needs to be from $0$ to $L/2$:

$b_n = \frac{2}{L} \int_{0}^{L/2} k \sin\left(\frac{n\pi x}{L}\right) dx$
$b_n = \frac{2k}{L} \int_{0}^{L/2} \sin\left(\frac{n\pi x}{L}\right) dx$

Now, integrate:
$b_n = \frac{2k}{L} \left[ -\frac{L}{n\pi} \cos\left(\frac{n\pi x}{L}\right) \right]_{0}^{L/2}$
$b_n = -\frac{2k}{n\pi} \left[ \cos\left(\frac{n\pi (L/2)}{L}\right) - \cos(0) \right]$
$b_n = -\frac{2k}{n\pi} \left[ \cos\left(\frac{n\pi}{2}\right) - 1 \right]$
$b_n = \frac{2k}{n\pi} \left[ 1 - \cos\left(\frac{n\pi}{2}\right) \right]$

Now, let's look at the values of $1 - \cos\left(\frac{n\pi}{2}\right)$ for different $n$:
*   If $n=1$: $1 - \cos(\pi/2) = 1 - 0 = 1$. So, $b_1 = \frac{2k}{\pi}$.
*   If $n=2$: $1 - \cos(\pi) = 1 - (-1) = 2$. So, $b_2 = \frac{2k}{2\pi} (2) = \frac{2k}{\pi}$.
*   If $n=3$: $1 - \cos(3\pi/2) = 1 - 0 = 1$. So, $b_3 = \frac{2k}{3\pi}$.
*   If $n=4$: $1 - \cos(2\pi) = 1 - 1 = 0$. So, $b_4 = 0$.
*   If $n=5$: $1 - \cos(5\pi/2) = 1 - 0 = 1$. So, $b_5 = \frac{2k}{5\pi}$.
*   If $n=6$: $1 - \cos(3\pi) = 1 - (-1) = 2$. So, $b_6 = \frac{2k}{6\pi} (2) = \frac{2k}{3\pi}$.

This pattern repeats. Notice that $b_n$ is zero when $n$ is a multiple of 4.

The half-range sine series is:
$f(x) = \sum_{n=1}^{\infty} \frac{2k}{n\pi} \left[ 1 - \cos\left(\frac{n\pi}{2}\right) \right] \sin\left(\frac{n\pi x}{L}\right)$

Expanded out:
$f(x) = \frac{2k}{\pi} \sin(\pi x/L) + \frac{2k}{\pi} \sin(2\pi x/L) + \frac{2k}{3\pi} \sin(3\pi x/L) + 0 \sin(4\pi x/L) + \frac{2k}{5\pi} \sin(5\pi x/L) + \dots$

*(This is a good example of how the sine series can approximate a square pulse. It's a bit like trying to build a sharp edge using only smooth, oscillating curves.)*
