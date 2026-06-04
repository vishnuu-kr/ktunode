---
title: "Fourier series"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND 
PHYSICAL  SCIENCE - 1"
module: "Module 4: Taylor series representation (without proof, assuming the possibility of power series expansion in appropriate domains)"
branch: "Civil Engineering"
semester: 1
topicId: "68b54565d74ec52cc09129ed"
status: "completed"
scrapedAt: "2026-05-20T18:31:09.400Z"
---
# Module 4: Taylor Series Representation and Fourier Series

Welcome, everyone! Today, we're diving into a really exciting part of our course: **Fourier Series**. This topic is absolutely fundamental in electrical science and physical science, allowing us to break down complex, wiggly signals into simpler, manageable building blocks. You might recall from our previous discussions on Taylor series, where we approximated functions using polynomials. Fourier series do something similar, but instead of using powers of $x$ (like $1, x, x^2, x^3, \ldots$), they use sines and cosines. Think of it as decomposing a complex musical chord into its individual pure notes. This is directly linked to our **Course Outcome 4 (CO4): Determine the Taylor series and evaluate Fourier series expansion for different periodic functions.**

### What's the Big Idea Behind Fourier Series?

Imagine you have a repeating pattern, a signal that goes up and down, up and down, over and over. This could be an AC voltage waveform from your wall socket, the vibration of a guitar string, or even the changing temperature over a day. These are all **periodic functions**. A function $f(x)$ is periodic with period $P$ if $f(x+P) = f(x)$ for all $x$. The smallest positive value of $P$ is called the **fundamental period**.

The core idea of Fourier series, pioneered by Joseph Fourier, is that *any* reasonably well-behaved periodic function can be represented as an infinite sum of sine and cosine functions, each with a different frequency and amplitude. This is incredibly powerful because sines and cosines are much easier to analyze, manipulate, and understand than arbitrary periodic functions.

### The Building Blocks: Sines and Cosines

We know from basic trigonometry how sine and cosine waves behave. They oscillate smoothly, have predictable periods, and are fundamental to describing anything involving oscillations or waves.

A Fourier series representation of a function $f(x)$ over an interval, say from $-L$ to $L$, typically looks like this:

$$f(x) = a_0 + \sum_{n=1}^{\infty} \left( a_n \cos\left(\frac{n\pi x}{L}\right) + b_n \sin\left(\frac{n\pi x}{L}\right) \right)$$

Let's break down what each part means:

*   **$a_0$**: This is the **average value** or the **DC component** of the function $f(x)$ over the interval. It represents the "flat line" part of the signal. If the function is centered around the x-axis, $a_0$ will be zero. If it's always positive, $a_0$ will be positive.
*   **$a_n$**: These are the **cosine coefficients**. They tell us the amplitude of the cosine wave with frequency $n \frac{\pi}{L}$.
*   **$b_n$**: These are the **sine coefficients**. They tell us the amplitude of the sine wave with frequency $n \frac{\pi}{L}$.
*   **$n \frac{\pi}{L}$**: This is the **angular frequency** of the $n$-th harmonic. The fundamental frequency (when $n=1$) is $\frac{\pi}{L}$. If the period of our function is $P$, then $P = 2L$, so $L = P/2$, and the fundamental angular frequency is $\frac{\pi}{P/2} = \frac{2\pi}{P}$. This is the standard way to express it!

So, the general form for a function $f(x)$ with period $P$ is:

$$f(x) = a_0 + \sum_{n=1}^{\infty} \left( a_n \cos\left(\frac{2n\pi x}{P}\right) + b_n \sin\left(\frac{2n\pi x}{P}\right) \right)$$

This formula essentially says: "Take the average value, add a bit of the fundamental cosine wave, add a bit of the fundamental sine wave, add a bit of the second harmonic cosine wave, add a bit of the second harmonic sine wave, and so on, infinitely." By carefully choosing the values of $a_n$ and $b_n$, we can construct almost *any* periodic function.

### Calculating the Coefficients: The Magic Formulas

How do we find these $a_0, a_n,$ and $b_n$ coefficients? This is where some integral calculus comes in. The key is that sines and cosines of different frequencies are "orthogonal" to each other over a full period. This means their integrals over a period often evaluate to zero, which allows us to isolate the coefficients.

For a function $f(x)$ with period $P$, the coefficients are calculated using the following formulas:

1.  **The DC Component ($a_0$)**:
    This is simply the average value of the function over one period.
    $$a_0 = \frac{1}{P} \int_{c}^{c+P} f(x) \, dx$$
    The integration limits $c$ and $c+P$ can be any starting point and a point $P$ units later. The most convenient are usually from $0$ to $P$ or from $-P/2$ to $P/2$. Let's stick to $-P/2$ to $P/2$ for consistency with the general form derived using interval $(-L, L)$. So, $c=-L$ and $c+P=L$.
    $$a_0 = \frac{1}{2L} \int_{-L}^{L} f(x) \, dx$$

2.  **The Cosine Coefficients ($a_n$)**:
    To find $a_n$, we multiply the Fourier series by $\cos\left(\frac{n\pi x}{L}\right)$ and integrate over the interval $[-L, L]$. Due to orthogonality properties, only the $a_n \cos\left(\frac{n\pi x}{L}\right) \cos\left(\frac{n\pi x}{L}\right)$ term survives and simplifies.
    $$a_n = \frac{1}{L} \int_{-L}^{L} f(x) \cos\left(\frac{n\pi x}{L}\right) \, dx \quad \text{for } n = 1, 2, 3, \ldots$$

3.  **The Sine Coefficients ($b_n$)**:
    Similarly, to find $b_n$, we multiply the Fourier series by $\sin\left(\frac{n\pi x}{L}\right)$ and integrate.
    $$b_n = \frac{1}{L} \int_{-L}^{L} f(x) \sin\left(\frac{n\pi x}{L}\right) \, dx \quad \text{for } n = 1, 2, 3, \ldots$$

**Remember this:** These formulas are the heart of Fourier series! They tell us how much of each specific sine and cosine "ingredient" is present in our original function. The integration effectively acts like a filter, picking out the amplitude of each frequency component. This directly helps us with **CO4**, as we'll be applying these formulas to find the series expansions.

### A Practical Example: The Square Wave

Let's consider a classic example: the **square wave**. Imagine a signal that alternates between +1 and -1. This is a very common waveform in digital electronics and signal processing.

Let's define a square wave $f(x)$ with period $P=2L=2$. So, $L=1$.
For $-1 < x < 1$, let $f(x) = 1$.
For $-1 < x < 0$, let $f(x) = -1$.
And $f(x+2) = f(x)$ for all $x$.

This is an **odd function** because $f(-x) = -f(x)$. For example, $f(0.5) = 1$ and $f(-0.5) = -1$. When we have an odd function, something nice happens with the Fourier coefficients:

*   $a_0$ will be 0, because the positive and negative areas over a full period cancel out. The average value of a symmetric square wave is indeed zero.
*   $a_n$ will also be 0. Why? Because $f(x)$ is odd and $\cos(nx)$ is an even function. The product of an odd function and an even function is an odd function. The integral of an odd function over a symmetric interval like $[-L, L]$ is always zero.
*   $b_n$ will be non-zero. $f(x)$ is odd, and $\sin(nx)$ is also odd. The product of two odd functions is an *even* function. The integral of an even function over $[-L, L]$ is twice the integral over $[0, L]$.

So, for this square wave, we only need to calculate $b_n$.

The interval is $[-1, 1]$, so $L=1$. The formulas become:
$a_0 = \frac{1}{2} \int_{-1}^{1} f(x) \, dx = 0$ (as expected for an odd function)
$a_n = \frac{1}{1} \int_{-1}^{1} f(x) \cos(n\pi x) \, dx = 0$ (as expected for an odd function times an even function)

Now for $b_n$:
$$b_n = \int_{-1}^{1} f(x) \sin(n\pi x) \, dx$$

Since $f(x)$ is defined piecewise, we'll split the integral:
$$b_n = \int_{-1}^{0} (-1) \sin(n\pi x) \, dx + \int_{0}^{1} (1) \sin(n\pi x) \, dx$$

Let's evaluate the first integral:
$\int_{-1}^{0} (-1) \sin(n\pi x) \, dx = -1 \left[ -\frac{\cos(n\pi x)}{n\pi} \right]_{-1}^{0} = \frac{1}{n\pi} [\cos(0) - \cos(-n\pi)]$
Since $\cos(-n\pi) = \cos(n\pi) = (-1)^n$:
$= \frac{1}{n\pi} [1 - (-1)^n]$

Now the second integral:
$\int_{0}^{1} (1) \sin(n\pi x) \, dx = \left[ -\frac{\cos(n\pi x)}{n\pi} \right]_{0}^{1} = -\frac{1}{n\pi} [\cos(n\pi) - \cos(0)]$
$= -\frac{1}{n\pi} [(-1)^n - 1] = \frac{1}{n\pi} [1 - (-1)^n]$

Adding them together:
$$b_n = \frac{1}{n\pi} [1 - (-1)^n] + \frac{1}{n\pi} [1 - (-1)^n] = \frac{2}{n\pi} [1 - (-1)^n]$$

Now, what does $1 - (-1)^n$ mean?
*   If $n$ is **even**, $n=2k$: $1 - (-1)^{2k} = 1 - 1 = 0$. So, $b_n = 0$ for all even $n$.
*   If $n$ is **odd**, $n=2k-1$: $1 - (-1)^{2k-1} = 1 - (-1) = 2$. So, $b_n = \frac{2}{n\pi} (2) = \frac{4}{n\pi}$.

This means the square wave's Fourier series only contains sine terms with odd frequencies!
The Fourier series is:
$$f(x) = \sum_{n \text{ odd}}^{\infty} \frac{4}{n\pi} \sin\left(\frac{n\pi x}{1}\right)$$
$$f(x) = \frac{4}{\pi} \left( \sin(\pi x) + \frac{1}{3}\sin(3\pi x) + \frac{1}{5}\sin(5\pi x) + \ldots \right)$$

Isn't that neat? We've represented a sharp, square-shaped wave using a sum of smooth, oscillating sine waves. The more terms we include, the closer the sum gets to the original square wave. This is a fundamental concept in signal processing, where you might filter out higher harmonics to smooth a signal.

### Types of Fourier Series

Depending on the function and the interval, we sometimes talk about specific forms:

1.  **Fourier Series over $[-L, L]$**: This is the general form we've been using:
    $$f(x) = a_0 + \sum_{n=1}^{\infty} \left( a_n \cos\left(\frac{n\pi x}{L}\right) + b_n \sin\left(\frac{n\pi x}{L}\right) \right)$$
    where the coefficients are calculated as shown above.

2.  **Fourier Series over $[0, P]$**: If the interval of interest is $[0, P]$, we can still use the same formulas by setting $L=P/2$. The argument of sine and cosine becomes $\frac{n\pi x}{P/2} = \frac{2n\pi x}{P}$.

3.  **Fourier Cosine Series**: If $f(x)$ is an **even function** ($f(-x)=f(x)$), then all the $b_n$ coefficients will be zero. The series will only contain a constant term and cosine terms.
    $$f(x) = a_0 + \sum_{n=1}^{\infty} a_n \cos\left(\frac{n\pi x}{L}\right)$$
    where $a_0 = \frac{1}{L} \int_{0}^{L} f(x) \, dx$ and $a_n = \frac{2}{L} \int_{0}^{L} f(x) \cos\left(\frac{n\pi x}{L}\right) \, dx$. Notice the integral limits change for $a_n$ because $f(x)\cos(nx)$ is even, and we integrate over $[0,L]$ and multiply by 2.

4.  **Fourier Sine Series**: If $f(x)$ is an **odd function** ($f(-x)=-f(x)$), then $a_0$ and all $a_n$ coefficients will be zero. The series will only contain sine terms.
    $$f(x) = \sum_{n=1}^{\infty} b_n \sin\left(\frac{n\pi x}{L}\right)$$
    where $b_n = \frac{2}{L} \int_{0}^{L} f(x) \sin\left(\frac{n\pi x}{L}\right) \, dx$. Again, the integral is from $0$ to $L$ and then doubled.

These special cases are very useful for simplifying calculations when dealing with even or odd functions. This relates to **CO4** by allowing us to simplify the process of finding the Fourier series expansion.

### Example of an Even Function: The Triangular Wave

Let's consider a simple triangular wave. Let $f(x)$ be defined over $[-2, 2]$ with period $P=4$, so $L=2$.
For $0 \le x \le 2$, $f(x) = 1 - \frac{x}{2}$.
For $-2 \le x < 0$, $f(x) = 1 + \frac{x}{2}$.

This function looks like a triangle peaking at $(0, 1)$ and going down to $(-2, 0)$ and $(2, 0)$.
This is an **even function** because $f(-x) = 1 + \frac{(-x)}{2} = 1 - \frac{x}{2}$ for $-2 \le x < 0$, which is the definition of $f(x)$ for $0 < x \le 2$. So, $f(-x) = f(x)$.

Therefore, we only need to calculate $a_0$ and $a_n$. The $b_n$ coefficients will all be zero.
$P=4$, $L=2$.

**Calculate $a_0$**:
$$a_0 = \frac{1}{2L} \int_{-L}^{L} f(x) \, dx = \frac{1}{4} \int_{-2}^{2} f(x) \, dx$$
Since $f(x)$ is even, we can integrate from $0$ to $2$ and multiply by 2:
$$a_0 = \frac{2}{4} \int_{0}^{2} f(x) \, dx = \frac{1}{2} \int_{0}^{2} \left(1 - \frac{x}{2}\right) \, dx$$
$$a_0 = \frac{1}{2} \left[ x - \frac{x^2}{4} \right]_{0}^{2} = \frac{1}{2} \left[ (2 - \frac{4}{4}) - (0 - 0) \right] = \frac{1}{2} (2 - 1) = \frac{1}{2}$$

So, the DC component is $1/2$.

**Calculate $a_n$**:
$$a_n = \frac{1}{L} \int_{-L}^{L} f(x) \cos\left(\frac{n\pi x}{L}\right) \, dx = \frac{1}{2} \int_{-2}^{2} f(x) \cos\left(\frac{n\pi x}{2}\right) \, dx$$
Again, since $f(x)\cos\left(\frac{n\pi x}{2}\right)$ is an even function (even $\times$ even = even), we integrate from $0$ to $2$ and multiply by 2:
$$a_n = \frac{2}{2} \int_{0}^{2} f(x) \cos\left(\frac{n\pi x}{2}\right) \, dx = \int_{0}^{2} \left(1 - \frac{x}{2}\right) \cos\left(\frac{n\pi x}{2}\right) \, dx$$

This integral requires integration by parts. Let $u = 1 - \frac{x}{2}$ and $dv = \cos\left(\frac{n\pi x}{2}\right) \, dx$.
Then $du = -\frac{1}{2} \, dx$ and $v = \frac{\sin\left(\frac{n\pi x}{2}\right)}{\frac{n\pi}{2}} = \frac{2}{n\pi} \sin\left(\frac{n\pi x}{2}\right)$.

Using the integration by parts formula $\int u \, dv = uv - \int v \, du$:
$$a_n = \left[ \left(1 - \frac{x}{2}\right) \frac{2}{n\pi} \sin\left(\frac{n\pi x}{2}\right) \right]_{0}^{2} - \int_{0}^{2} \frac{2}{n\pi} \sin\left(\frac{n\pi x}{2}\right) \left(-\frac{1}{2}\right) \, dx$$

Let's evaluate the first term:
At $x=2$: $\left(1 - \frac{2}{2}\right) \frac{2}{n\pi} \sin\left(\frac{n\pi (2)}{2}\right) = (1-1) \frac{2}{n\pi} \sin(n\pi) = 0 \times (\text{finite number}) = 0$.
At $x=0$: $\left(1 - \frac{0}{2}\right) \frac{2}{n\pi} \sin\left(\frac{n\pi (0)}{2}\right) = (1) \frac{2}{n\pi} \sin(0) = 0$.
So, the first term is $0 - 0 = 0$.

Now, let's evaluate the remaining integral:
$$a_n = \int_{0}^{2} \frac{1}{n\pi} \sin\left(\frac{n\pi x}{2}\right) \, dx$$
$$a_n = \frac{1}{n\pi} \left[ -\frac{\cos\left(\frac{n\pi x}{2}\right)}{\frac{n\pi}{2}} \right]_{0}^{2} = \frac{1}{n\pi} \left[ -\frac{2}{n\pi} \cos\left(\frac{n\pi x}{2}\right) \right]_{0}^{2}$$
$$a_n = -\frac{2}{(n\pi)^2} \left[ \cos\left(\frac{n\pi (2)}{2}\right) - \cos\left(\frac{n\pi (0)}{2}\right) \right]$$
$$a_n = -\frac{2}{(n\pi)^2} [\cos(n\pi) - \cos(0)]$$
$$a_n = -\frac{2}{(n\pi)^2} [(-1)^n - 1]$$
$$a_n = \frac{2}{(n\pi)^2} [1 - (-1)^n]$$

Again, we look at whether $n$ is even or odd:
*   If $n$ is **even**, $n=2k$: $1 - (-1)^{2k} = 1 - 1 = 0$. So, $a_n = 0$ for even $n$.
*   If $n$ is **odd**, $n=2k-1$: $1 - (-1)^{2k-1} = 1 - (-1) = 2$. So, $a_n = \frac{2}{(n\pi)^2} (2) = \frac{4}{(n\pi)^2}$.

So, the Fourier series for this triangular wave is a **cosine series** (since $b_n=0$):
$$f(x) = a_0 + \sum_{n \text{ odd}}^{\infty} a_n \cos\left(\frac{n\pi x}{2}\right)$$
$$f(x) = \frac{1}{2} + \sum_{n \text{ odd}}^{\infty} \frac{4}{(n\pi)^2} \cos\left(\frac{n\pi x}{2}\right)$$
$$f(x) = \frac{1}{2} + \frac{4}{\pi^2} \left( \frac{1}{1^2}\cos\left(\frac{\pi x}{2}\right) + \frac{1}{3^2}\cos\left(\frac{3\pi x}{2}\right) + \frac{1}{5^2}\cos\left(\frac{5\pi x}{2}\right) + \ldots \right)$$

This shows how the properties of the function (even/odd) simplify the Fourier series representation, focusing our calculations on either sine or cosine terms. This is important for **CO4**, as it means recognizing function symmetry can save a lot of work.

### Dirichlet Conditions and Convergence

When can we actually represent a function by its Fourier series? This is guaranteed if the function satisfies certain conditions, known as the **Dirichlet Conditions**. For a function $f(x)$ defined on $[-L, L]$:

1.  $f(x)$ is bounded.
2.  $f(x)$ has a finite number of discontinuities in $[-L, L]$.
3.  $f(x)$ has a finite number of maxima and minima in $[-L, L]$.

If these conditions are met, the Fourier series converges to:
*   $f(x)$ at points where $f(x)$ is continuous.
*   The average of the left-hand and right-hand limits of $f(x)$ at points where $f(x)$ is discontinuous. This means at a jump discontinuity, the series will converge to the midpoint of the jump.

For example, with our square wave, there are discontinuities at $x = \ldots, -2, 0, 2, \ldots$. At $x=1$, the function jumps from $1$ to $-1$. The Fourier series will converge to $\frac{1 + (-1)}{2} = 0$ at $x=1$. Similarly, at $x=0$, the function jumps from $-1$ to $1$, so the series will converge to $\frac{-1+1}{2} = 0$.

This convergence property is a key theoretical aspect, often touched upon in exams. Understanding where the series converges is crucial for applying it correctly in physical scenarios.

### Why is this Important for Electrical and Physical Science?

The power of Fourier series lies in its applications:

*   **Signal Analysis**: As we've seen, breaking down complex signals (like audio waves, radio signals, or sensor data) into their constituent sine and cosine frequencies allows us to understand their spectral content. This is vital in telecommunications, audio engineering, and any field dealing with waves.
*   **Solving Differential Equations**: Many physical systems are described by differential equations. If the forcing function in a non-homogeneous differential equation is periodic, using Fourier series to represent the forcing function can simplify the process of finding a particular solution. This is directly relevant to **CO2** and **CO3** where we solve differential equations.
*   **Heat Transfer**: Fourier's original motivation was to solve the heat equation, a partial differential equation. Fourier series are essential tools for analyzing how heat distributes in objects over time, especially when boundary conditions are periodic.
*   **Circuit Analysis**: Analyzing AC circuits with non-sinusoidal voltage or current sources often involves using Fourier series to break down the source into its sinusoidal components, making the circuit analysis more manageable.

Think of it like this: If you're designing a filter in an audio system, you need to know which frequencies are present in the sound. Fourier series provide that exact information. If you're analyzing the vibration of a bridge under periodic wind loads, Fourier series help decompose the load and understand the system's response at different frequencies.

### Connection to Taylor Series

While they use different building blocks, Taylor series and Fourier series are both powerful tools for function representation.

*   **Taylor Series**: Use powers of $x$ ($1, x, x^2, x^3, \ldots$) to approximate a function locally around a point. They are excellent for approximating functions near a specific point, like $x=0$. The domain of convergence is usually an open interval around the center point.
*   **Fourier Series**: Use sines and cosines of *integer multiples of a fundamental frequency* to represent a function over an entire interval (its period). They are excellent for representing *periodic* functions globally across their domain.

Sometimes, you can even relate them. For instance, the Taylor series of $\sin(x)$ or $\cos(x)$ are well-known. A Fourier series is essentially an expansion in terms of these trigonometric polynomials. The **learning outcomes** highlight this connection by asking us to cover both Taylor and Fourier series in the same module. They are both forms of **power series expansion** (in a generalized sense for Fourier series, using complex exponentials or trigonometric functions as basis elements), which is mentioned in the module description.

### Key Takeaways

*   **Fourier series decompose periodic functions into sums of sines and cosines.**
*   The general form is $f(x) = a_0 + \sum_{n=1}^{\infty} \left( a_n \cos\left(\frac{2n\pi x}{P}\right) + b_n \sin\left(\frac{2n\pi x}{P}\right) \right)$.
*   The coefficients $a_0, a_n, b_n$ are calculated using integral formulas based on orthogonality.
*   **Even functions** have Fourier series with only cosine terms (and $a_0$).
*   **Odd functions** have Fourier series with only sine terms.
*   These concepts are crucial for signal analysis, differential equations, and many areas of physical science and engineering.

### Sample Questions and Answers

Here are a few questions to test your understanding, ranging from conceptual to calculation-based, similar to what you might encounter.

**Question 1 (Conceptual):**
A continuous-time signal $x(t)$ is periodic with period $T$. If $x(t)$ is an odd function, what can you say about its Fourier series coefficients?

**Answer:**
If $x(t)$ is an odd function, its Fourier series representation will only contain sine terms. Specifically, the DC component ($a_0$) and all cosine coefficients ($a_n$) will be zero. The series will be of the form $x(t) = \sum_{n=1}^{\infty} b_n \sin(\frac{2n\pi t}{T})$.

**Reasoning:**
For any periodic function $f(x)$ over $[-L, L]$, $a_0 = \frac{1}{2L}\int_{-L}^L f(x) dx$. If $f(x)$ is odd, the integrand $f(x)$ is odd, and its integral over a symmetric interval $[-L, L]$ is zero. Thus, $a_0=0$.
For $a_n = \frac{1}{L}\int_{-L}^L f(x) \cos(\frac{n\pi x}{L}) dx$, if $f(x)$ is odd and $\cos(\frac{n\pi x}{L})$ is even, their product $f(x)\cos(\frac{n\pi x}{L})$ is odd. The integral of an odd function over $[-L, L]$ is zero, so $a_n=0$ for all $n \ge 1$.
Similarly, for $b_n = \frac{1}{L}\int_{-L}^L f(x) \sin(\frac{n\pi x}{L}) dx$, if $f(x)$ is odd and $\sin(\frac{n\pi x}{L})$ is odd, their product $f(x)\sin(\frac{n\pi x}{L})$ is even. The integral will be non-zero and will contribute to the series.

---

**Question 2 (Calculation):**
Find the Fourier series for the function $f(x) = x$ over the interval $[- \pi, \pi]$. The function is periodic with period $P=2\pi$.

**Answer:**
The function $f(x)=x$ is an odd function. Therefore, $a_0=0$ and $a_n=0$ for all $n \ge 1$. We only need to calculate $b_n$.
Here, $P=2\pi$, so $L=\pi$. The general angular frequency term is $\frac{n\pi x}{L} = \frac{n\pi x}{\pi} = nx$.

The formula for $b_n$ is:
$b_n = \frac{1}{L} \int_{-L}^{L} f(x) \sin\left(\frac{n\pi x}{L}\right) \, dx$
$b_n = \frac{1}{\pi} \int_{-\pi}^{\pi} x \sin(nx) \, dx$

Since $x \sin(nx)$ is an even function (odd $\times$ odd = even), we can integrate from $0$ to $\pi$ and multiply by 2:
$b_n = \frac{2}{\pi} \int_{0}^{\pi} x \sin(nx) \, dx$

We use integration by parts: Let $u=x$, $dv=\sin(nx)dx$.
Then $du=dx$, $v=-\frac{\cos(nx)}{n}$.

$b_n = \frac{2}{\pi} \left[ x \left(-\frac{\cos(nx)}{n}\right) \right]_{0}^{\pi} - \frac{2}{\pi} \int_{0}^{\pi} \left(-\frac{\cos(nx)}{n}\right) \, dx$

Evaluate the first term:
$\left[ -\frac{x \cos(nx)}{n} \right]_{0}^{\pi} = \left(-\frac{\pi \cos(n\pi)}{n}\right) - \left(-\frac{0 \cos(0)}{n}\right) = -\frac{\pi (-1)^n}{n}$

Evaluate the second term:
$\frac{2}{\pi} \int_{0}^{\pi} \frac{\cos(nx)}{n} \, dx = \frac{2}{\pi n} \left[ \frac{\sin(nx)}{n} \right]_{0}^{\pi} = \frac{2}{\pi n^2} [\sin(n\pi) - \sin(0)] = \frac{2}{\pi n^2} [0 - 0] = 0$.

So, $b_n = \frac{2}{\pi} \left(-\frac{\pi (-1)^n}{n}\right) - 0 = -\frac{2 (-1)^n}{n} = \frac{2 (-1)^{n+1}}{n}$.

The Fourier series is:
$f(x) = \sum_{n=1}^{\infty} b_n \sin(nx) = \sum_{n=1}^{\infty} \frac{2 (-1)^{n+1}}{n} \sin(nx)$
$f(x) = 2 \left( \sin(x) - \frac{1}{2}\sin(2x) + \frac{1}{3}\sin(3x) - \frac{1}{4}\sin(4x) + \ldots \right)$

**Reasoning:**
The calculation systematically applies the Fourier coefficient formulas. Recognizing $f(x)=x$ as an odd function is key to simplifying the calculation by setting $a_0=0$ and $a_n=0$. Integration by parts is a standard technique for this type of integral. The final series form shows how a ramp function can be constructed from sine waves.

---

**Question 3 (Application/Understanding):**
Consider a signal that is a rectified sine wave: $f(t) = |\sin(t)|$ for $t \in [0, 2\pi]$ and periodic with $P=2\pi$. Sketch the function and explain why its Fourier series would contain specific types of terms.

**Answer:**
The function $f(t) = |\sin(t)|$ over $[0, 2\pi]$ looks like this:
*   For $t \in [0, \pi]$, $f(t) = \sin(t)$, which is a half-sine wave peaking at $t=\pi/2$.
*   For $t \in [\pi, 2\pi]$, $f(t) = -\sin(t)$, which is also a half-sine wave, but it's the absolute value, so it's positive. It peaks at $t=3\pi/2$.

The graph will show two positive "humps" in the interval $[0, 2\pi]$. The function is periodic with $P=2\pi$.
This function is an **even function** over the interval $[- \pi, \pi]$ if we consider its periodicity properly. If we shift the interval to $[-\pi, \pi]$, then $f(t)=|\sin(t)|$. For $-\pi < t < 0$, $\sin(t)$ is negative, so $|\sin(t)| = -\sin(t)$. For $0 < t < \pi$, $\sin(t)$ is positive, so $|\sin(t)| = \sin(t)$.
$f(-t) = |-\sin(t)| = |\sin(t)| = f(t)$. So, the function is even over its period.

**Therefore, its Fourier series will consist only of a constant term ($a_0$) and cosine terms ($a_n$). All sine coefficients ($b_n$) will be zero.**

This is a direct application of the property that even functions have even Fourier series representations. The calculation would involve finding $a_0$ and $a_n$ using the formulas for even functions, integrating over $[0, \pi]$.

**Reasoning:**
The core idea here is function symmetry. By sketching the function and identifying its symmetry properties (even function in this case), we can immediately deduce that the $b_n$ coefficients will be zero. This reduces the computational effort significantly and is a common exam question type that tests conceptual understanding.

---

**Question 4 (Conceptual/Application):**
In electrical engineering, a square wave input to a circuit is often approximated by its Fourier series. If you are designing a low-pass filter to smooth out the sharp transitions of a square wave, which components of the Fourier series would you want to preserve, and which would you want to attenuate?

**Answer:**
The Fourier series of a square wave is $f(x) = \frac{4}{\pi} \left( \sin(\pi x) + \frac{1}{3}\sin(3\pi x) + \frac{1}{5}\sin(5\pi x) + \ldots \right)$.
This series consists only of sine terms with odd harmonics. The fundamental frequency is $\omega_0 = \pi$ (assuming our $L=1$ example). The subsequent frequencies are $3\omega_0, 5\omega_0, 7\omega_0$, etc.

A **low-pass filter** is designed to allow low-frequency components to pass through while attenuating high-frequency components.
To smooth out the sharp transitions, we want to remove the high-frequency components that contribute most to the sharpness. Therefore:

*   We would want to **preserve** the lower-order harmonics, particularly the fundamental frequency $\sin(\pi x)$. These provide the overall shape of the signal.
*   We would want to **attenuate** the higher-order harmonics, such as $\frac{1}{3}\sin(3\pi x)$, $\frac{1}{5}\sin(5\pi x)$, and so on. These contribute to the rapid changes and sharp corners of the square wave. By filtering them out, the resulting signal will be smoother, closer to a sine wave.

**Reasoning:**
This question connects the mathematical representation of a Fourier series to a practical engineering application. Understanding the frequency content of the signal (low vs. high harmonics) is crucial for designing filters. The inverse relationship between harmonic number and frequency in the Fourier series dictates which terms are affected by a low-pass filter.
