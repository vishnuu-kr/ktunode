---
title: "Solution by Gauss elimination"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 2"
module: "Module 1: Linear systems of equations"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6e58474a0b135b5d09"
status: "completed"
scrapedAt: "2026-05-20T16:34:29.389Z"
---
Absolutely! Let's dive into the fascinating world of solving linear systems using Gaussian elimination. This method is a cornerstone in linear algebra and incredibly useful for many applications in Information Science, from data analysis to solving optimization problems.

---

## **Module 1: Linear Systems of Equations**

### **Topic: Solution by Gauss Elimination**

Hello everyone! Welcome back to Mathematics for Information Science – 2. Today, we're going to tackle a really fundamental problem: solving systems of linear equations. You've likely seen these before, perhaps in high school algebra, but we're going to approach them with a more systematic and powerful method that sets us up for more advanced concepts later in the course. The method we'll focus on is **Gauss elimination**, also known as **Gaussian elimination**.

Why is this so important for Information Science? Well, imagine you're trying to build a predictive model. Often, the relationships between different features in your data can be expressed as linear equations. Solving these systems allows us to find the parameters of our model, understand the relationships, and make predictions. It's also crucial when we analyze the stability of systems or solve certain network flow problems.

Our main goal in this topic is to understand how to systematically solve systems of linear equations. This directly contributes to **Course Outcome 1 (CO1)**: *Solve system of linear equations...* We'll be building a K3 (Application) level of understanding here, meaning we’ll not only know *how* to do it but also *why* it works and how to apply it.

### **1. What is a System of Linear Equations?**

Let's start with the basics. A system of linear equations is simply a collection of one or more linear equations, where each equation involves variables that are only raised to the power of one.

Consider a simple example, like a system with two variables, $x$ and $y$:

*   $2x + 3y = 7$
*   $x - y = 1$

This is a system of two linear equations in two unknowns. We are looking for values of $x$ and $y$ that satisfy *both* equations simultaneously. Think of it like trying to find the intersection point of two lines on a graph. If the lines intersect at a single point, there's a unique solution. They might be parallel (no solution), or they might be the same line (infinitely many solutions).

In Information Science, these variables ($x, y, z$, etc.) could represent anything – the weights in a machine learning model, the flow rates in a network, or the probabilities of different states in a system. The coefficients (2, 3, 1, -1 in our example) represent the relationships between these variables.

### **2. Representing Systems with Matrices**

Manually solving these systems can get cumbersome, especially when you have many equations and many variables. This is where matrices come to our rescue! Matrices provide a compact and organized way to represent and manipulate systems of linear equations.

Let's take a general system of $m$ linear equations with $n$ unknowns:

$a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n = b_1$
$a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n = b_2$
$\vdots$
$a_{m1}x_1 + a_{m2}x_2 + \dots + a_{mn}x_n = b_m$

We can represent this system in matrix form as $A\mathbf{x} = \mathbf{b}$, where:

*   $A$ is the **coefficient matrix**: It contains all the coefficients of the variables.
    $A = \begin{pmatrix} a_{11} & a_{12} & \dots & a_{1n} \\ a_{21} & a_{22} & \dots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \dots & a_{mn} \end{pmatrix}$
*   $\mathbf{x}$ is the **variable vector**: A column matrix containing the unknowns.
    $\mathbf{x} = \begin{pmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{pmatrix}$
*   $\mathbf{b}$ is the **constant vector**: A column matrix containing the constants on the right-hand side of the equations.
    $\mathbf{b} = \begin{pmatrix} b_1 \\ b_2 \\ \vdots \\ b_m \end{pmatrix}$

This is a fundamental representation that we'll use extensively. It directly relates to our **CO1** as it's the first step in manipulating the system algebraically.

To facilitate the solution process, we often combine the coefficient matrix $A$ and the constant vector $\mathbf{b}$ into a single **augmented matrix**, denoted as $[A | \mathbf{b}]$:

$[A | \mathbf{b}] = \begin{pmatrix} a_{11} & a_{12} & \dots & a_{1n} & | & b_1 \\ a_{21} & a_{22} & \dots & a_{2n} & | & b_2 \\ \vdots & \vdots & \ddots & \vdots & | & \vdots \\ a_{m1} & a_{m2} & \dots & a_{mn} & | & b_m \end{pmatrix}$

Think of the vertical line as a separator, clearly distinguishing the coefficients from the constants. This augmented matrix is what we'll be transforming.

### **3. The Power of Elementary Row Operations**

The core idea behind Gauss elimination is to transform the augmented matrix into a simpler form, specifically **row echelon form** or **reduced row echelon form**, using a specific set of allowed operations. These operations are called **elementary row operations**, and the crucial point is that they *do not change the solution set* of the original system. This is key! We're not changing the problem; we're just rewriting it in an easier-to-solve form.

What are these magical operations? There are three of them:

1.  **Swapping two rows:** If we interchange two equations in our system, the overall solution doesn't change. For example, if we have:
    *   $x + y = 3$
    *   $2x - y = 0$
    Swapping them gives:
    *   $2x - y = 0$
    *   $x + y = 3$
    The $(x, y)$ pair that satisfies the first system will also satisfy the second. In matrix terms, this means we can swap $R_i \leftrightarrow R_j$.

2.  **Multiplying a row by a non-zero scalar:** If we multiply both sides of an equation by the same non-zero number, it's still the same equation. For instance, from $x + y = 3$, if we multiply by 2, we get $2x + 2y = 6$. Any solution to the first is a solution to the second, and vice-versa. In matrix terms: $k R_i \rightarrow R_i$, where $k \neq 0$.

3.  **Adding a multiple of one row to another row:** This is perhaps the most powerful operation. If we have two equations, say:
    *   Eq1: $x + y = 3$
    *   Eq2: $2x - y = 0$
    We can create a new equation by adding (or subtracting) a multiple of one to the other. For example, let's try to eliminate $x$ from the second equation. We can multiply the first equation by $-2$ and add it to the second equation:
    *   $-2 \times (\text{Eq1}): -2x - 2y = -6$
    *   $(\text{Eq2}): \quad 2x - y = 0$
    *   Adding them: $\quad -3y = -6$
    This new equation, $-3y = -6$, can replace our original second equation. Our system now looks like:
    *   $x + y = 3$
    *   $-3y = -6$
    Notice how the $x$ term vanished in the second equation! This is precisely what Gauss elimination aims to achieve. In matrix terms: $R_i + k R_j \rightarrow R_i$.

These three operations are the building blocks. By applying them strategically, we can transform any augmented matrix into a simpler form.

### **4. Gauss Elimination: The Process**

Gauss elimination aims to transform the augmented matrix into **row echelon form**. A matrix is in row echelon form if:

*   All non-zero rows are above any rows of all zeros.
*   The first non-zero entry (called the **leading entry** or **pivot**) in each non-zero row is 1 (optional, but often preferred for reduced row echelon form).
*   Each leading entry is in a column to the right of the leading entry of the row above it.
*   All entries in a column below a leading entry are zero.

Let's walk through an example. Suppose we have the system:

$x + 2y + z = 3$
$2x + 5y - z = 4$
$3x - y - 2z = 1$

First, we write down the augmented matrix:

$\begin{pmatrix} 1 & 2 & 1 & | & 3 \\ 2 & 5 & -1 & | & 4 \\ 3 & -1 & -2 & | & 1 \end{pmatrix}$

Our goal is to get zeros below the leading entry in the first column (which is the '1' in the first row).

**Step 1: Get zeros below the pivot in the first column.**

*   The pivot is $a_{11} = 1$.
*   To eliminate the '2' in the second row, first column, we perform $R_2 \leftarrow R_2 - 2R_1$:
    *   Row 2: $(2, 5, -1, | 4)$
    *   $-2 \times$ Row 1: $(-2, -4, -2, | -6)$
    *   New Row 2: $(0, 1, -3, | -2)$
*   To eliminate the '3' in the third row, first column, we perform $R_3 \leftarrow R_3 - 3R_1$:
    *   Row 3: $(3, -1, -2, | 1)$
    *   $-3 \times$ Row 1: $(-3, -6, -3, | -9)$
    *   New Row 3: $(0, -7, -5, | -8)$

Our matrix now looks like this:

$\begin{pmatrix} 1 & 2 & 1 & | & 3 \\ 0 & 1 & -3 & | & -2 \\ 0 & -7 & -5 & | & -8 \end{pmatrix}$

**Step 2: Get zeros below the pivot in the second column.**

*   Now, we look at the second column. The pivot is the leading entry in the second row, which is $a_{22} = 1$.
*   We need to eliminate the '-7' in the third row, second column. We perform $R_3 \leftarrow R_3 + 7R_2$:
    *   Row 3: $(0, -7, -5, | -8)$
    *   $7 \times$ Row 2: $(0, 7, -21, | -14)$
    *   New Row 3: $(0, 0, -26, | -22)$

The matrix is now:

$\begin{pmatrix} 1 & 2 & 1 & | & 3 \\ 0 & 1 & -3 & | & -2 \\ 0 & 0 & -26 & | & -22 \end{pmatrix}$

This matrix is now in **row echelon form**. The leading entries are 1 (in $R_1$), 1 (in $R_2$), and -26 (in $R_3$). Each leading entry is to the right of the one above it, and all entries below the leading entries are zero.

**Step 3: Back Substitution**

Once we have the matrix in row echelon form, we can convert it back into a system of equations:

$1x + 2y + 1z = 3$
$0x + 1y - 3z = -2$
$0x + 0y - 26z = -22$

This simplified system is much easier to solve. We use **back substitution**, starting from the last equation:

From the third equation:
$-26z = -22$
$z = \frac{-22}{-26} = \frac{11}{13}$

Now substitute this value of $z$ into the second equation:
$y - 3z = -2$
$y - 3\left(\frac{11}{13}\right) = -2$
$y - \frac{33}{13} = -2$
$y = -2 + \frac{33}{13} = -\frac{26}{13} + \frac{33}{13} = \frac{7}{13}$

Finally, substitute the values of $y$ and $z$ into the first equation:
$x + 2y + z = 3$
$x + 2\left(\frac{7}{13}\right) + \frac{11}{13} = 3$
$x + \frac{14}{13} + \frac{11}{13} = 3$
$x + \frac{25}{13} = 3$
$x = 3 - \frac{25}{13} = \frac{39}{13} - \frac{25}{13} = \frac{14}{13}$

So, the unique solution to our system is $x = \frac{14}{13}, y = \frac{7}{13}, z = \frac{11}{13}$.

This step-by-step process of transforming the matrix and then back-substituting is the essence of Gauss elimination. It's a systematic algorithm, which is fantastic for computation and understanding. Kreyszig's "Advanced Engineering Mathematics" and Larson's "Elementary Linear Algebra" both provide thorough treatments of this procedure.

### **5. Types of Solutions and What They Mean**

As we perform Gauss elimination, we might encounter situations that tell us about the nature of the solution. A system of linear equations can have:

*   **A unique solution:** This is what we saw in our example. It happens when the row echelon form of the coefficient matrix has a pivot in every column corresponding to a variable. For an $n \times n$ system, if we get a diagonal matrix with non-zero entries on the diagonal after full reduction, it's a unique solution.

*   **No solution:** This occurs when, during the process, we end up with a row in the augmented matrix that looks like `[0 0 ... 0 | c]` where $c$ is a non-zero number. This translates to the equation $0x_1 + 0x_2 + \dots + 0x_n = c$, which is $0 = c$. Since $c$ is non-zero, this is a contradiction, meaning there's no set of values for $x_1, \dots, x_n$ that can satisfy this. It implies the lines or planes represented by the equations do not intersect at a common point. Think of three planes that are parallel or intersect in pairs but not all at once.

*   **Infinitely many solutions:** This happens when we have fewer non-zero rows in the row echelon form than the number of variables, and we don't encounter a contradiction (like $0=c$). In this case, some variables (called **free variables**) can take on any value, and the other variables (called **basic variables**) are expressed in terms of these free variables. For example, if our last non-zero row looks like `[0 0 5 | 10]`, it means $5z = 10$, so $z=2$. If we had a row like `[0 0 0 | 0]`, it's $0=0$, which is always true and doesn't restrict our variables. If, after reducing, we have fewer pivots than variables, we have free variables.

Let's see an example of no solution:

$x + y = 2$
$2x + 2y = 5$

Augmented matrix:
$\begin{pmatrix} 1 & 1 & | & 2 \\ 2 & 2 & | & 5 \end{pmatrix}$

Perform $R_2 \leftarrow R_2 - 2R_1$:
$\begin{pmatrix} 1 & 1 & | & 2 \\ 0 & 0 & | & 1 \end{pmatrix}$

The second row translates to $0x + 0y = 1$, or $0 = 1$. This is impossible, so the system has no solution. Geometrically, these are two parallel lines that never intersect.

Now, an example of infinitely many solutions:

$x + y + z = 3$
$2x + 2y + 2z = 6$

Augmented matrix:
$\begin{pmatrix} 1 & 1 & 1 & | & 3 \\ 2 & 2 & 2 & | & 6 \end{pmatrix}$

Perform $R_2 \leftarrow R_2 - 2R_1$:
$\begin{pmatrix} 1 & 1 & 1 & | & 3 \\ 0 & 0 & 0 & | & 0 \end{pmatrix}$

The second row $0=0$ provides no new information. The system effectively reduces to one equation: $x + y + z = 3$. Here, we have 3 variables and only 1 independent equation. We can choose two variables to be free, say $y$ and $z$, and express $x$ in terms of them: $x = 3 - y - z$. So, for any choice of $y$ and $z$, we get a valid $x$. This gives us infinitely many solutions.

This ability to discern the nature of solutions is critical. In machine learning, if your system has no solution, it might mean your model assumptions are flawed, or there's an inconsistency in your data. If it has infinitely many solutions, it might suggest your features are redundant or not enough to uniquely determine the model parameters. This connects directly to understanding the structure of the solution space, a core idea in linear algebra.

### **6. Gauss-Jordan Elimination: A Step Further**

Gauss elimination gets us to row echelon form. A slightly more advanced, but very useful, variation is **Gauss-Jordan elimination**. This method goes a step further and transforms the augmented matrix into **reduced row echelon form (RREF)**.

A matrix is in reduced row echelon form if:

*   It is in row echelon form.
*   Every leading entry is 1.
*   Each leading entry is the *only* non-zero entry in its column.

To achieve RREF, after getting the row echelon form, we perform additional row operations to create zeros *above* the leading entries as well.

Let's take our previous example's row echelon form:

$\begin{pmatrix} 1 & 2 & 1 & | & 3 \\ 0 & 1 & -3 & | & -2 \\ 0 & 0 & -26 & | & -22 \end{pmatrix}$

**Step 4: Make leading entries 1 (if not already)**

*   Divide $R_3$ by $-26$: $R_3 \leftarrow R_3 / (-26)$
    New Row 3: $(0, 0, 1, | \frac{11}{13})$

The matrix is now:
$\begin{pmatrix} 1 & 2 & 1 & | & 3 \\ 0 & 1 & -3 & | & -2 \\ 0 & 0 & 1 & | & \frac{11}{13} \end{pmatrix}$

**Step 5: Create zeros above the leading entries (from bottom up)**

*   Eliminate the '-3' in $R_2$, column 3: $R_2 \leftarrow R_2 + 3R_3$
    *   Row 2: $(0, 1, -3, | -2)$
    *   $3 \times$ Row 3: $(0, 0, 3, | \frac{33}{13})$
    *   New Row 2: $(0, 1, 0, | -2 + \frac{33}{13}) = (0, 1, 0, | \frac{7}{13})$

*   Eliminate the '1' in $R_1$, column 3: $R_1 \leftarrow R_1 - R_3$
    *   Row 1: $(1, 2, 1, | 3)$
    *   $-1 \times$ Row 3: $(0, 0, -1, | -\frac{11}{13})$
    *   New Row 1: $(1, 2, 0, | 3 - \frac{11}{13}) = (1, 2, 0, | \frac{28}{13})$

The matrix is now:
$\begin{pmatrix} 1 & 2 & 0 & | & \frac{28}{13} \\ 0 & 1 & 0 & | & \frac{7}{13} \\ 0 & 0 & 1 & | & \frac{11}{13} \end{pmatrix}$

**Step 6: Create zeros above the remaining leading entries**

*   Eliminate the '2' in $R_1$, column 2: $R_1 \leftarrow R_1 - 2R_2$
    *   Row 1: $(1, 2, 0, | \frac{28}{13})$
    *   $-2 \times$ Row 2: $(0, -2, 0, | -\frac{14}{13})$
    *   New Row 1: $(1, 0, 0, | \frac{28}{13} - \frac{14}{13}) = (1, 0, 0, | \frac{14}{13})$

The final matrix in reduced row echelon form is:

$\begin{pmatrix} 1 & 0 & 0 & | & \frac{14}{13} \\ 0 & 1 & 0 & | & \frac{7}{13} \\ 0 & 0 & 1 & | & \frac{11}{13} \end{pmatrix}$

This form directly reads the solution: $x = \frac{14}{13}$, $y = \frac{7}{13}$, $z = \frac{11}{13}$.

Gauss-Jordan elimination is often preferred when we want the solution directly without back-substitution. It gives us the identity matrix on the left side (if a unique solution exists for a square system), which is a very clear indicator of the solution. This method is also highly algorithmic and suitable for computer implementation.

Remember this: The choice between Gauss elimination (to row echelon form) and Gauss-Jordan elimination (to RREF) often depends on the specific problem or personal preference. Both are valid and powerful.

### **7. Connection to Course Outcomes and Knowledge Levels**

Let's revisit how this topic ties into our course objectives:

*   **CO1: Solve system of linear equations, to evaluate eigen values and eigen vectors of matrices and to diagonalize matrices.**
    *   Our entire discussion on Gauss elimination is directly addressing the first part of CO1. The ability to solve systems of linear equations is a prerequisite for many other topics, including finding eigenvalues and eigenvectors (which are solutions to a specific type of linear system, $(A - \lambda I)\mathbf{v} = \mathbf{0}$). Understanding how to manipulate matrices systematically here builds the foundation for matrix diagonalization later on. We are working at a **K3 (Application)** level because we are actively applying the Gaussian elimination algorithm to find solutions.

Understanding the different types of solutions (unique, none, infinite) also gives us insight into the **rank** of the matrix, which is a key concept we'll explore more when we discuss linear transformations (CO4). The rank is essentially the number of non-zero rows in the row echelon form.

### **8. Practical Considerations and Pitfalls**

*   **Arithmetic Errors:** This is the most common pitfall! Be meticulous with your calculations, especially with fractions. A single mistake can propagate and lead to an incorrect answer. Double-check your row operations.
*   **Choosing Pivots:** Sometimes, the leading entry in a column might be zero. If this happens, you need to swap that row with a row below it that has a non-zero entry in that column. If all entries below the pivot position are zero, you move to the next column for the pivot. This is called **pivoting**. For numerical stability in large systems, partial or full pivoting strategies are used, where you choose the largest element in the column as the pivot to minimize round-off errors.
*   **Efficiency:** For very large systems, Gauss elimination can be computationally intensive. However, it's a robust and generally effective method.
*   **Interpreting Results:** Always relate your matrix operations back to the original system of equations and what they mean in the context of the problem.

**Quick Recall Tip:** Think of Gauss elimination as systematically "zeroing out" parts of the augmented matrix, column by column, to simplify the system until it's almost trivial to solve.

---

### **Sample Questions with Answers**

**Question 1 (Conceptual):**
What are the three elementary row operations? Why are they important in solving systems of linear equations using Gauss elimination?

**Answer:**
The three elementary row operations are:
1.  Swapping two rows ($R_i \leftrightarrow R_j$).
2.  Multiplying a row by a non-zero scalar ($k R_i \rightarrow R_i, k \neq 0$).
3.  Adding a multiple of one row to another row ($R_i + k R_j \rightarrow R_i$).

They are important because applying these operations to the augmented matrix of a system of linear equations does not change the solution set of the system. This allows us to transform the original, potentially complex, system into a simpler equivalent system (in row echelon form) from which the solution can be easily found through back-substitution.

**Question 2 (Application - Unique Solution):**
Solve the following system of linear equations using Gauss elimination:
$x - y + 2z = 7$
$2x + y + z = 3$
$3x + y - z = 2$

**Answer:**
The augmented matrix is:
$\begin{pmatrix} 1 & -1 & 2 & | & 7 \\ 2 & 1 & 1 & | & 3 \\ 3 & 1 & -1 & | & 2 \end{pmatrix}$

1.  $R_2 \leftarrow R_2 - 2R_1$ and $R_3 \leftarrow R_3 - 3R_1$:
    $\begin{pmatrix} 1 & -1 & 2 & | & 7 \\ 0 & 3 & -3 & | & -11 \\ 0 & 4 & -7 & | & -19 \end{pmatrix}$

2.  $R_3 \leftarrow R_3 - \frac{4}{3}R_2$:
    $\begin{pmatrix} 1 & -1 & 2 & | & 7 \\ 0 & 3 & -3 & | & -11 \\ 0 & 0 & -3 & | & \frac{7}{3} \end{pmatrix}$

The system is now:
$x - y + 2z = 7$
$3y - 3z = -11$
$-3z = \frac{7}{3}$

Back-substitution:
From the third equation: $z = \frac{7}{3} / (-3) = -\frac{7}{9}$

Substitute $z$ into the second equation:
$3y - 3(-\frac{7}{9}) = -11$
$3y + \frac{7}{3} = -11$
$3y = -11 - \frac{7}{3} = -\frac{33+7}{3} = -\frac{40}{3}$
$y = -\frac{40}{9}$

Substitute $y$ and $z$ into the first equation:
$x - (-\frac{40}{9}) + 2(-\frac{7}{9}) = 7$
$x + \frac{40}{9} - \frac{14}{9} = 7$
$x + \frac{26}{9} = 7$
$x = 7 - \frac{26}{9} = \frac{63-26}{9} = \frac{37}{9}$

Solution: $x = \frac{37}{9}, y = -\frac{40}{9}, z = -\frac{7}{9}$.

**Question 3 (Conceptual - Types of Solutions):**
When performing Gauss elimination on a system of linear equations, what does a resulting row of the form `[0 0 ... 0 | c]` where $c \neq 0$ indicate about the system's solution?

**Answer:**
A row of the form `[0 0 ... 0 | c]` where $c \neq 0$ indicates that the system of linear equations has **no solution**. This row translates to the equation $0 \cdot x_1 + 0 \cdot x_2 + \dots + 0 \cdot x_n = c$, which simplifies to $0 = c$. Since $c$ is non-zero, this is a contradiction, meaning there are no values for the variables that can satisfy all equations simultaneously. Geometrically, this means the planes or lines represented by the equations do not have a common intersection point.

**Question 4 (Application - Infinitely Many Solutions):**
Determine if the following system has a unique solution, no solution, or infinitely many solutions. If infinitely many, describe the general solution.
$x + 2y - z = 3$
$2x + 4y - 2z = 6$
$x - y + z = 1$

**Answer:**
The augmented matrix is:
$\begin{pmatrix} 1 & 2 & -1 & | & 3 \\ 2 & 4 & -2 & | & 6 \\ 1 & -1 & 1 & | & 1 \end{pmatrix}$

1.  $R_2 \leftarrow R_2 - 2R_1$:
    $\begin{pmatrix} 1 & 2 & -1 & | & 3 \\ 0 & 0 & 0 & | & 0 \\ 1 & -1 & 1 & | & 1 \end{pmatrix}$
    The second row is all zeros, indicating redundancy.

2.  $R_3 \leftarrow R_3 - R_1$:
    $\begin{pmatrix} 1 & 2 & -1 & | & 3 \\ 0 & 0 & 0 & | & 0 \\ 0 & -3 & 2 & | & -2 \end{pmatrix}$

Let's reorder rows for better echelon form: $R_2 \leftrightarrow R_3$.
$\begin{pmatrix} 1 & 2 & -1 & | & 3 \\ 0 & -3 & 2 & | & -2 \\ 0 & 0 & 0 & | & 0 \end{pmatrix}$

The matrix is in row echelon form. We have two non-zero rows for three variables. This indicates infinitely many solutions.

The system is equivalent to:
$x + 2y - z = 3$
$-3y + 2z = -2$

From the second equation, we can express $y$ in terms of $z$ (let $z$ be the free variable):
$-3y = -2 - 2z$
$y = \frac{2+2z}{3}$

Now substitute this $y$ into the first equation to express $x$ in terms of $z$:
$x + 2(\frac{2+2z}{3}) - z = 3$
$x + \frac{4+4z}{3} - z = 3$
$x = 3 - \frac{4+4z}{3} + z$
$x = \frac{9 - (4+4z) + 3z}{3}$
$x = \frac{9 - 4 - 4z + 3z}{3}$
$x = \frac{5 - z}{3}$

General solution: $x = \frac{5-z}{3}, y = \frac{2+2z}{3}$, where $z$ is any real number.

---

This concludes our introduction to solving linear systems by Gauss elimination. Remember, practice is key! Work through more examples from your textbooks, and you'll get a real feel for the method. Keep these notes handy, and don't hesitate to ask questions. We'll build upon this foundation in future modules.
