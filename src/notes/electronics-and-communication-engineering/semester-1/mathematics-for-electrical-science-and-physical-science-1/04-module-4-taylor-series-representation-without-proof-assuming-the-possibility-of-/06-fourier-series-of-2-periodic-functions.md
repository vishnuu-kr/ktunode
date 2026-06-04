---
title: "Fourier series of 2 π periodic functions"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL 
SCIENCE - 1"
module: "Module 4: Taylor series representation (without proof, assuming the possibility of power series expansion in appropriate domains)"
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc8f20463779487d9fd4"
status: "completed"
scrapedAt: "2026-05-23T17:35:13.394Z"
---
# Module 4: Taylor Series Representation and Fourier Series of 2π Periodic Functions

Welcome to Module 4! We've previously explored the power of Taylor series to represent functions as infinite polynomials. This ability to break down complex functions into simpler building blocks is fundamental in many areas of science and engineering. Now, we’re going to dive into another incredibly powerful technique: **Fourier Series**.

Think about it: many signals, from the electrical currents in circuits to the vibrations of a string, are *periodic*. This means they repeat themselves over a fixed interval. While Taylor series are excellent for local approximations around a point, Fourier series are designed to represent these repeating, periodic signals as a sum of simpler, *sinusoidal* functions (sines and cosines). This is a crucial concept, especially in Electrical Science, where understanding the frequency content of signals is paramount. This topic directly aligns with **Course Outcome 4 (CO4)**: "Determine the Taylor series and evaluate Fourier series expansion for different periodic functions." We’ll be focusing on the Fourier series aspect here, building upon the idea of representing functions.

## 1. What is a Fourier Series? The Big Idea

Imagine you have a complex, repeating waveform – perhaps the output of a power supply with some interesting non-sinusoidal components, or the sound wave produced by a musical instrument. It's a lot to describe at once. A Fourier series breaks this down by saying, "This complex waveform can be perfectly represented (or closely approximated) by adding together a series of simple sine and cosine waves of different frequencies and amplitudes."

This is like decomposing a complex chord played on a piano into its individual notes. Each note is a pure sine wave of a specific frequency, and the combination of these notes creates the rich sound of the chord. Similarly, a Fourier series decomposes a periodic function into a sum of simple sinusoidal components.

### 1.1. Periodic Functions: The Foundation

Before we build our series, let's define our building blocks. A function $f(x)$ is **periodic** with **period** $T$ if, for all $x$ in its domain, $f(x+T) = f(x)$. The smallest positive value of $T$ for which this holds is called the *fundamental period*.

For our discussion on Fourier series in this module, we'll focus on functions that are **2π-periodic**. This means $f(x + 2\pi) = f(x)$. This simplifies our calculations significantly, and many periodic functions encountered in electrical engineering can be scaled to fit this 2π period. Think of a standard AC voltage waveform – it repeats every cycle, and we can analyze it within that cycle.

### 1.2. The Fourier Series Formula: The Building Blocks Assembled

For a function $f(x)$ that is piecewise continuous on the interval $[-\pi, \pi]$ and has period $2\pi$, its Fourier series representation is given by:

$$f(x) \sim a_0 + \sum_{n=1}^{\infty} \left( a_n \cos(nx) + b_n \sin(nx) \right)$$

Let's break this down:

*   **$a_0$**: This is the **constant term** or **DC component**. It represents the average value of the function over one period. Think of it as the baseline level around which the function oscillates.
*   **$\sum_{n=1}^{\infty} (a_n \cos(nx) + b_n \sin(nx))$**: This is the **AC component**, the sum of all the sinusoidal parts.
    *   **$a_n$**: These are the coefficients for the **cosine terms**. They tell us the amplitude of the cosine wave of frequency $n$ (where $n=1$ is the fundamental frequency, $n=2$ is twice the fundamental frequency, and so on).
    *   **$b_n$**: These are the coefficients for the **sine terms**. They tell us the amplitude of the sine wave of frequency $n$.
    *   **$\cos(nx)$ and $\sin(nx)$**: These are our basic sinusoidal building blocks. For a 2π-periodic function, the fundamental frequency corresponds to $n=1$ (i.e., $\cos(x)$ and $\sin(x)$). The terms for $n=2, 3, 4, \dots$ represent harmonics – multiples of the fundamental frequency.

The "$\sim$" symbol indicates that the series *represents* the function. For many well-behaved functions (like those that are piecewise continuous), this series will converge to $f(x)$ where $f(x)$ is continuous, and to the average of the left and right limits at points of discontinuity.

## 2. Calculating the Fourier Coefficients: The Art of Decomposition

The real work in finding a Fourier series lies in calculating the coefficients $a_0$, $a_n$, and $b_n$. Thankfully, there are standard formulas derived using the orthogonality properties of sines and cosines. These formulas allow us to "extract" the contribution of each sinusoidal component from the original function. This process is like using a spectrum analyzer on a signal to see how much of each frequency is present.

For a $2\pi$-periodic function $f(x)$ that is piecewise continuous on $[-\pi, \pi]$:

### 2.1. The Constant Term ($a_0$)

The coefficient $a_0$ is essentially the average value of $f(x)$ over the interval $[-\pi, \pi]$.

$$a_0 = \frac{1}{2\pi} \int_{-\pi}^{\pi} f(x) \, dx$$

**Why $\frac{1}{2\pi}$?** Think of the interval length as $2\pi$. We're averaging the function's value over this interval. The $\frac{1}{2}$ is there because the general formula for the Fourier series is often written as $a_0 + \sum_{n=1}^{\infty} (a_n \cos(nx) + b_n \sin(nx))$. If we were to write it as $A_0 + \sum_{n=1}^{\infty} (A_n \cos(nx) + B_n \sin(nx))$, where $A_0$ is truly the average, then $A_0$ would be $\frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \, dx$. The convention is to split the $1/\pi$ factor, so $a_0 = A_0/2$. This is a common convention in many textbooks, including Kreyszig and Bird.

**Intuitive Analogy:** If $f(x)$ represents the voltage across a resistor over time, $a_0$ would be the DC component of that voltage, and $a_0^2 R$ would be the average power dissipated by the resistor.

### 2.2. The Cosine Coefficients ($a_n$)

These coefficients capture the "cosine-ness" of the function at different frequencies.

$$a_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \cos(nx) \, dx \quad \text{for } n = 1, 2, 3, \dots$$

**Why $\frac{1}{\pi}$ and $\cos(nx)$?** The $\frac{1}{\pi}$ normalizes the integral to get the amplitude. The $\cos(nx)$ acts as a "filter" or "detector" – when you multiply $f(x)$ by $\cos(nx)$ and integrate, the parts of $f(x)$ that "match" the $\cos(nx)$ pattern at frequency $n$ will contribute positively, while those that are out of phase or have the opposite sign will contribute negatively or cancel out. This is a direct application of the orthogonality property: $\int_{-\pi}^{\pi} \cos(mx)\cos(nx) \, dx = \pi \delta_{mn}$ (where $\delta_{mn}$ is the Kronecker delta, 1 if $m=n$ and 0 if $m \neq n$) and $\int_{-\pi}^{\pi} \cos(nx) \, dx = 0$ for $n \geq 1$.

### 2.3. The Sine Coefficients ($b_n$)

Similarly, these coefficients capture the "sine-ness" of the function.

$$b_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \sin(nx) \, dx \quad \text{for } n = 1, 2, 3, \dots$$

**Why $\frac{1}{\pi}$ and $\sin(nx)$?** The logic is identical to the $a_n$ coefficients. We use $\sin(nx)$ to detect the sinusoidal components of $f(x)$ at frequency $n$. The orthogonality property here is $\int_{-\pi}^{\pi} \sin(mx)\sin(nx) \, dx = \pi \delta_{mn}$ for $m, n \geq 1$, and $\int_{-\pi}^{\pi} \sin(nx) \, dx = 0$ for $n \geq 1$. Also, $\int_{-\pi}^{\pi} \sin(nx)\cos(mx) \, dx = 0$ for all $n, m$.

**Key Takeaway for Coefficients:** You integrate $f(x)$ multiplied by $1$, $\cos(nx)$, and $\sin(nx)$ over a full period (here, $[-\pi, \pi]$) and normalize by the period length. The normalizations are $\frac{1}{2\pi}$ for $a_0$, and $\frac{1}{\pi}$ for $a_n$ and $b_n$.

## 3. Illustrative Examples: Putting the Formulas to Work

Let's work through some common examples. These are the types of functions you'll see tested.

### Example 1: The Square Wave (A Classic!)

Consider the square wave defined for $-\pi < x < \pi$:

$$f(x) = \begin{cases} 1 & \text{if } 0 < x < \pi \\ -1 & \text{if } -\pi < x < 0 \end{cases}$$
And $f(x+2\pi) = f(x)$.

This function is **odd**. Do you remember what that means for its Fourier series? An odd function is symmetric about the origin. For our Fourier series, this means it can be represented purely by sine terms. All the cosine coefficients ($a_n$) will be zero. Let's see why.

**Step 1: Calculate $a_0$**
$$a_0 = \frac{1}{2\pi} \int_{-\pi}^{\pi} f(x) \, dx$$
Since $f(x)$ is odd, the integral of $f(x)$ over a symmetric interval like $[-\pi, \pi]$ is zero.
$$a_0 = \frac{1}{2\pi} \left( \int_{-\pi}^{0} (-1) \, dx + \int_{0}^{\pi} (1) \, dx \right) = \frac{1}{2\pi} \left( [-x]_{-\pi}^{0} + [x]_{0}^{\pi} \right)$$
$$a_0 = \frac{1}{2\pi} \left( (0 - (-\pi)) + (\pi - 0) \right) = \frac{1}{2\pi} (\pi + \pi) = \frac{2\pi}{2\pi} = 1$$
Wait! I made a mistake in my reasoning about odd functions and $a_0$. An odd function has $f(-x) = -f(x)$.
Let's re-evaluate $a_0$:
$a_0 = \frac{1}{2\pi} \int_{-\pi}^{\pi} f(x) dx$.
The integral $\int_{-\pi}^{\pi} f(x) dx$ is indeed 0 for an odd function. So, $a_0 = 0$. My initial thought was correct about the integral being zero. The average value of this square wave is zero. That makes sense – it spends equal "time" being +1 and -1.

**Step 2: Calculate $a_n$**
$$a_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \cos(nx) \, dx$$
The integrand $f(x)\cos(nx)$ is the product of an odd function ($f(x)$) and an even function ($\cos(nx)$), which results in an **odd function**. The integral of an odd function over a symmetric interval $[-\pi, \pi]$ is always zero.
$$a_n = 0 \quad \text{for all } n \geq 1$$
This confirms our prediction for odd functions!

**Step 3: Calculate $b_n$**
$$b_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \sin(nx) \, dx$$
The integrand $f(x)\sin(nx)$ is the product of an odd function ($f(x)$) and an odd function ($\sin(nx)$), which results in an **even function**. For even functions, we can simplify the integral: $\int_{-\pi}^{\pi} g(x) \, dx = 2 \int_{0}^{\pi} g(x) \, dx$.
$$b_n = \frac{1}{\pi} \left( \int_{-\pi}^{0} (-1) \sin(nx) \, dx + \int_{0}^{\pi} (1) \sin(nx) \, dx \right)$$
Using the property for even functions:
$$b_n = \frac{2}{\pi} \int_{0}^{\pi} (1) \sin(nx) \, dx$$
Now, let's integrate $\sin(nx)$:
$$\int \sin(nx) \, dx = -\frac{\cos(nx)}{n}$$
So,
$$b_n = \frac{2}{\pi} \left[ -\frac{\cos(nx)}{n} \right]_{0}^{\pi} = \frac{2}{\pi} \left( -\frac{\cos(n\pi)}{n} - \left(-\frac{\cos(0)}{n}\right) \right)$$
$$b_n = \frac{2}{\pi n} \left( 1 - \cos(n\pi) \right)$$
Now, recall that $\cos(n\pi)$ alternates between $-1$ (for odd $n$) and $1$ (for even $n$).
*   If $n$ is even, $n=2k$: $\cos(2k\pi) = 1$. So, $b_n = \frac{2}{\pi n} (1 - 1) = 0$.
*   If $n$ is odd, $n=2k-1$: $\cos((2k-1)\pi) = -1$. So, $b_n = \frac{2}{\pi n} (1 - (-1)) = \frac{2}{\pi n} (2) = \frac{4}{\pi n}$.

**The Fourier Series:**
Putting it all together: $a_0=0$, $a_n=0$, and $b_n = \frac{4}{\pi n}$ for odd $n$, and $b_n=0$ for even $n$.
$$f(x) \sim \sum_{n \text{ odd}} \frac{4}{\pi n} \sin(nx) = \frac{4}{\pi} \left( \sin(x) + \frac{\sin(3x)}{3} + \frac{\sin(5x)}{5} + \dots \right)$$

**What does this mean?** The square wave can be perfectly represented by an infinite sum of sine waves with odd harmonic frequencies, with amplitudes decreasing as $1/n$. The first term, $\frac{4}{\pi}\sin(x)$, gives a rough triangular shape. Adding $\frac{4}{3\pi}\sin(3x)$ refines the corners. Each subsequent term adds more detail, making the approximation closer and closer to the ideal square wave. This is the Gibbs phenomenon in action – at discontinuities, the Fourier series will overshoot, even with infinitely many terms.

### Example 2: The Sawtooth Wave

Consider the sawtooth wave defined for $-\pi < x < \pi$:

$$f(x) = x$$
And $f(x+2\pi) = f(x)$.

This function is **odd**. So, we expect $a_0 = 0$ and $a_n = 0$.

**Step 1: Calculate $a_0$**
$$a_0 = \frac{1}{2\pi} \int_{-\pi}^{\pi} x \, dx$$
The integral of an odd function over a symmetric interval is zero.
$$a_0 = 0$$

**Step 2: Calculate $a_n$**
$$a_n = \frac{1}{\pi} \int_{-\pi}^{\pi} x \cos(nx) \, dx$$
The integrand $x \cos(nx)$ is the product of an odd function ($x$) and an even function ($\cos(nx)$), which is an **odd function**.
$$a_n = 0 \quad \text{for all } n \geq 1$$

**Step 3: Calculate $b_n$**
$$b_n = \frac{1}{\pi} \int_{-\pi}^{\pi} x \sin(nx) \, dx$$
The integrand $x \sin(nx)$ is the product of an odd function ($x$) and an odd function ($\sin(nx)$), which is an **even function**. We can use the property $2 \int_{0}^{\pi} g(x) \, dx$.
$$b_n = \frac{2}{\pi} \int_{0}^{\pi} x \sin(nx) \, dx$$
This integral requires integration by parts. Recall the formula: $\int u \, dv = uv - \int v \, du$.
Let $u = x$ and $dv = \sin(nx) \, dx$.
Then $du = dx$ and $v = \int \sin(nx) \, dx = -\frac{\cos(nx)}{n}$.

$$b_n = \frac{2}{\pi} \left[ x \left(-\frac{\cos(nx)}{n}\right) - \int \left(-\frac{\cos(nx)}{n}\right) \, dx \right]_{0}^{\pi}$$
$$b_n = \frac{2}{\pi} \left[ -\frac{x \cos(nx)}{n} + \frac{1}{n} \int \cos(nx) \, dx \right]_{0}^{\pi}$$
$$b_n = \frac{2}{\pi} \left[ -\frac{x \cos(nx)}{n} + \frac{1}{n} \left(\frac{\sin(nx)}{n}\right) \right]_{0}^{\pi}$$
$$b_n = \frac{2}{\pi} \left[ -\frac{x \cos(nx)}{n} + \frac{\sin(nx)}{n^2} \right]_{0}^{\pi}$$

Now, evaluate at the limits:
At $x=\pi$: $-\frac{\pi \cos(n\pi)}{n} + \frac{\sin(n\pi)}{n^2}$
At $x=0$: $-\frac{0 \cos(0)}{n} + \frac{\sin(0)}{n^2} = 0 + 0 = 0$

So,
$$b_n = \frac{2}{\pi} \left( -\frac{\pi \cos(n\pi)}{n} + \frac{\sin(n\pi)}{n^2} - 0 \right)$$
Since $\sin(n\pi) = 0$ for all integers $n$, and $\cos(n\pi) = (-1)^n$:
$$b_n = \frac{2}{\pi} \left( -\frac{\pi (-1)^n}{n} \right) = -\frac{2 (-1)^n}{n} = \frac{2 (-1)^{n+1}}{n}$$

**The Fourier Series:**
$$f(x) \sim \sum_{n=1}^{\infty} \frac{2 (-1)^{n+1}}{n} \sin(nx) = 2 \left( \sin(x) - \frac{\sin(2x)}{2} + \frac{\sin(3x)}{3} - \frac{\sin(4x)}{4} + \dots \right)$$

**What does this mean?** The sawtooth wave is represented by a series of sine waves. Notice how the amplitudes alternate in sign and decrease as $1/n$. This series converges to $x$ for $-\pi < x < \pi$. At the points of discontinuity ($x = \pm \pi, \pm 3\pi, \dots$), the function jumps from $\pi$ to $-\pi$. The Fourier series will converge to the average of these values, which is $(\pi + (-\pi))/2 = 0$.

### Example 3: An Even Function - The Triangular Wave

Consider the triangular wave defined for $-\pi \le x \le \pi$:

$$f(x) = \begin{cases} \pi + x & \text{if } -\pi \le x \le 0 \\ \pi - x & \text{if } 0 \le x \le \pi \end{cases}$$
And $f(x+2\pi) = f(x)$. This is an **even function**.

**What do we expect for an even function?** The sine coefficients ($b_n$) should all be zero.

**Step 1: Calculate $a_0$**
$$a_0 = \frac{1}{2\pi} \int_{-\pi}^{\pi} f(x) \, dx$$
Since $f(x)$ is even, we can integrate from $0$ to $\pi$ and multiply by 2:
$$a_0 = \frac{1}{2\pi} \left( 2 \int_{0}^{\pi} (\pi - x) \, dx \right) = \frac{1}{\pi} \int_{0}^{\pi} (\pi - x) \, dx$$
$$a_0 = \frac{1}{\pi} \left[ \pi x - \frac{x^2}{2} \right]_{0}^{\pi} = \frac{1}{\pi} \left( (\pi^2 - \frac{\pi^2}{2}) - (0 - 0) \right)$$
$$a_0 = \frac{1}{\pi} \left( \frac{\pi^2}{2} \right) = \frac{\pi}{2}$$
So, the average value of this triangular wave is $\pi/2$.

**Step 2: Calculate $a_n$**
$$a_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \cos(nx) \, dx$$
The integrand $f(x)\cos(nx)$ is the product of an even function ($f(x)$) and an even function ($\cos(nx)$), which is an **even function**.
$$a_n = \frac{2}{\pi} \int_{0}^{\pi} (\pi - x) \cos(nx) \, dx$$
Again, we use integration by parts: $\int u \, dv = uv - \int v \, du$.
Let $u = \pi - x$ and $dv = \cos(nx) \, dx$.
Then $du = -dx$ and $v = \frac{\sin(nx)}{n}$.

$$a_n = \frac{2}{\pi} \left[ (\pi - x) \left(\frac{\sin(nx)}{n}\right) - \int \left(\frac{\sin(nx)}{n}\right) (-dx) \right]_{0}^{\pi}$$
$$a_n = \frac{2}{\pi} \left[ \frac{(\pi - x) \sin(nx)}{n} + \frac{1}{n} \int \sin(nx) \, dx \right]_{0}^{\pi}$$
$$a_n = \frac{2}{\pi} \left[ \frac{(\pi - x) \sin(nx)}{n} + \frac{1}{n} \left(-\frac{\cos(nx)}{n}\right) \right]_{0}^{\pi}$$
$$a_n = \frac{2}{\pi} \left[ \frac{(\pi - x) \sin(nx)}{n} - \frac{\cos(nx)}{n^2} \right]_{0}^{\pi}$$

Evaluate at the limits:
At $x=\pi$: $\frac{(\pi - \pi) \sin(n\pi)}{n} - \frac{\cos(n\pi)}{n^2} = 0 - \frac{(-1)^n}{n^2} = -\frac{(-1)^n}{n^2}$
At $x=0$: $\frac{(\pi - 0) \sin(0)}{n} - \frac{\cos(0)}{n^2} = 0 - \frac{1}{n^2} = -\frac{1}{n^2}$

So,
$$a_n = \frac{2}{\pi} \left[ -\frac{(-1)^n}{n^2} - \left(-\frac{1}{n^2}\right) \right] = \frac{2}{\pi} \left( \frac{1 - (-1)^n}{n^2} \right)$$

Let's look at $a_n$:
*   If $n$ is even, $n=2k$: $1 - (-1)^{2k} = 1 - 1 = 0$. So, $a_n = 0$.
*   If $n$ is odd, $n=2k-1$: $1 - (-1)^{2k-1} = 1 - (-1) = 2$. So, $a_n = \frac{2}{\pi} \left( \frac{2}{n^2} \right) = \frac{4}{\pi n^2}$.

**Step 3: Calculate $b_n$**
$$b_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \sin(nx) \, dx$$
The integrand $f(x)\sin(nx)$ is the product of an even function ($f(x)$) and an odd function ($\sin(nx)$), which is an **odd function**.
$$b_n = 0 \quad \text{for all } n \geq 1$$
This confirms our prediction for even functions!

**The Fourier Series:**
$$f(x) \sim a_0 + \sum_{n \text{ odd}} a_n \cos(nx) = \frac{\pi}{2} + \sum_{n=1, 3, 5, \dots}^{\infty} \frac{4}{\pi n^2} \cos(nx)$$
$$f(x) \sim \frac{\pi}{2} + \frac{4}{\pi} \left( \cos(x) + \frac{\cos(3x)}{3^2} + \frac{\cos(5x)}{5^2} + \dots \right)$$

**What does this mean?** The triangular wave is represented by a DC component ($\pi/2$) and a series of cosine waves with odd harmonic frequencies. The amplitudes of these cosine terms decrease much faster ($1/n^2$) than for the square wave ($1/n$). This implies that the triangular wave is "smoother" and requires fewer terms for a good approximation compared to the square wave.

## 4. Properties of Fourier Series and Useful Simplifications

Understanding the symmetry of a function can save you a lot of work.

### 4.1. Even Functions and Cosine Series

If $f(x)$ is an **even function** ($f(-x) = f(x)$), its Fourier series will only contain cosine terms and a constant term. All $b_n$ coefficients will be zero.

$$f(x) \sim a_0 + \sum_{n=1}^{\infty} a_n \cos(nx)$$
where $a_0 = \frac{1}{\pi} \int_{0}^{\pi} f(x) \, dx$ and $a_n = \frac{2}{\pi} \int_{0}^{\pi} f(x) \cos(nx) \, dx$. (Notice the integrals are now from $0$ to $\pi$).

### 4.2. Odd Functions and Sine Series

If $f(x)$ is an **odd function** ($f(-x) = -f(x)$), its Fourier series will only contain sine terms. Both $a_0$ and all $a_n$ coefficients will be zero.

$$f(x) \sim \sum_{n=1}^{\infty} b_n \sin(nx)$$
where $b_n = \frac{2}{\pi} \int_{0}^{\pi} f(x) \sin(nx) \, dx$. (Again, the integral is from $0$ to $\pi$).

**Exam Tip:** Always check for symmetry first! If a function is even or odd, you can immediately set half of the coefficients to zero, significantly simplifying your calculations. This is a crucial point for exams.

### 4.3. Half-Range Fourier Series

What if your function is defined only on the interval $[0, \pi]$ but you want to represent it as a $2\pi$-periodic function? You can "extend" the function into the interval $[-\pi, 0)$ in two ways:

*   **Even Extension:** Define $f(-x) = f(x)$ for $0 < x < \pi$. This results in a **Fourier cosine series**. You'll only have $a_0$ and $a_n$ terms.
*   **Odd Extension:** Define $f(-x) = -f(x)$ for $0 < x < \pi$. This results in a **Fourier sine series**. You'll only have $b_n$ terms.

The formulas for the coefficients remain the same as the even/odd function cases, as you are essentially integrating the extended function over $[-\pi, \pi]$, but exploiting symmetry to reduce the integration interval to $[0, \pi]$.

### 4.4. Dirichlet Conditions

For a Fourier series to converge to $f(x)$, the function must satisfy certain conditions, known as the **Dirichlet conditions**. Generally, for a piecewise continuous function over $[-\pi, \pi]$ with a finite number of discontinuities and extrema:

1.  $f(x)$ is bounded.
2.  $f(x)$ has a finite number of discontinuities in $[-\pi, \pi]$.
3.  $f(x)$ has a finite number of maxima and minima in $[-\pi, \pi]$.

If these conditions are met, the Fourier series converges to:
*   $f(x)$ at points where $f(x)$ is continuous.
*   $\frac{f(x^+) + f(x^-)}{2}$ at points of discontinuity $x$. ($f(x^+)$ is the limit from the right, $f(x^-)$ is the limit from the left).

These conditions are usually met for the types of functions encountered in introductory courses like this one. They ensure that the integrals for the coefficients exist and that the series behaves well.

## 5. Connection to Taylor Series and Other Areas

While Taylor series represent a function as a sum of powers of $x$ (e.g., $c_0 + c_1 x + c_2 x^2 + \dots$), Fourier series represent it as a sum of sines and cosines of multiples of $x$ (e.g., $a_0 + a_1 \cos(x) + b_1 \sin(x) + a_2 \cos(2x) + b_2 \sin(2x) + \dots$).

*   **Local vs. Global Representation:** Taylor series are local – they provide a good approximation around a specific point. Fourier series are global – they represent the function over its entire period.
*   **Applications:** Taylor series are useful for approximations, error analysis, and solving differential equations. Fourier series are indispensable in signal processing, vibration analysis, solving partial differential equations (like the heat or wave equation), and analyzing periodic phenomena in electrical circuits. They allow us to understand the "frequency content" of a signal, which is crucial for designing filters, analyzing communication systems, and many other electrical engineering tasks. This directly links to our **Course Outcome 4 (CO4)**.

## 6. Summary and Key Reminders

*   A Fourier series decomposes a $2\pi$-periodic function into a sum of sines and cosines.
*   The general form is $f(x) \sim a_0 + \sum_{n=1}^{\infty} (a_n \cos(nx) + b_n \sin(nx))$.
*   **Coefficients:**
    *   $a_0 = \frac{1}{2\pi} \int_{-\pi}^{\pi} f(x) \, dx$ (average value)
    *   $a_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \cos(nx) \, dx$
    *   $b_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \sin(nx) \, dx$
*   **Symmetry is your friend:**
    *   Even functions ($f(-x)=f(x)$) have $b_n=0$. Series is $a_0 + \sum a_n \cos(nx)$.
    *   Odd functions ($f(-x)=-f(x)$) have $a_0=0$ and $a_n=0$. Series is $\sum b_n \sin(nx)$.
*   Integration by parts is often needed.
*   Remember the values of $\cos(n\pi)$ and $\sin(n\pi)$.
*   The series converges to $f(x)$ at continuous points and the average of limits at discontinuities.

Mastering Fourier series is a significant step in your mathematical journey for science and engineering. It's a powerful tool for understanding anything that repeats!

---

## Sample Questions with Answers

**1. Conceptual Question:** What is the fundamental difference between a Taylor series and a Fourier series representation of a function?

**Answer:**
A **Taylor series** approximates a function as a polynomial of powers of $(x-c)$, providing a *local* representation around a point $c$. It's excellent for capturing the behavior of a function very near a specific point.
A **Fourier series** represents a periodic function as an infinite sum of sine and cosine waves of different frequencies. It provides a *global* representation of the function over its entire period and is particularly useful for analyzing periodic signals and understanding their frequency content.

**2. Exam-Oriented Question:** Find the Fourier series of the function $f(x) = x^2$ for $-\pi \le x \le \pi$, with $f(x+2\pi) = f(x)$.

**Solution:**
The function $f(x) = x^2$ is an **even function** because $f(-x) = (-x)^2 = x^2 = f(x)$.
Therefore, we expect $b_n = 0$ for all $n$.

*   **Calculate $a_0$:**
    $a_0 = \frac{1}{2\pi} \int_{-\pi}^{\pi} x^2 \, dx$. Since $x^2$ is even, we integrate from $0$ to $\pi$ and multiply by 2:
    $a_0 = \frac{1}{2\pi} \left( 2 \int_{0}^{\pi} x^2 \, dx \right) = \frac{1}{\pi} \left[ \frac{x^3}{3} \right]_{0}^{\pi} = \frac{1}{\pi} \left( \frac{\pi^3}{3} - 0 \right) = \frac{\pi^2}{3}$.

*   **Calculate $a_n$ for $n \ge 1$:**
    $a_n = \frac{1}{\pi} \int_{-\pi}^{\pi} x^2 \cos(nx) \, dx$. Since $x^2 \cos(nx)$ is even, we integrate from $0$ to $\pi$ and multiply by 2:
    $a_n = \frac{2}{\pi} \int_{0}^{\pi} x^2 \cos(nx) \, dx$.
    This requires integration by parts twice.
    Let $u=x^2$, $dv=\cos(nx)dx \implies du=2xdx, v=\frac{\sin(nx)}{n}$.
    $\int x^2 \cos(nx) \, dx = x^2 \frac{\sin(nx)}{n} - \int \frac{\sin(nx)}{n} (2x) \, dx = \frac{x^2 \sin(nx)}{n} - \frac{2}{n} \int x \sin(nx) \, dx$.
    Now, integrate $\int x \sin(nx) \, dx$ by parts:
    Let $u=x$, $dv=\sin(nx)dx \implies du=dx, v=-\frac{\cos(nx)}{n}$.
    $\int x \sin(nx) \, dx = x \left(-\frac{\cos(nx)}{n}\right) - \int \left(-\frac{\cos(nx)}{n}\right) \, dx = -\frac{x \cos(nx)}{n} + \frac{1}{n} \int \cos(nx) \, dx = -\frac{x \cos(nx)}{n} + \frac{\sin(nx)}{n^2}$.
    Substituting back:
    $\int x^2 \cos(nx) \, dx = \frac{x^2 \sin(nx)}{n} - \frac{2}{n} \left( -\frac{x \cos(nx)}{n} + \frac{\sin(nx)}{n^2} \right) = \frac{x^2 \sin(nx)}{n} + \frac{2x \cos(nx)}{n^2} - \frac{2 \sin(nx)}{n^3}$.

    Now evaluate from $0$ to $\pi$:
    $\left[ \frac{x^2 \sin(nx)}{n} + \frac{2x \cos(nx)}{n^2} - \frac{2 \sin(nx)}{n^3} \right]_{0}^{\pi}$
    At $x=\pi$: $\frac{\pi^2 \sin(n\pi)}{n} + \frac{2\pi \cos(n\pi)}{n^2} - \frac{2 \sin(n\pi)}{n^3} = 0 + \frac{2\pi (-1)^n}{n^2} - 0 = \frac{2\pi (-1)^n}{n^2}$.
    At $x=0$: $0 + 0 - 0 = 0$.
    So, the definite integral is $\frac{2\pi (-1)^n}{n^2}$.

    Now, $a_n = \frac{2}{\pi} \times \left(\frac{2\pi (-1)^n}{n^2}\right) = \frac{4 (-1)^n}{n^2}$.

*   **Calculate $b_n$:**
    Since $f(x)=x^2$ is even, $f(x)\sin(nx)$ is odd. Thus, $b_n = \frac{1}{\pi} \int_{-\pi}^{\pi} x^2 \sin(nx) \, dx = 0$ for all $n \ge 1$.

*   **The Fourier Series:**
    $f(x) \sim a_0 + \sum_{n=1}^{\infty} a_n \cos(nx) = \frac{\pi^2}{3} + \sum_{n=1}^{\infty} \frac{4 (-1)^n}{n^2} \cos(nx)$.
    $f(x) \sim \frac{\pi^2}{3} + 4 \left( -\frac{\cos(x)}{1^2} + \frac{\cos(2x)}{2^2} - \frac{\cos(3x)}{3^2} + \dots \right)$.

**3. Conceptual Question:** For a function $f(x)$ which is defined on $[0, \pi]$ and you need to find its Fourier series expansion over a $2\pi$ period, what are the two common ways to extend the function to $[-\pi, 0)$ and what type of Fourier series do they produce?

**Answer:**
1.  **Even Extension:** You define $f(-x) = f(x)$ for $0 < x < \pi$. This creates an even function over $[-\pi, \pi]$, and its Fourier series will be a **Fourier cosine series**, meaning it will only contain a constant term ($a_0$) and cosine terms ($a_n$).
2.  **Odd Extension:** You define $f(-x) = -f(x)$ for $0 < x < \pi$. This creates an odd function over $[-\pi, \pi]$, and its Fourier series will be a **Fourier sine series**, meaning it will only contain sine terms ($b_n$).

These techniques are known as half-range Fourier series.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
