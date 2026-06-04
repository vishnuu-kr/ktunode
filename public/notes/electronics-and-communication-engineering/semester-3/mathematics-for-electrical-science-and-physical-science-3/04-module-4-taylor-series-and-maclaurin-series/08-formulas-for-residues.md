---
title: "Formulas for Residues"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 4: Taylor series and Maclaurin series"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe277"
status: "completed"
scrapedAt: "2026-05-23T17:47:23.107Z"
---
## MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

### Module 4: Taylor Series and Maclaurin Series

#### Topic: Formulas for Residues

**1. Introduction**

This topic delves into the concept of residues in complex analysis, which is crucial for evaluating complex integrals and, by extension, real integrals using the Residue Theorem. While Taylor and Maclaurin series are fundamental to understanding the local behavior of functions around a point, residues are intimately linked to the Laurent series expansion of a function around a singularity. This section focuses on the practical formulas for calculating these residues.

**2. Learning Outcomes Covered**

*   **Understand the series expansion of complex function about a singularity and apply residue theorem to compute real integrals.** (CO4, K3) - This topic directly addresses the first part of this outcome by providing the tools to find residues, which are essential coefficients in the Laurent series expansion around singularities. The application to real integrals will be discussed in subsequent topics related to the Residue Theorem.
*   **Compute complex integrals using Cauchy's integral theorem and Cauchy's integral formula.** (CO3, K3) - While this topic doesn't directly compute integrals, understanding residues is a prerequisite for advanced integral computation techniques that extend Cauchy's formulas.

**3. Key Concepts and Definitions**

*   **Singularity:** A point $z_0$ at which a complex function $f(z)$ is not analytic.
*   **Isolated Singularity:** A singularity $z_0$ such that there exists a punctured disk $0 < |z - z_0| < r$ in which $f(z)$ is analytic.
*   **Laurent Series:** For a function $f(z)$ analytic in an annulus $A = \{z : r < |z - z_0| < R\}$, where $0 \le r < R \le \infty$, $f(z)$ can be represented by the Laurent series:
    $f(z) = \sum_{n=-\infty}^{\infty} a_n (z - z_0)^n = \sum_{n=0}^{\infty} a_n (z - z_0)^n + \sum_{n=1}^{\infty} a_{-n} (z - z_0)^{-n}$
    The second part of this series, $\sum_{n=1}^{\infty} a_{-n} (z - z_0)^{-n}$, is called the **principal part** of the Laurent series.
*   **Residue of $f(z)$ at $z_0$ (Res$(f, z_0)$):** The coefficient $a_{-1}$ of the term $(z - z_0)^{-1}$ in the Laurent series expansion of $f(z)$ around an isolated singularity $z_0$. This coefficient is denoted as Res$(f, z_0)$ or Res$_{z=z_0} f(z)$.

**4. Formulas for Calculating Residues**

The method for calculating a residue depends on the type of isolated singularity.

**4.1. Pole of Order $m$ at $z_0$**

If $z_0$ is a pole of order $m$ for $f(z)$, then $f(z)$ can be written as:
$f(z) = \frac{g(z)}{(z - z_0)^m}$
where $g(z)$ is analytic and non-zero at $z_0$.

**Formula 1: General Formula for a Pole of Order $m$**

Res$(f, z_0) = \frac{1}{(m-1)!} \lim_{z \to z_0} \frac{d^{m-1}}{dz^{m-1}} \left[ (z - z_0)^m f(z) \right]$

This formula is derived by considering the Taylor series expansion of $(z-z_0)^m f(z)$ around $z_0$. The coefficient of $(z-z_0)^{m-1}$ in this Taylor series will be $a_{-1}$ of $f(z)$.

*   **Reference:** Kreyszig's *Advanced Engineering Mathematics* (10th ed., Chapter 13, Section 13.4) provides a similar derivation and the formula. Zill & Shanahan's *Complex Analysis* (3rd ed., Chapter 7, Section 7.1) also presents this fundamental formula.

**Example 1:** Find the residue of $f(z) = \frac{z^2 + 1}{z^2 - 1}$ at $z = 1$.

*   **Analysis:** We can rewrite $f(z)$ as $f(z) = \frac{z^2 + 1}{(z-1)(z+1)}$. The singularity at $z=1$ is a simple pole (pole of order $m=1$).
*   **Applying Formula 1 (with $m=1$):**
    Res$(f, 1) = \frac{1}{(1-1)!} \lim_{z \to 1} \frac{d^{1-1}}{dz^{1-1}} \left[ (z - 1)^1 \frac{z^2 + 1}{(z-1)(z+1)} \right]$
    Res$(f, 1) = \frac{1}{0!} \lim_{z \to 1} \left[ \frac{z^2 + 1}{z+1} \right]$
    Res$(f, 1) = 1 \cdot \frac{1^2 + 1}{1+1} = \frac{2}{2} = 1$.

**Example 2:** Find the residue of $f(z) = \frac{\cos z}{z^3}$ at $z = 0$.

*   **Analysis:** The singularity at $z=0$ is a pole of order $m=3$.
*   **Applying Formula 1 (with $m=3$):**
    Res$(f, 0) = \frac{1}{(3-1)!} \lim_{z \to 0} \frac{d^{3-1}}{dz^{3-1}} \left[ (z - 0)^3 \frac{\cos z}{z^3} \right]$
    Res$(f, 0) = \frac{1}{2!} \lim_{z \to 0} \frac{d^2}{dz^2} [\cos z]$
    Res$(f, 0) = \frac{1}{2} \lim_{z \to 0} (-\cos z)$
    Res$(f, 0) = \frac{1}{2} (-\cos 0) = \frac{1}{2} (-1) = -\frac{1}{2}$.

**Formula 2: Simplified Formula for a Simple Pole ($m=1$)**

If $z_0$ is a simple pole ($m=1$), then $f(z)$ can be written as:
$f(z) = \frac{g(z)}{h(z)}$
where $g(z_0) \neq 0$, $h(z_0) = 0$, and $h'(z_0) \neq 0$. In this case, $z_0$ is a simple zero of $h(z)$.

Res$(f, z_0) = \frac{g(z_0)}{h'(z_0)}$

*   **Derivation:** If $m=1$, Formula 1 becomes:
    Res$(f, z_0) = \frac{1}{(1-1)!} \lim_{z \to z_0} \frac{d^0}{dz^0} \left[ (z - z_0)^1 f(z) \right]$
    Res$(f, z_0) = \lim_{z \to z_0} (z - z_0) f(z)$
    If $f(z) = \frac{g(z)}{h(z)}$, then:
    Res$(f, z_0) = \lim_{z \to z_0} (z - z_0) \frac{g(z)}{h(z)}$
    Using L'Hopital's Rule for $\lim_{z \to z_0} \frac{(z - z_0)}{h(z)}$ (since it's of the form $\frac{0}{0}$), we get $\lim_{z \to z_0} \frac{1}{h'(z)} = \frac{1}{h'(z_0)}$.
    Thus, Res$(f, z_0) = g(z_0) \cdot \frac{1}{h'(z_0)} = \frac{g(z_0)}{h'(z_0)}$.

*   **Reference:** All the mentioned textbooks prominently feature this simplified formula for simple poles. It's a very commonly used shortcut.

**Example 3:** Find the residue of $f(z) = \frac{e^z}{z^2 + \pi^2}$ at $z = i\pi$.

*   **Analysis:** We can write $f(z) = \frac{e^z}{(z - i\pi)(z + i\pi)}$. The singularity at $z = i\pi$ is a simple pole.
    Here, $g(z) = e^z$ and $h(z) = z^2 + \pi^2$.
    $h'(z) = 2z$.
*   **Applying Formula 2:**
    $g(i\pi) = e^{i\pi} = -1$.
    $h'(i\pi) = 2(i\pi) = 2i\pi$.
    Res$(f, i\pi) = \frac{g(i\pi)}{h'(i\pi)} = \frac{-1}{2i\pi} = \frac{i}{2\pi}$.

**4.2. Pole at Infinity**

The residue at infinity for a function $f(z)$ is defined as:
Res$(f, \infty) = -\frac{1}{2\pi i} \oint_C f(z) dz$, where $C$ is a large circle traversed clockwise.

Alternatively, and more practically, it can be calculated using a change of variable:

Res$(f, \infty) = $ Res$\left(-\frac{1}{w^2} f\left(\frac{1}{w}\right), 0\right)$

This means we substitute $z = 1/w$, calculate the residue of the transformed function at $w=0$, and then negate the result.

*   **Reference:** Kreyszig (10th ed., Section 13.4) and Zill & Shanahan (3rd ed., Section 7.3) discuss the residue at infinity.

**Example 4:** Find the residue of $f(z) = \frac{1}{z}$ at infinity.

*   **Analysis:** Let $z = 1/w$. Then $f(z) = 1/(1/w) = w$.
    The transformed function is $F(w) = w$. We need to find Res$(-\frac{1}{w^2} F(w), 0)$.
    $-\frac{1}{w^2} F(w) = -\frac{1}{w^2} (w) = -\frac{1}{w}$.
*   **Calculating the residue at $w=0$:** The function $-1/w$ has a simple pole at $w=0$.
    Res$(-\frac{1}{w}, 0) = \lim_{w \to 0} w \left(-\frac{1}{w}\right) = -1$.
*   **Final Result:** Res$(f, \infty) = -(-1) = 1$.

**5. Practice Questions and Exercises**

**Question 1:** Find the residue of $f(z) = \frac{z^3 e^{2z}}{(z-2)^3}$ at $z=2$.
**Question 2:** Find the residue of $f(z) = \frac{1}{z^2 \sin z}$ at $z=0$.
**Question 3:** Find the residue of $f(z) = \frac{z^2}{z^2+1}$ at $z=i$.
**Question 4:** Find the residue of $f(z) = \frac{z+1}{z^2(z-2)}$ at $z=0$.
**Question 5:** Find the residue at infinity for $f(z) = \frac{z}{z+1}$.

**Answers to Practice Questions:**

**Answer 1:**
*   **Analysis:** Pole of order $m=3$ at $z=2$.
*   **Formula:** Use Formula 1. Let $g(z) = z^3 e^{2z}$.
    Res$(f, 2) = \frac{1}{(3-1)!} \lim_{z \to 2} \frac{d^2}{dz^2} \left[ (z - 2)^3 \frac{z^3 e^{2z}}{(z-2)^3} \right]$
    Res$(f, 2) = \frac{1}{2} \lim_{z \to 2} \frac{d^2}{dz^2} [z^3 e^{2z}]$
    Let $u = z^3 e^{2z}$.
    $u' = 3z^2 e^{2z} + z^3 (2e^{2z}) = e^{2z}(3z^2 + 2z^3)$
    $u'' = 2e^{2z}(3z^2 + 2z^3) + e^{2z}(6z + 6z^2)$
    $u'' = e^{2z}(6z^2 + 4z^3 + 6z + 6z^2) = e^{2z}(4z^3 + 12z^2 + 6z)$
    At $z=2$:
    $u''(2) = e^{4}(4(2)^3 + 12(2)^2 + 6(2)) = e^{4}(32 + 48 + 12) = e^{4}(92)$
    Res$(f, 2) = \frac{1}{2} (92 e^4) = 46e^4$.

**Answer 2:**
*   **Analysis:** The singularity at $z=0$ is not a simple pole or a pole of finite order in the usual sense. We need to consider the Laurent series of $\sin z$ around $z=0$.
    $\sin z = z - \frac{z^3}{3!} + \frac{z^5}{5!} - \dots$
    $f(z) = \frac{1}{z^2 \left( z - \frac{z^3}{6} + \dots \right)} = \frac{1}{z^3 \left( 1 - \frac{z^2}{6} + \dots \right)}$
    Using the binomial expansion $(1-x)^{-1} = 1 + x + x^2 + \dots$:
    $f(z) = z^{-3} \left( 1 + \frac{z^2}{6} + \dots \right) = z^{-3} + \frac{1}{6} z^{-1} + \dots$
    The coefficient of $z^{-1}$ is $1/6$.
*   **Residue:** Res$(f, 0) = \frac{1}{6}$.
    (Note: This is an essential example of how to handle singularities arising from trigonometric functions.)

**Answer 3:**
*   **Analysis:** $f(z) = \frac{z^2}{z^2+1} = \frac{z^2}{(z-i)(z+i)}$. Simple pole at $z=i$.
*   **Formula:** Use Formula 2 with $g(z) = z^2$ and $h(z) = z^2+1$. $h'(z) = 2z$.
    Res$(f, i) = \frac{g(i)}{h'(i)} = \frac{i^2}{2i} = \frac{-1}{2i} = \frac{i}{2}$.

**Answer 4:**
*   **Analysis:** $f(z) = \frac{z+1}{z^2(z-2)}$. The singularity at $z=0$ is a pole of order $m=2$.
*   **Formula:** Use Formula 1 with $m=2$. Let $g(z) = \frac{z+1}{z-2}$.
    Res$(f, 0) = \frac{1}{(2-1)!} \lim_{z \to 0} \frac{d}{dz} \left[ (z - 0)^2 \frac{z+1}{z^2(z-2)} \right]$
    Res$(f, 0) = 1 \cdot \lim_{z \to 0} \frac{d}{dz} \left[ \frac{z+1}{z-2} \right]$
    Using the quotient rule: $\frac{d}{dz} \left( \frac{u}{v} \right) = \frac{u'v - uv'}{v^2}$
    Here $u = z+1 \implies u' = 1$, and $v = z-2 \implies v' = 1$.
    $\frac{d}{dz} \left[ \frac{z+1}{z-2} \right] = \frac{1(z-2) - (z+1)(1)}{(z-2)^2} = \frac{z-2 - z-1}{(z-2)^2} = \frac{-3}{(z-2)^2}$
    Res$(f, 0) = \lim_{z \to 0} \frac{-3}{(z-2)^2} = \frac{-3}{(0-2)^2} = \frac{-3}{4}$.

**Answer 5:**
*   **Analysis:** For $f(z) = \frac{z}{z+1}$. Let $z = 1/w$.
    $f(1/w) = \frac{1/w}{1/w + 1} = \frac{1/w}{(1+w)/w} = \frac{1}{1+w}$.
    We need to find Res$\left(-\frac{1}{w^2} f\left(\frac{1}{w}\right), 0\right)$.
    $-\frac{1}{w^2} f\left(\frac{1}{w}\right) = -\frac{1}{w^2} \left(\frac{1}{1+w}\right) = -\frac{1}{w^2(1+w)}$.
*   **Calculating the residue at $w=0$:** This is a pole of order $m=2$ at $w=0$.
    Let $G(w) = -\frac{1}{1+w}$.
    Res$(-\frac{1}{w^2(1+w)}, 0) = \frac{1}{(2-1)!} \lim_{w \to 0} \frac{d}{dw} \left[ w^2 \left(-\frac{1}{w^2(1+w)}\right) \right]$
    Res$(-\frac{1}{w^2(1+w)}, 0) = \lim_{w \to 0} \frac{d}{dw} \left[-\frac{1}{1+w}\right]$
    $\frac{d}{dw} [-(1+w)^{-1}] = -(-1)(1+w)^{-2}(1) = (1+w)^{-2} = \frac{1}{(1+w)^2}$.
    $\lim_{w \to 0} \frac{1}{(1+w)^2} = \frac{1}{(1+0)^2} = 1$.
*   **Final Result:** Res$(f, \infty) = -(1) = -1$.

**6. Important Points to Remember**

*   **Type of Singularity:** The first step in finding a residue is always to identify the type of isolated singularity (removable singularity, simple pole, pole of order $m$, essential singularity). The formulas for residues are specific to poles. For removable singularities, the residue is always zero. For essential singularities, one must find the Laurent series.
*   **Formula 1 vs. Formula 2:** Formula 2 (for simple poles) is a significant shortcut. Always check if the pole is simple before applying the more general Formula 1.
*   **Derivatives:** Be careful with the order of derivatives in Formula 1. The order is $m-1$.
*   **Factorials:** Remember the $(m-1)!$ in Formula 1. For a simple pole ($m=1$), $(1-1)! = 0! = 1$.
*   **Limit Evaluation:** When using the limit formulas, ensure correct evaluation of limits, especially when derivatives are involved.
*   **Residue at Infinity:** The definition and calculation method for the residue at infinity are distinct and require a specific transformation.

**7. Alignment with Course Outcomes**

*   **CO4: Understand the series expansion of complex function about a singularity and apply residue theorem to compute real integrals.** This topic directly contributes by providing the computational tools (residue formulas) needed to find the coefficient $a_{-1}$ in the Laurent series, which is the residue. This coefficient is central to the Residue Theorem for evaluating integrals. The knowledge gained here is foundational for the application part of CO4.
*   **CO3: Compute complex integrals using Cauchy's integral theorem and Cauchy's integral formula.** While this topic doesn't directly compute integrals, understanding residues is a crucial stepping stone for more advanced integration techniques that extend the power of Cauchy's formulas, particularly when dealing with functions that have poles within the contour of integration.

**8. Conclusion**

The ability to accurately calculate residues is a cornerstone of complex analysis, with direct applications in evaluating complex contour integrals and subsequently, many real definite integrals that arise in various branches of science and engineering. Mastering these formulas will empower you to tackle problems that are often intractable by other means. The provided formulas are efficient and systematic methods for determining the residue of a function at its poles.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
