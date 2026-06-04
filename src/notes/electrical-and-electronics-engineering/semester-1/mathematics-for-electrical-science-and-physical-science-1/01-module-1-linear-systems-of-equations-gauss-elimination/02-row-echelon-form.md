---
title: "Row echelon form"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL 
SCIENCE - 1"
module: "Module 1: Linear systems of equations: Gauss elimination"
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213e9ece2bdd875f94f1"
status: "completed"
scrapedAt: "2026-05-23T16:03:02.679Z"
---
# Mathematics for Electrical Science and Physical Science - 1

## Module 1: Linear Systems of Equations: Gauss Elimination

### Topic: Row Echelon Form

Welcome, everyone! Today, we're diving into the very foundation of solving linear systems of equations, a skill absolutely critical for both electrical and physical sciences. Think about it: analyzing circuits, understanding wave mechanics, or even modeling population dynamics – they all often boil down to a set of interconnected linear equations. Our goal is to systematically solve these systems, and a crucial tool in our arsenal for this is the **Gauss elimination method**.

Now, the Gauss elimination method is all about transforming a given system of linear equations into a simpler, equivalent system that's much easier to solve. And the key to this transformation lies in achieving a specific structure for the augmented matrix of the system: the **Row Echelon Form**.

### What's the Big Deal About "Row Echelon Form"?

Imagine you have a jumbled pile of wires and components in a circuit. You can't easily figure out how everything connects or how the current flows until you organize them. Similarly, a system of linear equations, when represented as a matrix, might look messy. Row echelon form is like organizing those wires into a neat, understandable layout.

Why is it so special? Because a matrix in row echelon form reveals the structure of the system of equations, making it straightforward to determine if a solution exists, if it's unique, or if there are infinitely many. More importantly, it sets the stage for us to easily "back-substitute" and find the actual values of our variables. This directly ties into **CO1: Solve systems of linear equations**, which is our primary focus here.

Let's get into the formal definition, but I want you to keep that intuitive idea of "organized and easy to solve" in mind.

### Defining Row Echelon Form: The Rules of the Game

A matrix is said to be in **Row Echelon Form (REF)** if it satisfies the following three conditions:

1.  **All zero rows are at the bottom.** A zero row is a row where every entry is zero. If you have a row of all zeros, it must sit below any row that has at least one non-zero entry.
    *   *Think of it this way:* If a row is entirely zeros, it doesn't give us any new information about our variables, so it's best to push it to the bottom, out of the way.

2.  **The leading entry (or pivot) of each non-zero row is 1.** The leading entry is the *first* non-zero number you encounter when reading a row from left to right. This leading entry must be a '1'.
    *   *Why a '1'?* Having a '1' as the leading entry simplifies subsequent calculations. It's like having a standard unit to measure from. For instance, if your first equation is $2x + 3y = 5$, and you're trying to eliminate $x$ from other equations, it's much easier if the first equation was $x + \frac{3}{2}y = \frac{5}{2}$. We can achieve this by scaling the row.

3.  **The leading entry of each non-zero row is to the right of the leading entry of the row above it.** This creates a "staircase" or "echelon" pattern.
    *   *Picture this:* If the first non-zero entry in row 1 is in column 2, the first non-zero entry in row 2 must be in a column to the right of column 2 (say, column 3), and so on. This arrangement ensures that each variable's primary coefficient (its pivot) appears in a unique column as we move down the matrix.

Let's illustrate with an example. Consider the following matrix:

$$
A = \begin{pmatrix}
1 & 3 & -2 & 4 \\
0 & 1 & 5 & 2 \\
0 & 0 & 1 & -3 \\
0 & 0 & 0 & 0
\end{pmatrix}
$$

Let's check the conditions:
*   **Condition 1:** The last row is a zero row, and it's at the bottom. ✓
*   **Condition 2:** The leading entries of the non-zero rows (1, 1, 1) are all 1s. ✓
*   **Condition 3:** The leading entry of row 1 is in column 1. The leading entry of row 2 is in column 2 (to the right of column 1). The leading entry of row 3 is in column 3 (to the right of column 2). ✓

So, matrix $A$ is indeed in **Row Echelon Form**.

Now, what about this one?

$$
B = \begin{pmatrix}
1 & 3 & -2 & 4 \\
0 & 2 & 5 & 2 \\
0 & 0 & 1 & -3 \\
0 & 0 & 0 & 0
\end{pmatrix}
$$

This matrix fails Condition 2. The leading entry in the second row is '2', not '1'. We would need to perform a row operation (dividing the second row by 2) to get it into REF. This process of using row operations to achieve REF is the heart of Gauss elimination.

And this one?

$$
C = \begin{pmatrix}
1 & 3 & -2 & 4 \\
0 & 0 & 1 & 2 \\
0 & 1 & 5 & -3 \\
0 & 0 & 0 & 0
\end{pmatrix}
$$

This matrix fails Condition 3. The leading entry of row 2 is in column 3. The leading entry of row 3 is in column 2. Column 2 is *not* to the right of column 3. The '1' in the second row should be further to the right. This means we'd need to swap rows to fix this.

### The Power of Row Echelon Form: Connecting to Systems of Equations

Let's bring this back to our linear systems. Suppose we have a system of equations like this:

$x + 2y - z = 3$
$2x - y + z = 0$
$3x + y + 2z = 5$

We can represent this system using an **augmented matrix**. The coefficients of the variables form the main part of the matrix, and the constants on the right-hand side form an extra column, separated by a line or just a space.

The augmented matrix for our system is:

$$
\begin{pmatrix}
1 & 2 & -1 & | & 3 \\
2 & -1 & 1 & | & 0 \\
3 & 1 & 2 & | & 5
\end{pmatrix}
$$

The goal of Gauss elimination is to use elementary row operations to transform this augmented matrix into Row Echelon Form. The elementary row operations are:

1.  **Swapping two rows:** $R_i \leftrightarrow R_j$. This is like reordering the equations.
2.  **Multiplying a row by a non-zero scalar:** $cR_i \rightarrow R_i$ (where $c \neq 0$). This is like multiplying an entire equation by a non-zero number.
3.  **Adding a multiple of one row to another row:** $R_i + cR_j \rightarrow R_i$. This is the most powerful operation, and it's like adding a multiple of one equation to another.

Let's apply these to our example matrix:

$$
\begin{pmatrix}
1 & 2 & -1 & | & 3 \\
2 & -1 & 1 & | & 0 \\
3 & 1 & 2 & | & 5
\end{pmatrix}
$$

Our first goal is to get a '1' in the top-left position, which we already have! Great. Now, we want to make the entries below this '1' in the first column into zeros.

*   To make the '2' in $R_2$ zero, we can do $R_2 - 2R_1 \rightarrow R_2$:
    $$(2, -1, 1, | , 0) - 2 \times (1, 2, -1, | , 3) = (2, -1, 1, | , 0) - (2, 4, -2, | , 6) = (0, -5, 3, | , -6)$$
    The matrix becomes:
    $$
    \begin{pmatrix}
    1 & 2 & -1 & | & 3 \\
    0 & -5 & 3 & | & -6 \\
    3 & 1 & 2 & | & 5
    \end{pmatrix}
    $$

*   To make the '3' in $R_3$ zero, we can do $R_3 - 3R_1 \rightarrow R_3$:
    $$(3, 1, 2, | , 5) - 3 \times (1, 2, -1, | , 3) = (3, 1, 2, | , 5) - (3, 6, -3, | , 9) = (0, -5, 5, | , -4)$$
    The matrix is now:
    $$
    \begin{pmatrix}
    1 & 2 & -1 & | & 3 \\
    0 & -5 & 3 & | & -6 \\
    0 & -5 & 5 & | & -4
    \end{pmatrix}
    $$

Now, we move to the second row and look at the first non-zero entry, which is '-5' in the second column. We need this to be a '1'. So, we'll divide the second row by -5: $R_2 / (-5) \rightarrow R_2$:

$$
(0, -5, 3, | , -6) / (-5) = (0, 1, -3/5, | , 6/5)
$$

The matrix is:
$$
\begin{pmatrix}
1 & 2 & -1 & | & 3 \\
0 & 1 & -3/5 & | & 6/5 \\
0 & -5 & 5 & | & -4
\end{pmatrix}
$$

Next, we want to make the entry below our new pivot ('1' in $R_2, C_2$) zero. That's the '-5' in $R_3, C_2$. We can do this by $R_3 + 5R_2 \rightarrow R_3$:

$$(0, -5, 5, | , -4) + 5 \times (0, 1, -3/5, | , 6/5) = (0, -5, 5, | , -4) + (0, 5, -3, | , 6) = (0, 0, 2, | , 2)$$

The matrix becomes:
$$
\begin{pmatrix}
1 & 2 & -1 & | & 3 \\
0 & 1 & -3/5 & | & 6/5 \\
0 & 0 & 2 & | & 2
\end{pmatrix}
$$

Finally, we look at the third row. The first non-zero entry is '2' in the third column. We need this to be a '1'. So, we divide the third row by 2: $R_3 / 2 \rightarrow R_3$:

$$
(0, 0, 2, | , 2) / 2 = (0, 0, 1, | , 1)
$$

Our final matrix is:
$$
\begin{pmatrix}
1 & 2 & -1 & | & 3 \\
0 & 1 & -3/5 & | & 6/5 \\
0 & 0 & 1 & | & 1
\end{pmatrix}
$$

Let's check our conditions for Row Echelon Form:
1.  No zero rows. ✓
2.  Leading entries are all 1s (1, 1, 1). ✓
3.  Leading entries are to the right of the one above (column 1, column 2, column 3). ✓

Success! We have successfully transformed the augmented matrix into Row Echelon Form.

### What This Row Echelon Form Tells Us

The beauty of this form is that it directly translates back into a simpler system of equations:

$1x + 2y - 1z = 3$  (from $R_1$)
$0x + 1y - \frac{3}{5}z = \frac{6}{5}$ (from $R_2$)
$0x + 0y + 1z = 1$ (from $R_3$)

This simplifies to:

$x + 2y - z = 3$
$y - \frac{3}{5}z = \frac{6}{5}$
$z = 1$

See how easy it is to solve now? From the last equation, we *immediately* know $z=1$. This is the **back-substitution** process.

*   **Step 1: Solve for z.** We already have $z=1$.

*   **Step 2: Substitute z into the second equation to solve for y.**
    $y - \frac{3}{5}(1) = \frac{6}{5}$
    $y - \frac{3}{5} = \frac{6}{5}$
    $y = \frac{6}{5} + \frac{3}{5} = \frac{9}{5}$
    So, $y = \frac{9}{5}$.

*   **Step 3: Substitute the values of z and y into the first equation to solve for x.**
    $x + 2(\frac{9}{5}) - (1) = 3$
    $x + \frac{18}{5} - 1 = 3$
    $x + \frac{18}{5} = 4$
    $x = 4 - \frac{18}{5} = \frac{20}{5} - \frac{18}{5} = \frac{2}{5}$
    So, $x = \frac{2}{5}$.

And there you have it! The unique solution to our system is $(x, y, z) = (\frac{2}{5}, \frac{9}{5}, 1)$. This demonstrates how achieving Row Echelon Form directly leads to solving the system, fulfilling **CO1**.

### A Note on "Reduced Row Echelon Form" (RREF)

You might also hear about **Reduced Row Echelon Form (RREF)**. It's a stricter version of REF. A matrix is in RREF if:
1.  It's in Row Echelon Form.
2.  *Every* leading entry (pivot) is the *only* non-zero entry in its column.

So, in our example, our matrix was in REF, but not RREF. To get to RREF, we'd also need to make the '2' in $R_1, C_2$ zero, and the '-1' in $R_1, C_3$ zero.

For our matrix:
$$
\begin{pmatrix}
1 & 2 & -1 & | & 3 \\
0 & 1 & -3/5 & | & 6/5 \\
0 & 0 & 1 & | & 1
\end{pmatrix}
$$

To make the '-1' in $R_1, C_3$ zero, we'd do $R_1 + R_3 \rightarrow R_1$:
$$(1, 2, -1, | , 3) + (0, 0, 1, | , 1) = (1, 2, 0, | , 4)$$
Matrix is now:
$$
\begin{pmatrix}
1 & 2 & 0 & | & 4 \\
0 & 1 & -3/5 & | & 6/5 \\
0 & 0 & 1 & | & 1
\end{pmatrix}
$$

To make the '2' in $R_1, C_2$ zero, we'd do $R_1 - 2R_2 \rightarrow R_1$:
$$(1, 2, 0, | , 4) - 2 \times (0, 1, -3/5, | , 6/5) = (1, 2, 0, | , 4) - (0, 2, -6/5, | , 12/5) = (1, 0, 6/5, | , 8/5)$$
Matrix is now:
$$
\begin{pmatrix}
1 & 0 & 6/5 & | & 8/5 \\
0 & 1 & -3/5 & | & 6/5 \\
0 & 0 & 1 & | & 1
\end{pmatrix}
$$
Notice we still have the '-3/5' in $R_2, C_3$ to deal with. We'd do $R_2 + (3/5)R_3 \rightarrow R_2$:
$$(0, 1, -3/5, | , 6/5) + (3/5) \times (0, 0, 1, | , 1) = (0, 1, -3/5, | , 6/5) + (0, 0, 3/5, | , 3/5) = (0, 1, 0, | , 9/5)$$
The matrix is now:
$$
\begin{pmatrix}
1 & 0 & 6/5 & | & 8/5 \\
0 & 1 & 0 & | & 9/5 \\
0 & 0 & 1 & | & 1
\end{pmatrix}
$$
And finally, we need to make the '6/5' in $R_1, C_3$ zero. We do $R_1 - (6/5)R_3 \rightarrow R_1$:
$$(1, 0, 6/5, | , 8/5) - (6/5) \times (0, 0, 1, | , 1) = (1, 0, 6/5, | , 8/5) - (0, 0, 6/5, | , 6/5) = (1, 0, 0, | , 2/5)$$
The matrix in RREF is:
$$
\begin{pmatrix}
1 & 0 & 0 & | & 2/5 \\
0 & 1 & 0 & | & 9/5 \\
0 & 0 & 1 & | & 1
\end{pmatrix}
$$
This directly translates to $x=2/5$, $y=9/5$, $z=1$, giving the solution without any back-substitution. The Gauss-Jordan elimination method transforms directly to RREF. While REF is sufficient for Gauss elimination and back-substitution, RREF is often preferred for its immediate revelation of the solution.

The method of transforming a matrix to REF is crucial. Understanding these definitions and operations is foundational for many subsequent topics, including finding matrix inverses, determinants, and understanding vector spaces, all of which are vital in electrical and physical sciences. For instance, in analyzing systems of differential equations (CO2) or understanding signals and systems (as per Haykin & Van Veen), the underlying mathematical framework often relies on these linear algebra concepts.

### Common Pitfalls and Exam Tips

*   **Arithmetic Errors:** These are the most common mistakes. Double-check every subtraction, addition, and division. A single error can cascade.
*   **Forgetting the '1' requirement:** Remember to divide rows to make leading entries '1'. Leaving them as other numbers might be part of Gauss-Jordan, but for standard Gauss elimination to REF, '1' is key for the pivot.
*   **Incorrectly applying row operations:** Ensure you're applying the operation to the *entire* row, including the augmented part.
*   **Misinterpreting the final matrix:** Make sure you correctly translate the REF matrix back into equations and perform back-substitution carefully.
*   **Order of operations:** Usually, it's best to get the first column (all zeros below the first pivot), then move to the second column (get a pivot and zero below it), and so on.

**Quick Recall Tip:** The three conditions for REF are:
1.  Zero rows at the bottom.
2.  Leading entry is '1'.
3.  Leading entry stairs to the right.

---

## Sample Questions and Answers

**Q1. Conceptual Understanding:** State the three conditions for a matrix to be in Row Echelon Form.

**Answer:**
A matrix is in Row Echelon Form if:
1.  All zero rows are at the bottom.
2.  The leading entry (first non-zero element from the left) of each non-zero row is 1.
3.  The leading entry of each non-zero row is in a column to the right of the leading entry of the row above it.

**Q2. Application:** Transform the following augmented matrix into Row Echelon Form using elementary row operations.

$$
\begin{pmatrix}
1 & -1 & 2 & | & 3 \\
2 & 1 & -1 & | & 0 \\
-1 & 3 & 3 & | & 6
\end{pmatrix}
$$

**Solution:**
Our goal is to get zeros below the leading '1' in the first column, then get a '1' in the second row, first non-zero column, and zeros below it, and so on.

Initial Matrix:
$$
\begin{pmatrix}
1 & -1 & 2 & | & 3 \\
2 & 1 & -1 & | & 0 \\
-1 & 3 & 3 & | & 6
\end{pmatrix}
$$

1.  Make the entry in $R_2, C_2$ zero: $R_2 - 2R_1 \rightarrow R_2$
    $$(2, 1, -1, | , 0) - 2(1, -1, 2, | , 3) = (2, 1, -1, | , 0) - (2, -2, 4, | , 6) = (0, 3, -5, | , -6)$$
    Matrix becomes:
    $$
    \begin{pmatrix}
    1 & -1 & 2 & | & 3 \\
    0 & 3 & -5 & | & -6 \\
    -1 & 3 & 3 & | & 6
    \end{pmatrix}
    $$

2.  Make the entry in $R_3, C_2$ zero: $R_3 + R_1 \rightarrow R_3$
    $$(-1, 3, 3, | , 6) + (1, -1, 2, | , 3) = (0, 2, 5, | , 9)$$
    Matrix becomes:
    $$
    \begin{pmatrix}
    1 & -1 & 2 & | & 3 \\
    0 & 3 & -5 & | & -6 \\
    0 & 2 & 5 & | & 9
    \end{pmatrix}
    $$

3.  Make the leading entry in $R_2$ a '1': $R_2 / 3 \rightarrow R_2$
    $$(0, 3, -5, | , -6) / 3 = (0, 1, -5/3, | , -2)$$
    Matrix becomes:
    $$
    \begin{pmatrix}
    1 & -1 & 2 & | & 3 \\
    0 & 1 & -5/3 & | & -2 \\
    0 & 2 & 5 & | & 9
    \end{pmatrix}
    $$

4.  Make the entry in $R_3, C_2$ zero: $R_3 - 2R_2 \rightarrow R_3$
    $$(0, 2, 5, | , 9) - 2(0, 1, -5/3, | , -2) = (0, 2, 5, | , 9) - (0, 2, -10/3, | , -4) = (0, 0, 5 + 10/3, | , 13)$$
    $$5 + 10/3 = 15/3 + 10/3 = 25/3$$
    So the new row is $(0, 0, 25/3, | , 13)$.
    Matrix becomes:
    $$
    \begin{pmatrix}
    1 & -1 & 2 & | & 3 \\
    0 & 1 & -5/3 & | & -2 \\
    0 & 0 & 25/3 & | & 13
    \end{pmatrix}
    $$

5.  Make the leading entry in $R_3$ a '1': $R_3 \times (3/25) \rightarrow R_3$
    $$(0, 0, 25/3, | , 13) \times (3/25) = (0, 0, 1, | , 13 \times 3/25) = (0, 0, 1, | , 39/25)$$
    The matrix in Row Echelon Form is:
    $$
    \begin{pmatrix}
    1 & -1 & 2 & | & 3 \\
    0 & 1 & -5/3 & | & -2 \\
    0 & 0 & 1 & | & 39/25
    \end{pmatrix}
    $$

**Q3. Interpretation and Solving:** Use the Row Echelon Form obtained in Q2 to solve the system of equations.

**Solution:**
The system of equations corresponding to the REF matrix is:
1.  $x - y + 2z = 3$
2.  $y - \frac{5}{3}z = -2$
3.  $z = \frac{39}{25}$

Now we use back-substitution:

*   From equation 3, we have $z = \frac{39}{25}$.

*   Substitute $z$ into equation 2:
    $y - \frac{5}{3}(\frac{39}{25}) = -2$
    $y - \frac{5 \times 39}{3 \times 25} = -2$
    $y - \frac{1 \times 13}{1 \times 5} = -2$
    $y - \frac{13}{5} = -2$
    $y = -2 + \frac{13}{5} = -\frac{10}{5} + \frac{13}{5} = \frac{3}{5}$
    So, $y = \frac{3}{5}$.

*   Substitute $y$ and $z$ into equation 1:
    $x - (\frac{3}{5}) + 2(\frac{39}{25}) = 3$
    $x - \frac{3}{5} + \frac{78}{25} = 3$
    To combine terms, find a common denominator (25):
    $x - \frac{15}{25} + \frac{78}{25} = \frac{75}{25}$
    $x + \frac{63}{25} = \frac{75}{25}$
    $x = \frac{75}{25} - \frac{63}{25} = \frac{12}{25}$
    So, $x = \frac{12}{25}$.

The solution is $(x, y, z) = (\frac{12}{25}, \frac{3}{5}, \frac{39}{25})$.

This question tests your ability to perform the operations correctly and then accurately substitute back, a direct application of **CO1**.
