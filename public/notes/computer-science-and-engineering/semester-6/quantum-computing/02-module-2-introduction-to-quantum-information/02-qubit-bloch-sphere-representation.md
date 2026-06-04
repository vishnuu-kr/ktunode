---
title: "Qubit – Bloch sphere representation"
subject: "QUANTUM COMPUTING"
module: "Module 2: Introduction to Quantum Information"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bd23"
status: "completed"
scrapedAt: "2026-05-20T16:56:51.584Z"
---
# Quantum Computing: Module 2 - Introduction to Quantum Information
## Topic: Qubit – Bloch Sphere Representation

**Learning Outcomes:**

*   Understand the concept of a qubit and how it differs from a classical bit.
*   Explain the principle of superposition and its significance in quantum computing.
*   Represent a qubit using Dirac notation (ket notation).
*   Describe the Bloch sphere representation and its parameters (θ and φ).
*   Visualize qubit states on the Bloch sphere.
*   Convert between a qubit's vector representation and its Bloch sphere coordinates.

### 1. Qubit vs. Classical Bit: Fundamental Differences

*   **Classical Bit:** A classical bit can be either 0 or 1. It exists in one definite state at any given time.
    *   **Representation:** Can be physically represented by voltage levels, switch positions, or any other bistable system.
    *   **Value:** Always either 0 or 1.
*   **Qubit (Quantum Bit):** A qubit, unlike a classical bit, can exist in a *superposition* of states 0 and 1.
    *   **Superposition:**  A qubit can be simultaneously in both states |0⟩ and |1⟩, or a combination thereof.
    *   **Measurement:** When measured, a qubit collapses to either 0 or 1, with probabilities determined by its superposition.
    *   **Representation:** Typically represented by quantum mechanical systems such as the spin of an electron, the polarization of a photon, or the energy levels of an atom.
    *   **States:** Mathematically described by a complex linear combination of the basis states |0⟩ and |1⟩.

### 2. Superposition: The Heart of Quantum Computing

*   **Definition:** Superposition is the ability of a quantum system to exist in multiple states simultaneously.  Think of it like a coin spinning in the air before it lands.
*   **Significance:**
    *   Allows quantum computers to explore multiple possibilities concurrently, providing a potential exponential speedup over classical algorithms for certain problems.
    *   Enables quantum entanglement, another crucial quantum phenomenon.

### 3. Dirac Notation (Ket Notation): Representing Quantum States

*   **Purpose:** A convenient notation for representing quantum states.
*   **Ket:** The notation |ψ⟩ represents a column vector describing the quantum state ψ.  This is called a "ket".
*   **Bra:** The notation ⟨ψ| represents the conjugate transpose (Hermitian conjugate) of the ket |ψ⟩.  This is called a "bra".
*   **Basis States:**
    *   |0⟩ represents the state corresponding to classical bit 0.  Often represented as the column vector  [1, 0]<sup>T</sup>.
    *   |1⟩ represents the state corresponding to classical bit 1.  Often represented as the column vector  [0, 1]<sup>T</sup>.
*   **General Qubit State:** A general qubit state |ψ⟩ can be written as a linear combination of the basis states:

    ```
    |ψ⟩ = α|0⟩ + β|1⟩
    ```

    Where α and β are complex numbers, and |α|² + |β|² = 1 (normalization condition).

    *   α and β are called *probability amplitudes*. |α|² gives the probability of measuring the qubit in the state |0⟩, and |β|² gives the probability of measuring the qubit in the state |1⟩.
*   **Example:**

    ```
    |ψ⟩ = (1/√2)|0⟩ + (1/√2)|1⟩
    ```

    In this case, α = β = 1/√2. The probability of measuring |0⟩ is (1/√2)² = 1/2, and the probability of measuring |1⟩ is also 1/2.

### 4. Bloch Sphere Representation

*   **Purpose:** Provides a visual representation of a qubit's state in a 3D space.
*   **Parameters:** The state of a qubit is defined by two angles:
    *   **θ (Theta):** The polar angle, ranging from 0 to π (0 to 180 degrees).
    *   **φ (Phi):** The azimuthal angle, ranging from 0 to 2π (0 to 360 degrees).
*   **Equation:** The general form of a qubit state |ψ⟩ represented on the Bloch sphere is:

    ```
    |ψ⟩ = cos(θ/2)|0⟩ + e^(iφ)sin(θ/2)|1⟩
    ```
    Where 'i' is the imaginary unit.
*   **Mapping:**
    *   |0⟩ is located at the north pole (θ = 0).
    *   |1⟩ is located at the south pole (θ = π).
    *   Superpositions are represented by points on the surface of the sphere.
*   **Visualization:** Imagine a sphere. The north and south poles represent |0⟩ and |1⟩, respectively. Any point on the sphere's surface corresponds to a valid qubit state.  The angles θ and φ define the position of that point.

### 5. Visualizing Qubit States on the Bloch Sphere

*   **|0⟩ State:** Lies at the north pole of the sphere (θ = 0, φ = arbitrary).
*   **|1⟩ State:** Lies at the south pole of the sphere (θ = π, φ = arbitrary).
*   **|+⟩ State (Equal Superposition):**  | + ⟩ = (1/√2)|0⟩ + (1/√2)|1⟩.  θ = π/2, φ = 0.  Lies on the equator of the sphere along the positive x-axis.
*   **|-⟩ State (Equal Superposition):** | - ⟩ = (1/√2)|0⟩ - (1/√2)|1⟩. θ = π/2, φ = π.  Lies on the equator of the sphere along the negative x-axis.
*   **|i⟩ State (Equal Superposition):** |i⟩ = (1/√2)|0⟩ + (i/√2)|1⟩. θ = π/2, φ = π/2.  Lies on the equator of the sphere along the positive y-axis.
*   **|-i⟩ State (Equal Superposition):** |-i⟩ = (1/√2)|0⟩ - (i/√2)|1⟩. θ = π/2, φ = 3π/2.  Lies on the equator of the sphere along the negative y-axis.

### 6. Converting Between Vector Representation and Bloch Sphere Coordinates

*   **From Vector to Bloch Sphere:**
    1.  Given |ψ⟩ = α|0⟩ + β|1⟩, where α and β are complex numbers.
    2.  Rewrite α and β in polar form: α = r<sub>1</sub>e<sup>iδ<sub>1</sub></sup> and β = r<sub>2</sub>e<sup>iδ<sub>2</sub></sup>, where r<sub>1</sub>, r<sub>2</sub> are real and non-negative.  Note:  r<sub>1</sub>² + r<sub>2</sub>² = 1
    3.  Determine θ and φ:
        *   θ = 2 arccos(r<sub>1</sub>)  (where arccos is the inverse cosine function)
        *   φ = δ<sub>2</sub> - δ<sub>1</sub>  (phase difference)
    *Note: If δ<sub>1</sub> and δ<sub>2</sub> are not given, and only α and β are known in rectangular form (a + bi), use the arctangent function:  δ<sub>1</sub> = arctan(imaginary(α) / real(α)) and δ<sub>2</sub> = arctan(imaginary(β) / real(β)). Be careful about the quadrant!*
*   **From Bloch Sphere to Vector:**
    1.  Given θ and φ.
    2.  Calculate α and β:
        *   α = cos(θ/2)
        *   β = e<sup>iφ</sup>sin(θ/2) = cos(φ)sin(θ/2) + i sin(φ)sin(θ/2)

### Practice Questions and Exercises

**Question 1:**

A qubit is in the state |ψ⟩ = (√3/2)|0⟩ + (1/2)i|1⟩.  Find θ and φ for its Bloch sphere representation.

**Answer:**

1.  α = √3/2 and β = (1/2)i
2.  α = (√3/2)e<sup>i0</sup>, so r<sub>1</sub> = √3/2 and δ<sub>1</sub> = 0.  (Imaginary part of α is 0)
3.  β = (1/2)e<sup>i(π/2)</sup>, so r<sub>2</sub> = 1/2 and δ<sub>2</sub> = π/2.  (i = e<sup>i(π/2)</sup>)
4.  θ = 2 arccos(√3/2) = 2(π/6) = π/3
5.  φ = δ<sub>2</sub> - δ<sub>1</sub> = π/2 - 0 = π/2

Therefore, θ = π/3 and φ = π/2.

**Question 2:**

A qubit is represented on the Bloch sphere by θ = π/2 and φ = π.  What is its vector representation (i.e., find α and β)?

**Answer:**

1.  α = cos(θ/2) = cos(π/4) = 1/√2
2.  β = e<sup>iφ</sup>sin(θ/2) = e<sup>iπ</sup>sin(π/4) = (-1)(1/√2) = -1/√2

Therefore, |ψ⟩ = (1/√2)|0⟩ - (1/√2)|1⟩.

**Question 3:**

What are the probabilities of measuring |0⟩ and |1⟩ for a qubit in the state |ψ⟩ = (√2/2)|0⟩ + (√2/2)e<sup>i(π/4)</sup>|1⟩?

**Answer:**

1.  α = √2/2
2.  β = (√2/2)e<sup>i(π/4)</sup>
3.  Probability of measuring |0⟩ = |α|² = (√2/2)² = 1/2
4.  Probability of measuring |1⟩ = |β|² = |(√2/2)e<sup>i(π/4)</sup>|² = (√2/2)² = 1/2

**Question 4:**

A qubit is in state (0.6)|0> + (0.8)|1>.
a) Does this qubit state satisfy the normalization condition?
b) What are the measurement probabilities of state |0> and |1>?

**Answer:**

a)  (0.6)^2 + (0.8)^2 = 0.36 + 0.64 = 1. Yes, the qubit state satisfies the normalization condition.
b) Measurement probability of state |0> = |0.6|^2 = 0.36
Measurement probability of state |1> = |0.8|^2 = 0.64

### Important Points to Remember

*   **Normalization:** The sum of the squares of the magnitudes of the probability amplitudes must equal 1 (|α|² + |β|² = 1). This ensures that the probabilities of measuring either |0⟩ or |1⟩ sum to 100%.
*   **Complex Numbers:**  Quantum states are described by complex numbers. Don't forget to deal with the phase information (the argument of the complex numbers).
*   **Bloch Sphere:** A powerful visualization tool, but it only represents single-qubit states. Multi-qubit states require more complex representations.
*   **Phase:** While the global phase of a qubit state (multiplying the entire state by a complex number with magnitude 1) doesn't affect measurement probabilities, *relative phase* (the difference between the phases of α and β) is crucial and directly affects the state's position on the Bloch sphere.

This comprehensive guide provides a solid foundation for understanding qubits and their representation on the Bloch sphere. By mastering these concepts, you'll be well-equipped to delve deeper into the exciting world of quantum computing.
