---
title: "Independence of path"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 3: Complex Integration: Line integrals in the complex plane (Definition & Basic properties)"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462caf"
status: "completed"
scrapedAt: "2026-05-20T17:50:49.981Z"
---
# Mathematics for Electrical Science and Physical Science – 3

## Module 3: Complex Integration: Line Integrals in the Complex Plane (Definition & Basic Properties)

### Topic: Independence of Path

---

### 1. Introduction and Motivation

In our study of line integrals in the complex plane, a crucial concept is whether the value of the integral depends on the path taken between two points or only on the endpoints. This property is known as **independence of path**. Understanding this concept is fundamental to simplifying complex integration problems and is closely related to the existence of antiderivatives of complex functions.

**Relating to Course Outcomes:** This topic directly contributes to **CO3: Compute complex integrals using Cauchy's integral theorem and Cauchy's integral formula**. The concept of independence of path is a prerequisite for understanding and applying Cauchy's Integral Theorem, which states that the integral of an analytic function over a closed contour is zero. This implies that the integral is independent of path for analytic functions.

**Knowledge Level (K3):** This topic requires understanding and applying the concepts of complex functions, differentiation, and integration in the complex plane.

---

### 2. Definition of Path Independence

A line integral $\int_C f(z) dz$ is said to be **independent of path** if its value depends only on the endpoints of the contour $C$, not on the specific path taken between those endpoints.

**Formal Definition:**
Let $C_1$ and $C_2$ be two piecewise smooth curves in a region $D$ such that they have the same starting point $z_1$ and the same ending point $z_2$. The line integral $\int_C f(z) dz$ is independent of path in $D$ if for any such pair of curves $C_1$ and $C_2$,
$$ \int_{C_1} f(z) dz = \int_{C_2} f(z) dz $$

---

### 3. Conditions for Path Independence

The most significant condition for path independence of a complex line integral is the existence of an **antiderivative** for the integrand.

#### 3.1. The Role of Antiderivatives

**Key Concept:** If a function $f(z)$ has an antiderivative $F(z)$ in a region $D$, meaning $F'(z) = f(z)$ for all $z \in D$, then the line integral of $f(z)$ along any piecewise smooth curve $C$ from $z_1$ to $z_2$ in $D$ is given by:
$$ \int_C f(z) dz = F(z_2) - F(z_1) $$

**Proof Sketch (Analogy to Real Calculus):**
Let $C$ be parameterized by $z(t)$ for $a \le t \le b$, where $z(a) = z_1$ and $z(b) = z_2$.
Consider the function $G(t) = F(z(t))$. By the chain rule for complex functions:
$$ G'(t) = F'(z(t)) \cdot z'(t) = f(z(t)) \cdot z'(t) $$
The line integral is defined as:
$$ \int_C f(z) dz = \int_a^b f(z(t)) z'(t) dt $$
Substituting $f(z(t)) z'(t) = G'(t)$:
$$ \int_C f(z) dz = \int_a^b G'(t) dt $$
By the Fundamental Theorem of Calculus for real integrals:
$$ \int_a^b G'(t) dt = G(b) - G(a) $$
Since $G(b) = F(z(b)) = F(z_2)$ and $G(a) = F(z(a)) = F(z_1)$:
$$ \int_C f(z) dz = F(z_2) - F(z_1) $$
This result clearly shows that the integral depends only on the endpoints $z_1$ and $z_2$, provided an antiderivative $F(z)$ exists in the region containing the path.

**Textbook Reference:** This fundamental property is discussed in detail in Kreyszig's "Advanced Engineering Mathematics" (Chapter 13: Functions of a Complex Variable, Complex Integration) and Zill & Shanahan's "Complex Analysis" (Chapter 4: Complex Integration).

---

### 4. Implications of Path Independence

#### 4.1. Integral over a Closed Contour

**Key Consequence:** If a function $f(z)$ has an antiderivative $F(z)$ in a region $D$, then the integral of $f(z)$ over any closed piecewise smooth contour $C$ in $D$ is zero.
$$ \oint_C f(z) dz = 0 $$
This is because for a closed contour, the starting point $z_1$ and the ending point $z_2$ are the same. Therefore, $F(z_2) - F(z_1) = F(z_1) - F(z_1) = 0$.

#### 4.2. Equivalence to Analyticity

**Theorem:** If $f(z)$ is continuous in a simply connected domain $D$, then $f(z)$ has an antiderivative in $D$ if and only if $\int_C f(z) dz = 0$ for every closed piecewise smooth contour $C$ in $D$.

**Implication for Cauchy's Integral Theorem:** Cauchy's Integral Theorem states that if $f(z)$ is analytic in a simply connected domain $D$, then $\oint_C f(z) dz = 0$ for every closed contour $C$ in $D$. This directly implies that **analytic functions have antiderivatives in simply connected domains**, and therefore, their line integrals are independent of path.

**Textbook Reference:** This connection is a cornerstone of complex analysis and is extensively covered in all reference texts.

---

### 5. Examples

#### Example 1: Function with an Antiderivative

Let $f(z) = z^2$. This function is analytic everywhere in the complex plane. Its antiderivative is $F(z) = \frac{z^3}{3}$.
Let $C_1$ be the straight line segment from $z_1 = 0$ to $z_2 = 1+i$.
Let $C_2$ be the path along the real axis from 0 to 1, and then vertically along the line $x=1$ from $1$ to $1+i$.

Using the antiderivative property:
$$ \int_{C_1} z^2 dz = F(1+i) - F(0) = \frac{(1+i)^3}{3} - \frac{0^3}{3} = \frac{1}{3}(1 + 3i + 3i^2 + i^3) = \frac{1}{3}(1 + 3i - 3 - i) = \frac{1}{3}(-2 + 2i) $$
$$ \int_{C_2} z^2 dz = F(1+i) - F(0) = \frac{(1+i)^3}{3} - \frac{0^3}{3} = \frac{1}{3}(-2 + 2i) $$
The values are the same, confirming path independence.

#### Example 2: Function Without a Simple Antiderivative in a Strip

Consider the function $f(z) = \frac{1}{z}$. This function is analytic everywhere except at $z=0$.
Let $C_1$ be the semicircle $|z|=1$ from $z=1$ to $z=-1$ in the upper half-plane.
Let $C_2$ be the semicircle $|z|=1$ from $z=1$ to $z=-1$ in the lower half-plane.

The domain containing these paths is $\mathbb{C} \setminus \{0\}$, which is not simply connected.
The integral of $1/z$ around the unit circle $|z|=1$ is $2\pi i$.
If the integral were path independent for this function, the integral from $z=1$ to $z=-1$ along $C_1$ should be the same as along $C_2$.
Consider the closed contour formed by $C_1$ followed by the reverse of $C_2$. This is the unit circle.
$\int_{C_1} \frac{1}{z} dz + \int_{-C_2} \frac{1}{z} dz = 2\pi i$.
Since $\int_{-C_2} \frac{1}{z} dz = - \int_{C_2} \frac{1}{z} dz$, we have:
$\int_{C_1} \frac{1}{z} dz - \int_{C_2} \frac{1}{z} dz = 2\pi i$.
This shows that $\int_{C_1} \frac{1}{z} dz \neq \int_{C_2} \frac{1}{z} dz$, so the integral is path dependent.

This is because $1/z$ does not have an antiderivative in any domain that contains both the upper and lower semi-circles, specifically because the origin $z=0$ is a singularity. The function $\ln(z)$ is an antiderivative of $1/z$, but it is multi-valued and its principal branch is not defined on the negative real axis, which is a path segment for these contours.

**Important Point to Remember:** The existence of an antiderivative is the crucial condition for path independence. For functions like $1/z$, path dependence arises when the domain of integration is not simply connected or when the function has singularities within the domain of integration.

---

### 6. Relationship with Cauchy's Integral Theorem

**Key Relationship:** Path independence is a direct consequence of analyticity in a simply connected domain, as stated by Cauchy's Integral Theorem.

*   **If $f(z)$ is analytic in a simply connected domain $D$, then $\int_C f(z) dz$ is independent of path in $D$.**
    *   **Reason:** By Cauchy's Integral Theorem, $\oint_C f(z) dz = 0$ for any closed contour $C$ in $D$. If $\int_{C_1} f(z) dz = \int_{C_2} f(z) dz$, this means $\int_{C_1} f(z) dz - \int_{C_2} f(z) dz = 0$. This difference can be written as $\int_{C_1} f(z) dz + \int_{-C_2} f(z) dz = \int_{C_1 \cup (-C_2)} f(z) dz$, where $C_1 \cup (-C_2)$ forms a closed contour. Thus, $\oint_{C_{closed}} f(z) dz = 0$, which is consistent with Cauchy's Theorem.

*   **Conversely, if $\int_C f(z) dz$ is independent of path in a simply connected domain $D$ and $f(z)$ is continuous in $D$, then $f(z)$ is analytic in $D$.** (This is related to Goursat's theorem and the fact that differentiability implies analyticity in the complex plane).

**Textbook Reference:** Kreyszig (Chapter 13), Zill & Shanahan (Chapter 4), Ramana (Chapter 25), Grewal (Chapter 35).

---

### 7. Summary of Key Points

*   A line integral $\int_C f(z) dz$ is **independent of path** if its value depends only on the endpoints of the contour $C$.
*   The most important condition for path independence is the existence of an **antiderivative** $F(z)$ such that $F'(z) = f(z)$ in the region of integration.
*   If $f(z)$ has an antiderivative $F(z)$, then $\int_C f(z) dz = F(z_2) - F(z_1)$, where $z_1$ and $z_2$ are the endpoints.
*   Path independence implies that the integral over any **closed contour** is zero: $\oint_C f(z) dz = 0$.
*   **Analytic functions** in simply connected domains possess antiderivatives, and therefore their line integrals are independent of path. This is a direct consequence of **Cauchy's Integral Theorem**.
*   Functions like $1/z$ are **path dependent** in regions that include their singularities or are not simply connected.

---

### 8. Practice Questions and Exercises

**Instructions:** For each question, determine if the integral is path independent and, if so, compute its value.

**Question 1:**
Compute $\int_C z^3 dz$, where $C$ is any path from $z=0$ to $z=2+i$.

**Answer 1:**
The function $f(z) = z^3$ is analytic everywhere. Its antiderivative is $F(z) = \frac{z^4}{4}$.
Since an antiderivative exists, the integral is path independent.
$\int_C z^3 dz = F(2+i) - F(0) = \frac{(2+i)^4}{4} - \frac{0^4}{4}$
$(2+i)^2 = 4 + 4i + i^2 = 3 + 4i$
$(2+i)^4 = (3+4i)^2 = 9 + 24i + 16i^2 = 9 + 24i - 16 = -7 + 24i$
$\int_C z^3 dz = \frac{-7 + 24i}{4} = -\frac{7}{4} + 6i$

**Question 2:**
Compute $\int_C \frac{1}{z} dz$, where $C$ is the straight line segment from $z=1$ to $z=e^{i\pi/2} = i$.

**Answer 2:**
The function $f(z) = \frac{1}{z}$ is analytic in the domain containing the path (which does not include the origin). An antiderivative is $F(z) = \ln(z)$. For this path, we can use the principal branch of the logarithm.
The endpoints are $z_1 = 1$ and $z_2 = i$.
$\int_C \frac{1}{z} dz = F(i) - F(1)$
Using the principal branch: $\operatorname{Ln}(z) = \ln|z| + i \operatorname{Arg}(z)$, where $-\pi < \operatorname{Arg}(z) \le \pi$.
$F(i) = \operatorname{Ln}(i) = \ln|i| + i \operatorname{Arg}(i) = \ln(1) + i(\pi/2) = i\pi/2$.
$F(1) = \operatorname{Ln}(1) = \ln|1| + i \operatorname{Arg}(1) = \ln(1) + i(0) = 0$.
$\int_C \frac{1}{z} dz = i\pi/2 - 0 = i\pi/2$.
(Note: If the path had crossed the negative real axis, we would need to be careful about the branch of the logarithm).

**Question 3:**
Evaluate $\oint_C e^z dz$, where $C$ is the circle $|z| = 2$.

**Answer 3:**
The function $f(z) = e^z$ is analytic everywhere. Its antiderivative is $F(z) = e^z$.
Since $e^z$ is analytic in a simply connected domain (the entire complex plane) containing the circle $|z|=2$, the integral over the closed contour is zero by Cauchy's Integral Theorem, or by the antiderivative property ($F(z_2) - F(z_1) = 0$ since $z_1 = z_2$).
$\oint_C e^z dz = 0$.

**Question 4:**
Is the integral $\int_C \bar{z} dz$ independent of path in the domain $D = \{z \in \mathbb{C} \mid |z| > 0\}$? Explain.

**Answer 4:**
No, the integral $\int_C \bar{z} dz$ is **not** independent of path in the domain $D$.
The function $f(z) = \bar{z}$ is not analytic anywhere in the complex plane. For a line integral to be independent of path, the integrand must generally be analytic or at least have an antiderivative. Since $\bar{z}$ is not analytic, we cannot assume path independence.
To show this explicitly, consider two paths from $z_1=0$ to $z_2=1$:
Path $C_1$: The straight line segment from 0 to 1 along the real axis. $z(t) = t$, $0 \le t \le 1$. $dz = dt$.
$\int_{C_1} \bar{z} dz = \int_0^1 t dt = [\frac{t^2}{2}]_0^1 = \frac{1}{2}$.
Path $C_2$: The path along the imaginary axis from 0 to $i$, and then the line segment from $i$ to 1.
$C_{2a}$: $z(t) = it$, $0 \le t \le 1$. $dz = i dt$. $\bar{z} = -it$.
$\int_{C_{2a}} \bar{z} dz = \int_0^1 (-it)(i dt) = \int_0^1 t dt = \frac{1}{2}$.
$C_{2b}$: $z(t) = t+i$, $0 \le t \le 1$. $dz = dt$. $\bar{z} = t-i$.
$\int_{C_{2b}} \bar{z} dz = \int_0^1 (t-i) dt = [\frac{t^2}{2} - it]_0^1 = \frac{1}{2} - i$.
The integral along $C_2 = C_{2a} \cup C_{2b}$ is $\frac{1}{2} + (\frac{1}{2} - i) = 1 - i$.
Since $\frac{1}{2} \neq 1-i$, the integral is path dependent.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |


### 9. Further Reading and References

*   **Kreyszig, E. (2016). *Advanced Engineering Mathematics* (10th ed.). John Wiley & Sons.**
    *   Refer to Chapter 13: Functions of a Complex Variable, particularly sections on Complex Integration and Properties of Complex Integration.
*   **Zill, D. G., & Shanahan, P. D. (2015). *Complex Analysis* (3rd ed.). Jones & Bartlett Learning.**
    *   Chapter 4: Complex Integration provides detailed explanations of line integrals, path independence, and the connection to analyticity.
*   **Ramana, B. V. (2023). *Higher Engineering Mathematics* (39th ed.). McGraw-Hill Education.**
    *   Chapter 25: Complex Integration and Contour Integration.
*   **Grewal, B. S. (2018). *Higher Engineering Mathematics* (44th ed.). Khanna Publishers.**
    *   Chapter 35: Complex Integration.

---

This concludes the study notes on the Independence of Path for line integrals in the complex plane. This fundamental concept is key to understanding the power and simplicity that complex analysis offers for solving engineering and physics problems.