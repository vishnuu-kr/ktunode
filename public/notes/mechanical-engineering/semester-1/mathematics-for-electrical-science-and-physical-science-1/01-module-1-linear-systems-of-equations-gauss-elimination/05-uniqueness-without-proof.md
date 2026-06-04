---
title: "Uniqueness (without proof)"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND 
PHYSICAL  SCIENCE - 1"
module: "Module 1: Linear systems of equations: Gauss elimination"
branch: "Mechanical Engineering"
semester: 1
topicId: "68bd1edefeb4799d95e83543"
status: "completed"
scrapedAt: "2026-05-20T17:39:14.782Z"
---
# Mathematics for Electrical Science and Physical Science - 1

## Module 1: Linear Systems of Equations: Gaussian Elimination

### Topic: Uniqueness of Solutions (Without Proof)

Welcome, everyone! In this session, we're going to delve into a crucial aspect of linear systems of equations: the **uniqueness of their solutions**. This topic directly links to our Course Outcome 1 (CO1), which is about solving systems of linear equations. Understanding when a solution is unique, when there are no solutions, or when there are infinitely many solutions is fundamental for analyzing and solving many problems in electrical and physical sciences. For instance, when you're analyzing a circuit, you might be looking for a specific current value. If the system of equations describing that circuit has multiple solutions, it means something in your model might be underspecified, or there might be an inherent ambiguity.

We’ve already seen how Gaussian elimination (or Gauss-Jordan elimination) is a powerful tool to transform a system of linear equations into a simpler, equivalent system, often in row echelon form or reduced row echelon form. This transformation is key to understanding the nature of the solutions.

### What Does "Uniqueness" Mean in the Context of Linear Systems?

Imagine you're trying to find the intersection point of two lines on a graph.

*   **One Intersection Point (Unique Solution):** The lines cross at exactly one specific point. This is like finding a single, definitive answer to your problem. For example, if you're trying to determine the exact voltage at a specific node in a simple resistive network, you might get a unique value.

*   **No Intersection Points (No Solution):** The lines are parallel and never meet. Your system of equations is contradictory, meaning there's no set of values for your variables that can satisfy all the equations simultaneously. Think about trying to find a current that flows through a wire that's been cut – it's impossible.

*   **Infinite Intersection Points (Infinitely Many Solutions):** The lines are actually the same line, overlapping perfectly. Any point on that line is a solution. This happens when one equation is just a multiple of another, or when the equations are dependent. In engineering, this might indicate that some components are redundant, or there's a degree of freedom in your system. For example, if you're analyzing a system with too many sensors measuring the same thing, you might get redundant information leading to infinitely many solutions.

The power of Gaussian elimination lies in its ability to reveal which of these three scenarios we are in, by examining the **row echelon form** of the augmented matrix of the system.

### Connecting Gaussian Elimination to Uniqueness

Recall that when we apply Gaussian elimination, we transform the augmented matrix $[A | \mathbf{b}]$ into a row echelon form, say $[U | \mathbf{c}]$. The system of equations represented by $[U | \mathbf{c}]$ has the same solution set as the original system. The structure of $U$ tells us everything we need to know about the solutions.

Let's think about the relationship between the number of variables and the number of *non-zero rows* in the row echelon form of the coefficient matrix $A$.

*   **If the number of non-zero rows in the row echelon form of A is equal to the number of variables, and there are no contradictory rows (like 0 = non-zero number), then the system has a unique solution.**

Let's elaborate on this, drawing from concepts you'd find in Kreyszig's "Advanced Engineering Mathematics" or Anton & Rorres' "Elementary Linear Algebra."

Suppose you have a system of $m$ equations in $n$ variables. After performing Gaussian elimination, you get a matrix in row echelon form.

**Key Indicators for Uniqueness (Without Proof):**

1.  **Leading Variables (Pivot Variables) and Free Variables:**
    During Gaussian elimination, the first non-zero entry in each non-zero row of the coefficient matrix ($A$) is called a **pivot**. The variables corresponding to the columns containing pivots are called **leading variables** or **pivot variables**. The variables that do *not* correspond to pivot columns are called **free variables**.

    *   **Unique Solution:** A unique solution exists if and only if *every variable is a leading variable*. This means there are no free variables. In the row echelon form of the augmented matrix $[U | \mathbf{c}]$, this corresponds to having a pivot in every column of the coefficient matrix $U$. If the number of variables ($n$) is equal to the number of pivots, and there are no contradictory equations, then we have a unique solution.

    Consider an example, from a circuit analysis perspective: Suppose we are solving for the currents $I_1, I_2, I_3$ in a network. If Gaussian elimination leads to a row echelon form where each of $I_1, I_2, I_3$ can be uniquely determined (e.g., $I_1 = 2$ A, $I_2 = -0.5$ A, $I_3 = 1$ A), then that's our unique solution.

2.  **Contradictory Equations:**
    A system has **no solution** if, during Gaussian elimination, you encounter a row that looks like `[0 0 ... 0 | k]` where `k` is a non-zero number. This translates to the equation $0x_1 + 0x_2 + \dots + 0x_n = k$, which is $0 = k$. This is a contradiction, and no values of the variables can satisfy it.

    *   **Example Analogy:** Imagine you have two rules for a game. Rule 1: "You must score 5 points to win." Rule 2: "You cannot score any points to win." These rules contradict each other. There's no way to satisfy both, so there's no valid outcome.

3.  **Infinite Solutions:**
    A system has **infinitely many solutions** if it is **consistent** (no contradictory equations) and has at least one **free variable**. A free variable is a variable that is not a leading variable. This happens when the number of pivots is less than the number of variables. The free variables can be assigned arbitrary values (parameters), and the leading variables can then be expressed in terms of these parameters.

    *   **Example Analogy:** Suppose you are baking a cake, and your recipe says: "Add 2 cups of flour." Then, a second step says: "Add another 2 cups of flour, then stir." If the second step is just a restatement of the first, or somehow dependent, it doesn't give you new, independent information. You still just need 2 cups of flour, but the instructions might seem to imply more. In a system of equations, if one equation is a linear combination of others, it doesn't add new constraints, potentially leading to infinite solutions. For instance, if you have equations describing the positions of three points on a straight line, and the third point's position is determined by the first two, you have a dependent system.

### Summary of Conditions based on Row Echelon Form of $[A | \mathbf{b}]$

Let $m$ be the number of equations and $n$ be the number of variables. Let $U$ be the coefficient matrix after Gaussian elimination to row echelon form.

*   **Unique Solution:**
    *   The system is consistent (no rows of the form $[0 \ 0 \dots 0 | k]$ with $k \neq 0$).
    *   The number of pivots (leading non-zero entries in $U$) is equal to the number of variables ($n$).
    *   This implies that every variable is a leading variable.

*   **No Solution:**
    *   The system is inconsistent. This occurs when at least one row of the augmented matrix in row echelon form is of the form $[0 \ 0 \dots 0 | k]$ with $k \neq 0$.

*   **Infinitely Many Solutions:**
    *   The system is consistent.
    *   The number of pivots is *less than* the number of variables ($n$).
    *   This means there is at least one free variable.

### Relationship with Rank (Kreyszig, Chapter 7)

The concept of rank is closely tied to uniqueness. The **rank** of a matrix is the number of non-zero rows in its row echelon form, or equivalently, the number of pivots.

Let $A$ be the $m \times n$ coefficient matrix and $[A | \mathbf{b}]$ be the augmented matrix.

*   **Unique Solution:** The system $A\mathbf{x} = \mathbf{b}$ has a unique solution if and only if $\text{rank}(A) = \text{rank}([A | \mathbf{b}]) = n$ (the number of variables).

*   **No Solution:** The system $A\mathbf{x} = \mathbf{b}$ has no solution if and only if $\text{rank}(A) < \text{rank}([A | \mathbf{b}])$. This happens when Gaussian elimination leads to a contradictory row.

*   **Infinitely Many Solutions:** The system $A\mathbf{x} = \mathbf{b}$ has infinitely many solutions if and only if $\text{rank}(A) = \text{rank}([A | \mathbf{b}]) < n$ (the number of variables).

**Remember this:** The rank of the coefficient matrix being equal to the number of variables is the critical condition for a unique solution, provided the system is also consistent.

### Example Scenario: Analyzing Electrical Networks

Let's consider a simple electrical circuit with Kirchhoff's Voltage Law (KVL) and Kirchhoff's Current Law (KCL) equations. Suppose we have a circuit with several loops and nodes, and we set up a system of linear equations to find the unknown loop currents or nodal voltages.

**Problem Setup:**
Imagine a circuit where the equations derived lead to the following augmented matrix after some initial manipulation:

$$
\begin{bmatrix}
1 & 2 & -1 & | & 5 \\
0 & 1 & 3 & | & 2 \\
0 & 0 & 0 & | & 0
\end{bmatrix}
$$

Here, we have 3 variables (let's say $I_1, I_2, I_3$) and 3 equations.

**Applying Gaussian Elimination Logic:**
1.  The matrix is already in a form very close to row echelon form.
2.  The third row, `[0 0 0 | 0]`, translates to $0I_1 + 0I_2 + 0I_3 = 0$, which is $0 = 0$. This is always true and provides no new information, indicating a dependent equation.
3.  The second row, `[0 1 3 | 2]`, translates to $I_2 + 3I_3 = 2$.
4.  The first row, `[1 2 -1 | 5]`, translates to $I_1 + 2I_2 - I_3 = 5$.

**Analyzing the Nature of Solutions:**

*   **Consistency:** The system is consistent because there are no contradictory rows like `[0 0 0 | k]` where $k \neq 0$.
*   **Pivots:** The pivots are in the first column (value 1) and the second column (value 1).
*   **Number of Variables:** We have 3 variables ($I_1, I_2, I_3$).
*   **Number of Pivots:** We have 2 pivots.

Since the number of pivots (2) is less than the number of variables (3), we have a free variable. Specifically, $I_3$ is not a leading variable.
From the second equation: $I_2 = 2 - 3I_3$.
Substitute this into the first equation:
$I_1 + 2(2 - 3I_3) - I_3 = 5$
$I_1 + 4 - 6I_3 - I_3 = 5$
$I_1 + 4 - 7I_3 = 5$
$I_1 = 1 + 7I_3$

So, the solutions are of the form:
$I_1 = 1 + 7t$
$I_2 = 2 - 3t$
$I_3 = t$
where $t$ can be any real number.

**Conclusion for this Example:** This system has **infinitely many solutions**. In our circuit analysis, this might mean that there's a degree of freedom in how the currents are distributed, perhaps due to a redundant connection or a component that doesn't affect the overall circuit behavior in a unique way. For example, if there's a loop that is perfectly insulated or bypassed, its current might not be uniquely determined.

### Another Example: Unique Solution Case

Let's say Gaussian elimination leads to:

$$
\begin{bmatrix}
1 & 2 & -1 & | & 5 \\
0 & 1 & 3 & | & 2 \\
0 & 0 & 1 & | & -1
\end{bmatrix}
$$

Here, we have 3 variables and 3 equations.

**Analysis:**
*   **Consistency:** Consistent, no contradictory rows.
*   **Pivots:** Pivots in columns 1, 2, and 3.
*   **Number of Variables:** 3.
*   **Number of Pivots:** 3.

Since the number of pivots (3) equals the number of variables (3), and the system is consistent, we have a **unique solution**.
From the third row: $I_3 = -1$.
From the second row: $I_2 + 3I_3 = 2 \implies I_2 + 3(-1) = 2 \implies I_2 - 3 = 2 \implies I_2 = 5$.
From the first row: $I_1 + 2I_2 - I_3 = 5 \implies I_1 + 2(5) - (-1) = 5 \implies I_1 + 10 + 1 = 5 \implies I_1 + 11 = 5 \implies I_1 = -6$.
So, $I_1 = -6, I_2 = 5, I_3 = -1$ is the unique solution. This is what we'd ideally want in many engineering problems – a single, clear answer.

### Example: No Solution Case

What if Gaussian elimination results in:

$$
\begin{bmatrix}
1 & 2 & -1 & | & 5 \\
0 & 1 & 3 & | & 2 \\
0 & 0 & 0 & | & 4
\end{bmatrix}
$$

**Analysis:**
*   **Consistency:** The third row translates to $0I_1 + 0I_2 + 0I_3 = 4$, or $0 = 4$. This is a **contradiction**.

Therefore, this system has **no solution**. In an engineering context, this would mean that the circuit parameters or the equations derived are inconsistent, indicating a flaw in the model or the setup itself. Perhaps a voltage source is connected in a way that violates conservation of energy for the given component values, leading to an impossible physical situation.

### Importance for Course Outcome 1 (CO1)

Understanding uniqueness is critical for CO1: "Solve systems of linear equations and diagonalize matrices."

*   **Solving Systems:** Before you even start to solve, knowing *whether* a unique solution exists helps you set expectations. If you're aiming for a unique solution and find infinitely many or none, you know you need to go back and check your work or your model.
*   **Diagonalization:** The concepts of linear independence and basis vectors, which are intimately linked to unique solutions and rank, are also foundational for matrix diagonalization. Diagonalization is often used to simplify systems, especially in analyzing stability in control systems or vibration analysis. If a matrix doesn't have a full set of linearly independent eigenvectors (related to unique solutions), its diagonalization process can become more complex or even impossible in the standard sense.

### Key Takeaways for Exams

When you see a problem asking about the nature of solutions or when a system has a unique solution, look at the **row echelon form** of the augmented matrix.

*   **Contradiction ($0 = \text{non-zero}$) $\implies$ NO SOLUTION.**
*   **No Contradiction & Number of Pivots = Number of Variables $\implies$ UNIQUE SOLUTION.**
*   **No Contradiction & Number of Pivots < Number of Variables $\implies$ INFINITELY MANY SOLUTIONS.**

The number of pivots is simply the number of leading non-zero entries in the coefficient part of the matrix after reduction. Always check for contradictions first!

---

### Sample Questions and Answers

**Question 1 (Conceptual):**
Under what condition does a system of linear equations have infinitely many solutions? Explain the role of free variables.

**Answer:**
A system of linear equations has infinitely many solutions if it is **consistent** (meaning no contradictory equations arise, like $0=k$ where $k \neq 0$) and the **number of pivots** (leading non-zero entries in the row echelon form of the coefficient matrix) is **less than the number of variables**.

In this scenario, the variables corresponding to columns without pivots are called **free variables**. These free variables can be assigned any arbitrary value (they act as parameters). The other variables, known as **leading variables** or **pivot variables**, can then be expressed in terms of these free variables. Since the free variables can take on an infinite number of values, the system has infinitely many possible solutions.

**Question 2 (Exam-Oriented):**
Consider the following system of linear equations:
$x + 2y - z = 5$
$y + 3z = 2$
$2x + 4y - 2z = 10$

Determine if this system has a unique solution, no solution, or infinitely many solutions. Show your work.

**Solution:**
We form the augmented matrix and perform Gaussian elimination:

Original system:
$x + 2y - z = 5$
$0x + y + 3z = 2$
$2x + 4y - 2z = 10$

Augmented Matrix:
$$
\begin{bmatrix}
1 & 2 & -1 & | & 5 \\
0 & 1 & 3 & | & 2 \\
2 & 4 & -2 & | & 10
\end{bmatrix}
$$

Perform $R_3 \leftarrow R_3 - 2R_1$:
$$
\begin{bmatrix}
1 & 2 & -1 & | & 5 \\
0 & 1 & 3 & | & 2 \\
2 - 2(1) & 4 - 2(2) & -2 - 2(-1) & | & 10 - 2(5)
\end{bmatrix}
=
\begin{bmatrix}
1 & 2 & -1 & | & 5 \\
0 & 1 & 3 & | & 2 \\
0 & 0 & 0 & | & 0
\end{bmatrix}
$$

Analysis of the row echelon form:
*   **Consistency:** The last row is `[0 0 0 | 0]`, which represents $0=0$. This is consistent; there is no contradiction.
*   **Number of Variables:** There are 3 variables ($x, y, z$).
*   **Number of Pivots:** The leading non-zero entries (pivots) are in the first column (1) and the second column (1). So, there are 2 pivots.

Since the system is consistent and the number of pivots (2) is less than the number of variables (3), the system has **infinitely many solutions**. The variable $z$ is a free variable.

We can express $x$ and $y$ in terms of $z$:
From row 2: $y + 3z = 2 \implies y = 2 - 3z$.
From row 1: $x + 2y - z = 5 \implies x + 2(2 - 3z) - z = 5$
$x + 4 - 6z - z = 5$
$x + 4 - 7z = 5$
$x = 1 + 7z$.

So, the solutions are of the form $(1+7t, 2-3t, t)$ for any real number $t$.

**Question 3 (Conceptual/Rank):**
If $A$ is an $m \times n$ matrix and the system $A\mathbf{x} = \mathbf{b}$ is consistent, what does it imply about the relationship between $\text{rank}(A)$ and $\text{rank}([A | \mathbf{b}])$?

**Answer:**
If a system of linear equations $A\mathbf{x} = \mathbf{b}$ is consistent, it means that there is at least one solution. This implies that the row echelon form of the augmented matrix $[A | \mathbf{b}]$ does not contain any contradictory rows (i.e., no row of the form $[0 \ 0 \dots 0 | k]$ where $k \neq 0$).

The consistency of the system means that the rank of the coefficient matrix $A$ must be equal to the rank of the augmented matrix $[A | \mathbf{b}]$. That is, $\text{rank}(A) = \text{rank}([A | \mathbf{b}])$.

If $\text{rank}(A) < \text{rank}([A | \mathbf{b}])$, the system is inconsistent and has no solution.

**Question 4 (Exam-Oriented):**
For what value of $k$ does the following system have a unique solution?
$x + y + z = 2$
$x + 2y + 3z = 3$
$2x + 3y + kz = 5$

**Solution:**
Form the augmented matrix:
$$
\begin{bmatrix}
1 & 1 & 1 & | & 2 \\
1 & 2 & 3 & | & 3 \\
2 & 3 & k & | & 5
\end{bmatrix}
$$

Perform row operations to get to row echelon form:
$R_2 \leftarrow R_2 - R_1$:
$$
\begin{bmatrix}
1 & 1 & 1 & | & 2 \\
0 & 1 & 2 & | & 1 \\
2 & 3 & k & | & 5
\end{bmatrix}
$$
$R_3 \leftarrow R_3 - 2R_1$:
$$
\begin{bmatrix}
1 & 1 & 1 & | & 2 \\
0 & 1 & 2 & | & 1 \\
0 & 1 & k-2 & | & 1
\end{bmatrix}
$$
$R_3 \leftarrow R_3 - R_2$:
$$
\begin{bmatrix}
1 & 1 & 1 & | & 2 \\
0 & 1 & 2 & | & 1 \\
0 & 0 & (k-2)-2 & | & 1-1
\end{bmatrix}
=
\begin{bmatrix}
1 & 1 & 1 & | & 2 \\
0 & 1 & 2 & | & 1 \\
0 & 0 & k-4 & | & 0
\end{bmatrix}
$$

For a unique solution, we need the system to be consistent and the number of pivots to equal the number of variables (which is 3).
The current row echelon form shows pivots in the first two columns. For a third pivot, the entry in the third column of the third row, $(k-4)$, must be non-zero.
Also, the system must be consistent, which it is, as the last row is `[0 0 (k-4) | 0]`. This is not a contradiction regardless of the value of $k-4$ (unless $k-4=0$ and the right side was non-zero, which isn't the case here).

Therefore, for a unique solution, we need the coefficient in the bottom-right position to be non-zero:
$k - 4 \neq 0 \implies k \neq 4$.

However, the question asks for the value of $k$ for which it *has* a unique solution. Let's re-evaluate the conditions.

*   **Unique Solution:** $\text{rank}(A) = \text{rank}([A|\mathbf{b}]) = n$ (number of variables). Here $n=3$.
*   **No Solution:** $\text{rank}(A) < \text{rank}([A|\mathbf{b}])$. This happens if $k-4=0$ and the RHS is non-zero. Here the RHS is 0.
*   **Infinitely Many Solutions:** $\text{rank}(A) = \text{rank}([A|\mathbf{b}]) < n$. This happens if $k-4=0$ and the RHS is zero.

From our reduced matrix:
$$
\begin{bmatrix}
1 & 1 & 1 & | & 2 \\
0 & 1 & 2 & | & 1 \\
0 & 0 & k-4 & | & 0
\end{bmatrix}
$$

The rank of the coefficient matrix is 3 if $k-4 \neq 0$. The rank of the augmented matrix is also 3 if $k-4 \neq 0$. Since $n=3$, if $k \neq 4$, we have $\text{rank}(A) = \text{rank}([A|\mathbf{b}]) = 3 = n$. This is the condition for a **unique solution**.

If $k-4 = 0$ (i.e., $k=4$), the matrix becomes:
$$
\begin{bmatrix}
1 & 1 & 1 & | & 2 \\
0 & 1 & 2 & | & 1 \\
0 & 0 & 0 & | & 0
\end{bmatrix}
$$
In this case, $\text{rank}(A) = 2$ and $\text{rank}([A|\mathbf{b}]) = 2$. Since $2 < 3$ (the number of variables), this means there are infinitely many solutions.

So, for a **unique solution**, $k$ must not be equal to 4. The question implies there's a specific value of $k$ that *guarantees* a unique solution. This often means finding the condition that prevents degeneracy.

Rethinking the question phrasing: "For what value of $k$ does the following system have a unique solution?" This implies we are looking for a *specific* value, perhaps if there was a typo and the question meant to ask "For what value of $k$ does the system NOT have a unique solution?" or "For what values of $k$ does the system have a unique solution?".

Assuming the intent is to find the condition for unique solutions:
The system has a unique solution if $k-4 \neq 0$, which means $k \neq 4$.

If the question indeed implies a single value of $k$ for a unique solution, it's poorly phrased because infinitely many values of $k$ (all $k \neq 4$) lead to a unique solution. Usually, questions like this ask for the value that leads to infinite solutions or no solution, as these are specific boundary cases.

Let's assume the question is "For which value of $k$ does the system NOT have a unique solution?". Then the answer would be $k=4$.
If the question meant "For which value of $k$ does the system have infinitely many solutions?", the answer would be $k=4$.
If the question meant "For which value of $k$ does the system have no solution?", the answer would be "no value of $k$" because the last row becomes $0=0$.

Given the typical structure of these problems, it's most likely that the question is implicitly asking for the value of $k$ that *prevents* a unique solution. Therefore, the critical value is $k=4$.

**Final Answer Interpretation (most common exam interpretation):** The system has a unique solution for all values of $k$ EXCEPT $k=4$. If forced to pick *a* value, and the question is subtly asking for the condition that *fails* uniqueness, it would be $k=4$. However, adhering strictly to "has a unique solution," the answer is any $k \neq 4$. For the purpose of a single answer, it's common to highlight the boundary case.

**Correct interpretation for "unique solution":** The system has a unique solution if $k \neq 4$.
There is no *single* value of $k$ for which it *uniquely* has a unique solution; rather, it has a unique solution for an infinite set of $k$ values.

Let's proceed with the assumption that the question aims to identify the boundary. The system has a unique solution when the determinant of the coefficient matrix is non-zero.
$A = \begin{bmatrix} 1 & 1 & 1 \\ 1 & 2 & 3 \\ 2 & 3 & k \end{bmatrix}$
$\det(A) = 1(2k - 9) - 1(k - 6) + 1(3 - 4)$
$\det(A) = 2k - 9 - k + 6 - 1$
$\det(A) = k - 4$

For a unique solution, $\det(A) \neq 0$, so $k-4 \neq 0$, which means $k \neq 4$.
If $k=4$, $\det(A) = 0$. In this case, we found infinitely many solutions.

**Answer:** The system has a unique solution for any value of $k$ such that $k \neq 4$.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=fNk_zzaMoEs) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
