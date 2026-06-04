---
title: "Finite Fields: -Groups"
subject: "SECURE COMMUNICATION"
module: "Module 1: Introduction and Classic Encryption Techniques:"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fee72"
status: "completed"
scrapedAt: "2026-05-23T18:02:52.081Z"
---
# SECURE COMMUNICATION: Module 1: Introduction and Classic Encryption Techniques

## Topic: Finite Fields: Groups

### Learning Outcomes:

*   Understand the fundamental properties of groups in abstract algebra.
*   Recognize how group theory applies to the study of finite fields.
*   Appreciate the role of groups in cryptographic algorithms.

---

### 1. Introduction to Groups

The concept of a group is a cornerstone of abstract algebra and has significant applications in cryptography, particularly in the study of finite fields. A group provides a structured framework for understanding operations and their properties.

#### 1.1. Definition of a Group

A **group** is a set $G$ together with a binary operation $*$ that satisfies the following four axioms:

1.  **Closure:** For all $a, b \in G$, the result of the operation $a * b$ is also in $G$.
2.  **Associativity:** For all $a, b, c \in G$, $(a * b) * c = a * (b * c)$.
3.  **Identity Element:** There exists an element $e \in G$, called the identity element, such that for all $a \in G$, $a * e = e * a = a$.
4.  **Inverse Element:** For each $a \in G$, there exists an element $a^{-1} \in G$, called the inverse of $a$, such that $a * a^{-1} = a^{-1} * a = e$.

**Example:**

*   The set of integers $\mathbb{Z}$ with the operation of addition (+) forms a group.
    *   **Closure:** The sum of two integers is an integer.
    *   **Associativity:** $(a+b)+c = a+(b+c)$ for integers $a, b, c$.
    *   **Identity Element:** 0 is the identity element ($a+0 = 0+a = a$).
    *   **Inverse Element:** For any integer $a$, its inverse is $-a$ (since $a+(-a) = (-a)+a = 0$).

#### 1.2. Types of Groups

*   **Abelian Group (Commutative Group):** A group $(G, *)$ is called an **abelian group** if the operation $*$ is also commutative, meaning for all $a, b \in G$, $a * b = b * a$.

    **Example:** The set of integers $\mathbb{Z}$ with addition is an abelian group because $a+b = b+a$.

*   **Non-Abelian Group:** A group that is not abelian is called a non-abelian group.

    **Example:** The set of invertible $n \times n$ matrices with matrix multiplication forms a non-abelian group for $n > 1$.

#### 1.3. Important Group Concepts

*   **Order of a Group:** The **order** of a group $G$, denoted by $|G|$, is the number of elements in the set $G$.
    *   **Finite Group:** A group with a finite number of elements.
    *   **Infinite Group:** A group with an infinite number of elements.

*   **Order of an Element:** The **order** of an element $a \in G$ is the smallest positive integer $n$ such that $a^n = e$ (where $a^n = a * a * \dots * a$ ($n$ times)). If no such positive integer exists, the element has infinite order.

*   **Subgroup:** A subset $H$ of a group $G$ is a **subgroup** of $G$ if $H$ itself forms a group under the same operation as $G$.

    **Conditions for a non-empty subset $H$ to be a subgroup of $G$:**
    1.  **Closure:** For all $a, b \in H$, $a * b \in H$.
    2.  **Inverse:** For all $a \in H$, $a^{-1} \in H$.

#### 1.4. Lagrange's Theorem

**Lagrange's Theorem** states that for any finite group $G$ and any subgroup $H$ of $G$, the order of $H$ divides the order of $G$. That is, $|H|$ divides $|G|$.

**Implication:** For any element $a$ in a finite group $G$, the order of $a$ divides the order of $G$. This means $a^{|G|} = e$.

---

### 2. Groups Relevant to Finite Fields and Cryptography

While this module focuses on the introduction to groups, it's crucial to understand their connection to finite fields, which are fundamental in modern cryptography (e.g., AES, Elliptic Curve Cryptography). Finite fields are constructed using structures that often involve groups.

#### 2.1. Multiplicative Group of Integers Modulo n, denoted $(\mathbb{Z}_n^*, \times)$

*   **Set:** $\mathbb{Z}_n^* = \{a \in \{1, 2, \dots, n-1\} \mid \gcd(a, n) = 1\}$. This set contains all integers between 1 and $n-1$ that are relatively prime to $n$.
*   **Operation:** Multiplication modulo $n$ ($\times$).

*   **Why it forms a group:**
    1.  **Closure:** If $\gcd(a, n) = 1$ and $\gcd(b, n) = 1$, then $\gcd(a \times b, n) = 1$.
    2.  **Associativity:** Multiplication modulo $n$ is associative. $((a \times b) \times c) \pmod n = (a \times (b \times c)) \pmod n$.
    3.  **Identity Element:** The identity element is 1, since $a \times 1 \equiv a \pmod n$ for all $a \in \mathbb{Z}_n^*$.
    4.  **Inverse Element:** For every $a \in \mathbb{Z}_n^*$, there exists an inverse $a^{-1} \in \mathbb{Z}_n^*$ such that $a \times a^{-1} \equiv 1 \pmod n$. This inverse can be found using the Extended Euclidean Algorithm.

*   **Order of the group $(\mathbb{Z}_n^*, \times)$:** The order of this group is given by Euler's totient function, $\phi(n)$.

**Example:** $(\mathbb{Z}_{10}^*, \times)$

*   $\mathbb{Z}_{10}^* = \{1, 3, 7, 9\}$ because these are the numbers between 1 and 9 that are relatively prime to 10.
*   **Closure:**
    *   $3 \times 7 = 21 \equiv 1 \pmod{10}$.
    *   $7 \times 9 = 63 \equiv 3 \pmod{10}$.
    *   All results are in $\mathbb{Z}_{10}^*$.
*   **Associativity:** Holds for multiplication modulo 10.
*   **Identity Element:** 1.
*   **Inverse Elements:**
    *   Inverse of 1 is 1 ($1 \times 1 \equiv 1 \pmod{10}$).
    *   Inverse of 3 is 7 ($3 \times 7 \equiv 1 \pmod{10}$).
    *   Inverse of 7 is 3 ($7 \times 3 \equiv 1 \pmod{10}$).
    *   Inverse of 9 is 9 ($9 \times 9 = 81 \equiv 1 \pmod{10}$).
*   **Order of the group:** $\phi(10) = 10(1 - 1/2)(1 - 1/5) = 10(1/2)(4/5) = 4$. The elements are $\{1, 3, 7, 9\}$.

**Connection to Cryptography:** The difficulty of the discrete logarithm problem in $(\mathbb{Z}_p^*, \times)$ (where $p$ is a large prime) is a foundation for public-key cryptosystems like Diffie-Hellman key exchange and ElGamal.

#### 2.2. Additive Group of Integers Modulo n, denoted $(\mathbb{Z}_n, +)$

*   **Set:** $\mathbb{Z}_n = \{0, 1, 2, \dots, n-1\}$.
*   **Operation:** Addition modulo $n$ (+).

*   **Why it forms a group:**
    1.  **Closure:** The sum of two integers modulo $n$ is an integer modulo $n$.
    2.  **Associativity:** Addition modulo $n$ is associative.
    3.  **Identity Element:** 0 is the identity element, since $a + 0 \equiv a \pmod n$.
    4.  **Inverse Element:** For each $a \in \mathbb{Z}_n$, its inverse is $(n-a) \pmod n$, since $a + (n-a) \equiv n \equiv 0 \pmod n$.

*   **Order of the group $(\mathbb{Z}_n, +)$:** The order of this group is $n$.
*   **Is it Abelian?** Yes, addition modulo $n$ is commutative ($a+b \equiv b+a \pmod n$).

**Example:** $(\mathbb{Z}_5, +)$

*   $\mathbb{Z}_5 = \{0, 1, 2, 3, 4\}$
*   **Closure:** All sums modulo 5 are in $\mathbb{Z}_5$.
*   **Associativity:** Holds for addition modulo 5.
*   **Identity Element:** 0.
*   **Inverse Elements:**
    *   Inverse of 0 is 0.
    *   Inverse of 1 is 4 ($1+4 \equiv 0 \pmod 5$).
    *   Inverse of 2 is 3 ($2+3 \equiv 0 \pmod 5$).
    *   Inverse of 3 is 2.
    *   Inverse of 4 is 1.
*   **Order of the group:** 5.

**Connection to Cryptography:** While $(\mathbb{Z}_n, +)$ itself is not as directly used in public-key cryptography as $(\mathbb{Z}_p^*, \times)$, the underlying arithmetic and group properties are foundational for understanding operations in finite fields. Additive groups are crucial for operations within the additive structure of finite fields.

---

### 3. Application in Cryptography (Overview for Module 1)

Groups are fundamental building blocks for many cryptographic algorithms. Understanding group properties allows us to:

*   **Design Symmetric Ciphers:** Operations within groups can be used to permute and transform data in a reversible manner.
*   **Develop Public-Key Cryptosystems:** The difficulty of certain group-theoretic problems (like the discrete logarithm problem or the Diffie-Hellman problem) forms the security basis for systems like RSA, Diffie-Hellman, and Elliptic Curve Cryptography.
*   **Ensure Reversibility:** The existence of inverse elements in a group guarantees that decryption operations can reverse the encryption process.

**Example Mentioned in Textbooks (Stallings, Forouzan):**

*   **Stallings (4th Edition):** Discusses the importance of cyclic groups and modular arithmetic in the context of Diffie-Hellman key exchange, which relies on the group $(\mathbb{Z}_p^*, \times)$. He also covers the basic properties of groups as a prerequisite for understanding these systems.
*   **Forouzan (2008):** Likely covers similar ground, introducing the algebraic structures like groups and fields as foundations for modern cryptography.

---

### 4. Practice Questions and Answers

**Question 1:**
Which of the following sets with the given operations form a group?
a) The set of even integers with addition.
b) The set of non-zero rational numbers with multiplication.
c) The set of all $2 \times 2$ matrices with real entries and determinant 1, with matrix multiplication.
d) The set of integers $\{0, 1\}$ with multiplication modulo 2.

**Answer:**
a) **Yes.**
    *   Closure: Sum of two even integers is even.
    *   Associativity: Addition is associative.
    *   Identity: 0 is the identity element.
    *   Inverse: For any even integer $a$, its inverse is $-a$, which is also even.

b) **Yes.** The set of non-zero rational numbers with multiplication forms an abelian group.
    *   Closure: Product of two non-zero rationals is a non-zero rational.
    *   Associativity: Multiplication is associative.
    *   Identity: 1 is the identity element.
    *   Inverse: For any non-zero rational $p/q$, its inverse is $q/p$.

c) **Yes.** This forms the special linear group $SL(2, \mathbb{R})$, which is a non-abelian group.
    *   Closure: Product of two matrices with determinant 1 has determinant 1.
    *   Associativity: Matrix multiplication is associative.
    *   Identity: The identity matrix $\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ has determinant 1.
    *   Inverse: The inverse of an invertible matrix with determinant 1 also has determinant 1.

d) **No.** The element 0 does not have a multiplicative inverse modulo 2 (since $0 \times x \equiv 0 \pmod 2$ for any $x$, and $0 \neq 1 \pmod 2$).

**Question 2:**
Consider the group $(\mathbb{Z}_{11}^*, \times)$.
a) List all elements of this group.
b) What is the order of the group?
c) Find the inverse of 3 modulo 11.
d) Find the order of the element 5 in this group.

**Answer:**
a) The elements are the integers between 1 and 10 that are relatively prime to 11. Since 11 is prime, all integers from 1 to 10 are relatively prime to 11. So, $\mathbb{Z}_{11}^* = \{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\}$.

b) The order of the group is the number of elements, which is 10. This is also $\phi(11) = 10$ since 11 is prime.

c) We need to find $x$ such that $3 \times x \equiv 1 \pmod{11}$.
    *   $3 \times 1 = 3$
    *   $3 \times 2 = 6$
    *   $3 \times 3 = 9$
    *   $3 \times 4 = 12 \equiv 1 \pmod{11}$.
    So, the inverse of 3 modulo 11 is 4.

d) We need to find the smallest positive integer $n$ such that $5^n \equiv 1 \pmod{11}$.
    *   $5^1 \equiv 5 \pmod{11}$
    *   $5^2 = 25 \equiv 3 \pmod{11}$
    *   $5^3 \equiv 5 \times 3 = 15 \equiv 4 \pmod{11}$
    *   $5^4 \equiv 5 \times 4 = 20 \equiv 9 \pmod{11}$
    *   $5^5 \equiv 5 \times 9 = 45 \equiv 1 \pmod{11}$
    The order of the element 5 is 5. Note that 5 divides the order of the group (10), which is consistent with Lagrange's Theorem.

**Question 3:**
Show that the set $\{0, 1, 2, 3, 4, 5\}$ with addition modulo 6 forms an abelian group.

**Answer:**
Let $G = \{0, 1, 2, 3, 4, 5\}$ and the operation be addition modulo 6.
1.  **Closure:** The sum of any two elements in $G$ modulo 6 results in an element within $G$. For example, $3+4 = 7 \equiv 1 \pmod 6$.
2.  **Associativity:** Addition modulo 6 is associative. For any $a, b, c \in G$, $(a+b) \pmod 6 + c \pmod 6 \equiv a + (b+c) \pmod 6$.
3.  **Identity Element:** The element 0 is the identity element, since $a+0 \equiv a \pmod 6$ for all $a \in G$.
4.  **Inverse Element:** For each element $a \in G$, there is an inverse $(6-a) \pmod 6$ such that $a + (6-a) \pmod 6 \equiv 0 \pmod 6$.
    *   Inverse of 0 is 0.
    *   Inverse of 1 is 5.
    *   Inverse of 2 is 4.
    *   Inverse of 3 is 3.
    *   Inverse of 4 is 2.
    *   Inverse of 5 is 1.
    All inverses are in $G$.
5.  **Abelian Property:** Addition modulo 6 is commutative, i.e., $a+b \equiv b+a \pmod 6$ for all $a, b \in G$.

Since all axioms are satisfied, $(G, + \pmod 6)$ is an abelian group.

---

### 5. Important Points to Remember

*   A group is a set with a binary operation satisfying closure, associativity, identity, and inverse properties.
*   Abelian groups are those where the operation is also commutative.
*   The order of a group is the number of elements in the set.
*   Lagrange's Theorem is a fundamental result: the order of a subgroup divides the order of the group, and the order of an element divides the order of the group.
*   The multiplicative group of integers modulo $n$, $(\mathbb{Z}_n^*, \times)$, is crucial for public-key cryptography due to the difficulty of the discrete logarithm problem.
*   The additive group of integers modulo $n$, $(\mathbb{Z}_n, +)$, is foundational for operations in finite fields.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 6. Textbook References and Connections to Course Outcomes

*   **Stallings (4th Edition):** Chapter 14 on "Number Theory and Cryptography" is highly relevant. It introduces modular arithmetic, the multiplicative group of integers modulo $n$, and discusses its relevance to Diffie-Hellman. This directly supports **CO1** (concepts of modular arithmetic). The group theory presented here lays the groundwork for understanding cryptographic primitives in later modules.
*   **Forouzan (2008):** Likely has similar introductory chapters on number theory and algebraic structures that are essential for cryptography. This also supports **CO1**.
*   **Dummit & Foote / Stinson / Koeblitz / Koshy:** These are advanced abstract algebra and number theory texts. While not strictly required for this introductory module, they provide a deeper theoretical understanding of groups, rings, and fields that underpin cryptographic systems. They reinforce **CO1** by providing rigorous mathematical foundations.

**Alignment with Course Outcomes:**

*   **CO1: Explain network security services and mechanisms and the types of attacks they are designed for and apply the concepts of modular arithmetic, Euclidean algorithm, polynomial arithmetic. (Knowledge Level: K3)**
    *   This topic directly addresses the "concepts of modular arithmetic" by introducing groups $(\mathbb{Z}_n, +)$ and $(\mathbb{Z}_n^*, \times)$ which heavily rely on modular arithmetic. Understanding groups is a K3 level skill as it involves applying these concepts in a structured algebraic context.

---