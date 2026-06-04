---
title: "Residue theorem (without proof)"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 4: Taylor series and Maclaurin series"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35a82"
status: "completed"
scrapedAt: "2026-05-23T16:14:52.547Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 4: Taylor Series and Maclaurin Series

### Topic: Residue Theorem (Without Proof)

**Course Outcomes Addressed:**

*   **CO4:** Understand the series expansion of complex function about a singularity and apply residue theorem to compute real integrals. (Knowledge Level: K3)

**Learning Outcomes:**

Upon completion of this topic, you will be able to:

*   Identify isolated singularities of a complex function.
*   Classify isolated singularities as removable singularities, poles, or essential singularities.
*   Determine the residue of a complex function at an isolated singularity.
*   Apply the Residue Theorem to evaluate complex contour integrals.
*   Apply the Residue Theorem to evaluate certain types of real definite integrals.

---

### 1. Introduction to Singularities

In complex analysis, a **singularity** of a complex function $f(z)$ is a point $z_0$ where the function is not analytic. Isolated singularities are of particular interest.

**Definition:** An **isolated singularity** of a function $f(z)$ is a point $z_0$ such that $f(z)$ is analytic in a deleted neighborhood of $z_0$ (i.e., in the region $0 < |z - z_0| < R$ for some $R > 0$), but not analytic at $z_0$.

**Example:** The function $f(z) = \frac{1}{z}$ has an isolated singularity at $z_0 = 0$. The function $f(z) = \frac{\sin z}{z}$ has an isolated singularity at $z_0 = 0$. The function $f(z) = e^{1/z}$ has an isolated singularity at $z_0 = 0$.

---

### 2. Classification of Isolated Singularities

The behavior of a function $f(z)$ in a deleted neighborhood of an isolated singularity $z_0$ can be understood by its **Laurent series expansion**.

**Laurent Series:** For a function $f(z)$ analytic in an annulus $r < |z - z_0| < R$, its Laurent series expansion about $z_0$ is given by:

$$f(z) = \sum_{n=-\infty}^{\infty} a_n (z - z_0)^n = \dots + \frac{a_{-2}}{(z - z_0)^2} + \frac{a_{-1}}{z - z_0} + a_0 + a_1(z - z_0) + a_2(z - z_0)^2 + \dots$$

The part of the series with negative powers of $(z - z_0)$ is called the **principal part**. The classification of the isolated singularity $z_0$ depends on the principal part of the Laurent series.

**Types of Isolated Singularities:**

1.  **Removable Singularity:** If the principal part of the Laurent series expansion of $f(z)$ about $z_0$ contains only finitely many terms (i.e., $a_n = 0$ for all $n < 0$ and $a_{-1} = a_{-2} = \dots = 0$), then $z_0$ is a removable singularity. In this case, $f(z)$ can be made analytic at $z_0$ by defining $f(z_0) = a_0$.

    *   **Kreyszig (10th ed.):** Section 13.3 discusses removable singularities and Laurent series.
    *   **Zill & Shanahan (3rd ed.):** Chapter 7 covers Laurent series and singularity classification.

    **Example:** $f(z) = \frac{\sin z}{z}$. The Laurent series around $z=0$ is $1 - \frac{z^2}{3!} + \frac{z^4}{5!} - \dots$. Here, all coefficients $a_n$ for $n < 0$ are zero. Thus, $z=0$ is a removable singularity.

2.  **Pole:** If the principal part of the Laurent series expansion of $f(z)$ about $z_0$ contains finitely many terms, and the lowest power of $(z - z_0)$ is negative (i.e., $a_{-m} \neq 0$ for some positive integer $m$, and $a_n = 0$ for all $n < -m$), then $z_0$ is a pole of **order $m$**.

    *   **Kreyszig (10th ed.):** Section 13.3 defines poles and their orders.
    *   **Zill & Shanahan (3rd ed.):** Chapter 7 also covers poles.

    **Example:** $f(z) = \frac{1}{z^3(z-1)^2}$. The point $z_0 = 0$ is a pole of order 3. The point $z_0 = 1$ is a pole of order 2.

    **Characteristic of a Pole of Order m:** A point $z_0$ is a pole of order $m$ for $f(z)$ if and only if $\lim_{z \to z_0} (z - z_0)^m f(z) = L$, where $L$ is a finite non-zero complex number.

3.  **Essential Singularity:** If the principal part of the Laurent series expansion of $f(z)$ about $z_0$ contains infinitely many terms (i.e., $a_n \neq 0$ for infinitely many negative integers $n$), then $z_0$ is an essential singularity.

    *   **Kreyszig (10th ed.):** Section 13.3 describes essential singularities.
    *   **Zill & Shanahan (3rd ed.):** Chapter 7 includes essential singularities.

    **Example:** $f(z) = e^{1/z}$. The Laurent series around $z=0$ is $1 + \frac{1}{z} + \frac{1}{2!z^2} + \frac{1}{3!z^3} + \dots$. Since there are infinitely many non-zero terms in the principal part, $z=0$ is an essential singularity.

---

### 3. The Residue of a Function at an Isolated Singularity

The **residue** of a complex function $f(z)$ at an isolated singularity $z_0$ is the coefficient of the term $(z - z_0)^{-1}$ in its Laurent series expansion about $z_0$. It is denoted by $\text{Res}(f, z_0)$ or $\text{Res}_{z=z_0} f(z)$.

$$f(z) = \sum_{n=-\infty}^{\infty} a_n (z - z_0)^n \implies \text{Res}(f, z_0) = a_{-1}$$

**Importance of the Residue:** The residue is crucial for evaluating complex integrals and real integrals.

**Methods for Calculating Residues:**

1.  **From the Laurent Series:** If the Laurent series expansion about $z_0$ is known, the residue is simply the coefficient $a_{-1}$.

2.  **For a Pole of Order $m$:** If $z_0$ is a pole of order $m$, the residue can be calculated using the formula:

    $$\text{Res}(f, z_0) = \frac{1}{(m-1)!} \lim_{z \to z_0} \frac{d^{m-1}}{dz^{m-1}} \left[ (z - z_0)^m f(z) \right]$$

    *   **Special Case: Simple Pole (m=1):** If $z_0$ is a simple pole (pole of order 1), the formula simplifies to:

        $$\text{Res}(f, z_0) = \lim_{z \to z_0} (z - z_0) f(z)$$

    *   **Kreyszig (10th ed.):** Section 13.4 provides formulas for calculating residues at poles.
    *   **Zill & Shanahan (3rd ed.):** Chapter 7, Section 7.3, covers calculating residues.
    *   **Ramana (39th ed.):** Chapter 26, Section 26.2, deals with residues and their calculation.
    *   **Grewal (44th ed.):** Chapter 14, Section 14.11, covers the calculation of residues.

**Example 1: Simple Pole**

Find the residue of $f(z) = \frac{1}{z(z-2)}$ at $z=0$ and $z=2$.

*   At $z=0$, it's a simple pole.
    $\text{Res}(f, 0) = \lim_{z \to 0} (z - 0) f(z) = \lim_{z \to 0} z \frac{1}{z(z-2)} = \lim_{z \to 0} \frac{1}{z-2} = -\frac{1}{2}$.

*   At $z=2$, it's a simple pole.
    $\text{Res}(f, 2) = \lim_{z \to 2} (z - 2) f(z) = \lim_{z \to 2} (z - 2) \frac{1}{z(z-2)} = \lim_{z \to 2} \frac{1}{z} = \frac{1}{2}$.

**Example 2: Pole of Order 2**

Find the residue of $f(z) = \frac{e^z}{z^2}$ at $z=0$.

*   Here, $z=0$ is a pole of order $m=2$.
    $\text{Res}(f, 0) = \frac{1}{(2-1)!} \lim_{z \to 0} \frac{d}{dz} \left[ (z - 0)^2 f(z) \right]$
    $\text{Res}(f, 0) = 1! \lim_{z \to 0} \frac{d}{dz} \left[ z^2 \frac{e^z}{z^2} \right] = \lim_{z \to 0} \frac{d}{dz} (e^z)$
    $\text{Res}(f, 0) = \lim_{z \to 0} e^z = e^0 = 1$.

**Example 3: Pole of Order 3**

Find the residue of $f(z) = \frac{\cos z}{z^3}$ at $z=0$.

*   Here, $z=0$ is a pole of order $m=3$.
    $\text{Res}(f, 0) = \frac{1}{(3-1)!} \lim_{z \to 0} \frac{d^2}{dz^2} \left[ (z - 0)^3 f(z) \right]$
    $\text{Res}(f, 0) = \frac{1}{2} \lim_{z \to 0} \frac{d^2}{dz^2} \left[ z^3 \frac{\cos z}{z^3} \right] = \frac{1}{2} \lim_{z \to 0} \frac{d^2}{dz^2} (\cos z)$
    $\frac{d}{dz}(\cos z) = -\sin z$
    $\frac{d^2}{dz^2}(\cos z) = -\cos z$
    $\text{Res}(f, 0) = \frac{1}{2} \lim_{z \to 0} (-\cos z) = \frac{1}{2} (-\cos 0) = -\frac{1}{2}$.

**3.1 Residue at Infinity**

The residue at infinity for a function $f(z)$ is defined as:

$$\text{Res}(f, \infty) = -\text{Res}_{z=0} \left( \frac{1}{z^2} f\left(\frac{1}{z}\right) \right)$$

This is useful in some contour integration techniques.

---

### 4. The Residue Theorem

The Residue Theorem is a powerful tool for evaluating complex contour integrals.

**Statement of the Residue Theorem (Without Proof):**

Let $f(z)$ be analytic inside and on a simple closed contour $C$, except for a finite number of isolated singularities $z_1, z_2, \dots, z_n$ inside $C$. Then, the integral of $f(z)$ around $C$ is given by:

$$\oint_C f(z) dz = 2\pi i \sum_{k=1}^n \text{Res}(f, z_k)$$

where $\text{Res}(f, z_k)$ is the residue of $f(z)$ at the singularity $z_k$ inside $C$.

*   **Kreyszig (10th ed.):** Section 13.4 presents the Residue Theorem.
*   **Zill & Shanahan (3rd ed.):** Chapter 7, Section 7.3, states and applies the Residue Theorem.
*   **Ramana (39th ed.):** Chapter 26, Section 26.3, covers the Residue Theorem.
*   **Grewal (44th ed.):** Chapter 14, Section 14.12, states the Residue Theorem.

**Important Points:**

*   The theorem only considers singularities *inside* the contour $C$.
*   The contour $C$ must be simple (not self-intersecting) and closed.
*   The orientation of the contour (usually counterclockwise) is accounted for by the $2\pi i$ factor.

**Example: Evaluating a Contour Integral**

Evaluate $\oint_C \frac{1}{z^2 - 1} dz$, where $C$ is the circle $|z| = 2$ traversed counterclockwise.

1.  **Identify the integrand and the contour:**
    $f(z) = \frac{1}{z^2 - 1} = \frac{1}{(z-1)(z+1)}$.
    $C$ is the circle $|z| = 2$.

2.  **Find the singularities of $f(z)$:**
    The singularities are at $z=1$ and $z=-1$.

3.  **Check if the singularities are inside the contour:**
    Both $z=1$ and $z=-1$ have $|1| < 2$ and $|-1| < 2$, so they are inside the circle $|z|=2$.

4.  **Determine the nature of the singularities:**
    Both $z=1$ and $z=-1$ are simple poles.

5.  **Calculate the residues at the interior singularities:**
    *   At $z=1$: $\text{Res}(f, 1) = \lim_{z \to 1} (z-1) \frac{1}{(z-1)(z+1)} = \lim_{z \to 1} \frac{1}{z+1} = \frac{1}{2}$.
    *   At $z=-1$: $\text{Res}(f, -1) = \lim_{z \to -1} (z+1) \frac{1}{(z-1)(z+1)} = \lim_{z \to -1} \frac{1}{z-1} = -\frac{1}{2}$.

6.  **Apply the Residue Theorem:**
    $\oint_C f(z) dz = 2\pi i (\text{Res}(f, 1) + \text{Res}(f, -1))$
    $\oint_C f(z) dz = 2\pi i \left(\frac{1}{2} + (-\frac{1}{2})\right) = 2\pi i (0) = 0$.

---

### 5. Applications to Real Integrals

The Residue Theorem is a powerful tool for evaluating certain types of real definite integrals, particularly those involving rational functions and trigonometric functions, which can be transformed into complex contour integrals.

**Type 1: Integrals of the form $\int_{-\infty}^{\infty} f(x) dx$ where $f(x)$ is a rational function.**

Consider integrals of the form $\int_{-\infty}^{\infty} f(x) dx$, where $f(x)$ is a rational function such that:
1.  $f(z)$ is analytic everywhere on the real axis.
2.  $f(z)$ has a finite number of poles, none of which lie on the real axis.
3.  $|f(z)| \le \frac{M}{|z|^2}$ for large $|z|$, where $M$ is a positive constant.

We can evaluate this integral by considering the contour $C$ consisting of the interval $[-R, R]$ on the real axis and a semi-circle $\Gamma_R$ of radius $R$ in the upper half-plane, where $R$ is sufficiently large to enclose all poles in the upper half-plane.

**$\oint_C f(z) dz = \int_{-R}^{R} f(x) dx + \int_{\Gamma_R} f(z) dz$**

By the Residue Theorem:
**$\oint_C f(z) dz = 2\pi i \sum (\text{residues of } f(z) \text{ in the upper half-plane})$**

As $R \to \infty$, under condition 3, the integral over the semi-circle $\Gamma_R$ tends to zero ($\lim_{R \to \infty} \int_{\Gamma_R} f(z) dz = 0$).
Therefore, $\int_{-\infty}^{\infty} f(x) dx = 2\pi i \sum (\text{residues of } f(z) \text{ in the upper half-plane})$.

*   **Kreyszig (10th ed.):** Section 13.5 deals with applications to real integrals.
*   **Zill & Shanahan (3rd ed.):** Chapter 7, Section 7.4, discusses the evaluation of real integrals.
*   **Ramana (39th ed.):** Chapter 26, Section 26.4, covers definite integrals using residue theory.
*   **Grewal (44th ed.):** Chapter 14, Section 14.13, applies the Residue Theorem to real integrals.

**Example: Evaluating $\int_{-\infty}^{\infty} \frac{1}{x^2 + 1} dx$**

1.  **Identify the integrand and the contour:**
    $f(z) = \frac{1}{z^2 + 1}$. The contour is a large semi-circle in the upper half-plane.

2.  **Find singularities and check conditions:**
    $z^2 + 1 = 0 \implies z^2 = -1 \implies z = i, -i$.
    The poles are $i$ and $-i$. Neither lies on the real axis.
    For large $|z|$, $|f(z)| = \frac{1}{|z^2 + 1|} \approx \frac{1}{|z|^2}$. This satisfies $|f(z)| \le \frac{M}{|z|^2}$.
    The only pole in the upper half-plane is $z = i$.

3.  **Calculate the residue at the interior singularity ($z=i$):**
    $z=i$ is a simple pole.
    $\text{Res}(f, i) = \lim_{z \to i} (z - i) \frac{1}{(z-i)(z+i)} = \lim_{z \to i} \frac{1}{z+i} = \frac{1}{i+i} = \frac{1}{2i}$.

4.  **Apply the Residue Theorem:**
    $\int_{-\infty}^{\infty} \frac{1}{x^2 + 1} dx = 2\pi i \times \text{Res}(f, i) = 2\pi i \times \frac{1}{2i} = \pi$.

**Type 2: Integrals of the form $\int_{0}^{2\pi} F(\cos \theta, \sin \theta) d\theta$.**

These integrals can be transformed into complex contour integrals by the substitution:
*   $z = e^{i\theta}$
*   $d\theta = \frac{dz}{iz}$
*   $\cos \theta = \frac{z + z^{-1}}{2}$
*   $\sin \theta = \frac{z - z^{-1}}{2i}$

The contour $C$ is the unit circle $|z|=1$. The integral becomes:
$\oint_C F\left(\frac{z + z^{-1}}{2}, \frac{z - z^{-1}}{2i}\right) \frac{dz}{iz}$

The poles of the integrand must be analyzed to determine which lie inside the unit circle.

**Example: Evaluating $\int_{0}^{2\pi} \frac{1}{a + b\cos \theta} d\theta$, where $a > |b| > 0$.**

1.  **Transform the integral:**
    $z = e^{i\theta}$, $d\theta = \frac{dz}{iz}$, $\cos \theta = \frac{z + 1/z}{2}$.
    The integral becomes:
    $\oint_{|z|=1} \frac{1}{a + b\left(\frac{z + 1/z}{2}\right)} \frac{dz}{iz} = \oint_{|z|=1} \frac{1}{a + \frac{b}{2}(z + \frac{1}{z})} \frac{dz}{iz}$
    $= \oint_{|z|=1} \frac{1}{\frac{2az + bz^2 + b}{2z}} \frac{dz}{iz} = \oint_{|z|=1} \frac{2z}{bz^2 + 2az + b} \frac{dz}{iz}$
    $= \frac{2}{ib} \oint_{|z|=1} \frac{1}{z^2 + \frac{2a}{b}z + 1} dz$

2.  **Find the singularities of the integrand:**
    The denominator is $z^2 + \frac{2a}{b}z + 1$. The roots are given by the quadratic formula:
    $z = \frac{-\frac{2a}{b} \pm \sqrt{(\frac{2a}{b})^2 - 4}}{2} = \frac{-\frac{2a}{b} \pm 2\sqrt{\frac{a^2}{b^2} - 1}}{2} = -\frac{a}{b} \pm \sqrt{\frac{a^2}{b^2} - 1}$
    Let $z_1 = -\frac{a}{b} + \sqrt{\frac{a^2}{b^2} - 1}$ and $z_2 = -\frac{a}{b} - \sqrt{\frac{a^2}{b^2} - 1}$.
    We know that for $a > |b| > 0$, the product of the roots $z_1 z_2 = 1$.
    Also, since $a > |b|$, $\frac{a}{b} > 1$.
    $z_1 = -\frac{a}{b} + \sqrt{\frac{a^2-b^2}{b^2}} = \frac{-a + \sqrt{a^2-b^2}}{b}$.
    Since $a > \sqrt{a^2-b^2}$, the numerator is negative. If $b>0$, $z_1$ is negative. If $b<0$, $z_1$ is positive.
    However, we are interested in $|z_1|$.
    $|z_1| = \left| \frac{-a + \sqrt{a^2-b^2}}{b} \right|$.
    If $b > 0$, $|z_1| = \frac{a - \sqrt{a^2-b^2}}{b}$. Since $a > \sqrt{a^2-b^2}$, this is positive.
    Also, $\frac{a - \sqrt{a^2-b^2}}{b} \times \frac{a + \sqrt{a^2-b^2}}{a + \sqrt{a^2-b^2}} = \frac{a^2 - (a^2-b^2)}{b(a + \sqrt{a^2-b^2})} = \frac{b^2}{b(a + \sqrt{a^2-b^2})} = \frac{b}{a + \sqrt{a^2-b^2}}$.
    So, $|z_1| \times |z_2| = 1$. If $|z_1| < 1$, then $|z_2| > 1$.
    Consider $z_1 = \frac{-a + \sqrt{a^2-b^2}}{b}$.
    If $b>0$, $z_1 = \frac{-a + \sqrt{a^2-b^2}}{b}$. Since $a > \sqrt{a^2-b^2}$, $-a + \sqrt{a^2-b^2}$ is negative.
    $a > |b| \implies \frac{a}{b} > 1$ (if $b>0$).
    $z_1 = -\frac{a}{b} + \sqrt{\frac{a^2}{b^2} - 1}$. Since $\frac{a^2}{b^2} > 1$, $\sqrt{\frac{a^2}{b^2} - 1} > 0$.
    Also, $\frac{a}{b} > \sqrt{\frac{a^2}{b^2} - 1}$ because $\frac{a^2}{b^2} > \frac{a^2}{b^2} - 1$.
    Therefore, $-\frac{a}{b} + \sqrt{\frac{a^2}{b^2} - 1}$ is negative.
    $|z_1| = \frac{a - \sqrt{a^2-b^2}}{b}$.
    We need to show this is less than 1.
    $\frac{a - \sqrt{a^2-b^2}}{b} < 1 \iff a - \sqrt{a^2-b^2} < b$ (since $b>0$)
    $\iff a - b < \sqrt{a^2-b^2}$. Since $a > b$, $a-b > 0$. Squaring both sides:
    $(a-b)^2 < a^2 - b^2 \iff a^2 - 2ab + b^2 < a^2 - b^2 \iff -2ab < -2b^2 \iff ab > b^2$.
    Since $b > 0$, this means $a > b$, which is given.
    So, $z_1$ is inside the unit circle.

3.  **Calculate the residue at $z_1$:**
    The integrand is $g(z) = \frac{1}{z^2 + \frac{2a}{b}z + 1}$. $z_1$ is a simple pole.
    $\text{Res}(g, z_1) = \lim_{z \to z_1} (z - z_1) \frac{1}{(z - z_1)(z - z_2)} = \frac{1}{z_1 - z_2}$
    $z_1 - z_2 = \left(-\frac{a}{b} + \sqrt{\frac{a^2}{b^2} - 1}\right) - \left(-\frac{a}{b} - \sqrt{\frac{a^2}{b^2} - 1}\right) = 2\sqrt{\frac{a^2}{b^2} - 1} = \frac{2\sqrt{a^2 - b^2}}{b}$.
    $\text{Res}(g, z_1) = \frac{1}{\frac{2\sqrt{a^2 - b^2}}{b}} = \frac{b}{2\sqrt{a^2 - b^2}}$.

4.  **Apply the Residue Theorem:**
    The integral is $\frac{2}{ib} \oint_{|z|=1} g(z) dz = \frac{2}{ib} \times 2\pi i \times \text{Res}(g, z_1)$
    $= \frac{4\pi}{b} \times \frac{b}{2\sqrt{a^2 - b^2}} = \frac{2\pi}{\sqrt{a^2 - b^2}}$.

    This matches the known result.

**Type 3: Integrals of the form $\int_{-\infty}^{\infty} f(x) \cos(ax) dx$ or $\int_{-\infty}^{\infty} f(x) \sin(ax) dx$.**

These are evaluated by considering $f(z)e^{iaz}$ or $f(z)e^{-iaz}$ and using the same semi-circular contour. We take the real or imaginary part of the resulting integral. For $e^{iaz}$ with $a>0$, the contour is in the upper half-plane. For $e^{-iaz}$ with $a>0$, the contour is in the lower half-plane, and we need to consider the orientation and sign of residues.

**Example: Evaluating $\int_{-\infty}^{\infty} \frac{\cos x}{x^2 + 1} dx$**

1.  **Consider the complex function:** $f(z) = \frac{e^{iz}}{z^2 + 1}$.
    The integral is the real part of $\int_{-\infty}^{\infty} \frac{e^{ix}}{x^2+1} dx$.

2.  **Singularities:** $z = i, -i$.
    The pole in the upper half-plane is $z=i$.

3.  **Residue at $z=i$:**
    $\text{Res}\left(\frac{e^{iz}}{z^2 + 1}, i\right) = \lim_{z \to i} (z-i) \frac{e^{iz}}{(z-i)(z+i)} = \lim_{z \to i} \frac{e^{iz}}{z+i} = \frac{e^{i(i)}}{i+i} = \frac{e^{-1}}{2i}$.

4.  **Apply the Residue Theorem:**
    $\int_{-\infty}^{\infty} \frac{e^{ix}}{x^2+1} dx = 2\pi i \times \text{Res}\left(\frac{e^{iz}}{z^2 + 1}, i\right) = 2\pi i \times \frac{e^{-1}}{2i} = \frac{\pi}{e}$.

5.  **Take the real part:**
    $\int_{-\infty}^{\infty} \frac{\cos x}{x^2 + 1} dx = \text{Re}\left(\frac{\pi}{e}\right) = \frac{\pi}{e}$.

---

### 6. Practice Questions

1.  **Identify the isolated singularities of the following functions and classify them:**
    a) $f(z) = \frac{z}{z^2 - 4}$
    b) $f(z) = \frac{\sin z}{z^2}$
    c) $f(z) = e^{1/(z-1)}$
    d) $f(z) = \frac{1}{(z-2)^3(z+1)}$

2.  **Calculate the residue of the following functions at the specified singularities:**
    a) $f(z) = \frac{z+1}{z(z-2)}$ at $z=0$ and $z=2$.
    b) $f(z) = \frac{e^{-z}}{z^2}$ at $z=0$.
    c) $f(z) = \frac{\cos(\pi z)}{z^2 - 1}$ at $z=1$.
    d) $f(z) = \frac{1}{z^3(z^2+4)}$ at $z=0$ and $z=2i$.

3.  **Evaluate the following contour integrals:**
    a) $\oint_C \frac{1}{z^2-z} dz$, where $C$ is the circle $|z|=1/2$.
    b) $\oint_C \frac{e^z}{z(z-1)} dz$, where $C$ is the circle $|z|=2$.
    c) $\oint_C \frac{1}{z^3(z-2)} dz$, where $C$ is the circle $|z|=3$.

4.  **Evaluate the following real integrals using the Residue Theorem:**
    a) $\int_{-\infty}^{\infty} \frac{x^2}{x^4 + 1} dx$
    b) $\int_{0}^{2\pi} \frac{d\theta}{2 + \cos \theta}$
    c) $\int_{-\infty}^{\infty} \frac{\cos(2x)}{x^2 + 4} dx$

---

### 7. Answers to Practice Questions

1.  **Singularities and Classification:**
    a) $f(z) = \frac{z}{(z-2)(z+2)}$. Simple poles at $z=2$ and $z=-2$.
    b) $f(z) = \frac{\sin z}{z^2}$. Removable singularity at $z=0$ (since $\sin z = z - z^3/3! + \dots$, $f(z) = 1/z - z/3! + \dots$).
    c) $f(z) = e^{1/(z-1)}$. Essential singularity at $z=1$.
    d) $f(z) = \frac{1}{(z-2)^3(z+1)}$. Pole of order 3 at $z=2$, simple pole at $z=-1$.

2.  **Residue Calculations:**
    a) At $z=0$: $\text{Res}(f, 0) = \lim_{z \to 0} z \frac{z+1}{z(z-2)} = \lim_{z \to 0} \frac{z+1}{z-2} = -\frac{1}{2}$.
       At $z=2$: $\text{Res}(f, 2) = \lim_{z \to 2} (z-2) \frac{z+1}{z(z-2)} = \lim_{z \to 2} \frac{z+1}{z} = \frac{3}{2}$.
    b) $f(z) = \frac{e^{-z}}{z^2}$. Pole of order 2 at $z=0$.
       $\text{Res}(f, 0) = \frac{1}{(2-1)!} \lim_{z \to 0} \frac{d}{dz} (z^2 \frac{e^{-z}}{z^2}) = \lim_{z \to 0} (-e^{-z}) = -e^0 = -1$.
    c) $f(z) = \frac{\cos(\pi z)}{(z-1)(z+1)}$. At $z=1$, simple pole.
       $\text{Res}(f, 1) = \lim_{z \to 1} (z-1) \frac{\cos(\pi z)}{(z-1)(z+1)} = \lim_{z \to 1} \frac{\cos(\pi z)}{z+1} = \frac{\cos(\pi)}{1+1} = \frac{-1}{2}$.
    d) $f(z) = \frac{1}{z^3(z^2+4)}$. At $z=0$, pole of order 3.
       $\text{Res}(f, 0) = \frac{1}{2!} \lim_{z \to 0} \frac{d^2}{dz^2} (z^3 \frac{1}{z^3(z^2+4)}) = \frac{1}{2} \lim_{z \to 0} \frac{d^2}{dz^2} (\frac{1}{z^2+4})$.
       $\frac{d}{dz}(z^2+4)^{-1} = -1(z^2+4)^{-2}(2z) = -2z(z^2+4)^{-2}$.
       $\frac{d^2}{dz^2}(z^2+4)^{-1} = \frac{d}{dz}(-2z(z^2+4)^{-2}) = -2(z^2+4)^{-2} - 2z(-2)(z^2+4)^{-3}(2z)$
       $= -2(z^2+4)^{-2} + 8z^2(z^2+4)^{-3} = (z^2+4)^{-3} [-2(z^2+4) + 8z^2]$
       $= (z^2+4)^{-3} [-2z^2 - 8 + 8z^2] = (z^2+4)^{-3} [6z^2 - 8]$.
       $\text{Res}(f, 0) = \frac{1}{2} \lim_{z \to 0} \frac{6z^2 - 8}{(z^2+4)^3} = \frac{1}{2} \frac{-8}{4^3} = \frac{1}{2} \frac{-8}{64} = -\frac{1}{16}$.
       At $z=2i$, simple pole.
       $\text{Res}(f, 2i) = \lim_{z \to 2i} (z-2i) \frac{1}{z^3(z-2i)(z+2i)} = \lim_{z \to 2i} \frac{1}{z^3(z+2i)} = \frac{1}{(2i)^3(2i+2i)} = \frac{1}{-8i(4i)} = \frac{1}{-32i^2} = \frac{1}{32}$.

3.  **Contour Integrals:**
    a) Singularities at $z=0, 1$. Both are simple poles. For $|z|=1/2$, only $z=0$ is inside.
       $\text{Res}(f, 0) = \lim_{z \to 0} z \frac{1}{z(z-1)} = \lim_{z \to 0} \frac{1}{z-1} = -1$.
       Integral $= 2\pi i (-1) = -2\pi i$.
    b) Singularities at $z=0, 1$. Both are simple poles and inside $|z|=2$.
       $\text{Res}(f, 0) = \lim_{z \to 0} z \frac{e^z}{z(z-1)} = \lim_{z \to 0} \frac{e^z}{z-1} = \frac{1}{-1} = -1$.
       $\text{Res}(f, 1) = \lim_{z \to 1} (z-1) \frac{e^z}{z(z-1)} = \lim_{z \to 1} \frac{e^z}{z} = \frac{e^1}{1} = e$.
       Integral $= 2\pi i (-1 + e) = 2\pi i (e-1)$.
    c) Singularities at $z=0$ (order 3) and $z=2$ (simple pole). Both are inside $|z|=3$.
       $\text{Res}(f, 0) = -\frac{1}{16}$ (from Q2d).
       $\text{Res}(f, 2) = \lim_{z \to 2} (z-2) \frac{1}{z^3(z-2)(z+2)} = \lim_{z \to 2} \frac{1}{z^3(z+2)} = \frac{1}{2^3(2+2)} = \frac{1}{8(4)} = \frac{1}{32}$.
       Integral $= 2\pi i (-\frac{1}{16} + \frac{1}{32}) = 2\pi i (-\frac{2}{32} + \frac{1}{32}) = 2\pi i (-\frac{1}{32}) = -\frac{\pi i}{16}$.

4.  **Real Integrals:**
    a) $\int_{-\infty}^{\infty} \frac{x^2}{x^4 + 1} dx$. Poles of $f(z) = \frac{z^2}{z^4+1}$ are roots of $z^4 = -1 = e^{i(\pi + 2k\pi)}$.
       $z = e^{i(\pi/4, 3\pi/4, 5\pi/4, 7\pi/4)}$.
       Poles in the upper half-plane: $z_1 = e^{i\pi/4} = \frac{1}{\sqrt{2}}(1+i)$ and $z_2 = e^{i3\pi/4} = \frac{1}{\sqrt{2}}(-1+i)$.
       Residues: $\text{Res}(f, z_k) = \frac{z_k^2}{4z_k^3} = \frac{1}{4z_k}$.
       $\text{Res}(f, z_1) = \frac{1}{4e^{i\pi/4}}$ and $\text{Res}(f, z_2) = \frac{1}{4e^{i3\pi/4}}$.
       Sum of residues $= \frac{1}{4} (e^{-i\pi/4} + e^{-i3\pi/4}) = \frac{1}{4} (\frac{1-i}{\sqrt{2}} + \frac{-1-i}{\sqrt{2}}) = \frac{1}{4\sqrt{2}} (1-i-1-i) = \frac{1}{4\sqrt{2}}(-2i) = -\frac{i}{2\sqrt{2}}$.
       Integral $= 2\pi i \times (-\frac{i}{2\sqrt{2}}) = \frac{\pi}{\sqrt{2}}$.
    b) $\int_{0}^{2\pi} \frac{d\theta}{2 + \cos \theta}$. From example calculation, $\frac{2\pi}{\sqrt{2^2 - 1^2}} = \frac{2\pi}{\sqrt{3}}$.
    c) $\int_{-\infty}^{\infty} \frac{\cos(2x)}{x^2 + 4} dx$. Consider $\frac{e^{2iz}}{z^2+4}$. Poles are $z=2i, -2i$. Pole in upper half-plane is $z=2i$.
       $\text{Res}\left(\frac{e^{2iz}}{z^2+4}, 2i\right) = \lim_{z \to 2i} (z-2i) \frac{e^{2iz}}{(z-2i)(z+2i)} = \lim_{z \to 2i} \frac{e^{2iz}}{z+2i} = \frac{e^{2i(2i)}}{2i+2i} = \frac{e^{-4}}{4i}$.
       Integral $= 2\pi i \times \frac{e^{-4}}{4i} = \frac{\pi e^{-4}}{2}$.

---

### 8. Important Points to Remember

*   **Singularities:** A point where a function is not analytic. Isolated singularities are points $z_0$ where the function is analytic in a deleted neighborhood $0 < |z-z_0| < R$ but not at $z_0$.
*   **Laurent Series:** Essential for understanding singularities. The coefficients of negative powers of $(z-z_0)$ determine the type of singularity.
*   **Residue:** The coefficient $a_{-1}$ of the $(z-z_0)^{-1}$ term in the Laurent series.
*   **Methods for Residues:** Direct from Laurent series, or using formulas for poles of order $m$. For simple poles, $\lim_{z \to z_0} (z-z_0)f(z)$. For poles of order $m$, $\frac{1}{(m-1)!} \lim_{z \to z_0} \frac{d^{m-1}}{dz^{m-1}}[(z-z_0)^m f(z)]$.
*   **Residue Theorem:** $\oint_C f(z) dz = 2\pi i \sum (\text{residues inside } C)$. Crucial for evaluating integrals.
*   **Real Integrals:** Many definite integrals can be converted to contour integrals.
    *   $\int_{-\infty}^{\infty} f(x) dx \approx \oint_{C_{upper}} f(z) dz$ (if $|f(z)| \le M/|z|^2$).
    *   $\int_{0}^{2\pi} F(\cos\theta, \sin\theta) d\theta \to \oint_{|z|=1} \dots \frac{dz}{iz}$.
    *   Integrals with $\sin(ax)$ or $\cos(ax)$ use $f(z)e^{iax}$ or $f(z)e^{-iax}$.
*   **Cauchy's Integral Formula vs. Residue Theorem:** Cauchy's integral formula for $\oint_C \frac{f(z)}{z-z_0} dz = 2\pi i f(z_0)$ uses an analytic function $f(z)$ and a simple pole. The Residue Theorem generalizes this to any function with a finite number of singularities inside $C$. The residue at $z_0$ for $\frac{f(z)}{z-z_0}$ is $f(z_0)$, so the theorem yields $2\pi i \times f(z_0)$.

---

### 9. Connections to Course Outcomes

*   **CO4:** This entire topic directly addresses CO4. We've explored series expansions about singularities (Laurent series) and the application of the Residue Theorem to compute real integrals. The examples and practice problems demonstrate this application. The knowledge level K3 is achieved by applying these concepts to solve problems.

---
