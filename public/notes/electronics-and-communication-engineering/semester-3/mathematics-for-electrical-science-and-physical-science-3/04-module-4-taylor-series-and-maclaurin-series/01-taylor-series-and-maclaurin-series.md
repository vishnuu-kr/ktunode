---
title: "Taylor series and Maclaurin series"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 4: Taylor series and Maclaurin series"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe270"
status: "completed"
scrapedAt: "2026-05-23T17:47:16.691Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 4: Taylor Series and Maclaurin Series

### Topic: Taylor Series and Maclaurin Series

---

### 1. Introduction

This module delves into the powerful concept of approximating functions using infinite series expansions, specifically Taylor and Maclaurin series. These series are fundamental in various fields of science and engineering, allowing us to represent complex functions by simpler polynomials, which are easier to differentiate, integrate, and analyze. This topic is particularly relevant to understanding the behavior of functions around specific points and is a cornerstone for advanced topics like Fourier series and complex analysis.

---

### 2. Learning Outcomes

Upon successful completion of this module, you will be able to:

*   **LO1:** Define and construct Taylor and Maclaurin series for a given function.
*   **LO2:** Determine the interval of convergence for Taylor and Maclaurin series.
*   **LO3:** Use Taylor and Maclaurin series to approximate function values and evaluate limits.
*   **LO4:** Understand the geometric interpretation of Taylor and Maclaurin series as polynomial approximations.
*   **LO5:** Recognize and apply common Maclaurin series for elementary functions.
*   **LO6:** Apply Taylor series to solve differential equations.

---

### 3. Key Concepts and Definitions

#### 3.1. Taylor Polynomials

A Taylor polynomial is a polynomial approximation of a function at a particular point.

**Definition:** The $n$-th degree Taylor polynomial of a function $f(x)$ centered at $a$, denoted by $P_n(x; a)$, is given by:

$$P_n(x; a) = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \frac{f'''(a)}{3!}(x-a)^3 + \dots + \frac{f^{(n)}(a)}{n!}(x-a)^n$$

where $f^{(k)}(a)$ is the $k$-th derivative of $f(x)$ evaluated at $x=a$.

**Kreyszig (10th ed.):** Chapter 7.1 discusses Taylor and Maclaurin series, introducing the concept of Taylor polynomials as approximations.

#### 3.2. Taylor Series

A Taylor series is an infinite series expansion of a function about a point, representing the function as an infinite sum of terms.

**Definition:** The Taylor series of a function $f(x)$ centered at $a$ is an infinite series given by:

$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \frac{f'''(a)}{3!}(x-a)^3 + \dots$$

This series converges to $f(x)$ for values of $x$ within its interval of convergence.

**Important Note:** For the Taylor series to exist, the function $f(x)$ must have derivatives of all orders at $x=a$.

#### 3.3. Maclaurin Series

A Maclaurin series is a special case of the Taylor series where the center of expansion is $a=0$.

**Definition:** The Maclaurin series of a function $f(x)$ is given by:

$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!}x^n = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + \dots$$

**Kreyszig (10th ed.):** Chapter 7.1 also covers Maclaurin series as a special case.

#### 3.4. Remainder Term (Lagrange Form)

When we use a Taylor polynomial to approximate a function, there is an error or remainder.

**Definition:** The remainder term $R_n(x)$ for a Taylor polynomial of degree $n$ centered at $a$ is given by:

$$R_n(x) = f(x) - P_n(x; a) = \frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}$$

for some value $c$ between $a$ and $x$.

**Significance:** The remainder term helps determine the accuracy of the Taylor polynomial approximation. If $\lim_{n \to \infty} R_n(x) = 0$ for a given $x$, then the Taylor series converges to $f(x)$ at that $x$.

**Reference Books:** B.V. Ramana's "Higher Engineering Mathematics" and B.S. Grewal's "Higher Engineering Mathematics" provide detailed explanations and examples of the remainder term in Taylor series approximations.

---

### 4. Constructing Taylor and Maclaurin Series

To construct a Taylor or Maclaurin series for a function $f(x)$, we follow these steps:

1.  **Check for Differentiability:** Ensure $f(x)$ has derivatives of all orders at the center of expansion ($a$ for Taylor, $0$ for Maclaurin).
2.  **Calculate Derivatives:** Compute the first few derivatives of $f(x)$: $f'(x), f''(x), f'''(x), \dots$.
3.  **Evaluate Derivatives at the Center:** Evaluate these derivatives at the center point: $f(a), f'(a), f''(a), f'''(a), \dots$ (or $f(0), f'(0), f''(0), f'''(0), \dots$ for Maclaurin).
4.  **Substitute into the Series Formula:** Substitute these values into the Taylor or Maclaurin series formula.
5.  **Determine the Interval of Convergence:** Find the range of $x$ values for which the series converges.

#### 4.1. Examples

**Example 1: Maclaurin Series for $e^x$**

Let $f(x) = e^x$.
*   $f(0) = e^0 = 1$
*   $f'(x) = e^x \implies f'(0) = 1$
*   $f''(x) = e^x \implies f''(0) = 1$
*   $f^{(n)}(x) = e^x \implies f^{(n)}(0) = 1$ for all $n \geq 0$.

Using the Maclaurin series formula:
$$e^x = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!}x^n = \sum_{n=0}^{\infty} \frac{1}{n!}x^n = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots$$

**Example 2: Taylor Series for $\sin(x)$ centered at $a = \pi/2$**

Let $f(x) = \sin(x)$. We want to expand it around $a = \pi/2$.
*   $f(\pi/2) = \sin(\pi/2) = 1$
*   $f'(x) = \cos(x) \implies f'(\pi/2) = \cos(\pi/2) = 0$
*   $f''(x) = -\sin(x) \implies f''(\pi/2) = -\sin(\pi/2) = -1$
*   $f'''(x) = -\cos(x) \implies f'''(\pi/2) = -\cos(\pi/2) = 0$
*   $f^{(4)}(x) = \sin(x) \implies f^{(4)}(\pi/2) = \sin(\pi/2) = 1$

The derivatives cycle $1, 0, -1, 0, 1, 0, -1, 0, \dots$.

Using the Taylor series formula:
$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n$$
$$\sin(x) = f(\pi/2) + f'(\pi/2)(x-\pi/2) + \frac{f''(\pi/2)}{2!}(x-\pi/2)^2 + \frac{f'''(\pi/2)}{3!}(x-\pi/2)^3 + \dots$$
$$\sin(x) = 1 + 0(x-\pi/2) + \frac{-1}{2!}(x-\pi/2)^2 + \frac{0}{3!}(x-\pi/2)^3 + \frac{1}{4!}(x-\pi/2)^4 + \dots$$
$$\sin(x) = 1 - \frac{(x-\pi/2)^2}{2!} + \frac{(x-\pi/2)^4}{4!} - \frac{(x-\pi/2)^6}{6!} + \dots$$

This is also related to the Maclaurin series of $\cos(u)$ where $u = x - \pi/2$.

#### 4.2. Common Maclaurin Series

These are essential to memorize and often used in problems.

*   **$e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots$** (Converges for all $x$)
*   **$\sin(x) = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \dots$** (Converges for all $x$)
*   **$\cos(x) = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!} = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \dots$** (Converges for all $x$)
*   **$\frac{1}{1-x} = \sum_{n=0}^{\infty} x^n = 1 + x + x^2 + x^3 + \dots$** (Geometric series, converges for $|x|<1$)
*   **$\frac{1}{1+x} = \sum_{n=0}^{\infty} (-1)^n x^n = 1 - x + x^2 - x^3 + \dots$** (Geometric series, converges for $|x|<1$)
*   **$\ln(1+x) = \sum_{n=1}^{\infty} \frac{(-1)^{n-1} x^n}{n} = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \dots$** (Converges for $-1 < x \leq 1$)
*   **$\arctan(x) = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{2n+1} = x - \frac{x^3}{3} + \frac{x^5}{5} - \frac{x^7}{7} + \dots$** (Converges for $|x|\leq 1$, $x \neq \pm 1$)

**Kreyszig (10th ed.):** Table 7.1 in Chapter 7.1 lists these common series.

---

### 5. Interval of Convergence

The interval of convergence (IOC) is the set of all $x$ values for which a Taylor or Maclaurin series converges to the function.

**How to find the IOC:**

1.  **Use the Ratio Test:** For a series $\sum_{n=0}^{\infty} a_n$, the ratio test states that the series converges if $\lim_{n \to \infty} \left|\frac{a_{n+1}}{a_n}\right| < 1$.
2.  **Test Endpoints:** Once the open interval is found, check the convergence at the endpoints of the interval (e.g., by using the p-series test, alternating series test, etc.).

**Example: IOC for $e^x$**

The series is $\sum_{n=0}^{\infty} \frac{x^n}{n!}$. Here, $a_n = \frac{x^n}{n!}$.
$$\lim_{n \to \infty} \left|\frac{a_{n+1}}{a_n}\right| = \lim_{n \to \infty} \left|\frac{x^{n+1}/(n+1)!}{x^n/n!}\right| = \lim_{n \to \infty} \left|\frac{x^{n+1}}{(n+1)!} \cdot \frac{n!}{x^n}\right| = \lim_{n \to \infty} \left|\frac{x}{n+1}\right| = |x| \lim_{n \to \infty} \frac{1}{n+1} = |x| \cdot 0 = 0$$
Since $0 < 1$ for all $x$, the series for $e^x$ converges for all real numbers. The IOC is $(-\infty, \infty)$.

**Example: IOC for $\frac{1}{1-x}$**

The series is $\sum_{n=0}^{\infty} x^n$. Here, $a_n = x^n$.
$$\lim_{n \to \infty} \left|\frac{a_{n+1}}{a_n}\right| = \lim_{n \to \infty} \left|\frac{x^{n+1}}{x^n}\right| = \lim_{n \to \infty} |x| = |x|$$
For convergence, $|x| < 1$. So the open interval is $(-1, 1)$.
*   **At $x=1$:** The series becomes $\sum_{n=0}^{\infty} 1^n = \sum_{n=0}^{\infty} 1$, which diverges.
*   **At $x=-1$:** The series becomes $\sum_{n=0}^{\infty} (-1)^n$, which diverges by oscillation.
Therefore, the IOC for $\frac{1}{1-x}$ is $(-1, 1)$.

**Kreyszig (10th ed.):** Section 7.2 is dedicated to the interval of convergence and detailed methods for finding it.

---

### 6. Applications of Taylor and Maclaurin Series

#### 6.1. Approximating Function Values

By truncating a Taylor or Maclaurin series, we can approximate the value of a function at a point. The accuracy increases with the number of terms used.

**Example: Approximate $\sin(0.1)$**

Using the Maclaurin series for $\sin(x)$: $\sin(x) \approx x - \frac{x^3}{3!} + \frac{x^5}{5!}$.
Let $x = 0.1$.
$\sin(0.1) \approx 0.1 - \frac{(0.1)^3}{3!} + \frac{(0.1)^5}{5!}$
$\sin(0.1) \approx 0.1 - \frac{0.001}{6} + \frac{0.00001}{120}$
$\sin(0.1) \approx 0.1 - 0.000166667 + 0.000000083$
$\sin(0.1) \approx 0.099833417$

The actual value of $\sin(0.1)$ is approximately $0.0998334166$. The approximation is very good with just a few terms.

#### 6.2. Evaluating Limits

Taylor series can simplify limits that are initially in indeterminate forms.

**Example: Evaluate $\lim_{x \to 0} \frac{\sin(x) - x}{x^3}$**

Using the Maclaurin series for $\sin(x)$: $\sin(x) = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots$
$$\frac{\sin(x) - x}{x^3} = \frac{(x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots) - x}{x^3}$$
$$= \frac{-\frac{x^3}{3!} + \frac{x^5}{5!} - \dots}{x^3}$$
$$= -\frac{1}{3!} + \frac{x^2}{5!} - \dots$$
Now, take the limit as $x \to 0$:
$$\lim_{x \to 0} \left(-\frac{1}{3!} + \frac{x^2}{5!} - \dots\right) = -\frac{1}{3!} = -\frac{1}{6}$$

**Kreyszig (10th ed.):** Chapter 7.1 provides examples of using series to evaluate limits.

#### 6.3. Solving Differential Equations

Taylor series can be used to find series solutions to differential equations, particularly around ordinary points.

**Example: Find a series solution to $y'' + y = 0$ around $x=0$.**

Assume a solution of the form $y(x) = \sum_{n=0}^{\infty} c_n x^n$.
Then $y'(x) = \sum_{n=1}^{\infty} n c_n x^{n-1}$ and $y''(x) = \sum_{n=2}^{\infty} n (n-1) c_n x^{n-2}$.
Substituting into the ODE:
$$\sum_{n=2}^{\infty} n (n-1) c_n x^{n-2} + \sum_{n=0}^{\infty} c_n x^n = 0$$
Shift the index in the first sum. Let $k = n-2$, so $n = k+2$. When $n=2, k=0$.
$$\sum_{k=0}^{\infty} (k+2)(k+1) c_{k+2} x^k + \sum_{k=0}^{\infty} c_k x^k = 0$$
Combine the sums:
$$\sum_{k=0}^{\infty} [(k+2)(k+1) c_{k+2} + c_k] x^k = 0$$
For this equation to hold for all $x$, the coefficient of each power of $x$ must be zero.
$(k+2)(k+1) c_{k+2} + c_k = 0$
$c_{k+2} = -\frac{c_k}{(k+2)(k+1)}$

This is the recurrence relation. We need initial conditions to determine $c_0$ and $c_1$.
Let $y(0) = y_0$ and $y'(0) = y_1$.
$y(0) = c_0 = y_0$
$y'(0) = 1 \cdot c_1 = y_1 \implies c_1 = y_1$

Now we can find the coefficients:
*   $c_2 = -\frac{c_0}{2 \cdot 1} = -\frac{y_0}{2}$
*   $c_3 = -\frac{c_1}{3 \cdot 2} = -\frac{y_1}{6}$
*   $c_4 = -\frac{c_2}{4 \cdot 3} = -\frac{-y_0/2}{12} = \frac{y_0}{24}$
*   $c_5 = -\frac{c_3}{5 \cdot 4} = -\frac{-y_1/6}{20} = \frac{y_1}{120}$

So, $y(x) = c_0 + c_1 x + c_2 x^2 + c_3 x^3 + c_4 x^4 + c_5 x^5 + \dots$
$y(x) = y_0 + y_1 x - \frac{y_0}{2!} x^2 - \frac{y_1}{3!} x^3 + \frac{y_0}{4!} x^4 + \frac{y_1}{5!} x^5 - \dots$
$y(x) = y_0 \left(1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \dots\right) + y_1 \left(x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots\right)$
$y(x) = y_0 \cos(x) + y_1 \sin(x)$

This is the well-known general solution for $y'' + y = 0$.

**Kreyszig (10th ed.):** Chapter 7.3 deals with Taylor and Maclaurin series in the context of solving ODEs.

#### 6.4. Connection to Complex Analysis (Course Outcomes)

While this module focuses on real Taylor and Maclaurin series, the concepts extend to complex functions. Understanding these real series is a stepping stone for **CO4: Understand the series expansion of complex function about a singularity and apply residue theorem to compute real integrals.**

*   **Complex Taylor/Maclaurin Series:** If a function $f(z)$ is analytic (differentiable) in a region, it can be represented by a Taylor series in that region. If it's analytic at $z=0$, it has a Maclaurin series. The derivation and properties are analogous to the real case.
*   **Laurent Series:** For functions with singularities, a more general series, the Laurent series, is used. This is directly relevant to CO4. Understanding the structure of Taylor series helps in understanding how the Laurent series differs and how it's used to analyze behavior near singularities.
*   **Approximation:** Taylor polynomials provide approximations of complex functions, just as they do for real functions. This is useful in numerical methods and in understanding the local behavior of analytic functions.

**Zill & Shanahan's "Complex Analysis"** would provide the detailed treatment of complex Taylor and Laurent series, building upon the foundations laid in this module.

---

### 7. Important Points to Remember

*   **Differentiability is Key:** A function must be infinitely differentiable at the center of expansion to have a Taylor or Maclaurin series.
*   **Convergence Matters:** The series only represents the function within its interval of convergence. Always determine the IOC.
*   **Ratio Test:** The primary tool for finding the interval of convergence.
*   **Common Series:** Memorize the Maclaurin series for $e^x$, $\sin(x)$, $\cos(x)$, $\frac{1}{1-x}$, $\frac{1}{1+x}$, $\ln(1+x)$, and $\arctan(x)$.
*   **Algebraic Manipulation:** You can derive new series by algebraically manipulating known series (e.g., substitution, differentiation, integration).
*   **Approximation Accuracy:** The more terms you use in a Taylor polynomial, the better the approximation, especially near the center of expansion.
*   **Applications:** Taylor series are crucial for approximation, limit evaluation, and solving differential equations.

---

### 8. Practice Questions and Exercises

**Instructions:** For each question, show your steps clearly.

1.  **Find the first four non-zero terms of the Maclaurin series for $f(x) = \cos(x)$.**
    *   **Answer:** $1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!}$

2.  **Find the Maclaurin series for $f(x) = e^{2x}$.**
    *   **Hint:** Use substitution in the known series for $e^x$.
    *   **Answer:** $\sum_{n=0}^{\infty} \frac{(2x)^n}{n!} = \sum_{n=0}^{\infty} \frac{2^n x^n}{n!} = 1 + 2x + \frac{4x^2}{2!} + \frac{8x^3}{3!} + \dots$

3.  **Find the Taylor series for $f(x) = \frac{1}{x}$ centered at $a=1$.**
    *   **Steps:**
        *   $f(x) = x^{-1} \implies f(1) = 1$
        *   $f'(x) = -x^{-2} \implies f'(1) = -1$
        *   $f''(x) = 2x^{-3} \implies f''(1) = 2$
        *   $f'''(x) = -6x^{-4} \implies f'''(1) = -6$
        *   $f^{(n)}(x) = (-1)^n n! x^{-(n+1)} \implies f^{(n)}(1) = (-1)^n n!$
    *   **Answer:** $\sum_{n=0}^{\infty} \frac{f^{(n)}(1)}{n!}(x-1)^n = \sum_{n=0}^{\infty} \frac{(-1)^n n!}{n!}(x-1)^n = \sum_{n=0}^{\infty} (-1)^n (x-1)^n$
    *   **Interval of Convergence:** Use ratio test for $\sum (-1)^n (x-1)^n$. Let $a_n = (-1)^n (x-1)^n$.
        $\lim_{n\to\infty} |\frac{a_{n+1}}{a_n}| = \lim_{n\to\infty} |\frac{(-1)^{n+1}(x-1)^{n+1}}{(-1)^n(x-1)^n}| = \lim_{n\to\infty} |-(x-1)| = |x-1|$.
        For convergence, $|x-1| < 1 \implies -1 < x-1 < 1 \implies 0 < x < 2$.
        At $x=0$: $\sum (-1)^n (-1)^n = \sum (-1)^{2n} = \sum 1$, diverges.
        At $x=2$: $\sum (-1)^n (1)^n = \sum (-1)^n$, diverges.
        IOC is $(0, 2)$.

4.  **Use Maclaurin series to approximate $\ln(1.1)$.**
    *   **Hint:** $\ln(1.1) = \ln(1+0.1)$. Use the Maclaurin series for $\ln(1+x)$ with $x=0.1$.
    *   **Answer:** $\ln(1+x) \approx x - \frac{x^2}{2} + \frac{x^3}{3}$.
        $\ln(1.1) \approx 0.1 - \frac{(0.1)^2}{2} + \frac{(0.1)^3}{3} = 0.1 - \frac{0.01}{2} + \frac{0.001}{3}$
        $\ln(1.1) \approx 0.1 - 0.005 + 0.0003333 = 0.0953333$.

5.  **Evaluate $\lim_{x \to 0} \frac{1 - \cos(x)}{x^2}$ using Maclaurin series.**
    *   **Steps:**
        *   Maclaurin series for $\cos(x) = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \dots$
        *   $1 - \cos(x) = 1 - (1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \dots) = \frac{x^2}{2!} - \frac{x^4}{4!} + \dots$
        *   $\frac{1 - \cos(x)}{x^2} = \frac{\frac{x^2}{2!} - \frac{x^4}{4!} + \dots}{x^2} = \frac{1}{2!} - \frac{x^2}{4!} + \dots$
    *   **Answer:** $\lim_{x \to 0} (\frac{1}{2!} - \frac{x^2}{4!} + \dots) = \frac{1}{2!} = \frac{1}{2}$.

6.  **Find the Taylor series expansion of $f(x) = \sin(x)$ about $a=0$ and determine its interval of convergence.**
    *   **Answer:** $\sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots$. The interval of convergence is $(-\infty, \infty)$.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=fNk_zzaMoEs) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |


### 9. Further Reading and References

*   **Kreyszig, Erwin. *Advanced Engineering Mathematics*. 10th ed., John Wiley & Sons, 2016.** (Primary text for this module)
*   **Ramana, B. V. *Higher Engineering Mathematics*. 39th ed., McGraw-Hill Education, 2023.** (Good for detailed examples and alternative explanations)
*   **Grewal, B. S. *Higher Engineering Mathematics*. 44th ed., Khanna Publishers, 2018.** (Another excellent resource for comprehensive coverage)
*   **Zill, Dennis G., and Patrick D. Shanahan. *Complex Analysis*. 3rd ed., Jones & Bartlett, 2015.** (For extending these concepts to complex functions and their implications for CO4)
*   **Rao, K.R., Kim, Do Nyeon, & Hwang, Jae Jeong. *Fast Fourier Transform - Algorithms and Applications*. Springer, 2011.** (While not directly about Taylor series, FFT is built upon series representations of signals, showing the broader impact of such concepts).

---