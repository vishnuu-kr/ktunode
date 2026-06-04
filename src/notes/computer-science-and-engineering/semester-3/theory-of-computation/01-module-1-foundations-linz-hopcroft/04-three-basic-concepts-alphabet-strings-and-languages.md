---
title: "Three basic concepts: Alphabet, Strings, and Languages"
subject: "THEORY OF COMPUTATION"
module: "Module 1: Foundations (Linz, Hopcroft)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ab97"
status: "completed"
scrapedAt: "2026-05-20T16:29:41.308Z"
---
# THEORY OF COMPUTATION: Module 1 - Foundations

## Topic: Three Basic Concepts: Alphabet, Strings, and Languages (Linz, Hopcroft)

### Learning Outcomes:

*   Define and understand the concepts of alphabets, strings, and languages.
*   Perform operations on strings, such as concatenation, length, and reversal.
*   Describe languages using set notation and formal definitions.
*   Understand the relationship between alphabets, strings, and languages.
*   Be able to construct simple languages based on given specifications.

### 1. Alphabet

*   **Definition:** An alphabet is a *finite, non-empty* set of symbols.  Symbols are the basic building blocks.

*   **Key Concepts:**
    *   **Finiteness:** The alphabet must contain a limited number of symbols.
    *   **Non-emptiness:** An alphabet must contain at least one symbol.
    *   Symbols can be any distinct entity (letters, digits, special characters).

*   **Notation:** Alphabets are typically denoted by Σ (Sigma).

*   **Examples:**
    *   Σ = {0, 1} (Binary alphabet)
    *   Σ = {a, b, c}
    *   Σ = {A, B, C, ..., Z} (Set of uppercase English letters)
    *   Σ = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9} (Set of decimal digits)

*   **Important Point:** The *order* of symbols within an alphabet is generally not significant. {0, 1} is the same alphabet as {1, 0}.

### 2. Strings

*   **Definition:** A string is a *finite sequence* of symbols chosen from an alphabet.

*   **Key Concepts:**
    *   **Finiteness:** A string has a limited number of symbols.
    *   **Sequence:** The order of symbols within a string *is* significant.
    *   A string can be empty (containing no symbols).

*   **Notation:** Strings are usually denoted by `w`, `x`, `y`, `z`.

*   **The Empty String:**
    *   The string with zero occurrences of symbols is called the *empty string*.
    *   It's denoted by ε (epsilon) or sometimes λ (lambda).
    *   It is a string over *every* alphabet.

*   **Operations on Strings:**

    *   **Length of a String (|w|):**  The number of symbols in the string `w`.
        *   Example:  If `w = 0110`, then `|w| = 4`.
        *   Example:  If `w = ε`, then `|w| = 0`.

    *   **Concatenation (wz):**  Joining two strings `w` and `z` together.
        *   Example:  If `w = "ab"` and `z = "cd"`, then `wz = "abcd"`.
        *   Important:  `wε = εw = w` (ε is the identity element for concatenation).

    *   **Reversal (w<sup>R</sup>):**  The string obtained by writing the symbols of `w` in reverse order.
        *   Example:  If `w = "hello"`, then `w<sup>R</sup> = "olleh"`.
        *   Example:  If `w = ε`, then `w<sup>R</sup> = ε`.

    *   **Substring:**  A contiguous sequence of symbols within a string.
        *   Example:  The substrings of "abc" are: ε, a, b, c, ab, bc, abc.

    *   **Prefix:**  A substring that starts at the beginning of the string.
        *   Example:  The prefixes of "abc" are: ε, a, ab, abc.

    *   **Suffix:**  A substring that ends at the end of the string.
        *   Example: The suffixes of "abc" are: ε, c, bc, abc.

    *   **Power of a String (w<sup>n</sup>):** Concatenating `w` with itself `n` times.
        *   `w<sup>0</sup> = ε`
        *   `w<sup>1</sup> = w`
        *   `w<sup>2</sup> = ww`
        *   And so on...
        *   Example: If `w = "ab"`, then `w<sup>3</sup> = "ababab"`.

*   **Set of All Possible Strings (Σ<sup>*</sup>):** The set of all possible strings (including the empty string) that can be formed using symbols from the alphabet Σ.  This is also known as the Kleene Star.

*   **Set of All Possible Non-empty Strings (Σ<sup>+</sup>):**  The set of all possible strings, *excluding* the empty string, that can be formed using symbols from the alphabet Σ. This is known as the Positive Closure.

    *   Σ<sup>+</sup> = Σ<sup>*</sup> - {ε}

*   **Examples:**

    *   If Σ = {0, 1}, then Σ<sup>*</sup> = {ε, 0, 1, 00, 01, 10, 11, 000, 001, ...}
    *   If Σ = {a}, then Σ<sup>*</sup> = {ε, a, aa, aaa, aaaa, ...}

### 3. Languages

*   **Definition:** A language is a *set of strings* chosen from Σ<sup>*</sup>, where Σ is a specific alphabet.

*   **Key Concepts:**
    *   A language is a *subset* of Σ<sup>*</sup>.
    *   A language can be finite or infinite.
    *   The empty set (∅) is a language.
    *   {ε} is a language (the language containing only the empty string).

*   **Notation:** Languages are typically denoted by `L`.

*   **Describing Languages:** Languages can be described in several ways:

    *   **Explicit Listing (for finite languages):** `L = { "ab", "ba", "aba" }`
    *   **Set Notation with a Condition:**  `L = { w | w ∈ {a, b}* and w contains an equal number of a's and b's }`
    *   **Formal Definition:** Using rules or grammars (covered in later modules).

*   **Examples:**

    *   Let Σ = {0, 1}
        *   L = {0, 1, 00, 11}  (A finite language)
        *   L = {w | w contains only 0s} = {ε, 0, 00, 000, 0000, ...} (An infinite language)
        *   L = {w | w starts with 0 and ends with 1} = {01, 001, 011, 0001, ...} (An infinite language)
        *   L = Σ<sup>*</sup> = {ε, 0, 1, 00, 01, 10, 11, ...} (The language of all possible strings over Σ)
        *   L = ∅ (The empty language, containing no strings)
        *   L = {ε} (The language containing only the empty string)

*   **Operations on Languages (Set Operations):** Since languages are sets, we can apply standard set operations:

    *   **Union (L<sub>1</sub> ∪ L<sub>2</sub>):** The set of all strings that are in L<sub>1</sub> or L<sub>2</sub> (or both).
    *   **Intersection (L<sub>1</sub> ∩ L<sub>2</sub>):** The set of all strings that are in both L<sub>1</sub> and L<sub>2</sub>.
    *   **Difference (L<sub>1</sub> - L<sub>2</sub>):** The set of all strings that are in L<sub>1</sub> but not in L<sub>2</sub>.
    *   **Complement (L<sup>c</sup>):**  Σ<sup>*</sup> - L (The set of all strings over Σ that are *not* in L).

*   **Operations on Languages (String-Based Operations):**

    *   **Concatenation (L<sub>1</sub>L<sub>2</sub>):** The set of all strings formed by concatenating a string from L<sub>1</sub> with a string from L<sub>2</sub>.
        *   `L<sub>1</sub>L<sub>2</sub> = { wz | w ∈ L<sub>1</sub> and z ∈ L<sub>2</sub> }`
        *   Example: If L<sub>1</sub> = {a, b} and L<sub>2</sub> = {0, 1}, then L<sub>1</sub>L<sub>2</sub> = {a0, a1, b0, b1}.

    *   **Power of a Language (L<sup>n</sup>):** Concatenating L with itself n times.
        *   `L<sup>0</sup> = {ε}`
        *   `L<sup>1</sup> = L`
        *   `L<sup>2</sup> = LL`
        *   And so on...

    *   **Kleene Star (L<sup>*</sup>):** The language formed by concatenating zero or more strings from L.
        *   `L<sup>*</sup> = L<sup>0</sup> ∪ L<sup>1</sup> ∪ L<sup>2</sup> ∪ L<sup>3</sup> ∪ ...`

    *   **Positive Closure (L<sup>+</sup>):**  The language formed by concatenating one or more strings from L.
        *   `L<sup>+</sup> = L<sup>1</sup> ∪ L<sup>2</sup> ∪ L<sup>3</sup> ∪ ...`
        *   `L<sup>+</sup> = LL<sup>*</sup> = L<sup>*</sup>L`

### Important Points to Remember:

*   An alphabet is a *set* of symbols.  A string is a *sequence* of symbols. A language is a *set* of strings.
*   The empty string (ε) is different from the empty set (∅).
*   Σ<sup>*</sup> is the set of *all* possible strings over alphabet Σ, including ε.
*   Languages can be finite or infinite.

### Practice Questions/Exercises:

1.  **Given Σ = {a, b}, list all strings in Σ<sup>*</sup> of length 3 or less.**

    *   **Answer:** {ε, a, b, aa, ab, ba, bb, aaa, aab, aba, abb, baa, bab, bba, bbb}

2.  **Let L<sub>1</sub> = {ab, ba} and L<sub>2</sub> = {a, bb}. What is L<sub>1</sub>L<sub>2</sub>?**

    *   **Answer:** {aba, abbb, baa, babb}

3.  **Let L = {0, 11}.  What is L<sup>2</sup>? What is L<sup>*</sup>?**

    *   **Answer:**
        *   L<sup>2</sup> = L L = {0, 11} {0, 11} = {00, 011, 110, 1111}
        *   L<sup>*</sup> = {ε, 0, 11, 00, 011, 110, 1111, 000, 0011, 0110, 01111, 1100, 11011, 11110, 111111, ...}  (Infinitely many strings)

4.  **Describe the language L = {w ∈ {a, b}* | w starts and ends with 'a'}.**

    *   **Answer:** The language L consists of all strings over the alphabet {a, b} that begin and end with the symbol 'a'. Examples: a, aa, aba, abba, aabbaa, etc.

5.  **Let Σ = {a, b}.  Describe the language defined by {w ∈ Σ<sup>*</sup> | |w| is even }.**

    *   **Answer:**  This language consists of all strings over the alphabet {a, b} whose length is an even number. This includes the empty string, strings of length 2 (aa, ab, ba, bb), strings of length 4, and so on.  It's all strings that can be created by concatenating the elements of {aa, ab, ba, bb} any number of times (including zero times).

6. **If L = {a}, what is L<sup>*</sup>?**
    * **Answer:** L<sup>*</sup> = {ε, a, aa, aaa, aaaa, ...}, which is all possible strings of 'a's, including the empty string.

These notes provide a comprehensive overview of the concepts of alphabets, strings, and languages, along with examples and practice exercises to solidify your understanding.  Good luck!
