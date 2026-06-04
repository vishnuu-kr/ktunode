---
title: "Eigen values and Eigen vectors of matrices"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 2"
module: "Module 1: Linear systems of equations"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6e58474a0b135b5d0c"
status: "completed"
scrapedAt: "2026-05-20T16:34:31.558Z"
---
## MATHEMATICS FOR INFORMATION SCIENCE – 2

**Module 1: Linear Systems of Equations**

### Topic: Eigenvalues and Eigenvectors of Matrices

Welcome, everyone, to our journey into the fascinating world of linear algebra! Today, we're diving into a concept that is absolutely fundamental, not just for understanding linear systems of equations, but for so many applications in Information Science – **Eigenvalues and Eigenvectors**. This topic directly links to **Course Outcome 1 (CO1)**, where we aim to evaluate eigenvalues and eigenvectors, and ultimately, diagonalize matrices. Understanding these concepts is like unlocking a hidden dimension of how matrices behave.

---

### 1. What's the Big Idea? The "Special Directions" of a Matrix

Imagine a matrix as a transformation – it takes a vector and maps it to another vector. Most vectors, when you apply a matrix transformation to them, change both their **direction** and their **magnitude**. Think of stretching a piece of rubber with a pattern drawn on it. Most points on the rubber will move to a new position and point in a new direction.

However, there are some "special" vectors that, when transformed by the matrix, **only change their magnitude**. They stay on the same line, the same direction, as before. They might get stretched, shrunk, or even flipped (which is just stretching by a negative factor), but their direction remains invariant under the transformation.

These special directions are what we call **eigenvectors**, and the factor by which their magnitude changes is called the **eigenvalue**.

This is a powerful idea. In Information Science, matrices often represent complex systems or operations. Identifying these invariant directions can tell us about the inherent properties, the stable states, or the principal modes of behavior of that system. For example, in image processing, eigenvectors can reveal the most significant features in an image. In machine learning, they are crucial for dimensionality reduction techniques like Principal Component Analysis (PCA).

---

### 2. Defining the Key Players: Eigenvalues and Eigenvectors

Let's get a bit more formal, but still keep it intuitive.

Suppose we have a square matrix, let's call it $A$. If we have a non-zero vector, let's call it $\mathbf{v}$, and when we multiply $A$ by $\mathbf{v}$, we get a result that is just a scaled version of $\mathbf{v}$ itself, then we've found an eigenvector and its corresponding eigenvalue.

Mathematically, this relationship is expressed as:

$A\mathbf{v} = \lambda\mathbf{v}$

Here:

*   $A$ is an $n \times n$ square matrix.
*   $\mathbf{v}$ is a non-zero $n \times 1$ column vector, known as the **eigenvector**. It must be non-zero; otherwise, the equation $A\mathbf{0} = \lambda\mathbf{0}$ would be true for any $\lambda$, which isn't useful for defining a special direction.
*   $\lambda$ (lambda) is a scalar, representing the **eigenvalue** corresponding to the eigenvector $\mathbf{v}$.

**Think of it like this:** The matrix $A$ "acts" on the vector $\mathbf{v}$, and the output is simply the same vector $\mathbf{v}$ stretched or shrunk by a factor of $\lambda$. The direction of $\mathbf{v}$ is preserved.

**Crucial Point for Exams:** Always remember that eigenvectors must be **non-zero**. Eigenvalues, however, can be zero.

---

### 3. How Do We Find Them? The Characteristic Equation

So, how do we actually *find* these special $\lambda$ and $\mathbf{v}$ for a given matrix $A$?

Let's rearrange the fundamental equation: $A\mathbf{v} = \lambda\mathbf{v}$.

We can rewrite $\lambda\mathbf{v}$ as $\lambda I\mathbf{v}$, where $I$ is the identity matrix of the same size as $A$. This is a neat trick to get matrices on both sides.

$A\mathbf{v} = \lambda I\mathbf{v}$

Now, let's move everything to one side:

$A\mathbf{v} - \lambda I\mathbf{v} = \mathbf{0}$

We can factor out $\mathbf{v}$:

$(A - \lambda I)\mathbf{v} = \mathbf{0}$

Now, look at this equation. It's in the form $B\mathbf{x} = \mathbf{0}$, where $B = (A - \lambda I)$ and $\mathbf{x} = \mathbf{v}$. We are looking for a non-zero solution for $\mathbf{v}$.

Recall from our study of systems of linear equations: a homogeneous system $B\mathbf{x} = \mathbf{0}$ has a non-trivial (non-zero) solution *if and only if* the matrix $B$ is singular (i.e., its determinant is zero).

Therefore, for $(A - \lambda I)\mathbf{v} = \mathbf{0}$ to have a non-zero solution $\mathbf{v}$, the matrix $(A - \lambda I)$ must be singular. This means:

$\det(A - \lambda I) = 0$

This is the **characteristic equation** of the matrix $A$. The roots of this polynomial equation in $\lambda$ are the **eigenvalues** of $A$.

**How to use this:**
1.  Construct the matrix $(A - \lambda I)$. This involves subtracting $\lambda$ from each diagonal element of $A$.
2.  Calculate the determinant of $(A - \lambda I)$.
3.  Set the determinant equal to zero and solve for $\lambda$. The solutions are your eigenvalues.

This process is fundamental for **CO1**.

---

### 4. Finding Eigenvectors: Plugging Back In

Once we have the eigenvalues, say $\lambda_1, \lambda_2, \dots, \lambda_n$, we can find the corresponding eigenvectors.

For each eigenvalue $\lambda_i$, we go back to the equation:

$(A - \lambda_i I)\mathbf{v} = \mathbf{0}$

And we solve this system of linear equations for the vector $\mathbf{v}$. The non-zero solutions $\mathbf{v}$ are the eigenvectors corresponding to $\lambda_i$.

**Important Note:** For a given eigenvalue, there might be multiple linearly independent eigenvectors. The set of all eigenvectors corresponding to a particular eigenvalue, along with the zero vector, forms a **subspace** called the **eigenspace**. This is a beautiful connection to **CO2**, which deals with vector spaces and subspaces. The eigenspace is a key subspace associated with the matrix.

---

### 5. Let's Work Through an Example!

This is where things really click. Let's take a simple $2 \times 2$ matrix.

**Example 1: A Simple $2 \times 2$ Matrix**

Let $A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$.

**Step 1: Find the Characteristic Equation**

We need to compute $\det(A - \lambda I)$.
$A - \lambda I = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix} - \lambda \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 4-\lambda & 1 \\ 2 & 3-\lambda \end{pmatrix}$

Now, calculate the determinant:
$\det(A - \lambda I) = (4-\lambda)(3-\lambda) - (1)(2)$
$= 12 - 4\lambda - 3\lambda + \lambda^2 - 2$
$= \lambda^2 - 7\lambda + 10$

So, the characteristic equation is:
$\lambda^2 - 7\lambda + 10 = 0$

**Step 2: Solve for Eigenvalues**

We need to find the roots of this quadratic equation. This factors nicely:
$(\lambda - 2)(\lambda - 5) = 0$

The eigenvalues are $\lambda_1 = 2$ and $\lambda_2 = 5$.

**Step 3: Find the Eigenvectors**

**For $\lambda_1 = 2$:**
We solve $(A - 2I)\mathbf{v} = \mathbf{0}$.
$A - 2I = \begin{pmatrix} 4-2 & 1 \\ 2 & 3-2 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix}$

The system of equations is:
$\begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$

This gives us the equation $2v_1 + v_2 = 0$. The second row gives the same information, which is expected because the determinant is zero.
From $2v_1 + v_2 = 0$, we can say $v_2 = -2v_1$.

Let $v_1 = t$ (where $t$ is any non-zero scalar). Then $v_2 = -2t$.
So, an eigenvector is of the form $\mathbf{v} = \begin{pmatrix} t \\ -2t \end{pmatrix} = t \begin{pmatrix} 1 \\ -2 \end{pmatrix}$.

A common practice is to pick a simple non-zero value for $t$, like $t=1$.
So, an eigenvector for $\lambda_1 = 2$ is $\mathbf{v}_1 = \begin{pmatrix} 1 \\ -2 \end{pmatrix}$.

Let's check: $A\mathbf{v}_1 = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix} \begin{pmatrix} 1 \\ -2 \end{pmatrix} = \begin{pmatrix} 4(1) + 1(-2) \\ 2(1) + 3(-2) \end{pmatrix} = \begin{pmatrix} 4-2 \\ 2-6 \end{pmatrix} = \begin{pmatrix} 2 \\ -4 \end{pmatrix}$.
And $\lambda_1\mathbf{v}_1 = 2 \begin{pmatrix} 1 \\ -2 \end{pmatrix} = \begin{pmatrix} 2 \\ -4 \end{pmatrix}$.
They match! The direction is preserved, and it's scaled by 2.

**For $\lambda_2 = 5$:**
We solve $(A - 5I)\mathbf{v} = \mathbf{0}$.
$A - 5I = \begin{pmatrix} 4-5 & 1 \\ 2 & 3-5 \end{pmatrix} = \begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix}$

The system of equations is:
$\begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$

This gives us $-v_1 + v_2 = 0$, which means $v_1 = v_2$.
Let $v_1 = s$ (where $s$ is any non-zero scalar). Then $v_2 = s$.
So, an eigenvector is of the form $\mathbf{v} = \begin{pmatrix} s \\ s \end{pmatrix} = s \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.

Let's pick $s=1$.
So, an eigenvector for $\lambda_2 = 5$ is $\mathbf{v}_2 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.

Let's check: $A\mathbf{v}_2 = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix} \begin{pmatrix} 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 4(1) + 1(1) \\ 2(1) + 3(1) \end{pmatrix} = \begin{pmatrix} 5 \\ 5 \end{pmatrix}$.
And $\lambda_2\mathbf{v}_2 = 5 \begin{pmatrix} 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 5 \\ 5 \end{pmatrix}$.
They match again! The direction is preserved and scaled by 5.

**Summary for Example 1:**
Eigenvalues: $\lambda_1 = 2, \lambda_2 = 5$
Corresponding Eigenvectors: $\mathbf{v}_1 = \begin{pmatrix} 1 \\ -2 \end{pmatrix}, \mathbf{v}_2 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$ (or any non-zero scalar multiples of these).

---

### 6. Real-World Analogies and Examples for Information Science

Where do we see this in action?

*   **Vibrational Analysis in Engineering (and its digital echoes):** Imagine a bridge or a building. It has natural frequencies at which it tends to vibrate. If an external force (like wind or an earthquake) matches one of these natural frequencies, resonance can occur, leading to catastrophic failure. In structural analysis, the eigenvalues represent these natural frequencies, and the eigenvectors describe the shapes of the corresponding vibration modes. In digital signal processing, similar concepts appear when analyzing the stability or behavior of systems.

*   **Principal Component Analysis (PCA) in Machine Learning:** This is a huge one for Information Science! PCA is used for dimensionality reduction – simplifying complex datasets while retaining as much important information as possible. A dataset can be represented by a covariance matrix. The eigenvalues of this covariance matrix indicate the amount of variance (or "spread") in the data along the directions given by the corresponding eigenvectors. The eigenvectors are the "principal components" – these are the directions of maximum variance in the data. By keeping only the eigenvectors with the largest eigenvalues, we can reduce the number of dimensions while losing the least amount of information. This is a direct application of eigenvalues and eigenvectors to make data more manageable and models more efficient. This ties directly into understanding data's intrinsic structure, a core aspect of Information Science.

*   **Google's PageRank Algorithm:** While simplified in introductory explanations, the underlying principle of PageRank, which ranks web pages based on their importance, involves finding the dominant eigenvector of a massive matrix representing the link structure of the web. The PageRank score of each page is an entry in this eigenvector. This is a prime example of how eigenvalues and eigenvectors can rank importance and reveal hidden structures in large networks.

*   **Stability Analysis of Systems:** In dynamical systems, which are common in modeling various information processes (like queueing systems or network flows), eigenvalues can tell us about the stability of equilibrium points. If all eigenvalues have negative real parts, the system is stable. If any have positive real parts, it's unstable.

**Remember this:** Eigenvalues and eigenvectors reveal the intrinsic properties of a linear transformation or a system represented by a matrix. They tell you about the "preferred" directions and the scaling factors associated with them.

---

### 7. Properties and Special Cases

Let's touch upon some important properties that often come up in exams and are crucial for deeper understanding.

*   **Eigenvalues of Diagonal and Triangular Matrices:** This is a neat shortcut! For a diagonal matrix or an upper/lower triangular matrix, the eigenvalues are simply the entries on the main diagonal.
    *   Example: If $A = \begin{pmatrix} 3 & 0 \\ 0 & -1 \end{pmatrix}$, the eigenvalues are $3$ and $-1$.
    *   Example: If $A = \begin{pmatrix} 2 & 5 & 8 \\ 0 & -1 & 3 \\ 0 & 0 & 4 \end{pmatrix}$, the eigenvalues are $2, -1, 4$.

*   **Sum and Product of Eigenvalues:**
    *   The sum of the eigenvalues of a matrix is equal to its **trace** (the sum of the diagonal elements).
        $\sum_{i=1}^n \lambda_i = \text{trace}(A) = \sum_{i=1}^n a_{ii}$
    *   The product of the eigenvalues of a matrix is equal to its **determinant**.
        $\prod_{i=1}^n \lambda_i = \det(A)$

    These are fantastic for checking your work! If you calculate eigenvalues and their sum doesn't match the trace, or their product doesn't match the determinant, you've likely made an error.

*   **Eigenvalues of the Inverse Matrix:** If $A$ is invertible and $\lambda$ is an eigenvalue of $A$ with eigenvector $\mathbf{v}$, then $1/\lambda$ is an eigenvalue of $A^{-1}$ with the same eigenvector $\mathbf{v}$.
    *   Proof: $A\mathbf{v} = \lambda\mathbf{v}$. Multiply by $A^{-1}$: $A^{-1}A\mathbf{v} = A^{-1}\lambda\mathbf{v} \implies I\mathbf{v} = \lambda A^{-1}\mathbf{v} \implies \mathbf{v} = \lambda A^{-1}\mathbf{v}$. Since $\lambda \neq 0$ (because $A$ is invertible), we can divide by $\lambda$: $\frac{1}{\lambda}\mathbf{v} = A^{-1}\mathbf{v}$.

*   **Eigenvalues of $A^k$:** If $\lambda$ is an eigenvalue of $A$, then $\lambda^k$ is an eigenvalue of $A^k$.

*   **Eigenvectors of Symmetric Matrices:** A real symmetric matrix ($A^T = A$) has only real eigenvalues. Furthermore, eigenvectors corresponding to distinct eigenvalues of a real symmetric matrix are orthogonal. This is very useful, especially in applications like PCA where orthogonality simplifies calculations and interpretations. This connects to **CO3** concerning inner product spaces and orthonormality.

---

### 8. Diagonalization: A Powerful Transformation (CO1)

One of the most important applications of eigenvalues and eigenvectors is **diagonalization**. If a matrix $A$ has a set of $n$ linearly independent eigenvectors, then we can transform $A$ into a diagonal matrix $D$ using the eigenvectors.

Let $P$ be the matrix whose columns are the linearly independent eigenvectors of $A$.
Let $D$ be the diagonal matrix whose diagonal entries are the corresponding eigenvalues of $A$, in the same order as the eigenvectors in $P$.

Then, the relationship is:

$A = PDP^{-1}$

or equivalently,

$D = P^{-1}AP$

Why is this useful?
*   **Simplifies Matrix Powers:** Calculating $A^k$ can be very difficult. However, $A^k = (PDP^{-1})^k = PD P^{-1} P D P^{-1} \dots P D P^{-1} = PD^kP^{-1}$. Calculating $D^k$ is trivial – you just raise each diagonal element to the power of $k$. This is incredibly useful for analyzing the long-term behavior of systems.
*   **Understanding Transformations:** The diagonal matrix $D$ represents the same linear transformation as $A$, but in a coordinate system defined by the eigenvectors. In this "eigenbasis," the transformation is simply a scaling along each axis (the eigenvectors), which is much easier to understand.

**Condition for Diagonalization:** A matrix $A$ is diagonalizable if and only if it has $n$ linearly independent eigenvectors. For an $n \times n$ matrix, this typically happens if all its eigenvalues are distinct, or if for repeated eigenvalues, the geometric multiplicity (dimension of the eigenspace) equals the algebraic multiplicity (the number of times the eigenvalue is a root of the characteristic polynomial).

**Example of Diagonalization (using Example 1):**

For $A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$, we found eigenvalues $\lambda_1=2, \lambda_2=5$ and eigenvectors $\mathbf{v}_1 = \begin{pmatrix} 1 \\ -2 \end{pmatrix}, \mathbf{v}_2 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.

Let $P = \begin{pmatrix} 1 & 1 \\ -2 & 1 \end{pmatrix}$ (columns are eigenvectors)
Let $D = \begin{pmatrix} 2 & 0 \\ 0 & 5 \end{pmatrix}$ (diagonal entries are corresponding eigenvalues)

To verify $A = PDP^{-1}$, we first need $P^{-1}$.
For a $2 \times 2$ matrix $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$, the inverse is $\frac{1}{ad-bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$.
For $P$, $ad-bc = (1)(1) - (1)(-2) = 1 + 2 = 3$.
So, $P^{-1} = \frac{1}{3}\begin{pmatrix} 1 & -1 \\ 2 & 1 \end{pmatrix}$.

Now, let's compute $PDP^{-1}$:
$PD = \begin{pmatrix} 1 & 1 \\ -2 & 1 \end{pmatrix} \begin{pmatrix} 2 & 0 \\ 0 & 5 \end{pmatrix} = \begin{pmatrix} 1(2) & 1(5) \\ -2(2) & 1(5) \end{pmatrix} = \begin{pmatrix} 2 & 5 \\ -4 & 5 \end{pmatrix}$

$PDP^{-1} = \begin{pmatrix} 2 & 5 \\ -4 & 5 \end{pmatrix} \left( \frac{1}{3}\begin{pmatrix} 1 & -1 \\ 2 & 1 \end{pmatrix} \right)$
$= \frac{1}{3} \begin{pmatrix} 2 & 5 \\ -4 & 5 \end{pmatrix} \begin{pmatrix} 1 & -1 \\ 2 & 1 \end{pmatrix}$
$= \frac{1}{3} \begin{pmatrix} (2)(1)+(5)(2) & (2)(-1)+(5)(1) \\ (-4)(1)+(5)(2) & (-4)(-1)+(5)(1) \end{pmatrix}$
$= \frac{1}{3} \begin{pmatrix} 2+10 & -2+5 \\ -4+10 & 4+5 \end{pmatrix}$
$= \frac{1}{3} \begin{pmatrix} 12 & 3 \\ 6 & 9 \end{pmatrix}$
$= \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$

And behold! It's our original matrix $A$. This confirms our diagonalization. This process directly addresses **CO1**.

---

### 9. Common Pitfalls and Exam Tips

*   **Forgetting $\mathbf{v} \neq \mathbf{0}$:** While the definition requires $\mathbf{v}$ to be non-zero, when you solve $(A - \lambda I)\mathbf{v} = \mathbf{0}$, you *will* get the zero vector as a solution if you don't set up the equations correctly (e.g., if $\det(A-\lambda I) \neq 0$). Make sure you are finding the *non-trivial* solutions.
*   **Algebraic Mistakes:** Calculating determinants and solving polynomial equations can lead to errors. Double-check your arithmetic.
*   **Finding Eigenvectors Correctly:** Ensure you are solving the system $(A - \lambda I)\mathbf{v} = \mathbf{0}$ for *each* eigenvalue. Don't just guess; perform Gaussian elimination or substitution properly.
*   **Consistency in Eigenvectors:** When you find an eigenvector, any non-zero scalar multiple of it is also an eigenvector for the same eigenvalue. State your answer in a clear, standard form (e.g., using a parameter $t$ or picking the simplest integer representation).
*   **Diagonalization Condition:** Remember that not all matrices are diagonalizable. A common exam question is to ask if a matrix is diagonalizable. You need to check if there are $n$ linearly independent eigenvectors. If you get fewer than $n$ linearly independent eigenvectors (due to repeated eigenvalues where geometric multiplicity < algebraic multiplicity), the matrix is not diagonalizable.
*   **Eigenvalues vs. Eigenvectors:** Keep them straight! Eigenvalues are scalars ($\lambda$), eigenvectors are vectors ($\mathbf{v}$).
*   **Checking Your Work:** Always use the trace and determinant properties to check your computed eigenvalues.

---

### 10. Connection to Other Course Outcomes

We've seen how eigenvalues and eigenvectors are central to **CO1** (solving systems, eigenvalues/vectors, diagonalization). Let's briefly touch upon others:

*   **CO2 (Vector Spaces and Subspaces):** The **eigenspace** associated with an eigenvalue is a subspace of the vector space. Understanding eigenspaces helps us grasp the structure of the transformation represented by the matrix more deeply. It's where the "special behavior" happens.
*   **CO3 (Inner Product Spaces):** As mentioned, for symmetric matrices, eigenvectors corresponding to distinct eigenvalues are orthogonal. This is a direct link to orthogonalization processes and the properties of inner product spaces. Orthogonal eigenvectors form an orthonormal basis, which is incredibly useful.
*   **CO4 (Linear Transformations):** Eigenvalues and eigenvectors are fundamental characteristics of linear transformations. They reveal the directions along which the transformation acts purely as a scaling. Understanding them is key to analyzing the behavior of linear transformations in various contexts.

---

### Sample Questions with Answers

**Conceptual Questions:**

1.  **What is the geometric interpretation of an eigenvector of a matrix?**
    *   **Answer:** An eigenvector represents a direction that remains unchanged (except for scaling) when the linear transformation represented by the matrix is applied. It's a "special direction" where the transformation acts purely as stretching or shrinking.

2.  **Can a matrix have zero as an eigenvalue? If so, what does it imply about the matrix?**
    *   **Answer:** Yes, a matrix can have zero as an eigenvalue. If $\lambda=0$ is an eigenvalue, then there exists a non-zero eigenvector $\mathbf{v}$ such that $A\mathbf{v} = 0\mathbf{v} = \mathbf{0}$. This means that the matrix $A$ maps the non-zero vector $\mathbf{v}$ to the zero vector. This implies that the null space (or kernel) of $A$ is non-trivial, and therefore, the matrix $A$ is singular (not invertible).

3.  **If a $3 \times 3$ matrix has eigenvalues 2, 2, and 5, can you definitively say it is diagonalizable? Explain.**
    *   **Answer:** Not definitively. For a matrix to be diagonalizable, it needs 3 linearly independent eigenvectors. If the eigenvalue 2 has a geometric multiplicity of 2 (meaning there are 2 linearly independent eigenvectors associated with $\lambda=2$), then yes, it would be diagonalizable. However, if the geometric multiplicity of $\lambda=2$ is only 1, then there will only be 2 linearly independent eigenvectors in total (one for $\lambda=2$ and one for $\lambda=5$), and the matrix would not be diagonalizable. The algebraic multiplicity (how many times it appears as a root) doesn't guarantee the geometric multiplicity.

**Exam-Oriented Questions:**

1.  **Find the eigenvalues and eigenvectors of the matrix $A = \begin{pmatrix} 1 & 2 \\ 3 & 2 \end{pmatrix}$.**
    *   **Solution:**
        1.  **Characteristic Equation:**
            $A - \lambda I = \begin{pmatrix} 1-\lambda & 2 \\ 3 & 2-\lambda \end{pmatrix}$
            $\det(A - \lambda I) = (1-\lambda)(2-\lambda) - (2)(3) = 2 - \lambda - 2\lambda + \lambda^2 - 6 = \lambda^2 - 3\lambda - 4$
            Set to zero: $\lambda^2 - 3\lambda - 4 = 0$
        2.  **Eigenvalues:**
            Factoring the quadratic: $(\lambda - 4)(\lambda + 1) = 0$.
            Eigenvalues are $\lambda_1 = 4$ and $\lambda_2 = -1$.
        3.  **Eigenvectors:**
            *   For $\lambda_1 = 4$:
                $(A - 4I)\mathbf{v} = \begin{pmatrix} 1-4 & 2 \\ 3 & 2-4 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} -3 & 2 \\ 3 & -2 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$
                This gives $-3v_1 + 2v_2 = 0$, or $2v_2 = 3v_1$. Let $v_1=2$, then $v_2=3$.
                Eigenvector $\mathbf{v}_1 = \begin{pmatrix} 2 \\ 3 \end{pmatrix}$.
            *   For $\lambda_2 = -1$:
                $(A - (-1)I)\mathbf{v} = \begin{pmatrix} 1-(-1) & 2 \\ 3 & 2-(-1) \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 2 & 2 \\ 3 & 3 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$
                This gives $2v_1 + 2v_2 = 0$, or $v_1 = -v_2$. Let $v_2=1$, then $v_1=-1$.
                Eigenvector $\mathbf{v}_2 = \begin{pmatrix} -1 \\ 1 \end{pmatrix}$.
        *   **Check:**
            Trace(A) = 1 + 2 = 3. Sum of eigenvalues = 4 + (-1) = 3. (Matches)
            Det(A) = (1)(2) - (2)(3) = 2 - 6 = -4. Product of eigenvalues = (4)(-1) = -4. (Matches)

2.  **Given a matrix $A$ with eigenvalues $\lambda_1=3$ and $\lambda_2=-2$. What are the eigenvalues of $A^3$?**
    *   **Solution:**
        If $\lambda$ is an eigenvalue of $A$, then $\lambda^k$ is an eigenvalue of $A^k$.
        For $\lambda_1 = 3$, the corresponding eigenvalue for $A^3$ is $3^3 = 27$.
        For $\lambda_2 = -2$, the corresponding eigenvalue for $A^3$ is $(-2)^3 = -8$.
        The eigenvalues of $A^3$ are 27 and -8.

3.  **Consider the matrix $A = \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix}$. Find its eigenvalues and eigenvectors, and then diagonalize it if possible.**
    *   **Solution:**
        1.  **Characteristic Equation:**
            $A - \lambda I = \begin{pmatrix} 2-\lambda & 0 \\ 0 & 2-\lambda \end{pmatrix}$
            $\det(A - \lambda I) = (2-\lambda)(2-\lambda) - 0 = (2-\lambda)^2$
            Set to zero: $(2-\lambda)^2 = 0$.
        2.  **Eigenvalues:**
            The only eigenvalue is $\lambda=2$ with algebraic multiplicity 2.
        3.  **Eigenvectors:**
            For $\lambda=2$:
            $(A - 2I)\mathbf{v} = \begin{pmatrix} 2-2 & 0 \\ 0 & 2-2 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$
            This system gives $0v_1 + 0v_2 = 0$, which is true for any $v_1, v_2$.
            This means any non-zero vector is an eigenvector for $\lambda=2$. The eigenspace is $\mathbb{R}^2$.
            We can choose two linearly independent eigenvectors, for example:
            $\mathbf{v}_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$ and $\mathbf{v}_2 = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$.
            Since we found 2 linearly independent eigenvectors for a $2 \times 2$ matrix, it is diagonalizable.
        4.  **Diagonalization:**
            Let $P = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ (the identity matrix).
            Let $D = \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix}$ (the original matrix $A$).
            Since $P = I$, $P^{-1} = I$.
            $D = P^{-1}AP = I^{-1}AI = A = \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix}$.
            The matrix is already diagonal. The transformation in the basis of eigenvectors (which is the standard basis here) is just scaling by 2 along each axis.

---

That concludes our deep dive into eigenvalues and eigenvectors! Remember, these concepts are the bedrock for understanding matrix behavior and have far-reaching applications in information science. Keep practicing, and don't hesitate to revisit these notes. Good luck with your studies!
