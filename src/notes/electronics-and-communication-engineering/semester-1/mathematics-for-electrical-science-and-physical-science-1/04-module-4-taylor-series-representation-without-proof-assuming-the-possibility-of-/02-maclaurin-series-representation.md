---
title: "Maclaurin series representation"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL 
SCIENCE - 1"
module: "Module 4: Taylor series representation (without proof, assuming the possibility of power series expansion in appropriate domains)"
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc8f20463779487d9fd0"
status: "completed"
scrapedAt: "2026-05-23T17:35:09.767Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 1

## Module 4: Taylor Series Representation (Overview)

Welcome to Module 4! In this module, we're diving into the fascinating world of **Taylor Series Representation**. This is a cornerstone concept in mathematics, especially crucial for electrical and physical sciences. Why? Because it allows us to approximate very complex functions using simpler, manageable polynomial expressions. Think of it as a powerful tool for "smoothing out" and understanding the behavior of functions, particularly around a specific point. We'll be focusing on a special, very useful case: the **Maclaurin Series Representation**.

**How does this connect to our Course Outcomes?**

You'll see how this topic directly helps us achieve **CO4: Determine the Taylor series and evaluate Fourier series expansion for different periodic functions.** While Fourier series deal with periodic functions using sines and cosines, Taylor series (and thus Maclaurin series) allow us to represent *any* sufficiently smooth function as an infinite sum of terms involving its derivatives at a single point. This is incredibly useful for analysis and approximation in various engineering contexts.

---

## Maclaurin Series Representation

### 1. The Big Idea: Approximating Functions with Polynomials

Imagine you have a complicated function, say, $f(x) = e^{\sin(x)}$. This function might be difficult to work with directly in many calculations. What if we could represent it, at least near a specific point, using a simple polynomial like $ax^2 + bx + c$? That's precisely what Taylor series allow us to do.

A **Taylor series** of a function $f(x)$ expanded about a point $x=a$ is a way to express $f(x)$ as an infinite sum of terms. Each term is calculated from the values of the derivatives of $f$ at that single point $a$. The idea is that if we know the function's value and how its slope, curvature, and higher-order "bends" behave at a specific point, we can build a polynomial that mimics the function's behavior in the vicinity of that point.

### 2. The Special Case: The Maclaurin Series

When we choose the point of expansion to be $a=0$, the Taylor series gets a special, very common name: the **Maclaurin Series**. It's named after the Scottish mathematician Colin Maclaurin.

**The General Maclaurin Series Formula:**

For a function $f(x)$ that can be represented by a power series in an interval containing 0, its Maclaurin series is given by:

$f(x) = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + \frac{f^{(4)}(0)}{4!}x^4 + \cdots$

This can be written more compactly using summation notation:

$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!}x^n$

where:
*   $f^{(n)}(0)$ represents the $n$-th derivative of $f(x)$ evaluated at $x=0$.
*   $n!$ is the factorial of $n$ (e.g., $0! = 1$, $1! = 1$, $2! = 2$, $3! = 6$, etc.).

**Key Ingredients for a Maclaurin Series:**

To build a Maclaurin series for a function $f(x)$, we need to be able to find:
1.  The value of the function at $x=0$, i.e., $f(0)$.
2.  The values of its first derivative at $x=0$, i.e., $f'(0)$.
3.  The values of its second derivative at $x=0$, i.e., $f''(0)$.
4.  And so on, for as many derivatives as needed to see a pattern or to achieve the desired level of approximation.

**Why is this important?** Many fundamental functions in engineering and physics (like $e^x$, $\sin x$, $\cos x$, $\ln(1+x)$) have well-known and incredibly useful Maclaurin series. Knowing these allows us to approximate their behavior or even perform calculations that would be intractable otherwise.

### 3. Building a Maclaurin Series: Step-by-Step

Let's walk through the process with an example. Suppose we want to find the Maclaurin series for $f(x) = e^x$.

**Step 1: Find the function and its derivatives.**
$f(x) = e^x$
$f'(x) = e^x$
$f''(x) = e^x$
$f'''(x) = e^x$
... and you guessed it, every higher derivative is also $e^x$.

**Step 2: Evaluate the function and its derivatives at $x=0$.**
$f(0) = e^0 = 1$
$f'(0) = e^0 = 1$
$f''(0) = e^0 = 1$
$f'''(0) = e^0 = 1$
... all derivatives evaluated at 0 are 1.

**Step 3: Substitute these values into the Maclaurin series formula.**

$f(x) = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + \cdots$

$e^x = 1 + (1)x + \frac{1}{2!}x^2 + \frac{1}{3!}x^3 + \frac{1}{4!}x^4 + \cdots$

So, the Maclaurin series for $e^x$ is:

$e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + \cdots = \sum_{n=0}^{\infty} \frac{x^n}{n!}$

**Remember this:** This series for $e^x$ is fundamental and appears everywhere. It converges for all values of $x$.

**Visualizing the Approximation:**
Think about approximating the curve of $y=e^x$.
*   The first term, $f(0) = 1$, gives us a horizontal line at $y=1$. This is a very crude approximation.
*   Adding the second term, $f'(0)x = 1x = x$, gives us the line $y=1+x$. This is the tangent line to $e^x$ at $x=0$. It's a better approximation, capturing the function's value and slope at $x=0$.
*   Adding the third term, $\frac{f''(0)}{2!}x^2 = \frac{1}{2}x^2$, gives us a parabola $y=1+x+\frac{x^2}{2}$. This parabola starts to capture the curvature of $e^x$ at $x=0$.
As we add more terms, the polynomial gets "wigglier" and more accurately matches the $e^x$ curve around $x=0$.

### 4. Common and Important Maclaurin Series

Many standard functions have well-established Maclaurin series that you should recognize. These are invaluable for solving problems and for understanding the behavior of systems. As per Kreyszig's "Advanced Engineering Mathematics" and Anton's "Calculus," these are foundational.

*   **Exponential Function:**
    $e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + \cdots = \sum_{n=0}^{\infty} \frac{x^n}{n!}$
    (Converges for all $x$)

*   **Sine Function:**
    Let's derive this one briefly to see the process. $f(x) = \sin x$.
    $f(0) = \sin(0) = 0$
    $f'(x) = \cos x \implies f'(0) = \cos(0) = 1$
    $f''(x) = -\sin x \implies f''(0) = -\sin(0) = 0$
    $f'''(x) = -\cos x \implies f'''(0) = -\cos(0) = -1$
    $f^{(4)}(x) = \sin x \implies f^{(4)}(0) = \sin(0) = 0$
    The pattern of derivatives at 0 is $0, 1, 0, -1, 0, 1, 0, -1, \ldots$.
    $\sin x = 0 + 1x + \frac{0}{2!}x^2 + \frac{-1}{3!}x^3 + \frac{0}{4!}x^4 + \frac{1}{5!}x^5 + \cdots$
    $\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \cdots = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!}$
    (Converges for all $x$)
    *Note:* Only odd powers of $x$ appear.

*   **Cosine Function:**
    Similarly, for $f(x) = \cos x$.
    $f(0) = \cos(0) = 1$
    $f'(x) = -\sin x \implies f'(0) = -\sin(0) = 0$
    $f''(x) = -\cos x \implies f''(0) = -\cos(0) = -1$
    $f'''(x) = \sin x \implies f'''(0) = \sin(0) = 0$
    $f^{(4)}(x) = \cos x \implies f^{(4)}(0) = \cos(0) = 1$
    The pattern of derivatives at 0 is $1, 0, -1, 0, 1, 0, -1, 0, \ldots$.
    $\cos x = 1 + 0x + \frac{-1}{2!}x^2 + \frac{0}{3!}x^3 + \frac{1}{4!}x^4 + \cdots$
    $\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \cdots = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!}$
    (Converges for all $x$)
    *Note:* Only even powers of $x$ appear.

*   **Logarithmic Function:**
    $f(x) = \ln(1+x)$
    $f(0) = \ln(1) = 0$
    $f'(x) = \frac{1}{1+x} = (1+x)^{-1} \implies f'(0) = 1$
    $f''(x) = -1(1+x)^{-2} \implies f''(0) = -1$
    $f'''(x) = (-1)(-2)(1+x)^{-3} = 2(1+x)^{-3} \implies f'''(0) = 2$
    $f^{(4)}(x) = 2(-3)(1+x)^{-4} = -6(1+x)^{-4} \implies f^{(4)}(0) = -6$
    The pattern of derivatives at 0 is $0, 1, -1, 2, -6, 24, \ldots$.
    Notice that $f^{(n)}(0) = (-1)^{n-1} (n-1)!$ for $n \ge 1$.
    $\ln(1+x) = 0 + 1x + \frac{-1}{2!}x^2 + \frac{2}{3!}x^3 + \frac{-6}{4!}x^4 + \cdots$
    $\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \cdots = \sum_{n=1}^{\infty} \frac{(-1)^{n-1} x^n}{n}$
    (Converges for $-1 < x \le 1$)
    *Important Pitfall:* Be careful with the domain of convergence here! This series does not converge for all $x$.

*   **Binomial Series:**
    This is a generalization for $(1+x)^k$ where $k$ can be any real number.
    $(1+x)^k = 1 + kx + \frac{k(k-1)}{2!}x^2 + \frac{k(k-1)(k-2)}{3!}x^3 + \cdots = \sum_{n=0}^{\infty} \binom{k}{n} x^n$
    where $\binom{k}{n} = \frac{k(k-1)\cdots(k-n+1)}{n!}$.
    *   If $k$ is a non-negative integer, this series is finite and exact (it's the binomial theorem).
    *   If $k$ is not a non-negative integer, this is an infinite series that converges for $|x| < 1$.
    *   Special cases:
        *   $k=1$: $(1+x)^1 = 1+x$ (trivial).
        *   $k=-1$: $(1+x)^{-1} = 1 - x + x^2 - x^3 + \cdots = \sum_{n=0}^{\infty} (-1)^n x^n$ (geometric series, converges for $|x|<1$).
        *   $k=1/2$: $\sqrt{1+x} = 1 + \frac{1}{2}x - \frac{1}{8}x^2 + \frac{1}{16}x^3 - \cdots$

### 5. Using Maclaurin Series for Approximations and Calculations

The real power of Maclaurin series lies in their ability to approximate complex functions with polynomials. This is incredibly useful in electrical and physical sciences for several reasons:

*   **Simplification:** Polynomials are easy to differentiate, integrate, and evaluate.
*   **Behavior Analysis:** The first few terms of a series can tell us a lot about how a function behaves near a point. For example, the $x$ term tells us about the slope, the $x^2$ term tells us about curvature.
*   **Numerical Methods:** Many numerical algorithms rely on approximating functions with polynomials.
*   **Solving Differential Equations:** As hinted at in CO2 and CO3, understanding series is crucial for solving certain types of differential equations that don't have simple closed-form solutions.

**Example: Approximating $\sin(0.1)$**

We know the Maclaurin series for $\sin x$:
$\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots$

Let's approximate $\sin(0.1)$ using the first few terms. Here, $x=0.1$.

*   **Using 1 term:** $\sin(0.1) \approx 0.1$
*   **Using 3 terms:** $\sin(0.1) \approx 0.1 - \frac{(0.1)^3}{3!} = 0.1 - \frac{0.001}{6} = 0.1 - 0.0001666\ldots \approx 0.0998334$
*   **Using 5 terms:** $\sin(0.1) \approx 0.1 - \frac{(0.1)^3}{6} + \frac{(0.1)^5}{120} = 0.0998334 + \frac{0.00001}{120} \approx 0.0998334 + 0.0000000833\ldots \approx 0.0998334833$

The actual value of $\sin(0.1)$ is approximately $0.0998334166$. You can see how quickly the approximation improves as we add more terms, especially when $x$ is small. This is a hallmark of convergent series! This ability to get a good approximation for small values of $x$ is a key takeaway.

**Analogy:** Imagine you're trying to describe the shape of a tiny section of a very bumpy road. You could try to describe every single bump, which is hard. Or, you could say, "Well, at this spot, it's pretty flat (the constant term), then it slopes up a bit (the $x$ term), and it curves upwards slightly (the $x^2$ term)." The more you describe the slope, curvature, and how those change, the better your description of that tiny road segment becomes.

### 6. Why Power Series?

The problem statement mentions assuming the possibility of power series expansion. This is important because not all functions can be represented by a power series around a point. A function must be "sufficiently smooth" – meaning it must have derivatives of all orders at that point. For the functions we typically encounter in introductory electrical and physical sciences (like polynomials, exponentials, sines, cosines, logarithms), this assumption usually holds true in certain domains.

The convergence of these series is also a critical aspect. For example, the Maclaurin series for $\ln(1+x)$ only works for $|x|<1$. If you need to approximate $\ln(2)$, you can't directly plug in $x=1$. You might need to use a Taylor series expansion around a different point, or perhaps a different approach. This is where radius of convergence comes into play, a topic you'll explore further if you continue in mathematics. For this course, focus on recognizing the common series and their domains.

### 7. Connection to Engineering Applications

*   **Signal Processing:** Approximating signals using series (Fourier or Taylor/Maclaurin) is fundamental. For instance, approximating the response of a system to a sudden change using the initial terms of its Maclaurin series.
*   **Control Systems:** Understanding system behavior often involves approximating nonlinear functions with polynomials using Taylor series expansions around operating points.
*   **Quantum Mechanics/Physics:** Many physical phenomena are described by differential equations, and their solutions are often found or approximated using series methods. For example, the wave function of a particle might be represented by a series.
*   **Circuit Analysis:** Analyzing circuits with nonlinear components (like diodes) often involves linearizing them using Taylor series expansions around an equilibrium point.

---

### Summary and Key Takeaways

*   **Maclaurin Series** is a special case of Taylor series expanded around $a=0$.
*   It allows us to represent a function $f(x)$ as an infinite polynomial: $f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!}x^n$.
*   To construct it, you need to find the function's derivatives and evaluate them at $x=0$.
*   Recognize the standard Maclaurin series for $e^x$, $\sin x$, $\cos x$, $\ln(1+x)$, and $(1+x)^k$.
*   These series are powerful tools for **approximation**, especially for small values of $x$.
*   Be aware of the **domain of convergence** for each series.

---

## Sample Questions and Answers

**1. Conceptual Question:**
**Question:** Explain why understanding Maclaurin series is useful for electrical engineers, even though they represent infinite sums.

**Answer:** Maclaurin series are useful because they allow engineers to approximate complex functions with simple polynomials. This is crucial for:
    a) **Simplification:** Polynomials are easy to differentiate, integrate, and analyze, which simplifies many calculations in circuit analysis, signal processing, and control systems.
    b) **Behavioral Insight:** The initial terms of the series reveal local behavior (value, slope, curvature) of the function, aiding in understanding system responses under specific conditions.
    c) **Numerical Analysis:** Many computational methods rely on polynomial approximations derived from series expansions.
    d) **Linearization:** In systems with nonlinear components, Taylor series allow linearization around an operating point, enabling analysis using linear methods.

**2. Application Question:**
**Question:** Find the first four non-zero terms of the Maclaurin series for $f(x) = \cos(2x)$.

**Answer:**
We know the Maclaurin series for $\cos u$:
$\cos u = 1 - \frac{u^2}{2!} + \frac{u^4}{4!} - \frac{u^6}{6!} + \cdots$

In this case, $u = 2x$. Substitute $2x$ for $u$:
$\cos(2x) = 1 - \frac{(2x)^2}{2!} + \frac{(2x)^4}{4!} - \frac{(2x)^6}{6!} + \cdots$

Now, simplify the terms:
$(2x)^2 = 4x^2$
$(2x)^4 = 16x^4$
$(2x)^6 = 64x^6$

And the factorials:
$2! = 2$
$4! = 24$
$6! = 720$

Substitute these back into the series:
$\cos(2x) = 1 - \frac{4x^2}{2} + \frac{16x^4}{24} - \frac{64x^6}{720} + \cdots$

Simplify the coefficients:
$\cos(2x) = 1 - 2x^2 + \frac{2}{3}x^4 - \frac{4}{45}x^6 + \cdots$

The first four non-zero terms of the Maclaurin series for $\cos(2x)$ are $1, -2x^2, \frac{2}{3}x^4, -\frac{4}{45}x^6$.

**3. Conceptual/Application Question:**
**Question:** Use the Maclaurin series for $e^x$ to approximate the value of $e^{0.2}$. How many terms are needed for an accuracy of at least $0.0001$?

**Answer:**
The Maclaurin series for $e^x$ is:
$e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + \cdots$

For $x = 0.2$:
$e^{0.2} = 1 + 0.2 + \frac{(0.2)^2}{2} + \frac{(0.2)^3}{6} + \frac{(0.2)^4}{24} + \cdots$

Let's calculate term by term and check the error (which is bounded by the magnitude of the next term for alternating series, but for $e^x$ it's more about the remainder term). For $e^x$, the remainder after $n+1$ terms is $\frac{f^{(n+1)}(c)}{(n+1)!}x^{n+1}$ for some $c$ between 0 and $x$. A simpler approach for error estimation here is to look at the magnitude of the terms being added.

*   **Term 1 (constant):** $1$
    Approximation: $1$
    Error (next term magnitude): $0.2$

*   **Term 2 (linear):** $0.2$
    Approximation: $1 + 0.2 = 1.2$
    Error (next term magnitude): $\frac{(0.2)^2}{2} = \frac{0.04}{2} = 0.02$

*   **Term 3 (quadratic):** $\frac{0.04}{2} = 0.02$
    Approximation: $1.2 + 0.02 = 1.22$
    Error (next term magnitude): $\frac{(0.2)^3}{6} = \frac{0.008}{6} \approx 0.001333$

*   **Term 4 (cubic):** $\frac{0.008}{6} \approx 0.001333$
    Approximation: $1.22 + 0.001333 \approx 1.221333$
    Error (next term magnitude): $\frac{(0.2)^4}{24} = \frac{0.0016}{24} \approx 0.0000667$

We need an accuracy of at least $0.0001$. The magnitude of the fourth term is approximately $0.0000667$, which is less than $0.0001$. Therefore, including up to the cubic term (the fourth term in the series expansion) should give us the desired accuracy.

The approximation using the first four terms is:
$e^{0.2} \approx 1 + 0.2 + 0.02 + 0.001333 = 1.221333$

*Note:* The actual value of $e^{0.2} \approx 1.221402758$. Our approximation $1.221333$ is indeed very close. The error is about $0.0000697$, which is within our $0.0001$ requirement.

**4. Common Series Recall Question:**
**Question:** State the Maclaurin series for $\ln(1-x)$ and specify its interval of convergence.

**Answer:**
We know the Maclaurin series for $\ln(1+x)$ is:
$\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \cdots = \sum_{n=1}^{\infty} \frac{(-1)^{n-1} x^n}{n}$

To find the series for $\ln(1-x)$, we substitute $-x$ for $x$:
$\ln(1-(-x)) = (-x) - \frac{(-x)^2}{2} + \frac{(-x)^3}{3} - \frac{(-x)^4}{4} + \cdots$
$\ln(1-x) = -x - \frac{x^2}{2} - \frac{x^3}{3} - \frac{x^4}{4} - \cdots$

This can be written as:
$\ln(1-x) = -\left( x + \frac{x^2}{2} + \frac{x^3}{3} + \frac{x^4}{4} + \cdots \right) = -\sum_{n=1}^{\infty} \frac{x^n}{n}$

For the interval of convergence: The original series for $\ln(1+x)$ converges for $-1 < x \le 1$. When we substitute $-x$, the condition becomes $-1 < -x \le 1$. Multiplying by $-1$ and reversing the inequalities gives $-1 \le x < 1$.

Therefore, the Maclaurin series for $\ln(1-x)$ is $-\sum_{n=1}^{\infty} \frac{x^n}{n}$, and it converges for $-1 \le x < 1$.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
