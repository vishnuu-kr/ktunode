---
title: "Complex Integration"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 3: Complex Integration"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35a71"
status: "completed"
scrapedAt: "2026-05-23T16:14:40.055Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 3: Complex Integration

### Topic: Complex Integration

This module delves into the fundamental concepts and techniques of complex integration, a crucial tool for solving a wide range of problems in electrical and physical sciences. We will explore how to integrate complex functions along curves in the complex plane and leverage powerful theorems like Cauchy's Integral Theorem and Cauchy's Integral Formula to simplify these computations.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   **Understand the concept of complex integration** along curves in the complex plane.
*   **Evaluate complex line integrals** using direct methods and parameterization.
*   **Apply Cauchy's Integral Theorem** to simplify integrals of analytic functions.
*   **Utilize Cauchy's Integral Formula** to evaluate integrals of functions involving poles.
*   **Understand the relationship between complex integration and Fourier Transforms** (linking to CO1).
*   **Grasp the foundational concepts** that lead to understanding conformal mapping and series expansions (linking to CO2 and CO4).

---

### Key Concepts and Definitions:

#### 1. Complex Line Integral

**Definition:** Given a complex function $f(z)$ and a curve $C$ in the complex plane, the complex line integral of $f(z)$ along $C$ is defined as:

$$ \int_C f(z) dz $$

If the curve $C$ is parameterized by $z(t) = x(t) + iy(t)$ for $a \le t \le b$, then $dz = z'(t) dt$. The integral becomes:

$$ \int_C f(z) dz = \int_a^b f(z(t)) z'(t) dt $$

This integral can be further broken down into real and imaginary parts:

$$ \int_C f(z) dz = \int_a^b [u(x(t), y(t)) x'(t) - v(x(t), y(t)) y'(t)] dt + i \int_a^b [v(x(t), y(t)) x'(t) + u(x(t), y(t)) y'(t)] dt $$

where $f(z) = u(x, y) + iv(x, y)$.

**Source Reference:** Kreyszig (10th ed., Section 7.2), Zill & Shanahan (3rd ed., Chapter 4), Grewal (44th ed., Chapter 15).

**Example:** Evaluate $\int_C z^2 dz$ where $C$ is the line segment from $0$ to $1+i$.

*   **Parameterization:** Let $z(t) = t + it$ for $0 \le t \le 1$.
*   Then $z'(t) = 1 + i$.
*   $f(z) = z^2 = (t+it)^2 = t^2(1+i)^2 = t^2(1+2i-1) = 2it^2$.
*   Integral: $\int_0^1 (2it^2)(1+i) dt = 2i(1+i) \int_0^1 t^2 dt = 2i(1+i) \left[\frac{t^3}{3}\right]_0^1 = 2i(1+i) \frac{1}{3} = \frac{2i - 2}{3}$.

**Important Point to Remember:** The value of a complex line integral generally depends on the path $C$ taken.

#### 2. Cauchy's Integral Theorem (Indefinite Integration)

**Theorem:** If $f(z)$ is analytic in a simply connected domain $D$, then for any closed curve $C$ lying entirely within $D$, the integral of $f(z)$ along $C$ is zero:

$$ \oint_C f(z) dz = 0 $$

**Implication:** If $f(z)$ is analytic in a region, the integral of $f(z)$ between two points in that region is independent of the path taken between those points. This means we can treat indefinite integrals of analytic functions similarly to real integration.

**Source Reference:** Kreyszig (10th ed., Section 7.3), Zill & Shanahan (3rd ed., Chapter 5), Grewal (44th ed., Chapter 15).

**Example:** Evaluate $\oint_C e^z dz$ where $C$ is any simple closed curve.

*   $f(z) = e^z$ is analytic everywhere in the complex plane.
*   By Cauchy's Integral Theorem, $\oint_C e^z dz = 0$.

**Connection to CO3:** This theorem is a cornerstone for computing complex integrals, as it significantly simplifies calculations for analytic functions over closed paths.

#### 3. Cauchy's Integral Formula

**Theorem:** If $f(z)$ is analytic in a simply connected domain $D$ and $C$ is a simple closed curve in $D$ with a region $R$ enclosed by $C$, and if $z_0$ is any point inside $C$, then:

$$ f(z_0) = \frac{1}{2\pi i} \oint_C \frac{f(z)}{z-z_0} dz $$

This formula can be rearranged to evaluate integrals:

$$ \oint_C \frac{f(z)}{z-z_0} dz = 2\pi i f(z_0) $$

**Generalization (Cauchy's Integral Formula for Derivatives):** If $f(z)$ is analytic in $D$, then its derivatives $f^{(n)}(z)$ are also analytic, and for any point $z_0$ inside $C$:

$$ f^{(n)}(z_0) = \frac{n!}{2\pi i} \oint_C \frac{f(z)}{(z-z_0)^{n+1}} dz $$

This can be rewritten as:

$$ \oint_C \frac{f(z)}{(z-z_0)^{n+1}} dz = \frac{2\pi i}{n!} f^{(n)}(z_0) $$

**Source Reference:** Kreyszig (10th ed., Section 7.4), Zill & Shanahan (3rd ed., Chapter 5), Grewal (44th ed., Chapter 15).

**Example 1:** Evaluate $\oint_C \frac{e^z}{z-2} dz$ where $C$ is the circle $|z|=1$.

*   $f(z) = e^z$ is analytic everywhere.
*   $z_0 = 2$ is outside the circle $|z|=1$.
*   Since the integrand is analytic inside and on $C$, by Cauchy's Integral Theorem, the integral is 0.

**Example 2:** Evaluate $\oint_C \frac{e^z}{z-2} dz$ where $C$ is the circle $|z|=3$.

*   $f(z) = e^z$ is analytic everywhere.
*   $z_0 = 2$ is inside the circle $|z|=3$.
*   Using Cauchy's Integral Formula: $\oint_C \frac{f(z)}{z-z_0} dz = 2\pi i f(z_0)$.
*   Here $f(z) = e^z$ and $z_0 = 2$.
*   Integral = $2\pi i e^2$.

**Example 3:** Evaluate $\oint_C \frac{\sin z}{z^2} dz$ where $C$ is the circle $|z|=1$.

*   $f(z) = \sin z$ is analytic everywhere.
*   $z_0 = 0$ is inside the circle $|z|=1$.
*   This integral is of the form $\oint_C \frac{f(z)}{(z-z_0)^{n+1}} dz$ with $n=1$.
*   We need $f'(z_0)$. $f'(z) = \cos z$.
*   Integral = $\frac{2\pi i}{1!} f'(0) = 2\pi i \cos(0) = 2\pi i$.

**Connection to CO3:** Cauchy's Integral Formula provides a direct method to compute integrals that have a simple pole within the contour of integration. This is a significant advancement over direct integration.

#### 4. Connection to Fourier Transforms (CO1)

While this topic primarily focuses on direct complex integration, the underlying principles of integration and the properties of analytic functions are foundational for understanding Fourier transforms.

*   **Fourier Transform Definition:** The Fourier Transform of a function $f(t)$ is given by:
    $$ F(\omega) = \mathcal{F}\{f(t)\} = \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt $$
*   **Complex Analysis in Fourier Analysis:** Many techniques for evaluating Fourier transforms and their inverses involve complex integration. For instance, the Bromwich integral (a form of the inverse Laplace transform) is a complex integral that allows us to recover the time-domain function from its Laplace transform.
*   **Poles and Residues:** The behavior of the integrand in the complex plane, particularly its poles, dictates the value of the Fourier transform and is analyzed using residue calculus (which builds upon Cauchy's theorems).

**Source Reference:** Rao, Kim, Hwang (1st ed., Chapters 1-3 for FFT basics, hinting at the importance of signal processing which relies on transforms), Ramana (39th ed., Chapter 32 on Fourier Series and Transforms).

**Important Point to Remember:** The ability to transform between the time/spatial domain and the frequency domain using Fourier transforms is heavily reliant on the sophisticated tools developed in complex analysis, especially residue theory.

#### 5. Relation to Conformal Mapping (CO2) and Series Expansions (CO4)

*   **Analyticity and Conformal Mapping:** The condition of a function being analytic is directly linked to conformal mapping. A function $f(z)$ is conformal at a point $z_0$ if it preserves angles between curves passing through $z_0$. This property is guaranteed if $f(z)$ is analytic and $f'(z_0) \neq 0$. This forms the basis for understanding how complex functions can transform shapes in the complex plane without distortion of angles.
    **Source Reference:** Zill & Shanahan (3rd ed., Chapter 7).
*   **Series Expansions and Singularities:** Cauchy's theorems lay the groundwork for understanding the behavior of complex functions around their singularities. Taylor series represent analytic functions locally, while Laurent series (introduced in later modules) are crucial for representing functions around isolated singularities. The study of these series expansions is essential for applying the Residue Theorem.
    **Source Reference:** Kreyszig (10th ed., Chapter 8 on Power Series, leading to Laurent Series), Zill & Shanahan (3rd ed., Chapter 6 on Series).

---

### Practice Questions and Exercises:

**Exercise 1:** Evaluate $\int_C z^3 dz$ where $C$ is the line segment from $1$ to $2+i$.

**Exercise 2:** Evaluate $\oint_C \cos z dz$ where $C$ is the ellipse $x^2/4 + y^2/1 = 1$.

**Exercise 3:** Evaluate $\oint_C \frac{z^2 + 1}{z-i} dz$ where $C$ is the circle $|z|=2$.

**Exercise 4:** Evaluate $\oint_C \frac{e^{iz}}{z^2+1} dz$ where $C$ is the circle $|z|=3$.

**Exercise 5:** Evaluate $\oint_C \frac{\sin z}{z^3} dz$ where $C$ is the circle $|z|=1$.

---

### Answers:

**Answer 1:**
*   Parameterize $C$: $z(t) = (1+t) + it$ for $0 \le t \le 1$.
*   $z'(t) = 1+i$.
*   $f(z) = z^3$.
*   $\int_C z^3 dz = \int_0^1 ((1+t)+it)^3 (1+i) dt$.
*   Alternatively, since $z^3$ is analytic, we can use indefinite integration: $\int z^3 dz = \frac{z^4}{4}$.
*   The integral is $\left[\frac{z^4}{4}\right]_{1}^{2+i} = \frac{(2+i)^4}{4} - \frac{1^4}{4}$.
*   $(2+i)^2 = 4 + 4i - 1 = 3+4i$.
*   $(2+i)^4 = (3+4i)^2 = 9 + 24i - 16 = -7 + 24i$.
*   Integral = $\frac{-7+24i}{4} - \frac{1}{4} = \frac{-8+24i}{4} = -2 + 6i$.

**Answer 2:**
*   $f(z) = \cos z$ is analytic everywhere.
*   The ellipse is a simple closed curve.
*   By Cauchy's Integral Theorem, $\oint_C \cos z dz = 0$.

**Answer 3:**
*   $f(z) = z^2+1$ is analytic everywhere.
*   $z_0 = i$ is inside the circle $|z|=2$.
*   Using Cauchy's Integral Formula: $\oint_C \frac{f(z)}{z-z_0} dz = 2\pi i f(z_0)$.
*   Integral = $2\pi i f(i) = 2\pi i (i^2 + 1) = 2\pi i (-1 + 1) = 0$.

**Answer 4:**
*   The integrand is $\frac{e^{iz}}{z^2+1}$.
*   The singularities are at $z^2+1=0 \implies z = \pm i$.
*   The circle $|z|=3$ encloses both $z=i$ and $z=-i$.
*   This integral is not directly solvable by Cauchy's Integral Formula for a single pole unless we decompose the integrand or use the Residue Theorem (which is typically covered in the next section of complex integration).
*   If we were to use residue theorem (anticipating future learning):
    *   $f(z) = e^{iz}$. $z_0 = i$ and $z_0 = -i$.
    *   Integral = $2\pi i \left( \text{Res}\left(\frac{e^{iz}}{z^2+1}, i\right) + \text{Res}\left(\frac{e^{iz}}{z^2+1}, -i\right) \right)$
    *   Res$(z=i)$: $\lim_{z \to i} (z-i) \frac{e^{iz}}{(z-i)(z+i)} = \frac{e^{i(i)}}{i+i} = \frac{e^{-1}}{2i}$.
    *   Res$(z=-i)$: $\lim_{z \to -i} (z+i) \frac{e^{iz}}{(z-i)(z+i)} = \frac{e^{i(-i)}}{-i-i} = \frac{e^{1}}{-2i}$.
    *   Integral = $2\pi i \left(\frac{e^{-1}}{2i} + \frac{e^{1}}{-2i}\right) = 2\pi i \left(\frac{e^{-1} - e}{2i}\right) = \pi (e^{-1} - e) = \pi(\frac{1}{e} - e)$.

**Answer 5:**
*   $f(z) = \sin z$ is analytic everywhere.
*   $z_0 = 0$ is inside the circle $|z|=1$.
*   The integral is of the form $\oint_C \frac{f(z)}{(z-z_0)^{n+1}} dz$ with $n=2$.
*   We need $f''(z_0)$. $f'(z) = \cos z$, $f''(z) = -\sin z$.
*   Integral = $\frac{2\pi i}{2!} f''(0) = \frac{2\pi i}{2} (-\sin(0)) = \pi i (0) = 0$.

---

### Important Points to Remember:

*   **Analyticity is Key:** Cauchy's Integral Theorem and Cauchy's Integral Formula are applicable only when the function $f(z)$ (or the relevant part of the integrand) is analytic within and on the boundary of the contour.
*   **Contour Matters:** The value of a complex line integral depends on the path taken, unless the function is analytic along the path (in which case the integral is path-independent).
*   **Singularity Location:** For Cauchy's Integral Formula, the location of the singularity $z_0$ relative to the contour $C$ is critical. If $z_0$ is outside $C$, the integral is often zero (if the integrand is analytic within $C$). If $z_0$ is inside $C$, the formula applies.
*   **Power of Theorems:** These theorems transform what could be complex line integrals into simple evaluations of the function and its derivatives at specific points, a significant simplification.
*   **Foundation for Further Topics:** Understanding these foundational concepts of complex integration is essential for grasping more advanced topics like residue calculus, Fourier analysis, and conformal mapping, which are vital in electrical and physical sciences.

---
