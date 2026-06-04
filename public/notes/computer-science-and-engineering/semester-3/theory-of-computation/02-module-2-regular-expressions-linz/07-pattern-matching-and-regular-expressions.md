---
title: "Pattern Matching and Regular Expressions"
subject: "THEORY OF COMPUTATION"
module: "Module 2: Regular Expressions (Linz)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8abaa"
status: "completed"
scrapedAt: "2026-05-20T16:29:54.213Z"
---
# THEORY OF COMPUTATION - Module 2: Regular Expressions (Linz) - Pattern Matching and Regular Expressions

**Module Description:** This module covers the fundamental concepts of Regular Expressions as defined in Peter Linz's "An Introduction to Formal Languages and Automata." This topic focuses on pattern matching using regular expressions and their relationship to formal languages.

**Topic:** Pattern Matching and Regular Expressions

**Learning Outcomes:**

*   Understand the concept of pattern matching and its applications.
*   Define regular expressions formally.
*   Interpret and construct regular expressions for various patterns.
*   Understand the precedence of operators in regular expressions.
*   Convert regular expressions into regular languages and vice-versa (informally for this topic, more formally later).
*   Apply regular expressions in practical scenarios (e.g., text searching, data validation).

## 1. Introduction to Pattern Matching

*   **Definition:** Pattern matching is the process of checking whether a specific sequence of characters (a "pattern") exists within a larger string of text.  It's a fundamental operation in computer science.

*   **Applications:**
    *   **Text Editors:** Finding and replacing text.
    *   **Compilers:** Lexical analysis (identifying keywords, identifiers, etc.).
    *   **Network Security:** Intrusion detection systems.
    *   **Data Validation:** Ensuring data conforms to specific formats (e.g., email addresses, phone numbers).
    *   **Bioinformatics:** Searching for specific DNA sequences.
    *   **Search Engines:**  Matching user queries with relevant documents.

*   **Simple Example:** Searching for the word "apple" in the sentence "I like to eat an apple every day." The pattern "apple" is found.

## 2. Regular Expressions: Definition and Notation

*   **Definition:** A regular expression is a formal string that describes a pattern of characters.  It defines a set of strings, called a regular language. Regular expressions provide a concise and powerful way to specify complex search criteria.

*   **Formal Definition (Linz):** Let Σ be an alphabet. The following are regular expressions:
    1.  `∅` (Empty Set): Represents the empty language (the language containing no strings).
    2.  `ε` (Epsilon): Represents the language containing only the empty string.
    3.  `a` for any `a ∈ Σ`: Represents the language containing only the string "a".
    4.  If `r1` and `r2` are regular expressions, then the following are also regular expressions:
        *   `(r1 + r2)`: Represents the union of the languages represented by `r1` and `r2`.
        *   `(r1r2)`: Represents the concatenation of the languages represented by `r1` and `r2`.
        *   `(r1*)`: Represents the Kleene closure of the language represented by `r1`. This includes zero or more concatenations of strings from the language represented by `r1`.

*   **Notation and Operators:**
    *   `+` (Union): `r1 + r2` matches strings that match either `r1` or `r2`.  Sometimes denoted as `|` (pipe symbol).
    *   Concatenation: `r1r2` matches strings formed by concatenating a string matching `r1` with a string matching `r2`. Concatenation is usually expressed by simply writing one regex next to the other.
    *   `*` (Kleene Star): `r*` matches zero or more occurrences of the pattern `r`.
    *   `()` (Parentheses): Used for grouping and specifying precedence.

## 3. Interpreting and Constructing Regular Expressions

*   **Example 1:**  Regular expression `a*b` over the alphabet Σ = {a, b} represents the language {b, ab, aab, aaab, ...}. It matches any string that contains zero or more 'a's followed by a single 'b'.

*   **Example 2:**  Regular expression `(a+b)*` over the alphabet Σ = {a, b} represents the language of all possible strings formed from 'a's and 'b's, including the empty string.

*   **Example 3:**  Regular expression `(a+b)*abb` over the alphabet Σ = {a, b} represents the language of all strings that end with the substring "abb".

*   **Constructing Regular Expressions:**
    *   **Problem:**  Write a regular expression for all strings over Σ = {0, 1} that start with 0 and end with 1.
    *   **Solution:** `0(0+1)*1`

*   **Common shorthand notations:**
    *   `[abc]` : Represents `a+b+c` (any character from a, b, or c).
    *   `[a-z]` : Represents any lowercase character from a to z.
    *   `[0-9]` : Represents any digit from 0 to 9.
    *   `.` (dot): Represents any character except newline (depending on the implementation).
    *   `?` (Question Mark): `r?` matches zero or one occurrence of the pattern `r`. Equivalent to `(ε + r)`.
    *   `+` (Plus Sign):  `r+` matches one or more occurrences of the pattern `r`. Equivalent to `rr*`.

## 4. Precedence of Operators

*   Regular expression operators have the following precedence (highest to lowest):
    1.  Parentheses: `()`
    2.  Kleene Star: `*`, `+`, `?`
    3.  Concatenation
    4.  Union: `+` or `|`

*   **Example:**  The regular expression `ab*+c` is interpreted as `(a(b*))+c`.  It matches strings that either consist of an "a" followed by zero or more "b"s, or just a "c".

*   **Importance:** Understanding precedence is crucial for correctly interpreting regular expressions and avoiding unintended matches. Always use parentheses to clarify the intended meaning, especially with complex expressions.

## 5. Regular Expressions and Regular Languages

*   **Key Concept:** Regular expressions are a way to describe regular languages.  A regular language is a language that can be recognized by a finite automaton (DFA or NFA).  (This connection will be formally established later in the course).

*   **Informal Conversion (RE to Language):**  Given a regular expression, you can describe the set of strings it matches in words. (See examples in section 3).

*   **Informal Conversion (Language to RE):**  Given a description of a language (in words), you can often construct a regular expression that represents that language. This can be more difficult and often requires a good understanding of the available operators.

*   **Example:**
    *   **Language:**  All strings over {a, b} that contain at least one 'a'.
    *   **Regular Expression:** `b*ab*`

## 6. Practical Applications and Examples

*   **Example 1: Email Validation:**  A simplified regular expression for email validation: `[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}`.
    *   Explanation: One or more alphanumeric characters, dots, underscores, percentages, pluses or minuses, followed by an "@" symbol, followed by one or more alphanumeric characters, dots, or hyphens, followed by a dot, followed by two or more letters.  (Note: This is a simplified expression; actual email validation is more complex).

*   **Example 2: Phone Number Validation (US Format):**  `((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}`
    *   Explanation: This regex allows for different US phone number formats, like (123) 456-7890, 123-456-7890, or simply 1234567890.

*   **Example 3: Date Validation (YYYY-MM-DD):** `\d{4}-\d{2}-\d{2}`
    *   Explanation: Matches a date in the format YYYY-MM-DD, where YYYY, MM, and DD are four-digit year, two-digit month, and two-digit day, respectively.  (Note: This only validates the *format*, not the validity of the dates themselves, e.g., 2024-02-30 would pass).

*   **Using Regular Expressions in Programming Languages:**  Most programming languages (Python, Java, JavaScript, etc.) have built-in support for regular expressions through libraries or modules. These libraries provide functions for searching, matching, and replacing text using regular expressions.

## 7. Practice Questions and Exercises

1.  **Write a regular expression for all strings over {0, 1} that contain the substring "110".**
    *   **Answer:** `(0+1)*110(0+1)*`

2.  **Write a regular expression for all strings over {a, b, c} that begin and end with the same symbol.**
    *   **Answer:** `a(a+b+c)*a + b(a+b+c)*b + c(a+b+c)*c + a + b + c + ε`  (Important to include the base cases of single symbols and the empty string if it is allowed in the language)

3.  **Describe the language represented by the regular expression `(ab+c)*` over the alphabet {a, b, c}.**
    *   **Answer:** The language consists of all strings formed by concatenating any number (including zero) of the following substrings: "ab" and "c".

4.  **What is the language represented by the regular expression `0+1+` over Σ = {0, 1}?**
    *   **Answer:**  The language consists of all strings formed by one or more 0s, followed by one or more 1s. For instance, "01", "001", "011", and "0011" are in the language.  "10" and "0" are not.

5.  **Write a regular expression that matches a valid IPv4 address (e.g., 192.168.1.1).  (Note:  This is a simplified version; fully validating an IPv4 address is more complex).**
    *   **Answer:** `\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}`.  This ensures four groups of 1 to 3 digits, separated by periods. It doesn't check the range 0-255 for each number.

## 8. Important Points to Remember

*   Regular expressions are a powerful tool for pattern matching.
*   Understanding the precedence of operators is crucial.
*   Parentheses are your friends! Use them to clarify your expressions.
*   Practice constructing regular expressions for different languages.
*   Regular expressions are closely related to regular languages and finite automata.
*   Master the basic operators: union, concatenation, and Kleene star.

This comprehensive guide provides a foundational understanding of pattern matching and regular expressions as presented in Linz's "An Introduction to Formal Languages and Automata." Remember to practice and explore different examples to solidify your knowledge. Good luck!
