---
title: "Taylor series and Maclaurin series"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 4: Taylor series and Maclaurin series"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35a7a"
status: "completed"
scrapedAt: "2026-05-23T16:14:46.543Z"
---
This is a comprehensive set of study notes for Module 4: Taylor Series and Maclaurin Series, tailored for Mathematics for Electrical Science and Physical Science – 3. It aims to cover all learning outcomes, incorporate textbook content, and align with the course outcomes.

---

# Module 4: Taylor Series and Maclaurin Series

## 1. Introduction to Series Expansions

In mathematics, and particularly in the fields of electrical and physical science, representing functions as infinite series is a powerful technique. It allows us to approximate complex functions with simpler polynomials, which are often easier to analyze, differentiate, and integrate. This module focuses on two fundamental types of series expansions: Taylor series and Maclaurin series.

**Key Concept:** A series expansion represents a function as an infinite sum of terms, typically involving powers of a variable.

## 2. Taylor Series

### 2.1 Definition and Purpose

The Taylor series of a function $f(x)$ that is infinitely differentiable at a point $a$ is given by the infinite sum:

$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n = f(a) + \frac{f'(a)}{1!}(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \frac{f'''(a)}{3!}(x-a)^3 + \cdots$$

where:
*   $f^{(n)}(a)$ is the $n$-th derivative of $f(x)$ evaluated at $x=a$.
*   $n!$ is the factorial of $n$ ($0! = 1$).
*   $(x-a)^n$ is the term raised to the power of $n$.
*   $a$ is the **center** of the expansion.

**Purpose of Taylor Series:**
*   To approximate a function by a polynomial in the neighborhood of a point $a$.
*   To analyze the behavior of a function near a specific point.
*   To solve differential equations.
*   To evaluate limits.

**Reference:** Kreyszig's *Advanced Engineering Mathematics* (10th ed., Section 7.7) extensively covers the theory and applications of Taylor series.

### 2.2 Taylor Polynomials (Approximations)

Truncating a Taylor series after a finite number of terms yields a **Taylor polynomial**, denoted by $T_N(x)$:

$$T_N(x) = \sum_{n=0}^{N} \frac{f^{(n)}(a)}{n!}(x-a)^n = f(a) + \frac{f'(a)}{1!}(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \cdots + \frac{f^{(N)}(a)}{N!}(x-a)^N$$

$T_N(x)$ is a polynomial of degree $N$ that approximates $f(x)$ near $x=a$. The accuracy of the approximation generally improves as $N$ increases and as $x$ gets closer to $a$.

**The Remainder Term:**
The difference between the function and its Taylor polynomial is the **remainder term**, $R_N(x)$:

$$R_N(x) = f(x) - T_N(x)$$

A common form of the remainder term is given by Lagrange's form:

$$R_N(x) = \frac{f^{(N+1)}(c)}{(N+1)!}(x-a)^{N+1}$$

where $c$ is some value between $a$ and $x$. The existence of a remainder term indicates that the Taylor series might not converge to the function for all $x$.

### 2.3 Convergence of Taylor Series

A Taylor series converges to $f(x)$ in an interval $|x-a| < R$ if the remainder term $R_N(x) \to 0$ as $N \to \infty$ within that interval. The value $R$ is called the **radius of convergence**.

**Important Point:** Not all functions can be represented by a Taylor series, or their Taylor series might not converge to the function everywhere. Analyticity of a function is a key condition for its Taylor series representation to be valid over a region.

## 3. Maclaurin Series

### 3.1 Definition and Relationship to Taylor Series

A Maclaurin series is a special case of a Taylor series where the center of expansion is $a=0$.

The Maclaurin series of a function $f(x)$ is given by:

$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!}x^n = f(0) + \frac{f'(0)}{1!}x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + \cdots$$

**Relationship:** Maclaurin series is simply a Taylor series centered at 0.

### 3.2 Common Maclaurin Series (Essential for Electrical and Physical Science)

Memorizing and understanding these common Maclaurin series is crucial.

*   **Exponential Function:**
    $e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots = \sum_{n=0}^{\infty} \frac{x^n}{n!}$ (Converges for all $x$)

*   **Trigonometric Functions:**
    $\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \cdots = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!}$ (Converges for all $x$)
    $\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \cdots = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!}$ (Converges for all $x$)
    $\tan x = x + \frac{x^3}{3} + \frac{2x^5}{15} + \cdots$ (This series has a more complex form and a smaller radius of convergence, around $\pi/2$. Kreyszig provides a detailed treatment.)

*   **Logarithmic Function:**
    $\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \cdots = \sum_{n=1}^{\infty} \frac{(-1)^{n-1} x^n}{n}$ (Converges for $-1 < x \le 1$)
    $\ln(1-x) = -x - \frac{x^2}{2} - \frac{x^3}{3} - \frac{x^4}{4} - \cdots = -\sum_{n=1}^{\infty} \frac{x^n}{n}$ (Converges for $-1 \le x < 1$)

*   **Binomial Series:**
    $(1+x)^\alpha = 1 + \alpha x + \frac{\alpha(\alpha-1)}{2!}x^2 + \frac{\alpha(\alpha-1)(\alpha-2)}{3!}x^3 + \cdots = \sum_{n=0}^{\infty} \binom{\alpha}{n} x^n$
    where $\binom{\alpha}{n} = \frac{\alpha(\alpha-1)\cdots(\alpha-n+1)}{n!}$.
    This series converges for $|x| < 1$ and when $\alpha$ is a non-negative integer, it's a finite polynomial.

**Reference:** All cited textbooks provide excellent coverage of these common series. Kreyszig's (10th ed., Section 7.7) and B. V. Ramana's (39th ed., Chapter 23) are particularly detailed.

## 4. Applications in Electrical Science and Physical Science

Taylor and Maclaurin series are fundamental tools in many areas.

### 4.1 Approximating Functions

*   **Small Angle Approximations:** For small angles $\theta$ (in radians), $\sin \theta \approx \theta$ and $\cos \theta \approx 1 - \frac{\theta^2}{2}$. These are directly from the Maclaurin series.
    *   *Example:* In oscillations, the restoring force might be proportional to $\sin \theta$. For small displacements, this force is approximately proportional to $\theta$, leading to simple harmonic motion.

*   **Approximating Exponential Growth/Decay:** For small $t$, $e^{-kt} \approx 1 - kt$. This is useful in analyzing circuits with capacitive or inductive elements (RC and RL circuits), where the current or voltage decays exponentially.

*   **Approximating Waveforms:** Complex waveforms can be approximated by sums of simpler functions (like sines and cosines) through Fourier series, which often relies on the series expansions of basic functions.

### 4.2 Solving Differential Equations

Taylor series can be used to find series solutions to differential equations, especially when analytical solutions are difficult to obtain. This is a direct application often explored in more advanced mathematics.

### 4.3 Evaluating Limits

Series expansions can simplify indeterminate forms in limits.

**Example:** Evaluate $\lim_{x \to 0} \frac{\sin x}{x}$.
Using the Maclaurin series for $\sin x$:
$\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots$
$\frac{\sin x}{x} = \frac{x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots}{x} = 1 - \frac{x^2}{3!} + \frac{x^4}{5!} - \cdots$
Taking the limit as $x \to 0$:
$\lim_{x \to 0} \frac{\sin x}{x} = 1 - 0 + 0 - \cdots = 1$.

### 4.4 Analyzing Behavior of Physical Systems

*   **Quantum Mechanics:** Wave functions are often represented by series.
*   **Thermodynamics:** Equations of state can be approximated using series expansions for specific conditions.
*   **Signal Processing:** Understanding the behavior of signals often involves analyzing their series representations. The Fast Fourier Transform (FFT), mentioned in one of the reference books (Rao et al.), is fundamentally about efficiently computing discrete Fourier transforms, which represent signals as sums of sinusoids, built upon the core ideas of series expansions.

**Learning Outcome Alignment:** This section directly addresses the application of series in physical science and engineering, aligning with the spirit of the course outcomes, particularly in understanding functions and their behavior. While CO1-CO4 focus on complex analysis and Fourier transforms, the foundational understanding of series is prerequisite for Fourier series and transforms.

## 5. Taylor Series for Complex Functions (Connection to CO4)

While this module's primary focus is on real-valued functions, the concept extends to complex functions, which is highly relevant to Course Outcome 4 (series expansion of complex functions).

**Definition:** If a complex function $f(z)$ is analytic in a disk $|z-a| < R$, then it has a Taylor series expansion around $a$:

$$f(z) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(z-a)^n$$

This series converges to $f(z)$ for all $z$ within that disk.

**Example:** $f(z) = e^z$. The Maclaurin series for $e^z$ is $\sum_{n=0}^{\infty} \frac{z^n}{n!}$, which converges for all complex $z$. This implies $e^z$ is analytic everywhere.

**Reference:** Zill and Shanahan's *Complex Analysis* (3rd ed.) provides a thorough treatment of Taylor series for complex functions and their connection to analyticity (Chapter 8). This is a direct link to CO4, which talks about "series expansion of complex function about a singularity." Taylor series are the expansions *away* from singularities, and understanding them is crucial before delving into Laurent series (which handle singularities).

## 6. Practice Questions and Exercises

**Question 1:** Find the first four terms of the Maclaurin series for $f(x) = \sin(2x)$.

**Solution:**
We need to find $f(0), f'(0), f''(0), f'''(0)$.
$f(x) = \sin(2x) \implies f(0) = \sin(0) = 0$
$f'(x) = 2\cos(2x) \implies f'(0) = 2\cos(0) = 2$
$f''(x) = -4\sin(2x) \implies f''(0) = -4\sin(0) = 0$
$f'''(x) = -8\cos(2x) \implies f'''(0) = -8\cos(0) = -8$

The Maclaurin series is $f(0) + \frac{f'(0)}{1!}x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + \cdots$
So, $\sin(2x) \approx 0 + \frac{2}{1!}x + \frac{0}{2!}x^2 + \frac{-8}{3!}x^3 + \cdots$
$\sin(2x) \approx 2x - \frac{8}{6}x^3 + \cdots = 2x - \frac{4}{3}x^3 + \cdots$

Alternatively, using the known series for $\sin u = u - \frac{u^3}{3!} + \cdots$ and substituting $u=2x$:
$\sin(2x) = (2x) - \frac{(2x)^3}{3!} + \cdots = 2x - \frac{8x^3}{6} + \cdots = 2x - \frac{4}{3}x^3 + \cdots$

**Question 2:** Find the Taylor series for $f(x) = e^x$ centered at $a=1$.

**Solution:**
We need to find $f^{(n)}(1)$.
$f(x) = e^x$
$f'(x) = e^x$
$f''(x) = e^x$
...
$f^{(n)}(x) = e^x$

So, $f^{(n)}(1) = e^1 = e$ for all $n \ge 0$.

The Taylor series is $\sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n = \sum_{n=0}^{\infty} \frac{e}{n!}(x-1)^n$.
$e^x = e + \frac{e}{1!}(x-1) + \frac{e}{2!}(x-1)^2 + \frac{e}{3!}(x-1)^3 + \cdots$
$e^x = e \left( 1 + (x-1) + \frac{(x-1)^2}{2!} + \frac{(x-1)^3}{3!} + \cdots \right)$
Recognizing the series in the parenthesis as $e^u$ with $u = x-1$:
$e^x = e \cdot e^{x-1} = e^{1 + x - 1} = e^x$. This confirms the result.

**Question 3:** Use a Maclaurin series to approximate the value of $\sqrt{1.1}$.

**Solution:**
We can write $\sqrt{1.1}$ as $(1+0.1)^{1/2}$.
We use the binomial series: $(1+x)^\alpha = 1 + \alpha x + \frac{\alpha(\alpha-1)}{2!}x^2 + \cdots$
Here, $x = 0.1$ and $\alpha = 1/2$.

First term: $1$
Second term: $\alpha x = \frac{1}{2}(0.1) = 0.05$
Third term: $\frac{\alpha(\alpha-1)}{2!}x^2 = \frac{\frac{1}{2}(\frac{1}{2}-1)}{2}(0.1)^2 = \frac{\frac{1}{2}(-\frac{1}{2})}{2}(0.01) = \frac{-\frac{1}{4}}{2}(0.01) = -\frac{1}{8}(0.01) = -0.00125$

Approximation using the first three terms: $1 + 0.05 - 0.00125 = 1.04875$.
The actual value of $\sqrt{1.1}$ is approximately $1.0488088...$

**Question 4:** Determine the radius of convergence for the Maclaurin series of $f(x) = \frac{1}{1-x}$.

**Solution:**
The Maclaurin series for $\frac{1}{1-x}$ is the geometric series $1 + x + x^2 + x^3 + \cdots = \sum_{n=0}^{\infty} x^n$.
This is a geometric series with ratio $x$. It converges if $|x| < 1$.
Therefore, the radius of convergence is $R=1$.

**Question 5:** (Relating to CO4 implicitly) If $f(z) = \frac{1}{z}$, find its Taylor series expansion around $a=1$.

**Solution:**
$f(z) = z^{-1}$
$f'(z) = -z^{-2}$
$f''(z) = 2z^{-3}$
$f'''(z) = -6z^{-4}$
$f^{(n)}(z) = (-1)^n n! z^{-(n+1)}$

Evaluating at $a=1$:
$f(1) = 1$
$f'(1) = -1$
$f''(1) = 2$
$f'''(1) = -6$
$f^{(n)}(1) = (-1)^n n!$

The Taylor series around $a=1$ is:
$\sum_{n=0}^{\infty} \frac{f^{(n)}(1)}{n!}(z-1)^n = \sum_{n=0}^{\infty} \frac{(-1)^n n!}{n!}(z-1)^n = \sum_{n=0}^{\infty} (-1)^n (z-1)^n$
This is a geometric series with ratio $-(z-1)$. It converges when $|-(z-1)| < 1$, which means $|z-1| < 1$.
The radius of convergence is $R=1$.

## 7. Important Points to Remember

*   **Center of Expansion:** The choice of 'a' for Taylor series is crucial. Maclaurin series is a special case with $a=0$.
*   **Derivatives:** Accurately calculating the derivatives of the function is the first step.
*   **Factorials:** Remember $n!$ appears in the denominator.
*   **Convergence:** A series expansion is only valid within its radius of convergence.
*   **Common Series:** Memorizing the Maclaurin series for $e^x, \sin x, \cos x, \ln(1+x), (1+x)^\alpha$ is highly beneficial.
*   **Approximation:** Truncated series (Taylor polynomials) provide approximations. The accuracy depends on the degree of the polynomial and how close $x$ is to $a$.
*   **Applications:** Series expansions are fundamental for approximating functions, simplifying complex expressions, and analyzing the behavior of physical systems and signals.
*   **Complex Functions:** The concept extends to complex functions; analyticity is key for Taylor series convergence.

---
