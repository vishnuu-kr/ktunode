---
title: "Concatenation of strings"
subject: "THEORY OF COMPUTATION"
module: "Module 1: Introduction to formal language theory– Alphabets"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35f0d"
status: "completed"
scrapedAt: "2026-05-23T16:19:23.968Z"
---
# Theory of Computation: Module 1 - Introduction to Formal Language Theory

## Topic: Concatenation of Strings

### 1. Introduction

This module introduces the fundamental concepts of formal language theory, a cornerstone of the Theory of Computation. We begin by defining alphabets and strings, which are the basic building blocks of languages. This topic focuses specifically on the operation of *concatenation* on strings. Understanding string concatenation is crucial as it forms the basis for constructing more complex strings and, subsequently, formal languages. This knowledge directly supports our ability to classify languages (CO1) and is a foundational skill for designing automata and grammars (CO2, CO3, CO4).

**Key Concept:** A **formal language** is a set of strings over an alphabet.

### 2. Alphabets

An **alphabet** ($\Sigma$) is a finite, non-empty set of symbols. Symbols are typically characters, but can be any distinct entities.

**Examples:**
*   $\Sigma_1 = \{a, b\}$
*   $\Sigma_2 = \{0, 1\}$ (Binary alphabet)
*   $\Sigma_3 = \{A, B, C, ..., Z\}$ (English uppercase alphabet)
*   $\Sigma_4 = \{0, 1, 2, ..., 9\}$ (Decimal digits)

**Important Point:** The order of elements in an alphabet does not matter, but the set itself is distinct.

### 3. Strings

A **string** over an alphabet $\Sigma$ is a finite sequence of symbols from $\Sigma$.

**Notation:** Strings are usually denoted by lowercase letters like $w, x, y, z$.

**Examples:**
*   If $\Sigma = \{a, b\}$, then $w = abba$, $x = a$, $y = bbb$, $z = \epsilon$ are strings over $\Sigma$.
*   $\epsilon$ (epsilon) is the **empty string**, which is a string of length zero. It is a string over *any* alphabet.

**Length of a String:** The length of a string $w$, denoted by $|w|$, is the number of symbols in the string.
*   $|abba| = 4$
*   $|\epsilon| = 0$

**Key Concept:** The set of all possible strings over an alphabet $\Sigma$ is denoted by $\Sigma^*$. This is the **Kleene closure** of the alphabet.

**Example:** If $\Sigma = \{a, b\}$, then
$\Sigma^* = \{\epsilon, a, b, aa, ab, ba, bb, aaa, aab, ... \}$ (an infinite set).

### 4. Concatenation of Strings

**Definition:** The **concatenation** of two strings $x$ and $y$ over the same alphabet $\Sigma$ is the string formed by appending $y$ to the end of $x$. It is denoted by $xy$ or $x \cdot y$.

**Operation:**
If $x = s_1s_2...s_m$ and $y = t_1t_2...t_n$, where $s_i, t_j \in \Sigma$, then
$xy = s_1s_2...s_m t_1t_2...t_n$.

**Properties of Concatenation:**

*   **Associativity:** For any strings $x, y, z \in \Sigma^*$, $(xy)z = x(yz)$.
    *   This means the order of grouping doesn't matter when concatenating three or more strings.

*   **Identity Element:** The empty string $\epsilon$ is the identity element for concatenation. For any string $w \in \Sigma^*$, $w\epsilon = \epsilon w = w$.

**Examples:**
Let $\Sigma = \{a, b\}$.
*   Let $x = ab$ and $y = ba$. Then $xy = abba$.
*   Let $x = \epsilon$ and $y = aba$. Then $x y = \epsilon aba = aba$.
*   Let $x = bab$ and $y = \epsilon$. Then $x y = bab \epsilon = bab$.
*   Let $x = aa$, $y = b$, $z = ab$.
    *   $(xy)z = (aab)ab = aabab$
    *   $x(yz) = aa(bab) = aabab$
    *   Thus, $(xy)z = x(yz)$

**Concatenation and Length:**
The length of the concatenation of two strings is the sum of their lengths: $|xy| = |x| + |y|$.

**Example:**
If $x = ab$ and $y = ba$:
$|x| = 2$, $|y| = 2$.
$xy = abba$, $|xy| = 4$.
$|x| + |y| = 2 + 2 = 4$. So, $|xy| = |x| + |y|$.

**Repeated Concatenation (Powers of a String):**
For a string $w \in \Sigma^*$, $w^n$ denotes the concatenation of $w$ with itself $n$ times.
*   $w^0 = \epsilon$ (the empty string)
*   $w^1 = w$
*   $w^2 = ww$
*   $w^3 = www$
*   And so on.

**Example:**
If $w = ab$, then:
*   $w^0 = \epsilon$
*   $w^1 = ab$
*   $w^2 = abab$
*   $w^3 = ababab$

**Key Point:** $w^n$ is a string of length $n \times |w|$.

### 5. Concatenation of Languages

While this topic focuses on strings, it's important to note that concatenation is also an operation on languages. If $L_1$ and $L_2$ are languages over the same alphabet $\Sigma$, their concatenation, denoted by $L_1L_2$, is the set of all strings formed by concatenating a string from $L_1$ with a string from $L_2$.

**Definition:** $L_1L_2 = \{xy \mid x \in L_1 \text{ and } y \in L_2 \}$

**Example:**
Let $\Sigma = \{a, b\}$.
Let $L_1 = \{\epsilon, a, aa\}$ and $L_2 = \{b, bb\}$.
Then $L_1L_2 = \{ \epsilon b, \epsilon bb, ab, abb, aab, aabb \}$
$L_1L_2 = \{ b, bb, ab, abb, aab, aabb \}$

**Relevance to Course Outcomes:**
*   **CO1 (Classify languages):** Understanding how to form strings by concatenation is fundamental to defining and understanding the structure of different classes of languages. For instance, regular languages are often defined using concatenation (among other operations).
*   **CO2 (Design finite state automata, regular grammar):** Finite automata recognize languages formed by concatenating smaller strings that are also recognized by the automaton. Regular grammars use concatenation in their production rules to build strings.

### 6. Practice Questions

**Question 1:**
Let $\Sigma = \{0, 1\}$. Consider the strings $x = 101$ and $y = 0011$.
(a) What is the concatenation $xy$?
(b) What is the length of $xy$?
(c) What is $yx$?
(d) What is $x^2$?

**Question 2:**
Let $\Sigma = \{a, b, c\}$. Let $w = abc$.
(a) What is $w^3$?
(b) What is the length of $w^3$?

**Question 3:**
Let $\Sigma = \{a, b\}$. Consider the strings $x = \epsilon$ and $y = ab$.
(a) What is $xy$?
(b) What is $yx$?
(c) What is $x^2$?

**Question 4 (Conceptual):**
Is concatenation associative for strings? Explain why or why not, referring to the definition of concatenation.

### 7. Answers to Practice Questions

**Answer 1:**
Let $\Sigma = \{0, 1\}$. $x = 101$, $y = 0011$.
(a) $xy = 1010011$
(b) $|xy| = |x| + |y| = 3 + 4 = 7$. The string is $1010011$, which has 7 symbols.
(c) $yx = 0011101$
(d) $x^2 = xx = 101101$

**Answer 2:**
Let $\Sigma = \{a, b, c\}$. $w = abc$.
(a) $w^3 = www = abcabcabc$
(b) $|w^3| = 3 \times |w| = 3 \times 3 = 9$. The string is $abcabcabc$, which has 9 symbols.

**Answer 3:**
Let $\Sigma = \{a, b\}$. $x = \epsilon$, $y = ab$.
(a) $xy = \epsilon ab = ab$
(b) $yx = ab\epsilon = ab$
(c) $x^2 = xx = \epsilon\epsilon = \epsilon$

**Answer 4:**
Yes, concatenation is associative for strings.
Let $x, y, z$ be strings over an alphabet $\Sigma$.
Let $x = s_1 s_2 ... s_m$
Let $y = t_1 t_2 ... t_n$
Let $z = u_1 u_2 ... u_p$

Then,
$(xy)z = (s_1 s_2 ... s_m t_1 t_2 ... t_n) u_1 u_2 ... u_p$
This is a sequence of $m+n+p$ symbols.

And,
$x(yz) = s_1 s_2 ... s_m (t_1 t_2 ... t_n u_1 u_2 ... u_p)$
This is also a sequence of $m+n+p$ symbols.

Both $(xy)z$ and $x(yz)$ result in the same sequence of all the symbols from $x$, followed by all the symbols from $y$, followed by all the symbols from $z$, in their original order. Therefore, $(xy)z = x(yz)$. This property arises directly from the definition of how strings are formed by appending sequences of symbols.

### 8. Important Points to Remember

*   An **alphabet** is a finite, non-empty set of symbols.
*   A **string** is a finite sequence of symbols from an alphabet.
*   The **empty string** ($\epsilon$) has length 0 and is a string over any alphabet.
*   **Concatenation** ($xy$) appends string $y$ to string $x$.
*   Concatenation is **associative**: $(xy)z = x(yz)$.
*   The **empty string** is the identity for concatenation: $w\epsilon = \epsilon w = w$.
*   The length of a concatenated string is the sum of the lengths: $|xy| = |x| + |y|$.
*   $w^n$ denotes the string $w$ concatenated with itself $n$ times.

---
This study material is aligned with the foundational knowledge required for understanding formal languages and automata, directly contributing to the successful achievement of **CO1**. The operations defined here are essential prerequisites for designing and analyzing the machines and grammars mentioned in other course outcomes.

**References:**
*   Kozen, Dexter C. *Automata and Computability*. Springer, 1999. (Chapter 1: Preliminaries)
*   Hopcroft, John E., Rajeev Motwani, and Jeffrey D. Ullman. *Introduction to Automata Theory, Languages, and Computation*. Pearson Education, 3/e, 2007. (Chapter 1: Introduction to Languages and Proofs)
*   Sipser, Michael. *Introduction To Theory of Computation*. Cengage Publishers, 2013. (Chapter 0: Introduction)
