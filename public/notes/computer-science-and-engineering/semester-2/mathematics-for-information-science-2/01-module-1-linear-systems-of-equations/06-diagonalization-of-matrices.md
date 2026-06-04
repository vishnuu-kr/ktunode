---
title: "Diagonalization of matrices."
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 2"
module: "Module 1: Linear systems of equations"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6e58474a0b135b5d0d"
status: "completed"
scrapedAt: "2026-05-20T16:34:32.280Z"
---
# MATHEMATICS FOR INFORMATION SCIENCE – 2

## Module 1: Linear Systems of Equations

### Topic: Diagonalization of Matrices

Welcome, everyone! Today, we're diving into one of the most powerful and elegant concepts in linear algebra: **Diagonalization of Matrices**. This isn't just an abstract mathematical idea; it has profound implications in how we model and understand complex systems, particularly in fields like information science, computer graphics, and data analysis. Think of it as finding a simpler, more understandable "viewpoint" for a matrix.

Our journey today will directly contribute to **Course Outcome 1 (CO1)**: "Solve system of linear equations, to evaluate eigen values and eigen vectors of matrices and to diagonalize matrices." Understanding diagonalization is the culmination of finding eigenvalues and eigenvectors, and it unlocks new ways to solve systems and understand transformations. We'll also touch upon how this relates to other course outcomes as we go, like how it simplifies analysis in data science (CO3, CO4).

Let's start with the fundamental question: **Why do we care about diagonalizing a matrix?**

Imagine you have a complex system described by a matrix, say, representing how different variables influence each other in a large network. Directly analyzing this system can be incredibly difficult. However, if we can transform this matrix into a simpler form – a **diagonal matrix** – many operations become remarkably easy. Think about multiplication: multiplying diagonal matrices is as simple as multiplying their diagonal entries. Squaring a diagonal matrix? Even simpler! Diagonalization allows us to decompose a complex transformation into a series of simpler, independent transformations.

### What is a Diagonal Matrix?

Before we diagonalize, let's be crystal clear about what a diagonal matrix is.

A **diagonal matrix** is a square matrix where all the entries *off* the main diagonal are zero. The entries on the main diagonal can be any value, including zero.

Here’s what it looks like:

$$
D = \begin{pmatrix}
d_{11} & 0 & 0 & \dots & 0 \\
0 & d_{22} & 0 & \dots & 0 \\
0 & 0 & d_{33} & \dots & 0 \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0 & 0 & 0 & \dots & d_{nn}
\end{pmatrix}
$$

**Why are they special?**

*   **Multiplication is easy:** If you have two diagonal matrices $D_1$ and $D_2$, their product $D_1 D_2$ is simply another diagonal matrix where each diagonal element is the product of the corresponding diagonal elements of $D_1$ and $D_2$.
    $$
    \begin{pmatrix} a & 0 \\ 0 & b \end{pmatrix} \begin{pmatrix} c & 0 \\ 0 & d \end{pmatrix} = \begin{pmatrix} ac & 0 \\ 0 & bd \end{pmatrix}
    $$
    This simplicity extends to higher powers. For a diagonal matrix $D$, $D^k$ is also a diagonal matrix with diagonal entries raised to the power of $k$. This is incredibly useful for analyzing systems that evolve over time, as we’ll see.

*   **Invertibility:** A diagonal matrix is invertible if and only if all its diagonal entries are non-zero. Its inverse is another diagonal matrix with the reciprocals of the original diagonal entries.

### The Bridge: Eigenvalues and Eigenvectors

Diagonalization is intrinsically linked to eigenvalues and eigenvectors. If you've been diligently working through our earlier sessions on eigenvalues, you'll recognize these concepts.

Recall: For a square matrix $A$, a non-zero vector $\mathbf{v}$ is an **eigenvector** of $A$ if $A\mathbf{v} = \lambda\mathbf{v}$ for some scalar $\lambda$. This scalar $\lambda$ is the corresponding **eigenvalue**.

The equation $A\mathbf{v} = \lambda\mathbf{v}$ tells us that when matrix $A$ acts on its eigenvector $\mathbf{v}$, the result is simply a scaled version of $\mathbf{v}$. The direction of $\mathbf{v}$ is unchanged (or reversed if $\lambda$ is negative); only its magnitude is scaled by $\lambda$. Eigenvectors represent the "invariant directions" of the linear transformation defined by $A$.

**Analogy:** Imagine you're looking at a kaleidoscope. Some patterns might rotate or shift, but there are usually a few key points or lines that remain in their relative positions, perhaps just scaling or reflecting. Eigenvectors are like those special, stable directions under the "transformation" of the matrix.

### What Does it Mean to Diagonalize a Matrix?

To "diagonalize" a matrix $A$ means to find an invertible matrix $P$ and a diagonal matrix $D$ such that:

$$ A = PDP^{-1} $$

or equivalently,

$$ D = P^{-1}AP $$

This relationship is absolutely central. Let's break down the matrices $P$ and $D$:

*   **The Diagonal Matrix $D$:** The entries on the main diagonal of $D$ are precisely the **eigenvalues** of matrix $A$.
*   **The Invertible Matrix $P$:** The columns of matrix $P$ are the corresponding **eigenvectors** of matrix $A$.

**How do we find these matrices?**

This is where the process comes together.

**Step 1: Find the Eigenvalues**
You've practiced this! We find the eigenvalues by solving the characteristic equation: $\det(A - \lambda I) = 0$, where $I$ is the identity matrix and $\lambda$ represents the eigenvalues.

**Step 2: Find the Eigenvectors**
For each eigenvalue $\lambda_i$, we find the corresponding eigenvectors by solving the system $(A - \lambda_i I)\mathbf{v} = \mathbf{0}$. The non-zero solutions $\mathbf{v}$ are the eigenvectors.

**Step 3: Construct $P$ and $D$**
If matrix $A$ is an $n \times n$ matrix and we have found $n$ linearly independent eigenvectors, we can construct $P$ and $D$:

*   Let the $n$ linearly independent eigenvectors be $\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_n$.
*   Construct matrix $P$ by making these eigenvectors its columns:
    $$ P = [\mathbf{v}_1 \ | \ \mathbf{v}_2 \ | \ \dots \ | \ \mathbf{v}_n] $$
*   Let the corresponding eigenvalues be $\lambda_1, \lambda_2, \dots, \lambda_n$.
*   Construct the diagonal matrix $D$ with these eigenvalues on its main diagonal, in the *same order* as their corresponding eigenvectors appear in $P$:
    $$ D = \begin{pmatrix}
    \lambda_1 & 0 & \dots & 0 \\
    0 & \lambda_2 & \dots & 0 \\
    \vdots & \vdots & \ddots & \vdots \\
    0 & 0 & \dots & \lambda_n
    \end{pmatrix} $$

**The Crucial Condition:** For a matrix $A$ to be diagonalizable, it *must* have $n$ linearly independent eigenvectors. If it doesn't, we cannot form the matrix $P$ with linearly independent columns, and thus, we cannot diagonalize $A$ in this manner.

**Why does $A = PDP^{-1}$ hold?**

Let's see this from the eigenvector definition.
Consider $AP = A[\mathbf{v}_1 \ | \ \mathbf{v}_2 \ | \ \dots \ | \ \mathbf{v}_n]$.
Multiplying a matrix by a partitioned matrix like this means multiplying the matrix $A$ by each column of the partitioned matrix.
So, $AP = [A\mathbf{v}_1 \ | \ A\mathbf{v}_2 \ | \ \dots \ | \ A\mathbf{v}_n]$.
Since $\mathbf{v}_i$ are eigenvectors with eigenvalues $\lambda_i$, we know $A\mathbf{v}_i = \lambda_i\mathbf{v}_i$.
Thus, $AP = [\lambda_1\mathbf{v}_1 \ | \ \lambda_2\mathbf{v}_2 \ | \ \dots \ | \ \lambda_n\mathbf{v}_n]$.

Now, let's look at $PD$.
$PD = [\mathbf{v}_1 \ | \ \mathbf{v}_2 \ | \ \dots \ | \ \mathbf{v}_n] \begin{pmatrix}
\lambda_1 & 0 & \dots & 0 \\
0 & \lambda_2 & \dots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \dots & \lambda_n
\end{pmatrix}$
When you multiply $P$ by $D$, you are essentially scaling each column vector $\mathbf{v}_i$ in $P$ by the corresponding diagonal element $\lambda_i$ of $D$.
So, $PD = [\lambda_1\mathbf{v}_1 \ | \ \lambda_2\mathbf{v}_2 \ | \ \dots \ | \ \lambda_n\mathbf{v}_n]$.

Notice that $AP = PD$.
If $P$ has linearly independent columns, it is invertible. We can then multiply both sides by $P^{-1}$ on the right:
$APP^{-1} = PDP^{-1}$
$A = PDP^{-1}$

And if we want $D$ in terms of $A$:
$P^{-1}AP = P^{-1}PDP^{-1}P$
$P^{-1}AP = P^{-1}P D P^{-1}P$
$P^{-1}AP = ID$
$D = P^{-1}AP$

This establishes the relationship and how the matrices $P$ and $D$ are constructed. This is a core part of **CO1**.

### Example: Diagonalizing a 2x2 Matrix

Let's walk through a concrete example. Consider the matrix:
$$ A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix} $$

**Step 1: Find Eigenvalues**
We need to solve $\det(A - \lambda I) = 0$.
$$ A - \lambda I = \begin{pmatrix} 4-\lambda & 1 \\ 2 & 3-\lambda \end{pmatrix} $$
$$ \det(A - \lambda I) = (4-\lambda)(3-\lambda) - (1)(2) $$
$$ = 12 - 4\lambda - 3\lambda + \lambda^2 - 2 $$
$$ = \lambda^2 - 7\lambda + 10 $$
Setting this to zero: $\lambda^2 - 7\lambda + 10 = 0$.
Factoring, we get $(\lambda - 5)(\lambda - 2) = 0$.
So, the eigenvalues are $\lambda_1 = 5$ and $\lambda_2 = 2$.

**Step 2: Find Eigenvectors**

*   **For $\lambda_1 = 5$**:
    We solve $(A - 5I)\mathbf{v} = \mathbf{0}$.
    $$ A - 5I = \begin{pmatrix} 4-5 & 1 \\ 2 & 3-5 \end{pmatrix} = \begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix} $$
    We need to solve:
    $$ \begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} $$
    Both rows give the same equation: $-x_1 + x_2 = 0$, or $x_1 = x_2$.
    Let $x_2 = t$. Then $x_1 = t$.
    The eigenvectors are of the form $\begin{pmatrix} t \\ t \end{pmatrix} = t \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.
    A simple eigenvector is $\mathbf{v}_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.

*   **For $\lambda_2 = 2$**:
    We solve $(A - 2I)\mathbf{v} = \mathbf{0}$.
    $$ A - 2I = \begin{pmatrix} 4-2 & 1 \\ 2 & 3-2 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix} $$
    We need to solve:
    $$ \begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} $$
    Both rows give the same equation: $2x_1 + x_2 = 0$, or $x_2 = -2x_1$.
    Let $x_1 = s$. Then $x_2 = -2s$.
    The eigenvectors are of the form $\begin{pmatrix} s \\ -2s \end{pmatrix} = s \begin{pmatrix} 1 \\ -2 \end{pmatrix}$.
    A simple eigenvector is $\mathbf{v}_2 = \begin{pmatrix} 1 \\ -2 \end{pmatrix}$.

**Step 3: Construct $P$ and $D$**
We have two linearly independent eigenvectors, $\mathbf{v}_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$ and $\mathbf{v}_2 = \begin{pmatrix} 1 \\ -2 \end{pmatrix}$.

Let's form $P$ with these eigenvectors as columns:
$$ P = \begin{pmatrix} 1 & 1 \\ 1 & -2 \end{pmatrix} $$
The corresponding eigenvalues are $\lambda_1 = 5$ and $\lambda_2 = 2$. So, $D$ is:
$$ D = \begin{pmatrix} 5 & 0 \\ 0 & 2 \end{pmatrix} $$

**The Diagonalization:**
We can now write $A = PDP^{-1}$.
Let's verify this. We need to find $P^{-1}$.
For a 2x2 matrix $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$, the inverse is $\frac{1}{ad-bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$.
For $P = \begin{pmatrix} 1 & 1 \\ 1 & -2 \end{pmatrix}$, $\det(P) = (1)(-2) - (1)(1) = -2 - 1 = -3$.
$$ P^{-1} = \frac{1}{-3} \begin{pmatrix} -2 & -1 \\ -1 & 1 \end{pmatrix} = \begin{pmatrix} 2/3 & 1/3 \\ 1/3 & -1/3 \end{pmatrix} $$

Now, let's compute $PDP^{-1}$:
$$ PDP^{-1} = \begin{pmatrix} 1 & 1 \\ 1 & -2 \end{pmatrix} \begin{pmatrix} 5 & 0 \\ 0 & 2 \end{pmatrix} \begin{pmatrix} 2/3 & 1/3 \\ 1/3 & -1/3 \end{pmatrix} $$
First, $PD$:
$$ PD = \begin{pmatrix} 1 & 1 \\ 1 & -2 \end{pmatrix} \begin{pmatrix} 5 & 0 \\ 0 & 2 \end{pmatrix} = \begin{pmatrix} 5 & 2 \\ 5 & -4 \end{pmatrix} $$
Now, $(PD)P^{-1}$:
$$ (PD)P^{-1} = \begin{pmatrix} 5 & 2 \\ 5 & -4 \end{pmatrix} \begin{pmatrix} 2/3 & 1/3 \\ 1/3 & -1/3 \end{pmatrix} $$
$$ = \begin{pmatrix}
(5 \cdot 2/3 + 2 \cdot 1/3) & (5 \cdot 1/3 + 2 \cdot (-1/3)) \\
(5 \cdot 2/3 + (-4) \cdot 1/3) & (5 \cdot 1/3 + (-4) \cdot (-1/3))
\end{pmatrix} $$
$$ = \begin{pmatrix}
(10/3 + 2/3) & (5/3 - 2/3) \\
(10/3 - 4/3) & (5/3 + 4/3)
\end{pmatrix} $$
$$ = \begin{pmatrix}
12/3 & 3/3 \\
6/3 & 9/3
\end{pmatrix} = \begin{pmatrix}
4 & 1 \\
2 & 3
\end{pmatrix} $$
And that, my friends, is our original matrix $A$! This confirms our diagonalization.

**What if we chose the eigenvectors in a different order?**
Let's say we put $\mathbf{v}_2$ first:
$P' = [\mathbf{v}_2 \ | \ \mathbf{v}_1] = \begin{pmatrix} 1 & 1 \\ -2 & 1 \end{pmatrix}$
Then $D'$ would be:
$D' = \begin{pmatrix} 2 & 0 \\ 0 & 5 \end{pmatrix}$
And $A = P'D'(P')^{-1}$. The resulting diagonal matrix is different, but it still contains the eigenvalues of $A$. The order matters for the construction of $P$.

### Why is this Useful? Applications and Insights

Diagonalization is not just a computational exercise; it reveals the fundamental behavior of the linear transformation.

1.  **Simplifying Matrix Powers:** This is a huge one!
    If $A = PDP^{-1}$, then:
    $A^2 = (PDP^{-1})(PDP^{-1}) = PD(P^{-1}P)DP^{-1} = PDIDP^{-1} = PD^2P^{-1}$
    In general, $A^k = PD^kP^{-1}$.
    As we discussed, $D^k$ is trivial to compute:
    $$ D^k = \begin{pmatrix}
    \lambda_1^k & 0 & \dots & 0 \\
    0 & \lambda_2^k & \dots & 0 \\
    \vdots & \vdots & \ddots & \vdots \\
    0 & 0 & \dots & \lambda_n^k
    \end{pmatrix} $$
    So, to compute high powers of $A$, we only need to compute powers of its eigenvalues and then perform two matrix multiplications ($PD^k$ and then by $P^{-1}$). This is exponentially faster than multiplying $A$ by itself $k$ times.

    **Real-world connection:** This is crucial in areas like:
    *   **Recurrence Relations:** Think about population growth models or financial systems that change over discrete time steps. If the transition can be modeled by a matrix $A$, then $A^k$ tells you the state after $k$ steps. Diagonalization makes calculating this state for large $k$ feasible.
    *   **Dynamical Systems:** In simulating how a system evolves over time, many models involve matrix exponentiation, e.g., $e^{At}$ for continuous systems. Diagonalization simplifies this significantly: $e^{At} = P e^{Dt} P^{-1}$, where $e^{Dt}$ is a diagonal matrix with $e^{\lambda_i t}$ on the diagonal. (This is a glimpse into what you might see in differential equations or advanced numerical methods).

2.  **Understanding Linear Transformations:**
    The equation $A = PDP^{-1}$ can be interpreted as a sequence of transformations:
    *   First, $P^{-1}$ transforms the coordinate system to one where the eigenvectors of $A$ become the new basis vectors.
    *   Then, $D$ performs a simple scaling along these new axes (by the eigenvalues).
    *   Finally, $P$ transforms back to the original coordinate system.

    This interpretation connects directly to **CO4** about linear transformations. Diagonalization shows how a complex linear transformation can be broken down into simpler, geometric operations (scaling along specific directions).

3.  **Solving Systems of Linear Differential Equations:**
    As hinted above, diagonalization is key to solving systems of the form $\mathbf{y}' = A\mathbf{y}$. The general solution involves terms like $e^{\lambda_i t}$, where $\lambda_i$ are eigenvalues. This is a direct application where understanding eigenvalues and diagonalization is paramount.

4.  **Data Analysis and Principal Component Analysis (PCA):**
    While not directly in the scope of this module, the concept of diagonalization is the bedrock of PCA, a fundamental technique in machine learning and data science. PCA aims to find the principal components (directions of maximum variance) of data, which are related to the eigenvectors of the covariance matrix. The eigenvalues indicate the amount of variance along these directions. Diagonalization of the covariance matrix allows us to understand and reduce the dimensionality of data effectively. This relates to **CO3** (inner product spaces, though not explicitly covered here, covariance matrices are related) and implicitly to handling data structures in information science.

### When is a Matrix Not Diagonalizable?

A matrix $A$ is diagonalizable if and only if it has $n$ linearly independent eigenvectors. This can fail in a couple of ways:

1.  **Not enough distinct eigenvalues:** If an eigenvalue has an algebraic multiplicity (the number of times it appears as a root of the characteristic polynomial) greater than 1, but its geometric multiplicity (the dimension of the eigenspace, i.e., the number of linearly independent eigenvectors for that eigenvalue) is less than its algebraic multiplicity, then you won't have $n$ linearly independent eigenvectors.
    *   **Example:** The matrix $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ has only one eigenvalue $\lambda = 1$ with algebraic multiplicity 2. However, the eigenspace for $\lambda=1$ is just the span of $\begin{pmatrix} 1 \\ 0 \end{pmatrix}$, meaning the geometric multiplicity is 1. Thus, this matrix is not diagonalizable. This is a very common counterexample.

2.  **Complex Eigenvalues for Real Matrices:** If a real matrix has complex eigenvalues, the corresponding eigenvectors will also be complex. While you can still diagonalize such matrices over the complex numbers, if you are restricted to real matrices and real numbers, and you need real eigenvectors to form $P$, then complex eigenvalues can prevent real diagonalization.

**Key Takeaway for Exams:** Always check if you have $n$ linearly independent eigenvectors. If the dimension is $n$, and you find fewer than $n$ linearly independent eigenvectors (due to repeated eigenvalues with insufficient geometric multiplicity), the matrix is not diagonalizable.

### Summary and What to Remember

*   **Diagonalization Goal:** Express $A$ as $A = PDP^{-1}$, where $D$ is diagonal and $P$ is invertible.
*   **$D$'s Diagonal Entries:** The eigenvalues of $A$.
*   **$P$'s Columns:** The corresponding linearly independent eigenvectors of $A$.
*   **Condition for Diagonalization:** The matrix $A$ must have $n$ linearly independent eigenvectors.
*   **How to Diagonalize:**
    1.  Find eigenvalues $\lambda_i$.
    2.  Find linearly independent eigenvectors $\mathbf{v}_i$ for each $\lambda_i$.
    3.  Form $P = [\mathbf{v}_1 | \dots | \mathbf{v}_n]$ and $D = \text{diag}(\lambda_1, \dots, \lambda_n)$ in corresponding order.
*   **Why it Matters:** Simplifies calculations of $A^k$, understanding transformations, solving differential equations, and forms the basis for many data analysis techniques.
*   **When it Fails:** Not enough linearly independent eigenvectors (often due to repeated eigenvalues with geometric multiplicity less than algebraic multiplicity).

This concept of finding a simpler representation by changing the basis (which is what $P$ represents) is a recurring theme in linear algebra and its applications. It allows us to understand the "essence" of a transformation.

### Sample Questions and Answers

**1. Conceptual Question:** Explain why $A^k = PD^kP^{-1}$ is a useful formula when $A$ is diagonalizable.
    *   **Answer:** This formula is useful because computing $D^k$ is very simple for a diagonal matrix $D$. If $D = \text{diag}(\lambda_1, \dots, \lambda_n)$, then $D^k = \text{diag}(\lambda_1^k, \dots, \lambda_n^k)$. Instead of performing $k-1$ matrix multiplications to find $A^k$, we only need to compute the powers of the eigenvalues and then perform two matrix multiplications ($PD^k$ and then by $P^{-1}$). This drastically reduces computational effort, especially for large values of $k$. This is essential for analyzing systems that evolve over many time steps.

**2. Calculation Question:** Diagonalize the following matrix $A$, if possible.
    $$ A = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix} $$
    *   **Solution:**
        *   **Step 1: Eigenvalues**
            $\det(A - \lambda I) = \det \begin{pmatrix} 1-\lambda & 2 \\ 2 & 1-\lambda \end{pmatrix} = (1-\lambda)^2 - 4 = 0$
            $(1-\lambda)^2 = 4 \implies 1-\lambda = \pm 2$
            If $1-\lambda = 2$, then $\lambda = -1$.
            If $1-\lambda = -2$, then $\lambda = 3$.
            Eigenvalues are $\lambda_1 = 3$ and $\lambda_2 = -1$.
        *   **Step 2: Eigenvectors**
            For $\lambda_1 = 3$:
            $(A - 3I)\mathbf{v} = \begin{pmatrix} 1-3 & 2 \\ 2 & 1-3 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} -2 & 2 \\ 2 & -2 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$
            This gives $-2x_1 + 2x_2 = 0$, or $x_1 = x_2$.
            So, $\mathbf{v}_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$ (for $t=1$).
            For $\lambda_2 = -1$:
            $(A - (-1)I)\mathbf{v} = \begin{pmatrix} 1-(-1) & 2 \\ 2 & 1-(-1) \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 2 & 2 \\ 2 & 2 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$
            This gives $2x_1 + 2x_2 = 0$, or $x_1 = -x_2$.
            So, $\mathbf{v}_2 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$ (for $s=1$).
        *   **Step 3: Construct P and D**
            We have two linearly independent eigenvectors.
            $P = [\mathbf{v}_1 \ | \ \mathbf{v}_2] = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$
            $D = \begin{pmatrix} 3 & 0 \\ 0 & -1 \end{pmatrix}$
        *   **Conclusion:** The matrix $A$ is diagonalizable. $A = PDP^{-1}$ with the matrices $P$ and $D$ found above.

**3. Conceptual Pitfall Question:** Consider the matrix $B = \begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix}$. Is this matrix diagonalizable? Justify your answer.
    *   **Answer:**
        *   **Step 1: Eigenvalues**
            $\det(B - \lambda I) = \det \begin{pmatrix} 2-\lambda & 1 \\ 0 & 2-\lambda \end{pmatrix} = (2-\lambda)^2 = 0$.
            This gives a single eigenvalue $\lambda = 2$ with algebraic multiplicity 2.
        *   **Step 2: Eigenvectors**
            We solve $(B - 2I)\mathbf{v} = \mathbf{0}$.
            $(B - 2I) = \begin{pmatrix} 2-2 & 1 \\ 0 & 2-2 \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$.
            So, we need $\begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$.
            This gives the equation $0x_1 + 1x_2 = 0$, which means $x_2 = 0$. $x_1$ can be any real number.
            The eigenvectors are of the form $\begin{pmatrix} x_1 \\ 0 \end{pmatrix} = x_1 \begin{pmatrix} 1 \\ 0 \end{pmatrix}$.
            The eigenspace is spanned by $\begin{pmatrix} 1 \\ 0 \end{pmatrix}$.
        *   **Justification:** The geometric multiplicity of the eigenvalue $\lambda=2$ is 1 (only one linearly independent eigenvector). Since the geometric multiplicity (1) is less than the algebraic multiplicity (2), the matrix $B$ does not have enough linearly independent eigenvectors to form an invertible matrix $P$. Therefore, matrix $B$ is **not diagonalizable**.

That concludes our exploration of diagonalization. This is a fundamental tool that will reappear in many contexts. Keep practicing these steps!
