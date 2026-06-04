---
title: "Singularities and Zeros – Isolated Singularity"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 4: Taylor series and Maclaurin series"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462cb5"
status: "completed"
scrapedAt: "2026-05-20T17:50:53.564Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3
## Module 4: Taylor Series and Maclaurin Series
### Topic: Singularities and Zeros – Isolated Singularity

---

### **Learning Outcomes:**

*   **LO1:** Classify the singularities of a complex function.
*   **LO2:** Determine the Laurent series expansion of a complex function around an isolated singularity.
*   **LO3:** Compute the residue of a complex function at an isolated singularity.
*   **LO4:** Understand the relationship between zeros and poles of a complex function.

---

### **1. Introduction to Singularities**

In complex analysis, a **singularity** of a complex function $f(z)$ is a point $z_0$ at which the function is not analytic (i.e., not differentiable in a neighborhood of $z_0$). We are primarily interested in **isolated singularities**.

---

### **2. Isolated Singularities**

An isolated singularity of a complex function $f(z)$ is a point $z_0$ such that:
1.  $f(z)$ is not analytic at $z_0$.
2.  There exists a deleted neighborhood of $z_0$ (i.e., a neighborhood excluding $z_0$ itself) where $f(z)$ is analytic.

**Key Concept:** If a function is not analytic at $z_0$, but is analytic in a punctured disk $0 < |z - z_0| < R$ for some $R > 0$, then $z_0$ is an isolated singularity.

---

### **3. Classification of Isolated Singularities**

The nature of an isolated singularity $z_0$ can be determined by examining the behavior of the function $f(z)$ in its vicinity, particularly through its Laurent series expansion around $z_0$.

**Laurent Series Expansion:**
A function $f(z)$ analytic in an annulus $A = \{z \in \mathbb{C} : r < |z - z_0| < R\}$, where $0 \le r < R \le \infty$, can be represented by its Laurent series:

$f(z) = \sum_{n=-\infty}^{\infty} c_n (z - z_0)^n = \sum_{n=0}^{\infty} a_n (z - z_0)^n + \sum_{n=1}^{\infty} b_n (z - z_0)^{-n}$

where $a_n$ terms form the **analytic part** and $b_n$ terms (with negative powers of $(z-z_0)$) form the **principal part**.

The coefficients $c_n$ are given by:
$c_n = \frac{1}{2\pi i} \oint_C \frac{f(\zeta)}{(\zeta - z_0)^{n+1}} d\zeta$
where $C$ is any simple closed contour in the annulus enclosing $z_0$.

**Kreyszig, 10th ed., Chapter 12: Complex Integration, Section 12.4: Laurent Series:** Discusses the existence and uniqueness of the Laurent series expansion of a function analytic in an annulus.

**Zill & Shanahan, 3rd ed., Chapter 6: Series, Section 6.3: Laurent's Series:** Provides a detailed explanation of Laurent series, including the formulas for coefficients and examples of expansions.

**Based on the principal part of the Laurent series, isolated singularities are classified into three types:**

**3.1. Removable Singularity:**
*   **Definition:** A singularity $z_0$ is removable if the principal part of the Laurent series expansion of $f(z)$ around $z_0$ contains no terms (i.e., all $b_n = 0$ for $n \ge 1$).
*   **Laurent Series Form:** $f(z) = \sum_{n=0}^{\infty} a_n (z - z_0)^n$ for $0 < |z - z_0| < R$.
*   **Conditions for a Removable Singularity:**
    *   $\lim_{z \to z_0} f(z)$ exists and is finite.
    *   $f(z)$ can be made analytic at $z_0$ by defining $f(z_0)$ to be this limit.
*   **Example:**
    Let $f(z) = \frac{\sin z}{z}$. The singularity is at $z_0 = 0$.
    The Taylor series of $\sin z$ around $z=0$ is $\sin z = z - \frac{z^3}{3!} + \frac{z^5}{5!} - \dots$.
    So, $f(z) = \frac{1}{z} \left( z - \frac{z^3}{3!} + \frac{z^5}{5!} - \dots \right) = 1 - \frac{z^2}{3!} + \frac{z^4}{5!} - \dots$.
    This is a power series in $z$, with no negative powers of $z$. Thus, $z_0 = 0$ is a removable singularity.
    $\lim_{z \to 0} \frac{\sin z}{z} = 1$. If we define $f(0) = 1$, the function becomes analytic at $z=0$.

**3.2. Pole:**
*   **Definition:** A singularity $z_0$ is a pole if the principal part of the Laurent series expansion of $f(z)$ around $z_0$ contains a *finite* number of terms.
*   **Laurent Series Form:** $f(z) = \sum_{n=1}^{m} b_n (z - z_0)^{-n} + \sum_{n=0}^{\infty} a_n (z - z_0)^n$ for $0 < |z - z_0| < R$, where $b_m \neq 0$.
*   **Order of a Pole:** The pole $z_0$ is said to be of **order $m$** if $b_m$ is the last non-zero coefficient in the principal part.
*   **Conditions for a Pole of Order $m$:**
    *   $\lim_{z \to z_0} (z - z_0)^m f(z) = L$, where $L$ is a finite non-zero complex number.
    *   Alternatively, $f(z)$ can be written as $f(z) = \frac{g(z)}{(z - z_0)^m}$, where $g(z)$ is analytic at $z_0$ and $g(z_0) \neq 0$.
*   **Simple Pole:** A pole of order 1.
*   **Example:**
    Let $f(z) = \frac{1}{z^3(z-1)^2}$. The singularities are at $z_0 = 0$ and $z_1 = 1$.
    *   **At $z_0 = 0$:** $f(z) = \frac{1}{z^3} \cdot \frac{1}{(z-1)^2}$. The term $\frac{1}{(z-1)^2}$ is analytic at $z=0$ and has a non-zero value ($1$ at $z=0$). Since the term $z^{-3}$ is present, $z_0=0$ is a pole of order 3.
    *   **At $z_1 = 1$:** $f(z) = \frac{1}{(z-1)^2} \cdot \frac{1}{z^3}$. The term $\frac{1}{z^3}$ is analytic at $z=1$ and has a non-zero value ($1$ at $z=1$). Since the term $(z-1)^{-2}$ is present, $z_1=1$ is a pole of order 2.

**3.3. Essential Singularity:**
*   **Definition:** A singularity $z_0$ is essential if the principal part of the Laurent series expansion of $f(z)$ around $z_0$ contains an *infinite* number of terms.
*   **Laurent Series Form:** $f(z) = \sum_{n=1}^{\infty} b_n (z - z_0)^{-n} + \sum_{n=0}^{\infty} a_n (z - z_0)^n$ for $0 < |z - z_0| < R$, where infinitely many $b_n$ are non-zero.
*   **Casorati-Weierstrass Theorem:** In any arbitrarily small neighborhood of an essential singularity $z_0$, the function $f(z)$ takes on every complex value, with at most one exception.
*   **Picard's Great Theorem (Stronger Result):** In any arbitrarily small neighborhood of an essential singularity $z_0$, the function $f(z)$ takes on every complex value with at most one exception, infinitely often.
*   **Example:**
    Let $f(z) = e^{1/z}$. The singularity is at $z_0 = 0$.
    The Taylor series of $e^w$ around $w=0$ is $e^w = 1 + w + \frac{w^2}{2!} + \frac{w^3}{3!} + \dots$.
    Substitute $w = 1/z$:
    $f(z) = e^{1/z} = 1 + \frac{1}{z} + \frac{1}{2!z^2} + \frac{1}{3!z^3} + \dots = \sum_{n=0}^{\infty} \frac{1}{n! z^n}$.
    This series has infinitely many terms with negative powers of $z$ (all coefficients $b_n = \frac{1}{n!}$ are non-zero). Thus, $z_0 = 0$ is an essential singularity.

---

### **4. Zeros of a Complex Function**

*   **Definition:** A point $z_0$ is a **zero** of a complex function $f(z)$ if $f(z_0) = 0$.
*   **Order of a Zero:** If $f(z_0) = 0$ and $f'(z_0) = 0, \dots, f^{(k-1)}(z_0) = 0$, but $f^{(k)}(z_0) \neq 0$, then $z_0$ is a zero of order $k$.
*   **Taylor Series for Zeros:** If $z_0$ is a zero of order $k$, then the Taylor series of $f(z)$ around $z_0$ starts with the term $(z - z_0)^k$:
    $f(z) = c_k (z - z_0)^k + c_{k+1} (z - z_0)^{k+1} + \dots = (z - z_0)^k \left( c_k + c_{k+1} (z - z_0) + \dots \right)$
    where $c_k = \frac{f^{(k)}(z_0)}{k!} \neq 0$.
    The term in the parenthesis is analytic at $z_0$ and non-zero.

---

### **5. Relationship Between Zeros and Poles**

**Consider a function $f(z)$ and its reciprocal $1/f(z)$.**

*   **Zeros of $f(z)$ and Poles of $1/f(z)$:**
    If $z_0$ is a zero of order $k$ for $f(z)$, then $f(z) = (z-z_0)^k g(z)$ where $g(z_0) \neq 0$ and $g(z)$ is analytic at $z_0$.
    Then $\frac{1}{f(z)} = \frac{1}{(z-z_0)^k g(z)} = \frac{1}{(z-z_0)^k} \cdot \frac{1}{g(z)}$.
    Since $g(z_0) \neq 0$, $\frac{1}{g(z_0)} \neq 0$, so $z_0$ is a pole of order $k$ for $\frac{1}{f(z)}$.

*   **Poles of $f(z)$ and Zeros of $1/f(z)$:**
    If $z_0$ is a pole of order $m$ for $f(z)$, then $f(z) = \frac{h(z)}{(z-z_0)^m}$ where $h(z_0) \neq 0$ and $h(z)$ is analytic at $z_0$.
    Then $\frac{1}{f(z)} = \frac{(z-z_0)^m}{h(z)} = (z-z_0)^m \cdot \frac{1}{h(z)}$.
    Since $h(z_0) \neq 0$, $\frac{1}{h(z_0)} \neq 0$, so $z_0$ is a zero of order $m$ for $\frac{1}{f(z)}$.

**Grewal, 44th ed., Chapter 15: Complex Integration, Section 15.8: Zeros and Poles:** This section likely covers the relationship between zeros and poles and their orders.

---

### **6. Computing the Residue at an Isolated Singularity**

*   **Definition:** The **residue** of a function $f(z)$ at an isolated singularity $z_0$, denoted as $\text{Res}(f, z_0)$, is the coefficient $b_1$ of the term $(z - z_0)^{-1}$ in its Laurent series expansion around $z_0$.
    $f(z) = \dots + \frac{b_1}{z - z_0} + b_0 + b_1 (z - z_0) + \dots$
    $\text{Res}(f, z_0) = c_{-1}$

**Methods for Computing Residues:**

**6.1. Using the Laurent Series:**
If the Laurent series is known, the residue is simply the coefficient of $(z-z_0)^{-1}$.

**6.2. For a Simple Pole ($z_0$ is a pole of order 1):**
If $z_0$ is a simple pole, then $f(z) = \frac{b_1}{z - z_0} + a_0 + a_1 (z - z_0) + \dots$
Multiply by $(z - z_0)$:
$(z - z_0) f(z) = b_1 + a_0 (z - z_0) + a_1 (z - z_0)^2 + \dots$
Taking the limit as $z \to z_0$:
$\lim_{z \to z_0} (z - z_0) f(z) = b_1 = \text{Res}(f, z_0)$

**If $f(z)$ can be written as $\frac{P(z)}{Q(z)}$ where $P(z_0) \neq 0$, $Q(z_0) = 0$, and $Q'(z_0) \neq 0$ (i.e., $z_0$ is a simple zero of $Q(z)$):**
Then $f(z) = \frac{P(z)}{Q(z)}$. We can write $Q(z) = (z-z_0)Q'(z_0) + O((z-z_0)^2)$.
$f(z) = \frac{P(z)}{(z-z_0)Q'(z_0)(1 + \frac{Q''(z_0)}{2Q'(z_0)}(z-z_0) + \dots)}$
$f(z) = \frac{1}{z-z_0} \frac{P(z)}{Q'(z_0)} (1 + \dots)^{-1}$
The term $\frac{P(z)}{Q'(z_0)}$ is analytic at $z_0$. At $z=z_0$, it is $\frac{P(z_0)}{Q'(z_0)}$.
So, $f(z) \approx \frac{1}{z-z_0} \frac{P(z_0)}{Q'(z_0)}$.
This implies $z_0$ is a simple pole, and the residue is $\frac{P(z_0)}{Q'(z_0)}$.

**6.3. For a Pole of Order $m$ ($z_0$ is a pole of order $m$):**
If $z_0$ is a pole of order $m$, then $f(z) = \frac{b_{-m}}{(z-z_0)^m} + \dots + \frac{b_{-1}}{z - z_0} + b_0 + \dots$
Multiply by $(z - z_0)^m$:
$(z - z_0)^m f(z) = b_{-m} + b_{-m+1}(z-z_0) + \dots + b_{-1}(z-z_0)^{m-1} + b_0(z-z_0)^m + \dots$
Let $g(z) = (z - z_0)^m f(z)$. This $g(z)$ is analytic at $z_0$, and its Taylor series around $z_0$ is:
$g(z) = g(z_0) + g'(z_0)(z-z_0) + \frac{g''(z_0)}{2!}(z-z_0)^2 + \dots + \frac{g^{(m-1)}(z_0)}{(m-1)!}(z-z_0)^{m-1} + \dots$
By comparing the coefficients, we see that $b_{-1} = \frac{g^{(m-1)}(z_0)}{(m-1)!}$.
Therefore, $\text{Res}(f, z_0) = \frac{1}{(m-1)!} \left[ \frac{d^{m-1}}{dz^{m-1}} \left( (z - z_0)^m f(z) \right) \right]_{z=z_0}$.

**Kreyszig, 10th ed., Chapter 12: Complex Integration, Section 12.4: Laurent Series:** The formulas for the coefficients are derived here, which directly lead to the residue formula.
**Zill & Shanahan, 3rd ed., Chapter 7: Residues and Residue Theorems, Section 7.1: The Residue at a Point:** This section is dedicated to the definition and methods for computing residues, covering simple poles and poles of higher order.
**Ramana, 39th ed., Chapter 17: Complex Integration, Section 17.6: Residues:** Provides various methods for calculating residues, including the formula for poles of order $m$.
**Grewal, 44th ed., Chapter 15: Complex Integration, Section 15.8: Zeros and Poles:** May also contain residue calculation techniques.

**Important Point to Remember:** The residue at a removable singularity is always zero because there are no negative powers of $(z-z_0)$ in the Laurent series. The residue at an essential singularity cannot be computed using the derivative formula; one must rely on the Laurent series or other specific properties.

---

### **7. Examples**

**Example 1: Classify the singularity at $z_0 = 0$ for $f(z) = z \cos(1/z)$.**

*   **Laurent Series:**
    We know $\cos w = 1 - \frac{w^2}{2!} + \frac{w^4}{4!} - \dots$
    Let $w = 1/z$.
    $\cos(1/z) = 1 - \frac{1}{2!z^2} + \frac{1}{4!z^4} - \dots$
    $f(z) = z \cos(1/z) = z \left( 1 - \frac{1}{2!z^2} + \frac{1}{4!z^4} - \dots \right)$
    $f(z) = z - \frac{1}{2!z} + \frac{1}{4!z^3} - \dots$
*   **Classification:** The principal part ($-\frac{1}{2!z} + \frac{1}{4!z^3} - \dots$) has infinitely many terms. Thus, $z_0 = 0$ is an **essential singularity**.

**Example 2: Find the order of the pole and the residue of $f(z) = \frac{e^z}{z^2(z-1)}$ at $z_0 = 0$.**

*   **Analyze the denominator:** The denominator has factors $z^2$ and $(z-1)$. The term $z^2$ indicates a potential pole of order 2 at $z=0$. The term $(z-1)$ is non-zero at $z=0$.
*   **Check conditions for a pole of order $m=2$:**
    We need to evaluate $\lim_{z \to 0} z^2 f(z)$.
    $z^2 f(z) = z^2 \frac{e^z}{z^2(z-1)} = \frac{e^z}{z-1}$.
    $\lim_{z \to 0} \frac{e^z}{z-1} = \frac{e^0}{0-1} = \frac{1}{-1} = -1$.
    Since the limit is a finite non-zero number, $z_0 = 0$ is a **pole of order 2**.

*   **Compute the residue:** Using the formula for a pole of order $m=2$:
    $\text{Res}(f, 0) = \frac{1}{(2-1)!} \left[ \frac{d}{dz} (z^2 f(z)) \right]_{z=0}$
    $\text{Res}(f, 0) = \left[ \frac{d}{dz} \left( \frac{e^z}{z-1} \right) \right]_{z=0}$

    Let $g(z) = \frac{e^z}{z-1}$. We need to find $g'(z)$. Using the quotient rule:
    $g'(z) = \frac{e^z(z-1) - e^z(1)}{(z-1)^2} = \frac{ze^z - e^z - e^z}{(z-1)^2} = \frac{ze^z - 2e^z}{(z-1)^2}$.

    Now, evaluate $g'(0)$:
    $g'(0) = \frac{0 \cdot e^0 - 2e^0}{(0-1)^2} = \frac{0 - 2}{1} = -2$.

    Therefore, $\text{Res}(f, 0) = -2$.

**Example 3: Find the residue of $f(z) = \frac{\sin z}{z^3}$ at $z_0 = 0$.**

*   **Laurent Series:**
    $\sin z = z - \frac{z^3}{3!} + \frac{z^5}{5!} - \dots$
    $f(z) = \frac{1}{z^3} \left( z - \frac{z^3}{3!} + \frac{z^5}{5!} - \dots \right)$
    $f(z) = \frac{1}{z^2} - \frac{1}{3!} + \frac{z^2}{5!} - \dots$
*   **Classification:** The principal part is $\frac{1}{z^2}$. There is only one term with a negative power of $z$, and it's $(z-0)^{-2}$. Thus, $z_0 = 0$ is a **pole of order 2**.
*   **Residue:** The coefficient of $(z-0)^{-1}$ is $b_{-1} = 0$.
    Therefore, $\text{Res}(f, 0) = 0$.

    Alternatively, using the formula:
    $f(z) = \frac{\sin z}{z^3}$. $z_0=0$ is a pole of order 2.
    We need to compute $\frac{1}{(2-1)!} \left[ \frac{d}{dz} (z^2 f(z)) \right]_{z=0}$.
    $z^2 f(z) = z^2 \frac{\sin z}{z^3} = \frac{\sin z}{z}$.
    We know $\lim_{z \to 0} \frac{\sin z}{z} = 1$. This function $\frac{\sin z}{z}$ is analytic at $z=0$ and equals 1 at $z=0$.
    Let $g(z) = \frac{\sin z}{z}$.
    $g'(z) = \frac{z \cos z - \sin z}{z^2}$.
    We need to find the limit of $g'(z)$ as $z \to 0$. Using L'Hopital's rule twice for $g'(z)$:
    $\lim_{z \to 0} \frac{z \cos z - \sin z}{z^2} = \lim_{z \to 0} \frac{\cos z - z \sin z - \cos z}{2z} = \lim_{z \to 0} \frac{-z \sin z}{2z} = \lim_{z \to 0} \frac{-\sin z}{2} = 0$.
    So, the residue is $0$.

**Example 4: Find the residue of $f(z) = \frac{1}{z^2 - 1}$ at $z_0 = 1$.**

*   **Factorize the denominator:** $f(z) = \frac{1}{(z-1)(z+1)}$.
*   **Singularity:** $z_0 = 1$. The denominator has a simple root at $z=1$. The numerator is $1$, which is non-zero at $z=1$.
*   **Classification:** $z_0 = 1$ is a **simple pole**.
*   **Compute the residue:** Using the formula for a simple pole:
    $\text{Res}(f, 1) = \lim_{z \to 1} (z - 1) f(z)$
    $\text{Res}(f, 1) = \lim_{z \to 1} (z - 1) \frac{1}{(z-1)(z+1)}$
    $\text{Res}(f, 1) = \lim_{z \to 1} \frac{1}{z+1} = \frac{1}{1+1} = \frac{1}{2}$.

    Alternatively, using $P(z)/Q'(z)$:
    $P(z) = 1$, $Q(z) = z^2 - 1$.
    $Q'(z) = 2z$.
    $P(1) = 1$.
    $Q'(1) = 2(1) = 2$.
    $\text{Res}(f, 1) = \frac{P(1)}{Q'(1)} = \frac{1}{2}$.

---

### **8. Practice Questions**

1.  **Classify the singularity at $z=0$ for each of the following functions:**
    a) $f(z) = z^2 \sin(1/z)$
    b) $f(z) = \frac{\cos z}{z^3}$
    c) $f(z) = e^{1/(z^2)}$

2.  **Find the order of the pole and the residue at $z_0 = 2$ for the function:**
    $f(z) = \frac{z+1}{(z-2)^3(z+3)}$

3.  **Calculate the residue of the function $f(z) = \frac{z^2}{z^2+4}$ at the pole $z_0 = 2i$.**

4.  **Determine the nature of the singularity at $z=0$ for $f(z) = \frac{1}{z(e^z - 1)}$.**

5.  **If $f(z)$ has a zero of order $k$ at $z_0$, what is the order of the pole of $1/f(z)$ at $z_0$?**

---

### **9. Answers to Practice Questions**

1.  **Classification of singularities at $z=0$:**
    a) $f(z) = z^2 \sin(1/z) = z^2 (1/z - 1/(3!z^3) + 1/(5!z^5) - \dots) = z - 1/(3!z) + 1/(5!z^3) - \dots$.
       The principal part has infinitely many terms. **Essential singularity**.
    b) $f(z) = \frac{\cos z}{z^3} = \frac{1 - z^2/2! + z^4/4! - \dots}{z^3} = \frac{1}{z^3} - \frac{1}{2!z} + \frac{z}{4!} - \dots$.
       The principal part is $\frac{1}{z^3} - \frac{1}{2!z}$. It has a finite number of terms, with the highest negative power being $-3$. **Pole of order 3**.
    c) $f(z) = e^{1/z^2}$. Let $w = 1/z^2$. As $z \to 0$, $|w| \to \infty$.
       $e^w = 1 + w + w^2/2! + \dots$
       $f(z) = e^{1/z^2} = 1 + \frac{1}{z^2} + \frac{1}{2!z^4} + \frac{1}{3!z^6} + \dots$.
       The principal part has infinitely many terms. **Essential singularity**.

2.  **For $f(z) = \frac{z+1}{(z-2)^3(z+3)}$ at $z_0 = 2$:**
    The denominator has $(z-2)^3$, suggesting a pole of order 3.
    Let's check: $\lim_{z \to 2} (z-2)^3 f(z) = \lim_{z \to 2} \frac{z+1}{z+3} = \frac{2+1}{2+3} = \frac{3}{5}$.
    Since the limit is finite and non-zero, $z_0 = 2$ is a **pole of order 3**.
    To find the residue, we need the coefficient of $(z-2)^{-1}$ in the Laurent series of $f(z)$ around $z=2$.
    Let $g(z) = (z-2)^3 f(z) = \frac{z+1}{z+3}$.
    Residue = $\frac{1}{(3-1)!} \left[ \frac{d^2}{dz^2} g(z) \right]_{z=2}$.
    $g'(z) = \frac{1(z+3) - (z+1)(1)}{(z+3)^2} = \frac{z+3-z-1}{(z+3)^2} = \frac{2}{(z+3)^2} = 2(z+3)^{-2}$.
    $g''(z) = 2(-2)(z+3)^{-3}(1) = -4(z+3)^{-3} = \frac{-4}{(z+3)^3}$.
    Residue = $\frac{1}{2!} \left[ \frac{-4}{(z+3)^3} \right]_{z=2} = \frac{1}{2} \cdot \frac{-4}{(2+3)^3} = \frac{1}{2} \cdot \frac{-4}{5^3} = \frac{1}{2} \cdot \frac{-4}{125} = \frac{-2}{125}$.
    **Order of pole: 3, Residue: -2/125**.

3.  **Residue of $f(z) = \frac{z^2}{z^2+4}$ at $z_0 = 2i$:**
    $f(z) = \frac{z^2}{(z-2i)(z+2i)}$. $z_0 = 2i$ is a simple pole.
    Using the formula for a simple pole (or $P(z)/Q'(z)$):
    Let $P(z) = z^2$ and $Q(z) = z^2+4$. Then $Q'(z) = 2z$.
    Residue at $z_0 = 2i$: $\frac{P(2i)}{Q'(2i)} = \frac{(2i)^2}{2(2i)} = \frac{-4}{4i} = \frac{-1}{i} = i$.
    **Residue: $i$**.

4.  **Nature of the singularity at $z=0$ for $f(z) = \frac{1}{z(e^z - 1)}$:**
    The singularities are at $z=0$ and where $e^z - 1 = 0$, which means $e^z = 1$. This occurs for $z = 2n\pi i$ for $n \in \mathbb{Z}$. The relevant singularity is $z=0$.
    We need the Laurent series around $z=0$.
    $e^z = 1 + z + \frac{z^2}{2!} + \frac{z^3}{3!} + \dots$
    $e^z - 1 = z + \frac{z^2}{2!} + \frac{z^3}{3!} + \dots = z(1 + \frac{z}{2!} + \frac{z^2}{3!} + \dots)$
    $f(z) = \frac{1}{z \cdot z(1 + \frac{z}{2!} + \frac{z^2}{3!} + \dots)} = \frac{1}{z^2} \cdot \frac{1}{1 + (\frac{z}{2!} + \frac{z^2}{3!} + \dots)}$
    Let $u = \frac{z}{2!} + \frac{z^2}{3!} + \dots$.
    $\frac{1}{1+u} = 1 - u + u^2 - \dots$
    $f(z) = \frac{1}{z^2} \left( 1 - (\frac{z}{2!} + \frac{z^2}{3!} + \dots) + (\frac{z}{2!} + \dots)^2 - \dots \right)$
    $f(z) = \frac{1}{z^2} \left( 1 - \frac{z}{2} - \frac{z^2}{6} + \dots + \frac{z^2}{4} + \dots \right)$
    $f(z) = \frac{1}{z^2} - \frac{1}{2z} + (-\frac{1}{6} + \frac{1}{4})\frac{1}{1} + \dots$
    $f(z) = \frac{1}{z^2} - \frac{1}{2z} + \frac{1}{12} + \dots$
    The principal part is $\frac{1}{z^2} - \frac{1}{2z}$. It has a finite number of terms, with the highest negative power being $-2$. **Pole of order 2**.

5.  If $f(z)$ has a zero of order $k$ at $z_0$, then $f(z) = (z-z_0)^k g(z)$ where $g(z_0) \neq 0$.
    Then $\frac{1}{f(z)} = \frac{1}{(z-z_0)^k g(z)} = \frac{1}{(z-z_0)^k} \cdot \frac{1}{g(z)}$.
    Since $g(z_0) \neq 0$, $\frac{1}{g(z)}$ is analytic at $z_0$ and $\frac{1}{g(z_0)} \neq 0$.
    Therefore, $\frac{1}{f(z)}$ has a **pole of order $k$** at $z_0$.

---

### **10. Important Points to Remember**

*   Singularities are points where a function is not analytic. Isolated singularities are those surrounded by a region of analyticity.
*   The classification of isolated singularities (removable, pole, essential) depends on the behavior of the principal part of the Laurent series.
*   A removable singularity can be "removed" by redefining the function's value at that point to be the limit.
*   A pole of order $m$ means the principal part has terms up to $(z-z_0)^{-m}$, and $(z-z_0)^m f(z)$ approaches a finite non-zero value as $z \to z_0$.
*   An essential singularity has infinitely many terms in its principal part.
*   Zeros of $f(z)$ become poles of $1/f(z)$, and poles of $f(z)$ become zeros of $1/f(z)$, with the orders being preserved.
*   The residue is the coefficient of $(z-z_0)^{-1}$ in the Laurent series and is crucial for computing contour integrals.
*   Efficient methods exist for calculating residues at poles without explicitly finding the entire Laurent series.

---

### **11. Alignment with Course Outcomes**

*   **CO1: Determine the Fourier transforms of functions and apply them to solve problems arising in engineering.** (Not directly addressed in this topic, as Fourier transforms are typically covered in later modules. However, understanding function behavior via series expansions can be foundational.)
*   **CO2: Understand the analyticity of complex functions and apply it in conformal mapping.** (Understanding analyticity is fundamental. The classification of singularities delves into points where analyticity fails, which is a contrast to the core of analyticity required for conformal mapping.)
*   **CO3: Compute complex integrals using Cauchy's integral theorem and Cauchy's integral formula.** (The understanding of residues, directly from this topic, is the foundation for the Residue Theorem, which is a powerful method for computing complex integrals, especially those that cannot be solved by Cauchy's Integral Formula directly.)
*   **CO4: Understand the series expansion of complex function about a singularity and apply residue theorem to compute real integrals.** (This topic directly addresses the "series expansion of complex function about a singularity" through Laurent series. The classification of singularities and methods for computing residues are essential prerequisites for applying the residue theorem to compute integrals, both complex and real.)

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=fNk_zzaMoEs) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |


### **References:**

*   Kreyszig, Erwin. *Advanced Engineering Mathematics*. 10th ed. John Wiley & Sons, 2016. (Chapters on Complex Integration, Laurent Series)
*   Zill, Dennis G., and Patrick D. Shanahan. *Complex Analysis*. 3rd ed. Jones & Bartlett, 2015. (Chapters on Series, Residues)
*   Ramana, B. V. *Higher Engineering Mathematics*. 39th ed. McGraw-Hill Education, 2023. (Chapters on Complex Integration)
*   Grewal, B.S. *Higher Engineering Mathematics*. 44th ed. Khanna Publishers, 2018. (Chapters on Complex Integration)