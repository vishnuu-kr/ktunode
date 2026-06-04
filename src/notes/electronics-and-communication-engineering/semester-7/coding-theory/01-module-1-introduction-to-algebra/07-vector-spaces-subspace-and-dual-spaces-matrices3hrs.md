---
title: "Vector spaces – Subspace and Dual spaces-matrices(3hrs)"
subject: "CODING THEORY"
module: "Module 1: Introduction to Algebra"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff21b"
status: "completed"
scrapedAt: "2026-05-23T18:05:06.090Z"
---
# CODING THEORY: Module 1 - Introduction to Algebra

## Topic: Vector Spaces – Subspace and Dual Spaces – Matrices (3 hours)

This module introduces fundamental algebraic concepts essential for understanding coding theory. We will explore vector spaces, a cornerstone for linear codes, delve into subspaces and dual spaces, and understand the role of matrices in representing and manipulating these structures.

---

### 1. Vector Spaces

**Learning Outcomes:**
*   Understand the definition and properties of a vector space.
*   Identify common examples of vector spaces relevant to coding theory.

**Key Concepts and Definitions:**

A **vector space** over a field $\mathbb{F}$ is a non-empty set $V$ on which two operations are defined:
1.  **Vector Addition:** $+ : V \times V \to V$
2.  **Scalar Multiplication:** $\cdot : \mathbb{F} \times V \to V$

These operations must satisfy the following axioms:

**Axioms for Vector Addition:**
For all $\mathbf{u}, \mathbf{v}, \mathbf{w} \in V$:
1.  **Commutativity:** $\mathbf{u} + \mathbf{v} = \mathbf{v} + \mathbf{u}$
2.  **Associativity:** $(\mathbf{u} + \mathbf{v}) + \mathbf{w} = \mathbf{u} + (\mathbf{v} + \mathbf{w})$
3.  **Existence of Zero Vector:** There exists a unique vector $\mathbf{0} \in V$ such that $\mathbf{u} + \mathbf{0} = \mathbf{u}$ for all $\mathbf{u} \in V$.
4.  **Existence of Additive Inverse:** For every $\mathbf{u} \in V$, there exists a unique vector $-\mathbf{u} \in V$ such that $\mathbf{u} + (-\mathbf{u}) = \mathbf{0}$.

**Axioms for Scalar Multiplication:**
For all $a, b \in \mathbb{F}$ and $\mathbf{u}, \mathbf{v} \in V$:
5.  **Distributivity over Vector Addition:** $a \cdot (\mathbf{u} + \mathbf{v}) = a \cdot \mathbf{u} + a \cdot \mathbf{v}$
6.  **Distributivity over Scalar Addition:** $(a + b) \cdot \mathbf{u} = a \cdot \mathbf{u} + b \cdot \mathbf{u}$
7.  **Associativity of Scalar Multiplication:** $(ab) \cdot \mathbf{u} = a \cdot (b \cdot \mathbf{u})$
8.  **Existence of Multiplicative Identity:** $1 \cdot \mathbf{u} = \mathbf{u}$, where $1$ is the multiplicative identity in $\mathbb{F}$.

**Fields ($\mathbb{F}$):**
In coding theory, the most common fields are:
*   The field of real numbers, $\mathbb{R}$.
*   The field of complex numbers, $\mathbb{C}$.
*   **Finite fields (Galois Fields), denoted as GF(q) or $\mathbb{F}_q$.** These are crucial for constructing practical error-correcting codes. The simplest finite field is $\mathbb{F}_2 = \{0, 1\}$, which is the field of binary numbers.

**Examples of Vector Spaces:**

*   **$\mathbb{F}^n$:** The set of all ordered $n$-tuples of elements from a field $\mathbb{F}$.
    *   **Example:** $\mathbb{F}_2^n$ is the set of all binary strings of length $n$. These are the fundamental building blocks for binary linear codes.
        *   Vectors in $\mathbb{F}_2^3$: $\{000, 001, 010, 011, 100, 101, 110, 111\}$.
        *   Vector addition in $\mathbb{F}_2^3$ is component-wise addition modulo 2 (XOR operation).
            *   $101 + 011 = (1+0)\,(0+1)\,(1+1) \pmod 2 = 110$.
        *   Scalar multiplication in $\mathbb{F}_2^3$ with $a \in \{0, 1\}$:
            *   $0 \cdot 101 = 000$
            *   $1 \cdot 101 = 101$

*   **Polynomials over a field:** The set of all polynomials with coefficients from $\mathbb{F}$.
    *   **Example:** $P_n(\mathbb{F}_2)$, the set of all polynomials of degree at most $n-1$ with coefficients in $\mathbb{F}_2$.

**Relevance to Coding Theory (CO1):**
Vector spaces provide the mathematical framework for **linear codes**. A linear code is a subspace of $\mathbb{F}^n$. The algebraic structure of vector spaces allows us to efficiently design, encode, decode, and analyze error-correcting codes.

**Important Points to Remember:**
*   A vector space requires two operations: vector addition and scalar multiplication.
*   All eight axioms must be satisfied for a set and operations to form a vector space.
*   Finite fields, especially $\mathbb{F}_2$, are critical for practical coding.

---

### 2. Subspaces

**Learning Outcomes:**
*   Define a subspace and its properties.
*   Identify subspaces within a given vector space.
*   Understand the concept of a basis and dimension.

**Key Concepts and Definitions:**

A **non-empty subset $W$ of a vector space $V$ over a field $\mathbb{F}$ is a subspace of $V$ if $W$ is itself a vector space over $\mathbb{F}$ under the same operations of vector addition and scalar multiplication as in $V$.**

To check if a subset $W$ is a subspace, we can use the following equivalent conditions:

**Subspace Test:** A non-empty subset $W$ of a vector space $V$ is a subspace of $V$ if and only if:
1.  **Closure under Addition:** For all $\mathbf{u}, \mathbf{v} \in W$, $\mathbf{u} + \mathbf{v} \in W$.
2.  **Closure under Scalar Multiplication:** For all $a \in \mathbb{F}$ and $\mathbf{u} \in W$, $a \cdot \mathbf{u} \in W$.

*(Note: If $W$ is non-empty, it must contain the zero vector. If $\mathbf{u} \in W$, then $0 \cdot \mathbf{u} = \mathbf{0} \in W$. So, checking for the zero vector is implicitly covered by closure under scalar multiplication).*

**Examples of Subspaces:**

*   **Trivial Subspaces:** For any vector space $V$, the set containing only the zero vector, $\{\mathbf{0}\}$, is a subspace. The entire space $V$ is also a subspace of itself.
*   **Subspaces of $\mathbb{F}_2^3$:**
    *   $W = \{\mathbf{0}\} = \{000\}$ is a subspace (dimension 0).
    *   $W = \mathbb{F}_2^3$ is a subspace (dimension 3).
    *   Lines passing through the origin: For example, $W = \{000, 101\}$ is a subspace (dimension 1). Here, $101 + 101 = 000$ (mod 2) and $0 \cdot 101 = 000$, $1 \cdot 101 = 101$.
    *   Planes passing through the origin: For example, $W = \{000, 100, 010, 110\}$ is a subspace (dimension 2). This is the set of all vectors of the form $a \cdot 100 + b \cdot 010$, where $a, b \in \mathbb{F}_2$.

**Basis and Dimension:**

*   **Linear Independence:** A set of vectors $\{\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k\}$ in a vector space $V$ is **linearly independent** if the only solution to the equation $c_1 \mathbf{v}_1 + c_2 \mathbf{v}_2 + \ldots + c_k \mathbf{v}_k = \mathbf{0}$ (where $c_i \in \mathbb{F}$) is $c_1 = c_2 = \ldots = c_k = 0$.
*   **Span:** The **span** of a set of vectors $\{\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k\}$, denoted as $\text{span}\{\mathbf{v}_1, \ldots, \mathbf{v}_k\}$, is the set of all possible linear combinations of these vectors: $\{c_1 \mathbf{v}_1 + \ldots + c_k \mathbf{v}_k \mid c_i \in \mathbb{F}\}$. The span of any set of vectors is a subspace.
*   **Basis:** A **basis** for a vector space $V$ is a set of linearly independent vectors that also span $V$.
*   **Dimension:** The **dimension** of a vector space $V$, denoted as $\dim(V)$, is the number of vectors in any basis for $V$. If $V$ is finite-dimensional, its dimension is a non-negative integer.

**Example of Basis and Dimension:**

*   Consider the vector space $\mathbb{F}_2^3$.
    *   The set of standard basis vectors is $B = \{100, 010, 001\}$.
    *   These vectors are linearly independent: $c_1 \cdot 100 + c_2 \cdot 010 + c_3 \cdot 001 = 000 \implies (c_1, c_2, c_3) = (0,0,0)$ in $\mathbb{F}_2$.
    *   These vectors span $\mathbb{F}_2^3$: Any vector $abc$ can be written as $a \cdot 100 + b \cdot 010 + c \cdot 001$.
    *   Therefore, $B$ is a basis for $\mathbb{F}_2^3$.
    *   The dimension of $\mathbb{F}_2^3$ is $|B| = 3$.

**Relevance to Coding Theory (CO1, CO2, CO3, CO4):**
Linear codes are precisely subspaces of $\mathbb{F}_q^n$. The dimension of a linear code (a subspace) is its **message length** or **dimension**, often denoted by $k$. The dimension of the ambient space $\mathbb{F}_q^n$ is $n$, the **block length**.
The number of parity check equations needed to define a linear code is $n-k$, which relates to the dimension of the dual code (discussed next).
Understanding bases allows us to construct generator matrices for linear codes, which are matrices whose rows form a basis for the code.

**Important Points to Remember:**
*   A subspace must be closed under addition and scalar multiplication.
*   The dimension of a vector space is the size of its basis.
*   Linear codes are subspaces of $\mathbb{F}_q^n$.

---

### 3. Dual Spaces

**Learning Outcomes:**
*   Define the dual space and the concept of linear functionals.
*   Understand the relationship between a subspace and its orthogonal complement.
*   Explain the significance of the dual space in coding theory.

**Key Concepts and Definitions:**

Let $V$ be a vector space over a field $\mathbb{F}$. The **dual space** of $V$, denoted by $V^*$, is the vector space of all **linear functionals** on $V$.

*   **Linear Functional:** A linear functional is a linear map from $V$ to the underlying field $\mathbb{F}$. That is, a function $f: V \to \mathbb{F}$ such that for all $\mathbf{u}, \mathbf{v} \in V$ and $a \in \mathbb{F}$:
    *   $f(\mathbf{u} + \mathbf{v}) = f(\mathbf{u}) + f(\mathbf{v})$
    *   $f(a \cdot \mathbf{u}) = a \cdot f(\mathbf{u})$

**Example of Linear Functionals and Dual Spaces:**

*   Let $V = \mathbb{F}_2^3$. $V^*$, the dual space, consists of linear maps from $\mathbb{F}_2^3$ to $\mathbb{F}_2$.
    *   A linear functional $f$ on $\mathbb{F}_2^3$ can be represented by a row vector $\mathbf{h} \in \mathbb{F}_2^3$ such that $f(\mathbf{v}) = \mathbf{h} \cdot \mathbf{v}^T$ (dot product, where $\mathbf{v}^T$ is the column vector representation of $\mathbf{v}$).
    *   For instance, if $\mathbf{h} = 101$, the functional is $f(v_1v_2v_3) = 1 \cdot v_1 + 0 \cdot v_2 + 1 \cdot v_3 \pmod 2$.
        *   $f(110) = 1 \cdot 1 + 0 \cdot 1 + 1 \cdot 0 = 1 \pmod 2$.
        *   $f(011) = 1 \cdot 0 + 0 \cdot 1 + 1 \cdot 1 = 1 \pmod 2$.
*   If $\dim(V) = n$, then $\dim(V^*) = n$. A basis for $V^*$ can be constructed from a basis for $V$.

**Orthogonal Complement:**

Given a subspace $W$ of a vector space $V$, the **orthogonal complement** of $W$, denoted by $W^\perp$, is the set of all vectors in $V$ that are orthogonal to every vector in $W$. The orthogonality is defined with respect to a **bilinear form**. For vector spaces over $\mathbb{F}_q$, the standard dot product is commonly used.

$$W^\perp = \{\mathbf{v} \in V \mid \mathbf{v} \cdot \mathbf{w} = 0 \text{ for all } \mathbf{w} \in W\}$$

**Properties of the Orthogonal Complement:**
*   $W^\perp$ is a subspace of $V$.
*   If $\dim(V) = n$ and $\dim(W) = k$, then $\dim(W^\perp) = n - k$.
*   $(W^\perp)^\perp = W$.
*   $W \cap W^\perp = \{\mathbf{0}\}$.

**Relationship to Dual Spaces:**
For a finite-dimensional vector space $V$ and a non-degenerate symmetric bilinear form (like the dot product), there is a natural isomorphism between $V^*$ and $V$. This allows us to identify linear functionals with vectors in $V$, and the orthogonal complement $W^\perp$ can be directly related to the annihilator of $W$ in $V^*$.

**Relevance to Coding Theory (CO2, CO3, CO4):**
The orthogonal complement is fundamental to the theory of **linear codes**.
*   A linear code $C$ is a subspace of $\mathbb{F}_q^n$.
*   The **dual code** $C^\perp$ is the set of all codewords that are orthogonal to every codeword in $C$.
    *   $C^\perp = \{\mathbf{v} \in \mathbb{F}_q^n \mid \mathbf{v} \cdot \mathbf{c} = 0 \text{ for all } \mathbf{c} \in C\}$
*   If $C$ has dimension $k$ and length $n$, then $C^\perp$ has dimension $n-k$.
*   **Parity Check Matrix:** The rows of the parity check matrix $H$ for a linear code $C$ form a basis for the dual code $C^\perp$. This means that a codeword $\mathbf{c}$ is in $C$ if and only if $\mathbf{h} \cdot \mathbf{c}^T = 0$ for all rows $\mathbf{h}$ of $H$. This is the defining property of linear codes.
    *   $C = \{\mathbf{c} \in \mathbb{F}_q^n \mid H \mathbf{c}^T = \mathbf{0}\}$.

**Example:**
Let $C$ be a linear code in $\mathbb{F}_2^4$ with generator matrix:
$G = \begin{pmatrix} 1 & 0 & 1 & 0 \\ 0 & 1 & 0 & 1 \end{pmatrix}$
Here, $n=4$ and $\dim(C) = k = 2$.
The codewords are linear combinations of the rows of $G$. For example, $1010 + 0101 = 1111$ is a codeword.

The dual code $C^\perp$ will have dimension $n-k = 4-2=2$. The rows of the parity check matrix $H$ will be orthogonal to the rows of $G$. We can find $H$ such that $GH^T = 0$. A possible $H$ is:
$H = \begin{pmatrix} 1 & 0 & 1 & 0 \\ 0 & 1 & 0 & 1 \end{pmatrix}^T = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 0 \\ 0 & 1 \end{pmatrix}$
The rows of $H$ are $\{1010, 0101\}$. These form a basis for $C^\perp$.
Let's check orthogonality:
$1010 \cdot 1111^T = 1+1+1+1 = 0 \pmod 2$.
$0101 \cdot 1111^T = 1+1+1+1 = 0 \pmod 2$.
This confirms $C^\perp$ is the set of vectors orthogonal to all codewords in $C$.

**Important Points to Remember:**
*   The dual space consists of linear functionals.
*   The orthogonal complement $W^\perp$ is crucial for defining the parity check matrix of a linear code.
*   $\dim(C^\perp) = n - \dim(C)$.

---

### 4. Matrices

**Learning Outcomes:**
*   Understand the definition and basic operations of matrices.
*   Relate matrices to linear transformations and vector spaces.
*   Recognize the role of matrices in representing linear codes.

**Key Concepts and Definitions:**

A **matrix** is a rectangular array of numbers, symbols, or expressions, arranged in rows and columns. An $m \times n$ matrix $A$ has $m$ rows and $n$ columns.

$$A = \begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{pmatrix}$$

**Matrix Operations:**

*   **Addition:** Two matrices of the same dimensions can be added element-wise.
*   **Scalar Multiplication:** Multiplying a matrix by a scalar involves multiplying each element of the matrix by that scalar.
*   **Matrix Multiplication:** The product of an $m \times n$ matrix $A$ and an $n \times p$ matrix $B$ is an $m \times p$ matrix $C=AB$, where the element $c_{ij}$ is the dot product of the $i$-th row of $A$ and the $j$-th column of $B$.
    $$c_{ij} = \sum_{k=1}^n a_{ik} b_{kj}$$

**Matrices and Linear Transformations:**

Every linear transformation $T: V \to W$ between finite-dimensional vector spaces $V$ and $W$ can be represented by a matrix once bases for $V$ and $W$ are chosen. If $\dim(V)=n$ and $\dim(W)=m$, the matrix will be $m \times n$.

*   **Matrix Representation of a Vector:** A vector $\mathbf{v} \in V$ can be represented as a column vector (an $n \times 1$ matrix) with respect to a chosen basis.
*   **Matrix Representation of a Linear Transformation:** If $T: \mathbb{F}^n \to \mathbb{F}^m$ is a linear transformation, its matrix representation $A$ is the $m \times n$ matrix whose columns are the images of the standard basis vectors $e_j$: $A = [T(e_1) T(e_2) \ldots T(e_n)]$. Then, for any vector $\mathbf{v}$, $T(\mathbf{v}) = A \mathbf{v}$.

**Matrices in Coding Theory:**

Matrices are fundamental for defining and working with linear codes.

*   **Generator Matrix ($G$):** An $k \times n$ matrix whose rows form a basis for a linear code $C$ of dimension $k$ and block length $n$. Any codeword $\mathbf{c}$ can be generated by multiplying a row vector $\mathbf{m}$ of length $k$ (the message vector) by $G$: $\mathbf{c} = \mathbf{m}G$.
    *   Example: For $C$ in $\mathbb{F}_2^4$ with $k=2$, $n=4$, $G = \begin{pmatrix} 1 & 0 & 1 & 0 \\ 0 & 1 & 0 & 1 \end{pmatrix}$.
        *   Message $\mathbf{m} = 10$. Codeword $\mathbf{c} = 10 \cdot \begin{pmatrix} 1 & 0 & 1 & 0 \\ 0 & 1 & 0 & 1 \end{pmatrix} = 1 \cdot (1010) + 0 \cdot (0101) = 1010$.
        *   Message $\mathbf{m} = 01$. Codeword $\mathbf{c} = 01 \cdot G = 0 \cdot (1010) + 1 \cdot (0101) = 0101$.
        *   Message $\mathbf{m} = 11$. Codeword $\mathbf{c} = 11 \cdot G = 1 \cdot (1010) + 1 \cdot (0101) = 1010 + 0101 = 1111$.

*   **Parity Check Matrix ($H$):** An $(n-k) \times n$ matrix whose rows form a basis for the dual code $C^\perp$. A vector $\mathbf{v}$ is a codeword in $C$ if and only if $H \mathbf{v}^T = \mathbf{0}$.
    *   Example: For the same code $C$, $H = \begin{pmatrix} 1 & 0 & 1 & 0 \\ 0 & 1 & 0 & 1 \end{pmatrix}^T = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 0 \\ 0 & 1 \end{pmatrix}$.
        *   Codeword $\mathbf{c} = 1111$.
        *   $H \mathbf{c}^T = \begin{pmatrix} 1 & 0 & 1 & 0 \\ 0 & 1 & 0 & 1 \end{pmatrix} \begin{pmatrix} 1 \\ 1 \\ 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 1 \cdot 1 + 0 \cdot 1 + 1 \cdot 1 + 0 \cdot 1 \\ 0 \cdot 1 + 1 \cdot 1 + 0 \cdot 1 + 1 \cdot 1 \end{pmatrix} = \begin{pmatrix} 1+0+1+0 \\ 0+1+0+1 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \pmod 2$.
        *   This confirms $1111$ is a codeword.

**Systematic Form:**
A generator matrix $G$ is in **systematic form** if it is of the form $G = [I_k | P]$, where $I_k$ is the $k \times k$ identity matrix and $P$ is a $k \times (n-k)$ matrix.
Correspondingly, the parity check matrix $H$ for a code with a systematic generator matrix is of the form $H = [-P^T | I_{n-k}]$ or, over $\mathbb{F}_2$, $H = [P^T | I_{n-k}]$.

**Relevance to Coding Theory (CO2, CO3, CO4):**
*   Generator matrices define the encoding process: $\mathbf{c} = \mathbf{m}G$.
*   Parity check matrices define the decoding process: Syndrome calculation $S = H \mathbf{r}^T$ (where $\mathbf{r}$ is the received vector). If $S = \mathbf{0}$, the received vector is a codeword. If $S \neq \mathbf{0}$, it indicates an error.
*   The rank of the generator matrix must be $k$. The rank of the parity check matrix must be $n-k$.
*   Matrices are used to construct efficient codes with desired properties, such as minimum distance for error detection and correction.

**Important Points to Remember:**
*   Matrices are fundamental tools for representing linear codes.
*   The generator matrix defines encoding.
*   The parity check matrix defines the code membership and aids in decoding.
*   The relationship $GH^T = 0$ (or $G^T H^T = 0$ depending on convention) is critical.

---

### Practice Questions

1.  **Vector Space Identification:**
    Let $\mathbb{F} = \mathbb{F}_2$. Consider the set $V = \{ (x, y) \mid x, y \in \mathbb{F}_2 \}$. Is $V$ a vector space over $\mathbb{F}_2$? Justify your answer by checking the axioms. If it is, what is its dimension?

2.  **Subspace Verification:**
    Let $V = \mathbb{F}_2^3$. Is the set $W = \{ (x, y, z) \in \mathbb{F}_2^3 \mid x+y+z = 0 \}$ a subspace of $V$? Justify.

3.  **Dual Space and Orthogonal Complement:**
    Consider the code $C$ in $\mathbb{F}_2^4$ generated by $G = \begin{pmatrix} 1 & 1 & 0 & 0 \\ 0 & 1 & 1 & 0 \end{pmatrix}$.
    a) What is the dimension of $C$?
    b) Find a parity check matrix $H$ for $C$.
    c) Find the dual code $C^\perp$. What is its dimension?

4.  **Matrix Operations:**
    Let $A = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}$ and $B = \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix}$ over $\mathbb{F}_2$.
    Calculate $A+B$, $2A$ (over $\mathbb{F}_2$), and $AB$.

---

### Answers to Practice Questions

1.  **Vector Space Identification:**
    Yes, $V = \mathbb{F}_2^2$ is a vector space over $\mathbb{F}_2$. The elements are $(0,0), (0,1), (1,0), (1,1)$.
    *   **Vector Addition:** $(x_1, y_1) + (x_2, y_2) = (x_1+x_2 \pmod 2, y_1+y_2 \pmod 2)$. This satisfies commutativity, associativity, existence of zero $(0,0)$, and additive inverses.
    *   **Scalar Multiplication:** $a \cdot (x, y) = (ax \pmod 2, ay \pmod 2)$, where $a \in \{0, 1\}$. This satisfies distributivity and multiplicative identity.
    *   **Dimension:** A basis is $\{(1,0), (0,1)\}$, so the dimension is 2.

2.  **Subspace Verification:**
    $W = \{ (x, y, z) \in \mathbb{F}_2^3 \mid x+y+z = 0 \}$.
    *   **Non-empty:** $(0,0,0)$ satisfies $0+0+0 = 0$, so $W$ is non-empty.
    *   **Closure under Addition:** Let $\mathbf{v}_1 = (x_1, y_1, z_1) \in W$ and $\mathbf{v}_2 = (x_2, y_2, z_2) \in W$.
        Then $x_1+y_1+z_1 = 0$ and $x_2+y_2+z_2 = 0$.
        $\mathbf{v}_1 + \mathbf{v}_2 = (x_1+x_2, y_1+y_2, z_1+z_2)$.
        $(x_1+x_2) + (y_1+y_2) + (z_1+z_2) = (x_1+y_1+z_1) + (x_2+y_2+z_2) = 0 + 0 = 0$.
        So, $\mathbf{v}_1 + \mathbf{v}_2 \in W$.
    *   **Closure under Scalar Multiplication:** Let $\mathbf{v} = (x, y, z) \in W$ and $a \in \mathbb{F}_2$.
        Then $x+y+z = 0$.
        $a \cdot \mathbf{v} = (ax, ay, az)$.
        $ax + ay + az = a(x+y+z) = a(0) = 0$.
        So, $a \cdot \mathbf{v} \in W$.
    Therefore, $W$ is a subspace of $V$. This subspace is the dual of the code spanned by $(1,1,1)$.

3.  **Dual Space and Orthogonal Complement:**
    $G = \begin{pmatrix} 1 & 1 & 0 & 0 \\ 0 & 1 & 1 & 0 \end{pmatrix}$ over $\mathbb{F}_2$.
    a) **Dimension of $C$:** The rows of $G$ are linearly independent (check by inspection). Thus, $\dim(C) = k = 2$.
    b) **Parity Check Matrix $H$:** $H$ must be $(n-k) \times n = (4-2) \times 4 = 2 \times 4$. The rows of $H$ must be orthogonal to the rows of $G$. A common systematic form for $G$ is $[I_k | P]$, where $P = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}$. Wait, the given $G$ is not in systematic form. Let's find a systematic $G'$ first by row operations.
        $G = \begin{pmatrix} 1 & 1 & 0 & 0 \\ 0 & 1 & 1 & 0 \end{pmatrix} \xrightarrow{R1 \leftarrow R1+R2} \begin{pmatrix} 1 & 0 & 1 & 0 \\ 0 & 1 & 1 & 0 \end{pmatrix} = G'$.
        This $G'$ is in systematic form $G'=[I_2 | P]$ with $P = \begin{pmatrix} 1 & 0 \\ 1 & 0 \end{pmatrix}$.
        The corresponding parity check matrix $H$ is $[P^T | I_{n-k}]$.
        $P^T = \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix}$.
        $I_{n-k} = I_2 = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$.
        So, $H = \begin{pmatrix} 1 & 1 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}$.
        *(Let's verify $G'H^T = 0$):*
        $G'H^T = \begin{pmatrix} 1 & 0 & 1 & 0 \\ 0 & 1 & 1 & 0 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 1 & 0 \\ 1 & 0 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1+0+1+0 & 0+0+0+0 \\ 0+1+1+0 & 0+0+0+0 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$. This is correct.
    c) **Dual Code $C^\perp$:** The rows of $H$ form a basis for $C^\perp$.
        $H$'s rows are $\{ (1,1,1,0), (0,0,0,1) \}$.
        So, $C^\perp = \text{span}\{(1,1,1,0), (0,0,0,1)\}$.
        The dimension of $C^\perp$ is 2.

4.  **Matrix Operations:**
    $A = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}$, $B = \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix}$ over $\mathbb{F}_2$.
    *   $A+B = \begin{pmatrix} 1+0 & 0+1 \\ 1+1 & 1+1 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix}$ (since $1+1=0$ in $\mathbb{F}_2$).
    *   $2A$: Over $\mathbb{F}_2$, $2A = 0 \cdot A = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$.
    *   $AB = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix} \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix} = \begin{pmatrix} (1)(0)+(0)(1) & (1)(1)+(0)(1) \\ (1)(0)+(1)(1) & (1)(1)+(1)(1) \end{pmatrix} = \begin{pmatrix} 0+0 & 1+0 \\ 0+1 & 1+1 \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ (since $1+1=0$ in $\mathbb{F}_2$).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### References and Further Reading

*   **Error Control Coding: Fundamentals and Applications** by Shu Lin & Daniel J. Costello, Jr. (Prentice Hall Inc, 2nd Edition): Chapters 2 and 3 will extensively cover vector spaces, subspaces, linear codes, and the role of generator and parity check matrices.
*   **Modern Coding Theory** by T. Richardson, R. Urbanke (Cambridge University Press): Provides a rigorous algebraic foundation for coding theory, detailing vector spaces and their properties.
*   **Introduction to Coding Theory** by Ron M Roth (Cambridge University Press): Offers a clear exposition on vector spaces and their application to linear codes.

This module provides the foundational algebraic machinery. Future modules will build upon these concepts to understand specific coding techniques and their error-correcting capabilities.