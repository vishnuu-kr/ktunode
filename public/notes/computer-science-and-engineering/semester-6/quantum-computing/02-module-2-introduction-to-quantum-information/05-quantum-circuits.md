---
title: "Quantum circuits"
subject: "QUANTUM COMPUTING"
module: "Module 2: Introduction to Quantum Information"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bd26"
status: "completed"
scrapedAt: "2026-05-20T16:56:53.721Z"
---
# Quantum Computing: Module 2 - Introduction to Quantum Information
## Topic: Quantum Circuits

**Learning Outcomes:**

*   Understand the fundamental building blocks of quantum circuits: quantum gates.
*   Represent single-qubit and multi-qubit gates using matrices.
*   Describe and analyze common quantum gates: Pauli-X, Pauli-Y, Pauli-Z, Hadamard, Phase, CNOT, Toffoli.
*   Construct simple quantum circuits for basic quantum algorithms like superposition and entanglement.
*   Express quantum algorithms as sequences of quantum gates in a quantum circuit.
*   Understand the concepts of circuit equivalence and optimization.
*   Appreciate the role of quantum circuits in implementing quantum algorithms.

---

### 1. Introduction to Quantum Circuits

*   **Definition:** A quantum circuit is a computational routine consisting of coherent quantum operations (quantum gates) on qubits. It's analogous to classical circuits in classical computing but operates on quantum states.
*   **Purpose:**  Quantum circuits are used to represent and implement quantum algorithms.  They provide a visual and structured way to design and analyze quantum computations.
*   **Key Components:**
    *   **Qubits:**  The fundamental unit of quantum information.  Represented as horizontal lines in the circuit.  The number of qubits determines the size of the quantum register.
    *   **Quantum Gates:** Unitary transformations applied to qubits. Represented by symbols (boxes) in the circuit.
    *   **Measurements:**  Projective measurements performed at the end of the circuit to extract classical information from the qubits. Often represented by a meter symbol.
    *   **Initial State:** Typically, all qubits are initialized to the |0⟩ state at the beginning of the circuit.

### 2. Quantum Gates: The Building Blocks

*   **Definition:** Quantum gates are unitary operators that act on qubits. They transform the quantum state of the qubits.  Mathematically, they are represented by unitary matrices.
*   **Unitary Property:** A matrix *U* is unitary if *U<sup>†</sup>U = UU<sup>†</sup> = I*, where *U<sup>†</sup>* is the conjugate transpose of *U* and *I* is the identity matrix.  This property ensures that quantum operations are reversible and preserve the norm of the quantum state.
*   **Representation:** Quantum gates are represented as matrices that act on the state vector of the qubits. The dimension of the matrix depends on the number of qubits the gate acts on (e.g., 2x2 for single-qubit gates, 4x4 for two-qubit gates).

### 3. Single-Qubit Gates

*   These gates operate on a single qubit and transform its state.
*   **Pauli Gates:**
    *   **Pauli-X (X or NOT gate):**  Flips the state of the qubit. |0⟩ → |1⟩ and |1⟩ → |0⟩.
        *   Matrix representation:  `X = [[0, 1], [1, 0]]`
    *   **Pauli-Y (Y gate):** Applies a rotation around the Y-axis of the Bloch sphere and flips the state with a phase factor.
        *   Matrix representation:  `Y = [[0, -1j], [1j, 0]]`
    *   **Pauli-Z (Z gate):** Applies a phase flip if the qubit is in the |1⟩ state. |0⟩ → |0⟩ and |1⟩ → -|1⟩.
        *   Matrix representation:  `Z = [[1, 0], [0, -1]]`
*   **Hadamard Gate (H):** Creates a superposition of |0⟩ and |1⟩.
    *   |0⟩ → (|0⟩ + |1⟩) / √2
    *   |1⟩ → (|0⟩ - |1⟩) / √2
        *   Matrix representation:  `H = (1/√2) * [[1, 1], [1, -1]]`
*   **Phase Gate (S):** Applies a phase of *i* to the |1⟩ state.
    *   |0⟩ → |0⟩
    *   |1⟩ → *i*|1⟩
        *   Matrix representation:  `S = [[1, 0], [0, 1j]]`
*   **T Gate (π/8 gate):**  Applies a phase of *e<sup>iπ/4</sup>* to the |1⟩ state.  (Square root of the S gate up to a global phase).
        *   Matrix representation:  `T = [[1, 0], [0, exp(1j*pi/4)]]`
*   **Rotation Gates (R<sub>x</sub>, R<sub>y</sub>, R<sub>z</sub>):** Rotations around the X, Y, and Z axes of the Bloch sphere by an angle θ.
    *   `R_x(θ) = exp(-iθX/2) = [[cos(θ/2), -i*sin(θ/2)], [-i*sin(θ/2), cos(θ/2)]]`
    *   `R_y(θ) = exp(-iθY/2) = [[cos(θ/2), -sin(θ/2)], [sin(θ/2), cos(θ/2)]]`
    *   `R_z(θ) = exp(-iθZ/2) = [[exp(-iθ/2), 0], [0, exp(iθ/2)]]`

    *Note:* Rotation gates are crucial for implementing arbitrary single-qubit transformations.

### 4. Multi-Qubit Gates

*   These gates operate on two or more qubits.  They are essential for creating entanglement and performing complex quantum operations.
*   **Controlled-NOT Gate (CNOT):**  A two-qubit gate.
    *   The first qubit is the *control qubit*, and the second qubit is the *target qubit*.
    *   If the control qubit is |1⟩, the target qubit is flipped (X gate applied to the target). Otherwise, the target qubit remains unchanged.
    *   Truth table:
        *   |00⟩ → |00⟩
        *   |01⟩ → |01⟩
        *   |10⟩ → |11⟩
        *   |11⟩ → |10⟩
        *   Matrix representation (order matters! assuming control qubit is the first qubit): `CNOT = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]`
*   **Toffoli Gate (CCNOT):**  A three-qubit gate.
    *   The first two qubits are control qubits, and the third qubit is the target qubit.
    *   If both control qubits are |1⟩, the target qubit is flipped. Otherwise, the target qubit remains unchanged.
    *   Truth Table:  Only |111⟩ flips to |110⟩ and |110⟩ flips to |111⟩. all other combinations are unchanged.
    *   Matrix Representation (8x8): The matrix representation is sparse, with mostly zeros, and only two entries of 1 that swap the |110> and |111> amplitudes.
*   **SWAP Gate:** Swaps the states of two qubits.
    *   Matrix representation: `SWAP = [[1, 0, 0, 0], [0, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 1]]`

### 5. Quantum Circuit Examples

*   **Creating Superposition:** A simple circuit to put a qubit in an equal superposition using the Hadamard gate.

    ```
    qubit: |0> --- H ---
    ```

    The output state is (|0⟩ + |1⟩) / √2.

*   **Creating Entanglement (Bell State):** A circuit to create the Bell state |Φ<sup>+</sup>⟩ = (|00⟩ + |11⟩) / √2

    ```
    q0: |0> --- H --- CNOT ---
                      |
    q1: |0> ---------●-----
    ```

    Here, q0 is the control qubit and q1 is the target qubit for the CNOT gate.

*   **Deutsch's Algorithm (Simplified):** (Conceptual Example - More complex gate sequences exist)

    ```
    q0: |0> --- H --- U_f --- H --- Measure
                                 |
    q1: |1> --- H ---    X    ---
    ```

    Where U_f is a quantum oracle representing a function. Deutsch's algorithm demonstrates that a quantum computer can evaluate a property of a function (whether it's constant or balanced) with only one function evaluation, while a classical computer would require two.  This circuit demonstrates how gates work together to perform a specific algorithm.

### 6. Quantum Circuit Construction and Equivalence

*   **Building Circuits:**  Quantum algorithms are implemented by designing a sequence of quantum gates that perform the desired computation.
*   **Circuit Equivalence:** Two quantum circuits are equivalent if they produce the same output state (up to a global phase) for all possible input states.
*   **Circuit Optimization:**  The process of finding the shortest or most efficient quantum circuit that implements a given quantum algorithm.  This involves reducing the number of gates and minimizing the circuit depth (number of gates in sequence).  Common techniques include gate cancellation (e.g., applying two X gates in a row cancels each other out) and gate reordering.

### 7. Applying Gates: Mathematical Representation

*   **Single-Qubit Gate Application:** Multiplying the state vector of the qubit by the gate's matrix representation.
    *   Example: Applying the X gate to the state |0⟩:
        `X |0⟩ = [[0, 1], [1, 0]] * [[1], [0]] = [[0], [1]] = |1⟩`
*   **Multi-Qubit Gate Application:**
    *   Represent the multi-qubit state as a tensor product of single-qubit states.
    *   Represent the multi-qubit gate as a matrix that acts on the combined state space (e.g., 4x4 for two qubits, 8x8 for three qubits).
    *   Multiply the multi-qubit state vector by the gate's matrix.
    *   Example: Applying the CNOT gate to the state |00⟩:
        `CNOT |00⟩ = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]] * [[1], [0], [0], [0]] = [[1], [0], [0], [0]] = |00⟩`

### 8. Important Points to Remember

*   Quantum gates must be unitary.
*   The order of gates in a quantum circuit matters.
*   Quantum circuits are reversible (ideally, before measurement).
*   The complexity of a quantum algorithm is often measured by the number of gates required.
*   Quantum circuit optimization is crucial for reducing errors and improving the performance of quantum algorithms on real quantum computers.

---

### Practice Questions/Exercises:

1.  **What is the state of a qubit after applying a Hadamard gate followed by a Pauli-Z gate to the |0⟩ state?**

    *   **Solution:**
        *   H|0⟩ = (|0⟩ + |1⟩)/√2
        *   Z((|0⟩ + |1⟩)/√2) = (Z|0⟩ + Z|1⟩)/√2 = (|0⟩ - |1⟩)/√2

2.  **Write the matrix representation for a CNOT gate where the *second* qubit is the control qubit and the *first* is the target qubit.**

    *   **Solution:**  The CNOT matrix will swap the amplitudes for |01> and |11>.
        ```
        [[1, 0, 0, 0],
         [0, 0, 0, 1],
         [0, 0, 1, 0],
         [0, 1, 0, 0]]
        ```

3.  **Design a quantum circuit that creates the Bell state |Ψ<sup>-</sup>⟩ = (|01⟩ - |10⟩) / √2.**

    *   **Solution:**
        ```
        q0: |0> --- X --- H ---
                               |
        q1: |0> ----- ●----- Z----
        ```

        Explanation: Apply X on q0 to get |10>. Apply CNOT. Now the state is |11>. Apply Z gate on q1 to flip the phase of |11>, which is equivalent to flipping the sign in front of the |10>. Apply Hadamard to q0 to get |Ψ<sup>-</sup>⟩

4. **Simplify the following circuit:  H - H - X - X**

   * **Solution:** Since applying the same gate twice effectively cancels it out (H*H = I, X*X=I), the simplified circuit does nothing (identity operation).

5.  **Prove that the Hadamard gate is its own inverse (i.e., H<sup>2</sup> = I).**

    *   **Solution:**
        H = (1/√2) * [[1, 1], [1, -1]]
        H<sup>2</sup> = H * H = (1/2) * [[1, 1], [1, -1]] * [[1, 1], [1, -1]] = (1/2) * [[2, 0], [0, 2]] = [[1, 0], [0, 1]] = I

---
This expanded and detailed study note should provide a solid foundation for understanding quantum circuits. Remember to practice building circuits and working with the matrix representations of quantum gates to solidify your understanding. Good luck!
