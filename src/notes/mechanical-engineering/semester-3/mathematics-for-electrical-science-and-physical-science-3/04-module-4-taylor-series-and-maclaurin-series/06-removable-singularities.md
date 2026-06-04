---
title: "Removable singularities"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 4: Taylor series and Maclaurin series"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462cb8"
status: "completed"
scrapedAt: "2026-05-20T17:50:55.701Z"
---
## MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

### Module 4: Taylor Series and Maclaurin Series

#### Topic: Removable Singularities

**Learning Outcomes:**

*   **Understand the concept of a singularity of a complex function.**
*   **Classify singularities of complex functions.**
*   **Identify and analyze removable singularities.**
*   **Determine the conditions for a singularity to be removable.**
*   **Apply the concept of removable singularities to simplify complex functions.**

---

### 1. Introduction to Singularities of Complex Functions

A singularity of a complex function $f(z)$ is a point $z_0$ at which the function is not analytic. In simpler terms, it's a point where the function "misbehaves" in some way, such as being undefined, having an infinite value, or not being differentiable.

**Key Concept:** Analyticity is a fundamental concept in complex analysis. A function $f(z)$ is analytic in a region if it is differentiable at every point in that region. Singularities are the points where this analyticity breaks down.

**Reference:**

*   **Kreyszig (10th ed.):** Chapter 12, "Complex Integration," discusses analyticity and introduces singularities in the context of complex functions.
*   **Zill & Shanahan (3rd ed.):** Chapter 4, "Complex Integration," provides a thorough treatment of analyticity, continuity, and the initial introduction to singularities.

### 2. Classification of Isolated Singularities

When we talk about singularities, we often focus on **isolated singularities**. An isolated singularity $z_0$ of $f(z)$ is a point $z_0$ such that $f(z)$ is analytic in some punctured disk $0 < |z - z_0| < R$ for some $R > 0$, but not analytic at $z_0$.

There are three main types of isolated singularities:

*   **Removable Singularities**
*   **Poles**
*   **Essential Singularities**

**Reference:**

*   **Kreyszig (10th ed.):** Section 12.4, "The Residue Theorem," often implicitly deals with different types of singularities when discussing residue calculations.
*   **Zill & Shanahan (3rd ed.):** Chapter 6, "Series and Approximations," delves into the Laurent series expansion, which is crucial for classifying singularities.

### 3. Removable Singularities

A point $z_0$ is a **removable singularity** of a function $f(z)$ if the function can be made analytic at $z_0$ by assigning a suitable value to $f(z_0)$. More formally, a singularity $z_0$ is removable if the limit of $f(z)$ as $z$ approaches $z_0$ exists and is finite.

**Definition:** A point $z_0$ is a removable singularity of $f(z)$ if
$$ \lim_{z \to z_0} f(z) = L $$
where $L$ is a finite complex number.

**Connection to Laurent Series:** The Laurent series expansion of $f(z)$ around an isolated singularity $z_0$ is given by:
$$ f(z) = \sum_{n=-\infty}^{\infty} a_n (z - z_0)^n $$
where the sum is over all integers $n$.

For a removable singularity at $z_0$, the Laurent series contains **no negative powers of $(z - z_0)$**. That is, $a_n = 0$ for all $n < 0$.

**Theorem:** If $z_0$ is an isolated singularity of $f(z)$, then $z_0$ is a removable singularity if and only if $f(z)$ is bounded in some punctured disk $0 < |z - z_0| < R$.

**Theorem (Equivalently):** If $z_0$ is an isolated singularity of $f(z)$, then $z_0$ is a removable singularity if and only if the Laurent series expansion of $f(z)$ about $z_0$ has $a_n = 0$ for all $n < 0$.

**How to identify a removable singularity:**

1.  **Limit Test:** Calculate $\lim_{z \to z_0} f(z)$. If the limit exists and is finite, then $z_0$ is a removable singularity.
2.  **Laurent Series Test:** If you can obtain the Laurent series of $f(z)$ around $z_0$, check if there are any terms with negative powers of $(z - z_0)$. If there are none, it's a removable singularity.
3.  **Algebraic Simplification:** Sometimes, if $f(z)$ is a rational function or can be simplified algebraically, you can cancel out terms that cause the singularity.

**Reference:**

*   **Kreyszig (10th ed.):** Section 12.4, "The Residue Theorem," touches upon the behavior of functions around singularities, which is relevant. Section 15.3, "Conformal Mapping" might indirectly discuss simplification of functions.
*   **Zill & Shanahan (3rd ed.):** Chapter 6, "Series and Approximations," provides the core understanding of Laurent series and singularity classification. Section 6.5, "Classification of Singularities," is particularly relevant.
*   **Ramana (39th ed.):** Chapter 27, "Complex Differentiation," and Chapter 28, "Complex Integration," will cover analyticity and singularities.
*   **Grewal (44th ed.):** Chapter 16, "Complex Functions," and Chapter 17, "Complex Integration," will provide foundational knowledge on singularities.

### 4. Examples of Removable Singularities

Let's illustrate with some examples:

**Example 1:** $f(z) = \frac{\sin z}{z}$

*   The function is not defined at $z_0 = 0$.
*   Let's check the limit as $z \to 0$:
    $$ \lim_{z \to 0} \frac{\sin z}{z} $$
    This is a standard limit in calculus, and we know $\lim_{x \to 0} \frac{\sin x}{x} = 1$. Using Taylor series for $\sin z = z - \frac{z^3}{3!} + \frac{z^5}{5!} - \dots$, we get:
    $$ \frac{\sin z}{z} = \frac{z - \frac{z^3}{3!} + \frac{z^5}{5!} - \dots}{z} = 1 - \frac{z^2}{3!} + \frac{z^4}{5!} - \dots $$
    So, $\lim_{z \to 0} \frac{\sin z}{z} = 1$.
*   Since the limit is finite (1), $z_0 = 0$ is a **removable singularity**. We can define $f(0) = 1$ to make the function analytic at $z=0$.

**Example 2:** $f(z) = \frac{z^2 - 4}{z - 2}$

*   The function is not defined at $z_0 = 2$.
*   Let's simplify algebraically:
    $$ f(z) = \frac{(z - 2)(z + 2)}{z - 2} $$
    For $z \neq 2$, $f(z) = z + 2$.
*   Now, let's find the limit:
    $$ \lim_{z \to 2} \frac{z^2 - 4}{z - 2} = \lim_{z \to 2} (z + 2) = 2 + 2 = 4 $$
*   The limit is finite (4), so $z_0 = 2$ is a **removable singularity**. We can define $f(2) = 4$.

**Example 3:** $f(z) = \frac{1 - \cos z}{z^2}$

*   The function is not defined at $z_0 = 0$.
*   Using the Taylor series for $\cos z = 1 - \frac{z^2}{2!} + \frac{z^4}{4!} - \dots$:
    $$ 1 - \cos z = 1 - (1 - \frac{z^2}{2!} + \frac{z^4}{4!} - \dots) = \frac{z^2}{2!} - \frac{z^4}{4!} + \dots $$
    $$ f(z) = \frac{\frac{z^2}{2!} - \frac{z^4}{4!} + \dots}{z^2} = \frac{1}{2!} - \frac{z^2}{4!} + \dots $$
*   The limit as $z \to 0$ is $\frac{1}{2!}=\frac{1}{2}$.
*   Since the limit is finite ($\frac{1}{2}$), $z_0 = 0$ is a **removable singularity**.

**Example 4:** $f(z) = z \sin(\frac{1}{z})$

*   The function is not defined at $z_0 = 0$.
*   Let's use the series for $\sin w = w - \frac{w^3}{3!} + \dots$ with $w = \frac{1}{z}$:
    $$ \sin(\frac{1}{z}) = \frac{1}{z} - \frac{1}{3!z^3} + \frac{1}{5!z^5} - \dots $$
    $$ f(z) = z \left( \frac{1}{z} - \frac{1}{3!z^3} + \frac{1}{5!z^5} - \dots \right) = 1 - \frac{1}{3!z^2} + \frac{1}{5!z^4} - \dots $$
*   In this Laurent series expansion around $z_0=0$, we have terms with negative powers of $z$ (e.g., $-\frac{1}{3!z^2}$). This indicates it's not a removable singularity.
*   Let's check the limit: $\lim_{z \to 0} z \sin(\frac{1}{z})$. As $z \to 0$, $\frac{1}{z} \to \infty$, and $\sin(\frac{1}{z})$ oscillates between -1 and 1. The product $z \sin(\frac{1}{z})$ goes to 0. This seems contradictory!

    **Correction:** The function $z \sin(\frac{1}{z})$ *does* have a removable singularity at $z=0$. The Laurent series derived above is valid for $z \neq 0$. The limit $\lim_{z \to 0} z \sin(\frac{1}{z}) = 0$ because $|\sin(\frac{1}{z})| \leq 1$, so $|z \sin(\frac{1}{z})| \leq |z|$, and by the Squeeze Theorem, the limit is 0.

    **Important Point:** The Laurent series representation of a function is unique for a given annulus. If a function has a removable singularity at $z_0$, its Laurent series around $z_0$ will have no negative powers of $(z-z_0)$.

**Example 5:** $f(z) = \frac{e^z - 1}{z}$

*   The function is not defined at $z_0 = 0$.
*   Taylor series for $e^z = 1 + z + \frac{z^2}{2!} + \frac{z^3}{3!} + \dots$
    $$ f(z) = \frac{(1 + z + \frac{z^2}{2!} + \frac{z^3}{3!} + \dots) - 1}{z} = \frac{z + \frac{z^2}{2!} + \frac{z^3}{3!} + \dots}{z} $$
    $$ f(z) = 1 + \frac{z}{2!} + \frac{z^2}{3!} + \dots $$
*   $\lim_{z \to 0} f(z) = 1$.
*   $z_0 = 0$ is a **removable singularity**.

### 5. Removable Singularities and Course Outcomes

This topic directly relates to **Course Outcome 4 (CO4)**: "Understand the series expansion of complex function about a singularity and apply residue theorem to compute real integrals."

*   **Series Expansion:** Identifying a removable singularity is a direct consequence of analyzing the series expansion (specifically, the Laurent series) of a complex function around a point. If the negative power terms are absent, the singularity is removable.
*   **Simplification for Residue Theorem:** While the residue theorem is primarily used for poles and essential singularities (where the residue might be non-zero), understanding removable singularities is crucial for a complete picture of singularity classification. A removable singularity contributes a residue of **zero**. If a function can be simplified by removing a removable singularity, the resulting function is often easier to analyze for other singularities.

**Knowledge Level (K3):** Understanding how to identify removable singularities based on limits or series expansions falls under applying knowledge to solve problems. For instance, in a problem asking to analyze the singularities of a function, you would need to apply these techniques.

### 6. Important Points to Remember

*   A singularity $z_0$ is removable if $\lim_{z \to z_0} f(z)$ exists and is finite.
*   In the Laurent series expansion of $f(z)$ around $z_0$, a removable singularity means there are no terms with negative powers of $(z - z_0)$.
*   A function with a removable singularity at $z_0$ can be made analytic at $z_0$ by defining $f(z_0) = \lim_{z \to z_0} f(z)$.
*   Removable singularities are often the "least severe" type of singularity.
*   The residue at a removable singularity is always zero.

### 7. Practice Questions and Exercises

**Question 1:**
Determine whether the singularity at $z=0$ for the function $f(z) = \frac{z(e^z - 1)}{z^2 + z^3}$ is removable.

**Solution:**
The function is not defined at $z=0$. We can simplify the denominator: $z^2 + z^3 = z^2(1+z)$.
So, $f(z) = \frac{z(e^z - 1)}{z^2(1+z)} = \frac{e^z - 1}{z(1+z)}$ for $z \neq 0$.

Now consider the limit as $z \to 0$:
We know $\lim_{z \to 0} \frac{e^z - 1}{z} = 1$.
So, $\lim_{z \to 0} f(z) = \lim_{z \to 0} \left(\frac{e^z - 1}{z}\right) \cdot \left(\frac{1}{1+z}\right)$
$= 1 \cdot \frac{1}{1+0} = 1$.

Since the limit is finite (1), the singularity at $z=0$ is **removable**.

**Question 2:**
Classify the singularity of $f(z) = \frac{\cos z - 1}{z^3}$ at $z=0$.

**Solution:**
The function is not defined at $z=0$.
We use the Taylor series for $\cos z$ around $z=0$:
$\cos z = 1 - \frac{z^2}{2!} + \frac{z^4}{4!} - \frac{z^6}{6!} + \dots$

So, $\cos z - 1 = -\frac{z^2}{2!} + \frac{z^4}{4!} - \frac{z^6}{6!} + \dots$

Now, divide by $z^3$:
$f(z) = \frac{-\frac{z^2}{2!} + \frac{z^4}{4!} - \frac{z^6}{6!} + \dots}{z^3} = -\frac{1}{2!z} + \frac{z}{4!} - \frac{z^3}{6!} + \dots$

The Laurent series expansion contains a term with a negative power of $z$ ($-\frac{1}{2!z}$). This indicates that $z=0$ is **not a removable singularity**. In fact, it is a simple pole (highest negative power is -1).

**Question 3:**
Is the singularity at $z=1$ for $f(z) = \frac{1 - e^{z-1}}{z-1}$ removable?

**Solution:**
Let $w = z-1$. As $z \to 1$, $w \to 0$.
The function becomes $g(w) = \frac{1 - e^w}{w}$.
We know that $\lim_{w \to 0} \frac{e^w - 1}{w} = 1$.
Therefore, $\lim_{w \to 0} \frac{1 - e^w}{w} = -1$.

Since the limit is finite (-1), the singularity at $z=1$ is **removable**.

**Question 4:**
Find the Laurent series expansion of $f(z) = \frac{z}{z-1}$ around $z=1$ and classify the singularity.

**Solution:**
Let $w = z-1$. Then $z = w+1$.
$f(z) = \frac{w+1}{w} = \frac{w}{w} + \frac{1}{w} = 1 + \frac{1}{w}$
Substituting back $w = z-1$:
$f(z) = 1 + \frac{1}{z-1}$

This is the Laurent series expansion of $f(z)$ around $z=1$.
The series has only one term with a negative power of $(z-1)$, which is $\frac{1}{z-1}$ (where the power is -1).
This means that $z=1$ is a **pole of order 1 (a simple pole)**, and it is **not a removable singularity**.

**Question 5:**
Consider the function $f(z) = \frac{\sin(\pi z)}{z-1}$. Is the singularity at $z=1$ removable?

**Solution:**
Let $w = z-1$. As $z \to 1$, $w \to 0$. Then $z = w+1$.
$f(z) = \frac{\sin(\pi (w+1))}{w}$
Using the identity $\sin(\pi + \theta) = -\sin(\theta)$:
$\sin(\pi w + \pi) = -\sin(\pi w)$

So, $f(z) = \frac{-\sin(\pi w)}{w}$.
Now, we find the limit as $w \to 0$:
$\lim_{w \to 0} \frac{-\sin(\pi w)}{w} = -\pi \lim_{w \to 0} \frac{\sin(\pi w)}{\pi w}$
Let $x = \pi w$. As $w \to 0$, $x \to 0$.
$= -\pi \lim_{x \to 0} \frac{\sin x}{x} = -\pi \cdot 1 = -\pi$.

Since the limit is finite ($-\pi$), the singularity at $z=1$ is **removable**.

---
This concludes the notes on removable singularities. Remember to practice identifying them using both limit and series expansion methods. This understanding is fundamental for more advanced topics in complex analysis.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
