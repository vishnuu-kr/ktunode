---
title: "Removable singularities"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 4: Taylor series and Maclaurin series"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35a7f"
status: "completed"
scrapedAt: "2026-05-23T16:14:50.389Z"
---
# Mathematics for Electrical Science and Physical Science – 3

## Module 4: Taylor Series and Maclaurin Series

### Topic: Removable Singularities

---

**Target Audience:** Students of Electrical Science and Physical Science

**Learning Outcomes:**

*   Understand the concept of a singularity in complex analysis.
*   Distinguish between different types of singularities, with a focus on removable singularities.
*   Identify and analyze removable singularities of complex functions.
*   Learn techniques to remove singularities from complex functions.
*   Understand the significance of removable singularities in the context of analytic continuation.

---

### 1. Introduction to Singularities in Complex Analysis

A **singularity** of a complex function $f(z)$ is a point $z_0$ where the function is not analytic (i.e., not differentiable in a neighborhood around $z_0$). Understanding the nature of these singularities is crucial for analyzing the behavior of complex functions, especially when dealing with series expansions and integration.

**Key Concepts:**

*   **Analytic Function:** A complex function $f(z)$ is analytic in a region if it is differentiable at every point in that region.
*   **Singularity:** A point where a function fails to be analytic.

**Reference:**

*   **Kreyszig, Advanced Engineering Mathematics:** Chapter 12 (Complex Analysis) discusses the definition of analytic functions and singularities.

---

### 2. Types of Singularities

Complex functions can have different types of singularities. The most common ones encountered are:

*   **Removable Singularity:** A singularity that can be "removed" by defining or redefining the function at that point to make it analytic.
*   **Pole:** A singularity where the function behaves like $1/(z-z_0)^n$ for some positive integer $n$ as $z \to z_0$.
*   **Essential Singularity:** A singularity where the function's behavior is more complex, not fitting the description of a removable singularity or a pole.

**Focus of this Topic:** Removable Singularities

---

### 3. Removable Singularities

**Definition:** A point $z_0$ is a **removable singularity** of a function $f(z)$ if:

1.  $f(z)$ is not analytic at $z_0$.
2.  There exists a function $g(z)$ which is analytic in a neighborhood of $z_0$ (including $z_0$) such that $f(z) = g(z)$ for all $z$ in a deleted neighborhood of $z_0$ (i.e., for $z \ne z_0$ in some disk around $z_0$).

**Key Property:** If $z_0$ is a removable singularity of $f(z)$, then the limit of $f(z)$ as $z \to z_0$ exists and is finite.

**Theorem:** A point $z_0$ is a removable singularity of a function $f(z)$ if and only if $\lim_{z \to z_0} (z - z_0) f(z) = 0$.

**Alternative Characterization using Laurent Series:**

A function $f(z)$ has a removable singularity at $z_0$ if its Laurent series expansion in powers of $(z-z_0)$ in a punctured neighborhood of $z_0$ has no terms with negative powers of $(z-z_0)$. That is, the principal part of the Laurent series is zero.

The Laurent series of $f(z)$ around $z_0$ is given by:
$f(z) = \sum_{n=-\infty}^{\infty} c_n (z-z_0)^n$

If $z_0$ is a removable singularity, then $c_n = 0$ for all $n < 0$.

**Connection to Taylor Series:** If a singularity is removable, the function can be redefined at that point to be analytic. This means that around that point, the function can be represented by a Taylor series.

**Reference:**

*   **Zill & Shanahan, Complex Analysis:** Chapter 6 (Series and Residues) provides a detailed discussion on removable singularities and their characterization using Laurent series.
*   **Kreyszig, Advanced Engineering Mathematics:** Section 12.5 (Residues and poles) and related sections on Laurent series.

---

### 4. Identifying Removable Singularities

Several methods can be used to identify if a singularity $z_0$ is removable:

#### 4.1 Using the Limit Property

If $\lim_{z \to z_0} f(z) = L$, where $L$ is a finite complex number, then $z_0$ is a removable singularity. We can then define $f(z_0) = L$ to make the function analytic at $z_0$.

**Example 1:**
Consider the function $f(z) = \frac{\sin z}{z}$.
The function is not defined at $z=0$, so $z=0$ is a potential singularity.
Let's evaluate the limit as $z \to 0$:
$\lim_{z \to 0} \frac{\sin z}{z}$
This is a well-known limit, equal to 1.
Since the limit exists and is finite, $z=0$ is a removable singularity. We can define $f(0) = 1$ to make the function analytic at $z=0$.

**Example 2:**
Consider the function $f(z) = \frac{1 - \cos z}{z^2}$.
The function is not defined at $z=0$.
Let's evaluate the limit as $z \to 0$:
$\lim_{z \to 0} \frac{1 - \cos z}{z^2}$
Using L'Hôpital's Rule (twice, or Taylor series):
$\lim_{z \to 0} \frac{\sin z}{2z} = \frac{1}{2} \lim_{z \to 0} \frac{\sin z}{z} = \frac{1}{2} \times 1 = \frac{1}{2}$.
Since the limit exists and is finite, $z=0$ is a removable singularity. We can define $f(0) = 1/2$.

#### 4.2 Using the $\lim_{z \to z_0} (z - z_0) f(z) = 0$ Property

If $\lim_{z \to z_0} (z - z_0) f(z) = 0$, then $z_0$ is a removable singularity.

**Example 3:**
Consider $f(z) = z \sin(1/z)$.
The function is not defined at $z=0$.
Let's evaluate $\lim_{z \to 0} (z - 0) f(z) = \lim_{z \to 0} z \cdot (z \sin(1/z)) = \lim_{z \to 0} z^2 \sin(1/z)$.
We know that $|\sin(1/z)| \le 1$ for all $z \ne 0$.
So, $|z^2 \sin(1/z)| \le |z^2|$.
As $z \to 0$, $|z^2| \to 0$.
By the Squeeze Theorem, $\lim_{z \to 0} z^2 \sin(1/z) = 0$.
Therefore, $z=0$ is a removable singularity.

#### 4.3 Using the Laurent Series Expansion

If the principal part (terms with negative powers of $(z-z_0)$) of the Laurent series of $f(z)$ around $z_0$ is zero, then $z_0$ is a removable singularity.

**Example 4:**
Consider $f(z) = \frac{e^z - 1 - z}{z^2}$.
We know the Taylor series for $e^z$ around $z=0$: $e^z = 1 + z + \frac{z^2}{2!} + \frac{z^3}{3!} + \dots$
So, $e^z - 1 - z = \frac{z^2}{2!} + \frac{z^3}{3!} + \frac{z^4}{4!} + \dots$
Then, $f(z) = \frac{\frac{z^2}{2!} + \frac{z^3}{3!} + \frac{z^4}{4!} + \dots}{z^2} = \frac{1}{2!} + \frac{z}{3!} + \frac{z^2}{4!} + \dots$
This is a Taylor series in powers of $z$. Since there are no negative powers of $z$, $z=0$ is a removable singularity. The function can be defined as $f(0) = 1/2$ to make it analytic at $z=0$.

**Reference:**

*   **Ramana, Higher Engineering Mathematics:** Chapter 30 (Complex Integration) might touch upon series expansions and singularities.
*   **Grewal, Higher Engineering Mathematics:** Similar to Ramana, it would cover complex functions and their properties.

---

### 5. Removing Singularities

If $z_0$ is a removable singularity of $f(z)$, we can define a new function $g(z)$ that is analytic at $z_0$ and identical to $f(z)$ everywhere else in a neighborhood of $z_0$.

**Procedure:**

1.  Identify that $z_0$ is a removable singularity (e.g., by checking if $\lim_{z \to z_0} f(z)$ exists).
2.  Define the new function $g(z)$ as:
    $g(z) = \begin{cases} f(z) & \text{if } z \ne z_0 \\ L & \text{if } z = z_0 \end{cases}$
    where $L = \lim_{z \to z_0} f(z)$.

This process is called **analytic continuation** in a local sense, or simply removing the singularity.

**Example 5 (Continuing Example 1):**
For $f(z) = \frac{\sin z}{z}$, we found $z=0$ is a removable singularity and $\lim_{z \to 0} f(z) = 1$.
We can define a new function $g(z)$:
$g(z) = \begin{cases} \frac{\sin z}{z} & \text{if } z \ne 0 \\ 1 & \text{if } z = 0 \end{cases}$
This function $g(z)$ is analytic for all $z \in \mathbb{C}$. In fact, $g(z)$ is the analytic continuation of $f(z)$ over the point $z=0$.

**Example 6 (Continuing Example 4):**
For $f(z) = \frac{e^z - 1 - z}{z^2}$, we found $z=0$ is a removable singularity and the limit is $1/2$.
We can define $g(z)$:
$g(z) = \begin{cases} \frac{e^z - 1 - z}{z^2} & \text{if } z \ne 0 \\ \frac{1}{2} & \text{if } z = 0 \end{cases}$
This function $g(z)$ is analytic for all $z \in \mathbb{C}$.

---

### 6. Significance and Applications

*   **Analytic Continuation:** Removable singularities are important because they indicate that the function's behavior is "well-behaved" and can be extended analytically across the singularity. This is a fundamental concept in complex analysis.
*   **Series Expansions:** If a function has a removable singularity, its Taylor series expansion is often readily available or easily derivable, which is useful for approximation and analysis.
*   **Integration:** If a singularity lies on the path of integration, and it's removable, it usually doesn't pose a problem for the integral's existence or can be handled by redefining the function. However, poles and essential singularities are more critical for integration techniques like the Residue Theorem.
*   **Signal Processing (FFT):** While FFT is primarily concerned with discrete signals and their frequency components, understanding function behavior around singularities is a foundational concept in signal analysis. Properties of analytic functions, like Taylor series, can be related to approximations of signals. Though not directly about removable singularities, the general understanding of function behavior is vital. (Reference: Rao, Kim, Hwang, Fast Fourier Transform).

**Course Outcome Alignment:**

*   **CO4: Understand the series expansion of complex function about a singularity and apply residue theorem to compute real integrals.** Understanding removable singularities is the first step to understanding series expansions and the behavior of functions around singularities before moving to poles and their contribution to residues.

---

### 7. Practice Questions and Exercises

**Instructions:** For each question, identify the type of singularity at $z_0$ and, if it is removable, find the value that makes the function analytic at $z_0$.

**Question 1:**
Let $f(z) = \frac{z^2 - 4}{z - 2}$. Identify the singularity at $z_0 = 2$.

**Question 2:**
Let $f(z) = \frac{\cos z - 1}{z}$. Identify the singularity at $z_0 = 0$.

**Question 3:**
Let $f(z) = z \sin(\frac{1}{z^2})$. Identify the singularity at $z_0 = 0$.

**Question 4:**
Let $f(z) = \frac{e^z - 1}{z}$. Identify the singularity at $z_0 = 0$.

**Question 5:**
Let $f(z) = \frac{1}{z^2}$. Identify the singularity at $z_0 = 0$.

**Question 6:**
Let $f(z) = \frac{z^3 + 1}{z+1}$. Identify the singularity at $z_0 = -1$.

---

### 8. Answers to Practice Questions

**Answer 1:**
$f(z) = \frac{z^2 - 4}{z - 2} = \frac{(z-2)(z+2)}{z-2} = z+2$ for $z \ne 2$.
$\lim_{z \to 2} f(z) = \lim_{z \to 2} (z+2) = 4$.
Since the limit exists and is finite, $z_0 = 2$ is a **removable singularity**.
The function can be made analytic by defining $f(2) = 4$.

**Answer 2:**
$f(z) = \frac{\cos z - 1}{z}$.
$\lim_{z \to 0} f(z) = \lim_{z \to 0} \frac{\cos z - 1}{z}$.
Using L'Hôpital's Rule: $\lim_{z \to 0} \frac{-\sin z}{1} = -\sin(0) = 0$.
Since the limit exists and is finite, $z_0 = 0$ is a **removable singularity**.
The function can be made analytic by defining $f(0) = 0$.

**Answer 3:**
$f(z) = z \sin(\frac{1}{z^2})$.
Let's check $\lim_{z \to 0} (z - 0) f(z) = \lim_{z \to 0} z \cdot (z \sin(\frac{1}{z^2})) = \lim_{z \to 0} z^2 \sin(\frac{1}{z^2})$.
We know $|\sin(\frac{1}{z^2})| \le 1$.
So, $|z^2 \sin(\frac{1}{z^2})| \le |z^2|$.
As $z \to 0$, $|z^2| \to 0$. By the Squeeze Theorem, $\lim_{z \to 0} z^2 \sin(\frac{1}{z^2}) = 0$.
Therefore, $z_0 = 0$ is a **removable singularity**.
The function can be made analytic by defining $f(0) = 0$.

**Answer 4:**
$f(z) = \frac{e^z - 1}{z}$.
$\lim_{z \to 0} f(z) = \lim_{z \to 0} \frac{e^z - 1}{z}$.
This is the definition of the derivative of $e^z$ at $z=0$. Since $\frac{d}{dz}(e^z) = e^z$, the derivative at $z=0$ is $e^0 = 1$.
Alternatively, using L'Hôpital's Rule: $\lim_{z \to 0} \frac{e^z}{1} = e^0 = 1$.
Since the limit exists and is finite, $z_0 = 0$ is a **removable singularity**.
The function can be made analytic by defining $f(0) = 1$.

**Answer 5:**
$f(z) = \frac{1}{z^2}$.
$\lim_{z \to 0} f(z) = \lim_{z \to 0} \frac{1}{z^2} = \infty$.
The limit is not finite.
Let's check $\lim_{z \to 0} (z-0) f(z) = \lim_{z \to 0} z \cdot \frac{1}{z^2} = \lim_{z \to 0} \frac{1}{z} = \infty$.
This indicates that $z_0 = 0$ is not a removable singularity. In fact, it's a pole of order 2.

**Answer 6:**
$f(z) = \frac{z^3 + 1}{z+1}$.
The numerator can be factored as a sum of cubes: $z^3 + 1 = (z+1)(z^2 - z + 1)$.
So, $f(z) = \frac{(z+1)(z^2 - z + 1)}{z+1} = z^2 - z + 1$ for $z \ne -1$.
$\lim_{z \to -1} f(z) = \lim_{z \to -1} (z^2 - z + 1) = (-1)^2 - (-1) + 1 = 1 + 1 + 1 = 3$.
Since the limit exists and is finite, $z_0 = -1$ is a **removable singularity**.
The function can be made analytic by defining $f(-1) = 3$.

---

### 9. Important Points to Remember

*   A singularity $z_0$ is **removable** if the function can be made analytic at $z_0$ by defining (or redefining) the function's value at $z_0$.
*   The key indicator of a removable singularity is that the **limit of the function exists and is finite** as $z$ approaches $z_0$.
*   Alternatively, if $\lim_{z \to z_0} (z - z_0) f(z) = 0$, then $z_0$ is a removable singularity.
*   In terms of Laurent series, a removable singularity means the **principal part (negative powers of $(z-z_0)$) is zero**.
*   Removable singularities are the "least severe" type of singularity.
*   The process of making a function analytic at a removable singularity is a form of analytic continuation.

---

This concludes the study notes on removable singularities. Further exploration into poles and essential singularities will build upon this foundational understanding.
