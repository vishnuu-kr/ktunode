---
title: "Removable singularities"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 4: Taylor series and Maclaurin series"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe275"
status: "completed"
scrapedAt: "2026-05-23T17:47:21.422Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 4: Taylor Series and Maclaurin Series

### Topic: Removable Singularities

---

### Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the concept of singularities of complex functions.
*   Identify and classify different types of singularities, specifically focusing on removable singularities.
*   Relate the behavior of a complex function near a removable singularity to its Taylor/Maclaurin series expansion.
*   Determine whether a singularity is removable and, if so, define a continuous extension of the function.

---

### Introduction to Singularities

In complex analysis, a **singularity** of a function $f(z)$ is a point $z_0$ where the function fails to be analytic (i.e., differentiable in a neighborhood around $z_0$). Understanding the nature of these singularities is crucial for analyzing the behavior of complex functions and for applications in various scientific and engineering fields.

**Key Concept:** An **analytic function** is a function that is differentiable at every point in an open disk.

The classification of singularities is a fundamental aspect of complex analysis, and it directly relates to the structure of Laurent series expansions of functions around these points. While this module focuses on Taylor and Maclaurin series (which represent analytic functions), understanding removable singularities is essential for situations where a function *could* be made analytic by defining its value at a single point.

---

### What is a Removable Singularity?

A point $z_0$ is a **removable singularity** of a function $f(z)$ if the function is not analytic at $z_0$, but there exists another function $g(z)$ such that:

1.  $g(z) = f(z)$ for all $z$ in a deleted neighborhood of $z_0$ (i.e., for all $z$ in a neighborhood of $z_0$ except possibly at $z_0$ itself).
2.  $g(z)$ is analytic at $z_0$.

In essence, a removable singularity is a "hole" in the domain of analyticity that can be "filled" by defining or redefining the function's value at that single point, making it analytic in a neighborhood.

---

### Criteria for a Removable Singularity

There are several equivalent criteria to identify a removable singularity:

**1. Limit Exists:**

A point $z_0$ is a removable singularity of $f(z)$ if and only if the limit of $f(z)$ as $z$ approaches $z_0$ exists and is finite.

$$ \lim_{z \to z_0} f(z) = L \quad \text{(where L is a finite complex number)} $$

If this condition holds, we can define a new function $g(z)$ as:

$$ g(z) = \begin{cases} f(z) & \text{if } z \neq z_0 \\ L & \text{if } z = z_0 \end{cases} $$

This function $g(z)$ is then analytic at $z_0$.

**2. Boundedness:**

A point $z_0$ is a removable singularity of $f(z)$ if and only if $f(z)$ is bounded in some deleted neighborhood of $z_0$. That is, there exists a positive number $M$ and a positive radius $\delta$ such that $|f(z)| \leq M$ for all $z$ satisfying $0 < |z - z_0| < \delta$.

**3. Laurent Series Expansion (with a specific property):**

This criterion directly links removable singularities to series expansions, aligning with the module's focus.

A point $z_0$ is a removable singularity of $f(z)$ if and only if its Laurent series expansion around $z_0$ has **no terms with negative powers of $(z - z_0)$**.

Recall the general form of a Laurent series expansion of $f(z)$ around $z_0$:

$$ f(z) = \sum_{n=-\infty}^{\infty} a_n (z - z_0)^n = \dots + \frac{a_{-2}}{(z-z_0)^2} + \frac{a_{-1}}{z-z_0} + a_0 + a_1(z-z_0) + a_2(z-z_0)^2 + \dots $$

*   If $z_0$ is a removable singularity, then $a_n = 0$ for all $n < 0$. The series becomes a Taylor series:
    $$ f(z) = \sum_{n=0}^{\infty} a_n (z - z_0)^n = a_0 + a_1(z-z_0) + a_2(z-z_0)^2 + \dots $$
    This series converges in a neighborhood of $z_0$, and if we define $f(z_0) = a_0$, the function becomes analytic at $z_0$.

**Important Point:** The Taylor and Maclaurin series expansions are *only* valid for functions that are analytic in a neighborhood of the point of expansion. Therefore, they cannot directly represent a function at its singularities. However, the *absence* of negative powers in a Laurent series (which is essentially a generalized Taylor series) is the key to identifying removable singularities.

---

### Relationship with Taylor and Maclaurin Series

If a function $f(z)$ is analytic at $z_0$, its Taylor series expansion around $z_0$ is given by:

$$ f(z) = \sum_{n=0}^{\infty} \frac{f^{(n)}(z_0)}{n!} (z - z_0)^n $$

This series converges in an open disk centered at $z_0$.

A removable singularity at $z_0$ means that the function $f(z)$ *can be made* analytic at $z_0$. If $z_0$ is a removable singularity, and we define $f(z_0) = L$ where $L = \lim_{z \to z_0} f(z)$, then the resulting function is analytic in a neighborhood of $z_0$. This *extended* function can then be represented by a Taylor series around $z_0$:

$$ f_{extended}(z) = \sum_{n=0}^{\infty} \frac{f_{extended}^{(n)}(z_0)}{n!} (z - z_0)^n $$

This Taylor series will be identical to the analytic part of the Laurent series of the original $f(z)$ around $z_0$.

**Crucial Insight:** While Taylor and Maclaurin series are for analytic functions, the concept of removable singularities tells us when a function that *isn't* analytic at a point can be "fixed" to become analytic and then represented by such a series.

---

### Examples

Let's illustrate the concept with examples.

**Example 1:** $f(z) = \frac{\sin z}{z}$

We want to analyze the point $z_0 = 0$.

*   **Check the limit:**
    $$ \lim_{z \to 0} \frac{\sin z}{z} $$
    This is a well-known limit in calculus, and using L'Hôpital's rule or the Maclaurin series of $\sin z$, we find:
    $$ \lim_{z \to 0} \frac{\cos z}{1} = \cos(0) = 1 $$
    Since the limit exists and is finite (1), $z_0 = 0$ is a removable singularity.

*   **Taylor/Maclaurin Series perspective:**
    The Maclaurin series for $\sin z$ is:
    $$ \sin z = z - \frac{z^3}{3!} + \frac{z^5}{5!} - \dots $$
    Therefore, for $z \neq 0$:
    $$ f(z) = \frac{1}{z} \left( z - \frac{z^3}{3!} + \frac{z^5}{5!} - \dots \right) $$
    $$ f(z) = 1 - \frac{z^2}{3!} + \frac{z^4}{5!} - \dots $$
    This is a Taylor series expansion around $z_0 = 0$. It contains only non-negative powers of $z$. We can define $f(0) = 1$ to make the function analytic at $z=0$.

**Example 2:** $f(z) = \frac{z^2 - 1}{z - 1}$

We want to analyze the point $z_0 = 1$.

*   **Check the limit:**
    $$ \lim_{z \to 1} \frac{z^2 - 1}{z - 1} = \lim_{z \to 1} \frac{(z-1)(z+1)}{z - 1} = \lim_{z \to 1} (z+1) = 1 + 1 = 2 $$
    The limit exists and is finite (2). Thus, $z_0 = 1$ is a removable singularity.

*   **Taylor/Maclaurin Series perspective:**
    For $z \neq 1$, we can simplify the function:
    $$ f(z) = z + 1 $$
    This is a simple linear function. If we consider its Taylor series around $z_0 = 1$:
    Let $w = z - 1$, so $z = w + 1$.
    $f(z) = (w+1) + 1 = w + 2 = (z-1) + 2$.
    The Taylor series around $z_0 = 1$ is $2 + 1(z-1)$.
    This series contains only non-negative powers of $(z-1)$. We can define $f(1) = 2$ to make the function analytic at $z=1$.

**Example 3:** $f(z) = z \cos\left(\frac{1}{z}\right)$

We want to analyze the point $z_0 = 0$.

*   **Check the limit:**
    $$ \lim_{z \to 0} z \cos\left(\frac{1}{z}\right) $$
    As $z \to 0$, $\frac{1}{z} \to \infty$. The cosine function oscillates between -1 and 1. So, $\cos(\frac{1}{z})$ does not approach a specific value. For example, if $z = \frac{1}{2\pi n}$, $\cos(\frac{1}{z}) = \cos(2\pi n) = 1$. If $z = \frac{1}{(2n+1)\pi}$, $\cos(\frac{1}{z}) = \cos((2n+1)\pi) = -1$.
    The term $z$ goes to 0, but the term $\cos(\frac{1}{z})$ oscillates unboundedly. Therefore, the limit does not exist.
    In fact, the product $z \cos(\frac{1}{z})$ oscillates between $-\frac{1}{2\pi n}$ and $\frac{1}{2\pi n}$ as $z \to 0$ along sequences like $\frac{1}{2\pi n}$ and $\frac{1}{(2n+1)\pi}$. The limit is not a single value.
    This means $z_0 = 0$ is NOT a removable singularity. (It turns out to be an essential singularity).

---

### Classification of Singularities (Brief Overview)

For context, it's helpful to briefly mention other types of singularities:

*   **Pole:** If the Laurent series of $f(z)$ around $z_0$ has a finite number of terms with negative powers of $(z-z_0)$, i.e.,
    $$ f(z) = \frac{a_{-m}}{(z-z_0)^m} + \dots + \frac{a_{-1}}{z-z_0} + a_0 + a_1(z-z_0) + \dots $$
    where $a_{-m} \neq 0$ and $m > 0$, then $z_0$ is a pole of order $m$.
*   **Essential Singularity:** If the Laurent series of $f(z)$ around $z_0$ has an infinite number of terms with negative powers of $(z-z_0)$, then $z_0$ is an essential singularity. The behavior near an essential singularity is highly complex (e.g., Casorati-Weierstrass theorem states that the function takes on all complex values infinitely often in any neighborhood of an essential singularity, except possibly one value).

**Key Distinction:** Removable singularities are the "nicest" type of singularity because they can be eliminated by redefining the function at that single point.

---

### Important Points to Remember

*   A singularity $z_0$ is **removable** if $\lim_{z \to z_0} f(z)$ exists and is finite.
*   If $z_0$ is a removable singularity, the function can be redefined at $z_0$ to make it analytic in a neighborhood.
*   The Laurent series expansion around a removable singularity $z_0$ contains **only non-negative powers of $(z - z_0)$**.
*   If $f(z)$ has a removable singularity at $z_0$, and $\lim_{z \to z_0} f(z) = L$, then the Taylor series of the extended function $g(z) = \begin{cases} f(z) & z \neq z_0 \\ L & z = z_0 \end{cases}$ around $z_0$ exists.
*   Boundedness in a deleted neighborhood is also a characteristic of removable singularities.

---

### Connection to Course Outcomes

*   **CO4: Understand the series expansion of complex function about a singularity and apply residue theorem to compute real integrals.**
    *   This topic directly addresses the "series expansion of complex function about a singularity" part of CO4. Understanding removable singularities is a prerequisite for understanding the structure of Laurent series, which are fundamental to applying the residue theorem. The absence of negative powers in the Laurent series of a function at a removable singularity means the residue ($a_{-1}$) is zero.

---

### Practice Questions/Exercises

1.  Determine if the singularity at $z=0$ is removable for the function $f(z) = \frac{1 - \cos z}{z^2}$. If it is, find the value that makes the function analytic at $z=0$.
2.  For the function $f(z) = \frac{e^z - 1}{z}$, is $z=0$ a removable singularity? If so, what is the value of the analytic extension at $z=0$?
3.  Does $f(z) = \frac{z}{\sin z}$ have a removable singularity at $z=0$? Justify your answer.
4.  Consider the function $f(z) = z^2 \sin(\frac{1}{z})$. Is the singularity at $z=0$ removable?
5.  Find the Laurent series expansion of $f(z) = \frac{z^2 + 1}{z - 1}$ around $z=1$. Does this indicate a removable singularity?

---

### Answers to Exercises

1.  **For $f(z) = \frac{1 - \cos z}{z^2}$ at $z=0$:**
    The Maclaurin series for $\cos z$ is $1 - \frac{z^2}{2!} + \frac{z^4}{4!} - \dots$.
    So, $1 - \cos z = \frac{z^2}{2!} - \frac{z^4}{4!} + \dots$.
    $$ f(z) = \frac{1}{z^2} \left( \frac{z^2}{2!} - \frac{z^4}{4!} + \dots \right) = \frac{1}{2!} - \frac{z^2}{4!} + \dots $$
    This is a Taylor series in $z$. The limit as $z \to 0$ is $\frac{1}{2!}=\frac{1}{2}$.
    **Answer:** Yes, $z=0$ is a removable singularity. The value that makes the function analytic at $z=0$ is $\frac{1}{2}$.

2.  **For $f(z) = \frac{e^z - 1}{z}$ at $z=0$:**
    The Maclaurin series for $e^z$ is $1 + \frac{z}{1!} + \frac{z^2}{2!} + \dots$.
    So, $e^z - 1 = \frac{z}{1!} + \frac{z^2}{2!} + \dots$.
    $$ f(z) = \frac{1}{z} \left( \frac{z}{1!} + \frac{z^2}{2!} + \dots \right) = 1 + \frac{z}{2!} + \dots $$
    This is a Taylor series in $z$. The limit as $z \to 0$ is $1$.
    **Answer:** Yes, $z=0$ is a removable singularity. The value of the analytic extension at $z=0$ is $1$.

3.  **For $f(z) = \frac{z}{\sin z}$ at $z=0$:**
    We check the limit:
    $$ \lim_{z \to 0} \frac{z}{\sin z} = \lim_{z \to 0} \frac{1}{\frac{\sin z}{z}} = \frac{1}{1} = 1 $$
    Since the limit is finite and exists, $z=0$ is a removable singularity.
    **Answer:** Yes, $z=0$ is a removable singularity.

4.  **For $f(z) = z^2 \sin(\frac{1}{z})$ at $z=0$:**
    We check the limit:
    $$ \lim_{z \to 0} z^2 \sin\left(\frac{1}{z}\right) $$
    As $z \to 0$, $\frac{1}{z} \to \infty$. $\sin(\frac{1}{z})$ oscillates between -1 and 1.
    Let $z = \frac{1}{n\pi}$. Then $z^2 \sin(\frac{1}{z}) = \frac{1}{n^2\pi^2} \sin(n\pi) = 0$.
    Let $z = \frac{\pi/2 + 2n\pi}{1}$. Then $z^2 \sin(\frac{1}{z}) = (\frac{\pi/2 + 2n\pi}{1})^2 \sin(\frac{1}{\pi/2 + 2n\pi}) = (\frac{\pi/2 + 2n\pi}{1})^2 \cdot 1$. As $n \to \infty$, this term goes to infinity.
    Since the limit does not exist (it oscillates between values approaching 0 and values that grow without bound), the singularity at $z=0$ is not removable.
    **Answer:** No, the singularity at $z=0$ is not removable (it is an essential singularity).

5.  **For $f(z) = \frac{z^2 + 1}{z - 1}$ around $z=1$:**
    We can perform polynomial long division or use substitution. Let $w = z-1$, so $z = w+1$.
    $$ f(z) = \frac{(w+1)^2 + 1}{w} = \frac{w^2 + 2w + 1 + 1}{w} = \frac{w^2 + 2w + 2}{w} = w + 2 + \frac{2}{w} $$
    Substituting back $w = z-1$:
    $$ f(z) = (z-1) + 2 + \frac{2}{z-1} $$
    This is the Laurent series expansion around $z=1$.
    $$ f(z) = \frac{2}{z-1} + 2 + (z-1) $$
    The presence of the term $\frac{2}{z-1}$ (a negative power of $(z-1)$) indicates that $z=1$ is **not** a removable singularity. It is a pole of order 1.
    **Answer:** No, $z=1$ is not a removable singularity; it is a pole of order 1.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |


### References

*   **Kreyszig, E. (2016). *Advanced Engineering Mathematics* (10th ed.). John Wiley & Sons.**
    *   Chapter 14 (Complex Analytic Functions) and Chapter 16 (Laplace Transform) often contain discussions on series expansions and properties of analytic functions that are relevant to understanding singularities and their behavior. While specific sections on removable singularities might be integrated into discussions of Taylor and Laurent series, Kreyszig provides a solid foundation in complex analysis.

*   **Zill, D. G., & Shanahan, P. D. (2015). *Complex Analysis* (3rd ed.). Jones & Bartlett Learning.**
    *   This textbook is a primary source for in-depth coverage of complex analysis. Chapters discussing singularities, isolated singularities, classification of singularities (removable, poles, essential), and Laurent series are directly relevant. The criteria for removable singularities based on limits and Laurent series are extensively covered here.

*   **Ramana, B. V. (2023). *Higher Engineering Mathematics* (39th ed.). McGraw-Hill Education.**
    *   Similar to Kreyszig, this text will cover complex functions, their series expansions, and the nature of singularities as part of its broader engineering mathematics curriculum.

*   **Grewal, B. S. (2018). *Higher Engineering Mathematics* (44th ed.). Khanna Publishers.**
    *   Another comprehensive text that will likely include detailed sections on complex functions, power series, and the classification of singularities, providing theoretical and practical examples.

---

This concludes the study notes for Removable Singularities. Remember that understanding these concepts is key to mastering more advanced topics in complex analysis and their applications in electrical and physical sciences.