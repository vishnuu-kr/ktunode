---
title: "Uniqueness (without proof)"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL 
SCIENCE - 1"
module: "Module 1: Linear systems of equations: Gauss elimination"
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213e9ece2bdd875f94f4"
status: "completed"
scrapedAt: "2026-05-23T16:03:05.111Z"
---
# Mathematics for Electrical Science and Physical Science - 1

## Module 1: Linear Systems of Equations: Gauss Elimination

### Topic: Uniqueness of Solutions (Without Proof)

Welcome, everyone! Today, we're diving into a crucial aspect of linear systems of equations, something that often trips students up: the *uniqueness* of their solutions. We've already seen how Gauss elimination is our powerful tool for solving these systems, transforming them into a simpler, manageable form. But what happens after we've done all that work? Does a solution *always* exist? And if it does, is it the *only* one? These are the questions we'll explore today, focusing on the "what" and "why" without getting bogged down in formal proofs, keeping our focus on the practical implications for electrical and physical science.

You see, in our fields, whether we're analyzing circuits, modeling physical phenomena, or solving optimization problems, getting a single, well-defined answer is often paramount. Imagine designing a bridge or a control system – ambiguity just won't cut it! Understanding when a linear system has a unique solution, no solution, or infinitely many solutions is fundamental.

Our journey today is directly tied to **Course Outcome 1 (CO1): Solve systems of linear equations and diagonalize matrices.** Understanding uniqueness is the bedrock upon which our ability to *solve* these systems rests. If we know a system has a unique solution, our Gauss elimination process should lead us to precisely one answer. If it doesn't, we need to recognize that and interpret what that means in our physical or electrical context.

### What Does "Uniqueness" Really Mean?

When we talk about a linear system of equations having a *unique* solution, we mean there is **exactly one** combination of the variables (like voltage, current, position, etc.) that satisfies *all* the equations simultaneously. Think of it like a secret code where there's only one correct sequence of numbers to unlock it. If you try another sequence, it simply doesn't work.

In terms of our Gauss elimination process, this unique solution usually emerges when we reach a point where our augmented matrix, after row operations, looks something like this (for a system with three variables $x, y, z$):

$$
\begin{bmatrix}
1 & 0 & 0 & | & a \\
0 & 1 & 0 & | & b \\
0 & 0 & 1 & | & c
\end{bmatrix}
$$

This is the "reduced row echelon form" (RREF). From this form, it's crystal clear: $x = a$, $y = b$, and $z = c$. There's no ambiguity, no room for interpretation – just one specific answer. This is often the most desirable outcome in our scientific and engineering applications.

### The Three Possibilities: A Glimpse Ahead

As we perform Gauss elimination, the system of equations can lead us to one of three distinct scenarios regarding its solutions:

1.  **A Unique Solution:** As we just discussed, there’s exactly one set of values for the variables that satisfies all equations.
2.  **No Solution (Inconsistent System):** This happens when our row operations lead to a contradiction, typically a row that looks like $[0 \ 0 \ \dots \ 0 \ | \ k]$ where $k$ is a non-zero number. This translates to an equation like $0x + 0y + \dots = k$, which is $0 = k$. Since $k$ is not zero, this is impossible. It’s like trying to solve a puzzle where two pieces *must* fit together but have incompatible shapes – it simply cannot be done.
3.  **Infinitely Many Solutions (Consistent but Undetermined System):** This occurs when, after row reduction, we have fewer non-zero rows than variables, and no contradictions arise. This often manifests as rows like $[0 \ 0 \ \dots \ 0 \ | \ 0]$ (which is $0=0$, always true and doesn't help us) or having a variable that doesn't get a leading '1' in its column, implying it can take on any value, and the other variables depend on it.

Our focus today is on the **first scenario: the unique solution**. When does Gauss elimination reliably lead us to this single, definitive answer?

### When Do We Get That Precious Unique Solution?

Think about what Gauss elimination does: it systematically eliminates variables and simplifies the system. The goal is to isolate each variable.

**Key Idea:** A system of $n$ linear equations in $n$ variables has a unique solution if and only if, after performing Gauss elimination (and simplifying to row echelon form or reduced row echelon form), we end up with **exactly $n$ pivot positions**.

What's a pivot position? It's the position of the leading non-zero entry in each row after row reduction. In the RREF example we saw earlier:

$$
\begin{bmatrix}
\textbf{1} & 0 & 0 & | & a \\
0 & \textbf{1} & 0 & | & b \\
0 & 0 & \textbf{1} & | & c
\end{bmatrix}
$$

The '1's on the main diagonal are our pivot positions. We have three pivot positions for a system with three variables.

Let's use an analogy. Imagine you have a set of locks and keys.
*   **Unique Solution:** You have exactly as many distinct locks as you have distinct keys, and each key fits only one lock, and each lock can only be opened by one key.
*   **No Solution:** You have a lock with no corresponding key, or a key that fits no lock.
*   **Infinitely Many Solutions:** You might have duplicate keys for the same lock, or perhaps a master key that opens several locks, meaning there are multiple ways to get things done.

In a system of $n$ linear equations with $n$ variables, if we get $n$ pivot positions, it means each variable can be uniquely determined. The process effectively "resolves" each variable's value.

**Connection to Matrices (Kreyszig & Anton):**

In the language of linear algebra, particularly as discussed in Kreyszig's "Advanced Engineering Mathematics" and Anton's "Elementary Linear Algebra," this relates to the **rank of the coefficient matrix** and the **rank of the augmented matrix**.

For a system $A\mathbf{x} = \mathbf{b}$, where $A$ is the coefficient matrix, $\mathbf{x}$ is the vector of variables, and $\mathbf{b}$ is the constant vector:

*   The system has a **unique solution** if and only if:
    *   The rank of the coefficient matrix $A$ is equal to the number of variables ($n$).
    *   AND the rank of the augmented matrix $[A|\mathbf{b}]$ is also equal to the number of variables ($n$).

When we have $n$ equations and $n$ variables, and Gauss elimination results in $n$ pivots, it implies that both ranks are $n$. This is a very solid indicator of a unique solution.

**Example Scenario:**

Consider a simple electrical circuit problem where we use Kirchhoff's Voltage Law (KVL) and Kirchhoff's Current Law (KCL) to set up equations for the unknown currents or voltages. Let's say we have a circuit with three unknown currents, $I_1, I_2, I_3$. After applying KVL and KCL, we might get a system like this:

$2I_1 + 3I_2 - I_3 = 10$
$I_1 - I_2 + 2I_3 = 5$
$3I_1 + 2I_2 + I_3 = 15$

This is a system of 3 equations in 3 unknowns. If we perform Gauss elimination on the augmented matrix:

$$
\begin{bmatrix}
2 & 3 & -1 & | & 10 \\
1 & -1 & 2 & | & 5 \\
3 & 2 & 1 & | & 15
\end{bmatrix}
$$

And if, after all our row operations, we arrive at something like:

$$
\begin{bmatrix}
1 & 0 & 0 & | & 2 \\
0 & 1 & 0 & | & 1 \\
0 & 0 & 1 & | & -3
\end{bmatrix}
$$

This tells us $I_1 = 2$ Amps, $I_2 = 1$ Amp, and $I_3 = -3$ Amps. This is a unique solution. The negative sign for $I_3$ simply means the actual current flow is in the opposite direction to what we initially assumed. This is perfectly normal!

### What Happens When We Don't Get $n$ Pivots?

If, during Gauss elimination for an $n \times n$ system, we end up with fewer than $n$ pivots, we're heading into the territory of either no solution or infinitely many solutions.

*   **Zero Row:** If we get a row $[0 \ 0 \ \dots \ 0 \ | \ k]$ with $k \neq 0$, then the system is inconsistent – there is **no solution**. Our Gauss elimination process has revealed a fundamental contradiction in the problem setup. This might indicate an error in the circuit diagram, a misapplication of laws, or a physical impossibility described by the model.

*   **Free Variables:** If we have fewer than $n$ pivots and no contradictory zero rows, it means we have "free variables." These are variables whose corresponding columns in the RREF do not contain a pivot. These variables can take on any value, and the other "basic" variables are expressed in terms of these free variables. This leads to **infinitely many solutions**. This might happen in scenarios where there's redundancy in the measurements or constraints, or in systems where there are more variables than independent equations. For instance, in some control systems, multiple input combinations might yield the same output.

**Crucial Point:** For systems that are *not* square ($m \times n$ where $m \neq n$), the situation is similar. The number of pivots determines the rank. A unique solution is only possible if the number of variables ($n$) is less than or equal to the number of equations ($m$). If $n > m$, you are guaranteed to have either no solution or infinitely many solutions, never a unique one (because you can't have more pivots than rows, and pivots must be $\leq$ number of columns).

### Why is Uniqueness Important in Our Fields?

*   **Circuit Analysis:** In electrical engineering, we often need to find specific voltage drops or current flows. If a system of equations describing a circuit has a unique solution, it means the circuit's behavior is precisely determined by its components and configuration. If it has no solution, there's an issue with our analysis or the circuit's design (e.g., a short circuit causing division by zero implicitly). Infinitely many solutions might mean there are redundant elements or that certain parameters can be varied without affecting the overall behavior in a specific way, which could be a design consideration.

*   **Structural Mechanics:** In physical science, when analyzing the forces and stresses in a structure (like a bridge or building), we set up systems of equations. A unique solution implies the structure is statically determinate – its forces are uniquely defined. If there are infinitely many solutions, the structure is statically indeterminate, meaning there are ways to rearrange internal forces or loads without changing the external support reactions. This can lead to stresses being distributed differently, which is crucial for material fatigue analysis.

*   **Control Systems:** For systems described by differential equations, which are often solved using linear algebra techniques (especially when dealing with state-space representations), unique solutions are vital for predictable behavior. If a control system doesn't have a unique response to a given input, it's problematic for stability and reliability.

### How Exams Test This Understanding

Exams will often present you with a system of linear equations and ask about the nature of its solution *without* necessarily asking you to find the exact values.

*   **Question type:** "Determine if the following system has a unique solution, no solution, or infinitely many solutions."
*   **What to look for:** Apply Gauss elimination.
    *   If you get $n$ pivots for an $n \times n$ system, it's **unique**.
    *   If you get a row like $[0 \ 0 \ \dots \ 0 \ | \ k]$ with $k \neq 0$, it's **no solution**.
    *   If you have fewer than $n$ pivots (for an $n \times n$ system) and no contradictory rows, it's **infinitely many solutions**.

**Common Pitfall:** Students sometimes stop the Gauss elimination process too early or make arithmetic errors, leading to incorrect conclusions about the number of pivots or the presence of zero rows. Always aim for either row echelon form or, ideally, reduced row echelon form to be certain.

**Quick Recall Tip:** For an $n \times n$ system, Gauss elimination leading to an upper triangular matrix (row echelon form) with *all non-zero diagonal entries* is a strong indicator of a unique solution. If you can further transform this into the identity matrix on the left side, you've confirmed the unique solution.

### Summarizing the Core Idea

The uniqueness of solutions in a linear system of equations, particularly those we encounter in science and engineering, is directly revealed by the process of Gauss elimination. The presence of a pivot for every variable (in a square system) guarantees a single, definitive answer. This is the ideal scenario for many applications, ensuring predictability and resolvability. When this condition isn't met, it signals either an impossible situation (no solution) or a situation with flexibility in how the solution is achieved (infinitely many solutions). Understanding these possibilities helps us interpret the results of our mathematical models in the context of the physical or electrical systems they represent.

---

### Sample Questions with Answers

**Question 1 (Conceptual):**
If a system of $n$ linear equations in $n$ variables is transformed into its row echelon form using Gauss elimination, what is the primary indicator that the system has a unique solution?

**Answer:**
The primary indicator of a unique solution for a system of $n$ linear equations in $n$ variables is the presence of exactly $n$ pivot positions after applying Gauss elimination. This means that each variable can be uniquely determined, often resulting in a diagonal matrix (or an upper triangular matrix with non-zero diagonal elements that can be scaled to 1s) on the left side of the augmented matrix in its reduced row echelon form.

**Question 2 (Exam-Oriented):**
Consider the following system of linear equations:
$x + 2y - z = 3$
$2x + y + z = 6$
$3x + 3y + 2z = 9$

Does this system have a unique solution? Justify your answer using the concepts of Gauss elimination.

**Answer:**
To determine if this system has a unique solution, we apply Gauss elimination to its augmented matrix:

$$
\begin{bmatrix}
1 & 2 & -1 & | & 3 \\
2 & 1 & 1 & | & 6 \\
3 & 3 & 2 & | & 9
\end{bmatrix}
$$

Step 1: Make the first element of the second and third rows zero.
$R_2 \leftarrow R_2 - 2R_1$
$R_3 \leftarrow R_3 - 3R_1$

$$
\begin{bmatrix}
1 & 2 & -1 & | & 3 \\
0 & -3 & 3 & | & 0 \\
0 & -3 & 5 & | & 0
\end{bmatrix}
$$

Step 2: Make the first element of the third row zero (already done) and the second element of the third row zero.
$R_3 \leftarrow R_3 - R_2$

$$
\begin{bmatrix}
1 & 2 & -1 & | & 3 \\
0 & -3 & 3 & | & 0 \\
0 & 0 & 2 & | & 0
\end{bmatrix}
$$

Now, let's analyze the result. We have a system of 3 equations in 3 variables ($x, y, z$).
The resulting matrix is in row echelon form. We can count the number of pivot positions (the first non-zero entry in each non-zero row):
Row 1: Pivot is '1' (in the first column).
Row 2: Pivot is '-3' (in the second column).
Row 3: Pivot is '2' (in the third column).

We have **three pivot positions** for a system with **three variables**. This indicates that each variable ($x, y, z$) can be uniquely determined. Therefore, the system has a **unique solution**.

(To find the solution: From the last row, $2z = 0 \implies z = 0$. From the second row, $-3y + 3z = 0 \implies -3y + 3(0) = 0 \implies y = 0$. From the first row, $x + 2y - z = 3 \implies x + 2(0) - 0 = 3 \implies x = 3$. The unique solution is $(x, y, z) = (3, 0, 0)$.)

**Question 3 (Conceptual):**
What is the implication for a system of linear equations if, during Gauss elimination, you obtain a row of the form $[0 \ 0 \ \dots \ 0 \ | \ k]$ where $k \neq 0$?

**Answer:**
If Gauss elimination leads to a row of the form $[0 \ 0 \ \dots \ 0 \ | \ k]$ where $k \neq 0$, this represents an equation $0x_1 + 0x_2 + \dots + 0x_n = k$, which simplifies to $0 = k$. Since $k$ is non-zero, this statement is a contradiction. Such a contradiction means that there are no values for the variables that can simultaneously satisfy all the original equations. Therefore, the system of linear equations is inconsistent and has **no solution**.
