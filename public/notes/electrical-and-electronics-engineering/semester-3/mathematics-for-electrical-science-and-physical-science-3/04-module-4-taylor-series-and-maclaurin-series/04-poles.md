---
title: "Poles"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 4: Taylor series and Maclaurin series"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35a7d"
status: "completed"
scrapedAt: "2026-05-23T16:14:48.804Z"
---
# Module 4: Taylor Series and Maclaurin Series - Poles

This module delves into the behavior of complex functions around their singular points, specifically focusing on *poles*. Understanding poles is crucial for analyzing the properties of complex functions and is foundational for advanced topics like residue calculus, which is essential for solving integrals and analyzing systems in electrical and physical sciences.

## 1. Introduction to Singularities

Before diving into poles, it's important to understand what a singularity is in the context of complex functions.

*   **Analytic Function:** A function $f(z)$ is analytic in a domain $D$ if it is differentiable at every point in $D$.
*   **Singularity:** A point $z_0$ where a function $f(z)$ is *not* analytic is called a singularity.

There are different types of singularities:

*   **Removable Singularity:** If $\lim_{z \to z_0} f(z)$ exists and is finite, then $z_0$ is a removable singularity. The function can be redefined at $z_0$ to be analytic.
*   **Pole:** This is the focus of our current study. A pole is a singularity where the function "blows up" in a specific way.
*   **Essential Singularity:** If neither of the above conditions holds, $z_0$ is an essential singularity. The behavior of the function near an essential singularity is very complex (e.g., Picard's Great Theorem).

## 2. Poles: Definition and Classification

A point $z_0$ is a **pole** of order $m$ if the function $f(z)$ can be written in the form:

$f(z) = \frac{g(z)}{(z-z_0)^m}$

where $g(z)$ is analytic and non-zero at $z_0$, and $m$ is a positive integer.

*   **Order of a Pole:** The integer $m$ is the order of the pole.
*   **Simple Pole:** A pole of order $m=1$ is called a simple pole.

**Alternative Definition using Limits:**

A point $z_0$ is a pole of order $m$ if and only if:
1.  $\lim_{z \to z_0} (z-z_0)^m f(z) = L$, where $L$ is a finite non-zero complex number.
2.  $\lim_{z \to z_0} (z-z_0)^{m+1} f(z) = 0$.

**Alternative Definition using Laurent Series:**

A point $z_0$ is a pole of order $m$ if its Laurent series expansion around $z_0$ has a finite number of terms with negative powers of $(z-z_0)$. The order of the pole is the highest power of $(z-z_0)$ in the principal part of the Laurent series.

$f(z) = \sum_{n=-\infty}^{\infty} c_n (z-z_0)^n$

If $c_{-m} \neq 0$ and $c_n = 0$ for all $n < -m$, then $z_0$ is a pole of order $m$.

*   **Simple Pole:** If the principal part consists only of the term $c_{-1}(z-z_0)^{-1}$, then $z_0$ is a simple pole.
*   **Pole of Infinite Order:** If the principal part has infinitely many terms, $z_0$ is not a pole but an essential singularity.

**Key Concept Connection:** This definition directly relates to **Course Outcome CO4**, which mentions understanding the series expansion of complex functions about a singularity.

**Reference:** Kreyszig's *Advanced Engineering Mathematics* (10th ed.) Chapter 15 on Complex Analysis discusses singularities and poles in detail. Zill and Shanahan's *Complex Analysis* (3rd ed.) also provides comprehensive coverage.

### Examples of Poles:

1.  **$f(z) = \frac{1}{z-2}$**: $z_0 = 2$ is a simple pole (order 1). Here, $g(z)=1$, which is analytic and non-zero at $z=2$. The Laurent series is already in the form $1 \cdot (z-2)^{-1}$.

2.  **$f(z) = \frac{z+1}{(z-3)^2}$**: $z_0 = 3$ is a pole of order 2. Here, $g(z) = z+1$, which is analytic and non-zero at $z=3$. The Laurent series around $z=3$ would be $(z-3)^{-2} \cdot (z+1) = (z-3)^{-2} \cdot ((z-3)+4) = (z-3)^{-1} + 4(z-3)^{-2}$. The highest negative power is $-2$, so it's a pole of order 2.

3.  **$f(z) = \frac{\sin(z)}{z^3}$**: The Maclaurin series for $\sin(z)$ is $z - \frac{z^3}{3!} + \frac{z^5}{5!} - \dots$.
    So, $f(z) = \frac{1}{z^3} \left( z - \frac{z^3}{3!} + \frac{z^5}{5!} - \dots \right) = \frac{1}{z^2} - \frac{1}{3!} + \frac{z^2}{5!} - \dots$.
    The singularity is at $z_0 = 0$. The principal part has terms $\frac{1}{z^2}$, so $z_0=0$ is a pole of order 2.

4.  **$f(z) = e^{1/z}$**: The Laurent series around $z_0 = 0$ is $1 + \frac{1}{z} + \frac{1}{2!z^2} + \frac{1}{3!z^3} + \dots$. This series has infinitely many terms with negative powers of $z$. Therefore, $z_0=0$ is an **essential singularity**, not a pole.

## 3. Determining the Order of a Pole

Several methods can be used to determine the order of a pole at $z_0$.

### Method 1: Using Limits

To check if $z_0$ is a pole of order $m$:
*   Calculate $\lim_{z \to z_0} (z-z_0)^k f(z)$ for $k=1, 2, 3, \dots$.
*   The smallest positive integer $m$ for which this limit is finite and non-zero indicates that $z_0$ is a pole of order $m$.
*   If the limit is zero for all positive integers $k$, $z_0$ is a removable singularity.
*   If the limit goes to infinity for all positive integers $k$, $z_0$ is an essential singularity (or a pole of infinite order, though this is less common in practical applications and often implies an essential singularity).

**Example:** For $f(z) = \frac{z^2+1}{(z-1)^3}$, find the singularity at $z_0=1$.
*   $k=1$: $\lim_{z \to 1} (z-1) \frac{z^2+1}{(z-1)^3} = \lim_{z \to 1} \frac{z^2+1}{(z-1)^2} = \infty$.
*   $k=2$: $\lim_{z \to 1} (z-1)^2 \frac{z^2+1}{(z-1)^3} = \lim_{z \to 1} \frac{z^2+1}{z-1} = \infty$.
*   $k=3$: $\lim_{z \to 1} (z-1)^3 \frac{z^2+1}{(z-1)^3} = \lim_{z \to 1} (z^2+1) = 1^2+1 = 2$.
Since the limit is finite and non-zero for $m=3$, $z_0=1$ is a pole of order 3.

### Method 2: Using Derivatives

If $f(z)$ has a pole of order $m$ at $z_0$, then the function $h(z) = (z-z_0)^m f(z)$ is analytic at $z_0$ and $h(z_0) \neq 0$. This implies that the first $m-1$ derivatives of $h(z)$ evaluated at $z_0$ are zero, and the $m$-th derivative is non-zero.

Specifically, if $z_0$ is a pole of order $m$, then:
*   $\lim_{z \to z_0} \frac{d^k}{dz^k} [(z-z_0)^m f(z)] = 0$ for $k = 0, 1, \dots, m-1$.
*   $\lim_{z \to z_0} \frac{d^m}{dz^m} [(z-z_0)^m f(z)] \neq 0$ and is finite.

This method can be computationally intensive for higher-order poles.

### Method 3: Using Laurent Series Expansion

As stated earlier, finding the Laurent series expansion of $f(z)$ around $z_0$ is a direct way to identify the type and order of singularity.
*   If the principal part has finitely many terms, it's a pole. The order is the highest negative exponent.
*   If the principal part has only $(z-z_0)^{-1}$, it's a simple pole.

**Example:** For $f(z) = \frac{1}{z^2(z-1)}$, find the singularities.
*   **Singularity at $z_0=0$:**
    We need the Laurent series around $z=0$.
    $f(z) = \frac{1}{z^2} \cdot \frac{1}{z-1} = \frac{1}{z^2} \cdot \frac{-1}{1-z}$.
    Using the geometric series $\frac{1}{1-z} = 1 + z + z^2 + z^3 + \dots$ for $|z|<1$.
    $f(z) = \frac{-1}{z^2} (1 + z + z^2 + z^3 + \dots)$
    $f(z) = -\frac{1}{z^2} - \frac{1}{z} - 1 - z - z^2 - \dots$
    The principal part is $-\frac{1}{z^2} - \frac{1}{z}$. The highest negative power is $-2$. So, $z_0=0$ is a pole of order 2.

*   **Singularity at $z_0=1$:**
    We need the Laurent series around $z=1$. Let $w = z-1$, so $z = w+1$.
    $f(z) = \frac{1}{(w+1)^2 w} = \frac{1}{w} \cdot \frac{1}{(w+1)^2}$.
    We need the Taylor series of $\frac{1}{(w+1)^2}$ around $w=0$.
    Let $h(w) = \frac{1}{(w+1)^2}$. Then $h'(w) = \frac{-2}{(w+1)^3}$.
    $h(0) = 1$, $h'(0) = -2$.
    The Taylor expansion is $h(w) = h(0) + h'(0)w + \dots = 1 - 2w + \dots$.
    So, $f(z) = \frac{1}{w} (1 - 2w + \dots) = \frac{1}{w} - 2 + \dots$.
    Substituting back $w = z-1$:
    $f(z) = \frac{1}{z-1} - 2 + \dots$.
    The principal part is $\frac{1}{z-1}$. The highest negative power is $-1$. So, $z_0=1$ is a simple pole (pole of order 1).

**Important Point:** The order of a pole is determined by the lowest power of $(z-z_0)$ in the denominator of the factored form of the function, provided the numerator is non-zero at $z_0$.

## 4. Poles at Infinity

The behavior of a function $f(z)$ at infinity can be analyzed by considering the function $g(w) = f(1/w)$ and examining its behavior at $w=0$.

*   If $g(w)$ has a pole of order $m$ at $w=0$, then $f(z)$ has a pole of order $m$ at infinity.
*   If $g(w)$ has a removable singularity at $w=0$, then $f(z)$ is bounded at infinity.
*   If $g(w)$ has an essential singularity at $w=0$, then $f(z)$ has an essential singularity at infinity.

**Example:** $f(z) = z^2$.
Let $g(w) = f(1/w) = (1/w)^2 = 1/w^2$.
At $w=0$, $g(w)$ has a pole of order 2. Therefore, $f(z) = z^2$ has a pole of order 2 at infinity.

**Example:** $f(z) = \frac{z+1}{z-1}$.
Let $g(w) = f(1/w) = \frac{1/w + 1}{1/w - 1} = \frac{(1+w)/w}{(1-w)/w} = \frac{1+w}{1-w}$.
As $w \to 0$, $g(w) \to \frac{1+0}{1-0} = 1$.
Since $\lim_{w \to 0} g(w)$ exists and is finite, $f(z)$ is bounded at infinity. It does not have a pole at infinity.

## 5. Residue at a Pole

The residue of a function $f(z)$ at a pole $z_0$ is the coefficient $c_{-1}$ of the $(z-z_0)^{-1}$ term in its Laurent series expansion around $z_0$. This is denoted by $\text{Res}(f, z_0)$.

The residue is crucial for evaluating contour integrals using the **Residue Theorem**, which is a direct application of **Course Outcome CO4**.

### Formulas for Calculating Residues at Poles:

Let $z_0$ be a pole of order $m$.

1.  **For a pole of order $m$:**
    $\text{Res}(f, z_0) = \frac{1}{(m-1)!} \lim_{z \to z_0} \frac{d^{m-1}}{dz^{m-1}} [(z-z_0)^m f(z)]$

2.  **For a simple pole ($m=1$):**
    $\text{Res}(f, z_0) = \lim_{z \to z_0} (z-z_0) f(z)$

3.  **If $f(z)$ can be written as $\frac{p(z)}{q(z)}$ where $p(z_0) \neq 0$, $q(z_0) = 0$, and $q'(z_0) \neq 0$ (i.e., $z_0$ is a simple pole of $f(z)$ due to $q(z)$ having a simple zero):**
    $\text{Res}(f, z_0) = \frac{p(z_0)}{q'(z_0)}$

**Example:** Find the residue of $f(z) = \frac{z^2+1}{(z-1)^3}$ at $z_0=1$.
We know $z_0=1$ is a pole of order 3. We use formula 1 with $m=3$.
$\text{Res}(f, 1) = \frac{1}{(3-1)!} \lim_{z \to 1} \frac{d^2}{dz^2} [(z-1)^3 \frac{z^2+1}{(z-1)^3}]$
$\text{Res}(f, 1) = \frac{1}{2!} \lim_{z \to 1} \frac{d^2}{dz^2} (z^2+1)$
$\text{Res}(f, 1) = \frac{1}{2} \lim_{z \to 1} \frac{d}{dz} (2z)$
$\text{Res}(f, 1) = \frac{1}{2} \lim_{z \to 1} (2) = \frac{1}{2} \cdot 2 = 1$.

**Example:** Find the residue of $f(z) = \frac{e^z}{z(z-2)}$ at $z=2$.
$z_0=2$ is a simple pole. We use formula 2.
$\text{Res}(f, 2) = \lim_{z \to 2} (z-2) \frac{e^z}{z(z-2)}$
$\text{Res}(f, 2) = \lim_{z \to 2} \frac{e^z}{z} = \frac{e^2}{2}$.

Alternatively, using formula 3:
$p(z) = e^z$, $q(z) = z(z-2) = z^2 - 2z$.
$p(2) = e^2$.
$q'(z) = 2z - 2$.
$q'(2) = 2(2) - 2 = 4 - 2 = 2$.
Since $p(2) \neq 0$ and $q'(2) \neq 0$, $z=2$ is a simple pole.
$\text{Res}(f, 2) = \frac{p(2)}{q'(2)} = \frac{e^2}{2}$.

## 6. Poles and the Behavior of Functions

Poles are critical points that dictate the behavior of a complex function.

*   **Near a pole:** The magnitude of the function $|f(z)|$ tends to infinity as $z$ approaches the pole $z_0$.
*   **Mapping properties:** Poles are points where the mapping $w=f(z)$ can map regions to unbounded areas.
*   **Singularities in Fourier Transforms:** Poles in the complex plane for the Fourier Transform of a signal correspond to resonant frequencies or inherent characteristics of the system that generates the signal. Understanding these poles is vital for system analysis and design. This relates to **Course Outcome CO1**.

**Reference:** Kreyszig, Chapter 15, discusses the implications of singularities, including poles, on the behavior of analytic functions and their mappings. Ramana's *Higher Engineering Mathematics* and Grewal's *Higher Engineering Mathematics* also cover these concepts.

## 7. Practice Questions

1.  **Identify the type and order of singularities for the following functions:**
    a) $f(z) = \frac{z^2 - 4}{z^2 + 1}$
    b) $f(z) = \frac{\sin(z)}{z^2}$
    c) $f(z) = \frac{1}{z^2(z^2+4)}$
    d) $f(z) = e^{1/(z-1)}$
    e) $f(z) = \frac{z}{z^4 - 1}$

2.  **Find the residue of the function $f(z) = \frac{z e^{iz}}{z^2 + 4}$ at $z = 2i$.**

3.  **Determine the order of the pole of $f(z) = \frac{\cos(z)}{z^2(z-\pi)^3}$ at $z=0$.**

4.  **Analyze the behavior of $f(z) = \frac{1}{z-3}$ near $z=3$. Is it a pole? If so, what is its order?**

5.  **Consider the function $f(z) = \frac{1}{z^2 - z}$. Find the residues at all its singularities.**

## 8. Answers to Practice Questions

1.  **Identify the type and order of singularities for the following functions:**
    a) $f(z) = \frac{z^2 - 4}{z^2 + 1}$: Singularities at $z^2+1 = 0 \implies z = \pm i$.
       Let's check $z=i$: $f(z) = \frac{z^2-4}{(z-i)(z+i)}$.
       $\lim_{z \to i} (z-i) f(z) = \lim_{z \to i} \frac{z^2-4}{z+i} = \frac{i^2-4}{i+i} = \frac{-1-4}{2i} = \frac{-5}{2i} = \frac{5i}{2}$ (finite, non-zero).
       So, $z=i$ is a simple pole.
       Similarly, $z=-i$ is a simple pole.

    b) $f(z) = \frac{\sin(z)}{z^2}$: Singularity at $z=0$.
       $\sin(z) = z - \frac{z^3}{3!} + \frac{z^5}{5!} - \dots$
       $f(z) = \frac{1}{z^2} (z - \frac{z^3}{3!} + \dots) = \frac{1}{z} - \frac{z}{3!} + \dots$
       The principal part has $\frac{1}{z}$. So, $z=0$ is a simple pole.

    c) $f(z) = \frac{1}{z^2(z^2+4)}$: Singularities at $z^2=0 \implies z=0$ (order 2), and $z^2+4=0 \implies z=\pm 2i$.
       At $z=0$: $f(z) = \frac{1}{z^2} \frac{1}{z^2+4}$. As $z \to 0$, $f(z) \sim \frac{1}{z^2 \cdot 4} = \frac{1}{4z^2}$.
       So, $z=0$ is a pole of order 2.
       At $z=2i$: $f(z) = \frac{1}{z^2(z-2i)(z+2i)}$.
       $\lim_{z \to 2i} (z-2i) f(z) = \lim_{z \to 2i} \frac{1}{z^2(z+2i)} = \frac{1}{(2i)^2 (2i+2i)} = \frac{1}{-4 (4i)} = \frac{1}{-16i} = \frac{i}{16}$ (finite, non-zero).
       So, $z=2i$ is a simple pole.
       Similarly, $z=-2i$ is a simple pole.

    d) $f(z) = e^{1/(z-1)}$: Singularity at $z=1$.
       Let $w = z-1$. $f(z) = e^{1/w}$.
       Laurent series for $e^u$ is $1 + u + \frac{u^2}{2!} + \dots$.
       $e^{1/w} = 1 + \frac{1}{w} + \frac{1}{2!w^2} + \frac{1}{3!w^3} + \dots$
       This has infinitely many terms in the principal part. So, $z=1$ is an essential singularity.

    e) $f(z) = \frac{z}{z^4 - 1}$: Singularities at $z^4 - 1 = 0 \implies z^4 = 1 \implies z = 1, -1, i, -i$.
       For $z=1$: $f(z) = \frac{z}{(z-1)(z+1)(z-i)(z+i)}$.
       $\lim_{z \to 1} (z-1) f(z) = \lim_{z \to 1} \frac{z}{(z+1)(z-i)(z+i)} = \frac{1}{(1+1)(1-i)(1+i)} = \frac{1}{2(1-i^2)} = \frac{1}{2(1-(-1))} = \frac{1}{4}$ (finite, non-zero).
       So, $z=1$ is a simple pole.
       By symmetry, $z=-1$, $z=i$, and $z=-i$ are also simple poles.

2.  **Find the residue of the function $f(z) = \frac{z e^{iz}}{z^2 + 4}$ at $z = 2i$.**
    $z^2+4 = (z-2i)(z+2i)$. So $z=2i$ is a simple pole.
    Using the formula $\text{Res}(f, z_0) = \lim_{z \to z_0} (z-z_0) f(z)$:
    $\text{Res}(f, 2i) = \lim_{z \to 2i} (z-2i) \frac{z e^{iz}}{(z-2i)(z+2i)}$
    $= \lim_{z \to 2i} \frac{z e^{iz}}{z+2i} = \frac{2i e^{i(2i)}}{2i+2i} = \frac{2i e^{-2}}{4i} = \frac{e^{-2}}{2}$.

3.  **Determine the order of the pole of $f(z) = \frac{\cos(z)}{z^2(z-\pi)^3}$ at $z=0$.**
    We need to check the behavior of $f(z)$ near $z=0$.
    The factor $z^2$ in the denominator suggests a pole of at least order 2.
    The factor $(z-\pi)^3$ is non-zero at $z=0$.
    The numerator $\cos(z)$ is non-zero at $z=0$ ($\cos(0)=1$).
    So, $f(z) = \frac{\cos(z)}{(z-\pi)^3} \cdot \frac{1}{z^2}$.
    Let $g(z) = \frac{\cos(z)}{(z-\pi)^3}$. This function is analytic and non-zero at $z=0$.
    $g(0) = \frac{\cos(0)}{(0-\pi)^3} = \frac{1}{-\pi^3} \neq 0$.
    Thus, $f(z) = g(z) \cdot \frac{1}{z^2}$. The singularity at $z=0$ is a pole of order 2.

4.  **Analyze the behavior of $f(z) = \frac{1}{z-3}$ near $z=3$. Is it a pole? If so, what is its order?**
    Yes, $z=3$ is a singularity because the denominator is zero.
    We can write $f(z) = \frac{1}{z-3}$. Here, $g(z) = 1$, which is analytic and non-zero at $z=3$.
    The form is $\frac{g(z)}{(z-z_0)^m}$ with $g(z)=1$ and $m=1$.
    Therefore, $z=3$ is a simple pole (pole of order 1).

5.  **Consider the function $f(z) = \frac{1}{z^2 - z}$. Find the residues at all its singularities.**
    The singularities occur when $z^2 - z = 0 \implies z(z-1) = 0$.
    So, the singularities are at $z_0=0$ and $z_0=1$. Both are simple poles.

    **Residue at $z=0$**:
    $\text{Res}(f, 0) = \lim_{z \to 0} (z-0) f(z) = \lim_{z \to 0} z \cdot \frac{1}{z(z-1)}$
    $= \lim_{z \to 0} \frac{1}{z-1} = \frac{1}{0-1} = -1$.

    **Residue at $z=1$**:
    $\text{Res}(f, 1) = \lim_{z \to 1} (z-1) f(z) = \lim_{z \to 1} (z-1) \cdot \frac{1}{z(z-1)}$
    $= \lim_{z \to 1} \frac{1}{z} = \frac{1}{1} = 1$.

## 9. Important Points to Remember

*   **Poles are singularities where a function "blows up" in a specific, controlled manner.**
*   **The order of a pole $m$ indicates that the function behaves like $(z-z_0)^{-m}$ near $z_0$.**
*   **Laurent series expansion is a fundamental tool to identify poles and their orders.** The order is the highest negative power of $(z-z_0)$ in the principal part.
*   **The residue at a pole is the coefficient of $(z-z_0)^{-1}$ in the Laurent series.** It's vital for contour integration.
*   **Residue calculation formulas provide efficient ways to find residues without full Laurent series expansion.**
*   **Poles have significant implications for the behavior and analysis of functions in engineering and physical sciences, particularly in areas like signal processing (Fourier transforms) and control systems.**

This module provides the groundwork for understanding singularities, which is a core component for **Course Outcome CO4** and connects to **CO1** and **CO2** through the broader context of complex function analysis.
