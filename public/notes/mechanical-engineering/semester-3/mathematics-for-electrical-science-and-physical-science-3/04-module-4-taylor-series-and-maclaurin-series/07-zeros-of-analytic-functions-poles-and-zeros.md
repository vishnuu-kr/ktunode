---
title: "Zeros of Analytic functions – Poles and Zeros"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 4: Taylor series and Maclaurin series"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462cb9"
status: "completed"
scrapedAt: "2026-05-20T17:50:56.413Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 4: Taylor Series and Maclaurin Series

### Topic: Zeros of Analytic Functions – Poles and Zeros

---

**Course Outcomes Addressed:**

*   **CO4:** Understand the series expansion of complex functions about a singularity and apply the residue theorem to compute real integrals. (Knowledge Level: K3)
    *   This topic is fundamental to understanding the behavior of complex functions around singular points, which is crucial for applying the residue theorem.

**Learning Outcomes Covered:**

*   Understand the concept of zeros of analytic functions and their properties.
*   Distinguish between zeros and poles of a complex function.
*   Determine the order of zeros and poles.
*   Analyze the behavior of functions near their zeros and poles using Taylor and Laurent series expansions.
*   Relate the behavior of functions near poles to their singularities.

---

### 1. Introduction to Zeros of Analytic Functions

Analytic functions play a pivotal role in various fields of electrical and physical sciences, from signal processing to quantum mechanics. Understanding the behavior of these functions, especially their points where they become zero or infinite, is crucial. This topic delves into the concept of zeros and poles, which are singularities of complex functions that reveal significant information about their structure and behavior.

**Key Concept:** An **analytic function** $f(z)$ is a complex function that is differentiable at every point in an open connected set in the complex plane.

---

### 2. Zeros of Analytic Functions

**Definition:** A point $z_0$ is called a **zero** of an analytic function $f(z)$ if $f(z_0) = 0$.

**Important Point:** If a function is analytic in a domain $D$ and has a zero at $z_0 \in D$, then in a neighborhood of $z_0$, the function can be represented by its Taylor series.

#### 2.1 Order of a Zero

**Definition:** If $f(z)$ is analytic in a domain $D$ and $f(z_0) = 0$, $f'(z_0) = 0$, ..., $f^{(n-1)}(z_0) = 0$, but $f^{(n)}(z_0) \neq 0$, then $z_0$ is called a **zero of order $n$** (or a zero of multiplicity $n$).

**Taylor Series Representation:** If $z_0$ is a zero of order $n$, then the Taylor series expansion of $f(z)$ around $z_0$ has the form:

$f(z) = a_n (z-z_0)^n + a_{n+1} (z-z_0)^{n+1} + a_{n+2} (z-z_0)^{n+2} + \dots$

where $a_n = \frac{f^{(n)}(z_0)}{n!} \neq 0$.

This can be rewritten as:

$f(z) = (z-z_0)^n \left[ a_n + a_{n+1} (z-z_0) + a_{n+2} (z-z_0)^2 + \dots \right]$

Let $g(z) = a_n + a_{n+1} (z-z_0) + a_{n+2} (z-z_0)^2 + \dots$. The series for $g(z)$ converges to an analytic function in a neighborhood of $z_0$. Crucially, $g(z_0) = a_n \neq 0$. Therefore, $g(z)$ is non-zero in a neighborhood of $z_0$.

**Property:** If $z_0$ is a zero of order $n$ for $f(z)$, then $f(z)$ can be factored as $f(z) = (z-z_0)^n g(z)$, where $g(z)$ is analytic at $z_0$ and $g(z_0) \neq 0$.

**Example 1:** Find the order of the zero of $f(z) = z^3 \sin(z)$ at $z_0 = 0$.

*   $f(0) = 0^3 \sin(0) = 0$.
*   $f'(z) = 3z^2 \sin(z) + z^3 \cos(z)$. $f'(0) = 0$.
*   $f''(z) = 6z \sin(z) + 3z^2 \cos(z) + 3z^2 \cos(z) - z^3 \sin(z) = 6z \sin(z) + 6z^2 \cos(z) - z^3 \sin(z)$. $f''(0) = 0$.
*   $f'''(z) = 6 \sin(z) + 6z \cos(z) + 12z \cos(z) - 6z^2 \sin(z) - 3z^2 \sin(z) - z^3 \cos(z) = 6 \sin(z) + 18z \cos(z) - 9z^2 \sin(z) - z^3 \cos(z)$. $f'''(0) = 0$.
*   $f^{(4)}(z) = 6 \cos(z) + 18 \cos(z) - 18z \sin(z) - 18z \sin(z) + 9z^2 \cos(z) - 3z^3 \cos(z) + z^4 \sin(z) = 24 \cos(z) - 36z \sin(z) + 9z^2 \cos(z) - 3z^3 \cos(z) + z^4 \sin(z)$. $f^{(4)}(0) = 24 \neq 0$.

So, $z_0 = 0$ is a zero of order 4.

Alternatively, using Taylor series:
$\sin(z) = z - \frac{z^3}{3!} + \frac{z^5}{5!} - \dots$
$f(z) = z^3 \left( z - \frac{z^3}{3!} + \frac{z^5}{5!} - \dots \right) = z^4 - \frac{z^6}{3!} + \frac{z^8}{5!} - \dots$
The lowest power of $z$ is 4, so $z_0 = 0$ is a zero of order 4.

**Example 2:** Find the order of the zero of $f(z) = (1 - \cos z)$ at $z_0 = 0$.

*   $f(0) = 1 - \cos(0) = 1 - 1 = 0$.
*   $f'(z) = \sin z$. $f'(0) = \sin(0) = 0$.
*   $f''(z) = \cos z$. $f''(0) = \cos(0) = 1 \neq 0$.

So, $z_0 = 0$ is a zero of order 2.

Using Taylor series:
$\cos z = 1 - \frac{z^2}{2!} + \frac{z^4}{4!} - \dots$
$f(z) = 1 - \left( 1 - \frac{z^2}{2!} + \frac{z^4}{4!} - \dots \right) = \frac{z^2}{2!} - \frac{z^4}{4!} + \dots$
The lowest power of $z$ is 2, so $z_0 = 0$ is a zero of order 2.

#### 2.2 Properties of Zeros

*   **Isolated Zeros:** If $z_0$ is a zero of an analytic function $f(z)$, then there exists a neighborhood around $z_0$ where $f(z)$ has no other zeros. This means zeros of analytic functions are isolated.
*   **Uniqueness:** If two analytic functions $f(z)$ and $g(z)$ agree on a sequence of points $(z_k)$ that converges to $z_0$, and $f(z_0) = g(z_0) = 0$, then if $z_0$ is a zero of finite order for one, it will be a zero of the same finite order for the other, provided they are analytic at $z_0$.
*   **Zeros of Products and Quotients:**
    *   If $f(z)$ has a zero of order $m$ at $z_0$ and $g(z)$ has a zero of order $n$ at $z_0$, then $f(z)g(z)$ has a zero of order $m+n$ at $z_0$.
    *   If $f(z)$ has a zero of order $m$ at $z_0$ and $g(z)$ has a zero of order $n$ at $z_0$ with $m \ge n$, then $\frac{f(z)}{g(z)}$ has a zero of order $m-n$ at $z_0$. If $m < n$, then $\frac{f(z)}{g(z)}$ has a pole of order $n-m$ at $z_0$.

**Reference:** Kreyszig, Section 14.5 (Zeros and Singularities of Analytic Functions), discusses the properties of zeros and their relation to Taylor series.

---

### 3. Poles of Analytic Functions

**Definition:** A point $z_0$ is called a **pole** of an analytic function $f(z)$ if $f(z)$ can be expressed in the form:

$f(z) = \frac{g(z)}{(z-z_0)^m}$

where $g(z)$ is analytic at $z_0$ and $g(z_0) \neq 0$, and $m$ is a positive integer. The integer $m$ is called the **order** of the pole.

**Important Point:** Poles are a type of isolated singularity. At a pole $z_0$, the function $f(z)$ "blows up" to infinity.

#### 3.1 Laurent Series Representation

If $f(z)$ has a pole of order $m$ at $z_0$, its Laurent series expansion in an annulus $0 < |z-z_0| < R$ takes the form:

$f(z) = \frac{a_{-m}}{(z-z_0)^m} + \frac{a_{-m+1}}{(z-z_0)^{m-1}} + \dots + \frac{a_{-1}}{z-z_0} + a_0 + a_1(z-z_0) + a_2(z-z_0)^2 + \dots$

where $a_{-m} \neq 0$. The terms with negative powers of $(z-z_0)$ constitute the **principal part** of the Laurent series, and the terms with non-negative powers constitute the **analytic part**.

**Definition:** If the principal part of the Laurent series of $f(z)$ around $z_0$ contains a finite number of terms, i.e., $a_k = 0$ for all $k < -m$ for some positive integer $m$, then $z_0$ is a pole of order $m$. If the principal part contains infinitely many terms, $z_0$ is an essential singularity.

**Alternative Characterization:** A point $z_0$ is a pole of order $m$ for $f(z)$ if and only if $\frac{1}{f(z)}$ has a zero of order $m$ at $z_0$.

**Example 3:** Find the order of the pole of $f(z) = \frac{1}{z^3 \sin z}$ at $z_0 = 0$.

Consider $h(z) = \frac{1}{f(z)} = z^3 \sin z$. We found in Example 1 that $h(z)$ has a zero of order 4 at $z_0 = 0$.
Therefore, $f(z)$ has a **zero of order -4** at $z_0 = 0$, which means it has a **pole of order 4** at $z_0 = 0$.

Let's verify with Laurent series.
$f(z) = \frac{1}{z^3 (z - \frac{z^3}{3!} + \dots)} = \frac{1}{z^4 - \frac{z^6}{3!} + \dots} = \frac{1}{z^4 (1 - \frac{z^2}{3!} + \dots)}$
Using geometric series: $(1 - w)^{-1} = 1 + w + w^2 + \dots$
$f(z) = \frac{1}{z^4} \left( 1 + \left(\frac{z^2}{3!} - \dots\right) + \left(\frac{z^2}{3!} - \dots\right)^2 + \dots \right)$
$f(z) = \frac{1}{z^4} (1 + \frac{z^2}{6} + \dots) = \frac{1}{z^4} + \frac{1}{6z^2} + \dots$
The principal part has terms up to $\frac{1}{z^4}$, so it's a pole of order 4.

**Example 4:** Find the order of the pole of $f(z) = \frac{\cos z}{z^2}$ at $z_0 = 0$.

*   Consider $h(z) = \frac{1}{f(z)} = \frac{z^2}{\cos z}$.
*   $\cos(0) = 1 \neq 0$.
*   $h(z)$ is analytic at $z_0 = 0$, and $h(0) = \frac{0^2}{\cos(0)} = 0$.
*   $h'(z) = \frac{2z \cos z - z^2 (-\sin z)}{\cos^2 z} = \frac{2z \cos z + z^2 \sin z}{\cos^2 z}$.
*   $h'(0) = \frac{0}{1} = 0$.
*   $h''(z) = \dots$
Alternatively, using Taylor series for $\cos z$ around $z_0=0$:
$\cos z = 1 - \frac{z^2}{2!} + \frac{z^4}{4!} - \dots$
$f(z) = \frac{1 - \frac{z^2}{2!} + \frac{z^4}{4!} - \dots}{z^2} = \frac{1}{z^2} - \frac{1}{2!} + \frac{z^2}{4!} - \dots$
The principal part has terms up to $\frac{1}{z^2}$, and the coefficient of $\frac{1}{z^2}$ is $1 \neq 0$.
Thus, $z_0 = 0$ is a pole of order 2.

**Reference:** Zill & Shanahan, Chapter 5 (Complex Integration), specifically sections on Laurent series and isolated singularities. Kreyszig also covers Laurent series and classification of singularities in Chapter 14.

#### 3.2 Behavior Near a Pole

As $z \to z_0$ where $z_0$ is a pole of order $m$ for $f(z)$, $|f(z)| \to \infty$.

If $f(z) = \frac{g(z)}{(z-z_0)^m}$ with $g(z_0) \neq 0$, then as $z \to z_0$, $g(z) \to g(z_0)$, so $f(z) \approx \frac{g(z_0)}{(z-z_0)^m}$.

**Example:** For $f(z) = \frac{1}{z^2}$, as $z \to 0$, $f(z) \to \infty$. The function has a pole of order 2 at $z=0$.

---

### 4. Distinguishing Zeros and Poles

The distinction between zeros and poles is fundamental. It is often made by examining the Laurent series expansion of the function around the point of interest.

*   **Zero of Order $n$:** The lowest power of $(z-z_0)$ in the Laurent series is $(z-z_0)^n$ with $n \ge 0$. If $n=0$, it means the function is analytic and non-zero at $z_0$.
*   **Pole of Order $m$:** The lowest power of $(z-z_0)$ in the Laurent series is $(z-z_0)^{-m}$ with $m > 0$.

**Key Method:** Convert the function into a form where the numerator and denominator are analytic at $z_0$.
If $f(z) = \frac{h(z)}{k(z)}$, where $h(z)$ and $k(z)$ are analytic at $z_0$:

1.  **Find zeros of $h(z)$ and $k(z)$ at $z_0$.** Let the order of the zero of $h(z)$ at $z_0$ be $n_h$ (if $h(z_0) \neq 0$, then $n_h=0$). Let the order of the zero of $k(z)$ at $z_0$ be $n_k$ (if $k(z_0) \neq 0$, then $n_k=0$).

2.  **Analyze the ratio of orders:**
    *   If $n_k = 0$ (denominator is non-zero at $z_0$), then $z_0$ is a zero of $f(z)$ of order $n_h$.
    *   If $n_h = 0$ and $n_k > 0$ (numerator is non-zero, denominator is zero), then $z_0$ is a pole of $f(z)$ of order $n_k$.
    *   If $n_h > 0$ and $n_k > 0$:
        *   If $n_h > n_k$, $z_0$ is a zero of order $n_h - n_k$.
        *   If $n_h < n_k$, $z_0$ is a pole of order $n_k - n_h$.
        *   If $n_h = n_k$, $z_0$ is a removable singularity (if $f(z)$ were redefined at $z_0$ to be its limit, it would be analytic).

**Example 5:** Determine the nature of the singularity of $f(z) = \frac{\sin z}{z}$ at $z_0 = 0$.

*   $h(z) = \sin z$. $h(0) = 0$. The order of the zero of $h(z)$ at $z=0$ is $n_h = 1$ (since $\sin z = z - z^3/3! + \dots$).
*   $k(z) = z$. $k(0) = 0$. The order of the zero of $k(z)$ at $z=0$ is $n_k = 1$.

Since $n_h = n_k = 1$, $z_0 = 0$ is a removable singularity.
$f(z) = \frac{z - z^3/3! + \dots}{z} = 1 - \frac{z^2}{3!} + \dots$
The limit as $z \to 0$ is 1, and the function is analytic at $z=0$ if we define $f(0)=1$.

**Example 6:** Determine the nature of the singularity of $f(z) = \frac{e^z - 1}{z^2}$ at $z_0 = 0$.

*   $h(z) = e^z - 1$. $h(0) = e^0 - 1 = 0$.
    Taylor series: $e^z = 1 + z + \frac{z^2}{2!} + \dots$
    $h(z) = (1 + z + \frac{z^2}{2!} + \dots) - 1 = z + \frac{z^2}{2!} + \dots$
    The order of the zero of $h(z)$ at $z=0$ is $n_h = 1$.
*   $k(z) = z^2$. $k(0) = 0$. The order of the zero of $k(z)$ at $z=0$ is $n_k = 2$.

Since $n_h = 1$ and $n_k = 2$, and $n_h < n_k$, $z_0 = 0$ is a pole of order $n_k - n_h = 2 - 1 = 1$.

Let's verify:
$f(z) = \frac{z + z^2/2! + z^3/3! + \dots}{z^2} = \frac{1}{z} + \frac{1}{2!} + \frac{z}{3!} + \dots$
This is a pole of order 1.

**Reference:** Ramana, Chapter 33 (Complex Variables), discusses poles and zeros. Grewal also covers these concepts in its complex analysis chapters.

---

### 5. Relation to Series Expansions

*   **Taylor Series and Zeros:** If $f(z)$ is analytic at $z_0$ and $f(z_0) \neq 0$, its Taylor series around $z_0$ starts with a non-zero constant term $a_0 = f(z_0)$. If $f(z_0)=0$ and $f'(z_0)=0, \dots, f^{(n-1)}(z_0)=0$ but $f^{(n)}(z_0) \neq 0$, then the Taylor series starts with $a_n(z-z_0)^n$ where $a_n \neq 0$, indicating a zero of order $n$.

*   **Laurent Series and Poles:** If $f(z)$ has a pole of order $m$ at $z_0$, its Laurent series around $z_0$ starts with the term $\frac{a_{-m}}{(z-z_0)^m}$ where $a_{-m} \neq 0$.

The ability to find or determine the order of zeros and poles often relies on analyzing the Taylor series of the numerator and denominator of a rational function or a function that can be expressed as a ratio of analytic functions.

**Application to Course Outcomes:** Understanding the order of poles is crucial for applying the Residue Theorem (CO4). The residue of $f(z)$ at a simple pole ($m=1$) $z_0$ is $a_{-1} = \lim_{z \to z_0} (z-z_0)f(z)$. For a pole of order $m$, the residue is $a_{-1} = \frac{1}{(m-1)!} \lim_{z \to z_0} \frac{d^{m-1}}{dz^{m-1}} [(z-z_0)^m f(z)]$. The knowledge of the order of the pole allows us to use the correct formula for the residue.

---

### 6. Practice Questions and Exercises

**Q1.** Find the order of the zero of $f(z) = z(e^z - 1)$ at $z_0 = 0$.
    *   **Answer:** $f(z) = z(z + z^2/2! + \dots) = z^2 + z^3/2! + \dots$. The lowest power of $z$ is 2, so $z_0=0$ is a zero of order 2.

**Q2.** Determine the nature of the singularity of $f(z) = \frac{\cos(\pi z)}{1-z^2}$ at $z_0 = 1$.
    *   **Answer:**
        *   Numerator: $h(z) = \cos(\pi z)$. $h(1) = \cos(\pi) = -1 \neq 0$.
        *   Denominator: $k(z) = 1-z^2 = (1-z)(1+z)$. $k(1) = 0$.
        *   $k'(z) = -2z$. $k'(1) = -2 \neq 0$. So $z_0=1$ is a zero of order 1 for the denominator.
        *   Since the numerator is non-zero and the denominator has a zero of order 1 at $z_0=1$, $f(z)$ has a **pole of order 1** at $z_0=1$.

**Q3.** Find the order of the pole of $f(z) = \frac{1-\cos z}{z^2}$ at $z_0 = 0$.
    *   **Answer:**
        *   $h(z) = 1-\cos z = 1 - (1 - z^2/2! + z^4/4! - \dots) = z^2/2! - z^4/4! + \dots$. Order of zero for $h(z)$ is $n_h=2$.
        *   $k(z) = z^2$. Order of zero for $k(z)$ is $n_k=2$.
        *   Since $n_h = n_k = 2$, $z_0=0$ is a removable singularity. The limit is $\frac{1}{2!}$.
        *   The question asks for the order of the pole. Since it is not a pole, the answer might be considered 0 or "not a pole".

**Q4.** Classify the singularity of $f(z) = z^2 e^{1/z}$ at $z_0=0$.
    *   **Answer:** The function has an essential singularity at $z_0=0$. This is because the Laurent series of $e^{1/z}$ around $0$ is $1 + \frac{1}{z} + \frac{1}{2!z^2} + \frac{1}{3!z^3} + \dots$, which has infinitely many terms with negative powers. Multiplying by $z^2$ gives $z^2 + z + \frac{1}{2!} + \frac{1}{3!z} + \dots$, which still has infinitely many terms with negative powers.

**Q5.** For the function $f(z) = \frac{z^3 \sin(2z)}{(z-\pi)^2}$, determine the order of the zero or pole at $z_0 = \pi$.
    *   **Answer:**
        *   Numerator: $h(z) = z^3 \sin(2z)$. $h(\pi) = \pi^3 \sin(2\pi) = \pi^3 \cdot 0 = 0$.
        *   To find the order of the zero, let's consider the derivative of the numerator with respect to $z$, assuming $z^3$ is treated as a constant near $\pi$, or more rigorously, the Taylor expansion of $\sin(2z)$ around $z=\pi$.
        *   Let $w = z-\pi$, so $z = w+\pi$. $\sin(2z) = \sin(2(w+\pi)) = \sin(2w+2\pi) = \sin(2w)$.
        *   $\sin(2w) = 2w - \frac{(2w)^3}{3!} + \dots = 2(z-\pi) - \frac{8(z-\pi)^3}{6} + \dots$
        *   So, $h(z) = z^3 \sin(2z) \approx \pi^3 (2(z-\pi))$.
        *   The numerator has a zero of order 1 at $z_0=\pi$. $n_h = 1$.
        *   Denominator: $k(z) = (z-\pi)^2$. The denominator has a zero of order 2 at $z_0=\pi$. $n_k = 2$.
        *   Since $n_h < n_k$ ($1 < 2$), the function has a **pole of order $n_k - n_h = 2 - 1 = 1$** at $z_0 = \pi$.

---

### 7. Important Points to Remember

*   **Zeros** are points where $f(z_0) = 0$.
*   **Poles** are isolated singularities where $|f(z)| \to \infty$ as $z \to z_0$.
*   The **order of a zero** $n$ means $f^{(n)}(z_0) \neq 0$ and lower derivatives are zero, or the Taylor series starts with $(z-z_0)^n$.
*   The **order of a pole** $m$ means $f(z) = \frac{g(z)}{(z-z_0)^m}$ with $g(z_0) \neq 0$, or the Laurent series starts with $\frac{a_{-m}}{(z-z_0)^m}$ with $a_{-m} \neq 0$.
*   For $f(z) = h(z)/k(z)$, the behavior at $z_0$ depends on the orders of zeros of $h(z)$ and $k(z)$ at $z_0$.
*   **Removable singularities** occur when the orders of zeros in the numerator and denominator are equal.
*   **Essential singularities** occur when the Laurent series has infinitely many terms in the principal part.

---

This topic provides the foundational understanding of how complex functions behave at specific points, which is essential for advanced techniques like contour integration and the residue theorem, directly contributing to CO4.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=fNk_zzaMoEs) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
