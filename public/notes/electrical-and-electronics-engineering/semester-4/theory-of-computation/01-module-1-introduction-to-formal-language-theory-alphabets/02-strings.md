---
title: "Strings"
subject: "THEORY OF COMPUTATION"
module: "Module 1: Introduction to formal language theory– Alphabets"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35f0c"
status: "completed"
scrapedAt: "2026-05-23T16:19:23.289Z"
---
# Theory of Computation: Module 1 - Introduction to Formal Language Theory - Strings

## 1. Introduction to Formal Language Theory

Formal language theory is a branch of theoretical computer science that studies abstract machines and the computational problems that can be solved by these machines. It provides the foundation for understanding the capabilities and limitations of computation. This module introduces the fundamental building blocks of formal languages, starting with alphabets and strings.

## 2. Alphabets (Brief Recap)

Before diving into strings, it's essential to recall the concept of an alphabet.

*   **Definition:** An **alphabet**, denoted by $\Sigma$, is a finite, non-empty set of symbols.
*   **Examples:**
    *   $\Sigma_1 = \{0, 1\}$ (Binary alphabet)
    *   $\Sigma_2 = \{a, b, c, \dots, z\}$ (Lowercase English alphabet)
    *   $\Sigma_3 = \{A, B, C\}$
*   **Key Point:** An alphabet is the set of allowed characters for forming strings.

## 3. Strings

Strings are sequences of symbols from an alphabet. They are the basic units of information in formal languages.

### 3.1. Definition of a String

*   **Definition:** A **string** over an alphabet $\Sigma$ is a finite sequence of symbols from $\Sigma$.
*   A string can be represented as $w = a_1 a_2 \dots a_n$, where each $a_i \in \Sigma$.
*   The length of a string $w$, denoted by $|w|$, is the number of symbols in the string.
*   **Examples over $\Sigma = \{a, b\}$:**
    *   `a`, `b` (length 1)
    *   `aa`, `ab`, `ba`, `bb` (length 2)
    *   `aba`, `bab`, `aabb` (length 3)

### 3.2. The Empty String

*   **Definition:** The **empty string**, denoted by $\epsilon$ (or sometimes $\lambda$), is a string of length zero. It contains no symbols.
*   The empty string is a string over *any* alphabet.
*   **Example:** If $\Sigma = \{0, 1\}$, then $\epsilon$ is a valid string.

### 3.3. String Concatenation

*   **Definition:** **Concatenation** is the operation of joining two strings together to form a new string.
*   If $u = a_1 a_2 \dots a_m$ and $v = b_1 b_2 \dots b_n$ are strings, their concatenation is $uv = a_1 a_2 \dots a_m b_1 b_2 \dots b_n$.
*   **Properties of Concatenation:**
    *   **Associativity:** For any strings $u, v, w$, $(uv)w = u(vw)$.
    *   **Identity Element:** For any string $w$, $w\epsilon = \epsilon w = w$.
*   **Examples over $\Sigma = \{a, b\}$:**
    *   If $u = ab$ and $v = ba$, then $uv = abba$.
    *   If $w = a$, then $w\epsilon = a\epsilon = a$.
    *   If $u = \epsilon$ and $v = b$, then $uv = \epsilon b = b$.

### 3.4. Powers of Strings

*   **Definition:** For a string $w$ and a non-negative integer $n$, $w^n$ denotes the concatenation of $w$ with itself $n$ times.
    *   $w^0 = \epsilon$ (The empty string)
    *   $w^1 = w$
    *   $w^2 = ww$
    *   $w^n = w \cdot w \cdot \dots \cdot w$ ($n$ times)
*   **Example over $\Sigma = \{a, b\}$:**
    *   If $w = ab$, then:
        *   $w^0 = \epsilon$
        *   $w^1 = ab$
        *   $w^2 = abab$
        *   $w^3 = ababab$

### 3.5. Kleene Closure (Star Operation)

*   **Definition:** The **Kleene closure** of an alphabet $\Sigma$, denoted by $\Sigma^*$, is the set of all possible strings (including the empty string) that can be formed by concatenating zero or more symbols from $\Sigma$.
*   $\Sigma^* = \{\text{all finite strings over } \Sigma\}$
*   $\Sigma^* = \Sigma^0 \cup \Sigma^1 \cup \Sigma^2 \cup \Sigma^3 \cup \dots$
    *   Where $\Sigma^0 = \{\epsilon\}$
    *   $\Sigma^1 = \{\text{strings of length 1 over } \Sigma\}$
    *   $\Sigma^2 = \{\text{strings of length 2 over } \Sigma\}$, etc.
*   **Example over $\Sigma = \{a, b\}$:**
    *   $\Sigma^* = \{\epsilon, a, b, aa, ab, ba, bb, aaa, aab, \dots\}$
*   **Important Note:** $\Sigma^*$ is an infinite set if $\Sigma$ is non-empty.

### 3.6. Kleene Plus (Plus Operation)

*   **Definition:** The **Kleene plus** of an alphabet $\Sigma$, denoted by $\Sigma^+$, is the set of all possible strings (excluding the empty string) that can be formed by concatenating one or more symbols from $\Sigma$.
*   $\Sigma^+ = \Sigma^1 \cup \Sigma^2 \cup \Sigma^3 \cup \dots$
*   Equivalently, $\Sigma^+ = \Sigma^* - \{\epsilon\}$.
*   **Example over $\Sigma = \{a, b\}$:**
    *   $\Sigma^+ = \{a, b, aa, ab, ba, bb, aaa, aab, \dots\}$ (all strings except $\epsilon$)

---

## 4. Relationship to Course Outcomes

This topic is foundational for several course outcomes:

*   **CO1: Classify a given formal language into Regular, Context-Free, Context Sensitive, Recursive or Recursively Enumerable (Knowledge Level: K2)**
    *   Understanding strings is crucial because languages are defined as sets of strings. To classify a language, we need to know what a string is and how they are constructed. For example, a regular language is a set of strings that can be recognized by a finite automaton.
*   **CO2: Design finite state automata, regular grammar, and regular representations for regular languages. (Knowledge Level: K3)**
    *   Finite Automata (FAs) and regular grammars operate on strings. The ability to manipulate and understand strings is essential for designing these structures. For instance, an FA processes a string symbol by symbol.
*   **CO3: Design push-down automata and context-free grammar representations for given context-free languages. (Knowledge Level: K3)**
    *   Context-Free Grammars (CFGs) generate strings. Understanding how symbols combine to form strings is key to defining grammar rules. Pushdown Automata (PDAs) recognize context-free languages by processing strings.
*   **CO4: Design Turing machines as language acceptors or transducers. (Knowledge Level: K3)**
    *   Turing Machines (TMs) operate on strings written on their tape. The input to a TM is a string, and the output is also a string. Proficiency with strings is fundamental to designing TMs.
*   **CO5: Explain the notion of decidability. (Knowledge Level: K2)**
    *   Decidability is about whether a problem (which is often defined by strings) can be solved by an algorithm. Understanding the nature of strings and their properties is a prerequisite for discussing computability and decidability.

---

## 5. Important Points to Remember

*   An alphabet is a *finite set of symbols*.
*   A string is a *finite sequence* of symbols from an alphabet.
*   The empty string $\epsilon$ has length 0 and is part of *any* alphabet's Kleene closure.
*   Concatenation is the fundamental operation for building longer strings.
*   $\Sigma^*$ represents *all possible strings* over $\Sigma$, including $\epsilon$.
*   $\Sigma^+$ represents *all possible non-empty strings* over $\Sigma$.

---

## 6. Practice Questions / Exercises

**Question 1:**
Let $\Sigma = \{0, 1, a\}$. List all strings of length 0, 1, and 2 over $\Sigma$.

**Answer 1:**
*   Length 0: $\epsilon$
*   Length 1: $0, 1, a$
*   Length 2: $00, 01, 0a, 10, 11, 1a, a0, a1, aa$

**Question 2:**
Let $\Sigma = \{x, y\}$.
If $u = xy$ and $v = yx$, what are $uv$, $vu$, $u^2$, and $v^0$?

**Answer 2:**
*   $uv = (xy)(yx) = xy yx$
*   $vu = (yx)(xy) = yx xy$
*   $u^2 = (xy)^2 = (xy)(xy) = xy xy$
*   $v^0 = \epsilon$ (the empty string)

**Question 3:**
Let $\Sigma = \{A, B\}$. Which of the following strings are in $\Sigma^*$? Which are in $\Sigma^+$?
(a) $\epsilon$
(b) $ABBA$
(c) $BBB$
(d) $ABC$

**Answer 3:**
*   (a) $\epsilon$: In $\Sigma^*$ (length 0). Not in $\Sigma^+$ (must have length $\ge 1$).
*   (b) $ABBA$: In $\Sigma^*$ and $\Sigma^+$ (length 4).
*   (c) $BBB$: In $\Sigma^*$ and $\Sigma^+$ (length 3).
*   (d) $ABC$: Not in $\Sigma^*$ or $\Sigma^+$ because the symbol 'C' is not in $\Sigma$.

**Question 4:**
Let $\Sigma = \{a, b\}$. Consider the string $w = ab$.
Describe the strings in the set $\{w^n \mid n \ge 0\}$.

**Answer 4:**
The set $\{w^n \mid n \ge 0\}$ is the set of strings formed by concatenating $w=ab$ zero or more times. This set is:
$\{\epsilon, ab, abab, ababab, abababab, \dots\}$

**Question 5:**
Let $\Sigma = \{0\}$. List the first five strings in $\Sigma^*$ in increasing order of length.

**Answer 5:**
$\epsilon, 0, 00, 000, 0000$

---
