---
title: "Vector Spaces –Vector Spaces, Linear Independence, Basis and Rank."
subject: "MATHEMATICS FOR MACHINE LEARNING"
module: "Module 1: LINEAR ALGEBRA: Systems of Linear Equations – Matrices, Solving Systems of Linear Equations."
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35ee9"
status: "completed"
scrapedAt: "2026-05-23T16:17:16.879Z"
---
## Mathematics for Machine Learning: Module 1 - Linear Algebra

### Topic: Vector Spaces, Linear Independence, Basis and Rank

---

### 1. Vector Spaces

#### 1.1 Definition of a Vector Space

A **vector space** over a field $\mathbb{F}$ (typically $\mathbb{R}$ or $\mathbb{C}$) is a set $V$ equipped with two operations:
1. **Vector Addition:** For any two vectors $\mathbf{u}, \mathbf{v} \in V$, their sum $\mathbf{u} + \mathbf{v}$ is also in $V$.
2. **Scalar Multiplication:** For any vector $\mathbf{v} \in V$ and any scalar $c \in \mathbb{F}$, the product $c\mathbf{v}$ is also in $V$.

These operations must satisfy the following ten axioms:

**Axioms related to Vector Addition:**
1. **Commutativity:** $\mathbf{u} + \mathbf{v} = \mathbf{v} + \mathbf{u}$ for all $\mathbf{u}, \mathbf{v} \in V$.
2. **Associativity:** $(\mathbf{u} + \mathbf{v}) + \mathbf{w} = \mathbf{u} + (\mathbf{v} + \mathbf{w})$ for all $\mathbf{u}, \mathbf{v}, \mathbf{w} \in V$.
3. **Existence of Zero Vector:** There exists a unique vector $\mathbf{0} \in V$ such that $\mathbf{v} + \mathbf{0} = \mathbf{v}$ for all $\mathbf{v} \in V$.
4. **Existence of Additive Inverse:** For each $\mathbf{v} \in V$, there exists a unique vector $-\mathbf{v} \in V$ such that $\mathbf{v} + (-\mathbf{v}) = \mathbf{0}$.

**Axioms related to Scalar Multiplication:**
5. **Distributivity of Scalar Multiplication over Vector Addition:** $c(\mathbf{u} + \mathbf{v}) = c\mathbf{u} + c\mathbf{v}$ for all $\mathbf{u}, \mathbf{v} \in V$ and $c \in \mathbb{F}$.
6. **Distributivity of Scalar Addition over Vector Multiplication:** $(c + d)\mathbf{v} = c\mathbf{v} + d\mathbf{v}$ for all $\mathbf{v} \in V$ and $c, d \in \mathbb{F}$.
7. **Associativity of Scalar Multiplication:** $(cd)\mathbf{v} = c(d\mathbf{v})$ for all $\mathbf{v} \in V$ and $c, d \in \mathbb{F}$.
8. **Existence of Multiplicative Identity:** $1\mathbf{v} = \mathbf{v}$ for all $\mathbf{v} \in V$, where $1$ is the multiplicative identity in $\mathbb{F}$.

**Compatibility of Operations:**
9. For any $\mathbf{v} \in V$ and $c, d \in \mathbb{F}$, $(cd)\mathbf{v} = c(d\mathbf{v})$. (This is the same as axiom 7, often repeated for clarity or emphasis).
10. The scalar multiplication property for scalar addition and vector addition is captured by axioms 5 and 6.

**Key Point:** Axioms 3 and 4 (existence of zero vector and additive inverse) are crucial. If they hold, the other axioms are often referred to as the "structure-preserving" properties of the operations.

*(Referenced in: Deisenroth, Faisal, & Ong - Chapter 2: Vector Spaces)*
*(Referenced in: Strang - Chapter 4: Orthogonality)*

#### 1.2 Common Examples of Vector Spaces

*   **$\mathbb{R}^n$:** The set of all $n$-tuples of real numbers, with standard vector addition and scalar multiplication. This is a fundamental vector space in machine learning.
    *   Example: In $\mathbb{R}^3$, $\mathbf{u} = [1, 2, 3]$, $\mathbf{v} = [-1, 0, 5]$.
        *   $\mathbf{u} + \mathbf{v} = [1+(-1), 2+0, 3+5] = [0, 2, 8]$
        *   $2\mathbf{u} = [2 \times 1, 2 \times 2, 2 \times 3] = [2, 4, 6]$
*   **Space of $m \times n$ Matrices ($M_{m \times n}$):** The set of all $m \times n$ matrices with real entries. Matrix addition and scalar multiplication satisfy the vector space axioms.
    *   Example: Let $A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$, $B = \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$.
        *   $A+B = \begin{bmatrix} 1 & 3 \\ 4 & 4 \end{bmatrix}$
        *   $2A = \begin{bmatrix} 2 & 4 \\ 6 & 8 \end{bmatrix}$
*   **Space of Polynomials of Degree at Most $n$ ($P_n$):** The set of all polynomials $p(x) = a_0 + a_1x + \dots + a_nx^n$.
    *   Example: $p(x) = 2x^2 + 3x + 1$, $q(x) = x^2 - x$.
        *   $p(x) + q(x) = 3x^2 + 2x + 1$
        *   $3p(x) = 6x^2 + 9x + 3$
*   **Space of Real-Valued Functions ($F(\mathbb{R})$):** The set of all functions $f: \mathbb{R} \to \mathbb{R}$.

#### 1.3 Subspaces

A **subspace** $W$ of a vector space $V$ is a subset of $V$ that is itself a vector space under the same operations of vector addition and scalar multiplication inherited from $V$. To be a subspace, $W$ must satisfy three conditions:
1.  **Contains the zero vector:** $\mathbf{0} \in W$.
2.  **Closed under addition:** If $\mathbf{u}, \mathbf{v} \in W$, then $\mathbf{u} + \mathbf{v} \in W$.
3.  **Closed under scalar multiplication:** If $\mathbf{v} \in W$ and $c \in \mathbb{F}$, then $c\mathbf{v} \in W$.

**Key Point:** If a subset $W$ is non-empty and satisfies conditions 2 and 3, it is automatically a subspace because the axioms for the existence of the zero vector and additive inverses will also hold within $W$.

*(Referenced in: Deisenroth, Faisal, & Ong - Chapter 2: Vector Spaces)*
*(Referenced in: Strang - Chapter 4: Orthogonality)*

**Example:**
Consider $V = \mathbb{R}^3$. The set of all vectors of the form $[x, y, 0]$ is a subspace of $\mathbb{R}^3$ (the $xy$-plane).
1.  The zero vector $[0, 0, 0]$ is in this set.
2.  If $\mathbf{u} = [x_1, y_1, 0]$ and $\mathbf{v} = [x_2, y_2, 0]$ are in the set, then $\mathbf{u} + \mathbf{v} = [x_1+x_2, y_1+y_2, 0]$, which is also in the set.
3.  If $\mathbf{v} = [x, y, 0]$ is in the set and $c \in \mathbb{R}$, then $c\mathbf{v} = [cx, cy, 0]$, which is also in the set.

---

### 2. Linear Independence

#### 2.1 Definition of Linear Independence

A set of vectors $\{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_k\}$ in a vector space $V$ is said to be **linearly independent** if the only linear combination that equals the zero vector is the one where all scalars are zero. That is, the equation:
$c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \dots + c_k\mathbf{v}_k = \mathbf{0}$
has the unique solution $c_1 = c_2 = \dots = c_k = 0$.

If there exist scalars $c_1, c_2, \dots, c_k$, not all zero, such that the equation holds, then the set of vectors is **linearly dependent**.

*(Referenced in: Deisenroth, Faisal, & Ong - Chapter 2: Vector Spaces)*
*(Referenced in: Strang - Chapter 2: Matrix Algebra)*
*(Referenced in: Axler - Chapter 3: Linear Independence)*

#### 2.2 How to Check for Linear Independence

To check if a set of vectors is linearly independent, form a matrix whose columns are the vectors and solve the homogeneous system of linear equations $A\mathbf{c} = \mathbf{0}$, where $A$ is the matrix and $\mathbf{c} = [c_1, c_2, \dots, c_k]^T$.

*   If the only solution is $\mathbf{c} = \mathbf{0}$, the vectors are linearly independent.
*   If there are non-trivial solutions (solutions other than $\mathbf{c} = \mathbf{0}$), the vectors are linearly dependent.

#### 2.3 Examples

**Example 1: Linearly Independent**
Consider the vectors $\mathbf{v}_1 = [1, 0]$, $\mathbf{v}_2 = [0, 1]$ in $\mathbb{R}^2$.
We want to solve $c_1[1, 0] + c_2[0, 1] = [0, 0]$.
This gives $[c_1, c_2] = [0, 0]$, so $c_1 = 0$ and $c_2 = 0$. The vectors are linearly independent.

**Example 2: Linearly Dependent**
Consider the vectors $\mathbf{v}_1 = [1, 2]$, $\mathbf{v}_2 = [2, 4]$ in $\mathbb{R}^2$.
We want to solve $c_1[1, 2] + c_2[2, 4] = [0, 0]$.
This gives $[c_1 + 2c_2, 2c_1 + 4c_2] = [0, 0]$.
From the first component: $c_1 + 2c_2 = 0 \implies c_1 = -2c_2$.
The second component is $2(-2c_2) + 4c_2 = -4c_2 + 4c_2 = 0$, which is always true.
We can choose any non-zero value for $c_2$, for example, $c_2 = 1$. Then $c_1 = -2$.
So, $-2[1, 2] + 1[2, 4] = [-2, -4] + [2, 4] = [0, 0]$.
Since we found non-zero scalars, these vectors are linearly dependent. Notice that $\mathbf{v}_2 = 2\mathbf{v}_1$. One vector is a multiple of another.

**Example 3: Linear Independence of Functions**
Consider functions $f_1(x) = 1$, $f_2(x) = x$, $f_3(x) = x^2$ in the space of polynomials.
We want to solve $c_1(1) + c_2(x) + c_3(x^2) = 0$ for all $x$.
This polynomial is zero for all $x$ if and only if all its coefficients are zero: $c_1 = 0, c_2 = 0, c_3 = 0$. Thus, these functions are linearly independent.

#### 2.4 Properties of Linear Independence

*   Any set containing the zero vector is linearly dependent.
*   Any set of vectors with only one non-zero vector is linearly independent.
*   If $\{\mathbf{v}_1, \dots, \mathbf{v}_k\}$ is linearly independent, then any subset of these vectors is also linearly independent.
*   If $\{\mathbf{v}_1, \dots, \mathbf{v}_k\}$ is linearly dependent, then any set of vectors containing these vectors is also linearly dependent.
*   In $\mathbb{R}^n$, any set of more than $n$ vectors is linearly dependent.

*(Referenced in: Strang - Chapter 2: Matrix Algebra)*
*(Referenced in: Axler - Chapter 3: Linear Independence)*

---

### 3. Basis and Dimension

#### 3.1 Span

The **span** of a set of vectors $\{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_k\}$, denoted as $\text{span}\{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_k\}$, is the set of all possible linear combinations of these vectors:
$\text{span}\{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_k\} = \{c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \dots + c_k\mathbf{v}_k \mid c_1, c_2, \dots, c_k \in \mathbb{F}\}$
The span of a set of vectors is always a subspace of the vector space.

*(Referenced in: Deisenroth, Faisal, & Ong - Chapter 2: Vector Spaces)*
*(Referenced in: Strang - Chapter 4: Orthogonality)*

#### 3.2 Definition of Basis

A set of vectors $\{\mathbf{b}_1, \mathbf{b}_2, \dots, \mathbf{b}_d\}$ in a vector space $V$ is called a **basis** for $V$ if it satisfies two conditions:
1.  The set is **linearly independent**.
2.  The set **spans** $V$, meaning $\text{span}\{\mathbf{b}_1, \mathbf{b}_2, \dots, \mathbf{b}_d\} = V$.

**Key Point:** A basis for a vector space is a minimal set of vectors that can generate (span) the entire space. It's like the fundamental building blocks.

*(Referenced in: Deisenroth, Faisal, & Ong - Chapter 2: Vector Spaces)*
*(Referenced in: Strang - Chapter 4: Orthogonality)*
*(Referenced in: Axler - Chapter 4: Dimension)*

#### 3.3 Examples of Bases

*   **Standard Basis for $\mathbb{R}^n$:** The set of standard basis vectors $\{\mathbf{e}_1, \mathbf{e}_2, \dots, \mathbf{e}_n\}$, where $\mathbf{e}_i$ has a 1 in the $i$-th position and 0s elsewhere. For example, in $\mathbb{R}^3$:
    $\mathbf{e}_1 = [1, 0, 0]$, $\mathbf{e}_2 = [0, 1, 0]$, $\mathbf{e}_3 = [0, 0, 1]$.
    This set is linearly independent and spans $\mathbb{R}^n$.
*   **Basis for $P_n$:** The set $\{1, x, x^2, \dots, x^n\}$ is a basis for the space of polynomials of degree at most $n$.
*   **Basis for $M_{2 \times 2}$:** A basis for the space of $2 \times 2$ matrices is:
    $\left\{\begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}, \begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix}, \begin{bmatrix} 0 & 0 \\ 1 & 0 \end{bmatrix}, \begin{bmatrix} 0 & 0 \\ 0 & 1 \end{bmatrix}\right\}$

#### 3.4 Dimension

The **dimension** of a vector space $V$, denoted as $\dim(V)$, is the number of vectors in any basis for $V$.
*   All bases for a finite-dimensional vector space have the same number of vectors.
*   If a vector space has a basis with $d$ vectors, then every basis for that space has exactly $d$ vectors.

**Key Point:** Dimension tells us the "size" or "degrees of freedom" of a vector space.

*(Referenced in: Deisenroth, Faisal, & Ong - Chapter 2: Vector Spaces)*
*(Referenced in: Strang - Chapter 4: Orthogonality)*
*(Referenced in: Axler - Chapter 4: Dimension)*

**Examples:**
*   $\dim(\mathbb{R}^n) = n$
*   $\dim(P_n) = n+1$
*   $\dim(M_{m \times n}) = m \times n$

#### 3.5 Properties relating Basis, Dimension, and Linear Independence

Let $V$ be a vector space with dimension $d$.
*   Any set of $d$ linearly independent vectors in $V$ forms a basis for $V$.
*   Any set of $d$ vectors that spans $V$ forms a basis for $V$.
*   A set of $k$ vectors in $V$ is linearly independent if $k \le d$. If $k > d$, it is linearly dependent.
*   A set of $k$ vectors in $V$ spans $V$ if $k \ge d$. If $k < d$, it does not span $V$.

---

### 4. Rank of a Matrix

#### 4.1 Column Space and Row Space

Given an $m \times n$ matrix $A$:
*   **Column Space ($C(A)$):** The span of the column vectors of $A$. It is a subspace of $\mathbb{R}^m$.
*   **Row Space ($R(A)$):** The span of the row vectors of $A$. It is a subspace of $\mathbb{R}^n$.

*(Referenced in: Deisenroth, Faisal, & Ong - Chapter 2: Vector Spaces)*
*(Referenced in: Strang - Chapter 3: Vector Spaces)*

#### 4.2 Rank of a Matrix

The **rank** of a matrix $A$, denoted as $\text{rank}(A)$, is the dimension of its column space (and equivalently, the dimension of its row space).

*   $\text{rank}(A) = \dim(C(A)) = \dim(R(A))$
*   The rank is also equal to the maximum number of linearly independent columns of $A$.
*   The rank is also equal to the maximum number of linearly independent rows of $A$.

**Key Point:** The rank of a matrix tells us the number of linearly independent rows or columns it has.

*(Referenced in: Deisenroth, Faisal, & Ong - Chapter 2: Vector Spaces)*
*(Referenced in: Strang - Chapter 3: Vector Spaces)*

#### 4.3 Calculating Rank

The rank can be calculated by:
1.  Finding a basis for the column space (or row space) and counting the number of vectors in the basis.
2.  Reducing the matrix to **Row Echelon Form (REF)** or **Reduced Row Echelon Form (RREF)**. The rank is the number of non-zero rows in the REF or RREF.

**Example:**
Consider the matrix $A = \begin{bmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 0 & 1 & 1 \end{bmatrix}$.

1.  **Row Reduction:**
    $A \xrightarrow{R_2 \leftarrow R_2 - 2R_1} \begin{bmatrix} 1 & 2 & 3 \\ 0 & 0 & 0 \\ 0 & 1 & 1 \end{bmatrix}$
    $\xrightarrow{R_2 \leftrightarrow R_3} \begin{bmatrix} 1 & 2 & 3 \\ 0 & 1 & 1 \\ 0 & 0 & 0 \end{bmatrix}$ (This is Row Echelon Form)

2.  **Count Non-Zero Rows:** There are 2 non-zero rows.
    Therefore, $\text{rank}(A) = 2$.

**Verification:**
The original columns are $\mathbf{v}_1 = [1, 2, 0]^T$, $\mathbf{v}_2 = [2, 4, 1]^T$, $\mathbf{v}_3 = [3, 6, 1]^T$.
We check for linear independence: $c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + c_3\mathbf{v}_3 = \mathbf{0}$.
The row-reduced matrix tells us that the pivot columns are the first and second columns. This implies that the first two columns of the original matrix are linearly independent, and the third column can be expressed as a linear combination of the first two.

Let's check: $c_1[1, 2, 0]^T + c_2[2, 4, 1]^T = [3, 6, 1]^T$
$c_1 + 2c_2 = 3$
$2c_1 + 4c_2 = 6$
$c_2 = 1$

From $c_2 = 1$, the first equation becomes $c_1 + 2(1) = 3 \implies c_1 = 1$.
The second equation becomes $2(1) + 4(1) = 6$, which is true.
So, $1\mathbf{v}_1 + 1\mathbf{v}_2 = \mathbf{v}_3$. Thus, the columns are linearly dependent. The first two columns are linearly independent. The dimension of the column space is 2.

#### 4.4 Rank-Nullity Theorem

For an $m \times n$ matrix $A$, the **Rank-Nullity Theorem** states:
$\text{rank}(A) + \text{nullity}(A) = n$
where $\text{nullity}(A)$ is the dimension of the null space of $A$ (the set of all solutions to $A\mathbf{x} = \mathbf{0}$). The null space is also called the kernel of the linear transformation defined by $A$.

*(Referenced in: Strang - Chapter 3: Vector Spaces)*
*(Referenced in: Boyd & Vandenberghe - Introduction to Applied Linear Algebra)*

**Example:**
For the matrix $A = \begin{bmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 0 & 1 & 1 \end{bmatrix}$, we found $\text{rank}(A) = 2$.
The matrix is $3 \times 3$, so $n=3$.
$\text{nullity}(A) = n - \text{rank}(A) = 3 - 2 = 1$.
The null space is the set of solutions to $A\mathbf{x} = \mathbf{0}$. We found $c_1 = -1, c_2 = -1, c_3 = 1$ as a non-trivial solution earlier for $c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + c_3\mathbf{v}_3 = \mathbf{0}$. This corresponds to the null space solution $\mathbf{x} = [-1, -1, 1]^T$. The nullity is indeed 1.

---

### 5. Connection to Systems of Linear Equations

The concepts of vector spaces, linear independence, basis, and rank are fundamental to understanding and solving systems of linear equations ($A\mathbf{x} = \mathbf{b}$).

*   **Existence of Solutions:** A system $A\mathbf{x} = \mathbf{b}$ has a solution if and only if $\mathbf{b}$ is in the column space of $A$, i.e., $\mathbf{b} \in C(A)$.
*   **Uniqueness of Solutions:**
    *   If a solution exists, it is unique if and only if the null space of $A$ contains only the zero vector (i.e., $\text{nullity}(A) = 0$, which implies $\text{rank}(A) = n$). This means the columns of $A$ are linearly independent.
    *   If a solution exists and $\text{nullity}(A) > 0$, there are infinitely many solutions. The general solution is of the form $\mathbf{x}_p + \mathbf{x}_h$, where $\mathbf{x}_p$ is a particular solution and $\mathbf{x}_h$ is any vector in the null space of $A$.
*   **Number of Variables and Rank:**
    *   If $\text{rank}(A) = n$ (number of columns), then the columns are linearly independent, and the system $A\mathbf{x} = \mathbf{b}$ has at most one solution.
    *   If $\text{rank}(A) < n$, then the columns are linearly dependent, and the system $A\mathbf{x} = \mathbf{b}$ has either no solutions or infinitely many solutions.

*(Referenced in: Deisenroth, Faisal, & Ong - Chapter 2: Vector Spaces)*
*(Referenced in: Strang - Chapter 1: Systems of Linear Equations)*

---

### 6. Importance in Machine Learning

These concepts are crucial for many machine learning algorithms:

*   **Feature Representation:** Data points are often represented as vectors in high-dimensional spaces. Understanding vector spaces allows us to manipulate and analyze this data.
*   **Dimensionality Reduction (PCA):** Principal Component Analysis finds a lower-dimensional subspace (a basis) that captures most of the variance in the data. This involves understanding the span and basis of the data's feature space.
*   **Linear Regression:** The core of linear regression involves solving systems of linear equations ($A\mathbf{x} = \mathbf{b}$). The rank of the design matrix $A$ determines whether there's a unique solution or infinitely many solutions, which relates to multicollinearity in features.
*   **Support Vector Machines (SVMs):** SVMs operate in high-dimensional feature spaces and often involve finding hyperplanes, which are defined by linear combinations of basis vectors.
*   **Matrix Factorization (e.g., SVD):** Singular Value Decomposition decomposes a matrix into lower-rank matrices, revealing underlying structures and important subspaces.
*   **Understanding Model Complexity:** The dimension of a feature space or the rank of a model's parameter matrix can provide insights into the model's capacity and potential for overfitting.

*(Referenced in: Deisenroth, Faisal, & Ong - Throughout the book, especially Chapters 1-4)*
*(Referenced in: Bishop - Chapter 3: Linear Models for Regression, Chapter 6: Kernel Methods)*
*(Referenced in: Boyd & Vandenberghe - Introduction to Applied Linear Algebra)*

---

### 7. Practice Questions

**Question 1:**
Determine if the set of vectors $\{\begin{bmatrix} 1 \\ 0 \\ 1 \end{bmatrix}, \begin{bmatrix} 0 \\ 1 \\ 1 \end{bmatrix}, \begin{bmatrix} 1 \\ 1 \\ 2 \end{bmatrix}\}$ in $\mathbb{R}^3$ is linearly independent.

**Question 2:**
Find a basis for the subspace $W = \{\begin{bmatrix} x \\ y \\ z \end{bmatrix} \in \mathbb{R}^3 \mid x - 2y + z = 0\}$. What is the dimension of $W$?

**Question 3:**
Calculate the rank of the matrix $A = \begin{bmatrix} 1 & 2 & 1 \\ 3 & 6 & 3 \\ -2 & -4 & -2 \end{bmatrix}$.

**Question 4:**
Consider the matrix $A = \begin{bmatrix} 1 & 1 \\ 2 & 2 \end{bmatrix}$.
a) Find the rank of $A$.
b) Find the nullity of $A$.
c) Describe the null space of $A$.

---

### 8. Answers to Practice Questions

**Answer 1:**
To check for linear independence, we form a matrix with the vectors as columns and solve $A\mathbf{c} = \mathbf{0}$:
$\begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 1 & 1 & 2 \end{bmatrix} \begin{bmatrix} c_1 \\ c_2 \\ c_3 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$

Perform row reduction on the augmented matrix:
$\begin{bmatrix} 1 & 0 & 1 & | & 0 \\ 0 & 1 & 1 & | & 0 \\ 1 & 1 & 2 & | & 0 \end{bmatrix} \xrightarrow{R_3 \leftarrow R_3 - R_1} \begin{bmatrix} 1 & 0 & 1 & | & 0 \\ 0 & 1 & 1 & | & 0 \\ 0 & 1 & 1 & | & 0 \end{bmatrix} \xrightarrow{R_3 \leftarrow R_3 - R_2} \begin{bmatrix} 1 & 0 & 1 & | & 0 \\ 0 & 1 & 1 & | & 0 \\ 0 & 0 & 0 & | & 0 \end{bmatrix}$

The reduced form shows that there is a free variable ($c_3$). For example, if $c_3 = 1$, then $c_2 = -1$ and $c_1 = -1$.
So, $-1\begin{bmatrix} 1 \\ 0 \\ 1 \end{bmatrix} - 1\begin{bmatrix} 0 \\ 1 \\ 1 \end{bmatrix} + 1\begin{bmatrix} 1 \\ 1 \\ 2 \end{bmatrix} = \begin{bmatrix} -1 \\ 0 \\ -1 \end{bmatrix} + \begin{bmatrix} 0 \\ -1 \\ -1 \end{bmatrix} + \begin{bmatrix} 1 \\ 1 \\ 2 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$.
Since there are non-zero scalars, the vectors are **linearly dependent**.

**Answer 2:**
The subspace is defined by the equation $x - 2y + z = 0$. We can express one variable in terms of others, e.g., $x = 2y - z$.
Any vector in this subspace can be written as:
$\begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} 2y - z \\ y \\ z \end{bmatrix} = y \begin{bmatrix} 2 \\ 1 \\ 0 \end{bmatrix} + z \begin{bmatrix} -1 \\ 0 \\ 1 \end{bmatrix}$
The vectors $\mathbf{v}_1 = \begin{bmatrix} 2 \\ 1 \\ 0 \end{bmatrix}$ and $\mathbf{v}_2 = \begin{bmatrix} -1 \\ 0 \\ 1 \end{bmatrix}$ span the subspace.
To check if they form a basis, we check for linear independence:
$c_1 \begin{bmatrix} 2 \\ 1 \\ 0 \end{bmatrix} + c_2 \begin{bmatrix} -1 \\ 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$
$\begin{bmatrix} 2c_1 - c_2 \\ c_1 \\ c_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$
From $c_2=0$, and $c_1=0$, we get $2(0)-0=0$, which is true. Thus, the only solution is $c_1=0, c_2=0$.
The vectors are linearly independent.
Therefore, a basis for $W$ is $\left\{\begin{bmatrix} 2 \\ 1 \\ 0 \end{bmatrix}, \begin{bmatrix} -1 \\ 0 \\ 1 \end{bmatrix}\right\}$.
The dimension of $W$ is the number of vectors in the basis, which is **2**.

**Answer 3:**
Reduce the matrix $A$ to Row Echelon Form:
$A = \begin{bmatrix} 1 & 2 & 1 \\ 3 & 6 & 3 \\ -2 & -4 & -2 \end{bmatrix} \xrightarrow{R_2 \leftarrow R_2 - 3R_1} \begin{bmatrix} 1 & 2 & 1 \\ 0 & 0 & 0 \\ -2 & -4 & -2 \end{bmatrix} \xrightarrow{R_3 \leftarrow R_3 + 2R_1} \begin{bmatrix} 1 & 2 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix}$
The number of non-zero rows is 1.
The **rank of $A$ is 1**.

**Answer 4:**
$A = \begin{bmatrix} 1 & 1 \\ 2 & 2 \end{bmatrix}$
a) Reduce $A$ to REF:
$\begin{bmatrix} 1 & 1 \\ 2 & 2 \end{bmatrix} \xrightarrow{R_2 \leftarrow R_2 - 2R_1} \begin{bmatrix} 1 & 1 \\ 0 & 0 \end{bmatrix}$
The number of non-zero rows is 1. So, **rank(A) = 1**.

b) The matrix $A$ is $2 \times 2$, so $n=2$.
Using the Rank-Nullity Theorem: $\text{rank}(A) + \text{nullity}(A) = n$
$1 + \text{nullity}(A) = 2$
**nullity(A) = 1**.

c) The null space consists of solutions to $A\mathbf{x} = \mathbf{0}$:
$\begin{bmatrix} 1 & 1 \\ 0 & 0 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$
This gives the equation $x_1 + x_2 = 0$, which implies $x_1 = -x_2$.
Let $x_2 = t$ (a free variable). Then $x_1 = -t$.
The solution vector is $\begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} -t \\ t \end{bmatrix} = t \begin{bmatrix} -1 \\ 1 \end{bmatrix}$.
The null space is the span of the vector $\begin{bmatrix} -1 \\ 1 \end{bmatrix}$.
The **null space of A is { t[-1, 1]^T | t in R }**.

---

### 9. Important Points to Remember

*   A vector space is a set with two operations (addition, scalar multiplication) that satisfy 10 axioms.
*   A subspace is a subset that is itself a vector space.
*   Linear independence means no vector in a set can be written as a linear combination of the others.
*   A basis is a linearly independent set that spans a vector space. It's the minimal set of "building blocks."
*   The dimension of a vector space is the number of vectors in its basis.
*   The rank of a matrix is the dimension of its column space (or row space), which equals the maximum number of linearly independent columns/rows.
*   Row reduction is a key tool for determining linear independence, finding bases, and calculating rank.
*   The Rank-Nullity Theorem connects rank, nullity, and the number of columns of a matrix.
*   These concepts directly inform our understanding of the solvability and uniqueness of solutions to systems of linear equations ($A\mathbf{x} = \mathbf{b}$).

---
