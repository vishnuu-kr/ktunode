---
title: "Fourier series of 2 π periodic functions"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND 
PHYSICAL  SCIENCE - 1"
module: "Module 4: Taylor series representation (without proof, assuming the possibility of power series expansion in appropriate domains)"
branch: "Civil Engineering"
semester: 1
topicId: "68b54565d74ec52cc09129f0"
status: "completed"
scrapedAt: "2026-05-20T18:31:11.526Z"
---
# Mathematics for Electrical Science and Physical Science - 1

## Module 4: Taylor Series Representation

### Topic: Fourier Series of 2π Periodic Functions

Welcome, everyone! In this module, we've been exploring the power of representing functions using series expansions. We've seen how Taylor series allow us to approximate functions around a specific point using polynomials. Today, we're going to shift our focus to a different, equally powerful tool for function representation: the **Fourier series**. This will directly help us achieve **Course Outcome 4 (CO4)**: "Determine the Taylor series and evaluate Fourier series expansion for different periodic functions." Understanding Fourier series is absolutely fundamental for electrical engineers, especially when dealing with signals that repeat themselves – think of alternating current (AC) voltage, sound waves, or even periodic light signals.

The core idea behind Fourier series, as you'll find discussed in great detail in Kreyszig's *Advanced Engineering Mathematics* and Bird's *Higher Engineering Mathematics*, is that **many periodic functions can be represented as an infinite sum of sines and cosines**. Isn't that fascinating? A complex, repeating waveform can be broken down into a combination of the simplest, most fundamental periodic waveforms.

### 1. What are Periodic Functions?

Before we dive into the series itself, let's quickly recap what a periodic function is. A function $f(x)$ is periodic with **period $T$** if $f(x+T) = f(x)$ for all $x$ in the domain of $f$. The smallest positive value of $T$ for which this holds is called the **fundamental period**.

For our discussion today, we'll focus on functions that are **2π-periodic**, meaning their fundamental period is $T = 2\pi$. This is a common and convenient choice for mathematical analysis because it simplifies the integration limits. Think of a simple sine wave, $\sin(x)$. Its period is $2\pi$. If we shift it by $2\pi$, we get the exact same wave. This is the kind of behavior we'll be analyzing.

### 2. The General Idea: Decomposing into Sines and Cosines

Imagine you have a complex musical chord. A Fourier series is like having the ability to identify all the individual notes (sines and cosines of different frequencies and amplitudes) that make up that chord.

The Fourier series representation of a $2\pi$-periodic function $f(x)$ is given by:

$$ f(x) \sim a_0 + \sum_{n=1}^{\infty} (a_n \cos(nx) + b_n \sin(nx)) $$

This might look a bit intimidating at first, but let's break it down:

*   **$a_0$**: This is the **constant term** or the **DC component** of the signal. It represents the average value of the function over one period. In electrical terms, it’s the steady, non-varying part of a signal.
*   **$a_n \cos(nx)$**: These are the **cosine terms**. Each term represents a cosine wave of frequency $nx$ (where $n$ is an integer, $1, 2, 3, \ldots$) with an amplitude $a_n$.
*   **$b_n \sin(nx)$**: These are the **sine terms**. Similarly, each term represents a sine wave of frequency $nx$ with an amplitude $b_n$.

The "$\sim$" symbol is used to indicate that this is the representation, and under certain conditions (which we'll assume are met, as stated in our module description), this series will indeed converge to $f(x)$.

The core challenge, then, is to figure out these coefficients: $a_0$, $a_n$, and $b_n$. How do we find out how much of each sine and cosine wave is "in" our original function $f(x)$? This is where the beauty of integration comes in, leveraging the orthogonal properties of sines and cosines.

### 3. Calculating the Fourier Coefficients

The process of finding these coefficients is remarkably elegant. We assume that our function $f(x)$ can be represented by the series, and then we use integration to extract the amplitude of each component. This relies on the fact that sines and cosines of different integer frequencies are **orthogonal** over the interval $[-\pi, \pi]$ (or $[0, 2\pi]$).

Think of orthogonality like this: if you try to "project" a sine wave of frequency 2 onto a cosine wave of frequency 3, you get zero. They are completely unrelated in a specific mathematical sense. This property allows us to isolate each coefficient.

Let's look at the formulas for the coefficients for a $2\pi$-periodic function $f(x)$:

**The constant term $a_0$:**

This is simply the average value of the function over one period.
$$ a_0 = \frac{1}{2\pi} \int_{-\pi}^{\pi} f(x) \, dx $$

**The cosine coefficients $a_n$ (for $n = 1, 2, 3, \ldots$):**

To find $a_n$, we essentially "multiply" $f(x)$ by $\cos(nx)$ and integrate. Because of orthogonality, all terms in the Fourier series *except* the $a_n \cos(nx)$ term will integrate to zero when multiplied by $\cos(nx)$ and integrated over $[-\pi, \pi]$.
$$ a_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \cos(nx) \, dx $$

**The sine coefficients $b_n$ (for $n = 1, 2, 3, \ldots$):**

Similarly, to find $b_n$, we multiply $f(x)$ by $\sin(nx)$ and integrate.
$$ b_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \sin(nx) \, dx $$

**Important Note on Integrals:** You might notice the interval is from $-\pi$ to $\pi$. This is a common choice, but you can also use $[0, 2\pi]$ since the function is periodic. For $2\pi$-periodic functions, $\int_{-\pi}^{\pi} g(x) \, dx = \int_{0}^{2\pi} g(x) \, dx$ for any integrable function $g(x)$.

These formulas are crucial and you'll be using them frequently. They are often found in tables and will be essential for your coursework and exams (directly related to CO4).

### 4. Properties of Functions and Their Fourier Coefficients

The nature of the function $f(x)$ itself can tell us a lot about its Fourier coefficients, simplifying calculations.

*   **Even Functions:** If $f(x)$ is an **even function** (meaning $f(-x) = f(x)$), its Fourier series will only contain cosine terms (and the constant term $a_0$). This is because the product of an even function and a sine (an odd function) is an odd function, and the integral of an odd function over a symmetric interval like $[-\pi, \pi]$ is zero.
    *   So, if $f(x)$ is even, then $b_n = 0$ for all $n$.
    *   The formulas simplify:
        $$ a_0 = \frac{1}{\pi} \int_{0}^{\pi} f(x) \, dx $$
        $$ a_n = \frac{2}{\pi} \int_{0}^{\pi} f(x) \cos(nx) \, dx $$
        $$ b_n = 0 $$
*   **Odd Functions:** If $f(x)$ is an **odd function** (meaning $f(-x) = -f(x)$), its Fourier series will only contain sine terms. The product of an odd function and a cosine (an even function) is an odd function, which integrates to zero over $[-\pi, \pi]$.
    *   So, if $f(x)$ is odd, then $a_n = 0$ for all $n$.
    *   The formulas simplify:
        $$ a_0 = 0 $$
        $$ a_n = 0 $$
        $$ b_n = \frac{2}{\pi} \int_{0}^{\pi} f(x) \sin(nx) \, dx $$

Recognizing symmetry can save you a lot of work! Always check if your function is even or odd. This is a common exam tip.

### 5. Example: The Square Wave

Let's work through a classic example: the square wave. Imagine a signal that's $+1$ for $0 < x < \pi$ and $-1$ for $-\pi < x < 0$. This function is periodic with period $2\pi$.

Let $f(x) = \begin{cases} 1 & \text{if } 0 < x < \pi \\ -1 & \text{if } -\pi < x < 0 \end{cases}$, and $f(x+2\pi) = f(x)$.

**Step 1: Check for symmetry.**
Let's check $f(-x)$.
If $x$ is in $(0, \pi)$, then $-x$ is in $(-\pi, 0)$.
$f(-x) = -1$.
And $f(x) = 1$.
So, $f(-x) = -f(x)$. This means $f(x)$ is an **odd function**.

**Step 2: Apply simplified formulas for odd functions.**
Since $f(x)$ is odd, we know $a_0 = 0$ and $a_n = 0$ for all $n \geq 1$. We only need to calculate $b_n$.

The formula for $b_n$ for an odd function is:
$$ b_n = \frac{2}{\pi} \int_{0}^{\pi} f(x) \sin(nx) \, dx $$

In the interval $(0, \pi)$, $f(x) = 1$. So:
$$ b_n = \frac{2}{\pi} \int_{0}^{\pi} (1) \sin(nx) \, dx $$
$$ b_n = \frac{2}{\pi} \left[ -\frac{\cos(nx)}{n} \right]_{0}^{\pi} $$
$$ b_n = \frac{2}{\pi n} \left[ -\cos(n\pi) - (-\cos(0)) \right] $$
$$ b_n = \frac{2}{\pi n} \left[ -\cos(n\pi) + 1 \right] $$

Now, let's evaluate $\cos(n\pi)$:
*   If $n$ is even, $n=2k$, then $\cos(n\pi) = \cos(2k\pi) = 1$.
*   If $n$ is odd, $n=2k+1$, then $\cos(n\pi) = \cos((2k+1)\pi) = -1$.

Let's substitute this back into the $b_n$ formula:

*   **If $n$ is even:** $b_n = \frac{2}{\pi n} [-1 + 1] = 0$.
*   **If $n$ is odd:** $b_n = \frac{2}{\pi n} [-(-1) + 1] = \frac{2}{\pi n} [1 + 1] = \frac{4}{\pi n}$.

So, the Fourier series for this square wave is:
$$ f(x) \sim \sum_{n \text{ odd}}^{\infty} \frac{4}{\pi n} \sin(nx) $$
$$ f(x) \sim \frac{4}{\pi} \left( \sin(x) + \frac{1}{3}\sin(3x) + \frac{1}{5}\sin(5x) + \ldots \right) $$

This is a beautiful result! It tells us that this square wave can be perfectly constructed by adding together infinitely many sine waves with odd frequencies, where the amplitude of the $n$-th sine wave decreases as $1/n$. This is directly demonstrating **CO4**.

### 6. Convergence and Properties (Briefly)

The question of *when* this series actually equals $f(x)$ is about **convergence**. For functions that are "well-behaved" – specifically, piecewise continuous and having a finite number of discontinuities and extrema in each period (conditions often met by functions encountered in electrical science) – the Fourier series converges to $f(x)$ at points where $f(x)$ is continuous. At points of discontinuity, the series converges to the **average of the left-hand and right-hand limits**. This is known as **Dirichlet's conditions**, a concept elaborated in texts like Thomas' Calculus and Stewart's *Essential Calculus*.

For our square wave example, at $x=0$, the function jumps from $-1$ to $+1$. The left-hand limit is $-1$ and the right-hand limit is $+1$. The average is $(-1+1)/2 = 0$. So, the Fourier series converges to $0$ at $x=0$.

### 7. Relating to Taylor Series and Other Concepts

You might be wondering how this ties back to Taylor series. While Taylor series expand a function around a *point* using powers of $x$, Fourier series expand a *periodic* function over an *interval* using sines and cosines. They are different tools for different jobs, but both are essential for function approximation and analysis.

For instance, in electrical circuits, if you have a non-sinusoidal periodic voltage, you can represent it with a Fourier series. Each term in the series, $a_n \cos(nx) + b_n \sin(nx)$, represents a sinusoidal voltage source. You can then analyze the circuit's response to each sinusoidal component separately (using phasors or complex impedance) and sum the responses. This is a core technique in AC circuit analysis. The decomposition into sines and cosines aligns with how engineers often think about signals in the frequency domain, a concept explored further in "Signals and Systems" by Haykin and Van Veen.

The coefficients $a_n$ and $b_n$ are also related to the concept of **orthogonality**, which is a fundamental idea in linear algebra (as covered in Anton and Rorres' *Elementary Linear Algebra*). Just as vectors can be decomposed into orthogonal basis vectors (like the standard $\mathbf{i}, \mathbf{j}, \mathbf{k}$ unit vectors), functions can be decomposed into orthogonal "basis functions" – the sines and cosines in the case of Fourier series.

### 8. Summary for Exams and Quick Recall

*   **What is a Fourier Series?** A representation of a periodic function as an infinite sum of sines and cosines.
*   **For what functions?** Primarily $2\pi$-periodic functions for this topic.
*   **The Formula:** $f(x) \sim a_0 + \sum_{n=1}^{\infty} (a_n \cos(nx) + b_n \sin(nx))$
*   **The Coefficients (The key!):**
    *   $a_0 = \frac{1}{2\pi} \int_{-\pi}^{\pi} f(x) \, dx$
    *   $a_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \cos(nx) \, dx$
    *   $b_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \sin(nx) \, dx$
*   **Symmetry is your friend:**
    *   Even function ($f(-x)=f(x)$) $\implies b_n=0$. Integrate from $0$ to $\pi$ and multiply by 2 for $a_n$.
    *   Odd function ($f(-x)=-f(x)$) $\implies a_n=0$. Integrate from $0$ to $\pi$ and multiply by 2 for $b_n$.
*   **Convergence:** At discontinuities, the series averages the left/right limits.

Remember to always check for symmetry first, as it can dramatically simplify your calculations.

---

### Sample Questions with Answers

**Question 1 (Conceptual Understanding - CO4):**
What is the fundamental idea behind representing a periodic function using a Fourier series?

**Answer:**
The fundamental idea is that any sufficiently well-behaved periodic function can be expressed as an infinite sum of simple sine and cosine waves of different frequencies and amplitudes. It's like decomposing a complex sound into its constituent pure musical tones. This allows us to analyze and understand periodic signals by breaking them down into simpler, manageable sinusoidal components.

---

**Question 2 (Calculation - CO4):**
Find the Fourier series for the function $f(x) = x$ for $-\pi < x < \pi$, and $f(x+2\pi) = f(x)$.

**Answer:**

1.  **Check Symmetry:**
    $f(-x) = -x$. Since $f(-x) = -f(x)$, the function $f(x) = x$ is an **odd function**.

2.  **Apply Odd Function Properties:**
    For an odd function, $a_0 = 0$ and $a_n = 0$ for all $n \geq 1$. We only need to calculate $b_n$.

3.  **Calculate $b_n$:**
    The formula for $b_n$ for an odd function is $b_n = \frac{2}{\pi} \int_{0}^{\pi} f(x) \sin(nx) \, dx$.
    Here, $f(x) = x$ in $(0, \pi)$:
    $$ b_n = \frac{2}{\pi} \int_{0}^{\pi} x \sin(nx) \, dx $$
    We use integration by parts: $\int u \, dv = uv - \int v \, du$.
    Let $u = x$ and $dv = \sin(nx) \, dx$.
    Then $du = dx$ and $v = -\frac{\cos(nx)}{n}$.

    $$ b_n = \frac{2}{\pi} \left[ x \left(-\frac{\cos(nx)}{n}\right) \right]_{0}^{\pi} - \frac{2}{\pi} \int_{0}^{\pi} \left(-\frac{\cos(nx)}{n}\right) \, dx $$
    $$ b_n = \frac{2}{\pi} \left[ -\frac{x \cos(nx)}{n} \right]_{0}^{\pi} + \frac{2}{\pi n} \int_{0}^{\pi} \cos(nx) \, dx $$

    Evaluate the first part:
    $$ \left[ -\frac{x \cos(nx)}{n} \right]_{0}^{\pi} = \left(-\frac{\pi \cos(n\pi)}{n}\right) - \left(-\frac{0 \cos(0)}{n}\right) = -\frac{\pi \cos(n\pi)}{n} $$

    Evaluate the integral in the second part:
    $$ \int_{0}^{\pi} \cos(nx) \, dx = \left[ \frac{\sin(nx)}{n} \right]_{0}^{\pi} = \frac{\sin(n\pi)}{n} - \frac{\sin(0)}{n} = 0 - 0 = 0 $$

    Substitute back into the $b_n$ formula:
    $$ b_n = \frac{2}{\pi} \left( -\frac{\pi \cos(n\pi)}{n} \right) + \frac{2}{\pi n} (0) $$
    $$ b_n = -\frac{2 \cos(n\pi)}{n} $$

    Now, recall $\cos(n\pi) = (-1)^n$:
    $$ b_n = -\frac{2 (-1)^n}{n} = \frac{2 (-1)^{n+1}}{n} $$

4.  **Write the Fourier Series:**
    Since $a_0=0$ and $a_n=0$, the Fourier series is:
    $$ f(x) \sim \sum_{n=1}^{\infty} b_n \sin(nx) = \sum_{n=1}^{\infty} \frac{2 (-1)^{n+1}}{n} \sin(nx) $$
    $$ f(x) \sim 2 \left( \sin(x) - \frac{\sin(2x)}{2} + \frac{\sin(3x)}{3} - \frac{\sin(4x)}{4} + \ldots \right) $$
    This is the Fourier series for a sawtooth wave.

---

**Question 3 (Property Application - CO4):**
Consider a function $f(x)$ defined as $f(x) = \pi - x$ for $0 \le x \le 2\pi$, and periodic with period $2\pi$. Is this function even or odd? What can you say about its Fourier coefficients $a_n$ and $b_n$?

**Answer:**

1.  **Check Symmetry:**
    Let's check $f(-x)$. We need to relate $f(-x)$ to $f(x)$. Since the function is defined for $0 \le x \le 2\pi$, it's easier to consider the behavior over the interval $[-\pi, \pi]$ for symmetry checks, or to analyze its properties directly.
    Let's define $f(x)$ over $[-\pi, \pi]$ by considering the periodicity.
    For $-\pi \le x < 0$, we can write $x = y - 2\pi$ where $0 < y \le \pi$.
    So $f(x) = f(y-2\pi) = f(y) = \pi - y$.
    Substituting $y = x+2\pi$: $f(x) = \pi - (x+2\pi) = -x - \pi$ for $-\pi \le x < 0$.

    Now, consider $f(-x)$ for $x \in (-\pi, 0)$. Then $-x \in (0, \pi)$.
    $f(-x) = \pi - (-x) = \pi + x$.
    And $f(x) = -x - \pi$ for $x \in (-\pi, 0)$.
    $f(-x) = \pi + x$ and $-f(x) = -(-x-\pi) = x+\pi$.
    So $f(-x) = -f(x)$ for $x \in (-\pi, 0)$. This indicates an odd function behavior in this range.

    Let's check for $x \in (0, \pi)$. Then $-x \in (-\pi, 0)$.
    $f(x) = \pi - x$.
    $f(-x) = -(-x) - \pi = x - \pi$.
    And $-f(x) = -(\pi - x) = x - \pi$.
    So $f(-x) = -f(x)$ for $x \in (0, \pi)$ as well.

    Therefore, the function $f(x) = x-\pi$ for $-\pi < x < \pi$ (which is equivalent to $\pi-x$ over $0 \le x \le 2\pi$ after shifting and redefining) is an **odd function**.

2.  **Properties of Fourier Coefficients:**
    Since $f(x)$ is an odd function, its Fourier series will only contain sine terms.
    This means:
    *   $a_0 = 0$
    *   $a_n = 0$ for all $n \ge 1$.

    We would only need to calculate the $b_n$ coefficients using the formula for odd functions.
    Using $f(x) = \pi - x$ for $0 \le x \le \pi$ for the $b_n$ calculation:
    $b_n = \frac{2}{\pi} \int_{0}^{\pi} (\pi-x) \sin(nx) \, dx$.

    This question tests the understanding of symmetry properties impacting the Fourier coefficients, which is directly aligned with **CO4**.
