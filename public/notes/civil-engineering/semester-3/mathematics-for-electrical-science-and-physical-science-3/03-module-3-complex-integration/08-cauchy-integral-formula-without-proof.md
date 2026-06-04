---
title: "Cauchy Integral formula (without proof)"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 3: Complex Integration"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba8106a3"
status: "completed"
scrapedAt: "2026-05-20T18:41:30.784Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 3: Complex Integration

### Topic: Cauchy Integral Formula (Without Proof)

---

This module delves into the powerful Cauchy Integral Formula, a cornerstone of complex analysis. Understanding this formula allows us to evaluate complex integrals and understand the behavior of analytic functions in a profound way.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   **Understand the statement and conditions for the Cauchy Integral Formula for a function.**
*   **Apply the Cauchy Integral Formula to evaluate specific complex integrals.**
*   **Understand the statement and conditions for the Cauchy Integral Formula for derivatives of a function.**
*   **Apply the Cauchy Integral Formula for derivatives to evaluate complex integrals involving derivatives of analytic functions.**
*   **Recognize the significance of the Cauchy Integral Formula in determining the values of analytic functions and their derivatives within a region.**

---

### 1. Key Concepts and Definitions

#### 1.1. Analytic Function (Holomorphic Function)

*   **Definition:** A function $f(z)$ is said to be **analytic** at a point $z_0$ if it is differentiable not only at $z_0$ but also in some neighborhood (an open disk) around $z_0$. A function is analytic in a region if it is analytic at every point in that region.
*   **Importance:** The Cauchy Integral Formulas are applicable to analytic functions.

#### 1.2. Simple Closed Contour

*   **Definition:** A **contour** is a curve in the complex plane. A **simple closed contour** is a continuous curve that starts and ends at the same point and does not intersect itself at any other point. Examples include circles and ellipses.
*   **Notation:** We often denote a simple closed contour by $C$.

#### 1.3. Interior and Exterior of a Contour

*   For a simple closed contour $C$, the **interior** is the bounded region enclosed by $C$, and the **exterior** is the unbounded region outside $C$.
*   The **Cauchy Integral Formula** relates the value of an analytic function at a point *inside* the contour to an integral *along* the contour.

---

### 2. Cauchy Integral Formula for a Function

This formula provides a direct method to calculate the value of an analytic function at a specific point within a closed contour, given the integral of the function along the contour.

#### 2.1. Statement of the Formula

Let $f(z)$ be a function that is **analytic** in a simply connected domain $D$. Let $C$ be a **simple closed contour** lying entirely within $D$. If $z_0$ is any point **inside** the contour $C$, then the value of $f(z)$ at $z_0$ is given by:

$$
f(z_0) = \frac{1}{2\pi i} \oint_C \frac{f(z)}{z - z_0} \, dz
$$

**Explanation:**

*   The integral on the right-hand side is taken along the contour $C$.
*   The term $(z - z_0)$ in the denominator has a singularity at $z = z_0$.
*   The formula essentially states that the value of the function at an interior point $z_0$ is determined by the behavior of the function on the boundary $C$.

#### 2.2. Conditions for Application:

1.  $f(z)$ must be **analytic** in a simply connected domain $D$ that contains the contour $C$ and its interior.
2.  $C$ must be a **simple closed contour**.
3.  $z_0$ must be a point strictly **inside** the contour $C$.

#### 2.3. Examples

**Example 1:** Evaluate the integral $\oint_C \frac{e^z}{z - 1} \, dz$, where $C$ is the circle $|z| = 2$.

**Solution:**

*   Here, $f(z) = e^z$. The function $e^z$ is analytic everywhere in the complex plane.
*   The contour $C$ is the circle $|z| = 2$, which is a simple closed contour.
*   The point $z_0 = 1$. Since $|1| = 1 < 2$, the point $z_0 = 1$ is inside the circle $|z| = 2$.
*   All conditions for the Cauchy Integral Formula are met.

Using the formula $f(z_0) = \frac{1}{2\pi i} \oint_C \frac{f(z)}{z - z_0} \, dz$, we can rearrange it to find the integral:

$$
\oint_C \frac{f(z)}{z - z_0} \, dz = 2\pi i f(z_0)
$$

Substituting $f(z) = e^z$ and $z_0 = 1$:

$$
\oint_C \frac{e^z}{z - 1} \, dz = 2\pi i f(1) = 2\pi i e^1 = 2\pi i e
$$

**Example 2:** Evaluate $\oint_C \frac{z^2 + 1}{z - i} \, dz$, where $C$ is the circle $|z| = 3$.

**Solution:**

*   Let $f(z) = z^2 + 1$. This is a polynomial and is analytic everywhere.
*   $C$ is the circle $|z| = 3$, a simple closed contour.
*   $z_0 = i$. Since $|i| = 1 < 3$, $z_0$ is inside $C$.

Applying the formula:

$$
\oint_C \frac{z^2 + 1}{z - i} \, dz = 2\pi i f(i) = 2\pi i (i^2 + 1) = 2\pi i (-1 + 1) = 2\pi i (0) = 0
$$

**Example 3:** Evaluate $\oint_C \frac{\sin z}{z - \pi/2} \, dz$, where $C$ is the circle $|z| = \pi$.

**Solution:**

*   $f(z) = \sin z$. This function is analytic everywhere.
*   $C$ is the circle $|z| = \pi$, a simple closed contour.
*   $z_0 = \pi/2$. Since $|\pi/2| < \pi$, $z_0$ is inside $C$.

Applying the formula:

$$
\oint_C \frac{\sin z}{z - \pi/2} \, dz = 2\pi i f(\pi/2) = 2\pi i \sin(\pi/2) = 2\pi i (1) = 2\pi i
$$

---

### 3. Cauchy Integral Formula for Derivatives

This extension of the Cauchy Integral Formula allows us to calculate the values of the derivatives of an analytic function at a point within a contour.

#### 3.1. Statement of the Formula

Let $f(z)$ be a function that is **analytic** in a simply connected domain $D$. Let $C$ be a **simple closed contour** lying entirely within $D$. If $z_0$ is any point **inside** the contour $C$, then the $n$-th derivative of $f(z)$ at $z_0$, denoted by $f^{(n)}(z_0)$, is given by:

$$
f^{(n)}(z_0) = \frac{n!}{2\pi i} \oint_C \frac{f(z)}{(z - z_0)^{n+1}} \, dz
$$

where $n = 0, 1, 2, \ldots$.

**Note:** For $n=0$, this reduces to the original Cauchy Integral Formula: $f^{(0)}(z_0) = f(z_0) = \frac{0!}{2\pi i} \oint_C \frac{f(z)}{(z - z_0)^{0+1}} \, dz = \frac{1}{2\pi i} \oint_C \frac{f(z)}{z - z_0} \, dz$.

#### 3.2. Conditions for Application:

1.  $f(z)$ must be **analytic** in a simply connected domain $D$ that contains the contour $C$ and its interior.
2.  $C$ must be a **simple closed contour**.
3.  $z_0$ must be a point strictly **inside** the contour $C$.

#### 3.3. Examples

**Example 4:** Evaluate $\oint_C \frac{e^z}{(z - 1)^2} \, dz$, where $C$ is the circle $|z| = 2$.

**Solution:**

*   Here, $f(z) = e^z$, which is analytic everywhere.
*   $C$ is the circle $|z| = 2$.
*   $z_0 = 1$, which is inside $C$.
*   The denominator is $(z - 1)^2 = (z - z_0)^{n+1}$. Comparing this with $(z - z_0)^{n+1}$, we have $n+1 = 2$, so $n = 1$. This means we are looking for the first derivative of $f(z)$.

Using the formula $f^{(n)}(z_0) = \frac{n!}{2\pi i} \oint_C \frac{f(z)}{(z - z_0)^{n+1}} \, dz$, we rearrange for the integral:

$$
\oint_C \frac{f(z)}{(z - z_0)^{n+1}} \, dz = \frac{2\pi i}{n!} f^{(n)}(z_0)
$$

For $n=1$, $f^{(1)}(z) = f'(z) = \frac{d}{dz}(e^z) = e^z$.
So, $f'(1) = e^1 = e$.

Substituting into the formula:

$$
\oint_C \frac{e^z}{(z - 1)^2} \, dz = \frac{2\pi i}{1!} f'(1) = 2\pi i e
$$

**Example 5:** Evaluate $\oint_C \frac{\cos z}{z^3} \, dz$, where $C$ is the circle $|z| = 1$.

**Solution:**

*   $f(z) = \cos z$, which is analytic everywhere.
*   $C$ is the circle $|z| = 1$.
*   $z_0 = 0$. Since $|0| = 0 < 1$, $z_0$ is inside $C$.
*   The denominator is $z^3 = (z - 0)^3 = (z - z_0)^{n+1}$. So, $n+1 = 3$, which means $n = 2$. We need the second derivative of $f(z)$.

First, find the derivatives of $f(z) = \cos z$:
$f'(z) = -\sin z$
$f''(z) = -\cos z$

Then, evaluate the second derivative at $z_0 = 0$:
$f''(0) = -\cos(0) = -1$.

Applying the formula:

$$
\oint_C \frac{\cos z}{z^3} \, dz = \frac{2\pi i}{2!} f''(0) = \frac{2\pi i}{2} (-1) = -\pi i
$$

**Example 6:** Evaluate $\oint_C \frac{6}{(z - 2)^4} \, dz$, where $C$ is the circle $|z - 2| = 1$.

**Solution:**

*   This integral looks a bit different. We can define $f(z) = 6$. This is a constant function, analytic everywhere.
*   $C$ is the circle $|z - 2| = 1$.
*   $z_0 = 2$. The center of the circle is 2, and the radius is 1. So, any point $z$ on the circle satisfies $|z-2|=1$. The point $z_0 = 2$ is the *center* of the contour, which is inside $C$.
*   The denominator is $(z - 2)^4 = (z - z_0)^{n+1}$. So, $n+1 = 4$, which means $n = 3$. We need the third derivative of $f(z)$.

$f(z) = 6$
$f'(z) = 0$
$f''(z) = 0$
$f'''(z) = 0$

So, $f'''(2) = 0$.

Applying the formula:

$$
\oint_C \frac{6}{(z - 2)^4} \, dz = \frac{2\pi i}{3!} f'''(2) = \frac{2\pi i}{6} (0) = 0
$$

---

### 4. Significance of the Cauchy Integral Formulas

*   **Determining Function Values:** The Cauchy Integral Formula for a function allows us to determine the value of an analytic function at any point inside a contour if we know its values on the contour. This is a very strong result, as it implies a high degree of regularity for analytic functions.
*   **Determining Derivative Values:** The Cauchy Integral Formulas for derivatives show that if a function is analytic, then all its derivatives exist and can also be expressed by integrals along the contour. This means that analytic functions are infinitely differentiable.
*   **Relationship between Boundary and Interior:** The formulas establish a fundamental link between the behavior of an analytic function on the boundary of a region and its behavior within that region.
*   **Foundation for Other Theorems:** These formulas are foundational for many other important theorems in complex analysis, such as Cauchy's Integral Theorem, Morera's Theorem, and the Maximum Modulus Principle.
*   **Evaluation of Integrals:** They provide a powerful tool for evaluating complex contour integrals that might otherwise be difficult or impossible to solve directly.

---

### 5. Important Points to Remember

*   **Analyticity is Crucial:** The function $f(z)$ in the numerator *must* be analytic within and on the contour $C$.
*   **Point Inside the Contour:** The point $z_0$ for which we are evaluating $f(z_0)$ or $f^{(n)}(z_0)$ *must* be strictly inside the contour $C$.
*   **Denominator Singularity:** The term $(z - z_0)^{n+1}$ in the denominator indicates that the singularity is located at $z_0$.
*   **Order of Derivative:** The power of $(z - z_0)$ in the denominator is $n+1$, which corresponds to the $n$-th derivative of $f(z)$.
*   **Factorials:** Don't forget the $n!$ in the denominator of the derivative formula.

---

### 6. Practice Questions/Exercises

**Instructions:** For each question, identify $f(z)$, $z_0$, $C$, and the value of $n$. Then apply the appropriate Cauchy Integral Formula.

**Question 1:** Evaluate $\oint_C \frac{\cos(\pi z)}{z - 2} \, dz$, where $C$ is the circle $|z| = 3$.

**Question 2:** Evaluate $\oint_C \frac{z^3 - 2z + 1}{z + 1} \, dz$, where $C$ is the circle $|z| = 2$.

**Question 3:** Evaluate $\oint_C \frac{\sin z}{(z - \pi/4)^2} \, dz$, where $C$ is the circle $|z| = \pi/2$.

**Question 4:** Evaluate $\oint_C \frac{e^{2z}}{z^2 + 1} \, dz$, where $C$ is the circle $|z| = 1/2$. (Hint: You might need to consider two separate cases or factor the denominator).

**Question 5:** Evaluate $\oint_C \frac{f(z)}{z - z_0} \, dz$, where $f(z)$ is analytic inside and on the simple closed contour $C$, and $z_0$ is a point *outside* $C$.

**Question 6:** Evaluate $\oint_C \frac{2}{(z - 1)^3} \, dz$, where $C$ is the circle $|z| = 2$.

---

### 7. Answers to Practice Questions

**Answer 1:**
*   $f(z) = \cos(\pi z)$ (analytic everywhere)
*   $z_0 = 2$
*   $C$ is $|z| = 3$ (simple closed contour)
*   $z_0 = 2$ is inside $C$ since $|2| < 3$.
*   $n=0$ (from $(z - 2)^1 = (z - z_0)^{n+1}$)
*   **Formula:** $\oint_C \frac{f(z)}{z - z_0} \, dz = 2\pi i f(z_0)$
*   $\oint_C \frac{\cos(\pi z)}{z - 2} \, dz = 2\pi i \cos(2\pi) = 2\pi i (1) = 2\pi i$.

**Answer 2:**
*   $f(z) = z^3 - 2z + 1$ (analytic everywhere)
*   $z_0 = -1$
*   $C$ is $|z| = 2$ (simple closed contour)
*   $z_0 = -1$ is inside $C$ since $|-1| < 2$.
*   $n=0$
*   **Formula:** $\oint_C \frac{f(z)}{z - z_0} \, dz = 2\pi i f(z_0)$
*   $\oint_C \frac{z^3 - 2z + 1}{z + 1} \, dz = 2\pi i ((-1)^3 - 2(-1) + 1) = 2\pi i (-1 + 2 + 1) = 2\pi i (2) = 4\pi i$.

**Answer 3:**
*   $f(z) = \sin z$ (analytic everywhere)
*   $z_0 = \pi/4$
*   $C$ is $|z| = \pi/2$ (simple closed contour)
*   $z_0 = \pi/4$ is inside $C$ since $|\pi/4| < \pi/2$.
*   Denominator is $(z - \pi/4)^2 = (z - z_0)^{n+1} \implies n+1 = 2 \implies n=1$. We need the first derivative.
*   $f'(z) = \cos z$. So, $f'(\pi/4) = \cos(\pi/4) = \frac{\sqrt{2}}{2}$.
*   **Formula:** $\oint_C \frac{f(z)}{(z - z_0)^{n+1}} \, dz = \frac{2\pi i}{n!} f^{(n)}(z_0)$
*   $\oint_C \frac{\sin z}{(z - \pi/4)^2} \, dz = \frac{2\pi i}{1!} f'(\pi/4) = 2\pi i \left(\frac{\sqrt{2}}{2}\right) = \pi i \sqrt{2}$.

**Answer 4:**
*   $f(z) = e^{2z}$ (analytic everywhere)
*   $C$ is $|z| = 1/2$.
*   The denominator is $z^2 + 1 = (z - i)(z + i)$.
*   We need to consider the location of $z_0 = i$ and $z_0 = -i$ relative to the contour $C$.
    *   $z_0 = i$: $|i| = 1$. Since $1 > 1/2$, $i$ is **outside** $C$.
    *   $z_0 = -i$: $|-i| = 1$. Since $1 > 1/2$, $-i$ is **outside** $C$.
*   Since both singularities are outside the contour, the function $\frac{e^{2z}}{z^2+1}$ is analytic inside and on the contour $C$.
*   By **Cauchy's Integral Theorem**, if a function is analytic inside and on a simple closed contour, the integral is zero.
*   **Answer:** $\oint_C \frac{e^{2z}}{z^2 + 1} \, dz = 0$.

**Answer 5:**
*   The function $f(z)$ is analytic inside and on the simple closed contour $C$.
*   The singularity $z_0$ is *outside* $C$.
*   Therefore, the function $\frac{f(z)}{z - z_0}$ is analytic inside and on the contour $C$.
*   By **Cauchy's Integral Theorem**, the integral is zero.
*   **Answer:** $\oint_C \frac{f(z)}{z - z_0} \, dz = 0$.

**Answer 6:**
*   Let $f(z) = 2$ (constant function, analytic everywhere).
*   $z_0 = 1$.
*   $C$ is $|z| = 2$ (simple closed contour).
*   $z_0 = 1$ is inside $C$ since $|1| < 2$.
*   Denominator is $(z - 1)^3 = (z - z_0)^{n+1} \implies n+1 = 3 \implies n=2$. We need the second derivative.
*   $f(z) = 2 \implies f'(z) = 0 \implies f''(z) = 0$. So, $f''(1) = 0$.
*   **Formula:** $\oint_C \frac{f(z)}{(z - z_0)^{n+1}} \, dz = \frac{2\pi i}{n!} f^{(n)}(z_0)$
*   $\oint_C \frac{2}{(z - 1)^3} \, dz = \frac{2\pi i}{2!} f''(1) = \frac{2\pi i}{2} (0) = 0$.

---

This concludes the notes on the Cauchy Integral Formula. These formulas are fundamental for advanced studies in complex analysis and have wide-ranging applications in various scientific and engineering disciplines.
