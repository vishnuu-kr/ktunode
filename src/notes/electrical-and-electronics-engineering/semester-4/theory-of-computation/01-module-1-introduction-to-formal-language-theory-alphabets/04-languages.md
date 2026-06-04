---
title: "Languages."
subject: "THEORY OF COMPUTATION"
module: "Module 1: Introduction to formal language theory– Alphabets"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35f0e"
status: "completed"
scrapedAt: "2026-05-23T16:19:24.630Z"
---
# THEORY OF COMPUTATION - Module 1: Introduction to Formal Language Theory - Languages

## 1. Introduction to Formal Language Theory

Formal language theory is a fundamental branch of computer science that deals with the study of **formal languages**. These are languages that can be described by a set of precise rules, unlike natural languages (like English or Spanish) which are often ambiguous and have exceptions. Understanding formal languages is crucial for comprehending the capabilities and limitations of computation.

**Key Idea:** In formal language theory, we abstract away the meaning and focus solely on the structure and rules that generate valid strings.

### 1.1 Why Study Formal Languages?

*   **Foundation for Computation:** Formal languages are the bedrock upon which the theory of computation is built. They are used to define the inputs and outputs of computational models.
*   **Compiler Design:** Compilers use formal grammars to parse and understand the syntax of programming languages.
*   **Automata Theory:** Formal languages are directly related to the capabilities of different types of automata (e.g., Finite Automata, Pushdown Automata, Turing Machines).
*   **Understanding Computability and Complexity:** Formal languages help us classify problems based on their computational difficulty and whether they can be solved by algorithms.

## 2. Languages

A **language** in the context of formal language theory is a set of strings. These strings are formed from elements of an **alphabet**.

### 2.1 Alphabets

An **alphabet**, denoted by $\Sigma$, is a finite, non-empty set of symbols. These symbols are the basic building blocks of strings.

**Definition:** An alphabet $\Sigma$ is a finite, non-empty set of symbols.

**Examples:**

*   $\Sigma_1 = \{a, b\}$ (Binary alphabet)
*   $\Sigma_2 = \{0, 1\}$ (Another binary alphabet)
*   $\Sigma_3 = \{a, b, c, ..., z\}$ (Lowercase English alphabet)
*   $\Sigma_4 = \{A, B, C\}$
*   $\Sigma_5 = \{0, 1, 2, ..., 9\}$ (Decimal digits)

**Important Point to Remember:** An alphabet must be finite and non-empty.

### 2.2 Strings

A **string** over an alphabet $\Sigma$ is a finite sequence of symbols from $\Sigma$.

**Definition:** A string $w$ over an alphabet $\Sigma$ is a finite sequence $w_1 w_2 ... w_n$ where each $w_i \in \Sigma$.

*   The length of a string $w$, denoted by $|w|$, is the number of symbols in the sequence.
*   The **empty string**, denoted by $\epsilon$ or $\lambda$, is a string of length zero. It is a string over any alphabet.

**Examples (over $\Sigma_1 = \{a, b\}$):**

*   $a$ (length 1)
*   $b$ (length 1)
*   $aa$ (length 2)
*   $ab$ (length 2)
*   $ba$ (length 2)
*   $bb$ (length 2)
*   $aba$ (length 3)
*   $\epsilon$ (length 0)

**Operations on Strings:**

*   **Concatenation:** If $u$ and $v$ are strings, their concatenation $uv$ is the string formed by appending $v$ to $u$.
    *   Example: If $u = ab$ and $v = ba$, then $uv = abba$.
    *   $u\epsilon = \epsilon u = u$ for any string $u$.

### 2.3 The Set of All Strings Over an Alphabet ($\Sigma^*$)

The set of all possible finite strings over an alphabet $\Sigma$, including the empty string, is denoted by $\Sigma^*$. This is also known as the **Kleene closure** of $\Sigma$.

**Definition:** $\Sigma^* = \{w \mid w \text{ is a finite sequence of symbols from } \Sigma \}$.

**Examples (over $\Sigma_1 = \{a, b\}$):**

*   $\Sigma_1^* = \{\epsilon, a, b, aa, ab, ba, bb, aaa, aab, aba, abb, baa, bab, bba, bbb, ... \}$

$\Sigma^*$ is an infinite set if $\Sigma$ is non-empty.

### 2.4 Languages

A **language** $L$ over an alphabet $\Sigma$ is a subset of $\Sigma^*$. In simpler terms, a language is a set of strings that can be formed using the symbols from a given alphabet.

**Definition:** A language $L$ over an alphabet $\Sigma$ is a set $L \subseteq \Sigma^*$.

**Examples:**

1.  **Alphabet:** $\Sigma = \{0, 1\}$
    *   **Language $L_1$:** The set of all strings with an even number of 0s.
        $L_1 = \{\epsilon, 11, 00, 101, 010, 0011, ... \}$
    *   **Language $L_2$:** The set of all strings that start with '0' and end with '1'.
        $L_2 = \{01, 001, 011, 0001, 0011, 0101, 0111, ... \}$
    *   **Language $L_3$:** The set of all strings with equal numbers of 0s and 1s.
        $L_3 = \{\epsilon, 01, 10, 0011, 0101, 0110, 1001, 1010, 1100, ... \}$
    *   **Language $L_4$:** The set of all strings.
        $L_4 = \Sigma^* = \{0, 1, 00, 01, 10, 11, ... \}$
    *   **Language $L_5$:** The empty language (the set containing no strings).
        $L_5 = \emptyset$
    *   **Language $L_6$:** The language containing only the empty string.
        $L_6 = \{\epsilon\}$

2.  **Alphabet:** $\Sigma = \{a, b\}$
    *   **Language $L_7$:** The set of all strings that contain at least one 'a'.
        $L_7 = \{a, aa, ab, ba, bb, aaa, aab, ... \}$
    *   **Language $L_8$:** The set of strings of length exactly 2.
        $L_8 = \{aa, ab, ba, bb\}$

**Important Note on Size of Languages:**
*   A language can be finite (e.g., $L_8$ above) or infinite (e.g., $L_1, L_2, L_3, L_4, L_7$ above).
*   The number of possible languages over a given alphabet is infinite.

### 2.5 Operations on Languages

Similar to strings, we can perform operations on languages:

*   **Union:** For languages $L_1$ and $L_2$, their union $L_1 \cup L_2$ is the set of strings that are in $L_1$ or $L_2$ (or both).
    *   $L_1 \cup L_2 = \{w \mid w \in L_1 \text{ or } w \in L_2 \}$

*   **Intersection:** For languages $L_1$ and $L_2$, their intersection $L_1 \cap L_2$ is the set of strings that are in both $L_1$ and $L_2$.
    *   $L_1 \cap L_2 = \{w \mid w \in L_1 \text{ and } w \in L_2 \}$

*   **Complement:** For a language $L$ over an alphabet $\Sigma$, its complement $L^c$ (or $\bar{L}$) is the set of strings in $\Sigma^*$ that are *not* in $L$.
    *   $L^c = \Sigma^* \setminus L = \{w \mid w \in \Sigma^* \text{ and } w \notin L \}$

*   **Concatenation:** For languages $L_1$ and $L_2$, their concatenation $L_1 L_2$ is the set of strings formed by taking a string from $L_1$ and concatenating it with a string from $L_2$.
    *   $L_1 L_2 = \{uv \mid u \in L_1 \text{ and } v \in L_2 \}$

*   **Kleene Star (Star Closure):** For a language $L$, its Kleene star $L^*$ is the set of all possible concatenations of zero or more strings from $L$.
    *   $L^* = \{w_1 w_2 ... w_k \mid k \ge 0, \text{ and } w_i \in L \text{ for all } i=1, ..., k \}$
    *   This means $L^* = \{\epsilon\} \cup L \cup LL \cup LLL \cup ...$

**Examples (over $\Sigma = \{a, b\}$):**

Let $L_A = \{a\}$ and $L_B = \{b\}$.

*   $L_A \cup L_B = \{a, b\}$
*   $L_A \cap L_B = \emptyset$
*   $L_A^c = \Sigma^* \setminus \{a\}$ (all strings except those consisting of a single 'a')
*   $L_A L_B = \{ab\}$
*   $L_B L_A = \{ba\}$
*   $L_A L_A = \{aa\}$
*   $L_A^* = \{ \epsilon, a, aa, aaa, ... \}$ (The language of all strings consisting only of 'a's)
*   $(L_A \cup L_B)^* = \{a, b\}^* = \Sigma^*$ (The language of all strings over $\{a, b\}$)

**Reference:**
*   **Kozen, Chapter 1:** Introduces basic definitions of strings, alphabets, and languages.
*   **Hopcroft, Motwani, Ullman, Chapter 1:** Provides a similar introduction to these fundamental concepts.
*   **Sipser, Chapter 1:** Covers alphabets, strings, languages, and basic set operations relevant to languages.

## 3. Learning Outcomes Addressed in this Section

*   **Understanding Languages:** This entire section defines what languages are in the context of formal language theory.
*   **Alphabets:** The definition and examples of alphabets are covered.
*   **Relationship to Automata (Implicit):** While not explicitly shown, the foundation laid here (alphabets and languages) is what automata will be used to recognize.

**CO1: Classify a given formal language into Regular, Context-Free, Context Sensitive, Recursive or Recursively Enumerable (Knowledge Level: K2)**
This section provides the foundational understanding of what a "formal language" is. To classify a language, we first need to know that it is a set of strings over an alphabet. Later modules will introduce the different classes of languages and their properties.

## 4. Practice Questions and Exercises

**Question 1:**
Let $\Sigma = \{0, 1, 2\}$.
(a) List all strings of length 2 over $\Sigma$.
(b) What is the total number of strings of length $n$ over an alphabet of size $k$?
(c) Let $L$ be the language containing all strings over $\Sigma$ that start with '1' and end with '0'. List at least 5 strings in $L$.
(d) What is $\Sigma^*$? Is it finite or infinite?

**Answer 1:**
(a) The strings of length 2 over $\Sigma = \{0, 1, 2\}$ are:
00, 01, 02, 10, 11, 12, 20, 21, 22.

(b) For an alphabet of size $k$, there are $k^n$ strings of length $n$. This is because for each of the $n$ positions in the string, there are $k$ choices of symbols.

(c) For $L$ over $\Sigma = \{0, 1, 2\}$ where strings start with '1' and end with '0':
Strings are of the form `1 X 0`, where X is any string over $\Sigma$.
Examples:
100
110
120
1000
1110

(d) $\Sigma^* = \{0, 1, 2\}^*$ is the set of all possible finite strings formed using the symbols 0, 1, and 2, including the empty string $\epsilon$. It is an **infinite** set.

**Question 2:**
Let $\Sigma = \{a, b\}$. Consider the language $L = \{a^n b^n \mid n \ge 0\}$.
(a) List the first 4 strings in $L$ (starting with $n=0$).
(b) Is the string $aab$ in $L$? Explain why or why not.
(c) Is the string $abb$ in $L$? Explain why or why not.
(d) Let $L_1 = \{a^n \mid n \ge 0\}$ and $L_2 = \{b^m \mid m \ge 0\}$. What is $L_1 L_2$?

**Answer 2:**
(a) For $n=0$: $a^0 b^0 = \epsilon$
For $n=1$: $a^1 b^1 = ab$
For $n=2$: $a^2 b^2 = aabb$
For $n=3$: $a^3 b^3 = aaabbb$
So, the first 4 strings are: $\epsilon, ab, aabb, aaabbb$.

(b) No, $aab$ is not in $L$. The definition of $L$ requires that the number of 'a's must be exactly equal to the number of 'b's. In $aab$, there are two 'a's and one 'b'.

(c) No, $abb$ is not in $L$. In $abb$, there is one 'a' and two 'b's.

(d) $L_1 L_2 = \{uv \mid u \in L_1, v \in L_2\}$.
$L_1$ contains strings of zero or more 'a's: $\{\epsilon, a, aa, aaa, ...\}$.
$L_2$ contains strings of zero or more 'b's: $\{\epsilon, b, bb, bbb, ...\}$.
Concatenating any string from $L_1$ with any string from $L_2$ will result in a string of zero or more 'a's followed by zero or more 'b's.
So, $L_1 L_2 = \{a^n b^m \mid n \ge 0, m \ge 0\}$.

**Question 3:**
Let $\Sigma = \{0, 1\}$. Let $L_1 = \{w \mid w \text{ has an even number of 0s}\}$ and $L_2 = \{w \mid w \text{ starts with 0}\}$.
Describe the language $L_1 \cap L_2$.

**Answer 3:**
$L_1 \cap L_2$ is the set of strings that satisfy both conditions:
1.  The string has an even number of 0s.
2.  The string starts with 0.

Therefore, $L_1 \cap L_2$ is the language of all strings over $\{0, 1\}$ that start with '0' and have an even number of 0s in total.
Examples: $00, 0110, 01010, 0011, 0000$.

**Question 4:**
Let $\Sigma = \{a\}$. Let $L = \{a, aa\}$. What is $L^*$?

**Answer 4:**
$L^* = \{\epsilon\} \cup L \cup LL \cup LLL \cup ...$
$L = \{a, aa\}$
$LL = \{aa, aaa, aaaa\}$ (concatenating strings from L with strings from L)
$LLL = \{aaa, aaaa, aaaaa, aaaaaa\}$

When we take the Kleene star of a set of strings like this, it can get complicated to list. However, for $L=\{a, aa\}$, any string formed by concatenating these will result in a string of only 'a's.
Let's consider what strings are *not* generated. Can we generate $a^n$?
If $n=1$, use 'a' from $L$.
If $n=2$, use 'aa' from $L$.
If $n=3$, use 'a' then 'aa' (from $L \cdot L$), or 'aa' then 'a'.
It turns out that any string $a^k$ can be formed by concatenating 'a's and 'aa's.
For example, $a^5 = aa \cdot a \cdot aa$.
Therefore, $L^* = \{a^k \mid k \ge 0\}$, which is $\Sigma^*$.

**Important Point to Remember:** The Kleene star operation, when applied to languages that can generate all elements of $\Sigma^*$, will result in $\Sigma^*$. In this case, $L$ can generate strings of length 1 ($a$) and length 2 ($aa$). With these building blocks, any length $k$ can be constructed.

## 5. Key Takeaways

*   **Formal languages are sets of strings.**
*   **Strings are finite sequences of symbols from an alphabet.**
*   **An alphabet ($\Sigma$) is a finite, non-empty set of symbols.**
*   **$\Sigma^*$ represents the set of all finite strings over $\Sigma$, including the empty string $\epsilon$.**
*   Understanding these basic definitions is fundamental to all subsequent topics in the theory of computation.

---
