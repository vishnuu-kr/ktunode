---
title: "Independence of path"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 3: Complex Integration"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba8106a1"
status: "completed"
scrapedAt: "2026-05-20T18:41:29.379Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 3: Complex Integration

### Topic: Independence of Path

---

### 1. Learning Outcomes

By the end of this topic, you should be able to:

*   Understand the concept of path independence in complex integration.
*   Identify conditions under which a complex integral is independent of the path of integration.
*   Utilize the property of path independence to simplify calculations of complex integrals.
*   Relate path independence to the existence of antiderivatives for complex functions.
*   Apply the concept of path independence to solve problems in electrical and physical sciences.

---

### 2. Key Concepts and Definitions

#### 2.1 What is Path Independence?

In complex analysis, an integral of a complex function $f(z)$ along a path $C$ is said to be **path-independent** if the value of the integral depends only on the endpoints of the path, not on the specific path taken between those endpoints.

Mathematically, if $C_1$ and $C_2$ are two different paths connecting the same two points $z_1$ and $z_2$, and the integral of $f(z)$ along $C_1$ is equal to the integral of $f(z)$ along $C_2$, then the integral is path-independent.

$$ \int_{C_1} f(z) dz = \int_{C_2} f(z) dz $$

for all paths $C_1$ and $C_2$ joining $z_1$ to $z_2$.

#### 2.2 Conditions for Path Independence

The most fundamental condition for path independence of $\int f(z) dz$ is related to the existence of an **antiderivative** (or primitive) of $f(z)$.

**Theorem:** A complex integral $\int_C f(z) dz$ is independent of the path $C$ connecting two points $z_1$ and $z_2$ if and only if $f(z)$ has an antiderivative $F(z)$ in a domain containing the paths between $z_1$ and $z_2$.

If $F(z)$ is an antiderivative of $f(z)$, meaning $F'(z) = f(z)$, then the integral is given by:

$$ \int_{z_1}^{z_2} f(z) dz = F(z_2) - F(z_1) $$

This formula clearly shows that the value of the integral depends only on the endpoints $z_1$ and $z_2$, and not on the path.

#### 2.3 Relationship with Simply Connected Domains

The existence of an antiderivative is closely linked to the domain of definition of the function $f(z)$.

**Cauchy's Integral Theorem (Generalized for Path Independence):** If $f(z)$ is analytic in a **simply connected domain** $D$, then $\int_C f(z) dz = 0$ for every closed contour $C$ within $D$.

A **simply connected domain** is a domain in which every simple closed contour encloses only points within the domain. In simpler terms, it's a domain with no "holes".

**Implication for Path Independence:** If $f(z)$ is analytic in a simply connected domain $D$, then any integral of $f(z)$ over any path within $D$ is path-independent. This is because if $C_1$ and $C_2$ are two paths connecting $z_1$ and $z_2$, then the contour formed by $C_1$ followed by $-C_2$ (the reverse of $C_2$) is a closed contour. Since $f(z)$ is analytic in a simply connected domain, the integral over this closed contour is zero.

$$ \int_{C_1} f(z) dz + \int_{-C_2} f(z) dz = 0 $$
$$ \int_{C_1} f(z) dz - \int_{C_2} f(z) dz = 0 $$
$$ \int_{C_1} f(z) dz = \int_{C_2} f(z) dz $$

#### 2.4 Non-Simply Connected Domains and Path Independence

If the domain of $f(z)$ is **not simply connected** (i.e., it has holes), then $f(z)$ might not have an antiderivative that is valid throughout the entire domain. In such cases, the integral might **not** be path-independent.

Consider a domain with a single hole. If a path $C$ encircles this hole, it cannot be continuously deformed to a point within the domain. The integral over such a path might not be zero, and integrals between two points connected by paths that differ by encircling the hole will also differ.

**Example:** The function $f(z) = 1/z$ is analytic everywhere except at $z=0$. The domain of $f(z)$ excluding the origin is not simply connected. The integral of $1/z$ around the unit circle (a closed path) is $2\pi i$, not zero. This indicates that the integral of $1/z$ is not path-independent in any domain that includes paths encircling the origin.

#### 2.5 Identifying Antiderivatives

To check for path independence, we can try to find an antiderivative $F(z)$ for $f(z)$.

*   **Polynomials and Exponential Functions:** For functions like $z^n$ (where $n \neq -1$), $e^z$, $\sin z$, $\cos z$, etc., the antiderivatives are straightforward to find. For example, the antiderivative of $z^2$ is $z^3/3$, and the antiderivative of $e^z$ is $e^z$.
*   **Rational Functions:** For rational functions, partial fraction decomposition can help identify terms for which antiderivatives exist.
*   **Logarithmic Functions:** The antiderivative of $1/z$ is $\log z$. However, $\log z$ is a multi-valued function, and its principal branch is analytic in a domain that excludes a branch cut (usually along the negative real axis). This is why the integral of $1/z$ is not path-independent in domains containing the origin.

**Important Point:** If $f(z)$ has an antiderivative $F(z)$ in a domain $D$, and the paths of integration lie entirely within $D$, then the integral is path-independent.

---

### 3. Examples

#### Example 3.1: Path Independence of $f(z) = z^2$

Let $f(z) = z^2$. We want to integrate this function from $z_1 = 1+i$ to $z_2 = 2+3i$.

1.  **Check for Antiderivative:** The function $f(z) = z^2$ is a polynomial, which is analytic everywhere in the complex plane. Its antiderivative is $F(z) = \frac{z^3}{3}$.

2.  **Calculate using Antiderivative:** Since $f(z)$ is analytic everywhere, the integral is path-independent. We can use the antiderivative formula:
    $$ \int_{1+i}^{2+3i} z^2 dz = F(2+3i) - F(1+i) $$
    $$ = \frac{(2+3i)^3}{3} - \frac{(1+i)^3}{3} $$

    Let's calculate $(2+3i)^3$:
    $(2+3i)^3 = 2^3 + 3(2^2)(3i) + 3(2)(3i)^2 + (3i)^3$
    $= 8 + 3(4)(3i) + 6(9i^2) + 27i^3$
    $= 8 + 36i + 6(-9) + 27(-i)$
    $= 8 + 36i - 54 - 27i$
    $= -46 + 9i$

    Let's calculate $(1+i)^3$:
    $(1+i)^3 = 1^3 + 3(1^2)(i) + 3(1)(i)^2 + i^3$
    $= 1 + 3i + 3(-1) + (-i)$
    $= 1 + 3i - 3 - i$
    $= -2 + 2i$

    Now substitute these values back:
    $$ \int_{1+i}^{2+3i} z^2 dz = \frac{-46 + 9i}{3} - \frac{-2 + 2i}{3} $$
    $$ = \frac{-46 + 9i - (-2 + 2i)}{3} $$
    $$ = \frac{-46 + 9i + 2 - 2i}{3} $$
    $$ = \frac{-44 + 7i}{3} $$

3.  **Verification (Optional - by choosing a path):** Let's choose a simple path: a straight line segment from $(1,1)$ to $(2,3)$ in the Cartesian plane, parametrized by $z(t) = (1+t) + i(1+2t)$, where $0 \le t \le 1$.
    Then $dz = (1+2i) dt$.
    $$ \int_0^1 ((1+t) + i(1+2t))^2 (1+2i) dt $$
    This would be more tedious to calculate but should yield the same result.

**Conclusion for Example 3.1:** The integral of $z^2$ is path-independent because $z^2$ has an antiderivative $z^3/3$ which is analytic everywhere.

#### Example 3.2: Path Independence of $f(z) = e^z$

Let $f(z) = e^z$. We want to integrate from $z_1 = 0$ to $z_2 = \pi i$.

1.  **Check for Antiderivative:** The function $f(z) = e^z$ is analytic everywhere. Its antiderivative is $F(z) = e^z$.

2.  **Calculate using Antiderivative:**
    $$ \int_0^{\pi i} e^z dz = F(\pi i) - F(0) $$
    $$ = e^{\pi i} - e^0 $$
    We know $e^{\pi i} = \cos(\pi) + i \sin(\pi) = -1 + 0i = -1$.
    And $e^0 = 1$.
    $$ \int_0^{\pi i} e^z dz = -1 - 1 = -2 $$

**Conclusion for Example 3.2:** The integral of $e^z$ is path-independent because $e^z$ has an antiderivative $e^z$ which is analytic everywhere.

#### Example 3.3: Non-Path Independence of $f(z) = 1/z$

Let $f(z) = 1/z$. Consider two paths from $z_1 = 1$ to $z_2 = -1$:

*   **Path $C_1$:** The upper semi-circle of the unit circle, from $z=1$ to $z=-1$.
    Parametrization: $z(t) = e^{it}$, $0 \le t \le \pi$.
    $dz = ie^{it} dt$.
    $$ \int_{C_1} \frac{1}{z} dz = \int_0^\pi \frac{1}{e^{it}} (ie^{it} dt) = \int_0^\pi i dt = [it]_0^\pi = i\pi $$

*   **Path $C_2$:** The lower semi-circle of the unit circle, from $z=1$ to $z=-1$.
    Parametrization: $z(t) = e^{-it}$, $0 \le t \le \pi$.
    $dz = -ie^{-it} dt$.
    $$ \int_{C_2} \frac{1}{z} dz = \int_0^\pi \frac{1}{e^{-it}} (-ie^{-it} dt) = \int_0^\pi -i dt = [-it]_0^\pi = -i\pi $$

Since $\int_{C_1} \frac{1}{z} dz \neq \int_{C_2} \frac{1}{z} dz$, the integral of $1/z$ is not path-independent in any domain that contains both paths and the origin (which is excluded from the domain of analyticity).

**Why is it not path-independent?** The function $f(z) = 1/z$ has a singularity at $z=0$. The domain of analyticity is $\mathbb{C} \setminus \{0\}$. This domain is not simply connected. The two paths $C_1$ and $C_2$ connect $1$ to $-1$, but they enclose the singularity at $z=0$. If we consider the closed contour $C = C_1 \cup (-C_2)$, which is the unit circle, $\int_C \frac{1}{z} dz = 2\pi i \neq 0$, confirming that Cauchy's integral theorem for simply connected domains does not apply here.

**Antiderivative of $1/z$:** The antiderivative of $1/z$ is $\log z$. However, $\log z$ is multi-valued. The principal branch of $\log z$, denoted $\text{Log } z$, is defined for $z \in \mathbb{C} \setminus (-\infty, 0]$. If we were to use the antiderivative formula for $\log z$, we would need to be careful about the branch cut.
For $z_1=1$ and $z_2=-1$:
$\text{Log}(1) = \log(1) + i \cdot 0 = 0$.
$\text{Log}(-1) = \log(1) + i \cdot \pi = i\pi$ (using the principal branch).
So, $F(z_2) - F(z_1) = \text{Log}(-1) - \text{Log}(1) = i\pi - 0 = i\pi$.

This result $i\pi$ matches the integral along the upper semi-circle ($C_1$), but not the lower semi-circle ($C_2$) which gave $-i\pi$. This discrepancy arises because the principal branch of $\log z$ has a branch cut along the negative real axis, which the path $C_2$ crosses (conceptually, as it goes from positive real to negative real). The integral over $C_2$ requires a different branch of the logarithm or direct calculation.

---

### 4. Applications in Electrical and Physical Sciences

The concept of path independence is crucial in various areas:

*   **Electric Potential:** In electrostatics, the electric field $\mathbf{E}$ is conservative, meaning the work done to move a charge between two points is independent of the path taken. This is directly analogous to path independence in complex integration. The electric potential difference between two points is $V_B - V_A = -\int_A^B \mathbf{E} \cdot d\mathbf{l}$. The conservative nature implies the existence of a potential function, similar to an antiderivative.
*   **Fluid Dynamics:** In certain ideal fluid flow scenarios, the velocity potential exists, leading to path-independent line integrals of the velocity field.
*   **Thermodynamics:** In equilibrium processes, state variables (like internal energy or enthalpy) depend only on the state, not the path taken to reach it. Changes in these variables are path-independent.
*   **Circuit Analysis:** Analyzing AC circuits with complex impedances can involve complex integration. If certain quantities or potentials are analytic in the relevant domain of the complex frequency plane, path independence can simplify calculations.

---

### 5. Practice Questions

**Question 3.1:**
Determine whether the integral $\int_C z^3 dz$ is path-independent, where $C$ is any path from $z_1 = 0$ to $z_2 = 1+i$. If it is, evaluate the integral.

**Question 3.2:**
Let $f(z) = \frac{1}{z-2}$. Is the integral $\int_C f(z) dz$ path-independent for paths between $z_1 = 3$ and $z_2 = 4$? Justify your answer. If it is path-independent, evaluate it.

**Question 3.3:**
Consider the function $f(z) = \frac{1}{z(z-1)}$. Is the integral $\int_C f(z) dz$ path-independent for paths between $z_1 = 2$ and $z_2 = 3$? Justify your answer.

**Question 3.4:**
Evaluate the integral $\int_C \cos(z) dz$ from $z_1 = 0$ to $z_2 = \frac{\pi}{2} + i$.

---

### 6. Answers to Practice Questions

**Answer 3.1:**
Yes, the integral $\int_C z^3 dz$ is path-independent.
**Justification:** The function $f(z) = z^3$ is a polynomial, which is analytic everywhere in the complex plane. Therefore, it has an antiderivative.
**Antiderivative:** $F(z) = \frac{z^4}{4}$.
**Evaluation:**
$$ \int_0^{1+i} z^3 dz = F(1+i) - F(0) $$
$$ = \frac{(1+i)^4}{4} - \frac{0^4}{4} $$
Let's calculate $(1+i)^4$:
$(1+i)^2 = 1 + 2i + i^2 = 1 + 2i - 1 = 2i$.
$(1+i)^4 = ((1+i)^2)^2 = (2i)^2 = 4i^2 = -4$.
$$ \int_0^{1+i} z^3 dz = \frac{-4}{4} = -1 $$

**Answer 3.2:**
Yes, the integral $\int_C \frac{1}{z-2} dz$ is path-independent for paths between $z_1 = 3$ and $z_2 = 4$.
**Justification:** The function $f(z) = \frac{1}{z-2}$ has a singularity only at $z=2$. The points $z_1 = 3$ and $z_2 = 4$ and any straight line path connecting them lie in the domain $\mathbb{C} \setminus \{2\}$, which is a simply connected domain. In this domain, $f(z)$ is analytic.
**Antiderivative:** $F(z) = \log(z-2)$ (using the principal branch, as the path does not cross the branch cut).
**Evaluation:**
$$ \int_3^4 \frac{1}{z-2} dz = F(4) - F(3) $$
$$ = \log(4-2) - \log(3-2) $$
$$ = \log(2) - \log(1) $$
$$ = \log(2) - 0 = \log(2) $$
(Note: If the paths were allowed to go around the singularity at $z=2$, the integral would not be path-independent).

**Answer 3.3:**
No, the integral $\int_C \frac{1}{z(z-1)} dz$ is **not** path-independent for paths between $z_1 = 2$ and $z_2 = 3$.
**Justification:** The function $f(z) = \frac{1}{z(z-1)}$ has singularities at $z=0$ and $z=1$. The points $z_1 = 2$ and $z_2 = 3$ are in a domain that contains the singularity at $z=1$. If we consider paths from $2$ to $3$, one path could avoid the singularity at $z=1$ (e.g., a straight line segment), while another path might loop around $z=1$. For example, consider a path that goes from $2$ to $2.5$, then circles $z=1$ once, and then goes from $2.5$ to $3$. Such paths would yield different results.
Alternatively, using partial fractions:
$f(z) = \frac{1}{z(z-1)} = \frac{1}{z-1} - \frac{1}{z}$.
The integral of $1/z$ is not path-independent in any domain including the origin. The integral of $1/(z-1)$ is not path-independent in any domain including $z=1$. Since both singularities are relevant for different potential paths between $2$ and $3$ if the domain is not chosen carefully, or if we consider paths that go around these singularities, path independence is not guaranteed. For any domain that contains both $z=0$ and $z=1$, the function is not analytic, and path independence does not hold. If we consider the domain $\mathbb{C} \setminus \{0, 1\}$, this is not simply connected. Any path from $2$ to $3$ that encloses $z=1$ (for example) will yield a different result than a path that does not. Therefore, path independence does not hold in general.

**Answer 3.4:**
The integral $\int_C \cos(z) dz$ is path-independent.
**Justification:** The function $f(z) = \cos(z)$ is analytic everywhere in the complex plane. It has an antiderivative.
**Antiderivative:** $F(z) = \sin(z)$.
**Evaluation:**
$$ \int_0^{\frac{\pi}{2}+i} \cos(z) dz = F(\frac{\pi}{2}+i) - F(0) $$
$$ = \sin(\frac{\pi}{2}+i) - \sin(0) $$
We know $\sin(0) = 0$.
Using the identity $\sin(A+B) = \sin A \cos B + \cos A \sin B$:
$\sin(\frac{\pi}{2}+i) = \sin(\frac{\pi}{2})\cos(i) + \cos(\frac{\pi}{2})\sin(i)$
$= 1 \cdot \cos(i) + 0 \cdot \sin(i)$
$= \cos(i)$
Recall that $\cos(ix) = \cosh(x)$. So, $\cos(i) = \cosh(1)$.
$\cosh(1) = \frac{e^1 + e^{-1}}{2} = \frac{e + 1/e}{2}$.
$$ \int_C \cos(z) dz = \frac{e + e^{-1}}{2} $$

---

### 7. Important Points to Remember

*   **Path Independence = Antiderivative:** An integral $\int_C f(z) dz$ is independent of the path $C$ if and only if $f(z)$ has an antiderivative $F(z)$ in a domain containing all possible paths between the endpoints.
*   **Evaluation with Antiderivative:** If path independence holds, $\int_{z_1}^{z_2} f(z) dz = F(z_2) - F(z_1)$.
*   **Simply Connected Domains:** If $f(z)$ is analytic in a simply connected domain, then all integrals of $f(z)$ over paths within that domain are path-independent, and integrals over closed contours are zero.
*   **Singularities:** The presence of singularities in the domain of $f(z)$ can break path independence. If the paths between endpoints can enclose a singularity, the integral will likely depend on the path.
*   **Branch Cuts:** For functions like $\log z$, which have branch cuts, path independence only holds in domains where the branch cut does not separate the endpoints, or if all paths between the endpoints stay on the same branch of the function.
*   **Applications:** Path independence is a fundamental concept that simplifies calculations in various fields, particularly when dealing with conservative fields or potentials.

---
