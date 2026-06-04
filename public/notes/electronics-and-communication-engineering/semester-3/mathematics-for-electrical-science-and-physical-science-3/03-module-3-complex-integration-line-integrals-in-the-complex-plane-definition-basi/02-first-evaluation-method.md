---
title: "First evaluation method"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 3: Complex Integration: Line integrals in the complex plane (Definition & Basic properties)"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe269"
status: "completed"
scrapedAt: "2026-05-23T17:47:11.991Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 3: Complex Integration: Line Integrals in the Complex Plane (Definition & Basic Properties)

### Topic: First Evaluation Method

---

### 1. Learning Outcomes Covered

This section focuses on the **first evaluation method** for complex line integrals. While this topic primarily sets the groundwork for more advanced integration techniques, it directly contributes to:

*   **Foundation for CO3:** Understanding how to evaluate complex line integrals is the fundamental step before applying Cauchy's Integral Theorem and Cauchy's Integral Formula. This method provides the direct computational approach.
*   **Foundation for CO4:** While Residue Theorem is a later topic, the ability to parameterize curves and evaluate integrals is a prerequisite for understanding contour integration in the context of the Residue Theorem.

---

### 2. Key Concepts and Definitions

The core idea of evaluating a complex line integral is to transform it into a standard real definite integral. This is achieved by parameterizing the curve along which the integration is performed.

#### 2.1. Complex Line Integral

**Definition:** Let $f(z)$ be a complex-valued function defined on a curve $C$ in the complex plane. The complex line integral of $f(z)$ along $C$ is denoted by $\int_C f(z) dz$.

If $f(z) = u(x, y) + iv(x, y)$ and $z = x + iy$, then $dz = dx + i dy$. The integral can be expressed in terms of real integrals:

$$ \int_C f(z) dz = \int_C (u + iv)(dx + i dy) = \int_C (u \, dx - v \, dy) + i \int_C (v \, dx + u \, dy) $$

This form connects complex line integrals to real line integrals, which can be evaluated using parameterization.

#### 2.2. Parameterization of a Curve

To evaluate $\int_C f(z) dz$, we need to represent the curve $C$ by a parameter, say $t$. This means expressing $z$ as a function of $t$: $z(t) = x(t) + i y(t)$, where $t$ varies over an interval $[a, b]$.

*   **Smooth Curve:** A curve $C$ is smooth if $z(t)$ is continuously differentiable with respect to $t$ and $z'(t) \neq 0$ for all $t$ in $[a, b]$.
*   **Piecewise Smooth Curve:** A curve is piecewise smooth if it consists of a finite number of smooth curves joined end to end.

#### 2.3. The First Evaluation Method

The first evaluation method involves the following steps:

1.  **Parameterize the Curve C:** Express $z$ as $z(t) = x(t) + i y(t)$ for $t \in [a, b]$.
2.  **Find dz/dt:** Differentiate $z(t)$ with respect to $t$ to get $z'(t) = \frac{dz}{dt}$.
3.  **Substitute into f(z):** Replace $z$ with $z(t)$ in the function $f(z)$ to get $f(z(t))$.
4.  **Convert the Integral:** Substitute $f(z(t))$ and $dz = z'(t) dt$ into the integral:
    $$ \int_C f(z) dz = \int_a^b f(z(t)) z'(t) dt $$
5.  **Evaluate the Real Integral:** The resulting integral is a definite integral with respect to the real variable $t$, which can be evaluated using standard calculus techniques.

#### 2.4. Basic Properties of Complex Line Integrals

These properties are crucial for manipulating and simplifying complex integrals, which will be essential for later theorems.

*   **Linearity:** For any complex constants $\alpha$ and $\beta$, and functions $f(z)$ and $g(z)$:
    $$ \int_C (\alpha f(z) + \beta g(z)) dz = \alpha \int_C f(z) dz + \beta \int_C g(z) dz $$
    *   **Reference:** Kreyszig (10th ed.), Section 13.1, discusses properties of line integrals, which extend to the complex plane.

*   **Additivity:** If $C$ is composed of two smooth curves $C_1$ and $C_2$ traversed in the same direction (i.e., the end of $C_1$ is the start of $C_2$), then:
    $$ \int_C f(z) dz = \int_{C_1} f(z) dz + \int_{C_2} f(z) dz $$
    *   **Reference:** Ramana (39th ed.), Chapter 22, covers line integrals and their properties, which are directly applicable here.

*   **Reversal of Path:** If $-C$ denotes the curve $C$ traversed in the opposite direction:
    $$ \int_{-C} f(z) dz = - \int_C f(z) dz $$

*   **Integral Bounds (Estimate):** If $|f(z)| \le M$ for all $z$ on $C$, and $L$ is the length of $C$:
    $$ \left| \int_C f(z) dz \right| \le ML $$
    *   This is a very important property for estimating the magnitude of integrals, particularly useful in proving theorems like Cauchy's Integral Theorem.
    *   **Reference:** Zill & Shanahan (3rd ed.), Section 5.1, provides a detailed discussion on the estimation of integrals.

---

### 3. Examples Using the First Evaluation Method

Let's illustrate the first evaluation method with a few examples.

#### Example 1: Integral along a Straight Line Segment

**Problem:** Evaluate $\int_C z^2 dz$, where $C$ is the straight line segment from $z_1 = 0$ to $z_2 = 1 + i$.

**Solution:**

1.  **Parameterize C:** The line segment can be parameterized as $z(t) = t(1+i)$ for $t \in [0, 1]$.
    *   Here, $x(t) = t$ and $y(t) = t$.
2.  **Find dz/dt:** Differentiate $z(t)$ with respect to $t$:
    $$ z'(t) = \frac{dz}{dt} = 1 + i $$
3.  **Substitute into f(z):** The function is $f(z) = z^2$. Substitute $z(t)$:
    $$ f(z(t)) = (t(1+i))^2 = t^2 (1+i)^2 = t^2 (1 + 2i + i^2) = t^2 (1 + 2i - 1) = 2i t^2 $$
4.  **Convert the Integral:**
    $$ \int_C z^2 dz = \int_0^1 f(z(t)) z'(t) dt = \int_0^1 (2i t^2) (1+i) dt $$
5.  **Evaluate the Real Integral:**
    $$ \int_0^1 2i (1+i) t^2 dt = 2i (1+i) \int_0^1 t^2 dt $$
    $$ = 2i (1+i) \left[ \frac{t^3}{3} \right]_0^1 $$
    $$ = 2i (1+i) \left( \frac{1}{3} - 0 \right) $$
    $$ = \frac{2i (1+i)}{3} = \frac{2i + 2i^2}{3} = \frac{2i - 2}{3} = -\frac{2}{3} + \frac{2}{3}i $$

**Answer:** $\int_C z^2 dz = -\frac{2}{3} + \frac{2}{3}i$

#### Example 2: Integral along a Circular Arc

**Problem:** Evaluate $\int_C e^z dz$, where $C$ is the upper semi-circle of radius 1 centered at the origin, traversed counterclockwise.

**Solution:**

1.  **Parameterize C:** The upper semi-circle can be parameterized using polar coordinates. $z = e^{i\theta}$. For the upper semi-circle, $\theta$ goes from $0$ to $\pi$.
    $$ z(t) = e^{it}, \quad t \in [0, \pi] $$
    *   Here, $x(t) = \cos(t)$ and $y(t) = \sin(t)$.
2.  **Find dz/dt:**
    $$ z'(t) = \frac{dz}{dt} = i e^{it} $$
3.  **Substitute into f(z):** The function is $f(z) = e^z$. Substitute $z(t)$:
    $$ f(z(t)) = e^{z(t)} = e^{e^{it}} $$
4.  **Convert the Integral:**
    $$ \int_C e^z dz = \int_0^\pi f(z(t)) z'(t) dt = \int_0^\pi e^{e^{it}} (i e^{it}) dt $$

    *This integral looks challenging to evaluate directly. This highlights a limitation of the first evaluation method when the integrand becomes complex after substitution. However, it's important to understand the setup.*

    **Important Note:** For functions like $e^z$, which have an antiderivative ($e^z$ itself), the integral can be computed much more easily without parameterization using the Fundamental Theorem of Calculus for complex line integrals (which will be covered later, but is good to be aware of). If $F'(z) = f(z)$, then $\int_C f(z) dz = F(z_2) - F(z_1)$.

    Let's check this for the previous example: $\int_C z^2 dz$. An antiderivative of $z^2$ is $\frac{z^3}{3}$.
    $z_1 = 0$, $z_2 = 1+i$.
    $\int_C z^2 dz = \left[\frac{z^3}{3}\right]_0^{1+i} = \frac{(1+i)^3}{3} - \frac{0^3}{3} = \frac{(1+i)^3}{3}$
    $(1+i)^2 = 1 + 2i + i^2 = 2i$
    $(1+i)^3 = (1+i)(2i) = 2i + 2i^2 = 2i - 2$
    So, $\frac{(1+i)^3}{3} = \frac{-2 + 2i}{3} = -\frac{2}{3} + \frac{2}{3}i$. This matches our previous result.

    **For Example 2, if we used the antiderivative:**
    $f(z) = e^z$, $F(z) = e^z$. $C$ is the upper semi-circle from $z_1 = 1$ to $z_2 = -1$.
    $\int_C e^z dz = F(z_2) - F(z_1) = e^{-1} - e^1 = e^{-1} - e$.

    This illustrates the power of knowing antiderivatives for complex functions. The first evaluation method is crucial when antiderivatives are not readily available or when the problem specifically requires parameterization.

#### Example 3: Integral along a Curve Defined by $y=x^2$

**Problem:** Evaluate $\int_C (x + iy^2) dz$, where $C$ is the parabola $y = x^2$ from $z_1 = 0$ to $z_2 = 1 + i$.

**Solution:**

1.  **Parameterize C:** Let $x = t$. Then $y = t^2$.
    $$ z(t) = t + i t^2, \quad t \in [0, 1] $$
2.  **Find dz/dt:**
    $$ z'(t) = \frac{dz}{dt} = 1 + 2it $$
3.  **Substitute into f(z):** The function is $f(z) = x + iy^2$. Substitute $x=t$ and $y=t^2$:
    $$ f(z(t)) = t + i (t^2)^2 = t + i t^4 $$
4.  **Convert the Integral:**
    $$ \int_C (x + iy^2) dz = \int_0^1 f(z(t)) z'(t) dt = \int_0^1 (t + i t^4) (1 + 2it) dt $$
5.  **Evaluate the Real Integral:**
    Expand the integrand:
    $$ (t + i t^4) (1 + 2it) = t(1 + 2it) + i t^4 (1 + 2it) $$
    $$ = t + 2it^2 + i t^4 + 2i^2 t^5 $$
    $$ = t + 2it^2 + i t^4 - 2t^5 $$
    $$ = (t - 2t^5) + i (2t^2 + t^4) $$
    Now integrate:
    $$ \int_0^1 [(t - 2t^5) + i (2t^2 + t^4)] dt $$
    $$ = \left[ \frac{t^2}{2} - \frac{2t^6}{6} \right]_0^1 + i \left[ \frac{2t^3}{3} + \frac{t^5}{5} \right]_0^1 $$
    $$ = \left[ \frac{t^2}{2} - \frac{t^6}{3} \right]_0^1 + i \left[ \frac{2t^3}{3} + \frac{t^5}{5} \right]_0^1 $$
    $$ = \left( \frac{1}{2} - \frac{1}{3} \right) - (0 - 0) + i \left( \frac{2}{3} + \frac{1}{5} \right) - i (0 + 0) $$
    $$ = \left( \frac{3 - 2}{6} \right) + i \left( \frac{10 + 3}{15} \right) $$
    $$ = \frac{1}{6} + i \frac{13}{15} $$

**Answer:** $\int_C (x + iy^2) dz = \frac{1}{6} + i \frac{13}{15}$

---

### 4. Practice Questions and Exercises

**Instructions:** Use the first evaluation method to solve the following problems.

1.  Evaluate $\int_C z dz$, where $C$ is the line segment from $z=1$ to $z=2+i$.
2.  Evaluate $\int_C |z|^2 dz$, where $C$ is the line segment from $z=0$ to $z=1+i$.
3.  Evaluate $\int_C \frac{1}{z} dz$, where $C$ is the unit circle $|z|=1$ traversed counterclockwise.
4.  Evaluate $\int_C \text{Re}(z) dz$, where $C$ is the curve $y=x^2$ from $z=0$ to $z=1+i$.

---

### 5. Answers to Practice Questions

1.  **Solution:**
    *   Parameterize $C$: $z(t) = (1+i)t + 1$, for $t \in [0, 1]$.
    *   $z'(t) = 1+i$.
    *   $f(z) = z$. So, $f(z(t)) = (1+i)t + 1$.
    *   $\int_C z dz = \int_0^1 ((1+i)t + 1)(1+i) dt$
    *   $= (1+i) \int_0^1 ((1+i)t + 1) dt$
    *   $= (1+i) \left[ \frac{(1+i)t^2}{2} + t \right]_0^1$
    *   $= (1+i) \left( \frac{(1+i)}{2} + 1 \right)$
    *   $= (1+i) \left( \frac{1+i+2}{2} \right) = (1+i) \left( \frac{3+i}{2} \right)$
    *   $= \frac{3 + i + 3i + i^2}{2} = \frac{3 + 4i - 1}{2} = \frac{2 + 4i}{2} = 1 + 2i$.
    **Answer:** $1 + 2i$.

2.  **Solution:**
    *   Parameterize $C$: $z(t) = (1+i)t$, for $t \in [0, 1]$.
    *   $z'(t) = 1+i$.
    *   $f(z) = |z|^2$. $|z(t)| = |(1+i)t| = |1+i||t| = \sqrt{1^2+1^2} t = \sqrt{2}t$ (since $t \ge 0$).
    *   $f(z(t)) = |z(t)|^2 = (\sqrt{2}t)^2 = 2t^2$.
    *   $\int_C |z|^2 dz = \int_0^1 (2t^2)(1+i) dt$
    *   $= 2(1+i) \int_0^1 t^2 dt$
    *   $= 2(1+i) \left[ \frac{t^3}{3} \right]_0^1$
    *   $= 2(1+i) \frac{1}{3} = \frac{2}{3}(1+i) = \frac{2}{3} + \frac{2}{3}i$.
    **Answer:** $\frac{2}{3} + \frac{2}{3}i$.

3.  **Solution:**
    *   Parameterize $C$: $z(t) = e^{it} = \cos(t) + i \sin(t)$, for $t \in [0, 2\pi]$.
    *   $z'(t) = i e^{it}$.
    *   $f(z) = \frac{1}{z}$. So, $f(z(t)) = \frac{1}{e^{it}} = e^{-it}$.
    *   $\int_C \frac{1}{z} dz = \int_0^{2\pi} (e^{-it})(i e^{it}) dt$
    *   $= \int_0^{2\pi} i e^{-it+it} dt = \int_0^{2\pi} i dt$
    *   $= i [t]_0^{2\pi} = i (2\pi - 0) = 2\pi i$.
    **Answer:** $2\pi i$.

4.  **Solution:**
    *   Parameterize $C$: $z(t) = t + i t^2$, for $t \in [0, 1]$.
    *   $z'(t) = 1 + 2it$.
    *   $f(z) = \text{Re}(z)$. For $z(t) = t + i t^2$, $\text{Re}(z(t)) = t$.
    *   $f(z(t)) = t$.
    *   $\int_C \text{Re}(z) dz = \int_0^1 (t)(1 + 2it) dt$
    *   $= \int_0^1 (t + 2it^2) dt$
    *   $= \left[ \frac{t^2}{2} + i \frac{2t^3}{3} \right]_0^1$
    *   $= \left( \frac{1}{2} + i \frac{2}{3} \right) - (0 + 0) = \frac{1}{2} + i \frac{2}{3}$.
    **Answer:** $\frac{1}{2} + i \frac{2}{3}$.

---

### 6. Important Points to Remember

*   The first evaluation method is a **direct computational approach** to complex line integrals by converting them into real definite integrals.
*   **Accurate parameterization** of the curve $C$ is the most critical step. Ensure the parameter correctly traces the curve and covers the specified direction.
*   Remember to substitute both $z(t)$ into $f(z)$ AND $dz = z'(t) dt$.
*   The **length of the curve** $L$ is important for the integral estimation property: $|\int_C f(z) dz| \le ML$. For a line segment from $z_1$ to $z_2$, $L = |z_2 - z_1|$. For a circle of radius $r$, $L = 2\pi r$.
*   Be mindful of the **direction of traversal**. Reversing the direction negates the integral.
*   While this method works for any integrable function and curve, it can lead to **complex real integrals**. Knowledge of antiderivatives (if they exist and are easy to find) can significantly simplify evaluation, as shown by the Fundamental Theorem of Calculus for complex line integrals.
*   This method is foundational for understanding contour integration techniques that will be introduced later in the course.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=fNk_zzaMoEs) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |


### 7. Textbook and Reference Material

*   **Kreyszig, Erwin. *Advanced Engineering Mathematics*. 10th ed., John Wiley & Sons, 2016.** - Look for sections on line integrals in the complex plane. Kreyszig usually provides a clear, systematic approach to these topics.
*   **Zill, Dennis G., and Patrick D. Shanahan. *Complex Analysis*. 3rd ed., Jones & Bartlett, 2015.** - This is a primary resource for complex analysis and will have detailed explanations and examples of line integral evaluation.
*   **Ramana, B. V. *Higher Engineering Mathematics*. 39th ed., McGraw-Hill Education, 2023.** - Ramana's book is comprehensive for engineering mathematics and will cover line integrals with good examples.
*   **Grewal, B. S. *Higher Engineering Mathematics*. 44th ed., Khanna Publishers, 2018.** - Another excellent resource for engineering mathematics, expected to cover complex integration thoroughly.

---

### 8. Alignment with Course Outcomes

*   **CO1 (Fourier Transforms):** While not directly computing Fourier Transforms here, the ability to parameterize and integrate functions in the complex plane is a prerequisite for understanding the mathematical machinery used in signal processing and Fourier analysis, which often involve complex integrals.
*   **CO2 (Analyticity & Conformal Mapping):** Understanding line integrals and their properties is a necessary building block for concepts like Cauchy-Riemann equations and analyticity, which are central to conformal mapping.
*   **CO3 (Cauchy's Integral Theorem & Formula):** The first evaluation method is the direct computational tool that justifies and is contrasted with the powerful results of Cauchy's theorems. It provides the "how-to" before introducing the "why it's easier" with Cauchy's methods.
*   **CO4 (Series Expansion & Residue Theorem):** The ability to parameterize and integrate complex functions is a fundamental skill for contour integration, which is the basis of the Residue Theorem.

---