---
title: "Cauchy Integral formula (without proof)."
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 3: Complex Integration: Line integrals in the complex plane (Definition & Basic properties)"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe26e"
status: "completed"
scrapedAt: "2026-05-23T17:47:15.867Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 3: Complex Integration: Line Integrals in the Complex Plane (Definition & Basic Properties)

### Topic: Cauchy Integral Formula (without proof)

**Course Outcomes Addressed:**

*   **CO3:** Compute complex integrals using Cauchy's integral theorem and Cauchy's integral formula. (Knowledge Level: K3)

**Learning Outcomes Addressed:**

*   Understand and apply the Cauchy Integral Formula to evaluate complex line integrals and determine function values within a contour.

**Reference Material:**

*   **Primary Text:** Advanced Engineering Mathematics by Erwin Kreyszig (John Wiley & Sons, 10th edition, 2016)
*   **Key References for Concepts:** Complex Analysis by Dennis G. Zill, Patrick D. Shanahan (Jones & Bartlett, 3rd edition, 2015); Higher Engineering Mathematics by B. V. Ramana (McGraw-Hill Education, 39th edition, 2023); Higher Engineering Mathematics by B.S. Grewal (Khanna Publishers, 44th edition, 2018).

---

### 1. Introduction to the Cauchy Integral Formula

The Cauchy Integral Formula is a cornerstone of complex analysis, providing a powerful way to relate the values of an analytic function inside a closed contour to its values on the contour itself. It's a direct consequence of Cauchy's Integral Theorem and its extension.

**Key Concept:** If a function $f(z)$ is analytic in a simply connected domain $D$, and $C$ is a simple closed contour within $D$, and $z_0$ is any point inside $C$, then the value of $f(z_0)$ can be expressed as an integral of $f(z)$ along $C$.

---

### 2. The Cauchy Integral Formula for Function Values

**Definition:**

Let $f(z)$ be a function that is analytic in a simply connected domain $D$. Let $C$ be a simple closed contour lying entirely within $D$, and let $z_0$ be any point inside $C$. Then, the value of $f(z)$ at $z_0$ is given by:

$$f(z_0) = \frac{1}{2\pi i} \oint_C \frac{f(z)}{z - z_0} dz$$

**Explanation:**

*   **Analytic Function $f(z)$:** This means $f(z)$ is differentiable at every point in its domain.
*   **Simply Connected Domain $D$:** A domain where any closed curve within it can be continuously shrunk to a point without leaving the domain. Essentially, it has no "holes."
*   **Simple Closed Contour $C$:** A curve that starts and ends at the same point and does not intersect itself.
*   **$z_0$ inside $C$:** The point where we want to find the function's value must be enclosed by the contour $C$.
*   **$z$ on $C$:** The integration is performed along the boundary curve $C$.
*   **$\frac{f(z)}{z - z_0}$:** The integrand is the function $f(z)$ divided by $(z - z_0)$. The singularity of the integrand is at $z = z_0$.

**Kreyszig Reference (10th Ed., Section 6.4):** Kreyszig presents this formula and highlights its significance in demonstrating that an analytic function is infinitely differentiable and that its derivatives can also be expressed by similar integral formulas.

**Zill & Shanahan Reference (3rd Ed., Chapter 4):** This textbook also provides a detailed discussion of the Cauchy Integral Formula for Function Values and its implications.

**Grewal Reference (44th Ed., Chapter 35):** Grewal's Higher Engineering Mathematics will likely cover this formula under complex integration, emphasizing its application in evaluating integrals.

---

### 3. Applications and Interpretations

The Cauchy Integral Formula has profound implications:

*   **Determining Function Values:** It allows us to calculate the exact value of an analytic function at any interior point, given its values on the boundary. This is a powerful tool for understanding the behavior of analytic functions.
*   **Differentiability:** As mentioned by Kreyszig, this formula leads to the conclusion that if a function is analytic in a domain, it is infinitely differentiable in that domain.
*   **Evaluation of Integrals:** The formula can be rearranged to evaluate certain types of complex line integrals.

**Rearranging for Integral Evaluation:**

From the formula, we can write:

$$\oint_C \frac{f(z)}{z - z_0} dz = 2\pi i f(z_0)$$

This is a direct application of CO3.

---

### 4. Cauchy Integral Formula for Derivatives

An extension of the Cauchy Integral Formula allows us to find the values of the derivatives of an analytic function.

**Definition:**

Let $f(z)$ be a function that is analytic in a simply connected domain $D$. Let $C$ be a simple closed contour lying entirely within $D$, and let $z_0$ be any point inside $C$. Then, the $n$-th derivative of $f(z)$ at $z_0$ is given by:

$$f^{(n)}(z_0) = \frac{n!}{2\pi i} \oint_C \frac{f(z)}{(z - z_0)^{n+1}} dz$$

where $n = 0, 1, 2, \dots$.

**Explanation:**

*   For $n=0$, this reduces to the Cauchy Integral Formula for function values: $f^{(0)}(z_0) = f(z_0) = \frac{0!}{2\pi i} \oint_C \frac{f(z)}{(z - z_0)^{1}} dz = \frac{1}{2\pi i} \oint_C \frac{f(z)}{z - z_0} dz$.
*   The formula shows that the $(n+1)$-th power of $(z-z_0)$ in the denominator corresponds to the $n$-th derivative of $f$ at $z_0$.

**Kreyszig Reference (10th Ed., Section 6.4):** Kreyszig explicitly states these formulas for derivatives, emphasizing their importance and the infinite differentiability of analytic functions.

**Zill & Shanahan Reference (3rd Ed., Chapter 4):** Similarly, Zill and Shanahan discuss the formulas for derivatives, showcasing how they are derived and used.

**Grewal Reference (44th Ed., Chapter 35):** Grewal will also likely present these formulas as part of his treatment of complex integration.

---

### 5. Examples

**Example 1: Evaluating a Complex Integral**

**Problem:** Evaluate the integral $\oint_C \frac{e^z}{z - 1} dz$, where $C$ is the circle $|z| = 2$ traversed counterclockwise.

**Solution:**

1.  **Identify $f(z)$ and $z_0$:**
    Here, $f(z) = e^z$ and $z_0 = 1$.
2.  **Check for Analyticity:**
    The function $f(z) = e^z$ is analytic everywhere in the complex plane.
3.  **Check if $z_0$ is inside $C$:**
    The contour $C$ is the circle $|z| = 2$. The point $z_0 = 1$ has a magnitude $|1| = 1$, which is less than 2. Therefore, $z_0 = 1$ is inside the contour $C$.
4.  **Apply Cauchy Integral Formula:**
    Using the formula $\oint_C \frac{f(z)}{z - z_0} dz = 2\pi i f(z_0)$:
    $$\oint_C \frac{e^z}{z - 1} dz = 2\pi i f(1)$$
    Since $f(z) = e^z$, $f(1) = e^1 = e$.
    Therefore, the integral is $2\pi i e$.

**Example 2: Evaluating an Integral with a Higher Power**

**Problem:** Evaluate the integral $\oint_C \frac{\cos(\pi z)}{z - 2} dz$, where $C$ is the circle $|z| = 3$ traversed counterclockwise.

**Solution:**

1.  **Identify $f(z)$ and $z_0$:**
    Here, $f(z) = \cos(\pi z)$ and $z_0 = 2$.
2.  **Check for Analyticity:**
    The function $f(z) = \cos(\pi z)$ is analytic everywhere.
3.  **Check if $z_0$ is inside $C$:**
    The contour $C$ is $|z| = 3$. The point $z_0 = 2$ has $|2| = 2$, which is less than 3. Thus, $z_0 = 2$ is inside $C$.
4.  **Apply Cauchy Integral Formula:**
    $$\oint_C \frac{\cos(\pi z)}{z - 2} dz = 2\pi i f(2)$$
    $f(2) = \cos(2\pi) = 1$.
    Therefore, the integral is $2\pi i (1) = 2\pi i$.

**Example 3: Using the Formula for Derivatives**

**Problem:** Evaluate the integral $\oint_C \frac{e^z}{(z - 1)^2} dz$, where $C$ is the circle $|z| = 2$ traversed counterclockwise.

**Solution:**

1.  **Identify $f(z)$ and $z_0$:**
    Here, $f(z) = e^z$ and $z_0 = 1$.
2.  **Check for Analyticity:**
    $f(z) = e^z$ is analytic everywhere.
3.  **Check if $z_0$ is inside $C$:**
    $z_0 = 1$ is inside the circle $|z| = 2$.
4.  **Determine the form of the integrand:**
    The integrand is $\frac{e^z}{(z - 1)^2} = \frac{f(z)}{(z - z_0)^2}$.
    This matches the form $\frac{f(z)}{(z - z_0)^{n+1}}$ with $n+1 = 2$, so $n = 1$.
5.  **Apply Cauchy Integral Formula for Derivatives:**
    We need $f^{(1)}(z_0)$, which is $f'(z_0)$.
    The formula is $\oint_C \frac{f(z)}{(z - z_0)^{n+1}} dz = \frac{2\pi i}{n!} f^{(n)}(z_0)$.
    For $n=1$: $\oint_C \frac{f(z)}{(z - z_0)^2} dz = \frac{2\pi i}{1!} f'(z_0) = 2\pi i f'(z_0)$.
    Now, find the derivative of $f(z) = e^z$: $f'(z) = e^z$.
    Evaluate the derivative at $z_0 = 1$: $f'(1) = e^1 = e$.
    Therefore, the integral is $2\pi i e$.

**Example 4: Integral with the Denominator $(z-a)^3$**

**Problem:** Evaluate $\oint_C \frac{\sin(z)}{z^3} dz$ where $C$ is the circle $|z| = 1$ traversed counterclockwise.

**Solution:**

1.  **Identify $f(z)$ and $z_0$:**
    We can write the integrand as $\frac{\sin(z)}{z^3} = \frac{f(z)}{(z-z_0)^{n+1}}$.
    Comparing, we have $f(z) = \sin(z)$, $z_0 = 0$, and $n+1 = 3$, which means $n = 2$.
2.  **Check Analyticity:**
    $f(z) = \sin(z)$ is analytic everywhere.
3.  **Check if $z_0$ is inside $C$:**
    $z_0 = 0$ is clearly inside the circle $|z|=1$.
4.  **Apply the formula for the second derivative:**
    The formula is $\oint_C \frac{f(z)}{(z - z_0)^{n+1}} dz = \frac{2\pi i}{n!} f^{(n)}(z_0)$.
    For $n=2$: $\oint_C \frac{f(z)}{(z - z_0)^3} dz = \frac{2\pi i}{2!} f''(z_0) = \pi i f''(z_0)$.
    Find the derivatives of $f(z) = \sin(z)$:
    $f'(z) = \cos(z)$
    $f''(z) = -\sin(z)$
    Evaluate the second derivative at $z_0 = 0$: $f''(0) = -\sin(0) = 0$.
    Therefore, the integral is $\pi i (0) = 0$.

---

### 6. Important Points to Remember

*   **Analyticity is Crucial:** The Cauchy Integral Formulas are valid only if $f(z)$ is analytic in the domain containing the contour $C$ and its interior.
*   **Location of $z_0$:** The point $z_0$ *must* be strictly inside the simple closed contour $C$. If $z_0$ is outside or on the contour, the formulas do not apply directly, and the integral might be zero (by Cauchy's Theorem if $f(z)/(z-z_0)$ is analytic within and on $C$) or require further analysis.
*   **Orientation of $C$:** The formulas assume $C$ is traversed in the *positive* (counterclockwise) direction. If the contour is traversed clockwise, the result will have a negative sign.
*   **Identifying $n$:** For derivatives, correctly identify $n$ by comparing the power of $(z-z_0)$ in the denominator with $(z-z_0)^{n+1}$.
*   **Factorials:** Pay attention to the $n!$ in the denominator of the derivative formula.

---

### 7. Practice Questions/Exercises

**Question 1:** Evaluate $\oint_C \frac{e^{2z}}{z+1} dz$ where $C$ is the circle $|z| = 3$ oriented counterclockwise.

**Question 2:** Evaluate $\oint_C \frac{\sin(\pi z)}{z-1/2} dz$ where $C$ is the circle $|z| = 1$ oriented counterclockwise.

**Question 3:** Evaluate $\oint_C \frac{\cos(z)}{z^2} dz$ where $C$ is the circle $|z| = \pi/2$ oriented counterclockwise.

**Question 4:** Evaluate $\oint_C \frac{e^z}{(z-2)^3} dz$ where $C$ is the circle $|z| = 5$ oriented counterclockwise.

**Question 5:** Evaluate $\oint_C \frac{1}{z-i} dz$ where $C$ is the circle $|z| = 2$ oriented counterclockwise.

**Question 6:** Evaluate $\oint_C \frac{z^2+1}{(z-i)^2} dz$ where $C$ is the circle $|z| = \sqrt{2}$ oriented counterclockwise.

---

### 8. Answers to Practice Questions

**Answer 1:**
*   $f(z) = e^{2z}$, $z_0 = -1$.
*   $f(z)$ is analytic everywhere. $|-1| = 1 < 3$, so $z_0$ is inside $C$.
*   Integral = $2\pi i f(-1) = 2\pi i e^{2(-1)} = 2\pi i e^{-2}$.

**Answer 2:**
*   $f(z) = \sin(\pi z)$, $z_0 = 1/2$.
*   $f(z)$ is analytic everywhere. $|1/2| = 1/2 < 1$, so $z_0$ is inside $C$.
*   Integral = $2\pi i f(1/2) = 2\pi i \sin(\pi/2) = 2\pi i (1) = 2\pi i$.

**Answer 3:**
*   $f(z) = \cos(z)$, $z_0 = 0$.
*   $f(z)$ is analytic everywhere. $|0| = 0 < \pi/2$, so $z_0$ is inside $C$.
*   The integral is of the form $\oint_C \frac{f(z)}{(z-z_0)^2} dz$. Here $n+1=2$, so $n=1$.
*   Integral = $\frac{2\pi i}{1!} f'(0)$.
*   $f'(z) = -\sin(z)$.
*   $f'(0) = -\sin(0) = 0$.
*   Integral = $2\pi i (0) = 0$.

**Answer 4:**
*   $f(z) = e^z$, $z_0 = 2$.
*   $f(z)$ is analytic everywhere. $|2| = 2 < 5$, so $z_0$ is inside $C$.
*   The integral is of the form $\oint_C \frac{f(z)}{(z-z_0)^3} dz$. Here $n+1=3$, so $n=2$.
*   Integral = $\frac{2\pi i}{2!} f''(2)$.
*   $f'(z) = e^z$, $f''(z) = e^z$.
*   $f''(2) = e^2$.
*   Integral = $\frac{2\pi i}{2} e^2 = \pi i e^2$.

**Answer 5:**
*   $f(z) = 1$, $z_0 = i$.
*   $f(z)$ is analytic everywhere. $|i| = 1 < 2$, so $z_0$ is inside $C$.
*   Integral = $2\pi i f(i) = 2\pi i (1) = 2\pi i$.

**Answer 6:**
*   $f(z) = z^2+1$, $z_0 = i$.
*   $f(z)$ is analytic everywhere. $|i| = 1 < \sqrt{2}$, so $z_0$ is inside $C$.
*   The integral is of the form $\oint_C \frac{f(z)}{(z-z_0)^2} dz$. Here $n+1=2$, so $n=1$.
*   Integral = $\frac{2\pi i}{1!} f'(i)$.
*   $f'(z) = 2z$.
*   $f'(i) = 2i$.
*   Integral = $2\pi i (2i) = 4\pi i^2 = -4\pi$.

---

### 9. Connection to Course Outcomes

*   **CO3:** This topic directly addresses CO3 by providing the mechanism to "Compute complex integrals using Cauchy's integral formula." The examples demonstrate how to identify the components ($f(z)$, $z_0$, $n$) and apply the formula to get the integral's value. The problems requiring derivatives further solidify this outcome.

This concludes the notes on the Cauchy Integral Formula (without proof). Remember its power lies in connecting interior function values to boundary behavior, a fundamental concept in complex analysis.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |
