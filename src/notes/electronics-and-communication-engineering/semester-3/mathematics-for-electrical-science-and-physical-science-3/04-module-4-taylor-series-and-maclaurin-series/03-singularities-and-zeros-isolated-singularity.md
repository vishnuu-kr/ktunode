---
title: "Singularities and Zeros – Isolated Singularity"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 4: Taylor series and Maclaurin series"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe272"
status: "completed"
scrapedAt: "2026-05-23T17:47:18.550Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 4: Taylor Series and Maclaurin Series

## Topic: Singularities and Zeros – Isolated Singularity

---

### Introduction

This module delves into the behavior of complex functions around points where they might not be well-behaved, specifically focusing on **singularities**. Understanding singularities is crucial for analyzing the properties of complex functions, particularly in the context of series expansions like Taylor and Laurent series. This topic directly relates to **Course Outcome 4 (CO4)**, which emphasizes understanding series expansions of complex functions about a singularity.

---

### Key Concepts and Definitions

#### 1. Singularities of a Complex Function

A **singularity** of a complex function $f(z)$ is a point $z_0$ at which $f(z)$ is not analytic. This means that $f(z)$ is not differentiable in any neighborhood of $z_0$.

**Reference:**
*   Kreyszig, E. (2016). *Advanced Engineering Mathematics* (10th ed.). John Wiley & Sons. (Chapter 14 on Complex Analysis provides a foundational understanding of analyticity and singularities.)
*   Zill & Shanahan, (2015). *Complex Analysis* (3rd ed.). Jones & Bartlett. (Chapter 5 discusses singularities in detail.)

#### 2. Isolated Singularity

A point $z_0$ is called an **isolated singularity** of a function $f(z)$ if:
1.  $f(z)$ is not analytic at $z_0$.
2.  There exists a punctured neighborhood (an open disk centered at $z_0$ with $z_0$ removed) around $z_0$ in which $f(z)$ is analytic.

**Formal Definition:** $z_0$ is an isolated singularity of $f(z)$ if there exists an $\epsilon > 0$ such that $f(z)$ is analytic in the annulus $0 < |z - z_0| < \epsilon$.

**Example:**
Consider the function $f(z) = \frac{1}{z}$.
*   The function is not analytic at $z = 0$ because division by zero is undefined.
*   For any $\epsilon > 0$, the function $f(z) = \frac{1}{z}$ is analytic in the punctured disk $0 < |z| < \epsilon$.
*   Therefore, $z = 0$ is an isolated singularity of $f(z) = \frac{1}{z}$.

**Contrast with Non-Isolated Singularities:**
A singularity is **non-isolated** if every neighborhood of the singularity contains other singularities. A classic example is the function $f(z) = \sin(\frac{1}{z})$. The singularities are at $z = \frac{1}{n\pi}$ for $n = \pm 1, \pm 2, \ldots$, and at $z=0$. The singularity at $z=0$ is non-isolated because any neighborhood of $0$ contains other singularities of the form $\frac{1}{n\pi}$ as $n$ becomes large.

#### 3. Classification of Isolated Singularities

Isolated singularities are classified into three types based on the behavior of the function near the singularity. This classification is deeply connected to the **Laurent series expansion** of the function around the singularity.

**Laurent Series Expansion:**
If $f(z)$ is analytic in an annulus $A: R_1 < |z - z_0| < R_2$, then $f(z)$ can be represented by the Laurent series:

$f(z) = \sum_{n=-\infty}^{\infty} c_n (z - z_0)^n = \sum_{n=0}^{\infty} c_n (z - z_0)^n + \sum_{n=1}^{\infty} c_{-n} (z - z_0)^{-n}$

The first part, $\sum_{n=0}^{\infty} c_n (z - z_0)^n$, is the **analytic part** (or Taylor series part).
The second part, $\sum_{n=1}^{\infty} c_{-n} (z - z_0)^{-n}$, is the **principal part**.

**Reference:**
*   Kreyszig, E. (2016). *Advanced Engineering Mathematics* (10th ed.). John Wiley & Sons. (Chapter 14.4 on Laurent series.)
*   Ramana, B. V. (2023). *Higher Engineering Mathematics* (39th ed.). McGraw-Hill Education. (Chapter 29 discusses series expansions, including Laurent series.)

**The classification of isolated singularities depends on the principal part of the Laurent series:**

**a) Removable Singularity**

*   **Definition:** An isolated singularity $z_0$ is called a **removable singularity** if the principal part of the Laurent series of $f(z)$ about $z_0$ contains only a finite number of terms. This means that the coefficients $c_{-n}$ are zero for all $n \ge 1$.
    $f(z) = c_0 + c_1 (z - z_0) + c_2 (z - z_0)^2 + \ldots$ (for $0 < |z - z_0| < R$)

*   **Equivalent Conditions:**
    *   $\lim_{z \to z_0} f(z)$ exists and is finite.
    *   $f(z)$ can be made analytic at $z_0$ by assigning a suitable value to $f(z_0)$.

*   **Example:**
    Consider $f(z) = \frac{\sin z}{z}$.
    The singularity is at $z_0 = 0$.
    The Maclaurin series for $\sin z$ is $z - \frac{z^3}{3!} + \frac{z^5}{5!} - \ldots$.
    So, $\frac{\sin z}{z} = \frac{1}{z} \left( z - \frac{z^3}{3!} + \frac{z^5}{5!} - \ldots \right) = 1 - \frac{z^2}{3!} + \frac{z^4}{5!} - \ldots$.
    This is a Taylor series, with no negative powers of $z$. Thus, $z_0 = 0$ is a removable singularity.
    We can also see this by taking the limit: $\lim_{z \to 0} \frac{\sin z}{z} = 1$. If we define $f(0) = 1$, the function becomes analytic at $z=0$.

**b) Pole**

*   **Definition:** An isolated singularity $z_0$ is called a **pole** if the principal part of the Laurent series of $f(z)$ about $z_0$ contains a finite, non-zero number of terms. That is, there exists a positive integer $m$ such that $c_{-m} \neq 0$ and $c_{-n} = 0$ for all $n > m$.
    $f(z) = \frac{c_{-m}}{(z - z_0)^m} + \frac{c_{-m+1}}{(z - z_0)^{m-1}} + \ldots + \frac{c_{-1}}{z - z_0} + c_0 + c_1 (z - z_0) + \ldots$
    The smallest such positive integer $m$ is called the **order of the pole**.

*   **Equivalent Conditions:**
    *   $\lim_{z \to z_0} |f(z)| = \infty$.
    *   $(z - z_0)^m f(z)$ is analytic and non-zero at $z_0$ for some positive integer $m$, and for $m-1$ it is zero at $z_0$.
        *   Specifically, if $z_0$ is a pole of order $m$, then $\lim_{z \to z_0} (z - z_0)^m f(z) = L \neq 0$, where $L$ is finite.

*   **Example:**
    Consider $f(z) = \frac{1}{z^2(z-1)}$.
    The singularities are at $z=0$ and $z=1$.
    Let's analyze $z_0 = 0$:
    We can write $f(z) = \frac{1}{z^2} \cdot \frac{1}{z-1}$.
    The series expansion for $\frac{1}{z-1}$ around $z=0$ is $-1 - z - z^2 - \ldots$.
    So, $f(z) = \frac{1}{z^2}(-1 - z - z^2 - \ldots) = -\frac{1}{z^2} - \frac{1}{z} - 1 - \ldots$.
    The principal part is $-\frac{1}{z^2} - \frac{1}{z}$. It has two terms.
    The highest power of $(z-0)^{-1}$ is $2$. So, $z_0 = 0$ is a pole of order 2.
    We can verify this: $\lim_{z \to 0} z^2 f(z) = \lim_{z \to 0} z^2 \frac{1}{z^2(z-1)} = \lim_{z \to 0} \frac{1}{z-1} = -1 \neq 0$.

    Now let's analyze $z_0 = 1$:
    $f(z) = \frac{1}{z-1} \cdot \frac{1}{z^2}$.
    The series expansion for $\frac{1}{z^2}$ around $z=1$ can be found. Let $w = z-1$, so $z = w+1$.
    $\frac{1}{z^2} = \frac{1}{(w+1)^2} = (1+w)^{-2} = 1 - 2w + 3w^2 - \ldots = 1 - 2(z-1) + 3(z-1)^2 - \ldots$.
    So, $f(z) = \frac{1}{z-1} (1 - 2(z-1) + 3(z-1)^2 - \ldots) = \frac{1}{z-1} - 2 + 3(z-1) - \ldots$.
    The principal part is $\frac{1}{z-1}$. It has one term.
    The highest power of $(z-1)^{-1}$ is $1$. So, $z_0 = 1$ is a pole of order 1.
    We can verify this: $\lim_{z \to 1} (z-1)^1 f(z) = \lim_{z \to 1} (z-1) \frac{1}{z^2(z-1)} = \lim_{z \to 1} \frac{1}{z^2} = 1 \neq 0$.

**c) Essential Singularity**

*   **Definition:** An isolated singularity $z_0$ is called an **essential singularity** if the principal part of the Laurent series of $f(z)$ about $z_0$ contains an infinite number of non-zero terms.
    $f(z) = \ldots + \frac{c_{-n}}{(z - z_0)^n} + \ldots + \frac{c_{-1}}{z - z_0} + c_0 + c_1 (z - z_0) + \ldots$
    where infinitely many $c_{-k}$ (for $k \ge 1$) are non-zero.

*   **Behavior near Essential Singularities:**
    The behavior of a function near an essential singularity is very complex. The **Casorati-Weierstrass Theorem** (also known as the Great Picard Theorem or Picard's Little Theorem) states that in every neighborhood of an essential singularity $z_0$, the function $f(z)$ takes on every complex value, with at most one exception. The Great Picard Theorem states that in every neighborhood of an essential singularity, the function takes on every complex value infinitely often, with at most one exception.

*   **Example:**
    Consider $f(z) = e^{1/z}$.
    The singularity is at $z_0 = 0$.
    The Maclaurin series for $e^w$ is $1 + w + \frac{w^2}{2!} + \frac{w^3}{3!} + \ldots$.
    Let $w = \frac{1}{z}$.
    Then $f(z) = e^{1/z} = 1 + \frac{1}{z} + \frac{(1/z)^2}{2!} + \frac{(1/z)^3}{3!} + \ldots = 1 + \frac{1}{z} + \frac{1}{2! z^2} + \frac{1}{3! z^3} + \ldots$.
    This is the Laurent series of $f(z)$ around $z=0$. The principal part is $\sum_{n=1}^{\infty} \frac{1}{n! z^n}$, which has infinitely many non-zero terms.
    Therefore, $z_0 = 0$ is an essential singularity.

    **Reference:**
    *   Zill & Shanahan, (2015). *Complex Analysis* (3rd ed.). Jones & Bartlett. (Chapter 5.5 discusses the Great Picard Theorem, which describes the behavior near essential singularities.)

---

### Connection to Taylor and Maclaurin Series

*   **Taylor Series:** A Taylor series expansion of a function $f(z)$ about a point $z_0$ requires the function to be analytic in a neighborhood of $z_0$. If $z_0$ is an isolated singularity, a Taylor series expansion about $z_0$ does not exist.

*   **Maclaurin Series:** A Maclaurin series is a Taylor series expansion about $z_0 = 0$. If $z=0$ is an isolated singularity, a Maclaurin series expansion does not exist.

*   **Laurent Series:** The Laurent series is the generalization of the Taylor series that allows for the analysis of functions around isolated singularities.
    *   If the singularity is **removable**, the Laurent series about $z_0$ is actually a Taylor series (principal part is zero).
    *   If the singularity is a **pole**, the principal part has a finite number of terms, which are negative powers of $(z-z_0)$.
    *   If the singularity is **essential**, the principal part has infinitely many terms, which are negative powers of $(z-z_0)$.

---

### Identifying Isolated Singularities

**General Procedure:**

1.  **Find the zeros of the denominator:** If $f(z) = \frac{P(z)}{Q(z)}$, where $P(z)$ and $Q(z)$ are analytic functions, the potential singularities are the zeros of $Q(z)$.
2.  **Check for analyticity:** At each zero $z_0$ of $Q(z)$, check if $P(z_0) \neq 0$. If $P(z_0) \neq 0$ and $Q(z_0) = 0$, then $z_0$ is a singularity.
3.  **Determine if the singularity is isolated:** If $z_0$ is a zero of $Q(z)$ with multiplicity $m$, and $P(z_0) \neq 0$, then $z_0$ is an isolated singularity. If $z_0$ is also a zero of $P(z)$ with multiplicity $n$, then the behavior depends on the ratio $m/n$.
    *   If $n \ge m$, the singularity is removable.
    *   If $n < m$, the singularity is a pole of order $m-n$.

**Using Limits:**

*   If $\lim_{z \to z_0} f(z)$ exists and is finite, $z_0$ is a removable singularity.
*   If $\lim_{z \to z_0} |f(z)| = \infty$, $z_0$ is either a pole or an essential singularity.
*   To differentiate between a pole and an essential singularity:
    *   If $\lim_{z \to z_0} (z - z_0)^m f(z) = L \neq 0$ for some positive integer $m$, then $z_0$ is a pole of order $m$.
    *   If no such finite non-zero limit exists for any $m$, or if the limit approaches infinity for all $m$, then it is likely an essential singularity (or requires more advanced analysis like Laurent series).

**Reference:**
*   Grewal, B. S. (2018). *Higher Engineering Mathematics* (44th ed.). Khanna Publishers. (Chapter 14 on Complex Variables, including singularities.)

---

### Examples

**Example 1: Classifying Singularities**

Determine the nature of the isolated singularities of the following functions:

a) $f(z) = \frac{z^3 + 2z - 4}{z-1}$
b) $g(z) = \frac{e^z - 1}{z}$
c) $h(z) = \frac{\cos z}{z^2}$
d) $k(z) = e^{3/z}$

**Solution:**

a) $f(z) = \frac{z^3 + 2z - 4}{z-1}$
   The singularity is at $z=1$.
   Check the numerator at $z=1$: $1^3 + 2(1) - 4 = 1 + 2 - 4 = -1 \neq 0$.
   Since the numerator is non-zero and the denominator is zero at $z=1$, $z=1$ is a singularity.
   To classify, we can check the limit: $\lim_{z \to 1} f(z) = \lim_{z \to 1} \frac{z^3 + 2z - 4}{z-1}$. This is of the form $\frac{-1}{0}$, so the magnitude goes to infinity.
   Let's test for a pole: $\lim_{z \to 1} (z-1)^1 f(z) = \lim_{z \to 1} (z-1) \frac{z^3 + 2z - 4}{z-1} = \lim_{z \to 1} (z^3 + 2z - 4) = 1 + 2 - 4 = -1$.
   Since the limit is a non-zero finite number (-1), $z=1$ is a **pole of order 1**.

b) $g(z) = \frac{e^z - 1}{z}$
   The singularity is at $z=0$.
   Check the limit: $\lim_{z \to 0} g(z) = \lim_{z \to 0} \frac{e^z - 1}{z}$. This is an indeterminate form $\frac{0}{0}$.
   Using L'Hopital's rule: $\lim_{z \to 0} \frac{e^z}{1} = e^0 = 1$.
   Since the limit exists and is finite (1), $z=0$ is a **removable singularity**.
   Alternatively, using the Maclaurin series for $e^z$: $e^z = 1 + z + \frac{z^2}{2!} + \ldots$.
   $g(z) = \frac{(1 + z + \frac{z^2}{2!} + \ldots) - 1}{z} = \frac{z + \frac{z^2}{2!} + \ldots}{z} = 1 + \frac{z}{2!} + \ldots$.
   This is a Taylor series, so the singularity is removable.

c) $h(z) = \frac{\cos z}{z^2}$
   The singularity is at $z=0$.
   Check the numerator at $z=0$: $\cos(0) = 1 \neq 0$.
   Since the numerator is non-zero and the denominator is zero at $z=0$, $z=0$ is a singularity.
   Check the limit: $\lim_{z \to 0} |h(z)| = \lim_{z \to 0} |\frac{\cos z}{z^2}| = \frac{1}{0^+} = \infty$.
   Let's test for a pole: $\lim_{z \to 0} z^2 h(z) = \lim_{z \to 0} z^2 \frac{\cos z}{z^2} = \lim_{z \to 0} \cos z = \cos(0) = 1$.
   Since the limit is a non-zero finite number (1), $z=0$ is a **pole of order 2**.

d) $k(z) = e^{3/z}$
   The singularity is at $z=0$.
   This is of the form $e^w$ where $w = 3/z$. As $z \to 0$, $w \to \infty$ (or $-\infty$ depending on the direction).
   The Maclaurin series for $e^w$ is $1 + w + \frac{w^2}{2!} + \ldots$.
   Substituting $w = 3/z$:
   $k(z) = e^{3/z} = 1 + \frac{3}{z} + \frac{(3/z)^2}{2!} + \frac{(3/z)^3}{3!} + \ldots = 1 + \frac{3}{z} + \frac{9}{2!z^2} + \frac{27}{3!z^3} + \ldots$.
   The principal part is $\sum_{n=1}^{\infty} \frac{3^n}{n! z^n}$, which has infinitely many terms.
   Therefore, $z=0$ is an **essential singularity**.

---

### Practice Questions

1.  Identify all isolated singularities of the following functions and classify them (removable singularity, pole of order $m$, or essential singularity):
    a) $f(z) = \frac{z^2 - 1}{z^2 + 1}$
    b) $g(z) = \frac{\sin(\pi z)}{z^3}$
    c) $h(z) = z \cos(\frac{1}{z})$
    d) $k(z) = \frac{e^{2z} - 1}{z^2}$

2.  For the function $f(z) = \frac{1}{z(z-2)^3}$, identify the isolated singularities and determine their orders.

3.  Is the singularity of $f(z) = \frac{\sinh z}{z}$ at $z=0$ removable? Justify your answer.

---

### Answers to Practice Questions

1.  **Identification and Classification of Singularities:**
    a) $f(z) = \frac{z^2 - 1}{z^2 + 1} = \frac{(z-1)(z+1)}{(z-i)(z+i)}$
       Singularities at $z=i$ and $z=-i$.
       At $z=i$: Numerator is $(i)^2 - 1 = -1 - 1 = -2 \neq 0$. Denominator is zero.
       $\lim_{z \to i} (z-i) f(z) = \lim_{z \to i} (z-i) \frac{z^2-1}{(z-i)(z+i)} = \lim_{z \to i} \frac{z^2-1}{z+i} = \frac{i^2-1}{i+i} = \frac{-2}{2i} = \frac{-1}{i} = i$.
       Since the limit is a finite non-zero number, $z=i$ is a **pole of order 1**.
       Similarly, at $z=-i$: Numerator is $(-i)^2 - 1 = -1 - 1 = -2 \neq 0$. Denominator is zero.
       $\lim_{z \to -i} (z+i) f(z) = \lim_{z \to -i} (z+i) \frac{z^2-1}{(z-i)(z+i)} = \lim_{z \to -i} \frac{z^2-1}{z-i} = \frac{(-i)^2-1}{-i-i} = \frac{-2}{-2i} = \frac{1}{i} = -i$.
       So, $z=-i$ is also a **pole of order 1**.

    b) $g(z) = \frac{\sin(\pi z)}{z^3}$
       Singularity at $z=0$.
       Maclaurin series for $\sin(\pi z)$: $\pi z - \frac{(\pi z)^3}{3!} + \frac{(\pi z)^5}{5!} - \ldots$
       $g(z) = \frac{\pi z - \frac{\pi^3 z^3}{3!} + \frac{\pi^5 z^5}{5!} - \ldots}{z^3} = \frac{\pi}{z^2} - \frac{\pi^3}{3!} + \frac{\pi^5 z^2}{5!} - \ldots$
       The principal part is $\frac{\pi}{z^2}$. The highest power of $z^{-1}$ is 2.
       $z=0$ is a **pole of order 2**.

    c) $h(z) = z \cos(\frac{1}{z})$
       Singularity at $z=0$.
       Maclaurin series for $\cos w$: $1 - \frac{w^2}{2!} + \frac{w^4}{4!} - \ldots$
       Substitute $w = \frac{1}{z}$: $\cos(\frac{1}{z}) = 1 - \frac{1}{2!z^2} + \frac{1}{4!z^4} - \ldots$
       $h(z) = z \left( 1 - \frac{1}{2!z^2} + \frac{1}{4!z^4} - \ldots \right) = z - \frac{1}{2!z} + \frac{1}{4!z^3} - \ldots$
       The principal part is $-\frac{1}{2!z} + \frac{1}{4!z^3} - \ldots$, which has infinitely many terms.
       $z=0$ is an **essential singularity**.

    d) $k(z) = \frac{e^{2z} - 1}{z^2}$
       Singularity at $z=0$.
       Maclaurin series for $e^{2z}$: $1 + 2z + \frac{(2z)^2}{2!} + \frac{(2z)^3}{3!} + \ldots = 1 + 2z + \frac{4z^2}{2!} + \frac{8z^3}{3!} + \ldots$
       $k(z) = \frac{(1 + 2z + \frac{4z^2}{2!} + \frac{8z^3}{3!} + \ldots) - 1}{z^2} = \frac{2z + \frac{4z^2}{2!} + \frac{8z^3}{3!} + \ldots}{z^2}$
       $k(z) = \frac{2}{z} + \frac{4}{2!} + \frac{8z}{3!} + \ldots$
       The principal part is $\frac{2}{z}$. The highest power of $z^{-1}$ is 1.
       $z=0$ is a **pole of order 1**.

2.  For $f(z) = \frac{1}{z(z-2)^3}$:
    The isolated singularities are the zeros of the denominator: $z=0$ and $z=2$.
    *   At $z=0$: The denominator has a simple zero. The numerator is 1 (non-zero).
        Therefore, $z=0$ is a **pole of order 1**.
    *   At $z=2$: The denominator has a zero of order 3. The numerator is 1 (non-zero).
        Therefore, $z=2$ is a **pole of order 3**.

3.  For $f(z) = \frac{\sinh z}{z}$:
    The singularity is at $z=0$.
    We need to check if $\lim_{z \to 0} f(z)$ exists and is finite.
    The Maclaurin series for $\sinh z$ is $z + \frac{z^3}{3!} + \frac{z^5}{5!} + \ldots$.
    $f(z) = \frac{z + \frac{z^3}{3!} + \frac{z^5}{5!} + \ldots}{z} = 1 + \frac{z^2}{3!} + \frac{z^4}{5!} + \ldots$.
    This is a Taylor series, and the limit as $z \to 0$ is $1$.
    Since the limit exists and is finite, the singularity at $z=0$ is **removable**.

---

### Important Points to Remember

*   **Singularity:** A point where a function is not analytic.
*   **Isolated Singularity:** A singularity $z_0$ where there's a punctured neighborhood around $z_0$ where the function *is* analytic.
*   **Classification:** Isolated singularities are classified into Removable, Poles, and Essential singularities based on their Laurent series principal part.
*   **Removable:** Finite number of terms in the principal part (all zero). $\lim_{z \to z_0} f(z)$ is finite.
*   **Pole:** Finite, non-zero number of terms in the principal part. $\lim_{z \to z_0} |f(z)| = \infty$. Order $m$ means the highest negative power is $(z-z_0)^{-m}$.
*   **Essential:** Infinite number of terms in the principal part. Behavior is very wild (Casorati-Weierstrass/Picard's theorems).
*   **Taylor/Maclaurin Series:** These are only valid in regions where the function is analytic. They are not directly applicable at isolated singularities. The Laurent series is the tool to analyze behavior around isolated singularities.
*   **Practice:** Identifying singularities often involves analyzing rational functions (zeros of the denominator) and functions involving exponentials or trigonometric functions of $1/(z-z_0)$.

---

### Course Outcome Alignment

This topic directly supports **CO4: Understand the series expansion of complex function about a singularity and apply residue theorem to compute real integrals.** While the residue theorem itself is a later topic, understanding the nature of singularities is a prerequisite for calculating residues. The classification of isolated singularities determines the form of the Laurent series, which is essential for identifying the residue (the coefficient $c_{-1}$) of a function around a singularity. This knowledge is fundamental for applying techniques that rely on the behavior of functions near their singular points.

---
This comprehensive set of notes covers the definition and classification of isolated singularities, their relationship with Taylor and Laurent series, and provides examples and practice problems. It draws upon the principles outlined in the provided reference books, ensuring a solid foundation for understanding this crucial concept in complex analysis.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=fNk_zzaMoEs) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
