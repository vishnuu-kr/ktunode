---
title: "Polynomial Arithmetic"
subject: "FOUNDATIONS OF CRYPTOGRAPHY"
module: "Module 1: Integer Arithmetic – Divisibility"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf08"
status: "completed"
scrapedAt: "2026-05-20T16:53:29.759Z"
---
# Foundations of Cryptography: Module 1 - Integer Arithmetic - Divisibility
## Topic: Polynomial Arithmetic

This module introduces the fundamental concepts of polynomial arithmetic, which are crucial building blocks for many cryptographic algorithms, particularly those employing finite fields. We will focus on operations like addition, subtraction, multiplication, and division of polynomials, especially over finite fields.

---

### Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   **Define polynomials and their components.**
*   **Perform addition and subtraction of polynomials.**
*   **Multiply polynomials.**
*   **Understand the concept of polynomial division and find quotients and remainders.**
*   **Recognize the properties of polynomials over finite fields (Galois Fields).**
*   **Apply polynomial arithmetic to cryptographic contexts (briefly introduced).**

---

### 1. What are Polynomials?

A polynomial is an expression consisting of variables (also called indeterminates) and coefficients, that involves only the operations of addition, subtraction, multiplication, and non-negative integer exponentiation of variables.

**Key Concepts & Definitions:**

*   **Monomial:** A single term consisting of a coefficient multiplied by one or more variables raised to non-negative integer powers.
    *   *Example:* $5x^3$, $-2y$, $7$.
*   **Polynomial:** A sum of one or more monomials.
    *   *Example:* $P(x) = 3x^3 + 2x^2 - 5x + 1$.
*   **Variable (or Indeterminate):** The symbol representing the unknown, typically denoted by $x$, $y$, $z$, etc.
*   **Coefficient:** The numerical factor multiplying a variable or a term. In $P(x) = 3x^3 + 2x^2 - 5x + 1$, the coefficients are 3, 2, -5, and 1.
*   **Degree of a Monomial:** The sum of the exponents of the variables in the monomial.
    *   *Example:* The degree of $5x^3y^2$ is $3 + 2 = 5$.
*   **Degree of a Polynomial:** The highest degree of any of its monomials.
    *   *Example:* The degree of $P(x) = 3x^3 + 2x^2 - 5x + 1$ is 3.
*   **Leading Term:** The monomial with the highest degree.
*   **Leading Coefficient:** The coefficient of the leading term.
*   **Constant Term:** The term with no variables (degree 0).
*   **Zero Polynomial:** The polynomial where all coefficients are zero. Its degree is usually undefined or considered $-\infty$.
*   **Monomial Polynomial (or Unary Polynomial):** A polynomial with only one term.

**Representation:**

Polynomials are often written in descending powers of the variable.
$P(x) = a_n x^n + a_{n-1} x^{n-1} + \dots + a_1 x + a_0$
where $a_i$ are coefficients and $n$ is the degree.

---

### 2. Polynomial Addition and Subtraction

To add or subtract polynomials, we combine like terms. Like terms are monomials that have the same variables raised to the same powers.

**Key Concepts & Definitions:**

*   **Like Terms:** Monomials with the same variable part.

**Operations:**

*   **Addition:** Add the coefficients of like terms.
*   **Subtraction:** Subtract the coefficients of like terms. This is equivalent to adding the negative of the second polynomial.

**Example 1: Addition**

Let $P(x) = 3x^3 + 2x^2 - 5x + 1$ and $Q(x) = x^3 - 4x^2 + 2x - 7$.

$P(x) + Q(x) = (3x^3 + 2x^2 - 5x + 1) + (x^3 - 4x^2 + 2x - 7)$
Group like terms:
$P(x) + Q(x) = (3x^3 + x^3) + (2x^2 - 4x^2) + (-5x + 2x) + (1 - 7)$
Combine coefficients:
$P(x) + Q(x) = 4x^3 - 2x^2 - 3x - 6$

**Example 2: Subtraction**

Let $P(x) = 3x^3 + 2x^2 - 5x + 1$ and $Q(x) = x^3 - 4x^2 + 2x - 7$.

$P(x) - Q(x) = (3x^3 + 2x^2 - 5x + 1) - (x^3 - 4x^2 + 2x - 7)$
Distribute the negative sign:
$P(x) - Q(x) = 3x^3 + 2x^2 - 5x + 1 - x^3 + 4x^2 - 2x + 7$
Group like terms:
$P(x) - Q(x) = (3x^3 - x^3) + (2x^2 + 4x^2) + (-5x - 2x) + (1 + 7)$
Combine coefficients:
$P(x) - Q(x) = 2x^3 + 6x^2 - 7x + 8$

**Important Point to Remember:**

*   When adding or subtracting, ensure both polynomials are written with all powers of $x$ from the highest degree down to the constant term (even if the coefficient is zero) to avoid missing terms.

---

### 3. Polynomial Multiplication

To multiply polynomials, we use the distributive property, multiplying each term in the first polynomial by each term in the second polynomial, and then combining like terms.

**Key Concepts & Definitions:**

*   **Distributive Property:** $a(b+c) = ab + ac$.
*   **Exponent Rule for Multiplication:** $x^m \cdot x^n = x^{m+n}$.

**Operations:**

Multiply each term of the first polynomial by each term of the second polynomial and sum the results.

**Example 3: Multiplication**

Let $P(x) = 2x + 3$ and $Q(x) = x^2 - 4x + 5$.

$P(x) \cdot Q(x) = (2x + 3)(x^2 - 4x + 5)$

Using the distributive property:
$= 2x(x^2 - 4x + 5) + 3(x^2 - 4x + 5)$
$= (2x \cdot x^2) + (2x \cdot -4x) + (2x \cdot 5) + (3 \cdot x^2) + (3 \cdot -4x) + (3 \cdot 5)$
$= 2x^3 - 8x^2 + 10x + 3x^2 - 12x + 15$

Now, combine like terms:
$= 2x^3 + (-8x^2 + 3x^2) + (10x - 12x) + 15$
$= 2x^3 - 5x^2 - 2x + 15$

**Important Point to Remember:**

*   The degree of the product of two polynomials is the sum of their degrees. If $\deg(P(x)) = m$ and $\deg(Q(x)) = n$, then $\deg(P(x) \cdot Q(x)) = m+n$.

---

### 4. Polynomial Division

Polynomial division is similar to integer division. We aim to find a quotient polynomial $Q(x)$ and a remainder polynomial $R(x)$ such that:

$P(x) = D(x) \cdot Q(x) + R(x)$

where $D(x)$ is the divisor, and the degree of the remainder $R(x)$ is less than the degree of the divisor $D(x)$, or $R(x)$ is the zero polynomial.

**Key Concepts & Definitions:**

*   **Dividend:** The polynomial being divided ($P(x)$).
*   **Divisor:** The polynomial by which we divide ($D(x)$).
*   **Quotient:** The result of the division ($Q(x)$).
*   **Remainder:** The part left over after division ($R(x)$).

**Process (Long Division for Polynomials):**

1.  **Set up:** Write the dividend and divisor in descending order of powers. Add missing terms with zero coefficients.
2.  **Divide the leading terms:** Divide the leading term of the dividend by the leading term of the divisor. This gives the first term of the quotient.
3.  **Multiply and Subtract:** Multiply the divisor by this first term of the quotient. Subtract the result from the dividend.
4.  **Bring down:** Bring down the next term of the dividend.
5.  **Repeat:** Repeat steps 2-4 with the new polynomial (the result of the subtraction) as the new dividend until the degree of the new dividend is less than the degree of the divisor.

**Example 4: Polynomial Division**

Divide $P(x) = 2x^3 - 5x^2 - 2x + 15$ by $D(x) = x + 1$.

```
        2x^2  - 7x   + 5       <-- Quotient Q(x)
      _________________
x + 1 | 2x^3 - 5x^2 - 2x + 15  <-- Dividend P(x)
      -(2x^3 + 2x^2)
      ___________
            -7x^2 - 2x
          -(-7x^2 - 7x)
          ___________
                  5x + 15
                -(5x + 5)
                _________
                      10      <-- Remainder R(x)
```

**Steps Explained:**

1.  **Divide leading terms:** $(2x^3) / x = 2x^2$. This is the first term of the quotient.
2.  **Multiply:** $2x^2 \cdot (x + 1) = 2x^3 + 2x^2$.
3.  **Subtract:** $(2x^3 - 5x^2) - (2x^3 + 2x^2) = -7x^2$. Bring down the next term $(-2x)$. New polynomial: $-7x^2 - 2x$.
4.  **Divide leading terms:** $(-7x^2) / x = -7x$. This is the second term of the quotient.
5.  **Multiply:** $-7x \cdot (x + 1) = -7x^2 - 7x$.
6.  **Subtract:** $(-7x^2 - 2x) - (-7x^2 - 7x) = 5x$. Bring down the next term $(+15)$. New polynomial: $5x + 15$.
7.  **Divide leading terms:** $(5x) / x = 5$. This is the third term of the quotient.
8.  **Multiply:** $5 \cdot (x + 1) = 5x + 5$.
9.  **Subtract:** $(5x + 15) - (5x + 5) = 10$. The degree of 10 (which is 0) is less than the degree of $x+1$ (which is 1). So, 10 is the remainder.

**Result:**
$P(x) = (x+1)(2x^2 - 7x + 5) + 10$

**Important Points to Remember:**

*   The process stops when the degree of the remaining polynomial is less than the degree of the divisor.
*   If the remainder is zero, the divisor is a factor of the dividend.

---

### 5. Polynomials Over Finite Fields (Galois Fields)

In cryptography, we often work with polynomials where the coefficients are elements of a finite field, most commonly $GF(2)$ or $GF(2^m)$.

**Key Concepts & Definitions:**

*   **Finite Field ($GF(p^m)$):** A set of $p^m$ elements with well-defined addition and multiplication operations that satisfy the field axioms (associativity, commutativity, distributivity, existence of identity and inverse elements for addition and multiplication).
    *   $GF(p)$: The field of integers modulo a prime $p$. Operations are performed modulo $p$.
    *   $GF(2^m)$: The field of polynomials of degree at most $m-1$ with coefficients in $GF(2)$, modulo an irreducible polynomial of degree $m$ over $GF(2)$.
*   **Irreducible Polynomial:** A polynomial over a field that cannot be factored into the product of two non-constant polynomials over the same field.
*   **$GF(2)$ Arithmetic:** Coefficients are only 0 or 1.
    *   Addition: $0+0=0$, $0+1=1$, $1+0=1$, $1+1=0$ (This is XOR operation).
    *   Multiplication: $0 \cdot 0=0$, $0 \cdot 1=0$, $1 \cdot 0=0$, $1 \cdot 1=1$ (This is AND operation).

**Operations over $GF(2)$:**

Let $P(x) = x^2 + 1$ and $Q(x) = x + 1$ over $GF(2)$.

*   **Addition:**
    $P(x) + Q(x) = (x^2 + 0x + 1) + (0x^2 + x + 1)$
    Coefficients are added modulo 2:
    $P(x) + Q(x) = (1+0)x^2 + (0+1)x + (1+1)$
    $P(x) + Q(x) = 1x^2 + 1x + 0 \pmod{2}$
    $P(x) + Q(x) = x^2 + x$

*   **Multiplication:**
    $P(x) \cdot Q(x) = (x^2 + 1)(x + 1)$
    $= x^2(x+1) + 1(x+1)$
    $= (x^2 \cdot x) + (x^2 \cdot 1) + (1 \cdot x) + (1 \cdot 1)$
    $= x^3 + x^2 + x + 1$
    Since all coefficients are 0 or 1, no reduction modulo 2 is needed here.

**Example 5: Polynomials over $GF(2^m)$**

Consider polynomials over $GF(2^3)$. The elements of $GF(2^3)$ can be represented as polynomials of degree at most 2 with coefficients in $GF(2)$.
Let $\alpha$ be a primitive element of $GF(2^3)$. Then $GF(2^3) = \{0, 1, \alpha, \alpha+1, \alpha^2, \alpha^2+1, \alpha^2+\alpha, \alpha^2+\alpha+1\}$.
Operations in $GF(2^3)$ are performed modulo an irreducible polynomial of degree 3. Let's use $x^3 + x + 1$.

Let $P(x) = \alpha^2 x + 1$ and $Q(x) = \alpha$ over $GF(2^3)$.

*   **Addition:**
    $P(x) + Q(x) = (\alpha^2 x + 1) + (\alpha)$
    $= \alpha^2 x + (\alpha + 1)$ (addition of coefficients is modulo 2)

*   **Multiplication:**
    $P(x) \cdot Q(x) = (\alpha^2 x + 1) \cdot (\alpha)$
    $= (\alpha^2 x \cdot \alpha) + (1 \cdot \alpha)$
    $= (\alpha^3 x) + \alpha$
    Now, we need to reduce $\alpha^3$ using the irreducible polynomial $x^3 + x + 1$.
    Since $x^3 + x + 1 = 0$, we have $x^3 = -x - 1$. In $GF(2)$, $-x = x$ and $-1 = 1$. So, $x^3 = x + 1$.
    Thus, $\alpha^3 = \alpha + 1$.
    Substituting this back:
    $P(x) \cdot Q(x) = (\alpha + 1)x + \alpha$
    $P(x) \cdot Q(x) = \alpha x + x + \alpha$

**Important Points to Remember:**

*   When performing arithmetic with polynomials over finite fields, all coefficient arithmetic (addition, subtraction, multiplication) must be done modulo the characteristic of the field (e.g., modulo 2 for $GF(2^m)$).
*   For $GF(2^m)$, polynomial arithmetic often involves an extra step of reducing the result modulo an irreducible polynomial of degree $m$ to keep the polynomials within the field representation.

---

### 6. Cryptographic Relevance (Brief Introduction)

Polynomial arithmetic is fundamental to:

*   **Finite Field Arithmetic:** Operations in $GF(2^m)$ are often implemented using polynomials. Elements of $GF(2^m)$ are represented as polynomials of degree less than $m$, and arithmetic is performed modulo an irreducible polynomial of degree $m$.
*   **Error Correction Codes:** Polynomials are used to define and manipulate codes for detecting and correcting errors in data transmission.
*   **Elliptic Curve Cryptography (ECC):** While not directly polynomial arithmetic, some underlying mathematical structures and computations can be related.
*   **Advanced Encryption Standard (AES):** The core mixing operation in AES, the "MixColumns" transformation, is performed using polynomial multiplication over $GF(2^8)$.

---

### Practice Questions/Exercises

**Section 2: Addition/Subtraction**

1.  Let $A(x) = 5x^3 - 2x^2 + x - 3$ and $B(x) = -2x^3 + 4x^2 - 6x + 1$.
    a) Calculate $A(x) + B(x)$.
    b) Calculate $A(x) - B(x)$.

**Section 3: Multiplication**

2.  Let $C(x) = x^2 + 3x + 2$ and $D(x) = 2x - 1$.
    Calculate $C(x) \cdot D(x)$.

**Section 4: Division**

3.  Divide $P(x) = 3x^4 - 2x^3 + x^2 - 4x + 5$ by $D(x) = x^2 + 1$.
    Find the quotient $Q(x)$ and the remainder $R(x)$.

**Section 5: Polynomials over $GF(2)$**

4.  Let $E(x) = x^3 + x + 1$ and $F(x) = x^2 + x$ over $GF(2)$.
    a) Calculate $E(x) + F(x)$.
    b) Calculate $E(x) \cdot F(x)$.

**Section 5: Polynomials over $GF(2^m)$ (Conceptual)**

5.  Consider arithmetic over $GF(2^3)$ with the irreducible polynomial $x^3 + x + 1 = 0$. Let $\alpha$ be a root.
    If $G(x) = \alpha x^2 + \alpha x$ and $H(x) = \alpha^2 x$, compute $G(x) \cdot H(x)$. You'll need to know how to multiply elements of $GF(2^3)$ and reduce the result.
    *(Hint: You'll need to compute $\alpha^3$ and potentially higher powers of $\alpha$. $\alpha^3 = \alpha+1$. $\alpha^4 = \alpha \cdot \alpha^3 = \alpha(\alpha+1) = \alpha^2 + \alpha$. $\alpha^5 = \alpha \cdot \alpha^4 = \alpha(\alpha^2 + \alpha) = \alpha^3 + \alpha^2 = (\alpha+1) + \alpha^2 = \alpha^2 + \alpha + 1$. $\alpha^6 = \alpha \cdot \alpha^5 = \alpha(\alpha^2 + \alpha + 1) = \alpha^3 + \alpha^2 + \alpha = (\alpha+1) + \alpha^2 + \alpha = \alpha^2 + 1$. )*

---

### Answers to Practice Questions

1.  a) $A(x) + B(x) = (5x^3 - 2x^3) + (-2x^2 + 4x^2) + (x - 6x) + (-3 + 1) = 3x^3 + 2x^2 - 5x - 2$.
    b) $A(x) - B(x) = (5x^3 - (-2x^3)) + (-2x^2 - 4x^2) + (x - (-6x)) + (-3 - 1) = 7x^3 - 6x^2 + 7x - 4$.

2.  $C(x) \cdot D(x) = (x^2 + 3x + 2)(2x - 1)$
    $= x^2(2x-1) + 3x(2x-1) + 2(2x-1)$
    $= (2x^3 - x^2) + (6x^2 - 3x) + (4x - 2)$
    $= 2x^3 + (-x^2 + 6x^2) + (-3x + 4x) - 2$
    $= 2x^3 + 5x^2 + x - 2$.

3.  Let $P(x) = 3x^4 + 0x^3 - 2x^3 + x^2 - 4x + 5$ and $D(x) = x^2 + 0x + 1$.

    ```
            3x^2  - 2x   - 2       <-- Quotient Q(x)
          ___________________
    x^2+1 | 3x^4 - 2x^3 +  x^2 - 4x + 5
          -(3x^4       + 3x^2)
          ___________________
                -2x^3 - 2x^2 - 4x
              -(-2x^3       - 2x)
              ___________________
                    -2x^2 - 2x + 5
                  -(-2x^2       - 2)
                  _______________
                          -2x + 7   <-- Remainder R(x)
    ```
    Quotient $Q(x) = 3x^2 - 2x - 2$.
    Remainder $R(x) = -2x + 7$.

4.  Over $GF(2)$:
    a) $E(x) + F(x) = (x^3 + x + 1) + (x^2 + x)$
       Coefficients are added modulo 2:
       $E(x) + F(x) = x^3 + x^2 + (1+1)x + 1 \pmod{2}$
       $E(x) + F(x) = x^3 + x^2 + 0x + 1 \pmod{2}$
       $E(x) + F(x) = x^3 + x^2 + 1$.

    b) $E(x) \cdot F(x) = (x^3 + x + 1)(x^2 + x)$
       $= x^3(x^2+x) + x(x^2+x) + 1(x^2+x)$
       $= (x^5 + x^4) + (x^3 + x^2) + (x^2 + x)$
       Combine like terms (modulo 2):
       $= x^5 + x^4 + x^3 + (x^2 + x^2) + x \pmod{2}$
       $= x^5 + x^4 + x^3 + 0x^2 + x \pmod{2}$
       $= x^5 + x^4 + x^3 + x$.

5.  $G(x) = \alpha x^2 + \alpha x$, $H(x) = \alpha^2 x$.
    $G(x) \cdot H(x) = (\alpha x^2 + \alpha x) (\alpha^2 x)$
    $= (\alpha x^2)(\alpha^2 x) + (\alpha x)(\alpha^2 x)$
    $= (\alpha \cdot \alpha^2) x^{2+1} + (\alpha \cdot \alpha^2) x^{1+1}$
    $= \alpha^3 x^3 + \alpha^3 x^2$
    Using $\alpha^3 = \alpha+1$:
    $= (\alpha+1) x^3 + (\alpha+1) x^2$
    Now, we must reduce $x^3$ using $x^3 = x+1$.
    $= (\alpha+1)(x+1) + (\alpha+1) x^2$
    Distribute the $(\alpha+1)$:
    $= [(\alpha+1)x + (\alpha+1)] + (\alpha+1)x^2$
    $= (\alpha+1)x^2 + (\alpha+1)x + (\alpha+1)$
    The elements of $GF(2^3)$ are written as $a_2 x^2 + a_1 x + a_0$ where $a_i \in GF(2)$.
    Here, $a_2 = \alpha+1$, $a_1 = \alpha+1$, $a_0 = \alpha+1$. This is a valid representation.
    The result is $(\alpha+1)x^2 + (\alpha+1)x + (\alpha+1)$.

---

### Important Points to Remember (Summary)

*   **Polynomial Structure:** Understand coefficients, variables, terms, and degree.
*   **Like Terms:** The key to addition and subtraction.
*   **Distributive Property:** The foundation for polynomial multiplication.
*   **Degree of Product:** Sum of degrees of multiplicands.
*   **Polynomial Division:** Aim for remainder degree < divisor degree.
*   **$GF(2)$ Arithmetic:** XOR for addition, AND for multiplication of coefficients.
*   **$GF(2^m)$ Arithmetic:** Coefficients operate in $GF(2)$, and results are reduced modulo an irreducible polynomial of degree $m$.

---
This concludes the notes for Polynomial Arithmetic. These concepts are foundational for understanding more complex cryptographic algorithms and structures built upon finite fields.
