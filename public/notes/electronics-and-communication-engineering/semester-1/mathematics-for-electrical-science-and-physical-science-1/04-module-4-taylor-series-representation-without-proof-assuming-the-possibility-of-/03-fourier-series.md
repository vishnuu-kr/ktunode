---
title: "Fourier series"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL 
SCIENCE - 1"
module: "Module 4: Taylor series representation (without proof, assuming the possibility of power series expansion in appropriate domains)"
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc8f20463779487d9fd1"
status: "completed"
scrapedAt: "2026-05-23T17:35:10.708Z"
---
# Mathematics for Electrical Science and Physical Science - 1

## Module 4: Taylor Series Representation and Fourier Series

### Introduction to Fourier Series

Welcome back, everyone! In Module 4, we've been exploring the power of representing functions as infinite series. We started with Taylor series, which are fantastic for approximating functions around a specific point. Today, we're going to dive into a different, but equally powerful, tool for function representation: **Fourier Series**.

Think about it. Many signals we encounter in electrical engineering and physical science are *periodic*. What does that mean? It means they repeat themselves over a fixed interval. Examples are everywhere: the AC voltage from your wall socket, the sound waves from a musical instrument, or the oscillation of a pendulum.

Now, if you can decompose a complex periodic signal into a sum of simpler, fundamental periodic signals, that would be incredibly useful, wouldn't it? That's precisely what Fourier series allow us to do. They break down any "well-behaved" periodic function into an infinite sum of sine and cosine waves. This is analogous to how a prism breaks white light (a complex mixture) into its constituent colors (simpler frequencies of light).

This topic is directly linked to **Course Outcome 4 (CO4)**: "Determine the Taylor series and evaluate Fourier series expansion for different periodic functions." As you'll see, understanding Fourier series is crucial for analyzing and synthesizing periodic phenomena in our fields.

### The Core Idea: Decomposing into Sines and Cosines

So, how do we achieve this decomposition? The fundamental idea, pioneered by Jean-Baptiste Joseph Fourier, is that any periodic function can be represented as a linear combination of sines and cosines of different frequencies.

Let's consider a function $f(x)$ that is periodic with period $T$. We are interested in representing $f(x)$ over an interval, say from $-\frac{T}{2}$ to $\frac{T}{2}$ or from $0$ to $T$. The most general form of a Fourier series representation for a function $f(x)$ with period $T$ is given by:

$$
f(x) = a_0 + \sum_{n=1}^{\infty} \left( a_n \cos\left(\frac{2\pi nx}{T}\right) + b_n \sin\left(\frac{2\pi nx}{T}\right) \right)
$$

Let's break down what these terms mean:

*   **$a_0$**: This is the **DC component** or the average value of the function over one period. It's the constant shift of the entire waveform. Think of it as the steady-state value of a system if the periodic input were removed.
*   **$a_n$ and $b_n$**: These are the **Fourier coefficients**. They tell us the "amplitude" or "weight" of each specific sine and cosine component in the series.
*   **$\cos\left(\frac{2\pi nx}{T}\right)$ and $\sin\left(\frac{2\pi nx}{T}\right)$**: These are the **harmonics**.
    *   When $n=1$, we have the **fundamental frequency** component (frequency $\frac{1}{T}$). This is the base frequency of the periodic signal.
    *   When $n=2, 3, 4, \ldots$, we have the **higher harmonics**. These are integer multiples of the fundamental frequency. The higher the value of $n$, the faster the sine or cosine wave oscillates.

The magic of the Fourier series lies in the ability to find these coefficients $a_0$, $a_n$, and $b_n$. How do we find them? This is where integral calculus comes into play, utilizing the orthogonality properties of sine and cosine functions.

### Calculating the Fourier Coefficients

The formulas for calculating the coefficients are derived using the integral properties of trigonometric functions over one period. We'll assume the function $f(x)$ is integrable over its period and satisfies certain conditions (like Dirichlet conditions), which are generally met by functions encountered in electrical science.

**1. The DC Component ($a_0$)**

The average value of $f(x)$ over one period is given by:

$$
a_0 = \frac{1}{T} \int_{-T/2}^{T/2} f(x) \, dx
$$

Alternatively, we can integrate from $0$ to $T$:

$$
a_0 = \frac{1}{T} \int_{0}^{T} f(x) \, dx
$$

*   **Think of it this way:** If you sampled the function $f(x)$ at many points over a period and averaged those values, you'd get $a_0$. It's the constant baseline. If a signal has a large $a_0$, it means it's centered around a high DC level.

**2. The Cosine Coefficients ($a_n$)**

The coefficients for the cosine terms are given by:

$$
a_n = \frac{2}{T} \int_{-T/2}^{T/2} f(x) \cos\left(\frac{2\pi nx}{T}\right) \, dx \quad (n = 1, 2, 3, \ldots)
$$

*   **Understanding $a_n$:** This integral essentially measures "how much" of the cosine wave of frequency $\frac{n}{T}$ is present in $f(x)$. The $\frac{2}{T}$ factor normalizes it. When you multiply $f(x)$ by $\cos\left(\frac{2\pi nx}{T}\right)$ and integrate, you're essentially projecting $f(x)$ onto that specific cosine basis function. If $f(x)$ has a strong component at that frequency, the integral will be large.

**3. The Sine Coefficients ($b_n$)**

Similarly, the coefficients for the sine terms are:

$$
b_n = \frac{2}{T} \int_{-T/2}^{T/2} f(x) \sin\left(\frac{2\pi nx}{T}\right) \, dx \quad (n = 1, 2, 3, \ldots)
$$

*   **Understanding $b_n$:** This integral measures the "sine-like" component of $f(x)$ at frequency $\frac{n}{T}$. By multiplying $f(x)$ with $\sin\left(\frac{2\pi nx}{T}\right)$ and integrating, we are projecting $f(x)$ onto the sine basis function.

**Important Note on Intervals:** While the formulas above use the interval from $-\frac{T}{2}$ to $\frac{T}{2}$, any interval of length $T$ will yield the same coefficients. Common choices are $[0, T]$, $[-\frac{T}{2}, \frac{T}{2}]$, or even $[c, c+T]$ for any constant $c$. The choice often depends on the symmetry of the function, which can simplify calculations.

### Simpler Case: Frequency $\omega_0 = \frac{2\pi}{T}$

Often, especially in electrical engineering, we work with angular frequency. Let $\omega_0 = \frac{2\pi}{T}$. Then the Fourier series can be written as:

$$
f(x) = a_0 + \sum_{n=1}^{\infty} \left( a_n \cos(n\omega_0 x) + b_n \sin(n\omega_0 x) \right)
$$

And the coefficient formulas become:

$$
a_0 = \frac{\omega_0}{2\pi} \int_{0}^{2\pi/\omega_0} f(x) \, dx
$$

$$
a_n = \frac{\omega_0}{\pi} \int_{0}^{2\pi/\omega_0} f(x) \cos(n\omega_0 x) \, dx \quad (n = 1, 2, 3, \ldots)
$$

$$
b_n = \frac{\omega_0}{\pi} \int_{0}^{2\pi/\omega_0} f(x) \sin(n\omega_0 x) \, dx \quad (n = 1, 2, 3, \ldots)
$$

This form is particularly useful when dealing with signals whose period is directly related to common frequencies like $50 \text{ Hz}$ or $60 \text{ Hz}$.

### Symmetry and Simplification

The integrals for calculating $a_n$ and $b_n$ can sometimes be simplified significantly if the function $f(x)$ possesses certain symmetries. This is a key concept you'll encounter when solving problems and it directly relates to **Course Outcome 4 (CO4)**.

*   **Even Function:** If $f(x)$ is an **even function**, meaning $f(-x) = f(x)$, then its Fourier series will *only* contain cosine terms (and the constant term $a_0$). All the $b_n$ coefficients will be zero.
    *   **Why?** Because the integral of an odd function (like $\sin(nx)$) over a symmetric interval (like $[-\frac{T}{2}, \frac{T}{2}]$) is always zero. When you multiply an even function $f(x)$ by an odd function $\sin(nx)$, you get an odd function, and its integral over a symmetric interval is zero. So, $b_n = 0$ for all $n$.
    *   The formulas for $a_n$ can also be simplified for even functions:
        $$
        a_n = \frac{4}{T} \int_{0}^{T/2} f(x) \cos\left(\frac{2\pi nx}{T}\right) \, dx
        $$

*   **Odd Function:** If $f(x)$ is an **odd function**, meaning $f(-x) = -f(x)$, then its Fourier series will *only* contain sine terms. The $a_0$ and all $a_n$ coefficients will be zero.
    *   **Why?** When you multiply an odd function $f(x)$ by an even function (like $\cos(nx)$), you get an odd function, and its integral over a symmetric interval is zero. So, $a_0 = 0$ and $a_n = 0$ for all $n$.
    *   The formulas for $b_n$ can be simplified for odd functions:
        $$
        b_n = \frac{4}{T} \int_{0}^{T/2} f(x) \sin\left(\frac{2\pi nx}{T}\right) \, dx
        $$

*   **Half-Wave Symmetry:** Some functions are symmetric such that $f(x + T/2) = -f(x)$. These functions will have only odd harmonics (e.g., $\sin(x), \sin(3x), \sin(5x)$). This is a more advanced type of symmetry, but it's good to be aware that it can further simplify the series.

**Remember this:** Recognizing symmetry is a lifesaver in exam problems! Always check for even or odd symmetry first. It can save you a lot of integration effort.

### Example 1: Square Wave (A Classic!)

Let's consider a square wave. Imagine a signal that is $+1$ for $0 < x < \frac{T}{2}$ and $-1$ for $-\frac{T}{2} < x < 0$. And it repeats with period $T$.

$$
f(x) = \begin{cases} 1 & \text{if } 0 < x < T/2 \\ -1 & \text{if } -T/2 < x < 0 \\ 0 & \text{at } x=0, \pm T/2, \pm T, \ldots \end{cases}
$$

Let's analyze its symmetry.
$f(-x)$: If $0 < x < T/2$, then $-T/2 < -x < 0$, so $f(-x) = -1$.
If $-T/2 < x < 0$, then $0 < -x < T/2$, so $f(-x) = 1$.
In both cases, $f(-x) = -f(x)$. This is an **odd function**!

Since $f(x)$ is odd:
*   $a_0 = 0$
*   $a_n = 0$ for all $n \ge 1$.

We only need to calculate $b_n$. Using the simplified formula for odd functions over $[0, T/2]$:

$$
b_n = \frac{4}{T} \int_{0}^{T/2} f(x) \sin\left(\frac{2\pi nx}{T}\right) \, dx
$$

In the interval $(0, T/2)$, $f(x) = 1$. So,

$$
b_n = \frac{4}{T} \int_{0}^{T/2} 1 \cdot \sin\left(\frac{2\pi nx}{T}\right) \, dx
$$

Let's perform the integration:
$$
b_n = \frac{4}{T} \left[ -\frac{\cos\left(\frac{2\pi nx}{T}\right)}{\frac{2\pi n}{T}} \right]_{0}^{T/2}
$$

$$
b_n = \frac{4}{T} \left( -\frac{T}{2\pi n} \right) \left[ \cos\left(\frac{2\pi n(T/2)}{T}\right) - \cos\left(\frac{2\pi n(0)}{T}\right) \right]
$$

$$
b_n = -\frac{2}{\pi n} \left[ \cos(n\pi) - \cos(0) \right]
$$

We know $\cos(0) = 1$ and $\cos(n\pi) = (-1)^n$.

$$
b_n = -\frac{2}{\pi n} \left[ (-1)^n - 1 \right]
$$

Now, let's look at the values of $b_n$:
*   If $n$ is even ($n=2, 4, 6, \ldots$): $(-1)^n = 1$. So, $b_n = -\frac{2}{\pi n} [1 - 1] = 0$.
*   If $n$ is odd ($n=1, 3, 5, \ldots$): $(-1)^n = -1$. So, $b_n = -\frac{2}{\pi n} [-1 - 1] = -\frac{2}{\pi n} [-2] = \frac{4}{\pi n}$.

So, the Fourier series for this square wave is:

$$
f(x) = \sum_{n \text{ odd}, n=1}^{\infty} \frac{4}{\pi n} \sin\left(\frac{2\pi nx}{T}\right)
$$

$$
f(x) = \frac{4}{\pi} \left( \sin\left(\frac{2\pi x}{T}\right) + \frac{1}{3}\sin\left(\frac{6\pi x}{T}\right) + \frac{1}{5}\sin\left(\frac{10\pi x}{T}\right) + \ldots \right)
$$

This tells us that a square wave can be built by adding together infinitely many sine waves with frequencies that are odd multiples of the fundamental frequency. The amplitude of these sine waves decreases as $1/n$. This is a very important result in signal processing!

**Exam Tip:** For common waveforms like square waves, sawtooth waves, or triangular waves, the Fourier series are often derived in textbooks (like Kreyszig or Bird's Higher Engineering Mathematics). It's highly beneficial to remember the series for a square wave, as it's a frequently tested example.

### Example 2: Sawtooth Wave

Consider a sawtooth wave defined over one period $T$ as $f(x) = x$ for $-\frac{T}{2} < x < \frac{T}{2}$.

Let's check symmetry.
$f(-x) = -x$. Since $f(x) = x$, we have $f(-x) = -f(x)$. This is again an **odd function**!

So, $a_0 = 0$ and $a_n = 0$ for all $n \ge 1$. We only need $b_n$.
Using the interval $[0, T/2]$ and $f(x)=x$:

$$
b_n = \frac{4}{T} \int_{0}^{T/2} x \sin\left(\frac{2\pi nx}{T}\right) \, dx
$$

This requires integration by parts: $\int u \, dv = uv - \int v \, du$.
Let $u = x$ and $dv = \sin\left(\frac{2\pi nx}{T}\right) \, dx$.
Then $du = dx$ and $v = \int \sin\left(\frac{2\pi nx}{T}\right) \, dx = -\frac{\cos\left(\frac{2\pi nx}{T}\right)}{\frac{2\pi n}{T}} = -\frac{T}{2\pi n}\cos\left(\frac{2\pi nx}{T}\right)$.

$$
b_n = \frac{4}{T} \left[ \left. x \left(-\frac{T}{2\pi n}\cos\left(\frac{2\pi nx}{T}\right)\right) \right|_{0}^{T/2} - \int_{0}^{T/2} \left(-\frac{T}{2\pi n}\cos\left(\frac{2\pi nx}{T}\right)\right) \, dx \right]
$$

$$
b_n = \frac{4}{T} \left[ \left( \frac{T}{2} \left(-\frac{T}{2\pi n}\cos\left(n\pi\right)\right) - 0 \right) + \frac{T}{2\pi n} \int_{0}^{T/2} \cos\left(\frac{2\pi nx}{T}\right) \, dx \right]
$$

$$
b_n = \frac{4}{T} \left[ -\frac{T^2}{4\pi n}\cos(n\pi) + \frac{T}{2\pi n} \left( \frac{\sin\left(\frac{2\pi nx}{T}\right)}{\frac{2\pi n}{T}} \right) \right]_{0}^{T/2}
$$

$$
b_n = \frac{4}{T} \left[ -\frac{T^2}{4\pi n}(-1)^n + \frac{T}{2\pi n} \left( \frac{T}{2\pi n} \left( \sin\left(n\pi\right) - \sin(0) \right) \right) \right]
$$

Since $\sin(n\pi) = 0$ and $\sin(0) = 0$:

$$
b_n = \frac{4}{T} \left[ -\frac{T^2}{4\pi n}(-1)^n + 0 \right]
$$

$$
b_n = -\frac{T}{\pi n}(-1)^n
$$

$$
b_n = \frac{T}{\pi n}(-1)^{n+1}
$$

So, the Fourier series for the sawtooth wave $f(x) = x$ on $(-\frac{T}{2}, \frac{T}{2})$ is:

$$
f(x) = \sum_{n=1}^{\infty} \frac{T}{\pi n}(-1)^{n+1} \sin\left(\frac{2\pi nx}{T}\right)
$$

$$
f(x) = \frac{T}{\pi} \left( \sin\left(\frac{2\pi x}{T}\right) - \frac{1}{2}\sin\left(\frac{4\pi x}{T}\right) + \frac{1}{3}\sin\left(\frac{6\pi x}{T}\right) - \frac{1}{4}\sin\left(\frac{8\pi x}{T}\right) + \ldots \right)
$$

This shows that a sawtooth wave is composed of sine waves at all integer multiples of the fundamental frequency, with amplitudes that decrease as $1/n$.

### Example 3: A Modified Square Wave (Not Odd or Even)

Let's consider a function $f(x)$ that is $1$ for $0 < x < T$ and $0$ for $-T < x < 0$, and this repeats with period $T$. (This is often called a "rectangular pulse" or "square pulse" when the duty cycle is less than 1).

This function is neither even nor odd. We must calculate $a_0, a_n, b_n$ using the general formulas over an interval of length $T$. Let's use $[0, T]$.

*   **$a_0$:**
    $$
    a_0 = \frac{1}{T} \int_{0}^{T} f(x) \, dx = \frac{1}{T} \int_{0}^{T} 1 \, dx = \frac{1}{T} [x]_{0}^{T} = \frac{1}{T} (T - 0) = 1
    $$
    The average value is 1. Wait, this example definition doesn't make sense if the period is $T$ and it's 1 over $(0, T)$. Let's redefine for a pulse of width $w$ within period $T$.
    Let $f(x) = 1$ for $0 < x < w$ and $f(x) = 0$ for $w < x < T$, and this repeats with period $T$. Let $w = T/2$. This is a pulse wave.

    $$
    f(x) = \begin{cases} 1 & \text{if } 0 < x < T/2 \\ 0 & \text{if } T/2 < x < T \end{cases}
    $$
    This is also periodic with period $T$.

    Let's check symmetry.
    $f(-x)$. If $0 < x < T/2$, then $-T/2 < -x < 0$. In this interval, $f(x)=1$. The definition for negative values is not given explicitly, but if we assume the pattern continues from the definition $f(x)=0$ for $T/2<x<T$, and periodicity $f(x+T)=f(x)$, then $f(x)$ for $-T/2<x<0$ is $0$.
    So, $f(-x) = 0$ if $0 < x < T/2$.
    $f(x) = 1$ if $0 < x < T/2$.
    $f(-x) \ne f(x)$ and $f(-x) \ne -f(x)$. It's not even or odd.

    We need to use the full formulas over $[0, T]$.
    *   **$a_0$:**
        $$
        a_0 = \frac{1}{T} \int_{0}^{T} f(x) \, dx = \frac{1}{T} \left( \int_{0}^{T/2} 1 \, dx + \int_{T/2}^{T} 0 \, dx \right)
        $$
        $$
        a_0 = \frac{1}{T} [x]_{0}^{T/2} + 0 = \frac{1}{T} \left(\frac{T}{2} - 0\right) = \frac{1}{2}
        $$
        The DC component is $1/2$.

    *   **$a_n$:**
        $$
        a_n = \frac{2}{T} \int_{0}^{T} f(x) \cos\left(\frac{2\pi nx}{T}\right) \, dx
        $$
        $$
        a_n = \frac{2}{T} \left( \int_{0}^{T/2} 1 \cdot \cos\left(\frac{2\pi nx}{T}\right) \, dx + \int_{T/2}^{T} 0 \cdot \cos\left(\frac{2\pi nx}{T}\right) \, dx \right)
        $$
        $$
        a_n = \frac{2}{T} \int_{0}^{T/2} \cos\left(\frac{2\pi nx}{T}\right) \, dx
        $$
        $$
        a_n = \frac{2}{T} \left[ \frac{\sin\left(\frac{2\pi nx}{T}\right)}{\frac{2\pi n}{T}} \right]_{0}^{T/2}
        $$
        $$
        a_n = \frac{2}{T} \cdot \frac{T}{2\pi n} \left[ \sin\left(n\pi\right) - \sin(0) \right]
        $$
        $$
        a_n = \frac{1}{\pi n} [0 - 0] = 0
        $$
        This is interesting! For this specific pulse wave of width $T/2$, all $a_n$ are zero.

    *   **$b_n$:**
        $$
        b_n = \frac{2}{T} \int_{0}^{T} f(x) \sin\left(\frac{2\pi nx}{T}\right) \, dx
        $$
        $$
        b_n = \frac{2}{T} \left( \int_{0}^{T/2} 1 \cdot \sin\left(\frac{2\pi nx}{T}\right) \, dx + \int_{T/2}^{T} 0 \cdot \sin\left(\frac{2\pi nx}{T}\right) \, dx \right)
        $$
        $$
        b_n = \frac{2}{T} \int_{0}^{T/2} \sin\left(\frac{2\pi nx}{T}\right) \, dx
        $$
        $$
        b_n = \frac{2}{T} \left[ -\frac{\cos\left(\frac{2\pi nx}{T}\right)}{\frac{2\pi n}{T}} \right]_{0}^{T/2}
        $$
        $$
        b_n = \frac{2}{T} \left(-\frac{T}{2\pi n}\right) \left[ \cos\left(n\pi\right) - \cos(0) \right]
        $$
        $$
        b_n = -\frac{1}{\pi n} \left[ (-1)^n - 1 \right]
        $$

        So, $b_n = \begin{cases} \frac{2}{\pi n} & \text{if } n \text{ is odd} \\ 0 & \text{if } n \text{ is even} \end{cases}$

    The Fourier series for this rectangular pulse (width $T/2$) is:
    $$
    f(x) = \frac{1}{2} + \sum_{n \text{ odd}, n=1}^{\infty} \frac{2}{\pi n} \sin\left(\frac{2\pi nx}{T}\right)
    $$
    $$
    f(x) = \frac{1}{2} + \frac{2}{\pi} \left( \sin\left(\frac{2\pi x}{T}\right) + \frac{1}{3}\sin\left(\frac{6\pi x}{T}\right) + \frac{1}{5}\sin\left(\frac{10\pi x}{T}\right) + \ldots \right)
    $$

    Notice the DC offset ($1/2$) and the fact that only odd harmonics of sine are present. This is a consequence of the specific shape and placement of the pulse.

**Relatable Analogy:** Imagine you're a musician who can only play pure sine notes. If you want to replicate a complex sound, like a clarinet, you need to play a fundamental note (the $n=1$ term) along with higher notes at integer multiples of the fundamental frequency (the $n=2, 3, 4, \ldots$ terms), each with a specific loudness (the $a_n$ and $b_n$ coefficients). The Fourier series tells you exactly which notes to play and how loud to play them.

### Convergence of Fourier Series

When can we guarantee that the infinite series actually converges to the function $f(x)$? The conditions for convergence are typically stated as Dirichlet conditions, which are satisfied by most functions encountered in practice:

1.  $f(x)$ is periodic.
2.  $f(x)$ is absolutely integrable over one period.
3.  $f(x)$ has a finite number of discontinuities in one period.
4.  $f(x)$ has a finite number of maxima and minima in one period.

If these conditions are met, the Fourier series converges to $f(x)$ at points where $f(x)$ is continuous. At points of discontinuity, the Fourier series converges to the average of the left-hand and right-hand limits. This phenomenon at discontinuities is known as the **Gibbs phenomenon**.

**Gibbs Phenomenon:** Near a jump discontinuity, the partial sums of the Fourier series "overshoot" the function's value by about 9%. This overshoot doesn't disappear as you add more terms; it just gets narrower and narrower, moving closer to the discontinuity. It's an inherent characteristic of approximating a discontinuous function with a finite number of sine and cosine waves.

### Fourier Series and Taylor Series Connection

While Taylor series represent a function as a sum of powers of $x$ (e.g., $1, x, x^2, x^3, \ldots$) centered at a point, Fourier series represent a function as a sum of sines and cosines of multiples of a base frequency.

*   **Taylor Series:** Good for local approximation (near the center point), smooth functions, and often involves powers of $x$.
*   **Fourier Series:** Excellent for periodic functions, especially for analyzing frequency content, and involves sinusoidal components.

Both are powerful methods for approximating functions, and they serve different purposes. In electrical science, if you're analyzing a steady-state periodic signal, Fourier series are your go-to. If you're looking at the behavior of a system around an equilibrium point or a specific operating point, Taylor series might be more appropriate for linearization.

**From Taylor to Fourier (Conceptual Link):** While not direct, the idea of representing a function as a sum of simpler building blocks is common. Taylor series use polynomials $(1, x, x^2, \ldots)$ as building blocks, while Fourier series use trigonometric polynomials $(\cos(nx), \sin(nx))$ as building blocks. Both rely on the concept of a **basis** – a set of independent functions that can be used to represent any function in a given space. For Taylor series, it's the set of monomials; for Fourier series, it's the set of sines and cosines.

### Harmonic Analysis

The process of finding the Fourier coefficients is often called **harmonic analysis**. We are essentially analyzing the function $f(x)$ to determine the strength (amplitude) of each harmonic frequency present in it.

Conversely, if we have the Fourier coefficients ($a_n$, $b_n$) and the fundamental frequency $\omega_0$, we can **synthesize** the function $f(x)$ by summing the corresponding sine and cosine waves. This is called **harmonic synthesis**.

**Connection to CO4:** This entire discussion directly addresses **Course Outcome 4 (CO4)**. We've learned how to:
*   Define the Fourier series expansion.
*   Understand the role of $a_0$, $a_n$, $b_n$, and the harmonic frequencies.
*   Calculate these coefficients for given periodic functions using integration.
*   Utilize symmetry to simplify calculations.
*   Recognize the convergence properties and the Gibbs phenomenon.

### Summary of Key Formulas

For a function $f(x)$ with period $T$:

Fourier Series:
$$
f(x) = a_0 + \sum_{n=1}^{\infty} \left( a_n \cos\left(\frac{2\pi nx}{T}\right) + b_n \sin\left(\frac{2\pi nx}{T}\right) \right)
$$

Coefficients:
$$
a_0 = \frac{1}{T} \int_{c}^{c+T} f(x) \, dx
$$
$$
a_n = \frac{2}{T} \int_{c}^{c+T} f(x) \cos\left(\frac{2\pi nx}{T}\right) \, dx \quad (n=1, 2, \ldots)
$$
$$
b_n = \frac{2}{T} \int_{c}^{c+T} f(x) \sin\left(\frac{2\pi nx}{T}\right) \, dx \quad (n=1, 2, \ldots)
$$
(where $c$ can be any real number, often $-\frac{T}{2}$ or $0$)

Using angular frequency $\omega_0 = \frac{2\pi}{T}$:
$$
f(x) = a_0 + \sum_{n=1}^{\infty} \left( a_n \cos(n\omega_0 x) + b_n \sin(n\omega_0 x) \right)
$$
$$
a_0 = \frac{\omega_0}{2\pi} \int_{0}^{2\pi/\omega_0} f(x) \, dx
$$
$$
a_n = \frac{\omega_0}{\pi} \int_{0}^{2\pi/\omega_0} f(x) \cos(n\omega_0 x) \, dx \quad (n=1, 2, \ldots)
$$
$$
b_n = \frac{\omega_0}{\pi} \int_{0}^{2\pi/\omega_0} f(x) \sin(n\omega_0 x) \, dx \quad (n=1, 2, \ldots)
$$

**Symmetry Simplifications:**
*   If $f(x)$ is even, $b_n = 0$, and $a_n = \frac{4}{T} \int_{0}^{T/2} f(x) \cos\left(\frac{2\pi nx}{T}\right) \, dx$.
*   If $f(x)$ is odd, $a_0 = 0$, $a_n = 0$, and $b_n = \frac{4}{T} \int_{0}^{T/2} f(x) \sin\left(\frac{2\pi nx}{T}\right) \, dx$.

This covers the essential theoretical framework for Fourier series as required for this module. Remember that the application of these formulas, especially the integration, is a key skill to practice.

---

### Sample Questions with Answers

**Question 1 (Conceptual):** What is the fundamental physical interpretation of the DC component ($a_0$) in a Fourier series expansion?

**Answer:** The DC component ($a_0$) represents the average value of the periodic function over one period. Physically, it signifies the constant bias or steady-state offset of the signal. For instance, in an AC voltage signal, the $a_0$ term would tell you if there's an additional DC voltage superimposed on the oscillating AC voltage.

**Question 2 (Application & Symmetry):** Find the Fourier series for the function $f(x) = |x|$ for $-\pi \le x \le \pi$, assuming it's periodic with period $2\pi$.

**Solution:**
1.  **Period:** The period $T = 2\pi$. The fundamental frequency is $\omega_0 = \frac{2\pi}{T} = \frac{2\pi}{2\pi} = 1$.
2.  **Symmetry:** $f(-x) = |-x| = |x| = f(x)$. The function is **even**.
3.  **Implication of Symmetry:** Since $f(x)$ is even, its Fourier series will only contain cosine terms. Thus, $b_n = 0$ for all $n$, and the series is of the form $f(x) = a_0 + \sum_{n=1}^{\infty} a_n \cos(nx)$.
4.  **Calculate $a_0$:**
    $$
    a_0 = \frac{1}{T} \int_{-\pi}^{\pi} f(x) \, dx = \frac{1}{2\pi} \int_{-\pi}^{\pi} |x| \, dx
    $$
    Due to symmetry, we can integrate from $0$ to $\pi$ and multiply by 2:
    $$
    a_0 = \frac{2}{2\pi} \int_{0}^{\pi} x \, dx = \frac{1}{\pi} \left[ \frac{x^2}{2} \right]_{0}^{\pi} = \frac{1}{\pi} \left( \frac{\pi^2}{2} - 0 \right) = \frac{\pi}{2}
    $$
5.  **Calculate $a_n$:**
    $$
    a_n = \frac{2}{T} \int_{-\pi}^{\pi} f(x) \cos(nx) \, dx = \frac{2}{2\pi} \int_{-\pi}^{\pi} |x| \cos(nx) \, dx
    $$
    Again, using symmetry (since $|x|\cos(nx)$ is an even function):
    $$
    a_n = \frac{2}{\pi} \int_{0}^{\pi} x \cos(nx) \, dx
    $$
    We use integration by parts: $u=x$, $dv = \cos(nx) \, dx \implies du=dx$, $v = \frac{\sin(nx)}{n}$.
    $$
    a_n = \frac{2}{\pi} \left[ \left. x \frac{\sin(nx)}{n} \right|_{0}^{\pi} - \int_{0}^{\pi} \frac{\sin(nx)}{n} \, dx \right]
    $$
    $$
    a_n = \frac{2}{\pi} \left[ \left( \pi \frac{\sin(n\pi)}{n} - 0 \right) - \frac{1}{n} \int_{0}^{\pi} \sin(nx) \, dx \right]
    $$
    Since $\sin(n\pi) = 0$:
    $$
    a_n = \frac{2}{\pi} \left[ 0 - \frac{1}{n} \left[ -\frac{\cos(nx)}{n} \right]_{0}^{\pi} \right]
    $$
    $$
    a_n = \frac{2}{\pi} \left[ \frac{1}{n^2} [\cos(nx)]_{0}^{\pi} \right] = \frac{2}{\pi n^2} [\cos(n\pi) - \cos(0)]
    $$
    $$
    a_n = \frac{2}{\pi n^2} [(-1)^n - 1]
    $$
    For $n$ even, $a_n = \frac{2}{\pi n^2} [1-1] = 0$.
    For $n$ odd, $a_n = \frac{2}{\pi n^2} [-1-1] = -\frac{4}{\pi n^2}$.
6.  **Fourier Series:**
    $$
    f(x) = a_0 + \sum_{n=1}^{\infty} a_n \cos(nx)
    $$
    $$
    f(x) = \frac{\pi}{2} + \sum_{n \text{ odd}, n=1}^{\infty} -\frac{4}{\pi n^2} \cos(nx)
    $$
    $$
    f(x) = \frac{\pi}{2} - \frac{4}{\pi} \left( \cos(x) + \frac{1}{3^2}\cos(3x) + \frac{1}{5^2}\cos(5x) + \ldots \right)
    $$

**Question 3 (Analysis/Understanding):** A periodic signal $s(t)$ is found to have $a_0 = 5$, $a_n = 0$ for all $n \ge 1$, and $b_n = \frac{10}{n\pi}$ for $n$ odd and $b_n = 0$ for $n$ even. What type of waveform does $s(t)$ resemble, and what is its fundamental frequency if its period is $0.02$ seconds?

**Answer:**
1.  **Waveform Analysis:**
    *   $a_0 = 5$: There is a DC component of 5.
    *   $a_n = 0$ for $n \ge 1$: There are no cosine terms (no even harmonics in the cosine form).
    *   $b_n = \frac{10}{n\pi}$ for $n$ odd, and $b_n=0$ for $n$ even: Only sine terms are present, and they are for odd harmonics of the sine wave.
    This combination of a DC offset, only sine terms, and only odd harmonics is characteristic of a **square wave** (or a modified square wave if the amplitudes aren't exactly in the 1/n ratio, but the structure is the same). A simple square wave alternating between +A and -A typically only has sine terms with odd $n$.
2.  **Fundamental Frequency:**
    The period $T = 0.02$ seconds.
    The fundamental frequency $f_0 = \frac{1}{T} = \frac{1}{0.02 \text{ s}} = 50 \text{ Hz}$.
    The angular frequency $\omega_0 = \frac{2\pi}{T} = 2\pi f_0 = 2\pi (50) = 100\pi$ rad/s.

    The Fourier series would be of the form:
    $s(t) = a_0 + \sum_{n=1, n \text{ odd}}^{\infty} b_n \sin(n\omega_0 t)$
    $s(t) = 5 + \sum_{n=1, n \text{ odd}}^{\infty} \frac{10}{n\pi} \sin(n(100\pi) t)$

This question tests the understanding of how the coefficients relate to waveform shapes and the calculation of fundamental frequency from the period.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
