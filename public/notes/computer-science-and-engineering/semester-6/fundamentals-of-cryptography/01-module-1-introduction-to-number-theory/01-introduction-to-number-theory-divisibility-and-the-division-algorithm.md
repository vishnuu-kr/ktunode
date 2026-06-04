---
title: "Introduction to Number Theory - Divisibility and The Division Algorithm"
subject: "FUNDAMENTALS OF CRYPTOGRAPHY"
module: "Module 1: Introduction to Number Theory "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bcbb"
status: "completed"
scrapedAt: "2026-05-20T16:53:46.775Z"
---
# FUNDAMENTALS OF CRYPTOGRAPHY: Module 1 - Introduction to Number Theory

## Topic: Introduction to Number Theory - Divisibility and The Division Algorithm

### Learning Outcomes:

*   Understand the concept of divisibility.
*   Be able to determine if one integer divides another.
*   Understand and apply the Division Algorithm.
*   Calculate the quotient and remainder when one integer is divided by another.
*   Understand and apply properties of divisibility.

---

### 1. Divisibility

*   **Definition:**  An integer *a* is said to be *divisible* by an integer *b* (not equal to 0) if there exists an integer *k* such that *a = bk*.

    *   We also say that *b* *divides* *a*, *b* is a *divisor* of *a*, or *a* is a *multiple* of *b*.

    *   Notation: *b | a* (read as "b divides a")

*   **Key Concepts:**

    *   If *b | a*, then *a/b* is an integer.
    *   If *b* does not divide *a*, we write *b <binary data, 1 bytes><binary data, 1 bytes><binary data, 1 bytes> a*. In this case, *a/b* is not an integer.
    *   Every integer *a* is divisible by 1 and *a* itself (trivial divisors).

*   **Examples:**

    *   3 | 12  because 12 = 3 * 4
    *   5 <binary data, 1 bytes><binary data, 1 bytes><binary data, 1 bytes> 16 because 16/5 = 3.2 (not an integer)
    *   -2 | 8 because 8 = (-2) * (-4)
    *   7 | 0 because 0 = 7 * 0
    *   0 <binary data, 1 bytes><binary data, 1 bytes><binary data, 1 bytes> 5  because division by 0 is undefined. Also, there is no *k* such that 5 = 0 * *k*

*   **Properties of Divisibility:**

    *   **Transitivity:** If *a | b* and *b | c*, then *a | c*.
    *   **Linear Combination:** If *a | b* and *a | c*, then *a | (mb + nc)* for any integers *m* and *n*. This is a very important property.
    *   If *a | b* and *b | a*, then *a = ±b*.
    *   If *a | b*, then *a | bc* for any integer *c*.
    *   If *a | b* and *b ≠ 0*, then |*a*| ≤ |*b*|.

---

### 2. The Division Algorithm

*   **Theorem (The Division Algorithm):** Given integers *a* and *b* with *b > 0*, there exist unique integers *q* and *r* such that:

    *   *a = bq + r*
    *   where *0 ≤ r < b*

    *   *a* is the *dividend*
    *   *b* is the *divisor*
    *   *q* is the *quotient*
    *   *r* is the *remainder*

*   **Key Concepts:**

    *   The remainder *r* is always non-negative and strictly less than the divisor *b*.
    *   The quotient *q* and the remainder *r* are unique.  There's only one possible *q* and *r* for any given *a* and *b*.

*   **Examples:**

    *   Let *a* = 25 and *b* = 7. Then:
        *   25 = 7 * 3 + 4
        *   So, *q* = 3 and *r* = 4.
    *   Let *a* = -16 and *b* = 3. Then:
        *   -16 = 3 * (-6) + 2
        *   So, *q* = -6 and *r* = 2. Note: We **must** have 0 ≤ *r* < *b*. Therefore, -16 = 3*(-5) - 1  is **incorrect** since *r* = -1 is not within the required range.
    *   Let *a* = 0 and *b* = 5. Then:
        *   0 = 5 * 0 + 0
        *   So, *q* = 0 and *r* = 0.

*   **Applications:**

    *   The Division Algorithm forms the basis for many algorithms in number theory and cryptography.  It allows us to decompose an integer into a multiple of another integer plus a remainder.
    *   Modular Arithmetic heavily relies on the Division Algorithm.

---

### 3. Examples and Applications of Divisibility Properties

*   **Example 1:** Show that if *a | b* and *a | c*, then *a | (mb + nc)* for any integers *m* and *n*.

    *   **Proof:**  Since *a | b*, there exists an integer *k1* such that *b = a*k1*.
    *   Since *a | c*, there exists an integer *k2* such that *c = a*k2*.
    *   Now, consider *mb + nc = m(a*k1*) + n(a*k2*) = a(m*k1 + n*k2*).
    *   Since *m*k1 + n*k2* is an integer, this shows that *a | (mb + nc)*.

*   **Example 2:** Determine if 7 divides 42.

    *   42 = 7 * 6. Since 6 is an integer, 7 | 42.

*   **Example 3:** Determine the quotient and remainder when 100 is divided by 13.

    *   100 = 13 * 7 + 9
    *   Therefore, the quotient is 7 and the remainder is 9.

*   **Example 4:** Determine the quotient and remainder when -50 is divided by 8.

    *   -50 = 8 * (-7) + 6
    *   Therefore, the quotient is -7 and the remainder is 6.

---

### 4. Practice Questions and Exercises

1.  Determine whether 11 divides 143. Justify your answer.
2.  Determine whether 13 divides 100. Justify your answer.
3.  Find the quotient and remainder when 67 is divided by 9.
4.  Find the quotient and remainder when -35 is divided by 6.
5.  If *a | b* and *a | (b+c)*, prove that *a | c*.
6.  Using the properties of divisibility, show that if *a | b*, then *a | (-b)*.

### 5. Answers to Practice Questions

1.  Yes, 11 | 143 because 143 = 11 * 13.  13 is an integer.
2.  No, 13 <binary data, 1 bytes><binary data, 1 bytes><binary data, 1 bytes> 100 because 100/13 ≈ 7.69, which is not an integer.
3.  67 = 9 * 7 + 4.  Quotient is 7, remainder is 4.
4.  -35 = 6 * (-6) + 1. Quotient is -6, remainder is 1.
5.  **Proof:**  Since *a | b*, there exists an integer *k1* such that *b = a*k1*. Since *a | (b+c)*, there exists an integer *k2* such that *b + c = a*k2*. Then *c = (b + c) - b = a*k2* - a*k1* = a*(k2 - k1*).  Since *k2 - k1* is an integer, *a | c*.
6.  **Proof:** Since *a | b*, there exists an integer *k* such that *b = ak*. Multiplying both sides by -1, we get -*b* = *a*(-*k*). Since -*k* is also an integer, it follows that *a | (-b)*.

---

### 6. Important Points to Remember

*   The definition of divisibility is fundamental. Ensure you understand the *a = bk* relationship.
*   The Division Algorithm guarantees the existence of a unique quotient and remainder.  Remember the condition 0 ≤ *r* < *b*.
*   Be careful when working with negative numbers and the Division Algorithm. The remainder *must* be non-negative.
*   Master the properties of divisibility.  They are essential for simplifying problems and proving theorems in number theory.
