---
title: "cubic spline"
subject: "NUMERICAL TECHNIQUES ENGINEERING"
module: "Module 2: Curve fitting: Interpolation"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf48044646ae"
status: "completed"
scrapedAt: "2026-05-20T18:23:11.214Z"
---
# NUMERICAL TECHNIQUES ENGINEERING: Module 2: Curve Fitting: Interpolation - Cubic Spline

## Introduction to Interpolation

Interpolation is a method of constructing new data points within the range of a discrete set of known data points. It is widely used in various engineering fields to approximate functions or to smooth out noisy data.

**Key Concepts:**

*   **Interpolation:** The process of finding a function that passes through a given set of data points.
*   **Data Points:** A set of known pairs of independent and dependent variables, often denoted as $(x_0, y_0), (x_1, y_1), \dots, (x_n, y_n)$.
*   **Interpolating Function:** The function derived from the interpolation process that goes through all the given data points.

## Cubic Spline Interpolation

Cubic spline interpolation is a popular and effective method for fitting a smooth curve through a set of data points. It involves constructing a series of cubic polynomials, where each polynomial interpolates between two consecutive data points. The key to a "spline" is that these polynomial segments are joined together smoothly.

**Learning Outcome Covered:**

*   Implement numerical schemes to fit data (CO2) - This topic directly addresses fitting data using a specific numerical scheme.

**Course Outcome Alignment:**

*   **CO2: Implement numerical schemes to fit data (Knowledge Level: K3)** - This module focuses on applying and implementing interpolation techniques, including cubic splines, to fit data.

### What is a Cubic Spline?

A cubic spline is a piecewise cubic polynomial that interpolates a set of $n+1$ data points $(x_0, y_0), (x_1, y_1), \dots, (x_n, y_n)$. The spline $S(x)$ is defined as:

$S(x) = S_i(x)$ for $x_i \le x \le x_{i+1}$, where $i = 0, 1, \dots, n-1$.

Each $S_i(x)$ is a cubic polynomial of the form:

$S_i(x) = a_i + b_i(x - x_i) + c_i(x - x_i)^2 + d_i(x - x_i)^3$

where $a_i, b_i, c_i, d_i$ are coefficients to be determined.

### Conditions for Cubic Splines

To uniquely determine the coefficients of the cubic spline, we need a total of $4n$ conditions. These conditions are derived from the requirement that the spline smoothly passes through the data points and its derivatives are continuous at the interior points.

1.  **Interpolation Conditions (n+1 conditions):** The spline must pass through each data point.
    $S_i(x_i) = y_i$ for $i = 0, 1, \dots, n-1$
    $S_{n-1}(x_n) = y_n$

    This implies:
    $a_i = y_i$ for $i = 0, 1, \dots, n-1$.

2.  **Continuity of the First Derivative (n-1 conditions):** The first derivative of adjacent spline segments must be equal at the interior points.
    $S_i'(x_{i+1}) = S_{i+1}'(x_{i+1})$ for $i = 0, 1, \dots, n-2$.

3.  **Continuity of the Second Derivative (n-1 conditions):** The second derivative of adjacent spline segments must be equal at the interior points.
    $S_i''(x_{i+1}) = S_{i+1}''(x_{i+1})$ for $i = 0, 1, \dots, n-2$.

We have $n$ cubic polynomials, each with 4 coefficients, totaling $4n$ coefficients. The conditions above give us: $(n+1) + (n-1) + (n-1) = 3n - 1$ conditions. This leaves us with one degree of freedom, meaning we need one additional condition to uniquely define the spline. This is where different types of cubic splines come into play.

### Types of Cubic Splines

The choice of the additional condition determines the type of cubic spline:

1.  **Natural Cubic Spline:** The second derivative at the endpoints is zero.
    $S_0''(x_0) = 0$
    $S_{n-1}''(x_n) = 0$

2.  **Clamped Cubic Spline:** The first derivative at the endpoints is specified (often based on the slope of the function at the boundaries, if known).
    $S_0'(x_0) = f'(x_0)$
    $S_{n-1}'(x_n) = f'(x_n)$

3.  **Not-a-Knot Cubic Spline:** The third derivative is continuous at the first and last interior knots ($x_1$ and $x_{n-1}$). This effectively means the first two cubic polynomials are the same, and the last two cubic polynomials are the same. This avoids the potentially undesirable zero curvature at the endpoints of natural splines.

### Derivation of Coefficients and System of Equations

Let's focus on deriving the coefficients for a **natural cubic spline** as it's a common and illustrative case. The approach for other splines will be similar, with variations in the boundary conditions.

Consider two consecutive segments $S_{i-1}(x)$ and $S_i(x)$ for $x_{i-1} \le x \le x_i$ and $x_i \le x \le x_{i+1}$.

Let $S_i(x) = a_i + b_i(x - x_i) + c_i(x - x_i)^2 + d_i(x - x_i)^3$.
We know $a_i = y_i$.

First derivative: $S_i'(x) = b_i + 2c_i(x - x_i) + 3d_i(x - x_i)^2$
Second derivative: $S_i''(x) = 2c_i + 6d_i(x - x_i)$

Let $M_i = S_i''(x_i)$.
Then, $S_i''(x_i) = 2c_i = M_i \implies c_i = M_i / 2$.
Also, $S_i''(x_{i+1}) = 2c_i + 6d_i(x_{i+1} - x_i) = M_{i+1}$.
Substituting $c_i = M_i/2$:
$M_i + 6d_i(x_{i+1} - x_i) = M_{i+1}$
$6d_i(x_{i+1} - x_i) = M_{i+1} - M_i$
$d_i = \frac{M_{i+1} - M_i}{6(x_{i+1} - x_i)}$

Let $h_i = x_{i+1} - x_i$.
$d_i = \frac{M_{i+1} - M_i}{6h_i}$

Now let's find $b_i$:
$S_i'(x_i) = b_i = S_{i-1}'(x_i)$ (continuity of first derivative at $x_i$).
From $S_i(x) = a_i + b_i(x - x_i) + c_i(x - x_i)^2 + d_i(x - x_i)^3$:
$S_i(x_{i+1}) = y_{i+1} = a_i + b_i(x_{i+1} - x_i) + c_i(x_{i+1} - x_i)^2 + d_i(x_{i+1} - x_i)^3$
$y_{i+1} = y_i + b_i h_i + c_i h_i^2 + d_i h_i^3$
$y_{i+1} = y_i + b_i h_i + \frac{M_i}{2} h_i^2 + \frac{M_{i+1} - M_i}{6h_i} h_i^3$
$y_{i+1} = y_i + b_i h_i + \frac{M_i}{2} h_i^2 + \frac{M_{i+1} - M_i}{6} h_i^2$
$y_{i+1} - y_i = b_i h_i + \frac{M_i h_i^2}{2} + \frac{M_{i+1} h_i^2}{6} - \frac{M_i h_i^2}{6}$
$y_{i+1} - y_i = b_i h_i + \frac{M_i h_i^2}{3} + \frac{M_{i+1} h_i^2}{6}$
$b_i h_i = (y_{i+1} - y_i) - \frac{M_i h_i^2}{3} - \frac{M_{i+1} h_i^2}{6}$
$b_i = \frac{y_{i+1} - y_i}{h_i} - \frac{M_i h_i}{3} - \frac{M_{i+1} h_i}{6}$

Now, we use the continuity of the first derivative at $x_i$: $S_{i-1}'(x_i) = S_i'(x_i)$.
$S_{i-1}'(x_i) = b_{i-1} + 2c_{i-1}(x_i - x_{i-1}) + 3d_{i-1}(x_i - x_{i-1})^2$
$S_{i-1}'(x_i) = b_{i-1} + 2(\frac{M_{i-1}}{2})h_{i-1} + 3(\frac{M_i - M_{i-1}}{6h_{i-1}})h_{i-1}^2$
$S_{i-1}'(x_i) = b_{i-1} + M_{i-1}h_{i-1} + \frac{M_i - M_{i-1}}{2}h_{i-1}$
$S_{i-1}'(x_i) = b_{i-1} + \frac{M_{i-1}h_{i-1}}{2} + \frac{M_i h_{i-1}}{2}$

Equating $S_{i-1}'(x_i)$ and $S_i'(x_i)$:
$b_{i-1} + \frac{M_{i-1}h_{i-1}}{2} + \frac{M_i h_{i-1}}{2} = b_i + 2c_i(x_i - x_i) + 3d_i(x_i - x_i)^2$
$b_{i-1} + \frac{M_{i-1}h_{i-1}}{2} + \frac{M_i h_{i-1}}{2} = b_i$

Substitute the expression for $b_i$:
$b_{i-1} + \frac{M_{i-1}h_{i-1}}{2} + \frac{M_i h_{i-1}}{2} = \frac{y_i - y_{i-1}}{h_{i-1}} - \frac{M_{i-1} h_{i-1}}{3} - \frac{M_i h_{i-1}}{6}$

Rearranging terms to group $M$ values:
$\frac{M_{i-1}h_{i-1}}{2} + \frac{M_i h_{i-1}}{2} + \frac{M_{i-1} h_{i-1}}{3} + \frac{M_i h_{i-1}}{6} = \frac{y_i - y_{i-1}}{h_{i-1}} - b_{i-1}$
$M_{i-1}(\frac{1}{2} + \frac{1}{3})h_{i-1} + M_i(\frac{1}{2} + \frac{1}{6})h_{i-1} = \frac{y_i - y_{i-1}}{h_{i-1}} - b_{i-1}$
$M_{i-1}(\frac{5}{6})h_{i-1} + M_i(\frac{4}{6})h_{i-1} = \frac{y_i - y_{i-1}}{h_{i-1}} - b_{i-1}$

This seems complicated. A more direct approach leads to a tridiagonal system.
Let's rewrite $S_i''(x)$ in terms of $M_i$ and $M_{i+1}$:
$S_i''(x) = M_i \frac{x_{i+1}-x}{h_i} + M_{i+1} \frac{x-x_i}{h_i}$

Integrating $S_i''(x)$ twice to get $S_i(x)$:
$\int S_i''(x) dx = \int \left( M_i \frac{x_{i+1}-x}{h_i} + M_{i+1} \frac{x-x_i}{h_i} \right) dx$
$S_i'(x) = M_i \frac{(x_{i+1}-x)^2}{2h_i}(-1) + M_{i+1} \frac{(x-x_i)^2}{2h_i} + C_1$
$S_i'(x) = \frac{M_i}{2h_i}(x_{i+1}-x)^2 + \frac{M_{i+1}}{2h_i}(x-x_i)^2 + C_1$

At $x=x_i$: $S_i'(x_i) = \frac{M_i h_i^2}{2h_i} + 0 + C_1 = \frac{M_i h_i}{2} + C_1$. Let this be $b_i$.
$b_i = \frac{M_i h_i}{2} + C_1 \implies C_1 = b_i - \frac{M_i h_i}{2}$.

$S_i'(x) = \frac{M_i}{2h_i}(x_{i+1}-x)^2 + \frac{M_{i+1}}{2h_i}(x-x_i)^2 + b_i - \frac{M_i h_i}{2}$

Integrating $S_i'(x)$ to get $S_i(x)$:
$S_i(x) = \int \left( \frac{M_i}{2h_i}(x_{i+1}-x)^2 + \frac{M_{i+1}}{2h_i}(x-x_i)^2 + b_i - \frac{M_i h_i}{2} \right) dx$
$S_i(x) = \frac{M_i}{2h_i} \frac{(x_{i+1}-x)^3}{3}(-1) + \frac{M_{i+1}}{2h_i} \frac{(x-x_i)^3}{3} + (b_i - \frac{M_i h_i}{2})x + C_2$
$S_i(x) = -\frac{M_i}{6h_i}(x_{i+1}-x)^3 + \frac{M_{i+1}}{6h_i}(x-x_i)^3 + (b_i - \frac{M_i h_i}{2})x + C_2$

Using $S_i(x_i) = y_i$:
$y_i = 0 + \frac{M_{i+1}}{6h_i}(x_i-x_i)^3 + (b_i - \frac{M_i h_i}{2})x_i + C_2$
$y_i = (b_i - \frac{M_i h_i}{2})x_i + C_2$
$C_2 = y_i - b_i x_i + \frac{M_i h_i x_i}{2}$

Using $S_i(x_{i+1}) = y_{i+1}$:
$y_{i+1} = -\frac{M_i}{6h_i}(x_{i+1}-x_{i+1})^3 + \frac{M_{i+1}}{6h_i}(x_{i+1}-x_i)^3 + (b_i - \frac{M_i h_i}{2})x_{i+1} + C_2$
$y_{i+1} = \frac{M_{i+1}}{6h_i}h_i^3 + (b_i - \frac{M_i h_i}{2})x_{i+1} + C_2$
$y_{i+1} = \frac{M_{i+1} h_i^2}{6} + (b_i - \frac{M_i h_i}{2})x_{i+1} + y_i - b_i x_i + \frac{M_i h_i x_i}{2}$
$y_{i+1} - y_i = \frac{M_{i+1} h_i^2}{6} + b_i x_{i+1} - \frac{M_i h_i x_{i+1}}{2} - b_i x_i + \frac{M_i h_i x_i}{2}$
$y_{i+1} - y_i = \frac{M_{i+1} h_i^2}{6} + b_i (x_{i+1} - x_i) - \frac{M_i h_i}{2}(x_{i+1} - x_i)$
$y_{i+1} - y_i = \frac{M_{i+1} h_i^2}{6} + b_i h_i - \frac{M_i h_i^2}{2}$

This matches our previous result for $b_i$:
$b_i = \frac{y_{i+1} - y_i}{h_i} - \frac{M_{i+1} h_i}{6} + \frac{M_i h_i}{2}$. (Sign correction in derivation of $b_i$ earlier).

Now, let's go back to the continuity of the first derivative: $S_{i-1}'(x_i) = S_i'(x_i)$.
$S_i'(x_i) = b_i$
$S_{i-1}'(x_i) = \frac{M_{i-1}}{2h_{i-1}}(x_{i+1}-x_i)^2 + \frac{M_i}{2h_{i-1}}(x_i-x_{i-1})^2 + b_{i-1} - \frac{M_{i-1} h_{i-1}}{2}$
Wait, the indices in $S_{i-1}'(x)$ should be $x_i$, not $x_{i+1}$.
$S_{i-1}'(x) = \frac{M_{i-1}}{2h_{i-1}}(x_{i}-x)^2 + \frac{M_i}{2h_{i-1}}(x-x_{i-1})^2 + b_{i-1} - \frac{M_{i-1} h_{i-1}}{2}$

So at $x=x_i$:
$S_{i-1}'(x_i) = \frac{M_{i-1}}{2h_{i-1}}(x_i-x_i)^2 + \frac{M_i}{2h_{i-1}}(x_i-x_{i-1})^2 + b_{i-1} - \frac{M_{i-1} h_{i-1}}{2}$
$S_{i-1}'(x_i) = 0 + \frac{M_i}{2h_{i-1}}h_{i-1}^2 + b_{i-1} - \frac{M_{i-1} h_{i-1}}{2}$
$S_{i-1}'(x_i) = \frac{M_i h_{i-1}}{2} + b_{i-1} - \frac{M_{i-1} h_{i-1}}{2}$

Equating $S_{i-1}'(x_i) = S_i'(x_i) = b_i$:
$\frac{M_i h_{i-1}}{2} + b_{i-1} - \frac{M_{i-1} h_{i-1}}{2} = b_i$

Substitute the expression for $b_i$ and $b_{i-1}$:
$\frac{M_i h_{i-1}}{2} + \left(\frac{y_{i-1} - y_{i-2}}{h_{i-2}} - \frac{M_{i-1} h_{i-2}}{6} - \frac{M_{i-2} h_{i-2}}{3}\right) - \frac{M_{i-1} h_{i-1}}{2} = \left(\frac{y_i - y_{i-1}}{h_{i-1}} - \frac{M_{i-1} h_{i-1}}{3} - \frac{M_i h_{i-1}}{6}\right)$

This is getting messy. Let's use the continuity of the second derivative directly for the system.
$S_i''(x) = 2c_i + 6d_i(x-x_i)$
$S_{i-1}''(x) = 2c_{i-1} + 6d_{i-1}(x-x_{i-1})$

At $x=x_i$:
$S_i''(x_i) = 2c_i = M_i$
$S_{i-1}''(x_i) = 2c_{i-1} + 6d_{i-1}(x_i-x_{i-1}) = 2c_{i-1} + 6d_{i-1}h_{i-1}$

Using $c_i = M_i/2$ and $d_i = \frac{M_{i+1} - M_i}{6h_i}$:
$M_i = 2c_{i-1} + 6\left(\frac{M_i - M_{i-1}}{6h_{i-1}}\right)h_{i-1}$
$M_i = 2c_{i-1} + M_i - M_{i-1}$
$0 = 2c_{i-1} - M_{i-1}$
$c_{i-1} = M_{i-1}/2$. This is consistent.

Let's use $S_i''(x) = M_i \frac{x_{i+1}-x}{h_i} + M_{i+1} \frac{x-x_i}{h_i}$.
For continuity at $x_i$, $S_{i-1}''(x_i) = S_i''(x_i)$.
$S_{i-1}''(x_i) = M_{i-1} \frac{x_{i+1}-x_i}{h_{i-1}} + M_i \frac{x_i-x_{i-1}}{h_{i-1}}$ (This assumes the segments are indexed from i to i+1).
Let's re-index to be clear.

Let the spline segments be $S_i(x)$ for $x_i \le x \le x_{i+1}$, $i=0, \dots, n-1$.
$S_i''(x) = M_i \frac{x_{i+1}-x}{h_i} + M_{i+1} \frac{x-x_i}{h_i}$

For continuity of the second derivative at $x_i$ ($i=1, \dots, n-1$):
$S_{i-1}''(x_i) = M_{i-1} \frac{x_{i+1}-x_i}{h_{i-1}} + M_i \frac{x_i-x_{i-1}}{h_{i-1}}$ (This is actually $S_{i-1}''(x)$ at $x=x_i$).

The correct relationship derived from continuity of $S''(x)$ is:
$S_{i-1}''(x_i) = M_{i-1} \frac{x_i - x_{i-1}}{h_{i-1}} + M_i \frac{x_i - x_i}{h_{i-1}}$ is incorrect.
The definition is $S_i''(x)$ is for the interval $[x_i, x_{i+1}]$.
So, at $x_i$:
$S_{i-1}''(x_i) = M_{i-1} \frac{x_{i+1}-x_i}{h_{i-1}} + M_i \frac{x_i-x_{i-1}}{h_{i-1}}$ where $x_{i+1}$ is incorrect.

Let's use the form from Chapra, Chapter 18.
$S_i(x) = a_i + b_i(x-x_i) + c_i(x-x_i)^2 + d_i(x-x_i)^3$
$S_i''(x) = 2c_i + 6d_i(x-x_i)$
Let $M_i = S_i''(x_i)$. Then $c_i = M_i/2$.
Let $M_{i+1} = S_i''(x_{i+1})$. Then $M_{i+1} = 2c_i + 6d_i h_i = M_i + 6d_i h_i$.
$d_i = \frac{M_{i+1} - M_i}{6h_i}$.
$a_i = y_i$.
$b_i = \frac{y_{i+1}-y_i}{h_i} - \frac{M_{i+1}h_i}{3} - \frac{M_i h_i}{6}$.

Continuity of first derivative $S_{i-1}'(x_i) = S_i'(x_i)$:
$S_{i-1}'(x_i) = b_{i-1} + 2c_{i-1}h_{i-1} + 3d_{i-1}h_{i-1}^2$
$S_i'(x_i) = b_i$

$b_{i-1} + 2(\frac{M_{i-1}}{2})h_{i-1} + 3(\frac{M_i - M_{i-1}}{6h_{i-1}})h_{i-1}^2 = b_i$
$b_{i-1} + M_{i-1}h_{i-1} + \frac{M_i - M_{i-1}}{2}h_{i-1} = b_i$

Substitute $b_i$ and $b_{i-1}$:
$\left(\frac{y_i-y_{i-1}}{h_{i-1}} - \frac{M_i h_{i-1}}{3} - \frac{M_{i-1} h_{i-1}}{6}\right) + M_{i-1}h_{i-1} + \frac{M_i h_{i-1}}{2} - \frac{M_{i-1} h_{i-1}}{2} = \frac{y_{i+1}-y_i}{h_i} - \frac{M_{i+1}h_i}{3} - \frac{M_i h_i}{6}$

This approach involves relating $b_i$ to $M_i$ and $M_{i+1}$, and then using first derivative continuity.
A more direct approach for the system of equations for $M_i$ comes from integrating the second derivative equality:
$S_i''(x) = M_i \frac{x_{i+1}-x}{h_i} + M_{i+1} \frac{x-x_i}{h_i}$
$S_{i-1}''(x) = M_{i-1} \frac{x_i-x}{h_{i-1}} + M_i \frac{x-x_{i-1}}{h_{i-1}}$

Condition: $S_{i-1}''(x_i) = S_i''(x_i)$.
$S_i''(x_i) = M_i$.
$S_{i-1}''(x_i) = M_{i-1} \frac{x_i-x_i}{h_{i-1}} + M_i \frac{x_i-x_{i-1}}{h_{i-1}} = M_i \frac{h_{i-1}}{h_{i-1}} = M_i$. This is trivially true and doesn't help.

The equation derived from $S_{i-1}'(x_i) = S_i'(x_i)$ is the one that leads to the system.
Let's simplify the equation $b_{i-1} + M_{i-1}h_{i-1} + \frac{M_i h_{i-1}}{2} - \frac{M_{i-1} h_{i-1}}{2} = b_i$:
$b_{i-1} + \frac{M_{i-1} h_{i-1}}{2} + \frac{M_i h_{i-1}}{2} = b_i$

Substitute $b_i = \frac{y_{i+1}-y_i}{h_i} - \frac{M_{i+1}h_i}{3} - \frac{M_i h_i}{6}$:
$\frac{y_i-y_{i-1}}{h_{i-1}} - \frac{M_i h_{i-1}}{3} - \frac{M_{i-1} h_{i-1}}{6} + \frac{M_{i-1} h_{i-1}}{2} + \frac{M_i h_{i-1}}{2} = \frac{y_{i+1}-y_i}{h_i} - \frac{M_{i+1}h_i}{3} - \frac{M_i h_i}{6}$

Group terms with $M$:
$M_{i-1} (-\frac{h_{i-1}}{6} + \frac{h_{i-1}}{2}) + M_i (-\frac{h_{i-1}}{3} + \frac{h_{i-1}}{2}) + M_i (\frac{h_i}{6}) = \frac{y_{i+1}-y_i}{h_i} - \frac{y_i-y_{i-1}}{h_{i-1}}$
$M_{i-1} (\frac{2h_{i-1}}{6}) + M_i (\frac{h_{i-1}}{6}) + M_i (\frac{M_i h_i}{6})$ - Mistake here in collecting M_i terms.

Let's simplify the equality using $b_i = \frac{y_{i+1}-y_i}{h_i} - \frac{h_i}{3}(M_{i+1} + \frac{1}{2}M_i)$.
$b_{i-1} = \frac{y_i-y_{i-1}}{h_{i-1}} - \frac{h_{i-1}}{3}(M_i + \frac{1}{2}M_{i-1})$.

The condition $b_{i-1} + \frac{M_{i-1} h_{i-1}}{2} + \frac{M_i h_{i-1}}{2} = b_i$ becomes:
$\frac{y_i-y_{i-1}}{h_{i-1}} - \frac{h_{i-1}}{3}(M_i + \frac{1}{2}M_{i-1}) + \frac{M_{i-1} h_{i-1}}{2} + \frac{M_i h_{i-1}}{2} = \frac{y_{i+1}-y_i}{h_i} - \frac{h_i}{3}(M_{i+1} + \frac{1}{2}M_i)$

$M_{i-1}(-\frac{h_{i-1}}{6} + \frac{h_{i-1}}{2}) + M_i(-\frac{h_{i-1}}{3} + \frac{h_{i-1}}{2} + \frac{h_i}{6}) = \frac{y_{i+1}-y_i}{h_i} - \frac{y_i-y_{i-1}}{h_{i-1}}$

The coefficient of $M_i$ should be combined more carefully.
$b_{i-1} + \frac{M_{i-1} h_{i-1}}{2} + \frac{M_i h_{i-1}}{2} = b_i$

From $S_{i-1}(x_{i-1})=y_{i-1}$ and $S_{i-1}(x_i)=y_i$:
$b_{i-1} = \frac{y_i-y_{i-1}}{h_{i-1}} - \frac{M_i h_{i-1}}{3} - \frac{M_{i-1} h_{i-1}}{6}$

Substitute $b_i$ and $b_{i-1}$ into the continuity equation:
$\left(\frac{y_i-y_{i-1}}{h_{i-1}} - \frac{M_i h_{i-1}}{3} - \frac{M_{i-1} h_{i-1}}{6}\right) + \frac{M_{i-1} h_{i-1}}{2} + \frac{M_i h_{i-1}}{2} = \frac{y_{i+1}-y_i}{h_i} - \frac{M_{i+1}h_i}{3} - \frac{M_i h_i}{6}$

Combine $M_{i-1}$ terms:
$M_{i-1} (-\frac{h_{i-1}}{6} + \frac{h_{i-1}}{2}) = M_{i-1} \frac{2h_{i-1}}{6} = M_{i-1} \frac{h_{i-1}}{3}$

Combine $M_i$ terms:
$M_i (-\frac{h_{i-1}}{3} + \frac{h_{i-1}}{2} + \frac{h_i}{6}) = M_i (\frac{-2h_{i-1} + 3h_{i-1}}{6} + \frac{h_i}{6}) = M_i (\frac{h_{i-1} + h_i}{6})$

Combine $M_{i+1}$ terms (on the right side):
$M_{i+1} (-\frac{h_i}{3})$

Rearrange the equation:
$\frac{h_{i-1}}{3}M_{i-1} + \frac{h_{i-1} + h_i}{6}M_i + \frac{h_i}{3}M_{i+1} = \frac{y_{i+1}-y_i}{h_i} - \frac{y_i-y_{i-1}}{h_{i-1}}$

This is the system of linear equations for $M_0, M_1, \dots, M_n$.
Let's rewrite it for $i = 1, \dots, n-1$.

$\frac{h_{i-1}}{6}M_{i-1} + \frac{h_{i-1} + h_i}{3}M_i + \frac{h_i}{6}M_{i+1} = \frac{y_{i+1}-y_i}{h_i} - \frac{y_i-y_{i-1}}{h_{i-1}}$

This form is common and useful.
This is a tridiagonal system of equations for the unknown $M_i$.

**Boundary Conditions:**

*   **Natural Cubic Spline:**
    $M_0 = 0$
    $M_n = 0$
    The system of equations becomes for $i = 1, \dots, n-1$:
    $\frac{h_{i-1}}{6}M_{i-1} + \frac{h_{i-1} + h_i}{3}M_i + \frac{h_i}{6}M_{i+1} = \frac{y_{i+1}-y_i}{h_i} - \frac{y_i-y_{i-1}}{h_{i-1}}$

*   **Clamped Cubic Spline:**
    $S_0'(x_0) = f'(x_0)$ and $S_{n-1}'(x_n) = f'(x_n)$.
    Using $S_0'(x_0) = b_0$:
    $b_0 = \frac{y_1-y_0}{h_0} - \frac{M_1 h_0}{3} - \frac{M_0 h_0}{6} = f'(x_0)$.
    $M_0 (\frac{h_0}{6}) + M_1 (\frac{h_0}{3}) = \frac{y_1-y_0}{h_0} - f'(x_0)$.
    Similarly for the last segment:
    $S_{n-1}'(x_n) = b_{n-1} + 2c_{n-1}h_{n-1} + 3d_{n-1}h_{n-1}^2 = f'(x_n)$.
    $S_{n-1}'(x_n) = b_{n-1} + M_{n-1}h_{n-1} + \frac{M_n - M_{n-1}}{2}h_{n-1} = f'(x_n)$.
    Substitute $b_{n-1}$:
    $\frac{y_n-y_{n-1}}{h_{n-1}} - \frac{M_{n-1} h_{n-1}}{3} - \frac{M_{n-2} h_{n-1}}{6}$ - this is $b_{n-1}$ in terms of $M_{n-2}, M_{n-1}$.
    The relation for clamped spline comes from $S_{n-1}'(x_n) = f'(x_n)$.
    $S_{n-1}'(x_n) = b_{n-1} + 2c_{n-1}h_{n-1} + 3d_{n-1}h_{n-1}^2$.
    $S_{n-1}''(x_n) = M_n$.
    $S_{n-1}'(x_n) = S_{n-1}'(x_{n-1}) + \int_{x_{n-1}}^{x_n} S_{n-1}''(x) dx$
    $f'(x_n) = S_{n-1}'(x_{n-1}) + \int_{x_{n-1}}^{x_n} \left( M_{n-1} \frac{x_n-x}{h_{n-1}} + M_n \frac{x-x_{n-1}}{h_{n-1}} \right) dx$
    $f'(x_n) = S_{n-1}'(x_{n-1}) + \left[ M_{n-1} \frac{(x_n-x)^2}{2h_{n-1}}(-1) + M_n \frac{(x-x_{n-1})^2}{2h_{n-1}} \right]_{x_{n-1}}^{x_n}$
    $f'(x_n) = S_{n-1}'(x_{n-1}) + (0 + M_n \frac{h_{n-1}^2}{2h_{n-1}}) - (-M_{n-1} \frac{h_{n-1}^2}{2h_{n-1}} + 0)$
    $f'(x_n) = S_{n-1}'(x_{n-1}) + \frac{M_n h_{n-1}}{2} + \frac{M_{n-1} h_{n-1}}{2}$
    Also, $S_{n-1}'(x_{n-1}) = b_{n-1}$.
    $f'(x_n) = b_{n-1} + \frac{M_{n-1} h_{n-1}}{2} + \frac{M_n h_{n-1}}{2}$
    $f'(x_n) = \left(\frac{y_n-y_{n-1}}{h_{n-1}} - \frac{M_n h_{n-1}}{3} - \frac{M_{n-1} h_{n-1}}{6}\right) + \frac{M_{n-1} h_{n-1}}{2} + \frac{M_n h_{n-1}}{2}$
    $f'(x_n) = \frac{y_n-y_{n-1}}{h_{n-1}} + M_{n-1}(\frac{h_{n-1}}{2} - \frac{h_{n-1}}{6}) + M_n(\frac{h_{n-1}}{2} - \frac{h_{n-1}}{3})$
    $f'(x_n) = \frac{y_n-y_{n-1}}{h_{n-1}} + M_{n-1}\frac{2h_{n-1}}{6} + M_n\frac{h_{n-1}}{6}$
    $f'(x_n) = \frac{y_n-y_{n-1}}{h_{n-1}} + \frac{h_{n-1}}{3}M_{n-1} + \frac{h_{n-1}}{6}M_n$
    This gives: $\frac{h_{n-1}}{3}M_{n-1} + \frac{h_{n-1}}{6}M_n = f'(x_n) - \frac{y_n-y_{n-1}}{h_{n-1}}$.

    And the first equation: $S_0'(x_0) = f'(x_0)$.
    $S_0'(x_0) = b_0 = \frac{y_1-y_0}{h_0} - \frac{M_1 h_0}{3} - \frac{M_0 h_0}{6}$.
    $f'(x_0) = \frac{y_1-y_0}{h_0} - \frac{h_0}{3}M_1 - \frac{h_0}{6}M_0$.
    This gives: $-\frac{h_0}{6}M_0 - \frac{h_0}{3}M_1 = f'(x_0) - \frac{y_1-y_0}{h_0}$.

    For clamped splines, the system is:
    $i=0$: $-\frac{h_0}{6}M_0 - \frac{h_0}{3}M_1 = f'(x_0) - \frac{y_1-y_0}{h_0}$
    $i=1, \dots, n-1$: $\frac{h_{i-1}}{6}M_{i-1} + \frac{h_{i-1} + h_i}{3}M_i + \frac{h_i}{6}M_{i+1} = \frac{y_{i+1}-y_i}{h_i} - \frac{y_i-y_{i-1}}{h_{i-1}}$
    $i=n$: $\frac{h_{n-1}}{3}M_{n-1} + \frac{h_{n-1}}{6}M_n = f'(x_n) - \frac{y_n-y_{n-1}}{h_{n-1}}$

### Algorithm to Construct a Cubic Spline

1.  **Given:** A set of $n+1$ data points $(x_0, y_0), (x_1, y_1), \dots, (x_n, y_n)$.
2.  **Calculate:** The widths of the intervals: $h_i = x_{i+1} - x_i$ for $i = 0, 1, \dots, n-1$.
3.  **Set up the System of Equations for $M_i$:**
    *   **For Natural Cubic Spline:**
        *   $M_0 = 0$
        *   $M_n = 0$
        *   For $i = 1, \dots, n-1$:
            $\frac{h_{i-1}}{6}M_{i-1} + \frac{h_{i-1} + h_i}{3}M_i + \frac{h_i}{6}M_{i+1} = \frac{y_{i+1}-y_i}{h_i} - \frac{y_i-y_{i-1}}{h_{i-1}}$
    *   **For Clamped Cubic Spline:** (Requires $f'(x_0)$ and $f'(x_n)$)
        *   $-\frac{h_0}{6}M_0 - \frac{h_0}{3}M_1 = f'(x_0) - \frac{y_1-y_0}{h_0}$
        *   For $i = 1, \dots, n-1$:
            $\frac{h_{i-1}}{6}M_{i-1} + \frac{h_{i-1} + h_i}{3}M_i + \frac{h_i}{6}M_{i+1} = \frac{y_{i+1}-y_i}{h_i} - \frac{y_i-y_{i-1}}{h_{i-1}}$
        *   $\frac{h_{n-1}}{3}M_{n-1} + \frac{h_{n-1}}{6}M_n = f'(x_n) - \frac{y_n-y_{n-1}}{h_{n-1}}$
4.  **Solve the Tridiagonal System:** Use a suitable method (e.g., Thomas algorithm) to find the values of $M_0, M_1, \dots, M_n$.
5.  **Calculate the Coefficients:** For each interval $i=0, \dots, n-1$:
    *   $a_i = y_i$
    *   $b_i = \frac{y_{i+1}-y_i}{h_i} - \frac{M_{i+1}h_i}{3} - \frac{M_i h_i}{6}$
    *   $c_i = M_i/2$
    *   $d_i = \frac{M_{i+1} - M_i}{6h_i}$
6.  **Form the Spline:** The cubic spline is given by $S(x) = S_i(x) = a_i + b_i(x-x_i) + c_i(x-x_i)^2 + d_i(x-x_i)^3$ for $x_i \le x \le x_{i+1}$.

### Example: Natural Cubic Spline Interpolation

**Problem:** Fit a natural cubic spline to the following data points:
$(x_0, y_0) = (0, 1)$
$(x_1, y_1) = (1, 2)$
$(x_2, y_2) = (2, 4)$
$(x_3, y_3) = (3, 8)$

**Solution:**
Here, $n=3$. The data points are $(x_0, y_0), (x_1, y_1), (x_2, y_2), (x_3, y_3)$.

1.  **Calculate $h_i$:**
    $h_0 = x_1 - x_0 = 1 - 0 = 1$
    $h_1 = x_2 - x_1 = 2 - 1 = 1$
    $h_2 = x_3 - x_2 = 3 - 2 = 1$

2.  **Set up the System for $M_i$ (Natural Cubic Spline):**
    $M_0 = 0$
    $M_3 = 0$

    For $i=1$:
    $\frac{h_0}{6}M_0 + \frac{h_0 + h_1}{3}M_1 + \frac{h_1}{6}M_2 = \frac{y_2-y_1}{h_1} - \frac{y_1-y_0}{h_0}$
    $\frac{1}{6}(0) + \frac{1+1}{3}M_1 + \frac{1}{6}M_2 = \frac{4-2}{1} - \frac{2-1}{1}$
    $0 + \frac{2}{3}M_1 + \frac{1}{6}M_2 = 2 - 1$
    $\frac{2}{3}M_1 + \frac{1}{6}M_2 = 1$
    Multiply by 6: $4M_1 + M_2 = 6$ (Eq. 1)

    For $i=2$:
    $\frac{h_1}{6}M_1 + \frac{h_1 + h_2}{3}M_2 + \frac{h_2}{6}M_3 = \frac{y_3-y_2}{h_2} - \frac{y_2-y_1}{h_1}$
    $\frac{1}{6}M_1 + \frac{1+1}{3}M_2 + \frac{1}{6}(0) = \frac{8-4}{1} - \frac{4-2}{1}$
    $\frac{1}{6}M_1 + \frac{2}{3}M_2 + 0 = 4 - 2$
    $\frac{1}{6}M_1 + \frac{2}{3}M_2 = 2$
    Multiply by 6: $M_1 + 4M_2 = 12$ (Eq. 2)

3.  **Solve the System for $M_i$:**
    We have:
    $4M_1 + M_2 = 6$
    $M_1 + 4M_2 = 12$

    From Eq. 1, $M_2 = 6 - 4M_1$. Substitute into Eq. 2:
    $M_1 + 4(6 - 4M_1) = 12$
    $M_1 + 24 - 16M_1 = 12$
    $-15M_1 = 12 - 24$
    $-15M_1 = -12$
    $M_1 = \frac{-12}{-15} = \frac{4}{5} = 0.8$

    Now find $M_2$:
    $M_2 = 6 - 4M_1 = 6 - 4(0.8) = 6 - 3.2 = 2.8$

    So, $M_0 = 0, M_1 = 0.8, M_2 = 2.8, M_3 = 0$.

4.  **Calculate Coefficients for each Segment:**

    **Segment 0 ($x_0 \le x \le x_1$, $h_0=1$):**
    $a_0 = y_0 = 1$
    $b_0 = \frac{y_1-y_0}{h_0} - \frac{M_1 h_0}{3} - \frac{M_0 h_0}{6} = \frac{2-1}{1} - \frac{(0.8)(1)}{3} - \frac{(0)(1)}{6} = 1 - \frac{0.8}{3} = 1 - 0.2667 = 0.7333$
    $c_0 = M_0/2 = 0/2 = 0$
    $d_0 = \frac{M_1 - M_0}{6h_0} = \frac{0.8 - 0}{6(1)} = \frac{0.8}{6} = 0.1333$

    $S_0(x) = 1 + 0.7333(x-0) + 0(x-0)^2 + 0.1333(x-0)^3$
    $S_0(x) = 1 + 0.7333x + 0.1333x^3$

    **Segment 1 ($x_1 \le x \le x_2$, $h_1=1$):**
    $a_1 = y_1 = 2$
    $b_1 = \frac{y_2-y_1}{h_1} - \frac{M_2 h_1}{3} - \frac{M_1 h_1}{6} = \frac{4-2}{1} - \frac{(2.8)(1)}{3} - \frac{(0.8)(1)}{6} = 2 - \frac{2.8}{3} - \frac{0.8}{6} = 2 - 0.9333 - 0.1333 = 0.9334$
    $c_1 = M_1/2 = 0.8/2 = 0.4$
    $d_1 = \frac{M_2 - M_1}{6h_1} = \frac{2.8 - 0.8}{6(1)} = \frac{2}{6} = 0.3333$

    $S_1(x) = 2 + 0.9334(x-1) + 0.4(x-1)^2 + 0.3333(x-1)^3$

    **Segment 2 ($x_2 \le x \le x_3$, $h_2=1$):**
    $a_2 = y_2 = 4$
    $b_2 = \frac{y_3-y_2}{h_2} - \frac{M_3 h_2}{3} - \frac{M_2 h_2}{6} = \frac{8-4}{1} - \frac{(0)(1)}{3} - \frac{(2.8)(1)}{6} = 4 - 0 - \frac{2.8}{6} = 4 - 0.4667 = 3.5333$
    $c_2 = M_2/2 = 2.8/2 = 1.4$
    $d_2 = \frac{M_3 - M_2}{6h_2} = \frac{0 - 2.8}{6(1)} = \frac{-2.8}{6} = -0.4667$

    $S_2(x) = 4 + 3.5333(x-2) + 1.4(x-2)^2 - 0.4667(x-2)^3$

5.  **The Cubic Spline:**
    $S(x) = \begin{cases} 1 + 0.7333x + 0.1333x^3 & \text{if } 0 \le x \le 1 \\ 2 + 0.9334(x-1) + 0.4(x-1)^2 + 0.3333(x-1)^3 & \text{if } 1 \le x \le 2 \\ 4 + 3.5333(x-2) + 1.4(x-2)^2 - 0.4667(x-2)^3 & \text{if } 2 \le x \le 3 \end{cases}$

    *(Note: Coefficients are rounded for simplicity. For exact results, use fractions.)*

### Interpolation using the Cubic Spline

Once the spline is constructed, you can use it to find the interpolated value at any point $x$ within the range $[x_0, x_n]$.

**Example:** Find the interpolated value at $x=1.5$.

Since $1 \le 1.5 \le 2$, we use $S_1(x)$:
$S_1(1.5) = 2 + 0.9334(1.5-1) + 0.4(1.5-1)^2 + 0.3333(1.5-1)^3$
$S_1(1.5) = 2 + 0.9334(0.5) + 0.4(0.5)^2 + 0.3333(0.5)^3$
$S_1(1.5) = 2 + 0.4667 + 0.4(0.25) + 0.3333(0.125)$
$S_1(1.5) = 2 + 0.4667 + 0.1 + 0.04166$
$S_1(1.5) = 2.60836$

Let's recheck with fractions for exactness.
$M_1 = 4/5$, $M_2 = 14/5$.
$h_0=1, h_1=1, h_2=1$.

$a_0=1$, $b_0 = 1 - \frac{4/5}{3} = 1 - \frac{4}{15} = \frac{11}{15}$. $c_0=0$. $d_0 = \frac{4/5}{6} = \frac{4}{30} = \frac{2}{15}$.
$S_0(x) = 1 + \frac{11}{15}x + \frac{2}{15}x^3$

$a_1=2$, $b_1 = \frac{2-1}{1} - \frac{14/5}{3} - \frac{4/5}{6} = 2 - \frac{14}{15} - \frac{4}{30} = 2 - \frac{14}{15} - \frac{2}{15} = 2 - \frac{16}{15} = \frac{30-16}{15} = \frac{14}{15}$.
$c_1 = \frac{4/5}{2} = \frac{4}{10} = \frac{2}{5}$. $d_1 = \frac{14/5 - 4/5}{6} = \frac{10/5}{6} = \frac{2}{6} = \frac{1}{3}$.
$S_1(x) = 2 + \frac{14}{15}(x-1) + \frac{2}{5}(x-1)^2 + \frac{1}{3}(x-1)^3$

$a_2=4$, $b_2 = \frac{8-4}{1} - \frac{0}{3} - \frac{14/5}{6} = 4 - \frac{14}{30} = 4 - \frac{7}{15} = \frac{60-7}{15} = \frac{53}{15}$.
$c_2 = \frac{14/5}{2} = \frac{14}{10} = \frac{7}{5}$. $d_2 = \frac{0 - 14/5}{6} = -\frac{14}{30} = -\frac{7}{15}$.
$S_2(x) = 4 + \frac{53}{15}(x-2) + \frac{7}{5}(x-2)^2 - \frac{7}{15}(x-2)^3$

At $x=1.5$:
$S_1(1.5) = 2 + \frac{14}{15}(1.5-1) + \frac{2}{5}(1.5-1)^2 + \frac{1}{3}(1.5-1)^3$
$S_1(1.5) = 2 + \frac{14}{15}(0.5) + \frac{2}{5}(0.5)^2 + \frac{1}{3}(0.5)^3$
$S_1(1.5) = 2 + \frac{14}{15} \times \frac{1}{2} + \frac{2}{5} \times \frac{1}{4} + \frac{1}{3} \times \frac{1}{8}$
$S_1(1.5) = 2 + \frac{7}{15} + \frac{1}{10} + \frac{1}{24}$
$S_1(1.5) = 2 + 0.4666... + 0.1 + 0.04166...$
$S_1(1.5) = 2.60833...$ (This matches the rounded value, confirming the calculation).

### Comparison with Other Interpolation Methods

*   **Higher-order Polynomials (e.g., Cubic Interpolation):** A single high-order polynomial can be difficult to fit smoothly and can exhibit oscillations (Runge's phenomenon). Cubic splines avoid this by using piecewise low-order polynomials.
*   **Linear Interpolation:** Simple but produces sharp corners at data points, lacking smoothness.
*   **Quadratic Interpolation:** Better than linear, but still might not achieve the desired smoothness of cubic splines.

### Advantages of Cubic Splines

*   **Smoothness:** Provide a smooth interpolation with continuous first and second derivatives at the knots.
*   **Flexibility:** Can accurately represent complex curves.
*   **Avoids Oscillations:** Unlike high-order polynomials, they generally do not exhibit excessive oscillations between data points.
*   **Well-behaved Boundary Conditions:** Natural and clamped splines offer controlled behavior at the boundaries.

### Disadvantages of Cubic Splines

*   **Computational Cost:** Requires solving a tridiagonal system of linear equations, which can be computationally more intensive than linear or quadratic interpolation for large datasets.
*   **Local vs. Global:** While generally good, small changes in data can propagate to affect multiple spline segments, unlike some local interpolation methods.

### Applications in Engineering

*   **Computer Graphics:** Creating smooth curves for drawing and animation.
*   **Aerodynamics:** Defining airfoil shapes.
*   **Mechanical Design:** Designing cam profiles, robot arm trajectories.
*   **Data Smoothing:** Removing noise from experimental data while preserving underlying trends.
*   **Finite Element Analysis (FEA):** Defining the shape of elements.

## Practice Questions and Exercises

**Question 1:**
Explain the key conditions that a cubic spline must satisfy at the interior data points. Why are these conditions important for achieving a smooth interpolation?

**Question 2:**
What is the primary difference between a natural cubic spline and a clamped cubic spline? When would you prefer one over the other?

**Question 3:**
Consider the following data points: $(0, 0)$, $(1, 2)$, $(2, 1)$.
Fit a natural cubic spline to these data points.
a) Calculate the interval widths $h_i$.
b) Set up the system of linear equations for the second derivatives $M_i$.
c) Solve for $M_0, M_1, M_2$.
d) Calculate the coefficients $a_i, b_i, c_i, d_i$ for each segment.
e) Write down the equations for the cubic spline segments.

**Question 4:**
Using the spline from Question 3, estimate the value of $y$ at $x=1.5$.

**Question 5:**
If you were given that the derivative of the function at $x=0$ is $f'(0)=3$ and at $x=2$ is $f'(2)=-2$, how would the system of equations for $M_i$ change for fitting a clamped cubic spline to the data in Question 3? (You do not need to solve it, just show the modified equations).

---

### Answers to Practice Questions

**Answer 1:**
A cubic spline $S(x)$ must satisfy the following conditions at the interior data points $x_i$ (for $i=1, \dots, n-1$):
*   **Continuity of the function:** $S_{i-1}(x_i) = S_i(x_i) = y_i$. This ensures the spline passes through all data points.
*   **Continuity of the first derivative:** $S_{i-1}'(x_i) = S_i'(x_i)$. This ensures that the curve is smooth and does not have any sharp turns or corners at the interior data points.
*   **Continuity of the second derivative:** $S_{i-1}''(x_i) = S_i''(x_i)$. This further enhances the smoothness of the curve, preventing abrupt changes in curvature.

These conditions are crucial for achieving a visually smooth and well-behaved interpolated curve, which is often a requirement in engineering applications.

**Answer 2:**
*   **Natural Cubic Spline:** The second derivative at the endpoints is zero ($M_0 = 0$ and $M_n = 0$). This means the curvature is zero at the beginning and end of the spline.
*   **Clamped Cubic Spline:** The first derivative at the endpoints is specified ($S_0'(x_0) = f'(x_0)$ and $S_{n-1}'(x_n) = f'(x_n)$). This allows for control over the slope at the boundaries, which can be useful if the slope of the underlying function is known or can be reasonably estimated.

**Preference:**
*   Choose **natural cubic spline** when the boundary behavior is not critical or when zero curvature at the endpoints is acceptable or desired. It's simpler to implement as it doesn't require derivative information.
*   Choose **clamped cubic spline** when the slope at the endpoints is known or needs to be controlled. This can lead to a more accurate and realistic representation if the boundary slopes are significant.

**Answer 3:**
Data points: $(x_0, y_0) = (0, 0)$, $(x_1, y_1) = (1, 2)$, $(x_2, y_2) = (2, 1)$. Here $n=2$.

a) **Calculate $h_i$:**
   $h_0 = x_1 - x_0 = 1 - 0 = 1$
   $h_1 = x_2 - x_1 = 2 - 1 = 1$

b) **Set up the system for $M_i$ (Natural Cubic Spline):**
   $M_0 = 0$
   $M_2 = 0$

   For $i=1$: (The only interior point)
   $\frac{h_0}{6}M_0 + \frac{h_0 + h_1}{3}M_1 + \frac{h_1}{6}M_2 = \frac{y_2-y_1}{h_1} - \frac{y_1-y_0}{h_0}$
   $\frac{1}{6}(0) + \frac{1+1}{3}M_1 + \frac{1}{6}(0) = \frac{1-2}{1} - \frac{2-0}{1}$
   $0 + \frac{2}{3}M_1 + 0 = -1 - 2$
   $\frac{2}{3}M_1 = -3$
   $M_1 = -3 \times \frac{3}{2} = -\frac{9}{2} = -4.5$

c) **Solve for $M_0, M_1, M_2$:**
   $M_0 = 0$
   $M_1 = -4.5$
   $M_2 = 0$

d) **Calculate the coefficients $a_i, b_i, c_i, d_i$:**

   **Segment 0 ($x_0 \le x \le x_1$, $h_0=1$):**
   $a_0 = y_0 = 0$
   $b_0 = \frac{y_1-y_0}{h_0} - \frac{M_1 h_0}{3} - \frac{M_0 h_0}{6} = \frac{2-0}{1} - \frac{(-4.5)(1)}{3} - \frac{(0)(1)}{6} = 2 - (-1.5) - 0 = 3.5$
   $c_0 = M_0/2 = 0/2 = 0$
   $d_0 = \frac{M_1 - M_0}{6h_0} = \frac{-4.5 - 0}{6(1)} = \frac{-4.5}{6} = -0.75$

   **Segment 1 ($x_1 \le x \le x_2$, $h_1=1$):**
   $a_1 = y_1 = 2$
   $b_1 = \frac{y_2-y_1}{h_1} - \frac{M_2 h_1}{3} - \frac{M_1 h_1}{6} = \frac{1-2}{1} - \frac{(0)(1)}{3} - \frac{(-4.5)(1)}{6} = -1 - 0 - (-0.75) = -1 + 0.75 = -0.25$
   $c_1 = M_1/2 = -4.5/2 = -2.25$
   $d_1 = \frac{M_2 - M_1}{6h_1} = \frac{0 - (-4.5)}{6(1)} = \frac{4.5}{6} = 0.75$

e) **Write down the equations for the cubic spline segments:**
   $S_0(x) = 0 + 3.5(x-0) + 0(x-0)^2 + (-0.75)(x-0)^3 = 3.5x - 0.75x^3$  (for $0 \le x \le 1$)
   $S_1(x) = 2 + (-0.25)(x-1) + (-2.25)(x-1)^2 + 0.75(x-1)^3$ (for $1 \le x \le 2$)

**Answer 4:**
To estimate $y$ at $x=1.5$, we use $S_1(x)$ since $1 \le 1.5 \le 2$.
$S_1(1.5) = 2 + (-0.25)(1.5-1) + (-2.25)(1.5-1)^2 + 0.75(1.5-1)^3$
$S_1(1.5) = 2 + (-0.25)(0.5) + (-2.25)(0.5)^2 + 0.75(0.5)^3$
$S_1(1.5) = 2 + (-0.125) + (-2.25)(0.25) + 0.75(0.125)$
$S_1(1.5) = 2 - 0.125 - 0.5625 + 0.09375$
$S_1(1.5) = 1.40625$

**Answer 5:**
For a clamped cubic spline, we need $f'(x_0)$ and $f'(x_n)$. Let $f'(0)=3$ and $f'(2)=-2$.
The data points are $(0, 0)$, $(1, 2)$, $(2, 1)$. $n=2$.
$h_0=1, h_1=1$.

The modified system of equations for $M_i$ is:

*   **For $i=0$ (Boundary condition at $x_0$):**
    $-\frac{h_0}{6}M_0 - \frac{h_0}{3}M_1 = f'(x_0) - \frac{y_1-y_0}{h_0}$
    $-\frac{1}{6}M_0 - \frac{1}{3}M_1 = 3 - \frac{2-0}{1}$
    $-\frac{1}{6}M_0 - \frac{1}{3}M_1 = 3 - 2 = 1$
    Multiply by 6: $-M_0 - 2M_1 = 6$ (Modified Eq. 1)

*   **For $i=1$ (Interior point):** This equation remains the same as in the natural spline case.
    $\frac{h_0}{6}M_0 + \frac{h_0 + h_1}{3}M_1 + \frac{h_1}{6}M_2 = \frac{y_2-y_1}{h_1} - \frac{y_1-y_0}{h_0}$
    $\frac{1}{6}M_0 + \frac{1+1}{3}M_1 + \frac{1}{6}M_2 = \frac{1-2}{1} - \frac{2-0}{1}$
    $\frac{1}{6}M_0 + \frac{2}{3}M_1 + \frac{1}{6}M_2 = -1 - 2 = -3$
    Multiply by 6: $M_0 + 4M_1 + M_2 = -18$ (Modified Eq. 2)

*   **For $i=n=2$ (Boundary condition at $x_2$):**
    $\frac{h_{n-1}}{3}M_{n-1} + \frac{h_{n-1}}{6}M_n = f'(x_n) - \frac{y_n-y_{n-1}}{h_{n-1}}$
    Here $n=2$, so $n-1=1$.
    $\frac{h_1}{3}M_1 + \frac{h_1}{6}M_2 = f'(x_2) - \frac{y_2-y_1}{h_1}$
    $\frac{1}{3}M_1 + \frac{1}{6}M_2 = -2 - \frac{1-2}{1}$
    $\frac{1}{3}M_1 + \frac{1}{6}M_2 = -2 - (-1) = -1$
    Multiply by 6: $2M_1 + M_2 = -6$ (Modified Eq. 3)

The system of equations for the clamped spline is:
1.  $-M_0 - 2M_1 = 6$
2.  $M_0 + 4M_1 + M_2 = -18$
3.  $2M_1 + M_2 = -6$

This system can then be solved for $M_0, M_1, M_2$.

---

## Important Points to Remember

*   **Smoothness:** Cubic splines provide excellent smoothness by ensuring continuity of the first and second derivatives at the data points (knots).
*   **Tridiagonal System:** The coefficients (second derivatives $M_i$) are found by solving a tridiagonal system of linear equations, which can be efficiently solved using algorithms like the Thomas algorithm.
*   **Boundary Conditions:** The type of boundary condition (natural, clamped, etc.) dictates the first and/or last two equations in the tridiagonal system.
*   **Piecewise Polynomials:** A cubic spline is not a single polynomial but a collection of piecewise cubic polynomials, each defined over an interval between two data points.
*   **Coefficients:** For each segment $S_i(x)$, there are four coefficients ($a_i, b_i, c_i, d_i$) that need to be determined.
*   **Computational Advantage:** Compared to a single high-degree polynomial, cubic splines are less prone to oscillations and are often preferred for interpolating data with many points.

---

This comprehensive study material covers the essential aspects of cubic spline interpolation, its derivation, implementation, and applications, aligning with the learning outcomes and course objectives.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
