---
title: "Review of Basics Concepts"
subject: "QUANTUM COMPUTING"
module: "Module 1: Review of Basics Concepts"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bd1c"
status: "completed"
scrapedAt: "2026-05-20T16:56:47.256Z"
---
## QUANTUM COMPUTING - MODULE 1: REVIEW OF BASIC CONCEPTS

**Topic: Review of Basics Concepts**

**Description:** This topic reviews fundamental concepts from linear algebra, complex numbers, probability, and classical computing that are essential for understanding quantum computing.

**Learning Outcomes:** Upon completion of this topic, you will be able to:

*   Understand and manipulate complex numbers.
*   Perform vector and matrix operations.
*   Understand the concepts of vector spaces, linear independence, basis, and inner product.
*   Calculate probabilities and conditional probabilities.
*   Understand the basics of classical bits and logic gates.

---

### 1. Complex Numbers

*   **Definition:** A complex number *z* is expressed as *z = a + bi*, where *a* and *b* are real numbers, and *i* is the imaginary unit with the property *i² = -1*.
    *   *a* is the real part of *z*, denoted as Re(z).
    *   *b* is the imaginary part of *z*, denoted as Im(z).

*   **Representation:** Complex numbers can be represented on a complex plane (Argand diagram) with the real part on the x-axis and the imaginary part on the y-axis.

*   **Complex Conjugate:** The complex conjugate of *z = a + bi* is *z*<sup>*</sup> = *a - bi*.

*   **Magnitude (Modulus):** The magnitude of *z* is |*z*| = √(*a*² + *b*²).  It represents the distance of the complex number from the origin in the complex plane.

*   **Polar Form:** A complex number can be expressed in polar form as *z = r(cos θ + i sin θ) = re<sup>iθ</sup>*, where:
    *   *r* = |*z*| is the magnitude.
    *   *θ* = arg(*z*) is the argument (angle) of *z*.  The argument is the angle formed with the positive real axis.

*   **Operations:**
    *   **Addition:** (a + bi) + (c + di) = (a + c) + (b + d)i
    *   **Subtraction:** (a + bi) - (c + di) = (a - c) + (b - d)i
    *   **Multiplication:** (a + bi)(c + di) = (ac - bd) + (ad + bc)i
    *   **Division:** (a + bi) / (c + di) = [(a + bi)(c - di)] / (c² + d²) =  [(ac + bd) + (bc - ad)i] / (c² + d²)

**Example:**

Let *z* = 3 + 4i.

*   Re(z) = 3
*   Im(z) = 4
*   *z*<sup>*</sup> = 3 - 4i
*   |*z*| = √(3² + 4²) = 5
*   θ = arctan(4/3) ≈ 0.927 radians

**Practice Question 1:**

Express the complex number *z = -1 + i* in polar form.

**Answer:**

*   |*z*| = √((-1)² + 1²) = √2
*   θ = arctan(1/-1) = arctan(-1). Since -1 + i is in the second quadrant, θ = 3π/4.
*   Therefore, *z = √2 * e<sup>i(3π/4)</sup>*.

**Important Point:** Complex numbers are essential because the amplitudes of quantum states are complex numbers.

---

### 2. Vectors and Matrices

*   **Vector:** A vector is an ordered list of numbers (scalars) that can represent a point in a vector space. In quantum computing, vectors often represent quantum states.  We often represent vectors as column vectors.

    *   Example:  |ψ⟩ =  [a, b]<sup>T</sup>  =
    [
    a
    b
    ]
    where a and b are scalars (usually complex).

*   **Matrix:** A matrix is a rectangular array of numbers (scalars) arranged in rows and columns.

    *   Example: A =
    [
    a b
    c d
    ]

*   **Vector Operations:**
    *   **Addition:** Add corresponding elements: [a, b]<sup>T</sup> + [c, d]<sup>T</sup> = [a + c, b + d]<sup>T</sup>
    *   **Scalar Multiplication:** Multiply each element by the scalar: k * [a, b]<sup>T</sup> = [ka, kb]<sup>T</sup>
    *   **Dot Product (Inner Product):**  For two vectors |ψ⟩ = [a, b]<sup>T</sup> and |φ⟩ = [c, d]<sup>T</sup>, the dot product is  ⟨ψ|φ⟩ = a<sup>*</sup>c + b<sup>*</sup>d  (notice the conjugate of the first vector).  The result is a scalar.

*   **Matrix Operations:**
    *   **Addition:** Add corresponding elements of matrices with the same dimensions.
    *   **Scalar Multiplication:** Multiply each element by the scalar.
    *   **Matrix Multiplication:** If A is an *m x n* matrix and B is an *n x p* matrix, then the product AB is an *m x p* matrix.  The element (i, j) of AB is the dot product of the i-th row of A and the j-th column of B.

*   **Special Matrices:**
    *   **Identity Matrix (I):** A square matrix with 1s on the diagonal and 0s elsewhere.  AI = IA = A.
    *   **Transpose (A<sup>T</sup>):**  Rows and columns are swapped.
    *   **Conjugate Transpose (A<sup>†</sup>) or Hermitian Transpose:**  Take the transpose and then the complex conjugate of each element.  A<sup>†</sup> = (A<sup>T</sup>)<sup>*</sup>. Important for quantum mechanics.
    *   **Unitary Matrix (U):** A matrix whose conjugate transpose is its inverse: U<sup>†</sup>U = UU<sup>†</sup> = I. Unitary matrices preserve the norm of vectors, which is crucial for preserving probabilities in quantum computing.

**Example:**

A =
[
1 2
3 4
]
B =
[
5 6
7 8
]

A + B =
[
6 8
10 12
]

A<sup>T</sup> =
[
1 3
2 4
]

Let |ψ⟩ = [1+i, 2]<sup>T</sup>. Then  |ψ⟩<sup>†</sup> = [1-i, 2].

**Practice Question 2:**

Given the matrices A =
[
1 0
0 -1
]
and B =
[
0 1
1 0
], calculate AB.

**Answer:**

AB =
[
(1*0 + 0*1) (1*1 + 0*0)
(0*0 + -1*1) (0*1 + -1*0)
]
=
[
0 1
-1 0
]

**Important Point:** Vectors represent quantum states (kets), and matrices represent quantum operations (gates).

---

### 3. Vector Spaces, Linear Independence, Basis, and Inner Product

*   **Vector Space:** A set of vectors with defined operations of addition and scalar multiplication that satisfy certain axioms (closure, associativity, existence of identity and inverse elements, distributivity).

*   **Linear Independence:** A set of vectors {v<sub>1</sub>, v<sub>2</sub>, ..., v<sub>n</sub>} is linearly independent if the only solution to the equation c<sub>1</sub>v<sub>1</sub> + c<sub>2</sub>v<sub>2</sub> + ... + c<sub>n</sub>v<sub>n</sub> = 0 is c<sub>1</sub> = c<sub>2</sub> = ... = c<sub>n</sub> = 0.  In other words, no vector in the set can be written as a linear combination of the others.

*   **Basis:** A set of linearly independent vectors that span the entire vector space. Any vector in the space can be written as a linear combination of the basis vectors. The number of vectors in a basis is called the dimension of the vector space.

*   **Inner Product (Dot Product):** A generalization of the dot product. It is a function that takes two vectors and returns a scalar.  In quantum mechanics, it defines the overlap between two quantum states. The inner product of |ψ⟩ and |φ⟩ is denoted as ⟨ψ|φ⟩.  Key properties include:
    *   ⟨ψ|φ⟩ = ⟨φ|ψ⟩<sup>*</sup> (complex conjugate symmetry)
    *   ⟨ψ|a|φ⟩ = a⟨ψ|φ⟩ (linearity)
    *   ⟨ψ|ψ⟩ ≥ 0, and ⟨ψ|ψ⟩ = 0 if and only if |ψ⟩ = 0 (positive definiteness)

*   **Orthonormal Basis:** A basis consisting of vectors that are orthogonal (inner product is zero) and normalized (magnitude is one). Orthonormal bases are particularly useful in quantum mechanics.

**Example:**

The vectors [1, 0]<sup>T</sup> and [0, 1]<sup>T</sup> form an orthonormal basis for the two-dimensional vector space R<sup>2</sup>.  They are linearly independent, span the space, are orthogonal (their dot product is zero), and have a magnitude of 1. This basis is often denoted |0⟩ and |1⟩ in quantum computing.

**Practice Question 3:**

Determine if the vectors [1, 2]<sup>T</sup> and [2, 4]<sup>T</sup> are linearly independent.

**Answer:**

No, they are not linearly independent.  2[1, 2]<sup>T</sup> = [2, 4]<sup>T</sup>.

**Important Point:** Understanding these concepts is vital for representing and manipulating quantum states. The bra-ket notation (⟨ψ| and |ψ⟩) introduced by Dirac is used extensively in quantum mechanics to represent vectors (kets) and their dual vectors (bras).

---

### 4. Probability and Conditional Probability

*   **Probability:** A measure of the likelihood of an event occurring, ranging from 0 (impossible) to 1 (certain).

*   **Probability Distribution:** A function that assigns probabilities to all possible outcomes of a random variable.  The sum of probabilities of all possible outcomes must equal 1.

*   **Conditional Probability:** The probability of an event A occurring given that event B has already occurred.  It's denoted as P(A|B) and calculated as:
    *   P(A|B) = P(A ∩ B) / P(B),  where P(A ∩ B) is the probability of both A and B occurring, and P(B) > 0.

*   **Independent Events:** Two events A and B are independent if P(A|B) = P(A) or P(B|A) = P(B).  This means the occurrence of one event does not affect the probability of the other.

**Example:**

Consider flipping a fair coin.

*   P(Heads) = 0.5
*   P(Tails) = 0.5

If we flip the coin twice, the events are independent.  The probability of getting heads on both flips is:

*   P(Heads on Flip 1 and Heads on Flip 2) = P(Heads on Flip 1) * P(Heads on Flip 2) = 0.5 * 0.5 = 0.25

**Practice Question 4:**

Suppose you have a bag with 3 red balls and 2 blue balls. What is the probability of drawing a red ball, then another red ball (without replacement)?

**Answer:**

*   P(Red on 1st draw) = 3/5
*   P(Red on 2nd draw | Red on 1st draw) = 2/4 = 1/2
*   P(Red on 1st and Red on 2nd) = (3/5) * (1/2) = 3/10

**Important Point:** Probability is crucial because measuring a quantum state yields a probabilistic outcome. Quantum mechanics predicts the probabilities of these outcomes.

---

### 5. Classical Bits and Logic Gates

*   **Bit:** The fundamental unit of information in classical computing. It can be either 0 or 1.

*   **Logic Gates:** Elementary building blocks of digital circuits that perform logical operations on one or more input bits to produce a single output bit. Common gates include:

    *   **NOT Gate:** Inverts the input bit (0 becomes 1, 1 becomes 0).
    *   **AND Gate:** Output is 1 only if both inputs are 1, otherwise 0.
    *   **OR Gate:** Output is 1 if at least one input is 1, otherwise 0.
    *   **XOR Gate:** Output is 1 if the inputs are different, otherwise 0.

*   **Truth Tables:** A table that defines the output of a logic gate for all possible combinations of input bits.

**Example:**

Truth Table for AND Gate:

| Input A | Input B | Output (A AND B) |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

**Practice Question 5:**

What is the output of an XOR gate with inputs A = 1 and B = 0?

**Answer:**

The output is 1.

**Important Point:** While quantum computers leverage quantum phenomena, they still perform computations. Understanding classical logic gates provides a foundation for understanding quantum gates, which are unitary operations on qubits.

---

### Key Concepts to Remember:

*   Complex numbers are essential for describing quantum amplitudes.
*   Vectors represent quantum states, and matrices represent quantum operations.
*   Linear algebra concepts (linear independence, basis, inner product) are fundamental for understanding quantum state spaces.
*   Probability governs the outcomes of quantum measurements.
*   Classical bits and logic gates provide a foundation for understanding qubits and quantum gates.

This review provides the essential mathematical and computational background for further study in quantum computing. Subsequent modules will build upon these concepts to explain qubits, quantum gates, quantum algorithms, and other advanced topics.
