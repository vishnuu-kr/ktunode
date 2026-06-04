---
title: "LU decomposition"
subject: "NUMERICAL TECHNIQUES ENGINEERING"
module: "Module 1: Motivation and Applications of numerical methods"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf48044646a5"
status: "completed"
scrapedAt: "2026-05-20T18:23:05.268Z"
---
# NUMERICAL TECHNIQUES ENGINEERING

## Module 1: Motivation and Applications of Numerical Methods

### Topic: LU Decomposition

---

### 1. Introduction and Motivation

Numerical methods are essential for solving complex engineering problems that cannot be solved analytically. Many engineering applications, especially in fields like structural analysis, circuit analysis, and fluid dynamics, lead to systems of linear equations. Solving these systems efficiently and accurately is crucial.

**Why LU Decomposition?**

*   **Efficiency for Multiple Right-Hand Sides:** Once a matrix is decomposed into L (lower triangular) and U (upper triangular) matrices, solving the system $Ax = b$ for multiple different vectors $b$ becomes significantly faster compared to performing Gaussian elimination repeatedly.
*   **Matrix Inversion:** LU decomposition provides an efficient way to compute the inverse of a matrix.
*   **Determinant Calculation:** The determinant of a matrix can be easily calculated from its LU decomposition.
*   **Pivoting:** Techniques like partial pivoting can be incorporated to improve numerical stability.

This topic aligns with **CO1: Apply numerical methods to solve linear and nonlinear equations** at a Knowledge Level of K3 (Application). LU decomposition is a direct method for solving linear systems.

---

### 2. Key Concepts and Definitions

#### 2.1. Linear Systems of Equations

A system of linear equations can be represented in matrix form as:

$A\mathbf{x} = \mathbf{b}$

where:
*   $A$ is the coefficient matrix (typically square).
*   $\mathbf{x}$ is the vector of unknowns.
*   $\mathbf{b}$ is the constant vector.

#### 2.2. LU Decomposition (Factorization)

LU decomposition is a method of factorizing a matrix $A$ into the product of a lower triangular matrix $L$ and an upper triangular matrix $U$.

$A = LU$

*   **Lower Triangular Matrix ($L$):** A square matrix where all the entries above the main diagonal are zero.

    $L = \begin{bmatrix}
    l_{11} & 0 & 0 & \dots & 0 \\
    l_{21} & l_{22} & 0 & \dots & 0 \\
    l_{31} & l_{32} & l_{33} & \dots & 0 \\
    \vdots & \vdots & \vdots & \ddots & \vdots \\
    l_{n1} & l_{n2} & l_{n3} & \dots & l_{nn}
    \end{bmatrix}$

*   **Upper Triangular Matrix ($U$):** A square matrix where all the entries below the main diagonal are zero.

    $U = \begin{bmatrix}
    u_{11} & u_{12} & u_{13} & \dots & u_{1n} \\
    0 & u_{22} & u_{23} & \dots & u_{2n} \\
    0 & 0 & u_{33} & \dots & u_{3n} \\
    \vdots & \vdots & \vdots & \ddots & \vdots \\
    0 & 0 & 0 & \dots & u_{nn}
    \end{bmatrix}$

#### 2.3. Types of LU Decomposition

*   **Doolittle's Method:** The diagonal elements of the lower triangular matrix ($L$) are all 1s.

    $L = \begin{bmatrix}
    1 & 0 & 0 & \dots & 0 \\
    l_{21} & 1 & 0 & \dots & 0 \\
    l_{31} & l_{32} & 1 & \dots & 0 \\
    \vdots & \vdots & \vdots & \ddots & \vdots \\
    l_{n1} & l_{n2} & l_{n3} & \dots & 1
    \end{bmatrix}$

*   **Crout's Method:** The diagonal elements of the upper triangular matrix ($U$) are all 1s.

    $U = \begin{bmatrix}
    1 & u_{12} & u_{13} & \dots & u_{1n} \\
    0 & 1 & u_{23} & \dots & u_{2n} \\
    0 & 0 & 1 & \dots & u_{3n} \\
    \vdots & \vdots & \vdots & \ddots & \vdots \\
    0 & 0 & 0 & \dots & 1
    \end{bmatrix}$

*   **Cholesky Decomposition:** For symmetric positive-definite matrices, $A = LL^T$, where $L$ is a lower triangular matrix. This is more computationally efficient.

**Reference:** Chapra & Canale (6th Ed.) discusses LU decomposition and its applications in solving linear systems. Gupta (1995) also provides a detailed explanation of these factorization methods.

---

### 3. Methods for LU Decomposition

#### 3.1. Gaussian Elimination Method

LU decomposition can be achieved by performing Gaussian elimination to transform the matrix $A$ into an upper triangular matrix $U$. The multipliers used during the elimination process can be used to construct the lower triangular matrix $L$.

**Procedure:**

1.  Start with the matrix $A$.
2.  Perform row operations to transform $A$ into an upper triangular matrix $U$. The allowed operations are:
    *   Multiplying a row by a non-zero scalar.
    *   Adding a multiple of one row to another row.
    *   Swapping two rows (this requires tracking permutations, leading to $PA=LU$).
3.  The resulting upper triangular matrix is $U$.
4.  The lower triangular matrix $L$ is constructed using the multipliers. For an element $a_{ij}$ where $i > j$, if we subtract $m_{ij}$ times row $i$ from row $j$, then $l_{ji} = m_{ij}$. The diagonal elements of $L$ are usually set to 1 (Doolittle's method).

**Example (Doolittle's Method - without pivoting):**

Consider the matrix:
$A = \begin{bmatrix}
2 & 1 & -1 \\
-3 & -1 & 2 \\
-2 & 1 & 2
\end{bmatrix}$

We want to find $L$ and $U$ such that $A = LU$.

**Step 1: Transform A into U using Gaussian Elimination.**

*   **Eliminate elements below $a_{11}$:**
    *   $R_2 \leftarrow R_2 + \frac{3}{2}R_1$:
        $\begin{bmatrix}
        2 & 1 & -1 \\
        0 & 1/2 & 1/2 \\
        -2 & 1 & 2
        \end{bmatrix}$
        Multiplier $m_{21} = -3/2$. In $L$, $l_{21} = -m_{21} = 3/2$.
    *   $R_3 \leftarrow R_3 + 1R_1$:
        $\begin{bmatrix}
        2 & 1 & -1 \\
        0 & 1/2 & 1/2 \\
        0 & 2 & 1
        \end{bmatrix}$
        Multiplier $m_{31} = -1$. In $L$, $l_{31} = -m_{31} = 1$.

*   **Eliminate elements below $a_{22}$:**
    *   $R_3 \leftarrow R_3 - 4R_2$:
        $\begin{bmatrix}
        2 & 1 & -1 \\
        0 & 1/2 & 1/2 \\
        0 & 0 & -1
        \end{bmatrix}$
        Multiplier $m_{32} = -2 / (1/2) = -4$. In $L$, $l_{32} = -m_{32} = 4$.

So, $U = \begin{bmatrix}
2 & 1 & -1 \\
0 & 1/2 & 1/2 \\
0 & 0 & -1
\end{bmatrix}$.

**Constructing L (Doolittle's Method):**
The diagonal elements of $L$ are 1. The sub-diagonal elements are the negative of the multipliers used in Gaussian elimination to get zeros in the corresponding positions in $U$.

$L = \begin{bmatrix}
1 & 0 & 0 \\
3/2 & 1 & 0 \\
1 & 4 & 1
\end{bmatrix}$

**Verification:**
$LU = \begin{bmatrix}
1 & 0 & 0 \\
3/2 & 1 & 0 \\
1 & 4 & 1
\end{bmatrix} \begin{bmatrix}
2 & 1 & -1 \\
0 & 1/2 & 1/2 \\
0 & 0 & -1
\end{bmatrix} = \begin{bmatrix}
2 & 1 & -1 \\
3 & 3/4 + 1/2 & -3/2 + 1/2 \\
2 & 1/2 + 2 & -1 + 2
\end{bmatrix} = \begin{bmatrix}
2 & 1 & -1 \\
3 & 5/4 & -1 \\
2 & 5/2 & 1
\end{bmatrix}$

Wait, there's a mistake in calculation. Let's re-do the Gaussian elimination and L construction carefully.

**Corrected Example (Doolittle's Method - without pivoting):**

$A = \begin{bmatrix}
2 & 1 & -1 \\
-3 & -1 & 2 \\
-2 & 1 & 2
\end{bmatrix}$

**Elimination:**
1.  $R_2 \leftarrow R_2 + \frac{3}{2}R_1$:
    $A' = \begin{bmatrix}
    2 & 1 & -1 \\
    0 & 1/2 & 1/2 \\
    -2 & 1 & 2
    \end{bmatrix}$. Multiplier $m_{21} = -3/2$. $l_{21} = -m_{21} = 3/2$.
2.  $R_3 \leftarrow R_3 + 1R_1$:
    $A'' = \begin{bmatrix}
    2 & 1 & -1 \\
    0 & 1/2 & 1/2 \\
    0 & 2 & 1
    \end{bmatrix}$. Multiplier $m_{31} = -1$. $l_{31} = -m_{31} = 1$.
3.  $R_3 \leftarrow R_3 - 4R_2$:
    $U = \begin{bmatrix}
    2 & 1 & -1 \\
    0 & 1/2 & 1/2 \\
    0 & 0 & -1
    \end{bmatrix}$. Multiplier $m_{32} = -2 / (1/2) = -4$. $l_{32} = -m_{32} = 4$.

**L Construction (Doolittle):**
$L = \begin{bmatrix}
1 & 0 & 0 \\
l_{21} & 1 & 0 \\
l_{31} & l_{32} & 1
\end{bmatrix} = \begin{bmatrix}
1 & 0 & 0 \\
3/2 & 1 & 0 \\
1 & 4 & 1
\end{bmatrix}$

**Verification:**
$LU = \begin{bmatrix}
1 & 0 & 0 \\
3/2 & 1 & 0 \\
1 & 4 & 1
\end{bmatrix} \begin{bmatrix}
2 & 1 & -1 \\
0 & 1/2 & 1/2 \\
0 & 0 & -1
\end{bmatrix} = \begin{bmatrix}
(1*2) & (1*1) & (1*-1) \\
(3/2*2 + 1*0) & (3/2*1 + 1*1/2) & (3/2*-1 + 1*1/2) \\
(1*2 + 4*0 + 1*0) & (1*1 + 4*1/2 + 1*0) & (1*-1 + 4*1/2 + 1*-1)
\end{bmatrix}$
$LU = \begin{bmatrix}
2 & 1 & -1 \\
3 & 3/2 + 1/2 & -3/2 + 1/2 \\
2 & 1 + 2 & -1 + 2 - 1
\end{bmatrix} = \begin{bmatrix}
2 & 1 & -1 \\
3 & 2 & -1 \\
2 & 3 & 0
\end{bmatrix}$

Still not matching $A$. The issue is how the multipliers are used. In $A=LU$, the multipliers from Gaussian elimination are directly placed into $L$.

Let's re-evaluate the relationship $A=LU$.
When we perform $R_i \leftarrow R_i - m_{ij}R_j$, this is equivalent to multiplying $A$ by an elementary matrix $E_{ij}$.
$E_{ij} = I - m_{ij}e_{ij}^T$, where $e_{ij}$ is a matrix with 1 at position $(i,j)$ and 0 elsewhere.
If we perform a sequence of such operations:
$E_{n-1,n} \dots E_{32} E_{31} E_{21} A = U$
Then $A = (E_{21}^T E_{31}^T E_{32}^T \dots E_{n-1,n}^T) U$.
The product of $E_{ij}^T$ matrices forms $L$.
$E_{ij}^T = I + m_{ij}e_{ij}^T$.
So, $L = E_{21}^T E_{31}^T E_{32}^T \dots E_{n-1,n}^T$.
For Doolittle's method, $L$ has 1s on the diagonal and $l_{ij} = m_{ij}$ for $i > j$.

Let's try the direct formulaic approach for LU decomposition.

#### 3.2. Direct Formulaic Approach

For a matrix $A$, we assume $A=LU$.
$A = \begin{bmatrix}
a_{11} & a_{12} & \dots & a_{1n} \\
a_{21} & a_{22} & \dots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{n1} & a_{n2} & \dots & a_{nn}
\end{bmatrix} = \begin{bmatrix}
1 & 0 & \dots & 0 \\
l_{21} & 1 & \dots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
l_{n1} & l_{n2} & \dots & 1
\end{bmatrix} \begin{bmatrix}
u_{11} & u_{12} & \dots & u_{1n} \\
0 & u_{22} & \dots & u_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \dots & u_{nn}
\end{bmatrix}$

Expanding the matrix multiplication $LU$:
$a_{ij} = \sum_{k=1}^{n} l_{ik} u_{kj}$
Since $L$ is lower triangular and $U$ is upper triangular, $l_{ik}=0$ for $k>i$ and $u_{kj}=0$ for $k<j$.
$a_{ij} = \sum_{k=1}^{\min(i,j)} l_{ik} u_{kj}$

For Doolittle's method ($l_{ii}=1$):
$a_{ij} = \sum_{k=1}^{j} l_{ik} u_{kj}$  (for $i \ge j$)
$a_{ij} = \sum_{k=1}^{i} l_{ik} u_{kj}$  (for $i < j$)

Let's use the standard formulas derived from $A=LU$.

**Formulas for Doolittle's Method ($l_{ii}=1$):**

*   **First row of U and first column of L:**
    $u_{1j} = a_{1j}$ for $j=1, \dots, n$.
    $l_{i1} = a_{i1} / u_{11}$ for $i=2, \dots, n$.

*   **For $i=2, \dots, n$ and $j=i, \dots, n$:**
    $u_{ij} = a_{ij} - \sum_{k=1}^{i-1} l_{ik} u_{kj}$
    If $i<j$, this is $u_{ij} = a_{ij} - \sum_{k=1}^{i-1} l_{ik} u_{kj}$.
    If $i=j$, this is $u_{ii} = a_{ii} - \sum_{k=1}^{i-1} l_{ik} u_{ki}$.

*   **For $i=3, \dots, n$ and $j=2, \dots, i-1$:**
    $l_{ij} = (a_{ij} - \sum_{k=1}^{j-1} l_{ik} u_{kj}) / u_{jj}$

**Let's re-try the example using these formulas:**

$A = \begin{bmatrix}
2 & 1 & -1 \\
-3 & -1 & 2 \\
-2 & 1 & 2
\end{bmatrix}$

**Step 1: First row of U and first column of L.**
$u_{11} = a_{11} = 2$
$u_{12} = a_{12} = 1$
$u_{13} = a_{13} = -1$

$l_{21} = a_{21} / u_{11} = -3 / 2$
$l_{31} = a_{31} / u_{11} = -2 / 2 = -1$

So far:
$L = \begin{bmatrix}
1 & 0 & 0 \\
-3/2 & 1 & 0 \\
-1 & l_{32} & 1
\end{bmatrix}$, $U = \begin{bmatrix}
2 & 1 & -1 \\
0 & u_{22} & u_{23} \\
0 & 0 & u_{33}
\end{bmatrix}$

**Step 2: Calculate $u_{22}$ and $u_{23}$.**
For $i=2$:
$u_{22} = a_{22} - l_{21}u_{12} = -1 - (-3/2)(1) = -1 + 3/2 = 1/2$.
$u_{23} = a_{23} - l_{21}u_{13} = 2 - (-3/2)(-1) = 2 - 3/2 = 1/2$.

So far:
$L = \begin{bmatrix}
1 & 0 & 0 \\
-3/2 & 1 & 0 \\
-1 & l_{32} & 1
\end{bmatrix}$, $U = \begin{bmatrix}
2 & 1 & -1 \\
0 & 1/2 & 1/2 \\
0 & 0 & u_{33}
\end{bmatrix}$

**Step 3: Calculate $l_{32}$ and $u_{33}$.**
For $i=3, j=2$ (to find $l_{32}$):
$l_{32} = (a_{32} - l_{31}u_{12}) / u_{22}$
$l_{32} = (1 - (-1)(1)) / (1/2) = (1+1) / (1/2) = 2 / (1/2) = 4$.

For $i=3, j=3$ (to find $u_{33}$):
$u_{33} = a_{33} - (l_{31}u_{13} + l_{32}u_{23})$
$u_{33} = 2 - ((-1)(-1) + (4)(1/2)) = 2 - (1 + 2) = 2 - 3 = -1$.

**Final LU Decomposition (Doolittle):**
$L = \begin{bmatrix}
1 & 0 & 0 \\
-3/2 & 1 & 0 \\
-1 & 4 & 1
\end{bmatrix}$
$U = \begin{bmatrix}
2 & 1 & -1 \\
0 & 1/2 & 1/2 \\
0 & 0 & -1
\end{bmatrix}$

**Verification:**
$LU = \begin{bmatrix}
1 & 0 & 0 \\
-3/2 & 1 & 0 \\
-1 & 4 & 1
\end{bmatrix} \begin{bmatrix}
2 & 1 & -1 \\
0 & 1/2 & 1/2 \\
0 & 0 & -1
\end{bmatrix} = \begin{bmatrix}
2 & 1 & -1 \\
-3 & -3/2 + 1/2 & 3/2 - 1/2 \\
-2 & -1/2 + 2 & 1 + 2 - 1
\end{bmatrix} = \begin{bmatrix}
2 & 1 & -1 \\
-3 & -1 & 1 \\
-2 & 3/2 & 2
\end{bmatrix}$

Ah, the error persists. Let's revisit the formulas.
The formula for $l_{ij}$ is correct.
The formula for $u_{ij}$ is correct.

Let's check the calculation of $a_{32}$ in the original matrix: $a_{32}=1$.
$l_{32} = (a_{32} - l_{31}u_{12}) / u_{22} = (1 - (-1)(1)) / (1/2) = (1+1)/(1/2) = 4$. This is correct.

Let's check the calculation of $u_{33}$:
$u_{33} = a_{33} - \sum_{k=1}^{2} l_{3k} u_{k3}$
$u_{33} = a_{33} - (l_{31}u_{13} + l_{32}u_{23})$
$u_{33} = 2 - ((-1)(-1) + (4)(1/2))$
$u_{33} = 2 - (1 + 2) = 2 - 3 = -1$. This is correct.

Let's check $a_{32}$ and $a_{33}$ in the $LU$ product again.
$LU_{32} = l_{31}u_{12} + l_{32}u_{22} + l_{33}u_{32}$
$LU_{32} = (-1)(1) + (4)(1/2) + (1)(0) = -1 + 2 = 1$. This matches $a_{32}$.

$LU_{33} = l_{31}u_{13} + l_{32}u_{23} + l_{33}u_{33}$
$LU_{33} = (-1)(-1) + (4)(1/2) + (1)(-1) = 1 + 2 - 1 = 2$. This matches $a_{33}$.

My verification calculation was incorrect initially. The decomposition is correct.

**Reference:** Chapra & Canale (6th Ed., Chapter 11) provides a thorough treatment of LU decomposition, including the direct calculation method and the relation to Gaussian elimination. Gupta (1995) also covers these aspects in detail.

---

### 4. Solving Linear Systems using LU Decomposition

Given $A\mathbf{x} = \mathbf{b}$, and $A = LU$.
The system becomes $LU\mathbf{x} = \mathbf{b}$.

We introduce an intermediate vector $\mathbf{y}$ such that $L\mathbf{y} = \mathbf{b}$.
This is a lower triangular system, which can be solved efficiently using **forward substitution**.

Once $\mathbf{y}$ is found, we solve $U\mathbf{x} = \mathbf{y}$.
This is an upper triangular system, which can be solved efficiently using **backward substitution**.

**Procedure:**

1.  **Decompose A into L and U:** Find $L$ and $U$ such that $A=LU$.
2.  **Forward Substitution:** Solve $L\mathbf{y} = \mathbf{b}$ for $\mathbf{y}$.
    $y_1 = b_1 / l_{11}$
    $y_i = (b_i - \sum_{j=1}^{i-1} l_{ij}y_j) / l_{ii}$ for $i=2, \dots, n$.
    (If using Doolittle's method, $l_{ii}=1$, so $y_i = b_i - \sum_{j=1}^{i-1} l_{ij}y_j$).
3.  **Backward Substitution:** Solve $U\mathbf{x} = \mathbf{y}$ for $\mathbf{x}$.
    $x_n = y_n / u_{nn}$
    $x_i = (y_i - \sum_{j=i+1}^{n} u_{ij}x_j) / u_{ii}$ for $i=n-1, \dots, 1$.

**Example:** Solve the system $A\mathbf{x} = \mathbf{b}$ where:
$A = \begin{bmatrix}
2 & 1 & -1 \\
-3 & -1 & 2 \\
-2 & 1 & 2
\end{bmatrix}$ and $\mathbf{b} = \begin{bmatrix}
8 \\
-11 \\
-3
\end{bmatrix}$

We already found the LU decomposition:
$L = \begin{bmatrix}
1 & 0 & 0 \\
-3/2 & 1 & 0 \\
-1 & 4 & 1
\end{bmatrix}$, $U = \begin{bmatrix}
2 & 1 & -1 \\
0 & 1/2 & 1/2 \\
0 & 0 & -1
\end{bmatrix}$

**Step 1: Solve $L\mathbf{y} = \mathbf{b}$ (Forward Substitution).**
$\begin{bmatrix}
1 & 0 & 0 \\
-3/2 & 1 & 0 \\
-1 & 4 & 1
\end{bmatrix} \begin{bmatrix}
y_1 \\
y_2 \\
y_3
\end{bmatrix} = \begin{bmatrix}
8 \\
-11 \\
-3
\end{bmatrix}$

$y_1 = 8 / 1 = 8$.

$(-3/2)y_1 + y_2 = -11$
$(-3/2)(8) + y_2 = -11$
$-12 + y_2 = -11 \implies y_2 = 1$.

$(-1)y_1 + 4y_2 + y_3 = -3$
$(-1)(8) + 4(1) + y_3 = -3$
$-8 + 4 + y_3 = -3$
$-4 + y_3 = -3 \implies y_3 = 1$.

So, $\mathbf{y} = \begin{bmatrix} 8 \\ 1 \\ 1 \end{bmatrix}$.

**Step 2: Solve $U\mathbf{x} = \mathbf{y}$ (Backward Substitution).**
$\begin{bmatrix}
2 & 1 & -1 \\
0 & 1/2 & 1/2 \\
0 & 0 & -1
\end{bmatrix} \begin{bmatrix}
x_1 \\
x_2 \\
x_3
\end{bmatrix} = \begin{bmatrix}
8 \\
1 \\
1
\end{bmatrix}$

$x_3 = 1 / (-1) = -1$.

$(1/2)x_2 + (1/2)x_3 = 1$
$(1/2)x_2 + (1/2)(-1) = 1$
$(1/2)x_2 - 1/2 = 1$
$(1/2)x_2 = 3/2 \implies x_2 = 3$.

$2x_1 + x_2 - x_3 = 8$
$2x_1 + 3 - (-1) = 8$
$2x_1 + 3 + 1 = 8$
$2x_1 + 4 = 8 \implies 2x_1 = 4 \implies x_1 = 2$.

So, the solution is $\mathbf{x} = \begin{bmatrix} 2 \\ 3 \\ -1 \end{bmatrix}$.

**Verification:**
$A\mathbf{x} = \begin{bmatrix}
2 & 1 & -1 \\
-3 & -1 & 2 \\
-2 & 1 & 2
\end{bmatrix} \begin{bmatrix}
2 \\
3 \\
-1
\end{bmatrix} = \begin{bmatrix}
2(2) + 1(3) + (-1)(-1) \\
-3(2) + (-1)(3) + 2(-1) \\
-2(2) + 1(3) + 2(-1)
\end{bmatrix} = \begin{bmatrix}
4 + 3 + 1 \\
-6 - 3 - 2 \\
-4 + 3 - 2
\end{bmatrix} = \begin{bmatrix}
8 \\
-11 \\
-3
\end{bmatrix}$
This matches the original $\mathbf{b}$.

**Reference:** Balagurusamy (2017) provides examples of solving linear systems using LU decomposition. Gerald & Wheatly (6th Edition) discuss the computational efficiency of this method.

---

### 5. LU Decomposition with Pivoting (PA = LU)

Division by zero or very small numbers during Gaussian elimination can lead to numerical instability and large errors. **Pivoting** is a strategy to mitigate this.

*   **Partial Pivoting:** At each step of elimination, the row with the largest absolute value in the current pivot column is swapped with the current row. This ensures that the pivot element is as large as possible.
*   **Complete Pivoting:** Swapping both rows and columns to bring the largest element to the pivot position. This is more computationally expensive.

When pivoting is used, the original equation $A\mathbf{x} = \mathbf{b}$ is modified.
If partial pivoting is used, row swaps are represented by a permutation matrix $P$.
The decomposition becomes $PA = LU$.

The system to solve is then $PA\mathbf{x} = P\mathbf{b}$.
Let $\mathbf{b}' = P\mathbf{b}$.
Then $LU\mathbf{x} = \mathbf{b}'$.
The process remains the same:
1.  Decompose $PA$ into $LU$.
2.  Solve $L\mathbf{y} = \mathbf{b}'$ (Forward Substitution).
3.  Solve $U\mathbf{x} = \mathbf{y}$ (Backward Substitution).

**Example with Partial Pivoting:**

Solve $A\mathbf{x} = \mathbf{b}$ where:
$A = \begin{bmatrix}
0 & 1 & 1 \\
1 & 2 & 3 \\
2 & 4 & 7
\end{bmatrix}$, $\mathbf{b} = \begin{bmatrix}
4 \\
10 \\
20
\end{bmatrix}$

**Step 1: Apply Partial Pivoting to A.**
The first pivot element $a_{11}$ is 0. We need to swap row 1 with a row that has a non-zero element in the first column. Swap R1 and R2.
$P_1 = \begin{bmatrix}
0 & 1 & 0 \\
1 & 0 & 0 \\
0 & 0 & 1
\end{bmatrix}$.
$P_1A = \begin{bmatrix}
0 & 1 & 0 \\
1 & 0 & 0 \\
0 & 0 & 1
\end{bmatrix} \begin{bmatrix}
0 & 1 & 1 \\
1 & 2 & 3 \\
2 & 4 & 7
\end{bmatrix} = \begin{bmatrix}
1 & 2 & 3 \\
0 & 1 & 1 \\
2 & 4 & 7
\end{bmatrix}$.

Now, transform $P_1A$ into an upper triangular matrix $U$.
The pivot element is now $a_{11}=1$.
$R_3 \leftarrow R_3 - 2R_1$:
$\begin{bmatrix}
1 & 2 & 3 \\
0 & 1 & 1 \\
0 & 0 & 1
\end{bmatrix}$. Multiplier $m_{31} = -2$. $l_{31} = -m_{31} = 2$.

The matrix is now upper triangular: $U = \begin{bmatrix}
1 & 2 & 3 \\
0 & 1 & 1 \\
0 & 0 & 1
\end{bmatrix}$.

The multipliers used: $m_{21}=0$ (no operation), $m_{31}=-2$.
The matrix $L$ (for $PA=LU$) would be:
$L = \begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
2 & 0 & 1
\end{bmatrix}$ (Diagonal is 1, sub-diagonal elements are the multipliers).

Let's verify $PA = LU$:
$PA = \begin{bmatrix}
1 & 2 & 3 \\
0 & 1 & 1 \\
2 & 4 & 7
\end{bmatrix}$
$LU = \begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
2 & 0 & 1
\end{bmatrix} \begin{bmatrix}
1 & 2 & 3 \\
0 & 1 & 1 \\
0 & 0 & 1
\end{bmatrix} = \begin{bmatrix}
1 & 2 & 3 \\
0 & 1 & 1 \\
2 & 4 & 7
\end{bmatrix}$. This is correct.

**Step 2: Calculate $P\mathbf{b}$.**
$\mathbf{b}' = P_1\mathbf{b} = \begin{bmatrix}
0 & 1 & 0 \\
1 & 0 & 0 \\
0 & 0 & 1
\end{bmatrix} \begin{bmatrix}
4 \\
10 \\
20
\end{bmatrix} = \begin{bmatrix}
10 \\
4 \\
20
\end{bmatrix}$.

**Step 3: Solve $L\mathbf{y} = \mathbf{b}'$ (Forward Substitution).**
$\begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
2 & 0 & 1
\end{bmatrix} \begin{bmatrix}
y_1 \\
y_2 \\
y_3
\end{bmatrix} = \begin{bmatrix}
10 \\
4 \\
20
\end{bmatrix}$

$y_1 = 10$.
$y_2 = 4$.
$2y_1 + y_3 = 20 \implies 2(10) + y_3 = 20 \implies 20 + y_3 = 20 \implies y_3 = 0$.
So, $\mathbf{y} = \begin{bmatrix} 10 \\ 4 \\ 0 \end{bmatrix}$.

**Step 4: Solve $U\mathbf{x} = \mathbf{y}$ (Backward Substitution).**
$\begin{bmatrix}
1 & 2 & 3 \\
0 & 1 & 1 \\
0 & 0 & 1
\end{bmatrix} \begin{bmatrix}
x_1 \\
x_2 \\
x_3
\end{bmatrix} = \begin{bmatrix}
10 \\
4 \\
0
\end{bmatrix}$

$x_3 = 0 / 1 = 0$.
$x_2 + x_3 = 4 \implies x_2 + 0 = 4 \implies x_2 = 4$.
$x_1 + 2x_2 + 3x_3 = 10 \implies x_1 + 2(4) + 3(0) = 10 \implies x_1 + 8 = 10 \implies x_1 = 2$.

So, $\mathbf{x} = \begin{bmatrix} 2 \\ 4 \\ 0 \end{bmatrix}$.

**Verification:**
$A\mathbf{x} = \begin{bmatrix}
0 & 1 & 1 \\
1 & 2 & 3 \\
2 & 4 & 7
\end{bmatrix} \begin{bmatrix}
2 \\
4 \\
0
\end{bmatrix} = \begin{bmatrix}
0(2) + 1(4) + 1(0) \\
1(2) + 2(4) + 3(0) \\
2(2) + 4(4) + 7(0)
\end{bmatrix} = \begin{bmatrix}
4 \\
2 + 8 \\
4 + 16
\end{bmatrix} = \begin{bmatrix}
4 \\
10 \\
20
\end{bmatrix}$. Matches $\mathbf{b}$.

**Reference:** Jain, Iyengar, & Jain cover pivoting strategies in detail for numerical stability. Conte & De Boor also provide insights into the numerical aspects of LU decomposition with pivoting.

---

### 6. Applications in Engineering

*   **Structural Analysis:** Analyzing stress and strain in structures often involves solving large systems of linear equations arising from finite element methods. LU decomposition is used to solve these systems.
*   **Electrical Circuit Analysis:** Nodal or mesh analysis of electrical circuits leads to systems of linear equations representing Kirchhoff's laws. LU decomposition is an efficient method for finding voltages and currents.
*   **Fluid Dynamics:** Computational fluid dynamics (CFD) simulations often discretize governing equations, leading to linear systems that require efficient solution techniques like LU decomposition.
*   **Data Fitting (Polynomial Regression):** When fitting data using polynomial regression, especially for higher-order polynomials, the normal equations form a linear system that can be solved using LU decomposition. This relates to **CO2**.
*   **Numerical Differentiation and Integration:** While LU decomposition is primarily for linear systems, it can be a sub-routine in more complex algorithms that involve solving linear systems as intermediate steps, which could indirectly support **CO3**.

**Reference:** Chapra & Canale (6th Ed.) provides numerous examples of engineering applications solved using numerical techniques, including LU decomposition for linear systems.

---

### 7. Important Points to Remember

*   **LU decomposition transforms solving $Ax=b$ into two simpler steps:** forward substitution ($Ly=b$) and backward substitution ($Ux=y$).
*   **Efficiency:** Once $A$ is decomposed, solving for different $\mathbf{b}$ vectors is fast.
*   **Pivoting is crucial for numerical stability:** Avoids division by zero or small numbers, especially when the diagonal elements are close to zero. Partial pivoting (swapping rows) is common and effective.
*   **PA = LU:** When partial pivoting is used, the decomposition is $PA=LU$, where $P$ is a permutation matrix.
*   **Cost:** The decomposition of an $n \times n$ matrix typically costs $O(n^3)$ operations. Solving involves $O(n^2)$ operations for each back/forward substitution.
*   **Determinant:** $det(A) = det(L) * det(U)$. For Doolittle's method, $det(L)=1$. $det(U)$ is the product of its diagonal elements. If pivoting is used, $det(A) = (-1)^{\text{number of row swaps}} * det(U)$.
*   **Matrix Inverse:** The inverse of $A$ can be found by solving $AX=I$, where $X$ is the inverse matrix. This can be done by applying the LU decomposition method column by column of the identity matrix.

---

### 8. Practice Questions and Exercises

**Question 1:**
Given the matrix $A = \begin{bmatrix} 4 & -1 & 0 \\ -1 & 4 & -1 \\ 0 & -1 & 4 \end{bmatrix}$.
Perform LU decomposition (Doolittle's method) on $A$.
**Answer:**
$L = \begin{bmatrix} 1 & 0 & 0 \\ -1/4 & 1 & 0 \\ 0 & -4/7 & 1 \end{bmatrix}$
$U = \begin{bmatrix} 4 & -1 & 0 \\ 0 & 15/4 & -1 \\ 0 & 0 & 24/7 \end{bmatrix}$

**Question 2:**
Solve the following system of linear equations using LU decomposition with partial pivoting:
$\begin{bmatrix} 1 & 2 & 3 \\ 2 & 5 & 7 \\ 3 & 6 & 11 \end{bmatrix} \mathbf{x} = \begin{bmatrix} 6 \\ 15 \\ 26 \end{bmatrix}$
**Answer:**
First, apply partial pivoting. Swap R1 and R2:
$P_1 = \begin{bmatrix} 0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{bmatrix}$
$P_1A = \begin{bmatrix} 2 & 5 & 7 \\ 1 & 2 & 3 \\ 3 & 6 & 11 \end{bmatrix}$.
Then perform row operations to get $U$.
$R_2 \leftarrow R_2 - (1/2)R_1$: $0, -1/2, -1/2$ (multiplier $m_{21}=1/2$)
$R_3 \leftarrow R_3 - (3/2)R_1$: $0, -3/2, 5/2$ (multiplier $m_{31}=3/2$)
$P_1A' = \begin{bmatrix} 2 & 5 & 7 \\ 0 & -1/2 & -1/2 \\ 0 & -3/2 & 5/2 \end{bmatrix}$.
Now swap R2 and R3 (pivot element $-1/2$ is not zero, but $-3/2$ is larger in magnitude for the next step). Actually, let's re-evaluate the pivot choice. After the first step, the first column of the remaining submatrix is $[0, -3/2]$. So we should swap R2 and R3.
Let $P_2 = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & 1 & 0 \end{bmatrix}$.
$P_2 (P_1A) = \begin{bmatrix} 2 & 5 & 7 \\ 0 & -3/2 & 5/2 \\ 0 & -1/2 & -1/2 \end{bmatrix}$.
Now, eliminate below $-3/2$:
$R_3 \leftarrow R_3 - (-1/2)/(-3/2) R_2 = R_3 - (1/3)R_2$:
$R_3 \leftarrow R_3 - (1/3)R_2$: $0, -1/2 - (1/3)(-3/2), -1/2 - (1/3)(5/2)$
$R_3 \leftarrow R_3 - (1/3)R_2$: $0, -1/2 + 1/2, -1/2 - 5/6 = -3/6 - 5/6 = -8/6 = -4/3$.
Multiplier $m_{32} = -1/3$.
$U = \begin{bmatrix} 2 & 5 & 7 \\ 0 & -3/2 & 5/2 \\ 0 & 0 & -4/3 \end{bmatrix}$.
The overall permutation matrix is $P = P_2 P_1 = \begin{bmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 0 & 0 \end{bmatrix}$.
The $L$ matrix for $PA=LU$ with Doolittle's method:
$l_{21} = 0$ (no operation)
$l_{31} = 1/2$ (from $R_2 \leftarrow R_2 - (1/2)R_1$)
$l_{32} = 1/3$ (from $R_3 \leftarrow R_3 - (1/3)R_2$, after row swap)
$L = \begin{bmatrix} 1 & 0 & 0 \\ 1/2 & 1 & 0 \\ 1/3 & 1 & 0 \end{bmatrix}$.  Wait, the diagonal elements of L are from the actual pivot operations.
Let's reconstruct L based on multipliers for $PA = LU$:
$PA = \begin{bmatrix}
2 & 5 & 7 \\
1 & 2 & 3 \\
3 & 6 & 11
\end{bmatrix}$
$R_2 \leftarrow R_2 - \frac{1}{2} R_1$ (mult $m_{21} = 1/2$)
$R_3 \leftarrow R_3 - \frac{3}{2} R_1$ (mult $m_{31} = 3/2$)
$PA' = \begin{bmatrix}
2 & 5 & 7 \\
0 & -1/2 & -1/2 \\
0 & -3/2 & 5/2
\end{bmatrix}$
Now swap R2 and R3 (due to magnitude):
$P_2 = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & 1 & 0 \end{bmatrix}$
$P_2 PA' = \begin{bmatrix}
2 & 5 & 7 \\
0 & -3/2 & 5/2 \\
0 & -1/2 & -1/2
\end{bmatrix}$
$R_3 \leftarrow R_3 - \frac{-1/2}{-3/2} R_2 = R_3 - \frac{1}{3} R_2$ (mult $m_{32} = 1/3$)
$U = \begin{bmatrix}
2 & 5 & 7 \\
0 & -3/2 & 5/2 \\
0 & 0 & -4/3
\end{bmatrix}$
The $L$ matrix (for Doolittle's method) has $l_{ii}=1$. The subdiagonal elements are the multipliers:
$l_{21} = 1/2$
$l_{31} = 3/2$
$l_{32} = 1/3$
$L = \begin{bmatrix}
1 & 0 & 0 \\
1/2 & 1 & 0 \\
3/2 & 1/3 & 1
\end{bmatrix}$
$P = P_2 P_1 = \begin{bmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 0 & 0 \end{bmatrix}$.
$\mathbf{b}' = P\mathbf{b} = \begin{bmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 0 & 0 \end{bmatrix} \begin{bmatrix} 6 \\ 15 \\ 26 \end{bmatrix} = \begin{bmatrix} 15 \\ 26 \\ 6 \end{bmatrix}$.
Solve $L\mathbf{y} = \mathbf{b}'$:
$y_1 = 15$.
$1/2 y_1 + y_2 = 26 \implies 1/2(15) + y_2 = 26 \implies 7.5 + y_2 = 26 \implies y_2 = 18.5$.
$3/2 y_1 + 1/3 y_2 + y_3 = 6 \implies 3/2(15) + 1/3(18.5) + y_3 = 6 \implies 22.5 + 6.1667 + y_3 = 6 \implies 28.6667 + y_3 = 6 \implies y_3 = -22.6667$.
$\mathbf{y} = \begin{bmatrix} 15 \\ 18.5 \\ -22.6667 \end{bmatrix}$.
Solve $U\mathbf{x} = \mathbf{y}$:
$-4/3 x_3 = -22.6667 \implies x_3 = (-22.6667) * (-3/4) = 17$.
$-3/2 x_2 + 5/2 x_3 = 18.5 \implies -3/2 x_2 + 5/2(17) = 18.5 \implies -1.5 x_2 + 42.5 = 18.5 \implies -1.5 x_2 = -24 \implies x_2 = 16$.
$2x_1 + 5x_2 + 7x_3 = 15 \implies 2x_1 + 5(16) + 7(17) = 15 \implies 2x_1 + 80 + 119 = 15 \implies 2x_1 + 199 = 15 \implies 2x_1 = -184 \implies x_1 = -92$.
$\mathbf{x} = \begin{bmatrix} -92 \\ 16 \\ 17 \end{bmatrix}$.
(Note: Calculations with fractions might be more precise).
$y_2 = 26 - 15/2 = 52/2 - 15/2 = 37/2$.
$y_3 = 6 - (3/2)*15 - (1/3)*(37/2) = 6 - 45/2 - 37/6 = 36/6 - 135/6 - 37/6 = (36-172)/6 = -136/6 = -68/3$.
$U = \begin{bmatrix} 2 & 5 & 7 \\ 0 & -3/2 & 5/2 \\ 0 & 0 & -4/3 \end{bmatrix}$.
$-4/3 x_3 = -68/3 \implies x_3 = 17$.
$-3/2 x_2 + 5/2 x_3 = 37/2 \implies -3/2 x_2 + 5/2(17) = 37/2 \implies -3/2 x_2 + 85/2 = 37/2 \implies -3/2 x_2 = -48/2 \implies x_2 = 8$.
$2x_1 + 5x_2 + 7x_3 = 15 \implies 2x_1 + 5(8) + 7(17) = 15 \implies 2x_1 + 40 + 119 = 15 \implies 2x_1 + 159 = 15 \implies 2x_1 = -144 \implies x_1 = -72$.
$\mathbf{x} = \begin{bmatrix} -72 \\ 8 \\ 17 \end{bmatrix}$.

**Question 3:**
What is the determinant of matrix A from Question 1?
**Answer:**
$det(A) = det(L) * det(U) = 1 * (4 * (15/4) * (24/7)) = 15 * 24/7 = 360/7$.

---

This concludes the study notes for LU Decomposition. This topic is fundamental for solving linear systems efficiently in various engineering disciplines. It directly supports **CO1**.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
