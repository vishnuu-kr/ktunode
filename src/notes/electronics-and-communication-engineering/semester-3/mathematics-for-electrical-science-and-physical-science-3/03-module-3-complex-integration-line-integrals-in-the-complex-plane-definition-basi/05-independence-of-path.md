---
title: "Independence of path"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 3: Complex Integration: Line integrals in the complex plane (Definition & Basic properties)"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe26c"
status: "completed"
scrapedAt: "2026-05-23T17:47:14.282Z"
---
# Mathematics for Electrical Science and Physical Science – 3

## Module 3: Complex Integration: Line Integrals in the Complex Plane

### Topic: Independence of Path

This topic explores the concept of path independence for line integrals in the complex plane, a crucial property that simplifies complex integration calculations.

---

### Learning Outcomes:

*   Understand the concept of path independence for complex line integrals.
*   Relate path independence to the existence of an antiderivative for analytic functions.
*   Apply the Fundamental Theorem of Calculus for complex line integrals.

---

### Key Concepts and Definitions:

#### 1. Line Integral in the Complex Plane Recap

Before diving into path independence, let's briefly recall the definition of a complex line integral:

For a function $f(z)$ defined on a domain $D$ and a smooth curve $C$ in $D$ parameterized by $z(t)$ for $a \le t \le b$, the line integral of $f(z)$ along $C$ is defined as:

$$ \int_C f(z) dz = \int_a^b f(z(t)) z'(t) dt $$

---

#### 2. Path Independence

A line integral $\int_C f(z) dz$ is said to be **independent of path** if the value of the integral depends only on the endpoints of the path $C$, and not on the specific path taken between those endpoints.

In other words, if $C_1$ and $C_2$ are two different paths in a domain $D$ connecting the same two points $z_1$ and $z_2$, and if $f(z)$ satisfies certain conditions within $D$, then:

$$ \int_{C_1} f(z) dz = \int_{C_2} f(z) dz $$

---

#### 3. Conditions for Path Independence: The Role of Antiderivatives

The fundamental condition for a line integral to be path independent is the existence of an **antiderivative** (also known as a primitive) for the integrand $f(z)$.

**Theorem:** Let $f(z)$ be a function defined in a domain $D$. The line integral $\int_C f(z) dz$ is independent of path in $D$ if and only if there exists a function $F(z)$ such that $F'(z) = f(z)$ for all $z$ in $D$. In this case, $F(z)$ is an antiderivative of $f(z)$.

**Proof Sketch:**

*   **If an antiderivative $F(z)$ exists:**
    Let $C$ be a smooth curve in $D$ parameterized by $z(t)$ for $a \le t \le b$, with $z(a) = z_1$ and $z(b) = z_2$.
    Then, by the chain rule for complex functions:
    $$ \frac{d}{dt} F(z(t)) = F'(z(t)) z'(t) = f(z(t)) z'(t) $$
    Using the Fundamental Theorem of Calculus for real integrals:
    $$ \int_C f(z) dz = \int_a^b f(z(t)) z'(t) dt = \int_a^b \frac{d}{dt} F(z(t)) dt = F(z(b)) - F(z(a)) = F(z_2) - F(z_1) $$
    This result shows that the integral depends only on the endpoints $z_1$ and $z_2$, hence it is path independent.

*   **If the integral is path independent:**
    We can define a function $G(z)$ for any $z_0$ in $D$ by integrating $f(z)$ from a fixed point $z_0$ to $z$ along any path $C_z$ in $D$:
    $$ G(z) = \int_{z_0}^z f(w) dw $$
    It can be shown that $G'(z) = f(z)$ for all $z$ in $D$. This function $G(z)$ is an antiderivative of $f(z)$.

**Important Note:** The existence of an antiderivative is directly linked to the analyticity of the function $f(z)$.

---

#### 4. Relationship with Analyticity

The existence of an antiderivative for $f(z)$ is strongly tied to whether $f(z)$ is analytic.

**Theorem:** If $f(z)$ is analytic in a domain $D$, then $f(z)$ has an antiderivative in $D$. Consequently, the line integral $\int_C f(z) dz$ is independent of path for any smooth curve $C$ lying entirely within $D$.

**Proof (based on Kreyszig, 10th ed., Section 6.4):**
If $f(z)$ is analytic in a domain $D$, then its derivative $f'(z)$ exists in $D$. According to Goursat's Theorem (which is a more advanced result related to Cauchy's Integral Theorem), if $f(z)$ is analytic in a simply connected domain $D$, then $\oint_C f(z) dz = 0$ for every closed contour $C$ in $D$. This implies path independence.

More directly, if $f(z)$ is analytic in a domain $D$, then its complex antiderivative $F(z)$ exists, where $F'(z) = f(z)$. This $F(z)$ can be constructed by integrating $f(w)$ from a fixed point $z_0 \in D$ to any $z \in D$ along any path within $D$.

**Corollaries and Implications:**

*   **If $f(z)$ is analytic in a simply connected domain $D$, then $\int_C f(z) dz = 0$ for any closed contour $C$ in $D$.**
    This is a direct consequence of path independence. If $C$ is a closed contour, the start and end points are the same. Since the integral is path independent, it must be the same regardless of the path taken, including a path of zero length. Alternatively, any closed contour can be seen as a path from $z_0$ back to $z_0$, so $\int_C f(z) dz = F(z_0) - F(z_0) = 0$.

*   **If $f(z)$ is analytic in a domain $D$, then the integral of $f(z)$ from $z_1$ to $z_2$ is the same for all paths connecting $z_1$ and $z_2$ within $D$.**

**Crucial Distinction:**
Path independence is guaranteed if $f(z)$ is analytic throughout the domain containing the paths. If $f(z)$ has singularities, path independence may not hold over regions containing these singularities.

---

#### 5. The Fundamental Theorem of Calculus for Complex Line Integrals

This theorem is the direct application of path independence for functions with antiderivatives.

**Theorem (Fundamental Theorem of Calculus for Complex Line Integrals):**
Let $f(z)$ be a function defined in a domain $D$, and let $F(z)$ be an antiderivative of $f(z)$ in $D$ (i.e., $F'(z) = f(z)$ for all $z \in D$). If $C$ is any smooth curve in $D$ from $z_1$ to $z_2$, then:

$$ \int_C f(z) dz = F(z_2) - F(z_1) $$

**This theorem is a powerful tool because:**
*   It bypasses the need for parameterization of the curve $C$.
*   It works for any path connecting $z_1$ and $z_2$, as long as the path and the antiderivative exist within the domain $D$.

**Connection to Course Outcomes:**
*   **CO3:** "Compute complex integrals using Cauchy's integral theorem and Cauchy's integral formula." This theorem is a direct extension. If $f(z)$ is analytic, it has an antiderivative, and this theorem is applied. Cauchy's Integral Theorem states $\oint_C f(z) dz = 0$ for analytic $f(z)$ and closed $C$, which is a special case of the Fundamental Theorem where $z_1=z_2$.

---

### Examples:

**Example 1: Integral of a Polynomial**

Let $f(z) = z^2$. Find the integral of $f(z)$ from $z_1 = 0$ to $z_2 = 1+i$ along any path.

*   **Analysis:** The function $f(z) = z^2$ is a polynomial, which is analytic everywhere in the complex plane. Therefore, it has an antiderivative.
*   **Finding the Antiderivative:** An antiderivative of $z^2$ is $F(z) = \frac{z^3}{3}$.
*   **Applying the Fundamental Theorem:**
    $$ \int_C z^2 dz = F(1+i) - F(0) = \frac{(1+i)^3}{3} - \frac{0^3}{3} $$
    Let's compute $(1+i)^3$:
    $(1+i)^3 = 1^3 + 3(1^2)(i) + 3(1)(i^2) + i^3$
    $= 1 + 3i + 3(-1) + (-i)$
    $= 1 + 3i - 3 - i$
    $= -2 + 2i$
    So,
    $$ \int_C z^2 dz = \frac{-2 + 2i}{3} $$

    **Verification by path:**
    Let's choose a path $C_1$: the line segment from $0$ to $1$. $z(t) = t$, $0 \le t \le 1$, $z'(t) = 1$.
    $$ \int_{C_1} z^2 dz = \int_0^1 t^2 (1) dt = \left[\frac{t^3}{3}\right]_0^1 = \frac{1}{3} $$
    Let's choose a path $C_2$: the line segment from $0$ to $i$, then from $i$ to $1+i$.
    Path $C_2a$: from $0$ to $i$. $z(t) = it$, $0 \le t \le 1$, $z'(t) = i$.
    $$ \int_{C_{2a}} z^2 dz = \int_0^1 (it)^2 (i) dt = \int_0^1 (-t^2) i dt = i \left[-\frac{t^3}{3}\right]_0^1 = -\frac{i}{3} $$
    Path $C_2b$: from $i$ to $1+i$. $z(t) = 1 + it$, $0 \le t \le 1$, $z'(t) = i$.
    $$ \int_{C_{2b}} z^2 dz = \int_0^1 (1+it)^2 (i) dt $$
    Let $u = 1+it$, $du = i dt$. When $t=0, u=1$. When $t=1, u=1+i$.
    $$ \int_1^{1+i} u^2 du = \left[\frac{u^3}{3}\right]_1^{1+i} = \frac{(1+i)^3}{3} - \frac{1^3}{3} = \frac{-2+2i}{3} - \frac{1}{3} = \frac{-3+2i}{3} $$
    The total integral along $C_2$ is the sum:
    $$ \int_{C_2} z^2 dz = \int_{C_{2a}} z^2 dz + \int_{C_{2b}} z^2 dz = -\frac{i}{3} + \frac{-3+2i}{3} = \frac{-3+i}{3} $$
    Wait, there's a mistake in my manual path integration. Let's re-evaluate $C_2b$.

    **Correction for Example 1 Path Verification:**
    The mistake was in combining the paths. The Fundamental Theorem states the *entire* integral is path independent. The sum of the integrals along the segments should yield the same final result.

    Let's redo the verification more carefully.

    **Path 1:** Straight line from $0$ to $1+i$.
    Parameterization: $z(t) = (1+i)t$, $0 \le t \le 1$. $z'(t) = 1+i$.
    $$ \int_{C_1} z^2 dz = \int_0^1 ((1+i)t)^2 (1+i) dt = \int_0^1 (1+i)^3 t^2 dt $$
    $$ = (1+i)^3 \int_0^1 t^2 dt = (-2+2i) \left[\frac{t^3}{3}\right]_0^1 = (-2+2i) \frac{1}{3} = \frac{-2+2i}{3} $$
    This matches the result from the Fundamental Theorem.

    **Path 2:** Line segment from $0$ to $1$, then line segment from $1$ to $1+i$.
    Path $C_{2a}$: from $0$ to $1$. $z(t) = t$, $0 \le t \le 1$, $z'(t) = 1$.
    $$ \int_{C_{2a}} z^2 dz = \int_0^1 t^2 (1) dt = \left[\frac{t^3}{3}\right]_0^1 = \frac{1}{3} $$
    Path $C_{2b}$: from $1$ to $1+i$. $z(t) = 1 + it$, $0 \le t \le 1$, $z'(t) = i$.
    $$ \int_{C_{2b}} z^2 dz = \int_0^1 (1+it)^2 (i) dt = i \int_0^1 (1 + 2it - t^2) dt $$
    $$ = i \left[t + 2i\frac{t^2}{2} - \frac{t^3}{3}\right]_0^1 = i \left[1 + i - \frac{1}{3}\right] = i \left[\frac{2}{3} + i\right] = \frac{2i}{3} + i^2 = \frac{2i}{3} - 1 $$
    The total integral along Path 2:
    $$ \int_{C_2} z^2 dz = \int_{C_{2a}} z^2 dz + \int_{C_{2b}} z^2 dz = \frac{1}{3} + \left(\frac{2i}{3} - 1\right) = \frac{1}{3} + \frac{2i}{3} - \frac{3}{3} = \frac{-2+2i}{3} $$
    This also matches the result from the Fundamental Theorem. The path independence is confirmed.

**Example 2: Integral of a Function with a Singularity**

Let $f(z) = \frac{1}{z}$. Find the integral of $f(z)$ from $z_1 = 1$ to $z_2 = -1$.

*   **Analysis:** The function $f(z) = \frac{1}{z}$ has a singularity at $z=0$. The domain $D$ where the paths lie must not contain $z=0$.
*   **Case A: Paths in the upper half-plane ($Im(z) > 0$).**
    Let $C_1$ be the upper semi-circle from $1$ to $-1$. $z(t) = e^{it}$, $0 \le t \le \pi$. $z'(t) = ie^{it}$.
    $$ \int_{C_1} \frac{1}{z} dz = \int_0^\pi \frac{1}{e^{it}} (ie^{it}) dt = \int_0^\pi i dt = [it]_0^\pi = i\pi $$
    Let $C_2$ be the straight line segment from $1$ to $-1$ in the upper half-plane. $z(t) = 1 + (-2)t$, $0 \le t \le 1$. $z'(t) = -2$.
    $$ \int_{C_2} \frac{1}{z} dz = \int_0^1 \frac{1}{1-2t} (-2) dt $$
    Let $u = 1-2t$, $du = -2 dt$. When $t=0, u=1$. When $t=1, u=-1$.
    $$ \int_1^{-1} \frac{1}{u} du = [\ln|u|]_1^{-1} = \ln|-1| - \ln|1| = \ln(1) - \ln(1) = 0 $$
    **Wait!** The integral of $1/z$ involves the logarithm, which is multi-valued. When we say $F'(z) = f(z)$, we mean within a *specific branch* of the logarithm.
    The antiderivative of $\frac{1}{z}$ is $\ln(z)$.
    In the upper half-plane, we can use the principal branch of the logarithm.
    $F(z) = \operatorname{Ln}(z) = \ln|z| + i \operatorname{Arg}(z)$, where $-\pi < \operatorname{Arg}(z) < \pi$.
    For $z_1 = 1$: $\operatorname{Ln}(1) = \ln(1) + i \cdot 0 = 0$.
    For $z_2 = -1$: $\operatorname{Ln}(-1) = \ln(1) + i \cdot \pi = i\pi$.
    Using the Fundamental Theorem: $\int_C \frac{1}{z} dz = \operatorname{Ln}(-1) - \operatorname{Ln}(1) = i\pi - 0 = i\pi$.
    This matches the result from the semi-circle path. The straight line path integration also needs careful consideration of the branch. For the straight line from $1$ to $-1$, $z(t)=1-2t$. When $t \in [0, 1/2)$, $z$ is on the positive real axis. When $t \in (1/2, 1]$, $z$ is on the negative real axis. The argument of $z$ jumps from $0$ to $\pi$ at $t=1/2$.
    The correct evaluation using antiderivative:
    $\int_C \frac{1}{z} dz = \operatorname{Ln}(-1) - \operatorname{Ln}(1)$. If we use the principal branch consistently, we need to ensure the path stays within the domain of the branch.

    Consider a path that stays entirely in the upper half-plane. The straight line path from $1$ to $-1$ *does* pass through the negative real axis (if taken on the real axis), but if we consider it *in the upper half-plane*, we can parameterize it as $z(t) = e^{it}$ for $t$ from $0$ to $\pi$. This is the semi-circle, resulting in $i\pi$.

    Let's consider the straight line from $1$ to $-1$ in the upper half-plane as $z(t) = t$ for $t \in [1, -1]$. This means $z$ goes from $1$ to $-1$ along the real axis. This path passes through $0$, which is a singularity. If the path does not contain singularities of $f(z)$, AND $f(z)$ is analytic in the domain containing the path, then path independence holds.

*   **Case B: Paths in the lower half-plane ($Im(z) < 0$).**
    Let $C_3$ be the lower semi-circle from $1$ to $-1$. $z(t) = e^{it}$, $\pi \le t \le 2\pi$. $z'(t) = ie^{it}$.
    $$ \int_{C_3} \frac{1}{z} dz = \int_\pi^{2\pi} \frac{1}{e^{it}} (ie^{it}) dt = \int_\pi^{2\pi} i dt = [it]_\pi^{2\pi} = i(2\pi) - i\pi = i\pi $$
    Wait, this should be different. Let's use the standard parameterization for lower semi-circle: $z(t) = e^{-it}$ for $0 \le t \le \pi$. $z'(t) = -ie^{-it}$.
    $$ \int_{C_3} \frac{1}{z} dz = \int_0^\pi \frac{1}{e^{-it}} (-ie^{-it}) dt = \int_0^\pi -i dt = [-it]_0^\pi = -i\pi $$
    Here, we are using $z_1=1$ and $z_2=-1$.
    For the lower half-plane, we can use the branch $\operatorname{Ln}_2(z) = \ln|z| + i \operatorname{Arg}_2(z)$, where $0 < \operatorname{Arg}_2(z) < 2\pi$.
    $z_1 = 1$: $\operatorname{Ln}_2(1) = \ln(1) + i \cdot 0 = 0$.
    $z_2 = -1$: $\operatorname{Ln}_2(-1) = \ln(1) + i \cdot \pi = i\pi$.
    The result should be $i\pi - 0 = i\pi$. This still doesn't match $-i\pi$.

    **The key issue with $1/z$ is that it does NOT have an antiderivative that is analytic everywhere except $z=0$.** The logarithm function $\ln(z)$ is multi-valued. When we choose a branch cut (e.g., along the negative real axis for the principal branch), the function $\operatorname{Ln}(z)$ is analytic in the complex plane minus the negative real axis.
    If we consider paths entirely within the upper half-plane (e.g., the upper semi-circle from 1 to -1), the principal branch of $\ln(z)$ works, and the result is $i\pi$.
    If we consider paths entirely within the lower half-plane, we need a different branch of $\ln(z)$.

    **The crucial insight for $1/z$ and path independence:**
    If $f(z)$ is analytic in a simply connected domain $D$, then $\int_C f(z) dz$ is path independent in $D$.
    The function $f(z) = 1/z$ is analytic in $\mathbb{C} \setminus \{0\}$. This domain is not simply connected.
    Consider a closed loop around $0$. For example, the unit circle $C: |z|=1$.
    Using parameterization $z(t) = e^{it}$, $0 \le t \le 2\pi$, $z'(t) = ie^{it}$:
    $$ \oint_C \frac{1}{z} dz = \int_0^{2\pi} \frac{1}{e^{it}} (ie^{it}) dt = \int_0^{2\pi} i dt = [it]_0^{2\pi} = 2\pi i $$
    This result is non-zero, indicating that $\frac{1}{z}$ does *not* have an antiderivative defined on the entire domain $\mathbb{C} \setminus \{0\}$. The integral depends on the path (specifically, the winding number around the singularity).
    However, if we restrict our paths to a simply connected subset of $\mathbb{C} \setminus \{0\}$ (like the upper half-plane, or the domain excluding a slit), then path independence holds within *that* subset.

**Example 3: Integral of $e^z$**

Let $f(z) = e^z$. Find the integral of $f(z)$ from $z_1 = 0$ to $z_2 = \pi i$.

*   **Analysis:** $f(z) = e^z$ is analytic everywhere in the complex plane. It is entire.
*   **Finding the Antiderivative:** An antiderivative of $e^z$ is $F(z) = e^z$.
*   **Applying the Fundamental Theorem:**
    $$ \int_C e^z dz = F(\pi i) - F(0) = e^{\pi i} - e^0 $$
    We know $e^{\pi i} = \cos(\pi) + i \sin(\pi) = -1 + 0i = -1$.
    And $e^0 = 1$.
    So,
    $$ \int_C e^z dz = -1 - 1 = -2 $$

---

### Important Points to Remember:

*   **Path independence hinges on the existence of an antiderivative.**
*   **A function that is analytic in a simply connected domain always has an antiderivative in that domain, guaranteeing path independence.**
*   **If a function $f(z)$ has singularities, the domain must be carefully chosen to exclude these singularities for path independence to hold over that domain.**
*   **The Fundamental Theorem of Calculus for complex line integrals ($\int_C f(z) dz = F(z_2) - F(z_1)$) is a powerful shortcut when an antiderivative $F(z)$ is known.**
*   **For analytic functions, any closed path integral is zero ($\oint_C f(z) dz = 0$), as the start and end points are the same.** This is a direct consequence of path independence.
*   **Functions like $1/z$ or $\operatorname{Log}(z)$ are not analytic everywhere and can lead to path-dependent integrals if paths enclose their singularities.**

---

### Practice Questions:

1.  Let $f(z) = z^3$. Evaluate $\int_C f(z) dz$ from $z_1 = 1+i$ to $z_2 = 2-i$ along any smooth path $C$.
2.  Let $f(z) = \cos(z)$. Evaluate $\int_C f(z) dz$ from $z_1 = 0$ to $z_2 = \pi$.
3.  Determine if the line integral $\int_C e^{z^2} dz$ is independent of path in the domain $|z| < 1$. Justify your answer.
4.  Evaluate $\oint_C \frac{1}{z-a} dz$ where $C$ is the circle $|z-a|=R$ ($R>0$). Does this result indicate path independence for $f(z) = \frac{1}{z-a}$ over the entire complex plane minus $z=a$?
5.  Consider the function $f(z) = \bar{z}$. Is the integral $\int_C f(z) dz$ independent of path? Explain why or why not. (Hint: Consider $\bar{z}$ is not analytic).

---

### Answers to Practice Questions:

1.  **Solution:** $f(z) = z^3$ is analytic everywhere. An antiderivative is $F(z) = \frac{z^4}{4}$.
    $$ \int_C z^3 dz = F(2-i) - F(1+i) = \frac{(2-i)^4}{4} - \frac{(1+i)^4}{4} $$
    Let's compute $(1+i)^4 = ((1+i)^2)^2 = (1+2i+i^2)^2 = (2i)^2 = -4$.
    $(2-i)^2 = 4 - 4i + i^2 = 3-4i$.
    $(2-i)^4 = (3-4i)^2 = 9 - 24i + 16i^2 = 9 - 24i - 16 = -7 - 24i$.
    $$ \int_C z^3 dz = \frac{-7 - 24i}{4} - \frac{-4}{4} = \frac{-7 - 24i + 4}{4} = \frac{-3 - 24i}{4} = -\frac{3}{4} - 6i $$

2.  **Solution:** $f(z) = \cos(z)$ is analytic everywhere. An antiderivative is $F(z) = \sin(z)$.
    $$ \int_C \cos(z) dz = F(\pi) - F(0) = \sin(\pi) - \sin(0) = 0 - 0 = 0 $$

3.  **Solution:** The function $f(z) = e^{z^2}$ is a composition of analytic functions ($z^2$ and $e^u$), so it is analytic everywhere in the complex plane. Since the domain $|z| < 1$ is a simply connected domain, and $f(z)$ is analytic within this domain, the integral $\int_C e^{z^2} dz$ is independent of path for any smooth path $C$ lying entirely within $|z| < 1$.

4.  **Solution:** The function $f(z) = \frac{1}{z-a}$ is analytic everywhere except at $z=a$. The circle $C: |z-a|=R$ encloses the singularity $z=a$.
    Let $w = z-a$, so $dw = dz$. When $z=a+Re^{it}$, $w=Re^{it}$. The circle becomes $|w|=R$.
    $$ \oint_C \frac{1}{z-a} dz = \oint_{|w|=R} \frac{1}{w} dw $$
    Using parameterization $w(t) = Re^{it}$ for $0 \le t \le 2\pi$, $w'(t) = iRe^{it}$:
    $$ \int_0^{2\pi} \frac{1}{Re^{it}} (iRe^{it}) dt = \int_0^{2\pi} i dt = [it]_0^{2\pi} = 2\pi i $$
    This result ($2\pi i$) is non-zero. If an integral around a closed loop is non-zero, it implies that the integral is **not** independent of path over the domain containing the loop and the singularity. Therefore, this result indicates that $\int_C \frac{1}{z-a} dz$ is **not** independent of path over the entire complex plane minus the point $z=a$, because the path encircles the singularity. However, if we restrict our paths to a simply connected domain that *does not* contain $z=a$, then the integral would be path independent (and equal to 0 for closed paths).

5.  **Solution:** The function $f(z) = \bar{z}$ is **not analytic**. For a function to be analytic, it must be differentiable in a neighborhood, and its derivative must be continuous. $\bar{z} = x - iy$. Using the Cauchy-Riemann equations: $\frac{\partial u}{\partial x} = 1$, $\frac{\partial v}{\partial y} = -1$. Since $\frac{\partial u}{\partial x} \ne \frac{\partial v}{\partial y}$, the Cauchy-Riemann equations are not satisfied. Therefore, $\bar{z}$ is not analytic anywhere.
    Since $\bar{z}$ is not analytic, we cannot assume it has an antiderivative. Indeed, line integrals of $\bar{z}$ are generally path-dependent.
    Let's test two paths from $z_1 = 0$ to $z_2 = 1+i$:
    *   Path $C_1$: Line segment from $0$ to $1$, then from $1$ to $1+i$.
        $C_{1a}$: $z(t) = t$, $0 \le t \le 1$, $z'(t)=1$. $\int_{C_{1a}} \bar{z} dz = \int_0^1 t (1) dt = [\frac{t^2}{2}]_0^1 = \frac{1}{2}$.
        $C_{1b}$: $z(t) = 1+it$, $0 \le t \le 1$, $z'(t)=i$. $\int_{C_{1b}} \bar{z} dz = \int_0^1 (1-it) (i) dt = \int_0^1 (i + t) dt = [it + \frac{t^2}{2}]_0^1 = i + \frac{1}{2}$.
        Total for $C_1$: $\frac{1}{2} + (i + \frac{1}{2}) = 1+i$.
    *   Path $C_2$: Line segment from $0$ to $i$, then from $i$ to $1+i$.
        $C_{2a}$: $z(t) = it$, $0 \le t \le 1$, $z'(t)=i$. $\int_{C_{2a}} \bar{z} dz = \int_0^1 (-t) (i) dt = [-i\frac{t^2}{2}]_0^1 = -\frac{i}{2}$.
        $C_{2b}$: $z(t) = t+i$, $0 \le t \le 1$, $z'(t)=1$. $\int_{C_{2b}} \bar{z} dz = \int_0^1 (t-i) (1) dt = [\frac{t^2}{2} - it]_0^1 = \frac{1}{2} - i$.
        Total for $C_2$: $-\frac{i}{2} + (\frac{1}{2} - i) = \frac{1}{2} - \frac{3i}{2}$.
    Since $1+i \ne \frac{1}{2} - \frac{3i}{2}$, the integral of $\bar{z}$ is **not** independent of path.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |


### References:

*   **Kreyszig, E. (2016). *Advanced Engineering Mathematics* (10th ed.). John Wiley & Sons.**
    *   This text provides a thorough treatment of complex integration, including path independence and the Fundamental Theorem of Calculus for complex line integrals, typically in Chapter 13 or its equivalent section on complex analysis. It will cover the conditions for path independence related to analyticity and antiderivatives.

*   **Zill, D. G., & Shanahan, P. D. (2015). *Complex Analysis* (3rd ed.). Jones & Bartlett Learning.**
    *   This book is dedicated to complex analysis and will offer detailed explanations of path independence, its connection to analyticity, and the role of antiderivatives. It likely discusses these concepts in the early chapters on integration.

*   **Ramana, B. V. (2023). *Higher Engineering Mathematics* (39th ed.). McGraw-Hill Education.**
    *   This comprehensive textbook will likely cover complex integration, including path independence, as part of its advanced mathematics sections.

*   **Grewal, B. S. (2018). *Higher Engineering Mathematics* (44th ed.). Khanna Publishers.**
    *   Similar to Ramana, this textbook is expected to cover complex integration and path independence within its scope of engineering mathematics.

---

This concludes the notes on Independence of Path for complex line integrals. Understanding this concept is crucial for applying Cauchy's Integral Theorem and Cauchy's Integral Formula, which are covered in subsequent topics.