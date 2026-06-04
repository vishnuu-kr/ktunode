---
title: "Fourier series of 2 l periodic functions"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND 
PHYSICAL  SCIENCE - 1"
module: "Module 4: Taylor series representation (without proof, assuming the possibility of power series expansion in appropriate domains)"
branch: "Mechanical Engineering"
semester: 1
topicId: "68bd1edefeb4799d95e83564"
status: "completed"
scrapedAt: "2026-05-20T17:39:40.242Z"
---
## Module 4: Fourier Series Representation of Periodic Functions

**(Connecting to Course Outcome CO4: Determine the Taylor series and evaluate Fourier series expansion for different periodic functions. (Knowledge Level: K3 - Understanding))**

Welcome, everyone! Today, we embark on a fascinating journey into the world of Fourier series. Now, you might be thinking, "Professor, we just finished talking about Taylor series, which are all about representing functions as sums of powers of *x*. How does this connect to Fourier series?" That's a brilliant question, and it gets to the heart of what we're doing.

Think back to Taylor series. We used them to approximate functions locally, around a specific point. They're like a very precise magnifying glass, giving us an excellent view of a function's behavior in a tiny neighborhood. But what if we want to understand the *global* behavior of a function, especially one that repeats itself? What if we have a signal, like an electrical voltage or current, that goes up and down, and then repeats this pattern over and over again? That's where Fourier series shine!

Instead of approximating a function with powers of *x*, Fourier series represent a periodic function as an infinite sum of simple sine and cosine waves. It's like taking a complex musical chord and breaking it down into its fundamental notes. This decomposition is incredibly powerful, especially in electrical science and physical science, where periodic phenomena are everywhere – from alternating current to sound waves to the vibration of a string.

### What is a Periodic Function?

Before we dive into the series itself, let's quickly remind ourselves what a periodic function is. A function $f(x)$ is periodic if there exists a positive number $P$ such that $f(x+P) = f(x)$ for all $x$ in the domain of $f$. This $P$ is called the **period**. The smallest such positive value of $P$ is called the **fundamental period**.

For example, $\sin(x)$ is periodic with period $2\pi$, since $\sin(x+2\pi) = \sin(x)$. $\cos(2x)$ is periodic with period $\pi$, because $\cos(2(x+\pi)) = \cos(2x+2\pi) = \cos(2x)$.

### The Fourier Series for a $2l$-Periodic Function

Now, let's talk about our main focus: Fourier series for functions with a period of $2l$. Why $2l$? This is a common convention, and it makes our formulas a bit cleaner. A function $f(x)$ is $2l$-periodic if $f(x+2l) = f(x)$ for all $x$. The interval over which we consider one complete cycle is typically $[-l, l]$ or $[0, 2l]$.

The core idea, as presented in advanced texts like Kreyszig's *Advanced Engineering Mathematics*, is that a sufficiently "well-behaved" $2l$-periodic function can be represented as:

$$
f(x) \sim a_0 + \sum_{n=1}^{\infty} \left( a_n \cos\left(\frac{n\pi x}{l}\right) + b_n \sin\left(\frac{n\pi x}{l}\right) \right)
$$

Let's break down what this means.

*   **$a_0$**: This is the **DC component** or the average value of the function over one period. It's like the constant baseline of our signal.
*   **$a_n \cos\left(\frac{n\pi x}{l}\right)$ and $b_n \sin\left(\frac{n\pi x}{l}\right)$**: These are the **harmonic components**.
    *   The term with $\cos\left(\frac{n\pi x}{l}\right)$ is the $n$-th **cosine harmonic**.
    *   The term with $\sin\left(\frac{n\pi x}{l}\right)$ is the $n$-th **sine harmonic**.
    *   The argument $\frac{n\pi x}{l}$ ensures that these functions have the correct periodicity. When $n=1$, we have the fundamental frequency (or fundamental harmonic). When $n=2$, we have the second harmonic, which has twice the frequency of the fundamental, and so on.

This infinite sum, if it converges to $f(x)$, is called the **Fourier series** of $f(x)$. The numbers $a_0$, $a_n$, and $b_n$ are called the **Fourier coefficients**.

### How Do We Find These Coefficients?

This is the crucial part! We don't just pull these coefficients out of thin air. There are specific formulas derived using the orthogonality properties of sine and cosine functions. Don't worry about the proofs today – we're assuming the expansion is possible, as per the module's guidance. Think of these formulas as tools to extract the "amount" of each sine and cosine wave present in our function.

The formulas for the Fourier coefficients for a $2l$-periodic function $f(x)$ over the interval $[-l, l]$ are:

1.  **The constant term ($a_0$)**:
    $$
    a_0 = \frac{1}{2l} \int_{-l}^{l} f(x) \, dx
    $$
    This is simply the average value of $f(x)$ over one period. If you were to average the voltage of an AC signal over a whole cycle, you'd get this $a_0$.

2.  **The cosine coefficients ($a_n$)**:
    $$
    a_n = \frac{1}{l} \int_{-l}^{l} f(x) \cos\left(\frac{n\pi x}{l}\right) \, dx \quad \text{for } n = 1, 2, 3, \dots
    $$
    This integral measures how much of the $n$-th cosine wave is "present" in $f(x)$.

3.  **The sine coefficients ($b_n$)**:
    $$
    b_n = \frac{1}{l} \int_{-l}^{l} f(x) \sin\left(\frac{n\pi x}{l}\right) \, dx \quad \text{for } n = 1, 2, 3, \dots
    $$
    Similarly, this integral tells us how much of the $n$-th sine wave is "present" in $f(x)$.

**Important Note**: Sometimes the integration interval is given as $[0, 2l]$ instead of $[-l, l]$. The formulas remain the same:

$$
a_0 = \frac{1}{2l} \int_{0}^{2l} f(x) \, dx
$$

$$
a_n = \frac{1}{l} \int_{0}^{2l} f(x) \cos\left(\frac{n\pi x}{l}\right) \, dx \quad \text{for } n = 1, 2, 3, \dots
$$

$$
b_n = \frac{1}{l} \int_{0}^{2l} f(x) \sin\left(\frac{n\pi x}{l}\right) \, dx \quad \text{for } n = 1, 2, 3, \dots
$$

The choice of interval usually depends on the specific function and how it's defined. For symmetry reasons, $[-l, l]$ is often preferred.

### Example: The Square Wave

Let's make this concrete with an example. Imagine a simple square wave, like a digital signal that switches between +1 and -1.

Consider the function $f(x)$ defined over $[-1, 1]$ as:
$$
f(x) = \begin{cases} 1 & \text{if } 0 < x < 1 \\ -1 & \text{if } -1 < x < 0 \\ 0 & \text{if } x = 0, \pm 1 \end{cases}
$$
This function repeats every $2l = 2$, so $l=1$.

Let's find its Fourier series. We need to calculate $a_0$, $a_n$, and $b_n$ using the interval $[-1, 1]$.

**1. Calculate $a_0$**:
$$
a_0 = \frac{1}{2(1)} \int_{-1}^{1} f(x) \, dx = \frac{1}{2} \int_{-1}^{1} f(x) \, dx
$$
We split the integral based on the definition of $f(x)$:
$$
\int_{-1}^{1} f(x) \, dx = \int_{-1}^{0} (-1) \, dx + \int_{0}^{1} (1) \, dx
$$
$$
= [-x]_{-1}^{0} + [x]_{0}^{1} = (0 - (-(-1))) + (1 - 0) = -1 + 1 = 0
$$
So, $a_0 = \frac{1}{2} \times 0 = 0$. This tells us that the average value of this square wave over a period is zero. It spends equal "time" above and below the x-axis.

**2. Calculate $a_n$**:
$$
a_n = \frac{1}{1} \int_{-1}^{1} f(x) \cos\left(\frac{n\pi x}{1}\right) \, dx = \int_{-1}^{1} f(x) \cos(n\pi x) \, dx
$$
Again, split the integral:
$$
\int_{-1}^{1} f(x) \cos(n\pi x) \, dx = \int_{-1}^{0} (-1) \cos(n\pi x) \, dx + \int_{0}^{1} (1) \cos(n\pi x) \, dx
$$
Let's evaluate the first part:
$$
\int_{-1}^{0} -\cos(n\pi x) \, dx = -\left[\frac{\sin(n\pi x)}{n\pi}\right]_{-1}^{0} = -\left(\frac{\sin(0)}{n\pi} - \frac{\sin(-n\pi)}{n\pi}\right)
$$
Since $\sin(0) = 0$ and $\sin(-n\pi) = 0$ for any integer $n$, this part is $0$.

Now the second part:
$$
\int_{0}^{1} \cos(n\pi x) \, dx = \left[\frac{\sin(n\pi x)}{n\pi}\right]_{0}^{1} = \frac{\sin(n\pi)}{n\pi} - \frac{\sin(0)}{n\pi}
$$
Again, $\sin(n\pi) = 0$ for any integer $n$. So this part is also $0$.

Therefore, $a_n = 0 + 0 = 0$ for all $n \geq 1$.

**What does this mean?** This tells us that our square wave, in this specific form, doesn't contain any "cosine" components. This makes sense if you think about the symmetry of the function. $f(x)$ is an odd function ($f(-x) = -f(x)$). Cosine is an even function. The product of an odd and an even function is odd. Integrating an odd function over a symmetric interval like $[-1, 1]$ always results in zero. So, $a_n=0$ for all $n$ is expected for an odd function.

**3. Calculate $b_n$**:
$$
b_n = \frac{1}{1} \int_{-1}^{1} f(x) \sin\left(\frac{n\pi x}{1}\right) \, dx = \int_{-1}^{1} f(x) \sin(n\pi x) \, dx
$$
Split the integral:
$$
\int_{-1}^{1} f(x) \sin(n\pi x) \, dx = \int_{-1}^{0} (-1) \sin(n\pi x) \, dx + \int_{0}^{1} (1) \sin(n\pi x) \, dx
$$
First part:
$$
\int_{-1}^{0} -\sin(n\pi x) \, dx = -\left[\frac{-\cos(n\pi x)}{n\pi}\right]_{-1}^{0} = \frac{1}{n\pi} [\cos(n\pi x)]_{-1}^{0}
$$
$$
= \frac{1}{n\pi} (\cos(0) - \cos(-n\pi)) = \frac{1}{n\pi} (1 - \cos(n\pi))
$$
Remember that $\cos(n\pi) = (-1)^n$. So, this part is $\frac{1}{n\pi} (1 - (-1)^n)$.

Second part:
$$
\int_{0}^{1} \sin(n\pi x) \, dx = \left[\frac{-\cos(n\pi x)}{n\pi}\right]_{0}^{1} = -\frac{1}{n\pi} [\cos(n\pi x)]_{0}^{1}
$$
$$
= -\frac{1}{n\pi} (\cos(n\pi) - \cos(0)) = -\frac{1}{n\pi} ((-1)^n - 1) = \frac{1}{n\pi} (1 - (-1)^n)
$$
So, $b_n = \frac{1}{n\pi} (1 - (-1)^n) + \frac{1}{n\pi} (1 - (-1)^n) = \frac{2}{n\pi} (1 - (-1)^n)$.

Now, let's analyze $b_n$:
*   If $n$ is **even**, $n=2k$ for some integer $k$. Then $(-1)^n = (-1)^{2k} = 1$.
    $b_{2k} = \frac{2}{2k\pi} (1 - 1) = 0$.
*   If $n$ is **odd**, $n=2k-1$ for some integer $k$. Then $(-1)^n = (-1)^{2k-1} = -1$.
    $b_{2k-1} = \frac{2}{(2k-1)\pi} (1 - (-1)) = \frac{2}{(2k-1)\pi} (2) = \frac{4}{(2k-1)\pi}$.

So, the Fourier series for this square wave is:
$$
f(x) \sim 0 + \sum_{n=1}^{\infty} \left( 0 \cdot \cos(n\pi x) + b_n \sin(n\pi x) \right)
$$
$$
f(x) \sim \sum_{n \text{ odd}}^{\infty} \frac{4}{n\pi} \sin(n\pi x)
$$
Letting $n = 1, 3, 5, \dots$:
$$
f(x) \sim \frac{4}{\pi} \sin(\pi x) + \frac{4}{3\pi} \sin(3\pi x) + \frac{4}{5\pi} \sin(5\pi x) + \dots
$$
$$
f(x) \sim \frac{4}{\pi} \left( \sin(\pi x) + \frac{1}{3}\sin(3\pi x) + \frac{1}{5}\sin(5\pi x) + \dots \right)
$$
This is a beautiful result! We've represented a discontinuous square wave as an infinite sum of continuous sine waves. As we add more terms, the approximation gets closer and closer to the actual square wave.

### Symmetry and Simplification

You might have noticed in the square wave example that $a_n=0$ because the function was odd. This is a general principle that can save you a lot of calculation.

**If $f(x)$ is an odd function** (meaning $f(-x) = -f(x)$) and the interval is symmetric like $[-l, l]$:
*   $a_0 = 0$ (the average value is zero).
*   $a_n = 0$ for all $n \geq 1$ (since $f(x)\cos(\frac{n\pi x}{l})$ is odd).
*   The Fourier series will only contain sine terms: $f(x) \sim \sum_{n=1}^{\infty} b_n \sin\left(\frac{n\pi x}{l}\right)$.
    The $b_n$ coefficients can often be simplified: $b_n = \frac{2}{l} \int_{0}^{l} f(x) \sin\left(\frac{n\pi x}{l}\right) \, dx$.

**If $f(x)$ is an even function** (meaning $f(-x) = f(x)$) and the interval is symmetric like $[-l, l]$:
*   $b_n = 0$ for all $n \geq 1$ (since $f(x)\sin(\frac{n\pi x}{l})$ is odd).
*   The Fourier series will only contain a constant term and cosine terms: $f(x) \sim a_0 + \sum_{n=1}^{\infty} a_n \cos\left(\frac{n\pi x}{l}\right)$.
    The $a_0$ and $a_n$ coefficients can often be simplified:
    $a_0 = \frac{2}{2l} \int_{0}^{l} f(x) \, dx = \frac{1}{l} \int_{0}^{l} f(x) \, dx$.
    $a_n = \frac{2}{l} \int_{0}^{l} f(x) \cos\left(\frac{n\pi x}{l}\right) \, dx$.

Recognizing these symmetries, just like in our square wave example where $f(x)$ was odd, can significantly cut down on the integration work. This is a key exam strategy.

### Example: The Sawtooth Wave

Let's try another common function, the sawtooth wave. Consider $f(x) = x$ for $-l < x < l$, and $f(x+2l) = f(x)$. Here, the period is $2l$.

This function $f(x)=x$ is an **odd function** ($f(-x) = -x = -f(x)$). Therefore, we expect $a_0 = 0$ and $a_n = 0$. We only need to calculate $b_n$.

Using the simplified formula for odd functions:
$$
b_n = \frac{2}{l} \int_{0}^{l} f(x) \sin\left(\frac{n\pi x}{l}\right) \, dx
$$
$$
b_n = \frac{2}{l} \int_{0}^{l} x \sin\left(\frac{n\pi x}{l}\right) \, dx
$$
This integral requires integration by parts. Recall the formula: $\int u \, dv = uv - \int v \, du$.
Let $u = x$ and $dv = \sin\left(\frac{n\pi x}{l}\right) \, dx$.
Then $du = dx$ and $v = \int \sin\left(\frac{n\pi x}{l}\right) \, dx = -\frac{\cos\left(\frac{n\pi x}{l}\right)}{\frac{n\pi}{l}} = -\frac{l}{n\pi} \cos\left(\frac{n\pi x}{l}\right)$.

Now, apply the integration by parts formula:
$$
\int_{0}^{l} x \sin\left(\frac{n\pi x}{l}\right) \, dx = \left[ x \left(-\frac{l}{n\pi} \cos\left(\frac{n\pi x}{l}\right)\right) \right]_{0}^{l} - \int_{0}^{l} \left(-\frac{l}{n\pi} \cos\left(\frac{n\pi x}{l}\right)\right) \, dx
$$
Evaluate the first term:
$$
\left[ -\frac{lx}{n\pi} \cos\left(\frac{n\pi x}{l}\right) \right]_{0}^{l} = \left(-\frac{l \cdot l}{n\pi} \cos\left(\frac{n\pi l}{l}\right)\right) - \left(-\frac{l \cdot 0}{n\pi} \cos(0)\right)
$$
$$
= -\frac{l^2}{n\pi} \cos(n\pi) - 0 = -\frac{l^2}{n\pi} (-1)^n
$$
Now, evaluate the second term (the integral):
$$
- \int_{0}^{l} -\frac{l}{n\pi} \cos\left(\frac{n\pi x}{l}\right) \, dx = \frac{l}{n\pi} \int_{0}^{l} \cos\left(\frac{n\pi x}{l}\right) \, dx
$$
$$
= \frac{l}{n\pi} \left[ \frac{\sin\left(\frac{n\pi x}{l}\right)}{\frac{n\pi}{l}} \right]_{0}^{l} = \frac{l}{n\pi} \left[ \frac{l}{n\pi} \sin\left(\frac{n\pi x}{l}\right) \right]_{0}^{l}
$$
$$
= \left(\frac{l}{n\pi}\right)^2 \left[ \sin\left(\frac{n\pi l}{l}\right) - \sin(0) \right] = \left(\frac{l}{n\pi}\right)^2 (\sin(n\pi) - 0) = 0
$$
So, the integral part is zero.

Putting it all together for the integral:
$$
\int_{0}^{l} x \sin\left(\frac{n\pi x}{l}\right) \, dx = -\frac{l^2}{n\pi} (-1)^n
$$
Now, substitute this back into the formula for $b_n$:
$$
b_n = \frac{2}{l} \left( -\frac{l^2}{n\pi} (-1)^n \right) = -\frac{2l}{n\pi} (-1)^n = \frac{2l}{n\pi} (-1)^{n+1}
$$

So, the Fourier series for $f(x)=x$ over $[-l, l]$ is:
$$
f(x) \sim \sum_{n=1}^{\infty} \frac{2l}{n\pi} (-1)^{n+1} \sin\left(\frac{n\pi x}{l}\right)
$$
$$
f(x) \sim \frac{2l}{\pi} \left( \sin\left(\frac{\pi x}{l}\right) - \frac{1}{2}\sin\left(\frac{2\pi x}{l}\right) + \frac{1}{3}\sin\left(\frac{3\pi x}{l}\right) - \dots \right)
$$
This shows how the linear function $f(x)=x$ can be represented by a sum of sine waves. As you add more terms, the approximation starts to look like a ramp that repeats.

### Piecewise Smoothness and Convergence

A point to remember from signal processing and analysis (as discussed in texts like Haykin's *Signals and Systems*) is that Fourier series don't converge everywhere for *every* function. However, for functions that are "piecewise smooth" over a period, the Fourier series does converge.
A function is piecewise smooth if it has a finite number of discontinuities and its derivative is also piecewise continuous. Our square wave and sawtooth wave examples fit this description.

*   **At points of continuity**, the Fourier series converges to the function's value, $f(x)$.
*   **At points of jump discontinuity**, say at $x_0$, the Fourier series converges to the average of the left-hand limit and the right-hand limit: $\frac{f(x_0^-) + f(x_0^+)}{2}$. This is known as **Dirichlet's theorem**. This is a crucial concept for exams!

For instance, for our square wave at $x=0$, $f(0^-) = -1$ and $f(0^+) = 1$. The average is $(-1+1)/2 = 0$. Our series calculation gave $a_0=0$, and all $b_n$ terms become zero when $x=0$ because $\sin(0)=0$. So the series correctly converges to 0 at $x=0$.

### Gibb's Phenomenon

One last important concept to be aware of is **Gibbs' phenomenon**. Near a jump discontinuity, the partial sums of the Fourier series exhibit an overshoot. This overshoot doesn't disappear as you add more terms; it just gets narrower. The overshoot is about 9% of the jump in amplitude. It's a fascinating consequence of approximating discontinuous functions with infinitely many sine waves. It tells us that even with infinite terms, there's a fundamental limitation in how perfectly we can represent sharp transitions.

### Relating to Taylor Series

You asked how this connects to Taylor series. Remember, Taylor series approximate functions locally using polynomials. Fourier series approximate functions globally (over a period) using sums of sinusoids. They are complementary tools. Taylor series are excellent for smooth functions and analyzing behavior near a point. Fourier series are excellent for periodic signals and analyzing their frequency content.

In electrical engineering, for instance, you might use a Taylor series to approximate a non-linear component's behavior around an operating point, but you'd use Fourier series to analyze the harmonic distortion in a signal that passes through that component.

### Summary and Key Takeaways

*   **Purpose**: Fourier series decompose periodic functions into sums of sines and cosines.
*   **General Form**: For a $2l$-periodic function $f(x)$: $f(x) \sim a_0 + \sum_{n=1}^{\infty} \left( a_n \cos\left(\frac{n\pi x}{l}\right) + b_n \sin\left(\frac{n\pi x}{l}\right) \right)$.
*   **Coefficients**: $a_0, a_n, b_n$ are calculated using integrals over one period.
*   **Symmetry**: Use odd/even function properties to simplify calculations (odd $\implies$ only sines, even $\implies$ constant and cosines). This is a major time-saver!
*   **Convergence**: For piecewise smooth functions, the series converges to $f(x)$ at continuous points and $\frac{f(x_0^-) + f(x_0^+)}{2}$ at jump discontinuities (Dirichlet's theorem).
*   **Gibbs' Phenomenon**: Overshoot near jump discontinuities that persists.

Understanding Fourier series is fundamental for analyzing signals and systems in many areas of science and engineering. It's a tool that unlocks the frequency domain, allowing us to see the "building blocks" of periodic phenomena.

---

### Sample Questions with Answers

**Conceptual Question 1:**
Explain why the Fourier series for an odd function, integrated over a symmetric interval $[-l, l]$, will only contain sine terms.

**Answer:**
An odd function satisfies $f(-x) = -f(x)$.
The Fourier series terms are $a_0$, $a_n \cos\left(\frac{n\pi x}{l}\right)$, and $b_n \sin\left(\frac{n\pi x}{l}\right)$.

*   $a_0 = \frac{1}{2l} \int_{-l}^{l} f(x) \, dx$. The integrand $f(x)$ is odd. Integrating an odd function over a symmetric interval $[-l, l]$ always results in zero. Thus, $a_0=0$.

*   $a_n = \frac{1}{l} \int_{-l}^{l} f(x) \cos\left(\frac{n\pi x}{l}\right) \, dx$. The term $f(x)$ is odd, and $\cos\left(\frac{n\pi x}{l}\right)$ is an even function. The product of an odd function and an even function is always an odd function. Therefore, the integrand $f(x) \cos\left(\frac{n\pi x}{l}\right)$ is odd. Integrating an odd function over a symmetric interval $[-l, l]$ results in zero. Thus, $a_n=0$ for all $n \geq 1$.

*   $b_n = \frac{1}{l} \int_{-l}^{l} f(x) \sin\left(\frac{n\pi x}{l}\right) \, dx$. The term $f(x)$ is odd, and $\sin\left(\frac{n\pi x}{l}\right)$ is also an odd function. The product of two odd functions is an even function. Therefore, the integrand $f(x) \sin\left(\frac{n\pi x}{l}\right)$ is even. Integrating an even function over $[-l, l]$ is twice the integral over $[0, l]$. This integral can be non-zero, giving us the sine coefficients.

Since $a_0$ and all $a_n$ are zero, the Fourier series only contains sine terms of the form $\sum b_n \sin\left(\frac{n\pi x}{l}\right)$.

---

**Exam-Oriented Question 1:**
Find the first three non-zero terms of the Fourier series expansion of the function $f(x)$ given by $f(x) = |x|$ for $-2 < x < 2$, and $f(x+4) = f(x)$.

**Solution:**
The function $f(x) = |x|$ over $(-2, 2)$ is an **even function** ($f(-x) = |-x| = |x| = f(x)$).
The period is $2l = 4$, so $l=2$.
For an even function over a symmetric interval $[-l, l]$, the Fourier series contains a constant term and cosine terms only. All $b_n = 0$.

We need to calculate $a_0$ and $a_n$.
For an even function, the formulas simplify using the interval $[0, l]$:
$a_0 = \frac{1}{l} \int_{0}^{l} f(x) \, dx$
$a_n = \frac{2}{l} \int_{0}^{l} f(x) \cos\left(\frac{n\pi x}{l}\right) \, dx$

Here, $l=2$ and $f(x) = x$ for $0 < x < 2$.

**1. Calculate $a_0$:**
$$
a_0 = \frac{1}{2} \int_{0}^{2} x \, dx = \frac{1}{2} \left[\frac{x^2}{2}\right]_{0}^{2} = \frac{1}{2} \left(\frac{2^2}{2} - 0\right) = \frac{1}{2} \times 2 = 1
$$

**2. Calculate $a_n$:**
$$
a_n = \frac{2}{2} \int_{0}^{2} x \cos\left(\frac{n\pi x}{2}\right) \, dx = \int_{0}^{2} x \cos\left(\frac{n\pi x}{2}\right) \, dx
$$
Use integration by parts: $u=x, dv = \cos\left(\frac{n\pi x}{2}\right) \, dx$.
$du = dx, v = \frac{\sin\left(\frac{n\pi x}{2}\right)}{\frac{n\pi}{2}} = \frac{2}{n\pi} \sin\left(\frac{n\pi x}{2}\right)$.

$$
\int_{0}^{2} x \cos\left(\frac{n\pi x}{2}\right) \, dx = \left[ x \cdot \frac{2}{n\pi} \sin\left(\frac{n\pi x}{2}\right) \right]_{0}^{2} - \int_{0}^{2} \frac{2}{n\pi} \sin\left(\frac{n\pi x}{2}\right) \, dx
$$

Evaluate the first term:
$$
\left[ \frac{2x}{n\pi} \sin\left(\frac{n\pi x}{2}\right) \right]_{0}^{2} = \frac{2(2)}{n\pi} \sin\left(\frac{n\pi (2)}{2}\right) - \frac{2(0)}{n\pi} \sin(0)
$$
$$
= \frac{4}{n\pi} \sin(n\pi) - 0 = 0 \quad (\text{since } \sin(n\pi)=0 \text{ for integer } n)
$$

Evaluate the second term (the integral):
$$
- \int_{0}^{2} \frac{2}{n\pi} \sin\left(\frac{n\pi x}{2}\right) \, dx = -\frac{2}{n\pi} \left[ \frac{-\cos\left(\frac{n\pi x}{2}\right)}{\frac{n\pi}{2}} \right]_{0}^{2}
$$
$$
= \frac{2}{n\pi} \left[ \frac{2}{n\pi} \cos\left(\frac{n\pi x}{2}\right) \right]_{0}^{2} = \left(\frac{2}{n\pi}\right)^2 \left[ \cos\left(\frac{n\pi x}{2}\right) \right]_{0}^{2}
$$
$$
= \frac{4}{(n\pi)^2} \left( \cos\left(\frac{n\pi (2)}{2}\right) - \cos(0) \right) = \frac{4}{(n\pi)^2} (\cos(n\pi) - 1)
$$
$$
= \frac{4}{(n\pi)^2} ((-1)^n - 1)
$$

So, $a_n = \frac{4}{(n\pi)^2} ((-1)^n - 1)$.

Let's analyze $a_n$:
*   If $n$ is **even**, $n=2k$. $(-1)^n = 1$.
    $a_{2k} = \frac{4}{(2k\pi)^2} (1 - 1) = 0$.
*   If $n$ is **odd**, $n=2k-1$. $(-1)^n = -1$.
    $a_{2k-1} = \frac{4}{((2k-1)\pi)^2} (-1 - 1) = \frac{4}{((2k-1)\pi)^2} (-2) = -\frac{8}{((2k-1)\pi)^2}$.

The Fourier series is $f(x) \sim a_0 + \sum_{n=1}^{\infty} a_n \cos\left(\frac{n\pi x}{l}\right)$.
Since $a_n=0$ for even $n$, we only have terms for odd $n$.
$f(x) \sim 1 + \sum_{k=1}^{\infty} a_{2k-1} \cos\left(\frac{(2k-1)\pi x}{2}\right)$
$f(x) \sim 1 + \sum_{k=1}^{\infty} \left(-\frac{8}{((2k-1)\pi)^2}\right) \cos\left(\frac{(2k-1)\pi x}{2}\right)$

The first three non-zero terms correspond to the first three odd values of $n$.
For $k=1$, $n=1$: $a_1 = -\frac{8}{\pi^2}$. Term is $-\frac{8}{\pi^2} \cos\left(\frac{\pi x}{2}\right)$.
For $k=2$, $n=3$: $a_3 = -\frac{8}{(3\pi)^2} = -\frac{8}{9\pi^2}$. Term is $-\frac{8}{9\pi^2} \cos\left(\frac{3\pi x}{2}\right)$.
For $k=3$, $n=5$: $a_5 = -\frac{8}{(5\pi)^2} = -\frac{8}{25\pi^2}$. Term is $-\frac{8}{25\pi^2} \cos\left(\frac{5\pi x}{2}\right)$.

The first three non-zero terms are $1$, $-\frac{8}{\pi^2} \cos\left(\frac{\pi x}{2}\right)$, and $-\frac{8}{9\pi^2} \cos\left(\frac{3\pi x}{2}\right)$.
(Note: $a_0=1$ is usually considered the first "term" if it's non-zero, followed by the first harmonic, second harmonic etc. If they ask for "non-zero terms," including $a_0$ is standard. If they wanted the first three harmonic terms, it would be $a_1, a_3, a_5$ or $b_1, b_3, b_5$ depending on the function.)

**Final Fourier Series (partial):**
$f(x) \sim 1 - \frac{8}{\pi^2} \cos\left(\frac{\pi x}{2}\right) - \frac{8}{9\pi^2} \cos\left(\frac{3\pi x}{2}\right) - \dots$

---

**Conceptual Question 2:**
What is Dirichlet's theorem regarding the convergence of Fourier series, and why is it important?

**Answer:**
Dirichlet's theorem states that for a periodic function $f(x)$ that is piecewise continuous and has a finite number of maxima and minima in each period (i.e., it's "piecewise smooth"), its Fourier series converges to:
1.  The value of the function, $f(x)$, at any point where $f(x)$ is continuous.
2.  The average of the left-hand and right-hand limits, $\frac{f(x_0^-) + f(x_0^+)}{2}$, at any point of jump discontinuity $x_0$.

This theorem is crucial because it guarantees that for most practical periodic signals encountered in electrical and physical sciences (like square waves, sawtooth waves, or signals with occasional glitches), the Fourier series representation will accurately capture the function's behavior, even at its discontinuities. It tells us that the series won't just diverge wildly but will converge to a meaningful value that represents the function's average behavior at the "jump." This is vital for applications where the signal's behavior at discontinuities is important for system response.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
