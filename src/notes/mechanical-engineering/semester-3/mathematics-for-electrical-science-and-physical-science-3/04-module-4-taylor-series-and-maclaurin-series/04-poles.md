---
title: "Poles"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 4: Taylor series and Maclaurin series"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462cb6"
status: "completed"
scrapedAt: "2026-05-20T17:50:54.277Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 4: Taylor Series and Maclaurin Series - Topic: Poles

**Learning Outcomes:**

*   Understand the concept of poles as singularities of complex functions.
*   Determine the order of a pole.
*   Distinguish between simple poles and poles of higher order.
*   Analyze the behavior of a complex function near its poles.
*   Identify poles from the series expansion of a complex function.

---

### 1. Introduction to Singularities and Poles

**Key Concept:** A **singularity** of a complex function $f(z)$ is a point $z_0$ at which the function is not analytic (i.e., not differentiable in a neighborhood around $z_0$).

**Types of Singularities:**

*   **Removable Singularity:** A singularity $z_0$ is removable if $\lim_{z \to z_0} f(z)$ exists and is finite. In such a case, $f(z)$ can be redefined at $z_0$ to be analytic.
*   **Pole:** A singularity $z_0$ is a pole if $\lim_{z \to z_0} |f(z)| = \infty$. This means the function "blows up" at this point.
*   **Essential Singularity:** If a singularity is neither removable nor a pole, it is called an essential singularity. The behavior of the function near an essential singularity is very complex (Picard's Great Theorem states that in any neighborhood of an essential singularity, $f(z)$ takes on every complex value infinitely often, with at most one exception).

**Focus of this Topic:** We will be focusing on **poles**.

---

### 2. Definition and Characterization of Poles

**Definition:** A point $z_0$ is a **pole** of a complex function $f(z)$ if $f(z)$ is not analytic at $z_0$, but there exists a positive integer $m$ such that $(z-z_0)^m f(z)$ is analytic and non-zero at $z_0$.

**Alternatively, using Laurent Series:**

A function $f(z)$ has a pole of order $m$ at $z_0$ if its Laurent series expansion around $z_0$ has a finite number of terms with negative powers of $(z-z_0)$, and the highest power is $-m$.

The Laurent series of $f(z)$ about $z_0$ is given by:
$$f(z) = \sum_{n=-\infty}^{\infty} c_n (z-z_0)^n = \sum_{n=1}^{\infty} c_{-n} (z-z_0)^{-n} + \sum_{n=0}^{\infty} c_n (z-z_0)^n$$
where $c_n = \frac{1}{2\pi i} \oint_C \frac{f(\zeta)}{(\zeta-z_0)^{n+1}} d\zeta$.

*   If $c_{-n} = 0$ for all $n > m$, and $c_{-m} \neq 0$, then $z_0$ is a pole of order $m$.
*   The term $\sum_{n=1}^{m} c_{-n} (z-z_0)^{-n}$ is called the **principal part** of the Laurent series. The presence of this part indicates a singularity.

**Relationship with Roots of the Denominator:**

If $f(z)$ can be expressed as a ratio of two analytic functions, $f(z) = \frac{g(z)}{h(z)}$, and $h(z_0) = 0$ while $g(z_0) \neq 0$, then $z_0$ is a singularity of $f(z)$.

*   If $z_0$ is a **simple zero** of $h(z)$ (i.e., $h(z_0)=0$ and $h'(z_0) \neq 0$), and $g(z_0) \neq 0$, then $z_0$ is a **simple pole** of $f(z)$.
*   If $z_0$ is a zero of order $m$ for $h(z)$ (i.e., $h(z_0)=h'(z_0)=...=h^{(m-1)}(z_0)=0$ and $h^{(m)}(z_0) \neq 0$), and $g(z_0) \neq 0$, then $z_0$ is a **pole of order $m$** of $f(z)$.

**Important Note:** This ratio form is particularly useful when the singularity is due to a denominator becoming zero.

---

### 3. Order of a Pole

**Definition:** A pole $z_0$ is said to be of **order $m$** if the highest negative power of $(z-z_0)$ in the Laurent series expansion of $f(z)$ around $z_0$ is $(z-z_0)^{-m}$, with the coefficient $c_{-m} \neq 0$.

**Characterizing the Order of a Pole:**

A point $z_0$ is a pole of order $m$ of $f(z)$ if and only if:
1.  $f(z)$ is not analytic at $z_0$.
2.  $\lim_{z \to z_0} (z-z_0)^m f(z) = L$, where $L$ is a finite, non-zero complex number.
3.  $\lim_{z \to z_0} (z-z_0)^{m+1} f(z) = 0$.

**Test for Pole Order:**

To find the order of a pole $z_0$ for a function $f(z)$:
1.  Check if $\lim_{z \to z_0} f(z) = \infty$. If not, it's not a pole.
2.  Calculate $\lim_{z \to z_0} (z-z_0)f(z)$.
    *   If this limit is finite and non-zero, $z_0$ is a **simple pole** (order 1).
    *   If this limit is 0, try $\lim_{z \to z_0} (z-z_0)^2f(z)$.
    *   If this limit is finite and non-zero, $z_0$ is a pole of order 2.
3.  Continue increasing the power of $(z-z_0)$ until the limit is finite and non-zero. That power indicates the order of the pole.

**Reference:** Kreyszig's "Advanced Engineering Mathematics" (10th ed.) discusses poles and their orders extensively in Chapter 13 on Complex Analysis, particularly when introducing Laurent series and their applications. Zill & Shanahan's "Complex Analysis" (3rd ed.) also provides a thorough treatment of singularities, including poles, in Chapter 7.

---

### 4. Identifying Poles and Their Orders - Examples

**Example 1: Simple Pole**

Let $f(z) = \frac{1}{z-2}$.
*   The function is not analytic at $z_0 = 2$.
*   Check the limit: $\lim_{z \to 2} (z-2) f(z) = \lim_{z \to 2} (z-2) \frac{1}{z-2} = \lim_{z \to 2} 1 = 1$.
*   Since the limit is finite and non-zero, $z_0 = 2$ is a **simple pole** (order 1).

**Example 2: Pole of Higher Order**

Let $f(z) = \frac{1}{(z-1)^3}$.
*   The function is not analytic at $z_0 = 1$.
*   Check the limit: $\lim_{z \to 1} (z-1)^3 f(z) = \lim_{z \to 1} (z-1)^3 \frac{1}{(z-1)^3} = \lim_{z \to 1} 1 = 1$.
*   Since the limit is finite and non-zero, $z_0 = 1$ is a **pole of order 3**.

**Example 3: Pole from a Ratio of Functions**

Let $f(z) = \frac{z}{z^2 - 4}$.
We can rewrite this as $f(z) = \frac{z}{(z-2)(z+2)}$.
The singularities are at $z_0 = 2$ and $z_1 = -2$.

*   **At $z_0 = 2$**:
    *   $g(z) = z$, $h(z) = z^2 - 4$.
    *   $g(2) = 2 \neq 0$.
    *   $h(2) = 2^2 - 4 = 0$.
    *   $h'(z) = 2z$, so $h'(2) = 2(2) = 4 \neq 0$.
    *   Since $z_0=2$ is a simple zero of the denominator and $g(2) \neq 0$, $z_0=2$ is a **simple pole**.
    *   Alternatively, check limit: $\lim_{z \to 2} (z-2) f(z) = \lim_{z \to 2} (z-2) \frac{z}{(z-2)(z+2)} = \lim_{z \to 2} \frac{z}{z+2} = \frac{2}{2+2} = \frac{2}{4} = \frac{1}{2}$.
    *   The limit is finite and non-zero, confirming a simple pole.

*   **At $z_1 = -2$**:
    *   $g(-2) = -2 \neq 0$.
    *   $h(-2) = (-2)^2 - 4 = 0$.
    *   $h'(-2) = 2(-2) = -4 \neq 0$.
    *   Since $z_1=-2$ is a simple zero of the denominator and $g(-2) \neq 0$, $z_1=-2$ is a **simple pole**.
    *   Alternatively, check limit: $\lim_{z \to -2} (z+2) f(z) = \lim_{z \to -2} (z+2) \frac{z}{(z-2)(z+2)} = \lim_{z \to -2} \frac{z}{z-2} = \frac{-2}{-2-2} = \frac{-2}{-4} = \frac{1}{2}$.
    *   The limit is finite and non-zero, confirming a simple pole.

**Example 4: Pole of Order 2**

Let $f(z) = \frac{e^z}{(z-\pi i)^2}$.
*   The function is not analytic at $z_0 = \pi i$.
*   Check the limit for order 1: $\lim_{z \to \pi i} (z-\pi i) f(z) = \lim_{z \to \pi i} (z-\pi i) \frac{e^z}{(z-\pi i)^2} = \lim_{z \to \pi i} \frac{e^z}{z-\pi i}$. This limit is $\infty$.
*   Check the limit for order 2: $\lim_{z \to \pi i} (z-\pi i)^2 f(z) = \lim_{z \to \pi i} (z-\pi i)^2 \frac{e^z}{(z-\pi i)^2} = \lim_{z \to \pi i} e^z = e^{\pi i} = -1$.
*   Since the limit is finite and non-zero for $m=2$, $z_0 = \pi i$ is a **pole of order 2**.

**Example 5: Removable Singularity vs. Pole**

Let $f(z) = \frac{\sin z}{z}$.
*   The function is not analytic at $z_0 = 0$ (division by zero).
*   Consider the limit: $\lim_{z \to 0} f(z) = \lim_{z \to 0} \frac{\sin z}{z}$. This is a known limit, equal to 1.
*   Since the limit is finite, $z_0 = 0$ is a **removable singularity**.

If we consider $g(z) = \frac{1}{z \sin z}$, then $z_0=0$ is a singularity.
*   $\lim_{z \to 0} z g(z) = \lim_{z \to 0} z \frac{1}{z \sin z} = \lim_{z \to 0} \frac{1}{\sin z} = \infty$.
*   $\lim_{z \to 0} z^2 g(z) = \lim_{z \to 0} z^2 \frac{1}{z \sin z} = \lim_{z \to 0} \frac{z}{\sin z} = 1$.
*   Since the limit is finite and non-zero for $m=2$, $z_0 = 0$ is a **pole of order 2** for $g(z)$. This is because $\sin z$ has a simple zero at $z=0$.

---

### 5. Behavior of Functions Near Poles

**Key Concept:** Near a pole of order $m$, $z_0$, a function $f(z)$ behaves like $\frac{c_{-m}}{(z-z_0)^m}$, where $c_{-m}$ is the coefficient of the highest order negative term in the Laurent series.

Specifically, if $z_0$ is a pole of order $m$ for $f(z)$, then we can write:
$$f(z) = \frac{\phi(z)}{(z-z_0)^m}$$
where $\phi(z)$ is analytic in a neighborhood of $z_0$ and $\phi(z_0) \neq 0$.

This behavior is crucial for understanding the function's graph (which can be visualized using magnitude and phase plots, or surface plots for $|f(z)|$) and for techniques like residue integration.

**Visualizing Behavior:**

Imagine a contour plot of $|f(z)|$. As $z$ approaches a pole $z_0$, the value of $|f(z)|$ will tend towards infinity. The "steepness" of this increase is related to the order of the pole. Higher order poles tend to have steeper "peaks" at the singularity.

---

### 6. Relation to Taylor and Maclaurin Series

While this topic is about poles, it's essential to understand how poles relate to the context of series expansions.

*   **Taylor Series:** A Taylor series expansion of a function $f(z)$ around $z_0$ is possible only if $f(z)$ is **analytic** at $z_0$ and in a neighborhood around $z_0$.
*   **Maclaurin Series:** A Maclaurin series is a special case of a Taylor series where $z_0 = 0$.

**Poles and the Failure of Taylor/Maclaurin Series:**

If a function $f(z)$ has a pole at $z_0$, then a Taylor or Maclaurin series expansion **cannot** be centered at $z_0$ because the function is not analytic there. The Taylor series is only defined in a disk of analyticity.

However, for a function with poles, we use **Laurent series** expansions. A Laurent series is a generalization of the Taylor series that allows for singularities. The principal part of the Laurent series (the terms with negative powers) directly characterizes the nature of the singularity, including poles.

**Example:** $f(z) = \frac{1}{z-1}$.
This function has a pole at $z=1$. We cannot find a Taylor series around $z=1$.
However, we can find a Taylor series around $z=0$ (a Maclaurin series) for a disk $|z| < 1$ where the function is analytic:
$$f(z) = \frac{1}{z-1} = -\frac{1}{1-z} = -(1 + z + z^2 + z^3 + \dots) = \sum_{n=0}^{\infty} -z^n$$
This is a valid Taylor series expansion in the disk $|z|<1$. The singularity at $z=1$ is outside this disk.

If we wanted to expand around $z=2$, where the function is analytic, we would use a Taylor series:
Let $w = z-2$, so $z = w+2$.
$$f(z) = \frac{1}{(w+2)-1} = \frac{1}{w+1} = \frac{1}{1+w} = 1 - w + w^2 - w^3 + \dots = \sum_{n=0}^{\infty} (-1)^n (z-2)^n$$
This is a Taylor series centered at $z=2$, valid for $|z-2| < 1$.

---

### 7. Poles and Course Outcomes Alignment

*   **CO1: Fourier Transforms:** Poles are critical in the theory of Fourier Transforms, especially when dealing with functions that have singularities or are defined piecewise. Contour integration using poles (residue theorem) is a powerful method for evaluating integrals that arise from inverse Fourier transforms. For example, functions like $1/(s+a)$ in the Laplace domain correspond to $e^{-at}u(t)$ in the time domain, and their poles are essential for understanding system stability.
*   **CO2: Analyticity and Conformal Mapping:** While poles themselves are points of non-analyticity, understanding where they are is fundamental to defining regions of analyticity for conformal mapping. The behavior of a function near a pole significantly influences the mapping in that vicinity.
*   **CO3: Complex Integrals:** Poles are the locations where the integrand might have singularities. Cauchy's integral theorem states that an integral over a closed contour is zero if the function is analytic within and on the contour. If a pole lies inside the contour, the integral will generally not be zero, and its value will be determined by the pole and its residue (via Cauchy's Integral Formula or the Residue Theorem).
*   **CO4: Series Expansion and Residue Theorem:** This is the most direct link. Poles are precisely the type of singularities that are characterized by the principal part of a Laurent series expansion. The **residue** of $f(z)$ at a pole $z_0$ is the coefficient $c_{-1}$ in its Laurent series expansion around $z_0$. The Residue Theorem states that $\oint_C f(z) dz = 2\pi i \sum (\text{Residues of } f \text{ inside } C)$. This theorem is a cornerstone for evaluating many real definite integrals, which is a common application in electrical and physical sciences.

---

### 8. Practice Questions and Exercises

**Question 1:**
Identify the singularities of the function $f(z) = \frac{z+1}{z(z^2+1)}$ and classify them. Determine the order of any poles.

**Answer 1:**
The singularities occur where the denominator is zero: $z(z^2+1) = 0$.
This gives $z=0$, $z^2 = -1$, so $z = i$ and $z = -i$.
The singularities are $z_0 = 0$, $z_1 = i$, and $z_2 = -i$.

*   **For $z_0 = 0$**:
    $f(z) = \frac{z+1}{z(z-i)(z+i)}$
    Check limit: $\lim_{z \to 0} z \cdot f(z) = \lim_{z \to 0} \frac{z+1}{(z-i)(z+i)} = \frac{0+1}{(0-i)(0+i)} = \frac{1}{(-i)(i)} = \frac{1}{-i^2} = \frac{1}{-(-1)} = 1$.
    Since the limit is finite and non-zero, $z_0=0$ is a **simple pole**.

*   **For $z_1 = i$**:
    Check limit: $\lim_{z \to i} (z-i) \cdot f(z) = \lim_{z \to i} \frac{z+1}{z(z+i)} = \frac{i+1}{i(i+i)} = \frac{i+1}{i(2i)} = \frac{i+1}{2i^2} = \frac{i+1}{-2} = -\frac{1}{2} - \frac{1}{2}i$.
    Since the limit is finite and non-zero, $z_1=i$ is a **simple pole**.

*   **For $z_2 = -i$**:
    Check limit: $\lim_{z \to -i} (z+i) \cdot f(z) = \lim_{z \to -i} \frac{z+1}{z(z-i)} = \frac{-i+1}{-i(-i-i)} = \frac{1-i}{-i(-2i)} = \frac{1-i}{2i^2} = \frac{1-i}{-2} = -\frac{1}{2} + \frac{1}{2}i$.
    Since the limit is finite and non-zero, $z_2=-i$ is a **simple pole**.

**Question 2:**
Find the order of the pole at $z=0$ for the function $f(z) = \frac{\cos z - 1}{z^2 \sin z}$.

**Answer 2:**
We need to examine the behavior of the numerator and denominator near $z=0$ using Taylor series.
$\cos z = 1 - \frac{z^2}{2!} + \frac{z^4}{4!} - \dots$
$\cos z - 1 = -\frac{z^2}{2} + \frac{z^4}{24} - \dots$

$\sin z = z - \frac{z^3}{3!} + \frac{z^5}{5!} - \dots$
$z^2 \sin z = z^2 (z - \frac{z^3}{6} + \dots) = z^3 - \frac{z^5}{6} + \dots$

So, $f(z) = \frac{-\frac{z^2}{2} + \frac{z^4}{24} - \dots}{z^3 - \frac{z^5}{6} + \dots}$
$f(z) = \frac{z^2(-\frac{1}{2} + \frac{z^2}{24} - \dots)}{z^3(1 - \frac{z^2}{6} + \dots)} = \frac{-\frac{1}{2} + \frac{z^2}{24} - \dots}{z(1 - \frac{z^2}{6} + \dots)}$

Now, let's test the limits:
*   $\lim_{z \to 0} z f(z) = \lim_{z \to 0} \frac{-\frac{1}{2} + \frac{z^2}{24} - \dots}{1 - \frac{z^2}{6} + \dots} = \frac{-1/2}{1} = -\frac{1}{2}$.
Since this limit is finite and non-zero, $z=0$ is a **simple pole**.

**Question 3:**
Determine if $z=1$ is a pole for $f(z) = \frac{(z-1)^2}{(z-1)^3 + (z-1)^4}$. If it is, find its order.

**Answer 3:**
$f(z) = \frac{(z-1)^2}{(z-1)^2 (1 + (z-1))}$
For $z \neq 1$, we can cancel $(z-1)^2$:
$f(z) = \frac{1}{1 + (z-1)} = \frac{1}{z}$ for $z \neq 1$.

The function $f(z)$ as originally defined has a singularity at $z=1$ because the denominator is zero there.
Let's analyze $f(z)$ near $z=1$.
$f(z) = \frac{(z-1)^2}{(z-1)^3(1 + (z-1))}$
$f(z) = \frac{1}{(z-1)(1 + z - 1)}$
$f(z) = \frac{1}{(z-1)z}$

Now, consider the limit as $z \to 1$:
$\lim_{z \to 1} f(z) = \lim_{z \to 1} \frac{1}{(z-1)z}$. As $z \to 1$, the denominator $(z-1)z \to 0 \cdot 1 = 0$.
Let's test the order:
$\lim_{z \to 1} (z-1) f(z) = \lim_{z \to 1} (z-1) \frac{1}{(z-1)z} = \lim_{z \to 1} \frac{1}{z} = \frac{1}{1} = 1$.
Since this limit is finite and non-zero, $z=1$ is a **simple pole**.

---

### 9. Important Points to Remember

*   **Poles are non-analytic points** where the magnitude of the function tends to infinity.
*   A function $f(z)$ has a pole of order $m$ at $z_0$ if $\lim_{z \to z_0} (z-z_0)^m f(z)$ is finite and non-zero, but $\lim_{z \to z_0} (z-z_0)^{m+1} f(z) = 0$.
*   If $f(z) = \frac{g(z)}{h(z)}$, and $z_0$ is a zero of order $m$ for $h(z)$ but $g(z_0) \neq 0$, then $z_0$ is a pole of order $m$ for $f(z)$.
*   The behavior of $f(z)$ near a pole $z_0$ of order $m$ is dominated by the term $\frac{c_{-m}}{(z-z_0)^m}$.
*   Taylor and Maclaurin series expansions are only possible in regions where the function is analytic. Poles are singularities that prevent such expansions at the pole itself. Laurent series are used for regions including singularities.
*   Poles are crucial for applying the Residue Theorem to evaluate integrals, a vital technique in electrical and physical sciences.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |


### 10. Further Reading and References

*   **Kreyszig, E. (2016).** *Advanced Engineering Mathematics* (10th ed.). John Wiley & Sons. (Chapter 13 on Complex Analysis covers singularities, poles, and Laurent series in detail).
*   **Zill, D. G., & Shanahan, P. D. (2015).** *Complex Analysis* (3rd ed.). Jones & Bartlett. (Chapter 7 on Complex Integration provides a deep dive into singularities, including poles, and their classification).
*   **Ramana, B. V. (2023).** *Higher Engineering Mathematics* (39th ed.). McGraw-Hill Education. (Likely contains sections on complex functions and their properties, including singularities).
*   **Grewal, B. S. (2018).** *Higher Engineering Mathematics* (44th ed.). Khanna Publishers. (Similar to Ramana, expect coverage of complex analysis essentials).
*   **Rao, K. R., Kim, D. N., & Hwang, J. J. (2011).** *Fast Fourier Transform - Algorithms and Applications*. Springer. (While focused on FFT, the underlying signal processing often involves analysis of functions in the complex plane, including poles in system transfer functions like $H(s)$).

These resources will provide more in-depth explanations, additional examples, and a broader context for the importance of poles in various engineering and scientific applications.

---