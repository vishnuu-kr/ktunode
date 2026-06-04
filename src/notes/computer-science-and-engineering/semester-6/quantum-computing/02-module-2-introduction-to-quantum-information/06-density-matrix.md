---
title: "Density matrix"
subject: "QUANTUM COMPUTING"
module: "Module 2: Introduction to Quantum Information"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bd27"
status: "completed"
scrapedAt: "2026-05-20T16:56:54.441Z"
---
## Quantum Computing: Module 2 - Introduction to Quantum Information - Density Matrix

**Learning Outcomes:**

*   Understand the concept of a density matrix and its purpose.
*   Represent a quantum state using a density matrix.
*   Distinguish between pure and mixed states using the density matrix.
*   Calculate the density matrix for an ensemble of quantum systems.
*   Calculate expectation values of observables using the density matrix.
*   Understand the properties of density matrices.
*   Understand the Bloch sphere representation of density matrices for qubits.

### 1. Introduction to Density Matrices

*   **Motivation:** The density matrix is a powerful tool for describing quantum states, especially when dealing with:
    *   **Mixed States:** Ensembles of quantum systems where each system is not necessarily in the same pure state.
    *   **Partial Knowledge:** Situations where we don't have complete knowledge of the quantum system's state (e.g., due to decoherence or noisy preparation).
    *   **Subsystems:** When considering subsystems of a larger entangled system (partial trace).

*   **Definition:** The density matrix, denoted by ρ (rho), is an operator that describes the statistical state of a quantum system.  It's a generalization of the state vector description that can handle both pure and mixed states.

### 2. Representing Quantum States with Density Matrices

*   **Pure State:**  For a pure state represented by the state vector |ψ⟩, the density matrix is defined as:

    ```
    ρ = |ψ⟩⟨ψ|
    ```

    *   **Example:** If |ψ⟩ = α|0⟩ + β|1⟩, then:

        ```
        ρ = (α|0⟩ + β|1⟩)(α*⟨0| + β*⟨1|)
        ρ = |α|^2 |0⟩⟨0| + αβ* |0⟩⟨1| + α*β |1⟩⟨0| + |β|^2 |1⟩⟨1|
        ```
        In matrix form:
        ```
        ρ =  [[|α|^2, αβ*], [α*β, |β|^2]]
        ```
        where α and β are complex numbers and * denotes complex conjugate.

*   **Mixed State:**  A mixed state is a probabilistic mixture of pure states. Suppose we have an ensemble of quantum systems, where each system is in state |ψ<sub>i</sub>⟩ with probability p<sub>i</sub>. Then the density matrix for the mixed state is:

    ```
    ρ = Σ<sub>i</sub> p<sub>i</sub> |ψ<sub>i</sub>⟩⟨ψ<sub>i</sub>|
    ```

    *   **Key point:** The probabilities p<sub>i</sub> must sum to 1 (Σ<sub>i</sub> p<sub>i</sub> = 1).
    *   **Example:** Consider an ensemble where a qubit is in the state |0⟩ with probability 0.6 and in the state |1⟩ with probability 0.4. Then:

        ```
        ρ = 0.6 |0⟩⟨0| + 0.4 |1⟩⟨1|
        ρ = 0.6 * [[1, 0], [0, 0]] + 0.4 * [[0, 0], [0, 1]]
        ρ = [[0.6, 0], [0, 0.4]]
        ```

### 3. Distinguishing Pure and Mixed States

*   **Purity:** The purity of a state is defined as:

    ```
    γ = Tr(ρ<sup>2</sup>)
    ```
    where Tr denotes the trace of the matrix.

*   **Properties of Purity:**
    *   For a pure state: γ = 1
    *   For a mixed state: γ < 1
    *   For a completely mixed state (e.g., ρ = I/d, where I is the identity matrix and d is the dimension of the Hilbert space), γ = 1/d

*   **Example:**

    *   For the pure state  ρ = [[|α|^2, αβ*], [α*β, |β|^2]]  (with |α|^2 + |β|^2 = 1):

        ```
        ρ<sup>2</sup> = ρ * ρ
        Tr(ρ<sup>2</sup>) = |α|^4 + 2|α|^2|β|^2 + |β|^4 = (|α|^2 + |β|^2)<sup>2</sup> = 1<sup>2</sup> = 1
        ```
        So γ = 1, confirming it's a pure state.

    *   For the mixed state ρ = [[0.6, 0], [0, 0.4]]:

        ```
        ρ<sup>2</sup> = [[0.36, 0], [0, 0.16]]
        Tr(ρ<sup>2</sup>) = 0.36 + 0.16 = 0.52
        ```
        So γ = 0.52 < 1, confirming it's a mixed state.

### 4. Calculating the Density Matrix for an Ensemble

*   **As described in Section 2 (Mixed States).** The density matrix is the weighted sum of the outer products of each state in the ensemble, where the weights are the probabilities of finding the system in that state.

### 5. Calculating Expectation Values of Observables

*   **Expectation Value:** The expectation value of an observable represented by the operator A in the state described by the density matrix ρ is:

    ```
    ⟨A⟩ = Tr(ρA)
    ```

*   **Example:** Consider the Pauli-Z operator σ<sub>z</sub> = [[1, 0], [0, -1]] and the mixed state ρ = [[0.6, 0], [0, 0.4]].  Then:

    ```
    ⟨σ<sub>z</sub>⟩ = Tr(ρσ<sub>z</sub>)
    ρσ<sub>z</sub> = [[0.6, 0], [0, -0.4]]
    Tr(ρσ<sub>z</sub>) = 0.6 - 0.4 = 0.2
    ```
    Therefore, the expectation value of σ<sub>z</sub> is 0.2.

### 6. Properties of Density Matrices

*   **Hermitian:** ρ = ρ<sup>†</sup> (where † denotes the conjugate transpose).  This ensures that the eigenvalues of ρ are real.
*   **Positive Semi-definite:** All eigenvalues of ρ are non-negative (λ<sub>i</sub> ≥ 0).
*   **Trace = 1:** Tr(ρ) = 1. This corresponds to the normalization condition that the probabilities sum to 1.
*   **Eigenvalues represent probabilities:**  If ρ is diagonalized, the diagonal elements (eigenvalues) represent the probabilities of finding the system in the corresponding eigenstates.

### 7. Bloch Sphere Representation of Density Matrices for Qubits

*   **General Density Matrix for a Qubit:** Any 2x2 density matrix can be written in the form:

    ```
    ρ = 1/2 (I + r<sub>x</sub>σ<sub>x</sub> + r<sub>y</sub>σ<sub>y</sub> + r<sub>z</sub>σ<sub>z</sub>)
    ```

    where:
    *   I is the 2x2 identity matrix.
    *   σ<sub>x</sub>, σ<sub>y</sub>, and σ<sub>z</sub> are the Pauli matrices.
    *   r<sub>x</sub>, r<sub>y</sub>, and r<sub>z</sub> are real numbers.

*   **Bloch Vector:** The vector **r** = (r<sub>x</sub>, r<sub>y</sub>, r<sub>z</sub>) is called the Bloch vector.  It represents the state on the Bloch sphere.

*   **Pure State:** For a pure state, |**r**| = 1.  The Bloch vector lies on the surface of the Bloch sphere.

*   **Mixed State:** For a mixed state, |**r**| < 1. The Bloch vector lies inside the Bloch sphere.  The closer to the origin, the more mixed the state.

*   **Completely Mixed State:** For the completely mixed state ρ = I/2, the Bloch vector is **r** = (0, 0, 0). This is the center of the Bloch sphere.

*   **Example:**

    *   ρ = [[0.6, 0], [0, 0.4]] (from before)

        *   Tr(ρσ<sub>x</sub>) = 0  => r<sub>x</sub> = 0
        *   Tr(ρσ<sub>y</sub>) = 0  => r<sub>y</sub> = 0
        *   Tr(ρσ<sub>z</sub>) = 0.2 => r<sub>z</sub> = 0.2

        Therefore,  **r** = (0, 0, 0.2).  |**r**| = 0.2 < 1, indicating a mixed state.

### Important Points to Remember:

*   The density matrix provides a comprehensive way to describe quantum states, including mixed states and situations with partial knowledge.
*   The trace operation is essential for calculating purity and expectation values.
*   The Bloch sphere is a valuable tool for visualizing qubit states, including their degree of mixedness.
*   The properties of density matrices (Hermitian, positive semi-definite, trace=1) are crucial for ensuring that they represent physically valid quantum states.

### Practice Questions and Exercises

1.  **Calculate the density matrix for a qubit in the state |ψ⟩ = (1/√2)|0⟩ + (i/√2)|1⟩. Is this a pure or mixed state?**

    *   **Answer:**
        ```
        ρ = |ψ⟩⟨ψ| = ((1/√2)|0⟩ + (i/√2)|1⟩)((1/√2)⟨0| - (i/√2)⟨1|)
        ρ = (1/2) |0⟩⟨0| - (i/2) |0⟩⟨1| + (i/2) |1⟩⟨0| + (1/2) |1⟩⟨1|
        ρ = [[1/2, -i/2], [i/2, 1/2]]
        Tr(ρ<sup>2</sup>) = Tr([[1/2, -i/2], [i/2, 1/2]] * [[1/2, -i/2], [i/2, 1/2]]) = Tr([[1/2, -i/2], [i/2, 1/2]]) = 1.
        Since Tr(ρ<sup>2</sup>) = 1, it's a pure state.
        ```

2.  **Consider an ensemble where a qubit is in the state |+⟩ = (1/√2)(|0⟩ + |1⟩) with probability 0.8 and in the state |−⟩ = (1/√2)(|0⟩ - |1⟩) with probability 0.2. Calculate the density matrix and determine if it's pure or mixed.**

    *   **Answer:**
        ```
        |+⟩⟨+| = 1/2 [[1, 1], [1, 1]]
        |−⟩⟨−| = 1/2 [[1, -1], [-1, 1]]

        ρ = 0.8 * 1/2 [[1, 1], [1, 1]] + 0.2 * 1/2 [[1, -1], [-1, 1]]
        ρ = [[0.5, 0.3], [0.3, 0.5]]

        Tr(ρ<sup>2</sup>) = Tr([[0.34, 0.3], [0.3, 0.34]]) = 0.68

        Since Tr(ρ<sup>2</sup>) = 0.68 < 1, it's a mixed state.
        ```

3.  **For the density matrix ρ = [[0.7, 0.1], [0.1, 0.3]], calculate the expectation value of the Pauli-X operator (σ<sub>x</sub>).**

    *   **Answer:**
        σ<sub>x</sub> = [[0, 1], [1, 0]]
        ρσ<sub>x</sub> = [[0.1, 0.7], [0.3, 0.1]]
        ⟨σ<sub>x</sub>⟩ = Tr(ρσ<sub>x</sub>) = 0.1 + 0.1 = 0.2

4.  **A qubit has a density matrix ρ = 1/2(I + 0.5σ<sub>z</sub>). Find the Bloch vector for this qubit and classify it as a pure or mixed state.**

    *   **Answer:**
    Comparing ρ = 1/2 (I + r<sub>x</sub>σ<sub>x</sub> + r<sub>y</sub>σ<sub>y</sub> + r<sub>z</sub>σ<sub>z</sub>) with ρ = 1/2(I + 0.5σ<sub>z</sub>), we get:

        *   r<sub>x</sub> = 0
        *   r<sub>y</sub> = 0
        *   r<sub>z</sub> = 0.5

        Therefore, **r** = (0, 0, 0.5).

        |**r**| = √(0<sup>2</sup> + 0<sup>2</sup> + 0.5<sup>2</sup>) = 0.5 < 1. Thus, the state is mixed.

These notes provide a foundation for understanding density matrices in quantum information theory. Reviewing these concepts and working through the practice questions will solidify your knowledge. Good luck!
