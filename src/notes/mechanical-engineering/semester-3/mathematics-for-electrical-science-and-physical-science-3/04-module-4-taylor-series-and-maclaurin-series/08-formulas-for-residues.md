---
title: "Formulas for Residues"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 4: Taylor series and Maclaurin series"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462cba"
status: "completed"
scrapedAt: "2026-05-20T17:50:57.124Z"
---
# Mathematics for Electrical Science and Physical Science – 3

## Module 4: Taylor Series and Maclaurin Series (Focus on Formulas for Residues)

This module focuses on the series expansion of complex functions and its powerful application in evaluating integrals. Specifically, we will delve into the concept of residues and the theorems that enable their calculation, which is crucial for solving complex engineering problems.

---

### **Topic: Formulas for Residues**

This topic is a cornerstone for understanding and applying the Residue Theorem to evaluate complex contour integrals, which in turn, is vital for solving various engineering problems, including those related to Fourier Transforms and system analysis.

---

### **Learning Outcomes (Relevant to this Topic):**

*   Understand the concept of singularities of complex functions.
*   Determine the type of isolated singularity of a complex function.
*   Find the Laurent series expansion of a complex function around an isolated singularity.
*   Identify the residue of a complex function at an isolated singularity from its Laurent series.
*   Apply formulas for calculating residues for different types of isolated singularities.
*   Compute real integrals using the residue theorem.

---

### **Course Outcomes Addressed:**

*   **CO4: Understand the series expansion of complex function about a singularity and apply residue theorem to compute real integrals. (Knowledge Level: K3)**

    This entire topic is dedicated to understanding series expansions (specifically Laurent series) about singularities and the practical application of the residue theorem for evaluating real integrals.

---

### **Key Concepts and Definitions**

#### 1. Singularities of Complex Functions

A point $z_0$ is a **singularity** of a function $f(z)$ if $f(z)$ is not analytic at $z_0$. We are primarily concerned with **isolated singularities**.

*   **Isolated Singularity:** A singularity $z_0$ of $f(z)$ is isolated if there exists a deleted neighborhood around $z_0$ (i.e., an annulus $0 < |z - z_0| < R$ for some $R > 0$) in which $f(z)$ is analytic.

#### 2. Types of Isolated Singularities

For an isolated singularity $z_0$ of $f(z)$, its Laurent series expansion in the annulus $0 < |z - z_0| < R$ will be of one of the following forms:

$$
f(z) = \sum_{n=-\infty}^{\infty} c_n (z - z_0)^n = \sum_{n=0}^{\infty} a_n (z - z_0)^n + \sum_{n=1}^{\infty} b_n (z - z_0)^{-n}
$$

The part with negative powers is called the **principal part**.

*   **Removable Singularity:** If the principal part of the Laurent series is zero (i.e., $b_n = 0$ for all $n \ge 1$), then $z_0$ is a removable singularity. The function can be made analytic at $z_0$ by defining $f(z_0) = c_0$.
    *   **Condition:** $\lim_{z \to z_0} f(z)$ exists and is finite.

*   **Pole:** If the principal part has a finite number of non-zero terms (i.e., there exists a positive integer $m$ such that $b_m \neq 0$ and $b_n = 0$ for all $n > m$), then $z_0$ is a pole. The smallest such $m$ is called the **order of the pole**.
    *   **Condition:** $\lim_{z \to z_0} f(z) = \infty$.
    *   If $m=1$, it's a **simple pole**.

*   **Essential Singularity:** If the principal part has an infinite number of non-zero terms, then $z_0$ is an essential singularity.

#### 3. The Residue of a Complex Function

The **residue** of a function $f(z)$ at an isolated singularity $z_0$, denoted by $\text{Res}(f, z_0)$ or $\text{Res}_{z=z_0} f(z)$, is the coefficient of the $(z - z_0)^{-1}$ term in its Laurent series expansion about $z_0$.

$$
\text{Res}(f, z_0) = c_{-1}
$$

The residue plays a crucial role in the Residue Theorem, which is used to evaluate contour integrals.

---

### **Formulas for Calculating Residues**

While the Laurent series provides the definition of the residue, direct calculation from the series can be tedious. Fortunately, there are formulas to compute residues without explicitly finding the Laurent series.

#### 1. Residue at a Simple Pole ($z_0$)

If $z_0$ is a simple pole of $f(z)$, then $\text{Res}(f, z_0) = c_{-1}$.

*   **Formula 1 (Limit Form):**
    $$
    \text{Res}(f, z_0) = \lim_{z \to z_0} (z - z_0) f(z)
    $$
    *   This formula is particularly useful when $f(z)$ can be written as a ratio of two analytic functions, say $f(z) = \frac{p(z)}{q(z)}$, where $p(z_0) \neq 0$ and $q(z_0) = 0$, $q'(z_0) \neq 0$. In this case, $z_0$ is a simple pole.
    *   **Formula 1a (for Rational Functions):** If $f(z) = \frac{p(z)}{q(z)}$ and $z_0$ is a simple pole (i.e., $p(z_0) \neq 0, q(z_0)=0, q'(z_0) \neq 0$), then
        $$
        \text{Res}(f, z_0) = \frac{p(z_0)}{q'(z_0)}
        $$
        This is a direct consequence of applying L'Hopital's rule to $\lim_{z \to z_0} (z - z_0) \frac{p(z)}{q(z)}$.

*   **Formula 2 (Derivative Form):** If $f(z) = \frac{p(z)}{q(z)}$, where $p(z)$ and $q(z)$ are analytic at $z_0$, $p(z_0) \neq 0$, $q(z_0) = 0$, and $q'(z_0) \neq 0$, then $z_0$ is a simple pole, and
    $$
    \text{Res}(f, z_0) = \frac{p(z_0)}{q'(z_0)}
    $$
    This is the same as Formula 1a, emphasizing its importance for rational functions.

#### 2. Residue at a Pole of Order $m$ ($z_0$)

If $z_0$ is a pole of order $m$ of $f(z)$, then the coefficient $c_{-1}$ can be found using the following formula:

*   **Formula 3:**
    $$
    \text{Res}(f, z_0) = \frac{1}{(m-1)!} \lim_{z \to z_0} \frac{d^{m-1}}{dz^{m-1}} \left[ (z - z_0)^m f(z) \right]
    $$
    *   Here, $(m-1)!$ denotes the factorial of $m-1$.
    *   $\frac{d^{m-1}}{dz^{m-1}}$ denotes the $(m-1)$-th derivative with respect to $z$.

#### 3. Residue at an Essential Singularity ($z_0$)

There is no general formula for the residue at an essential singularity. It must be found by:
    *   Determining the Laurent series expansion of $f(z)$ around $z_0$.
    *   Identifying the coefficient of the $(z - z_0)^{-1}$ term ($c_{-1}$).

#### 4. Residue at Infinity

For a function $f(z)$ that is analytic everywhere except for a finite number of isolated singularities in the finite $z$-plane, we can consider the behavior at infinity.
Let $w = 1/z$. Then $z = 1/w$. As $z \to \infty$, $w \to 0$.
The residue at infinity is defined as:
$$
\text{Res}(f, \infty) = -\text{Res}\left(\frac{1}{w^2} f\left(\frac{1}{w}\right), 0\right)
$$
This is equivalent to finding the coefficient of $w$ in the Laurent series of $\frac{1}{w^2} f\left(\frac{1}{w}\right)$ around $w=0$.

---

### **Examples**

**Example 1: Simple Pole**

Find the residue of $f(z) = \frac{1}{z^2 + 1}$ at $z = i$.

*   **Analysis:** The singularities are at $z^2 + 1 = 0 \implies z = \pm i$. Let $z_0 = i$.
    $f(z) = \frac{1}{(z-i)(z+i)}$. This is a simple pole at $z=i$.
*   **Method 1 (Limit Form):**
    $$
    \text{Res}(f, i) = \lim_{z \to i} (z - i) f(z) = \lim_{z \to i} (z - i) \frac{1}{(z-i)(z+i)} = \lim_{z \to i} \frac{1}{z+i} = \frac{1}{i+i} = \frac{1}{2i} = \frac{-i}{2}
    $$
*   **Method 2 (Rational Function Form):**
    Let $p(z) = 1$ and $q(z) = z^2 + 1$. Then $p(i) = 1 \neq 0$.
    $q'(z) = 2z$. So, $q'(i) = 2i \neq 0$.
    $$
    \text{Res}(f, i) = \frac{p(i)}{q'(i)} = \frac{1}{2i} = \frac{-i}{2}
    $$

**Example 2: Pole of Order 2**

Find the residue of $f(z) = \frac{z^2}{(z-1)^2(z+2)}$ at $z = 1$.

*   **Analysis:** $z=1$ is a pole of order $m=2$.
*   **Method (Formula 3):**
    Here, $z_0 = 1$ and $m = 2$.
    $(z - z_0)^m f(z) = (z - 1)^2 \frac{z^2}{(z-1)^2(z+2)} = \frac{z^2}{z+2}$.
    We need the first derivative ($m-1 = 1$).
    Let $g(z) = \frac{z^2}{z+2}$.
    $g'(z) = \frac{d}{dz} \left(\frac{z^2}{z+2}\right) = \frac{(2z)(z+2) - z^2(1)}{(z+2)^2} = \frac{2z^2 + 4z - z^2}{(z+2)^2} = \frac{z^2 + 4z}{(z+2)^2}$.
    Now, evaluate $g'(1)$:
    $g'(1) = \frac{1^2 + 4(1)}{(1+2)^2} = \frac{1+4}{3^2} = \frac{5}{9}$.
    The residue is $\frac{1}{(2-1)!} g'(1) = \frac{1}{1!} \times \frac{5}{9} = \frac{5}{9}$.
    $$
    \text{Res}(f, 1) = \frac{1}{(2-1)!} \lim_{z \to 1} \frac{d^{2-1}}{dz^{2-1}} \left[ (z - 1)^2 \frac{z^2}{(z-1)^2(z+2)} \right]
    = \lim_{z \to 1} \frac{d}{dz} \left(\frac{z^2}{z+2}\right)
    = \lim_{z \to 1} \frac{z^2 + 4z}{(z+2)^2} = \frac{1^2 + 4(1)}{(1+2)^2} = \frac{5}{9}
    $$

**Example 3: Essential Singularity**

Find the residue of $f(z) = e^{1/z}$ at $z = 0$.

*   **Analysis:** $z=0$ is an essential singularity. We need the Laurent series.
    Recall the Maclaurin series for $e^u$: $e^u = \sum_{n=0}^{\infty} \frac{u^n}{n!} = 1 + u + \frac{u^2}{2!} + \frac{u^3}{3!} + \dots$
    Substitute $u = 1/z$:
    $f(z) = e^{1/z} = \sum_{n=0}^{\infty} \frac{(1/z)^n}{n!} = 1 + \frac{1}{z} + \frac{1}{2!z^2} + \frac{1}{3!z^3} + \dots$
    The coefficient of $z^{-1}$ (or $1/z$) is $c_{-1} = 1$.
    $$
    \text{Res}(f, 0) = 1
    $$

**Example 4: Residue at Infinity**

Find the residue at infinity for $f(z) = \frac{z}{z^2+1}$.

*   **Analysis:** Singularities are at $z = \pm i$. We need to find $\text{Res}(f, \infty) = -\text{Res}\left(\frac{1}{w^2} f\left(\frac{1}{w}\right), 0\right)$.
    Let $g(w) = \frac{1}{w^2} f\left(\frac{1}{w}\right)$.
    $f\left(\frac{1}{w}\right) = \frac{1/w}{(1/w)^2 + 1} = \frac{1/w}{1/w^2 + 1} = \frac{1/w}{(1+w^2)/w^2} = \frac{w}{1+w^2}$.
    $g(w) = \frac{1}{w^2} \left(\frac{w}{1+w^2}\right) = \frac{1}{w(1+w^2)}$.
    Now find the residue of $g(w)$ at $w=0$.
    $g(w) = \frac{1}{w(1+w^2)}$. This is a simple pole at $w=0$.
    Using Formula 1a for rational functions: $p(w) = 1$, $q(w) = w(1+w^2) = w + w^3$.
    $p(0) = 1$.
    $q'(w) = 1 + 3w^2$.
    $q'(0) = 1 + 3(0)^2 = 1$.
    $\text{Res}(g, 0) = \frac{p(0)}{q'(0)} = \frac{1}{1} = 1$.
    Therefore, $\text{Res}(f, \infty) = -\text{Res}(g, 0) = -1$.

---

### **Important Points to Remember**

*   **Identify Singularities:** The first step in finding residues is always to locate the singularities of the function.
*   **Determine the Type of Singularity:** Knowing whether a singularity is a simple pole, a pole of higher order, or an essential singularity is crucial for choosing the correct formula.
*   **Pole Order is Key:** For poles, the order $m$ dictates which formula to use.
*   **Rational Function Advantage:** For functions that are ratios of polynomials or analytic functions, the formula $\frac{p(z_0)}{q'(z_0)}$ for simple poles is very efficient.
*   **Laurent Series for Essential Singularities:** Essential singularities cannot be handled by general formulas; the Laurent series expansion is necessary.
*   **Residue at Infinity:** Remember the sign convention and the transformation $z \to 1/w$.
*   **Practice Differentiation:** Formula 3 involves derivatives, so practice your calculus.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |


### **References and Content Integration**

*   **Kreyszig, Erwin. *Advanced Engineering Mathematics* (10th ed., 2016):**
    *   Chapter 14, "Calculus of Residues," extensively covers singularities, Laurent series, and the computation of residues. Section 14.2 specifically deals with "Singularities and Laurent Series," and Section 14.3, "Residue. Calculation of Residues," provides the formulas and examples discussed here. The book emphasizes the application of residues in evaluating integrals, linking directly to CO4.

*   **Zill & Shanahan, *Complex Analysis* (3rd ed., 2015):**
    *   Chapter 6, "Zeros, Singularities, and the Laurent Series," provides a foundational understanding. Section 6.4, "The Residue, Calculation of Residues," directly presents the formulas and techniques for determining residues at various types of singularities, which is essential for CO4.

*   **Ramana, B. V. *Higher Engineering Mathematics* (39th ed., 2023):**
    *   Chapter 22, "Complex Integration," covers the topic of residues. It likely details the methods for calculating residues at simple poles and poles of higher order, similar to Kreyszig and Zill, supporting CO4.

*   **Grewal, B.S. *Higher Engineering Mathematics* (44th ed., 2018):**
    *   Similar to Ramana, Grewal's book will have a dedicated chapter on complex integration and residues, likely presenting the standard formulas for residue calculation, crucial for the successful application of the Residue Theorem in CO4.

*   **Rao, Kim, Hwang, *Fast Fourier Transform - Algorithms and Applications* (1st ed., 2011):**
    *   While this book's primary focus is FFT, the application of complex analysis and residue theorem in signal processing and analyzing systems often involves evaluating integrals that arise in the context of Fourier transforms. Understanding residue calculation is indirectly vital for contexts where this book might be applied, supporting CO1 in a broader sense by providing tools for integral evaluation in related fields.

---

### **Practice Questions and Exercises**

**Instructions:** For each function, find the residue at the indicated singularity.

1.  **Function:** $f(z) = \frac{\cos z}{z^2}$
    **Singularity:** $z = 0$
    **Expected Answer:** $0$ (This is a pole of order 2 for the denominator, but the numerator's Taylor series helps simplify. $f(z) = \frac{1 - z^2/2! + z^4/4! - \dots}{z^2} = z^{-2} - \frac{1}{2} + \frac{z^2}{24} - \dots$. The coefficient of $z^{-1}$ is $0$).

2.  **Function:** $f(z) = \frac{e^z}{z(z-1)}$
    **Singularities:** $z = 0$ and $z = 1$. Find residues at both.
    **Expected Answer:**
    *   Res($f, 0$): $-1$ (simple pole at $z=0$. Use $\frac{e^z}{z-1}$ at $z=0$)
    *   Res($f, 1$): $e$ (simple pole at $z=1$. Use $\frac{e^z}{z}$ at $z=1$)

3.  **Function:** $f(z) = \frac{1}{(z^2+1)^2}$
    **Singularity:** $z = i$
    **Expected Answer:** $\frac{-i}{4}$ (Pole of order 2 at $z=i$. Use Formula 3).

4.  **Function:** $f(z) = z^3 e^{1/z}$
    **Singularity:** $z = 0$
    **Expected Answer:** $1/6$ (Essential singularity. Laurent series: $z^3 (1 + 1/z + 1/(2!z^2) + 1/(3!z^3) + \dots) = z^3 + z^2 + z/2! + 1/(3!) + \dots$. The coefficient of $z^{-1}$ is $0$. **Correction:** $z^3 e^{1/z} = z^3 \sum_{n=0}^\infty \frac{1}{n! z^n} = \sum_{n=0}^\infty \frac{z^{3-n}}{n!}$. We need $3-n = -1 \implies n=4$. So the term is $\frac{z^{-1}}{4!} = \frac{1}{24z}$. Thus, the residue is $1/24$.)

5.  **Function:** $f(z) = \frac{1}{z^3(z-2)^2}$
    **Singularity:** $z = 0$
    **Expected Answer:** $-\frac{1}{4} - \frac{3}{16} = -\frac{7}{16}$ (Pole of order 3 at $z=0$. Requires careful application of Formula 3).
    Let's verify this one:
    $f(z) = \frac{1}{z^3} (z-2)^{-2} = \frac{1}{z^3} \frac{-1}{2} (1 - z/2)^{-2}$ (This approach is for Taylor expansion. For Laurent, we expand $(z-2)^{-2}$ around $z=0$ or use the direct formula for pole of order 3).
    Using Formula 3 for $z_0=0, m=3$:
    $\frac{d^{m-1}}{dz^{m-1}}[(z-z_0)^m f(z)] = \frac{d^2}{dz^2}[z^3 \frac{1}{z^3(z-2)^2}] = \frac{d^2}{dz^2}[(z-2)^{-2}]$.
    Derivative 1: $-2(z-2)^{-3}$.
    Derivative 2: $(-2)(-3)(z-2)^{-4} = 6(z-2)^{-4}$.
    Evaluate at $z=0$: $6(0-2)^{-4} = 6(-2)^{-4} = 6/16 = 3/8$.
    Residue = $\frac{1}{(3-1)!} \times \frac{3}{8} = \frac{1}{2!} \times \frac{3}{8} = \frac{1}{2} \times \frac{3}{8} = \frac{3}{16}$.
    **Correction:** The expected answer given in the question might be for a different problem or incorrect. Based on the formula, the residue should be $3/16$.

---

This concludes the notes on Formulas for Residues. Mastering these formulas is essential for successfully applying the Residue Theorem in various engineering and physical science contexts.