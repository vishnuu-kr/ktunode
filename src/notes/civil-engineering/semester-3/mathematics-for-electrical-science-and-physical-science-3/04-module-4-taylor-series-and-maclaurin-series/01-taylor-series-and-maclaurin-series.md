---
title: "Taylor series and Maclaurin series"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 4: Taylor series and Maclaurin series"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba8106a5"
status: "completed"
scrapedAt: "2026-05-20T18:41:31.482Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 4: Taylor Series and Maclaurin Series

### Topic: Taylor Series and Maclaurin Series

---

### 1. Introduction to Power Series

**Definition:** A power series is an infinite series of the form:
$$ \sum_{n=0}^{\infty} a_n (x-c)^n = a_0 + a_1(x-c) + a_2(x-c)^2 + a_3(x-c)^3 + \dots $$
where $a_n$ are constants, $x$ is a variable, and $c$ is a constant (the center of the series).

**Key Concepts:**

*   **Center of the Series ($c$):** The value of $x$ around which the series is expanded.
*   **Terms of the Series:** Each component $a_n (x-c)^n$.
*   **Convergence:** A power series may converge for some values of $x$ and diverge for others. The set of $x$ values for which the series converges is called the interval of convergence.

### 2. The Need for Taylor and Maclaurin Series

Many functions that are important in electrical and physical sciences, such as $e^x$, $\sin(x)$, $\cos(x)$, and $\ln(1+x)$, cannot be expressed as simple polynomials. However, approximating these functions with polynomials can simplify analysis, numerical computations, and understanding their behavior in specific regions. Taylor and Maclaurin series provide a powerful way to represent these functions as infinite sums of polynomial terms.

### 3. Taylor Series

**Concept:** A Taylor series represents a function as an infinite sum of terms calculated from the values of its derivatives at a single point, called the *center* of the expansion.

**Definition:** If a function $f(x)$ has derivatives of all orders at a point $x=c$, then the Taylor series of $f(x)$ centered at $c$ is given by:

$$ f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(c)}{n!} (x-c)^n $$

where:
*   $f^{(n)}(c)$ is the $n$-th derivative of $f(x)$ evaluated at $x=c$.
*   $f^{(0)}(c)$ means $f(c)$.
*   $n!$ is the factorial of $n$ ($0! = 1$).

**Expansion:**
$$ f(x) = f(c) + \frac{f'(c)}{1!}(x-c) + \frac{f''(c)}{2!}(x-c)^2 + \frac{f'''(c)}{3!}(x-c)^3 + \dots $$

**Polynomial Approximation (Taylor Polynomial):**
A Taylor polynomial of degree $N$, denoted by $P_N(x)$, is a finite sum of the first $N+1$ terms of the Taylor series:

$$ P_N(x) = \sum_{n=0}^{N} \frac{f^{(n)}(c)}{n!} (x-c)^n $$

This polynomial provides an approximation of $f(x)$ near the center $c$. The accuracy of the approximation generally increases as $N$ increases and as $x$ gets closer to $c$.

**Example 1: Taylor Series of $e^x$ centered at $c=1$.**

Let $f(x) = e^x$.
We need to find the derivatives of $f(x)$ and evaluate them at $c=1$.
$f(x) = e^x \implies f(1) = e^1 = e$
$f'(x) = e^x \implies f'(1) = e^1 = e$
$f''(x) = e^x \implies f''(1) = e^1 = e$
In general, $f^{(n)}(x) = e^x$, so $f^{(n)}(1) = e$ for all $n$.

Using the Taylor series formula:
$$ e^x = \sum_{n=0}^{\infty} \frac{e}{n!} (x-1)^n $$
$$ e^x = e + \frac{e}{1!}(x-1) + \frac{e}{2!}(x-1)^2 + \frac{e}{3!}(x-1)^3 + \dots $$
$$ e^x = e \left( 1 + (x-1) + \frac{(x-1)^2}{2!} + \frac{(x-1)^3}{3!} + \dots \right) $$

**Example 2: Taylor Series of $\sin(x)$ centered at $c=\frac{\pi}{2}$.**

Let $f(x) = \sin(x)$.
$f(x) = \sin(x) \implies f(\frac{\pi}{2}) = \sin(\frac{\pi}{2}) = 1$
$f'(x) = \cos(x) \implies f'(\frac{\pi}{2}) = \cos(\frac{\pi}{2}) = 0$
$f''(x) = -\sin(x) \implies f''(\frac{\pi}{2}) = -\sin(\frac{\pi}{2}) = -1$
$f'''(x) = -\cos(x) \implies f'''(\frac{\pi}{2}) = -\cos(\frac{\pi}{2}) = 0$
$f^{(4)}(x) = \sin(x) \implies f^{(4)}(\frac{\pi}{2}) = \sin(\frac{\pi}{2}) = 1$

The pattern of derivatives at $\frac{\pi}{2}$ is $1, 0, -1, 0, 1, 0, -1, 0, \dots$

Using the Taylor series formula:
$$ \sin(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(\frac{\pi}{2})}{n!} (x-\frac{\pi}{2})^n $$
$$ \sin(x) = \frac{1}{0!}(x-\frac{\pi}{2})^0 + \frac{0}{1!}(x-\frac{\pi}{2})^1 + \frac{-1}{2!}(x-\frac{\pi}{2})^2 + \frac{0}{3!}(x-\frac{\pi}{2})^3 + \frac{1}{4!}(x-\frac{\pi}{2})^4 + \dots $$
$$ \sin(x) = 1 - \frac{(x-\frac{\pi}{2})^2}{2!} + \frac{(x-\frac{\pi}{2})^4}{4!} - \frac{(x-\frac{\pi}{2})^6}{6!} + \dots $$

### 4. Maclaurin Series

**Concept:** A Maclaurin series is a special case of a Taylor series where the center of the expansion is $c=0$. This simplifies the general Taylor series formula.

**Definition:** If a function $f(x)$ has derivatives of all orders at $x=0$, then the Maclaurin series of $f(x)$ is given by:

$$ f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!} x^n $$

**Expansion:**
$$ f(x) = f(0) + \frac{f'(0)}{1!}x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + \dots $$

**Maclaurin Polynomial:**
A Maclaurin polynomial of degree $N$ is:

$$ P_N(x) = \sum_{n=0}^{N} \frac{f^{(n)}(0)}{n!} x^n $$

**Important Maclaurin Series to Memorize:**

These are fundamental and frequently used in various scientific and engineering contexts.

*   **$e^x$:**
    $$ e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + \dots = \sum_{n=0}^{\infty} \frac{x^n}{n!} $$
    (Converges for all $x$)

*   **$\sin(x)$:**
    $$ \sin(x) = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \dots = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!} $$
    (Converges for all $x$)

*   **$\cos(x)$:**
    $$ \cos(x) = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \dots = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!} $$
    (Converges for all $x$)

*   **$\frac{1}{1-x}$:**
    $$ \frac{1}{1-x} = 1 + x + x^2 + x^3 + x^4 + \dots = \sum_{n=0}^{\infty} x^n $$
    (Converges for $|x| < 1$, this is a geometric series)

*   **$\frac{1}{1+x}$:**
    $$ \frac{1}{1+x} = 1 - x + x^2 - x^3 + x^4 - \dots = \sum_{n=0}^{\infty} (-1)^n x^n $$
    (Converges for $|x| < 1$)

*   **$\ln(1+x)$:**
    $$ \ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \dots = \sum_{n=1}^{\infty} \frac{(-1)^{n-1} x^n}{n} $$
    (Converges for $-1 < x \le 1$)

*   **$\arctan(x)$:**
    $$ \arctan(x) = x - \frac{x^3}{3} + \frac{x^5}{5} - \frac{x^7}{7} + \dots = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{2n+1} $$
    (Converges for $|x| \le 1$)

**Example 3: Maclaurin Series of $\cos(x)$.**

Let $f(x) = \cos(x)$.
$f(0) = \cos(0) = 1$
$f'(x) = -\sin(x) \implies f'(0) = -\sin(0) = 0$
$f''(x) = -\cos(x) \implies f''(0) = -\cos(0) = -1$
$f'''(x) = \sin(x) \implies f'''(0) = \sin(0) = 0$
$f^{(4)}(x) = \cos(x) \implies f^{(4)}(0) = \cos(0) = 1$

The pattern of derivatives at $0$ is $1, 0, -1, 0, 1, 0, -1, 0, \dots$

Using the Maclaurin series formula:
$$ \cos(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!} x^n $$
$$ \cos(x) = \frac{1}{0!}x^0 + \frac{0}{1!}x^1 + \frac{-1}{2!}x^2 + \frac{0}{3!}x^3 + \frac{1}{4!}x^4 + \dots $$
$$ \cos(x) = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \dots $$

### 5. Operations on Taylor and Maclaurin Series

Once we have the series expansions for basic functions, we can derive series for related functions through algebraic operations:

*   **Substitution:** Replace $x$ with a function of $x$ (e.g., $x^2$, $2x$).
*   **Multiplication:** Multiply a series by a polynomial or another series.
*   **Addition/Subtraction:** Add or subtract series term-by-term.
*   **Differentiation:** Differentiate a series term-by-term.
*   **Integration:** Integrate a series term-by-term.

**Example 4: Maclaurin Series of $e^{x^2}$.**

We know the Maclaurin series for $e^u$ is:
$$ e^u = 1 + u + \frac{u^2}{2!} + \frac{u^3}{3!} + \dots $$
Substitute $u = x^2$:
$$ e^{x^2} = 1 + (x^2) + \frac{(x^2)^2}{2!} + \frac{(x^2)^3}{3!} + \dots $$
$$ e^{x^2} = 1 + x^2 + \frac{x^4}{2!} + \frac{x^6}{3!} + \dots = \sum_{n=0}^{\infty} \frac{(x^2)^n}{n!} = \sum_{n=0}^{\infty} \frac{x^{2n}}{n!} $$

**Example 5: Maclaurin Series of $\sin(x^2)$.**

We know the Maclaurin series for $\sin(u)$ is:
$$ \sin(u) = u - \frac{u^3}{3!} + \frac{u^5}{5!} - \dots $$
Substitute $u = x^2$:
$$ \sin(x^2) = (x^2) - \frac{(x^2)^3}{3!} + \frac{(x^2)^5}{5!} - \dots $$
$$ \sin(x^2) = x^2 - \frac{x^6}{3!} + \frac{x^{10}}{5!} - \dots $$

**Example 6: Maclaurin Series of $x \cos(x)$.**

We know the Maclaurin series for $\cos(x)$:
$$ \cos(x) = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \dots $$
Multiply by $x$:
$$ x \cos(x) = x \left( 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \dots \right) $$
$$ x \cos(x) = x - \frac{x^3}{2!} + \frac{x^5}{4!} - \frac{x^7}{6!} + \dots $$

**Example 7: Maclaurin Series of $\int \sin(x) dx$.**

We know the Maclaurin series for $\sin(x)$:
$$ \sin(x) = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \dots $$
Integrate term-by-term:
$$ \int \sin(x) dx = \int \left( x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \dots \right) dx $$
$$ \int \sin(x) dx = \frac{x^2}{2} - \frac{x^4}{4 \cdot 3!} + \frac{x^6}{6 \cdot 5!} - \frac{x^8}{8 \cdot 7!} + \dots + C $$
$$ \int \sin(x) dx = \frac{x^2}{2!} - \frac{x^4}{4!} + \frac{x^6}{6!} - \frac{x^8}{8!} + \dots + C $$
This corresponds to the series for $-\cos(x) + C$.

### 6. Applications in Electrical and Physical Science

Taylor and Maclaurin series are crucial for:

*   **Circuit Analysis:** Approximating nonlinear components (diodes, transistors) with linear or quadratic models around an operating point. For example, approximating the $I-V$ characteristic of a diode.
*   **Control Systems:** Analyzing system stability and designing controllers by linearizing system dynamics.
*   **Signal Processing:** Approximating complex waveforms or filter responses.
*   **Quantum Mechanics:** Expanding wave functions or potentials to solve differential equations.
*   **Thermodynamics:** Approximating equations of state or thermodynamic potentials.
*   **Numerical Methods:** Developing algorithms for solving differential equations or evaluating integrals.
*   **Approximation:** Obtaining simple polynomial approximations of transcendental functions for hand calculations or early computational systems.

**Example: Linearization of a Diode Characteristic**

A diode's current-voltage relationship is often modeled by the Shockley diode equation: $I = I_s (e^{V/(nV_T)} - 1)$, where $I_s$, $n$, and $V_T$ are constants. For small voltage variations $\Delta V$ around a DC bias voltage $V_0$, we can use a Taylor expansion to approximate the change in current.

Let $f(V) = I_s (e^{V/(nV_T)} - 1)$. We want to approximate $f(V_0 + \Delta V)$ using a Taylor series centered at $V_0$.

$$ f(V_0 + \Delta V) \approx f(V_0) + f'(V_0) \Delta V $$

$f(V_0) = I_s (e^{V_0/(nV_T)} - 1)$ (this is the DC bias current $I_0$)
$f'(V) = I_s \frac{1}{nV_T} e^{V/(nV_T)}$
$f'(V_0) = \frac{I_s}{nV_T} e^{V_0/(nV_T)}$

The change in current $\Delta I = f(V_0 + \Delta V) - f(V_0) \approx f'(V_0) \Delta V$.
$$ \Delta I \approx \frac{I_s}{nV_T} e^{V_0/(nV_T)} \Delta V $$

The term $\frac{I_s}{nV_T} e^{V_0/(nV_T)}$ is the small-signal conductance $g_m$ of the diode. So, for small signals, the diode can be approximated by a resistor with resistance $r_d = 1/g_m$. This linearization is fundamental in small-signal AC analysis of semiconductor circuits.

### 7. Important Points to Remember

*   **Center ($c$):** Crucial for Taylor series. $c=0$ gives the Maclaurin series.
*   **Derivatives:** Accuracy of approximation depends on derivatives.
*   **Convergence:** Taylor series are only approximations outside their interval of convergence.
*   **Memorization:** Knowing the basic Maclaurin series for $e^x$, $\sin(x)$, $\cos(x)$, $\frac{1}{1-x}$, and $\ln(1+x)$ is highly beneficial.
*   **Operations:** Series can be manipulated by substitution, multiplication, addition, differentiation, and integration.
*   **Applications:** These series are essential for simplifying complex functions in various scientific and engineering fields, especially for approximations and linearization.

---

### Practice Questions

**Question 1:** Find the first four terms of the Taylor series of $f(x) = \ln(x)$ centered at $c=2$.

**Question 2:** Find the Maclaurin series for $f(x) = \sin(x^2)$ by using the known Maclaurin series for $\sin(u)$.

**Question 3:** Find the first three non-zero terms of the Maclaurin series for $f(x) = e^{-x} \cos(x)$.

**Question 4:** Use series manipulation to find the Maclaurin series for $\int_0^x \frac{\sin(t)}{t} dt$.

**Question 5:** The current through a resistor is $I = V/R$. If the voltage source is slightly perturbed from $V_0$ by $\Delta V$, i.e., $V = V_0 + \Delta V$, use a first-order Taylor expansion to approximate the change in current $\Delta I$.

---

### Answers to Practice Questions

**Answer 1:**
Let $f(x) = \ln(x)$, $c=2$.
$f(x) = \ln(x) \implies f(2) = \ln(2)$
$f'(x) = 1/x \implies f'(2) = 1/2$
$f''(x) = -1/x^2 \implies f''(2) = -1/4$
$f'''(x) = 2/x^3 \implies f'''(2) = 2/8 = 1/4$

Taylor series: $f(x) = f(c) + f'(c)(x-c) + \frac{f''(c)}{2!}(x-c)^2 + \frac{f'''(c)}{3!}(x-c)^3 + \dots$
$\ln(x) = \ln(2) + \frac{1}{2}(x-2) + \frac{-1/4}{2}(x-2)^2 + \frac{1/4}{6}(x-2)^3 + \dots$
$\ln(x) = \ln(2) + \frac{1}{2}(x-2) - \frac{1}{8}(x-2)^2 + \frac{1}{24}(x-2)^3 + \dots$

**Answer 2:**
Maclaurin series for $\sin(u)$: $\sin(u) = u - \frac{u^3}{3!} + \frac{u^5}{5!} - \dots$
Substitute $u = x^2$:
$\sin(x^2) = (x^2) - \frac{(x^2)^3}{3!} + \frac{(x^2)^5}{5!} - \dots$
$\sin(x^2) = x^2 - \frac{x^6}{6} + \frac{x^{10}}{120} - \dots$

**Answer 3:**
Maclaurin series for $e^u$: $e^u = 1 + u + \frac{u^2}{2!} + \frac{u^3}{3!} + \dots$
Maclaurin series for $\cos(x)$: $\cos(x) = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \dots$
Substitute $u = -x$ into the series for $e^u$:
$e^{-x} = 1 + (-x) + \frac{(-x)^2}{2!} + \frac{(-x)^3}{3!} + \dots = 1 - x + \frac{x^2}{2} - \frac{x^3}{6} + \dots$

Now multiply $e^{-x}$ and $\cos(x)$:
$e^{-x} \cos(x) = \left(1 - x + \frac{x^2}{2} - \frac{x^3}{6} + \dots\right) \left(1 - \frac{x^2}{2} + \frac{x^4}{24} - \dots\right)$

We need the first three non-zero terms. Multiply and collect terms up to $x^2$ (since the next term likely involves $x^3$ or higher powers that cancel out in a way that makes a low-order term zero, but we should check):

Constant terms: $1 \times 1 = 1$
$x$ terms: $1 \times (-\frac{x^2}{2}) + (-x) \times 1 = -x$ (term is $-x$)
$x^2$ terms: $1 \times (\frac{x^4}{24}) + (-x) \times (-\frac{x^2}{2}) + (\frac{x^2}{2}) \times 1 = \frac{x^2}{2} + \frac{x^2}{2} = x^2$

So, the first few terms are: $1 - x + x^2$.
Let's confirm the $x^3$ term.
$x^3$ terms: $(-x) \times (-\frac{x^2}{2}) + (\frac{x^2}{2}) \times (-\frac{x^2}{2}) + (-\frac{x^3}{6}) \times 1 = \frac{x^3}{2} - \frac{x^4}{4} - \frac{x^3}{6} = \frac{2x^3}{3}$
Okay, let's be more systematic.
$e^{-x} = 1 - x + \frac{x^2}{2} - \frac{x^3}{6} + \dots$
$\cos(x) = 1 + 0x - \frac{x^2}{2} + 0x^3 + \dots$

Product:
$(1)(1) = 1$
$(1)(0x) + (-x)(1) = -x$
$(1)(-\frac{x^2}{2}) + (-x)(0x) + (\frac{x^2}{2})(1) = -\frac{x^2}{2} + \frac{x^2}{2} = 0x^2$
$(1)(0x^3) + (-x)(-\frac{x^2}{2}) + (\frac{x^2}{2})(0x) + (-\frac{x^3}{6})(1) = \frac{x^3}{2} - \frac{x^3}{6} = \frac{3x^3 - x^3}{6} = \frac{2x^3}{6} = \frac{x^3}{3}$

So, $e^{-x}\cos(x) = 1 - x + 0x^2 + \frac{x^3}{3} + \dots$
The first three non-zero terms are $1$, $-x$, and $\frac{x^3}{3}$.
(Self-correction: The question asked for *non-zero* terms. My initial collection of terms was slightly hasty.)

**Answer 4:**
Maclaurin series for $\frac{1}{1-t} = 1 + t + t^2 + t^3 + \dots$
Substitute $t = -u^2$:
$\frac{1}{1-(-u^2)} = \frac{1}{1+u^2} = 1 + (-u^2) + (-u^2)^2 + (-u^2)^3 + \dots$
$\frac{1}{1+u^2} = 1 - u^2 + u^4 - u^6 + \dots$

Now, we know that $\frac{d}{du} \arctan(u) = \frac{1}{1+u^2}$.
So, $\arctan(x) = \int_0^x \frac{1}{1+t^2} dt = \int_0^x (1 - t^2 + t^4 - t^6 + \dots) dt$
$\arctan(x) = \left[ t - \frac{t^3}{3} + \frac{t^5}{5} - \frac{t^7}{7} + \dots \right]_0^x$
$\arctan(x) = x - \frac{x^3}{3} + \frac{x^5}{5} - \frac{x^7}{7} + \dots$

This is for $\arctan(x)$. The question asks for $\int_0^x \frac{\sin(t)}{t} dt$.
We need the series for $\frac{\sin(t)}{t}$.
$\sin(t) = t - \frac{t^3}{3!} + \frac{t^5}{5!} - \frac{t^7}{7!} + \dots$
$\frac{\sin(t)}{t} = \frac{1}{t} \left( t - \frac{t^3}{3!} + \frac{t^5}{5!} - \frac{t^7}{7!} + \dots \right)$
$\frac{\sin(t)}{t} = 1 - \frac{t^2}{3!} + \frac{t^4}{5!} - \frac{t^6}{7!} + \dots$

Now integrate term-by-term:
$\int_0^x \frac{\sin(t)}{t} dt = \int_0^x \left( 1 - \frac{t^2}{3!} + \frac{t^4}{5!} - \frac{t^6}{7!} + \dots \right) dt$
$= \left[ t - \frac{t^3}{3 \cdot 3!} + \frac{t^5}{5 \cdot 5!} - \frac{t^7}{7 \cdot 7!} + \dots \right]_0^x$
$= x - \frac{x^3}{3 \cdot 6} + \frac{x^5}{5 \cdot 120} - \frac{x^7}{7 \cdot 5040} + \dots$
$= x - \frac{x^3}{18} + \frac{x^5}{600} - \frac{x^7}{35280} + \dots$

**Answer 5:**
Let $f(V) = I$. $I = V/R$.
We want to approximate $f(V_0 + \Delta V)$ using a first-order Taylor expansion around $V_0$.
$f(V_0 + \Delta V) \approx f(V_0) + f'(V_0) \Delta V$

The change in current is $\Delta I = f(V_0 + \Delta V) - f(V_0)$.
So, $\Delta I \approx f'(V_0) \Delta V$.

$f(V) = V/R$
$f'(V) = 1/R$
$f'(V_0) = 1/R$

Therefore, $\Delta I \approx \frac{1}{R} \Delta V$. This is expected for a linear resistor. The first-order approximation of a linear function is the function itself.
