---
title: "Second evaluation method"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 3: Complex Integration: Line integrals in the complex plane (Definition & Basic properties)"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe26a"
status: "completed"
scrapedAt: "2026-05-23T17:47:12.704Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 3: Complex Integration: Line Integrals in the Complex Plane

### Topic: Second Evaluation Method

This topic focuses on a crucial method for evaluating complex line integrals, particularly useful when the integrand has a specific form.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Understand and apply the second evaluation method for complex line integrals.
*   Relate the second evaluation method to fundamental theorems in complex analysis.
*   Utilize the second evaluation method to solve practical problems in electrical and physical sciences.

---

### Key Concepts and Definitions:

**1. Complex Line Integral (Recap):**

The complex line integral of a complex function $f(z)$ along a curve $C$ is defined as:

$$ \int_C f(z) dz $$

where $z(t) = x(t) + iy(t)$ is a parameterization of the curve $C$, and $t$ varies from $a$ to $b$. This integral can be transformed into a real integral:

$$ \int_C f(z) dz = \int_a^b f(z(t)) z'(t) dt $$

**2. The Second Evaluation Method:**

The second evaluation method is a powerful shortcut for evaluating certain types of complex line integrals, particularly when the integrand $f(z)$ is the derivative of another function $F(z)$ (i.e., $f(z) = F'(z)$).

**Definition:** If a function $f(z)$ is continuous in a domain $D$, and there exists an analytic function $F(z)$ in $D$ such that $F'(z) = f(z)$, then the complex line integral of $f(z)$ along any contour $C$ from a point $z_1$ to a point $z_2$ within $D$ is given by:

$$ \int_C f(z) dz = F(z_2) - F(z_1) $$

This is analogous to the Fundamental Theorem of Calculus for real integrals.

**Crucial Requirement:** For the second evaluation method to be applicable, the integrand $f(z)$ must possess an **antiderivative** (or primitive function) $F(z)$ that is analytic in the domain containing the curve $C$.

---

### Basic Properties of Line Integrals (Relevant to Second Evaluation Method):

*   **Additivity:** If $C$ is a contour composed of two consecutive contours $C_1$ and $C_2$, then:
    $$ \int_C f(z) dz = \int_{C_1} f(z) dz + \int_{C_2} f(z) dz $$
    When using the second evaluation method, this property means that the result depends only on the start and end points of the entire path, not on intermediate points.

*   **Independence of Path:** If $f(z)$ has an antiderivative $F(z)$ in a domain $D$, then the integral of $f(z)$ from $z_1$ to $z_2$ is independent of the path taken between $z_1$ and $z_2$, as long as the path lies entirely within $D$. This is a direct consequence of the second evaluation method.

---

### Applications and Examples:

The second evaluation method is particularly useful for evaluating integrals of functions where finding an explicit parameterization of the curve might be cumbersome.

**Example 1:** Evaluate $\int_C e^z dz$ where $C$ is any contour from $z=0$ to $z=1+i$.

*   **Analysis:** The integrand is $f(z) = e^z$. We need to find an antiderivative $F(z)$ such that $F'(z) = e^z$.
*   **Antiderivative:** The function $F(z) = e^z$ is analytic everywhere, and its derivative is $F'(z) = e^z$.
*   **Application of Second Evaluation Method:** The start point is $z_1 = 0$ and the end point is $z_2 = 1+i$.
*   **Calculation:**
    $$ \int_C e^z dz = F(z_2) - F(z_1) = e^{1+i} - e^0 = e \cdot e^i - 1 = e(\cos(1) + i\sin(1)) - 1 $$

**Example 2:** Evaluate $\int_C \frac{1}{z} dz$ where $C$ is the unit circle $|z|=1$ traversed counterclockwise.

*   **Analysis:** The integrand is $f(z) = \frac{1}{z}$. We need to find an antiderivative $F(z)$ such that $F'(z) = \frac{1}{z}$.
*   **Antiderivative:** The function $F(z) = \log(z)$ is an antiderivative of $\frac{1}{z}$. However, the logarithm function is multi-valued and has a branch cut. For the second evaluation method to be applicable, the antiderivative must be **single-valued and analytic** in the domain containing the curve.
*   **Problem:** The unit circle $|z|=1$ encloses the origin ($z=0$), which is a singularity for $\frac{1}{z}$. The function $\log(z)$ is not analytic on any path that encircles the origin. Therefore, the second evaluation method **cannot be directly applied** to this integral in the domain containing the entire unit circle.
*   **Correct Approach (Preview of later topics):** This integral is famously evaluated using the definition or Cauchy's Integral Theorem, resulting in $2\pi i$. This highlights the importance of the analyticity requirement for the antiderivative.

**Example 3:** Evaluate $\int_C z^2 dz$ where $C$ is the line segment from $z=1$ to $z=3+i$.

*   **Analysis:** The integrand is $f(z) = z^2$. We need to find an antiderivative $F(z)$ such that $F'(z) = z^2$.
*   **Antiderivative:** The function $F(z) = \frac{z^3}{3}$ is analytic everywhere, and its derivative is $F'(z) = \frac{3z^2}{3} = z^2$.
*   **Application of Second Evaluation Method:** The start point is $z_1 = 1$ and the end point is $z_2 = 3+i$.
*   **Calculation:**
    $$ \int_C z^2 dz = F(z_2) - F(z_1) = \frac{(3+i)^3}{3} - \frac{1^3}{3} $$
    $$ (3+i)^3 = 3^3 + 3(3^2)(i) + 3(3)(i^2) + i^3 = 27 + 27i - 9 - i = 18 + 26i $$
    $$ \int_C z^2 dz = \frac{18 + 26i}{3} - \frac{1}{3} = \frac{17 + 26i}{3} $$

**Example 4:** Evaluate $\int_C \frac{1}{(z-2)^2} dz$ along any path from $z=3$ to $z=1$.

*   **Analysis:** The integrand is $f(z) = \frac{1}{(z-2)^2}$. We need an antiderivative.
*   **Antiderivative:** Let $u = z-2$. Then $\frac{1}{(z-2)^2} = u^{-2}$. The antiderivative with respect to $u$ is $\frac{u^{-1}}{-1} = -\frac{1}{u} = -\frac{1}{z-2}$. So, $F(z) = -\frac{1}{z-2}$ is an antiderivative.
*   **Domain of Analyticity:** The function $F(z) = -\frac{1}{z-2}$ is analytic everywhere except at $z=2$. The path from $z=3$ to $z=1$ does not pass through $z=2$.
*   **Application of Second Evaluation Method:** $z_1 = 3$, $z_2 = 1$.
*   **Calculation:**
    $$ \int_C \frac{1}{(z-2)^2} dz = F(z_2) - F(z_1) = \left(-\frac{1}{1-2}\right) - \left(-\frac{1}{3-2}\right) $$
    $$ = \left(-\frac{1}{-1}\right) - \left(-\frac{1}{1}\right) = 1 - (-1) = 1 + 1 = 2 $$

---

### Connection to Cauchy's Integral Theorem:

Cauchy's Integral Theorem states that if $f(z)$ is analytic in a simply connected domain $D$, then for any closed contour $C$ within $D$, $\oint_C f(z) dz = 0$.

The second evaluation method can be seen as a generalization or a consequence of Cauchy's Integral Theorem. If $f(z) = F'(z)$ and $F(z)$ is analytic, then the integral of $f(z)$ around any closed loop is zero because $F(z_2) - F(z_1)$ will be $F(z_1) - F(z_1) = 0$ when the start and end points are the same.

---

### Relation to Course Outcomes:

*   **CO3: Compute complex integrals using Cauchy's integral theorem and Cauchy's integral formula.**
    The second evaluation method is a fundamental technique that complements Cauchy's Integral Theorem. Understanding this method is crucial for applying Cauchy's Theorem effectively, as it deals with integrals of derivatives.

---

### Important Points to Remember:

*   **Existence of an Antiderivative:** The most critical condition for the second evaluation method is that the integrand $f(z)$ must have an antiderivative $F(z)$.
*   **Analyticity of the Antiderivative:** The antiderivative $F(z)$ must be **single-valued and analytic** in the entire domain that contains the path of integration. If $F(z)$ has singularities or is not single-valued along the path, this method cannot be applied directly.
*   **Path Independence:** If the conditions are met, the integral's value depends only on the start and end points of the contour, not the specific path taken.
*   **Not Universally Applicable:** This method is a shortcut, and not all complex line integrals can be evaluated this way. Integrals of functions like $\frac{1}{z}$ around a circle are prime examples where this method fails due to the lack of an analytic antiderivative in the relevant domain.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |


### References for Further Study:

*   **Kreyszig, Erwin. *Advanced Engineering Mathematics*. 10th ed., John Wiley & Sons, 2016.**
    *   Chapters on Complex Analysis often cover line integrals and the fundamental theorem of calculus for complex functions.
*   **Zill, Dennis G., and Patrick D. Shanahan. *Complex Analysis*. 3rd ed., Jones & Bartlett, 2015.**
    *   Look for sections on line integrals and the properties of analytic functions, including the relationship between integration and differentiation.
*   **Ramana, B. V. *Higher Engineering Mathematics*. 39th ed., McGraw-Hill Education, 2023.**
    *   Sections on complex integration will detail the definition and evaluation methods.
*   **Grewal, B. S. *Higher Engineering Mathematics*. 44th ed., Khanna Publishers, 2018.**
    *   Similar to Ramana, this book provides thorough coverage of complex integration techniques.

---

### Practice Questions:

1.  Evaluate $\int_C \cos(z) dz$ along the path from $z=0$ to $z=\pi/2 + i \ln(2)$.
2.  Evaluate $\int_C e^{2z} dz$ along the curve $|z|=1$ from $z=1$ to $z=i$.
3.  Evaluate $\int_C \frac{1}{z-a} dz$ where $C$ is a simple closed contour. Does the second evaluation method apply? Explain why or why not.
4.  Evaluate $\int_C \frac{1}{\sqrt{z}} dz$ where $C$ is the upper semi-circle of $|z|=1$ from $z=-1$ to $z=1$. (Hint: Consider the principal branch of $\sqrt{z}$.)
5.  Evaluate $\int_C \frac{1}{(z+1)^3} dz$ along a path from $z=0$ to $z=2$.

---

### Answers to Practice Questions:

1.  **Solution:** The integrand is $f(z) = \cos(z)$. An antiderivative is $F(z) = \sin(z)$. The path is from $z_1 = 0$ to $z_2 = \pi/2 + i \ln(2)$.
    $$ \int_C \cos(z) dz = F(z_2) - F(z_1) = \sin(\pi/2 + i \ln(2)) - \sin(0) $$
    $$ \sin(A+iB) = \sin A \cos(iB) + \cos A \sin(iB) = \sin A \cosh B + i \cos A \sinh B $$
    $$ \sin(\pi/2 + i \ln(2)) = \sin(\pi/2) \cosh(\ln(2)) + i \cos(\pi/2) \sinh(\ln(2)) $$
    $$ = 1 \cdot \frac{e^{\ln(2)} + e^{-\ln(2)}}{2} + i \cdot 0 \cdot \sinh(\ln(2)) = \frac{2 + 1/2}{2} = \frac{5/2}{2} = \frac{5}{4} $$
    So, the integral is $\frac{5}{4} - 0 = \frac{5}{4}$.

2.  **Solution:** The integrand is $f(z) = e^{2z}$. An antiderivative is $F(z) = \frac{1}{2} e^{2z}$. The path is from $z_1 = 1$ to $z_2 = i$ along the unit circle.
    $$ \int_C e^{2z} dz = F(z_2) - F(z_1) = \frac{1}{2} e^{2i} - \frac{1}{2} e^{2} $$
    $$ = \frac{1}{2} (\cos(2) + i\sin(2)) - \frac{1}{2} e^2 $$

3.  **Solution:** The integrand is $f(z) = \frac{1}{z-a}$. An antiderivative is $F(z) = \log(z-a)$. For the second evaluation method to apply, $F(z)$ must be analytic in the domain containing the closed contour $C$. The function $\log(z-a)$ has a branch point at $z=a$. If the contour $C$ encloses the point $z=a$, then $\log(z-a)$ is not analytic along the entire contour. Therefore, the second evaluation method **cannot be applied** if $C$ encloses $a$. If $C$ does not enclose $a$, then $F(z)$ is analytic in a domain containing $C$, and the integral is $F(z_{end}) - F(z_{start})$. For a closed contour, $z_{start} = z_{end}$, so the integral is 0, as per Cauchy's Integral Theorem.

4.  **Solution:** The integrand is $f(z) = \frac{1}{\sqrt{z}}$. Let's use the principal branch where $\sqrt{z} = \sqrt{r} e^{i\theta/2}$ for $-\pi < \theta \le \pi$. An antiderivative $F(z)$ of $\frac{1}{\sqrt{z}}$ is $2\sqrt{z}$. We need to check if $F(z)$ is analytic along the upper semi-circle from $z=-1$ to $z=1$.
    The path goes from $z=-1$ to $z=1$.
    At $z=-1$, $r=1$, $\theta=\pi$. So $\sqrt{z} = \sqrt{1} e^{i\pi/2} = i$.
    At $z=1$, $r=1$, $\theta=0$. So $\sqrt{z} = \sqrt{1} e^{i0/2} = 1$.
    The path from $z=-1$ to $z=1$ via the upper semi-circle keeps $\theta$ between $\pi$ and $0$. For the principal branch, $\theta$ is restricted to $(-\pi, \pi]$. The path from $z=-1$ to $z=1$ passes through the negative real axis, which is where the principal branch of $\sqrt{z}$ is defined. The function $2\sqrt{z}$ is analytic for $z \ne 0$ and along this path.
    $$ \int_C \frac{1}{\sqrt{z}} dz = F(1) - F(-1) = 2\sqrt{1} - 2\sqrt{-1} $$
    Using the principal branch:
    $$ = 2(1) - 2(i) = 2 - 2i $$

5.  **Solution:** The integrand is $f(z) = \frac{1}{(z+1)^3}$. An antiderivative is $F(z) = -\frac{1}{2(z+1)^2}$. The function $F(z)$ is analytic everywhere except at $z=-1$. The path is from $z_1=0$ to $z_2=2$, which does not include $z=-1$.
    $$ \int_C \frac{1}{(z+1)^3} dz = F(2) - F(0) = \left(-\frac{1}{2(2+1)^2}\right) - \left(-\frac{1}{2(0+1)^2}\right) $$
    $$ = -\frac{1}{2(3)^2} - \left(-\frac{1}{2(1)^2}\right) = -\frac{1}{18} + \frac{1}{2} = \frac{-1 + 9}{18} = \frac{8}{18} = \frac{4}{9} $$