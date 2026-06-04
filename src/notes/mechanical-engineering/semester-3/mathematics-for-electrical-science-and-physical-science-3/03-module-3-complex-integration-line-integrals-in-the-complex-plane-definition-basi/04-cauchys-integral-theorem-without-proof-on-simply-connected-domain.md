---
title: "Cauchy’s integral theorem (without proof) on simply connected domain"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 3: Complex Integration: Line integrals in the complex plane (Definition & Basic properties)"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462cae"
status: "completed"
scrapedAt: "2026-05-20T17:50:49.265Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 3: Complex Integration: Line Integrals in the Complex Plane

### Topic: Cauchy's Integral Theorem (without proof) on Simply Connected Domains

---

### **1. Introduction to Complex Integration and Line Integrals**

*   **Review of Complex Functions:**
    *   A complex function $f(z) = u(x, y) + iv(x, y)$, where $z = x + iy$.
    *   **Analyticity:** A function is analytic in a domain if it is differentiable at every point in that domain. This implies the Cauchy-Riemann equations hold and partial derivatives are continuous.
    *   **Simply Connected Domain:** A domain in the complex plane is simply connected if every simple closed curve in the domain encloses only points that are also in the domain. Essentially, it has no "holes".

*   **Line Integral in the Complex Plane:**
    *   The line integral of a complex function $f(z)$ along a curve $C$ is defined as:
        $$ \oint_C f(z) dz $$
    *   If $f(z) = u(x, y) + iv(x, y)$ and $z(t) = x(t) + iy(t)$ for $a \leq t \leq b$, then $dz = z'(t) dt = (x'(t) + iy'(t)) dt$.
    *   The integral can be expressed as:
        $$ \oint_C f(z) dz = \oint_C (u + iv)(dx + i dy) = \oint_C (u dx - v dy) + i \oint_C (v dx + u dy) $$
    *   This can be related to Green's Theorem in the plane.

---

### **2. Cauchy's Integral Theorem (Without Proof) on Simply Connected Domains**

*   **Statement of the Theorem:**
    *   If $f(z)$ is analytic in a simply connected domain $D$, then for every simple closed curve $C$ lying entirely within $D$, the integral of $f(z)$ along $C$ is zero.
    *   Mathematically:
        $$ \oint_C f(z) dz = 0 $$
    *   **Key Conditions:**
        1.  $f(z)$ must be **analytic** (i.e., differentiable) within the domain $D$.
        2.  The domain $D$ must be **simply connected**.
        3.  The closed curve $C$ must lie **entirely within** the domain $D$.

*   **Significance and Implications:**
    *   **Path Independence:** Cauchy's Integral Theorem implies that the complex line integral of an analytic function between two points is independent of the path taken between those points, provided the path stays within the domain of analyticity.
    *   **Foundation for Further Theorems:** It is a cornerstone of complex analysis, leading to Cauchy's Integral Formula and the Residue Theorem.
    *   **Practical Applications:** Simplifies the evaluation of complex integrals, especially in fields like electrical engineering (e.g., analyzing circuits, signal processing) and physical science (e.g., fluid dynamics, quantum mechanics).

---

### **3. Examples Illustrating Cauchy's Integral Theorem**

*   **Example 1: Integral of a Polynomial**
    *   Let $f(z) = z^2 + 3z + 5$ and $C$ be the circle $|z| = 1$.
    *   **Analysis:**
        *   $f(z)$ is a polynomial, which is analytic everywhere in the complex plane (i.e., it's an entire function).
        *   The domain containing the circle $|z|=1$ is simply connected.
        *   The curve $C$ is a simple closed curve.
    *   **Application of Theorem:** Since $f(z)$ is analytic on and inside the circle $|z|=1$, according to Cauchy's Integral Theorem:
        $$ \oint_{|z|=1} (z^2 + 3z + 5) dz = 0 $$

*   **Example 2: Integral of an Exponential Function**
    *   Let $f(z) = e^z$ and $C$ be any simple closed curve in the complex plane.
    *   **Analysis:**
        *   $f(z) = e^z$ is analytic everywhere in the complex plane (it's an entire function).
        *   Any region in the complex plane is simply connected.
    *   **Application of Theorem:** For any simple closed curve $C$:
        $$ \oint_C e^z dz = 0 $$

*   **Example 3: Integral of a Trigonometric Function**
    *   Let $f(z) = \cos(z)$ and $C$ be the ellipse $|x|/2 + |y|/1 = 1$.
    *   **Analysis:**
        *   $f(z) = \cos(z)$ is analytic everywhere in the complex plane (entire function).
        *   The interior of the ellipse is a simply connected domain.
    *   **Application of Theorem:**
        $$ \oint_C \cos(z) dz = 0 $$

*   **Example 4: Integral of a Function with a Singularity (Illustrating When the Theorem *Doesn't* Apply)**
    *   Let $f(z) = \frac{1}{z}$ and $C$ be the circle $|z| = 1$.
    *   **Analysis:**
        *   $f(z) = \frac{1}{z}$ is **not analytic** at $z=0$, which is inside the circle $|z|=1$.
        *   The domain of analyticity (complex plane excluding $z=0$) is **not simply connected** when considering a curve enclosing the singularity.
    *   **Conclusion:** Cauchy's Integral Theorem **cannot** be applied here. The integral $\oint_{|z|=1} \frac{1}{z} dz$ is not zero; it evaluates to $2\pi i$ (using Cauchy's Integral Formula or residue theorem). This highlights the importance of the conditions of the theorem.

---

### **4. Basic Properties Related to Cauchy's Integral Theorem**

*   **Additivity of Integrals:** For a curve $C$ composed of two parts $C_1$ and $C_2$, $\int_C f(z) dz = \int_{C_1} f(z) dz + \int_{C_2} f(z) dz$. If $C$ is a simple closed curve and $C_1$ and $C_2$ form its boundary, then $\oint_C f(z) dz = \oint_{C_1} f(z) dz + \oint_{C_2} f(z) dz$.

*   **Integral along Reversed Path:** If $C$ is a curve from $z_1$ to $z_2$, and $-C$ is the same curve traversed from $z_2$ to $z_1$, then:
    $$ \int_{-C} f(z) dz = -\int_C f(z) dz $$

*   **Path Independence in Simply Connected Domains:** If $f(z)$ is analytic in a simply connected domain $D$, and $C_1$ and $C_2$ are two paths within $D$ from a point $z_a$ to a point $z_b$, then:
    $$ \int_{C_1} f(z) dz = \int_{C_2} f(z) dz $$
    This is a direct consequence of Cauchy's Integral Theorem. Consider the closed curve formed by $C_1$ followed by $-C_2$. Since $f(z)$ is analytic in $D$, the integral over this closed curve is zero: $\int_{C_1} f(z) dz + \int_{-C_2} f(z) dz = 0$. Using the property of reversed paths, this becomes $\int_{C_1} f(z) dz - \int_{C_2} f(z) dz = 0$, proving path independence.

*   **Extension to Multiply Connected Domains (Conceptual):** While the theorem is stated for simply connected domains, it can be extended. For a multiply connected domain (with "holes"), the integral over the outer boundary is equal to the sum of the integrals over the inner boundaries, provided the function is analytic in the region between the boundaries. This is often shown by "cutting" the multiply connected domain to make it simply connected.

---

### **5. Relevance to Course Outcomes**

*   **CO3: Compute complex integrals using Cauchy's integral theorem and Cauchy's integral formula.**
    *   This topic directly addresses the use of Cauchy's Integral Theorem for simplifying or evaluating complex integrals. It forms the basis for understanding how integrals can be zero under specific conditions of analyticity and domain.

*   **CO1, CO2, CO4:** While this specific topic focuses on Cauchy's Integral Theorem, understanding analyticity (required for the theorem) is fundamental to CO2 (analyticity in conformal mapping). The path independence implied by the theorem is also crucial for understanding how complex integration works generally, which indirectly supports the other COs.

---

### **6. Key Points to Remember**

*   **Analyticity is Crucial:** The function *must* be analytic within the domain of integration.
*   **Simply Connected Domain:** The domain containing the curve must not have any "holes".
*   **Closed Curve:** The integral is over a closed loop.
*   **Zero Result:** If the conditions are met, the integral is **zero**.
*   **Path Independence:** For analytic functions in simply connected domains, the integral between two points is independent of the path.
*   **When it Fails:** If the function has a singularity inside the closed curve, or if the domain is not simply connected in a way that encloses a singularity, Cauchy's Integral Theorem does *not* apply.

---

### **7. Practice Questions and Exercises**

**Instructions:** For each question, identify the function $f(z)$ and the curve $C$. Determine if $f(z)$ is analytic within the region enclosed by $C$ and if the region is simply connected. Apply Cauchy's Integral Theorem if applicable.

1.  Evaluate $\oint_C e^{iz} dz$, where $C$ is the square with vertices at $(0,0), (1,0), (1,1), (0,1)$.
2.  Evaluate $\oint_C \frac{1}{z^2+1} dz$, where $C$ is the circle $|z-i| = 0.5$.
3.  Evaluate $\oint_C \sin(z) dz$, where $C$ is any simple closed curve in the complex plane.
4.  Evaluate $\oint_C z^3 - 2z + 1 dz$, where $C$ is the ellipse $x^2/4 + y^2/9 = 1$.
5.  Evaluate $\oint_C \frac{dz}{z-2}$, where $C$ is the circle $|z| = 1$.
6.  Evaluate $\oint_C \frac{dz}{z}$, where $C$ is the circle $|z| = 2$.
7.  Evaluate $\oint_C \frac{e^z}{z-1} dz$, where $C$ is the circle $|z| = 2$.

---

### **8. Answers to Practice Questions**

1.  **Analysis:** $f(z) = e^{iz}$ is analytic everywhere (entire function). The square is in a simply connected domain. **Application:** By Cauchy's Integral Theorem, $\oint_C e^{iz} dz = 0$.
2.  **Analysis:** $f(z) = \frac{1}{z^2+1} = \frac{1}{(z-i)(z+i)}$. The singularities are at $z=i$ and $z=-i$. The circle $|z-i| = 0.5$ encloses only the singularity at $z=i$. Therefore, Cauchy's Integral Theorem **does not apply** directly as the function is not analytic inside the entire region enclosed by $C$. (This would typically be solved using Cauchy's Integral Formula or Residue Theorem).
3.  **Analysis:** $f(z) = \sin(z)$ is analytic everywhere (entire function). The domain is simply connected. **Application:** By Cauchy's Integral Theorem, $\oint_C \sin(z) dz = 0$.
4.  **Analysis:** $f(z) = z^3 - 2z + 1$ is analytic everywhere (entire function). The ellipse is in a simply connected domain. **Application:** By Cauchy's Integral Theorem, $\oint_C (z^3 - 2z + 1) dz = 0$.
5.  **Analysis:** $f(z) = \frac{1}{z-2}$ has a singularity at $z=2$. The circle $|z|=1$ does **not** enclose the singularity. The function is analytic inside and on the circle. The domain is simply connected. **Application:** By Cauchy's Integral Theorem, $\oint_C \frac{dz}{z-2} = 0$.
6.  **Analysis:** $f(z) = \frac{1}{z}$ has a singularity at $z=0$. The circle $|z|=2$ **encloses** the singularity. Cauchy's Integral Theorem **does not apply**. (Integral is $2\pi i$).
7.  **Analysis:** $f(z) = \frac{e^z}{z-1}$ has a singularity at $z=1$. The circle $|z|=2$ **encloses** the singularity. Cauchy's Integral Theorem **does not apply**. (Integral is $2\pi i e^1 = 2\pi i e$).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |


### **9. References**

*   **Kreyszig, Erwin. *Advanced Engineering Mathematics*. 10th ed., John Wiley & Sons, 2016.**
    *   Chapter 14 (Complex Analysis) is highly relevant. Look for sections on line integrals, Cauchy's Integral Theorem, and analyticity.
*   **Zill, Dennis G., and Patrick D. Shanahan. *Complex Analysis*. 3rd ed., Jones & Bartlett, 2015.**
    *   Chapters on integration, Cauchy's Theorem, and properties of analytic functions will provide detailed explanations and proofs.
*   **Ramana, B. V. *Higher Engineering Mathematics*. 39th ed., McGraw-Hill Education, 2023.**
    *   Sections on complex numbers and their applications, including contour integration, are likely to cover this topic.
*   **Grewal, B. S. *Higher Engineering Mathematics*. 44th ed., Khanna Publishers, 2018.**
    *   Similar to Ramana, this book will have relevant sections on complex integration and Cauchy's theorems.

---