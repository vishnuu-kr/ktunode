---
title: "Examples as subspaces of Rn and Mmxn"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 2"
module: "Module 2: Vector Spaces"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6e58474a0b135b5d12"
status: "completed"
scrapedAt: "2026-05-20T16:34:35.154Z"
---
## MATHEMATICS FOR INFORMATION SCIENCE – 2

**Module 2: Vector Spaces**

### Topic: Examples as Subspaces of $\mathbb{R}^n$ and $M_{m \times n}$

Welcome, everyone! Today, we're diving deeper into the fascinating world of vector spaces, specifically focusing on how familiar mathematical structures can be viewed as *subspaces*. This is a really crucial concept, as it allows us to leverage all the powerful tools we develop for general vector spaces and apply them to more concrete and practical settings like the spaces of vectors and matrices you'll encounter constantly in information science.

Our main goal today is to understand what a subspace is and then to look at concrete examples of these subspaces within $\mathbb{R}^n$ (the familiar space of n-dimensional real vectors) and $M_{m \times n}$ (the space of $m \times n$ real matrices). This directly ties into **CO2: Understand the concepts of vector spaces and subspaces and to apply their properties.** By the end of this session, you'll be able to identify and work with these subspaces, which is fundamental for solving systems of linear equations, understanding linear transformations, and so much more – all core to our course outcomes.

### What Exactly is a Subspace? Let's Get Our Definitions Straight.

Before we jump into examples, let's solidify our understanding of what makes a subset of a vector space a *subspace*. Think of it like this: a vector space is a large playground with all sorts of rules about how you can move around and combine elements (vectors). A subspace is a smaller, enclosed area within that playground that has its *own* set of rules, but crucially, these rules are entirely consistent with the rules of the larger playground.

Formally, a subset $W$ of a vector space $V$ is a subspace of $V$ if and only if $W$ itself is a vector space under the same operations of vector addition and scalar multiplication as defined in $V$.

Now, checking *all* the vector space axioms for every subset can be tedious. Thankfully, there's a much more efficient way to verify if a subset is a subspace. The key insight, beautifully laid out in textbooks like Kreyszig's "Advanced Engineering Mathematics," is that a non-empty subset $W$ of a vector space $V$ is a subspace if and only if it satisfies the **Subspace Test**:

1.  **Non-empty:** $W$ must contain at least one element. The most fundamental element in any vector space that we often check is the **zero vector**. If the zero vector of $V$ is in $W$, then $W$ is definitely non-empty.
2.  **Closure under Addition:** If you take any two vectors $\mathbf{u}$ and $\mathbf{v}$ that are *both* in $W$, then their sum, $\mathbf{u} + \mathbf{v}$, must *also* be in $W$.
3.  **Closure under Scalar Multiplication:** If you take any vector $\mathbf{u}$ in $W$ and any scalar $c$ (a real number in our context), then the product $c\mathbf{u}$ must *also* be in $W$.

If a subset passes these three simple checks, then it automatically inherits all the other vector space properties from the larger space $V$. This is a huge simplification, and it's something you absolutely need to remember for exams.

**Remember this:** The zero vector *must* be in any subspace. If you find a subset that doesn't contain the zero vector, you can immediately dismiss it as a subspace.

### Subspaces of $\mathbb{R}^n$: Visualizing the Abstract

Let's start with $\mathbb{R}^n$. This is the space we're most familiar with. $\mathbb{R}^2$ is our familiar 2D plane, and $\mathbb{R}^3$ is our 3D space. We can represent vectors in these spaces as lists of numbers:

*   In $\mathbb{R}^2$, a vector is of the form $\begin{pmatrix} x \\ y \end{pmatrix}$.
*   In $\mathbb{R}^3$, a vector is of the form $\begin{pmatrix} x \\ y \\ z \end{pmatrix}$.

And generally, in $\mathbb{R}^n$, a vector is $\mathbf{v} = \begin{pmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{pmatrix}$.

The operations are the usual component-wise addition and scalar multiplication.

#### Example 1: Lines through the Origin in $\mathbb{R}^2$

Imagine the 2D plane, $\mathbb{R}^2$. What are some "smaller" spaces within it that follow the rules of vector addition and scalar multiplication?

Consider a line passing through the origin $(0,0)$. Let's say this line is defined by the equation $y = mx$. Can we represent any point on this line as a vector? Yes, a point $(x, y)$ on the line corresponds to the vector $\mathbf{v} = \begin{pmatrix} x \\ y \end{pmatrix}$.

Now, let's check if this set of vectors (all vectors lying on the line $y=mx$) forms a subspace of $\mathbb{R}^2$. Let $W$ be the set of all vectors on this line.

1.  **Non-empty?** The origin $(0,0)$ is on the line $y=mx$ (since $0 = m \cdot 0$). The zero vector in $\mathbb{R}^2$ is $\begin{pmatrix} 0 \\ 0 \end{pmatrix}$. So, $\begin{pmatrix} 0 \\ 0 \end{pmatrix} \in W$. $W$ is non-empty.

2.  **Closure under Addition?** Let $\mathbf{u} = \begin{pmatrix} x_1 \\ y_1 \end{pmatrix}$ and $\mathbf{v} = \begin{pmatrix} x_2 \\ y_2 \end{pmatrix}$ be two vectors in $W$. This means $y_1 = mx_1$ and $y_2 = mx_2$.
    Their sum is $\mathbf{u} + \mathbf{v} = \begin{pmatrix} x_1 + x_2 \\ y_1 + y_2 \end{pmatrix}$.
    Now, let's check if the second component is $m$ times the first component:
    $y_1 + y_2 = mx_1 + mx_2 = m(x_1 + x_2)$.
    Yes, it is! So, $\mathbf{u} + \mathbf{v}$ is also on the line $y=mx$, meaning $\mathbf{u} + \mathbf{v} \in W$.

3.  **Closure under Scalar Multiplication?** Let $\mathbf{u} = \begin{pmatrix} x_1 \\ y_1 \end{pmatrix} \in W$ and let $c$ be any scalar. This means $y_1 = mx_1$.
    The scalar product is $c\mathbf{u} = \begin{pmatrix} cx_1 \\ cy_1 \end{pmatrix}$.
    Let's check the components:
    $cy_1 = c(mx_1) = m(cx_1)$.
    Again, yes! The second component is $m$ times the first component. So, $c\mathbf{u} \in W$.

Since $W$ satisfies all three conditions, the set of all vectors lying on a line through the origin in $\mathbb{R}^2$ is indeed a subspace of $\mathbb{R}^2$.

**Think of it this way:** If you have two arrows on a line through the center of a dartboard, adding them tip-to-tail will still result in an arrow on that same line. And if you stretch or shrink any arrow on that line (multiply by a scalar), it stays on that line. This geometric intuition is key!

This concept of lines through the origin being subspaces directly helps in understanding **CO2**. When we talk about the solution set of a homogeneous system of linear equations $A\mathbf{x} = \mathbf{0}$, that solution set is always a subspace. If these equations represent lines or planes through the origin, we're already dealing with subspaces.

#### Example 2: Planes through the Origin in $\mathbb{R}^3$

Extending this idea to $\mathbb{R}^3$, any plane that passes through the origin $(0,0,0)$ is a subspace of $\mathbb{R}^3$. A plane through the origin can be described by an equation of the form $ax + by + cz = 0$.

Let $W$ be the set of all vectors $\mathbf{v} = \begin{pmatrix} x \\ y \\ z \end{pmatrix}$ such that $ax + by + cz = 0$.

1.  **Non-empty?** The origin $\begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$ clearly satisfies $a(0) + b(0) + c(0) = 0$. So, the zero vector is in $W$.

2.  **Closure under Addition?** Let $\mathbf{u} = \begin{pmatrix} x_1 \\ y_1 \\ z_1 \end{pmatrix}$ and $\mathbf{v} = \begin{pmatrix} x_2 \\ y_2 \\ z_2 \end{pmatrix}$ be in $W$. This means:
    $ax_1 + by_1 + cz_1 = 0$
    $ax_2 + by_2 + cz_2 = 0$
    Their sum is $\mathbf{u} + \mathbf{v} = \begin{pmatrix} x_1 + x_2 \\ y_1 + y_2 \\ z_1 + z_2 \end{pmatrix}$.
    Let's check if it satisfies the plane equation:
    $a(x_1 + x_2) + b(y_1 + y_2) + c(z_1 + z_2) = (ax_1 + by_1 + cz_1) + (ax_2 + by_2 + cz_2) = 0 + 0 = 0$.
    So, $\mathbf{u} + \mathbf{v} \in W$.

3.  **Closure under Scalar Multiplication?** Let $\mathbf{u} = \begin{pmatrix} x_1 \\ y_1 \\ z_1 \end{pmatrix} \in W$ and $c$ be a scalar. So, $ax_1 + by_1 + cz_1 = 0$.
    $c\mathbf{u} = \begin{pmatrix} cx_1 \\ cy_1 \\ cz_1 \end{pmatrix}$.
    Check the equation:
    $a(cx_1) + b(cy_1) + c(cz_1) = c(ax_1 + by_1 + cz_1) = c(0) = 0$.
    So, $c\mathbf{u} \in W$.

Thus, planes through the origin in $\mathbb{R}^3$ are subspaces.

**What about lines NOT through the origin?** If you have a line like $y = mx + b$ where $b \neq 0$, does it contain the zero vector $\begin{pmatrix} 0 \\ 0 \end{pmatrix}$? No, because $0 \neq m(0) + b$. So, any line or plane that *doesn't* pass through the origin cannot be a subspace. This is a critical takeaway.

#### Example 3: The Trivial Subspaces

Every vector space $V$ has at least two "obvious" subspaces:

1.  **The zero subspace:** This is the set containing only the zero vector: $W = \{\mathbf{0}\}$. Let's check:
    *   Non-empty? Yes, it contains $\mathbf{0}$.
    *   Closure under Addition? $\mathbf{0} + \mathbf{0} = \mathbf{0}$, which is in $W$.
    *   Closure under Scalar Multiplication? $c\mathbf{0} = \mathbf{0}$, which is in $W$.
    So, $\{\mathbf{0}\}$ is always a subspace.

2.  **The space itself:** $W = V$. If $W$ is the entire vector space $V$, it trivially satisfies the subspace conditions because $V$ is already a vector space.

These are called the **trivial subspaces**. Any other subspace is called a **non-trivial subspace**.

#### Example 4: Spaces of Solutions to Homogeneous Systems of Linear Equations

This is where the connection to **CO1: Solve system of linear equations...** becomes very strong. Consider a homogeneous system of linear equations $A\mathbf{x} = \mathbf{0}$, where $A$ is an $m \times n$ matrix and $\mathbf{x}$ is a vector in $\mathbb{R}^n$.

Let $W$ be the set of all solutions $\mathbf{x}$ to $A\mathbf{x} = \mathbf{0}$. Is $W$ a subspace of $\mathbb{R}^n$?

1.  **Non-empty?** For any homogeneous system $A\mathbf{x} = \mathbf{0}$, the **trivial solution** $\mathbf{x} = \mathbf{0}$ is always a solution because $A\mathbf{0} = \mathbf{0}$. So, $\mathbf{0} \in W$.

2.  **Closure under Addition?** Let $\mathbf{u}$ and $\mathbf{v}$ be solutions to $A\mathbf{x} = \mathbf{0}$. This means $A\mathbf{u} = \mathbf{0}$ and $A\mathbf{v} = \mathbf{0}$.
    Consider their sum $\mathbf{u} + \mathbf{v}$. Let's see if it's a solution:
    $A(\mathbf{u} + \mathbf{v}) = A\mathbf{u} + A\mathbf{v}$ (by the distributive property of matrix multiplication)
    $A(\mathbf{u} + \mathbf{v}) = \mathbf{0} + \mathbf{0} = \mathbf{0}$.
    So, $\mathbf{u} + \mathbf{v}$ is also a solution, meaning $\mathbf{u} + \mathbf{v} \in W$.

3.  **Closure under Scalar Multiplication?** Let $\mathbf{u}$ be a solution to $A\mathbf{x} = \mathbf{0}$, so $A\mathbf{u} = \mathbf{0}$. Let $c$ be any scalar.
    Consider $c\mathbf{u}$. Let's check if it's a solution:
    $A(c\mathbf{u}) = c(A\mathbf{u})$ (by the property of scalar multiplication with matrices)
    $A(c\mathbf{u}) = c(\mathbf{0}) = \mathbf{0}$.
    So, $c\mathbf{u}$ is also a solution, meaning $c\mathbf{u} \in W$.

Therefore, the set of all solutions to a homogeneous system of linear equations $A\mathbf{x} = \mathbf{0}$ is always a subspace of $\mathbb{R}^n$. This subspace is famously known as the **null space** or **kernel** of the matrix $A$. Understanding the null space is crucial for solving systems of equations, determining the rank and nullity of a matrix, and understanding linear transformations (connecting to **CO1** and **CO4**).

**Exam Tip:** If asked to show that a set of vectors is a subspace, always start by checking if the zero vector is in the set. If not, it's not a subspace. Then, proceed with the closure properties.

### Subspaces of $M_{m \times n}$: Matrices with Structure

Now, let's move to $M_{m \times n}$, the vector space of all $m \times n$ matrices with real entries. Think of this as a big "container" holding all possible rectangular arrays of numbers. Addition of matrices is element-wise, and scalar multiplication is multiplying every element by the scalar.

#### Example 5: The Set of $m \times n$ Diagonal Matrices

A diagonal matrix is a square matrix (so $m=n$) where all the entries outside the main diagonal are zero. For example, in $M_{3 \times 3}$:
$\begin{pmatrix} a & 0 & 0 \\ 0 & b & 0 \\ 0 & 0 & c \end{pmatrix}$

Let $W$ be the set of all $n \times n$ diagonal matrices. Is $W$ a subspace of $M_{n \times n}$?

1.  **Non-empty?** The $n \times n$ zero matrix, where all entries are zero, is a diagonal matrix. So, the zero matrix of $M_{n \times n}$ is in $W$.

2.  **Closure under Addition?** Let $A$ and $B$ be two $n \times n$ diagonal matrices.
    $A = \begin{pmatrix} a_{11} & 0 & \cdots \\ 0 & a_{22} & \cdots \\ \vdots & \vdots & \ddots \end{pmatrix}$, $B = \begin{pmatrix} b_{11} & 0 & \cdots \\ 0 & b_{22} & \cdots \\ \vdots & \vdots & \ddots \end{pmatrix}$
    Their sum is $A+B$. The entry in row $i$, column $j$ of $A+B$ is $(A+B)_{ij} = A_{ij} + B_{ij}$.
    If $i \neq j$, then $A_{ij} = 0$ and $B_{ij} = 0$. So, $(A+B)_{ij} = 0 + 0 = 0$.
    This means $A+B$ is also a diagonal matrix. So, $A+B \in W$.

3.  **Closure under Scalar Multiplication?** Let $A$ be an $n \times n$ diagonal matrix and $c$ be a scalar.
    Consider $cA$. The entry in row $i$, column $j$ of $cA$ is $(cA)_{ij} = c \cdot A_{ij}$.
    If $i \neq j$, then $A_{ij} = 0$, so $(cA)_{ij} = c \cdot 0 = 0$.
    This means $cA$ is also a diagonal matrix. So, $cA \in W$.

Therefore, the set of all $n \times n$ diagonal matrices is a subspace of $M_{n \times n}$.

This relates to **CO2** by showing structured subsets within a larger matrix space are indeed subspaces.

#### Example 6: The Set of $m \times n$ Matrices with Zeroes in a Specific Row or Column

Let's consider $M_{2 \times 2}$ (2x2 matrices). What if we look at the set of matrices where the first row is all zeroes?
$W = \left\{ \begin{pmatrix} 0 & 0 \\ c & d \end{pmatrix} \mid c, d \in \mathbb{R} \right\}$

1.  **Non-empty?** The zero matrix $\begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$ is in $W$.

2.  **Closure under Addition?** Let $A = \begin{pmatrix} 0 & 0 \\ c_1 & d_1 \end{pmatrix}$ and $B = \begin{pmatrix} 0 & 0 \\ c_2 & d_2 \end{pmatrix}$ be in $W$.
    $A+B = \begin{pmatrix} 0 & 0 \\ c_1+c_2 & d_1+d_2 \end{pmatrix}$.
    The first row is still $\begin{pmatrix} 0 & 0 \end{pmatrix}$. So, $A+B \in W$.

3.  **Closure under Scalar Multiplication?** Let $A = \begin{pmatrix} 0 & 0 \\ c_1 & d_1 \end{pmatrix} \in W$ and $c$ be a scalar.
    $cA = \begin{pmatrix} c \cdot 0 & c \cdot 0 \\ c \cdot c_1 & c \cdot d_1 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ cc_1 & cd_1 \end{pmatrix}$.
    The first row is still $\begin{pmatrix} 0 & 0 \end{pmatrix}$. So, $cA \in W$.

Thus, the set of $2 \times 2$ matrices with the first row being all zeroes is a subspace of $M_{2 \times 2}$. This concept can be generalized to matrices with zeroes in any specific row or column, or even matrices satisfying specific linear relationships between their entries.

**Analogy:** Imagine a spreadsheet. If you're only interested in calculations involving rows that are entirely blank (analogous to our zero row), and you find that adding two such rows always results in a blank row, and scaling a blank row still leaves it blank, then the set of "blank rows" forms a subspace of the set of all possible rows.

#### Example 7: Symmetric Matrices

A square matrix $A$ is **symmetric** if $A^T = A$. This means the entry in row $i$, column $j$ is equal to the entry in row $j$, column $i$ for all $i, j$. For example, in $M_{3 \times 3}$:
$A = \begin{pmatrix} a & b & c \\ b & d & e \\ c & e & f \end{pmatrix}$

Let $W$ be the set of all $n \times n$ symmetric matrices. Is $W$ a subspace of $M_{n \times n}$?

1.  **Non-empty?** The $n \times n$ zero matrix is symmetric because its transpose is itself, and all its entries are zero. So, $\mathbf{0} \in W$.

2.  **Closure under Addition?** Let $A$ and $B$ be symmetric $n \times n$ matrices. So, $A^T = A$ and $B^T = B$.
    Consider their sum $A+B$. What is its transpose?
    $(A+B)^T = A^T + B^T$ (property of transpose)
    Since $A^T = A$ and $B^T = B$, we have $(A+B)^T = A + B$.
    This means $A+B$ is also a symmetric matrix. So, $A+B \in W$.

3.  **Closure under Scalar Multiplication?** Let $A$ be a symmetric $n \times n$ matrix, so $A^T = A$, and let $c$ be a scalar.
    Consider $cA$. What is its transpose?
    $(cA)^T = c A^T$ (property of transpose)
    Since $A^T = A$, we have $(cA)^T = c A$.
    This means $cA$ is also a symmetric matrix. So, $cA \in W$.

Therefore, the set of all $n \times n$ symmetric matrices is a subspace of $M_{n \times n}$.

This example is directly relevant to **CO2** and also connects to **CO3** if we were to consider inner products on these spaces. Symmetric matrices are fundamental in many areas, including optimization and differential equations.

#### Example 8: Matrices with a Specific Determinant (Not a Subspace!)

Let's try to trick ourselves a little. Consider the set of $2 \times 2$ matrices with a determinant of 1.
$W = \left\{ A \in M_{2 \times 2} \mid \det(A) = 1 \right\}$

Let's test the subspace properties:

1.  **Non-empty?** The identity matrix $I = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ has $\det(I) = 1$. So, $I \in W$. (Also, $\begin{pmatrix} -1 & 0 \\ 0 & -1 \end{pmatrix}$ works). The zero matrix $\begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$ has determinant 0, so it's not in $W$. *However*, just because the zero matrix isn't in $W$ doesn't automatically disqualify it from being a subspace IF it contains other elements that make it non-empty and satisfy the closure properties. But in this case, if the zero matrix isn't in $W$, it fails the first condition!

Let's assume for a moment it *did* contain the zero matrix (e.g., if we considered determinant 0, which *does* include the zero matrix). Even then, let's check closure under addition.

2.  **Closure under Addition?**
    Let $A = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ and $B = \begin{pmatrix} -1 & 0 \\ 0 & -1 \end{pmatrix}$. Both have determinant 1.
    $A+B = \begin{pmatrix} 1+(-1) & 0+0 \\ 0+0 & 1+(-1) \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$.
    The determinant of $A+B$ is 0, not 1. So $A+B \notin W$.

Since $W$ is not closed under addition, it is **not** a subspace of $M_{2 \times 2}$.

**Key takeaway:** Properties that involve products or determinants often do *not* preserve subspace structure. Subspace properties are very focused on linearity (addition and scalar multiplication). This is a common pitfall in exams!

### Connecting to Course Outcomes

Throughout these examples, we've seen direct links to our course outcomes:

*   **CO1 (Solving Systems, Eigenvalues, Diagonalization):** The null space of a matrix, being a subspace, is the set of all solutions to $A\mathbf{x} = \mathbf{0}$. Understanding subspaces is foundational for solving linear systems. Eigenvectors, when scaled, also form subspaces (lines through the origin containing the eigenvectors).
*   **CO2 (Vector Spaces and Subspaces):** This entire session is dedicated to this outcome. We've defined subspaces and demonstrated how various familiar sets of vectors and matrices satisfy these definitions. Being able to identify and verify subspaces is paramount.
*   **CO3 (Inner Product Spaces):** While we haven't explicitly used inner products here, many of the examples of subspaces (like the null space, spaces of symmetric matrices) are themselves important in the context of inner product spaces, where concepts like orthogonality become relevant.
*   **CO4 (Linear Transformations):** The kernel (null space) and the image (column space) of a linear transformation are always subspaces. Understanding subspaces of $\mathbb{R}^n$ and $M_{m \times n}$ is essential for understanding the fundamental properties of linear transformations.

### Summary and What to Remember

*   A **subspace** is a non-empty subset of a vector space that is itself a vector space under the same operations.
*   The **Subspace Test** is your best friend: a subset $W$ is a subspace of $V$ if it's non-empty, closed under addition, and closed under scalar multiplication.
*   The **zero vector** must always be in a subspace. If it's not, it's not a subspace.
*   In $\mathbb{R}^n$, **lines and planes passing through the origin** are subspaces. Lines and planes *not* through the origin are not.
*   The **solution set of a homogeneous system of linear equations** ($A\mathbf{x}=\mathbf{0}$) is always a subspace of $\mathbb{R}^n$ (the null space of $A$).
*   In $M_{m \times n}$, sets of matrices with specific structural properties, like **diagonal matrices**, **symmetric matrices**, or matrices with specific rows/columns being zero, can be subspaces, provided they satisfy the closure properties.
*   Properties related to **products, determinants, or absolute values** usually do *not* result in subspaces.

Mastering these concepts will provide a solid foundation for the rest of the course and your work in information science. Keep practicing identifying subspaces and applying the test!

***

### Sample Questions and Answers

Here are a few questions to test your understanding.

**Question 1 (Conceptual):**
Is the set of all $2 \times 2$ matrices with determinant equal to 0 a subspace of $M_{2 \times 2}$? Justify your answer.

**Answer 1:**
No, this set is not a subspace of $M_{2 \times 2}$.
Let $W = \{ A \in M_{2 \times 2} \mid \det(A) = 0 \}$.
1.  **Non-empty?** The zero matrix $\begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$ has a determinant of 0, so $\mathbf{0} \in W$. This condition is met.
2.  **Closure under Addition?** Let $A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$ and $B = \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$. Both $A$ and $B$ have a determinant of 0, so $A, B \in W$.
    However, $A+B = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$. The determinant of $A+B$ is $1 \times 1 - 0 \times 0 = 1$.
    Since $\det(A+B) = 1 \neq 0$, $A+B \notin W$.
    Therefore, $W$ is not closed under addition and is not a subspace.

**Question 2 (Application - $\mathbb{R}^n$):**
Let $W$ be the set of all vectors $\mathbf{x} = \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix}$ in $\mathbb{R}^3$ such that $x_1 - 2x_2 + x_3 = 0$. Show that $W$ is a subspace of $\mathbb{R}^3$.

**Answer 2:**
We need to check the three conditions of the subspace test for $W$.
1.  **Non-empty:** For $\mathbf{x} \in W$, we must have $x_1 - 2x_2 + x_3 = 0$. The zero vector is $\mathbf{0} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$. Substituting into the condition: $0 - 2(0) + 0 = 0$. The condition is satisfied. So, $\mathbf{0} \in W$, and $W$ is non-empty.

2.  **Closure under Addition:** Let $\mathbf{u} = \begin{pmatrix} u_1 \\ u_2 \\ u_3 \end{pmatrix}$ and $\mathbf{v} = \begin{pmatrix} v_1 \\ v_2 \\ v_3 \end{pmatrix}$ be two vectors in $W$.
    This means $u_1 - 2u_2 + u_3 = 0$ and $v_1 - 2v_2 + v_3 = 0$.
    Consider their sum $\mathbf{u} + \mathbf{v} = \begin{pmatrix} u_1 + v_1 \\ u_2 + v_2 \\ u_3 + v_3 \end{pmatrix}$.
    Let's check if the sum satisfies the condition:
    $(u_1 + v_1) - 2(u_2 + v_2) + (u_3 + v_3) = (u_1 - 2u_2 + u_3) + (v_1 - 2v_2 + v_3)$
    $= 0 + 0 = 0$.
    Since the condition is satisfied, $\mathbf{u} + \mathbf{v} \in W$. $W$ is closed under addition.

3.  **Closure under Scalar Multiplication:** Let $\mathbf{u} = \begin{pmatrix} u_1 \\ u_2 \\ u_3 \end{pmatrix}$ be a vector in $W$, so $u_1 - 2u_2 + u_3 = 0$. Let $c$ be any scalar.
    Consider the scalar multiple $c\mathbf{u} = \begin{pmatrix} cu_1 \\ cu_2 \\ cu_3 \end{pmatrix}$.
    Let's check if this satisfies the condition:
    $c(u_1) - 2(cu_2) + c(u_3) = c(u_1 - 2u_2 + u_3)$
    $= c(0) = 0$.
    Since the condition is satisfied, $c\mathbf{u} \in W$. $W$ is closed under scalar multiplication.

Since $W$ is non-empty, closed under addition, and closed under scalar multiplication, $W$ is a subspace of $\mathbb{R}^3$. (Note: This represents a plane through the origin, as discussed in the lecture).

**Question 3 (Application - $M_{m \times n}$):**
Let $W$ be the set of all $3 \times 3$ matrices $A$ such that the sum of the entries in each row is zero. Show that $W$ is a subspace of $M_{3 \times 3}$.

**Answer 3:**
We need to check the three conditions of the subspace test for $W$, where $A = (a_{ij})$ is a $3 \times 3$ matrix. The condition for $A \in W$ is:
$\sum_{j=1}^3 a_{ij} = 0$ for $i=1, 2, 3$.

1.  **Non-empty:** The $3 \times 3$ zero matrix has all entries as 0. The sum of entries in each row is 0. So, the zero matrix is in $W$. $W$ is non-empty.

2.  **Closure under Addition:** Let $A = (a_{ij})$ and $B = (b_{ij})$ be two matrices in $W$.
    This means $\sum_{j=1}^3 a_{ij} = 0$ for $i=1, 2, 3$, and $\sum_{j=1}^3 b_{ij} = 0$ for $i=1, 2, 3$.
    Consider the sum $C = A+B$. The entries of $C$ are $c_{ij} = a_{ij} + b_{ij}$.
    Let's check the sum of entries in row $i$ of $C$:
    $\sum_{j=1}^3 c_{ij} = \sum_{j=1}^3 (a_{ij} + b_{ij}) = \sum_{j=1}^3 a_{ij} + \sum_{j=1}^3 b_{ij}$
    $= 0 + 0 = 0$.
    This holds for $i=1, 2, 3$. So, $A+B \in W$. $W$ is closed under addition.

3.  **Closure under Scalar Multiplication:** Let $A = (a_{ij})$ be a matrix in $W$, so $\sum_{j=1}^3 a_{ij} = 0$ for $i=1, 2, 3$. Let $c$ be any scalar.
    Consider the scalar multiple $cA$. The entries of $cA$ are $(cA)_{ij} = c \cdot a_{ij}$.
    Let's check the sum of entries in row $i$ of $cA$:
    $\sum_{j=1}^3 (cA)_{ij} = \sum_{j=1}^3 (c \cdot a_{ij}) = c \sum_{j=1}^3 a_{ij}$
    $= c(0) = 0$.
    This holds for $i=1, 2, 3$. So, $cA \in W$. $W$ is closed under scalar multiplication.

Since $W$ is non-empty, closed under addition, and closed under scalar multiplication, $W$ is a subspace of $M_{3 \times 3}$.
