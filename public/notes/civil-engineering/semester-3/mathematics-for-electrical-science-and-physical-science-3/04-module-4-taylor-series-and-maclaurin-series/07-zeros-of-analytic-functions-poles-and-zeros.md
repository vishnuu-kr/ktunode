---
title: "Zeros of Analytic functions – Poles and Zeros"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 4: Taylor series and Maclaurin series"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba8106ab"
status: "completed"
scrapedAt: "2026-05-20T18:41:35.511Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3
## Module 4: Taylor Series and Maclaurin Series
### Topic: Zeros of Analytic Functions – Poles and Zeros

---

### Learning Outcomes:

Upon completion of this topic, you should be able to:

*   **Understand and identify the zeros of an analytic function.**
*   **Determine the order of a zero.**
*   **Understand and identify poles of a function.**
*   **Determine the order of a pole.**
*   **Relate the behavior of a function near a zero or a pole to its Taylor/Laurent series.**
*   **Apply the concepts of zeros and poles to analyze function behavior.**

---

### 1. Zeros of Analytic Functions

#### 1.1 Definition of a Zero

An **analytic function** $f(z)$ has a **zero** at a point $z_0$ if $f(z_0) = 0$.

However, for functions in complex analysis, we are more interested in the *nature* of this zero, especially when considering its behavior in a neighborhood.

#### 1.2 Order of a Zero

A point $z_0$ is a zero of order $m$ for an analytic function $f(z)$ if:

*   $f(z_0) = f'(z_0) = f''(z_0) = \dots = f^{(m-1)}(z_0) = 0$
*   $f^{(m)}(z_0) \neq 0$

This means that the first $m$ derivatives of the function at $z_0$ are zero, but the $(m+1)$-th derivative is non-zero.

**Connection to Taylor Series:**

If $f(z)$ is analytic in a neighborhood of $z_0$, its Taylor series expansion around $z_0$ is given by:

$f(z) = \sum_{n=0}^{\infty} a_n (z - z_0)^n = a_0 + a_1(z - z_0) + a_2(z - z_0)^2 + \dots$

where $a_n = \frac{f^{(n)}(z_0)}{n!}$.

*   If $f(z_0) = 0$, then $a_0 = 0$.
*   If $f'(z_0) = 0$, then $a_1 = 0$.
*   ...
*   If $f^{(m-1)}(z_0) = 0$, then $a_{m-1} = 0$.

Therefore, if $z_0$ is a zero of order $m$, the Taylor series expansion of $f(z)$ around $z_0$ will have its first non-zero coefficient as $a_m$, where $a_m = \frac{f^{(m)}(z_0)}{m!} \neq 0$.

This can be written as:

$f(z) = a_m (z - z_0)^m + a_{m+1} (z - z_0)^{m+1} + \dots$

$f(z) = (z - z_0)^m [a_m + a_{m+1} (z - z_0) + \dots]$

$f(z) = (z - z_0)^m g(z)$

where $g(z) = a_m + a_{m+1} (z - z_0) + \dots$ is an analytic function in the neighborhood of $z_0$ and $g(z_0) = a_m \neq 0$.

**Key takeaway:** A zero of order $m$ at $z_0$ means that $(z - z_0)^m$ is a factor of $f(z)$, and the remaining factor is analytic and non-zero at $z_0$.

#### 1.3 Isolated Zeros

A zero $z_0$ is called an **isolated zero** if there exists a punctured disk around $z_0$ where $f(z)$ has no other zeros. For analytic functions, all zeros are isolated, unless the function is identically zero in a neighborhood.

**Principle of Unique Continuation:** If an analytic function is zero on a set that has an accumulation point within its domain, then the function must be identically zero in its entire domain.

#### 1.4 Examples of Zeros

**Example 1:** $f(z) = z^2 - 2z + 1$
Find the zeros and their orders.

*   $f(z) = (z-1)^2$.
*   $f(1) = (1-1)^2 = 0$. So $z_0 = 1$ is a zero.
*   $f'(z) = 2(z-1)$. $f'(1) = 2(1-1) = 0$.
*   $f''(z) = 2$. $f''(1) = 2 \neq 0$.

Since the first non-zero derivative is the second derivative, $z_0 = 1$ is a zero of order $m=2$.
We can also see this from the factored form $f(z) = (z-1)^2 \cdot 1$, where $g(z) = 1$ is analytic and non-zero at $z=1$.

**Example 2:** $f(z) = \sin(z)$
Find the zeros and their orders.

*   Zeros of $\sin(z)$ occur when $z = n\pi$ for integer $n$. Let's consider $z_0 = 0$.
*   $f(0) = \sin(0) = 0$.
*   $f'(z) = \cos(z)$. $f'(0) = \cos(0) = 1 \neq 0$.

Since the first derivative at $z_0 = 0$ is non-zero, $z_0 = 0$ is a zero of order $m=1$.

The Taylor series of $\sin(z)$ around $z=0$ (Maclaurin series) is:
$\sin(z) = z - \frac{z^3}{3!} + \frac{z^5}{5!} - \dots = z \left( 1 - \frac{z^2}{3!} + \frac{z^4}{5!} - \dots \right)$
Here, $a_1 = 1 \neq 0$, confirming $z_0=0$ is a zero of order 1.

**Example 3:** $f(z) = e^z - 1 - z$
Find the zeros and their orders.

*   $f(0) = e^0 - 1 - 0 = 1 - 1 - 0 = 0$. So $z_0 = 0$ is a zero.
*   $f'(z) = e^z - 1$. $f'(0) = e^0 - 1 = 1 - 1 = 0$.
*   $f''(z) = e^z$. $f''(0) = e^0 = 1 \neq 0$.

Since the first non-zero derivative is the second derivative, $z_0 = 0$ is a zero of order $m=2$.
The Maclaurin series of $e^z$ is $1 + z + \frac{z^2}{2!} + \frac{z^3}{3!} + \dots$.
So, $f(z) = (1 + z + \frac{z^2}{2!} + \frac{z^3}{3!} + \dots) - 1 - z = \frac{z^2}{2!} + \frac{z^3}{3!} + \dots = z^2 \left( \frac{1}{2!} + \frac{z}{3!} + \dots \right)$.
The coefficient $a_2 = \frac{1}{2!} \neq 0$, confirming $z_0=0$ is a zero of order 2.

---

### 2. Poles of a Function

#### 2.1 Definition of a Pole

A point $z_0$ is a **pole** of order $m$ for a function $f(z)$ if $f(z)$ has a Laurent series expansion around $z_0$ of the form:

$f(z) = \frac{a_{-m}}{(z - z_0)^m} + \frac{a_{-m+1}}{(z - z_0)^{m-1}} + \dots + \frac{a_{-1}}{(z - z_0)} + a_0 + a_1(z - z_0) + \dots$

where $a_{-m} \neq 0$ and $m$ is a positive integer.

The term $\frac{a_{-m}}{(z - z_0)^m}$ is called the **principal part** of the Laurent series, and it contains only negative powers of $(z - z_0)$.

**Important Characteristics of Poles:**

*   As $z \to z_0$, $|f(z)| \to \infty$.
*   The function $f(z)$ is not defined at $z_0$, but it has a singularity at $z_0$.

#### 2.2 Alternative Definition (using zeros)

A point $z_0$ is a pole of order $m$ for $f(z)$ if $f(z)$ can be written in the form:

$f(z) = \frac{g(z)}{(z - z_0)^m}$

where $g(z)$ is analytic in a neighborhood of $z_0$ and $g(z_0) \neq 0$.

This is equivalent to saying that $\frac{1}{f(z)}$ has a zero of order $m$ at $z_0$.

#### 2.3 Order of a Pole

The order of a pole $z_0$ is the smallest positive integer $m$ such that $(z - z_0)^m f(z)$ is analytic and non-zero at $z_0$.

**Connection to Derivatives (for functions of the form $g(z)/(z-z_0)^m$):**

If $f(z) = \frac{g(z)}{(z - z_0)^m}$ with $g(z_0) \neq 0$ and $g(z)$ analytic at $z_0$, then the derivatives of $f(z)$ at $z_0$ are not directly useful for determining the order of the pole in the same way as for zeros. Instead, we look at the behavior of $(z-z_0)^m f(z)$.

Let $h(z) = (z - z_0)^m f(z)$. If $z_0$ is a pole of order $m$, then $h(z_0) \neq 0$ and $h(z)$ is analytic at $z_0$.

**How to find the order of a pole:**

1.  **Factorization:** Try to express $f(z)$ in the form $\frac{g(z)}{(z - z_0)^m}$, where $g(z_0) \neq 0$.
2.  **Laurent Series:** Expand $f(z)$ around $z_0$ and find the smallest positive integer $m$ such that the coefficient of $(z - z_0)^{-m}$ is non-zero.
3.  **Using Derivatives of $1/f(z)$:** If $f(z_0)$ is undefined, consider $h(z) = \frac{1}{f(z)}$. If $h(z)$ has a zero of order $m$ at $z_0$, then $f(z)$ has a pole of order $m$ at $z_0$. This means:
    *   $h(z_0) = 0$
    *   $h'(z_0) = 0$
    *   ...
    *   $h^{(m-1)}(z_0) = 0$
    *   $h^{(m)}(z_0) \neq 0$

#### 2.4 Isolated Singularities

Poles are a type of **isolated singularity**. An isolated singularity $z_0$ of $f(z)$ is a point where $f(z)$ is not analytic, but there exists a punctured disk around $z_0$ where $f(z)$ *is* analytic.

*   **Removable Singularity:** If the principal part of the Laurent series is zero (i.e., all $a_{-k}$ for $k > 0$ are zero).
*   **Pole:** If the principal part has a finite number of non-zero terms (i.e., $a_{-m} \neq 0$ and $a_{-k} = 0$ for $k > m$).
*   **Essential Singularity:** If the principal part has infinitely many non-zero terms.

#### 2.5 Examples of Poles

**Example 1:** $f(z) = \frac{1}{z^2}$
Find the poles and their orders.

*   $f(z)$ is not analytic at $z_0 = 0$.
*   The Laurent series around $z_0 = 0$ is already given: $f(z) = 1 \cdot (z - 0)^{-2}$.
*   Here, $a_{-2} = 1 \neq 0$, and $m=2$.
*   Thus, $z_0 = 0$ is a pole of order 2.

Using the alternative definition:
$f(z) = \frac{1}{(z - 0)^2}$. Here $g(z) = 1$, which is analytic and $g(0) = 1 \neq 0$. So $z_0=0$ is a pole of order 2.

**Example 2:** $f(z) = \frac{\sin(z)}{z}$
Find the poles and their orders.

*   $f(z)$ is not analytic at $z_0 = 0$ due to the $z$ in the denominator.
*   Let's use the Maclaurin series for $\sin(z)$:
    $\sin(z) = z - \frac{z^3}{3!} + \frac{z^5}{5!} - \dots$
*   So, $f(z) = \frac{z - \frac{z^3}{3!} + \frac{z^5}{5!} - \dots}{z} = 1 - \frac{z^2}{3!} + \frac{z^4}{5!} - \dots$
*   This is a Taylor series (only non-negative powers of $z$). This means the principal part is zero.
*   Therefore, $z_0 = 0$ is a **removable singularity**, not a pole. $f(z)$ can be made analytic by defining $f(0) = 1$.

**Example 3:** $f(z) = \frac{e^z}{(z - 1)^3}$
Find the poles and their orders.

*   $f(z)$ is not analytic at $z_0 = 1$.
*   We can write $f(z) = \frac{g(z)}{(z - 1)^3}$ where $g(z) = e^z$.
*   $g(z) = e^z$ is analytic at $z_0 = 1$, and $g(1) = e^1 = e \neq 0$.
*   Therefore, $z_0 = 1$ is a pole of order $m=3$.

Using the derivative method:
Let $h(z) = \frac{1}{f(z)} = \frac{(z-1)^3}{e^z}$. We want to find the order of the zero of $h(z)$ at $z_0=1$.
*   $h(1) = \frac{(1-1)^3}{e^1} = \frac{0}{e} = 0$.
*   $h'(z) = \frac{3(z-1)^2 e^z - (z-1)^3 e^z}{(e^z)^2} = \frac{(z-1)^2 e^z (3 - (z-1))}{(e^z)^2} = \frac{(z-1)^2 (4-z)}{e^z}$.
    $h'(1) = \frac{(1-1)^2 (4-1)}{e^1} = \frac{0 \cdot 3}{e} = 0$.
*   $h''(z) = \frac{d}{dz} \left( \frac{(z-1)^2 (4-z)}{e^z} \right)$. This will have a factor of $(z-1)$ in its numerator after differentiating the numerator.
    Let's try a simpler approach: $h(z) = (z-1)^3 e^{-z}$.
    $h'(z) = 3(z-1)^2 e^{-z} - (z-1)^3 e^{-z} = e^{-z} (z-1)^2 (3 - (z-1)) = e^{-z} (z-1)^2 (4-z)$.
    $h''(z) = -e^{-z} (z-1)^2 (4-z) + e^{-z} [2(z-1)(4-z) - (z-1)^2]$.
    $h''(1) = -e^{-1} (0)^2 (4-1) + e^{-1} [2(0)(4-1) - (0)^2] = 0$.
*   $h'''(z)$: The derivatives of $(z-1)^k$ will eventually give a non-zero term for $k=3$.
    Let's use Taylor series for $h(z) = (z-1)^3 e^{-z}$ around $z=1$.
    $h(z) = (z-1)^3 \sum_{n=0}^\infty \frac{(-(z-1))^n}{n!} = \sum_{n=0}^\infty \frac{(-1)^n}{n!} (z-1)^{n+3}$.
    This is $h(z) = (z-1)^3 - \frac{1}{1!}(z-1)^4 + \frac{1}{2!}(z-1)^5 - \dots$.
    The first non-zero coefficient is for $(z-1)^3$, which is $1$.
    So $h(z)$ has a zero of order 3 at $z=1$. This means $f(z)$ has a pole of order 3 at $z=1$.

**Example 4:** $f(z) = \frac{1}{\sin(z)}$
Find the poles and their orders.

*   $f(z)$ is not analytic where $\sin(z) = 0$, which is at $z_0 = n\pi$ for $n \in \mathbb{Z}$. Let's consider $z_0 = 0$.
*   We use $h(z) = \frac{1}{f(z)} = \sin(z)$.
*   We found that $z_0 = 0$ is a zero of order 1 for $\sin(z)$.
*   Therefore, $z_0 = 0$ is a pole of order 1 for $f(z) = \frac{1}{\sin(z)}$.
*   Similarly, for any $z_0 = n\pi$, $\sin(z)$ has a zero of order 1. So $f(z) = \frac{1}{\sin(z)}$ has a pole of order 1 at $z = n\pi$.

---

### 3. Relationship between Taylor/Laurent Series and Zeros/Poles

The structure of the Taylor or Laurent series expansion of a function around a point $z_0$ directly reveals whether $z_0$ is a zero, a pole, or another type of singularity, and its order.

**Summary Table:**

| Feature of $z_0$         | Taylor/Laurent Series Expansion of $f(z)$ around $z_0$                                                                      | Order |
| :----------------------- | :---------------------------------------------------------------------------------------------------------------------------- | :---- |
| **Zero**                 | $f(z) = a_m (z - z_0)^m + a_{m+1} (z - z_0)^{m+1} + \dots$, where $a_m \neq 0$ and $m \ge 1$. No negative powers.                 | $m$   |
| **Non-zero value ($f(z_0) \neq 0$)** | $f(z) = a_0 + a_1 (z - z_0) + a_2 (z - z_0)^2 + \dots$, where $a_0 \neq 0$. No negative powers.                               | N/A   |
| **Pole**                 | $f(z) = \frac{a_{-m}}{(z - z_0)^m} + \dots + \frac{a_{-1}}{(z - z_0)} + a_0 + a_1(z - z_0) + \dots$, where $a_{-m} \neq 0$ and $m \ge 1$. Finite number of negative powers. | $m$   |
| **Removable Singularity** | $f(z) = a_0 + a_1(z - z_0) + a_2(z - z_0)^2 + \dots$, where $a_0$ can be zero or non-zero, but all coefficients of negative powers are zero. | N/A   |
| **Essential Singularity** | $f(z) = \dots + \frac{a_{-2}}{(z - z_0)^2} + \frac{a_{-1}}{(z - z_0)} + a_0 + a_1(z - z_0) + \dots$, with infinitely many non-zero $a_{-k}$ ($k>0$). | N/A   |

**Key Insight:**
*   The presence of negative powers of $(z-z_0)$ in the Laurent series indicates a singularity.
*   The *lowest* power of $(z-z_0)$ with a non-zero coefficient determines the type of singularity.
    *   If it's $(z-z_0)^m$ with $m \ge 1$, it's a pole of order $m$.
    *   If all negative power coefficients are zero, it's either a zero (if the lowest power is $\ge 1$) or a removable singularity (if the lowest power is $0$ and its coefficient is non-zero) or the function is identically zero (if all coefficients are zero).

---

### 4. Practice Questions and Exercises

**Question 1:**
Find the zeros and their orders for the function $f(z) = z^3 \sin(z)$.

**Question 2:**
Determine the order of the pole at $z=0$ for the function $f(z) = \frac{1 - \cos(z)}{z^2}$.

**Question 3:**
Identify the nature and order of the singularity at $z=i$ for the function $f(z) = \frac{e^z}{(z - i)^4}$.

**Question 4:**
Consider the function $f(z) = z^2 (e^z - 1)$. Find the order of the zero at $z=0$.

**Question 5:**
Does the function $f(z) = \frac{\sin(z^2)}{z^2}$ have a pole at $z=0$? If so, what is its order? If not, what type of singularity is it?

---

### 5. Answers to Practice Questions

**Answer 1:**
$f(z) = z^3 \sin(z)$.
We know $\sin(z)$ has a zero of order 1 at $z=0$.
So, $f(z) = z^3 \cdot (z - \frac{z^3}{3!} + \dots) = z^4 - \frac{z^6}{3!} + \dots = z^4 (1 - \frac{z^2}{3!} + \dots)$.
The lowest power of $z$ is 4, and the coefficient is $1 \neq 0$.
Thus, $z=0$ is a zero of order 4.

**Answer 2:**
$f(z) = \frac{1 - \cos(z)}{z^2}$.
The singularity is at $z=0$.
We use the Maclaurin series for $\cos(z) = 1 - \frac{z^2}{2!} + \frac{z^4}{4!} - \dots$.
So, $1 - \cos(z) = 1 - (1 - \frac{z^2}{2!} + \frac{z^4}{4!} - \dots) = \frac{z^2}{2!} - \frac{z^4}{4!} + \dots$.
Then, $f(z) = \frac{\frac{z^2}{2!} - \frac{z^4}{4!} + \dots}{z^2} = \frac{1}{2!} - \frac{z^2}{4!} + \dots$.
This is a Taylor series expansion, meaning the principal part is zero.
The coefficient of $z^0$ is $\frac{1}{2!} \neq 0$.
Therefore, $z=0$ is a removable singularity, not a pole.

**Answer 3:**
$f(z) = \frac{e^z}{(z - i)^4}$.
The singularity is at $z_0 = i$.
We can write $f(z) = \frac{g(z)}{(z - i)^4}$ where $g(z) = e^z$.
$g(z) = e^z$ is analytic at $z=i$, and $g(i) = e^i \neq 0$.
Thus, $z=i$ is a pole of order 4.

**Answer 4:**
$f(z) = z^2 (e^z - 1)$.
The singularity is at $z=0$.
The Maclaurin series for $e^z - 1 = (1 + z + \frac{z^2}{2!} + \frac{z^3}{3!} + \dots) - 1 = z + \frac{z^2}{2!} + \frac{z^3}{3!} + \dots$.
So, $f(z) = z^2 (z + \frac{z^2}{2!} + \frac{z^3}{3!} + \dots) = z^3 + \frac{z^4}{2!} + \frac{z^5}{3!} + \dots = z^3 (1 + \frac{z}{2!} + \frac{z^2}{3!} + \dots)$.
The lowest power of $z$ is 3, and the coefficient is $1 \neq 0$.
Thus, $z=0$ is a zero of order 3.

**Answer 5:**
$f(z) = \frac{\sin(z^2)}{z^2}$.
The singularity is at $z=0$.
Consider the Maclaurin series for $\sin(w) = w - \frac{w^3}{3!} + \frac{w^5}{5!} - \dots$.
Substitute $w = z^2$:
$\sin(z^2) = z^2 - \frac{(z^2)^3}{3!} + \frac{(z^2)^5}{5!} - \dots = z^2 - \frac{z^6}{3!} + \frac{z^{10}}{5!} - \dots$.
Now, $f(z) = \frac{z^2 - \frac{z^6}{3!} + \frac{z^{10}}{5!} - \dots}{z^2} = 1 - \frac{z^4}{3!} + \frac{z^8}{5!} - \dots$.
This is a Taylor series expansion, meaning the principal part is zero. The coefficient of $z^0$ is $1 \neq 0$.
Therefore, $z=0$ is a removable singularity, not a pole.

---

### 6. Important Points to Remember

*   **Zeros:** An analytic function $f(z)$ has a zero of order $m$ at $z_0$ if $f(z_0) = f'(z_0) = \dots = f^{(m-1)}(z_0) = 0$ and $f^{(m)}(z_0) \neq 0$. In terms of the Taylor series, $f(z) = (z-z_0)^m g(z)$ where $g(z_0) \neq 0$.
*   **Poles:** A function $f(z)$ has a pole of order $m$ at $z_0$ if $f(z) = \frac{g(z)}{(z-z_0)^m}$ where $g(z_0) \neq 0$ and $g(z)$ is analytic at $z_0$. In terms of the Laurent series, the highest negative power of $(z-z_0)$ with a non-zero coefficient is $(z-z_0)^{-m}$.
*   **Identifying Poles:** The most reliable way to identify a pole and its order is by examining the Laurent series. If direct factorization is difficult, consider the function $h(z) = 1/f(z)$. The order of the zero of $h(z)$ at $z_0$ is the order of the pole of $f(z)$ at $z_0$.
*   **Isolated Zeros/Poles:** For analytic functions, zeros and poles are always isolated unless the function is identically zero in a neighborhood.
*   **Behavior:** Near a zero of order $m$, $f(z)$ behaves like $a_m (z-z_0)^m$. Near a pole of order $m$, $f(z)$ behaves like $\frac{a_{-m}}{(z-z_0)^m}$, meaning its magnitude grows unboundedly as $z \to z_0$.

---
