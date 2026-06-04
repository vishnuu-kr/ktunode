---
title: "Logic minimization - Algebraic minimization, K-map minimization, Dont cares, Code convertors."
subject: "DIGITAL ELECTRONICS AND LOGIC DESIGN"
module: "Module 2: Combinational Logic Design: –"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ad52"
status: "completed"
scrapedAt: "2026-05-20T16:23:51.707Z"
---
# DIGITAL ELECTRONICS AND LOGIC DESIGN - MODULE 2: COMBINATIONAL LOGIC DESIGN

## Topic: Logic Minimization - Algebraic Minimization, K-Map Minimization, Don't Cares, Code Converters

**Learning Outcomes:**

*   Understand the need for logic minimization.
*   Apply algebraic techniques for logic minimization.
*   Utilize Karnaugh Maps (K-maps) for simplifying Boolean expressions.
*   Incorporate "don't care" conditions to further simplify logic circuits.
*   Design and implement code converters using combinational logic.

---

### 1. Introduction to Logic Minimization

*   **Definition:** Logic minimization is the process of simplifying Boolean expressions and reducing the number of logic gates required to implement a digital circuit.
*   **Importance:**
    *   **Cost Reduction:** Fewer gates mean lower hardware costs.
    *   **Improved Performance:** Simplified circuits typically have shorter propagation delays, leading to faster operation.
    *   **Reduced Power Consumption:** Fewer gates generally consume less power.
    *   **Increased Reliability:** Simpler circuits are often more reliable.

---

### 2. Algebraic Minimization

*   **Definition:** Algebraic minimization involves using Boolean algebra laws and theorems to simplify Boolean expressions.
*   **Key Boolean Algebra Laws and Theorems:**
    *   **Commutative Law:** A + B = B + A,  A ⋅ B = B ⋅ A
    *   **Associative Law:** (A + B) + C = A + (B + C), (A ⋅ B) ⋅ C = A ⋅ (B ⋅ C)
    *   **Distributive Law:** A ⋅ (B + C) = A ⋅ B + A ⋅ C,  A + (B ⋅ C) = (A + B) ⋅ (A + C)
    *   **Identity Law:** A + 0 = A, A ⋅ 1 = A
    *   **Inverse Law:** A + A' = 1,  A ⋅ A' = 0
    *   **Idempotent Law:** A + A = A,  A ⋅ A = A
    *   **Absorption Law:** A + (A ⋅ B) = A,  A ⋅ (A + B) = A
    *   **DeMorgan's Theorems:** (A + B)' = A' ⋅ B', (A ⋅ B)' = A' + B'
    *   **Double Negation Law:** (A')' = A

*   **Procedure:**
    1.  Apply Boolean algebra laws to manipulate and simplify the expression.
    2.  Look for opportunities to factor out common terms.
    3.  Use DeMorgan's theorems to simplify complemented expressions.
    4.  Repeat steps 1-3 until no further simplification is possible.

*   **Example:**

    Minimize the expression: `F = A'BC + AB'C' + ABC + ABC'`

    1. `F = A'BC + ABC + AB'C' + ABC'` (Rearrange terms)
    2. `F = BC(A' + A) + AB'(C' + C)` (Factor out common terms)
    3. `F = BC(1) + AB'(1)` (Apply inverse law)
    4. `F = BC + AB'` (Apply identity law)

*   **Limitations:**
    *   Algebraic minimization can be tedious and error-prone for complex expressions.
    *   It relies on recognizing specific patterns, which can be challenging.

**Practice Question 1:**

Minimize the expression: `F = AB + A(B+C) + B(B+C)`

**Answer 1:**

1. `F = AB + AB + AC + B + BC` (Distributive Law)
2. `F = AB + AC + B + BC` (Idempotent Law: AB + AB = AB)
3. `F = AB + AC + B(1 + C)` (Factor out B)
4. `F = AB + AC + B` (1+C = 1)
5. `F = B + AB + AC`
6. `F = B(1+A) + AC` (Factor out B)
7. `F = B + AC` (1+A = 1)

**Practice Question 2:**

Minimize the expression: `F = A'B'C' + A'BC' + AB'C' + ABC'`

**Answer 2:**

1. `F = C'(A'B' + A'B + AB' + AB)` (Factor out C')
2. `F = C'((A'B' + AB') + (A'B + AB))` (Rearrange Terms)
3. `F = C'(B'(A' + A) + B(A' + A))` (Factor out B' and B)
4. `F = C'(B'(1) + B(1))` (Inverse Law)
5. `F = C'(B' + B)`
6. `F = C'(1)`
7. `F = C'`

---

### 3. Karnaugh Map (K-Map) Minimization

*   **Definition:** A Karnaugh map (K-map) is a graphical tool used to simplify Boolean expressions by visually identifying and grouping adjacent terms.
*   **K-Map Structure:**
    *   A K-map consists of cells representing the different combinations of input variables.
    *   The cells are arranged in a way that adjacent cells differ by only one variable (Gray code ordering).
    *   The number of cells in a K-map is 2<sup>n</sup>, where n is the number of input variables.

*   **K-Map Sizes:**
    *   2-variable K-map: 2 x 2 = 4 cells
    *   3-variable K-map: 2 x 4 = 8 cells
    *   4-variable K-map: 4 x 4 = 16 cells
    *   5-variable K-map: Two 4x4 K-maps (one for A=0 and one for A=1, for example) - more difficult to visualize and minimize
    *   K-maps larger than 5 variables are difficult to use, and alternative techniques like the Quine-McCluskey algorithm are preferred.

*   **Procedure:**
    1.  **Construct the K-map:** Create a K-map with the appropriate number of cells for the number of input variables.  Label the rows and columns using Gray code.
    2.  **Populate the K-map:**  Transfer the values of the function (0 or 1) into the corresponding cells of the K-map based on the truth table or Boolean expression.
    3.  **Grouping Cells:** Group adjacent cells containing '1's into groups of powers of 2 (1, 2, 4, 8, 16, etc.).  Groups can overlap.
    4.  **Form the Simplified Expression:**  For each group, identify the variables that remain constant within the group.  The simplified expression is the sum of the product terms represented by each group.

*   **Grouping Rules:**
    *   Groups must contain only 1s (and Don't Cares).
    *   Groups must be rectangular or square.
    *   The number of cells in each group must be a power of 2 (1, 2, 4, 8, 16,...).
    *   Groups should be as large as possible (maximize the number of cells in each group).
    *   Each '1' on the map must be included in at least one group, even if that means overlapping.
    *   Groups can wrap around the edges of the map.

*   **Example (3-Variable K-Map):**

    Minimize the function:  `F(A, B, C) = Σm(0, 2, 4, 5, 6)`

    1.  **K-Map:**

        ```
              BC
            00  01  11  10
        A 0 | 1   0   0   1
          1 | 1   1   0   1
        ```

    2.  **Grouping:**
        *   Group 1: Cells 0 and 4 (A'B')
        *   Group 2: Cells 4 and 6 (AC')
        *   Group 3: Cells 5 and 4 (AB')

    3.  **Simplified Expression:** `F = B'C' + AC' + A'C'` (Incorrect grouping. Corrected Below)

        *   Group 1: Cells 0, 2  => A'C'
        *   Group 2: Cells 4, 6  => AC'
        *   Group 3: Cells 4, 5  => AB'

        Simplified expression:  `F = A'C' + AC' + AB'`

        This can be further minimized using boolean algebra (optional):

        `F = C'(A' + A) + AB'`
        `F = C' + AB'`

*   **Example (4-Variable K-Map):**

    Minimize the function: `F(A, B, C, D) = Σm(0, 2, 4, 5, 6, 7, 8, 10, 13, 15)`

    1.  **K-Map:**

        ```
              CD
            00  01  11  10
        AB 00 | 1   0   0   1
           01 | 1   1   1   1
           11 | 0   1   1   0
           10 | 1   0   1   1
        ```

    2.  **Grouping:**
        *   Group 1: Cells 5, 7, 13, 15  (BC)
        *   Group 2: Cells 4, 5, 6, 7 (AC)
        *   Group 3: Cells 0, 2, 8, 10 (D')

    3.  **Simplified Expression:** `F = BC + AC + D'`

**Practice Question 3:**

Minimize the following function using a K-map: `F(A, B, C) = Σm(1, 3, 5, 7)`

**Answer 3:**

1. **K-Map:**

   ```
         BC
       00  01  11  10
   A 0 | 0   1   1   0
     1 | 0   1   1   0
   ```

2. **Grouping:**  We can form one group of 4 cells covering 1, 3, 5, and 7.

3. **Simplified Expression:** `F = B`  (Only B is constant within the entire group of 4)

**Practice Question 4:**

Minimize the following function using a K-map: `F(W, X, Y, Z) = Σm(0, 2, 4, 5, 6, 7, 8, 10, 13, 15)`

**Answer 4:** (Same as the previous 4-variable K-map example, `F = BC + AD + W'Z'` is **incorrect**. I have now changed this to the same as example so as not to introduce an issue and will not do that moving forward). Correct grouping is highlighted in the example.
`F = BC + AC + D'`

---

### 4. Don't Cares (X or d)

*   **Definition:** "Don't care" conditions are input combinations for which the output of a logic circuit is unspecified or irrelevant.  They arise when certain input combinations are impossible or when the output for those combinations doesn't affect the overall functionality.
*   **Representation:** Don't care conditions are represented by 'X' or 'd' in a truth table or K-map.
*   **Utilization:**
    *   In K-map minimization, don't cares can be treated as either '0' or '1' to form larger groups and further simplify the expression.
    *   The goal is to choose the '0' or '1' assignment for each don't care that leads to the largest possible groups.

*   **Example:**

    Minimize the function: `F(A, B, C, D) = Σm(1, 3, 7, 11, 15) + d(0, 2, 5)`  (where d represents don't cares)

    1.  **K-Map:**

        ```
              CD
            00  01  11  10
        AB 00 | X   1   0   X
           01 | X   1   1   0
           11 | 0   1   1   0
           10 | 0   0   1   0
        ```

    2.  **Grouping:**
        *   Group 1: Cells 1, 3, 5, 7, 11, 15 (Assign X = 1 to cell 5 to make largest group) =  `BD`
        *   Group 2: Cells 0, 2 (Assign X=1 to cells 0 & 2) = `A'C'`

    3.  **Simplified Expression:** `F = BD + A'C'`

        Notice how using the Don't Cares as 1 allowed us to form the larger group of `BD`.

*   **Importance of Don't Cares:** Don't cares often provide significant simplification in logic circuits, leading to smaller and more efficient implementations.

**Practice Question 5:**

Minimize the following function using a K-map, including the don't care conditions: `F(A, B, C) = Σm(0, 1, 2) + d(3, 7)`

**Answer 5:**

1. **K-Map:**

   ```
         BC
       00  01  11  10
   A 0 | 1   1   X   1
     1 | 0   0   X   0
   ```

2. **Grouping:**
   *   Group 1: Cells 0, 1, 2, 3 (Assign X=1 to cell 3): `A'`
   *   Group 2: Cells 2, 3, 6, 7 (Assign X=1 to cell 7): `C`

3. **Simplified Expression:** `F= A' + C`

**Practice Question 6:**

Minimize the following function using a K-map, including the don't care conditions: `F(A, B, C, D) = Σm(4, 6, 8, 10, 12, 14) + d(2, 5, 7, 13)`

**Answer 6:**

1. **K-Map:**

   ```
         CD
       00  01  11  10
   AB 00 | 0   X   0   1
      01 | 1   X   X   1
      11 | 1   X   X   1
      10 | 1   0   0   1
   ```

2. **Grouping:**
   *   Group 1: 4, 6, 12, 14 (Assign X = 5,7, 13 to be zero ) = `A*C'`
   *   Group 2: 8, 10, 12, 14  (Assign X = 2 to be zero) = `A * B'`
**Simplified Expression:** `F = AC'` +  `AB'`

---

### 5. Code Converters

*   **Definition:** A code converter is a combinational circuit that transforms data from one binary code to another (e.g., binary to Gray code, BCD to Excess-3, etc.).
*   **Design Process:**
    1.  **Truth Table:** Create a truth table that maps the input code to the desired output code.
    2.  **Boolean Expressions:** Derive Boolean expressions for each output bit in terms of the input bits.
    3.  **Logic Minimization:** Minimize the Boolean expressions using algebraic techniques or K-maps.
    4.  **Circuit Implementation:** Implement the minimized expressions using logic gates.

*   **Examples:**

    *   **Binary-to-Gray Code Converter:**  Converts binary code to Gray code. Gray code has the property that only one bit changes between successive code words, which is useful in reducing errors in digital systems.
    *   **BCD-to-Excess-3 Code Converter:** Converts Binary Coded Decimal (BCD) to Excess-3 code.  Excess-3 is a self-complementing code, useful for arithmetic operations.

*   **Binary-to-Gray Code Converter Example:**

    *   **Inputs:** A, B, C (3-bit binary)
    *   **Outputs:** G1, G2, G3 (3-bit Gray code)
    *   **Truth Table:**

        | A | B | C | G1 | G2 | G3 |
        |---|---|---|----|----|----|
        | 0 | 0 | 0 | 0  | 0  | 0  |
        | 0 | 0 | 1 | 0  | 0  | 1  |
        | 0 | 1 | 0 | 0  | 1  | 1  |
        | 0 | 1 | 1 | 0  | 1  | 0  |
        | 1 | 0 | 0 | 1  | 1  | 0  |
        | 1 | 0 | 1 | 1  | 1  | 1  |
        | 1 | 1 | 0 | 1  | 0  | 1  |
        | 1 | 1 | 1 | 1  | 0  | 0  |

    *   **Boolean Expressions:**
        *   G1 = A
        *   G2 = A ⊕ B (A XOR B)
        *   G3 = B ⊕ C (B XOR C)

    *   **Circuit Implementation:** (Implement XOR gates accordingly)

*   **BCD-to-Excess-3 Code Converter Example:**

    *   **Inputs:** A, B, C, D (BCD code)
    *   **Outputs:** W, X, Y, Z (Excess-3 code)
    *   **Truth Table:** (First ten rows only as BCD only uses first ten combinations)

        | A | B | C | D | W | X | Y | Z |
        |---|---|---|---|---|---|---|---|
        | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 |
        | 0 | 0 | 0 | 1 | 0 | 1 | 0 | 0 |
        | 0 | 0 | 1 | 0 | 0 | 1 | 0 | 1 |
        | 0 | 0 | 1 | 1 | 0 | 1 | 1 | 0 |
        | 0 | 1 | 0 | 0 | 0 | 1 | 1 | 1 |
        | 0 | 1 | 0 | 1 | 1 | 0 | 0 | 0 |
        | 0 | 1 | 1 | 0 | 1 | 0 | 0 | 1 |
        | 0 | 1 | 1 | 1 | 1 | 0 | 1 | 0 |
        | 1 | 0 | 0 | 0 | 1 | 0 | 1 | 1 |
        | 1 | 0 | 0 | 1 | 1 | 1 | 0 | 0 |
        | 1 | 0 | 1 | 0 | X | X | X | X |
        | 1 | 0 | 1 | 1 | X | X | X | X |
        | 1 | 1 | 0 | 0 | X | X | X | X |
        | 1 | 1 | 0 | 1 | X | X | X | X |
        | 1 | 1 | 1 | 0 | X | X | X | X |
        | 1 | 1 | 1 | 1 | X | X | X | X |

    *   **Boolean Expressions:** Derived using K-Maps for each output variable, with Don't Cares for the invalid BCD inputs (10-15).

        *   W = A + BC + BD
        *   X = B'C + B'D + BC'D'
        *   Y = C'D' + CD
        *   Z = D'

    *   **Circuit Implementation:** Implement logic gates based on minimized Boolean expressions.

**Practice Question 7:**

Design a Binary-to-Excess-3 converter for the numbers 0-3.  Show the truth table and logic equations.

**Answer 7:**
Inputs A, B; Outputs W, X

|A|B|W|X|
|---|---|---|---|
|0|0|0|1|
|0|1|1|0|
|1|0|1|1|
|1|1|X|X| (Don't Care)

W = A + B
X = A'B' + A'B = A'

**Practice Question 8:**

Explain how don't care conditions are helpful for simplifying code converter circuits.

**Answer 8:**

Don't care conditions arise in code converters when certain input combinations are invalid.  Treating them as either 0 or 1 during minimization gives the designer more freedom to form larger groups on the K-map, resulting in simpler logic expressions and therefore simpler, smaller, and potentially faster code converter circuits. This leads to cost savings and better performance.

---

### 6. Important Points to Remember

*   Logic minimization is crucial for designing efficient digital circuits.
*   Algebraic minimization can be useful for simple expressions, but K-maps are generally more effective for complex expressions.
*   K-maps provide a visual way to identify and group adjacent terms, simplifying the minimization process.
*   Don't care conditions can significantly simplify logic circuits by allowing more flexibility in grouping terms.
*   Code converters are essential building blocks in digital systems for transforming data between different binary codes.

These notes provide a comprehensive overview of logic minimization techniques and code converters. Understanding and applying these concepts is essential for designing efficient and reliable digital circuits. Remember to practice with various examples to solidify your understanding. Good luck!
