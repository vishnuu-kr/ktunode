---
title: "Singularities and Zeros – Isolated Singularity"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 4: Taylor series and Maclaurin series"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba8106a7"
status: "completed"
scrapedAt: "2026-05-20T18:41:32.887Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 4: Taylor Series and Maclaurin Series

### Topic: Singularities and Zeros – Isolated Singularity

---

This topic delves into the behavior of complex functions around specific points, particularly points where the function might not be well-behaved. Understanding singularities is crucial in various fields of electrical and physical science, especially when dealing with phenomena like resonance, poles of electrical circuits, or critical points in physical models.

---

### 1. Learning Outcomes Covered

By the end of this topic, you should be able to:

*   Define and identify isolated singularities of a complex function.
*   Classify isolated singularities into removable singularities, poles, and essential singularities.
*   Determine the order of a pole.
*   Understand the relationship between the Laurent series expansion of a function and the nature of its isolated singularity.
*   Analyze the behavior of functions near their isolated singularities.

---

### 2. Key Concepts and Definitions

#### 2.1. Complex Functions

A complex function $f(z)$ maps complex numbers to complex numbers, i.e., $f: \mathbb{C} \to \mathbb{C}$. Here, $z = x + iy$, where $x$ and $y$ are real numbers, and $i^2 = -1$.

#### 2.2. Singularity

A **singularity** of a complex function $f(z)$ is a point $z_0$ at which $f(z)$ is not analytic (i.e., not differentiable in a neighborhood of $z_0$).

#### 2.3. Isolated Singularity

A singularity $z_0$ of $f(z)$ is called an **isolated singularity** if there exists a punctured disk $0 < |z - z_0| < R$ for some $R > 0$ in which $f(z)$ is analytic. In simpler terms, it's a point where the function fails to be analytic, but in a small region *around* that point (excluding the point itself), the function *is* analytic.

**Important Note:** Non-isolated singularities occur when a function fails to be analytic in every neighborhood of a point. Examples include essential singularities that spread out, or branch points. For this topic, we focus on isolated points of non-analyticity.

#### 2.4. Laurent Series Expansion

The **Laurent series** of a complex function $f(z)$ about an isolated singularity $z_0$ is a representation of $f(z)$ in a punctured disk $0 < |z - z_0| < R$ as:

$f(z) = \sum_{n=-\infty}^{\infty} a_n (z - z_0)^n = \dots + \frac{a_{-2}}{(z - z_0)^2} + \frac{a_{-1}}{z - z_0} + a_0 + a_1 (z - z_0) + a_2 (z - z_0)^2 + \dots$

The Laurent series consists of two parts:

*   **Principal Part:** The part with negative powers of $(z - z_0)$ (i.e., $\sum_{n=-\infty}^{-1} a_n (z - z_0)^n$). This part dictates the nature of the singularity.
*   **Analytic Part (or Taylor Part):** The part with non-negative powers of $(z - z_0)$ (i.e., $\sum_{n=0}^{\infty} a_n (z - z_0)^n$). This part behaves nicely around $z_0$.

---

### 3. Classification of Isolated Singularities

The nature of an isolated singularity $z_0$ is determined by the principal part of its Laurent series expansion.

#### 3.1. Removable Singularity

An isolated singularity $z_0$ is a **removable singularity** if the principal part of the Laurent series contains **no terms** (i.e., $a_n = 0$ for all $n < 0$).

*   **Laurent Series:** $f(z) = a_0 + a_1 (z - z_0) + a_2 (z - z_0)^2 + \dots$
*   **Behavior:** The function can be "made analytic" at $z_0$ by defining or redefining $f(z_0)$ appropriately. Specifically, $\lim_{z \to z_0} f(z)$ exists and is finite. If we define $f(z_0) = \lim_{z \to z_0} f(z)$, the function becomes analytic at $z_0$.
*   **Test:**
    1.  $\lim_{z \to z_0} f(z)$ exists and is finite.
    2.  The Laurent series expansion has no negative powers of $(z - z_0)$.

#### 3.2. Pole

An isolated singularity $z_0$ is a **pole** if the principal part of the Laurent series has a **finite number of terms** with negative powers of $(z - z_0)$.

*   **Laurent Series:** $f(z) = \frac{a_{-m}}{(z - z_0)^m} + \dots + \frac{a_{-1}}{z - z_0} + a_0 + a_1 (z - z_0) + \dots$, where $a_{-m} \neq 0$ and $m \ge 1$.
*   **Order of a Pole:** The **order of the pole** is the smallest positive integer $m$ such that $a_{-m} \neq 0$. If $m=1$, it's a **simple pole**.
*   **Behavior:** As $z \to z_0$, $|f(z)| \to \infty$.
*   **Test for a Pole of Order $m$:**
    1.  $\lim_{z \to z_0} (z - z_0)^m f(z)$ exists and is finite and non-zero.
    2.  The Laurent series expansion has $a_{-m} \neq 0$ and $a_n = 0$ for all $n < -m$.

#### 3.3. Essential Singularity

An isolated singularity $z_0$ is an **essential singularity** if the principal part of the Laurent series has an **infinite number of terms** with negative powers of $(z - z_0)$.

*   **Laurent Series:** $f(z) = \sum_{n=-\infty}^{-1} a_n (z - z_0)^n + \sum_{n=0}^{\infty} a_n (z - z_0)^n$, where there are infinitely many non-zero coefficients $a_n$ for $n < 0$.
*   **Behavior:** The function exhibits very wild behavior near an essential singularity. According to **Picard's Little Theorem**, in any neighborhood of an essential singularity, a function takes on every complex value infinitely many times, with at most one exception.
*   **Test:** If an isolated singularity is neither removable nor a pole, it must be an essential singularity.

---

### 4. Examples

#### Example 1: Removable Singularity

Let $f(z) = \frac{\sin z}{z}$.
We want to analyze the singularity at $z_0 = 0$.

*   **Laurent Series:** We know the Maclaurin series for $\sin z$:
    $\sin z = z - \frac{z^3}{3!} + \frac{z^5}{5!} - \dots$
    So, $f(z) = \frac{1}{z} \left( z - \frac{z^3}{3!} + \frac{z^5}{5!} - \dots \right) = 1 - \frac{z^2}{3!} + \frac{z^4}{5!} - \dots$
*   **Analysis:** The Laurent series about $z=0$ is $1 - \frac{z^2}{6} + \frac{z^4}{120} - \dots$. There are no terms with negative powers of $z$.
*   **Classification:** This is a **removable singularity**.
*   **Test:** $\lim_{z \to 0} \frac{\sin z}{z} = 1$ (a finite value).

#### Example 2: Pole

Let $f(z) = \frac{1}{z^2(z-1)}$.
We want to analyze the singularities at $z_0 = 0$ and $z_1 = 1$.

*   **Singularity at $z_0 = 0$:**
    *   Consider the term $\frac{1}{z^2}$. In a neighborhood of $z=0$, $(z-1)$ is analytic and non-zero (close to -1).
    *   Laurent series expansion around $z=0$:
        $f(z) = \frac{1}{z^2} \cdot \frac{1}{z-1} = \frac{1}{z^2} \cdot \frac{-1}{1-z} = -\frac{1}{z^2} (1 + z + z^2 + z^3 + \dots)$
        $f(z) = -\frac{1}{z^2} - \frac{1}{z} - 1 - z - z^2 - \dots$
    *   **Analysis:** The principal part has terms $\frac{-1}{z^2}$ and $\frac{-1}{z}$. The highest negative power is $-2$.
    *   **Classification:** This is a **pole of order 2**.
    *   **Test:** Let $m=2$.
        $\lim_{z \to 0} z^2 f(z) = \lim_{z \to 0} z^2 \left( \frac{1}{z^2(z-1)} \right) = \lim_{z \to 0} \frac{1}{z-1} = \frac{1}{0-1} = -1$.
        Since the limit is finite and non-zero, it confirms a pole of order 2.

*   **Singularity at $z_1 = 1$:**
    *   Consider the term $\frac{1}{z-1}$. In a neighborhood of $z=1$, $\frac{1}{z^2}$ is analytic and non-zero (close to 1).
    *   Let $w = z-1$, so $z = w+1$.
    *   $f(z) = \frac{1}{(w+1)^2(w)} = \frac{1}{w} \cdot \frac{1}{(w+1)^2}$
    *   We need the Taylor series of $\frac{1}{(w+1)^2}$ around $w=0$.
        We know $\frac{1}{1+w} = 1 - w + w^2 - w^3 + \dots$
        Differentiating with respect to $w$:
        $\frac{-1}{(1+w)^2} = -1 - 2w - 3w^2 - \dots$
        So, $\frac{1}{(1+w)^2} = 1 + 2w + 3w^2 + \dots$
    *   $f(z) = \frac{1}{w} (1 + 2w + 3w^2 + \dots) = \frac{1}{w} + 2 + 3w + \dots$
    *   Substituting back $w=z-1$: $f(z) = \frac{1}{z-1} + 2 + 3(z-1) + \dots$
    *   **Analysis:** The principal part has only one term, $\frac{1}{z-1}$. The highest negative power is $-1$.
    *   **Classification:** This is a **simple pole** (pole of order 1).
    *   **Test:** Let $m=1$.
        $\lim_{z \to 1} (z-1) f(z) = \lim_{z \to 1} (z-1) \left( \frac{1}{z^2(z-1)} \right) = \lim_{z \to 1} \frac{1}{z^2} = \frac{1}{1^2} = 1$.
        Since the limit is finite and non-zero, it confirms a simple pole.

#### Example 3: Essential Singularity

Let $f(z) = e^{1/z}$.
We want to analyze the singularity at $z_0 = 0$.

*   **Laurent Series:** We know the Maclaurin series for $e^u$:
    $e^u = 1 + u + \frac{u^2}{2!} + \frac{u^3}{3!} + \dots$
    Let $u = \frac{1}{z}$.
    $f(z) = e^{1/z} = 1 + \frac{1}{z} + \frac{1}{2! z^2} + \frac{1}{3! z^3} + \dots = \sum_{n=0}^{\infty} \frac{1}{n! z^n} = \sum_{n=0}^{\infty} \frac{1}{n!} z^{-n}$
*   **Analysis:** The Laurent series about $z=0$ has terms $\frac{1}{z}, \frac{1}{z^2}, \frac{1}{z^3}, \dots$ with infinitely many non-zero coefficients for negative powers of $z$.
*   **Classification:** This is an **essential singularity**.
*   **Test:** We cannot find a finite integer $m$ such that $\lim_{z \to 0} z^m e^{1/z}$ is finite and non-zero.
    *   If $z = x$ (real and positive, $x \to 0^+$), then $e^{1/x} \to \infty$.
    *   If $z = iy$ (imaginary, $y \to 0^+$), then $e^{1/(iy)} = e^{-i/y} = \cos(-1/y) + i \sin(-1/y) = \cos(1/y) - i \sin(1/y)$. As $y \to 0^+$, $1/y \to \infty$, and $\cos(1/y)$ and $\sin(1/y)$ oscillate between -1 and 1, never approaching a single limit.

---

### 5. Practice Questions

**Instructions:** For each function, identify all isolated singularities and classify them as removable singularities, poles (stating their order), or essential singularities.

1.  $f(z) = \frac{z^2 + 1}{z(z-2)}$
2.  $f(z) = \frac{e^z - 1}{z}$
3.  $f(z) = \frac{\cos z}{z^3}$
4.  $f(z) = \frac{1}{z} \sin\left(\frac{1}{z}\right)$
5.  $f(z) = z^2 e^{1/(z-1)}$

---

### 6. Answers to Practice Questions

1.  **$f(z) = \frac{z^2 + 1}{z(z-2)}$**
    *   **Singularities:** $z=0$ and $z=2$.
    *   **At $z=0$:**
        *   Consider $f(z) = \frac{1}{z} \cdot \frac{z^2+1}{z-2}$.
        *   $\lim_{z \to 0} z f(z) = \lim_{z \to 0} \frac{z^2+1}{z-2} = \frac{0^2+1}{0-2} = -\frac{1}{2}$.
        *   **Classification:** Simple pole (pole of order 1).
    *   **At $z=2$:**
        *   Consider $f(z) = \frac{1}{z-2} \cdot \frac{z^2+1}{z}$.
        *   $\lim_{z \to 2} (z-2) f(z) = \lim_{z \to 2} \frac{z^2+1}{z} = \frac{2^2+1}{2} = \frac{5}{2}$.
        *   **Classification:** Simple pole (pole of order 1).

2.  **$f(z) = \frac{e^z - 1}{z}$**
    *   **Singularity:** $z=0$.
    *   **Maclaurin series for $e^z$:** $e^z = 1 + z + \frac{z^2}{2!} + \frac{z^3}{3!} + \dots$
    *   **Numerator:** $e^z - 1 = z + \frac{z^2}{2!} + \frac{z^3}{3!} + \dots$
    *   **Function:** $f(z) = \frac{z + \frac{z^2}{2!} + \frac{z^3}{3!} + \dots}{z} = 1 + \frac{z}{2!} + \frac{z^2}{3!} + \dots$
    *   **Analysis:** The Laurent series (which is the Taylor series here) has no negative powers of $z$.
    *   **Classification:** Removable singularity.
    *   **Test:** $\lim_{z \to 0} \frac{e^z - 1}{z} = 1$.

3.  **$f(z) = \frac{\cos z}{z^3}$**
    *   **Singularity:** $z=0$.
    *   **Maclaurin series for $\cos z$:** $\cos z = 1 - \frac{z^2}{2!} + \frac{z^4}{4!} - \dots$
    *   **Function:** $f(z) = \frac{1}{z^3} \left( 1 - \frac{z^2}{2!} + \frac{z^4}{4!} - \dots \right) = \frac{1}{z^3} - \frac{1}{2! z} + \frac{z}{4!} - \dots$
    *   **Analysis:** The principal part has terms $\frac{1}{z^3}$ and $\frac{-1}{2! z}$. The highest negative power is $-3$.
    *   **Classification:** Pole of order 3.
    *   **Test:**
        *   For $m=3$: $\lim_{z \to 0} z^3 f(z) = \lim_{z \to 0} \cos z = 1$. (Finite and non-zero)

4.  **$f(z) = \frac{1}{z} \sin\left(\frac{1}{z}\right)$**
    *   **Singularity:** $z=0$.
    *   **Series for $\sin u$:** $\sin u = u - \frac{u^3}{3!} + \frac{u^5}{5!} - \dots$
    *   **Let $u = 1/z$:** $\sin\left(\frac{1}{z}\right) = \frac{1}{z} - \frac{1}{3! z^3} + \frac{1}{5! z^5} - \dots$
    *   **Function:** $f(z) = \frac{1}{z} \left( \frac{1}{z} - \frac{1}{3! z^3} + \frac{1}{5! z^5} - \dots \right) = \frac{1}{z^2} - \frac{1}{3! z^4} + \frac{1}{5! z^6} - \dots$
    *   **Analysis:** The principal part has infinitely many terms with negative powers of $z$ ($\frac{1}{z^2}, \frac{1}{z^4}, \frac{1}{z^6}, \dots$).
    *   **Classification:** Essential singularity.

5.  **$f(z) = z^2 e^{1/(z-1)}$**
    *   **Singularity:** $z=1$.
    *   **Let $w = z-1$. Then $z = w+1$.** The function becomes $(w+1)^2 e^{1/w}$.
    *   **Series for $e^{1/w}$:** $e^{1/w} = 1 + \frac{1}{w} + \frac{1}{2! w^2} + \frac{1}{3! w^3} + \dots$
    *   **Series for $(w+1)^2$:** $(w+1)^2 = w^2 + 2w + 1$.
    *   **Function in terms of $w$:** $(w^2 + 2w + 1) \left( 1 + \frac{1}{w} + \frac{1}{2! w^2} + \frac{1}{3! w^3} + \dots \right)$
    *   Expand this product:
        *   $w^2 \left( 1 + \frac{1}{w} + \frac{1}{2! w^2} + \dots \right) = w^2 + w + \frac{1}{2!} + \frac{1}{3! w} + \dots$
        *   $2w \left( 1 + \frac{1}{w} + \frac{1}{2! w^2} + \dots \right) = 2w + 2 + \frac{1}{w} + \frac{1}{2! w^2} + \dots$
        *   $1 \left( 1 + \frac{1}{w} + \frac{1}{2! w^2} + \dots \right) = 1 + \frac{1}{w} + \frac{1}{2! w^2} + \dots$
    *   Summing these and grouping terms by powers of $w$:
        The terms with negative powers of $w$ are: $\frac{1}{3! w}, \frac{1}{w}, \frac{1}{w}$.
        The principal part includes infinitely many terms with negative powers of $w$ (e.g., $\frac{1}{3!w}, \frac{1}{4!w^2}, \dots$ from the $w^2$ multiplication, and similarly from $2w$ and $1$). The presence of the $e^{1/w}$ part, which has an essential singularity at $w=0$, will lead to an essential singularity for the entire expression.
    *   **Classification:** Essential singularity.

---

### 7. Important Points to Remember

*   **Isolated Singularity:** A point $z_0$ where $f(z)$ is not analytic, but $f(z)$ is analytic in some punctured disk $0 < |z - z_0| < R$.
*   **Laurent Series is Key:** The classification of an isolated singularity hinges on the principal part of its Laurent series expansion.
*   **Removable Singularity:** No negative powers in the Laurent series. $\lim_{z \to z_0} f(z)$ exists and is finite.
*   **Pole:** Finite number of negative powers in the Laurent series. $|f(z)| \to \infty$ as $z \to z_0$. The **order** is the highest negative power.
*   **Essential Singularity:** Infinite number of negative powers in the Laurent series. Wild behavior near $z_0$.
*   **Testing for Poles:** The limit $\lim_{z \to z_0} (z - z_0)^m f(z)$ is a powerful tool. If this limit is a finite, non-zero number for some integer $m \ge 1$, then $z_0$ is a pole of order $m$. If it's zero or infinite for all $m \ge 1$, it's not a pole (could be removable or essential).

---

This comprehensive set of notes covers the definition, classification, and analysis of isolated singularities, which is a fundamental concept for understanding complex functions and their applications in science and engineering.
