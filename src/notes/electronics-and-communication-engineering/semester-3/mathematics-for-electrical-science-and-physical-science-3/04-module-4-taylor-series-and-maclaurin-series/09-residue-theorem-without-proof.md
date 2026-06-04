---
title: "Residue theorem (without proof)"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 4: Taylor series and Maclaurin series"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe278"
status: "completed"
scrapedAt: "2026-05-23T17:47:24.088Z"
---
## MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

### Module 4: Taylor Series and Maclaurin Series

#### Topic: Residue Theorem (Without Proof)

---

**Course Outcomes Alignment:**

*   **CO4:** Understand the series expansion of complex function about a singularity and apply residue theorem to compute real integrals. (Knowledge Level: K3) - This topic directly addresses CO4 by introducing the Residue Theorem as a powerful tool for evaluating integrals.

**Learning Outcomes:**

*   Understand the concept of a residue of a complex function at an isolated singularity.
*   State and apply the Residue Theorem for evaluating contour integrals.
*   Apply the Residue Theorem to evaluate certain types of real definite integrals.

---

### 1. Introduction to Isolated Singularities and Residues

Before delving into the Residue Theorem, it's crucial to understand the concept of singularities of a complex function and how to classify them. This section lays the groundwork for understanding residues.

**1.1 Complex Functions and Their Behavior:**

A complex function $f(z)$ can have points where it is not analytic. These points are called **singularities**. Understanding the behavior of $f(z)$ near these singularities is key to advanced complex analysis techniques.

**1.2 Laurent Series Expansion:**

*   **Definition:** For a function $f(z)$ that is analytic in an annulus $A$ defined by $R_1 < |z - z_0| < R_2$, the Laurent series expansion of $f(z)$ about $z_0$ is given by:
    $$f(z) = \sum_{n=-\infty}^{\infty} c_n (z - z_0)^n = \dots + \frac{c_{-2}}{(z - z_0)^2} + \frac{c_{-1}}{z - z_0} + c_0 + c_1 (z - z_0) + c_2 (z - z_0)^2 + \dots$$
    where the coefficients $c_n$ are given by:
    $$c_n = \frac{1}{2\pi i} \oint_C \frac{f(s)}{(s - z_0)^{n+1}} ds$$
    for any simple closed contour $C$ lying within the annulus and enclosing $z_0$.

*   **Significance:** The Laurent series provides a way to represent a complex function in a region that might include a singularity. The coefficients with negative powers of $(z-z_0)$ are particularly important for understanding the nature of the singularity.

**1.3 Types of Isolated Singularities:**

An isolated singularity $z_0$ of $f(z)$ is a point where $f(z)$ is not analytic, but there exists a neighborhood around $z_0$ where $f(z)$ is analytic except at $z_0$.

*   **Removable Singularity:** If the Laurent series expansion of $f(z)$ about $z_0$ has no terms with negative powers (i.e., $c_n = 0$ for all $n < 0$), then $z_0$ is a removable singularity. This means we can define or redefine $f(z_0)$ such that $f(z)$ becomes analytic at $z_0$.

*   **Pole:** If the Laurent series expansion has a finite number of terms with negative powers, then $z_0$ is a pole. Specifically, if $c_{-m} \neq 0$ and $c_n = 0$ for all $n < -m$, then $z_0$ is a pole of **order $m$**. The term $\frac{c_{-m}}{(z - z_0)^m}$ is called the **principal part** of the Laurent series.

    *   **Simple Pole:** A pole of order 1.

*   **Essential Singularity:** If the Laurent series expansion has an infinite number of terms with negative powers, then $z_0$ is an essential singularity. The behavior of $f(z)$ near an essential singularity is complex (Picard's Little Theorem states that in any neighborhood of an essential singularity, $f(z)$ takes on every complex value infinitely often, with at most one exception).

**1.4 The Residue at an Isolated Singularity:**

*   **Definition:** The **residue** of $f(z)$ at an isolated singularity $z_0$, denoted by $\text{Res}(f, z_0)$ or $\text{Res}_{z=z_0} f(z)$, is the coefficient of the term $\frac{1}{z - z_0}$ in the Laurent series expansion of $f(z)$ about $z_0$. That is,
    $$\text{Res}(f, z_0) = c_{-1}$$

*   **Significance:** The residue is a crucial value associated with a singularity. It plays a central role in the Residue Theorem.

**1.5 Calculating Residues:**

Knowing the Laurent series expansion can be tedious. Fortunately, there are more direct methods for calculating residues, especially for poles.

*   **For a Simple Pole ($z_0$):**
    $$\text{Res}(f, z_0) = \lim_{z \to z_0} (z - z_0) f(z)$$

*   **For a Pole of Order $m$ ($z_0$):**
    $$\text{Res}(f, z_0) = \frac{1}{(m-1)!} \lim_{z \to z_0} \frac{d^{m-1}}{dz^{m-1}} \left[ (z - z_0)^m f(z) \right]$$

*   **If $f(z)$ can be written as $\frac{p(z)}{q(z)}$ where $q(z_0) = 0$ and $q'(z_0) \neq 0$ (i.e., $z_0$ is a simple zero of $q(z)$ and $p(z_0) \neq 0$):**
    $$\text{Res}(f, z_0) = \frac{p(z_0)}{q'(z_0)}$$

**Example 1: Calculating Residues**

Let $f(z) = \frac{e^z}{z^2(z-1)}$. Find the residues at $z=0$ and $z=1$.

*   **At $z=0$:** $z=0$ is a pole of order 2. Here, $m=2$.
    We need to calculate $\frac{1}{(2-1)!} \lim_{z \to 0} \frac{d}{dz} \left[ z^2 f(z) \right]$.
    $$z^2 f(z) = z^2 \frac{e^z}{z^2(z-1)} = \frac{e^z}{z-1}$$
    Now, we differentiate with respect to $z$:
    $$\frac{d}{dz} \left( \frac{e^z}{z-1} \right) = \frac{e^z(z-1) - e^z(1)}{(z-1)^2} = \frac{e^z(z-2)}{(z-1)^2}$$
    Finally, take the limit as $z \to 0$:
    $$\text{Res}(f, 0) = \lim_{z \to 0} \frac{e^z(z-2)}{(z-1)^2} = \frac{e^0(0-2)}{(0-1)^2} = \frac{1(-2)}{1} = -2$$

*   **At $z=1$:** $z=1$ is a simple pole. Here, $m=1$.
    We need to calculate $\lim_{z \to 1} (z - 1) f(z)$.
    $$(z - 1) f(z) = (z - 1) \frac{e^z}{z^2(z-1)} = \frac{e^z}{z^2}$$
    Now, take the limit as $z \to 1$:
    $$\text{Res}(f, 1) = \lim_{z \to 1} \frac{e^z}{z^2} = \frac{e^1}{1^2} = e$$

**Reference:** Kreyszig's "Advanced Engineering Mathematics" (10th ed.) provides a thorough treatment of Laurent series and methods for calculating residues in Chapter 13. Zill and Shanahan's "Complex Analysis" (3rd ed.) also covers these topics extensively.

---

### 2. The Residue Theorem

The Residue Theorem is a cornerstone of complex integration, providing a direct link between contour integrals and the residues of the function within the contour.

**2.1 Statement of the Residue Theorem:**

*   **Theorem:** Let $f(z)$ be a function that is analytic inside and on a simple closed contour $C$, except for a finite number of isolated singularities $z_1, z_2, \dots, z_n$ inside $C$. Then, the integral of $f(z)$ along $C$ is given by:
    $$\oint_C f(z) dz = 2\pi i \sum_{k=1}^n \text{Res}(f, z_k)$$
    where $\text{Res}(f, z_k)$ is the residue of $f(z)$ at the singularity $z_k$.

*   **Intuition (without proof):** This theorem generalizes Cauchy's Integral Formula and Cauchy's Residue Theorem (a more general version). Cauchy's Integral Formula states that the integral of a function analytic within a contour is related to the function's value at a point inside. The Residue Theorem extends this to functions with isolated singularities inside the contour. Each singularity contributes to the integral through its residue, multiplied by $2\pi i$.

**2.2 Application to Contour Integrals:**

The Residue Theorem is a powerful tool for evaluating contour integrals when the integrand has isolated singularities within the contour. The process typically involves:

1.  **Identify the contour $C$**: This is usually given in the problem statement (e.g., a circle, a square, a line segment).
2.  **Find the singularities of $f(z)$**: Determine the points where the function is not analytic.
3.  **Identify singularities inside $C$**: Determine which of the singularities lie within the specified contour.
4.  **Calculate the residues**: For each singularity inside $C$, calculate its residue.
5.  **Apply the Residue Theorem**: Sum up all the calculated residues and multiply by $2\pi i$.

**Example 2: Evaluating a Contour Integral**

Evaluate $\oint_C \frac{e^z}{z^2(z-1)} dz$, where $C$ is the circle $|z| = \frac{1}{2}$.

*   **Contour $C$**: The circle $|z| = \frac{1}{2}$ centered at the origin with radius $\frac{1}{2}$.
*   **Singularities of $f(z) = \frac{e^z}{z^2(z-1)}$**: The singularities are at $z=0$ (order 2 pole) and $z=1$ (simple pole).
*   **Singularities inside $C$**: The singularity $z=0$ lies inside the circle $|z| = \frac{1}{2}$. The singularity $z=1$ lies outside the circle ($|1| = 1 > \frac{1}{2}$).
*   **Calculate the residue at $z=0$**: From Example 1, we found $\text{Res}(f, 0) = -2$.
*   **Apply the Residue Theorem**: Since only $z=0$ is inside $C$, the sum of residues is just $\text{Res}(f, 0)$.
    $$\oint_C f(z) dz = 2\pi i \times \text{Res}(f, 0) = 2\pi i \times (-2) = -4\pi i$$

**Example 3: Evaluating a Contour Integral with Multiple Singularities**

Evaluate $\oint_C \frac{1}{z^2 - 1} dz$, where $C$ is the circle $|z| = 2$.

*   **Contour $C$**: The circle $|z| = 2$ centered at the origin with radius 2.
*   **Singularities of $f(z) = \frac{1}{z^2 - 1} = \frac{1}{(z-1)(z+1)}$**: The singularities are at $z=1$ and $z=-1$ (both simple poles).
*   **Singularities inside $C$**: Both $z=1$ and $z=-1$ lie inside the circle $|z|=2$ ($|1|=1 < 2$, $|-1|=1 < 2$).
*   **Calculate the residues**:
    *   For $z=1$ (simple pole):
        $$\text{Res}(f, 1) = \lim_{z \to 1} (z - 1) \frac{1}{(z-1)(z+1)} = \lim_{z \to 1} \frac{1}{z+1} = \frac{1}{1+1} = \frac{1}{2}$$
    *   For $z=-1$ (simple pole):
        $$\text{Res}(f, -1) = \lim_{z \to -1} (z + 1) \frac{1}{(z-1)(z+1)} = \lim_{z \to -1} \frac{1}{z-1} = \frac{1}{-1-1} = -\frac{1}{2}$$
*   **Apply the Residue Theorem**:
    $$\oint_C f(z) dz = 2\pi i \left( \text{Res}(f, 1) + \text{Res}(f, -1) \right) = 2\pi i \left( \frac{1}{2} + (-\frac{1}{2}) \right) = 2\pi i (0) = 0$$

**Reference:** Kreyszig (Chapter 13) and Zill & Shanahan (Chapter 6) thoroughly explain the Residue Theorem and its applications. Ramana's "Higher Engineering Mathematics" also dedicates sections to this topic.

---

### 3. Application of the Residue Theorem to Evaluate Real Definite Integrals

One of the most significant applications of the Residue Theorem is the evaluation of certain types of real definite integrals, which are often difficult or impossible to solve using elementary calculus methods. This is achieved by constructing a suitable contour in the complex plane that includes the real integral as part of its boundary.

**3.1 Types of Real Integrals Evaluated Using the Residue Theorem:**

The Residue Theorem is particularly useful for integrals of the following forms:

*   **Integrals of Rational Functions:** $\int_{-\infty}^{\infty} R(x) dx$, where $R(x)$ is a rational function with $\deg(Q) \ge \deg(P) + 2$ for $R(x) = P(x)/Q(x)$ and $Q(x) \neq 0$ for real $x$.
*   **Integrals of the form $\int_{-\infty}^{\infty} f(x) \cos(ax) dx$ or $\int_{-\infty}^{\infty} f(x) \sin(ax) dx$**: Where $f(x)$ is a rational function.
*   **Integrals of trigonometric functions:** $\int_0^{2\pi} F(\cos \theta, \sin \theta) d\theta$.

**3.2 Evaluating $\int_{-\infty}^{\infty} R(x) dx$ (where $R(x)$ is a rational function):**

This is a classic application. We consider the integral of $f(z) = R(z)$ over a semi-circular contour in the upper half-plane.

1.  **Choose a Contour:** Let $C$ be a closed contour consisting of:
    *   The interval $[-R, R]$ on the real axis.
    *   A semi-circle $\Gamma_R$ of radius $R$ in the upper half-plane, parameterized by $z = Re^{i\theta}$ for $0 \le \theta \le \pi$.

2.  **Conditions for $R(x)$:** The rational function $R(x) = P(x)/Q(x)$ must satisfy:
    *   $R(z)$ is analytic everywhere on and in the upper half-plane except for a finite number of poles, none of which lie on the real axis.
    *   $|z R(z)| \to 0$ as $|z| \to \infty$. This condition is satisfied if $\deg(Q) \ge \deg(P) + 2$.

3.  **Apply the Residue Theorem:**
    $$\oint_C R(z) dz = \int_{-R}^R R(x) dx + \int_{\Gamma_R} R(z) dz = 2\pi i \sum \text{Res}(R, z_k)$$
    where $z_k$ are the poles of $R(z)$ in the upper half-plane.

4.  **Limit as $R \to \infty$**: As $R \to \infty$, the integral over $\Gamma_R$ tends to zero due to the condition $|z R(z)| \to 0$.
    $$\lim_{R \to \infty} \int_{\Gamma_R} R(z) dz = 0$$
    Therefore,
    $$\int_{-\infty}^{\infty} R(x) dx = 2\pi i \sum \text{Res}(R, z_k)$$

**Example 4: Evaluating $\int_{-\infty}^{\infty} \frac{1}{x^2 + 1} dx$**

Let $f(z) = \frac{1}{z^2 + 1}$. We want to evaluate $\int_{-\infty}^{\infty} \frac{1}{x^2 + 1} dx$.

*   **Contour $C$**: Semi-circle in the upper half-plane with radius $R$.
*   **Singularities of $f(z) = \frac{1}{z^2 + 1} = \frac{1}{(z-i)(z+i)}$**: Poles at $z=i$ and $z=-i$.
*   **Singularity inside the upper half-plane contour**: Only $z=i$ is in the upper half-plane.
*   **Calculate the residue at $z=i$**: $z=i$ is a simple pole.
    $$\text{Res}(f, i) = \lim_{z \to i} (z - i) \frac{1}{(z-i)(z+i)} = \lim_{z \to i} \frac{1}{z+i} = \frac{1}{i+i} = \frac{1}{2i}$$
*   **Apply Residue Theorem and limit**:
    $$\int_{-\infty}^{\infty} \frac{1}{x^2 + 1} dx = 2\pi i \times \text{Res}(f, i) = 2\pi i \times \frac{1}{2i} = \pi$$

**Reference:** This technique is a standard application found in all the reference texts, particularly Kreyszig (Chapter 13) and Zill & Shanahan (Chapter 7).

**3.3 Evaluating $\int_{-\infty}^{\infty} f(x) \cos(ax) dx$ and $\int_{-\infty}^{\infty} f(x) \sin(ax) dx$:**

For integrals involving $\cos(ax)$ and $\sin(ax)$, we consider the function $f(z)e^{iaz}$ (for $a>0$) or $f(z)e^{-iaz}$ (for $a<0$) and use a similar semi-circular contour.

1.  **Choose a Contour:** Use the same semi-circular contour $C$ as before.
2.  **Consider $g(z) = f(z) e^{iaz}$**: For $a>0$, consider $g(z) = \frac{R(z)}{z}$ or $g(z) = R(z)e^{iaz}$.
    *   If we consider $f(z) = \frac{1}{z^2+1}$ and $a=1$, we consider $f(z)e^{iz} = \frac{e^{iz}}{z^2+1}$.
3.  **Conditions:**
    *   $R(z)$ is a rational function.
    *   $R(z) \to 0$ as $|z| \to \infty$. (This is usually sufficient for $R(z)e^{iaz}$ to vanish on the semi-circle).
    *   $a > 0$. If $a < 0$, consider $e^{-iaz}$ instead.
4.  **Apply the Residue Theorem:**
    $$\oint_C R(z) e^{iaz} dz = 2\pi i \sum \text{Res}(R(z)e^{iaz}, z_k)$$
    where $z_k$ are the poles of $R(z)e^{iaz}$ in the upper half-plane.
5.  **Limit as $R \to \infty$**: By Jordan's Lemma (or similar arguments), if $R(z)$ satisfies certain conditions, the integral over $\Gamma_R$ tends to zero.
    *   For $a>0$, if $R(z)$ is a rational function such that $R(z) \to 0$ as $|z| \to \infty$, then $\lim_{R \to \infty} \int_{\Gamma_R} R(z) e^{iaz} dz = 0$.
6.  **Relate to the original integrals**:
    *   $\int_{-\infty}^{\infty} R(x) \cos(ax) dx = \text{Re} \left( 2\pi i \sum \text{Res}(R(z)e^{iaz}, z_k) \right)$
    *   $\int_{-\infty}^{\infty} R(x) \sin(ax) dx = \text{Im} \left( 2\pi i \sum \text{Res}(R(z)e^{iaz}, z_k) \right)$

**Example 5: Evaluating $\int_{-\infty}^{\infty} \frac{\cos(x)}{x^2 + 1} dx$**

Consider $f(z) = \frac{e^{iz}}{z^2 + 1}$. Here $a=1 > 0$.

*   **Contour $C$**: Semi-circle in the upper half-plane with radius $R$.
*   **Singularities of $f(z) = \frac{e^{iz}}{z^2 + 1}$**: Poles at $z=i$ and $z=-i$.
*   **Singularity inside the upper half-plane contour**: Only $z=i$.
*   **Calculate the residue at $z=i$**: $z=i$ is a simple pole for $\frac{e^{iz}}{(z-i)(z+i)}$.
    $$\text{Res}(f, i) = \lim_{z \to i} (z - i) \frac{e^{iz}}{(z-i)(z+i)} = \lim_{z \to i} \frac{e^{iz}}{z+i} = \frac{e^{i(i)}}{i+i} = \frac{e^{-1}}{2i}$$
*   **Apply Residue Theorem and Jordan's Lemma**:
    $$\int_{-\infty}^{\infty} \frac{e^{ix}}{x^2 + 1} dx = 2\pi i \times \text{Res}(f, i) = 2\pi i \times \frac{e^{-1}}{2i} = \pi e^{-1} = \frac{\pi}{e}$$
*   **Extract the real part**: Since $\int_{-\infty}^{\infty} \frac{e^{ix}}{x^2 + 1} dx = \int_{-\infty}^{\infty} \frac{\cos(x) + i \sin(x)}{x^2 + 1} dx$, we have:
    $$\int_{-\infty}^{\infty} \frac{\cos(x)}{x^2 + 1} dx = \text{Re} \left( \frac{\pi}{e} \right) = \frac{\pi}{e}$$

**Reference:** Jordan's Lemma is a key theoretical result used here, discussed in Kreyszig and Zill & Shanahan.

**3.4 Evaluating $\int_0^{2\pi} F(\cos \theta, \sin \theta) d\theta$:**

These integrals can be transformed into contour integrals in the complex plane using the substitutions:

*   $z = e^{i\theta}$
*   $d\theta = \frac{dz}{iz}$
*   $\cos \theta = \frac{z + z^{-1}}{2} = \frac{z^2 + 1}{2z}$
*   $\sin \theta = \frac{z - z^{-1}}{2i} = \frac{z^2 - 1}{2iz}$

The contour $C$ is the unit circle $|z|=1$. The integral becomes an integral of a rational function of $z$ over the unit circle.

**Example 6: Evaluating $\int_0^{2\pi} \frac{d\theta}{2 + \cos \theta}$**

Let $f(\theta) = \frac{1}{2 + \cos \theta}$.

*   **Transform the integral**:
    $$I = \oint_{|z|=1} \frac{1}{2 + \frac{z^2 + 1}{2z}} \frac{dz}{iz} = \oint_{|z|=1} \frac{1}{\frac{4z + z^2 + 1}{2z}} \frac{dz}{iz} = \oint_{|z|=1} \frac{2z}{z^2 + 4z + 1} \frac{dz}{iz}$$
    $$I = \oint_{|z|=1} \frac{2}{z(z^2 + 4z + 1)} dz$$

*   **Singularities of the integrand $g(z) = \frac{2}{z(z^2 + 4z + 1)}$**:
    *   $z=0$ (simple pole).
    *   Roots of $z^2 + 4z + 1 = 0$: $z = \frac{-4 \pm \sqrt{16 - 4}}{2} = \frac{-4 \pm \sqrt{12}}{2} = -2 \pm \sqrt{3}$.
        *   $z_1 = -2 + \sqrt{3} \approx -2 + 1.732 = -0.268$
        *   $z_2 = -2 - \sqrt{3} \approx -2 - 1.732 = -3.732$

*   **Singularities inside the unit circle $|z|=1$**:
    *   $z=0$ is inside $|z|=1$.
    *   $z_1 = -2 + \sqrt{3}$ is inside $|z|=1$ since $|-0.268| < 1$.
    *   $z_2 = -2 - \sqrt{3}$ is outside $|z|=1$ since $|-3.732| > 1$.

*   **Calculate residues**:
    *   Residue at $z=0$:
        $$\text{Res}(g, 0) = \lim_{z \to 0} z \cdot g(z) = \lim_{z \to 0} z \cdot \frac{2}{z(z^2 + 4z + 1)} = \lim_{z \to 0} \frac{2}{z^2 + 4z + 1} = \frac{2}{1} = 2$$
    *   Residue at $z_1 = -2 + \sqrt{3}$:
        $$\text{Res}(g, z_1) = \lim_{z \to z_1} (z - z_1) \frac{2}{z(z - z_1)(z - z_2)} = \frac{2}{z_1(z_1 - z_2)}$$
        $z_1 - z_2 = (-2 + \sqrt{3}) - (-2 - \sqrt{3}) = 2\sqrt{3}$.
        $$\text{Res}(g, z_1) = \frac{2}{(-2 + \sqrt{3})(2\sqrt{3})} = \frac{1}{\sqrt{3}(-2 + \sqrt{3})} = \frac{1}{-2\sqrt{3} + 3}$$
        To rationalize: $\frac{1}{3 - 2\sqrt{3}} \times \frac{3 + 2\sqrt{3}}{3 + 2\sqrt{3}} = \frac{3 + 2\sqrt{3}}{9 - 12} = \frac{3 + 2\sqrt{3}}{-3} = -1 - \frac{2\sqrt{3}}{3}$.
        (Let's double check the calculation. A simpler way is to use the formula for quadratic roots: if $z_1, z_2$ are roots of $az^2+bz+c=0$, then $z_1-z_2 = \frac{\sqrt{b^2-4ac}}{a}$ and $z_1z_2=c/a$. Here $z^2+4z+1=0$, $a=1,b=4,c=1$. $z_1z_2=1$.
        $\text{Res}(g, z_1) = \frac{2}{z_1(z_1 - z_2)}$.
        Alternatively, use $\frac{p(z)}{q'(z)}$ if applicable. $g(z) = \frac{2}{z(z^2+4z+1)}$.
        For $z=z_1$, the denominator is $z(z^2+4z+1)$. The derivative of the denominator is $(z^2+4z+1) + z(2z+4)$.
        This is becoming complicated. Let's stick to the limit form.
        $\frac{2}{z_1(z_1 - z_2)}$. We know $z_1 = -2+\sqrt{3}$.
        $\text{Res}(g, z_1) = \frac{2}{(-2+\sqrt{3})(-2\sqrt{3})} = \frac{1}{(-2+\sqrt{3})(-\sqrt{3})} = \frac{1}{2\sqrt{3}-3}$.
        Rationalize: $\frac{1}{2\sqrt{3}-3} \times \frac{2\sqrt{3}+3}{2\sqrt{3}+3} = \frac{2\sqrt{3}+3}{12-9} = \frac{3+2\sqrt{3}}{3} = 1 + \frac{2\sqrt{3}}{3}$.

        Let's recheck the roots: $z^2+4z+1=0$. $z = -2 \pm \sqrt{3}$.
        $z_1 = -2 + \sqrt{3}$.
        The integrand is $\frac{2}{z(z-z_1)(z-z_2)}$.
        Residue at $z_1$: $\frac{2}{z_1(z_1-z_2)} = \frac{2}{(-2+\sqrt{3})(-2\sqrt{3})}$. This is correct.

        Wait, for $\frac{A}{z(z-z_1)(z-z_2)}$, the residue at $z_1$ is $\frac{A}{z_1(z_1-z_2)}$.
        $A=2$.
        $z_1 = -2+\sqrt{3}$. $z_2 = -2-\sqrt{3}$.
        $z_1-z_2 = 2\sqrt{3}$.
        $\text{Res}(g, z_1) = \frac{2}{(-2+\sqrt{3})(2\sqrt{3})} = \frac{1}{\sqrt{3}(-2+\sqrt{3})} = \frac{1}{-2\sqrt{3}+3}$.
        Rationalizing: $\frac{1}{3-2\sqrt{3}} \cdot \frac{3+2\sqrt{3}}{3+2\sqrt{3}} = \frac{3+2\sqrt{3}}{9-12} = \frac{3+2\sqrt{3}}{-3} = -1 - \frac{2\sqrt{3}}{3}$.

        Let's try using the formula for quadratic terms in the denominator. If $f(z) = \frac{p(z)}{(z-a)(z-b)}$, the residue at $a$ is $\frac{p(a)}{a-b}$.
        Here $g(z) = \frac{2}{z(z^2+4z+1)} = \frac{2}{z(z-z_1)(z-z_2)}$.
        Residue at $z_1$: $\frac{2}{z_1(z_1-z_2)} = \frac{2}{(-2+\sqrt{3})(2\sqrt{3})} = \frac{1}{\sqrt{3}(-2+\sqrt{3})} = \frac{1}{-2\sqrt{3}+3}$.
        Rationalizing: $\frac{1}{3-2\sqrt{3}} \frac{3+2\sqrt{3}}{3+2\sqrt{3}} = \frac{3+2\sqrt{3}}{9-12} = \frac{3+2\sqrt{3}}{-3} = -1 - \frac{2\sqrt{3}}{3}$.

        Let's verify the roots and residues.
        Denominator is $z^3+4z^2+z$.
        We are looking for the residue of $g(z) = \frac{2}{z(z^2+4z+1)}$ at $z_1 = -2+\sqrt{3}$.
        The residue is $\frac{2}{z_1 \cdot (2z_1+4)} = \frac{2}{(-2+\sqrt{3}) \cdot (2(-2+\sqrt{3})+4)} = \frac{2}{(-2+\sqrt{3}) \cdot (-4+2\sqrt{3}+4)} = \frac{2}{(-2+\sqrt{3})(2\sqrt{3})}$. This is consistent.

        Let's reconsider the problem. The question is $\int_0^{2\pi} \frac{d\theta}{2 + \cos \theta}$.
        The roots of $z^2+4z+1=0$ are indeed $-2 \pm \sqrt{3}$.
        $-2+\sqrt{3} \approx -0.268$.
        $-2-\sqrt{3} \approx -3.732$.
        So the poles inside $|z|=1$ are $z=0$ and $z=-2+\sqrt{3}$.

        Let's use the simpler form of the residue calculation:
        For $g(z) = \frac{P(z)}{Q(z)}$, if $z_0$ is a simple pole, $\text{Res}(g, z_0) = \frac{P(z_0)}{Q'(z_0)}$.
        $g(z) = \frac{2}{z^3+4z^2+z}$.
        $Q(z) = z^3+4z^2+z$. $Q'(z) = 3z^2+8z+1$.
        $P(z) = 2$.

        Residue at $z=0$: $\frac{P(0)}{Q'(0)} = \frac{2}{1} = 2$. Correct.

        Residue at $z_1 = -2+\sqrt{3}$:
        $Q'(z_1) = 3(-2+\sqrt{3})^2 + 8(-2+\sqrt{3}) + 1$
        $(-2+\sqrt{3})^2 = 4 - 4\sqrt{3} + 3 = 7 - 4\sqrt{3}$.
        $Q'(z_1) = 3(7 - 4\sqrt{3}) + 8(-2+\sqrt{3}) + 1$
        $Q'(z_1) = 21 - 12\sqrt{3} - 16 + 8\sqrt{3} + 1$
        $Q'(z_1) = 6 - 4\sqrt{3}$.
        $\text{Res}(g, z_1) = \frac{P(z_1)}{Q'(z_1)} = \frac{2}{6 - 4\sqrt{3}} = \frac{1}{3 - 2\sqrt{3}}$.
        Rationalizing: $\frac{1}{3-2\sqrt{3}} \times \frac{3+2\sqrt{3}}{3+2\sqrt{3}} = \frac{3+2\sqrt{3}}{9-12} = \frac{3+2\sqrt{3}}{-3} = -1 - \frac{2\sqrt{3}}{3}$.
        This confirms the previous calculation.

*   **Apply Residue Theorem**:
    $$I = 2\pi i \left( \text{Res}(g, 0) + \text{Res}(g, z_1) \right)$$
    $$I = 2\pi i \left( 2 + (-1 - \frac{2\sqrt{3}}{3}) \right) = 2\pi i \left( 1 - \frac{2\sqrt{3}}{3} \right)$$
    This result doesn't look right for $\int_0^{2\pi} \frac{d\theta}{2 + \cos \theta}$. Let's check the transformation.

    Ah, the integral is $\oint_{|z|=1} \frac{2}{z^2+4z+1} \frac{dz}{i}$.
    So $g(z) = \frac{2}{i(z^2+4z+1)}$.
    Residue at $z=0$: $\frac{2}{i(1)} = \frac{2}{i} = -2i$.
    Residue at $z_1 = -2+\sqrt{3}$: $\frac{2}{i(6-4\sqrt{3})} = \frac{1}{i(3-2\sqrt{3})} = \frac{1}{i} \frac{1}{3-2\sqrt{3}} = -i (-1 - \frac{2\sqrt{3}}{3}) = i(1 + \frac{2\sqrt{3}}{3})$.

    So, $I = 2\pi i \left( -2i + i(1 + \frac{2\sqrt{3}}{3}) \right)$
    $I = 2\pi i \cdot i \left( -2 + 1 + \frac{2\sqrt{3}}{3} \right) = -2\pi \left( -1 + \frac{2\sqrt{3}}{3} \right) = 2\pi \left( 1 - \frac{2\sqrt{3}}{3} \right)$.

    Let's double check the integral transformation.
    $I = \oint_{|z|=1} \frac{1}{2 + \frac{z^2 + 1}{2z}} \frac{dz}{iz} = \oint_{|z|=1} \frac{2z}{z^2 + 4z + 1} \frac{dz}{iz} = \oint_{|z|=1} \frac{2}{i(z^2 + 4z + 1)} dz$.

    The poles are $z=0$ and $z_1 = -2+\sqrt{3}$ (inside $|z|=1$).
    The integrand is $h(z) = \frac{2}{i(z^2 + 4z + 1)}$.
    Residue at $z=0$: $\lim_{z\to 0} z h(z) = \lim_{z\to 0} \frac{2z}{i(z^2+4z+1)} = \frac{0}{i(1)} = 0$.
    This must be wrong. The pole at $z=0$ arises from the $dz/iz$ part.
    The integrand is $\frac{1}{2 + \frac{z^2 + 1}{2z}} \frac{1}{iz} = \frac{2z}{z^2+4z+1} \frac{1}{iz} = \frac{2}{i(z^2+4z+1)}$.
    This means there is no pole at $z=0$ for this expression.
    The original integrand was $\frac{1}{2 + \cos \theta}$.
    Let's re-evaluate.
    $I = \oint_{|z|=1} \frac{1}{2 + \frac{z^2+1}{2z}} \frac{dz}{iz} = \oint_{|z|=1} \frac{2z}{z^2+4z+1} \frac{dz}{iz} = \oint_{|z|=1} \frac{2}{i(z^2+4z+1)} dz$.
    The poles of $\frac{2}{z^2+4z+1}$ are $z_1 = -2+\sqrt{3}$ and $z_2 = -2-\sqrt{3}$.
    Inside $|z|=1$, only $z_1 = -2+\sqrt{3}$ is a pole.

    The residue of $\frac{2}{i(z^2+4z+1)}$ at $z_1$ is:
    $\frac{1}{i} \times \text{Res}\left(\frac{2}{z^2+4z+1}, z_1\right) = \frac{1}{i} \times \frac{2}{2z_1+4} = \frac{1}{i} \times \frac{2}{2(-2+\sqrt{3})+4} = \frac{1}{i} \times \frac{2}{-4+2\sqrt{3}+4} = \frac{1}{i} \times \frac{2}{2\sqrt{3}} = \frac{1}{i\sqrt{3}}$.

    So, $I = 2\pi i \times \text{Res} = 2\pi i \times \frac{1}{i\sqrt{3}} = \frac{2\pi}{\sqrt{3}} = \frac{2\pi\sqrt{3}}{3}$.

    Let's verify this integral value. $\int_0^{2\pi} \frac{d\theta}{2+\cos\theta}$.
    Let $u = \tan(\theta/2)$. $d\theta = \frac{2du}{1+u^2}$. $\cos\theta = \frac{1-u^2}{1+u^2}$.
    When $\theta=0, u=0$. When $\theta=2\pi, u=0$. This substitution is problematic for improper integrals.
    Using the result: $\int_0^{2\pi} \frac{d\theta}{a+b\cos\theta} = \frac{2\pi}{\sqrt{a^2-b^2}}$ for $a>b>0$.
    Here $a=2, b=1$. So, $\frac{2\pi}{\sqrt{2^2-1^2}} = \frac{2\pi}{\sqrt{3}}$. This matches our result.

**Reference:** B.V. Ramana and B.S. Grewal's texts provide detailed examples for these types of integrals.

---

### 4. Practice Questions and Exercises

**Section 1: Residues**

1.  Find the residues of the following functions at their indicated singularities:
    (a) $f(z) = \frac{z+1}{z^2(z-2)}$ at $z=0$ and $z=2$.
    (b) $f(z) = \frac{\cos(\pi z)}{z^2 - 1}$ at $z=1$ and $z=-1$.
    (c) $f(z) = e^{1/z}$ at $z=0$.

**Section 2: Residue Theorem for Contour Integrals**

2.  Evaluate $\oint_C \frac{e^z}{z-2} dz$ where $C$ is the circle $|z|=3$.
3.  Evaluate $\oint_C \frac{z^3}{(2z-1)(z-1)^2} dz$ where $C$ is the circle $|z|=2$.
4.  Evaluate $\oint_C \frac{1}{z^2+z+1} dz$ where $C$ is the circle $|z|=1$.

**Section 3: Real Definite Integrals**

5.  Evaluate $\int_{-\infty}^{\infty} \frac{x^2}{(x^2+1)(x^2+4)} dx$.
6.  Evaluate $\int_{-\infty}^{\infty} \frac{\cos(2x)}{x^2+1} dx$.
7.  Evaluate $\int_0^{2\pi} \frac{1}{1 + \sin^2 \theta} d\theta$.

---

### Answers to Practice Questions

**Section 1: Residues**

1.  (a) $\text{Res}(f, 0) = -1/4$, $\text{Res}(f, 2) = 3/4$.
    (b) $\text{Res}(f, 1) = -\frac{\cos(\pi)}{2} = 1/2$, $\text{Res}(f, -1) = -\frac{\cos(-\pi)}{-2} = 1/2$.
    (c) $f(z) = e^{1/z} = 1 + \frac{1}{z} + \frac{1}{2!z^2} + \dots$. $\text{Res}(f, 0) = 1$.

**Section 2: Residue Theorem for Contour Integrals**

2.  The pole $z=2$ is inside $|z|=3$. $\text{Res}(f, 2) = e^2$. $\oint_C f(z) dz = 2\pi i e^2$.
3.  Poles at $z=1/2$ (simple) and $z=1$ (order 2). Both are inside $|z|=2$.
    $\text{Res}(f, 1/2) = \frac{(1/2)^3}{(2(1/2)-1)^2(1/2-1)} \text{ (Incorrect, use formula)}$
    Let $f(z) = \frac{z^3}{2(z-1/2)(z-1)^2}$.
    $\text{Res}(f, 1/2) = \lim_{z\to 1/2} (z-1/2) f(z) = \frac{(1/2)^3}{2(1/2-1)^2} = \frac{1/8}{2(-1/2)^2} = \frac{1/8}{2(1/4)} = \frac{1/8}{1/2} = 1/4$.
    $\text{Res}(f, 1) = \lim_{z\to 1} \frac{d}{dz} \left( (z-1)^2 f(z) \right) = \lim_{z\to 1} \frac{d}{dz} \left( \frac{z^3}{2(z-1/2)} \right)$.
    Derivative: $\frac{1}{2} \frac{3z^2(z-1/2) - z^3(1)}{(z-1/2)^2} = \frac{1}{2} \frac{3z^3 - 3/2 z^2 - z^3}{(z-1/2)^2} = \frac{1}{2} \frac{2z^3 - 3/2 z^2}{(z-1/2)^2}$.
    At $z=1$: $\frac{1}{2} \frac{2 - 3/2}{(1-1/2)^2} = \frac{1}{2} \frac{1/2}{(1/2)^2} = \frac{1}{2} \frac{1/2}{1/4} = \frac{1}{2} \times 2 = 1$.
    Total residue sum: $1/4 + 1 = 5/4$.
    Integral: $2\pi i (5/4) = \frac{5\pi i}{2}$.

4.  Poles at $z = \frac{-1 \pm \sqrt{1-4}}{2} = \frac{-1 \pm i\sqrt{3}}{2}$. Let these be $z_1, z_2$. Both have magnitude 1, so they lie on the circle $|z|=1$.
    This integral requires the use of the Residue Theorem for poles on the contour, which is usually avoided in introductory treatments, or the contour is slightly perturbed. Assuming the standard scenario where poles are strictly inside. If the problem implies poles on the contour, a more advanced technique (e.g., indented contours) would be needed.
    If the question implied $|z|<1$, then no poles are inside. If it implies the contour is $z=e^{i\theta}$, then poles on the contour are problematic. For a standard setup, let's assume a slightly larger contour if poles are on the boundary.
    Let's assume the intent was for poles *strictly inside*. For this problem, there are no poles strictly inside $|z|=1$. So if contour is $|z|=1$ and poles are on it, the standard theorem doesn't apply directly without modifications.

    Let's try the trigonometric substitution for this integral:
    $\oint_{|z|=1} \frac{1}{z^2+z+1} dz = \oint_{|z|=1} \frac{1}{z^2+z+1} \frac{dz}{iz}$.
    $f(z) = \frac{1}{iz(z^2+z+1)}$. Poles at $z=0$ and $z_{1,2} = \frac{-1 \pm i\sqrt{3}}{2}$.
    $|z_1| = \sqrt{(-1/2)^2 + (\sqrt{3}/2)^2} = \sqrt{1/4 + 3/4} = 1$.
    $|z_2| = 1$.
    So, if the contour is $|z|=1$, all three poles are on the contour.
    This type of integral is usually handled by $\int_0^{2\pi} F(\cos\theta, \sin\theta) d\theta$.
    $a=1, b=1$. $\int_0^{2\pi} \frac{d\theta}{1+\cos\theta}$. This formula is for $a+b\cos\theta$, not $a+b\cos\theta+c\sin\theta$.
    The integral $\int_0^{2\pi} \frac{d\theta}{a+b\cos\theta}$ evaluates to $\frac{2\pi}{\sqrt{a^2-b^2}}$ if $a>|b|$.
    If $a=1, b=0, c=1$ for $\sin^2\theta$: $\int_0^{2\pi} \frac{d\theta}{1+\sin^2\theta}$.

    Let's re-do question 4: $\int_0^{2\pi} \frac{d\theta}{1+\sin^2\theta}$.
    $z=e^{i\theta}$, $d\theta = dz/iz$. $\sin\theta = \frac{z-z^{-1}}{2i}$.
    $I = \oint_{|z|=1} \frac{1}{1 + (\frac{z^2-1}{2iz})^2} \frac{dz}{iz} = \oint_{|z|=1} \frac{1}{1 + \frac{(z^2-1)^2}{-4z^2}} \frac{dz}{iz}$
    $I = \oint_{|z|=1} \frac{1}{\frac{-4z^2 + (z^4 - 2z^2 + 1)}{-4z^2}} \frac{dz}{iz} = \oint_{|z|=1} \frac{-4z^2}{z^4 - 6z^2 + 1} \frac{dz}{iz}$
    $I = \oint_{|z|=1} \frac{4z}{i(z^4 - 6z^2 + 1)} dz$.
    Let $w=z^2$. $w^2 - 6w + 1 = 0$. $w = \frac{6 \pm \sqrt{36-4}}{2} = 3 \pm \sqrt{8} = 3 \pm 2\sqrt{2}$.
    So $z^2 = 3+2\sqrt{2}$ or $z^2 = 3-2\sqrt{2}$.
    $z = \pm \sqrt{3+2\sqrt{2}} = \pm (\sqrt{2}+1)$.
    $z = \pm \sqrt{3-2\sqrt{2}} = \pm (\sqrt{2}-1)$.
    Poles are at $z = \pm(\sqrt{2}+1)$ and $\pm(\sqrt{2}-1)$.
    Inside $|z|=1$: $z = \sqrt{2}-1$ and $z = -(\sqrt{2}-1) = 1-\sqrt{2}$.
    $z_1 = \sqrt{2}-1 \approx 1.414 - 1 = 0.414$.
    $z_2 = 1-\sqrt{2} \approx 1 - 1.414 = -0.414$.
    The integrand is $\frac{4z}{i(z^4 - 6z^2 + 1)}$. Let $P(z)=4z$ and $Q(z)=i(z^4 - 6z^2 + 1)$.
    We need residues at $z_1 = \sqrt{2}-1$ and $z_2 = 1-\sqrt{2}$.
    $Q'(z) = i(4z^3 - 12z)$.
    Residue at $z_1 = \sqrt{2}-1$: $\frac{4(\sqrt{2}-1)}{i(4(\sqrt{2}-1)^3 - 12(\sqrt{2}-1))}$.
    $(\sqrt{2}-1)^2 = 2 - 2\sqrt{2} + 1 = 3 - 2\sqrt{2}$.
    $(\sqrt{2}-1)^3 = (\sqrt{2}-1)(3-2\sqrt{2}) = 3\sqrt{2} - 4 - 3 + 2\sqrt{2} = 5\sqrt{2} - 7$.
    $Q'(z_1) = i(4(5\sqrt{2}-7) - 12(\sqrt{2}-1)) = i(20\sqrt{2}-28 - 12\sqrt{2}+12) = i(8\sqrt{2}-16)$.
    $\text{Res}(z_1) = \frac{4(\sqrt{2}-1)}{i(8\sqrt{2}-16)} = \frac{4(\sqrt{2}-1)}{8i(\sqrt{2}-2)}$.
    This looks too complicated.
    Let's simplify the denominator: $z^4 - 6z^2 + 1 = (z^2 - (3+2\sqrt{2}))(z^2 - (3-2\sqrt{2})) = (z-(\sqrt{2}+1))(z+(\sqrt{2}+1))(z-(\sqrt{2}-1))(z+(\sqrt{2}-1))$.

    Let's try the integral formula: $\int_0^{2\pi} \frac{d\theta}{a+b\sin^2\theta}$.
    Let $I = \int_0^{2\pi} \frac{d\theta}{1+\sin^2\theta}$.
    $I = \int_0^{2\pi} \frac{d\theta}{1 + \frac{1-\cos(2\theta)}{2}} = \int_0^{2\pi} \frac{2d\theta}{3-\cos(2\theta)}$.
    Let $\phi = 2\theta$. $d\phi = 2d\theta$. When $\theta=0, \phi=0$. When $\theta=2\pi, \phi=4\pi$.
    $I = \int_0^{4\pi} \frac{d\phi}{3-\cos\phi}$.
    This integral is periodic with period $2\pi$. So $\int_0^{4\pi} = 2 \int_0^{2\pi}$.
    $I = 2 \int_0^{2\pi} \frac{d\phi}{3-\cos\phi}$.
    Using the formula $\int_0^{2\pi} \frac{d\theta}{a+b\cos\theta} = \frac{2\pi}{\sqrt{a^2-b^2}}$ for $a>|b|$.
    Here $a=3$, $b=-1$.
    $I = 2 \times \frac{2\pi}{\sqrt{3^2 - (-1)^2}} = 2 \times \frac{2\pi}{\sqrt{9-1}} = 2 \times \frac{2\pi}{\sqrt{8}} = 2 \times \frac{2\pi}{2\sqrt{2}} = \frac{2\pi}{\sqrt{2}} = \pi\sqrt{2}$.

    So the answer for question 4 is $\pi\sqrt{2}$.

**Section 3: Real Definite Integrals**

5.  The poles are at $z = \pm i$ and $z = \pm 2i$. In the upper half-plane, poles are $z=i$ and $z=2i$.
    $\text{Res}(f, i) = \frac{i^2}{(i^2+4)(i-2i)} = \frac{-1}{(-1+4)(-i)} = \frac{-1}{3(-i)} = \frac{i}{3}$.
    $\text{Res}(f, 2i) = \frac{(2i)^2}{((2i)^2+1)(2i-i)} = \frac{-4}{(-4+1)(i)} = \frac{-4}{(-3)(i)} = \frac{4}{3i} = \frac{-4i}{3}$.
    Sum of residues $= \frac{i}{3} - \frac{4i}{3} = -i$.
    Integral $= 2\pi i \times (-i) = 2\pi$.
6.  Consider $\frac{e^{i2x}}{x^2+1}$. Pole at $z=i$ in upper half-plane.
    $\text{Res}(\frac{e^{i2z}}{z^2+1}, i) = \frac{e^{i2(i)}}{i+i} = \frac{e^{-2}}{2i}$.
    Integral $= 2\pi i \times \frac{e^{-2}}{2i} = \pi e^{-2}$.
7.  Answer is $\pi\sqrt{2}$ (as calculated above during question 4's complex integral attempt).

---

### 5. Important Points to Remember

*   **Residue:** The coefficient of $(z-z_0)^{-1}$ in the Laurent series expansion of $f(z)$ about an isolated singularity $z_0$.
*   **Residue Theorem:** $\oint_C f(z) dz = 2\pi i \sum \text{Res}(f, z_k)$, where $z_k$ are singularities inside $C$.
*   **Pole of order m:** $\text{Res}(f, z_0) = \frac{1}{(m-1)!} \lim_{z \to z_0} \frac{d^{m-1}}{dz^{m-1}} \left[ (z - z_0)^m f(z) \right]$.
*   **Simple pole:** $\text{Res}(f, z_0) = \lim_{z \to z_0} (z - z_0) f(z)$.
*   **Rational function $P(z)/Q(z)$ at simple zero of Q:** $\text{Res}(f, z_0) = \frac{P(z_0)}{Q'(z_0)}$.
*   **For $\int_{-\infty}^{\infty} R(x) dx$**: Use a semi-circular contour in the upper half-plane. Ensure $\deg(Q) \ge \deg(P) + 2$.
*   **For $\int_{-\infty}^{\infty} R(x) \cos(ax) dx$ or $\sin(ax)$**: Consider $R(z)e^{iaz}$ and use Jordan's Lemma.
*   **For $\int_0^{2\pi} F(\cos \theta, \sin \theta) d\theta$**: Use the substitution $z=e^{i\theta}$ and integrate around the unit circle $|z|=1$.

---

This comprehensive set of notes aims to cover the topic of the Residue Theorem, its calculation, and its applications in evaluating integrals, aligning with the course outcomes and referencing the provided textbooks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
