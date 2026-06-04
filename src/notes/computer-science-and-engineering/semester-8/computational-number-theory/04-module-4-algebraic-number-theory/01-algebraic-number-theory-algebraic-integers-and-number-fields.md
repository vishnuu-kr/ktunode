---
title: "Algebraic Number Theory - Algebraic integers and number fields"
subject: "COMPUTATIONAL NUMBER THEORY"
module: "Module 4: Algebraic Number Theory "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cb48"
status: "completed"
scrapedAt: "2026-05-20T17:24:20.908Z"
---
# COMPUTATIONAL NUMBER THEORY

## Module 4: Algebraic Number Theory

### Topic: Algebraic Integers and Number Fields

---

### **1. Introduction to Algebraic Number Theory**

*   **What is Algebraic Number Theory?**
    *   A branch of mathematics that applies techniques from abstract algebra to problems in number theory.
    *   It generalizes the properties of rational integers ($\mathbb{Z}$) and rational numbers ($\mathbb{Q}$) to a broader class of numbers.
    *   Key idea: Study of "number systems" beyond $\mathbb{Z}$ and $\mathbb{Q}$ that share similar arithmetic properties.

*   **Why is it "Computational"?**
    *   While deeply theoretical, algebraic number theory provides the foundation for computational algorithms in number theory.
    *   Many practical applications in cryptography, coding theory, and computational mathematics rely on understanding the structure of algebraic integers and number fields.

---

### **2. Algebraic Integers**

#### **2.1 Definition of Algebraic Integers**

*   **Key Concept:** An algebraic integer is a root of a monic polynomial with integer coefficients.
*   **Formal Definition:** A complex number $\alpha$ is an **algebraic integer** if it is a root of a polynomial of the form:
    $x^n + a_{n-1}x^{n-1} + \dots + a_1x + a_0 = 0$
    where $a_i \in \mathbb{Z}$ for all $i=0, 1, \dots, n-1$.
*   **Contrast with Rational Integers:** Rational integers ($\mathbb{Z}$) are a subset of algebraic integers. Every integer $k \in \mathbb{Z}$ is a root of the polynomial $x - k = 0$.

#### **2.2 Properties of Algebraic Integers**

*   **The Ring of Algebraic Integers:** The set of all algebraic integers forms a ring under addition and multiplication. This is a crucial property.
    *   **Closure under Addition:** If $\alpha$ and $\beta$ are algebraic integers, then $\alpha + \beta$ is also an algebraic integer.
    *   **Closure under Multiplication:** If $\alpha$ and $\beta$ are algebraic integers, then $\alpha \beta$ is also an algebraic integer.
    *   **Closure under Negation:** If $\alpha$ is an algebraic integer, then $-\alpha$ is also an algebraic integer.

*   **The set of algebraic integers is denoted by $\mathfrak{O}$ (or sometimes $\mathbb{A}$).**

#### **2.3 Examples of Algebraic Integers**

*   **Rational Integers:** $3$ (root of $x-3=0$), $-5$ (root of $x+5=0$).
*   **Roots of Unity:**
    *   $i$ (imaginary unit) is an algebraic integer, being a root of $x^2 + 1 = 0$.
    *   $\omega = e^{2\pi i / 3}$ (a primitive cube root of unity) is an algebraic integer, being a root of $x^2 + x + 1 = 0$.
*   **Quadratic Integers:** Numbers of the form $a + b\sqrt{d}$, where $d$ is a square-free integer and $a, b \in \mathbb{Z}$.
    *   Let $\alpha = a + b\sqrt{d}$.
    *   Consider the polynomial $(x - (a + b\sqrt{d}))(x - (a - b\sqrt{d})) = (x-a)^2 - (b\sqrt{d})^2 = (x-a)^2 - b^2d = x^2 - 2ax + a^2 - b^2d$.
    *   Since $a, b, d \in \mathbb{Z}$, this is a monic polynomial with integer coefficients. Thus, $a + b\sqrt{d}$ is an algebraic integer.
    *   **Example:** $1 + \sqrt{2}$ is an algebraic integer (root of $x^2 - 2x - 1 = 0$).
    *   **Example:** $3 + 5\sqrt{-3}$ is an algebraic integer (root of $x^2 - 6x + 34 = 0$).

*   **Rational Numbers (that are not integers):** Are rational numbers algebraic integers?
    *   Let $\alpha = p/q$ where $p, q \in \mathbb{Z}$, $q \neq 0$, and $\gcd(p, q) = 1$, $q \neq \pm 1$.
    *   If $p/q$ were an algebraic integer, it would be a root of $x^n + a_{n-1}x^{n-1} + \dots + a_0 = 0$ with $a_i \in \mathbb{Z}$.
    *   Substituting $x = p/q$: $(p/q)^n + a_{n-1}(p/q)^{n-1} + \dots + a_0 = 0$.
    *   Multiply by $q^n$: $p^n + a_{n-1}p^{n-1}q + \dots + a_1pq^{n-1} + a_0q^n = 0$.
    *   $p^n = -q(a_{n-1}p^{n-1} + \dots + a_0q^{n-1})$.
    *   This implies $q$ divides $p^n$. Since $\gcd(p, q) = 1$, this is only possible if $q = \pm 1$.
    *   **Conclusion:** A rational number is an algebraic integer if and only if it is a rational integer.

#### **2.4 Important Point to Remember:**

*   **The set of algebraic integers is closed under addition, subtraction, and multiplication. This makes it a ring.**

---

### **3. Number Fields**

#### **3.1 Definition of a Number Field**

*   **Key Concept:** A number field is a finite extension of the field of rational numbers $\mathbb{Q}$.
*   **Formal Definition:** A **number field** $K$ is a field that is an extension of $\mathbb{Q}$ of finite degree. This means $K$ is a vector space over $\mathbb{Q}$ with finite dimension.
*   **Degree of a Number Field:** The dimension of $K$ as a vector space over $\mathbb{Q}$ is called the **degree of the number field**, denoted by $[K : \mathbb{Q}]$.

#### **3.2 Examples of Number Fields**

*   **The Field of Rational Numbers ($\mathbb{Q}$):**
    *   $\mathbb{Q}$ is a number field of degree 1, since $[\mathbb{Q} : \mathbb{Q}] = 1$. It's the "base case".

*   **Quadratic Fields:**
    *   These are number fields of degree 2 over $\mathbb{Q}$.
    *   Form: $K = \mathbb{Q}(\sqrt{d})$, where $d$ is a square-free integer ($d \neq 0, 1$).
    *   Elements are of the form $a + b\sqrt{d}$, where $a, b \in \mathbb{Q}$.
    *   **Example:** $K = \mathbb{Q}(\sqrt{2})$. Its elements are of the form $a + b\sqrt{2}$ where $a, b \in \mathbb{Q}$.
        *   The degree is 2 because $\{1, \sqrt{2}\}$ forms a basis over $\mathbb{Q}$.
    *   **Example:** $K = \mathbb{Q}(\sqrt{-3})$. Its elements are of the form $a + b\sqrt{-3}$ where $a, b \in \mathbb{Q}$.
        *   The degree is 2 because $\{1, \sqrt{-3}\}$ forms a basis over $\mathbb{Q}$.

*   **Cyclotomic Fields:**
    *   Fields obtained by adjoining a primitive $n$-th root of unity to $\mathbb{Q}$.
    *   **Example:** The field $\mathbb{Q}(\zeta_p)$, where $\zeta_p = e^{2\pi i / p}$ is a primitive $p$-th root of unity, and $p$ is a prime.
        *   The degree of $\mathbb{Q}(\zeta_p)$ over $\mathbb{Q}$ is $p-1$.
        *   For $p=3$, $\mathbb{Q}(\zeta_3) = \mathbb{Q}(e^{2\pi i / 3}) = \mathbb{Q}(\frac{-1 + i\sqrt{3}}{2})$. This is a quadratic field $\mathbb{Q}(\sqrt{-3})$ and has degree $3-1=2$.

*   **Abelian Fields, Solvable Fields, etc.:** Higher degree fields are also studied.

#### **3.3 The Ring of Integers of a Number Field**

*   **Key Concept:** Within a number field $K$, there is a special subring consisting of its algebraic integers. This subring has powerful structural properties, analogous to $\mathbb{Z}$.
*   **Definition:** The **ring of integers** of a number field $K$, denoted by $\mathcal{O}_K$, is the set of all elements in $K$ that are algebraic integers.
    *   $\mathcal{O}_K = K \cap \mathfrak{O}$ (where $\mathfrak{O}$ is the set of all algebraic integers).
*   **Crucial Property:** $\mathcal{O}_K$ is always a **Dedekind domain**. This is a very important property that leads to unique factorization of ideals.
    *   **Dedekind Domain Properties:**
        *   It is an integral domain.
        *   Every non-zero ideal is invertible.
        *   It is integrally closed in its field of fractions.
        *   Every non-zero prime ideal is maximal.

#### **3.4 Examples of Rings of Integers**

*   **For $K = \mathbb{Q}$:**
    *   The elements of $\mathbb{Q}$ that are algebraic integers are precisely the rational integers.
    *   So, $\mathcal{O}_\mathbb{Q} = \mathbb{Q} \cap \mathfrak{O} = \mathbb{Z}$. This is the familiar ring of integers.

*   **For Quadratic Fields $K = \mathbb{Q}(\sqrt{d})$ (where $d$ is square-free):**
    *   The structure of $\mathcal{O}_K$ depends on $d \pmod 4$.
    *   **Case 1: $d \equiv 2$ or $3 \pmod 4$.**
        *   In this case, $\mathcal{O}_K = \mathbb{Z}[\sqrt{d}] = \{a + b\sqrt{d} \mid a, b \in \mathbb{Z}\}$.
        *   **Example:** For $K = \mathbb{Q}(\sqrt{2})$, since $2 \equiv 2 \pmod 4$, $\mathcal{O}_K = \mathbb{Z}[\sqrt{2}] = \{a + b\sqrt{2} \mid a, b \in \mathbb{Z}\}$.
        *   **Example:** For $K = \mathbb{Q}(\sqrt{-3})$, since $-3 \equiv 1 \pmod 4$ is false (it's $-3 \equiv 1 \pmod 4$ which means $d \equiv 1 \pmod 4$, so this is Case 2. Let's correct this: For $K = \mathbb{Q}(\sqrt{-3})$, since $-3 \equiv 1 \pmod 4$ is true, this falls into Case 2). Let's take $d=-7$. For $K = \mathbb{Q}(\sqrt{-7})$, since $-7 \equiv 1 \pmod 4$ is false ($-7 \equiv 1 \pmod 4$ is false). $-7 = -2 \times 4 + 1$. Ah, $-7 \equiv 1 \pmod 4$. So $d=-7$ is Case 2. Let's use $d=-5$. For $K = \mathbb{Q}(\sqrt{-5})$, since $-5 \equiv 3 \pmod 4$, $\mathcal{O}_K = \mathbb{Z}[\sqrt{-5}] = \{a + b\sqrt{-5} \mid a, b \in \mathbb{Z}\}$.

    *   **Case 2: $d \equiv 1 \pmod 4$.**
        *   In this case, $\mathcal{O}_K = \mathbb{Z}[\frac{1+\sqrt{d}}{2}] = \{a + b\frac{1+\sqrt{d}}{2} \mid a, b \in \mathbb{Z}\}$.
        *   This can be written as $\{ (a + b/2) + (b/2)\sqrt{d} \mid a, b \in \mathbb{Z} \}$. The "rational" coefficients are now of the form $a+b/2$ and $b/2$.
        *   **Example:** For $K = \mathbb{Q}(\sqrt{-3})$, since $-3 \equiv 1 \pmod 4$, $\mathcal{O}_K = \mathbb{Z}[\frac{1+\sqrt{-3}}{2}]$.
            *   The elements are of the form $a + b(\frac{1+\sqrt{-3}}{2}) = (a + b/2) + (b/2)\sqrt{-3}$.
            *   This is the ring of Eisenstein integers, often denoted $\mathbb{Z}[\omega]$.

*   **For Cyclotomic Fields $K = \mathbb{Q}(\zeta_p)$:**
    *   The ring of integers is $\mathcal{O}_{\mathbb{Q}(\zeta_p)} = \mathbb{Z}[\zeta_p]$.

#### **3.5 Important Points to Remember:**

*   A **number field** is a finite extension of $\mathbb{Q}$.
*   The **ring of integers** $\mathcal{O}_K$ of a number field $K$ is the set of elements in $K$ that are algebraic integers.
*   $\mathcal{O}_K$ is a **Dedekind domain**, which is crucial for unique factorization of ideals.
*   For quadratic fields $\mathbb{Q}(\sqrt{d})$, the ring of integers depends on $d \pmod 4$.

---

### **4. Computational Aspects and Applications**

*   **Computing the Ring of Integers:** Finding $\mathcal{O}_K$ for general number fields is a non-trivial computational problem. Algorithms like the "Dedekind-Hasse norm" algorithm are used.
*   **Factoring Ideals:** The fact that $\mathcal{O}_K$ is a Dedekind domain means that ideals in $\mathcal{O}_K$ can be uniquely factored into prime ideals. This is fundamental for many computations.
*   **Applications:**
    *   **Cryptography:** Used in elliptic curve cryptography and number field sieve for integer factorization.
    *   **Coding Theory:** Construction of error-correcting codes.
    *   **Diophantine Equations:** Solving equations involving integer variables, often by translating them into problems about number fields.
    *   **Lattice Basis Reduction:** Algorithms like LLL (Lenstra–Lenstra–Lovász) work with bases of lattices, which are closely related to the structure of rings of integers.

---

### **5. Practice Questions and Exercises**

1.  **Identify which of the following numbers are algebraic integers. Justify your answers.**
    *   a) $5$
    *   b) $1/2$
    *   c) $\sqrt{3}$
    *   d) $1 + \sqrt{2}$
    *   e) $\frac{1 + \sqrt{5}}{2}$
    *   f) $\frac{1}{3}$

2.  **Which of the following are number fields? Justify your answers.**
    *   a) $\mathbb{Q}$
    *   b) $\mathbb{R}$ (the field of real numbers)
    *   c) $\mathbb{Q}(i)$ (where $i^2 = -1$)
    *   d) $\mathbb{Q}(\sqrt[3]{2})$
    *   e) $\mathbb{Q}(\pi)$

3.  **For the number field $K = \mathbb{Q}(\sqrt{-5})$, what is its ring of integers $\mathcal{O}_K$? Show the polynomial for a general element.**

4.  **Is $\frac{1+\sqrt{-3}}{2}$ an algebraic integer? If so, find a monic polynomial with integer coefficients that has it as a root.**

5.  **Consider the field $K = \mathbb{Q}(\sqrt{6})$. What is the nature of $d$ with respect to modulo 4? What is the ring of integers $\mathcal{O}_K$?**

---

### **6. Answers to Practice Questions**

1.  **a) $5$:** Yes, it's a root of $x - 5 = 0$.
    *   **b) $1/2$:** No. If $1/2$ were an algebraic integer, it would be a root of a monic polynomial with integer coefficients. Let $x = 1/2$. Then $2x - 1 = 0$. Multiplying by $x^{n-1}$ (if $n>1$) we get $2x^n - x^{n-1} = 0$. This is not monic. The minimal polynomial for $1/2$ is $x - 1/2 = 0$, which is not in $\mathbb{Z}[x]$. (Alternatively, use the rational root theorem argument from Section 2.3).
    *   **c) $\sqrt{3}$:** Yes, it's a root of $x^2 - 3 = 0$.
    *   **d) $1 + \sqrt{2}$:** Yes. Consider $(x - (1+\sqrt{2}))(x - (1-\sqrt{2})) = (x-1)^2 - (\sqrt{2})^2 = x^2 - 2x + 1 - 2 = x^2 - 2x - 1 = 0$.
    *   **e) $\frac{1 + \sqrt{5}}{2}$:** Yes. This is a root of $x^2 - x - 1 = 0$. (This is the golden ratio $\phi$).
    *   **f) $1/3$:** No, by the same argument as for $1/2$.

2.  **a) $\mathbb{Q}$:** Yes, it is a number field of degree 1.
    *   **b) $\mathbb{R}$:** No. $\mathbb{R}$ is an extension of $\mathbb{Q}$, but it is not of *finite* degree. It is an infinite-dimensional vector space over $\mathbb{Q}$.
    *   **c) $\mathbb{Q}(i)$:** Yes, it is $\mathbb{Q}(\sqrt{-1})$. It is a degree 2 extension of $\mathbb{Q}$.
    *   **d) $\mathbb{Q}(\sqrt[3]{2})$:** Yes. The minimal polynomial of $\sqrt[3]{2}$ is $x^3 - 2 = 0$, which has degree 3. So, $[\mathbb{Q}(\sqrt[3]{2}) : \mathbb{Q}] = 3$.
    *   **e) $\mathbb{Q}(\pi)$:** No. $\pi$ is a transcendental number, meaning it is not a root of any non-zero polynomial with integer coefficients. Thus, $\mathbb{Q}(\pi)$ is an infinite extension of $\mathbb{Q}$ and not a number field.

3.  For $K = \mathbb{Q}(\sqrt{-5})$, $d = -5$. Since $-5 \equiv 3 \pmod 4$, the ring of integers is $\mathcal{O}_K = \mathbb{Z}[\sqrt{-5}] = \{a + b\sqrt{-5} \mid a, b \in \mathbb{Z}\}$.
    A general element is $a + b\sqrt{-5}$.

4.  Yes, $\frac{1+\sqrt{-3}}{2}$ is an algebraic integer. It is a root of $x^2 - x - 1 = 0$ is incorrect. Let's find its minimal polynomial:
    Let $\alpha = \frac{1+\sqrt{-3}}{2}$.
    $2\alpha = 1 + \sqrt{-3}$
    $2\alpha - 1 = \sqrt{-3}$
    $(2\alpha - 1)^2 = (\sqrt{-3})^2$
    $4\alpha^2 - 4\alpha + 1 = -3$
    $4\alpha^2 - 4\alpha + 4 = 0$
    Dividing by 4: $\alpha^2 - \alpha + 1 = 0$.
    This is a monic polynomial with integer coefficients, so $\frac{1+\sqrt{-3}}{2}$ is an algebraic integer.

5.  For $K = \mathbb{Q}(\sqrt{6})$, $d = 6$.
    *   Nature of $d \pmod 4$: $6 \equiv 2 \pmod 4$.
    *   Ring of integers: Since $d \equiv 2 \pmod 4$, the ring of integers is $\mathcal{O}_K = \mathbb{Z}[\sqrt{6}] = \{a + b\sqrt{6} \mid a, b \in \mathbb{Z}\}$.

---

### **7. Highlight Important Points to Remember**

*   **Algebraic Integer:** A root of a monic polynomial with integer coefficients.
*   **Rational numbers are algebraic integers IFF they are rational integers.**
*   **Number Field:** A finite-dimensional vector space over $\mathbb{Q}$.
*   **Ring of Integers ($\mathcal{O}_K$):** The subset of a number field $K$ containing all its algebraic integers.
*   **$\mathcal{O}_K$ is a Dedekind Domain:** This is key to unique factorization of ideals.
*   **Quadratic Fields $\mathbb{Q}(\sqrt{d})$:** The structure of $\mathcal{O}_K$ depends on $d \pmod 4$.
    *   $d \equiv 2, 3 \pmod 4 \implies \mathcal{O}_K = \mathbb{Z}[\sqrt{d}]$
    *   $d \equiv 1 \pmod 4 \implies \mathcal{O}_K = \mathbb{Z}[\frac{1+\sqrt{d}}{2}]$
*   **Computational Relevance:** Understanding these structures is foundational for algorithms in cryptography, coding theory, and solving Diophantine equations.
