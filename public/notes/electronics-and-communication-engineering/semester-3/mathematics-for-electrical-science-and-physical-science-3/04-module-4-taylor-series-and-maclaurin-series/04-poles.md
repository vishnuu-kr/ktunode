---
title: "Poles"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3"
module: "Module 4: Taylor series and Maclaurin series"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe273"
status: "completed"
scrapedAt: "2026-05-23T17:47:19.410Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 3

## Module 4: Taylor Series and Maclaurin Series

### Topic: Poles

---

### **Introduction**

This topic delves into the concept of poles, which are a specific type of singularity encountered when analyzing complex functions. Understanding poles is crucial for comprehending the behavior of functions near these points and for advanced techniques like residue calculus, which have significant applications in electrical engineering (e.g., circuit analysis, signal processing) and physical science (e.g., quantum mechanics, fluid dynamics). While Taylor and Maclaurin series provide representations of analytic functions, poles arise in the context of functions that are *not* analytic at certain points.

---

### **1. Singularities of Complex Functions**

Before defining poles, it's essential to understand what a singularity is. A singularity of a complex function $f(z)$ is a point $z_0$ at which $f(z)$ is not analytic.

**Key Concepts:**

*   **Analytic Function:** A function that is differentiable in an open disk.
*   **Isolated Singularity:** A point $z_0$ is an isolated singularity of $f(z)$ if $f(z)$ is analytic in a punctured disk $0 < |z - z_0| < R$ for some $R > 0$, but not analytic at $z_0$.

**Types of Isolated Singularities:**

The nature of an isolated singularity $z_0$ can be determined by examining the Laurent series expansion of $f(z)$ in a punctured disk around $z_0$.

**Laurent Series Expansion:**
If $f(z)$ is analytic in an annulus $r < |z - z_0| < R$, then $f(z)$ can be represented by the Laurent series:

$$f(z) = \sum_{n=-\infty}^{\infty} a_n (z - z_0)^n = \sum_{n=0}^{\infty} a_n (z - z_0)^n + \sum_{n=1}^{\infty} b_n (z - z_0)^{-n}$$

where $a_n$ and $b_n$ are complex coefficients. The second sum, $\sum_{n=1}^{\infty} b_n (z - z_0)^{-n}$, is called the principal part of the Laurent series.

**Kreyszig, 10th Ed., Chapter 13 (Complex Integration and Cauchy's Theory):** Kreyszig discusses singularities and their classification when introducing Laurent series. The coefficients are given by:
$a_n = \frac{1}{2\pi i} \oint_C \frac{f(\zeta)}{(\zeta - z_0)^{n+1}} d\zeta$, where $C$ is a circle within the annulus centered at $z_0$.

**Types based on the Principal Part:**

1.  **Removable Singularity:** If the principal part is zero (i.e., all $b_n = 0$), then $z_0$ is a removable singularity. The function can be made analytic at $z_0$ by defining $f(z_0)$ appropriately (usually $f(z_0) = \lim_{z \to z_0} f(z)$).
2.  **Pole:** If the principal part has a finite number of non-zero terms, then $z_0$ is a pole.
3.  **Essential Singularity:** If the principal part has an infinite number of non-zero terms, then $z_0$ is an essential singularity.

---

### **2. Definition and Classification of Poles**

A point $z_0$ is a **pole** of $f(z)$ if the principal part of its Laurent series expansion around $z_0$ contains a finite, non-zero number of terms. Specifically, if the term $(z-z_0)^{-m}$ with $m > 0$ is the lowest power of $(z-z_0)$ in the principal part that has a non-zero coefficient, then $z_0$ is a pole of **order m**.

**Formal Definition:**

A point $z_0$ is a pole of order $m$ ($m \ge 1$) of a function $f(z)$ if $f(z)$ can be written in the form:

$$f(z) = \frac{g(z)}{(z - z_0)^m}$$

where $g(z)$ is analytic at $z_0$ and $g(z_0) \neq 0$.

If $m=1$, it's a **simple pole**.

**Alternative Characterization of Poles:**

Let $z_0$ be an isolated singularity of $f(z)$.

*   $z_0$ is a **removable singularity** if $\lim_{z \to z_0} (z - z_0) f(z) = 0$.
*   $z_0$ is a **pole** if $\lim_{z \to z_0} (z - z_0) f(z) = L \neq 0$ (finite and non-zero). If this limit exists and is non-zero, $z_0$ is a simple pole.
*   $z_0$ is a **pole of order m** if $\lim_{z \to z_0} (z - z_0)^m f(z) = L \neq 0$ (finite and non-zero), and for all $k < m$, $\lim_{z \to z_0} (z - z_0)^k f(z) = 0$.
*   $z_0$ is an **essential singularity** if $\lim_{z \to z_0} (z - z_0)^k f(z)$ does not exist for any integer $k \ge 1$.

**Zill & Shanahan, 3rd Ed., Chapter 6 (Series and Residues):** This textbook provides a thorough treatment of isolated singularities, poles, and their orders. They emphasize the link between the Laurent series and the classification.

**B.S. Grewal, 44th Ed., Chapter 26 (Calculus of Variations) / Chapter 28 (Complex Integration) (Note:** Grewal might categorize complex analysis topics differently, but the underlying principles of singularities are covered. The chapter on complex integration is most relevant.) Grewal's focus is typically on real analysis and differential equations, but the concept of poles as singularities is universally applicable.

**Example 1: Simple Pole**

Consider $f(z) = \frac{1}{z - 2}$.
The singularity is at $z_0 = 2$.
Laurent series around $z_0 = 2$: $f(z) = (z - 2)^{-1}$.
The principal part has one term with a non-zero coefficient.
Here, $m=1$.
Check the limit: $\lim_{z \to 2} (z - 2) f(z) = \lim_{z \to 2} (z - 2) \frac{1}{z - 2} = 1 \neq 0$.
Thus, $z_0 = 2$ is a **simple pole**.

**Example 2: Pole of Order 2**

Consider $f(z) = \frac{\sin z}{z^3}$.
We know the Maclaurin series for $\sin z = z - \frac{z^3}{3!} + \frac{z^5}{5!} - \dots$
So, $f(z) = \frac{z - \frac{z^3}{3!} + \frac{z^5}{5!} - \dots}{z^3} = \frac{1}{z^2} - \frac{1}{3!} + \frac{z^2}{5!} - \dots$
The singularity is at $z_0 = 0$.
The principal part is $\frac{1}{z^2}$. The lowest power of $z$ in the principal part is $z^{-2}$, so $m=2$.
Check the limit: $\lim_{z \to 0} z^2 f(z) = \lim_{z \to 0} z^2 \frac{\sin z}{z^3} = \lim_{z \to 0} \frac{\sin z}{z} = 1 \neq 0$.
For $k=1$: $\lim_{z \to 0} z f(z) = \lim_{z \to 0} z \frac{\sin z}{z^3} = \lim_{z \to 0} \frac{\sin z}{z^2} = \lim_{z \to 0} \frac{1}{z} \left(\frac{\sin z}{z}\right) = \lim_{z \to 0} \frac{1}{z} (1) = \infty$.
Since the limit for $m=2$ is non-zero, $z_0 = 0$ is a **pole of order 2**.

**Example 3: Pole of Order 3**

Consider $f(z) = \frac{e^z}{(z - 1)^3}$.
The singularity is at $z_0 = 1$.
We can write $f(z) = \frac{g(z)}{(z-1)^3}$ where $g(z) = e^z$.
$g(z) = e^z$ is analytic at $z=1$ and $g(1) = e^1 = e \neq 0$.
Therefore, $z_0 = 1$ is a **pole of order 3**.

**Example 4: Essential Singularity (for contrast)**

Consider $f(z) = e^{1/z}$.
The singularity is at $z_0 = 0$.
The Maclaurin series for $e^u$ is $1 + u + \frac{u^2}{2!} + \frac{u^3}{3!} + \dots$.
Substitute $u = 1/z$:
$f(z) = e^{1/z} = 1 + \frac{1}{z} + \frac{1}{2!z^2} + \frac{1}{3!z^3} + \dots$
This is the Laurent series around $z_0 = 0$. The principal part has infinitely many non-zero terms ($b_n = \frac{1}{n!}$ for $n \ge 1$).
Thus, $z_0 = 0$ is an **essential singularity**.

---

### **3. Finding Poles and Their Orders**

**Methods to find poles and their orders:**

1.  **Laurent Series Expansion:** Compute the Laurent series of $f(z)$ around the singular point $z_0$. The highest power of $(z-z_0)^{-1}$ with a non-zero coefficient determines the order of the pole.
2.  **Limit Test:**
    *   If $\lim_{z \to z_0} f(z)$ is finite and non-zero, $z_0$ is a removable singularity.
    *   If $\lim_{z \to z_0} (z - z_0) f(z) = L \neq 0$, $z_0$ is a simple pole.
    *   To find the order $m$, test $\lim_{z \to z_0} (z - z_0)^k f(z)$ for $k=1, 2, 3, \dots$. The smallest integer $m$ for which this limit is finite and non-zero indicates that $z_0$ is a pole of order $m$.
3.  **Using the form $f(z) = \frac{g(z)}{(z-z_0)^m}$:** If $f(z)$ can be expressed as a ratio of two functions, where the denominator has a root of multiplicity $m$ at $z_0$, and the numerator is non-zero at $z_0$, then $z_0$ is a pole of order $m$.

**Ramana, 39th Ed., Chapter 25 (Complex Variables) / Chapter 26 (Complex Integration):** Ramana covers complex differentiation and integration, which includes the classification of singularities. He might present methods for finding poles and their orders within the context of integration techniques.

**Example 5: Finding Poles**

Consider $f(z) = \frac{z^2 + 1}{z(z-1)^2}$.
The potential singularities are at $z=0$ and $z=1$.

*   **At $z_0 = 0$:**
    Let $g(z) = \frac{z^2 + 1}{(z-1)^2}$. $g(z)$ is analytic at $z=0$.
    $g(0) = \frac{0^2 + 1}{(0-1)^2} = \frac{1}{1} = 1 \neq 0$.
    So, $f(z) = \frac{g(z)}{z^1}$. This means $z_0 = 0$ is a **simple pole**.
    Alternatively, $\lim_{z \to 0} z f(z) = \lim_{z \to 0} z \frac{z^2 + 1}{z(z-1)^2} = \lim_{z \to 0} \frac{z^2 + 1}{(z-1)^2} = \frac{1}{(-1)^2} = 1 \neq 0$. This confirms it's a simple pole.

*   **At $z_0 = 1$:**
    Let $h(z) = \frac{z^2 + 1}{z}$. $h(z)$ is analytic at $z=1$.
    $h(1) = \frac{1^2 + 1}{1} = 2 \neq 0$.
    So, $f(z) = \frac{h(z)}{(z-1)^2}$. This means $z_0 = 1$ is a **pole of order 2**.
    Alternatively, $\lim_{z \to 1} (z-1) f(z) = \lim_{z \to 1} (z-1) \frac{z^2 + 1}{z(z-1)^2} = \lim_{z \to 1} \frac{z^2 + 1}{z(z-1)} = \infty$.
    Now check for order 2: $\lim_{z \to 1} (z-1)^2 f(z) = \lim_{z \to 1} (z-1)^2 \frac{z^2 + 1}{z(z-1)^2} = \lim_{z \to 1} \frac{z^2 + 1}{z} = \frac{1^2 + 1}{1} = 2 \neq 0$. This confirms it's a pole of order 2.

---

### **4. Behavior of Functions Near Poles**

Near a pole $z_0$ of order $m$, the function $f(z)$ behaves like $\frac{C}{(z - z_0)^m}$ for some non-zero constant $C$. This means $|f(z)|$ becomes very large as $z \to z_0$.

**Important Point:** The presence of poles indicates points where the function "blows up" or is unbounded. This behavior is critical in understanding physical phenomena modeled by these functions.

**Relation to Taylor/Maclaurin Series:**
Taylor and Maclaurin series are representations of analytic functions. Poles are singularities where these series do not converge globally or even locally in a simple power series form. The Laurent series is the generalization that accommodates poles.

---

### **5. Poles and the Cauchy Integral Formula / Residue Theorem (Connection to CO4)**

Poles are fundamental to the Cauchy Integral Formula and the Residue Theorem, which are used to evaluate complex contour integrals and, consequently, real integrals.

**Cauchy's Integral Formula for Derivatives:**
If $f(z)$ is analytic inside and on a simple closed contour $C$, and $z_0$ is any point inside $C$, then:
$$f^{(n)}(z_0) = \frac{n!}{2\pi i} \oint_C \frac{f(z)}{(z - z_0)^{n+1}} d z$$

This formula is used for functions that are analytic at $z_0$.

**Residue Theorem:**
If $f(z)$ is analytic inside and on a simple closed contour $C$, except for a finite number of isolated singularities $z_1, z_2, \dots, z_k$ inside $C$, then:
$$\oint_C f(z) d z = 2\pi i \sum_{j=1}^k \text{Res}(f, z_j)$$

where $\text{Res}(f, z_j)$ is the **residue** of $f(z)$ at $z_j$.

**Residue at a Pole:**
The residue of $f(z)$ at a pole $z_0$ is the coefficient $b_1$ in the Laurent series expansion:
$$f(z) = \sum_{n=-\infty}^{\infty} a_n (z - z_0)^n = \dots + \frac{b_1}{z - z_0} + \frac{b_2}{(z - z_0)^2} + \dots$$

**Methods to Calculate Residues at a Pole $z_0$:**

*   **For a simple pole ($m=1$):**
    $$\text{Res}(f, z_0) = \lim_{z \to z_0} (z - z_0) f(z)$$
    This is the same limit we used to identify simple poles.

*   **For a pole of order $m$:**
    $$\text{Res}(f, z_0) = \frac{1}{(m-1)!} \lim_{z \to z_0} \frac{d^{m-1}}{dz^{m-1}} \left[ (z - z_0)^m f(z) \right]$$

**Connection to Course Outcome CO4:**
Understanding poles and how to calculate their residues directly supports CO4: "Understand the series expansion of complex function about a singularity and apply residue theorem to compute real integrals." The methods for calculating residues are derived from the Laurent series expansion around poles.

**Example 6: Calculating Residues**

Consider $f(z) = \frac{z^2 + 1}{z(z-1)^2}$ from Example 5. We found a simple pole at $z=0$ and a pole of order 2 at $z=1$.

*   **Residue at $z_0 = 0$ (simple pole):**
    $$\text{Res}(f, 0) = \lim_{z \to 0} z f(z) = \lim_{z \to 0} z \frac{z^2 + 1}{z(z-1)^2} = \lim_{z \to 0} \frac{z^2 + 1}{(z-1)^2} = \frac{0^2 + 1}{(0-1)^2} = 1$$

*   **Residue at $z_0 = 1$ (pole of order 2):**
    Here $m=2$. We need to calculate $\frac{d^{2-1}}{dz^{2-1}} \left[ (z-1)^2 f(z) \right] = \frac{d}{dz} \left[ (z-1)^2 \frac{z^2 + 1}{z(z-1)^2} \right]$.
    $\frac{d}{dz} \left[ \frac{z^2 + 1}{z} \right] = \frac{d}{dz} \left[ z + \frac{1}{z} \right] = 1 - \frac{1}{z^2}$.
    Now, apply the limit:
    $$\text{Res}(f, 1) = \frac{1}{(2-1)!} \lim_{z \to 1} \left( 1 - \frac{1}{z^2} \right) = 1 \cdot \lim_{z \to 1} \left( 1 - \frac{1}{z^2} \right) = 1 - \frac{1}{1^2} = 1 - 1 = 0$$

**Important Point:** The residue at $z=1$ is 0. This doesn't mean it's not a pole of order 2; it just means the coefficient $b_1$ in the Laurent series at $z=1$ is zero.

---

### **6. Poles and Fourier Transforms (Connection to CO1)**

While Taylor and Maclaurin series are about local behavior, poles play a vital role when dealing with functions whose Fourier Transforms are analyzed. The behavior of a function's Fourier Transform often relates to the singularities (including poles) of its analytic continuation in the complex plane.

**Example:** Consider the Fourier Transform of a causal exponential decay $f(t) = e^{-at}u(t)$, where $a>0$ and $u(t)$ is the unit step function.
The Fourier Transform is $F(\omega) = \int_{-\infty}^{\infty} e^{-at}u(t) e^{-i\omega t} dt = \int_{0}^{\infty} e^{-(a+i\omega)t} dt$.
$F(\omega) = \left[ \frac{e^{-(a+i\omega)t}}{-(a+i\omega)} \right]_0^{\infty} = 0 - \frac{1}{-(a+i\omega)} = \frac{1}{a+i\omega}$.

Now, consider the related function $F(s) = \frac{1}{s+a}$ in the complex plane, where $s = \sigma + i\omega$. The Fourier Transform is obtained by setting $s = i\omega$.
The function $F(s)$ has a **simple pole** at $s = -a$.

**Connection to CO1:** Understanding the nature of singularities like poles in the complex plane (e.g., of the Laplace Transform or related analytic continuations of Fourier Transforms) is crucial for determining the properties of signals and systems in electrical engineering. For instance, the location of poles in the complex $s$-plane (poles of the transfer function) determines the stability and transient response of a system.

---

### **7. Summary of Key Concepts and Important Points**

*   **Singularity:** A point where a complex function is not analytic.
*   **Isolated Singularity:** A singularity $z_0$ for which $f(z)$ is analytic in a punctured disk around $z_0$.
*   **Pole:** An isolated singularity $z_0$ where the principal part of the Laurent series has a finite number of non-zero terms.
*   **Order of a Pole:** If $(z-z_0)^{-m}$ is the term with the lowest positive power of $(z-z_0)$ in the principal part with a non-zero coefficient, $z_0$ is a pole of order $m$.
*   **Characterization of Poles:**
    *   $z_0$ is a pole of order $m$ if $f(z) = \frac{g(z)}{(z-z_0)^m}$, where $g(z_0) \neq 0$.
    *   $\lim_{z \to z_0} (z-z_0)^m f(z) = L \neq 0$ for the smallest integer $m \ge 1$.
*   **Behavior Near a Pole:** The magnitude of the function $|f(z)|$ tends to infinity as $z$ approaches a pole.
*   **Residue:** The coefficient of $(z-z_0)^{-1}$ in the Laurent series expansion of $f(z)$ around $z_0$.
*   **Calculating Residues:** Use specific formulas for simple poles and poles of higher order.
*   **Application:** Poles are essential for applying the Residue Theorem to evaluate integrals. Their locations in the complex plane are critical in fields like control systems (stability analysis) and signal processing.

---

### **8. Practice Questions**

1.  Identify the singularities of the following functions and classify them (removable, pole, essential):
    a) $f(z) = \frac{\sin z}{z}$
    b) $f(z) = \frac{1}{z^2(z-i)}$
    c) $f(z) = e^{1/(z-1)}$
    d) $f(z) = \frac{z^3}{z-2}$

2.  For the functions from Question 1 that have poles, determine the order of each pole.

3.  Find the residue of the function $f(z) = \frac{e^z}{(z-1)(z-2)^2}$ at each of its poles.

4.  Consider the function $F(s) = \frac{s+1}{s^2+4}$. Identify any poles of this function. (Hint: Think about the denominator.)

5.  Evaluate the integral $\oint_C \frac{1}{z^2(z-1)} dz$, where $C$ is the circle $|z| = 2$, oriented counterclockwise.

---

### **9. Answers to Practice Questions**

1.  **a) $f(z) = \frac{\sin z}{z}$**
    *   Singularity at $z=0$.
    *   $\lim_{z \to 0} \frac{\sin z}{z} = 1$.
    *   Classification: **Removable singularity**. (Laurent series: $1 - \frac{z^2}{3!} + \frac{z^4}{5!} - \dots$)

    **b) $f(z) = \frac{1}{z^2(z-i)}$**
    *   Singularities at $z=0$ and $z=i$.
    *   At $z=0$: $f(z) = \frac{1}{z^2(z-i)} = \frac{1}{-iz^2(1 - z/i)} = \frac{i}{z^2}(1 + \frac{z}{i} + (\frac{z}{i})^2 + \dots) = \frac{i}{z^2} + \frac{1}{z} + \frac{i}{1} + \dots$
        This shows a pole of order 2 at $z=0$.
        Check limit: $\lim_{z \to 0} z^2 f(z) = \lim_{z \to 0} \frac{1}{z-i} = \frac{1}{-i} = i \neq 0$.
        Classification: **Pole of order 2** at $z=0$.
    *   At $z=i$: $f(z) = \frac{1}{z^2(z-i)}$. Let $g(z) = \frac{1}{z^2}$. $g(i) = \frac{1}{i^2} = -1 \neq 0$.
        $f(z) = \frac{g(z)}{(z-i)^1}$.
        Classification: **Simple pole** at $z=i$.

    **c) $f(z) = e^{1/(z-1)}$**
    *   Singularity at $z=1$.
    *   Laurent series around $z=1$: $e^u = 1 + u + \frac{u^2}{2!} + \dots$. Substitute $u = 1/(z-1)$.
        $f(z) = 1 + \frac{1}{z-1} + \frac{1}{2!(z-1)^2} + \dots$
        The principal part has infinitely many non-zero terms.
    *   Classification: **Essential singularity** at $z=1$.

    **d) $f(z) = \frac{z^3}{z-2}$**
    *   Singularity at $z=2$.
    *   $f(z) = \frac{z^3}{z-2}$. Let $g(z) = z^3$. $g(2) = 2^3 = 8 \neq 0$.
        $f(z) = \frac{g(z)}{(z-2)^1}$.
    *   Classification: **Simple pole** at $z=2$.

2.  **Order of Poles:**
    *   From 1(b): Pole of order 2 at $z=0$. Simple pole (order 1) at $z=i$.
    *   From 1(d): Simple pole (order 1) at $z=2$.

3.  **Residues:** $f(z) = \frac{e^z}{(z-1)(z-2)^2}$
    *   **Pole at $z=1$ (simple pole):**
        $\text{Res}(f, 1) = \lim_{z \to 1} (z-1) f(z) = \lim_{z \to 1} (z-1) \frac{e^z}{(z-1)(z-2)^2} = \lim_{z \to 1} \frac{e^z}{(z-2)^2} = \frac{e^1}{(1-2)^2} = \frac{e}{(-1)^2} = e$.

    *   **Pole at $z=2$ (pole of order 2):**
        $m=2$.
        $\text{Res}(f, 2) = \frac{1}{(2-1)!} \lim_{z \to 2} \frac{d}{dz} \left[ (z-2)^2 \frac{e^z}{(z-1)(z-2)^2} \right]$
        $= \lim_{z \to 2} \frac{d}{dz} \left[ \frac{e^z}{z-1} \right]$
        Using the quotient rule: $\frac{d}{dz} \left[ \frac{e^z}{z-1} \right] = \frac{e^z(z-1) - e^z(1)}{(z-1)^2} = \frac{e^z(z-1-1)}{(z-1)^2} = \frac{e^z(z-2)}{(z-1)^2}$.
        Now, apply the limit:
        $\text{Res}(f, 2) = \lim_{z \to 2} \frac{e^z(z-2)}{(z-1)^2} = \frac{e^2(2-2)}{(2-1)^2} = \frac{e^2(0)}{(1)^2} = 0$.

4.  $F(s) = \frac{s+1}{s^2+4}$.
    The denominator is $s^2+4 = (s-2i)(s+2i)$.
    The singularities are at $s = 2i$ and $s = -2i$.
    Since the numerator $s+1$ is non-zero at $s=2i$ ($2i+1 \neq 0$) and $s=-2i$ ($-2i+1 \neq 0$), these are simple poles.
    Poles are at $s = 2i$ and $s = -2i$.

5.  Evaluate $\oint_C \frac{1}{z^2(z-1)} dz$, where $C$ is the circle $|z| = 2$.
    The singularities are at $z=0$ (pole of order 2) and $z=1$ (simple pole).
    Both singularities ($z=0$ and $z=1$) lie inside the circle $|z|=2$.
    We need to find the residues at $z=0$ and $z=1$.

    *   **Residue at $z=0$ (pole of order 2):**
        $f(z) = \frac{1}{z^2(z-1)}$. $m=2$.
        $\text{Res}(f, 0) = \frac{1}{(2-1)!} \lim_{z \to 0} \frac{d}{dz} \left[ z^2 \frac{1}{z^2(z-1)} \right] = \lim_{z \to 0} \frac{d}{dz} \left[ \frac{1}{z-1} \right]$
        $= \lim_{z \to 0} -\frac{1}{(z-1)^2} = -\frac{1}{(0-1)^2} = -1$.

    *   **Residue at $z=1$ (simple pole):**
        $\text{Res}(f, 1) = \lim_{z \to 1} (z-1) f(z) = \lim_{z \to 1} (z-1) \frac{1}{z^2(z-1)} = \lim_{z \to 1} \frac{1}{z^2} = \frac{1}{1^2} = 1$.

    By the Residue Theorem:
    $\oint_C f(z) dz = 2\pi i (\text{Res}(f, 0) + \text{Res}(f, 1))$
    $= 2\pi i (-1 + 1) = 2\pi i (0) = 0$.

---
This concludes the study notes on poles. Remember that a strong understanding of this topic is foundational for advanced complex analysis and its applications in various scientific and engineering disciplines.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |
