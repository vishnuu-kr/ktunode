---
title: "Zeros of Analytic functions – Poles and Zeros"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 4: Taylor series and Maclaurin series"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35a80"
status: "completed"
scrapedAt: "2026-05-23T16:14:51.063Z"
---
# Mathematics for Electrical Science and Physical Science – 3

## Module 4: Taylor Series and Maclaurin Series

### Topic: Zeros of Analytic Functions – Poles and Zeros

---

**Knowledge Level (K3):** This module focuses on understanding and applying concepts related to complex functions, particularly their series expansions and behaviors around singularities.

**Course Outcomes Alignment:**

*   **CO4:** Understand the series expansion of complex function about a singularity and apply residue theorem to compute real integrals. (This topic directly supports understanding series expansions and is foundational for understanding singularities which are crucial for the residue theorem.)

---

### 1. Introduction: Analytic Functions and Their Behavior

An analytic function (or holomorphic function) is a function that is differentiable at every point in some open set of the complex plane. Understanding the roots (zeros) and special points (poles) of these functions is critical in various areas of electrical and physical science, such as stability analysis, signal processing, and control systems.

**Key Concept:** The behavior of an analytic function around a point can be well-described by its Taylor series expansion. Deviations from this smooth behavior often indicate singularities like poles.

---

### 2. Zeros of Analytic Functions

A complex number $z_0$ is a **zero** of an analytic function $f(z)$ if $f(z_0) = 0$.

**2.1 Isolated Zeros:**

If $f(z)$ is analytic in a domain $D$ and $f(z_0) = 0$ for some $z_0 \in D$, then either:

*   $z_0$ is an **isolated zero** of $f(z)$, meaning there exists a neighborhood around $z_0$ where $f(z) \neq 0$ for all other $z$ in that neighborhood.
*   $f(z)$ is identically zero in $D$.

**Theorem (Zeros of Non-Constant Analytic Functions are Isolated):** If $f(z)$ is analytic in a domain $D$ and has a sequence of distinct zeros $\{z_n\}$ in $D$ that converges to a point $z_0 \in D$, then $f(z)$ must be identically zero in $D$.

**2.2 Order of a Zero:**

If $z_0$ is an isolated zero of $f(z)$, then its **order of zero** is the smallest positive integer $m$ such that the $m$-th derivative of $f(z)$ at $z_0$ is non-zero, i.e., $f(z_0) = f'(z_0) = \dots = f^{(m-1)}(z_0) = 0$ and $f^{(m)}(z_0) \neq 0$.

**Taylor Series Representation around a Zero:**
If $z_0$ is a zero of order $m$ for an analytic function $f(z)$, then $f(z)$ can be represented by its Taylor series around $z_0$ as:

$f(z) = (z-z_0)^m \cdot g(z)$

where $g(z)$ is analytic in a neighborhood of $z_0$ and $g(z_0) \neq 0$. This means that near $z_0$, $f(z)$ behaves like a power of $(z-z_0)$.

**Example:**
Consider the function $f(z) = \sin(z)$.
We know that $\sin(0) = 0$.
$f'(z) = \cos(z)$, $f'(0) = \cos(0) = 1 \neq 0$.
So, $z_0 = 0$ is a zero of order $m=1$.
The Taylor series of $\sin(z)$ around $z=0$ is $\sin(z) = z - \frac{z^3}{3!} + \frac{z^5}{5!} - \dots = z \left(1 - \frac{z^2}{3!} + \frac{z^4}{5!} - \dots \right)$.
Here, $g(z) = 1 - \frac{z^2}{3!} + \frac{z^4}{5!} - \dots$, and $g(0) = 1 \neq 0$.

**Kreyszig (10th Ed., Section 12.5 - Power Series):** Discusses the properties of analytic functions and their power series representations, which directly relates to the behavior of zeros. The uniqueness of power series expansions ensures that the order of a zero is well-defined.

---

### 3. Poles of Analytic Functions

A **pole** of a function $f(z)$ is a type of singularity where the function "blows up" to infinity.

**3.1 Definition of a Pole:**

A complex number $z_0$ is a **pole of order $p$** of a function $f(z)$ if $f(z)$ can be expressed in the form:

$f(z) = \frac{g(z)}{(z-z_0)^p}$

where $g(z)$ is analytic in a neighborhood of $z_0$ and $g(z_0) \neq 0$, and $p$ is a positive integer.

**3.2 Laurent Series Representation around a Pole:**

For a function $f(z)$ that has a pole of order $p$ at $z_0$, its Laurent series expansion around $z_0$ has a finite number of terms with negative powers of $(z-z_0)$. The series takes the form:

$f(z) = \frac{a_{-p}}{(z-z_0)^p} + \frac{a_{-p+1}}{(z-z_0)^{p-1}} + \dots + \frac{a_{-1}}{z-z_0} + a_0 + a_1(z-z_0) + a_2(z-z_0)^2 + \dots$

where $a_{-p} \neq 0$. The term $\frac{a_{-p}}{(z-z_0)^p}$ is the principal part of the Laurent series at $z_0$. The order of the pole $p$ is the highest power of $(z-z_0)^{-1}$ in the principal part.

**Important Point:** If $p=1$, the pole is called a **simple pole**.

**3.3 Identifying Poles using Derivatives:**

Similar to zeros, poles can be identified using derivatives. A function $f(z)$ has a pole of order $p$ at $z_0$ if:

*   $f(z)$ is not defined at $z_0$.
*   $\lim_{z \to z_0} |f(z)| = \infty$.
*   The function $\frac{1}{f(z)}$ has a zero of order $p$ at $z_0$. This implies that $\left(\frac{1}{f(z)}\right)^{(k)}|_{z=z_0} = 0$ for $k=0, 1, \dots, p-1$ and $\left(\frac{1}{f(z)}\right)^{(p)}|_{z=z_0} \neq 0$.

**Example:**
Consider the function $f(z) = \frac{1}{z^2}$.
At $z_0 = 0$, $f(z)$ is undefined and $\lim_{z \to 0} |\frac{1}{z^2}| = \infty$.
Let's consider $\frac{1}{f(z)} = z^2$.
The function $h(z) = z^2$ has a zero at $z_0=0$.
$h'(z) = 2z$, $h'(0) = 0$.
$h''(z) = 2$, $h''(0) = 2 \neq 0$.
So, $z_0 = 0$ is a zero of order $p=2$ for $\frac{1}{f(z)}$.
Therefore, $f(z) = \frac{1}{z^2}$ has a pole of order $p=2$ at $z_0 = 0$.
The Laurent series is simply $\frac{1}{z^2}$. Here, $g(z) = 1$, and $g(0) = 1 \neq 0$.

**Example:**
Consider $f(z) = \frac{z+1}{z-2}$.
At $z_0=2$, the numerator $g(z) = z+1$ is analytic and $g(2) = 2+1 = 3 \neq 0$. The denominator $(z-2)^1$ indicates a pole of order $p=1$.
So, $f(z)$ has a simple pole at $z=2$.

**Zill & Shanahan (3rd Ed., Chapter 6 - Complex Integration, Section 6.3 - Zeros and Poles):** This section explicitly defines zeros and poles and discusses their classification based on the behavior of the function near these points, often relating it to Laurent series.

**Ramana (39th Ed., Chapter 26 - Calculus of Residues, Section 26.1 - Zeros and Poles):** This chapter provides definitions and methods for identifying zeros and poles, which are fundamental for the calculus of residues.

---

### 4. Relationship between Zeros and Poles of $f(z)$ and $1/f(z)$

Let $f(z)$ be an analytic function with a zero of order $m$ at $z_0$. Then $f(z) = (z-z_0)^m g(z)$ where $g(z_0) \neq 0$.
Consider $\frac{1}{f(z)} = \frac{1}{(z-z_0)^m g(z)}$.
Let $h(z) = \frac{1}{g(z)}$. Since $g(z)$ is analytic and non-zero at $z_0$, $h(z)$ is also analytic and non-zero at $z_0$.
So, $\frac{1}{f(z)} = \frac{h(z)}{(z-z_0)^m}$, where $h(z_0) \neq 0$.
This implies that if $f(z)$ has a zero of order $m$ at $z_0$, then $\frac{1}{f(z)}$ has a pole of order $m$ at $z_0$.

Conversely, let $f(z)$ have a pole of order $p$ at $z_0$. Then $f(z) = \frac{g(z)}{(z-z_0)^p}$ where $g(z_0) \neq 0$.
Consider $\frac{1}{f(z)} = \frac{(z-z_0)^p}{g(z)}$.
Let $h(z) = \frac{1}{g(z)}$. Since $g(z)$ is analytic and non-zero at $z_0$, $h(z)$ is also analytic and non-zero at $z_0$.
So, $\frac{1}{f(z)} = (z-z_0)^p h(z)$, where $h(z_0) \neq 0$.
This implies that if $f(z)$ has a pole of order $p$ at $z_0$, then $\frac{1}{f(z)}$ has a zero of order $p$ at $z_0$.

**Important Point:** This reciprocal relationship is crucial for analyzing functions and their behavior.

---

### 5. Meromorphic Functions

A function $f(z)$ is called **meromorphic** in a domain $D$ if it is analytic in $D$ except for a set of isolated points, which are all poles of $f(z)$.

**Examples of Meromorphic Functions:**
*   Rational functions, e.g., $f(z) = \frac{z^2+1}{z-i}$. This has a simple pole at $z=i$.
*   Trigonometric functions like $\tan(z) = \frac{\sin(z)}{\cos(z)}$ are meromorphic. Its poles occur where $\cos(z) = 0$, which are at $z = \frac{\pi}{2} + n\pi$ for integer $n$. These are simple poles.

**Grewal (44th Ed., Chapter 33 - Complex Integration, Section 33.4 - Meromorphic Functions):** Provides a comprehensive treatment of meromorphic functions, defining them and discussing their properties, which are built upon the understanding of poles.

---

### 6. Examples and Applications

**Example 1: Finding Zeros and Poles**
Determine the zeros and poles of the function $f(z) = \frac{z^2(z-1)^3}{(z+i)^2(z-2)}$.

*   **Zeros:**
    *   The numerator is $z^2(z-1)^3$.
    *   The zeros are where the numerator is zero: $z^2 = 0 \Rightarrow z=0$ (order 2).
    *   $(z-1)^3 = 0 \Rightarrow z=1$ (order 3).
    *   The function is analytic at $z=0$ and $z=1$.

*   **Poles:**
    *   The denominator is $(z+i)^2(z-2)$.
    *   The poles are where the denominator is zero: $(z+i)^2 = 0 \Rightarrow z=-i$ (order 2).
    *   $(z-2) = 0 \Rightarrow z=2$ (order 1).
    *   These are indeed poles as the numerator is non-zero at these points.

**Example 2: Behavior near a Pole**
Analyze the behavior of $f(z) = \frac{1}{z-2}$ near $z=2$.

*   $f(z)$ has a simple pole at $z=2$.
*   We can write $f(z) = \frac{1}{z-2}$. Here $g(z) = 1$, and $g(2) = 1 \neq 0$.
*   The Laurent series around $z=2$ is simply $\frac{1}{z-2}$.
*   As $z \to 2$, $|f(z)| \to \infty$.

**Example 3: Relation to Signal Processing (FFT)**
In digital signal processing, the analysis of system responses often involves poles and zeros of transfer functions, which are typically rational functions in the complex variable $s$ or $z$. The location of poles and zeros in the complex plane determines the system's stability and frequency response characteristics. For instance, poles in the right-half plane ($Re(s) > 0$) indicate an unstable system. The concept of zeros and poles is foundational for understanding concepts like filter design and system stability, which are often analyzed using transforms like the Fourier Transform (related to CO1).

**Rao et al. (1st Ed., Chapter 2 - Mathematical Foundations, Section 2.6 - Zeros and Poles):** While this book is focused on FFT, it acknowledges the importance of zeros and poles in characterizing signals and systems. Understanding these concepts is vital for interpreting the frequency domain representation achieved through FFT.

---

### 7. Important Points to Remember

*   **Zeros:** Points where an analytic function $f(z)$ equals zero.
*   **Order of a Zero:** The smallest positive integer $m$ such that $f^{(m)}(z_0) \neq 0$ at a zero $z_0$. $f(z)$ can be written as $(z-z_0)^m g(z)$ where $g(z_0) \neq 0$.
*   **Poles:** Singularities where $|f(z)| \to \infty$.
*   **Order of a Pole:** A positive integer $p$ such that $f(z) = \frac{g(z)}{(z-z_0)^p}$ where $g(z_0) \neq 0$. This means $\frac{1}{f(z)}$ has a zero of order $p$ at $z_0$.
*   **Simple Pole:** A pole of order 1.
*   **Laurent Series:** Provides the local expansion of a function around a singularity, explicitly showing the order of poles or the behavior of zeros (if $f(z)=0$ at a point, the Laurent series is just the Taylor series with no negative powers).
*   **Reciprocal Property:** Zeros of $f(z)$ correspond to poles of $1/f(z)$ of the same order, and vice versa.
*   **Meromorphic Functions:** Analytic functions with only poles as singularities in a domain.

---

### 8. Practice Questions

**Question 1:**
Find the zeros and their orders for the function $f(z) = z^3 \sin(z)$.
**(Answer:** $z=0$ is a zero of order 4; $z = n\pi$ for $n \in \mathbb{Z}, n \neq 0$ are simple zeros.)

**Question 2:**
Identify the poles and their orders for the function $f(z) = \frac{e^z}{(z-1)^2(z+3)}$.
**(Answer:** Simple pole at $z=-3$ (order 1); Pole at $z=1$ (order 2).)

**Question 3:**
Let $f(z) = \frac{z-1}{z^2+1}$. Find the zeros and poles of $f(z)$.
**(Answer:** Zeros: $z=1$ (simple zero). Poles: $z=i$ (simple pole) and $z=-i$ (simple pole).)

**Question 4:**
If $f(z)$ has a zero of order 2 at $z_0$, what can you say about the behavior of $h(z) = \frac{1}{f(z)}$ at $z_0$?
**(Answer:** $h(z)$ has a pole of order 2 at $z_0$.)

**Question 5:**
Determine if the function $f(z) = \frac{\cos(z)}{z}$ is meromorphic in the complex plane. If so, identify its singularities.
**(Answer:** Yes, it is meromorphic. It has a simple pole at $z=0$. The zeros of $\cos(z)$ are $z = \frac{\pi}{2} + n\pi$, which are not canceled by the denominator. Thus, these are also zeros of $f(z)$.)

---
This concludes the study notes for "Zeros of Analytic Functions – Poles and Zeros". This topic is a foundational step towards understanding the behavior of complex functions around singularities, which is essential for applying the residue theorem (CO4) and for analyzing systems in electrical and physical sciences.
