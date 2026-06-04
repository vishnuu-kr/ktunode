---
title: "Laurent series (without proof)"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 4: Taylor series and Maclaurin series"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe271"
status: "completed"
scrapedAt: "2026-05-23T17:47:17.588Z"
---
# Mathematics for Electrical Science and Physical Science – 3

## Module 4: Taylor Series and Maclaurin Series

### Topic: Laurent Series (Without Proof)

**Course Outcomes Addressed:**

*   **CO4: Understand the series expansion of complex function about a singularity and apply residue theorem to compute real integrals. (Knowledge Level: K3)**

**Learning Outcomes for this Topic:**

*   Understand the concept of a Laurent series expansion of a complex function.
*   Identify the annulus of convergence for a Laurent series.
*   Distinguish between different types of singularities based on the Laurent series expansion.
*   Apply Laurent series to problems involving complex analysis relevant to electrical and physical sciences.

---

### 1. Introduction to Laurent Series

While Taylor series are excellent for representing analytic functions within a disk, they fail to represent functions at or around their singularities. Laurent series extend this representation to functions that may have singularities within a given region. They are crucial for understanding the behavior of functions near poles and essential for applying the Residue Theorem (which is a direct application of Laurent series, as per CO4).

**Key Concept:** A Laurent series represents a function $f(z)$ in an **annulus** (a ring-shaped region) centered at a point $z_0$. This annulus can encompass singularities of the function.

---

### 2. The Laurent Series Formula (Without Proof)

Let $f(z)$ be a function that is analytic in the annulus $A$ defined by $R_1 < |z - z_0| < R_2$, where $0 \le R_1 < R_2 \le \infty$. Then $f(z)$ can be represented by the Laurent series:

$$f(z) = \sum_{n=-\infty}^{\infty} c_n (z - z_0)^n$$

where the coefficients $c_n$ are given by the complex contour integrals:

$$c_n = \frac{1}{2\pi i} \oint_C \frac{f(\zeta)}{(\zeta - z_0)^{n+1}} d\zeta$$

Here, $C$ is any simple closed contour within the annulus $A$ that encircles $z_0$ in the positive direction.

**Important Note:** The Laurent series is often written as the sum of two parts:

$$f(z) = \sum_{n=0}^{\infty} a_n (z - z_0)^n + \sum_{n=1}^{\infty} b_n (z - z_0)^{-n}$$

where:
*   The first part, $\sum_{n=0}^{\infty} a_n (z - z_0)^n$, is the **analytic part** or the **Taylor series part**. It consists of non-negative powers of $(z-z_0)$.
*   The second part, $\sum_{n=1}^{\infty} b_n (z - z_0)^{-n}$, is the **principal part**. It consists of negative powers of $(z-z_0)$.

From the formula for $c_n$:
*   $a_n = c_n$ for $n \ge 0$
*   $b_n = c_{-n}$ for $n \ge 1$ (i.e., $b_1 = c_{-1}, b_2 = c_{-2}$, etc.)

---

### 3. Annulus of Convergence

The annulus of convergence for a Laurent series of $f(z)$ about $z_0$ is the region $R_1 < |z - z_0| < R_2$ where $f(z)$ is analytic.

*   $R_1$ is the radius of the inner circle, which passes through or contains singularities of $f(z)$.
*   $R_2$ is the radius of the outer circle, which passes through or contains singularities of $f(z)$.

**Key Point:** If $R_1 = 0$, the annulus is a punctured disk ($0 < |z - z_0| < R_2$). If $R_2 = \infty$, it's an exterior region ($R_1 < |z - z_0| < \infty$).

---

### 4. Types of Singularities and Their Laurent Series

The nature of the singularity of $f(z)$ at $z_0$ is determined by the principal part of its Laurent series expansion.

*   **Removable Singularity:** If the principal part contains only a finite number of terms, and the highest negative power is $(z-z_0)^{-m}$ where $m<0$ (i.e., the principal part is zero), then $z_0$ is a removable singularity. The series looks like a Taylor series. $f(z)$ can be made analytic at $z_0$ by defining $f(z_0)$ appropriately (equal to $c_0$). In this case, $c_n = 0$ for all $n < 0$.

*   **Pole:** If the principal part contains a finite, non-zero number of terms, and the highest negative power is $(z-z_0)^{-m}$ for some positive integer $m$, then $z_0$ is a pole of order $m$. In this case, $c_n = 0$ for all $n < -m$. The coefficient $c_{-1}$ is particularly important for residue calculations.

*   **Essential Singularity:** If the principal part contains an infinite number of terms (i.e., infinitely many $b_n$ are non-zero), then $z_0$ is an essential singularity. The behavior of $f(z)$ near an essential singularity is very complex (Picard's Great Theorem states that $f(z)$ takes on every complex value infinitely often in any neighborhood of an essential singularity, except possibly for one value).

---

### 5. Practical Calculation of Laurent Series

Directly using the integral formula for coefficients can be cumbersome. More often, Laurent series are found by using known series (like the geometric series) and algebraic manipulation.

**Recall Geometric Series:**
$$\frac{1}{1-w} = \sum_{n=0}^{\infty} w^n, \quad |w| < 1$$
$$\frac{1}{w} = \sum_{n=0}^{\infty} (1-w)^n, \quad |1-w| < 1$$

**General Strategy:**
1.  Identify the center of the series, $z_0$.
2.  Determine the annulus of convergence. This often involves finding the singularities of $f(z)$ and considering the regions between circles centered at $z_0$ that pass through these singularities.
3.  Rewrite $f(z)$ in terms of $(z - z_0)$.
4.  Use algebraic manipulation and known series expansions (especially the geometric series) to express $f(z)$ as a sum of powers of $(z - z_0)$.

---

### 6. Examples

**Example 1: Laurent Series of $f(z) = \frac{1}{z(z-1)}$ about $z_0 = 0$.**

This function has singularities at $z=0$ and $z=1$. We need to find the Laurent series in different annuli centered at $z_0=0$.

**(a) For $0 < |z| < 1$**

Here, $z_0 = 0$. We want to express $f(z)$ in powers of $z$.
$$f(z) = \frac{1}{z(z-1)}$$
Using partial fractions:
$$\frac{1}{z(z-1)} = \frac{A}{z} + \frac{B}{z-1}$$
$$1 = A(z-1) + Bz$$
Setting $z=1 \implies 1 = B$. Setting $z=0 \implies 1 = -A \implies A=-1$.
So, $f(z) = -\frac{1}{z} + \frac{1}{z-1}$.

Now, expand $\frac{1}{z-1}$ using the geometric series. We want powers of $z$ and the annulus is $0 < |z| < 1$.
$$\frac{1}{z-1} = \frac{1}{-(1-z)} = -\frac{1}{1-z}$$
Since $|z| < 1$, we can use the geometric series formula $\frac{1}{1-w} = \sum_{n=0}^{\infty} w^n$ with $w=z$:
$$\frac{1}{z-1} = -\sum_{n=0}^{\infty} z^n$$

Substitute this back into $f(z)$:
$$f(z) = -\frac{1}{z} - \sum_{n=0}^{\infty} z^n$$
$$f(z) = -\frac{1}{z} - (1 + z + z^2 + z^3 + \dots)$$
$$f(z) = -\frac{1}{z} - 1 - z - z^2 - z^3 - \dots$$

This is the Laurent series for $f(z)$ in the annulus $0 < |z| < 1$.
The coefficients are: $c_{-1} = -1$, $c_0 = -1$, $c_1 = -1$, $c_2 = -1$, and $c_n = 0$ for $n \ge 2$ and $n < -1$.
The principal part is $-\frac{1}{z}$. Since it has a finite number of terms (just one), $z=0$ is a pole of order 1.

**(b) For $|z| > 1$**

Here, $z_0 = 0$. The annulus is $|z| > 1$.
Again, $f(z) = -\frac{1}{z} + \frac{1}{z-1}$.
For $\frac{1}{z-1}$, we want to expand in powers of $z$ for $|z| > 1$.
$$\frac{1}{z-1} = \frac{1}{z(1 - 1/z)}$$
Since $|z| > 1$, we have $|1/z| < 1$. Use the geometric series with $w = 1/z$:
$$\frac{1}{z-1} = \frac{1}{z} \sum_{n=0}^{\infty} \left(\frac{1}{z}\right)^n = \frac{1}{z} \left(1 + \frac{1}{z} + \frac{1}{z^2} + \dots \right)$$
$$\frac{1}{z-1} = \frac{1}{z} + \frac{1}{z^2} + \frac{1}{z^3} + \dots = \sum_{n=1}^{\infty} \frac{1}{z^n} = \sum_{n=1}^{\infty} z^{-n}$$

Substitute this back into $f(z)$:
$$f(z) = -\frac{1}{z} + \sum_{n=1}^{\infty} z^{-n}$$
$$f(z) = -\frac{1}{z} + \left(\frac{1}{z} + \frac{1}{z^2} + \frac{1}{z^3} + \dots \right)$$
$$f(z) = \frac{1}{z^2} + \frac{1}{z^3} + \frac{1}{z^4} + \dots$$

This is the Laurent series for $f(z)$ in the annulus $|z| > 1$.
The coefficients are: $c_{-1} = 0$, $c_{-2} = 1$, $c_{-3} = 1$, and $c_n = 0$ for $n \ge 0$ and $n < -2$.
The principal part is zero. This means $z=0$ is a removable singularity in this region, but this is not correct as $z=0$ is clearly a singularity of the original function. The issue here is that the annulus $|z| > 1$ does not contain the singularity at $z=1$. For the function $f(z) = \frac{1}{z(z-1)}$, the singularity at $z=0$ is a pole of order 1. The Laurent series we found for $|z| > 1$ is actually for the function $g(z) = \frac{1}{z-1}$ within the annulus $|z|>1$. This highlights the importance of the annulus of convergence.

Let's reconsider $f(z) = -\frac{1}{z} + \frac{1}{z-1}$ for $|z|>1$.
The term $-\frac{1}{z}$ is already in negative powers of $z$.
The term $\frac{1}{z-1} = \sum_{n=1}^{\infty} z^{-n}$ as derived above.
So, $f(z) = -\frac{1}{z} + \sum_{n=1}^{\infty} z^{-n} = \frac{1}{z^2} + \frac{1}{z^3} + \dots$.

**Crucial Point:** The Laurent series expansion of a function in an annulus is unique. When we expand $f(z) = \frac{1}{z(z-1)}$ about $z_0=0$, the singularity at $z=1$ is outside the disk $|z|<1$.
In the annulus $0 < |z| < 1$, the term $\frac{1}{z-1}$ is expanded as $-\sum_{n=0}^{\infty} z^n$.
In the annulus $|z| > 1$, the term $\frac{1}{z-1}$ is expanded as $\sum_{n=1}^{\infty} z^{-n}$.

Let's properly derive the Laurent series for $f(z) = \frac{1}{z(z-1)}$ about $z_0=0$ in the annulus $|z| > 1$.
The singularity at $z=1$ is INSIDE the region $|z| > 1$. This implies we cannot expand $\frac{1}{z-1}$ in powers of $z$ in the usual way.
We should consider the annuli based on the distances to singularities.
Singularities at $z=0$ and $z=1$. Center $z_0=0$.
*   Annulus 1: $0 < |z| < 1$ (distance to $z=1$ is 1)
*   Annulus 2: $|z| > 1$ (distance to $z=0$ is 0, distance to $z=1$ is $\infty$). This region contains no singularities.

Let's re-evaluate $f(z) = -\frac{1}{z} + \frac{1}{z-1}$ for $|z| > 1$.
The singularity $z=0$ is outside this annulus. The singularity $z=1$ is INSIDE this annulus.
We need to be careful. The formula for Laurent series holds for an annulus where $f(z)$ is analytic.
The singularities are at $z=0$ and $z=1$.
The center is $z_0=0$.
The regions where $f(z)$ is analytic are:
1.  $0 < |z| < 1$
2.  $|z| > 1$

Let's re-examine Example 1(b) for $|z| > 1$.
$f(z) = \frac{1}{z(z-1)}$. $z_0=0$.
We need to expand $\frac{1}{z-1}$ in powers of $z$ such that $|z|>1$.
The previous expansion $\frac{1}{z-1} = \frac{1}{z(1-1/z)} = \frac{1}{z}\sum_{n=0}^{\infty} (1/z)^n = \sum_{n=1}^{\infty} z^{-n}$ is correct for $|z|>1$.
So, $f(z) = \frac{1}{z} \left( \frac{1}{z-1} \right)$.
We use the partial fraction decomposition: $f(z) = -\frac{1}{z} + \frac{1}{z-1}$.
For $|z| > 1$:
The term $-\frac{1}{z}$ is already a negative power of $z$.
The term $\frac{1}{z-1}$: Since $|z|>1$, we have $|1/z| < 1$.
$\frac{1}{z-1} = \frac{1}{z(1-1/z)} = \frac{1}{z} \sum_{n=0}^{\infty} (1/z)^n = \frac{1}{z} (1 + 1/z + 1/z^2 + \dots) = \frac{1}{z} + \frac{1}{z^2} + \frac{1}{z^3} + \dots$
So, $f(z) = -\frac{1}{z} + (\frac{1}{z} + \frac{1}{z^2} + \frac{1}{z^3} + \dots)$
$f(z) = \frac{1}{z^2} + \frac{1}{z^3} + \frac{1}{z^4} + \dots = \sum_{n=2}^{\infty} z^{-n}$.

This is the Laurent series for $f(z)$ in the annulus $|z| > 1$.
The principal part is zero ($c_n=0$ for $n<0$). This implies $z=0$ is a removable singularity for this expansion. However, $z=0$ is a pole of order 1 for the original function. This is because the annulus $|z|>1$ does not contain the singularity at $z=1$.

Let's consider expansion about $z_0 = 1$.

**Example 2: Laurent Series of $f(z) = \frac{1}{z(z-1)}$ about $z_0 = 1$.**

Singularities at $z=0$ and $z=1$. Center $z_0=1$.
The regions where $f(z)$ is analytic are:
1.  $0 < |z-1| < 1$ (distance to $z=0$ is 1)
2.  $|z-1| > 1$ (distance to $z=0$ is $\infty$)

**(a) For $0 < |z-1| < 1$**

We want to expand $f(z) = -\frac{1}{z} + \frac{1}{z-1}$ in powers of $(z-1)$.
The term $\frac{1}{z-1}$ is already in the desired form.
For the term $-\frac{1}{z}$, we need to express it in powers of $(z-1)$.
Let $w = z-1$. Then $z = w+1$.
$$-\frac{1}{z} = -\frac{1}{w+1} = -\frac{1}{1+w}$$
Since $|w| = |z-1| < 1$, we use the geometric series:
$$-\frac{1}{1+w} = -\sum_{n=0}^{\infty} (-w)^n = -\sum_{n=0}^{\infty} (-1)^n w^n = -\sum_{n=0}^{\infty} (-1)^n (z-1)^n$$
$$-\frac{1}{z} = -1 + (z-1) - (z-1)^2 + (z-1)^3 - \dots$$

Now, combine with $\frac{1}{z-1}$:
$$f(z) = \left(-1 + (z-1) - (z-1)^2 + \dots\right) + \frac{1}{z-1}$$
$$f(z) = \frac{1}{z-1} - 1 + (z-1) - (z-1)^2 + \dots$$

This is the Laurent series for $f(z)$ in the annulus $0 < |z-1| < 1$.
The principal part is $\frac{1}{z-1}$ (one term). $z=1$ is a pole of order 1.
The coefficients are: $c_{-1} = 1$, $c_0 = -1$, $c_1 = 1$, $c_2 = -1$, and so on.

**(b) For $|z-1| > 1$**

We want to expand $f(z) = -\frac{1}{z} + \frac{1}{z-1}$ in powers of $(z-1)$.
The term $\frac{1}{z-1}$ is already in negative powers of $(z-1)$.
For the term $-\frac{1}{z}$, we need to express it in powers of $(z-1)$ for $|z-1| > 1$.
Let $w = z-1$. Then $z = w+1$.
$$-\frac{1}{z} = -\frac{1}{w+1}$$
Since $|w| > 1$, we have $|1/w| < 1$.
$$-\frac{1}{w+1} = -\frac{1}{w(1 + 1/w)} = -\frac{1}{w} \sum_{n=0}^{\infty} (-1/w)^n = -\frac{1}{w} \sum_{n=0}^{\infty} (-1)^n w^{-n}$$
$$-\frac{1}{z} = -\frac{1}{w} \left(1 - \frac{1}{w} + \frac{1}{w^2} - \frac{1}{w^3} + \dots \right)$$
$$-\frac{1}{z} = -\frac{1}{w} + \frac{1}{w^2} - \frac{1}{w^3} + \frac{1}{w^4} - \dots$$
$$-\frac{1}{z} = -\frac{1}{z-1} + \frac{1}{(z-1)^2} - \frac{1}{(z-1)^3} + \frac{1}{(z-1)^4} - \dots$$

Now, combine with $\frac{1}{z-1}$:
$$f(z) = \left(-\frac{1}{z-1} + \frac{1}{(z-1)^2} - \frac{1}{(z-1)^3} + \dots \right) + \frac{1}{z-1}$$
$$f(z) = \frac{1}{(z-1)^2} - \frac{1}{(z-1)^3} + \frac{1}{(z-1)^4} - \dots$$
$$f(z) = \sum_{n=2}^{\infty} (-1)^n (z-1)^{-n}$$

This is the Laurent series for $f(z)$ in the annulus $|z-1| > 1$.
The principal part is zero ($c_n=0$ for $n<0$). This means $z=1$ is a removable singularity for this expansion. However, $z=1$ is a pole of order 1 for the original function. Again, this highlights the importance of the annulus and the fact that the expansion represents the function within that specific region.

**Example 3: Laurent Series of $f(z) = e^{1/z}$ about $z_0 = 0$.**

The function is analytic everywhere except at $z=0$. So the annulus of convergence is $0 < |z| < \infty$.
We know the Maclaurin series for $e^w$:
$$e^w = \sum_{n=0}^{\infty} \frac{w^n}{n!} = 1 + w + \frac{w^2}{2!} + \frac{w^3}{3!} + \dots$$
Let $w = 1/z$. Since we are considering $0 < |z| < \infty$, $1/z$ can take any non-zero complex value.
$$f(z) = e^{1/z} = \sum_{n=0}^{\infty} \frac{(1/z)^n}{n!} = \sum_{n=0}^{\infty} \frac{1}{n! z^n}$$
$$f(z) = 1 + \frac{1}{z} + \frac{1}{2! z^2} + \frac{1}{3! z^3} + \dots$$
$$f(z) = 1 + z^{-1} + \frac{1}{2} z^{-2} + \frac{1}{6} z^{-3} + \dots$$

This is the Laurent series for $f(z)$ about $z_0 = 0$.
The principal part is $z^{-1} + \frac{1}{2} z^{-2} + \frac{1}{6} z^{-3} + \dots$.
Since the principal part has infinitely many terms, $z=0$ is an **essential singularity** for $e^{1/z}$.

---

### 7. Connection to Course Outcomes

*   **CO4: Understand the series expansion of complex function about a singularity and apply residue theorem to compute real integrals.**
    *   This topic directly addresses the "series expansion of complex function about a singularity."
    *   The coefficient $c_{-1}$ in the Laurent series is called the **residue** of $f(z)$ at $z_0$. This residue is critical for evaluating contour integrals and real integrals using the Residue Theorem, which is a direct application.

---

### 8. Important Points to Remember

*   **Annulus:** Laurent series converge in an annulus $R_1 < |z - z_0| < R_2$.
*   **Principal Part:** The part with negative powers of $(z-z_0)$ determines the nature of the singularity.
*   **Uniqueness:** For a given annulus, the Laurent series is unique.
*   **Geometric Series:** The geometric series is your primary tool for constructing Laurent series.
*   **Singularity:** The radii $R_1$ and $R_2$ are determined by the location of singularities. $R_1$ is the distance to the nearest singularity from $z_0$ (if $R_1 > 0$), and $R_2$ is the distance to the nearest singularity from $z_0$ going outwards.
*   **Residue:** The coefficient $c_{-1}$ is the residue, vital for integral calculations.

---

### 9. Practice Questions

**Question 1:** Find the Laurent series of $f(z) = \frac{\sin z}{z^2}$ about $z_0 = 0$ in the annulus $0 < |z| < \infty$. Identify the type of singularity at $z_0=0$.

**Question 2:** Find the Laurent series of $f(z) = \frac{1}{z^2 - 1}$ about $z_0 = 0$ in the annulus $1 < |z| < \infty$.

**Question 3:** Find the Laurent series of $f(z) = \frac{1}{z^2(z-1)}$ about $z_0 = 1$ in the annulus $0 < |z-1| < 1$.

**Question 4:** Determine the Laurent series expansion of $f(z) = \frac{e^z}{z(z-1)}$ about $z_0 = 0$ in the annulus $0 < |z| < 1$. What is the coefficient $c_{-1}$?

---

### 10. Answers to Practice Questions

**Answer 1:**
We know the Maclaurin series for $\sin z$:
$\sin z = z - \frac{z^3}{3!} + \frac{z^5}{5!} - \dots$
So,
$\frac{\sin z}{z^2} = \frac{1}{z^2} \left( z - \frac{z^3}{3!} + \frac{z^5}{5!} - \dots \right)$
$\frac{\sin z}{z^2} = \frac{1}{z} - \frac{z}{3!} + \frac{z^3}{5!} - \dots$
$$f(z) = z^{-1} - \frac{1}{6}z + \frac{1}{120}z^3 - \dots$$
The singularity at $z_0 = 0$ is a **pole of order 1** because the principal part ($z^{-1}$) has only one term with a negative power.

**Answer 2:**
$f(z) = \frac{1}{z^2 - 1}$. Singularities at $z = 1, -1$. Center $z_0=0$.
Annulus $1 < |z| < \infty$.
Using partial fractions: $\frac{1}{z^2-1} = \frac{1}{2} \left( \frac{1}{z-1} - \frac{1}{z+1} \right)$.
For the annulus $1 < |z| < \infty$:
$\frac{1}{z-1}$: Since $|z|>1$, $|1/z| < 1$.
$\frac{1}{z-1} = \frac{1}{z(1-1/z)} = \frac{1}{z} \sum_{n=0}^{\infty} (1/z)^n = \sum_{n=1}^{\infty} z^{-n}$.
$\frac{1}{z+1} = \frac{1}{z(1+1/z)} = \frac{1}{z} \sum_{n=0}^{\infty} (-1/z)^n = \sum_{n=0}^{\infty} (-1)^n z^{-(n+1)} = \sum_{k=1}^{\infty} (-1)^{k-1} z^{-k}$.

$f(z) = \frac{1}{2} \left( \sum_{n=1}^{\infty} z^{-n} - \sum_{k=1}^{\infty} (-1)^{k-1} z^{-k} \right)$
$f(z) = \frac{1}{2} \sum_{n=1}^{\infty} (1 - (-1)^{n-1}) z^{-n}$
For $n$ odd, $n-1$ is even, $(-1)^{n-1} = 1$, so $1 - 1 = 0$.
For $n$ even, $n-1$ is odd, $(-1)^{n-1} = -1$, so $1 - (-1) = 2$.
$f(z) = \frac{1}{2} \sum_{n=1, n \text{ even}}^{\infty} (2) z^{-n} = \sum_{m=1}^{\infty} z^{-2m}$
$$f(z) = z^{-2} + z^{-4} + z^{-6} + \dots$$
The principal part is zero, indicating $z=0$ is a removable singularity within this annular region.

**Answer 3:**
$f(z) = \frac{1}{z^2(z-1)}$. Singularities at $z=0, 1$. Center $z_0=1$.
Annulus $0 < |z-1| < 1$.
We need to expand $\frac{1}{z^2}$ in powers of $(z-1)$.
Let $w = z-1$, so $z = w+1$.
$\frac{1}{z^2} = \frac{1}{(w+1)^2}$.
We know $\frac{1}{1-x} = \sum_{n=0}^{\infty} x^n$. Differentiating w.r.t $x$:
$\frac{1}{(1-x)^2} = \sum_{n=1}^{\infty} n x^{n-1} = \sum_{k=0}^{\infty} (k+1) x^k$.
So, $\frac{1}{(1+w)^2} = \frac{1}{(1-(-w))^2} = \sum_{k=0}^{\infty} (k+1) (-w)^k = \sum_{k=0}^{\infty} (k+1) (-1)^k w^k$.
$\frac{1}{z^2} = \sum_{k=0}^{\infty} (k+1) (-1)^k (z-1)^k = 1 - 2(z-1) + 3(z-1)^2 - 4(z-1)^3 + \dots$

Now, combine with $\frac{1}{z-1}$:
$f(z) = \frac{1}{z-1} \left( 1 - 2(z-1) + 3(z-1)^2 - 4(z-1)^3 + \dots \right)$
$f(z) = (z-1)^{-1} \left( \sum_{k=0}^{\infty} (k+1) (-1)^k (z-1)^k \right)$
$f(z) = \sum_{k=0}^{\infty} (k+1) (-1)^k (z-1)^{k-1}$
Let $m = k-1$, so $k = m+1$. When $k=0$, $m=-1$.
$f(z) = \sum_{m=-1}^{\infty} (m+2) (-1)^{m+1} (z-1)^{m}$
$f(z) = (-1+2)(-1)^{-1+1}(z-1)^{-1} + (0+2)(-1)^{0+1}(z-1)^{0} + (1+2)(-1)^{1+1}(z-1)^{1} + \dots$
$f(z) = (1)(1)(z-1)^{-1} + (2)(-1) + (3)(1)(z-1) + \dots$
$$f(z) = (z-1)^{-1} - 2 + 3(z-1) - 4(z-1)^2 + \dots$$
The principal part is $(z-1)^{-1}$. $z=1$ is a pole of order 1.

**Answer 4:**
$f(z) = \frac{e^z}{z(z-1)}$. Center $z_0 = 0$. Annulus $0 < |z| < 1$.
$f(z) = \frac{1}{z} \cdot \frac{e^z}{z-1}$.
We need the Maclaurin series for $e^z$ and the Laurent series for $\frac{1}{z-1}$ in the annulus $0 < |z| < 1$.
$e^z = 1 + z + \frac{z^2}{2!} + \frac{z^3}{3!} + \dots$
$\frac{1}{z-1} = -\frac{1}{1-z} = -(1 + z + z^2 + z^3 + \dots)$ for $|z|<1$.

$f(z) = \frac{1}{z} \cdot (1 + z + \frac{z^2}{2} + \frac{z^3}{6} + \dots) \cdot (-1 - z - z^2 - z^3 - \dots)$
$f(z) = -\frac{1}{z} \cdot (1 + z + \frac{z^2}{2} + \frac{z^3}{6} + \dots) \cdot (1 + z + z^2 + z^3 + \dots)$
Let's multiply the two series:
$(1 + z + \frac{z^2}{2} + \frac{z^3}{6} + \dots)(1 + z + z^2 + z^3 + \dots)$
Constant term: $1 \cdot 1 = 1$
$z$ term: $1 \cdot z + z \cdot 1 = 2z$
$z^2$ term: $1 \cdot z^2 + z \cdot z + \frac{z^2}{2} \cdot 1 = z^2 + z^2 + \frac{z^2}{2} = \frac{5}{2}z^2$
$z^3$ term: $1 \cdot z^3 + z \cdot z^2 + \frac{z^2}{2} \cdot z + \frac{z^3}{6} \cdot 1 = z^3 + z^3 + \frac{z^3}{2} + \frac{z^3}{6} = \frac{17}{6}z^3$

So, $\frac{e^z}{z-1} = - (1 + 2z + \frac{5}{2}z^2 + \frac{17}{6}z^3 + \dots)$

Now multiply by $\frac{1}{z}$:
$f(z) = \frac{1}{z} \left( -1 - 2z - \frac{5}{2}z^2 - \frac{17}{6}z^3 - \dots \right)$
$f(z) = -z^{-1} - 2 - \frac{5}{2}z - \frac{17}{6}z^2 - \dots$

The Laurent series is $f(z) = -z^{-1} - 2 - \frac{5}{2}z - \frac{17}{6}z^2 - \dots$
The coefficient $c_{-1}$ is **-1**.

---

This concludes the notes on Laurent series. Understanding these expansions is crucial for the subsequent topics in complex analysis, particularly the Residue Theorem.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |
