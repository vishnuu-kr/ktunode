---
title: "Modular Arithmetic – Operations, Properties"
subject: "FOUNDATIONS OF CRYPTOGRAPHY"
module: "Module 1: Integer Arithmetic – Divisibility"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf07"
status: "completed"
scrapedAt: "2026-05-20T16:53:29.054Z"
---
# Foundations of Cryptography: Module 1 - Integer Arithmetic - Divisibility

## Topic: Modular Arithmetic – Operations, Properties

### 1. Introduction to Modular Arithmetic

Modular arithmetic is a system of arithmetic for integers, where numbers "wrap around" upon reaching a certain value—the modulus. It's a fundamental tool in cryptography, particularly for operations involving finite fields and the design of algorithms like RSA.

**Key Concept:** Congruence

*   **Definition:** For integers $a$, $b$, and a positive integer $m$, we say $a$ is **congruent to** $b$ **modulo** $m$, denoted as $a \equiv b \pmod{m}$, if $m$ divides the difference $(a-b)$.
*   **Equivalently:** $a \equiv b \pmod{m}$ if $a = b + km$ for some integer $k$.
*   **Equivalently:** $a \equiv b \pmod{m}$ if $a$ and $b$ have the same remainder when divided by $m$.

**Important Points to Remember:**

*   The modulus $m$ is always a positive integer.
*   The symbol "$\equiv$" is used for congruence, not "=".
*   $a \equiv a \pmod{m}$ (Reflexive property).
*   If $a \equiv b \pmod{m}$, then $b \equiv a \pmod{m}$ (Symmetric property).
*   If $a \equiv b \pmod{m}$ and $b \equiv c \pmod{m}$, then $a \equiv c \pmod{m}$ (Transitive property).

**Example:**

*   $17 \equiv 2 \pmod{5}$ because $5$ divides $(17-2) = 15$.
*   $17 = 2 + 3 \times 5$.
*   $17$ divided by $5$ is $3$ with a remainder of $2$. $2$ divided by $5$ is $0$ with a remainder of $2$.

**Terminology:**

*   **Residue:** The remainder when an integer is divided by the modulus.
*   **Complete Residue System (mod m):** A set of $m$ integers, no two of which are congruent modulo $m$. The most common is the set $\{0, 1, 2, \dots, m-1\}$.
*   **Least Non-negative Residue:** The remainder $r$ such that $0 \le r < m$.

### 2. Modular Operations

Modular arithmetic defines operations for addition, subtraction, and multiplication that are consistent with standard arithmetic.

#### 2.1. Modular Addition

*   **Definition:** If $a \equiv a' \pmod{m}$ and $b \equiv b' \pmod{m}$, then $a + b \equiv a' + b' \pmod{m}$.
*   **Operation:** To find $(a+b) \pmod{m}$, we can compute $a \pmod{m}$ and $b \pmod{m}$ first, add these residues, and then take the modulus of the sum.

**Example:**

Calculate $(15 + 22) \pmod{7}$.

*   Method 1: $(15 + 22) \pmod{7} = 37 \pmod{7}$.
    $37 = 5 \times 7 + 2$, so $37 \equiv 2 \pmod{7}$.
*   Method 2:
    $15 \equiv 1 \pmod{7}$ (since $15 = 2 \times 7 + 1$)
    $22 \equiv 1 \pmod{7}$ (since $22 = 3 \times 7 + 1$)
    $(15 + 22) \equiv (1 + 1) \pmod{7}$
    $15 + 22 \equiv 2 \pmod{7}$.

#### 2.2. Modular Subtraction

*   **Definition:** If $a \equiv a' \pmod{m}$ and $b \equiv b' \pmod{m}$, then $a - b \equiv a' - b' \pmod{m}$.
*   **Operation:** To find $(a-b) \pmod{m}$, we can compute $a \pmod{m}$ and $b \pmod{m}$ first, subtract these residues, and then take the modulus of the difference. Be mindful of negative results; always add the modulus to bring it into the range $[0, m-1]$.

**Example:**

Calculate $(15 - 22) \pmod{7}$.

*   Method 1: $(15 - 22) \pmod{7} = -7 \pmod{7}$.
    $-7 = -1 \times 7 + 0$, so $-7 \equiv 0 \pmod{7}$.
*   Method 2:
    $15 \equiv 1 \pmod{7}$
    $22 \equiv 1 \pmod{7}$
    $(15 - 22) \equiv (1 - 1) \pmod{7}$
    $15 - 22 \equiv 0 \pmod{7}$.

**Example with negative intermediate result:**

Calculate $(10 - 18) \pmod{12}$.

*   $10 \equiv 10 \pmod{12}$
*   $18 \equiv 6 \pmod{12}$ (since $18 = 1 \times 12 + 6$)
*   $(10 - 18) \equiv (10 - 6) \pmod{12}$
*   $10 - 18 \equiv 4 \pmod{12}$.

If we didn't reduce first:
$(10 - 18) \pmod{12} = -8 \pmod{12}$.
To find the equivalent positive residue: $-8 + 12 = 4$.
So, $-8 \equiv 4 \pmod{12}$.

#### 2.3. Modular Multiplication

*   **Definition:** If $a \equiv a' \pmod{m}$ and $b \equiv b' \pmod{m}$, then $a \times b \equiv a' \times b' \pmod{m}$.
*   **Operation:** To find $(a \times b) \pmod{m}$, we can compute $a \pmod{m}$ and $b \pmod{m}$ first, multiply these residues, and then take the modulus of the product.

**Example:**

Calculate $(15 \times 22) \pmod{7}$.

*   Method 1: $(15 \times 22) \pmod{7} = 330 \pmod{7}$.
    $330 \div 7$: $330 = 47 \times 7 + 1$. So, $330 \equiv 1 \pmod{7}$.
*   Method 2:
    $15 \equiv 1 \pmod{7}$
    $22 \equiv 1 \pmod{7}$
    $(15 \times 22) \equiv (1 \times 1) \pmod{7}$
    $15 \times 22 \equiv 1 \pmod{7}$.

**Example with larger numbers:**

Calculate $(25 \times 37) \pmod{11}$.

*   $25 \equiv 3 \pmod{11}$ (since $25 = 2 \times 11 + 3$)
*   $37 \equiv 4 \pmod{11}$ (since $37 = 3 \times 11 + 4$)
*   $(25 \times 37) \equiv (3 \times 4) \pmod{11}$
*   $25 \times 37 \equiv 12 \pmod{11}$
*   $12 \equiv 1 \pmod{11}$ (since $12 = 1 \times 11 + 1$)
*   Therefore, $(25 \times 37) \equiv 1 \pmod{11}$.

### 3. Properties of Modular Arithmetic

Modular arithmetic operations exhibit properties analogous to standard arithmetic, which are crucial for algebraic manipulation in cryptographic algorithms.

#### 3.1. Properties of Congruence

These properties, mentioned earlier, are foundational:

*   **Reflexive:** $a \equiv a \pmod{m}$
*   **Symmetric:** If $a \equiv b \pmod{m}$, then $b \equiv a \pmod{m}$
*   **Transitive:** If $a \equiv b \pmod{m}$ and $b \equiv c \pmod{m}$, then $a \equiv c \pmod{m}$

#### 3.2. Properties of Modular Operations (Under Addition and Multiplication)

Let $m$ be a positive integer, and let $a, b, c$ be integers.

**Properties under Addition:**

*   **Closure:** If $a \equiv b \pmod{m}$ and $c \equiv d \pmod{m}$, then $(a+c) \equiv (b+d) \pmod{m}$.
    *   *This is the definition of modular addition itself.*
*   **Commutativity:** $(a+b) \equiv (b+a) \pmod{m}$.
*   **Associativity:** $(a+b)+c \equiv a+(b+c) \pmod{m}$.
*   **Identity Element:** $a+0 \equiv a \pmod{m}$. The additive identity is $0$.
*   **Inverse Element:** For every $a$, there exists $a'$ such that $a+a' \equiv 0 \pmod{m}$. This $a'$ is $-a \pmod{m}$.
    *   For example, modulo 7, the additive inverse of 3 is 4, because $3+4 \equiv 7 \equiv 0 \pmod{7}$.

**Properties under Multiplication:**

*   **Closure:** If $a \equiv b \pmod{m}$ and $c \equiv d \pmod{m}$, then $(a \times c) \equiv (b \times d) \pmod{m}$.
    *   *This is the definition of modular multiplication itself.*
*   **Commutativity:** $(a \times b) \equiv (b \times a) \pmod{m}$.
*   **Associativity:** $(a \times b) \times c \equiv a \times (b \times c) \pmod{m}$.
*   **Identity Element:** $a \times 1 \equiv a \pmod{m}$. The multiplicative identity is $1$.
*   **Distributivity:** $a \times (b+c) \equiv (a \times b) + (a \times c) \pmod{m}$.

**Important Point to Remember:**

*   Division is not generally defined in modular arithmetic in the same way as standard arithmetic. For example, $2 \times 3 \equiv 2 \times 5 \pmod{4}$ (both sides are $6 \equiv 2 \pmod{4}$), but $3 \not\equiv 5 \pmod{4}$. You cannot simply "cancel" the $2$. Division is only possible if you multiply by a **modular multiplicative inverse**, which we will cover in later modules.

### 4. Modular Exponentiation

Modular exponentiation is computing $a^b \pmod{m}$. This is a core operation in many cryptographic algorithms, like Diffie-Hellman and RSA. Direct computation of $a^b$ can result in astronomically large numbers, so modular arithmetic is used to keep the intermediate results manageable.

**Key Idea:** Repeated Squaring and Multiplication

We can efficiently compute $a^b \pmod{m}$ by using the properties of exponents and modular arithmetic.

*   If $b$ is even, $b=2k$: $a^b = a^{2k} = (a^k)^2$.
*   If $b$ is odd, $b=2k+1$: $a^b = a^{2k+1} = a \times a^{2k} = a \times (a^k)^2$.

We can apply the modulus at each step to prevent numbers from becoming too large.

**Algorithm (Illustrative Example): Calculate $3^8 \pmod{7}$**

1.  $3^1 \equiv 3 \pmod{7}$
2.  $3^2 = (3^1)^2 \equiv 3^2 \equiv 9 \equiv 2 \pmod{7}$
3.  $3^4 = (3^2)^2 \equiv 2^2 \equiv 4 \pmod{7}$
4.  $3^8 = (3^4)^2 \equiv 4^2 \equiv 16 \equiv 2 \pmod{7}$

So, $3^8 \equiv 2 \pmod{7}$.

**Algorithm (Illustrative Example): Calculate $3^{10} \pmod{7}$**

We can write the exponent $b$ in binary. $10$ in binary is $1010_2$.
$10 = 1 \times 2^3 + 0 \times 2^2 + 1 \times 2^1 + 0 \times 2^0 = 8 + 2$.
So, $3^{10} = 3^{8+2} = 3^8 \times 3^2$.

We already calculated:
*   $3^8 \equiv 2 \pmod{7}$
*   $3^2 \equiv 2 \pmod{7}$

Therefore, $3^{10} \equiv 3^8 \times 3^2 \equiv 2 \times 2 \equiv 4 \pmod{7}$.

**Efficient Binary Exponentiation (Square-and-Multiply Algorithm)**

To calculate $a^b \pmod{m}$:

1.  Initialize `result = 1`.
2.  Initialize `base = a % m`.
3.  While $b > 0$:
    *   If $b$ is odd (i.e., $b \% 2 == 1$), then `result = (result * base) % m`.
    *   `base = (base * base) % m`.
    *   `b = b // 2` (integer division).
4.  Return `result`.

**Example: Calculate $3^{13} \pmod{10}$**

$a = 3, b = 13, m = 10$.
Binary of $13$ is $1101_2$.

| b (Decimal) | b (Binary) | b % 2 | result        | base          | Operation                               |
| :---------- | :--------- | :---- | :------------ | :------------ | :-------------------------------------- |
| 13          | 1101       | 1     | 1             | 3             | Initial                                 |
| 13          | 1101       | 1     | (1 * 3) % 10 = 3 | 3             | b is odd, result = (result * base) % m |
| 6           | 110        | 0     | 3             | (3 * 3) % 10 = 9 | base = (base * base) % m                |
| 3           | 11         | 1     | (3 * 9) % 10 = 27 % 10 = 7 | 9 | b is odd, result = (result * base) % m |
| 1           | 1          | 1     | (7 * 9) % 10 = 63 % 10 = 3 | (9 * 9) % 10 = 81 % 10 = 1 | base = (base * base) % m |
| 0           | 0          |       | 3             | 1             | b is odd, result = (result * base) % m |

The loop terminates. The result is $3$.

Let's verify: $3^{13} = 1594323$.
$1594323 \pmod{10} = 3$. Correct.

**Important Point to Remember:**

*   Modular exponentiation is a critical building block for modern cryptography. Efficient algorithms like binary exponentiation are essential to make these systems practical.

### 5. Practice Questions

1.  **Definition:** What does $a \equiv b \pmod{m}$ mean?
2.  **Calculation:** Calculate $(45 + 67) \pmod{12}$.
3.  **Calculation:** Calculate $(23 - 51) \pmod{10}$.
4.  **Calculation:** Calculate $(18 \times 25) \pmod{7}$.
5.  **Modular Exponentiation:** Calculate $5^7 \pmod{11}$ using modular arithmetic properties.
6.  **Modular Exponentiation:** Calculate $7^{20} \pmod{13}$ using the square-and-multiply algorithm.
7.  **Property:** Is modular multiplication associative? Explain why or why not.
8.  **Property:** If $a \equiv b \pmod{m}$, does $a \times c \equiv b \times c \pmod{m}$ hold? If so, why?

---

### Answers to Practice Questions

1.  **Definition:** $a \equiv b \pmod{m}$ means that $m$ divides the difference $(a-b)$, or equivalently, $a$ and $b$ have the same remainder when divided by $m$.
2.  **Calculation:**
    $(45 + 67) \pmod{12} = 112 \pmod{12}$
    $112 = 9 \times 12 + 4$
    So, $112 \equiv 4 \pmod{12}$.
    Alternatively:
    $45 \equiv 9 \pmod{12}$ (since $45 = 3 \times 12 + 9$)
    $67 \equiv 7 \pmod{12}$ (since $67 = 5 \times 12 + 7$)
    $(45 + 67) \equiv (9 + 7) \pmod{12} \equiv 16 \pmod{12}$
    $16 \equiv 4 \pmod{12}$.
3.  **Calculation:**
    $(23 - 51) \pmod{10} = -28 \pmod{10}$
    $-28 = -3 \times 10 + 2$
    So, $-28 \equiv 2 \pmod{10}$.
    Alternatively:
    $23 \equiv 3 \pmod{10}$
    $51 \equiv 1 \pmod{10}$
    $(23 - 51) \equiv (3 - 1) \pmod{10} \equiv 2 \pmod{10}$.
4.  **Calculation:**
    $(18 \times 25) \pmod{7}$
    $18 \equiv 4 \pmod{7}$ (since $18 = 2 \times 7 + 4$)
    $25 \equiv 4 \pmod{7}$ (since $25 = 3 \times 7 + 4$)
    $(18 \times 25) \equiv (4 \times 4) \pmod{7} \equiv 16 \pmod{7}$
    $16 \equiv 2 \pmod{7}$.
5.  **Modular Exponentiation:** Calculate $5^7 \pmod{11}$.
    $5^1 \equiv 5 \pmod{11}$
    $5^2 \equiv 5^2 \equiv 25 \equiv 3 \pmod{11}$
    $5^4 \equiv (5^2)^2 \equiv 3^2 \equiv 9 \pmod{11}$
    $5^7 = 5^{4+2+1} = 5^4 \times 5^2 \times 5^1$
    $5^7 \equiv 9 \times 3 \times 5 \pmod{11}$
    $5^7 \equiv 27 \times 5 \pmod{11}$
    $5^7 \equiv 5 \times 5 \pmod{11}$ (since $27 \equiv 5 \pmod{11}$)
    $5^7 \equiv 25 \pmod{11}$
    $5^7 \equiv 3 \pmod{11}$.
6.  **Modular Exponentiation:** Calculate $7^{20} \pmod{13}$ using the square-and-multiply algorithm.
    $a = 7, b = 20, m = 13$.
    Binary of $20$ is $10100_2$.

    | b (Decimal) | b (Binary) | b % 2 | result | base          | Operation                               |
    | :---------- | :--------- | :---- | :----- | :------------ | :-------------------------------------- |
    | 20          | 10100      | 0     | 1      | 7             | Initial                                 |
    | 10          | 1010       | 0     | 1      | (7 * 7) % 13 = 49 % 13 = 10 | base = (base * base) % m                |
    | 5           | 101        | 1     | (1 * 10) % 13 = 10 | 10            | b is odd, result = (result * base) % m |
    | 2           | 10         | 0     | 10     | (10 * 10) % 13 = 100 % 13 = 9 | base = (base * base) % m                |
    | 1           | 1          | 1     | (10 * 9) % 13 = 90 % 13 = 12 | 9             | b is odd, result = (result * base) % m |
    | 0           | 0          |       | 12     | (9 * 9) % 13 = 81 % 13 = 3  | base = (base * base) % m                |

    The loop terminates. The result is $12$.
    So, $7^{20} \equiv 12 \pmod{13}$.
7.  **Property:** Yes, modular multiplication is associative. This means that for integers $a, b, c$ and modulus $m$, $(a \times b) \times c \equiv a \times (b \times c) \pmod{m}$. This property holds because the underlying standard multiplication is associative, and the modular reduction preserves this property.
8.  **Property:** Yes, if $a \equiv b \pmod{m}$, then $a \times c \equiv b \times c \pmod{m}$ for any integer $c$. This is a fundamental property of congruences. If $a \equiv b \pmod{m}$, then $a = b + km$ for some integer $k$. Multiplying by $c$: $ac = bc + kcm$. Since $m$ divides $kcm$, it follows that $ac \equiv bc \pmod{m}$.

---

### Summary of Key Concepts and Takeaways

*   **Congruence:** The core concept of modular arithmetic.
*   **Residues:** The remainders modulo $m$.
*   **Modular Operations:** Addition, subtraction, and multiplication are well-defined and follow rules similar to regular arithmetic, with results always kept within the range $[0, m-1]$.
*   **Properties:** Modular arithmetic exhibits closure, commutativity, associativity, and distributivity for addition and multiplication.
*   **Modular Exponentiation:** Efficiently computed using binary exponentiation (square-and-multiply) to handle large exponents without generating huge intermediate numbers.
*   **No Division (Generally):** Direct division is not a standard operation. The concept of a modular multiplicative inverse is required for this, which will be covered later.

This understanding of modular arithmetic forms the bedrock for more advanced cryptographic concepts and algorithms.
