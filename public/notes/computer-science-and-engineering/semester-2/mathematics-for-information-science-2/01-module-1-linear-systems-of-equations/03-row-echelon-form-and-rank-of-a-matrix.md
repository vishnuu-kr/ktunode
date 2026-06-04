---
title: "Row echelon form and rank of a matrix"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 2"
module: "Module 1: Linear systems of equations"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6e58474a0b135b5d0a"
status: "completed"
scrapedAt: "2026-05-20T16:34:30.109Z"
---
## Module 1: Linear Systems of Equations - Row Echelon Form and Rank of a Matrix

Welcome everyone to our exploration of linear systems! Today, we're diving into a fundamental concept that unlocks our ability to understand and solve these systems: **Row Echelon Form** and its close companion, the **Rank of a Matrix**. These aren't just abstract mathematical ideas; they are powerful tools that will directly help us achieve several of our course objectives.

Think about it: solving a system of linear equations is our primary goal (CO1). How do we do that systematically? We transform the system into a simpler, equivalent form. That's where row echelon form comes in. And once we have it, the rank tells us crucial information about the nature of the solutions – whether there's a unique solution, infinitely many, or no solution at all. This concept of "number of solutions" and the underlying structure of the system directly relates to our understanding of vector spaces and subspaces (CO2) and even linear transformations (CO4). So, pay close attention, because what we learn today forms the bedrock for much of what's to come!

### 1. The Magic of Transformation: Row Operations and Equivalent Systems

Before we talk about row echelon form, let's recall what it means to have an "equivalent" system of linear equations. Two systems are equivalent if they have exactly the same set of solutions. Imagine you have a puzzle, and you rearrange some of the pieces. If the overall picture remains the same, you've made an equivalent transformation. Similarly, we can transform a system of linear equations without changing its solution set using what we call **elementary row operations**.

These operations, as you'll find in Kreyszig's *Advanced Engineering Mathematics* (Chapter 7.1) and Larson's *Elementary Linear Algebra* (Chapter 1.1), are our secret weapons. They are:

*   **Swapping two rows:** This is like rearranging the order of equations. If you have equation A and equation B, having them as "A then B" or "B then A" doesn't change the combined conditions they impose.
*   **Multiplying a row by a non-zero scalar:** This is like multiplying an entire equation by a non-zero number. If `2x + 3y = 5`, then multiplying by 2 gives `4x + 6y = 10`. The solutions `(x, y)` remain the same.
*   **Adding a multiple of one row to another row:** This is perhaps the most powerful operation. It's akin to eliminating a variable from one equation using another. If you have `x + y = 3` and `2x - y = 1`, you can add the first equation to the second to get `3x = 4`. The value of `x` derived from `3x = 4` is consistent with the original system.

These operations allow us to manipulate the *representation* of the linear system without altering its fundamental solution. This is key to simplification.

### 2. Unveiling Simplicity: Row Echelon Form (REF)

Now, what exactly is this "row echelon form"? Think of it as bringing a messy desk into an organized state. We want our equations (or the matrix representing them) to be in a clean, predictable arrangement.

A matrix is in **Row Echelon Form (REF)** if it satisfies the following conditions:

*   **All non-zero rows are above any rows of all zeros.** Imagine a staircase – you don't want any steps to be lower than the ground floor.
*   **The leading entry (the first non-zero number from the left) of each non-zero row is strictly to the right of the leading entry of the row above it.** This creates that characteristic "staircase" pattern. This leading non-zero entry is often called a **pivot**.
*   **All entries in a column below a leading entry (pivot) are zero.** This is the "elimination" part we discussed earlier.

Let's visualize this. Consider a matrix representing a system of equations:

$$
A = \begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 0 & 0 & 1 \end{pmatrix}
$$

Is this in REF? Let's check:
1.  No zero rows are below non-zero rows. (Satisfied)
2.  The leading entry of row 1 is 1. The leading entry of row 2 is 1 (to the right of the first). The leading entry of row 3 is 1 (to the right of the second). (Satisfied)
3.  Below the leading entry of row 1 (which is 1 in column 1), we have zeros in row 2 and row 3. Below the leading entry of row 2 (which is 1 in column 2), we have zero in row 3. (Satisfied)

So, yes, this matrix is in REF.

Now, here's a slightly less tidy example:

$$
B = \begin{pmatrix} 0 & 2 & 3 \\ 1 & 0 & 4 \\ 0 & 0 & 1 \end{pmatrix}
$$

Is this in REF?
*   No zero rows below non-zero rows. (Satisfied)
*   Row 1's leading entry is 2 in column 2. Row 2's leading entry is 1 in column 1. **Uh oh!** The leading entry of row 2 (column 1) is NOT to the right of the leading entry of row 1 (column 2). The staircase is broken!
*   Below the leading entry of row 2 (1 in column 1), there are no entries. Below the leading entry of row 1 (2 in column 2), there's a zero in row 3.

To get this into REF, we'd first swap row 1 and row 2:

$$
\begin{pmatrix} 1 & 0 & 4 \\ 0 & 2 & 3 \\ 0 & 0 & 1 \end{pmatrix}
$$

Now, this *is* in REF. Notice how the leading entries (1, 2, 1) are in columns 1, 2, and 3 respectively, each to the right of the one above.

**Remember this:** The goal of REF is to get a clear, structured representation where you can easily identify the "free" variables and the "pivot" variables in a system of equations. This directly helps us solve systems (CO1) and understand the underlying structure of solutions, which is deeply connected to vector spaces (CO2).

### 3. A Tighter Grip: Reduced Row Echelon Form (RREF)

While REF is great, we can often simplify things even further with **Reduced Row Echelon Form (RREF)**. Think of RREF as the *most* organized state of your desk. It's a special case of REF with two additional rules:

*   **Each leading entry (pivot) is 1.**
*   **All entries in the column containing a leading entry (pivot) are zero, both above and below.**

Let's revisit our first REF example:

$$
A = \begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 0 & 0 & 1 \end{pmatrix}
$$

This is in REF, but not RREF. Why?
*   The leading entries are 1s, which is good.
*   However, in the column of the leading entry of row 1 (column 1), there are zeros below, but that's all we need for REF. For RREF, we need *zeros everywhere else* in that column.
*   Similarly, in the column of the leading entry of row 2 (column 2), we have a 2. For RREF, this should be a 1, and everything else in that column (above and below) should be zero.

To get A into RREF, we'd perform more row operations:
1.  Make the pivot in row 2 a 1 (it already is).
2.  Make the entry above it (the 2 in row 1, column 2) zero. We can do this by subtracting 2 times row 2 from row 1: `R1 = R1 - 2*R2`.

$$
\begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 0 & 0 & 1 \end{pmatrix} \xrightarrow{R1 = R1 - 2*R2} \begin{pmatrix} 1 & 0 & -5 \\ 0 & 1 & 4 \\ 0 & 0 & 1 \end{pmatrix}
$$

Now, this is closer to RREF. Let's deal with the last row's pivot in column 3. It's already a 1. Now we need to make everything else in column 3 zero.
1.  Make the entry above it (the 4 in row 2, column 3) zero: `R2 = R2 - 4*R3`.
2.  Make the entry above that (the -5 in row 1, column 3) zero: `R1 = R1 + 5*R3`.

$$
\begin{pmatrix} 1 & 0 & -5 \\ 0 & 1 & 4 \\ 0 & 0 & 1 \end{pmatrix} \xrightarrow{R2 = R2 - 4*R3} \begin{pmatrix} 1 & 0 & -5 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix} \xrightarrow{R1 = R1 + 5*R3} \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}
$$

This final matrix is the **identity matrix**, which is in RREF. As you can see from Larson (Chapter 1.2), this process is called **Gauss-Jordan elimination**.

**Why is RREF so useful?** If your system of equations, when represented by an augmented matrix and converted to RREF, results in the identity matrix (or a form where each variable column has a leading 1 and zeros elsewhere), then you have a unique solution for each variable! This is the ultimate simplification for solving systems (CO1).

### 4. The Soul of the Matrix: Rank

Now that we've mastered the art of organization with REF and RREF, let's talk about the **rank** of a matrix. The rank is a fundamental property that tells us a lot about the "information content" or "independence" within the matrix, and by extension, the system of equations it represents.

**Definition:** The **rank** of a matrix is the number of **non-zero rows** in its Row Echelon Form (REF) or Reduced Row Echelon Form (RREF).

Think of it like this: if you have a collection of statements (equations), and you try to simplify them, the rank tells you how many *truly independent* statements you end up with. Redundant or dependent statements collapse into zeros.

Let's look at an example. Consider the matrix:

$$
M = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 3 & 6 & 9 \end{pmatrix}
$$

What happens if we put this into REF?
*   `R2 = R2 - 2*R1`
*   `R3 = R3 - 3*R1`

$$
\begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 3 & 6 & 9 \end{pmatrix} \xrightarrow{R2 = R2 - 2*R1} \begin{pmatrix} 1 & 2 & 3 \\ 0 & 0 & 0 \\ 3 & 6 & 9 \end{pmatrix} \xrightarrow{R3 = R3 - 3*R1} \begin{pmatrix} 1 & 2 & 3 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}
$$

This matrix is in REF. How many non-zero rows are there? Just one!
Therefore, the **rank of matrix M is 1**.

What does this mean for a system of equations represented by this matrix? It means that effectively, only one of the original equations was providing new information. The other two were essentially multiples or combinations of the first one. This is crucial for understanding the solvability of systems.

**Connection to Course Outcomes:**

*   **CO1 (Solving Systems):** The rank of the coefficient matrix and the augmented matrix tells us about the existence and uniqueness of solutions. If `rank(A) = rank(A|b)`, there are solutions. If `rank(A) = rank(A|b) = n` (where n is the number of variables), there's a unique solution. If `rank(A) = rank(A|b) < n`, there are infinitely many solutions. If `rank(A) < rank(A|b)`, there are no solutions. This is a direct application of rank.
*   **CO2 (Vector Spaces):** The rank of a matrix is also equal to the **dimension of its column space** and the **dimension of its row space**. The row space is the span of the row vectors, and the column space is the span of the column vectors. This means the rank tells us the maximum number of linearly independent row vectors and column vectors in the matrix. This is a core concept in understanding vector spaces and subspaces.
*   **CO4 (Linear Transformations):** The rank of a matrix representing a linear transformation `T: V -> W` is equal to the **dimension of the image (or range) of T**. The image is the set of all possible output vectors. So, the rank of the matrix tells us the "size" of the output space that the transformation can reach. This directly relates to finding the rank of a linear transformation.

**Let's take a more relatable example:**

Imagine you're gathering data for a report about student satisfaction with a new cafeteria menu. You have three surveys:

*   Survey 1: Asked about overall satisfaction (scale 1-5).
*   Survey 2: Asked about the quality of the sandwiches (scale 1-5).
*   Survey 3: Asked about the variety of salads (scale 1-5).

You also collect a fourth "survey" (let's call it Survey 4) which is actually just a summary of the first two: "Average satisfaction with sandwiches and overall satisfaction."

If you represent these surveys as rows in a matrix (each entry being a student's response to that question, averaged across all students), what would the rank tell you?

*   If Survey 4 was *always* a perfect average of Survey 1 and Survey 2, it wouldn't add any *new* information. It's linearly dependent on the first two.
*   The rank of the matrix would tell you the number of *independent* pieces of information you have about student satisfaction. If Surveys 1, 2, and 3 were all distinct and didn't overlap in their information, the rank might be 3. But if Survey 4 was just a combination, it wouldn't increase the rank.

**Key Takeaway on Rank:** The rank is the number of linearly independent rows (or columns). It's invariant under elementary row operations. You *must* find the REF or RREF to determine the rank.

### 5. Putting it all Together: Rank-Nullity Theorem (A Glimpse)

While we'll delve deeper into this later, it's worth mentioning that the concept of rank is closely tied to another crucial idea: **nullity**. The nullity of a matrix is the dimension of its **null space** (or kernel), which is the set of all vectors `x` such that `Ax = 0`.

The **Rank-Nullity Theorem** states that for an `m x n` matrix A:

`rank(A) + nullity(A) = n` (where `n` is the number of columns)

This theorem is fundamental because it elegantly connects the "output space" dimension (rank) with the "zero-output" space dimension (nullity). This provides a deeper understanding of the structure of linear transformations (CO4) and the solution spaces of linear systems (CO1).

For example, if a matrix `A` has `rank(A) = r` and it's an `m x n` matrix, then `n - r` of the variables in `Ax = b` will be "free variables" that can be chosen arbitrarily, leading to infinitely many solutions if `r < n`.

### 6. Common Pitfalls and Exam Tips

*   **Confusing REF and RREF:** Remember RREF is stricter! All pivots must be 1, and all entries above and below pivots must be zero.
*   **Calculation Errors during Row Operations:** This is the most common mistake. Double-check your arithmetic at each step. A single slip can propagate through the entire calculation.
*   **Forgetting to find REF/RREF to determine Rank:** You cannot determine the rank from the original matrix directly (unless it's already in a very simple form). You *must* transform it.
*   **Misinterpreting Rank for Solution Existence:** Remember the conditions:
    *   `rank(A) < rank(A|b)` => No solution
    *   `rank(A) = rank(A|b) = n` => Unique solution
    *   `rank(A) = rank(A|b) < n` => Infinitely many solutions

**Quick Recall Tip:** Think of the REF as a "staircase" where each step is to the right of the previous one. The rank is simply the number of steps on that staircase.

### Sample Questions and Answers

**Question 1 (Conceptual Understanding):**
What are the three elementary row operations? Explain why performing these operations does not change the solution set of a system of linear equations.

**Answer:**
The three elementary row operations are:
1.  **Swapping two rows:** This is equivalent to reordering the equations in the system, which doesn't alter the overall set of conditions.
2.  **Multiplying a row by a non-zero scalar:** This is equivalent to multiplying an entire equation by a non-zero constant. If `a = b`, then `ka = kb` for any non-zero `k`. The solutions `(x, y, ...)` satisfying `a = b` will also satisfy `ka = kb`.
3.  **Adding a multiple of one row to another row:** This is equivalent to replacing one equation with the sum of itself and a multiple of another equation. For instance, if we have equations `E1` and `E2`, and we replace `E2` with `E2 + k*E1`, any solution that satisfies both `E1` and `E2` will also satisfy `E1` and `E2 + k*E1`. Conversely, any solution satisfying `E1` and `E2 + k*E1` must satisfy `E1` and `(E2 + k*E1) - k*E1 = E2`. Thus, the solution sets are identical.

**Question 2 (Application - Finding Rank):**
Find the rank of the following matrix:
$$
C = \begin{pmatrix} 1 & 2 & -1 \\ 3 & 1 & 4 \\ 2 & 3 & 3 \end{pmatrix}
$$

**Answer:**
To find the rank, we'll convert the matrix to Row Echelon Form (REF).

1.  Let's eliminate entries below the leading 1 in the first column.
    *   `R2 = R2 - 3*R1`
    *   `R3 = R3 - 2*R1`

    $$
    \begin{pmatrix} 1 & 2 & -1 \\ 3 & 1 & 4 \\ 2 & 3 & 3 \end{pmatrix} \xrightarrow{R2 = R2 - 3*R1} \begin{pmatrix} 1 & 2 & -1 \\ 0 & -5 & 7 \\ 2 & 3 & 3 \end{pmatrix} \xrightarrow{R3 = R3 - 2*R1} \begin{pmatrix} 1 & 2 & -1 \\ 0 & -5 & 7 \\ 0 & -1 & 5 \end{pmatrix}
    $$

2.  Now, let's work on the second column. We can swap `R2` and `R3` to get a smaller number to work with, or create a leading 1. Let's swap for clarity and then scale.
    *   `R2 \leftrightarrow R3`

    $$
    \begin{pmatrix} 1 & 2 & -1 \\ 0 & -5 & 7 \\ 0 & -1 & 5 \end{pmatrix} \xrightarrow{R2 \leftrightarrow R3} \begin{pmatrix} 1 & 2 & -1 \\ 0 & -1 & 5 \\ 0 & -5 & 7 \end{pmatrix}
    $$

3.  Now, eliminate the entry below the leading -1 in the second column.
    *   `R3 = R3 - 5*R2`

    $$
    \begin{pmatrix} 1 & 2 & -1 \\ 0 & -1 & 5 \\ 0 & -5 & 7 \end{pmatrix} \xrightarrow{R3 = R3 - 5*R2} \begin{pmatrix} 1 & 2 & -1 \\ 0 & -1 & 5 \\ 0 & 0 & -18 \end{pmatrix}
    $$

This matrix is now in Row Echelon Form. It has three non-zero rows.
Therefore, the **rank of matrix C is 3**.

**(Exam Note:** If the last row had become all zeros, the rank would be 2. If `R3` had also been a multiple of `R2` and `R1` before the row operations, leading to a zero row, we would see that when it's put into REF. In this case, the three original rows provided linearly independent information.)

**Question 3 (Connection to Systems - Multiple Choice):**
Consider the system of linear equations represented by the augmented matrix `[A|b]`. If, after performing row operations, the REF of `[A|b]` is:
$$
\begin{pmatrix} 1 & 2 & 0 & 5 \\ 0 & 1 & 3 & 7 \\ 0 & 0 & 0 & 0 \end{pmatrix}
$$
What can you conclude about the system?
(a) No solution
(b) A unique solution
(c) Infinitely many solutions
(d) The system is inconsistent

**Answer:**
Let's analyze the REF. The matrix `A` part is:
$$
\begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & 3 \end{pmatrix}
$$
The augmented part `b` is:
$$
\begin{pmatrix} 5 \\ 7 \\ 0 \end{pmatrix}
$$
From the REF, we can see that `rank(A)` (number of non-zero rows in the REF of A, which we can deduce from the combined REF) is 2, as the first two rows are non-zero, and the third row of the *augmented* matrix is all zeros.
The rank of the augmented matrix `[A|b]` is also 2, since no row in the REF of `[A|b]` is entirely zero in the `A` part and non-zero in the `b` part.
The number of variables (`n`) in the original system is 3 (corresponding to the 3 columns in `A`).
Since `rank(A) = rank([A|b]) = 2`, and `n = 3`, and `rank(A) < n`, this means there are infinitely many solutions. The last row `0x + 0y + 0z = 0` confirms consistency, and the fact that `rank < n` indicates free variables.

Therefore, the correct answer is **(c) Infinitely many solutions**.

This concludes our initial dive into Row Echelon Form and Rank. Remember, these concepts are not just about cleaning up matrices; they are the keys to understanding the solvability and fundamental structure of linear systems and transformations. Keep practicing, and you'll find their power in no time!
