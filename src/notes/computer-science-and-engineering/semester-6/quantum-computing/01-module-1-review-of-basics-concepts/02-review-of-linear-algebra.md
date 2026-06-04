---
title: "Review of linear algebra"
subject: "QUANTUM COMPUTING"
module: "Module 1: Review of Basics Concepts"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bd1d"
status: "completed"
scrapedAt: "2026-05-20T16:56:47.965Z"
---
# Quantum Computing: Module 1 - Review of Basics Concepts
## Topic: Review of Linear Algebra

**Learning Outcomes:**

*   Understand and apply fundamental linear algebra concepts like vectors, matrices, and linear transformations.
*   Perform vector addition, scalar multiplication, and dot products.
*   Understand the concept of vector spaces, subspaces, and basis vectors.
*   Calculate matrix-vector multiplication and matrix-matrix multiplication.
*   Calculate the transpose, conjugate transpose (adjoint), determinant, and inverse of a matrix.
*   Understand and apply the concepts of eigenvalues, eigenvectors, and diagonalization.
*   Apply linear algebra concepts to represent quantum states and operations.
*   Understand inner products and norms in the context of quantum states.
*   Understand the concept of orthogonality and orthonormal bases.

---

### 1. Vectors

*   **Definition:** A vector is a mathematical object that has magnitude and direction.  In linear algebra, we represent vectors as ordered lists of numbers (components) within a coordinate system.  We can represent them as column vectors or row vectors.
    *   **Column Vector:**  `v = [v1, v2, ..., vn]^T`, where `v1, v2, ..., vn` are the components and `T` denotes the transpose.
    *   **Row Vector:** `v = [v1, v2, ..., vn]`

*   **Vector Addition:**  Adding two vectors is done component-wise.
    *   `v + w = [v1 + w1, v2 + w2, ..., vn + wn]^T`

*   **Scalar Multiplication:** Multiplying a vector by a scalar multiplies each component of the vector by that scalar.
    *   `c * v = [c*v1, c*v2, ..., c*vn]^T`

*   **Example:**
    *   `v = [1, 2]^T`, `w = [3, 4]^T`
    *   `v + w = [1+3, 2+4]^T = [4, 6]^T`
    *   `2 * v = [2*1, 2*2]^T = [2, 4]^T`

*   **Important Point:**  Vectors are the fundamental building blocks for representing quantum states.

### 2. Dot Product (Inner Product)

*   **Definition:** The dot product (also called inner product) of two vectors is a scalar value.  For real vectors:
    *   `v · w = v1*w1 + v2*w2 + ... + vn*wn = Σ vi*wi`
    *   For complex vectors, we use the conjugate transpose (adjoint) of the first vector:
    *   `<v|w> = v†w = v1*w1 + v2*w2 + ... + vn*wn` (where `v†` is the conjugate transpose of `v`, and `wi*` is the complex conjugate of `wi`)

*   **Properties:**
    *   Commutativity (for real vectors):  `v · w = w · v`
    *   Distributivity: `v · (w + u) = v · w + v · u`
    *   Scalar Multiplication: `(c*v) · w = c * (v · w)`

*   **Example:**
    *   `v = [1, 2]^T`, `w = [3, 4]^T`
    *   `v · w = (1*3) + (2*4) = 3 + 8 = 11`
    *   `v = [1+i, 2]^T`, `w = [3, 4-i]^T`
    *   `<v|w> = (1-i)*3 + 2*(4-i) = 3 - 3i + 8 - 2i = 11 - 5i`

*   **Important Point:** In quantum mechanics, the dot product is used to calculate probabilities and overlaps between quantum states.

### 3. Vector Spaces and Subspaces

*   **Definition: Vector Space:** A vector space is a set of vectors that satisfy specific axioms, allowing for vector addition and scalar multiplication.  These axioms ensure that the results of these operations remain within the vector space.

*   **Definition: Subspace:** A subspace is a subset of a vector space that is itself a vector space.  A subspace must contain the zero vector and be closed under vector addition and scalar multiplication.

*   **Examples:**
    *   R<sup>n</sup> (n-dimensional real space) is a vector space.
    *   C<sup>n</sup> (n-dimensional complex space) is a vector space.
    *   The set of all 2x2 matrices is a vector space.

### 4. Basis Vectors

*   **Definition:** A basis is a set of linearly independent vectors that span a vector space.  Linearly independent means that no vector in the set can be written as a linear combination of the other vectors.  Spanning means that any vector in the vector space can be written as a linear combination of the basis vectors.

*   **Standard Basis:**  The standard basis for R<sup>n</sup> is the set of vectors `e1 = [1, 0, ..., 0]^T`, `e2 = [0, 1, ..., 0]^T`, ..., `en = [0, 0, ..., 1]^T`.

*   **Example:** In R<sup>2</sup>, the standard basis is `{ [1, 0]^T, [0, 1]^T }`. Any vector `[x, y]^T` can be written as `x*[1, 0]^T + y*[0, 1]^T`.

*   **Important Point:**  Choosing a suitable basis is crucial for representing and manipulating quantum states effectively.  The computational basis (e.g., `|0>` and `|1>` in qubit systems) is a common choice.

### 5. Matrices

*   **Definition:** A matrix is a rectangular array of numbers (elements) arranged in rows and columns. An `m x n` matrix has `m` rows and `n` columns.

*   **Matrix-Vector Multiplication:**  The product of an `m x n` matrix `A` and an `n x 1` vector `v` is an `m x 1` vector `w`.
    *   `w = A * v`, where `wi = Σ Aij * vj` (summing from j=1 to n).

*   **Matrix-Matrix Multiplication:** The product of an `m x n` matrix `A` and an `n x p` matrix `B` is an `m x p` matrix `C`.
    *   `C = A * B`, where `Cik = Σ Aij * Bjk` (summing from j=1 to n).

*   **Example:**

    ```
    A = [[1, 2],
         [3, 4]]

    v = [5, 6]^T

    A * v = [[1*5 + 2*6],
             [3*5 + 4*6]] = [[17],
                            [39]]

    B = [[7, 8],
         [9, 10]]

    A * B = [[1*7 + 2*9, 1*8 + 2*10],
             [3*7 + 4*9, 3*8 + 4*10]] = [[25, 28],
                                         [57, 64]]
    ```

*   **Important Point:** Matrices are used to represent linear transformations, which are fundamental operations in quantum computing (e.g., quantum gates).

### 6. Matrix Operations: Transpose, Conjugate Transpose (Adjoint), Determinant, Inverse

*   **Transpose (A<sup>T</sup>):**  Interchange rows and columns of the matrix `A`.
    *   If `A = [Aij]`, then `A^T = [Aji]`.

*   **Conjugate Transpose (A† or A*):**  Take the transpose of the matrix and then take the complex conjugate of each element.  Also known as the adjoint.
    *   If `A = [Aij]`, then `A† = [Aji*]`, where `Aji*` is the complex conjugate of `Aji`.

*   **Determinant (det(A) or |A|):**  A scalar value that can be computed from the elements of a square matrix.  The determinant is zero if and only if the matrix is singular (not invertible).
    *   For a 2x2 matrix `A = [[a, b], [c, d]]`, `det(A) = ad - bc`.

*   **Inverse (A<sup>-1</sup>):**  A matrix that, when multiplied by the original matrix, results in the identity matrix.  A matrix has an inverse if and only if its determinant is non-zero.
    *   `A * A^-1 = A^-1 * A = I`, where `I` is the identity matrix.
    *   For a 2x2 matrix `A = [[a, b], [c, d]]`,  `A^-1 = (1/det(A)) * [[d, -b], [-c, a]]`.

*   **Example:**

    ```
    A = [[1, 2],
         [3, 4]]

    A^T = [[1, 3],
           [2, 4]]

    B = [[1+i, 2],
         [3, 4-i]]

    B† = [[1-i, 3],
           [2, 4+i]]

    det(A) = (1*4) - (2*3) = 4 - 6 = -2

    A^-1 = (1/-2) * [[4, -2],
                     [-3, 1]] = [[-2, 1],
                                   [1.5, -0.5]]
    ```

*   **Important Point:**  The conjugate transpose is crucial for defining unitary matrices, which represent quantum gates that preserve the norm of quantum states.  The determinant is essential for determining if a matrix is invertible.

### 7. Eigenvalues and Eigenvectors

*   **Definition:** An eigenvector of a square matrix `A` is a non-zero vector `v` that, when multiplied by `A`, results in a scalar multiple of itself.  The scalar is called the eigenvalue.
    *   `A * v = λ * v`, where `λ` is the eigenvalue and `v` is the eigenvector.

*   **Finding Eigenvalues:**  Eigenvalues are found by solving the characteristic equation: `det(A - λI) = 0`, where `I` is the identity matrix.

*   **Finding Eigenvectors:**  Once the eigenvalues are found, the corresponding eigenvectors can be found by solving the equation `(A - λI) * v = 0` for each eigenvalue `λ`.

*   **Diagonalization:** A matrix `A` is diagonalizable if it can be written in the form `A = PDP^-1`, where `D` is a diagonal matrix whose diagonal elements are the eigenvalues of `A`, and `P` is a matrix whose columns are the corresponding eigenvectors of `A`.

*   **Example:**

    ```
    A = [[2, 1],
         [1, 2]]

    det(A - λI) = det([[2-λ, 1],
                      [1, 2-λ]]) = (2-λ)^2 - 1 = λ^2 - 4λ + 3 = (λ - 1)(λ - 3) = 0

    Eigenvalues: λ1 = 1, λ2 = 3

    For λ1 = 1:
    (A - λ1I) * v = [[1, 1],
                     [1, 1]] * [x, y]^T = [0, 0]^T
    x + y = 0  =>  y = -x
    Eigenvector v1 = [1, -1]^T (or any scalar multiple of it)

    For λ2 = 3:
    (A - λ2I) * v = [[-1, 1],
                     [1, -1]] * [x, y]^T = [0, 0]^T
    -x + y = 0  =>  y = x
    Eigenvector v2 = [1, 1]^T (or any scalar multiple of it)

    P = [[1, 1],
         [-1, 1]]

    D = [[1, 0],
         [0, 3]]

    A = PDP^-1
    ```

*   **Important Point:** Eigenvalues and eigenvectors are essential for understanding the behavior of linear transformations and for simplifying calculations.  In quantum mechanics, they are used to find the possible outcomes of measurements.

### 8. Applying Linear Algebra to Quantum States and Operations

*   **Quantum States as Vectors:** Quantum states are represented as vectors in a complex Hilbert space.  A qubit (quantum bit) can be represented as a linear combination of the basis states `|0>` and `|1>`:
    *   `|ψ> = α|0> + β|1>`, where α and β are complex numbers and |α|<sup>2</sup> + |β|<sup>2</sup> = 1 (normalization condition).

*   **Quantum Operations as Matrices:**  Quantum gates (quantum operations) are represented as unitary matrices.  A unitary matrix `U` satisfies the condition `U†U = UU† = I`.

*   **Example:** The Hadamard gate (H gate) is a single-qubit gate represented by the matrix:

    ```
    H = (1/√2) * [[1, 1],
                  [1, -1]]
    ```

    Applying the H gate to the `|0>` state:

    ```
    H|0> = (1/√2) * [[1, 1],
                      [1, -1]] * [[1],
                                [0]] = (1/√2) * [[1],
                                                 [1]] = (1/√2)|0> + (1/√2)|1> = |+>
    ```

*   **Important Point:** Linear algebra provides the mathematical framework for describing and manipulating quantum states and operations.

### 9. Inner Products and Norms

*   **Inner Product (Already covered in Section 2):**
    *   For complex vectors `|v>` and `|w>`, the inner product is denoted as `<v|w>`.
    *   In Dirac notation:  `<v|w> = Σ vi*wi` (summing over all components)

*   **Norm (or Length) of a Vector:** The norm of a vector `|v>` is defined as the square root of the inner product of the vector with itself.
    *   `||v|| = √(<v|v>)`

*   **Example:**
    *   `|ψ> = (1/√2)|0> + (1/√2)|1>`
    *   `<ψ|ψ> = (1/√2)*(1/√2) + (1/√2)*(1/√2) = 1/2 + 1/2 = 1`
    *   `||ψ|| = √(<ψ|ψ>) = √1 = 1`

*   **Important Point:**  Quantum states are usually normalized (norm equals 1), which reflects the fact that the probabilities of all possible outcomes must sum to 1.

### 10. Orthogonality and Orthonormal Bases

*   **Orthogonality:** Two vectors `|v>` and `|w>` are orthogonal if their inner product is zero: `<v|w> = 0`.

*   **Orthonormal Basis:** An orthonormal basis is a set of basis vectors that are both orthogonal to each other and normalized (each vector has a norm of 1).
    *   `<bi|bj> = δij`, where `δij` is the Kronecker delta (1 if i=j, 0 if i≠j).

*   **Example:** The computational basis `{|0>, |1>}` is an orthonormal basis for the qubit space.
    *   `<0|0> = 1`, `<1|1> = 1`, `<0|1> = 0`, `<1|0> = 0`

*   **Important Point:** Orthonormal bases are essential for representing quantum states uniquely and for simplifying calculations.

---

### Practice Questions/Exercises:

1.  **Vector Operations:**
    *   Given `v = [2, -1, 3]^T` and `w = [1, 0, -2]^T`, calculate `v + w` and `3v`.
    *   **Answer:** `v + w = [3, -1, 1]^T`, `3v = [6, -3, 9]^T`

2.  **Dot Product:**
    *   Calculate the dot product of `v = [1, 2, 3]^T` and `w = [4, 5, 6]^T`.
    *   **Answer:** `v · w = (1*4) + (2*5) + (3*6) = 4 + 10 + 18 = 32`

3.  **Matrix-Vector Multiplication:**
    *   Given `A = [[1, 2], [3, 4]]` and `v = [5, 6]^T`, calculate `A * v`.
    *   **Answer:** `A * v = [[1*5 + 2*6], [3*5 + 4*6]] = [[17], [39]]`

4.  **Matrix Transpose and Conjugate Transpose:**
    *   Find the transpose of the matrix `A = [[1, 2], [3, 4]]`.
    *   Find the conjugate transpose of the matrix `B = [[1+i, 2], [3, 4-i]]`.
    *   **Answer:** `A^T = [[1, 3], [2, 4]]`, `B† = [[1-i, 3], [2, 4+i]]`

5.  **Matrix Inverse:**
    *   Find the inverse of the matrix `A = [[2, 1], [1, 1]]`.
    *   **Answer:** `det(A) = (2*1) - (1*1) = 1`, `A^-1 = (1/1) * [[1, -1], [-1, 2]] = [[1, -1], [-1, 2]]`

6.  **Eigenvalues and Eigenvectors:**
    *   Find the eigenvalues and eigenvectors of the matrix `A = [[0, 1], [1, 0]]`.
        *   **Answer:** `λ1 = 1, v1 = [1, 1]^T; λ2 = -1, v2 = [1, -1]^T`

7.  **Quantum State Normalization:**
    *   Is the quantum state `|ψ> = (1/2)|0> + (√3/2)|1>` normalized? Show your work.
    *   **Answer:** Yes, because `(1/2)^2 + (√3/2)^2 = 1/4 + 3/4 = 1`.

8.  **Orthogonality:** Are the vectors `v = [1, 0, 1]^T` and `w = [0, 1, 0]^T` orthogonal?
    * **Answer:** Yes, because `v · w = (1 * 0) + (0 * 1) + (1 * 0) = 0`

---

### Important Points to Remember:

*   **Vectors and Matrices:** These are fundamental mathematical objects used to represent quantum states and operations.
*   **Linear Transformations:** Quantum gates are linear transformations represented by matrices.
*   **Inner Product:** Used to calculate probabilities and overlaps between quantum states.
*   **Unitary Matrices:** Represent quantum gates that preserve the norm of quantum states.
*   **Eigenvalues and Eigenvectors:** Crucial for understanding the behavior of linear transformations and for finding the possible outcomes of measurements.
*   **Normalization:** Quantum states are usually normalized.
*   **Orthonormal Basis:**  Provides a convenient and unique way to represent quantum states.

This comprehensive review of linear algebra provides a solid foundation for understanding more advanced concepts in quantum computing.  Practice these concepts and exercises regularly to build your proficiency.
