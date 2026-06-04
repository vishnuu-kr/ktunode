---
title: "Essential Singularities"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 4: Taylor series and Maclaurin series"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe274"
status: "completed"
scrapedAt: "2026-05-23T17:47:20.600Z"
---
# Mathematics for Electrical Science and Physical Science – 3

## Module 4: Taylor Series and Maclaurin Series

### Topic: Essential Singularities

---

### 1. Introduction to Singularities in Complex Analysis

Before delving into essential singularities, it's crucial to understand the general concept of singularities for complex functions. A function $f(z)$ is **analytic** (or holomorphic) at a point $z_0$ if it is differentiable in some neighborhood of $z_0$. A **singularity** of $f(z)$ is a point where $f(z)$ is not analytic.

**Key Concept:** Singularities are points where the "nice" behavior of a complex function breaks down. Understanding the nature of these singularities is vital for analyzing function behavior and applying powerful tools like the Residue Theorem.

**Reference:** This foundational concept is thoroughly discussed in **Complex Analysis by Dennis G. Zill, Patrick D. Shanahan (3rd edition)**, particularly in chapters related to analyticity and singularities.

---

### 2. Types of Isolated Singularities

Isolated singularities are points $z_0$ such that $f(z)$ is analytic in a punctured neighborhood $0 < |z - z_0| < R$ for some $R > 0$, but not analytic at $z_0$. The behavior of $f(z)$ in the Laurent series expansion around $z_0$ dictates the type of isolated singularity:

$$ f(z) = \sum_{n=-\infty}^{\infty} a_n (z - z_0)^n $$

The principal part of the Laurent series is the portion with negative powers of $(z - z_0)$: $\sum_{n=-\infty}^{-1} a_n (z - z_0)^n$.

#### 2.1. Removable Singularity

*   **Definition:** A singularity $z_0$ is a removable singularity if the principal part of the Laurent series expansion of $f(z)$ around $z_0$ contains only a finite number of terms, or equivalently, if all coefficients $a_n$ for $n < 0$ are zero. In this case, $f(z)$ can be redefined at $z_0$ to be analytic.
*   **Condition:** $\lim_{z \to z_0} f(z)$ exists and is finite.
*   **Example:** $f(z) = \frac{\sin z}{z}$ at $z_0 = 0$. The Laurent series is $1 - \frac{z^2}{3!} + \frac{z^4}{5!} - \dots$, which has no negative power terms. $\lim_{z \to 0} \frac{\sin z}{z} = 1$.

#### 2.2. Pole

*   **Definition:** A singularity $z_0$ is a pole if the principal part of the Laurent series expansion of $f(z)$ around $z_0$ contains a finite number of terms, and the lowest power of $(z - z_0)$ is negative. The order of the pole is the absolute value of the exponent of the lowest negative power term.
*   **Condition:** $\lim_{z \to z_0} |f(z)| = \infty$.
*   **Example:** $f(z) = \frac{1}{(z-2)^3}$ at $z_0 = 2$. The Laurent series is simply $\frac{1}{(z-2)^3}$, a pole of order 3.
*   **Example:** $f(z) = \frac{e^z}{z^2}$ at $z_0 = 0$. The Laurent series is $\frac{1}{z^2} + \frac{1}{z} + \frac{1}{2!} + \frac{z}{3!} + \dots$. This is a pole of order 2.

#### 2.3. Essential Singularity

*   **Definition:** A singularity $z_0$ is an essential singularity if the principal part of the Laurent series expansion of $f(z)$ around $z_0$ contains infinitely many terms with negative powers of $(z - z_0)$.
*   **Condition:** Neither $\lim_{z \to z_0} f(z)$ nor $\lim_{z \to z_0} |f(z)|$ exists (finite or infinite).
*   **Example:** $f(z) = e^{1/z}$ at $z_0 = 0$.

    The Maclaurin series for $e^w$ is $e^w = 1 + w + \frac{w^2}{2!} + \frac{w^3}{3!} + \dots$.
    Substituting $w = 1/z$, we get the Laurent series for $f(z)$ around $z_0 = 0$:
    $$ f(z) = e^{1/z} = 1 + \frac{1}{z} + \frac{1}{2! z^2} + \frac{1}{3! z^3} + \dots $$
    Since there are infinitely many terms with negative powers of $z$, $z_0 = 0$ is an essential singularity.

**Important Point to Remember:** The behavior of a function near an essential singularity is highly erratic and unpredictable.

**Reference:** Kreyszig's **Advanced Engineering Mathematics (10th edition)**, Chapter 13 (Functions of a Complex Variable), provides an excellent overview of singularities and their classification.

---

### 3. The Casorati-Weierstrass Theorem (Picard's Little Theorem)

This theorem provides a powerful characterization of the behavior of a function near an essential singularity.

**Theorem Statement:** If $f(z)$ has an essential singularity at $z_0$, then for any $\epsilon > 0$ and any complex number $w$, there exists a point $z$ in the punctured disk $0 < |z - z_0| < \epsilon$ such that $|f(z) - w| < \delta$ for any arbitrary $\delta > 0$.

**In simpler terms:** In every neighborhood of an essential singularity, the function $f(z)$ takes on values that are arbitrarily close to *any* complex number.

**Implication:** The range of $f(z)$ in any punctured neighborhood of an essential singularity is dense in the entire complex plane $\mathbb{C}$.

**Example:** Consider $f(z) = e^{1/z}$ at $z_0 = 0$. As $z$ approaches $0$ along the positive real axis (i.e., $z = x \to 0^+$), $1/z \to +\infty$, so $f(z) = e^{1/z} \to \infty$. As $z$ approaches $0$ along the negative real axis (i.e., $z = -x \to 0^-$), $1/z \to -\infty$, so $f(z) = e^{1/z} \to 0$. As $z$ approaches $0$ along the imaginary axis (i.e., $z = iy \to 0$), $1/z = 1/(iy) = -i/y$. As $y \to 0^+$, $-i/y \to -i\infty$, and $e^{-i/y} = \cos(-1/y) + i\sin(-1/y) = \cos(1/y) - i\sin(1/y)$. The modulus is $|e^{-i/y}| = 1$, but the argument $1/y$ oscillates infinitely as $y \to 0$. This demonstrates the wild behavior near the essential singularity.

**Reference:** Zill and Shanahan's **Complex Analysis** extensively covers the Casorati-Weierstrass Theorem and its implications.

---

### 4. Picard's Great Theorem

This is a stronger version of the Casorati-Weierstrass Theorem.

**Theorem Statement:** If $f(z)$ has an essential singularity at $z_0$, then for any $\epsilon > 0$, $f(z)$ takes on every complex value infinitely often in the punctured disk $0 < |z - z_0| < \epsilon$, with at most one exception.

**Implication:** In any neighborhood of an essential singularity, the function omits at most one value.

**Example:** $f(z) = e^{1/z}$ at $z_0 = 0$. According to Picard's Great Theorem, $e^{1/z}$ takes on every complex value infinitely often in any punctured neighborhood of 0, with at most one exception. It turns out that $e^{1/z}$ never takes the value 0. This is because $e^w \neq 0$ for any finite $w$, and $1/z$ remains finite in any punctured neighborhood of 0.

**Reference:** This advanced theorem is also detailed in **Complex Analysis by Dennis G. Zill, Patrick D. Shanahan**.

---

### 5. Identifying Essential Singularities

Essential singularities are typically found in functions involving exponentials, trigonometric functions, or their compositions with terms that tend to infinity at the singularity.

**Common Forms leading to Essential Singularities:**

*   $e^{g(z)}$ where $g(z)$ has a singularity at $z_0$.
*   $\sin(g(z))$ or $\cos(g(z))$ where $g(z)$ has a singularity at $z_0$.
*   Functions where the Laurent series expansion around $z_0$ has infinitely many negative power terms.

**Strategy:**
1.  **Locate the singularity:** Find points where the function is not analytic.
2.  **Examine the Laurent series:** If the principal part of the Laurent series around the singularity has infinitely many terms, it's an essential singularity.
3.  **Consider transformations:** If the function is of the form $f(g(z))$, analyze the singularity of $g(z)$ and the behavior of $f(w)$ as $w$ approaches the singularity of $g(z)$.

---

### 6. Relevance to Course Outcomes

This topic directly supports **CO4: Understand the series expansion of complex function about a singularity and apply residue theorem to compute real integrals.**

*   **Series Expansion:** Essential singularities are characterized by their Laurent series expansion having an infinite principal part. Understanding this is fundamental to the "series expansion of complex function about a singularity" aspect of CO4.
*   **Residue Theorem:** While the residue at an essential singularity is the coefficient of $(z-z_0)^{-1}$, its value doesn't have the same direct interpretation as for poles in the context of standard contour integration problems that directly evaluate real integrals via the residue theorem. However, understanding the nature of the singularity is crucial for determining if the residue theorem is applicable or if other methods are needed for complex integration. The concept of singularities, including essential ones, is a prerequisite for fully grasping the power and limitations of the residue theorem.

**Knowledge Level (K3):** This topic requires students to *apply* their understanding of series expansions to classify singularities. While the theorems about the behavior near essential singularities (Casorati-Weierstrass, Picard's Great) might be at a higher knowledge level in their full proof, *identifying* an essential singularity based on its Laurent series or its functional form, and understanding its general properties, falls within K3 for the purpose of this module's learning outcomes.

---

### 7. Examples and Practice Questions

**Example 1:** Determine the type of singularity for $f(z) = z \sin(1/z)$ at $z_0 = 0$.

*   **Solution:**
    We know the Maclaurin series for $\sin w$ is $\sin w = w - \frac{w^3}{3!} + \frac{w^5}{5!} - \dots$.
    Substitute $w = 1/z$:
    $\sin(1/z) = \frac{1}{z} - \frac{1}{3! z^3} + \frac{1}{5! z^5} - \dots$
    Now, multiply by $z$:
    $f(z) = z \sin(1/z) = z \left( \frac{1}{z} - \frac{1}{3! z^3} + \frac{1}{5! z^5} - \dots \right)$
    $f(z) = 1 - \frac{1}{3! z^2} + \frac{1}{5! z^4} - \dots$
    The Laurent series expansion of $f(z)$ around $z_0 = 0$ is $1 - \frac{1}{6z^2} + \frac{1}{120z^4} - \dots$.
    Since there are finitely many negative power terms (only $1/z^2$ and $1/z^4$), this is a **removable singularity**. We can also check the limit: $\lim_{z \to 0} z \sin(1/z) = 0$ (since $|\sin(1/z)| \le 1$, so $|z \sin(1/z)| \le |z|$ and $\lim_{z \to 0} |z| = 0$). A finite limit indicates a removable singularity.

**Example 2:** Determine the type of singularity for $f(z) = e^{2/z}$ at $z_0 = 0$.

*   **Solution:**
    Using the Maclaurin series for $e^w = 1 + w + \frac{w^2}{2!} + \frac{w^3}{3!} + \dots$.
    Substitute $w = 2/z$:
    $f(z) = e^{2/z} = 1 + \frac{2}{z} + \frac{(2/z)^2}{2!} + \frac{(2/z)^3}{3!} + \dots$
    $f(z) = 1 + \frac{2}{z} + \frac{4}{2! z^2} + \frac{8}{3! z^3} + \dots$
    $f(z) = 1 + \frac{2}{z} + \frac{2}{z^2} + \frac{4}{3z^3} + \dots$
    The principal part has infinitely many terms with negative powers of $z$. Therefore, $z_0 = 0$ is an **essential singularity**.

**Example 3:** Determine the type of singularity for $f(z) = \frac{\cos z}{z^3}$ at $z_0 = 0$.

*   **Solution:**
    The Maclaurin series for $\cos z$ is $\cos z = 1 - \frac{z^2}{2!} + \frac{z^4}{4!} - \dots$.
    Divide by $z^3$:
    $f(z) = \frac{1}{z^3} \left( 1 - \frac{z^2}{2!} + \frac{z^4}{4!} - \dots \right)$
    $f(z) = \frac{1}{z^3} - \frac{1}{2! z} + \frac{z}{4!} - \dots$
    The principal part has terms $\frac{1}{z^3}$ and $\frac{1}{z}$. The lowest power of $z$ in the principal part is $z^{-3}$. Therefore, $z_0 = 0$ is a **pole of order 3**.

---

### 8. Practice Questions

**Question 1:** Classify the singularity of $f(z) = z^2 e^{1/z}$ at $z_0 = 0$.
    a) Removable Singularity
    b) Pole of order 2
    c) Essential Singularity
    d) Simple Pole

**Question 2:** Which of the following functions has an essential singularity at $z=0$?
    a) $\frac{\sin z}{z}$
    b) $\frac{1}{z^2}$
    c) $e^{-1/z^2}$
    d) $\frac{z}{z^2+1}$

**Question 3:** State the Casorati-Weierstrass Theorem and explain its significance regarding the behavior of functions near essential singularities.

**Question 4:** Consider the function $f(z) = \frac{1}{z^2 \sin z}$. Classify the singularity at $z_0 = 0$.
    Hint: The Maclaurin series for $\sin z$ is $z - \frac{z^3}{3!} + \frac{z^5}{5!} - \dots$.

---

### 9. Answers to Practice Questions

**Answer 1:** c) Essential Singularity
    *   **Explanation:** $e^{1/z} = 1 + \frac{1}{z} + \frac{1}{2!z^2} + \frac{1}{3!z^3} + \dots$.
        $z^2 e^{1/z} = z^2 \left( 1 + \frac{1}{z} + \frac{1}{2!z^2} + \frac{1}{3!z^3} + \dots \right) = z^2 + z + \frac{1}{2!} + \frac{1}{3!z} + \dots$.
        The principal part has infinitely many terms ($1/(3!z)$, $1/(4!z^2)$, etc.), indicating an essential singularity.

**Answer 2:** c) $e^{-1/z^2}$
    *   **Explanation:**
        a) $\frac{\sin z}{z} = 1 - \frac{z^2}{3!} + \dots$, removable singularity at $z=0$.
        b) $\frac{1}{z^2}$, pole of order 2 at $z=0$.
        c) $e^{-1/z^2}$. Let $w = -1/z^2$. As $z \to 0$, $|w| \to \infty$. The Laurent series is $1 + w + \frac{w^2}{2!} + \dots = 1 - \frac{1}{z^2} + \frac{(-1/z^2)^2}{2!} + \dots = 1 - \frac{1}{z^2} + \frac{1}{2z^4} - \dots$. This has infinitely many negative power terms, so it's an essential singularity.
        d) $\frac{z}{z^2+1} = z \cdot \frac{1}{z^2(1+1/z^2)}$. This has a pole of order 2 at $z=0$.

**Answer 3:**
    *   **Casorati-Weierstrass Theorem Statement:** If $f(z)$ has an essential singularity at $z_0$, then for any $\epsilon > 0$ and any complex number $w$, there exists a point $z$ in the punctured disk $0 < |z - z_0| < \epsilon$ such that $|f(z) - w| < \delta$ for any arbitrary $\delta > 0$.
    *   **Significance:** It implies that in any neighborhood of an essential singularity, the function's values are dense in the entire complex plane. The function can get arbitrarily close to any complex number in the vicinity of the singularity. This highlights the erratic and widespread behavior of functions at these points.

**Answer 4:** Pole of order 3
    *   **Explanation:**
        $f(z) = \frac{1}{z^2 \sin z}$
        $\sin z = z - \frac{z^3}{6} + \frac{z^5}{120} - \dots$
        $z^2 \sin z = z^2 \left( z - \frac{z^3}{6} + \frac{z^5}{120} - \dots \right) = z^3 - \frac{z^5}{6} + \frac{z^7}{120} - \dots$
        $f(z) = \frac{1}{z^3 - \frac{z^5}{6} + \frac{z^7}{120} - \dots}$
        We can factor out $z^3$ from the denominator:
        $f(z) = \frac{1}{z^3 \left( 1 - \frac{z^2}{6} + \frac{z^4}{120} - \dots \right)}$
        Let $g(z) = \frac{1}{1 - \frac{z^2}{6} + \frac{z^4}{120} - \dots}$. Since the denominator is non-zero at $z=0$ (it's 1), $g(z)$ is analytic at $z=0$ and $g(0) = 1$.
        So, $f(z) = \frac{1}{z^3} g(z)$.
        As $z \to 0$, $g(z) \to 1$. Therefore, $f(z)$ behaves like $\frac{1}{z^3}$ near $z=0$.
        This indicates a **pole of order 3** at $z=0$.

---

### 10. Important Points to Remember

*   **Singularity:** A point where a function is not analytic.
*   **Isolated Singularity:** A singularity $z_0$ such that $f(z)$ is analytic in a punctured neighborhood $0 < |z - z_0| < R$.
*   **Classification by Laurent Series:**
    *   **Removable:** Finitely many negative terms or $\lim_{z \to z_0} f(z)$ exists and is finite.
    *   **Pole:** Finitely many negative terms, with the lowest power being $m < 0$. Order $m$. $\lim_{z \to z_0} |f(z)| = \infty$.
    *   **Essential:** Infinitely many negative terms. Neither limit exists (finite or infinite).
*   **Casorati-Weierstrass Theorem:** In any neighborhood of an essential singularity, the function's values are dense in $\mathbb{C}$.
*   **Picard's Great Theorem:** In any neighborhood of an essential singularity, the function takes on every complex value infinitely often, with at most one exception.
*   **Identification:** Look for functions involving $e^{1/z}$, $\sin(1/z)$, $\cos(1/z)$, etc., near the singularity. These are common indicators of essential singularities.

---

### 11. Connection to Textbooks

*   **Kreyszig (10th Ed.):** Chapter 13 provides detailed explanations of singularities, Laurent series, and their classification. It serves as the primary reference for understanding the foundational concepts of complex analysis relevant to this topic.
*   **Zill & Shanahan (3rd Ed.):** This book offers a more in-depth treatment of complex analysis, including rigorous proofs and examples of theorems like Casorati-Weierstrass and Picard's Great Theorem, enriching the understanding of the behavior near essential singularities.
*   **Ramana & Grewal:** These textbooks, while broader in scope, also cover complex functions and series expansions. They can serve as supplementary resources for understanding the basic principles of analyticity and singularities.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
