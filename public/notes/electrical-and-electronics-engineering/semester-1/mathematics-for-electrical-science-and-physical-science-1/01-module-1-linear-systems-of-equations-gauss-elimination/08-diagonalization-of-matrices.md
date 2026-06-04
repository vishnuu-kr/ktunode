---
title: "Diagonalization of matrices."
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL 
SCIENCE - 1"
module: "Module 1: Linear systems of equations: Gauss elimination"
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213e9ece2bdd875f94f7"
status: "completed"
scrapedAt: "2026-05-23T16:03:07.527Z"
---
# Mathematics for Electrical Science and Physical Science - 1

## Module 1: Linear Systems of Equations: Gauss Elimination

### Topic: Diagonalization of Matrices

Welcome, everyone! Today, we're diving into a really powerful concept in linear algebra that has significant implications in many areas of engineering and physics, especially when we talk about systems that evolve over time – that's **Diagonalization of Matrices**. This is a crucial skill, directly addressing **Course Outcome 1 (CO1): Solve systems of linear equations and diagonalize matrices**, and it's something you'll definitely need to master for your exams.

Think about it: many physical systems, like electrical circuits or mechanical vibrations, can be described by systems of differential equations. Often, these systems can be represented in matrix form. If we can "diagonalize" the matrix associated with the system, it simplifies our analysis immensely. We can essentially decouple the system into a set of simpler, independent first-order equations. This is where the magic of diagonalization comes in.

### What Exactly is a Diagonal Matrix?

Before we diagonalize, let's quickly remind ourselves what a diagonal matrix is. A **diagonal matrix** is a square matrix where all the elements outside the main diagonal (from the top-left to the bottom-right) are zero.

For example:

$$
D = \begin{pmatrix}
d_1 & 0 & 0 \\
0 & d_2 & 0 \\
0 & 0 & d_3
\end{pmatrix}
$$

The beauty of diagonal matrices is their simplicity. Multiplying a vector by a diagonal matrix is just a matter of scaling each component of the vector by the corresponding diagonal element. This makes them incredibly easy to work with, especially when it comes to powers of matrices or solving systems of differential equations.

### The Goal: Finding a Simpler Representation

So, diagonalization is the process of transforming a given square matrix, let's call it $A$, into a diagonal matrix $D$, using a special kind of transformation. Why would we want to do this? Because $D$ is much simpler to understand and manipulate than $A$. If we can find a way to represent $A$ in a simpler, diagonal form, it's like finding a more fundamental "language" to describe the system $A$ represents.

Think of it like this: Imagine you have a very complex musical instrument that produces a rich, layered sound. Diagonalization is like breaking down that complex sound into its fundamental pure tones (like the notes played by a single violin string). Each pure tone is much simpler, and by understanding them, we can understand the original complex sound better.

### The Transformation: Similarity Transformations

The specific way we achieve diagonalization is through what's called a **similarity transformation**. If we have a matrix $A$, and we find an invertible matrix $P$, then the matrix $D$ obtained by the transformation:

$$
D = P^{-1}AP
$$

is called **similar** to $A$. The crucial point is that similar matrices share many important properties, such as eigenvalues (which we'll get to very soon!) and their determinants.

Now, if this resulting matrix $D$ happens to be a diagonal matrix, then we say that matrix $A$ is **diagonalizable**, and $D$ is its diagonal form.

### The Key Ingredients: Eigenvalues and Eigenvectors

So, how do we find this magical matrix $P$ and the resulting diagonal matrix $D$? The answer lies in the **eigenvalues** and **eigenvectors** of the matrix $A$. This is where the concepts become deeply interconnected.

Let's recall from your studies on linear systems, or perhaps a quick look at Chapters 6 and 7 in Kreyszig's "Advanced Engineering Mathematics" or Chapter 5 in Anton and Rorres' "Elementary Linear Algebra", that for a square matrix $A$, an eigenvalue $\lambda$ and a non-zero vector $\mathbf{v}$ are related by the equation:

$$
A\mathbf{v} = \lambda\mathbf{v}
$$

What does this equation *mean* intuitively? It means that when you apply the transformation represented by matrix $A$ to the vector $\mathbf{v}$, the vector $\mathbf{v}$ doesn't change its direction; it only gets scaled by a factor $\lambda$. The vector $\mathbf{v}$ is stretched or shrunk (or flipped if $\lambda$ is negative), but it stays on the same line passing through the origin. We call $\mathbf{v}$ an **eigenvector** and $\lambda$ its corresponding **eigenvalue**.

### Connecting Eigenvalues, Eigenvectors, and Diagonalization

This is where the real power surfaces! If an $n \times n$ matrix $A$ has $n$ linearly independent eigenvectors, say $\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_n$, with corresponding eigenvalues $\lambda_1, \lambda_2, \dots, \lambda_n$, then we can construct our transformation matrix $P$.

We form $P$ by using the eigenvectors as its columns:

$$
P = \begin{pmatrix}
\mathbf{v}_1 & \mathbf{v}_2 & \dots & \mathbf{v}_n
\end{pmatrix}
$$

And guess what? The diagonal matrix $D$ we get from the similarity transformation $D = P^{-1}AP$ will have the eigenvalues on its diagonal, in the same order as their corresponding eigenvectors appear in $P$:

$$
D = \begin{pmatrix}
\lambda_1 & 0 & \dots & 0 \\
0 & \lambda_2 & \dots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \dots & \lambda_n
\end{pmatrix}
$$

Isn't that neat? The eigenvalues are the scaling factors, and the eigenvectors are the directions that are only scaled, not rotated or sheared. By arranging these special vectors and their corresponding scaling factors correctly, we can transform $A$ into its simplest diagonal form.

This directly relates to **CO1**, as finding eigenvalues and eigenvectors is a precursor to diagonalization, and diagonalization itself is a core part of the outcome.

### How to Find Eigenvalues and Eigenvectors

To perform diagonalization, we first need to find the eigenvalues and eigenvectors. Here's the standard procedure, often covered when you first learn about these concepts (refer to Anton and Rorres, Chapter 5.1, or Kreyszig, Chapter 7.1):

1.  **Find the Characteristic Equation:** Start with the definition $A\mathbf{v} = \lambda\mathbf{v}$. Rearranging, we get $A\mathbf{v} - \lambda\mathbf{v} = \mathbf{0}$, which can be written as $(A - \lambda I)\mathbf{v} = \mathbf{0}$, where $I$ is the identity matrix. For a non-trivial solution (i.e., $\mathbf{v} \neq \mathbf{0}$), the matrix $(A - \lambda I)$ must be singular. This means its determinant must be zero:
    $$
    \det(A - \lambda I) = 0
    $$
    This equation is called the **characteristic equation** of $A$.

2.  **Solve for Eigenvalues ($\lambda$):** Solving the characteristic equation will give you the eigenvalues $\lambda_1, \lambda_2, \dots, \lambda_n$. These are the roots of the polynomial formed by the determinant.

3.  **Find Eigenvectors ($\mathbf{v}$) for Each Eigenvalue:** For each distinct eigenvalue $\lambda_i$, substitute it back into the equation $(A - \lambda_i I)\mathbf{v} = \mathbf{0}$ and solve for the non-zero vector $\mathbf{v}$. This is essentially solving a system of linear equations, often using Gauss elimination or other methods you've already learned in this module!

    *   **Example:** If $(A - \lambda_i I)$ results in a matrix that, after row reduction, looks like $\begin{pmatrix} 1 & 2 & 0 \\ 0 & 0 & 0 \end{pmatrix}$, and the original matrix was $3 \times 3$, then one variable will be a free parameter. For instance, if $\mathbf{v} = \begin{pmatrix} v_1 \\ v_2 \\ v_3 \end{pmatrix}$, we might get $v_1 + 2v_2 = 0$. If we let $v_2 = t$, then $v_1 = -2t$. $v_3$ can be any value, say $s$. So, the eigenvectors are of the form $\begin{pmatrix} -2t \\ t \\ s \end{pmatrix} = t\begin{pmatrix} -2 \\ 1 \\ 0 \end{pmatrix} + s\begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}$. This means we have two linearly independent eigenvectors for this eigenvalue.

### The Condition for Diagonalization: Linearly Independent Eigenvectors

A crucial point to remember, and often a tricky exam question: **An $n \times n$ matrix $A$ is diagonalizable if and only if it has $n$ linearly independent eigenvectors.**

If you find fewer than $n$ linearly independent eigenvectors, the matrix is not diagonalizable. This can happen if eigenvalues have a multiplicity greater than 1, and the geometric multiplicity (the number of linearly independent eigenvectors for that eigenvalue) is less than its algebraic multiplicity (how many times the eigenvalue appears as a root of the characteristic equation).

Think of it like building a foundation. If you want to construct a stable, multifaceted structure (represented by matrix $A$), you need enough independent supporting pillars (eigenvectors) to hold it up in all necessary directions. If you don't have enough independent pillars, the structure will collapse or be unstable in some directions, meaning it cannot be reduced to a simple, stable diagonal form.

### Example Walkthrough: Diagonalizing a $2 \times 2$ Matrix

Let's take a practical example to solidify our understanding. Suppose we want to diagonalize the matrix:

$$
A = \begin{pmatrix}
4 & -2 \\
1 & 1
\end{pmatrix}
$$

**Step 1: Find the Characteristic Equation**

We need to calculate $\det(A - \lambda I)$:

$$
A - \lambda I = \begin{pmatrix}
4-\lambda & -2 \\
1 & 1-\lambda
\end{pmatrix}
$$

$$
\det(A - \lambda I) = (4-\lambda)(1-\lambda) - (-2)(1) = 4 - 4\lambda - \lambda + \lambda^2 + 2 = \lambda^2 - 5\lambda + 6
$$

So, the characteristic equation is $\lambda^2 - 5\lambda + 6 = 0$.

**Step 2: Solve for Eigenvalues**

Factoring the quadratic equation: $(\lambda - 2)(\lambda - 3) = 0$.
The eigenvalues are $\lambda_1 = 2$ and $\lambda_2 = 3$.
We have two distinct eigenvalues for a $2 \times 2$ matrix, so we expect to find two linearly independent eigenvectors. This means our matrix $A$ *is* diagonalizable.

**Step 3: Find Eigenvectors**

*   **For $\lambda_1 = 2$**:
    We solve $(A - 2I)\mathbf{v} = \mathbf{0}$:
    $$
    \begin{pmatrix}
    4-2 & -2 \\
    1 & 1-2
    \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix}
    2 & -2 \\
    1 & -1
    \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
    $$
    Both rows give us the same equation: $v_1 - v_2 = 0$, or $v_1 = v_2$.
    Let $v_2 = t$ (our free parameter). Then $v_1 = t$.
    The eigenvectors are of the form $\mathbf{v}_1 = \begin{pmatrix} t \\ t \end{pmatrix} = t\begin{pmatrix} 1 \\ 1 \end{pmatrix}$.
    We can choose a simple representative eigenvector, say $\mathbf{v}_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.

*   **For $\lambda_2 = 3$**:
    We solve $(A - 3I)\mathbf{v} = \mathbf{0}$:
    $$
    \begin{pmatrix}
    4-3 & -2 \\
    1 & 1-3
    \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix}
    1 & -2 \\
    1 & -2
    \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
    $$
    Both rows give us the same equation: $v_1 - 2v_2 = 0$, or $v_1 = 2v_2$.
    Let $v_2 = s$ (our free parameter). Then $v_1 = 2s$.
    The eigenvectors are of the form $\mathbf{v}_2 = \begin{pmatrix} 2s \\ s \end{pmatrix} = s\begin{pmatrix} 2 \\ 1 \end{pmatrix}$.
    We can choose a simple representative eigenvector, say $\mathbf{v}_2 = \begin{pmatrix} 2 \\ 1 \end{pmatrix}$.

**Step 4: Construct P and D**

We have found two linearly independent eigenvectors: $\mathbf{v}_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$ and $\mathbf{v}_2 = \begin{pmatrix} 2 \\ 1 \end{pmatrix}$.

Now, we construct the matrix $P$ using these eigenvectors as columns:
$$
P = \begin{pmatrix}
1 & 2 \\
1 & 1
\end{pmatrix}
$$

The corresponding diagonal matrix $D$ will have the eigenvalues on the diagonal, in the same order:
$$
D = \begin{pmatrix}
\lambda_1 & 0 \\
0 & \lambda_2
\end{pmatrix} = \begin{pmatrix}
2 & 0 \\
0 & 3
\end{pmatrix}
$$

**Step 5: Verify (Optional but Recommended)**

We should verify that $D = P^{-1}AP$. First, let's find $P^{-1}$. For a $2 \times 2$ matrix $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$, the inverse is $\frac{1}{ad-bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$.

For $P = \begin{pmatrix} 1 & 2 \\ 1 & 1 \end{pmatrix}$, $ad-bc = (1)(1) - (2)(1) = 1 - 2 = -1$.
So, $P^{-1} = \frac{1}{-1}\begin{pmatrix} 1 & -2 \\ -1 & 1 \end{pmatrix} = \begin{pmatrix} -1 & 2 \\ 1 & -1 \end{pmatrix}$.

Now, let's calculate $P^{-1}AP$:

$$
AP = \begin{pmatrix}
4 & -2 \\
1 & 1
\end{pmatrix} \begin{pmatrix}
1 & 2 \\
1 & 1
\end{pmatrix} = \begin{pmatrix}
(4)(1)+(-2)(1) & (4)(2)+(-2)(1) \\
(1)(1)+(1)(1) & (1)(2)+(1)(1)
\end{pmatrix} = \begin{pmatrix}
2 & 6 \\
2 & 3
\end{pmatrix}
$$

$$
P^{-1}(AP) = \begin{pmatrix}
-1 & 2 \\
1 & -1
\end{pmatrix} \begin{pmatrix}
2 & 6 \\
2 & 3
\end{pmatrix} = \begin{pmatrix}
(-1)(2)+(2)(2) & (-1)(6)+(2)(3) \\
(1)(2)+(-1)(2) & (1)(6)+(-1)(3)
\end{pmatrix} = \begin{pmatrix}
-2+4 & -6+6 \\
2-2 & 6-3
\end{pmatrix} = \begin{pmatrix}
2 & 0 \\
0 & 3
\end{pmatrix}
$$
And indeed, $P^{-1}AP = \begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix} = D$. Success!

### Why is Diagonalization Useful? Practical Applications

This process might seem like just an algebraic exercise, but its applications are profound, especially in fields covered by your course:

*   **Solving Systems of Linear Differential Equations (Related to CO2):** Consider a system $\mathbf{y}'(t) = A\mathbf{y}(t)$. If $A$ is diagonalizable with $A = PDP^{-1}$, then we can transform this system. Let $\mathbf{y} = P\mathbf{x}$. Then $\mathbf{y}' = P\mathbf{x}'$. Substituting into the equation:
    $P\mathbf{x}' = A(P\mathbf{x}) = (PDP^{-1})(P\mathbf{x}) = PD\mathbf{x}$.
    Multiplying by $P^{-1}$ on the left gives $\mathbf{x}' = D\mathbf{x}$.
    Since $D$ is diagonal, say $D = \text{diag}(\lambda_1, \dots, \lambda_n)$, the system becomes:
    $x_i'(t) = \lambda_i x_i(t)$ for each $i$.
    The solutions are $x_i(t) = c_i e^{\lambda_i t}$.
    Then, $\mathbf{y}(t) = P\mathbf{x}(t)$ gives the solution to the original system. This is a massive simplification! Instead of solving a coupled system, you solve $n$ independent scalar differential equations.

*   **Matrix Powers:** Calculating $A^k$ for a large integer $k$ can be computationally very expensive. However, if $A = PDP^{-1}$, then:
    $A^k = (PDP^{-1})(PDP^{-1})\dots(PDP^{-1}) = PD(P^{-1}P)D(P^{-1}P)\dots DP^{-1} = PD^kP^{-1}$.
    Calculating $D^k$ is trivial: if $D = \text{diag}(\lambda_1, \dots, \lambda_n)$, then $D^k = \text{diag}(\lambda_1^k, \dots, \lambda_n^k)$. This makes computing high powers of matrices very efficient. This is useful in discrete-time systems and Markov chains.

*   **Understanding System Dynamics:** The eigenvalues often represent growth/decay rates or frequencies in physical systems. For example, in mechanical vibrations, eigenvalues relate to the natural frequencies of oscillation. In electrical circuits (RLC circuits, for instance), eigenvalues determine the stability and behavior of the system (e.g., damping, oscillations). A positive real eigenvalue implies exponential growth, a negative real eigenvalue implies exponential decay, and complex eigenvalues with non-zero imaginary parts imply oscillations. This directly links to **CO2** and understanding differential equations.

*   **Principal Component Analysis (PCA) in Data Science/Physics:** In analyzing large datasets or experimental results, PCA uses eigenvectors of the covariance matrix to find the directions of maximum variance. This simplifies data by reducing dimensionality while retaining most of the important information. Eigenvectors are the directions of the principal components, and eigenvalues indicate the amount of variance along those directions.

### Common Pitfalls and Exam Focus

*   **Not having enough linearly independent eigenvectors:** Always check if you have $n$ linearly independent eigenvectors for an $n \times n$ matrix. If not, the matrix is not diagonalizable. This is a classic exam question: "Is this matrix diagonalizable? Justify your answer."
*   **Order of eigenvalues and eigenvectors:** When constructing $P$ and $D$, ensure the $i$-th column of $P$ is the eigenvector corresponding to the $i$-th eigenvalue on the diagonal of $D$. Mixing them up will lead to an incorrect $D$.
*   **Calculating $P^{-1}$:** Be careful with matrix inversion, especially for $2 \times 2$ matrices. A small arithmetic error here can mess up the entire verification.
*   **Finding eigenvectors:** Remember that eigenvectors are not unique; any non-zero scalar multiple of an eigenvector is also an eigenvector. Choose the simplest form (e.g., with integers). When solving $(A - \lambda I)\mathbf{v} = \mathbf{0}$, you'll often find that the rows of $(A - \lambda I)$ are linearly dependent (that's why the determinant is zero!), so you only need to use one of the resulting equations to find the relationship between the components of $\mathbf{v}$.

### Summary of the Diagonalization Process

To diagonalize an $n \times n$ matrix $A$:

1.  Find the eigenvalues $\lambda_1, \dots, \lambda_n$ by solving $\det(A - \lambda I) = 0$.
2.  For each eigenvalue $\lambda_i$, find a basis for the eigenspace by solving $(A - \lambda_i I)\mathbf{v} = \mathbf{0}$. These are your eigenvectors.
3.  Check if you have $n$ linearly independent eigenvectors. If yes, the matrix is diagonalizable.
4.  Form the matrix $P$ with the linearly independent eigenvectors as columns.
5.  Form the diagonal matrix $D$ with the corresponding eigenvalues on the main diagonal, in the same order as their eigenvectors appear in $P$.
6.  The diagonalization is $A = PDP^{-1}$, or equivalently $D = P^{-1}AP$.

This topic is fundamental for understanding how transformations work and how to simplify complex systems by finding their inherent modes of behavior. It's a core concept for **CO1** and provides the foundation for solving many engineering problems, particularly those involving differential equations.

---

## Sample Questions and Answers

Here are some questions to test your understanding, ranging from conceptual checks to more applied problems.

**Q1. Conceptual Understanding: What does it mean for a matrix $A$ to be diagonalizable?**

**Answer:** A matrix $A$ is diagonalizable if it can be expressed in the form $A = PDP^{-1}$, where $D$ is a diagonal matrix and $P$ is an invertible matrix. Equivalently, an $n \times n$ matrix $A$ is diagonalizable if and only if there exists a basis for $\mathbb{R}^n$ consisting entirely of eigenvectors of $A$. This implies that $A$ must have $n$ linearly independent eigenvectors.

**Q2. Conceptual Understanding: If an $n \times n$ matrix $A$ has $n$ distinct eigenvalues, is it guaranteed to be diagonalizable?**

**Answer:** Yes. A fundamental theorem in linear algebra states that if an $n \times n$ matrix $A$ has $n$ distinct eigenvalues, then the corresponding eigenvectors are linearly independent. Therefore, such a matrix is always diagonalizable. The condition for diagonalizability is having $n$ linearly independent eigenvectors, which is satisfied if all eigenvalues are distinct.

**Q3. Calculation: Diagonalize the matrix $A = \begin{pmatrix} 3 & 1 \\ 0 & 3 \end{pmatrix}$.**

**Answer:**
1.  **Find Eigenvalues:**
    $\det(A - \lambda I) = \det \begin{pmatrix} 3-\lambda & 1 \\ 0 & 3-\lambda \end{pmatrix} = (3-\lambda)(3-\lambda) - (1)(0) = (3-\lambda)^2$.
    Setting the determinant to zero: $(3-\lambda)^2 = 0$, so $\lambda = 3$ is the only eigenvalue, with algebraic multiplicity 2.

2.  **Find Eigenvectors:**
    We solve $(A - 3I)\mathbf{v} = \mathbf{0}$:
    $\begin{pmatrix} 3-3 & 1 \\ 0 & 3-3 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$.
    This simplifies to the equation $0v_1 + 1v_2 = 0$, which means $v_2 = 0$. The variable $v_1$ is a free variable.
    So, the eigenvectors are of the form $\mathbf{v} = \begin{pmatrix} v_1 \\ 0 \end{pmatrix} = v_1 \begin{pmatrix} 1 \\ 0 \end{pmatrix}$.
    We have only one linearly independent eigenvector, $\begin{pmatrix} 1 \\ 0 \end{pmatrix}$.

3.  **Conclusion on Diagonalizability:**
    Since the matrix is $2 \times 2$ but we only found one linearly independent eigenvector, the matrix $A$ is **not diagonalizable**. The geometric multiplicity of the eigenvalue $\lambda=3$ is 1, which is less than its algebraic multiplicity of 2.

    *This is a common type of exam question to catch students who don't check the number of linearly independent eigenvectors.*

**Q4. Application Context (Differential Equations):**
Suppose you are analyzing a system described by $\mathbf{y}'(t) = A\mathbf{y}(t)$, where $A = \begin{pmatrix} 1 & 2 \\ 0 & 3 \end{pmatrix}$. If you diagonalize $A$ into $D = P^{-1}AP$, what would the transformed system for $\mathbf{x} = P^{-1}\mathbf{y}$ look like?

**Answer:**
1.  **Find Eigenvalues:**
    $\det(A - \lambda I) = \det \begin{pmatrix} 1-\lambda & 2 \\ 0 & 3-\lambda \end{pmatrix} = (1-\lambda)(3-\lambda) - (2)(0) = (1-\lambda)(3-\lambda)$.
    The eigenvalues are $\lambda_1 = 1$ and $\lambda_2 = 3$. These are distinct, so the matrix is diagonalizable.

2.  **Find Eigenvectors:**
    *   For $\lambda_1 = 1$:
        $(A - 1I)\mathbf{v} = \begin{pmatrix} 0 & 2 \\ 0 & 2 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \implies 2v_2 = 0 \implies v_2 = 0$. $v_1$ is free.
        Eigenvector $\mathbf{v}_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$.
    *   For $\lambda_2 = 3$:
        $(A - 3I)\mathbf{v} = \begin{pmatrix} -2 & 2 \\ 0 & 0 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \implies -2v_1 + 2v_2 = 0 \implies v_1 = v_2$. $v_2$ is free.
        Eigenvector $\mathbf{v}_2 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.

3.  **Construct P and D:**
    $P = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$
    $D = \begin{pmatrix} 1 & 0 \\ 0 & 3 \end{pmatrix}$

4.  **Transformed System:**
    The original system is $\mathbf{y}' = A\mathbf{y}$.
    Let $\mathbf{y} = P\mathbf{x}$. Then $\mathbf{y}' = P\mathbf{x}'$.
    Substituting into $\mathbf{y}' = A\mathbf{y}$:
    $P\mathbf{x}' = A(P\mathbf{x})$
    $P\mathbf{x}' = (PDP^{-1})(P\mathbf{x})$
    $P\mathbf{x}' = PD\mathbf{x}$
    Multiplying by $P^{-1}$:
    $\mathbf{x}' = D\mathbf{x}$

    Therefore, the transformed system is:
    $\begin{pmatrix} x_1' \\ x_2' \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 3 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix}$
    Which expands to:
    $x_1'(t) = 1 \cdot x_1(t)$
    $x_2'(t) = 3 \cdot x_2(t)$

    This decoupled system is much easier to solve: $x_1(t) = c_1 e^t$ and $x_2(t) = c_2 e^{3t}$. To get the solution for $\mathbf{y}$, you would then compute $\mathbf{y}(t) = P\mathbf{x}(t)$. This aligns with **CO2**.

This concludes our exploration of diagonalization. Remember the connection between eigenvalues, eigenvectors, and the ability to simplify matrices into a diagonal form. It's a fundamental tool for analysis in many areas of science and engineering.
