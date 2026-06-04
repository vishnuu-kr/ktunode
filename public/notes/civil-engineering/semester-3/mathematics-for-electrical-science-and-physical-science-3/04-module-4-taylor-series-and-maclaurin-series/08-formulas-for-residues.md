---
title: "Formulas for Residues"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 4: Taylor series and Maclaurin series"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba8106ac"
status: "completed"
scrapedAt: "2026-05-20T18:41:36.146Z"
---
# Mathematics for Electrical Science and Physical Science – 3

## Module 4: Taylor Series and Maclaurin Series

### Topic: Formulas for Residues

---

### Introduction to Residues

In the study of complex analysis, the **residue** of a complex function at an isolated singularity is a fundamental concept. It plays a crucial role in evaluating contour integrals, which have wide applications in various fields, including electrical engineering (e.g., circuit analysis, signal processing) and physical science (e.g., quantum mechanics, fluid dynamics).

While this module focuses on Taylor and Maclaurin series (which deal with analytic functions or functions with removable singularities), the concept of residues arises when dealing with functions that have **poles** or **essential singularities**. These singularities represent points where a function "blows up" or behaves in a complex manner, and the residue quantifies the strength of this singularity.

**Key Concept:** The residue is the coefficient of the $(z-z_0)^{-1}$ term in the Laurent series expansion of a function $f(z)$ around an isolated singularity $z_0$.

**Important Note:** The formulas for residues are typically introduced in the context of **Laurent series**, which is a generalization of Taylor series that allows for negative powers of $(z-z_0)$. Taylor series only involve non-negative powers. However, understanding Taylor/Maclaurin series is a prerequisite for understanding the behavior of functions around their singularities.

---

### Isolated Singularities

Before discussing residues, it's essential to understand the types of isolated singularities:

*   **Removable Singularity:** A singularity $z_0$ is removable if the limit $\lim_{z \to z_0} f(z)$ exists and is finite. In the Laurent series, there are no terms with negative powers of $(z-z_0)$.
*   **Pole:** A singularity $z_0$ is a pole of order $m$ if $\lim_{z \to z_0} (z-z_0)^m f(z)$ exists and is non-zero. In the Laurent series, the highest negative power of $(z-z_0)$ is $-(z-z_0)^{-m}$.
*   **Essential Singularity:** A singularity $z_0$ is essential if it is neither removable nor a pole. In the Laurent series, there are infinitely many terms with negative powers of $(z-z_0)$.

---

### The Residue Theorem

The **Residue Theorem** states that if $f(z)$ is analytic inside and on a simple closed contour $C$, except for a finite number of isolated singularities $z_1, z_2, \dots, z_n$ inside $C$, then:

$$ \oint_C f(z) \, dz = 2\pi i \sum_{k=1}^n \text{Res}(f, z_k) $$

where $\text{Res}(f, z_k)$ is the residue of $f(z)$ at $z_k$.

---

### Formulas for Calculating Residues

The primary goal of this topic is to provide practical methods for finding residues without explicitly computing the Laurent series.

#### 1. Residue at a Simple Pole

If $z_0$ is a **simple pole** (a pole of order 1) of $f(z)$, then the residue can be calculated using one of the following formulas:

*   **Formula 1 (Limit Form):**
    $$ \text{Res}(f, z_0) = \lim_{z \to z_0} (z - z_0) f(z) $$
    This formula directly extracts the coefficient of the $(z-z_0)^{-1}$ term.

*   **Formula 2 (If $f(z) = \frac{P(z)}{Q(z)}$ and $z_0$ is a simple root of $Q(z)$):**
    If $f(z)$ can be expressed as the ratio of two analytic functions $P(z)$ and $Q(z)$, where $P(z_0) \neq 0$ and $Q(z_0) = 0$, and $Q'(z_0) \neq 0$ (meaning $z_0$ is a simple root of $Q(z)$), then:
    $$ \text{Res}(f, z_0) = \frac{P(z_0)}{Q'(z_0)} $$
    This is a very efficient formula when applicable.

#### 2. Residue at a Pole of Order $m$

If $z_0$ is a **pole of order $m$** of $f(z)$, the residue is given by:

$$ \text{Res}(f, z_0) = \frac{1}{(m-1)!} \lim_{z \to z_0} \frac{d^{m-1}}{dz^{m-1}} \left[ (z - z_0)^m f(z) \right] $$

*   **Explanation:** This formula essentially "removes" the $(z-z_0)^{-m}$ part by multiplying by $(z-z_0)^m$, then differentiates the result $m-1$ times to shift the power of $(z-z_0)$ from $(m-1)$ to 0, making it an analytic function. Taking the limit then evaluates this at $z_0$. The division by $(m-1)!$ accounts for the combinatorial factor in the Taylor expansion of the differentiated term.

#### 3. Residue at an Essential Singularity

There is no simple general formula for the residue at an essential singularity. It typically requires finding at least the first few terms of the Laurent series expansion around $z_0$ to identify the coefficient of $(z-z_0)^{-1}$.

---

### Examples

**Example 1: Simple Pole**

Find the residue of $f(z) = \frac{e^z}{z(z-2)}$ at $z=0$.

*   The singularities are at $z=0$ and $z=2$. Both are simple poles.
*   Consider $z_0 = 0$. This is a simple pole.
*   Using Formula 1:
    $$ \text{Res}(f, 0) = \lim_{z \to 0} (z - 0) f(z) = \lim_{z \to 0} z \cdot \frac{e^z}{z(z-2)} = \lim_{z \to 0} \frac{e^z}{z-2} = \frac{e^0}{0-2} = \frac{1}{-2} = -\frac{1}{2} $$
*   Using Formula 2: Let $P(z) = e^z$ and $Q(z) = z(z-2) = z^2 - 2z$.
    *   $P(0) = e^0 = 1$.
    *   $Q'(z) = 2z - 2$.
    *   $Q'(0) = 2(0) - 2 = -2$.
    $$ \text{Res}(f, 0) = \frac{P(0)}{Q'(0)} = \frac{1}{-2} = -\frac{1}{2} $$

**Example 2: Pole of Order 2**

Find the residue of $f(z) = \frac{\cos z}{z^3}$ at $z=0$.

*   $z=0$ is a pole of order 3. So $m=3$.
*   Using the formula for a pole of order $m$:
    $$ \text{Res}(f, 0) = \frac{1}{(3-1)!} \lim_{z \to 0} \frac{d^{3-1}}{dz^{3-1}} \left[ (z - 0)^3 f(z) \right] $$
    $$ \text{Res}(f, 0) = \frac{1}{2!} \lim_{z \to 0} \frac{d^2}{dz^2} \left[ z^3 \cdot \frac{\cos z}{z^3} \right] $$
    $$ \text{Res}(f, 0) = \frac{1}{2} \lim_{z \to 0} \frac{d^2}{dz^2} (\cos z) $$
    *   First derivative of $\cos z$ is $-\sin z$.
    *   Second derivative of $\cos z$ is $-\cos z$.
    $$ \text{Res}(f, 0) = \frac{1}{2} \lim_{z \to 0} (-\cos z) = \frac{1}{2} (-\cos 0) = \frac{1}{2} (-1) = -\frac{1}{2} $$

**Example 3: Pole of Order $m$ (General Case)**

Find the residue of $f(z) = \frac{1}{(z-1)^2 (z-3)}$ at $z=1$.

*   $z=1$ is a pole of order $m=2$.
*   Using the formula for a pole of order $m$:
    $$ \text{Res}(f, 1) = \frac{1}{(2-1)!} \lim_{z \to 1} \frac{d^{2-1}}{dz^{2-1}} \left[ (z - 1)^2 f(z) \right] $$
    $$ \text{Res}(f, 1) = \frac{1}{1!} \lim_{z \to 1} \frac{d}{dz} \left[ (z - 1)^2 \cdot \frac{1}{(z-1)^2 (z-3)} \right] $$
    $$ \text{Res}(f, 1) = \lim_{z \to 1} \frac{d}{dz} \left[ \frac{1}{z-3} \right] $$
    *   The derivative of $\frac{1}{z-3} = (z-3)^{-1}$ is $-(z-3)^{-2} \cdot 1 = -\frac{1}{(z-3)^2}$.
    $$ \text{Res}(f, 1) = \lim_{z \to 1} \left( -\frac{1}{(z-3)^2} \right) = -\frac{1}{(1-3)^2} = -\frac{1}{(-2)^2} = -\frac{1}{4} $$

**Example 4: Essential Singularity**

Find the residue of $f(z) = e^{1/z}$ at $z=0$.

*   $z=0$ is an essential singularity.
*   We need to find the Laurent series expansion of $e^w$ around $w=0$, which is $e^w = \sum_{n=0}^{\infty} \frac{w^n}{n!} = 1 + w + \frac{w^2}{2!} + \frac{w^3}{3!} + \dots$.
*   Substitute $w = 1/z$:
    $$ f(z) = e^{1/z} = 1 + \frac{1}{z} + \frac{1}{2!z^2} + \frac{1}{3!z^3} + \dots $$
*   The coefficient of the $(z-0)^{-1} = z^{-1}$ term is $1$.
*   Therefore, $\text{Res}(f, 0) = 1$.

---

### Learning Outcomes Covered

By the end of this topic, you should be able to:

1.  **Identify isolated singularities of complex functions.** (Covered in the introduction and examples)
2.  **State and apply formulas for calculating residues at simple poles.** (Covered in Section 3.1 and Example 1)
3.  **State and apply formulas for calculating residues at poles of finite order.** (Covered in Section 3.2 and Examples 2 & 3)
4.  **Understand the relationship between Taylor series, Laurent series, and residues.** (Implicitly covered; Taylor series are for analytic functions, Laurent series extend this to singularities, and residues are coefficients in the negative power terms of Laurent series).
5.  **Recognize that specific methods (like Laurent series expansion) are needed for essential singularities.** (Covered in Section 3.3 and Example 4)

---

### Important Points to Remember

*   **Residues are coefficients of the $(z-z_0)^{-1}$ term in the Laurent series.**
*   **Simple poles have convenient limit-based formulas for residues.**
*   **Poles of order $m$ require differentiation and limits.**
*   **Essential singularities often require direct Laurent series expansion.**
*   **The residue theorem is the primary application for calculating contour integrals.**
*   **Be careful with the order of the pole ($m$) and the factorial $(m-1)!$ in the general formula.**

---

### Practice Questions

1.  Find the residue of $f(z) = \frac{z+1}{z^2 - 4}$ at $z=2$.
2.  Find the residue of $g(z) = \frac{e^{-z}}{z}$ at $z=0$.
3.  Find the residue of $h(z) = \frac{\sin z}{z^2}$ at $z=0$.
4.  Find the residue of $k(z) = \frac{1}{(z-i)^3}$ at $z=i$.
5.  Find the residue of $m(z) = z^2 \sin(1/z)$ at $z=0$.

---

### Answers to Practice Questions

1.  **For $f(z) = \frac{z+1}{z^2 - 4}$ at $z=2$:**
    *   $z=2$ is a simple pole.
    *   $P(z) = z+1$, $Q(z) = z^2-4$.
    *   $P(2) = 2+1 = 3$.
    *   $Q'(z) = 2z$. $Q'(2) = 2(2) = 4$.
    *   $\text{Res}(f, 2) = \frac{P(2)}{Q'(2)} = \frac{3}{4}$.

2.  **For $g(z) = \frac{e^{-z}}{z}$ at $z=0$:**
    *   $z=0$ is a simple pole.
    *   $\text{Res}(g, 0) = \lim_{z \to 0} z \cdot \frac{e^{-z}}{z} = \lim_{z \to 0} e^{-z} = e^0 = 1$.

3.  **For $h(z) = \frac{\sin z}{z^2}$ at $z=0$:**
    *   $z=0$ is a pole of order 2 ($m=2$).
    *   $\text{Res}(h, 0) = \frac{1}{(2-1)!} \lim_{z \to 0} \frac{d}{dz} \left[ z^2 \cdot \frac{\sin z}{z^2} \right]$
    *   $\text{Res}(h, 0) = \lim_{z \to 0} \frac{d}{dz} (\sin z) = \lim_{z \to 0} (\cos z) = \cos 0 = 1$.
    *   Alternatively, using Taylor series: $\sin z = z - \frac{z^3}{3!} + \dots$.
    *   $h(z) = \frac{z - z^3/3! + \dots}{z^2} = \frac{1}{z} - \frac{z}{3!} + \dots$.
    *   The coefficient of $1/z$ is 1.

4.  **For $k(z) = \frac{1}{(z-i)^3}$ at $z=i$:**
    *   $z=i$ is a pole of order 3 ($m=3$).
    *   $\text{Res}(k, i) = \frac{1}{(3-1)!} \lim_{z \to i} \frac{d^2}{dz^2} \left[ (z-i)^3 \cdot \frac{1}{(z-i)^3} \right]$
    *   $\text{Res}(k, i) = \frac{1}{2!} \lim_{z \to i} \frac{d^2}{dz^2} (1) = \frac{1}{2} \lim_{z \to i} (0) = 0$.

5.  **For $m(z) = z^2 \sin(1/z)$ at $z=0$:**
    *   $z=0$ is an essential singularity.
    *   Laurent series for $\sin w = w - \frac{w^3}{3!} + \frac{w^5}{5!} - \dots$.
    *   Substitute $w = 1/z$: $\sin(1/z) = \frac{1}{z} - \frac{1}{6z^3} + \frac{1}{120z^5} - \dots$.
    *   $m(z) = z^2 \left( \frac{1}{z} - \frac{1}{6z^3} + \frac{1}{120z^5} - \dots \right) = z - \frac{1}{6z} + \frac{1}{120z^3} - \dots$.
    *   The coefficient of $1/z$ is $-1/6$.
    *   $\text{Res}(m, 0) = -1/6$.
