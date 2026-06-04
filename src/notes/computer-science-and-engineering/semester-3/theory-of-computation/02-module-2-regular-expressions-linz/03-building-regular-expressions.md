---
title: "Building Regular Expressions"
subject: "THEORY OF COMPUTATION"
module: "Module 2: Regular Expressions (Linz)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8aba6"
status: "completed"
scrapedAt: "2026-05-20T16:29:51.344Z"
---
# THEORY OF COMPUTATION - Module 2: Regular Expressions (Linz) - Building Regular Expressions

**Topic:** Building Regular Expressions

**Description:** This module section focuses on constructing regular expressions to represent specific languages.

**Learning Outcomes:**

*   Understand the basic building blocks of regular expressions (alphabet, concatenation, union, Kleene star).
*   Construct regular expressions for given simple languages.
*   Apply operator precedence rules when building complex regular expressions.
*   Convert descriptions of languages into corresponding regular expressions.
*   Utilize shorthand notations for regular expressions to simplify expression.

## 1. Basic Building Blocks of Regular Expressions

*   **Alphabet (Σ):** A finite set of symbols.  For example, Σ = {a, b}.

*   **Regular Expression:** A sequence of characters that define a search pattern. They describe sets of strings, or languages.

*   **Basic Operations:**
    *   **Concatenation:**  Joining two strings together.  If `r` represents the language L(r) and `s` represents the language L(s), then `rs` represents the language L(r) concatenated with L(s), L(r)L(s). For example, if `r = a` and `s = b`, then `rs = ab`.
    *   **Union (Alternation):** Choosing one string or the other. Denoted by `|` (pipe symbol). `r|s` represents the language L(r) U L(s). For example, if `r = a` and `s = b`, then `r|s` represents the language {a, b}.
    *   **Kleene Star (Repetition):** Zero or more repetitions of a string. Denoted by `*`. `r*` represents the language L(r)*.  This includes the empty string ε. For example, if `r = a`, then `r*` represents the language {ε, a, aa, aaa, ...}.

*   **Empty String (ε):** A string with no symbols.

*   **Empty Set (∅):** A set containing no strings. `∅` is different from `{ε}` which is a set containing the empty string.

**Example:**

Let Σ = {a, b}.

*   `a` represents the language {a}
*   `b` represents the language {b}
*   `ab` represents the language {ab}
*   `a|b` represents the language {a, b}
*   `a*` represents the language {ε, a, aa, aaa, ...}
*   `(a|b)*` represents the language of all strings consisting of a's and b's, including the empty string.

## 2. Constructing Regular Expressions for Simple Languages

To construct a regular expression for a given language, consider the following steps:

1.  **Understand the Language:** Clearly define the language you want to represent. Identify the patterns and constraints.

2.  **Identify the Basic Elements:** Break down the language into smaller, simpler parts.  Use the basic operations (concatenation, union, Kleene star) to combine these parts.

3.  **Combine and Simplify:** Combine the smaller expressions to form the final regular expression. Simplify the expression as much as possible using operator precedence and identities.

**Examples:**

*   **Language:** The set of all strings over Σ = {a, b} that begin with an `a`.
    *   Regular Expression: `a(a|b)*`
    *   Explanation: `a` ensures the string starts with 'a'. `(a|b)*` allows any combination of 'a' and 'b' to follow.

*   **Language:** The set of all strings over Σ = {0, 1} that contain at least one `1`.
    *   Regular Expression: `0*1(0|1)*` or `(0|1)*1(0|1)*`
    *   Explanation: `0*` allows zero or more leading `0`s. `1` ensures at least one `1` is present. `(0|1)*` allows any combination of `0`s and `1`s after the first `1`.

*   **Language:** The set of all strings over Σ = {a, b} of length exactly 2.
    *   Regular Expression: `(a|b)(a|b)` or `aa|ab|ba|bb`
    *   Explanation:  Each `(a|b)` represents one character, and we need exactly two of them.

*   **Language:** The set of all strings over Σ = {a} with an even number of a's.
    *   Regular Expression: `(aa)*`
    *   Explanation: `aa` forms a pair of 'a's. `(aa)*` allows zero or more pairs of 'a's, resulting in an even number of 'a's.

## 3. Operator Precedence Rules

Regular expression operators have precedence, which determines the order of evaluation.

*   **Highest Precedence:** Kleene Star (`*`)
*   **Middle Precedence:** Concatenation (juxtaposition, implied multiplication)
*   **Lowest Precedence:** Union (`|`)

Use parentheses `()` to override the default precedence.

**Examples:**

*   `ab*` is interpreted as `a(b*)`. The Kleene star applies only to `b`.
*   `(ab)*` represents zero or more repetitions of the string `ab`.
*   `a|b*c` is interpreted as `a|(b*c)`.
*   `(a|b)*c` represents any combination of `a`s and `b`s, followed by a `c`.

## 4. Converting Language Descriptions into Regular Expressions

The process of converting language descriptions into regular expressions can be challenging, but the following guidelines can help:

1.  **Break Down Complex Descriptions:** Decompose the language description into smaller, manageable components.

2.  **Use Regular Expression Constructs:**  Map each component to a corresponding regular expression construct (concatenation, union, Kleene star).

3.  **Consider Edge Cases:** Pay attention to edge cases like the empty string or special symbols.

4.  **Test and Refine:**  Test your regular expression with various inputs to ensure it matches the desired language and doesn't match any unintended strings.

**Examples:**

*   **Language:**  All strings over {0, 1} that start and end with a 1.
    *   Regular Expression: `1(0|1)*1` or `1(0|1)*1|1`
    *   Explanation: It must start and end with 1.  `(0|1)*` allows any combination of 0s and 1s in between. The `|1` handles the edge case where the string is just '1'.

*   **Language:**  All strings over {a, b} that contain the substring "aba".
    *   Regular Expression: `(a|b)*aba(a|b)*`
    *   Explanation: `(a|b)*` allows any combination of 'a's and 'b's before "aba". `aba` enforces the presence of the substring.  `(a|b)*` allows any combination of 'a's and 'b's after "aba".

*   **Language:** All strings over {a, b} that do NOT contain the substring "aba". This is considerably more complex.  A regular expression *can* be written for this, but it's more involved and beyond a basic introductory level. (Hint: consider all possible prefixes and suffixes that don't create "aba").

## 5. Shorthand Notations for Regular Expressions

Several shorthand notations can simplify regular expressions:

*   `+` (One or More):  `r+` is equivalent to `rr*`.  Represents one or more occurrences of `r`.
    *   Example: `a+` represents the language {a, aa, aaa, ...}.

*   `?` (Zero or One): `r?` is equivalent to `ε|r`. Represents zero or one occurrence of `r`.
    *   Example: `a?` represents the language {ε, a}.

*   `[abc]` (Character Class): Represents `a|b|c`.
    *   Example: `[0-9]` represents any digit from 0 to 9 (0|1|2|3|4|5|6|7|8|9).

*   `.` (Dot): Matches any single character except newline (in most implementations). The specific set of characters it matches depends on the implementation and the encoding used.
    *   Example: `a.b` matches "aab", "acb", "a0b", etc.

**Examples using Shorthand Notations:**

*   Language: One or more digits.
    *   Regular Expression: `[0-9]+`

*   Language: An optional hyphen followed by one or more digits.
    *   Regular Expression: `-?[0-9]+`

*   Language:  Strings that begin with "a", followed by any single character, followed by "b".
    *   Regular Expression: `a.b`

## 6. Practice Questions & Exercises

1.  **Write a regular expression for the language of all strings over Σ = {0, 1} that contain an even number of 1's.**
2.  **Write a regular expression for the language of all strings over Σ = {a, b} that start with 'a' and end with 'b'.**
3.  **Write a regular expression for the language of all strings over Σ = {a, b} whose length is a multiple of 3.**
4.  **Write a regular expression for the language of all strings over Σ = {0, 1} that do NOT contain consecutive 1s.**
5.  **Simplify the following regular expression:  (a|b)*(a|b)?(a|b)***

**Answers:**

1.  `(0*10*1)*0*`  or `0*(10*10*)*`
    * Explanation: We are looking for pairs of '1's interspersed with any number of '0's. The  `0*` on the end is there to allow for any trailing zeros at the end of the final 'pair'

2.  `a(a|b)*b|ab`
    * Explanation: The core pattern is `a(a|b)*b`. We also must include the edge case, `ab`, where there are no characters between 'a' and 'b'.

3.  `((a|b)(a|b)(a|b))*`
    * Explanation: The `(a|b)(a|b)(a|b)` builds all strings of length 3, and then `*` allows 0 or more repetitions.

4.  `(0|10)*` or `0*(10)*0*`
    * Explanation: Either a single `0` or the string `10` followed by a zero. Any string ending in a single 1 would violate the consecutive 1s rule.  The second expression is a variation that is technically correct, but longer.

5.  `(a|b)*`
    * Explanation: `(a|b)*` already represents all strings over Σ = {a, b}.  Adding `(a|b)?` (zero or one a or b) and `(a|b)*` doesn't change the language represented.

## 7. Important Points to Remember

*   Regular expressions are powerful tools for describing patterns in strings.
*   Understanding operator precedence is crucial for correct interpretation.
*   Break down complex languages into smaller, manageable components.
*   Test your regular expressions thoroughly.
*   Use shorthand notations to simplify your expressions.
*   Be mindful of edge cases and special symbols.
*   There are often multiple regular expressions that represent the same language.  Some are more concise or readable than others.
*   Regular expressions can be deceptively tricky. Don't get discouraged if you struggle at first. Practice is key!
