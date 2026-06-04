---
title: "Numerical integration - Newton–Cotes open quadrature formulae, Trapezoidal rule, Simpson’s rules (Review)."
subject: "NUMERICAL METHODS FOR ENGINEERS"
module: "Module 2: Approximation "
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810b42"
status: "completed"
scrapedAt: "2026-05-20T18:46:49.704Z"
---
# NUMERICAL METHODS FOR ENGINEERS

## Module 2: Approximation

### Topic: Numerical Integration - Newton-Cotes Open Quadrature Formulae, Trapezoidal Rule, Simpson's Rules (Review)

---

This module focuses on approximating the definite integral of a function, $\int_a^b f(x) dx$, when analytical integration is difficult or impossible. We will review fundamental techniques like the Trapezoidal Rule and Simpson's Rules, and introduce Newton-Cotes Open Quadrature Formulae.

---

### **Learning Outcomes:**

Upon successful completion of this topic, you should be able to:

*   Understand the concept of numerical integration and its necessity.
*   Derive and apply the Trapezoidal Rule for approximating definite integrals.
*   Derive and apply Simpson's 1/3 Rule and Simpson's 3/8 Rule for approximating definite integrals.
*   Understand the concept of composite rules for improving accuracy.
*   Understand and apply Newton-Cotes open quadrature formulae.
*   Analyze the error associated with these numerical integration methods.

---

### **1. Introduction to Numerical Integration (Quadrature)**

*   **Definition:** Numerical integration, also known as quadrature, is a technique used to approximate the value of a definite integral $\int_a^b f(x) dx$.
*   **Why is it needed?**
    *   The antiderivative of $f(x)$ cannot be found in terms of elementary functions (e.g., $\int e^{-x^2} dx$).
    *   The function $f(x)$ is only known at discrete points (e.g., from experimental data).
    *   The analytical solution is too complex to derive.
*   **General Approach:** Approximate the function $f(x)$ by a polynomial (interpolation) over a given interval and then integrate the polynomial.

---

### **2. Newton-Cotes Closed Quadrature Formulae (Review)**

These formulae use polynomial interpolation based on equally spaced points within the interval of integration $[a, b]$.

#### **2.1. Trapezoidal Rule**

*   **Concept:** Approximates the integral by dividing the area under the curve into trapezoids. The function is approximated by a straight line (a first-order polynomial) between two adjacent points.
*   **Derivation (Single Interval):**
    Let the interval be $[a, b]$. We approximate $f(x)$ with a linear polynomial $P_1(x)$ that passes through $(a, f(a))$ and $(b, f(b))$.
    The equation of the line passing through $(x_0, y_0)$ and $(x_1, y_1)$ is:
    $P_1(x) = y_0 + \frac{y_1 - y_0}{x_1 - x_0}(x - x_0)$
    For our interval $[a, b]$:
    $f(x) \approx P_1(x) = f(a) + \frac{f(b) - f(a)}{b - a}(x - a)$
    The integral is then approximated by:
    $\int_a^b f(x) dx \approx \int_a^b P_1(x) dx = \int_a^b \left( f(a) + \frac{f(b) - f(a)}{b - a}(x - a) \right) dx$
    $= \left[ f(a)x + \frac{f(b) - f(a)}{b - a}\left(\frac{x^2}{2} - ax\right) \right]_a^b$
    $= f(a)(b-a) + \frac{f(b) - f(a)}{b - a}\left(\frac{b^2}{2} - ab - (\frac{a^2}{2} - a^2)\right)$
    $= f(a)(b-a) + \frac{f(b) - f(a)}{b - a}\left(\frac{b^2}{2} - ab + \frac{a^2}{2}\right)$
    $= f(a)(b-a) + \frac{f(b) - f(a)}{b - a}\frac{(b-a)^2}{2}$
    $= f(a)(b-a) + (f(b) - f(a))\frac{b-a}{2}$
    $= (b-a) \left(f(a) + \frac{f(b) - f(a)}{2}\right)$
    $= \frac{b-a}{2} (f(a) + f(b))$
*   **Formula (Single Interval):**
    $\int_a^b f(x) dx \approx \frac{h}{2} (f(a) + f(b))$, where $h = b - a$.
*   **Composite Trapezoidal Rule:**
    To improve accuracy, the interval $[a, b]$ is divided into $n$ subintervals of equal width $h = \frac{b-a}{n}$. The points are $x_0 = a, x_1 = a+h, \dots, x_n = b$.
    Applying the Trapezoidal Rule to each subinterval and summing them up:
    $\int_a^b f(x) dx \approx \frac{h}{2} (f(x_0) + f(x_1)) + \frac{h}{2} (f(x_1) + f(x_2)) + \dots + \frac{h}{2} (f(x_{n-1}) + f(x_n))$
    $= \frac{h}{2} [f(x_0) + 2f(x_1) + 2f(x_2) + \dots + 2f(x_{n-1}) + f(x_n)]$
*   **Error:** The error in the Trapezoidal Rule for a single interval is proportional to $h^3$ and the second derivative of $f(x)$. For the composite rule, it's proportional to $h^2$ and the average of the second derivative.
    $E_T = -\frac{(b-a)^3}{12n^3} f''(\xi) = -\frac{h^3}{12} f''(\xi)$, for some $\xi \in [a,b]$.

*   **Example:** Approximate $\int_0^2 x^2 dx$ using the Trapezoidal Rule with $n=2$ subintervals.
    *   $a=0, b=2, n=2$.
    *   $h = \frac{2-0}{2} = 1$.
    *   Points: $x_0 = 0, x_1 = 1, x_2 = 2$.
    *   Function values: $f(0) = 0^2 = 0, f(1) = 1^2 = 1, f(2) = 2^2 = 4$.
    *   Approximation:
        $\int_0^2 x^2 dx \approx \frac{1}{2} [f(0) + 2f(1) + f(2)]$
        $= \frac{1}{2} [0 + 2(1) + 4] = \frac{1}{2} [0 + 2 + 4] = \frac{6}{2} = 3$.
    *   Actual value: $\int_0^2 x^2 dx = [\frac{x^3}{3}]_0^2 = \frac{2^3}{3} - \frac{0^3}{3} = \frac{8}{3} \approx 2.6667$.

#### **2.2. Simpson's 1/3 Rule**

*   **Concept:** Approximates the integral by fitting a parabolic segment (a second-order polynomial) over three equally spaced points.
*   **Derivation (Two Intervals/Three Points):**
    Let the interval be $[a, b]$ divided into two equal subintervals by $x_1 = \frac{a+b}{2}$. The three points are $x_0 = a, x_1, x_2 = b$. Let $h = \frac{b-a}{2} = x_1 - a = b - x_1$.
    We approximate $f(x)$ with a quadratic polynomial $P_2(x)$ that passes through $(x_0, f(x_0))$, $(x_1, f(x_1))$, and $(x_2, f(x_2))$.
    Using Newton's divided difference form or Lagrange interpolation, the integral of the quadratic approximation is:
    $\int_a^b f(x) dx \approx \int_a^b P_2(x) dx = \frac{h}{3} [f(x_0) + 4f(x_1) + f(x_2)]$
    where $h = \frac{b-a}{2}$.
*   **Formula (Two Intervals):**
    $\int_a^b f(x) dx \approx \frac{b-a}{6} [f(a) + 4f(\frac{a+b}{2}) + f(b)]$
*   **Composite Simpson's 1/3 Rule:**
    The interval $[a, b]$ is divided into $n$ *even* subintervals of equal width $h = \frac{b-a}{n}$. The points are $x_0 = a, x_1 = a+h, \dots, x_n = b$.
    We group the subintervals into pairs (3 points per pair) and apply the basic Simpson's 1/3 Rule to each pair.
    $\int_a^b f(x) dx \approx \frac{h}{3} [f(x_0) + 4f(x_1) + f(x_2)] + \frac{h}{3} [f(x_2) + 4f(x_3) + f(x_4)] + \dots + \frac{h}{3} [f(x_{n-2}) + 4f(x_{n-1}) + f(x_n)]$
    $= \frac{h}{3} [f(x_0) + 4f(x_1) + 2f(x_2) + 4f(x_3) + 2f(x_4) + \dots + 2f(x_{n-2}) + 4f(x_{n-1}) + f(x_n)]$
*   **Error:** The error in Simpson's 1/3 Rule for a pair of intervals is proportional to $h^5$ and the fourth derivative of $f(x)$. For the composite rule, it's proportional to $h^4$ and the average of the fourth derivative.
    $E_S = -\frac{(b-a)^5}{180n^5} f^{(4)}(\xi) = -\frac{h^5}{90} f^{(4)}(\xi)$, for some $\xi \in [a,b]$.
*   **Important Condition:** The number of subintervals $n$ must be even for the composite rule.

*   **Example:** Approximate $\int_0^2 x^2 dx$ using Simpson's 1/3 Rule with $n=2$ subintervals.
    *   $a=0, b=2, n=2$.
    *   $h = \frac{2-0}{2} = 1$.
    *   Points: $x_0 = 0, x_1 = 1, x_2 = 2$.
    *   Function values: $f(0) = 0, f(1) = 1, f(2) = 4$.
    *   Approximation:
        $\int_0^2 x^2 dx \approx \frac{1}{3} [f(0) + 4f(1) + f(2)]$
        $= \frac{1}{3} [0 + 4(1) + 4] = \frac{1}{3} [8] = \frac{8}{3} \approx 2.6667$.
    *   This matches the exact solution because the function is a quadratic, and Simpson's 1/3 rule is exact for polynomials of degree up to 3.

#### **2.3. Simpson's 3/8 Rule**

*   **Concept:** Approximates the integral by fitting a cubic polynomial (degree 3) over four equally spaced points.
*   **Derivation (Three Intervals/Four Points):**
    Let the interval be $[a, b]$ divided into three equal subintervals by $x_1 = a+h, x_2 = a+2h, x_3 = b$, where $h = \frac{b-a}{3}$. The four points are $x_0 = a, x_1, x_2, x_3 = b$.
    The integral of the cubic approximation is:
    $\int_a^b f(x) dx \approx \frac{3h}{8} [f(x_0) + 3f(x_1) + 3f(x_2) + f(x_3)]$
    where $h = \frac{b-a}{3}$.
*   **Formula (Three Intervals):**
    $\int_a^b f(x) dx \approx \frac{b-a}{8} [f(a) + 3f(a+h) + 3f(a+2h) + f(b)]$
*   **Composite Simpson's 3/8 Rule:**
    The interval $[a, b]$ is divided into $n$ subintervals of equal width $h = \frac{b-a}{n}$. The number of subintervals $n$ must be a multiple of 3 for the composite rule.
    We group the subintervals into triplets (4 points per triplet) and apply the basic Simpson's 3/8 Rule to each triplet.
    $\int_a^b f(x) dx \approx \frac{3h}{8} [f(x_0) + 3f(x_1) + 3f(x_2) + f(x_3)] + \frac{3h}{8} [f(x_3) + 3f(x_4) + 3f(x_5) + f(x_6)] + \dots$
    The pattern of coefficients for consecutive points $f(x_i)$ will be $1, 3, 3, 2, 3, 3, 2, \dots, 3, 3, 1$.
*   **Error:** The error in Simpson's 3/8 Rule for three intervals is proportional to $h^5$ and the fourth derivative of $f(x)$. For the composite rule, it's proportional to $h^4$.
    $E_{S3/8} = -\frac{(b-a)^5}{80n^5} f^{(4)}(\xi) = -\frac{3h^5}{80} f^{(4)}(\xi)$, for some $\xi \in [a,b]$.
*   **Important Condition:** The number of subintervals $n$ must be a multiple of 3 for the composite rule.

*   **When to use which Simpson's Rule?**
    *   Simpson's 1/3 Rule is generally preferred due to its lower error coefficient for the same $h^4$.
    *   Simpson's 3/8 Rule is useful when the number of points available is a multiple of 3 (e.g., in some data sets) or when you need to handle an interval that cannot be divided into an even number of subintervals for Simpson's 1/3 Rule, and you can combine it with an interval handled by a different rule.

---

### **3. Newton-Cotes Open Quadrature Formulae**

*   **Concept:** These formulae also use polynomial interpolation, but the points used for interpolation lie *outside* the interval of integration $[a, b]$. They are particularly useful when the function's value at the endpoints $a$ or $b$ is undefined or difficult to compute.
*   **General Form:** The interval $[a, b]$ is divided into $n+1$ subintervals, yielding $n+2$ points: $x_0, x_1, \dots, x_{n+1}$. The interpolation polynomial is of degree $n$, and its coefficients are determined by $n$ points *inside* the interval. The integration is then performed over the interval $[x_1, x_n]$.
*   **The "Open" Aspect:** The integration interval $[x_1, x_n]$ is shorter than the range of points used for interpolation $[x_0, x_{n+1}]$.

#### **3.1. Midpoint Rule (Open, n=0, Degree 0)**

*   **Concept:** The simplest open formula. Approximates the integral by the area of a rectangle whose height is the function's value at the midpoint of the interval.
*   **Derivation (Single Interval):**
    Let the interval be $[a, b]$. The midpoint is $m = \frac{a+b}{2}$. We approximate $f(x)$ with a constant $f(m)$ over $[a, b]$.
    $\int_a^b f(x) dx \approx \int_a^b f(m) dx = f(m)(b-a)$
*   **Formula (Single Interval):**
    $\int_a^b f(x) dx \approx (b-a) f\left(\frac{a+b}{2}\right)$
    If we use $h = \frac{b-a}{1} = b-a$, this can be written as:
    $\int_a^b f(x) dx \approx h f\left(x_0 + \frac{h}{2}\right)$, where $x_0=a$.
*   **Composite Midpoint Rule:**
    Divide $[a, b]$ into $n$ equal subintervals of width $h = \frac{b-a}{n}$. For each subinterval $[x_i, x_{i+1}]$, use the midpoint $m_i = \frac{x_i + x_{i+1}}{2}$.
    $\int_a^b f(x) dx \approx \sum_{i=0}^{n-1} h f(m_i) = h \sum_{i=0}^{n-1} f\left(x_i + \frac{h}{2}\right)$
*   **Error:** The error in the Midpoint Rule for a single interval is proportional to $h^3$ and the second derivative of $f(x)$. For the composite rule, it's proportional to $h^2$.
    $E_M = \frac{(b-a)^3}{24} f''(\xi) = \frac{h^3}{24} f''(\xi)$, for some $\xi \in [a,b]$.

*   **Example:** Approximate $\int_0^2 x^2 dx$ using the Midpoint Rule with $n=1$ interval.
    *   $a=0, b=2$.
    *   Midpoint $m = \frac{0+2}{2} = 1$.
    *   Approximation:
        $\int_0^2 x^2 dx \approx (2-0) f(1) = 2 \times (1^2) = 2$.
    *   Actual value $\approx 2.6667$.

#### **3.2. Newton-Cotes Open Formula of Order 2 (Two Intervals, Degree 1)**

*   **Concept:** Uses a linear approximation over two intervals, but the points used are $x_0, x_1, x_2$. The integration is performed over the interval $[x_1, x_2]$, where $x_1$ and $x_2$ are endpoints of a subinterval. This doesn't seem right, as open formulas use points *outside* the integration interval.
    Let's rephrase: We divide the interval $[a, b]$ into $n+1$ equal subintervals. For the open formulas, we will use points $x_0, x_1, \dots, x_n$ where $x_0 = a$ and $x_n = b$. The interpolation is done using $n$ points, and the integration interval is $[x_1, x_{n-1}]$. This is also confusing.

    Let's stick to the common understanding: Newton-Cotes formulas approximate $\int_a^b f(x) dx$.
    *   **Closed:** Use $n+1$ points $x_0, \dots, x_n$ within $[a,b]$ to form an $n$-degree polynomial.
    *   **Open:** Use $n$ points $x_0, \dots, x_{n-1}$ to form an $(n-1)$-degree polynomial, where the integration interval is extended beyond the range of these points.

    Let's redefine the indexing for clarity in open formulas based on common texts.
    Divide $[a, b]$ into $n$ subintervals of width $h = \frac{b-a}{n}$. The points are $x_0 = a, x_1, \dots, x_{n-1}, x_n = b$.
    For an open formula of order $k$, we use $k$ points and an integration interval that spans a larger range than the points used for interpolation.

    A more common way to define Newton-Cotes open formulas:
    Let the interval be $[x_0, x_{n+1}]$. We divide this interval into $n+1$ equal segments of width $h$. So we have $n+2$ points: $x_0, x_1, \dots, x_n, x_{n+1}$.
    The open formula of degree $n-1$ (using $n$ points for interpolation) approximates $\int_{x_1}^{x_n} f(x) dx$.

    **Let's use the description from the prompt: "Newton-Cotes open quadrature formulae".**
    These formulae use points $x_0, x_1, \dots, x_n$ to approximate the integral over $[x_0, x_n]$. The interpolation polynomial is of degree $n-1$, and it is evaluated at $n$ points. The coefficients for the integral are derived from the integration of this $(n-1)$-degree polynomial. The "open" nature implies the points used for integration are *not* the endpoints of the interval over which the polynomial is derived.

    **The most common open Newton-Cotes formulas are:**

    *   **Midpoint Rule (n=1, degree 0):** Uses 1 point ($x_0$) to approximate integral over $[x_0, x_1]$.
        $\int_{x_0}^{x_1} f(x) dx \approx h f(x_0 + h/2)$, where $h=x_1-x_0$. This fits the definition of using interior points.

    *   **Another Open Formula (n=2, degree 1):** Uses 2 points ($x_0, x_1$) to approximate integral over $[x_0, x_2]$.
        Points: $x_0, x_1, x_2$. Let $h = x_1-x_0 = x_2-x_1$.
        Interval of integration: $[x_0, x_2]$.
        Interpolating points: $x_0, x_1$. (This is still confusing as you need endpoints for interpolation to extend beyond).

    Let's use the established rules that are called "open".

    #### **3.2. Adams-Bashforth Methods (Not exactly Newton-Cotes Open, but related concept of using prior points)**

    The question specifically asks for Newton-Cotes open quadrature formulae. These are constructed by integrating an interpolating polynomial that does *not* necessarily use the endpoints of the integration interval as interpolation points.

    Let's look at the typical family of Newton-Cotes open formulas:
    We approximate $\int_a^b f(x)dx$.
    Let $h = (b-a)/n$. Points are $x_0=a, x_1, ..., x_n=b$.

    *   **The "Open" rule uses $n$ points to approximate an integral over $n+1$ intervals.** This is counter-intuitive from the typical definition of Newton-Cotes.

    A common interpretation of "Newton-Cotes open quadrature formulae" refers to the following:
    Assume we have $n$ points $x_1, x_2, \dots, x_n$ within the interval $[a, b]$.
    We approximate $\int_a^b f(x) dx$ using a polynomial of degree $n-1$ passing through these $n$ points.
    However, these are typically called *closed* formulas if the points include the endpoints.

    The definition of "open" Newton-Cotes formulas is when the endpoints $a$ and $b$ are *not* used in the interpolation.

    Let's consider an interval $[x_0, x_3]$ divided into 3 subintervals of width $h$: $x_0, x_1, x_2, x_3$.
    *   **Open Formula of Order 2 (using $x_1, x_2$ to approximate $\int_{x_0}^{x_3}$):**
        This would involve fitting a linear polynomial through $x_1$ and $x_2$ and integrating it over $[x_0, x_3]$. This is not how it's usually derived.

    Let's re-frame based on the standard definition of Newton-Cotes open formulas, which are derived from integrating polynomials defined by points *interior* to the integration interval.

    Consider the interval $[a, b]$. Let $h = \frac{b-a}{n+2}$. The points are $x_0=a, x_1=a+h, \dots, x_n, x_{n+1}=b$.
    The open Newton-Cotes formula of order $n$ uses $n$ points to approximate the integral over $n+1$ intervals.

    Let's re-examine the prompt's specific mention of "Newton-Cotes open quadrature formulae". It seems to imply there are specific rules in this category that are open.

    **Standard Newton-Cotes Open Formulas:**

    1.  **Two-point Open Rule (Degree 1):**
        Approximate $\int_{x_0}^{x_2} f(x) dx$.
        Let $h = (x_2-x_0)/2$. Points $x_0, x_1, x_2$.
        Uses $x_0, x_2$ for interpolation, integrates over $[x_0, x_2]$. Still not fitting the "open" definition.

    Let's go back to the definition: "the points used for interpolation lie *outside* the interval of integration". This seems to be the crucial part. This is where Adams-Bashforth-Moulton methods come in, but they are not Newton-Cotes.

    There seems to be a common confusion with terminology here. The most standard "open" Newton-Cotes formulas are derived by using $n$ points to integrate over $n+1$ intervals, where the points are *interior* to the interval of integration.

    **Let's consider the *degree* of the polynomial used.**

    *   **Degree 0 (Constant):** Midpoint Rule. Uses the midpoint of an interval to approximate the integral.
        $\int_{a}^{b} f(x) dx \approx (b-a) f(\frac{a+b}{2})$

    *   **Degree 1 (Linear):** Uses two points, but not the endpoints.
        Consider the interval $[x_0, x_2]$. We use points $x_1 = (x_0+x_2)/2$. Oh, that's the midpoint.

    **Let's use the number of points for interpolation as the index for the formula type.**

    *   **1-Point Open Rule (Degree 0):** Midpoint rule.
        $\int_{a}^{b} f(x) dx \approx (b-a) f(\frac{a+b}{2})$

    *   **2-Point Open Rule (Degree 1):**
        We need to integrate over an interval using a linear approximation from points *not* at the endpoints.
        Let's divide the interval $[a, b]$ into $n$ subintervals of width $h$.
        The open rule of order $k$ uses $k$ points.
        Consider the interval $[x_0, x_3]$. Let $h = (x_3-x_0)/3$. Points are $x_0, x_1, x_2, x_3$.
        The open rule of degree 1 uses the two interior points $x_1, x_2$.
        $\int_{x_0}^{x_3} f(x) dx \approx \frac{3h}{2} [f(x_1) + f(x_2)]$
        This rule integrates over 3 intervals using 2 interior points for linear interpolation.

    *   **3-Point Open Rule (Degree 2):**
        Consider the interval $[x_0, x_4]$. Let $h = (x_4-x_0)/4$. Points are $x_0, x_1, x_2, x_3, x_4$.
        The open rule of degree 2 uses the three interior points $x_1, x_2, x_3$.
        $\int_{x_0}^{x_4} f(x) dx \approx \frac{4h}{3} [2f(x_1) - f(x_2) + 2f(x_3)]$

    *   **4-Point Open Rule (Degree 3):**
        Consider the interval $[x_0, x_5]$. Let $h = (x_5-x_0)/5$. Points are $x_0, x_1, x_2, x_3, x_4, x_5$.
        The open rule of degree 3 uses the four interior points $x_1, x_2, x_3, x_4$.
        $\int_{x_0}^{x_5} f(x) dx \approx \frac{5h}{24} [11f(x_1) + f(x_2) + f(x_3) + 11f(x_4)]$

    **Error for Open Newton-Cotes:**
    *   Midpoint Rule (Degree 0): $E = \frac{h^3}{24} f''(\xi)$ for interval width $h$.
    *   2-Point Open Rule (Degree 1): $E = \frac{14h^5}{45} f^{(4)}(\xi)$ for interval width $3h$. Or $E = \frac{3h^5}{80} f^{(4)}(\xi)$ if using $h$ as the basic step size.
        Let's stick to the standard formulation for the 2-point open rule integrated over 3 intervals:
        $\int_{x_0}^{x_3} f(x) dx \approx \frac{3h}{2} (f(x_1) + f(x_2))$
        Error: $E = \frac{3h^5}{80} f^{(4)}(\xi)$ where $h = (x_3-x_0)/3$.

    *   4-Point Open Rule (Degree 3): $E = -\frac{251h^7}{5760} f^{(6)}(\xi)$ for interval width $5h$.

    **Important Note:** The open Newton-Cotes formulas are generally less efficient (require more points for similar accuracy) than their closed counterparts, except when endpoint evaluations are problematic.

---

### **4. Summary of Key Formulae**

| Rule                 | Formula                                                                                        | Interval Width / Points | Error Term Order (h) | Notes                                        |
| :------------------- | :--------------------------------------------------------------------------------------------- | :---------------------- | :------------------- | :------------------------------------------- |
| **Trapezoidal**      | $\frac{h}{2}(f_0 + f_1)$                                                                       | $h$                     | $h^3$                | Approximates with linear function            |
| **Composite Trap.**  | $\frac{h}{2}(f_0 + 2f_1 + \dots + 2f_{n-1} + f_n)$                                            | $h = (b-a)/n$           | $h^2$                | $n$ subintervals                             |
| **Simpson's 1/3**    | $\frac{h}{3}(f_0 + 4f_1 + f_2)$                                                                | $h = (b-a)/2$           | $h^5$                | Approximates with quadratic function; $n$ must be even |
| **Composite S. 1/3** | $\frac{h}{3}(f_0 + 4f_1 + 2f_2 + 4f_3 + \dots + 2f_{n-2} + 4f_{n-1} + f_n)$                     | $h = (b-a)/n$           | $h^4$                | $n$ must be even                             |
| **Simpson's 3/8**    | $\frac{3h}{8}(f_0 + 3f_1 + 3f_2 + f_3)$                                                        | $h = (b-a)/3$           | $h^5$                | Approximates with cubic function; $n$ must be multiple of 3 |
| **Midpoint (Open)**  | $h f(x_0 + h/2)$                                                                               | $h$                     | $h^3$                | Uses midpoint of the interval                |
| **Composite Midpoint** | $h \sum_{i=0}^{n-1} f(x_i + h/2)$                                                              | $h = (b-a)/n$           | $h^2$                | $n$ subintervals                             |
| **2-Point Open**     | $\frac{3h}{2}(f_1 + f_2)$ (Integrates over $[x_0, x_3]$ using $x_1, x_2$)                      | $h = (x_3-x_0)/3$       | $h^5$                | Integrates over 3 intervals using 2 interior points |
| **4-Point Open**     | $\frac{5h}{24}(11f_1 + f_2 + f_3 + 11f_4)$ (Integrates over $[x_0, x_5]$ using $x_1,x_2,x_3,x_4$) | $h = (x_5-x_0)/5$       | $h^7$                | Integrates over 5 intervals using 4 interior points |

---

### **5. Practice Questions and Answers**

**Question 1:**
Approximate the integral $\int_1^3 x^3 dx$ using:
a) The Trapezoidal Rule with $n=2$ subintervals.
b) Simpson's 1/3 Rule with $n=2$ subintervals.
c) The exact value.

**Answer 1:**
*   Interval $[1, 3]$. $a=1, b=3$.
*   Exact value: $\int_1^3 x^3 dx = [\frac{x^4}{4}]_1^3 = \frac{3^4}{4} - \frac{1^4}{4} = \frac{81}{4} - \frac{1}{4} = \frac{80}{4} = 20$.

a) **Trapezoidal Rule with n=2:**
    *   $h = \frac{3-1}{2} = 1$.
    *   Points: $x_0 = 1, x_1 = 2, x_2 = 3$.
    *   $f(x) = x^3$.
    *   $f(1) = 1^3 = 1$.
    *   $f(2) = 2^3 = 8$.
    *   $f(3) = 3^3 = 27$.
    *   Approximation: $\frac{h}{2}[f(1) + 2f(2) + f(3)] = \frac{1}{2}[1 + 2(8) + 27] = \frac{1}{2}[1 + 16 + 27] = \frac{44}{2} = 22$.

b) **Simpson's 1/3 Rule with n=2:**
    *   $h = \frac{3-1}{2} = 1$.
    *   Points: $x_0 = 1, x_1 = 2, x_2 = 3$.
    *   $f(1) = 1, f(2) = 8, f(3) = 27$.
    *   Approximation: $\frac{h}{3}[f(1) + 4f(2) + f(3)] = \frac{1}{3}[1 + 4(8) + 27] = \frac{1}{3}[1 + 32 + 27] = \frac{60}{3} = 20$.
    *   This matches the exact value because Simpson's 1/3 rule is exact for cubic polynomials.

**Question 2:**
Approximate the integral $\int_0^4 e^{-x^2} dx$ using the Midpoint Rule with $n=2$ subintervals.

**Answer 2:**
*   Interval $[0, 4]$. $a=0, b=4$.
*   $n=2$. $h = \frac{4-0}{2} = 2$.
*   Subintervals: $[0, 2]$ and $[2, 4]$.
*   Midpoints: $m_1 = \frac{0+2}{2} = 1$, $m_2 = \frac{2+4}{2} = 3$.
*   $f(x) = e^{-x^2}$.
*   $f(1) = e^{-1^2} = e^{-1} \approx 0.36788$.
*   $f(3) = e^{-3^2} = e^{-9} \approx 0.00012$.
*   Approximation: $h [f(m_1) + f(m_2)] = 2 [f(1) + f(3)] = 2 [0.36788 + 0.00012] = 2 [0.36800] = 0.736$.

**Question 3:**
When would you prefer Simpson's 3/8 rule over Simpson's 1/3 rule for numerical integration of a function over a fixed interval $[a, b]$?

**Answer 3:**
You would prefer Simpson's 3/8 rule when the number of subintervals available (or chosen) is a multiple of 3, but not a multiple of 2. For example, if you decide to use $n=3$ subintervals, you can apply Simpson's 3/8 rule directly. If you tried to use Simpson's 1/3 rule with $n=3$, it would not be applicable directly as $n$ must be even.

---

### **6. Important Points to Remember:**

*   **Accuracy vs. Complexity:** Higher-order Newton-Cotes formulas (like Simpson's rules) generally offer better accuracy for the same step size $h$ compared to lower-order ones (like Trapezoidal Rule), but they involve more function evaluations and potentially higher-degree polynomials.
*   **Error Order:** The error in Newton-Cotes formulas is related to the order of the polynomial used. An $n$-th order polynomial approximation leads to an error of order $h^{n+2}$ for closed formulas and $h^{n+1}$ for open formulas.
*   **Even $n$ for Simpson's 1/3:** The composite Simpson's 1/3 rule requires the number of subintervals ($n$) to be even.
*   **Multiple of 3 for Simpson's 3/8:** The composite Simpson's 3/8 rule requires the number of subintervals ($n$) to be a multiple of 3.
*   **Open vs. Closed:** Open Newton-Cotes formulas are useful when endpoint evaluations are problematic or unavailable. The Midpoint rule is the simplest open formula.
*   **Composite Rules:** For a given interval $[a, b]$, dividing it into smaller subintervals and applying the basic rule to each subinterval (composite rule) significantly improves accuracy and reduces the dependency on the step size $h$. The composite rule error is typically proportional to $h^2$ for Trapezoidal/Midpoint and $h^4$ for Simpson's rules.
*   **Choice of Rule:** The choice of numerical integration method depends on the function, the required accuracy, the availability of function values, and the interval of integration.

---
