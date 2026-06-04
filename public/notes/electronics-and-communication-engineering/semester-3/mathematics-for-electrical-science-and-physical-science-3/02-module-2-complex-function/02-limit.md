---
title: "Limit"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 2: Complex Function"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe25a"
status: "completed"
scrapedAt: "2026-05-23T17:47:00.553Z"
---
# Mathematics for Electrical Science and Physical Science – 3

## Module 2: Complex Functions

### Topic: Limit

**Learning Outcomes:**

Upon successful completion of this topic, students will be able to:
* Define the limit of a complex function.
* Evaluate limits of complex functions using algebraic manipulation and properties of limits.
* Understand the conditions under which a limit exists for a complex function.
* Apply the concept of limits to analyze the behavior of complex functions.

**Course Outcomes Alignment:**

This topic lays the foundational understanding for analyzing complex functions, which is crucial for various aspects of electrical and physical sciences. While not directly addressed in the listed COs, understanding limits is fundamental to:
* **CO2: Understand the analyticity of complex functions and apply it in conformal mapping.** Analyticity is defined through the existence of a derivative, which in turn relies on the existence of a limit.
* **CO4: Understand the series expansion of complex function about a singularity and apply residue theorem to compute real integrals.** Understanding the behavior of functions near points, especially singularities, often involves limit concepts.

**Introduction:**

In complex analysis, the concept of a limit is analogous to its real-valued counterpart but extended to functions of a complex variable. Understanding limits is paramount as it forms the basis for defining continuity, differentiability, and analyticity of complex functions, which are central to many applications in electrical and physical sciences.

---

### 1. Definition of the Limit of a Complex Function

**Key Concept:** The limit of a complex function $f(z)$ as $z$ approaches a point $z_0$ is a complex number $L$ if, for every positive number $\epsilon$, there exists a positive number $\delta$ such that if $0 < |z - z_0| < \delta$, then $|f(z) - L| < \epsilon$.

**Formal Definition:**

Let $f(z)$ be a complex-valued function defined in a neighborhood of a point $z_0$, except possibly at $z_0$ itself. We say that the limit of $f(z)$ as $z$ approaches $z_0$ is $L$, and we write:

$$ \lim_{z \to z_0} f(z) = L $$

if for every real number $\epsilon > 0$, there exists a real number $\delta > 0$ such that:

$$ |f(z) - L| < \epsilon \quad \text{whenever} \quad 0 < |z - z_0| < \delta $$

**Explanation:**

* **$z \to z_0$**: This means $z$ approaches $z_0$ from any direction in the complex plane.
* **$|z - z_0|$**: This represents the distance between $z$ and $z_0$ in the complex plane. The condition $0 < |z - z_0| < \delta$ means that $z$ is within a circle of radius $\delta$ centered at $z_0$, but $z$ is not equal to $z_0$.
* **$|f(z) - L|$**: This represents the distance between the function value $f(z)$ and the purported limit $L$.
* **The condition $|f(z) - L| < \epsilon$**: This means that as $z$ gets arbitrarily close to $z_0$, the function value $f(z)$ gets arbitrarily close to $L$.

**Relationship to Real and Imaginary Parts:**

Let $z = x + iy$, $z_0 = x_0 + iy_0$, $f(z) = u(x, y) + iv(x, y)$, and $L = A + iB$. The limit of $f(z)$ as $z \to z_0$ exists and is equal to $L$ if and only if the limits of the real and imaginary parts exist and are equal to $A$ and $B$, respectively.

$$ \lim_{z \to z_0} f(z) = L \quad \iff \quad \lim_{(x,y) \to (x_0,y_0)} u(x, y) = A \quad \text{and} \quad \lim_{(x,y) \to (x_0,y_0)} v(x, y) = B $$

This is a crucial theorem that allows us to evaluate limits of complex functions by considering the limits of their real and imaginary parts in the Cartesian plane.

**Reference:**
* **Kreyszig, Chapter 12, Section 12.1:** Introduces the basic concepts of complex functions and their properties, including the definition of limits.
* **Zill & Shanahan, Chapter 2, Section 2.1:** Provides a rigorous definition of limits and continuity for complex functions.

---

### 2. Existence of the Limit

**Key Concept:** For the limit of a complex function to exist at a point, the function must approach the same value regardless of the path taken to approach that point.

**Conditions for Existence:**

The limit $\lim_{z \to z_0} f(z)$ exists if and only if:

1.  **The limit of the real part exists.**
2.  **The limit of the imaginary part exists.**
3.  **The value of the limit is the same irrespective of the path along which $z$ approaches $z_0$.**

**When Does a Limit NOT Exist?**

A limit fails to exist if:

*   The limits of the real or imaginary parts do not exist.
*   The limits of the real or imaginary parts exist but lead to different values depending on the path of approach.

**Illustrative Example:**

Consider the function $f(z) = \frac{z}{\bar{z}}$. Let's examine the limit as $z \to 0$.
Let $z = x + iy$. Then $\bar{z} = x - iy$.
$f(z) = \frac{x + iy}{x - iy}$

**Path 1: Along the real axis ($y=0$)**
As $z \to 0$ along the real axis, $y=0$ and $z=x$.
$$ \lim_{x \to 0} f(x) = \lim_{x \to 0} \frac{x}{x} = 1 $$

**Path 2: Along the imaginary axis ($x=0$)**
As $z \to 0$ along the imaginary axis, $x=0$ and $z=iy$.
$$ \lim_{y \to 0} f(iy) = \lim_{y \to 0} \frac{iy}{-iy} = -1 $$

Since the limit depends on the path of approach (1 along the real axis, -1 along the imaginary axis), the limit of $f(z) = \frac{z}{\bar{z}}$ as $z \to 0$ does not exist.

**Reference:**
*   **Ramana, Chapter 38, Section 38.3:** Discusses the existence of limits and continuity in complex functions, often using examples similar to the one above.
*   **Grewal, Chapter 28, Section 28.3:** Covers limits and continuity of complex functions, emphasizing the path dependence.

---

### 3. Properties of Limits

**Key Concept:** Similar to real-valued functions, limits of complex functions obey several algebraic properties, provided the individual limits exist.

Let $\lim_{z \to z_0} f(z) = L$ and $\lim_{z \to z_0} g(z) = M$. Then:

1.  **Sum Rule:**
    $$ \lim_{z \to z_0} [f(z) + g(z)] = L + M $$

2.  **Difference Rule:**
    $$ \lim_{z \to z_0} [f(z) - g(z)] = L - M $$

3.  **Constant Multiple Rule:** For any complex constant $c$:
    $$ \lim_{z \to z_0} [c f(z)] = cL $$

4.  **Product Rule:**
    $$ \lim_{z \to z_0} [f(z) g(z)] = LM $$

5.  **Quotient Rule:** If $M \neq 0$:
    $$ \lim_{z \to z_0} \frac{f(z)}{g(z)} = \frac{L}{M} $$

6.  **Power Rule:** For any positive integer $n$:
    $$ \lim_{z \to z_0} [f(z)]^n = L^n $$

7.  **Limit of a Polynomial:** If $P(z) = a_n z^n + a_{n-1} z^{n-1} + \dots + a_1 z + a_0$, then
    $$ \lim_{z \to z_0} P(z) = P(z_0) = a_n z_0^n + a_{n-1} z_0^{n-1} + \dots + a_1 z_0 + a_0 $$

8.  **Limit of a Rational Function:** If $R(z) = \frac{P(z)}{Q(z)}$, where $P(z)$ and $Q(z)$ are polynomials, and $Q(z_0) \neq 0$:
    $$ \lim_{z \to z_0} R(z) = \frac{P(z_0)}{Q(z_0)} $$

**Reference:**
*   **Kreyszig, Chapter 12, Section 12.1:** Details these limit properties with proofs.
*   **Zill & Shanahan, Chapter 2, Section 2.1:** Similar coverage of limit properties.

---

### 4. Evaluating Limits

**Key Concept:** We can evaluate limits of complex functions by direct substitution (if the function is defined at the limit point and is continuous), algebraic manipulation, or by using the property relating complex limits to real and imaginary parts.

**Methods for Evaluation:**

1.  **Direct Substitution:** If $f(z)$ is a polynomial or a rational function and $z_0$ is in its domain (i.e., the denominator is non-zero at $z_0$), then:
    $$ \lim_{z \to z_0} f(z) = f(z_0) $$

2.  **Algebraic Manipulation:** Simplify the expression by factoring, canceling common terms, or rationalizing the denominator.

3.  **Using Real and Imaginary Parts:** Write $z = x + iy$ and $f(z) = u(x, y) + iv(x, y)$. Then evaluate the limits of $u(x, y)$ and $v(x, y)$ as $(x, y) \to (x_0, y_0)$ using techniques from multivariable calculus.

**Examples:**

**Example 1: Direct Substitution**
Find $\lim_{z \to 2+3i} (z^2 + 5z - 1)$.
This is a polynomial in $z$. So, we can directly substitute $z_0 = 2+3i$.
$$ \lim_{z \to 2+3i} (z^2 + 5z - 1) = (2+3i)^2 + 5(2+3i) - 1 $$
$$ = (4 + 12i + 9i^2) + (10 + 15i) - 1 $$
$$ = (4 + 12i - 9) + 10 + 15i - 1 $$
$$ = (-5 + 12i) + 9 + 15i $$
$$ = 4 + 27i $$

**Example 2: Algebraic Manipulation**
Find $\lim_{z \to 1} \frac{z^2 - 1}{z - 1}$.
Direct substitution gives $\frac{0}{0}$, so we use algebraic manipulation.
$$ \lim_{z \to 1} \frac{z^2 - 1}{z - 1} = \lim_{z \to 1} \frac{(z - 1)(z + 1)}{z - 1} $$
Since $z \to 1$, $z \neq 1$, so we can cancel $(z-1)$.
$$ = \lim_{z \to 1} (z + 1) = 1 + 1 = 2 $$

**Example 3: Using Real and Imaginary Parts**
Find $\lim_{z \to 0} \frac{\text{Re}(z^2)}{|z|}$.
Let $z = x + iy$. Then $z^2 = (x+iy)^2 = x^2 - y^2 + 2ixy$.
So, $\text{Re}(z^2) = x^2 - y^2$.
And $|z| = \sqrt{x^2 + y^2}$.
The function becomes $f(x, y) = \frac{x^2 - y^2}{\sqrt{x^2 + y^2}}$.
We need to evaluate $\lim_{(x,y) \to (0,0)} \frac{x^2 - y^2}{\sqrt{x^2 + y^2}}$.

Let's try approaching along different paths:
*   **Path 1: Along the x-axis ($y=0$)**
    $$ \lim_{x \to 0} \frac{x^2 - 0^2}{\sqrt{x^2 + 0^2}} = \lim_{x \to 0} \frac{x^2}{|x|} = \lim_{x \to 0} \frac{x^2}{\sqrt{x^2}} = \lim_{x \to 0} \frac{x^2}{|x|} $$
    If $x>0$, $\lim_{x \to 0^+} \frac{x^2}{x} = \lim_{x \to 0^+} x = 0$.
    If $x<0$, $\lim_{x \to 0^-} \frac{x^2}{-x} = \lim_{x \to 0^-} (-x) = 0$.
    So, along the x-axis, the limit is 0.

*   **Path 2: Along the y-axis ($x=0$)**
    $$ \lim_{y \to 0} \frac{0^2 - y^2}{\sqrt{0^2 + y^2}} = \lim_{y \to 0} \frac{-y^2}{|y|} $$
    If $y>0$, $\lim_{y \to 0^+} \frac{-y^2}{y} = \lim_{y \to 0^+} (-y) = 0$.
    If $y<0$, $\lim_{y \to 0^-} \frac{-y^2}{-y} = \lim_{y \to 0^-} y = 0$.
    So, along the y-axis, the limit is 0.

*   **Path 3: Using polar coordinates ($x = r \cos \theta, y = r \sin \theta$)**
    As $(x, y) \to (0, 0)$, $r \to 0^+$.
    $$ \frac{x^2 - y^2}{\sqrt{x^2 + y^2}} = \frac{(r \cos \theta)^2 - (r \sin \theta)^2}{\sqrt{r^2 \cos^2 \theta + r^2 \sin^2 \theta}} = \frac{r^2 (\cos^2 \theta - \sin^2 \theta)}{r} $$
    $$ = r \cos(2\theta) $$
    Now, take the limit as $r \to 0^+$:
    $$ \lim_{r \to 0^+} r \cos(2\theta) $$
    Since $|\cos(2\theta)| \leq 1$, we have $|r \cos(2\theta)| \leq r$. As $r \to 0^+$, $r \cos(2\theta) \to 0$ by the Squeeze Theorem.
    Therefore, the limit is 0.

**Reference:**
*   **Kreyszig, Chapter 12, Section 12.1:** Provides examples of limit evaluation.
*   **Ramana, Chapter 38, Section 38.3:** Includes various examples of evaluating limits of complex functions.
*   **Grewal, Chapter 28, Section 28.3:** Demonstrates techniques for limit calculation.

---

### 5. Important Points to Remember

*   The limit of a complex function $f(z)$ as $z \to z_0$ exists if and only if $f(z)$ approaches the same complex value $L$ regardless of the path taken by $z$ to $z_0$.
*   The most common reason for a limit to *not* exist is when it depends on the path of approach.
*   The relationship between the limit of a complex function and the limits of its real and imaginary parts is a powerful tool for evaluation and understanding.
*   The properties of limits (sum, difference, product, quotient, etc.) are essential for simplifying limit calculations.
*   For polynomials and rational functions where the denominator is non-zero at the limit point, direct substitution is usually the easiest method.

---

### 6. Practice Questions and Exercises

**Instructions:** Evaluate the following limits. If a limit does not exist, explain why.

1.  $\lim_{z \to i} (z^3 + 2z - 1)$
2.  $\lim_{z \to 1+i} \frac{z^2 - (1+i)^2}{z - (1+i)}$
3.  $\lim_{z \to 0} \frac{\bar{z}}{z}$
4.  $\lim_{z \to 0} \frac{\text{Im}(z^2)}{|z|}$
5.  $\lim_{z \to 1} \frac{z - 1}{\bar{z} - 1}$
6.  $\lim_{z \to 0} \frac{|z|^2}{z}$
7.  $\lim_{z \to 0} \frac{z \bar{z}}{z}$

---

### 7. Answers to Practice Questions

1.  **Answer:**
    This is a polynomial. Substitute $z = i$:
    $i^3 + 2i - 1 = -i + 2i - 1 = i - 1$.
    Limit = $-1 + i$.

2.  **Answer:**
    This limit is of the form $\frac{0}{0}$. We can use algebraic manipulation or recognize this as the definition of the derivative of $f(z) = z^2$ at $z_0 = 1+i$.
    Using algebraic manipulation:
    $\lim_{z \to 1+i} \frac{z^2 - (1+i)^2}{z - (1+i)} = \lim_{z \to 1+i} \frac{(z - (1+i))(z + (1+i))}{z - (1+i)}$
    $= \lim_{z \to 1+i} (z + (1+i)) = (1+i) + (1+i) = 2(1+i) = 2+2i$.

3.  **Answer:**
    Let $z = x+iy$. $\bar{z} = x-iy$.
    $\lim_{z \to 0} \frac{x-iy}{x+iy}$.
    If we approach along the real axis ($y=0$), $\lim_{x \to 0} \frac{x}{x} = 1$.
    If we approach along the imaginary axis ($x=0$), $\lim_{y \to 0} \frac{-iy}{iy} = -1$.
    Since the limits along different paths are different, the limit does not exist.

4.  **Answer:**
    Let $z = x+iy$. $z^2 = x^2 - y^2 + 2ixy$. $\text{Im}(z^2) = 2xy$. $|z| = \sqrt{x^2+y^2}$.
    We need to evaluate $\lim_{(x,y) \to (0,0)} \frac{2xy}{\sqrt{x^2+y^2}}$.
    Using polar coordinates: $x = r \cos \theta$, $y = r \sin \theta$.
    $\frac{2(r \cos \theta)(r \sin \theta)}{r} = \frac{2r^2 \cos \theta \sin \theta}{r} = 2r \cos \theta \sin \theta = r \sin(2\theta)$.
    As $r \to 0^+$, $r \sin(2\theta) \to 0$ since $|\sin(2\theta)| \leq 1$.
    Limit = 0.

5.  **Answer:**
    Let $z = x+iy$. $\bar{z} = x-iy$.
    $\lim_{(x,y) \to (1,0)} \frac{(x-1)+iy}{(x-1)-iy}$.
    Let's approach along the real axis ($y=0, x \to 1$): $\lim_{x \to 1} \frac{x-1}{x-1} = 1$.
    Let's approach along the imaginary axis ($x=1, y \to 0$): $\lim_{y \to 0} \frac{0+iy}{0-iy} = \lim_{y \to 0} \frac{iy}{-iy} = -1$.
    Since the limits along different paths are different, the limit does not exist.

6.  **Answer:**
    Let $z = x+iy$. $|z|^2 = x^2+y^2$.
    We need to evaluate $\lim_{(x,y) \to (0,0)} \frac{x^2+y^2}{x+iy}$.
    Using polar coordinates: $x = r \cos \theta$, $y = r \sin \theta$.
    $\frac{r^2}{r \cos \theta + ir \sin \theta} = \frac{r}{\cos \theta + i \sin \theta} = r e^{-i\theta}$.
    As $r \to 0^+$, $r e^{-i\theta} \to 0$ since $|e^{-i\theta}| = 1$.
    Limit = 0.

7.  **Answer:**
    $z \bar{z} = |z|^2$. So, $\lim_{z \to 0} \frac{|z|^2}{z}$.
    This is the same as question 6.
    Limit = 0.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |


### 8. Further Reading and References

*   **Kreyszig, Erwin. *Advanced Engineering Mathematics*. 10th ed., John Wiley & Sons, 2016.** (Primary textbook for foundational concepts)
*   **Zill, Dennis G., and Patrick D. Shanahan. *Complex Analysis*. 3rd ed., Jones & Bartlett Learning, 2015.** (Provides a more in-depth treatment of complex analysis)
*   **Ramana, B. V. *Higher Engineering Mathematics*. 39th ed., McGraw-Hill Education, 2023.** (Offers a comprehensive review of mathematics relevant to engineering)
*   **Grewal, B. S. *Higher Engineering Mathematics*. 44th ed., Khanna Publishers, 2018.** (Another valuable resource for engineering mathematics)

This topic serves as a crucial stepping stone into the world of complex functions. Mastering the concept of limits is fundamental for understanding continuity, differentiability, and the subsequent concepts of analyticity and Cauchy-Riemann equations, which are vital for advanced topics in electrical and physical sciences.