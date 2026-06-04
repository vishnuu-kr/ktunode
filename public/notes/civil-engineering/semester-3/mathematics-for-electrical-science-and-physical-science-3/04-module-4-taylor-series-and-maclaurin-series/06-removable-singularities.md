---
title: "Removable singularities"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 4: Taylor series and Maclaurin series"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba8106aa"
status: "completed"
scrapedAt: "2026-05-20T18:41:34.811Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 4: Taylor Series and Maclaurin Series

### Topic: Removable Singularities

---

### 1. Learning Outcomes Covered

This section of the notes aims to address the following learning outcomes:

*   **Understand the concept of a singularity in complex analysis.**
*   **Identify and classify different types of singularities, with a specific focus on removable singularities.**
*   **Determine whether a given complex function has a removable singularity at a particular point.**
*   **Understand how to "remove" a singularity by redefining the function.**
*   **Relate the concept of removable singularities to the behavior of functions near points where they might appear undefined.**

---

### 2. Key Concepts and Definitions

#### 2.1. What is a Singularity?

In complex analysis, a **singularity** of a complex function $f(z)$ is a point $z_0$ where the function is not analytic (i.e., not differentiable) in any neighborhood of $z_0$. This means that the function's behavior can be "unusual" or "ill-behaved" at such points.

#### 2.2. Types of Singularities

There are three primary types of isolated singularities:

*   **Removable Singularity:** The function can be redefined at this point to become analytic.
*   **Pole:** The magnitude of the function tends to infinity as $z$ approaches the singularity.
*   **Essential Singularity:** The function exhibits extremely wild behavior near the singularity.

This module focuses specifically on **removable singularities**.

#### 2.3. Removable Singularity

A point $z_0$ is a **removable singularity** of a complex function $f(z)$ if:

1.  $f(z)$ is not analytic at $z_0$.
2.  There exists a function $g(z)$ that is analytic in a neighborhood of $z_0$, including $z_0$ itself, such that $f(z) = g(z)$ for all $z$ in a punctured neighborhood of $z_0$ (i.e., for all $z \neq z_0$ in some disk centered at $z_0$).

In simpler terms, a removable singularity is a point where a function is undefined or not analytic, but if we were to assign a specific value to the function at that point, it would become analytic. This is akin to "filling a hole" in the graph of a real-valued function.

#### 2.4. Properties and Characterizations of Removable Singularities

There are several equivalent ways to characterize a removable singularity $z_0$ for a function $f(z)$:

**Characterization 1: Limit Exists**

A point $z_0$ is a removable singularity of $f(z)$ if and only if the limit of $f(z)$ as $z$ approaches $z_0$ exists and is finite.
$$ \lim_{z \to z_0} f(z) = L $$
where $L$ is a finite complex number.

**Characterization 2: Boundedness**

A point $z_0$ is a removable singularity of $f(z)$ if and only if $f(z)$ is bounded in some punctured neighborhood of $z_0$. That is, there exists a constant $M > 0$ such that $|f(z)| \leq M$ for all $z$ in a punctured disk $|z - z_0| < r$ for some $r > 0$.

**Characterization 3: Laurent Series Expansion**

A point $z_0$ is a removable singularity of $f(z)$ if and only if its Laurent series expansion around $z_0$ has no terms with negative powers of $(z - z_0)$.
The Laurent series of $f(z)$ around $z_0$ is given by:
$$ f(z) = \sum_{n=-\infty}^{\infty} c_n (z - z_0)^n $$
For a removable singularity, $c_n = 0$ for all $n < 0$. The series will only contain non-negative powers of $(z - z_0)$:
$$ f(z) = c_0 + c_1 (z - z_0) + c_2 (z - z_0)^2 + \dots $$
In this case, the value of $c_0$ will be equal to the limit $\lim_{z \to z_0} f(z)$.

---

### 3. Examples

Let's illustrate the concept with some examples.

#### Example 1: The Sine Function

Consider the function $f(z) = \frac{\sin(z)}{z}$.

*   This function is undefined at $z = 0$ because the denominator is zero. Thus, $f(z)$ is not analytic at $z = 0$.
*   Let's investigate the limit as $z \to 0$:
    $$ \lim_{z \to 0} \frac{\sin(z)}{z} $$
    This is a standard limit in calculus, and we know it equals 1.
*   **Conclusion:** Since the limit exists and is finite (equal to 1), $z = 0$ is a removable singularity for $f(z) = \frac{\sin(z)}{z}$.
*   **Removing the singularity:** We can define a new function, $g(z)$, which is analytic at $z=0$ by setting $g(0) = 1$:
    $$ g(z) = \begin{cases} \frac{\sin(z)}{z} & \text{if } z \neq 0 \\ 1 & \text{if } z = 0 \end{cases} $$
    This function $g(z)$ is analytic everywhere, including at $z=0$.

#### Example 2: A Rational Function

Consider the function $f(z) = \frac{z^2 - 4}{z - 2}$.

*   This function is undefined at $z = 2$.
*   We can factor the numerator: $z^2 - 4 = (z - 2)(z + 2)$.
*   So, for $z \neq 2$, we have:
    $$ f(z) = \frac{(z - 2)(z + 2)}{z - 2} = z + 2 $$
*   Now let's check the limit as $z \to 2$:
    $$ \lim_{z \to 2} \frac{z^2 - 4}{z - 2} = \lim_{z \to 2} (z + 2) = 2 + 2 = 4 $$
*   **Conclusion:** Since the limit exists and is finite (equal to 4), $z = 2$ is a removable singularity for $f(z) = \frac{z^2 - 4}{z - 2}$.
*   **Removing the singularity:** We can define $g(z) = z + 2$ for all $z$. This function is analytic everywhere, and $g(z) = f(z)$ for $z \neq 2$.

#### Example 3: A Function with a Pole (for contrast)

Consider the function $f(z) = \frac{1}{z}$.

*   This function is undefined at $z = 0$.
*   Let's check the limit as $z \to 0$:
    $$ \lim_{z \to 0} \frac{1}{z} $$
    As $z$ approaches 0 from different directions, the magnitude of $f(z)$ can become arbitrarily large. For instance, if $z = iy$ and $y \to 0$, then $|f(z)| = |\frac{1}{iy}| = \frac{1}{|y|} \to \infty$.
*   **Conclusion:** Since the limit does not exist (it tends to infinity), $z = 0$ is **not** a removable singularity. It is a pole of order 1.

#### Example 4: Using Laurent Series

Consider the function $f(z) = z \cos(\frac{1}{z})$.

*   This function is undefined at $z=0$.
*   We know the Maclaurin series for $\cos(w)$ is:
    $$ \cos(w) = 1 - \frac{w^2}{2!} + \frac{w^4}{4!} - \dots $$
*   Substituting $w = \frac{1}{z}$:
    $$ \cos\left(\frac{1}{z}\right) = 1 - \frac{(1/z)^2}{2!} + \frac{(1/z)^4}{4!} - \dots = 1 - \frac{1}{2!z^2} + \frac{1}{4!z^4} - \dots $$
*   Now, multiply by $z$:
    $$ f(z) = z \cos\left(\frac{1}{z}\right) = z \left( 1 - \frac{1}{2!z^2} + \frac{1}{4!z^4} - \dots \right) $$
    $$ f(z) = z - \frac{1}{2!z} + \frac{1}{4!z^3} - \dots $$
*   This is the Laurent series expansion of $f(z)$ around $z=0$. Notice that it contains terms with negative powers of $z$ (namely, $\frac{1}{z}$ and $\frac{1}{z^3}$).
*   **Conclusion:** Since the Laurent series has terms with negative powers of $z$, $z=0$ is **not** a removable singularity. It is an essential singularity.

---

### 4. How to Remove a Singularity

If $z_0$ is identified as a removable singularity for $f(z)$, we can "remove" it by defining a new function $g(z)$ such that:

1.  $g(z) = f(z)$ for all $z \neq z_0$ in a neighborhood of $z_0$.
2.  $g(z_0) = \lim_{z \to z_0} f(z)$.

This new function $g(z)$ will be analytic at $z_0$.

---

### 5. Practice Questions/Exercises

**Question 1:**

Determine whether the point $z_0 = 0$ is a removable singularity for each of the following functions. If it is, state the value to which the function should be assigned at $z_0$ to make it analytic.

(a) $f(z) = \frac{\sin(2z)}{z}$
(b) $f(z) = \frac{e^z - 1}{z}$
(c) $f(z) = \frac{1 - \cos(z)}{z^2}$
(d) $f(z) = \frac{z^2}{1 - \cos(z)}$

**Question 2:**

Consider the function $f(z) = \frac{z^3 - 8}{z - 2}$.

(a) Identify any points where $f(z)$ is not analytic.
(b) Determine the type of singularity at $z_0 = 2$.
(c) If it's a removable singularity, what value should $f(2)$ be assigned to make the function analytic at $z_0 = 2$?

**Question 3:**

Does the function $f(z) = z^2 \sin(\frac{1}{z^2})$ have a removable singularity at $z = 0$? Justify your answer using the Laurent series expansion.

---

### 6. Answers to Practice Questions

**Answer 1:**

(a) $f(z) = \frac{\sin(2z)}{z}$
    *   The function is undefined at $z=0$.
    *   $\lim_{z \to 0} \frac{\sin(2z)}{z} = \lim_{z \to 0} \frac{2 \sin(2z)}{2z} = 2 \lim_{w \to 0} \frac{\sin(w)}{w} = 2 \times 1 = 2$.
    *   Since the limit exists and is finite, $z=0$ is a **removable singularity**. The function should be assigned the value **2** at $z=0$.

(b) $f(z) = \frac{e^z - 1}{z}$
    *   The function is undefined at $z=0$.
    *   The Maclaurin series for $e^z$ is $1 + z + \frac{z^2}{2!} + \frac{z^3}{3!} + \dots$.
    *   So, $e^z - 1 = z + \frac{z^2}{2!} + \frac{z^3}{3!} + \dots$.
    *   $f(z) = \frac{z + \frac{z^2}{2!} + \frac{z^3}{3!} + \dots}{z} = 1 + \frac{z}{2!} + \frac{z^2}{3!} + \dots$.
    *   $\lim_{z \to 0} f(z) = 1$.
    *   Since the limit exists and is finite, $z=0$ is a **removable singularity**. The function should be assigned the value **1** at $z=0$.

(c) $f(z) = \frac{1 - \cos(z)}{z^2}$
    *   The function is undefined at $z=0$.
    *   The Maclaurin series for $\cos(z)$ is $1 - \frac{z^2}{2!} + \frac{z^4}{4!} - \dots$.
    *   So, $1 - \cos(z) = 1 - (1 - \frac{z^2}{2!} + \frac{z^4}{4!} - \dots) = \frac{z^2}{2!} - \frac{z^4}{4!} + \dots$.
    *   $f(z) = \frac{\frac{z^2}{2!} - \frac{z^4}{4!} + \dots}{z^2} = \frac{1}{2!} - \frac{z^2}{4!} + \dots$.
    *   $\lim_{z \to 0} f(z) = \frac{1}{2}$.
    *   Since the limit exists and is finite, $z=0$ is a **removable singularity**. The function should be assigned the value **1/2** at $z=0$.

(d) $f(z) = \frac{z^2}{1 - \cos(z)}$
    *   The function is undefined at $z=0$.
    *   Using the expansion from part (c), $1 - \cos(z) = \frac{z^2}{2!} - \frac{z^4}{4!} + \dots$.
    *   $f(z) = \frac{z^2}{\frac{z^2}{2!} - \frac{z^4}{4!} + \dots} = \frac{1}{\frac{1}{2!} - \frac{z^2}{4!} + \dots}$.
    *   $\lim_{z \to 0} f(z) = \frac{1}{\frac{1}{2!} - 0 + \dots} = \frac{1}{1/2} = 2$.
    *   Since the limit exists and is finite, $z=0$ is a **removable singularity**. The function should be assigned the value **2** at $z=0$.

**Answer 2:**

(a) The function $f(z) = \frac{z^3 - 8}{z - 2}$ is not analytic at $z_0 = 2$ because the denominator is zero at this point.

(b) We can factor the numerator: $z^3 - 8 = (z - 2)(z^2 + 2z + 4)$.
    For $z \neq 2$, $f(z) = \frac{(z - 2)(z^2 + 2z + 4)}{z - 2} = z^2 + 2z + 4$.
    Now, let's evaluate the limit as $z \to 2$:
    $\lim_{z \to 2} f(z) = \lim_{z \to 2} (z^2 + 2z + 4) = 2^2 + 2(2) + 4 = 4 + 4 + 4 = 12$.
    Since the limit exists and is finite, $z_0 = 2$ is a **removable singularity**.

(c) To make the function analytic at $z_0 = 2$, we should assign the value of the limit to $f(2)$. Therefore, $f(2)$ should be assigned the value **12**.

**Answer 3:**

For $f(z) = z^2 \sin(\frac{1}{z^2})$, the singularity is at $z=0$.
We know the Maclaurin series for $\sin(w)$ is $w - \frac{w^3}{3!} + \frac{w^5}{5!} - \dots$.
Let $w = \frac{1}{z^2}$. Then, for $z \neq 0$:
$$ \sin\left(\frac{1}{z^2}\right) = \frac{1}{z^2} - \frac{(1/z^2)^3}{3!} + \frac{(1/z^2)^5}{5!} - \dots $$
$$ \sin\left(\frac{1}{z^2}\right) = \frac{1}{z^2} - \frac{1}{3!z^6} + \frac{1}{5!z^{10}} - \dots $$
Now, multiply by $z^2$:
$$ f(z) = z^2 \sin\left(\frac{1}{z^2}\right) = z^2 \left( \frac{1}{z^2} - \frac{1}{3!z^6} + \frac{1}{5!z^{10}} - \dots \right) $$
$$ f(z) = 1 - \frac{1}{3!z^4} + \frac{1}{5!z^8} - \dots $$
This is the Laurent series expansion of $f(z)$ around $z=0$. It contains terms with negative powers of $z$ (specifically, $\frac{1}{z^4}$ and $\frac{1}{z^8}$).
Therefore, $z = 0$ is **not** a removable singularity. It is an essential singularity.

---

### 7. Important Points to Remember

*   A singularity is a point where a complex function is not analytic.
*   A **removable singularity** $z_0$ is a point where the function is not analytic, but the **limit $\lim_{z \to z_0} f(z)$ exists and is finite.**
*   Alternatively, a singularity $z_0$ is removable if the function is **bounded** in a punctured neighborhood of $z_0$.
*   In terms of the Laurent series expansion around $z_0$, a singularity is removable if there are **no terms with negative powers of $(z - z_0)$**.
*   If $z_0$ is a removable singularity, we can define a new function $g(z)$ that is analytic at $z_0$ by setting $g(z_0) = \lim_{z \to z_0} f(z)$.
*   Distinguish removable singularities from poles (where the magnitude goes to infinity) and essential singularities (where the behavior is erratic). The presence of negative powers in the Laurent series is key to identifying non-removable singularities.

---
