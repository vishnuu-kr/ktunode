---
title: "Polynomial arithmetic"
subject: "SECURE COMMUNICATION"
module: "Module 1: Introduction and Classic Encryption Techniques:"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fee77"
status: "completed"
scrapedAt: "2026-05-23T18:02:56.510Z"
---
# SECURE COMMUNICATION: Module 1 - Introduction and Classic Encryption Techniques
## Topic: Polynomial Arithmetic

---

### 1. Introduction to Polynomial Arithmetic

Polynomial arithmetic is a fundamental mathematical tool used in various areas of cryptography, particularly in finite fields. Understanding polynomial operations is crucial for implementing and analyzing certain encryption algorithms, especially those involving finite field arithmetic like the Advanced Encryption Standard (AES).

**Learning Outcome Addressed:** This topic directly supports **CO1: Explain network security services and mechanisms and the types of attacks they are designed for and apply the concepts of modular arithmetic, Euclidean algorithm, polynomial arithmetic.** (Knowledge Level: K3)

**Key Concepts:**

*   **Polynomial:** A mathematical expression consisting of variables (or indeterminates) and coefficients, that involves only the operations of addition, subtraction, multiplication, and non-negative integer exponents of variables.
    *   General form: $A(x) = a_n x^n + a_{n-1} x^{n-1} + \dots + a_1 x + a_0$
    *   $a_i$ are coefficients.
    *   $n$ is the degree of the polynomial.
    *   $x$ is the indeterminate.

*   **Coefficients:** The numbers that multiply the variables in a polynomial. In cryptography, these coefficients often belong to a specific finite field (e.g., GF(2), GF(2^m)).

*   **Indeterminate (or Variable):** The symbol (usually 'x') in a polynomial.

*   **Degree of a Polynomial:** The highest exponent of the indeterminate in the polynomial.

**Reference:** Stallings, Chapter 3 (Elements of Number Theory) might discuss concepts related to polynomial representation, though the primary focus on polynomial arithmetic for finite fields is more prominent in discussions of AES. Dummit & Foote (Abstract Algebra) provides a rigorous mathematical foundation for polynomial rings and fields.

---

### 2. Polynomial Arithmetic Operations

We will focus on polynomial arithmetic over a finite field, specifically GF(2), which is commonly used in cryptography. In GF(2), coefficients are either 0 or 1, and addition/subtraction are performed modulo 2.

**Important Note:** In GF(2), $a + b = a - b$ because $1+1 = 0$ and $1-1 = 0$ (mod 2). This simplifies subtraction to addition.

#### 2.1. Polynomial Addition

To add two polynomials, we add their corresponding coefficients modulo 2.

**Process:**
1.  Align the polynomials by their powers of $x$.
2.  Add the coefficients of each corresponding power of $x$ modulo 2.

**Example (GF(2)):**
Let $A(x) = x^3 + x + 1$ and $B(x) = x^2 + x + 1$.

$A(x) = 1 \cdot x^3 + 0 \cdot x^2 + 1 \cdot x + 1$
$B(x) = 0 \cdot x^3 + 1 \cdot x^2 + 1 \cdot x + 1$

$A(x) + B(x) = (1+0)x^3 + (0+1)x^2 + (1+1)x + (1+1)$
$A(x) + B(x) = 1x^3 + 1x^2 + 0x + 0$
$A(x) + B(x) = x^3 + x^2$

**Representing Polynomials as Bit Strings:**
Polynomials in GF(2) can be represented as bit strings, where the position of the bit corresponds to the exponent of $x$. For example, $x^3 + x + 1$ can be represented as `1011` (corresponding to $x^3, x^2, x^1, x^0$).

*   $A(x) = x^3 + x + 1 \rightarrow 1011$
*   $B(x) = x^2 + x + 1 \rightarrow 0111$

Addition is then performed as bitwise XOR:

```
  1011
^ 0111
------
  1100
```
The result `1100` corresponds to $1x^3 + 1x^2 + 0x + 0 = x^3 + x^2$.

#### 2.2. Polynomial Subtraction

As mentioned, in GF(2), subtraction is identical to addition.

**Example (GF(2)):**
$A(x) - B(x) = A(x) + B(x)$ (mod 2)
$x^3 + x + 1 - (x^2 + x + 1) = x^3 + x^2$

#### 2.3. Polynomial Multiplication

To multiply two polynomials, we use the distributive property and then add the results modulo 2 for coefficients.

**Process:**
1.  Multiply each term of the first polynomial by each term of the second polynomial.
2.  Add the resulting terms, combining like terms by adding their coefficients modulo 2.

**Example (GF(2)):**
Let $A(x) = x + 1$ and $B(x) = x + 1$.

$A(x) \cdot B(x) = (x + 1)(x + 1)$
$A(x) \cdot B(x) = x(x+1) + 1(x+1)$
$A(x) \cdot B(x) = (x^2 + x) + (x + 1)$
$A(x) \cdot B(x) = x^2 + (x+x) + 1$
$A(x) \cdot B(x) = x^2 + (1+1)x + 1$
$A(x) \cdot B(x) = x^2 + 0x + 1$
$A(x) \cdot B(x) = x^2 + 1$

**Bit String Representation:**
$A(x) = x + 1 \rightarrow 0011$
$B(x) = x + 1 \rightarrow 0011$

Multiplication is more involved with bit strings and typically requires shifting and XORing. A common way is to multiply one polynomial by each term of the other, shifting appropriately.

$A(x) \cdot B(x)$:
```
    0011  (A(x))
x   0011  (B(x))
--------
    0011  (0011 * 1)
+  00110  (0011 * x, shifted left by 1)
--------
   01001  (Result after XORing)
```
This result `01001` represents $1x^3 + 0x^2 + 0x + 1 = x^3 + 1$.

*Wait, the manual bit string multiplication above seems off. Let's do it correctly:*

**Correct Bit String Multiplication Example:**
$A(x) = x+1$ (0011)
$B(x) = x+1$ (0011)

We can think of this as: $A(x) \times B(x) = A(x) \times (x + 1) = (A(x) \times x) + (A(x) \times 1)$

1.  $A(x) \times 1 = x+1 \rightarrow 0011$
2.  $A(x) \times x = (x+1) \times x = x^2 + x \rightarrow 0110$

Now, add them using XOR:
```
  0011
^ 0110
------
  0101
```
The result `0101` represents $1x^2 + 0x + 1 = x^2 + 1$. This matches the polynomial calculation.

**Important Point for AES:** In AES, multiplication is performed modulo an irreducible polynomial of degree 8. This is a key concept for the Galois/Counter Mode (GCM) and other finite field operations.

#### 2.4. Polynomial Division

Polynomial division is used to find the quotient and remainder when one polynomial is divided by another. This is analogous to integer division. We typically work with polynomials over a field.

**Process (Long Division for Polynomials):**
1.  Ensure both dividend and divisor are ordered by decreasing powers of $x$.
2.  Divide the leading term of the dividend by the leading term of the divisor to get the first term of the quotient.
3.  Multiply the divisor by this quotient term and subtract it from the dividend.
4.  Repeat the process with the resulting remainder as the new dividend until the degree of the remainder is less than the degree of the divisor.

**Example (GF(2)):**
Divide $x^3 + x + 1$ by $x+1$.

Dividend: $x^3 + 0x^2 + x + 1$
Divisor: $x + 1$

Step 1: Divide $x^3$ by $x$ to get $x^2$.
Multiply divisor by $x^2$: $x^2(x+1) = x^3 + x^2$.
Subtract from dividend (using XOR):
$(x^3 + 0x^2 + x + 1) - (x^3 + x^2) = (x^3-x^3) + (0x^2-x^2) + x + 1 = 0x^3 - x^2 + x + 1 = x^2 + x + 1$ (mod 2)

New dividend: $x^2 + x + 1$

Step 2: Divide $x^2$ by $x$ to get $x$.
Multiply divisor by $x$: $x(x+1) = x^2 + x$.
Subtract from new dividend:
$(x^2 + x + 1) - (x^2 + x) = (x^2-x^2) + (x-x) + 1 = 0x^2 + 0x + 1 = 1$

Remainder is 1. Quotient is $x^2 + x$.

So, $(x^3 + x + 1) = (x^2 + x)(x + 1) + 1$ (mod 2).

**Bit String Representation:**
Dividend: `1011`
Divisor: `0011`

```
        100   <-- Quotient
      _______
0011 | 1011    <-- Dividend
      -0011
      ------
       1001   <-- Remainder 1
      -0011
      ------
        010   <-- Remainder 2 (Degree < Divisor degree)
```
Wait, the long division bit string representation is also tricky and easy to get wrong. Let's re-think the bit string division, relating it back to the polynomial operations.

**Correct Bit String Division Example:**
$A(x) = x^3 + x + 1$ (1011)
$B(x) = x + 1$ (0011)

We are looking for $Q(x)$ and $R(x)$ such that $A(x) = Q(x)B(x) + R(x)$, where degree($R(x)$) < degree($B(x)$).

The process is similar to binary long division.
Start with the most significant bit of the dividend.
If the current portion of the dividend (aligned with the divisor) has a leading 1 at a position where the divisor also has a leading 1, XOR the current portion with the divisor. Then shift the divisor left.

Let's use a slightly more abstract view for bit string division in GF(2):
We want to divide $1011$ by $0011$. The divisor's degree is 1, so we need to see if we can "cancel" the leading 1 in $1011$.

```
    100     <-- Quotient
   _______
11 | 1011   <-- Divisor (aligned) and Dividend
     11
     ---
     011    <-- Remainder after first XOR
      00    <-- XOR with shifted divisor (11 << 1)
      ---
      11
      11    <-- XOR with shifted divisor (11 << 1)
      ---
       0    <-- Final remainder
```

Let's re-do with proper alignment and understanding of what we are XORing.
The divisor $x+1$ has degree 1. The dividend $x^3+x+1$ has degree 3.
We expect a quotient of degree $3-1=2$.

```
        x^2 + x      <-- Quotient (110 in bit string if we pad to degree 3)
      _________
x+1 | x^3 + 0x^2 + x + 1
      -(x^3 + x^2)     <-- x^2 * (x+1)
      ----------
            x^2 + x + 1
          -(x^2 + x)     <-- x * (x+1)
          --------
                  1    <-- Remainder

```
So, $Q(x) = x^2 + x$ and $R(x) = 1$.
In bit strings, for a degree 3 dividend:
$x^3 + 0x^2 + x + 1 \rightarrow 1011$
$x+1 \rightarrow 0011$ (or simply 11 if we consider context)
$x^2 + x \rightarrow 110$

Let's visualize the XOR operations on bit strings corresponding to the polynomial division:
We are trying to divide $1011$ by $11$.
The highest bit of $1011$ is at position 3. The highest bit of $11$ is at position 1.
Since the degrees differ by 2, we expect the quotient to have degree 2.
We take the first part of the dividend that has the same degree as the divisor (or higher).

```
   1011  (Dividend)
^  1100  (Divisor XORed with x^2, which is 11 << 2. Wait, this alignment is still confusing.)
```

A more standard approach for bit string division:
Let $D(x)$ be the dividend, $d(x)$ be the divisor.
Initialize $Q=0$, $R=D$.
For $i$ from degree($D$) down to degree($d$):
  If the $i$-th bit of $R$ is 1:
    $R = R \oplus (d \ll (i - \text{degree}(d)))$
    $Q = Q \oplus (1 \ll (i - \text{degree}(d)))$

Let's apply this to $D=1011$ (degree 3), $d=11$ (degree 1).
Degree($D$) = 3, Degree($d$) = 1.
Iterate $i$ from 3 down to 1.

*   **i = 3:** The 3rd bit of $R=1011$ is 1.
    $d \ll (3-1) = 11 \ll 2 = 1100$.
    $R = 1011 \oplus 1100 = 0111$.
    $Q = 0 \oplus (1 \ll (3-1)) = 0 \oplus 100 = 100$.

*   **i = 2:** The 2nd bit of $R=0111$ is 1.
    $d \ll (2-1) = 11 \ll 1 = 0110$.
    $R = 0111 \oplus 0110 = 0001$.
    $Q = 100 \oplus (1 \ll (2-1)) = 100 \oplus 010 = 110$.

*   **i = 1:** The 1st bit of $R=0001$ is 0. Do nothing.

Loop ends.
Final $Q = 110$ (which is $x^2+x$)
Final $R = 0001$ (which is $1$)

This matches the polynomial result. This algorithm is important for understanding polynomial division in fields.

**Reference:** Stallings, Chapter 3, may touch upon polynomial representations. Dummit & Foote provides detailed theory of polynomial rings and division algorithms. Forouzan's book is also a good resource for introductory cryptography concepts and might explain these operations.

---

### 3. Polynomials Over Finite Fields (GF(2^m))

While GF(2) is simple, many cryptographic applications (like AES) use polynomials over GF(2^m). This means the coefficients are elements of GF(2^m), and arithmetic is performed modulo an irreducible polynomial of degree $m$ over GF(2).

**Key Concepts:**

*   **Galois Field GF(p^m):** A finite field containing $p^m$ elements, where $p$ is a prime.
*   **GF(2^m):** A finite field with $2^m$ elements. Elements are typically represented as polynomials of degree at most $m-1$ with coefficients in GF(2).
*   **Irreducible Polynomial:** A polynomial that cannot be factored into polynomials of lower degree over the given field.
*   **Modular Arithmetic:** All operations are performed modulo an irreducible polynomial $P(x)$ of degree $m$. This means if a result has a degree greater than or equal to $m$, it is divided by $P(x)$, and the remainder is taken.

**Example (GF(2^3)):**
Let's work with GF(2^3). We need an irreducible polynomial of degree 3 over GF(2). A common one is $P(x) = x^3 + x + 1$.

Elements of GF(2^3) can be represented as polynomials of degree at most 2 with coefficients in GF(2). For example:
$0$
$1$
$x$
$x+1$
$x^2$
$x^2+1$
$x^2+x$
$x^2+x+1$

**Addition in GF(2^m):**
Addition is simply polynomial addition over GF(2) (bitwise XOR).

Let $A(x) = x^2 + 1$ and $B(x) = x^2 + x + 1$.
$A(x) + B(x) = (x^2 + 1) + (x^2 + x + 1)$
$A(x) + B(x) = (1+1)x^2 + (0+1)x + (1+1)$
$A(x) + B(x) = 0x^2 + 1x + 0 = x$

Bit string representation:
$A(x) = x^2 + 1 \rightarrow 101$
$B(x) = x^2 + x + 1 \rightarrow 111$

```
  101
^ 111
-----
  010
```
Result `010` represents $x$.

**Multiplication in GF(2^m):**
Multiplication is polynomial multiplication over GF(2), followed by reducing the result modulo $P(x)$.

Let $A(x) = x+1$ and $B(x) = x+1$ in GF(2^3) with $P(x) = x^3 + x + 1$.
We already found $A(x) \cdot B(x) = x^2 + 1$.
The degree of $x^2 + 1$ is 2, which is less than the degree of $P(x)$ (which is 3).
So, $A(x) \cdot B(x) \equiv x^2 + 1 \pmod{x^3+x+1}$. The result is $x^2+1$.

Let's take another example:
$A(x) = x^2$ and $B(x) = x+1$ in GF(2^3) with $P(x) = x^3 + x + 1$.
$A(x) \cdot B(x) = x^2 \cdot (x+1) = x^3 + x^2$.

Now, we must reduce $x^3 + x^2$ modulo $x^3 + x + 1$.
We can do this by substituting $x^3$ with $x+1$ (derived from $P(x) \equiv 0 \pmod{P(x)}$ implies $x^3+x+1 \equiv 0$, so $x^3 \equiv x+1$).

$(x^3 + x^2) \equiv (x+1) + x^2 \pmod{x^3+x+1}$
$\equiv x^2 + x + 1 \pmod{x^3+x+1}$

So, $x^2 \cdot (x+1) = x^2 + x + 1$ in GF(2^3) with $P(x) = x^3 + x + 1$.

Bit string representation:
$A(x) = x^2 \rightarrow 100$
$B(x) = x+1 \rightarrow 011$
$P(x) = x^3 + x + 1 \rightarrow 1011$

$A(x) \cdot B(x)$:
```
  100
x 011
-----
  100   (100 * 1)
 1000   (100 * x, shifted)
-----
 1100   (XORing results)
```
Result $1100$ represents $x^3 + x^2$.
Now, reduce $1100$ modulo $1011$ (which represents $x^3+x+1$).
Since the degree of $1100$ (3) is equal to the degree of $1011$ (3), we can perform XOR directly if the leading bits align (which they do).
$1100 \oplus 1011 = 0111$.

The result $0111$ represents $x^2 + x + 1$. This confirms the polynomial calculation.

**Reference:** Stallings Chapter 3, particularly sections related to AES, will implicitly use polynomial arithmetic in GF(2^m). Forouzan also explains these concepts. Dummit & Foote's book is the definitive reference for abstract algebra and finite fields. Stinson's book also covers finite fields extensively.

---

### 4. Importance in Cryptography

*   **AES (Advanced Encryption Standard):** Polynomial arithmetic in GF(2^8) is central to AES. The "MixColumns" and "ShiftRows" operations, as well as the key expansion, rely on these operations with specific irreducible polynomials.
*   **Error Correction Codes:** Polynomial arithmetic is fundamental in understanding and implementing error correction codes, which are often used in conjunction with secure communication systems to ensure data integrity.
*   **Elliptic Curve Cryptography (ECC):** While ECC primarily uses finite fields and point arithmetic, the underlying principles of modular arithmetic and field extensions can be related to polynomial concepts.
*   **Finite Field Arithmetic:** Provides a structured way to perform calculations with a finite number of elements, essential for many modern cryptographic algorithms.

**Reference:** Stallings, Chapter 5 (Symmetric Cipher Models) and Chapter 7 (Advanced Encryption Standard) will highlight the application of polynomial arithmetic in AES.

---

### 5. Practice Questions

**Question 1:**
Perform the following polynomial addition in GF(2):
$A(x) = x^4 + x^3 + x + 1$
$B(x) = x^3 + x^2 + 1$

**Question 2:**
Perform the following polynomial multiplication in GF(2):
$A(x) = x^2 + x$
$B(x) = x + 1$

**Question 3:**
Perform the following polynomial division in GF(2). Find the quotient and remainder when $x^5 + x^3 + x^2 + 1$ is divided by $x^2 + x + 1$.

**Question 4 (GF(2^3)):**
Let $P(x) = x^3 + x + 1$ be the irreducible polynomial for GF(2^3).
Calculate $A(x) \cdot B(x)$ in GF(2^3) where $A(x) = x$ and $B(x) = x^2 + 1$.

---

### 6. Answers to Practice Questions

**Answer 1:**
$A(x) = x^4 + x^3 + 0x^2 + x + 1$
$B(x) = 0x^4 + x^3 + x^2 + 0x + 1$

$A(x) + B(x) = (1+0)x^4 + (1+1)x^3 + (0+1)x^2 + (1+0)x + (1+1)$
$A(x) + B(x) = 1x^4 + 0x^3 + 1x^2 + 1x + 0$
$A(x) + B(x) = x^4 + x^2 + x$

**Answer 2:**
$A(x) \cdot B(x) = (x^2 + x)(x + 1)$
$A(x) \cdot B(x) = x^2(x+1) + x(x+1)$
$A(x) \cdot B(x) = (x^3 + x^2) + (x^2 + x)$
$A(x) \cdot B(x) = x^3 + (x^2 + x^2) + x$
$A(x) \cdot B(x) = x^3 + (1+1)x^2 + x$
$A(x) \cdot B(x) = x^3 + 0x^2 + x$
$A(x) \cdot B(x) = x^3 + x$

**Answer 3:**
Dividend: $x^5 + 0x^4 + x^3 + x^2 + 0x + 1$
Divisor: $x^2 + x + 1$

Using polynomial long division:

```
        x^3 + x^2 + 1   <-- Quotient
      _____________
x^2+x+1 | x^5 + 0x^4 + x^3 + x^2 + 0x + 1
        -(x^5 + x^4 + x^3)     <-- x^3 * (x^2+x+1)
        -----------------
              x^4 + 0x^3 + x^2
            -(x^4 + x^3 + x^2)     <-- x^2 * (x^2+x+1)
            -----------------
                  x^3 + 0x^2 + 0x
                -(x^3 + x^2 + x)     <-- x * (x^2+x+1)
                -----------------
                      x^2 + x + 1
                    -(x^2 + x + 1)     <-- 1 * (x^2+x+1)
                    ------------
                            0        <-- Remainder
```
Quotient: $x^3 + x^2 + x + 1$
Remainder: $0$

*Correction: Let's re-do the division carefully, as there was an error in the manual calculation steps.*

Dividend: $x^5 + 0x^4 + x^3 + x^2 + 0x + 1$ (101101)
Divisor: $x^2 + x + 1$ (111)

```
        x^3 + x^2 + 1   <-- Quotient (1101)
      _____________
111 | 101101
      111     <-- 100 * 111
      ---
      0101    <-- Remainder 1 (after XORing 101101 with 11100)
       111    <-- 10 * 111
       ---
       00101  <-- Remainder 2 (after XORing 010100 with 11100) -- This is where it gets tricky with manual alignment.

Let's use the algorithmic approach for bit strings:
D = 101101 (degree 5), d = 111 (degree 2). Iterate i from 5 down to 2.
R = 101101, Q = 0

*   **i = 5:** 5th bit of R (1) is 1.
    $d \ll (5-2) = 111 \ll 3 = 111000$.
    $R = 101101 \oplus 111000 = 010101$.
    $Q = 0 \oplus (1 \ll (5-2)) = 0 \oplus 1000 = 1000$.

*   **i = 4:** 4th bit of R (010101) is 0. Do nothing.

*   **i = 3:** 3rd bit of R (010101) is 1.
    $d \ll (3-2) = 111 \ll 1 = 01110$.
    $R = 010101 \oplus 01110 = 001011$.
    $Q = 1000 \oplus (1 \ll (3-2)) = 1000 \oplus 010 = 1110$.

*   **i = 2:** 2nd bit of R (001011) is 1.
    $d \ll (2-2) = 111 \ll 0 = 0111$.
    $R = 001011 \oplus 00111 = 000100$.
    $Q = 1110 \oplus (1 \ll (2-2)) = 1110 \oplus 001 = 1111$.

End loop.
Quotient $Q = 1111$ (which is $x^3+x^2+x+1$)
Remainder $R = 000100$ (which is $x^2$)

Let's verify:
$(x^3+x^2+x+1)(x^2+x+1) + x^2$
$= (x^5+x^4+x^3) + (x^4+x^3+x^2) + (x^3+x^2+x) + (x^2+x+1) + x^2$
$= x^5 + (1+1)x^4 + (1+1+1)x^3 + (1+1+1+1)x^2 + (1+1)x + 1$
$= x^5 + 0x^4 + 1x^3 + 0x^2 + 0x + 1$
$= x^5 + x^3 + 1$.

This does NOT match the original dividend $x^5 + x^3 + x^2 + 1$.
There might be an error in the manual XORing or the algorithm application.

Let's re-do polynomial long division:
Dividend: $x^5 + 0x^4 + x^3 + x^2 + 0x + 1$
Divisor: $x^2 + x + 1$

1.  ($x^5$) / ($x^2$) = $x^3$.
    $x^3(x^2+x+1) = x^5 + x^4 + x^3$.
    Subtract (XOR): $(x^5 + 0x^4 + x^3 + x^2 + 0x + 1) \oplus (x^5 + x^4 + x^3) = 0x^5 + x^4 + 0x^3 + x^2 + 0x + 1 = x^4 + x^2 + 1$.

2.  ($x^4$) / ($x^2$) = $x^2$.
    $x^2(x^2+x+1) = x^4 + x^3 + x^2$.
    Subtract (XOR): $(x^4 + 0x^3 + x^2 + 0x + 1) \oplus (x^4 + x^3 + x^2) = 0x^4 + x^3 + 0x^2 + 0x + 1 = x^3 + 1$.

3.  ($x^3$) / ($x^2$) = $x$.
    $x(x^2+x+1) = x^3 + x^2 + x$.
    Subtract (XOR): $(x^3 + 0x^2 + 0x + 1) \oplus (x^3 + x^2 + x) = 0x^3 + x^2 + x + 1 = x^2 + x + 1$.

4.  ($x^2$) / ($x^2$) = $1$.
    $1(x^2+x+1) = x^2 + x + 1$.
    Subtract (XOR): $(x^2 + x + 1) \oplus (x^2 + x + 1) = 0$.

Quotient = $x^3 + x^2 + x + 1$
Remainder = $0$

**Final Answer for Question 3:**
Quotient: $x^3 + x^2 + x + 1$
Remainder: $0$

**Answer 4:**
$A(x) = x$ (0010)
$B(x) = x^2 + 1$ (101)
$P(x) = x^3 + x + 1$ (1011)

$A(x) \cdot B(x) = x \cdot (x^2 + 1) = x^3 + x$.
In bit strings: $1010$.
Degree of $x^3+x$ is 3. Degree of $P(x)$ is 3.
We need to reduce $x^3+x$ modulo $x^3+x+1$.
$x^3+x \pmod{x^3+x+1}$.
From $P(x) \equiv 0 \pmod{P(x)}$, we have $x^3 + x + 1 \equiv 0$, so $x^3 \equiv x+1$.
Substitute: $(x+1) + x = 2x+1 \equiv 1 \pmod 2$.

Let's use the substitution method with bit strings. $x^3 \equiv x+1$ (1011 $\rightarrow$ $x^3 \equiv x+1$).
$A(x) \cdot B(x) = x^3 + x$ (1010)
Substitute $x^3$ with $x+1$ (0011):
$1010 \oplus 0011 = 1001$.

Result is $1001$, which represents $x^3 + 1$.
*Wait, this is also wrong. The substitution $x^3 \equiv x+1$ works if the original polynomial is >= degree of P(x). Here, $x^3+x$ has degree 3 which is equal to P(x). So, we do a direct XOR.*

$1010$ (for $x^3+x$)
$1011$ (for $x^3+x+1$)

Since the degrees are the same, we XOR them if the leading bits are the same.
$1010 \oplus 1011 = 0001$.

Result $0001$, which is $1$.

Let's re-verify the polynomial calculation:
$x^3 + x \pmod{x^3+x+1}$
We want to find $Q(x)$ and $R(x)$ such that $x^3+x = Q(x)(x^3+x+1) + R(x)$, with degree($R(x)$) < 3.
If $Q(x)=1$, then $1 \cdot (x^3+x+1) = x^3+x+1$.
$x^3+x = 1 \cdot (x^3+x+1) + R(x)$
$x^3+x = x^3+x+1 + R(x)$
$0 = 1 + R(x) \implies R(x) = 1$.

So $x^3 + x \equiv 1 \pmod{x^3+x+1}$.
The result is $1$.

**Final Answer for Question 4:**
$A(x) \cdot B(x) = 1$

---

### 7. Important Points to Remember

*   **GF(2) Operations:** Addition and subtraction are the same (XOR). Multiplication involves standard polynomial multiplication followed by modulo 2 coefficient addition.
*   **Bit String Representation:** Polynomials in GF(2) can be represented as bit strings, where XOR performs addition.
*   **GF(2^m) Operations:** Multiplication involves polynomial multiplication over GF(2) followed by reduction modulo an irreducible polynomial $P(x)$ of degree $m$.
*   **Irreducible Polynomials:** Crucial for defining finite fields and ensuring unique results in modular arithmetic.
*   **AES:** Relies heavily on polynomial arithmetic in GF(2^8).

---

### 8. Alignment with Course Outcomes

*   **CO1: Explain network security services and mechanisms and the types of attacks they are designed for and apply the concepts of modular arithmetic, Euclidean algorithm, polynomial arithmetic. (Knowledge Level: K3)**
    *   This topic directly addresses the "apply the concepts of... polynomial arithmetic" part of CO1. Understanding these operations is essential for applying them in cryptographic contexts. The "K3" level suggests students should be able to use these concepts, which the examples and practice questions aim to facilitate.

This concludes the study notes for Polynomial Arithmetic.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
