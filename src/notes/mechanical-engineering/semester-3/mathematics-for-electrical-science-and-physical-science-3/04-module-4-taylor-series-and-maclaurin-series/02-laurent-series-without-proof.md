---
title: "Laurent series (without proof)"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 4: Taylor series and Maclaurin series"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462cb4"
status: "completed"
scrapedAt: "2026-05-20T17:50:52.847Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 4: Taylor Series and Maclaurin Series

### Topic: Laurent Series (Without Proof)

---

### 1. Introduction to Laurent Series

The Laurent series is a generalization of the Taylor series that allows for the representation of a complex function in an annulus (a region between two concentric circles) rather than just a disk. This is particularly useful for functions that have singularities, where Taylor series representations are not possible.

**Key Concept:** Taylor series are valid in a disk where the function is analytic. Laurent series are valid in an annulus where the function is analytic, except possibly at the center of the annulus.

**Connection to Course Outcomes:**
*   **CO4:** Understand the series expansion of complex function about a singularity. Laurent series directly address this by providing a way to expand functions around points where they might not be analytic, which is crucial for understanding singularities.

---

### 2. The Laurent Series Representation

Let $f(z)$ be a function that is analytic in the annulus $A$ defined by $R_1 < |z - z_0| < R_2$, where $0 \le R_1 < R_2 \le \infty$. The Laurent series expansion of $f(z)$ about $z_0$ is given by:

$f(z) = \sum_{n=-\infty}^{\infty} a_n (z - z_0)^n$

where the coefficients $a_n$ are determined by the following integrals:

$a_n = \frac{1}{2\pi i} \oint_C \frac{f(\xi)}{(\xi - z_0)^{n+1}} d\xi$

Here, $C$ is any simple closed contour within the annulus $A$ that encloses $z_0$.

**Key Concepts:**
*   **Annulus:** A region between two concentric circles.
*   **Singularity:** A point where a function is not analytic.
*   **Coefficients ($a_n$):** These coefficients determine the nature of the Laurent series.

**Reference (Kreyszig):** Chapter 13, Section 13.5 "Laurent Series". Kreyszig provides a thorough explanation of the Laurent series representation and the integral formulas for its coefficients.

---

### 3. Structure of the Laurent Series

The Laurent series can be split into two parts:

$f(z) = \sum_{n=0}^{\infty} a_n (z - z_0)^n + \sum_{n=1}^{\infty} b_n (z - z_0)^{-n}$

Let $m = -n$. Then the second sum becomes $\sum_{m=1}^{\infty} b_m (z - z_0)^m$. So, the series can be written as:

$f(z) = \sum_{n=0}^{\infty} a_n (z - z_0)^n + \sum_{n=1}^{\infty} a_{-n} (z - z_0)^{-n}$

where $a_{-n} = b_n$.

*   **Principal Part:** The part with negative powers of $(z - z_0)$, i.e., $\sum_{n=1}^{\infty} a_{-n} (z - z_0)^{-n}$. This part describes the behavior of the function near the singularity $z_0$.
*   **Analytic Part (or Taylor Part):** The part with non-negative powers of $(z - z_0)$, i.e., $\sum_{n=0}^{\infty} a_n (z - z_0)^n$. This part is analogous to a Taylor series.

**Important Point to Remember:** The principal part determines the type of singularity at $z_0$.

---

### 4. Types of Singularities and Laurent Series

The nature of the principal part of the Laurent series reveals the type of isolated singularity at $z_0$:

*   **Removable Singularity:** If the principal part is zero (i.e., $a_{-n} = 0$ for all $n \ge 1$), then $z_0$ is a removable singularity. The function can be made analytic at $z_0$ by defining $f(z_0) = a_0$.
*   **Pole:** If the principal part has a finite number of non-zero terms, i.e., $a_{-n} \neq 0$ for some $n \ge 1$ and $a_{-k} = 0$ for all $k > m$ for some integer $m \ge 1$, then $z_0$ is a pole of order $m$. The term $a_{-m}(z - z_0)^{-m}$ is the dominant term.
*   **Essential Singularity:** If the principal part has an infinite number of non-zero terms, then $z_0$ is an essential singularity. The behavior of the function near an essential singularity is very complex (e.g., Casorati-Weierstrass theorem and Picard's theorems).

**Connection to Course Outcomes:**
*   **CO4:** Understand the series expansion of complex function about a singularity. Laurent series directly classify these singularities based on their principal part.

**Reference (Zill & Shanahan):** Chapter 7, Section 7.1 "Complex Integration and the Cauchy Integral Formula" and Section 7.2 "The Cauchy Integral Formula for Derivatives". While this section focuses on Cauchy's formulas, understanding these is foundational for deriving the Laurent series coefficients. Chapter 8, Section 8.1 "Isolated Singularities" is directly relevant as it discusses the classification of singularities based on Laurent series.

---

### 5. Calculating Laurent Series Coefficients (Practical Approach)

While the integral formulas define the coefficients, it's often more practical to derive Laurent series using known series like the geometric series and binomial series.

**Geometric Series:**
$\frac{1}{1 - w} = \sum_{k=0}^{\infty} w^k$, for $|w| < 1$.

**Binomial Series:**
$(1 + w)^\alpha = \sum_{k=0}^{\infty} \binom{\alpha}{k} w^k$, for $|w| < 1$, where $\binom{\alpha}{k} = \frac{\alpha(\alpha-1)\cdots(\alpha-k+1)}{k!}$.

**Example 1: Find the Laurent series of $f(z) = \frac{1}{z(z-1)}$ about $z_0 = 0$ in the annulus $0 < |z| < 1$.**

**Step 1: Partial Fraction Decomposition**
$f(z) = \frac{1}{z(z-1)} = \frac{A}{z} + \frac{B}{z-1}$
$1 = A(z-1) + Bz$
Setting $z=0$, $1 = -A \implies A = -1$.
Setting $z=1$, $1 = B$.
So, $f(z) = \frac{-1}{z} + \frac{1}{z-1}$.

**Step 2: Expand $\frac{1}{z-1}$ in the annulus $0 < |z| < 1$.**
We need to express $\frac{1}{z-1}$ in powers of $z$.
$\frac{1}{z-1} = \frac{-1}{1-z}$
Since $|z| < 1$, we can use the geometric series:
$\frac{-1}{1-z} = - \sum_{k=0}^{\infty} z^k = - (1 + z + z^2 + z^3 + \dots)$

**Step 3: Combine the terms.**
$f(z) = \frac{-1}{z} + \left( - \sum_{k=0}^{\infty} z^k \right)$
$f(z) = -\frac{1}{z} - 1 - z - z^2 - z^3 - \dots$
$f(z) = -z^{-1} - \sum_{k=0}^{\infty} z^k$

This is the Laurent series for $f(z)$ in $0 < |z| < 1$. The principal part is $-z^{-1}$, indicating a simple pole at $z_0 = 0$.

**Example 2: Find the Laurent series of $f(z) = \frac{1}{z(z-1)}$ about $z_0 = 0$ in the annulus $1 < |z| < \infty$.**

**Step 1: Partial Fraction Decomposition (Same as before)**
$f(z) = \frac{-1}{z} + \frac{1}{z-1}$.

**Step 2: Expand $\frac{1}{z-1}$ in the annulus $1 < |z| < \infty$.**
We need to express $\frac{1}{z-1}$ in powers of $z$, but this time, we need terms with $|z| > 1$.
$\frac{1}{z-1} = \frac{1}{z(1 - \frac{1}{z})}$
Since $1 < |z|$, we have $|\frac{1}{z}| < 1$. Using the geometric series:
$\frac{1}{z(1 - \frac{1}{z})} = \frac{1}{z} \sum_{k=0}^{\infty} \left(\frac{1}{z}\right)^k = \frac{1}{z} \left(1 + \frac{1}{z} + \frac{1}{z^2} + \dots \right)$
$= \frac{1}{z} + \frac{1}{z^2} + \frac{1}{z^3} + \dots$
$= \sum_{k=1}^{\infty} z^{-k}$

**Step 3: Combine the terms.**
$f(z) = \frac{-1}{z} + \sum_{k=1}^{\infty} z^{-k}$
$f(z) = -z^{-1} + z^{-1} + z^{-2} + z^{-3} + \dots$
$f(z) = z^{-2} + z^{-3} + z^{-4} + \dots = \sum_{k=2}^{\infty} z^{-k}$

This is the Laurent series for $f(z)$ in $1 < |z| < \infty$. The principal part is zero, suggesting the function might be analytic or have a removable singularity at $z=0$ in this domain. However, the original function $\frac{1}{z(z-1)}$ has a singularity at $z=0$. The issue here is that the annulus $1 < |z| < \infty$ does *not* contain the singularity $z=0$ in its interior. The expansion is valid for $|z|>1$.

**Example 3: Find the Laurent series of $f(z) = e^{1/z}$ about $z_0 = 0$.**

We know the Taylor series for $e^w$ about $w=0$ is $e^w = \sum_{k=0}^{\infty} \frac{w^k}{k!}$.
Let $w = 1/z$. Since we are expanding about $z_0=0$, we consider the region $|z| > 0$.
$f(z) = e^{1/z} = \sum_{k=0}^{\infty} \frac{(1/z)^k}{k!} = \sum_{k=0}^{\infty} \frac{z^{-k}}{k!}$
$f(z) = \frac{z^0}{0!} + \frac{z^{-1}}{1!} + \frac{z^{-2}}{2!} + \frac{z^{-3}}{3!} + \dots$
$f(z) = 1 + \frac{1}{z} + \frac{1}{2!z^2} + \frac{1}{3!z^3} + \dots$

This is the Laurent series expansion of $f(z) = e^{1/z}$ about $z_0 = 0$. The principal part has infinitely many terms ($1/z, 1/z^2, \dots$), indicating that $z_0 = 0$ is an essential singularity.

**Reference (Ramana):** Chapter 34, Section 34.4 "Laurent's Series". Ramana provides several examples of finding Laurent series by using the geometric series expansion.
**Reference (Grewal):** Chapter 17, Section 17.1 "Complex Integration". Grewal's text covers complex functions and series, including Laurent series, often through illustrative examples.

---

### 6. Applications of Laurent Series

Laurent series are fundamental in complex analysis and have several important applications:

*   **Classification of Isolated Singularities:** As discussed above, the principal part of the Laurent series allows for the classification of singularities as removable, poles, or essential singularities.
*   **Residue Theorem:** The coefficient $a_{-1}$ in the Laurent series expansion of $f(z)$ about $z_0$ is called the **residue** of $f(z)$ at $z_0$, denoted as $\text{Res}(f, z_0)$ or $\text{Res}_{z=z_0} f(z)$. The Residue Theorem is a powerful tool for computing definite integrals, especially those arising in electrical engineering and physics (e.g., Fourier Transforms, circuit analysis).

**Connection to Course Outcomes:**
*   **CO4:** Understand the series expansion of complex function about a singularity and apply residue theorem to compute real integrals. Laurent series are the prerequisite for understanding and applying the residue theorem.
*   **CO1:** Determine the Fourier transforms of functions and apply them to solve problems arising in engineering. Many techniques for evaluating Fourier transforms involve contour integration and the residue theorem, which are directly linked to Laurent series.

---

### 7. Important Points to Remember

*   **Uniqueness:** For a given annulus and a given center $z_0$, the Laurent series expansion of a function $f(z)$ is unique.
*   **Annulus Requirement:** The domain of validity for a Laurent series is an annulus, which is crucial for dealing with functions that have singularities.
*   **Principal Part:** The terms with negative powers of $(z - z_0)$ constitute the principal part and are key to identifying the type of singularity.
*   **Residue:** The coefficient of $(z - z_0)^{-1}$ is the residue, which is vital for integration using the Residue Theorem.
*   **Geometric Series is Your Friend:** Most practical calculations of Laurent series rely on manipulating the geometric series formula.

---

### 8. Practice Questions and Answers

**Question 1:** Find the Laurent series of $f(z) = \frac{1}{z^2 - 3z + 2}$ about $z_0 = 0$ valid in the annulus $1 < |z| < 2$.

**Answer 1:**
First, perform partial fraction decomposition:
$f(z) = \frac{1}{(z-1)(z-2)} = \frac{A}{z-1} + \frac{B}{z-2}$
$1 = A(z-2) + B(z-1)$
Setting $z=1$: $1 = A(1-2) \implies 1 = -A \implies A = -1$.
Setting $z=2$: $1 = B(2-1) \implies 1 = B$.
So, $f(z) = \frac{-1}{z-1} + \frac{1}{z-2}$.

Now, we need to expand in the annulus $1 < |z| < 2$.

For $\frac{-1}{z-1}$:
$\frac{-1}{z-1} = \frac{1}{1-z}$. Since $|z| > 1$, we write this as:
$\frac{1}{1-z} = \frac{1}{-z(1 - \frac{1}{z})} = -\frac{1}{z} \frac{1}{1 - \frac{1}{z}}$.
Since $|1/z| < 1$, we use the geometric series:
$-\frac{1}{z} \sum_{k=0}^{\infty} \left(\frac{1}{z}\right)^k = -\frac{1}{z} \left(1 + \frac{1}{z} + \frac{1}{z^2} + \dots \right) = -\sum_{k=1}^{\infty} z^{-k}$.

For $\frac{1}{z-2}$:
Since $|z| < 2$, we can write this as:
$\frac{1}{z-2} = \frac{1}{-2(1 - \frac{z}{2})} = -\frac{1}{2} \frac{1}{1 - \frac{z}{2}}$.
Since $|z/2| < 1$, we use the geometric series:
$-\frac{1}{2} \sum_{k=0}^{\infty} \left(\frac{z}{2}\right)^k = -\frac{1}{2} \left(1 + \frac{z}{2} + \frac{z^2}{4} + \dots \right) = -\sum_{k=0}^{\infty} \frac{z^k}{2^{k+1}}$.

Combining the two parts:
$f(z) = -\sum_{k=1}^{\infty} z^{-k} - \sum_{k=0}^{\infty} \frac{z^k}{2^{k+1}}$
$f(z) = - (z^{-1} + z^{-2} + z^{-3} + \dots) - (\frac{1}{2} + \frac{z}{4} + \frac{z^2}{8} + \dots)$

**Question 2:** Find the Laurent series of $f(z) = z^2 e^{1/z}$ about $z_0 = 0$.

**Answer 2:**
We know $e^w = \sum_{k=0}^{\infty} \frac{w^k}{k!}$.
Let $w = 1/z$. For $z \neq 0$:
$e^{1/z} = \sum_{k=0}^{\infty} \frac{(1/z)^k}{k!} = \sum_{k=0}^{\infty} \frac{z^{-k}}{k!} = 1 + z^{-1} + \frac{z^{-2}}{2!} + \frac{z^{-3}}{3!} + \dots$

Now multiply by $z^2$:
$f(z) = z^2 e^{1/z} = z^2 \left( \sum_{k=0}^{\infty} \frac{z^{-k}}{k!} \right) = \sum_{k=0}^{\infty} \frac{z^{2-k}}{k!}$
$f(z) = \frac{z^2}{0!} + \frac{z^{2-1}}{1!} + \frac{z^{2-2}}{2!} + \frac{z^{2-3}}{3!} + \frac{z^{2-4}}{4!} + \dots$
$f(z) = z^2 + z + 1 + \frac{z^{-1}}{3!} + \frac{z^{-2}}{4!} + \dots$
$f(z) = z^2 + z + 1 + \frac{1}{6z} + \frac{1}{24z^2} + \dots$

This series has infinitely many terms with negative powers of $z$, so $z_0 = 0$ is an essential singularity.

**Question 3:** Determine the type of singularity of $f(z) = \frac{\sin z}{z^3}$ at $z_0 = 0$.

**Answer 3:**
We know the Taylor series for $\sin z$ about $z=0$ is:
$\sin z = z - \frac{z^3}{3!} + \frac{z^5}{5!} - \frac{z^7}{7!} + \dots$

Now divide by $z^3$:
$f(z) = \frac{1}{z^3} \left( z - \frac{z^3}{3!} + \frac{z^5}{5!} - \dots \right)$
$f(z) = \frac{z}{z^3} - \frac{z^3}{z^3 3!} + \frac{z^5}{z^3 5!} - \dots$
$f(z) = z^{-2} - \frac{1}{3!} + \frac{z^2}{5!} - \dots$

The Laurent series expansion has the form:
$f(z) = z^{-2} - \frac{1}{6} + \frac{z^2}{120} - \dots$
The principal part is $z^{-2}$, which has a finite number of terms, with the highest negative power being $-2$. Thus, $z_0 = 0$ is a pole of order 2.

---

### 9. Alignment with Course Outcomes

*   **CO4: Understand the series expansion of complex function about a singularity and apply residue theorem to compute real integrals.**
    *   This topic directly addresses the "series expansion of complex function about a singularity" part. Laurent series are the primary tool for this.
    *   The coefficient $a_{-1}$ in the Laurent series is the residue, which is the foundation for applying the residue theorem. Understanding Laurent series is a prerequisite for understanding how residues arise and are computed.

*   **CO1: Determine the Fourier transforms of functions and apply them to solve problems arising in engineering.**
    *   While not directly computing Fourier transforms here, the techniques used in contour integration for Fourier transforms often involve functions with singularities. The ability to expand functions using Laurent series and identify residues is crucial for evaluating such integrals. For instance, inverse Fourier transforms can sometimes be evaluated using the residue theorem.

*   **CO2: Understand the analyticity of complex functions and apply it in conformal mapping.**
    *   Laurent series are valid in annuli where functions are analytic (except at the center). Understanding the regions of analyticity is key to their application. While conformal mapping doesn't directly use Laurent series, the underlying concepts of analytic functions are shared.

*   **CO3: Compute complex integrals using Cauchy's integral theorem and Cauchy's integral formula.**
    *   The integral formulas for Laurent coefficients are direct generalizations of Cauchy's integral formulas. Understanding these connections reinforces the power of Cauchy's theorems and their extensions.

---

This concludes the notes on Laurent Series. Remember to consult the provided textbooks for further details and a more rigorous treatment.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |
