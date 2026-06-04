---
title: "Maclaurin series representation"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND 
PHYSICAL  SCIENCE - 1"
module: "Module 4: Taylor series representation (without proof, assuming the possibility of power series expansion in appropriate domains)"
branch: "Mechanical Engineering"
semester: 1
topicId: "68bd1edefeb4799d95e8355f"
status: "completed"
scrapedAt: "2026-05-20T17:39:36.471Z"
---
# Module 4: Taylor Series Representation - Maclaurin Series

Welcome, everyone! Today, we're diving into a fundamental concept in mathematics that is absolutely crucial for understanding many phenomena in electrical science and physical science: the **Maclaurin Series**. This topic is a special case of the more general **Taylor Series**, and its power lies in its ability to represent complex functions as simple, manageable polynomials. Think of it as dissecting a complicated machine into its basic, working parts – it makes understanding and manipulating the whole much easier!

You might be wondering, "Why do we need these series? Can't we just use the functions as they are?" Well, often, dealing with functions like $e^x$, $\sin(x)$, or $\cos(x)$ in their native forms can be mathematically challenging, especially when we're trying to solve differential equations or analyze circuits. Maclaurin series allow us to approximate these functions with polynomials, which are much simpler to differentiate, integrate, and work with. This is incredibly useful in areas like signal processing, control systems, and quantum mechanics.

This topic directly ties into our **Course Outcome 4 (CO4)**: "Determine the Taylor series and evaluate Fourier series expansion for different periodic functions." While Fourier series deals with representing functions as sums of sines and cosines, Maclaurin series (and Taylor series in general) represent functions as sums of powers of $x$. Both are powerful decomposition tools.

## What is a Maclaurin Series?

At its heart, a Maclaurin series is a Taylor series expansion of a function $f(x)$ centered at $x=0$. Recall from our general Taylor series discussion that any sufficiently smooth function $f(x)$ can be represented by a polynomial, provided we are within a certain radius of convergence. The Taylor series expansion of $f(x)$ around a point $a$ is given by:

$$ f(x) = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \frac{f'''(a)}{3!}(x-a)^3 + \dots $$

When we set our center point $a$ to $0$, we get the **Maclaurin series**:

$$ f(x) = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + \dots $$

Or, more compactly, using summation notation:

$$ f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!}x^n $$

where $f^{(n)}(0)$ represents the $n$-th derivative of $f(x)$ evaluated at $x=0$, and $n!$ is $n$ factorial ($n! = n \times (n-1) \times \dots \times 2 \times 1$, with $0! = 1$).

This formula is our golden ticket! If we can calculate the value of the function and all its derivatives at $x=0$, we can construct the Maclaurin series for that function. The assumption we're making here, as stated in the module description, is that such a power series expansion exists and is valid in some interval around $x=0$. This is a crucial assumption, and understanding the conditions for this validity (which are typically covered more deeply in advanced calculus, but important to be aware of) is key. For many common functions we'll encounter, this assumption holds true.

Think about it like this: we're approximating the function $f(x)$ using a polynomial that has the same value, same slope, same curvature, same rate of change of curvature, and so on, at the point $x=0$. The more terms we include in the series, the better this polynomial will approximate the actual function, especially near $x=0$.

## Key Concepts and Derivations

To build a Maclaurin series, we need to systematically find the derivatives of our function and evaluate them at $x=0$. Let's walk through some foundational examples.

### The Exponential Function: $e^x$

The exponential function $e^x$ is a cornerstone in many scientific and engineering applications, appearing in models for growth, decay, and transient behavior in circuits. Let's find its Maclaurin series.

Our function is $f(x) = e^x$.
*   $f(0) = e^0 = 1$
*   $f'(x) = \frac{d}{dx}(e^x) = e^x$, so $f'(0) = e^0 = 1$
*   $f''(x) = \frac{d}{dx}(e^x) = e^x$, so $f''(0) = e^0 = 1$
*   In fact, every $n$-th derivative of $e^x$ is just $e^x$. So, $f^{(n)}(x) = e^x$, which means $f^{(n)}(0) = 1$ for all $n \ge 0$.

Now, let's plug these values into the Maclaurin series formula:

$$ e^x = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + \dots $$
$$ e^x = 1 + 1 \cdot x + \frac{1}{2!}x^2 + \frac{1}{3!}x^3 + \dots $$
$$ e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!} $$

**Remember this:** The Maclaurin series for $e^x$ is $\sum_{n=0}^{\infty} \frac{x^n}{n!}$. This series converges for all real values of $x$. This is a very important series to memorize!

**Relatable Example:** Imagine you're trying to predict the population growth of bacteria. If the growth rate is proportional to the current population, you'd end up with a differential equation whose solution involves $e^x$. If you're only interested in the population after a very short time (small $x$), you can use the first few terms of the Maclaurin series to get a good approximation. For instance, $e^x \approx 1 + x + \frac{x^2}{2}$.

### The Trigonometric Functions: $\sin(x)$ and $\cos(x)$

Trigonometric functions are vital for analyzing periodic phenomena, like alternating current (AC) circuits or wave propagation.

**1. For $\sin(x)$:**
Let $f(x) = \sin(x)$.
*   $f(0) = \sin(0) = 0$
*   $f'(x) = \cos(x)$, so $f'(0) = \cos(0) = 1$
*   $f''(x) = -\sin(x)$, so $f''(0) = -\sin(0) = 0$
*   $f'''(x) = -\cos(x)$, so $f'''(0) = -\cos(0) = -1$
*   $f^{(4)}(x) = \sin(x)$, so $f^{(4)}(0) = \sin(0) = 0$
*   $f^{(5)}(x) = \cos(x)$, so $f^{(5)}(0) = \cos(0) = 1$

Notice a pattern in the derivatives at 0: $0, 1, 0, -1, 0, 1, 0, -1, \dots$. The non-zero terms occur at odd derivatives, and they alternate between $+1$ and $-1$.

Plugging these into the Maclaurin series formula:

$$ \sin(x) = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + \frac{f^{(4)}(0)}{4!}x^4 + \frac{f^{(5)}(0)}{5!}x^5 + \dots $$
$$ \sin(x) = 0 + 1 \cdot x + \frac{0}{2!}x^2 + \frac{-1}{3!}x^3 + \frac{0}{4!}x^4 + \frac{1}{5!}x^5 + \dots $$
$$ \sin(x) = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \dots $$
$$ \sin(x) = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!} $$

**Remember this:** The Maclaurin series for $\sin(x)$ is $x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots$. It contains only odd powers of $x$. This series also converges for all real $x$.

**2. For $\cos(x)$:**
Let $f(x) = \cos(x)$.
*   $f(0) = \cos(0) = 1$
*   $f'(x) = -\sin(x)$, so $f'(0) = -\sin(0) = 0$
*   $f''(x) = -\cos(x)$, so $f''(0) = -\cos(0) = -1$
*   $f'''(x) = \sin(x)$, so $f'''(0) = \sin(0) = 0$
*   $f^{(4)}(x) = \cos(x)$, so $f^{(4)}(0) = \cos(0) = 1$

The pattern for derivatives of $\cos(x)$ at 0 is: $1, 0, -1, 0, 1, 0, -1, \dots$. The non-zero terms occur at even derivatives, alternating between $+1$ and $-1$.

Plugging these in:

$$ \cos(x) = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + \frac{f^{(4)}(0)}{4!}x^4 + \dots $$
$$ \cos(x) = 1 + 0 \cdot x + \frac{-1}{2!}x^2 + \frac{0}{3!}x^3 + \frac{1}{4!}x^4 + \dots $$
$$ \cos(x) = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \dots $$
$$ \cos(x) = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!} $$

**Remember this:** The Maclaurin series for $\cos(x)$ is $1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \dots$. It contains only even powers of $x$. This series also converges for all real $x$.

**Relatable Example:** Imagine analyzing the oscillation of a simple pendulum. For small angles (small $x$, where $x$ is the angle in radians), $\sin(x) \approx x$. This simplification is derived directly from the first term of the Maclaurin series for $\sin(x)$, and it's what leads to the simple harmonic motion equation! Without this approximation, the pendulum's motion would be much harder to describe.

### The Logarithmic Function: $\ln(1+x)$

This function is important in areas like information theory and describing phenomena that saturate. It's a bit trickier to find derivatives for, but let's do it.

Let $f(x) = \ln(1+x)$.
*   $f(0) = \ln(1+0) = \ln(1) = 0$
*   $f'(x) = \frac{1}{1+x} = (1+x)^{-1}$, so $f'(0) = (1+0)^{-1} = 1$
*   $f''(x) = -1(1+x)^{-2} = -\frac{1}{(1+x)^2}$, so $f''(0) = -\frac{1}{(1+0)^2} = -1$
*   $f'''(x) = (-1)(-2)(1+x)^{-3} = \frac{2}{(1+x)^3}$, so $f'''(0) = \frac{2}{(1+0)^3} = 2$
*   $f^{(4)}(x) = 2(-3)(1+x)^{-4} = -\frac{6}{(1+x)^4}$, so $f^{(4)}(0) = -\frac{6}{(1+0)^4} = -6$
*   $f^{(5)}(x) = -6(-4)(1+x)^{-5} = \frac{24}{(1+x)^5}$, so $f^{(5)}(0) = \frac{24}{(1+0)^5} = 24$

The derivatives at 0 are $0, 1, -1, 2, -6, 24, \dots$. Can you see a pattern here? The absolute values are $0!, 1!, 2!, 3!, 4!, \dots$ but with alternating signs after the first term. The $n$-th derivative seems to be related to $(-1)^{n-1} (n-1)!$ for $n \ge 1$. Let's check:
For $n=1$: $f'(0) = (-1)^{1-1}(1-1)! = (-1)^0 0! = 1 \times 1 = 1$. Correct.
For $n=2$: $f''(0) = (-1)^{2-1}(2-1)! = (-1)^1 1! = -1 \times 1 = -1$. Correct.
For $n=3$: $f'''(0) = (-1)^{3-1}(3-1)! = (-1)^2 2! = 1 \times 2 = 2$. Correct.
For $n=4$: $f^{(4)}(0) = (-1)^{4-1}(4-1)! = (-1)^3 3! = -1 \times 6 = -6$. Correct.

So, $f^{(n)}(0) = (-1)^{n-1}(n-1)!$ for $n \ge 1$, and $f(0) = 0$.

Now, substitute into the Maclaurin series:

$$ \ln(1+x) = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + \frac{f^{(4)}(0)}{4!}x^4 + \dots $$
$$ \ln(1+x) = 0 + 1 \cdot x + \frac{-1}{2!}x^2 + \frac{2}{3!}x^3 + \frac{-6}{4!}x^4 + \dots $$
$$ \ln(1+x) = x - \frac{x^2}{2} + \frac{2x^3}{6} - \frac{6x^4}{24} + \dots $$
$$ \ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \dots $$
$$ \ln(1+x) = \sum_{n=1}^{\infty} \frac{(-1)^{n-1}x^n}{n} $$

**Remember this:** The Maclaurin series for $\ln(1+x)$ is $x - \frac{x^2}{2} + \frac{x^3}{3} - \dots$. This series converges for $-1 < x \le 1$. This limited interval of convergence is important to note!

**Relatable Example:** Imagine you're dealing with a signal whose amplitude decays over time, but not exponentially, perhaps due to some damping mechanism that's more complex. If you can model this decay with a function like $\ln(1+x)$ (perhaps after some transformation), you can use its Maclaurin series to approximate its behavior for small time values.

### The Binomial Series: $(1+x)^k$

This is a generalization of the binomial theorem for any real exponent $k$. When $k$ is a non-negative integer, it's exactly the familiar binomial expansion. But when $k$ is not an integer (e.g., $\sqrt{1+x} = (1+x)^{1/2}$), the binomial series provides a power series representation.

Let $f(x) = (1+x)^k$.
*   $f(0) = (1+0)^k = 1^k = 1$
*   $f'(x) = k(1+x)^{k-1}$, so $f'(0) = k(1+0)^{k-1} = k$
*   $f''(x) = k(k-1)(1+x)^{k-2}$, so $f''(0) = k(k-1)$
*   $f'''(x) = k(k-1)(k-2)(1+x)^{k-3}$, so $f'''(0) = k(k-1)(k-2)$
*   In general, $f^{(n)}(0) = k(k-1)(k-2)\dots(k-n+1)$.

The Maclaurin series is:

$$ (1+x)^k = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + \dots $$
$$ (1+x)^k = 1 + kx + \frac{k(k-1)}{2!}x^2 + \frac{k(k-1)(k-2)}{3!}x^3 + \dots $$
$$ (1+x)^k = \sum_{n=0}^{\infty} \binom{k}{n} x^n $$

where $\binom{k}{n} = \frac{k(k-1)(k-2)\dots(k-n+1)}{n!}$ is the generalized binomial coefficient.

**Remember this:** The Maclaurin series for $(1+x)^k$ is $\sum_{n=0}^{\infty} \binom{k}{n} x^n$. This series converges for $|x| < 1$.

**Special Cases:**
*   If $k=1/2$: $(1+x)^{1/2} = \sqrt{1+x} = 1 + \frac{1}{2}x + \frac{(1/2)(-1/2)}{2!}x^2 + \dots = 1 + \frac{1}{2}x - \frac{1}{8}x^2 + \dots$
*   If $k=-1$: $(1+x)^{-1} = \frac{1}{1+x} = 1 - x + x^2 - x^3 + \dots$, which is a geometric series.

**Relatable Example:** When analyzing the behavior of a circuit element whose voltage-current relationship is non-linear, but that non-linearity is mild (meaning $x$ is small), you might use the binomial series to linearize or approximate the relationship. For instance, if you have a square root relationship, $\sqrt{1+x}$, its Maclaurin series gives you a polynomial approximation that's much easier to work with for small $x$.

## Using Known Series to Find New Series

One of the most powerful techniques, especially for exam preparation, is to derive new Maclaurin series by manipulating known ones. This is often much faster than recalculating derivatives.

**1. Substitution:**
If you know the series for $f(u)$, and you want the series for $f(g(x))$, you can substitute $g(x)$ for $u$ in the series for $f(u)$.

**Example:** Find the Maclaurin series for $e^{-x^2}$.
We know the series for $e^u$ is: $e^u = \sum_{n=0}^{\infty} \frac{u^n}{n!} = 1 + u + \frac{u^2}{2!} + \frac{u^3}{3!} + \dots$
Let $u = -x^2$. Substitute this into the series:
$e^{-x^2} = \sum_{n=0}^{\infty} \frac{(-x^2)^n}{n!} = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{n!}$
$e^{-x^2} = 1 + (-x^2) + \frac{(-x^2)^2}{2!} + \frac{(-x^2)^3}{3!} + \dots$
$e^{-x^2} = 1 - x^2 + \frac{x^4}{2!} - \frac{x^6}{3!} + \dots$

This series is important in probability and statistics (Gaussian distribution) and signal processing.

**2. Term-by-Term Differentiation and Integration:**
If you have a Maclaurin series for $f(x)$, you can differentiate or integrate it term by term to find the series for $f'(x)$ or $\int f(x) dx$. The interval of convergence might change for integration.

**Example 1: Integrating $\frac{1}{1+x}$**
We know $\frac{1}{1+x} = 1 - x + x^2 - x^3 + \dots = \sum_{n=0}^{\infty} (-x)^n = \sum_{n=0}^{\infty} (-1)^n x^n$ for $|x|<1$.
Let's integrate this term by term to find the series for $\ln(1+x)$:
$\int \frac{1}{1+x} dx = \int (1 - x + x^2 - x^3 + \dots) dx$
$\ln(1+x) + C = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \dots$
Since $\ln(1+0) = \ln(1) = 0$, the constant of integration $C$ must be 0.
So, $\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \dots$, which matches what we found earlier. This confirms our derivation and is a much quicker way if you know the geometric series.

**Example 2: Differentiating $\sin(x)$**
We know $\sin(x) = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \dots$
Differentiating term by term:
$\frac{d}{dx}(\sin(x)) = \frac{d}{dx}\left(x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \dots \right)$
$\cos(x) = 1 - \frac{3x^2}{3!} + \frac{5x^4}{5!} - \frac{7x^6}{7!} + \dots$
$\cos(x) = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \dots$
This again confirms our Maclaurin series for $\cos(x)$! This term-by-term operation is very powerful.

**3. Multiplication of Series:**
You can multiply two known Maclaurin series. This can be tedious but is a valid technique.

**Example:** Find the first few terms of the Maclaurin series for $\sin(x)e^x$.
We have:
$e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots$
$\sin(x) = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots$

Multiply them:
$(x - \frac{x^3}{6} + \dots)(1 + x + \frac{x^2}{2} + \frac{x^3}{6} + \dots)$

Let's pick terms that result in powers up to $x^3$:
*   $x \cdot 1 = x$
*   $x \cdot x = x^2$
*   $x \cdot \frac{x^2}{2} = \frac{x^3}{2}$
*   $-\frac{x^3}{6} \cdot 1 = -\frac{x^3}{6}$

Summing these: $x + x^2 + \frac{x^3}{2} - \frac{x^3}{6} = x + x^2 + (\frac{3}{6} - \frac{1}{6})x^3 = x + x^2 + \frac{2}{6}x^3 = x + x^2 + \frac{1}{3}x^3$.
So, $\sin(x)e^x \approx x + x^2 + \frac{1}{3}x^3$.

**Relatable Example:** Imagine you have a sensor that measures temperature changes, and its output is approximately $e^T$ where $T$ is the temperature deviation. If you also know that the temperature deviation itself follows a pattern that can be approximated by $\sin(\omega t)$ for small $t$, the combined sensor output would be approximately $\sin(\omega t)e^T$. Multiplying their series expansions allows you to understand this combined behavior for small $t$.

## Applications in Electrical Science and Physical Science

The Maclaurin series isn't just a mathematical exercise; it's a tool that helps us understand and design systems.

*   **Circuit Analysis:** In analyzing RLC circuits, particularly for transient responses or when dealing with non-linear components that behave linearly for small signals, Maclaurin series can approximate the behavior of functions like $e^{-at}$, $\sin(\omega t)$, and $\cos(\omega t)$. For example, the response of an RL circuit to a sudden voltage change involves $e^{-t/ \tau}$, and for small $t$, this can be approximated by $1 - t/\tau$. This helps predict initial current surges.
*   **Signal Processing:** Understanding the frequency content of signals is crucial. While Fourier series breaks signals into sinusoids, Maclaurin series helps approximate signals themselves. For example, the output of a system might involve a function like $\tan^{-1}(x)$. For small inputs, $\tan^{-1}(x) \approx x$, which is a very useful simplification.
*   **Control Systems:** Stability analysis and controller design often involve analyzing the behavior of systems around an operating point. Maclaurin series can be used to linearize non-linear system dynamics, allowing for the application of linear control theory techniques. For instance, if a system's input-output relationship is $y = f(x)$, and $x$ is small, then $y \approx f(0) + f'(0)x$. This linear approximation is the basis for many control design methods.
*   **Approximation of Integrals:** Sometimes, integrals of functions do not have simple closed-form solutions. If the integrand can be represented by a Maclaurin series, we can integrate the series term by term to get an approximate value for the integral. For example, the integral of $e^{-x^2}$ is the error function (erf), which doesn't have an elementary antiderivative. We can integrate the Maclaurin series of $e^{-x^2}$ to approximate $\int_0^x e^{-t^2} dt$.

**Connection to CO4:** Maclaurin series are a direct way to "Determine the Taylor series" for a specific center ($a=0$). By understanding how to derive and manipulate these series, we gain a powerful method for function approximation, complementing the frequency-domain analysis provided by Fourier series.

## Important Considerations and Pitfalls

*   **Radius/Interval of Convergence:** This is paramount! A Maclaurin series is only an approximation within its interval of convergence. For $e^x$, $\sin(x)$, $\cos(x)$, the interval is $(-\infty, \infty)$. For $\ln(1+x)$, it's $(-1, 1]$ and for $(1+x)^k$ (with non-integer $k$), it's $(-1, 1)$. Using a series outside its valid range can lead to wild inaccuracies. Always be mindful of this, especially in exam questions.
*   **Accuracy:** The more terms you use, the more accurate your approximation, especially as you get closer to the center ($x=0$). For points further away, you might need more terms for the same level of accuracy.
*   **Memorization:** While understanding the derivation is crucial, memorizing the series for $e^x$, $\sin(x)$, $\cos(x)$, $\frac{1}{1-x}$ (and $\frac{1}{1+x}$), and $\ln(1+x)$ will save you immense time in exams.
*   **Rethink Taylor vs. Maclaurin:** Maclaurin is just Taylor centered at 0. If a problem asks for a Taylor series expansion *around* a point other than 0, say $a=1$, you'd use the general Taylor formula $f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \dots$.

## Summary of Key Maclaurin Series

It's worth having these handy:

1.  $e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots$ (for all $x$)
2.  $\sin(x) = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots$ (for all $x$)
3.  $\cos(x) = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!} = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \dots$ (for all $x$)
4.  $\frac{1}{1-x} = \sum_{n=0}^{\infty} x^n = 1 + x + x^2 + x^3 + \dots$ (for $|x|<1$)
5.  $\frac{1}{1+x} = \sum_{n=0}^{\infty} (-x)^n = 1 - x + x^2 - x^3 + \dots$ (for $|x|<1$)
6.  $\ln(1+x) = \sum_{n=1}^{\infty} \frac{(-1)^{n-1}x^n}{n} = x - \frac{x^2}{2} + \frac{x^3}{3} - \dots$ (for $-1 < x \le 1$)
7.  $(1+x)^k = \sum_{n=0}^{\infty} \binom{k}{n} x^n = 1 + kx + \frac{k(k-1)}{2!}x^2 + \dots$ (for $|x|<1$)

Remember these like you remember basic arithmetic operations. They will be your best friends when tackling problems in exams and beyond.

---

## Sample Questions with Answers

**Question 1 (Conceptual):**
What is the fundamental difference between a Taylor series and a Maclaurin series?

**Answer:**
A Maclaurin series is a specific case of a Taylor series where the expansion is centered at $x=0$. All Maclaurin series are Taylor series, but not all Taylor series are Maclaurin series. The Maclaurin series formula is derived from the general Taylor series formula by setting the center of expansion, $a$, to $0$.

**Question 2 (Derivation/Recall):**
Find the Maclaurin series for $f(x) = \frac{1}{1-x}$ and state its interval of convergence.

**Answer:**
This is a standard geometric series.
Let $f(x) = \frac{1}{1-x}$. We can see that $f(0) = 1$.
$f'(x) = \frac{1}{(1-x)^2}$, $f'(0) = 1$.
$f''(x) = \frac{2}{(1-x)^3}$, $f''(0) = 2$.
$f'''(x) = \frac{6}{(1-x)^4}$, $f'''(0) = 6$.
The $n$-th derivative is $f^{(n)}(x) = \frac{n!}{(1-x)^{n+1}}$, so $f^{(n)}(0) = n!$.

Using the Maclaurin series formula $f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!}x^n$:
$\frac{1}{1-x} = \sum_{n=0}^{\infty} \frac{n!}{n!}x^n = \sum_{n=0}^{\infty} x^n = 1 + x + x^2 + x^3 + \dots$

This is a geometric series with ratio $x$. It converges when $|x| < 1$.
The interval of convergence is $(-1, 1)$.

**Question 3 (Application/Manipulation):**
Use known Maclaurin series to find the first three non-zero terms of the Maclaurin series for $f(x) = \cos(2x)$.

**Answer:**
We know the Maclaurin series for $\cos(u)$ is:
$\cos(u) = 1 - \frac{u^2}{2!} + \frac{u^4}{4!} - \frac{u^6}{6!} + \dots$

We want the series for $\cos(2x)$. We can substitute $u = 2x$ into the series for $\cos(u)$:
$\cos(2x) = 1 - \frac{(2x)^2}{2!} + \frac{(2x)^4}{4!} - \frac{(2x)^6}{6!} + \dots$
$\cos(2x) = 1 - \frac{4x^2}{2} + \frac{16x^4}{24} - \frac{64x^6}{720} + \dots$
$\cos(2x) = 1 - 2x^2 + \frac{2}{3}x^4 - \frac{4}{45}x^6 + \dots$

The first three non-zero terms are $1$, $-2x^2$, and $\frac{2}{3}x^4$.

**Question 4 (Problem Solving):**
A physical system's response is approximated by $y(t) = 5e^{-0.5t} \sin(\pi t)$. For small values of $t$, approximate $y(t)$ using the first two terms of the Maclaurin series for each component.

**Answer:**
We need the Maclaurin series for $e^{-0.5t}$ and $\sin(\pi t)$.

For $e^u$, the series is $1 + u + \frac{u^2}{2!} + \dots$.
Substituting $u = -0.5t$:
$e^{-0.5t} \approx 1 + (-0.5t) = 1 - 0.5t$ (using the first two terms).

For $\sin(v)$, the series is $v - \frac{v^3}{3!} + \dots$.
Substituting $v = \pi t$:
$\sin(\pi t) \approx \pi t$ (using the first term, as it's the first non-zero term).

Now, multiply the approximations for $y(t)$:
$y(t) \approx 5 \times (1 - 0.5t) \times (\pi t)$
$y(t) \approx 5\pi t (1 - 0.5t)$
$y(t) \approx 5\pi t - 2.5\pi t^2$

This is the approximation of $y(t)$ for small $t$ using the first two terms of $e^{-0.5t}$ and the first term of $\sin(\pi t)$.

**Question 5 (Advanced Manipulation):**
Find the Maclaurin series for $\int_0^x \frac{\sin(t)}{t} dt$.

**Answer:**
First, find the Maclaurin series for $\frac{\sin(t)}{t}$.
We know $\sin(t) = t - \frac{t^3}{3!} + \frac{t^5}{5!} - \frac{t^7}{7!} + \dots$
So, $\frac{\sin(t)}{t} = \frac{1}{t} \left( t - \frac{t^3}{3!} + \frac{t^5}{5!} - \frac{t^7}{7!} + \dots \right)$
$\frac{\sin(t)}{t} = 1 - \frac{t^2}{3!} + \frac{t^4}{5!} - \frac{t^6}{7!} + \dots$
(Note: The singularity at $t=0$ for $\frac{\sin(t)}{t}$ is removable, and its limit is 1, which is consistent with the series starting with 1).

Now, integrate this series term by term from $0$ to $x$:
$\int_0^x \frac{\sin(t)}{t} dt = \int_0^x \left( 1 - \frac{t^2}{3!} + \frac{t^4}{5!} - \frac{t^6}{7!} + \dots \right) dt$
$= \left[ t - \frac{t^3}{3 \cdot 3!} + \frac{t^5}{5 \cdot 5!} - \frac{t^7}{7 \cdot 7!} + \dots \right]_0^x$
$= \left( x - \frac{x^3}{3 \cdot 3!} + \frac{x^5}{5 \cdot 5!} - \frac{x^7}{7 \cdot 7!} + \dots \right) - (0 - 0 + 0 - \dots)$
$= x - \frac{x^3}{18} + \frac{x^5}{600} - \frac{x^7}{35280} + \dots$

In summation notation, this is $\sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)(2n+1)!}$.
This series defines the Sine Integral function, Si(x).

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
