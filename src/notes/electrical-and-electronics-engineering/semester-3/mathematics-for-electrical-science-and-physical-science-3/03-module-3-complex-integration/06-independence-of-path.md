---
title: "Independence of path"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 3: Complex Integration"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35a76"
status: "completed"
scrapedAt: "2026-05-23T16:14:43.722Z"
---
# Mathematics for Electrical Science and Physical Science – 3

## Module 3: Complex Integration

### Topic: Independence of Path

---

**Context:** This topic builds upon the fundamental concepts of complex functions and their derivatives, leading towards a deeper understanding of complex integration. It directly supports **CO3** by providing a crucial tool for simplifying the computation of complex integrals.

---

### 1. Introduction to Path Independence

**Key Concept:** The independence of path property in complex integration states that if the integral of a function $f(z)$ along a path $C$ depends only on the endpoints of the path and not on the specific path taken between those endpoints, then the integral is path-independent.

**Relevance to Course Outcomes:**
*   **CO3 (Compute complex integrals using Cauchy's integral theorem and Cauchy's integral formula):** Path independence is a prerequisite for many powerful theorems like Cauchy's Integral Theorem and Cauchy's Integral Formula. If a function is analytic in a simply connected domain, its integral along any closed path within that domain is zero, which is a direct consequence of path independence. This significantly simplifies integral calculations.

---

### 2. Conditions for Path Independence

**Definition:** A complex function $f(z)$ is said to have an **antiderivative** or a **primitive** $F(z)$ in a domain $D$ if $F'(z) = f(z)$ for all $z \in D$.

**Theorem (Path Independence and Antiderivatives):**
Let $f(z)$ be a complex function defined on a domain $D$. The complex integral of $f(z)$ is path-independent in $D$ if and only if $f(z)$ has an antiderivative $F(z)$ in $D$.

**Proof Sketch (from Kreyszig, 10th ed., Chapter 13):**
*   **If $f(z)$ has an antiderivative $F(z)$:**
    Let $C$ be a piecewise smooth curve from $z_0$ to $z_1$ in $D$.
    $\int_C f(z) dz = \int_C F'(z) dz$
    By the Fundamental Theorem of Calculus for Complex Integrals:
    $\int_C F'(z) dz = F(z_1) - F(z_0)$
    This result depends only on the endpoints $z_0$ and $z_1$, not on the path $C$. Hence, the integral is path-independent.

*   **If $\int_C f(z) dz$ is path-independent:**
    Define a function $F(z)$ for $z \in D$ as $F(z) = \int_{z_0}^z f(\zeta) d\zeta$, where $z_0$ is a fixed point in $D$ and the integral is taken along any path from $z_0$ to $z$ within $D$.
    Then $F'(z) = f(z)$. This is a consequence of the analyticity of $f(z)$ if $f(z)$ is analytic in $D$.

**Key Insight:** The existence of an antiderivative is the fundamental condition for path independence.

---

### 3. Analyticity and Path Independence

**Definition:** A complex function $f(z)$ is **analytic** in a domain $D$ if it is differentiable at every point in $D$.

**Theorem (Cauchy's Integral Theorem - Path Independence Aspect):**
If $f(z)$ is analytic in a simply connected domain $D$, then the integral of $f(z)$ along any closed piecewise smooth curve $C$ in $D$ is zero.
$\oint_C f(z) dz = 0$

**Proof Sketch (from Zill & Shanahan, 3rd ed., Chapter 5):**
If $f(z)$ is analytic in a simply connected domain $D$, then it possesses an antiderivative $F(z)$ in $D$. Therefore, for any closed curve $C$ in $D$:
$\oint_C f(z) dz = \oint_C F'(z) dz = F(z_1) - F(z_0)$
Since $C$ is closed, $z_1 = z_0$. Thus, $F(z_1) - F(z_0) = 0$.

**Implication:** If $f(z)$ is analytic in a simply connected domain $D$, then for any two points $z_0, z_1 \in D$, the integral $\int_{z_0}^{z_1} f(z) dz$ has the same value for all piecewise smooth paths $C$ from $z_0$ to $z_1$ lying entirely in $D$.

**Connection to Course Outcomes:**
*   **CO3:** Cauchy's Integral Theorem directly uses the property of analyticity to establish path independence for closed curves, allowing us to conclude that the integral is zero.

**Example:**
Let $f(z) = z^2$. This function is analytic everywhere in the complex plane. Consider the integral of $f(z)$ from $z_0 = 0$ to $z_1 = 1+i$.

*   **Path 1: Straight line from 0 to $1+i$.**
    $z(t) = t(1+i)$, $dz = (1+i)dt$, for $t \in [0, 1]$.
    $\int_0^{1+i} z^2 dz = \int_0^1 [t(1+i)]^2 (1+i)dt = (1+i)^3 \int_0^1 t^2 dt = (1+i)^3 [\frac{t^3}{3}]_0^1 = \frac{1}{3}(1+i)^3$
    $(1+i)^3 = 1 + 3i + 3i^2 + i^3 = 1 + 3i - 3 - i = -2 + 2i$.
    So, $\int_0^{1+i} z^2 dz = \frac{1}{3}(-2+2i)$.

*   **Path 2: Along the real axis from 0 to 1, then vertically from 1 to $1+i$.**
    *   Path $C_1$: $z(x) = x$, $dz = dx$, $x$ from 0 to 1. $\int_{C_1} z^2 dz = \int_0^1 x^2 dx = [\frac{x^3}{3}]_0^1 = \frac{1}{3}$.
    *   Path $C_2$: $z(y) = 1 + iy$, $dz = i dy$, $y$ from 0 to 1. $\int_{C_2} z^2 dz = \int_0^1 (1+iy)^2 i dy = i \int_0^1 (1 + 2iy - y^2) dy$
        $= i [y + iy^2 - \frac{y^3}{3}]_0^1 = i (1 + i - \frac{1}{3}) = i (\frac{2}{3} + i) = \frac{2}{3}i - 1$.
    Total integral = $\frac{1}{3} + (-1 + \frac{2}{3}i) = -\frac{2}{3} + \frac{2}{3}i$.

Wait, there was a calculation error in the first path. Let's re-calculate $(1+i)^3$.
$(1+i)^2 = 1 + 2i + i^2 = 2i$.
$(1+i)^3 = (2i)(1+i) = 2i + 2i^2 = -2 + 2i$.
$\frac{1}{3}(-2+2i) = -\frac{2}{3} + \frac{2}{3}i$.

The results match! This demonstrates path independence because $f(z) = z^2$ is analytic everywhere.

---

### 4. Consequences of Path Independence

#### 4.1. Evaluation of Integrals Using Antiderivatives

**Key Concept:** If $f(z)$ has an antiderivative $F(z)$ in a domain $D$, then for any piecewise smooth curve $C$ from $z_0$ to $z_1$ in $D$,
$\int_C f(z) dz = F(z_1) - F(z_0)$.

**How to find $F(z)$:**
*   Look for common functions whose derivatives are $f(z)$. For example:
    *   If $f(z) = e^z$, then $F(z) = e^z$.
    *   If $f(z) = \cos(z)$, then $F(z) = \sin(z)$.
    *   If $f(z) = z^n$ (for integer $n \neq -1$), then $F(z) = \frac{z^{n+1}}{n+1}$.
    *   If $f(z) = \frac{1}{z}$, then $F(z) = \log(z)$ (with careful consideration of branch cuts).

**Reference (Kreyszig, 10th ed., Section 13.4):** This section elaborates on the concept of antiderivatives and their use in evaluating complex integrals.

**Example:**
Evaluate $\int_C \cos(z) dz$, where $C$ is any path from $z_0 = 0$ to $z_1 = \pi + i\pi$.
Since $f(z) = \cos(z)$ is analytic everywhere, it has an antiderivative $F(z) = \sin(z)$.
$\int_C \cos(z) dz = F(z_1) - F(z_0) = \sin(\pi + i\pi) - \sin(0)$.
$\sin(\pi + i\pi) = \sin(\pi)\cos(i\pi) + \cos(\pi)\sin(i\pi)$
$\sin(\pi) = 0$, $\cos(\pi) = -1$.
$\cos(i\pi) = \cosh(\pi)$.
$\sin(i\pi) = i\sinh(\pi)$.
So, $\sin(\pi + i\pi) = (0)(\cosh(\pi)) + (-1)(i\sinh(\pi)) = -i\sinh(\pi)$.
$\sin(0) = 0$.
Therefore, $\int_C \cos(z) dz = -i\sinh(\pi)$.

#### 4.2. Integrals Over Closed Paths

**Key Concept:** If $f(z)$ is analytic in a simply connected domain $D$, and $C$ is a closed piecewise smooth curve in $D$, then $\oint_C f(z) dz = 0$. This is a direct consequence of path independence.

**Reference (Ramana, 39th ed., Chapter 23):** Ramana's book provides numerous examples of applying these principles in various engineering contexts.

**Example:**
Evaluate $\oint_C e^{z^2} dz$, where $C$ is the circle $|z|=1$.
The function $f(z) = e^{z^2}$ is analytic in the entire complex plane. The domain enclosed by the circle $|z|=1$ is simply connected, and the function is analytic within this domain.
By Cauchy's Integral Theorem (a consequence of path independence), the integral over the closed path is 0.
$\oint_{|z|=1} e^{z^2} dz = 0$.

---

### 5. Domains and Path Independence

**Definition:**
*   **Simply Connected Domain:** A domain in which every simple closed curve encloses only points belonging to the domain. Essentially, it has no "holes."
*   **Multiply Connected Domain:** A domain with "holes," meaning there exist simple closed curves that enclose points outside the domain.

**Theorem (Extension to Multiply Connected Domains):**
If $f(z)$ is analytic in a domain $D$ that is a region between two non-intersecting simple closed curves $C_1$ (outer) and $C_2$ (inner), then the integral of $f(z)$ along $C_1$ is equal to the integral of $f(z)$ along $C_2$, provided both curves are traversed in the same orientation (e.g., counterclockwise).

$\oint_{C_1} f(z) dz = \oint_{C_2} f(z) dz$

**How this relates to path independence:**
We can "cut" the multiply connected domain to make it simply connected. Imagine a bridge connecting $C_1$ and $C_2$. The integral over $C_1$ plus the integral along the bridge, then backwards along the bridge and then along $C_2$ (in the opposite direction), and finally back to the starting point forms a closed path in a simply connected region.

**Proof Sketch (from Grewal, 44th ed., Chapter 13):**
Consider a domain $D$ which is the region between two simple closed curves $C_1$ and $C_2$, with $C_2$ inside $C_1$. Assume $f(z)$ is analytic in $D$. Let $C_1$ be traversed counterclockwise and $C_2$ also counterclockwise.

Construct a new path $C'$ by going from a point $A$ on $C_1$ counterclockwise along $C_1$ to $B$, then along a line segment $L_1$ from $B$ to a point $D$ on $C_2$. Then traverse $C_2$ clockwise (from $D$ to $E$) and then along a line segment $L_2$ from $E$ back to $A$. The segments $L_1$ and $L_2$ are traversed in opposite directions, so their contributions cancel out. The entire path $C'$ is a closed path in a simply connected region.

$\oint_{C'} f(z) dz = 0$ (by Cauchy's Integral Theorem).
$\int_{C_1 \text{ (part)}} f(z) dz + \int_{L_1} f(z) dz + \int_{C_2 \text{ (reversed)}} f(z) dz + \int_{L_2} f(z) dz = 0$.
$\int_{C_1} f(z) dz + \int_{L_1} f(z) dz - \int_{C_2} f(z) dz - \int_{L_1} f(z) dz = 0$.
(Note: The segment $L_2$ goes from $E$ on $C_2$ to $A$ on $C_1$. $L_1$ goes from $B$ on $C_1$ to $D$ on $C_2$. If we choose $A=B$ and $D=E$, and $L_1$ and $L_2$ are the same line segment traversed in opposite directions, their integrals cancel).

$\int_{C_1} f(z) dz - \int_{C_2} f(z) dz = 0$
$\int_{C_1} f(z) dz = \int_{C_2} f(z) dz$.

**Important Note:** If the orientation of $C_2$ is also taken counterclockwise, then $\int_{C_2 \text{ (reversed)}} f(z) dz = -\int_{C_2} f(z) dz$.
The closed path would be $C_1$ + bridge + $C_2$ (reversed) + bridge (reversed).
$\int_{C_1} f(z) dz + \int_{\text{bridge}} f(z) dz + \int_{C_2 \text{ (rev)}} f(z) dz + \int_{\text{bridge (rev)}} f(z) dz = 0$
$\int_{C_1} f(z) dz + \int_{\text{bridge}} f(z) dz - \int_{C_2} f(z) dz - \int_{\text{bridge}} f(z) dz = 0$
$\int_{C_1} f(z) dz - \int_{C_2} f(z) dz = 0 \implies \int_{C_1} f(z) dz = \int_{C_2} f(z) dz$.

**Example:**
Let $f(z) = \frac{1}{z}$. This function is analytic everywhere except at $z=0$.
Consider the domain $D$ between the circle $C_1: |z|=2$ and $C_2: |z|=1$, both traversed counterclockwise.
$f(z) = \frac{1}{z}$ is analytic in this domain $D$.
$\int_{C_1} \frac{1}{z} dz = \int_{C_2} \frac{1}{z} dz$.

Let's evaluate $\int_{C_1} \frac{1}{z} dz$ for $C_1: |z|=2$, counterclockwise.
$z = 2e^{i\theta}$, $dz = 2ie^{i\theta} d\theta$. $\theta$ from 0 to $2\pi$.
$\int_0^{2\pi} \frac{1}{2e^{i\theta}} (2ie^{i\theta}) d\theta = \int_0^{2\pi} i d\theta = i[\theta]_0^{2\pi} = 2\pi i$.

Now let's evaluate $\int_{C_2} \frac{1}{z} dz$ for $C_2: |z|=1$, counterclockwise.
$z = e^{i\theta}$, $dz = ie^{i\theta} d\theta$. $\theta$ from 0 to $2\pi$.
$\int_0^{2\pi} \frac{1}{e^{i\theta}} (ie^{i\theta}) d\theta = \int_0^{2\pi} i d\theta = i[\theta]_0^{2\pi} = 2\pi i$.

The results are equal, as expected.

---

### 6. When Integrals are NOT Path-Independent

**Key Concept:** If $f(z)$ is not analytic in the domain of integration (i.e., it has singularities), then its integral might not be path-independent.

**Reference (Ranzo, 39th ed., Chapter 23):** Ramana's book also covers cases where singularities affect the integral value.

**Example:**
Let $f(z) = \frac{1}{z}$ and consider paths from $z_0 = -1$ to $z_1 = 1$.

*   **Path 1: Straight line along the real axis from -1 to 1.**
    This path passes through the singularity $z=0$. The integral is improper and does not converge in the usual sense. However, if we consider a principal value, it can be evaluated.

*   **Path 2: Upper semi-circle from -1 to 1.**
    $z = e^{i\theta}$, $dz = ie^{i\theta} d\theta$. $\theta$ from $\pi$ to $0$.
    $\int_{\pi}^0 \frac{1}{e^{i\theta}} (ie^{i\theta}) d\theta = \int_{\pi}^0 i d\theta = i[\theta]_{\pi}^0 = i(0 - \pi) = -i\pi$.

*   **Path 3: Lower semi-circle from -1 to 1.**
    $z = e^{i\theta}$, $dz = ie^{i\theta} d\theta$. $\theta$ from $\pi$ to $2\pi$.
    $\int_{\pi}^{2\pi} \frac{1}{e^{i\theta}} (ie^{i\theta}) d\theta = \int_{\pi}^{2\pi} i d\theta = i[\theta]_{\pi}^{2\pi} = i(2\pi - \pi) = i\pi$.

The values of the integrals over the upper and lower semi-circles are different, demonstrating that the integral of $f(z) = \frac{1}{z}$ from -1 to 1 is *not* path-independent because of the singularity at $z=0$.

---

### 7. Connection to Course Outcomes Summary

*   **CO1 (Fourier Transforms):** While not directly about Fourier transforms, the concept of analyticity of functions, which is central to path independence, is also crucial for understanding the properties of functions in the frequency domain and their Fourier transforms.
*   **CO2 (Analyticity and Conformal Mapping):** Path independence is a direct consequence of analyticity. Understanding analyticity is the first step towards understanding conformal mapping, as conformal mappings preserve angles and are based on analytic functions.
*   **CO3 (Complex Integrals using Cauchy's Theorems):** This topic is foundational for CO3. Cauchy's Integral Theorem, which states that the integral of an analytic function over a closed curve is zero, is a direct application of path independence. This allows us to simplify many integral calculations by choosing simpler paths or recognizing that the integral is zero.
*   **CO4 (Series Expansion and Residue Theorem):** Path independence, especially the extension to multiply connected domains, is what allows us to relate integrals over different curves. This is a stepping stone to understanding how singularities (which lead to series expansions like Laurent series) influence the integral, ultimately leading to the Residue Theorem.

---

### 8. Important Points to Remember

*   **Antiderivative is Key:** Path independence is guaranteed if and only if the integrand has an antiderivative in the domain.
*   **Analyticity is Sufficient (for simply connected domains):** If $f(z)$ is analytic in a simply connected domain $D$, then its integral is path-independent within $D$.
*   **Singularities Break Path Independence:** If $f(z)$ has singularities in the domain of integration, the integral may depend on the path taken.
*   **Cauchy's Integral Theorem:** A direct consequence of path independence for closed paths in analytic domains. $\oint_C f(z) dz = 0$ if $f(z)$ is analytic within and on $C$.
*   **Multiply Connected Domains:** For multiply connected domains, integrals are equal over curves that bound the holes, provided orientations are handled correctly.
*   **Practical Use:** Path independence allows you to choose the *easiest* path to evaluate an integral.

---

### 9. Practice Questions

1.  Let $f(z) = e^z$. Is the integral of $f(z)$ path-independent in the complex plane? If so, evaluate $\int_C e^z dz$ where $C$ is the line segment from $z=0$ to $z=1+i$.
2.  Consider the function $f(z) = \frac{1}{z^2}$. Is the integral of $f(z)$ path-independent in the domain $D = \mathbb{C} \setminus \{0\}$? Evaluate $\int_C \frac{1}{z^2} dz$ where $C$ is the unit circle $|z|=1$ traversed counterclockwise.
3.  Let $f(z) = \frac{1}{z-a}$. If $C$ is a simple closed curve enclosing the point $a$, is $\oint_C \frac{1}{z-a} dz = 0$? Explain your answer in terms of path independence.
4.  Evaluate $\int_C z^3 dz$ from $z=0$ to $z=2+2i$, where $C$ is any path from $0$ to $2+2i$.
5.  Let $f(z) = \frac{\sin(z)}{z}$. Is this function analytic in the entire complex plane? Explain whether its integral is path-independent in the entire complex plane.

---

### 10. Answers to Practice Questions

1.  **Yes**, the integral of $f(z) = e^z$ is path-independent in the complex plane because $f(z)$ is analytic everywhere.
    The antiderivative of $e^z$ is $F(z) = e^z$.
    $\int_C e^z dz = F(1+i) - F(0) = e^{1+i} - e^0 = e(\cos(1) + i\sin(1)) - 1$.

2.  **Yes**, the integral of $f(z) = \frac{1}{z^2}$ is path-independent in the domain $D = \mathbb{C} \setminus \{0\}$.
    The antiderivative of $z^{-2}$ is $F(z) = \frac{z^{-1}}{-1} = -\frac{1}{z}$.
    Since the unit circle $|z|=1$ encloses the singularity $z=0$, the function is not analytic within the unit disk. However, the question asks about the domain $D = \mathbb{C} \setminus \{0\}$. The unit circle $C$ is a closed curve in $D$ where $f(z)$ is analytic. By Cauchy's Integral Theorem (which is based on path independence), the integral over a closed path in a domain where the function is analytic is zero.
    Alternatively, using the antiderivative: $C$ is a closed path, so the start and end points are the same.
    Let's consider two points $z_0$ and $z_1$ on the circle, $z_0 = 1$ and $z_1 = 1$.
    $\int_C \frac{1}{z^2} dz = F(1) - F(1) = (-\frac{1}{1}) - (-\frac{1}{1}) = -1 - (-1) = 0$.

3.  **No**, the integral of $f(z) = \frac{1}{z-a}$ is **not** zero over a simple closed curve $C$ enclosing $a$, if $a$ is a singularity of the function. This is precisely because the function is not analytic in the entire region enclosed by $C$ (due to the singularity at $a$).
    The integral $\oint_C \frac{1}{z-a} dz$ evaluates to $2\pi i$ (by Cauchy's Integral Formula or Residue Theorem), not 0. This demonstrates that path independence does not hold across the singularity.

4.  The function $f(z) = z^3$ is analytic everywhere. Its antiderivative is $F(z) = \frac{z^4}{4}$.
    The integral is $\int_C z^3 dz = F(2+2i) - F(0) = \frac{(2+2i)^4}{4} - \frac{0^4}{4}$.
    $(2+2i)^4 = (2(1+i))^4 = 16(1+i)^4$.
    $(1+i)^2 = 2i$.
    $(1+i)^4 = ((1+i)^2)^2 = (2i)^2 = 4i^2 = -4$.
    So, $\frac{16(-4)}{4} = -16$.

5.  The function $f(z) = \frac{\sin(z)}{z}$ has a singularity at $z=0$. As $z \to 0$, $\sin(z) \approx z$, so $\frac{\sin(z)}{z} \to 1$. This is a removable singularity.
    We can define $f(0)=1$. With this definition, $f(z)$ becomes analytic in the entire complex plane. Therefore, its integral is path-independent in the entire complex plane.
    If we consider the original definition where $f(0)$ is undefined, then the function is not analytic at $z=0$. However, because the singularity is removable, the integral will still be path-independent over any domain that does not contain $z=0$. If we consider a domain containing $z=0$ and a closed path around it, the integral would be $2\pi i$ (by Cauchy's Integral Formula or Residue Theorem applied to $\frac{\sin(z)}{z}$ at $z=0$), not 0. But for paths that avoid $z=0$, it is path independent. For the *entire* complex plane as the domain, the answer depends on how one treats the removable singularity. Typically, we assume the function is extended analytically.

---
