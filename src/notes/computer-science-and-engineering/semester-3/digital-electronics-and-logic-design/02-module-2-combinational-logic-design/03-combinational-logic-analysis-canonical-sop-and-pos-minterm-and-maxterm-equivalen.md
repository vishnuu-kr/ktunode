---
title: "Combinational logic analysis - Canonical SOP  and POS, Minterm and Maxterm equivalence"
subject: "DIGITAL ELECTRONICS AND LOGIC DESIGN"
module: "Module 2: Combinational Logic Design: –"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ad51"
status: "completed"
scrapedAt: "2026-05-20T16:23:50.990Z"
---
## DIGITAL ELECTRONICS AND LOGIC DESIGN - MODULE 2: COMBINATIONAL LOGIC DESIGN

**Topic: Combinational Logic Analysis - Canonical SOP and POS, Minterm and Maxterm Equivalence**

**Learning Outcomes:**

*   Understand the concept of combinational logic and its properties.
*   Define and recognize Canonical Sum-of-Products (SOP) and Product-of-Sums (POS) forms.
*   Identify and generate minterms and maxterms for a given number of variables.
*   Express Boolean functions in Canonical SOP (using minterms) and Canonical POS (using maxterms) forms.
*   Understand and demonstrate the equivalence between minterms and maxterms.
*   Convert a function from Canonical SOP to Canonical POS and vice versa.
*   Simplify Boolean expressions using Boolean algebra (review).

---

### 1. Introduction to Combinational Logic

*   **Definition:** A combinational logic circuit is a type of digital circuit whose output at any instant of time depends *only* on the combination of the inputs at that same instant.  It has no memory or feedback elements.
*   **Properties:**
    *   Memoryless: Output is purely a function of the present inputs.
    *   No feedback loops:  Signals flow in one direction (input to output).
    *   Truth table representation: Can be completely defined using a truth table.
*   **Examples:** Adders, multiplexers, decoders, encoders, code converters, comparators.

### 2. Key Concepts and Definitions

*   **Variable:** A symbol (usually a letter like A, B, C) representing a Boolean quantity (0 or 1).
*   **Literal:** A variable or its complement (e.g., A or A'). A' is read as "A not" or "A bar."
*   **Term:** A product of literals (e.g., A.B.C' or A.B'). The "." symbol represents the AND operation.
*   **Sum:** A sum of literals (e.g., A + B + C'). The "+" symbol represents the OR operation.
*   **Product Term:** A term that is the result of ANDing literals (e.g., A.B'.C).
*   **Sum Term:** A term that is the result of ORing literals (e.g., A + B' + C).
*   **Sum-of-Products (SOP) Expression:** An expression consisting of two or more product terms ORed together (e.g., (A.B) + (C.D') + (E.F)).
*   **Product-of-Sums (POS) Expression:** An expression consisting of two or more sum terms ANDed together (e.g., (A + B) . (C + D') . (E + F)).
*   **Canonical Form:**  A standard form for Boolean expressions where each term contains *all* the variables in the function, either in complemented or uncomplemented form.

### 3. Canonical Sum-of-Products (SOP)

*   **Definition:** A SOP expression where *every* product term contains all variables in the function exactly once, either complemented or uncomplemented.  It's also called the *Standard SOP* or *Disjunctive Normal Form (DNF)*.
*   **Minterm:** A product term that contains each variable exactly once, either complemented or uncomplemented. For 'n' variables, there are 2<sup>n</sup> possible minterms.
*   **Representation:** Each minterm corresponds to a unique combination of input values for which the output is '1'.
*   **Notation:** Minterms are usually denoted as m<sub>i</sub>, where 'i' is the decimal equivalent of the binary combination of input values that makes the minterm equal to '1'. For example, if A = 0, B = 1, and C = 0, the minterm is A'BC, and its decimal equivalent is 010 (binary) = 2 (decimal), so we write m<sub>2</sub>.
*   **General Form:** F(A, B, C) = Σm(i, j, k, ...) where i, j, k, ... are the decimal indices of the minterms for which F is '1'.  The Σ symbol indicates the ORing (sum) of the minterms.
*   **Example:** For a function F(A, B) with F = 1 when A = 0, B = 0 and when A = 1, B = 0, the canonical SOP form is:

    *   F(A, B) = A'B' + AB'
    *   Using minterm notation: F(A, B) = m<sub>0</sub> + m<sub>2</sub>
    *   Shorthand notation: F(A, B) = Σm(0, 2)

### 4. Canonical Product-of-Sums (POS)

*   **Definition:** A POS expression where *every* sum term contains all variables in the function exactly once, either complemented or uncomplemented.  It's also called the *Standard POS* or *Conjunctive Normal Form (CNF)*.
*   **Maxterm:** A sum term that contains each variable exactly once, either complemented or uncomplemented. For 'n' variables, there are 2<sup>n</sup> possible maxterms.
*   **Representation:** Each maxterm corresponds to a unique combination of input values for which the output is '0'.
*   **Notation:** Maxterms are usually denoted as M<sub>i</sub>, where 'i' is the decimal equivalent of the binary combination of input values that makes the maxterm equal to '0'. For example, if A = 0, B = 1, and C = 0, the maxterm is A+B'+C, and its decimal equivalent is 010 (binary) = 2 (decimal), so we write M<sub>2</sub>.
*   **General Form:** F(A, B, C) = ΠM(i, j, k, ...) where i, j, k, ... are the decimal indices of the maxterms for which F is '0'.  The Π symbol indicates the ANDing (product) of the maxterms.
*   **Example:** For a function F(A, B) with F = 0 when A = 0, B = 1 and when A = 1, B = 1, the canonical POS form is:

    *   F(A, B) = (A + B') . (A' + B')
    *   Using maxterm notation: F(A, B) = M<sub>1</sub> . M<sub>3</sub>
    *   Shorthand notation: F(A, B) = ΠM(1, 3)

### 5. Minterm and Maxterm Equivalence

*   **Relationship:** Minterms and maxterms are duals of each other.  If a minterm m<sub>i</sub> evaluates to '1' for a specific input combination, the corresponding maxterm M<sub>i</sub> will evaluate to '0' for the same input combination, and vice versa.
*   **Complementary Property:**  For any input combination, m<sub>i</sub>' = M<sub>i</sub> and M<sub>i</sub>' = m<sub>i</sub>.
*   **Derivation:** Consider a two-variable case. The minterm m<sub>0</sub> = A'B'. Its complement is (A'B')' = A + B (by DeMorgan's theorem), which is the maxterm M<sub>0</sub>.
*   **Key Implication:** The indices of the minterms in the SOP representation where the function is '1' are *exactly* the indices *missing* from the maxterm representation where the function is '0'. Similarly, the indices of maxterms are exactly the indices missing from the minterms.

### 6. Converting Between Canonical SOP and POS

*   **Procedure:**

    1.  **Identify Minterm Indices:** Determine the decimal indices (i, j, k...) of the minterms for which the function F = 1.
    2.  **Identify Maxterm Indices:** The decimal indices of the maxterms will be all the indices *not* present in the minterm list, within the range of 0 to 2<sup>n</sup> - 1, where 'n' is the number of variables.
    3.  **Write the POS Expression:** Express the function as a product of the identified maxterms.

    *   **Vice Versa:** Repeat the above process, starting with the indices where F = 0 to find the minterm indices.

*   **Example:** Given F(A, B, C) = Σm(0, 2, 4, 5, 6)

    1.  Minterm indices: 0, 2, 4, 5, 6
    2.  Number of variables: 3 (A, B, C).  Therefore, we need to consider indices from 0 to 2<sup>3</sup> - 1 = 7.
    3.  Maxterm indices: The missing indices are 1, 3, and 7.
    4.  Therefore, F(A, B, C) = ΠM(1, 3, 7)

### 7. Boolean Algebra Review (For Simplification - Beyond Canonical Forms)

*   **Basic Laws:**
    *   **Commutative Law:** A + B = B + A; A . B = B . A
    *   **Associative Law:** (A + B) + C = A + (B + C); (A . B) . C = A . (B . C)
    *   **Distributive Law:** A . (B + C) = (A . B) + (A . C); A + (B . C) = (A + B) . (A + C)
*   **Identity Laws:**
    *   A + 0 = A
    *   A . 1 = A
*   **Null Laws:**
    *   A + 1 = 1
    *   A . 0 = 0
*   **Idempotent Law:**
    *   A + A = A
    *   A . A = A
*   **Complement Law:**
    *   A + A' = 1
    *   A . A' = 0
*   **Involution Law:** (A')' = A
*   **DeMorgan's Theorems:**
    *   (A + B)' = A' . B'
    *   (A . B)' = A' + B'
*   **Absorption Laws:**
    *   A + (A . B) = A
    *   A . (A + B) = A
    *   A + (A' . B) = A + B
    *   A . (A' + B) = A . B

### 8. Important Points to Remember

*   Canonical forms are *unique* for a given Boolean function.  This means that any Boolean function can be expressed in only one canonical SOP form and only one canonical POS form.
*   Canonical forms are useful for:
    *   Standardizing Boolean expressions.
    *   Comparing different Boolean expressions to see if they are equivalent.
    *   Implementing logic functions using standard logic gates.
*   Canonical forms are *not* always the simplest form.  They often contain redundant terms.  Boolean algebra or Karnaugh Maps (K-maps - Covered in later modules) can be used to simplify expressions after they are in canonical form.
*   Understanding minterm and maxterm equivalence is crucial for efficient conversion between SOP and POS forms.

### 9. Practice Questions/Exercises

**1.  For the Boolean function F(A, B, C) = A'BC + AB'C' + ABC + AB'C, determine:**

    *   **(a) The truth table.**
    *   **(b) Express the function in canonical SOP form.**
    *   **(c) Express the function in canonical POS form.**

**Answer:**

**(a) Truth Table:**

| A | B | C | A'BC | AB'C' | ABC | AB'C | F(A, B, C) |
|---|---|---|------|-------|-----|------|------------|
| 0 | 0 | 0 |  0   |   0   |  0  |  0   |      0     |
| 0 | 0 | 1 |  0   |   0   |  0  |  0   |      0     |
| 0 | 1 | 0 |  0   |   0   |  0  |  0   |      0     |
| 0 | 1 | 1 |  1   |   0   |  0  |  0   |      1     |
| 1 | 0 | 0 |  0   |   1   |  0  |  0   |      1     |
| 1 | 0 | 1 |  0   |   0   |  0  |  1   |      1     |
| 1 | 1 | 0 |  0   |   0   |  1  |  0   |      1     |
| 1 | 1 | 1 |  0   |   0   |  1  |  0   |      1     |

**(b) Canonical SOP Form:**

From the truth table, F = 1 for input combinations 011, 100, 101, 110, and 111.

*   F(A, B, C) = A'BC + AB'C' + AB'C + ABC' + ABC
*   Using minterm notation: F(A, B, C) = m<sub>3</sub> + m<sub>4</sub> + m<sub>5</sub> + m<sub>6</sub> + m<sub>7</sub>
*   Shorthand: F(A, B, C) = Σm(3, 4, 5, 6, 7)

**(c) Canonical POS Form:**

From the truth table, F = 0 for input combinations 000, 001, and 010.

*   The missing minterms are 0, 1 and 2. These correspond to the maxterms.
*   F(A, B, C) = ΠM(0, 1, 2)
*   F(A,B,C) = (A+B+C)(A+B+C')(A+B'+C)

**2.  Given F(X, Y, Z) = ΠM(0, 2, 4, 5), express the function in canonical SOP form.**

**Answer:**

*   Number of variables: 3 (X, Y, Z). Range of indices: 0 to 7.
*   Maxterm indices: 0, 2, 4, 5
*   Minterm indices (missing from Maxterm set): 1, 3, 6, 7
*   F(X, Y, Z) = Σm(1, 3, 6, 7)
*   F(X,Y,Z) = X'Y'Z + X'YZ + XY Z' + XYZ

**3. Express the boolean function F(A,B,C) = A+B'C in canonical SOP form**
*Answer:*

F(A,B,C) = A(B+B')(C+C') + B'C(A+A')
        = A(BC + BC' + B'C + B'C') + AB'C + A'B'C
        = ABC + ABC' + AB'C + AB'C' + AB'C + A'B'C
        = ABC + ABC' + AB'C + AB'C' + A'B'C (removing duplicates)
        = m7 + m6 + m5 + m4 + m1
        = Σm(1, 4, 5, 6, 7)

**4. Simplify the following boolean function F(A,B,C,D) = Σm(0,2,3,5,7,8,10,11,14,15) using boolean algebra. Note, this is *beyond* canonical forms and a review of simplification techniques.**
*Answer:*
    F(A,B,C,D) = A'B'C'D' + A'B'CD' + A'B'CD + A'BC'D + A'BCD + AB'C'D' + AB'CD' + AB'CD + ABC'D + ABCD
                = A'B'(C'D' + CD' + CD) + A'BC'D + A'BCD + AB'(C'D' + CD' + CD) + ABC'D + ABCD
                = A'B'(C'D' + CD' + CD) + A'D(BC' + BC) + AB'(C'D' + CD' + CD) + AD(BC' + BC)
                = A'B'(C'D' + C(D'+D)) + A'D(B) + AB'(C'D' + C(D'+D)) + AD(B)
                = A'B'(C'D' + C(1)) + A'BD + AB'(C'D' + C(1)) + ABD
                = A'B'(C'D' + C) + A'BD + AB'(C'D' + C) + ABD
                = A'B'(C + D') + A'BD + AB'(C + D') + ABD
                = B'(A' + A)(C + D') + BD(A' + A)
                = B'(C+D') + BD
                = B'C + B'D' + BD

---

These notes provide a comprehensive overview of combinational logic analysis, focusing on canonical SOP and POS forms and the equivalence between minterms and maxterms.  Remember to practice these concepts with various examples to solidify your understanding. Good luck with your studies!
