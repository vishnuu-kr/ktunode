---
title: "Cauchy’s integral theorem (without proof) on simply connected domain"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 3: Complex Integration"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35a75"
status: "completed"
scrapedAt: "2026-05-23T16:14:42.947Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 3: Complex Integration

### Topic: Cauchy's Integral Theorem (Without Proof) on Simply Connected Domain

---

### 1. Introduction to Complex Integration and the Need for Cauchy's Theorem

Complex integration is a fundamental tool in various fields of engineering and physics, allowing us to analyze phenomena that cannot be easily described by real-valued functions. It plays a crucial role in solving differential equations, analyzing signals and systems, and understanding fluid dynamics, electromagnetism, and quantum mechanics.

Before delving into Cauchy's Integral Theorem, it's important to understand the context of complex integration. We integrate a complex-valued function $f(z)$ along a path (contour) $C$ in the complex plane. This is represented by the line integral:

$$ \oint_C f(z) \, dz $$

The challenge with general complex integration lies in its path dependence. However, certain conditions on the function $f(z)$ and the domain of integration can simplify these calculations significantly. This is where Cauchy's Integral Theorem comes into play, providing a powerful result for analytic functions.

---

### 2. Key Concepts and Definitions

#### 2.1 Simply Connected Domain

*   **Definition:** A domain $D$ in the complex plane is called **simply connected** if every closed curve (contour) within $D$ can be continuously shrunk to a point within $D$ without leaving $D$. In simpler terms, a simply connected domain has no "holes."

*   **Examples:**
    *   The open disk $|z| < R$ is simply connected.
    *   The entire complex plane $\mathbb{C}$ is simply connected.
    *   The annulus $r < |z| < R$ (where $0 < r < R$) is **not** simply connected because a circle around the origin (a hole) cannot be shrunk to a point within the annulus.

*   **Importance:** Cauchy's Integral Theorem is stated for functions that are analytic in a simply connected domain. The simply connected nature of the domain is crucial for the theorem's validity.

#### 2.2 Analytic Function

*   **Definition:** A complex function $f(z)$ is said to be **analytic** in a domain $D$ if it is differentiable at every point in $D$. Analyticity implies that the function's derivative exists and is unique at every point in the domain.

*   **Relationship to Differentiability:** If $f(z) = u(x, y) + iv(x, y)$, where $z = x + iy$, then $f(z)$ is analytic if and only if its Cauchy-Riemann equations are satisfied:
    $$ \frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \quad \text{and} \quad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x} $$
    and the first partial derivatives of $u$ and $v$ are continuous in the domain.

*   **Examples:**
    *   $f(z) = z^2$ is analytic everywhere.
    *   $f(z) = e^z$ is analytic everywhere.
    *   $f(z) = 1/z$ is analytic everywhere except at $z=0$.

#### 2.3 Closed Contour

*   **Definition:** A **contour** is a piecewise smooth curve in the complex plane. A **closed contour** is a contour where the starting point and the ending point are the same.

*   **Examples:**
    *   A circle $|z|=R$ is a closed contour.
    *   A square with vertices at $1+i, -1+i, -1-i, 1-i$ is a closed contour.

---

### 3. Cauchy's Integral Theorem (Without Proof)

**Statement:** If a function $f(z)$ is analytic in a simply connected domain $D$, and $C$ is any closed contour lying entirely within $D$, then the integral of $f(z)$ around $C$ is zero.

$$ \oint_C f(z) \, dz = 0 $$

**Key Conditions:**

1.  **Analyticity:** $f(z)$ must be analytic in the simply connected domain $D$.
2.  **Domain Type:** The domain $D$ must be simply connected.
3.  **Contour Location:** The closed contour $C$ must lie entirely within $D$.

**Visual Representation:**

Imagine a simply connected region (like an open disk) in the complex plane. If you pick any closed loop (like a circle or an ellipse) entirely within this region, and if the function $f(z)$ you are integrating is analytic everywhere inside and on this loop, then the total integral along that loop will be zero.

---

### 4. Implications and Significance of Cauchy's Integral Theorem

*   **Path Independence of Line Integrals:** If $f(z)$ is analytic in a simply connected domain $D$, then the line integral of $f(z)$ from one point $z_0$ to another point $z_1$ in $D$ is independent of the path taken between $z_0$ and $z_1$, as long as the path lies within $D$.
    *   **Proof Sketch (using Cauchy's Theorem):** Let $C_1$ and $C_2$ be two paths from $z_0$ to $z_1$ within $D$. Consider the closed contour formed by $C_1$ followed by the reverse of $C_2$. Since $f(z)$ is analytic in $D$ (which is simply connected), by Cauchy's Theorem, the integral over this closed contour is zero:
        $$ \oint_{C_1 \cup (-C_2)} f(z) \, dz = \int_{C_1} f(z) \, dz + \int_{-C_2} f(z) \, dz = 0 $$
        Since $\int_{-C_2} f(z) \, dz = -\int_{C_2} f(z) \, dz$, we have:
        $$ \int_{C_1} f(z) \, dz - \int_{C_2} f(z) \, dz = 0 \implies \int_{C_1} f(z) \, dz = \int_{C_2} f(z) \, dz $$

*   **Existence of Antiderivatives:** If $f(z)$ is analytic in a simply connected domain $D$, then $f(z)$ possesses an antiderivative $F(z)$ in $D$, such that $F'(z) = f(z)$.
    *   **Construction of Antiderivative:** The antiderivative $F(z)$ can be defined as:
        $$ F(z) = \int_{z_0}^z f(w) \, dw $$
        where $z_0$ is a fixed point in $D$ and the integral is taken along any path from $z_0$ to $z$ within $D$. The path independence, guaranteed by Cauchy's Theorem, ensures that $F(z)$ is well-defined.
    *   **Fundamental Theorem of Calculus for Complex Integrals:** If $F(z)$ is an antiderivative of $f(z)$ in a domain $D$, then for any contour $C$ in $D$ from $z_0$ to $z_1$:
        $$ \int_C f(z) \, dz = F(z_1) - F(z_0) $$

*   **Foundation for Other Theorems:** Cauchy's Integral Theorem is the cornerstone for many other powerful results in complex analysis, including Cauchy's Integral Formula, the Cauchy-Goursat Theorem (a more general version), and the Residue Theorem.

---

### 5. Examples Illustrating Cauchy's Integral Theorem

**Example 1:** Evaluate $\oint_C e^z \, dz$, where $C$ is the unit circle $|z|=1$.

*   **Analysis:**
    *   The function $f(z) = e^z$ is analytic everywhere in the complex plane.
    *   The domain is the entire complex plane $\mathbb{C}$, which is simply connected.
    *   The contour $C$ (the unit circle) lies entirely within $\mathbb{C}$.
*   **Application of Cauchy's Theorem:** Since $f(z) = e^z$ is analytic in the simply connected domain (the entire complex plane) and $C$ is a closed contour within this domain, Cauchy's Integral Theorem applies.
*   **Result:**
    $$ \oint_C e^z \, dz = 0 $$

**Example 2:** Evaluate $\oint_C z^3 + 2z \, dz$, where $C$ is the ellipse $|z-1| + |z+1| = 4$.

*   **Analysis:**
    *   The function $f(z) = z^3 + 2z$ is a polynomial, which is analytic everywhere in the complex plane.
    *   The domain is the entire complex plane $\mathbb{C}$, which is simply connected.
    *   The ellipse $|z-1| + |z+1| = 4$ encloses the points $z=1$ and $z=-1$. This ellipse is a closed contour within the simply connected domain $\mathbb{C}$.
*   **Application of Cauchy's Theorem:** Since $f(z) = z^3 + 2z$ is analytic in the simply connected domain $\mathbb{C}$ and $C$ is a closed contour within this domain, Cauchy's Integral Theorem applies.
*   **Result:**
    $$ \oint_C z^3 + 2z \, dz = 0 $$

**Example 3:** Evaluate $\oint_C \frac{1}{z-2} \, dz$, where $C$ is the circle $|z|=1$.

*   **Analysis:**
    *   The function $f(z) = \frac{1}{z-2}$ has a singularity at $z=2$.
    *   The domain of analyticity for $f(z)$ is $\mathbb{C} \setminus \{2\}$. This domain is **not** simply connected.
    *   The contour $C$ is the unit circle $|z|=1$.
*   **Important Consideration:** The function $f(z) = \frac{1}{z-2}$ is analytic in the region $|z|<2$. This region is simply connected. The contour $C$ ($|z|=1$) lies entirely within this region of analyticity.
*   **Application of Cauchy's Theorem:** Since $f(z) = \frac{1}{z-2}$ is analytic in the simply connected domain $|z|<2$, and the contour $C$ ($|z|=1$) lies entirely within this domain, Cauchy's Integral Theorem applies.
*   **Result:**
    $$ \oint_C \frac{1}{z-2} \, dz = 0 $$
    *(Note: If the contour was, for instance, $|z|=3$, then the function would not be analytic inside the contour, and Cauchy's Theorem would not directly apply to the entire domain enclosed by $|z|=3$. In such cases, Cauchy's Integral Formula or the Residue Theorem would be used.)*

---

### 6. Connection to Course Outcomes

This topic directly supports the following Course Outcomes:

*   **CO3: Compute complex integrals using Cauchy's integral theorem and Cauchy's integral formula.**
    *   This topic specifically covers the application of Cauchy's Integral Theorem for computing complex integrals. It establishes the fundamental principle that the integral of an analytic function over a closed loop in a simply connected domain is zero. This provides a powerful shortcut for many integration problems.

---

### 7. Practice Questions and Exercises

**Question 1:** State the conditions under which Cauchy's Integral Theorem can be applied.

**Answer:** Cauchy's Integral Theorem can be applied if:
1.  The function $f(z)$ is analytic in a domain $D$.
2.  The domain $D$ is simply connected.
3.  The closed contour $C$ lies entirely within the domain $D$.

**Question 2:** Evaluate $\oint_C \cos(z) \, dz$, where $C$ is a circle of radius 5 centered at the origin.

**Answer:**
The function $f(z) = \cos(z)$ is analytic everywhere in the complex plane. The domain of analyticity is $\mathbb{C}$, which is simply connected. The contour $C$ (a circle of radius 5 centered at the origin) lies entirely within $\mathbb{C}$. Therefore, by Cauchy's Integral Theorem, $\oint_C \cos(z) \, dz = 0$.

**Question 3:** Evaluate $\oint_C \frac{e^z}{z^2+1} \, dz$, where $C$ is the circle $|z|=0.5$.

**Answer:**
The function $f(z) = \frac{e^z}{z^2+1}$ is analytic everywhere except at $z = i$ and $z = -i$. The circle $|z|=0.5$ encloses neither $i$ nor $-i$. Thus, the function $f(z)$ is analytic within the simply connected domain $|z| < 1$ (or any simply connected domain containing the circle $|z|=0.5$ and not containing the singularities). Since $f(z)$ is analytic inside and on the contour $C$, by Cauchy's Integral Theorem, $\oint_C \frac{e^z}{z^2+1} \, dz = 0$.

**Question 4:** Consider the function $f(z) = \frac{1}{z-a}$. Can Cauchy's Integral Theorem be applied to evaluate $\oint_C f(z) \, dz$ where $C$ is the circle $|z|=R$? Explain your reasoning for two cases: (i) $|a| \neq R$, (ii) $|a| = R$.

**Answer:**

*   **Case (i): $|a| \neq R$**
    *   If $|a| < R$, the singularity at $z=a$ lies inside the circle $|z|=R$. The function $f(z) = \frac{1}{z-a}$ is not analytic inside the simply connected domain enclosed by $|z|=R$. Thus, Cauchy's Integral Theorem cannot be directly applied to the entire domain enclosed by $|z|=R$ for this function.
    *   If $|a| > R$, the singularity at $z=a$ lies outside the circle $|z|=R$. In this case, the function $f(z) = \frac{1}{z-a}$ is analytic in the simply connected domain enclosed by $|z|=R$ (e.g., the disk $|z| < |a|$ which contains $|z|=R$). Therefore, Cauchy's Integral Theorem applies, and $\oint_C \frac{1}{z-a} \, dz = 0$.

*   **Case (ii): $|a| = R$**
    *   If $|a|=R$, the singularity at $z=a$ lies on the contour $C$. In this scenario, the function is not analytic in any simply connected domain that contains the contour $C$ and the singularity. Cauchy's Integral Theorem does not directly apply because the conditions of analyticity throughout the domain containing the contour are not met. Cauchy's Integral Formula or the Residue Theorem would be required.

**Question 5:** True or False: If $f(z)$ is analytic in a domain $D$ and $C$ is a closed contour in $D$, then $\oint_C f(z) dz = 0$ even if $D$ is not simply connected.

**Answer:** False. The simply connected nature of the domain is a crucial condition for Cauchy's Integral Theorem. If the domain has holes, the theorem might not hold. For instance, if $f(z) = 1/z$ and $D$ is the annulus $1 < |z| < 2$, and $C$ is the circle $|z|=1.5$, then $f(z)$ is analytic in $D$, and $C$ is in $D$. However, $\oint_C \frac{1}{z} dz = 2\pi i \neq 0$.

---

### 8. Important Points to Remember

*   **Analyticity is Key:** The most critical condition for Cauchy's Integral Theorem is that the function must be analytic in the domain.
*   **Simply Connected Domain:** The theorem is specifically stated for simply connected domains. This means no "holes" in the region where the function is analytic and contains the contour.
*   **Contour Location:** The entire closed contour must lie within the domain of analyticity.
*   **Zero Integral:** The result of the integral is always zero under these conditions.
*   **Path Independence:** A direct consequence is that for analytic functions in simply connected domains, the integral between two points is independent of the path taken.
*   **Foundation:** Cauchy's Integral Theorem is a fundamental building block for more advanced results like Cauchy's Integral Formula and the Residue Theorem.

---
