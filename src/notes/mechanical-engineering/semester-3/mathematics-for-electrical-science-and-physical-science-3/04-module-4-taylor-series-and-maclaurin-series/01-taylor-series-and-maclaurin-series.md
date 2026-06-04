---
title: "Taylor series and Maclaurin series"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 4: Taylor series and Maclaurin series"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462cb3"
status: "completed"
scrapedAt: "2026-05-20T17:50:52.138Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 4: Taylor Series and Maclaurin Series

### Topic: Taylor Series and Maclaurin Series

---

### Introduction

This module delves into the powerful concept of representing functions as infinite series, specifically Taylor and Maclaurin series. These series are fundamental tools in mathematics and have widespread applications in electrical and physical sciences, enabling approximation of complex functions, analysis of behavior near points, and solving differential equations. This topic directly supports **CO4: Understand the series expansion of complex functions about a singularity and apply residue theorem to compute real integrals.** While this module focuses on real-valued functions, the underlying principles of series expansion are crucial for understanding complex function behavior, which is explored in later modules.

---

### 1. The Essence of Series Representation

**Key Concept:** Many complex functions can be approximated or represented exactly by an infinite sum of simpler terms (usually powers of a variable).

*   **Polynomial Approximation:** We can approximate functions with polynomials. The more terms we include in a polynomial, the better the approximation generally becomes, especially in a localized region.
*   **Infinite Series:** A Taylor series is an infinite series that represents a function as a sum of terms calculated from the values of its derivatives at a single point.

---

### 2. Taylor Series

**Definition:** The Taylor series of a function $f(x)$ that has infinitely many derivatives at a point $a$ is given by:

$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n$

where:
*   $f^{(n)}(a)$ is the $n$-th derivative of $f(x)$ evaluated at $x=a$.
*   $n!$ is the factorial of $n$ ($n! = n \times (n-1) \times \dots \times 2 \times 1$).
*   $(x-a)^n$ are the powers of the difference between $x$ and the center of the expansion, $a$.

**Expansion Formula:**

$f(x) = f(a) + \frac{f'(a)}{1!}(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \frac{f'''(a)}{3!}(x-a)^3 + \dots$

**The Taylor Polynomial:** A Taylor polynomial of degree $N$, denoted by $T_N(x)$, is a finite sum of the first $N+1$ terms of the Taylor series:

$T_N(x) = \sum_{n=0}^{N} \frac{f^{(n)}(a)}{n!}(x-a)^n$

$T_N(x) = f(a) + \frac{f'(a)}{1!}(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \dots + \frac{f^{(N)}(a)}{N!}(x-a)^N$

**Remainder Term (Lagrange Form):** The difference between the function and its Taylor polynomial is the remainder term $R_N(x)$:

$f(x) = T_N(x) + R_N(x)$

$R_N(x) = \frac{f^{(N+1)}(c)}{(N+1)!}(x-a)^{N+1}$, for some $c$ between $a$ and $x$.

**Purpose of Taylor Series:**
*   **Approximation:** For values of $x$ close to $a$, the Taylor series provides a good approximation of $f(x)$. The more terms included, the better the approximation.
*   **Analysis:** Understanding the local behavior of a function (e.g., concavity, rate of change).
*   **Solving Differential Equations:** Many differential equations can be solved by assuming a series solution. (Relevant for engineering applications).

**Important Point:** The Taylor series converges to $f(x)$ within its radius of convergence.

---

### 3. Maclaurin Series

**Definition:** A Maclaurin series is a special case of a Taylor series where the expansion is centered at $a=0$.

$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!}x^n$

**Expansion Formula:**

$f(x) = f(0) + \frac{f'(0)}{1!}x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + \dots$

**Maclaurin Polynomial:** The $N$-th degree Maclaurin polynomial is:

$T_N(x) = \sum_{n=0}^{N} \frac{f^{(n)}(0)}{n!}x^n$

**Key Maclaurin Series (Commonly Used):** It's highly beneficial to memorize these.

1.  **Exponential Function:** $e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots = \sum_{n=0}^{\infty} \frac{x^n}{n!}$ (Converges for all $x$)

    *   *Reference:* Kreyszig, Chapter 11, Section 11.1.
2.  **Sine Function:** $\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \dots = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!}$ (Converges for all $x$)

    *   *Reference:* Kreyszig, Chapter 11, Section 11.1.
3.  **Cosine Function:** $\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \dots = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!}$ (Converges for all $x$)

    *   *Reference:* Kreyszig, Chapter 11, Section 11.1.
4.  **Geometric Series:** $\frac{1}{1-x} = 1 + x + x^2 + x^3 + \dots = \sum_{n=0}^{\infty} x^n$ (Converges for $|x| < 1$)

    *   *Reference:* Ramana, Chapter 34, Section 34.5.
5.  **Binomial Series:** $(1+x)^k = 1 + kx + \frac{k(k-1)}{2!}x^2 + \frac{k(k-1)(k-2)}{3!}x^3 + \dots = \sum_{n=0}^{\infty} \binom{k}{n} x^n$ (Converges for $|x| < 1$, and for $x=1$ if $k>0$)
    *   where $\binom{k}{n} = \frac{k(k-1)\dots(k-n+1)}{n!}$.
    *   *Reference:* Kreyszig, Chapter 11, Section 11.1.
6.  **Logarithm:** $\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \dots = \sum_{n=1}^{\infty} \frac{(-1)^{n-1} x^n}{n}$ (Converges for $-1 < x \le 1$)

    *   *Reference:* Grewal, Chapter 20, Section 20.8.

---

### 4. Applications of Taylor and Maclaurin Series

**For Electrical Science and Physical Science:**

*   **Approximating Complex Functions:** For small values of a parameter, we can often approximate complicated functions (like those in circuit analysis or quantum mechanics) with their Maclaurin series. For example, approximating $\sin(\omega t)$ or $e^{j\omega t}$ for small $\omega t$.
*   **Solving Differential Equations:** Many physical phenomena are described by differential equations. Taylor series can be used to find series solutions to these equations when analytical solutions are difficult or impossible. This is a cornerstone for understanding phenomena like oscillations, transient behavior in circuits, and wave propagation.
*   **Error Analysis:** Taylor polynomials provide a way to estimate the error in an approximation.
*   **Numerical Methods:** The development of numerical methods for integration, differentiation, and solving equations often relies on Taylor series expansions.
*   **System Analysis:** In control systems, the response of a system can be analyzed using the series expansion of transfer functions.
*   **Signal Processing:** While Fourier series and transforms are primary for signal analysis, understanding the behavior of signals at specific points can sometimes involve Taylor series, especially in the context of system responses. The connection to **CO1** is through understanding the foundational mathematical tools that underpin signal analysis.
*   **Complex Function Expansion (CO4):** While this module focuses on real functions, the concept of expanding functions in powers of $(x-a)$ is directly analogous to expanding complex functions in powers of $(z-a)$. This is crucial for understanding singularities and is a prerequisite for Laurent series and residue theorem.

---

### 5. Practical Steps to Find a Taylor/Maclaurin Series

1.  **Identify the function $f(x)$ and the center of expansion $a$.** If $a$ is not specified, assume $a=0$ for a Maclaurin series.
2.  **Calculate the derivatives of $f(x)$:** $f'(x), f''(x), f'''(x), \dots$
3.  **Evaluate the derivatives at the center $a$:** $f(a), f'(a), f''(a), f'''(a), \dots$
4.  **Substitute these values into the Taylor/Maclaurin series formula:**
    $f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n$
5.  **Determine the radius and interval of convergence** (if required) using the Ratio Test or other convergence tests.

---

### 6. Examples

**Example 1: Find the Maclaurin series for $f(x) = e^{2x}$.**

1.  $f(x) = e^{2x}$
2.  $f'(x) = 2e^{2x}$
3.  $f''(x) = 4e^{2x}$
4.  $f'''(x) = 8e^{2x}$
    In general, $f^{(n)}(x) = 2^n e^{2x}$.

5.  Evaluate at $a=0$:
    $f(0) = e^0 = 1$
    $f'(0) = 2e^0 = 2$
    $f''(0) = 4e^0 = 4$
    $f'''(0) = 8e^0 = 8$
    In general, $f^{(n)}(0) = 2^n$.

6.  Substitute into the Maclaurin series formula:
    $f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!}x^n = \sum_{n=0}^{\infty} \frac{2^n}{n!}x^n = \sum_{n=0}^{\infty} \frac{(2x)^n}{n!}$

7.  This is the Maclaurin series for $e^u$ where $u=2x$. So, $e^{2x} = 1 + 2x + \frac{(2x)^2}{2!} + \frac{(2x)^3}{3!} + \dots$

**Example 2: Find the Taylor series for $f(x) = \ln x$ centered at $a=1$.**

1.  $f(x) = \ln x$
2.  $f'(x) = \frac{1}{x} = x^{-1}$
3.  $f''(x) = -x^{-2}$
4.  $f'''(x) = 2x^{-3}$
5.  $f^{(4)}(x) = -6x^{-4}$
    In general, $f^{(n)}(x) = (-1)^{n-1}(n-1)! x^{-n}$ for $n \ge 1$.

6.  Evaluate at $a=1$:
    $f(1) = \ln 1 = 0$
    $f'(1) = 1^{-1} = 1$
    $f''(1) = -1^{-2} = -1$
    $f'''(1) = 2(1)^{-3} = 2$
    $f^{(4)}(1) = -6(1)^{-4} = -6$
    In general, $f^{(n)}(1) = (-1)^{n-1}(n-1)!$ for $n \ge 1$.

7.  Substitute into the Taylor series formula ($a=1$):
    $f(x) = f(1) + \sum_{n=1}^{\infty} \frac{f^{(n)}(1)}{n!}(x-1)^n$
    $f(x) = 0 + \sum_{n=1}^{\infty} \frac{(-1)^{n-1}(n-1)!}{n!}(x-1)^n$
    $f(x) = \sum_{n=1}^{\infty} \frac{(-1)^{n-1}(n-1)!}{n \cdot (n-1)!}(x-1)^n$
    $f(x) = \sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{n}(x-1)^n$

8.  This is the Taylor series for $\ln x$ centered at $a=1$.
    $\ln x = (x-1) - \frac{(x-1)^2}{2} + \frac{(x-1)^3}{3} - \frac{(x-1)^4}{4} + \dots$

**Example 3: Using known Maclaurin series to find a new one.**
Find the Maclaurin series for $f(x) = \sin(x^2)$.

We know the Maclaurin series for $\sin u$ is:
$\sin u = u - \frac{u^3}{3!} + \frac{u^5}{5!} - \dots$

Substitute $u = x^2$:
$\sin(x^2) = (x^2) - \frac{(x^2)^3}{3!} + \frac{(x^2)^5}{5!} - \dots$
$\sin(x^2) = x^2 - \frac{x^6}{3!} + \frac{x^{10}}{5!} - \dots$
$\sin(x^2) = \sum_{n=0}^{\infty} \frac{(-1)^n (x^2)^{2n+1}}{(2n+1)!} = \sum_{n=0}^{\infty} \frac{(-1)^n x^{4n+2}}{(2n+1)!}$

---

### 7. Important Points to Remember

*   **Center of Expansion:** The choice of the center 'a' affects the series representation and its radius of convergence. A Maclaurin series is centered at $a=0$.
*   **Convergence:** A Taylor/Maclaurin series represents the function only within its interval of convergence. The ratio test is a common method to find this.
*   **Derivatives Must Exist:** The function must have derivatives of all orders at the center of expansion for a Taylor series to exist.
*   **Memorization:** Memorizing the common Maclaurin series (for $e^x, \sin x, \cos x, \frac{1}{1-x}, \ln(1+x), (1+x)^k$) is extremely useful and saves considerable time.
*   **Manipulation:** Known series can be manipulated (substitution, differentiation, integration) to find series for related functions.
*   **Approximation:** Truncating a Taylor series at a finite number of terms gives a Taylor polynomial, which is an approximation of the function. The accuracy increases with the number of terms and proximity to the center of expansion.
*   **Connection to Complex Analysis (CO4):** The concept of Taylor series is a stepping stone to understanding Laurent series for complex functions, which are crucial for identifying singularities and applying the residue theorem.

---

### 8. Learning Outcome Checklist and Alignment with COs

*   **Learning Outcome 1:** Understand the definition and formula for Taylor and Maclaurin series.
    *   **Covered:** Yes, definitions and formulas are provided.
*   **Learning Outcome 2:** Compute the first few terms of Taylor and Maclaurin series for given functions.
    *   **Covered:** Yes, through examples and general steps.
*   **Learning Outcome 3:** Recognize and use standard Maclaurin series for common functions ($e^x, \sin x, \cos x, \frac{1}{1-x}$, etc.).
    *   **Covered:** Yes, key Maclaurin series are listed and emphasized.
*   **Learning Outcome 4:** Apply Taylor and Maclaurin series for approximation of functions.
    *   **Covered:** Yes, the purpose of Taylor polynomials for approximation is explained.
*   **Learning Outcome 5:** Use the Taylor/Maclaurin series of known functions to find the series of related functions.
    *   **Covered:** Yes, demonstrated with the $\sin(x^2)$ example.

**Alignment with Course Outcomes:**

*   **CO4: Understand the series expansion of complex function about a singularity and apply residue theorem to compute real integrals.**
    *   **Knowledge Level: K3 (Apply)**
    *   This module provides the fundamental understanding of series expansion for real functions, which is a direct prerequisite for understanding series expansions of complex functions (like Laurent series). The ability to manipulate and understand how functions can be represented as series is critical for applying techniques like the residue theorem. For example, the power series representation is used to understand the nature of singularities (poles, essential singularities) which then guides the application of the residue theorem.

---

### 9. Practice Questions/Exercises

**Instructions:** Attempt the following questions to test your understanding.

1.  Find the Maclaurin series for $f(x) = \cos(2x)$.
2.  Find the Taylor series for $f(x) = \frac{1}{x}$ centered at $a=2$.
3.  Using the known Maclaurin series for $e^x$, find the Maclaurin series for $f(x) = e^{-x}$.
4.  Find the first three non-zero terms of the Maclaurin series for $f(x) = \tan x$.
5.  Approximate the value of $\sin(0.1)$ using the first three terms of its Maclaurin series.

---

### 10. Answers to Practice Questions

1.  **Maclaurin series for $\cos(2x)$:**
    We know $\cos u = 1 - \frac{u^2}{2!} + \frac{u^4}{4!} - \dots$.
    Substitute $u=2x$:
    $\cos(2x) = 1 - \frac{(2x)^2}{2!} + \frac{(2x)^4}{4!} - \dots = 1 - \frac{4x^2}{2!} + \frac{16x^4}{4!} - \dots$
    $\cos(2x) = 1 - 2x^2 + \frac{2}{3}x^4 - \dots$
    The general term is $\sum_{n=0}^{\infty} \frac{(-1)^n (2x)^{2n}}{(2n)!} = \sum_{n=0}^{\infty} \frac{(-1)^n 2^{2n} x^{2n}}{(2n)!}$.

2.  **Taylor series for $f(x) = \frac{1}{x}$ centered at $a=2$:**
    $f(x) = x^{-1}$
    $f'(x) = -x^{-2}$
    $f''(x) = 2x^{-3}$
    $f'''(x) = -6x^{-4}$
    Evaluate at $a=2$:
    $f(2) = \frac{1}{2}$
    $f'(2) = -\frac{1}{4}$
    $f''(2) = \frac{2}{8} = \frac{1}{4}$
    $f'''(2) = -\frac{6}{16} = -\frac{3}{8}$
    Taylor series:
    $f(x) = f(2) + f'(2)(x-2) + \frac{f''(2)}{2!}(x-2)^2 + \frac{f'''(2)}{3!}(x-2)^3 + \dots$
    $f(x) = \frac{1}{2} - \frac{1}{4}(x-2) + \frac{1/4}{2}(x-2)^2 + \frac{-3/8}{6}(x-2)^3 + \dots$
    $f(x) = \frac{1}{2} - \frac{1}{4}(x-2) + \frac{1}{8}(x-2)^2 - \frac{1}{16}(x-2)^3 + \dots$

3.  **Maclaurin series for $f(x) = e^{-x}$:**
    From $e^u = 1 + u + \frac{u^2}{2!} + \frac{u^3}{3!} + \dots$, substitute $u=-x$:
    $e^{-x} = 1 + (-x) + \frac{(-x)^2}{2!} + \frac{(-x)^3}{3!} + \dots$
    $e^{-x} = 1 - x + \frac{x^2}{2!} - \frac{x^3}{3!} + \dots$
    The general term is $\sum_{n=0}^{\infty} \frac{(-x)^n}{n!} = \sum_{n=0}^{\infty} \frac{(-1)^n x^n}{n!}$.

4.  **First three non-zero terms of the Maclaurin series for $f(x) = \tan x$:**
    $f(x) = \tan x$
    $f'(x) = \sec^2 x$
    $f''(x) = 2\sec x (\sec x \tan x) = 2\sec^2 x \tan x$
    $f'''(x) = 2(2\sec x (\sec x \tan x)) \tan x + 2\sec^2 x (\sec^2 x) = 4\sec^2 x \tan^2 x + 2\sec^4 x$

    Evaluate at $a=0$:
    $f(0) = \tan 0 = 0$
    $f'(0) = \sec^2 0 = 1^2 = 1$
    $f''(0) = 2\sec^2 0 \tan 0 = 2(1)(0) = 0$
    $f'''(0) = 4\sec^2 0 \tan^2 0 + 2\sec^4 0 = 4(1)(0) + 2(1) = 2$

    Maclaurin series:
    $f(x) = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + \dots$
    $f(x) = 0 + 1(x) + \frac{0}{2!}x^2 + \frac{2}{3!}x^3 + \dots$
    $f(x) = x + \frac{2}{6}x^3 + \dots = x + \frac{1}{3}x^3 + \dots$
    (The next non-zero term comes from the fifth derivative).
    The first three non-zero terms are $x$, $\frac{x^3}{3}$, and $\frac{2x^5}{15}$. (To get this, we would need to calculate more derivatives). For the purpose of this exercise, $x + \frac{1}{3}x^3$ are the first two non-zero terms. If "first three non-zero terms" implies the terms corresponding to $x^1, x^3, x^5$, then we need the fifth derivative.

    *Self-correction: The question asks for the *first three non-zero terms*. The coefficients are: $f(0)/0! = 0$, $f'(0)/1! = 1$, $f''(0)/2! = 0$, $f'''(0)/3! = 2/6 = 1/3$. The terms are $x$ and $\frac{1}{3}x^3$. We need one more. The series for $\tan x$ is $x + \frac{x^3}{3} + \frac{2x^5}{15} + \dots$. So the first three non-zero terms are $x$, $\frac{x^3}{3}$, $\frac{2x^5}{15}$.*

5.  **Approximate $\sin(0.1)$:**
    The Maclaurin series for $\sin x$ is $x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots$.
    Using the first three terms:
    $\sin(0.1) \approx (0.1) - \frac{(0.1)^3}{3!} + \frac{(0.1)^5}{5!}$
    $\sin(0.1) \approx 0.1 - \frac{0.001}{6} + \frac{0.00001}{120}$
    $\sin(0.1) \approx 0.1 - 0.00016666... + 0.000000083...$
    $\sin(0.1) \approx 0.099833416...$
    (Actual value of $\sin(0.1)$ is approximately $0.0998334166$).

---

This concludes the study notes for Taylor and Maclaurin series. Remember that these series are powerful analytical tools with significant implications for understanding and modeling phenomena in electrical and physical sciences. The principles learned here will be foundational for more advanced topics in complex analysis and signal processing.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=fNk_zzaMoEs) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
