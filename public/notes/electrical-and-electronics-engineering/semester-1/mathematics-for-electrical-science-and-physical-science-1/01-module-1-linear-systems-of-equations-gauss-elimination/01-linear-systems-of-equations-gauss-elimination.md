---
title: "Linear systems of equations: Gauss elimination"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL 
SCIENCE - 1"
module: "Module 1: Linear systems of equations: Gauss elimination"
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213e9ece2bdd875f94f0"
status: "completed"
scrapedAt: "2026-05-23T16:03:01.886Z"
---
# Mathematics for Electrical Science and Physical Science - 1

## Module 1: Linear Systems of Equations: Gaussian Elimination

### Topic: Linear Systems of Equations: Gaussian Elimination

Welcome, everyone! Today, we embark on a journey into the heart of solving systems of linear equations, a fundamental skill that underpins so much of electrical and physical science. Think about circuits, mechanical systems, signal processing – they all, at their core, often boil down to understanding how multiple interconnected variables behave. This is where linear algebra, and specifically Gaussian elimination, becomes our most trusted tool.

Our goal in this module, and particularly today, is to equip you with the ability to **solve systems of linear equations**. This directly ties into **Course Outcome 1 (CO1)**, which is to "Solve systems of linear equations and diagonalize matrices." While we'll touch upon diagonalization later, understanding how to solve linear systems is the essential first step. It's a foundational skill (K3 - Application/Analysis) that allows us to model and predict the behavior of complex systems.

### What is a System of Linear Equations?

Let's start with the basics. What do we mean by a "system of linear equations"? Imagine you're trying to figure out the current flowing through different parts of an electrical circuit. You might have Kirchhoff's laws giving you relationships between these currents. If you have, say, three unknown currents ($I_1$, $I_2$, $I_3$), you'll likely end up with three equations that involve these currents, and importantly, these equations are *linear*. This means each variable appears only to the first power, and there are no products of variables.

A general system of *m* linear equations with *n* variables ($x_1, x_2, \dots, x_n$) looks like this:

$a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n = b_1$
$a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n = b_2$
$\vdots$
$a_{m1}x_1 + a_{m2}x_2 + \dots + a_{mn}x_n = b_m$

Here, the $a_{ij}$ are coefficients (constants), and the $b_i$ are also constants. Our job is to find the values of $x_1, x_2, \dots, x_n$ that satisfy *all* these equations simultaneously.

As Kreyszig mentions in his *Advanced Engineering Mathematics*, these systems are ubiquitous in modeling physical phenomena, from electrical networks to structural analysis and fluid dynamics. The challenge lies in efficiently and reliably finding the solution, especially as the number of equations and variables grows.

### Representing Systems: The Augmented Matrix

Writing out the full equations can become cumbersome. Fortunately, we can represent these systems much more compactly using matrices. This is where the concept of the **augmented matrix** comes in.

For the system above, we can form an augmented matrix by taking the coefficients of the variables and the constants on the right-hand side, separated by a vertical line (or simply understood to be separate).

$$
\begin{bmatrix}
a_{11} & a_{12} & \cdots & a_{1n} & | & b_1 \\
a_{21} & a_{22} & \cdots & a_{2n} & | & b_2 \\
\vdots & \vdots & \ddots & \vdots & | & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn} & | & b_m
\end{bmatrix}
$$

This matrix perfectly encapsulates all the information of the system of equations. The left part is the **coefficient matrix**, and the rightmost column is the **constant vector**.

Think of it like this: Imagine you're a chef preparing a complex recipe with multiple dishes. The ingredients needed for each dish, and the quantity of each ingredient, can be organized in a table. The augmented matrix is our organized "recipe book" for the system of equations.

### The Power of Elementary Row Operations

Now, how do we manipulate this augmented matrix to find the solution? This is where **Gaussian elimination** shines. The core idea is to perform a series of **elementary row operations** on the augmented matrix. These operations are special because they *do not change the solution set* of the original system. They are like making equivalent fractions – the value remains the same, but the representation is different and, in this case, simpler.

There are three fundamental elementary row operations:

1.  **Swapping two rows:** If we have equations $E_1$ and $E_2$, and we swap them, the system remains equivalent. In matrix terms, this means interchanging two rows ($R_i \leftrightarrow R_j$).
2.  **Multiplying a row by a non-zero scalar:** If we multiply an equation by a non-zero number, say $2 \times (3x + 4y = 5)$ becomes $(6x + 8y = 10)$, the solutions for $x$ and $y$ are the same. In matrix terms, this is multiplying a row by a constant $c \neq 0$ ($c R_i \to R_i$).
3.  **Adding a multiple of one row to another row:** This is perhaps the most powerful operation. If we have equations $E_1$ and $E_2$, and we replace $E_2$ with $E_2 + k E_1$, where $k$ is any scalar, the solution set doesn't change. This is because we are essentially adding a multiple of one valid equation to another valid equation. In matrix terms, this is replacing row $R_j$ with $R_j + k R_i$ ($R_j + k R_i \to R_j$).

These operations are the building blocks of Gaussian elimination, allowing us to systematically transform the augmented matrix.

### The Goal: Row Echelon Form

Our objective is to use these row operations to transform the augmented matrix into **row echelon form**. A matrix is in row echelon form if:

*   All rows consisting entirely of zeros are at the bottom of the matrix.
*   For each non-zero row, the first non-zero entry (called the **leading entry** or **pivot**) is 1.
*   Each leading entry is in a column to the right of the leading entry in the row above it.
*   (Optional, but useful for *reduced* row echelon form) Every column that contains a leading entry (a pivot) has zeros everywhere else.

When we achieve row echelon form, solving the system becomes remarkably straightforward, like reading the answers off a simplified report.

Let's illustrate with an example. Suppose we have the following system:

$x + 2y + z = 3$
$2x - y + 3z = 5$
$3x + y + 4z = 8$

The augmented matrix is:

$$
\begin{bmatrix}
1 & 2 & 1 & | & 3 \\
2 & -1 & 3 & | & 5 \\
3 & 1 & 4 & | & 8
\end{bmatrix}
$$

Now, let's apply Gaussian elimination to reach row echelon form.

**Step 1: Get a zero in the first column, below the leading 1.**

We want to eliminate the '2' in the second row, first column, and the '3' in the third row, first column. We can do this using operation 3:

*   Replace $R_2$ with $R_2 - 2R_1$:
    $R_2: [2 \ -1 \ 3 \ | \ 5]$
    $-2R_1: [-2 \ -4 \ -2 \ | \ -6]$
    New $R_2: [0 \ -5 \ 1 \ | \ -1]$

*   Replace $R_3$ with $R_3 - 3R_1$:
    $R_3: [3 \ 1 \ 4 \ | \ 8]$
    $-3R_1: [-3 \ -6 \ -3 \ | \ -9]$
    New $R_3: [0 \ -5 \ 1 \ | \ -1]$

Our matrix now looks like this:

$$
\begin{bmatrix}
1 & 2 & 1 & | & 3 \\
0 & -5 & 1 & | & -1 \\
0 & -5 & 1 & | & -1
\end{bmatrix}
$$

Notice something interesting here? The last two rows are identical! This often happens and tells us something important about the system.

**Step 2: Get a zero in the second column, below the leading entry of the second row.**

The leading entry of the second row is -5. We want to make the entry below it (in $R_3, C_2$) zero.

*   Replace $R_3$ with $R_3 - R_2$:
    $R_3: [0 \ -5 \ 1 \ | \ -1]$
    $-R_2: [0 \ 5 \ -1 \ | \ 1]$
    New $R_3: [0 \ 0 \ 0 \ | \ 0]$

The matrix is now:

$$
\begin{bmatrix}
1 & 2 & 1 & | & 3 \\
0 & -5 & 1 & | & -1 \\
0 & 0 & 0 & | & 0
\end{bmatrix}
$$

This matrix is in **row echelon form**. The third row being all zeros means that the third equation was actually redundant; it didn't provide any new information. It was a linear combination of the first two. This is a common occurrence in real-world problems and is a signal that our system might have infinite solutions or no solutions.

### Back-Substitution: Unveiling the Solution

Now, let's translate this matrix back into equations:

1.  $x + 2y + z = 3$
2.  $-5y + z = -1$
3.  $0 = 0$ (This equation is always true, so it doesn't constrain our variables).

The last row of zeros is a sign that we have **dependent equations**. When we have fewer non-zero rows than variables after elimination, we have an infinite number of solutions.

To express these infinite solutions, we need to introduce **parameters**. We usually assign parameters to the variables corresponding to columns *without* pivots. In our case, the pivots are in column 1 (for $x$) and column 2 (for $y$). The variable $z$ corresponds to a column without a pivot. So, we let $z$ be our parameter.

Let $z = t$, where $t$ can be any real number.

Now, we use **back-substitution** starting from the second-to-last non-zero equation:

From equation 2: $-5y + z = -1$
Substitute $z = t$: $-5y + t = -1$
Solve for $y$: $-5y = -1 - t \implies y = \frac{1+t}{5}$

Now substitute the expressions for $y$ and $z$ into the first equation:

From equation 1: $x + 2y + z = 3$
Substitute $y = \frac{1+t}{5}$ and $z = t$: $x + 2\left(\frac{1+t}{5}\right) + t = 3$
$x + \frac{2+2t}{5} + t = 3$
$x + \frac{2}{5} + \frac{2t}{5} + \frac{5t}{5} = 3$
$x + \frac{2}{5} + \frac{7t}{5} = 3$
$x = 3 - \frac{2}{5} - \frac{7t}{5}$
$x = \frac{15}{5} - \frac{2}{5} - \frac{7t}{5}$
$x = \frac{13 - 7t}{5}$

So, the general solution is:
$x = \frac{13 - 7t}{5}$
$y = \frac{1 + t}{5}$
$z = t$

where $t$ is any real number.

This is a beautiful illustration of how Gaussian elimination, coupled with back-substitution, can systematically reveal the nature of solutions – whether they are unique, infinite, or nonexistent. This is a critical skill for **CO1**.

### What if there are no solutions?

What happens if we get a row that looks like $[0 \ 0 \ \dots \ 0 \ | \ c]$ where $c \neq 0$? This translates to the equation $0x_1 + 0x_2 + \dots + 0x_n = c$, which simplifies to $0 = c$. Since $c \neq 0$, this equation is a contradiction. It means that no values of $x_1, \dots, x_n$ can satisfy this condition, and therefore, the entire system has **no solution**.

This is like trying to solve a puzzle where two pieces are supposed to fit perfectly, but they have incompatible shapes. No matter how you twist and turn them, they just won't go together.

Consider this example:

$x + y = 2$
$x + y = 3$

Augmented matrix:

$$
\begin{bmatrix}
1 & 1 & | & 2 \\
1 & 1 & | & 3
\end{bmatrix}
$$

Perform $R_2 \to R_2 - R_1$:

$$
\begin{bmatrix}
1 & 1 & | & 2 \\
0 & 0 & | & 1
\end{bmatrix}
$$

The second row, $0x + 0y = 1$, means $0 = 1$, which is impossible. Thus, this system has no solution. This is an important case to recognize!

### The "Cleanest" Form: Reduced Row Echelon Form (Gauss-Jordan Elimination)

While row echelon form is sufficient for back-substitution, sometimes we aim for an even "cleaner" form called **reduced row echelon form** (RREF). This is achieved through an extension of Gaussian elimination, often called **Gauss-Jordan elimination**.

In addition to the conditions for row echelon form, RREF requires:
*   Each leading entry (pivot) is 1. (This is already part of our row echelon form goal, usually achieved by dividing rows by the pivot value).
*   Each column containing a leading entry has zeros *everywhere else*, both above and below the pivot.

Let's go back to our first example's row echelon form:

$$
\begin{bmatrix}
1 & 2 & 1 & | & 3 \\
0 & -5 & 1 & | & -1 \\
0 & 0 & 0 & | & 0
\end{bmatrix}
$$

To get to RREF:

**Step 3: Make pivots equal to 1.**

*   Divide $R_2$ by -5: $R_2 \to \frac{1}{-5}R_2$
    New $R_2$: $[0 \ 1 \ -\frac{1}{5} \ | \ \frac{1}{5}]$

The matrix becomes:

$$
\begin{bmatrix}
1 & 2 & 1 & | & 3 \\
0 & 1 & -1/5 & | & 1/5 \\
0 & 0 & 0 & | & 0
\end{bmatrix}
$$

**Step 4: Create zeros above the pivots.**

We already have a pivot of 1 in $R_2, C_2$. We need to make the '2' in $R_1, C_2$ zero.

*   Replace $R_1$ with $R_1 - 2R_2$:
    $R_1: [1 \ 2 \ 1 \ | \ 3]$
    $-2R_2: [0 \ -2 \ 2/5 \ | \ -2/5]$
    New $R_1: [1 \ 0 \ 1 + 2/5 \ | \ 3 - 2/5]$
    New $R_1: [1 \ 0 \ 7/5 \ | \ 13/5]$

The matrix in reduced row echelon form is:

$$
\begin{bmatrix}
1 & 0 & 7/5 & | & 13/5 \\
0 & 1 & -1/5 & | & 1/5 \\
0 & 0 & 0 & | & 0
\end{bmatrix}
$$

Translating this back to equations:

$x + \frac{7}{5}z = \frac{13}{5}$
$y - \frac{1}{5}z = \frac{1}{5}$
$0 = 0$

Again, letting $z = t$:

$x = \frac{13}{5} - \frac{7}{5}t = \frac{13-7t}{5}$
$y = \frac{1}{5} + \frac{1}{5}t = \frac{1+t}{5}$

This is the same solution we found with back-substitution, but the RREF form makes it even more direct: the solution for each pivot variable ($x, y$) is immediately apparent in terms of the free variable ($z$).

Gauss-Jordan elimination is often preferred for its directness in presenting the solution, and it's a powerful technique for understanding the structure of linear systems. Both Gaussian elimination with back-substitution and Gauss-Jordan elimination are valid methods to solve systems, and understanding both gives you a broader perspective.

### Connection to Course Outcomes

*   **CO1: Solve systems of linear equations and diagonalize matrices.**
    *   Today's focus is squarely on the first part: **solving systems of linear equations**. Gaussian elimination and Gauss-Jordan elimination are the primary algorithmic methods taught for this. The ability to transform a system into row echelon form and interpret the result (unique solution, infinite solutions, no solution) is the essence of this outcome.
    *   Understanding these methods also lays the groundwork for more advanced topics in linear algebra, such as finding the rank of a matrix, determining linear independence, and eventually, matrix diagonalization. The operations we perform are intrinsically linked to matrix properties.

### Why is this important in Science and Engineering?

Let's make this concrete.

*   **Electrical Circuits:** As mentioned, Kirchhoff's laws lead to systems of linear equations. If you have a circuit with multiple loops or nodes, solving for the unknown currents or voltages is often achieved using Gaussian elimination. Imagine designing a power grid or a complex electronic device; you need to predict how current will flow under various conditions. This method allows engineers to do just that.
*   **Structural Engineering:** Analyzing the forces and stresses in a bridge or building involves setting up equations based on equilibrium principles. The interaction between different structural elements creates a system of linear equations that must be solved to ensure stability.
*   **Data Analysis and Machine Learning:** In modern data science, linear regression and many machine learning algorithms rely heavily on solving large systems of linear equations. Gaussian elimination is a fundamental tool in fitting models to data and understanding relationships between variables.
*   **System of Differential Equations:** While we’ll cover differential equations later in the course, many methods for solving systems of ODEs involve transforming them into algebraic eigenvalue problems or solving related linear systems.

In essence, whenever you have multiple interdependent quantities in a physical system, and their relationships are linear, Gaussian elimination is your go-to method. It's not just a mathematical technique; it's a powerful problem-solving tool across disciplines.

### Common Pitfalls and Tips

*   **Arithmetic Errors:** The most common mistake! Be meticulous with your calculations, especially with fractions and signs. Using a calculator for arithmetic steps is perfectly fine, but ensure you understand *which* operations you're performing.
*   **Confusing Rows and Columns:** Always remember that row operations affect entire rows.
*   **Incorrectly Identifying Free Variables:** Remember that free variables correspond to columns *without* pivots.
*   **Misinterpreting the Results:** A row of zeros in the coefficient part means dependency. A row like $[0 \ 0 \ | \ c]$ with $c \neq 0$ means no solution.
*   **Forward vs. Backward Elimination:** Gaussian elimination traditionally refers to achieving row echelon form (forward elimination), followed by back-substitution. Gauss-Jordan elimination includes the additional steps to reach reduced row echelon form. Both are valid.

**Remember this:** The goal is to systematically simplify the system by creating zeros in specific positions using the elementary row operations. Each step should bring you closer to a form where the solution is obvious.

### Summary of the Process

1.  **Form the augmented matrix** from the system of linear equations.
2.  Use **elementary row operations** to transform the matrix into **row echelon form**.
    *   Make entries below pivots zero.
    *   (For RREF) Make entries above pivots zero and ensure pivots are 1.
3.  **Interpret the resulting matrix:**
    *   If you get a row $[0 \ 0 \ \dots \ 0 \ | \ c]$ with $c \neq 0$, there is **no solution**.
    *   If there are fewer non-zero rows than variables, and no contradiction, there are **infinitely many solutions**. Introduce parameters for the free variables.
    *   If there are as many non-zero rows as variables, and no contradiction, there is a **unique solution**.
4.  If in row echelon form, use **back-substitution** to find the solution. If in reduced row echelon form, the solution is often directly readable.

Gaussian elimination is an algorithm, a step-by-step procedure, designed to solve linear systems. It's robust and systematic, making it ideal for both manual calculation and computer implementation.

---

### Sample Questions and Answers

**1. Conceptual Question:**

**Question:** What is the fundamental principle that allows us to use elementary row operations to solve systems of linear equations without changing the solution set?

**Answer:** The fundamental principle is that each elementary row operation is equivalent to a valid algebraic manipulation of the original system of equations.
*   Swapping two rows is like reordering the equations, which doesn't affect the conditions they impose on the variables.
*   Multiplying a row by a non-zero scalar is like multiplying both sides of an equation by the same non-zero number, which is a valid algebraic step that preserves equality.
*   Adding a multiple of one row to another row is like adding a multiple of one equation to another equation. For example, if we have $E_1$ and $E_2$, replacing $E_2$ with $E_2 + kE_1$ is valid because if $E_1$ and $E_2$ are true, then $E_2 + kE_1$ must also be true.
These operations ensure that the set of all $(x_1, \dots, x_n)$ that satisfy all equations remains unchanged throughout the process.

**2. Application Question:**

**Question:** Solve the following system of linear equations using Gaussian elimination and state the nature of the solution:
$x - 2y + z = 0$
$2x + y - z = 3$
$x + 3y - 2z = 3$

**Answer:**

**Step 1: Form the augmented matrix.**
$$
\begin{bmatrix}
1 & -2 & 1 & | & 0 \\
2 & 1 & -1 & | & 3 \\
1 & 3 & -2 & | & 3
\end{bmatrix}
$$

**Step 2: Perform Gaussian elimination to achieve row echelon form.**

*   $R_2 \to R_2 - 2R_1$:
    $R_2: [2 \ 1 \ -1 \ | \ 3]$
    $-2R_1: [-2 \ 4 \ -2 \ | \ 0]$
    New $R_2: [0 \ 5 \ -3 \ | \ 3]$

*   $R_3 \to R_3 - R_1$:
    $R_3: [1 \ 3 \ -2 \ | \ 3]$
    $-R_1: [-1 \ 2 \ -1 \ | \ 0]$
    New $R_3: [0 \ 5 \ -3 \ | \ 3]$

The matrix is now:
$$
\begin{bmatrix}
1 & -2 & 1 & | & 0 \\
0 & 5 & -3 & | & 3 \\
0 & 5 & -3 & | & 3
\end{bmatrix}
$$

*   $R_3 \to R_3 - R_2$:
    $R_3: [0 \ 5 \ -3 \ | \ 3]$
    $-R_2: [0 \ -5 \ 3 \ | \ -3]$
    New $R_3: [0 \ 0 \ 0 \ | \ 0]$

The matrix in row echelon form is:
$$
\begin{bmatrix}
1 & -2 & 1 & | & 0 \\
0 & 5 & -3 & | & 3 \\
0 & 0 & 0 & | & 0
\end{bmatrix}
$$

**Step 3: Interpret the result.**
The last row is $[0 \ 0 \ 0 \ | \ 0]$, which means $0 = 0$. This indicates that the equations are dependent and there are **infinitely many solutions**. The pivots are in columns 1 and 2, so $z$ is the free variable.

**Step 4: Back-substitution.**

Let $z = t$, where $t$ is any real number.

From the second row: $5y - 3z = 3$
$5y - 3t = 3$
$5y = 3 + 3t$
$y = \frac{3 + 3t}{5}$

From the first row: $x - 2y + z = 0$
$x - 2\left(\frac{3 + 3t}{5}\right) + t = 0$
$x - \frac{6 + 6t}{5} + t = 0$
$x = \frac{6 + 6t}{5} - t$
$x = \frac{6 + 6t - 5t}{5}$
$x = \frac{6 + t}{5}$

**Solution:** The system has infinitely many solutions given by:
$x = \frac{6+t}{5}$, $y = \frac{3+3t}{5}$, $z = t$, for any real number $t$.

**3. Identification Question:**

**Question:** Consider the augmented matrix obtained after applying Gaussian elimination to a system of linear equations:
$$
\begin{bmatrix}
1 & 2 & 0 & | & 4 \\
0 & 0 & 1 & | & 2 \\
0 & 0 & 0 & | & 1
\end{bmatrix}
$$
Does this system have a solution? If so, what kind? Explain your reasoning.

**Answer:**
No, this system does not have a solution. The reason is the third row of the augmented matrix, which corresponds to the equation $0x + 0y + 0z = 1$, or simply $0 = 1$. This is a contradiction, meaning there are no values of $x$, $y$, and $z$ that can satisfy all the equations simultaneously. This indicates that the original system of equations is inconsistent.
